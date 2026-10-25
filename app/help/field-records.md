---
title: Track RFIs, submittals and daily logs
summary: Put RFIs, submittals and daily logs on the sheets, with numbers, assignees, due dates and threads; filter what is overdue; export CSV or BCF; work offline and merge copies.
section: tasks
order: 85
keywords: rfi, request for information, submittal, daily log, field report, site diary, construction, overdue, due date, assigned to me, thread, attachment, merge, offline, tablet, bcf, csv, field
---

The {{ui:Field}} tab keeps three kinds of record beside your markups. Each is tied to a sheet; an RFI or a submittal also has a pin at the place on the sheet it is about.

- **RFI**: a question for the design team. Statuses: Open, Answered, Closed.
- **Submittal**: something to be reviewed before work goes ahead. Statuses: Open, In review, Approved, Approved as noted, Revise and resubmit, Closed.
- **Daily log**: the day's weather, the number of people on site and the work done. Statuses: Draft, Final.

Every record has a number of its own kind (RFI-0001, SUB-0001, LOG-0001), a title, text, an assignee, a due date, a thread of replies and a list of attachment names.

## Add one

1. Open the {{ui:Field}} tab and choose {{ui:RFI}} or {{ui:Submittal}}.
2. Tap or click the sheet where it belongs. A pin appears and the record opens in the tab.
3. Fill in the title, the question or description, who it is assigned to and when it is due.

A daily log is added to the open sheet without a pin. {{ui:Place pin}} puts one on it later; {{ui:Move pin}} moves any pin. Tapping a pin on the sheet opens its record.

## Answer and track

Change the {{ui:Status}} and the change is logged in the thread. Write a reply and choose {{ui:Send reply}} (Ctrl+Enter also sends). Attachments are names only: type one or choose files, and the list tells the team what goes with the record. The files themselves stay where they are.

A record whose due date has passed and that is still waiting (an RFI that is not Answered or Closed, a submittal that is not decided) is marked **Overdue**, in red, on the list and on its pin.

## Find what matters

The filters sit above the list: type, status, due date (overdue, due in 7 days, has or has no due date), this sheet or all sheets, a text search, and {{ui:Assigned to me}}, which compares the assignee with the name MarkupCraft knows you by (see [Set your name](topic:set-your-name)). The line under the filters counts what is shown and what is overdue.

## Export

{{ui:CSV}} writes the listed records as a spreadsheet. {{ui:BCF}} writes them as BCF topics, each with a snapshot of its place on the sheet, so other BCF tools can list them. Both follow the filters.

## Save, offline and merging copies

Records are saved inside the PDF when you save it, and they come back when you open it. Nothing needs a network: add, edit, reply and save on a tablet in a basement, then bring the PDF back. Older PDFs, and PDFs from other programs, open as they always did.

To bring two copies together, open one and choose {{ui:Merge}}, then pick the other copy of the same PDF. Records are joined by their ids:

- a record only one copy has is added;
- a record in both takes its fields (title, text, status, assignee, due date) from the copy changed last, as a whole, so if two people changed different fields of the same record, the later copy's version wins; threads and attachment names from both copies are joined;
- if both copies numbered a new record the same, the one that arrives gets the next free number;
- a record removed in one copy stays removed unless it was edited after.

A merge is one undo step.

## Limits

- Records are not shared by Studio Live co-editing yet; use Merge.
- There are no teams, notifications or cloud projects for records in this version.
- Pages deleted from the PDF take their records with them (the page confirmation counts them).
