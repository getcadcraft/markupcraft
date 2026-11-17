---
title: Všetky typy poznámok
summary: Sedemnásť druhov poznámok, ich klávesy, spôsob kreslenia, predvolený vzhľad a to, čím sa stanú v uloženom PDF.
keywords: typy poznámok, zoznam nástrojov, typy anotácií, oblak, popisok, text, poznámka, pečiatka, pero, zvýrazňovač, čiara, šípka, obdĺžnik, elipsa, lomená čiara, mnohouholník, dĺžka, plocha, počet
from: 29bf32e7
---

## Nástroje

| Panel nástrojov | Kláves | Ako kresliť | Predvolený vzhľad | V uloženom PDF |
|---|---|---|---|---|
| {{ui:Pero}} | {{key:P}} | Ťahať | Červené, 1.5 pt | Atrament |
| {{ui:Zvýrazňovač}} | {{key:I}} | Ťahať | Žlté, 14 pt na šírku, priehľadné, zafarbí to, čo je pod ním | Atrament (označený ako ťah zvýrazňovača) |
| {{ui:Úsečka}} | {{key:L}} | Ťahať, alebo kliknúť na začiatok a koniec | Červená, 2 pt | Úsečka |
| {{ui:Šípka}} | {{key:A}} | Ťahať, alebo kliknúť na začiatok a koniec | Červená, 2 pt, uzavretý hrot šípky na konci | Úsečka s hrotom šípky |
| {{ui:Oblúk}} | {{key:O}} | Kliknúť na začiatok, potom na bod na oblúku a na koniec | Červený, 2 pt | Lomená čiara pozdĺž oblúka |
| {{ui:Obdĺžnik}} | {{key:R}} | Ťahať rámček | Červený, 2 pt, bez výplne | Štvorec |
| {{ui:Elipsa}} | {{key:E}} | Ťahať rámček | Červená, 2 pt, bez výplne | Kružnica |
| {{ui:Lomená čiara}} | {{key:Y}} | Klikať body, dvojklikom dokončiť | Červená, 2 pt | Lomená čiara |
| {{ui:Mnohouholník}} | {{key:G}} | Klikať body, dvojklikom dokončiť | Červený, 2 pt, bez výplne | Mnohouholník |
| {{ui:Oblak}} | {{key:C}} | Ťahať rámček | Červený, oblúčiky 1.5 pt | Štvorec s oblačným okrajom |
| {{ui:Voľný oblak}} | {{key:Shift+C}} | Klikať body, dvojklikom dokončiť | Červený, oblúčiky 1.5 pt | Mnohouholník s oblačným okrajom |
| {{ui:Popisok}} | {{key:K}} | Stlačiť na bod, ťahať k textu, písať | Červený text a vynášacia čiara, 1 pt, text 12 pt | Textové pole s vynášacou čiarou popisku |
| {{ui:Text}} | {{key:T}} | Kliknúť alebo ťahať rámček, písať | Červený text 12 pt, bez rámčeka | Textové pole |
| {{ui:Poznámka}} | {{key:N}} | Kliknúť, písať | Žltá ikona poznámky | Lepiaca poznámka |
| {{ui:Pečiatka}} | {{key:S}} | Vybrať pečiatku, kliknúť alebo ťahať | Veľké písmená v rámčeku plus „Podľa <meno>, <dátum>“; farba podľa významu | Pečiatka |
| {{ui:Dĺžka}} | {{key:M}} | Kliknúť na začiatok a koniec (potrebuje mierku) | Modrá kótovacia čiara s ryskami a dĺžkou | Úsečka označená ako kóta, s meraním |
| {{ui:Uhol}} | {{key:X}} | Kliknúť na koniec jedného ramena, potom na roh a na koniec druhého ramena | Modré ramená, malý oblúk v rohu a uhol v stupňoch | Lomená čiara s uhlom ako svojím textom |
| {{ui:Plocha}} | {{key:Q}} | Klikať rohy, dvojklikom dokončiť (potrebuje mierku) | Modrý obrys, svetlomodrá výplň, plocha a obvod | Mnohouholník označený ako plocha, s meraním |
| {{ui:Počet}} | {{key:U}} | Kliknúť na každú položku | Oranžové očíslované bodky a značka „skupina: n“ | Jeden atramentový komentár na skupinu, prstenec pre každú položku |

Na dotyku je „dvojklikom dokončiť“ dvojité klepnutie a „kliknutie“ je klepnutie, ktoré sa vykoná pri zdvihnutí prsta (pri bodoch, poznámkach a počítaní).

## Čo nesie každá poznámka

| Pole | Kde ho vidíte |
|---|---|
| Autor | {{ui:Vlastnosti}}, zoznam, druhý riadok pečiatky, iné prehliadače PDF |
| Vytvorené a zmenené | {{ui:Vlastnosti}} (vaše časové pásmo), zoznam, CSV |
| Stav | Otvorené, Prijaté, Zamietnuté alebo Dokončené |
| Predmet | Krátke označenie; predvolene druh („Oblak“, „Textové pole“, „Meranie dĺžky“) |
| Komentár | Dlhšie poznámky. Pri poznámke je jej text jej komentárom. |
| Text | Iba textové polia a popisky |
| Odpovede | Vlákno so zmenami stavu |
| Položka nedostatku | Číslo, pridelenie, termín, stav položky, keď je pridaná do zoznamu nedostatkov |
| Štýl | Farba, hrúbka čiary, výplň a krytie výplne (uzavreté tvary, text a popisky), krytie, veľkosť textu (text, popisky a merania) |

## Komentáre len na čítanie

Komentáre, ktoré prišli so súborom a ktoré MarkupCraft nemôže upraviť (zvýraznenia textu, pečiatky iných programov a iné špeciálne druhy), sú uvedené s typom „Iné“ a štítkom stavu „Len na čítanie“. Zachovajú presne ten vzhľad, ktorý im dal súbor. Môžete ich vybrať, vidieť ich autora, predmet a komentár a odpovedať na ne.

## Ešte nie je hotové

Prílohy súborov ešte nie sú hotové. Každá poznámka sa môže prepojiť na list; pozri [Prepojenia listov](topic:sheet-links). Obrázky a podpisy sa vkladajú nástrojom {{ui:Pečiatka}}; pozri [Pečiatky a poznámky](topic:stamps-and-notes). Pozri [Čo ešte nie je hotové](topic:not-built-yet).
