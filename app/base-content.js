/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: PDF content-stream text, glyph names and internal diagnostics; nothing here is shown to people (base-ui.js words its codes) */
/**
 * base-content.js — a page's own content (not markups): read it, find its objects, edit them, write
 * them back. No DOM. ISO 32000 §8 (graphics), §9.4 (text objects), §8.10 (form XObjects).
 *
 * `editBlocker(lib, doc)` → null | 'encrypted' | 'signed' — files we never change (editing breaks a signature).
 * `readPage(lib, doc, index)` → page content `{index, contents: Map(key → Content), page: Content,
 *   objects, problems}`. A Content is one stream of operators: the page's (its /Contents streams joined,
 *   each one's byte range kept in `segments`) or a form XObject's (`key` "<obj> <gen> R").
 *   Objects `{id, key, kind: path|clip|text|image|form|shading, where (Content key), first, last (op indices),
 *   bbox [x0 y0 x1 y1] in page space, ctm, parent (the form object's id), …}` in painting order. `key` names the
 *   object in the ORIGINAL content and stays the same however often it is edited ("12" = the page's op 12,
 *   "30/5" = op 5 of the form drawn by the page's op 30). Paths also carry `paint`, `clip`, `d` (page-space
 *   M/L/C/Z, for picking and drawing), `lw` (page units), `strokeRgb`/`fillRgb` ('#rrggbb' or null when the
 *   colour space is not a device one); text runs `font`, `size`, `text`, `info` (base-fonts.js) and where the run
 *   sits on its line; pictures `name`, `inline`; forms `name`, `ref`.
 * Edits are byte-range replacements on one Content (`{key, s, e, bytes, use}`), made by:
 *   `objectEdits(pc, obj, e)` — everything one object's edit says at once: e = {T (page-space matrix: move, scale,
 *   turn), nodes ({op index: [numbers]} = moved points / handles, user space), stroke, fill ('#rrggbb'), lw,
 *   del, text}; and the single-purpose `transformEdits`, `recolorEdits`, `deleteEdits`, `textEdits` the spike used.
 * `applyEdits(lib, doc, pc, edits)` writes the changed Contents back as new Flate streams; every stream
 * nothing touched keeps its bytes exactly (the page's other streams, other pages, other forms). A form XObject
 * drawn more than once is copied for the use that was edited (a new XObject, the `Do` renamed), never changed
 * under the other uses. `appendContent(lib, doc, index, bytes)` adds new content on top of a page.
 */

import { parseOps, splice, concat, num, ascii, stringToken } from './base-lex.js';
import { fontInfo } from './base-fonts.js';
import { charAdvance, winAnsiHex } from './font.js';

export const MAX_FORM_DEPTH = 12;

// ---- matrices [a b c d e f], row vectors: p' = p × M -------------------------------------------
export const I = [1, 0, 0, 1, 0, 0];
export function mul(m, n) {
  return [
    m[0] * n[0] + m[1] * n[2], m[0] * n[1] + m[1] * n[3],
    m[2] * n[0] + m[3] * n[2], m[2] * n[1] + m[3] * n[3],
    m[4] * n[0] + m[5] * n[2] + n[4], m[4] * n[1] + m[5] * n[3] + n[5],
  ];
}
export function inv(m) {
  const det = m[0] * m[3] - m[1] * m[2];
  if (!det) return null;
  return [m[3] / det, -m[1] / det, -m[2] / det, m[0] / det, (m[2] * m[5] - m[3] * m[4]) / det, (m[1] * m[4] - m[0] * m[5]) / det];
}
export const apply = (m, x, y) => [x * m[0] + y * m[2] + m[4], x * m[1] + y * m[3] + m[5]];
export const translate = (dx, dy) => [1, 0, 0, 1, dx, dy];
/** Scale by sx, sy about (cx, cy). */
export const scaleAbout = (sx, sy, cx, cy) => [sx, 0, 0, sy, cx - sx * cx, cy - sy * cy];

const meet = (a, b) => [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.min(a[3], b[3])];
function grow(bb, x, y) {
  if (x < bb[0]) bb[0] = x; if (y < bb[1]) bb[1] = y;
  if (x > bb[2]) bb[2] = x; if (y > bb[3]) bb[3] = y;
}
const emptyBox = () => [Infinity, Infinity, -Infinity, -Infinity];

// ---- files we refuse ------------------------------------------------------------------------------
export function editBlocker(lib, doc) {
  const { PDFName, PDFNumber, PDFArray, PDFDict } = lib;
  if (doc.isEncrypted || doc.context.trailerInfo.Encrypt) return 'encrypted';
  const ctx = doc.context;
  const cat = doc.catalog;
  if (cat.get(PDFName.of('Perms'))) return 'signed';
  const form = ctx.lookup(cat.get(PDFName.of('AcroForm')));
  if (form instanceof PDFDict) {
    const flags = ctx.lookup(form.get(PDFName.of('SigFlags')));
    if (flags instanceof PDFNumber && (flags.asNumber() & 1)) return 'signed';
    const fields = ctx.lookup(form.get(PDFName.of('Fields')));
    const stack = fields instanceof PDFArray ? [...fields.asArray()] : [];
    for (let guard = 0; stack.length && guard < 10000; guard++) {
      const f = ctx.lookup(stack.pop());
      if (!(f instanceof PDFDict)) continue;
      const ft = f.get(PDFName.of('FT'));
      if (ft && ft.decodeText && ft.decodeText() === 'Sig' && f.get(PDFName.of('V'))) return 'signed';
      const kids = ctx.lookup(f.get(PDFName.of('Kids')));
      if (kids instanceof PDFArray) stack.push(...kids.asArray());
    }
  }
  return null;
}

