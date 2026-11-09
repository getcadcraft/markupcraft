#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * MarkupCraft notes, the pasteboard and private notes (0.9 NOTES.1) without a browser: the sealing (lib/notes), the keychain, the store's
 * rule that all()/onSheet() are regular markups only, the clipboard, Live's wire ops, and the file: every object in a saved PDF is
 * opened (streams inflated, hex strings decoded) to prove what is and is not in it.
 *   node bin/test-markupcraft-notes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'public_html/assets/apps/markupcraft/dev');
const TOOLS = path.join(ROOT, 'tools/markupcraft-test/node_modules');
const imp = (f) => import(pathToFileURL(path.join(APP, f)).href);
const pdfjs = await import(pathToFileURL(path.join(TOOLS, 'pdfjs-dist/legacy/build/pdf.mjs')).href);
const PDFLib = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/pdf-lib/current/pdf-lib.esm.js')).href);
const i18n = await imp('i18n.js');
i18n.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const model = await imp('model.js');
const reader = await imp('pdf-read.js');
const writer = await imp('pdf-write.js');
const clipM = await imp('clip.js');
const liveM = await imp('live.js').catch(() => null);
const pn = await imp('private-notes.js');
const env = { pdfjs, pdfLib: PDFLib, docOptions: { standardFontDataUrl: path.join(TOOLS, 'pdfjs-dist/standard_fonts/') } };

let pass = 0, fail = 0;
const ok = (c, label, d) => { if (c) { pass++; console.log('  ok   ' + label); } else { fail++; console.log('  FAIL ' + label + (d !== undefined ? ' — ' + JSON.stringify(d).slice(0, 300) : '')); } };
const section = (s) => console.log('\n== ' + s);

/** Everything readable in a PDF: raw bytes, inflated streams, decoded hex strings. */
async function allText(bytes) {
  const doc = await PDFLib.PDFDocument.load(bytes, { updateMetadata: false, throwOnInvalidObject: false });
  let out = Buffer.from(bytes).toString('latin1');
  const hex = (s) => { try { const b = Buffer.from(s, 'hex'); return (b[0] === 0xfe && b[1] === 0xff ? b.subarray(2).swap16().toString('utf16le') : b.toString('latin1')); } catch { return ''; } };
  for (const [, o] of doc.context.enumerateIndirectObjects()) {
    if (o instanceof PDFLib.PDFRawStream) { try { out += '\n' + Buffer.from(PDFLib.decodePDFRawStream(o).decode()).toString('utf8'); } catch { /* not ours */ } }
    const t = o.toString();
    out += '\n' + t.replace(/<([0-9A-Fa-f]{4,})>/g, (_, h) => hex(h));
  }
  return out;
}
async function blankPdf(pages = 2) {
  const d = await PDFLib.PDFDocument.create();
  for (let i = 0; i < pages; i++) d.addPage([612, 792]);
  return d.save({ useObjectStreams: false });
}
const pageOf = (i, markups) => ({ index: i, markups, cal: null, calCleared: true, badge: 0, sheetName: null, legendOf: () => [] });
const open = (bytes, id = 'f1') => reader.openPdf(env, bytes.slice(), { fileId: id, name: 't.pdf' });
const annotsOf = async (bytes) => { const d = await pdfjs.getDocument({ data: bytes.slice(), ...env.docOptions }).promise; const out = []; for (let i = 1; i <= d.numPages; i++) out.push(...await (await d.getPage(i)).getAnnotations({ intent: 'any' })); await d.loadingTask.destroy(); return out; };
const memStore = () => { let v; return { get: async () => v, set: async (x) => { v = x; }, clear: async () => { v = undefined; }, peek: () => v }; };

section('Sealing');
const salt = pn.toB64(crypto.getRandomValues(new Uint8Array(16)));
const key = await pn.deriveKey('correct horse battery', salt);
ok(key.extractable === false, 'the key cannot be exported');
const blob = await pn.seal(key, salt, pn.ITERATIONS, { writer: 'Ann Writer', markups: [{ text: 'SECRETWORD' }] });
ok((await pn.openBlob(key, blob)).writer === 'Ann Writer', 'its writer opens it');
ok(!JSON.stringify(blob).includes('Ann') && !JSON.stringify(blob).includes('SECRETWORD'), 'neither the words nor the writer are in the blob');
ok(await pn.openBlob(await pn.deriveKey('wrong horse battery', salt), blob) === null, 'another passphrase opens nothing');
const ct = pn.fromB64(blob.ct); ct[3] ^= 1;
ok(await pn.openBlob(key, { ...blob, ct: pn.toB64(ct) }) === null, 'a changed byte is refused');
const b2 = await pn.seal(key, salt, pn.ITERATIONS, { a: 1 });
ok(b2.iv !== blob.iv, 'a fresh nonce each time');
for (const bad of [null, [], { f: 'x' }, { ...blob, it: 5 }, { ...blob, salt: 'AAAA' }, { ...blob, ct: '<script>' }, { ...blob, iv: 7 }]) ok(pn.cleanBlob(bad) === null, 'hostile blob refused');
ok(!!pn.cleanBlob(blob), 'a good blob passes');

