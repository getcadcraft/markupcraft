---
title: A tour of the screen
summary: The toolbar, the sheets list, the sheet area, the five panels on the right and the status bar, by their on-screen names.
section: start
order: 20
keywords: screen, layout, toolbar, panels, sidebar, thumbnails, properties, status bar, interface, full screen, theme, dark mode
---

MarkupCraft fills the browser window. From top to bottom and left to right:

## The bar at the very top

The thin bar above everything belongs to the CadCraft family, not to MarkupCraft itself. It has:

- the app name and which version you are running,
- {{ui:About MarkupCraft}}, which opens the app's page on the website,
- {{ui:Help}}, which opens this help in a side panel (or press {{key:F1}}),
- {{ui:Save for offline}}, which keeps MarkupCraft, its PDF reader and writer, and this help in this browser so it opens with no connection; it then says "Offline ready" (see [Working offline](common:offline)),
- the screen-mode button ({{ui:Full screen}}), and
- {{ui:Settings}} (or {{key:Mod+,}}), with a {{ui:MarkupCraft}} tab for this app's own settings and {{ui:General}} for the ones every CadCraft app shares (see [MarkupCraft settings](topic:settings)), and
- {{ui:Paper}} and {{ui:Model}}, the light and dark themes. In {{ui:Model}} the sheets are drawn light-on-dark; your markups keep their own colors.

The screen-mode button, or {{key:Ctrl+Shift+F}}, steps through three modes: normal, full screen, and full screen with the bars hidden. With the bars hidden, move the pointer to the top edge of the screen (or tap there) and they slide back. This shortcut uses the Control key on every computer, Mac included.

:::note
In full screen, {{key:Esc}} also makes the browser leave full screen. If you only meant to cancel a drawing, press {{key:Ctrl+Shift+F}} again to go back to full screen.
:::

## The toolbar

Under the top bar, the tools are grouped and labeled:

| Group | Buttons |
|---|---|
| File | {{ui:Open}}, {{ui:Save}}, {{ui:Close}} |
| Select | {{ui:Select}}, {{ui:Pan}} |
| Draw | {{ui:Pen}}, {{ui:Highlight}}, {{ui:Line}}, {{ui:Arrow}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Polyline}}, {{ui:Polygon}} |
| Revise | {{ui:Cloud}}, {{ui:Free cloud}} |
| Annotate | {{ui:Callout}}, {{ui:Text}}, {{ui:Note}}, {{ui:Stamp}} |
| Measure | {{ui:Calibrate}}, {{ui:Length}}, {{ui:Area}}, {{ui:Count}} |
| Edit | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, and {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |

The tool you are using looks pressed. Hold the pointer over a button to see its key (for example "Rectangle (R)"); the {{ui:More}} menu lists each command's key beside it. Buttons that cannot act right now are dimmed: {{ui:Copy}} until you select a markup, {{ui:Paste}} until something is copied. A small dot after {{ui:Save}} means some markups are not saved yet. The full key list is in [Keyboard and mouse](topic:keyboard).

A tool stays on after you draw with it, so you can draw several clouds in a row. Press {{key:Esc}} (twice if the new markup is still selected) or {{key:V}} to go back to {{ui:Select}}.

## The sheets list (left)

{{ui:Sheets}} lists every page of every open PDF. Each row shows a small picture of the sheet, its name, its sheet number or file and page, and how many markups it has. The count after the heading is the number of sheets.

- Click a row to show that sheet.
- Type in {{ui:Search sheets}} to filter by sheet name, sheet number or file name. Press {{key:Enter}} to open the first match.

Sheet names come from the PDF when it has them. See [Open a plan set and move between sheets](topic:open-a-plan-set).

## The sheet area (middle)

The sheet you are working on. Before anything is open it shows "Open a plan set" with an {{ui:Open PDFs}} button. Drop PDFs anywhere here to open them.

Under the sheet, a narrow bar has:

- the previous and next sheet arrows, and "3 of 12: A-101 — Floor plan" (hold the pointer over it to see the file and page),
- zoom out, the zoom box (type a percentage and press {{key:Enter}}; 100% is actual size on a typical screen), zoom in,
- {{ui:Fit page}} and {{ui:Fit width}}.

Each sheet remembers its own zoom while the set is open.

When you compare two sheets, a legend appears here: "Only on the old sheet", "Only on the new sheet" and "On both". See [Compare two revisions](topic:compare-revisions).

## The panels (right)

Five tabs:

| Tab | What it shows |
|---|---|
| {{ui:Properties}} | The selected markup: author, dates, measured values, status, subject, text, comment, style, its replies and its punch item. With a drawing tool on and nothing selected, the settings new markups will use. With nothing selected and {{ui:Select}} on, the sheet: number, title, where the name was read from, paper size, scale, and {{ui:Rename sheet}}. |
| {{ui:Markups}} | Every markup in the open set, with filters, and {{ui:CSV}} and {{ui:BCF}} exports. See [The markups list](topic:markups-list-and-export). |
| {{ui:Punch list}} | Numbered punch items with assignee, due date and status. See [Make a punch list](topic:punch-list). |
| {{ui:Tools}} | The tool chest: saved, styled tools. See [The tool chest](topic:tool-chest). |
| {{ui:Compare}} | Overlay two sheets. See [Compare two revisions](topic:compare-revisions). |

## The status bar (bottom)

- On the left, where the pointer is on the sheet, in inches (or millimeters, in [Settings](topic:settings)) on the paper.
- In the middle, messages: what a tool expects next, what was just saved, why something was refused. **Read it when something does not happen.**
- The sheet's scale button ("Not calibrated", or the scale). Click it to set the scale. See [Calibrate a sheet and measure](topic:calibrate-and-measure).
- Your name ("Set your name" until you give one). Click it to change it.

## On a small screen

Below about 1180 pixels wide the panels get narrower and the sheet pictures shrink. On a phone-sized screen the parts stack: toolbar (scroll it sideways), the sheet, the status bar, the panels, then the sheets list at the bottom. A tablet in landscape keeps the full layout.
