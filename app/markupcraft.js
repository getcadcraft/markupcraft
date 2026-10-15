/* SPDX-License-Identifier: Apache-2.0 */
/**
 * markupcraft.js — MarkupCraft in the browser: review and mark up PDF plan sets. Wires the page
 * (ui.inc) to the markups (model.js), the sheet view (view.js), reading and writing PDFs
 * (pdf-read.js / pdf-write.js) and the panels.
 *
 * Mouse: the chosen tool draws; Select picks (click, Shift+click adds, drag a window: left to right =
 * fully inside, right to left = touching), drags to move, grips resize. Wheel zooms at the cursor;
 * drag with the wheel, hold Space, or use Pan to move the sheet. Double-click edits a markup's text.
 * Touch: one finger draws and selects; two fingers pinch-zoom about their middle and pan; tools that act
 * on a press (count, note, polyline points) act when the finger lifts, so a pinch never leaves a mark.
 * Keyboard: V H P I L A R E Y G C (Shift+C freeform) K T N S M Q (area) U (count) pick tools; Esc cancels; Enter
 * finishes a polyline; Delete removes; arrows nudge; Ctrl+Z/Y/S/O/A; Page Up/Down; Ctrl+0/9 fit.
 * Edit (toolbar Undo, Redo, Copy, Paste + the More menu): Ctrl+X cut, Ctrl+C copy, Ctrl+V paste (at the pointer when it
 * is on the sheet, else beside the copy — Settings › MarkupCraft › Paste), Ctrl+Shift+V paste in place (same sheet
 * coordinates, on this sheet or another), Ctrl+D duplicate (beside the original; the clipboard is left alone). Each is one
 * undo step. The clipboard (clip.js) is kept in memory and in localStorage "markupcraft.clipboard" so another tab can
 * paste; what is read back is checked like a file.
 * Settings › MarkupCraft (settings.inc): your name (markupcraft.author), color and line weight of new markups, where
 * Ctrl+V pastes, the unit lengths are offered in, the position readout in inches or millimeters (markupcraft.settings).
 *
 * Files open on this computer (picker or drop, several at once). Saving downloads
 * "<name> (marked up).pdf"; nothing is uploaded. `window.markupcraft` exposes the state for tests.
 */

import { el, bytes as fmtBytes, frame, download, shortDate, dateTime } from './ui-util.js';
import { Store, makeMarkup, cleanLayerName, TYPES, STATUSES, PUNCH_STATUSES, STAMPS, stamps, stampLabel, defaultStyle, stampColor, clone, nowIso, statusReply, cleanReply } from './model.js';
import { View, PX_PER_PT, hexRgb, mix } from './view.js';
import { displayOf, boundsOf, pick, pickWindow, grips, applyGrip, moveBy, simplify, snap45, squareFrom, BOX_TYPES, similarity, apply as applyT, inv } from './geom.js';
import { shapes, NOTE_SIZE, stampSub, frame as textFrame } from './shapes.js';
import { textWidth, wrapText, SCREEN_FONT } from './font.js';
import { openPdf, closePdf, sheetInfo } from './pdf-read.js';
import { writeMarkedUp } from './pdf-write.js';
import { matchSheets, carryMarkups, supersededStamp, sheetNoKey } from './slip.js';
import { Autosave } from "./app-autosave.js";
import { getHost } from "./host.js";
import { handoffParam, takeHandoff, sendHandoff } from "./handoff.js";
import { textIndex, findHits, hitCloud, rangeBox } from './textsearch.js';
import { arcThrough, arcLength, angleAt, formatAngle } from './arcs.js';
import { holeProblem } from './holes.js';
import { spaceOf } from './spaces.js';
import { sketchPoint } from './sketch.js';
import { TYPES_OF_COLUMN, newColumnKey, compareBy, fieldOk } from './columns.js';
import { pageSegments, diffSegments, clusters } from './vecdiff.js';
import { legendRows, rowsKey } from './legend.js';
import { fromSheets, count, cleanBookmarks } from './bookmarks.js';
import { linkTarget, calloutRefs } from './link.js';
import { cleanImage, imageInfo, fitBox, placeRect } from './imagestamp.js';
import { summarySheets, summaryPdf } from './summary.js';
import { readBcf, planImport } from './bcf-read.js';
import { writeXlsx } from './xlsx.js';
import { rotatePages, deletePages, movePages, insertPages, insertBlank, extractPages, parsePageList, orderDelete } from './pages.js';
import { PAPERS, ORIENTS, GRIDS, MAX_PAGES, cleanBlank, blankPdf, untitledName } from './blank.js';
import { measure, measureArea, parseLength, calibrationFrom, presetCalibration, SCALE_PRESETS, UNITS } from './units.js';
import { buildBcf, guidFor } from './bcf.js';
import { DEFAULT_CHEST, parseChest, mergeChest, exportChest, toolFromMarkup, cleanTool } from './chest.js';
import { toCsv, markupRows, punchRows } from './csv.js';
import { alignment } from './compare.js';
import { CLIP_KEY, makeClip, cleanClip, clipBounds, placeClip } from './clip.js';
import { t } from './i18n.js';
import { installAgents } from './agents.js';
import { startAddons, columnsNow } from './addons/markupcraft-api.js';
import { panButton, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's wheel and pan buttons (input-markupcraft.js)

const DRAW_TOOLS = new Set(['pen', 'highlight', 'line', 'arrow', 'arc', 'angle', 'rect', 'ellipse', 'polyline', 'polygon', 'cloudrect', 'cloud', 'callout', 'text', 'note', 'stamp', 'measure', 'area', 'count']);
const NEEDS_SCALE = new Set(['measure', 'area']);
const KIND = {
  pen: 'free', highlight: 'free', line: 'two', arrow: 'two', measure: 'two', calibrate: 'two',
  rect: 'box', ellipse: 'box', cloudrect: 'box', text: 'box', stamp: 'box',
  arc: 'three', angle: 'three',   // three clicks (0.4 K4)
  polyline: 'poly', polygon: 'poly', cloud: 'poly', area: 'poly', callout: 'callout', note: 'note', count: 'count',
};
const KEYS = { o: 'arc', x: 'angle', v: 'select', h: 'pan', p: 'pen', i: 'highlight', l: 'line', a: 'arrow', r: 'rect', e: 'ellipse', y: 'polyline', g: 'polygon', c: 'cloudrect', k: 'callout', t: 'text', n: 'note', s: 'stamp', m: 'measure', q: 'area', u: 'count' };
const TYPE_ICON = { image: 'image', arc: 'bezier2', angle: 'triangle', pen: 'pencil', highlight: 'highlighter', line: 'slash-lg', arrow: 'arrow-up-right', rect: 'square', ellipse: 'circle', polyline: 'activity', polygon: 'pentagon', cloudrect: 'cloud', cloud: 'cloud-haze2', callout: 'chat-left-text', text: 'fonts', note: 'sticky', stamp: 'patch-check', measure: 'arrows', area: 'bounding-box', count: 'hash', foreign: 'lock' };
const TEXT_TYPES = new Set(['text', 'callout']);
const LS = { settings: 'markupcraft.settings', author: 'markupcraft.author', chest: 'markupcraft.chest' };
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } };
// Settings › MarkupCraft (settings.inc). markColor '' = each tool's own red; weight scales the line width of the same tools.
const SET_DEFAULTS = { markColor: '', weight: 'normal', pasteAt: 'pointer', unit: 'ft-in', posUnit: 'in' };
const COLOR_TYPES = new Set(['pen', 'line', 'arrow', 'rect', 'ellipse', 'polyline', 'polygon', 'cloudrect', 'cloud', 'callout', 'text']);
const WEIGHTS = { thin: 0.5, normal: 1, heavy: 1.5 };
const PASTE_STEP = 12;        // screen pixels down and right for "beside the copy" (each paste of the same copy steps again)
const TAB = 'tab-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
// Display names: markup types, statuses and punch statuses are stored in English (file data); these say them in the UI.
const tname = (type) => t('type.' + type);               // as a label ("Cloud")
const tlow = (type) => t('type.' + type + '.lower');     // inside a sentence ("cloud")
const stname = (s) => t('status.' + String(s).toLowerCase());
const pstname = (s) => t('punch.status.' + String(s).toLowerCase().replace(/ /g, '_'));
/** An undo label inside a sentence ("Undid delete markup."): first letter lowered for the page's language. */
const lowFirst = (s) => (s ? s.charAt(0).toLocaleLowerCase(document.documentElement.lang || undefined) + s.slice(1) : s);

