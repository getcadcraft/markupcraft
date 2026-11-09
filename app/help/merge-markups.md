---
title: Merge two people's edits of one PDF
summary: Let git, Fossil or Mercurial merge two marked-up copies of the same PDF markup by markup, notes included.
section: tasks
order: 75
keywords: merge, git, fossil, mercurial, version control, conflict, three-way, cadcraft merge, gitattributes, markups, notes, team, two copies
---

Two people mark up the same PDF in two copies. If they touched different markups, the copies can be merged by a program instead of by hand.

## What makes it work

Every markup MarkupCraft saves carries its own name (its id) inside the PDF, and the name never changes. The merge looks markups up by that name, not by their place in the file, because every program renumbers places when it saves. Notes and sealed private notes are matched the same way.

The sheets are never touched: both copies must have the same number of pages. If they differ, the merge keeps your copy as it is and says so, because adding or removing pages is a job for a person.

## Set it up

Git needs two lines once per repository:

```
# .gitattributes
*.pdf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Without git, run `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil and Mercurial take the same three files in their own merge-tool setting. The task file that rides with a drawing (`<name>.markups.json`, see [Markups that act](topic:markups-that-act)) merges the same way, as plain text.

## The rules

- A markup changed on one side only is taken. The same change on both sides is taken once.
- The same markup changed two ways is a **conflict**: your side stays and the report lists both. Open the result and fix that markup by hand.
- A markup added on either side is kept. One removed on one side and untouched on the other is removed. Removed on one side and changed on the other: removed, and reported.
- Layers, columns, records and notes follow the same rules.
- Sealed private notes are never opened: the blocks of both sides are kept as they are.

The merged file is a full rewrite of your copy, as MarkupCraft's own Save is. Nothing is uploaded; it all runs on your computer.
