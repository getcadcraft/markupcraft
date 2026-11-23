---
title: Co je nového ve verzi 0.7 (starší)
summary: RFI, předložené podklady a stavební deníky v nové kartě Terén, s termíny, zpožděním zvýrazněným červeně, CSV a BCF, práce offline a sloučení; asistenti, kteří nastavují stavy, odpovídají a exportují seznam; seznamy jednotek podle Nastavení; panely, které se uklidí, a dialogy, které se dají přesouvat.
keywords: co je nového 0.7, starší vydání, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, terén, záznamy terénu, rfi, žádost o informace, předložený podklad, stavební deník, deník stavby, po termínu, termín, přiřazeno mně, špendlík, sloučit, offline, tablet, bcf, csv, asistent, mcp, stav poznámky, odpověď, export, jednotky, seznamy jednotek, hvězdička, kalibrovat, kompaktní, panely, dialogy, portugalština
from: ca5ba1f0
---

Toto se změnilo v MarkupCraftu 0.7 oproti 0.6. Hlavní novinkou jsou terénní záznamy: RFI, předložené podklady a stavební deníky uložené uvnitř PDF vedle vašich poznámek.

## Novinky

### RFI, předložené podklady a stavební deníky

- **Karta Terén.** Otevřete kartu {{ui:Terén}} a vyberte {{ui:RFI}}, {{ui:Předložený podklad}} nebo {{ui:Stavební deník}}. Klepněte nebo klikněte na list, kam RFI nebo předložený podklad patří, a špendlík označí místo; stavební deník se přidá na otevřený list bez špendlíku ({{ui:Umístit špendlík}} přidá špendlík později, {{ui:Přesunout špendlík}} přesune libovolný špendlík). Každý záznam má vlastní číslo (RFI-0001, SUB-0001, LOG-0001), název, text, stav, přiřazení, termín, vlákno odpovědí a seznam názvů příloh. Viz [Sledování RFI, předložených podkladů a stavebních deníků](topic:field-records).
- **Zjistěte, co se zpožďuje.** Filtrujte seznam podle typu, stavu, termínu (po termínu, termín za 7 dní, s termínem nebo bez termínu), tohoto listu nebo všech listů, podle textového hledání nebo {{ui:Přiřazeno mně}}. Záznam po termínu, který stále čeká, je označen **Po termínu** červeně v seznamu i u svého špendlíku. Viz [Najděte, co je důležité](topic:field-records#find-what-matters).
- **CSV a BCF.** {{ui:CSV}} zapíše vypsané záznamy jako tabulku; {{ui:BCF}} je zapíše jako témata BCF, každé se snímkem svého místa na listu. Obojí respektuje filtry. Viz [Export](topic:field-records#export).
- **Offline a dvě kopie spojené v jednu.** Záznamy se ukládají uvnitř PDF a nepotřebují síť, takže tablet na stavbě je může přidávat, odpovídat na ně a ukládat. Po návratu do kanceláře {{ui:Sloučit}} připojí záznamy jiné kopie téhož PDF podle jejich ID jako jeden krok zpět. Viz [Uložení, offline režim a slučování kopií](topic:field-records#save-offline-and-merging-copies).

### Asistenti AI

- **Více toho asistent umí.** Váš vlastní asistent připojený přes CadCraft Studio může nyní nastavit stav poznámky (`markup_status`, zapsaný v jejím vláknu), odpovídat ve vláknu (`markup_reply`) a exportovat seznam {{ui:Poznámky}} jako CSV nebo BCF (`markups_export`, co seznam ukazuje s filtry). Každá změna je jeden krok zpět a je podepsána jménem asistenta. Viz [Co může asistent požadovat](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má samostatný seznam pro délku, plochu, objem, úhel a sklon, s přesnými velikostmi podle definic jednotek (americká geodetická stopa je vlastní jednotka). Vypněte jednotky, které nepoužíváte, a zmizí ze seznamů; jednu označíte hvězdičkou a nová práce v ní začne. Soubor si vždy zachovává vlastní jednotku. V MarkupCraftu měřicí a polohové jednotky v {{ui:Nastavení}} › {{ui:MarkupCraft}} a jednotka v dialogu kalibrace sledují přepínače; hvězdička nastavuje měřicí jednotku, dokud neuložíte vlastní nastavení MarkupCraftu; a skutečná vzdálenost, kterou zadáte při kalibraci, může nést označení libovolné jednotky, například `3 yd` nebo `1.5 km`. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se uklidí.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} se na obrazovku vejde víc (dotykové obrazovky a telefony si zachovají velká tlačítka). Každý boční panel má úzký pruh názvu: přetažením ho můžete ukotvit nebo uvolnit jako plovoucí, pustit na pruh jiného panelu a sdílet s ním jeden rámec jako karty, připnout ho, aby se odsunul k okraji, nebo ho skrýt a vrátit z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se dají přesouvat.** Přetáhněte dialog za jeho pruh názvu mimo výkres; vrátí se tam, kde jste ho nechali. Dvojklikem na pruh názvu ho znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Postupy pro asistenty AI.** Deset ověřených zadání pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, položit modelu otázky, sečíst výkaz výměr, vyzkoušet variantu dílu…), u každého s nástroji, které volá, a oprávněními, která potřebuje; každé je zopakováno našimi testy. Aplikace žádnou AI neobsahují. Viz [Postupy pro asistenty AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nově v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Tento jazyk, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají všechna slova aplikací, jako koncepty, které zatím nepřečetl rodilý mluvčí. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** řekne, proč kontrola aktualizací selhala (pro váš systém zatím není soubor, chybí síť, neplatný podpis), místo aby jen napsal „Hotovo“, a přestane vracet kartu Co je nového, kterou jste zavřeli, dokud nebude novější vydání.

## Zatím není v této verzi

- **Verze 0.7 není podepsána kódem.** Podepisování a balíček Microsoft Store se přesunuly do verze 0.8, protože ověření certifikátu ještě nedorazilo. Zkontrolujte SHA-256 u každého souboru na getcadcraft.com/download. Ve Windows, pokud SmartScreen instalaci zastaví, zvolte {{ui:Více informací}}, pak {{ui:Přesto spustit}}. Na Macu při prvním spuštění klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v obchodě s aplikacemi a zatím neexistuje sestavení pro iPad ani iPhone.
- Seznamy úhlů a sklonů v {{ui:Jednotky}} se ukládají, ale zatím je žádná část aplikace nečte.
- Terénní záznamy se nesdílejí v živé relaci CadCraft Studio (živé relace přenášejí jen poznámky); kopie spojte pomocí {{ui:Sloučit}}.
- Sloučení převezme záznam jako celek z kopie, která byla změněna naposledy: pokud dva lidé změnili různá pole jednoho záznamu, platí pole z pozdější kopie. Vlákna a názvy příloh se spojí.
- Přílohy jsou jen názvy; soubory zůstávají tam, kde jsou. Pro záznamy nejsou žádné týmy, oznámení ani cloudové projekty a asistenti zatím pro záznamy nemají žádné nástroje.
- Terénní záznamy byly testovány v prohlížeči ve velikostech telefonu a tabletu bez sítě, ale ještě ne ručně na skutečném tabletu.
- Stále z verze 0.6: otáčení objektů stránky do libovolného úhlu, kreslení nových tvarů přímo do stránky, změna písma nebo velikosti čáry a text přetékající přes více řádků. Uložená kopie s úpravami stránky ještě nebyla otevřena v Acrobatu.
- Stále z verze 0.5: vrácení změny stránky (například přidání prázdné stránky), čtení textu ze skenovaných listů a živé relace mimo vlastní síť.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet).
