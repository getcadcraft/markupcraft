---
title: Co se ukládá do PDF
summary: Přesný obsah opatřené kopie, co vidí jiné programy pro PDF a co se načte zpět při otevření souboru.
keywords: anotace PDF, komentáře, uložená data, zpětné načtení, označení stránek, měření, stav revize, odpovědi, interoperabilita, kompatibilita, znovu otevřít, soukromá data
from: 6439ad28
---

Opatřená kopie je původní PDF s přidanými komentáři (anotacemi PDF). Samotné stránky, jejich výkresy, text, záložky a odkazy se kopírují tak, jak byly.

## Každá poznámka

| MarkupCraft | Uloženo jako | Jiné prohlížeče PDF zobrazí |
|---|---|---|
| Obdélník, oblak s rámečkem | Anotace Square (oblak: oblačný okraj) | Komentář s obdélníkem nebo oblakem |
| Elipsa | Anotace Circle | Komentář s elipsou |
| Mnohoúhelník, volný oblak | Anotace Polygon (oblak: oblačný okraj) | Komentář s mnohoúhelníkem nebo oblakem |
| Mnohočára | Anotace PolyLine | Komentář s mnohočárou |
| Úsečka, šipka | Anotace Line (šipka: uzavřený hrot) | Komentář s čárou nebo šipkou |
| Délka | Anotace Line označená jako kóta, s měřením | Měření délky, pokud ho prohlížeč podporuje |
| Plocha | Anotace Polygon označená jako plocha, s měřením | Měření plochy, pokud je podporováno; jinak mnohoúhelník |
| Skupina počtu | Jedna anotace Ink, kroužek u každé položky; její text je "group: n" | Komentář typu Ink |
| Pero, zvýrazňovač | Anotace Ink (zvýrazňovač označen jako takový) | Komentář typu Ink |
| Text | Anotace FreeText | Komentář v textovém poli |
| Výnoska | Anotace FreeText s vodicí čárou výnosky | Komentář výnosky |
| Poznámka | Anotace Text | Lepicí štítek, který se otevře s textem |
| Razítko | Anotace Stamp | Komentář typu razítko |

Každá se ukládá s těmito údaji:

- **vlastní vzhled**, nakreslený přesně tak, jak ho MarkupCraft kreslí na obrazovce, takže vypadá stejně v každém prohlížeči a tiskne se stejně, včetně odznaku čísla závady;
- **autora**, **datum vytvoření a úpravy**, **předmět**, **text komentáře** (u textových polí a výnosek text i komentář), **barvu** a **průhlednost**;
- **podrobnosti MarkupCraftu** v soukromém záznamu, který ostatní programy ignorují: stav, položku závady, styl a typ, aby se znovu otevřela přesně.

## Vlákna a stavy

- Každá odpověď se ukládá jako komentář odpovědi propojený s její poznámkou, s autorem, datem a textem. Odpovědi nemají na listu vlastní ikonu.
- Každá změna stavu se ukládá jako odpověď nesoucí stav revize. Jiné nástroje pro revize ho zobrazí jako Přijato, Zamítnuto nebo Dokončeno; stav Otevřeno se ukládá bez stavu.
- Poznámka se stavem jiným než Otevřeno, ale bez zaznamenané změny stavu, dostane jednu odpověď se stavem revize, aby stav viděly i ostatní programy.
- Odpovědi na komentáře jen pro čtení z původního souboru se ukládají stejným způsobem, propojené s tímto komentářem.

## Každý list

- **Měřítko:** kalibrovaný list dostane měřicí výřez pokrývající stránku (běžný způsob uložení měřítka stránky) a vlastní kopii kalibrace MarkupCraftu.
- **Číslo listu:** číslo zadané přes {{ui:Přejmenovat list}} se stane označením stránky. Pokud má označení některá stránka souboru, každá stránka tohoto souboru dostane označení: zadané číslo, jinak její původní označení, jinak číslo stránky.
- **Název listu:** zadaný název se ukládá jen pro MarkupCraft; jiné prohlížeče ho nezobrazují.

## Text a znaky

Text se zapisuje písmem Helvetica, které má každý prohlížeč PDF. Písmena mimo západoevropskou sadu (Windows-1252) se v kopii zobrazí jako "?"; zpráva o uložení je počítá.

## Výpočetní listy a zdůvodnění

Výpočetní listy a zdůvodnění se uchovávají v soukromém záznamu PDF s názvem `/MarkupCraftShell`. Ostatní programy pro PDF ho ignorují. Starší MarkupCraft ho také ignoruje a při dalším uložení tohoto souboru ho zahodí.

## Co se stane s komentáři, které už v souboru byly

Když otevřete PDF, které už má komentáře:

- Komentáře MarkupCraftu se načtou přesně. Pokud je jiný program přesunul nebo změnil jejich velikost, platí jejich nová poloha.
- Obdélníky, elipsy, čáry, mnohočáry, mnohoúhelníky, inkoust, textová pole a lepicí štítky z jiných programů se stanou upravitelnými poznámkami. **Při uložení MarkupCraft původní objekty odstraní a zapíše je znovu po svém**, včetně jejich vyskakovacích oken a odpovědí. Jejich vzhled se může mírně změnit.
- Stavy revize z jiných programů nastavují stav; platí nejnovější.
- Vše ostatní (zvýraznění textu, razítka jiných programů a zvláštní druhy) se v kopii ponechá **beze změny**, jen pro čtení.
- Odkazy a formulářová pole se ponechají beze změny a nejsou uvedena v seznamu.

Opětovné uložení stejného souboru nic nezdvojí: poznámky, které MarkupCraft načetl, se nahradí, nepřidají se znovu.

## Co se nemění

Váš původní soubor na disku se nikdy nemění. Kopie není optimalizována na velikost, takže může být o něco větší než originál. Chráněná (šifrovaná) PDF nelze uložit.
