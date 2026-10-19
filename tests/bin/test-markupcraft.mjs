#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * MarkupCraft without a browser: runs the DOM-free modules of the dev build
 * (public_html/assets/apps/markupcraft/dev) in Node against the real plan set and PDFs made here.
 *
 *   node bin/test-markupcraft.mjs [--build dev|<x.y>] [--keep] [--verbose]
 *
 * Covers: Helvetica metrics + WinAnsi, lengths and scales, the undoable store, every markup's display
 * list, grips/moves/hit-testing, sheet-compare mixing and alignment, the tool chest (untrusted
 * imports), the clipboard (clip.js: copy, paste, paste in place, duplicate, cut as one undo step, a tampered
 * cross-tab copy), CSV (formula-safe), and the PDF round trip: write every markup type into a copy of
 * the public fixture "fixtures/pdf/kitchen-plan-sheet.pdf" with the vendored pdf-lib, re-read it with pdf.js (subtypes,
 * rects, /T, /M, /Contents, appearance streams — and that they actually paint), check /NM, /Subj,
 * /IC, /BE, /CL, /Measure, /VP with pdf-lib, reopen → markups editable and equal, save again → no
 * duplicates. Also: a file holding another program's annotations (plain Square + review state →
 * editable; Highlight, Stamp, Link → kept read-only and drawn from a cleaned copy), rotated pages,
 * page labels → sheet numbers, and a 60-sheet set.
 * One-time setup: (cd tools/markupcraft-test && npm install)   (pdf.js legacy build for Node)
 * The client drawing is read in place; nothing is copied into the repo. --keep leaves the written
 * PDFs in tmp/markupcraft-test/ to open in other viewers.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const VERBOSE = args.includes('--verbose');
const KEEP = args.includes('--keep');
const BUILD = args.includes('--build') ? args[args.indexOf('--build') + 1] : 'dev';
const APP = path.join(ROOT, 'public_html/assets/apps/markupcraft', BUILD);
const PLAN = path.join(ROOT, 'fixtures/pdf/kitchen-plan-sheet.pdf');   // public fixture (0.4 item 0.7; fixtures/facts.json pdf)
const TOOLS = path.join(ROOT, 'tools/markupcraft-test/node_modules');
if (!fs.existsSync(path.join(TOOLS, 'pdfjs-dist'))) { console.error('Run (cd tools/markupcraft-test && npm install) first.'); process.exit(2); }
if (!fs.existsSync(PLAN)) { console.error('Missing test drawing: ' + PLAN); process.exit(2); }

const imp = (f) => import(pathToFileURL(path.join(APP, f)).href);
const pdfjs = await import(pathToFileURL(path.join(TOOLS, 'pdfjs-dist/legacy/build/pdf.mjs')).href);
const PDFLib = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/pdf-lib/current/pdf-lib.esm.js')).href);
const { createCanvas } = await import(pathToFileURL(path.join(TOOLS, '@napi-rs/canvas/index.js')).href).catch(async () => import('@napi-rs/canvas'));
const font = await imp('font.js');
const units = await imp('units.js');
const model = await imp('model.js');
const shapesM = await imp('shapes.js');
const geom = await imp('geom.js');
const cmpM = await imp('compare.js');
const chestM = await imp('chest.js');
const csvM = await imp('csv.js');
const writer = await imp('pdf-write.js');
const reader = await imp('pdf-read.js');
const titleM = await imp('titleblock.js');
const bcfM = await imp('bcf.js');
const clipM = await imp('clip.js');
const pagesM = await imp('pages.js');
const slipM = await imp('slip.js');
const findM = await imp('textsearch.js');
const arcsM = await imp('arcs.js');
const picM = await imp('imagestamp.js');
const sumM = await imp('summary.js');
const xlsxM = await imp('xlsx.js');
const bcfIn = await imp('bcf-read.js');
const holesM = await imp('holes.js');
const linkM = await imp('link.js');
const spacesM = await imp('spaces.js');
const sketchM = await imp('sketch.js');
const colsM = await imp('columns.js');
const vdM = await imp('vecdiff.js');
const legM = await imp('legend.js');
const bmM = await imp('bookmarks.js');
const blankM = await imp('blank.js');
const i18n = await imp('i18n.js');
const EN = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
i18n.init({ locale: 'en', strings: EN });   // the language file (0.4 item 0.5): every module's words come from it

const STD_FONTS = path.join(TOOLS, 'pdfjs-dist/standard_fonts/');
const OUTDIR = path.join(KEEP ? path.join(ROOT, 'tmp') : os.tmpdir(), 'markupcraft-test');
fs.mkdirSync(OUTDIR, { recursive: true });
const docOptions = { standardFontDataUrl: STD_FONTS };
const env = { pdfjs, pdfLib: PDFLib, docOptions };

