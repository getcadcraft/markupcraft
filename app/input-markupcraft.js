/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-markupcraft.js — MarkupCraft's command registry for the shell's input engine (0.5 track IP.3; engine
 * assets/js/app-input.js + app-input-ui.js, map docs/apps/app-input.md; manifest "input": "input-markupcraft.js").
 * DOM-free data, plus hooks() which runs only on the page.
 *
 * COMMANDS: every toolbar command (ui.inc $__tools, File › Pages, Edit › More), the sheet bar's navigation, zoom and view
 * turns, the right panel's tabs, Find and the hand-off to TakeoffCraft. Each runs by clicking the app's own button
 * ([data-tool] buttons set the tool; [data-act] buttons go through markupcraft.js act()).
 *   defKeys  MarkupCraft's own keys (markupcraft.js KEYS and its keydown handler): the MarkupCraft style
 * Labels are text keys `input.cmd.<id>` in lang/en.json.
 *
 * STYLES: MarkupCraft (today's toolbar and keys), PDF review (a menu bar File, Edit, View, Document, Markup, Measure,
 * Review, Window over a row of review tools; tool keys set out the way PDF review programs set theirs, measurements on
 * Alt+Shift) and Ribbon (0.7 WS.10: tabs Mark up, Measure, Edit, Review, Pages, View with RIBBON-COMPACT sizes; the workspace
 * layouts build their ribbon from it). Named for a way of working, never for a product.
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, sel, more = {}) => ({ id, group, icon, sel, label: 'input.cmd.' + id, defKeys: [], ...more });
const A = (act) => `.mc-tools [data-act="${act}"]`;
const TL = (tool) => `.mc-tools [data-tool="${tool}"]`;
const N = (act) => `.mc-nav [data-act="${act}"]`;

