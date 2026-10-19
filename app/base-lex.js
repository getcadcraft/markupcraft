/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: PDF content-stream text, glyph names and internal diagnostics; nothing here is shown to people (base-ui.js words its codes) */
/**
 * base-lex.js — a PDF content stream as a list of operations, written back byte for byte. No DOM.
 *
 * Built from ISO 32000 (§7.2 lexical conventions, §7.8.2 content streams, §8.9.7 inline images).
 * `parseOps(bytes)` → `{ops, problems}`: each op is `{op, args, s, e}` where `s`..`e` is its byte
 * range in the stream (first operand to the end of the operator). Bytes between ops (white space,
 * comments) are never parsed into anything, so `writeOps(bytes, ops)` with no edits gives back the
 * stream exactly, and an edit only rewrites the bytes of the ops it touches.
 *
 * Tokens: `{t, s, e, v}` — t is 'num' | 'name' | 'str' | 'hex' | 'bool' | 'null' | 'arr' | 'dict' |
 * 'kw' (a keyword that is not an operator, kept as an operand so a broken stream still round-trips).
 * Inline images: `{op: 'BI', dict: [key, value, …], data: {s, e}, s, e}` (the dict's keys are names).
 * Nothing here throws on a damaged stream: oddities go in `problems` and the bytes stay as they were.
 */

const WS = new Uint8Array(256);
for (const c of [0, 9, 10, 12, 13, 32]) WS[c] = 1;
const DELIM = new Uint8Array(256);
for (const c of '()<>[]{}/%') DELIM[c.charCodeAt(0)] = 1;
const isRegular = (c) => !WS[c] && !DELIM[c];

const latin1 = (bytes, s, e) => {
  let out = '';
  for (let i = s; i < e; i++) out += String.fromCharCode(bytes[i]);
  return out;
};

/** One token from `i` (white space and comments skipped). null at the end. */
export function nextToken(b, i, end = b.length) {
  for (;;) {
    while (i < end && WS[b[i]]) i++;
    if (i >= end) return null;
    if (b[i] !== 0x25) break;                         // % comment to the end of the line
    while (i < end && b[i] !== 10 && b[i] !== 13) i++;
  }
  const s = i;
  const c = b[i];
  if (c === 0x28) {                                   // ( literal string )
    let depth = 1; i++;
    const out = [];
    while (i < end && depth) {
      const x = b[i];
      if (x === 0x5c) {                               // backslash
        const y = b[i + 1];
        i += 2;
        if (y === undefined) break;
        if (y === 0x6e) out.push(10); else if (y === 0x72) out.push(13); else if (y === 0x74) out.push(9);
        else if (y === 0x62) out.push(8); else if (y === 0x66) out.push(12);
        else if (y === 13) { if (b[i] === 10) i++; }  // line continuation
        else if (y === 10) { /* continuation */ }
        else if (y >= 0x30 && y <= 0x37) {
          let v = y - 0x30;
          for (let k = 0; k < 2 && b[i] >= 0x30 && b[i] <= 0x37; k++) v = v * 8 + b[i++] - 0x30;
          out.push(v & 255);
        } else out.push(y);
        continue;
      }
      if (x === 0x28) depth++;
      else if (x === 0x29 && --depth === 0) { i++; break; }
      out.push(x === 13 ? (b[i + 1] === 10 ? (i++, 10) : 10) : x);   // EOL in a string = LF
      i++;
    }
    return { t: 'str', s, e: i, v: Uint8Array.from(out), open: depth > 0 };
  }
  if (c === 0x3c) {
    if (b[i + 1] === 0x3c) return { t: '<<', s, e: i + 2 };
    i++;
    const out = [];
    let hi = -1;
    while (i < end && b[i] !== 0x3e) {
      const x = b[i++];
      const d = x >= 0x30 && x <= 0x39 ? x - 0x30 : x >= 0x41 && x <= 0x46 ? x - 55 : x >= 0x61 && x <= 0x66 ? x - 87 : -1;
      if (d < 0) continue;
      if (hi < 0) hi = d; else { out.push(hi * 16 + d); hi = -1; }
    }
    if (hi >= 0) out.push(hi * 16);
    return { t: 'hex', s, e: Math.min(end, i + 1), v: Uint8Array.from(out) };
  }
  if (c === 0x3e) return b[i + 1] === 0x3e ? { t: '>>', s, e: i + 2 } : { t: 'kw', s, e: i + 1, v: '>' };
  if (c === 0x5b || c === 0x5d || c === 0x7b || c === 0x7d) return { t: String.fromCharCode(c), s, e: i + 1 };
  if (c === 0x29) return { t: 'kw', s, e: i + 1, v: ')' };
  if (c === 0x2f) {                                   // /Name with #xx escapes
    i++;
    let v = '';
    while (i < end && isRegular(b[i])) {
      if (b[i] === 0x23 && i + 2 < end) {
        const h = parseInt(latin1(b, i + 1, i + 3), 16);
        if (Number.isFinite(h)) { v += String.fromCharCode(h); i += 3; continue; }
      }
      v += String.fromCharCode(b[i++]);
    }
    return { t: 'name', s, e: i, v };
  }
  while (i < end && isRegular(b[i])) i++;
  const word = latin1(b, s, i);
  if (/^[+-]?(\d+\.?\d*|\.\d+)$/.test(word)) return { t: 'num', s, e: i, v: Number(word) };
  if (/^[+-]?\d*\.?\d*$/.test(word)) return { t: 'num', s, e: i, v: Number(word.replace(/^([+-]?)\.?$/, '$10')) || 0, odd: true };
  if (word === 'true' || word === 'false') return { t: 'bool', s, e: i, v: word === 'true' };
  if (word === 'null') return { t: 'null', s, e: i, v: null };
  return { t: 'op', s, e: i, v: word };
}