let pass = 0, fail = 0;
const failures = [];
function ok(c, label, detail) {
  if (c) { pass++; if (VERBOSE) console.log('  ok   ' + label); }
  else { fail++; failures.push(label); console.log('  FAIL ' + label + (detail !== undefined ? '  → ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)) : '')); }
}
const section = (s) => console.log('\n== ' + s);
const near = (a, b, e = 1e-6) => Math.abs(a - b) <= e;
const nearArr = (a, b, e = 1e-3) => Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => Array.isArray(v) ? nearArr(v, b[i], e) : near(v, b[i], e));
const quiet = async (fn) => { const w = console.warn, l = console.log; console.warn = () => {}; console.log = (...a) => { if (!String(a[0]).startsWith('Warning')) l(...a); }; try { return await fn(); } finally { console.warn = w; console.log = l; } };
const open = (bytes, name = 'x.pdf', fileId = 'f1') => quiet(() => reader.openPdf(env, bytes, { fileId, name }));
const getDoc = (bytes) => quiet(() => pdfjs.getDocument({ data: bytes.slice(), isEvalSupported: false, enableScripting: false, standardFontDataUrl: STD_FONTS }).promise);

// ------------------------------------------------------------------------------------------------
section('Text metrics and WinAnsi');
ok(near(font.textWidth('Hello', 10), 22.78), 'Helvetica width of "Hello" at 10 pt', font.textWidth('Hello', 10));
ok(font.textWidth('APPROVED', 10, true) > font.textWidth('APPROVED', 10), 'bold is wider');
const wrapped = font.wrapText('Move prep sink six inches east and coordinate with plumbing', 12, 120);
ok(wrapped.length > 1 && wrapped.every((l) => font.textWidth(l, 12) <= 120.01), 'wraps to the width', wrapped);
ok(font.wrapText('a\nb', 12, 0).length === 2, 'hard line breaks kept');
ok(font.wrapText('Supercalifragilisticexpialidocious', 12, 40).every((l) => font.textWidth(l, 12) <= 40.01), 'a long word breaks by character');
const wa = font.winAnsiHex('Café – “ok” ✓');
ok(wa.hex === '<436166e9209620936f6b94203f>' && wa.missing === 1, 'WinAnsi: é, en dash, curly quotes; ✓ → ?', wa);

// ------------------------------------------------------------------------------------------------
section('Lengths and scales');
const ft = (s, u) => { const v = units.parseLength(s, u); return v === null ? null : +(v / 304.8).toFixed(6); };
ok(ft(`24'-0"`) === 24, `24'-0"`);
ok(ft(`12' 6 1/2"`) === +(12 + 6.5 / 12).toFixed(6), `12' 6 1/2"`);
ok(ft(`6"`) === 0.5 && ft(`1/2"`) === +(0.5 / 12).toFixed(6), '6" and 1/2"');
ok(ft(`12.5'`) === 12.5 && ft('12.5 ft') === 12.5 && ft('3 ft 6 in') === 3.5, "12.5', 12.5 ft, 3 ft 6 in");
ok(ft(`12'6`) === 12.5, "12'6 (no inch mark)");
// 0.6 DF.3: arithmetic in a typed length (lencalc.js, CadCraft's parser copied byte for byte)
ok(near(units.parseLength(`12'6" + 3/4"`), 3829.05, 1e-6) && near(units.parseLength(`(24'-0")/3`), 2438.4, 1e-6), `12'6" + 3/4" and (24'-0")/3`);
ok(near(units.parseLength('4+7/16', 'in'), 112.7125, 1e-6) && near(units.parseLength('2*450mm'), 900, 1e-6), '4+7/16 in inches, 2*450mm');
ok(units.parseLength('4+') === null && units.parseLengthCalc('4+').error === 'calc.err.end', '4+ refuses and says why', units.parseLengthCalc('4+'));
ok(near(units.parseLength(`24'-0"`), 24 * 304.8, 1e-6) && near(units.parseLength(`12'-6 1/2"`), 12 * 304.8 + 6.5 * 25.4, 1e-6), `24'-0" and 12'-6 1/2" are still one length each, not a subtraction`);
ok(units.parseLength('3.5 m') === 3500 && units.parseLength('900 mm') === 900 && units.parseLength('90 cm') === 900, 'metric with units');
ok(units.parseLength('16', 'ft-in') === 16 * 304.8 && units.parseLength('16', 'm') === 16000, 'bare number takes the chosen unit');
ok(units.parseLength('abc') === null && units.parseLength('') === null && units.parseLength('-3') === null && units.parseLength('0') === null, 'rejects nonsense, zero and negatives');
ok(units.formatLength(304.8 * 16) === `16'-0"` && units.formatLength(304.8 * 12 + 25.4 * 6.5) === `12'-6 1/2"`, 'formats feet-inches to 1/16"');
ok(units.formatLength(3500, 'm') === '3.500 m' && units.formatLength(900.4, 'mm') === '900 mm', 'formats metric');
const quarter = units.presetCalibration(`1/4" = 1'-0"`, 48, 'ft-in');
ok(units.measure(288, quarter) === `16'-0"`, `1/4" = 1'-0": 4 in on paper = 16'-0"`);
ok(units.measure(72, units.presetCalibration('1:100', 100, 'mm')) === '2.540 m', '1:100: 1 in on paper = 2.540 m');
const cal = units.calibrationFrom(288, 304.8 * 16, 'ft-in');
ok(near(cal.mmPerPt, quarter.mmPerPt, 1e-9) && units.validCalibration(cal), 'two points + 16\'-0" = the 1/4" scale');
ok(!units.validCalibration({ mmPerPt: -1, unit: 'ft' }) && !units.validCalibration({ mmPerPt: 1, unit: 'parsec' }), 'bad calibrations rejected');

// ------------------------------------------------------------------------------------------------
section('Store: edits, undo, redo');
{
  const st = new model.Store();
  const a = st.change('Add', (tx) => tx.add({ sheet: 's1', type: 'rect', rect: [10, 10, 50, 40] }));
  const b = st.change('Add', (tx) => tx.add({ sheet: 's1', type: 'line', pts: [[0, 0], [10, 10]] }));
  ok(st.all().length === 2 && st.onSheet('s1').length === 2, 'two markups');
  const before = st.get(a.id);
  st.change('Move', (tx) => tx.update(a.id, geom.moveBy(before, 5, 5)));
  ok(st.get(a.id) !== before && nearArr(st.get(a.id).rect, [15, 15, 55, 45]), 'update replaces the object (caches stay right)');
  st.change('Delete', (tx) => tx.remove(a.id));
  ok(!st.get(a.id), 'removed');
  st.undo();
  ok(st.get(a.id) && st.all()[0].id === a.id, 'undo restores it in its place in the drawing order');
  st.undo();
  ok(nearArr(st.get(a.id).rect, [10, 10, 50, 40]), 'undo the move');
  st.redo(); st.redo();
  ok(!st.get(a.id) && st.get(b.id), 'redo twice');
  st.change('Scale', (tx) => tx.setCalibration('s1', quarter));
  st.change('Punch', (tx) => { tx.update(b.id, { punch: { n: st.punchNext, assignee: 'A', due: '', status: 'Open' } }); tx.setPunchNext(st.punchNext + 1); });
  ok(st.calibrations.get('s1') && st.punchNext === 2 && st.punchItems().length === 1, 'calibration and punch numbering');
  st.undo(); st.undo();
  ok(!st.calibrations.get('s1') && st.punchNext === 1 && !st.get(b.id).punch, 'both undo');
  ok(st.dirtySheets.has('s1'), 'sheet marked as changed');
  ok(model.makeMarkup({ type: 'rect', rect: [5, 5, 1, 1], status: 'Nope' }).status === 'Open' && nearArr(model.makeMarkup({ type: 'rect', rect: [5, 5, 1, 1] }).rect, [1, 1, 5, 5]), 'makeMarkup normalises rect and status');
  ok(!model.geometryOk({ type: 'rect', rect: [0, 0, 1] }) && !model.geometryOk({ type: 'polygon', pts: [[0, 0], [1, 1]] }) && model.geometryOk({ type: 'note', pts: [[1, 2]] }), 'geometryOk');
}

// ------------------------------------------------------------------------------------------------
section('Display lists (one drawing for screen and PDF)');
const S = 'f1:0';
const author = 'José Müller';
const all = [
  model.makeMarkup({ sheet: S, type: 'rect', rect: [100, 100, 300, 200], author, comment: 'Check clearance', style: { fill: '#ffee88', fillOpacity: 0.4 } }),
  model.makeMarkup({ sheet: S, type: 'ellipse', rect: [1000, 120, 1180, 260], author }),
  model.makeMarkup({ sheet: S, type: 'cloudrect', rect: [400, 400, 600, 500], author, status: 'Accepted', punch: { n: 1, assignee: 'Mechanical sub', due: '2026-11-01', status: 'Open' } }),
  model.makeMarkup({ sheet: S, type: 'cloud', pts: [[720, 400], [900, 380], [950, 520], [760, 560]], author, status: 'Rejected' }),
  model.makeMarkup({ sheet: S, type: 'polygon', pts: [[150, 400], [260, 380], [280, 480]], author }),
  model.makeMarkup({ sheet: S, type: 'polyline', pts: [[1050, 700], [1150, 760], [1100, 840]], author }),
  model.makeMarkup({ sheet: S, type: 'line', pts: [[100, 700], [280, 700]], author }),
  model.makeMarkup({ sheet: S, type: 'arrow', pts: [[650, 900], [760, 760]], author }),
  model.makeMarkup({ sheet: S, type: 'pen', pts: [[900, 1500], [940, 1540], [990, 1500]], author }),
  model.makeMarkup({ sheet: S, type: 'highlight', pts: [[450, 1000], [700, 1000]], author }),
  model.makeMarkup({ sheet: S, type: 'callout', rect: [700, 1240, 890, 1290], pts: [[620, 1180], [690, 1265]], text: 'Move prep sink 6" east (coordinate with plumbing) ✓', author }),
  model.makeMarkup({ sheet: S, type: 'text', rect: [150, 1580, 400, 1610], text: 'Verify door swing at walk-in cooler', author }),
  model.makeMarkup({ sheet: S, type: 'note', pts: [[1150, 1100]], comment: 'Confirm hood size', author }),
  model.makeMarkup({ sheet: S, type: 'stamp', rect: [950, 1600, 1150, 1670], label: 'Revise and resubmit', author, style: { color: model.stampColor('Revise and resubmit') } }),
  model.makeMarkup({ sheet: S, type: 'measure', pts: [[400, 640], [688, 640]], author }),
];
const envFor = () => ({ cal: quarter, badge: 9 });
for (const m of all) {
  const list = shapesM.shapes(m, envFor());
  const b = shapesM.listBounds(list);
  ok(list.length > 0 && b && b[2] > b[0] && b[3] > b[1], 'display list for ' + m.type, { n: list.length, b });
}
{
  const cloud = shapesM.listBounds(shapesM.shapes(all[2], {}));
  ok(cloud[0] < 400 && cloud[1] < 400 && cloud[2] > 600 && cloud[3] > 500, 'cloud scallops bulge outward', cloud);
  const cw = shapesM.cloudPath([[0, 0], [0, 100], [100, 100], [100, 0]], 20), ccw = shapesM.cloudPath([[0, 0], [100, 0], [100, 100], [0, 100]], 20);
  const bw = shapesM.listBounds([{ k: 'path', d: cw, stroke: '#000000', w: 0 }]), bc = shapesM.listBounds([{ k: 'path', d: ccw, stroke: '#000000', w: 0 }]);
  ok(bw[0] < -5 && bc[0] < -5 && near(bw[0], bc[0], 1), 'outward for both windings', [bw, bc]);
  const lab = shapesM.shapes(all[14], { cal: quarter }).find((i) => i.k === 'text');
  ok(lab.lines[0] === `16'-0"`, 'measure label from the sheet scale', lab.lines);
  ok(shapesM.shapes(all[14], {}).find((i) => i.k === 'text').lines[0] === 'Not calibrated', 'measure without a scale says so');
  ok(shapesM.shapes(all[2], { badge: 9 }).some((i) => i.badge && i.k === 'text' && i.lines[0] === '1'), 'punch number drawn with the markup');
  const t0 = shapesM.placeText({ lines: ['a', 'b'], box: [0, 0, 100, 50], size: 10, rot: 0, align: 'left', valign: 'top', pad: 2 });
  ok(t0.angle === 0 && near(t0.lines[0].x, 2) && t0.lines[0].y < 50 && t0.lines[1].y < t0.lines[0].y, 'text reads down the box (rot 0)', t0);
  const t90 = shapesM.placeText({ lines: ['a'], box: [0, 0, 50, 100], size: 10, rot: 90, align: 'left', valign: 'top', pad: 2 });
  ok(t90.angle === 90 && near(t90.lines[0].y, 2) && t90.lines[0].x > 0, 'rotated page: text frame turns with it', t90);
}

// ------------------------------------------------------------------------------------------------
section('Grips, moving, hit-testing');
{
  const r = model.makeMarkup({ type: 'rect', rect: [0, 0, 100, 50], sheet: S });
  const gs = geom.grips(r);
  ok(gs.length === 8 && gs.every((g) => g.kind === 'box'), '8 box grips');
  const se = gs.find((g) => g.key === 'se');
  ok(nearArr(geom.applyGrip(r, se, [150, -20]).rect, [0, -20, 150, 50]), 'se grip moves the right and bottom edges');
  ok(nearArr(geom.applyGrip(r, se, [200, 30], { shift: true }).rect, [0, -50, 200, 50]), 'Shift keeps proportions');
  ok(nearArr(geom.applyGrip(r, gs.find((g) => g.key === 'w'), [120, 0]).rect, [100, 0, 120, 50]), 'dragging past the other side flips cleanly');
  const ln = model.makeMarkup({ type: 'line', pts: [[0, 0], [100, 0]], sheet: S });
  const v1 = geom.grips(ln).find((g) => g.key === 'v1');
  ok(nearArr(geom.applyGrip(ln, v1, [100, 90], { shift: true }).pts[1].map((x) => Math.round(x)), [95, 95]), 'Shift snaps a vertex to 45°');
  const pen = model.makeMarkup({ type: 'pen', pts: [[0, 0], [10, 10], [20, 0]], sheet: S });
  ok(nearArr(geom.applyGrip(pen, geom.grips(pen).find((g) => g.key === 'e'), [40, 5]).pts, [[0, 0], [20, 10], [40, 0]]), 'freehand scales from its box');
  ok(geom.simplify([[0, 0], [1, 0.01], [2, 0], [3, 0.02], [4, 0]], 0.1).length === 2, 'freehand strokes are simplified');
  const envOf = () => ({ cal: quarter, badge: 9 });
  const list = all.slice();
  ok(geom.pick(list, [705, 830], 3, envOf)?.type === 'arrow', 'pick: on the arrow');
  ok(geom.pick(list, [200, 150], 3, envOf)?.type === 'rect', 'pick: inside a filled rectangle');
  ok(geom.pick(list, [1090, 190], 3, envOf) === null, 'pick: inside an unfilled ellipse misses');
  ok(geom.pick(list, [1001, 190], 3, envOf)?.type === 'ellipse', 'pick: on the ellipse outline');
  ok(geom.pick(list, [300, 1595], 3, envOf)?.type === 'text', 'pick: inside a text box');
  ok(geom.pickWindow(list, [90, 90, 310, 210], false, envOf).map((m) => m.type).join() === 'rect', 'window: fully inside');
  ok(geom.pickWindow(list, [250, 150, 260, 160], true, envOf).some((m) => m.type === 'rect'), 'crossing: touching');
  const T = geom.similarity([0, 0], [100, 0], [10, 20], [10, 220]);
  ok(nearArr(geom.apply(T, [100, 0]), [10, 220]) && nearArr(geom.apply(T, [50, 0]), [10, 120]) && nearArr(geom.apply(geom.inv(T), [10, 220]), [100, 0]), 'two-point alignment: scale 2, turn 90°');
  ok(geom.similarity([0, 0], [0, 0], [1, 1], [2, 2]) === null, 'two equal points refuse to align');
}

// ------------------------------------------------------------------------------------------------
section('Sheet compare');
{
  const px = (r, g, b) => [r, g, b, 255];
  const a = new Uint8ClampedArray([...px(0, 0, 0), ...px(0, 0, 0), ...px(255, 255, 255), ...px(255, 255, 255)]);
  const b = new Uint8ClampedArray([...px(0, 0, 0), ...px(255, 255, 255), ...px(0, 0, 0), ...px(255, 255, 255)]);
  const out = new Uint8ClampedArray(16);
  const colors = { bg: [255, 255, 255], same: [100, 100, 100], old: [200, 0, 0], new: [0, 0, 200] };
  const stats = cmpM.combine(a, b, out, colors, 0.5);
  ok([...out.slice(0, 3)].join() === '100,100,100' && [...out.slice(4, 7)].join() === '200,0,0' && [...out.slice(8, 11)].join() === '0,0,200' && [...out.slice(12, 15)].join() === '255,255,255', 'both = neutral, old only = old color, new only = new color, neither = paper', [...out]);
  ok(stats.same === 1 && stats.changedOld === 1 && stats.changedNew === 1, 'counts', stats);
  cmpM.combine(a, b, out, colors, 1);
  ok([...out.slice(4, 7)].join() === '255,255,255' && [...out.slice(0, 3)].join() === '0,0,200', 'balance 1 = new sheet only');
  ok(nearArr(cmpM.alignment({ fit: [1, 0, 0, 1, 5, 5], dx: 1, dy: -2 }), [1, 0, 0, 1, 6, 3]), 'nudges add to the two-point fit');
}

// ------------------------------------------------------------------------------------------------
section('Tool chest (untrusted imports)');
{
  const good = chestM.parseChest(chestM.exportChest(chestM.DEFAULT_CHEST));
  ok(good.tools.length === chestM.DEFAULT_CHEST.length && good.skipped === 0, 'export → import round trip');
  const evil = JSON.stringify({ format: 'markupcraft-tool-chest', version: 1, tools: [
    { name: '<img src=x onerror=alert(1)>', type: 'rect', style: { color: 'javascript:alert(1)', width: 1e9, opacity: -5 } },
    { name: 'x', type: 'foreign' }, { name: 'y', type: '__proto__' }, null, 'str',
    { id: '../../etc', name: 'Stamp', type: 'stamp', label: 'A'.repeat(500), style: { color: '#ABCDEF', fill: 'red' } },
  ] });
  const r = chestM.parseChest(evil);
  ok(r.tools.length === 2 && r.skipped === 4, 'bad tools skipped', r);
  ok(r.tools[0].style.color === '#d0021b' && r.tools[0].style.width === 72 && r.tools[0].style.opacity === 0.05, 'colors and numbers clamped', r.tools[0].style);
  ok(r.tools[0].name === '<img src=x onerror=alert(1)>', 'names stay text (the UI shows them as text nodes)');
  ok(r.tools[1].label.length === 60 && r.tools[1].style.fill === null && r.tools[1].style.color === '#abcdef' && r.tools[1].id.startsWith('tool-'), 'stamp label cut, bad fill dropped, bad id replaced');
  let threw = 0;
  for (const t of ['nope', '{"a":1}', '[]']) { try { chestM.parseChest(t); } catch { threw++; } }
  ok(threw === 2, 'not JSON / not a chest → plain error');
  ok(chestM.mergeChest([{ id: 'a', name: '1' }], [{ id: 'a', name: '2' }, { id: 'b', name: '3' }]).map((t) => t.name).join() === '2,3', 'merge replaces by id');
}

// ------------------------------------------------------------------------------------------------
section('Clipboard: copy, paste, paste in place, duplicate (clip.js; another tab\'s copy is untrusted)');
{
  const st = new model.Store();
  const A = 'f1:0', B = 'f2:3';
  let rect, cloud, locked;
  st.change('Draw', (tx) => {
    rect = tx.add(model.makeMarkup({ sheet: A, type: 'rect', rect: [100, 100, 200, 160], author: 'Ann', status: 'Accepted', punch: { n: 4, assignee: 'GC', due: '', status: 'Open' }, replies: [{ author: 'Bo', text: 'ok', kind: 'comment' }], style: { color: '#1e48c8', width: 3 } }));
    cloud = tx.add(model.makeMarkup({ sheet: A, type: 'cloud', pts: [[300, 300], [360, 300], [330, 350]], text: 'Revise', comment: 'see RFI 12', author: 'Ann' }));
    locked = tx.add(model.makeMarkup({ sheet: A, type: 'foreign', rect: [0, 0, 5, 5], locked: true }));
  });
  const c = clipM.makeClip([rect, cloud, locked], { source: 'tab-1', sheet: A });
  ok(c.format === 'markupcraft-clip' && c.v === 1 && c.items.length === 2 && c.sheet === A, 'a copy keeps the markups, never a read-only one', c);
  ok(!('author' in c.items[0]) && !('id' in c.items[0]) && !('replies' in c.items[0]) && !('punch' in c.items[0]), 'a copy keeps what draws a markup, not who made it or its thread');
  ok(clipM.makeClip([locked]) === null && clipM.makeClip([]) === null, 'nothing copyable → no copy');
  const back = clipM.cleanClip(JSON.stringify(c));
  ok(back && back.items.length === 2 && back.skipped === 0 && JSON.stringify(back.items) === JSON.stringify(c.items), 'stored copy reads back the same (cross-tab round trip)');
  ok(nearArr([clipM.clipBounds(c.items)], [[100, 100, 360, 350]]), 'bounds of the copy', clipM.clipBounds(c.items));

  // paste in place on another sheet: same coordinates, new everything else, one undo step
  const placed = clipM.placeClip(back, { sheet: B, author: 'Cy', rot: 90, delta: [0, 0] });
  ok(placed.length === 2 && placed.every((m) => m.sheet === B && m.author === 'Cy' && m.status === 'Open' && m.punch === null && m.replies.length === 0 && !m.locked && m.rot === 90), 'pasted markups are new: this sheet, my name, Open, no punch item, empty thread', placed[0]);
  ok(placed[0].id !== rect.id && placed[1].id !== cloud.id && placed[0].id !== placed[1].id, 'pasted markups get new ids');
  ok(nearArr(placed[0].rect, rect.rect) && nearArr(placed[1].pts, cloud.pts), 'paste in place keeps the sheet coordinates');
  ok(placed[0].style.color === '#1e48c8' && placed[0].style.width === 3 && placed[1].text === 'Revise' && placed[1].comment === 'see RFI 12', 'style, text and comment come along');
  const before = st.all().length;
  st.change('Paste 2 markups', (tx) => { for (const m of placed) tx.add(m); });
  ok(st.all().length === before + 2 && st.onSheet(B).length === 2, 'paste adds them to the target sheet');
  st.undo();
  ok(st.all().length === before && st.onSheet(B).length === 0, 'one Ctrl+Z takes the whole paste away');
  st.redo();
  ok(st.onSheet(B).length === 2, 'redo puts it back');

  // offset (beside the copy) and at the pointer
  const off = clipM.placeClip(back, { sheet: A, delta: [12, -12] });
  ok(nearArr(off[0].rect, [112, 88, 212, 148]) && nearArr(off[1].pts, [[312, 288], [372, 288], [342, 338]]), 'beside the copy: moved by the step');
  const atP = clipM.placeClip(back, { sheet: A, center: [1000, 500] });
  const bAt = clipM.clipBounds(atP);
  ok(near((bAt[0] + bAt[2]) / 2, 1000) && near((bAt[1] + bAt[3]) / 2, 500) && near(bAt[2] - bAt[0], 260), 'at the pointer: the copy is centered where it points, same size', bAt);

  // cut = copy + remove as one step; duplicate leaves the copy alone
  const cutClip = clipM.makeClip([rect], { source: 'tab-1', sheet: A });
  st.change('Cut markup', (tx) => tx.remove(rect.id));
  ok(!st.get(rect.id) && cutClip.items.length === 1, 'cut removes the markup and keeps it on the clipboard');
  st.undo();
  ok(!!st.get(rect.id), 'one Ctrl+Z brings a cut markup back');
  const dup = clipM.placeClip(clipM.makeClip([cloud], { sheet: A }), { sheet: A, author: 'Ann', delta: [5, -5] });
  st.change('Duplicate markup', (tx) => { for (const m of dup) tx.add(m); });
  ok(st.onSheet(A).filter((m) => m.type === 'cloud').length === 2, 'duplicate adds a copy on the same sheet');

  // untrusted: another tab, a hand-edited localStorage, a hostile page on the same origin
  const evil = JSON.stringify({ format: 'markupcraft-clip', v: 1, source: 'x'.repeat(500), sheet: A, at: '2026', items: [
    { type: 'rect', rect: [0, 0, 'x', 1] },                                  // bad geometry
    { type: 'foreign', rect: [0, 0, 1, 1] },                                // read-only type
    { type: '__proto__', rect: [0, 0, 1, 1] }, { type: 'constructor' }, null, 'str', 7,
    { type: 'line', pts: [[0, 0]] },                                        // too few points
    { type: 'polygon', pts: [[0, 0], [1, 1], [Infinity, 2]] },               // not finite
    { type: 'rect', rect: [0, 0, 2e7, 1] },                                 // too far out
    { type: 'rect', rect: [10, 10, 20, 20], rot: 45, id: 'keep-me', author: 'Mallory', locked: true, status: 'Accepted',
      text: 'a\u0000b<script>', label: 'L'.repeat(900), style: { color: 'red;x', fill: 'url(x)', width: 1e9, opacity: -1, fontSize: 'big' } },
  ] });
  const r = clipM.cleanClip(evil);
  ok(r && r.items.length === 1 && r.skipped === 10, 'bad items left out, the good one kept', r && { n: r.items.length, skipped: r.skipped });
  const g = r.items[0];
  ok(g.rot === 0 && g.style.color === '#d0021b' && g.style.fill === null && g.style.width === 200 && g.style.opacity === 0.05 && g.style.fontSize === 12, 'colors replaced, numbers clamped, rotation kept to 0/90/180/270', g.style);
  ok(g.text === 'ab<script>' && g.label.length === 200 && r.source.length === 80, 'control characters dropped, text kept as text, lengths capped');
  const gp = clipM.placeClip(r, { sheet: A, author: 'Me' })[0];
  ok(gp.id !== 'keep-me' && gp.author === 'Me' && !gp.locked && gp.status === 'Open', 'a copy cannot choose its id, author, lock or status');
  let none = 0;
  for (const t of ['nope', '{}', '{"format":"markupcraft-clip","v":2,"items":[{"type":"rect","rect":[0,0,1,1]}]}', '{"format":"markupcraft-tool-chest","v":1,"items":[]}', '{"format":"markupcraft-clip","v":1,"items":[]}', 'null', '[]']) if (clipM.cleanClip(t) === null) none++;
  ok(none === 7, 'not JSON, another format or version, or nothing usable → no paste');
  const many = clipM.cleanClip({ format: 'markupcraft-clip', v: 1, items: Array.from({ length: 2500 }, (_, i) => ({ type: 'note', pts: [[i, i]] })) });
  ok(many.items.length === clipM.CLIP_MAX, 'at most ' + clipM.CLIP_MAX + ' markups in one paste');
}

// ------------------------------------------------------------------------------------------------
section('CSV');
{
  ok(csvM.cell('=HYPERLINK("x")') === `"'=HYPERLINK(""x"")"` && csvM.cell('+1') === "'+1" && csvM.cell('a,b') === '"a,b"' && csvM.cell('plain') === 'plain', 'formula-safe, quoted');
  const sheetOf = () => ({ title: 'K-101', file: 'kitchen-plan-sheet.pdf', page: 1 });
  const rows = csvM.markupRows(all, sheetOf, () => '');
  ok(rows.length === all.length + 1 && rows[0][0] === 'Punch no.', 'markups CSV: header + one row each');
  const pr = csvM.punchRows(all, sheetOf);
  ok(pr.length === 2 && pr[1][0] === 1 && pr[1][6] === 'Mechanical sub', 'punch CSV', pr[1]);
  ok(csvM.toCsv([['a', 'b'], ['1', '2']]) === '\ufeffa,b\r\n1,2\r\n', 'BOM + CRLF');
}

// ------------------------------------------------------------------------------------------------
section('Save into the kitchen plan sheet and read it back');
const planBytes = new Uint8Array(fs.readFileSync(PLAN));
const planSize = planBytes.length;
const t0 = Date.now();
const { bytes: saved, report } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: all, cal: quarter, badge: 9 }] });
ok(report.written === all.length, 'wrote ' + report.written + ' annotations in ' + (Date.now() - t0) + ' ms', report);
ok(report.missing === 1, 'one character outside WinAnsi counted (✓)', report.missing);
ok(fs.statSync(PLAN).size === planSize, 'the original file is untouched');
fs.writeFileSync(path.join(OUTDIR, 'plan-marked-up.pdf'), saved);
{
  const doc = await getDoc(saved);
  const page = await doc.getPage(1);
  const annots = await quiet(() => page.getAnnotations());
  const visible = annots.filter((a) => !(a.annotationFlags & 2) && !a.inReplyTo);
  const want = { rect: 'Square', ellipse: 'Circle', cloudrect: 'Square', cloud: 'Polygon', polygon: 'Polygon', polyline: 'PolyLine', line: 'Line', arrow: 'Line', pen: 'Ink', highlight: 'Ink', callout: 'FreeText', text: 'FreeText', note: 'Text', stamp: 'Stamp', measure: 'Line' };
  ok(visible.length === all.length, all.length + ' visible annotations', visible.length);
  ok(visible.map((a) => a.subtype).join() === all.map((m) => want[m.type]).join(), 'subtypes in order: ' + visible.map((a) => a.subtype).join(','));
  ok(visible.every((a) => a.hasAppearance), 'every annotation has an appearance stream');
  ok(visible.every((a) => a.titleObj?.str === author), '/T = author (UTF-16 kept: José Müller)');
  ok(visible.every((a) => /^D:\d{14}/.test(a.modificationDate || '')), '/M date on every annotation');
  ok(visible.every((a, i) => { const b = shapesM.listBounds(shapesM.shapes(all[i], envFor())); return a.rect[0] <= b[0] && a.rect[1] <= b[1] && a.rect[2] >= b[2] && a.rect[3] >= b[3]; }), 'every /Rect contains what it draws');
  ok(visible[10].contentsObj.str === all[10].text && visible[12].contentsObj.str === 'Confirm hood size', '/Contents: callout text, note comment');
  ok(visible[14].contentsObj.str === `16'-0"`, '/Contents of a measurement = the measured length');
  const replies = annots.filter((a) => a.inReplyTo);
  ok(replies.length === 2 && replies.every((a) => a.subtype === 'Text' && a.hasAppearance && a.stateModel === 'Review'), 'statuses → review-state replies (Text, /IRT, empty appearance)', replies.length);

  // the appearance streams actually paint: render with and without annotations
  const vp = page.getViewport({ scale: 0.5 });
  const draw = async (mode) => { const c = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height)); await quiet(() => page.render({ canvasContext: c.getContext('2d'), viewport: vp, annotationMode: mode }).promise); return c.getContext('2d').getImageData(0, 0, c.width, c.height); };
  const on = await draw(pdfjs.AnnotationMode.ENABLE), off = await draw(pdfjs.AnnotationMode.DISABLE);
  const changedNear = (m) => {
    const b = shapesM.listBounds(shapesM.shapes(m, envFor()));
    const p0 = vp.convertToViewportPoint(b[0], b[3]), p1 = vp.convertToViewportPoint(b[2], b[1]);
    let n = 0;
    for (let y = Math.max(0, Math.floor(p0[1])); y < Math.min(on.height, Math.ceil(p1[1])); y++) for (let x = Math.max(0, Math.floor(p0[0])); x < Math.min(on.width, Math.ceil(p1[0])); x++) {
      const i = (y * on.width + x) * 4;
      if (Math.abs(on.data[i] - off.data[i]) + Math.abs(on.data[i + 1] - off.data[i + 1]) + Math.abs(on.data[i + 2] - off.data[i + 2]) > 60) n++;
    }
    return n;
  };
  const painted = all.map((m) => [m.type, changedNear(m)]);
  ok(painted.every(([, n]) => n > 3), 'every appearance stream paints pixels where the markup is', painted.filter(([, n]) => n <= 3));
  const stampPx = (() => { const m = all[13]; const c = vp.convertToViewportPoint((m.rect[0] + m.rect[2]) / 2, m.rect[3] - 4); const i = (Math.round(c[1]) * on.width + Math.round(c[0])) * 4; return [on.data[i], on.data[i + 1], on.data[i + 2]]; })();
  ok(stampPx[0] > 150 && stampPx[2] < 120 || stampPx.every((v) => v > 200), 'stamp border drawn in its orange', stampPx);

  // pdf-lib view of the dictionaries
  const ldoc = await PDFLib.PDFDocument.load(saved);
  const ctx = ldoc.context;
  const N = (s) => PDFLib.PDFName.of(s);
  const dicts = ldoc.getPage(0).node.Annots().asArray().map((r) => ctx.lookup(r));
  const ours = dicts.filter((d) => !d.get(N('IRT')));
  const str = (d, k) => { const v = d.get(N(k)); return v?.decodeText ? v.decodeText() : v?.toString(); };
  ok(ours.map((d) => str(d, 'NM')).join() === all.map((m) => m.id).join(), '/NM = our id on each');
  ok(ours.every((d) => typeof str(d, 'Subj') === 'string' && str(d, 'Subj').length > 0), '/Subj on each');
  ok(ours.every((d) => d.get(N('MarkupCraft'))), 'private /MarkupCraft data on each');
  ok(str(ours[2], 'BE') !== undefined && ours[2].get(N('BE')).get(N('S')) === N('C') && ours[3].get(N('BE')).get(N('S')) === N('C'), 'clouds carry a cloudy border effect (/BE /S /C)');
  ok(ours[0].get(N('IC'))?.asArray().length === 3, 'fill → /IC');
  ok(ours[7].get(N('LE'))?.asArray()[1] === N('ClosedArrow'), 'arrow → /LE ClosedArrow');
  ok(ours[10].get(N('IT')) === N('FreeTextCallout') && ours[10].get(N('CL'))?.asArray().length === 6, 'callout → /IT /FreeTextCallout + /CL (3 points)');
  ok(ours[14].get(N('IT')) === N('LineDimension') && ours[14].get(N('Measure')), 'measurement → /IT /LineDimension + /Measure');
  ok(ldoc.getPage(0).node.get(N('VP')) && ldoc.getPage(0).node.get(N('MarkupCraftCal')), 'sheet scale saved on the page (/VP + ours)');
  const states = dicts.filter((d) => d.get(N('IRT')));
  ok(states.length === 2 && states.map((d) => str(d, 'State')).sort().join() === 'Accepted,Rejected' && states.every((d) => str(d, 'StateModel') === 'Review'), 'status → review-state replies (Accepted, Rejected)');
  ok(ldoc.getPageCount() === 1 && Math.round(ldoc.getPage(0).getWidth()) === 1296, 'page count and size kept');
}

section('Another reader (poppler, when installed)');
{
  const { spawnSync } = await import('node:child_process');
  const f = path.join(OUTDIR, 'plan-marked-up.pdf');
  const info = spawnSync('pdfinfo', [f], { encoding: 'utf8' });
  if (info.error) console.log('  skip poppler is not installed');
  else {
    ok(info.status === 0 && /Pages:\s+1/.test(info.stdout) && !/error/i.test(info.stderr), 'pdfinfo reads the copy cleanly', info.stderr.trim());
    const png = path.join(OUTDIR, 'poppler');
    const r = spawnSync('pdftoppm', ['-r', '20', '-png', '-singlefile', f, png], { encoding: 'utf8' });
    ok(r.status === 0 && !/error/i.test(r.stderr) && fs.statSync(png + '.png').size > 1000, 'pdftoppm renders it (annotations from their appearance streams)', r.stderr.trim());
  }
}

section('Reopen the saved copy');
let reopened;
{
  reopened = await open(saved, 'kitchen-plan-sheet (marked up).pdf');
  const ms = reopened.markups;
  ok(ms.length === all.length && ms.every((m) => !m.locked), all.length + ' markups back, all editable', ms.length);
  const fields = ['id', 'type', 'pts', 'rect', 'style', 'text', 'label', 'subject', 'comment', 'author', 'status', 'punch', 'created'];
  const diffs = [];
  all.forEach((m, i) => { for (const f of fields) if (JSON.stringify(m[f]) !== JSON.stringify(ms[i][f])) diffs.push(m.type + '.' + f); });
  ok(diffs.length === 0, 'every field round-trips exactly', diffs);
  ok(units.validCalibration(reopened.calibrations['f1:0']) && near(reopened.calibrations['f1:0'].mmPerPt, quarter.mmPerPt, 1e-9), 'sheet scale back');
  ok(reopened.pages[0].annotMode === 'disable' && !reopened.cleaned, 'only our annotations on the page: drawn by MarkupCraft, pdf.js annotations off');
  ok(reopened.removeRefs.size === all.length + 2, 'their ids (and their replies\' ids) are kept to replace them on save', reopened.removeRefs.size);
  // edit, delete one, save again
  const st = new model.Store();
  st.load(reopened.markups, reopened.calibrations);
  st.change('Edit', (tx) => { tx.update(ms[0].id, { comment: 'Edited' }); tx.remove(ms[6].id); tx.update(ms[3].id, { status: 'Open' }); });
  const { bytes: again } = await writer.writeMarkedUp(PDFLib, saved, { pages: [{ index: 0, markups: st.onSheet('f1:0'), cal: quarter, badge: 9 }], removeRefs: reopened.removeRefs });
  const doc2 = await getDoc(again);
  const an2 = (await quiet(async () => (await doc2.getPage(1)).getAnnotations())).filter((a) => !(a.annotationFlags & 2) && !a.inReplyTo);
  ok(an2.length === all.length - 1, 'save again: one fewer (deleted), no duplicates', an2.length);
  ok(an2[0].contentsObj.str === 'Edited', 'the edit is saved');
  const l2 = await PDFLib.PDFDocument.load(again);
  const st2 = l2.getPage(0).node.Annots().asArray().map((r) => l2.context.lookup(r)).filter((d) => d.get(PDFLib.PDFName.of('IRT')));
  ok(st2.length === 1, 'old review-state replies dropped with their annotations (one left: Accepted)', st2.length);
  const re2 = await open(again);
  ok(re2.markups.length === all.length - 1 && re2.markups.find((m) => m.type === 'cloud').status === 'Open', 'third generation reads back');
  fs.writeFileSync(path.join(OUTDIR, 'plan-resaved.pdf'), again);
}

