#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
// EG.55 MarkupCraft half (markup_PART_3): stroke-clean.js is CadCraft's sketch.js byte for byte; pen-clean.js turns pen markups into precise ones.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const D = path.join(ROOT, 'public_html/assets/apps/markupcraft/dev');
let pass = 0, fail = 0;
const ok = (c, m, x) => { if (c) pass++; else { fail++; console.log('FAIL ' + m + (x !== undefined ? ' ' + JSON.stringify(x) : '')); } };
ok(Buffer.compare(fs.readFileSync(path.join(D, 'stroke-clean.js')), fs.readFileSync(path.join(ROOT, 'public_html/assets/apps/cadcraft/dev/sketch.js'))) === 0, 'stroke-clean.js is byte-identical to cadcraft/dev/sketch.js (node tools/strokeclean/sync.mjs)');
const { cleanPens, fieldsFor } = await import(pathToFileURL(path.join(D, 'pen-clean.js')).href);
const circ = [...Array(40)].map((_, i) => [100 + 50 * Math.cos(i / 40 * 6.4), 100 + 50 * Math.sin(i / 40 * 6.4)]);
const line = [[0, 0], [50, 1], [100, -1], [200, 2]];
const rect = [[0, 0], [100, 2], [200, -1], [201, 100], [198, 200], [100, 199], [1, 201], [-2, 100], [0, 0]];
const arc = [...Array(30)].map((_, i) => [300 + 80 * Math.cos(i / 30 * 2.2), 300 + 80 * Math.sin(i / 30 * 2.2)]);
const zig = [[0, 0], [100, 80], [180, 5], [260, 90], [340, 0]];
const one = (pts, extra = {}) => cleanPens([{ id: 'x', type: 'pen', sheet: 's', pts, ...extra }]).changes[0];
ok(one(circ)?.add.type === 'ellipse' && Math.abs(one(circ).add.rect[2] - one(circ).add.rect[0] - 100) < 4, 'a round stroke becomes an ellipse of the same size');
ok(one(line)?.add.type === 'line', 'a straight stroke becomes a line');
const L = one(line).add.pts; ok(Math.abs(L[0][1] - L[1][1]) < 1e-9, 'and a near level one is made exactly level', L);
ok(one(rect)?.add.type === 'rect', 'a closed four-cornered stroke becomes a rectangle');
ok(one(arc)?.add.type === 'arc' && one(arc).add.pts.length === 3, 'part of a circle becomes an arc (start, a point on it, end)');
ok(['polyline'].includes(one(zig)?.add.type), 'a zigzag becomes a polyline', one(zig));
const r = cleanPens([{ id: 'l', type: 'pen', sheet: 's', locked: true, pts: line }, { id: 'n', type: 'note', sheet: 's', pts: [[1, 1]] }, { id: 'p', type: 'pen', sheet: 's', pts: [[1, 1]] }]);
ok(r.changes.length === 0 && r.skipped === 3, 'locked pens, other markups and one-point scribbles are left alone', r);
ok(fieldsFor({ type: 'poly', closed: true, pts: [{ x: 0, y: 0 }, { x: 5, y: 3 }, { x: 8, y: 9 }] })?.type === 'polygon', 'a closed odd shape stays a polygon');
const two = cleanPens([{ id: 'a', type: 'pen', sheet: 's1', pts: line }, { id: 'b', type: 'pen', sheet: 's2', pts: circ }]);
ok(two.changes.length === 2 && two.changes.map((c) => c.id).join() === 'a,b', 'each sheet is cleaned on its own', two);
// EG.44 (permit review comments) and EG.39 (site progress), MarkupCraft halves
const P = await import(pathToFileURL(path.join(D, 'permit.js')).href);
const csv = 'kind,where,rule,clause,required,found,source,comment,what to do\r\nfail,Stair 1,Riser height,R311.7.5.1,<= 7.75 in,8 in,IRC 2021,"Too high, over ""the"" limit",Reduce it\r\nheads-up,Hall,Hall width,R311.6,>= 36 in,36.5 in,IRC,Close,\r\nbogus,x,y,,,,,hi,\r\n"\'=cmd",a,b,,,,,"=1+1",\r\n';
const pc = P.commentsFromCsv(csv);
ok(pc.comments.length === 2 && pc.bad === 2, 'permit CSV: two comments read, two rows skipped (unknown kind; a formula-looking kind)', pc);
ok(pc.comments[0].comment === 'Too high, over "the" limit', 'quoted commas and doubled quotes survive', pc.comments[0]);
const pn = P.permitNotes(pc.comments, { sheet: 's', view: [0, 0, 600, 800], author: 'A' });
ok(pn.length === 2 && pn.every((n) => n.type === 'note' && n.status === 'Open') && pn[1].pts[0][1] < pn[0].pts[0][1], 'notes go down the left margin, Open', pn);
ok(P.commentsFromCsv('a,b\r\n1,2').comments.length === 0, 'a CSV without the columns gives nothing');
const G = await import(pathToFileURL(path.join(D, 'progress-marks.js')).href);
const gj = JSON.stringify({ progress: [{ date: '2026-10-01', label: 'Flight 1', pct: 20, remainingCut: 4000, remainingFill: 100, overCut: 0, stockpile: 0 }, { date: '2026-10-20', label: 'Flight 2', pct: 42.4, remainingCut: 1200, overCut: 300, stockpile: 80, within: 0.7 }, { date: 'bad', pct: 1 }] });
const gr = G.progressFromJson(gj);
ok(gr.rows.length === 2 && gr.bad === 1 && gr.rows[0].date === '2026-10-20', 'progress JSON: newest first, a bad row counted', gr);
const gn = G.progressNotes(gr.rows, { sheet: 's', view: [0, 0, 600, 800] });
ok(/42 % done; left to cut 1,200 m³; 300 m³ over-dug; 80 m³ stockpile off the plan; 70 %/.test(gn[0].text) && gn[0].status === 'Open' && gn[1].status === 'Accepted', 'a survey says how much is done and what is off; a clean one is Accepted', gn.map((n) => n.text));
ok(G.progressFromJson('not json').rows.length === 0 && G.progressFromJson('{"state":{"progress":[{"date":"2026-01-02","pct":5}]}}').rows.length === 1, 'bad JSON gives nothing; the project json shape is read');
console.log(`${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
