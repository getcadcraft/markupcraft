/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: PDF content-stream text, glyph names and internal diagnostics; nothing here is shown to people (base-ui.js words its codes) */
/**
 * base-fonts.js — what a PDF font's codes mean, how wide they are, and which letters it can print.
 * No DOM. From ISO 32000 §9.6 (simple fonts, encodings, Annex D), §9.7 (Type0 / CID fonts) and
 * §9.10.3 (ToUnicode CMaps).
 *
 * `fontInfo(lib, dict)` (dict = the pdf-lib PDFDict of a /Font resource) →
 *   {base, subtype, subset, twoByte, codes(bytes) → [code], text(bytes) → string, width(code) (1/1000 em),
 *    have: Map(char → code) — letters this font can print for sure, encode(str) → {bytes, missing[]}, problem}
 * `have` is conservative on purpose: for an embedded SUBSET font only the codes its ToUnicode lists (or that
 * `seen()` saw used on a page) count, because a subset font has no glyph for any other letter. A letter not
 * in `have` is "missing": the caller falls back to a standard font and says so, never prints a blank.
 */

import { nextToken } from './base-lex.js';
import { charAdvance } from './font.js';

// WinAnsiEncoding glyph names, codes 32–255 (Annex D). Unicode comes from Windows-1252.
const WIN_NAMES = ('space exclam quotedbl numbersign dollar percent ampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash ' +
  'zero one two three four five six seven eight nine colon semicolon less equal greater question at ' +
  'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z bracketleft backslash bracketright asciicircum underscore grave ' +
  'a b c d e f g h i j k l m n o p q r s t u v w x y z braceleft bar braceright asciitilde - ' +
  'Euro - quotesinglbase florin quotedblbase ellipsis dagger daggerdbl circumflex perthousand Scaron guilsinglleft OE - Zcaron - - ' +
  'quoteleft quoteright quotedblleft quotedblright bullet endash emdash tilde trademark scaron guilsinglright oe - zcaron Ydieresis ' +
  'space exclamdown cent sterling currency yen brokenbar section dieresis copyright ordfeminine guillemotleft logicalnot hyphen registered macron ' +
  'degree plusminus twosuperior threesuperior acute mu paragraph periodcentered cedilla onesuperior ordmasculine guillemotright onequarter onehalf threequarters questiondown ' +
  'Agrave Aacute Acircumflex Atilde Adieresis Aring AE Ccedilla Egrave Eacute Ecircumflex Edieresis Igrave Iacute Icircumflex Idieresis ' +
  'Eth Ntilde Ograve Oacute Ocircumflex Otilde Odieresis multiply Oslash Ugrave Uacute Ucircumflex Udieresis Yacute Thorn germandbls ' +
  'agrave aacute acircumflex atilde adieresis aring ae ccedilla egrave eacute ecircumflex edieresis igrave iacute icircumflex idieresis ' +
  'eth ntilde ograve oacute ocircumflex otilde odieresis divide oslash ugrave uacute ucircumflex udieresis yacute thorn ydieresis').split(' ');

const CP1252 = new TextDecoder('windows-1252');
/** glyph name → Unicode text */
const NAME_UNI = new Map();
WIN_NAMES.forEach((nm, k) => { if (nm !== '-' && !NAME_UNI.has(nm)) NAME_UNI.set(nm, CP1252.decode(Uint8Array.of(k + 32))); });
for (const [nm, u] of Object.entries({
  fi: 'ﬁ', fl: 'ﬂ', ff: 'ﬀ', ffi: 'ﬃ', ffl: 'ﬄ', dotlessi: 'ı', minus: '−', fraction: '⁄', Lslash: 'Ł', lslash: 'ł',
  breve: '˘', dotaccent: '˙', ring: '˚', ogonek: '˛', caron: 'ˇ', hungarumlaut: '˝', quotesingle: "'", nbspace: ' ',
  sfthyphen: '­', middot: '·', Omega: 'Ω', mu: 'µ', pi: 'π', Delta: '∆', approxequal: '≈', notequal: '≠', lessequal: '≤',
  greaterequal: '≥', infinity: '∞', radical: '√', summation: '∑', product: '∏', integral: '∫', partialdiff: '∂', lozenge: '◊',
})) NAME_UNI.set(nm, u);

/** A glyph name → its Unicode text (Annex D names, uniXXXX, uXXXX[XX]), or null. */
export function glyphUnicode(name) {
  if (NAME_UNI.has(name)) return NAME_UNI.get(name);
  const base = name.split('.')[0];                    // "a.sc", "one.oldstyle"
  if (base !== name && NAME_UNI.has(base)) return NAME_UNI.get(base);
  let m = /^uni((?:[0-9A-F]{4})+)$/.exec(base);
  if (m) { let s = ''; for (let i = 0; i < m[1].length; i += 4) s += String.fromCharCode(parseInt(m[1].slice(i, i + 4), 16)); return s; }
  m = /^u([0-9A-F]{4,6})$/.exec(base);
  if (m) { const cp = parseInt(m[1], 16); return cp <= 0x10ffff ? String.fromCodePoint(cp) : null; }
  return null;
}

