---
title: What's new in 0.9 (earlier)
summary: Notes and a pasteboard that never print, encrypted private notes and a clean copy for the client, batch links for a whole drawing set, an Arc tool with ten methods, following another reviewer in Live, and a fix for deleted markups staying in the saved PDF.
section: start
order: 6
keywords: whats new 0.9, earlier release, whats new, what's new, 0.9, release notes, changelog, notes, pasteboard, private notes, passphrase, encrypted, hide notes, show notes, clean copy, snapshot, batch links, sheet callouts, link sheets, title block, sheet number, addendum, renumber, pdf link, arc, arc methods, three point arc, radius, follow, follow me, live, class view, people list, deleted markup, tooltips, tab titles, whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, task, tasks, assignee, due day, overdue, check now, what changed, revisions, compare, voice note, decision, redline, answers file, drafter, assistant, mcp, problems, languages, input devices, trackpad, toolbar rows, property grid, update
---

This is what changed in MarkupCraft 0.9, compared with 0.8.1. The main idea is that your working notes stay off the page the client gets, and a whole drawing set can be linked in one pass.

## New

### Notes, the pasteboard and private notes

- **The pasteboard.** The area around each sheet is a desk: anything drawn, typed or pasted beside the sheet is a note and never prints. Choose {{ui:Show the pasteboard}} to zoom out for room, or {{ui:Snapshot to the pasteboard}}, drag a box, then {{ui:To the pasteboard}} to put a picture of part of the drawing beside the sheet. A snapshot is a picture and does not change when the sheet does. See [Notes, the pasteboard and private notes](topic:notes-and-pasteboard).
- **Show and hide notes.** Any markup can be a note: set {{ui:New markups are}} in the {{ui:Notes}} tab, or {{ui:This markup is}} in {{ui:Properties}}. {{key:Shift+H}} or the {{ui:Notes}} switch under the sheet hides and shows every note at once. Notes are left out of printing, flattened copies, lists and exports, and other PDF readers do not show them. Your saved PDF keeps them for the next time you open it in MarkupCraft.
- **Private notes.** Choose {{ui:Set a passphrase}}, then make a markup {{ui:A private note}}. It is encrypted in the file with a passphrase of at least 10 characters, and there is no recovery: nobody, including us, can open it without the passphrase. {{ui:Lock}} puts private notes away; {{ui:Stay unlocked on this device}} is off by default.
- **Save a clean copy.** {{ui:Save a clean copy}} removes every note, private note and everything on the pasteboard. Use it for the file that goes to the client.

### Link a whole set

- **Batch links.** Choose {{ui:Pages}} › {{ui:Batch links…}}, or {{ui:Link sheet callouts…}} under {{ui:Find text}} in the {{ui:Sheets}} panel. Step 1 lists each sheet's number and name as read from its title block; fix any that are wrong. Step 2 lists the callouts found, such as `3/A-501` or `DETAIL 2 ON A-501`. {{ui:Will link}} shows the sheet and view for each, {{ui:Not linked}} shows numbers no open sheet has, and {{ui:Create the links}} makes them all in one undo step. Run it again after an addendum or a renumbering; links you made by hand are never changed. A link with a view is saved as a PDF link, so other readers open the detail too. See [Sheet links](topic:sheet-links).

### Drawing

- **Arc, ten methods.** The {{ui:Arc}} tool ({{key:O}}) now has an {{ui:Arc method}} box over the page with ten ways to draw an arc, and angle, length, radius and direction can be clicked or typed. See [Draw an arc ten ways](topic:draw-an-arc).

### Working together

- **Follow a reviewer.** In a Live session choose {{ui:Follow}} beside a person's name and your view moves with theirs; panning or zooming yourself stops it. The host can choose {{ui:Ask everyone to follow me}}. The people list shows each person's colour, name, the sheet they are on and when their last edit was. See [Follow another reviewer in a Live session](topic:follow-in-live).

## In every app

- Tooltips are Bootstrap tooltips, the start tip can be closed, tab strips scroll when they overflow, and browser tab titles read `<document> — MarkupCraft | CadCraft`.
- A panel with several sections opens one and closes the others (a lock beside the caret keeps one open); a Settings switch turns this off.
- Each app starts from a default collection of Library objects.
- Weight and temperature units are available in the Units settings.

## Fixed

- **Removed markups no longer stay readable inside the saved PDF.** Saving used to take a deleted or rewritten annotation off its page but leave the object, with its text, in the file. Save now deletes those objects. Files saved by earlier builds still hold them until you save them again.

## Honest limits

- Batch links were tried on our own test sets. Real sets draw bubbles in many ways, so on a client set some views may be missed. Scanned sheets need {{ui:Read text (OCR)…}} first.
- Notes, private notes and the pasteboard were tested in a headless browser and in our own files, not with a large real vector set and not in a real two-person Live session. Changing a passphrase is not built. Builds older than 0.9 do not show notes.
- The class view is the people list; it has not been tried with a real teacher and students.
- Languages other than English are machine drafts until a native speaker reads them.
- Windows installers are not code-signed (More info, then Run anyway); the macOS disk image is not notarized (right-click, then Open).

## Earlier: 0.8 and 0.8.1

This is what changed in MarkupCraft 0.8 and 0.8.1, compared with 0.7. The big new thing is that a markup can be a task that someone, or your own assistant, does, and that closes itself when the drawing really changes.

### New

**Markups that act**

