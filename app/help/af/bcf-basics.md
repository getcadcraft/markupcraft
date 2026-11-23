---
title: BCF-grondbeginsels
summary: Wat 'n BCF-uitvoer uit MarkupCraft bevat, hoe om dit met BIM-koördinasiegereedskap te gebruik, en die beperkings daarvan.
keywords: bcf, bcfzip, bim collaboration format, kwessies, koördinasie, botsing, onderwerpe, aansig, momentopname, openbim, buildingsmart, voer kwessies uit
from: 0de26175
---

BCF (BIM Collaboration Format) is 'n oop lêerformaat vir die oordra van kwessies tussen BIM-gereedskap. Baie model-koördinasie- en outeursprogramme kan 'n `.bcfzip`-lêer as 'n lys kwessies invoer. MarkupCraft skryf **BCF 2.1**.

## Maak een

1. Maak die {{ui:Opmerkings}}-oortjie oop.
2. Filtreer die lys na wat jy wil stuur, byvoorbeeld {{ui:Status}} "Oop". Slegs die gelyste opmerkings word uitgevoer.
3. Kies {{ui:BCF}}.
4. Wag terwyl dit 'n momentopname van elke opmerking maak ("Momentopnames word vir BCF gemaak (5 van 20)…").

Resultaat: "<name> markups.bcfzip" word afgelaai, en die statusbalk sê hoeveel onderwerpe dit bevat en die lêergrootte.

## Wat daarin is

Elke opmerking word een **onderwerp**:

| Onderwerpveld | Gevul met |
|---|---|
| Titel | Pons-nommer, onderwerp en blad, byvoorbeeld "#4 Wolk op A-101 — Vloerplan" |
| Tipe | Die opmerkingsoort (Wolk, Uitroep, Lengte…) |
| Status | Oop, Aanvaar, Verwerp of Voltooi |
| Etikette | Die opmerkingsoort en die blad |
| Outeur en datums | Die opmerking se outeur, geskep- en gewysigde datums |
| Toegewys aan, vervaldatum | Uit sy pons-item, as dit een het |
| Beskrywing | Sy teks of stempelwording, gemete waarde, kommentaar, en die blad en lêer |
| Kommentaar | Een per antwoord, met outeur en datum |
| Momentopname | 'n Prent van die opmerking op sy deel van die blad |
| Aansig | 'n Bo-af-aansig van die opmerking se plek op die blad |

As jy dieselfde opmerking weer uitvoer, kry dit dieselfde onderwerp-ID, sodat 'n gereedskap wat BCF invoer dit as dieselfde kwessie kan herken.

## Wat kom in wanneer jy invoer

{{ui:Voer BCF in}} lees BCF 2.0-, 2.1- en 3.0-lêers (nagegaan op die 19 amptelike buildingSMART 3.0-toetslêers: elke onderwerp is gelees, en die kommentaar van die drie wat teks het). Vir 'n onderwerp wat een van jou s'n is (dieselfde onderwerp-ID) voeg dit die nuwe kommentaar as antwoorde by en neem die nuwe status oor. Enige ander onderwerp word 'n nota op die blad wat sy etiket of lêernaam noem, anders op die oop blad, met sy titel, beskrywing, toegewysde persoon en vervaldatum as die nota se teks en sy kommentaar as antwoorde.

| In die BCF-onderwerp | In MarkupCraft |
|---|---|
| Titel, beskrywing, toegewysde persoon, vervaldatum | Die nota se teks |
| Kommentaar met teks | Antwoorde |
| Status Oop, Aanvaar, Verwerp, Voltooi (Gesluit, Opgelos en Klaar tel as Voltooi) | Die opmerking se status |
| Outeur en skeppingsdatum | Die nota se outeur en datum |
| Kameraposisie | 'n Plek op die blad, net vir 'n onderwerp wat deur etiket of lêernaam aan 'n blad gekoppel is |
| Modelkeuse, verborge dele, snitvlakke, momentopnames | Nie bewaar nie: 'n blad het geen model waarin hulle gewys kan word nie |

## Beperkings om te ken

- **'n Blad is nie 'n model nie.** Die aansig wys na die opmerking se posisie op die papier, gemeet in meter papier. Dit neem nie 'n BIM-gereedskap na 'n plek in die model nie. Gebruik die momentopname en die bladnaam om die plek te vind.
- **Statusse en tipes is MarkupCraft se eie** (Oop, Aanvaar, Verwerp, Voltooi; Wolk, Uitroep…). Die lêer verklaar hulle, soos BCF toelaat, maar 'n gereedskap met sy eie vaste lyste kan hulle koppel of ignoreer.
- **Invoer bring kommentaar, nie modelaansigte nie.** {{ui:Voer BCF in}} voeg antwoorde en statusse by die opmerkings wat jy uitgevoer het, en maak notas van ander kwessies; dit kan nie 'n model-kamera wys nie. Sien [Opmerkingslys en uitvoer](topic:markups-list-and-export#import-bcf).
- Om opmerkings as 'n PDF terug te stuur is dikwels eenvoudiger vir tekeningbeoordelings. BCF is daarvoor om tekeningkommentaar in 'n model-koördinasiewerkvloei te kry.
