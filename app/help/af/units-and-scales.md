---
title: Eenhede, lengtes en skale
summary: Elke manier om ’n lengte te tik, die eenhede waarin lengtes en oppervlaktes gewys word, afronding, en die lys vooraf-ingestelde skale.
keywords: eenhede, voet, duim, voet en duim, metries, meter, millimeter, sentimeter, skaal, vooraf ingestel, argitektoniese skaal, ingenieurskaal, verhouding, vierkante voet, afronding, breuke
from: 574b0291
---

## ’n Lengte tik

Wanneer jy vanaf twee punte kalibreer, tik jy die werklike afstand. MarkupCraft lees al hierdie:

| Jy tik | Dit beteken |
|---|---|
| `24'-0"` | 24 voet |
| `12' 6 1/2"` of `12'-6 1/2"` | 12 voet 6½ duim |
| `12' 6` | 12 voet 6 duim (duimmerk weggelaat) |
| `6"` of `1/2"` | duim |
| `12.5'` of `12.5 ft` | 12½ voet |
| `3 ft 6 in` | 3 voet 6 duim (ook voet, duim) |
| `3.5 m`, `90 cm`, `900 mm` | metries (ook meter, millimeter, sentimeter…) |
| `24` | ’n kaal getal, in die eenheid gekies onder {{ui:Show lengths in}} |

Krullerige aanhalingstekens (’ ”) en twee apostrowe ('') vir duim werk ook. Nul- en negatiewe lengtes word geweier.

:::warning
’n Komma word as ’n desimaalpunt gelees: `1,5 m` is 1.5 meter. Moenie duisendskeiers tik nie: `1,200 mm` word as 1.2 millimeter gelees. Tik `1200 mm`.
:::

## Hoe lengtes en oppervlaktes gewys word

| {{ui:Show lengths in}} | ’n Lengte wys as | ’n Oppervlakte wys as |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, afgerond tot 1/16" | vierkante voet, twee desimale |
| {{ui:Decimal feet}} | `12.54'`, twee desimale | vierkante voet, twee desimale |
| {{ui:Inches}} | `150.5"`, tot twee desimale | vierkante duim, een desimaal |
| {{ui:Meters}} | `3.820 m`, drie desimale | vierkante meter, drie desimale |
| {{ui:Millimeters}} | `3820 mm`, hele millimeter | vierkante millimeter, heel |

Die omtrek van ’n oppervlakte gebruik die lengteformaat.

## Vooraf-ingestelde skale

Die vooraf-instellings neem aan die PDF is op sy volle gedrukte grootte: 72 PDF-punte per duim, soos ’n CAD-program dit plot.

| Groep | Skale | Lengtes wys in |
|---|---|---|
| Argitektonies | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Voet en duim |
| Ingenieurswese | 1" = 10', 20', 30', 40', 50', 60', 100' | Desimale voet |
| Metries | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeter |
| Metries | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meter |

Om ’n vooraf-ingestelde skaal te gebruik maar lengtes in ’n ander eenheid te sien, kalibreer eerder vanaf twee punte en kies die eenheid daar.

## Skale wat ander programme gestoor het

Wanneer ’n PDF reeds ’n skaal vir ’n bladsy van ’n ander program dra (’n meetskaal wat op die bladsy gestoor is), gebruik MarkupCraft dit as dit in voet, duim, meter, sentimeter of millimeter is. Die etiket word gewys soos die lêer dit sê.

## Posisies op papier

Die statusbalk wys waar die wyser op die papier is, in duim vanaf die blad se linkerbokant, ongeag die blad se skaal. Compare se fynstappe is in punte (72 punte per duim).

## Akkuraatheid

’n Meting is so goed as die kalibrasie en jou klikke. Kalibreer oor die langste bekende maat wat jy kan vind, zoem in om sy punte te klik, en kontroleer dan een ander maat. ’n PDF wat met die maak geskaal is (’n "pas-op-bladsy"-plot of ’n halfgrootte-stel) is steeds akkuraat na kalibrasie vanaf ’n maat, maar nie met ’n vooraf-instelling nie.
