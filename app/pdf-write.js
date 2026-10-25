/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pdf-write.js — save a marked-up copy of a PDF with pdf-lib. No DOM.
 *
 * `writeMarkedUp(lib, bytes, { pages, removeRefs })` loads the ORIGINAL bytes (the file on disk is
 * never touched), drops the annotations MarkupCraft read as editable markups (and the replies and
 * pop-ups that hang off them) and writes every markup as a real PDF annotation:
 *   rect → Square, ellipse → Circle, cloudrect → Square + cloudy border (/BE), cloud → Polygon + /BE,
 *   polygon → Polygon, polyline → PolyLine, line/arrow → Line (+ /LE), measure → Line /IT /LineDimension
 *   + /Measure, pen/highlight → Ink, text → FreeText, callout → FreeText /IT /FreeTextCallout (+ /CL),
 *   note → Text, stamp → Stamp.
 * Each gets an appearance stream (/AP /N) drawn from the same display list as the screen
 * (shapes.js), /T author, /M and /CreationDate, /Contents, /Subj, our id in /NM, /C, /CA, /BS, and the
 * full markup (status, punch item, style…) as JSON in a private /MarkupCraft key so it reopens
 * exactly. Area → Polygon /IT /PolygonDimension + /Measure; a count group → ONE Ink annotation
 * (/IT /CountMarks, a ring per mark, /Contents "<group>: n").
 * Each markup's thread (also on read-only annotations kept from the file) is written as reply
 * annotations: Text, /IRT → the markup, /RT /R, /T /M /Contents /NM, an empty appearance (no icon on the
 * sheet); status entries add /StateModel Review /State, which other review tools show as status
 * changes. Sheet calibrations go on the page as /VP with a /Measure (+ /MarkupCraftCal JSON); sheet
 * numbers typed by hand become /PageLabels (`labels`) and number + title go in /MarkupCraftSheet.
 *
 * `lib` is the pdf-lib module (the page passes the vendored one in; tests load the same file).
 */

import { shapes, placeText, frame as imgFrame } from './shapes.js';
import { imageInfo } from './imagestamp.js';
import { winAnsiHex } from './font.js';
import { measureArea } from './units.js';
import { TYPES, statusText } from './model.js';
import { arcThrough } from './arcs.js';
import { writeOutline } from './bookmarks.js';
import { t } from './i18n.js';

export const PRIVATE_KEY = 'MarkupCraft';
export const PRIVATE_CAL_KEY = 'MarkupCraftCal';
export const PRIVATE_SHEET_KEY = 'MarkupCraftSheet';
export const PRIVATE_PHOTO_KEY = 'MarkupCraftPhoto';   // a reply's photo (0.4 K20): on the reply, and on its file attachment
export const PRIVATE_COLUMNS_KEY = 'MarkupCraftColumns';   // Info: the set's custom columns (0.4 K19)
export const PRIVATE_LINK_KEY = 'MarkupCraftLink';     // our Link annotations for sheet links (0.4 K9)
export const PRIVATE_RECORDS_KEY = 'MarkupCraftRecords';   // Info: the set's field records as JSON (0.7 LC.7, records.js packRecords)
export const PRIVATE_LAYERS_KEY = 'MarkupCraftLayers';   // Info: the set's layers [{name, hidden, locked}] (0.4 K3)

const n = (v) => {
  if (!Number.isFinite(v)) return '0';
  const s = (Math.abs(v) < 1e-6 ? 0 : v).toFixed(3);
  return s.replace(/\.?0+$/, '') || '0';
};
const rgb = (hex) => {
  if (hex === 'paper') return [1, 1, 1];
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || ''));
  if (!m) return [0, 0, 0];
  const v = parseInt(m[1], 16);
  return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
};

/** "12R" / "12R3" (pdf.js annotation ids) ⇄ object/generation numbers. */
export function refKey(objectNumber, generation = 0) { return generation ? objectNumber + 'R' + generation : objectNumber + 'R'; }

/**
 * A display list → appearance stream content + the graphics states it needs.
 * Returns { content, gstates: {name: {CA, ca, BM}}, missing }.
 */
