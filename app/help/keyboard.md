---
title: Keyboard and mouse
summary: Every key, mouse action and touch gesture MarkupCraft understands, grouped, plus the shortcuts the browser keeps.
section: reference
order: 10
keywords: keyboard, shortcuts, hotkeys, keys, mouse, wheel, right click, middle button, trackpad, touch, gestures, pinch, space pan
---

Shortcuts written with {{key:Mod}} accept either ⌘ or Control on a Mac, and Ctrl on Windows and Linux. Tool letters work only when you are not typing in a box; while you type, letters are just letters. See also [Keys, mice and trackpads](common:keys).

## Tools

| Key | Tool |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Content}}: the page's own lines, pictures and text (see [Change the page's own content](topic:page-content)) |
| {{key:P}} | {{ui:Pen}} |
| {{key:I}} | {{ui:Highlight}} |
| {{key:L}} | {{ui:Line}} |
| {{key:A}} | {{ui:Arrow}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polyline}} |
| {{key:G}} | {{ui:Polygon}} |
| {{key:C}} | {{ui:Cloud}} (drag a box) |
| {{key:Shift+C}} | {{ui:Free cloud}} |
| {{key:K}} | {{ui:Callout}} |
| {{key:T}} | {{ui:Text}} |
| {{key:N}} | {{ui:Note}} |
| {{key:S}} | {{ui:Stamp}} |
| {{key:M}} | {{ui:Length}} |
| {{key:Q}} | {{ui:Area}} |
| {{key:U}} | {{ui:Count}} |
| {{key:O}} | {{ui:Arc}} |
| {{key:X}} | {{ui:Angle}} |

{{ui:Calibrate}} has no key: use its toolbar button or the scale button in the status bar. Tool letters are ignored when {{key:Alt}} is held.

## While drawing

| Key or action | What it does |
|---|---|
| {{key:Shift}} while drawing | Lines, arrows, lengths and polyline sides at 45° steps; rectangles, ellipses and box clouds square; pen and highlighter one straight stroke |
| Double-click, {{key:Enter}} or right-click | Finish a polyline, polygon, free cloud or area |
| {{key:Backspace}} | Remove the last point of a polyline, polygon, free cloud or area |
| {{key:Esc}} | Cancel what you are drawing; with nothing in progress, clear the selection; with nothing selected, go back to {{ui:Select}} |
| {{key:Mod+Enter}} | Finish typing in a text box, callout or note (or click outside it) |
| {{key:Esc}} while typing | Cancel the text you were typing |
| {{key:Shift}}-click with {{ui:Count}} | Remove the nearest dot of the selected count group |

## Selecting and editing

| Key or action | What it does |
|---|---|
| Click | Select a markup |
| {{key:Shift}}-click | Add or remove a markup from the selection |
| Drag left to right on empty sheet | Select what is fully inside the window |
| Drag right to left on empty sheet | Select what the window touches |
| {{key:Mod+A}} | Select every markup on this sheet |
| Drag a selected markup | Move it ({{key:Shift}}: along 45° steps) |
| Drag a handle | Resize or reshape ({{key:Shift}}: keep proportions, or 45°) |
| Arrow keys | Nudge the selection one screen pixel ({{key:Shift}}: ten) |
| Double-click, or {{key:Enter}} | Edit the text of a text box, callout or note; for a stamp, open {{ui:Properties}} |
| {{key:Delete}} or {{key:Backspace}} | Delete the selection |
| {{key:Esc}} | Select nothing |
| {{key:Mod+Z}} | Undo |
| {{key:Mod+Y}} or {{key:Mod+Shift+Z}} | Redo |

## Cut, copy and paste

The same commands are in the toolbar's {{ui:Edit}} group ({{ui:Copy}}, {{ui:Paste}}) and its {{ui:More}} menu, each with its key. Every one is a single undo step. See [Copy, paste and duplicate](topic:select-and-edit#copy-paste-and-duplicate).

| Key | What it does |
|---|---|
| {{key:Mod+X}} | Cut: copy the selection and delete it |
| {{key:Mod+C}} | Copy the selection |
| {{key:Mod+V}} | Paste. With the pointer on the sheet, the copy lands centered where it points; otherwise beside the original. Settings can make it always paste beside the original. |
| {{key:Mod+Shift+V}} | Paste in place: the same spot on the sheet, on this sheet or another |
| {{key:Mod+D}} | Duplicate the selection beside it (the clipboard is left alone) |

