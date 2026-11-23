---
title: BCF-i põhitõed
summary: Mida MarkupCraftist tehtud BCF-eksport sisaldab, kuidas seda kasutada BIM-koordineerimise tööriistades ja mis on selle piirangud.
keywords: bcf, bcfzip, bim-i koostöövorming, probleemid, koordineerimine, kokkupõrge, teemad, vaatepunkt, hetktõmmis, openbim, buildingsmart, eksporditud probleemid
from: 0de26175
---

BCF (BIM Collaboration Format) on avatud failivorming probleemide edastamiseks BIM-tööriistade vahel. Paljud mudelite koordineerimise ja modelleerimise programmid oskavad importida `.bcfzip` faili probleemide loendina. MarkupCraft kirjutab **BCF 2.1**.

## Loo üks fail

1. Ava vahekaart {{ui:Märgistused}}.
2. Filtreeri loend selle järgi, mida soovid saata, näiteks {{ui:Staatus}} „Avatud“. Eksporditakse ainult loendis olevad märgistused.
3. Vali {{ui:BCF}}.
4. Oota, kuni tehakse iga märgistuse hetktõmmis („Tehakse BCF-i jaoks hetktõmmiseid (5 of 20)…“).

Tulemus: fail „<name> markups.bcfzip“ laaditakse alla ja olekuribal on näha, mitu teemat see sisaldab ning faili suurus.

## Mis selles on

Iga märgistus muutub üheks **teemaks**.

| Teema väli | Täidetakse |
|---|---|
| Pealkiri | Punkti number, teema ja leht, näiteks „#4 Pilv lehel A-101 — Põrandaplaan“ |
| Tüüp | Märgistuse liik (Pilv, Viide, Pikkus…) |
| Staatus | Avatud, Aktsepteeritud, Tagasi lükatud või Lõpetatud |
| Sildid | Märgistuse liik ja leht |
| Autor ja kuupäevad | Märgistuse autor, loomise ja muutmise kuupäevad |
| Määratud, tähtaeg | Punktist, kui sellel on |
| Kirjeldus | Märgistuse tekst või templi sõnastus, mõõdetud väärtus, kommentaar ning leht ja fail |
| Kommentaarid | Üks iga vastuse kohta, koos autori ja kuupäevaga |
| Hetktõmmis | Pilt märgistusest lehe osas |
| Vaatepunkt | Ülevaade märgistuse asukohast lehel ülalt vaates |

Sama märgistuse uuesti eksportimine annab sama teema ID, nii et BCF-i importiv tööriist tunneb selle ära kui sama probleemi.

## Mis tuleb importimisel sisse

{{ui:Impordi BCF}} loeb BCF 2.0, 2.1 ja 3.0 faile (kontrolliti 19 ametliku buildingSMART 3.0 testfaili peal: iga teema loeti ja kolme teksti sisaldava teema kommentaarid). Teema, mis on sinu oma (sama teema ID), lisab uued kommentaarid vastustena ja võtab üle uue staatuse. Iga muu teema muutub märkmeks sellel lehel, mida tema silt või failinimi nimetab, muidu avatud lehel; pealkiri, kirjeldus, määratud isik ja tähtaeg on märkme tekstiks ning kommentaarid vastusteks.

| BCF-i teemas | MarkupCraftis |
|---|---|
| Pealkiri, kirjeldus, määratud isik, tähtaeg | Märkme tekst |
| Tekstiga kommentaarid | Vastused |
| Staatus Open, Accepted, Rejected, Completed (Closed, Resolved, Done loetakse Completed’ks) | Märgistuse staatus |
| Autor ja loomise kuupäev | Märkme autor ja kuupäev |
| Kaamera asend | Koht lehel, ainult teemale, mis on seotud lehega sildi või failinimega |
| Mudeli valik, peidetud osad, lõikepinnad, hetktõmmised | Ei säilitata: lehel pole mudelit, kus neid näidata |

## Piirangud, mida tuleb teada

- **Leht ei ole mudel.** Vaatepunkt osutab märgistuse asukohale paberil, mõõdetuna paberi meetrites. See ei vii BIM-tööriista mudelis kohta. Koha leidmiseks kasuta hetktõmmist ja lehe nime.
- **Staatused ja tüübid on MarkupCraftile omased** (Avatud, Aktsepteeritud, Tagasi lükatud, Lõpetatud; Pilv, Viide…). Fail deklareerib need, nagu BCF lubab, aga tööriist, millel on oma kindlad loendid, võib need ümber kaardistada või ignoreerida.
- **Import toob kommentaarid, mitte mudelivaateid.** {{ui:Impordi BCF}} lisab vastused ja staatused märgistustele, mille sa eksportisid, ning teeb teistest probleemidest märkmeid; mudeli kaamerat see näidata ei saa. Vaata [Märgistuste loend ja eksport](topic:markups-list-and-export#import-bcf).
- Joonisevaatuste puhul on märgistuste saatmine PDF-ina sageli lihtsam. BCF on mõeldud joonise kommentaaride viimiseks mudeli koordineerimise töövoogu.