// ---- reading -------------------------------------------------------------------------------------
const refKey = (ref) => ref.objectNumber + ' ' + ref.generationNumber + ' R';

/** A stream's decoded bytes (null when a filter can't be read). */
export function streamBytes(lib, stream) {
  try { return lib.decodePDFRawStream(stream).decode(); } catch { return null; }
}

/** The page's /Contents → [{ref, stream}] (a direct stream has ref null). */
function contentStreams(lib, doc, node) {
  const { PDFName, PDFArray, PDFRef } = lib;
  const ctx = doc.context;
  const raw = node.get(PDFName.of('Contents'));
  if (!raw) return [];
  const list = [];
  const one = (x) => { if (x instanceof PDFRef) list.push({ ref: x, stream: ctx.lookup(x) }); else if (x) list.push({ ref: null, stream: x }); };
  const res = raw instanceof PDFRef ? ctx.lookup(raw) : raw;
  if (res instanceof PDFArray) res.asArray().forEach(one); else one(raw);
  return list;
}

/** How often each stream object is used as page content, across the document (shared streams are copied before an edit). */
export function contentUseCounts(lib, doc) {
  const counts = new Map();
  for (const page of doc.getPages()) {
    for (const { ref } of contentStreams(lib, doc, page.node)) if (ref) counts.set(refKey(ref), (counts.get(refKey(ref)) || 0) + 1);
  }
  return counts;
}

