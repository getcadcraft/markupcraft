#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * MarkupCraft batch links (0.9 SU.1085) without a browser: batchlink.js on a real multi-sheet set (title blocks, view titles,
 * callouts inline / stacked in bubbles / in words, codes that are not sheets), the hand fixes, re-runs after a sheet is added
 * or renumbered, cleanLinkView on hostile input, and the PDF round trip (a Link annotation with /FitR on the view; the
 * markup's linkView back on reopening; a 0.4-style link with no view still opens and still writes /Fit).
 *
 *   node bin/test-markupcraft-links.mjs [--verbose]
 *
 * Fixtures: testfiles/generated/markup/link-set.pdf + link-set-addendum.pdf (node tools/markupcraft-test/make-link-set.mjs
 * makes them once); skipped with a message when testfiles/ is not there. pdf.js from tools/markupcraft-test (npm install once).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const VERBOSE = process.argv.includes('--verbose');
const APP = path.join(ROOT, 'public_html/assets/apps/markupcraft/dev');
const TOOLS = path.join(ROOT, 'tools/markupcraft-test/node_modules');
const GEN = path.resolve(ROOT, '../testfiles/generated/markup');
const SET = path.join(GEN, 'link-set.pdf'), ADD = path.join(GEN, 'link-set-addendum.pdf');
if (!fs.existsSync(path.join(TOOLS, 'pdfjs-dist'))) { console.error('Run (cd tools/markupcraft-test && npm install) first.'); process.exit(2); }
if (!fs.existsSync(SET) || !fs.existsSync(ADD)) { console.log('Skipped: no ' + SET + ' (node tools/markupcraft-test/make-link-set.mjs makes it).'); process.exit(0); }
const imp = (f) => import(pathToFileURL(path.join(APP, f)).href);
const pdfjs = await import(pathToFileURL(path.join(TOOLS, 'pdfjs-dist/legacy/build/pdf.mjs')).href);
const PDFLib = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/pdf-lib/current/pdf-lib.esm.js')).href);
const i18n = await imp('i18n.js');
i18n.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const model = await imp('model.js');
const reader = await imp('pdf-read.js');
const writer = await imp('pdf-write.js');
const ts = await imp('textsearch.js');
const bl = await imp('batchlink.js');
const linkM = await imp('link.js');
const slipM = await imp('slip.js');
const env = { pdfjs, pdfLib: PDFLib, docOptions: { standardFontDataUrl: path.join(TOOLS, 'pdfjs-dist/standard_fonts/') } };

let pass = 0, fail = 0;
const failures = [];
function ok(c, label, detail) {
  if (c) { pass++; if (VERBOSE) console.log('  ok   ' + label); }
  else { fail++; failures.push(label); console.log('  FAIL ' + label + (detail !== undefined ? '  → ' + JSON.stringify(detail).slice(0, 400) : '')); }
}

async function open(file, id) {
  const r = await reader.openPdf(env, new Uint8Array(fs.readFileSync(file)), { fileId: id, name: path.basename(file) });
  const sheets = [];
  for (const p of r.pages) {
    const idx = ts.textIndex((await (await r.doc.getPage(p.index + 1)).getTextContent()).items);
    sheets.push({ key: p.key, sheetNo: p.sheetNo, title: p.title, name: p.name, from: p.from, view: p.view, idx, page: p });
  }
  return { r, sheets };
}
const scan = (sheets, nos = sheets.map((s) => s.sheetNo).filter(Boolean)) => {
  const own = (s) => [s.sheetNo, s.page?.tb?.number].filter(Boolean);   // as markupcraft.js batchLinks: the old printed number too
  const views = new Map(sheets.map((s) => [s.key, bl.sheetViews(s.idx, { sheetNo: own(s), view: s.view })]));
  const rows = [];
  for (const s of sheets) for (const c of bl.findCallouts(s.idx, { sheetNos: nos, ownNo: own(s) })) rows.push({ ...c, sheet: s });
  return { views, rows, viewsOf: (k) => views.get(k) || [] };
};

console.log('== Title blocks');
const A = await open(SET, 'f1');
ok(A.sheets.length === 5, 'the set has five sheets');
ok(JSON.stringify(A.sheets.map((s) => s.sheetNo)) === JSON.stringify(['A-101', 'A-201', 'A-301', '', 'A-501']), 'sheet numbers from the title blocks; A-401 drew its number as lines, so it has none', A.sheets.map((s) => s.sheetNo));
ok(A.sheets[1].name === 'EXTERIOR ELEVATIONS' && A.sheets[4].name === 'WALL SECTIONS AND DETAILS', 'two-line sheet names are joined', A.sheets.map((s) => s.name));
ok(A.sheets.every((s) => s.from === 'title block'), 'every one says where it came from (the title block)');

console.log('== Views');
let S = scan(A.sheets);
const ids = (k) => S.viewsOf(k).map((v) => v.id).join(',');
ok(ids(A.sheets[4].key) === '1,2,3,4,5,6', 'A-501: views 1-6 found by their bubbles', ids(A.sheets[4].key));
ok(ids(A.sheets[2].key) === '1,2' && ids(A.sheets[3].key) === '1,2', 'A-301 and A-401 have views 1 and 2 (A-401 by size and title: no number in its bubbles)', [ids(A.sheets[2].key), ids(A.sheets[3].key)]);
ok(ids(A.sheets[0].key) === '' && ids(A.sheets[1].key) === '', 'plans with numbered notes and revision rows have no views (notes and the title block are not views)', [ids(A.sheets[0].key), ids(A.sheets[1].key)]);
const v3 = S.viewsOf(A.sheets[4].key).find((v) => v.id === '3');
ok(v3?.title === 'WINDOW HEAD DETAIL', 'a view knows its title', v3);
ok(v3 && v3.box[0] <= 1100 && v3.box[2] >= 1100 + 310 && v3.box[1] <= 860 && v3.box[3] >= 860 + 280 && v3.box[2] <= 1520, 'view 3\'s box holds its drawing and stops at the title block', v3?.box);
const v5 = S.viewsOf(A.sheets[4].key).find((v) => v.id === '5');
ok(v5 && v5.box[3] <= 860 && v5.box[1] <= 420 && v5.box[0] >= 500, 'view 5 (lower row) stops under the view above it', v5?.box);

console.log('== Callouts');
const refs = (i) => S.rows.filter((r) => r.sheet === A.sheets[i]).map((r) => r.ref + '>' + (r.known || '?' + r.no));
ok(refs(0).length === 7 && refs(0).includes('2/A-401>?A-401') && refs(0).includes('2/A-601>?A-601'), 'A-101: seven callouts, two naming sheets no open sheet has', refs(0));
const has = (i, ref) => S.rows.some((r) => r.sheet === A.sheets[i] && r.ref === ref);
ok(has(0, '3/A-501') && has(0, '5/A-501') && has(0, 'DETAIL 2 ON A-501') && has(0, '1/A-301') && has(0, '7/A-501'), 'inline, bubble ("5" over "A-501") and worded callouts', refs(0));
ok(has(1, 'A-101') && has(1, '2/A-301') && has(1, '4/A-501'), 'A-201: a bare sheet number in a note, a section bubble, a detail', refs(1));
ok(!S.rows.some((r) => /R-19|W12|2X4/i.test(r.ref)), 'R-19, W12X26 and 2X4 are not taken for sheets', S.rows.map((r) => r.ref));
ok(!S.rows.some((r) => r.sheet.sheetNo && r.no === r.sheet.sheetNo), 'a sheet\'s own number (title block, view titles) is left out');
const bub = S.rows.find((r) => r.ref === '5/A-501');
ok(bub && bub.detail === '5' && bub.box[3] - bub.box[1] > 15, 'the bubble\'s box covers both numbers', bub?.box);

console.log('== Resolve and the hand fixes');
const list = A.sheets.map((s) => ({ key: s.key, sheetNo: s.sheetNo, title: s.title }));
const st = (ref, fixes, lst = list, s = S) => { const r = s.rows.find((x) => x.ref === ref); return r && bl.resolveCallout(r, lst, s.viewsOf, fixes); };
ok(st('3/A-501').status === 'ok' && st('3/A-501').view.id === '3', '3/A-501 → A-501 view 3');
ok(st('7/A-501').status === 'no-view' && st('7/A-501').target.sheetNo === 'A-501', '7/A-501: the sheet, but no view 7 (listed for a hand pick)');
ok(st('2/A-401').status === 'no-sheet' && st('2/A-601').status === 'no-sheet', 'A-401 (no number yet) and A-601 (not open) miss');
ok(st('A-101').status === 'ok' && st('A-101').view === null, 'a bare number links to the whole sheet');
// the person types A-401 in step 1: the same scan with that number now links, to view 2
const typed = A.sheets.map((s) => (s.sheetNo ? s : { ...s, sheetNo: 'A-401' }));
const S2 = scan(typed);
const list2 = typed.map((s) => ({ key: s.key, sheetNo: s.sheetNo, title: s.title }));
ok(st('2/A-401', new Map(), list2, S2).status === 'ok' && st('2/A-401', new Map(), list2, S2).view.id === '2', 'with A-401 typed by hand, 2/A-401 → A-401 view 2');
// a fix by hand for a number no sheet has: every callout to that number follows it
const fx = new Map([[slipM.sheetNoKey('A-601'), A.sheets[3].key]]);
ok(st('2/A-601', fx).target?.key === A.sheets[3].key, 'a hand fix (A-601 means this sheet) is followed');

console.log('== One pass, then a re-run');
const plan = (s, existing, lst, fixes = new Map()) => {
  for (const r of s.rows) Object.assign(r, bl.resolveCallout(r, lst, s.viewsOf, fixes));
  return bl.planLinks(s.rows, existing);
};
let rows = plan(S2, [], list2);
const count = (a) => rows.filter((r) => r.action === a).length;
ok(count('new') === 9 && count('miss') === 2, 'first pass: 9 to link, 2 misses (2/A-601 on two sheets)', rows.map((r) => r.ref + ':' + r.action));
// make the links as the page does: rect markups with link + linkView
const made = rows.filter((r) => r.action === 'new').map((r) => model.makeMarkup({ sheet: r.sheet.key, type: 'rect', rect: [r.box[0] - 2, r.box[1] - 2, r.box[2] + 2, r.box[3] + 2], link: r.target.sheetNo, linkView: bl.linkViewFor(r, r.view), subject: 'Sheet link' }));
ok(made.every((m) => m.linkView?.ref) && made.find((m) => m.linkView.ref === '3/A-501').linkView.box.length === 4, 'each link keeps its view and the callout it came from');
const existing = made.map((m) => ({ id: m.id, box: m.rect, link: m.link, linkView: m.linkView, resolves: !!linkM.linkTarget(m.link, list2) }));
const handMade = model.makeMarkup({ sheet: A.sheets[0].key, type: 'cloudrect', rect: S2.rows.find((r) => r.ref === '2/A-601').box.map((v, i) => v + (i < 2 ? -3 : 3)), link: 'A-301' });
existing.push({ id: handMade.id, box: handMade.rect, link: handMade.link, linkView: handMade.linkView, resolves: true });
rows = plan(scan(typed), existing, list2);
ok(rows.filter((r) => r.action === 'keep').length === 9, 're-run with nothing changed: every link kept', rows.map((r) => r.ref + ':' + r.action));
ok(rows.find((r) => r.sheet === typed[0] && r.ref === '2/A-601').action === 'hand', 'a link made by hand over a callout is never changed');
// the addendum adds A-601: the misses link now
const B = await open(ADD, 'f2');
const all = [...typed, ...B.sheets];
const list3 = all.map((s) => ({ key: s.key, sheetNo: s.sheetNo, title: s.title }));
rows = plan(scan(all), existing.map((e) => ({ ...e, resolves: !!linkM.linkTarget(e.link, list3) })), list3);
const a601 = rows.filter((r) => r.no === 'A-601');
ok(a601.length === 2 && a601.some((r) => r.action === 'new' && r.view?.id === '2') && a601.some((r) => r.action === 'hand'), 'with the addendum open, 2/A-601 on A-201 links to A-601 view 2 (the hand-made one on A-101 stays)', a601.map((r) => r.action));
// A-501 renumbered A-502 by hand: its links break; the callouts still say A-501 → listed; one fix relinks them all
const ren = all.map((s) => (s.sheetNo === 'A-501' ? { ...s, sheetNo: 'A-502' } : s));
const list4 = ren.map((s) => ({ key: s.key, sheetNo: s.sheetNo, title: s.title }));
const ex4 = existing.map((e) => ({ ...e, resolves: !!linkM.linkTarget(e.link, list4) }));
rows = plan(scan(ren, ren.map((s) => s.sheetNo).filter(Boolean)), ex4, list4);
const r501 = rows.filter((r) => r.no === 'A-501');
ok(r501.length === 5 && r501.every((r) => r.action === 'broken'), 'A-501 renumbered A-502: its five links are listed as broken', r501.map((r) => r.ref + ':' + r.action));
rows = plan(scan(ren, ren.map((s) => s.sheetNo).filter(Boolean)), ex4, list4, new Map([['A501', ren[4].key]]));
const r501b = rows.filter((r) => r.no === 'A-501');
ok(r501b.every((r) => r.action === 'update' && r.target.sheetNo === 'A-502'), 'one fix (A-501 means A-502) updates all five', r501b.map((r) => r.action));
ok(r501b.find((r) => r.ref === '3/A-501').view?.id === '3', 'and they keep their views');

// a view picked by hand (7/A-501 has no view 7: the person picked 6) survives a re-run, and moves with a renumbered sheet
{
  const S5 = scan(typed);
  const r7 = S5.rows.find((r) => r.ref === '7/A-501');
  const v6 = S5.viewsOf(typed[4].key).find((v) => v.id === '6');
  const m7 = model.makeMarkup({ sheet: r7.sheet.key, type: 'rect', rect: [r7.box[0] - 2, r7.box[1] - 2, r7.box[2] + 2, r7.box[3] + 2], link: 'A-501', linkView: bl.linkViewFor(r7, v6) });
  const ex7 = [{ id: m7.id, box: m7.rect, link: m7.link, linkView: m7.linkView, resolves: true }];
  let rr = plan(S5, ex7, list2).find((r) => r.ref === '7/A-501');
  ok(rr.action === 'keep' && rr.pickedView === '6', 'a hand-picked view is kept on a re-run', rr);
  const renB = typed.map((s) => (s.sheetNo === 'A-501' ? { ...s, sheetNo: 'A-502' } : s));
  const lB = renB.map((s) => ({ key: s.key, sheetNo: s.sheetNo, title: s.title }));
  rr = plan(scan(renB), [{ ...ex7[0], resolves: false }], lB, new Map([['A501', renB[4].key]])).find((r) => r.ref === '7/A-501');
  ok(rr.action === 'update' && rr.pickedView === '6' && rr.status === 'no-view', 'and handed on when its sheet is renumbered', rr);
}

console.log('== cleanLinkView (untrusted)');
const C = model.cleanLinkView;
ok(C(null) === undefined && C('x') === undefined && C([1, 2]) === undefined && C({}) === undefined, 'nothing → undefined');
ok(JSON.stringify(C({ id: '3<script>', box: [1, 2, 3, 4], ref: 'a\u0000b' })) === JSON.stringify({ id: '3SCRIPT', box: [1, 2, 3, 4], ref: 'ab' }), 'ids and refs cleaned', C({ id: '3<script>', box: [1, 2, 3, 4], ref: 'a\u0000b' }));
ok(C({ id: '1', box: [1, 2, 'x', 4] }).box === null && C({ id: '1', box: [5, 5, 1, 1] }).box === null && C({ id: '1', box: [0, 0, 1e9, 1] }).box === null, 'a bad box is dropped');
ok(C({ ref: 'x'.repeat(100) }).ref.length === 40 && C({ id: '123456789012' }).id.length === 8, 'lengths capped');
ok(model.makeMarkup({ sheet: 's', type: 'rect', rect: [0, 0, 1, 1], linkView: { id: '3' } }).linkView === undefined, 'no link, no linkView');

console.log('== The PDF round trip');
const target = A.sheets[4];
const src = new Uint8Array(fs.readFileSync(SET));
const mk = (r, v) => model.makeMarkup({ sheet: r.sheet.key, type: 'rect', rect: [r.box[0] - 2, r.box[1] - 2, r.box[2] + 2, r.box[3] + 2], link: r.target.sheetNo, linkView: v === undefined ? bl.linkViewFor(r, r.view) : v, subject: 'Sheet link' });
const rA = plan(S2, [], list2).filter((r) => r.sheet === typed[0] && r.target);
const mks = rA.map((r) => mk(r));
const old = model.makeMarkup({ sheet: A.sheets[1].key, type: 'rect', rect: [600, 790, 660, 812], link: 'A-301' });   // a 0.4-style link
const idxOf = new Map(list2.map((s, i) => [s.sheetNo, i]));
const out = await writer.writeMarkedUp(PDFLib, src, {
  pages: A.r.pages.map((p) => ({ index: p.index, markups: [...mks, old].filter((m) => m.sheet === p.key) })),
  linkPage: (link, m) => { const i = idxOf.get(link); if (i === undefined) return null; return m?.linkView?.box ? { index: i, box: m.linkView.box } : i; },
});
const task = pdfjs.getDocument({ data: out.bytes.slice(), ...env.docOptions }); const doc = await task.promise;
const links0 = (await (await doc.getPage(1)).getAnnotations()).filter((a) => a.subtype === 'Link');
const links1 = (await (await doc.getPage(2)).getAnnotations()).filter((a) => a.subtype === 'Link');
ok(links0.length === mks.length, 'one PDF Link annotation per link on A-101', [links0.length, mks.length]);
const m3 = mks.find((m) => m.linkView.ref === '3/A-501');
const cIn = (a, m) => { const cx = (m.rect[0] + m.rect[2]) / 2, cy = (m.rect[1] + m.rect[3]) / 2; return cx >= a.rect[0] && cx <= a.rect[2] && cy >= a.rect[1] && cy <= a.rect[3]; };
const l3 = links0.find((a) => cIn(a, m3));
const dest = l3 && (Array.isArray(l3.dest) ? l3.dest : null);
if (VERBOSE || !dest) console.log('  link 3:', JSON.stringify(l3), JSON.stringify(m3.rect));
ok(dest && dest[1]?.name === 'FitR' && Math.abs(dest[2] - v3.box[0]) < 0.5 && Math.abs(dest[5] - v3.box[3]) < 0.5, '3/A-501 jumps in any reader with /FitR on view 3', dest);
ok(dest && (await doc.getPageIndex(dest[0])) === 4, 'on the A-501 page');
const lw = links0.find((a) => Array.isArray(a.dest) && a.dest[1]?.name === 'Fit');
ok(!!lw, 'a link with no view (7/A-501 picked as the whole sheet) jumps with /Fit', links0.map((a) => a.dest?.[1]?.name));
ok(links1.length === 1 && links1[0].dest?.[1]?.name === 'Fit' && (await doc.getPageIndex(links1[0].dest[0])) === 2, 'a 0.4-style link (no view) still writes /Fit to its sheet');
await task.destroy();
const back = await reader.openPdf(env, out.bytes.slice(), { fileId: 'f9', name: 'back.pdf' });
const m3b = back.markups.find((m) => m.linkView?.ref === '3/A-501');
ok(m3b && m3b.link === 'A-501' && m3b.linkView.id === '3' && JSON.stringify(m3b.linkView.box) === JSON.stringify(m3.linkView.box), 'reopened: the markup has its link and view');
const oldB = back.markups.find((m) => m.link === 'A-301' && m.sheet === 'f9:1');
ok(oldB && oldB.linkView === undefined, 'the 0.4-style link reopens as it was');
ok(back.markups.filter((m) => m.link).length === mks.length + 1, 'no extra markups from our own Link annotations', back.markups.filter((m) => m.link).length);
// saving again replaces our Link annotations, never doubles them
const out2 = await writer.writeMarkedUp(PDFLib, out.bytes.slice(), { pages: back.pages.map((p) => ({ index: p.index, markups: back.markups.filter((m) => m.sheet === p.key) })),
  linkPage: (link, m) => { const i = idxOf.get(link); if (i === undefined) return null; return m?.linkView?.box ? { index: i, box: m.linkView.box } : i; }, removeRefs: back.removeRefs });
const task2 = pdfjs.getDocument({ data: out2.bytes.slice(), ...env.docOptions }); const doc2 = await task2.promise;
const n2 = (await (await doc2.getPage(1)).getAnnotations()).filter((a) => a.subtype === 'Link').length;
ok(n2 === mks.length, 'saved again: still one Link annotation per link', n2);
await task2.destroy();
await reader.closePdf(back.doc); await reader.closePdf(A.r.doc); await reader.closePdf(B.r.doc);

console.log('\n' + pass + ' passed, ' + fail + ' failed.');
if (fail) { console.log('Failures:\n  ' + failures.join('\n  ')); process.exit(1); }
