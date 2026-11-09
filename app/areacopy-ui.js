/* SPDX-License-Identifier: Apache-2.0 */
/**
 * areacopy-ui.js — the Copy area tool (0.8 D8.15): pick part of the sheet with a rectangle, an ellipse or a freeform
 * shape and copy it as a picture, to paste into another sheet, another of our apps or any program. areaclip.js has the
 * clip format and the pixel work; this file is the tool on the sheet and its bar.
 *
 *   drag                 → the area (Rectangle: a box; Ellipse: the ellipse in the box; Freeform: the path, closed)
 *   the bar              → shape, Include markups, Resolution (screen, 150, 300 dpi), Copy, Copy as overlay (colour and
 *                          strength), Save as PNG
 *   Ctrl+C / Enter       → Copy;  Esc → no area
 *
 * Copy renders the area at the resolution (lowered until the PNG fits AREA_MAX_BYTES), makes outside an ellipse or a
 * freeform see-through, and puts the PNG on the system clipboard and the clip (with its size on paper and, when the sheet
 * has a scale, in the real world) in localStorage AREA_KEY for our apps. Copy as overlay also makes the paper see-through
 * and gives the lines the chosen colour; the paste starts at the chosen strength.
 *
 *   installAreaCopy({ root, view, curSheet, markupLists, calibration, status, t, tab, onCopied })
 *     → { enter, leave, down, move, up, key, paintOver, copy, savePng, get area, get dragging, render (tests) }
 */

import { el, download } from './ui-util.js';
import { makeAreaClip, AREA_KEY, AREA_MAX_BYTES, ellipsePoints, shapeBox, overlayPixels, pixelsFor, TINTS } from './areaclip.js';

const LS = 'markupcraft.areacopy';
const DEFAULTS = { shape: 'rect', markups: true, dpi: 150, tint: '#d0312d', opacity: 0.5 };
const mul = (a, b) => [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]];
const ap = (m, [x, y]) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];