// StandardEncoding: ASCII but for two quotes, and its own upper half (Annex D).
const STD_UPPER = {
  0xa1: 'exclamdown', 0xa2: 'cent', 0xa3: 'sterling', 0xa4: 'fraction', 0xa5: 'yen', 0xa6: 'florin', 0xa7: 'section', 0xa8: 'currency',
  0xa9: 'quotesingle', 0xaa: 'quotedblleft', 0xab: 'guillemotleft', 0xac: 'guilsinglleft', 0xad: 'guilsinglright', 0xae: 'fi', 0xaf: 'fl',
  0xb1: 'endash', 0xb2: 'dagger', 0xb3: 'daggerdbl', 0xb4: 'periodcentered', 0xb6: 'paragraph', 0xb7: 'bullet', 0xb8: 'quotesinglbase',
  0xb9: 'quotedblbase', 0xba: 'quotedblright', 0xbb: 'guillemotright', 0xbc: 'ellipsis', 0xbd: 'perthousand', 0xbf: 'questiondown',
  0xc1: 'grave', 0xc2: 'acute', 0xc3: 'circumflex', 0xc4: 'tilde', 0xc5: 'macron', 0xc6: 'breve', 0xc7: 'dotaccent', 0xc8: 'dieresis',
  0xca: 'ring', 0xcb: 'cedilla', 0xcd: 'hungarumlaut', 0xce: 'ogonek', 0xcf: 'caron', 0xd0: 'emdash', 0xe1: 'AE', 0xe3: 'ordfeminine',
  0xe8: 'Lslash', 0xe9: 'Oslash', 0xea: 'OE', 0xeb: 'ordmasculine', 0xf1: 'ae', 0xf5: 'dotlessi', 0xf8: 'lslash', 0xf9: 'oslash',
  0xfa: 'oe', 0xfb: 'germandbls',
};
function baseEncoding(name) {
  const names = new Array(256).fill(null);
  if (name === 'none') return names;                  // symbolic: only the font program knows
  if (name === 'WinAnsiEncoding') { WIN_NAMES.forEach((nm, k) => { if (nm !== '-') names[k + 32] = nm; }); return names; }
  if (name === 'MacRomanEncoding') {
    const mac = new TextDecoder('macintosh');
    const rev = new Map([...NAME_UNI].map(([nm, u]) => [u, nm]));
    for (let c = 32; c < 256; c++) { const u = mac.decode(Uint8Array.of(c)); names[c] = rev.get(u) || null; }
    names[32] = 'space';
    return names;
  }
  // StandardEncoding (also the default for a non-symbolic Type 1 with no encoding).
  for (let c = 32; c < 127; c++) names[c] = WIN_NAMES[c - 32];
  names[0x27] = 'quoteright'; names[0x60] = 'quoteleft';
  for (const [c, nm] of Object.entries(STD_UPPER)) names[c] = nm;
  return names;
}

/** "bytes → string" of UTF-16BE (a ToUnicode destination). */
function utf16(bytes) {
  let s = '';
  for (let i = 0; i + 1 < bytes.length; i += 2) s += String.fromCharCode((bytes[i] << 8) | bytes[i + 1]);
  return s;
}
const codeOf = (bytes) => bytes.reduce((v, x) => v * 256 + x, 0);

/** A ToUnicode CMap → {map: Map(code → text), lens: Set(byte lengths)}. */
export function parseToUnicode(b) {
  const map = new Map();
  const lens = new Set();
  let i = 0;
  const toks = [];
  for (;;) { const tk = nextToken(b, i); if (!tk) break; toks.push(tk); i = tk.e; if (tk.t === '[') { /* flat list is fine */ } }
  for (let k = 0; k < toks.length; k++) {
    const tk = toks[k];
    if (tk.t !== 'op') continue;
    if (tk.v === 'begincodespacerange') {
      for (k++; k + 1 < toks.length && toks[k].t === 'hex'; k += 2) lens.add(toks[k].v.length);
      k--;
    } else if (tk.v === 'beginbfchar') {
      for (k++; k + 1 < toks.length && toks[k].t === 'hex'; k += 2) {
        map.set(codeOf(toks[k].v), toks[k + 1].t === 'hex' ? utf16(toks[k + 1].v) : '');
        lens.add(toks[k].v.length);
      }
      k--;
    } else if (tk.v === 'beginbfrange') {
      for (k++; k + 2 < toks.length && toks[k].t === 'hex'; ) {
        const lo = codeOf(toks[k].v), hi = codeOf(toks[k + 1].v);
        lens.add(toks[k].v.length);
        if (hi - lo > 65535) { k += 3; continue; }
        if (toks[k + 2].t === 'hex') {
          const d = toks[k + 2].v;
          for (let c = lo; c <= hi; c++) {
            const dd = Uint8Array.from(d);
            dd[dd.length - 1] += c - lo;              // the last byte counts up (§9.10.3)
            map.set(c, utf16(dd));
          }
          k += 3;
        } else if (toks[k + 2].t === '[') {
          let c = lo;
          let j = k + 3;
          for (; j < toks.length && toks[j].t !== ']'; j++) if (toks[j].t === 'hex') map.set(c++, utf16(toks[j].v));
          k = j + 1;
        } else k += 3;
      }
      k--;
    }
  }
  return { map, lens };
}

