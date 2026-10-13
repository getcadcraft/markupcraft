---
title: Save the marked-up PDF
summary: Download a copy with every markup written in as standard PDF comments, check what other PDF readers see, and keep working on it later.
section: tasks
order: 120
keywords: save, download, export pdf, marked up, annotations, comments, share, send, issue, keep working, reopen, round trip, print
---

## Save

1. Choose {{ui:Save}} in the toolbar, or press {{key:Mod+S}}.
2. If several files are open, choose {{ui:This file}} (the file of the sheet you are on) or {{ui:Every changed file}}. Each copy downloads separately.
3. Wait for "Saving <file>…" to finish. The first save in a session also loads the PDF writer.

Result: your browser downloads "<name> (marked up).pdf", and the status bar reports it: 'Saved A-Plans (marked up).pdf (24 markups, 18.2 MB). The original file is unchanged.' The dot after {{ui:Save}} goes away.

**Your original PDF is never changed.** MarkupCraft writes a new file. Where it lands depends on your browser's download settings (see [Files MarkupCraft opens and saves](topic:files#where-downloads-go)).

## Keep working on it later

Open the "(marked up)" copy next time, not the original. Everything comes back editable: markups, statuses, replies, punch items, each sheet's scale and any sheet names you typed. Saving it again downloads a file with the same "(marked up)" name; your browser may add a number such as "(1)" if the old download is still in the folder. Replace or tidy old copies yourself.

MarkupCraft does not save the PDF on its own. While you work it keeps a recovery copy in this browser, so a crash or a closed tab does not lose your markups: the next time you open MarkupCraft it asks "Recover your work?". See [Recover your work](common:recover). Still save before closing; if you try to leave with unsaved markups, the browser asks "Leave site?" first (iPad Safari does not).

## What other PDF readers see

Every markup is written as a standard PDF comment (annotation) with its own drawing, so any PDF viewer shows it, prints it, and lists it in its comments panel:

- **The look is the same** as in MarkupCraft: clouds with their scallops, arrowheads, stamps, count dots, punch number badges, measurement labels.
- **The details are standard:** author, date, subject, the comment text, and colors.
- **Clouds** are rectangle or polygon comments with a cloudy border; **text boxes** and **callouts** are text box comments; **notes** are sticky notes; **pen** and **highlighter** strokes are ink; **stamps** are stamp comments.
- **Lengths and areas** are measurement comments, and each calibrated sheet carries its scale, so viewers that understand measurements can show the values.
- **Replies** are replies to the comment, and **statuses** are review states (Open shows as no state).
- **Sheet numbers** you typed become the page labels other viewers show.

A few things only MarkupCraft reads back: the punch item's assignee and due date, item status, and some style details. Other programs keep them unless they rewrite the comment.

In another program, comments can be moved or edited like any other. If someone does that and sends the file back, MarkupCraft uses the comment's new position when it opens the file.

Full detail: [What is saved in the PDF](topic:what-the-pdf-keeps).

## Characters that print as "?"

Markup text is written with the standard Helvetica font that every PDF viewer has. It covers English and Western European letters (é, ñ, ü, ø, and the like), but not other scripts, symbols outside that set, or emoji. Those characters show fine in MarkupCraft but print as "?" in the saved copy, and the save message counts them: "3 characters outside the Western European set print as "?" in the copy." Spell such words out, or use a plain substitute (for example "dia." for the diameter sign).

## Files that cannot be saved

- **Protected PDFs:** "This PDF is protected (encrypted), so a marked-up copy cannot be written. Ask for an unprotected copy." You can still review it on screen, export the CSV and the BCF.
- If saving fails for another reason, a box called "Could not save <file>" shows the reason. Your markups are still in the tab; nothing is lost until you close it.

## Flattening and printing

There is no flatten (burning markups into the page) and no print command yet. To print, open the saved copy in any PDF viewer and print with comments shown.
