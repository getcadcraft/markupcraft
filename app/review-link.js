/* SPDX-License-Identifier: Apache-2.0 */
/**
 * review-link.js: a client review link on a set of sheets (0.10 BK.177). DOM-free (tested in Node: bin/test-sheets-review.mjs).
 *
 * One link the client opens to see the sheets the architect published and to comment, at any stage (brief, concept, … close-out): the
 * link stays the same, each later issue replaces what it shows. The website keeps the published pack and serves it at /review?t=<token>
 * (ProjectReview, behind .env REVIEW_LINKS; read and comment only). This file is the app's side of /api/v1/team/review:
 *
 *   ReviewClient(transport)      → links() · create(body) · publish(link, body) · putFile(link, sha256, bytes) · revoke(link) · comments(link, since)
 *   buildPack({ code, date, name, purpose, signedBy, note, sheets })   → the pack the site keeps (words and a sheet list, never a working file)
 *   planSheets(list)             → { keep, skipped }: what can be attached (PDF / PNG / JPG, 3 MB each, 20 a link) and what cannot, with why
 *   commentNotes(comments, { sheets, have })  → [{ id, sheet, ... }] note markups for the comments not seen before (one note a comment, never twice)
 *   desktopTransport(cloud) · browserTransport({ token })   → how a call reaches the site
 *
 * A transport is `async ({ method, path, body, contentType }) → { status, json, headers }`. Studio and the desktop apps go through
 * cadcraftDesktop.cloud.request (the shell adds the sign-in, this page never holds a token). A browser tab needs a token from a connect
 * page for review links; that page does not exist yet, so a tab says so (review-ui.js) and nothing is sent.
 */

export const ENDPOINT = '/api/v1/team/review';
export const FILE_MAX = 3 * 1024 * 1024, FILES_MAX = 20;
export const FILE_TYPES = ['pdf', 'png', 'jpg', 'jpeg'];
/** The stages a link can be at (ProjectReview::STAGES); '' = none. The words are review.stage.* in the language file. */
export const STAGES = ['brief', 'concept', 'design-development', 'submission', 'working-drawings', 'tender', 'close-out'];   // i18n-ignore (stored values)
export const CONNECT_AGAIN = new Set(['invalid_token', 'token_revoked', 'token_expired', 'account_inactive']);

export class ReviewError extends Error {
  constructor(code, status = 0, message = '') { super(message || code); this.code = code; this.status = status; }
}

export const b64 = (bytes) => {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
};
export async function sha256Hex(bytes) {
  const d = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  return Array.from(d, (b) => b.toString(16).padStart(2, '0')).join('');
}
const clip = (s, n) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, ' ').trim().slice(0, n);

export class ReviewClient {
  constructor(transport) { this.transport = transport; }
  async call(method, path, body) {
    const res = await this.transport({ method, path, body: body === undefined ? undefined : JSON.stringify(body), contentType: 'application/json' });
    const j = res.json;
    if (res.status >= 200 && res.status < 300 && j && j.status === 'success') return j.data || {};
    throw new ReviewError(String(j?.code || j?.data?.code || (res.status === 403 ? 'review_closed' : res.status === 401 ? 'invalid_token' : 'error')), res.status, String(j?.message || ''));
  }
  async links() { return (await this.call('GET', ENDPOINT)).links || []; }
  async create({ project, label = '', stage = '', days = 30, pack }) { return this.call('POST', ENDPOINT, { op: 'create', project: clip(project, 160), label: clip(label, 120), stage, days, pack }); }
  async publish(link, { pack, stage, label }) { return this.call('POST', ENDPOINT, { op: 'publish', link, pack, ...(stage !== undefined ? { stage } : {}), ...(label !== undefined ? { label: clip(label, 120) } : {}) }); }
  async putFile(link, sha256, bytes) { return this.call('POST', ENDPOINT, { op: 'file', link, sha256, data: b64(bytes) }); }
  async revoke(link) { return this.call('POST', ENDPOINT, { op: 'revoke', link }); }
  async comments(link, since = 0) { return this.call('GET', ENDPOINT + '?link=' + encodeURIComponent(link) + (since ? '&since=' + since : '')); }
}

