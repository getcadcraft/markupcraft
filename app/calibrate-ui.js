/* SPDX-License-Identifier: Apache-2.0 */
/**
 * calibrate-ui.js: markupcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountCalibrate(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { choices as unitChoices } from './unit-prefs.js';
import { UNITS, SCALE_PRESETS, parseLengthCalc, calibrationFrom, presetCalibration } from './units.js';

export function mountCalibrate(ctx) {
  const { ST, store, settings, curSheet, status, dialog, renderNav, setTool, refreshAll } = ctx;

  // ---- calibration ----
  async function calibrateDialog(ptLen, pts = null) {
    const s = curSheet();
    if (!s) return;
    const cal = store.calibrations.get(s.page.key);
    const body = [];
    let dist = null, unit = null;
    if (ptLen) {
      dist = el('input', { type: 'text', id: 'mc-dlg-dist', className: 'mc-input', placeholder: t('cal.placeholder'), autocomplete: 'off' });
      const on = unitChoices('length', { offer: UNITS.map(([v]) => v), keep: [cal?.unit || settings.unit] });   // 0.7 UNITS: the units turned on
      unit = el('select', { id: 'mc-dlg-unit', className: 'mc-select' }, ...UNITS.filter(([v]) => on.includes(v)).map(([v, l]) => el('option', { value: v, selected: v === (cal?.unit || settings.unit) }, l)));
      body.push(el('p', { className: 'mc-dlg-text' }, t('cal.two.text', { d: (ptLen / 72).toFixed(3) })),
        el('div', { className: 'mc-props' },
          el('label', { className: 'mc-k', for: 'mc-dlg-dist' }, t('cal.real')), dist,
          el('label', { className: 'mc-k', for: 'mc-dlg-unit' }, t('set.unit')), unit));
    } else {
      body.push(el('p', { className: 'mc-dlg-text' }, t('cal.preset.text')));
    }
    const preset = el('select', { id: 'mc-dlg-preset', className: 'mc-select' },
      el('option', { value: '', className: 'select-placeholder' }, ptLen ? t('cal.or_preset') : t('choose_one')),
      ...SCALE_PRESETS.map(([g, list, u]) => el('optgroup', { label: g }, ...list.map(([l, r]) => el('option', { value: [l, r, u].join('|'), selected: cal?.label === l }, l)))));
    body.push(el('div', { className: 'mc-props' }, el('label', { className: 'mc-k', for: 'mc-dlg-preset' }, t('props.scale')), preset));
    if (cal) body.push(el('p', { className: 'mc-muted' }, t('cal.now', { scale: cal.label })));
    const buttons = [['cancel', t('dlg.cancel')]];
    if (!ptLen) buttons.push(['pick', t('cal.pick')]);
    if (cal) buttons.push(['clear', t('cal.remove')]);
    buttons.push(['set', t('cal.set'), 'btn-plot']);
    let result = null;
    const r = await dialog({
      title: t('cal.title'), body, buttons, submit: 'set',
      check: (key) => {
        if (key !== 'set') return '';
        if (dist && dist.value.trim()) {
          const pl = parseLengthCalc(dist.value, unit.value);   // 0.6 DF.3: arithmetic, with the reason when it can't be read
          if (pl.error) return t(pl.error, { pos: pl.pos + 1, text: pl.text });
          const mm = pl.value;
          if (!mm) return t('cal.bad_length');
          result = calibrationFrom(ptLen, mm, unit.value);
          return '';
        }
        if (preset.value) { const [l, ratio, u] = preset.value.split('|'); result = presetCalibration(l, +ratio, u); return ''; }
        return ptLen ? t('cal.need.two') : t('cal.need.preset');
      },
    });
    if (r.key === 'pick') { setTool('calibrate'); return; }
    if (r.key === 'clear') { store.change(t('cal.remove'), (tx) => tx.setCalibration(s.page.key, null)); status(t('cal.removed')); }
    if (r.key === 'set' && result) {
      store.change(t('cal.set'), (tx) => tx.setCalibration(s.page.key, result));
      status(t('cal.done', { scale: result.label }));
      if (ST.tool === 'calibrate') { const next = ST.afterCalibrate; ST.afterCalibrate = 'measure'; setTool(next); }
    }
    renderNav();
    refreshAll();
    void pts;
  }

  return { calibrateDialog };
}