export function readPage(lib, doc, index) {
  const { PDFName, PDFDict, PDFArray, PDFNumber, PDFRawStream, PDFRef } = lib;
  const ctx = doc.context;
  const page = doc.getPage(index);
  const problems = [];
  const contents = new Map();
  const objects = [];
  const fonts = new Map();

  // the page's streams, joined with a newline between them (tokens never span streams, §7.8.2)
  const parts = contentStreams(lib, doc, page.node);
  const segs = [];
  const chunks = [];
  let at = 0;
  for (const [k, p] of parts.entries()) {
    const bytes = p.stream instanceof PDFRawStream ? streamBytes(lib, p.stream) : null;
    if (!bytes) { problems.push({ what: 'unreadable content stream', at: k }); continue; }
    if (chunks.length) { chunks.push(Uint8Array.of(10)); at += 1; }
    segs.push({ ref: p.ref, s: at, e: at + bytes.length, raw: p.stream });
    chunks.push(bytes);
    at += bytes.length;
  }
  const pageBytes = concat(chunks);
  const pageContent = { key: 'page', bytes: pageBytes, segments: segs, ...parseOps(pageBytes), resources: page.node.Resources() };
  contents.set('page', pageContent);

  const lookup = (d, k) => (d instanceof PDFDict ? ctx.lookup(d.get(PDFName.of(k))) : undefined);
  const nums = (arr) => (arr instanceof PDFArray ? arr.asArray().map((x) => { const v = ctx.lookup(x); return v instanceof PDFNumber ? v.asNumber() : 0; }) : null);

  const fontFor = (resources, name) => {
    const fd = lookup(lookup(resources, 'Font'), name);
    if (!(fd instanceof PDFDict)) return null;
    const ref = lookup(resources, 'Font').get(PDFName.of(name));
    const key = ref instanceof PDFRef ? refKey(ref) : null;
    if (key && fonts.has(key)) return fonts.get(key);
    let fi = null;
    try { fi = fontInfo(lib, fd); } catch (err) { problems.push({ what: 'font ' + name + ': ' + err.message }); }
    if (fi) fi.resName = name;
    if (key) fonts.set(key, fi);
    return fi;
  };

  let nextId = 1;
  const byId = new Map();
  const push = (o) => { if (o.kind !== 'clip' && cur.clipBox) o.clipBox = cur.clipBox; objects.push(o); byId.set(o.id, o); return o; };
  const cur = { clipBox: null };
  const walk = (content, ctm0, depth, parentObj, seen) => {
    const parent = parentObj ? parentObj.id : null;
    const keyOf = (i) => (parentObj ? parentObj.key + '/' : '') + i;
    content.depth = Math.max(content.depth || 0, depth);
    const st = { ctm: ctm0, lw: 1, stroke: null, fill: null, strokeRgb: '#000000', fillRgb: '#000000', font: null, size: 0, tc: 0, tw: 0, th: 1, tl: 0, rise: 0, clipBox: parentObj?.clipBox || null };
    const stack = [];
    let tm = I, tlm = I, tx = 0;                      // tx: how far the text position is past the line start (text space)
    let path = null;                                  // {first, bbox, d, cur}
    let inText = false;
    const res = content.resources;
    const ops = content.ops;
    const numArgs = (o) => o.args.map((a) => (a.t === 'num' ? a.v : NaN));
    const pt = (x, y) => { const [px, py] = apply(st.ctm, x, y); grow(path.bbox, px, py); return [px, py]; };
    const scaleOf = (m) => Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2])) || 1;
    for (let i = 0; i < ops.length; i++) {
      const o = ops[i];
      const a = numArgs(o);
      cur.clipBox = st.clipBox;
      switch (o.op) {
        case 'q': stack.push({ ...st }); break;
        case 'Q': if (stack.length) Object.assign(st, stack.pop()); break;
        case 'cm': if (a.length === 6 && a.every(Number.isFinite)) st.ctm = mul(a, st.ctm); break;
        case 'w': st.lw = a[0]; break;
        case 'G': case 'RG': case 'K': case 'SC': case 'SCN': case 'CS': st.stroke = { op: o.op, i }; st.strokeRgb = colorRgb(o.op, a); break;
        case 'g': case 'rg': case 'k': case 'sc': case 'scn': case 'cs': st.fill = { op: o.op, i }; st.fillRgb = colorRgb(o.op, a); break;
        case 'm': case 'l': case 'c': case 'v': case 'y': case 're': {
          if (!path) path = { first: i, bbox: emptyBox(), d: [], cur: [0, 0], start: [0, 0] };
          const d = path.d;
          if (o.op === 're') {
            const [x, y, w, h] = a;
            d.push(['M', ...pt(x, y)], ['L', ...pt(x + w, y)], ['L', ...pt(x + w, y + h)], ['L', ...pt(x, y + h)], ['Z']);
            path.cur = [x, y]; path.start = [x, y];
          } else if (o.op === 'm') { d.push(['M', ...pt(a[0], a[1])]); path.cur = [a[0], a[1]]; path.start = path.cur; }
          else if (o.op === 'l') { d.push(['L', ...pt(a[0], a[1])]); path.cur = [a[0], a[1]]; }
          else if (o.op === 'c') { d.push(['C', ...pt(a[0], a[1]), ...pt(a[2], a[3]), ...pt(a[4], a[5])]); path.cur = [a[4], a[5]]; }
          else if (o.op === 'v') { d.push(['C', ...pt(path.cur[0], path.cur[1]), ...pt(a[0], a[1]), ...pt(a[2], a[3])]); path.cur = [a[2], a[3]]; }
          else { d.push(['C', ...pt(a[0], a[1]), ...pt(a[2], a[3]), ...pt(a[2], a[3])]); path.cur = [a[2], a[3]]; }
          break;
        }
        case 'h': if (path) { path.d.push(['Z']); path.cur = path.start; } break;
        case 'W': case 'W*': if (path) path.clip = o.op; break;
        case 'S': case 's': case 'f': case 'F': case 'f*': case 'B': case 'B*': case 'b': case 'b*': case 'n': {
          if (path) {
            const strokes = /^[SsBb]/.test(o.op), fills = /^[fFBb]/.test(o.op);
            if (o.op !== 'n' || !path.clip) {
              push({ id: nextId++, key: keyOf(path.first), kind: 'path', where: content.key, first: path.first, last: i, paint: o.op, clip: path.clip || null,
                bbox: path.bbox, d: path.d, ctm: st.ctm, lw: st.lw * scaleOf(st.ctm), userLw: st.lw, stroke: st.stroke, fill: st.fill,
                strokeRgb: strokes ? st.strokeRgb : null, fillRgb: fills ? st.fillRgb : null, evenOdd: /\*$/.test(o.op), inText, parent });
            } else push({ id: nextId++, key: keyOf(path.first), kind: 'clip', where: content.key, first: path.first, last: i, clip: path.clip, bbox: path.bbox, d: path.d, ctm: st.ctm, parent });
            // what is drawn after a clip shows only inside it (until the Q that ends this state): kept as a box for picking
            if (path.clip) st.clipBox = st.clipBox ? meet(st.clipBox, path.bbox) : path.bbox.slice();
          }
          path = null;
          break;
        }
        case 'BT': inText = true; tm = I; tlm = I; tx = 0; break;
        case 'ET': inText = false; break;
        case 'Tf': st.font = o.args[0] && o.args[0].v; st.size = a[1]; st.fi = fontFor(res, st.font); break;
        case 'Tc': st.tc = a[0]; break;
        case 'Tw': st.tw = a[0]; break;
        case 'Tz': st.th = a[0] / 100; break;
        case 'TL': st.tl = a[0]; break;
        case 'Ts': st.rise = a[0]; break;
        case 'Td': tlm = mul(translate(a[0], a[1]), tlm); tm = tlm; tx = 0; break;
        case 'TD': st.tl = -a[1]; tlm = mul(translate(a[0], a[1]), tlm); tm = tlm; tx = 0; break;
        case 'Tm': if (a.length === 6) { tlm = a; tm = a; tx = 0; } break;
        case 'T*': tlm = mul(translate(0, -st.tl), tlm); tm = tlm; tx = 0; break;
        case "'": case '"': case 'Tj': case 'TJ': {
          if (o.op === "'" || o.op === '"') {
            if (o.op === '"') { st.tw = a[0]; st.tc = a[1]; }
            tlm = mul(translate(0, -st.tl), tlm); tm = tlm; tx = 0;
          }
          const fi = st.fi;
          const items = o.op === 'TJ' ? (o.args[0] && o.args[0].t === 'arr' ? o.args[0].items : []) : [o.args[o.args.length - 1]].filter(Boolean);
          const m0 = mul(tm, st.ctm);
          const bb = emptyBox();
          let x = 0;
          let text = '';
          const asc = 0.9 * st.size, desc = -0.22 * st.size;
          for (const it of items) {
            if (it.t === 'num') { x -= it.v / 1000 * st.size * st.th; continue; }
            if (it.t !== 'str' && it.t !== 'hex') continue;
            if (fi) fi.seen(it.v);
            const codes = fi ? fi.codes(it.v) : Array.from(it.v);
            const x0 = x;
            for (const c of codes) {
              const w0 = (fi ? fi.width(c) : 500) / 1000;
              x += (w0 * st.size + st.tc + (codes.length === it.v.length && c === 32 ? st.tw : 0)) * st.th;
            }
            if (fi) text += fi.text(it.v); else text += String.fromCharCode(...it.v);
            for (const [px, py] of [[x0, desc + st.rise], [x, desc + st.rise], [x0, asc + st.rise], [x, asc + st.rise]]) {
              const [qx, qy] = apply(m0, px, py); grow(bb, qx, qy);
            }
          }
          tm = mul(translate(x, 0), tm);
          push({ id: nextId++, key: keyOf(i), kind: 'text', where: content.key, first: i, last: i, font: st.font, size: st.size, info: fi, text,
            bbox: bb, ctm: st.ctm, tm: m0, tlm, startX: tx, adv: x, tc: st.tc, tw: st.tw, th: st.th, fillRgb: st.fillRgb, parent });
          tx += x;
          break;
        }
        case 'BI': {
          const bb = emptyBox();
          for (const [x, y] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { const [px, py] = apply(st.ctm, x, y); grow(bb, px, py); }
          push({ id: nextId++, key: keyOf(i), kind: 'image', inline: true, where: content.key, first: i, last: i, bbox: bb, ctm: st.ctm, parent });
          break;
        }
        case 'sh': {
          push({ id: nextId++, key: keyOf(i), kind: 'shading', where: content.key, first: i, last: i, bbox: [-Infinity, -Infinity, Infinity, Infinity], ctm: st.ctm, parent });
          break;
        }
        case 'Do': {
          const name = o.args[0] && o.args[0].v;
          const xd = lookup(res, 'XObject');
          const ref = xd instanceof PDFDict ? xd.get(PDFName.of(name)) : null;
          const xo = ref ? ctx.lookup(ref) : null;
          if (!(xo instanceof PDFRawStream)) { problems.push({ what: 'missing XObject ' + name }); break; }
          const sub = lookup(xo.dict, 'Subtype');
          const subName = sub && sub.decodeText ? sub.decodeText() : '';
          if (subName === 'Image') {
            const bb = emptyBox();
            for (const [x, y] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { const [px, py] = apply(st.ctm, x, y); grow(bb, px, py); }
            push({ id: nextId++, key: keyOf(i), kind: 'image', name, ref, where: content.key, first: i, last: i, bbox: bb, ctm: st.ctm, parent });
          } else if (subName === 'Form') {
            const key = ref instanceof PDFRef ? refKey(ref) : 'direct:' + content.key + ':' + i;
            const matrix = nums(lookup(xo.dict, 'Matrix')) || I;
            const ctm = mul(matrix, st.ctm);
            const box = nums(lookup(xo.dict, 'BBox')) || [0, 0, 0, 0];
            const bb = emptyBox();
            for (const [x, y] of [[box[0], box[1]], [box[2], box[1]], [box[0], box[3]], [box[2], box[3]]]) { const [px, py] = apply(ctm, x, y); grow(bb, px, py); }
            const fobj = push({ id: nextId++, key: keyOf(i), kind: 'form', name, ref, form: key, where: content.key, first: i, last: i, bbox: bb, ctm: st.ctm, parent });
            if (depth >= MAX_FORM_DEPTH || seen.has(key)) { problems.push({ what: 'form XObject nested too deep or in a loop: ' + name }); break; }
            let fc = contents.get(key);
            if (!fc) {
              const bytes = streamBytes(lib, xo);
              if (!bytes) { problems.push({ what: 'unreadable form XObject ' + name }); break; }
              fc = { key, ref, raw: xo, bytes, ...parseOps(bytes), resources: lookup(xo.dict, 'Resources') || res, uses: 0 };
              contents.set(key, fc);
            }
            fc.uses++;
            walk(fc, ctm, depth + 1, fobj, new Set([...seen, key]));
          }
          break;
        }
        default: break;
      }
    }
  };
  walk(pageContent, I, 0, null, new Set());
  for (const c of contents.values()) for (const p of c.problems) problems.push({ ...p, where: c.key });
  return { index, page, contents, objects, byId, byKey: new Map(objects.map((o) => [o.key, o])), problems, fonts };
}

