---
title: Truhla s nástroji
summary: Uložte stylizovanou poznámku jako opakovaně použitelný nástroj, kreslete s ním a sdílejte truhlu s kanceláří jako soubor.
keywords: truhla s nástroji, nástroje, sada nástrojů, vlastní nástroje, uložené poznámky, oblíbené, firemní standard, import, export, sdílení, json
from: 7dfa36e0
---

Karta {{ui:Nástroje}} obsahuje vaši **truhlu s nástroji**: poznámky uložené s jejich vzhledem, připravené ke kreslení. Nástroj si uchová druh poznámky, barvu, tloušťku čáry, výplň, průhlednost, velikost textu a předmět, plus text razítka, skupinový název počtu nebo výchozí text textového pole či popisku.

## Nástroje, se kterými začínáte

Nová truhla jich má šest: "Revizní oblak" (červený), "Dotazový oblak" (modrý), "Žlutý zvýrazňovač", "RFI popisek" (modrý, začíná textem "RFI: "), "Ověřit na místě" (oranžový popisek s textem "Ověřit na místě.") a "Schváleno s poznámkami" (razítko).

## Kreslení nástrojem

1. Otevřete kartu {{ui:Nástroje}}.
2. Klikněte na nástroj. Vypadá stisknutě a odpovídající nástroj na panelu nástrojů se zapne.
3. Kreslete obvyklým způsobem. {{ui:Vlastnosti}} říká: Kreslení nástrojem "<nástroj>" z truhly s nástroji.

Zatímco je nástroj z truhly zapnutý, změny, které provedete v {{ui:Vlastnosti}} před kreslením, se použijí jen na tento nástroj pro nyní, bez změny uloženého nástroje nebo vašich obvyklých nastavení nástrojů. Kliknutí na tlačítko panelu nástrojů nebo stisknutí klávesy nástroje vás vrátí k běžnému nástroji.

## Uložení vlastního nástroje

1. Nakreslete poznámku a upravte ji podle svého: barva, čára, výplň, předmět, text razítka.
2. Vyberte ji.
3. Zvolte {{ui:Uložit vybrané jako nástroj}} na kartě {{ui:Nástroje}}, nebo {{ui:Uložit jako nástroj}} v {{ui:Vlastnosti}}.
4. Napište {{ui:Název nástroje}} a zvolte {{ui:Uložit nástroj}}.

Výsledek: nástroj se přidá na konec truhly a karta {{ui:Nástroje}} se otevře, aby ho ukázala.

## Razítka vytvořená z výběru

Vyberte více poznámek (nebo obsah stránky nástrojem {{ui:Obsah}}) a zvolte {{ui:Uložit výběr jako razítko…}} v {{ui:Více}} nebo v kontextové nabídce. Truhla dostane jedno razítko, které je všechny obsahuje ("Razítko: 3 poznámky dohromady"). Klikněte na něj a pak klikněte na libovolný list: poznámky přistanou společně, vycentrované tam, kam kliknete, jako nové poznámky s vaším jménem; obsah stránky se tam nakreslí do stránky. Tato razítka se ukládají a sdílejí s truhlou jako každý jiný nástroj.

## Odebrání nástroje

Zvolte × na konci řádku nástroje a pak {{ui:Odebrat}}. Poznámky už nakreslené tímto nástrojem zůstanou beze změny.

## Kde se truhla uchovává

Truhla je uložena **v tomto prohlížeči, na tomto počítači**. Jiný prohlížeč nebo počítač má vlastní truhlu (začínající šesti výchozími nástroji), soukromé okno ji zapomene při zavření a vymazání dat tohoto webu v nastavení prohlížeče ji smaže.

Pokud ji prohlížeč neuloží (ukládání vypnuté nebo plné), stavový řádek říká: "Truhlu s nástroji nelze v tomto prohlížeči uchovat (ukládání je vypnuté nebo plné). Exportujte ji, aby se uchovala."

:::safari
Safari může smazat uložená data webu, pokud web delší dobu nepoužíváte. Exportujte si truhlu občas, abyste ji mohli znovu importovat.
:::

**Exportujte truhlu jako zálohu**, zejména poté, co vytvoříte nástroje, na kterých závisíte.

## Sdílení truhly s kanceláří

1. Nastavte nástroje jednou.
2. Zvolte {{ui:Exportovat}}. Dostanete "MarkupCraft tool chest.json".
3. Uložte tento soubor tam, kde kancelář uchovává své standardy, nebo ho rozešlete.
4. Každý další zvolí {{ui:Importovat}} na kartě {{ui:Nástroje}} a vybere soubor.

Výsledek: "Importováno 12 nástrojů ze souboru "MarkupCraft tool chest.json"." Nástroje pocházející ze stejné truhly nahradí své starší kopie, takže import aktualizované firemní truhly tyto nástroje obnoví místo jejich zdvojení; nové nástroje se přidají. Truhla pojme až 500 nástrojů.

MarkupCraft zkontroluje každou hodnotu v importovaném souboru a přeskočí to, co nelze použít ("2 přeskočeno (nelze použít)"). Soubory, které nejsou truhlou, se odmítnou: "Tento soubor není truhla s nástroji MarkupCraft." nebo "Tento soubor není truhla s nástroji (není to JSON)."

Soubory truhel s nástroji z jiných programů na poznámky nelze importovat.
