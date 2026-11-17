---
title: Unitats, longituds i escales
summary: Totes les maneres d'escriure una longitud, les unitats en què es mostren les longituds i les àrees, l'arrodoniment i la llista d'escales predefinides.
keywords: unitats, peus, polzades, peus i polzades, mètric, metres, mil·límetres, centímetres, escala, predefinida, escala arquitectònica, escala d'enginyeria, raó, peus quadrats, arrodoniment, fraccions
from: 574b0291
---

## Escriure una longitud

Quan calibreu a partir de dos punts, escriviu la distància real. MarkupCraft llegeix totes aquestes formes:

| Escriviu | Vol dir |
|---|---|
| `24'-0"` | 24 peus |
| `12' 6 1/2"` o `12'-6 1/2"` | 12 peus 6½ polzades |
| `12' 6` | 12 peus 6 polzades (sense la marca de polzades) |
| `6"` o `1/2"` | polzades |
| `12.5'` o `12.5 ft` | 12½ peus |
| `3 ft 6 in` | 3 peus 6 polzades (també feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | mètric (també meter, metre, millimeter, centimetre…) |
| `24` | un número sense unitat, en la unitat triada a {{ui:Mostra les longituds en}} |

Les cometes corbes (’ ”) i dues cometes simples ('') per a polzades també funcionen. Les longituds zero i negatives es rebutgen.

:::warning
Una coma es llegeix com a punt decimal: `1,5 m` és 1.5 metres. No escriviu separadors de milers: `1,200 mm` es llegeix com a 1.2 mil·límetres. Escriviu `1200 mm`.
:::

## Com es mostren les longituds i les àrees

| {{ui:Mostra les longituds en}} | Una longitud es mostra com a | Una àrea es mostra com a |
|---|---|---|
| {{ui:Peus i polzades}} | `12'-6 1/2"`, arrodonida a 1/16" | peus quadrats, dos decimals |
| {{ui:Peus decimals}} | `12.54'`, dos decimals | peus quadrats, dos decimals |
| {{ui:Polzades}} | `150.5"`, fins a dos decimals | polzades quadrades, un decimal |
| {{ui:Metres}} | `3.820 m`, tres decimals | metres quadrats, tres decimals |
| {{ui:Mil·límetres}} | `3820 mm`, mil·límetres sencers | mil·límetres quadrats, sencers |

El perímetre d'una àrea usa el format de longitud.

## Escales predefinides

Les predefinides suposen que el PDF és a la seva mida impresa completa: 72 punts PDF per polzada, tal com el traça un programa CAD.

| Grup | Escales | Longituds mostrades en |
|---|---|---|
| Arquitectònica | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Peus i polzades |
| Enginyeria | 1" = 10', 20', 30', 40', 50', 60', 100' | Peus decimals |
| Mètrica | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Mil·límetres |
| Mètrica | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metres |

Per usar una escala predefinida però veure les longituds en una altra unitat, calibreu a partir de dos punts i trieu la unitat allà.

## Escales que han desat altres programes

Quan un PDF ja porta una escala per a una pàgina d'un altre programa (una escala de mesura desada a la pàgina), MarkupCraft l'usa si és en peus, polzades, metres, centímetres o mil·límetres. L'etiqueta es mostra tal com la indica el fitxer.

## Posicions al paper

La barra d'estat mostra on és el punter sobre el paper, en polzades des de la cantonada superior esquerra del full, sigui quina sigui l'escala del full. Els passos de desplaçament fi de Compare són en punts (72 punts per polzada).

## Precisió

Una mesura és tan bona com la calibració i els vostres clics. Calibreu sobre la cota coneguda més llarga que trobeu, amplieu per fer clic als seus extrems, i després comproveu una altra cota. Un PDF que es va escalar en fer-lo (un plànol "ajusta a pàgina" o un conjunt a la meitat de mida) continua sent precís després de calibrar a partir d'una cota, però no amb una predefinida.
