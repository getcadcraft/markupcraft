---
title: Seznam poznámek, filtry a exporty
summary: Zobrazte všechny poznámky v sadě, filtrujte podle listu, autora, stavu a typu, přejděte na jednu z nich a exportujte seznam jako CSV nebo BCF.
keywords: seznam poznámek, seznam, souhrn, xlsx, tabulkový sešit, sešit, zpráva pdf, import bcf, filtr, řazení, zpráva, export, csv, tabulka, bcf, bcfzip, problémy, seznam komentářů, přejít
from: 6c70261e
---

## Otevřít seznam

Vyberte kartu {{ui:Poznámky}} vpravo. Každá poznámka každého otevřeného souboru je v seznamu, v pořadí listů a pak v pořadí, v jakém vznikla. Každý řádek ukazuje:

- ikonu v barvě poznámky, její číslo položky závady, pokud ji má („#4“), a její předmět,
- její text, slova razítka nebo naměřenou hodnotu, a její komentář,
- list, autora a datum,
- její stav (nebo „Jen pro čtení“ u komentářů, které přišly se souborem) a počet odpovědí, pokud nějaké má.

Řádek nad seznamem je počítá: „38 poznámek“, nebo „12 z 38 poznámek“, když je filtrováno.

## Přejít na poznámku

Klikněte na řádek. MarkupCraft ukáže ten list, vybere poznámku a přiblíží na ni, když je mimo obraz nebo příliš malá, aby byla vidět. {{ui:Vlastnosti}} mají její podrobnosti a vlákno, když se přepnete zpět na tuto kartu.

## Filtr

Čtyři nabídky nad seznamem. Kombinují se.

| Nabídka | Volby |
|---|---|
| {{ui:List}} | Všechny listy, Tento list (sleduje vás, když měníte listy), nebo jakýkoli list, který má poznámky |
| {{ui:Autor}} | Kdokoli, nebo každý autor v sadě |
| {{ui:Stav}} | Jakýkoli stav, Otevřeno, Přijato, Zamítnuto, Dokončeno |
| {{ui:Typ}} | Jakýkoli typ, nebo každý druh poznámky v sadě |

Příklady:

- Co je na tomto listu ještě otevřené: {{ui:List}} „Tento list“, {{ui:Stav}} „Otevřeno“.
- Komentáře jednoho konzultanta: {{ui:Autor}} jeho jméno.
- Všechna měření: {{ui:Typ}} „Délka“ nebo „Plocha“.

Seznam ukazuje až 2000 řádků; ve velmi velkých sadách jej zúžte filtrem.

## Export do CSV

Zvolte {{ui:CSV}} nahoře na kartě. Dostanete soubor „<name> markups.csv“ s **poznámkami tak, jak jsou aktuálně filtrovány**, jedna na řádek, s těmito sloupci:

Číslo položky, List, Soubor, Strana, Typ, Předmět, Text, Komentář, Měření, Autor, Vytvořeno, Upraveno, Stav, Odpovědi, Poslední odpověď, Barva, Jen pro čtení.

- „Text“ obsahuje slova textových polí a vynášecích textů, slovo razítka nebo název skupiny počtu.
- „Měření“ obsahuje délky, „plocha, obvod“ u ploch a „skupina: n“ u počtů.
- Data jsou úplné časové údaje v UTC.

Chcete-li exportovat vše, nejdřív nastavte všechny filtry zpět na první volbu.

## Legenda na listu

{{ui:Legenda}} na kartě {{ui:Poznámky}} umístí legendu vpravo nahoře z toho, co vidíte: rámeček, který vypisuje každý druh poznámky na listu (podle předmětu a barvy, například „Oblak“, „Otázka“ nebo „Zásuvky“) a kolik jich je. Skupina počtu počítá své značky. Legenda se průběžně přepočítává, když kreslíte, přesouváte nebo mažete poznámky, a vytiskne se a uloží se s počty z toho okamžiku.

Přesuňte ji a změňte velikost jako každou poznámku. Ve svých {{ui:Vlastnosti}} změňte její {{ui:Název}}, nebo nastavte {{ui:Počty}} na {{ui:Celá sada}}, aby počítala každý list. Mezery, jiné legendy a komentáře z jiných programů se nepočítají.

## Vlastní sloupce a řazení

{{ui:Sloupce}} na kartě {{ui:Poznámky}} přidá vlastní sloupce ke každé poznámce: **text**, **volbu** (například Obor: Strojní, Elektro, Vodoinstalace), **číslo** (například Náklady) nebo **datum**. Každému dejte název, zvolte jeho druh, u sloupce volby vypište volby a zvolte {{ui:Uložit sloupce}}.

- Vyplňte je ve {{ui:Vlastnosti}}: každý sloupec tam má své pole. Číselný sloupec přijímá jen čísla, sloupec data datum.
- Seznam ukazuje hodnoty pod každou poznámkou, filtr {{ui:Sloupec}} vybere jednu hodnotu (nebo poznámky, kde je prázdná) a {{ui:Řazení}} seřadí seznam podle sloupce, autora, stavu, druhu nebo data, místo podle listu.
- Exporty CSV a XLSX nesou sloupce za obvyklými. Sloupce se uloží s PDF a vrátí se, když soubor znovu otevřete.

## Export souhrnu: sešit nebo PDF

- {{ui:XLSX}} stáhne soubor „<name> markup summary.xlsx“ se třemi listy: **Poznámky** (jeden řádek na každou položku seznamu, stejné sloupce jako CSV), **Podle listu** (kolik poznámek má každý list, otevřených a uzavřených, a kolik každého druhu, se součty) a **Seznam závad** (když jsou položky závad).
- {{ui:PDF}} stáhne soubor „<name> markup summary.pdf“: zprávu k tisku nebo odeslání, s názvem sady, datem a tabulkou položek seznamu (číslo, list, druh, předmět, text nebo komentář, naměřená hodnota, autor, stav a poslední odpověď). Dlouhý text se zalamuje; záhlaví tabulky se opakuje na každé stránce.

Obě varianty berou seznam tak, jak je filtrován, takže nejdřív filtrujte, když chcete nahlásit jeden list, jednoho autora nebo jen otevřené položky.

## Export do BCF

Zvolte {{ui:BCF}}. MarkupCraft udělá snímek každé poznámky v seznamu na jejím listu („Vytvářím snímky pro BCF (3 z 12)…“) a pak stáhne soubor „<name> markups.bcfzip“. Každá poznámka se stane jedním tématem BCF se svým stavem, autorem, daty, odpověďmi jako komentáři, přiřazením a termínem z její položky závady a snímkem.

Použijte to k předání připomínek k revizi výkresů do nástrojů BIM koordinace, které čtou BCF. Co se přenese a co ne, je v [Základy BCF](topic:bcf-basics).

## Import BCF

{{ui:Import BCF}} načte soubor .bcfzip (nebo .bcf) z nástroje BIM:

- Problémy, které vznikly z vlastního exportu BCF z MarkupCraftu, najdou své poznámky zpět: nové odpovědi se přidají do vlákna a nastaví se nový stav (Closed se počítá jako Dokončeno). Odpovědi, které tam už jsou, se nepřidají dvakrát.
- Ostatní problémy se stanou poznámkami se svým názvem, popisem, autorem a komentáři. Poznámka se umístí na list, jehož číslo nebo název uvádějí štítky problému, jinak na otevřený list. Kamera BIM na papíře nemá místo, takže takové poznámky jsou naskládány vlevo nahoře na listu, abyste je mohli přesunout.

Celý import je jeden krok: {{key:Mod+Z}} jej vrátí zpět. Viz [Základy BCF](topic:bcf-basics).

## Co seznam zatím nedělá

- Seskupování seznamu (místo toho seřaďte a pak filtrujte).
- Úpravy hodnot v seznamu (upravte je ve {{ui:Vlastnosti}}; pole závad lze upravovat na kartě {{ui:Seznam závad}}).
