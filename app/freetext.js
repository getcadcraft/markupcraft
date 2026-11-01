/* SPDX-License-Identifier: Apache-2.0 */
/**
 * freetext.js — how another program's text box (PDF FreeText) looks: its text colour, size and weight (0.7.1 71.4). No DOM.
 *
 * A FreeText annotation keeps its look in up to four places, and /C is NOT one of them: for FreeText, /C is the box's border
 * (Bluebeam, PDF 2.0) or its fill (Acrobat). Reading the text colour from /C made a box with a pale or white border show
 * pale text, barely visible on white paper (Paper space). The order here is what other readers show:
 *   1. the appearance stream /AP /N — what the other program drew (colour and size in effect at the first text shown,
 *      following q/Q, cm/Tm scaling and form XObjects it calls; invisible text (Tr 3) is skipped);
 *   2. /RC rich text — the first span/p/body style (`color`, `font-size`, `font-weight`, the `font` shorthand);
 *   3. /DS default style — the same CSS-style properties;
 *   4. /DA default appearance — `r g b rg`, `g g`, `c m y k k`, `/Font size Tf` (size 0 = auto → not a size).
 * Each value is taken from the first source that has it; nothing found → black text at 12 pt (never a faint default).
 *
 *   parseDA(str)                → { color?, size? }
 *   parseCss(str)               → { color?, size?, bold? }    (a DS string or one style="" attribute)
 *   parseRC(xhtml)              → { color?, size?, bold? }    (styles on body, p, span — first wins per property, inner first)
 *   apTextLook(bytes, xobject)  → { color?, size? } | null    (xobject(name) → { bytes, xobject } | null for Do)
 *   freeTextLook({ ap, rc, ds, da }) → { color: '#rrggbb', size, bold }
 */

const hex2 = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
const rgbHex = (r, g, b) => '#' + hex2(r * 255) + hex2(g * 255) + hex2(b * 255);
/** 1, 3 or 4 numbers (0–1) → '#rrggbb' (gray, RGB, CMYK). */
export function compsHex(c) {
  if (!Array.isArray(c) || !c.every(Number.isFinite)) return undefined;
  if (c.length === 1) return rgbHex(c[0], c[0], c[0]);
  if (c.length === 3) return rgbHex(c[0], c[1], c[2]);
  if (c.length === 4) { const k = 1 - c[3]; return rgbHex((1 - c[0]) * k, (1 - c[1]) * k, (1 - c[2]) * k); }
  return undefined;
}
const okSize = (v) => (Number.isFinite(v) && v > 0 ? Math.max(2, Math.min(300, v)) : undefined);

/** A CSS colour (#rgb, #rrggbb, rgb(r, g, b), a few names) → '#rrggbb'. */
function cssColor(v) {
  const s = String(v || '').trim().toLowerCase();
  let m = /^#([0-9a-f]{6})$/.exec(s);
  if (m) return '#' + m[1];
  m = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(s);
  if (m) return '#' + m[1] + m[1] + m[2] + m[2] + m[3] + m[3];
  m = /^rgb\(\s*([\d.]+)(%?)\s*,\s*([\d.]+)(%?)\s*,\s*([\d.]+)(%?)\s*\)$/.exec(s);
  if (m) { const c = (n, p) => (p ? +n * 2.55 : +n); return '#' + hex2(c(m[1], m[2])) + hex2(c(m[3], m[4])) + hex2(c(m[5], m[6])); }
  return { black: '#000000', white: '#ffffff', red: '#ff0000', blue: '#0000ff', green: '#008000' }[s];
}
/** "12pt", "16px", "1.2em" → points (em: of 12 pt). */
function cssSize(v) {
  const m = /^([\d.]+)\s*(pt|px|em)?$/.exec(String(v || '').trim().toLowerCase());
  if (!m) return undefined;
  const n = +m[1];
  return okSize(m[2] === 'px' ? n * 0.75 : m[2] === 'em' ? n * 12 : n);
}