/** Collect an array / dict from the token after its opener. Returns [token, nextIndex]. */
function compound(b, open, end, problems) {
  const items = [];
  const close = open.t === '[' ? ']' : open.t === '<<' ? '>>' : '}';
  let i = open.e;
  for (;;) {
    const tk = nextToken(b, i, end);
    if (!tk) { problems.push({ at: open.s, what: 'unclosed ' + open.t }); return [{ t: open.t === '<<' ? 'dict' : 'arr', s: open.s, e: i, items, open: true }, i]; }
    if (tk.t === close) return [{ t: open.t === '<<' ? 'dict' : 'arr', s: open.s, e: tk.e, items }, tk.e];
    if (tk.t === '[' || tk.t === '<<' || tk.t === '{') { const [c, j] = compound(b, tk, end, problems); items.push(c); i = j; continue; }
    if (tk.t === 'op') tk.t = 'kw';                   // a keyword inside an array or dict
    items.push(tk);
    i = tk.e;
  }
}

/** Where an inline image's data ends: [dataEnd, eiStart, eiEnd] (§8.9.7). */
function inlineEnd(b, from, end, dict) {
  const get = (...keys) => {
    for (let k = 0; k < dict.length; k += 2) if (keys.includes(dict[k].v)) return dict[k + 1];
    return null;
  };
  const len = get('L', 'Length');                    // PDF 2.0 says how long it is
  const filt = get('F', 'Filter');
  if (len && len.t === 'num' && len.v >= 0) {
    const de = from + len.v;
    const ei = nextToken(b, de, end);
    if (ei && ei.t === 'op' && ei.v === 'EI') return [de, ei.s, ei.e];
  }
  if (!filt || (filt.t === 'arr' && !filt.items.length)) {   // raw samples: the size is known
    const w = get('W', 'Width'), h = get('H', 'Height'), bpc = get('BPC', 'BitsPerComponent');
    const im = get('IM', 'ImageMask'), cs = get('CS', 'ColorSpace');
    const comps = im && im.v ? 1 : !cs ? 1 : cs.t === 'name' ? ({ G: 1, DeviceGray: 1, RGB: 3, DeviceRGB: 3, CMYK: 4, DeviceCMYK: 4, I: 1, Indexed: 1 }[cs.v] || 0) : cs.t === 'arr' ? 1 : 0;
    const bits = im && im.v ? 1 : bpc ? bpc.v : 0;
    if (w && h && comps && bits) {
      const de = from + Math.ceil(w.v * comps * bits / 8) * h.v;
      const ei = nextToken(b, de, end);
      if (ei && ei.t === 'op' && ei.v === 'EI') return [de, ei.s, ei.e];
    }
  }
  // Otherwise: the first "EI" between white space that is followed by something that reads as content.
  for (let i = from; i + 1 < end; i++) {
    if (b[i] !== 0x45 || b[i + 1] !== 0x49) continue;
    if (i > from && !WS[b[i - 1]]) continue;
    const after = i + 2;
    if (after < end && !WS[b[after]] && !DELIM[b[after]]) continue;
    let ok = true;                                   // the next bytes must be plain text, not binary
    for (let k = after; k < Math.min(end, after + 24); k++) if (b[k] > 126 || (b[k] < 32 && !WS[b[k]])) { ok = false; break; }
    if (ok) return [i > from ? i - 1 : i, i, after];
  }
  return [end, end, end];
}

