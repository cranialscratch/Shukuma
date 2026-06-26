#!/usr/bin/env node
// tools/seed-demo-accounts.js
// Creates 5 demo Firebase accounts with 14 days of pre-populated scores.
// Uses Firebase REST API — no service account needed, just the web API key.
// Run: node tools/seed-demo-accounts.js
// Delete accounts afterwards via Firebase Console > Authentication.

'use strict';
const https = require('https');

// ─── Config ──────────────────────────────────────────────────────────────────
const API_KEY      = 'AIzaSyAfBsrmj7_DDxIlYmwmF9xNqYGccTiinMY';
const PROJECT_ID   = 'shukuma-b09bf';
const AUTH_BASE    = 'identitytoolkit.googleapis.com';
const FS_BASE      = 'firestore.googleapis.com';
const PASSWORD     = 'Demo1234!';
const DAYS_BACK    = 14;

// ─── Demo profiles ───────────────────────────────────────────────────────────
// scoreRange: [min, max] letters per day (simulated)
const DEMO_USERS = [
  { username: 'bettyb',  email: 'betty.beginner@demo.shukuma.com', scoreRange: [3, 5],  missChance: 0.3 },
  { username: 'alexavg', email: 'alex.average@demo.shukuma.com',   scoreRange: [5, 7],  missChance: 0.1 },
  { username: 'marcusm', email: 'marcus.master@demo.shukuma.com',  scoreRange: [9, 12], missChance: 0.05 },
  { username: 'gracegm', email: 'grace.gm@demo.shukuma.com',       scoreRange: [13,15], missChance: 0 },
  { username: 'ivani',   email: 'ivan.inconsistent@demo.shukuma.com', scoreRange: [3, 14], missChance: 0.2 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function rand(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }

function getScoreLevel(n) {
  if (n <= 4)  return 'Below Average';
  if (n <= 6)  return 'Average';
  if (n <= 10) return 'Above Average';
  if (n <= 14) return 'Master';
  return 'Grandmaster';
}

function getDateStr(daysBack) {
  const d = new Date();
  d.setDate(d.getDate() - daysBack);
  return String(d.getDate()).padStart(2,'0') +
         String(d.getMonth()+1).padStart(2,'0') +
         String(d.getFullYear()).slice(-2);
}

// Simple HTTP JSON helper
function request(method, host, path, body, token) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : '';
    const opts = {
      hostname: host,
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        ...(token ? { Authorization: 'Bearer ' + token } : {}),
      },
    };
    const req = https.request(opts, res => {
      let buf = '';
      res.on('data', c => { buf += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); }
        catch { resolve(buf); }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function authSignUp(email, password, username) {
  return request('POST', AUTH_BASE,
    `/v1/accounts:signUp?key=${API_KEY}`,
    { email, password, displayName: username, returnSecureToken: true });
}

async function authSignIn(email, password) {
  return request('POST', AUTH_BASE,
    `/v1/accounts:signInWithPassword?key=${API_KEY}`,
    { email, password, returnSecureToken: true });
}

// Firestore REST: set a document (creates or overwrites)
async function fsSet(token, collection, docId, fields) {
  // Convert JS object to Firestore field map
  function toFsValue(v) {
    if (v === null || v === undefined) return { nullValue: null };
    if (typeof v === 'boolean')  return { booleanValue: v };
    if (typeof v === 'number')   return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
    if (typeof v === 'string')   return { stringValue: v };
    if (Array.isArray(v))        return { arrayValue: { values: v.map(toFsValue) } };
    if (typeof v === 'object') {
      const mapFields = {};
      for (const [k, val] of Object.entries(v)) mapFields[k] = toFsValue(val);
      return { mapValue: { fields: mapFields } };
    }
    return { stringValue: String(v) };
  }

  const fsFields = {};
  for (const [k, val] of Object.entries(fields)) fsFields[k] = toFsValue(val);

  const docPath = `/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collection}/${docId}`;
  return request('PATCH', FS_BASE, docPath, { fields: fsFields }, token);
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function seedUser(profile) {
  const { username, email, scoreRange, missChance } = profile;
  console.log(`\nSeeding ${username} (${email})…`);

  // Sign up or sign in
  let idToken, uid;
  let res = await authSignUp(email, PASSWORD, username);
  if (res.error) {
    if (res.error.message === 'EMAIL_EXISTS') {
      console.log(`  Account exists — signing in`);
      res = await authSignIn(email, PASSWORD);
    } else {
      console.error(`  Auth error: ${JSON.stringify(res.error)}`);
      return;
    }
  }
  idToken = res.idToken;
  uid     = res.localId;
  console.log(`  uid: ${uid}`);

  // Generate 14 days of score history
  const history = [];
  for (let d = DAYS_BACK; d >= 1; d--) {
    if (Math.random() < missChance) continue; // simulate missed days
    const dateStr = getDateStr(d);
    const score   = rand(scoreRange[0], Math.min(scoreRange[1], 15));
    const level   = getScoreLevel(score);
    const attempts = rand(2, 12);
    const timeSpent = rand(30, 600);
    history.push({ dateStr, score, level, attempts, timeSpent });
  }

  // Compute stats
  const totalGames  = history.length;
  const totalScore  = history.reduce((s, h) => s + h.score, 0);
  const bestScore   = Math.max(...history.map(h => h.score));
  const avgScore    = totalGames ? Math.round(totalScore / totalGames) : 0;
  let streak = 0, bestStreak = 0, cur = 0;
  // compute current streak (consecutive days ending today)
  for (let d = 1; d <= DAYS_BACK; d++) {
    const ds = getDateStr(d);
    if (history.find(h => h.dateStr === ds)) cur++;
    else cur = 0;
  }
  // longest streak
  let run = 0;
  for (let d = DAYS_BACK; d >= 1; d--) {
    const ds = getDateStr(d);
    if (history.find(h => h.dateStr === ds)) { run++; bestStreak = Math.max(bestStreak, run); }
    else run = 0;
  }
  streak = history.find(h => h.dateStr === getDateStr(1)) ? cur : 0;

  // Write user document
  await fsSet(idToken, 'users', uid, {
    uid,
    username,
    email,
    stats: {
      totalGames,
      totalScore,
      bestScore,
      bestWord: '—',
      currentStreak: streak,
      bestStreak,
      lastPlayedDate: totalGames ? history[history.length-1].dateStr : '',
      averageScore: avgScore,
    },
    badges: {},
  });
  console.log(`  User doc written (${totalGames} games, best ${bestScore})`);

  // Write score documents
  for (const h of history) {
    const docId = `${uid}_${h.dateStr}`;
    await fsSet(idToken, 'scores', docId, {
      uid,
      username,
      date:      h.dateStr,
      score:     h.score,
      level:     h.level,
      attempts:  h.attempts,
      timeSpent: h.timeSpent,
      puzzleId:  'demo',
    });
    process.stdout.write('.');
  }
  console.log(`\n  Score docs written`);
}

async function main() {
  console.log('Seeding demo accounts…');
  for (const profile of DEMO_USERS) {
    await seedUser(profile);
  }
  console.log('\nDone! Sign in at https://cranialscratch.github.io/Shukuma/ with any demo account.');
  console.log('Password for all accounts: Demo1234!');
  console.log('\nAccounts:');
  DEMO_USERS.forEach(u => console.log(`  ${u.username} — ${u.email}`));
}

main().catch(err => { console.error(err); process.exit(1); });
