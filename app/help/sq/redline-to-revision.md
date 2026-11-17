---
title: Dërgo markimet te hartuesi si redline
summary: Shkruaj markimet e hapura si skedar redline për atë që vizaton ndryshimet, pastaj ngarko përgjigjet e tyre që çdo markim të shfaqë Pranuar ose Refuzuar.
keywords: redline, revizion, hartues, pranim, refuzim, përgjigje, cc-redline, re e revizionit, zbato markimet
from: cb099d04
---

Shqyrtimi është gjysma e punës; vizatimi duhet ende të ndryshojë. Skedari redline e çon çdo markim të hapur te hartuesi, dhe përgjigjet e hartuesit e kthejnë rezultatin mbrapsht.

## Dërgo

1. Hap skedën {{ui:Detyrat}} dhe hap {{ui:Redline në revizion}}.
2. Shkruaj revizionin me të cilin lidhen markimet (për shembull B).
3. Zgjidh {{ui:Eksporto skedarin redline}}.

Ti merr një skedar `.redline.json` me një element për çdo markim Hapur: fletën e tij, ku ndodhet (si pjesë të fletës, që një ri-printim në madhësi tjetër të mbetet në vend, dhe në pikë), tekstin e tij, autorin dhe fijen, dhe detyrën e tij nëse ka. Komentet vetëm për lexim nga programe të tjera, imazhet dhe legjendat lihen jashtë.

## Përgjigjet

Ana e hartimit i përgjigjet çdo elementi me Pranuar, Refuzuar ose Kryer, me një shënim, në një skedar `.redline-answers.json`. Zgjidh {{ui:Ngarko skedarin e përgjigjeve…}} dhe përzgjidhe: çdo markim merr atë gjendje dhe shënimin e hartuesit në fijen e vet, dhe një detyrë, markimi i së cilës u pranua ose u krye, përfundon. Një hap zhbërjeje i kthen të gjitha përgjigjet mbrapsht.

Formati i skedarit është në `docs/REDLINE-FORMAT.md`. Pjesa e CadCraft (lexon paketën, pranon ose refuzon çdo element, retë e revizionit dhe regjistri) ndërtohet veças.
