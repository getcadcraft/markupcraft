---
title: Menus, keys and mouse
summary: Pick MarkupCraft's own toolbar or a PDF review menu bar, give any tool your own key, move tools between menus, and set what the wheel and the mouse buttons do.
section: reference
order: 11
keywords: menu style, menus, menu bar, toolbar, pdf review, keyboard shortcuts, hotkeys, keys, customize, remap, rebind, mouse, wheel, invert, zoom direction, middle button, right button, pan, export, import, switching, familiar
---

MarkupCraft's tools are the same whichever way you reach them. A **menu style** only decides where they sit on screen, what they are called there and which keys pick them. Choose one in {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}; the change is immediate, and this browser remembers it.

## The two styles

| Style | What you get |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraft's own toolbar (File, Select, Draw, Revise, Annotate, Measure, Edit) and its one-letter keys: {{key:V}} select, {{key:H}} pan, {{key:P}} pen, {{key:I}} highlighter, {{key:L}} line, {{key:A}} arrow, {{key:R}} rectangle, {{key:E}} ellipse, {{key:C}} cloud, {{key:K}} callout, {{key:T}} text, {{key:N}} note, {{key:S}} stamp, {{key:M}} length, {{key:Q}} area, {{key:U}} count. The start. |
| {{ui:PDF review}} | A menu bar ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Window}}) over a row of review tools, with keys set out the way PDF review programs set theirs: {{key:V}} select, {{key:Shift+V}} pan, {{key:H}} highlighter, {{key:Q}} callout, {{key:N}} polygon, {{key:Shift+N}} polyline, {{key:Shift+T}} note, {{key:Shift+A}} arc, and the measurements on {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrate, {{key:Alt+Shift+L}} length, {{key:Alt+Shift+G}} angle, {{key:Alt+Shift+A}} area, {{key:Alt+Shift+C}} count. {{key:Alt+L}} opens the markups list. The middle button pans; a right click does not. |

Both styles keep the {{key:Mod}} keys: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} fit page and {{key:Mod+9}} fit width; {{key:PageUp}} and {{key:PageDown}} change sheet.

:::tip
A key that belongs to MarkupCraft's own layout but not to the style you picked does nothing, and the status bar says where its tool went ("In PDF review, Callout is Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} and the arrows always keep their meaning. While you type in a text box, callout or note, every key is the text's, and numbers typed while drawing still open the length box.
:::

## Make it your own

1. Pick the style closest to what you want, then click {{ui:Customize…}}.
2. On {{ui:Keys and menus}}, find a tool (the search box helps). {{ui:Add a key}} and press the key, or two keys in a row for a two-letter key. Click a key to take it off.
3. With the menu bar, {{ui:Where it sits}} moves the tool to another menu, or to {{ui:Keys only}}.
4. On {{ui:Mouse}}, set the wheel and the buttons that pan the sheet.
5. Give it a name and click {{ui:Save}}.

Saving a built-in style makes your own copy ("My PDF review"); the built-in one never changes. A key given to two tools is shown in red and has to be fixed before you can save.

## Mouse

- **Mouse wheel**: {{ui:Scroll up zooms in}} (the start) or {{ui:Scroll up zooms out}}, and how fast. A trackpad pinch always zooms the way your fingers move.
- **Pan the sheet with**: the middle button, the right button, or both. {{key:Space}} and drag, and the {{ui:Pan}} tool, always pan; the left button otherwise draws and selects, so ticking it changes nothing here.
- MarkupCraft has no 3D view, so the 3D buttons do nothing here.

## Take it with you

{{ui:Export}} saves the style in use as a small `.ccinput.json` file; {{ui:Import…}} adds one, from another computer or a colleague. An imported file can only point at MarkupCraft's own tools: anything else in it is left out and counted in the status bar. {{ui:Delete this style}} removes one of your own.

:::note
These settings stay in this browser. {{ui:Use this style in every app}} under the style cards makes every app open in its matching style: {{ui:PDF review}} goes with the other apps' menu-bar styles, MarkupCraft's own toolbar with theirs. An app without a matching style keeps its own.
:::

Related: [Keyboard and mouse](topic:keyboard) · [MarkupCraft settings](topic:settings) · [Coming from other markup software](topic:coming-from)
