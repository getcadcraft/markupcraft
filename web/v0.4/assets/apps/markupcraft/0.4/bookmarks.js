/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bookmarks.js — a PDF's bookmarks (its outline) read, edited and written back (0.4 K24). No DOM.
 * A bookmark is { title, page (0-based index in its file, or -1 when it points nowhere we can follow), children: [] }.
 *
 *   readOutline(doc)                    pdf.js document → bookmarks (titles plain text ≤ 200, ≤ 3 levels, ≤ 2000 items)
 *   fromSheets(pages)                   pages [{ index, title }] → one bookmark per page, titled as the sheet is named
 *   cleanBookmarks(v)                   untrusted → bookmarks (the same limits)
 *   writeOutline(lib, pdfDoc, items)    pdf-lib document ← /Outlines replaced by these bookmarks (each jumps to its page,
 *                                       fitted); [] removes the outline
 *   count(items)                        how many bookmarks, children included
 */

const LIMIT = 2000;
const plain = (v) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, 200);

export async function readOutline(doc) {
  let outline = null;
  try { outline = await doc.getOutline(); } catch { outline = null; }
  if (!Array.isArray(outline)) return [];
  let n = 0;
  const pageOf = async (dest) => {
    try {
      const d = typeof dest === 'string' ? await doc.getDestination(dest) : dest;
      if (!Array.isArray(d) || !d[0]) return -1;
      return typeof d[0] === 'number' ? d[0] : await doc.getPageIndex(d[0]);
    } catch { return -1; }
  };
  const walk = async (items, depth) => {
    const out = [];
    for (const it of items || []) {
      if (n >= LIMIT) break;
      n++;
      out.push({ title: plain(it.title), page: await pageOf(it.dest), children: depth < 2 ? await walk(it.items, depth + 1) : [] });
    }
    return out;
  };
  return walk(outline, 0);
}

export const fromSheets = (pages) => pages.map((p) => ({ title: plain(p.title), page: p.index, children: [] }));

export function cleanBookmarks(v, depth = 0) {
  if (!Array.isArray(v)) return [];
  return v.slice(0, LIMIT).filter((b) => b && typeof b === 'object' && plain(b.title)).map((b) => ({
    title: plain(b.title), page: Number.isInteger(b.page) && b.page >= -1 ? b.page : -1, children: depth < 2 ? cleanBookmarks(b.children, depth + 1) : [],
  }));
}

export const count = (items) => items.reduce((n, b) => n + 1 + count(b.children || []), 0);

export function writeOutline(lib, pdfDoc, items) {
  const { PDFName, PDFHexString, PDFNumber } = lib;
  const ctx = pdfDoc.context;
  const N = (s) => PDFName.of(s);
  pdfDoc.catalog.delete(N('Outlines'));
  if (!items?.length) return;
  const pages = pdfDoc.getPages();
  const rootRef = ctx.nextRef();
  const build = (list, parentRef) => {
    const refs = list.map(() => ctx.nextRef());
    let total = 0;
    list.forEach((b, i) => {
      const kids = build(b.children || [], refs[i]);
      const d = ctx.obj({ Title: PDFHexString.fromText(b.title), Parent: parentRef });
      if (i > 0) d.set(N('Prev'), refs[i - 1]);
      if (i < list.length - 1) d.set(N('Next'), refs[i + 1]);
      if (kids.refs.length) { d.set(N('First'), kids.refs[0]); d.set(N('Last'), kids.refs.at(-1)); d.set(N('Count'), PDFNumber.of(kids.total)); }
      const pg = pages[b.page];
      if (pg) d.set(N('Dest'), ctx.obj([pg.ref, N('Fit')]));
      ctx.assign(refs[i], d);
      total += 1 + kids.total;
    });
    return { refs, total };
  };
  const top = build(items, rootRef);
  ctx.assign(rootRef, ctx.obj({ Type: 'Outlines', First: top.refs[0], Last: top.refs.at(-1), Count: PDFNumber.of(top.total) }));
  pdfDoc.catalog.set(N('Outlines'), rootRef);
}
