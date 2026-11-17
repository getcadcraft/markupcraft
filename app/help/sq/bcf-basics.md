---
title: Bazat e BCF
summary: Çfarë përmban një eksport BCF nga MarkupCraft, si përdoret me veglat e koordinimit BIM dhe kufizimet e tij.
keywords: bcf, bcfzip, formati i bashkëpunimit BIM, çështje, koordinim, përplasje, tema, pikëvështrim, fotografi, openbim, buildingsmart, eksporto çështjet
from: 446f38c1
---

BCF (BIM Collaboration Format) është një format i hapur skedari për dërgimin e çështjeve ndërmjet veglave BIM. Shumë programe të koordinimit të modeleve dhe të hartimit mund ta importojnë një skedar `.bcfzip` si listë çështjesh. MarkupCraft shkruan **BCF 2.1**.

## Krijo një

1. Hap skedën {{ui:Shënimet}}.
2. Filtro listën me atë që dëshiron të dërgosh, për shembull {{ui:Gjendja}} "Hapur". Eksportohen vetëm shënimet e listuara.
3. Zgjidh {{ui:BCF}}.
4. Prit derisa të bëhet një fotografi për çdo shënim ("Po bëhen fotografitë për BCF (5 nga 20)…").

Rezultati: skedari "<name> markups.bcfzip" shkarkohet, dhe shiriti i gjendjes tregon sa tema përmban dhe madhësinë e skedarit.

## Çfarë ka brenda

Çdo shënim bëhet një **temë**:

| Fusha e temës | Plotësohet me |
|---|---|
| Titulli | Numri i defektit, lënda dhe fleta, për shembull "#4 Re mbi A-101 — Planimetri" |
| Lloji | Lloji i shënimit (Re, Thirrje, Gjatësi…) |
| Gjendja | Hapur, Pranuar, Refuzuar ose Përfunduar |
| Etiketat | Lloji i shënimit dhe fleta |
| Autori dhe datat | Autori i shënimit, datat e krijimit dhe të ndryshimit |
| Caktuar për, afati | Nga artikulli i defektit, kur ka një të tillë |
| Përshkrimi | Teksti ose fjala e vulës, vlera e matur, komenti, dhe fleta dhe skedari |
| Komentet | Një për çdo përgjigje, me autorin dhe datën |
| Fotografia | Një imazh i shënimit në pjesën e vet të fletës |
| Pikëvështrimi | Një pamje nga lart e vendit të shënimit në fletë |

Eksportimi i të njëjtit shënim përsëri jep të njëjtin ID teme, kështu që një vegël që importon BCF mund ta njohë si të njëjtën çështje.

## Kufizime që duhet të dish

- **Një fletë nuk është model.** Pikëvështrimi tregon vendin e shënimit mbi letër, të matur në metra letre. Nuk e çon veglën BIM te një vend në model. Përdor fotografinë dhe emrin e fletës për të gjetur vendin.
- **Gjendjet dhe llojet janë të MarkupCraft.** (Hapur, Pranuar, Refuzuar, Përfunduar; Re, Thirrje…) Skedari i deklaron ato, siç lejon BCF, por një vegël me listat e veta fikse mund t'i përkthejë ose t'i injorojë.
- **Importimi sjell komente, jo pamje modeli.** {{ui:Importo BCF}} shton përgjigje dhe gjendje te shënimet që eksportove, dhe bën shënime për çështje të tjera; nuk mund të shfaqë një kamerë modeli. Shih [Lista e shënimeve dhe eksporti](topic:markups-list-and-export#import-bcf).
- Kthimi i shënimeve si PDF shpesh është më i thjeshtë për rishikimet e vizatimeve. BCF është për të sjellë komentet e vizatimit në një rrjedhë koordinimi modeli.
