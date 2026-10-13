---
title: Make a punch list
summary: Turn markups into numbered punch items with an assignee, a due date and a status, and export the list.
section: tasks
order: 80
keywords: punch list, punch, snag list, deficiency, field issues, observation, assign, assignee, due date, closeout, walkthrough, number
---

A punch item is a markup with a number, an assignee, a due date and an item status. The number is drawn on the sheet next to the markup, so the printed sheet and the list match.

## Add items

1. Mark up each issue on the sheets: a cloud, a callout, a note, anything.
2. Select one or more of them (see [Select, move and change markups](topic:select-and-edit)).
3. Either open the {{ui:Punch list}} tab and choose {{ui:Add selected to the punch list}}, or choose {{ui:Add to the punch list}} in {{ui:Properties}}.

Result: each markup gets the next number (1, 2, 3…), in sheet order and then in the order they were drawn. A numbered badge appears on the sheet, and the status bar says "Added 3 items to the punch list." Markups that already have a number, and read-only comments, are skipped.

## Fill in the details

In the {{ui:Punch list}} tab, each item shows its number, subject, text, sheet and status, with three fields under it. The same fields are in {{ui:Properties}} under "Punch list" when the markup is selected:

- {{ui:Assignee}}: a name or trade, as free text.
- {{ui:Due}}: a date, from the date picker.
- {{ui:Item status}}: Open, In progress, Ready for review or Closed.

Click an item's heading to jump to it on its sheet.

The item status is separate from the markup's review status (Open, Accepted, Rejected, Completed). Use the item status for the work, and the review status for the comment.

## Take an item off

Select the markup and choose {{ui:Take off the punch list}} in {{ui:Properties}}. The markup stays; only the number goes. While the set is open, numbers are not reused: the next item still gets the next new number, so a gap means an item was taken off. When a file is opened again, numbering carries on after the highest number in it.

## Export the list

Choose {{ui:Export CSV}} in the {{ui:Punch list}} tab. You get "<name> punch list.csv" with the columns No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author and Created, in number order. Open it in any spreadsheet.

The punch numbers, assignees, due dates and item statuses are also saved inside the marked-up PDF, so they come back when you reopen it. Other PDF viewers show the number badge as part of the markup. The markups list's BCF export carries the assignee and due date too (see [BCF basics](topic:bcf-basics)).

## On site with a tablet

Open the set on an iPad, walk the job, and drop a {{ui:Note}} or draw a {{ui:Cloud}} at each issue. Add them to the punch list as you go, and save before you leave. See [Review on an iPad or touch screen](topic:review-on-a-tablet).

A punch list as a formatted PDF or spreadsheet report, and photos attached to items, are not built yet.
