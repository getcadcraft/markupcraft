---
title: Jedinice, dužine i razmjere
summary: Svi načini upisivanja dužine, jedinice u kojima se dužine i površine prikazuju, zaokruživanje i spisak unaprijed postavljenih razmjera.
keywords: jedinice, stope, inči, stope i inči, metrički, metri, milimetri, centimetri, razmjera, unaprijed postavljena, arhitektonska razmjera, inženjerska razmjera, odnos, kvadratne stope, zaokruživanje, razlomci
from: 574b0291
---

## Upisivanje dužine

Kad kalibriraš po dvije tačke, upišeš stvarnu udaljenost. MarkupCraft čita sve ovo:

| Upisuješ | Znači |
|---|---|
| `24'-0"` | 24 stope |
| `12' 6 1/2"` ili `12'-6 1/2"` | 12 stopa 6½ inča |
| `12' 6` | 12 stopa 6 inča (oznaka za inče izostavljena) |
| `6"` ili `1/2"` | inči |
| `12.5'` ili `12.5 ft` | 12½ stope |
| `3 ft 6 in` | 3 stope 6 inča (također feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrički (također meter, metre, millimeter, centimetre…) |
| `24` | goli broj, u jedinici odabranoj pod {{ui:Prikaži dužine u}} |

Kovrdžavi navodnici (’ ”) i dva apostrofa ('') za inče također rade. Nulte i negativne dužine se odbijaju.

:::warning
Zarez se čita kao decimalna tačka: `1,5 m` je 1.5 metara. Ne upisuj separatore hiljada: `1,200 mm` se čita kao 1.2 milimetra. Upiši `1200 mm`.
:::

## Kako se dužine i površine prikazuju

| {{ui:Prikaži dužine u}} | Dužina se prikazuje kao | Površina se prikazuje kao |
|---|---|---|
| {{ui:Stope i inči}} | `12'-6 1/2"`, zaokruženo na 1/16" | kvadratne stope, dvije decimale |
| {{ui:Decimalne stope}} | `12.54'`, dvije decimale | kvadratne stope, dvije decimale |
| {{ui:Inči}} | `150.5"`, do dvije decimale | kvadratni inči, jedna decimala |
| {{ui:Metri}} | `3.820 m`, tri decimale | kvadratni metri, tri decimale |
| {{ui:Milimetri}} | `3820 mm`, cijeli milimetri | kvadratni milimetri, cijeli |

Obim površine koristi format dužine.

## Unaprijed postavljene razmjere

Unaprijed postavljene razmjere pretpostavljaju da je PDF u punoj štampanoj veličini: 72 PDF tačke po inču, kako ga CAD program iscrtava.

| Grupa | Razmjere | Dužine se prikazuju u |
|---|---|---|
| Arhitektonska | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Stope i inči |
| Inženjerska | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimalne stope |
| Metrička | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetri |
| Metrička | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metri |

Da koristiš unaprijed postavljenu razmjeru, a dužine vidiš u drugoj jedinici, umjesto toga kalibriraj po dvije tačke i odaberi jedinicu tamo.

## Razmjere koje su sačuvali drugi programi

Kad PDF već nosi razmjeru za stranicu iz drugog programa (mjerna razmjera sačuvana na stranici), MarkupCraft je koristi ako je u stopama, inčima, metrima, centimetrima ili milimetrima. Njena oznaka se prikazuje onako kako je navodi datoteka.

## Položaji na papiru

Statusna traka pokazuje gdje je pokazivač na papiru, u inčima od gornjeg lijevog ugla lista, bez obzira na razmjeru lista. Koraci pomjeranja u Poređenju su u tačkama (72 tačke po inču).

## Tačnost

Mjerenje je dobro koliko su kalibracija i tvoji klikovi. Kalibriraj po najdužoj poznatoj dimenziji koju možeš naći, zumiraj da klikneš njene krajeve, zatim provjeri jednu drugu dimenziju. PDF koji je bio skaliran kad je napravljen ("uklopi na stranicu" štampa ili set u polovičnoj veličini) i dalje je tačan nakon kalibracije po dimenziji, ali ne i s unaprijed postavljenom razmjerom.
