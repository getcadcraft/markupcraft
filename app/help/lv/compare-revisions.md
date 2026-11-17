---
title: Salīdzināt divas redakcijas
summary: Pārklājiet vecu un jaunu lapas izdevumu divās krāsās, izlīdziniet tos pēc diviem punktiem un apvelciet ar mākoni to, kas mainījies.
keywords: salīdzināt, pārklājums, pārklāt lappuses, redakcija, diff, atšķirības, izmaiņas, vecs jauns, izlīdzināt, backcheck, izdevums, biļetens
from: 62f5d1c5
---

Salīdzināšana uzliek divas lapas viena uz otras. Līnijas, kas ir tikai vecajā lapā, rādās sarkanas, līnijas, kas ir tikai jaunajā lapā, — zilas, un līnijas, kas ir abās, — pieklusinātā pelēkā. Krāsas ir nosauktas leģendā zem lapas: "Tikai vecajā lapā", "Tikai jaunajā lapā", "Abās".

## Salīdzināt divas lapas

1. Atveriet abus izdevumus. Tie var būt viena PDF lappuses vai dažādu PDF lappuses; atveriet tos kopā kā vienu komplektu (skat. [Darbs ar vairākiem failiem vienlaikus](topic:several-files)).
2. Izvēlieties cilni {{ui:Salīdzināt}} labajā pusē.
3. Izvēlieties {{ui:Vecā lapa}} un {{ui:Jaunā lapa}}. Jaunā lapa sākumā ir tā, kurā atrodaties. Kad atvērti vairāki faili, katras lapas faila nosaukums rādīts aiz tās nosaukuma.
4. Izvēlieties {{ui:Salīdzināt}}.

Rezultāts: MarkupCraft rāda jauno lapu ar iejaukto veco, parādās leģenda, un cilnē ir teksts "Comparing <old> (old) with <new> (new). Markups on the new sheet stay editable." (Salīdzina <old> (vecā) ar <new> (jauno). Jaunās lapas atzīmes paliek rediģējamas.)

## Pārslēgt starp veco un jauno

Velciet slīdni {{ui:Vecā un jaunā}}. Līdz galam pa kreisi rāda tikai veco lapu, līdz galam pa labi — tikai jauno, vidū abas. Pārvietot slīdni šurpu un turpu bieži ir ātrākais veids, kā redzēt nelielu izmaiņu.

## Izlīdzināt lapas

Ja abi izdevumi ir izdrukāti ar atšķirīgu malu, izmēru vai pagriezienu, viss izskatās mainīts. Labojiet to:

**Pēc diviem punktiem (labākais):**

1. Izvēlieties {{ui:Izlīdzināt pēc diviem punktiem}}. Skatā redzama tikai vecā lapa.
2. Noklikšķiniet asu elementu, ko var atrast abās lapās, piemēram, kolonnu režģa krustpunktu. Cilne skaita soļus ("1 of 4").
3. Noklikšķiniet otru elementu, tālu no pirmā, piemēram, pretējo režģa stūri.
4. Skats pārslēdzas uz jauno lapu. Noklikšķiniet pirmo elementu vēlreiz.
5. Noklikšķiniet otro elementu vēlreiz.

Rezultāts: "Izlīdzināts: vecā lapa mērogota 100.00%, pagriezta 0.00°. Precizējiet ar bīdīšanu." Vecā lapa tiek pārvietota, mērogota un pagriezta, lai atbilstu. {{key:Esc}} atceļ, kamēr izvēlaties. Lai precīzāk piemērotu, palieliniet katru elementu, pirms noklikšķināt.

**Ar bīdīšanu:** izmantojiet četras bultiņu pogas zem "Izlīdzināt", lai pārvietotu veco lapu. Izvēlieties soli (0.25, 1, 5 vai 20 pt; 72 pt ir viena colla uz papīra). Cilne rāda, cik tālu tā pārvietota.