export function buildPack({ code = '', date = '', name = '', purpose = '', signedBy = '', note = '', sheets = [] } = {}) {
  return {
    issue: { code: clip(code, 12), date: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : '', name: clip(name, 160), purpose: clip(purpose, 40), signed_by: clip(signedBy, 120) },
    note: String(note || '').slice(0, 2000),
    sheets: sheets.map((s) => ({ name: clip(s.name, 160), rev: clip(s.rev, 12), size: s.size | 0, sha256: s.sha256 })).filter((s) => s.name && /^[0-9a-f]{64}$/.test(s.sha256)),
  };
}

/** list: [{ name (with its extension), bytes }] → { keep (in order, at most FILES_MAX), skipped: [{ name, why: 'type' | 'size' | 'count' }] }. */
export function planSheets(list) {
  const keep = [], skipped = [];
  for (const f of list) {
    const ext = String(f.name).split('.').pop().toLowerCase();
    if (!FILE_TYPES.includes(ext)) skipped.push({ name: f.name, why: 'type' });
    else if (f.bytes.length > FILE_MAX) skipped.push({ name: f.name, why: 'size' });
    else if (keep.length >= FILES_MAX) skipped.push({ name: f.name, why: 'count' });
    else keep.push(f);
  }
  return { keep, skipped };
}

/**
 * The client's comments as note markups on the sheets. comments: the site's list [{ id, author, body, sheet (the pack sheet name), stage, at }].
 * sheets: [{ key (the markup sheet key), name (as published), width, height }] in the page's units; have: Set of markup ids already on the plan;
 * stacked: Map(sheet key → notes already stacked there) so new notes go below them.
 * A comment with no sheet (or a name that matches none) goes on the first sheet. Notes stack down the left edge of the page, newest last.
 */
export function commentNotes(comments, { sheets, have = new Set(), subject = '', stacked = new Map() }) {
  if (!sheets.length) return [];
  const used = new Map(stacked);
  const out = [];
  for (const c of comments) {
    const id = 'rv-' + String(c.id || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40);
    if (id === 'rv-' || have.has(id)) continue;
    const bare = (x) => String(x).replace(/\.(pdf|png|jpe?g)$/i, '');   // the site's sheet names carry their file extension
    const sh = sheets.find((s) => bare(s.name) === bare(c.sheet)) || sheets[0];
    const n = used.get(sh.key) || 0;
    used.set(sh.key, n + 1);
    const x = 36, y = Math.max(36, (sh.height || 800) - 36 - (n % 20) * 30);
    out.push({
      id, type: 'note', sheet: sh.key, pts: [[x, y]], text: clip(c.body, 4000), subject, author: clip(c.author, 120) || 'Client',
      created: new Date(Number(c.at) || Date.now()).toISOString().replace(/\.\d+Z$/, 'Z'), status: 'Open',
    });
  }
  return out;
}

/** A transport over fetch with a Bearer token (a browser tab on the website, once a connect page makes one). */
export function browserTransport({ token, fetchFn = (...a) => globalThis.fetch(...a) }) {
  return async ({ method, path, body, contentType }) => {
    const headers = { Authorization: 'Bearer ' + token, Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = contentType;
    const r = await fetchFn(path, { method, headers, body, credentials: 'omit', cache: 'no-store' });
    let json = null;
    try { json = await r.json(); } catch { json = null; }
    return { status: r.status, json, headers: {} };
  };
}
/** A transport over the desktop shell's cloud bridge (cadcraftDesktop.cloud.request: it adds the Bearer; the page never sees it). */
export function desktopTransport(cloud) {
  return async ({ method, path, body, contentType }) => {
    const res = await cloud.request({ method, path, body: typeof body === 'string' ? new TextEncoder().encode(body) : body, contentType });
    let json = null;
    try { json = typeof res.json === 'function' ? res.json() : res.json; } catch { json = null; }
    return { status: res.status, json, headers: res.headers || {} };
  };
}
