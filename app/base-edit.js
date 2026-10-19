/* SPDX-License-Identifier: Apache-2.0 */
/**
 * base-edit.js — edits to a page's own content as data, and the working copy they make. No DOM. (0.6 DF.14)
 *
 * A sheet's edits are one plain object (kept in the Store, so they undo with the markups, and in autosave):
 *   { o: { [object key]: { T, nodes, stroke, fill, lw, del, text } }, add: [ {id, d, stroke, fill, lw, cap, join, dash} ] }
 * `o` is keyed by base-content.js object keys, which name objects in the ORIGINAL content: the edits are always
 * applied to the file as it was opened, so they never drift however many there are. `T` is a page-space matrix
 * (move, scale), `nodes` the path's moved points and handles ({op index: numbers}, user space), `stroke`/`fill`
 * '#rrggbb', `lw` page units, `del` true, `text` the run's new words. `add` = paths drawn into the page (page
 * space M/L/C/Z, like shapes.js display lists).
 *
 * `cleanBase(raw)` checks one from a file or autosave (untrusted). `withMove / withPatch / withDelete` make the
 * next state. `buildWorking(lib, bytes, states)` → the PDF with every sheet's edits written in (the copy the
 * page shows and Save writes markups into). `objectGeom`, `hitTest`, `inRect`, `boxOf`, `outline` work on the
 * EDITED geometry, so what is picked is what is shown. `nodesOf` / `moveNode` = point editing.
 * `contentFromList(list)` turns a markup's display list into paths for the page (opaque line work only).
 */

import { readPage, objectEdits, applyEdits, appendContent, editBlocker, mul, inv, apply, I } from './base-content.js';
import { num, ascii } from './base-lex.js';
import { cleanImage, imageInfo } from './imagestamp.js';

export const LIMITS = { objects: 20000, added: 2000, commands: 20000, text: 2000 };
const HEX = /^#[0-9a-f]{6}$/;
const KEY = /^\d{1,7}(\/\d{1,7}){0,12}$/;

export const emptyBase = () => ({ o: {}, add: [] });
export const isEmptyBase = (st) => !st || (!Object.keys(st.o || {}).length && !(st.add || []).length);

const finite = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < 1e7;
const matrix = (m) => (Array.isArray(m) && m.length === 6 && m.every(finite) ? m.slice() : null);
const clone = (v) => JSON.parse(JSON.stringify(v));

