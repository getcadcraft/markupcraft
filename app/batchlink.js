/* SPDX-License-Identifier: Apache-2.0 */
/**
 * batchlink.js — batch links (0.9 SU.1085): every sheet callout in a set linked to its sheet and view in one pass,
 * re-runnable when sheets are added or renamed. No DOM. The page side is markupcraft.js batchLinks().
 *
 *   findCallouts(index, { sheetNos, ownNo })   ownNo: the sheet's number, or a list (its number now and the one its own text
 *       still prints, after a sheet was renumbered by hand) —   textsearch.js textIndex → [{ start, end, ref, detail, no, known, box }]:
 *       "3/A-501", "5 / A501", "DETAIL 2 ON A-501", a bubble with "3" stacked over "A-501", or "A-501" alone. `known` is
 *       the open sheet number it names ('' = none open: a miss, listed only when it is shaped like the set's own numbers
 *       so "R-19" or "W12" are not taken for sheets). A sheet's own number is left out (its title block, its view titles).
 *   sheetViews(index, { sheetNo, view })      sheetNo: one number or a list (as ownNo) → [{ id, title, at: [x, y], box: [x0, y0, x1, y1] }]: the view titles on a
 *       sheet (a detail number with the sheet's own number under it, or a large number with a title beside it) and the
 *       area each one heads, in PDF user space (y up). `view` = the page's [x0, y0, x1, y1].
 *   resolveCallout(c, sheets, viewsOf, fixes) → { target (sheet | null), view (| null), status: 'ok' | 'no-view' | 'no-sheet' }
 *       sheets [{ key, sheetNo, title }] (newest last, as link.js wants); viewsOf(key) → sheetViews; fixes Map
 *       (sheetNoKey of the callout's number → sheet key) = the person's hand fixes for numbers that name no open sheet.
 *   planLinks(rows, existing)                 rows (callouts + where they point) against the links already there →
 *       each row gets `action`: 'new' | 'keep' | 'update' | 'broken' | 'miss' | 'hand' and `existing` (the markup id).
 *       existing [{ id, box, link, linkView, resolves }]: links made by hand (no linkView.ref) are never changed; a view
 *       picked by hand (the callout's own view was not found) is kept, and handed on as `pickedView` when the link moves.
 *   linkViewFor(c, view)                      → the markup's `linkView` { id, box, ref } (link.js cleanLinkView)
 *   viewKey(v)                                → a string that changes when the view moved (so a re-run updates it)
 */

import { sheetNoKey } from './slip.js';
import { rangeBox } from './textsearch.js';
import { isWording } from './titleblock.js';

const NO = '[A-Z]{1,3}[-.]?\\d{1,3}(?:[.-]\\d{1,3})?[A-Z]?';
const DET = '\\d{1,3}|[A-Z]\\d?';
const SLASH = new RegExp(`(?:\\b(${DET})\\s*\\/\\s*)?\\b(${NO})\\b`, 'gi');
const WORDS = new RegExp(`\\b(?:detail|section|sect\\.|elevation|elev\\.|view)\\s+(${DET})\\s+(?:on\\s+sheet|on|sheet)\\s+(${NO})\\b`, 'gi');
const NO_ALONE = new RegExp(`^${NO}$`, 'i');
const DET_ALONE = /^(\d{1,3}|[A-Z]\d?)$/i;

/** "A-501" → "A-ddd", "A5.01" → "Ad.dd": a number's shape, to tell sheet numbers from other codes. */
export function shapeOf(no) {
  const s = String(no || '').toUpperCase().trim();
  const m = /^([A-Z]{1,3})(.*)$/.exec(s);
  return m ? { prefix: m[1], pattern: m[2].replace(/\d/g, 'd').replace(/[A-Z]$/, 'a') } : null;
}

/** One pdf.js item's place: x0/x1 along a horizontal baseline, its centre and size (user space, y up). */
function geo(it) {
  const str = String(it?.str ?? '');
  if (!str.trim() || !Array.isArray(it.transform)) return null;
  const [a, b, c, d, e, f] = it.transform;
  const size = Math.hypot(c, d) || 1, len = Math.hypot(a, b) || 1;
  const w = Number.isFinite(it.width) && it.width > 0 ? it.width : str.length * size * 0.5;
  const horizontal = Math.abs(b) < Math.abs(a) * 0.2 && a > 0;
  const x0 = e, x1 = e + (a / len) * w;
  return { it, str, s: str.trim(), size, x0, x1, cx: (x0 + x1) / 2, cy: f + size * 0.35, y0: f - 0.22 * size, y1: f + 0.9 * size, horizontal };
}
const union = (p, q) => [Math.min(p[0], q[0]), Math.min(p[1], q[1]), Math.max(p[2], q[2]), Math.max(p[3], q[3])];

