/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pages.js — page operations on one PDF of the set (0.4 item K1): insert, delete, rotate, reorder and extract. No DOM.
 *
 * Each operation takes the file's bytes and returns new bytes; the original file on disk is never touched. The page
 * (markupcraft.js) first writes the file's markups into the bytes (pdf-write.js — the same marked-up copy Save makes),
 * runs the operation, then reopens the result (pdf-read.js), so markups, threads, scales and typed sheet names travel
 * with their pages as real annotations and page keys, and come back exactly as they were.
 *
 *   rotatePages(lib, bytes, indices, delta)        delta ±90/180 added to each page's /Rotate
 *   deletePages(lib, bytes, indices, {labels})     refuses to delete every page
 *   movePages(lib, bytes, indices, to, {labels})   the pages (kept in their order) moved so the first lands at `to`
 *                                                   (an index into the pages that are left)
 *   insertPages(lib, bytes, srcBytes, at, {indices, labels})  pages of another PDF (all, or `indices`) inserted before
 *                                                   page `at` → { bytes, count }
 *   insertBlank(lib, bytes, at, {size, labels})    a blank page (default: the size and turn of the page before it)
 *   extractPages(lib, bytes, indices)              a new PDF of those pages, in that order
 *   order*(n, …)                                   the same operations on page numbers only: new index → old index
 *                                                   (null = inserted), so the page can say what goes where
 *   parsePageList("1-3, 5", n)                     page numbers typed by a person → 0-based indices (or an error)
 *
 * pdf-lib copies a page with its annotations (copyPages), and removePage/insertPage keep the same page objects, so
 * nothing on a page is redrawn or lost. Page labels (/PageLabels, often the sheet numbers): pass `labels` (the old label
 * of each page, '' for none) and the operations write them again in the new order, one range per page; an inserted page
 * gets its page number. Without `labels` the old ranges are removed (they would name the wrong pages).
 */

import { t } from './i18n.js';

export const ROTATIONS = [90, 180, 270];

const norm = (deg) => ((Math.round(deg / 90) * 90) % 360 + 360) % 360;
const uniqSorted = (idx, n) => [...new Set(idx)].filter((i) => Number.isInteger(i) && i >= 0 && i < n).sort((a, b) => a - b);

async function load(lib, bytes) {
  try {
    return await lib.PDFDocument.load(bytes, { updateMetadata: false });
  } catch (e) {
    if (/encrypt/i.test(String(e?.message || e))) throw new Error(t('save.err.encrypted'));
    throw e;
  }
}
const save = (doc) => doc.save({ useObjectStreams: false });
/** /PageLabels for the new page order (old index per page, null = inserted). */
function relabel(lib, doc, labels, order) {
  try { doc.catalog.delete(lib.PDFName.of('PageLabels')); } catch { /* no labels */ }
  if (!Array.isArray(labels) || !labels.some((l) => l)) return;
  const nums = [];
  order.forEach((old, i) => nums.push(i, doc.context.obj({ P: lib.PDFHexString.fromText(String((old === null ? '' : labels[old]) || i + 1)) })));
  doc.catalog.set(lib.PDFName.of('PageLabels'), doc.context.obj({ Nums: nums }));
}

/** Page order after an operation, as old indices (null = a page that was not there before). */
export function orderDelete(n, indices) {
  const del = new Set(uniqSorted(indices, n));
  return [...Array(n).keys()].filter((i) => !del.has(i));
}
export function orderMove(n, indices, to) {
  const mv = uniqSorted(indices, n);
  const rest = [...Array(n).keys()].filter((i) => !mv.includes(i));
  const at = Math.max(0, Math.min(rest.length, to));
  return [...rest.slice(0, at), ...mv, ...rest.slice(at)];
}
export function orderInsert(n, at, count) {
  const a = Math.max(0, Math.min(n, at));
  return [...[...Array(a).keys()], ...Array(count).fill(null), ...[...Array(n - a).keys()].map((i) => i + a)];
}