// ------------------------------------------------------------------------------------------------
section("Another program's annotations");
{
  const src = await PDFLib.PDFDocument.load(planBytes);
  const ctx = src.context;
  const page = src.getPage(0);
  const ap = (ops, bbox) => ctx.register(ctx.flateStream(ops, { Type: 'XObject', Subtype: 'Form', BBox: bbox }));
  const T = (s) => PDFLib.PDFHexString.fromText(s);
  const sq = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Square', Rect: [100, 100, 220, 180], C: [0, 0, 1], BS: { W: 2 }, IC: [1, 1, 0], T: T('Other Tool User'), Contents: T('Plain square'), Subj: T('Rectangle'), NM: PDFLib.PDFString.of('other-1'), F: 4 }));
  const state = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Text', Rect: [100, 180, 101, 181], IRT: sq, StateModel: PDFLib.PDFString.of('Review'), State: PDFLib.PDFString.of('Completed'), F: 34, T: T('Lead'), M: PDFLib.PDFString.of('D:20261009120000Z') }));
  const hl = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Highlight', Rect: [300, 300, 500, 320], QuadPoints: [300, 320, 500, 320, 300, 300, 500, 300], C: [1, 1, 0], F: 4, T: T('Other Tool User'), AP: { N: ap('1 1 0 rg 300 300 200 20 re f', [300, 300, 500, 320]) } }));
  const stamp = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Stamp', Rect: [600, 600, 760, 660], Name: 'Draft', F: 4, AP: { N: ap('1 0 0 RG 4 w 604 604 152 52 re S', [600, 600, 760, 660]) } }));
  const link = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Link', Rect: [10, 10, 50, 50], F: 4 }));
  const line = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Line', Rect: [790, 790, 1010, 910], L: [800, 800, 1000, 900], LE: [PDFLib.PDFName.of('OpenArrow'), PDFLib.PDFName.of('None')], C: [1, 0, 0], F: 4 }));
  const ink = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Ink', Rect: [0, 0, 100, 100], InkList: [[10, 10, 20, 30, 30, 10], [50, 50, 60, 70]], C: [0, 0.5, 0], F: 4 }));
  const ft2 = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'FreeText', Rect: [1000, 1000, 1200, 1040], DA: PDFLib.PDFString.of('/Helv 14 Tf 0 0 1 rg'), Contents: T('Their text'), F: 4 }));
  const hidden = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Square', Rect: [5, 5, 6, 6], F: 2 }));
  page.node.set(PDFLib.PDFName.of('Annots'), ctx.obj([sq, state, hl, stamp, link, line, ink, ft2, hidden]));
  const other = await src.save();
  const rec = await open(other, 'other.pdf');
  const by = (t) => rec.markups.filter((m) => m.type === t);
  ok(by('rect').length === 1 && by('rect')[0].status === 'Completed' && by('rect')[0].author === 'Other Tool User' && by('rect')[0].style.fill === '#ffff00', 'plain Square → editable rectangle with its review state, author and fill');
  ok(nearArr(by('rect')[0].rect, [101, 101, 219, 179]) && by('rect')[0].subject === 'Rectangle', 'its geometry (inside the border) and /Subj');
  ok(by('foreign').length === 2 && by('foreign').map((m) => m.src.subtype).sort().join() === 'Highlight,Stamp' && by('foreign').every((m) => m.locked), 'Highlight and a foreign Stamp stay read-only');
  ok(by('arrow').length === 1 && nearArr(by('arrow')[0].pts, [[1000, 900], [800, 800]]), 'Line with an arrow at the start → arrow pointing the right way');
  ok(by('pen').length === 2, 'two-stroke Ink → two pen markups');
  ok(by('text').length === 1 && by('text')[0].text === 'Their text' && by('text')[0].style.fontSize === 14, 'FreeText → text box with its size from /DA');
  ok(!rec.markups.some((m) => m.src?.subtype === 'Link') && rec.markups.length === 7, 'links and hidden annotations are not markups', rec.markups.length);
  ok(rec.cleaned === true, 'page with both kinds is drawn from a copy without the editable ones');
  const cleanAnn = await quiet(async () => (await rec.doc.getPage(1)).getAnnotations());
  ok(cleanAnn.filter((a) => !(a.annotationFlags & 2)).map((a) => a.subtype).sort().join() === 'Highlight,Link,Stamp', 'the drawn copy keeps Highlight, Stamp and Link only (+ the hidden one, untouched)', cleanAnn.map((a) => a.subtype));
  const keep = rec.markups.filter((m) => !m.locked);
  const { bytes: out } = await writer.writeMarkedUp(PDFLib, other, { pages: [{ index: 0, markups: rec.markups, cal: null }], removeRefs: rec.removeRefs });
  const outAnn = (await quiet(async () => (await (await getDoc(out)).getPage(1)).getAnnotations())).filter((a) => !(a.annotationFlags & 2) && !a.inReplyTo);
  const subs = outAnn.map((a) => a.subtype).sort().join();
  ok(subs === 'FreeText,Highlight,Ink,Ink,Line,Link,Square,Stamp', 'saved: theirs rewritten as ours, read-only ones and the link kept, old state reply replaced', subs);
  ok(outAnn.filter((a) => a.subtype === 'Square').length === 1 && keep.length === 5, 'no duplicate square');
  fs.writeFileSync(path.join(OUTDIR, 'other-program.pdf'), other);
}

// ------------------------------------------------------------------------------------------------
section('Rotated sheet, page labels, a 60-sheet set');
{
  const src = await PDFLib.PDFDocument.load(planBytes);
  const doc = await PDFLib.PDFDocument.create();
  const [emb] = await doc.embedPdf(src, [0]);
  for (let i = 0; i < 60; i++) {
    const p = doc.addPage([1296, 1728]);
    p.drawPage(emb, { x: 0, y: 0 });
    if (i === 1) p.setRotation(PDFLib.degrees(90));
  }
  // page labels: A-1 … A-30, then M-1 … M-30
  const labels = doc.context.obj({ Nums: [0, doc.context.obj({ S: 'D', P: PDFLib.PDFString.of('A-') }), 30, doc.context.obj({ S: 'D', P: PDFLib.PDFString.of('M-') })] });
  doc.catalog.set(PDFLib.PDFName.of('PageLabels'), labels);
  const bytes = await doc.save();
  const t1 = Date.now();
  const rec = await open(bytes, 'Set.pdf', 'f9');
  const ms = Date.now() - t1;
  ok(rec.pages.length === 60, '60 sheets opened in ' + ms + ' ms');
  ok(rec.pages[0].sheetNo === 'A-1' && rec.pages[30].sheetNo === 'M-1' && rec.pages[30].title === 'M-1', 'sheet numbers from page labels (A-1, M-1)');
  ok(reader.sheetInfo('3', 'Plans.pdf', 2).title === 'Plans — page 3' && reader.sheetInfo('3', 'Plans.pdf', 2).sheetNo === '', 'plain page numbers are not sheet numbers');
  ok(rec.pages[1].rotate === 90, 'rotation read');
  const tm = model.makeMarkup({ sheet: 'f9:1', type: 'text', rect: [400, 400, 440, 640], rot: 90, text: 'Rotated sheet note', author: 'A' });
  const { bytes: rb } = await writer.writeMarkedUp(PDFLib, bytes, { pages: [{ index: 1, markups: [tm], cal: null }] });
  const rr = await open(rb, 'Set.pdf', 'f9');
  ok(rr.markups.length === 1 && rr.markups[0].rot === 90 && rr.markups[0].sheet === 'f9:1', 'text on a rotated sheet keeps its reading direction');
  const page = await (await getDoc(rb)).getPage(2);
  const vp = page.getViewport({ scale: 1 });
  const c = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height));
  await quiet(() => page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise);
  ok(vp.width > vp.height, 'rotated sheet renders landscape');
}

// ------------------------------------------------------------------------------------------------
section('Area and count');
{
  const area = model.makeMarkup({ sheet: S, type: 'area', pts: [[100, 100], [388, 100], [388, 244], [100, 244]], author: 'A' });
  const v = units.measureArea(area.pts, quarter);
  ok(v.area === '128.00 sq ft' && v.perimeter === `48'-0"`, '288 × 144 pt at 1/4" = 16\' × 8\': 128.00 sq ft, perimeter 48\'-0"', v);
  ok(units.measureArea([[0, 0], [72, 0], [0, 72]], units.presetCalibration('1:100', 100, 'mm')).area === '3.226 sq m', 'metric area (half of 2.54 m squared)');
  ok(units.formatArea(92903.04 * 2.5, 'ft') === '2.50 sq ft' && units.formatArea(645.16 * 3, 'in') === '3.0 sq in', 'area units follow the length unit');
  const lab = shapesM.shapes(area, { cal: quarter }).filter((i) => i.k === 'text').map((i) => i.lines.join('|')).join();
  ok(lab === `128.00 sq ft|P 48'-0"`, 'area label: area and perimeter', lab);
  ok(shapesM.shapes(area, {}).some((i) => i.k === 'text' && i.lines[0] === 'Not calibrated'), 'area without a scale says so');
  ok(nearArr(shapesM.centroid([[0, 0], [10, 0], [10, 10], [0, 10]]), [5, 5]), 'label at the centroid');
  const count = model.makeMarkup({ sheet: S, type: 'count', pts: [[500, 900], [540, 900], [580, 900]], label: 'Outlets', author: 'A' });
  const texts = shapesM.shapes(count, {}).filter((i) => i.k === 'text').map((i) => i.lines[0]);
  ok(texts.join() === '1,2,3,Outlets: 3', 'count: numbered marks and a running total', texts);
  ok(geom.grips(count).length === 3 && geom.grips(area).length === 4, 'every mark and corner is a grip');
  ok(csvM.markupRows([count], () => ({}), () => 'Outlets: 3')[1][8] === 'Outlets: 3', 'values go into the CSV');

  const { bytes: ab } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [area, count], cal: quarter }] });
  const an = (await quiet(async () => (await (await getDoc(ab)).getPage(1)).getAnnotations())).filter((a) => !a.inReplyTo);
  ok(an.map((a) => a.subtype).join() === 'Polygon,Ink' && an.every((a) => a.hasAppearance), 'area → Polygon, count group → one Ink annotation, both with appearances');
  ok(an[0].contentsObj.str === `Area 128.00 sq ft, perimeter 48'-0"` && an[1].contentsObj.str === 'Outlets: 3', '/Contents carry the values');
  const ld = await PDFLib.PDFDocument.load(ab);
  const ds = ld.getPage(0).node.Annots().asArray().map((r) => ld.context.lookup(r));
  ok(ds[0].get(PDFLib.PDFName.of('IT')) === PDFLib.PDFName.of('PolygonDimension') && ds[0].get(PDFLib.PDFName.of('Measure')), 'area: /IT /PolygonDimension + /Measure (like length)');
  ok(ds[1].get(PDFLib.PDFName.of('IT')) === PDFLib.PDFName.of('CountMarks') && ds[1].get(PDFLib.PDFName.of('InkList')).size() === 3, 'count: one ring per mark in /InkList');
  const back = await open(ab);
  const fields = ['id', 'type', 'pts', 'label', 'style', 'author', 'status'];
  const diffs = [];
  [area, count].forEach((m, i) => { for (const f of fields) if (JSON.stringify(m[f]) !== JSON.stringify(back.markups[i][f])) diffs.push(m.type + '.' + f); });
  ok(back.markups.length === 2 && !diffs.length, 'both reopen exactly', diffs);
  // another program sees only the standard keys: drop ours and read again
  for (const d of ds) d.delete(PDFLib.PDFName.of('MarkupCraft'));
  ld.getInfoDict().delete(PDFLib.PDFName.of('MarkupCraft'));
  const plainBack = await open(await ld.save());
  const pa = plainBack.markups.find((m) => m.type === 'area'), pc = plainBack.markups.find((m) => m.type === 'count');
  ok(pa && nearArr(pa.pts, area.pts) && pc && pc.label === 'Outlets' && nearArr(pc.pts, count.pts, 0.5), 'without our private data: still an area and a 3-mark "Outlets" count', [pa?.type, pc?.label, pc?.pts]);
}

// ------------------------------------------------------------------------------------------------
section('Comment threads');
let threadSaved;
{
  const parent = model.makeMarkup({ sheet: S, type: 'cloudrect', rect: [200, 200, 400, 300], author: 'Ann', comment: 'Check this' });
  parent.replies = [
    model.cleanReply({ author: 'Bob', text: 'Checked: the door is 3\'-0".', date: '2026-10-10T10:00:00Z' }),
    { ...model.statusReply('Accepted', 'Ann'), date: '2026-10-10T12:00:00Z' },   // fixed: replies reopen sorted by date
    model.cleanReply({ author: 'José', text: 'Agreed — ✓', date: '2026-10-11T09:00:00Z' }),
  ];
  parent.status = 'Accepted';
  ok(parent.replies.length === 3 && parent.replies[1].kind === 'status' && /Status set to Accepted by Ann/.test(parent.replies[1].text), 'a status change is logged as a reply');
  ok(model.cleanReply({ text: '   ' }) === null && model.cleanReply({ kind: 'status', status: 'Maybe' }) === null, 'empty replies and unknown statuses refused');
  const { bytes: tb, report } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [parent], cal: null }] });
  threadSaved = tb;
  ok(report.replies === 3, 'three reply annotations written', report.replies);
  const annots = await quiet(async () => (await (await getDoc(tb)).getPage(1)).getAnnotations());
  const reps = annots.filter((a) => a.inReplyTo);
  const par = annots.find((a) => !a.inReplyTo);
  ok(reps.length === 3 && reps.every((a) => a.subtype === 'Text' && a.inReplyTo === par.id && a.replyType === 'R'), 'replies are Text annotations with /IRT → the markup (/RT /R)');
  ok(reps.map((a) => a.titleObj.str).join() === 'Bob,Ann,José' && reps.every((a) => /^D:\d{14}/.test(a.modificationDate)), '/T author and /M date on each reply');
  ok(reps[0].contentsObj.str === 'Checked: the door is 3\'-0".' && reps[2].contentsObj.str === 'Agreed — ✓', '/Contents = the reply text (Unicode kept)');
  ok(reps[1].stateModel === 'Review' && reps[1].state === 'Accepted', 'the status entry is a review state (other viewers show it as one)');
  // the replies paint nothing on the sheet: their appearance stream is empty
  const lr = await PDFLib.PDFDocument.load(tb);
  const repDicts = lr.getPage(0).node.Annots().asArray().map((r) => lr.context.lookup(r)).filter((d) => d.get(PDFLib.PDFName.of('IRT')));
  const apLens = repDicts.map((d) => { const st = lr.context.lookup(d.get(PDFLib.PDFName.of('AP')).get(PDFLib.PDFName.of('N'))); return PDFLib.decodePDFRawStream(st).decode().length; });
  ok(apLens.length === 3 && apLens.every((n) => n === 0), 'reply appearances are empty (no note icons drawn on the sheet)', apLens);
  const re = await open(tb);
  const m = re.markups[0];
  ok(re.markups.length === 1 && m.replies.length === 3, 'reopen: the thread comes back on its markup', m.replies.length);
  ok(m.replies.map((r) => r.id).join() === parent.replies.map((r) => r.id).join() && m.replies.map((r) => r.text).join('|') === parent.replies.map((r) => r.text).join('|') && m.replies[1].kind === 'status' && m.replies[1].status === 'Accepted', 'ids, texts and the status entry round-trip');
  ok(m.status === 'Accepted', 'status kept');
  // add one more and save again: no duplicates
  m.replies.push(model.cleanReply({ author: 'Cy', text: 'Closing.' }));
  const { bytes: tb2 } = await writer.writeMarkedUp(PDFLib, tb, { pages: [{ index: 0, markups: [m], cal: null }], removeRefs: re.removeRefs });
  const re2 = await open(tb2);
  const an2 = await quiet(async () => (await (await getDoc(tb2)).getPage(1)).getAnnotations());
  ok(an2.filter((a) => a.inReplyTo).length === 4 && re2.markups[0].replies.length === 4, 'saved again: 4 replies, none doubled');
}
{
  // another program's thread on its own annotations, a reply to a reply, and our reply on a read-only one
  const src = await PDFLib.PDFDocument.load(planBytes);
  const ctx = src.context;
  const T = (s) => PDFLib.PDFHexString.fromText(s);
  const ap = ctx.register(ctx.flateStream('1 1 0 rg 300 300 200 20 re f', { Type: 'XObject', Subtype: 'Form', BBox: [300, 300, 500, 320] }));
  const hl = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Highlight', Rect: [300, 300, 500, 320], QuadPoints: [300, 320, 500, 320, 300, 300, 500, 300], C: [1, 1, 0], F: 4, T: T('Eve'), AP: { N: ap } }));
  const r1 = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Text', Rect: [300, 320, 320, 340], IRT: hl, T: T('Eve'), Contents: T('Is this the right fixture?'), M: PDFLib.PDFString.of('D:20261001100000Z'), F: 4 }));
  const r2 = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Text', Rect: [300, 320, 320, 340], IRT: r1, T: T('Finn'), Contents: T('Yes, per the schedule.'), M: PDFLib.PDFString.of('D:20261002100000Z'), F: 4 }));
  const sq = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Square', Rect: [100, 100, 220, 180], C: [0, 0, 1], BS: { W: 2 }, F: 4, T: T('Eve') }));
  const r3 = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Text', Rect: [100, 180, 120, 200], IRT: sq, T: T('Gus'), Contents: T('Square looks fine.'), M: PDFLib.PDFString.of('D:20261003100000Z'), F: 4 }));
  src.getPage(0).node.set(PDFLib.PDFName.of('Annots'), ctx.obj([hl, r1, r2, sq, r3]));
  const theirs = await src.save();
  const rec = await open(theirs, 'theirs.pdf');
  const fh = rec.markups.find((m) => m.type === 'foreign'), rq = rec.markups.find((m) => m.type === 'rect');
  ok(fh && fh.replies.map((r) => r.author + ':' + r.text).join('|') === 'Eve:Is this the right fixture?|Finn:Yes, per the schedule.', 'replies (and a reply to a reply) on a read-only Highlight read into its thread', fh?.replies);
  ok(rq && rq.replies.length === 1 && rq.replies[0].text === 'Square looks fine.', "another program's reply on a plain Square comes back on the editable rectangle");
  ok(rec.markups.length === 2 && rec.replyCount === 3, 'replies are not markups of their own');
  fh.replies.push(model.cleanReply({ author: 'Me', text: 'Confirmed on site.' }));
  const { bytes: out } = await writer.writeMarkedUp(PDFLib, theirs, { pages: [{ index: 0, markups: rec.markups, cal: null }], removeRefs: rec.removeRefs });
  const an = await quiet(async () => (await (await getDoc(out)).getPage(1)).getAnnotations());
  const hlA = an.find((a) => a.subtype === 'Highlight');
  ok(an.filter((a) => a.inReplyTo === hlA.id).length === 3 && an.filter((a) => a.subtype === 'Highlight').length === 1, 'saved: the Highlight is kept as it was, with three replies (theirs + ours) pointing at it');
  const rec2 = await open(out, 'theirs.pdf');
  ok(rec2.markups.find((m) => m.type === 'foreign').replies.length === 3 && rec2.markups.find((m) => m.type === 'rect').replies.length === 1, 'reopen: both threads intact, nothing doubled');
}

// ------------------------------------------------------------------------------------------------
section('Sheet numbers and titles from the title block');
async function titleBlockSet() {
  const doc = await PDFLib.PDFDocument.create();
  const helv = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
  const bold = await doc.embedFont(PDFLib.StandardFonts.HelveticaBold);
  const t = (pg, s, x, y, size, f = helv) => pg.drawText(s, { x, y, size, font: f });
  const noise = (pg) => {
    for (const [s, x, y] of [['D-1', 200, 900], ['D-2', 400, 700], ['101', 300, 1000], ['W-3', 800, 1300], ['A', 120, 1650], ['SCALE: 1/4" = 1\'-0"', 1050, 80]]) t(pg, s, x, y, 7);
    t(pg, 'EXAMPLE SCHOOL KITCHEN', 1050, 260, 11, bold);
  };
  // 1: classic lower-right title block (24 × 18 in landscape)
  let pg = doc.addPage([1728, 1296]);
  noise(pg);
  t(pg, 'SHEET TITLE', 1450, 190, 6); t(pg, 'FIRST FLOOR PLAN', 1450, 170, 18, bold); t(pg, 'SHEET NO.', 1450, 110, 6); t(pg, 'A-101', 1450, 60, 34, bold);
  t(pg, 'DRAWN BY', 1300, 110, 6); t(pg, 'DATE', 1300, 60, 6); t(pg, '09/21/2016', 1300, 45, 8);
  // 2: a vertical strip down the right edge, number at its foot, a two-line title
  pg = doc.addPage([1728, 1296]);
  noise(pg);
  t(pg, 'ENLARGED KITCHEN', 1540, 300, 16, bold); t(pg, 'PLAN AND DETAILS', 1540, 280, 16, bold); t(pg, 'A1.01', 1580, 120, 30, bold);
  // 3: number and title in the upper-left (some offices put them there)
  pg = doc.addPage([1728, 1296]);
  noise(pg);
  t(pg, 'K-101', 60, 1200, 30, bold); t(pg, 'KITCHEN EQUIPMENT PLAN', 60, 1160, 16, bold);
  // 4: no text at all (like a scan)
  pg = doc.addPage([1728, 1296]);
  pg.drawLine({ start: { x: 100, y: 100 }, end: { x: 1600, y: 1200 }, thickness: 2 });
  // 5: a page label wins over the title block
  pg = doc.addPage([1728, 1296]);
  t(pg, 'M-201', 1450, 60, 34, bold); t(pg, 'MECHANICAL PLAN', 1450, 170, 18, bold);
  doc.catalog.set(PDFLib.PDFName.of('PageLabels'), doc.context.obj({ Nums: [0, doc.context.obj({ S: 'D' }), 4, doc.context.obj({ P: PDFLib.PDFString.of('M-201R') })] }));
  return doc.save();
}
{
  const set = await titleBlockSet();
  const rec = await open(set, 'Title blocks.pdf', 'tb');
  const p = rec.pages;
  ok(p[0].sheetNo === 'A-101' && p[0].name === 'FIRST FLOOR PLAN' && p[0].from === 'title block', 'lower-right title block: A-101, FIRST FLOOR PLAN (not the project name, the labels or the door tags)', [p[0].sheetNo, p[0].name]);
  ok(p[1].sheetNo === 'A1.01' && p[1].name === 'ENLARGED KITCHEN PLAN AND DETAILS', 'right-hand strip: A1.01 and a two-line title', [p[1].sheetNo, p[1].name]);
  ok(p[2].sheetNo === 'K-101' && p[2].name === 'KITCHEN EQUIPMENT PLAN', 'number in the upper-left: K-101 found anyway', [p[2].sheetNo, p[2].name]);
  ok(p[3].sheetNo === '' && p[3].title === 'Title blocks — page 4' && p[3].from === 'file', 'no text: the file name and page');
  ok(p[4].sheetNo === 'M-201R' && p[4].from === 'label', 'a page label wins over the title block', [p[4].sheetNo, p[4].from]);
  ok(p[0].title === 'A-101 — FIRST FLOOR PLAN', 'display title = number — name');
  const plan = await open(planBytes, 'kitchen-plan-sheet.pdf', 'cy');
  ok(plan.pages[0].tb === null && plan.pages[0].title === 'kitchen-plan-sheet — page 1', 'the kitchen plan sheet (no text layer) falls back to the file name and page');
  ok(titleM.isWording('FIRST FLOOR PLAN') && !titleM.isWording('SCALE: 1/4" = 1\'-0"') && !titleM.isWording('09/21/2016') && !titleM.isWording('A-101') && !titleM.isWording('DRAWN BY'), 'boilerplate, dates, scales and numbers are not titles');
  // typed by hand → page labels + our own key
  const names = { 'tb:1': { number: 'A-102', title: 'Kitchen enlarged' }, 'tb:3': { number: 'S-001', title: '' } };
  const pages = rec.pages.map((pg) => ({ index: pg.index, markups: [], cal: null, sheetName: names[pg.key] || null }));
  const labels = rec.pages.map((pg) => names[pg.key]?.number || pg.label || String(pg.index + 1));
  const { bytes: renamed } = await writer.writeMarkedUp(PDFLib, set, { pages, labels });
  const d = await getDoc(renamed);
  const pl = await d.getPageLabels();
  ok(pl && pl[1] === 'A-102' && pl[3] === 'S-001' && pl[4] === 'M-201R' && pl[0] === '1', 'saved: renamed sheet numbers are the page labels (others keep theirs)', pl);
  const rr = await open(renamed, 'Title blocks.pdf', 'tb');
  ok(rr.sheetNames['tb:1']?.title === 'Kitchen enlarged' && rr.pages[1].title === 'A-102 — Kitchen enlarged' && rr.pages[1].from === 'manual', 'reopen: the typed title comes back from /MarkupCraft data');
  ok(rr.pages[3].sheetNo === 'S-001', 'and the typed number');
  const st = new model.Store();
  st.change('Rename', (tx) => tx.setSheetName('tb:0', { number: 'X-1', title: 'T' }));
  st.undo();
  ok(!st.sheetNames.get('tb:0') && st.dirtySheets.has('tb:0'), 'renaming is undoable and marks the sheet changed');
}

