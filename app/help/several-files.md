---
title: Work with several files at once
summary: Open many PDFs as one set, find sheets across files, copy markups between them, and save each file's copy.
section: tasks
order: 130
keywords: several files, multiple pdfs, plan set, set, batch, many files, combine, disciplines, architectural structural mechanical, save all, close
---

A plan set often arrives as one PDF per discipline, or one PDF per sheet. MarkupCraft treats everything you open as **one set**.

## Open them together

Select all the PDFs in the file picker at once, or drop them all on the sheet area. To add more later, open them the same way; they join the end of the {{ui:Sheets}} list in the order you open them.

Result: "Opened 6 files (84 sheets in the set)." Every page is a sheet. Sheets with a sheet number show "Sheet A-101" under their name; others show the file and page.

There is no saved "set" file: next time, open the same PDFs again (the "(marked up)" copies, if you saved).

## Across the whole set

- **Find a sheet:** {{ui:Search sheets}} looks in sheet numbers, sheet names and file names of every file. {{key:PageUp}} and {{key:PageDown}} walk through all sheets of all files in order.
- **Markups list:** the {{ui:Markups}} tab lists markups from every file. Filter by {{ui:Sheet}} to narrow it. The CSV has a File column.
- **Punch list:** one numbering for the whole set.
- **Compare:** the old and the new sheet can come from different files.
- **Copy and paste:** {{key:Mod+C}} on one sheet and {{key:Mod+V}} on another, in any file. The copy lands at the same place on the page, slightly offset.

## Save

Choose {{ui:Save}}. With more than one file open, MarkupCraft asks:

- {{ui:This file}}: a marked-up copy of the file of the sheet you are on.
- {{ui:Every changed file}}: a copy of each file that has unsaved changes. Each downloads separately, as "<file name> (marked up).pdf".
- {{ui:Cancel}}

:::chromium
The first time you save several files at once, Chrome and Edge may ask whether this site may download multiple files. Choose {{ui:Allow}}; otherwise only the first copy arrives.
:::

:::safari
Safari may ask once for each file. On an iPad each copy goes to the Files app.
:::

A file whose markups were saved stops counting as changed; the others still do.

CSV, BCF and punch list exports are named after the **first** file you opened.

## Close

{{ui:Close}} closes the whole set; there is no way to close just one file yet. If anything is unsaved, it asks:

- {{ui:Cancel}}: nothing happens.
- {{ui:Close without saving}}: unsaved markups are lost.
- {{ui:Save copies first}}: saves every changed file, then closes.

Closing also clears undo history.

## Big sets

- Every page's text is read on open to find sheet numbers, so a 100-sheet set takes a while. The status bar counts sheets as it goes.
- Sheet pictures in the list are drawn as you scroll to them.
- Each open PDF is held in the browser tab's memory. If the tab slows down, close other heavy tabs, or review one discipline at a time.
- Opening the same file twice gives you two copies of its sheets. If that happens, choose {{ui:Close}} and open the set again.