- **Make a markup a task.** Select one or more markups, open the {{ui:Tasks}} tab and choose {{ui:Make selected a task}}. A task has a title, a person or your connected assistant to do it, an optional due day and a state, and it keeps its place on the sheet and its thread. See [Make a markup a task](topic:markups-that-act).
- **Tasks that close themselves.** A task can watch the drawing inside its markup. Open a newer revision of the sheet and choose {{ui:Check now}}: if the lines in that area changed by more than a hair, the task is marked Done, its markup becomes Completed and a note in the thread says what changed. A new date stamp, or lines that moved less than 1.5 points, do not count. A task can instead watch a model element: your assistant reports the element with `tasks_check`, and a later report that differs, or a deleted element, closes the task. One undo step reopens it.
- **Find the work.** Filter the {{ui:Tasks}} list by state and by who it is for, including {{ui:Overdue}}; choose {{ui:Assigned to}}, then {{ui:Assistant}} to see what waits for your assistant. A task past its due day shows as a warning in the Problems panel. {{ui:CSV}} exports the list. Tasks are saved in the PDF with the markup and travel through Live like other markup properties.

**What changed, as a plain list**

- **List the changes.** Open the {{ui:Compare}} tab, then {{ui:Compare a whole set}}, pick the earlier and the later file and choose {{ui:List the changes}}. The list starts with a count, then covers each changed sheet, biggest change first: where on the sheet, how big (in real units as well as paper inches on a calibrated sheet), whether lines were added or removed, how many markups sit there, and which words appeared or disappeared. {{ui:Copy the list}} puts it on the clipboard and {{ui:CSV}} writes one row per change. See [List what changed between revisions](topic:what-changed-in-words).

**Voice notes and decisions**

- **Voice notes.** In the {{ui:Notes}} tab choose {{ui:Record a voice note}}, then {{ui:Stop recording}}; recordings stop by themselves at two minutes. The note is pinned at the center of the sheet, you drag it where it belongs and type a caption in {{ui:Properties}}, and {{ui:Play}} in the list plays it. The recording is saved inside the PDF.
- **Decisions.** {{ui:Pin a decision}} writes a sentence or two on the sheet. If it replaces an earlier decision, pick that one in {{ui:It replaces}}: the old one stays, marked Replaced, and points to the new one. One undo step takes it back. See [Pin voice notes and decisions on a sheet](topic:voice-notes-and-decisions).

**Redline to revision**

- **Send and answer.** In the {{ui:Tasks}} tab open {{ui:Redline to revision}}, type the revision the markups are against and choose {{ui:Export redline file}}. You get a `.redline.json` file with one item per open markup: sheet, position (as fractions of the sheet, so a re-plot at another size still lines up), words, author, thread and its task. Whoever draws the changes answers Accepted, Rejected or Done in a `.redline-answers.json` file; {{ui:Load answers file…}} gives each markup that status and the drafter's note, as one undo step. See [Send markups to the drafter as a redline](topic:redline-to-revision).

**AI assistants**

- **More tools.** An assistant you connected through CadCraft Studio can list tasks (`tasks_list`), make or change one (`task_set`), take the task off (`task_clear`), check one against a newer revision or an element (`tasks_check`) and read the plain list of changes between two open plan sets (`revisions_changes`). It only gets the tools you ticked under the Assistants switch, and each change is one undo step. See [Use MarkupCraft with an AI assistant](topic:use-with-ai-assistants).

### In every app

- **Languages.** CadCraft Studio now has 54 languages. Ten are new: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili and Uzbek. All of the non-English ones are machine drafts until a native speaker reads them.
- **Input devices.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} sets what a trackpad, your mouse's side buttons, a pen, finger taps, a 3D mouse, a game controller or a MIDI controller does, for every app or only for this one. Until you change something, every device works as before. See [Use a trackpad, 3D mouse or controller](common:input-devices).
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} has {{ui:Wrap}} (the default), {{ui:2 rows}} and {{ui:1 row}}, so the drawing gets more room. See [Arrange the panels](common:arrange-panels).
- **Property grid.** The Style fields of a markup use the shared grid, with collapsible categories and label and value columns.
- **Problems panel.** Warnings from the app, such as an overdue task, collect in one Problems panel.
- **Live and add-ons.** Live sessions are described in [Work together live](common:work-together-live); the add-on list that follows your account is in [Add-ons and your account list](common:addons-basics).
- **Connect your AI.** CadCraft Studio is the hub for your own assistant: connect once for all eight apps. The apps contain no AI of their own.

### Fixed in 0.8.1

- **Studio can switch language while it runs.** Before, the desktop app and the packed editions stayed in English. This is not yet tested on every platform: tell us if the language does not change.
- Studio 0.8 installs are offered 0.8.1 through {{ui:Settings}} › {{ui:Updates}}.

### Not in this version yet

- **Not code-signed.** The Windows installers and the macOS .dmg carry no signature yet. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, right-click CadCraft Studio and choose {{ui:Open}}. Store builds are on hold.
- **Connect your AI is unfinished in places.** One-click connecting inside Studio, the hosted connector for browser assistants and your own API key inside Studio are not promised for this release. The task loop has been tested, but not yet with a real assistant.
- **Task checks need the same page size.** A sheet re-plotted at another size will not match, so its tasks do not close. Sheets are paired by sheet number, else by page position.
- **Voice notes are recordings only.** There is no transcript, and an assistant sees a note's length, author and caption, not the sound. Recording was tried with a fake microphone in a headless browser; a real microphone on a phone, tablet or laptop is still to be checked.
- **Calc sheets and reasons in a PDF** are kept in a private entry of the file. An older MarkupCraft ignores that entry and drops it the next time it saves the file, so open and save such a file with 0.8 or later.
- **The drafter's side of redlines.** CadCraft reading the redline file and answering it is not built yet.
- **Other languages.** Tamil's app bar overflows by 528 px.

Everything else is in [What is not built yet](topic:not-built-yet). For the release before this one, see [What's new in 0.7](topic:whats-new-0-7).