export function appearanceContent(list) {
  const ops = [];
  const gstates = {};
  const gsKey = new Map();
  let missing = 0;
  const gs = (CA, ca, BM) => {
    const key = n(CA) + '/' + n(ca) + '/' + (BM || '');
    if (!gsKey.has(key)) { const name = 'GS' + gsKey.size; gsKey.set(key, name); gstates[name] = { CA, ca, BM }; }
    return gsKey.get(key);
  };
  const pathOps = (d) => d.map((c) => {
    switch (c[0]) {
      case 'M': return n(c[1]) + ' ' + n(c[2]) + ' m';
      case 'L': return n(c[1]) + ' ' + n(c[2]) + ' l';
      case 'C': return c.slice(1).map(n).join(' ') + ' c';
      case 'Z': return 'h';
      default: return '';
    }
  }).join(' ');
  for (const it of list) {
    if (it.k === 'path') {
      const doFill = it.fill && it.falpha > 0;
      const doStroke = it.stroke && it.w > 0;
      if (!doFill && !doStroke) continue;
      ops.push('q');
      const a = doStroke ? it.alpha : 1, fa = doFill ? it.falpha : 1;
      if (a < 1 || fa < 1 || it.blend) ops.push('/' + gs(a, fa, it.blend === 'multiply' ? 'Multiply' : null) + ' gs');
      if (doFill) ops.push(rgb(it.fill).map(n).join(' ') + ' rg');
      if (doStroke) {
        ops.push(rgb(it.stroke).map(n).join(' ') + ' RG', n(it.w) + ' w', (it.cap === 'round' ? 1 : 0) + ' J', (it.join === 'round' ? 1 : 0) + ' j');
        if (it.dash) ops.push('[' + it.dash.map(n).join(' ') + '] 0 d');
      }
      ops.push(pathOps(it.d));
      const eo = it.rule === 'evenodd' ? '*' : '';   // cut-outs stay open
      ops.push(doFill && doStroke ? 'B' + eo : doFill ? 'f' + eo : 'S');
      ops.push('Q');
    } else if (it.k === 'text') {
      const lines = it.lines.filter((s) => s !== '');
      if (!lines.length) continue;
      const pl = placeText(it);
      const rad = (pl.angle * Math.PI) / 180;
      const c = Math.round(Math.cos(rad) * 1e6) / 1e6, s = Math.round(Math.sin(rad) * 1e6) / 1e6;
      ops.push('q');
      if ((it.alpha ?? 1) < 1) ops.push('/' + gs(it.alpha, it.alpha, null) + ' gs');
      ops.push('BT', '/' + (it.bold ? 'F2' : 'F1') + ' ' + n(it.size) + ' Tf', rgb(it.color).map(n).join(' ') + ' rg');
      for (const ln of pl.lines) {
        if (!ln.s) continue;
        const enc = winAnsiHex(ln.s);
        missing += enc.missing;
        ops.push([c, s, -s, c].map(n).join(' ') + ' ' + n(ln.x) + ' ' + n(ln.y) + ' Tm ' + enc.hex + ' Tj');
      }
      ops.push('ET', 'Q');
    }
  }
  return { content: ops.join('\n'), gstates, missing };
}

const STANDARD_STAMP_NAMES = { approved: 'Approved', rejected: 'NotApproved', void: 'Void', reviewed: 'Reviewed' };
const camel = (s) => String(s).replace(/[^A-Za-z0-9 ]+/g, ' ').trim().split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('') || 'Stamp';

/** /Measure dictionary values for a calibration (plain data; the writer turns it into PDF objects). */
export function measureSpec(cal) {
  if (!cal) return null;
  const perPt = cal.mmPerPt;
  const R = cal.label || t('cal.calibrated');
  // the unit abbreviations below are PDF /Measure data that viewers show as written   i18n-ignore
  switch (cal.unit) {
    case 'ft-in': return { R, X: [{ U: 'ft', C: perPt / 304.8, D: 1, F: 'D' }], D: [{ U: "'", C: 1, D: 1, F: 'T' }, { U: '"', C: 12, D: 16, F: 'F' }], A: [{ U: 'sq ft', C: 1, D: 100, F: 'D' }] };   // i18n-ignore
    case 'ft': return { R, X: [{ U: 'ft', C: perPt / 304.8, D: 100, F: 'D' }], D: [{ U: 'ft', C: 1, D: 100, F: 'D' }], A: [{ U: 'sq ft', C: 1, D: 100, F: 'D' }] };   // i18n-ignore
    case 'in': return { R, X: [{ U: 'in', C: perPt / 25.4, D: 100, F: 'D' }], D: [{ U: 'in', C: 1, D: 100, F: 'D' }], A: [{ U: 'sq in', C: 1, D: 100, F: 'D' }] };   // i18n-ignore
    case 'm': return { R, X: [{ U: 'm', C: perPt / 1000, D: 1000, F: 'D' }], D: [{ U: 'm', C: 1, D: 1000, F: 'D' }], A: [{ U: 'sq m', C: 1, D: 100, F: 'D' }] };   // i18n-ignore
    default: return { R, X: [{ U: 'mm', C: perPt, D: 1, F: 'D' }], D: [{ U: 'mm', C: 1, D: 1, F: 'D' }], A: [{ U: 'sq mm', C: 1, D: 1, F: 'D' }] };   // i18n-ignore
  }
}