/** One sheet's edits from a file or autosave (untrusted): anything that doesn't fit is left out. */
export function cleanBase(raw) {
  const out = emptyBase();
  if (!raw || typeof raw !== 'object') return out;
  let n = 0;
  for (const [k, v] of Object.entries(raw.o && typeof raw.o === 'object' ? raw.o : {})) {
    if (!KEY.test(k) || !v || typeof v !== 'object' || ++n > LIMITS.objects) continue;
    const e = {};
    const T = matrix(v.T);
    if (T && Math.abs(T[0] * T[3] - T[1] * T[2]) > 1e-9) e.T = T;
    if (v.nodes && typeof v.nodes === 'object') {
      const nodes = {};
      for (const [i, nums] of Object.entries(v.nodes)) if (/^\d{1,7}$/.test(i) && Array.isArray(nums) && nums.length <= 6 && nums.every(finite)) nodes[i] = nums.slice();
      if (Object.keys(nodes).length) e.nodes = nodes;
    }
    if (HEX.test(v.stroke)) e.stroke = v.stroke;
    if (HEX.test(v.fill)) e.fill = v.fill;
    if (finite(v.lw) && v.lw >= 0 && v.lw <= 1000) e.lw = v.lw;
    if (v.del === true) e.del = true;
    if (typeof v.text === 'string') e.text = v.text.replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '').slice(0, LIMITS.text);
    if (typeof v.img === 'string' && cleanImage(v.img)) e.img = v.img;   // a replacement picture: PNG or JPEG, checked like file data
    if (Object.keys(e).length) out.o[k] = e;
  }
  let cmds = 0;
  for (const a of Array.isArray(raw.add) ? raw.add : []) {
    if (out.add.length >= LIMITS.added || !a || typeof a !== 'object' || !Array.isArray(a.d)) continue;
    const d = [];
    let ok = true;
    for (const c of a.d) {
      if (!Array.isArray(c) || ++cmds > LIMITS.commands) { ok = false; break; }
      const want = { M: 2, L: 2, C: 6, Z: 0 }[c[0]];
      if (want === undefined || c.length !== want + 1 || !c.slice(1).every(finite)) { ok = false; break; }
      d.push(c.slice());
    }
    if (!ok || !d.length || d[0][0] !== 'M') continue;
    const id = typeof a.id === 'string' && /^[a-z0-9-]{1,40}$/i.test(a.id) ? a.id : 'a' + out.add.length;
    const e = { id, d };
    if (HEX.test(a.stroke)) e.stroke = a.stroke;
    if (HEX.test(a.fill)) e.fill = a.fill;
    if (!e.stroke && !e.fill) continue;
    e.lw = finite(a.lw) && a.lw >= 0 && a.lw <= 1000 ? a.lw : 1;
    if (a.cap === 'round' || a.cap === 'square') e.cap = a.cap;
    if (a.join === 'round' || a.join === 'bevel') e.join = a.join;
    if (Array.isArray(a.dash) && a.dash.length <= 8 && a.dash.every((x) => finite(x) && x >= 0)) e.dash = a.dash.slice();
    if (a.evenOdd === true) e.evenOdd = true;
    out.add.push(e);
  }
  return out;
}

// ---- the next state (every function returns a new object; the Store keeps before/after) -------------
const isAdded = (key) => typeof key === 'string' && key.startsWith('a:');
const addedId = (key) => key.slice(2);

/** Move / scale selected objects by a page-space matrix (after whatever they had). */
export function withMove(st, keys, T) {
  const next = clone(st || emptyBase());
  for (const k of keys) {
    if (isAdded(k)) {
      const a = next.add.find((x) => x.id === addedId(k));
      if (a) a.d = a.d.map((c) => mapCmd(c, T));
      continue;
    }
    const e = next.o[k] || (next.o[k] = {});
    e.T = mul(e.T || I, T);
  }
  return next;
}
/** Set colour / width / words on selected objects ({stroke, fill, lw, text}; null clears that one). */
/** A picture replaced by another (a checked PNG/JPEG data URL). */
export function withPicture(st, key, src) {
  if (!cleanImage(src)) return st;
  return withPatch(st, [key], { img: src });
}
export function withPatch(st, keys, patch) {
  const next = clone(st || emptyBase());
  for (const k of keys) {
    if (isAdded(k)) {
      const a = next.add.find((x) => x.id === addedId(k));
      if (!a) continue;
      for (const f of ['stroke', 'fill', 'lw']) if (f in patch) { if (patch[f] == null) delete a[f]; else a[f] = patch[f]; }
      continue;
    }
    const e = next.o[k] || (next.o[k] = {});
    for (const [f, v] of Object.entries(patch)) { if (v == null) delete e[f]; else e[f] = clone(v); }
    if (!Object.keys(e).length) delete next.o[k];
  }
  return next;
}
export function withDelete(st, keys) {
  const next = clone(st || emptyBase());
  for (const k of keys) {
    if (isAdded(k)) { next.add = next.add.filter((x) => x.id !== addedId(k)); continue; }
    next.o[k] = { ...(next.o[k] || {}), del: true };
  }
  return next;
}
export function withAdded(st, items) {
  const next = clone(st || emptyBase());
  for (const it of items) next.add.push(clone(it));
  return next;
}
/** A path's points edited (point editing): the whole override list for that object. */
export function withNodes(st, key, nodes) {
  const next = clone(st || emptyBase());
  if (isAdded(key)) return next;
  const e = next.o[key] || (next.o[key] = {});
  e.nodes = clone(nodes);
  return next;
}