/** A device colour operator → '#rrggbb' (null for other colour spaces: shown as "as in the file"). */
function colorRgb(op, a) {
  const h = (v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0');
  if ((op === 'g' || op === 'G') && a.length === 1) return '#' + h(a[0]).repeat(3);
  if ((op === 'rg' || op === 'RG') && a.length === 3) return '#' + h(a[0]) + h(a[1]) + h(a[2]);
  if ((op === 'k' || op === 'K') && a.length === 4) { const k = 1 - a[3]; return '#' + h((1 - a[0]) * k) + h((1 - a[1]) * k) + h((1 - a[2]) * k); }
  if ((op === 'sc' || op === 'scn' || op === 'SC' || op === 'SCN') && a.length === 3 && a.every(Number.isFinite)) return '#' + h(a[0]) + h(a[1]) + h(a[2]);
  if ((op === 'sc' || op === 'scn' || op === 'SC' || op === 'SCN') && a.length === 1 && Number.isFinite(a[0])) return '#' + h(a[0]).repeat(3);
  return null;
}

// ---- editing -------------------------------------------------------------------------------------
const PATH_OPS = new Set(['m', 'l', 'c', 'v', 'y', 're', 'h']);

/** The ops of an object, as a byte range in its Content. */
export function objectRange(pc, obj) {
  const c = pc.contents.get(obj.where);
  return { c, s: c.ops[obj.first].s, e: c.ops[obj.last].e };
}

/** Rewrite one op from new operand text + its operator. */
const opBytes = (args, op) => ascii((args.length ? args.join(' ') + ' ' : '') + op);

/**
 * Move / scale / turn an object by a page-space matrix T.
 * Paths: their coordinates are rewritten in place (the stream keeps its shape; line widths stay).
 * Pictures and forms: wrapped in `q <M> cm … Q`, M = C·T·C⁻¹ (C = the matrix they are painted with).
 */
export function transformEdits(pc, obj, T) {
  const c = pc.contents.get(obj.where);
  const C = obj.ctm;
  const Ci = inv(C);
  if (!Ci) return { edits: [], refused: 'flat' };
  const U = mul(mul(C, T), Ci);                      // the same move, in the object's own user space
  if (obj.kind === 'path') {
    if (obj.clip) return { edits: [], refused: 'clip' };
    const edits = [];
    for (let i = obj.first; i < obj.last; i++) {
      const o = c.ops[i];
      if (!PATH_OPS.has(o.op) || o.op === 'h') continue;
      const v = o.args.map((t) => t.v);
      let out;
      if (o.op === 're') {
        const [x, y, w, h] = v;
        if (Math.abs(U[1]) < 1e-12 && Math.abs(U[2]) < 1e-12) {
          const [nx, ny] = apply(U, x, y);
          out = opBytes([num(nx), num(ny), num(w * U[0]), num(h * U[3])], 're');
        } else {                                       // turned: a rectangle is no longer a rectangle
          const pts = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]].map(([px, py]) => apply(U, px, py));
          out = ascii(`${num(pts[0][0])} ${num(pts[0][1])} m ${pts.slice(1).map((p) => `${num(p[0])} ${num(p[1])} l`).join(' ')} h`);
        }
      } else {
        const nv = [];
        for (let k = 0; k + 1 < v.length; k += 2) { const [nx, ny] = apply(U, v[k], v[k + 1]); nv.push(num(nx), num(ny)); }
        out = opBytes(nv, o.op);
      }
      edits.push({ key: c.key, s: o.s, e: o.e, bytes: out, use: obj.parent });
    }
    return { edits };
  }
  if (obj.kind === 'image' || obj.kind === 'form') {
    if (obj.inText) return { edits: [], refused: 'text' };
    const o = c.ops[obj.first];
    const pre = ascii(`q ${U.map(num).join(' ')} cm `);
    return { edits: [{ key: c.key, s: o.s, e: o.s, bytes: pre, use: obj.parent }, { key: c.key, s: o.e, e: o.e, bytes: ascii(' Q'), use: obj.parent }] };
  }
  return { edits: [], refused: obj.kind };
}

