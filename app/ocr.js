/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ocr.js — the words Tesseract read on a scanned page, placed on the sheet (0.7.1 71.10). No DOM.
 *
 * The page is drawn by pdf.js at about 300 dpi (`ocrScale`), read by Tesseract (ocr-ui.js runs it in a worker), and two
 * things come back: the words with their boxes in the picture's pixels (`blocks`), and Tesseract's own text-only PDF page
 * (invisible text in its glyphless font, the page as big as the picture at the given dpi). Here:
 *   ocrMatrix(vpT, pictureW, pictureH, mediaW, mediaH) → the matrix that puts the text-only page on the sheet (PDF user
 *                                   space): pdf-write.js draws it as a form XObject with this `cm`, so the saved PDF has a
 *                                   real text layer other programs search and select (kept apart from the markups)
 *   ocrItems(blocks, vpT)         → pdf.js-like text items ({str, transform, width, height, hasEOL}, user space) so the
 *                                   app's Find, auto-link and Select text use OCR words before the file is saved
 *   mediaBox(pdfBytes)            → [w, h] of Tesseract's page
 *   hasText(items)                → does the page already have text of its own (then it is skipped)
 *   ocrScale(w, h)                → the pdf.js scale: 300 dpi, at most 6000 px a side and 36 megapixels
 *   OCR_LANGS / langFor(locale) / defaultLangs(locale) → Tesseract language codes: English + the UI languages
 * vpT = the pdf.js viewport transform the picture was drawn with (user space → picture pixels, y down).
 */

import { mul, inv, apply } from './geom.js';

/** Tesseract (tessdata_fast) code per interface language; English is always there. */
export const OCR_LANGS = {
  en: 'eng', ar: 'ara', cs: 'ces', de: 'deu', es: 'spa', fr: 'fra', hi: 'hin', id: 'ind', it: 'ita', ja: 'jpn', ko: 'kor',
  nl: 'nld', pl: 'pol', pt: 'por', ru: 'rus', th: 'tha', tr: 'tur', uk: 'ukr', vi: 'vie', 'zh-Hans': 'chi_sim', 'zh-Hant': 'chi_tra',
};
export const OCR_CODES = ['eng', 'ara', 'ces', 'chi_sim', 'chi_tra', 'deu', 'fra', 'hin', 'ind', 'ita', 'jpn', 'kor', 'nld', 'pol', 'por', 'rus', 'spa', 'tha', 'tur', 'ukr', 'vie'];

export function langFor(locale) {
  const l = String(locale || '');
  if (OCR_LANGS[l]) return OCR_LANGS[l];
  if (/^zh-(TW|HK|MO)/i.test(l)) return 'chi_tra';
  return OCR_LANGS[l.split('-')[0]] || 'eng';
}
/** The page language first, then English (Tesseract reads both at once: "deu+eng"). */
export function defaultLangs(locale) {
  const c = langFor(locale);
  return c === 'eng' ? ['eng'] : [c, 'eng'];
}
/** A clean language list from untrusted input (settings): known codes, no repeats, at most 3, never empty. */
export function cleanLangs(list) {
  const out = [];
  for (const c of Array.isArray(list) ? list : []) if (OCR_CODES.includes(c) && !out.includes(c) && out.length < 3) out.push(c);
  return out.length ? out : ['eng'];
}

export const hasText = (items) => (items || []).some((it) => /\S/.test(String(it?.str ?? '')));

export const OCR_DPI = 300;
export function ocrScale(w, h, { dpi = OCR_DPI, maxSide = 6000, maxPixels = 36e6 } = {}) {
  let s = dpi / 72;
  s = Math.min(s, maxSide / Math.max(w, h, 1));
  s = Math.min(s, Math.sqrt(maxPixels / Math.max(1, w * h)));
  return Math.max(0.05, s);
}

/** [w, h] of the first /MediaBox in a PDF (Tesseract writes "/MediaBox [0 0 612 792.24]"). */
export function mediaBox(bytes) {
  const head = new TextDecoder('latin1').decode(bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []));
  const m = /\/MediaBox\s*\[\s*0\s+0\s+([\d.]+)\s+([\d.]+)\s*\]/.exec(head);
  return m ? [+m[1], +m[2]] : null;
}

/**
 * The text-only page (points, y up, as big as the picture at its dpi) → PDF user space of the sheet: points → picture pixels
 * (y down), then back through the viewport the picture was drawn with.
 */
export function ocrMatrix(vpT, picW, picH, mediaW, mediaH) {
  const kx = picW / mediaW, ky = picH / mediaH;
  const toPixels = [kx, 0, 0, -ky, 0, picH];
  return mul(inv(vpT), toPixels);
}

