---
title: BCF pamati
summary: Ko satur MarkupCraft BCF eksports, kā to lietot ar BIM koordinācijas rīkiem un kādi ir tā ierobežojumi.
keywords: bcf, bcfzip, BIM sadarbības formāts, problēmas, koordinācija, kolīzijas, tēmas, skata punkts, momentuzņēmums, openbim, buildingsmart, eksportēt problēmas
from: 0de26175
---

BCF (BIM Collaboration Format) ir atvērts failu formāts, ar ko problēmas tiek nodotas starp BIM rīkiem. Daudzas modeļu koordinācijas un autorēšanas programmas var importēt `.bcfzip` failu kā problēmu sarakstu. MarkupCraft raksta **BCF 2.1**.

## Izveidot vienu

1. Atveriet cilni {{ui:Atzīmes}}.
2. Filtrējiet sarakstu pēc tā, ko vēlaties nosūtīt, piemēram, {{ui:Statuss}} "Atvērts". Eksportētas tiek tikai uzskaitītās atzīmes.
3. Izvēlieties {{ui:BCF}}.
4. Pagaidiet, kamēr tiek veikts katras atzīmes momentuzņēmums ("Veido BCF momentuzņēmumus (5 no 20)…").

Rezultāts: lejupielādējas "<name> markups.bcfzip", un statusa joslā parādās, cik tēmu tajā ir un cik liels ir fails.

## Kas tajā ir

Katra atzīme kļūst par vienu **tēmu**:

| Tēmas lauks | Aizpilda ar |
|---|---|
| Nosaukums | Defekta numurs, tēma un lapa, piemēram, "#4 Mākonis uz A-101 — Stāva plāns" |
| Veids | Atzīmes veids (Mākonis, Norāde, Garums…) |
| Statuss | Atvērts, Pieņemts, Noraidīts vai Pabeigts |
| Etiķetes | Atzīmes veids un lapa |
| Autors un datumi | Atzīmes autors, izveidošanas un labošanas datumi |
| Piešķirts, termiņš | No tās defekta vienumas, ja tāds ir |
| Apraksts | Tās teksts vai zīmoga formulējums, izmērītā vērtība, komentārs, kā arī lapa un fails |
| Komentāri | Viens katrai atbildei, ar autoru un datumu |
| Momentuzņēmums | Atzīmes attēls tās vietā lapā |
| Skata punkts | Skats no augšas uz atzīmes vietu lapā |

Ja tā pati atzīme tiek eksportēta vēlreiz, tās tēmas ID paliek tas pats, tāpēc BCF importējošs rīks to var atpazīt kā to pašu problēmu.

## Ko atgriež importēšana

{{ui:Importēt BCF}} nolasa BCF 2.0, 2.1 un 3.0 failus (pārbaudīts ar 19 oficiālajiem buildingSMART 3.0 testa failiem: katra tēma nolasīta un trīs failos, kuriem ir teksts, nolasīti komentāri). Tēmai, kas ir jūsu (ar to pašu tēmas ID), tiek pievienoti jaunie komentāri kā atbildes un pārņemts jaunais statuss. Jebkura cita tēma kļūst par piezīmi uz lapas, ko nosaka tās etiķete vai faila nosaukums, vai citādi uz atvērtās lapas; tās nosaukums, apraksts, izpildītājs un termiņš kļūst par piezīmes tekstu, bet tās komentāri – par atbildēm.

| BCF tēmā | MarkupCraft |
|---|---|
| Nosaukums, apraksts, izpildītājs, termiņš | Piezīmes teksts |
| Komentāri ar tekstu | Atbildes |
| Statuss Open, Accepted, Rejected, Completed (Closed, Resolved, Done tiek skaitīti kā Completed) | Atzīmes statuss |
| Autors un izveidošanas datums | Piezīmes autors un datums |
| Kameras pozīcija | Vieta lapā, tikai tēmai, kas saistīta ar lapu pēc etiķetes vai faila nosaukuma |
| Modeļa atlase, paslēptās daļas, griezuma plaknes, momentuzņēmumi | Netiek saglabāti: lapai nav modeļa, kurā tos parādīt |

## Ierobežojumi, kas jāzina

- **Lapa nav modelis.** Skata punkts norāda atzīmes vietu uz papīra, mērot metros papīrā. Ar to BIM rīks neaizved uz vietu modelī. Lai atrastu vietu, izmantojiet momentuzņēmumu un lapas nosaukumu.
- **Statusi un veidi ir MarkupCraft paši.** (Atvērts, Pieņemts, Noraidīts, Pabeigts; Mākonis, Norāde…) Fails tos deklarē, kā to atļauj BCF, taču rīks ar savu fiksētu sarakstu var tos kartēt vai ignorēt.
- **Importēšana atgriež komentārus, nevis modeļa skatus.** {{ui:Importēt BCF}} pievieno atbildes un statusus jūsu eksportētajām atzīmēm un veido piezīmes par citām problēmām; tā nevar parādīt modeļa kameru. Skatiet [Atzīmju saraksts un eksportēšana](topic:markups-list-and-export#import-bcf).
- Atzīmju sūtīšana atpakaļ PDF formātā rasējumu pārskatīšanai bieži vien ir vienkāršāka. BCF paredzēts rasējumu komentāru nodošanai modeļu koordinācijas darbplūsmā.
