/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clip.js — MarkupCraft's clipboard: copied markups, ready to paste on any sheet. No DOM.
 *
 * A clip is { format: 'markupcraft-clip', v: 1, source, sheet, at, items: [item…] }: `source` names the browser tab
 * that copied, `sheet` the sheet key it was copied from ("<fileId>:<pageIndex>" — only meaningful in that tab), `at`
 * the time. Items keep only what draws a markup (type, pts, rect, rot, style, text, label, subject, comment, layer): a paste
 * is a new markup with a new id, the paster's name, today's dates, status Open, no punch item and an empty thread.
 * markupcraft.js keeps the clip in memory and in localStorage "markupcraft.clipboard", so another tab can paste it;
 * whatever is read back is untrusted and checked field by field as a markup read from a file (`cleanClip`).
 *
 *   makeClip(markups, {source, sheet})     → clip (read-only and foreign markups are left out) | null
 *   cleanClip(jsonOrObject)                → clip with only usable items | null
 *   clipBounds(items)                      → [x0, y0, x1, y1] | null
 *   placeClip(clip, {sheet, author, rot, delta: [dx, dy]} | {…, center: [x, y]}) → new markups (makeMarkup)
 */

import { cleanImage } from './imagestamp.js';
import { cleanHoles } from './holes.js';
import { makeMarkup, geometryOk, TYPES } from './model.js';

export const CLIP_FORMAT = 'markupcraft-clip';
export const CLIP_KEY = 'markupcraft.clipboard';
export const CLIP_MAX = 2000;           // markups in one clip
const HEX = /^#[0-9a-f]{6}$/i;
const LIMIT = 1e7;                      // |coordinate| in points (same bound as geometryOk)

const str = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').slice(0, max);
const fin = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < LIMIT;
const okPts = (p) => Array.isArray(p) && p.length <= 100000 && p.every((q) => Array.isArray(q) && q.length === 2 && fin(q[0]) && fin(q[1]));
const okRect = (r) => Array.isArray(r) && r.length === 4 && r.every(fin);
const clampN = (v, lo, hi) => (typeof v === 'number' && Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : undefined);

/** One clip item from a markup (what draws it, nothing about who or when). */
function itemOf(m) {
  return {
    type: m.type,
    pts: m.pts ? m.pts.map((p) => [p[0], p[1]]) : null,
    rect: m.rect ? m.rect.slice() : null,
    rot: m.rot || 0,
    style: { ...(m.style || {}) },
    text: m.text || '', label: m.label || '', subject: m.subject || '', comment: m.comment || '', layer: m.layer || '', link: m.link || '', legend: m.legend, fields: { ...(m.fields || {}) }, img: m.type === 'image' ? m.img : '', holes: m.holes?.length ? m.holes.map((h) => h.map((p) => [p[0], p[1]])) : undefined,
  };
}

/** A clip of these markups. Read-only (locked) and foreign markups are kept as they are in their file, so never copied. */
export function makeClip(markups, { source = '', sheet = '' } = {}) {
  const items = (markups || []).filter((m) => m && !m.locked && m.type !== 'foreign' && TYPES[m.type]).slice(0, CLIP_MAX).map(itemOf);
  if (!items.length) return null;
  return { format: CLIP_FORMAT, v: 1, source: str(source, 80), sheet: str(sheet, 80), at: new Date().toISOString(), items };
}

/** One untrusted item → a clean item, or null. Mirrors the checks on markups read from a PDF (pdf-read.js fromPrivate). */
export function cleanItem(d) {
  if (!d || typeof d !== 'object' || typeof d.type !== 'string' || !Object.hasOwn(TYPES, d.type) || d.type === 'foreign') return null;
  if (d.pts !== null && d.pts !== undefined && !okPts(d.pts)) return null;
  if (d.rect !== null && d.rect !== undefined && !okRect(d.rect)) return null;
  const s = d.style && typeof d.style === 'object' ? d.style : {};
  const style = {
    color: HEX.test(s.color) ? s.color.toLowerCase() : undefined,
    fill: s.fill === null ? null : HEX.test(s.fill) ? s.fill.toLowerCase() : undefined,
    width: clampN(s.width, 0, 200),
    fillOpacity: clampN(s.fillOpacity, 0, 1),
    opacity: clampN(s.opacity, 0.05, 1),
    fontSize: clampN(s.fontSize, 2, 300),
  };
  for (const k of Object.keys(style)) if (style[k] === undefined) delete style[k];
  const m = makeMarkup({
    sheet: '', type: d.type, pts: d.pts || null, rect: d.rect || null,
    rot: [0, 90, 180, 270].includes(d.rot) ? d.rot : 0, style,
    text: str(d.text, 20000), label: str(d.label, 200), subject: str(d.subject, 200), comment: str(d.comment, 20000), layer: str(d.layer, 60), link: str(d.link, 60), legend: d.legend, fields: d.fields, img: d.type === 'image' ? cleanImage(d.img) : '', holes: d.type === 'area' ? cleanHoles(d.holes) : undefined,
  });
  return geometryOk(m) ? itemOf(m) : null;
}

/** An untrusted clip (JSON text or a parsed object, e.g. from another tab) → a clean clip, or null. */
export function cleanClip(raw) {
  let d = raw;
  if (typeof raw === 'string') { if (raw.length > 64e6) return null; try { d = JSON.parse(raw); } catch { return null; } }
  if (!d || typeof d !== 'object' || d.format !== CLIP_FORMAT || d.v !== 1 || !Array.isArray(d.items)) return null;
  const items = d.items.slice(0, CLIP_MAX).map(cleanItem).filter(Boolean);
  if (!items.length) return null;
  return { format: CLIP_FORMAT, v: 1, source: str(d.source, 80), sheet: str(d.sheet, 80), at: str(d.at, 40), items, skipped: Math.min(d.items.length, CLIP_MAX) - items.length };
}

/** The box round every point and rectangle of the items (user space). */
export function clipBounds(items) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = (x, y) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); };
  for (const m of items || []) {
    if (m.rect) { add(m.rect[0], m.rect[1]); add(m.rect[2], m.rect[3]); }
    if (m.pts) for (const p of m.pts) add(p[0], p[1]);
  }
  return x0 <= x1 ? [x0, y0, x1, y1] : null;
}

/**
 * New markups for a paste. `delta` moves every item by [dx, dy] (paste in place = [0, 0]); `center` puts the middle
 * of the items' box there instead. `rot` (the target sheet's rotation) keeps text reading upright on that sheet.
 */
export function placeClip(clip, { sheet, author = '', rot = null, delta = null, center = null } = {}) {
  if (!clip?.items?.length) return [];
  let [dx, dy] = delta || [0, 0];
  if (center) { const b = clipBounds(clip.items); if (b) { dx = center[0] - (b[0] + b[2]) / 2; dy = center[1] - (b[1] + b[3]) / 2; } }
  return clip.items.map((it) => makeMarkup({
    ...it,
    sheet, author,
    rot: rot === null ? it.rot : rot,
    pts: it.pts ? it.pts.map(([x, y]) => [x + dx, y + dy]) : null,
    rect: it.rect ? [it.rect[0] + dx, it.rect[1] + dy, it.rect[2] + dx, it.rect[3] + dy] : null,
    holes: it.holes ? it.holes.map((h) => h.map(([x, y]) => [x + dx, y + dy])) : undefined,
    style: { ...it.style },
  }));
}
