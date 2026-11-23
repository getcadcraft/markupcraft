/* SPDX-License-Identifier: Apache-2.0 */
/**
 * picture-ui.js: markupcraft.js's 19 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPictures(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { cleanImage, pictureKind, clearPaper, inkBox, imageInfo, fitBox, placeRect } from './imagestamp.js';
import { t } from './i18n.js';
import { TYPES } from './model.js';
import { el, dateTime } from './ui-util.js';

export function mountPictures(ctx) {
  const { ST, $, ui, view, settings, saveSettings, curSheet, status, loadLibs, dialog, askAuthor, host, commitEdit, newMarkup, commitNew } = ctx;

  // ---- pictures and signatures as stamps (0.4 K5) ----
  // The stamp tool's list ends with "Picture…" (a PNG or JPEG from this computer) and "My signature…" (drawn in a dialog);
  // the chosen one is kept in this browser and placed like a stamp: click, or drag a box. The markup is type 'image'.
  const PIC = '\u0001picture', SIG = '\u0001signature';
  const LS_PIC = 'markupcraft.picture', LS_SIG = 'markupcraft.signature', LS_SIGS = 'markupcraft.signatures';
  const isPic = (v) => v === PIC || v === SIG;
  function currentPicture() {
    const v = settings.stamp === PIC ? ctx.lsGet(LS_PIC, null) : settings.stamp === SIG ? ctx.lsGet(LS_SIG, null) : null;
    return v && cleanImage(v.src) ? { src: v.src, label: settings.stamp === SIG ? t('image.signature.label') : String(v.name || '') || TYPES.image.name } : null;
  }
  ui.imageFile = $('[data-image-file]');
  ST.picPick = null;
  ui.imageFile?.addEventListener('change', () => { const f = ui.imageFile.files[0]; ui.imageFile.value = ''; const r = ST.picPick; ST.picPick = null; r?.(f || null); });
  ui.imageFile?.addEventListener('cancel', () => { const r = ST.picPick; ST.picPick = null; r?.(null); });
  /**
   * A picked file → a PNG or JPEG data URL, at most 1600 px on its longer side ('' when it is not a picture we take).
   * 0.7.1 71.7: an SVG is drawn at that size (an <img> runs none of its scripts), a PDF page through pdf.js; both become a
   * PNG that keeps what is see-through. opts.page (1-based) picks the PDF page; opts.paper makes white paper see-through.
   */
  async function pictureFrom(file, { page = 1, paper = false } = {}) {
    const kind = pictureKind(file.name, file.type);
    if (!kind) return '';
    let c;
    if (kind === 'pdf') {
      let doc = null;
      try {
        await loadLibs();
        doc = await takePdfDoc(file);   // 0.11 PERF.27: the document the page count already opened (the file is read once)
        const pg = await doc.getPage(Math.max(1, Math.min(doc.numPages, page)));
        const v1 = pg.getViewport({ scale: 1 });
        const vp = pg.getViewport({ scale: Math.min(1600 / Math.max(v1.width, v1.height), 8) });
        c = el('canvas', { width: Math.max(1, Math.round(vp.width)), height: Math.max(1, Math.round(vp.height)) });
        await pg.render({ canvasContext: c.getContext('2d'), viewport: vp, background: 'rgba(0,0,0,0)', annotationMode: 0 }).promise;
      } catch { return ''; } finally { doc?.destroy?.(); }
    } else {
      const url = URL.createObjectURL(file);
      try {
        const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = url; });
        const w0 = img.naturalWidth || 1024, h0 = img.naturalHeight || 1024;   // an SVG without a size
        const k = kind === 'svg' ? 1600 / Math.max(w0, h0) : Math.min(1, 1600 / Math.max(w0, h0));
        c = el('canvas', { width: Math.max(1, Math.round(w0 * k)), height: Math.max(1, Math.round(h0 * k)) });
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      } catch { return ''; } finally { URL.revokeObjectURL(url); }
    }
    if (paper) c = paperless(c);
    if (!c) return '';
    return cleanImage(c.toDataURL(kind === 'jpeg' && !paper ? 'image/jpeg' : 'image/png', 0.9));
  }
  /** White paper → see-through, trimmed to the ink (a signature on paper, 71.8). null when nothing is left. */
  function paperless(c) {
    const g = c.getContext('2d');
    const d = g.getImageData(0, 0, c.width, c.height);
    clearPaper(d.data);
    const b = inkBox(d.data, c.width, c.height);
    if (!b) return null;
    g.putImageData(d, 0, 0);
    const pad = 4, x0 = Math.max(0, b[0] - pad), y0 = Math.max(0, b[1] - pad), x1 = Math.min(c.width, b[2] + pad), y1 = Math.min(c.height, b[3] + pad);
    const out = el('canvas', { width: x1 - x0, height: y1 - y0 });
    out.getContext('2d').drawImage(c, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
    return out;
  }
  const PICTURE_TYPES = [{ description: 'PNG, JPEG, SVG, PDF', extensions: ['.png', '.jpg', '.jpeg', '.svg', '.pdf'] }];   // i18n-ignore (file type names)
  /** Ask for a picture file: the desktop app's own dialog, as File › Open does; the browser's file input otherwise. */
  async function pickPictureFile() {
    if (host.kind === 'desktop') {
      const [hf] = await host.openFile({ types: PICTURE_TYPES }).catch(() => []);
      if (!hf) return null;
      for (const e of await host.recent.list()) if (e.path && e.path === hf.path) host.recent.remove(e);   // a picture is not a recent drawing
      try { const b = await hf.file(); return b instanceof File ? b : new File([b], hf.name, { type: '' }); } catch { return null; }
    }
    return new Promise((done) => { ST.picPick = done; ui.imageFile.click(); });
  }
  /**
   * 0.11 PERF.27: the PDF that askPdfPage opened to count its pages stays open, for pictureFrom to draw the chosen page from, so the
   * file is read once, not twice. `heldPdf` holds one at a time; takePdfDoc hands it over (or opens the file when it is not the one held).
   */
  ST.heldPdf = null;   // {file, doc}
  function dropOpenPdf() { const o = ST.heldPdf; ST.heldPdf = null; try { o?.doc?.destroy?.(); } catch { /* already gone */ } }
  async function takePdfDoc(file) {
    if (ST.heldPdf && ST.heldPdf.file === file) { const d = ST.heldPdf.doc; ST.heldPdf = null; return d; }
    dropOpenPdf();
    return ST.libs.pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()), isEvalSupported: false, enableScripting: false, ...ST.libs.docOptions }).promise;
  }
  /** A PDF with more than one page: which one becomes the picture (1-based), or null when cancelled. */
  async function askPdfPage(file) {
    let n = 1;
    dropOpenPdf();
    try { await loadLibs(); const d = await ST.libs.pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()), isEvalSupported: false, enableScripting: false, ...ST.libs.docOptions }).promise; n = d.numPages; ST.heldPdf = { file, doc: d }; } catch { return 1; }
    if (n <= 1) return 1;
    const input = el('input', { type: 'number', id: 'mc-dlg-page', className: 'mc-input mc-num', min: '1', max: String(n), step: '1', value: '1' });
    const r = await dialog({ title: t('pic.page.title'), text: t('pic.page.text', { file: file.name, n }), body: [el('label', { className: 'mc-k', for: 'mc-dlg-page' }, t('pic.page.label')), input],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('dlg.ok'), 'btn-plot']], submit: 'ok', check: () => (+input.value >= 1 && +input.value <= n ? '' : t('pic.page.need', { n })) });
    if (r.key !== 'ok') { dropOpenPdf(); return null; }
    return Math.round(+input.value);
  }
  /** A file → {src, name} for a picture markup or stamp, or null (said why). */
  async function pictureOf(f, opts = {}) {
    if (!pictureKind(f.name, f.type)) { status(t('image.bad', { file: f.name })); return null; }
    const page = pictureKind(f.name, f.type) === 'pdf' ? await askPdfPage(f) : 1;
    if (!page) return null;
    status(t('image.loading'));
    const src = await pictureFrom(f, { page, ...opts });
    if (!src) { status(t('image.bad', { file: f.name })); return null; }
    return { src, name: f.name.replace(/\.[^.]+$/, '').slice(0, 60) };
  }
  /**
   * Insert › A picture from a file (0.7.1 71.7): a picture markup at `at` (screen point; else the middle of the view),
   * at most 3 in, selected. It stays a markup; "Flatten into the page when saved" burns it into the page on Save.
   */
  async function insertPicture(file = null, at = null) {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return false; }
    commitEdit(); ctx.cancelOps();
    const f = file || await pickPictureFile();
    if (!f) return false;
    const pic = await pictureOf(f);
    const info = pic ? imageInfo(pic.src) : null;
    if (!info) return false;
    if (!ST.author && !ST.askedAuthor) await askAuthor();
    if (ST.tool !== 'select') ctx.setTool('select');
    const center = at ? view.toUser(at[0], at[1]) : view.toUser(view.w / 2, view.h / 2);
    const [w, h] = fitBox(info.width, info.height, 216, 216);
    commitNew(newMarkup('image', { rect: placeRect(center, w, h, view.seenRotate), img: pic.src, label: pic.name || TYPES.image.name, subject: TYPES.image.subject }), t('pic.insert.undo'));
    status(t('pic.insert.done', { name: pic.name }));
    return true;
  }
  window.markupcraft.insertPicture = insertPicture;   // tests
  async function choosePicture() {
    const f = await pickPictureFile();
    if (!f) return false;
    const pic = await pictureOf(f);
    if (!pic) return false;
    const { src, name } = pic;
    if (!ctx.lsSet(LS_PIC, { src, name })) { status(t('image.too_big')); return false; }
    settings.stamp = PIC; saveSettings();
    status(t('image.ready', { name }));
    return true;
  }
  window.markupcraft.setPicture = (src, name) => { if (!cleanImage(src)) return false; ctx.lsSet(LS_PIC, { src, name }); settings.stamp = PIC; saveSettings(); ctx.renderProps(); return true; };   // tests

  ui.photoFile = $('[data-photo-file]');
  ui.photoFile?.addEventListener('change', () => { const f = ui.photoFile.files[0]; ui.photoFile.value = ''; const r = ST.picPick; ST.picPick = null; r?.(f || null); });
  ui.photoFile?.addEventListener('cancel', () => { const r = ST.picPick; ST.picPick = null; r?.(null); });
  function showPhoto(r) {
    dialog({ title: r.text || t('photo.title'), body: [el('img', { className: 'mc-photo-full', src: r.photo, alt: r.text || t('photo.title') }), el('p', { className: 'mc-muted' }, t('thread.meta', { author: r.author || t('thread.unknown'), date: dateTime(r.date) }))],
      buttons: [['cancel', t('dlg.ok'), 'btn-plot']], wide: true });
  }
  /** Place a picture: a click centres it at its usual size, a dragged box fits it inside (proportions kept). */
  function placePicture(pic, a, b) {
    const info = imageInfo(pic.src);
    if (!info) return;
    const s = curSheet();
    const wide = settings.stamp === SIG ? 144 : 216;   // 2 in for a signature, 3 in for a picture
    let w, h, center;
    if (b && Math.abs(b[0] - a[0]) > 8 / view.z && Math.abs(b[1] - a[1]) > 8 / view.z) {
      const rot = view.seenRotate % 180;
      const bw = Math.abs(b[0] - a[0]), bh = Math.abs(b[1] - a[1]);
      [w, h] = fitBox(info.width, info.height, rot ? bh : bw, rot ? bw : bh);
      center = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    } else {
      [w, h] = fitBox(info.width, info.height, wide, wide * 4);
      center = a;
    }
    commitNew(newMarkup('image', { rect: placeRect(center, w, h, view.seenRotate), img: pic.src, label: pic.label,
      subject: settings.stamp === SIG ? t('image.signature.label') : TYPES.image.subject }));
  }

  return { SIG, PIC, LS_SIGS, LS_SIG, isPic, currentPicture, pictureFrom, pickPictureFile, pictureOf, insertPicture, choosePicture, showPhoto, placePicture };
}
