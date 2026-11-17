---
title: Eenheden, lengten en schalen
summary: Elke manier om een lengte in te typen, de eenheden waarin lengten en oppervlakten worden getoond, afronding en de lijst met vooraf ingestelde schalen.
keywords: eenheden, voeten, inches, voeten en inches, metrisch, meter, millimeter, centimeter, schaal, vooraf ingesteld, architectonische schaal, engineeringschaal, verhouding, vierkante voet, afronding, breuken
from: 574b0291
---

## Een lengte typen

Wanneer u ijkt op twee punten, typt u de werkelijke afstand. MarkupCraft leest al deze vormen:

| U typt | Het betekent |
|---|---|
| `24'-0"` | 24 voet |
| `12' 6 1/2"` of `12'-6 1/2"` | 12 voet 6½ inch |
| `12' 6` | 12 voet 6 inch (inchteken weggelaten) |
| `6"` of `1/2"` | inches |
| `12.5'` of `12.5 ft` | 12½ voet |
| `3 ft 6 in` | 3 voet 6 inch (ook feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrisch (ook meter, metre, millimeter, centimetre…) |
| `24` | een kaal getal, in de eenheid die is gekozen onder {{ui:Lengten tonen in}} |

Krullende aanhalingstekens (’ ”) en twee apostrofs ('') voor inches werken ook. Nul en negatieve lengten worden geweigerd.

:::warning
Een komma wordt als decimaalteken gelezen: `1,5 m` is 1.5 meter. Typ geen duizendtalscheidingstekens: `1,200 mm` wordt gelezen als 1.2 millimeter. Typ `1200 mm`.
:::

## Hoe lengten en oppervlakten worden getoond

| {{ui:Lengten tonen in}} | Een lengte toont als | Een oppervlakte toont als |
|---|---|---|
| {{ui:Voeten en inches}} | `12'-6 1/2"`, afgerond op 1/16" | vierkante voet, twee decimalen |
| {{ui:Decimale voeten}} | `12.54'`, twee decimalen | vierkante voet, twee decimalen |
| {{ui:Inches}} | `150.5"`, tot twee decimalen | vierkante inch, één decimaal |
| {{ui:Meters}} | `3.820 m`, drie decimalen | vierkante meter, drie decimalen |
| {{ui:Millimeters}} | `3820 mm`, hele millimeters | vierkante millimeter, heel |

De omtrek van een oppervlakte gebruikt het lengteformaat.

## Vooraf ingestelde schalen

De voorinstellingen gaan ervan uit dat de PDF op zijn volledige afgedrukte grootte is: 72 PDF-punten per inch, zoals een CAD-programma hem plot.

| Groep | Schalen | Lengten getoond in |
|---|---|---|
| Architectonisch | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Voeten en inches |
| Engineering | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimale voeten |
| Metrisch | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeters |
| Metrisch | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meters |

Wilt u een vooraf ingestelde schaal gebruiken maar lengten in een andere eenheid zien, ijk dan op twee punten en kies daar de eenheid.

## Schalen die andere programma's hebben opgeslagen

Heeft een PDF al een schaal voor een pagina van een ander programma (een meetschaal die op de pagina is opgeslagen), dan gebruikt MarkupCraft die als die in voeten, inches, meter, centimeter of millimeter is. Het label wordt getoond zoals het bestand het aangeeft.

## Posities op het papier

De statusbalk toont waar de aanwijzer op het papier staat, in inches vanaf de linkerbovenhoek van het blad, ongeacht de schaal van het blad. De verschuivingsstappen van Compare zijn in punten (72 punten per inch).

## Nauwkeurigheid

Een meting is zo goed als de ijking en uw klikken. Ijk over de langste bekende maat die u kunt vinden, zoom in om de uiteinden aan te klikken, en controleer daarna één andere maat. Een PDF die bij het maken is geschaald (een plot "passend op pagina" of een set op halve grootte) blijft na ijken op een maat nauwkeurig, maar niet met een vooraf ingestelde schaal.