function init(root) {
  const $ = (s) => root.querySelector(s);
  // Panels may move to the panels window (shell app-panels.js), out of root's reach: late lookups search them too.
  const asides = [...root.children].filter((c) => c.tagName === 'ASIDE');
  const findAll = (s) => [root, ...asides.filter((a) => !root.contains(a))].flatMap((n) => [...n.querySelectorAll(s)]);
  const find = (s) => findAll(s)[0] || null;
  const ui = {
    base: $('[data-base]'), over: $('[data-over]'), stage: $('[data-stage]'), canvases: $('[data-canvases]'), edit: $('[data-edit]'),
    hint: $('[data-hint]'), drop: $('[data-drop]'), busy: $('[data-busy]'), busyText: $('[data-busy-text]'), legend: $('[data-legend]'),
    file: $('[data-file]'), chestFile: $('[data-chest-file]'),
    sheets: $('[data-sheets]'), sheetsEmpty: $('[data-sheets-empty]'), sheetSearch: $('[data-sheet-search]'), sheetCount: $('[data-sheet-count]'),
    sheetLabel: $('[data-sheet-label]'), zoom: $('[data-zoom]'),
    props: $('[data-props]'), propsH: $('[data-props-h]'),
    list: $('[data-list]'), listCount: $('[data-list-count]'), punch: $('[data-punch]'), chest: $('[data-chest]'),
    cmpOld: $('[data-cmp="old"]'), cmpNew: $('[data-cmp="new"]'), cmpTools: $('[data-cmp-tools]'), cmpBalance: $('[data-cmp-balance]'), cmpStep: $('[data-cmp-step]'), cmpStatus: $('[data-cmp-status]'),
    coords: $('[data-coords]'), status: $('[data-status]'), scale: $('[data-scale]'), author: $('[data-author]'),
  };

  // ---- state ----
  const store = new Store();
  const view = new View(ui.canvases, ui.base, ui.over);
  const files = [];
  let fileSeq = 0;
  let sheets = [];            // [{ file, page }]
  let cur = -1;
  let sel = new Set();
  let tool = 'select';
  let toolPreset = null;      // a tool chest tool in use: { style, subject, label, text }
  let drag = null;            // the pointer operation in progress
  let pending = null;         // two-click / polyline state between clicks
  let hoverId = null;
  let editing = null;         // { id | null (new), m (markup being edited), field }
  let clip = null;            // this tab's last copy (clip.js); another tab's newer copy comes from localStorage
  let pasteRun = { key: '', n: 0 };   // repeated "beside the copy" pastes of one copy on one sheet step further each time
  let pointer = null;         // the mouse/pen position over the sheet [x, y], or null when it is elsewhere
  let spaceDown = false;
  let libs = null;
  const viewStates = new Map();
  const settings = (() => {
    const v = lsGet(LS.settings, {});
    const out = { styles: {}, stamp: STAMPS[0], ...(v && typeof v === 'object' ? v : {}), ...SET_DEFAULTS };
    if (!v || typeof v !== 'object') return out;
    if (/^#[0-9a-f]{6}$/i.test(v.markColor)) out.markColor = v.markColor.toLowerCase();
    if (Object.hasOwn(WEIGHTS, v.weight)) out.weight = v.weight;
    if (v.pasteAt === 'pointer' || v.pasteAt === 'offset') out.pasteAt = v.pasteAt;
    if (UNITS.some(([u]) => u === v.unit)) out.unit = v.unit;
    if (v.posUnit === 'in' || v.posUnit === 'mm') out.posUnit = v.posUnit;
    if (!out.styles || typeof out.styles !== 'object') out.styles = {};
    return out;
  })();
  // Your name on markups (0.5 SI.9): signed in, it is your account's (host.account(), wired after Settings below) with no
  // dialog; a name typed here (Settings, or the name dialog) wins until it is cleared. Signed out: the dialog, as before.
  let typedAuthor = String(lsGet(LS.author, '') || '');
  let accountName = '';
  let author = typedAuthor;
  let authorOther = false;   // Settings: "Use another name" opened the name box while signed in
  let askedAuthor = false;
  let chest = (() => { const c = lsGet(LS.chest, null); return Array.isArray(c) ? c.map(cleanTool).filter(Boolean) : DEFAULT_CHEST.slice(); })();
  const cmp = { mode: 'picture', vec: null, on: false, oldKey: '', newKey: '', dx: 0, dy: 0, fit: null, balance: 0.5, aligning: null };
  const filters = { sheet: '', author: '', status: '', type: '', layer: '', space: '', field: '' };

  const saveSettings = () => lsSet(LS.settings, { styles: settings.styles, stamp: settings.stamp, countLabel: settings.countLabel,
    markColor: settings.markColor, weight: settings.weight, pasteAt: settings.pasteAt, unit: settings.unit, posUnit: settings.posUnit });
  let afterCalibrate = 'measure';

  // the menu styles (0.5 IP.3, input-markupcraft.js + the shell's app-input-ui.js): messages to the status bar; letters stay
  // the text box's while a markup's text is being typed
  window.ccInputHooks = { status: (text) => status(text || ''), busy: () => !!editing };
  window.markupcraft = { store, view, files, get sheets() { return sheets; }, get cur() { return cur; }, get sel() { return sel; }, get tool() { return tool; }, setTool, goTo, openFiles, saveFiles, cmp, settings, get author() { return author; }, clip: () => currentClip(), styleFor: (t) => styleFor(t), status: (s) => status(s) };

  // ---- helpers ----
  const curSheet = () => sheets[cur] || null;
  const curKey = () => curSheet()?.page.key || '';
  const sheetByKey = (key) => sheets.find((s) => s.page.key === key) || null;
  const badgeFor = (key) => { const s = sheetByKey(key); return s ? Math.max(7, Math.min(18, Math.hypot(s.page.width, s.page.height) / 160)) : 9; };
  const legendOf = (m) => legendRows(store.all(), { sheet: m.sheet, scope: m.legend?.scope, name: (x) => tname(x.type) });
  const envOf = (m) => { const e = { cal: store.calibrations.get(m.sheet) || null, badge: badgeFor(m.sheet) }; if (m.type === 'legend') { e.legend = legendOf(m); e.legendKey = rowsKey(e.legend); } return e; };
  // markups on hidden layers neither draw nor pick; on locked layers they draw but do not pick (0.4 K3)
  const pageMarkups = () => store.onSheet(curKey()).filter((m) => store.shown(m));
  const pickable = () => store.onSheet(curKey()).filter((m) => store.open(m));
  let curLayer = '';                 // the layer new markups go on ('' = none)
  // Touch (0.4 S.8): with a finger, picking and grips take a bigger target (the last pointer used decides)
  let touchMode = false;
  const tolerance = () => (touchMode ? 14 : 5) / view.z;
  /** A tool's style before its own panel choices: the default, with Settings › New markups applied. */
  function baseStyle(type) {
    const st = defaultStyle(type);
    if (COLOR_TYPES.has(type)) {
      if (settings.markColor) st.color = settings.markColor;
      if (st.width) st.width = Math.round(st.width * (WEIGHTS[settings.weight] || 1) * 4) / 4;
    }
    return st;
  }
  const styleFor = (type) => ({ ...baseStyle(type), ...(settings.styles[type] || {}), ...(toolPreset && toolPreset.type === type ? toolPreset.style : {}) });
  const sheetTitle = (s) => (s ? s.page.title : '');
  const fileDirty = (f) => [...store.dirtySheets].some((k) => k.startsWith(f.id + ':'));
  const anyDirty = () => files.some(fileDirty);

  function status(msg) { ui.status.textContent = msg || ''; }
  function busy(text) { ui.busy.hidden = !text; if (text) ui.busyText.textContent = text; }

  async function loadLibs() {
    if (libs) return libs;
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = root.dataset.pdfWorker;
    libs = {
      pdfjs,
      pdfLib: null,
      docOptions: { cMapUrl: root.dataset.pdfCmaps, cMapPacked: true, standardFontDataUrl: root.dataset.pdfFonts, wasmUrl: root.dataset.pdfWasm, iccUrl: root.dataset.pdfIcc },
    };
    return libs;
  }
  async function pdfLib() {
    await loadLibs();
    if (!libs.pdfLib) libs.pdfLib = await import('pdf-lib');
    return libs.pdfLib;
  }

  // ---- dialogs (in-page; never window.alert/confirm/prompt) ----
  /**
   * dialog({ title, text, body: [nodes], buttons: [[key, label, cls]], submit: key, check(key, form) → error | '' })
   * resolves { key, form } ('cancel' on Esc).
   */
  function dialog({ title, text, body = [], buttons, submit = null, check = null, wide = false }) {
    return new Promise((done) => {
      const err = el('p', { className: 'mc-dlg-err', role: 'alert' });
      const form = el('form', { className: 'mc-dlg-form', method: 'dialog' },
        el('div', { className: 'mc-dlg-head' }, el('h2', { className: 'mc-h', id: 'mc-dlg-h' }, title)),
        el('div', { className: 'mc-dlg-body' }, text ? el('p', { className: 'mc-dlg-text' }, text) : null, ...body, err),
        el('div', { className: 'mc-dlg-foot' }, ...buttons.map(([key, label, cls]) =>
          el('button', { type: key === submit ? 'submit' : 'button', className: (cls || 'btn-line') + ' btn-sm-cc', dataset: { key } }, label))));
      const dlg = el('dialog', { className: 'mc-dialog' + (wide ? ' is-wide' : ''), 'aria-labelledby': 'mc-dlg-h' }, form);
      let result = 'cancel';
      const finish = (key) => {
        if (key !== 'cancel' && check) {
          const msg = check(key, form);
          if (msg) { err.textContent = msg; return; }
        }
        result = key; dlg.close();
      };
      form.addEventListener('submit', (e) => { e.preventDefault(); finish(submit); });
      form.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b && b.type !== 'submit') finish(b.dataset.key); });
      dlg.addEventListener('close', () => { dlg.remove(); ui.over.focus({ preventScroll: true }); done({ key: result, form }); });
      root.append(dlg);
      dlg.showModal();
      (form.querySelector('input, select, textarea') || form.querySelector('button[data-key="cancel"]'))?.focus();
    });
  }
  const ask = async (title, text, buttons) => (await dialog({ title, text, buttons })).key;

  async function askAuthor(force = false) {
    if (author && !force) return author;
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-author', maxlength: '80', autocomplete: 'name', value: author });
    const r = await dialog({
      title: t('dlg.author.title'),
      text: t('dlg.author.text'),
      body: [el('label', { className: 'mc-k', for: 'mc-dlg-author' }, t('dlg.author.name')), input],
      buttons: [['cancel', t('dlg.author.later')], ['save', t('dlg.save'), 'btn-plot']], submit: 'save',
      check: () => (input.value.trim() ? '' : t('dlg.author.need')),
    });
    askedAuthor = true;
    if (r.key === 'save') { typedAuthor = input.value.trim().slice(0, 80); author = typedAuthor || accountName; lsSet(LS.author, typedAuthor); renderAuthor(); syncSettingsForm(); }
    return author;
  }
  function renderAuthor() { ui.author.textContent = author || t('status.author.none'); }

  // ---- the host (0.4 W.2, session shell): files through host.js, so the desktop app can open and save natively ----
  const host = getHost({ app: 'markupcraft' });
  const PDF_TYPES = [{ description: 'PDF', extensions: ['.pdf'] }];   // i18n-ignore (a file type name)
  /** An export: a download in the browser, a native save dialog in the desktop app. */
  const dl = (data, name, type) => (host.kind === 'desktop' ? host.download(data, name, type) : download(data, name, type));
  async function openHostFiles(list) {
    const fs = [];
    for (const hf of list || []) { try { const b = await hf.file(); fs.push(b instanceof File ? b : new File([b], hf.name, { type: 'application/pdf' })); } catch { /* gone meanwhile */ } }
    if (fs.length) await openFiles(fs);
  }
  host.onOpenFiles((list) => openHostFiles(list));

  // ---- files ----
  ui.file.addEventListener('change', () => { const list = [...ui.file.files]; ui.file.value = ''; if (list.length) openFiles(list); });

  /** opts (Studio Live, live.js): ids = the host's file ids, in order; keepMarkups = the markups came with the session. */
  async function openFiles(list, opts = {}) {
    const pdfs = list.filter((f) => /\.pdf$/i.test(f.name) || f.type === 'application/pdf');
    const skipped = list.length - pdfs.length;
    if (!pdfs.length) { status(list[0]?.name ? t('open.not_pdf.named', { file: list[0].name }) : t('open.not_pdf')); return; }
    busy(t('open.loading'));
    await frame();
    try { await loadLibs(); } catch (e) { busy(''); status(t('open.load_failed', { error: e.message })); return; }
    const errors = [];
    let opened = 0, read = 0, firstNew = sheets.length;
    for (const f of pdfs) {
      busy(t('open.opening', { file: f.name }));
      await frame();
      try {
        const data = new Uint8Array(await f.arrayBuffer());
        const want = opts.ids && opts.ids[pdfs.indexOf(f)];
        const id = typeof want === 'string' && /^f\d+$/.test(want) ? want : 'f' + (++fileSeq);
        fileSeq = Math.max(fileSeq, +id.slice(1));
        const rec = await openPdf({ pdfjs: libs.pdfjs, pdfLib: () => pdfLib(), docOptions: libs.docOptions }, data, {
          fileId: id, name: f.name,
          onProgress: (i, nPages) => { if (nPages > 4 && i % 5 === 0) ui.busyText.textContent = t('open.opening.progress', { file: f.name, i, n: nPages }); },
        });
        files.push(rec);
        if (opts.keepMarkups) store.load([], {}, {}, rec.layers, rec.columns);
        else store.load(rec.markups, rec.calibrations, rec.sheetNames, rec.layers, rec.columns);
        read += rec.markups.length;
        opened++;
        for (const n of rec.notes) errors.push(t('open.note', { file: f.name, note: n }));
      } catch (e) {
        errors.push(e.message || String(e));
      }
    }
    rebuildSheets();
    busy('');
    if (opened && cur < 0) await goTo(firstNew);
    else if (opened) await goTo(firstNew);
    const parts = [];
    if (opened) parts.push(t('open.done', { n: opened, sheets: t('open.done.sheets', { n: sheets.length }) }));
    if (read) parts.push(t(opened === 1 ? 'open.read.one_file' : 'open.read', { n: read }));
    if (skipped) parts.push(t('open.skipped', { n: skipped }));
    status(parts.join(' '));
    if (errors.length) await ask(t('open.failed.title'), errors.join('\n'), [['cancel', t('dlg.ok'), 'btn-plot']]);
    refreshAll();
    return opened;
  }

  async function closeSet() {
    if (!files.length) return;
    if (anyDirty()) {
      const k = await ask(t('unsaved.title'), t('unsaved.close.text'), [['cancel', t('dlg.cancel')], ['discard', t('unsaved.close.discard')], ['save', t('unsaved.save_first'), 'btn-plot']]);
      if (k === 'cancel') return;
      if (k === 'save') { await saveFiles('dirty'); if (anyDirty()) return; }
    }
    stopCompare();
    cancelOps();
    for (const f of files) { f.auto?.close(); await closePdf(f.doc); }
    files.length = 0;
    store.dropSheets('');
    store.dirtySheets.clear();
    forgetText('');
    segCache.clear();
    sheets = []; cur = -1; sel = new Set(); viewStates.clear();
    view.clear();
    rebuildSheets();
    refreshAll();
    status(t('close.done'));
  }

  async function saveFiles(which = 'ask') {
    if (!files.length) { status(t('need.pdf')); return; }
    commitEdit();
    let targets;
    if (which === 'ask') {
      if (files.length === 1) targets = files.slice();
      else {
        const dirty = files.filter(fileDirty);
        const curFile = curSheet()?.file;
        const k = await ask(t('save.ask.title'), t('save.ask.text', { files: files.length, dirty: dirty.length }),
          [['cancel', t('dlg.cancel')], ['one', t('save.ask.one')], ['dirty', t('save.ask.dirty'), 'btn-plot']]);
        if (k === 'cancel') return;
        targets = k === 'one' ? [curFile] : dirty.length ? dirty : [curFile];
      }
    } else if (which === 'dirty') targets = files.filter(fileDirty);
    else targets = files.slice();
    let lib;
    busy(t('save.loading'));
    await frame();
    try { lib = await pdfLib(); } catch (e) { busy(''); status(t('save.load_failed', { error: e.message })); return; }
    const done = [];
    for (const f of targets) {
      busy(t('save.saving', { file: f.name }));
      await frame();
      try {
        const { bytes, report } = await bake(f, lib);
        const name = f.name.replace(/\.pdf$/i, '').replace(/ \(marked up\)$/i, '') + ' (marked up).pdf';   // i18n-ignore: the copy's file name suffix, matched when reopened
        let shown = name;
        if (host.kind === 'desktop') {
          // the desktop app: the first save asks where the marked-up copy goes; later saves write that copy in place
          const r = f.saveTarget ? await host.save({ target: f.saveTarget, data: bytes, name, types: PDF_TYPES }) : await host.saveAs({ data: bytes, name, types: PDF_TYPES });
          if (!r.ok) { if (!r.cancelled) await ask(t('save.failed', { file: f.name }), String(r.error?.message || r.error || ''), [['cancel', t('dlg.ok'), 'btn-plot']]); continue; }
          f.saveTarget = r.target; shown = r.name || name;
        } else download(bytes, name, 'application/pdf');
        for (const k of [...store.dirtySheets]) if (k.startsWith(f.id + ':')) store.dirtySheets.delete(k);
        done.push(t('save.file', { file: shown, markups: t('save.markups', { n: report.written }), size: fmtBytes(bytes.length) }) + (report.missing ? t('save.missing', { n: report.missing }) : ''));
      } catch (e) {
        busy('');
        await ask(t('save.failed', { file: f.name }), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
      }
    }
    busy('');
    if (done.length) status(t('save.done', { list: done.join('; ') }));
    syncAutosave();
    refreshToolbar();
  }

  /**
   * A file's markups written into its bytes — the marked-up copy Save downloads. `flatten` ('all' | Set of ids) draws those
   * markups into the pages instead; `rot` (page index → degrees) turns the text of that page's markups to read upright.
   */
  function bake(f, lib, { flatten = null, rot = null } = {}) {
    const pages = f.pages.map((pg) => ({ index: pg.index,
      markups: store.onSheet(pg.key).map((m) => (rot?.has(pg.index) && !m.locked ? { ...m, rot: rot.get(pg.index) } : m)),
      cal: store.calibrations.get(pg.key) || null, calCleared: !store.calibrations.get(pg.key), badge: badgeFor(pg.key), sheetName: store.sheetNames.get(pg.key) || null, legendOf }));
    // sheet numbers typed by hand become the file's page labels (other pages keep theirs)
    const renamed = f.pages.some((pg) => store.sheetNames.get(pg.key)?.number);
    const labels = renamed ? f.pages.map((pg) => store.sheetNames.get(pg.key)?.number || pg.label || String(pg.index + 1)) : null;
    const linkPage = (link) => { const s = linkTarget(link, sheetList()); return s && s.file === f ? s.page.index : null; };
    return writeMarkedUp(lib, f.bytes, { pages, removeRefs: f.removeRefs, labels, flatten, layers: layerList(), linkPage, columns: store.columns, bookmarks: f.bookmarksEdited ? f.bookmarks : null });
  }
  /** Sheets as link.js wants them (their place in the list = newest last). */
  const sheetList = () => sheets.map((s) => ({ key: s.page.key, sheetNo: s.page.sheetNo, title: s.page.title, file: s.file, page: s.page }));
  const backStack = [];   // sheets left by following a link (Alt+← goes back)
  async function followLink(m) {
    const target = linkTarget(m.link, sheetList());
    if (!target) { status(t('link.missing', { sheet: m.link })); return; }
    const from = curKey();
    const i = sheets.findIndex((s) => s.page.key === target.key);
    if (i === cur) { status(t('link.here', { sheet: target.title })); return; }
    backStack.push(from); if (backStack.length > 50) backStack.shift();
    await goTo(i);
    status(t('link.went', { sheet: target.title }));
  }
  async function goBack() {
    const k = backStack.pop();
    const i = sheets.findIndex((s) => s.page.key === k);
    if (i >= 0) { await goTo(i); status(t('link.back', { sheet: sheets[i].page.title })); } else status(t('link.back.none'));
  }
  const layerList = () => store.layerNames().map((name) => ({ name, ...store.layerState(name) }));
  /** Each page's label as the file will carry it (typed sheet number, else the PDF's own label), or null when none has one. */
  const labelsOf = (f) => { const l = f.pages.map((pg) => store.sheetNames.get(pg.key)?.number || pg.label || ''); return l.some(Boolean) ? l : null; };

  // ---- pages (0.4 K1): rotate, move, insert, delete, extract — on the PDF the open sheet belongs to ----
  // The markups are written into the file first, the pages changed, and the file read back, so every markup, thread,
  // scale and sheet name moves with its page. Undo history is cleared (said); the PDF on this computer is untouched.
  const pageEnv = () => ({ pdfjs: libs.pdfjs, pdfLib: () => pdfLib(), docOptions: libs.docOptions });
  ui.insertFile = $('[data-insert-file]');
  let insertPick = null;
  ui.insertFile?.addEventListener('change', () => { const f = ui.insertFile.files[0]; ui.insertFile.value = ''; const r = insertPick; insertPick = null; r?.(f || null); });
  ui.insertFile?.addEventListener('cancel', () => { const r = insertPick; insertPick = null; r?.(null); });
  const pickPdf = () => new Promise((done) => { insertPick = done; ui.insertFile.click(); });

  /** Ask for pages of `f` ("1-3, 5"); default the open sheet's page. → 0-based indices or null. */
  async function askPages(f, title, text, okLabel, danger = false) {
    const n = f.pages.length;
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-pages', autocomplete: 'off', value: String((curSheet()?.page.index ?? 0) + 1) });
    let picked = null;
    const r = await dialog({
      title, text,
      body: [el('label', { className: 'mc-k', for: 'mc-dlg-pages' }, t('pages.ask.label', { n })), input, el('p', { className: 'mc-muted' }, t('pages.ask.hint', { name: f.name, n }))],
      buttons: [['cancel', t('dlg.cancel')], ['ok', okLabel, danger ? 'btn-danger' : 'btn-plot']], submit: 'ok',
      check: () => { const p = parsePageList(input.value, n); picked = p.indices || null; return p.error || ''; },
    });
    return r.key === 'ok' ? picked : null;
  }

  async function pagesOp(kind) {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    const f = s.file, n = f.pages.length, i = s.page.index;
    let run, show = i, rot = null, done;
    const labels = labelsOf(f);
    switch (kind) {
      case 'page-rotate-cw': case 'page-rotate-ccw': {
        const d = kind === 'page-rotate-cw' ? 90 : -90;
        rot = new Map([[i, ((s.page.rotate + d) % 360 + 360) % 360]]);
        run = (lib, b) => rotatePages(lib, b, [i], d);
        done = t(d > 0 ? 'pages.done.rotate_cw' : 'pages.done.rotate_ccw', { sheet: s.page.title });
        break;
      }
      case 'page-move-up': case 'page-move-down': {
        const to = kind === 'page-move-up' ? i - 1 : i + 1;
        if (to < 0 || to >= n) { status(t(to < 0 ? 'pages.first' : 'pages.last', { name: f.name })); return; }
        run = (lib, b) => movePages(lib, b, [i], to, { labels });
        show = to;
        done = t('pages.done.move', { sheet: s.page.title, page: to + 1, n });
        break;
      }
      case 'page-insert-pdf': {
        const pick = await pickPdf();
        if (!pick) return;
        if (!/\.pdf$/i.test(pick.name) && pick.type !== 'application/pdf') { status(t('pages.insert.not_pdf', { file: pick.name })); return; }
        const src = new Uint8Array(await pick.arrayBuffer());
        let count = 0;
        run = async (lib, b) => { const r = await insertPages(lib, b, src, i + 1, { labels }); count = r.count; return r.bytes; };
        show = i + 1;
        done = () => t('pages.done.insert', { n: count, file: pick.name, after: s.page.title });
        break;
      }
      case 'page-insert-blank':
        run = (lib, b) => insertBlank(lib, b, i + 1, { labels, grid: f.blank });
        show = i + 1;
        done = t('pages.done.blank', { after: s.page.title });
        break;
      case 'page-add-blank':   // a blank set (File › New): one more page like the others, at its end
        run = (lib, b) => insertBlank(lib, b, n, { labels, grid: f.blank });
        show = n;
        done = t('pages.done.add_blank', { name: f.name, n: n + 1 });
        break;
      case 'page-delete': {
        const idx = await askPages(f, t('pages.delete.title'), t('pages.delete.text'), t('pages.delete.ok'), true);
        if (!idx) return;
        if (idx.length >= n) { await ask(t('pages.delete.title'), t('pages.err.all'), [['cancel', t('dlg.ok'), 'btn-plot']]); return; }
        const lost = idx.reduce((a, k) => a + store.onSheet(f.pages[k].key).length, 0);
        if (lost && await ask(t('pages.delete.title'), t('pages.delete.markups', { n: lost, pages: idx.length }), [['cancel', t('dlg.cancel')], ['ok', t('pages.delete.ok'), 'btn-danger']]) !== 'ok') return;
        run = (lib, b) => deletePages(lib, b, idx, { labels });
        const left = orderDelete(n, idx);
        show = Math.max(0, left.findIndex((k) => k >= i)); if (left[show] === undefined) show = left.length - 1;
        done = t('pages.done.delete', { n: idx.length, name: f.name });
        break;
      }
      case 'page-extract': return extractPages_(f);
      default: return;
    }
    busy(t('pages.working'));
    await frame();
    try {
      const lib = await pdfLib();
      const { bytes: baked } = await bake(f, lib, { rot });
      const out = await run(lib, baked);
      await replaceFile(f, out, show);
      status((typeof done === 'function' ? done() : done) + ' ' + t('pages.no_undo'));
    } catch (e) {
      busy('');
      await ask(t('pages.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
    busy('');
  }

  /** Put a changed copy of a file in place of the file: read it back, its sheets marked unsaved, and show page `show`. */
  async function replaceFile(f, bytes, show = 0) {
    stopCompare();
    const rec = await openPdf(pageEnv(), bytes, { fileId: f.id, name: f.name });
    const at = files.indexOf(f);
    for (const k of [...store.dirtySheets]) if (k.startsWith(f.id + ':')) store.dirtySheets.delete(k);
    for (const k of [...viewStates.keys()]) if (k.startsWith(f.id + ':')) viewStates.delete(k);
    store.dropSheets(f.id + ':');   // also clears undo: the history named pages that moved
    forgetText(f.id + ':');
    for (const k of [...segCache.keys()]) if (k.startsWith(f.id + ':')) segCache.delete(k);
    f.auto?.close();
    files[at] = rec;
    store.load(rec.markups, rec.calibrations, rec.sheetNames, rec.layers, rec.columns);
    for (const pg of rec.pages) store.dirtySheets.add(pg.key);
    await closePdf(f.doc);
    sel = new Set();
    cur = -1;
    rebuildSheets();
    const key = rec.pages[Math.max(0, Math.min(rec.pages.length - 1, show))].key;
    await goTo(sheets.findIndex((x) => x.page.key === key));
    refreshAll();
  }

  async function extractPages_(f) {
    const idx = await askPages(f, t('pages.extract.title'), t('pages.extract.text'), t('pages.extract.ok'));
    if (!idx) return;
    busy(t('pages.working'));
    await frame();
    try {
      const lib = await pdfLib();
      const { bytes: baked } = await bake(f, lib);
      const out = await extractPages(lib, baked, idx);
      const name = t('pages.extract.file', { name: f.name.replace(/\.pdf$/i, ''), pages: rangeText(idx) }) + '.pdf';
      dl(out, name, 'application/pdf');
      status(t('pages.done.extract', { n: idx.length, file: name }));
    } catch (e) {
      busy('');
      await ask(t('pages.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
    busy('');
  }
  // ---- File › New (owner, 2026-10-15): blank pages made here as a real PDF with pdf-lib, then opened like any file ----
  // Untitled-1.pdf, Untitled-2.pdf … so every tool, calibration (none until the person sets one), save, autosave and the
  // desktop host treat it exactly as an opened PDF. The last choices are kept in localStorage "markupcraft.blank".
  let untitledSeq = 0;
  const LS_BLANK = 'markupcraft.blank';
  async function askBlank() {
    const last = cleanBlank(lsGet(LS_BLANK, {}));
    const opt = (v, label, on) => el('option', { value: v, selected: v === on }, label);
    const paper = el('select', { id: 'mc-dlg-paper', className: 'mc-select' },
      el('optgroup', { label: t('new.paper.inch') }, ...Object.keys(PAPERS).filter((k) => !PAPERS[k].metric).map((k) => opt(k, t('new.paper.' + k), last.paper))),
      el('optgroup', { label: t('new.paper.metric') }, ...Object.keys(PAPERS).filter((k) => PAPERS[k].metric).map((k) => opt(k, t('new.paper.' + k), last.paper))));
    const radios = (name, list, on, label) => el('div', { className: 'mc-radios', role: 'radiogroup', 'aria-label': label }, ...list.map((v) =>
      el('label', { className: 'mc-radio' }, el('input', { type: 'radio', name, value: v, checked: v === on }), ' ', t(name.replace('mc-new-', 'new.') + '.' + v))));
    const orient = radios('mc-new-orient', ORIENTS, last.orient, t('new.orient'));
    const grid = radios('mc-new-grid', GRIDS, last.grid, t('new.grid'));
    const pages = el('input', { type: 'text', id: 'mc-dlg-blank-pages', className: 'mc-input', inputmode: 'numeric', autocomplete: 'off', value: String(last.pages) });
    let spec = null;
    const r = await dialog({
      title: t('new.title'), text: t('new.text'),
      body: [el('div', { className: 'mc-props mc-new-blank' },
        el('label', { className: 'mc-k', for: 'mc-dlg-paper' }, t('new.paper')), paper,
        el('span', { className: 'mc-k' }, t('new.orient')), orient,
        el('span', { className: 'mc-k' }, t('new.grid')), grid,
        el('label', { className: 'mc-k', for: 'mc-dlg-blank-pages' }, t('new.pages', { max: MAX_PAGES })), pages),
      el('p', { className: 'mc-muted' }, t('new.grid.hint'))],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('new.ok'), 'btn-plot']], submit: 'ok',
      check: () => {
        const n = Number(pages.value);
        if (!Number.isInteger(n) || n < 1 || n > MAX_PAGES) return t('new.err.pages', { max: MAX_PAGES });
        spec = cleanBlank({ paper: paper.value, orient: orient.querySelector('input:checked')?.value, grid: grid.querySelector('input:checked')?.value, pages: n });
        return '';
      },
    });
    return r.key === 'ok' ? spec : null;
  }
  /** File › New: ask (or take `given`, for tests and scripts), make the PDF, open it. → the new file record, or null. */
  async function newBlank(given = null) {
    commitEdit(); cancelOps();
    const spec = given ? cleanBlank(given) : await askBlank();
    if (!spec) return null;
    lsSet(LS_BLANK, spec);
    busy(t('new.making'));
    await frame();
    try {
      const lib = await pdfLib();
      const { name, seq } = untitledName(files.map((f) => f.name), untitledSeq);
      untitledSeq = seq;
      const bytes = await blankPdf(lib, spec, { title: name.replace(/\.pdf$/i, '') });
      const n0 = files.length;
      busy('');
      if (!await openFiles([new File([bytes], name, { type: 'application/pdf' })])) return null;
      const f = files[n0];
      status(t('new.done', { name, n: spec.pages, paper: t('new.paper.' + spec.paper), orient: t('new.orient.' + spec.orient).toLocaleLowerCase(document.documentElement.lang || undefined) }));
      return f;
    } catch (e) {
      busy('');
      await ask(t('new.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
      return null;
    }
  }
  window.markupcraft.newBlank = newBlank;

  /** [0,1,2,4] → "1-3, 5" */
  function rangeText(idx) {
    const v = [...idx].sort((a, b) => a - b).map((k) => k + 1), out = [];
    for (let k = 0; k < v.length; k++) { let j = k; while (j + 1 < v.length && v[j + 1] === v[j] + 1) j++; out.push(j > k ? v[k] + '-' + v[j] : String(v[k])); k = j; }
    return out.join(', ');
  }

  // ---- slip-sheet (0.4 K13): open a revised set, carry each old sheet's markups onto the new sheet with its number ----
  ui.slipFile = $('[data-slip-file]');
  ui.slipFile?.addEventListener('change', () => { const list = [...ui.slipFile.files]; ui.slipFile.value = ''; if (list.length) slipSheet(list); });
  const sheetFacts = (s) => ({ key: s.page.key, no: s.page.sheetNo, file: files.indexOf(s.file), page: s.page.index, width: s.page.width, height: s.page.height, view: s.page.view, rotate: s.page.rotate });

  async function slipSheet(list) {
    commitEdit(); cancelOps();
    const before = new Set(files);
    const oldSheets = sheets.map(sheetFacts);
    if (!oldSheets.length) { status(t('slip.need_old')); return; }
    if (!(await openFiles(list))) return;
    const newSheets = sheets.filter((s) => !before.has(s.file)).map(sheetFacts);
    const pairs = matchSheets(oldSheets, newSheets);
    const title = (key) => sheetByKey(key)?.page.title || key;
    const movable = (key) => store.onSheet(key).filter((m) => m.type !== 'foreign' && !m.locked).length;
    const matched = pairs.filter((p) => p.oldKey);
    if (!matched.length) { await ask(t('slip.title'), t('slip.none', { n: newSheets.length }), [['cancel', t('dlg.ok'), 'btn-plot']]); return; }
    const rows = pairs.map((p, i) => {
      const id = 'mc-slip-' + i;
      const box = el('input', { type: 'checkbox', id, checked: !!p.oldKey, disabled: !p.oldKey, dataset: { i: String(i) } });
      return el('li', { className: 'mc-slip-row' }, box, ' ', el('label', { for: id },
        el('strong', {}, title(p.newKey)), ' ', p.oldKey ? t(p.by === 'order' ? 'slip.row.order' : 'slip.row', { old: title(p.oldKey), n: movable(p.oldKey) }) : t('slip.row.new')));
    });
    const skip = el('input', { type: 'checkbox', id: 'mc-slip-skip' });
    const stamp = el('input', { type: 'checkbox', id: 'mc-slip-stamp', checked: true });
    const r = await dialog({
      title: t('slip.title'), text: t('slip.text', { n: matched.length, total: newSheets.length }), wide: true,
      body: [el('ol', { className: 'mc-slip-list' }, ...rows),
        el('label', { className: 'mc-radio' }, skip, ' ', t('slip.skip_closed')),
        el('label', { className: 'mc-radio' }, stamp, ' ', t('slip.stamp_old', { stamp: t('slip.superseded') }))],
      buttons: [['cancel', t('slip.cancel')], ['carry', t('slip.ok'), 'btn-plot']], submit: 'carry',
    });
    if (r.key !== 'carry') { status(t('slip.opened_only')); return; }
    const chosen = [...r.form.querySelectorAll('.mc-slip-list input:checked')].map((b) => pairs[+b.dataset.i]);
    let carried = 0, left = 0, scaled = 0, closed = 0, stamped = 0;
    const who = await askAuthor();
    store.change(t('undo.slip'), (tx) => {
      for (const p of chosen) {
        const from = sheetByKey(p.oldKey).page, to = sheetByKey(p.newKey).page;
        const res = carryMarkups(store.onSheet(p.oldKey), p.newKey, { from, to, skipClosed: skip.checked });
        res.items.forEach((it, k) => {
          tx.add(it);
          if (it.punch) tx.update(res.sources[k], { punch: null });   // the punch item goes on with the new sheet
        });
        carried += res.items.length; left += res.left; scaled += res.scaled; closed += res.closed;
        const cal = store.calibrations.get(p.oldKey);
        if (cal && !store.calibrations.get(p.newKey) && Math.abs(from.width - to.width) <= 1 && Math.abs(from.height - to.height) <= 1) tx.setCalibration(p.newKey, cal);
        if (stamp.checked) { tx.add(supersededStamp(from, { label: t('slip.superseded'), author: who, sheet: p.oldKey })); stamped++; }
      }
    });
    const parts = [t('slip.done', { sheets: t('slip.sheets', { n: chosen.length }), n: carried })];
    if (stamped) parts.push(t('slip.done.stamped', { n: stamped, stamp: t('slip.superseded') }));
    if (closed) parts.push(t('slip.done.closed', { n: closed }));
    if (left) parts.push(t('slip.done.left', { n: left }));
    if (scaled) parts.push(t('slip.done.scaled', { n: scaled }));
    if (pairs.length > matched.length) parts.push(t('slip.done.new', { n: pairs.length - matched.length }));
    status(parts.join(' '));
    refreshAll();
  }

  // ---- find text in the drawings (0.4 K14): every sheet's own text, hits listed, then clouded in one undo step ----
  const findUi = { box: $('[data-find]'), form: $('[data-find-form]'), q: $('[data-find-q]'), scope: $('[data-find-scope]'), mcase: $('[data-find-case]'), word: $('[data-find-word]'), count: $('[data-find-count]'), list: $('[data-find-list]') };
  const textCache = new Map();   // sheet key → textIndex (dropped with the file)
  const found = { query: '', hits: [], at: -1 };   // hits: [{ key, rect, snippet, start, end }]
  async function sheetText(s) {
    if (textCache.has(s.page.key)) return textCache.get(s.page.key);
    let idx = { text: '', spans: [] };
    try { idx = textIndex((await (await s.file.doc.getPage(s.page.index + 1)).getTextContent()).items); } catch { /* closed meanwhile */ }
    textCache.set(s.page.key, idx);
    return idx;
  }
  /** A file's text and hits go when it closes or its pages change. */
  function forgetText(prefix) {
    for (const k of [...textCache.keys()]) if (k.startsWith(prefix)) textCache.delete(k);
    const n = found.hits.length;
    if (!prefix) found.query = '';
    found.hits = found.hits.filter((h) => !h.key.startsWith(prefix));
    if (found.hits.length !== n) { found.at = -1; renderFind(); }
  }
  findUi.form?.addEventListener('submit', (e) => { e.preventDefault(); runFind(); });
  async function runFind() {
    const q = findUi.q.value.trim();
    if (!q) { findUi.count.textContent = t('find.need'); return; }
    if (!sheets.length) { findUi.count.textContent = t('need.pdf'); return; }
    const list = findUi.scope.value === 'sheet' ? [curSheet()].filter(Boolean) : sheets.slice();
    const hits = [];
    let blank = 0;
    for (let i = 0; i < list.length; i++) {
      const s = list[i];
      if (list.length > 3) findUi.count.textContent = t('find.searching', { sheet: s.page.title, i: i + 1, n: list.length });
      const idx = await sheetText(s);
      if (!idx.text.trim()) { blank++; continue; }
      for (const h of findHits(idx, q, { matchCase: findUi.mcase.checked, wholeWord: findUi.word.checked, max: 2000 - hits.length })) hits.push({ key: s.page.key, ...h });
      if (hits.length >= 2000) break;
    }
    Object.assign(found, { query: q, hits, at: -1 });
    renderFind(blank);
    view.invalidate();
  }
  function renderFind(blank = 0) {
    if (!found.query) { findUi.count.textContent = ''; findUi.list.replaceChildren(); find('[data-act="find-cloud"]').disabled = true; return; }
    const nSheets = new Set(found.hits.map((h) => h.key)).size;
    const parts = [t('find.count', { n: found.hits.length, sheets: t('find.sheets', { n: nSheets }) })];
    if (blank) parts.push(t('find.no_text', { n: blank }));
    if (found.hits.length >= 2000) parts.push(t('find.capped', { n: found.hits.length }));
    findUi.count.textContent = parts.join(' ');
    findUi.list.replaceChildren(...found.hits.slice(0, 500).map((h, i) => {
      const sh = sheetByKey(h.key);
      return el('li', {}, el('button', { type: 'button', dataset: { hit: String(i) }, 'aria-current': i === found.at ? 'true' : 'false' },
        el('strong', {}, sh ? sh.page.sheetNo || sh.page.title : ''), ' ', h.snippet));
    }));
    find('[data-act="find-cloud"]').disabled = !found.hits.length;
  }
  findUi.list?.addEventListener('click', (e) => { const b = e.target.closest('button[data-hit]'); if (b) showHit(+b.dataset.hit); });
  async function showHit(i) {
    const h = found.hits[i];
    if (!h) return;
    found.at = i;
    const si = sheets.findIndex((s) => s.page.key === h.key);
    if (si !== cur) await goTo(si);
    view.zoomTo(h.rect, 0.25);
    for (const b of findUi.list.querySelectorAll('button[data-hit]')) b.setAttribute('aria-current', b.dataset.hit === String(i) ? 'true' : 'false');
    view.invalidate();
  }
  /** Batch auto-link (0.4 K16): every sheet callout like "3/A-501" in the drawings' text, reviewed, then made into link boxes. */
  async function autoLink() {
    if (!sheets.length) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    const nos = sheets.map((s) => s.page.sheetNo).filter(Boolean);
    if (!nos.length) { await ask(t('autolink.h'), t('autolink.no_numbers'), [['cancel', t('dlg.ok'), 'btn-plot']]); return; }
    const found = [];
    let blank = 0;
    for (let i = 0; i < sheets.length; i++) {
      const s = sheets[i];
      findUi.count.textContent = t('find.searching', { sheet: s.page.title, i: i + 1, n: sheets.length });
      const idx = await sheetText(s);
      if (!idx.text.trim()) { blank++; continue; }
      const linked = store.onSheet(s.page.key).filter((m) => m.link);
      for (const r of calloutRefs(idx.text, nos)) {
        if (sheetNoKey(r.no) === sheetNoKey(s.page.sheetNo)) continue;   // a sheet's own number is its title block
        const box = rangeBox(idx, r.start, r.end);
        if (!box) continue;
        const c = [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2];
        if (linked.some((m) => { const b = boundsOf(m, envOf(m)); return b && c[0] >= b[0] && c[0] <= b[2] && c[1] >= b[1] && c[1] <= b[3]; })) continue;   // already linked
        found.push({ sheet: s, ref: r.ref, no: r.no, box });
      }
    }
    findUi.count.textContent = '';
    if (!found.length) { await ask(t('autolink.h'), t('autolink.none') + (blank ? ' ' + t('find.no_text', { n: blank }) : ''), [['cancel', t('dlg.ok'), 'btn-plot']]); return; }
    const rows = found.slice(0, 400).map((f, i) => el('li', { className: 'mc-slip-row' }, el('input', { type: 'checkbox', id: 'mc-al-' + i, checked: true, dataset: { i: String(i) } }), ' ',
      el('label', { for: 'mc-al-' + i }, el('strong', {}, f.sheet.page.sheetNo || f.sheet.page.title), ' ', t('autolink.row', { ref: f.ref, sheet: f.no }))));
    const r = await dialog({ title: t('autolink.h'), text: t('autolink.text', { n: found.length, sheets: t('find.sheets', { n: new Set(found.map((f) => f.sheet.page.key)).size }) }) + (found.length > 400 ? ' ' + t('autolink.capped') : ''), wide: true,
      body: [el('ol', { className: 'mc-slip-list' }, ...rows)], buttons: [['cancel', t('dlg.cancel')], ['ok', t('autolink.ok'), 'btn-plot']], submit: 'ok' });
    if (r.key !== 'ok') return;
    const pick = [...r.form.querySelectorAll('.mc-slip-list input:checked')].map((b) => found[+b.dataset.i]);
    if (!pick.length) return;
    const who = await askAuthor();
    store.change(t('undo.autolink', { n: pick.length }), (tx) => { for (const f of pick) {
      const [x0, y0, x1, y1] = f.box;
      tx.add(makeMarkup({ sheet: f.sheet.page.key, type: 'rect', rect: [x0 - 2, y0 - 2, x1 + 2, y1 + 2], rot: f.sheet.page.rotate, author: who, link: f.no,
        subject: t('autolink.subject'), style: { color: '#1e48c8', width: 0.75, fill: null, fillOpacity: 0.25, opacity: 0.85, fontSize: 12 } }));
    } });
    status(t('autolink.done', { n: pick.length }));
    refreshAll();
  }

  async function cloudFound() {
    if (!found.hits.length) { status(t('find.cloud.none')); return; }
    const who = await askAuthor();
    const keys = new Set(found.hits.map((h) => h.key));
    const made = store.change(t('undo.find_cloud', { n: found.hits.length }), (tx) => found.hits.map((h) => tx.add(makeMarkup({
      ...hitCloud(h, { pad: Math.max(2, (h.rect[3] - h.rect[1]) * 0.35), rot: sheetByKey(h.key)?.page.rotate || 0, sheet: h.key, author: who }),
      style: styleFor('cloudrect'), comment: t('find.cloud.comment', { query: found.query }) }))));
    if (Array.isArray(made)) sel = new Set(made.filter((m) => m.sheet === curKey()).map((m) => m.id));
    status(t('find.clouded', { n: found.hits.length, sheets: t('find.sheets', { n: keys.size }) }));
    refreshAll();
  }

  // ---- flatten (0.4 K15): a separate copy with every markup, or the chosen ones, drawn into the pages ----
  async function saveFlat() {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    const f = s.file;
    const mine = (m) => m.type !== 'foreign' && !m.locked;
    const inFile = f.pages.flatMap((pg) => store.onSheet(pg.key)).filter(mine);
    const chosen = [...sel].map((id) => store.get(id)).filter((m) => m && mine(m) && m.sheet.startsWith(f.id + ':'));
    if (!inFile.length) { status(t('flat.none', { name: f.name })); return; }
    const radios = [['all', t('flat.all', { n: inFile.length })], ...(chosen.length ? [['sel', t('flat.sel', { n: chosen.length })]] : [])];
    const box = el('div', { className: 'mc-radios', role: 'radiogroup', 'aria-label': t('flat.which') }, ...radios.map(([v, l], i) =>
      el('label', { className: 'mc-radio' }, el('input', { type: 'radio', name: 'mc-flat', value: v, checked: chosen.length ? v === 'sel' : i === 0 }), ' ', l)));
    const r = await dialog({ title: t('flat.title'), text: t('flat.text', { name: f.name }), body: [box],
      buttons: [['cancel', t('dlg.cancel')], ['save', t('flat.ok'), 'btn-plot']], submit: 'save' });
    if (r.key !== 'save') return;
    const which = box.querySelector('input:checked')?.value === 'sel' ? new Set(chosen.map((m) => m.id)) : 'all';
    busy(t('save.loading'));
    await frame();
    try {
      const lib = await pdfLib();
      busy(t('save.saving', { file: f.name }));
      const { bytes, report } = await bake(f, lib, { flatten: which });
      const name = t('flat.file', { name: f.name.replace(/\.pdf$/i, '').replace(/ \(marked up\)$/i, '') }) + '.pdf';
      dl(bytes, name, 'application/pdf');
      status(t('flat.done', { file: name, n: report.flattened }) + (report.written ? ' ' + t('flat.kept', { n: report.written }) : ''));
    } catch (e) {
      busy('');
      await ask(t('save.failed', { file: f.name }), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
    busy('');
  }

  // ---- layers (0.4 K3): show, hide, lock; new markups go on the current layer ----
  const layerUi = { box: $('[data-layers]'), list: $('[data-layer-list]'), cur: $('[data-layer-current]') };
  function layerSelect(id, value, onPick) {
    return el('select', { id, className: 'mc-select', onchange: (e) => onPick(e.target.value) },
      el('option', { value: '', selected: !value }, t('layer.none')),
      ...store.layerNames().map((n) => el('option', { value: n, selected: n === value }, n)),
      el('option', { value: '\u0001new' }, t('layer.new_option')));
  }
  async function askLayerName(name = '') {
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-layer', maxlength: '60', value: name, autocomplete: 'off' });
    const r = await dialog({ title: name ? t('layer.rename.title') : t('layer.new.title'), body: [el('label', { className: 'mc-k', for: 'mc-dlg-layer' }, t('layer.name')), input],
      buttons: [['cancel', t('dlg.cancel')], ['ok', name ? t('layer.rename.ok') : t('layer.new.ok'), 'btn-plot']], submit: 'ok',
      check: () => (cleanLayerName(input.value) ? '' : t('layer.name.need')) });
    return r.key === 'ok' ? cleanLayerName(input.value) : null;
  }
  function renderLayers() {
    if (!layerUi.list) return;
    const names = store.layerNames();
    const count = new Map();
    for (const m of store.all()) count.set(m.layer || '', (count.get(m.layer || '') || 0) + 1);
    const row = (n) => {
      const st = store.layerState(n);
      return el('li', { className: 'mc-layer' + (n === curLayer ? ' is-current' : ''), dataset: { layer: n } },
        el('button', { type: 'button', className: 'mc-layer-btn', 'aria-pressed': st.hidden ? 'false' : 'true', title: t(st.hidden ? 'layer.show' : 'layer.hide', { name: n }), dataset: { layerAct: 'eye' } },
          el('i', { className: 'bi bi-' + (st.hidden ? 'eye-slash' : 'eye'), 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t(st.hidden ? 'layer.show' : 'layer.hide', { name: n }))),
        el('button', { type: 'button', className: 'mc-layer-btn', 'aria-pressed': st.locked ? 'true' : 'false', title: t(st.locked ? 'layer.unlock' : 'layer.lock', { name: n }), dataset: { layerAct: 'lock' } },
          el('i', { className: 'bi bi-' + (st.locked ? 'lock' : 'unlock'), 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t(st.locked ? 'layer.unlock' : 'layer.lock', { name: n }))),
        el('button', { type: 'button', className: 'mc-layer-name', title: t('layer.current.title', { name: n }), 'aria-current': n === curLayer ? 'true' : 'false', dataset: { layerAct: 'current' } }, n),
        el('span', { className: 'mc-muted mc-layer-n' }, String(count.get(n) || 0)),
        el('button', { type: 'button', className: 'mc-layer-btn', title: t('layer.more', { name: n }), dataset: { layerAct: 'rename' } }, el('i', { className: 'bi bi-pencil', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('layer.more', { name: n }))));
    };
    layerUi.list.replaceChildren(
      el('li', { className: 'mc-layer' + (!curLayer ? ' is-current' : ''), dataset: { layer: '' } }, el('span', { className: 'mc-layer-pad' }),
        el('button', { type: 'button', className: 'mc-layer-name', 'aria-current': !curLayer ? 'true' : 'false', dataset: { layerAct: 'current' }, title: t('layer.current.none') }, t('layer.none')),
        el('span', { className: 'mc-muted mc-layer-n' }, String(count.get('') || 0))),
      ...names.map(row));
    if (layerUi.cur) layerUi.cur.textContent = curLayer ? t('layer.current', { name: curLayer }) : '';
  }
  layerUi.list?.addEventListener('click', async (e) => {
    const b = e.target.closest('[data-layer-act]');
    if (!b) return;
    const n = b.closest('[data-layer]').dataset.layer;
    const st = store.layerState(n);
    switch (b.dataset.layerAct) {
      case 'eye': store.setLayer(n, { hidden: !st.hidden }); if (!st.hidden) { sel = new Set([...sel].filter((id) => store.open(store.get(id) || {}))); } break;
      case 'lock': store.setLayer(n, { locked: !st.locked }); if (!st.locked) sel = new Set([...sel].filter((id) => store.open(store.get(id) || {}))); break;
      case 'current': curLayer = n; if (n && st.hidden) store.setLayer(n, { hidden: false }); renderLayers(); status(n ? t('layer.current', { name: n }) : t('layer.current.none')); break;
      case 'rename': {
        const nn = await askLayerName(n);
        if (nn === null || nn === n) return;
        if (!nn) return;
        const ids = store.all().filter((m) => m.layer === n).map((m) => m.id);
        store.setLayer(nn, st); store.dropLayer(n);
        if (ids.length) store.change(t('undo.layer.rename'), (tx) => { for (const id of ids) tx.update(id, { layer: nn }, { touch: false }); });
        if (curLayer === n) curLayer = nn;
        status(t('layer.renamed', { from: n, to: nn, n: ids.length }));
        break;
      }
      default: break;
    }
    refreshAll();
  });
  find('[data-act="layer-new"]')?.addEventListener('click', async () => {
    const n = await askLayerName();
    if (!n) return;
    store.setLayer(n);
    curLayer = n;
    renderLayers();
    status(t('layer.current', { name: n }));
  });
  store.on((kind) => { if (kind === 'layers' || kind === 'load' || kind === 'change' || kind === 'undo' || kind === 'redo') renderLayers(); });

  // ---- pictures and signatures as stamps (0.4 K5) ----
  // The stamp tool's list ends with "Picture…" (a PNG or JPEG from this computer) and "My signature…" (drawn in a dialog);
  // the chosen one is kept in this browser and placed like a stamp: click, or drag a box. The markup is type 'image'.
  const PIC = '\u0001picture', SIG = '\u0001signature';
  const LS_PIC = 'markupcraft.picture', LS_SIG = 'markupcraft.signature';
  const isPic = (v) => v === PIC || v === SIG;
  function currentPicture() {
    const v = settings.stamp === PIC ? lsGet(LS_PIC, null) : settings.stamp === SIG ? lsGet(LS_SIG, null) : null;
    return v && cleanImage(v.src) ? { src: v.src, label: settings.stamp === SIG ? t('image.signature.label') : String(v.name || '') || TYPES.image.name } : null;
  }
  ui.imageFile = $('[data-image-file]');
  let picPick = null;
  ui.imageFile?.addEventListener('change', () => { const f = ui.imageFile.files[0]; ui.imageFile.value = ''; const r = picPick; picPick = null; r?.(f || null); });
  ui.imageFile?.addEventListener('cancel', () => { const r = picPick; picPick = null; r?.(null); });
  /** A picked file → a PNG or JPEG data URL, at most 1600 px on its longer side ('' when it is not a picture). */
  async function pictureFrom(file) {
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = url; });
      const k = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight));
      const c = el('canvas', { width: Math.max(1, Math.round(img.naturalWidth * k)), height: Math.max(1, Math.round(img.naturalHeight * k)) });
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      return cleanImage(c.toDataURL(/jpe?g/i.test(file.type || file.name) ? 'image/jpeg' : 'image/png', 0.9));
    } catch { return ''; } finally { URL.revokeObjectURL(url); }
  }
  async function choosePicture() {
    const f = await new Promise((done) => { picPick = done; ui.imageFile.click(); });
    if (!f) return false;
    status(t('image.loading'));
    const src = /^image\/(png|jpeg)$/.test(f.type) || /\.(png|jpe?g)$/i.test(f.name) ? await pictureFrom(f) : '';
    if (!src) { status(t('image.bad', { file: f.name })); return false; }
    const name = f.name.replace(/\.[^.]+$/, '').slice(0, 60);
    if (!lsSet(LS_PIC, { src, name })) { status(t('image.too_big')); return false; }
    settings.stamp = PIC; saveSettings();
    status(t('image.ready', { name }));
    return true;
  }
  window.markupcraft.setPicture = (src, name) => { if (!cleanImage(src)) return false; lsSet(LS_PIC, { src, name }); settings.stamp = PIC; saveSettings(); renderProps(); return true; };   // tests
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
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('image.signature.ok'), 'btn-plot']], submit: 'ok', check: () => (ink ? '' : t('image.signature.need')) });
    if (r.key !== 'ok' || !ink) return false;
    const pad = 6, x0 = Math.max(0, ink[0] - pad), y0 = Math.max(0, ink[1] - pad), x1 = Math.min(W, ink[2] + pad), y1 = Math.min(H, ink[3] + pad);
    const out = el('canvas', { width: Math.round((x1 - x0) * 2), height: Math.round((y1 - y0) * 2) });
    out.getContext('2d').drawImage(c, x0 * 2, y0 * 2, out.width, out.height, 0, 0, out.width, out.height);
    const src = cleanImage(out.toDataURL('image/png'));
    if (!src || !lsSet(LS_SIG, { src })) return false;
    settings.stamp = SIG; saveSettings();
    status(t('image.signature.ready'));
    return true;
  }
  ui.photoFile = $('[data-photo-file]');
  ui.photoFile?.addEventListener('change', () => { const f = ui.photoFile.files[0]; ui.photoFile.value = ''; const r = picPick; picPick = null; r?.(f || null); });
  ui.photoFile?.addEventListener('cancel', () => { const r = picPick; picPick = null; r?.(null); });
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

  // ---- print (0.4 K2): the chosen sheets with their markups drawn into the pages, printed by the browser ----
  async function printSheets(choose = false) {
    if (!files.length) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    const s = curSheet();
    let which = 'sheet', idx = null;
    if (choose || sheets.length > 1) {
      const radios = [['sheet', t('print.this', { sheet: s.page.title })], ['file', t('print.file', { name: s.file.name, n: s.file.pages.length })],
        ...(files.length > 1 ? [['set', t('print.set', { n: sheets.length })]] : []), ['pages', t('print.pages')]];
      const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-print-pages', autocomplete: 'off', value: String(s.page.index + 1), 'aria-label': t('pages.ask.label', { n: s.file.pages.length }) });
      const box = el('div', { className: 'mc-radios', role: 'radiogroup', 'aria-label': t('print.which') }, ...radios.map(([v, l]) =>
        el('label', { className: 'mc-radio' }, el('input', { type: 'radio', name: 'mc-print', value: v, checked: v === 'sheet' }), ' ', l)));
      const r = await dialog({
        title: t('print.title'), text: t('print.text'), body: [box, input],
        buttons: [['cancel', t('dlg.cancel')], ['print', t('print.ok'), 'btn-plot']], submit: 'print',
        check: () => {
          which = box.querySelector('input:checked')?.value || 'sheet';
          if (which !== 'pages') return '';
          const p = parsePageList(input.value, s.file.pages.length); idx = p.indices || null; return p.error || '';
        },
      });
      if (r.key !== 'print') return;
    }
    busy(t('print.making'));
    await frame();
    try {
      const lib = await pdfLib();
      const out = await lib.PDFDocument.create();
      const parts = which === 'set' ? files.map((f) => [f, f.pages.map((pg) => pg.index)])
        : which === 'file' ? [[s.file, s.file.pages.map((pg) => pg.index)]]
        : which === 'pages' ? [[s.file, idx]] : [[s.file, [s.page.index]]];
      let n = 0;
      for (const [f, list] of parts) {
        const { bytes } = await bake(f, lib, { flatten: 'all' });
        const src = await lib.PDFDocument.load(bytes, { updateMetadata: false });
        for (const p of await out.copyPages(src, list)) { out.addPage(p); n++; }
      }
      out.setTitle(setName());
      const pdf = await out.save({ useObjectStreams: false });
      window.markupcraft.lastPrint = pdf;
      busy('');
      printPdf(pdf);
      status(t('print.sent', { n }));
    } catch (e) {
      busy('');
      await ask(t('print.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
  }
  /** The browser prints a PDF through its own viewer in a hidden frame; where it cannot (no viewer), the PDF opens in a tab. */
  function printPdf(bytes) {
    const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    document.querySelector('iframe[data-mc-print]')?.remove();
    const frameEl = el('iframe', { className: 'mc-print-frame', title: t('print.title'), dataset: { mcPrint: '1' }, 'aria-hidden': 'true', tabindex: '-1' });
    frameEl.addEventListener('load', () => {
      setTimeout(() => {
        try { frameEl.contentWindow.focus(); frameEl.contentWindow.print(); }
        catch { window.open(url, '_blank', 'noopener'); status(t('print.tab')); }
      }, 300);
    }, { once: true });
    frameEl.src = url;
    document.body.append(frameEl);
    setTimeout(() => URL.revokeObjectURL(url), 10 * 60 * 1000);
  }

  // ---- sheets ----
  function rebuildSheets() {
    sheets = [];
    for (const f of files) for (const page of f.pages) sheets.push({ file: f, page });
    if (cur >= sheets.length) cur = sheets.length - 1;
    renderSheets();
    renderCompareSelects();
    renderSetSelects();
    renderBookmarks();
    ui.hint.hidden = sheets.length > 0;
  }

  async function goTo(i, { keepSelection = false } = {}) {
    if (i < 0 || i >= sheets.length) return;
    commitEdit();
    cancelOps();
    if (cmp.on && sheets[i].page.key !== cmp.newKey) stopCompare();
    const prev = curSheet();
    if (prev && view.page) viewStates.set(prev.page.key, { z: view.z, ox: view.ox, oy: view.oy, extraRot: view.extraRot || 0 });
    cur = i;
    if (!keepSelection) sel = new Set();
    const s = sheets[i];
    const proxy = await s.file.doc.getPage(s.page.index + 1);
    if (cur !== i) return;
    const vs = viewStates.get(s.page.key);
    const p = view.setPage(s.page, proxy, { keepView: !!vs, extraRot: vs?.extraRot || 0 });
    if (vs) { view.z = vs.z; view.ox = vs.ox; view.oy = vs.oy; view.update(); }
    await p;
    renderNav();
    renderBookmarks();
    markCurrentSheet();
    refreshAll();
  }

  function renderNav() {
    const s = curSheet();
    ui.sheetLabel.textContent = s ? t('nav.label.sheet', { i: cur + 1, n: sheets.length, title: s.page.title }) : t('nav.none');
    ui.sheetLabel.title = s ? t('sheet.file_page', { file: s.file.name, page: s.page.index + 1 }) : '';
    const cal = s ? store.calibrations.get(s.page.key) : null;
    ui.scale.textContent = s ? (cal ? cal.label : t('status.scale.none')) : t('status.scale.no_sheet');
    renderZoom();
  }
  function renderZoom() { if (document.activeElement !== ui.zoom) ui.zoom.value = view.page ? Math.round(view.percent) + '%' : '100%'; }
  view.onView = () => { renderZoom(); positionEditor(); };

  // thumbnails: rendered when they scroll into view, one at a time
  const thumbQueue = [];
  let thumbBusy = false;
  const thumbObserver = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { thumbObserver.unobserve(en.target); thumbQueue.push(en.target); }
    pumpThumbs();
  }, { root: ui.sheets.closest('.mc-panel'), rootMargin: '200px' });
  async function pumpThumbs() {
    if (thumbBusy) return;
    thumbBusy = true;
    while (thumbQueue.length) {
      const c = thumbQueue.shift();
      const s = sheets.find((x) => x.page.key === c.dataset.key);
      if (!s || !c.isConnected) continue;
      try {
        await View.thumb(await s.file.doc.getPage(s.page.index + 1), c, 112, 80, Math.min(2, window.devicePixelRatio || 1));
        view.themeize(c);
        c.classList.add('is-ready');
      } catch { /* closed meanwhile */ }
    }
    thumbBusy = false;
  }

  function renderSheets() {
    const q = ui.sheetSearch.value.trim().toLowerCase();
    ui.sheets.replaceChildren();
    let shown = 0;
    sheets.forEach((s, i) => {
      const hay = (s.page.title + ' ' + s.page.sheetNo + ' ' + s.file.name).toLowerCase();
      if (q && !hay.includes(q)) return;
      shown++;
      const count = store.onSheet(s.page.key).length;
      const canvas = el('canvas', { className: 'mc-thumb', dataset: { key: s.page.key }, 'aria-hidden': 'true' });
      const btn = el('button', { type: 'button', className: 'mc-sheet', dataset: { i: String(i) }, 'aria-current': i === cur ? 'true' : 'false' },
        el('span', { className: 'mc-thumb-box' }, canvas),
        el('span', { className: 'mc-sheet-text' },
          el('span', { className: 'mc-sheet-title' }, s.page.title),
          el('span', { className: 'mc-sheet-meta' }, s.page.sheetNo && s.page.sheetNo !== s.page.title ? t('sheet.number', { n: s.page.sheetNo }) : t('sheet.file_page', { file: s.file.name, page: s.page.index + 1 })),
          count ? el('span', { className: 'mc-sheet-count' }, t('save.markups', { n: count })) : null));
      btn.addEventListener('click', () => goTo(i));
      ui.sheets.append(el('li', {}, btn));
      thumbObserver.observe(canvas);
    });
    ui.sheetsEmpty.hidden = sheets.length > 0;
    ui.sheetsEmpty.textContent = sheets.length ? '' : t('sheets.empty');
    ui.sheetCount.textContent = sheets.length ? (q ? t('sheets.shown', { shown, n: sheets.length }) : String(sheets.length)) : '';
    if (q && !shown && sheets.length) { ui.sheetsEmpty.hidden = false; ui.sheetsEmpty.textContent = t('sheets.no_match', { q: ui.sheetSearch.value.trim() }); }
  }
  function markCurrentSheet() {
    for (const b of ui.sheets.querySelectorAll('.mc-sheet')) {
      const on = +b.dataset.i === cur;
      b.setAttribute('aria-current', on ? 'true' : 'false');
      if (on) revealInPanel(b);
    }
  }
  /** Scroll the panel's own list so `b` shows — never the page (on a phone the panels stack under the sheet and the
   *  page scrolls; scrollIntoView would jump away from the sheet that just opened). */
  function revealInPanel(b) {
    for (let q = b.parentElement; q && q !== document.body; q = q.parentElement) {
      if (/(auto|scroll)/.test(getComputedStyle(q).overflowY) && q.scrollHeight > q.clientHeight) {
        const r = b.getBoundingClientRect(), qr = q.getBoundingClientRect();
        if (r.top < qr.top) q.scrollTop -= qr.top - r.top; else if (r.bottom > qr.bottom) q.scrollTop += r.bottom - qr.bottom;
        return;
      }
      if (q.tagName === 'ASIDE') return;
    }
  }
  function refreshSheetCounts() {
    for (const b of ui.sheets.querySelectorAll('.mc-sheet')) {
      const s = sheets[+b.dataset.i];
      if (!s) continue;
      const count = store.onSheet(s.page.key).length;
      let chip = b.querySelector('.mc-sheet-count');
      if (!count) { chip?.remove(); continue; }
      if (!chip) { chip = el('span', { className: 'mc-sheet-count' }); b.querySelector('.mc-sheet-text').append(chip); }
      chip.textContent = t('save.markups', { n: count });
    }
  }
  ui.sheetSearch.addEventListener('input', renderSheets);
  ui.sheetSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { const first = ui.sheets.querySelector('.mc-sheet'); if (first) { e.preventDefault(); goTo(+first.dataset.i); } }
  });

  // ---- tools ----
  for (const b of root.querySelectorAll('[data-tool]')) b.addEventListener('click', () => { toolPreset = null; setTool(b.dataset.tool); });

  async function setTool(name, preset = null) {
    commitEdit();
    cancelOps();
    if (NEEDS_SCALE.has(name) && curSheet() && !store.calibrations.get(curKey())) {
      status(t('hint.calibrate_first'));
      afterCalibrate = name;
      name = 'calibrate';
    }
    tool = name;
    toolPreset = preset;
    for (const b of root.querySelectorAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === name));
    updateCursor();
    // the count tool keeps adding to a selected count group; every other drawing tool starts fresh
    const keepGroup = name === 'count' && sel.size === 1 && store.get([...sel][0])?.type === 'count';
    if (DRAW_TOOLS.has(name) && !keepGroup) { sel = new Set(); view.invalidate(true); }
    renderProps();
    if (DRAW_TOOLS.has(name) && !author && !askedAuthor) await askAuthor();
    if (name === 'calibrate') status(t('hint.calibrate'));
    else if (name === 'stamp') status(!preset && currentPicture() ? (settings.stamp === SIG ? t('image.signature.ready') : t('image.ready', { name: currentPicture().label })) : t('hint.stamp', { stamp: preset?.label || stampLabel(settings.stamp) }));
    else if (KIND[name] === 'poly') status(t('hint.poly'));
    else if (KIND[name] === 'three') status(t('hint.' + name));
    else if (name === 'callout') status(t('hint.callout'));
    else if (name === 'count') status(t('hint.count'));
    if (name === 'area') status(t('hint.area'));
  }

  function updateCursor() {
    const c = ui.over;
    if (tool !== 'select') c.style.cursor = '';
    c.classList.toggle('is-pan', tool === 'pan' || spaceDown);
    c.classList.toggle('is-draw', DRAW_TOOLS.has(tool) || tool === 'calibrate' || !!cmp.aligning);
    c.classList.toggle('is-panning', drag?.kind === 'pan');
  }

  // ---- toolbar actions ----
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b || !root.contains(b)) return;
    closeMenus();
    act(b.dataset.act, b);
  });
  // the toolbar's More menu: closes on a choice, a click elsewhere or Esc
  function closeMenus() { for (const d of root.querySelectorAll('details.mc-menu[open]')) d.open = false; }
  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.mc-menu[open]')) if (!d.contains(e.target)) d.open = false; });
  // A menu hangs from its button's right edge; near the window's left edge (File › Pages, or wherever Arrange put it)
  // that runs off screen, so it hangs from the left edge instead. Phones (fixed, full width) are left alone.
  function keepMenuOnScreen(d) {
    const list = d.querySelector('.mc-menu-list');
    if (!list) return;
    list.style.left = list.style.right = '';
    if (!d.open || getComputedStyle(list).position === 'fixed') return;
    const r = list.getBoundingClientRect();
    if (r.left < 8) { list.style.left = '0'; list.style.right = 'auto'; }
  }
  for (const d of root.querySelectorAll('details.mc-menu')) {
    d.addEventListener('toggle', () => keepMenuOnScreen(d));
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && d.open) { e.preventDefault(); e.stopPropagation(); d.open = false; d.querySelector('summary').focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && d.open) {
        const items = [...d.querySelectorAll('[role="menuitem"]:not(:disabled)')];
        if (!items.length) return;
        e.preventDefault(); e.stopPropagation();
        const i = items.indexOf(document.activeElement);
        items[(i < 0 ? (e.key === 'ArrowDown' ? 0 : -1) : i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
      }
    });
  }
  async function act(a) {
    switch (a) {
      case 'new': newBlank(); break;
      case 'open': if (host.kind === 'desktop') host.openFile({ types: PDF_TYPES, multiple: true }).then(openHostFiles); else ui.file.click(); break;
      case 'save': saveFiles('ask'); break;
      case 'close': closeSet(); break;
      case 'print': printSheets(); break;
      case 'print-pages': printSheets(true); break;
      case 'find-cloud': cloudFound(); break;
      case 'auto-link': autoLink(); break;
      case 'save-flat': saveFlat(); break;
      case 'slip-sheet': if (files.length) ui.slipFile.click(); else status(t('slip.need_old')); break;
      case 'page-rotate-cw': case 'page-rotate-ccw': case 'page-move-up': case 'page-move-down':
      case 'page-insert-pdf': case 'page-insert-blank': case 'page-add-blank': case 'page-delete': case 'page-extract': pagesOp(a); break;
      case 'undo': undo(); break;
      case 'redo': redo(); break;
      case 'delete': deleteSelection(); break;
      case 'cut': cutSelection(); break;
      case 'copy': copySelection(); break;
      case 'paste': paste('offset'); break;
      case 'paste-in-place': paste('place'); break;
      case 'duplicate': duplicate(); break;
      case 'select-all': selectAll(); break;
      case 'select-none': if (sel.size) { sel = new Set(); refreshSelection(); } break;
      case 'prev': if (cur > 0) goTo(cur - 1); break;
      case 'next': if (cur < sheets.length - 1) goTo(cur + 1); break;
      case 'zoom-in': view.zoomAt(1.25, view.w / 2, view.h / 2); break;
      case 'zoom-out': view.zoomAt(0.8, view.w / 2, view.h / 2); break;
      case 'fit-page': view.fit('page'); break;
      case 'fit-width': view.fit('width'); break;
      case 'view-cw': case 'view-ccw': if (view.page) { view.setExtraRot((view.extraRot || 0) + (a === 'view-cw' ? 90 : -90)); status(view.extraRot ? t('view.rotated', { n: view.extraRot }) : t('view.rotated.none')); renderNav(); } break;
      case 'calibrate': if (curSheet()) calibrateDialog(null); else status(t('need.pdf')); break;
      case 'author': askAuthor(true); break;
      case 'list-csv': exportListCsv(); break;
      case 'list-bcf': exportBcf(); break;
      case 'list-xlsx': exportSummary('xlsx'); break;
      case 'list-columns': editColumns(); break;
      case 'legend-add': addLegend(); break;
      case 'list-bcf-import': ui.bcfFile.click(); break;
      case 'list-pdf': exportSummary('pdf'); break;
      case 'sheet-rename': renameSheet(); break;
      case 'punch-csv': exportPunchCsv(); break;
      case 'punch-add': addToPunch(); break;
      case 'chest-save': saveToChest(); break;
      case 'chest-import': ui.chestFile.click(); break;
      case 'chest-export': dl(exportChest(chest), t('chest.file') + '.json', 'application/json'); status(t('chest.exported', { n: chest.length })); break;
      case 'compare': startCompare(); break;
      case 'compare-stop': stopCompare(); break;
      case 'compare-align': startAlign(); break;
      case 'compare-cloud': cloudChanges(); break;
      case 'set-compare': compareSets(); break;
      case 'set-cloud': cloudSet(); break;
      case 'compare-reset': cmp.dx = 0; cmp.dy = 0; cmp.fit = null; applyCompare(); break;
      default: break;
    }
  }

  ui.zoom.addEventListener('change', () => {
    const v = parseFloat(ui.zoom.value);
    if (Number.isFinite(v) && v > 0) view.setPercent(v);
    renderZoom();
  });
  ui.zoom.addEventListener('focus', () => ui.zoom.select());
  ui.zoom.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ui.zoom.blur(); ui.over.focus(); } });

  // ---- undo / redo / delete / clipboard ----
  function afterHistory(label, which) {
    sel = new Set([...sel].filter((id) => store.get(id)));
    status(label ? t('history.' + which, { what: lowFirst(label) }) : t('history.' + which + '.none'));
    renderNav();
  }
  function undo() { commitEdit(); cancelOps(); afterHistory(store.undo(), 'undo'); }
  function redo() { commitEdit(); cancelOps(); afterHistory(store.redo(), 'redo'); }

  function editable(ids = sel) { return [...ids].map((id) => store.get(id)).filter((m) => m && !m.locked); }

  function deleteSelection() {
    const list = [...sel].map((id) => store.get(id)).filter(Boolean);
    if (!list.length) { status(t('delete.need')); return; }
    const locked = list.filter((m) => m.locked).length;
    const del = list.filter((m) => !m.locked);
    if (del.length) store.change(t('undo.delete', { n: del.length }), (tx) => { for (const m of del) tx.remove(m.id); });
    sel = new Set();
    status([del.length ? t('delete.done', { n: del.length }) : '', locked ? t('delete.locked', { n: locked }) : ''].filter(Boolean).join(' '));
  }

  // The clipboard: markups only, never the PDF. See clip.js for what a copy keeps.
  function sharedClip() { try { return cleanClip(localStorage.getItem(CLIP_KEY)); } catch { return null; } }
  /** The newest copy: this tab's, or another tab's when that one is newer. */
  function currentClip() {
    const shared = sharedClip();
    if (!clip) return shared;
    if (shared && shared.at > clip.at && !(shared.source === clip.source && shared.at === clip.at)) return shared;
    return clip;
  }
  const hasClip = () => { if (clip) return true; try { return localStorage.getItem(CLIP_KEY) !== null; } catch { return false; } };
  window.addEventListener('storage', (e) => { if (e.key === CLIP_KEY) refreshToolbar(); });

  function copySelection(verb = 'copy') {
    const list = editable();
    if (!list.length) { status(sel.size ? t('clip.' + verb + '.locked') : t('clip.' + verb + '.need')); return false; }
    clip = makeClip(list, { source: TAB, sheet: curKey() });
    pasteRun = { key: '', n: 0 };
    let shared = false;
    try { localStorage.setItem(CLIP_KEY, JSON.stringify(clip)); shared = true; } catch { /* too big or a private window: this tab still has it */ }
    status(t('clip.' + verb + '.done' + (shared ? '' : '.local'), { n: list.length }));
    refreshToolbar();
    return true;
  }
  function cutSelection() {
    const list = editable();
    if (!copySelection('cut')) return;
    store.change(t('undo.cut', { n: list.length }), (tx) => { for (const m of list) tx.remove(m.id); });
    sel = new Set();
    refreshAll();
  }
  /** A move of `px` screen pixels down and to the right, in user space (sheets may be rotated). */
  function screenStep(px) { const a = view.toUser(0, 0), b = view.toUser(px, px); return [b[0] - a[0], b[1] - a[1]]; }
  const pasteMode = () => (settings.pasteAt === 'pointer' && pointer ? 'pointer' : 'offset');
  /**
   * Paste the newest copy on this sheet, as one undo step. how: 'pointer' (centered where the pointer is), 'place' (the
   * same sheet coordinates it was copied from — the same spot on this sheet, or the same place on another sheet) or
   * 'offset' (beside the copy: on the sheet it came from a step down and right, a step more each time; on another sheet
   * where it was; if that is out of view, in the middle of the view).
   */
  function paste(how = 'offset') {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    const c = currentClip();
    if (!c) { status(t('paste.empty')); return; }
    commitEdit();
    cancelOps();
    if (tool !== 'select') setTool('select');
    let opts;
    if (how === 'place') opts = { delta: [0, 0] };
    else if (how === 'pointer' && pointer) opts = { center: view.toUser(pointer[0], pointer[1]) };
    else {
      const key = c.source + '|' + c.at + '|' + s.page.key;
      pasteRun = pasteRun.key === key ? { key, n: pasteRun.n + 1 } : { key, n: 1 };
      const steps = c.source === TAB && c.sheet === s.page.key ? pasteRun.n : pasteRun.n - 1;
      const d = screenStep(PASTE_STEP * steps);
      opts = { delta: d };
      const b = clipBounds(c.items);
      if (b) {
        const [x, y] = view.toScreen([(b[0] + b[2]) / 2 + d[0], (b[1] + b[3]) / 2 + d[1]]);
        if (!(x >= 0 && y >= 0 && x <= view.w && y <= view.h)) opts = { center: view.toUser(view.w / 2, view.h / 2) };
      }
    }
    const made = placeClip(c, { sheet: s.page.key, author, rot: view.seenRotate, ...opts });
    const ids = [];
    store.change(t(how === 'place' ? 'undo.paste_in_place' : 'undo.paste', { n: made.length }), (tx) => { for (const m of made) ids.push(tx.add(m).id); });
    sel = new Set(ids);
    refreshAll();
    status(t('paste.done.' + (how === 'place' || how === 'pointer' ? how : 'offset'), { n: made.length }) + (c.skipped ? ' ' + t('paste.skipped', { n: c.skipped }) : '') + ' ' + t('paste.undo', { n: made.length }));
  }
  /** Copies of the selection a step down and right, as one undo step. The clipboard is left as it was. */
  function duplicate() {
    const s = curSheet();
    const list = editable();
    if (!s || !list.length) { status(sel.size ? t('dup.locked') : t('dup.need')); return; }
    commitEdit();
    cancelOps();
    const made = placeClip(makeClip(list, { source: TAB, sheet: s.page.key }), { sheet: s.page.key, author, rot: view.seenRotate, delta: screenStep(PASTE_STEP) });
    const ids = [];
    store.change(t('undo.duplicate', { n: made.length }), (tx) => { for (const m of made) ids.push(tx.add(m).id); });
    sel = new Set(ids);
    refreshAll();
    status(t('dup.done', { n: made.length }));
  }
  function selectAll() {
    if (!curSheet()) return;
    sel = new Set(pickable().map((m) => m.id));
    refreshSelection();
    status(sel.size ? t('select.all', { n: sel.size }) : t('select.all.none'));
  }

  // ---- creating markups ----
  function newMarkup(type, geom, extra = {}) {
    const s = curSheet();
    const style = styleFor(type);
    const label = type === 'stamp' ? (toolPreset?.label || stampLabel(settings.stamp)) : '';
    if (type === 'stamp' && !toolPreset?.style?.color && !settings.styles.stamp?.color) style.color = stampColor(label);
    return makeMarkup({
      sheet: s.page.key, type, rot: view.seenRotate, style, author, label, layer: curLayer && store.open({ layer: curLayer }) ? curLayer : '',
      subject: toolPreset?.subject || TYPES[type].subject,
      text: TEXT_TYPES.has(type) ? (toolPreset?.text || '') : '',
      ...(toolPreset?.xd && toolPreset.type === type ? { xd: toolPreset.xd } : {}),   // an add-on's markup type (0.5 AO.6)
      ...geom, ...extra,
    });
  }
  function commitNew(m, label) {
    const mk = store.change(label || t('undo.add', { type: tlow(m.type) }), (tx) => tx.add(m));
    sel = new Set([mk.id]);
    refreshAll();
    return mk;
  }

  const clampPt = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  /** Size of a new stamp at this zoom (box in user space, centered on p). */
  function stampBox(p, label) {
    // about 54 screen pixels tall, kept between 1/2" and 1 1/4" on the printed sheet
    const H = clampPt(54 / view.z, 36, 90);
    const sub = stampSub({ author, created: nowIso() });
    const W = Math.max(H * 2.2, textWidth(label.toUpperCase(), H * 0.38, true) + H * 0.6, textWidth(sub, H * 0.17) + H * 0.6);
    const f = textFrame(view.seenRotate, [0, 0, 1, 1]);
    const [w, h] = f.u[0] !== 0 ? [W, H] : [H, W];
    return [p[0] - w / 2, p[1] - h / 2, p[0] + w / 2, p[1] + h / 2];
  }

  // ---- pointer ----
  const over = ui.over;
  const localXY = (e) => { const r = over.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };

  // a finger held down makes the browser fire contextmenu (and then cancel the pointer): that is our long press too
  over.addEventListener('contextmenu', (e) => { e.preventDefault(); if (press) { const p0 = press; clearTimeout(p0.timer); longPress(p0.x, p0.y, true); } });

  // ---- touch: one finger draws and selects (the handlers below); two fingers pinch-zoom about their
  // middle and pan. Tools that act on a press (count, note, polyline points, the second click of a
  // two-point tool) wait for the finger to lift, so the first finger of a pinch never leaves a mark.
  const touches = new Map();     // pointerId → [x, y] on the stage
  let gesture = null;            // { mid, d } while two fingers are down; { ending: true } until all lift
  let tap = null;                // a deferred press: { id, x, y, e }
  let lastTap = null;            // for double-tap (finishes a polyline)
  const pinch = () => { const [a, b] = [...touches.values()]; return { mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], d: Math.max(1, Math.hypot(a[0] - b[0], a[1] - b[1])) }; };
  const pressTool = () => tool !== 'select' && (KIND[tool] === 'count' || KIND[tool] === 'note' || KIND[tool] === 'poly' || KIND[tool] === 'three' || pending?.kind === 'two');
  // A long press (a finger held still) is the touch form of Enter / double-click: it finishes a polyline, area or free
  // cloud, and on a markup with the Select tool it opens its text for editing.
  let press = null;              // { id, x, y, timer }
  const LONG_PRESS_MS = 500;
  const endPress = () => { if (press) { clearTimeout(press.timer); press = null; } };
  window.markupcraft.touchState = () => ({ touches: touches.size, gesture: !!gesture, press: !!press, editing: !!editing, touchMode });
  function longPress(x, y, held = false) {
    press = null;
    if ((!held && touches.size !== 1) || gesture || editing) return;
    if (pending?.kind === 'poly') { tap = null; finishPoly(); view.invalidate(); return; }
    if (tool !== 'select') return;
    const m = pick(pickable(), view.toUser(x, y), tolerance(), envOf);
    if (!m || m.locked || !(TEXT_TYPES.has(m.type) || m.type === 'note')) return;
    drag = null; view.hidden = null;
    sel = new Set([m.id]);
    startEdit(m);
    view.invalidate(true);
  }
  over.addEventListener('pointerdown', (e) => {
    touchMode = e.pointerType === 'touch';
    root.classList.toggle('is-touch', touchMode);
    if (e.pointerType !== 'touch' || !view.page) return;
    touches.set(e.pointerId, localXY(e));
    endPress();
    if (touches.size === 1) { const [x, y] = localXY(e); press = { id: e.pointerId, x, y, t0: performance.now(), timer: setTimeout(() => longPress(x, y), LONG_PRESS_MS) }; }
    if (touches.size === 2) {
      // the second finger: drop whatever the first one started and move the view instead
      if (drag && drag.kind !== 'pan') { drag = null; view.hidden = null; view.invalidate(true); }
      drag = null; tap = null;
      gesture = pinch();
      e.stopImmediatePropagation();
      return;
    }
    if (touches.size > 2 || gesture) { e.stopImmediatePropagation(); return; }
    if (pressTool() && !editing && !cmp.aligning) {
      const [x, y] = localXY(e);
      tap = { id: e.pointerId, x, y, e: { clientX: e.clientX, clientY: e.clientY, shiftKey: e.shiftKey, pointerId: e.pointerId, pointerType: 'touch' } };
      e.stopImmediatePropagation();
    }
  });
  over.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'touch' || !touches.has(e.pointerId)) return;
    touches.set(e.pointerId, localXY(e));
    if (press && press.id === e.pointerId) { const [x, y] = localXY(e); if (Math.hypot(x - press.x, y - press.y) > 10) endPress(); }
    if (gesture && !gesture.ending && touches.size >= 2) {
      const g = pinch();
      view.zoomAt(g.d / gesture.d, g.mid[0], g.mid[1]);
      view.panBy(g.mid[0] - gesture.mid[0], g.mid[1] - gesture.mid[1]);
      gesture = g;
      e.stopImmediatePropagation();
      return;
    }
    if (gesture) { e.stopImmediatePropagation(); return; }
    if (tap && tap.id === e.pointerId) {
      const [x, y] = localXY(e);
      if (Math.hypot(x - tap.x, y - tap.y) > 12) tap = null;   // a slide is not a tap
      e.stopImmediatePropagation();
    }
  });
  const touchEnd = (e) => {
    if (e.pointerType !== 'touch') return;
    touches.delete(e.pointerId);
    if (press && press.id === e.pointerId) {
      // a finger held still makes the browser cancel the pointer for its own long-press: that is our long press
      const p0 = press;
      endPress();
      if (e.type === 'pointercancel' && !gesture && performance.now() - p0.t0 > 350) { tap = null; longPress(p0.x, p0.y, true); }
    }
    if (gesture) {
      gesture = touches.size ? { ending: true } : null;
      e.stopImmediatePropagation();
      return;
    }
    if (tap && tap.id === e.pointerId) {
      const t = tap;
      tap = null;
      e.stopImmediatePropagation();
      if (e.type === 'pointercancel') return;
      const now = performance.now();
      const dbl = lastTap && now - lastTap.t < 400 && Math.hypot(t.x - lastTap.x, t.y - lastTap.y) < 24;
      lastTap = { t: now, x: t.x, y: t.y };
      onDown({ ...t.e, button: 0, detail: dbl ? 2 : 1, preventDefault() {} });
    }
  };
  over.addEventListener('pointerup', touchEnd);
  over.addEventListener('pointercancel', touchEnd);

  over.addEventListener('pointerdown', onDown);
  function onDown(e) {
    if (!view.page) return;
    over.focus({ preventScroll: true });
    const [sx, sy] = localXY(e);
    const p = view.toUser(sx, sy);
    if ((e.button === 1 && panButton(1)) || (e.button === 0 && (spaceDown || tool === 'pan')) || (e.button === 2 && !pending && panButton(2))) {   // IP.3: middle / right pan as the style says
      e.preventDefault();
      over.setPointerCapture(e.pointerId);
      drag = { kind: 'pan', sx, sy };
      updateCursor();
      return;
    }
    if (e.button === 2 && pending?.kind === 'poly') { finishPoly(); return; }
    if (e.button !== 0) return;
    if (editing) { commitEdit(); return; }
    try { over.setPointerCapture(e.pointerId); } catch { /* a replayed tap: the finger is already up */ }
    if (cmp.aligning) { alignClick(p); return; }
    const kind = tool === 'select' ? 'select' : KIND[tool];
    switch (kind) {
      case 'select': selectDown(p, sx, sy, e); break;
      case 'free': drag = { kind: 'free', pts: [p], sx, sy }; break;
      case 'two':
        if (pending?.kind === 'two') { finishTwo(pending.a, constrain(pending.a, p, e)); pending = null; }
        else drag = { kind: 'two', a: p, b: p, sx, sy };
        break;
      case 'box': drag = { kind: 'box', a: p, b: p, sx, sy }; break;
      case 'poly':
        if (pending?.kind === 'poly') {
          const last = pending.pts[pending.pts.length - 2];
          const q = constrain(last, p, e);
          if (e.detail >= 2) { finishPoly(); break; }
          pending.pts[pending.pts.length - 1] = q;
          pending.pts.push(q);
        } else pending = { kind: 'poly', pts: [p, p] };
        break;
      case 'three':
        if (pending?.kind === 'three') {
          pending.pts[pending.pts.length - 1] = p;
          if (pending.pts.length === 3) { const pts = pending.pts.slice(); pending = null; finishThree(pts); break; }
          pending.pts.push(p);
          status(t('three.last.' + tool));
        } else { pending = { kind: 'three', pts: [p, p] }; status(t('three.next.' + tool)); }
        break;
      case 'callout': drag = { kind: 'callout', tip: p, b: p, sx, sy }; break;
      case 'note': placeNote(p); break;
      case 'count': countClick(p, e); break;
      default: break;
    }
    view.invalidate();
  }

  over.addEventListener('pointerleave', () => { pointer = null; });
  over.addEventListener('pointermove', (e) => {
    if (!view.page) return;
    const [sx, sy] = localXY(e);
    pointer = e.pointerType === 'touch' ? null : [sx, sy];
    const p = view.toUser(sx, sy);
    showCoords(p);
    if (drag?.kind === 'pan') { view.panBy(sx - drag.sx, sy - drag.sy); drag.sx = sx; drag.sy = sy; return; }
    if (!drag) {
      if (pending?.kind === 'two') { pending.b = constrain(pending.a, p, e); view.invalidate(); }
      else if (pending?.kind === 'poly') { const last = pending.pts[pending.pts.length - 2]; pending.pts[pending.pts.length - 1] = constrain(last, p, e); view.invalidate(); }
      else if (pending?.kind === 'three') { pending.pts[pending.pts.length - 1] = p; view.invalidate(); }
      else if (tool === 'select') hover(p);
      return;
    }
    const moved = Math.hypot(sx - drag.sx, sy - drag.sy) > 3;
    switch (drag.kind) {
      case 'free': {
        const last = drag.pts[drag.pts.length - 1];
        if (e.shiftKey) drag.pts = [drag.pts[0], p];
        else if (Math.hypot(p[0] - last[0], p[1] - last[1]) > 0.75 / view.z) {
          for (const ev of e.getCoalescedEvents ? e.getCoalescedEvents() : [e]) { const [cx, cy] = localXY(ev); drag.pts.push(view.toUser(cx, cy)); }
        }
        break;
      }
      case 'two': drag.b = constrain(drag.a, p, e); break;
      case 'box': drag.b = e.shiftKey ? squareFrom(drag.a, p) : p; break;
      case 'callout': drag.b = p; break;
      case 'move':
        if (moved || drag.moved) { drag.moved = true; drag.d = [p[0] - drag.a[0], p[1] - drag.a[1]]; if (e.shiftKey) { const q = snap45(drag.a, p); drag.d = [q[0] - drag.a[0], q[1] - drag.a[1]]; } liveMove(); }
        break;
      case 'grip': if (moved || drag.moved) { drag.moved = true; drag.p = p; drag.shift = e.shiftKey; liveGrip(); } break;
      case 'window': drag.b = [sx, sy]; drag.moved = drag.moved || moved; break;
      default: break;
    }
    view.invalidate();
  });

  over.addEventListener('pointerup', (e) => {
    if (!drag) return;
    const [sx, sy] = localXY(e);
    const p = view.toUser(sx, sy);
    const d = drag;
    drag = null;
    const moved = Math.hypot(sx - d.sx, sy - d.sy) > 4;
    switch (d.kind) {
      case 'pan': updateCursor(); break;
      case 'free': finishFree(d.pts); break;
      case 'two':
        if (moved) finishTwo(d.a, constrain(d.a, p, e));
        else pending = { kind: 'two', a: d.a, b: d.a };
        break;
      case 'box': finishBox(d.a, moved ? (e.shiftKey ? squareFrom(d.a, p) : p) : null); break;
      case 'callout': finishCallout(d.tip, moved ? p : null); break;
      case 'move': endMove(d); break;
      case 'grip': endGrip(d); break;
      case 'window': endWindow(d, e.shiftKey); break;
      default: break;
    }
    view.hidden = null;
    view.invalidate(true);
  });
  over.addEventListener('pointercancel', () => { drag = null; view.hidden = null; view.invalidate(true); updateCursor(); });

  over.addEventListener('dblclick', (e) => {
    if (!view.page) return;
    if (pending?.kind === 'poly') { finishPoly(); return; }
    if (tool !== 'select') return;
    const [sx, sy] = localXY(e);
    const m = pick(pickable(), view.toUser(sx, sy), tolerance(), envOf);
    if (m && !m.locked) startEdit(m);
  });

  over.addEventListener('wheel', (e) => {
    if (!view.page) return;
    e.preventDefault();
    const [sx, sy] = localXY(e);
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 16; else if (e.deltaMode === 2) dy *= 400;
    view.zoomAt(Math.exp(-dy * (e.ctrlKey ? 0.01 : 0.0018 * wheelFactor())), sx, sy);   // IP.3: the style's wheel (a pinch stays as it is)
  }, { passive: false });

  function constrain(from, p, e) { return e.shiftKey ? snap45(from, p) : p; }

  function showCoords(p) {
    const s = curSheet();
    if (!s) { ui.coords.textContent = ''; return; }
    const v = applyT(view.T1, p);
    const cal = store.calibrations.get(s.page.key);
    ui.coords.textContent = settings.posUnit === 'mm'
      ? t('coords.mm', { x: (v[0] / 72 * 25.4).toFixed(1), y: (v[1] / 72 * 25.4).toFixed(1) })
      : t('coords.in', { x: (v[0] / 72).toFixed(2), y: (v[1] / 72).toFixed(2) });
    void cal;
  }

  function hover(p) {
    const m = pick(pickable(), p, tolerance(), envOf);
    const id = m?.id || null;
    let cursor = '';
    const g = gripAt(p);
    if (g) cursor = g.kind === 'box' ? ({ n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize', ne: 'nesw-resize', sw: 'nesw-resize', nw: 'nwse-resize', se: 'nwse-resize' })[g.key] : 'crosshair';
    else if (m && sel.has(m.id) && !m.locked) cursor = 'move';
    else if (m) cursor = 'pointer';
    over.style.cursor = cursor;
    if (id !== hoverId) { hoverId = id; view.invalidate(); }
  }

  function gripAt(p) {
    if (sel.size !== 1) return null;
    const m = store.get([...sel][0]);
    if (!m || m.sheet !== curKey()) return null;
    const tol = (touchMode ? 16 : 6) / view.z;
    // vertex grips first (they sit on top of box grips of the same markup)
    const gs = grips(m).sort((a, b) => (a.kind === 'box') - (b.kind === 'box'));
    return gs.find((g) => Math.abs(g.x - p[0]) <= tol && Math.abs(g.y - p[1]) <= tol) || null;
  }

  function selectDown(p, sx, sy, e) {
    const g = gripAt(p);
    if (g) { const m = store.get([...sel][0]); drag = { kind: 'grip', id: m.id, grip: g, m0: clone(m), a: p, sx, sy, moved: false }; return; }
    const m = pick(pickable(), p, tolerance(), envOf);
    if (m?.link && (e.ctrlKey || e.metaKey)) { followLink(m); return; }   // Ctrl/⌘+click follows a sheet link (0.4 K9)
    if (m) {
      if (e.shiftKey) {
        if (sel.has(m.id)) sel.delete(m.id); else sel.add(m.id);
        sel = new Set(sel);
        refreshSelection();
        return;
      }
      if (!sel.has(m.id)) { sel = new Set([m.id]); refreshSelection(); }
      const ids = [...sel].filter((id) => store.get(id) && !store.get(id).locked);
      drag = { kind: 'move', ids, m0s: ids.map((id) => clone(store.get(id))), a: p, d: [0, 0], sx, sy, moved: false };
      return;
    }
    if (!e.shiftKey && sel.size) { sel = new Set(); refreshSelection(); }
    drag = { kind: 'window', a: [sx, sy], b: [sx, sy], sx, sy, moved: false };
  }

  // live previews while dragging: originals hidden on the base canvas, moved copies on the overlay
  function liveMove() {
    view.hidden = new Set(drag.ids);
    drag.live = drag.m0s.map((m) => ({ ...m, ...moveBy(m, drag.d[0], drag.d[1]) }));
    view.invalidate(true);
  }
  function liveGrip() {
    view.hidden = new Set([drag.id]);
    drag.live = [{ ...drag.m0, ...applyGrip(drag.m0, drag.grip, drag.p, { shift: drag.shift }) }];
    view.invalidate(true);
  }
  function endMove(d) {
    if (!d.moved || !d.ids.length || (!d.d[0] && !d.d[1])) return;
    store.change(t('undo.move', { n: d.ids.length }), (tx) => { for (const m of d.m0s) tx.update(m.id, moveBy(m, d.d[0], d.d[1])); });
    refreshAll();
  }
  function endGrip(d) {
    if (!d.moved) return;
    const patch = applyGrip(d.m0, d.grip, d.p, { shift: d.shift });
    store.change(t('undo.resize', { type: tlow(d.m0.type) }), (tx) => tx.update(d.id, patch));
    refreshAll();
  }
  function endWindow(d, add) {
    if (!d.moved) return;
    const a = view.toUser(d.a[0], d.a[1]), b = view.toUser(d.b[0], d.b[1]);
    const r = [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])];
    const crossing = d.b[0] < d.a[0];
    const hits = pickWindow(pickable(), r, crossing, envOf);
    sel = add ? new Set([...sel, ...hits.map((m) => m.id)]) : new Set(hits.map((m) => m.id));
    refreshSelection();
    status(hits.length ? t('select.window', { n: hits.length }) : t(crossing ? 'select.window.none_touch' : 'select.window.none_inside'));
  }

  function finishFree(pts) {
    if (!curSheet()) return;
    const clean = pts.length > 2 ? simplify(pts, 0.6 / view.z) : pts;
    if (clean.length === 1) clean.push([clean[0][0] + 0.01, clean[0][1]]);
    commitNew(newMarkup(tool, { pts: clean }));
  }

  function finishTwo(a, b) {
    if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 2 / view.z) { status(t('two.same')); return; }
    if (tool === 'calibrate') { calibrateDialog(Math.hypot(b[0] - a[0], b[1] - a[1]), [a, b]); return; }
    if (tool === 'measure') {
      const cal = store.calibrations.get(curKey());
      if (!cal) { status(t('need.scale')); return; }
      const mk = commitNew(newMarkup('measure', { pts: [a, b] }));
      status(t('measure.done', { value: measure(Math.hypot(b[0] - a[0], b[1] - a[1]), cal), scale: cal.label }));
      return mk;
    }
    commitNew(newMarkup(tool, { pts: [a, b] }));
  }

  function finishBox(a, b) {
    if (!curSheet()) return;
    if (tool === 'stamp' && !toolPreset && currentPicture()) { placePicture(currentPicture(), a, b); return; }
    if (tool === 'stamp') {
      const label = toolPreset?.label || stampLabel(settings.stamp);
      const rect = b ? [a[0], a[1], b[0], b[1]] : stampBox(a, label);
      if (b && (Math.abs(b[0] - a[0]) < 8 / view.z || Math.abs(b[1] - a[1]) < 8 / view.z)) return;
      commitNew(newMarkup('stamp', { rect }));
      return;
    }
    if (tool === 'text') {
      const st = styleFor('text');
      const rect = b ? [a[0], a[1], b[0], b[1]] : textBoxAt(a, clampPt(200 / view.z, 120, 360), st.fontSize * 1.2 + 6);
      startEdit(newMarkup('text', { rect }), true);
      return;
    }
    if (!b) { status(t('box.drag', { type: tlow(tool) })); return; }
    if (Math.abs(b[0] - a[0]) < 2 / view.z && Math.abs(b[1] - a[1]) < 2 / view.z) return;
    commitNew(newMarkup(tool, { rect: [a[0], a[1], b[0], b[1]] }));
  }

  /** A text box whose top-left (as seen on screen) is at p, w × h in user units, in the page's reading frame. */
  function textBoxAt(p, w, h) {
    const f = textFrame(view.seenRotate, [0, 0, 1, 1]);
    const q = [p[0] + f.u[0] * w + f.v[0] * h, p[1] + f.u[1] * w + f.v[1] * h];
    return [Math.min(p[0], q[0]), Math.min(p[1], q[1]), Math.max(p[0], q[0]), Math.max(p[1], q[1])];
  }

  function finishCallout(tip, at) {
    const st = styleFor('callout');
    const f = textFrame(view.seenRotate, [0, 0, 1, 1]);
    let knee = at;
    if (!knee) knee = [tip[0] + (f.u[0] * 50 - f.v[0] * 40) / view.z, tip[1] + (f.u[1] * 50 - f.v[1] * 40) / view.z];
    const w = clampPt(190 / view.z, 120, 300), h = st.fontSize * 1.2 + 10;
    // the box goes on the far side of the knee from the tip (along the reading direction)
    const along = (knee[0] - tip[0]) * f.u[0] + (knee[1] - tip[1]) * f.u[1];
    const gap = 6 / view.z;
    const start = along >= 0 ? [knee[0] + f.u[0] * gap, knee[1] + f.u[1] * gap] : [knee[0] - f.u[0] * (gap + w), knee[1] - f.u[1] * (gap + w)];
    const topLeft = [start[0] - f.v[0] * h / 2, start[1] - f.v[1] * h / 2];
    const rect = textBoxAt(topLeft, w, h);
    startEdit(newMarkup('callout', { rect, pts: [tip, knee] }), true);
  }

  function finishPoly() {
    if (pending?.kind !== 'poly') return;
    const pts = pending.pts.slice(0, -1);
    // a double-click adds the same point twice: drop repeats
    const clean = pts.filter((q, i) => i === 0 || Math.hypot(q[0] - pts[i - 1][0], q[1] - pts[i - 1][1]) > 1 / view.z);
    pending = null;
    const need = tool === 'polyline' ? 2 : 3;
    if (cutFor) { finishCutout(clean); return; }
    if (spaceDraw) { finishSpace(clean); return; }
    if (tool === 'area' && !store.calibrations.get(curKey())) { status(t('need.scale')); view.invalidate(); return; }
    if (clean.length < need) { status(t('poly.need', { type: tlow(tool), n: need })); view.invalidate(); return; }
    commitNew(newMarkup(tool, { pts: clean }));
  }

  // ---- Spaces (0.4 K17): named zones; a markup is in the space holding the middle of its bounds ----
  let spaceDraw = false;
  const spacesOn = (key) => store.onSheet(key).filter((m) => m.type === 'space');
  const hasSpaces = () => store.all().some((m) => m.type === 'space');
  const markupSpace = (m) => spaceOf(m, spacesOn(m.sheet), (x) => boundsOf(x, envOf(x)));
  async function startSpace() {
    if (!curSheet()) { status(t('need.pdf')); return; }
    await setTool('polygon');
    spaceDraw = true;
    status(t('space.hint'));
  }
  async function finishSpace(pts) {
    spaceDraw = false;
    if (pts.length < 3) { status(t('poly.need', { type: tlow('space'), n: 3 })); view.invalidate(); return; }
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-space', maxlength: '60', autocomplete: 'off' });
    const r = await dialog({ title: t('space.name.title'), body: [el('label', { className: 'mc-k', for: 'mc-dlg-space' }, t('space.name')), input],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('space.add'), 'btn-plot']], submit: 'ok', check: () => (input.value.trim() ? '' : t('space.name.need')) });
    if (r.key !== 'ok') { view.invalidate(); return; }
    const m = store.change(t('undo.space'), (tx) => tx.add(newMarkup('space', { pts, label: input.value.trim().slice(0, 60) })));
    sel = new Set([m.id]);
    const n = store.onSheet(m.sheet).filter((x) => x.type !== 'space' && markupSpace(x) === m.label).length;
    status(t('space.added', { name: m.label, n }));
    setTool('select');
    refreshAll();
  }
  function renderSpaces() {
    const list = find('[data-space-list]');
    if (!list) return;
    const spaces = store.all().filter((m) => m.type === 'space').sort((a, b) => sheetOrder(a) - sheetOrder(b) || a.label.localeCompare(b.label));
    list.replaceChildren(...spaces.map((sp) => {
      const n = store.onSheet(sp.sheet).filter((x) => x.type !== 'space' && markupSpace(x) === sp.label).length;
      const sh = sheetByKey(sp.sheet);
      return el('li', { className: 'mc-layer' }, el('span', { className: 'mc-layer-pad' }),
        el('button', { type: 'button', className: 'mc-layer-name', title: t('space.go.title', { name: sp.label }), onclick: async () => { const i = sheets.findIndex((s) => s.page.key === sp.sheet); if (i !== cur) await goTo(i); sel = new Set([sp.id]); view.zoomTo(boundsOf(sp, envOf(sp)), 0.7); refreshAll(); } },
          sp.label, el('span', { className: 'mc-muted' }, ' ', sh ? sh.page.sheetNo || '' : '')),
        el('span', { className: 'mc-muted mc-layer-n' }, String(n)));
    }));
  }
  store.on(() => renderSpaces());
  find('[data-act="space-new"]')?.addEventListener('click', () => startSpace());

  /** Sketch to scale (0.4 K18): while a line or outline is being drawn on a calibrated sheet, typing a number opens a box
   *  for the next point's length (and "< angle"); Enter places it, Esc closes the box. */
  function openSketch(first) {
    ui.canvases.querySelector('.mc-sketch')?.remove();
    const cal = store.calibrations.get(curKey());
    const box = el('input', { type: 'text', className: 'mc-input mc-sketch', value: first, autocomplete: 'off', spellcheck: false, 'aria-label': t('sketch.label'), title: t('sketch.title') });
    const at = pointer || [view.w / 2, view.h / 2];
    box.style.left = Math.min(view.w - 160, at[0] + 14) + 'px';
    box.style.top = Math.min(view.h - 40, at[1] + 14) + 'px';
    const close = () => { box.remove(); ui.over.focus({ preventScroll: true }); };
    box.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (!pending) { close(); return; }
      const from = pending.kind === 'two' ? pending.a : pending.pts[pending.pts.length - 2];
      const toward = pending.kind === 'two' ? (pending.b || pending.a) : pending.pts[pending.pts.length - 1];
      const r = sketchPoint(from, toward, box.value, cal, view.seenRotate);
      if (r.error) { status(t(r.error)); box.select(); return; }
      close();
      if (pending.kind === 'two') { const a = pending.a; pending = null; finishTwo(a, r.pt); }
      else { pending.pts[pending.pts.length - 1] = r.pt; pending.pts.push(r.pt.slice()); status(t('sketch.placed', { len: measure(Math.hypot(r.pt[0] - from[0], r.pt[1] - from[1]), cal) })); }
      view.invalidate();
    });
    box.addEventListener('blur', () => setTimeout(() => box.isConnected && box.remove(), 0));
    ui.canvases.append(box);
    box.focus();
    box.setSelectionRange(box.value.length, box.value.length);
  }

  /** Cut-outs (0.4 K8): with an area selected, "Add a cut-out" draws an outline inside it like an area; one undo step. */
  let cutFor = null;
  async function startCutout(m) {
    await setTool('area');
    cutFor = m.id;
    sel = new Set([m.id]);
    status(t('hole.hint'));
    view.invalidate(true);
  }
  function finishCutout(pts) {
    const m = store.get(cutFor);
    cutFor = null;
    if (!m) return;
    const err = holeProblem(m.pts, m.holes || [], pts);
    if (err) { status(t(err)); view.invalidate(); return; }
    store.change(t('undo.hole.add'), (tx) => tx.update(m.id, { holes: [...(m.holes || []), pts] }));
    sel = new Set([m.id]);
    const v = measureArea(m.pts, envOf(m).cal, [...(m.holes || []), pts]);
    status(t('hole.added', { area: v.area }));
    setTool('select');
    refreshAll();
  }

  /** Arc and angle (0.4 K4): three clicks, then one undo step. */
  function finishThree(pts) {
    const span = Math.max(Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]), Math.hypot(pts[2][0] - pts[1][0], pts[2][1] - pts[1][1]));
    if (span < 2 / view.z) { status(t('poly.need', { type: tlow(tool), n: 3 })); view.invalidate(); return; }
    commitNew(newMarkup(tool, { pts }));
  }

  /** Count tool: a click adds a numbered mark to the selected group, or starts a group; Shift+click removes one. */
  function countClick(p, e) {
    const cur0 = sel.size === 1 ? store.get([...sel][0]) : null;
    const group = cur0 && cur0.type === 'count' && cur0.sheet === curKey() && !cur0.locked ? cur0 : null;
    if (e.shiftKey) {
      if (!group) { status(t('count.remove.need')); return; }
      const tol = 8 / view.z;
      let best = -1, bd = Infinity;
      group.pts.forEach((q, i) => { const d = Math.hypot(q[0] - p[0], q[1] - p[1]); if (d < bd) { bd = d; best = i; } });
      if (best < 0 || bd > tol + group.style.fontSize) { status(group.label ? t('count.remove.miss', { group: group.label }) : t('count.remove.miss.unnamed')); return; }
      if (group.pts.length === 1) { store.change(t('undo.count.remove'), (tx) => tx.remove(group.id)); sel = new Set(); status(t('count.removed_last')); refreshAll(); return; }
      store.change(t('undo.count.remove_mark'), (tx) => tx.update(group.id, { pts: group.pts.filter((_, i) => i !== best) }));
      status(t('count.total', { group: group.label || t('count.default'), n: group.pts.length - 1 }));
      refreshAll();
      return;
    }
    if (group) {
      const g = store.change(t('undo.count'), (tx) => tx.update(group.id, { pts: [...group.pts, [p[0], p[1]]] }));
      status(t('count.total', { group: g.label || t('count.default'), n: g.pts.length }));
      refreshAll();
      return;
    }
    const label = (toolPreset?.label || settings.countLabel || t('count.default')).slice(0, 60);
    const mk = commitNew(newMarkup('count', { pts: [p], label }), t('undo.count.start'));
    status(t('count.started', { group: mk.label }));
  }

  function placeNote(p) {
    const m = newMarkup('note', { pts: [[p[0] - NOTE_SIZE / 2, p[1] + NOTE_SIZE / 2]] });
    startEdit(m, true);
  }

  function cancelOps() {
    drag = null; pending = null; view.hidden = null; cutFor = null; spaceDraw = false;
    if (cmp.aligning) { cmp.aligning = null; cmp.balance = +ui.cmpBalance.value / 100; applyCompare(); }
    view.invalidate(true);
    updateCursor();
  }

  // ---- text editing (a textarea over the markup) ----
  function startEdit(m, isNew = false) {
    commitEdit();
    const field = m.type === 'note' ? 'comment' : m.type === 'stamp' ? null : 'text';
    if (!field) { tabTo('props'); return; }
    editing = { m: clone(m), isNew, field };
    if (!isNew) { view.hidden = new Set([m.id]); }
    const ta = ui.edit;
    ta.value = m[field] || '';
    ta.hidden = false;
    ta.dataset.type = m.type;
    positionEditor();
    view.invalidate(true);
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
    status(m.type === 'note' ? t('edit.note') : t('edit.text'));
  }
  function positionEditor() {
    if (!editing) return;
    const m = editing.m, ta = ui.edit;
    let r;
    if (m.type === 'note') {
      const [x, y] = view.toScreen(m.pts[0]);
      r = [x + 26, y, 260, 110];
      ta.style.fontSize = '';
      ta.style.color = '';
      ta.classList.add('is-note');
    } else {
      const a = view.toScreen([m.rect[0], m.rect[1]]), b = view.toScreen([m.rect[2], m.rect[3]]);
      const x = Math.min(a[0], b[0]), y = Math.min(a[1], b[1]);
      r = [x, y, Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])];
      const px = m.style.fontSize * view.z;
      ta.style.fontSize = Math.max(9, px) + 'px';
      ta.style.lineHeight = '1.2';
      ta.style.color = view.color(m.style.color, {});
      ta.style.fontFamily = SCREEN_FONT;
      ta.classList.remove('is-note');
      ta.style.padding = Math.max(1, (m.type === 'text' ? 3 : 4) * view.z) + 'px';
    }
    ta.style.left = r[0] + 'px'; ta.style.top = r[1] + 'px';
    ta.style.width = Math.max(120, r[2]) + 'px'; ta.style.height = Math.max(m.type === 'note' ? 80 : 24, r[3]) + 'px';
  }
  ui.edit.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); cancelEdit(); }
    else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); commitEdit(); }
    e.stopPropagation();
  });
  ui.edit.addEventListener('input', () => {
    if (!editing || editing.m.type === 'note') return;
    // grow the box downward as the text wraps
    const m = editing.m;
    const f = textFrame(m.rot || 0, m.rect);
    const pad = m.type === 'text' ? 3 : 4;
    const lines = wrapText(ui.edit.value, m.style.fontSize, f.W - 2 * pad);
    const need = m.style.fontSize + (lines.length - 1) * m.style.fontSize * 1.2 + 2 * pad + m.style.fontSize * 0.3;
    if (need > f.H) { m.rect = growDown(m, need); positionEditor(); }
  });
  ui.edit.addEventListener('blur', () => setTimeout(() => { if (editing && document.activeElement !== ui.edit) commitEdit(); }, 0));

  function growDown(m, H) {
    const f = textFrame(m.rot || 0, m.rect);
    const [x0, y0, x1, y1] = m.rect;
    const dv = H - f.H;
    // extend along v (down on screen)
    if (f.v[1] === -1) return [x0, y0 - dv, x1, y1];
    if (f.v[1] === 1) return [x0, y0, x1, y1 + dv];
    if (f.v[0] === 1) return [x0, y0, x1 + dv, y1];
    return [x0 - dv, y0, x1, y1];
  }

  function commitEdit() {
    if (!editing) return;
    const ed = editing;
    editing = null;
    ui.edit.hidden = true;
    view.hidden = null;
    const value = ui.edit.value.replace(/\s+$/, '');
    if (ed.isNew) {
      if (!value && ed.m.type !== 'note') { status(t('edit.empty', { type: tlow(ed.m.type) })); view.invalidate(true); return; }
      commitNew({ ...ed.m, [ed.field]: value });
    } else if (value !== (store.get(ed.m.id)?.[ed.field] || '') || JSON.stringify(ed.m.rect) !== JSON.stringify(store.get(ed.m.id)?.rect)) {
      store.change(t('undo.edit_text'), (tx) => tx.update(ed.m.id, { [ed.field]: value, ...(ed.m.rect ? { rect: ed.m.rect } : {}) }));
      refreshAll();
    }
    status('');
    view.invalidate(true);
    ui.over.focus({ preventScroll: true });
  }
  function cancelEdit() {
    if (!editing) return;
    editing = null;
    ui.edit.hidden = true;
    view.hidden = null;
    view.invalidate(true);
    status('');
    ui.over.focus({ preventScroll: true });
  }

  // ---- painting ----
  view.onBase = (ctx) => {
    for (const m of pageMarkups()) {
      if (m.type === 'foreign') continue;
      if (view.hidden?.has(m.id)) continue;
      view.paint(ctx, displayOf(m, envOf(m)).list);
    }
  };

  view.onOver = (ctx) => {
    const key = curKey();
    const line = (pts, color, w = 1, dash = null) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
      ctx.beginPath(); pts.forEach((p, i) => { const [x, y] = view.toScreen(p); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    };
    const boxOf = (b, color, dash) => {
      if (!b) return;
      const a = view.toScreen([b[0], b[1]]), c = view.toScreen([b[2], b[3]]);
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.setLineDash(dash || []);
      ctx.strokeRect(Math.round(Math.min(a[0], c[0]) - 3) + 0.5, Math.round(Math.min(a[1], c[1]) - 3) + 0.5, Math.round(Math.abs(c[0] - a[0]) + 6), Math.round(Math.abs(c[1] - a[1]) + 6));
      ctx.restore();
    };
    // live drag previews
    if (drag?.live) for (const m of drag.live) view.paint(ctx, shapes(m, envOf(m)));
    if (editing) boxOf(editing.m.rect || boundsOf(editing.m, envOf(editing.m)), view.colors.action, [4, 3]);
    // sheet links (K9): a small arrow at the top right of each linked markup (screen only)
    for (const m of pageMarkups()) {
      if (!m.link) continue;
      const b = boundsOf(m, envOf(m));
      if (!b) continue;
      const [x, y] = view.toScreen([b[2], b[3]]);
      ctx.save(); ctx.fillStyle = view.colors.action; ctx.font = '600 11px ' + SCREEN_FONT; ctx.fillText('\u2197', x + 2, y + 2); ctx.restore();   // i18n-ignore (an arrow)
    }
    // compare by lines (K12): removed in red, added in blue, over the new sheet
    if (cmp.on && cmp.mode === 'lines' && cmp.vec && key === cmp.newKey) {
      for (const [list, color] of [[cmp.vec.removed, view.colors.red], [cmp.vec.added, view.colors.blue]]) {
        ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.beginPath();
        for (const q of list) { const [x1, y1] = view.toScreen([q[0], q[1]]), [x2, y2] = view.toScreen([q[2], q[3]]); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); }
        ctx.stroke(); ctx.restore();
      }
    }
    // text found by Find (K14): every hit on this sheet, the chosen one stronger
    if (found.hits.length) {
      ctx.save();
      found.hits.forEach((h, i) => {
        if (h.key !== key) return;
        const a = view.toScreen([h.rect[0], h.rect[1]]), c = view.toScreen([h.rect[2], h.rect[3]]);
        ctx.fillStyle = i === found.at ? 'rgba(255, 170, 0, 0.45)' : 'rgba(255, 200, 0, 0.28)';
        ctx.fillRect(Math.min(a[0], c[0]) - 2, Math.min(a[1], c[1]) - 2, Math.abs(c[0] - a[0]) + 4, Math.abs(c[1] - a[1]) + 4);
      });
      ctx.restore();
    }
    // hover
    if (hoverId && !sel.has(hoverId) && !drag) {
      const m = store.get(hoverId);
      if (m && m.sheet === key) boxOf(boundsOf(m, envOf(m)), mix(view.colors.action, view.colors.sheet, 0.4), [2, 3]);
    }
    // selection
    for (const id of sel) {
      const m0 = store.get(id);
      if (!m0 || m0.sheet !== key) continue;
      const m = drag?.live?.find((x) => x.id === id) || m0;
      boxOf(boundsOf(m, envOf(m)), m.locked ? view.colors.ink2 : view.colors.action, m.locked ? [3, 3] : [5, 3]);
      if (sel.size === 1 && !m.locked) {
        for (const g of grips(m)) {
          const [x, y] = view.toScreen([g.x, g.y]);
          ctx.save();
          ctx.fillStyle = view.colors.sheet; ctx.strokeStyle = view.colors.action; ctx.lineWidth = 1.5;
          ctx.beginPath();
          const gs = touchMode ? 1.7 : 1;   // bigger grips for a finger
          if (g.kind === 'box') ctx.rect(Math.round(x) - 4.5 * gs, Math.round(y) - 4.5 * gs, 9 * gs, 9 * gs);
          else if (g.kind === 'vertex') ctx.arc(x, y, 4.5 * gs, 0, Math.PI * 2);
          else { const d = 6 * gs; ctx.moveTo(x, y - d); ctx.lineTo(x + d, y); ctx.lineTo(x, y + d); ctx.lineTo(x - d, y); ctx.closePath(); }
          ctx.fill(); ctx.stroke(); ctx.restore();
        }
      }
    }
    // drawing previews
    const s = curSheet();
    if (!s) return;
    const preview = (m) => view.paint(ctx, shapes(m, envOf(m)), { alpha: 0.85 });
    if (drag?.kind === 'free') preview(newMarkup(tool, { pts: drag.pts.length > 1 ? drag.pts : [drag.pts[0], drag.pts[0]] }));
    if (drag?.kind === 'box' && drag.b !== drag.a) {
      if (tool === 'text') boxOf([Math.min(drag.a[0], drag.b[0]), Math.min(drag.a[1], drag.b[1]), Math.max(drag.a[0], drag.b[0]), Math.max(drag.a[1], drag.b[1])], view.colors.action, [4, 3]);
      else preview(newMarkup(tool, { rect: [drag.a[0], drag.a[1], drag.b[0], drag.b[1]] }));
    }
    const two = drag?.kind === 'two' ? drag : pending?.kind === 'two' ? pending : null;
    if (two && two.b) {
      if (tool === 'calibrate') {
        line([two.a, two.b], view.colors.action, 2);
        for (const p of [two.a, two.b]) { const [x, y] = view.toScreen(p); ctx.save(); ctx.strokeStyle = view.colors.action; ctx.beginPath(); ctx.arc(x, y, 5, 0, 7); ctx.stroke(); ctx.restore(); }
      } else preview(newMarkup(tool, { pts: [two.a, two.b] }));
    }
    if (pending?.kind === 'three') preview(newMarkup(tool, { pts: pending.pts.slice() }));
    if (pending?.kind === 'poly') {
      const pts = pending.pts;
      if (tool === 'polyline' || pts.length < 3) preview(newMarkup('polyline', { pts, style: styleFor(tool) }));
      else preview(newMarkup(tool, { pts }));
    }
    if (drag?.kind === 'callout') {
      line([drag.tip, drag.b], styleFor('callout').color, 1.5, [5, 3]);
    }
    if (drag?.kind === 'window' && drag.moved) {
      const [ax, ay] = drag.a, [bx, by] = drag.b;
      const crossing = bx < ax;
      ctx.save();
      ctx.fillStyle = mix(crossing ? view.colors.green : view.colors.action, view.colors.sheet, 0.85);
      ctx.globalAlpha = 0.35;
      ctx.fillRect(Math.min(ax, bx), Math.min(ay, by), Math.abs(bx - ax), Math.abs(by - ay));
      ctx.globalAlpha = 1;
      ctx.strokeStyle = crossing ? view.colors.green : view.colors.action;
      ctx.setLineDash(crossing ? [5, 3] : []);
      ctx.strokeRect(Math.min(ax, bx) + 0.5, Math.min(ay, by) + 0.5, Math.abs(bx - ax), Math.abs(by - ay));
      ctx.restore();
    }
    if (cmp.aligning) {
      for (const [i, p] of cmp.aligning.pts.entries()) {
        const [x, y] = view.toScreen(p.screenUser);
        ctx.save(); ctx.strokeStyle = i < 2 ? view.colors.red : view.colors.blue; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x - 8, y); ctx.lineTo(x + 8, y); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8); ctx.stroke(); ctx.restore();
      }
    }
  };
  view.hidden = null;

  // ---- keyboard ----
  const typing = (t) => t && (t.closest?.('input, textarea, select, [contenteditable="true"]') || t.isContentEditable);
  window.addEventListener('keydown', (e) => {
    if (root.querySelector('dialog[open]')) return;
    if (typing(e.target)) return;
    const k = e.key;
    if (e.target.closest?.('button, a, summary') /* i18n-ignore */ && (k.startsWith('Arrow') || k === ' ' || k === 'Enter')) return;
    const mod = e.ctrlKey || e.metaKey;
    if (k === ' ' && !mod) { if (!spaceDown) { spaceDown = true; updateCursor(); } e.preventDefault(); return; }
    if (e.altKey && k === 'ArrowLeft' && backStack.length) { e.preventDefault(); goBack(); return; }
    if (mod) {
      const lk = k.toLowerCase();
      if (lk === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      else if (lk === 'y' || (lk === 'z' && e.shiftKey)) { e.preventDefault(); redo(); }
      else if (lk === 's') { e.preventDefault(); saveFiles('ask'); }
      else if (lk === 'o') { e.preventDefault(); act('open'); }
      else if (lk === 'n' && !e.shiftKey && !e.altKey) { e.preventDefault(); act('new'); }   // when the browser hands it over (Chrome keeps it in a tab; the desktop app and Studio pass it)
      else if (lk === 'p') { if (files.length) { e.preventDefault(); printSheets(); } }
      else if (lk === 'f' && findUi.box) { e.preventDefault(); findUi.box.open = true; findUi.q.focus(); findUi.q.select(); }
      else if (lk === 'a' && curSheet()) { e.preventDefault(); selectAll(); }
      else if (lk === 'x') { if (sel.size) { e.preventDefault(); cutSelection(); } }
      else if (lk === 'c') { if (sel.size) { e.preventDefault(); copySelection(); } }
      else if (lk === 'v') { e.preventDefault(); paste(e.shiftKey ? 'place' : pasteMode()); }
      else if (lk === 'd') { e.preventDefault(); duplicate(); }
      else if (k === '0') { e.preventDefault(); view.fit('page'); }
      else if (k === '9') { e.preventDefault(); view.fit('width'); }
      else if (k === '=' || k === '+') { e.preventDefault(); view.zoomAt(1.25, view.w / 2, view.h / 2); }
      else if (k === '-') { e.preventDefault(); view.zoomAt(0.8, view.w / 2, view.h / 2); }
      return;
    }
    if (k === 'Escape') {
      if (root.querySelector('details.mc-menu[open]')) { closeMenus(); return; }
      if (drag || pending || cmp.aligning) { cancelOps(); status(t('canceled')); }
      else if (sel.size) { sel = new Set(); refreshSelection(); }
      else if (tool !== 'select') setTool('select');
      return;
    }
    if (/^[0-9.]$/.test(k) && !mod && (pending?.kind === 'poly' || pending?.kind === 'two') && store.calibrations.get(curKey())) { e.preventDefault(); openSketch(k); return; }
    if (k === 'Enter') { if (pending?.kind === 'poly') { e.preventDefault(); finishPoly(); } else if (sel.size === 1 && tool === 'select') { const m = store.get([...sel][0]); if (m && !m.locked) { e.preventDefault(); startEdit(m); } } return; }
    if (k === 'Backspace' && pending?.kind === 'poly') {
      e.preventDefault();
      if (pending.pts.length > 2) { pending.pts.splice(pending.pts.length - 2, 1); } else pending = null;
      view.invalidate();
      return;
    }
    if (k === 'Delete' || k === 'Backspace') { if (sel.size) { e.preventDefault(); deleteSelection(); } return; }
    if (k === 'PageDown') { e.preventDefault(); act('next'); return; }
    if (k === 'PageUp') { e.preventDefault(); act('prev'); return; }
    if (k === '+' || k === '=') { view.zoomAt(1.25, view.w / 2, view.h / 2); return; }
    if (k === '-') { view.zoomAt(0.8, view.w / 2, view.h / 2); return; }
    if (k.startsWith('Arrow') && sel.size && tool === 'select') {
      e.preventDefault();
      const step = (e.shiftKey ? 10 : 1) / view.z;
      const v = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[k];
      // arrows move on screen; convert to user space
      const a = view.toUser(0, 0), b = view.toUser(v[0] * step * view.z, v[1] * step * view.z);
      const d = [b[0] - a[0], b[1] - a[1]];
      const list = editable();
      if (list.length) { store.change(t('undo.nudge'), (tx) => { for (const m of list) tx.update(m.id, moveBy(m, d[0], d[1])); }); refreshAll(); }
      return;
    }
    if (k.startsWith('Arrow') && view.page) {
      e.preventDefault();
      const v = { ArrowLeft: [60, 0], ArrowRight: [-60, 0], ArrowUp: [0, 60], ArrowDown: [0, -60] }[k];
      view.panBy(v[0], v[1]);
      return;
    }
    const lk = k.toLowerCase();
    if (lk === 'c' && e.shiftKey) { toolPreset = null; setTool('cloud'); return; }
    if (KEYS[lk] && !e.altKey) { toolPreset = null; setTool(KEYS[lk]); }
  });
  window.addEventListener('keyup', (e) => { if (e.key === ' ') { spaceDown = false; updateCursor(); } });
  window.addEventListener('blur', () => { spaceDown = false; updateCursor(); });

  // ---- drop files ----
  let dragDepth = 0;
  ui.stage.addEventListener('dragenter', (e) => { if ([...(e.dataTransfer?.types || [])].includes('Files')) { e.preventDefault(); dragDepth++; ui.drop.hidden = false; } });
  ui.stage.addEventListener('dragover', (e) => { if ([...(e.dataTransfer?.types || [])].includes('Files')) e.preventDefault(); });
  ui.stage.addEventListener('dragleave', () => { dragDepth = Math.max(0, dragDepth - 1); if (!dragDepth) ui.drop.hidden = true; });
  ui.stage.addEventListener('drop', (e) => {
    e.preventDefault(); dragDepth = 0; ui.drop.hidden = true;
    const list = [...(e.dataTransfer?.files || [])];
    if (list.length) openFiles(list);
  });

  // ---- tabs ----
  // read live: add-ons add tabs of their own (0.5 AO.6, ui.panelTab), which hear 'cc-tab-shown' when shown
  const allTabs = () => findAll('[data-tab]');
  function tabTo(k) {
    for (const t of allTabs()) {
      const on = t.dataset.tab === k;
      t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
      const pane = find('[data-pane="' + t.dataset.tab + '"]');
      if (pane) { pane.hidden = !on; if (on && pane.dataset.addon) pane.dispatchEvent(new CustomEvent('cc-tab-shown')); }
    }
    if (k === 'list') renderList();
    if (k === 'punch') renderPunch();
    if (k === 'chest') renderChest();
    if (k === 'compare') renderCompareSelects();
  }
  const tabList = find('.mc-right [role="tablist"]');
  tabList?.addEventListener('click', (e) => { const b = e.target.closest('[data-tab]'); if (b) tabTo(b.dataset.tab); });
  tabList?.addEventListener('keydown', (e) => {
    const b = e.target.closest('[data-tab]');
    if (!b) return;
    const tabs = allTabs(), i = tabs.indexOf(b);
    const j = e.key === 'ArrowRight' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length : -1;
    if (j >= 0) { e.preventDefault(); tabs[j].focus(); tabTo(tabs[j].dataset.tab); }
  });
  const activeTab = () => allTabs().find((t) => t.getAttribute('aria-selected') === 'true')?.dataset.tab;

  // ---- properties ----
  function field(label, input, id) { return [el('label', { for: id, className: 'mc-k' }, label), input]; }
  let uid = 0;
  const fid = () => 'mc-f' + (++uid);

  /** Apply a patch to the selected markups (one undo step). */
  function patchSel(label, fn) {
    const list = editable();
    if (!list.length) return;
    store.change(label, (tx) => { for (const m of list) { const p = fn(m); if (p) tx.update(m.id, p); } });
    refreshAll();
  }

  function styleControls(st, apply, types) {
    const out = [];
    const hasText = types.some((t) => TEXT_TYPES.has(t));
    const fillable = types.some((t) => ['rect', 'ellipse', 'polygon', 'cloud', 'cloudrect', 'text', 'callout', 'area'].includes(t));
    const lineless = types.every((t) => t === 'note');
    let id = fid();
    out.push(...field(t('props.color'), el('input', { type: 'color', id, className: 'mc-color', value: st.color, onchange: (e) => apply({ color: e.target.value }) }), id));
    if (!lineless) {
      id = fid();
      out.push(...field(types.includes('highlight') && types.length === 1 ? t('props.width') : t('props.line_width'), el('input', { type: 'number', id, className: 'mc-input mc-num', min: '0', max: '72', step: '0.25', value: String(st.width), onchange: (e) => { const v = parseFloat(e.target.value); if (Number.isFinite(v) && v >= 0) apply({ width: Math.min(72, v) }); } }), id));
    }
    if (fillable) {
      id = fid();
      const on = el('input', { type: 'checkbox', id, checked: !!st.fill, onchange: (e) => apply({ fill: e.target.checked ? (st.fill || mix(st.color, '#ffffff', 0.6)) : null }) });
      const col = el('input', { type: 'color', className: 'mc-color', value: st.fill || mix(st.color, '#ffffff', 0.6), 'aria-label': t('props.fill_color'), disabled: !st.fill, onchange: (e) => apply({ fill: e.target.value }) });
      out.push(el('label', { for: id, className: 'mc-k' }, t('props.fill')), el('span', { className: 'mc-row' }, on, col));
      if (st.fill) {
        id = fid();
        out.push(...field(t('props.fill_opacity'), el('input', { type: 'range', id, min: '0', max: '100', step: '5', value: String(Math.round((st.fillOpacity ?? 1) * 100)), onchange: (e) => apply({ fillOpacity: +e.target.value / 100 }) }), id));
      }
    }
    id = fid();
    out.push(...field(t('props.opacity'), el('input', { type: 'range', id, min: '5', max: '100', step: '5', value: String(Math.round((st.opacity ?? 1) * 100)), onchange: (e) => apply({ opacity: +e.target.value / 100 }) }), id));
    if (hasText || types.some((t) => t === 'measure' || t === 'area' || t === 'count')) {
      id = fid();
      out.push(...field(t('props.text_size'), el('input', { type: 'number', id, className: 'mc-input mc-num', min: '4', max: '144', step: '1', value: String(st.fontSize), onchange: (e) => { const v = parseFloat(e.target.value); if (v >= 4 && v <= 144) apply({ fontSize: v }); } }), id));
    }
    return out;
  }

  function stampChooser(current, onPick, pictures = false) {
    const id = fid();
    // the built-in stamps read in the page's language: a stamp's label is what prints on the sheet
    const builtIn = stamps();
    const isCustom = current && !isPic(current) && !builtIn.includes(current) && !STAMPS.includes(current);
    const select = el('select', { id, className: 'mc-select' }, ...builtIn.map((s) => el('option', { value: s, selected: s === current || s === stampLabel(current) }, s)), el('option', { value: '__custom', selected: isCustom }, t('stamp.custom')),
      ...(pictures ? [el('option', { value: PIC, selected: current === PIC }, t('stamp.picture')), el('option', { value: SIG, selected: current === SIG }, t('stamp.signature'))] : []));
    const cid = fid();
    const custom = el('input', { type: 'text', id: cid, className: 'mc-input', maxlength: '60', placeholder: t('stamp.text'), value: isCustom ? current : '', hidden: !isCustom });
    select.addEventListener('change', () => { if (select.value === '__custom') { custom.hidden = false; custom.focus(); } else { custom.hidden = true; onPick(select.value); } });
    custom.addEventListener('change', () => { const v = custom.value.trim(); if (v) onPick(v.slice(0, 60)); });
    return [el('label', { for: id, className: 'mc-k' }, t('stamp.label')), el('span', { className: 'mc-stack' }, select, el('label', { for: cid, className: 'visually-hidden' }, t('stamp.custom.label')), custom)];
  }

  function renderProps() {
    const box = ui.props;
    box.replaceChildren();
    const s = curSheet();
    const list = [...sel].map((id) => store.get(id)).filter(Boolean);
    if (list.length === 1) { ui.propsH.textContent = list[0].locked ? t('props.h.locked') : TYPES[list[0].type] ? tname(list[0].type) : t('props.h.markup'); box.append(markupProps(list[0])); return; }
    if (list.length > 1) { ui.propsH.textContent = t('save.markups', { n: list.length }); box.append(multiProps(list)); return; }
    if (DRAW_TOOLS.has(tool)) {
      ui.propsH.textContent = t('props.h.tool', { tool: toolPreset?.name ? toolPreset.name : tname(tool) });
      const st = styleFor(tool);
      const grid = el('div', { className: 'mc-props' });
      if (tool === 'count') {
        const cid = fid();
        grid.append(el('label', { for: cid, className: 'mc-k' }, t('props.group')), el('input', { type: 'text', id: cid, className: 'mc-input', maxlength: '60', value: toolPreset?.label || settings.countLabel || t('count.default'),
          onchange: (e) => { const v = e.target.value.trim().slice(0, 60) || t('count.default'); if (toolPreset) toolPreset.label = v; else { settings.countLabel = v; saveSettings(); } } }));
      }
      if (tool === 'stamp') grid.append(...stampChooser(toolPreset?.label || (isPic(settings.stamp) ? settings.stamp : stampLabel(settings.stamp)), async (v) => {
        if (v === PIC) { if (await choosePicture()) toolPreset = null; renderProps(); return; }
        if (v === SIG) { if (lsGet(LS_SIG, null)?.src || await drawSignature()) { settings.stamp = SIG; saveSettings(); toolPreset = null; status(t('image.signature.ready')); } renderProps(); return; }
        if (toolPreset) toolPreset.label = v; else settings.stamp = v; saveSettings(); renderProps(); status(t('stamp.picked', { stamp: v }));
      }, !toolPreset));
      if (tool === 'stamp' && !toolPreset && currentPicture()) {
        const pic = currentPicture();
        grid.append(el('span', { className: 'mc-k' }, t('image.preview')), el('span', { className: 'mc-stack' },
          el('img', { className: 'mc-pic-preview', src: pic.src, alt: pic.label }),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: async () => { if (settings.stamp === SIG) await drawSignature(); else await choosePicture(); renderProps(); } }, settings.stamp === SIG ? t('image.signature.again') : t('image.pick.again'))));
      }
      grid.append(...styleControls(st, (patch) => {
        if (toolPreset) toolPreset.style = { ...toolPreset.style, ...patch };
        else { settings.styles[tool] = { ...(settings.styles[tool] || {}), ...patch }; saveSettings(); }
        renderProps();
      }, [tool]));
      box.append(grid, el('p', { className: 'mc-note' }, toolPreset ? t('props.tool.preset', { tool: toolPreset.name }) : t('props.tool.note', { type: tlow(tool) })));
      if (NEEDS_SCALE.has(tool) && s) box.append(el('p', { className: 'mc-note' }, t('props.tool.scale', { scale: store.calibrations.get(s.page.key)?.label || t('props.tool.scale.none') })));
      return;
    }
    ui.propsH.textContent = s ? t('props.h.sheet') : t('tab.props');
    if (!s) { box.append(el('p', { className: 'mc-note' }, t('props.empty'))); return; }
    const cal = store.calibrations.get(s.page.key);
    const dl = el('dl', { className: 'mc-dl' });
    const row = (k, v) => { if (v !== '' && v !== null && v !== undefined) dl.append(el('dt', {}, k), el('dd', {}, String(v))); };
    row(t('props.sheet'), s.page.name || s.page.title);
    row(t('props.sheet_number'), s.page.sheetNo);
    // i18n-ignore: 'title block' is pdf-read.js's source key
    row(t('props.read_from'), { manual: t('props.from.manual'), label: t('props.from.label'), 'title block': t('props.from.title_block'), file: t('props.from.file') }[s.page.from] || '');
    row(t('props.file'), s.file.name);
    row(t('props.page'), t('props.page.of', { i: s.page.index + 1, n: s.file.pages.length }));
    const vw = s.page.rotate % 180 ? s.page.height : s.page.width, vh = s.page.rotate % 180 ? s.page.width : s.page.height;
    row(t('props.paper'), t('props.paper.in', { w: (vw / 72).toFixed(2), h: (vh / 72).toFixed(2) }));
    if (s.page.rotate) row(t('props.rotation'), t('props.rotation.deg', { n: s.page.rotate }));
    row(t('props.scale'), cal ? cal.label : t('status.scale.none'));
    row(t('tab.list'), store.onSheet(s.page.key).length);
    if (s.file.foreignCount) row(t('props.read_only'), t('props.read_only.count', { n: s.file.foreignCount }));
    box.append(dl, el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => calibrateDialog(null) }, cal ? t('props.scale.change') : t('tool.calibrate')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { act: 'sheet-rename' } }, t('props.rename'))));
    box.append(el('p', { className: 'mc-note' }, t('props.sheet.note')));
  }

  function markupProps(m) {
    const wrap = el('div', {});
    const env = envOf(m);
    const dl = el('dl', { className: 'mc-dl' });
    const row = (k, v) => { if (v !== '' && v !== null && v !== undefined) dl.append(el('dt', {}, k), el('dd', {}, String(v))); };
    row(t('props.author'), m.author || t('props.author.none'));
    row(t('props.created'), dateTime(m.created));
    if (m.modified && m.modified !== m.created) row(t('props.modified'), dateTime(m.modified));
    const s = sheetByKey(m.sheet);
    if (s && m.sheet !== curKey()) row(t('props.sheet'), s.page.title);
    for (const [k, v] of valueRows(m)) row(k, v);
    if (m.locked) {
      row(t('props.type'), m.src?.subtype || t('props.annotation'));
      row(t('props.subject'), m.subject);
      row(t('props.comment'), m.comment);
      wrap.append(dl, el('p', { className: 'mc-note' }, t('props.locked.note')), threadSection(m));
      return wrap;
    }
    wrap.append(dl);
    const grid = el('div', { className: 'mc-props' });
    const upd = (label, patch) => { store.change(label, (tx) => tx.update(m.id, patch)); refreshAll(); };
    let id = fid();
    grid.append(...field(t('props.status'), el('select', { id, className: 'mc-select', onchange: (e) => upd(t('undo.status'), { status: e.target.value, replies: [...m.replies, statusReply(e.target.value, author)] }) }, ...STATUSES.map((st) => el('option', { value: st, selected: st === m.status }, stname(st)))), id));
    id = fid();
    grid.append(...field(t('props.subject'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '120', value: m.subject, onchange: (e) => upd(t('undo.subject'), { subject: e.target.value.slice(0, 120) }) }), id));
    id = fid();
    for (const c of store.columns) {
      id = fid();
      const v = m.fields?.[c.key] ?? '';
      const setField = (val) => { const err = fieldOk(c, val); if (err) { status(t(err, { col: c.name })); renderProps(); return; } const f = { ...(m.fields || {}) }; if (String(val).trim()) f[c.key] = String(val).trim(); else delete f[c.key]; upd(t('undo.field', { col: c.name }), { fields: f }); };
      const input = c.type === 'choice'
        ? el('select', { id, className: 'mc-select', onchange: (e) => setField(e.target.value) }, el('option', { value: '', selected: !v }, '—'), ...c.choices.map((ch) => el('option', { value: ch, selected: ch === v }, ch)))
        : el('input', { type: c.type === 'date' ? 'date' : 'text', id, className: 'mc-input', value: v, maxlength: '500', inputmode: c.type === 'number' ? 'decimal' : undefined, onchange: (e) => setField(e.target.value) });
      grid.append(...field(c.name, input, id));
    }
    id = fid();
    grid.append(...field(t('props.link'), el('select', { id, className: 'mc-select', onchange: (e) => upd(t('undo.link'), { link: e.target.value }) },
      el('option', { value: '', selected: !m.link }, t('link.none')),
      ...(m.link && !linkTarget(m.link, sheetList()) ? [el('option', { value: m.link, selected: true }, t('link.not_open', { sheet: m.link }))] : []),
      ...sheets.map((s) => { const v = s.page.sheetNo || s.page.title; return el('option', { value: v, selected: !!m.link && linkTarget(m.link, sheetList())?.key === s.page.key }, s.page.title); })), id));
    if (m.link) grid.append(el('span', {}), el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('link.go.title'), onclick: () => followLink(m) }, el('i', { className: 'bi bi-box-arrow-up-right', 'aria-hidden': 'true' }), ' ', t('link.go', { sheet: m.link })));
    id = fid();
    grid.append(...field(t('props.layer'), layerSelect(id, m.layer, async (v) => { const n = v === '\u0001new' ? await askLayerName() : v; if (n === null) { renderProps(); return; } if (n) store.setLayer(n); upd(t('undo.layer'), { layer: n }); }), id));
    if (m.type === 'legend') {
      id = fid();
      grid.append(...field(t('legend.title.field'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '60', value: m.label, onchange: (e) => upd(t('undo.legend.edit'), { label: e.target.value.trim().slice(0, 60) }) }), id));
      id = fid();
      grid.append(...field(t('legend.scope'), el('select', { id, className: 'mc-select', onchange: (e) => upd(t('undo.legend.edit'), { legend: { scope: e.target.value } }) },
        el('option', { value: 'sheet', selected: m.legend?.scope !== 'set' }, t('legend.scope.sheet')), el('option', { value: 'set', selected: m.legend?.scope === 'set' }, t('legend.scope.set'))), id));
    }
    if (m.type === 'space') {
      id = fid();
      grid.append(...field(t('space.name.field'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '60', value: m.label, onchange: (e) => { const v = e.target.value.trim().slice(0, 60); if (v) upd(t('undo.space.rename'), { label: v }); else renderProps(); } }), id));
    }
    if (m.type === 'count') {
      id = fid();
      grid.append(...field(t('props.group'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '60', value: m.label, onchange: (e) => upd(t('undo.count.rename'), { label: e.target.value.trim().slice(0, 60) || t('count.default') }) }), id));
    }
    if (m.type === 'stamp') grid.append(...stampChooser(m.label, (v) => upd(t('undo.stamp'), { label: v, style: { ...m.style, color: m.style.color === stampColor(m.label) ? stampColor(v) : m.style.color } })));
    if (TEXT_TYPES.has(m.type)) {
      id = fid();
      grid.append(el('label', { for: id, className: 'mc-k span' }, t('props.text')), el('textarea', { id, className: 'mc-input span', rows: '3', value: m.text, onchange: (e) => upd(t('undo.edit_text'), { text: e.target.value }) }));
    }
    id = fid();
    grid.append(el('label', { for: id, className: 'mc-k span' }, m.type === 'note' ? t('props.note') : t('props.comment')), el('textarea', { id, className: 'mc-input span', rows: '3', value: m.comment, onchange: (e) => upd(t('undo.comment'), { comment: e.target.value }) }));
    grid.append(el('p', { className: 'mc-props-sub' }, t('props.style')));
    grid.append(...styleControls(m.style, (patch) => upd(t('undo.style'), { style: { ...m.style, ...patch } }), [m.type]));
    wrap.append(grid, threadSection(m));
    // punch item
    const pg = el('div', { className: 'mc-props' });
    pg.append(el('p', { className: 'mc-props-sub' }, t('tab.punch')));
    if (m.punch) {
      pg.append(el('span', { className: 'mc-k' }, t('punch.number')), el('span', { className: 'v' }, String(m.punch.n)));
      pg.append(...punchFields(m));
      pg.append(el('span', {}), el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => upd(t('punch.remove'), { punch: null }) }, t('punch.remove')));
    } else {
      pg.append(el('span', { className: 'span' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => addToPunch([m.id]) }, t('punch.add.one'))));
    }
    wrap.append(pg);
    wrap.append(el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => saveToChest(m) }, t('chest.save.one')),
      sheets.length > 1 ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => copyToSheets(), dataset: { copySheets: '' } }, t('batch.button')) : null,
      TEXT_TYPES.has(m.type) || m.type === 'note' ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => startEdit(m) }, t('props.edit_on_sheet')) : null,
      m.type === 'area' && !m.locked ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => startCutout(m) }, t('hole.add')) : null,
      m.type === 'area' && !m.locked && m.holes?.length ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { store.change(t('undo.hole.remove'), (tx) => tx.update(m.id, { holes: [] })); status(t('hole.removed', { n: m.holes.length })); refreshAll(); } }, t('hole.remove', { n: m.holes.length })) : null,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc mc-danger', onclick: () => deleteSelection() }, t('menu.delete'))));
    return wrap;
  }

  function punchFields(m) {
    const upd = (patch) => { store.change(t('undo.punch'), (tx) => tx.update(m.id, { punch: { ...m.punch, ...patch } })); refreshAll(); };
    let id = fid();
    const out = [];
    out.push(...field(t('punch.assignee'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '80', value: m.punch.assignee, onchange: (e) => upd({ assignee: e.target.value.slice(0, 80) }) }), id));
    id = fid();
    out.push(...field(t('punch.due'), el('input', { type: 'date', id, className: 'mc-input', value: /^\d{4}-\d{2}-\d{2}$/.test(m.punch.due) ? m.punch.due : '', onchange: (e) => upd({ due: e.target.value }) }), id));
    id = fid();
    out.push(...field(t('punch.item_status'), el('select', { id, className: 'mc-select', onchange: (e) => upd({ status: e.target.value }) }, ...PUNCH_STATUSES.map((st) => el('option', { value: st, selected: st === m.punch.status }, pstname(st)))), id));
    return out;
  }

  /** Measured values of a markup as [label, value] rows ('' when the sheet has no scale). */
  const spaceRow = (m) => { const v = hasSpaces() ? markupSpace(m) : ''; return v ? [[t('filter.space'), v]] : []; };
  function valueRows(m) {
    const cal = envOf(m).cal;
    if (m.type === 'measure') return [[t('value.length'), cal ? measure(Math.hypot(m.pts[1][0] - m.pts[0][0], m.pts[1][1] - m.pts[0][1]), cal) : t('value.no_scale')]];
    if (m.type === 'area') { const v = measureArea(m.pts, cal, m.holes); return cal ? [[t('value.area'), v.area], [t('value.perimeter'), v.perimeter], ...(m.holes?.length ? [[t('value.cutouts'), String(m.holes.length)]] : [])] : [[t('value.area'), t('value.no_scale')]]; }
    if (m.type === 'count') return [[t('value.count'), String(m.pts.length)], ...spaceRow(m)];
    if (m.type === 'angle' && m.pts.length === 3) return [[t('value.angle'), formatAngle(angleAt(...m.pts))]];
    if (m.type === 'arc' && m.pts.length === 3) { const a = arcThrough(...m.pts); return [[t('value.length'), cal && a ? measure(arcLength(a), cal) : t('value.no_scale')]]; }
    return spaceRow(m);
  }
  /** The value as one line, for lists, CSV and BCF. */
  function valueOf(m) {
    if (m.type === 'count') return t('value.count.line', { group: m.label || t('count.default'), n: m.pts.length });
    if (m.type === 'area') { const r = valueRows(m); return r.length === 2 ? t('value.area.line', { area: r[0][1], perimeter: r[1][1] }) : ''; }
    if (m.type === 'measure' || m.type === 'arc') return envOf(m).cal ? valueRows(m)[0]?.[1] || '' : '';
    if (m.type === 'angle') return valueRows(m)[0]?.[1] || '';
    return '';
  }

  const replyDrafts = new Map();
  /** The comment thread: replies with author and date, status changes logged; a box to reply. */
  function threadSection(m) {
    const sec = el('section', { className: 'mc-thread-sec', 'aria-label': t('thread.label') });
    const n = m.replies.length;
    sec.append(el('p', { className: 'mc-props-sub' }, n ? t('thread.h.count', { n }) : t('thread.label')));
    if (n) {
      const ol = el('ol', { className: 'mc-thread' });
      for (const r of m.replies) {
        ol.append(el('li', { className: r.kind === 'status' ? 'is-status' : '' },
          el('span', { className: 'mc-thread-meta' }, t('thread.meta', { author: r.author || t('thread.unknown'), date: dateTime(r.date) })),
          r.text ? el('span', { className: 'mc-thread-text' }, r.text) : null,
          r.photo ? el('button', { type: 'button', className: 'mc-thread-photo', title: t('photo.open'), onclick: () => showPhoto(r) }, el('img', { src: r.photo, alt: r.text || t('photo.alt', { author: r.author || t('thread.unknown') }) })) : null));
      }
      sec.append(ol);
    } else sec.append(el('p', { className: 'mc-muted' }, t('thread.none')));
    const id = fid();
    // a reply being typed survives the panel redrawing (any edit redraws it)
    const ta = el('textarea', { id, className: 'mc-input', rows: '2', maxlength: '4000', placeholder: t('thread.placeholder'), value: replyDrafts.get(m.id) || '' });
    ta.addEventListener('input', () => { if (ta.value) replyDrafts.set(m.id, ta.value); else replyDrafts.delete(m.id); });
    const send = async () => {
      const text = ta.value.trim();
      if (!text) { ta.focus(); return; }
      if (!author) await askAuthor();
      const r = cleanReply({ author, text, kind: 'comment' });
      const cur1 = store.get(m.id);
      if (!cur1) return;
      replyDrafts.delete(m.id);
      store.change(t('undo.reply'), (tx) => tx.update(m.id, { replies: [...cur1.replies, r] }, { touch: false }));
      status(author ? t('thread.added.as', { author }) : t('thread.added'));
      refreshAll();
    };
    ta.addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(); } });
    // a photo on the thread (0.4 K20): the reply's text, if any, is its caption
    const addPhoto = async () => {
      const f = await new Promise((done) => { picPick = done; ui.photoFile.click(); });
      if (!f) return;
      status(t('image.loading'));
      const src = /^image\/(png|jpeg)$/.test(f.type) || /\.(png|jpe?g)$/i.test(f.name) ? await pictureFrom(f) : '';
      if (!src) { status(t('image.bad', { file: f.name })); return; }
      if (!author) await askAuthor();
      const cur1 = store.get(m.id);
      if (!cur1) return;
      const r = cleanReply({ author, text: ta.value.trim(), kind: 'comment', photo: src });
      replyDrafts.delete(m.id);
      store.change(t('undo.photo'), (tx) => tx.update(m.id, { replies: [...cur1.replies, r] }, { touch: false }));
      status(t('photo.added'));
      refreshAll();
    };
    sec.append(el('label', { for: id, className: 'visually-hidden' }, t('thread.reply')), ta,
      el('div', { className: 'mc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: send, dataset: { reply: '' } }, t('thread.reply')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: addPhoto, dataset: { photo: '' }, title: t('photo.add.title') }, el('i', { className: 'bi bi-camera', 'aria-hidden': 'true' }), ' ', t('photo.add'))));
    return sec;
  }

  function multiProps(list) {
    const wrap = el('div', {});
    const ed = list.filter((m) => !m.locked);
    const types = [...new Set(ed.map((m) => m.type))];
    wrap.append(el('p', { className: 'mc-note' }, t(list.length - ed.length ? 'multi.types.locked' : 'multi.types', { types: types.map(tname).join(', '), n: list.length - ed.length })));
    if (!ed.length) return wrap;
    const grid = el('div', { className: 'mc-props' });
    const first = ed[0];
    const id = fid();
    const common = ed.every((m) => m.status === first.status) ? first.status : '';
    grid.append(...field(t('props.status'), el('select', { id, className: 'mc-select', onchange: (e) => e.target.value && patchSel(t('undo.status'), (m) => ({ status: e.target.value, replies: [...m.replies, statusReply(e.target.value, author)] })) },
      common ? null : el('option', { value: '', selected: true }, t('multi.mixed')), ...STATUSES.map((st) => el('option', { value: st, selected: st === common }, stname(st)))), id));
    grid.append(el('p', { className: 'mc-props-sub' }, t('props.style')));
    grid.append(...styleControls(first.style, (patch) => patchSel(t('undo.style'), (m) => ({ style: { ...m.style, ...patch } })), types));
    wrap.append(grid, el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => addToPunch() }, t('punch.add.one')),
      sheets.length > 1 ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => copyToSheets(), dataset: { copySheets: '' } }, t('batch.button')) : null,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc mc-danger', onclick: () => deleteSelection() }, t('menu.delete'))));
    return wrap;
  }

  // ---- markups list ----
  for (const s of root.querySelectorAll('[data-filter]')) s.addEventListener('change', () => { filters[s.dataset.filter] = s.value; renderList(); });

  function fillFilter(select, values, keepFirst) {
    const curV = select.value;
    while (select.options.length > keepFirst) select.remove(keepFirst);
    for (const [v, label] of values) select.append(el('option', { value: v }, label));
    select.value = [...select.options].some((o) => o.value === curV) ? curV : '';
  }

  function filteredMarkups() {
    return store.all().filter((m) => {
      if (filters.sheet === 'current' && m.sheet !== curKey()) return false;
      if (filters.sheet && filters.sheet !== 'current' && m.sheet !== filters.sheet) return false;
      if (filters.author && m.author !== filters.author) return false;
      if (filters.status && m.status !== filters.status) return false;
      if (filters.type && m.type !== filters.type) return false;
      if (filters.layer && (filters.layer === '\u0001none' ? m.layer : m.layer !== filters.layer)) return false;
      if (filters.field) { const [ck, ...cv] = filters.field.split('\u0001'); if ((m.fields?.[ck] ?? '') !== cv.join('\u0001')) return false; }
      if (filters.space && (filters.space === '\u0001none' ? markupSpace(m) : markupSpace(m) !== filters.space)) return false;
      return true;
    });
  }

  function sheetOrder(m) { return sheets.findIndex((s) => s.page.key === m.sheet); }

  function renderList() {
    if (activeTab() !== 'list') return;
    const all = store.all();
    fillFilter(find('[data-filter="sheet"]'), sheets.filter((s) => all.some((m) => m.sheet === s.page.key)).map((s) => [s.page.key, s.page.title]), 2);
    fillFilter(find('[data-filter="author"]'), [...new Set(all.map((m) => m.author).filter(Boolean))].sort().map((a) => [a, a]), 1);
    fillFilter(find('[data-filter="status"]'), STATUSES.map((s) => [s, stname(s)]), 1);
    fillFilter(find('[data-filter="type"]'), [...new Set(all.map((m) => m.type))].map((x) => [x, tname(x)]), 1);
    fillFilter(find('[data-filter="space"]'), [['\u0001none', t('space.none')], ...[...new Set(all.filter((m) => m.type === 'space' && m.label).map((m) => m.label))].sort().map((n) => [n, n])], 1);
    const pairs = [];
    for (const c of store.columns) for (const v of [...new Set(all.map((m) => m.fields?.[c.key]).filter(Boolean))].sort().slice(0, 100)) pairs.push([c.key + '\u0001' + v, c.name + ': ' + v]);
    for (const c of store.columns) pairs.push([c.key + '\u0001', t('filter.field.empty', { col: c.name })]);
    fillFilter(find('[data-filter="field"]'), pairs, 1);
    fillFilter(find('[data-filter="layer"]'), [['\u0001none', t('layer.none')], ...store.layerNames().map((n) => [n, n])], 1);
    for (const s of findAll('[data-filter]')) filters[s.dataset.filter] = s.value;
    const sortSel = find('[data-sort]');
    if (sortSel) {
      const want = sortSel.value;
      while (sortSel.options.length > 6) sortSel.remove(6);
      for (const c of store.columns) sortSel.append(el('option', { value: 'col:' + c.key }, c.name));
      sortSel.value = [...sortSel.options].some((o) => o.value === want) ? want : '';
    }
    const list = filteredMarkups().sort(listOrder(sortSel?.value || ''));
    ui.listCount.textContent = list.length === all.length ? t('save.markups', { n: all.length }) : t('list.count.filtered', { shown: list.length, n: all.length });
    ui.list.replaceChildren();
    for (const m of list.slice(0, 2000)) {
      const s = sheetByKey(m.sheet);
      const text = m.type === 'stamp' ? m.label : TEXT_TYPES.has(m.type) ? m.text : valueOf(m);
      const nr = m.replies.length;
      const btn = el('button', { type: 'button', className: 'mc-item', 'aria-current': sel.has(m.id) ? 'true' : 'false' },
        el('span', { className: 'mc-item-icon', style: 'color:' + (m.locked ? 'var(--ink-2)' : m.style.color) }, el('i', { className: 'bi bi-' + (TYPE_ICON[m.type] || 'circle'), 'aria-hidden': 'true' })),   // i18n-ignore
        el('span', { className: 'mc-item-main' },
          el('span', { className: 'mc-item-title' }, (m.punch ? '#' + m.punch.n + ' ' : '') + (m.subject || (m.locked ? m.src?.subtype : tname(m.type)))),
          text || m.comment ? el('span', { className: 'mc-item-text' }, [text, m.comment].filter(Boolean).join(' — ')) : null,
          el('span', { className: 'mc-item-meta' }, [s ? s.page.title : '', m.author, shortDate(m.created)].filter(Boolean).join(', ')),
          store.columns.some((c) => m.fields?.[c.key]) ? el('span', { className: 'mc-item-meta mc-item-fields' }, store.columns.filter((c) => m.fields?.[c.key]).map((c) => c.name + ': ' + m.fields[c.key]).join(', ')) : null),
        el('span', { className: 'mc-item-side' },
          el('span', { className: 'mc-chip mc-st-' + m.status.toLowerCase() }, m.locked ? t('props.read_only') : stname(m.status)),
          nr ? el('span', { className: 'mc-replies', title: t('list.replies', { n: nr }) }, el('i', { className: 'bi bi-chat-left-text', 'aria-hidden': 'true' }), ' ' + nr, el('span', { className: 'visually-hidden' }, ' ' + t('list.replies.word', { n: nr }))) : null));
      btn.addEventListener('click', () => jumpTo(m.id));
      ui.list.append(el('li', {}, btn));
    }
    if (!list.length) ui.list.append(el('li', { className: 'mc-note' }, all.length ? t('list.no_match') : t('list.empty')));
  }

  /** The list's order: by sheet (then when made), or by a column — built-in or custom (0.4 K19). */
  function listOrder(key) {
    const base = (a, b) => sheetOrder(a) - sheetOrder(b) || String(a.created).localeCompare(String(b.created));
    if (!key) return base;
    if (key.startsWith('col:')) { const c = store.columns.find((x) => 'col:' + x.key === key); const cmp = c ? compareBy(c) : null; return (a, b) => (cmp ? cmp(a, b) : 0) || base(a, b); }
    const get = { author: (m) => m.author, status: (m) => STATUSES.indexOf(m.status), type: (m) => tname(m.type), created: (m) => m.created, modified: (m) => m.modified }[key];
    const desc = key === 'created' || key === 'modified';
    return (a, b) => { const x = get(a), y = get(b); const r = typeof x === 'number' ? x - y : String(x || '').localeCompare(String(y || '')); return (desc ? -r : r) || base(a, b); };
  }
  find('[data-sort]')?.addEventListener('change', () => renderList());

  /** Batch apply (0.4 K22): the selected markups (a stamp, a note, clouds…) copied to the same place on chosen sheets. */
  async function copyToSheets() {
    const list = editable();
    if (!list.length) { status(t('batch.need')); return; }
    const from = curKey();
    const boxes = sheets.filter((s) => s.page.key !== from).map((s, i) => {
      const id = 'mc-bt-' + i;
      return el('li', { className: 'mc-slip-row' }, el('input', { type: 'checkbox', id, dataset: { key: s.page.key } }), ' ', el('label', { for: id }, s.page.title));
    });
    const allBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => boxes.forEach((li) => { li.querySelector('input').checked = true; }) }, t('batch.all'));
    const noneBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => boxes.forEach((li) => { li.querySelector('input').checked = false; }) }, t('batch.none'));
    let chosen = [];
    const r = await dialog({ title: t('batch.title'), text: t('batch.text', { n: list.length }), wide: true,
      body: [el('div', { className: 'mc-actions' }, allBtn, noneBtn), el('ol', { className: 'mc-slip-list' }, ...boxes)],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('batch.ok'), 'btn-plot']], submit: 'ok',
      check: (k, form) => { chosen = [...form.querySelectorAll('.mc-slip-list input:checked')].map((b) => b.dataset.key); return chosen.length ? '' : t('batch.pick'); } });
    if (r.key !== 'ok') return;
    const who = author || await askAuthor();
    const clipped = makeClip(list, { source: TAB, sheet: from });
    let n = 0;
    store.change(t('undo.batch', { n: chosen.length }), (tx) => { for (const key of chosen) {
      const sh = sheetByKey(key);
      for (const m of placeClip(clipped, { sheet: key, author: who, rot: sh?.page.rotate ?? null })) { tx.add(m); n++; }
    } });
    status(t('batch.done', { n, sheets: t('find.sheets', { n: chosen.length }) }));
    refreshAll();
  }

  // ---- bookmarks (0.4 K24): the open file's outline; edits are part of the file's unsaved work ----
  const bmUi = { list: $('[data-bm-list]'), note: $('[data-bm-note]') };
  function bmFile() { return curSheet()?.file || null; }
  function bmChanged(f) { f.bookmarksEdited = true; for (const pg of f.pages) store.dirtySheets.add(pg.key); renderBookmarks(); refreshToolbar(); syncAutosave(); }
  function renderBookmarks() {
    if (!bmUi.list) return;
    const f = bmFile();
    bmUi.note.textContent = f ? (f.bookmarks?.length ? t('bm.of', { file: f.name, n: count(f.bookmarks) }) : t('bm.none', { file: f.name })) : '';
    const rows = [];
    const walk = (items, depth, parent) => items.forEach((b, i) => {
      rows.push(el('li', { className: 'mc-layer mc-bm', style: '--depth:' + depth },
        el('button', { type: 'button', className: 'mc-layer-name', title: b.page >= 0 ? t('bm.go', { page: b.page + 1 }) : t('bm.nowhere'), onclick: () => { const i2 = sheets.findIndex((s) => s.file === f && s.page.index === b.page); if (i2 >= 0) goTo(i2); else status(t('bm.nowhere')); } }, b.title),
        el('button', { type: 'button', className: 'mc-layer-btn', title: t('bm.rename', { title: b.title }), onclick: async () => { const v = await askText(t('bm.rename.title'), t('bm.title.label'), b.title); if (v) { b.title = v; bmChanged(f); } } }, el('i', { className: 'bi bi-pencil', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('bm.rename', { title: b.title }))),
        el('button', { type: 'button', className: 'mc-layer-btn', title: t('bm.remove', { title: b.title }), onclick: () => { parent.splice(i, 1); bmChanged(f); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('bm.remove', { title: b.title })))));
      walk(b.children || [], depth + 1, b.children);
    });
    if (f?.bookmarks) walk(f.bookmarks, 0, f.bookmarks);
    bmUi.list.replaceChildren(...rows);
  }
  async function askText(title, label, value = '') {
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-text', maxlength: '200', value, autocomplete: 'off' });
    const r = await dialog({ title, body: [el('label', { className: 'mc-k', for: 'mc-dlg-text' }, label), input], buttons: [['cancel', t('dlg.cancel')], ['ok', t('dlg.ok'), 'btn-plot']], submit: 'ok', check: () => (input.value.trim() ? '' : t('bm.title.need')) });
    return r.key === 'ok' ? input.value.trim().slice(0, 200) : null;
  }
  async function bookmarkAct(kind) {
    const f = bmFile();
    if (!f) { status(t('need.pdf')); return; }
    if (kind === 'build') {
      if (f.bookmarks?.length && await ask(t('bm.build.title'), t('bm.build.replace', { n: count(f.bookmarks) }), [['cancel', t('dlg.cancel')], ['ok', t('bm.build.ok'), 'btn-plot']]) !== 'ok') return;
      f.bookmarks = fromSheets(f.pages.map((pg) => ({ index: pg.index, title: pg.title })));
      bmChanged(f);
      status(t('bm.built', { n: f.bookmarks.length }));
    } else if (kind === 'add') {
      const s = curSheet();
      const v = await askText(t('bm.add.title'), t('bm.title.label'), s.page.title);
      if (!v) return;
      f.bookmarks = [...(f.bookmarks || []), { title: v, page: s.page.index, children: [] }];
      bmChanged(f);
    }
  }
  find('[data-act="bm-build"]')?.addEventListener('click', () => bookmarkAct('build'));
  find('[data-act="bm-add"]')?.addEventListener('click', () => bookmarkAct('add'));

  /** A legend (0.4 K21): placed at the top right of what is on screen; it counts the markups as they change. */
  async function addLegend() {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    const who = author || await askAuthor();
    const [x1, y1] = view.toUser(view.w - 24, 24);
    const [x0, y0] = view.toUser(view.w - 24 - 230, 24 + 200);
    const m = store.change(t('undo.legend'), (tx) => tx.add(newMarkup('legend', { rect: [Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1)], label: t('legend.title'), author: who })));
    sel = new Set([m.id]);
    status(t('legend.added'));
    refreshAll();
  }

  /** Custom columns (0.4 K19): add, rename, retype or remove the set's columns. */
  async function editColumns() {
    const cols = store.columns.map((c) => ({ ...c, choices: [...c.choices] }));
    const rows = el('div', { className: 'mc-cols' });
    const draw = () => rows.replaceChildren(...cols.map((c, i) => el('div', { className: 'mc-col-row' },
      el('input', { type: 'text', className: 'mc-input', value: c.name, maxlength: '60', 'aria-label': t('col.name'), placeholder: t('col.name'), oninput: (e) => { c.name = e.target.value; } }),
      el('select', { className: 'mc-select', 'aria-label': t('col.type'), onchange: (e) => { c.type = e.target.value; draw(); } }, ...TYPES_OF_COLUMN.map((ty) => el('option', { value: ty, selected: c.type === ty }, t('col.type.' + ty)))),
      c.type === 'choice' ? el('input', { type: 'text', className: 'mc-input', value: c.choices.join(', '), 'aria-label': t('col.choices'), placeholder: t('col.choices'), oninput: (e) => { c.choices = e.target.value.split(',').map((x) => x.trim()).filter(Boolean); } }) : el('span'),
      el('button', { type: 'button', className: 'mc-x', title: t('col.remove', { name: c.name }), 'aria-label': t('col.remove', { name: c.name }), onclick: () => { cols.splice(i, 1); draw(); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' })))));
    draw();
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { cols.push({ key: newColumnKey([...store.columns, ...cols]), name: '', type: 'text', choices: [] }); draw(); rows.querySelector('.mc-col-row:last-child input')?.focus(); } }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), ' ', t('col.add'));
    const r = await dialog({ title: t('col.title'), text: t('col.text'), body: [rows, el('div', { className: 'mc-actions' }, add)], wide: true,
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('col.ok'), 'btn-plot']], submit: 'ok',
      check: () => (cols.some((c) => !c.name.trim()) ? t('col.err.name') : cols.some((c) => c.type === 'choice' && !c.choices.length) ? t('col.err.choices') : '') });
    if (r.key !== 'ok') return;
    store.setColumns(cols);
    status(t('col.saved', { n: store.columns.length }));
    refreshAll();
  }

  async function jumpTo(id) {
    const m = store.get(id);
    if (!m) return;
    const i = sheets.findIndex((s) => s.page.key === m.sheet);
    if (i < 0) return;
    sel = new Set([id]);
    if (i !== cur) await goTo(i, { keepSelection: true });
    const b = boundsOf(m, envOf(m));
    if (b) {
      const a = view.toScreen([b[0], b[1]]), c = view.toScreen([b[2], b[3]]);
      const off = Math.max(a[0], c[0]) < 0 || Math.min(a[0], c[0]) > view.w || Math.max(a[1], c[1]) < 0 || Math.min(a[1], c[1]) > view.h;
      const tiny = Math.abs(c[0] - a[0]) < 12 && Math.abs(c[1] - a[1]) < 12;
      if (off || tiny) view.zoomTo(b, 0.35); else view.invalidate(true);
    }
    refreshSelection();
  }

  function exportListCsv() {
    const list = filteredMarkups().sort((a, b) => sheetOrder(a) - sheetOrder(b));
    if (!list.length) { status(t('export.none')); return; }
    const rows = markupRows(list, (m) => { const s = sheetByKey(m.sheet); return s ? { title: s.page.title, file: s.file.name, page: s.page.index + 1 } : null; },
      (m) => valueOf(m), hasSpaces() ? markupSpace : null, [...store.columns, ...columnsNow()]);
    dl(toCsv(rows), t('export.list.file', { set: setName() }) + '.csv', 'text/csv');
    status(t('export.csv.done', { n: list.length }));
  }

  /** BCF import (0.4 K7): comments and statuses back onto the markups exported from here; other topics as notes. */
  ui.bcfFile = $('[data-bcf-file]');
  ui.bcfFile?.addEventListener('change', () => { const f = ui.bcfFile.files[0]; ui.bcfFile.value = ''; if (f) importBcf(f); });
  async function importBcf(file) {
    if (!sheets.length) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    busy(t('bcfin.busy')); await frame();
    try {
      let bcf;
      try { bcf = await readBcf(new Uint8Array(await file.arrayBuffer())); } catch { throw new Error(t('bcfin.bad', { file: file.name })); }
      if (!bcf.topics.length) throw new Error(t('bcfin.empty', { file: file.name }));
      const all = store.all();
      const guidOf = new Map(), replyGuids = new Set();
      for (const m of all) {
        guidOf.set(await guidFor('topic:' + m.id), m.id);
        for (const r of m.replies || []) { replyGuids.add(await guidFor('comment:' + m.id + ':' + r.id)); if (/^bcf-/.test(r.id)) replyGuids.add(r.id.slice(4)); }
      }
      const plan = planImport(bcf, { markups: all, guidOf, replyGuids, current: curKey(), author,
        sheets: sheets.map((s) => ({ key: s.page.key, title: s.page.title, sheetNo: s.page.sheetNo, file: s.file.name, view: s.page.view })) });
      if (!plan.updates.length && !plan.adds.length) { status(t('bcfin.nothing', { n: bcf.topics.length })); return; }
      const made = store.change(t('undo.bcfin'), (tx) => {
        for (const u of plan.updates) tx.update(u.id, u.patch);
        return plan.adds.map((a) => tx.add(makeMarkup({ ...a, style: styleFor('note') })));
      });
      sel = new Set(made.filter((m) => m.sheet === curKey()).map((m) => m.id));
      const parts = [t('bcfin.done', { file: file.name, n: bcf.topics.length })];
      if (plan.matched) parts.push(t('bcfin.matched', { n: plan.matched }));
      if (plan.added) parts.push(t('bcfin.added', { n: plan.added }));
      if (plan.replies) parts.push(t('bcfin.replies', { n: plan.replies }));
      if (plan.unplaced) parts.push(t('bcfin.unplaced', { n: plan.unplaced }));
      if (bcf.skipped) parts.push(t('bcfin.skipped', { n: bcf.skipped }));
      status(parts.join(' '));
      refreshAll();
    } catch (e) {
      busy('');
      await ask(t('bcfin.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    } finally { busy(''); }
  }

  /** The markup summary (0.4 K6): the listed markups as a workbook (every markup, per sheet, punch list) or a PDF report. */
  const listSheetOf = (m) => { const s = sheetByKey(m.sheet); return s ? { title: s.page.title, file: s.file.name, page: s.page.index + 1 } : null; };
  async function exportSummary(kind) {
    const list = filteredMarkups().sort((a, b) => sheetOrder(a) - sheetOrder(b));
    if (!list.length) { status(t('export.none')); return; }
    const name = t('sum.file', { set: setName() });
    try {
      if (kind === 'xlsx') {
        const bytes = await writeXlsx(summarySheets(list, { sheetOf: listSheetOf, measureOf: valueOf, spaceOf: hasSpaces() ? markupSpace : null, columns: [...store.columns, ...columnsNow()] }), { title: name });
        dl(bytes, name + '.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        status(t('sum.saved.xlsx', { n: list.length, file: name + '.xlsx' }));
      } else {
        busy(t('save.loading')); await frame();
        const { bytes, missing, pages } = await summaryPdf(await pdfLib(), list, { sheetOf: listSheetOf, measureOf: valueOf, title: t('sum.title') + ': ' + setName() });
        dl(bytes, name + '.pdf', 'application/pdf');
        status(t('sum.saved.pdf', { n: list.length, file: name + '.pdf', pages }) + (missing ? t('sum.missing', { n: missing }) : ''));
      }
    } catch (e) {
      await ask(t('sum.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    } finally { busy(''); }
  }

  /** BCF 2.1: one topic per markup in the list (as filtered), each with a snapshot of its part of the sheet. */
  async function exportBcf() {
    const list = filteredMarkups().sort((a, b) => sheetOrder(a) - sheetOrder(b));
    if (!list.length) { status(t('export.none')); return; }
    const filtered = Object.values(filters).some(Boolean);
    busy(t('bcf.busy'));
    await frame();
    try {
      const topics = [];
      let i = 0;
      for (const m of list) {
        const s = sheetByKey(m.sheet);
        ui.busyText.textContent = t('bcf.busy.progress', { i: ++i, n: list.length });
        let png = null;
        const box = boundsOf(m, envOf(m)) || m.rect;
        if (s && box) {
          try {
            const proxy = await s.file.doc.getPage(s.page.index + 1);
            const c = await view.snapshot(proxy, s.page, box, m.type === 'foreign' ? [] : [displayOf(m, envOf(m)).list], 900);
            const blob = await new Promise((r) => c.toBlob(r, 'image/png'));
            png = blob ? new Uint8Array(await blob.arrayBuffer()) : null;
          } catch { png = null; }
        }
        topics.push({ markup: m, sheetTitle: s?.page.title || '', fileName: s?.file.name || '', value: valueOf(m), box, png });
      }
      const { bytes, count } = await buildBcf(topics, { project: setName() });
      dl(bytes, t('export.list.file', { set: setName() }) + '.bcfzip', 'application/octet-stream');
      status(t(filtered ? 'bcf.done.listed' : 'bcf.done', { n: count, size: fmtBytes(bytes.length) }));
    } catch (e) {
      status(t('bcf.failed', { error: e.message || e }));
    } finally { busy(''); }
  }
  const setName = () => (files[0] ? files[0].name.replace(/\.pdf$/i, '').replace(/ \(marked up\)$/i, '') : 'MarkupCraft');

  // ---- punch list ----
  function addToPunch(ids = [...sel]) {
    const list = ids.map((id) => store.get(id)).filter((m) => m && !m.locked && !m.punch)
      .sort((a, b) => sheetOrder(a) - sheetOrder(b) || String(a.created).localeCompare(String(b.created)));
    if (!list.length) { status(ids.length ? t('punch.add.already') : t('punch.add.need')); return; }
    store.change(t('punch.add.one'), (tx) => {
      let n = store.punchNext;
      for (const m of list) tx.update(m.id, { punch: { n: n++, assignee: '', due: '', status: 'Open' } });
      tx.setPunchNext(n);
    });
    status(t('punch.added', { n: list.length }));
    refreshAll();
  }

  function renderPunch() {
    if (activeTab() !== 'punch') return;
    const items = store.punchItems();
    ui.punch.replaceChildren();
    if (!items.length) { ui.punch.append(el('li', { className: 'mc-note' }, t('punch.empty'))); return; }
    for (const m of items) {
      const s = sheetByKey(m.sheet);
      const head = el('button', { type: 'button', className: 'mc-item', 'aria-current': sel.has(m.id) ? 'true' : 'false', onclick: () => jumpTo(m.id) },
        el('span', { className: 'mc-punch-n' }, String(m.punch.n)),
        el('span', { className: 'mc-item-main' },
          el('span', { className: 'mc-item-title' }, m.subject || tname(m.type)),
          (TEXT_TYPES.has(m.type) ? m.text : m.comment) ? el('span', { className: 'mc-item-text' }, TEXT_TYPES.has(m.type) ? m.text : m.comment) : null,
          el('span', { className: 'mc-item-meta' }, [s?.page.title, m.punch.assignee ? t('punch.assigned', { name: m.punch.assignee }) : '', m.punch.due ? t('punch.due_on', { date: shortDate(m.punch.due + 'T12:00:00') }) : ''].filter(Boolean).join(', '))),
        el('span', { className: 'mc-chip' }, pstname(m.punch.status)));
      const grid = el('div', { className: 'mc-props mc-punch-edit' }, ...punchFields(m));
      ui.punch.append(el('li', {}, head, grid));
    }
  }

  function exportPunchCsv() {
    const items = store.punchItems();
    if (!items.length) { status(t('punch.export.empty')); return; }
    dl(toCsv(punchRows(items, (m) => { const s = sheetByKey(m.sheet); return s ? { title: s.page.title, file: s.file.name, page: s.page.index + 1 } : null; })), t('punch.file', { set: setName() }) + '.csv', 'text/csv');
    status(t('punch.exported', { n: items.length }));
  }

  // ---- tool chest ----
  function persistChest() { if (!lsSet(LS.chest, chest)) status(t('chest.persist_failed')); }

  async function saveToChest(m = null) {
    m = m || editable()[0];
    if (!m) { status(t('chest.save.need')); return; }
    const input = el('input', { type: 'text', id: 'mc-dlg-tool', className: 'mc-input', maxlength: '80', value: m.subject && m.subject !== TYPES[m.type].subject ? m.subject : tname(m.type) });
    const r = await dialog({
      title: t('chest.save.one'), text: t(m.type === 'stamp' ? 'chest.dlg.text.stamp' : 'chest.dlg.text'),
      body: [el('label', { className: 'mc-k', for: 'mc-dlg-tool' }, t('chest.dlg.name')), input],
      buttons: [['cancel', t('dlg.cancel')], ['save', t('chest.dlg.save'), 'btn-plot']], submit: 'save',
      check: () => (input.value.trim() ? '' : t('chest.dlg.need')),
    });
    if (r.key !== 'save') return;
    const made = toolFromMarkup(m, input.value.trim());
    chest.push(made);
    persistChest();
    renderChest();
    tabTo('chest');
    status(t('chest.saved', { tool: made.name }));
  }

  function renderChest() {
    if (activeTab() !== 'chest') return;
    ui.chest.replaceChildren();
    if (!chest.length) { ui.chest.append(el('li', { className: 'mc-note' }, t('chest.empty'))); return; }
    for (const tk of chest) {
      const use = el('button', { type: 'button', className: 'mc-item mc-tool-item', 'aria-pressed': String(toolPreset?.id === tk.id) },
        el('span', { className: 'mc-item-icon', style: 'color:' + tk.style.color }, el('i', { className: 'bi bi-' + (TYPE_ICON[tk.type] || 'circle'), 'aria-hidden': 'true' })),   // i18n-ignore (icon class)
        el('span', { className: 'mc-item-main' }, el('span', { className: 'mc-item-title' }, tk.name), el('span', { className: 'mc-item-meta' }, tk.label ? t('chest.meta.label', { type: tname(tk.type), label: tk.label }) : tname(tk.type))));
      use.addEventListener('click', () => { setTool(tk.type, clone(tk)); renderChest(); status(t('chest.drawing', { tool: tk.name })); });
      const rm = el('button', { type: 'button', className: 'mc-x', title: t('chest.remove.title'), 'aria-label': t('chest.remove.label', { tool: tk.name }) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
      rm.addEventListener('click', async () => {
        const k = await ask(t('chest.remove.h'), t('chest.remove.text', { tool: tk.name }), [['cancel', t('dlg.cancel')], ['remove', t('chest.remove.ok'), 'btn-plot']]);
        if (k !== 'remove') return;
        chest = chest.filter((x) => x !== tk);
        if (toolPreset?.id === tk.id) toolPreset = null;
        persistChest(); renderChest();
      });
      ui.chest.append(el('li', { className: 'mc-chest-row' }, use, rm));
    }
  }

  ui.chestFile.addEventListener('change', async () => {
    const f = ui.chestFile.files[0];
    ui.chestFile.value = '';
    if (!f) return;
    if (f.size > 2 * 1048576) { status(t('chest.import.big')); return; }
    try {
      const { tools, skipped } = parseChest(await f.text());
      if (!tools.length) { status(t('chest.import.none', { file: f.name })); return; }
      chest = mergeChest(chest, tools);
      persistChest(); renderChest();
      status(t('chest.imported', { n: tools.length, file: f.name }) + (skipped ? ' ' + t('chest.import.skipped', { n: skipped }) : ''));
    } catch (e) { status(e.message); }
  });

  // ---- calibration ----
  async function calibrateDialog(ptLen, pts = null) {
    const s = curSheet();
    if (!s) return;
    const cal = store.calibrations.get(s.page.key);
    const body = [];
    let dist = null, unit = null;
    if (ptLen) {
      dist = el('input', { type: 'text', id: 'mc-dlg-dist', className: 'mc-input', placeholder: t('cal.placeholder'), autocomplete: 'off' });
      unit = el('select', { id: 'mc-dlg-unit', className: 'mc-select' }, ...UNITS.map(([v, l]) => el('option', { value: v, selected: v === (cal?.unit || settings.unit) }, l)));
      body.push(el('p', { className: 'mc-dlg-text' }, t('cal.two.text', { d: (ptLen / 72).toFixed(3) })),
        el('div', { className: 'mc-props' },
          el('label', { className: 'mc-k', for: 'mc-dlg-dist' }, t('cal.real')), dist,
          el('label', { className: 'mc-k', for: 'mc-dlg-unit' }, t('set.unit')), unit));
    } else {
      body.push(el('p', { className: 'mc-dlg-text' }, t('cal.preset.text')));
    }
    const preset = el('select', { id: 'mc-dlg-preset', className: 'mc-select' },
      el('option', { value: '', className: 'select-placeholder' }, ptLen ? t('cal.or_preset') : t('choose_one')),
      ...SCALE_PRESETS.map(([g, list, u]) => el('optgroup', { label: g }, ...list.map(([l, r]) => el('option', { value: [l, r, u].join('|'), selected: cal?.label === l }, l)))));
    body.push(el('div', { className: 'mc-props' }, el('label', { className: 'mc-k', for: 'mc-dlg-preset' }, t('props.scale')), preset));
    if (cal) body.push(el('p', { className: 'mc-muted' }, t('cal.now', { scale: cal.label })));
    const buttons = [['cancel', t('dlg.cancel')]];
    if (!ptLen) buttons.push(['pick', t('cal.pick')]);
    if (cal) buttons.push(['clear', t('cal.remove')]);
    buttons.push(['set', t('cal.set'), 'btn-plot']);
    let result = null;
    const r = await dialog({
      title: t('cal.title'), body, buttons, submit: 'set',
      check: (key) => {
        if (key !== 'set') return '';
        if (dist && dist.value.trim()) {
          const mm = parseLength(dist.value, unit.value);
          if (!mm) return t('cal.bad_length');
          result = calibrationFrom(ptLen, mm, unit.value);
          return '';
        }
        if (preset.value) { const [l, ratio, u] = preset.value.split('|'); result = presetCalibration(l, +ratio, u); return ''; }
        return ptLen ? t('cal.need.two') : t('cal.need.preset');
      },
    });
    if (r.key === 'pick') { setTool('calibrate'); return; }
    if (r.key === 'clear') { store.change(t('cal.remove'), (tx) => tx.setCalibration(s.page.key, null)); status(t('cal.removed')); }
    if (r.key === 'set' && result) {
      store.change(t('cal.set'), (tx) => tx.setCalibration(s.page.key, result));
      status(t('cal.done', { scale: result.label }));
      if (tool === 'calibrate') { const next = afterCalibrate; afterCalibrate = 'measure'; setTool(next); }
    }
    renderNav();
    refreshAll();
    void pts;
  }

  // ---- compare ----
  function renderCompareSelects() {
    if (activeTab() !== 'compare') return;
    for (const [sel_, key] of [[ui.cmpOld, 'oldKey'], [ui.cmpNew, 'newKey']]) {
      const v = cmp[key] || sel_.value;
      sel_.replaceChildren(el('option', { value: '', className: 'select-placeholder' }, t('choose_one')), ...sheets.map((s) => el('option', { value: s.page.key }, files.length > 1 ? t('compare.sheet_in_file', { sheet: s.page.title, file: s.file.name }) : s.page.title)));
      sel_.value = sheets.some((s) => s.page.key === v) ? v : '';
    }
    if (!ui.cmpNew.value && curSheet()) ui.cmpNew.value = curKey();
    if (!ui.cmpOld.value && sheets.length > 1) ui.cmpOld.value = sheets.find((s) => s.page.key !== ui.cmpNew.value)?.page.key || '';
  }

  async function startCompare() {
    const oldKey = ui.cmpOld.value, newKey = ui.cmpNew.value;
    if (!oldKey || !newKey) { ui.cmpStatus.textContent = t('compare.need'); return; }
    if (oldKey === newKey) { ui.cmpStatus.textContent = t('compare.need.two'); return; }
    const i = sheets.findIndex((s) => s.page.key === newKey);
    if (cur !== i) await goTo(i);
    if (cmp.oldKey !== oldKey || cmp.newKey !== newKey) { cmp.dx = 0; cmp.dy = 0; cmp.fit = null; }
    cmp.oldKey = oldKey; cmp.newKey = newKey; cmp.on = true;
    cmp.balance = +ui.cmpBalance.value / 100;
    const so = sheetByKey(oldKey);
    cmp.oldProxy = await so.file.doc.getPage(so.page.index + 1);
    applyCompare();
    ui.cmpTools.hidden = false;
    ui.legend.hidden = false;
    find('[data-act="compare"]').setAttribute('aria-pressed', 'true');
    find('[data-act="compare-stop"]').hidden = false;
    ui.cmpStatus.textContent = t('compare.on', { old: so.page.title, new: curSheet().page.title });
  }
  // ---- compare by vector paths (0.4 K12): the lines that differ, drawn over the new sheet; cloud them in one step ----
  const segCache = new Map();   // sheet key → segments (dropped with the file)
  async function segsOf(key) {
    if (segCache.has(key)) return segCache.get(key);
    const s = sheetByKey(key);
    const segs = pageSegments(await (await s.file.doc.getPage(s.page.index + 1)).getOperatorList(), libs.pdfjs.OPS);
    segCache.set(key, segs);
    return segs;
  }
  let vecToken = 0;
  async function vectorCompare() {
    const token = ++vecToken;
    ui.cmpStatus.textContent = t('compare.lines.busy');
    await frame();
    const [a, b] = await Promise.all([segsOf(cmp.oldKey), segsOf(cmp.newKey)]);
    if (token !== vecToken || !cmp.on) return;
    if (!a.length && !b.length) { cmp.vec = null; ui.cmpStatus.textContent = t('compare.lines.none'); view.invalidate(); return; }
    cmp.vec = diffSegments(a, b, { tol: 1.5, T: alignment(cmp), step: 2 });
    const len = (l) => Math.round(l.reduce((s, q) => s + Math.hypot(q[2] - q[0], q[3] - q[1]), 0));
    ui.cmpStatus.textContent = t('compare.lines.done', { removed: len(cmp.vec.removed), added: len(cmp.vec.added) });
    view.invalidate();
  }
  // ---- compare a whole set (0.4 K23): pair sheets by number, rank them by how much changed, cloud them all ----
  const setUi = { old: $('[data-set-old]'), neu: $('[data-set-new]'), status: $('[data-set-status]'), list: $('[data-set-results]'), cloud: $('[data-act="set-cloud"]') };
  let setResult = [];
  function renderSetSelects() {
    for (const [sel0, pick] of [[setUi.old, 0], [setUi.neu, files.length - 1]]) {
      if (!sel0) continue;
      const v = sel0.value;
      sel0.replaceChildren(...files.map((f, i) => el('option', { value: f.id, selected: v ? f.id === v : i === pick }, f.name)));
    }
  }
  async function compareSets() {
    const fo = files.find((f) => f.id === setUi.old.value), fn = files.find((f) => f.id === setUi.neu.value);
    if (!fo || !fn || fo === fn) { setUi.status.textContent = t('setcmp.need'); return; }
    const facts = (f) => sheets.filter((s) => s.file === f).map(sheetFacts);
    const pairs = matchSheets(facts(fo), facts(fn)).filter((p) => p.oldKey);
    if (!pairs.length) { setUi.status.textContent = t('setcmp.none'); return; }
    setResult = [];
    for (let i = 0; i < pairs.length; i++) {
      const p = pairs[i];
      setUi.status.textContent = t('setcmp.busy', { i: i + 1, n: pairs.length });
      await frame();
      const d = diffSegments(await segsOf(p.oldKey), await segsOf(p.newKey), { tol: 1.5, step: 2 });
      const len = [...d.removed, ...d.added].reduce((a, q) => a + Math.hypot(q[2] - q[0], q[3] - q[1]), 0);
      setResult.push({ ...p, d, len: Math.round(len) });
    }
    setResult.sort((a, b) => b.len - a.len);
    const changed = setResult.filter((r) => r.len >= 6);
    setUi.status.textContent = t('setcmp.done', { n: pairs.length, changed: changed.length });
    setUi.list.replaceChildren(...setResult.map((r) => el('li', {}, el('button', { type: 'button', onclick: () => openPair(r) },
      el('strong', {}, sheetByKey(r.newKey)?.page.title || ''), ' ', r.len >= 6 ? t('setcmp.row', { n: r.len }) : t('setcmp.same')))));
    setUi.cloud.hidden = !changed.length;
  }
  async function openPair(r) {
    ui.cmpOld.value = r.oldKey; ui.cmpNew.value = r.newKey;
    cmp.mode = 'lines';
    for (const x of findAll('[data-cmp-mode]')) x.checked = x.value === 'lines';
    await startCompare();
  }
  async function cloudSet() {
    const changed = setResult.filter((r) => r.len >= 6);
    if (!changed.length) return;
    const who = await askAuthor();
    let n = 0;
    store.change(t('undo.setcmp.cloud'), (tx) => { for (const r of changed) {
      const sh = sheetByKey(r.newKey);
      for (const b of clusters([...r.d.removed, ...r.d.added], { gap: 18, minLen: 6 })) {
        tx.add(makeMarkup({ sheet: r.newKey, type: 'cloudrect', rot: sh?.page.rotate || 0, rect: [b[0] - 8, b[1] - 8, b[2] + 8, b[3] + 8], author: who, style: styleFor('cloudrect'), comment: t('compare.cloud.comment', { old: sheetByKey(r.oldKey)?.page.title || '' }) }));
        n++;
      }
    } });
    setUi.status.textContent = t('setcmp.clouded', { n, sheets: t('find.sheets', { n: changed.length }) });
    status(setUi.status.textContent);
    refreshAll();
  }

  async function cloudChanges() {
    if (!cmp.on) return;
    if (!cmp.vec) await vectorCompare();
    if (!cmp.vec) return;
    const boxes = clusters([...cmp.vec.removed, ...cmp.vec.added], { gap: 18, minLen: 6 });
    if (!boxes.length) { status(t('compare.cloud.none')); return; }
    const who = await askAuthor();
    const made = store.change(t('undo.compare.cloud', { n: boxes.length }), (tx) => boxes.map((b) => tx.add(newMarkup('cloudrect', { rect: [b[0] - 8, b[1] - 8, b[2] + 8, b[3] + 8], author: who, comment: t('compare.cloud.comment', { old: sheetByKey(cmp.oldKey)?.page.title || '' }) }))));
    sel = new Set(made.map((m) => m.id));
    status(t('compare.cloud.done', { n: boxes.length }));
    refreshAll();
  }
  for (const r of findAll('[data-cmp-mode]')) r.addEventListener('change', () => { cmp.mode = r.value; applyCompare(); });
  function applyCompare() {
    if (!cmp.on || !cmp.oldProxy) return;
    if (cmp.mode === 'lines') { view.setCompare(null); ui.legend.hidden = false; vectorCompare(); return; }
    cmp.vec = null;
    const colors = (v) => ({ bg: hexRgb(v.colors.sheet), same: hexRgb(mix(v.colors.ink, v.colors.sheet, 0.55)), old: hexRgb(v.colors.red), new: hexRgb(v.colors.blue) });
    view.setCompare({ oldProxy: cmp.oldProxy, T: alignment(cmp), balance: cmp.balance, colors });
  }
  function stopCompare() {
    if (!cmp.on) return;
    cmp.on = false; cmp.aligning = null;
    view.setCompare(null);
    ui.cmpTools.hidden = true;
    ui.legend.hidden = true;
    find('[data-act="compare"]').setAttribute('aria-pressed', 'false');
    find('[data-act="compare-stop"]').hidden = true;
    ui.cmpStatus.textContent = '';
    updateCursor();
  }
  let balanceTimer = 0;
  ui.cmpBalance.addEventListener('input', () => {
    cmp.balance = +ui.cmpBalance.value / 100;
    clearTimeout(balanceTimer);
    balanceTimer = setTimeout(applyCompare, 60);
  });
  for (const b of root.querySelectorAll('[data-nudge]')) {
    b.addEventListener('click', () => {
      if (!cmp.on) return;
      const [x, y] = b.dataset.nudge.split(',').map(Number);
      const step = +ui.cmpStep.value || 1;
      cmp.dx += x * step; cmp.dy += y * step;
      applyCompare();
      ui.cmpStatus.textContent = t('compare.moved', { dx: cmp.dx.toFixed(2), dy: cmp.dy.toFixed(2) });
    });
  }
  function startAlign() {
    if (!cmp.on) { ui.cmpStatus.textContent = t('compare.align.need'); return; }
    cancelOps();
    cmp.aligning = { pts: [] };
    cmp.balance = 0;
    applyCompare();
    updateCursor();
    ui.cmpStatus.textContent = t('compare.align.1');
    status(t('compare.align.status'));
  }
  function alignClick(p) {
    const a = cmp.aligning;
    a.pts.push({ screenUser: p });
    const n = a.pts.length;
    if (n === 1) ui.cmpStatus.textContent = t('compare.align.2');
    if (n === 2) { cmp.balance = 1; applyCompare(); ui.cmpStatus.textContent = t('compare.align.3'); }
    if (n === 3) ui.cmpStatus.textContent = t('compare.align.4');
    if (n === 4) {
      // the old sheet was shown moved by T: undo that to get points in the old sheet's own space
      const T = alignment(cmp), Ti = inv(T);
      const o1 = applyT(Ti, a.pts[0].screenUser), o2 = applyT(Ti, a.pts[1].screenUser);
      const fit = similarity(o1, o2, a.pts[2].screenUser, a.pts[3].screenUser);
      cmp.aligning = null;
      cmp.balance = +ui.cmpBalance.value / 100;
      if (!fit) { ui.cmpStatus.textContent = t('compare.align.same'); applyCompare(); return; }
      cmp.fit = fit; cmp.dx = 0; cmp.dy = 0;
      const sc = Math.hypot(fit[0], fit[1]), ang = Math.atan2(fit[1], fit[0]) * 180 / Math.PI;
      ui.cmpStatus.textContent = t('compare.align.done', { scale: (sc * 100).toFixed(2), angle: ang.toFixed(2) });
      status(t('compare.aligned'));
      applyCompare();
      updateCursor();
    }
    view.invalidate();
  }

  // ---- refresh ----
  let refreshRaf = 0;
  /** Sheet names typed by hand (undoable, in the store) override what the file says. */
  function applySheetNames() {
    let changed = false;
    for (const s of sheets) {
      const before = s.page.title + '|' + s.page.sheetNo;
      Object.assign(s.page, sheetInfo(s.page.label, s.file.name, s.page.index, s.page.tb, store.sheetNames.get(s.page.key) || null));
      if (before !== s.page.title + '|' + s.page.sheetNo) changed = true;
    }
    if (changed) { renderSheets(); renderCompareSelects(); }
  }

  async function renameSheet() {
    const s = curSheet();
    if (!s) return;
    const now = store.sheetNames.get(s.page.key) || {};
    const num = el('input', { type: 'text', id: 'mc-dlg-sheetno', className: 'mc-input', maxlength: '40', value: now.number ?? s.page.sheetNo, autocomplete: 'off' });
    const title = el('input', { type: 'text', id: 'mc-dlg-sheettitle', className: 'mc-input', maxlength: '200', value: now.title ?? s.page.name, autocomplete: 'off' });
    const r = await dialog({
      title: t('props.rename'),
      text: t('rename.text'),
      body: [el('div', { className: 'mc-props' }, el('label', { className: 'mc-k', for: 'mc-dlg-sheetno' }, t('props.sheet_number')), num, el('label', { className: 'mc-k', for: 'mc-dlg-sheettitle' }, t('rename.title')), title)],
      buttons: [['cancel', t('dlg.cancel')], ['save', t('dlg.save'), 'btn-plot']], submit: 'save',
    });
    if (r.key !== 'save') return;
    const v = { number: num.value.trim().slice(0, 40), title: title.value.trim().slice(0, 200) };
    store.change(t('props.rename'), (tx) => tx.setSheetName(s.page.key, v.number || v.title ? v : null));
    status(v.number || v.title ? t('rename.done') : t('rename.cleared'));
    refreshAll();
  }

  function refreshAll() {
    view.invalidate(true);
    applySheetNames();
    if (refreshRaf) return;
    refreshRaf = requestAnimationFrame(() => {
      refreshRaf = 0;
      renderProps(); renderList(); renderPunch(); refreshSheetCounts(); refreshToolbar();
      renderNav();
    });
  }
  function refreshSelection() { view.invalidate(true); renderProps(); renderList(); renderPunch(); refreshToolbar(); }
  function refreshToolbar() {
    const q = (a) => find('[data-act="' + a + '"]');
    q('undo').disabled = !store.canUndo;
    q('redo').disabled = !store.canRedo;
    const all = (a, off) => { for (const b of findAll('[data-act="' + a + '"]')) b.disabled = off; };
    const none = !editable().length;
    for (const a of ['delete', 'cut', 'copy', 'duplicate']) all(a, none);
    for (const a of ['paste', 'paste-in-place']) all(a, !curSheet() || !hasClip());
    all('select-all', !curSheet());
    all('select-none', !sel.size);
    q('save').disabled = !files.length;
    q('close').disabled = !files.length;
    all('print', !files.length);
    all('slip-sheet', !files.length);
    for (const a of ['print-pages', 'save-flat', 'page-rotate-cw', 'page-rotate-ccw', 'page-insert-pdf', 'page-insert-blank', 'page-delete', 'page-extract']) all(a, !curSheet());
    all('page-move-up', !curSheet() || curSheet().page.index === 0);
    const blankFile = curSheet()?.file.blank ? curSheet().file : null;   // "Add a blank page" under the sheets: blank sets only
    for (const b of findAll('[data-add-blank]')) { b.hidden = !blankFile; b.disabled = !blankFile; }
    all('page-move-down', !curSheet() || curSheet().page.index >= curSheet().file.pages.length - 1);
    q('prev').disabled = cur <= 0;
    q('next').disabled = cur < 0 || cur >= sheets.length - 1;
    q('save').classList.toggle('is-dirty', anyDirty());
  }
  store.on(() => refreshAll());

  // ---- AI assistants and scripts (0.4 part 2 X.7, session agents; agents.js on host.js's control channel): off until Settings › Assistants ----
  installAgents({ store, author: () => author, styleFor: (ty) => styleFor(ty), measureOf: (m) => valueOf(m),
    sheets: () => sheets.map((x) => ({ key: x.page.key, title: x.page.title, width: x.page.width, height: x.page.height, view: x.page.view, file: x.file?.name || null })),
    current: () => curSheet()?.page.key || null,
    goTo: (key) => { const i = sheets.findIndex((x) => x.page.key === key); return i >= 0 ? goTo(i) : null; } });

  // ---- add-ons (0.5 AO.6, session addons; docs/ADDONS-SPEC.md §5.5): MarkupCraft's own loader and API 1.0 (manifest "addons": "own") ----
  startAddons({ store, root, find, author: () => author, status, tabTo,
    currentSheet: () => (curSheet() ? { key: curSheet().page.key, title: curSheet().page.title } : null),
    sheets: () => sheets.map((x) => ({ key: x.page.key, title: x.page.title })),
    selection: () => [...sel], select: (ids) => { sel = new Set(ids.filter((id) => store.get(id))); refreshSelection(); },
    refresh: () => refreshAll(), setTool: (type, preset) => setTool(type, preset),
  }).catch((err) => console.warn('add-ons did not start:', err));   // i18n-ignore (developer message)

  // thumbnails follow the theme too (Model space draws sheets ink-on-dark)
  new MutationObserver(() => setTimeout(renderSheets, 0)).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the downloads to start.
  let leaving = false;
  window.addEventListener('beforeunload', (e) => { if (anyDirty() && !leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !anyDirty() || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    const k = await ask(t('unsaved.title'), t('unsaved.leave.text'), [['cancel', t('dlg.cancel')], ['discard', t('unsaved.leave.discard')], ['save', t('unsaved.save_first'), 'btn-plot']]);
    if (k === 'cancel') return;
    if (k === 'save') { await saveFiles('dirty'); if (anyDirty()) return; }
    leaving = true;
    setTimeout(() => location.assign(url.href), k === 'save' ? 800 : 0);
  });

  // ---- Settings › MarkupCraft (settings.inc in the shared Settings dialog) ----
  const settingsDlg = document.querySelector('[data-app-settings]');
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const f = (n) => settingsDlg.querySelector('[name="' + n + '"]');
    const radios = (n, v) => settingsDlg.querySelectorAll('input[name="' + n + '"]').forEach((r) => { r.checked = r.value === v; });
    if (f('mcAuthor') && document.activeElement !== f('mcAuthor')) f('mcAuthor').value = typedAuthor;
    // SI.9: signed in — "From your account (<name>)" and "Use another name", or the typed name with "Use my account name"
    const acc = settingsDlg.querySelector('[data-mc-author-account]');
    if (acc) {
      const other = !!typedAuthor || authorOther;
      acc.hidden = !accountName;
      const line = acc.querySelector('[data-mc-author-from]');
      if (line) line.textContent = accountName ? t('set.name.account', { name: accountName }) : '';
      const ob = acc.querySelector('[data-mc-author-other]');
      if (ob) ob.hidden = other;
      const row = settingsDlg.querySelector('[data-mc-author-row]');
      if (row) row.hidden = !!accountName && !other;
      const mine = settingsDlg.querySelector('[data-mc-author-mine]');
      if (mine) mine.hidden = !accountName || !other;
    }
    if (f('mcColor')) f('mcColor').value = settings.markColor || '#d0021b';
    radios('mcWeight', settings.weight);
    radios('mcPaste', settings.pasteAt);
    if (f('mcUnit')) f('mcUnit').value = settings.unit;
    if (f('mcPos')) f('mcPos').value = settings.posUnit;
  }
  function settingsChanged(say) {
    saveSettings();
    syncSettingsForm();
    renderProps();
    if (say) status(say);
  }
  if (settingsDlg) {
    settingsDlg.addEventListener('change', (e) => {
      const tg = e.target;
      switch (tg.name) {
        case 'mcAuthor':
          typedAuthor = tg.value.trim().slice(0, 80);
          author = typedAuthor || accountName;
          askedAuthor = true;
          lsSet(LS.author, typedAuthor);
          renderAuthor();
          status(typedAuthor ? t('set.author.done', { author }) : accountName ? t('set.author.account', { author: accountName }) : t('set.author.cleared'));
          break;
        case 'mcColor': settings.markColor = /^#[0-9a-f]{6}$/i.test(tg.value) && tg.value.toLowerCase() !== '#d0021b' ? tg.value.toLowerCase() : ''; settingsChanged(t('set.color.done')); break;
        case 'mcWeight': if (Object.hasOwn(WEIGHTS, tg.value)) { settings.weight = tg.value; settingsChanged(); } break;
        case 'mcPaste': settings.pasteAt = tg.value === 'offset' ? 'offset' : 'pointer'; settingsChanged(); break;
        case 'mcUnit': if (UNITS.some(([u]) => u === tg.value)) { settings.unit = tg.value; settingsChanged(); } break;
        case 'mcPos': settings.posUnit = tg.value === 'mm' ? 'mm' : 'in'; settingsChanged(); break;
        default: break;
      }
    });
    // Reset: everything here but the name (it is who you are, not a preference). Colors picked in a tool's own panel stay too.
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, SET_DEFAULTS); settingsChanged(); });
    // fill the fields in whenever the dialog opens (the status bar's name button may have changed the name meanwhile)
    new MutationObserver(() => { if (settingsDlg.open) { authorOther = false; syncSettingsForm(); } }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
    // SI.9: "Use another name" opens the name box; "Use my account name" clears the typed name
    settingsDlg.addEventListener('click', (e) => {
      if (e.target.closest('[data-mc-author-other]')) { authorOther = true; syncSettingsForm(); settingsDlg.querySelector('[name="mcAuthor"]')?.focus(); }
      else if (e.target.closest('[data-mc-author-mine]')) {
        typedAuthor = ''; authorOther = false; author = accountName; lsSet(LS.author, '');
        renderAuthor(); syncSettingsForm();
        status(t('set.author.account', { author: accountName }));
      }
    });
    syncSettingsForm();
  }
  // SI.9: who is signed in (host.js: the site's page, or Studio's account); a name change shows on the next open / Refresh.
  // Markups already made keep the name they were made with.
  function useAccount(a) {
    accountName = a && typeof a.name === 'string' ? a.name.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 80) : '';
    author = typedAuthor || accountName;
    renderAuthor(); syncSettingsForm();
  }
  host.on('account', useAccount);
  useAccount(host.account());

  // ---- autosave and recovery (0.4 item 1.2; shell's app-autosave.js) ----
  // One autosave document per open PDF: its bytes (as opened, or as the page changes left them) and its markups,
  // scales and typed sheet names by page index. Written a moment after edits stop; offered back after a crash.
  const autosave = new Autosave({ app: 'markupcraft' });
  window.markupcraft.autosave = autosave;
  function fileState(f) {
    const idx = new Map(f.pages.map((pg) => [pg.key, pg.index]));
    const markups = [], calibrations = {}, sheetNames = {};
    for (const pg of f.pages) {
      for (const m of store.onSheet(pg.key)) markups.push({ ...clone(m), sheet: pg.index });
      const cal = store.calibrations.get(pg.key); if (cal) calibrations[pg.index] = cal;
      const nm = store.sheetNames.get(pg.key); if (nm) sheetNames[pg.index] = nm;
    }
    void idx;
    return { v: 1, markups, calibrations, sheetNames, layers: layerList(), columns: store.columns, bookmarks: f.bookmarksEdited ? f.bookmarks : null };
  }
  function track(f) {
    if (f.auto) return;
    f.auto = autosave.doc({ name: f.name, snapshot: async () => ({ data: { pdf: f.blob ||= new Blob([f.bytes], { type: 'application/pdf' }), state: fileState(f) }, meta: { name: f.name, pages: f.pages.length } }) });
  }
  /** After any change: copies for files with unsaved work, none for the rest (saved, or undone back to the file). */
  function syncAutosave() {
    for (const f of files) { track(f); if (fileDirty(f)) f.auto.changed(); else f.auto.clean(); }
  }
  store.on(() => syncAutosave());
  window.markupcraft.syncAutosave = syncAutosave;
  /** A recovered copy: the PDF opened as it was, then its markups, scales and sheet names put back as unsaved work. */
  async function recover(rec) {
    const st = rec.data?.state;
    if (!rec.data?.pdf || !st || st.v !== 1) throw new Error(t('recover.bad'));
    const name = rec.meta?.name || 'recovered.pdf';   // i18n-ignore (fallback file name)
    const n0 = files.length;
    await openFiles([new File([rec.data.pdf], name, { type: 'application/pdf' })]);
    const f = files[n0];
    if (!f) throw new Error(t('recover.bad'));
    const key = (i) => f.pages[i]?.key;
    store.dropSheets(f.id + ':');
    store.load(st.markups.filter((m) => key(m.sheet)).map((m) => ({ ...m, sheet: key(m.sheet) })),
      Object.fromEntries(Object.entries(st.calibrations || {}).filter(([i]) => key(+i)).map(([i, c]) => [key(+i), c])),
      Object.fromEntries(Object.entries(st.sheetNames || {}).filter(([i]) => key(+i)).map(([i, nm]) => [key(+i), nm])), st.layers || [], st.columns || []);
    for (const pg of f.pages) store.dirtySheets.add(pg.key);
    if (Array.isArray(st.bookmarks)) { f.bookmarks = cleanBookmarks(st.bookmarks); f.bookmarksEdited = true; }
    rebuildSheets();
    await goTo(sheets.findIndex((s) => s.file === f));
    syncAutosave();
    status(t('recover.done', { file: name, n: st.markups.length }));
  }

  // ---- handoff (0.4 item 1.5): a PDF handed over by another app (?handoff=<id>), and "Open in TakeoffCraft" ----
  async function start() {
    const hid = handoffParam(location.search);
    if (hid) {
      history.replaceState(null, '', location.pathname);
      const got = await takeHandoff(hid).catch(() => null);
      if (got?.file) await openFiles([got.file]); else status(t('handoff.expired'));
    }
    const list = await autosave.orphans().catch(() => []);
    window.markupcraft.orphans = list.length;   // tests wait for this before looking for the dialog
    if (list.length) await autosave.offer({ list, onRecover: recover });
    await openHostFiles(await host.launchFiles().catch(() => []));   // the desktop app: a PDF double-clicked to start it
    // Studio Live from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the plan set comes from the host
    if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.markupcraft, host), (err) => status(err.message));
  }
  const takeoffBtn = $('[data-handoff-pdf]');
  takeoffBtn?.addEventListener('click', () => {
    const f = curSheet()?.file;
    if (!f) { status(t('need.pdf')); return; }
    const app = takeoffBtn.dataset.handoffApp;
    // sendHandoff opens the tab inside the click (pop-up blockers); the new page waits for the file to arrive
    sendHandoff(takeoffBtn.dataset.handoffUrl, new File([f.bytes], f.name, { type: 'application/pdf' }), 'markupcraft').then(
      () => status(t('handoff.sent', { file: f.name, app })),
      (err) => status(err.code === 'blocked' ? t('handoff.blocked') : err.code === 'storage' ? t('handoff.storage') : t('handoff.failed', { reason: err.message })));
  });

  renderAuthor();
  rebuildSheets();
  refreshAll();
  renderLayers();
  setTool('select');
  start();
  void PX_PER_PT; void BOX_TYPES;
}

const root = document.querySelector('[data-markupcraft]');
if (root) init(root);