/** DeviceRGB colour operator text. */
const rgbOp = (hex, op) => {
  const v = parseInt(String(hex).replace('#', ''), 16);
  return `${num(((v >> 16) & 255) / 255)} ${num(((v >> 8) & 255) / 255)} ${num((v & 255) / 255)} ${op}`;
};

/** New stroke / fill colour and line width for a path: wrapped in `q … Q` so nothing after it changes. */
export function recolorEdits(pc, obj, { stroke, fill, lw } = {}) {
  if (obj.kind !== 'path') return { edits: [], refused: obj.kind };
  if (obj.clip) return { edits: [], refused: 'clip' };
  if (obj.inText) return { edits: [], refused: 'text' };
  const { c, s, e } = objectRange(pc, obj);
  const pre = ['q'];
  if (stroke) pre.push(rgbOp(stroke, 'RG'));
  if (fill) pre.push(rgbOp(fill, 'rg'));
  if (lw != null) pre.push(num(lw) + ' w');
  return { edits: [{ key: c.key, s, e: s, bytes: ascii(pre.join(' ') + ' '), use: obj.parent }, { key: c.key, s: e, e, bytes: ascii(' Q'), use: obj.parent }] };
}

/** Take an object out of the content (its ops become nothing; state changes inside a path can't exist). */
export function deleteEdits(pc, obj) {
  if (obj.kind === 'path' && obj.clip) return { edits: [], refused: 'clip' };
  if (obj.kind === 'text') return textEdits(pc, obj, '');
  const { c, s, e } = objectRange(pc, obj);
  return { edits: [{ key: c.key, s, e, bytes: new Uint8Array(0), use: obj.parent }] };
}

/** How far a string moves the text position (unscaled text space), as the walk measured it. */
export function runAdvance(obj, bytes) {
  const fi = obj.info;
  const codes = fi.codes(bytes);
  let x = 0;
  for (const c of codes) x += (fi.width(c) / 1000 * obj.size + obj.tc + (!fi.twoByte && c === 32 ? obj.tw : 0)) * obj.th;
  return x;
}

/**
 * Replace a text run's words, in its own font. Letters the font lacks are returned in `missing` and left
 * out: the caller decides (fall back to a standard font and say so). The run is written as
 * `[(words) n] TJ` with n chosen so it still ends where it ended before: text after it on the line (which
 * continues from there) never moves. The run's own kerning is dropped (it belonged to the old words).
 */
export function textEdits(pc, obj, str) {
  if (obj.kind !== 'text') return { edits: [], refused: obj.kind, missing: [] };
  const fi = obj.info;
  if (!fi || fi.problem || fi.subtype === 'Type3') return { edits: [], refused: 'font', missing: [...str] };
  const enc = fi.encode(str);
  const { c } = objectRange(pc, obj);
  const o = c.ops[obj.first];
  const gap = obj.adv - runAdvance(obj, enc.bytes);
  const k = obj.size && obj.th ? -gap * 1000 / (obj.size * obj.th) : 0;
  const arr = '[' + stringToken(enc.bytes) + (Math.abs(k) > 1e-3 ? ' ' + num(k) : '') + '] TJ';
  // ' = T* then show; " = set Tw and Tc, then '
  const pre = o.op === "'" ? 'T* ' : o.op === '"' ? `${num(o.args[0].v)} Tw ${num(o.args[1].v)} Tc T* ` : '';
  return { edits: [{ key: c.key, s: o.s, e: o.e, bytes: ascii(pre + arr), use: obj.parent }], missing: enc.missing, runs: enc.runs };
}