export function parseDA(str) {
  const out = {};
  const toks = String(str || '').replace(/\/[^\s/[\]()<>]+/g, ' ').trim().split(/\s+/);
  const nums = [];
  for (const tk of toks) {
    if (/^[-+]?(\d+\.?\d*|\.\d+)$/.test(tk)) { nums.push(+tk); continue; }
    if (tk === 'Tf') { const sz = okSize(nums.at(-1)); if (sz) out.size = sz; }
    else if (tk === 'rg' && nums.length >= 3) out.color = compsHex(nums.slice(-3));
    else if (tk === 'g' && nums.length >= 1) out.color = compsHex(nums.slice(-1));
    else if (tk === 'k' && nums.length >= 4) out.color = compsHex(nums.slice(-4));
    nums.length = 0;
  }
  if (!out.color) delete out.color;
  return out;
}

export function parseCss(str) {
  const out = {};
  for (const part of String(str || '').split(';')) {
    const i = part.indexOf(':');
    if (i < 0) continue;
    const k = part.slice(0, i).trim().toLowerCase(), v = part.slice(i + 1).trim();
    if (k === 'color') { const c = cssColor(v); if (c) out.color = c; }
    else if (k === 'font-size') { const sz = cssSize(v); if (sz) out.size = sz; }
    else if (k === 'font-weight') out.bold = /bold|[6-9]00/.test(v.toLowerCase());
    else if (k === 'font') {
      // shorthand: [style] [weight] size[/line-height] family…
      const words = v.split(/\s+/);
      for (const w of words) {
        if (/^(bold|bolder|[6-9]00)$/i.test(w)) out.bold = true;
        const sz = /^[\d.]+(pt|px|em)?(\/.*)?$/i.test(w) ? cssSize(w.split('/')[0]) : undefined;
        if (sz && out.size === undefined) out.size = sz;
      }
    }
  }
  return out;
}