/** The private JSON kept with each annotation: everything needed to reopen it exactly. */
export function privateData(m, rect) {
  return JSON.stringify({
    v: 1, id: m.id, type: m.type, pts: m.pts, rect: m.rect, rot: m.rot, style: m.style, text: m.text, label: m.label,
    subject: m.subject, comment: m.comment, author: m.author, created: m.created, modified: m.modified, status: m.status,
    punch: m.punch, layer: m.layer || undefined, img: m.type === 'image' ? m.img : undefined, link: m.link || undefined, legend: m.legend || undefined, fields: Object.keys(m.fields || {}).length ? m.fields : undefined, holes: m.holes?.length ? m.holes : undefined, xd: m.xd || undefined, ar: rect.map((v) => Math.round(v * 1000) / 1000),
  });
}

/**
 * Write a marked-up copy.
 *   pages: [{ index, markups: [...], cal: calibration|null, badge }]
 *   removeRefs: Set of pdf.js annotation ids ("12R") read as editable markups — dropped and rewritten
 *   layers: [{ name, hidden, locked }] — markup layers (0.4 K3) become optional content groups (OCGs) that other viewers
 *     list and switch: each annotation names its layer's group (/OC), hidden layers start off; the list is also kept in
 *     Info /MarkupCraftLayers. Groups the drawing has of its own are kept; ours (marked /MarkupCraft true) are replaced.
 *   linkPage: (link) → page index in this file | null — a markup with a sheet link (0.4 K9) also gets a PDF Link annotation
 *     over it that jumps to that page in any viewer (ours, marked /MarkupCraftLink, are replaced on each save)
 *   bookmarks: null | [{ title, page, children }] — replace the PDF's outline (0.4 K24); null leaves it as it is
 *   flatten: null | 'all' | Set of markup ids — those are drawn into the page itself (their appearance as a form XObject
 *     painted by the page's content) instead of becoming annotations: no longer editable, no thread, but every viewer and
 *     printer shows them. Read-only annotations from the file stay as they are.
 * Returns { bytes, report: { written, flattened, missing, pages, replies } }.
 */