// ------------------------------------------------------------------------------------------------
section('BCF 2.1 export');
{
  const png = (() => { const c = createCanvas(40, 30); const g = c.getContext('2d'); g.fillStyle = '#ffffff'; g.fillRect(0, 0, 40, 30); g.strokeStyle = '#d0021b'; g.strokeRect(5, 5, 30, 20); return new Uint8Array(c.toBuffer('image/png')); })();
  const ms = all.slice(0, 4).map((m) => ({ ...m, replies: [] }));
  ms[2].replies = [model.cleanReply({ author: 'Bob', text: 'Seen <ok> & "fine"', date: '2026-10-10T10:00:00Z' }), model.statusReply('Accepted', 'Ann')];
  const topics = ms.map((m, i) => ({ markup: m, sheetTitle: 'A-101 — First floor plan', fileName: 'kitchen-plan-sheet.pdf', value: i === 0 ? '12\'-0"' : '', box: shapesM.listBounds(shapesM.shapes(m, {})), png }));
  const { bytes, count } = await bcfM.buildBcf(topics, { project: 'Example kitchen', exported: new Date('2026-10-10T12:00:00Z') });
  ok(count === 4, '4 topics');
  const files = bcfM.unzip(bytes);
  const names = [...files.keys()];
  ok(names.includes('bcf.version') && names.includes('project.bcfp') && names.includes('extensions.xsd') && names.filter((n) => n.endsWith('/markup.bcf')).length === 4 && names.filter((n) => n.endsWith('/snapshot.png')).length === 4 && names.filter((n) => n.endsWith('.bcfv')).length === 4, 'zip: version, project, extensions, and per topic markup.bcf + viewpoint.bcfv + snapshot.png', names.length);
  ok([...files.values()].every((f) => f.crcOk && f.method === 0), 'every CRC right (stored entries)');
  const g1 = await bcfM.guidFor('topic:' + ms[0].id), g1b = await bcfM.guidFor('topic:' + ms[0].id);
  ok(g1 === g1b && /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(g1) && files.has(g1 + '/markup.bcf'), 'topic GUIDs are name-based (UUID v5): exporting again gives the same topics');
  const mk = new TextDecoder().decode(files.get((await bcfM.guidFor('topic:' + ms[2].id)) + '/markup.bcf').data);
  ok(/TopicStatus="Accepted"/.test(mk) && /<Comment>Seen &lt;ok&gt; &amp; &quot;fine&quot;<\/Comment>/.test(mk) && (mk.match(/<Comment Guid=/g) || []).length === 2, 'status, and the thread as escaped comments', mk.slice(0, 200));
  ok(/<AssignedTo>Mechanical sub<\/AssignedTo>/.test(mk) && /<DueDate>2026-11-01T00:00:00Z<\/DueDate>/.test(mk), 'punch assignee and due date');
  const bcfPath = path.join(OUTDIR, 'markups.bcfzip');
  fs.writeFileSync(bcfPath, bytes);
  const { spawnSync } = await import('node:child_process');
  const unzipT = spawnSync('unzip', ['-t', bcfPath], { encoding: 'utf8' });
  if (!unzipT.error) ok(unzipT.status === 0 && /No errors detected/.test(unzipT.stdout), 'unzip -t: no errors', unzipT.stdout.slice(-200));
  const py = path.join(ROOT, 'tools/markupcraft-test/venv/bin/python');
  if (fs.existsSync(py)) {
    const r = spawnSync(py, [path.join(ROOT, 'tools/markupcraft-test/bcf_check.py'), bcfPath], { encoding: 'utf8' });
    let res = null; try { res = JSON.parse(r.stdout); } catch { res = { ok: false, errors: [r.stdout, r.stderr] }; }
    ok(r.status === 0 && res.ok && res.topics === 4, 'valid against the BCF 2.1 XSDs (markup, visinfo, version, project) and its own extensions.xsd (lxml)', res.errors);
    // and the checker does catch a broken file
    const broken = bcfM.zip([{ name: 'bcf.version', data: '<Version VersionId="2.1"><Oops/></Version>' }, { name: 'x/markup.bcf', data: '<Markup><Topic Guid="nope"><Title>t</Title></Topic></Markup>' }]);
    const bp = path.join(OUTDIR, 'broken.bcfzip');
    fs.writeFileSync(bp, broken);
    const rb = spawnSync(py, [path.join(ROOT, 'tools/markupcraft-test/bcf_check.py'), bp], { encoding: 'utf8' });
    ok(rb.status === 1, 'the checker rejects an invalid BCF (sanity check of the check)');
  } else console.log('  skip BCF schema check: python3 -m venv tools/markupcraft-test/venv && tools/markupcraft-test/venv/bin/pip install lxml');
}

section('Bad input');
{
  let msg = '';
  try { await open(new Uint8Array([1, 2, 3, 4, 5]), 'broken.pdf'); } catch (e) { msg = e.message; }
  ok(/could not be read as a PDF/.test(msg), 'not a PDF → plain-language error', msg);
  ok(reader.fromPrivate('{"v":1,"type":"rect","rect":[0,0,"x",1]}', null, 's') === null, 'private data with bad geometry ignored');
  ok(reader.fromPrivate('{"v":1,"type":"foreign","rect":[0,0,1,1]}', null, 's') === null, 'private data cannot make a read-only type');
  ok(reader.fromPrivate('{"v":1,"type":"rect","rect":[0,0,10,10],"style":{"color":"red;x"}}', null, 's').style.color === '#d0021b', 'bad color in private data replaced');
  ok(reader.pdfDate("D:20261010123000-05'00'") === '2026-10-10T17:30:00Z' && reader.pdfDate('nope') === '', 'PDF dates with offsets');
  ok(reader.calFromMeasure({ Subtype: 'RL', X: [{ U: 'ft', C: 0.0555 }], R: '1/4 in = 1 ft' })?.unit === 'ft-in' && reader.calFromMeasure({ Subtype: 'RL', X: [{ U: 'parsec', C: 1 }] }) === null, "another program's /Measure scale read when the unit is known");
}

section('Page operations (0.4 K1) and flattening (K2, K15)');
{
  // three pages of different sizes, labeled A-1 … A-3, two of them marked up
  const d = await PDFLib.PDFDocument.create();
  for (const [w, h] of [[612, 792], [792, 612], [1296, 1728]]) d.addPage([w, h]);
  const nums = []; ['A-1', 'A-2', 'A-3'].forEach((l, i) => nums.push(i, d.context.obj({ P: PDFLib.PDFHexString.fromText(l) })));
  d.catalog.set(PDFLib.PDFName.of('PageLabels'), d.context.obj({ Nums: nums }));
  const base = await d.save();
  const mk = (sheet, n) => [model.makeMarkup({ sheet, type: 'rect', rect: [50, 50, 150, 120], author, comment: 'page ' + n }), model.makeMarkup({ sheet, type: 'text', rect: [60, 200, 260, 230], text: 'On page ' + n, author })];
  const marks = { 0: mk('p:0', 1), 2: mk('p:2', 3) };
  const labels = ['A-1', 'A-2', 'A-3'];
  const bakeIt = (rot = null) => writer.writeMarkedUp(PDFLib, base, { pages: [0, 1, 2].map((i) => ({ index: i, markups: (marks[i] || []).map((m) => (rot?.has(i) ? { ...m, rot: rot.get(i) } : m)), cal: i === 2 ? quarter : null })) });
  const reopen = (b) => open(b, 'set.pdf', 'p');
  const byPage = (rec) => rec.pages.map((pg) => rec.markups.filter((m) => m.sheet === pg.key).map((m) => m.comment || m.text).sort().join('|'));

  ok(JSON.stringify(pagesM.orderDelete(4, [1, 3])) === '[0,2]' && JSON.stringify(pagesM.orderMove(4, [3], 1)) === '[0,3,1,2]' && JSON.stringify(pagesM.orderInsert(3, 1, 2)) === '[0,null,null,1,2]', 'page orders for delete, move and insert');
  const pl = pagesM.parsePageList('1-2, 4 6-', 7);
  ok(JSON.stringify(pl.indices) === '[0,1,3,5,6]' && pagesM.parsePageList('9', 7).error && pagesM.parsePageList('x', 7).error && pagesM.parsePageList('', 7).error, 'typed page lists: ranges, open ends, refusals', pl);

  const { bytes: baked } = await bakeIt();
  // move the last page first: markups, scale and label travel with it
  const moved = await reopen(await pagesM.movePages(PDFLib, baked, [2], 0, { labels }));
  ok(moved.pages.map((p) => p.label).join() === 'A-3,A-1,A-2', 'move: page labels follow the pages', moved.pages.map((p) => p.label));
  ok(JSON.stringify(byPage(moved)) === JSON.stringify(['On page 3|page 3', 'On page 1|page 1', '']), 'move: each page keeps its markups', byPage(moved));
  ok(!!moved.calibrations['p:0'] && !moved.calibrations['p:2'] && moved.pages[0].width === 1296, 'move: the scale and the page size travel too');
  ok(moved.markups.every((m) => [...marks[0], ...marks[2]].some((o) => o.id === m.id)), 'move: markup ids are kept');

  const del = await reopen(await pagesM.deletePages(PDFLib, baked, [0], { labels }));
  ok(del.pages.length === 2 && del.pages.map((p) => p.label).join() === 'A-2,A-3' && JSON.stringify(byPage(del)) === JSON.stringify(['', 'On page 3|page 3']), 'delete: the page and its markups go, the rest keep theirs');
  let refused = '';
  try { await pagesM.deletePages(PDFLib, baked, [0, 1, 2]); } catch (e) { refused = e.message; }
  ok(refused === EN['pages.err.all'], 'deleting every page is refused', refused);

  const ins = await pagesM.insertPages(PDFLib, baked, base, 1, { indices: [1], labels });
  const insR = await reopen(ins.bytes);
  ok(ins.count === 1 && insR.pages.length === 4 && insR.pages[1].width === 792 && insR.pages.map((p) => p.label).join() === 'A-1,2,A-2,A-3', 'insert from a PDF: the page lands after the open one, numbered by its place', insR.pages.map((p) => p.label));
  const blank = await reopen(await pagesM.insertBlank(PDFLib, baked, 3, { labels }));
  ok(blank.pages.length === 4 && blank.pages[3].width === 1296 && blank.pages[3].height === 1728, 'blank page: the size of the page before it');

  const rotated = await reopen(await pagesM.rotatePages(PDFLib, (await bakeIt(new Map([[2, 90]]))).bytes, [2], 90));
  const rt = rotated.markups.find((m) => m.type === 'text' && m.sheet === 'p:2');
  ok(rotated.pages[2].rotate === 90 && rotated.pages[0].rotate === 0 && rt.rot === 90 && JSON.stringify(rt.rect) === JSON.stringify(marks[2][1].rect), 'rotate: the page turns, its text turns to read upright, the markup stays put');
  const back = await pagesM.rotatePages(PDFLib, await pagesM.rotatePages(PDFLib, baked, [0], -90), [0], -270);
  ok((await reopen(back)).pages[0].rotate === 0, 'rotations add up and wrap at 360°');

  const ex = await pagesM.extractPages(PDFLib, baked, [2, 0]);
  const exR = await reopen(ex);
  ok(exR.pages.length === 2 && exR.pages[0].width === 1296 && JSON.stringify(byPage(exR)) === JSON.stringify(['On page 3|page 3', 'On page 1|page 1']), 'extract: a new PDF of those pages in that order, markups editable');
  ok(base.length === (await d.save()).length, 'the original bytes are untouched');

  // flattening: the markups are drawn into the page, no annotations left, and the page looks the same
  const { bytes: flat, report: fr } = await writer.writeMarkedUp(PDFLib, base, { pages: [{ index: 0, markups: marks[0], cal: null }], flatten: 'all' });
  const flatR = await reopen(flat);
  const fdoc = await pdfjs.getDocument({ data: flat.slice(), ...docOptions }).promise;
  const annots = await (await fdoc.getPage(1)).getAnnotations({ intent: 'any' });
  ok(fr.flattened === 2 && fr.written === 0 && annots.length === 0 && flatR.markups.length === 0, 'flatten: no annotations, nothing editable on reopen', { fr, annots: annots.length });
  const ink = async (bytes, annotationMode) => {
    const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
    const pg = await doc.getPage(1);
    const vp = pg.getViewport({ scale: 1 });
    const c = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height));
    await pg.render({ canvasContext: c.getContext('2d'), viewport: vp, annotationMode }).promise;
    const px = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
    let n = 0; for (let i = 0; i < px.length; i += 4) if (px[i + 3] && px[i] + px[i + 1] + px[i + 2] < 600) n++;
    await reader.closePdf(doc);
    return n;
  };
  const { bytes: annotated } = await writer.writeMarkedUp(PDFLib, base, { pages: [{ index: 0, markups: marks[0], cal: null }] });
  const inkFlat = await ink(flat, pdfjs.AnnotationMode.DISABLE), inkAnn = await ink(annotated, pdfjs.AnnotationMode.ENABLE), inkNone = await ink(base, pdfjs.AnnotationMode.DISABLE);
  ok(inkNone === 0 && inkFlat > 100 && Math.abs(inkFlat - inkAnn) / inkAnn < 0.02, 'flatten: the page paints the markups by itself, the same as their annotations', { inkFlat, inkAnn, inkNone });
  const { bytes: some, report: sr } = await writer.writeMarkedUp(PDFLib, base, { pages: [{ index: 0, markups: marks[0], cal: null }], flatten: new Set([marks[0][0].id]) });
  const someR = await reopen(some);
  ok(sr.flattened === 1 && sr.written === 1 && someR.markups.length === 1 && someR.markups[0].id === marks[0][1].id, 'flatten chosen markups only: the others stay editable');
  await reader.closePdf(fdoc);
}

section('Slip-sheet a revised set (0.4 K13)');
{
  const pg = (key, no, file, page, w = 1296, h = 1728, rotate = 0) => ({ key, no, file, page, width: w, height: h, view: [0, 0, w, h], rotate });
  const olds = [pg('a:0', 'A-101', 0, 0), pg('a:1', 'A-102', 0, 1), pg('b:0', 'A-101', 1, 0), pg('s:0', '', 2, 0), pg('s:1', '', 2, 1)];
  const news = [pg('n:0', 'a101', 3, 0), pg('n:1', 'A 102', 3, 1), pg('n:2', 'A-103', 3, 2), pg('x:0', '', 4, 0), pg('x:1', '', 4, 1)];
  const pairs = slipM.matchSheets(olds, news);
  const by = Object.fromEntries(pairs.map((p) => [p.newKey, [p.oldKey, p.by]]));
  ok(by['n:0'][0] === 'b:0' && by['n:1'][0] === 'a:1' && by['n:0'][1] === 'number', 'match by sheet number, ignoring case, spaces and dashes; the newest old copy wins', by);
  ok(by['n:2'][0] === null, 'a sheet with a new number has nothing to replace');
  ok(by['x:0'][0] === 's:0' && by['x:1'][0] === 's:1' && by['x:1'][1] === 'order', 'scans with no numbers fall back to page order against a file of the same length');

  const src = [
    model.makeMarkup({ sheet: 'a:1', type: 'cloudrect', rect: [100, 100, 300, 200], author, status: 'Open', punch: { n: 4, assignee: 'GC', due: '', status: 'Open' }, replies: [{ author: 'Ann', text: 'Still open', kind: 'comment' }] }),
    model.makeMarkup({ sheet: 'a:1', type: 'text', rect: [400, 400, 600, 430], text: 'Done', author, status: 'Completed' }),
    model.makeMarkup({ sheet: 'a:1', type: 'foreign', rect: [10, 10, 20, 20], locked: true }),
  ];
  const c1 = slipM.carryMarkups(src, 'n:1', { from: olds[1], to: news[1] });
  ok(c1.items.length === 2 && c1.left === 1 && c1.scaled === 0 && c1.items.every((m) => m.sheet === 'n:1' && !m.id) && JSON.stringify(c1.items[0].rect) === JSON.stringify(src[0].rect), 'same page size: markups keep their place; read-only comments stay behind');
  ok(c1.items[0].replies.length === 1 && c1.items[0].replies[0].text === 'Still open' && c1.items[0].punch.n === 4 && c1.sources[0] === src[0].id, 'the thread, status and punch item are carried, and each copy names its source');
  const c2 = slipM.carryMarkups(src, 'n:1', { from: olds[1], to: pg('n:1', 'A-102', 3, 1, 648, 864), skipClosed: true });
  ok(c2.items.length === 1 && c2.closed === 1 && c2.scaled === 1 && c2.items[0].rect[2] === 150, 'skip closed markups; a smaller page scales the markups with it', c2.items[0]?.rect);
  const store = new model.Store();
  store.load(src);
  store.change('slip', (tx) => { c1.items.forEach((it, k) => { tx.add(it); if (it.punch) tx.update(c1.sources[k], { punch: null }); }); tx.add(slipM.supersededStamp(olds[1], { label: EN['slip.superseded'], author, sheet: 'a:1' })); });
  ok(store.onSheet('n:1').length === 2 && !store.get(src[0].id).punch && store.onSheet('a:1').some((m) => m.type === 'stamp' && m.label === 'Superseded'), 'one change: copies added, the punch item moves on, the old sheet stamped');
  store.undo();
  ok(store.onSheet('n:1').length === 0 && store.get(src[0].id).punch.n === 4 && store.onSheet('a:1').length === 3, 'one undo puts everything back');
  for (const rot of [0, 90, 180, 270]) {
    const st = slipM.supersededStamp(pg('r', '', 0, 0, 612, 792, rot), { label: 'Superseded', sheet: 'r' });
    const [x0, y0, x1, y1] = st.rect;
    const top = rot === 0 ? y1 > 700 : rot === 90 ? x0 < 100 : rot === 180 ? y0 < 100 : x1 > 512;
    ok(st.rot === rot && x0 >= 0 && y0 >= 0 && x1 <= 612 && y1 <= 792 && top && ((rot % 180 ? y1 - y0 : x1 - x0) > (rot % 180 ? x1 - x0 : y1 - y0)), 'the Superseded stamp sits across the top of a page turned ' + rot + '°', st.rect);
  }
}

section('Find text across sheets (0.4 K14)');
{
  const d = await PDFLib.PDFDocument.create();
  const font = await d.embedFont(PDFLib.StandardFonts.Helvetica);
  const pg = d.addPage([1296, 864]);
  pg.drawText('VERIFY HOOD SIZE', { x: 100, y: 700, size: 20, font });
  pg.drawText('Walk-in freezer: verify', { x: 100, y: 600, size: 12, font });
  pg.drawText('hood', { x: 900, y: 200, size: 16, font, rotate: PDFLib.degrees(90) });
  pg.drawText('EXHAUST', { x: 300, y: 400, size: 14, font });
  pg.drawText('HOOD', { x: 380, y: 400, size: 14, font });
  const doc = await pdfjs.getDocument({ data: await d.save(), ...docOptions }).promise;
  const items = (await (await doc.getPage(1)).getTextContent()).items;
  const idx = findM.textIndex(items);
  const hits = findM.findHits(idx, 'hood');
  ok(hits.length === 3, 'three hits for "hood", any case, over items and lines', hits.map((h) => h.snippet));
  const h0 = hits[0].rect, w20 = 20 * 0.6;
  ok(h0[0] > 100 + 6 * w20 * 0.8 && h0[0] < 100 + 7 * w20 * 1.3 && h0[1] < 700 && h0[3] > 712 && h0[3] < 722, 'the hit box sits on the word in the line, not the whole line', h0);
  const rot = hits.find((h) => h.rect[0] > 880);
  ok(rot && rot.rect[2] - rot.rect[0] < 20 && rot.rect[3] - rot.rect[1] > 25, 'rotated text: the box runs up the page', rot?.rect);
  ok(findM.findHits(idx, 'HOOD', { matchCase: true }).length === 2 && findM.findHits(idx, 'verify', { wholeWord: true }).length === 2 && findM.findHits(idx, 'erif', { wholeWord: true }).length === 0, 'match case and whole words');
  const phrase = findM.findHits(idx, 'exhaust hood');
  ok(phrase.length === 1 && phrase[0].rect[0] < 305 && phrase[0].rect[2] > 400, 'a phrase over two text items gets one box round both', phrase[0]?.rect);
  ok(findM.findHits(idx, '').length === 0 && findM.findHits(findM.textIndex([]), 'hood').length === 0 && findM.findHits(idx, '(a+') .length === 0, 'empty search, a page with no text, and regex characters are safe');
  const cl = findM.hitCloud(hits[0], { pad: 4, sheet: 's', author });
  ok(cl.type === 'cloudrect' && cl.rect[0] === h0[0] - 4 && cl.rect[3] === h0[3] + 4, 'a cloud round a hit, with room');
  const store = new model.Store();
  const made = store.change('cloud', (tx) => hits.map((h) => tx.add(model.makeMarkup(findM.hitCloud(h, { sheet: 's', author })))));
  ok(made.length === 3 && store.all().length === 3 && (store.undo(), store.all().length === 0), 'Cloud all is one undo step');
  await reader.closePdf(doc);
}

