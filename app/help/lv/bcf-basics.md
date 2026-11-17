---
title: BCF pamati
summary: Kas ietilpst MarkupCraft BCF eksportā, kā to izmantot ar BIM koordinācijas rīkiem un kādi ir tā ierobežojumi.
keywords: bcf, bcfzip, BIM sadarbības formāts, problēmas, koordinācija, sadursme, tēmas, skats, momentuzņēmums, openbim, buildingsmart, eksportēt problēmas
from: 446f38c1
---

BCF (BIM sadarbības formāts) ir atvērts failu formāts problēmu nodošanai starp BIM rīkiem. Daudzas modeļu koordinācijas un izstrādes programmas var importēt `.bcfzip` failu kā problēmu sarakstu. MarkupCraft raksta **BCF 2.1**.

## Izveidot vienu

1. Atveriet cilni {{ui:Atzīmes}}.
2. Filtrējiet sarakstu pēc tā, ko vēlaties nosūtīt, piemēram, {{ui:Statuss}} "Atvērts". Eksportētas tiek tikai sarakstā redzamās atzīmes.
3. Izvēlieties {{ui:Importēt BCF}}. (Ja tāda poga nav, izvēlieties {{ui:BCF}}.)
4. Pagaidiet, kamēr tiek veidoti katras atzīmes momentuzņēmumi ("Notiek BCF momentuzņēmumu veidošana (5 no 20)…").

Rezultāts: lejupielādējas fails "<name> markups.bcfzip", un statusa joslā norādīts, cik tēmu tajā ir un cik liels ir fails.

## Kas tajā ir

Katra atzīme kļūst par vienu **tēmu**.

| Tēmas lauks | Aizpilda ar |
|---|---|
| Nosaukums | Defekta numurs, tēma un lapa, piemēram, "#4 Mākonis uz A-101 — Stāva plāns" |
| Veids | Atzīmes veids (Mākonis, Izsaukums, Garums…) |
| Statuss | Atvērts, Pieņemts, Noraidīts vai Pabeigts |
| Etiķetes | Atzīmes veids un lapa |
| Autors un datumi | Atzīmes autors, izveides un labošanas datumi |
| Piešķirts, izpildes termiņš | No tās defektu saraksta vienuma, ja tāds ir |
| Apraksts | Tās teksts vai zīmoga formulējums, izmērītā vērtība, komentārs, kā arī lapa un fails |
| Komentāri | Viens katrai atbildei, ar autoru un datumu |
| Momentuzņēmums | Attēls ar atzīmi tās vietā lapas daļā |
| Skats | Skats no augšas uz atzīmes vietu lapā |

Ja atzīmi eksportējat vēlreiz, tā saņem to pašu tēmas ID, tāpēc rīks, kas importē BCF, to var atpazīt kā to pašu problēmu.

## Ierobežojumi, kas jāzina

- **Lapa nav modelis.** Skats norāda atzīmes vietu uz papīra, mērot metros papīrā. Tas nenogādā BIM rīku modeļa konkrētā vietā. Lai atrastu vietu, izmantojiet momentuzņēmumu un lapas nosaukumu.
- **Statusi un veidi ir MarkupCraft paši.** (Atvērts, Pieņemts, Noraidīts, Pabeigts; Mākonis, Izsaukums…) Fails tos deklarē, kā to atļauj BCF, bet rīks ar saviem fiksētajiem sarakstiem var tos kartēt vai ignorēt.
- **Importējot tiek ievesti komentāri, nevis modeļa skati.** {{ui:Importēt BCF}} pievieno atbildes un statusus eksportētajām atzīmēm un izveido piezīmes citām problēmām; tas nevar parādīt modeļa kameru. Skat. [Atzīmju saraksts un eksports](topic:markups-list-and-export#import-bcf).
- Atzīmju nosūtīšana atpakaļ kā PDF rasējumu pārskatīšanai bieži ir vienkāršāka. BCF ir paredzēts, lai rasējumu komentāri nonāktu modeļu koordinācijas darbplūsmā.
