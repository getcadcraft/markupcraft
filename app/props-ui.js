/* SPDX-License-Identifier: Apache-2.0 */
/**
 * props-ui.js: markupcraft.js's 11 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountProps(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { TYPES, stampLabel, statusReply, STATUSES, stampColor, PUNCH_STATUSES } from './model.js';
import { el, dateTime } from './ui-util.js';
import { ARC_METHODS } from './arc-tool.js';
import { sizeText } from './pagesize.js';
import { fieldOk } from './columns.js';
import { linkTarget } from './link.js';
import { measure, measureArea } from './units.js';
import { formatAngle, angleAt, arcThrough, arcLength } from './arcs.js';

export function mountProps(ctx) {
  const { ST, ui, store, settings, saveSettings, curSheet, curKey, sheetByKey, envOf, styleFor, status, sheetList, followLink, layerSelect, askLayerName, PIC, SIG, LS_SIG, isPic, currentPicture, choosePicture, drawSignature, signatures, useSignature, dropSignature, uploadSignature, sizeOf, sizeNameOrient, deleteSelection, hasSpaces, markupSpace, startCutout, setArcMethod, startEdit, field, fid, baseUi, stampChooser, styleControls, patchSel, refreshAll } = ctx;

  function renderProps() {   // a rebuilt panel gives focus back to the property grid row it was on (0.8)
    const pd = ui.props.ownerDocument, was = pd.activeElement && ui.props.contains(pd.activeElement) ? pd.activeElement.getAttribute('data-pg-row') : null;
    renderProps0();
    if (was) [...ui.props.querySelectorAll('[data-pg-row]')].find((e) => e.getAttribute('data-pg-row') === was)?.focus();
  }
  function renderProps0() {
    const box = ui.props;
    box.replaceChildren();
    const s = curSheet();
    if (ST.tool === 'content') { const r = baseUi.props(); ui.propsH.textContent = r.title; box.append(r.body); return; }
    const list = [...ST.sel].map((id) => store.get(id)).filter(Boolean);
    if (list.length === 1) { ui.propsH.textContent = list[0].locked ? t('props.h.locked') : TYPES[list[0].type] ? ctx.tname(list[0].type) : t('props.h.markup'); box.append(markupProps(list[0])); return; }
    if (list.length > 1) { ui.propsH.textContent = t('save.markups', { n: list.length }); box.append(multiProps(list)); return; }
    if (ctx.DRAW_TOOLS.has(ST.tool)) {
      ui.propsH.textContent = t('props.h.tool', { tool: ST.toolPreset?.name ? ST.toolPreset.name : ctx.tname(ST.tool) });
      const st = styleFor(ST.tool);
      const grid = el('div', { className: 'mc-props' });
      if (ST.tool === 'arc') {
        const aid = fid();
        grid.append(el('label', { for: aid, className: 'mc-k' }, t('arc.method')), el('select', { id: aid, className: 'mc-select', onchange: (e) => setArcMethod(e.target.value) },
          ...ARC_METHODS.map((m) => el('option', { value: m, selected: m === settings.arcMethod }, t('arc.method.' + m.toLowerCase())))));
      }
      if (ST.tool === 'count') {
        const cid = fid();
        grid.append(el('label', { for: cid, className: 'mc-k' }, t('props.group')), el('input', { type: 'text', id: cid, className: 'mc-input', maxlength: '60', value: ST.toolPreset?.label || settings.countLabel || t('count.default'),
          onchange: (e) => { const v = e.target.value.trim().slice(0, 60) || t('count.default'); if (ST.toolPreset) ST.toolPreset.label = v; else { settings.countLabel = v; saveSettings(); } } }));
      }
      if (ST.tool === 'stamp' && (ST.toolPreset?.items || ST.toolPreset?.content)) {   // a stamp made from a selection (71.9)
        box.append(el('p', { className: 'mc-note', dataset: { stampTool: '' } }, t(ST.toolPreset.content ? 'stamp.tool.content' : 'stamp.tool.group', { tool: ST.toolPreset.name, n: ST.toolPreset.items?.length || ST.toolPreset.content.n })));
        return;
      }
      if (ST.tool === 'stamp') grid.append(...stampChooser(ST.toolPreset?.label || (isPic(settings.stamp) ? settings.stamp : stampLabel(settings.stamp)), async (v) => {
        if (v === PIC) { if (await choosePicture()) ST.toolPreset = null; renderProps(); return; }
        if (v === SIG) { if (ctx.lsGet(LS_SIG, null)?.src || await drawSignature()) { settings.stamp = SIG; saveSettings(); ST.toolPreset = null; status(t('image.signature.ready')); } renderProps(); return; }
        if (ST.toolPreset) ST.toolPreset.label = v; else settings.stamp = v; saveSettings(); renderProps(); status(t('stamp.picked', { stamp: v }));
      }, !ST.toolPreset));
      if (ST.tool === 'stamp' && !ST.toolPreset && currentPicture()) {
        const pic = currentPicture();
        grid.append(el('span', { className: 'mc-k' }, t('image.preview')), el('span', { className: 'mc-stack' },
          el('img', { className: 'mc-pic-preview', src: pic.src, alt: pic.label }),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: async () => { if (settings.stamp === SIG) await drawSignature(); else await choosePicture(); renderProps(); } }, settings.stamp === SIG ? t('image.signature.again') : t('image.pick.again')),
          ...(settings.stamp === SIG ? [el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { sigUpload: '' }, onclick: async () => { await uploadSignature(); renderProps(); } }, t('image.signature.upload'))] : [])));
        if (settings.stamp === SIG) {
          // every signature kept in this browser: click one to use it (0.7.1 71.8)
          const now = ctx.lsGet(LS_SIG, null)?.src;
          const list = el('ul', { className: 'mc-sig-list', 'aria-label': t('image.signature.list') });
          for (const sg of signatures()) {
            list.append(el('li', { className: 'mc-chest-row' },
              el('button', { type: 'button', className: 'mc-item mc-sig-item', 'aria-pressed': String(sg.src === now), dataset: { sigId: sg.id }, onclick: () => useSignature(sg) },
                el('img', { className: 'mc-sig-thumb', src: sg.src, alt: '' }), el('span', { className: 'mc-item-title' }, sg.name || t('image.signature.label'))),
              el('button', { type: 'button', className: 'mc-x', title: t('image.signature.remove'), 'aria-label': t('image.signature.remove.label', { name: sg.name || t('image.signature.label') }), onclick: () => dropSignature(sg) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))));
          }
          grid.append(el('span', { className: 'mc-k' }, t('image.signature.list')), list);
        }
      }
      grid.append(...styleControls(st, (patch) => {
        if (ST.toolPreset) ST.toolPreset.style = { ...ST.toolPreset.style, ...patch };
        else { settings.styles[ST.tool] = { ...(settings.styles[ST.tool] || {}), ...patch }; saveSettings(); }
        renderProps();
      }, [ST.tool]));
      box.append(grid, el('p', { className: 'mc-note' }, ST.toolPreset ? t('props.tool.preset', { tool: ST.toolPreset.name }) : t('props.tool.note', { type: ctx.tlow(ST.tool) })));
      if (ctx.NEEDS_SCALE.has(ST.tool) && s) box.append(el('p', { className: 'mc-note' }, t('props.tool.scale', { scale: store.calibrations.get(s.page.key)?.label || t('props.tool.scale.none') })));
      return;
    }
    ui.propsH.textContent = s ? t('props.h.sheet') : t('tab.props');
    if (!s) { box.append(el('p', { className: 'mc-note' }, t('props.empty'))); return; }
    const cal = store.calibrations.get(s.page.key);
    const dl = el('dl', { className: 'mc-dl' });
    const row = (k, v) => { if (v !== '' && v !== null && v !== undefined) dl.append(el('dt', {}, k), el('dd', {}, String(v))); };
    row(t('props.sheet'), s.page.name || s.page.title);
    row(t('props.sheet_number'), s.page.sheetNo);
    // i18n-ignore: 'title block' is pdf-read.js's source key
    row(t('props.read_from'), { manual: t('props.from.manual'), label: t('props.from.label'), 'title block': t('props.from.title_block'), file: t('props.from.file') }[s.page.from] || '');
    row(t('props.file'), s.file.name);
    row(t('props.page'), t('props.page.of', { i: s.page.index + 1, n: s.file.pages.length }));
    const z = sizeOf(s.page);
    row(t('props.paper'), sizeNameOrient(z));
    row(t('props.paper.mm'), sizeText(z));
    if (z.custom && z.near) row(t('props.paper.near'), t('psize.near', { name: z.near.name, mm: z.near.deltaMm }));
    if (s.page.rotate) row(t('props.rotation'), t('props.rotation.deg', { n: s.page.rotate }));
    row(t('props.scale'), cal ? cal.label : t('status.scale.none'));
    row(t('tab.list'), store.onSheet(s.page.key).length);
    if (s.file.foreignCount) row(t('props.read_only'), t('props.read_only.count', { n: s.file.foreignCount }));
    box.append(dl, el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => ctx.calibrateDialog(null) }, cal ? t('props.scale.change') : t('tool.calibrate')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { act: 'sheet-rename' } }, t('props.rename'))));
    box.append(el('p', { className: 'mc-note' }, t('props.sheet.note')));
  }

  function markupProps(m) {
    const wrap = el('div', {});
    const env = envOf(m);
    const dl = el('dl', { className: 'mc-dl' });
    const row = (k, v) => { if (v !== '' && v !== null && v !== undefined) dl.append(el('dt', {}, k), el('dd', {}, String(v))); };
    row(t('props.author'), m.author || t('props.author.none'));
    row(t('props.created'), dateTime(m.created));
    if (m.modified && m.modified !== m.created) row(t('props.modified'), dateTime(m.modified));
    const s = sheetByKey(m.sheet);
    if (s && m.sheet !== curKey()) row(t('props.sheet'), s.page.title);
    for (const [k, v] of valueRows(m)) row(k, v);
    if (m.locked) {
      row(t('props.type'), m.src?.subtype || t('props.annotation'));
      row(t('props.subject'), m.subject);
      row(t('props.comment'), m.comment);
      wrap.append(dl, el('p', { className: 'mc-note' }, t('props.locked.note')), ctx.threadSection(m));
      return wrap;
    }
    wrap.append(dl);
    const grid = el('div', { className: 'mc-props' });
    const upd = (label, patch) => { store.change(label, (tx) => tx.update(m.id, patch)); refreshAll(); };
    let id = fid();
    grid.append(...field(t('props.status'), el('select', { id, className: 'mc-select', onchange: (e) => upd(t('undo.status'), { status: e.target.value, replies: [...m.replies, statusReply(e.target.value, ST.author)] }) }, ...STATUSES.map((st) => el('option', { value: st, selected: st === m.status }, ctx.stname(st)))), id));
    id = fid();
    grid.append(...field(t('props.subject'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '120', value: m.subject, onchange: (e) => upd(t('undo.subject'), { subject: e.target.value.slice(0, 120) }) }), id));
    id = fid();
    for (const c of store.columns) {
      id = fid();
      const v = m.fields?.[c.key] ?? '';
      const setField = (val) => { const err = fieldOk(c, val); if (err) { status(t(err, { col: c.name })); renderProps(); return; } const f = { ...(m.fields || {}) }; if (String(val).trim()) f[c.key] = String(val).trim(); else delete f[c.key]; upd(t('undo.field', { col: c.name }), { fields: f }); };
      const input = c.type === 'choice'
        ? el('select', { id, className: 'mc-select', onchange: (e) => setField(e.target.value) }, el('option', { value: '', selected: !v }, '—'), ...c.choices.map((ch) => el('option', { value: ch, selected: ch === v }, ch)))
        : el('input', { type: c.type === 'date' ? 'date' : 'text', id, className: 'mc-input', value: v, maxlength: '500', inputmode: c.type === 'number' ? 'decimal' : undefined, onchange: (e) => setField(e.target.value) });
      grid.append(...field(c.name, input, id));
    }
    id = fid();
    grid.append(...field(t('props.link'), el('select', { id, className: 'mc-select', onchange: (e) => upd(t('undo.link'), { link: e.target.value, linkView: null }) },
      el('option', { value: '', selected: !m.link }, t('link.none')),
      ...(m.link && !linkTarget(m.link, sheetList()) ? [el('option', { value: m.link, selected: true }, t('link.not_open', { sheet: m.link }))] : []),
      ...ST.sheets.map((s) => { const v = s.page.sheetNo || s.page.title; return el('option', { value: v, selected: !!m.link && linkTarget(m.link, sheetList())?.key === s.page.key }, s.page.title); })), id));
    if (m.link) grid.append(el('span', {}), el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('link.go.title'), onclick: () => followLink(m) }, el('i', { className: 'bi bi-box-arrow-up-right', 'aria-hidden': 'true' }), ' ', t('link.go', { sheet: m.link })));
    id = fid();
    grid.append(...field(t('props.layer'), layerSelect(id, m.layer, async (v) => { const n = v === '\u0001new' ? await askLayerName() : v; if (n === null) { renderProps(); return; } if (n) store.setLayer(n); upd(t('undo.layer'), { layer: n }); }), id));
    if (m.type === 'legend') {
      id = fid();
      grid.append(...field(t('legend.title.field'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '60', value: m.label, onchange: (e) => upd(t('undo.legend.edit'), { label: e.target.value.trim().slice(0, 60) }) }), id));
      id = fid();
      grid.append(...field(t('legend.scope'), el('select', { id, className: 'mc-select', onchange: (e) => upd(t('undo.legend.edit'), { legend: { scope: e.target.value } }) },
        el('option', { value: 'sheet', selected: m.legend?.scope !== 'set' }, t('legend.scope.sheet')), el('option', { value: 'set', selected: m.legend?.scope === 'set' }, t('legend.scope.set'))), id));
    }
    if (m.type === 'space') {
      id = fid();
      grid.append(...field(t('space.name.field'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '60', value: m.label, onchange: (e) => { const v = e.target.value.trim().slice(0, 60); if (v) upd(t('undo.space.rename'), { label: v }); else renderProps(); } }), id));
    }
    if (m.type === 'count') {
      id = fid();
      grid.append(...field(t('props.group'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '60', value: m.label, onchange: (e) => upd(t('undo.count.rename'), { label: e.target.value.trim().slice(0, 60) || t('count.default') }) }), id));
    }
    if (m.type === 'stamp') grid.append(...stampChooser(m.label, (v) => upd(t('undo.stamp'), { label: v, style: { ...m.style, color: m.style.color === stampColor(m.label) ? stampColor(v) : m.style.color } })));
    if (ctx.TEXT_TYPES.has(m.type)) {
      id = fid();
      grid.append(el('label', { for: id, className: 'mc-k span' }, t('props.text')), el('textarea', { id, className: 'mc-input span', rows: '3', value: m.text, onchange: (e) => upd(t('undo.edit_text'), { text: e.target.value }) }));
    }
    id = fid();
    grid.append(el('label', { for: id, className: 'mc-k span' }, m.type === 'note' ? t('props.note') : t('props.comment')), el('textarea', { id, className: 'mc-input span', rows: '3', value: m.comment, onchange: (e) => upd(t('undo.comment'), { comment: e.target.value }) }));
    if (!window.ccPropGrid) grid.append(el('p', { className: 'mc-props-sub' }, t('props.style')));   // the grid has its own Style heading
    grid.append(...styleControls(m.style, (patch) => upd(t('undo.style'), { style: { ...m.style, ...patch } }), [m.type]));
    wrap.append(grid, ctx.threadSection(m));
    // punch item
    const pg = el('div', { className: 'mc-props' });
    pg.append(el('p', { className: 'mc-props-sub' }, t('tab.punch')));
    if (m.punch) {
      pg.append(el('span', { className: 'mc-k' }, t('punch.number')), el('span', { className: 'v' }, String(m.punch.n)));
      pg.append(...punchFields(m));
      pg.append(el('span', {}), el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => upd(t('punch.remove'), { punch: null }) }, t('punch.remove')));
    } else {
      pg.append(el('span', { className: 'span' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => ctx.addToPunch([m.id]) }, t('punch.add.one'))));
    }
    wrap.append(pg);
    if (!m.locked) wrap.append(ST.notesUi.scopeControl([m]), flatToggle([m]));
    wrap.append(el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => ctx.saveToChest(m) }, t('chest.save.one')),
      m.locked ? null : el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('stamp.save.title'), dataset: { saveStamp: '' }, onclick: () => ctx.saveStamp() }, t('stamp.save')),
      ST.sheets.length > 1 ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: ctx.copyToSheets, dataset: { copySheets: '' } }, t('batch.button')) : null,
      ctx.TEXT_TYPES.has(m.type) || m.type === 'note' ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => startEdit(m) }, t('props.edit_on_sheet')) : null,
      m.type === 'area' && !m.locked ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => startCutout(m) }, t('hole.add')) : null,
      m.type === 'area' && !m.locked && m.holes?.length ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { store.change(t('undo.hole.remove'), (tx) => tx.update(m.id, { holes: [] })); status(t('hole.removed', { n: m.holes.length })); refreshAll(); } }, t('hole.remove', { n: m.holes.length })) : null,
      intoPageButton([m]),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc mc-danger', onclick: deleteSelection }, t('menu.delete'))));
    return wrap;
  }

  function punchFields(m) {
    const upd = (patch) => { store.change(t('undo.punch'), (tx) => tx.update(m.id, { punch: { ...m.punch, ...patch } })); refreshAll(); };
    let id = fid();
    const out = [];
    out.push(...field(t('punch.assignee'), el('input', { type: 'text', id, className: 'mc-input', maxlength: '80', value: m.punch.assignee, onchange: (e) => upd({ assignee: e.target.value.slice(0, 80) }) }), id));
    id = fid();
    out.push(...field(t('punch.due'), el('input', { type: 'date', id, className: 'mc-input', value: /^\d{4}-\d{2}-\d{2}$/.test(m.punch.due) ? m.punch.due : '', onchange: (e) => upd({ due: e.target.value }) }), id));
    id = fid();
    out.push(...field(t('punch.item_status'), el('select', { id, className: 'mc-select', onchange: (e) => upd({ status: e.target.value }) }, ...PUNCH_STATUSES.map((st) => el('option', { value: st, selected: st === m.punch.status }, ctx.pstname(st)))), id));
    return out;
  }

  /** Measured values of a markup as [label, value] rows ('' when the sheet has no scale). */
  const spaceRow = (m) => { const v = hasSpaces() ? markupSpace(m) : ''; return v ? [[t('filter.space'), v]] : []; };
  function valueRows(m) {
    const cal = envOf(m).cal;
    if (m.type === 'measure') return [[t('value.length'), cal ? measure(Math.hypot(m.pts[1][0] - m.pts[0][0], m.pts[1][1] - m.pts[0][1]), cal) : t('value.no_scale')]];
    if (m.type === 'area') { const v = measureArea(m.pts, cal, m.holes); return cal ? [[t('value.area'), v.area], [t('value.perimeter'), v.perimeter], ...(m.holes?.length ? [[t('value.cutouts'), String(m.holes.length)]] : [])] : [[t('value.area'), t('value.no_scale')]]; }
    if (m.type === 'count') return [[t('value.count'), String(m.pts.length)], ...spaceRow(m)];
    if (m.type === 'angle' && m.pts.length === 3) return [[t('value.angle'), formatAngle(angleAt(...m.pts))]];
    if (m.type === 'arc' && m.pts.length === 3) { const a = arcThrough(...m.pts); return [[t('value.length'), cal && a ? measure(arcLength(a), cal) : t('value.no_scale')]]; }
    return spaceRow(m);
  }
  /** The value as one line, for lists, CSV and BCF. */
  function valueOf(m) {
    if (m.type === 'count') return t('value.count.line', { group: m.label || t('count.default'), n: m.pts.length });
    if (m.type === 'area') { const r = valueRows(m); return r.length === 2 ? t('value.area.line', { area: r[0][1], perimeter: r[1][1] }) : ''; }
    if (m.type === 'measure' || m.type === 'arc') return envOf(m).cal ? valueRows(m)[0]?.[1] || '' : '';
    if (m.type === 'angle') return valueRows(m)[0]?.[1] || '';
    return '';
  }

  function multiProps(list) {
    const wrap = el('div', {});
    const ed = list.filter((m) => !m.locked);
    const types = [...new Set(ed.map((m) => m.type))];
    wrap.append(el('p', { className: 'mc-note' }, t(list.length - ed.length ? 'multi.types.locked' : 'multi.types', { types: types.map(ctx.tname).join(', '), n: list.length - ed.length })));
    if (!ed.length) return wrap;
    const grid = el('div', { className: 'mc-props' });
    const first = ed[0];
    const id = fid();
    const common = ed.every((m) => m.status === first.status) ? first.status : '';
    grid.append(...field(t('props.status'), el('select', { id, className: 'mc-select', onchange: (e) => e.target.value && patchSel(t('undo.status'), (m) => ({ status: e.target.value, replies: [...m.replies, statusReply(e.target.value, ST.author)] })) },
      common ? null : el('option', { value: '', selected: true }, t('multi.mixed')), ...STATUSES.map((st) => el('option', { value: st, selected: st === common }, ctx.stname(st)))), id));
    if (!window.ccPropGrid) grid.append(el('p', { className: 'mc-props-sub' }, t('props.style')));   // the grid has its own Style heading
    grid.append(...styleControls(first.style, (patch) => patchSel(t('undo.style'), (m) => ({ style: { ...m.style, ...patch } })), types));
    wrap.append(grid, ST.notesUi.scopeControl(ed), flatToggle(ed), el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => ctx.addToPunch() }, t('punch.add.one')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('stamp.save.title'), dataset: { saveStamp: '' }, onclick: () => ctx.saveStamp() }, t('stamp.save')),
      ST.sheets.length > 1 ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: ctx.copyToSheets, dataset: { copySheets: '' } }, t('batch.button')) : null,
      intoPageButton(ed),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc mc-danger', onclick: deleteSelection }, t('menu.delete'))));
    return wrap;
  }
  /**
   * "Flatten into the page when saved" (0.7.1 71.7): the markup stays a markup here (move it, resize it, undo); Save and
   * extract draw it into the page itself, as File › Pages › Save a flattened copy does for every markup.
   */
  function flatToggle(list) {
    const id = fid();
    const on = list.every((m) => m.flat);
    const box = el('input', { type: 'checkbox', id, checked: on, dataset: { flat: '' }, onchange: (e) => setFlat(list, e.target.checked) });
    box.indeterminate = !on && list.some((m) => m.flat);
    return el('div', { className: 'mc-flat' }, el('label', { for: id, className: 'mc-radio' }, box, ' ', t('flat.mark')), el('p', { className: 'mc-note' }, t('flat.mark.note')));
  }
  function setFlat(list, on) {
    const ids = list.filter((m) => !m.locked).map((m) => m.id);
    if (!ids.length) return;
    store.change(t(on ? 'undo.flat.on' : 'undo.flat.off', { n: ids.length }), (tx) => { for (const id of ids) tx.update(id, { flat: on }); });
    status(t(on ? 'flat.mark.on' : 'flat.mark.off', { n: ids.length }));
    refreshAll();
  }
  /** "Put into the page" (0.6 DF.14): opaque line work becomes the page's own content, one undo step. */
  function intoPageButton(list) {
    if (!baseUi.intoPage(list)) return null;
    return el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('base.into.title'), dataset: { intoPage: '' },
      onclick: async () => { if (await baseUi.putIntoPage(list)) { ST.sel = new Set(); refreshAll(); } } }, t('base.into'));
  }

  return { renderProps, punchFields, valueOf, setFlat };
}
