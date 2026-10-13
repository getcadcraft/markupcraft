---
title: BCF basics
summary: What a BCF export from MarkupCraft contains, how to use it with BIM coordination tools, and its limits.
section: reference
order: 50
keywords: bcf, bcfzip, bim collaboration format, issues, coordination, clash, topics, viewpoint, snapshot, openbim, buildingsmart, export issues
---

BCF (BIM Collaboration Format) is an open file format for passing issues between BIM tools. Many model coordination and authoring programs can import a `.bcfzip` file as a list of issues. MarkupCraft writes **BCF 2.1**.

## Make one

1. Open the {{ui:Markups}} tab.
2. Filter the list to what you want to send, for example {{ui:Status}} "Open". Only the listed markups are exported.
3. Choose {{ui:BCF}}.
4. Wait while it makes a snapshot of each markup ("Making snapshots for BCF (5 of 20)…").

Result: "<name> markups.bcfzip" downloads, and the status bar says how many topics it holds and the file size.

## What is in it

Each markup becomes one **topic**:

| Topic field | Filled with |
|---|---|
| Title | Punch number, subject and sheet, for example "#4 Cloud on A-101 — Floor plan" |
| Type | The markup kind (Cloud, Callout, Length…) |
| Status | Open, Accepted, Rejected or Completed |
| Labels | The markup kind and the sheet |
| Author and dates | The markup's author, created and modified dates |
| Assigned to, due date | From its punch item, when it has one |
| Description | Its text or stamp wording, measured value, comment, and the sheet and file |
| Comments | One per reply, with author and date |
| Snapshot | A picture of the markup on its part of the sheet |
| Viewpoint | A top-down view of the markup's place on the sheet |

Exporting the same markup again gives the same topic ID, so a tool that imports BCF can recognize it as the same issue.

## Limits to know

- **A sheet is not a model.** The viewpoint points at the markup's position on the paper, measured in meters of paper. It does not take a BIM tool to a place in the model. Use the snapshot and the sheet name to find the spot.
- **Statuses and types are MarkupCraft's own** (Open, Accepted, Rejected, Completed; Cloud, Callout…). The file declares them, as BCF allows, but a tool with fixed lists of its own may map or ignore them.
- **Importing brings comments, not model views.** {{ui:Import BCF}} adds replies and statuses to the markups you exported, and makes notes of other issues; it cannot show a model camera. See [Markups list and export](topic:markups-list-and-export#import-bcf).
- Sending markups back as a PDF is often simpler for drawing reviews. BCF is for getting drawing comments into a model coordination workflow.
