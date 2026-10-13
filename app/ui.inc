<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * MarkupCraft review & markup UI (rendered inside app-shell.inc; $app, $__area, $__build and $__manifest are set).
 * Server-rendered shell: toolbar, sheets list, stage, side panels and status bar. markupcraft.js runs it.
 * PDFs open and save on this computer; nothing here posts anywhere.
 *
 *   top     toolbar: file · select · draw · revise · annotate · measure · edit (undo, redo, copy, paste + a More menu:
 *           cut, copy, paste, paste in place, duplicate, delete, select all, select none — each with its keys)
 *   left    sheets of the open set (search, thumbnails)
 *   stage   the sheet (two canvases: sheet + saved markups, live overlay) · sheet/zoom bar
 *   right   tabs: properties (+ comment thread) · markups list (CSV, BCF) · punch list · tool chest · compare
 *   bottom  status bar (position, messages, sheet scale, author)
 */
$__lx = static function (string $key, array $html): string {
    // Lang::e() text whose fills are trusted markup (<kbd>, <strong>): the text is escaped, then each fill put in.
    $mark = [];
    foreach (array_keys($html) as $i => $k) $mark[$k] = "\u{E000}" . $i . "\u{E001}";
    return strtr(Lang::e($key, $mark), array_combine(array_values($mark), array_values($html)));
};
/* Toolbar: group key (English, kept in data-tb-key so the shell's saved arrangement survives a language change) →
   [tool key, icon]; the label is lang key tool.<key>, the title tool.<key>.title. */
$__tools = [
    'File' => [['act:open', 'folder2-open'], ['act:save', 'download'], ['act:close', 'x-square']],   // i18n-ignore
    'Select' => [['select', 'cursor'], ['pan', 'hand-index-thumb']],                                                     // i18n-ignore
    'Draw' => [['pen', 'pencil'], ['highlight', 'highlighter'], ['line', 'slash-lg'], ['arrow', 'arrow-up-right'], ['arc', 'bezier2'],   // i18n-ignore
               ['rect', 'square'], ['ellipse', 'circle'], ['polyline', 'activity'], ['polygon', 'pentagon']],
    'Revise' => [['cloudrect', 'cloud'], ['cloud', 'cloud-haze2']],                                                       // i18n-ignore
    'Annotate' => [['callout', 'chat-left-text'], ['text', 'fonts'], ['note', 'sticky'], ['stamp', 'patch-check']],      // i18n-ignore
    'Measure' => [['calibrate', 'rulers'], ['measure', 'arrows'], ['angle', 'triangle'], ['area', 'bounding-box'], ['count', 'hash']],   // i18n-ignore
    'Edit' => [['act:undo', 'arrow-counterclockwise'], ['act:redo', 'arrow-clockwise'], ['act:copy', 'copy'], ['act:paste', 'clipboard-plus']], // i18n-ignore
];
$__tabs = ['props', 'list', 'punch', 'chest', 'compare'];
$__menu = [['cut', 'Ctrl+X'], ['copy', 'Ctrl+C'], ['paste', 'Ctrl+V'], ['paste-in-place', 'Ctrl+Shift+V'], ['duplicate', 'Ctrl+D'],
           ['delete', 'Delete'], null, ['select-all', 'Ctrl+A'], ['select-none', 'Esc']];   // i18n-ignore (key names)
/* File › Pages (0.4 K1): on the PDF the open sheet belongs to. */
$__pagesMenu = [['print-pages', 'printer'], ['save-flat', 'file-earmark-lock'], ['slip-sheet', 'layers'], null, ['page-rotate-cw', 'arrow-clockwise'], ['page-rotate-ccw', 'arrow-counterclockwise'],
                ['page-move-up', 'arrow-up'], ['page-move-down', 'arrow-down'], null, ['page-insert-pdf', 'file-earmark-plus'],
                ['page-insert-blank', 'file-earmark'], ['page-delete', 'trash'], null, ['page-extract', 'box-arrow-up-right']];   // i18n-ignore (keys)
