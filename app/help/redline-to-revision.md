---
title: Send markups to the drafter as a redline
summary: Write the open markups as a redline file for whoever draws the changes, then load their answers so each markup shows Accepted or Rejected.
section: tasks
order: 60
keywords: redline, revision, drafter, accept, reject, answers, cc-redline, revision cloud, apply markups
---

Reviewing is half the job; the drawing still has to change. The redline file carries each open markup to the drafter and the drafter's answers carry the result back.

## Send

1. Open the {{ui:Tasks}} tab and open {{ui:Redline to revision}}.
2. Type the revision the markups are against (for example B).
3. Choose {{ui:Export redline file}}.

You get a `.redline.json` file with one item per Open markup: its sheet, where it is (as fractions of the sheet, so a re-plot at another size still lines up, and in points), its words, author and thread, and its task if it has one. Read-only comments from other programs, pictures and legends are left out.

## Answers

The drafting side answers each item Accepted, Rejected or Done, with a note, in a `.redline-answers.json` file. Choose {{ui:Load answers file…}} and pick it: each markup gets that status and the drafter's note in its thread, and a task whose markup was accepted or done is finished. One undo step takes all the answers back.

The file format is in `docs/REDLINE-FORMAT.md`. The CadCraft side (reading the package, accepting or rejecting each item, revision clouds and the log) is built separately.
