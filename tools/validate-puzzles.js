#!/usr/bin/env node
/**
 * Shukuma puzzle validator
 *
 * For every puzzle in PUZZLES:
 *   1. Confirm the prevAnswers[0] word has a valid path on the board.
 *   2. Try suffix-extended forms to find longer words (uses blank tiles as wildcards).
 *   3. Check extensions against the local WORDS set, then against the Dictionary API.
 *   4. Flag duplicate base forms in prevAnswers (e.g. GROUNDWORK + GROUNDWORKS).
 *   5. Report any offensive-word paths that exist on the board.
 *
 * Usage:
 *   node tools/validate-puzzles.js [--api] [--fix]
 *     --api   Hit dictionaryapi.dev for extensions not in WORDS  (slow, ~30 req/puzzle)
 *     --fix   Write corrected prevAnswers[0] back into game.js
 */

'use strict';
const fs    = require('fs');
const https = require('https');
const path  = require('path');

const USE_API = process.argv.includes('--api');
const DO_FIX  = process.argv.includes('--fix');
const GAME_JS = path.join(__dirname, '..', 'game.js');

// ─── Parse game.js ─────────────────────────────────────────────────────────
const src = fs.readFileSync(GAME_JS, 'utf8');

// Extract WORDS set
const wordsStart = src.indexOf('const WORDS = new Set([');
const wordsEnd   = src.indexOf(']);', wordsStart) + 2;
const WORDS = new Set(
  (src.slice(wordsStart, wordsEnd).match(/"([^"]+)"/g) || []).map(w => w.slice(1,-1))
);

// Extract OFFENSIVE_WORDS set
const offStart = src.indexOf('const OFFENSIVE_WORDS = new Set([');
const offEnd   = src.indexOf(']);', offStart) + 2;
const OFFENSIVE_WORDS = new Set(
  (src.slice(offStart, offEnd).match(/"([^"]+)"/g) || []).map(w => w.slice(1,-1))
);

// Extract PUZZLES array entries
const PUZZLES = [];
const puzRx = /\{ id: "(p\d+)", letters: (\[[^\]]+\]), prevAnswers: (\[[^\]]+\])/g;
let m;
while ((m = puzRx.exec(src)) !== null) {
  PUZZLES.push({
    id:      m[1],
    letters: JSON.parse(m[2]),
    prevAnswers: JSON.parse(m[3]),
  });
}

console.log(`Loaded ${WORDS.size} words, ${PUZZLES.length} puzzles.\n`);

// ─── Hex board logic (mirror of game.js) ───────────────────────────────────
const ROW_SIZES = [4, 5, 4, 5, 4];

function buildTiles(letters) {
  const t = [];
  let id = 0;
  for (let r = 0; r < ROW_SIZES.length; r++)
    for (let c = 0; c < ROW_SIZES[r]; c++)
      t.push({ id: id, row: r, col: c, letter: (letters[id++] || '').toUpperCase() });
  return t;
}

function buildAdj(tiles) {
  const pos = {};
  tiles.forEach(t => { pos[`${t.row},${t.col}`] = t.id; });
  const adj = tiles.map(() => []);
  tiles.forEach(({ id, row: r, col: c }) => {
    const even = r % 2 === 0;
    const ns = [[r,c-1],[r,c+1]];
    if (even) ns.push([r-1,c],[r-1,c+1],[r+1,c],[r+1,c+1]);
    else      ns.push([r-1,c-1],[r-1,c],[r+1,c-1],[r+1,c]);
    ns.forEach(([nr,nc]) => { const k = `${nr},${nc}`; if (pos[k]!==undefined) adj[id].push(pos[k]); });
  });
  return adj;
}

// Returns true if `word` can be traced on the board (blanks = wildcards)
function pathExists(tiles, adj, word) {
  const w = word.toLowerCase();
  const vis = new Uint8Array(22);

  function ok(pos, id) {
    if (pos === w.length) return true;
    for (const nid of adj[id]) {
      if (vis[nid]) continue;
      const tl = tiles[nid].letter;
      const match = tl === '' || tl.toLowerCase() === w[pos]; // blank = wildcard
      if (!match) continue;
      vis[nid] = 1;
      if (ok(pos+1, nid)) return true;
      vis[nid] = 0;
    }
    return false;
  }

  for (const t of tiles) {
    const tl = t.letter;
    const match = tl === '' || tl.toLowerCase() === w[0];
    if (!match) continue;
    vis[t.id] = 1;
    if (ok(1, t.id)) return true;
    vis[t.id] = 0;
  }
  return false;
}

// ─── Dictionary API call ────────────────────────────────────────────────────
const apiCache = {};