const mapCmd = (c, T) => {
  if (c[0] === 'Z') return c.slice();
  const out = [c[0]];
  for (let k = 1; k + 1 < c.length; k += 2) out.push(...apply(T, c[k], c[k + 1]));
  return out;
};

// ---- writing ---------------------------------------------------------------------------------------
/** Paths drawn into the page → content stream bytes (each in its own q … Q, page space). */
export function addedBytes(list) {
  const parts = [];
  const rgb = (hex) => { const v = parseInt(hex.slice(1), 16); return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255].map(num).join(' '); };
  for (const a of list) {
    const p = ['q'];
    if (a.stroke) p.push(rgb(a.stroke) + ' RG');
    if (a.fill) p.push(rgb(a.fill) + ' rg');
    p.push(num(a.lw ?? 1) + ' w');
    if (a.cap) p.push((a.cap === 'round' ? 1 : 2) + ' J');
    if (a.join) p.push((a.join === 'round' ? 1 : 2) + ' j');
    if (a.dash) p.push('[' + a.dash.map(num).join(' ') + '] 0 d');
    for (const c of a.d) {
      if (c[0] === 'M') p.push(num(c[1]) + ' ' + num(c[2]) + ' m');
      else if (c[0] === 'L') p.push(num(c[1]) + ' ' + num(c[2]) + ' l');
      else if (c[0] === 'C') p.push(c.slice(1).map(num).join(' ') + ' c');
      else p.push('h');
    }
    p.push(a.fill && a.stroke ? (a.evenOdd ? 'B*' : 'B') : a.fill ? (a.evenOdd ? 'f*' : 'f') : 'S');
    p.push('Q');
    parts.push(p.join(' '));
  }
  return ascii(parts.join('\n') + '\n');
}

/** One sheet's edits → byte edits on its content. → {edits, refused: [{key, why}], missing: [{key, chars}]} */
export function pageEdits(pc, st) {
  const edits = [], refused = [], missing = [];
  for (const [key, e] of Object.entries(st?.o || {})) {
    const obj = pc.byKey.get(key);
    if (!obj) { refused.push({ key, why: 'gone' }); continue; }
    const r = objectEdits(pc, obj, e);
    if (r.refused) { refused.push({ key, why: r.refused }); continue; }
    if (r.missing?.length) missing.push({ key, chars: r.missing });
    edits.push(...r.edits);
  }
  return { edits, refused, missing };
}

/**
 * The PDF with every sheet's edits written in. states: Map(page index → state). Throws {code: 'encrypted'|'signed'}
 * for files we never change. → {bytes, refused: [{page, key, why}], missing: [{page, key, chars}], pages: n}
 */
