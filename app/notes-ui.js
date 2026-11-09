/* SPDX-License-Identifier: Apache-2.0 */
/**
 * notes-ui.js — notes, the pasteboard and private notes (0.9 NOTES.1): the section at the top of the Notes tab, the passphrase
 * dialogs, the Properties control and the small tags on the sheet. Words from i18n; the sealing is lib/notes/private-notes.js.
 *
 *   A note (scope 'note')       shows and hides with one switch; never prints; other PDF readers do not show it, but it is in the
 *                               saved file for anyone with MarkupCraft. Save a clean copy takes it out.
 *   A private note ('private')  the same, sealed with the writer's passphrase: in the file only as ciphertext, never in clear
 *                               anywhere but this screen. Not sent to Live, assistants, the clipboard or any export.
 *   The pasteboard              the desk around the sheet. A markup wholly on it counts as a note (store.offPage), whatever it is.
 *
 * Store: all()/onSheet() are regular markups only, so everything that leaves the app leaves these out by default (model.js).
 * A file's own sealed blobs that this person cannot open stay on `file.sealed` and are written back untouched.
 *
 * A host that keeps a project (SuperCad Studio) sets window.ccPrivateNotesStore = { read(uid) → [blob], write(uid, [blob]) } before files open. Then a
 * saved PDF holds no private notes at all, not even sealed: only a random `uid` naming them, and the host files the sealed blobs in the project.
 * `file.storeBlobs` = what the store holds that this person cannot open; blobs that arrived inside a PDF move to the store once opened and saved.
 *
 *   installNotes(o) → { takeFiled(), adopt(file), packFor(file, remap), stateFor(file), restore(file, st), ready, keychain, toggle(on?), setScope(list, scope),
 *                       scopeControl(list), paintTags(ctx), showBoard(), placeSnapshot(clip), lock(), sync() }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { clone, roughBox } from './model.js';
import { noteFromData } from './pdf-read.js';
import { createKeychain, MIN_PASS } from './private-notes.js';

const LS = 'markupcraft.notesShown';

export function installNotes({ root, store, view, status, dialog, files, curSheet, sheetTitle, author, tname, jumpTo, setTool, clearSelection, saveClean, storage = null }) {
  const keychain = createKeychain(storage ? { storage } : {});
  try { store.notesShown = localStorage.getItem(LS) !== '0'; } catch { /* no storage: shown */ }

  // ---- files ---------------------------------------------------------------------------------------------------------------
  const hostStore = () => window.ccPrivateNotesStore || null;
  let filed = false;
  /** A file's notes in clear, and its private notes as one new sealed blob (null: none). Sealing failing fails the save. */
  async function sealMine(f, remap) {
    const notes = [], mine = [];
    for (const pg of f.pages) {
      const i = remap ? remap(pg.index) : pg.index;
      if (i < 0) continue;
      for (const m of store.everyOn(pg.key)) {
        if (m.type === 'foreign' || store.isShared(m)) continue;
        if (m.scope === 'private') mine.push({ ...clone(m), sheet: i, v: 1 });
        else notes.push({ ...clone(m), scope: 'note', sheet: i, v: 1 });
      }
    }
    return { notes, blob: mine.length ? await keychain.sealPayload({ writer: author() || '', markups: mine }) : null };
  }
  /** What a file saves. `persist` (a real save or page operation): with a host store, private notes go there and the PDF gets only their uid. Otherwise they stay with the file. */
  async function packFor(f, remap = null, { persist = true } = {}) {
    const { notes, blob } = await sealMine(f, remap);
    const hs = hostStore();
    if (hs && persist) {
      const stored = [...(f.storeBlobs || []), ...(blob ? [blob] : [])];
      if (stored.length && !f.notesUid) f.notesUid = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, '0')).join('');
      if (f.notesUid) await hs.write(f.notesUid, stored);
      if (stored.length) filed = true;
      return { notes, sealed: [...(f.sealed || [])], uid: stored.length ? f.notesUid : null };
    }
    return { notes, sealed: [...(f.sealed || []), ...(blob ? [blob] : [])] };
  }
  /** Were private notes just filed with the host? Once. */
  const takeFiled = () => { const v = filed; filed = false; return v; };
  /** Open what this person can of a file's sealed notes; they become private markups, unsaved work does not change. */
  async function adopt(f) {
    await ready;
    const hs = hostStore();
    if (hs && f.storeBlobs === undefined) { try { f.storeBlobs = f.notesUid ? await hs.read(f.notesUid) : []; } catch { f.storeBlobs = []; } }
    if (keychain.state !== 'open' || !(f.sealed?.length || f.storeBlobs?.length)) { sync(); return 0; }
    let n = 0;
    const add = [];
    const openAll = async (list) => {
      const left = [];
      for (const blob of list || []) {
        const p = await keychain.openPayload(blob);
        if (!p || !Array.isArray(p.markups)) { left.push(blob); continue; }
        for (const d of p.markups) {
          const key = (f.pages[d?.sheet] || f.pages[f.pages.length - 1])?.key;   // a sealed note stays put when pages were moved without it: at worst on the last page
          const m = key ? noteFromData(d, key, 'private') : null;
          if (m && !store.markups.has(m.id)) { add.push(m); n++; }
        }
      }
      return left;
    };
    f.sealed = await openAll(f.sealed);
    if (f.storeBlobs) f.storeBlobs = await openAll(f.storeBlobs);
    if (add.length) store.load(add);
    sync();
    return n;
  }
  const stateFor = async (f) => { try { const { notes, sealed } = await packFor(f, null, { persist: false }); return { boardNotes: notes, sealed }; } catch { return { boardNotes: [], sealed: f.sealed || [] }; } };
  /** A recovered copy: its notes and sealed blobs replace what the file held. */
  async function restore(f, st) {
    const add = [];
    for (const d of Array.isArray(st?.boardNotes) ? st.boardNotes : []) { const pg = f.pages[d?.sheet]; const m = pg ? noteFromData(d, pg.key, 'note') : null; if (m) add.push(m); }
    if (add.length) store.load(add);
    if (Array.isArray(st?.sealed)) f.sealed = st.sealed;
    await adopt(f);
  }
  const allBlobs = () => files().flatMap((f) => [...(f.sealed || []), ...(f.storeBlobs || [])]);
  async function adoptAll() { let n = 0; for (const f of files()) n += await adopt(f); return n; }

  // ---- the passphrase ------------------------------------------------------------------------------------------------------
  function passBody(setup) {
    const pass = el('input', { type: 'password', className: 'mc-input', id: 'mc-pn-pass', autocomplete: setup ? 'new-password' : 'current-password', dataset: { pnPass: '' } });
    const again = setup ? el('input', { type: 'password', className: 'mc-input', id: 'mc-pn-again', autocomplete: 'new-password', dataset: { pnAgain: '' } }) : null;
    const rem = el('input', { type: 'checkbox', id: 'mc-pn-rem', checked: true, dataset: { pnRemember: '' } });
    return { pass, again, rem, body: [
      el('label', { for: 'mc-pn-pass' }, t('pnotes.pass.label')), pass,
      ...(again ? [el('label', { for: 'mc-pn-again' }, t('pnotes.pass.again')), again] : []),
      el('label', { for: 'mc-pn-rem', className: 'mc-radio' }, rem, ' ', t('pnotes.pass.remember')),
      el('p', { className: 'mc-note' }, t(setup ? 'pnotes.pass.warn' : 'pnotes.pass.remember.note')),
    ] };
  }
  /** Turn private notes on, or unlock them. True when they are open. */
  async function ensureOpen() {
    await ready;
    if (keychain.state === 'open') return true;
    const setup = keychain.state === 'off';
    const b = passBody(setup);
    const r = await dialog({ title: t(setup ? 'pnotes.setup.title' : 'pnotes.unlock.title'), text: t(setup ? 'pnotes.setup.text' : 'pnotes.unlock.text'), body: b.body, submit: 'ok',
      buttons: [['cancel', t('dlg.cancel')], ['ok', t(setup ? 'pnotes.setup.ok' : 'pnotes.unlock.ok'), 'btn-plot']],
      check: () => (b.pass.value.length < MIN_PASS ? t('pnotes.pass.short', { n: MIN_PASS }) : b.again && b.again.value !== b.pass.value ? t('pnotes.pass.differ') : '') });
    if (r.key !== 'ok') return false;
    status(t('pnotes.working'));
    const res = await keychain.unlock(b.pass.value, { remember: b.rem.checked, blobs: allBlobs() });
    if (!res.ok) { status(t('pnotes.pass.wrong')); return ensureOpen(); }
    const n = await adoptAll();
    status(n ? t('pnotes.opened', { n }) : t('pnotes.ready'));
    sync();
    return true;
  }
  /** Notes sealed on another device or under another passphrase of this person's: the passphrase opens them too. */
  async function openMore() {
    if (!await ensureOpen()) return;
    const b = passBody(false);
    b.rem.closest('label').hidden = true; b.body[b.body.length - 1].hidden = true;
    const r = await dialog({ title: t('pnotes.more.title'), text: t('pnotes.more.text'), body: b.body, submit: 'ok', buttons: [['cancel', t('dlg.cancel')], ['ok', t('pnotes.unlock.ok'), 'btn-plot']] });
    if (r.key !== 'ok') return;
    status(t('pnotes.working'));
    const added = await keychain.addPassphrase(b.pass.value, allBlobs());
    const n = added ? await adoptAll() : 0;
    status(n ? t('pnotes.opened', { n }) : t('pnotes.more.none'));
    sync();
  }
  /** Seal this person's notes back into their files and out of memory, undo history included. */
  async function lock() {
    for (const f of files()) {
      const { blob } = await sealMine(f);
      if (blob) { if (hostStore()) (f.storeBlobs ||= []).push(blob); else (f.sealed ||= []).push(blob); }
      for (const pg of f.pages) for (const m of store.everyOn(pg.key)) if (m.scope === 'private') store.markups.delete(m.id);
    }
    store.undoStack = []; store.redoStack = [];
    if (store.defaultScope === 'private') store.defaultScope = undefined;
    clearSelection();
    await keychain.lock();
    store.emit('load');
    status(t('pnotes.locked'));
    sync();
  }
  async function forget() {
    const r = await dialog({ title: t('pnotes.forget.title'), text: t('pnotes.forget.text'), buttons: [['cancel', t('dlg.cancel')], ['ok', t('pnotes.forget.ok'), 'btn-danger']] });
    if (r.key !== 'ok') return;
    if (keychain.state === 'open') await lock();
    await keychain.forget();
    status(t('pnotes.forgotten'));
    sync();
  }

  // ---- show, hide, what a markup is ------------------------------------------------------------------------------------------
  function toggle(on = !store.notesShown) {
    store.notesShown = !!on;
    try { localStorage.setItem(LS, on ? '1' : '0'); } catch { /* still works this session */ }
    if (!on) clearSelection();
    view.invalidate(true);
    status(t(on ? 'pnotes.shown' : 'pnotes.hidden'));
    sync();
  }
  async function setScope(list, scope) {
    const ms = list.filter((m) => m && !m.locked && m.type !== 'foreign');
    if (!ms.length) return false;
    if (scope === 'private' && !await ensureOpen()) { sync(); return false; }
    store.change(t('pnotes.undo'), (tx) => { for (const m of ms) tx.update(m.id, { scope: scope || null }); });
    if (scope && !store.notesShown) toggle(true);
    return true;
  }
  const scopeSelect = (id, value, onPick) => el('select', { id, className: 'mc-select', onchange: (e) => onPick(e.target.value) },
    ...[['', 'pnotes.scope.regular'], ['note', 'pnotes.scope.note'], ['private', 'pnotes.scope.private']].map(([v, k]) => el('option', { value: v, selected: value === v }, t(k))));
  /** The Properties control for what the selection is. */
  function scopeControl(list) {
    const vals = new Set(list.map((m) => m.scope || ''));
    const sel = scopeSelect('mc-pn-scope', vals.size === 1 ? [...vals][0] : '', async (v) => { if (!await setScope(list, v)) sel.value = vals.size === 1 ? [...vals][0] : ''; });
    sel.dataset.pnScope = '';
    return el('div', { className: 'mc-flat' }, el('label', { for: 'mc-pn-scope' }, t('pnotes.scope.label')), sel);
  }

  // ---- the pasteboard ------------------------------------------------------------------------------------------------------
  function boardBox() {
    const s = curSheet();
    if (!s) return null;
    const [x0, y0, x1, y1] = s.page.view;
    const mx = (x1 - x0) * 0.4, my = (y1 - y0) * 0.08;
    const box = [x0 - mx, y0 - my, x1 + mx, y1 + my];
    for (const m of store.everyOn(s.page.key)) {
      if (store.isShared(m)) continue;
      const b = roughBox(m);
      if (b) { box[0] = Math.min(box[0], b[0]); box[1] = Math.min(box[1], b[1]); box[2] = Math.max(box[2], b[2]); box[3] = Math.max(box[3], b[3]); }
    }
    return box;
  }
  function showBoard() {
    const b = boardBox();
    if (!b) { status(t('need.pdf')); return; }
    if (!store.notesShown) toggle(true);
    view.zoomTo(b, 0.95);
  }
  /** A picture of part of the sheet (Copy area's clip), set beside the sheet at its size on paper, under what is already there. */
  function placeSnapshot(clip) {
    const s = curSheet();
    if (!s || !clip) return null;
    const v = s.page.view, gap = 18;
    const w = clip.px[0] * clip.ptPerPx, h = clip.px[1] * clip.ptPerPx;
    let top = v[3];
    for (const m of store.everyOn(s.page.key)) {
      const b = roughBox(m);
      if (b && b[0] > v[2]) top = Math.min(top, b[1] - gap);
    }
    const rect = [v[2] + gap, top - h, v[2] + gap + w, top];
    let made = null;
    store.change(t('pnotes.undo.snapshot'), (tx) => { made = tx.add({ sheet: s.page.key, type: 'image', rect, img: clip.src, author: author() || '', scope: store.defaultScope === 'private' ? 'private' : 'note' }); });
    showBoard();
    status(t('pnotes.snapshot.done'));
    return made;
  }

  // ---- on the sheet --------------------------------------------------------------------------------------------------------
  function paintTags(ctx) {
    if (!store.notesShown) return;
    const key = curSheet()?.page.key;
    if (!key) return;
    for (const m of store.everyOn(key)) {
      if (store.isShared(m) || m.type === 'foreign' || !store.shown(m)) continue;
      const b = roughBox(m);
      if (!b) continue;
      const [x, y] = view.toScreen([b[0], b[3]]);
      const priv = m.scope === 'private', text = t(priv ? 'pnotes.tag.private' : 'pnotes.tag.note');
      ctx.save();
      ctx.font = '600 10px system-ui, sans-serif';   // i18n-ignore
      const w = ctx.measureText(text).width + 8;
      ctx.fillStyle = priv ? '#6d3fc4' : '#9a6a00';
      ctx.fillRect(x, y - 15, w, 14);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(text, x + 4, y - 4.5);
      ctx.restore();
    }
  }

  // ---- the panel -----------------------------------------------------------------------------------------------------------
  const box = root.querySelector('[data-pnotes]');
  const showBox = el('input', { type: 'checkbox', id: 'mc-pn-show', dataset: { pnShow: '' }, onchange: (e) => toggle(e.target.checked) });
  const newSel = scopeSelect('mc-pn-new', '', async (v) => {
    if (v === 'private' && !await ensureOpen()) { newSel.value = store.defaultScope || ''; return; }
    store.defaultScope = v || undefined;
    if (v && !store.notesShown) toggle(true);
    status(t('pnotes.new.' + (v || 'regular')));
    sync();
  });
  newSel.dataset.pnNew = '';
  const lockLine = el('p', { className: 'mc-muted', dataset: { pnState: '' }, role: 'status' });
  const btn = (act, icon, key, onclick, cls = 'btn-line') => el('button', { type: 'button', className: cls + ' btn-sm-cc', dataset: { pnAct: act }, onclick }, el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' }), ' ', t(key));
  const unlockBtn = btn('unlock', 'bi-unlock', 'pnotes.unlock.btn', () => ensureOpen());
  const lockBtn = btn('lock', 'bi-lock', 'pnotes.lock.btn', () => lock());
  const moreBtn = btn('more', 'bi-key', 'pnotes.more.btn', () => openMore());
  const forgetBtn = btn('forget', 'bi-x-circle', 'pnotes.forget.btn', () => forget());
  const list = el('ol', { className: 'mc-list mc-act', dataset: { pnList: '' } });
  box?.append(
    el('div', { className: 'mc-pn-row' }, el('label', { for: 'mc-pn-show', className: 'mc-radio' }, showBox, ' ', t('pnotes.show'))),
    el('p', { className: 'mc-note' }, t('pnotes.about')),
    el('label', { for: 'mc-pn-new' }, t('pnotes.new.label')), newSel,
    el('div', { className: 'mc-actions' }, btn('board', 'bi-aspect-ratio', 'pnotes.board', () => showBoard()), btn('snap', 'bi-camera', 'pnotes.snapshot', () => setTool('areacopy'))),
    el('h3', { className: 'mc-h' }, t('pnotes.private.h')),
    lockLine,
    el('div', { className: 'mc-actions' }, unlockBtn, lockBtn, moreBtn, forgetBtn),
    el('h3', { className: 'mc-h' }, t('pnotes.send.h')),
    el('p', { className: 'mc-note' }, t(hostStore() ? 'pnotes.send.note.project' : 'pnotes.send.note')),
    el('div', { className: 'mc-actions' }, btn('clean', 'bi-file-earmark-check', 'pnotes.clean', () => saveClean())),
    el('h3', { className: 'mc-h' }, t('pnotes.list.h')),
    list,
  );
  function sync() {
    const mine = store.everything().filter((m) => m.type !== 'foreign' && !store.isShared(m));
    showBox.checked = store.notesShown;
    newSel.value = store.defaultScope || '';
    const st = keychain.state;
    lockLine.textContent = t('pnotes.state.' + st, { n: mine.filter((m) => m.scope === 'private').length });
    unlockBtn.hidden = st === 'open';
    unlockBtn.lastChild.textContent = ' ' + t(st === 'off' ? 'pnotes.setup.btn' : 'pnotes.unlock.btn');
    lockBtn.hidden = moreBtn.hidden = st !== 'open';
    forgetBtn.hidden = st === 'off';
    list.replaceChildren(...(mine.length ? mine.map((m) => el('li', { dataset: { pnRow: m.scope === 'private' ? 'private' : 'note' } },
      el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { if (!store.notesShown) toggle(true); jumpTo(m.id); } },
        el('i', { className: 'bi ' + (m.scope === 'private' ? 'bi-lock-fill' : 'bi-sticky'), 'aria-hidden': 'true' }), ' ',
        String(m.text || m.label || m.comment || tname(m.type)).slice(0, 80), ' ', el('span', { className: 'mc-muted' }, sheetTitle(m.sheet))))) : [el('li', { className: 'mc-muted' }, t('pnotes.list.empty'))]));
    for (const b of root.querySelectorAll('.mc-nav [data-act="notes-toggle"]')) {
      b.setAttribute('aria-pressed', String(store.notesShown));
      const i = b.querySelector('i'); if (i) i.className = 'bi ' + (store.notesShown ? 'bi-eye' : 'bi-eye-slash');
      b.title = t(store.notesShown ? 'nav.notes.on.title' : 'nav.notes.off.title', { n: mine.length });
    }
  }
  let queued = false;
  store.on(() => { if (!queued) { queued = true; queueMicrotask(() => { queued = false; sync(); }); } });
  const ready = keychain.load().catch(() => 'off').then(() => { sync(); });
  return { takeFiled, adopt, packFor, stateFor, restore, ready, keychain, toggle, setScope, scopeControl, paintTags, showBoard, placeSnapshot, lock, ensureOpen, sync };
}
