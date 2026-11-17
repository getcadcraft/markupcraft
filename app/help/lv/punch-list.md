---
title: Izveidot defektu sarakstu
summary: Pārvērtiet atzīmes numurētos defektu vienumos ar atbildīgo, termiņu un statusu un eksportējiet sarakstu.
keywords: defektu saraksts, defekts, trūkumu saraksts, lauka problēmas, novērojums, piešķirt, atbildīgais, termiņš, nodošana, apskate, numurs
from: b98b38e6
---

Defekta vienums ir atzīme ar numuru, atbildīgo, termiņu un vienuma statusu. Numurs tiek zīmēts lapā blakus atzīmei, tāpēc izdrukātā lapa un saraksts sakrīt.

## Pievienot vienumus

1. Atzīmējiet katru problēmu lapās: mākoni, izsaukumu, piezīmi, jebko.
2. Atlasiet vienu vai vairākas no tām (skatiet [Atlasīt, pārvietot un mainīt atzīmes](topic:select-and-edit)).
3. Vai nu atveriet cilni {{ui:Defektu saraksts}} un izvēlieties {{ui:Pievienot atlasītos defektu sarakstam}}, vai sadaļā {{ui:Rekvizīti}} izvēlieties {{ui:Pievienot defektu sarakstam}}.

Rezultāts: katra atzīme saņem nākamo numuru (1, 2, 3…), lapu secībā un tad zīmēšanas secībā. Lapā parādās numurēta zīme, un statusa joslā rakstīts "Pievienoti 3 vienumi defektu sarakstam." Atzīmes, kurām jau ir numurs, un tikai lasāmi komentāri tiek izlaisti.

## Aizpildīt detaļas

Cilnē {{ui:Defektu saraksts}} katrs vienums rāda numuru, tematu, tekstu, lapu un statusu, ar trim laukiem zem tā. Tie paši lauki atrodas sadaļā {{ui:Rekvizīti}} "Defektu saraksts", kad atzīme ir atlasīta:

- {{ui:Atbildīgais}}: vārds vai amats, brīvā tekstā.
- {{ui:Termiņš}}: datums no datumu izvēlnes.
- {{ui:Vienuma statuss}}: Atvērts, Procesā, Gatavs pārskatīšanai vai Slēgts.

Noklikšķiniet uz vienuma virsraksta, lai pārietu uz tā lapu.

Vienuma statuss ir atsevišķs no atzīmes pārskatīšanas statusa (Atvērts, Pieņemts, Noraidīts, Pabeigts). Izmantojiet vienuma statusu darbam, bet pārskatīšanas statusu komentāram.

## Noņemt vienumu

Atlasiet atzīmi un sadaļā {{ui:Rekvizīti}} izvēlieties {{ui:Noņemt no defektu saraksta}}. Atzīme paliek; noņemts tiek tikai numurs. Kamēr kopa ir atvērta, numuri netiek izmantoti atkārtoti: nākamais vienums saņem nākamo jauno numuru, tāpēc tukšums nozīmē, ka vienums ir noņemts. Kad fails tiek atvērts vēlreiz, numerācija turpinās pēc augstākā tajā esošā numura.

## Eksportēt sarakstu

Izvēlieties {{ui:Eksportēt CSV}} cilnē {{ui:Defektu saraksts}}. Jūs iegūsiet "<nosaukums> punch list.csv" ar kolonnām No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author un Created, numuru secībā. Atveriet to jebkurā izklājlapā.

Defektu numuri, atbildīgie, termiņi un vienumu statusi tiek saglabāti arī atzīmētajā PDF, tāpēc tie atgriežas, kad to atverat vēlreiz. Citi PDF skatītāji numura zīmi rāda kā atzīmes daļu. BCF eksportā no atzīmju saraksta ir arī atbildīgais un termiņš (skatiet [BCF pamati](topic:bcf-basics)).

## Lauka darbs ar planšetdatoru

Atveriet kopu iPad, apstaigājiet objektu un katrā problēmā nometiet {{ui:Piezīme}} vai zīmējiet {{ui:Mākonis}}. Pievienojiet tos defektu sarakstam, kamēr ejat, un saglabājiet pirms aiziešanas. Skatiet [Pārskatīšana iPad vai skārienekrānā](topic:review-on-a-tablet).

Defektu saraksts kā formatēts PDF vai izklājlapas pārskats un vienumiem pievienotas fotogrāfijas vēl nav izveidoti.