/**
 * Everything one object's edit says, as byte edits on its own ops: e = {T, nodes, stroke, fill, lw, del, text}.
 * Paths: points rewritten in place (nodes first, then T in the object's own user space), colour / width wrapped in
 * q … Q. Pictures and forms: wrapped in `q <C·T·C⁻¹> cm … Q`. Text: new words in the run's own font, keeping its
 * advance; a moved run gets an absolute Tm before it and the line's position put back after it (`<Tlm> Tm [n] TJ`),
 * so nothing else on the line moves (q/cm are not allowed inside BT … ET). → {edits, refused, missing}.
 */
export function objectEdits(pc, obj, e = {}) {
  const c = pc.contents.get(obj.where);
  const use = obj.parent;
  const tag = (list) => list.map((ed) => ({ ...ed, use }));
  if (!c) return { edits: [], refused: 'unknown', missing: [] };
  const T = e.T && !isIdentity(e.T) ? e.T : null;
  if (obj.kind === 'clip' || (obj.kind === 'path' && obj.clip)) return { edits: [], refused: 'clip', missing: [] };
  if (obj.kind === 'shading') return { edits: [], refused: 'shading', missing: [] };
  const first = c.ops[obj.first], last = c.ops[obj.last];
  if (obj.kind === 'text') {
    if (e.del) return { ...textRun(pc, obj, { T: null, str: '' }), edits: tag(textRun(pc, obj, { T: null, str: '' }).edits) };
    const r = textRun(pc, obj, { T, str: e.text ?? null, fallback: e.fbName || null });
    return { ...r, edits: tag(r.edits) };
  }
  if (e.del) return { edits: tag([{ key: c.key, s: first.s, e: last.e, bytes: new Uint8Array(0) }]), missing: [] };
  if (obj.kind === 'image' || obj.kind === 'form') {
    const edits = [];
    if (obj.kind === 'image' && e.imgName) {
      // a new picture in the old one's box (the unit square of its matrix), keeping its own proportions, centred
      const bw = Math.hypot(obj.ctm[0], obj.ctm[1]), bh = Math.hypot(obj.ctm[2], obj.ctm[3]);
      const ia = (e.imgW || 1) / (e.imgH || 1), ba = bw / (bh || 1);
      const [sx, sy] = ia > ba ? [1, ba / ia] : [ia / ba, 1];
      edits.push({ key: c.key, s: first.s, e: last.e, bytes: ascii(`q ${num(sx)} 0 0 ${num(sy)} ${num((1 - sx) / 2)} ${num((1 - sy) / 2)} cm /${e.imgName} Do Q`) });
    }
    if (!T) return { edits: tag(edits), missing: [] };
    const Ci = inv(obj.ctm);
    if (!Ci) return { edits: [], refused: 'flat', missing: [] };
    const U = mul(mul(obj.ctm, T), Ci);
    return { edits: tag([{ key: c.key, s: first.s, e: first.s, bytes: ascii(`q ${U.map(num).join(' ')} cm `) }, ...edits, { key: c.key, s: last.e, e: last.e, bytes: ascii(' Q') }]), missing: [] };
  }
  if (obj.kind !== 'path') return { edits: [], refused: obj.kind, missing: [] };
  if (obj.inText && (e.stroke || e.fill || e.lw != null)) return { edits: [], refused: 'text', missing: [] };
  const edits = [];
  const nodes = e.nodes || {};
  if (T || Object.keys(nodes).length) {
    const Ci = inv(obj.ctm);
    if (!Ci) return { edits: [], refused: 'flat', missing: [] };
    const U = T ? mul(mul(obj.ctm, T), Ci) : I;
    for (let i = obj.first; i < obj.last; i++) {
      const o = c.ops[i];
      if (!PATH_OPS.has(o.op) || o.op === 'h') continue;
      const v = nodes[i] && nodes[i].length === o.args.length ? nodes[i] : o.args.map((t) => t.v);
      if (!nodes[i] && !T) continue;
      edits.push({ key: c.key, s: o.s, e: o.e, bytes: pathOpBytes(o.op, v, U) });
    }
  }
  if (e.stroke || e.fill || e.lw != null) {
    const pre = ['q'];
    if (e.stroke) pre.push(rgbOp(e.stroke, 'RG'));
    if (e.fill) pre.push(rgbOp(e.fill, 'rg'));
    // lw is in page units; the stream's width is in the path's user space
    if (e.lw != null) pre.push(num(e.lw / (Math.sqrt(Math.abs(obj.ctm[0] * obj.ctm[3] - obj.ctm[1] * obj.ctm[2])) || 1)) + ' w');
    edits.push({ key: c.key, s: first.s, e: first.s, bytes: ascii(pre.join(' ') + ' ') }, { key: c.key, s: last.e, e: last.e, bytes: ascii(' Q') });
  }
  return { edits: tag(edits), missing: [] };
}