section('Keychain');
const s1 = memStore(), kc = pn.createKeychain({ storage: s1 });
await kc.load();
ok(kc.state === 'off', 'starts off');
ok((await kc.unlock('short')).code === 'short', 'a short passphrase is refused');
ok((await kc.unlock('my long passphrase', { remember: true })).created === true && kc.state === 'open', 'first use sets up');
const sealed = await kc.sealPayload({ markups: [1] });
ok(!JSON.stringify(s1.peek().check).includes('my long'), 'the passphrase is not stored');
const again = pn.createKeychain({ storage: s1 }); await again.load();
ok(again.state === 'open' && (await again.openPayload(sealed)).markups[0] === 1, 'remembered on this device');
await again.lock();
ok(again.state === 'locked' && await again.openPayload(sealed) === null && s1.peek().keys.length === 0, 'locked: no keys kept, nothing opens');
let threw = false; try { await again.sealPayload({}); } catch { threw = true; }
ok(threw, 'locked: it will not seal');
ok((await again.unlock('not the passphrase')).code === 'wrong' && again.state === 'locked', 'a wrong passphrase stays locked');
ok((await again.unlock('my long passphrase', { remember: false })).ok && again.state === 'open' && s1.peek().keys.length === 0, 'ask-every-time keeps no key');
const other = pn.createKeychain({ storage: memStore() }); await other.load();
const res = await other.unlock('my long passphrase', { blobs: [sealed] });
ok(res.created && res.added === 1 && (await other.openPayload(sealed)).markups[0] === 1, 'a new device: the passphrase opens notes in an open file');
const third = pn.createKeychain({ storage: memStore() }); await third.load(); await third.unlock('somebody elses words');
ok(await third.openPayload(sealed) === null && await third.addPassphrase('wrong wrong wrong', [sealed]) === 0, 'somebody else cannot open them');
ok(await third.addPassphrase('my long passphrase', [sealed]) === 1, 'addPassphrase opens older notes');

section('The store: regular markups only, unless asked');
const st = new model.Store();
const mk = (f) => model.makeMarkup({ sheet: 'f1:0', type: 'text', rect: [10, 10, 100, 40], text: 'x', ...f });
st.change('t', (tx) => { tx.add(mk({ id: 'reg' })); tx.add(mk({ id: 'nt', scope: 'note' })); tx.add(mk({ id: 'pv', scope: 'private' })); tx.add(mk({ id: 'off', rect: [700, 10, 800, 40] })); });
st.offPage = (m) => m.rect[0] > 612;
ok(st.all().map((m) => m.id).join() === 'reg', 'all() has regular markups only', st.all().map((m) => m.id));
ok(st.onSheet('f1:0').map((m) => m.id).join() === 'reg', 'onSheet() too');
ok(st.everything().length === 4 && st.everyOn('f1:0').length === 4, 'everything() has them all');
ok(st.punchItems().length === 0, 'internal lists use the safe view');
st.notesShown = false;
ok(st.everyOn('f1:0').filter((m) => st.shown(m)).map((m) => m.id).join() === 'reg', 'hidden: only the regular one shows');
st.notesShown = true;
ok(st.everyOn('f1:0').filter((m) => st.shown(m)).length === 4, 'shown: all four');
st.defaultScope = 'private';
st.change('t', (tx) => { tx.add(mk({ id: 'nw' })); }); st.defaultScope = undefined;
ok(st.get('nw').scope === 'private', 'new markups take the chosen kind');
st.change('t', (tx) => { tx.update('pv', { scope: null }); });
ok(st.isShared(st.get('pv')), 'a private note made regular is regular');
st.undo();
ok(st.get('pv').scope === 'private', 'undo puts it back');
ok(model.makeMarkup({ type: 'text', rect: [0, 0, 1, 1], scope: 'evil' }).scope === undefined, 'an unknown kind is dropped');