## Help

| Key | What it does |
|---|---|
| {{key:F1}} | Open or close this help (a panel at the side; the sheet stays usable). Also {{ui:Help}} in the bar at the top. |
| {{key:Esc}} in the help | Close the help |

:::mac
On most Mac keyboards, press {{key:F1}} with **fn** (or the globe key), or use {{ui:Help}}. See [Keys, mice and trackpads](common:keys#function-keys-on-a-mac).
:::

## Files and sheets

| Key | What it does |
|---|---|
| {{key:Mod+N}} | New blank pages (when the browser lets the page have the key; see [Start with blank pages](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Open PDFs |
| {{key:Mod+P}} | Print (see [Print, and change the pages](topic:pages-and-printing)) |
| {{key:Mod+F}} | Find text in the drawings (see [Find text](topic:find-text)) |
| {{key:Mod}}+click a linked markup | Follow its sheet link; {{key:Alt+Left}} goes back (see [Sheet links](topic:sheet-links)) |
| {{key:Mod+S}} | Save a marked-up copy |
| {{key:PageDown}} / {{key:PageUp}} | Next / previous sheet |
| {{key:Enter}} in {{ui:Search sheets}} | Open the first matching sheet |
| {{key:Mod+Enter}} in {{ui:Write a reply}} | Send the reply |

## Zoom and pan

| Key or action | What it does |
|---|---|
| Mouse wheel | Zoom in or out around the pointer (the wheel never scrolls) |
| {{key:Ctrl}} + wheel | Zoom faster |
| {{key:Plus}} or {{key:Minus}} (also with {{key:Mod}}) | Zoom in or out around the middle; {{key:=}} works as plus |
| {{key:Mod+0}} | {{ui:Fit page}} |
| {{key:Mod+9}} | {{ui:Fit width}} |
| Drag with the middle button | Pan |
| Drag with the right button | Pan (when you are not in the middle of a polyline) |
| Hold {{key:Space}} and drag | Pan |
| Arrow keys with nothing selected | Pan |
| {{key:Ctrl+Shift+F}} | Screen mode: normal, full screen, full screen with bars hidden (Control key on every computer) |

:::mac
**On a trackpad:** two-finger scrolling zooms. Pinch also zooms in Chrome, Edge and Firefox. Pan with {{key:Space}} held while you drag, or with the {{ui:Pan}} tool. A two-finger click is a right-click and finishes a polyline. Control-click may act as a plain click here rather than a right-click, so use a two-finger click.
:::

:::touch
## Touch

| Gesture | What it does |
|---|---|
| One finger | Draw with the current tool, or select |
| Two fingers | Pinch to zoom around their middle, move to pan |
| Second finger during a stroke | Cancels the stroke and zooms instead |
| Double-tap | Finish a polyline, polygon, free cloud or area |

Count dots, notes, polyline points and the second point of a two-point tool are placed when the finger lifts. See [Review on an iPad or touch screen](topic:review-on-a-tablet).
:::

## Shortcuts the browser keeps

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} and {{key:Mod+Q}} belong to the browser. Closing the tab or window with unsaved markups loses them, after the browser's "Leave site?" question on a computer.
- Most browsers keep {{key:Mod+N}} for a new window, so in a browser tab use {{ui:New}} in the toolbar; the desktop app and Studio pass the key to MarkupCraft.
- MarkupCraft takes {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} and {{key:Mod+Minus}} away from the browser while the app has the keyboard, and {{key:Mod+C}} and {{key:Mod+X}} while markups are selected. {{key:Mod+,}} opens {{ui:Settings}}. To zoom the whole browser page instead, use the browser's menu.
- {{key:Mod+9}} jumps to the last browser tab in some browsers before MarkupCraft sees it. If that happens, use {{ui:Fit width}} under the sheet.
- {{key:Esc}} in full screen also leaves full screen.

## When a key does nothing

- **You are typing in a box.** Click on the sheet first. (A click with a drawing tool draws; press {{key:Esc}} afterward or use {{key:Mod+Z}}.)
- **A dialog is open.** Keys go to the dialog until it closes.
- **You just clicked a toolbar button** and the arrow keys or {{key:Space}} act on that button instead. Move the pointer over the sheet and use the wheel or middle button, or press a tool letter instead of clicking buttons.
