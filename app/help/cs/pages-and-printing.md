---
title: Tisk a změna stran PDF
summary: Tiskněte listy s jejich poznámkami a otáčejte, přesouvejte, vkládejte, mažte nebo vyjímejte strany otevřeného PDF.
keywords: tisk, tiskárna, papír, strany, strana, otočit, přeřadit, přesunout stranu, vložit, přidat stranu, prázdná strana, smazat stranu, odebrat stranu, vyjmout, rozdělit, operace se stranami
from: 81832d9b
---

Nabídka {{ui:Pages}} ve skupině {{ui:File}} pracuje s PDF, do kterého otevřený list patří. Vaše PDF na tomto počítači se nikdy nemění: změny jsou součástí kopie, kterou uložíte.

## Tisk

1. Stiskněte {{key:Mod+P}}, nebo zvolte {{ui:Pages}} a pak {{ui:Print…}}.
2. Když je otevřeno více listů, vyberte, co se má vytisknout: {{ui:This sheet}}, každou stranu tohoto souboru, celou sadu, nebo strany, které napíšete (například `1-3, 5`).
3. Zvolte {{ui:Print}}. Otevře se dialog tiskárny vašeho prohlížeče: tam vyberte tiskárnu, papír i měřítko.

Poznámky se tisknou tak, jak vypadají na listu: jsou vykresleny do stran kopie, která jde na tiskárnu. Komentáře vytvořené jinými programy se tisknou tak, jak to říká jejich PDF.

:::safari firefox
Pokud váš prohlížeč neumí tisknout z vnitřku stránky, listy se otevřou jako PDF na nové kartě. Tiskněte odtamtud.
:::

## Otočení strany

Zvolte {{ui:Pages}} a pak {{ui:Rotate page clockwise}} nebo {{ui:Rotate page counterclockwise}}. Otevřený list se otočí o čtvrt otáčky. Jeho poznámky zůstanou tam, kde byly na výkrese, a text, který jste napsali, se otočí spolu se stranou, takže stále čte vzpřímeně.

## Přesun strany

Zvolte {{ui:Pages}} a pak {{ui:Move page earlier}} nebo {{ui:Move page later}}. Otevřený list si vymění místo se sousedem ve svém PDF. Jeho poznámky, měřítko i číslo listu jdou s ním.

## Vložení stran

- {{ui:Insert pages from a PDF…}} vloží každou stranu jiného PDF za otevřený list.
- {{ui:Insert a blank page}} přidá prázdnou stranu stejné velikosti za otevřený list, pro náčrty a poznámky. V sadě vytvořené pomocí {{ui:New}} má i mřížku sady.
- V sadě vytvořené pomocí {{ui:New}} přidá {{ui:Add a blank page}} pod seznamem {{ui:Sheets}} další stranu jako ostatní na konec. Viz [Začátek s prázdnými stranami](topic:open-a-plan-set#start-with-blank-pages).

Vložené strany dostanou jako štítek číslo strany, dokud je nepřejmenujete. Viz [Přejmenování listu](topic:open-a-plan-set#rename-a-sheet).

## Smazání stran

1. Zvolte {{ui:Pages}} a pak {{ui:Delete pages…}}.
2. Zadejte čísla stran tohoto PDF, například `3` nebo `2-4`. Strana otevřeného listu je předvyplněna.
3. Zvolte {{ui:Delete pages}}. Pokud tyto strany obsahují poznámky, MarkupCraft řekne kolik a zeptá se znovu.

PDF si ponechá alespoň jednu stranu. Chcete-li zahodit celý soubor, zavřete sadu a otevřete soubory, které ještě potřebujete.

## Vyjmutí stran

Zvolte {{ui:Pages}} a pak {{ui:Extract pages…}} a zadejte strany. Stáhnou se jako nové PDF pojmenované "<file> (pages 1-3).pdf" s jejich poznámkami jako komentáři, které můžete dál upravovat. Otevřený soubor zůstane beze změny.

## Dobré vědět

- **Zpět se zastaví u změny stránky.** {{key:Mod+Z}} vezme zpět poznámky nakreslené po ní, ale ne samotnou změnu stránky ani nic před ní. Chcete-li začít znovu od původního PDF, zavřete bez uložení.
- Čísla stran počítají strany jednoho PDF, ne celé sady. Přesun strany ji ponechá v jejím vlastním souboru.
- Změněné strany jsou neuložená práce: {{ui:Save}} stáhne přeuspořádanou kopii a při odchodu se nejprve zeptá.