/**
 * Words → text items in user space. Each word's baseline comes from its line's baseline (Tesseract gives it in pixels),
 * its size so that textsearch's box (−0.22 … 0.9 of the size round the baseline) reaches the word's top.
 * `minConf`: words read with less confidence (0–100) are left out (none by default: search finds what Tesseract found).
 */
export function ocrItems(blocks, vpT, { minConf = 0 } = {}) {
  const back = inv(vpT);
  const items = [];
  for (const b of blocks || []) for (const par of b.paragraphs || []) for (const line of par.lines || []) {
    const words = (line.words || []).filter((w) => /\S/.test(w.text || '') && (w.confidence ?? 100) >= minConf);
    const bl = line.baseline || null;
    words.forEach((w, i) => {
      const { x0, y0, x1, y1 } = w.bbox;
      const baseAt = (x) => (bl && bl.x1 !== bl.x0 ? bl.y0 + (bl.y1 - bl.y0) * (x - bl.x0) / (bl.x1 - bl.x0) : y1);
      const by0 = Math.min(y1, Math.max(y0 + 1, baseAt(x0))), by1 = Math.min(y1, Math.max(y0 + 1, baseAt(x1)));
      const p0 = apply(back, [x0, by0]), p1 = apply(back, [x1, by1]);
      const len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) || 1;
      const ux = (p1[0] - p0[0]) / len, uy = (p1[1] - p0[1]) / len;
      // "up" in user space: the picture's up (−y) taken through the viewport, kept square to the baseline
      const t = apply(back, [x0, by0 - 10]);
      let vx = t[0] - p0[0], vy = t[1] - p0[1];
      const side = ux * vy - uy * vx >= 0 ? 1 : -1;
      vx = -uy * side; vy = ux * side;
      const topPx = Math.max(1, by0 - y0);
      const top = apply(back, [x0, by0 - topPx]);
      const size = Math.max(0.5, Math.hypot(top[0] - p0[0], top[1] - p0[1]) / 0.9);
      items.push({ str: w.text, transform: [ux * size, uy * size, vx * size, vy * size, p0[0], p0[1]], width: len, height: size, hasEOL: i === words.length - 1, ocr: true, conf: w.confidence ?? null });
    });
  }
  return items;
}

/** Word count and mean confidence of a page's result (for the status line). */
export function ocrSummary(items) {
  const n = items.length;
  const conf = items.filter((i) => Number.isFinite(i.conf));
  return { words: n, conf: conf.length ? Math.round(conf.reduce((s, i) => s + i.conf, 0) / conf.length) : null };
}

/** f.ocr (page index → entry) as autosave keeps it: plain data (the text-only PDF as bytes). */
export function ocrState(map) {
  return [...(map || [])].map(([index, o]) => ({ index, items: o.items, pdf: o.pdf || null, matrix: o.matrix || null, langs: o.langs, words: o.words, conf: o.conf }));
}
/** Untrusted autosave data → Map(page index → entry) for a file of nPages pages; anything malformed is left out. */
export function cleanOcrState(list, nPages) {
  const out = new Map();
  const fin = (a, n) => Array.isArray(a) && a.length === n && a.every(Number.isFinite);
  for (const e of Array.isArray(list) ? list.slice(0, 10000) : []) {
    if (!e || !Number.isInteger(e.index) || e.index < 0 || e.index >= nPages || !Array.isArray(e.items)) continue;
    const items = e.items.slice(0, 50000).filter((i) => i && typeof i.str === 'string' && i.str.length <= 1000 && fin(i.transform, 6) && Number.isFinite(i.width))
      .map((i) => ({ str: i.str, transform: i.transform.slice(), width: i.width, height: Number.isFinite(i.height) ? i.height : 0, hasEOL: !!i.hasEOL, ocr: true, conf: Number.isFinite(i.conf) ? i.conf : null }));
    let pdf = e.pdf instanceof Uint8Array ? e.pdf : e.pdf instanceof ArrayBuffer ? new Uint8Array(e.pdf) : null;
    if (pdf && (pdf.length > 32e6 || String.fromCharCode(...pdf.subarray(0, 5)) !== '%PDF-')) pdf = null;
    const matrix = fin(e.matrix, 6) ? e.matrix.slice() : null;
    out.set(e.index, { items, pdf: pdf && matrix ? pdf : null, matrix: pdf && matrix ? matrix : null, langs: cleanLangs(e.langs), ...ocrSummary(items) });
  }
  return out;
}
