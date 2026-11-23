/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clipboard-ui.js: markupcraft.js's 27 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountClipboard(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { cleanPens } from './pen-clean.js';
import { cleanClip, CLIP_KEY, makeClip, clipBounds, placeClip } from './clip.js';
import { CONTENT_KEY, cleanContentClip } from './content-clip.js';
import { AREA_KEY, cleanAreaClip, fitTwoPoints, turnedSize, sameImage } from './areaclip.js';
import { placeRect, imageInfo, cleanImage, fitBox } from './imagestamp.js';
import { TYPES } from './model.js';
import { el } from './ui-util.js';

export function mountClipboard(mc) {
  const { ST, store, view, settings, curSheet, curKey, pickable, styleFor, status, askAuthor, commitEdit, cancelOps, pictureFrom, renderNav, setTool, updateCursor, newMarkup, commitNew, refreshAll, refreshSelection, refreshToolbar, root } = mc;

  // ---- undo / redo / delete / clipboard ----
  function afterHistory(label, which) {
    ST.sel = new Set([...ST.sel].filter((id) => store.get(id)));
    status(label ? t('history.' + which, { what: mc.lowFirst(label) }) : t('history.' + which + '.none'));
    renderNav();
  }
  function undo() { commitEdit(); cancelOps(); afterHistory(store.undo(), 'undo'); }
  function redo() { commitEdit(); cancelOps(); afterHistory(store.redo(), 'redo'); }

  function editable(ids = ST.sel) { return [...ids].map((id) => store.get(id)).filter((m) => m && !m.locked); }

  /** Edit › Clean up pen: the selected pen markups (none selected: every pen markup on this sheet) become precise ones, one undo step. */
  function cleanPenMarkups() {
    const chosen = [...ST.sel].map((id) => store.get(id)).filter(Boolean);
    const pool = chosen.some((m) => m.type === 'pen') ? chosen : store.onSheet(curKey());
    const r = cleanPens(pool);
    if (!r.changes.length) { status(t('pen.clean.none')); return; }
    const made = [];
    store.change(t('undo.pen.clean', { n: r.changes.length }), (tx) => {
      for (const c of r.changes) {
        const old = tx.get(c.id);
        if (!old) continue;
        const { id, pts, rect, type, created, modified, ...keep } = old;
        tx.remove(c.id);
        made.push(tx.add({ ...keep, ...c.add }).id);
      }
    });
    ST.sel = new Set(made);
    refreshSelection();
    status(t('pen.clean.done', { n: made.length }));
  }
  function deleteSelection() {
    if (ST.tool === 'content') { mc.baseUi.remove(); return; }
    const list = [...ST.sel].map((id) => store.get(id)).filter(Boolean);
    if (!list.length) { status(t('delete.need')); return; }
    const locked = list.filter((m) => m.locked).length;
    const del = list.filter((m) => !m.locked);
    if (del.length) store.change(t('undo.delete', { n: del.length }), (tx) => { for (const m of del) tx.remove(m.id); });
    ST.sel = new Set();
    status([del.length ? t('delete.done', { n: del.length }) : '', locked ? t('delete.locked', { n: locked }) : ''].filter(Boolean).join(' '));
  }

  // The clipboard: markups only, never the PDF. See clip.js for what a copy keeps.
  function sharedClip() { try { return cleanClip(localStorage.getItem(CLIP_KEY)); } catch { return null; } }
  /** The newest copy: this tab's, or another tab's when that one is newer. */
  function currentClip() {
    const shared = sharedClip();
    if (!ST.clip) return shared;
    if (shared && shared.at > ST.clip.at && !(shared.source === ST.clip.source && shared.at === ST.clip.at)) return shared;
    return ST.clip;
  }
  const hasClip = () => { if (ST.clip || ST.contentClip || ST.areaClip) return true; try { return localStorage.getItem(CLIP_KEY) !== null || localStorage.getItem(CONTENT_KEY) !== null || localStorage.getItem(AREA_KEY) !== null; } catch { return false; } };
  window.addEventListener('storage', (e) => { if (e.key === CLIP_KEY || e.key === CONTENT_KEY || e.key === AREA_KEY) refreshToolbar(); });
  /** The newest copied area (0.8 D8.15): this tab's, or one another tab or app copied later (checked like a file). */
  function currentAreaClip() {
    let shared = null;
    try { const raw = localStorage.getItem(AREA_KEY); if (raw && !(ST.areaClip && raw.includes('"at":"' + ST.areaClip.at + '"'))) shared = cleanAreaClip(raw); } catch { /* none */ }
    if (!ST.areaClip) return shared;
    return shared && shared.at > ST.areaClip.at ? shared : ST.areaClip;
  }
  /** The newest copy of page content: this tab's, or another tab's when newer (checked like a file). */
  function currentContentClip() {
    let shared = null;
    try { const raw = localStorage.getItem(CONTENT_KEY); if (raw && !(ST.contentClip && raw.includes('"at":"' + ST.contentClip.at + '"') && raw.includes('"source":"' + ST.contentClip.source + '"'))) shared = cleanContentClip(raw); } catch { /* none */ }
    if (!ST.contentClip) return shared;
    return shared && shared.at > ST.contentClip.at ? shared : ST.contentClip;
  }
  /** Page content selected with the Content tool → the clipboard (0.7.1 71.6). */
  async function copyContentSel(verb = 'copy') {
    const c = await mc.baseUi.copy();
    if (!c) return false;
    ST.contentClip = c;
    ST.pasteRun = { key: '', n: 0 };
    let shared = false;
    try { localStorage.setItem(CONTENT_KEY, JSON.stringify(c)); shared = true; } catch { /* too big or a private window: this tab still has it */ }
    if (verb === 'cut') mc.baseUi.remove();
    status(t('base.' + verb + '.done' + (shared ? '' : '.local'), { n: c.n }));
    refreshToolbar();
    return true;
  }

  function copySelection(verb = 'copy') {
    if (ST.tool === 'content') { copyContentSel(verb); return true; }
    if (ST.tool === 'seltext') { ST.textSel?.copy(); return true; }
    if (ST.tool === 'areacopy') { ST.areaUi?.copy(false); return true; }
    const list = editable().filter((m) => m.scope !== 'private');   // 0.9 NOTES.1: a clip goes to localStorage in clear
    if (!list.length) { status(editable().length ? t('pnotes.nocopy') : ST.sel.size ? t('clip.' + verb + '.locked') : t('clip.' + verb + '.need')); return false; }
    ST.clip = makeClip(list, { source: mc.TAB, sheet: curKey() });
    ST.pasteRun = { key: '', n: 0 };
    let shared = false;
    try { localStorage.setItem(CLIP_KEY, JSON.stringify(ST.clip)); shared = true; } catch { /* too big or a private window: this tab still has it */ }
    status(t('clip.' + verb + '.done' + (shared ? '' : '.local'), { n: list.length }));
    refreshToolbar();
    return true;
  }
  function cutSelection() {
    if (ST.tool === 'content') { copyContentSel('cut'); return; }
    const list = editable();
    if (!copySelection('cut')) return;
    store.change(t('undo.cut', { n: list.length }), (tx) => { for (const m of list) tx.remove(m.id); });
    ST.sel = new Set();
    refreshAll();
  }
  /** A move of `px` screen pixels down and to the right, in user space (sheets may be rotated). */
  function screenStep(px) { const a = view.toUser(0, 0), b = view.toUser(px, px); return [b[0] - a[0], b[1] - a[1]]; }
  const pasteMode = () => (settings.pasteAt === 'pointer' && ST.pointer ? 'pointer' : 'offset');
  /**
   * Paste the newest copy on this sheet, as one undo step. how: 'pointer' (centered where the pointer is), 'place' (the
   * same sheet coordinates it was copied from — the same spot on this sheet, or the same place on another sheet) or
   * 'offset' (beside the copy: on the sheet it came from a step down and right, a step more each time; on another sheet
   * where it was; if that is out of view, in the middle of the view).
   */
  function paste(how = 'offset', at = null) {   // at: a stage point for 'pointer' (the context menu's "Paste here")
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    const pt = at || ST.pointer;
    const c = currentClip();
    const cc = currentContentClip();
    const ac = currentAreaClip();
    if (ac && (!c || ac.at > c.at) && (!cc || ac.at > cc.at)) { pasteArea(ac, how, pt); return; }   // an area copied last (0.8 D8.15): a picture at its size
    if (cc && (!c || cc.at > c.at)) { pasteContentClip(cc, how, pt); return; }   // page content copied last: it pastes as page content
    if (!c) { status(t('paste.empty')); return; }
    commitEdit();
    cancelOps();
    if (ST.tool !== 'select') setTool('select');
    let opts;
    if (how === 'place') opts = { delta: [0, 0] };
    else if (how === 'pointer' && pt) opts = { center: view.toUser(pt[0], pt[1]) };
    else {
      const key = c.source + '|' + c.at + '|' + s.page.key;
      ST.pasteRun = ST.pasteRun.key === key ? { key, n: ST.pasteRun.n + 1 } : { key, n: 1 };
      const steps = c.source === mc.TAB && c.sheet === s.page.key ? ST.pasteRun.n : ST.pasteRun.n - 1;
      const d = screenStep(mc.PASTE_STEP * steps);
      opts = { delta: d };
      const b = clipBounds(c.items);
      if (b) {
        const [x, y] = view.toScreen([(b[0] + b[2]) / 2 + d[0], (b[1] + b[3]) / 2 + d[1]]);
        if (!(x >= 0 && y >= 0 && x <= view.w && y <= view.h)) opts = { center: view.toUser(view.w / 2, view.h / 2) };
      }
    }
    const made = placeClip(c, { sheet: s.page.key, author: ST.author, rot: view.seenRotate, ...opts });
    const ids = [];
    store.change(t(how === 'place' ? 'undo.paste_in_place' : 'undo.paste', { n: made.length }), (tx) => { for (const m of made) ids.push(tx.add(m).id); });
    ST.sel = new Set(ids);
    refreshAll();
    status(t('paste.done.' + (how === 'place' || how === 'pointer' ? how : 'offset'), { n: made.length }) + (c.skipped ? ' ' + t('paste.skipped', { n: c.skipped }) : '') + ' ' + t('paste.undo', { n: made.length }));
  }
  /**
   * Paste a copied area (0.8 D8.15) as a picture markup at its size: the same size on paper; on a sheet with a scale, when
   * the area came from one too, the same size in the drawing (a 1:50 area on a 1:100 sheet comes in at half). An overlay
   * starts at its strength. how as paste(): 'place' = where it was copied, 'pointer', 'offset' = beside / the view's middle.
   */
  async function pasteArea(ac, how = 'offset', pt = ST.pointer) {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return false; }
    commitEdit(); cancelOps();
    if (!ST.author && !ST.askedAuthor) await askAuthor();
    if (ST.tool !== 'select') setTool('select');
    const cal = store.calibrations.get(s.page.key);
    const k = ac.real && cal ? ac.real.mmPerPx / cal.mmPerPt : ac.ptPerPx;   // points on this sheet per pixel
    const [w, h] = [ac.px[0] * k, ac.px[1] * k];
    const key = 'area|' + ac.at + '|' + s.page.key;
    ST.pasteRun = ST.pasteRun.key === key ? { key, n: ST.pasteRun.n + 1 } : { key, n: 1 };
    let center;
    if (how === 'pointer' && pt) center = view.toUser(pt[0], pt[1]);
    else {
      const d = screenStep(mc.PASTE_STEP * (ST.pasteRun.n - 1));
      const m = view.toUser(view.w / 2, view.h / 2);
      center = [m[0] + d[0], m[1] + d[1]];
    }
    const extra = ac.overlay ? { style: { ...styleFor('image'), opacity: ac.overlay.opacity } } : {};
    commitNew(newMarkup('image', { rect: placeRect(center, w, h, view.seenRotate), img: ac.src, label: ac.label || t('area.label'), subject: TYPES.image.subject }, extra), t(ac.overlay ? 'area.paste.undo.overlay' : 'area.paste.undo'));
    status(t(ac.overlay ? 'area.paste.done.overlay' : 'area.paste.done') + ' ' + t(ac.real && cal ? 'area.paste.real' : 'area.paste.paper') + ' ' + t('area.paste.lineup'));
    return true;
  }
  window.markupcraft.pasteArea = pasteArea;   // tests

  // ---- Line up a picture with two points (0.8 D8.15): a point on the picture, where it goes; a second point, where it goes ----
  function startLineUp() {
    const s = curSheet();
    const list = editable().filter((m) => m.type === 'image');
    if (!s || list.length !== 1 || ST.sel.size !== 1) { status(t('lineup.need')); return; }
    commitEdit(); cancelOps();
    if (ST.tool !== 'select') setTool('select');
    ST.lineUp = { id: list[0].id, pts: [], at: null };
    updateCursor();
    status(t('lineup.step1'));
    view.invalidate();
  }
  function lineUpClick(p) {
    if (!ST.lineUp) return;
    ST.lineUp.pts.push(p);
    const n = ST.lineUp.pts.length;
    if (n < 4) { status(t(['lineup.step2', 'lineup.step3', 'lineup.step4'][n - 1])); view.invalidate(); return; }
    const lu = ST.lineUp;
    ST.lineUp = null; updateCursor(); view.invalidate();
    applyLineUp(lu.id, lu.pts).catch((e) => { console.warn(e); status(t('lineup.failed')); });
  }
  /** Carry the picture so its two points land on theirs: scaled, moved and, when the turn is more than a hair, turned in its pixels. */
  async function applyLineUp(id, [a1, b1, a2, b2]) {
    const m = store.get(id);
    if (!m || m.type !== 'image') return;
    const scr = (q) => view.toScreen(q);
    const fit = fitTwoPoints(scr(a1), scr(a2), scr(b1), scr(b2));
    if (!fit) { status(t('lineup.same')); return; }
    const info = imageInfo(m.img);
    if (!info) return;
    const [W, H] = [info.width, info.height];
    const rw = Math.abs(m.rect[2] - m.rect[0]), rh = Math.abs(m.rect[3] - m.rect[1]);
    const swapped = Math.abs(rw / rh - W / H) > Math.abs(rw / rh - H / W);
    const k = Math.sqrt((rw * rh) / (W * H)) * fit.scale;   // points per pixel after the line-up
    const turn = Math.abs(fit.angle) > (0.1 * Math.PI) / 180;
    let img = m.img, w2 = W, h2 = H;
    if (turn) {
      [w2, h2] = turnedSize(W, H, fit.angle).map((v) => Math.max(1, Math.round(v)));
      const im = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = m.img; });
      const c = el('canvas', { width: w2, height: h2 });
      const g = c.getContext('2d');
      g.translate(w2 / 2, h2 / 2); g.rotate(fit.angle); g.drawImage(im, -W / 2, -H / 2);
      img = cleanImage(c.toDataURL('image/png'));
      if (!img) { status(t('lineup.too_big')); return; }
    }
    const c0 = scr([(m.rect[0] + m.rect[2]) / 2, (m.rect[1] + m.rect[3]) / 2]);
    const c1 = fit.map(c0);
    const center = view.toUser(c1[0], c1[1]);
    const [ww, hh] = swapped ? [h2 * k, w2 * k] : [w2 * k, h2 * k];
    const rect = [center[0] - ww / 2, center[1] - hh / 2, center[0] + ww / 2, center[1] + hh / 2];
    store.change(t('lineup.undo'), (tx) => tx.update(id, { rect, img }));
    refreshAll();
    status(t('lineup.done', { pct: Math.round(fit.scale * 100), deg: Math.round((fit.angle * 180 / Math.PI) * 10) / 10 }));
  }
  function paintLineUp(ctx) {
    const pts = [...ST.lineUp.pts, ...(ST.lineUp.at ? [ST.lineUp.at] : [])].map((q) => view.toScreen(q));
    ctx.save();
    ctx.strokeStyle = view.colors.action; ctx.fillStyle = view.colors.action; ctx.lineWidth = 1.5;
    for (let i = 0; i < pts.length; i++) {
      const [x, y] = pts[i];
      ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); if (i % 2) ctx.fill(); else ctx.stroke();
      if (i % 2) { const [px, py] = pts[i - 1]; ctx.setLineDash([4, 3]); ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke(); ctx.setLineDash([]); }
    }
    ctx.restore();
  }
  window.markupcraft.lineUp = (id, pts) => applyLineUp(id, pts);   // tests

  /** Paste page content (0.7.1 71.6): the Content tool comes on, the paste is drawn into the page and selected. */
  async function pasteContentClip(cc, how, pt = ST.pointer) {
    const s = curSheet();
    commitEdit(); cancelOps();
    if (ST.tool !== 'content') await setTool('content');
    await mc.baseUi.ready();
    const key = cc.source + '|' + cc.at + '|' + s.page.key;
    ST.pasteRun = ST.pasteRun.key === key ? { key, n: ST.pasteRun.n + 1 } : { key, n: 1 };
    const steps = how === 'offset' ? (cc.source === mc.TAB && cc.sheet === s.page.key ? ST.pasteRun.n : ST.pasteRun.n - 1) : 0;
    const [dx, dy] = screenStep(mc.PASTE_STEP * steps);
    const at = how === 'pointer' && pt ? view.toUser(pt[0], pt[1]) : view.toUser(view.w / 2, view.h / 2);
    const inView = (q) => { const [x, y] = view.toScreen(q); return x >= 0 && y >= 0 && x <= view.w && y <= view.h; };
    if (mc.baseUi.paste(cc, how, { at, step: [dx, dy], inView })) status(t('base.paste.done.' + (how === 'place' || how === 'pointer' ? how : 'offset'), { n: cc.n }));
  }

  // ---- a picture from the system clipboard (0.6 DF.6, GJoe_tx): placed as a picture markup ----
  // ---- a picture from the system clipboard (0.6 DF.6, GJoe_tx): placed as a picture markup ----
  ST.pasteWait = 0; ST.pasteHow = 'offset';
  document.addEventListener('paste', (e) => {
    const inField = mc.typing(e.target) || e.target?.closest?.('dialog');
    if (inField || !root.isConnected) return;
    const waiting = !!ST.pasteWait;
    clearTimeout(ST.pasteWait); ST.pasteWait = 0;
    const item = [...(e.clipboardData?.items || [])].find((it) => it.kind === 'file' && /^image\/(png|jpeg)$/.test(it.type));
    const file = item?.getAsFile();
    if (file) { e.preventDefault(); pastePicture(file); return; }
    if (waiting) paste(ST.pasteHow);
  }, true);
  async function pastePicture(file) {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return false; }
    commitEdit(); cancelOps();
    if (!ST.author && !ST.askedAuthor) await askAuthor();
    // a picture the Copy area tool put on the clipboard (same size, copied lately): pasted at its size, as an overlay if it was one
    const ac = currentAreaClip();
    if (ac) {
      let wh = null;
      try { const bm = await createImageBitmap(file); wh = [bm.width, bm.height]; bm.close?.(); } catch { /* not a picture the browser reads */ }
      if (wh && sameImage(ac, wh[0], wh[1])) { pasteArea(ac, pasteMode(), ST.pointer); return true; }
    }
    status(t('image.loading'));
    const src = await pictureFrom(file);
    const info = src ? imageInfo(src) : null;
    if (!info) { status(t('pic.paste.bad')); return false; }
    if (ST.tool !== 'select') setTool('select');
    const center = ST.pointer ? view.toUser(ST.pointer[0], ST.pointer[1]) : view.toUser(view.w / 2, view.h / 2);
    const [w, h] = fitBox(info.width, info.height, 216, 216);   // at most 3 in either way; resize it like any picture
    commitNew(newMarkup('image', { rect: placeRect(center, w, h, view.seenRotate), img: src, label: t('pic.paste.label'), subject: TYPES.image.subject }), t('pic.paste.undo'));
    status(t('pic.paste.done'));
    return true;
  }
  /** Edit › More › Paste a picture: the browser may ask first. */
  async function pastePictureMenu() {
    if (!navigator.clipboard?.read) { status(t('pic.paste.no_api')); return; }
    let items;
    try { items = await navigator.clipboard.read(); } catch { status(t('pic.paste.denied')); return; }
    for (const it of items) {
      const type = it.types.find((x) => /^image\/(png|jpeg)$/.test(x));
      if (type) { const blob = await it.getType(type); await pastePicture(new File([blob], 'pasted.' + (type === 'image/png' ? 'png' : 'jpg'), { type })); return; }
    }
    status(t('pic.paste.none'));
  }
  window.markupcraft.pastePicture = pastePicture;   // tests

  /** Copies of the selection a step down and right, as one undo step. The clipboard is left as it was. */
  function duplicate() {
    if (ST.tool === 'content') {   // page content: a copy beside it; the clipboard is left as it was
      mc.baseUi.copy().then((cc) => { if (cc && mc.baseUi.paste(cc, 'offset', { step: screenStep(mc.PASTE_STEP) })) status(t('base.dup.done', { n: cc.n })); });
      return;
    }
    const s = curSheet();
    const list = editable();
    if (!s || !list.length) { status(ST.sel.size ? t('dup.locked') : t('dup.need')); return; }
    commitEdit();
    cancelOps();
    const made = placeClip(makeClip(list, { source: mc.TAB, sheet: s.page.key }), { sheet: s.page.key, author: ST.author, rot: view.seenRotate, delta: screenStep(mc.PASTE_STEP) });
    const ids = [];
    store.change(t('undo.duplicate', { n: made.length }), (tx) => { for (const m of made) ids.push(tx.add(m).id); });
    ST.sel = new Set(ids);
    refreshAll();
    status(t('dup.done', { n: made.length }));
  }
  function selectAll() {
    if (!curSheet()) return;
    if (ST.tool === 'content') { const all = mc.baseUi.objects() || []; mc.baseUi.select(all.map((x) => x.key)); status(t('base.selected', { n: all.length })); return; }
    if (ST.tool === 'seltext') { ST.textSel?.selectAll(); return; }
    ST.sel = new Set(pickable().map((m) => m.id));
    refreshSelection();
    status(ST.sel.size ? t('select.all', { n: ST.sel.size }) : t('select.all.none'));
  }

  return { undo, redo, editable, cleanPenMarkups, deleteSelection, currentClip, hasClip, copySelection, cutSelection, pasteMode, paste, startLineUp, lineUpClick, paintLineUp, pastePictureMenu, duplicate, selectAll };
}