section('Markup layers (0.4 K3)');
{
  const st = new model.Store();
  const a = model.makeMarkup({ sheet: 'L:0', type: 'rect', rect: [50, 50, 150, 120], author, layer: '  Mechanical \u0007' });
  const b = model.makeMarkup({ sheet: 'L:0', type: 'cloudrect', rect: [300, 300, 400, 380], author, layer: 'Architect' });
  const c = model.makeMarkup({ sheet: 'L:0', type: 'text', rect: [60, 400, 260, 430], text: 'no layer', author });
  st.load([a, b, c], {}, {}, [{ name: 'Electrical', hidden: true }, { name: '', hidden: true }, 'junk']);
  ok(a.layer === 'Mechanical' && JSON.stringify(st.layerNames()) === '["Architect","Electrical","Mechanical"]', 'layer names are cleaned; the list is the layers made plus the ones markups name', st.layerNames());
  st.setLayer('Architect', { locked: true }); st.setLayer('Mechanical', { hidden: true });
  ok(!st.shown(a) && st.shown(b) && !st.open(b) && st.open(c), 'hidden layers do not show; locked layers show but do not pick');
  const clip = clipM.makeClip([a]);
  ok(clipM.placeClip(clip, { sheet: 'L:1' })[0].layer === 'Mechanical', 'copy and paste keep the layer');

  const d = await PDFLib.PDFDocument.create();
  d.addPage([612, 792]);
  // the drawing's own layer (a CAD layer exported to PDF) must survive our saves
  const own = d.context.register(d.context.obj({ Type: 'OCG', Name: PDFLib.PDFHexString.fromText('A-WALL') }));
  d.catalog.set(PDFLib.PDFName.of('OCProperties'), d.context.obj({ OCGs: [own], D: { Order: [own] } }));
  const base = await d.save();
  const layers = [{ name: 'Architect', hidden: false, locked: true }, { name: 'Mechanical', hidden: true, locked: false }, { name: 'Électrique', hidden: false, locked: false }];
  const marks = [a, b, c].map((m) => ({ ...m, sheet: 'L:0' }));
  const { bytes } = await writer.writeMarkedUp(PDFLib, base, { pages: [{ index: 0, markups: marks, cal: null }], layers });
  const chk = async (by) => {
    const doc = await PDFLib.PDFDocument.load(by);
    const ocp = doc.catalog.lookup(PDFLib.PDFName.of('OCProperties'));
    const ocgs = ocp.lookup(PDFLib.PDFName.of('OCGs')).asArray().map((r) => doc.context.lookup(r).lookup(PDFLib.PDFName.of('Name')).decodeText());
    const off = (ocp.lookup(PDFLib.PDFName.of('D')).lookup(PDFLib.PDFName.of('OFF'))?.asArray() || []).map((r) => doc.context.lookup(r).lookup(PDFLib.PDFName.of('Name')).decodeText());
    const annots = doc.getPage(0).node.Annots().asArray().map((r) => doc.context.lookup(r)).filter((x) => x.get(PDFLib.PDFName.of('Subtype')) !== PDFLib.PDFName.of('Text'));
    const oc = annots.map((x) => { const r = x.get(PDFLib.PDFName.of('OC')); return r ? doc.context.lookup(r).lookup(PDFLib.PDFName.of('Name')).decodeText() : ''; });
    return { ocgs, off, oc };
  };
  const c1 = await chk(bytes);
  ok(JSON.stringify(c1.ocgs) === '["A-WALL","Architect","Mechanical","Électrique"]' && JSON.stringify(c1.off) === '["Mechanical"]', 'layers become optional content groups beside the drawing\'s own; hidden ones start off', c1);
  ok(JSON.stringify(c1.oc.sort()) === '["","Architect","Mechanical"]', 'each annotation names its layer\'s group (/OC)', c1.oc);
  const re = await open(bytes, 'layers.pdf', 'L');
  ok(re.markups.find((m) => m.id === a.id)?.layer === 'Mechanical' && re.markups.find((m) => m.id === c.id)?.layer === '' && JSON.stringify(re.layers) === JSON.stringify(layers), 'reopen: each markup on its layer, and the layers with their state', re.layers);
  const { bytes: again } = await writer.writeMarkedUp(PDFLib, bytes, { pages: [{ index: 0, markups: re.markups, cal: null }], removeRefs: re.removeRefs, layers: [] });
  const c2 = await chk(again);
  ok(c2.ocgs[0] === 'A-WALL' && JSON.stringify(c2.ocgs.slice().sort()) === '["A-WALL","Architect","Mechanical"]', 'saving again replaces our groups (no duplicates), keeps the drawing\'s, and drops an unused layer', c2.ocgs);
}

section('Arcs and angle measure (0.4 K4)');
{
  const near = (a, b, e = 1e-6) => Math.abs(a - b) < e;
  const q = arcsM.arcThrough([100, 0], [0, 100], [-100, 0]);   // upper half circle, counterclockwise
  ok(q && near(q.c[0], 0) && near(q.c[1], 0) && near(q.r, 100) && near(q.sweep, Math.PI), 'arc through three points: center, radius, a half turn counterclockwise', q);
  const cw = arcsM.arcThrough([-100, 0], [0, 100], [100, 0]);
  ok(cw && near(cw.sweep, -Math.PI), 'the same arc drawn the other way runs clockwise');
  const big = arcsM.arcThrough([100, 0], [0, -100], [0, 100]);
  ok(big && near(Math.abs(big.sweep), 1.5 * Math.PI), 'an arc through the far side is three quarters of a turn');
  ok(arcsM.arcThrough([0, 0], [5, 5], [10, 10]) === null, 'three points in a line make no arc');
  const bz = arcsM.arcBeziers(q);
  const mid = (b, t0) => { const u = 1 - t0; return [0, 1].map((k) => u * u * u * b[0][k] + 3 * u * u * t0 * b[1][k] + 3 * u * t0 * t0 * b[2][k] + t0 * t0 * t0 * b[3][k]); };
  const err = Math.max(...bz.map((b) => Math.abs(Math.hypot(...mid(b, 0.5)) - 100)));
  ok(bz.length === 2 && err < 0.03, 'Bézier pieces stay on the circle (≤ 90° each, error ' + err.toFixed(4) + ' pt)');
  ok(near(arcsM.arcLength(q), Math.PI * 100) && near(arcsM.angleAt([10, 0], [0, 0], [0, 10]), 90) && near(arcsM.angleAt([10, 0], [0, 0], [-10, 0.0]), 180) && arcsM.formatAngle(37.46) === '37.5°', 'arc length, angles and their format');
  const am = model.makeMarkup({ sheet: 'A:0', type: 'arc', pts: [[100, 100], [200, 180], [300, 100]], author });
  const gm = model.makeMarkup({ sheet: 'A:0', type: 'angle', pts: [[400, 100], [300, 300], [500, 300]], author });
  const al = shapesM.shapes(am, {}), gl = shapesM.shapes(gm, {});
  ok(al.length === 1 && al[0].d.some((c) => c[0] === 'C') && gl.find((i) => i.k === 'text')?.lines[0] === arcsM.formatAngle(arcsM.angleAt(...gm.pts)), 'display lists: the arc as curves, the angle with its value', gl.find((i) => i.k === 'text')?.lines);
  ok(geom.grips(am).length === 3 && geom.grips(gm).length === 3, 'three vertex grips each');
  const { bytes } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [am, gm], cal: quarter }] });
  const re = await open(bytes, 'arcs.pdf', 'A');
  const ra = re.markups.find((m) => m.id === am.id), rg = re.markups.find((m) => m.id === gm.id);
  ok(ra?.type === 'arc' && JSON.stringify(ra.pts) === JSON.stringify(am.pts) && rg?.type === 'angle' && JSON.stringify(rg.pts) === JSON.stringify(gm.pts), 'arc and angle reopen exactly');
  const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
  const an = (await (await doc.getPage(1)).getAnnotations({ intent: 'any' })).filter((x) => x.subtype === 'PolyLine');
  ok(an.length === 2 && an.some((x) => x.contentsObj?.str === arcsM.formatAngle(arcsM.angleAt(...gm.pts))) && an.some((x) => (x.vertices || []).length > 8), 'other viewers get PolyLines: the arc along its curve, the angle with its value as text', an.map((x) => x.contentsObj?.str));
  await reader.closePdf(doc);
}

section('Pictures and signatures (0.4 K5)');
{
  const cv = createCanvas(120, 60);
  const g = cv.getContext('2d');
  g.fillStyle = '#ff0000'; g.fillRect(0, 0, 60, 60); g.fillStyle = '#0000ff'; g.fillRect(60, 0, 60, 60);   // red left, blue right
  const png = 'data:image/png;base64,' + Buffer.from(await cv.encode('png')).toString('base64');
  const jpg = 'data:image/jpeg;base64,' + Buffer.from(await cv.encode('jpeg', 90)).toString('base64');
  const pi = picM.imageInfo(png), ji = picM.imageInfo(jpg);
  ok(pi?.width === 120 && pi.height === 60 && ji?.width === 120 && ji.height === 60, 'PNG and JPEG sizes read from their headers');
  ok(picM.cleanImage('data:image/svg+xml;base64,PHN2Zz4=') === '' && picM.cleanImage('data:image/png;base64,' + Buffer.from('not a png at all, really').toString('base64')) === '' && picM.cleanImage('javascript:alert(1)') === '' && picM.cleanImage(png) === png, 'only real PNG and JPEG data pass (SVG, fakes and scripts refused)');
  ok(JSON.stringify(picM.fitBox(120, 60, 216, 864).map(Math.round)) === '[216,108]' && JSON.stringify(picM.placeRect([100, 100], 40, 20, 90)) === '[90,80,110,120]', 'fit keeps proportions; a turned page turns the box');
  const im = model.makeMarkup({ sheet: 'I:0', type: 'image', rect: [100, 600, 316, 708], img: png, label: 'Logo', author });
  ok(model.geometryOk(im) && !model.geometryOk({ ...im, img: '' }) && shapesM.shapes(im, {}).some((i) => i.k === 'image'), 'an image markup needs its picture; its display list carries it');
  ok(clipM.placeClip(clipM.makeClip([im]), { sheet: 'I:1' })[0].img === png, 'copy and paste keep the picture');
  const d = await PDFLib.PDFDocument.create(); d.addPage([612, 792]);
  const base = await d.save();
  const { bytes, report } = await writer.writeMarkedUp(PDFLib, base, { pages: [{ index: 0, markups: [im], cal: null }] });
  const re = await open(bytes, 'pic.pdf', 'I');
  ok(report.written === 1 && re.markups[0]?.type === 'image' && re.markups[0].img === png && re.markups[0].label === 'Logo', 'the picture reopens exactly (type, data, label)');
  const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
  const pg = await doc.getPage(1);
  const vp = pg.getViewport({ scale: 1 });
  const c2 = createCanvas(vp.width, vp.height);
  await pg.render({ canvasContext: c2.getContext('2d'), viewport: vp, annotationMode: pdfjs.AnnotationMode.ENABLE }).promise;
  const px = (x, y) => Array.from(c2.getContext('2d').getImageData(x, 792 - y, 1, 1).data.slice(0, 3));
  const L = px(150, 654), R = px(270, 654);
  ok(L[0] > 200 && L[2] < 60 && R[2] > 200 && R[0] < 60, 'other viewers paint it: red on the left, blue on the right, the right way up', { L, R });
  await reader.closePdf(doc);
  const { bytes: flat, report: fr } = await writer.writeMarkedUp(PDFLib, base, { pages: [{ index: 0, markups: [{ ...im, rot: 90, rect: [100, 500, 208, 716] }], cal: null }], flatten: 'all' });
  const fdoc = await pdfjs.getDocument({ data: flat.slice(), ...docOptions }).promise;
  const fpg = await fdoc.getPage(1);
  const c3 = createCanvas(612, 792);
  await fpg.render({ canvasContext: c3.getContext('2d'), viewport: fpg.getViewport({ scale: 1 }) }).promise;
  const q = (x, y) => Array.from(c3.getContext('2d').getImageData(x, 792 - y, 1, 1).data.slice(0, 3));
  // turned 90° (the page reads with its left edge on top): the picture's left (red) half is at the bottom of the box
  ok(fr.flattened === 1 && q(154, 550)[0] > 200 && q(154, 670)[2] > 200, 'flattened and turned with the page', { lo: q(154, 550), hi: q(154, 670) });
  await reader.closePdf(fdoc);
}

section('Markup summary as XLSX and PDF (0.4 K6)');
{
  const ms = all.map((m, i) => ({ ...m, sheet: i < 8 ? 'S:0' : 'S:1', replies: i === 2 ? [{ id: 'r1', author: 'Ann', text: 'Looks right', kind: 'comment', date: '2026-10-12T10:00:00Z' }] : [] }));
  const sheetOf = (m) => (m.sheet === 'S:0' ? { title: 'A-101 — Plan', file: 'set.pdf', page: 1 } : { title: 'A-102 — Details', file: 'set.pdf', page: 2 });
  const sheets = sumM.summarySheets(ms, { sheetOf, measureOf: (m) => (m.type === 'measure' ? `12'-0"` : '') });
  ok(sheets.length === 3 && sheets[0].rows.length === ms.length + 1 && sheets[1].rows.length === 4 && sheets[2].rows.length === 2, 'three sheets: every markup, a row per sheet + total, the punch list', sheets.map((x) => x.rows.length));
  const total = sheets[1].rows.at(-1);
  ok(total[3].v === ms.length && total[3].f === 'SUM(D2:D3)' && total[4].v + total[5].v === ms.length, 'the totals are live formulas with their values', total.slice(3, 6));
  const xbytes = await xlsxM.writeXlsx(sheets, { title: 'Summary', compress: false });
  const files = bcfM.unzip(xbytes);
  const sh1 = new TextDecoder().decode(files.get('xl/worksheets/sheet1.xml').data);
  ok(files.has('xl/workbook.xml') && /Move prep sink 6&quot; east|Move prep sink 6" east/.test(sh1) && /Looks right/.test(sh1) && [...files.values()].every((f) => f.crcOk), 'the workbook holds the markups, text escaped, the last reply too');
  const { bytes, missing, pages } = await sumM.summaryPdf(PDFLib, [...ms, ...ms, ...ms, ...ms, ...ms], { sheetOf, title: 'Example kitchen', date: new Date('2026-10-13T00:00:00Z') });
  const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
  const txt = (await (await doc.getPage(1)).getTextContent()).items.map((i) => i.str).join(' ');
  const last = (await (await doc.getPage(doc.numPages)).getTextContent()).items.map((i) => i.str).join(' ');
  ok(pages >= 2 && doc.numPages === pages && /Example kitchen/.test(txt) && /2026-10-13, 75 markups/.test(txt) && /Text or comment/.test(txt) && new RegExp('Page ' + pages + ' of ' + pages).test(last), 'the PDF report: title block, table header on each page, page numbers', { pages, missing });
  ok(missing > 0 && /Move prep sink/.test(txt), 'characters outside WinAnsi are counted, not dropped silently (✓ in a callout)', missing);
  await reader.closePdf(doc);
}

section('BCF import (0.4 K7)');
{
  const ms = [all[2], all[10]].map((m) => ({ ...m, sheet: 'B:0', replies: [{ id: 'r1', author: 'Ann', text: 'Check the hood', kind: 'comment', date: '2026-10-12T10:00:00Z', status: '' }] }));
  const topics = ms.map((m) => ({ markup: m, sheetTitle: 'A-101 — Plan', fileName: 'set.pdf', value: '', box: m.rect || [600, 1200, 900, 1300], png: null }));
  const { bytes } = await bcfM.buildBcf(topics, { project: 'Example kitchen' });
  const ours = await bcfIn.readBcf(bytes);
  ok(ours.version === '2.1' && ours.project === 'Example kitchen' && ours.topics.length === 2 && ours.topics.every((tp) => tp.comments.length === 1 && tp.camera), 'our own export reads back: project, topics, comments, cameras', ours.topics.map((x) => x.title));
  const guidOf = new Map(), replyGuids = new Set();
  for (const m of ms) { guidOf.set(await bcfM.guidFor('topic:' + m.id), m.id); for (const r of m.replies) replyGuids.add(await bcfM.guidFor('comment:' + m.id + ':' + r.id)); }
  const sheetsCtx = [{ key: 'B:0', title: 'A-101 — Plan', sheetNo: 'A-101', file: 'set.pdf', view: [0, 0, 1296, 1728] }, { key: 'B:1', title: 'A-102 — Details', sheetNo: 'A-102', file: 'set.pdf', view: [0, 0, 1296, 1728] }];
  const same = bcfIn.planImport(ours, { markups: ms, guidOf, replyGuids, sheets: sheetsCtx, current: 'B:1' });
  ok(same.matched === 2 && same.updates.length === 0 && same.adds.length === 0, 'importing our own export again changes nothing (no duplicate replies)');
  // the BIM tool answered: a new comment and a closed status on the first topic, written as BCF 3.0, deflated, with CDATA and entities
  const g0 = await bcfM.guidFor('topic:' + ms[0].id);
  const g1 = '0f3c2a9e-1111-4a2b-9c3d-123456789abc';
  const mk = (g, title, extra) => `<?xml version="1.0" encoding="UTF-8"?><Markup><Topic Guid="${g}" TopicType="Issue" TopicStatus="${extra.status}"><Title>${title}</Title><Labels><Label>A-102</Label></Labels><CreationDate>2026-10-13T08:00:00Z</CreationDate><CreationAuthor>bim@example.com</CreationAuthor><Description><![CDATA[Duct <clash> & beam]]></Description><Comments><Comment Guid="${extra.cg}"><Date>2026-10-13T09:00:00Z</Date><Author>Ben</Author><Comment>Fixed in model rev &amp; 3 &#8212; ok</Comment></Comment></Comments><Viewpoints><ViewPoint Guid="${g}"><Viewpoint>vp.bcfv</Viewpoint></ViewPoint></Viewpoints></Topic></Markup>`;
  const vp = `<?xml version="1.0"?><VisualizationInfo><PerspectiveCamera><CameraViewPoint><X>12.5</X><Y>-3</Y><Z>4</Z></CameraViewPoint></PerspectiveCamera></VisualizationInfo>`;
  const z = await xlsxM.zip([{ name: 'bcf.version', data: '<Version VersionId="3.0"/>' }, { name: g0 + '/markup.bcf', data: mk(g0, 'Hood', { status: 'Closed', cg: 'aaaaaaaa-0000-4000-8000-000000000001' }) },
    { name: g1 + '/markup.bcf', data: mk(g1, 'Duct clash', { status: 'Active', cg: 'aaaaaaaa-0000-4000-8000-000000000002' }) }, { name: g1 + '/vp.bcfv', data: vp }, { name: 'evil/markup.bcf', data: '<Markup><Topic Guid="../../x">' }], { compress: true });
  const theirs = await bcfIn.readBcf(z);
  const t1 = theirs.topics.find((x) => x.guid === g1);
  ok(theirs.version === '3.0' && theirs.topics.length === 2 && theirs.skipped === 1 && t1.description === 'Duct <clash> & beam' && t1.comments[0].text === 'Fixed in model rev & 3 — ok' && t1.camera?.x === 12.5, 'a deflated BCF 3.0 file: CDATA and entities read, a topic with a bad GUID skipped', theirs.topics.map((x) => x.title));
  const plan = bcfIn.planImport(theirs, { markups: ms, guidOf, replyGuids, sheets: sheetsCtx, current: 'B:0', author: 'Me' });
  const up = plan.updates[0];
  ok(plan.matched === 1 && up?.id === ms[0].id && up.patch.status === 'Completed' && up.patch.replies.length === 2 && up.patch.replies[1].author === 'Ben', 'their reply and "Closed" come back onto our markup', up?.patch);
  const add = plan.adds[0];
  ok(plan.added === 1 && add.sheet === 'B:1' && add.type === 'note' && /Duct clash\nDuct <clash> & beam/.test(add.comment) && add.status === 'Open' && plan.unplaced === 1, 'a new issue becomes a note on the sheet its label names (a model camera has no place on paper: stacked at the top left)', add);
  const st = new model.Store(); st.load(ms);
  st.change('bcf', (tx) => { for (const u of plan.updates) tx.update(u.id, u.patch); for (const a of plan.adds) tx.add(model.makeMarkup(a)); });
  ok(st.all().length === 3 && (st.undo(), st.all().length === 2 && st.get(ms[0].id).replies.length === 1), 'the import is one undo step');
  let bad = '';
  try { await bcfIn.readBcf(new Uint8Array([1, 2, 3])); } catch (e) { bad = e.code; }
  ok(bad === 'zip', 'not a zip → refused');
}

section('Area cut-outs (0.4 K8)');
{
  const outer = [[100, 100], [388, 100], [388, 244], [100, 244]];          // 16' × 8' at 1/4" = 128 sq ft
  const hole = [[150, 150], [222, 150], [222, 222], [150, 222]];            // 4' × 4' = 16 sq ft
  ok(holesM.holeProblem(outer, [], hole) === null, 'a cut-out inside the area is accepted');
  ok(holesM.holeProblem(outer, [], [[90, 150], [198, 150], [198, 198]]) === 'hole.err.outside' && holesM.holeProblem(outer, [hole], [[160, 160], [250, 160], [250, 220], [160, 220]]) === 'hole.err.overlap'
    && holesM.holeProblem(outer, [], [[200, 150], [260, 210], [260, 150], [200, 210]]) === 'hole.err.cross' && holesM.holeProblem(outer, [], [[1, 1], [2, 2]]) === 'hole.err.points', 'refused: outside, overlapping, crossing itself, too few corners');
  const v = units.measureArea(outer, quarter, [hole]);
  ok(v.area === '112.00 sq ft' && v.perimeter === `64'-0"`, '128 − 16 = 112 sq ft; the perimeter runs round the cut-out too (48 + 16 ft)', v);
  const am = model.makeMarkup({ sheet: 'H:0', type: 'area', pts: outer, holes: [hole], author });
  const fill = shapesM.shapes(am, { cal: quarter }).find((i) => i.fill);
  ok(fill.rule === 'evenodd' && fill.d.filter((c) => c[0] === 'M').length === 2, 'drawn as one even-odd path: the cut-out stays open');
  ok(JSON.stringify(geom.moveBy(am, 10, 5).holes[0][0]) === '[160,155]' && JSON.stringify(clipM.placeClip(clipM.makeClip([am]), { sheet: 'H:1', delta: [1, 1] })[0].holes[0][0]) === '[151,151]', 'moving and pasting carry the cut-outs');
  const { bytes } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [am], cal: quarter }] });
  const re = await open(bytes, 'holes.pdf', 'H');
  ok(JSON.stringify(re.markups[0]?.holes) === JSON.stringify([hole]), 'cut-outs reopen exactly');
  const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
  const an = (await (await doc.getPage(1)).getAnnotations({ intent: 'any' })).find((x) => x.subtype === 'Polygon');
  ok(/112\.00 sq ft/.test(an?.contentsObj?.str || ''), 'other viewers read the net area in the comment text', an?.contentsObj?.str);
  await reader.closePdf(doc);
  ok(holesM.cleanHoles([[[0, 0], [1, 0], [1, 'x']], [[0, 0], [1, 0], [1, 1]], 'junk']).length === 1, 'cut-outs from a file are checked');
}