/** Type 1 font program (cleartext part) → its own encoding: code → glyph name, or null when StandardEncoding. */
export function type1Encoding(b) {
  const head = new TextDecoder('latin1').decode(b.subarray(0, Math.min(b.length, 65536)));
  if (/\/Encoding\s+StandardEncoding\s+def/.test(head)) return null;
  const out = new Array(256).fill(null);
  let any = false;
  for (const m of head.matchAll(/dup\s+(\d+)\s*\/([^\s/\[\]{}()<>]+)\s+put/g)) {
    const c = +m[1];
    if (c < 256) { out[c] = m[2]; any = true; }
  }
  return any ? out : null;
}

const STD14 = /^(Times-(Roman|Bold|Italic|BoldItalic)|Helvetica(-Bold|-Oblique|-BoldOblique)?|Courier(-Bold|-Oblique|-BoldOblique)?|Symbol|ZapfDingbats)$/;

/** Everything the base-content code needs to know about one font resource. */
export function fontInfo(lib, dict) {
  const { PDFName, PDFArray, PDFNumber, PDFRawStream, decodePDFRawStream } = lib;
  const ctx = dict.context;
  const get = (d, k) => (d ? ctx.lookup(d.get(PDFName.of(k))) : undefined);
  const nameOf = (o) => (o instanceof PDFName ? o.decodeText() : null);
  const numOf = (o) => (o instanceof PDFNumber ? o.asNumber() : null);
  const streamBytes = (o) => {
    if (!(o instanceof PDFRawStream)) return null;
    try { return decodePDFRawStream(o).decode(); } catch { return null; }
  };

  const subtype = nameOf(get(dict, 'Subtype')) || '?';
  const base = nameOf(get(dict, 'BaseFont')) || '';
  const subset = /^[A-Z]{6}\+/.test(base);
  const info = { base, subtype, subset, twoByte: false, problem: null };

  let toUni = null;
  const tu = streamBytes(get(dict, 'ToUnicode'));
  if (tu) toUni = parseToUnicode(tu);

  if (subtype === 'Type0') {
    const enc = nameOf(get(dict, 'Encoding'));
    info.twoByte = true;
    if (enc !== 'Identity-H' && enc !== 'Identity-V') info.problem = 'cmap';   // predefined CJK CMaps: read only
    const desc = get(dict, 'DescendantFonts');
    const cid = desc instanceof PDFArray ? ctx.lookup(desc.get(0)) : null;
    const dw = numOf(get(cid, 'DW')) ?? 1000;
    const widths = new Map();
    const w = get(cid, 'W');
    if (w instanceof PDFArray) {
      for (let k = 0; k < w.size(); ) {
        const first = numOf(ctx.lookup(w.get(k)));
        const next = ctx.lookup(w.get(k + 1));
        if (next instanceof PDFArray) { for (let j = 0; j < next.size(); j++) widths.set(first + j, numOf(ctx.lookup(next.get(j))) ?? dw); k += 2; }
        else { const last = numOf(next); const wd = numOf(ctx.lookup(w.get(k + 2))); for (let c = first; c <= last && c - first < 65536; c++) widths.set(c, wd ?? dw); k += 3; }
      }
    }
    info.codes = (bytes) => { const out = []; for (let i = 0; i + 1 < bytes.length; i += 2) out.push((bytes[i] << 8) | bytes[i + 1]); return out; };
    info.width = (code) => (widths.has(code) ? widths.get(code) : dw);
    info.uni = (code) => (toUni && toUni.map.has(code) ? toUni.map.get(code) : null);
    info.codeBytes = (code) => Uint8Array.of(code >> 8, code & 255);
    info.known = new Set(toUni ? toUni.map.keys() : []);   // with no ToUnicode we know nothing: text edits refuse
  } else {
    const fc = numOf(get(dict, 'FirstChar')) ?? 0;
    const ws = get(dict, 'Widths');
    const desc = get(dict, 'FontDescriptor');
    const missingW = numOf(get(desc, 'MissingWidth')) ?? 0;
    const widths = new Map();
    if (ws instanceof PDFArray) for (let j = 0; j < ws.size(); j++) widths.set(fc + j, numOf(ctx.lookup(ws.get(j))) ?? missingW);
    // encoding: base (dict /BaseEncoding, a name, or the font's own) + /Differences
    const encObj = get(dict, 'Encoding');
    const ff1 = streamBytes(get(desc, 'FontFile'));
    const builtin = ff1 ? type1Encoding(ff1) : null;
    let names;
    const flags = numOf(get(desc, 'Flags')) ?? 0;
    const symbolic = (flags & 4) !== 0;
    if (encObj instanceof PDFName) names = baseEncoding(encObj.decodeText());
    else if (encObj && encObj.get) {
      const be = nameOf(get(encObj, 'BaseEncoding'));
      names = be ? baseEncoding(be) : builtin ? builtin.slice() : baseEncoding(symbolic ? 'none' : 'StandardEncoding');
      const diffs = get(encObj, 'Differences');
      if (diffs instanceof PDFArray) {
        let c = 0;
        for (let j = 0; j < diffs.size(); j++) {
          const x = ctx.lookup(diffs.get(j));
          if (x instanceof PDFNumber) c = x.asNumber();
          else if (x instanceof PDFName) { if (c < 256) names[c] = x.decodeText(); c++; }
        }
      }
    } else names = builtin ? builtin.slice() : subtype === 'Type3' ? new Array(256).fill(null) : baseEncoding(symbolic && !STD14.test(base) ? 'none' : 'StandardEncoding');
    info.names = names;
    info.codes = (bytes) => Array.from(bytes);
    // The standard 14 may come without /Widths: Helvetica's own metrics (font.js), Courier is fixed; Times and
    // the symbol fonts are measured as Helvetica (close enough to place a selection box, not to set type).
    const std = !(ws instanceof PDFArray) && STD14.test(base.replace(/^[A-Z]{6}\+/, ''));
    // Times, Symbol and ZapfDingbats with no /Widths: we have no letter widths for them (boxes use Helvetica's), so new
    // words could not keep the line's spacing — text edits refuse ('metrics') instead of guessing.
    if (std && !/^(Helvetica|Courier)/.test(base)) info.problem = 'metrics';
    const bold = /Bold/.test(base);
    info.width = (code) => {
      if (widths.has(code)) return widths.get(code);
      if (std) {
        if (/^Courier/.test(base)) return 600;
        const u = info.uni(code);
        return u ? charAdvance(u, bold) : missingW;
      }
      return missingW;
    };
    info.uni = (code) => {
      if (toUni && toUni.map.has(code)) return toUni.map.get(code);
      const nm = names[code];
      return nm ? glyphUnicode(nm) : null;
    };
    info.codeBytes = (code) => Uint8Array.of(code);
    // Letters we are sure the font has: a full (not subset) font has its whole encoding; a subset only the
    // codes its ToUnicode lists or that are used on a page (`seen`).
    info.known = new Set();
    if (subtype === 'Type3') { /* drawn glyphs: text edits refuse */ }
    else if (!subset) for (let c = 0; c < 256; c++) { if (names[c] && (!ws || widths.get(c) > 0 || STD14.test(base))) info.known.add(c); }
    else if (toUni) for (const c of toUni.map.keys()) info.known.add(c);
  }

  info.text = (bytes) => info.codes(bytes).map((c) => info.uni(c) ?? '�').join('');
  /** codes used on the page: for a subset font they are glyphs the font surely has */
  info.seen = (bytes) => { for (const c of info.codes(bytes)) if (info.uni(c) != null) info.known.add(c); };
  info.have = () => {
    const m = new Map();
    for (const c of info.known) { const u = info.uni(c); if (u && [...u].length === 1 && !m.has(u)) m.set(u, c); }
    return m;
  };
  /** Text → this font's bytes. Letters it lacks are listed in `missing` (and left out of `bytes`). */
  info.encode = (str) => {
    const have = info.have();
    const parts = [];
    const missing = [];
    const runs = [];                                  // [{text, have: bool}] in order, for a fallback font
    for (const ch of str) {
      const c = have.get(ch);
      const ok = c !== undefined && info.problem == null;
      if (ok) parts.push(...info.codeBytes(c)); else missing.push(ch);
      const last = runs[runs.length - 1];
      if (last && last.have === ok) last.text += ch; else runs.push({ text: ch, have: ok });
    }
    return { bytes: Uint8Array.from(parts), missing, runs };
  };
  return info;
}