/* "Open in TakeoffCraft" on the sheet bar (0.4 item 1.5): only when TakeoffCraft is open in this area and the build it runs
   here takes a handed-over file (manifest "accepts": ["handoff"]; see handoff.js). MarkupCraft itself takes one too. */
$__takeoff = Catalog::app('takeoffcraft');
$__takeoffBuild = $__takeoff && Catalog::openIn($__takeoff, $__area['key']) ? AppBuilds::resolve($__takeoff['slug'], $__area['key']) : null;
$__takeoffUrl = $__takeoffBuild && in_array('handoff', $__takeoffBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__takeoff['slug'] : '';
$__k = static fn (string $s): string => str_replace([':', '-'], ['_', '_'], $s);
?>
<main id="main" class="mc" data-markupcraft
      data-pdf-worker="<?= e($__manifest['pdfWorker'] ?? '') ?>"
      data-pdf-cmaps="<?= e($__manifest['pdfCmaps'] ?? '') ?>"
      data-pdf-fonts="<?= e($__manifest['pdfFonts'] ?? '') ?>"
      data-pdf-wasm="<?= e($__manifest['pdfWasm'] ?? '') ?>"
      data-pdf-icc="<?= e($__manifest['pdfIcc'] ?? '') ?>">
  <h1 class="visually-hidden"><?= Lang::e('ui.h1', ['app' => $app['name']]) ?></h1>

  <div class="mc-tools" role="toolbar" aria-label="<?= Lang::e('ui.toolbar') ?>">
    <?php foreach ($__tools as $__group => $__items): $__gk = strtolower($__group); ?>
      <div class="mc-tool-group" role="group" data-tb-key="<?= e($__group) ?>" aria-label="<?= Lang::e('group.' . $__gk) ?>">
        <span class="mc-tool-label" aria-hidden="true"><?= Lang::e('group.' . $__gk) ?></span>
        <div class="mc-tool-row">
          <?php foreach ($__items as [$__key, $__icon]):
              $__isAct = str_starts_with($__key, 'act:'); $__lk = 'tool.' . $__k($__isAct ? substr($__key, 4) : $__key); ?>
            <button type="button" class="mc-tool" <?= $__isAct ? 'data-act="' . e(substr($__key, 4)) . '"' : 'data-tool="' . e($__key) . '" aria-pressed="false"' ?> title="<?= Lang::e($__lk . '.title') ?>">
              <i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i><span><?= Lang::e($__lk) ?></span>
            </button>
          <?php endforeach; ?>
          <?php if ($__group === 'File'): /* i18n-ignore (group key) */ ?>
            <details class="mc-menu" data-pages-menu>
              <summary class="mc-tool" title="<?= Lang::e('pages.menu.title') ?>"><i class="bi bi-files" aria-hidden="true"></i><span><?= Lang::e('pages.menu') ?></span></summary>
              <div class="mc-menu-list" role="menu">
                <?php foreach ($__pagesMenu as $__m): if ($__m === null): ?>
                <hr>
                <?php else: ?>
                <button type="button" role="menuitem" data-act="<?= e($__m[0]) ?>"><i class="bi bi-<?= e($__m[1]) ?>" aria-hidden="true"></i> <?= Lang::e('pages.' . $__k($__m[0])) ?></button>
                <?php endif; endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Edit'): /* i18n-ignore (group key) */ ?>
            <details class="mc-menu" data-edit-menu>
              <summary class="mc-tool" title="<?= Lang::e('menu.more.title') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('menu.more') ?></span></summary>
              <div class="mc-menu-list" role="menu">
                <?php foreach ($__menu as $__m): if ($__m === null): ?>
                <hr>
                <?php else: ?>
                <button type="button" role="menuitem" data-act="<?= e($__m[0]) ?>"><?= Lang::e('menu.' . $__k($__m[0])) ?> <kbd><?= e($__m[1]) ?></kbd></button>
                <?php endif; endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach; ?>
    <input type="file" class="visually-hidden" accept=".pdf,application/pdf" multiple tabindex="-1" aria-hidden="true" data-file>
    <input type="file" class="visually-hidden" accept=".json,application/json" tabindex="-1" aria-hidden="true" data-chest-file>
    <input type="file" class="visually-hidden" accept=".pdf,application/pdf" tabindex="-1" aria-hidden="true" data-insert-file>
    <input type="file" class="visually-hidden" accept=".pdf,application/pdf" multiple tabindex="-1" aria-hidden="true" data-slip-file>
    <input type="file" class="visually-hidden" accept=".png,.jpg,.jpeg,image/png,image/jpeg" tabindex="-1" aria-hidden="true" data-image-file>
    <input type="file" class="visually-hidden" accept=".bcfzip,.bcf,.zip" tabindex="-1" aria-hidden="true" data-bcf-file>
    <input type="file" class="visually-hidden" accept="image/png,image/jpeg" capture="environment" tabindex="-1" aria-hidden="true" data-photo-file>
  </div>

  <aside class="mc-panel mc-left" aria-label="<?= Lang::e('sheets.h') ?>">
    <section class="mc-sec mc-find-sec">
      <details class="mc-find" data-find>
        <summary class="mc-find-sum" title="<?= Lang::e('find.title') ?>"><i class="bi bi-search" aria-hidden="true"></i> <?= Lang::e('find.h') ?></summary>
        <form class="mc-find-form" data-find-form>
          <label class="visually-hidden" for="mc-find-q"><?= Lang::e('find.label') ?></label>
          <input type="search" id="mc-find-q" class="mc-input" placeholder="<?= Lang::e('find.placeholder') ?>" autocomplete="off" data-find-q>
          <div class="mc-find-opts">
            <label class="visually-hidden" for="mc-find-scope"><?= Lang::e('find.scope') ?></label>
            <select id="mc-find-scope" class="mc-select" data-find-scope>
              <option value="all"><?= Lang::e('find.scope.all') ?></option>
              <option value="sheet"><?= Lang::e('find.scope.sheet') ?></option>
            </select>
            <label class="mc-radio"><input type="checkbox" data-find-case> <?= Lang::e('find.case') ?></label>
            <label class="mc-radio"><input type="checkbox" data-find-word> <?= Lang::e('find.word') ?></label>
          </div>
          <div class="mc-actions">
            <button type="submit" class="btn-line btn-sm-cc" data-find-go><?= Lang::e('find.go') ?></button>
            <button type="button" class="btn-plot btn-sm-cc" data-act="find-cloud" title="<?= Lang::e('find.cloud.title') ?>" disabled><i class="bi bi-cloud" aria-hidden="true"></i> <?= Lang::e('find.cloud') ?></button>
          </div>
        </form>
        <p class="mc-muted mc-find-count" data-find-count role="status"></p>
        <ol class="mc-find-list" data-find-list></ol>
        <div class="mc-actions"><button type="button" class="btn-line btn-sm-cc" data-act="auto-link" title="<?= Lang::e('autolink.title') ?>"><i class="bi bi-link-45deg" aria-hidden="true"></i> <?= Lang::e('autolink.button') ?></button></div>
      </details>
    </section>
    <section class="mc-sec mc-layers-sec">
      <details class="mc-find" data-bookmarks>
        <summary class="mc-find-sum" title="<?= Lang::e('bm.h.title') ?>"><i class="bi bi-bookmark" aria-hidden="true"></i> <?= Lang::e('bm.h') ?></summary>
        <p class="mc-muted mc-find-count" data-bm-note></p>
        <ul class="mc-layers" data-bm-list></ul>
        <div class="mc-actions">
          <button type="button" class="btn-line btn-sm-cc" data-act="bm-build"><?= Lang::e('bm.build') ?></button>
          <button type="button" class="btn-line btn-sm-cc" data-act="bm-add"><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('bm.add') ?></button>
        </div>
      </details>
    </section>
    <section class="mc-sec mc-layers-sec">
      <details class="mc-find" data-spaces>
        <summary class="mc-find-sum" title="<?= Lang::e('space.h.title') ?>"><i class="bi bi-bounding-box-circles" aria-hidden="true"></i> <?= Lang::e('space.h') ?></summary>
        <ul class="mc-layers" data-space-list></ul>
        <div class="mc-actions"><button type="button" class="btn-line btn-sm-cc" data-act="space-new"><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('space.new') ?></button></div>
      </details>
    </section>
    <section class="mc-sec mc-layers-sec">
      <details class="mc-find" data-layers>
        <summary class="mc-find-sum" title="<?= Lang::e('layer.h.title') ?>"><i class="bi bi-layers" aria-hidden="true"></i> <?= Lang::e('layer.h') ?> <span class="mc-muted" data-layer-current></span></summary>
        <ul class="mc-layers" data-layer-list></ul>
        <div class="mc-actions"><button type="button" class="btn-line btn-sm-cc" data-act="layer-new"><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('layer.new') ?></button></div>
      </details>
    </section>
    <section class="mc-sec mc-sheets-sec">
      <div class="mc-sec-head">
        <h2 class="mc-h"><?= Lang::e('sheets.h') ?></h2>
        <span class="mc-muted mc-count" data-sheet-count></span>
      </div>
      <label class="visually-hidden" for="mc-sheet-search"><?= Lang::e('sheets.search') ?></label>
      <input type="search" id="mc-sheet-search" class="mc-input" placeholder="<?= Lang::e('sheets.search') ?>" autocomplete="off" data-sheet-search>
      <ol class="mc-sheets" data-sheets></ol>
      <p class="mc-note" data-sheets-empty><?= Lang::e('sheets.empty') ?></p>
    </section>
  </aside>

  <section class="mc-stage" aria-label="<?= Lang::e('stage.label') ?>" data-stage>
    <div class="mc-canvases" data-canvases>
      <canvas class="mc-canvas" data-base aria-hidden="true"></canvas>
      <canvas class="mc-canvas mc-over" data-over tabindex="0" aria-label="<?= Lang::e('stage.canvas') ?>"></canvas>
      <textarea class="mc-edit" data-edit hidden aria-label="<?= Lang::e('stage.edit') ?>" spellcheck="true"></textarea>
    </div>
    <div class="mc-hint" data-hint>
      <p class="mc-hint-h"><?= Lang::e('hint.h') ?></p>
      <ul>
        <li><?= $__lx('hint.open', ['open' => '<strong>' . Lang::e('tool.open') . '</strong>']) ?></li>
        <li><?= Lang::e('hint.draw') ?></li>
        <li><?= $__lx('hint.zoom', ['space' => '<kbd>Space</kbd>', 'pgup' => '<kbd>Page Up</kbd>', 'pgdn' => '<kbd>Page Down</kbd>']) ?></li>
        <li><?= $__lx('hint.save', ['save' => '<strong>' . Lang::e('tool.save') . '</strong>']) ?></li>
      </ul>
      <div class="mc-hint-recent" data-recent-files data-max="6"></div>
      <button type="button" class="btn-plot btn-sm-cc mc-hint-btn" data-act="open"><i class="bi bi-folder2-open" aria-hidden="true"></i> <?= Lang::e('hint.button') ?></button>
    </div>
    <div class="mc-drop" data-drop hidden><span><i class="bi bi-box-arrow-in-down" aria-hidden="true"></i> <?= Lang::e('stage.drop') ?></span></div>
    <div class="mc-busy" data-busy hidden><span data-busy-text><?= Lang::e('stage.busy') ?></span></div>
    <div class="mc-legend" data-legend hidden>
      <span><i class="mc-swatch mc-sw-old" aria-hidden="true"></i><?= Lang::e('compare.legend.old') ?></span>
      <span><i class="mc-swatch mc-sw-new" aria-hidden="true"></i><?= Lang::e('compare.legend.new') ?></span>
      <span><i class="mc-swatch mc-sw-same" aria-hidden="true"></i><?= Lang::e('compare.legend.same') ?></span>
    </div>
    <nav class="mc-nav" aria-label="<?= Lang::e('nav.label') ?>">
      <button type="button" class="mc-navbtn" data-act="prev" title="<?= Lang::e('nav.prev.title') ?>"><i class="bi bi-chevron-left" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('nav.prev') ?></span></button>
      <span class="mc-navlabel" data-sheet-label><?= Lang::e('nav.none') ?></span>
      <button type="button" class="mc-navbtn" data-act="next" title="<?= Lang::e('nav.next.title') ?>"><i class="bi bi-chevron-right" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('nav.next') ?></span></button>
      <span class="mc-navsep" aria-hidden="true"></span>
      <button type="button" class="mc-navbtn" data-act="zoom-out" title="<?= Lang::e('nav.zoom_out.title') ?>"><i class="bi bi-zoom-out" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('nav.zoom_out') ?></span></button>
      <label class="visually-hidden" for="mc-zoom"><?= Lang::e('nav.zoom') ?></label>
      <input type="text" id="mc-zoom" class="mc-zoom" value="100%" inputmode="decimal" autocomplete="off" data-zoom>
      <button type="button" class="mc-navbtn" data-act="zoom-in" title="<?= Lang::e('nav.zoom_in.title') ?>"><i class="bi bi-zoom-in" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('nav.zoom_in') ?></span></button>
      <button type="button" class="mc-navbtn mc-navtext" data-act="fit-page" title="<?= Lang::e('nav.fit_page.title') ?>"><?= Lang::e('nav.fit_page') ?></button>
      <button type="button" class="mc-navbtn mc-navtext" data-act="fit-width" title="<?= Lang::e('nav.fit_width.title') ?>"><?= Lang::e('nav.fit_width') ?></button>
      <button type="button" class="mc-navbtn" data-act="view-ccw" title="<?= Lang::e('nav.view_ccw.title') ?>"><i class="bi bi-arrow-counterclockwise" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('nav.view_ccw') ?></span></button>
      <button type="button" class="mc-navbtn" data-act="view-cw" title="<?= Lang::e('nav.view_cw.title') ?>"><i class="bi bi-arrow-clockwise" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('nav.view_cw') ?></span></button>
      <?php if ($__takeoffUrl): ?>
      <span class="mc-navsep" aria-hidden="true"></span>
      <button type="button" class="mc-navbtn mc-navtext" data-handoff-pdf data-handoff-url="<?= e($__takeoffUrl) ?>" data-handoff-app="<?= e($__takeoff['name']) ?>" title="<?= Lang::e('handoff.pdf.title', ['app' => $__takeoff['name']]) ?>"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> <?= Lang::e('handoff.pdf.button', ['app' => $__takeoff['name']]) ?></button>
      <?php endif; ?>
    </nav>
  </section>

  <aside class="mc-panel mc-right" aria-label="<?= Lang::e('panels.label') ?>">
    <div class="mc-tabs" role="tablist" aria-label="<?= Lang::e('panels.tabs') ?>">
      <?php foreach ($__tabs as $__i => $__t): ?>
        <button type="button" role="tab" class="mc-tab" id="mc-tab-<?= e($__t) ?>" aria-controls="mc-pane-<?= e($__t) ?>" aria-selected="<?= $__i === 0 ? 'true' : 'false' ?>" tabindex="<?= $__i === 0 ? '0' : '-1' ?>" data-tab="<?= e($__t) ?>"><?= Lang::e('tab.' . $__t) ?></button>
      <?php endforeach; ?>
    </div>

    <section class="mc-pane" role="tabpanel" id="mc-pane-props" aria-labelledby="mc-tab-props" data-pane="props">
      <h2 class="mc-h" data-props-h><?= Lang::e('tab.props') ?></h2>
      <div data-props></div>
    </section>

    <section class="mc-pane" role="tabpanel" id="mc-pane-list" aria-labelledby="mc-tab-list" data-pane="list" hidden>
      <div class="mc-sec-head">
        <h2 class="mc-h"><?= Lang::e('tab.list') ?></h2>
        <span class="mc-links">
          <button type="button" class="mc-linkbtn" data-act="legend-add" title="<?= Lang::e('legend.add.title') ?>"><i class="bi bi-list-ul" aria-hidden="true"></i> <?= Lang::e('legend.add') ?></button>
          <button type="button" class="mc-linkbtn" data-act="list-columns" title="<?= Lang::e('col.button.title') ?>"><i class="bi bi-layout-three-columns" aria-hidden="true"></i> <?= Lang::e('col.button') ?></button>
          <button type="button" class="mc-linkbtn" data-act="list-csv"><i class="bi bi-filetype-csv" aria-hidden="true"></i> <?= Lang::e('list.csv') ?></button>
          <button type="button" class="mc-linkbtn" data-act="list-xlsx" title="<?= Lang::e('list.xlsx.title') ?>"><i class="bi bi-file-earmark-spreadsheet" aria-hidden="true"></i> <?= Lang::e('list.xlsx') ?></button>
          <button type="button" class="mc-linkbtn" data-act="list-pdf" title="<?= Lang::e('list.pdf.title') ?>"><i class="bi bi-file-earmark-pdf" aria-hidden="true"></i> <?= Lang::e('list.pdf') ?></button>
          <button type="button" class="mc-linkbtn" data-act="list-bcf-import" title="<?= Lang::e('bcfin.title') ?>"><i class="bi bi-box-arrow-in-down" aria-hidden="true"></i> <?= Lang::e('bcfin.button') ?></button>
          <button type="button" class="mc-linkbtn" data-act="list-bcf" title="<?= Lang::e('list.bcf.title') ?>"><i class="bi bi-box-arrow-up" aria-hidden="true"></i> <?= Lang::e('list.bcf') ?></button>
        </span>
      </div>
      <div class="mc-filters">
        <label for="mc-f-sheet"><?= Lang::e('filter.sheet') ?></label>
        <select id="mc-f-sheet" class="mc-select" data-filter="sheet"><option value=""><?= Lang::e('filter.sheet.all') ?></option><option value="current"><?= Lang::e('filter.sheet.current') ?></option></select>
        <label for="mc-f-author"><?= Lang::e('filter.author') ?></label>
        <select id="mc-f-author" class="mc-select" data-filter="author"><option value=""><?= Lang::e('filter.author.any') ?></option></select>
        <label for="mc-f-status"><?= Lang::e('filter.status') ?></label>
        <select id="mc-f-status" class="mc-select" data-filter="status"><option value=""><?= Lang::e('filter.status.any') ?></option></select>
        <label for="mc-f-type"><?= Lang::e('filter.type') ?></label>
        <select id="mc-f-type" class="mc-select" data-filter="type"><option value=""><?= Lang::e('filter.type.any') ?></option></select>
        <label for="mc-f-space"><?= Lang::e('filter.space') ?></label>
        <select id="mc-f-space" class="mc-select" data-filter="space"><option value=""><?= Lang::e('filter.space.any') ?></option></select>
        <label for="mc-f-field"><?= Lang::e('filter.field') ?></label>
        <select id="mc-f-field" class="mc-select" data-filter="field"><option value=""><?= Lang::e('filter.field.any') ?></option></select>
        <label for="mc-f-sort"><?= Lang::e('sort.label') ?></label>
        <select id="mc-f-sort" class="mc-select" data-sort><option value=""><?= Lang::e('sort.sheet') ?></option><option value="author"><?= Lang::e('filter.author') ?></option><option value="status"><?= Lang::e('filter.status') ?></option><option value="type"><?= Lang::e('filter.type') ?></option><option value="created"><?= Lang::e('csv.created') ?></option><option value="modified"><?= Lang::e('csv.modified') ?></option></select>
        <label for="mc-f-layer"><?= Lang::e('filter.layer') ?></label>
        <select id="mc-f-layer" class="mc-select" data-filter="layer"><option value=""><?= Lang::e('filter.layer.any') ?></option></select>
      </div>
      <p class="mc-muted mc-listcount" data-list-count></p>
      <ol class="mc-list" data-list></ol>
    </section>

    <section class="mc-pane" role="tabpanel" id="mc-pane-punch" aria-labelledby="mc-tab-punch" data-pane="punch" hidden>
      <div class="mc-sec-head">
        <h2 class="mc-h"><?= Lang::e('tab.punch') ?></h2>
        <button type="button" class="mc-linkbtn" data-act="punch-csv"><i class="bi bi-filetype-csv" aria-hidden="true"></i> <?= Lang::e('punch.csv') ?></button>
      </div>
      <p class="mc-note"><?= Lang::e('punch.note') ?></p>
      <div class="mc-actions"><button type="button" class="btn-plot btn-sm-cc" data-act="punch-add"><i class="bi bi-list-check" aria-hidden="true"></i> <?= Lang::e('punch.add') ?></button></div>
      <ol class="mc-list mc-punch" data-punch></ol>
    </section>

    <section class="mc-pane" role="tabpanel" id="mc-pane-chest" aria-labelledby="mc-tab-chest" data-pane="chest" hidden>
      <div class="mc-sec-head">
        <h2 class="mc-h"><?= Lang::e('chest.h') ?></h2>
      </div>
      <p class="mc-note"><?= Lang::e('chest.note') ?></p>
      <div class="mc-actions">
        <button type="button" class="btn-plot btn-sm-cc" data-act="chest-save"><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('chest.save') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-act="chest-import"><?= Lang::e('chest.import') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-act="chest-export"><?= Lang::e('chest.export') ?></button>
      </div>
      <ul class="mc-chest" data-chest></ul>
    </section>

    <section class="mc-pane" role="tabpanel" id="mc-pane-compare" aria-labelledby="mc-tab-compare" data-pane="compare" hidden>
      <h2 class="mc-h"><?= Lang::e('compare.h') ?></h2>
      <p class="mc-note"><?= Lang::e('compare.note') ?></p>
      <div class="mc-form">
        <label for="mc-cmp-old"><?= Lang::e('compare.old') ?></label>
        <select id="mc-cmp-old" class="mc-select" data-cmp="old"></select>
        <label for="mc-cmp-new"><?= Lang::e('compare.new') ?></label>
        <select id="mc-cmp-new" class="mc-select" data-cmp="new"></select>
      </div>
      <div class="mc-actions">
        <button type="button" class="btn-plot btn-sm-cc" data-act="compare" aria-pressed="false"><?= Lang::e('compare.start') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-act="compare-stop" hidden><?= Lang::e('compare.stop') ?></button>
      </div>
      <details class="mc-find mc-set-cmp">
        <summary class="mc-find-sum"><?= Lang::e('setcmp.h') ?></summary>
        <p class="mc-note"><?= Lang::e('setcmp.note') ?></p>
        <div class="mc-form">
          <label for="mc-set-old"><?= Lang::e('setcmp.old') ?></label>
          <select id="mc-set-old" class="mc-select" data-set-old></select>
          <label for="mc-set-new"><?= Lang::e('setcmp.new') ?></label>
          <select id="mc-set-new" class="mc-select" data-set-new></select>
        </div>
        <div class="mc-actions">
          <button type="button" class="btn-line btn-sm-cc" data-act="set-compare"><?= Lang::e('setcmp.run') ?></button>
          <button type="button" class="btn-line btn-sm-cc" data-act="set-cloud" hidden><i class="bi bi-cloud" aria-hidden="true"></i> <?= Lang::e('setcmp.cloud') ?></button>
        </div>
        <p class="mc-muted" data-set-status role="status"></p>
        <ol class="mc-find-list" data-set-results></ol>
      </details>
      <div class="mc-cmp-tools" data-cmp-tools hidden>
        <div class="mc-cmp-mode" role="radiogroup" aria-label="<?= Lang::e('compare.mode') ?>">
          <label class="mc-radio"><input type="radio" name="mc-cmp-mode" value="picture" checked data-cmp-mode> <?= Lang::e('compare.mode.picture') ?></label>
          <label class="mc-radio"><input type="radio" name="mc-cmp-mode" value="lines" data-cmp-mode> <?= Lang::e('compare.mode.lines') ?></label>
        </div>
        <div class="mc-actions"><button type="button" class="btn-line btn-sm-cc" data-act="compare-cloud" title="<?= Lang::e('compare.cloud.title') ?>"><i class="bi bi-cloud" aria-hidden="true"></i> <?= Lang::e('compare.cloud') ?></button></div>
        <label for="mc-cmp-balance" class="mc-k"><?= Lang::e('compare.balance') ?></label>
        <input type="range" id="mc-cmp-balance" min="0" max="100" value="50" step="1" data-cmp-balance aria-describedby="mc-cmp-balance-note">
        <p class="mc-muted" id="mc-cmp-balance-note"><?= Lang::e('compare.balance.note') ?></p>
        <p class="mc-k"><?= Lang::e('compare.lineup') ?></p>
        <div class="mc-nudge" role="group" aria-label="<?= Lang::e('compare.nudge') ?>">
          <?php foreach ([['-1,0', 'left'], ['0,1', 'up'], ['0,-1', 'down'], ['1,0', 'right']] as [$__d, $__w]): ?>
          <button type="button" class="mc-navbtn" data-nudge="<?= e($__d) ?>" title="<?= Lang::e('compare.nudge.' . $__w . '.title') ?>"><i class="bi bi-arrow-<?= e($__w) ?>" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('compare.nudge.' . $__w) ?></span></button>
          <?php endforeach; ?>
          <label class="visually-hidden" for="mc-cmp-step"><?= Lang::e('compare.step') ?></label>
          <select id="mc-cmp-step" class="mc-select mc-step" data-cmp-step>
            <?php foreach (['0.25', '1', '5', '20'] as $__s): ?>
            <option value="<?= e($__s) ?>"<?= $__s === '1' ? ' selected' : '' ?>><?= Lang::e('compare.step.pt', ['n' => $__s]) ?></option>
            <?php endforeach; ?>
          </select>
        </div>
        <div class="mc-actions">
          <button type="button" class="btn-line btn-sm-cc" data-act="compare-align"><?= Lang::e('compare.align') ?></button>
          <button type="button" class="btn-line btn-sm-cc" data-act="compare-reset"><?= Lang::e('compare.reset') ?></button>
        </div>
        <p class="mc-muted" data-cmp-status></p>
      </div>
    </section>
  </aside>

  <footer class="mc-status" aria-label="<?= Lang::e('status.label') ?>">
    <output class="mc-coords" data-coords></output>
    <span class="mc-status-msg" data-status role="status"></span>
    <button type="button" class="mc-statbtn" data-act="calibrate" title="<?= Lang::e('status.scale.title') ?>"><i class="bi bi-rulers" aria-hidden="true"></i> <span data-scale><?= Lang::e('status.scale.none') ?></span></button>
    <button type="button" class="mc-statbtn" data-act="author" title="<?= Lang::e('status.author.title') ?>"><i class="bi bi-person-circle" aria-hidden="true"></i> <span data-author><?= Lang::e('status.author.none') ?></span></button>
  </footer>
</main>