const isIdentity = (m) => Math.abs(m[0] - 1) < 1e-9 && Math.abs(m[1]) < 1e-9 && Math.abs(m[2]) < 1e-9 && Math.abs(m[3] - 1) < 1e-9 && Math.abs(m[4]) < 1e-9 && Math.abs(m[5]) < 1e-9;

/** One path-building op, its numbers taken through U (a rectangle that U turns becomes m l l l h). */
function pathOpBytes(op, v, U) {
  if (op === 're') {
    const [x, y, w, h] = v;
    if (Math.abs(U[1]) < 1e-12 && Math.abs(U[2]) < 1e-12) {
      const [nx, ny] = apply(U, x, y);
      return opBytes([num(nx), num(ny), num(w * U[0]), num(h * U[3])], 're');
    }
    const pts = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]].map(([px, py]) => apply(U, px, py));
    return ascii(`${num(pts[0][0])} ${num(pts[0][1])} m ${pts.slice(1).map((p) => `${num(p[0])} ${num(p[1])} l`).join(' ')} h`);
  }
  const nv = [];
  for (let k = 0; k + 1 < v.length; k += 2) { const [nx, ny] = apply(U, v[k], v[k + 1]); nv.push(num(nx), num(ny)); }
  return opBytes(nv, op);
}

/** A text run moved (T) and/or given new words (str): one replacement of its show operator. */
/** A name as a content-stream token (#xx for anything that is not a regular character). */
export function nameToken(name) {
  let s = '/';
  for (const ch of String(name)) {
    const c = ch.charCodeAt(0);
    s += c > 32 && c < 127 && !'()<>[]{}/%#'.includes(ch) ? ch : '#' + (c & 255).toString(16).padStart(2, '0');
  }
  return s;
}

function textRun(pc, obj, { T, str, fallback = null }) {
  const fi = obj.info;
  const c = pc.contents.get(obj.where);
  const o = c.ops[obj.first];
  if (str != null && (!fi || fi.problem || fi.subtype === 'Type3')) return { edits: [], refused: fi?.problem === 'metrics' ? 'metrics' : 'font', missing: [...str] };
  if (str == null && !T) return { edits: [], missing: [] };
  const parts = [];
  // ' = T* then show; " = set Tw and Tc, then '
  if (o.op === "'") parts.push('T*');
  if (o.op === '"') parts.push(`${num(o.args[0].v)} Tw ${num(o.args[1].v)} Tc T*`);
  if (T) {
    const Ci = inv(obj.ctm);
    if (!Ci) return { edits: [], refused: 'flat', missing: [] };
    parts.push(mul(mul(obj.tm, T), Ci).map(num).join(' ') + ' Tm');
  }
  let missing = [], runs = null;
  if (str != null) {
    const enc = fi.encode(str);
    missing = enc.missing; runs = enc.runs;
    let used = 0;
    if (!missing.length || !fallback) {
      used = runAdvance(obj, enc.bytes);
      parts.push('[' + stringToken(enc.bytes) + ']' + ' TJ');
    } else {
      // letters the font has stay in it; the others print in the fallback font (Helvetica) and the caller says so
      const own = nameToken(obj.font);
      for (const r of enc.runs) {
        if (r.have) { const b = fi.encode(r.text).bytes; used += runAdvance(obj, b); parts.push('[' + stringToken(b) + '] TJ'); continue; }
        const w = winAnsiHex(r.text);
        for (const ch of r.text) used += (charAdvance(ch) / 1000 * obj.size + obj.tc + (ch === ' ' ? obj.tw : 0)) * obj.th;
        parts.push(`${nameToken(fallback)} ${num(obj.size)} Tf ${w.hex} Tj ${own} ${num(obj.size)} Tf`);
      }
    }
    // the run still ends where it ended: what follows on the line never moves
    const k = obj.size && obj.th ? -(obj.adv - used) * 1000 / (obj.size * obj.th) : 0;
    if (Math.abs(k) > 1e-3) parts.push('[' + num(k) + '] TJ');
  } else {
    // the run's own operand, as it was
    const arg = o.args[o.args.length - 1];
    parts.push(new TextDecoder('latin1').decode(c.bytes.subarray(arg.s, arg.e)) + (o.op === 'TJ' ? ' TJ' : ' Tj'));
  }
  if (T) {
    // back to where the line continues: the line start, then (without drawing) the distance the run ended at
    parts.push(obj.tlm.map(num).join(' ') + ' Tm');
    const end = obj.startX + obj.adv;
    if (obj.size && obj.th && Math.abs(end) > 1e-6) parts.push('[' + num(-end * 1000 / (obj.size * obj.th)) + '] TJ');
  }
  return { edits: [{ key: c.key, s: o.s, e: o.e, bytes: ascii(parts.join(' ')) }], missing, runs };
}

/**
 * Write edits back. Each Content with edits gets new bytes; for the page they are split back into its
 * streams, and only streams whose bytes changed are replaced (a stream shared with another page is
 * copied first, so the other page keeps the old one). A form XObject drawn more than once is copied for each
 * use that was edited: a new XObject with the edits, added to the resources of the content that draws it, and
 * that `Do` renamed — the other uses keep the form as it was. Returns {changed: [keys], refused}.
 */