section('The clipboard');
const c = clipM.makeClip([st.get('pv'), st.get('nt'), st.get('reg')], {});
ok(c.items.length === 2 && !JSON.stringify(c).includes('private'), 'a private note never reaches a clip', c.items.length);
const pasted = clipM.cleanClip(JSON.stringify(c));
ok(pasted.items.some((i) => i.scope === 'note'), 'a copied note stays a note');
ok(clipM.makeClip([st.get('pv')], {}) === null, 'a clip of only private notes is nothing');

section('Live');
const live = liveM.createLive(new model.Store(), { files: () => [], sheets: () => [] });
const wire = (recs) => JSON.stringify(live.opsOf(recs));
const pvt = { id: 'p1', sheet: 's', type: 'text', scope: 'private', text: 'SECRETWORD', layer: '' }, plainM = { ...pvt, scope: undefined };
ok(wire([{ op: 'add', id: 'p1', after: pvt, sheet: 's' }]) === '[]', 'adding a private note sends nothing');
ok(wire([{ op: 'update', id: 'p1', before: pvt, after: { ...pvt, text: 'SECRETWORD2' }, sheet: 's' }]) === '[]', 'editing one sends nothing');
ok(wire([{ op: 'remove', id: 'p1', before: pvt, order: 0, sheet: 's' }]) === '[]', 'removing one sends nothing');
const madePriv = live.opsOf([{ op: 'update', id: 'p1', before: plainM, after: pvt, sheet: 's' }]);
ok(madePriv.length === 1 && madePriv[0].o === 'del' && !JSON.stringify(madePriv).includes('SECRET'), 'made private: the others are told it is gone, no words', madePriv);
const madeReg = live.opsOf([{ op: 'update', id: 'p1', before: pvt, after: plainM, sheet: 's' }]);
ok(madeReg.length === 1 && madeReg[0].o === 'add', 'made regular: the others get it');
const undoPriv = live.opsOf([{ op: 'update', id: 'p1', before: plainM, after: pvt, sheet: 's' }], true);
ok(undoPriv.length === 1 && undoPriv[0].o === 'add', 'undo of making it private brings it back for the others');
const ls = new model.Store(); ls.markups.set('p', { ...pvt, id: 'p' }); ls.markups.set('q', { ...plainM, id: 'q' });
const live2 = liveM.createLive(ls, { files: () => [], sheets: () => [] });
ok(live2.state().markups.map((m) => m.id).join() === 'q', 'a snapshot for those joining leaves them out');
live2.load(live2.snapshot());
ok(!!ls.get('p') && !!ls.get('q'), 'joining a session keeps this person\u2019s own private notes');

