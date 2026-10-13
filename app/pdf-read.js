/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pdf-read.js — open a PDF of the plan set with pdf.js and read its existing annotations back. No DOM.
 *
 * `openPdf(env, bytes, { fileId, name })` → a file record:
 *   { id, name, size, bytes (the original, untouched), doc (pdf.js document used for drawing),
 *     pages: [{ index, key, label, sheetNo, title, view, rotate, width, height, annotMode }],
 *     markups (editable, from annotations), calibrations {sheetKey: cal}, removeRefs (ids to drop on save), layers (K3),
 *     notes: [...] }
 * env = { pdfjs, pdfLib, docOptions } — the libraries are passed in (the page uses the vendored builds,
 * the Node test the same versions).
 *
 * Annotations come from pdf.js `getAnnotations`. When a page has any we can edit, pdf-lib reads the
 * keys pdf.js does not hand out (/NM, /Subj, /IC, /L in drawing order, /Vertices, /InkList, /CL, /BE, /IT
 * and our private /MarkupCraft JSON). Ours reopen exactly; plain standard ones (Square, Circle, Line,
 * PolyLine, Polygon, Ink, FreeText, Text) become editable markups; everything else stays as it is and
 * is drawn by pdf.js (read-only). So the editable ones are not drawn twice, a page holding both kinds
 * is drawn from a copy without the editable ones; a page with only editable ones is drawn with
 * annotations off. PDF text is untrusted: it only ever reaches the page as text nodes.
 * Replies (Text with /IRT, also replies to replies and other programs' replies on read-only annotations)
 * become each markup's thread and are rewritten on save; review states set the status.
 * Sheet names: typed by hand (/MarkupCraftSheet) > page label > title block (titleblock.js, from
 * getTextContent) > "<file> — page n".
 */

import { makeMarkup, geometryOk, cleanReply, statusText, STATUSES, TYPES } from './model.js';
import { t } from './i18n.js';
import { validCalibration } from './units.js';
import { PRIVATE_KEY, PRIVATE_CAL_KEY, PRIVATE_SHEET_KEY, PRIVATE_LAYERS_KEY, PRIVATE_COLUMNS_KEY, PRIVATE_PHOTO_KEY, refKey } from './pdf-write.js';
import { readTitleBlock } from './titleblock.js';
import { cleanImage } from './imagestamp.js';
import { cleanHoles } from './holes.js';
import { readOutline } from './bookmarks.js';

export const EDITABLE_SUBTYPES = new Set(['Square', 'Circle', 'Line', 'PolyLine', 'Polygon', 'Ink', 'FreeText', 'Text', 'Stamp']);
const IGNORED_SUBTYPES = new Set(['Popup', 'Link', 'Widget']);

/**
 * A sheet's number, name and display title. Order: typed by hand (`manual`), then the page label
 * ("A-101" is a sheet number; "1", "xii" are only page numbers; "Floor plan" is a name), then the title
 * block read from the page's text (`tb`), then "<file> — page n".
 * Returns { label, sheetNo, name, title, from: 'manual' | 'label' | 'title block' | 'file' }.
 */
export function sheetInfo(label, fileName, index, tb = null, manual = null) {
  const lab = typeof label === 'string' ? label.trim() : '';
  const base = String(fileName || t('file.untitled')).replace(/\.pdf$/i, '');
  const isNumber = /^\d+$/.test(lab) || /^[ivxlcdm]+$/i.test(lab);
  const labNo = lab && !isNumber && /[A-Za-z]/.test(lab) && /\d/.test(lab) && lab.length <= 24 ? lab : '';
  const labName = lab && !isNumber && !labNo ? lab : '';
  const sheetNo = (manual?.number || '').trim() || labNo || tb?.number || '';
  const name = (manual?.title || '').trim() || labName || tb?.title || '';
  const from = manual && (manual.number || manual.title) ? 'manual' : labNo || labName ? 'label' : tb && (tb.number || tb.title) ? 'title block' : 'file';   // i18n-ignore (ids; the UI words are sheet.from.*)
  const title = sheetNo && name ? t('sheet.title', { number: sheetNo, name }) : sheetNo || name ? sheetNo || name : t('sheet.title.page', { file: base, n: index + 1 });
  return { label: lab, sheetNo, name, title, from };
}

/** pdf.js color (0–255 triple) → '#rrggbb' (fallback when missing). */
export function hexColor(c, fallback = '#d0021b') {
  if (!c || c.length < 3) return fallback;
  return '#' + [c[0], c[1], c[2]].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
}
const hex01 = (arr) => (Array.isArray(arr) && arr.length >= 3 ? hexColor(arr.map((v) => v * 255)) : null);

/** "D:20261010123000Z" / "D:20261010123000-05'00'" → ISO (or ''). */
export function pdfDate(s) {
  const m = /^(?:D:)?(\d{4})(\d{2})?(\d{2})?(\d{2})?(\d{2})?(\d{2})?([Zz+-])?(\d{2})?'?(\d{2})?'?/.exec(String(s || ''));
  if (!m) return '';
  const [, y, mo = '01', d = '01', h = '00', mi = '00', se = '00', z, oh = '00', om = '00'] = m;
  let t = Date.UTC(+y, +mo - 1, +d, +h, +mi, +se);
  if (z === '+' || z === '-') t -= (z === '+' ? 1 : -1) * ((+oh) * 60 + (+om)) * 60000;
  const dt = new Date(t);
  return Number.isNaN(+dt) ? '' : dt.toISOString().replace(/\.\d+Z$/, 'Z');
}

const pairs = (flat) => {
  const out = [];
  for (let i = 0; i + 1 < (flat?.length || 0); i += 2) out.push([+flat[i], +flat[i + 1]]);
  return out;
};
const str = (o) => (o && typeof o === 'object' && 'str' in o ? o.str : typeof o === 'string' ? o : '') || '';

/** Values of a pdf-lib object as plain JS (numbers, strings, arrays, {dicts}); names become strings. */
export function plain(lib, obj, depth = 0) {
  const { PDFNumber, PDFName, PDFString, PDFHexString, PDFArray, PDFDict, PDFBool, PDFRef } = lib;
  if (obj === undefined || obj === null || depth > 4) return null;
  if (obj instanceof PDFNumber) return obj.asNumber();
  if (obj instanceof PDFName) return obj.decodeText ? obj.decodeText() : obj.asString().replace(/^\//, '');
  if (obj instanceof PDFString || obj instanceof PDFHexString) { try { return obj.decodeText(); } catch { return ''; } }
  if (obj instanceof PDFBool) return obj.asBoolean();
  if (obj instanceof PDFArray) return obj.asArray().map((v) => plain(lib, v, depth + 1));
  if (obj instanceof PDFRef) return { ref: refKey(obj.objectNumber, obj.generationNumber) };
  if (obj instanceof PDFDict) {
    const out = {};
    for (const [k, v] of obj.entries()) out[k.decodeText ? k.decodeText() : k.asString().slice(1)] = plain(lib, v, depth + 1);
    return out;
  }
  return null;
}

/** The keys we need from an annotation dictionary (pdf-lib), as plain JS. */
export function extrasOf(lib, ctx, id) {
  const m = /^(\d+)R(\d*)$/.exec(String(id || ''));
  if (!m) return {};
  const dict = ctx.lookupMaybe(lib.PDFRef.of(+m[1], +(m[2] || 0)), lib.PDFDict);
  if (!dict) return {};
  const out = {};
  for (const k of [PRIVATE_PHOTO_KEY, 'NM', 'Subj', 'IC', 'CA', 'BE', 'IT', 'CL', 'RD', 'L', 'LE', 'Vertices', 'InkList', 'Name', 'DA', PRIVATE_KEY]) {
    const v = dict.get(lib.PDFName.of(k));
    if (v !== undefined) out[k] = plain(lib, ctx.lookup(v));
  }
  return out;
}

/** Font size from a /DA string ("/Helv 12 Tf 1 0 0 rg"). */
function daSize(da) { const m = /([\d.]+)\s+Tf/.exec(String(da || '')); return m ? Math.max(4, Math.min(144, +m[1])) : 12; }

/** Restore one of our own markups from its private JSON; null when the JSON is not usable. */
export function fromPrivate(json, a, sheet) {
  let d;
  try { d = JSON.parse(json); } catch { return null; }
  if (!d || typeof d !== 'object' || d.v !== 1 || typeof d.type !== 'string' || !TYPES[d.type] || d.type === 'foreign') return null;
  const okPts = (p) => Array.isArray(p) && p.every((q) => Array.isArray(q) && q.length === 2 && q.every(Number.isFinite));
  const okRect = (r) => Array.isArray(r) && r.length === 4 && r.every(Number.isFinite);
  if (d.pts !== null && d.pts !== undefined && !okPts(d.pts)) return null;
  if (d.rect !== null && d.rect !== undefined && !okRect(d.rect)) return null;
  // moved or resized by another program since we saved it? Then trust the annotation's geometry instead.
  if (okRect(d.ar) && a?.rect && d.ar.some((v, i) => Math.abs(v - a.rect[i]) > 0.75)) return null;
  const style = d.style && typeof d.style === 'object' ? d.style : {};
  const clean = {
    color: /^#[0-9a-f]{6}$/i.test(style.color) ? style.color : undefined,
    fill: style.fill === null || /^#[0-9a-f]{6}$/i.test(style.fill) ? style.fill : undefined,
    width: Number.isFinite(style.width) ? Math.max(0, Math.min(200, style.width)) : undefined,
    fillOpacity: Number.isFinite(style.fillOpacity) ? Math.max(0, Math.min(1, style.fillOpacity)) : undefined,
    opacity: Number.isFinite(style.opacity) ? Math.max(0.05, Math.min(1, style.opacity)) : undefined,
    fontSize: Number.isFinite(style.fontSize) ? Math.max(2, Math.min(300, style.fontSize)) : undefined,
  };
  for (const k of Object.keys(clean)) if (clean[k] === undefined) delete clean[k];
  const mk = makeMarkup({
    id: typeof d.id === 'string' && /^[A-Za-z0-9._-]{1,80}$/.test(d.id) ? d.id : undefined,
    sheet, type: d.type, pts: d.pts || null, rect: d.rect || null, rot: [0, 90, 180, 270].includes(d.rot) ? d.rot : 0,
    style: clean, text: String(d.text ?? ''), label: String(d.label ?? ''), subject: String(d.subject ?? ''), comment: String(d.comment ?? ''),
    author: String(d.author ?? ''), created: String(d.created || ''), modified: String(d.modified || ''),
    status: d.status, punch: d.punch && typeof d.punch === 'object' ? d.punch : null, layer: typeof d.layer === 'string' ? d.layer : '', img: d.type === 'image' ? cleanImage(d.img) : '', link: typeof d.link === 'string' ? d.link : '', legend: d.legend, fields: d.fields, holes: d.type === 'area' ? cleanHoles(d.holes) : undefined,
  });
  return geometryOk(mk) ? mk : null;
}

/**
 * One pdf.js annotation (+ the pdf-lib extras) → { markup } (editable), { foreign } (read-only, drawn by
 * pdf.js), { reply } (a review state for another annotation) or null (links, pop-ups, form fields).
 */
export function annotToMarkup(a, x, sheet, rot = 0) {
  const sub = a.subtype;
  if (!sub || IGNORED_SUBTYPES.has(sub)) return null;
  if (sub === 'FileAttachment' && x[PRIVATE_PHOTO_KEY] !== undefined) return null;   // our photo attachment: the photo travels on its reply
  if (a.inReplyTo && sub === 'Text') {
    if (a.replyType && a.replyType !== 'R') return null;   // grouped annotations are not replies
    return { reply: {
      ref: a.id, to: a.inReplyTo, nm: typeof x.NM === 'string' ? x.NM : '', model: String(a.stateModel || ''), state: String(a.state || ''),
      author: str(a.titleObj), text: str(a.contentsObj), date: pdfDate(a.modificationDate) || pdfDate(a.creationDate),
      photo: typeof x[PRIVATE_PHOTO_KEY] === 'string' ? x[PRIVATE_PHOTO_KEY] : '',
    } };
  }
  const base = {
    sheet, rot,
    author: str(a.titleObj), comment: str(a.contentsObj), subject: typeof x.Subj === 'string' ? x.Subj : '',
    created: pdfDate(a.creationDate) || pdfDate(a.modificationDate), modified: pdfDate(a.modificationDate),
    src: { ref: a.id, subtype: sub },
  };
  if (EDITABLE_SUBTYPES.has(sub) && typeof x[PRIVATE_KEY] === 'string') {
    const m = fromPrivate(x[PRIVATE_KEY], a, sheet);
    if (m) { m.src = base.src; m.fromPrivate = true; return { markup: m }; }
  }
  const hidden = (a.annotationFlags & 2) !== 0;
  const color = hexColor(a.color);
  const width = Number.isFinite(a.borderStyle?.width) ? a.borderStyle.width : 1;
  const opacity = Number.isFinite(x.CA) ? Math.max(0.05, Math.min(1, x.CA)) : 1;
  const fill = hex01(x.IC);
  const style = { color, width, opacity, fill, fillOpacity: fill ? 1 : 0.25 };
  const cloudy = x.BE && x.BE.S === 'C';
  const foreign = () => ({ foreign: makeMarkup({ ...base, type: 'foreign', rect: a.rect, locked: true, subject: base.subject || sub, style: { color } }) });
  if (hidden) return null;
  switch (sub) {
    case 'Square': case 'Circle': {
      const rd = Array.isArray(x.RD) && x.RD.length === 4 ? x.RD : [0, 0, 0, 0];
      const r = a.rect;
      // RD is [left top right bottom] from /Rect to the shape's edge; the border is painted inside that edge
      const rect = [r[0] + rd[0] + width / 2, r[1] + rd[3] + width / 2, r[2] - rd[2] - width / 2, r[3] - rd[1] - width / 2];
      if (rect[2] <= rect[0] || rect[3] <= rect[1]) return foreign();
      const type = sub === 'Circle' ? 'ellipse' : cloudy ? 'cloudrect' : 'rect';
      if (cloudy) { const inset = Math.max(4, width * 6 + 8) * 0.5; rect[0] += inset; rect[1] += inset; rect[2] -= inset; rect[3] -= inset; }
      return { markup: makeMarkup({ ...base, type, rect, style }) };
    }
    case 'Line': {
      const L = Array.isArray(x.L) && x.L.length === 4 ? x.L : a.lineCoordinates;
      if (!L || L.length !== 4) return foreign();
      const le = Array.isArray(x.LE) ? x.LE.map(String) : [];
      const isDim = x.IT === 'LineDimension';
      const arrowEnd = /Arrow/.test(le[1] || '');
      const arrowStart = /Arrow/.test(le[0] || '');
      let pts = [[L[0], L[1]], [L[2], L[3]]];
      if (arrowStart && !arrowEnd) pts = [pts[1], pts[0]];
      const type = isDim ? 'measure' : arrowEnd || arrowStart ? 'arrow' : 'line';
      return { markup: makeMarkup({ ...base, type, pts, style: { ...style, fill: null }, text: isDim ? str(a.contentsObj).split('\n')[0] : '', comment: isDim ? str(a.contentsObj).split('\n').slice(1).join('\n') : base.comment }) };
    }
    case 'PolyLine': case 'Polygon': {
      const pts = pairs(Array.isArray(x.Vertices) ? x.Vertices : a.vertices ? Array.from(a.vertices) : []);
      if (pts.length < 2) return foreign();
      const type = sub === 'PolyLine' ? 'polyline' : x.IT === 'PolygonDimension' && pts.length >= 3 ? 'area' : cloudy ? 'cloud' : 'polygon';
      return { markup: makeMarkup({ ...base, type, pts, style: sub === 'PolyLine' ? { ...style, fill: null } : style }) };
    }
    case 'Ink': {
      const lists = Array.isArray(x.InkList) ? x.InkList : (a.inkLists || []).map((l) => Array.from(l));
      const strokes = lists.map(pairs).filter((p) => p.length);
      if (!strokes.length) return foreign();
      if (x.IT === 'CountMarks') {
        // a count group: each ring's center is a mark
        const marks = strokes.map((ring0) => {
          const ring = ring0.length > 2 && Math.hypot(ring0[0][0] - ring0.at(-1)[0], ring0[0][1] - ring0.at(-1)[1]) < 1e-6 ? ring0.slice(0, -1) : ring0;
          return [ring.reduce((t, p) => t + p[0], 0) / ring.length, ring.reduce((t, p) => t + p[1], 0) / ring.length];
        });
        const lab = /^(.*):\s*\d+\s*$/.exec(str(a.contentsObj).split('\n')[0] || '');
        return { markup: makeMarkup({ ...base, type: 'count', pts: marks, label: lab ? lab[1] : t('count.default'), comment: str(a.contentsObj).split('\n').slice(1).join('\n'), style: { color, width } }) };
      }
      const hl = x.IT === 'InkHighlight' || opacity < 0.7 && width >= 6;
      // one markup per stroke: a multi-stroke ink annotation becomes several pen markups
      return { markups: strokes.map((pts, i) => makeMarkup({ ...base, src: i ? null : base.src, type: hl ? 'highlight' : 'pen', pts, style: { ...style, fill: null } })) };
    }
    case 'FreeText': {
      const r = a.rect;
      const rd = Array.isArray(x.RD) && x.RD.length === 4 ? x.RD : [0, 0, 0, 0];
      const rect = [r[0] + rd[0], r[1] + rd[3], r[2] - rd[2], r[3] - rd[1]];
      if (rect[2] - rect[0] < 1 || rect[3] - rect[1] < 1) return foreign();
      const s = { ...style, fontSize: daSize(x.DA), width: x.IT === 'FreeTextCallout' ? Math.max(0.5, width) : width };
      const text = str(a.contentsObj);
      if (x.IT === 'FreeTextCallout' && Array.isArray(x.CL) && x.CL.length >= 4) {
        const cl = pairs(x.CL);
        return { markup: makeMarkup({ ...base, type: 'callout', rect, pts: cl.length >= 3 ? [cl[0], cl[1]] : [cl[0]], text, comment: '', style: s }) };
      }
      return { markup: makeMarkup({ ...base, type: 'text', rect, text, comment: '', style: s }) };
    }
    case 'Text': {
      const r = a.rect;
      return { markup: makeMarkup({ ...base, type: 'note', pts: [[r[0], r[3]]], style: { color: color === '#000000' ? '#f2c230' : color } }) };
    }
    case 'Stamp':
    default:
      return foreign();
  }
}

/**
 * Open one PDF. Returns the file record described at the top. Throws a plain-language Error when the
 * file cannot be read.
 */
export async function openPdf(env, bytes, { fileId, name, onProgress, readText = true } = {}) {
  const { pdfjs } = env;
  const src = (data) => ({ data, isEvalSupported: false, enableScripting: false, ...(env.docOptions || {}) });
  let doc;
  try {
    doc = await pdfjs.getDocument(src(bytes.slice())).promise;
  } catch (e) {
    if (e?.name === 'PasswordException') throw new Error(t('open.err.password', { file: name }));
    throw new Error(t('open.err.read', { file: name, error: e?.message || t('open.err.unknown') }));
  }
  const labels = await doc.getPageLabels().catch(() => null);
  const meta = await doc.getMetadata().catch(() => null);
  // pdf.js 6 hands custom Info keys over as a Map (older builds: a plain object)
  const custom = meta?.info?.Custom;
  const ours = !!(custom instanceof Map ? custom.get(PRIVATE_KEY) : custom?.[PRIVATE_KEY]);
  // the set's markup layers as saved (0.4 K3): [{name, hidden, locked}] — untrusted, cleaned by Store.load
  let layers = [];
  let columns = [];
  try { const raw = custom instanceof Map ? custom.get(PRIVATE_COLUMNS_KEY) : custom?.[PRIVATE_COLUMNS_KEY]; columns = raw ? JSON.parse(String(raw)) : []; } catch { columns = []; }
  try { const raw = custom instanceof Map ? custom.get(PRIVATE_LAYERS_KEY) : custom?.[PRIVATE_LAYERS_KEY]; const v = raw ? JSON.parse(String(raw)) : []; layers = Array.isArray(v) ? v.slice(0, 500).filter((l) => l && typeof l === 'object') : []; } catch { layers = []; }
  const pages = [];
  const raw = [];
  for (let i = 0; i < doc.numPages; i++) {
    const page = await doc.getPage(i + 1);
    // the title block, from the page's own text (scanned sheets have none: then the file name and page)
    let tb = null;
    if (readText) {
      try { tb = readTitleBlock((await page.getTextContent()).items, page.getViewport({ scale: 1 })); } catch { tb = null; }
    }
    const info = sheetInfo(labels?.[i], name, i, tb);
    const [x0, y0, x1, y1] = page.view;
    const rotate = ((page.rotate % 360) + 360) % 360;
    pages.push({ index: i, key: fileId + ':' + i, ...info, tb, view: [x0, y0, x1, y1], rotate, width: x1 - x0, height: y1 - y0, annotMode: 'enable' });
    // 'any': hidden review-state replies are needed too (hidden annotations never become markups)
    raw.push(await page.getAnnotations({ intent: 'any' }).catch(() => []));
    onProgress?.(i + 1, doc.numPages);
  }

  const record = { id: fileId, name, size: bytes.length, bytes, doc, pages, markups: [], calibrations: {}, sheetNames: {}, removeRefs: new Set(), layers, columns, bookmarks: await readOutline(doc), notes: [], foreignCount: 0, cleaned: false, replyCount: 0 };
  const needLib = ours || raw.some((list) => list.some((a) => EDITABLE_SUBTYPES.has(a.subtype)));
  if (!needLib) return record;

  // pdf-lib reads what pdf.js does not hand out
  // pdf-lib may be handed over as a loader so the page fetches it only for files that need it
  let lib = null, ldoc = null;
  try { lib = typeof env.pdfLib === 'function' ? await env.pdfLib() : env.pdfLib; } catch { lib = null; }
  try { if (lib) ldoc = await lib.PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false }); } catch { ldoc = null; }
  const ctx = ldoc?.context;
  const pageHasForeign = new Array(pages.length).fill(false);
  const pageHasEditable = new Array(pages.length).fill(false);
  const replies = [];
  const byRef = new Map();
  for (let i = 0; i < pages.length; i++) {
    const pg = pages[i];
    if (ldoc) {
      const node = ldoc.getPage(i)?.node;
      const calRaw = node ? plain(lib, node.get(lib.PDFName.of(PRIVATE_CAL_KEY))) : null;
      let cal = null;
      if (typeof calRaw === 'string') { try { cal = JSON.parse(calRaw); } catch { cal = null; } }
      const nameRaw = node ? plain(lib, node.get(lib.PDFName.of(PRIVATE_SHEET_KEY))) : null;
      if (typeof nameRaw === 'string') {
        try {
          const nm = JSON.parse(nameRaw);
          const clean = { number: String(nm?.number ?? '').slice(0, 40).trim(), title: String(nm?.title ?? '').slice(0, 200).trim() };
          if (clean.number || clean.title) { record.sheetNames[pg.key] = clean; Object.assign(pg, sheetInfo(labels?.[i], name, i, pg.tb, clean)); }
        } catch { /* not ours */ }
      }
      if (validCalibration(cal)) record.calibrations[pg.key] = { mmPerPt: cal.mmPerPt, unit: cal.unit, label: String(cal.label || '').slice(0, 120) };
      else if (node) {
        const vp = plain(lib, node.lookup(lib.PDFName.of('VP')));
        const c = Array.isArray(vp) ? calFromMeasure(vp.find((v) => v && v.Measure)?.Measure) : null;
        if (c) record.calibrations[pg.key] = c;
      }
    }
    for (const a of raw[i]) {
      const x = ldoc ? extrasOf(lib, ctx, a.id) : {};
      const r = annotToMarkup(a, x, pg.key, pg.rotate);
      if (!r) { if (a.subtype === 'Widget' && a.hasAppearance) pageHasForeign[i] = true; continue; }
      if (r.reply) { replies.push(r.reply); continue; }
      if (r.foreign) { pageHasForeign[i] = true; record.markups.push(r.foreign); record.foreignCount++; byRef.set(a.id, r.foreign); continue; }
      const list = r.markups || [r.markup];
      for (const m of list) { record.markups.push(m); if (m.src?.ref) byRef.set(m.src.ref, m); }
      record.removeRefs.add(a.id);
      pageHasEditable[i] = true;
    }
  }
  // threads: replies (ours or another program's, replies to replies too) hang off their root markup;
  // review states log status changes, and the newest one decides a markup's status
  const replyTo = new Map(replies.map((r) => [r.ref, r.to]));
  const rootOf = (ref) => { let k = ref, n = 0; while (replyTo.has(k) && n++ < 50) k = replyTo.get(k); return byRef.get(k) || null; };
  replies.sort((p, q) => String(p.date).localeCompare(String(q.date)));
  for (const rp of replies) {
    const m = rootOf(rp.to);
    if (!m) continue;   // a reply to something that is not a markup (a link, a form field): left as it is
    record.removeRefs.add(rp.ref);
    record.replyCount++;
    const review = rp.model.toLowerCase() === 'review';
    const raw = rp.state.charAt(0).toUpperCase() + rp.state.slice(1).toLowerCase();
    const st = STATUSES.includes(raw) ? raw : review && (raw === 'None' || raw === 'Cancelled') ? 'Open' : '';
    if (review && st && (!m.modified || !rp.date || rp.date >= m.modified || m.src?.subtype && !m.fromPrivate)) m.status = st;
    if (rp.nm && rp.nm === m.id + '-state') continue;   // the plain status note written for a markup with no thread
    const r = cleanReply({ id: rp.nm || undefined, author: rp.author, date: rp.date || m.modified, text: rp.text || (st ? statusText(st) : ''), kind: review && st ? 'status' : 'comment', status: st, photo: rp.photo });
    if (r && !m.replies.some((x) => x.id === r.id)) m.replies.push(r);
  }
  for (const m of record.markups) delete m.fromPrivate;

  // draw: pages with only editable annotations → annotations off; pages with both → a cleaned copy
  const mixed = pageHasEditable.some((e, i) => e && pageHasForeign[i]);
  if (mixed && ldoc) {
    for (let i = 0; i < pages.length; i++) {
      if (!pageHasEditable[i]) continue;
      const node = ldoc.getPage(i).node;
      const arr = node.lookupMaybe(lib.PDFName.of('Annots'), lib.PDFArray);
      if (!arr) continue;
      const keep = arr.asArray().filter((it) => {
        if (!(it instanceof lib.PDFRef)) return true;
        if (record.removeRefs.has(refKey(it.objectNumber, it.generationNumber))) return false;
        const d = ctx.lookupMaybe(it, lib.PDFDict);
        const irt = d?.get(lib.PDFName.of('IRT'));
        return !(irt instanceof lib.PDFRef && record.removeRefs.has(refKey(irt.objectNumber, irt.generationNumber)));
      });
      node.set(lib.PDFName.of('Annots'), ctx.obj(keep));
    }
    const cleaned = await ldoc.save({ useObjectStreams: false });
    try {
      const doc2 = await pdfjs.getDocument(src(cleaned)).promise;
      await closePdf(doc);
      record.doc = doc2;
      record.cleaned = true;
    } catch { record.notes.push(t('open.note.twice')); }
  } else {
    for (let i = 0; i < pages.length; i++) if (pageHasEditable[i]) pages[i].annotMode = 'disable';
  }
  if (!ldoc && needLib) record.notes.push(t('open.note.extras'));
  return record;
}

/** Let go of a pdf.js document (and its worker side). */
export async function closePdf(doc) {
  try { await (doc?.loadingTask?.destroy ? doc.loadingTask.destroy() : doc?.destroy?.()); } catch { /* already gone */ }
}

/** A /Measure dictionary another program wrote (plain JS) → calibration, when its unit is one we know. */
export function calFromMeasure(meas) {
  if (!meas || meas.Subtype !== 'RL' || !Array.isArray(meas.X) || !meas.X[0]) return null;
  const x = meas.X[0];
  const C = Number(x.C);
  const U = String(x.U || '').trim().toLowerCase().replace(/[.\s]/g, '');
  const mm = { ft: 304.8, "'": 304.8, feet: 304.8, in: 25.4, '"': 25.4, inch: 25.4, m: 1000, cm: 10, mm: 1 }[U];
  if (!(C > 0) || !mm) return null;
  const unit = U === 'ft' || U === "'" || U === 'feet' ? 'ft-in' : U === 'in' || U === '"' || U === 'inch' ? 'in' : U === 'cm' ? 'mm' : U;
  return { mmPerPt: C * mm, unit, label: String(meas.R || t('cal.from_file')).slice(0, 120) };
}