export function applyEdits(lib, doc, pc, edits) {
  const { PDFName, PDFDict, PDFRawStream } = lib;
  const ctx = doc.context;
  const byKey = new Map();
  const add = (ed) => { if (!byKey.has(ed.key)) byKey.set(ed.key, []); byKey.get(ed.key).push(ed); };
  edits.forEach(add);
  const changed = [];
  const fresh = (bytes, oldDict) => {
    const st = ctx.flateStream(bytes);
    if (oldDict) for (const [k, v] of oldDict.entries()) {
      const n = k.decodeText();
      if (n !== 'Filter' && n !== 'DecodeParms' && n !== 'Length' && n !== 'DL') st.dict.set(k, v);
    }
    return st;
  };
  const xobjects = (resources) => {
    let xd = resources instanceof PDFDict ? ctx.lookup(resources.get(PDFName.of('XObject'))) : null;
    if (!(xd instanceof PDFDict) && resources instanceof PDFDict) { xd = ctx.obj({}); resources.set(PDFName.of('XObject'), xd); }
    return xd;
  };
  let seq = 0;
  // forms first, deepest first: a copied form adds a rename edit to the content that draws it
  const keys = () => [...byKey.keys()].filter((k) => k !== 'page').sort((a, b) => (pc.contents.get(b)?.depth || 0) - (pc.contents.get(a)?.depth || 0));
  const done = new Set();
  for (;;) {
    const key = keys().find((k) => !done.has(k));
    if (!key) break;
    done.add(key);
    const c = pc.contents.get(key);
    if (!c) return { changed, refused: 'unknown ' + key };
    const list = byKey.get(key);
    if (c.uses <= 1) {
      ctx.assign(c.ref, fresh(splice(c.bytes, list), c.raw.dict));
      changed.push(key);
      continue;
    }
    const byUse = new Map();
    for (const ed of list) { if (!byUse.has(ed.use)) byUse.set(ed.use, []); byUse.get(ed.use).push(ed); }
    for (const [use, mine] of byUse) {
      const fobj = pc.byId.get(use);
      const host = fobj && pc.contents.get(fobj.where);
      if (!fobj || !host) return { changed, refused: 'shared-form' };
      const ref = ctx.register(fresh(splice(c.bytes, mine), c.raw.dict));
      const xd = xobjects(host.resources);
      if (!xd) return { changed, refused: 'shared-form' };
      let name;
      do name = fobj.name + '_mc' + (++seq); while (xd.get(PDFName.of(name)));
      xd.set(PDFName.of(name), ref);
      const nameTok = host.ops[fobj.first].args[0];
      add({ key: host.key, s: nameTok.s, e: nameTok.e, bytes: ascii('/' + name), use: fobj.parent });
      changed.push(key + ' → ' + name);
    }
  }
  const list = byKey.get('page');
  if (list) {
    const c = pc.contents.get('page');
    const counts = contentUseCounts(lib, doc);
    const newRefs = [];
    let any = false;
    for (const seg of c.segments) {
      if (list.some((ed) => ed.s < seg.e && ed.e > seg.s && !(ed.s >= seg.s && ed.e <= seg.e))) return { changed, refused: 'across-streams' };
      const mine = list.filter((ed) => ed.s >= seg.s && ed.e <= seg.e).map((ed) => ({ ...ed, s: ed.s - seg.s, e: ed.e - seg.s }));
      if (!mine.length) { newRefs.push(seg.ref || ctx.register(seg.raw)); continue; }
      const st = fresh(splice(c.bytes.subarray(seg.s, seg.e), mine), seg.raw.dict);
      any = true;
      if (seg.ref && (counts.get(refKey(seg.ref)) || 0) <= 1) { ctx.assign(seg.ref, st); newRefs.push(seg.ref); }
      else newRefs.push(ctx.register(st));
    }
    if (any) {
      pc.page.node.set(PDFName.of('Contents'), newRefs.length === 1 ? newRefs[0] : ctx.obj(newRefs));
      changed.push('page');
    }
  }
  void PDFRawStream;
  return { changed, refused: null };
}

/**
 * New content on top of a page (paths drawn into it): the page's own streams are wrapped in q … Q by a stream
 * before and after them (their bytes stay as they are), so whatever state they leave behind can't touch the new part.
 */
export function appendContent(lib, doc, index, bytes) {
  const { PDFName } = lib;
  const ctx = doc.context;
  const page = doc.getPage(index);
  const list = contentStreams(lib, doc, page.node).map((p) => p.ref || ctx.register(p.stream));
  const pre = ctx.register(ctx.flateStream(ascii('q\n')));
  const post = ctx.register(ctx.flateStream(concat([ascii('\nQ\n'), bytes])));
  page.node.set(PDFName.of('Contents'), ctx.obj([pre, ...list, post]));
}

/** Objects of these kinds, in painting order (MrBorking's "select only text / images / shapes"). */
export function objectsOfKind(pc, kinds) {
  const want = new Set(kinds);
  return pc.objects.filter((o) => want.has(o.kind === 'path' ? 'shape' : o.kind === 'image' ? 'picture' : o.kind));
}

/** Objects whose box meets the page-space rectangle (marquee select). */
export function objectsIn(pc, rect, { touching = true } = {}) {
  const [x0, y0, x1, y1] = [Math.min(rect[0], rect[2]), Math.min(rect[1], rect[3]), Math.max(rect[0], rect[2]), Math.max(rect[1], rect[3])];
  return pc.objects.filter((o) => {
    if (!Number.isFinite(o.bbox[0]) || o.kind === 'clip' || o.kind === 'shading') return false;
    const inside = o.bbox[0] >= x0 && o.bbox[1] >= y0 && o.bbox[2] <= x1 && o.bbox[3] <= y1;
    const meets = o.bbox[0] <= x1 && o.bbox[2] >= x0 && o.bbox[1] <= y1 && o.bbox[3] >= y0;
    return touching ? meets : inside;
  });
}

export { concat };
