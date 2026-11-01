---
title: Soubory, které MarkupCraft otevírá a ukládá
summary: Dovnitř PDF, ven kopie PDF s poznámkami, plus soubory CSV, BCF a sady nástrojů; kam který míří, online i offline.
keywords: pdf, otevřít, uložit, export, stáhnout, csv, bcf, bcfzip, json, sada nástrojů, typy souborů, formáty, nahrát, heslo, šifrovaný
from: b3045b4c
---

## Co MarkupCraft otevírá

| Soubor | Jak | Co se stane |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otevřít}}, {{key:Mod+O}} nebo pustit na plochu listu. Více souborů najednou je v pořádku. | Každá strana se stane listem. Poznámky, které už v souboru jsou, se načtou zpět (viz níže). |
| Sada nástrojů (`.json`) | Karta {{ui:Nástroje}}, pak {{ui:Importovat}} | Nástroje se přidají do vaší sady. Viz [Sada nástrojů](topic:tool-chest). |

Cokoli jiného je odmítnuto zprávou „MarkupCraft otevírá soubory PDF.“ ve stavovém řádku. Pokud pustíte směs, soubory PDF se otevřou a stavový řádek uvede, kolik souborů PDF nebylo.

### Poznámky, které už v PDF jsou

- **Poznámky uložené MarkupCraftem** se vrátí přesně: typ, styl, autor, data, stav, odpovědi, číslo závady, měřítko listu i názvy listů, které jste zadali.
- **Komentáře z jiných programů pro PDF** se také načtou. Obdélníky, elipsy, úsečky a šipky, mnohočáry, mnohoúhelníky, tahy pera (inkoust), textová pole a lepicí poznámky se stanou běžnými, upravitelnými poznámkami MarkupCraftu. Jejich odpovědi a revizní stavy se přenesou také.
- **Vše ostatní** (zvýraznění textu vytvořená výběrem textu, razítka jiných programů a další druhy) se zobrazí tak, jak je, a je označeno jako jen pro čtení. Můžete to vybrat, vidět v seznamu poznámek a odpovědět na to, ale ne přesunout, změnit ani smazat.
- Odkazy a pole formulářů zůstávají beze změny a nejsou v seznamu.
- Měřítko uložené jiným programem (měřicí výřez) se použije jako měřítko listu, pokud MarkupCraft jeho jednotce rozumí.

### Soubory, které se neotevřou

- PDF, které vyžaduje heslo: „‚název‘ se bez hesla nedá otevřít. Otevřete nechráněnou kopii.“
- Poškozený soubor nebo soubor, který ve skutečnosti není PDF: „Soubor ‚název‘ nelze načíst jako PDF (…)“.
- PDF, které se otevře, ale je chráněné proti změnám, se otevře normálně. Jeho uložení je odmítnuto (viz níže).

Když otevíráte více souborů najednou, otevřou se ty, které fungují, a okno „Některé soubory se neotevřely“ uvede ostatní.

## Co MarkupCraft ukládá

Uložení je vždy **stažení** nového souboru. Webová stránka nemůže přepsat soubor ve vašem počítači a MarkupCraft nikdy nemění váš originál.

| Zvolíte | Dostanete | Poznámky |
|---|---|---|
| {{ui:Uložit}} ({{key:Mod+S}}) | „<název> (marked up).pdf“ | Kopii původního PDF se všemi poznámkami zapsanými jako skutečné komentáře PDF. Při opětovném uložení souboru „(marked up)“ zůstane stejný název; nikdy z něj nevznikne „(marked up) (marked up)“. Viz [Uložení PDF s poznámkami](topic:save-the-marked-up-pdf). |
| Karta {{ui:Poznámky}}, pak {{ui:CSV}} | „<název> markups.csv“ | Poznámky tak, jak jsou vypsány (platí filtry). |
| Karta {{ui:Poznámky}}, pak {{ui:BCF}} | „<název> markups.bcfzip“ | BCF 2.1 pro nástroje BIM koordinace, k poznámce vždy jeden snímek. Viz [Základy BCF](topic:bcf-basics). |
| Karta {{ui:Seznam závad}}, pak {{ui:Exportovat CSV}} | „<název> punch list.csv“ | Položky závad v pořadí podle čísla. |
| Karta {{ui:Nástroje}}, pak {{ui:Exportovat}} | „MarkupCraft tool chest.json“ | Vaše sada nástrojů ke sdílení nebo uschování. |