section('Sheet links (0.4 K9) and auto-link (K16)');
{
  const sh = [{ key: 'L:0', sheetNo: 'A-101', title: 'A-101 — Plan' }, { key: 'L:1', sheetNo: 'A-501', title: 'A-501 — Details' }, { key: 'M:0', sheetNo: 'A501', title: 'A501 — Details rev' }, { key: 'L:2', sheetNo: '', title: 'Cover' }];
  ok(linkM.linkTarget('a-501', sh)?.key === 'M:0' && linkM.linkTarget('Cover', sh)?.key === 'L:2' && linkM.linkTarget('Z-9', sh) === null, 'a link finds its sheet by number (newest copy), or by title for a sheet with no number');
  const refs = linkM.calloutRefs('SEE 3/A-501 AND DETAIL 2 / A501. ALSO A-999 AND A-101.', ['A-101', 'A-501']);
  ok(refs.map((r) => r.ref + '>' + r.no).join('|') === '3/A-501>A-501|2 / A501>A-501|A-101>A-101', 'callouts read with or without a detail number; unknown sheets left out', refs.map((r) => r.ref));
  // a two-page file: a linked markup on page 1 → a real Link annotation to page 2, replaced (not added) on each save
  const d = await PDFLib.PDFDocument.create(); d.addPage([612, 792]); d.addPage([612, 792]);
  const base = await d.save();
  const lm = model.makeMarkup({ sheet: 'K:0', type: 'rect', rect: [100, 100, 200, 150], author, link: 'A-501' });
  const write = (b, ms, refs2) => writer.writeMarkedUp(PDFLib, b, { pages: [{ index: 0, markups: ms, cal: null }], removeRefs: refs2, linkPage: (l) => (l === 'A-501' ? 1 : null) });
  const { bytes: b1 } = await write(base, [lm]);
  const r1 = await open(b1, 'links.pdf', 'K');
  const links = async (b) => { const doc = await PDFLib.PDFDocument.load(b); return doc.getPage(0).node.Annots().asArray().map((r) => doc.context.lookup(r)).filter((x) => x.get(PDFLib.PDFName.of('Subtype')) === PDFLib.PDFName.of('Link')).map((x) => doc.getPages().findIndex((p) => p.ref === x.lookup(PDFLib.PDFName.of('A')).lookup(PDFLib.PDFName.of('D')).get(0))); };
  ok(JSON.stringify(await links(b1)) === '[1]' && r1.markups[0]?.link === 'A-501' && r1.markups.length === 1, 'saved: the link reopens, and other viewers get a Link to page 2 (not read back as a markup)');
  const { bytes: b2 } = await write(b1, r1.markups, r1.removeRefs);
  ok(JSON.stringify(await links(b2)) === '[1]', 'saving again keeps one Link, not two');
  // auto-link boxes come from the text positions
  const pd = await PDFLib.PDFDocument.create();
  const font = await pd.embedFont(PDFLib.StandardFonts.Helvetica);
  pd.addPage([1296, 864]).drawText('SEE 3/A-501 FOR DETAILS', { x: 300, y: 400, size: 12, font });
  const doc = await pdfjs.getDocument({ data: await pd.save(), ...docOptions }).promise;
  const idx = findM.textIndex((await (await doc.getPage(1)).getTextContent()).items);
  const rr = linkM.calloutRefs(idx.text, ['A-501'])[0];
  const box = findM.rangeBox(idx, rr.start, rr.end);
  ok(box && box[0] > 320 && box[2] < 380 && box[1] < 400 && box[3] > 408, 'the callout\'s box sits on "3/A-501" only', box);
  await reader.closePdf(doc);
}

section('Spaces (0.4 K17)');
{
  const wing = model.makeMarkup({ sheet: 'P:0', type: 'space', pts: [[0, 0], [600, 0], [600, 600], [0, 600]], label: 'East wing', author });
  const room = model.makeMarkup({ sheet: 'P:0', type: 'space', pts: [[100, 100], [300, 100], [300, 300], [100, 300]], label: 'Kitchen', author });
  const inRoom = model.makeMarkup({ sheet: 'P:0', type: 'cloudrect', rect: [150, 150, 250, 250], author });
  const inWing = model.makeMarkup({ sheet: 'P:0', type: 'note', pts: [[500, 500]], author });
  const out = model.makeMarkup({ sheet: 'P:0', type: 'rect', rect: [700, 700, 800, 800], author });
  const bo = (m) => shapesM.listBounds(shapesM.shapes(m, {}));
  ok(spacesM.spaceOf(inRoom, [wing, room], bo) === 'Kitchen' && spacesM.spaceOf(inWing, [wing, room], bo) === 'East wing' && spacesM.spaceOf(out, [wing, room], bo) === '' && spacesM.spaceOf(room, [wing, room], bo) === '', 'a markup is in the smallest space holding its middle; spaces are in none');
  ok(shapesM.shapes(room, {}).some((i) => i.dash) && shapesM.shapes(room, {}).some((i) => i.k === 'text' && i.lines[0] === 'Kitchen'), 'a space draws dashed with its name');
  const rows = csvM.markupRows([inRoom, out], () => ({ title: 'P', file: 'p.pdf', page: 1 }), () => '', (m) => spacesM.spaceOf(m, [wing, room], bo));
  ok(rows[0].at(-1) === 'Space' && rows[1].at(-1) === 'Kitchen' && rows[2].at(-1) === '', 'CSV gets a Space column when the set has spaces');
  ok(csvM.markupRows([inRoom], () => ({}))[0].length === 17, 'without spaces the CSV keeps its columns');
  const { bytes } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [room], cal: null }] });
  const re = await open(bytes, 'spaces.pdf', 'P');
  ok(re.markups[0]?.type === 'space' && re.markups[0].label === 'Kitchen', 'a space reopens with its name');
}

section('Sketch to scale (0.4 K18)');
{
  const near = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]) < 1e-6;
  const a = sketchM.sketchPoint([100, 100], [500, 100], `16'`, quarter, 0);
  ok(near(a.pt, [388, 100]), '16\' at 1/4" = 1\'-0" is 288 pt along the pointer\'s direction', a);
  ok(near(sketchM.sketchPoint([100, 100], [500, 100], '8 < 90', quarter, 0).pt, [100, 244]), 'a bare number is in the sheet\'s unit (feet); "< 90" is straight up');
  ok(near(sketchM.sketchPoint([100, 100], [0, 0], `4'@0`, quarter, 90).pt, [100, 172]), 'on a page turned 90°, "right as seen" is user +y');
  ok(near(sketchM.sketchPoint([0, 0], [1, 0], '1 m', units.presetCalibration('1:100', 100, 'mm'), 0).pt, [1000 / (25.4 / 72 * 100), 0]), 'metric: 1 m at 1:100');
  ok(sketchM.sketchPoint([0, 0], [1, 0], 'abc', quarter).error === 'sketch.err.length' && sketchM.sketchPoint([0, 0], [1, 0], '4<x', quarter).error === 'sketch.err.angle'
    && sketchM.sketchPoint([0, 0], [0, 0], '4', quarter).error === 'sketch.err.direction' && sketchM.sketchPoint([0, 0], [1, 0], '4', null).error === 'sketch.err.scale', 'bad lengths, angles, no direction and no scale are refused with a reason');
}

section('Custom columns (0.4 K19)');
{
  const cols = colsM.cleanColumns([{ key: 'c1', name: 'Trade', type: 'choice', choices: ['Mechanical', 'Electrical', 'Mechanical', ''] }, { key: 'c2', name: ' Cost ', type: 'number' }, { key: 'c3', name: 'Due', type: 'date' }, { key: 'x', name: 'bad key' }, { key: 'c4', name: '' }, 'junk']);
  ok(cols.length === 3 && JSON.stringify(cols[0].choices) === '["Mechanical","Electrical"]' && cols[1].name === 'Cost', 'columns from a file are checked (keys, names, choices)', cols);
  ok(colsM.fieldOk(cols[1], '1,250.5') === '' && colsM.fieldOk(cols[1], 'lots') === 'col.err.number' && colsM.fieldOk(cols[2], '2026-11-01') === '' && colsM.fieldOk(cols[2], 'Nov 1') === 'col.err.date' && colsM.fieldOk(cols[0], 'Plumbing') === 'col.err.choice' && colsM.fieldOk(cols[0], '') === '', 'values must fit their column');
  const ms = [{ fields: { c2: '20' } }, { fields: { c2: '3' } }, { fields: {} }, { fields: { c2: '100' } }];
  ok(ms.slice().sort(colsM.compareBy(cols[1])).map((m) => m.fields.c2 ?? '-').join() === '3,20,100,-', 'numbers sort as numbers, empty values last');
  ok(JSON.stringify(colsM.cleanFields({ c1: 'Electrical', c2: '\u0007 12 ', zz: 'no', c9: '' })) === '{"c1":"Electrical","c2":"12"}', 'field values cleaned');
  ok(colsM.newColumnKey(cols) === 'c4', 'a new column gets an unused key');
  const m = model.makeMarkup({ sheet: 'Q:0', type: 'rect', rect: [10, 10, 60, 60], author, fields: { c1: 'Electrical', c2: '12' } });
  const rows = csvM.markupRows([m], () => ({}), () => '', null, cols);
  ok(rows[0].slice(-3).join() === 'Trade,Cost,Due' && rows[1].slice(-3).join() === 'Electrical,12,', 'CSV gets the columns, named, after the usual ones');
  const st = new model.Store(); st.load([], {}, {}, [], cols); st.load([], {}, {}, [], [{ key: 'c1', name: 'Trade', type: 'text' }, { key: 'c7', name: 'Floor', type: 'text' }]);
  ok(st.columns.map((c) => c.name).join() === 'Trade,Cost,Due,Floor', 'opening a second file adds its new columns, keeps the first file\'s');
  const { bytes } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [m], cal: null }], columns: cols });
  const re = await open(bytes, 'cols.pdf', 'Q');
  ok(JSON.stringify(re.markups[0].fields) === '{"c1":"Electrical","c2":"12"}' && re.columns.length === 3 && re.columns[0].choices.length === 2, 'values and columns reopen from the PDF');
}

section('Photos on markups (0.4 K20)');
{
  const cv = createCanvas(64, 48); const g = cv.getContext('2d'); g.fillStyle = '#336699'; g.fillRect(0, 0, 64, 48);
  const jpg = 'data:image/jpeg;base64,' + Buffer.from(await cv.encode('jpeg', 85)).toString('base64');
  const r = model.cleanReply({ author: 'Site', text: '', kind: 'comment', photo: jpg });
  ok(r && r.photo === jpg && model.cleanReply({ author: 'x', text: '', kind: 'comment', photo: 'data:image/svg+xml;base64,AAAA' }) === null, 'a reply can be just a photo; not-a-photo is refused');
  const m = model.makeMarkup({ sheet: 'F:0', type: 'cloudrect', rect: [100, 100, 300, 200], author, replies: [r, { author: 'Ann', text: 'Crack at the base', kind: 'comment', photo: jpg }] });
  const { bytes, report } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [m], cal: null }] });
  const re = await open(bytes, 'photos.pdf', 'F');
  ok(report.photos === 2 && re.markups.length === 1 && re.markups[0].replies.length === 2 && re.markups[0].replies.every((x) => x.photo === jpg) && re.markups[0].replies[1].text === 'Crack at the base', 'photos come back on their replies (and the attachments are not read as markups)');
  const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
  const fa = (await (await doc.getPage(1)).getAnnotations({ intent: 'any' })).filter((x) => x.subtype === 'FileAttachment');
  const raw = Buffer.from(jpg.split(',')[1], 'base64');
  const ld = await PDFLib.PDFDocument.load(bytes);
  const efs = ld.getPage(0).node.Annots().asArray().map((x) => ld.context.lookup(x)).filter((x) => x.get(PDFLib.PDFName.of('Subtype')) === PDFLib.PDFName.of('FileAttachment'))
    .map((x) => Buffer.from(PDFLib.decodePDFRawStream(x.lookup(PDFLib.PDFName.of('FS')).lookup(PDFLib.PDFName.of('EF')).lookup(PDFLib.PDFName.of('F'))).decode()));
  ok(fa.length === 2 && efs.length === 2 && efs.every((b) => b.equals(raw)) && /Crack at the base-.*\.jpg$/.test(fa.map((x) => x.file.filename).join()), 'other viewers get each photo as an attached file (the same bytes, named from its caption)', fa.map((x) => x.file?.filename));
  await reader.closePdf(doc);
  const { bytes: again } = await writer.writeMarkedUp(PDFLib, bytes, { pages: [{ index: 0, markups: re.markups, cal: null }], removeRefs: re.removeRefs });
  const doc2 = await pdfjs.getDocument({ data: again.slice(), ...docOptions }).promise;
  ok((await (await doc2.getPage(1)).getAnnotations({ intent: 'any' })).filter((x) => x.subtype === 'FileAttachment').length === 2, 'saving again keeps two attachments, not four');
  await reader.closePdf(doc2);
}

section('Compare by vector paths (0.4 K12)');
{
  const mk = async (draw) => { const d = await PDFLib.PDFDocument.create(); const pg = d.addPage([1296, 864]); draw(pg); return d.save(); };
  const base = (pg) => {
    pg.drawRectangle({ x: 100, y: 100, width: 400, height: 300, borderColor: PDFLib.rgb(0, 0, 0), borderWidth: 1 });
    pg.drawLine({ start: { x: 600, y: 100 }, end: { x: 900, y: 100 }, thickness: 1 });
    pg.drawCircle({ x: 1000, y: 600, size: 50, borderColor: PDFLib.rgb(0, 0, 0), borderWidth: 1 });
  };
  const oldB = await mk(base);
  const newB = await mk((pg) => { base(pg); pg.drawLine({ start: { x: 600, y: 400 }, end: { x: 800, y: 400 }, thickness: 1 }); });   // one line added
  const segsOf = async (b) => { const doc = await pdfjs.getDocument({ data: b.slice(), ...docOptions }).promise; const s = vdM.pageSegments(await (await doc.getPage(1)).getOperatorList(), pdfjs.OPS); await reader.closePdf(doc); return s; };
  const so = await segsOf(oldB), sn = await segsOf(newB);
  ok(so.length >= 4 + 1 + 8 && sn.length === so.length + 1, 'paths become segments (curves cut into pieces)', { old: so.length, new: sn.length });
  const d1 = vdM.diffSegments(so, sn, { tol: 1.5 });
  const addLen = d1.added.reduce((a, s) => a + Math.hypot(s[2] - s[0], s[3] - s[1]), 0);
  ok(d1.removed.length === 0 && Math.abs(addLen - 200) < 6 && d1.added.every((s) => Math.abs(s[1] - 400) < 1), 'an added line is found, and only it (≈ 200 pt along y = 400)', { add: addLen.toFixed(1), removed: d1.removed.length });
  // a line shortened: only the missing part shows as removed
  const shorter = await mk((pg) => { pg.drawRectangle({ x: 100, y: 100, width: 400, height: 300, borderColor: PDFLib.rgb(0, 0, 0), borderWidth: 1 }); pg.drawLine({ start: { x: 600, y: 100 }, end: { x: 750, y: 100 }, thickness: 1 }); pg.drawCircle({ x: 1000, y: 600, size: 50, borderColor: PDFLib.rgb(0, 0, 0), borderWidth: 1 }); });
  const d2 = vdM.diffSegments(so, await segsOf(shorter), { tol: 1.5 });
  const remX = d2.removed.flatMap((s) => [s[0], s[2]]);
  ok(d2.added.length === 0 && Math.min(...remX) > 745 && Math.max(...remX) <= 900.1, 'a shortened line shows only its missing part (x 750–900)', { from: Math.min(...remX), to: Math.max(...remX) });
  // the whole sheet moved 6 pt: without the alignment everything differs, with it nothing does
  const moved = await mk((pg) => { pg.pushOperators(PDFLib.pushGraphicsState(), PDFLib.concatTransformationMatrix(1, 0, 0, 1, 6, -4)); base(pg); pg.pushOperators(PDFLib.popGraphicsState()); });
  const sm = await segsOf(moved);
  const raw3 = vdM.diffSegments(so, sm, { tol: 1.5 }), al3 = vdM.diffSegments(so, sm, { tol: 1.5, T: [1, 0, 0, 1, 6, -4] });
  ok(raw3.removed.length > 10 && al3.removed.length === 0 && al3.added.length === 0, 'transforms are followed; with the compare alignment a moved sheet shows no changes');
  const boxes = vdM.clusters([...d1.added, [100, 700, 110, 700], [112, 700, 120, 700], [400, 800, 401, 800]], { gap: 18, minLen: 6 });
  ok(boxes.length === 2 && boxes.some((b) => b[0] >= 599 && b[2] <= 801) && boxes.some((b) => b[0] === 100 && b[2] === 120), 'changes group into boxes to cloud; a speck (1 pt) is left out', boxes);
}

section('Markup legend (0.4 K21)');
{
  const mk = (type, sheet, extra = {}) => model.makeMarkup({ sheet, type, rect: [10, 10, 50, 50], pts: [[10, 10], [60, 60], [90, 10]], author, ...extra });
  const ms = [mk('cloudrect', 'G:0'), mk('cloudrect', 'G:0'), mk('cloudrect', 'G:0', { subject: 'Question', style: { color: '#1e48c8' } }), mk('count', 'G:0', { label: 'Outlets' }), mk('rect', 'G:1'), mk('space', 'G:0', { label: 'Room' })];
  const name = (m) => model.TYPES[m.type].name;
  const sheetRows = legM.legendRows(ms, { sheet: 'G:0', scope: 'sheet', name });
  ok(JSON.stringify(sheetRows.map((r) => r.label + '=' + r.n)) === JSON.stringify(['Count=3', 'Cloud=2', 'Question=1']), 'rows: by subject and color, a count group counts its marks, spaces left out, most first', sheetRows);
  ok(legM.legendRows(ms, { sheet: 'G:0', scope: 'set', name }).some((r) => r.label === 'Rectangle'), 'the whole set when asked');
  const lg = model.makeMarkup({ sheet: 'G:0', type: 'legend', rect: [600, 400, 830, 600], label: 'Review legend', author, legend: { scope: 'sheet' } });
  const list = shapesM.shapes(lg, { legend: sheetRows });
  const words = list.filter((i) => i.k === 'text').map((i) => i.lines[0]);
  ok(words[0] === 'Review legend' && words.includes('Count') && words.includes('3') && words.includes('Question'), 'the legend draws its title, names and counts', words);
  const e1 = { legend: sheetRows, legendKey: legM.rowsKey(sheetRows) }, e2 = { legend: sheetRows.slice(1), legendKey: legM.rowsKey(sheetRows.slice(1)) };
  ok(geom.displayOf(lg, e1).list !== geom.displayOf(lg, e2).list, 'it redraws when the counts change (rows are part of the drawing cache key)');
  const { bytes } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: [lg], cal: null, legendOf: () => sheetRows }] });
  const re = await open(bytes, 'legend.pdf', 'G');
  const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
  const sq = (await (await doc.getPage(1)).getAnnotations({ intent: 'any' })).find((x) => x.subtype === 'Square');
  ok(re.markups[0]?.type === 'legend' && re.markups[0].legend.scope === 'sheet' && /Review legend\nCount: 3\nCloud: 2/.test(sq?.contentsObj?.str || ''), 'saved: other viewers get the counts as the comment text; it reopens as a legend', sq?.contentsObj?.str);
  await reader.closePdf(doc);
}

