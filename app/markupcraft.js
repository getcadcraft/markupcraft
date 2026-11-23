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

import { mountUndoHook } from './undo-hook.js';   // 0.8 EG.77: tells Studio each finished step
import { el, download } from './ui-util.js';
import { Store, makeMarkup, roughBox, TYPES, STAMPS, stampLabel, defaultStyle, stampColor, clone, nowIso } from './model.js';
import { View, PX_PER_PT, mix } from './view.js';
import { displayOf, boundsOf, BOX_TYPES } from './geom.js';
import { stampSub, frame as textFrame } from './shapes.js';
import { textWidth } from './font.js';
import { closePdf, sheetInfo, dropTakenAnnots } from './pdf-read.js';
import { createBaseUi } from './base-ui.js';   // 0.6 DF.14: the Page content tool
import { Autosave } from "./app-autosave.js";
import { objectJournal, recoverState, recoverExtras } from "./history/index.js";   // 0.10 PERF.24: autosave that writes what changed
import { getHost } from "./host.js";
import { handoffParam, takeHandoff, sendHandoff } from "./handoff.js";
import { ARC_METHODS } from './arc-tool.js';
import { legendRows, rowsKey } from './legend.js';
import { cleanBookmarks } from './bookmarks.js';
import { pictureKind } from './imagestamp.js';
import { mountClientReview } from './review-ui.js';
import { extractPages } from './pages.js';
import { UNITS } from './units.js';
import { defaultUnit } from './unit-prefs.js';   // 0.7 UNITS: Settings › General › Units
import { DEFAULT_CHEST, cleanTool } from './chest.js';
import { t, locale as uiLocale } from './i18n.js';
import { installAgents } from './agents.js';
import { regionSnapshot, checkTasks, closeChanged } from './tasks.js';   // 0.8 EG.64
import { applyAnswers } from './redline.js';   // 0.8 EG.19
import { installActions } from './tasks-ui.js';   // 0.8 EG.64/65/66/19: the Tasks and Notes tabs
import { startAddons } from './addons/markupcraft-api.js';
import { mountMarkupIssues } from './issues-markup.js';   // 0.10 BK.48 (bk-r3-stages-10): the shared issue history, clouds and markups against an issue
import { installField } from './field-ui.js';   // 0.7 LC.7: RFIs, submittals and daily logs
import { installForms } from './form-ui.js';   // 0.8: fill in a PDF's form on the sheet
import { mountMarkupShell } from './shell-mount.js';   // 0.8 round 3: the shell's seven modules (calc, reasons, totals, lessons, Suggest, activity, Ask)
import { pageProblems, taskProblems, pageMarkers } from './problems-markupcraft.js';   // 0.8 P.6: pages that could not be drawn or read, in the shell's Problems
import { installOcr } from './ocr-ui.js';   // 0.7.1 71.10: Read text (OCR)
import { ocrState, cleanOcrState } from './ocr.js';
import { installTextSelect } from './textsel-ui.js';
import { installNotes } from './notes-ui.js';   // 0.9 NOTES.1: notes, the pasteboard, private notes
import { installAreaCopy } from './areacopy-ui.js';   // 0.8 D8.15: Copy area (rectangle, ellipse, freeform), as a picture or an overlay
import { mountCompare } from './compare-ui.js';
import { mountFind } from './find-ui.js';
import { mountListExport } from './list-export-ui.js';
import { mountSave } from './save-ui.js';
import { mountSettingsPanel } from './settings-panel-ui.js';
import { mountCalibrate } from './calibrate-ui.js';
import { mountChest } from './chest-ui.js';
import { mountBookmarks } from './bookmarks-ui.js';
import { mountMarkupList } from './markup-list-ui.js';
import { mountPropsThread } from './props-thread-ui.js';
import { mountPropsStyle } from './props-style-ui.js';
import { mountProps } from './props-ui.js';
import { mountKeys } from './keys-ui.js';
import { mountPaint } from './paint-ui.js';
import { mountTextEdit } from './text-edit-ui.js';
import { mountArcDraw } from './arc-draw-ui.js';
import { mountSpaces } from './spaces-ui.js';
import { mountDraw } from './draw-ui.js';
import { mountPointer } from './pointer-ui.js';
import { mountCtxMenu } from './ctx-menu-ui.js';
import { mountClipboard } from './clipboard-ui.js';
import { mountActions } from './act-ui.js';
import { mountTools } from './tools-ui.js';
import { mountSheetList } from './sheet-list-ui.js';
import { mountThumbs } from './thumbs-ui.js';
import { mountNav } from './nav-ui.js';
import { mountPrint } from './print-ui.js';
import { mountSignatures } from './signature-ui.js';
import { mountPictures } from './picture-ui.js';
import { mountLayers } from './layers-ui.js';
import { mountSlip } from './slip-ui.js';
import { mountBlank } from './blank-ui.js';
import { mountPages } from './pages-ui.js';
import { mountLinks } from './links-ui.js';
import { mountFiles } from './files-ui.js';