export async function buildWorking(lib, bytes, states, { save = (doc) => doc.save({ useObjectStreams: false }) } = {}) {
  const doc = await lib.PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
  const why = editBlocker(lib, doc);
  if (why) { const err = new Error(why); err.code = why; throw err; }
  const refused = [], missing = [];
  let pages = 0;
  let helv = null;
  for (const [index, st0] of states) {
    if (isEmptyBase(st0) || index < 0 || index >= doc.getPageCount()) continue;
    pages++;
    let st = st0;
    if (Object.keys(st.o || {}).length) {
      const pc = readPage(lib, doc, index);
      // replacement pictures: embedded first, named in the resources of the content that draws the old one
      for (const [key, e] of Object.entries(st.o)) {
        if (!e.img || e.del) continue;
        const obj = pc.byKey.get(key);
        const info = imageInfo(e.img);
        if (!obj || obj.kind !== 'image' || !info) { refused.push({ page: index, key, why: 'picture' }); continue; }
        const img = info.mime === 'image/png' ? await doc.embedPng(info.bytes) : await doc.embedJpg(info.bytes);
        const host = pc.contents.get(obj.where).resources;
        let xd = host && doc.context.lookup(host.get(lib.PDFName.of('XObject')));
        if (!xd && host) { xd = doc.context.obj({}); host.set(lib.PDFName.of('XObject'), xd); }
        if (!xd) { refused.push({ page: index, key, why: 'picture' }); continue; }
        let n = 0, name;
        do name = 'McPic' + (++n); while (xd.get(lib.PDFName.of(name)));
        xd.set(lib.PDFName.of(name), img.ref);
        if (st === st0) st = { ...st0, o: { ...st0.o } };
        st.o[key] = { ...e, imgName: name, imgW: info.width, imgH: info.height };
      }
      // words with letters their font lacks: Helvetica (standard, never embedded) named in that content's fonts
      for (const [key, e] of Object.entries(st.o)) {
        if (typeof e.text !== 'string' || e.del) continue;
        const obj = pc.byKey.get(key);
        if (!obj || obj.kind !== 'text' || !obj.info || obj.info.problem || !obj.info.encode(e.text).missing.length) continue;
        const host = pc.contents.get(obj.where).resources;
        let fd = host && doc.context.lookup(host.get(lib.PDFName.of('Font')));
        if (!fd && host) { fd = doc.context.obj({}); host.set(lib.PDFName.of('Font'), fd); }
        if (!fd) continue;
        let name = 'McHelv';
        if (!fd.get(lib.PDFName.of(name))) fd.set(lib.PDFName.of(name), (helv ||= await doc.embedFont(lib.StandardFonts.Helvetica)).ref);
        if (st === st0) st = { ...st0, o: { ...st0.o } };
        st.o[key] = { ...st.o[key], fbName: name };
      }
      const r = pageEdits(pc, st);
      for (const x of r.refused) refused.push({ page: index, ...x });
      for (const x of r.missing) missing.push({ page: index, ...x });
      const res = applyEdits(lib, doc, pc, r.edits);
      if (res.refused) refused.push({ page: index, key: '*', why: res.refused });
    }
    if (st.add?.length) appendContent(lib, doc, index, addedBytes(st.add));
  }
  return { bytes: await save(doc), refused, missing, pages, doc };
}

// ---- geometry as shown (edits applied) -------------------------------------------------------------
/** The object's page-space path (M/L/C/Z) with its point edits and move applied. */
export function objectGeom(pc, obj, e = {}) {
  let d;
  if (obj.kind === 'path' || obj.kind === 'clip') d = e.nodes && Object.keys(e.nodes).length ? pathFromOps(pc, obj, e.nodes) : obj.d;
  else { const b = obj.bbox; d = [['M', b[0], b[1]], ['L', b[2], b[1]], ['L', b[2], b[3]], ['L', b[0], b[3]], ['Z']]; }
  return e.T ? d.map((c) => mapCmd(c, e.T)) : d;
}

function pathFromOps(pc, obj, nodes) {
  const c = pc.contents.get(obj.where);
  const C = obj.ctm;
  const P = (x, y) => apply(C, x, y);
  const d = [];
  let cur = [0, 0], start = [0, 0];
  for (let i = obj.first; i < obj.last; i++) {
    const o = c.ops[i];
    const a = nodes[i] && nodes[i].length === o.args.length ? nodes[i] : o.args.map((t) => t.v);
    if (o.op === 're') { const [x, y, w, h] = a; d.push(['M', ...P(x, y)], ['L', ...P(x + w, y)], ['L', ...P(x + w, y + h)], ['L', ...P(x, y + h)], ['Z']); cur = start = [x, y]; }
    else if (o.op === 'm') { d.push(['M', ...P(a[0], a[1])]); cur = start = [a[0], a[1]]; }
    else if (o.op === 'l') { d.push(['L', ...P(a[0], a[1])]); cur = [a[0], a[1]]; }
    else if (o.op === 'c') { d.push(['C', ...P(a[0], a[1]), ...P(a[2], a[3]), ...P(a[4], a[5])]); cur = [a[4], a[5]]; }
    else if (o.op === 'v') { d.push(['C', ...P(cur[0], cur[1]), ...P(a[0], a[1]), ...P(a[2], a[3])]); cur = [a[2], a[3]]; }
    else if (o.op === 'y') { d.push(['C', ...P(a[0], a[1]), ...P(a[2], a[3]), ...P(a[2], a[3])]); cur = [a[2], a[3]]; }
    else if (o.op === 'h') { d.push(['Z']); cur = start; }
  }
  return d;
}

