/* SPDX-License-Identifier: Apache-2.0 */
/**
 * textselect.js — selecting the page's own words to copy them (0.7.1 71.10: Select text). No DOM.
 *
 * Works on a textsearch.js index, so the same words Find searches: the PDF's own text, or the words OCR read on a scan.
 *   wordsOf(index)              → [{ start, end, box }] every run of non-space characters, its box in user space
 *   between(words, a, b)        → indexes of the words from the one at/nearest point a to the one at/nearest point b, in
 *                                 reading order (a drag selects like text: whole lines between the two ends)
 *   inBox(words, box)           → indexes of the words a box touches
 *   wordAt(words, p, tol)       → index of the word under p (or -1)
 *   selectionText(index, words, picked) → the text to copy: words in reading order, a newline where the page had one
 */

import { rangeBox } from './textsearch.js';

export function wordsOf(index) {
  const out = [];
  if (!index?.text) return out;
  for (const m of index.text.matchAll(/\S+/gu)) {
    const box = rangeBox(index, m.index, m.index + m[0].length);
    if (box) out.push({ start: m.index, end: m.index + m[0].length, box });
  }
  return out;
}

const inside = (b, p, tol = 0) => p[0] >= b[0] - tol && p[0] <= b[2] + tol && p[1] >= b[1] - tol && p[1] <= b[3] + tol;
const distTo = (b, p) => Math.hypot(Math.max(b[0] - p[0], 0, p[0] - b[2]), Math.max(b[1] - p[1], 0, p[1] - b[3]));

export function wordAt(words, p, tol = 0) {
  let best = -1, bd = Infinity;
  words.forEach((w, i) => { if (inside(w.box, p, tol)) { const d = distTo(w.box, p); if (d < bd) { bd = d; best = i; } } });
  return best;
}
function nearest(words, p) {
  let best = -1, bd = Infinity;
  words.forEach((w, i) => { const d = distTo(w.box, p); if (d < bd) { bd = d; best = i; } });
  return best;
}

export function between(words, a, b) {
  if (!words.length) return [];
  const i = nearest(words, a), j = nearest(words, b);
  const lo = Math.min(i, j), hi = Math.max(i, j);
  const out = [];
  for (let k = lo; k <= hi; k++) out.push(k);
  return out;
}

export function inBox(words, box) {
  const [x0, y0, x1, y1] = box;
  const out = [];
  words.forEach((w, i) => { if (w.box[2] >= x0 && w.box[0] <= x1 && w.box[3] >= y0 && w.box[1] <= y1) out.push(i); });
  return out;
}

export function selectionText(index, words, picked) {
  const list = [...new Set(picked)].filter((i) => words[i]).sort((p, q) => words[p].start - words[q].start);
  let out = '';
  for (let k = 0; k < list.length; k++) {
    const w = words[list[k]];
    if (k) {
      const prev = words[list[k - 1]];
      out += /\n/.test(index.text.slice(prev.end, w.start)) ? '\n' : ' ';
    }
    out += index.text.slice(w.start, w.end);
  }
  return out;
}