export function findCallouts(index, { sheetNos = [], ownNo = '' } = {}) {
  const text = String(index?.text || '');
  if (!text) return [];
  const known = new Map(sheetNos.filter(Boolean).map((n) => [sheetNoKey(n), n]));
  const prefixes = new Set(), patterns = new Set();
  for (const n of known.values()) { const sh = shapeOf(n); if (sh) { prefixes.add(sh.prefix); patterns.add(sh.pattern); } }
  const owns = new Set((Array.isArray(ownNo) ? ownNo : [ownNo]).map(sheetNoKey).filter(Boolean));
  const looksLikeSheet = (no, detail) => {
    const sh = shapeOf(no);
    return !!sh && patterns.has(sh.pattern) && (prefixes.has(sh.prefix) || !!detail);
  };
  const out = [];
  const taken = [];
  const push = (start, end, detail, no) => {
    const k = sheetNoKey(no);
    if (!k || owns.has(k)) return;
    const kn = known.get(k) || '';
    if (!kn && !looksLikeSheet(no, detail)) return;
    if (taken.some(([a, z]) => start < z && end > a)) return;
    const box = rangeBox(index, start, end);
    if (!box) return;
    taken.push([start, end]);
    out.push({ start, end, ref: text.slice(start, end), detail: String(detail || '').toUpperCase(), no: kn || no.toUpperCase(), known: kn, box });
  };
  for (const m of text.matchAll(WORDS)) push(m.index, m.index + m[0].length, m[1], m[2]);
  for (const m of text.matchAll(SLASH)) push(m.index, m.index + m[0].length, m[1] || '', m[2]);

  // a bubble: the detail number stacked over the sheet number, as two pieces of text
  const spans = (index.spans || []).map((sp) => ({ sp, g: geo(sp.item) })).filter((x) => x.g);
  for (const c of out) {
    if (c.detail) continue;
    const host = spans.find((x) => x.sp.start <= c.start && x.sp.end >= c.end && NO_ALONE.test(x.g.s));
    if (!host) continue;
    const g = host.g;
    const above = spans.filter((x) => x !== host && DET_ALONE.test(x.g.s) && x.g.cy > g.cy && x.g.cy - g.cy < 3 * Math.max(g.size, x.g.size) && Math.abs(x.g.cx - g.cx) < 1.5 * Math.max(g.size, x.g.size))
      .sort((p, q) => (p.g.cy - g.cy) - (q.g.cy - g.cy))[0];
    if (!above) continue;
    c.detail = above.g.s.toUpperCase();
    c.ref = above.g.s + '/' + c.ref;
    c.box = union(c.box, [above.g.x0, above.g.y0, above.g.x1, above.g.y1]);
  }
  return out.sort((p, q) => p.start - q.start);
}

export function sheetViews(index, { sheetNo = '', view = null } = {}) {
  const its = (index?.spans || []).map((sp) => geo(sp.item)).filter((g) => g && g.horizontal);
  if (!its.length) return [];
  const [vx0, vy0, vx1, vy1] = view || its.reduce((b, g) => union(b, [g.x0, g.y0, g.x1, g.y1]), [Infinity, Infinity, -Infinity, -Infinity]);
  const W = vx1 - vx0, H = vy1 - vy0;
  const owns = new Set((Array.isArray(sheetNo) ? sheetNo : [sheetNo]).map(sheetNoKey).filter(Boolean));
  const sizes = its.map((g) => g.size).sort((p, q) => p - q);
  const median = sizes[Math.floor(sizes.length / 2)];
  const marks = [];
  for (const g of its) {
    if (!DET_ALONE.test(g.s) || g.cx > vx0 + W * 0.85) continue;   // the right-hand strip is the title block
    let score = 0;
    if (owns.size && its.some((o) => o !== g && owns.has(sheetNoKey(o.s)) && o.cy < g.cy && g.cy - o.cy < g.size * 3 && Math.abs(o.cx - g.cx) < g.size * 2)) score = 3;
    const beside = its.filter((o) => o !== g && o.x0 > g.x1 && o.x0 - g.x1 < g.size * 6 && Math.abs(o.cy - g.cy) < g.size * 1.6 && isWording(o.s))
      .sort((p, q) => Math.abs(p.cy - g.cy) - Math.abs(q.cy - g.cy) || q.size - p.size);
    if (beside.length && (score || g.size >= median * 1.3)) score += 1;   // numbered notes are the size of the notes
    if (score) marks.push({ id: g.s.toUpperCase(), score, g, title: beside[0]?.s || '' });
  }
  const top = Math.max(0, ...marks.map((m) => m.score));
  const byId = new Map();
  for (const m of marks.filter((x) => top < 3 || x.score >= 3)) {
    const was = byId.get(m.id);
    if (!was || m.score > was.score || (m.score === was.score && m.g.size > was.g.size)) byId.set(m.id, m);
  }
  const list = [...byId.values()];
  const clamp = (v, a, z) => Math.max(a, Math.min(z, v));
  return list.map((m) => {
    const g = m.g;
    const left = g.x0 - 2 * g.size;
    const rights = list.filter((o) => o !== m && o.g.cx > g.cx + 2 * g.size && Math.abs(o.g.cy - g.cy) < H * 0.25).map((o) => o.g.x0 - 2 * o.g.size);
    const right = rights.length ? Math.min(...rights) : vx0 + W * 0.85;
    const bottom = g.cy - 3 * g.size;
    const tops = list.filter((o) => o !== m && o.g.cy > g.cy + 3 * g.size && o.g.cx < right && o.g.cx > left - W * 0.05).map((o) => o.g.cy - 3 * o.g.size);
    const topY = tops.length ? Math.min(...tops) : vy1 - H * 0.02;
    const box = [clamp(left, vx0, vx1), clamp(bottom, vy0, vy1), clamp(Math.min(right, left + W * 0.6), vx0, vx1), clamp(Math.min(topY, bottom + H * 0.7), vy0, vy1)];
    if (box[2] - box[0] < g.size * 4) box[2] = Math.min(vx1, box[0] + g.size * 20);
    if (box[3] - box[1] < g.size * 4) box[3] = Math.min(vy1, box[1] + g.size * 20);
    return { id: m.id, title: m.title, at: [g.cx, g.cy], box: box.map((v) => Math.round(v * 100) / 100) };
  }).sort((p, q) => q.at[1] - p.at[1] || p.at[0] - q.at[0]);
}

