---
title: Každý typ poznámky
summary: Sedmnáct druhů poznámek, jejich klávesy, způsob kreslení, výchozí vzhled a to, čím se stanou v uloženém PDF.
keywords: typy poznámek, seznam nástrojů, druhy anotací, oblak, vynášecí text, text, poznámka, razítko, pero, zvýrazňovač, čára, šipka, obdélník, elipsa, mnohočára, mnohoúhelník, délka, plocha, počet
from: 29bf32e7
---

## Nástroje

| Panel nástrojů | Klávesa | Jak kreslit | Výchozí vzhled | V uloženém PDF |
|---|---|---|---|---|
| {{ui:Pero}} | {{key:P}} | Přetažením | Červená, 1.5 pt | Inkoust |
| {{ui:Zvýraznit}} | {{key:I}} | Přetažením | Žlutá, 14 pt široká, průhledná, obarvuje, co je pod ní | Inkoust (označen jako tah zvýrazňovačem) |
| {{ui:Úsečka}} | {{key:L}} | Přetažením, nebo klikem na začátek a konec | Červená, 2 pt | Úsečka |
| {{ui:Šipka}} | {{key:A}} | Přetažením, nebo klikem na začátek a konec | Červená, 2 pt, uzavřený hrot šipky na konci | Úsečka s hrotem šipky |
| {{ui:Oblouk}} | {{key:O}} | Klikněte na začátek, bod na oblouku, pak na konec | Červená, 2 pt | Mnohočára podél oblouku |
| {{ui:Obdélník}} | {{key:R}} | Přetažením rámečku | Červená, 2 pt, bez výplně | Čtverec |
| {{ui:Elipsa}} | {{key:E}} | Přetažením rámečku | Červená, 2 pt, bez výplně | Kružnice |
| {{ui:Mnohočára}} | {{key:Y}} | Klikněte body, dvojklikem dokončete | Červená, 2 pt | Mnohočára |
| {{ui:Mnohoúhelník}} | {{key:G}} | Klikněte body, dvojklikem dokončete | Červená, 2 pt, bez výplně | Mnohoúhelník |
| {{ui:Oblak}} | {{key:C}} | Přetažením rámečku | Červená, oblouky 1.5 pt | Čtverec s oblakovitým okrajem |
| {{ui:Volný oblak}} | {{key:Shift+C}} | Klikněte body, dvojklikem dokončete | Červená, oblouky 1.5 pt | Mnohoúhelník s oblakovitým okrajem |
| {{ui:Vynášecí text}} | {{key:K}} | Stiskněte na bod, přetáhněte k textu, napište | Červený text a výnoska, 1 pt, text 12 pt | Textové pole s výnoskou vynášecího textu |
| {{ui:Text}} | {{key:T}} | Klikněte nebo přetáhněte rámeček, napište | Červený text 12 pt, bez ohraničení | Textové pole |
| {{ui:Poznámka}} | {{key:N}} | Klikněte, napište | Žlutá ikona poznámky | Lepicí poznámka |
| {{ui:Razítko}} | {{key:S}} | Vyberte razítko, klikněte nebo přetáhněte | Velká písmena v rámečku plus „Od <name>, <date>“; barva podle významu | Razítko |
| {{ui:Délka}} | {{key:M}} | Klikněte začátek a konec (potřebuje měřítko) | Modrá kótovací čára se značkami a délkou | Čára označená jako kóta, s měřením |
| {{ui:Úhel}} | {{key:X}} | Klikněte konec jednoho ramene, roh, pak konec druhého ramene | Modrá ramena, malý oblouk v rohu a úhel ve stupních | Mnohočára s úhlem jako textem |
| {{ui:Plocha}} | {{key:Q}} | Klikněte rohy, dvojklikem dokončete (potřebuje měřítko) | Modrý obrys, světle modrá výplň, plocha a obvod | Mnohoúhelník označený jako plocha, s měřením |
| {{ui:Počet}} | {{key:U}} | Klikněte na každou položku | Oranžové očíslované tečky a štítek „skupina: n“ | Jeden komentář tuší na skupinu, kroužek na každou položku |

Na dotyku je „dvojklikem dokončete“ dvojité klepnutí a „klik“ je klepnutí, které se provede při zvednutí prstu (u bodů, poznámek a počtů).

## Co nese každá poznámka

| Pole | Kde ji vidíte |
|---|---|
| Autor | {{ui:Vlastnosti}}, seznam, druhý řádek razítka, jiné prohlížeče PDF |
| Vytvořeno a upraveno | {{ui:Vlastnosti}} (váš časový pásmo), seznam, CSV |
| Stav | Otevřeno, Přijato, Zamítnuto nebo Dokončeno |
| Předmět | Krátký štítek; výchozí je druh („Oblak“, „Textové pole“, „Měření délky“) |
| Komentář | Delší poznámky. U poznámky je její text jejím komentářem. |
| Text | Jen textová pole a vynášecí texty |
| Odpovědi | Vlákno, se změnami stavu |
| Položka závady | Číslo, přiřazení, termín a stav položky, když je přidána do seznamu závad |
| Styl | Barva, tloušťka čáry, výplň a krytí výplně (uzavřené tvary, text a vynášecí texty), krytí, velikost textu (text, vynášecí texty a měření) |

## Komentáře jen pro čtení

Komentáře, které přišly se souborem a které MarkupCraft nemůže upravit (zvýraznění textu, razítka jiných programů a jiné zvláštní druhy), jsou uvedeny s typem „Jiné“ a štítkem stavu „Jen pro čtení“. Zachovají přesně vzhled, který jim soubor dává. Můžete je vybrat, vidět jejich autora, předmět a komentář a odpovídat na ně.

## Ještě není hotovo

Přílohy souborů zatím nejsou hotové. Každá poznámka může odkazovat na list; viz [Odkazy na listy](topic:sheet-links). Obrázky a podpisy se umisťují nástrojem {{ui:Razítko}}; viz [Razítka a poznámky](topic:stamps-and-notes). Viz [Co ještě není hotové](topic:not-built-yet).
