---
title: Issues, revisions and the drawing changelog
summary: Keep one issue history with the architect's model: read the issues in, record site instructions, shop drawings and linked models against an issue, and read the drawing changelog.
section: tasks
order: 86
keywords: issue, revision, revisions, changelog, drawing changelog, drawing register, site instruction, shop drawing, linked model, tender, construction, issue history, revision cloud, cloud, markup set
---

## What you'll do

Work from the same issue history as the rest of the team. See which sheets went out at which revision, and keep what happens on site against the issue it belongs to.

## Steps

1. Open **Issues and revisions**.
2. Choose **Read an issue history** and pick the `.issues.json` file saved from BimCraft or another app. Its issues and records are added to yours. Nothing is replaced.
3. Choose **Add a record** for a site instruction, a shop drawing, a markup set, a linked model or a note. Pick the issue it is against and its status. A file you choose is recorded by its name, size and SHA-256; the file stays where it is.
4. **Drawing changelog** shows one row for each sheet and one column for each issue. A revision in brackets was issued again unchanged.
5. **Download the changelog (CSV)** saves the issues, the sheet table and the records. **Save the issue history** writes a file the other apps read.

## Good to know

- **Record the selected markups** puts the markups you selected against the latest issue. A cloud is recorded as a revision cloud at that issue's revision. Choose **Show** beside the record to jump to it.
- **Record an issue** issues your marked-up sheets. **Changes since** then tells which sheets were marked up after that issue.
- The history is saved inside the marked-up PDF. It is not part of Undo.
- Reading the same file twice adds nothing twice. When two copies hold the same record, the newer one is kept.
