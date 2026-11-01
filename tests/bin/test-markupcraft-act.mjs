#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * MarkupCraft 0.8 round 2 without a browser: markups that act (EG.64 tasks.js), what changed between revisions (EG.65 changes.js),
 * voice notes and decisions (EG.66 voice.js) and redline to revision (EG.19 redline.js): cleaning hostile input, the store ops with
 * undo, closing on a real change and not on noise, the plain list, the file round trip, the assistant tools and their contract.
 *
 *   node bin/test-markupcraft-act.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const VERBOSE = process.argv.includes('--verbose');
const APP = path.join(ROOT, 'public_html/assets/apps/markupcraft/dev');
const PLAN = path.join(ROOT, 'fixtures/pdf/kitchen-plan-sheet.pdf');
const TOOLS = path.join(ROOT, 'tools/markupcraft-test/node_modules');
if (!fs.existsSync(path.join(TOOLS, 'pdfjs-dist'))) { console.error('Run (cd tools/markupcraft-test && npm install) first.'); process.exit(2); }
const imp = (f) => import(pathToFileURL(path.join(APP, f)).href);
const pdfjs = await import(pathToFileURL(path.join(TOOLS, 'pdfjs-dist/legacy/build/pdf.mjs')).href);
const PDFLib = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/pdf-lib/current/pdf-lib.esm.js')).href);
const model = await imp('model.js');
const T = await imp('tasks.js');
const CH = await imp('changes.js');
const V = await imp('voice.js');
const R = await imp('redline.js');
const writer = await imp('pdf-write.js');
const reader = await imp('pdf-read.js');
const env = { pdfjs, pdfLib: PDFLib, docOptions: { standardFontDataUrl: path.join(TOOLS, 'pdfjs-dist/standard_fonts/') } };

