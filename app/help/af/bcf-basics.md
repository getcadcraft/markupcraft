---
title: BCF-grondbeginsels
summary: Wat 'n BCF-uitvoer uit MarkupCraft bevat, hoe om dit met BIM-koördinasiehulpmiddels te gebruik, en die beperkings daarvan.
keywords: bcf, bcfzip, bim-samewerkingsformaat, kwessies, koördinasie, botsing, onderwerpe, aansig, momentopname, openbim, buildingsmart, kwessies uitvoer
from: 446f38c1
---

BCF (BIM Collaboration Format) is 'n oop lêerformaat om kwessies tussen BIM-hulpmiddels oor te dra. Baie modelkoördinasie- en ontwerpprogramme kan 'n `.bcfzip`-lêer as 'n lys kwessies invoer. MarkupCraft skryf **BCF 2.1**.

## Maak een

1. Maak die {{ui:Opmerkings}}-oortjie oop.
2. Filtreer die lys na wat jy wil stuur, byvoorbeeld {{ui:Status}} "Oop". Slegs die gelyste opmerkings word uitgevoer.
3. Kies {{ui:BCF}}.
4. Wag terwyl dit 'n momentopname van elke opmerking maak ("Maak momentopnames vir BCF (5 van 20)…").

Resultaat: "<name> markups.bcfzip" word afgelaai, en die statusbalk sê hoeveel onderwerpe dit bevat en die lêergrootte.

## Wat daarin is

Elke opmerking word een **onderwerp**:

| Onderwerpveld | Gevul met |
|---|---|
| Titel | Afwerkingsnommer, onderwerp en blad, byvoorbeeld "#4 Wolk op A-101 — Vloerplan" |
| Tipe | Die soort opmerking (Wolk, Aanwysing, Lengte…) |
| Status | Oop, Aanvaar, Verwerp of Voltooi |
| Etikette | Die soort opmerking en die blad |
| Outeur en datums | Die opmerking se outeur, skep- en wysigingsdatums |
| Toegewys aan, sluitingsdatum | Uit sy afwerkingsitem, wanneer dit een het |
| Beskrywing | Die teks of stempelwoording, gemete waarde, kommentaar, en die blad en lêer |
| Kommentaar | Een per antwoord, met outeur en datum |
| Momentopname | 'n Prent van die opmerking op sy deel van die blad |
| Aansig | 'n Bo-aansig van die opmerking se plek op die blad |

As dieselfde opmerking weer uitgevoer word, kry dit dieselfde onderwerp-ID, sodat 'n hulpmiddel wat BCF invoer, dit as dieselfde kwessie kan herken.

## Beperkings om te weet

- **'n Blad is nie 'n model nie.** Die aansig wys na die opmerking se posisie op die papier, gemeet in meter papier. Dit neem 'n BIM-hulpmiddel nie na 'n plek in die model nie. Gebruik die momentopname en die bladnaam om die plek te vind.
- **Statusse en tipes is MarkupCraft s'n eie** (Oop, Aanvaar, Verwerp, Voltooi; Wolk, Aanwysing…). Die lêer verklaar hulle, soos BCF toelaat, maar 'n hulpmiddel met sy eie vaste lyste kan hulle koppel of ignoreer.
- **Invoer bring kommentaar, nie modelaansigte nie.** {{ui:Voer BCF in}} voeg antwoorde en statusse by die opmerkings wat jy uitgevoer het, en maak notas van ander kwessies; dit kan nie 'n modelkamera wys nie. Sien [Lys van opmerkings en uitvoer](topic:markups-list-and-export#import-bcf).
- Om opmerkings as 'n PDF terug te stuur, is vir tekeningnabesigtiging dikwels eenvoudiger. BCF is om tekeningkommentaar in 'n modelkoördinasie-werkvloei te kry.
