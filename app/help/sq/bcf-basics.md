---
title: Bazat e BCF
summary: Çfarë përmban një eksport BCF nga MarkupCraft, si përdoret me mjetet e koordinimit BIM dhe kufizimet e tij.
keywords: bcf, bcfzip, formati i bashkëpunimit BIM, çështje, koordinim, përplasje, tema, pikëpamje, foto, openbim, buildingsmart, eksporto çështjet
from: 0de26175
---

BCF (BIM Collaboration Format) është një format i hapur skedari për kalimin e çështjeve mes mjeteve BIM. Shumë programe koordinimi dhe hartimi të modelit mund të importojnë një skedar `.bcfzip` si listë çështjesh. MarkupCraft shkruan **BCF 2.1**.

## Krijo një

1. Hap skedën {{ui:Shënimet}}.
2. Filtro listën sipas asaj që dëshiron të dërgosh, për shembull {{ui:Gjendja}} "Hapur". Eksportohen vetëm shënimet e listuara.
3. Zgjidh {{ui:BCF}}.
4. Prit ndërsa bëhet një foto e çdo shënimi ("Po bëhen fotot për BCF (5 nga 20)…").

Rezultati: "<name> markups.bcfzip" shkarkohet, dhe shiriti i gjendjes tregon sa tema përmban dhe madhësinë e skedarit.

## Çfarë ka brenda

Çdo shënim bëhet një **temë**:

| Fusha e temës | Plotësohet me |
|---|---|
| Titulli | Numri i gabimit, subjekti dhe fleta, për shembull "#4 Re mbi A-101 — Planimetria e katit" |
| Lloji | Lloji i shënimit (Re, Thirrje, Gjatësi…) |
| Gjendja | Hapur, Pranuar, Refuzuar ose Përfunduar |
| Etiketat | Lloji i shënimit dhe fleta |
| Autori dhe datat | Autori i shënimit, datat e krijimit dhe të ndryshimit |
| I caktuar te, data e afatit | Nga pika e tij e listës së gabimeve, kur ka një të tillë |
| Përshkrimi | Teksti ose shkrimi i vulës, vlera e matur, komenti, dhe fleta dhe skedari |
| Komentet | Një për çdo përgjigje, me autorin dhe datën |
| Foto | Një imazh i shënimit në pjesën e tij të fletës |
| Pikëpamja | Një pamje nga lart e vendit të shënimit në fletë |

Eksportimi i të njëjtit shënim përsëri jep të njëjtin ID të temës, kështu që një mjet që importon BCF mund ta njohë si të njëjtën çështje.

## Çfarë kthehet kur importon

{{ui:Importo BCF}} lexon skedarët BCF 2.0, 2.1 dhe 3.0 (u kontrollua në 19 skedarët zyrtarë testues buildingSMART 3.0: çdo temë u lexua, dhe komentet e tre prej tyre që kanë tekst). Për një temë që është e juaja (me të njëjtin ID të temës), shton komentet e reja si përgjigje dhe merr gjendjen e re. Çdo temë tjetër bëhet një shënim në fletën që emërton etiketa ose emri i skedarit të saj, përndryshe në fletën e hapur, me titullin, përshkrimin, personin e caktuar dhe datën e afatit si tekst të shënimit, dhe komentet e saj si përgjigje.

| Në temën BCF | Në MarkupCraft |
|---|---|
| Titulli, përshkrimi, personi i caktuar, data e afatit | Teksti i shënimit |
| Komentet me tekst | Përgjigje |
| Gjendja Open, Accepted, Rejected, Completed (Closed, Resolved, Done numërohen si Completed) | Gjendja e shënimit |
| Autori dhe data e krijimit | Autori dhe data e shënimit |
| Pozicioni i kamerës | Një vend në fletë, vetëm për një temë të lidhur me një fletë sipas etiketës ose emrit të skedarit |
| Përzgjedhja e modelit, pjesët e fshehura, planet e prerjes, fotot | Nuk ruhen: një fletë nuk ka model ku t'i shfaqë |

## Kufizime që duhen ditur

- **Një fletë nuk është model.** Pikëpamja tregon pozicionin e shënimit në letër, e matur në metra letre. Nuk e çon një mjet BIM në një vend të modelit. Përdor fotën dhe emrin e fletës për të gjetur vendin.
- **Gjendjet dhe llojet janë të MarkupCraft** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Skedari i shpall ato, siç lejon BCF, por një mjet me listat e veta fikse mund t'i përshtatë ose t'i injorojë.
- **Importi sjell komente, jo pamje modeli.** {{ui:Importo BCF}} shton përgjigje dhe gjendje te shënimet që keni eksportuar, dhe bën shënime nga çështjet e tjera; nuk mund të shfaqë një kamerë modeli. Shih [Lista e shënimeve dhe eksporti](topic:markups-list-and-export#import-bcf).
- Dërgimi i shënimeve përsëri si PDF shpesh është më i thjeshtë për rishikimet e vizatimeve. BCF është për t'i sjellë komentet e vizatimit në një rrjedhë pune për koordinimin e modelit.
