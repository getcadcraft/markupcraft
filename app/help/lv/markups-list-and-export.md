---
title: Atzīmju saraksts, filtri un eksports
summary: Skatiet katru kopas atzīmi, filtrējiet pēc lapas, autora, statusa un veida, pārejiet uz vienu no tām un eksportējiet sarakstu kā CSV vai BCF.
keywords: atzīmju saraksts, saraksts, kopsavilkums, xlsx, izklājlapas darbgrāmata, darbgrāmata, PDF atskaite, importēt BCF, filtrs, kārtot, atskaite, eksports, csv, izklājlapa, bcf, bcfzip, problēmas, komentāru saraksts, pāriet
from: 6c70261e
---

## Atvērt sarakstu

Izvēlieties cilni {{ui:Markups}} labajā pusē. Uzskaitīta ir katra atzīme katrā atvērtajā failā, lapu secībā un pēc tā, kā tās tika izveidotas. Katrā rindā redzams:

- ikona atzīmes krāsā, tās defekta numurs, ja tam ir ("#4"), un tās tēma,
- tās teksts, zīmoga formulējums vai izmērītā vērtība, un tās komentārs,
- lapa, autors un datums,
- tās statuss (vai "Tikai lasīšanai" komentāriem, kas nāca kopā ar failu), un atbilžu skaits, ja ir atbildes.

Virs saraksta rindas skaita tās: "38 atzīmes" vai "12 no 38 atzīmēm", ja saraksts ir filtrēts.

## Pāriet uz atzīmi

Noklikšķiniet uz rindas. MarkupCraft parāda šo lapu, atlasa atzīmi un tuvina to, ja tā ir ārpus ekrāna vai pārāk maza, lai to redzētu. {{ui:Properties}} sniedz tās informāciju un pavedienu, kad pārslēdzaties atpakaļ uz šo cilni.

## Filtrs

Četras izvēlnes virs saraksta. Tās apvienojas.

| Izvēlne | Izvēles |
|---|---|
| {{ui:Sheet}} | Visas lapas, Šī lapa (seko jums, kad maināt lapas), vai jebkura lapa, kurai ir atzīmes |
| {{ui:Author}} | Jebkurš vai katrs autors kopā |
| {{ui:Status}} | Jebkurš statuss, Atvērts, Pieņemts, Noraidīts, Pabeigts |
| {{ui:Type}} | Jebkurš veids vai katrs atzīmes veids kopā |

Piemēri:

- Kas vēl ir atvērts šajā lapā: {{ui:Sheet}} "Šī lapa", {{ui:Status}} "Atvērts".
- Viena konsultanta komentāri: {{ui:Author}} viņa vārds.
- Visi mērījumi: {{ui:Type}} "Garums" vai "Laukums".

Saraksts rāda līdz 2000 rindām; lielās kopās sašaurinājiet to ar filtru.

## Eksportēt uz CSV

Izvēlieties {{ui:CSV}} cilnes augšdaļā. Iegūsiet "<name> markups.csv" ar **atzīmēm tādas, kādas tās ir filtrētas**, pa vienai rindā, ar šīm kolonnām:

Defekta Nr., Lapa, Fails, Lappuse, Veids, Tēma, Teksts, Komentārs, Mērījums, Autors, Izveidots, Mainīts, Statuss, Atbildes, Pēdējā atbilde, Krāsa, Tikai lasīšanai.

- "Teksts" satur teksta lodziņu un izsaukumu vārdus, zīmoga formulējumu vai skaitīšanas grupas nosaukumu.
- "Mērījums" satur garumus, "laukums, perimetrs" laukumiem un "grupa: n" skaitīšanai.
- Datumi ir pilni laika zīmogi UTC laikā.

Lai eksportētu visu, vispirms iestatiet katru filtru atpakaļ uz pirmo izvēli.

## Legenda lapā

{{ui:Legend}} cilnē {{ui:Markups}} ievieto legendu redzamās lapas augšējā labajā stūrī: lodziņu, kurā uzskaitīts katrs lapā esošais atzīmes veids (pēc tēmas un krāsas, piemēram, "Mākonis", "Jautājums" vai "Kontaktligzdas") un to skaits. Skaitīšanas grupa skaita savas atzīmes. Legenda turpina skaitīt, kamēr zīmējat, pārvietojat vai dzēšat atzīmes, un tā tiek izdrukāta un saglabāta ar tā brīža skaitiem.

Pārvietojiet un mainiet tās izmēru kā jebkuru atzīmi. Tās {{ui:Properties}} sadaļā mainiet {{ui:Title}} vai iestatiet {{ui:Counts}} uz {{ui:The whole set}}, lai skaitītu visas lapas. Atstarpes, citas legendas un citu programmu komentāri netiek skaitīti.