section('Bookmarks (0.4 K24)');
{
  const d = await PDFLib.PDFDocument.create(); for (let i = 0; i < 4; i++) d.addPage([612, 792]);
  const items = [{ title: 'Architectural', page: 0, children: [{ title: 'A-101 — Plan', page: 1, children: [] }, { title: 'A-102 — Détails', page: 2, children: [] }] }, { title: 'Mechanical', page: 3, children: [] }];
  bmM.writeOutline(PDFLib, d, items);
  const bytes = await d.save();
  const doc = await pdfjs.getDocument({ data: bytes.slice(), ...docOptions }).promise;
  const back = await bmM.readOutline(doc);
  ok(JSON.stringify(back) === JSON.stringify(items), 'bookmarks written as a PDF outline read back the same (nesting, pages, accents)', back);
  await reader.closePdf(doc);
  const d2 = await PDFLib.PDFDocument.load(bytes); bmM.writeOutline(PDFLib, d2, []);
  const doc2 = await pdfjs.getDocument({ data: (await d2.save()).slice(), ...docOptions }).promise;
  ok((await bmM.readOutline(doc2)).length === 0, 'an empty list removes the outline');
  await reader.closePdf(doc2);
  ok(JSON.stringify(bmM.fromSheets([{ index: 0, title: 'A-101 — Plan' }])) === '[{"title":"A-101 — Plan","page":0,"children":[]}]' && bmM.count(items) === 4, 'built from the sheets; counted with children');
  ok(bmM.cleanBookmarks([{ title: ' x\u0007 ', page: 'no' }, { title: '' }, 5]).length === 1 && bmM.cleanBookmarks([{ title: 'a', page: 2.5 }])[0].page === -1, 'bookmarks from data are checked');
}

section('Blank pages: File › New (owner, 2026-10-15)');
{
  // paper sizes in PDF points (72 per inch, 72/25.4 per mm), portrait
  const want = { letter: [612, 792], tabloid: [792, 1224], 'arch-d': [1728, 2592], 'arch-e': [2592, 3456], a4: [595.28, 841.89], a3: [841.89, 1190.55], a1: [1683.78, 2383.94] };
  ok(JSON.stringify(Object.keys(blankM.PAPERS)) === JSON.stringify(Object.keys(want)), 'seven papers: Letter, Tabloid/ANSI B, ARCH D, ARCH E, A4, A3, A1');
  ok(Object.entries(want).every(([k, [w, h]]) => near(blankM.PAPERS[k].w, w, 0.01) && near(blankM.PAPERS[k].h, h, 0.01)), 'paper sizes in points', blankM.PAPERS);
  const c = blankM.cleanBlank({ paper: 'zz', orient: 'up', grid: 'hex', pages: 99 });
  ok(c.paper === 'letter' && c.orient === 'portrait' && c.grid === 'none' && c.pages === 20 && blankM.cleanBlank({ pages: 0 }).pages === 1 && blankM.cleanBlank(null).pages === 1 && blankM.cleanBlank({ pages: 'x' }).pages === 1, 'settings are checked: unknown paper/turn/grid fall back, pages 1 to 20', c);
  // every paper, both turns: a real PDF of that size, read back by pdf.js
  let sizes = true; const bad = [];
  for (const paper of Object.keys(want)) for (const orient of ['portrait', 'landscape']) {
    const b = await blankM.blankPdf(PDFLib, { paper, orient, grid: 'none', pages: 1 });
    const rec = await open(b, 'Untitled-1.pdf', 'b');
    const [w, h] = orient === 'landscape' ? [...want[paper]].reverse() : want[paper];
    if (rec.pages.length !== 1 || !near(rec.pages[0].width, w, 0.01) || !near(rec.pages[0].height, h, 0.01) || rec.pages[0].rotate !== 0) { sizes = false; bad.push([paper, orient, rec.pages[0].width, rec.pages[0].height]); }
    await reader.closePdf(rec.doc);
  }
  ok(sizes, 'each paper, portrait and landscape, opens at its size in points (landscape = turned media box, no /Rotate)', bad);
  const many = await open(await blankM.blankPdf(PDFLib, { paper: 'a3', orient: 'landscape', grid: 'dot', pages: 20 }), 'Untitled-2.pdf', 'm');
  ok(many.pages.length === 20 && many.pages.every((pg) => near(pg.width, 1190.55, 0.01)) && many.markups.length === 0 && !Object.keys(many.calibrations).length, '20 pages, every one the same size, no markups and no scale', many.pages.length);
  ok(JSON.stringify(many.blank) === JSON.stringify({ paper: 'a3', orient: 'landscape', grid: 'dot', metric: true }) && many.pages[0].title === 'Untitled-2 — page 1', 'the file says it is a blank set (Info /MarkupCraftBlank); sheets named by file and page', { blank: many.blank, title: many.pages[0].title });
  await reader.closePdf(many.doc);
  ok(blankM.blankInfo('{"paper":"evil","grid":"square"}').paper === 'letter' && blankM.blankInfo('not json') === null && blankM.blankInfo('') === null && blankM.blankInfo('[1]').grid === 'none', 'the blank-set note read back is untrusted and cleaned');

  // the grid is drawn into the page: count ink on a rendered Letter page
  const inkOf = async (bytes, pageNo = 1) => {
    const doc = await getDoc(bytes);
    const pg = await doc.getPage(pageNo);
    const vp = pg.getViewport({ scale: 1 });
    const cv = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height));
    const cx = cv.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, cv.width, cv.height);
    await pg.render({ canvasContext: cx, viewport: vp, annotationMode: pdfjs.AnnotationMode.ENABLE }).promise;
    const px = cx.getImageData(0, 0, cv.width, cv.height).data;
    let n = 0, red = 0; for (let i = 0; i < px.length; i += 4) { if (px[i] + px[i + 1] + px[i + 2] < 720) n++; if (px[i] > 150 && px[i + 1] < 90 && px[i + 2] < 90) red++; }
    await reader.closePdf(doc);
    return { n, red };
  };
  const letter = (grid) => blankM.blankPdf(PDFLib, { paper: 'letter', grid, pages: 1 });
  const [none, dot, square] = [await inkOf(await letter('none')), await inkOf(await letter('dot')), await inkOf(await letter('square'))];
  ok(none.n === 0 && dot.n > 2000 && square.n > dot.n, 'grid drawn: none is blank paper, dots mark the page, squares more', { none: none.n, dot: dot.n, square: square.n });
  const gc = blankM.gridContent(612, 792, 'square');
  // 1/4 in on a 1/2 in margin: 30 columns (7.5 in) and 40 rows (10 in) → 31 + 41 lines, 8 + 11 of them heavy (every inch)
  ok((gc.match(/ m /g) || []).length === 72 && /0\.62 G 0\.5 w/.test(gc) && gc.includes('36 36 m 36 756 l') && gc.includes('36 756 m 576 756 l'), 'square grid: 1/4 in pitch on a 1/2 in margin, a heavier line each inch', (gc.match(/ m /g) || []).length);
  const dc = blankM.gridContent(595.28, 841.89, 'dot', true);
  ok((dc.match(/ re/g) || []).length === 39 * 56 && blankM.gridContent(612, 792, 'none') === '', 'metric dot grid: one dot every 5 mm inside a 10 mm margin (39 × 56 on A4)', (dc.match(/ re/g) || []).length);

  // markups saved onto a blank page and reopened: everything comes back, the grid stays under them
  const blankBytes = await blankM.blankPdf(PDFLib, { paper: 'tabloid', orient: 'landscape', grid: 'square', pages: 2 }, { title: 'Untitled-3' });
  const rec = await open(blankBytes, 'Untitled-3.pdf', 'u');
  const marks = [
    model.makeMarkup({ sheet: 'u:0', type: 'cloudrect', rect: [200, 200, 500, 400], author, comment: 'on a blank sheet', style: { color: '#e02020', width: 3 } }),
    model.makeMarkup({ sheet: 'u:0', type: 'text', rect: [600, 300, 900, 360], text: 'Sketch: new door here', author }),
    model.makeMarkup({ sheet: 'u:1', type: 'measure', pts: [[100, 100], [388, 100]], author }),
  ];
  const { bytes: saved, report } = await writer.writeMarkedUp(PDFLib, blankBytes, { pages: [
    { index: 0, markups: marks.slice(0, 2), cal: null },
    { index: 1, markups: marks.slice(2), cal: quarter },
  ] });
  const back = await open(saved, 'Untitled-3 (marked up).pdf', 'u');
  const same = marks.every((m) => { const r = back.markups.find((x) => x.id === m.id); return r && r.type === m.type && r.sheet === m.sheet && JSON.stringify(r.rect) === JSON.stringify(m.rect) && JSON.stringify(r.pts) === JSON.stringify(m.pts) && r.text === m.text && r.comment === m.comment; });
  ok(report.written === 3 && back.markups.length === 3 && same, 'markups saved onto the blank pages reopen editable and equal', { written: report.written, back: back.markups.length });
  ok(!!back.calibrations['u:1'] && !back.calibrations['u:0'] && back.blank?.grid === 'square' && near(back.pages[0].width, 1224, 0.01), 'the scale set on page 2 is kept, page 1 stays uncalibrated, the blank-set note survives the save');
  const sv = await inkOf(saved);
  ok(sv.red > 500 && sv.n > square.n, 'the saved page paints the grid and the red cloud on it', sv);
  await reader.closePdf(rec.doc); await reader.closePdf(back.doc);
  // "Add a blank page" on the saved copy: one more page, same size, the grid drawn on it too, markups untouched
  const added = await pagesM.insertBlank(PDFLib, saved, 2, { grid: back.blank });
  const addR = await open(added, 'Untitled-3 (marked up).pdf', 'u');
  ok(addR.pages.length === 3 && near(addR.pages[2].width, 1224, 0.01) && near(addR.pages[2].height, 792, 0.01) && addR.markups.length === 3 && addR.blank?.grid === 'square', 'add a blank page: the third page is the set\'s paper, the markups stay', addR.pages.length);
  ok((await inkOf(added, 3)).n > 2000 && (await inkOf(await pagesM.insertBlank(PDFLib, saved, 2), 3)).n === 0, 'its grid is drawn like the others (and a plain inserted page has none)');
  await reader.closePdf(addR.doc);

  // names: Untitled-1, -2 … above any open Untitled-n (a saved copy counts) and above the session's own count
  ok(blankM.untitledName([]).name === 'Untitled-1.pdf' && blankM.untitledName(['Untitled-1.pdf', 'plans.pdf']).name === 'Untitled-2.pdf'
    && blankM.untitledName(['Untitled-4 (marked up).pdf'], 2).name === 'Untitled-5.pdf' && blankM.untitledName([], 3).name === 'Untitled-4.pdf', 'Untitled-1.pdf, Untitled-2.pdf … never reusing a number this session');
  // every word the dialog builds at run time is in both language files
  const ES = JSON.parse(fs.readFileSync(path.join(APP, 'lang/es-MX.json'), 'utf8'));
  const keys = [...Object.keys(blankM.PAPERS).map((k) => 'new.paper.' + k), ...blankM.ORIENTS.map((k) => 'new.orient.' + k), ...blankM.GRIDS.map((k) => 'new.grid.' + k),
    'new.title', 'new.text', 'new.paper', 'new.paper.inch', 'new.paper.metric', 'new.orient', 'new.grid', 'new.grid.hint', 'new.pages', 'new.err.pages', 'new.ok', 'new.making', 'new.done', 'new.failed',
    'tool.new', 'tool.new.title', 'hint.new', 'hint.button.new', 'sheets.add_blank', 'sheets.add_blank.title', 'pages.done.add_blank'];
  ok(keys.every((k) => Object.hasOwn(EN, k) && Object.hasOwn(ES, k)), 'the New dialog\'s words are in lang/en.json and the es-MX draft', keys.filter((k) => !Object.hasOwn(EN, k) || !Object.hasOwn(ES, k)));
}

