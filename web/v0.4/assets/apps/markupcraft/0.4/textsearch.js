/* SPDX-License-Identifier: Apache-2.0 */
/**
 * textsearch.js — find words in the drawings' own text (0.4 K14). No DOM.
 *
 *   textIndex(items)                 pdf.js getTextContent() items → { text, spans: [{ start, end, item }] }: the page's
 *                                    text as one string (items joined by a space, or a newline where pdf.js ends a line)
 *   findHits(index, query, { matchCase, wholeWord, max }) → [{ start, end, rect: [x0,y0,x1,y1] (PDF user space),
 *                                    snippet }]: every match; a match running over several items gets one box round
 *                                    its parts; each part's box follows the text's own direction (rotated text works)
 *   rangeBox(index, start, end)      → the box round any stretch of the text (the auto-link of K16 uses it)
 *   hitCloud(hit, { pad, rot })      → cloudrect markup fields round a hit, `pad` points of room
 *
 * Positions: item.transform = [a b c d e f] maps text space to user space; (e, f) is the baseline start, (a, b) runs
 * along the text, (c, d) is up with the font size as its length; item.width is the advance in user space. A part of an
 * item gets the share of the width its characters take (proportional; drawings rarely use fonts where that is far off).
 * Scanned sheets have no text: no hits, and the caller says so.
 */

export function textIndex(items) {
  let text = '';
  const spans = [];
  for (const it of items || []) {
    const s = String(it?.str ?? '');
    if (!s) { if (it?.hasEOL && text && !text.endsWith('\n')) text += '\n'; continue; }
    if (text && !/[\s\n]$/.test(text)) text += ' ';
    spans.push({ start: text.length, end: text.length + s.length, item: it });
    text += s;
    if (it.hasEOL) text += '\n';
  }
  return { text, spans };
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** The box of characters [i0, i1) of one item, in user space. */
function partBox(it, i0, i1) {
  const [a, b, c, d, e, f] = it.transform || [1, 0, 0, 1, 0, 0];
  const n = Math.max(1, String(it.str).length);
  const len = Math.hypot(a, b) || 1, up = Math.hypot(c, d) || 1;
  const ux = a / len, uy = b / len, vx = c / up, vy = d / up;
  const size = up;
  const w = Number.isFinite(it.width) && it.width > 0 ? it.width : n * size * 0.5;
  const s0 = (w * i0) / n, s1 = (w * i1) / n;
  const lo = -0.22 * size, hi = 0.9 * size;   // descenders and cap height around the baseline
  const pts = [[s0, lo], [s1, lo], [s1, hi], [s0, hi]].map(([s, t]) => [e + ux * s + vx * t, f + uy * s + vy * t]);
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

/** The box (user space) round characters [start, end) of a textIndex's text, or null. */
export function rangeBox(index, start, end) {
  let box = null;
  for (const sp of index.spans) {
    if (sp.end <= start || sp.start >= end) continue;
    const b = partBox(sp.item, Math.max(0, start - sp.start), Math.min(sp.end, end) - sp.start);
    box = box ? [Math.min(box[0], b[0]), Math.min(box[1], b[1]), Math.max(box[2], b[2]), Math.max(box[3], b[3])] : b;
  }
  return box;
}

export function findHits(index, query, { matchCase = false, wholeWord = false, max = 2000 } = {}) {
  const q = String(query || '').trim();
  if (!q || !index?.text) return [];
  const words = q.split(/\s+/).map(esc).join('\\s+');   // a phrase may run over items and lines
  const re = new RegExp((wholeWord ? '(?<![\\p{L}\\p{N}])' : '') + words + (wholeWord ? '(?![\\p{L}\\p{N}])' : ''), 'gu' + (matchCase ? '' : 'i'));
  const out = [];
  for (const m of index.text.matchAll(re)) {
    const start = m.index, end = m.index + m[0].length;
    let box = null;
    for (const sp of index.spans) {
      if (sp.end <= start || sp.start >= end) continue;
      const b = partBox(sp.item, Math.max(0, start - sp.start), Math.min(sp.end, end) - sp.start);
      box = box ? [Math.min(box[0], b[0]), Math.min(box[1], b[1]), Math.max(box[2], b[2]), Math.max(box[3], b[3])] : b;
    }
    if (!box) continue;
    const a = Math.max(0, start - 30), z = Math.min(index.text.length, end + 30);
    out.push({ start, end, rect: box, snippet: (a ? '…' : '') + index.text.slice(a, z).replace(/\s+/g, ' ') + (z < index.text.length ? '…' : '') });
    if (out.length >= max) break;
  }
  return out;
}

export function hitCloud(hit, { pad = 4, rot = 0, sheet, author = '', subject = '' } = {}) {
  const [x0, y0, x1, y1] = hit.rect;
  return { sheet, type: 'cloudrect', rot, author, subject, rect: [x0 - pad, y0 - pad, x1 + pad, y1 + pad] };
}
