#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** 0.11 close-out (EG.41): MarkupCraft's live adapter answers where(ops): the sheet's key and the markup's box in page units.
 *  The same answers tools/markupcraft-test/browser-mount.mjs asks of the real page, here with a stand-in store.
 *  Run: node bin/test-markupcraft-live-where.mjs */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { createLive } = await import(pathToFileURL(path.join(REPO, 'public_html/assets/apps/markupcraft/dev/live.js')).href);
let pass = 0, fail = 0;
const ok = (c, m, x) => { if (c) pass++; else { fail++; console.log('FAIL ' + m + (x !== undefined ? ' — ' + JSON.stringify(x) : '')); } };

const K = 'f1:0', K2 = 'f1:1';
const store = { markups: new Map([['m1', { id: 'm1', sheet: K, x: 10, y: 20, w: 100, h: 50 }], ['m2', { id: 'm2', sheet: K2, x: 1, y: 2, w: 3, h: 4 }]]) };
const bounds = (m) => (m.bad ? (() => { throw new Error('no bounds'); })() : [m.x, m.y, m.x + m.w, m.y + m.h]);
const lv = createLive(store, { files: () => [], sheets: () => [{ page: { key: K, title: 'A-101' } }], bounds });
ok(typeof lv.where === 'function', 'where exists');
ok(lv.sheetLabel(K) === 'A-101' && lv.sheetLabel(K2) === K2, 'sheet label: the title, else the key');
ok(lv.presenceKeys && lv.presenceKeys.sheet === 'sh' && lv.presenceKeys.cur === 'cur', 'presence keys name the sheet and the pointer', lv.presenceKeys);
let w = lv.where([{ o: 'set', id: 'm1', f: 'text', v: 'x' }]);
ok(w && w.sheet === K && JSON.stringify(w.box) === '[10,20,110,70]', 'a change to a markup is on its sheet with the markup\'s box', w);
w = lv.where([{ o: 'add', id: 'zz', m: { id: 'zz', sheet: K2, x: 5, y: 5, w: 1, h: 1 } }]);
ok(w && w.sheet === K2 && JSON.stringify(w.box) === '[5,5,6,6]', 'an added markup is located from the op itself', w);
w = lv.where([{ o: 'set', id: 'm1', f: 'x', v: 1 }, { o: 'add', id: 'z2', m: { id: 'z2', sheet: K, x: 200, y: 0, w: 10, h: 10 } }]);
ok(w.sheet === K && JSON.stringify(w.box) === '[10,0,210,70]', 'two markups on one sheet: the box grows over both', w);
w = lv.where([{ o: 'set', id: 'm1', f: 'x', v: 1 }, { o: 'set', id: 'm2', f: 'x', v: 1 }]);
ok(w.sheet === '\u0000mixed', 'two sheets are mixed', w);
w = lv.where([{ o: 'cal', sheet: K }, { o: 'cal', sheet: 'other:1' }]);
ok(w.sheet === '\u0000mixed' && w.box === null, 'calibrations of two sheets: mixed, no box', w);
w = lv.where([{ o: 'name', sheet: K, v: 'x' }]);
ok(w.sheet === K && w.box === null, 'a sheet name is on its sheet, unbounded', w);
ok(lv.where([{ o: 'del', id: 'm1', ly: '' }]) === null, 'a removal alone names no sheet: null (refused under a scope)');
w = lv.where([{ o: 'set', id: 'm1', f: 'x', v: 1 }, { o: 'del', id: 'm2' }]);
ok(w.sheet === K && w.box === null, 'a step with a removal in it has no box', w);
w = lv.where([{ o: 'add', id: 'b', m: { id: 'b', sheet: K, bad: true } }]);
ok(w.sheet === K && w.box === null, 'a markup whose bounds cannot be read is unbounded, never guessed', w);
ok(lv.where([]) === null && lv.where(null) === null && lv.where([{ o: 'g' }, { o: 'punch', v: 1 }]) === null, 'empty, missing, and group or punch-list ops are null');
console.log(pass + ' passed, ' + fail + ' failed'); process.exit(fail ? 1 : 0);
