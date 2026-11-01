---
title: Lêers wat MarkupCraft oopmaak en stoor
summary: PDF's in, 'n PDF-afskrif met opmerkings uit, plus CSV-, BCF- en gereedskapskislêers; waar elk heen gaan, aanlyn en vanlyn.
keywords: pdf, oopmaak, stoor, uitvoer, aflaai, csv, bcf, bcfzip, json, gereedskapskis, lêertipes, formate, oplaai, wagwoord, geënkripteer
from: b3045b4c
---

## Wat MarkupCraft oopmaak

| Lêer | Hoe | Wat gebeur |
|---|---|---|
| PDF (`.pdf`) | {{ui:Maak oop}}, {{key:Mod+O}}, of laat val op die bladgebied. Verskeie op 'n slag is goed. | Elke bladsy word 'n blad. Opmerkings wat reeds in die lêer is, word teruggelees (hieronder). |
| Gereedskapskis (`.json`) | {{ui:Gereedskap}}-oortjie, dan {{ui:Voer in}} | Gereedskap word by jou gereedskapskis gevoeg. Sien [Die gereedskapskis](topic:tool-chest). |

Enigiets anders word geweier met "MarkupCraft maak PDF-lêers oop." in die statusbalk. As jy 'n mengsel laat val, maak die PDF's oop en die statusbalk sê hoeveel lêers nie PDF was nie.

### Opmerkings wat reeds in 'n PDF is

