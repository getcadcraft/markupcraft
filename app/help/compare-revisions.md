---
title: Compare two revisions
summary: Overlay an old and a new issue of a sheet in two colors, line them up by two points, and cloud what changed.
section: tasks
order: 110
keywords: compare, overlay, overlay pages, revision, diff, differences, changes, old new, align, backcheck, issue, bulletin
---

Compare lays two sheets over each other. Lines only on the old sheet show in red, lines only on the new sheet in blue, and lines on both in a muted gray. The colors are named in the legend under the sheet: "Only on the old sheet", "Only on the new sheet", "On both".

## Compare two sheets

1. Open both issues. They can be pages of the same PDF or of different PDFs; open them together as one set (see [Work with several files at once](topic:several-files)).
2. Choose the {{ui:Compare}} tab on the right.
3. Pick the {{ui:Old sheet}} and the {{ui:New sheet}}. The new sheet starts as the one you are on. When several files are open, each sheet's file name is shown after its name.
4. Choose {{ui:Compare}}.

Result: MarkupCraft shows the new sheet with the old one mixed in, the legend appears, and the tab says "Comparing <old> (old) with <new> (new). Markups on the new sheet stay editable."

## Fade between old and new

Drag the {{ui:Old and new}} slider. All the way left shows only the old sheet, all the way right only the new one, the middle shows both. Sliding back and forth is often the quickest way to see a small change.

## Line the sheets up

If the two issues were plotted with a different margin, size or rotation, everything looks changed. Fix it:

**By two points (best):**

1. Choose {{ui:Align by two points}}. The view shows only the old sheet.
2. Click a sharp feature you can find on both sheets, such as a column grid intersection. The tab counts the steps ("1 of 4").
3. Click a second feature, far from the first, such as the opposite grid corner.
4. The view switches to the new sheet. Click the first feature again.
5. Click the second feature again.

Result: "Lined up: old sheet scaled 100.00%, turned 0.00°. Nudge to fine-tune." The old sheet is moved, scaled and turned to fit. {{key:Esc}} cancels while you are picking. Zoom in on each feature before clicking for a precise fit.

**By nudging:** use the four arrow buttons under "Line up" to move the old sheet. Choose the step (0.25, 1, 5 or 20 pt; 72 pt is one inch on the paper). The tab says how far it has moved.

{{ui:Reset}} removes the alignment and the nudges.

## Changed lines only

Under the alignment buttons, pick {{ui:Changed lines}} instead of {{ui:Picture overlay}}. MarkupCraft then compares the two sheets' own lines, not their pictures: the new sheet shows as it is, with the lines that are only on the old sheet in red and the lines only on the new one in blue. A line that only got shorter shows just the missing part. Line the sheets up first (see above): the comparison uses the alignment, so a sheet that was only shifted shows no changes. The status line says how much changed.

This works for PDFs plotted from CAD, where the drawing is made of lines. Scanned sheets have no lines to compare: use the picture overlay for them. Text set in a font (not drawn as strokes) is not compared.

## Mark the changes

While comparing, you are on the new sheet and every tool works. Draw clouds around the changes as you find them; they belong to the new sheet and stay when you stop comparing.

{{ui:Cloud the changes}} does it for you: it groups the changed lines that sit close together and draws a revision cloud round each group on the new sheet, with "Changed since <old sheet>" as its comment. One {{key:Mod+Z}} removes them all; delete the ones you do not need.

## Compare a whole set

When the new issue arrives as its own PDF, open both PDFs and open {{ui:Compare two sets}} in the {{ui:Compare}} tab. Pick the old file and the new file, then choose {{ui:Compare the sets}}. Sheets are paired by their number (as in [slip-sheeting](topic:slip-sheet-a-revised-set)), compared by their lines, and listed with the most changed first. Choose a sheet in the list to compare that pair with {{ui:Changed lines}}.

{{ui:Cloud all changes}} clouds every group of changed lines on every changed sheet, in one step you can undo. The set comparison does not line sheets up first, so a sheet that was shifted on the page shows as changed: compare that pair on its own and use {{ui:Align by two points}}.

## Stop comparing

Choose {{ui:Stop comparing}}, or go to another sheet. The alignment is remembered for the same pair of sheets until you close the set.

## Good to know

- Compare works on what is drawn, pixel by pixel. It does not know that a line moved; it shows the old position in one color and the new position in the other.
- Text that reflowed, a changed title block date or a different plot style shows up as changes too.
- A scanned sheet compared with a plotted one is noisy: scanning blurs and shifts lines.
- Comparing text written in a font, and a list of what changed, are not built yet.
