---
title: RFI, iesniegumu un dienas žurnālu izsekošana
summary: Pievienojiet lapām RFI, iesniegumus un dienas žurnālus ar numuriem, atbildīgajiem, termiņiem un pavedieniem; filtrējiet nokavētos; eksportējiet CSV vai BCF; strādājiet bezsaistē un apvienojiet kopijas.
keywords: rfi, informācijas pieprasījums, iesniegums, dienas žurnāls, lauka atskaite, būvlaukuma dienasgrāmata, būvniecība, nokavēts, termiņš, piešķirts man, pavediens, pielikums, apvienot, bezsaistē, planšete, bcf, csv, lauks
from: 95039c5a
---

Cilnē {{ui:Lauks}} blakus jūsu atzīmēm glabājas trīs ierakstu veidi. Katrs ir saistīts ar lapu; RFI vai iesniegumam ir arī tapa lapā tajā vietā, uz kuru tas attiecas.

- **RFI**: jautājums projektēšanas komandai. Statusi: Atvērts, Atbildēts, Slēgts.
- **Iesniegums**: kaut kas, kas jāpārskata, pirms darbs turpinās. Statusi: Atvērts, Tiek pārskatīts, Apstiprināts, Apstiprināts ar piezīmēm, Pārstrādāt un iesniegt atkārtoti, Slēgts.
- **Dienas žurnāls**: dienas laikapstākļi, cilvēku skaits būvlaukumā un paveiktie darbi. Statusi: Melnraksts, Gala.

Katram ierakstam ir savs numurs tā veidā (RFI-0001, SUB-0001, LOG-0001), nosaukums, teksts, atbildīgais, termiņš, atbilžu pavediens un pielikumu nosaukumu saraksts.

## Pievienot jaunu

1. Atveriet cilni {{ui:Lauks}} un izvēlieties {{ui:RFI}} vai {{ui:Iesniegums}}.
2. Pieskarieties vai noklikšķiniet uz lapas, kurai tas pieder. Parādās tapa, un ieraksts atveras cilnē.
3. Aizpildiet nosaukumu, jautājumu vai aprakstu, norādiet, kam tas piešķirts, un termiņu.

Dienas žurnāls tiek pievienots atvērtajai lapai bez tapas. {{ui:Novietot tapu}} novieto tapu vēlāk; {{ui:Pārvietot tapu}} pārvieto jebkuru tapu. Pieskaroties tapai lapā, atveras tās ieraksts.

## Atbildēšana un izsekošana

Mainiet {{ui:Statuss}}, un izmaiņa tiek ierakstīta pavedienā. Uzrakstiet atbildi un izvēlieties {{ui:Nosūtīt atbildi}} ({{key:Ctrl+Enter}} arī nosūta). Pielikumi ir tikai nosaukumi: ierakstiet vienu vai izvēlieties failus, un saraksts parāda komandai, kas pievienots ierakstam. Paši faili paliek savā vietā.

Ieraksts, kura termiņš ir pagājis un kas vēl gaida (RFI, kas nav Atbildēts vai Slēgts; iesniegums, par kuru nav lemts), sarakstā un savā tapā tiek atzīmēts ar **Nokavēts** sarkanā krāsā.

## Atrast to, kas svarīgs

Filtri atrodas virs saraksta: veids, statuss, termiņš (nokavēts, termiņš 7 dienās, ar termiņu vai bez termiņa), šī lapa vai visas lapas, teksta meklēšana un {{ui:Piešķirti man}}, kas salīdzina atbildīgo ar vārdu, pēc kura MarkupCraft jūs pazīst (skatiet [Iestatiet savu vārdu](topic:set-your-name)). Rindā zem filtriem skaitīts, kas parādīts un kas nokavēts.

## Eksports

{{ui:CSV}} ieraksta uzskaitītos ierakstus kā izklājlapu. {{ui:BCF}} ieraksta tos kā BCF tēmas, katru ar momentuzņēmumu par tā vietu lapā, lai citi BCF rīki tos varētu parādīt. Abi seko filtriem.

## Saglabāt, bezsaistē un kopiju apvienošana

Ieraksti tiek saglabāti PDF failā, kad to saglabājat, un atgriežas, kad to atverat. Tīkls nav vajadzīgs: pievienojiet, rediģējiet, atbildiet un saglabājiet planšetē pagrabā, pēc tam atgrieziet PDF. Vecāki PDF faili un PDF faili no citām programmām atveras kā līdz šim.

Lai savestu kopā divas kopijas, atveriet vienu un izvēlieties {{ui:Apvienot}}, pēc tam izvēlieties otru tā paša PDF kopiju. Ieraksti tiek savienoti pēc to ID:

- ieraksts, kas ir tikai vienā kopijā, tiek pievienots;
- ieraksts, kas ir abās, no pēdējo reizi mainītās kopijas kopumā ņem savus laukus (nosaukums, teksts, statuss, atbildīgais, termiņš); tātad, ja divi cilvēki mainīja dažādus laukus vienā ierakstā, uzvar vēlākās kopijas versija; pavedieni un pielikumu nosaukumi no abām kopijām tiek apvienoti;
- ja abas kopijas vienādi numurējušas jaunu ierakstu, tas, kas tiek ienests, saņem nākamo brīvo numuru;
- ieraksts, kas dzēsts vienā kopijā, paliek dzēsts, ja vien pēc tam nav rediģēts.

Apvienošana ir viens atsaukšanas solis.

## Ierobežojumi

- Ierakstus vēl nekopīgo Live TeamWork; izmantojiet {{ui:Apvienot}}.
- Šajā versijā ierakstiem nav komandu, paziņojumu vai mākoņprojektu.
- Lapas, kas dzēstas no PDF, aizved līdzi savus ierakstus (lapas apstiprinājumā tiek saskaitīti).
