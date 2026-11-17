---
title: Enheter, lengder og målestokker
summary: Alle måter å skrive inn en lengde på, enhetene lengder og arealer vises i, avrunding og listen over forhåndsinnstilte målestokker.
keywords: enheter, fot, tommer, fot og tommer, metrisk, meter, millimeter, centimeter, målestokk, forhåndsinnstilt, arkitektmålestokk, ingeniørmålestokk, forhold, kvadratfot, avrunding, brøker
from: 574b0291
---

## Skrive inn en lengde

Når du kalibrerer fra to punkter, skriver du inn den virkelige avstanden. MarkupCraft leser alle disse:

| Du skriver | Det betyr |
|---|---|
| `24'-0"` | 24 fot |
| `12' 6 1/2"` eller `12'-6 1/2"` | 12 fot 6½ tommer |
| `12' 6` | 12 fot 6 tommer (tommermerket utelatt) |
| `6"` eller `1/2"` | tommer |
| `12.5'` eller `12.5 ft` | 12½ fot |
| `3 ft 6 in` | 3 fot 6 tommer (også feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrisk (også meter, metre, millimeter, centimetre…) |
| `24` | et tall uten enhet, i enheten valgt under {{ui:Vis lengder i}} |

Skrå anførselstegn (’ ”) og to apostrofer ('') for tommer fungerer også. Null og negative lengder avvises.

:::warning
Komma leses som desimaltegn: `1,5 m` er 1.5 meter. Ikke skriv tusenskilletegn: `1,200 mm` leses som 1.2 millimeter. Skriv `1200 mm`.
:::

## Hvordan lengder og arealer vises

| {{ui:Vis lengder i}} | En lengde vises som | Et areal vises som |
|---|---|---|
| {{ui:Fot og tommer}} | `12'-6 1/2"`, avrundet til 1/16" | kvadratfot, to desimaler |
| {{ui:Desimale fot}} | `12.54'`, to desimaler | kvadratfot, to desimaler |
| {{ui:Tommer}} | `150.5"`, opptil to desimaler | kvadrattommer, én desimal |
| {{ui:Meter}} | `3.820 m`, tre desimaler | kvadratmeter, tre desimaler |
| {{ui:Millimeter}} | `3820 mm`, hele millimeter | kvadratmillimeter, hele tall |

Omkretsen til et areal bruker lengdeformatet.

## Forhåndsinnstilte målestokker

Forhåndsinnstillingene forutsetter at PDF-filen har full utskriftsstørrelse: 72 PDF-punkter per tomme, slik et CAD-program plotter den.

| Gruppe | Målestokker | Lengder vises i |
|---|---|---|
| Arkitekt | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Fot og tommer |
| Ingeniør | 1" = 10', 20', 30', 40', 50', 60', 100' | Desimale fot |
| Metrisk | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeter |
| Metrisk | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meter |

Vil du bruke en forhåndsinnstilt målestokk, men se lengder i en annen enhet, kalibrer fra to punkter i stedet og velg enheten der.

## Målestokker lagret av andre programmer

Når en PDF allerede har en målestokk for en side fra et annet program (en målestokk lagret på siden), bruker MarkupCraft den hvis den er i fot, tommer, meter, centimeter eller millimeter. Etiketten vises slik filen oppgir den.

## Posisjoner på papiret

Statuslinjen viser hvor pekeren er på papiret, i tommer fra arkets øvre venstre hjørne, uansett arkets målestokk. Compares små forskyvningstrinn er i punkter (72 punkter per tomme).

## Nøyaktighet

En måling er så god som kalibreringen og klikkene dine. Kalibrer over det lengste kjente målet du finner, zoom inn for å klikke på endene, og kontroller deretter ett annet mål. En PDF som ble skalert da den ble laget (en utskrift «tilpasset side» eller et sett i halv størrelse), er fortsatt nøyaktig etter kalibrering fra et mål, men ikke med en forhåndsinnstilling.
