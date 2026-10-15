/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blank.js — File › New: blank pages to mark up, made as a real PDF with pdf-lib (owner, 2026-10-15). No DOM.
 *
 * The page asks for the paper, the turn, a grid and how many pages, makes the PDF here and opens it like any file
 * ("Untitled-1.pdf"), so every tool, calibration, save, autosave and the desktop host work exactly as for an opened PDF.
 * The PDF carries Info /MarkupCraftBlank (JSON {paper, orient, grid}) so "Add a blank page" later — also after the copy
 * is saved and reopened — adds a page with the same grid.
 *
 *   PAPERS                         key → { w, h (pt, portrait), metric }
 *   cleanBlank(raw)                untrusted settings → { paper, orient, grid, pages } (defaults where wrong)
 *   paperSize(spec)                [w, h] in pt, turned for landscape
 *   gridContent(w, h, grid, metric)  the grid as PDF content-stream text ('' for none)
 *   drawGrid(lib, doc, page, grid, metric)  adds that grid to a pdf-lib page
 *   blankPdf(lib, spec, {title})   → Uint8Array, a PDF of `pages` blank pages
 *   blankInfo(raw)                 the Info value read back → { paper, orient, grid } | null
 *   untitledName(names, seq)       → { name: "Untitled-<n>.pdf", seq: n } (n above any open Untitled-n and above seq)
 */

export const BLANK_KEY = 'MarkupCraftBlank';
const IN = 72, MM = 72 / 25.4;
/** Paper sizes, portrait, in PDF points. */
export const PAPERS = {
  letter: { w: 8.5 * IN, h: 11 * IN, metric: false },
  tabloid: { w: 11 * IN, h: 17 * IN, metric: false },     // Tabloid = ANSI B
  'arch-d': { w: 24 * IN, h: 36 * IN, metric: false },
  'arch-e': { w: 36 * IN, h: 48 * IN, metric: false },
  a4: { w: 210 * MM, h: 297 * MM, metric: true },
  a3: { w: 297 * MM, h: 420 * MM, metric: true },
  a1: { w: 594 * MM, h: 841 * MM, metric: true },
};
export const ORIENTS = ['portrait', 'landscape'];
export const GRIDS = ['none', 'dot', 'square'];
export const MAX_PAGES = 20;
/** Grid pitch and margin: 1/4 in on a 1/2 in margin (heavier line every inch); 5 mm on 10 mm (every 10 mm) on metric paper. */
export const GRID_STEP = { imperial: { step: IN / 4, margin: IN / 2, major: 4 }, metric: { step: 5 * MM, margin: 10 * MM, major: 2 } };

export function cleanBlank(raw) {
  const v = raw && typeof raw === 'object' ? raw : {};
  const pages = Math.round(Number(v.pages));
  return {
    paper: Object.hasOwn(PAPERS, v.paper) ? v.paper : 'letter',
    orient: ORIENTS.includes(v.orient) ? v.orient : 'portrait',
    grid: GRIDS.includes(v.grid) ? v.grid : 'none',
    pages: Number.isFinite(pages) ? Math.max(1, Math.min(MAX_PAGES, pages)) : 1,
  };
}

export function paperSize(spec) {
  const p = PAPERS[spec.paper] || PAPERS.letter;
  return spec.orient === 'landscape' ? [p.h, p.w] : [p.w, p.h];
}

const f2 = (n) => String(Math.round(n * 100) / 100);

/** The grid lines or dots as content-stream text, in the page's own (unturned) user space. */
export function gridContent(w, h, grid, metric = false) {
  if (grid !== 'dot' && grid !== 'square') return '';
  const { step, margin, major } = metric ? GRID_STEP.metric : GRID_STEP.imperial;
  const nx = Math.floor((w - 2 * margin) / step + 1e-6), ny = Math.floor((h - 2 * margin) / step + 1e-6);
  if (nx < 1 || ny < 1) return '';
  const x0 = (w - nx * step) / 2, y0 = (h - ny * step) / 2, x1 = x0 + nx * step, y1 = y0 + ny * step;
  const out = ['q'];
  if (grid === 'square') {
    for (const heavy of [false, true]) {
      out.push(heavy ? '0.62 G 0.5 w' : '0.82 G 0.3 w');
      for (let i = 0; i <= nx; i++) if ((i % major === 0) === heavy) out.push(f2(x0 + i * step) + ' ' + f2(y0) + ' m ' + f2(x0 + i * step) + ' ' + f2(y1) + ' l');
      for (let j = 0; j <= ny; j++) if ((j % major === 0) === heavy) out.push(f2(x0) + ' ' + f2(y0 + j * step) + ' m ' + f2(x1) + ' ' + f2(y0 + j * step) + ' l');
      out.push('S');
    }
  } else {
    // small filled squares (zero-length round-capped lines are dropped by some renderers); bigger on the major pitch
    out.push('0.55 g');
    for (let i = 0; i <= nx; i++) for (let j = 0; j <= ny; j++) {
      const d = i % major === 0 && j % major === 0 ? 1.6 : 1;
      out.push(f2(x0 + i * step - d / 2) + ' ' + f2(y0 + j * step - d / 2) + ' ' + d + ' ' + d + ' re');
    }
    out.push('f');
  }
  out.push('Q');
  return out.join('\n');
}

/** Add the grid to a pdf-lib page (a compressed content stream of its own, drawn before any other content). */
export function drawGrid(lib, doc, page, grid, metric = false) {
  const text = gridContent(page.getWidth(), page.getHeight(), grid, metric);
  if (!text) return false;
  const ref = doc.context.register(doc.context.flateStream(text));
  page.node.addContentStream(ref);
  return true;
}

export async function blankPdf(lib, raw, { title = '' } = {}) {
  const spec = cleanBlank(raw);
  const doc = await lib.PDFDocument.create();
  const [w, h] = paperSize(spec);
  const metric = PAPERS[spec.paper].metric;
  for (let i = 0; i < spec.pages; i++) drawGrid(lib, doc, doc.addPage([w, h]), spec.grid, metric);
  if (title) doc.setTitle(title);
  doc.setProducer('MarkupCraft');   // i18n-ignore (program name)
  doc.setCreator('MarkupCraft');    // i18n-ignore (program name)
  doc.getInfoDict().set(lib.PDFName.of(BLANK_KEY), lib.PDFHexString.fromText(JSON.stringify({ paper: spec.paper, orient: spec.orient, grid: spec.grid })));
  return doc.save({ useObjectStreams: false });
}

/** Info /MarkupCraftBlank as read back (untrusted) → { paper, orient, grid, metric } or null. */
export function blankInfo(raw) {
  if (raw === undefined || raw === null || raw === '') return null;
  let v;
  try { v = JSON.parse(String(raw)); } catch { return null; }
  if (!v || typeof v !== 'object') return null;
  const s = cleanBlank(v);
  return { paper: s.paper, orient: s.orient, grid: s.grid, metric: PAPERS[s.paper].metric };
}

export function untitledName(names, seq = 0) {
  let n = seq;
  for (const nm of names || []) { const m = /^Untitled-(\d+)(?: \(marked up\))?\.pdf$/i.exec(String(nm)); if (m) n = Math.max(n, +m[1]); }
  return { name: 'Untitled-' + (n + 1) + '.pdf', seq: n + 1 };   // i18n-ignore (file name, like the files people save)
}