const boxOfD = (d) => {
  const b = [Infinity, Infinity, -Infinity, -Infinity];
  for (const c of d) for (let k = 1; k + 1 < c.length; k += 2) { b[0] = Math.min(b[0], c[k]); b[1] = Math.min(b[1], c[k + 1]); b[2] = Math.max(b[2], c[k]); b[3] = Math.max(b[3], c[k + 1]); }
  return b;
};

/** Flatten M/L/C/Z into polylines (one per subpath; closed ones repeat their first point). */
export function flattenD(d, steps = 8) {
  const out = [];
  let cur = null, poly = null, start = null;
  for (const c of d) {
    if (c[0] === 'M') { poly = [[c[1], c[2]]]; out.push(poly); cur = start = [c[1], c[2]]; }
    else if (!poly) continue;
    else if (c[0] === 'L') { poly.push([c[1], c[2]]); cur = [c[1], c[2]]; }
    else if (c[0] === 'C') {
      const [x0, y0] = cur;
      for (let k = 1; k <= steps; k++) {
        const t = k / steps, u = 1 - t;
        poly.push([u * u * u * x0 + 3 * u * u * t * c[1] + 3 * u * t * t * c[3] + t * t * t * c[5], u * u * u * y0 + 3 * u * u * t * c[2] + 3 * u * t * t * c[4] + t * t * t * c[6]]);
      }
      cur = [c[5], c[6]];
    } else if (c[0] === 'Z') { poly.push(start.slice()); poly.closed = true; cur = start; }
  }
  return out;
}

const segDist = (p, a, b) => {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = dx * dx + dy * dy;
  const t = L ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)) : 0;
  return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy);
};
function inside(polys, p, evenOdd) {
  let wind = 0, cross = 0;
  for (const poly of polys) for (let i = 0; i + 1 < poly.length; i++) {
    const [a, b] = [poly[i], poly[i + 1]];
    if ((a[1] <= p[1]) !== (b[1] <= p[1])) {
      const x = a[0] + (p[1] - a[1]) / (b[1] - a[1]) * (b[0] - a[0]);
      if (x > p[0]) { cross++; wind += b[1] > a[1] ? 1 : -1; }
    }
  }
  return evenOdd ? cross % 2 === 1 : wind !== 0;
}

const KIND_OF = { path: 'shape', image: 'picture', text: 'text', form: 'form' };
/** The objects you can pick, as shown: kinds 'shape' | 'picture' | 'text' (forms are picked through what they hold). */
export function shown(pc, st, kinds = ['shape', 'picture', 'text']) {
  const want = new Set(kinds);
  const out = [];
  for (const o of pc.objects) {
    const kind = KIND_OF[o.kind];
    if (!kind || kind === 'form' || !want.has(kind) || (o.kind === 'path' && o.clip)) continue;
    const e = st?.o?.[o.key] || {};
    if (e.del || isGone(pc, st, o)) continue;
    const d = objectGeom(pc, o, e);
    const clip = o.clipBox ? (e.T ? boxOfD([['M', ...apply(e.T, o.clipBox[0], o.clipBox[1])], ['L', ...apply(e.T, o.clipBox[2], o.clipBox[3])]]) : o.clipBox) : null;
    let box = boxOfD(d);
    if (clip) box = [Math.max(box[0], clip[0]), Math.max(box[1], clip[1]), Math.min(box[2], clip[2]), Math.min(box[3], clip[3])];
    if (box[0] > box[2] || box[1] > box[3]) continue;   // clipped away entirely: nothing shows, nothing to pick
    out.push({ key: o.key, kind, obj: o, e, d, box, clip, lw: (e.lw ?? o.lw ?? 1), fills: o.kind !== 'path' || !!o.fillRgb || /^[fFBb]/.test(o.paint) });
  }
  if (want.has('shape')) for (const a of st?.add || []) out.push({ key: 'a:' + a.id, kind: 'shape', added: a, e: {}, d: a.d, box: boxOfD(a.d), lw: a.lw ?? 1, fills: !!a.fill, evenOdd: !!a.evenOdd });
  return out;
}
/** An object inside a deleted form is gone too. */
function isGone(pc, st, o) {
  for (let p = o.parent; p != null; ) {
    const f = pc.byId.get(p);
    if (!f) break;
    if (st?.o?.[f.key]?.del) return true;
    p = f.parent;
  }
  return false;
}

