/* SPDX-License-Identifier: Apache-2.0 */
/**
 * content-clip.js — copy and paste of a page's own content (0.7.1 71.6, MrBorking). No DOM.
 *
 * What the Content tool has selected is copied as a one-page PDF that holds only those objects: the sheet's working
 * copy is built from the ORIGINAL bytes with every other object on the page taken out (base-edit.js `buildWorking`),
 * and that page is copied into a new document with the fonts and pictures it uses. So lines stay lines, words stay words
 * in their own font, pictures stay pictures. A paste is an `add` item of kind 'pdf' (see base-edit.js): drawn into the
 * target page as a form XObject clipped to the copied box, movable, scalable and deletable like anything else there.
 *
 * A clip is { format: 'markupcraft-content-clip', v: 1, source, sheet, at, pdf (base64), box [x0 y0 x1 y1] (page space
 * of the page it came from), rotate (that page's /Rotate), n, kinds {shape, picture, text, pasted} }. markupcraft.js keeps
 * it in memory and in localStorage "markupcraft.contentclip" (another tab, another file); read back it is untrusted.
 *
 *   isolateState(pc, st, keys)               → the sheet's edits with everything but `keys` taken out
 *   copyContent(lib, bytes, index, pc, st, items, opts) → clip | {refused}
 *   cleanContentClip(jsonOrObject)           → clip | null
 *   pasteContent(clip, {rotate, delta: [dx, dy]} | {…, center: [x, y]}, id) → an `add` item for the target page
 */

import { buildWorking, cleanPasted, emptyBase, toB64, LIMITS } from './base-edit.js';
import { mul, translate, I, objectEdits } from './base-content.js';

export const CONTENT_FORMAT = 'markupcraft-content-clip';
export const CONTENT_KEY = 'markupcraft.contentclip';
export const MAX_CONTENT_BYTES = 6 * 1024 * 1024;   // the copied page, as a PDF (base64 stays under LIMITS.pdfChars)
const LEAF = new Set(['path', 'image', 'text', 'shading']);

const str = (v, max) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max);
const clone = (v) => JSON.parse(JSON.stringify(v));

/**
 * The page's edits with every object that is not selected taken out: `o` keeps its edits (moves, colours, words) and
 * gains `del` for each other path, picture, run of text and colour blend; `add` keeps only the selected added items. Clip
 * paths stay (they cut what they always cut). An object whose removal would not write (split between two of the page's
 * content streams, a font that can't be rewritten) stays too: the copy's box cuts it off when it is outside the box.
 */
export function isolateState(pc, st, keys) {
  const want = new Set(keys);
  const next = clone(st || emptyBase());
  const page = pc.contents.get('page');
  const fits = (ed) => ed.key !== 'page' || !page || page.segments.length < 2 || page.segments.some((g) => ed.s >= g.s && ed.e <= g.e);
  for (const o of pc.objects) {
    if (!LEAF.has(o.kind) || (o.kind === 'path' && o.clip) || want.has(o.key)) continue;
    const e = { ...(next.o[o.key] || {}), del: true };
    const r = objectEdits(pc, o, e);
    if (r.refused || !r.edits.every(fits)) continue;   // the same trial the Content tool makes before every change
    next.o[o.key] = e;
  }
  next.add = (next.add || []).filter((a) => want.has('a:' + a.id));
  return next;
}

/**
 * Copy the selected objects (`items` from base-edit.js `shown`, with keys and boxes) of page `index`.
 * opts: { source, sheet, rotate, save (pdf-lib save options for tests) } → clip, or { refused: 'empty'|'big'|<blocker> }.
 */
