---
title: Ipadala ang mga markup sa drafter bilang redline
summary: Isulat ang mga bukas na markup bilang redline file para sa gumuguhit ng mga pagbabago, saka i-load ang mga sagot nila para ipakita ang Accepted o Rejected sa bawat markup.
keywords: redline, revision, drafter, tanggapin, tanggihan, sagot, answers, cc-redline, revision cloud, ilapat ang markup
from: cb099d04
---

Kalahati lang ng trabaho ang pag-review; kailangan pa ring baguhin ang drawing. Dinadala ng redline file ang bawat bukas na markup sa drafter, at ibinabalik ng mga sagot ng drafter ang resulta.

## Ipadala

1. Buksan ang tab na {{ui:Tasks}} at buksan ang {{ui:Redline to revision}}.
2. I-type ang revision na kinaroroonan ng mga markup (halimbawa B).
3. Piliin ang {{ui:Export redline file}}.

Makakakuha ka ng `.redline.json` na file na may isang item bawat Open na markup: ang sheet nito, kung nasaan ito (bilang bahagi ng sheet, para tumugma pa rin kapag na-plot muli sa ibang laki, at sa points), ang mga salita nito, may-akda at thread, at ang task nito kung mayroon. Hindi kasama ang mga read-only na komento mula sa ibang program, larawan at legend.

## Mga sagot

Sinasagot ng drafting side ang bawat item bilang Accepted, Rejected o Done, kasama ang note, sa isang `.redline-answers.json` na file. Piliin ang {{ui:Load answers file…}} at piliin ito: makakakuha ang bawat markup ng status na iyon at ang note ng drafter sa thread nito, at natatapos ang task na ang markup ay tinanggap o tapos na. Isang undo step ang nagbabawi sa lahat ng sagot.

Ang format ng file ay nasa `docs/REDLINE-FORMAT.md`. Hiwalay na binubuo ang panig ng CadCraft (pagbasa ng package, pagtanggap o pagtanggi sa bawat item, revision cloud at log).