/** The topmost object under a page-space point (within tol). */
export function hitTest(list, p, tol) {
  for (let i = list.length - 1; i >= 0; i--) {
    const it = list[i];
    const pad = tol + it.lw / 2;
    if (p[0] < it.box[0] - pad || p[0] > it.box[2] + pad || p[1] < it.box[1] - pad || p[1] > it.box[3] + pad) continue;   // box = what shows (clips applied)
    if (it.kind !== 'shape') return it;
    const polys = flattenD(it.d);
    if (it.fills && inside(polys, p, it.evenOdd || it.obj?.evenOdd)) return it;
    for (const poly of polys) for (let k = 0; k + 1 < poly.length; k++) if (segDist(p, poly[k], poly[k + 1]) <= pad) return it;
  }
  return null;
}
/** Objects a marquee takes: inside it (window) or touching its box (crossing). */
export function inRect(list, r, crossing) {
  const [x0, y0, x1, y1] = [Math.min(r[0], r[2]), Math.min(r[1], r[3]), Math.max(r[0], r[2]), Math.max(r[1], r[3])];
  return list.filter((it) => (crossing
    ? it.box[0] <= x1 && it.box[2] >= x0 && it.box[1] <= y1 && it.box[3] >= y0
    : it.box[0] >= x0 && it.box[1] >= y0 && it.box[2] <= x1 && it.box[3] <= y1));
}
export function boxOf(items) {
  const b = [Infinity, Infinity, -Infinity, -Infinity];
  for (const it of items) { b[0] = Math.min(b[0], it.box[0]); b[1] = Math.min(b[1], it.box[1]); b[2] = Math.max(b[2], it.box[2]); b[3] = Math.max(b[3], it.box[3]); }
  return Number.isFinite(b[0]) ? b : null;
}
/** Outlines of the given objects as a display list (for the overlay), moved by T while dragging. */
export function outline(items, color, T = null, w = 1.5) {
  return items.map((it) => ({ k: 'path', d: T ? it.d.map((c) => mapCmd(c, T)) : it.d, stroke: color, w, alpha: 1, fill: null, falpha: 0 }));
}

// ---- point editing ---------------------------------------------------------------------------------
/**
 * A path's points as shown: anchors and Bézier handles. → [{i (op index), j (pair index in the op), x, y, kind, to}]
 * `to` = the anchor a handle hangs from (for drawing its line). Rectangles have no points here (scale them).
 */
