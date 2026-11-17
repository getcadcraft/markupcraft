---
title: BCF-i põhitõed
summary: Mida sisaldab MarkupCraftist tehtud BCF-eksport, kuidas seda kasutada BIM-koordineerimise tööriistades ning millised on selle piirangud.
keywords: bcf, bcfzip, BIM-koostöövorming, probleemid, koordineerimine, kokkupõrge, teemad, vaatepunkt, hetktõmmis, openbim, buildingsmart, probleemide eksportimine
from: 446f38c1
---

BCF (BIM Collaboration Format) on avatud failivorming probleemide edastamiseks BIM-tööriistade vahel. Paljud mudelite koordineerimise ja koostamise programmid saavad importida faili `.bcfzip` probleemide loendina. MarkupCraft kirjutab **BCF 2.1** formaadis.

## Koosta eksport

1. Ava {{ui:Märgistused}} vahekaart.
2. Filtreeri loend soovitud märgistusteni, näiteks {{ui:Staatus}} „Avatud”. Eksporditakse ainult loendis olevad märgistused.
3. Vali {{ui:BCF}}.
4. Oota, kuni tehakse iga märgistuse hetktõmmis („Tehakse BCF-i hetktõmmiseid (5/20)…”).

Tulemus: „<name> markups.bcfzip” laaditakse alla ja olekuribal on näha, mitu teemat failis on ning faili suurus.

## Mis selles on

Iga märgistus muutub üheks **teemaks**:

| Teema väli | Täidetakse |
|---|---|
| Pealkiri | Punkti number, teema ja leht, näiteks „#4 Pilv lehel A-101 — Põrandaplaan” |
| Tüüp | Märgistuse liik (Pilv, Selgitussilt, Pikkus…) |
| Staatus | Avatud, Aktsepteeritud, Tagasi lükatud või Lõpetatud |
| Sildid | Märgistuse liik ja leht |
| Autor ja kuupäevad | Märgistuse autor ning loomise ja muutmise kuupäev |
| Määratud isik, tähtaeg | Punktinimekirja kirjelt, kui sellel on see olemas |
| Kirjeldus | Selle tekst või templi sõnastus, mõõdetud väärtus, kommentaar ning leht ja fail |
| Kommentaarid | Üks iga vastuse kohta, autori ja kuupäevaga |
| Hetktõmmis | Pilt märgistusest selle kohal lehel |
| Vaatepunkt | Märgistuse koha ülevaade lehel ülevalt |

Sama märgistuse uuesti eksportimine annab sama teema ID-d, nii et BCF-i importiv tööriist saab selle ära tunda kui sama probleemi.

## Piirangud, mida tuleb teada

- **Leht ei ole mudel.** Vaatepunkt näitab märgistuse asukohta paberil, mõõdetuna paberi meetrites. See ei vii BIM-tööriista mudelis mingisse kohta. Koha leidmiseks kasuta hetktõmmist ja lehe nime.
- **Staatused ja tüübid on MarkupCraft'i omad** (Avatud, Aktsepteeritud, Tagasi lükatud, Lõpetatud; Pilv, Selgitussilt…). Fail deklareerib need, nagu BCF lubab, kuid tööriist, millel on oma kindlad loendid, võib need ümber kaardistada või ignoreerida.
- **Importimine toob kommentaare, mitte mudelivaateid.** {{ui:Impordi BCF}} lisab eksporditud märgistustele vastused ja staatused ning teeb märkmed teistest probleemidest; mudeli kaamerat see näidata ei saa. Vaata [Märgistuste loend ja eksport](topic:markups-list-and-export#import-bcf).
- Joonistuste ülevaatuse puhul on märgistuste saatmine PDF-ina sageli lihtsam. BCF sobib selleks, et joonise kommentaarid jõuaksid mudeli koordineerimise töövoogu.
