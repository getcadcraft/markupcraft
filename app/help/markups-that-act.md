---
title: Make a markup a task
summary: Give a markup an assignee (a person or your assistant), a due day and a link to the drawing or model element it is about, and see it close when that really changes.
section: tasks
order: 70
keywords: task, tasks, assignee, assistant, due, overdue, link, closes, changed, element, drawing area, markups that act, MCP
---

A task is a markup that has to be done by someone. It keeps its place on the sheet and its thread, and it adds a title, an assignee, a due day, a state and, if you want, a link to the thing it is about.

## Make a task

1. Select one or more markups.
2. Open the {{ui:Tasks}} tab and choose {{ui:Make selected a task}}.
3. Fill in the title (it starts from the markup's text), who it is for ({{ui:Person}} or {{ui:Assistant}}, and a name), an optional due day, and what to watch.

An assistant task is work for the assistant you connected to MarkupCraft (see [Use MarkupCraft with an AI assistant](topic:use-with-ai-assistants)). MarkupCraft contains no assistant of its own: it only lists the work and takes the assistant's answers. Choosing {{ui:Assigned to}}, then {{ui:Assistant}} in the list shows what is waiting for it.

## Watch for a change

- **The drawing inside the markup.** MarkupCraft keeps the lines inside the markup's box as they are now. When you open a newer revision of that sheet (a second file with the same sheet number, or the same page position), choose {{ui:Check now}}: if the lines in that area differ by more than a hair, the task is closed.
- **A model element.** Give the app and the element's id. Your assistant reads the element with the other app's own tools and reports it with `tasks_check`. The first report is kept as the starting state; a later report that differs closes the task. An element that was deleted closes it too.
- **Nothing.** A plain task you finish by hand.

A closed task is marked Done, its markup becomes Completed, and a note in the thread says what changed. One undo step reopens it.

**Limit:** the check assumes the newer revision uses the same page origin and page size. A sheet re-plotted at another size will not match, so its tasks do not close. Sheets are paired by sheet number, else by page position; MarkupCraft does not scale one revision to fit the other.

Re-plotting the same drawing with a new date stamp, or lines that moved less than 1.5 points, does not count as a change. If no newer revision is open, the task stays open and the status bar says so.

## The list

The {{ui:Tasks}} list can be filtered by state and by who it is for, including {{ui:Overdue}}. A task past its due day shows in the Problems panel as a warning. {{ui:CSV}} exports the list.

Tasks are saved in the PDF with the markup, and they travel through Live like the other markup properties.