/** The stream → its operations. */
export function parseOps(b, end = b.length) {
  const ops = [];
  const problems = [];
  let args = [];
  let i = 0;
  for (;;) {
    const tk = nextToken(b, i, end);
    if (!tk) break;
    if (tk.t === '[' || tk.t === '<<' || tk.t === '{') { const [c, j] = compound(b, tk, end, problems); args.push(c); i = j; continue; }
    if (tk.t !== 'op') {
      if (tk.t === ']' || tk.t === '>>' || tk.t === '}') problems.push({ at: tk.s, what: 'stray ' + tk.t });
      args.push(tk); i = tk.e; continue;
    }
    const s = args.length ? args[0].s : tk.s;
    if (tk.v === 'BI') {
      const dict = [];
      let j = tk.e;
      let id = null;
      for (;;) {
        const k = nextToken(b, j, end);
        if (!k) break;
        if (k.t === 'op' && k.v === 'ID') { id = k; break; }
        if (k.t === '[' || k.t === '<<') { const [c, jj] = compound(b, k, end, problems); dict.push(c); j = jj; continue; }
        dict.push(k); j = k.e;
      }
      if (!id) { problems.push({ at: tk.s, what: 'BI without ID' }); ops.push({ op: 'BI', args, dict, data: { s: j, e: j }, s, e: j }); args = []; i = j; continue; }
      const from = id.e + 1;                         // one white-space byte after ID
      const [de, eis, eie] = inlineEnd(b, from, end, dict);
      if (eis === end) problems.push({ at: tk.s, what: 'inline image without EI' });
      ops.push({ op: 'BI', args, dict, data: { s: from, e: de }, s, e: eie });
      args = []; i = eie; continue;
    }
    ops.push({ op: tk.v, args, s, e: tk.e });
    args = [];
    i = tk.e;
  }
  if (args.length) problems.push({ at: args[0].s, what: 'operands with no operator at the end' });
  return { ops, problems, tail: args };
}

/**
 * Write the stream back from its ops. `edits` = [{s, e, bytes}] replace byte ranges (sorted or not;
 * they must not overlap). With no edits the result is the input, byte for byte.
 */
export function writeOps(b, ops, edits = []) {
  if (!edits.length) {
    // Rebuild from the op list (what is between ops is copied as it was) — the round trip the spike tests.
    const parts = [];
    let at = 0;
    for (const o of ops) { parts.push(b.subarray(at, o.s), b.subarray(o.s, o.e)); at = o.e; }
    parts.push(b.subarray(at));
    return concat(parts);
  }
  return splice(b, edits);
}

/** Replace byte ranges. */
export function splice(b, edits) {
  const list = [...edits].sort((x, y) => x.s - y.s || x.e - y.e);
  const parts = [];
  let at = 0;
  for (const ed of list) {
    if (ed.s < at) throw new Error('overlapping edits');
    parts.push(b.subarray(at, ed.s), ed.bytes);
    at = ed.e;
  }
  parts.push(b.subarray(at));
  return concat(parts);
}

export function concat(parts) {
  let n = 0;
  for (const p of parts) n += p.length;
  const out = new Uint8Array(n);
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}

/** A number as a content stream writes it (no exponent, at most 4 decimals). */
export function num(v) {
  if (!Number.isFinite(v)) return '0';
  const s = (Math.abs(v) < 5e-5 ? 0 : v).toFixed(4).replace(/\.?0+$/, '');
  return s === '-0' ? '0' : s;
}

/** Text → bytes (Latin-1; callers pass operator text only). */
export function ascii(s) {
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i) & 255;
  return out;
}

/** Bytes as a PDF string token: literal when it is plain printable text, else hex. */
export function stringToken(bytes) {
  let plain = true;
  for (const c of bytes) if (c < 32 || c > 126) { plain = false; break; }
  if (!plain) return '<' + Array.from(bytes, (c) => c.toString(16).padStart(2, '0')).join('') + '>';
  let s = '(';
  for (const c of bytes) s += c === 0x28 || c === 0x29 || c === 0x5c ? '\\' + String.fromCharCode(c) : String.fromCharCode(c);
  return s + ')';
}

/** A token's value for comparisons (numbers, names, strings as arrays). */
export function tokenValue(tk) {
  if (!tk) return undefined;
  if (tk.t === 'arr') return tk.items.map(tokenValue);
  if (tk.t === 'dict') { const o = {}; for (let k = 0; k + 1 < tk.items.length; k += 2) o[tk.items[k].v] = tokenValue(tk.items[k + 1]); return o; }
  if (tk.t === 'str' || tk.t === 'hex') return Array.from(tk.v);
  return tk.v;
}