export function nodesOf(pc, obj, e = {}) {
  if (obj.kind !== 'path') return [];
  const c = pc.contents.get(obj.where);
  const M = mul(obj.ctm, e.T || I);
  const out = [];
  let cur = null;
  for (let i = obj.first; i < obj.last; i++) {
    const o = c.ops[i];
    const a = e.nodes?.[i] && e.nodes[i].length === o.args.length ? e.nodes[i] : o.args.map((t) => t.v);
    const P = (k) => apply(M, a[2 * k], a[2 * k + 1]);
    if (o.op === 'm' || o.op === 'l') { const p = P(0); out.push({ i, j: 0, x: p[0], y: p[1], kind: 'anchor' }); cur = p; }
    else if (o.op === 'c') { const [h1, h2, p] = [P(0), P(1), P(2)]; out.push({ i, j: 0, x: h1[0], y: h1[1], kind: 'handle', to: cur }, { i, j: 1, x: h2[0], y: h2[1], kind: 'handle', to: p }, { i, j: 2, x: p[0], y: p[1], kind: 'anchor' }); cur = p; }
    else if (o.op === 'v') { const [h2, p] = [P(0), P(1)]; out.push({ i, j: 0, x: h2[0], y: h2[1], kind: 'handle', to: p }, { i, j: 1, x: p[0], y: p[1], kind: 'anchor' }); cur = p; }
    else if (o.op === 'y') { const [h1, p] = [P(0), P(1)]; out.push({ i, j: 0, x: h1[0], y: h1[1], kind: 'handle', to: cur }, { i, j: 1, x: p[0], y: p[1], kind: 'anchor' }); cur = p; }
  }
  return out;
}
/**
 * Move one point to a page-space place → the object's new `nodes`. An anchor drags the handles that touch it
 * along (as drawing programs do), so the curve keeps its shape around the point.
 */
export function moveNode(pc, obj, e, node, to) {
  const c = pc.contents.get(obj.where);
  const M = mul(obj.ctm, e.T || I);
  const Mi = inv(M);
  if (!Mi) return e.nodes || {};
  const nodes = clone(e.nodes || {});
  const vals = (i) => (nodes[i] && nodes[i].length === c.ops[i].args.length ? nodes[i] : c.ops[i].args.map((t) => t.v));
  const [ux, uy] = apply(Mi, to[0], to[1]);
  const v = vals(node.i).slice();
  const ox = v[2 * node.j], oy = v[2 * node.j + 1];
  v[2 * node.j] = ux; v[2 * node.j + 1] = uy;
  const dx = ux - ox, dy = uy - oy;
  const op = c.ops[node.i].op;
  if (node.kind === 'anchor') {
    // the handle before this anchor (in the same op) and the one after it (first handle of the next c / y op)
    if (op === 'c') { v[2] += dx; v[3] += dy; }
    else if (op === 'v') { v[0] += dx; v[1] += dy; }
    const nx = c.ops[node.i + 1];
    if (nx && node.i + 1 < obj.last && (nx.op === 'c' || nx.op === 'y')) { const w = vals(node.i + 1).slice(); w[0] += dx; w[1] += dy; nodes[node.i + 1] = w; }
  }
  nodes[node.i] = v;
  return nodes;
}

// ---- markups into the page -------------------------------------------------------------------------
const OPAQUE = (a) => a == null || a >= 0.999;
/**
 * A markup's display list (shapes.js) → paths for the page, or null when it can't go in as plain line work
 * (text, pictures, see-through colour, the highlighter's multiply).
 */
export function contentFromList(list, paper = '#ffffff', idOf = (k) => 'a' + k) {
  const out = [];
  let k = 0;
  for (const it of list) {
    if (it.k !== 'path') return null;
    if (it.blend === 'multiply') return null;
    const stroke = it.stroke && it.w > 0 ? (it.stroke === 'paper' ? paper : it.stroke) : null;
    const fill = it.fill && it.falpha > 0 ? (it.fill === 'paper' ? paper : it.fill) : null;
    if ((stroke && !OPAQUE(it.alpha)) || (fill && !OPAQUE(it.falpha))) return null;
    if (!stroke && !fill) continue;
    if ((stroke && !HEX.test(stroke)) || (fill && !HEX.test(fill))) return null;
    const a = { id: idOf(k++), d: it.d.map((c) => c.slice()), lw: stroke ? it.w : 0 };
    if (stroke) a.stroke = stroke;
    if (fill) a.fill = fill;
    if (it.cap === 'round') a.cap = 'round';
    if (it.join === 'round') a.join = 'round';
    if (it.dash) a.dash = it.dash.slice();
    if (it.rule === 'evenodd') a.evenOdd = true;
    out.push(a);
  }
  return out.length ? out : null;
}
