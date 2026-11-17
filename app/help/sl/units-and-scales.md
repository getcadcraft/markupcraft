---
title: Enote, dolžine in merila
summary: Vsi načini vnosa dolžine, enote, v katerih so prikazane dolžine in površine, zaokroževanje ter seznam prednastavljenih meril.
keywords: enote, čevlji, palci, čevlji in palci, metrično, metri, milimetri, centimetri, merilo, prednastavitev, arhitekturno merilo, inženirsko merilo, razmerje, kvadratni čevlji, zaokroževanje, ulomki
from: 574b0291
---

## Vnos dolžine

Pri kalibraciji iz dveh točk vnesete pravo razdaljo. MarkupCraft prebere vse te zapise:

| Vnesete | Pomeni |
|---|---|
| `24'-0"` | 24 čevljev |
| `12' 6 1/2"` ali `12'-6 1/2"` | 12 čevljev in 6 1/2 palca |
| `12' 6` | 12 čevljev in 6 palcev (oznaka za palce izpuščena) |
| `6"` ali `1/2"` | palci |
| `12.5'` ali `12.5 ft` | 12 1/2 čevlja |
| `3 ft 6 in` | 3 čevlji in 6 palcev (tudi feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrično (tudi meter, metre, millimeter, centimetre …) |
| `24` | samo število, v enoti, izbrani pod {{ui:Prikaži dolžine v}} |

Tudi ukrivljeni narekovaji (’ ”) in dva apostrofa ('') za palce delujejo. Ničelne in negativne dolžine se zavrnejo.

:::warning
Vejica se prebere kot decimalna pika: `1,5 m` je 1.5 m. Ne vnašajte ločil za tisočice: `1,200 mm` se prebere kot 1.2 mm. Vnesite `1200 mm`.
:::

## Kako so prikazane dolžine in površine

| {{ui:Prikaži dolžine v}} | Dolžina je prikazana kot | Površina je prikazana kot |
|---|---|---|
| {{ui:Čevlji in palci}} | `12'-6 1/2"`, zaokroženo na 1/16" | kvadratni čevlji, dve decimalni mesti |
| {{ui:Decimalni čevlji}} | `12.54'`, dve decimalni mesti | kvadratni čevlji, dve decimalni mesti |
| {{ui:Palci}} | `150.5"`, do dve decimalni mesti | kvadratni palci, eno decimalno mesto |
| {{ui:Metri}} | `3.820 m`, tri decimalna mesta | kvadratni metri, tri decimalna mesta |
| {{ui:Milimetri}} | `3820 mm`, cela milimetra | kvadratni milimetri, cela števila |

Obseg površine uporablja obliko dolžine.

## Prednastavljena merila

Prednastavitve predpostavljajo, da je PDF v polni natisnjeni velikosti: 72 točk PDF na palec, kot ga izriše CAD program.

| Skupina | Merila | Dolžine so prikazane v |
|---|---|---|
| Arhitekturno | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Čevlji in palci |
| Inženirsko | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimalni čevlji |
| Metrično | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetri |
| Metrično | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metri |

Če želite uporabiti prednastavljeno merilo, a dolžine videti v drugi enoti, namesto tega kalibrirajte iz dveh točk in tam izberite enoto.

## Merila, ki so jih shranili drugi programi

Če PDF že vsebuje merilo za stran iz drugega programa (merilo meritev, shranjeno na strani), ga MarkupCraft uporabi, če je v čevljih, palcih, metrih, centimetrih ali milimetrih. Njegova oznaka je prikazana tako, kot jo navaja datoteka.

## Položaji na papirju

Vrstica stanja prikazuje, kje je kazalec na papirju, v palcih od zgornjega levega kota lista, ne glede na merilo lista. Koraki premika pri {{ui:Primerjava}} so v točkah (72 točk na palec).

## Natančnost

Meritev je tako dobra kot kalibracija in vaši kliki. Kalibrirajte po najdaljši znani koti, ki jo najdete, povečajte, da kliknete njena krajišča, nato preverite še eno koto. PDF, ki je bil ob nastanku skaliran (izris „prilagodi na stran“ ali komplet v polovični velikosti), je po kalibraciji iz kote še vedno natančen, s prednastavitvijo pa ne.