let pass = 0, fail = 0;
const failures = [];
function ok(c, label, detail) {
  if (c) { pass++; if (VERBOSE) console.log('  ok   ' + label); }
  else { fail++; failures.push(label); console.log('  FAIL ' + label + (detail !== undefined ? '  → ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)) : '')); }
}
const section = (s) => console.log('\n== ' + s);
const throws = (fn) => { try { fn(); return null; } catch (e) { return e.message; } };
const quiet = async (fn) => { const w = console.warn, l = console.log; console.warn = () => {}; console.log = (...a) => { if (!String(a[0]).startsWith('Warning')) l(...a); }; try { return await fn(); } finally { console.warn = w; console.log = l; } };

const newStore = () => {
  const s = new model.Store();
  s.change('seed', (tx) => {
    tx.add({ id: 'a', sheet: 'f1:0', type: 'cloudrect', rect: [100, 100, 220, 180], text: 'Move the sink wall 300 mm', author: 'Ana' });
    tx.add({ id: 'b', sheet: 'f1:0', type: 'note', pts: [[400, 500]], text: 'Which door?', author: 'Ben' });
    tx.add({ id: 'c', sheet: 'f1:1', type: 'rect', rect: [10, 10, 50, 50], text: 'Check', author: 'Ana', status: 'Completed' });
  });
  return s;
};
const hline = (x0, y0, x1, y1) => [x0, y0, x1, y1];
const room = [hline(100, 100, 220, 100), hline(220, 100, 220, 180), hline(220, 180, 100, 180), hline(100, 180, 100, 100)];

// ------------------------------------------------------------------------------------------------
section('Tasks: cleaning (hostile input in, safe task out)');
ok(T.cleanTask(null) === null && T.cleanTask('x') === null && T.cleanTask({}) === null, 'nothing or a string is not a task');
const ev = T.cleanTask({ title: 'a\nb\u0007c' + 'x'.repeat(500), assignee: { kind: 'robot', name: '<b>Ana</b>' }, due: '2026-13-45', state: 'Weird', link: { kind: 'region', rect: [5, 5, 1, 1], segs: [[1, 2, 3, 4], [1, 2, 3], ['a', 1, 2, 3], [1e12, 0, 0, 0]] }, by: 'Eve' });
ok(ev && ev.title.length === 200 && !/[\u0000-\u001f]/.test(ev.title) && ev.title.startsWith('a b c'), 'title: control characters out, 200 long');
ok(ev.assignee.kind === 'person' && ev.assignee.name === '<b>Ana</b>', 'an unknown assignee kind is a person; the name stays text (it is drawn as text)');
ok(ev.due === '' && ev.state === 'Open', 'a bad due day is dropped, a bad state is Open');
ok(ev.link.kind === 'region' && ev.link.rect.join() === '1,1,5,5' && ev.link.segs.length === 1, 'region link: rect ordered, only whole finite lines kept');
ok(T.cleanTask({ assignee: { kind: 'assistant' } }).assignee.kind === 'assistant', 'an assistant needs no name');
ok(T.cleanLink({ kind: 'element' }) === null && T.cleanLink({ kind: 'region', rect: [1, 2, 3] }) === null && T.cleanLink({ kind: 'weird' }) === null, 'a link with nothing to point at is dropped');
const big = {}; for (let i = 0; i < 200; i++) big['k' + i] = i;
big['bad key!'] = 1; big.nested = { a: 1 }; big.ok = 'x'.repeat(999);
const es = T.cleanElementState(big);
ok(Object.keys(es).length <= 60 && !('bad key!' in es) && !('nested' in es), 'element state: at most 60 flat keys, odd names and objects dropped');
ok(T.cleanTask({ title: 't', state: 'Done', closed: { how: 'change', summary: 'x' } }).closed?.how === 'change' && T.cleanTask({ title: 't', state: 'Open', closed: { how: 'change' } }).closed === null, 'closed only goes with Done');

// ------------------------------------------------------------------------------------------------
section('Tasks: making, changing, undo');
let st = newStore();
let t1 = T.setTask(st, 'a', { title: 'Move the wall', assignee: { kind: 'assistant', name: 'Claude' }, due: '2026-11-30' }, 'Ana');
ok(t1.state === 'Open' && t1.assignee.kind === 'assistant' && st.get('a').task.title === 'Move the wall', 'a markup becomes a task');
ok(st.undoStack.length === 2, 'one undo step');
st.undo();
ok(!st.get('a').task, 'undo takes the task away again');
st.redo();
ok(st.get('a').task?.due === '2026-11-30', 'redo puts it back');
ok(/no markup/.test(throws(() => T.setTask(st, 'zz', { title: 'x' }, 'Ana'))), 'a missing markup says so');
ok(/needs a title/.test(throws(() => T.setTask(st, 'b', {}, 'Ana'))), 'an empty task is refused with a sentence');
T.setTask(st, 'a', { state: 'Done' }, 'Ana');
ok(st.get('a').status === 'Completed' && st.get('a').task.closed?.how === 'person' && st.get('a').replies.some((r) => r.kind === 'status' && r.status === 'Completed'), 'Done completes the markup with a status entry');
T.setTask(st, 'a', { state: 'In progress' }, 'Ana');
ok(st.get('a').status === 'Open' && st.get('a').task.closed === null, 'reopening reopens the markup');
ok(T.clearTask(st, 'a') && !st.get('a').task && !T.clearTask(st, 'a') && st.get('a').text.startsWith('Move'), 'clearTask removes only the task');
const day = '2026-12-01';
T.setTask(st, 'a', { title: 'Late', due: '2026-11-30', state: 'Open' }, 'Ana');
T.setTask(st, 'b', { title: 'Later', due: '2027-01-01', assignee: 'Ben' }, 'Ana');
ok(T.filterTasks(st.all(), { overdue: true }, (k) => k, day).map((m) => m.id).join() === 'a', 'overdue = past due and not Done');
ok(T.filterTasks(st.all(), { assignee: 'assistant' }, (k) => k, day).length === 0 && T.filterTasks(st.all(), { assignee: 'person' }, (k) => k, day).length === 1 && T.filterTasks(st.all(), { assignee: 'ben' }, (k) => k, day)[0].id === 'b', 'filter by kind or part of a name');
ok(T.taskRow(st.get('b'), (k) => 'Sheet ' + k, day).sheet === 'Sheet f1:0' && T.taskCsvRow(st.get('a'), (k) => k, day).overdue === 'yes', 'rows and CSV rows');

// ------------------------------------------------------------------------------------------------
section('Tasks: closes when the thing really changes (and not on noise)');
const snap = T.regionSnapshot([...room, hline(0, 0, 50, 0)], [100, 100, 220, 180]);
ok(snap.segs.length === 4, 'the snapshot keeps the lines inside the box (a far line is out)');
const linkR = T.cleanLink({ kind: 'region', file: 'A.pdf', sheet: 'A-101', rect: snap.rect, segs: snap.segs });
ok(T.compareRegion(linkR, room).changed === false, 'same lines: unchanged');
const jitter = room.map((s) => s.map((v) => v + 0.4));
ok(T.compareRegion(linkR, jitter).changed === false, 'the same lines a hair off (re-plot): unchanged');
const moved = [hline(100, 100, 220, 100), hline(220, 100, 220, 180), hline(220, 180, 100, 180), hline(130, 180, 130, 100)];
const cr = T.compareRegion(linkR, moved);
ok(cr.changed && cr.removed > 20 && cr.added > 20 && /changed/.test(cr.summary), 'a wall moved 30 pt: changed, with how much', cr);
ok(T.compareRegion(linkR, [...room, hline(0, 0, 500, 0)]).changed === false, 'a change outside the box does not count');
ok(T.compareRegion(linkR, []).changed === true, 'everything gone counts');
ok(/Not a region/.test(throws(() => T.compareRegion({ kind: 'element' }, room))), 'wrong link kind is an error');
const ln = T.cleanLink({ kind: 'element', app: 'CadCraft', element: 'W12', state: { length: 3000, layer: 'WALL', modified: '2026-10-01', selected: false, pos: [1, 2] }, tol: 0.5 });
ok(T.compareElement(ln, { length: 3000.2, layer: 'WALL', modified: '2026-11-11', selected: true, pos: [1.1, 2] }).changed === false, 'element: noise (volatile fields, a number within tolerance) is not a change');
const ce = T.compareElement(ln, { length: 3300, layer: 'WALL', pos: [1, 2] });
ok(ce.changed && ce.diffs.length === 1 && ce.diffs[0].key === 'length' && /length 3000 → 3300/.test(ce.summary), 'element: a length change is reported with from and to', ce);
ok(T.compareElement(ln, null).gone === true && T.compareElement(ln, undefined).changed === true, 'element deleted: changed, gone');
ok(T.compareElement(T.cleanLink({ kind: 'element', element: 'X' }), { a: 1 }).baseline === true, 'a link with no state takes the first report as its baseline, not as a change');
// checkTasks + closeChanged + adoptBaselines
st = newStore();
T.setTask(st, 'a', { title: 'Wall', link: linkR }, 'Ana');
T.setTask(st, 'b', { title: 'Door', link: { kind: 'element', app: 'BimCraft', element: 'D3' } }, 'Ana');
const reported = { D3: { width: 900 } };
const cur = (reportedNow, segsNow) => async (t) => (t.link.kind === 'element' ? reportedNow[t.link.element] : segsNow ? { segs: segsNow } : null);
let chk = await T.checkTasks(st, cur(reported, room));
ok(chk.results.length === 2 && chk.results.find((r) => r.id === 'b').baseline && !chk.results.find((r) => r.id === 'a').changed, 'first check: region unchanged, element baseline');
ok(T.adoptBaselines(st, chk.results).join() === 'b' && st.get('b').task.link.state.width === 900, 'baseline kept on the task');
ok(T.closeChanged(st, chk.results).length === 0 && st.get('a').task.state === 'Open', 'nothing closes on the first check');
chk = await T.checkTasks(st, cur({ D3: { width: 1000 } }, moved));
const before = st.undoStack.length;
const closed = T.closeChanged(st, chk.results, 'Claude');
ok(closed.sort().join() === 'a,b' && st.undoStack.length === before + 1, 'both close in one undo step');
ok(st.get('a').status === 'Completed' && st.get('a').task.state === 'Done' && st.get('a').task.closed.how === 'change' && /changed/.test(st.get('a').task.closed.summary), 'closed by change, with what changed');
ok(st.get('b').replies.some((r) => /Closed because the linked element changed/.test(r.text) && r.author === 'Claude'), 'a thread entry says why, by whom');
st.undo();
ok(st.get('a').task.state === 'Open' && st.get('b').status === 'Open', 'undo reopens them');
chk = await T.checkTasks(st, async () => undefined);
ok(chk.missing.includes('b') && chk.results.every((r) => r.id !== 'b'), 'an element nobody reported is "missing", left open');
chk = await T.checkTasks(st, cur({ D3: { width: 900 } }, moved), { ids: ['a'] });
ok(chk.results.length === 1 && chk.results[0].id === 'a', 'ids limit the check');

// ------------------------------------------------------------------------------------------------
section('Changes between revisions: the plain list (EG.65)');
const view = [0, 0, 600, 400];
const d1 = { removed: [hline(100, 300, 160, 300)], added: [hline(100, 300, 100, 330), hline(100, 330, 160, 330)] };
const d2 = { removed: [], added: [hline(500, 40, 560, 40)] };
const res = CH.describeChanges([
  { sheetNo: 'A-101', title: 'Plan', oldKey: 'o1', newKey: 'n1', d: d1, view, mmPerPt: 0.5, oldText: [{ str: 'ROOM 12', x: 300, y: 200 }, { str: 'NORTH', x: 10, y: 380 }], newText: [{ str: 'ROOM 12A', x: 300, y: 200 }, { str: 'NORTH', x: 10, y: 380 }] },
  { sheetNo: 'A-102', title: 'Elevations', oldKey: 'o2', newKey: 'n2', d: d2, view },
  { sheetNo: 'A-103', title: 'Sections', oldKey: 'o3', newKey: 'n3', d: { removed: [], added: [] }, view },
  { sheetNo: 'A-104', title: 'Details', state: 'added', newKey: 'n4', view },
  { sheetNo: 'A-099', title: 'Old', state: 'removed', oldKey: 'o5', view },
], { markups: [{ id: 'a', sheet: 'n1', rect: [100, 300, 160, 330], task: { title: 'x' } }] });
ok(res.totals.sheets === 5 && res.totals.changed === 2 && res.totals.added === 1 && res.totals.removedSheets === 1, 'totals', res.totals);
ok(res.sheets[0].status === 'added' && res.sheets[res.sheets.length - 1].status === 'unchanged', 'new sheets first, unchanged last');
const a101 = res.sheets.find((s) => s.sheet === 'A-101');
ok(a101.areas.length === 1 && a101.areas[0].kind === 'modified' && a101.areas[0].where === 'upper left' && a101.areas[0].markups.join() === 'a' && a101.areas[0].tasks.join() === 'a', 'area: modified, upper left, the markup and its task are there', a101.areas);
ok(/about \d+ mm/.test(a101.areas[0].size) || /m ×/.test(a101.areas[0].size), 'calibrated sheet says real size', a101.areas[0].size);
ok(a101.text.added.map((w) => w.str).join() === 'ROOM 12A' && a101.text.removed.map((w) => w.str).join() === 'ROOM 12', 'words changed; unchanged words are not listed');
ok(res.sheets.find((s) => s.sheet === 'A-102').areas[0].kind === 'added' && res.sheets.find((s) => s.sheet === 'A-102').areas[0].where === 'lower right', 'lines only added: "added", lower right');
ok(res.lines[0].startsWith('2 of 3 matched sheets changed; 1 new; 1 dropped') && res.lines.some((l) => /^A-101 Plan: 1 area of drawing changed, 2 words changed\.$/.test(l)) && res.lines.some((l) => /Words added \(centre\): ROOM 12A/.test(l)), 'the list reads as sentences', res.lines);
ok(!res.lines.some((l) => /A-103/.test(l)), 'an unchanged sheet is one count, not a line');
ok(CH.changesCsvRows(res).every((r) => r.sheet && r.what) && CH.changesCsvRows(res).length >= 5, 'CSV rows');
ok(CH.whereOn(view, 10, 10) === 'lower left' && CH.whereOn(view, 300, 200) === 'centre' && CH.whereOn([0, 0, 0, 0], 1, 1) === 'centre', 'where on the sheet (y is up)');
const manyAreas = { removed: [], added: Array.from({ length: 60 }, (_, i) => hline(i * 9, 10, i * 9 + 8, 10)) };
const wide = CH.describeChanges([{ sheetNo: 'S', oldKey: 'o', newKey: 'n', d: manyAreas, view: [0, 0, 600, 400] }], { gap: 0.5 });
ok(wide.sheets[0].areas.length <= CH.LIMITS.areas, 'long lists are capped, with "and N smaller areas"');
ok(CH.describeChanges([], {}).lines[0] === '0 of 0 matched sheets changed.', 'no sheets: still a sentence');

// ------------------------------------------------------------------------------------------------
section('Voice notes and decisions (EG.66): recording only');
ok(V.cleanVoice(null) === null && V.cleanVoice({ mime: 'audio/webm', dur: 3, data: 'not base64!' }) === null && V.cleanVoice({ mime: 'text/html', dur: 3, data: 'AAAA' }) === null && V.cleanVoice({ mime: 'audio/webm', dur: 0, data: 'AAAA' }) === null, 'not a recording: refused');
ok(V.cleanVoice({ mime: 'audio/webm;codecs=opus', dur: 999, data: 'AAAA' })?.dur === 120, 'a codec suffix is accepted; a long duration is clamped to the 120 s limit');
ok(V.baseMime('audio/webm;codecs=opus') === 'audio/webm' && V.baseMime('video/mp4') === '', 'baseMime');
const wav = V.voiceFromBytes(new Uint8Array([1, 2, 3, 4, 5]), 'audio/webm;codecs=opus', 4.26, 'Ana');
ok(wav.mime === 'audio/webm' && wav.dur === 4.3 && wav.data === Buffer.from([1, 2, 3, 4, 5]).toString('base64') && wav.by === 'Ana', 'bytes → stored voice');
ok(/too long/.test(throws(() => V.voiceFromBytes(new Uint8Array(600000), 'audio/webm', 5, 'x'))), 'a recording over the limit is refused with a sentence');
ok(V.recordingBudget() > 20 && V.recordingBudget() <= V.VOICE.maxSeconds, 'budget in seconds');
st = newStore();
st.change('voice', (tx) => tx.add({ id: 'v1', sheet: 'f1:0', type: 'note', pts: [[50, 50]], text: 'Site visit, east wall', author: 'Ana', voice: wav }));
const d = V.addDecision(st, { sheet: 'f1:0', at: [200, 200], text: 'Door D3 stays at 900', by: 'Ben' });
ok(d.type === 'note' && d.decision.state === 'Decided' && d.subject === 'Decision' && d.author === 'Ben', 'a decision is a note on the sheet');
const d2m = V.addDecision(st, { sheet: 'f1:0', at: [210, 200], text: 'Door D3 becomes 1000', by: 'Ben', supersedes: d.id });
ok(st.get(d.id).decision.state === 'Superseded' && st.get(d.id).decision.supersededBy === d2m.id, 'a new decision supersedes the earlier one');
st.undo();
ok(st.get(d.id).decision.state === 'Decided' && !st.get(d2m.id), 'undo is one step');
ok(/needs its words/.test(throws(() => V.addDecision(st, { sheet: 'f1:0', at: [1, 1], text: '  ', by: 'x' }))) && /no decision/.test(throws(() => V.addDecision(st, { sheet: 'f1:0', at: [1, 1], text: 'x', by: 'x', supersedes: 'v1' }))), 'empty text and a wrong supersedes say what is wrong');
const pr = V.pinRow(st.get('v1'));
ok(pr.kind === 'voice' && pr.voice.transcript === null && pr.voice.seconds === 4.3 && !JSON.stringify(pr).includes(wav.data), 'tool row: no audio, transcript null');
ok(V.pinned(st.all()).length === 2, 'pinned = voice notes and decisions');

// ------------------------------------------------------------------------------------------------
section('Redline to revision (EG.19)');
const sheets = [{ key: 'f1:0', sheetNo: 'A-101', title: 'Plan', view: [0, 0, 600, 400], file: 'A.pdf', mmPerPt: 0.5 }, { key: 'f1:1', sheetNo: 'A-102', title: 'Elevations', view: [0, 0, 600, 400], file: 'A.pdf' }];
st = newStore();
T.setTask(st, 'a', { title: 'Move the wall', assignee: { kind: 'person', name: 'Dee' } }, 'Ana');
st.change('x', (tx) => tx.add({ id: 'img', sheet: 'f1:0', type: 'image', rect: [1, 1, 5, 5], img: 'data:' }));
const pkg = R.buildRedline(st.all(), sheets, { project: 'Kitchen / fit-out', revision: 'B', by: 'Ana' });
ok(pkg.format === 'cc-redline' && pkg.items.map((i) => i.id).join() === 'a,b', 'Open markups only; Completed and images stay out');
ok(pkg.items[0].kind === 'revise' && pkg.items[1].kind === 'note' && pkg.items[0].frac.box.join() === '0.167,0.25,0.367,0.45', 'kind from type; frac is 0–1 across the sheet', pkg.items[0].frac);
ok(pkg.items[0].task.assignee.name === 'Dee' && pkg.sheets.length === 1 && pkg.sheets[0].mmPerPt === 0.5, 'task and calibration ride along; only used sheets listed');
ok(R.redlineFileName(pkg) === 'Kitchen-fit-out-B.redline.json', 'file name is safe');
ok(R.buildRedline(st.all(), sheets, { only: 'all' }).items.length === 3, 'all = also Completed');
ok(R.buildRedline(st.all(), sheets, { ids: ['b'] }).items.map((i) => i.id).join() === 'b', 'ids pick');
const ans = { format: 'cc-redline-answers', v: 1, by: 'Dee', items: [{ id: 'a', decision: 'accepted', note: 'Moved to 3300' }, { id: 'b', decision: 'rejected', note: 'Existing door' }, { id: 'zz', decision: 'done' }, { id: '../x', decision: 'done' }, { id: 'a', decision: 'maybe' }] };
ok(R.cleanAnswers({ format: 'x' }) === null && R.cleanAnswers(ans).items.length === 3, 'answers: wrong format refused, bad ids and decisions dropped');
const un = st.undoStack.length;
const ap = R.applyAnswers(st, ans, 'CadCraft');
ok(ap.applied.join() === 'a,b' && ap.unknown.join() === 'zz' && st.undoStack.length === un + 1, 'applied, unknown listed, one undo step', ap);
ok(st.get('a').status === 'Accepted' && st.get('b').status === 'Rejected' && st.get('a').replies.at(-1).text === 'Moved to 3300' && st.get('a').replies.at(-1).author === 'Dee', 'status and the drafter\'s note in the thread');
ok(st.get('a').task.state === 'Done' && st.get('a').task.closed.how === 'person', 'an accepted answer finishes the task too');
ok(R.applyAnswers(st, { ...ans, items: [{ id: 'a', decision: 'accepted' }] }, 'x').skipped.join() === 'a', 'answering again changes nothing');
st.undo();
ok(st.get('a').status === 'Open' && st.get('b').status === 'Open', 'undo takes all the answers back');
ok(/not a redline answers/.test(throws(() => R.applyAnswers(st, { nope: 1 }))), 'a wrong file says so');

// ------------------------------------------------------------------------------------------------
section('Saved in the PDF and read back');
const planBytes = new Uint8Array(fs.readFileSync(PLAN));
const opened = await quiet(() => reader.openPdf(env, planBytes, { fileId: 'f1', name: 'plan.pdf' }));
const key0 = opened.pages[0].key;
const s2 = new model.Store();
s2.change('x', (tx) => {
  tx.add({ id: 'k1', sheet: key0, type: 'cloudrect', rect: [100, 100, 200, 160], text: 'Wall', author: 'Ana' });
  tx.add({ id: 'k2', sheet: key0, type: 'note', pts: [[300, 300]], text: 'Site visit', author: 'Ana', voice: wav });
});
T.setTask(s2, 'k1', { title: 'Move the wall', assignee: { kind: 'assistant', name: 'Claude' }, due: '2026-12-15', link: linkR }, 'Ana');
V.addDecision(s2, { sheet: key0, at: [320, 320], text: 'Keep door D3', by: 'Ben' });
const saved = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, markups: s2.onSheet(key0), calibration: null }].map((p) => ({ ...p, key: key0 })) });
const back = await quiet(() => reader.openPdf(env, saved.bytes, { fileId: 'f1', name: 'plan.pdf' }));
const bm = new Map((back.markups || []).map((m) => [m.id, m]));
const k1 = [...bm.values()].find((m) => m.text === 'Wall'), k2 = [...bm.values()].find((m) => m.text === 'Site visit'), k3 = [...bm.values()].find((m) => m.decision);
ok(k1?.task?.title === 'Move the wall' && k1.task.assignee.name === 'Claude' && k1.task.due === '2026-12-15' && k1.task.link.kind === 'region' && k1.task.link.segs.length === 4, 'task (assignee, due, region link) survives save and open', k1?.task);
ok(k2?.voice?.data === wav.data && k2.voice.dur === 4.3, 'voice note survives, byte for byte');
ok(k3?.decision?.text === 'Keep door D3' && k3.decision.state === 'Decided', 'decision survives');
const plain = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [{ index: 0, key: key0, markups: [], calibration: null }] });
ok(plain.bytes.length > 0, 'a file with none of these still writes');
const evil = JSON.parse(JSON.stringify(model.makeMarkup({ sheet: key0, type: 'note', pts: [[1, 1]] })));
evil.task = { title: '</script>'.repeat(100), assignee: 7, link: { kind: 'region', rect: 'x' }, state: { a: 1 } };
evil.voice = { mime: 'audio/webm', dur: 1, data: '<script>' };
evil.decision = { text: '' };
const mk = model.makeMarkup(evil);
ok(mk.task && mk.task.title.length === 200 && mk.task.assignee === null && mk.task.link === null && mk.task.state === 'Open' && mk.voice === null && mk.decision === null, 'hostile task/voice/decision read from a file are cleaned');

