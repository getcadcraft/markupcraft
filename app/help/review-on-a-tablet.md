---
title: Review on an iPad or touch screen
summary: Pinch, pan and draw with your fingers or a stylus, what acts on lift, what needs a keyboard, and how to keep your work safe on a tablet.
section: tasks
order: 140
keywords: ipad, tablet, touch, touch screen, pinch, zoom, two fingers, apple pencil, stylus, finger, field, site, surface, gestures, mobile
---

MarkupCraft works with touch: on an iPad (Safari or Chrome), on a touch-screen laptop, or on a Windows or Android tablet with a recent browser. In landscape a tablet shows the full layout.

## Gestures

| Gesture | What it does |
|---|---|
| One finger | Draws with the current tool, or selects with {{ui:Select}} |
| Two fingers, spread or pinch | Zooms around the point between your fingers |
| Two fingers, moved together | Pans; you can zoom and pan in one movement |
| A second finger while drawing | Cancels what the first finger started and starts zooming instead |
| Double-tap, or touch and hold | Finishes a polyline, polygon, free cloud or area |
| Touch and hold a text, callout or note, with {{ui:Select}} | Opens its text to edit |
| One finger with {{ui:Pan}} on | Pans |

On a touch screen the toolbar buttons, menus, tabs and dialog buttons are larger, so they are easy to hit with a finger.

## What happens on lift

So that the first finger of a pinch never leaves a mark, some tools act when you **lift** your finger, not when you touch:

- {{ui:Count}}: the dot is added on lift.
- {{ui:Note}}: the note is placed on lift.
- {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} and {{ui:Area}}: each point is added on lift.
- {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}} and {{ui:Calibrate}}: when you tap the start and then tap the end, the end is placed on lift.

If your finger slides more than a little before lifting, it does not count as a tap and nothing is added. Tap cleanly; to correct, use {{ui:Undo}}.

Tools you drag ({{ui:Pen}}, {{ui:Highlight}}, {{ui:Cloud}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Callout}}, {{ui:Text}}, {{ui:Stamp}}) start as soon as you touch; a second finger cancels them.

## Selecting with a finger

- Tap a markup to select it; drag it to move it; drag a handle to resize. After a finger touches the sheet, markups and handles take a bigger target and the handles draw larger.
- Drag across empty sheet to draw a selection window (left to right: fully inside; right to left: touching).
- In {{ui:Select}}, one finger does **not** pan. Use two fingers, or choose {{ui:Pan}}.

## Things that need a keyboard

Without a keyboard there is no {{key:Shift}}, {{key:Esc}} or {{key:Enter}}. Here is what to do instead:

| Keyboard action | Without a keyboard |
|---|---|
| {{key:Esc}} to cancel or go back to Select | Tap {{ui:Select}} in the toolbar |
| {{key:Shift}} for 45° lines, squares and circles | Draw carefully; adjust with the handles |
| {{key:Shift}}-click to add to a selection | Use a selection window |
| {{key:Shift}}-click to remove a count dot | {{ui:Undo}} right after a wrong tap |
| {{key:Mod+Enter}} to finish typing | Tap outside the text box |
| {{key:Enter}} to finish a polyline, or to edit a markup's text | Touch and hold, or {{ui:Edit on the sheet}} in {{ui:Properties}} |
| {{key:Delete}} | {{ui:Delete}} in the toolbar or in {{ui:Properties}} |
| Starting a new count group with {{key:Esc}} | Tap empty sheet with {{ui:Select}}, then tap {{ui:Count}} again |

A keyboard case or Bluetooth keyboard brings back every shortcut; on an iPad, the ⌘ key works for {{key:Mod+Z}} and the rest.

Buttons do not show their tooltips on touch. The key for each tool is listed in [Keyboard and mouse](topic:keyboard).

## Stylus and Apple Pencil

A stylus (Apple Pencil, Surface Pen and the like) works like a mouse: it draws and selects, and acts at once on touch-down. Use your fingers for pinch and pan. Pressure does not change line width.

## Opening and saving on an iPad

- {{ui:Open}} shows the Files picker: iCloud Drive, On My iPad, and any storage app you have connected.
- {{ui:Save}} asks to download; the copy lands in Files, under Downloads (or the folder set in Safari's settings).

## Keep your work safe on a tablet

:::warning
iPad Safari does not warn you before leaving a page with unsaved work, and iPadOS can reload a tab in the background to free memory. MarkupCraft keeps a recovery copy in the browser and offers it back when you open it again (see [Recover your work](common:recover)), but **save after each sheet or each walk-round**: a private tab keeps no copy.
:::

- Your name, tool settings and tool chest are kept in that browser on that iPad, like on a computer. See [What stays in this browser](topic:browser-storage).
- **Before a site visit with no signal:** while you are still online, open MarkupCraft in Safari (or Chrome) on the iPad and choose {{ui:Save for offline}} in the bar at the top. Wait until it says "Offline ready" (it counts "Saving N of M"; the PDF reader and writer are about 6 MB). On site, open the same address or a bookmark of it: opening, marking up and saving PDFs work with no connection. If it says "Offline not available", you are in a private tab; use a normal one. See [Working offline](common:offline).
- Safari removes an offline copy you have not used for some weeks. Before a trip, click "Offline ready" and choose "Save again (get the newest version)".
- Very large plan sets use a lot of memory. On a tablet, open only the sheets you need for the visit.

## On a phone

It works, but the screen is small: the parts stack (toolbar, sheet, status bar, panels, then the sheets list), and the toolbar scrolls sideways. Use a phone to look and to add a quick note, and a tablet or computer for real review.