export async function copyContent(lib, bytes, index, pc, st, items, { source = '', sheet = '', rotate = 0 } = {}) {
  if (!items?.length) return { refused: 'empty' };
  const box = [Infinity, Infinity, -Infinity, -Infinity];
  for (const it of items) { box[0] = Math.min(box[0], it.box[0]); box[1] = Math.min(box[1], it.box[1]); box[2] = Math.max(box[2], it.box[2]); box[3] = Math.max(box[3], it.box[3]); }
  const pad = Math.max(...items.map((it) => (it.lw || 0) / 2 + 0.5));   // a stroke's half width sits outside its path's box
  box[0] -= pad; box[1] -= pad; box[2] += pad; box[3] += pad;
  if (!(box[2] > box[0] && box[3] > box[1])) return { refused: 'empty' };
  let w;
  try { w = await buildWorking(lib, bytes, new Map([[index, isolateState(pc, st, items.map((it) => it.key))]]), { save: async (doc) => { await doc.flush(); return null; } }); } catch (e) { return { refused: e.code || 'unreadable' }; }
  const out = await lib.PDFDocument.create({ updateMetadata: false });
  const [page] = await out.copyPages(w.doc, [index]);
  for (const k of ['Annots', 'B', 'StructParents', 'Tabs', 'AA', 'CropBox', 'BleedBox', 'TrimBox', 'ArtBox']) page.node.delete(lib.PDFName.of(k));
  out.addPage(page);
  page.setMediaBox(box[0], box[1], box[2] - box[0], box[3] - box[1]);   // the copied part only (it reads as a small PDF too)
  page.setRotation(lib.degrees(0));
  const pdf = await out.save({ useObjectStreams: false });
  if (pdf.length > MAX_CONTENT_BYTES) return { refused: 'big' };
  const kinds = {};
  for (const it of items) kinds[it.kind] = (kinds[it.kind] || 0) + 1;
  return { format: CONTENT_FORMAT, v: 1, source: str(source, 80), sheet: str(sheet, 80), at: new Date().toISOString(), pdf: toB64(pdf), box, rotate: norm(rotate), n: items.length, kinds };
}

const norm = (r) => ((Math.round((+r || 0) / 90) * 90) % 360 + 360) % 360;

/** An untrusted clip (JSON text or a parsed object) → a clean clip, or null. */
export function cleanContentClip(raw) {
  let d = raw;
  if (typeof raw === 'string') { if (raw.length > LIMITS.pdfChars + 4096) return null; try { d = JSON.parse(raw); } catch { return null; } }
  if (!d || typeof d !== 'object' || d.format !== CONTENT_FORMAT || d.v !== 1) return null;
  const item = cleanPasted({ kind: 'pdf', pdf: d.pdf, box: d.box, T: I });
  if (!item) return null;
  const kinds = {};
  for (const k of ['shape', 'picture', 'text', 'pasted']) { const v = d.kinds?.[k]; if (Number.isInteger(v) && v > 0 && v <= 1e6) kinds[k] = v; }
  const n = Number.isInteger(d.n) && d.n > 0 && d.n <= 1e6 ? d.n : 1;
  return { format: CONTENT_FORMAT, v: 1, source: str(d.source, 80), sheet: str(d.sheet, 80), at: str(d.at, 40), pdf: item.pdf, box: item.box, rotate: norm(d.rotate), n, kinds };
}

/**
 * The `add` item that pastes a clip. `delta` moves it from where it was copied (paste in place = [0, 0]); `center` puts
 * the middle of the copied box there. `rotate` = the target page's /Rotate: the content is turned by the difference, so
 * it reads the same way on screen as where it was copied.
 */
export function pasteContent(clip, { rotate = null, delta = null, center = null } = {}, id = 'p' + Date.now().toString(36)) {
  const [x0, y0, x1, y1] = clip.box;
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const turn = rotate === null ? 0 : (norm(rotate) - clip.rotate + 360) % 360;   // degrees, counter-clockwise in page space
  const R = { 0: [1, 0, 0, 1], 90: [0, 1, -1, 0], 180: [-1, 0, 0, -1], 270: [0, -1, 1, 0] }[turn];
  const to = center || [cx + (delta?.[0] || 0), cy + (delta?.[1] || 0)];
  const T = mul(mul(translate(-cx, -cy), [...R, 0, 0]), translate(to[0], to[1]));
  return { id, kind: 'pdf', pdf: clip.pdf, box: clip.box.slice(), T };
}