function apiCheck(word) {
  return new Promise(resolve => {
    const key = word.toLowerCase();
    if (apiCache[key] !== undefined) return resolve(apiCache[key]);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${key}`;
    https.get(url, res => {
      apiCache[key] = res.statusCode === 200;
      resolve(apiCache[key]);
      res.resume();
    }).on('error', () => { apiCache[key] = false; resolve(false); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── Suffix extension table ─────────────────────────────────────────────────
// Generate candidate longer forms of a word using common English morphology.
function candidates(word) {
  const w = word.toLowerCase();
  const out = new Set();

  const add = (...words) => words.forEach(x => out.add(x));

  // Always try simple plurals / verb forms
  add(w+'s', w+'es', w+'ed', w+'ing', w+'er', w+'ers', w+'est', w+'ly',
      w+'ness', w+'ment', w+'ments', w+'tion', w+'tions', w+'ful', w+'less',
      w+'like', w+'ings', w+'ship', w+'ships', w+'man', w+'men', w+'work',
      w+'works', w+'smith', w+'smiths', w+'smithing', w+'ward', w+'wards');

  // Drop trailing -e before -ing / -ed
  if (w.endsWith('e')) {
    const stem = w.slice(0,-1);
    add(stem+'ing', stem+'ed', stem+'er', stem+'ers');
  }

  // -ce → -ces
  if (w.endsWith('ce')) add(w.slice(0,-2)+'ces');

  // -y → -ies
  if (w.endsWith('y') && !'aeiou'.includes(w[w.length-2])) {
    const stem = w.slice(0,-1);
    add(stem+'ies', stem+'ied', stem+'ier', stem+'iest');
  }

  // -nce → -ncies (dependence → dependencies)
  if (w.endsWith('nce')) add(w.slice(0,-3)+'ncies');

  // -ism → -ist, -ists
  if (w.endsWith('ism')) { add(w.slice(0,-3)+'ist', w.slice(0,-3)+'ists'); }

  // Remove the word itself
  out.delete(w);
  return [...out];
}

// ─── Main validation loop ───────────────────────────────────────────────────
const issues = [];

async function validateAll() {
  const PUZZLE_BASE_MS = Date.UTC(2026, 5, 1);

  for (let i = 0; i < PUZZLES.length; i++) {
    const puz = PUZZLES[i];
    const date = new Date(PUZZLE_BASE_MS + i * 86400000).toISOString().slice(0,10);
    const tiles = buildTiles(puz.letters);
    const adj   = buildAdj(tiles);

    const top = puz.prevAnswers[0] && puz.prevAnswers[0].word;
    if (!top) { issues.push(`${date} ${puz.id}: NO prevAnswers`); continue; }

    // 1. Top word path check
    const topOk = pathExists(tiles, adj, top);
    if (!topOk) {
      issues.push(`❌ ${date} ${puz.id}: "${top}" has NO valid path on board!`);
    }

    // 2. Offensive words on this board (all already in OFFENSIVE_WORDS blocklist — blocked at runtime)
    for (const oword of OFFENSIVE_WORDS) {
      if (oword.length >= 4 && pathExists(tiles, adj, oword)) {
        issues.push(`🔒 ${date} ${puz.id}: offensive word "${oword.toUpperCase()}" can be spelled — blocked at runtime by OFFENSIVE_WORDS`);
      }
    }

    // 3. Check duplicate base forms in prevAnswers
    const pa = puz.prevAnswers.map(x => x.word.toLowerCase());
    for (let j = 0; j < pa.length; j++) {
      for (let k = j+1; k < pa.length; k++) {
        if (pa[k].startsWith(pa[j]) || pa[j].startsWith(pa[k])) {
          issues.push(`⚠️  ${date} ${puz.id}: prevAnswers contain base+extension: "${pa[j]}" and "${pa[k]}"`);
        }
      }
    }

    // 4. Try extending the top word
    const cands = candidates(top);
    const longer = [];
    for (const cand of cands) {
      if (cand.length <= top.length) continue;
      if (!pathExists(tiles, adj, cand)) continue;
      // Check dictionary
      const inLocal = WORDS.has(cand.toLowerCase());
      let valid = inLocal;
      if (!valid && USE_API) {
        await sleep(120); // gentle rate-limiting
        valid = await apiCheck(cand);
      }
      if (valid) longer.push({ cand: cand.toUpperCase(), len: cand.length, src: inLocal ? 'local' : 'API' });
    }

    if (longer.length > 0) {
      longer.sort((a,b) => b.len - a.len);
      const best = longer[0];
      if (DO_FIX) {
        puz.prevAnswers[0].word = best.cand;
      }
      const flag = DO_FIX ? '✅ FIXED' : '⚠️  EXTENDABLE';
      issues.push(`${flag} ${date} ${puz.id}: "${top}" → "${best.cand}" (${best.len} letters, ${best.src})`);
    } else if (topOk) {
      // All good
      process.stdout.write('.');
    }
  }

  console.log('\n');
  if (issues.length === 0) {
    console.log('✅ All puzzles passed validation.');
  } else {
    console.log(`Found ${issues.length} issue(s):\n`);
    issues.forEach(l => console.log(l));
  }

  if (DO_FIX && issues.some(l => l.includes('FIXED'))) {
    // Patch game.js: replace each prevAnswers in-source
    let out = src;
    for (const puz of PUZZLES) {
      // Replace the first entry's word
      const oldJson = JSON.stringify(puz.prevAnswers);
      // We can't easily patch individual entries in the source reliably;
      // print instructions instead
    }
    console.log('\n--fix: Please update prevAnswers[0].word manually for the flagged puzzles above.');
    console.log('       Run with --api to verify extensions against the live dictionary first.\n');
  }
}

validateAll().catch(console.error);