export async function writeMarkedUp(lib, bytes, { pages = [], removeRefs = new Set(), labels = null, producerNote = 'MarkupCraft', flatten = null, layers = [], linkPage = null, columns = [], bookmarks = null, records = null } = {}) {
  const { PDFDocument, PDFName, PDFString, PDFHexString, PDFDict, PDFArray, PDFRef } = lib;
  let doc;
  try {
    doc = await PDFDocument.load(bytes, { updateMetadata: false });
  } catch (e) {
    if (/encrypt/i.test(String(e?.message || e))) throw new Error(t('save.err.encrypted'));
    throw e;
  }
  const ctx = doc.context;
  const N = (s) => PDFName.of(s);
  const txt = (s) => PDFHexString.fromText(String(s ?? ''));
  const date = (iso) => { const d = new Date(iso); return PDFString.fromDate(Number.isNaN(+d) ? new Date() : d); };
  const helv = ctx.register(ctx.obj({ Type: 'Font', Subtype: 'Type1', BaseFont: 'Helvetica', Encoding: 'WinAnsiEncoding' }));
  const helvB = ctx.register(ctx.obj({ Type: 'Font', Subtype: 'Type1', BaseFont: 'Helvetica-Bold', Encoding: 'WinAnsiEncoding' }));
  const measureObj = (spec) => ctx.obj({
    Type: 'Measure', Subtype: 'RL', R: PDFString.of(spec.R.replace(/[()\\]/g, '')),
    X: spec.X.map((f) => ctx.obj({ Type: 'NumberFormat', U: PDFString.of(f.U), C: f.C, D: f.D, F: f.F })),
    D: spec.D.map((f) => ctx.obj({ Type: 'NumberFormat', U: PDFString.of(f.U.replace(/[()\\]/g, '')), C: f.C, D: f.D, F: f.F })),
    A: spec.A.map((f) => ctx.obj({ Type: 'NumberFormat', U: PDFString.of(f.U), C: f.C, D: f.D, F: f.F })),
  });
  const report = { written: 0, flattened: 0, missing: 0, pages: 0, replies: 0, photos: 0 };
  const flat = (m) => flatten === 'all' || (flatten instanceof Set && flatten.has(m.id));
  // replies carry an empty appearance, so no viewer paints a note icon for them on the sheet
  const emptyAp = ctx.register(ctx.flateStream('', { Type: 'XObject', Subtype: 'Form', FormType: 1, BBox: [0, 0, 1, 1] }));
  const refOf = (key) => {
    const mm = /^(\d+)R(\d*)$/.exec(String(key || ''));
    if (!mm) return null;
    const ref = PDFRef.of(+mm[1], +(mm[2] || 0));
    return ctx.lookupMaybe(ref, PDFDict) ? ref : null;
  };
  const pdfPages = doc.getPages();

  // markup layers → optional content groups (ours replace the ones an earlier save wrote)
  const layerList = [];
  const seenLayer = new Set();
  for (const l of [...(layers || []), ...pages.flatMap((p) => p.markups.map((m) => ({ name: m.layer })))]) {
    const n = String(l?.name || '').trim();
    if (n && !seenLayer.has(n)) { seenLayer.add(n); layerList.push({ name: n, hidden: !!l.hidden, locked: !!l.locked }); }
  }
  const ocgOf = new Map();
  {
    const ocp = doc.catalog.lookupMaybe(N('OCProperties'), PDFDict);
    const isOurs = (r) => { const d = r instanceof PDFRef ? ctx.lookupMaybe(r, PDFDict) : null; return !!d && d.get(N(PRIVATE_KEY)) !== undefined; };
    const keepArr = (arr) => { const out = []; if (arr instanceof PDFArray) for (let i = 0; i < arr.size(); i++) { const it = arr.get(i); if (!isOurs(it)) out.push(it); } return out; };
    const D0 = ocp ? ocp.lookupMaybe(N('D'), PDFDict) : null;
    const ocgs = ocp ? keepArr(ocp.lookupMaybe(N('OCGs'), PDFArray)) : [];
    const order = D0 && D0.lookupMaybe(N('Order'), PDFArray) ? keepArr(D0.lookupMaybe(N('Order'), PDFArray)) : ocgs.slice();   // no Order = every group listed
    const off = D0 ? keepArr(D0.lookupMaybe(N('OFF'), PDFArray)) : [];
    for (const l of layerList) {
      const ref = ctx.register(ctx.obj({ Type: 'OCG', Name: PDFHexString.fromText(l.name), [PRIVATE_KEY]: true }));
      ocgOf.set(l.name, ref);
      ocgs.push(ref); order.push(ref);
      if (l.hidden) off.push(ref);
    }
    if (ocgs.length) {
      const D = D0 || ctx.obj({});
      if (!D0) D.set(N('Name'), PDFHexString.fromText('MarkupCraft'));   // i18n-ignore (a configuration name)
      D.set(N('Order'), ctx.obj(order));
      if (off.length) D.set(N('OFF'), ctx.obj(off)); else D.delete(N('OFF'));
      doc.catalog.set(N('OCProperties'), ctx.obj({ OCGs: ctx.obj(ocgs), D }));
    } else if (ocp) doc.catalog.delete(N('OCProperties'));
  }

  for (const pg of pages) {
    const page = pdfPages[pg.index];
    if (!page) continue;
    report.pages++;
    // keep the annotations we did not take over
    const keep = [];
    const old = page.node.lookupMaybe(N('Annots'), PDFArray);
    if (old) {
      for (let i = 0; i < old.size(); i++) {
        const item = old.get(i);
        const key = item instanceof PDFRef ? refKey(item.objectNumber, item.generationNumber) : null;
        if (key && removeRefs.has(key)) continue;
        const dict = item instanceof PDFRef ? ctx.lookupMaybe(item, PDFDict) : item instanceof PDFDict ? item : null;
        if (dict && (dict.get(N(PRIVATE_LINK_KEY)) !== undefined || (dict.get(N('Subtype')) === N('FileAttachment') && dict.get(N(PRIVATE_PHOTO_KEY)) !== undefined))) continue;   // our sheet links and photo attachments: written again below
        if (dict) {
          const irt = dict.get(N('IRT'));
          if (irt instanceof PDFRef && removeRefs.has(refKey(irt.objectNumber, irt.generationNumber))) continue;
          const parent = dict.get(N('Parent'));
          const sub = dict.get(N('Subtype'));
          if (sub === N('Popup') && parent instanceof PDFRef && removeRefs.has(refKey(parent.objectNumber, parent.generationNumber))) continue;
        }
        keep.push(item);
      }
    }

    const env = { cal: pg.cal || null, badge: pg.badge || 0 };
    /** A markup's thread as reply annotations (/IRT → the markup); status entries as review states. */
    const writeThread = (m, parentRef, rect) => {
      if (!parentRef) return;
      let replies = m.replies || [];
      if (m.status && m.status !== 'Open' && !replies.some((r) => r.kind === 'status')) {
        replies = [...replies, { id: m.id + '-state', kind: 'status', status: m.status, author: m.author, date: m.modified, text: statusText(m.status, m.author) }];
      }
      const r0 = rect || [0, 0, 16, 16];
      const at = [r0[0], r0[3] - 16, r0[0] + 16, r0[3]];
      for (const r of replies) {
        const d = {
          Type: 'Annot', Subtype: 'Text', Rect: at, F: 4, P: page.ref, IRT: parentRef, RT: 'R', Name: 'Comment', Open: false,
          T: txt(r.author), M: date(r.date), CreationDate: date(r.date), Contents: txt(r.text),
          NM: PDFString.of(String(r.id).replace(/[^A-Za-z0-9._-]/g, '')), AP: { N: emptyAp },
        };
        if (r.kind === 'status') { d.StateModel = PDFString.of('Review'); d.State = PDFString.of(r.status === 'Open' ? 'None' : r.status); }
        const info = r.photo ? imageInfo(r.photo) : null;
        if (info) {
          d[PRIVATE_PHOTO_KEY] = PDFString.of(r.photo);
          // the photo as a file attachment too, so other viewers can open it (a paperclip by the markup)
          const ext = info.mime === 'image/png' ? 'png' : 'jpg';   // i18n-ignore (file extensions)
          const ef = ctx.register(ctx.flateStream(info.bytes, { Type: 'EmbeddedFile', Subtype: N(info.mime), Params: { Size: info.bytes.length } }));
          const fname = PDFHexString.fromText(String(r.text || 'photo').replace(/[\\/:*?"<>|\u0000-\u001f]+/g, ' ').trim().slice(0, 60) + '-' + String(r.id).slice(-6) + '.' + ext);
          const k = report.photos++;
          keep.push(ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'FileAttachment', Rect: [at[0] + 18 + k * 2, at[1], at[2] + 18 + k * 2, at[3]], F: 4, P: page.ref,
            Name: 'Paperclip', T: txt(r.author), Contents: txt(r.text), M: date(r.date), [PRIVATE_PHOTO_KEY]: true,
            FS: { Type: 'Filespec', F: fname, UF: fname, EF: { F: ef } } })));
        }
        keep.push(ctx.register(ctx.obj(d)));
        report.replies++;
      }
    };
    for (const m of pg.markups) {
      if (m.type === 'foreign' || m.locked) { writeThread(m, refOf(m.src?.ref), m.rect); continue; }
      const legendRows = m.type === 'legend' && pg.legendOf ? pg.legendOf(m) : null;
      const list = shapes(m, legendRows ? { ...env, legend: legendRows } : env);
      const b = boundsOfList(list, m);
      if (!b) continue;
      const pad = 1;
      const rect = [b[0] - pad, b[1] - pad, b[2] + pad, b[3] + pad];
      // readers ignore a border wider than half the box: keep the box at least that big
      const minD = 2 * (m.style.width || 0) + 2;
      for (const [lo, hi] of [[0, 2], [1, 3]]) {
        const grow = minD - (rect[hi] - rect[lo]);
        if (grow > 0) { rect[lo] -= grow / 2; rect[hi] += grow / 2; }
      }
      const ap = appearanceContent(list.filter((i) => i.k !== 'image'));
      let imgRef = null;
      if (m.type === 'image') {
        // the picture as an image XObject, painted upright in the page's reading frame (the frame, if any, over it)
        const info = imageInfo(m.img);
        if (!info) continue;
        const im = info.mime === 'image/png' ? await doc.embedPng(info.bytes) : await doc.embedJpg(info.bytes);
        imgRef = im.ref;
        const f = imgFrame(m.rot || 0, m.rect);
        const cm = [f.u[0] * f.W, f.u[1] * f.W, -f.v[0] * f.H, -f.v[1] * f.H, f.o[0] + f.v[0] * f.H, f.o[1] + f.v[1] * f.H].map((v) => +v.toFixed(4));
        ap.content = 'q ' + cm.join(' ') + ' cm /MCImg Do Q\n' + ap.content;   // i18n-ignore (PDF operators)
      }
      report.missing += ap.missing;
      const res = { Font: { F1: helv, F2: helvB } };
      if (imgRef) res.XObject = { MCImg: imgRef };
      if (Object.keys(ap.gstates).length) {
        res.ExtGState = {};
        for (const [name, g] of Object.entries(ap.gstates)) {
          const gd = { Type: 'ExtGState', CA: g.CA, ca: g.ca };
          if (g.BM) gd.BM = g.BM;
          res.ExtGState[name] = gd;
        }
      }
      const apStream = ctx.flateStream(ap.content, { Type: 'XObject', Subtype: 'Form', FormType: 1, BBox: rect, Resources: res });
      const apRef = ctx.register(apStream);

      const s = m.style;
      const color = rgb(s.color);
      const d = {
        Type: 'Annot', Rect: rect, F: 4, P: page.ref,
        NM: PDFString.of(m.id.replace(/[^A-Za-z0-9._-]/g, '')),
        T: txt(m.author), Subj: txt(m.subject || TYPES[m.type]?.subject || ''),
        M: date(m.modified), CreationDate: date(m.created),
        C: color, CA: Math.max(0, Math.min(1, s.opacity ?? 1)),
        BS: { Type: 'Border', W: Math.max(0, s.width || 0), S: 'S' },
        AP: { N: apRef },
      };
      d[PRIVATE_KEY] = txt(privateData(m, rect));
      const areaV = m.type === 'area' ? measureArea(m.pts, pg.cal, m.holes) : null;
      const contents = m.type === 'text' || m.type === 'callout' ? m.text
        : m.type === 'measure' || m.type === 'angle' ? [list.find((i) => i.k === 'text')?.lines[0], m.comment].filter(Boolean).join('\n')
        : m.type === 'area' ? [areaV.area ? t('pdf.contents.area', { area: areaV.area, perimeter: areaV.perimeter }) : '', m.comment].filter(Boolean).join('\n')
        : m.type === 'count' ? [t('count.tag', { group: m.label || t('count.default'), n: m.pts.length }), m.comment].filter(Boolean).join('\n')
        : m.type === 'stamp' ? [m.label, m.comment].filter(Boolean).join('\n') : m.comment;
      d.Contents = txt(contents || '');
      const ic = s.fill && s.fill !== 'paper' ? rgb(s.fill) : null;
      const half = (s.width || 0) / 2;
      switch (m.type) {
        case 'rect': case 'cloudrect': case 'ellipse': {
          d.Subtype = m.type === 'ellipse' ? 'Circle' : 'Square';
          const r = m.rect;
          d.RD = [r[0] - half - rect[0], rect[3] - (r[3] + half), rect[2] - (r[2] + half), r[1] - half - rect[1]].map((v) => Math.max(0, v));
          if (ic) d.IC = ic;
          if (m.type === 'cloudrect') d.BE = { S: 'C', I: 1 };
          break;
        }
        case 'polygon': case 'cloud':
          d.Subtype = 'Polygon';
          d.Vertices = m.pts.flat();
          if (ic) d.IC = ic;
          if (m.type === 'cloud') d.BE = { S: 'C', I: 1 };
          break;
        case 'area': {
          d.Subtype = 'Polygon';
          d.Vertices = m.pts.flat();
          if (ic) d.IC = ic;
          d.IT = 'PolygonDimension';
          const spec = measureSpec(pg.cal);
          if (spec) d.Measure = measureObj(spec);
          break;
        }
        case 'count': {
          // one annotation per group: each mark a small ring in the ink list (the appearance draws the numbers)
          d.Subtype = 'Ink';
          d.IT = 'CountMarks';
          const r = Math.max(3, s.fontSize * 0.8);
          d.InkList = m.pts.map(([x, y]) => { const ring = []; for (let k = 0; k <= 12; k++) { const a = (k / 12) * Math.PI * 2; ring.push(x + Math.cos(a) * r, y + Math.sin(a) * r); } return ring; });
          break;
        }
        case 'polyline':
          d.Subtype = 'PolyLine';
          d.Vertices = m.pts.flat();
          break;
        case 'arc': {
          // no PDF arc annotation: a PolyLine along the arc (our private data keeps the three points)
          d.Subtype = 'PolyLine';
          const arc = m.pts.length === 3 ? arcThrough(m.pts[0], m.pts[1], m.pts[2]) : null;
          const n = arc ? Math.max(8, Math.ceil(Math.abs(arc.sweep) / (Math.PI / 32))) : 0;
          d.Vertices = arc ? Array.from({ length: n + 1 }, (_, k) => { const a = arc.a0 + (arc.sweep * k) / n; return [arc.c[0] + arc.r * Math.cos(a), arc.c[1] + arc.r * Math.sin(a)]; }).flat() : [m.pts[0], m.pts.at(-1)].flat();
          break;
        }
        case 'angle':
          d.Subtype = 'PolyLine';
          d.Vertices = m.pts.flat();
          break;
        case 'line': case 'arrow': case 'measure':
          d.Subtype = 'Line';
          d.L = [...m.pts[0], ...m.pts[1]];
          d.LE = m.type === 'measure' ? [N('Butt'), N('Butt')] : [N('None'), N(m.type === 'arrow' ? 'ClosedArrow' : 'None')];
          if (m.type === 'arrow') d.IC = color;
          if (m.type === 'measure') {
            d.IT = 'LineDimension';
            d.Cap = true;
            const spec = measureSpec(pg.cal);
            if (spec) d.Measure = measureObj(spec);
          }
          break;
        case 'pen': case 'highlight':
          d.Subtype = 'Ink';
          d.InkList = [m.pts.flat()];
          if (m.type === 'highlight') d.IT = 'InkHighlight';
          break;
        case 'text': case 'callout': {
          d.Subtype = 'FreeText';
          d.DA = PDFString.of('/Helv ' + n(s.fontSize) + ' Tf ' + color.map(n).join(' ') + ' rg');
          d.DS = PDFString.of('font: Helvetica ' + n(s.fontSize) + 'pt; color: ' + s.color);   // i18n-ignore (CSS)
          d.Q = 0;
          const r = m.rect;
          d.RD = [r[0] - rect[0], rect[3] - r[3], rect[2] - r[2], r[1] - rect[1]].map((v) => Math.max(0, v));
          if (m.type === 'callout' && m.pts?.length) {
            const lead = list.find((i) => i.k === 'path' && i.stroke && !i.fill);
            const cl = lead ? lead.d.filter((c) => c[0] === 'M' || c[0] === 'L').map((c) => [c[1], c[2]]) : [];
            d.IT = 'FreeTextCallout';
            d.CL = [m.pts[0], ...(cl.length === 3 ? [cl[1], cl[2]] : cl.slice(1))].flat();
            d.LE = N('ClosedArrow');
          }
          if (ic) d.IC = ic;
          break;
        }
        case 'note':
          d.Subtype = 'Text';
          d.Name = 'Comment';
          d.Open = false;
          d.Contents = txt([m.text, m.comment].filter(Boolean).join('\n'));
          break;
        case 'legend':
          d.Subtype = 'Square';
          d.Contents = txt([m.label || t('legend.title'), ...(legendRows || []).map((r) => r.label + ': ' + r.n)].join('\n'));
          break;
        case 'space':
          d.Subtype = 'Polygon';
          d.Vertices = m.pts.flat();
          d.BS = { Type: 'Border', W: Math.max(0, s.width || 0), S: 'D', D: [6, 4] };
          d.Contents = txt([m.label, m.comment].filter(Boolean).join('\n'));
          break;
        case 'image':
          d.Subtype = 'Stamp';
          d.Name = camel(m.label || 'Image');   // i18n-ignore (a PDF name)
          d.Contents = txt([m.label, m.comment].filter(Boolean).join('\n'));
          break;
        case 'stamp':
          d.Subtype = 'Stamp';
          d.Name = STANDARD_STAMP_NAMES[String(m.label).toLowerCase()] || camel(m.label);
          break;
        default:
          continue;
      }
      if (d.Subtype !== 'Line' && d.Subtype !== 'FreeText' && d.LE) delete d.LE;
      if (flat(m)) {
        // drawn into the page: its appearance (BBox in user space, identity matrix) painted where the annotation would be
        const name = page.node.newXObject('MCFlat', apRef);
        page.pushOperators(lib.pushGraphicsState(), lib.drawObject(name), lib.popGraphicsState());
        report.flattened++;
        continue;
      }
      if (m.layer && ocgOf.has(m.layer)) d.OC = ocgOf.get(m.layer);
      const annotRef = ctx.register(ctx.obj(d));
      const lp = m.link && linkPage ? linkPage(m.link) : null;
      if (Number.isInteger(lp) && pdfPages[lp]) {
        keep.push(ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Link', Rect: rect, Border: [0, 0, 0], F: 4, P: page.ref,
          A: { S: 'GoTo', D: [pdfPages[lp].ref, N('Fit')] }, [PRIVATE_LINK_KEY]: true })));
      }
      keep.push(annotRef);
      report.written++;

      writeThread(m, annotRef, rect);
    }
    page.node.set(N('Annots'), ctx.obj(keep));

    // the sheet's calibration: a measure viewport other tools read, plus our exact copy
    if (pg.cal) {
      const spec = measureSpec(pg.cal);
      const box = page.getMediaBox();
      page.node.set(N('VP'), ctx.obj([ctx.obj({ Type: 'Viewport', BBox: [box.x, box.y, box.x + box.width, box.y + box.height], Name: PDFString.of('MarkupCraft'), Measure: measureObj(spec) })]));
      page.node.set(N(PRIVATE_CAL_KEY), txt(JSON.stringify(pg.cal)));
    } else if (pg.calCleared) {
      page.node.delete(N(PRIVATE_CAL_KEY));
    }
    // a sheet number and title typed by hand
    if (pg.sheetName) page.node.set(N(PRIVATE_SHEET_KEY), txt(JSON.stringify(pg.sheetName)));
    else page.node.delete(N(PRIVATE_SHEET_KEY));
  }

  // bookmarks (0.4 K24): null = the file's own outline untouched; a list = the outline replaced
  if (Array.isArray(bookmarks)) writeOutline(lib, doc, bookmarks);

  // page labels = sheet numbers (one range per page, the label as its prefix), so other viewers show them too
  if (Array.isArray(labels) && labels.length === pdfPages.length) {
    const nums = [];
    labels.forEach((l, i) => { nums.push(i, ctx.obj({ P: txt(String(l ?? '') || String(i + 1)) })); });
    doc.catalog.set(N('PageLabels'), ctx.obj({ Nums: nums }));
  }

  // mark the copy so reopening it knows to read the private data
  const info = doc.getInfoDict();
  info.set(N(PRIVATE_KEY), PDFString.of('1'));
  if (columns?.length) info.set(N(PRIVATE_COLUMNS_KEY), PDFHexString.fromText(JSON.stringify(columns))); else info.delete(N(PRIVATE_COLUMNS_KEY));
  if (layerList.length) info.set(N(PRIVATE_LAYERS_KEY), PDFHexString.fromText(JSON.stringify(layerList))); else info.delete(N(PRIVATE_LAYERS_KEY));
  if (records) info.set(N(PRIVATE_RECORDS_KEY), PDFHexString.fromText(records)); else info.delete(N(PRIVATE_RECORDS_KEY));
  if (producerNote) info.set(N('ModDate'), PDFString.fromDate(new Date()));
  const out = await doc.save({ useObjectStreams: false, addDefaultPage: false, updateFieldAppearances: false });
  return { bytes: out, report };
}

function boundsOfList(list, m) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = (x, y, h = 0) => { if (x - h < x0) x0 = x - h; if (y - h < y0) y0 = y - h; if (x + h > x1) x1 = x + h; if (y + h > y1) y1 = y + h; };
  for (const it of list) {
    if (it.k === 'text' || it.k === 'image') { add(it.box[0], it.box[1]); add(it.box[2], it.box[3]); continue; }
    const h = it.stroke ? it.w / 2 + (it.join === 'miter' ? it.w : 0) : 0;
    let px = 0, py = 0;
    for (const c of it.d) {
      if (c[0] === 'M' || c[0] === 'L') { add(c[1], c[2], h); px = c[1]; py = c[2]; }
      else if (c[0] === 'C') { add(c[1], c[2], h); add(c[3], c[4], h); add(c[5], c[6], h); px = c[5]; py = c[6]; }
    }
    void px; void py;
  }
  if (!Number.isFinite(x0)) return m.rect || null;
  return [x0, y0, x1, y1];
}