// ------------------------------------------------------------------------------------------------
section('Assistant tools (contract, safety, same code path)');
const { installAgents } = await imp('agents.js').catch((e) => ({ installAgents: null, err: e }));
ok(typeof installAgents === 'function', 'agents.js loads (the page mounts it with the app\'s own callbacks)');

// ------------------------------------------------------------------------------------------------
section('Overdue tasks speak Problems (rule 29)');
const PM = await imp('problems-markupcraft.js');
st = newStore();
T.setTask(st, 'a', { title: 'Late one', due: '2026-11-01' }, 'Ana');
T.setTask(st, 'b', { title: 'Fine', due: '2027-01-01' }, 'Ana');
T.setTask(st, 'c', { title: 'Done late', due: '2026-10-01', state: 'Done' }, 'Ana');
const probs = PM.taskProblems(st.all(), { day: '2026-12-01', titleOf: (k) => 'Sheet ' + k });
ok(probs.length === 1 && probs[0].code === 'task.overdue' && probs[0].severity === 'warning' && probs[0].about[0].id === 'a' && probs[0].msg.vars.due === '2026-11-01', 'only the open overdue task is a problem', probs);

// ------------------------------------------------------------------------------------------------
console.log('\n' + pass + ' passed, ' + fail + ' failed.');
if (fail) { console.log('Failed:\n - ' + failures.join('\n - ')); process.exit(1); }