„<název>“ je název prvního otevřeného PDF bez „.pdf“.

Soubory CSV se otevřou v jakékoli tabulce. Jsou v UTF-8 se značkou, kterou tabulkové procesory hledají, takže jména s diakritikou vyjdou správně. Buňka, která začíná znakem =, +, - nebo @, dostane na začátek apostrof, aby ji tabulka nikdy nespustila jako vzorec.

## Kam stažené soubory míří

Rozhoduje váš prohlížeč: obvykle složka Stažené soubory, nebo se zeptá pokaždé, pokud jej tak nastavíte. Viz [Prohlížeče a počítače](common:browsers#what-differs-between-browsers).

:::chromium
Když uložíte najednou všechny změněné soubory sady, Chrome a Edge se mohou zeptat, zda tento web smí stahovat více souborů. Zvolte {{ui:Povolit}}, jinak dostanete jen první kopii.
:::

:::safari
Na iPadu se Safari zeptá před každým stažením a soubor uloží do aplikace Soubory, do složky Stažené. Na Macu jde soubor do složky nastavené v nastavení Safari.
:::

## Online a offline

- **Vaše soubory PDF nikdy neopustí tento počítač**, online ani offline. Nikam se nenahrává.
- Čtečka PDF se načte při prvním otevření PDF („Načítám čtečku PDF…“) a zapisovač PDF při prvním uložení („Načítám zapisovač PDF…“) nebo při otevření souboru, který už obsahuje komentáře.
- S připojením se oba načítají z webu.
- **Chcete-li pracovat bez připojení,** zvolte v liště nahoře, dokud jste online, {{ui:Uložit pro offline}}. Tlačítko počítá „Ukládání N z M“ a pak zobrazí „Připraveno offline“. Kopie obsahuje čtečku i zapisovač PDF (celkem asi 6 MB) a tuto nápovědu, takže potom v tomto prohlížeči funguje offline otevírání, poznámky i ukládání PDF.
- Pokud tlačítko říká „Nepodařilo se uložit“, některé soubory se nestáhly: zkontrolujte připojení a klikněte znovu. Pokud říká „Offline není dostupné“, toto okno prohlížeče nemůže offline kopii uchovat (soukromá okna a některé spravované počítače); použijte běžné okno.
- Chcete-li kopii aktualizovat nebo zahodit, klikněte na „Připraveno offline“ a zvolte „Uložit znovu (získat nejnovější verzi)“ nebo „Odebrat offline kopii“. Více v tématu [Práce offline](common:offline).

:::offline
Jste offline. Pokud lišta nahoře říká „Připraveno offline“, vše funguje, včetně ukládání. Pokud ne a v této kartě jste ještě neukládali, {{ui:Uložit}} může selhat se zprávou „Zapisovač PDF nelze načíst“. Vaše poznámky jsou v kartě stále: nechte ji otevřenou, připojte se zpět a zvolte {{ui:Uložit}} znovu.
:::

## Co je dobré vědět

- Velké sady výkresů se otevírají delší dobu: MarkupCraft čte text každé strany, aby našel čísla listů. Stavový řádek průběžně počítá listy.
- Otevřete-li stejné PDF dvakrát, jeho listy se přidají dvakrát. Pokud se to stane, zavřete sadu a otevřete ji znovu.
- {{ui:Zavřít}} zavře všechny otevřené soubory najednou. Pokud některé mají neuložené poznámky, zeptá se: {{ui:Zrušit}}, {{ui:Zavřít bez uložení}} nebo {{ui:Nejdřív uložit kopie}}.
- Ukládání do cloudu zatím není k dispozici a zatím nejsou ani desktopové sestavy. Soubory PDF uchovávejte spolu s ostatními soubory projektu a zálohujte je jako obvykle. Viz [Kam míří vaše soubory](common:your-files).
