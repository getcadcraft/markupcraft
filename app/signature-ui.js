/* SPDX-License-Identifier: Apache-2.0 */
/**
 * signature-ui.js: markupcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSignatures(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { cleanImage, cleanSignatures, MAX_SIGNATURES, pictureKind } from './imagestamp.js';
import { nowIso, STAMPS } from './model.js';

export function mountSignatures(ctx) {
  const { ST, settings, saveSettings, status, dialog, ask, SIG, LS_SIGS, LS_SIG, pickPictureFile, pictureOf } = ctx;

  /** The signature pad: strokes with the mouse, a pen or a finger; kept trimmed to the ink as a transparent PNG. */
  async function drawSignature() {
    const W = 520, H = 180;
    const c = el('canvas', { className: 'mc-sig', width: W * 2, height: H * 2, 'aria-label': t('image.signature.box'), role: 'img' });
    const g = c.getContext('2d');
    g.scale(2, 2); g.lineWidth = 2.6; g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = '#1b2a4a';
    let ink = null, last = null;
    const at = (e) => { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * (W / r.width), (e.clientY - r.top) * (H / r.height)]; };
    const grow = ([x, y]) => { ink = ink ? [Math.min(ink[0], x), Math.min(ink[1], y), Math.max(ink[2], x), Math.max(ink[3], y)] : [x, y, x, y]; };
    c.addEventListener('pointerdown', (e) => { e.preventDefault(); c.setPointerCapture(e.pointerId); last = at(e); grow(last); g.beginPath(); g.arc(last[0], last[1], 1.2, 0, 7); g.fillStyle = g.strokeStyle; g.fill(); });
    c.addEventListener('pointermove', (e) => { if (!last) return; const p = at(e); g.beginPath(); g.moveTo(last[0], last[1]); g.lineTo(p[0], p[1]); g.stroke(); grow(p); last = p; });
    const up = () => { last = null; };
    c.addEventListener('pointerup', up); c.addEventListener('pointercancel', up);
    const clear = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { g.clearRect(0, 0, W, H); ink = null; } }, t('image.signature.clear'));
    const r = await dialog({ title: t('image.signature.title'), text: t('image.signature.text'), body: [c, el('div', { className: 'mc-actions' }, clear)], wide: true,
      buttons: [['cancel', t('dlg.cancel')], ['file', t('image.signature.upload')], ['ok', t('image.signature.ok'), 'btn-plot']], submit: 'ok', check: (key) => (key !== 'ok' || ink ? '' : t('image.signature.need')) });
    if (r.key === 'file') return uploadSignature();
    if (r.key !== 'ok' || !ink) return false;
    const pad = 6, x0 = Math.max(0, ink[0] - pad), y0 = Math.max(0, ink[1] - pad), x1 = Math.min(W, ink[2] + pad), y1 = Math.min(H, ink[3] + pad);
    const out = el('canvas', { width: Math.round((x1 - x0) * 2), height: Math.round((y1 - y0) * 2) });
    out.getContext('2d').drawImage(c, x0 * 2, y0 * 2, out.width, out.height, 0, 0, out.width, out.height);
    const src = cleanImage(out.toDataURL('image/png'));
    return src ? keepSignature(src, t('image.signature.drawn')) : false;
  }
  // ---- the signature list (0.7.1 71.8): drawn or from a file, kept in this browser, one of them in use ----
  function signatures() {
    const list = cleanSignatures(ctx.lsGet(LS_SIGS, null));
    const one = ctx.lsGet(LS_SIG, null);
    if (!list.length && one && cleanImage(one.src)) list.push({ id: 'sig-1', src: one.src, name: t('image.signature.label'), at: '' });   // kept before 0.7.1
    return list;
  }
  /** Add a signature to the list (newest first) and use it. */
  function keepSignature(src, name) {
    const list = [{ id: 'sig-' + Date.now().toString(36), src, name, at: nowIso() }, ...signatures().filter((x) => x.src !== src)].slice(0, MAX_SIGNATURES);
    if (!ctx.lsSet(LS_SIGS, list) || !ctx.lsSet(LS_SIG, { src })) { status(t('image.too_big')); return false; }
    settings.stamp = SIG; saveSettings();
    status(t('image.signature.ready'));
    return true;
  }
  function useSignature(sig) { if (!ctx.lsSet(LS_SIG, { src: sig.src })) return; settings.stamp = SIG; ST.toolPreset = null; saveSettings(); status(t('image.signature.ready')); ctx.renderProps(); }
  function dropSignature(sig) {
    const list = signatures().filter((x) => x.id !== sig.id);
    ctx.lsSet(LS_SIGS, list);
    if (ctx.lsGet(LS_SIG, null)?.src === sig.src) { if (list[0]) ctx.lsSet(LS_SIG, { src: list[0].src }); else { try { localStorage.removeItem(LS_SIG); } catch { /* gone */ } if (settings.stamp === SIG) { settings.stamp = STAMPS[0]; saveSettings(); } } }
    status(t('image.signature.removed'));
    ctx.renderProps();
  }
  /** A signature from a file (71.8): a scan or photo on paper, or a PNG that is already see-through. */
  async function uploadSignature() {
    const f = await pickPictureFile();
    if (!f) return false;
    const kind = pictureKind(f.name, f.type);
    let clear = kind !== 'png' && kind !== 'svg';   // a JPEG or PDF page is almost always ink on white paper
    if (kind === 'png' || kind === 'svg') {
      const k = await ask(t('image.signature.paper.title'), t('image.signature.paper.text'), [['keep', t('image.signature.paper.keep')], ['clear', t('image.signature.paper.clear'), 'btn-plot']]);
      if (k !== 'keep' && k !== 'clear') return false;
      clear = k === 'clear';
    }
    const pic = await pictureOf(f, { paper: clear });
    return pic ? keepSignature(pic.src, pic.name || t('image.signature.label')) : false;
  }
  window.markupcraft.uploadSignature = uploadSignature;   // tests

  return { drawSignature, signatures, useSignature, dropSignature, uploadSignature };
}