export function resolveCallout(c, sheets, viewsOf, fixes = new Map()) {
  const k = sheetNoKey(c.no);
  let target = null;
  const fixed = fixes.get(k);
  if (fixed) target = sheets.find((s) => s.key === fixed) || null;
  if (!target) for (const s of sheets) if (sheetNoKey(s.sheetNo) === k) target = s;   // newest wins
  if (!target) return { target: null, view: null, status: 'no-sheet' };
  if (!c.detail) return { target, view: null, status: 'ok' };
  const view = (viewsOf(target.key) || []).find((v) => v.id === c.detail) || null;
  return { target, view, status: view ? 'ok' : 'no-view' };
}

export const viewKey = (v) => (v?.box ? v.id + '@' + v.box.map((n) => Math.round(n)).join(',') : v?.id || '');

export function linkViewFor(c, view) {
  return { id: view?.id || c.detail || '', box: view?.box ? view.box.slice() : null, ref: String(c.ref || '').replace(/\s+/g, ' ').trim().slice(0, 40) };
}

/**
 * rows: [{ box, target, view, status, ... }] (one per callout found). existing: the sheet's link markups. A row is
 * covered by a link whose box holds the callout's centre. Hand-made links (no linkView.ref) are left alone ('hand');
 * batch links that still go where the callout says are kept, ones that moved or broke are updated, and broken ones
 * with nowhere to go are listed for a hand fix ('broken'). Uncovered rows become 'new' or a 'miss'.
 */
export function planLinks(rows, existing) {
  for (const r of rows) {
    const cx = (r.box[0] + r.box[2]) / 2, cy = (r.box[1] + r.box[3]) / 2;
    const ex = existing.find((m) => m.box && cx >= m.box[0] && cx <= m.box[2] && cy >= m.box[1] && cy <= m.box[3]);
    r.existing = ex?.id || null;
    if (!ex) { r.action = r.target ? 'new' : 'miss'; continue; }
    if (!ex.linkView?.ref) { r.action = 'hand'; continue; }
    // a view the person picked by hand for a callout whose own view was not found: remembered across re-runs
    r.pickedView = r.status !== 'ok' && ex.linkView.id && ex.linkView.id !== (r.detail || '') ? ex.linkView.id : '';
    if (!r.target) { r.action = ex.resolves ? 'keep' : 'broken'; continue; }
    if (r.pickedView && ex.resolves && sheetNoKey(ex.link) === sheetNoKey(r.target.sheetNo || r.target.title)) { r.action = 'keep'; continue; }
    const same = sheetNoKey(ex.link) === sheetNoKey(r.target.sheetNo || r.target.title) && ex.resolves && viewKey(ex.linkView) === viewKey(r.view ? { id: r.view.id, box: r.view.box } : { id: r.detail || '' });
    r.action = same ? 'keep' : 'update';
  }
  return rows;
}
