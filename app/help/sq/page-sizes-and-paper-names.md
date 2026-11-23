---
title: Madhësitë e faqeve dhe emrat e letrës
summary: Shiko madhësinë e secilës faqe PDF në milimetra dhe inç dhe emrin e saj të letrës (seritë A, B dhe C, ANSI, ARCH), dhe grupo një set të përzier sipas madhësisë për të gjetur faqet e çuditshme.
keywords: madhësia e faqes, madhësia e letrës, emri i letrës, a0, a1, a2, a3, a4, seria b, seria c, ansi, arch, arkitekturore, mm, inç, madhësi e personalizuar, sipas madhësisë, madhësi e çuditshme, set i përzier, kontrollo pdf, klient, çështje, mediabox, cropbox, rrotullim
from: 08e1354f
---

Para se një set të shkojë te klienti, kontrollo që çdo fletë të jetë madhësia që duhet. {{ui:MarkupCraft}} lexon madhësinë e çdo faqeje nga vetë PDF-ja dhe emëron letrën.

## Çfarë do të bësh

Shiko madhësinë e një fletë, pastaj grupo të gjithë setin sipas madhësisë.

## Hapat

1. Hap PDF-të ({{ui:Hap}}), pastaj shtyp {{key:Esc}} derisa të mos jetë zgjedhur asgjë dhe {{ui:Përzgjidh}} të jetë aktiv.
2. Shiko {{ui:Vetitë}}. {{ui:Letra}} tregon emrin dhe drejtimin, për shembull "A4, vertikal". {{ui:Madhësia}} jep milimetra dhe inç.
3. Çdo rresht i listës {{ui:Fletët}} ka një rresht madhësie nën emrin e fletës.
4. Zgjidh {{ui:Sipas madhësisë}} te koka e {{ui:Fletët}}. Lista i grupon fletët nën një titull për çdo madhësi, grupi më i madh i pari. Një madhësi me vetëm disa fletë shënohet si e çuditshme.
5. Zgjidh {{ui:Sipas madhësisë}} përsëri për t'u kthyer te renditja e vetë setit.

Rezultati: një faqe me madhësi të ndryshme nga pjesa tjetër duket lehtë para se ta dërgosh setin.

## Si zgjidhet emri

- Madhësia vjen nga kutia e faqes në PDF me rrotullimin e aplikuar, kështu që një A3 horizontal mbetet A3.
- Emrat janë seritë A dhe B (ISO 216), seria C (ISO 269), ANSI A deri E dhe ARCH A deri E.
- Një faqe brenda 2 mm nga një madhësi e emëruar merr atë emër. Çdo faqe tjetër shfaq {{ui:të personalizuar}}, dhe {{ui:Madhësia e emëruar më e afërt}} tregon cila madhësi është më e afërt dhe sa larg është.
- Inçët vijnë nga madhësia reale e faqes, kështu që një faqe A4 është 8.26 me 11.69 in.

## Në skedarët që ruan

Libri i përmbledhjes ({{ui:Lista e shënimeve}}, pastaj fletë llogaritëse) ka një kolonë {{ui:Madhësia e letrës}} te fleta {{ui:Sipas fletës}} dhe një fletë pune {{ui:Madhësitë e faqeve}}. Raporti PDF ka një rresht "Madhësitë e faqeve" me numrin e çdo madhësie.

:::note
Vlerat e inçëve ANSI dhe ARCH u shkruan nga tabelat e publikuara dhe nuk janë krahasuar me standardet e shtypura. Për një faqe "të personalizuar" që është afër një prej tyre, bëj kontrollin tënd.
:::
