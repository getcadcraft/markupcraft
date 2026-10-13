---
title: Select, move and change markups
summary: Pick markups by clicking or with a window, move, resize, nudge, cut, copy, paste, paste in place, duplicate, delete and undo.
section: tasks
order: 40
keywords: select, selection, select all, select none, window, crossing, move, resize, grips, handles, nudge, cut, copy, paste, paste in place, duplicate, clipboard, another tab, delete, undo, redo, edit
---

Choose {{ui:Select}} ({{key:V}}) first. Pressing {{key:Esc}} also gets you there: the first press clears the selection, the next one switches back to {{ui:Select}}.

## Pick markups

:::mouse
- **One markup:** click it. A dashed box and handles appear, and {{ui:Properties}} shows it.
- **Add or remove one:** hold {{key:Shift}} and click.
- **Fully inside a window:** drag from left to right on an empty part of the sheet. Only markups entirely inside the box are picked (solid outline).
- **Touching a window:** drag from right to left. Anything the box touches is picked (green, dashed outline).
- **Everything on this sheet:** {{key:Mod+A}}, or {{ui:More}} then {{ui:Select all}} in the toolbar's {{ui:Edit}} group.
- **Nothing:** click an empty spot, press {{key:Esc}}, or {{ui:More}} then {{ui:Select none}}.
:::

:::touch
- **One markup:** tap it.
- **Several:** drag one finger across an empty part of the sheet to draw a window. Left to right picks what is fully inside; right to left picks what it touches.
- Tapping with {{key:Shift}} held only works with a keyboard attached. Without one, use a window.
- One finger never pans in {{ui:Select}}; use two fingers, or the {{ui:Pan}} tool.
:::

Read-only comments that came with the file show a gray dashed box and no handles. They can be selected and replied to, not changed.

## Move and resize

- **Move:** drag a selected markup. Hold {{key:Shift}} to move only along multiples of 45°. Several selected markups move together.
- **Resize:** with one markup selected, drag a handle. Square handles resize the box (hold {{key:Shift}} to keep its proportions); round handles move one corner point of a line, polyline, polygon, cloud or measurement (hold {{key:Shift}} for 45°); diamond handles move a callout's tip and bend. Pen strokes scale from their box.
- **Nudge:** press the arrow keys to move the selection one screen pixel; hold {{key:Shift}} for ten. Each press is one undo step.

## Change what it says or how it looks

- **Text, callouts and notes:** double-click the markup, or press {{key:Enter}}, or choose {{ui:Edit on the sheet}} in {{ui:Properties}}. Type, then click outside or press {{key:Mod+Enter}}. {{key:Esc}} cancels the edit.
- **Stamps:** pick a different stamp in {{ui:Properties}} (double-click opens {{ui:Properties}} for you).
- **Style:** {{ui:Color}}, {{ui:Line width}}, {{ui:Fill}}, {{ui:Opacity}} and {{ui:Text size}} under "Style" in {{ui:Properties}}. With several selected, {{ui:Properties}} shows the kinds you picked and changes them all at once.

## Copy, paste and duplicate

The toolbar's {{ui:Edit}} group has {{ui:Copy}} and {{ui:Paste}}; its {{ui:More}} menu has all of these, each with its key.

| Command | Key | What it does |
|---|---|---|
| {{ui:Cut}} | {{key:Mod+X}} | Copies the selected markups and deletes them |
| {{ui:Copy}} | {{key:Mod+C}} | Copies the selected markups |
| {{ui:Paste}} | {{key:Mod+V}} | Puts a copy on the sheet you are on (where, below) |
| {{ui:Paste in place}} | {{key:Mod+Shift+V}} | Puts the copy at exactly the spot it was copied from: on the same sheet, on top of the original; on another sheet, at the same place on the paper |
| {{ui:Duplicate}} | {{key:Mod+D}} | Makes a copy of the selection a little down and to the right, without touching what you copied before |

**Where Paste puts the copy:**

- {{key:Mod+V}} with the pointer on the sheet puts the copy centered where the pointer is. Move the pointer, press {{key:Mod+V}} again, and you place another.
- The {{ui:Paste}} button (the pointer is on the toolbar then), or {{key:Mod+V}} with the pointer off the sheet, puts it a little down and to the right of the original. Each paste of the same copy steps a little further, so copies never hide one another. On another sheet the first paste lands where the original was on its sheet. If that spot is out of view, the copy lands in the middle of the view.
- To make {{key:Mod+V}} always paste beside the original, choose {{ui:Beside the copy}} under {{ui:Paste}} in [MarkupCraft settings](topic:settings).

The pasted markups are selected, so you can drag them straight away. Each cut, paste or duplicate is one undo step: {{key:Mod+Z}} takes the whole paste away.

Pasted copies are new markups: they get your name, today's date, the status Open, no punch number and an empty thread. Their kind, shape, style, text and comment come along. Read-only comments that came with the file cannot be copied or cut.

**Between tabs:** what you copy is also kept in this browser, so another MarkupCraft tab in the same browser can paste it. Copying markups does not use the computer's clipboard: you cannot paste them into another program, and text you copied elsewhere does not paste as a markup.

## Delete

Press {{key:Delete}} or {{key:Backspace}}, choose {{ui:More}} then {{ui:Delete}} in the toolbar, or {{ui:Delete}} in {{ui:Properties}}. The status bar says how many were deleted. Read-only comments from the file are never deleted ("kept as in the file").

## Undo and redo

- {{key:Mod+Z}} undoes, {{key:Mod+Y}} or {{key:Mod+Shift+Z}} redoes. The toolbar has {{ui:Undo}} and {{ui:Redo}}.
- The status bar says what was undone ("Undid move markup.").
- Undo covers every change to markups, statuses, replies, punch items, sheet scales and sheet names, up to 500 steps.
- History is cleared when you close the set.

## Copy markups to other sheets

To put the same stamp, note or cloud on several sheets, select it (or several markups) and choose {{ui:Copy to other sheets…}} in {{ui:Properties}}. Tick the sheets, or {{ui:All sheets}}, and choose {{ui:Copy}}. Each sheet gets a copy in the same place on the page, signed with your name. One {{key:Mod+Z}} removes them all.