export function installAreaCopy({ root, view, curSheet, markupLists, calibration, status, t, tab = '', onCopied = null, onToBoard = null }) {
  let opts = { ...DEFAULTS };
  try { opts = { ...DEFAULTS, ...JSON.parse(localStorage.getItem(LS) || '{}') }; } catch { /* defaults */ }
  if (!['rect', 'ellipse', 'free'].includes(opts.shape)) opts.shape = 'rect';
  if (opts.dpi !== 'screen' && ![72, 150, 300].includes(+opts.dpi)) opts.dpi = 150;
  const save = () => { try { localStorage.setItem(LS, JSON.stringify(opts)); } catch { /* this session only */ } };

  let area = null;      // { key, shape, pts (user space, closed) }
  let drag = null;      // { a (screen), b, pts (screen, freeform) }
  let busy = false;

  // ---- the bar (over the sheet, while the tool is on) ----
  const shapeBtn = (s, icon) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { areaShape: s }, 'aria-pressed': String(opts.shape === s), title: t('area.shape.' + s), onclick: () => setShape(s) },
    el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }), el('span', {}, t('area.shape.' + s)));   // i18n-ignore (icon class)
  const markupsBox = el('input', { type: 'checkbox', id: 'mc-area-markups', checked: !!opts.markups, onchange: () => { opts.markups = markupsBox.checked; save(); } });
  const dpiSel = el('select', { className: 'mc-select mc-area-sel', id: 'mc-area-dpi', onchange: () => { opts.dpi = dpiSel.value === 'screen' ? 'screen' : +dpiSel.value; save(); } },
    ...['screen', 72, 150, 300].map((d) => el('option', { value: String(d), selected: String(opts.dpi) === String(d) }, d === 'screen' ? t('area.dpi.screen') : t('area.dpi.n', { n: d }))));
  const tintSel = el('select', { className: 'mc-select mc-area-sel', id: 'mc-area-tint', onchange: () => { opts.tint = tintSel.value; save(); } },
    ...TINTS.map((c) => el('option', { value: c, selected: opts.tint === c }, t('area.tint.' + (c ? c.slice(1) : 'none')))));
  const opRange = el('input', { type: 'range', id: 'mc-area-opacity', min: '10', max: '100', step: '5', value: String(Math.round(opts.opacity * 100)),
    oninput: () => { opts.opacity = +opRange.value / 100; opOut.textContent = opRange.value + '%'; save(); } });
  const opOut = el('output', { for: 'mc-area-opacity' }, Math.round(opts.opacity * 100) + '%');
  const copyBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { areaAct: 'copy' }, disabled: true, onclick: () => copy(false) }, el('i', { className: 'bi bi-copy', 'aria-hidden': 'true' }), ' ', t('area.copy'));
  const overBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { areaAct: 'overlay' }, disabled: true, onclick: () => copy(true) }, el('i', { className: 'bi bi-layers', 'aria-hidden': 'true' }), ' ', t('area.overlay'));
  const pngBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { areaAct: 'png' }, disabled: true, onclick: () => savePng() }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('area.png'));
  const boardBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { areaAct: 'board' }, disabled: true, onclick: () => toBoard() }, el('i', { className: 'bi bi-camera', 'aria-hidden': 'true' }), ' ', t('pnotes.snapshot.bar'));
  const bar = el('div', { className: 'mc-areabar', role: 'toolbar', 'aria-label': t('area.bar'), hidden: true },
    el('div', { className: 'mc-areabar-row', role: 'group', 'aria-label': t('area.shape') }, shapeBtn('rect', 'square'), shapeBtn('ellipse', 'circle'), shapeBtn('free', 'bezier')),
    el('div', { className: 'mc-areabar-row' },
      el('label', { className: 'mc-radio', for: 'mc-area-markups' }, markupsBox, ' ', t('area.markups')),
      el('label', { className: 'mc-k', for: 'mc-area-dpi' }, t('area.dpi')), dpiSel),
    el('div', { className: 'mc-areabar-row' }, copyBtn, pngBtn, ...(onToBoard ? [boardBtn] : [])),
    el('div', { className: 'mc-areabar-row', role: 'group', 'aria-label': t('area.overlay.group') },
      overBtn, el('label', { className: 'mc-k', for: 'mc-area-tint' }, t('area.tint')), tintSel,
      el('label', { className: 'mc-k', for: 'mc-area-opacity' }, t('area.opacity')), opRange, opOut));
  (root.querySelector('[data-stage]') || root).append(bar);

  function setShape(s) {
    opts.shape = s; save();
    for (const b of bar.querySelectorAll('[data-area-shape]')) b.setAttribute('aria-pressed', String(b.dataset.areaShape === s));
    status(t('area.hint.' + s));
  }
  function sync() { for (const b of [copyBtn, overBtn, pngBtn, boardBtn]) b.disabled = !area || busy; }

  function enter() { bar.hidden = false; sync(); status(t('area.hint.' + opts.shape)); view.invalidate(); }
  function leave() { bar.hidden = true; drag = null; area = null; view.invalidate(); }

  // ---- picking the area (screen points while dragging; the area is kept in user space) ----
  function down(p, sx, sy) {
    if (busy) return;
    drag = { a: [sx, sy], b: [sx, sy], pts: [[sx, sy]] };
    view.invalidate();
  }
  function move(sx, sy) {
    if (!drag) return false;
    drag.b = [sx, sy];
    if (opts.shape === 'free') { const l = drag.pts[drag.pts.length - 1]; if (Math.hypot(sx - l[0], sy - l[1]) >= 3) drag.pts.push([sx, sy]); }
    view.invalidate();
    return true;
  }
  function up(sx, sy) {
    if (!drag) return;
    move(sx, sy);
    const d = drag;
    drag = null;
    const s = curSheet();
    let pts;
    if (opts.shape === 'free') pts = d.pts.length >= 3 ? d.pts : null;
    else {
      const box = [Math.min(d.a[0], d.b[0]), Math.min(d.a[1], d.b[1]), Math.max(d.a[0], d.b[0]), Math.max(d.a[1], d.b[1])];
      pts = box[2] - box[0] >= 4 && box[3] - box[1] >= 4 ? (opts.shape === 'ellipse' ? ellipsePoints(box) : [[box[0], box[1]], [box[2], box[1]], [box[2], box[3]], [box[0], box[3]]]) : null;
    }
    const b = pts && shapeBox(pts);
    if (!s || !pts || b[2] - b[0] < 4 || b[3] - b[1] < 4) { area = null; sync(); status(t('area.too_small')); view.invalidate(); return; }
    area = { key: s.page.key, shape: opts.shape, pts: pts.map(([x, y]) => view.toUser(x, y)) };
    sync();
    status(t('area.ready'));
    view.invalidate();
  }

  function key(e) {
    const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
    if (mod && k === 'c' && area) { e.preventDefault(); copy(false); return true; }
    if (e.key === 'Enter' && area) { e.preventDefault(); copy(false); return true; }
    if (e.key === 'Escape' && (area || drag)) { area = null; drag = null; sync(); view.invalidate(); return true; }
    return false;
  }

  function paintOver(ctx) {
    const pts = drag ? (opts.shape === 'free' ? drag.pts : boxPts(drag.a, drag.b)) : area && area.key === curSheet()?.page.key ? area.pts.map((q) => view.toScreen(q)) : null;
    if (!pts || pts.length < 2) return;
    ctx.save();
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); for (const [x, y] of pts.slice(1)) ctx.lineTo(x, y); ctx.closePath();
    ctx.fillStyle = view.colors.action; ctx.globalAlpha = 0.08; ctx.fill();
    ctx.globalAlpha = 1; ctx.strokeStyle = view.colors.action; ctx.lineWidth = 1.25; ctx.setLineDash([5, 4]); ctx.stroke();
    ctx.restore();
  }
  function boxPts(a, b) {
    const box = [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])];
    return opts.shape === 'ellipse' ? ellipsePoints(box, 64) : [[box[0], box[1]], [box[2], box[1]], [box[2], box[3]], [box[0], box[3]]];
  }

  // ---- rendering ----
  /** The screen's own resolution at this zoom (CSS pixels × the device's), as dots per inch of the paper. */
  function screenDpi() { const S = view.S || [1, 0, 0, 1, 0, 0]; return Math.max(18, Math.sqrt(Math.abs(S[0] * S[3] - S[1] * S[2])) * 72 * (window.devicePixelRatio || 1)); }

  /**
   * The area as a canvas: the page drawn at `dpi` (pdf.js, white paper), the markups over it, then cut to the shape
   * (outside see-through). → { canvas, ptPerPx, dpi }
   */
  async function render(a, dpi, { markups = true } = {}) {
    const s = curSheet();
    if (!s || !a) return null;
    const proxy = await s.file.doc.getPage(s.page.index + 1);
    const vp1 = proxy.getViewport({ scale: 1 });
    const dev = a.pts.map((q) => ap(vp1.transform, q));   // page pixels at 72 dpi, in the page's own turn
    const [x0, y0, x1, y1] = shapeBox(dev);
    const [w, h, d] = pixelsFor(x1 - x0, y1 - y0, dpi);
    const sc = w / (x1 - x0);
    const page = el('canvas', { width: w, height: h });
    const ctx = page.getContext('2d');
    await proxy.render({ canvas: page, canvasContext: ctx, viewport: proxy.getViewport({ scale: sc }), transform: [1, 0, 0, 1, -x0 * sc, -y0 * sc], annotationMode: view.annotModeOf ? view.annotModeOf(s.page) : 0, background: '#ffffff' }).promise;
    if (markups) {
      const S = mul([sc, 0, 0, sc, -x0 * sc, -y0 * sc], vp1.transform);
      for (const list of markupLists(s)) view.paint(ctx, list, { S, dpr: 1, z: sc, light: true });
    }
    if (a.shape === 'rect') return { canvas: page, ptPerPx: 1 / sc, dpi: d };
    const out = el('canvas', { width: w, height: h });
    const g = out.getContext('2d');
    g.beginPath();
    dev.forEach(([x, y], i) => { const X = (x - x0) * sc, Y = (y - y0) * sc; if (i) g.lineTo(X, Y); else g.moveTo(X, Y); });
    g.closePath(); g.clip();
    g.drawImage(page, 0, 0);
    return { canvas: out, ptPerPx: 1 / sc, dpi: d };
  }

  /** The area as a PNG data URL that fits AREA_MAX_BYTES: lower the resolution until it does. → { src, ptPerPx, dpi, lowered } */
  async function picture(overlay) {
    let dpi = opts.dpi === 'screen' ? screenDpi() : +opts.dpi, lowered = false;
    for (let tries = 0; tries < 6; tries++) {
      const r = await render(area, dpi, { markups: opts.markups });
      if (!r) return null;
      if (overlay) {
        const g = r.canvas.getContext('2d');
        const id = g.getImageData(0, 0, r.canvas.width, r.canvas.height);
        overlayPixels(id.data, { tint: opts.tint });
        g.putImageData(id, 0, 0);
      }
      const src = r.canvas.toDataURL('image/png');
      const bytes = (src.length - 22) * 0.75;
      if (bytes <= AREA_MAX_BYTES) return { src, ptPerPx: r.ptPerPx, dpi: r.dpi, lowered };
      dpi = r.dpi * Math.sqrt(AREA_MAX_BYTES / bytes) * 0.9;
      lowered = true;
    }
    return null;
  }

  async function copy(overlay = false) {
    if (!area || busy) { if (!area) status(t('area.need')); return null; }
    if (area.key !== curSheet()?.page.key) { area = null; sync(); status(t('area.need')); return null; }
    busy = true; sync();
    status(t('area.making'));
    try {
      const pic = await picture(overlay);
      if (!pic) { status(t('area.failed')); return null; }
      const s = curSheet();
      const cal = calibration(s.page.key);
      const clip = makeAreaClip({
        app: 'markupcraft', source: tab, sheet: s.page.key, label: overlay ? t('area.label.overlay') : t('area.label'),
        src: pic.src, ptPerPx: pic.ptPerPx, real: cal ? { mmPerPx: cal.mmPerPt * pic.ptPerPx, unit: cal.unit } : null,
        overlay: overlay ? { opacity: opts.opacity, tint: opts.tint } : null, shape: area.shape,
      });
      if (!clip) { status(t('area.failed')); return null; }
      let shared = false, system = false;
      try { localStorage.setItem(AREA_KEY, JSON.stringify(clip)); shared = true; } catch { /* too big or a private window: this tab still has it */ }
      try {
        const blob = await (await fetch(clip.src)).blob();
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        system = true;
      } catch { /* no permission or no clipboard API: our apps still have the clip */ }
      onCopied?.(clip);
      const n = Math.round(pic.dpi);
      status(t('area.copied' + (overlay ? '.overlay' : ''), { w: clip.px[0], h: clip.px[1], dpi: n }) + ' '
        + t(system ? 'area.copied.system' : shared ? 'area.copied.apps' : 'area.copied.tab') + (pic.lowered ? ' ' + t('area.lowered', { dpi: n }) : '')
        + (cal ? '' : ' ' + t('area.no_scale')));
      if (window.markupcraft) window.markupcraft.lastAreaClip = clip;   // tests
      return clip;
    } catch (e) {
      console.warn(e);
      status(t('area.failed'));
      return null;
    } finally { busy = false; sync(); }
  }

  /** The area as a picture beside the sheet (0.9 NOTES.1), without touching the clipboard. */
  async function toBoard() {
    if (!area || busy) { if (!area) status(t('area.need')); return null; }
    if (area.key !== curSheet()?.page.key) { area = null; sync(); status(t('area.need')); return null; }
    busy = true; sync();
    status(t('area.making'));
    try {
      const pic = await picture(false);
      const clip = pic && makeAreaClip({ app: 'markupcraft', source: tab, sheet: curSheet().page.key, label: t('area.label'), src: pic.src, ptPerPx: pic.ptPerPx, real: null, overlay: null, shape: area.shape });
      if (!clip) { status(t('area.failed')); return null; }
      return onToBoard?.(clip) || null;
    } catch (e) {
      console.warn(e);
      status(t('area.failed'));
      return null;
    } finally { busy = false; sync(); }
  }

  async function savePng() {
    if (!area || busy) { if (!area) status(t('area.need')); return false; }
    busy = true; sync();
    try {
      const pic = await picture(false);
      if (!pic) { status(t('area.failed')); return false; }
      const blob = await (await fetch(pic.src)).blob();
      const s = curSheet();
      download(blob, t('area.png.name', { sheet: (s.page.title || 'sheet').slice(0, 60) }) + '.png', 'image/png');   // i18n-ignore (file extension)
      status(t('area.png.done', { dpi: Math.round(pic.dpi) }));
      return true;
    } finally { busy = false; sync(); }
  }

  return {
    enter, leave, down, move, up, key, paintOver, copy, savePng, render, setShape,
    setArea(a) { area = a; sync(); view.invalidate(); },   // tests
    get area() { return area; }, get dragging() { return !!drag; }, get opts() { return opts; },
  };
}
