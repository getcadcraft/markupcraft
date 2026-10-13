<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — MarkupCraft's own panel of the Settings dialog (core/components/app-settings.inc includes it as the
 * "MarkupCraft" tab). markupcraft.js reads and stores the fields, fills them in whenever the dialog opens, and resets
 * them on "cc-settings-reset" (all but the name).
 *   mcAuthor    your name on new markups and replies (localStorage markupcraft.author; the status bar button sets it too)
 *   mcColor     the color of new pens, lines, arrows, shapes, clouds, callouts and text (markupcraft.settings.markColor)
 *   mcWeight    thin / normal / heavy lines on new markups (× 0.5 / 1 / 1.5 of each tool's width)
 *   mcPaste     Ctrl+V pastes at the pointer (when it is on the sheet) or beside the copy (markupcraft.settings.pasteAt)
 *   mcUnit      the unit "Sheet scale" offers first for lengths and areas (markupcraft.settings.unit)
 *   mcPos       the status bar's position on the sheet in inches or millimeters (markupcraft.settings.posUnit)
 */
?>
<fieldset class="shell-set" data-mc-settings>
  <legend><?= Lang::e('set.name.h') ?></legend>
  <div class="shell-row">
    <label for="mc-set-author"><?= Lang::e('set.name.label') ?></label>
    <input type="text" id="mc-set-author" class="mc-set-input" name="mcAuthor" maxlength="80" autocomplete="name" placeholder="<?= Lang::e('set.name.placeholder') ?>">
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.name.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.new.h') ?></legend>
  <div class="shell-row">
    <label for="mc-set-color"><?= Lang::e('set.color') ?></label>
    <input type="color" id="mc-set-color" class="mc-set-color" name="mcColor" value="#d0021b">
  </div>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.weight') ?>">
    <?php foreach (['thin', 'normal', 'heavy'] as $__w): ?>
    <label><input type="radio" name="mcWeight" value="<?= $__w ?>"> <?= Lang::e('set.weight.' . $__w) ?></label>
    <?php endforeach; ?>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.new.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.paste.h') ?></legend>
  <div class="shell-seg mc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.paste.label') ?>">
    <label><input type="radio" name="mcPaste" value="pointer"> <i class="bi bi-cursor" aria-hidden="true"></i> <?= Lang::e('set.paste.pointer') ?></label>
    <label><input type="radio" name="mcPaste" value="offset"> <i class="bi bi-intersect" aria-hidden="true"></i> <?= Lang::e('set.paste.offset') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.paste.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.measure.h') ?></legend>
  <div class="shell-row">
    <label for="mc-set-unit"><?= Lang::e('set.unit') ?></label>
    <select id="mc-set-unit" class="select-cc" name="mcUnit">
      <?php foreach (['ft-in', 'ft', 'in', 'm', 'mm'] as $__u): ?>
      <option value="<?= $__u ?>"><?= Lang::e('unit.' . $__u) ?></option>
      <?php endforeach; ?>
    </select>
  </div>
  <div class="shell-row">
    <label for="mc-set-pos"><?= Lang::e('set.pos') ?></label>
    <select id="mc-set-pos" class="select-cc" name="mcPos">
      <option value="in"><?= Lang::e('unit.in') ?></option>
      <option value="mm"><?= Lang::e('unit.mm') ?></option>
    </select>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.measure.hint') ?></p>
</fieldset>
<?php /* AI assistants and scripts (0.4 part 2 X.7, session agents): host.js fills this with Settings › Assistants (off by default) */ ?>
<div data-assistants-settings></div>
