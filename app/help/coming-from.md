---
title: Coming from other markup software
summary: How the habits of a desktop PDF markup program map to MarkupCraft, and the differences that catch people out.
section: switching
order: 10
keywords: switch, switching, migrate, familiar, desktop pdf markup, tool chest, markups list, overlay, sessions, profile, shortcuts, differences
---

If you review drawings in Bluebeam Revu (or comment on PDFs in another desktop PDF program), most of MarkupCraft will feel familiar: clouds, callouts, a tool chest, a markups list, statuses with replies, calibrated measurements, sheet overlays. The way files are handled is the big difference, so read the next section even if you skip the rest.

## The five differences that matter

1. **Save makes a new file.** MarkupCraft runs in the browser and cannot write over the PDF on your disk. {{ui:Save}} downloads "<name> (marked up).pdf" and the original stays as it was. Next time, open the "(marked up)" copy, and tidy old copies yourself.
2. **The PDF is saved when you save.** Until then a recovery copy in this browser keeps your markups through a crash or a closed tab, and MarkupCraft offers it back next time. It is a safety net: save the PDF to keep the review.
3. **Your profile lives in the browser.** Your author name, tool settings and tool chest are kept in this browser on this computer. A different browser or computer starts fresh, and clearing site data erases them. Export your tool chest as a backup. See [What stays in this browser](topic:browser-storage).
4. **No shared sessions yet.** There is no live, shared review session and no cloud project. The review travels in the PDF: save, send the copy, the next person replies and saves.
5. **Scale is per sheet, and only per sheet.** There are no viewports inside a sheet and no "apply this scale to all pages". Calibrate each sheet you measure on.

## Habit by habit

| You are used to | In MarkupCraft |
|---|---|
| Thumbnails panel, page labels | {{ui:Sheets}} on the left. Names come from page labels or are read from the title block; fix them with {{ui:Rename sheet}}. |
| Opening several PDFs as a set | Open them all at once; they become one list. No set file is saved: open the same PDFs next time. |
| Tool chest with tool sets | {{ui:Tools}} tab: one chest per browser, saved tools with style and subject. Share by {{ui:Export}} and {{ui:Import}} as a JSON file. Tool set files from other programs cannot be imported. |
| Properties panel | {{ui:Properties}} tab: status, subject, comment, style, replies and punch item in one place. |
| Markups list with columns | {{ui:Markups}} tab with filters for sheet, author, status and type. Export CSV or BCF. No custom columns and no PDF or workbook summary yet. |
| Status and review state | {{ui:Status}}: Open, Accepted, Rejected, Completed. No custom status sets. Saved as standard review states. |
| Replies on a markup | The "Replies" thread in {{ui:Properties}}, with status changes logged in it. A sent reply cannot be edited. |
| Calibrate, then length, area, count | {{ui:Calibrate}}, {{ui:Length}} ({{key:M}}), {{ui:Area}} ({{key:Q}}, gives area and perimeter), {{ui:Count}} ({{key:U}}). No angle, radius, volume, polylength or cut-outs yet. |
| Overlay pages | {{ui:Compare}} tab: red for old, blue for new, align by two points. No automatic "compare documents" clouding. |
| Stamps | {{ui:Stamp}} with six built-in stamps and custom wording, signed with your name and the date. No image or signature stamps yet. |
| Punch or issue tracking | {{ui:Punch list}} tab: numbered items with assignee, due date and status; CSV export. |
| Live collaboration session | Not available yet. Pass the saved PDF around. |
| Flatten | Not built yet. Markups stay as comments other viewers can show and print. |
| Layers for markups | Not built yet. Use subjects, authors and the list filters to sort comments. |
| Hyperlinks between sheets | Not built yet. |
| Spacebar to pan, wheel to zoom | The same: hold {{key:Space}} and drag; the wheel zooms at the pointer. The wheel never scrolls the page. |

## Keys that differ

Many one-letter keys are what you might expect, but check these before your fingers do it for you:

- {{key:K}} is {{ui:Callout}}, and {{key:Q}} is {{ui:Area}}. If you are used to Q for callouts, it will start an area here.
- {{key:C}} is the box {{ui:Cloud}}; {{key:Shift+C}} is {{ui:Free cloud}}.
- {{key:M}} is {{ui:Length}}, {{key:U}} is {{ui:Count}}, {{key:Y}} is {{ui:Polyline}}, {{key:G}} is {{ui:Polygon}}, {{key:I}} is {{ui:Highlight}}.
- {{key:Mod+D}} duplicates the selection (instead of the browser's bookmark).
- {{key:Mod+Plus}} and {{key:Mod+Minus}} zoom the sheet, not the browser page.
- Keyboard shortcuts cannot be changed yet.

The full list is in [Keyboard and mouse](topic:keyboard).

## Things that work differently than you might expect

- **Tools stay on.** After a cloud, you are still drawing clouds. {{key:Esc}} once clears the selection, twice returns to {{ui:Select}}.
- **Text and callouts need text.** Finish with nothing typed and no markup is added. Notes are kept empty.
- **Measurements need a scale first.** {{ui:Length}} and {{ui:Area}} switch to {{ui:Calibrate}} on an uncalibrated sheet and come back after.
- **Comments from other programs.** Rectangles, ellipses, lines, polylines, polygons, ink, text boxes and sticky notes made elsewhere become editable MarkupCraft markups, and are rewritten in MarkupCraft's way when you save (their look can change slightly). Text highlights, other programs' stamps and other special kinds stay read-only: you can reply to them, not change them.
- **Characters outside Western European letters** print as "?" in the saved PDF. See [Save the marked-up PDF](topic:save-the-marked-up-pdf).
- **Stamp dates** use UTC, so a stamp made late in the evening in the Americas can show tomorrow's date.
- **Measurements carry over** as standard measurement comments, and each calibrated sheet keeps its scale, so a program that reads PDF measurements can usually show them. Exact behavior depends on that program.

## Using both

You can go back and forth. Comments made elsewhere open in MarkupCraft, and the "(marked up)" PDF opens in other PDF programs with every markup, reply and status visible. What only MarkupCraft reads back (punch assignee and due date, item status) is kept in the file for MarkupCraft.
