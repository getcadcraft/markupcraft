---
title: Unità, lunghezze e scale
summary: Ogni modo per digitare una lunghezza, le unità in cui sono mostrate lunghezze e aree, l'arrotondamento e l'elenco delle scale predefinite.
keywords: unità, piedi, pollici, piedi e pollici, metrico, metri, millimetri, centimetri, scala, predefinita, scala architettonica, scala ingegneristica, rapporto, piedi quadrati, arrotondamento, frazioni
from: 574b0291
---

## Digitare una lunghezza

Quando si calibra da due punti, si digita la distanza reale. MarkupCraft legge tutte queste forme:

| Si digita | Significa |
|---|---|
| `24'-0"` | 24 piedi |
| `12' 6 1/2"` o `12'-6 1/2"` | 12 piedi e 6½ pollici |
| `12' 6` | 12 piedi e 6 pollici (segno dei pollici omesso) |
| `6"` o `1/2"` | pollici |
| `12.5'` o `12.5 ft` | 12½ piedi |
| `3 ft 6 in` | 3 piedi e 6 pollici (accettati anche feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrico (accettati anche meter, metre, millimeter, centimetre…) |
| `24` | un numero semplice, nell'unità scelta in {{ui:Mostra le lunghezze in}} |

Anche gli apostrofi curvi (’ ”) e i due apostrofi ('') per i pollici funzionano. Lunghezze zero o negative vengono rifiutate.

:::warning
Una virgola viene letta come separatore decimale: `1,5 m` equivale a 1,5 metri. Non digitare separatori delle migliaia: `1,200 mm` viene letto come 1,2 millimetri. Digitare `1200 mm`.
:::

## Come sono mostrate lunghezze e aree

| {{ui:Mostra le lunghezze in}} | Una lunghezza appare come | Un'area appare come |
|---|---|---|
| {{ui:Piedi e pollici}} | `12'-6 1/2"`, arrotondata a 1/16" | piedi quadrati, due decimali |
| {{ui:Piedi decimali}} | `12.54'`, due decimali | piedi quadrati, due decimali |
| {{ui:Pollici}} | `150.5"`, fino a due decimali | pollici quadrati, un decimale |
| {{ui:Metri}} | `3.820 m`, tre decimali | metri quadrati, tre decimali |
| {{ui:Millimetri}} | `3820 mm`, millimetri interi | millimetri quadrati, interi |

Il perimetro di un'area usa il formato della lunghezza.

## Scale predefinite

Le scale predefinite presuppongono che il PDF sia alla sua dimensione di stampa piena: 72 punti PDF per pollice, come lo stampa un programma CAD.

| Gruppo | Scale | Lunghezze mostrate in |
|---|---|---|
| Architettonica | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Piedi e pollici |
| Ingegneristica | 1" = 10', 20', 30', 40', 50', 60', 100' | Piedi decimali |
| Metrica | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimetri |
| Metrica | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metri |

Per usare una scala predefinita ma vedere le lunghezze in un'altra unità, calibrare invece da due punti e scegliere lì l'unità.

## Scale salvate da altri programmi

Quando un PDF contiene già una scala per una pagina, salvata da un altro programma (una scala di misura memorizzata nella pagina), MarkupCraft la usa se è in piedi, pollici, metri, centimetri o millimetri. La sua etichetta viene mostrata come la indica il file.

## Posizioni sulla carta

La barra di stato mostra dove si trova il puntatore sulla carta, in pollici dall'angolo in alto a sinistra della tavola, qualunque sia la scala della tavola. I passi di spostamento di Compare sono in punti (72 punti per pollice).

## Precisione

Una misura vale quanto la calibrazione e i propri clic. Calibrare sulla dimensione nota più lunga che si riesce a trovare, ingrandire per fare clic sulle sue estremità, poi verificare un'altra dimensione. Un PDF che è stato scalato al momento della creazione (una stampa "adatta alla pagina" o un set a metà dimensione) resta accurato dopo la calibrazione su una quota, ma non con una scala predefinita.
