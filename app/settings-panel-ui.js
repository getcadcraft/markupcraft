/* SPDX-License-Identifier: Apache-2.0 */
/**
 * settings-panel-ui.js: markupcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSettingsPanel(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { limitSelect, onUnitsChange } from './unit-prefs.js';
import { UNITS } from './units.js';

export function mountSettingsPanel(ctx) {
  const { ST, applyContrast, settings, saveSettings, status, renderAuthor, host, renderProps } = ctx;

  // ---- Settings › MarkupCraft (settings.inc in the shared Settings dialog) ----
  const settingsDlg = document.querySelector('[data-app-settings]');
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const f = (n) => settingsDlg.querySelector('[name="' + n + '"]');
    const radios = (n, v) => settingsDlg.querySelectorAll('input[name="' + n + '"]').forEach((r) => { r.checked = r.value === v; });
    if (f('mcAuthor') && document.activeElement !== f('mcAuthor')) f('mcAuthor').value = ST.typedAuthor;
    // SI.9: signed in — "From your account (<name>)" and "Use another name", or the typed name with "Use my account name"
    const acc = settingsDlg.querySelector('[data-mc-author-account]');
    if (acc) {
      const other = !!ST.typedAuthor || ST.authorOther;
      acc.hidden = !ST.accountName;
      const line = acc.querySelector('[data-mc-author-from]');
      if (line) line.textContent = ST.accountName ? t('set.name.account', { name: ST.accountName }) : '';
      const ob = acc.querySelector('[data-mc-author-other]');
      if (ob) ob.hidden = other;
      const row = settingsDlg.querySelector('[data-mc-author-row]');
      if (row) row.hidden = !!ST.accountName && !other;
      const mine = settingsDlg.querySelector('[data-mc-author-mine]');
      if (mine) mine.hidden = !ST.accountName || !other;
    }
    if (f('mcColor')) f('mcColor').value = settings.markColor || '#d0021b';
    radios('mcWeight', settings.weight);
    radios('mcPaste', settings.pasteAt);
    radios('mcContrast', settings.contrast);
    if (f('mcUnit')) { limitSelect(f('mcUnit'), 'length', { keep: [settings.unit] }); f('mcUnit').value = settings.unit; }   // 0.7 UNITS
    if (f('mcPos')) { limitSelect(f('mcPos'), 'length', { keep: [settings.posUnit] }); f('mcPos').value = settings.posUnit; }
  }
  onUnitsChange(() => syncSettingsForm());   // 0.7 UNITS: Settings › General › Units changed
  function settingsChanged(say) {
    saveSettings();
    applyContrast();
    syncSettingsForm();
    renderProps();
    if (say) status(say);
  }
  if (settingsDlg) {
    settingsDlg.addEventListener('change', (e) => {
      const tg = e.target;
      switch (tg.name) {
        case 'mcAuthor':
          ST.typedAuthor = tg.value.trim().slice(0, 80);
          ST.author = ST.typedAuthor || ST.accountName;
          ST.askedAuthor = true;
          ctx.lsSet(ctx.LS.author, ST.typedAuthor);
          renderAuthor();
          status(ST.typedAuthor ? t('set.author.done', { author: ST.author }) : ST.accountName ? t('set.author.account', { author: ST.accountName }) : t('set.author.cleared'));
          break;
        case 'mcColor': settings.markColor = /^#[0-9a-f]{6}$/i.test(tg.value) && tg.value.toLowerCase() !== '#d0021b' ? tg.value.toLowerCase() : ''; settingsChanged(t('set.color.done')); break;
        case 'mcWeight': if (Object.hasOwn(ctx.WEIGHTS, tg.value)) { settings.weight = tg.value; settingsChanged(); } break;
        case 'mcPaste': settings.pasteAt = tg.value === 'offset' ? 'offset' : 'pointer'; settingsChanged(); break;
        case 'mcUnit': if (UNITS.some(([u]) => u === tg.value)) { settings.unit = tg.value; settingsChanged(); } break;
        case 'mcContrast': if (Object.hasOwn(ctx.CONTRAST, tg.value)) { settings.contrast = tg.value; settingsChanged(); } break;
        case 'mcPos': settings.posUnit = tg.value === 'mm' ? 'mm' : 'in'; settingsChanged(); break;
        default: break;
      }
    });
    // Reset: everything here but the name (it is who you are, not a preference). Colors picked in a tool's own panel stay too.
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, ctx.SET_DEFAULTS); settingsChanged(); });
    // fill the fields in whenever the dialog opens (the status bar's name button may have changed the name meanwhile)
    new MutationObserver(() => { if (settingsDlg.open) { ST.authorOther = false; syncSettingsForm(); } }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
    // SI.9: "Use another name" opens the name box; "Use my account name" clears the typed name
    settingsDlg.addEventListener('click', (e) => {
      if (e.target.closest('[data-mc-author-other]')) { ST.authorOther = true; syncSettingsForm(); settingsDlg.querySelector('[name="mcAuthor"]')?.focus(); }
      else if (e.target.closest('[data-mc-author-mine]')) {
        ST.typedAuthor = ''; ST.authorOther = false; ST.author = ST.accountName; ctx.lsSet(ctx.LS.author, '');
        renderAuthor(); syncSettingsForm();
        status(t('set.author.account', { author: ST.accountName }));
      }
    });
    syncSettingsForm();
  }
  // SI.9: who is signed in (host.js: the site's page, or Studio's account); a name change shows on the next open / Refresh.
  // Markups already made keep the name they were made with.
  function useAccount(a) {
    ST.accountName = a && typeof a.name === 'string' ? a.name.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 80) : '';
    ST.author = ST.typedAuthor || ST.accountName;
    renderAuthor(); syncSettingsForm();
  }
  host.on('account', useAccount);
  useAccount(host.account());

  return { syncSettingsForm };
}
