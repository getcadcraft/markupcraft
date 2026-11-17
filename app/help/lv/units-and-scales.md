---
title: Mērvienības, garumi un mērogi
summary: Visi veidi, kā ierakstīt garumu, mērvienības, kādās rāda garumus un laukumus, noapaļošana un iepriekš iestatīto mērogu saraksts.
keywords: mērvienības, pēdas, collas, pēdas un collas, metriskās, metri, milimetri, centimetri, mērogs, iepriekš iestatīts, arhitektūras mērogs, inženieru mērogs, attiecība, kvadrātpēdas, noapaļošana, daļas
from: 574b0291
---

## Garuma ievadīšana

Kalibrējot pēc diviem punktiem, ierakstāt reālo attālumu. MarkupCraft nolasa visus šos:

| Ierakstāt | Nozīmē |
|---|---|
| `24'-0"` | 24 pēdas |
| `12' 6 1/2"` or `12'-6 1/2"` | 12 pēdas 6½ collas |
| `12' 6` | 12 pēdas 6 collas (collu zīme izlaista) |
| `6"` or `1/2"` | collas |
| `12.5'` or `12.5 ft` | 12½ pēdas |
| `3 ft 6 in` | 3 pēdas 6 collas (arī feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metriskās (arī meter, metre, millimeter, centimetre…) |
| `24` | skaitlis bez mērvienības, mērvienībā, kas izvēlēta sadaļā {{ui:Rādīt garumus}} |

Līkņu pēdiņas (’ ”) un divas apostrofas ('') collām arī darbojas. Nulles un negatīvi garumi tiek noraidīti.

:::warning
Komats tiek nolasīts kā decimālzīme: `1,5 m` ir 1,5 metri. Netipiniet tūkstošu atdalītājus: `1,200 mm` tiek nolasīts kā 1,2 milimetri. Ierakstiet `1200 mm`.
:::

## Kā rāda garumus un laukumus

| {{ui:Rādīt garumus}} | Garums rāda kā | Laukums rāda kā |
|---|---|---|
| {{ui:Pēdas un collas}} | `12'-6 1/2"`, noapaļots līdz 1/16" | kvadrātpēdas, divas decimāldaļas |
| {{ui:Decimālpēdas}} | `12.54'`, divas decimāldaļas | kvadrātpēdas, divas decimāldaļas |
| {{ui:Collas}} | `150.5"`, līdz divām decimāldaļām | kvadrātcollas, viena decimāldaļa |
| {{ui:Metri}} | `3.820 m`, trīs decimāldaļas | kvadrātmetri, trīs decimāldaļas |
| {{ui:Milimetri}} | `3820 mm`, veseli milimetri | kvadrātmilimetri, veseli |

Laukuma perimetrs izmanto garuma formātu.

## Iepriekš iestatīti mērogi

Iepriekš iestatītie mērogi pieņem, ka PDF ir pilnā drukas izmērā: 72 PDF punkti uz collu, kā to izdrukā CAD programma.

| Grupa | Mērogi | Garumi rādīti |
|---|---|---|
| Arhitektūras | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pēdas un collas |
| Inženierijas | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimālpēdas |
| Metriskie | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetri |
| Metriskie | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metri |

Lai izmantotu iepriekš iestatītu mērogu, bet garumus redzētu citā mērvienībā, kalibrējiet pēc diviem punktiem un izvēlieties mērvienību tur.

## Mērogi, ko saglabāja citas programmas

Ja PDF jau satur lapas mērogu no citas programmas (lapā saglabātu mērījumu mērogu), MarkupCraft to izmanto, ja tas ir pēdās, collās, metros, centimetros vai milimetros. Tā iezīme tiek rādīta tā, kā to norāda fails.

## Papīra pozīcijas

Statusjosla rāda, kur rādītājs atrodas uz papīra, collās no lapas augšējā kreisā stūra neatkarīgi no lapas mēroga. Compare soļi ir punktos (72 punkti uz collu).

## Precizitāte

Mērījums ir tikpat labs kā kalibrēšana un jūsu klikšķi. Kalibrējiet pēc garākā zināmā izmēra, ko atradīsiet, tuviniet, lai noklikšķinātu tā galus, un pēc tam pārbaudiet vēl vienu izmēru. PDF, kas tapis ar mērogu (izdrukāts "pielāgots lapai" vai puse izmēra kopa), joprojām ir precīzs pēc kalibrēšanas pēc izmēra, bet ne ar iepriekš iestatītu mērogu.