// ------------------------------------------------------------------------------------------------
section('Base content: the page\'s own content (0.6 DF.14; spike docs/spikes/pdf-base-content.md)');
{
  const lex = await imp('base-lex.js');
  const bc = await imp('base-content.js');
  const corpusM = await import(pathToFileURL(path.join(ROOT, 'tools/markupcraft-test/base-corpus.mjs')).href);
  const { spawnSync } = await import('node:child_process');
  const eqB = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  const enc = (s) => new TextEncoder().encode(s);
  const dec = (b) => new TextDecoder('latin1').decode(b);

  // the lexer on its own
  const src = enc('% c\n(a \\(b\\) \\101\\\n c)Tj <48 65 6C>Tj [(x)-20(y)]TJ /Na#6De 1 Tf 0 0 m 10 .5 l -3. 4 l S BI /W 4 /H 1 /CS /G /BPC 8 ID  EI  EI\nQ');
  const { ops, problems } = lex.parseOps(src);
  ok(ops.map((o) => o.op).join(' ') === 'Tj Tj TJ Tf m l l S BI Q' && !problems.length, 'operators in order, nothing odd', ops.map((o) => o.op));
  ok(dec(ops[0].args[0].v) === 'a (b) A c' && dec(ops[1].args[0].v) === 'Hel' && ops[3].args[0].v === 'Name', 'escapes, octal, line continuation, hex, #xx names');
  ok(ops[2].args[0].items.map((t) => t.v).length === 3 && ops[6].args[1].v === 4 && ops[6].args[0].v === -3, 'arrays and odd numbers (-3., .5)');
  ok(ops[8].data.e - ops[8].data.s === 4 && dec(src.subarray(ops[8].data.s, ops[8].data.e)) === ' EI ', 'an inline image read by its size, though its bytes are " EI "');
  ok(eqB(lex.writeOps(src, ops), src), 'written back from the op list: identical');
  const bad = enc('q (unclosed BT ] >> 1 2');
  const pb = lex.parseOps(bad);
  ok(pb.problems.length >= 1 && eqB(lex.writeOps(bad, pb.ops), bad), 'a damaged stream: problems listed, bytes still identical', pb.problems);
  ok(lex.num(1 / 3) === '0.3333' && lex.num(-0.00001) === '0' && lex.num(12) === '12', 'numbers written without exponents');

  // the corpus: the hand-written file and the public fixture always; the rest when testfiles/ is here
  const awk = new Uint8Array(corpusM.awkward());
  const files = [{ name: 'awkward', bytes: awk }, { name: 'kitchen', bytes: new Uint8Array(fs.readFileSync(PLAN)) }];
  for (const c of corpusM.CORPUS) if (!c.blocked && !files.some((f) => f.name === c.name) && fs.existsSync(c.file)) files.push({ name: c.name, bytes: new Uint8Array(fs.readFileSync(c.file)) });
  if (files.length < 4) console.log('  (testfiles/generated/pdf-base not here: round trip on the two built-in files only — node tools/markupcraft-test/base-corpus.mjs makes the rest)');
  let contents = 0, opsN = 0;
  const differs = [];
  for (const f of files) {
    const d = await PDFLib.PDFDocument.load(f.bytes, { ignoreEncryption: true, updateMetadata: false });
    for (let p = 0; p < d.getPageCount(); p++) {
      const pc = bc.readPage(PDFLib, d, p);
      for (const c of pc.contents.values()) { contents++; opsN += c.ops.length; if (!eqB(lex.writeOps(c.bytes, c.ops), c.bytes)) differs.push(f.name + ' p' + (p + 1) + ' ' + c.key); }
    }
  }
  ok(!differs.length, `round trip byte for byte: ${files.length} files, ${contents} contents, ${opsN} ops`, differs);

  // the hand-written page: what is on it
  const doc = await PDFLib.PDFDocument.load(awk);
  const pc = bc.readPage(PDFLib, doc, 0);
  const kinds = {};
  for (const o of pc.objects) kinds[o.kind] = (kinds[o.kind] || 0) + 1;
  ok(JSON.stringify(kinds) === JSON.stringify({ path: 7, clip: 2, text: 7, image: 2, form: 4, shading: 1 }), 'objects found: paths, clips, text, pictures (one inline), forms (nested, used twice), a shading', kinds);
  const texts = pc.objects.filter((o) => o.kind === 'text').map((o) => o.text);
  ok(texts[0] === 'Hello (world) \\ AB' && texts[1] === 'Kerned Text' && texts.includes('inner'), 'text decoded through the font', texts);
  const kern = pc.objects.find((o) => o.text === 'Kerned Text');
  ok(near(kern.bbox[0], 50, 0.01) && kern.bbox[2] > 140 && kern.bbox[2] < 160, 'a run\'s box from its widths (Helvetica, no /Widths: built-in metrics)', kern.bbox);
  ok(bc.objectsOfKind(pc, ['picture']).length === 2 && bc.objectsOfKind(pc, ['shape']).length === 7, 'pick by kind (shapes, pictures, text)');
  ok(bc.objectsIn(pc, [190, 690, 310, 760]).some((o) => o.kind === 'path' && o.paint === 'f'), 'marquee: the blue box is under it');

  // refusals
  const paths = pc.objects.filter((o) => o.kind === 'path');
  const page = pc.contents.get('page');
  const cross = paths.find((o) => o.where === 'page' && !page.segments.some((g) => page.ops[o.first].s >= g.s && page.ops[o.last].e <= g.e));
  ok(cross && bc.applyEdits(PDFLib, doc, pc, bc.transformEdits(pc, cross, bc.translate(5, 5)).edits).refused === 'across-streams', 'a path split over two streams refuses');
  ok(bc.transformEdits(pc, { ...pc.objects.find((o) => o.kind === 'clip'), kind: 'path' }, bc.translate(5, 5)).refused === 'clip', 'a clip path refuses');
  ok(bc.editBlocker(PDFLib, doc) === null, 'a plain file can be edited');
  const signed = await PDFLib.PDFDocument.load(await corpusM.signedFrom(await (async () => { const d0 = await PDFLib.PDFDocument.create(); d0.addPage(); return d0.save(); })()));
  ok(bc.editBlocker(PDFLib, signed) === 'signed', 'a signed file refuses');
  const encDoc = await PDFLib.PDFDocument.create(); encDoc.addPage(); encDoc.context.trailerInfo.Encrypt = encDoc.context.obj({ Filter: 'Standard' });
  ok(bc.editBlocker(PDFLib, encDoc) === 'encrypted', 'an encrypted file refuses');
  const encFile = corpusM.CORPUS.find((c) => c.name === 'encrypted').file;
  if (fs.existsSync(encFile)) ok(bc.editBlocker(PDFLib, await PDFLib.PDFDocument.load(fs.readFileSync(encFile), { ignoreEncryption: true })) === 'encrypted', 'Ghostscript\'s encrypted copy refuses');

  // one path moved, one text run rewritten, one picture moved → saved → read back by pdf.js and poppler
  const tri = paths.find((o) => o.where === 'page' && o.paint === 'S' && near(o.bbox[0], 50) && near(o.bbox[3], 750));
  const run = pc.objects.find((o) => o.text === 'Kerned Text');
  const pic = pc.objects.find((o) => o.kind === 'image' && !o.inline);
  const T = bc.translate(36, -24);
  const e1 = bc.transformEdits(pc, tri, T), e2 = bc.textEdits(pc, run, 'Darned Text'), e3 = bc.transformEdits(pc, pic, bc.translate(0, -100));
  ok(!e1.refused && !e2.refused && !e2.missing.length && !e3.refused, 'edits made: move a path, new words in the run\'s own font, move a picture');
  ok(/\[\(Darned Text\) -?[\d.]+\] TJ/.test(dec(e2.edits[0].bytes)), 'the run keeps its advance (TJ with the difference)', dec(e2.edits[0].bytes));
  const before = new Map([...pc.contents].map(([k, c]) => [k, c.key === 'page' ? c.segments.map((s) => s.raw.contents) : [c.raw.contents]]));
  const res = bc.applyEdits(PDFLib, doc, pc, [...e1.edits, ...e2.edits, ...e3.edits]);
  ok(!res.refused && res.changed.join() === 'page', 'written back into the page content', res);
  const out = await doc.save({ useObjectStreams: false });
  const back = await PDFLib.PDFDocument.load(out);
  const pc2 = bc.readPage(PDFLib, back, 0);
  const segs2 = pc2.contents.get('page').segments.map((s) => s.raw.contents);
  ok(eqB(segs2[1], before.get('page')[1]) && !eqB(segs2[0], before.get('page')[0]), 'only the stream holding the edits changed; the second stream kept its bytes');
  ok([...pc2.contents].filter(([k]) => k !== 'page').every(([k, c]) => eqB(c.raw.contents, before.get(k)[0])), 'the forms kept their bytes');
  const tri2 = pc2.objects.find((o) => o.kind === 'path' && o.paint === 'S' && near(o.bbox[0], 86) && near(o.bbox[3], 726));
  ok(!!tri2 && eqB(lex.writeOps(pc2.contents.get('page').bytes, pc2.contents.get('page').ops), pc2.contents.get('page').bytes), 'read again: the path is at its new place, and the edited stream round-trips too');
  // pdf.js
  const render = async (bytes) => {
    const d = await getDoc(bytes); const pg = await d.getPage(1); const vp = pg.getViewport({ scale: 1 });
    const c = createCanvas(612, 792); const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, 612, 792);
    await quiet(() => pg.render({ canvasContext: g, viewport: vp }).promise);
    const txt = (await quiet(() => pg.getTextContent())).items.map((i) => i.str).join(' ');
    return { px: g.getImageData(0, 0, 612, 792).data, txt };
  };
  const r0 = await render(awk), r1 = await render(out);
  const boxes = [tri.bbox, [tri.bbox[0] + 36, tri.bbox[1] - 24, tri.bbox[2] + 36, tri.bbox[3] - 24], run.bbox, pic.bbox, [pic.bbox[0], pic.bbox[1] - 100, pic.bbox[2], pic.bbox[3] - 100]].map((b) => [b[0] - 4, b[1] - 4, b[2] + 4, b[3] + 4]);
  let changed = 0, outside = 0;
  for (let y = 0; y < 792; y++) for (let x = 0; x < 612; x++) {
    const i = (y * 612 + x) * 4;
    if (Math.abs(r0.px[i] - r1.px[i]) + Math.abs(r0.px[i + 1] - r1.px[i + 1]) + Math.abs(r0.px[i + 2] - r1.px[i + 2]) <= 12) continue;
    changed++;
    const px = x + 0.5, py = 792 - y - 0.5;
    if (!boxes.some((b) => px >= b[0] && px <= b[2] && py >= b[1] && py <= b[3])) outside++;
  }
  ok(changed > 200 && outside === 0, `pdf.js: ${changed} pixels changed, all inside the edited objects`, { changed, outside });
  ok(r1.txt.includes('Darned Text') && !r1.txt.includes('Kerned Text') && r1.txt.includes('Hello (world)'), 'pdf.js reads the new words and the rest as before');
  // poppler
  const tmpPdf = path.join(OUTDIR, 'base-edited.pdf');
  fs.writeFileSync(tmpPdf, out);
  const pt = spawnSync('pdftotext', [tmpPdf, '-'], { encoding: 'utf8' });
  if (pt.error) console.log('  (poppler not installed: skipped)');
  else {
    ok(pt.status === 0 && pt.stdout.includes('Darned Text') && !pt.stdout.includes('Kerned'), 'poppler reads the new words', pt.stderr);
    const tmpOrig = path.join(OUTDIR, 'base-orig.pdf');
    fs.writeFileSync(tmpOrig, awk);
    const ppm = (f, b) => { spawnSync('pdftoppm', ['-r', '72', '-gray', '-singlefile', f, path.join(OUTDIR, b)]); return fs.readFileSync(path.join(OUTDIR, b + '.pgm')); };
    const p0 = ppm(tmpOrig, 'base-o'), p1 = ppm(tmpPdf, 'base-e');
    const head = p0.length - 612 * 792;
    let pc_ = 0, po = 0;
    for (let k = 0; k < 612 * 792; k++) {
      if (Math.abs(p0[head + k] - p1[head + k]) <= 4) continue;
      pc_++;
      const px = (k % 612) + 0.5, py = 792 - Math.floor(k / 612) - 0.5;
      if (!boxes.some((b) => px >= b[0] && px <= b[2] && py >= b[1] && py <= b[3])) po++;
    }
    ok(p0.length === p1.length && pc_ > 200 && po === 0, `poppler: ${pc_} pixels changed, all inside the edited objects`, { pc_, po });
  }

  // turning a rectangle, recolouring, deleting
  const d3 = await PDFLib.PDFDocument.load(awk);
  const pc3 = bc.readPage(PDFLib, d3, 0);
  const box = pc3.objects.find((o) => o.kind === 'path' && o.paint === 'f' && near(o.bbox[0], 200) && near(o.bbox[3], 750));
  const turn = bc.transformEdits(pc3, box, bc.mul(bc.mul(bc.translate(-250, -725), [0, 1, -1, 0, 0, 0]), bc.translate(250, 725)));
  ok(/m .* l .* l .* l h/.test(dec(turn.edits[0].bytes)), 'a turned rectangle is written as a closed path', dec(turn.edits[0].bytes));
  const sc = bc.transformEdits(pc3, box, bc.scaleAbout(2, 0.5, 200, 700));
  ok(dec(sc.edits[0].bytes) === '200 700 200 25 re', 'a scaled rectangle stays a rectangle', dec(sc.edits[0].bytes));
  const rc = bc.recolorEdits(pc3, box, { fill: '#ff8800', lw: 2 });
  ok(dec(rc.edits[0].bytes) === 'q 1 0.5333 0 rg 2 w ' && dec(rc.edits[1].bytes) === ' Q', 'recolour: wrapped in q … Q so nothing after it changes');
  const del = bc.deleteEdits(pc3, box);
  bc.applyEdits(PDFLib, d3, pc3, del.edits);
  const pc4 = bc.readPage(PDFLib, await PDFLib.PDFDocument.load(await d3.save()), 0);
  ok(pc4.objects.filter((o) => o.kind === 'path').length === 6, 'deleted: one path fewer');

  // the edits as data (base-edit.js): the Store keeps them, the working copy is rebuilt from the original each time
  {
    const be = await imp('base-edit.js');
    const d0 = await PDFLib.PDFDocument.load(awk);
    const p0 = bc.readPage(PDFLib, d0, 0);
    const list0 = be.shown(p0, null);
    ok(list0.filter((x) => x.kind === 'shape').length === 7 && list0.filter((x) => x.kind === 'text').length === 7 && list0.filter((x) => x.kind === 'picture').length === 2, 'pickable: 7 shapes, 7 text runs, 2 pictures (clips and forms are not picked themselves)', list0.map((x) => x.kind));
    const gray = list0.find((x) => x.kind === 'shape' && x.obj.fillRgb === '#cccccc');
    ok(gray && nearArr(gray.box, [220, 600, 300, 680]) && !be.hitTest(list0, [205, 595], 1), 'a shape inside a clip is picked only where it shows', gray && gray.box);
    const blue = be.hitTest(list0, [250, 725], 2);
    ok(blue && blue.obj.paint === 'f' && near(blue.box[0], 200), 'a click inside the blue box picks it (filled: inside counts)', blue && blue.key);
    const triHit = be.hitTest(list0, [100, 700.2], 2), triMiss = be.hitTest(list0, [100, 720], 2);
    ok(triHit && triHit.obj.paint === 'S' && !triMiss, 'a stroked path is picked on its line, not inside it', [triHit && triHit.key, triMiss && triMiss.key]);
    ok(be.inRect(list0, [40, 690, 160, 760], false).length === 1 && be.inRect(list0, [140, 695, 210, 760], true).length === 2, 'marquee: window takes what is inside, crossing what it touches');
    const formPaths = list0.filter((x) => x.kind === 'shape' && x.key.includes('/'));
    ok(formPaths.length === 2 && formPaths[0].key !== formPaths[1].key, 'the shared form\'s path shows twice (once per use), with different keys', formPaths.map((x) => x.key));
    const formPath = formPaths[0];
    let st = be.withMove(null, [triHit.key], bc.translate(10, 0));
    st = be.withMove(st, [triHit.key], bc.translate(0, -5));
    ok(nearArr(st.o[triHit.key].T, [1, 0, 0, 1, 10, -5]), 'moves add up');
    st = be.withPatch(st, [blue.key], { fill: '#ff8800' });
    const run = list0.find((x) => x.kind === 'text' && x.obj.text === 'Scaled');
    st = be.withDelete(st, [run.key]);
    st = be.withMove(st, [formPath.key], bc.translate(0, 30));
    const nd = be.nodesOf(p0, triHit.obj, st.o[triHit.key]);
    ok(nd.length === 3 && nd.every((n) => n.kind === 'anchor') && near(nd[0].x, 60) && near(nd[0].y, 695), 'its points as shown (after the move)', nd);
    st = be.withNodes(st, triHit.key, be.moveNode(p0, triHit.obj, st.o[triHit.key], nd[1], [170, 680]));
    const lineMk = { k: 'path', d: [['M', 400, 100], ['L', 500, 150]], stroke: '#d0021b', w: 2, alpha: 1, fill: null, falpha: 0 };
    const added = be.contentFromList([lineMk], '#ffffff', () => 'x1');
    ok(added && added[0].stroke === '#d0021b' && added[0].lw === 2, 'a drawn line can go into the page');
    ok(be.contentFromList([{ ...lineMk, alpha: 0.5 }]) === null && be.contentFromList([{ k: 'text', s: 'x' }]) === null, 'see-through colour and text can\'t');
    st = be.withAdded(st, added);
    const sorted = (v) => JSON.stringify(v, (k, x) => (x && typeof x === 'object' && !Array.isArray(x) ? Object.fromEntries(Object.entries(x).sort(([a], [b]) => (a < b ? -1 : 1))) : x));
    ok(sorted(be.cleanBase(JSON.parse(JSON.stringify(st)))) === sorted(st), 'the state survives cleanBase (autosave, files) unchanged');
    ok(JSON.stringify(be.cleanBase({ o: { 'x;rm': { del: true }, 5: { T: [0, 0, 0, 0, 0, 0], stroke: 'red', text: 'a\u0001b' } }, add: [{ d: [['L', 1, 2]], stroke: '#000000' }, { d: [['M', 1, 2]], stroke: '#000000' }] })) === '{"o":{"5":{"text":"ab"}},"add":[{"id":"a0","d":[["M",1,2]],"stroke":"#000000","lw":1}]}', 'cleanBase drops bad keys, flat matrices, bad colours, control characters, paths not starting with M', be.cleanBase({ o: { 'x;rm': { del: true }, 5: { T: [0, 0, 0, 0, 0, 0], stroke: 'red', text: 'a\u0001b' } }, add: [{ d: [['L', 1, 2]], stroke: '#000000' }, { d: [['M', 1, 2]], stroke: '#000000' }] }));
    const sto = new model.Store();
    sto.change('Move page content', (tx) => tx.setBase('f1:0', st));
    ok(sto.base.get('f1:0') && sto.dirtySheets.has('f1:0'), 'the Store keeps the sheet\'s edits (unsaved)');
    sto.undo();
    ok(!sto.base.has('f1:0'), 'undo takes them back');
    sto.redo();
    ok(JSON.stringify(sto.base.get('f1:0')) === JSON.stringify(st), 'redo puts them back');
    const w = await be.buildWorking(PDFLib, awk, new Map([[0, st]]));
    ok(!w.refused.length && !w.missing.length && w.pages === 1, 'working copy built, nothing refused', w.refused);
    const wd = await PDFLib.PDFDocument.load(w.bytes);
    const p1 = bc.readPage(PDFLib, wd, 0);
    const tri1 = p1.objects.find((o) => o.kind === 'path' && o.paint === 'S' && o.bbox[0] > 55 && o.bbox[0] < 65);
    ok(tri1 && near(tri1.bbox[0], 60, 0.01) && near(tri1.bbox[2], 170, 0.01) && near(tri1.bbox[1], 680, 0.01), 'the path moved and its point went where it was dragged', tri1 && tri1.bbox);
    ok(p1.objects.filter((o) => o.kind === 'text').every((o) => o.text !== 'Scaled'), 'the deleted run is gone');
    ok(p1.objects.find((o) => o.kind === 'path' && o.fillRgb === '#ff8800'), 'the blue box is orange now');
    const forms = p1.objects.filter((o) => o.kind === 'form' && o.parent == null);
    ok(forms.length === 2 && forms[0].name !== forms[1].name && forms.some((f) => f.name === 'Fm1'), 'the shared form was copied for the edited use; the other use keeps Fm1', forms.map((f) => f.name));
    const fpaths = p1.objects.filter((o) => o.kind === 'path' && o.where !== 'page');
    ok(fpaths.length === 2 && near(Math.abs(fpaths[0].bbox[1] - fpaths[1].bbox[1]), 30, 0.01), 'and only that use\'s path moved (30 pt; both uses sit at the same height in the file)', fpaths.map((f) => f.bbox));
    const fm1 = [...p0.contents.values()].find((c) => c.key !== 'page' && c.uses === 2);
    ok(fm1 && eqB(bc.streamBytes(PDFLib, wd.context.lookup(fm1.ref)), fm1.bytes), 'the original form object keeps its bytes');
    ok(p1.objects.some((o) => o.kind === 'path' && o.strokeRgb === '#d0021b' && near(o.bbox[0], 400, 0.01)), 'the drawn line is part of the page now');
    const r2 = await render(w.bytes);
    ok(!r2.txt.includes('Scaled') && r2.txt.replace(/\s/g, '').includes('KernedText'), 'pdf.js agrees: the run is gone, the rest is there');
    // pictures (DF.14 b): replace an image XObject and an inline image; the new one keeps its proportions in the old box
    {
      const cv = createCanvas(40, 20); const g = cv.getContext('2d'); g.fillStyle = '#d0021b'; g.fillRect(0, 0, 40, 20);
      const png = 'data:image/png;base64,' + cv.toBuffer('image/png').toString('base64');
      const xo = list0.find((x) => x.kind === 'picture' && !x.obj.inline), inl = list0.find((x) => x.kind === 'picture' && x.obj.inline);
      let ps = be.withPicture(null, xo.key, png);
      ps = be.withPicture(ps, inl.key, png);
      ok(be.withPicture(null, xo.key, 'data:image/gif;base64,R0lGOD') === null || !be.withPicture(null, xo.key, 'data:image/gif;base64,R0lGOD')?.o?.[xo.key], 'only PNG or JPEG is taken');
      ok(be.cleanBase(JSON.parse(JSON.stringify(ps))).o[xo.key].img === png && !be.cleanBase({ o: { 5: { img: 'data:text/html;base64,PGI+' } } }).o['5'], 'cleanBase keeps a checked picture, drops anything else');
      const wp = await be.buildWorking(PDFLib, awk, new Map([[0, ps]]));
      ok(!wp.refused.length, 'both pictures replaced, nothing refused', wp.refused);
      const pp = bc.readPage(PDFLib, await PDFLib.PDFDocument.load(wp.bytes), 0);
      const pics = pp.objects.filter((o) => o.kind === 'image');
      ok(pics.length === 2 && pics.every((o) => /^McPic\d+$/.test(o.name)), 'the page now draws the new pictures (inline one too)', pics.map((o) => o.name));
      const sq = pics.find((o) => near(o.bbox[0], 400, 0.01));   // the 30 x 30 box at 400,650: a 2:1 picture → 30 x 15, centred
      ok(sq && nearArr(sq.bbox, [400, 657.5, 430, 672.5], 0.01), 'a 2:1 picture in a square box: full width, centred, proportions kept', sq && sq.bbox);
      const rp = await render(wp.bytes);
      const px = (x, y) => { const i = ((792 - y) * 612 + x) * 4; return [rp.px[i], rp.px[i + 1], rp.px[i + 2]]; };
      ok(px(415, 665)[0] > 180 && px(415, 665)[1] < 60, 'pdf.js paints the new (red) picture there', px(415, 665));
    }
    let threw = '';
    try { await be.buildWorking(PDFLib, await corpusM.signedFrom(awk), new Map([[0, st]])); } catch (e) { threw = e.code; }
    ok(threw === 'signed', 'a signed file: buildWorking refuses with code "signed"');
  }

  // a standard font the file gives no widths for (other than Helvetica / Courier): words refuse, never guessed
  {
    const td = await PDFLib.PDFDocument.create();
    const tp = td.addPage([300, 200]);
    const ref = td.context.register(td.context.obj({ Type: 'Font', Subtype: 'Type1', BaseFont: 'Times-Roman', Encoding: 'WinAnsiEncoding' }));
    tp.node.setFontDictionary(PDFLib.PDFName.of('F9'), ref);
    tp.pushOperators(PDFLib.beginText(), PDFLib.setFontAndSize('F9', 12), PDFLib.moveText(20, 100), PDFLib.showText(PDFLib.PDFHexString.fromText('x')), PDFLib.endText());
    const tpc = bc.readPage(PDFLib, await PDFLib.PDFDocument.load(await td.save()), 0);
    const run = tpc.objects.find((o) => o.kind === 'text');
    ok(run && bc.objectEdits(tpc, run, { text: 'Hello' }).refused === 'metrics', 'Times with no /Widths: new words refuse (metrics)', run && bc.objectEdits(tpc, run, { text: 'Hello' }));
    ok(!bc.objectEdits(tpc, run, { T: bc.translate(5, 0) }).refused, 'but the line can still be moved');
  }

  // a subset font lacks letters: they come back as missing, never printed blank
  const chrome = corpusM.CORPUS.find((c) => c.name === 'chromium').file;
  if (fs.existsSync(chrome)) {
    const dc = await PDFLib.PDFDocument.load(fs.readFileSync(chrome));
    const pcc = bc.readPage(PDFLib, dc, 0);
    const head = pcc.objects.find((o) => o.kind === 'text');
    const m1 = bc.textEdits(pcc, head, 'Boiler room'), m2 = bc.textEdits(pcc, head, 'Mechanical area');
    ok(head.info.twoByte && m1.missing.join('') === 'B' && !m2.missing.length && m2.edits[0].bytes.length > 10, 'Type0 subset font: "B" is missing, "Mechanical area" encodes in 2-byte codes', { m1: m1.missing, have: [...head.info.have().keys()].join('') });
    // DF.14 (c): new words in a subset Type0 font; the missing "B" prints in Helvetica; the line keeps its length
    const be = await imp('base-edit.js');
    const cb = new Uint8Array(fs.readFileSync(chrome));
    const st = be.withPatch(null, [head.key], { text: 'Boiler room' });
    const w = await be.buildWorking(PDFLib, cb, new Map([[0, st]]));
    const pw = bc.readPage(PDFLib, await PDFLib.PDFDocument.load(w.bytes), 0);
    const runs = pw.objects.filter((o) => o.kind === 'text' && o.bbox[1] > head.bbox[1] - 1 && o.bbox[3] < head.bbox[3] + 1);
    ok(runs.some((o) => o.info?.base === 'Helvetica' && o.text === 'B') && runs.some((o) => o.text === 'oiler room'), 'the B in Helvetica, the rest in the file\'s own font', runs.map((o) => [o.info?.base, o.text]));
    const all = pw.objects.filter((o) => o.kind === 'text').map((o) => o.text).join('|');
    ok(all.includes('Pump P|-1 r') || all.includes('ump P'), 'the next lines are untouched', all.slice(0, 120));
    const tmpC = path.join(OUTDIR, 'base-chromium.pdf');
    fs.writeFileSync(tmpC, w.bytes);
    const ptc = spawnSync('pdftotext', [tmpC, '-'], { encoding: 'utf8' });
    if (!ptc.error) ok(/Boiler room/.test(ptc.stdout) && !/Mechanical room/.test(ptc.stdout), 'poppler reads "Boiler room"', ptc.stdout.slice(0, 80));
    const d2 = await getDoc(w.bytes); const pg2 = await d2.getPage(1);
    const items = (await quiet(() => pg2.getTextContent())).items.map((i) => i.str).join('');
    ok(items.replace(/\s/g, '').includes('Boilerroom'), 'pdf.js reads "Boiler room" too', items.slice(0, 80));
  } else console.log('  (chromium.pdf not made: the subset-font check is skipped)');
}

section('Language files (0.4 item 0.5)');
{
  // every key the build names (t('…') / tr('…') in JS, Lang::e/t('…') in .inc) is in en.json, and nothing asked was missing
  const used = new Map();
  const scan = (dir) => { for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) { if (!['help', 'lang'].includes(f.name)) scan(p); continue; }
    if (!/\.(js|inc)$/.test(f.name) || ['i18n.js', 'app-autosave.js', 'host.js', 'addons.js', 'handoff.js'].includes(f.name)) continue;
    const src = fs.readFileSync(p, 'utf8');
    for (const m of src.matchAll(/(?:\b(?:t|tr)\(|Lang::(?:e|t)\()\s*'([a-z0-9][a-z0-9._-]*)'/g)) if (!m[1].endsWith('.')) used.set(m[1], path.relative(APP, p));
  } };
  scan(APP);
  const absent = [...used].filter(([k]) => !Object.hasOwn(EN, k));
  ok(used.size > 300 && !absent.length, used.size + ' literal keys in the build, all in lang/en.json', absent.slice(0, 10));
  // keys built at run time (prefix + id) — check every id the code can pass
  const built = [...Object.keys(model.TYPES).map((k) => 'type.' + k), ...Object.keys(model.TYPES).filter((k) => k !== 'foreign').map((k) => 'subject.' + k),
    ...model.STATUSES.map((s) => 'status.' + s.toLowerCase()), ...model.PUNCH_STATUSES.map((s) => 'punch.status.' + s.toLowerCase().replace(/[^a-z0-9]+/g, '_')),
    ...model.STAMPS.map((s) => 'stamp.' + s.toLowerCase().replace(/[^a-z0-9]+/g, '_')), ...units.UNITS.map(([u]) => 'unit.' + u),
    ...['undo', 'redo'].flatMap((w) => ['history.' + w, 'history.' + w + '.none']), ...['copy', 'cut'].flatMap((v) => ['locked', 'need', 'done', 'done.local'].map((x) => 'clip.' + v + '.' + x)),
    ...['place', 'pointer', 'offset'].map((h) => 'paste.done.' + h), ...Object.keys(model.TYPES).filter((k) => k !== 'foreign').map((k) => 'type.' + k + '.lower'),
    ...['arc', 'angle'].flatMap((k) => ['hint.' + k, 'three.next.' + k, 'three.last.' + k])];
  ok(built.every((k) => Object.hasOwn(EN, k)), 'every type, subject, status, punch status, stamp and unit has its words', built.filter((k) => !Object.hasOwn(EN, k)));
  ok(i18n.missing().length === 0, 'no key asked for during the run was missing', i18n.missing().slice(0, 10));
  ok(model.TYPES.cloud.name === 'Cloud (freeform)' && model.stampLabel('Approved') === 'Approved' && model.statusName('Accepted') === 'Accepted', 'names read through the language file');
  // another language: the words follow it, the stored values do not
  i18n.init({ locale: 'xx', strings: { ...EN, 'type.cloud': 'Nube', 'stamp.approved': 'Aprobado', 'status.accepted': 'Aceptado', 'reply.status.by': 'Estado: {status} ({author}).', 'unit.m': 'Metros', 'scale.group.metric': 'Métrico' } });
  ok(model.TYPES.cloud.name === 'Nube' && units.UNITS.find(([u]) => u === 'm')[1] === 'Metros' && units.SCALE_PRESETS[2][0] === 'Métrico', 'names follow the page language');
  ok(model.stampColor('Aprobado') === model.stampColor('Approved') && model.stampColor('Approved') === '#1e8c3a', 'a stamp in the page language keeps its color');
  const sr = model.statusReply('Accepted', 'Ana');
  ok(sr.status === 'Accepted' && sr.text === 'Estado: Aceptado (Ana).', 'a status entry stores the value, shows the words', sr);
  ok(bcfM.TOPIC_TYPES.includes('Cloud (freeform)'), 'BCF topic types stay the file format\'s own words');
  i18n.init({ locale: 'en', strings: EN });
}

console.log('\n' + pass + ' passed, ' + fail + ' failed.' + (KEEP ? ' PDFs in ' + path.relative(ROOT, OUTDIR) + '/' : ''));
if (!KEEP) fs.rmSync(OUTDIR, { recursive: true, force: true });
if (fail) { console.log('Failures:\n  ' + failures.join('\n  ')); process.exit(1); }
