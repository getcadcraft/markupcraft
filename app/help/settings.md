---
title: MarkupCraft settings
summary: Change your name, the color and line weight of new markups, where paste puts copies, and the units for lengths and the sheet position.
section: reference
order: 65
keywords: settings, preferences, options, name, author, color, colour, default color, line weight, line width, thick, thin, paste, paste at pointer, offset, units, metric, millimeters, inches, feet, reset
---

Open {{ui:Settings}} with the gear in the bar at the top, or press {{key:Mod+,}}. The first tab, {{ui:MarkupCraft}}, holds the settings that belong to this app; {{ui:General}} holds the ones every CadCraft app shares (theme, toolbar, panels). MarkupCraft's settings exist only in the app: you change them here, and this browser remembers them (see [What stays in this browser](topic:browser-storage)). A change takes effect at once; there is nothing to save.

## Your name

{{ui:Name on markups}} is the name every new markup and reply carries, and that saved PDFs show as the comment's author. It is the same name as the button at the right end of the status bar; change it in either place. Markups already drawn keep the name they were made with. See [Set your author name](topic:set-your-name).

## New markups

- **{{ui:Markup color}}** is the color new pens, lines, arrows, rectangles, ellipses, polylines, polygons, clouds, callouts and text start with (red at the start). Highlighters, notes, stamps, lengths, areas and counts keep their own colors, because their colors say what they are.
- **{{ui:Thin lines}}, {{ui:Normal}}, {{ui:Heavy lines}}** make the lines of those same markups half as wide, as they are, or half again as wide.

A color or line width you choose for one tool in {{ui:Properties}} (with that tool on and nothing selected) wins over these. Tools from the [tool chest](topic:tool-chest) keep their own style. Markups already drawn do not change: select them and change them in {{ui:Properties}}.

## Paste

Where {{key:Mod+V}} puts what you copied:

- **{{ui:At the pointer}}** (the start): with the pointer on the sheet, the copy lands centered where it points. With the pointer elsewhere, it lands beside the original.
- **{{ui:Beside the copy}}**: always a little down and to the right of the original, a step further with each paste.

The {{ui:Paste}} button and {{key:Mod+Shift+V}} ({{ui:Paste in place}}) work the same with either choice. See [Copy, paste and duplicate](topic:select-and-edit#copy-paste-and-duplicate).

## Measurements

- **{{ui:Show lengths in}}** is the unit the sheet scale dialog offers first when you calibrate from two points: feet and inches, decimal feet, inches, meters or millimeters. Sheets you already calibrated keep their unit. See [Calibrate a sheet and measure](topic:calibrate-and-measure).
- **{{ui:Position on the sheet}}** chooses inches or millimeters for the pointer position at the bottom left of the screen. It is a position on the paper, not a real-world distance.

## Reset

{{ui:Reset MarkupCraft settings}} at the bottom of the dialog puts these settings, and the panel and toolbar settings on {{ui:General}}, back to how they start. It keeps your name, since that says who you are rather than how you like to work, and it keeps the colors you picked in each tool's own panel.
