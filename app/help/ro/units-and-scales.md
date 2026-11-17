---
title: Unități, lungimi și scări
summary: Toate modurile de a tasta o lungime, unitățile în care sunt afișate lungimile și ariile, rotunjirea și lista scărilor presetate.
keywords: unități, picioare, inci, picioare și inci, metric, metri, milimetri, centimetri, scară, presetată, scară arhitecturală, scară de inginerie, raport, picioare pătrate, rotunjire, fracții
from: 574b0291
---

## Tastarea unei lungimi

Când calibrați din două puncte, tastați distanța reală. MarkupCraft citește toate acestea:

| Tastați | Înseamnă |
|---|---|
| `24'-0"` | 24 de picioare |
| `12' 6 1/2"` sau `12'-6 1/2"` | 12 picioare și 6½ inci |
| `12' 6` | 12 picioare și 6 inci (semnul de inci lipsește) |
| `6"` sau `1/2"` | inci |
| `12.5'` sau `12.5 ft` | 12½ picioare |
| `3 ft 6 in` | 3 picioare și 6 inci (și feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metric (și meter, metre, millimeter, centimetre…) |
| `24` | un număr simplu, în unitatea aleasă la {{ui:Show lengths in}} |

Ghilimelele curbe (’ ”) și două apostroafe ('') pentru inci funcționează și ele. Lungimile zero și cele negative sunt refuzate.

:::warning
O virgulă este citită ca punct zecimal: `1,5 m` înseamnă 1.5 metri. Nu tastați separatori de mii: `1,200 mm` este citit ca 1.2 milimetri. Tastați `1200 mm`.
:::

## Cum sunt afișate lungimile și ariile

| {{ui:Show lengths in}} | O lungime apare ca | O arie apare ca |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, rotunjit la 1/16" | picioare pătrate, două zecimale |
| {{ui:Decimal feet}} | `12.54'`, două zecimale | picioare pătrate, două zecimale |
| {{ui:Inches}} | `150.5"`, până la două zecimale | inci pătrați, o zecimală |
| {{ui:Meters}} | `3.820 m`, trei zecimale | metri pătrați, trei zecimale |
| {{ui:Millimeters}} | `3820 mm`, milimetri întregi | milimetri pătrați, întregi |

Perimetrul unei arii folosește formatul lungimii.

## Scări presetate

Presetările presupun că PDF-ul este la dimensiunea sa tipărită completă: 72 de puncte PDF pe inci, așa cum o trasează un program CAD.

| Grup | Scări | Lungimi afișate în |
|---|---|---|
| Arhitectural | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Picioare și inci |
| Inginerie | 1" = 10', 20', 30', 40', 50', 60', 100' | Picioare zecimale |
| Metric | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetri |
| Metric | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metri |

Pentru a folosi o scară presetată, dar a vedea lungimile în altă unitate, calibrați în schimb din două puncte și alegeți unitatea acolo.

## Scări salvate de alte programe

Când un PDF are deja o scară pentru o pagină, salvată de alt program (o scară de măsurare stocată pe pagină), MarkupCraft o folosește dacă este în picioare, inci, metri, centimetri sau milimetri. Eticheta sa se afișează așa cum o indică fișierul.

## Poziții pe hârtie

Bara de stare arată unde se află cursorul pe hârtie, în inci față de colțul din stânga sus al foii, indiferent de scara foii. Pașii de deplasare fină ai funcției Compare sunt în puncte (72 de puncte pe inci).

## Acuratețe

O măsurătoare este la fel de bună ca fiind calibrarea și clicurile dvs. Calibrați pe cea mai lungă dimensiune cunoscută pe care o găsiți, măriți pentru a face clic pe capetele ei, apoi verificați o altă dimensiune. Un PDF care a fost scalat când a fost creat (un tipar „potrivire pe pagină” sau un set la jumătate) rămâne exact după calibrarea dintr-o dimensiune, dar nu și cu o presetare.
