---
title: Jedinice, duljine i mjerila
summary: Svi načini upisivanja duljine, jedinice u kojima se prikazuju duljine i površine, zaokruživanje te popis unaprijed postavljenih mjerila.
keywords: jedinice, stope, inči, stope i inči, metrički, metri, milimetri, centimetri, mjerilo, unaprijed postavljeno, arhitektonsko mjerilo, inženjersko mjerilo, omjer, kvadratne stope, zaokruživanje, razlomci
from: 574b0291
---

## Upisivanje duljine

Kad kalibrirate iz dviju točaka, upisujete stvarnu udaljenost. MarkupCraft čita sve ove oblike:

| Upišete | Znači |
|---|---|
| `24'-0"` | 24 stope |
| `12' 6 1/2"` ili `12'-6 1/2"` | 12 stopa 6½ inča |
| `12' 6` | 12 stopa 6 inča (oznaka za inč izostavljena) |
| `6"` ili `1/2"` | inči |
| `12.5'` ili `12.5 ft` | 12½ stope |
| `3 ft 6 in` | 3 stope 6 inča (također feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrički (također meter, metre, millimeter, centimetre…) |
| `24` | goli broj, u jedinici odabranoj pod {{ui:Show lengths in}} |

Kovrčasti navodnici (’ ”) i dva apostrofa ('') za inče također rade. Nulte i negativne duljine se odbijaju.

:::warning
Zarez se čita kao decimalna točka: `1,5 m` znači 1.5 metara. Nemojte upisivati separatore tisućica: `1,200 mm` se čita kao 1.2 milimetra. Upišite `1200 mm`.
:::

## Kako se prikazuju duljine i površine

| {{ui:Show lengths in}} | Duljina se prikazuje kao | Površina se prikazuje kao |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, zaokruženo na 1/16" | kvadratne stope, dva decimalna mjesta |
| {{ui:Decimal feet}} | `12.54'`, dva decimalna mjesta | kvadratne stope, dva decimalna mjesta |
| {{ui:Inches}} | `150.5"`, do dva decimalna mjesta | kvadratni inči, jedno decimalno mjesto |
| {{ui:Meters}} | `3.820 m`, tri decimalna mjesta | kvadratni metri, tri decimalna mjesta |
| {{ui:Millimeters}} | `3820 mm`, cijeli milimetri | kvadratni milimetri, cijeli |

Opseg površine koristi format duljine.

## Unaprijed postavljena mjerila

Unaprijed postavljena mjerila pretpostavljaju da je PDF u punoj tiskanoj veličini: 72 PDF točke po inču, kako ga CAD program ispisuje.

| Skupina | Mjerila | Duljine prikazane u |
|---|---|---|
| Arhitektonsko | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Stope i inči |
| Inženjersko | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimalne stope |
| Metričko | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetri |
| Metričko | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metri |

Da koristite unaprijed postavljeno mjerilo, ali vidite duljine u drugoj jedinici, umjesto toga kalibrirajte iz dviju točaka i tamo odaberite jedinicu.

## Mjerila koja su spremili drugi programi

Kad PDF već nosi mjerilo za stranicu iz drugog programa (mjerilo spremljeno na stranici), MarkupCraft ga koristi ako je u stopama, inčima, metrima, centimetrima ili milimetrima. Oznaka se prikazuje onako kako je datoteka navodi.

## Položaji na papiru

Statusna traka pokazuje gdje je pokazivač na papiru, u inčima od gornjeg lijevog kuta lista, neovisno o mjerilu lista. Koraci pomicanja u Compareu su u točkama (72 točke po inču).

## Točnost

Mjerenje je dobro koliko su dobri kalibracija i vaši klikovi. Kalibrirajte preko najduže poznate mjere koju možete naći, zumirajte da kliknete njezine krajeve, zatim provjerite jednu drugu mjeru. PDF koji je bio skaliran kad je nastao (ispis „prilagodi stranici“ ili skup u pola veličine) i dalje je točan nakon kalibracije iz mjere, ali ne s unaprijed postavljenim mjerilom.