export async function rotatePages(lib, bytes, indices, delta) {
  const doc = await load(lib, bytes);
  const n = doc.getPageCount();
  const idx = uniqSorted(indices, n);
  if (!idx.length) throw new Error(t('pages.err.none'));
  for (const i of idx) {
    const pg = doc.getPage(i);
    pg.setRotation(lib.degrees(norm((pg.getRotation().angle || 0) + delta)));
  }
  return save(doc);
}

export async function deletePages(lib, bytes, indices, { labels = null } = {}) {
  const doc = await load(lib, bytes);
  const n = doc.getPageCount();
  const idx = uniqSorted(indices, n);
  if (!idx.length) throw new Error(t('pages.err.none'));
  if (idx.length >= n) throw new Error(t('pages.err.all'));
  for (const i of [...idx].reverse()) doc.removePage(i);
  relabel(lib, doc, labels, orderDelete(n, idx));
  return save(doc);
}

export async function movePages(lib, bytes, indices, to, { labels = null } = {}) {
  const doc = await load(lib, bytes);
  const n = doc.getPageCount();
  const order = orderMove(n, indices, to);
  if (order.every((v, i) => v === i)) return bytes;
  const pages = doc.getPages();
  for (let i = n - 1; i >= 0; i--) doc.removePage(i);
  for (const i of order) doc.addPage(pages[i]);
  relabel(lib, doc, labels, order);
  return save(doc);
}

export async function insertPages(lib, bytes, srcBytes, at, { indices = null, labels = null } = {}) {
  const doc = await load(lib, bytes);
  const src = await load(lib, srcBytes);
  const idx = indices ? uniqSorted(indices, src.getPageCount()) : src.getPageIndices();
  if (!idx.length) throw new Error(t('pages.err.none'));
  const copies = await doc.copyPages(src, idx);
  const n = doc.getPageCount();
  const a = Math.max(0, Math.min(n, at));
  copies.forEach((p, k) => doc.insertPage(a + k, p));
  relabel(lib, doc, labels, orderInsert(n, a, copies.length));
  return { bytes: await save(doc), count: copies.length };
}

export async function insertBlank(lib, bytes, at, { size = null, labels = null } = {}) {
  const doc = await load(lib, bytes);
  const n = doc.getPageCount();
  const a = Math.max(0, Math.min(n, at));
  const ref = n ? doc.getPage(Math.max(0, a - 1)) : null;
  const wh = size || (ref ? [ref.getWidth(), ref.getHeight()] : [612, 792]);
  const pg = doc.insertPage(a, wh);
  if (ref && !size) pg.setRotation(lib.degrees(norm(ref.getRotation().angle || 0)));
  relabel(lib, doc, labels, orderInsert(n, a, 1));
  return save(doc);
}

export async function extractPages(lib, bytes, indices) {
  const src = await load(lib, bytes);
  const idx = [...new Set(indices)].filter((i) => Number.isInteger(i) && i >= 0 && i < src.getPageCount());
  if (!idx.length) throw new Error(t('pages.err.none'));
  const doc = await lib.PDFDocument.create();
  const copies = await doc.copyPages(src, idx);
  for (const p of copies) doc.addPage(p);
  const title = src.getTitle();
  if (title) doc.setTitle(title);
  doc.setProducer('MarkupCraft');   // i18n-ignore (program name)
  return save(doc);
}

/** "1-3, 5, 8-" as typed (1-based, n pages) → { indices } or { error }. */
export function parsePageList(text, n) {
  const s = String(text || '').trim();
  if (!s) return { error: t('pages.err.list_empty') };
  const out = [];
  for (const part of s.split(/[,;\s]+/).filter(Boolean)) {
    const m = /^(\d+)?\s*(?:(-|–)\s*(\d+)?)?$/.exec(part);
    if (!m || (!m[1] && !m[3])) return { error: t('pages.err.list_bad', { part }) };
    const a = m[1] ? +m[1] : 1;
    const b = m[2] ? (m[3] ? +m[3] : n) : a;
    if (a < 1 || b < 1 || a > n || b > n) return { error: t('pages.err.list_range', { part, n }) };
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) out.push(i - 1);
  }
  return { indices: [...new Set(out)] };
}