section('The file');
const base = await blankPdf(2);
const reg = model.makeMarkup({ id: 'mreg', sheet: 'f1:0', type: 'text', rect: [50, 50, 300, 90], text: 'REGULARWORDS', author: 'Ann' });
const once = await writer.writeMarkedUp(PDFLib, base, { pages: [pageOf(0, [reg]), pageOf(1, [])] });
ok((await allText(once.bytes)).includes('REGULARWORDS'), 'a regular markup is in the file');
// reopen; the markup becomes private: the old annotation must go from the bytes, not only from the page
const r1 = await open(once.bytes);
const m1 = r1.markups.find((m) => m.id === 'mreg');
ok(!!m1, 'it reopens as a markup');
const sealedBlob = await kc.sealPayload({ writer: 'Ann', markups: [{ ...m1, scope: 'private', sheet: 0, v: 1 }] });
const note = { ...model.makeMarkup({ id: 'mnote', sheet: 'x', type: 'text', rect: [640, 50, 800, 90], text: 'NOTEWORDS', author: 'Ann', replies: [{ author: 'Ann', text: 'THREADWORDS' }] }), scope: 'note', sheet: 1, v: 1 };
const foreign = await third.sealPayload({ writer: 'Bob', markups: [] });
const saved = await writer.writeMarkedUp(PDFLib, r1.bytes, { pages: [pageOf(0, []), pageOf(1, [])], removeRefs: r1.removeRefs, notes: { notes: [note], sealed: [sealedBlob, foreign] } });
let text = await allText(saved.bytes);
ok(!text.includes('REGULARWORDS'), 'made private: its words are nowhere in the file, in any object or stream');
ok(!text.includes('Ann') || !/"writer"/.test(text), 'the writer is not beside the sealed notes');
ok(text.includes('NOTEWORDS'), 'a note is in the saved file');
ok(saved.report.notes === 1 && saved.report.sealed === 2, 'the report counts them', saved.report);
ok((await annotsOf(saved.bytes)).length === 0, 'other PDF readers see no annotation at all');
const r2 = await open(saved.bytes);
const nb = r2.markups.find((m) => m.id === 'mnote');
ok(nb?.scope === 'note' && nb.sheet === 'f1:1' && nb.text === 'NOTEWORDS', 'the note reads back on its page, as a note', nb);
ok(nb?.replies?.[0]?.text === 'THREADWORDS', 'with its thread');
ok(r2.sealed?.length === 2 && r2.sealed[0].ct === sealedBlob.ct && r2.sealed[1].ct === foreign.ct, 'sealed blobs come back byte for byte');
ok(!r2.markups.some((m) => m.id === 'mreg'), 'nothing private is a markup until it is opened');
const payload = await kc.openPayload(r2.sealed[0]);
const back = reader.noteFromData(payload.markups[0], r2.pages[0].key, 'private');
ok(back?.scope === 'private' && back.text === 'REGULARWORDS', 'its writer gets it back');
ok(await kc.openPayload(r2.sealed[1]) === null, 'not another writer’s');
// saved again by someone who cannot open anything: everything survives
const relay = await writer.writeMarkedUp(PDFLib, r2.bytes, { pages: [pageOf(0, []), pageOf(1, [])], removeRefs: r2.removeRefs, notes: { notes: [{ ...nb, sheet: 1, v: 1 }], sealed: r2.sealed } });
const r3 = await open(relay.bytes);
ok(r3.sealed.length === 2 && r3.sealed[0].ct === sealedBlob.ct, 'a colleague saving it carries the sealed notes untouched');
// a clean copy
const clean = await writer.writeMarkedUp(PDFLib, r2.bytes, { pages: [pageOf(0, [reg]), pageOf(1, [])], removeRefs: r2.removeRefs });
text = await allText(clean.bytes);
ok(!text.includes('NOTEWORDS') && !text.includes('THREADWORDS') && !text.includes(sealedBlob.ct.slice(0, 40)) && !text.includes(writer.NOTES_KEY), 'a clean copy has no notes, no sealed notes, no trace of the key');
ok(text.includes('REGULARWORDS'), 'and keeps regular markups');
const r4 = await open(clean.bytes);
ok(!r4.sealed?.length && !r4.markups.some((m) => m.scope), 'reopened: nothing there');
const flat = await writer.writeMarkedUp(PDFLib, r2.bytes, { pages: [pageOf(0, [reg]), pageOf(1, [])], removeRefs: r2.removeRefs, flatten: 'all' });
text = await allText(flat.bytes);
ok(!text.includes('NOTEWORDS') && !text.includes(writer.NOTES_KEY), 'a flattened copy (print too) has neither');
// a deleted markup goes too
const r5 = await open(once.bytes);
const del = await writer.writeMarkedUp(PDFLib, r5.bytes, { pages: [pageOf(0, []), pageOf(1, [])], removeRefs: r5.removeRefs });
ok(!(await allText(del.bytes)).includes('REGULARWORDS'), 'a deleted markup is gone from the bytes');
// a host keeps the sealed notes (Super): the PDF has only their id
const uidOnly = await writer.writeMarkedUp(PDFLib, r2.bytes, { pages: [pageOf(0, []), pageOf(1, [])], removeRefs: r2.removeRefs, notes: { notes: [], sealed: [], uid: 'ab'.repeat(16) } });
text = await allText(uidOnly.bytes);
ok(!text.includes(sealedBlob.ct.slice(0, 40)) && !text.includes('cc-private-notes'), 'host mode: no sealed notes in the PDF');
ok((await open(uidOnly.bytes)).notesUid === 'ab'.repeat(16), 'host mode: the id reads back');
const badUid = await PDFLib.PDFDocument.load(once.bytes, { updateMetadata: false });
badUid.catalog.set(PDFLib.PDFName.of(writer.NOTES_KEY), badUid.context.register(badUid.context.flateStream(new TextEncoder().encode('{"v":1,"uid":"../../evil"}'))));
ok((await open(await badUid.save({ useObjectStreams: false }))).notesUid === null, 'a hostile id is refused');
// hostile streams
const hostile = await PDFLib.PDFDocument.load(once.bytes, { updateMetadata: false });
hostile.catalog.set(PDFLib.PDFName.of(writer.NOTES_KEY), hostile.context.register(hostile.context.flateStream(new TextEncoder().encode('{"v":1,"notes":[{"type":"foreign"},{"type":"text","rect":"x","sheet":0},{"sheet":99,"type":"text","rect":[0,0,1,1]},null],"sealed":"nope"}'))));
const rh = await open(await hostile.save({ useObjectStreams: false }));
ok(rh.markups.filter((m) => m.scope).length === 0 && Array.isArray(rh.sealed) && rh.sealed.length === 0, 'a hostile notes stream reads as none');

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
