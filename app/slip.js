/* SPDX-License-Identifier: Apache-2.0 */
/**
 * slip.js — slip-sheeting (0.4 K13): a revised set opens beside the old one, each new sheet is matched to the old sheet
 * with the same number, the old sheet's markups (with their threads, statuses and punch items) are carried onto the new
 * one, and the old sheet is stamped "Superseded". No DOM; markupcraft.js asks, opens the files and applies the result
 * in one undo step.
 *
 *   sheetNoKey("A-101 ")                  → "A101" (case, spaces, dashes and dots ignored)
 *   matchSheets(oldSheets, newSheets)      → [{ newKey, oldKey | null, by: 'number' | 'order' | null }]
 *       sheets: [{ key, no, file, page, width, height }] (file = the file's place in the set; page = index in it).
 *       By number first: the newest old file wins when several old sheets share a number. Sheets with no numbers
 *       (scans) fall back to page order against the newest old file with the same page count.
 *   carryMarkups(markups, toKey, { from, to, skipClosed }) → { items: [markup fields], sources: [the id each came from],
 *       left, scaled, closed }
 *       from/to = the two pages ({ width, height, view }). Same page size: the markups keep their place. Another size:
 *       they are scaled with the page (one factor, so text and clouds keep their shape) and counted in `scaled`.
 *       Read-only annotations from the file cannot be carried (`left`); skipClosed leaves Accepted/Rejected/Completed.
 *   supersededStamp(page, { label, author, sheet }) → stamp markup fields, across the top middle of the page as it reads.
 */

import { clone } from './model.js';

export const CLOSED = new Set(['Accepted', 'Rejected', 'Completed']);   // i18n-ignore (stored status values)

export const sheetNoKey = (s) => String(s || '').toUpperCase().replace(/[\s._-]+/g, '');

export function matchSheets(oldSheets, newSheets) {
  const byNo = new Map();
  for (const s of oldSheets) {
    const k = sheetNoKey(s.no);
    if (!k) continue;
    const had = byNo.get(k);
    if (!had || s.file > had.file) byNo.set(k, s);
  }
  const out = newSheets.map((n) => {
    const o = byNo.get(sheetNoKey(n.no));
    return { newKey: n.key, oldKey: o ? o.key : null, by: o ? 'number' : null };
  });
  // scans: no numbers anywhere in a new file → page order against the newest old file of the same length
  const files = [...new Set(newSheets.map((n) => n.file))];
  for (const f of files) {
    const pages = newSheets.filter((n) => n.file === f);
    if (pages.some((n) => sheetNoKey(n.no))) continue;
    const oldFiles = [...new Set(oldSheets.map((s) => s.file))].sort((a, b) => b - a);
    const of = oldFiles.find((x) => oldSheets.filter((s) => s.file === x).length === pages.length);
    if (of === undefined) continue;
    const olds = oldSheets.filter((s) => s.file === of).sort((a, b) => a.page - b.page);
    pages.sort((a, b) => a.page - b.page).forEach((n, i) => {
      const r = out.find((x) => x.newKey === n.key);
      if (!r.oldKey) { r.oldKey = olds[i].key; r.by = 'order'; }
    });
  }
  return out;
}

const sameSize = (a, b) => Math.abs(a.width - b.width) <= 1 && Math.abs(a.height - b.height) <= 1;

export function carryMarkups(markups, toKey, { from, to, skipClosed = false } = {}) {
  const items = [], sources = [];
  let left = 0, scaled = 0, closed = 0;
  const same = !from || !to || sameSize(from, to);
  const k = same ? 1 : Math.min(to.width / from.width, to.height / from.height);
  const fx = (p) => (same ? p : [to.view[0] + (p[0] - from.view[0]) * k, to.view[1] + (p[1] - from.view[1]) * k]);
  for (const m of markups) {
    if (m.type === 'foreign' || m.locked) { left++; continue; }
    if (skipClosed && CLOSED.has(m.status)) { closed++; continue; }
    const c = clone(m);
    delete c.id;
    c.sheet = toKey;
    c.src = null;
    if (c.pts) c.pts = c.pts.map(fx);
    if (c.rect) { const a = fx([c.rect[0], c.rect[1]]), b = fx([c.rect[2], c.rect[3]]); c.rect = [a[0], a[1], b[0], b[1]]; }
    if (!same) {
      scaled++;
      c.style = { ...c.style, width: Math.round(c.style.width * k * 100) / 100, fontSize: Math.max(4, Math.round(c.style.fontSize * k * 10) / 10) };
    }
    c.replies = (c.replies || []).map((r) => ({ ...r, id: undefined }));
    items.push(c);
    sources.push(m.id);
  }
  return { items, sources, left, scaled, closed };
}

export function supersededStamp(page, { label, author = '', sheet }) {
  const [x0, y0, x1, y1] = page.view;
  const W = x1 - x0, H = y1 - y0;
  const rot = page.rotate || 0;
  const across = rot % 180 ? H : W;                       // the page's width as it reads
  const w = Math.min(across * 0.4, 432), h = Math.max(36, w * 0.18);
  const dx = rot % 180 ? h : w, dy = rot % 180 ? w : h;   // the rect in user space (y up)
  const m = Math.min(W, H) * 0.04 + (rot % 180 ? dx : dy) / 2;
  // "top middle" in user space for each turn of the page
  const c = rot === 90 ? [x0 + m, (y0 + y1) / 2] : rot === 180 ? [(x0 + x1) / 2, y0 + m] : rot === 270 ? [x1 - m, (y0 + y1) / 2] : [(x0 + x1) / 2, y1 - m];
  return {
    sheet, type: 'stamp', rot, author, label,
    rect: [c[0] - dx / 2, c[1] - dy / 2, c[0] + dx / 2, c[1] + dy / 2],
    style: { color: '#c4122f', width: 3, fill: null, fillOpacity: 0.25, opacity: 1, fontSize: Math.round(h * 0.45) },
  };
}