export function parseRC(xhtml) {
  const out = {};
  const s = String(xhtml || '').slice(0, 200000);
  // the innermost element's style speaks first: spans, then paragraphs, then the body
  const styles = { span: [], p: [], body: [] };
  for (const m of s.matchAll(/<(span|p|body)\b[^>]*?\sstyle\s*=\s*("([^"]*)"|'([^']*)')/gi)) styles[m[1].toLowerCase()].push(m[3] ?? m[4]);
  for (const tag of ['span', 'p', 'body']) {
    for (const st of styles[tag]) {
      const c = parseCss(st.replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
      for (const k of ['color', 'size', 'bold']) if (out[k] === undefined && c[k] !== undefined) out[k] = c[k];
    }
  }
  return out;
}

// ---- content streams ----

const WS = new Set([0, 9, 10, 12, 13, 32]);
const DELIM = new Set([40, 41, 60, 62, 91, 93, 123, 125, 47, 37]);

/** Tokens of a content stream: numbers, {name}, {str}, '[' / ']', '<<' / '>>', and operators (strings). */
function* tokens(b) {
  let i = 0;
  const n = b.length;
  while (i < n) {
    const c = b[i];
    if (WS.has(c)) { i++; continue; }
    if (c === 37) { while (i < n && b[i] !== 10 && b[i] !== 13) i++; continue; }                     // % comment
    if (c === 40) {                                                                                     // ( literal string )
      let depth = 1; i++;
      const start = i;
      while (i < n && depth) { if (b[i] === 92) i += 2; else { if (b[i] === 40) depth++; else if (b[i] === 41) depth--; i++; } }
      yield { str: i - start }; continue;
    }
    if (c === 60 && b[i + 1] === 60) { i += 2; yield '<<'; continue; }
    if (c === 62 && b[i + 1] === 62) { i += 2; yield '>>'; continue; }
    if (c === 60) { while (i < n && b[i] !== 62) i++; i++; yield { str: 1 }; continue; }                // <hex>
    if (c === 91 || c === 93) { i++; yield c === 91 ? '[' : ']'; continue; }
    if (c === 47) {                                                                                     // /Name
      const start = ++i;
      while (i < n && !WS.has(b[i]) && !DELIM.has(b[i])) i++;
      yield { name: String.fromCharCode(...b.subarray(start, i)) }; continue;
    }
    const start = i;
    while (i < n && !WS.has(b[i]) && !DELIM.has(b[i])) i++;
    if (i === start) { i++; continue; }
    const w = String.fromCharCode(...b.subarray(start, i));
    if (/^[-+]?(\d+\.?\d*|\.\d+)$/.test(w)) { yield +w; continue; }
    if (w === 'BI') {                                                                                   // inline image: skip to EI
      while (i < n && !(b[i] === 69 && b[i + 1] === 73 && (i + 2 >= n || WS.has(b[i + 2])) && WS.has(b[i - 1]))) i++;
      i += 2; continue;
    }
    yield w;
  }
}

/**
 * The colour and size of the first visible text an appearance stream shows. bytes: the decoded stream; xobject(name) →
 * { bytes, xobject } for a form it calls with Do (or null). Null when it shows no text.
 */
export function apTextLook(bytes, xobject = () => null, depth = 0, start = null) {
  if (!bytes || !bytes.length || depth > 4) return null;
  let st = start ? { ...start } : { color: '#000000', size: 0, scale: 1, tm: 1, mode: 0, ncs: 1 };
  const stack = [];
  const args = [];
  let arrayDepth = 0;
  for (const tk of tokens(bytes)) {
    if (tk === '[') { arrayDepth++; args.push(tk); continue; }
    if (tk === ']') { arrayDepth = Math.max(0, arrayDepth - 1); args.push(tk); continue; }
    if (typeof tk !== 'string' || tk === '<<' || tk === '>>' || arrayDepth) { args.push(tk); continue; }
    const nums = args.filter((a) => typeof a === 'number');
    switch (tk) {
      case 'q': stack.push({ ...st }); break;
      case 'Q': st = stack.pop() || st; break;
      case 'cm': if (nums.length >= 6) st.scale *= Math.hypot(nums[0], nums[1]) || 1; break;
      case 'BT': st.tm = 1; break;
      case 'Tm': if (nums.length >= 6) st.tm = Math.hypot(nums[0], nums[1]) || 1; break;
      case 'Tf': if (nums.length >= 1) st.size = nums.at(-1); break;
      case 'Tr': if (nums.length >= 1) st.mode = nums.at(-1); break;
      case 'rg': if (nums.length >= 3) st.color = compsHex(nums.slice(-3)); break;
      case 'g': if (nums.length >= 1) st.color = compsHex(nums.slice(-1)); break;
      case 'k': if (nums.length >= 4) st.color = compsHex(nums.slice(-4)); break;
      case 'cs': { const nm = args.find((a) => a?.name)?.name; st.ncs = nm === 'DeviceRGB' || nm === 'CalRGB' ? 3 : nm === 'DeviceCMYK' ? 4 : 1; break; }
      case 'sc': case 'scn': if (nums.length && !args.some((a) => a?.name)) st.color = compsHex(nums.slice(-st.ncs)) || st.color; break;
      case 'Do': {
        const nm = args.find((a) => a?.name)?.name;
        const x = nm ? xobject(nm) : null;
        const r = x ? apTextLook(x.bytes, x.xobject || (() => null), depth + 1, st) : null;
        if (r) return r;
        break;
      }
      case 'Tj': case 'TJ': case "'": case '"':
        if (st.mode !== 3 && st.mode !== 7) {
          const size = Math.abs(st.size * st.tm * st.scale);
          return { color: st.color, ...(okSize(size) ? { size: Math.round(size * 100) / 100 } : {}) };
        }
        break;
      default: break;
    }
    args.length = 0;
  }
  return null;
}

/** Text colour, size and weight of a FreeText annotation from its sources (see the order at the top). */
export function freeTextLook({ ap = null, rc = '', ds = '', da = '' } = {}) {
  const from = [ap || {}, parseRC(rc), parseCss(ds), parseDA(da)];
  const pick = (k) => { for (const s of from) if (s[k] !== undefined) return s[k]; return undefined; };
  return { color: pick('color') || '#000000', size: pick('size') || 12, bold: pick('bold') === true };
}