- **Opmerkings wat MarkupCraft gestoor het** kom presies terug: soort, styl, outeur, datums, status, antwoorde, afwerkingsnommer, die blad se skaal en enige bladname wat jy getik het.
- **Kommentaar uit ander PDF-programme** word ook gelees. Reghoeke, elipse, lyne en pyle, polilyne, poligone, pen-strepe, teksblokkies en plaknotas word gewone, wysigbare MarkupCraft-opmerkings. Hul antwoorde en nasienstatusse kom saam.
- **Al die res** (teksuitlighting wat deur teks te kies gemaak is, ander programme se stempels, en ander soorte) word wys soos dit is, gemerk as slegs-lees. Jy kan dit kies, dit in die opmerkingslys sien en daarop antwoord, maar nie skuif, verander of skrap nie.
- Skakels en vorm-velde word onaangeraak gelaat en word nie gelys nie.
- 'n Skaal wat deur 'n ander program gestoor is ('n meetvenster), word as die blad se skaal gebruik wanneer MarkupCraft die eenheid verstaan.

### Lêers wat nie oopmaak nie

- 'n PDF wat 'n wagwoord benodig: '"naam" benodig 'n wagwoord om oop te maak. Maak 'n onbeskermde afskrif oop.'
- 'n Beskadigde lêer of een wat nie werklik 'n PDF is nie: '"naam" kon nie as 'n PDF gelees word nie (…)'
- 'n PDF wat oopmaak maar teen veranderings beskerm is, maak wel goed oop. Stoor daarvan word geweier (sien hieronder).

Wanneer verskeie lêers op 'n slag oopgemaak word, maak die wat werk oop, en 'n kassie genaamd "Sommige lêers kon nie oopmaak nie" lys die ander.

## Wat MarkupCraft stoor

Stoor is altyd 'n **aflaai** van 'n nuwe lêer. 'n Webblad kan nie 'n lêer op jou rekenaar oorskryf nie, en MarkupCraft verander nooit jou oorspronklike nie.

| Jy kies | Jy kry | Aantekeninge |
|---|---|---|
| {{ui:Stoor}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | 'n Afskrif van die oorspronklike PDF met elke opmerking geskryf as 'n werklike PDF-kommentaar. As jy 'n "(marked up)"-lêer weer stoor, behou dit dieselfde naam; dit word nooit "(marked up) (marked up)" nie. Sien [Stoor die PDF met opmerkings](topic:save-the-marked-up-pdf). |
| {{ui:Opmerkings}}-oortjie, dan {{ui:CSV}} | "<name> markups.csv" | Die opmerkings soos gelys (filters geld). |
| {{ui:Opmerkings}}-oortjie, dan {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 vir BIM-koördinasiehulpmiddels, 'n momentopname per opmerking. Sien [BCF-grondbeginsels](topic:bcf-basics). |
| {{ui:Afwerkingslys}}-oortjie, dan {{ui:Voer CSV uit}} | "<name> punch list.csv" | Die afwerkingsitems in nommervolgorde. |
| {{ui:Gereedskap}}-oortjie, dan {{ui:Voer uit}} | "MarkupCraft tool chest.json" | Jou gereedskapskis, om te deel of te hou. |

"<name>" is die eerste oop PDF se lêernaam sonder ".pdf".

Die CSV-lêers maak in enige sigblad oop. Hulle is UTF-8 met die merker waarna sigblaaie soek, sodat name met aksente korrek verskyn. 'n Sel wat met =, +, - of @ begin, kry 'n voorafgaande apostrof, sodat 'n sigblad dit nooit as formule uitvoer nie.

## Waarheen aflaaie gaan

Jou blaaier besluit: gewoonlik jou Aflaaie-vouer, of dit vra elke keer as jy dit so stel. Sien [Blaaiers en rekenaars](common:browsers#what-differs-between-browsers).

:::chromium
Wanneer jy elke veranderde lêer van 'n stel op 'n slag stoor, kan Chrome en Edge vra of hierdie werf verskeie lêers mag aflaai. Kies {{ui:Laat toe}}, anders kry jy net die eerste afskrif.
:::

:::safari
Op 'n iPad vra Safari voor elke aflaai en plaas die lêer in die Files-program, onder Downloads. Op 'n Mac gaan dit na die vouer wat in Safari se instellings gestel is.
:::

## Aanlyn en vanlyn

- **Jou PDF's verlaat nooit hierdie rekenaar nie**, aanlyn of vanlyn. Daar is nêrens 'n oplaai nie.
- Die PDF-leser word die eerste keer gelaai as jy 'n PDF oopmaak ("Die PDF-leser word gelaai…"), en die PDF-skrywer die eerste keer as jy stoor ("Die PDF-skrywer word gelaai…") of 'n lêer oopmaak wat reeds kommentaar in het.
- Met 'n verbinding laai albei van die webwerf.
- **Om sonder verbinding te werk,** kies {{ui:Stoor vir vanlyn}} in die balk bo-aan terwyl jy aanlyn is. Die knoppie tel "Stoor N van M" en sê dan "Vanlyn gereed". Daardie afskrif sluit die PDF-leser en die PDF-skrywer in (ongeveer 6 MB altesaam) en hierdie hulp, sodat oopmaak, opmerkings maak en stoor van PDF's daarna in hierdie blaaier vanlyn werk.
- As die knoppie "Kon nie stoor nie" sê, is sommige lêers nie afgelaai nie: kyk die verbinding en klik weer. As dit "Vanlyn nie beskikbaar nie" sê, kan hierdie blaaiervenster nie 'n vanlyn-afskrif hou nie (privaatvensters en sommige bestuurde rekenaars); gebruik 'n gewone venster.
- Om die afskrif op te dateer of te verwyder, klik "Vanlyn gereed" en kies "Stoor weer (kry die nuutste weergawe)" of "Verwyder die vanlyn-afskrif". Meer in [Werk vanlyn](common:offline).

:::offline
Jy is vanlyn. As die balk bo-aan "Vanlyn gereed" sê, werk alles, ook stoor. As dit nie so sê nie en jy nog nie in hierdie oortjie gestoor het nie, kan {{ui:Stoor}} misluk met "Die PDF-skrywer kon nie laai nie". Jou opmerkings is steeds in die oortjie: hou dit oop, kry weer 'n verbinding, en kies {{ui:Stoor}} weer.
:::

## Goed om te weet

- Groot planstelle neem 'n rukkie om oop te maak: MarkupCraft lees elke bladsy se teks om bladnommers te vind. Die statusbalk tel die blaaie soos dit gaan.
- As jy dieselfde PDF twee keer oopmaak, word die blaaie twee keer bygevoeg. Maak die stel toe en maak dit weer oop as dit gebeur.
- {{ui:Maak toe}} sluit elke oop lêer op 'n slag. As enige onggestoorde opmerkings het, vra dit: {{ui:Kanselleer}}, {{ui:Maak toe sonder om te stoor}} of {{ui:Stoor eers kopieë}}.
- Wolkstoor is nog nie beskikbaar nie, en daar is nog geen lessenaarweergawes nie. Hou jou PDF's saam met jou ander projeklêers en rugsteun hulle soos gewoonlik. Sien [Waar jou lêers heen gaan](common:your-files).
