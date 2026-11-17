---
title: Enheder, længder og målestok
summary: Alle måder at skrive en længde på, de enheder længder og arealer vises i, afrunding og listen over forudindstillede målestoksforhold.
keywords: enheder, fod, tommer, fod og tommer, metrisk, meter, millimeter, centimeter, målestok, forudindstillet, arkitektmålestok, ingeniørmålestok, forhold, kvadratfod, afrunding, brøker
from: 574b0291
---

## Skrivning af en længde

Når du kalibrerer ud fra to punkter, skriver du den rigtige afstand. MarkupCraft læser alle disse:

| Du skriver | Det betyder |
|---|---|
| `24'-0"` | 24 fod |
| `12' 6 1/2"` eller `12'-6 1/2"` | 12 fod 6½ tomme |
| `12' 6` | 12 fod 6 tommer (tommemærket udeladt) |
| `6"` eller `1/2"` | tommer |
| `12.5'` eller `12.5 ft` | 12½ fod |
| `3 ft 6 in` | 3 fod 6 tommer (også feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrisk (også meter, metre, millimeter, centimetre…) |
| `24` | et blankt tal, i den enhed, der er valgt under {{ui:Vis længder i}} |

Typografiske anførselstegn (’ ”) og to apostrofer ('') for tommer virker også. Nul- og negative længder afvises.

:::warning
Et komma læses som et decimaltegn: `1,5 m` er 1.5 meter. Skriv ikke tusindtalsseparatorer: `1,200 mm` læses som 1.2 millimeter. Skriv `1200 mm`.
:::

## Sådan vises længder og arealer

| {{ui:Vis længder i}} | En længde vises som | Et areal vises som |
|---|---|---|
| {{ui:Fod og tommer}} | `12'-6 1/2"`, afrundet til 1/16" | kvadratfod, to decimaler |
| {{ui:Decimalfod}} | `12.54'`, to decimaler | kvadratfod, to decimaler |
| {{ui:Tommer}} | `150.5"`, op til to decimaler | kvadrattommer, én decimal |
| {{ui:Meter}} | `3.820 m`, tre decimaler | kvadratmeter, tre decimaler |
| {{ui:Millimeter}} | `3820 mm`, hele millimeter | kvadratmillimeter, hele tal |

Omkredsen af et areal bruger længdeformatet.

## Forudindstillede målestoksforhold

Forudindstillingerne forudsætter, at PDF'en er i sin fulde trykte størrelse: 72 PDF-punkter til tommen, som et CAD-program plotter den.

| Gruppe | Målestoksforhold | Længder vises i |
|---|---|---|
| Arkitektonisk | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Fod og tommer |
| Ingeniør | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimalfod |
| Metrisk | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeter |
| Metrisk | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meter |

For at bruge et forudindstillet målestoksforhold, men se længder i en anden enhed, skal du i stedet kalibrere ud fra to punkter og vælge enheden dér.

## Målestoksforhold, andre programmer har gemt

Når en PDF allerede har et målestoksforhold for en side fra et andet program (et målestoksforhold gemt på siden), bruger MarkupCraft det, hvis det er i fod, tommer, meter, centimeter eller millimeter. Dets etiket vises, som filen angiver den.

## Papirpositioner

Statuslinjen viser, hvor markøren er på papiret, i tommer fra arkets øverste venstre hjørne, uanset arkets målestok. Forskydningstrinene i Compare er i punkter (72 punkter til en tomme).

## Nøjagtighed

En måling er lige så god som kalibreringen og dine klik. Kalibrér ud fra det længste kendte mål, du kan finde, zoom ind for at klikke på dets ender, og kontrollér derefter et andet mål. En PDF, der blev skaleret, da den blev lavet (et »tilpas til side«-plot eller et sæt i halv størrelse), er stadig nøjagtig efter kalibrering ud fra et mål, men ikke med en forudindstilling.
