/* SPDX-License-Identifier: Apache-2.0 */
/**
 * titleblock.js — read a sheet's number and title from the page's own text (pdf.js getTextContent).
 * No DOM.
 *
 * Text items are placed in the sheet as it is seen (the scale-1 viewport, so rotated pages work),
 * joined into lines, and scored. The sheet number is the largest text shaped like one — A-101, A1.01,
 * KA1-1, M-201A, E2.1 (one to three letters, then digits, optional . or - parts), optionally after
 * "Sheet" / "Sheet no." — with lines in the title block (the lower-right corner, the right-hand strip
 * or the bottom band) counted three, two or two times their size. The title is the largest wording
 * near the number that is not boilerplate (Scale, Date, Drawn by, Project no. …), with a second line of
 * the same size joined on. Scanned sheets have no text: the result is null and the caller falls back.
 */

const NUMBER = /^(?:sheet(?:\s*(?:no\.?|number|#))?\s*[:.]?\s*)?([A-Z]{1,3}[-.]?\d{1,3}(?:[.-]\d{1,3})?[A-Z]?)$/i;
const BOILER = /^(sheet(\s*(no\.?|number|#|title))?|scale|date|drawn(\s*by)?|checked(\s*by)?|designed(\s*by)?|project(\s*(no\.?|number|name))?|job(\s*no\.?)?|title|revisions?|rev\.?|issued?(\s*for)?|no\.?|by|description|approved(\s*by)?|seal|client|owner|architect|engineer|consultant|key\s*plan|north|not\s+for\s+construction|for\s+construction)\b/i;

/** pdf.js text items + viewport → { number, title } (either may be ''), or null when the page has no text. */
export function readTitleBlock(items, viewport) {
  const T = viewport.transform;
  const W = viewport.width, H = viewport.height;
  const pieces = [];
  for (const it of items || []) {
    const str = String(it.str ?? '');
    if (!str.trim()) continue;
    const [a, b, c, d, e, f] = it.transform;
    // into viewed space (y down): position and the text's direction and height there
    const x = T[0] * e + T[2] * f + T[4], y = T[1] * e + T[3] * f + T[5];
    const dx = T[0] * a + T[2] * b, dy = T[1] * a + T[3] * b;
    const size = Math.hypot(T[0] * c + T[2] * d, T[1] * c + T[3] * d);
    if (!(size > 0.5)) continue;
    const horizontal = Math.abs(dy) < Math.abs(dx) * 0.2 && dx > 0;
    const width = (it.width || 0) * Math.hypot(T[0], T[1]);
    pieces.push({ str, x, y, size, horizontal, width: width || str.length * size * 0.5 });
  }
  if (!pieces.length) return null;
  const lines = joinLines(pieces);

  const region = (l) => {
    const cx = l.x + (l.horizontal ? l.width / 2 : 0), cy = l.y;
    const right = cx > W * 0.6, bottom = cy > H * 0.6;
    if (right && bottom) return 3;
    if (cx > W * 0.75 || cy > H * 0.8) return 2;
    return 1;
  };

  let best = null;
  for (const l of lines) {
    const m = NUMBER.exec(l.text.trim());
    if (!m) continue;
    const score = l.size * region(l);
    if (!best || score > best.score) best = { line: l, number: m[1].toUpperCase(), score };
  }

  // the title: big wording near the number (or in the lower-right corner when there is no number)
  const anchor = best ? best.line : { x: W * 0.85, y: H * 0.9, width: 0 };
  const near = (l) => Math.abs((l.x + l.width / 2) - (anchor.x + anchor.width / 2)) < W * 0.3 && Math.abs(l.y - anchor.y) < H * 0.35;
  const cands = lines.filter((l) => l !== best?.line && near(l) && isWording(l.text) && (!best || region(l) >= Math.min(2, region(best.line))));
  let title = '';
  if (cands.length) {
    cands.sort((p, q) => q.size - p.size || dist(p, anchor) - dist(q, anchor));
    const top = cands[0];
    // a two-line title: another line of the same size right above or below, overlapping it
    const twin = cands.filter((l) => l !== top && Math.abs(l.size - top.size) <= top.size * 0.1 && Math.abs(l.y - top.y) <= top.size * 1.7 && l.x < top.x + top.width && l.x + l.width > top.x);
    const parts = [top, ...twin.slice(0, 1)].sort((p, q) => p.y - q.y);
    title = parts.map((l) => l.text.trim()).join(' ').replace(/\s+/g, ' ').slice(0, 120);
  }
  if (!best && !title) return null;
  return { number: best ? best.number : '', title };
}

function dist(l, a) { return Math.hypot(l.x - a.x, l.y - a.y); }

/** Wording worth calling a title: some letters, not boilerplate, not a date, number or sheet number. */
export function isWording(text) {
  const t = text.trim();
  if (t.length < 3 || t.length > 120) return false;
  if ((t.match(/[A-Za-z]/g) || []).length < 3) return false;
  if (BOILER.test(t)) return false;
  if (NUMBER.test(t)) return false;
  if (/^\d{1,2}[/.-]\d{1,2}[/.-]\d{2,4}$/.test(t)) return false;
  if (/^\d+\s*\/\s*\d+"?\s*=/.test(t) || /^1\s*:\s*\d+$/.test(t)) return false;   // a scale
  return true;
}

/** Horizontal pieces on one baseline, of one size, close together → one line; vertical pieces stay single. */
function joinLines(pieces) {
  const out = [];
  const hz = pieces.filter((p) => p.horizontal).sort((p, q) => p.y - q.y || p.x - q.x);
  for (const p of hz) {
    const line = out.find((l) => l.horizontal && Math.abs(l.y - p.y) < p.size * 0.35 && Math.abs(l.size - p.size) <= p.size * 0.15 && p.x - (l.x + l.width) < p.size * 1.2 && p.x >= l.x - p.size * 0.2);
    if (line) {
      const gap = p.x - (line.x + line.width);
      line.text += (gap > p.size * 0.15 && !line.text.endsWith(' ') && !p.str.startsWith(' ') ? ' ' : '') + p.str;
      line.width = Math.max(line.width, p.x + p.width - line.x);
    } else out.push({ text: p.str, x: p.x, y: p.y, size: p.size, width: p.width, horizontal: true });
  }
  for (const p of pieces) if (!p.horizontal) out.push({ text: p.str, x: p.x, y: p.y, size: p.size, width: 0, horizontal: false });
  for (const l of out) l.text = l.text.replace(/\s+/g, ' ').trim();
  return out;
}
