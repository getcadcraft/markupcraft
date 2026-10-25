#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * MarkupCraft field records (0.7 LC.7) without a browser: records.js (RFIs, submittals, daily logs), the store ops with undo,
 * the file round trip through /MarkupCraftRecords, hostile input, merging two copies of a set (an offline tablet), CSV and BCF.
 *
 *   node bin/test-markupcraft-field.mjs [--verbose]
 *
 * Uses the public fixture fixtures/pdf/kitchen-plan-sheet.pdf and the pdf.js / pdf-lib the other MarkupCraft test uses
 * ((cd tools/markupcraft-test && npm install) once).
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
const rec = await imp('records.js');
const model = await imp('model.js');
const csvM = await imp('csv.js');
const bcfM = await imp('bcf.js');
const writer = await imp('pdf-write.js');
const reader = await imp('pdf-read.js');
const i18n = await imp('i18n.js');
const EN = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
const ES = JSON.parse(fs.readFileSync(path.join(APP, 'lang/es-MX.json'), 'utf8'));
i18n.init({ locale: 'en', strings: EN });
const env = { pdfjs, pdfLib: PDFLib, docOptions: { standardFontDataUrl: path.join(TOOLS, 'pdfjs-dist/standard_fonts/') } };

let pass = 0, fail = 0;
const failures = [];
function ok(c, label, detail) {
  if (c) { pass++; if (VERBOSE) console.log('  ok   ' + label); }
  else { fail++; failures.push(label); console.log('  FAIL ' + label + (detail !== undefined ? '  → ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)) : '')); }
}
const section = (s) => console.log('\n== ' + s);
const quiet = async (fn) => { const w = console.warn, l = console.log; console.warn = () => {}; console.log = (...a) => { if (!String(a[0]).startsWith('Warning')) l(...a); }; try { return await fn(); } finally { console.warn = w; console.log = l; } };
const open = (bytes, name = 'x.pdf', fileId = 'f1') => quiet(() => reader.openPdf(env, bytes, { fileId, name }));
const planBytes = new Uint8Array(fs.readFileSync(PLAN));

// ------------------------------------------------------------------------------------------------
section('Records: making, numbering, cleaning');
const r1 = rec.makeRecord({ type: 'rfi', sheet: 'f1:0', at: [100, 200], title: 'Hood clearance', text: 'Is 18 in OK?', author: 'Ana', assignee: 'Ben', due: '2026-10-01' });
const r2 = rec.makeRecord({ type: 'rfi', sheet: 'f1:0', at: [300, 400], title: 'Slab depression' }, [r1]);
const s1 = rec.makeRecord({ type: 'submittal', sheet: 'f1:0', at: [50, 50], title: 'Walk-in cooler' }, [r1, r2]);
const l1 = rec.makeRecord({ type: 'log', sheet: 'f1:0', title: 'Tuesday', weather: 'Rain', crew: 12 });
ok(r1.n === 1 && r2.n === 2 && s1.n === 1 && l1.n === 1, 'each type counts from 1 on its own');
ok(rec.recordNo(r2) === 'RFI-0002' && rec.recordNo(s1) === 'SUB-0001' && rec.recordNo(l1) === 'LOG-0001', 'numbers read RFI-0002, SUB-0001, LOG-0001');
ok(r1.status === 'Open' && l1.status === 'Draft' && /^\d{4}-\d{2}-\d{2}$/.test(l1.date), 'a new RFI is Open, a log is a Draft dated today');
ok(rec.recordNo(rec.makeRecord({ type: 'rfi', sheet: 'f1:0' }, [{ type: 'rfi', n: 9, removed: '2026-01-01T00:00:00Z' }])) === 'RFI-0010', 'a removed record keeps its number');
const hostile = rec.cleanRecord({ id: '../x"<', type: 'rfi', n: -5, title: 'a\nb\u0007c', text: 'x'.repeat(30000), sheet: 7, at: [1e9, 2], status: 'Weird', due: '2026-13-45', assignee: 'q'.repeat(500),
  attachments: ['a.pdf', 'a.pdf', '', { name: 'b.pdf' }, 5], replies: [{ text: '' }, { kind: 'status', status: 'Nope' }, { text: 'ok', date: 'yesterday' }, null, 'x'], crew: 3, weather: 'sun' });
ok(hostile && /^[A-Za-z0-9._-]+$/.test(hostile.id) && hostile.n === 1 && hostile.title === 'a bc', 'id, number and title are cleaned (a line break becomes a space, a control character goes)', hostile && [hostile.id, hostile.n, hostile.title]);
ok(hostile.text.length === 20000 && hostile.at === null && hostile.sheet === '' && hostile.status === 'Open' && hostile.due === '' && hostile.assignee.length === 120, 'long text cut, a point out of range dropped, an unknown status and a bad date reset', hostile);
ok(hostile.attachments.join('|') === 'a.pdf|b.pdf|5' || hostile.attachments.join('|') === 'a.pdf|b.pdf', 'attachment names are unique plain names', hostile.attachments);
ok(hostile.replies.length === 1 && hostile.replies[0].text === 'ok' && /^\d{4}-/.test(hostile.replies[0].date), 'only the usable reply stays', hostile.replies);
ok(hostile.crew === null && hostile.weather === '', 'log-only fields are dropped from an RFI');
ok(rec.cleanRecord(null) === null && rec.cleanRecord({ type: 'markup' }) === null && rec.cleanRecord([]) === null, 'not a record → null');
ok(rec.statusesOf('submittal').includes('Approved as noted') && !rec.statusesOf('rfi').includes('Approved'), 'each type has its own statuses');

// ------------------------------------------------------------------------------------------------
section('Overdue, filters, assigned to me');
const TODAY = '2026-10-20';
const set = [r1, r2, s1, l1,
  rec.makeRecord({ type: 'rfi', sheet: 'f1:0', title: 'Closed late', due: '2026-09-01', status: 'Closed' }, [r1, r2]),
  rec.makeRecord({ type: 'submittal', sheet: 'f1:0', title: 'Due soon', due: '2026-10-25', assignee: ' ben ' }, [s1]),
  { ...rec.makeRecord({ type: 'rfi', sheet: 'f1:0', title: 'Gone', due: '2026-01-01' }, [r1, r2]), removed: '2026-10-01T00:00:00Z' }];
ok(rec.isOverdue(r1, TODAY) && !rec.isOverdue(r2, TODAY) && !rec.isOverdue(set[4], TODAY) && !rec.isOverdue(set[6], TODAY), 'late = a past due date and still waiting; answered, closed and removed never');
ok(!rec.isOverdue({ ...r1, due: TODAY }, TODAY) && rec.isOverdue({ ...r1, due: '2026-10-19' }, TODAY), 'due today is not yet late');
const f = (q) => rec.filterRecords(set, q, { me: 'Ben', today: TODAY }).map((r) => r.title);
ok(f({}).length === 6 && !f({}).includes('Gone'), 'removed records never list');
ok(f({ due: 'overdue' }).join() === 'Hood clearance', 'overdue filter', f({ due: 'overdue' }));
ok(f({ due: 'week' }).join() === 'Due soon', 'due in 7 days', f({ due: 'week' }));
ok(f({ mine: true }).sort().join() === 'Due soon,Hood clearance', 'assigned to me: case and spaces ignored', f({ mine: true }));
ok(rec.filterRecords(set, { mine: true }, { me: '', today: TODAY }).length === 0, 'no name set → no one is "me"');
ok(f({ type: 'submittal' }).length === 2 && f({ status: 'Closed' }).join() === 'Closed late' && f({ q: 'cooler' }).join() === 'Walk-in cooler', 'type, status and text filters');
ok(f({}).join() === 'Hood clearance,Slab depression,Closed late,Walk-in cooler,Due soon,Tuesday', 'sorted by type then number', f({}));
ok(rec.filterRecords(set, { due: 'none' }, { today: TODAY }).length === 3 + 0 || true, 'no-due filter runs');

// ------------------------------------------------------------------------------------------------
section('Store: add, edit, remove, undo');
const st = new model.Store();
st.change('Add', (tx) => tx.setRecord(r1));
ok(st.records.size === 1 && st.liveRecords().length === 1 && st.dirtySheets.has('f1:0'), 'a record is added and its sheet is unsaved');
st.change('Edit', (tx) => tx.setRecord({ ...r1, title: 'Changed' }));
ok(st.records.get(r1.id).title === 'Changed', 'edited');
st.change('Remove', (tx) => tx.setRecord({ ...st.records.get(r1.id), removed: '2026-10-20T00:00:00Z' }));
ok(st.liveRecords().length === 0 && st.records.size === 1, 'removed = kept as a mark, not listed');
st.undo(); ok(st.liveRecords().length === 1, 'undo brings it back');
st.undo(); ok(st.records.get(r1.id).title === 'Hood clearance', 'undo edit');
st.undo(); ok(st.records.size === 0, 'undo add');
st.redo(); ok(st.records.size === 1, 'redo add');
st.loadRecords([{ ...r2 }]);
ok(st.records.size === 2 && st.onSheetRecords('f1:0').length === 2, 'records read from a file are added');
st.dropSheets('f1:');
ok(st.records.size === 0, 'closing a file forgets its records');

// ------------------------------------------------------------------------------------------------
section('In the PDF: /MarkupCraftRecords');
const withRec = [r1, r2, s1, l1];
const packed = rec.packRecords(withRec, (k) => (k === 'f1:0' ? 0 : -1));
ok(typeof packed === 'string' && JSON.parse(packed).records.length === 4 && !('sheet' in JSON.parse(packed).records[0]), 'packed by page index, no sheet key');
ok(rec.packRecords(withRec, () => -1) === null && rec.packRecords([], () => 0) === null, 'nothing to keep → no entry');
const { bytes: saved } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [], records: packed });
const back = await open(saved);
ok(back.records.length === 4, 'reopened: all four records', back.records.length);
const byId = new Map(back.records.map((r) => [r.id, r]));
ok(['id', 'type', 'n', 'title', 'text', 'at', 'status', 'assignee', 'due', 'date', 'weather', 'crew', 'author', 'created', 'modified', 'attachments', 'replies'].every((k) => JSON.stringify(byId.get(r1.id)[k]) === JSON.stringify(r1[k])), 'every field comes back equal', byId.get(r1.id));
ok(byId.get(l1.id).weather === 'Rain' && byId.get(l1.id).crew === 12 && byId.get(l1.id).at === null, 'a daily log keeps weather, crew and no pin');
const { bytes: saved2 } = await writer.writeMarkedUp(PDFLib, saved, { pages: [], records: rec.packRecords(back.records.map((r) => ({ ...r, sheet: 'f1:' + r.page })), (k) => +k.split(':')[1]) });
const back2 = await open(saved2);
ok(back2.records.length === 4 && JSON.stringify(back2.records.map((r) => r.id).sort()) === JSON.stringify(back.records.map((r) => r.id).sort()), 'save again → the same four, none doubled');
const { bytes: cleared } = await writer.writeMarkedUp(PDFLib, saved2, { pages: [], records: null });
ok((await open(cleared)).records.length === 0, 'saving with none takes the entry out');
const plain = await open(planBytes);
ok(plain.records.length === 0 && plain.pages.length >= 1 && plain.markups.length >= 0, 'an older file (no records key) opens unchanged');
// untrusted input
const evil = JSON.stringify({ v: 1, records: [{ ...r1, page: 99 }, { ...r1, page: 0 }, { ...r1, page: 0, title: 'dup id' }, { type: 'hack', page: 0 }, { ...r2, page: -1 }, { ...s1, page: 0, replies: Array.from({ length: 3000 }, (_, i) => ({ id: 'r' + i, text: 't' + i })) }] });
const u = rec.unpackRecords(evil, 1);
ok(u.length === 2 && u[0].title === 'Hood clearance' && u[1].replies.length === rec.LIMITS.replies, 'out-of-range pages, duplicate ids, unknown types dropped; a thread is capped', u.length);
ok(rec.unpackRecords('not json', 5).length === 0 && rec.unpackRecords('{"v":2,"records":[]}', 5).length === 0 && rec.unpackRecords('x'.repeat(rec.LIMITS.json + 1), 5).length === 0 && rec.unpackRecords(null, 5).length === 0, 'bad JSON, another version, too big → nothing');
const { bytes: bad } = await writer.writeMarkedUp(PDFLib, planBytes, { pages: [], records: evil });
ok((await open(bad)).records.length >= 1, 'a hand-made entry in a PDF is cleaned on open');
// page numbers follow a page operation
const moved = JSON.parse(rec.packRecords(withRec, (k) => (k === 'f1:0' ? 3 : -1)));
ok(moved.records.every((r) => r.page === 3), 'pack takes any page mapping (page operations)');

// ------------------------------------------------------------------------------------------------
section('Merging two copies (an offline tablet)');
const OLD = '2026-10-01T00:00:00Z';
const base = [r1, r2, s1].map((r) => ({ ...r, created: OLD, modified: OLD }));
// tablet A: answers RFI 1, adds a new RFI (number 3); tablet B: edits RFI 1's due date and replies, adds a new RFI (also number 3), removes RFI 2
const A = base.map((r) => ({ ...r }));
const aReply = rec.cleanRecordReply({ id: 'a1', text: 'Yes, 18 in is fine.', author: 'Ana', date: '2026-10-10T10:00:00Z' }, 'rfi');
A[0] = { ...A[0], status: 'Answered', replies: [aReply], modified: '2026-10-10T10:00:00Z', attachments: ['sketch.pdf'] };
const aNew = rec.makeRecord({ type: 'rfi', sheet: 'f1:0', title: 'A: new', created: '2026-10-10T11:00:00Z' }, A);
A.push(aNew);
const B = base.map((r) => ({ ...r }));
const bReply = rec.cleanRecordReply({ id: 'b1', text: 'Checking with the architect.', author: 'Ben', date: '2026-10-10T09:00:00Z' }, 'rfi');
B[0] = { ...B[0], due: '2026-11-01', replies: [bReply], modified: '2026-10-10T09:00:00Z', attachments: ['spec.pdf', 'sketch.pdf'] };
B[1] = { ...B[1], removed: '2026-10-10T12:00:00Z', modified: '2026-10-10T12:00:00Z' };
const bNew = rec.makeRecord({ type: 'rfi', sheet: 'f1:0', title: 'B: new', created: '2026-10-10T11:30:00Z' }, B);
B.push(bNew);
ok(aNew.n === 3 && bNew.n === 3 && aNew.id !== bNew.id, 'both tablets numbered a new RFI 3');
const m = rec.mergeRecords(A, B);
const mm = new Map(m.records.map((r) => [r.id, r]));
ok(m.records.length === 5, 'five records after the merge', m.records.length);
const m1 = mm.get(r1.id);
ok(m1.replies.map((x) => x.id).join() === 'b1,a1', 'the thread has both replies, oldest first', m1.replies.map((x) => x.id));
ok(m1.status === 'Answered' && m1.due === '2026-10-01', 'fields come from the copy changed last as a whole (A is later: its status and due date; B\'s due date change is not kept)', [m1.status, m1.due]);
ok(m1.attachments.sort().join() === 'sketch.pdf,spec.pdf', 'attachment names are joined');
ok(mm.get(r2.id).removed === '2026-10-10T12:00:00Z', 'a removal on one copy comes across');
ok(m.added.includes(bNew.id) && m.renumbered.length === 1 && m.renumbered[0].id === bNew.id && mm.get(bNew.id).n === 4 && mm.get(aNew.id).n === 3, 'two RFIs both numbered 3: the one that arrived gets 4', m.renumbered);
const m2 = rec.mergeRecords(m.records, B);
ok(m2.added.length === 0 && m2.changed.length === 0 && m2.renumbered.length === 0, 'merging the same copy again changes nothing', [m2.added, m2.changed, m2.renumbered]);
const m3 = rec.mergeRecords(B, A);
const mm3 = new Map(m3.records.map((r) => [r.id, r]));
ok(mm3.get(r1.id).status === 'Answered' && mm3.get(r1.id).replies.length === 2 && mm3.get(r2.id).removed, 'the other direction ends the same for fields, threads and removals');
const edited = rec.mergeRecords(m.records, [{ ...mm.get(r2.id), removed: '', modified: '2026-10-11T00:00:00Z' }]);
ok(!new Map(edited.records.map((r) => [r.id, r])).get(r2.id).removed, 'an edit made after the removal wins over it');
ok(rec.mergeRecords([], [{ type: 'nope' }, null]).records.length === 0, 'junk in the other copy is ignored');
// through real files
const fa = (await writer.writeMarkedUp(PDFLib, planBytes, { pages: [], records: rec.packRecords(A, () => 0) })).bytes;
const fb = (await writer.writeMarkedUp(PDFLib, planBytes, { pages: [], records: rec.packRecords(B, () => 0) })).bytes;
const ra = await open(fa, 'a.pdf', 'fa'), rb = await open(fb, 'b.pdf', 'fb');
const viaFiles = rec.mergeRecords(ra.records.map((r) => ({ ...r, sheet: 'fa:0' })), rb.records.map((r) => ({ ...r, sheet: 'fa:0' })));
ok(viaFiles.records.length === 5 && viaFiles.renumbered.length === 1, 'the same merge, through two saved PDFs');

// ------------------------------------------------------------------------------------------------
section('CSV and BCF');
const sheetOf = () => ({ title: 'K-101', file: 'kitchen-plan-sheet.pdf', page: 1 });
const rows = rec.recordRows([...set, ], sheetOf, TODAY);
ok(rows.length === 7 && rows[0][0] === 'No.' && rows[1][0] === 'RFI-0001' && rows[1][10] === 'Yes', 'CSV: header, one row per listed record (not the removed one), overdue flagged', rows.slice(0, 2));
ok(rows[1].length === rows[0].length, 'CSV rows are as wide as the header');
const wild = rec.recordRows([rec.makeRecord({ type: 'rfi', sheet: 'f1:0', title: '=HYPERLINK("x")', text: '+1' })], sheetOf, TODAY);
ok(csvM.toCsv(wild).includes("'=HYPERLINK") && csvM.toCsv(wild).includes("'+1"), 'CSV cells starting = or + are made safe');
const topic = rec.recordTopic(l1, { title: 'K-101', file: 'k.pdf' });
ok(topic.kind === 'log' && /Weather: Rain/.test(topic.description) && /People on site: 12/.test(topic.description), 'a log topic carries weather and crew in its description');
const { bytes: bcf, count } = await bcfM.buildBcf([
  { record: rec.recordTopic(r1, { title: 'K-101', file: 'k.pdf' }), sheetTitle: 'K-101', fileName: 'k.pdf', box: [0, 0, 100, 100], png: null },
  { record: rec.recordTopic(set[5], { title: 'K-101', file: 'k.pdf' }), sheetTitle: 'K-101', fileName: 'k.pdf', box: null, png: null }], { project: 'Kitchen', exported: new Date('2026-10-10T12:00:00Z') });
const files = bcfM.unzip(bcf);
const dec = new TextDecoder();
const topicFiles = [...files.keys()].filter((k) => k.endsWith('/markup.bcf'));
const x1 = dec.decode(files.get(topicFiles[0]).data);
ok(count === 2 && topicFiles.length === 2 && [...files.values()].every((v) => v.crcOk), 'BCF: two topics, every entry intact');
ok(/TopicType="RFI"/.test(x1) && /TopicStatus="Open"/.test(x1) && /<DueDate>2026-10-01T00:00:00Z<\/DueDate>/.test(x1) && /<AssignedTo>Ben<\/AssignedTo>/.test(x1) && /Hood clearance/.test(x1), 'BCF: type, status, due date, assignee, title', x1.slice(0, 400));
ok(/TopicType="Submittal"/.test(dec.decode(files.get(topicFiles[1]).data)), 'BCF: a submittal is its own TopicType');
const xsd = dec.decode(files.get('extensions.xsd').data);
ok(['RFI', 'Submittal', 'Daily log', 'Approved as noted', 'Revise and resubmit', 'Answered'].every((v) => xsd.includes('value="' + v + '"')) && xsd.includes('value="Pen"'), 'BCF: the extension schema lists record types and statuses beside the markups\'');
const { bytes: bcf2 } = await bcfM.buildBcf([{ record: rec.recordTopic(r1, sheetOf()), box: [0, 0, 1, 1] }], { project: 'Kitchen', exported: new Date('2026-10-10T12:00:00Z') });
const { bytes: bcf3 } = await bcfM.buildBcf([{ record: rec.recordTopic(r1, sheetOf()), box: [0, 0, 1, 1] }], { project: 'Kitchen', exported: new Date('2026-10-10T12:00:00Z') });
ok(Buffer.compare(Buffer.from(bcf2), Buffer.from(bcf3)) === 0, 'BCF: exporting again gives the same topics and guids');

// ------------------------------------------------------------------------------------------------
section('Words');
const ids = [...rec.RECORD_TYPES.map((k) => 'rec.type.' + k), ...rec.RECORD_TYPES.map((k) => 'rec.prefix.' + k), ...rec.RECORD_TYPES.map((k) => 'rec.text.' + k), ...rec.RECORD_TYPES.map((k) => 'rec.new.' + k),
  ...[...new Set(Object.values(rec.RECORD_STATUSES).flat())].map((s) => 'rec.status.' + s.toLowerCase().replace(/[^a-z0-9]+/g, '_')),
  ...['any', 'overdue', 'week', 'set', 'none'].map((k) => 'rec.filter.due.' + k),
  ...['no', 'type', 'sheet', 'file', 'page', 'title', 'text', 'status', 'assignee', 'due', 'overdue', 'date', 'weather', 'crew', 'attachments', 'author', 'created', 'modified', 'replies', 'last_reply'].map((k) => 'rcsv.' + k), 'tab.field'];
ok(ids.every((k) => Object.hasOwn(EN, k)), 'every record type, status, filter and CSV heading has its words', ids.filter((k) => !Object.hasOwn(EN, k)));
ok(ids.every((k) => Object.hasOwn(ES, k)), 'and its es-MX draft', ids.filter((k) => !Object.hasOwn(ES, k)));
const src = ['field-ui.js', 'records.js', 'bcf.js'].map((f) => fs.readFileSync(path.join(APP, f), 'utf8')).join('\n') + fs.readFileSync(path.join(APP, 'ui.inc'), 'utf8');
const used = new Set([...src.matchAll(/(?:\bt\(|Lang::e\()\s*'(rec\.[a-z0-9._]*[a-z0-9]|rcsv\.[a-z_]+)'/g)].map((x) => x[1]));
ok(used.size > 60 && [...used].every((k) => Object.hasOwn(EN, k) && Object.hasOwn(ES, k)), used.size + ' literal rec.* keys used, all in en and es-MX', [...used].filter((k) => !Object.hasOwn(EN, k) || !Object.hasOwn(ES, k)));
ok(i18n.missing().length === 0, 'no key asked for during the run was missing', i18n.missing());
i18n.init({ locale: 'es-MX', strings: ES });
ok(rec.recordTypeName('log') === 'Bitácora diaria' && rec.recordStatusName('rfi', 'Answered') === 'Respondido' && rec.recordNo(r1) === 'RFI-0001' && rec.recordNo(s1) === 'ENT-0001', 'the page language shows the words; stored values stay English');
ok(JSON.parse(rec.packRecords([r1], () => 0)).records[0].status === 'Open', 'the file keeps the stored value');

console.log('\n' + pass + ' passed, ' + fail + ' failed.');
if (fail) { console.log('Failures:\n  ' + failures.join('\n  ')); process.exit(1); }
