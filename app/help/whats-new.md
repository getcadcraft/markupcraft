---
title: What's new in 0.5
summary: Start with blank pages, your account's name on markups, review one set together live in CadCraft Studio, menu styles with your own keys, add-ons of MarkupCraft's own, and a layout for phones.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.5, version, new features, blank page, new, account name, author, live, studio, together, menu style, pdf review, keys, mouse, add-ons, phone, fold phone, tablet, settings
---

This is what changed in MarkupCraft 0.5, compared with 0.4. It is a smaller release than 0.4: your markups, measuring, compare and the lists work as they did.

## New

### Start with blank pages

- **File › New.** {{ui:New}} in the {{ui:File}} group, or {{ui:Start with a blank page}} on the start screen, makes a set of blank pages to sketch on. Pick the paper (Letter, Tabloid, ARCH D, ARCH E, A4, A3 or A1), portrait or landscape, a grid (none, dots or squares) and 1 to 20 pages. The set saves, autosaves and recovers like any PDF. See [Start with blank pages](topic:open-a-plan-set#start-with-blank-pages).
- **Add a blank page.** A blank set has {{ui:Add a blank page}} under its sheets, and {{ui:Insert a blank page}} draws the set's grid too. See [Print, and change the pages of a PDF](topic:pages-and-printing).
- {{key:Mod+N}} opens the same dialog where the browser lets the page have the key: the desktop app and CadCraft Studio always do, a normal Chrome tab keeps it for a new window.
- A blank set has no scale until you calibrate or pick one. See [Calibrate a sheet and measure](topic:calibrate-and-measure).

### Your name from your account

- **Signed in, MarkupCraft no longer asks for your name.** Markups, replies, stamps and the status bar use your account's name. {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Your name}} shows "From your account" with the name, and {{ui:Use another name}}; a name you type wins until you choose {{ui:Use my account name}}. Signed out, it asks as before. See [Set your author name](topic:set-your-name).

### Review one plan set together, live

- **In CadCraft Studio,** everyone in a session works on the same plan set at once. The host's PDFs come to each person who joins, replies from several people stay on one thread, and punch numbers never repeat. Undo undoes your own last change only. See [Review one plan set together, live](topic:work-live).

### Menus, keys and mouse

- **Two menu styles.** {{ui:MarkupCraft}} is the toolbar you know. {{ui:PDF review}} is a menu bar (File, Edit, View, Document, Markup, Measure, Window) over a row of tools, with the key pattern of PDF review programs. See [Menus, keys and mouse](topic:menus-keys-and-mouse).

### Add-ons

- **MarkupCraft runs add-ons of its own.** An add-on can add markup types drawn with MarkupCraft's tools and saved in the PDF, keep its own data on markups, add columns to the markups list, the CSV and the summary, and add a tab to the right panel. A PDF opened and saved without the add-on keeps the add-on's data. No add-on comes with MarkupCraft yet.

## Fixed

- On a phone, opening a file scrolled the whole page down to the sheets list. It now only brings the sheet into view in its panel.
- On a 360 px wide screen, the app bar ran past the right edge.

## In every app

- **CadCraft Studio is the desktop app.** From 0.5 the desktop download is CadCraft Studio: all eight apps in one install. The separate installer for each app stops. MarkupCraft still runs in the browser, and as a browser edition you can download.
- **Installers are not signed yet.** Code signing comes with 0.6. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. The macOS disk image (Apple silicon and Intel, macOS 13 or later) is not signed or notarized: the first time, right-click the app and choose {{ui:Open}}. iPad, Android and iPhone come with 0.6.
- **Work together live.** In CadCraft Studio, {{ui:Live}} shares the file you have open: teammates on the same network join with a short code and edit with you, each with their own undo. Sessions on your own network are free, for everyone. Invite links over the internet aren't open yet. See [Work together live](common:work-together-live) and [Review one plan set together, live](topic:work-live).
- **Menus, keys and mouse.** In {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}, pick a menu style ({{ui:MarkupCraft}} or {{ui:PDF review}}), give any command your own key, move commands between menus, set the wheel and the mouse buttons, and export or import a style as a `.ccinput.json` file. {{ui:Use this style in every app}} opens every app in its matching style. See [Menus, keys and mouse](topic:menus-keys-and-mouse).
- **A wider Settings dialog,** in two columns, so more fits without scrolling. See [MarkupCraft settings](topic:settings).
- **Floating and bottom panels fit the window.** A floating panel keeps above the status bar and shrinks with a small window, and a panel docked at the bottom never takes the whole drawing. See [Arrange the panels and use a second monitor](common:arrange-panels).
- **Phones and fold phones.** On a screen up to 760 px wide, or a phone held sideways, the sheet keeps the screen: panels open as sheets from a bar at the bottom, and the toolbar is one row that scrolls sideways. {{ui:Tools}} hides the toolbar and {{ui:Move}} puts it at the bottom. Turning the phone, or opening and closing a fold phone, keeps your work, the selection and an open dialog. The app bar's {{ui:More}} menu holds the version, Find and the links. Phones work, but MarkupCraft is made for larger screens.
- **Touch tablets.** On a touch screen each toolbar is one row that scrolls sideways instead of wrapping onto several lines. See [Review on an iPad or touch screen](topic:review-on-a-tablet).
- **Spanish** stays a machine-made draft that has not been reviewed yet. Help topics are in English.

## Not in this version yet

- Undoing a page change, including {{ui:Add a blank page}}. Close without saving and open the original PDF again.
- In a live session: PDFs opened after joining stay on your own screen, page changes are not shared, and there are no cursors or "is editing" labels yet. BCF export does not work in a browser that joined from a page Studio serves on the network.
- Invite links over the internet for live sessions.
- Reading text from scanned sheets.
- An assistant can connect only through CadCraft Studio. See [Use MarkupCraft with an AI assistant](topic:use-with-ai-assistants).
- Everything else is in [What is not built yet](topic:not-built-yet).
