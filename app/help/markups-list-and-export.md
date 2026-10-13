---
title: The markups list, filters and exports
summary: See every markup in the set, filter by sheet, author, status and type, jump to one, and export the list as CSV or BCF.
section: tasks
order: 90
keywords: markups list, list, summary, xlsx, spreadsheet workbook, workbook, pdf report, import bcf, filter, sort, report, export, csv, spreadsheet, bcf, bcfzip, issues, comments list, jump
---

## Open the list

Choose the {{ui:Markups}} tab on the right. Every markup of every open file is listed, in sheet order and then in the order they were made. Each row shows:

- an icon in the markup's color, its punch number if it has one ("#4"), and its subject,
- its text, stamp wording or measured value, and its comment,
- the sheet, the author and the date,
- its status (or "Read-only" for comments that came with the file), and a reply count when it has replies.

The line above the list counts them: "38 markups", or "12 of 38 markups" when filtered.

## Jump to a markup

Click a row. MarkupCraft shows that sheet, selects the markup, and zooms to it when it is off-screen or too small to see. {{ui:Properties}} has its details and thread when you switch back to that tab.

## Filter

Four menus above the list. They combine.

| Menu | Choices |
|---|---|
| {{ui:Sheet}} | All sheets, This sheet (follows you as you change sheets), or any sheet that has markups |
| {{ui:Author}} | Anyone, or each author in the set |
| {{ui:Status}} | Any status, Open, Accepted, Rejected, Completed |
| {{ui:Type}} | Any type, or each kind of markup in the set |

Examples:

- What is still open on this sheet: {{ui:Sheet}} "This sheet", {{ui:Status}} "Open".
- One consultant's comments: {{ui:Author}} their name.
- All measurements: {{ui:Type}} "Length" or "Area".

The list shows up to 2000 rows; narrow it with a filter in very large sets.

## Export to CSV

Choose {{ui:CSV}} at the top of the tab. You get "<name> markups.csv" with **the markups as currently filtered**, one per row, with these columns:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- "Text" holds the words of text boxes and callouts, a stamp's wording, or a count group's name.
- "Measurement" holds lengths, "area, perimeter" for areas, and "group: n" for counts.
- Dates are full timestamps in UTC.

To export everything, set every filter back to its first choice first.

## A legend on the sheet

{{ui:Legend}} in the {{ui:Markups}} tab puts a legend at the top right of what you see: a box listing each kind of markup on the sheet (by subject and color, such as "Cloud", "Question" or "Outlets") with how many there are. A count group counts its marks. The legend keeps counting as you draw, move or delete markups, and it prints and saves with the counts of that moment.

Move and resize it like any markup. In its {{ui:Properties}}, change its {{ui:Title}}, or set {{ui:Counts}} to {{ui:The whole set}} to count every sheet. Spaces, other legends and comments from other programs are not counted.

## Your own columns, and sorting

{{ui:Columns}} in the {{ui:Markups}} tab adds columns of your own to every markup: a **text**, a **choice** (such as Trade: Mechanical, Electrical, Plumbing), a **number** (such as Cost) or a **date**. Give each a name, pick its kind, list the choices for a choice column, and choose {{ui:Save columns}}.

- Fill them in under {{ui:Properties}}: each column has a field there. A number column takes numbers only, a date column a date.
- The list shows the values under each markup, the {{ui:Column}} filter picks one value (or the markups where it is empty), and {{ui:Sort}} orders the list by a column, by author, status, kind or date, instead of by sheet.
- CSV and XLSX exports carry the columns after the usual ones. The columns are saved with the PDF and come back when you reopen it.

## Export a summary: workbook or PDF

- {{ui:XLSX}} downloads "<name> markup summary.xlsx" with three sheets: **Markups** (one row per listed markup, the same columns as the CSV), **By sheet** (how many markups each sheet has, open and closed, and how many of each kind, with totals) and **Punch list** (when there are punch items).
- {{ui:PDF}} downloads "<name> markup summary.pdf": a report to print or send, with the set's name, the date and a table of the listed markups (number, sheet, kind, subject, text or comment, measured value, author, status and the latest reply). Long text wraps; the table header repeats on each page.

Both take the list as it is filtered, so filter first to report one sheet, one author or the open items only.

## Export to BCF

Choose {{ui:BCF}}. MarkupCraft makes a picture of each listed markup on its sheet ("Making snapshots for BCF (3 of 12)…"), then downloads "<name> markups.bcfzip". Each markup becomes one BCF topic with its status, author, dates, replies as comments, assignee and due date from its punch item, and the snapshot.

Use it to bring drawing review comments into BIM coordination tools that read BCF. What carries over, and what does not, is in [BCF basics](topic:bcf-basics).

## Import BCF

{{ui:Import BCF}} reads a .bcfzip (or .bcf) file from a BIM tool:

- Issues that came from MarkupCraft's own BCF export find their markups again: new replies are added to the thread, and a new status (Closed counts as Completed) is set. Replies already there are not added twice.
- Other issues become notes, with their title, description, author and comments. A note goes on the sheet whose number or name the issue's labels give, else on the open sheet; a BIM camera has no place on paper, so such notes are stacked at the top left of the sheet for you to move.

The whole import is one step: {{key:Mod+Z}} takes it back. See [BCF basics](topic:bcf-basics).

## What the list does not do yet

- Grouping the list (sort, then filter, instead).
- Editing values in the list (edit in {{ui:Properties}}; punch fields are editable in the {{ui:Punch list}} tab).
