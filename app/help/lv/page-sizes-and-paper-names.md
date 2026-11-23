---
title: Lapu izmēri un papīra nosaukumi
summary: Apskatiet katras PDF lapas izmēru milimetros un collās un tās papīra nosaukumu (A, B un C sērija, ANSI, ARCH), un grupējiet jauktu komplektu pēc izmēra, lai atrastu neparastās lapas.
keywords: lapas izmērs, papīra izmērs, papīra nosaukums, a0, a1, a2, a3, a4, b sērija, c sērija, ansi, arch, arhitektūras, mm, collas, pielāgots izmērs, pēc izmēra, neparasts izmērs, jaukts komplekts, pārbaudīt pdf, klients, problēma, mediabox, cropbox, pagriezums
from: 08e1354f
---

Pirms komplekta nosūtīšanas klientam pārbaudiet, vai katrai lapai ir pareizais izmērs. {{ui:MarkupCraft}} nolasa katras lapas izmēru no pašas PDF un nosauc papīru.

## Ko jūs darīsiet

Apskatiet vienas lapas izmēru, tad grupējiet visu komplektu pēc izmēra.

## Soļi

1. Atveriet PDF failus ({{ui:Atvērt}}), tad nospiediet {{key:Esc}}, līdz nekas nav atlasīts un ir ieslēgts {{ui:Atlasīt}}.
2. Apskatiet {{ui:Rekvizīti}}. {{ui:Papīrs}} norāda nosaukumu un virzienu, piemēram, "A4, portrets". {{ui:Izmērs}} dod milimetrus un collas.
3. Katrai {{ui:Lapas}} saraksta rindai zem lapas nosaukuma ir izmēra rindiņa.
4. Izvēlieties {{ui:Pēc izmēra}} {{ui:Lapas}} galvenē. Saraksts sagrupē lapas zem vienas virsrakstrindas katram izmēram, lielākā grupa pirmā. Izmērs, kuram ir tikai dažas lapas, tiek atzīmēts kā neparasts.
5. Izvēlieties {{ui:Pēc izmēra}} vēlreiz, lai atgrieztos pie komplekta sākotnējās kārtības.

Rezultāts: lapu, kuras izmērs atšķiras no pārējām, ir viegli pamanīt, pirms nosūtāt komplektu.

## Kā tiek izvēlēts nosaukums

- Izmērs nāk no lapas kastes PDF failā ar pielietoto pagriezienu, tāpēc ainavas A3 joprojām ir A3.
- Nosaukumi ir A un B sērija (ISO 216), C sērija (ISO 269), ANSI no A līdz E un ARCH no A līdz E.
- Lapa, kas atrodas 2 mm robežās no nosaukta izmēra, saņem šo nosaukumu. Jebkura cita lapa norāda {{ui:pielāgots}}, un {{ui:Tuvākais nosauktais izmērs}} norāda, kurš izmērs ir tuvākais un cik tālu tas ir.
- Collas aprēķina no faktiskā lapas izmēra, tāpēc A4 lapa ir 8.26 uz 11.69 in.

## Saglabātajos failos

Kopsavilkuma darblapa ({{ui:Atzīmju saraksts}}, tad izklājlapa) satur kolonnu {{ui:Papīra izmērs}} lapā {{ui:Pa lapām}} un darblapu {{ui:Lapu izmēri}}. PDF pārskatā ir rinda "Lapu izmēri" ar katra izmēra skaitu.

:::note
ANSI un ARCH collu vērtības tika ierakstītas no publicētajām tabulām un nav salīdzinātas ar drukātajiem standartiem. Lapu "pielāgots", kas ir tuvu kādam no tiem, uzskatiet par jautājumu, kas jāpārbauda pašam.
:::
