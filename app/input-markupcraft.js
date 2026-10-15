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
 * STYLES: MarkupCraft (today's toolbar and keys) and PDF review (a menu bar File, Edit, View, Document, Markup, Measure,
 * Window over a row of review tools; tool keys set out the way PDF review programs set theirs, measurements on
 * Alt+Shift). Named for a way of working, never for a product.
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

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['file', 'pages', 'tools', 'draw', 'revise', 'annotate', 'measure', 'edit', 'view', 'panels', 'app'];

// MarkupCraft's own keys = the registry's (what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));
const CTRL_KEYS = Object.fromEntries(Object.entries(DEFAULT_KEYS).filter(([, k]) => k.every((x) => /^(Ctrl|F\d|Page)/.test(x))));

const m = (label, items) => ({ label: 'input.m.' + label, items });

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
      m('edit', ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.duplicate', 'edit.delete', '-', 'edit.select-all', 'edit.select-none', '-', 'edit.find']),
      m('view', ['view.prev', 'view.next', '-', 'view.zoom-in', 'view.zoom-out', 'view.fit-page', 'view.fit-width', '-', 'view.turn-ccw', 'view.turn-cw', '-', 'tool.pan']),
      m('document', ['pages.rotate-cw', 'pages.rotate-ccw', 'pages.move-up', 'pages.move-down', '-', 'pages.insert-pdf', 'pages.insert-blank', 'pages.delete', 'pages.extract', '-', 'pages.slip-sheet', 'view.takeoff']),
      m('markup', ['tool.select', '-', 'tool.pen', 'tool.highlight', 'tool.line', 'tool.arrow', 'tool.arc', 'tool.rect', 'tool.ellipse', 'tool.polyline', 'tool.polygon', '-', 'tool.cloudrect', 'tool.cloud', '-', 'tool.callout', 'tool.text', 'tool.note', 'tool.stamp']),
      m('measure', ['tool.calibrate', '-', 'tool.measure', 'tool.angle', 'tool.area', 'tool.count']),
      m('window', ['panel.props', 'panel.list', 'panel.punch', 'panel.chest', 'panel.compare']),
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
};
export const STYLE_ORDER = ['markupcraft', 'review'];

/** IP.4: each style's family ("use this style in every app"). */
export const FAMILY = { markupcraft: 'own', review: 'menus' };
export const STORE = 'markupcraft.input';

/**
 * The page side the shell asks for (app-input-ui.js). markupcraft.js sets window.ccInputHooks = { status, busy } (typing a
 * text box keeps every letter). A drawing in progress keeps its digits (typed lengths open the sketch box).
 */
export function hooks() {
  return {
    keepKey: (combo, plain) => plain && /^[0-9.]$/.test(combo),
    mouse: (mm) => setMouse(mm),
  };
}
