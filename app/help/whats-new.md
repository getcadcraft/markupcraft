---
title: What's new in 0.7
summary: RFIs, submittals and daily logs in a new Field tab, with due dates, overdue in red, CSV and BCF, offline work and Merge; assistants that set statuses, reply and export the list; unit lists that follow Settings; panels that tidy away and dialogs that move.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.7, version, new features, field, field records, rfi, request for information, submittal, daily log, site diary, overdue, due date, assigned to me, pin, merge, offline, tablet, bcf, csv, assistant, mcp, markup status, reply, export, units, unit lists, star, calibrate, compact, panels, dialogs, portuguese
---

This is what changed in MarkupCraft 0.7, compared with 0.6. The big new thing is field records: RFIs, submittals and daily logs kept inside the PDF beside your markups.

## New

### RFIs, submittals and daily logs

- **The Field tab.** Open the {{ui:Field}} tab and choose {{ui:RFI}}, {{ui:Submittal}} or {{ui:Daily log}}. Tap or click the sheet where an RFI or a submittal belongs and a pin marks the place; a daily log goes on the open sheet without a pin ({{ui:Place pin}} adds one later, {{ui:Move pin}} moves any pin). Each record has its own number (RFI-0001, SUB-0001, LOG-0001), a title, text, a status, an assignee, a due date, a thread of replies and a list of attachment names. See [Track RFIs, submittals and daily logs](topic:field-records).
- **See what is late.** Filter the list by type, status, due date (overdue, due in 7 days, has or has no due date), this sheet or all sheets, a text search, or {{ui:Assigned to me}}. A record past its due date that is still waiting is marked **Overdue**, in red, on the list and on its pin. See [Find what matters](topic:field-records#find-what-matters).
- **CSV and BCF.** {{ui:CSV}} writes the listed records as a spreadsheet; {{ui:BCF}} writes them as BCF topics, each with a snapshot of its place on the sheet. Both follow the filters. See [Export](topic:field-records#export).
- **Offline, and two copies made one.** Records are saved inside the PDF and need no network, so a tablet on site can add, answer and save them. Back at the office, {{ui:Merge}} joins the records of another copy of the same PDF by their ids, as one undo step. See [Save, offline and merging copies](topic:field-records#save-offline-and-merging-copies).

### AI assistants

- **More an assistant can do.** Your own assistant, connected through CadCraft Studio, can now set a markup's status (`markup_status`, logged in its thread), reply in a thread (`markup_reply`) and export the {{ui:Markups}} list as CSV or BCF (`markups_export`, what the list shows with its filters). Each change is one undo step, signed with the assistant's name. See [What an assistant can ask for](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In every app

- **Units.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} has one list each for length, area, volume, angle and slope, with the exact sizes the units' definitions give (the US survey foot is its own unit). Switch off the units you never use and they leave the unit lists; star one and new work starts in it. A file always keeps its own unit. In MarkupCraft, the measuring and position units in {{ui:Settings}} › {{ui:MarkupCraft}} and the unit in the calibrate dialog follow the switches, the star sets the measuring unit until you save MarkupCraft's own settings, and the real distance you type when you calibrate can carry any unit's mark, such as `3 yd` or `1.5 km`. See [Units, typed values and the unit lists](common:unit-lists).
- **A denser layout and panels that tidy away.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fits more on the screen (touch screens and phones keep their large buttons). Each side panel has a slim title bar: drag it to dock or float the panel, drop it on another panel's bar to share one frame as tabs, pin it to slide away to the edge, or hide it and bring it back from the edge. See [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Dialogs move.** Drag a dialog by its title bar out of the way of the drawing; it comes back where you left it. Double-click the title bar to centre it again. See [Move a dialog](common:arrange-panels#move-a-dialog).
- **Recipes for AI assistants.** Ten worked requests for your own assistant (tidy a drawing, plot a set, check drawings, ask a model questions, total a takeoff, try a part variant…), each with the tools it calls and the permissions it needs, and each replayed by our tests. The apps contain no AI. See [Recipes for AI assistants](common:assistants-recipes).
- **Languages.** **Português (Portugal)** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. It, **Português (Brasil)**, **Español (México)** and **Bahasa Indonesia** now have every word of the apps, as drafts not yet reviewed by a native speaker. Help topics are in English.
- **CadCraft Studio** says why an update check failed (no file for your system yet, no network, a bad signature) instead of just "Done", and stops bringing back a What's new card you closed until there is a newer release.

## Not in this version yet

- **0.7 is not code-signed.** Signing, and the Microsoft Store package, moved to 0.8 because the certificate validation has not come through yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. CadCraft Studio is not in an app store yet, and there is no iPad or iPhone build yet.
- The angle and slope lists in {{ui:Units}} are saved, but no box reads them yet.
- Field records are not shared in a CadCraft Studio live session (live sessions carry markups only); bring copies together with {{ui:Merge}}.
- Merge takes a record as a whole from the copy changed last: if two people changed different fields of one record, the later copy's fields win. Threads and attachment names are joined.
- Attachments are names only; the files stay where they are. There are no teams, notifications or cloud projects for records, and assistants have no tools for records yet.
- Field records were tested in a browser at phone and tablet sizes with the network cut, but not yet by hand on a real tablet.
- Still from 0.6: turning page objects to any angle, drawing new shapes straight into the page, changing a line's font or size, and text that flows over several lines. A saved copy with page edits has not been opened in Acrobat yet.
- Still from 0.5: undoing a page change (such as adding a blank page), reading text from scanned sheets, and live sessions beyond your own network.

Everything else is in [What is not built yet](topic:not-built-yet).
