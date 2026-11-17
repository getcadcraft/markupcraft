---
title: Jedinice, dužine i razmere
summary: Svi načini unosa dužine, jedinice u kojima se prikazuju dužine i površine, zaokruživanje i spisak unapred zadatih razmera.
keywords: jedinice, stope, inči, stope i inči, metričke, metri, milimetri, centimetri, razmera, unapred zadata, arhitektonska razmera, inženjerska razmera, odnos, kvadratne stope, zaokruživanje, razlomci
from: 574b0291
---

## Unos dužine

Kada kalibrišete iz dve tačke, unosite stvarno rastojanje. MarkupCraft čita sve ovo:

| Ukucate | Znači |
|---|---|
| `24'-0"` | 24 stope |
| `12' 6 1/2"` ili `12'-6 1/2"` | 12 stopa 6½ inča |
| `12' 6` | 12 stopa 6 inča (oznaka za inč izostavljena) |
| `6"` ili `1/2"` | inči |
| `12.5'` ili `12.5 ft` | 12½ stopa |
| `3 ft 6 in` | 3 stope 6 inča (takođe stope, stopa, inč, inči) |
| `3.5 m`, `90 cm`, `900 mm` | metrički (takođe meter, metar, milimetar, centimetar…) |
| `24` | broj bez jedinice, u jedinici izabranoj pod {{ui:Prikaži dužine u}} |

Zakrivljeni navodnici (’ ”) i dva apostrofa ('') za inče takođe rade. Nulte i negativne dužine se odbijaju.

:::warning
Zarez se čita kao decimalna tačka: `1,5 m` je 1.5 metra. Ne unosite separatore hiljada: `1,200 mm` se čita kao 1.2 milimetra. Ukucajte `1200 mm`.
:::

## Kako se dužine i površine prikazuju

| {{ui:Prikaži dužine u}} | Dužina se prikazuje kao | Površina se prikazuje kao |
|---|---|---|
| {{ui:Stope i inči}} | `12'-6 1/2"`, zaokruženo na 1/16" | kvadratne stope, dve decimale |
| {{ui:Decimalne stope}} | `12.54'`, dve decimale | kvadratne stope, dve decimale |
| {{ui:Inči}} | `150.5"`, do dve decimale | kvadratni inči, jedna decimala |
| {{ui:Metri}} | `3.820 m`, tri decimale | kvadratni metri, tri decimale |
| {{ui:Milimetri}} | `3820 mm`, celi milimetri | kvadratni milimetri, celi |

Obim površine koristi format dužine.

## Unapred zadate razmere

Unapred zadate razmere pretpostavljaju da je PDF u punoj odštampanoj veličini: 72 PDF tačke po inču, kako ih CAD program iscrtava.

| Grupa | Razmere | Dužine se prikazuju u |
|---|---|---|
| Arhitektonska | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Stope i inči |
| Inženjerska | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimalne stope |
| Metrička | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetri |
| Metrička | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metri |

Da koristite unapred zadatu razmeru, ali da vidite dužine u drugoj jedinici, kalibrišite iz dve tačke i izaberite jedinicu tamo.

## Razmere koje su sačuvali drugi programi

Kada PDF već nosi razmeru za stranu iz drugog programa (razmeru merenja sačuvanu na strani), MarkupCraft je koristi ako je u stopama, inčima, metrima, centimetrima ili milimetrima. Njena oznaka se prikazuje onako kako je navedena u datoteci.

## Položaji na papiru

Statusna traka pokazuje gde je pokazivač na papiru, u incima od gornjeg levog ugla lista, bez obzira na razmeru lista. Koraci pomeranja alata Compare su u tačkama (72 tačke po inču).

## Tačnost

Merenje je dobro koliko i kalibracija i vaši klikovi. Kalibrišite preko najduže poznate dimenzije koju možete naći, uvećajte da kliknete njene krajeve, pa proverite još jednu dimenziju. PDF koji je bio razmeren kada je napravljen (štampa „uklopi u stranu“ ili set u polovičnoj veličini) i dalje je tačan posle kalibracije iz dimenzije, ali ne i sa unapred zadatom razmerom.