const DRAW_TOOLS = new Set(['pen', 'highlight', 'line', 'arrow', 'arc', 'angle', 'rect', 'ellipse', 'polyline', 'polygon', 'cloudrect', 'cloud', 'callout', 'text', 'note', 'stamp', 'measure', 'area', 'count']);
const NEEDS_SCALE = new Set(['measure', 'area']);
const KIND = {
  pen: 'free', highlight: 'free', line: 'two', arrow: 'two', measure: 'two', calibrate: 'two',
  rect: 'box', ellipse: 'box', cloudrect: 'box', text: 'box', stamp: 'box',
  arc: 'arcm', angle: 'three',   // angle: three clicks (0.4 K4); arc: the method's own steps (arc-tool.js)
  polyline: 'poly', polygon: 'poly', cloud: 'poly', area: 'poly', callout: 'callout', note: 'note', count: 'count',
};
const KEYS = { f: 'fill', b: 'content', o: 'arc', x: 'angle', v: 'select', h: 'pan', p: 'pen', i: 'highlight', l: 'line', a: 'arrow', r: 'rect', e: 'ellipse', y: 'polyline', g: 'polygon', c: 'cloudrect', k: 'callout', t: 'text', n: 'note', s: 'stamp', m: 'measure', q: 'area', u: 'count' };
const TYPE_ICON = { image: 'image', arc: 'bezier2', angle: 'triangle', pen: 'pencil', highlight: 'highlighter', line: 'slash-lg', arrow: 'arrow-up-right', rect: 'square', ellipse: 'circle', polyline: 'activity', polygon: 'pentagon', cloudrect: 'cloud', cloud: 'cloud-haze2', callout: 'chat-left-text', text: 'fonts', note: 'sticky', stamp: 'patch-check', measure: 'arrows', area: 'bounding-box', count: 'hash', foreign: 'lock' };
const TEXT_TYPES = new Set(['text', 'callout']);
const LS = { settings: 'markupcraft.settings', author: 'markupcraft.author', chest: 'markupcraft.chest' };
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } };
// Settings › MarkupCraft (settings.inc). markColor '' = each tool's own red; weight scales the line width of the same tools.
// 71.12 Page contrast (user69q: pale text from other programs, faint scans): a view-only filter on the sheet; saved files are untouched.
const CONTRAST = { normal: '', stronger: 'contrast(1.35) brightness(0.92)', strongest: 'contrast(1.8) brightness(0.8)' };
// pageMode (0.8): 'tabs' = one page at a time (a tab per page in a workspace layout), 'scroll' = the file's pages in one column
const SET_DEFAULTS = { markColor: '', weight: 'normal', pasteAt: 'pointer', unit: 'ft-in', posUnit: 'in', contrast: 'normal', pageMode: 'tabs', arcMethod: '3P' };
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
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const ST = { fileSeq: undefined, sheets: undefined, fieldUi: undefined, formUi: undefined, textSel: undefined, areaUi: undefined, notesUi: undefined, areaClip: undefined, lineUp: undefined, ocrUi: undefined, cur: undefined, sel: undefined, tool: undefined, toolPreset: undefined, drag: undefined, pending: undefined, hoverId: undefined, editing: undefined, clip: undefined, contentClip: undefined, pasteRun: undefined, pointer: undefined, spaceDown: undefined, libs: undefined, typedAuthor: undefined, accountName: undefined, author: undefined, authorOther: undefined, askedAuthor: undefined, chest: undefined, afterCalibrate: undefined, sheetMap: undefined, sheetMapOf: undefined, sheetMapN: undefined, curLayer: undefined, touchMode: undefined, insertPick: undefined, untitledSeq: undefined, picPick: undefined, heldPdf: undefined, thumbBusy: undefined, bySize: undefined, rowOf: undefined, pasteWait: undefined, pasteHow: undefined, rightDown: undefined, ctxMenu: undefined, gesture: undefined, tap: undefined, lastTap: undefined, press: undefined, spaceDraw: undefined, cutFor: undefined, dragDepth: undefined, uid: undefined, balanceTimer: undefined, refreshRaf: undefined, wsSoon: undefined, lastPick: undefined, shellOpened: undefined, leaving: undefined, problemsPush: undefined };
  const $ = (s) => root.querySelector(s);
  // Panels may move to the panels window (shell app-panels.js), out of root's reach: late lookups search them too.
  const asides = [...root.children].filter((c) => c.tagName === 'ASIDE');
  // … and toolbars torn off into their own window (app-toolbar-tear.js; 0.9 fix 2026-11-02)
  const findAll = (s) => [root, ...asides.filter((a) => !root.contains(a)), ...(window.ccToolbarTear?.torn?.() || []).filter((b) => !root.contains(b))].flatMap((n) => [...n.querySelectorAll(s)]);
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
  mountUndoHook({ store });   // 0.8 EG.77
  const view = new View(ui.canvases, ui.base, ui.over);
  const applyContrast = () => { ui.canvases.style.filter = CONTRAST[settings.contrast] || ''; };
  const files = [];
  ST.fileSeq = 0;
  ST.sheets = [];            // [{ file, page }]
  ST.fieldUi = null;           // the Field tab (field-ui.js), set up once the page is built
  ST.formUi = null;            // filling in a PDF's form (form-ui.js, 0.8), set up once the page is built
  ST.textSel = null;           // the Select text tool (textsel-ui.js, 0.7.1 71.10)
  ST.areaUi = null;            // the Copy area tool (areacopy-ui.js, 0.8 D8.15)
  ST.notesUi = null;           // notes, the pasteboard, private notes (0.9 NOTES.1, notes-ui.js)
  ST.areaClip = null;          // the newest copied area this tab made or read (areaclip.js)
  ST.lineUp = null;            // Line up a picture with two points (0.8 D8.15): { id, a1, b1, a2 }
  ST.ocrUi = null;             // Read text (OCR) (ocr-ui.js, 0.7.1 71.10)
  ST.cur = -1;
  ST.sel = new Set();
  ST.tool = 'select';
  ST.toolPreset = null;      // a tool chest tool in use: { style, subject, label, text }
  ST.drag = null;            // the pointer operation in progress
  ST.pending = null;         // two-click / polyline state between clicks
  ST.hoverId = null;
  ST.editing = null;         // { id | null (new), m (markup being edited), field }
  ST.clip = null;            // this tab's last copy (clip.js); another tab's newer copy comes from localStorage
  ST.contentClip = null;     // this tab's last copy of page content (content-clip.js, 0.7.1 71.6); the newer of the two pastes
  ST.pasteRun = { key: '', n: 0 };   // repeated "beside the copy" pastes of one copy on one sheet step further each time
  ST.pointer = null;         // the mouse/pen position over the sheet [x, y], or null when it is elsewhere
  ST.spaceDown = false;
  ST.libs = null;
  const viewStates = new Map();
  const settings = (() => {
    const v = lsGet(LS.settings, {});
    const out = { styles: {}, stamp: STAMPS[0], ...(v && typeof v === 'object' ? v : {}), ...SET_DEFAULTS };
    if (!v || typeof v !== 'object') return out;
    if (/^#[0-9a-f]{6}$/i.test(v.markColor)) out.markColor = v.markColor.toLowerCase();
    if (Object.hasOwn(WEIGHTS, v.weight)) out.weight = v.weight;
    if (v.pasteAt === 'pointer' || v.pasteAt === 'offset') out.pasteAt = v.pasteAt;
    if (UNITS.some(([u]) => u === v.unit)) out.unit = v.unit;
    else out.unit = defaultUnit('length', { offer: UNITS.map(([u]) => u), fallback: out.unit });   // 0.7 UNITS: the starred unit (ids as in the shared table)
    if (v.posUnit === 'in' || v.posUnit === 'mm') out.posUnit = v.posUnit;
    if (Object.hasOwn(CONTRAST, v.contrast)) out.contrast = v.contrast;
    if (v.pageMode === 'scroll' || v.pageMode === 'tabs') out.pageMode = v.pageMode;
    if (ARC_METHODS.includes(v.arcMethod)) out.arcMethod = v.arcMethod;
    if (!out.styles || typeof out.styles !== 'object') out.styles = {};
    return out;
  })();
  applyContrast();
  // Your name on markups (0.5 SI.9): signed in, it is your account's (host.account(), wired after Settings below) with no
  // dialog; a name typed here (Settings, or the name dialog) wins until it is cleared. Signed out: the dialog, as before.
  ST.typedAuthor = String(lsGet(LS.author, '') || '');
  ST.accountName = '';
  ST.author = ST.typedAuthor;
  ST.authorOther = false;   // Settings: "Use another name" opened the name box while signed in
  ST.askedAuthor = false;
  ST.chest = (() => { const c = lsGet(LS.chest, null); return Array.isArray(c) ? c.map(cleanTool).filter(Boolean) : DEFAULT_CHEST.slice(); })();
  const cmp = { mode: 'picture', vec: null, on: false, oldKey: '', newKey: '', dx: 0, dy: 0, fit: null, balance: 0.5, aligning: null };
  const filters = { sheet: '', author: '', status: '', type: '', layer: '', space: '', field: '' };

  const saveSettings = () => lsSet(LS.settings, { styles: settings.styles, stamp: settings.stamp, countLabel: settings.countLabel,
    markColor: settings.markColor, weight: settings.weight, pasteAt: settings.pasteAt, unit: settings.unit, posUnit: settings.posUnit, contrast: settings.contrast, pageMode: settings.pageMode, arcMethod: settings.arcMethod });
  ST.afterCalibrate = 'measure';

  // the menu styles (0.5 IP.3, input-markupcraft.js + the shell's app-input-ui.js): messages to the status bar; letters stay
  // the text box's while a markup's text is being typed
  window.ccInputHooks = { status: (text) => status(text || ''), busy: () => !!ST.editing };
  // functions are read through getters (same values once init has run), so the topics they live in can be mounted further down (PERF.71 round two)
  window.markupcraft = { store, view, files, get sheets() { return ST.sheets; }, get cur() { return ST.cur; }, get sel() { return ST.sel; }, get tool() { return ST.tool; }, get setTool() { return setTool; }, get goTo() { return goTo; }, get openFiles() { return openFiles; }, get saveFiles() { return saveFiles; }, cmp, settings, get author() { return ST.author; }, get clip() { return currentClip; }, styleFor, status, get pointer() { return ST.pointer; }, stage: ui.stage, boundsOfMarkup: (m) => boundsOf(m, envOf(m)), boundsOfId: (id) => { const m = store.get(id); return m ? boundsOf(m, envOf(m)) : null; }, get refreshList() { return renderList; }, get exportSet() { return exportSet; } };
  /**
   * The export set's entry (SuperCad Studio's Finalize and export, SC.7): the list's own exports and Save, run without the list panel being open (they never needed
   * it: they read the store and the list's filters). The files leave through the same download. sheets() → the open pages; can(kind) → null | 'empty' | 'unknown';
   * run(kind) → for the marked-up PDFs one entry per file with the sheets on its pages, else nothing.
   */
  const sheetRow = (s) => ({ id: s.page.key, number: s.page.sheetNo || '', title: s.page.title || '', scale: '', revision: '' });
  const exportSet = {
    kinds: ['pdf', 'bcf', 'xlsx'],
    sheets: () => ST.sheets.map(sheetRow),
    can: (kind) => (!exportSet.kinds.includes(kind) ? 'unknown' : !files.length || (kind !== 'pdf' && !filteredMarkups().length) ? 'empty' : null),
    async run(kind) {
      if (kind === 'bcf') await exportBcf();
      else if (kind === 'xlsx') await exportSummary('xlsx');
      else if (kind === 'pdf') { await saveFiles('all'); return files.map((f) => ({ sheets: ST.sheets.filter((x) => x.file === f).map(sheetRow) })); }
      return [];
    },
  };

  // ---- helpers ----
  const curSheet = () => ST.sheets[ST.cur] || null;
  const curKey = () => curSheet()?.page.key || '';
  // a Map of the set's sheets by key, rebuilt when the set changes (the list was scanned for every lookup: O(sheets) per thumbnail and per markup)
  ST.sheetMap = null; ST.sheetMapOf = null; ST.sheetMapN = -1;
  const sheetByKey = (key) => {
    if (ST.sheetMapOf !== ST.sheets || ST.sheetMapN !== ST.sheets.length || ST.sheetMap.get(ST.sheets[ST.sheets.length - 1]?.page.key) !== ST.sheets[ST.sheets.length - 1]) { ST.sheetMap = new Map(ST.sheets.map((s) => [s.page.key, s])); ST.sheetMapOf = ST.sheets; ST.sheetMapN = ST.sheets.length; }
    return ST.sheetMap.get(key) || null;
  };
  const badgeFor = (key) => { const s = sheetByKey(key); return s ? Math.max(7, Math.min(18, Math.hypot(s.page.width, s.page.height) / 160)) : 9; };
  const legendOf = (m) => legendRows(store.all(), { sheet: m.sheet, scope: m.legend?.scope, name: (x) => tname(x.type) });
  const envOf = (m) => { const e = { cal: store.calibrations.get(m.sheet) || null, badge: badgeFor(m.sheet) }; if (m.type === 'legend') { e.legend = legendOf(m); e.legendKey = rowsKey(e.legend); } return e; };
  // markups on hidden layers neither draw nor pick; on locked layers they draw but do not pick (0.4 K3)
  // 0.9 NOTES.1: only what draws and edits on this screen sees notes and private notes (store.everyOn); see model.js
  const offPageSeen = new WeakMap();
  store.offPage = (m) => {
    if (m.type === 'foreign') return false;
    if (offPageSeen.has(m)) return offPageSeen.get(m);
    const v = sheetByKey(m.sheet)?.page.view, b = roughBox(m);
    if (!v || !b) return false;
    const off = b[2] < v[0] || b[0] > v[2] || b[3] < v[1] || b[1] > v[3];
    offPageSeen.set(m, off);
    return off;
  };
  const pageMarkups = () => store.everyOn(curKey()).filter((m) => store.shown(m));
  const pickable = () => store.everyOn(curKey()).filter((m) => store.open(m));
  ST.curLayer = '';                 // the layer new markups go on ('' = none)
  // Touch (0.4 S.8): with a finger, picking and grips take a bigger target (the last pointer used decides)
  ST.touchMode = false;
  const tolerance = () => (ST.touchMode ? 14 : 5) / view.z;
  /** A tool's style before its own panel choices: the default, with Settings › New markups applied. */
  function baseStyle(type) {
    const st = defaultStyle(type);
    if (COLOR_TYPES.has(type)) {
      if (settings.markColor) st.color = settings.markColor;
      if (st.width) st.width = Math.round(st.width * (WEIGHTS[settings.weight] || 1) * 4) / 4;
    }
    return st;
  }
  function styleFor(type) { return { ...baseStyle(type), ...(settings.styles[type] || {}), ...(ST.toolPreset && ST.toolPreset.type === type ? ST.toolPreset.style : {}) }; }
  const sheetTitle = (s) => (s ? s.page.title : '');
  const fileDirty = (f) => [...store.dirtySheets].some((k) => k.startsWith(f.id + ':'));
  function anyDirty() { return files.some(fileDirty); }

  function status(msg) { ui.status.textContent = msg || ''; }
  function busy(text) { ui.busy.hidden = !text; if (text) ui.busyText.textContent = text; }

  async function loadLibs() {
    if (ST.libs) return ST.libs;
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = root.dataset.pdfWorker;
    // the picture-painting operators: view.checkImages finds pictures pdf.js could not decode (0.7.1, blank-page reports)
    view.imageOps = new Set([pdfjs.OPS.paintImageXObject, pdfjs.OPS.paintImageMaskXObject, pdfjs.OPS.paintImageXObjectRepeat, pdfjs.OPS.paintImageMaskXObjectRepeat].filter(Number.isFinite));
    ST.libs = {
      pdfjs,
      pdfLib: null,
      docOptions: { cMapUrl: root.dataset.pdfCmaps, cMapPacked: true, standardFontDataUrl: root.dataset.pdfFonts, wasmUrl: root.dataset.pdfWasm, iccUrl: root.dataset.pdfIcc },
    };
    return ST.libs;
  }
  async function pdfLib() {
    await loadLibs();
    if (!ST.libs.pdfLib) ST.libs.pdfLib = await import('pdf-lib');
    return ST.libs.pdfLib;
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
    if (ST.author && !force) return ST.author;
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-author', maxlength: '80', autocomplete: 'name', value: ST.author });
    const r = await dialog({
      title: t('dlg.author.title'),
      text: t('dlg.author.text'),
      body: [el('label', { className: 'mc-k', for: 'mc-dlg-author' }, t('dlg.author.name')), input],
      buttons: [['cancel', t('dlg.author.later')], ['save', t('dlg.save'), 'btn-plot']], submit: 'save',
      check: () => (input.value.trim() ? '' : t('dlg.author.need')),
    });
    ST.askedAuthor = true;
    if (r.key === 'save') { ST.typedAuthor = input.value.trim().slice(0, 80); ST.author = ST.typedAuthor || ST.accountName; lsSet(LS.author, ST.typedAuthor); renderAuthor(); syncSettingsForm(); }
    return ST.author;
  }
  function renderAuthor() { ui.author.textContent = ST.author || t('status.author.none'); }

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

  // 2026-11-12: the start card's "Try a sample file" opens a real sample through the normal open path; the same action is in the command palette (Ctrl+K) once the card is closed
  async function openSample() {
    try {
      const r = await fetch(new URL('./samples/markupcraft-sample.pdf', import.meta.url));
      if (!r.ok) throw new Error('HTTP ' + r.status);
      await openFiles([new File([await r.blob()], 'markupcraft-sample.pdf', { type: 'application/pdf' })]);   // i18n-ignore: a file name
    } catch (err) { busy(''); status(t('hint.sample.noload', { why: err.message })); }
  }
  for (const b of root.querySelectorAll('[data-hint-sample]')) b.addEventListener('click', openSample);
  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  { const regSample = () => window.ccPalette?.register?.([{ id: 'markupcraft-sample', label: t('hint.trysample'), group: 'file', keywords: 'sample example demo try', run: openSample }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }

  const { openFiles, closeSet, saveFiles, bake } = mountFiles({
    ST, ui, store, view, files, viewStates, curSheet, badgeFor, legendOf, fileDirty, anyDirty, status, busy, loadLibs, pdfLib, ask, host, PDF_TYPES, sheetList, refreshAll, refreshToolbar, checkAllTasks, syncAutosave,
    get shellData() { return shellData; },
    get rebuildSheets() { return rebuildSheets; },
    get shellMount() { return shellMount; },
    get goTo() { return goTo; },
    get autoCloseOn() { return autoCloseOn; },
    get stopCompare() { return stopCompare; },
    get cancelOps() { return cancelOps; },
    get baseUi() { return baseUi; },
    get forgetText() { return forgetText; },
    get segCache() { return segCache; },
    get commitEdit() { return commitEdit; },
    get layerList() { return layerList; },
    get shellPack() { return shellPack; },
  });

  /** Sheets as link.js wants them (their place in the list = newest last). */
  function sheetList() { return ST.sheets.map((s) => ({ key: s.page.key, sheetNo: s.page.sheetNo, title: s.page.title, file: s.file, page: s.page })); }
  const { backStack, followLink, goBack } = mountLinks({
    ST, view, curKey, status, sheetList,
    get goTo() { return goTo; },
  });
  const layerList = () => store.layerNames().map((name) => ({ name, ...store.layerState(name) }));
  /** Each page's label as the file will carry it (typed sheet number, else the PDF's own label), or null when none has one. */
  const labelsOf = (f) => { const l = f.pages.map((pg) => store.sheetNames.get(pg.key)?.number || pg.label || ''); return l.some(Boolean) ? l : null; };

  const { pagesOp } = mountPages({
    ST, $, ui, store, files, viewStates, curSheet, status, busy, pdfLib, dialog, ask, dl, bake, labelsOf, refreshAll,
    get commitEdit() { return commitEdit; },
    get cancelOps() { return cancelOps; },
    get stopCompare() { return stopCompare; },
    get forgetText() { return forgetText; },
    get segCache() { return segCache; },
    get baseUi() { return baseUi; },
    get rebuildSheets() { return rebuildSheets; },
    get goTo() { return goTo; },
  });

  const { newBlank } = mountBlank({
    ST, files, status, busy, pdfLib, dialog, ask, openFiles,
    get commitEdit() { return commitEdit; },
    get cancelOps() { return cancelOps; },
    get lsGet() { return lsGet; },
    get lsSet() { return lsSet; },
  });

  const { sheetFacts } = mountSlip({
    ST, $, ui, store, files, sheetByKey, status, dialog, ask, askAuthor, openFiles, refreshAll,
    get commitEdit() { return commitEdit; },
    get cancelOps() { return cancelOps; },
  });

  const { rebuildSheets, goTo, renderNav, renderZoom, scrollMode, applyStrip, setPageMode, showPageMode } = mountNav({
    ST, findAll, ui, store, view, files, viewStates, settings, cmp, saveSettings, curSheet, curKey, envOf, status, renderCompareSelects, refreshAll,
    get renderSheets() { return renderSheets; },
    get renderSetSelects() { return renderSetSelects; },
    get renderBookmarks() { return renderBookmarks; },
    get commitEdit() { return commitEdit; },
    get cancelOps() { return cancelOps; },
    get stopCompare() { return stopCompare; },
    get markCurrentSheet() { return markCurrentSheet; },
    get positionEditor() { return positionEditor; },
  });
  const { findUi, textCache, found, sheetText, forgetText, runFind, showHit } = mountFind({
    $, find, view, curSheet, sheetByKey, goTo,
    get sheets() { return ST.sheets; },
    get cur() { return ST.cur; },
  });
  findUi.form?.addEventListener('submit', (e) => { e.preventDefault(); runFind(); });
  findUi.list?.addEventListener('click', (e) => { const b = e.target.closest('button[data-hit]'); if (b) showHit(+b.dataset.hit); });
  const { startEdit, positionEditor, commitEdit } = mountTextEdit({
    ST, ui, store, view, status, commitNew, tabTo, refreshAll,
    get tlow() { return tlow; },
  });
  const { SIG, PIC, LS_SIGS, LS_SIG, isPic, currentPicture, pictureFrom, pickPictureFile, pictureOf, insertPicture, choosePicture, showPhoto, placePicture } = mountPictures({
    ST, $, ui, view, settings, saveSettings, curSheet, status, loadLibs, dialog, askAuthor, host, commitEdit, newMarkup, commitNew,
    get cancelOps() { return cancelOps; },
    get setTool() { return setTool; },
    get renderProps() { return renderProps; },
    get lsGet() { return lsGet; },
    get lsSet() { return lsSet; },
  });
  const { setTool, updateCursor } = mountTools({
    ST, findAll, ui, store, view, settings, cmp, curSheet, curKey, status, askAuthor, commitEdit, currentPicture, root,
    get cancelOps() { return cancelOps; },
    get baseUi() { return baseUi; },
    get renderProps() { return renderProps; },
    get SIG() { return SIG; },
    get arcHint() { return arcHint; },
    get showArcBar() { return showArcBar; },
    get NEEDS_SCALE() { return NEEDS_SCALE; },
    get DRAW_TOOLS() { return DRAW_TOOLS; },
    get KIND() { return KIND; },
  });
  const { constrain, showCoords, hover, selectDown, liveMove, liveGrip, endMove, endGrip, endWindow, finishFree, finishTwo, finishBox, finishCallout, finishPoly, openSketch, startCutout, countClick, placeNote, cancelOps } = mountDraw({
    ST, ui, store, view, settings, cmp, curSheet, curKey, envOf, pickable, tolerance, styleFor, status, followLink, startEdit, currentPicture, placePicture, setTool, updateCursor, newMarkup, commitNew, stampBox, refreshAll, refreshSelection,
    get over() { return over; },
    get calibrateDialog() { return calibrateDialog; },
    get placeStampTool() { return placeStampTool; },
    get clampPt() { return clampPt; },
    get finishSpace() { return finishSpace; },
    get applyCompare() { return applyCompare; },
    get tlow() { return tlow; },
  });
  const { batchLinks, cloudFound, saveFlat, saveClean } = mountSave({
    store, curSheet, curKey, sheetByKey, envOf, styleFor, status, busy, pdfLib, dialog, ask, askAuthor, dl, bake, sheetList, sheetText, found, cancelOps, commitEdit, applySheetNames, refreshAll,
    get sheets() { return ST.sheets; },
    get sel() { return ST.sel; }, set sel(v) { ST.sel = v; },
  });

  const { layerSelect, askLayerName, renderLayers } = mountLayers({
    ST, $, find, store, status, dialog, refreshAll,
  });

  const { drawSignature, signatures, useSignature, dropSignature, uploadSignature } = mountSignatures({
    ST, settings, saveSettings, status, dialog, ask, SIG, LS_SIGS, LS_SIG, pickPictureFile, pictureOf,
    get renderProps() { return renderProps; },
    get lsGet() { return lsGet; },
    get lsSet() { return lsSet; },
  });

  const { printSheets } = mountPrint({
    ST, files, curSheet, status, busy, pdfLib, dialog, ask, bake, commitEdit, cancelOps,
    get setName() { return setName; },
  });

  const { thumbQueue, thumbObserver, pumpThumbs, redrawThumb } = mountThumbs({
    ST, ui, view, curSheet, sheetByKey,
  });

  // Pages › Client review link… (0.10 BK.177): one link a client opens to see the published sheets and comment, at any stage
  const clientReview = mountClientReview({ el, t, dialog, status, busy, files: () => files, curSheet, bake, pdfLib, extractPages, setName: () => setName(), store, getAuthor: () => ST.author });
  window.markupcraft.clientReview = clientReview;   // tests
  const { sizeOf, sizeName, sizeNameOrient, sizeGroups, renderSheets, markCurrentSheet, refreshSheetCounts } = mountSheetList({
    ST, ui, store, status, goTo, thumbQueue, thumbObserver, root,
  });

  const { closeMenus, act } = mountActions({
    ST, ui, view, files, cmp, curSheet, status, askAuthor, host, PDF_TYPES, dl, openHostFiles, closeSet, saveFiles, pagesOp, newBlank, cloudFound, batchLinks, saveFlat, saveClean, insertPicture, printSheets, goTo, renderNav, renderZoom, scrollMode, setPageMode, clientReview, setTool, startCompare, renameSheet, refreshSelection, root,
    get undo() { return undo; },
    get redo() { return redo; },
    get deleteSelection() { return deleteSelection; },
    get cleanPenMarkups() { return cleanPenMarkups; },
    get cutSelection() { return cutSelection; },
    get copySelection() { return copySelection; },
    get paste() { return paste; },
    get pastePictureMenu() { return pastePictureMenu; },
    get baseUi() { return baseUi; },
    get saveStamp() { return saveStamp; },
    get duplicate() { return duplicate; },
    get selectAll() { return selectAll; },
    get startLineUp() { return startLineUp; },
    get calibrateDialog() { return calibrateDialog; },
    get exportListCsv() { return exportListCsv; },
    get exportBcf() { return exportBcf; },
    get exportSummary() { return exportSummary; },
    get editColumns() { return editColumns; },
    get addLegend() { return addLegend; },
    get exportPunchCsv() { return exportPunchCsv; },
    get addToPunch() { return addToPunch; },
    get saveToChest() { return saveToChest; },
    get stopCompare() { return stopCompare; },
    get startAlign() { return startAlign; },
    get cloudChanges() { return cloudChanges; },
    get compareSets() { return compareSets; },
    get cloudSet() { return cloudSet; },
    get applyCompare() { return applyCompare; },
  });

  const { undo, redo, editable, cleanPenMarkups, deleteSelection, currentClip, hasClip, copySelection, cutSelection, pasteMode, paste, startLineUp, lineUpClick, paintLineUp, pastePictureMenu, duplicate, selectAll } = mountClipboard({
    ST, store, view, settings, curSheet, curKey, pickable, styleFor, status, askAuthor, commitEdit, cancelOps, pictureFrom, renderNav, setTool, updateCursor, newMarkup, commitNew, refreshAll, refreshSelection, refreshToolbar, root,
    get baseUi() { return baseUi; },
    get typing() { return typing; },
    get lowFirst() { return lowFirst; },
    get TAB() { return TAB; },
    get PASTE_STEP() { return PASTE_STEP; },
  });

  // ---- creating markups ----
  function newMarkup(type, geom, extra = {}) {
    const s = curSheet();
    const style = styleFor(type);
    const label = type === 'stamp' ? (ST.toolPreset?.label || stampLabel(settings.stamp)) : '';
    if (type === 'stamp' && !ST.toolPreset?.style?.color && !settings.styles.stamp?.color) style.color = stampColor(label);
    return makeMarkup({
      sheet: s.page.key, type, rot: view.seenRotate, style, author: ST.author, label, layer: ST.curLayer && store.open({ layer: ST.curLayer }) ? ST.curLayer : '',
      subject: ST.toolPreset?.subject || TYPES[type].subject,
      text: TEXT_TYPES.has(type) ? (ST.toolPreset?.text || '') : '',
      ...(ST.toolPreset?.xd && ST.toolPreset.type === type ? { xd: ST.toolPreset.xd } : {}),   // an add-on's markup type (0.5 AO.6)
      ...geom, ...extra,
    });
  }
  function commitNew(m, label) {
    const mk = store.change(label || t('undo.add', { type: tlow(m.type) }), (tx) => tx.add(m));
    ST.sel = new Set([mk.id]);
    refreshAll();
    return mk;
  }

  const clampPt = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  /** Size of a new stamp at this zoom (box in user space, centered on p). */
  function stampBox(p, label) {
    // about 54 screen pixels tall, kept between 1/2" and 1 1/4" on the printed sheet
    const H = clampPt(54 / view.z, 36, 90);
    const sub = stampSub({ author: ST.author, created: nowIso() });
    const W = Math.max(H * 2.2, textWidth(label.toUpperCase(), H * 0.38, true) + H * 0.6, textWidth(sub, H * 0.17) + H * 0.6);
    const f = textFrame(view.seenRotate, [0, 0, 1, 1]);
    const [w, h] = f.u[0] !== 0 ? [W, H] : [H, W];
    return [p[0] - w / 2, p[1] - h / 2, p[0] + w / 2, p[1] + h / 2];
  }

  // ---- pointer ----
  const over = ui.over;
  const localXY = (e) => { const r = over.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };

  const { openCtxMenu } = mountCtxMenu({
    ST, store, view, curSheet, envOf, pickable, tolerance, host, commitEdit, insertPicture, setTool, closeMenus, act, editable, hasClip, paste, over, localXY, refreshSelection, root,
    get longPress() { return longPress; },
    get baseUi() { return baseUi; },
    get setFlat() { return setFlat; },
    get DRAW_TOOLS() { return DRAW_TOOLS; },
  });

  const { longPress } = mountPointer({
    ST, view, cmp, envOf, pickable, tolerance, status, startEdit, commitEdit, finishPoly, selectDown, finishTwo, constrain, placeNote, countClick, showCoords, hover, liveMove, liveGrip, finishFree, finishBox, finishCallout, endMove, endGrip, endWindow, setTool, updateCursor, lineUpClick, over, localXY, openCtxMenu, root,
    get alignClick() { return alignClick; },
    get baseUi() { return baseUi; },
    get finishThree() { return finishThree; },
    get arcPress() { return arcPress; },
    get KIND() { return KIND; },
    get TEXT_TYPES() { return TEXT_TYPES; },
  });

  const { hasSpaces, markupSpace, finishSpace } = mountSpaces({
    ST, find, store, view, curSheet, sheetByKey, envOf, status, dialog, goTo, setTool, newMarkup, refreshAll,
    get sheetOrder() { return sheetOrder; },
    get tlow() { return tlow; },
  });

  const { arcHint, setArcMethod, showArcBar, arcPress, openArcValue, finishThree } = mountArcDraw({
    ST, ui, store, view, settings, saveSettings, curKey, status, newMarkup, commitNew,
    get renderProps() { return renderProps; },
    get fid() { return fid; },
    get tlow() { return tlow; },
  });

  mountPaint({
    ST, store, view, cmp, curSheet, curKey, envOf, pageMarkups, styleFor, found, paintLineUp, newMarkup,
    get baseUi() { return baseUi; },
  });

  const { typing } = mountKeys({
    ST, ui, store, view, files, cmp, curSheet, curKey, status, openFiles, saveFiles, backStack, goBack, findUi, insertPicture, printSheets, setTool, updateCursor, closeMenus, act, undo, redo, editable, deleteSelection, copySelection, cutSelection, pasteMode, paste, duplicate, selectAll, localXY, finishPoly, openSketch, arcHint, openArcValue, cancelOps, startEdit, refreshAll, refreshSelection, root,
    get baseUi() { return baseUi; },
    get KEYS() { return KEYS; },
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
    if (k === 'field') ST.fieldUi?.render();
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
  ST.uid = 0;
  const fid = () => 'mc-f' + (++ST.uid);

  // ---- the page's own content (0.6 DF.14, base-ui.js) ----
  const baseUi = createBaseUi({
    view, store, t, el, status, over: ui.over, settings, saveSettings, fid, mix, dropTakenAnnots, closePdf,
    curSheet, pdfLib, libs: () => ST.libs, touch: () => ST.touchMode, refresh: refreshSelection,
    tab: TAB, act, toStamp: (cc) => saveStamp({ content: cc }),
    listOf: (m) => displayOf(m, envOf(m)).list,
    // a picture file for "Replace picture" (0.6 DF.14 b): null = nothing picked, '' = not a PNG/JPEG we can use
    pickPicture: async () => {
      const f = await pickPictureFile();
      if (!f) return null;
      return pictureKind(f.name, f.type) ? await pictureFrom(f) : '';
    },
    fileOf: (key) => files.find((f) => key.startsWith(f.id + ':')) || null,
    reshow: async (f) => {
      forgetText(f.id + ':');
      for (const k of [...segCache.keys()]) if (k.startsWith(f.id + ':')) segCache.delete(k);
      const s = curSheet();
      if (s && s.file === f) view.setPage(s.page, await f.doc.getPage(s.page.index + 1), { keepView: true, extraRot: view.extraRot || 0, keepPicture: true });
      for (const c of findAll('canvas.mc-thumb')) if (c.dataset.key?.startsWith(f.id + ':') && c.classList.contains('is-ready')) { c.classList.remove('is-ready'); thumbQueue.push(c); }
      pumpThumbs();
    },
  });
  window.markupcraft.base = baseUi;

  const { patchSel, styleControls, stampChooser } = mountPropsStyle({
    store, PIC, SIG, isPic, editable, field, fid, refreshAll,
    get TEXT_TYPES() { return TEXT_TYPES; },
  });

  const { renderProps, punchFields, valueOf, setFlat } = mountProps({
    ST, ui, store, settings, saveSettings, curSheet, curKey, sheetByKey, envOf, styleFor, status, sheetList, followLink, layerSelect, askLayerName, PIC, SIG, LS_SIG, isPic, currentPicture, choosePicture, drawSignature, signatures, useSignature, dropSignature, uploadSignature, sizeOf, sizeNameOrient, deleteSelection, hasSpaces, markupSpace, startCutout, setArcMethod, startEdit, field, fid, baseUi, stampChooser, styleControls, patchSel, refreshAll,
    get calibrateDialog() { return calibrateDialog; },
    get threadSection() { return threadSection; },
    get addToPunch() { return addToPunch; },
    get saveToChest() { return saveToChest; },
    get saveStamp() { return saveStamp; },
    get copyToSheets() { return copyToSheets; },
    get tname() { return tname; },
    get DRAW_TOOLS() { return DRAW_TOOLS; },
    get lsGet() { return lsGet; },
    get tlow() { return tlow; },
    get NEEDS_SCALE() { return NEEDS_SCALE; },
    get stname() { return stname; },
    get TEXT_TYPES() { return TEXT_TYPES; },
    get pstname() { return pstname; },
  });

  const { threadSection } = mountPropsThread({
    ST, ui, store, status, askAuthor, pictureFrom, showPhoto, fid, refreshAll,
  });

  const { filteredMarkups, sheetOrder, renderList, copyToSheets, addLegend, editColumns, jumpTo, renderPunch, exportPunchCsv } = mountMarkupList({
    ST, findAll, find, ui, store, view, filters, curSheet, curKey, sheetByKey, envOf, status, dialog, askAuthor, dl, goTo, editable, newMarkup, markupSpace, activeTab, punchFields, valueOf, refreshAll, refreshSelection, root,
    get setName() { return setName; },
    get stname() { return stname; },
    get tname() { return tname; },
    get TEXT_TYPES() { return TEXT_TYPES; },
    get TYPE_ICON() { return TYPE_ICON; },
    get TAB() { return TAB; },
    get pstname() { return pstname; },
  });

  const { renderBookmarks } = mountBookmarks({
    ST, $, find, store, curSheet, status, dialog, ask, goTo, refreshToolbar, syncAutosave,
  });

  const { exportListCsv, importBcf, exportSummary, exportBcf, setName, addToPunch, exportRedline, exportSidecar, openSidecar } = mountListExport({
    ui, store, view, files, filters, curKey, sheetByKey, envOf, styleFor, status, busy, pdfLib, ask, dl, sizeOf, sizeName, sizeGroups, hasSpaces, markupSpace, cancelOps, commitEdit, valueOf, filteredMarkups, sheetOrder, refreshAll,
    get sheets() { return ST.sheets; },
    get author() { return ST.author; },
    get sel() { return ST.sel; }, set sel(v) { ST.sel = v; },
    get autoCloseOn() { return autoCloseOn; },
    get setAutoClose() { return setAutoClose; },
  });

  /** BCF import (0.4 K7): comments and statuses back onto the markups exported from here; other topics as notes. */
  ui.bcfFile = $('[data-bcf-file]');
  ui.bcfFile?.addEventListener('change', () => { const f = ui.bcfFile.files[0]; ui.bcfFile.value = ''; if (f) importBcf(f); });

  const { saveToChest, saveStamp, placeStampTool, renderChest } = mountChest({
    ST, ui, store, view, curSheet, curKey, status, dialog, ask, setTool, editable, tabTo, activeTab, baseUi, refreshAll,
    get lsSet() { return lsSet; },
    get LS() { return LS; },
    get tname() { return tname; },
    get TAB() { return TAB; },
    get TYPE_ICON() { return TYPE_ICON; },
  });

  const { calibrateDialog } = mountCalibrate({
    ST, store, settings, curSheet, status, dialog, renderNav, setTool, refreshAll,
  });

  // ---- compare ----
  function renderCompareSelects() {
    if (activeTab() !== 'compare') return;
    for (const [sel_, key] of [[ui.cmpOld, 'oldKey'], [ui.cmpNew, 'newKey']]) {
      const v = cmp[key] || sel_.value;
      sel_.replaceChildren(el('option', { value: '', className: 'select-placeholder' }, t('choose_one')), ...ST.sheets.map((s) => el('option', { value: s.page.key }, files.length > 1 ? t('compare.sheet_in_file', { sheet: s.page.title, file: s.file.name }) : s.page.title)));
      sel_.value = ST.sheets.some((s) => s.page.key === v) ? v : '';
    }
    if (!ui.cmpNew.value && curSheet()) ui.cmpNew.value = curKey();
    if (!ui.cmpOld.value && ST.sheets.length > 1) ui.cmpOld.value = ST.sheets.find((s) => s.page.key !== ui.cmpNew.value)?.page.key || '';
  }

  async function startCompare() {
    const oldKey = ui.cmpOld.value, newKey = ui.cmpNew.value;
    if (!oldKey || !newKey) { ui.cmpStatus.textContent = t('compare.need'); return; }
    if (oldKey === newKey) { ui.cmpStatus.textContent = t('compare.need.two'); return; }
    const i = ST.sheets.findIndex((s) => s.page.key === newKey);
    if (ST.cur !== i) await goTo(i);
    if (cmp.oldKey !== oldKey || cmp.newKey !== newKey) { cmp.dx = 0; cmp.dy = 0; cmp.fit = null; }
    cmp.oldKey = oldKey; cmp.newKey = newKey; cmp.on = true;
    applyStrip();   // comparing shows one page at a time (Scroll mode comes back after)
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
  const { segCache, segsOf, renderSetSelects, compareSets, cloudSet, cloudChanges, applyCompare, stopCompare, startAlign, alignClick, changesBetween } = mountCompare({
    $, findAll, find, ui, store, view, files, cmp, sheetByKey, styleFor, status, askAuthor, sheetFacts, applyStrip, updateCursor, newMarkup, cancelOps, startCompare, refreshAll,
    get libs() { return ST.libs; },
    get sheets() { return ST.sheets; },
    get sel() { return ST.sel; }, set sel(v) { ST.sel = v; },
    get sheetLabel() { return sheetLabel; },
  });

  for (const r of findAll('[data-cmp-mode]')) r.addEventListener('change', () => { cmp.mode = r.value; applyCompare(); });
  ST.balanceTimer = 0;
  ui.cmpBalance.addEventListener('input', () => {
    cmp.balance = +ui.cmpBalance.value / 100;
    clearTimeout(ST.balanceTimer);
    ST.balanceTimer = setTimeout(applyCompare, 60);
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

  // ---- refresh ----
  ST.refreshRaf = 0;
  /** Sheet names typed by hand (undoable, in the store) override what the file says. */
  function applySheetNames() {
    let changed = false;
    for (const s of ST.sheets) {
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

  // ---- workspace layouts (0.7 WS.10): Settings › Global › Layout, through the shell's engine (assets/js/app-workspace.js) and
  // workspace-markupcraft.js; only builds whose manifest lists layouts (#cc-workspace on the page, 'cc-workspace' in the import map)
  ST.wsSoon = () => {};
  async function mountLayouts() {
    if (!document.getElementById('cc-workspace')) return;
    try {
      const [{ mountWorkspaces }, { createMarkupcraftWorkspace }] = await Promise.all([import('cc-workspace'), import('./workspace-markupcraft.js')]);
      const ws = await createMarkupcraftWorkspace({ root, app: {
        sheets: () => ST.sheets, cur: () => ST.cur, goTo: (i) => goTo(i), files: () => files, dirty: anyDirty, busy: () => !ui.busy.hidden,
        sel: () => ST.sel, tool: () => ST.tool, setTool: (n) => setTool(n), status, pageMode: () => settings.pageMode,
        // 0.11 UI.25 (ccState): what a selected markup is, and the reverse channel (select on its sheet; jump = the markups list's own show)
        kindOf: (id) => store.get(id)?.type || '', jump: jumpTo, sheetIndex: (key) => ST.sheets.findIndex((s) => s.page.key === key),
        selectIds: async (ids) => {
          const ms = ids.map((id) => store.get(id)).filter((m) => m && store.open(m)); if (!ms.length) return false;
          const i = ST.sheets.findIndex((s) => s.page.key === ms[0].sheet); if (i < 0) return false;
          if (ST.tool !== 'select') setTool('select');
          ST.sel = new Set(ms.filter((m) => m.sheet === ms[0].sheet).map((m) => m.id));
          if (i !== ST.cur) await goTo(i, { keepSelection: true }); refreshSelection(); return true;
        },
      } });
      if (!ws) { document.documentElement.removeAttribute('data-cc-ws-boot'); return; }
      ws.attach(mountWorkspaces(ws.adapter));
      ST.wsSoon = ws.refresh;
    } catch (err) {
      document.documentElement.removeAttribute('data-cc-ws-boot');   // the classic layout, never a blank page
      status(t('ws.failed', { reason: err?.message || String(err) }));
    }
  }

  function refreshAll() {
    view.invalidate(true);
    applySheetNames();
    if (ST.refreshRaf) return;
    ST.refreshRaf = requestAnimationFrame(() => {
      ST.refreshRaf = 0;
      renderProps(); renderList(); renderPunch(); if (activeTab() === 'field') ST.fieldUi?.render(); ST.formUi?.render(); refreshSheetCounts(); refreshToolbar();
      renderNav();
      ST.wsSoon();
    });
  }
  const selListeners = new Set();   // the shell's design reasons listen for the selection (shell-mount.js)
  // 0.8 DC.1 (apps-mount_PART_5): the picked markups are announced to the page (SuperCadCraft hears `cc-pick`); a related pick from another panel comes
  // back through window.ccPickApply(refs). Both are inert outside Super.
  ST.lastPick = '';
  function announcePick() {
    const ids = [...ST.sel].map(String), key = ids.join(',');
    if (key === ST.lastPick) return;
    ST.lastPick = key;
    try { window.dispatchEvent(new CustomEvent('cc-pick', { detail: { app: 'markupcraft', ids } })); } catch { /* no window */ }
  }
  const pickApply = (refs) => {
    const ids = (refs || []).map((r) => (r ? String(r.id) : '')).filter((id) => { const m = store.get(id); return m && m.sheet === curKey() && store.open(m); });
    if (!ids.length) return false;
    ST.sel = new Set(ids); ST.lastPick = ids.join(','); refreshSelection(); return true;
  };
  window.ccPickApply = pickApply;
  // SC.5 (sc-r5-select): the same adapter by app name (several apps share one page in Super), with a clear
  (window.ccPickers = window.ccPickers || {}).markupcraft = { apply: pickApply, get: () => ({ ids: [...ST.sel].map(String) }), clear: () => { if (ST.sel.size) { ST.sel = new Set(); ST.lastPick = ''; refreshSelection(); } return true; } };
  function refreshSelection() { announcePick(); for (const fn of selListeners) { try { fn(); } catch { /* a listener must not stop the page */ } } view.invalidate(true); renderProps(); renderList(); renderPunch(); refreshToolbar(); ST.wsSoon(); }
  function refreshToolbar() {
    const q = (a) => find('[data-act="' + a + '"]');
    q('undo').disabled = !store.canUndo;
    q('redo').disabled = !store.canRedo;
    const all = (a, off) => { for (const b of findAll('[data-act="' + a + '"]')) b.disabled = off; };
    const none = ST.tool === 'content' ? !baseUi.selection.length : !editable().length;   // the Content tool: its own selection (71.6)
    for (const a of ['delete', 'cut', 'copy', 'duplicate', 'save-stamp']) all(a, none);
    all('insert-picture', !curSheet());
    for (const a of ['paste', 'paste-in-place']) all(a, !curSheet() || !hasClip());
    all('select-all', !curSheet());
    all('select-none', ST.tool === 'content' ? !baseUi.selection.length : !ST.sel.size);
    q('save').disabled = !files.length;
    q('close').disabled = !files.length;
    all('print', !files.length);
    all('slip-sheet', !files.length);
    for (const a of ['client-review', 'print-pages', 'save-flat', 'save-clean', 'page-rotate-cw', 'page-rotate-ccw', 'page-insert-pdf', 'page-insert-blank', 'page-delete', 'page-extract']) all(a, !curSheet());
    all('page-move-up', !curSheet() || curSheet().page.index === 0);
    const blankFile = curSheet()?.file.blank ? curSheet().file : null;   // "Add a blank page" under the sheets: blank sets only
    for (const b of findAll('[data-add-blank]')) { b.hidden = !blankFile; b.disabled = !blankFile; }
    all('page-move-down', !curSheet() || curSheet().page.index >= curSheet().file.pages.length - 1);
    for (const b of findAll('[data-tool]')) if (b.dataset.tool !== 'select' && b.dataset.tool !== 'pan') b.disabled = !curSheet();   // drawing needs a page
    for (const a of ['zoom-in', 'zoom-out', 'fit-page', 'fit-width', 'view-ccw', 'view-cw', 'calibrate']) all(a, !curSheet());
    q('prev').disabled = ST.cur <= 0;
    q('next').disabled = ST.cur < 0 || ST.cur >= ST.sheets.length - 1;
    q('save').classList.toggle('is-dirty', anyDirty());
  }
  store.on(() => refreshAll());

  // ---- 0.8 EG.64/65/19: what the assistant tools and the Tasks tab need from the page (tasks.js, changes.js, redline.js) ----
  const sheetLabel = (s) => s.page.sheetNo || s.page.title;
  async function regionLink(m) {
    const s = sheetByKey(m.sheet), b = boundsOf(m, envOf(m));
    if (!s || !b) return null;
    const snap = regionSnapshot(await segsOf(m.sheet), b);
    return { kind: 'region', file: s.file.name, sheet: sheetLabel(s), label: (m.text || m.comment || tname(m.type)).slice(0, 120), rect: snap.rect, segs: snap.segs, at: new Date().toISOString().replace(/\.\d+Z$/, 'Z') };
  }
  /** The lines of the newer revision of a task's sheet: another open file with the same sheet number, the last one opened. */
  async function regionNow(task, m) {
    const own = sheetByKey(m.sheet);
    const cand = ST.sheets.filter((x) => x.file !== own?.file && sheetLabel(x) === task.link.sheet && x.file.name !== task.link.file);
    const hit = cand[cand.length - 1] || ST.sheets.filter((x) => x.file !== own?.file && x.file.name !== task.link.file && x.page.index === own?.page.index).pop();
    return hit ? { segs: await segsOf(hit.page.key) } : null;
  }
  // EG.64 (decided 2026-10-29): closing on a newer revision is a per-project setting, default off; a project = the set named after its first file.
  const autoCloseKey = () => 'markupcraft.autoclose:' + setName();
  const autoCloseOn = () => lsGet(autoCloseKey(), false) === true;
  const setAutoClose = (on) => lsSet(autoCloseKey(), !!on);
  async function checkAllTasks() {
    const { results, missing } = await checkTasks(store, (t, m) => regionNow(t, m).catch(() => null), {});
    const closed = closeChanged(store, results.filter((r) => !r.baseline), 'MarkupCraft');
    refreshAll();
    return { closed, missing, checked: results.length };
  }
  function applyRedlineAnswers(json) { const r = applyAnswers(store, json, 'CadCraft'); refreshAll(); return r; }

  // ---- AI assistants and scripts (0.4 part 2 X.7, session agents; agents.js on host.js's control channel): off until Settings › Assistants ----
  installAgents({ store, author: () => ST.author, styleFor, measureOf: valueOf,
    sheets: () => ST.sheets.map((x) => ({ key: x.page.key, title: x.page.title, width: x.page.width, height: x.page.height, view: x.page.view, file: x.file?.name || null })),
    current: () => curSheet()?.page.key || null,
    goTo: (key) => { const i = ST.sheets.findIndex((x) => x.page.key === key); return i >= 0 ? goTo(i) : null; },
    // 0.7 AS.5 (session assistants): the page redraws after an assistant's edit; the Markups list's own CSV and BCF
    refresh: refreshAll, exportCsv: exportListCsv, exportBcf,
    regionLink, regionNow, changes: changesBetween, exportRedline });
  const actions = installActions({ root, store, find, findAll, status, sheets: () => ST.sheets, sheetByKey, curSheet, jumpTo, getAuthor: () => ST.author, askAuthor, dl, files: () => files,
    refresh: refreshAll, regionLink, checkAll: checkAllTasks, autoClose: { get: autoCloseOn, set: setAutoClose, project: setName }, changes: changesBetween, exportRedline, exportSidecar, openSidecar, applyAnswers: applyRedlineAnswers, selection: () => [...ST.sel], boundsOf: (m) => boundsOf(m, envOf(m)), sheetOrder });

  // ---- the shell's seven modules (0.8 round 3, markup_PART_3; docs/apps/shell-modules.md § Mounting) ----
  // Calc sheets and design reasons live in the PDF's Info entry /MarkupCraftShell; a change marks the open file as unsaved.
  const shellData = { calcs: null, reasons: null, docinfo: null, issues: null };   // issues: 0.10 BK.48, the shared issue history (issues-markup.js)
  ST.shellOpened = false;
  const shellPack = () => { shellMount?.beforeSave(); return shellData.calcs || shellData.reasons || shellData.docinfo || shellData.issues ? { calcs: shellData.calcs, reasons: shellData.reasons, docinfo: shellData.docinfo, ...(shellData.issues ? { issues: shellData.issues } : {}) } : null; };
  const shellMount = mountMarkupShell({
    store, control: getHost({ app: 'markupcraft' }).control,
    sel: () => ST.sel, select: jumpTo, onSelection: (fn) => { selListeners.add(fn); return () => selListeners.delete(fn); },
    label: (m) => [tname(m.type), sheetByKey(m.sheet)?.page.title].filter(Boolean).join(', '),
    name: () => files[0]?.name || '', dirty: anyDirty,
    counts: () => ({ sheets: ST.sheets.length, layers: store.layerNames().length, files: files.length }),   // 0.9 DI.1
    shell: () => shellData,
    setShell: (key, json, quiet) => {
      if (key !== 'calcs' && key !== 'reasons' && key !== 'docinfo' && key !== 'issues') return;
      const same = JSON.stringify(shellData[key] ?? null) === JSON.stringify(json ?? null);
      if (same) return;
      shellData[key] = json ?? null;
      if (!quiet && files[0]) store.dirtySheets.add(files[0].id + ':0');
    },
  });
  // ---- drafting without sight (0.8 round 3, EG.52; assets/js/app-access.js): the markups in order (sheet by sheet), each said with its sheet, status and text; D counts them ----
  {
    const order = () => { const rank = new Map(ST.sheets.map((x, i) => [x.page.key, i])); return store.all().slice().sort((a, b) => (rank.get(a.sheet) ?? 1e9) - (rank.get(b.sheet) ?? 1e9)); };
    const sayMarkup = (m) => {
      const text = String((m.type === 'stamp' ? m.label : m.text || valueOf(m)) || '').slice(0, 160);
      return [t('access.markup.head', { type: tname(m.type), sheet: sheetByKey(m.sheet)?.page.title || '' }), m.status ? stname(m.status) : '', text, m.replies?.length ? t('access.markup.replies', { n: m.replies.length }) : '', m.author ? t('access.markup.by', { author: m.author }) : ''].filter(Boolean).join(', ') + '.';
    };
    const goAccess = () => window.ccAccess.mount({
      stage: ui.over, label: () => t('access.stage'),
      walk: () => order().map((m) => ({ id: m.id, label: sayMarkup(m) })),
      describe: () => {
        const all = store.all();
        if (!all.length) return t('access.empty', { n: ST.sheets.length });
        const by = {}; for (const m of all) by[m.status || ''] = (by[m.status || ''] || 0) + 1;
        return t('access.summary', { n: all.length, sheets: new Set(all.map((m) => m.sheet)).size, by: Object.entries(by).map(([k, v]) => v + ' ' + (k ? stname(k) : t('access.nostatus'))).join(', ') });
      },
      selection: () => { const ms = [...ST.sel].map((id) => store.get(id)).filter(Boolean); return ms.length ? t('access.selected', { n: ms.length, what: ms.slice(0, 3).map(sayMarkup).join(' ') }) : t('access.nosel'); },
      pick: (p, item) => { if (item) { jumpTo(item.id); window.ccAccess.say(t('access.selected', { n: 1, what: item.label })); } else window.ccAccess.say(t('access.nosel')); },
    });
    const goStatus = () => window.ccAccess.follow(ui.status, { max: 240 });
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }
  window.markupcraft.shellMount = shellMount;
  window.markupcraft.control = getHost({ app: 'markupcraft' }).control;   // tests and the page's console

  // ---- add-ons (0.5 AO.6, session addons; docs/ADDONS-SPEC.md §5.5): MarkupCraft's own loader and API 1.0 (manifest "addons": "own") ----
  startAddons({ store, root, find, author: () => ST.author, status, tabTo,
    currentSheet: () => (curSheet() ? { key: curSheet().page.key, title: curSheet().page.title } : null),
    sheets: () => ST.sheets.map((x) => ({ key: x.page.key, title: x.page.title })),
    selection: () => [...ST.sel], select: (ids) => { ST.sel = new Set(ids.filter((id) => store.get(id))); refreshSelection(); },
    refresh: refreshAll, setTool,
  }).catch((err) => console.warn('add-ons did not start:', err));   // i18n-ignore (developer message)

  // thumbnails follow the theme too (Model space draws sheets ink-on-dark)
  new MutationObserver(() => setTimeout(renderSheets, 0)).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the downloads to start.
  ST.leaving = false;
  window.addEventListener('beforeunload', (e) => { if (anyDirty() && !ST.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !anyDirty() || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    const k = await ask(t('unsaved.title'), t('unsaved.leave.text'), [['cancel', t('dlg.cancel')], ['discard', t('unsaved.leave.discard')], ['save', t('unsaved.save_first'), 'btn-plot']]);
    if (k === 'cancel') return;
    if (k === 'save') { await saveFiles('dirty'); if (anyDirty()) return; }
    ST.leaving = true;
    setTimeout(() => location.assign(url.href), k === 'save' ? 800 : 0);
  });

  const { syncSettingsForm } = mountSettingsPanel({
    ST, applyContrast, settings, saveSettings, status, renderAuthor, host, renderProps,
    get lsSet() { return lsSet; },
    get LS() { return LS; },
    get WEIGHTS() { return WEIGHTS; },
    get CONTRAST() { return CONTRAST; },
    get SET_DEFAULTS() { return SET_DEFAULTS; },
  });

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
    return { v: 1, markups, calibrations, sheetNames, layers: layerList(), columns: store.columns, bookmarks: f.bookmarksEdited ? f.bookmarks : null, base: baseUi.fileState(f), records: ST.fieldUi ? ST.fieldUi.stateFor(f) : [], ocr: ocrState(f.ocr), form: ST.formUi ? ST.formUi.stateFor(f) : [] };
  }
  function track(f) {
    if (f.auto) return;
    // 0.10 PERF.24: the PDF goes in the first copy once (as an extra chunk, written again only when its bytes are replaced), then only the markups, scales and names that changed
    const pdfBlob = () => { if (!f.blob || f.blobOf !== f.bytes) { f.blob = new Blob([f.bytes], { type: 'application/pdf' }); f.blobOf = f.bytes; } return f.blob; };
    f.auto = autosave.doc({ name: f.name, journal: objectJournal({
      spec: { autoArrays: 'id' }, identity: () => f,
      get: async () => ({ ...fileState(f), ...(await ST.notesUi.stateFor(f)) }),
      extras: (h) => { h.setExtra('x:pdf', pdfBlob()); },
      meta: () => ({ name: f.name, pages: f.pages.length }),
    }) });
  }
  /** After any change: copies for files with unsaved work, none for the rest (saved, or undone back to the file). */
  function syncAutosave() {
    for (const f of files) { track(f); if (fileDirty(f)) f.auto.changed(); else f.auto.clean(); }
  }
  store.on(() => syncAutosave());
  window.markupcraft.syncAutosave = syncAutosave;
  /** A recovered copy: the PDF opened as it was, then its markups, scales and sheet names put back as unsaved work. */
  async function recover(rec) {
    const chunks = rec.data && rec.data.kind === 'chunks';   // 0.10: a base and its changes, or the old {pdf, state}
    const st = chunks ? recoverState(rec, { autoArrays: 'id' }) : rec.data?.state;
    const pdf = chunks ? recoverExtras(rec).get('x:pdf') : rec.data?.pdf;
    if (!pdf || !st || st.v !== 1) throw new Error(t('recover.bad'));
    const name = rec.meta?.name || 'recovered.pdf';   // i18n-ignore (fallback file name)
    const n0 = files.length;
    await openFiles([new File([pdf], name, { type: 'application/pdf' })]);
    const f = files[n0];
    if (!f) throw new Error(t('recover.bad'));
    const key = (i) => f.pages[i]?.key;
    store.dropSheets(f.id + ':');
    store.load(st.markups.filter((m) => key(m.sheet)).map((m) => ({ ...m, sheet: key(m.sheet) })),
      Object.fromEntries(Object.entries(st.calibrations || {}).filter(([i]) => key(+i)).map(([i, c]) => [key(+i), c])),
      Object.fromEntries(Object.entries(st.sheetNames || {}).filter(([i]) => key(+i)).map(([i, nm]) => [key(+i), nm])), st.layers || [], st.columns || []);
    for (const pg of f.pages) store.dirtySheets.add(pg.key);
    await ST.notesUi.restore(f, st);   // 0.9 NOTES.1
    baseUi.restore(f, st.base);   // page-content edits (0.6 DF.14)
    ST.fieldUi?.restore(f, st.records);   // field records (0.7 LC.7)
    ST.formUi?.restore(f, st.form);   // values typed into the form (0.8)
    if (Array.isArray(st.bookmarks)) { f.bookmarks = cleanBookmarks(st.bookmarks); f.bookmarksEdited = true; }
    if (Array.isArray(st.ocr) && st.ocr.length) f.ocr = cleanOcrState(st.ocr, f.pages.length);   // text read from scans (0.7.1 71.10): no second read
    rebuildSheets();
    await goTo(ST.sheets.findIndex((s) => s.file === f));
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

  // 0.10 BK.48 (issues-markup.js): the shared issue history; kept with the file's shell data, so it travels in the marked-up PDF
  const issuesUi = mountMarkupIssues({ root, t, store, sheets: sheetList, selection: () => [...ST.sel], jumpTo, typeName: tname, sheetLabel: (key) => { const sh = sheetByKey(key); return sh ? sh.page.sheetNo || sh.page.title : ''; },
    goToKey: async (key) => { const i = ST.sheets.findIndex((x) => x.page.key === key); if (i >= 0 && i !== ST.cur) await goTo(i); },
    get: () => shellData.issues, set: (history) => { shellData.issues = history; if (files[0]) store.dirtySheets.add(files[0].id + ':0'); refreshAll(); },
    download: dl, who: () => ST.author || '', fileBase: () => String(files[0]?.name || 'markups').replace(/\.pdf$/i, '') });
  window.markupcraftIssues = issuesUi;   // tests
  ST.fieldUi = installField({
    root, store, view, find, status, busy, ask, setTool, tabTo, download: dl, setName, curSheet,
    curKey, sheetByKey, libs: loadLibs, askAuthor, getAuthor: () => ST.author, refresh: refreshAll, repaint: () => view.invalidate(true),
    goToKey: async (key, at) => {
      const i = ST.sheets.findIndex((x) => x.page.key === key);
      if (i < 0) return;
      if (i !== ST.cur) await goTo(i);
      if (at && view.page) {   // bring the pin into view when it is off the stage
        const [sx, sy] = view.toScreen(at);
        const w = ui.over.clientWidth, h = ui.over.clientHeight;
        if (sx < 40 || sy < 40 || sx > w - 40 || sy > h - 40) view.panBy(w / 2 - sx, h / 2 - sy);
      }
    },
  });
  window.markupcraft.field = ST.fieldUi;
  // the form's inputs sit over the canvases; they only take the pointer while Fill form is on
  const formLayer = el('div', { className: 'mc-form-layer', hidden: true, dataset: { formLayer: '' } });
  ui.canvases.append(formLayer);
  ST.formUi = installForms({
    layer: formLayer, view, sheet: curSheet, pdfLib, on: () => ST.tool === 'fill',
    changed: (f, pages) => {
      for (const i of pages) { const key = f.pages[i]?.key; if (!key) continue; store.dirtySheets.add(key); view.redrawPage(key); redrawThumb(key); }
      syncAutosave(); refreshToolbar(); ST.wsSoon();
    },
  });
  window.markupcraft.forms = ST.formUi;
  window.markupcraft.setPageMode = setPageMode;
  showPageMode();
  ST.textSel = installTextSelect({ view, curSheet, sheetText, status, t });
  ST.notesUi = installNotes({ root, store, view, status, dialog, files: () => files, curSheet, sheetTitle: (k) => sheetByKey(k)?.page.title || '', author: () => ST.author, tname,
    jumpTo, setTool: (x) => setTool(x), clearSelection: () => { ST.sel = new Set(); refreshToolbar(); }, saveClean });
  window.markupcraft.notes = ST.notesUi;
  ST.areaUi = installAreaCopy({ root, view, curSheet, status, t, tab: TAB, onToBoard: (c) => ST.notesUi.placeSnapshot(c),
    markupLists: (s) => store.onSheet(s.page.key).filter((m) => store.shown(m) && m.type !== 'foreign').map((m) => displayOf(m, envOf(m)).list),
    calibration: (key) => store.calibrations.get(key) || null,
    onCopied: (c) => { ST.areaClip = c; ST.pasteRun = { key: '', n: 0 }; refreshToolbar(); } });
  window.markupcraft.areaCopy = ST.areaUi;
  ST.ocrUi = installOcr({
    root, t, el, dialog, status, libs: loadLibs, files: () => files, curSheet, locale: uiLocale,
    // a page read: its words go with the file (never into the markup store); the file has unsaved work until Save writes them
    onPage: (f, index, entry) => {
      (f.ocr ||= new Map()).set(index, entry);
      const key = f.id + ':' + index;
      textCache.delete(key);
      ST.textSel?.forget(key);
      if (entry.pdf) store.dirtySheets.add(key);
      syncAutosave(); refreshToolbar(); view.invalidate();
    },
    onResult: (f, index, what) => {
      const pages = window.markupcraftProblems?.state.ocr;
      if (!pages) return;
      const key = f.pages[index]?.key;
      if (!key) return;
      if (what === 'ok') delete pages[key]; else pages[key] = what;
      ST.problemsPush();
    },
  });
  window.markupcraft.ocr = ST.ocrUi;
  // ---- Problems (0.8 P.6; docs/0.8-PROBLEMS-SPEC.md § 10): pages pdf.js could not draw, pictures it could not draw, pages the text reader
  // failed on or found no words on — kept per sheet (page.key) and pushed to the shell's ⚠ panel (manifest "problems"). Accepting is for
  // this session only (the adapter has no saveAccepted: a PDF has no place for it). Markers are on the page (pageMarkers, 0.8 round 3).
  ST.problemsPush = () => {};
  if (document.getElementById('cc-problems')) {
    const state = { render: {}, ocr: {} };
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      const src = P.source({ id: 'markupcraft.pages', kind: 'import', label: t('problems.src.pages') });
      const tasksSrc = P.source({ id: 'markupcraft.tasks', kind: 'check', label: t('problems.src.tasks') });
      const pushTasks = () => tasksSrc.set(taskProblems(store.all(), { titleOf: (k) => sheetByKey(k)?.page.title || k }, { t }));
      store.on(pushTasks); pushTasks();
      ST.problemsPush = () => {
        const keys = new Set(ST.sheets.map((s) => s.page.key));
        for (const part of [state.render, state.ocr]) for (const k of Object.keys(part)) if (!keys.has(k)) delete part[k];
        src.set(pageProblems({ ...state, titleOf: (k) => sheetByKey(k)?.page.title || k }, { t }));
      };
      P.adapter({
        t,
        file: () => files[0]?.name || '',
        select: (p) => { const i = ST.sheets.findIndex((s) => s.page.key === p.about[0]?.id); if (i >= 0) goTo(i); },
      });
      ST.problemsPush();
      // ⚠ over the page: on the markup a task is about, else at the page's corner; follows zoom, pan and the open sheet
      P.markers(pageMarkers({ view, stage: ui.stage, canvas: ui.base, curKey, boundsOfId: (id) => { const m = store.get(id); return m ? boundsOf(m, envOf(m)) : null; },
        viewOf: (key) => sheetByKey(key)?.page.view || null }));
      store.on(() => P.redraw?.());
      P.registerTools?.(getHost({ app: 'markupcraft' }).control);   // the assistants' problems tools (problems-08-mounts.md)
    };
    window.markupcraftProblems = { state, push: () => ST.problemsPush() };   // for tests (tools/problems-test/browser-markupcraft.mjs)
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  }
  renderAuthor();
  rebuildSheets();
  refreshAll();
  renderLayers();
  setTool('select');
  start();
  mountLayouts();
  void PX_PER_PT; void BOX_TYPES;
}

const root = document.querySelector('[data-markupcraft]');
if (root) init(root);