export const COMMANDS = [
  C('file.new', 'file', 'bi-file-plus', A('new'), { defKeys: ['Ctrl+N'] }),
  C('file.open', 'file', 'bi-folder2-open', A('open'), { defKeys: ['Ctrl+O'] }),
  C('file.save', 'file', 'bi-download', A('save'), { defKeys: ['Ctrl+S'] }),
  C('file.close', 'file', 'bi-x-square', A('close')),
  C('file.print', 'file', 'bi-printer', A('print-pages'), { defKeys: ['Ctrl+P'] }),
  C('file.save-flat', 'file', 'bi-file-earmark-lock', A('save-flat')),
  C('pages.slip-sheet', 'pages', 'bi-layers', A('slip-sheet')),
  C('pages.rotate-cw', 'pages', 'bi-arrow-clockwise', A('page-rotate-cw')),
  C('pages.rotate-ccw', 'pages', 'bi-arrow-counterclockwise', A('page-rotate-ccw')),
  C('pages.move-up', 'pages', 'bi-arrow-up', A('page-move-up')),
  C('pages.move-down', 'pages', 'bi-arrow-down', A('page-move-down')),
  C('pages.insert-pdf', 'pages', 'bi-file-earmark-plus', A('page-insert-pdf')),
  C('pages.insert-blank', 'pages', 'bi-file-earmark', A('page-insert-blank')),
  C('pages.delete', 'pages', 'bi-trash', A('page-delete')),
  C('pages.extract', 'pages', 'bi-box-arrow-up-right', A('page-extract')),

  C('tool.select', 'tools', 'bi-cursor', TL('select'), { defKeys: ['V'] }),
  C('tool.pan', 'tools', 'bi-hand-index-thumb', TL('pan'), { defKeys: ['H'] }),
  C('tool.content', 'tools', 'bi-vector-pen', TL('content'), { defKeys: ['B'] }),   // 0.6 DF.14
  C('tool.pen', 'draw', 'bi-pencil', TL('pen'), { defKeys: ['P'] }),
  C('tool.highlight', 'draw', 'bi-highlighter', TL('highlight'), { defKeys: ['I'] }),
  C('tool.line', 'draw', 'bi-slash-lg', TL('line'), { defKeys: ['L'] }),
  C('tool.arrow', 'draw', 'bi-arrow-up-right', TL('arrow'), { defKeys: ['A'] }),
  C('tool.arc', 'draw', 'bi-bezier2', TL('arc'), { defKeys: ['O'] }),
  C('tool.rect', 'draw', 'bi-square', TL('rect'), { defKeys: ['R'] }),
  C('tool.ellipse', 'draw', 'bi-circle', TL('ellipse'), { defKeys: ['E'] }),
  C('tool.polyline', 'draw', 'bi-activity', TL('polyline'), { defKeys: ['Y'] }),
  C('tool.polygon', 'draw', 'bi-pentagon', TL('polygon'), { defKeys: ['G'] }),
  C('tool.cloudrect', 'revise', 'bi-cloud', TL('cloudrect'), { defKeys: ['C'] }),
  C('tool.cloud', 'revise', 'bi-cloud-haze2', TL('cloud'), { defKeys: ['Shift+C'] }),
  C('tool.callout', 'annotate', 'bi-chat-left-text', TL('callout'), { defKeys: ['K'] }),
  C('tool.text', 'annotate', 'bi-fonts', TL('text'), { defKeys: ['T'] }),
  C('tool.note', 'annotate', 'bi-sticky', TL('note'), { defKeys: ['N'] }),
  C('tool.stamp', 'annotate', 'bi-patch-check', TL('stamp'), { defKeys: ['S'] }),
  C('tool.calibrate', 'measure', 'bi-rulers', TL('calibrate')),
  C('tool.measure', 'measure', 'bi-arrows', TL('measure'), { defKeys: ['M'] }),
  C('tool.angle', 'measure', 'bi-triangle', TL('angle'), { defKeys: ['X'] }),
  C('tool.area', 'measure', 'bi-bounding-box', TL('area'), { defKeys: ['Q'] }),
  C('tool.count', 'measure', 'bi-hash', TL('count'), { defKeys: ['U'] }),

  C('edit.undo', 'edit', 'bi-arrow-counterclockwise', A('undo'), { defKeys: ['Ctrl+Z'] }),
  C('edit.redo', 'edit', 'bi-arrow-clockwise', A('redo'), { defKeys: ['Ctrl+Y', 'Ctrl+Shift+Z'] }),
  C('edit.copy', 'edit', 'bi-copy', A('copy'), { defKeys: ['Ctrl+C'] }),
  C('edit.paste', 'edit', 'bi-clipboard-plus', A('paste'), { defKeys: ['Ctrl+V'] }),
  C('edit.cut', 'edit', 'bi-scissors', A('cut'), { defKeys: ['Ctrl+X'] }),
  C('edit.paste-in-place', 'edit', 'bi-clipboard-check', A('paste-in-place'), { defKeys: ['Ctrl+Shift+V'] }),
  C('edit.paste-picture', 'edit', 'bi-image', A('paste-picture')),   // 0.6 DF.6 (Ctrl+V takes a picture too)
  C('edit.duplicate', 'edit', 'bi-files', A('duplicate'), { defKeys: ['Ctrl+D'] }),
  C('edit.delete', 'edit', 'bi-trash', A('delete'), { defKeys: ['Delete'], fixed: true }),
  C('edit.select-all', 'edit', 'bi-check2-all', A('select-all'), { defKeys: ['Ctrl+A'] }),
  C('edit.select-none', 'edit', 'bi-x-square', A('select-none'), { defKeys: ['Escape'], fixed: true }),
  C('edit.find', 'edit', 'bi-search', '[data-find] > summary', { defKeys: ['Ctrl+F'] }),

  C('view.prev', 'view', 'bi-chevron-left', N('prev'), { defKeys: ['PageUp'] }),
  C('view.next', 'view', 'bi-chevron-right', N('next'), { defKeys: ['PageDown'] }),
  C('view.zoom-in', 'view', 'bi-zoom-in', N('zoom-in')),
  C('view.zoom-out', 'view', 'bi-zoom-out', N('zoom-out')),
  C('view.fit-page', 'view', 'bi-arrows-fullscreen', N('fit-page'), { defKeys: ['Ctrl+0'] }),
  C('view.fit-width', 'view', 'bi-arrows-expand', N('fit-width'), { defKeys: ['Ctrl+9'] }),
  C('view.turn-ccw', 'view', 'bi-arrow-counterclockwise', N('view-ccw')),
  C('view.turn-cw', 'view', 'bi-arrow-clockwise', N('view-cw')),
  C('view.takeoff', 'view', 'bi-box-arrow-up-right', '[data-handoff-pdf]', { optional: true }),

  C('panel.props', 'panels', 'bi-card-text', '[data-tab="props"]'),
  C('panel.list', 'panels', 'bi-list-ul', '[data-tab="list"]'),
  C('panel.punch', 'panels', 'bi-check2-square', '[data-tab="punch"]'),
  C('panel.chest', 'panels', 'bi-box-seam', '[data-tab="chest"]'),
  C('panel.compare', 'panels', 'bi-layout-split', '[data-tab="compare"]'),
  C('panel.field', 'panels', 'bi-clipboard2-check', '[data-tab="field"]'),   // 0.7 WS.10

  // 0.7 WS.10: the right panel's own buttons, so the Ribbon style (and the workspace layouts) reach them; a button in a panel
  // tab that is not open still runs (hooks: the tab opens first)
  C('markups.csv', 'review', 'bi-filetype-csv', '[data-act="list-csv"]'),
  C('markups.xlsx', 'review', 'bi-file-earmark-spreadsheet', '[data-act="list-xlsx"]'),
  C('markups.summary', 'review', 'bi-file-earmark-pdf', '[data-act="list-pdf"]'),
  C('markups.bcf', 'review', 'bi-box-arrow-up', '[data-act="list-bcf"]'),
  C('markups.bcf-import', 'review', 'bi-box-arrow-in-down', '[data-act="list-bcf-import"]'),
  C('markups.legend', 'review', 'bi-list-ul', '[data-act="legend-add"]'),
  C('punch.add', 'review', 'bi-list-check', '[data-act="punch-add"]'),
  C('punch.csv', 'review', 'bi-filetype-csv', '[data-act="punch-csv"]'),
  C('chest.save', 'review', 'bi-plus-square', '[data-act="chest-save"]'),
  C('chest.import', 'review', 'bi-box-arrow-in-down', '[data-act="chest-import"]'),
  C('chest.export', 'review', 'bi-box-arrow-up', '[data-act="chest-export"]'),
  C('compare.start', 'review', 'bi-layers-half', '[data-act="compare"]'),
  C('compare.stop', 'review', 'bi-x-circle', '[data-act="compare-stop"]'),

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['file', 'pages', 'tools', 'draw', 'revise', 'annotate', 'measure', 'edit', 'view', 'panels', 'review', 'app'];

// MarkupCraft's own keys = the registry's (what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));
const CTRL_KEYS = Object.fromEntries(Object.entries(DEFAULT_KEYS).filter(([, k]) => k.every((x) => /^(Ctrl|F\d|Page)/.test(x))));

const m = (label, items) => ({ label: 'input.m.' + label, items });
const REVIEW_MENU = ['markups.csv', 'markups.xlsx', 'markups.summary', '-', 'markups.bcf', 'markups.bcf-import', '-', 'markups.legend', '-', 'punch.add', 'punch.csv',
  '-', 'chest.save', 'chest.import', 'chest.export', '-', 'compare.start', 'compare.stop'];

// 0.7 WS.10 the Ribbon style: tabs named for the work, RIBBON-COMPACT sizes (docs/apps/app-input.md): a panel is [name, items];
// lg = icon over label, sm = three to a stack. Labels on the ribbon are the toolbar's short words (input.lbl.ribbon.* where new).
const lg = (id) => ({ id, size: 'lg' });
const sm = (id) => ({ id, size: 'sm' });
const rtab = (label, panels) => ({ label: 'input.m.' + label, panels: panels.map(([l, items]) => ({ label: 'input.m.' + l, items })) });
const RIBBON_TABS = [
  rtab('r-markup', [
    ['r-select', [lg('tool.select'), sm('tool.pan'), sm('tool.content')]],
    ['r-draw', [lg('tool.pen'), lg('tool.highlight'), sm('tool.line'), sm('tool.arrow'), sm('tool.arc'), sm('tool.rect'), sm('tool.ellipse'), sm('tool.polyline'), sm('tool.polygon')]],
    ['r-revise', [lg('tool.cloudrect'), lg('tool.cloud')]],
    ['r-annotate', [lg('tool.callout'), lg('tool.text'), sm('tool.note'), sm('tool.stamp')]],
  ]),
  rtab('r-measure', [
    ['r-scale', [lg('tool.calibrate')]],
    ['r-measure', [lg('tool.measure'), lg('tool.area'), sm('tool.angle'), sm('tool.count')]],
  ]),
  rtab('r-edit', [
    ['r-clipboard', [lg('edit.paste'), sm('edit.cut'), sm('edit.copy'), sm('edit.duplicate'), sm('edit.paste-in-place'), sm('edit.paste-picture'), sm('edit.delete')]],
    ['r-selection', [sm('edit.select-all'), sm('edit.select-none'), sm('edit.find')]],
  ]),
  rtab('r-review', [
    ['r-markups', [lg('panel.list'), sm('markups.csv'), sm('markups.xlsx'), sm('markups.summary'), sm('markups.legend')]],
    ['r-issues', [lg('markups.bcf'), sm('markups.bcf-import')]],
    ['r-punch', [lg('panel.punch'), sm('punch.add'), sm('punch.csv')]],
    ['r-field', [lg('panel.field')]],
    ['r-chest', [lg('panel.chest'), sm('chest.save'), sm('chest.import'), sm('chest.export')]],
    ['r-compare', [lg('panel.compare'), sm('compare.start'), sm('compare.stop')]],
  ]),
  rtab('r-pages', [
    ['r-output', [lg('file.print'), sm('file.save-flat'), sm('pages.slip-sheet')]],
    ['r-arrange', [sm('pages.rotate-cw'), sm('pages.rotate-ccw'), sm('pages.move-up'), sm('pages.move-down')]],
    ['r-insert', [sm('pages.insert-pdf'), sm('pages.insert-blank'), sm('pages.delete'), sm('pages.extract')]],
    ['r-handoff', [lg('view.takeoff')]],
  ]),
  rtab('r-view', [
    ['r-sheets', [lg('view.prev'), lg('view.next')]],
    ['r-zoom', [sm('view.zoom-in'), sm('view.zoom-out'), sm('view.fit-page'), sm('view.fit-width')]],
    ['r-turn', [sm('view.turn-ccw'), sm('view.turn-cw')]],
    ['r-panels', [lg('panel.props')]],
  ]),
];
const L = (k) => 'input.lbl.ribbon.' + k;
const RIBBON_LABELS = {
  'tool.select': 'tool.select', 'tool.pan': 'tool.pan', 'tool.content': 'tool.content', 'tool.pen': 'tool.pen', 'tool.highlight': 'tool.highlight',
  'tool.line': 'tool.line', 'tool.arrow': 'tool.arrow', 'tool.arc': 'tool.arc', 'tool.rect': 'tool.rect', 'tool.ellipse': 'tool.ellipse',
  'tool.polyline': 'tool.polyline', 'tool.polygon': 'tool.polygon', 'tool.cloudrect': 'tool.cloudrect', 'tool.cloud': 'tool.cloud',
  'tool.callout': 'tool.callout', 'tool.text': 'tool.text', 'tool.note': 'tool.note', 'tool.stamp': 'tool.stamp', 'tool.calibrate': 'tool.calibrate',
  'tool.measure': 'tool.measure', 'tool.angle': 'tool.angle', 'tool.area': 'tool.area', 'tool.count': 'tool.count',
  'edit.paste': 'tool.paste', 'edit.cut': 'menu.cut', 'edit.copy': 'tool.copy', 'edit.duplicate': 'menu.duplicate', 'edit.paste-in-place': 'menu.paste_in_place',
  'edit.paste-picture': L('picture'), 'edit.delete': 'menu.delete', 'edit.select-all': 'menu.select_all', 'edit.select-none': 'menu.select_none', 'edit.find': L('find'),
  'panel.list': 'tab.list', 'panel.punch': 'tab.punch', 'panel.field': 'tab.field', 'panel.chest': 'tab.chest', 'panel.compare': 'tab.compare', 'panel.props': 'tab.props',
  'markups.csv': 'list.csv', 'markups.xlsx': 'list.xlsx', 'markups.summary': L('summary'), 'markups.legend': 'legend.add', 'markups.bcf': L('bcf'), 'markups.bcf-import': 'bcfin.button',
  'punch.add': L('punch-add'), 'punch.csv': 'punch.csv', 'chest.save': L('chest-save'), 'chest.import': 'chest.import', 'chest.export': 'chest.export',
  'compare.start': 'compare.start', 'compare.stop': L('compare-stop'),
  'file.print': 'tool.print', 'file.save-flat': L('flatten'), 'pages.slip-sheet': L('slip'), 'pages.rotate-cw': L('rotate-cw'), 'pages.rotate-ccw': L('rotate-ccw'),
  'pages.move-up': L('move-up'), 'pages.move-down': L('move-down'), 'pages.insert-pdf': L('insert-pdf'), 'pages.insert-blank': L('insert-blank'),
  'pages.delete': L('delete'), 'pages.extract': L('extract'), 'view.takeoff': L('takeoff'),
  'view.prev': L('prev'), 'view.next': L('next'), 'view.zoom-in': 'nav.zoom_in', 'view.zoom-out': 'nav.zoom_out', 'view.fit-page': 'nav.fit_page', 'view.fit-width': 'nav.fit_width',
  'view.turn-ccw': L('turn-ccw'), 'view.turn-cw': L('turn-cw'),
};

export const STYLES = {
  markupcraft: {
    format: 'cadcraft-input', version: 1, id: 'markupcraft', name: 'input.style.markupcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },
  },
  review: {
    format: 'cadcraft-input', version: 1, id: 'review', name: 'input.style.review', builtin: true, layout: 'menubar',
    menus: [
      m('file', ['file.new', 'file.open', '-', 'file.save', 'file.save-flat', 'file.print', '-', 'file.close', '-', 'app.settings', 'app.palette', 'app.help']),
      m('edit', ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.paste-picture', 'edit.duplicate', 'edit.delete', '-', 'edit.select-all', 'edit.select-none', '-', 'edit.find']),
      m('view', ['view.prev', 'view.next', '-', 'view.zoom-in', 'view.zoom-out', 'view.fit-page', 'view.fit-width', '-', 'view.turn-ccw', 'view.turn-cw', '-', 'tool.pan']),
      m('document', ['pages.rotate-cw', 'pages.rotate-ccw', 'pages.move-up', 'pages.move-down', '-', 'pages.insert-pdf', 'pages.insert-blank', 'pages.delete', 'pages.extract', '-', 'pages.slip-sheet', 'view.takeoff']),
      m('markup', ['tool.select', 'tool.content', '-', 'tool.pen', 'tool.highlight', 'tool.line', 'tool.arrow', 'tool.arc', 'tool.rect', 'tool.ellipse', 'tool.polyline', 'tool.polygon', '-', 'tool.cloudrect', 'tool.cloud', '-', 'tool.callout', 'tool.text', 'tool.note', 'tool.stamp']),
      m('measure', ['tool.calibrate', '-', 'tool.measure', 'tool.angle', 'tool.area', 'tool.count']),
      m('review', REVIEW_MENU),
      m('window', ['panel.props', 'panel.list', 'panel.punch', 'panel.field', 'panel.chest', 'panel.compare']),
    ],
    bar: ['tool.select', 'tool.pan', '-', 'tool.pen', 'tool.highlight', 'tool.line', 'tool.arrow', 'tool.rect', 'tool.ellipse', 'tool.polygon', 'tool.cloudrect', '-', 'tool.callout', 'tool.text', 'tool.note', 'tool.stamp', '-', 'tool.calibrate', 'tool.measure', 'tool.area', 'tool.count', '-', 'edit.undo', 'edit.redo'],
    labels: { 'panel.list': 'input.lbl.review.list', 'panel.chest': 'input.lbl.review.chest', 'tool.cloudrect': 'input.lbl.review.cloud' },
    keys: {
      ...CTRL_KEYS,
      'tool.select': ['V'], 'tool.pan': ['Shift+V'], 'tool.pen': ['P'], 'tool.highlight': ['H'], 'tool.line': ['L'], 'tool.arrow': ['A'],
      'tool.arc': ['Shift+A'], 'tool.rect': ['R'], 'tool.ellipse': ['E'], 'tool.polyline': ['Shift+N'], 'tool.polygon': ['N'],
      'tool.cloudrect': ['C'], 'tool.cloud': ['Shift+C'], 'tool.callout': ['Q'], 'tool.text': ['T'], 'tool.note': ['Shift+T'], 'tool.stamp': ['S'],
      'tool.calibrate': ['Alt+Shift+K'], 'tool.measure': ['Alt+Shift+L'], 'tool.angle': ['Alt+Shift+G'], 'tool.area': ['Alt+Shift+A'], 'tool.count': ['Alt+Shift+C'],
      'panel.list': ['Alt+L'],
    },
    // a right click is the review programs' context click: the middle button pans (Space and drag still pans)
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: null },
  },
  ribbon: {
    format: 'cadcraft-input', version: 1, id: 'ribbon', name: 'input.style.ribbon', builtin: true, layout: 'ribbon',
    menus: [m('file', ['file.new', 'file.open', 'file.save', '-', 'file.close'])],
    quick: ['file.open', 'file.save', 'edit.undo', 'edit.redo'],
    tabs: RIBBON_TABS,
    labels: RIBBON_LABELS,
    keys: { ...DEFAULT_KEYS },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },
  },
};
export const STYLE_ORDER = ['markupcraft', 'review', 'ribbon'];

