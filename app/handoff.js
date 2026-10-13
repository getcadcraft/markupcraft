/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: errors carry a `code`; each app words them in its own language file */
/**
 * handoff.js — pass a file from one app to another in a new tab, without uploading it.
 * Canonical: bimcraft/dev/handoff.js (0.4 session `bim` owns it). Byte-identical copies in cadcraft, modelcraft,
 * detailcraft, markupcraft and takeoffcraft dev (an app never imports another app's folder; `node bin/test-bimcraft.mjs
 * --handoff` and bin/test-cadcraft.mjs check they match — never edit a copy).
 *
 * Both apps are pages on the same origin, so they share IndexedDB. The sender stores the File
 * under a random id and opens the receiver at `<url>?handoff=<id>`; the receiver takes it (read and
 * delete) and opens it as if it were dropped. Nothing leaves the computer. A file nobody takes is
 * dropped after MAX_AGE_MS the next time either side runs.
 *
 *   await sendHandoff(url, file, 'bimcraft');          // sender, inside the click: the three lines below in one
 *   const id = newHandoffId();
 *   window.open(url + '?handoff=' + id, '_blank');     // open first: pop-up blockers want the click
 *   await putHandoff(id, file, 'bimcraft');
 *
 *   const got = await takeHandoff(id);                 // receiver → { file, from } | null
 *   handoffParam(location.search)                      // the id from a URL, or null when malformed
 *
 * Receiving: strip `handoff` from the address (history.replaceState), takeHandoff, open the file as if dropped, and
 * declare `"accepts": ["handoff"]` in the build's manifest — senders show their button only for a build that does.
 * Errors thrown have `code`: 'blocked' (the browser blocked the new tab), 'storage' (IndexedDB refused or failed).
 */

const DB = 'cadcraft-handoff';
const STORE = 'files';
export const MAX_AGE_MS = 10 * 60 * 1000;
const ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const newHandoffId = () => crypto.randomUUID();

/** The handoff id in a query string, or null (absent or not a UUID). */
export function handoffParam(search) {
  const id = new URLSearchParams(search).get('handoff');
  return id && ID_RE.test(id) ? id.toLowerCase() : null;
}

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(Object.assign(new Error('This browser did not allow local storage.'), { code: 'storage' }));
  });
}

function tx(db, mode, fn) {
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE, mode);
    const out = fn(t.objectStore(STORE));
    t.oncomplete = () => resolve(out && 'result' in out ? out.result : undefined);
    t.onerror = t.onabort = () => reject(Object.assign(new Error((t.error && t.error.message) || 'Local storage failed.'), { code: 'storage' }));
  });
}

/**
 * Open `url?handoff=<id>` in a new tab and store `file` for it. Call inside the click: the tab opens before the first
 * await, so pop-up blockers allow it. → the new tab. Throws code 'blocked' (no tab), or 'storage' (the tab is closed).
 */
export async function sendHandoff(url, file, from) {
  const id = newHandoffId();
  const tab = window.open(url + (url.includes('?') ? '&' : '?') + 'handoff=' + id, '_blank');
  if (!tab) throw Object.assign(new Error('The browser blocked the new tab.'), { code: 'blocked' });
  try { await putHandoff(id, file, from); } catch (e) { tab.close(); throw e; }
  return tab;
}

/** Store `file` for the receiver. Clears anything left over from earlier handoffs first. */
export async function putHandoff(id, file, from) {
  if (!ID_RE.test(id)) throw new Error('Bad handoff id.');
  const db = await openDb();
  try {
    await sweep(db);
    await tx(db, 'readwrite', (s) => s.put({ file, name: file.name, from: String(from || ''), at: Date.now() }, id.toLowerCase()));
  } finally { db.close(); }
}

/**
 * Take the file stored under `id` (read and delete). The sender may still be writing when the new
 * tab starts, so wait up to `waitMs` for it. → { file, from } | null (never stored, expired or taken).
 */
export async function takeHandoff(id, { waitMs = 5000 } = {}) {
  const key = String(id).toLowerCase();
  const db = await openDb();
  try {
    const until = Date.now() + waitMs;
    for (;;) {
      const rec = await tx(db, 'readwrite', (s) => { const r = s.get(key); r.onsuccess = () => { if (r.result) s.delete(key); }; return r; });
      if (rec) return Date.now() - rec.at <= MAX_AGE_MS && rec.file ? { file: rec.file, from: rec.from } : null;
      if (Date.now() >= until) return null;
      await new Promise((r) => setTimeout(r, 150));
    }
  } finally { sweep(db).catch(() => {}).finally(() => db.close()); }
}

/** Drop handoffs older than MAX_AGE_MS. */
function sweep(db) {
  const old = Date.now() - MAX_AGE_MS;
  return tx(db, 'readwrite', (s) => {
    const r = s.openCursor();
    r.onsuccess = () => { const c = r.result; if (!c) return; if (!(c.value?.at > old)) c.delete(); c.continue(); };
  });
}