## Jūsu kolonnas un kārtošana

{{ui:Columns}} cilnē {{ui:Markups}} pievieno jūsu pašu kolonnas katrai atzīmei: **tekstu**, **izvēli** (piemēram, Nozare: Mehāniskā, Elektriskā, Santehnika), **skaitli** (piemēram, Izmaksas) vai **datumu**. Katrai dodiet nosaukumu, izvēlieties tās veidu, izvēles kolonnai uzskaitiet izvēles vērtības un izvēlieties {{ui:Save columns}}.

- Aizpildiet tās sadaļā {{ui:Properties}}: katrai kolonnai tur ir lauks. Skaitļu kolonnā ieraksta tikai skaitļus, bet datumu kolonnā — datumu.
- Sarakstā zem katras atzīmes redzamas vērtības. {{ui:Column}} filtrs izvēlas vienu vērtību (vai atzīmes, kurās tā ir tukša), un {{ui:Sort}} sakārto sarakstu pēc kolonnas, autora, statusa, veida vai datuma, nevis pēc lapas.
- CSV un XLSX eksporti pēc parastajām kolonnām satur arī jūsu kolonnas. Kolonnas tiek saglabātas kopā ar PDF un atgriežas, kad to atverat atkal.

## Izveidot kopsavilkumu: darbgrāmata vai PDF

- {{ui:XLSX}} lejupielādē "<name> markup summary.xlsx" ar trim lapām: **Atzīmes** (viena rinda katrai uzskaitītajai atzīmei, tās pašas kolonnas kā CSV), **Pa lapām** (cik atzīmju ir katrai lapai, atvērtas un slēgtas, un cik katra veida, ar kopsummām) un **Defektu saraksts** (ja ir defektu vienības).
- {{ui:PDF}} lejupielādē "<name> markup summary.pdf": atskaiti drukāšanai vai nosūtīšanai ar kopas nosaukumu, datumu un uzskaitīto atzīmju tabulu (numurs, lapa, veids, tēma, teksts vai komentārs, izmērītā vērtība, autors, statuss un jaunākā atbilde). Garš teksts tiek pārnests rindās; tabulas galvene atkārtojas katrā lappusē.

Abi ņem sarakstu tādu, kāds tas ir filtrēts, tāpēc vispirms filtrējiet, lai atskaitītu vienu lapu, vienu autoru vai tikai atvērtās vienības.

## Eksportēt uz BCF

Izvēlieties {{ui:BCF}}. MarkupCraft izveido katras uzskaitītās atzīmes attēlu uz tās lapas ("Veido momentuzņēmumus BCF vajadzībām (3 no 12)…"), pēc tam lejupielādē "<name> markups.bcfzip". Katra atzīme kļūst par vienu BCF tēmu ar tās statusu, autoru, datumiem, atbildēm kā komentāriem, piešķirto personu un termiņu no tās defekta vienības, kā arī momentuzņēmumu.

Izmantojiet to, lai ievietotu rasējumu pārskatīšanas komentārus BIM koordinācijas rīkos, kas lasa BCF. Par to, kas tiek pārnests un kas ne, skatiet [BCF pamati](topic:bcf-basics).

## Importēt BCF

{{ui:Import BCF}} nolasa .bcfzip (vai .bcf) failu no BIM rīka:

- Problēmas, kas radušās no MarkupCraft BCF eksporta, atrod savas atzīmes: jaunas atbildes tiek pievienotas pavedienam, un tiek iestatīts jauns statuss (Closed skaitās kā Pabeigts). Jau esošās atbildes netiek pievienotas divreiz.
- Citas problēmas kļūst par piezīmēm ar savu nosaukumu, aprakstu, autoru un komentāriem. Piezīme tiek ievietota lapā, kuras numurs vai nosaukums ir norādīts problēmas etiķetēs; citādi atvērtajā lapā. BIM kamerai papīrā vietas nav, tāpēc šādas piezīmes tiek sakrautas lapas augšējā kreisajā stūrī, lai jūs tās pārvietotu.

Viss imports ir viens solis: {{key:Mod+Z}} to atsauc. Skatiet [BCF pamati](topic:bcf-basics).

## Ko saraksts vēl nedara

- Saraksta grupēšana (kārtojiet un tad filtrējiet).
- Vērtību rediģēšana sarakstā (rediģējiet sadaļā {{ui:Properties}}; defektu laukus var rediģēt cilnē {{ui:Punch list}}).
