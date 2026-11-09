/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view.js — one sheet on screen: pan, zoom, and crisp pdf.js rendering at any zoom.
 *
 * Two canvases fill the stage. The BASE canvas shows the sheet and every saved markup; the OVER
 * canvas shows what moves with the mouse (selection, grips, the shape being drawn, the crosshair).
 * Coordinates: markups live in PDF user space (points, y up). `this.S` maps user space → CSS pixels:
 * S = [z,0,0,z,ox,oy] ∘ (pdf.js viewport at scale 1, which carries the page rotation).
 *
 * Rendering: a low-resolution picture of the whole sheet (≤ 2400 px) is drawn first, so panning and
 * zooming always show something at once; a crisp, stage-sized picture rendered by pdf.js at the
 * zoom's device-pixel scale is drawn over it and re-rendered when the view settles (stale render
 * tasks are canceled). At 6400 % on a big sheet only the visible part is rendered.
 *
 * Compare mode (`setCompare`) renders two sheets crisp, one moved by an alignment transform, and
 * mixes them with compare.js: only-old, only-new and unchanged ink in three colors.
 *
 * Colors follow the page theme (html[data-space]); in Model space the sheet itself is drawn in the
 * theme's colors (pdf.js page colors) unless `sheetInTheme` is off.
 *
 * Form fields (0.8) are drawn with pdf.js AnnotationMode ENABLE_STORAGE: a value typed in MarkupCraft (form-ui.js puts it in
 * the document's annotationStorage) shows on the sheet, the thumbnails and snapshots, like the file's own values.
 *
 * Scroll mode (0.8, `setStrip`): every page of one file in a column, one under the other. The ACTIVE page is the one the rest
 * of the view works on (this.page, S, toUser, the markups, the overlay) — the page under the pointer when it is pressed, else
 * the one in the middle of the stage. The others are drawn around it (low-resolution picture first, then a crisp one when the
 * view settles; only the pages near the screen keep pictures) with their saved markups (`onBaseOther`). Switching the active
 * page keeps everything where it is on screen; the app hears `onActivate(page)`.
 */

import { mul, inv, apply, I } from './geom.js';
import { placeText, frame } from './shapes.js';
import { SCREEN_FONT } from './font.js';
import { combine } from './compare.js';

export const PX_PER_PT = 96 / 72;   // "100 %" = actual size on a 96 dpi screen
const LOWRES_MAX = 2400;
const STRIP_LOW_MAX = 1400;      // the other pages' first pictures are smaller
const STRIP_GAP = 14;            // px between pages in Scroll mode
/** pdf.js AnnotationMode: 0 = off, 3 = annotation appearances + form values from the document's annotationStorage */
const ANNOT_ON = 3;

export class View {
  constructor(stage, base, over) {
    this.stage = stage; this.base = base; this.over = over;
    this.bctx = base.getContext('2d'); this.octx = over.getContext('2d');
    this.w = 1; this.h = 1; this.dpr = 1;
    this.z = 1; this.ox = 0; this.oy = 0;
    this.page = null; this.proxy = null; this.vp1 = null; this.T1 = I;
    this.low = null; this.crisp = null; this.task = null; this.crispTimer = 0;
    this.compare = null;      // { oldProxy, oldVp1, T, balance, colors }
    this.sheetInTheme = true;
    this.onBase = null;       // (ctx, view) → paint saved markups
    this.onOver = null;       // (ctx, view) → paint selection / previews
    this.onView = null;       // () → zoom/pan changed
    this.raf = 0; this.dirtyBase = true; this.dirtyOver = true;
    this.renderToken = 0;
    this.strip = null;        // Scroll mode: { items: [{ page, load, proxy, low, crisp }], at, layout }
    this.onBaseOther = null;  // (ctx, view, page, S) → paint another page's saved markups (Scroll mode)
    this.onActivate = null;   // (page) → the active page changed by scrolling or pressing on another page
    this.lockActive = null;   // () → true while the active page must not change (a drag, a shape being drawn)
    this.stripStamp = 0; this.stripTimer = 0;
    this.theme();
    new MutationObserver(() => { this.theme(); this.low = null; this.crisp = null; this.reloadLow(); this.scheduleCrisp(0); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    new ResizeObserver(() => this.resize()).observe(stage);
    this.resize();
  }

  theme() {
    const cs = getComputedStyle(document.documentElement);
    const t = (n, d) => cs.getPropertyValue(n).trim() || d;
    const sheet = t('--sheet', '#f3f6f8');
    this.colors = {
      sheet, ink: t('--ink', '#17202b'), ink2: t('--ink-2', '#34404e'), line: t('--line', '#7a8796'), grid: t('--grid', '#d5dde5'),
      action: t('--action', '#1e48c8'), layer: t('--layer-magenta', '#9a1f86'),
      red: t('--layer-red', '#b3122e'), blue: t('--layer-blue', '#1e48c8'), green: t('--layer-green', '#17703a'),
    };
    this.dark = luminance(sheet) < 0.4;
    this.colors.desk = mix(sheet, this.colors.ink, this.dark ? 0.06 : 0.09);
    this.colors.paper = this.dark && this.sheetInTheme ? mix(sheet, '#000000', 0.15) : '#ffffff';
    this.colors.paperInk = this.dark && this.sheetInTheme ? this.colors.ink : '#000000';
  }

  /** Is the sheet drawn in the theme's colors (Model space)? */
  get themed() { return this.dark && this.sheetInTheme; }

  /**
   * Model space: turn a black-on-white rendering into ink-on-dark. Lightness is inverted with the
   * hue kept (c + 255 − max − min), then white→the theme's paper, black→its ink, so colored
   * linework stays colored.
   */
  themeize(canvas) {
    if (!this.themed) return;
    const ctx = canvas.getContext('2d');
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = img.data;
    const [pr, pg, pb] = hexRgb(this.colors.paper), [ir, ig, ib] = hexRgb(this.colors.paperInk);
    const lut = [new Uint8ClampedArray(256), new Uint8ClampedArray(256), new Uint8ClampedArray(256)];
    for (let v = 0; v < 256; v++) { const t = v / 255; lut[0][v] = pr + (ir - pr) * t; lut[1][v] = pg + (ig - pg) * t; lut[2][v] = pb + (ib - pb) * t; }
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], g = d[i + 1], b = d[i + 2];
      const mx = r > g ? (r > b ? r : b) : (g > b ? g : b), mn = r < g ? (r < b ? r : b) : (g < b ? g : b);
      const sh = 255 - mx - mn;
      d[i] = lut[0][r + sh]; d[i + 1] = lut[1][g + sh]; d[i + 2] = lut[2][b + sh];
    }
    ctx.putImageData(img, 0, 0);
  }

  resize() {
    const r = this.stage.getBoundingClientRect();
    const first = this.w <= 1;
    const cx = this.w / 2, cy = this.h / 2;
    this.w = Math.max(1, r.width); this.h = Math.max(1, r.height);
    this.dpr = Math.min(3, window.devicePixelRatio || 1);
    for (const c of [this.base, this.over]) { c.width = Math.round(this.w * this.dpr); c.height = Math.round(this.h * this.dpr); }
    if (this.page && !first) { this.ox += this.w / 2 - cx; this.oy += this.h / 2 - cy; this.update(); }
    else if (this.page) this.fit('page');
    this.invalidate(true);
    this.scheduleCrisp(60);
  }

  // ---- transforms ----
  get S() { return mul([this.z, 0, 0, this.z, this.ox, this.oy], this.T1); }
  toScreen(p) { return apply(this.S, p); }
  toUser(sx, sy) { return apply(inv(this.S), [sx, sy]); }
  /** Points per CSS pixel (for tolerances). */
  get ptPerPx() { return 1 / this.z; }
  /** Zoom as a percentage of actual size. */
  get percent() { return (this.z / PX_PER_PT) * 100; }
  /** Size of the sheet as shown (rotated), in points. */
  get vpw() { return this.vp1?.width || 1; }
  get vph() { return this.vp1?.height || 1; }

  /** Show a page. proxy = pdf.js PDFPageProxy; page = our page record (rotate, annotMode, view). */
  /** pdf.js viewport with the page's own turn plus the view's (0.4 K10: rotate the view, the PDF stays as it is). */
  vpOf(proxy, scale) { return proxy.getViewport({ scale, rotation: ((proxy.rotate || 0) + (this.extraRot || 0)) % 360 }); }
  /** Turn the view by 90° steps, keeping the middle of the screen where it is. */
  setExtraRot(deg) {
    if (!this.proxy) { this.extraRot = ((deg % 360) + 360) % 360; return; }
    const mid = this.toUser(this.w / 2, this.h / 2);
    this.extraRot = ((deg % 360) + 360) % 360;
    this.vp1 = this.vpOf(this.proxy, 1);
    this.T1 = this.vp1.transform.slice();
    this.low = null; this.crisp = null;
    if (this.strip) { this.strip.layout = null; for (const it of this.strip.items) { it.low = null; it.crisp = null; it.T1 = null; } }
    this.update();
    const [sx, sy] = this.toScreen(mid);
    this.panBy(this.w / 2 - sx, this.h / 2 - sy);
    this.reloadLow().then(() => this.scheduleCrisp(0));
  }
  get seenRotate() { return (((this.page?.rotate || 0) + (this.extraRot || 0)) % 360 + 360) % 360; }

  /** keepPicture: the same sheet drawn again (its own content was edited, 0.6 DF.14): the old picture stays until the new one is ready. */
  async setPage(page, proxy, { keepView = false, extraRot = 0, keepPicture = false } = {}) {
    this.cancelRender();
    // the same page again (its content was edited) stays in the column; any other page leaves Scroll mode (the app sets it again)
    if (this.strip && this.strip.items[this.strip.at]?.page.key === page.key) { const it = this.strip.items[this.strip.at]; it.proxy = proxy; it.T1 = null; }
    else this.strip = null;
    this.page = page; this.proxy = proxy;
    this.extraRot = extraRot;
    this.vp1 = this.vpOf(proxy, 1);
    this.T1 = this.vp1.transform.slice();
    if (!keepPicture) { this.low = null; this.crisp = null; }
    this.failed = null;
    if (!keepView) this.fit('page'); else this.update();
    await this.reloadLow();
    this.scheduleCrisp(0);
  }

  clear() {
    this.cancelRender();
    this.page = null; this.proxy = null; this.low = null; this.crisp = null; this.compare = null; this.strip = null;
    this.invalidate(true);
  }

  fit(kind = 'page', margin = 16) {
    if (!this.vp1) return;
    const W = this.w - 2 * margin, H = this.h - 2 * margin;
    if (kind === 'width') {
      this.z = Math.max(0.01, W / this.vpw);
      this.ox = margin; this.oy = Math.min(margin, (this.h - this.vph * this.z) / 2);
      if (this.vph * this.z < this.h) this.oy = (this.h - this.vph * this.z) / 2;
    } else {
      this.z = Math.max(0.01, Math.min(W / this.vpw, H / this.vph));
      this.ox = (this.w - this.vpw * this.z) / 2; this.oy = (this.h - this.vph * this.z) / 2;
    }
    this.update();
  }

  /** Zoom so a user-space box fills most of the stage. */
  zoomTo(box, fill = 0.6) {
    if (!this.vp1 || !box) return;
    const a = apply(this.T1, [box[0], box[1]]), b = apply(this.T1, [box[2], box[3]]);
    const bw = Math.max(Math.abs(b[0] - a[0]), 20), bh = Math.max(Math.abs(b[1] - a[1]), 20);
    this.z = this.clampZ(Math.min((this.w * fill) / bw, (this.h * fill) / bh));
    const cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
    this.ox = this.w / 2 - cx * this.z; this.oy = this.h / 2 - cy * this.z;
    this.update();
  }

  /** Center a user-space point without changing the zoom. */
  centerOn(p) {
    const v = apply(this.T1, p);
    this.ox = this.w / 2 - v[0] * this.z; this.oy = this.h / 2 - v[1] * this.z;
    this.update();
  }

  clampZ(z) {
    const fitZ = this.vp1 ? Math.min(this.w / this.vpw, this.h / this.vph) : 1;
    return Math.max(Math.min(fitZ * 0.25, 0.05), Math.min(64 * PX_PER_PT, z));
  }

  zoomAt(factor, sx, sy) {
    const z2 = this.clampZ(this.z * factor);
    if (z2 === this.z) return;
    this.ox = sx - ((sx - this.ox) * z2) / this.z;
    this.oy = sy - ((sy - this.oy) * z2) / this.z;
    this.z = z2;
    this.update();
  }

  setPercent(pct) { this.zoomAt(((pct / 100) * PX_PER_PT) / this.z, this.w / 2, this.h / 2); }

  panBy(dx, dy) { this.ox += dx; this.oy += dy; this.update(); }

  update() {
    // keep some of the sheet on screen (Scroll mode: some of the column)
    const pw = this.vpw * this.z, ph = this.vph * this.z, keep = 60;
    this.ox = Math.min(this.w - keep, Math.max(keep - pw, this.ox));
    if (this.strip && !this.compare) {
      const L = this.stripLayout(), a = this.strip.at;
      const top = this.oy - (L.tops[a] * this.z + a * STRIP_GAP), total = L.total * this.z + (L.n - 1) * STRIP_GAP;
      const t2 = Math.min(this.h - keep, Math.max(keep - total, top));
      this.oy += t2 - top;
    } else this.oy = Math.min(this.h - keep, Math.max(keep - ph, this.oy));
    this.invalidate(true);
    this.scheduleCrisp();
    if (this.strip) { this.followMiddle(); this.stripStamp++; clearTimeout(this.stripTimer); this.stripTimer = setTimeout(() => this.pumpStrip(), 160); }
    this.onView?.();
  }

  // ---- Scroll mode ----
  /**
   * items: [{ page, load: () → Promise<PDFPageProxy> }] — the pages of one file in order; `at` = the one shown now (this.page).
   * null leaves Scroll mode.
   */
  setStrip(items, at = 0) {
    if (!items || items.length < 2 || !this.page) { this.strip = null; this.update(); return; }
    this.strip = { items: items.map((x) => ({ page: x.page, load: x.load, proxy: null, low: null, crisp: null, T1: null })), at, layout: null };
    this.strip.items[at].proxy = this.proxy;
    this.update();
    this.pumpStrip();
  }
  /** The column at zoom 1: each page's size as shown (turned) and its top, in points. */
  stripLayout() {
    const s = this.strip;
    if (s.layout) return s.layout;
    const w = [], h = [], tops = [];
    let y = 0, maxW = 0;
    for (const it of s.items) {
      const rot = (((it.page.rotate || 0) + (this.extraRot || 0)) % 180 + 180) % 180 === 90;
      const pw = rot ? it.page.height : it.page.width, ph = rot ? it.page.width : it.page.height;
      w.push(pw); h.push(ph); tops.push(y); y += ph; maxW = Math.max(maxW, pw);
    }
    return (s.layout = { w, h, tops, total: y, maxW, n: s.items.length });
  }
  /** Where page k of the column is on screen (CSS px): the column is centered on the active page. */
  stripRect(k) {
    const L = this.stripLayout(), a = this.strip.at, z = this.z;
    return { x: this.ox + ((L.w[a] - L.w[k]) / 2) * z, y: this.oy + (L.tops[k] - L.tops[a]) * z + (k - a) * STRIP_GAP, w: L.w[k] * z, h: L.h[k] * z };
  }
  /** The pages of the column on screen (and `margin` px around it), in order. */
  stripVisible(margin = 0) {
    const out = [];
    if (!this.strip) return out;
    for (let k = 0; k < this.strip.items.length; k++) {
      const r = this.stripRect(k);
      if (r.y + r.h >= -margin && r.y <= this.h + margin && r.x + r.w >= -margin && r.x <= this.w + margin) out.push(k);
      else if (r.y > this.h + margin) break;
    }
    return out;
  }
  /** The page of the column under a point on screen, or -1 (a gap, beside the pages, not in Scroll mode). */
  stripAt(sx, sy) {
    if (!this.strip || this.compare) return -1;
    for (const k of this.stripVisible()) { const r = this.stripRect(k); if (sx >= r.x && sx <= r.x + r.w && sy >= r.y && sy <= r.y + r.h) return k; }
    return -1;
  }
  /** user space → screen for page k of the column. */
  stripS(k) {
    const it = this.strip.items[k];
    if (!it.proxy) return null;
    it.T1 ||= this.vpOf(it.proxy, 1).transform.slice();
    const r = this.stripRect(k);
    return mul([this.z, 0, 0, this.z, r.x, r.y], it.T1);
  }
  /** Make page k the active one, where it is on screen. false when it can't yet (its page is still loading). */
  activate(k) {
    const s = this.strip;
    if (!s || k === s.at || k < 0 || k >= s.items.length || this.lockActive?.()) return false;
    const it = s.items[k];
    if (!it.proxy) return false;
    const r = this.stripRect(k);
    const old = s.items[s.at];
    old.low = this.low; old.crisp = this.crisp && !this.crisp.compare ? this.crisp : null;
    this.cancelRender();
    s.at = k;
    this.page = it.page; this.proxy = it.proxy;
    this.vp1 = this.vpOf(it.proxy, 1); this.T1 = this.vp1.transform.slice();
    this.low = it.low; this.crisp = it.crisp; it.low = null; it.crisp = null;
    this.failed = null;
    this.ox = r.x; this.oy = r.y;
    if (!this.low) this.reloadLow();
    this.scheduleCrisp(0);
    this.invalidate(true);
    this.onActivate?.(it.page);
    return true;
  }
  /** Scrolling: the page in the middle of the stage becomes the active one. */
  followMiddle() {
    const s = this.strip;
    if (!s || this.compare || this.lockActive?.()) return;
    let best = s.at, bestD = Infinity;
    for (const k of this.stripVisible()) {
      const r = this.stripRect(k);
      const d = r.y <= this.h / 2 && r.y + r.h >= this.h / 2 ? 0 : Math.min(Math.abs(r.y - this.h / 2), Math.abs(r.y + r.h - this.h / 2));
      if (d < bestD) { bestD = d; best = k; }
    }
    if (best !== s.at && s.items[best].proxy) this.activate(best);
  }
  /** Go to page k of the column: it becomes active with its top near the top of the stage, at the same zoom. */
  async stripGo(k) {
    const s = this.strip;
    if (!s || k < 0 || k >= s.items.length) return false;
    const it = s.items[k];
    if (!it.proxy) { try { it.proxy = await it.load(); } catch { return false; } if (this.strip !== s) return false; }
    if (k !== s.at) {
      const r = this.stripRect(k);
      this.oy += 16 - r.y;
      const held = this.lockActive; this.lockActive = null;
      this.activate(k);
      this.lockActive = held;
    } else this.oy = 16;
    this.update();
    return true;
  }
  /** One page drawn again (a form value changed): its pictures are made afresh. */
  redrawPage(key) {
    if (this.page?.key === key) { this.reloadLow(); this.scheduleCrisp(0); }
    for (const it of this.strip?.items || []) if (it.page.key === key && it !== this.strip.items[this.strip.at]) { it.low = null; it.crisp = null; }
    if (this.strip) this.pumpStrip();
  }
  /** Load and draw the column's pages near the screen, one at a time; pictures far away are let go. */
  async pumpStrip() {
    const s = this.strip;
    if (!s || this.stripBusy) return;
    this.stripBusy = true;
    try {
      for (let guard = 0; guard < 400 && this.strip === s; guard++) {
        const near = new Set(this.stripVisible(this.h * 1.5));
        s.items.forEach((it, k) => { if (k !== s.at && !near.has(k)) { it.low = null; it.crisp = null; } });
        const job = this.stripJob(s, [...near]);
        if (!job) break;
        await job();
        this.invalidate(true);
      }
    } finally { this.stripBusy = false; }
  }
  stripJob(s, near) {
    const seen = new Set(this.stripVisible());
    const order = [...seen, ...near.filter((k) => !seen.has(k))].filter((k) => k !== s.at);
    for (const k of order) {
      const it = s.items[k];
      if (it.failed) continue;
      if (!it.proxy) return async () => { try { it.proxy = await it.load(); } catch { it.failed = true; } if (this.strip === s) this.followMiddle(); };
      if (!it.low) return () => this.renderStripLow(it);
    }
    for (const k of seen) {
      const it = s.items[k];
      if (k !== s.at && it.proxy && !it.failed && it.crisp?.stamp !== this.stripStamp) return () => this.renderStripCrisp(it, k);
    }
    return null;
  }
  async renderStripLow(it) {
    const r0 = this.vpOf(it.proxy, 1);
    const sc = Math.min(STRIP_LOW_MAX / Math.max(r0.width, r0.height), 2);
    const vp = this.vpOf(it.proxy, sc);
    const c = document.createElement('canvas');
    c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
    try {
      await it.proxy.render({ canvas: c, canvasContext: c.getContext('2d', { willReadFrequently: this.themed }), viewport: vp, annotationMode: this.annotModeOf(it.page), background: '#ffffff' }).promise;
      this.themeize(c);
      it.low = { canvas: c, s: sc };
    } catch (e) { if (e?.name !== 'RenderingCancelledException') it.failed = true; }
  }
  async renderStripCrisp(it, k) {
    const stamp = this.stripStamp, dpr = this.dpr, z = this.z;
    const r = this.stripRect(k);
    const W = Math.round(this.w * dpr), H = Math.round(this.h * dpr);
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    try {
      await it.proxy.render({ canvas: c, canvasContext: c.getContext('2d', { willReadFrequently: this.themed }), viewport: this.vpOf(it.proxy, z * dpr), transform: [1, 0, 0, 1, r.x * dpr, r.y * dpr], annotationMode: this.annotModeOf(it.page), background: '#ffffff' }).promise;
      this.themeize(c);
      it.crisp = { canvas: c, z, ox: r.x, oy: r.y, dpr, stamp };
    } catch (e) { if (e?.name !== 'RenderingCancelledException') it.crisp = { stamp }; }
  }
  /** The other pages of the column (Scroll mode), under the active one's drawing. */
  drawStrip(b) {
    const s = this.strip;
    for (const k of this.stripVisible()) {
      if (k === s.at) continue;
      const it = s.items[k], r = this.stripRect(k);
      b.fillStyle = this.colors.paper;
      b.fillRect(r.x, r.y, r.w, r.h);
      b.save();
      b.beginPath(); b.rect(r.x, r.y, r.w, r.h); b.clip();
      b.imageSmoothingEnabled = true; b.imageSmoothingQuality = 'high';
      if (it.low) { const q = this.z / it.low.s; b.drawImage(it.low.canvas, r.x, r.y, it.low.canvas.width * q, it.low.canvas.height * q); }
      if (it.crisp?.canvas) { const c = it.crisp, q = this.z / c.z; b.drawImage(c.canvas, r.x - c.ox * q, r.y - c.oy * q, (c.canvas.width / c.dpr) * q, (c.canvas.height / c.dpr) * q); }
      const S = this.stripS(k);
      if (S) this.onBaseOther?.(b, this, it.page, S);
      b.restore();
      b.lineWidth = 1; b.strokeStyle = this.colors.line;
      b.strokeRect(Math.round(r.x) - 0.5, Math.round(r.y) - 0.5, Math.round(r.w) + 1, Math.round(r.h) + 1);
    }
  }

  // ---- rendering ----
  invalidate(base = false) {
    if (base) this.dirtyBase = true;
    this.dirtyOver = true;
    if (!this.raf) this.raf = requestAnimationFrame(() => { this.raf = 0; this.draw(); });
  }

  cancelRender() {
    clearTimeout(this.crispTimer);
    this.renderToken++;
    if (this.task) { try { this.task.cancel(); } catch { /* already done */ } this.task = null; }
  }

  async reloadLow() {
    const proxy = this.proxy;
    if (!proxy) return;
    const s = Math.min(LOWRES_MAX / Math.max(this.vpw, this.vph), 3);
    const vp = this.vpOf(proxy, s);
    const c = document.createElement('canvas');
    c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
    // a big scan can take seconds: the sheet says it is being drawn instead of looking blank (0.7.1, blank-page reports)
    this.drawing = proxy; this.drawingSince = performance.now();
    const slow = setTimeout(() => { if (this.drawing === proxy) this.invalidate(true); }, 400);
    try {
      await proxy.render({ canvas: c, canvasContext: c.getContext('2d', { willReadFrequently: this.themed }), viewport: vp, annotationMode: this.annotMode(), background: '#ffffff' }).promise;
      this.themeize(c);
    } catch (e) {
      if (e?.name !== 'RenderingCancelledException') { console.warn(e); if (proxy === this.proxy) this.fail(e); }
      return;
    } finally { clearTimeout(slow); if (this.drawing === proxy) { this.drawing = null; this.invalidate(true); } }
    if (proxy === this.proxy) { this.low = { canvas: c, s }; this.failed = null; this.invalidate(true); this.checkImages(proxy); }
  }

  /**
   * pdf.js leaves a picture it cannot decode out of the page without an error (a damaged or unsupported JPX, JBIG2 or JPEG
   * stream): the page then looks blank. After drawing, the page's picture objects are looked at; one that came back empty
   * is a picture that could not be drawn, and the sheet says so. `imageOps` (pdf.js OPS ids of the picture-painting
   * operators) is set by the page.
   */
  async checkImages(proxy) {
    if (!this.imageOps?.size) return;
    let ol;
    try { ol = await proxy.getOperatorList({ annotationMode: this.annotMode() }); } catch { return; }
    let total = 0, bad = 0;
    const waits = [];
    ol.fnArray.forEach((fn, k) => {
      const id = ol.argsArray[k]?.[0];
      if (!this.imageOps.has(fn) || typeof id !== 'string') return;
      total++;
      const store = id.startsWith('g_') ? proxy.commonObjs : proxy.objs;
      // a picture that fails to decode can resolve (to null) only after the page was drawn without it
      waits.push(new Promise((done) => {
        const t = setTimeout(() => done(undefined), 8000);
        try { store.get(id, (v) => { clearTimeout(t); done(v); }); } catch { clearTimeout(t); done(undefined); }
      }).then((v) => { if (v === null) bad++; }));
    });
    await Promise.all(waits);
    if (bad && proxy === this.proxy) {
      this.failed = { kind: 'image', n: bad, total, message: '' };
      this.invalidate(true);
      this.onFail?.(this.failed);
    }
  }

  /** A page pdf.js could not draw: say so on the sheet (never a silent blank) and tell the page (onFail). */
  fail(e) {
    this.failed = { message: String(e?.message || e || '') };
    this.invalidate(true);
    this.onFail?.(this.failed);
  }
  /** The message drawn on a sheet that could not be drawn, or is still being drawn. */
  paintNotice(b, text) {
    const pw = this.vpw * this.z, ph = this.vph * this.z;
    const size = Math.max(11, Math.min(16, pw / 30));
    b.save();
    b.font = '600 ' + size + 'px ' + SCREEN_FONT;
    b.textAlign = 'center'; b.textBaseline = 'middle';
    const lines = String(text).split('\n');
    const cx = this.ox + pw / 2, cy = this.oy + Math.min(ph / 2, Math.max(40, ph * 0.2));
    const wMax = Math.max(...lines.map((l) => b.measureText(l).width)) + size * 2;
    b.fillStyle = this.colors.sheet; b.globalAlpha = 0.92;
    b.fillRect(cx - wMax / 2, cy - (lines.length * size * 1.4) / 2 - size * 0.6, wMax, lines.length * size * 1.4 + size * 1.2);
    b.globalAlpha = 1; b.fillStyle = this.colors.ink;
    lines.forEach((l, i) => b.fillText(l, cx, cy + (i - (lines.length - 1) / 2) * size * 1.4));
    b.restore();
  }

  annotMode() { return this.annotModeOf(this.page); }
  /** pdf.js AnnotationMode for a page: off when every annotation on it became a markup, else appearances + form values. */
  annotModeOf(page) { return page?.annotMode === 'disable' ? 0 : ANNOT_ON; }

  scheduleCrisp(delay = 140) {
    clearTimeout(this.crispTimer);
    if (!this.proxy) return;
    this.crispTimer = setTimeout(() => this.renderCrisp(), delay);
  }

  async renderCrisp() {
    const proxy = this.proxy;
    if (!proxy) return;
    if (this.task) { try { this.task.cancel(); } catch { /* done */ } this.task = null; }
    const token = ++this.renderToken;
    const dpr = this.dpr, z = this.z, ox = this.ox, oy = this.oy;
    const W = Math.round(this.w * dpr), H = Math.round(this.h * dpr);
    const vp = this.vpOf(proxy, z * dpr);
    const devT = [1, 0, 0, 1, ox * dpr, oy * dpr];
    try {
      if (this.compare) {
        const cmp = this.compare;
        const a = await this.renderInto(cmp.oldProxy, W, H, mul([dpr, 0, 0, dpr, 0, 0], mul(mul(this.S, cmp.T), inv(cmp.oldVp1.transform))), this.vpOf(cmp.oldProxy, 1), token, true);
        if (!a || token !== this.renderToken) return;
        const b = await this.renderInto(proxy, W, H, devT, vp, token, true);
        if (!b || token !== this.renderToken) return;
        const ia = a.getContext('2d').getImageData(0, 0, W, H), ib = b.getContext('2d').getImageData(0, 0, W, H);
        const out = b.getContext('2d').createImageData(W, H);
        combine(ia.data, ib.data, out.data, cmp.colors(this), cmp.balance);
        b.getContext('2d').putImageData(out, 0, 0);
        this.crisp = { canvas: b, z, ox, oy, dpr, compare: true };
      } else {
        const c = await this.renderInto(proxy, W, H, devT, vp, token, false);
        if (!c || token !== this.renderToken) return;
        this.crisp = { canvas: c, z, ox, oy, dpr };
      }
      this.invalidate(true);
    } catch (e) {
      if (e?.name !== 'RenderingCancelledException') { console.warn(e); if (!this.low && proxy === this.proxy) this.fail(e); }
    }
  }

  async renderInto(proxy, W, H, transform, viewport, token, plain) {
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const ctx = c.getContext('2d', { willReadFrequently: plain || this.themed });
    const task = proxy.render({
      canvas: c, canvasContext: ctx, viewport, transform,
      annotationMode: plain ? 0 : this.annotMode(),
      background: '#ffffff',
    });
    this.task = task;
    try { await task.promise; } finally { if (this.task === task) this.task = null; }
    if (token !== this.renderToken) return null;
    if (!plain) this.themeize(c);
    return c;
  }

  /** Compare two sheets: pass null to stop. cmp = { oldProxy, T, balance, colors(view) }. */
  setCompare(cmp) {
    if (cmp) { cmp.oldVp1 = this.vpOf(cmp.oldProxy, 1); }
    this.compare = cmp;
    this.crisp = null;
    this.invalidate(true);
    this.scheduleCrisp(0);
  }

  draw() {
    const { bctx: b, octx: o, dpr } = this;
    if (this.dirtyBase) {
      this.dirtyBase = false;
      b.setTransform(1, 0, 0, 1, 0, 0);
      b.fillStyle = this.colors.desk;
      b.fillRect(0, 0, this.base.width, this.base.height);
      if (this.page) {
        b.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (this.strip && !this.compare) this.drawStrip(b);
        const pw = this.vpw * this.z, ph = this.vph * this.z;
        b.fillStyle = this.compare ? this.colors.sheet : this.colors.paper;
        b.fillRect(this.ox, this.oy, pw, ph);
        b.save();
        b.beginPath(); b.rect(this.ox, this.oy, pw, ph); b.clip();
        b.imageSmoothingEnabled = true;
        b.imageSmoothingQuality = 'high';
        if (this.low && !this.compare) {
          const k = this.z / this.low.s;
          b.drawImage(this.low.canvas, this.ox, this.oy, this.low.canvas.width * k, this.low.canvas.height * k);
        }
        if (this.crisp && (!!this.crisp.compare === !!this.compare)) {
          const c = this.crisp, k = this.z / c.z;
          b.drawImage(c.canvas, this.ox - c.ox * k, this.oy - c.oy * k, (c.canvas.width / c.dpr) * k, (c.canvas.height / c.dpr) * k);
        }
        // nothing to show yet, or nothing at all: say why (the page's words come from onNotice, the app's language)
        if (!this.compare && (this.failed || (!this.low && !this.crisp && this.drawing && performance.now() - this.drawingSince > 350))) {
          const text = this.onNotice?.(this.failed ? 'failed' : 'drawing', this.failed);
          if (text) this.paintNotice(b, text);
        }
        b.restore();
        b.lineWidth = 1;
        b.strokeStyle = this.colors.line;
        b.strokeRect(Math.round(this.ox) - 0.5, Math.round(this.oy) - 0.5, Math.round(pw) + 1, Math.round(ph) + 1);
        b.save();
        b.beginPath(); b.rect(this.ox, this.oy, pw, ph); b.clip();
        this.onBase?.(b, this);
        b.restore();
        this.onBoard?.(b, this);   // 0.9 NOTES.1: notes and the pasteboard, not clipped to the sheet
      }
    }
    if (this.dirtyOver) {
      this.dirtyOver = false;
      o.setTransform(1, 0, 0, 1, 0, 0);
      o.clearRect(0, 0, this.over.width, this.over.height);
      if (this.page) { o.setTransform(dpr, 0, 0, dpr, 0, 0); this.onOver?.(o, this); }
    }
  }

  // ---- painting display lists (shapes.js) ----

  /** Paint a display list in user space. opts: { alpha, paper, outline (color: draw as a thin outline) } */
  paint(ctx, list, opts = {}) {
    const S = opts.S || this.S, dpr = opts.dpr ?? this.dpr, z = opts.z ?? this.z;
    const alpha = opts.alpha ?? 1;
    for (const it of list) {
      if (it.k === 'path') {
        ctx.save();
        ctx.setTransform(S[0] * dpr, S[1] * dpr, S[2] * dpr, S[3] * dpr, S[4] * dpr, S[5] * dpr);
        ctx.beginPath();
        for (const c of it.d) {
          if (c[0] === 'M') ctx.moveTo(c[1], c[2]);
          else if (c[0] === 'L') ctx.lineTo(c[1], c[2]);
          else if (c[0] === 'C') ctx.bezierCurveTo(c[1], c[2], c[3], c[4], c[5], c[6]);
          else if (c[0] === 'Z') ctx.closePath();
        }
        if (it.blend === 'multiply' && (!this.dark || opts.light)) ctx.globalCompositeOperation = 'multiply';
        if (it.fill && it.falpha > 0) {
          ctx.globalAlpha = it.falpha * alpha;
          ctx.fillStyle = this.color(it.fill, opts);
          ctx.fill(it.rule === 'evenodd' ? 'evenodd' : 'nonzero');
        }
        if (it.stroke && it.w > 0) {
          ctx.globalAlpha = it.alpha * alpha;
          ctx.strokeStyle = this.color(it.stroke, opts);
          ctx.lineWidth = Math.max(it.w, 0.8 / z);
          ctx.lineCap = it.cap === 'round' ? 'round' : 'butt';
          ctx.lineJoin = it.join === 'round' ? 'round' : 'miter';
          if (it.dash) ctx.setLineDash(it.dash);
          ctx.stroke();
        }
        ctx.restore();
      } else if (it.k === 'image') {
        // pictures and signatures (0.4 K5): decoded once per data URL, drawn when ready
        const img = this.image(it.src);
        if (!img) continue;
        const f = frame(it.rot || 0, it.box);
        ctx.save();
        ctx.setTransform(S[0] * dpr, S[1] * dpr, S[2] * dpr, S[3] * dpr, S[4] * dpr, S[5] * dpr);
        ctx.transform(f.u[0] * f.W, f.u[1] * f.W, f.v[0] * f.H, f.v[1] * f.H, f.o[0], f.o[1]);
        ctx.globalAlpha = (it.alpha ?? 1) * alpha;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, 0, 0, 1, 1);
        ctx.restore();
      } else if (it.k === 'text') {
        const px = it.size * z;
        if (px < 2.5) {
          // too small to read: a hint of gray where the text is
          continue;
        }
        const pl = placeText(it);
        ctx.save();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalAlpha = (it.alpha ?? 1) * alpha;
        ctx.fillStyle = this.color(it.color, opts);
        ctx.font = (it.bold ? '700 ' : '400 ') + px.toFixed(2) + 'px ' + SCREEN_FONT;
        ctx.textBaseline = 'alphabetic';
        for (const ln of pl.lines) {
          if (!ln.s) continue;
          const [sx, sy] = apply(S, [ln.x, ln.y]);
          ctx.fillText(ln.s, sx, sy);
        }
        ctx.restore();
      }
    }
  }

  /** A decoded picture for a data URL, or null while it loads (the view redraws when it is ready). */
  image(src) {
    if (!src || typeof Image === 'undefined') return null;
    this.images ||= new Map();
    let e = this.images.get(src);
    if (!e) {
      const img = new Image();
      e = { img, ok: false };
      img.onload = () => { e.ok = true; this.invalidate(true); };
      img.src = src;
      this.images.set(src, e);
      if (this.images.size > 64) this.images.delete(this.images.keys().next().value);
    }
    return e.ok ? e.img : null;
  }

  color(c, opts) {
    if (c === 'paper') return opts.paper || (opts.light ? '#ffffff' : this.colors.paper);
    if (!this.dark || opts.light) return c;
    // keep dark markup colors readable on the dark sheet
    return luminance(c) < 0.12 ? mix(c, '#ffffff', 0.55) : c;
  }

  /**
   * A picture of part of a sheet with markups on it (BCF snapshots): box in user space, a margin
   * around it, at most maxPx on the long side; the PDF's own colors. Returns a canvas.
   */
  async snapshot(proxy, page, box, lists, maxPx = 900) {
    const vp1 = proxy.getViewport({ scale: 1 });
    const a = apply(vp1.transform, [box[0], box[1]]), b = apply(vp1.transform, [box[2], box[3]]);
    let x0 = Math.min(a[0], b[0]), y0 = Math.min(a[1], b[1]), w = Math.abs(b[0] - a[0]), h = Math.abs(b[1] - a[1]);
    const m = Math.max(36, Math.max(w, h) * 0.25);
    x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m);
    w = Math.min(vp1.width - x0, w + 2 * m); h = Math.min(vp1.height - y0, h + 2 * m);
    const sc = Math.min(maxPx / Math.max(w, h), 6);
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.ceil(w * sc)); c.height = Math.max(1, Math.ceil(h * sc));
    const ctx = c.getContext('2d');
    await proxy.render({ canvas: c, canvasContext: ctx, viewport: proxy.getViewport({ scale: sc }), transform: [1, 0, 0, 1, -x0 * sc, -y0 * sc], annotationMode: this.annotModeOf(page), background: '#ffffff' }).promise;
    const S = mul([sc, 0, 0, sc, -x0 * sc, -y0 * sc], vp1.transform);
    for (const list of lists) this.paint(ctx, list, { S, dpr: 1, z: sc, light: true });
    return c;
  }

  /** Render a page small, for the sheets list. */
  static async thumb(proxy, canvas, maxW, maxH, dpr = 1) {
    const vp1 = proxy.getViewport({ scale: 1 });
    const s = Math.min(maxW / vp1.width, maxH / vp1.height) * dpr;
    const vp = proxy.getViewport({ scale: s });
    canvas.width = Math.max(1, Math.floor(vp.width)); canvas.height = Math.max(1, Math.floor(vp.height));
    canvas.style.aspectRatio = vp.width + ' / ' + vp.height;
    await proxy.render({ canvas, canvasContext: canvas.getContext('2d'), viewport: vp, annotationMode: ANNOT_ON, background: '#ffffff' }).promise;
  }
}

export function luminance(c) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(c).trim());
  if (!m) return 0.5;
  const v = parseInt(m[1], 16);
  return (0.2126 * ((v >> 16) & 255) + 0.7152 * ((v >> 8) & 255) + 0.0722 * (v & 255)) / 255;
}
export function mix(a, b, t) {
  const pa = parseInt(String(a).replace('#', ''), 16), pb = parseInt(String(b).replace('#', ''), 16);
  if (Number.isNaN(pa) || Number.isNaN(pb)) return a;
  const ch = (p, s) => (p >> s) & 255;
  const r = Math.round(ch(pa, 16) * (1 - t) + ch(pb, 16) * t), g = Math.round(ch(pa, 8) * (1 - t) + ch(pb, 8) * t), bl = Math.round(ch(pa, 0) * (1 - t) + ch(pb, 0) * t);
  return '#' + [r, g, bl].map((v) => v.toString(16).padStart(2, '0')).join('');
}
export function hexRgb(c) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(c).trim());
  const v = m ? parseInt(m[1], 16) : 0;
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}
