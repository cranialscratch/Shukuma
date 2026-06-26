#!/usr/bin/env node
'use strict';
/**
 * fix-offensive-puzzles.js
 *
 * Scans all puzzles and, for each one where an offensive word can be traced on
 * the board, replaces exactly one tile letter (chosen to avoid the target word
 * path whenever possible) so the offensive path no longer exists.
 *
 * Usage: node tools/fix-offensive-puzzles.js
 * Writes the patched result back to game.js in-place.
 */

const fs   = require('fs');
const path = require('path');
const GAME_JS = path.join(__dirname, '..', 'game.js');
let src = fs.readFileSync(GAME_JS, 'utf8');

// ─── Extract OFFENSIVE_WORDS ──────────────────────────────────────────────────
const offStart = src.indexOf('const OFFENSIVE_WORDS = new Set([');
const offEnd   = src.indexOf(']);', offStart) + 2;
const OFFENSIVE_WORDS = [
  ...(src.slice(offStart, offEnd).match(/"([^"]+)"/g) || []).map(w => w.slice(1,-1).toLowerCase())
].filter(w => w.length >= 3);

// ─── Extract PUZZLES ──────────────────────────────────────────────────────────
const PUZZLES = [];
const puzRx = /\{ id: "(p\d+)", letters: (\[[^\]]+\]), prevAnswers: (\[[^\]]+\])/g;
let m;
while ((m = puzRx.exec(src)) !== null) {
  PUZZLES.push({
    id:           m[1],
    letters:      JSON.parse(m[2]),
    prevAnswers:  JSON.parse(m[3]),
    origLetterSrc: m[2],
  });
}
console.log(`Loaded ${OFFENSIVE_WORDS.length} offensive words, ${PUZZLES.length} puzzles.\n`);

// ─── Hex board geometry ───────────────────────────────────────────────────────
const ROW_SIZES = [4, 5, 4, 5, 4];

function buildTiles(letters) {
  const t = []; let id = 0;
  for (let r = 0; r < ROW_SIZES.length; r++)
    for (let c = 0; c < ROW_SIZES[r]; c++)
      t.push({ id: id, row: r, col: c, letter: (letters[id++] || '').toLowerCase() });
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
    ns.forEach(([nr,nc]) => {
      const k = `${nr},${nc}`;
      if (pos[k] !== undefined) adj[id].push(pos[k]);
    });
  });
  return adj;
}

// Returns array of tile IDs for the first valid path, or null
function findPath(tiles, adj, word) {
  const w = word.toLowerCase();
  const vis = new Uint8Array(22);
  let found = null;

  function dfs(pos, id, path) {
    if (pos === w.length) { found = path.slice(); return true; }
    for (const nid of adj[id]) {
      if (vis[nid]) continue;
      const tl = tiles[nid].letter;
      if (tl !== '' && tl !== w[pos]) continue; // blank = wildcard
      vis[nid] = 1; path.push(nid);
      if (dfs(pos + 1, nid, path)) return true;
      path.pop(); vis[nid] = 0;
    }
    return false;
  }

  for (const t of tiles) {
    const tl = t.letter;
    if (tl !== '' && tl !== w[0]) continue;
    vis[t.id] = 1;
    if (dfs(1, t.id, [t.id])) return found;
    vis[t.id] = 0;
  }
  return null;
}

// ─── Safe replacement letter ──────────────────────────────────────────────────
// Cycles through the alphabet to find a letter that:
//  a) Is different from `current`
//  b) Won't form any of the offensive words when placed at `tileId`
//  (We pick the first one that's different — full checking would be slow)
function safeReplacement(current) {
  current = current.toUpperCase();
  // Try letters in order: favour ones far from the original
  const order = 'BCDFGHJKLMNPQRSTVWXYZAE'.split('').filter(l => l !== current);
  return order[0]; // first candidate
}

// ─── Main fix loop ────────────────────────────────────────────────────────────
let totalFixes = 0;
const patchedPuzzles = new Map(); // id → new letters array

for (const puz of PUZZLES) {
  let letters = puz.letters.slice(); // mutable copy

  for (const oword of OFFENSIVE_WORDS) {
    let tiles = buildTiles(letters);
    let adj   = buildAdj(tiles);
    let offPath = findPath(tiles, adj, oword);
    if (!offPath) continue;

    // Get target word path so we avoid changing those tiles if possible
    const targetWord = (puz.prevAnswers[0] && puz.prevAnswers[0].word) || '';
    const targetPath = targetWord ? (findPath(tiles, adj, targetWord) || []) : [];
    const targetSet  = new Set(targetPath);

    // Try to break all paths for this offensive word
    while (offPath) {
      // Prefer tiles NOT in the target word path; fall back to any tile
      const breakable = offPath.filter(id => !targetSet.has(id));
      const candidates = breakable.length > 0 ? breakable : offPath;
      // Pick the tile in the middle of the path (avoids changing obvious first/last letters)
      const tileId = candidates[Math.floor(candidates.length / 2)];
      const oldLetter = letters[tileId].toUpperCase();
      const newLetter = safeReplacement(oldLetter);

      letters[tileId] = newLetter;
      console.log(`  ${puz.id} tile[${tileId}] "${oldLetter}"→"${newLetter}" blocks "${oword.toUpperCase()}"${targetSet.has(tileId) ? ' ⚠️  (target path tile — may need manual check)' : ''}`);
      totalFixes++;

      // Re-check with updated letters
      tiles   = buildTiles(letters);
      adj     = buildAdj(tiles);
      offPath = findPath(tiles, adj, oword);
    }

    // Verify target word still exists (or warn)
    if (targetWord) {
      tiles = buildTiles(letters);
      adj   = buildAdj(tiles);
      if (!findPath(tiles, adj, targetWord)) {
        console.warn(`  ⚠️  ${puz.id}: target word "${targetWord}" no longer traceable — manual review needed!`);
      }
    }
  }

  if (letters.some((l, i) => l !== puz.letters[i])) {
    patchedPuzzles.set(puz.id, { puz, letters });
  }
}

if (totalFixes === 0) {
  console.log('\nNo offensive paths found — no changes made.');
  process.exit(0);
}

console.log(`\n${totalFixes} fix(es) across ${patchedPuzzles.size} puzzle(s). Patching game.js…\n`);

// ─── Patch game.js ────────────────────────────────────────────────────────────
let out = src;
for (const { puz, letters } of patchedPuzzles.values()) {
  const oldLetterSrc = puz.origLetterSrc;
  const newLetterSrc = JSON.stringify(letters);
  // Anchor the replacement to the specific puzzle id to avoid false matches
  const searchStr  = `id: "${puz.id}", letters: ${oldLetterSrc}`;
  const replaceStr = `id: "${puz.id}", letters: ${newLetterSrc}`;
  if (!out.includes(searchStr)) {
    console.warn(`Could not locate ${puz.id} letters in source — skipping`);
    continue;
  }
  out = out.replace(searchStr, replaceStr);
}

fs.writeFileSync(GAME_JS, out, 'utf8');
console.log('game.js patched successfully.');
