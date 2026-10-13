/* SPDX-License-Identifier: Apache-2.0 */
/**
 * font.js — the text faces MarkupCraft draws with: Helvetica and Helvetica-Bold metrics (Arial and
 * Liberation Sans have the same widths). The screen draws text in Helvetica/Arial; saved PDFs use the
 * reader's built-in Helvetica, so wrapping and fitting measured here line up on screen and on paper.
 * Also the WinAnsi (Windows-1252) encoder for text written into PDF appearance streams. No DOM.
 * (MarkupCraft's own copy — an app's build never imports another app's folder.)
 */

// Advance widths (1/1000 em) for printable ASCII 0x20–0x7E.
const HELV = [
  278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556,
  278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667,
  611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833,
  556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584,
];
const HELV_BOLD = [
  278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556,
  333, 333, 584, 584, 584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778, 667, 778, 722, 667,
  611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556, 333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889,
  611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584,
];
/** Windows-1252 codes 0x80–0x9F (the PDF's WinAnsiEncoding). */
export const CP1252 = { '€': 0x80, '‚': 0x82, 'ƒ': 0x83, '„': 0x84, '…': 0x85, '†': 0x86, '‡': 0x87, 'ˆ': 0x88, '‰': 0x89, 'Š': 0x8a, '‹': 0x8b, 'Œ': 0x8c, 'Ž': 0x8e, '‘': 0x91, '’': 0x92, '“': 0x93, '”': 0x94, '•': 0x95, '–': 0x96, '—': 0x97, '˜': 0x98, '™': 0x99, 'š': 0x9a, '›': 0x9b, 'œ': 0x9c, 'ž': 0x9e, 'Ÿ': 0x9f };
const WIDE = { 0x80: 556, 0x85: 1000, 0x89: 1000, 0x8c: 1000, 0x91: 222, 0x92: 222, 0x93: 333, 0x94: 333, 0x95: 350, 0x96: 556, 0x97: 1000, 0x99: 1000, 0x9c: 944, 0xa0: 278, 0xa1: 333, 0xa6: 260, 0xa7: 556, 0xa9: 737, 0xaa: 370, 0xab: 556, 0xac: 584, 0xad: 333, 0xae: 737, 0xb0: 400, 0xb1: 584, 0xb2: 333, 0xb3: 333, 0xb4: 333, 0xb5: 556, 0xb6: 537, 0xb7: 278, 0xb8: 333, 0xb9: 333, 0xba: 365, 0xbb: 556, 0xbc: 834, 0xbd: 834, 0xbe: 834, 0xbf: 611, 0xc6: 1000, 0xd7: 584, 0xd8: 778, 0xdf: 611, 0xe6: 889, 0xf7: 584, 0xf8: 611 };
/** Characters drawn as a close Windows-1252 one. */
export const SUBST = { '⌀': 'Ø', '−': '-', '′': "'", '″': '"', '\t': ' ', ' ': ' ' };

/** The CSS font stack that has Helvetica's widths. */
export const SCREEN_FONT = 'Helvetica, Arial, "Liberation Sans", "Nimbus Sans", sans-serif';

export function charAdvance(ch, bold = false) {
  ch = SUBST[ch] || ch;
  const table = bold ? HELV_BOLD : HELV;
  const code = ch.codePointAt(0);
  if (code >= 32 && code < 127) return table[code - 32];
  const w = CP1252[ch] !== undefined ? WIDE[CP1252[ch]] : WIDE[code];
  if (w) return bold ? Math.round(w * 1.04) : w;
  const b = ch.normalize('NFD')[0].codePointAt(0);
  if (b >= 32 && b < 127) return table[b - 32];
  return code >= 0x2e80 ? 1000 : 556;
}

/** Width of a string at a font size (same units as size). */
export function textWidth(s, size, bold = false) {
  let w = 0;
  for (const ch of String(s)) w += charAdvance(ch, bold);
  return (w / 1000) * size;
}

/**
 * Break text into lines that fit `maxWidth` at `size` (words wrap; a word longer than a line
 * breaks by character). Hard line breaks are kept. maxWidth <= 0 → no wrapping.
 */
export function wrapText(text, size, maxWidth, bold = false) {
  const out = [];
  for (const para of String(text ?? '').replace(/\r\n?/g, '\n').split('\n')) {
    if (!(maxWidth > 0)) { out.push(para); continue; }
    const fits = (s) => textWidth(s, size, bold) <= maxWidth;
    let line = '';
    for (const tok of para.split(/(\s+)/)) {
      if (tok === '') continue;
      if (/^\s+$/.test(tok)) { if (line !== '') line += tok; continue; }
      if (fits((line + tok).trimEnd())) { line += tok; continue; }
      if (line.trim() !== '') { out.push(line.trimEnd()); line = ''; }
      if (fits(tok)) { line = tok; continue; }
      // a single word wider than the line: break it by character
      for (const ch of tok) {
        if (line !== '' && !fits(line + ch)) { out.push(line); line = ''; }
        line += ch;
      }
    }
    out.push(line.trimEnd());
  }
  return out;
}

/** One character → its WinAnsi byte, or 63 ('?') when the built-in fonts cannot show it. */
export function winAnsiByte(ch) {
  ch = SUBST[ch] || ch;
  if (CP1252[ch] !== undefined) return CP1252[ch];
  const code = ch.codePointAt(0);
  if ((code >= 32 && code < 127) || (code >= 0xa0 && code <= 0xff)) return code;
  const b = ch.normalize('NFD')[0].codePointAt(0);
  if (b >= 32 && b < 127) return b;
  return 63;
}

/** Text → PDF hex string `<...>` in WinAnsiEncoding, and how many characters became '?'. */
export function winAnsiHex(s) {
  let hex = '', missing = 0;
  for (const ch of String(s)) {
    const b = winAnsiByte(ch);
    if (b === 63 && ch !== '?') missing++;
    hex += b.toString(16).padStart(2, '0');
  }
  return { hex: '<' + hex + '>', missing };
}
