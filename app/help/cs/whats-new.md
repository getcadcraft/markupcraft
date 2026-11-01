---
title: Co je nového v 0.7
summary: RFI, předložené podklady a stavební deníky na nové kartě Terén, s termíny, zpožděním červeně, CSV a BCF, prací offline a Sloučit; asistenti, kteří nastavují stavy, odpovídají a exportují seznam; seznamy jednotek podle Nastavení; panely, které se schovají, a dialogy, které se přesouvají.
keywords: co je nového, novinky, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, terén, záznamy z terénu, rfi, žádost o informace, předložený podklad, stavební deník, po termínu, termín, přiřazeno mně, špendlík, sloučit, offline, tablet, bcf, csv, asistent, mcp, stav poznámky, odpověď, export, jednotky, seznamy jednotek, hvězdička, kalibrovat, kompaktní, panely, dialogy, portugalština
from: 142e1a1e
---

Toto se změnilo v MarkupCraftu 0.7 oproti 0.6. Hlavní novinkou jsou záznamy z terénu: RFI, předložené podklady a stavební deníky uložené uvnitř PDF vedle vašich poznámek.

## Nové

### RFI, předložené podklady a stavební deníky

- **Karta Terén.** Otevřete kartu {{ui:Terén}} a zvolte {{ui:RFI}}, {{ui:Předložený podklad}} nebo {{ui:Stavební deník}}. Klepněte nebo klikněte na list tam, kam RFI nebo předložený podklad patří, a místo označí špendlík; stavební deník se vloží na otevřený list bez špendlíku ({{ui:Umístit špendlík}} jej přidá později, {{ui:Přesunout špendlík}} přesune jakýkoli špendlík). Každý záznam má vlastní číslo (RFI-0001, SUB-0001, LOG-0001), název, text, stav, přiřazenou osobu, termín, vlákno odpovědí a seznam názvů příloh. Viz [Sledování RFI, předložených podkladů a stavebních deníků](topic:field-records).
- **Vidíte, co je pozdě.** Seznam filtrujte podle typu, stavu, termínu (po termínu, termín do 7 dnů, má nebo nemá termín), tohoto listu nebo všech listů, textového hledání nebo {{ui:Přiřazeno mně}}. Záznam po termínu, který stále čeká, je označen **Po termínu** červeně, v seznamu i na svém špendlíku. Viz [Najděte, na čem záleží](topic:field-records#find-what-matters).
- **CSV a BCF.** {{ui:CSV}} zapíše vypsané záznamy jako tabulku; {{ui:BCF}} je zapíše jako témata BCF, každé se snímkem svého místa na listu. Oba formáty respektují filtry. Viz [Export](topic:field-records#export).
- **Offline a dvě kopie sloučené v jednu.** Záznamy se ukládají uvnitř PDF a nepotřebují síť, takže tablet na stavbě je může přidávat, zodpovídat a ukládat. Zpátky v kanceláři {{ui:Sloučit}} připojí záznamy jiné kopie stejného PDF podle jejich identifikátorů, jako jeden krok zpět. Viz [Ukládání, offline a slučování kopií](topic:field-records#save-offline-and-merging-copies).

### AI asistenti

- **Víc, co asistent zvládne.** Váš vlastní asistent, připojený přes CadCraft Studio, nyní může nastavit stav poznámky (`markup_status`, zapsáno do jejího vlákna), odpovědět ve vlákně (`markup_reply`) a exportovat seznam {{ui:Poznámky}} jako CSV nebo BCF (`markups_export`, to, co seznam zobrazuje s filtry). Každá změna je jeden krok zpět, podepsaný jménem asistenta. Viz [Co může asistent požadovat](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## V každé aplikaci

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má po jednom seznamu pro délku, plochu, objem, úhel a sklon, s přesnými velikostmi podle definic jednotek (americká zeměměřická stopa je samostatná jednotka). Vypněte jednotky, které nikdy nepoužíváte, a z nabídek jednotek zmizí; označte jednu hvězdičkou a nová práce začíná v ní. Soubor si vždy ponechá vlastní jednotku. V MarkupCraftu se měřicí a polohové jednotky v {{ui:Nastavení}} › {{ui:MarkupCraft}} a jednotka v dialogu kalibrace řídí těmito přepínači, hvězdička nastavuje měřicí jednotku, dokud neuložíte vlastní nastavení MarkupCraftu, a skutečná vzdálenost, kterou při kalibraci zadáte, může nést značku libovolné jednotky, například `3 yd` nebo `1.5 km`. Viz [Jednotky, zadávané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se schovají.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vměstná na obrazovku víc (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má štíhlou záhlavní lištu: přetažením panel ukotvíte nebo necháte plovoucí, puštěním na lištu jiného panelu sdílejí jeden rám jako karty, připnutím se zasune k okraji, nebo jej skryjete a vrátíte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Dialog přetáhněte za záhlaví stranou od výkresu; vrátí se tam, kde jste jej nechali. Dvojitým kliknutím na záhlaví jej znovu vycentrujete. Viz [Přesunutí dialogu](common:arrange-panels#move-a-dialog).
- **Návody pro AI asistenty.** Deset vzorových požadavků pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, ptát se modelu, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý přehraný našimi testy. Aplikace neobsahují žádnou AI. Viz [Návody pro AI asistenty](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají v aplikacích každé slovo, jako koncepty, které ještě nezkontroloval rodilý mluvčí. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** říká, proč kontrola aktualizace selhala (zatím žádný soubor pro váš systém, žádná síť, špatný podpis), místo pouhého „Hotovo“, a přestane vracet kartu Co je nového, kterou jste zavřeli, dokud nevyjde novější vydání.

## Zatím není v této verzi

- **0.7 není podepsaná kódovým podpisem.** Podepisování a balíček Microsoft Store se přesunuly do 0.8, protože ověření certifikátu zatím nedoběhlo. Zkontrolujte SHA-256 vedle každého souboru na getcadcraft.com/download. Pokud ve Windows instalátor zastaví SmartScreen, zvolte {{ui:Další informace}} a poté {{ui:Přesto spustit}}. Na Macu poprvé klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a zatím neexistuje ani sestavení pro iPad nebo iPhone.
- Seznamy úhlu a sklonu v {{ui:Jednotky}} se ukládají, ale zatím je žádné pole nečte.
- Záznamy z terénu se nesdílejí v živé relaci CadCraft Studia (živé relace přenášejí jen poznámky); kopie spojte pomocí {{ui:Sloučit}}.
- Sloučení bere záznam jako celek z kopie změněné naposled: pokud dva lidé změnili různá pole jednoho záznamu, vyhrají pole pozdější kopie. Vlákna a názvy příloh se spojí.
- Přílohy jsou jen názvy; soubory zůstávají tam, kde jsou. Pro záznamy nejsou týmy, upozornění ani cloudové projekty a asistenti zatím nemají pro záznamy žádné nástroje.
- Záznamy z terénu byly vyzkoušeny v prohlížeči ve velikostech telefonu a tabletu s odpojenou sítí, ale zatím ne ručně na skutečném tabletu.
- Stále z 0.6: otáčení objektů na stránce do libovolného úhlu, kreslení nových tvarů přímo do stránky, změna písma nebo velikosti čáry a text, který se zalamuje na více řádků. Uložená kopie s úpravami stránek zatím nebyla otevřena v Acrobatu.
- Stále z 0.5: vrácení změny stránky (například přidání prázdné stránky), čtení textu z naskenovaných listů a živé relace mimo vaši vlastní síť.

Vše ostatní je v tématu [Co ještě není hotovo](topic:not-built-yet).