/** IP.4: each style's family ("use this style in every app"). */
export const FAMILY = { markupcraft: 'own', review: 'menus', ribbon: 'ribbon' };
export const STORE = 'markupcraft.input';

/**
 * The page side the shell asks for (app-input-ui.js). markupcraft.js sets window.ccInputHooks = { status, busy } (typing a
 * text box keeps every letter). A drawing in progress keeps its digits (typed lengths open the sketch box).
 */
export function hooks({ root } = {}) {
  const target = (c) => (c?.sel ? (root && root.querySelector(c.sel)) || document.querySelector(c.sel) : null);
  return {
    keepKey: (combo, plain) => plain && /^[0-9.]$/.test(combo),
    mouse: (mm) => setMouse(mm),
    // 0.7 WS.10: a right-panel button whose tab is not open is still there to use: the tab opens first (prepare)
    why: (c, b, generic) => (inClosedTab(b) ? '' : generic(c, b)),
    prepare: (c) => { openTabOf(target(c)); return ''; },
  };
}

/**
 * 0.7 WS.10: is this button hidden only because its right-panel tab is not the open one? (the pane is [hidden], nothing inside it
 * is, and the button itself is not off) — the Ribbon style and the workspace adapter treat it as ready, and open the tab first.
 */
export function inClosedTab(b) {
  const pane = b?.closest?.('[data-pane]');
  if (!pane || !pane.hidden || b.disabled || b.hidden || b.getAttribute('aria-disabled') === 'true') return false;
  for (let q = b.parentElement; q && q !== pane; q = q.parentElement) if (q.hidden) return false;
  return true;
}
/** Opens the right-panel tab a button sits in (its own tab button; the app's tabTo shows the pane). */
export function openTabOf(b) {
  const pane = b?.closest?.('[data-pane]');
  if (!pane?.hidden) return;
  const doc = pane.ownerDocument;
  (doc.querySelector('[data-tab="' + pane.dataset.pane + '"]') || document.querySelector('[data-tab="' + pane.dataset.pane + '"]'))?.click();
}
