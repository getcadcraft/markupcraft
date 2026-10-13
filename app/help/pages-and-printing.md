---
title: Print, and change the pages of a PDF
summary: Print sheets with their markups, and rotate, move, insert, delete or extract pages of an open PDF.
section: tasks
order: 125
keywords: print, printer, paper, pages, page, rotate, turn, reorder, move page, insert, add page, blank page, delete page, remove page, extract, split, page operations
---

The {{ui:Pages}} menu in the {{ui:File}} group works on the PDF that the open sheet belongs to. Your PDF on this computer is never changed: the changes are part of the copy you save.

## Print

1. Press {{key:Mod+P}}, or choose {{ui:Pages}}, then {{ui:Print…}}.
2. When more than one sheet is open, pick what to print: {{ui:This sheet}}, every page of this file, the whole set, or the pages you type (such as `1-3, 5`).
3. Choose {{ui:Print}}. Your browser's printer dialog opens: pick the printer, the paper and the scale there.

The markups print as they look on the sheet: they are drawn into the pages of the copy that goes to the printer. Comments other programs made print the way their PDF says.

:::safari firefox
If your browser cannot print from inside the page, the sheets open as a PDF in a new tab. Print from there.
:::

## Turn a page

Choose {{ui:Pages}}, then {{ui:Rotate page clockwise}} or {{ui:Rotate page counterclockwise}}. The open sheet turns a quarter turn. Its markups stay where they were on the drawing, and text you typed turns with the page so it still reads upright.

## Move a page

Choose {{ui:Pages}}, then {{ui:Move page earlier}} or {{ui:Move page later}}. The open sheet swaps places with its neighbor in its own PDF. Its markups, its scale and its sheet number go with it.

## Insert pages

- {{ui:Insert pages from a PDF…}} puts every page of another PDF after the open sheet.
- {{ui:Insert a blank page}} adds an empty page of the same size after the open sheet, for sketches and notes.

Inserted pages get their page number as their label until you rename them. See [Rename a sheet](topic:open-a-plan-set#rename-a-sheet).

## Delete pages

1. Choose {{ui:Pages}}, then {{ui:Delete pages…}}.
2. Type the page numbers of this PDF, such as `3` or `2-4`. The open sheet's page is filled in.
3. Choose {{ui:Delete pages}}. If those pages hold markups, MarkupCraft says how many and asks again.

A PDF keeps at least one page. To drop a whole file, close the set and open the files you still need.

## Extract pages

Choose {{ui:Pages}}, then {{ui:Extract pages…}}, and type the pages. They download as a new PDF named "<file> (pages 1-3).pdf", with their markups as comments you can keep editing. The open file stays as it is.

## Good to know

- **Undo stops at a page change.** {{key:Mod+Z}} undoes markups drawn after it, but not the page change itself or anything before it. Close without saving to start over from your original PDF.
- Page numbers count the pages of one PDF, not the whole set. Moving a page keeps it inside its own file.
- The changed pages are unsaved work: {{ui:Save}} downloads the reorganized copy, and leaving asks first.
