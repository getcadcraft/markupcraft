---
title: The tool chest
summary: Save a styled markup as a reusable tool, draw with it, and share your chest with the office as a file.
section: tasks
order: 100
keywords: tool chest, tools, tool set, custom tools, saved markups, favorites, office standard, import, export, share, json
---

The {{ui:Tools}} tab holds your **tool chest**: markups saved with their look, ready to draw again. A tool keeps the markup's kind, color, line width, fill, opacity, text size and subject, plus a stamp's wording, a count's group name, or the starting text of a text box or callout.

## The tools you start with

A new chest has six: "Revision cloud" (red), "Question cloud" (blue), "Yellow highlighter", "RFI callout" (blue, starts with "RFI: "), "Field verify" (an orange callout that says "Field verify.") and "Approved as noted" (a stamp).

## Draw with a tool

1. Open the {{ui:Tools}} tab.
2. Click a tool. It looks pressed, and the matching toolbar tool turns on.
3. Draw as usual. {{ui:Properties}} says 'Drawing with "<tool>" from the tool chest.'

While a chest tool is on, changes you make in {{ui:Properties}} before drawing apply to that tool for now, without changing the saved tool or your normal tool settings. Choosing a toolbar button, or pressing a tool's key, goes back to the plain tool.

## Save your own

1. Draw a markup and style it the way you want: color, line, fill, subject, stamp wording.
2. Select it.
3. Choose {{ui:Save selected as a tool}} in the {{ui:Tools}} tab, or {{ui:Save as a tool}} in {{ui:Properties}}.
4. Type a {{ui:Tool name}} and choose {{ui:Save tool}}.

Result: the tool is added at the end of the chest, and the {{ui:Tools}} tab opens to show it.

## Remove a tool

Choose the × at the end of the tool's row, then {{ui:Remove}}. Markups already drawn with it stay as they are.

## Where the chest is kept

The chest is stored **in this browser, on this computer**. Another browser or computer has its own chest (starting with the six defaults), a private window forgets it when it closes, and clearing this site's data in the browser's settings erases it.

If the browser will not store it (storage turned off, or full), the status bar says: "The tool chest could not be kept in this browser (storage is off or full). Export it to keep it."

:::safari
Safari can clear a website's stored data when you have not used the site for a while. Export your chest now and then so you can import it again.
:::

**Export your chest as a backup**, especially after building tools you rely on.

## Share a chest with your office

1. Set up the tools once.
2. Choose {{ui:Export}}. You get "MarkupCraft tool chest.json".
3. Put that file where the office keeps its standards, or send it around.
4. Everyone else chooses {{ui:Import}} in their {{ui:Tools}} tab and picks the file.

Result: "Imported 12 tools from "MarkupCraft tool chest.json"." Tools that came from the same chest replace their older copies, so importing an updated office chest refreshes those tools instead of doubling them; new tools are added. A chest holds up to 500 tools.

MarkupCraft checks every value in an imported file and skips what it cannot use ("2 skipped (not usable)"). Files that are not a chest are refused: "This file is not a MarkupCraft tool chest." or "This file is not a tool chest (it is not JSON)."

Tool chest files from other markup programs cannot be imported.