{{ui:Atiestatīt}} noņem izlīdzināšanu un bīdīšanas.

## Tikai mainītās līnijas

Zem izlīdzināšanas pogām izvēlieties {{ui:Mainītās līnijas}} {{ui:Attēla pārklājums}} vietā. MarkupCraft tad salīdzina abu lapu pašas līnijas, nevis to attēlus: jaunā lapa rādās tāda, kāda tā ir, ar līnijām, kas ir tikai vecajā lapā, sarkanām, un tikai jaunajā — zilām. Līnija, kas tikai saīsinājās, rāda tikai trūkstošo daļu. Vispirms izlīdziniet lapas (skat. iepriekš): salīdzināšana izmanto izlīdzināšanu, tāpēc lapa, kas tikai nobīdīta, neuzrāda izmaiņas. Statusa rindā rādīts, cik daudz mainījies.

Tas darbojas PDF failiem, kas izdrukāti no CAD, kur rasējums sastāv no līnijām. Skenētām lapām nav līniju, ko salīdzināt: tām izmantojiet attēla pārklājumu. Fontā rakstīts teksts (nevis zīmēts ar līnijām) netiek salīdzināts.

## Atzīmēt izmaiņas

Salīdzinot, jūs atrodaties jaunajā lapā, un katrs rīks darbojas. Zīmējiet mākoņus ap izmaiņām, kad tās atrodat; tie pieder jaunajai lapai un paliek arī pēc salīdzināšanas pārtraukšanas.

{{ui:Apvilkt izmaiņas ar mākoni}} to dara jūsu vietā: tas grupē mainītās līnijas, kas atrodas tuvu viena otrai, un zīmē revīzijas mākoni ap katru grupu jaunajā lapā ar komentāru "Changed since <old sheet>" (Mainīts kopš <old sheet>). Viens {{key:Mod+Z}} tos visus noņem; dzēsiet tos, kas nav vajadzīgi.

## Salīdzināt visu komplektu

Kad jaunais izdevums ir atsevišķs PDF, atveriet abus PDF un atveriet {{ui:Salīdzināt divus komplektus}} cilnē {{ui:Salīdzināt}}. Izvēlieties veco un jauno failu, tad izvēlieties {{ui:Salīdzināt komplektus}}. Lapas tiek savienotas pēc to numura (kā [lapu aizstāšanā](topic:slip-sheet-a-revised-set)), salīdzinātas pēc līnijām un uzskaitītas, sākot ar visvairāk mainītajām. Izvēlieties lapu sarakstā, lai salīdzinātu šo pāri ar {{ui:Mainītās līnijas}}.

{{ui:Apvilkt visas izmaiņas ar mākoni}} apvelk ar mākoni katru mainīto līniju grupu katrā mainītajā lapā vienā solī, ko var atsaukt. Komplekta salīdzināšana nesavieno lapas pirms tam, tāpēc lapa, kas uz papīra bija nobīdīta, tiks rādīta kā mainīta: salīdziniet šo pāri atsevišķi un izmantojiet {{ui:Izlīdzināt pēc diviem punktiem}}.

## Pārtraukt salīdzināt

Izvēlieties {{ui:Beigt salīdzināt}} vai dodieties uz citu lapu. Izlīdzināšana tiek atcerēta tam pašam lapu pārim līdz komplekta aizvēršanai.

## Labi zināt

- Salīdzināšana darbojas ar to, kas ir zīmēts, pikseļu pa pikselim. Tā nezina, ka līnija pārvietojusies; tā rāda veco pozīciju vienā krāsā un jauno otrā.
- Teksts, kas pārplūdis, izmainīts titula bloka datums vai cits drukas stils arī parādās kā izmaiņas.
- Skenēta lapa, salīdzināta ar izdrukātu, ir traucēta: skenēšana izplūdina un nobīda līnijas.
- Fontā rakstīta teksta salīdzināšana un izmaiņu saraksts vēl nav izveidoti.
