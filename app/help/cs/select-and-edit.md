---
title: Vybrat, přesunout a změnit poznámky
summary: Vybírejte poznámky kliknutím nebo oknem, přesouvejte, měňte velikost, jemně posouvejte, vyjměte, kopírujte, vložte, vložte na stejné místo, duplikujte, smažte a vraťte zpět.
keywords: vybrat, výběr, vybrat vše, okno, křížení, přesunout, úchyty, jemný posun, vyjmout, kopírovat, vložit, vložit na stejné místo, jiná karta, smazat, zpět, znovu, upravit
from: 62c7def3
---

Nejdřív zvolte {{ui:Výběr}} ({{key:V}}). Stisknutím {{key:Esc}} se tam také dostanete: první stisk zruší výběr, další přepne zpět na {{ui:Výběr}}.

## Výběr poznámek

:::mouse
- **Jedna poznámka:** klikněte na ni. Objeví se přerušovaný rámeček a úchyty a {{ui:Vlastnosti}} ji zobrazí.
- **Přidat nebo odebrat jednu:** podržte {{key:Shift}} a klikněte.
- **Celá uvnitř okna:** táhněte zleva doprava po prázdném místě listu. Vybrány jsou jen poznámky zcela uvnitř rámečku (plný obrys).
- **Dotýkající se okna:** táhněte zprava doleva. Vybrány jsou všechny poznámky, kterých se rámeček dotkne (zelený přerušovaný obrys).
- **Vše na tomto listu:** {{key:Mod+A}}, nebo {{ui:Více}} a pak {{ui:Vybrat vše}} ve skupině {{ui:Úpravy}} na panelu nástrojů.
- **Nic:** klikněte na prázdné místo, stiskněte {{key:Esc}}, nebo zvolte {{ui:Více}} a pak {{ui:Zrušit výběr}}.
:::

:::touch
- **Jedna poznámka:** klepněte na ni.
- **Více:** táhněte jedním prstem po prázdné části listu a nakreslete okno. Zleva doprava vybere to, co je celé uvnitř; zprava doleva vybere to, čeho se okno dotkne.
- Klepnutí s podrženým {{key:Shift}} funguje jen s připojenou klávesnicí. Bez ní použijte okno.
- Jeden prst nikdy neposouvá zobrazení v {{ui:Výběr}}; použijte dva prsty, nebo nástroj {{ui:Posun}}.
:::

Komentáře jen pro čtení, které přišly se souborem, zobrazí šedý přerušovaný rámeček bez úchytů. Lze je vybrat a odpovědět na ně, ale nelze je měnit.

## Přesun a změna velikosti

- **Přesun:** táhněte vybranou poznámku. Podržte {{key:Shift}} pro pohyb jen po násobcích 45°. Více vybraných poznámek se přesouvá společně.
- **Změna velikosti:** když je vybrána jedna poznámka, táhněte úchyt. Čtvercové úchyty mění velikost rámečku (podržte {{key:Shift}}, aby se zachovaly poměry). Kulaté úchyty posouvají jeden rohový bod čáry, lomené čáry, mnohoúhelníku, oblaku nebo měření (podržte {{key:Shift}} pro 45°). Kosočtverečné úchyty posouvají hrot a zlom výnosky. Tahy pera se škálují podle svého rámečku.
- **Jemný posun:** stiskněte šipky a výběr se posune o jeden pixel obrazovky; podržte {{key:Shift}} pro deset pixelů. Každý stisk je jeden krok zpět.

## Změna textu nebo vzhledu

- **Text, výnosky a poznámky:** dvojklikněte na poznámku, nebo stiskněte {{key:Enter}}, nebo zvolte {{ui:Upravit na listu}} v {{ui:Vlastnosti}}. Napište text, pak klikněte mimo něj nebo stiskněte {{key:Mod+Enter}}. {{key:Esc}} úpravu zruší.
- **Razítka:** v {{ui:Vlastnosti}} vyberte jiné razítko (dvojklik otevře {{ui:Vlastnosti}} za vás).
- **Styl:** {{ui:Barva}}, {{ui:Tloušťka čáry}}, {{ui:Výplň}}, {{ui:Krytí}} a {{ui:Velikost textu}} pod „Styl“ v {{ui:Vlastnosti}}. Při výběru více poznámek {{ui:Vlastnosti}} zobrazí druhy, které jste vybrali, a změní je všechny najednou.

## Kopírování, vložení a duplikace

Skupina {{ui:Úpravy}} na panelu nástrojů obsahuje {{ui:Kopírovat}} a {{ui:Vložit}}. Její nabídka {{ui:Více}} obsahuje všechny tyto příkazy, každý s klávesovou zkratkou.

| Příkaz | Klávesa | Co dělá |
|---|---|---|
| {{ui:Vyjmout}} | {{key:Mod+X}} | Zkopíruje vybrané poznámky a smaže je |
| {{ui:Kopírovat}} | {{key:Mod+C}} | Zkopíruje vybrané poznámky |
| {{ui:Vložit}} | {{key:Mod+V}} | Vloží kopii na list, na kterém jste (kde, viz níže) |
| {{ui:Vložit na stejné místo}} | {{key:Mod+Shift+V}} | Vloží kopii přesně tam, odkud byla zkopírována: na stejném listu přes originál; na jiném listu na stejné místo na papíru |
| {{ui:Duplikovat}} | {{key:Mod+D}} | Vytvoří kopii výběru o kousek níž a vpravo, aniž by se dotkla dříve zkopírovaného |

**Kam Vložit umístí kopii:**

- {{key:Mod+V}} s ukazatelem na listu vloží kopii vycentrovanou tam, kde je ukazatel. Přesuňte ukazatel, znovu stiskněte {{key:Mod+V}} a umístíte další.
- Tlačítko {{ui:Vložit}} (pak je ukazatel na panelu nástrojů), nebo {{key:Mod+V}} s ukazatelem mimo list, vloží kopii o kousek níž a vpravo od originálu. Každé další vložení stejné kopie posune o kousek dál, takže se kopie navzájem nezakrývají. Na jiném listu první vložení přistane tam, kde byl originál na svém listu. Pokud je to místo mimo zobrazení, kopie přistane doprostřed zobrazení.
- Aby {{key:Mod+V}} vždy vložilo vedle originálu, zvolte {{ui:Vedle kopie}} pod {{ui:Vložit}} v [nastavení MarkupCraftu](topic:settings).

Vložené poznámky jsou vybrány, takže je můžete hned táhnout. Každé vyjmutí, vložení nebo duplikace je jeden krok zpět: {{key:Mod+Z}} odebere celé vložení.

Vložené kopie jsou nové poznámky: dostanou vaše jméno, dnešní datum, stav Otevřeno, žádné číslo položky závady a prázdné vlákno. Jejich druh, tvar, styl, text a komentář se přenesou. Komentáře jen pro čtení, které přišly se souborem, nelze kopírovat ani vyjmout.

**Mezi kartami:** to, co zkopírujete, se uchovává také v tomto prohlížeči, takže jiná karta MarkupCraftu ve stejném prohlížeči to může vložit. Kopírování poznámek nepoužívá schránku počítače: nelze je vložit do jiného programu a text zkopírovaný jinde se nevloží jako poznámka.

**Nabídka pravým tlačítkem:** klikněte pravým tlačítkem na poznámku (nebo prázdný papír) pro {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit sem}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Uložit výběr jako razítko…}}, {{ui:Při uložení slít se stránkou}}, {{ui:Vložit sem obrázek…}} a {{ui:Vybrat vše}}. Pravé kliknutí na nevybranou poznámku ji nejprve vybere. Tažení pravým tlačítkem stále posouvá zobrazení. Na dotykové obrazovce dlouhé stisknutí poznámky otevře stejnou nabídku (na textu spustí úpravu textu). Klávesa nabídky nebo {{key:Shift+F10}} ji otevře u výběru.

Obsah stránky vybraný nástrojem {{ui:Obsah}} se také kopíruje a vkládá: viz [Změna vlastních čar, obrázků a textu stránky](topic:page-content).

Chcete-li zkopírovat část samotné stránky jako obrázek (obdélník, elipsu nebo volný tvar), nebo jako průhledný překryv pro jiný list či aplikaci, viz [Zkopírovat oblast stránky nebo překryv](topic:copy-an-area).

## Smazání

Stiskněte {{key:Delete}} nebo {{key:Backspace}}, zvolte {{ui:Více}} a pak {{ui:Smazat}} na panelu nástrojů, nebo {{ui:Smazat}} v {{ui:Vlastnosti}}. Stavový řádek ukáže, kolik poznámek bylo smazáno. Komentáře jen pro čtení ze souboru se nikdy nemažou („ponechány jako v souboru“).

## Zpět a znovu

- {{key:Mod+Z}} vrací zpět, {{key:Mod+Y}} nebo {{key:Mod+Shift+Z}} provádí znovu. Na panelu nástrojů jsou {{ui:Zpět}} a {{ui:Znovu}}.
- Stavový řádek říká, co bylo vráceno („Vráceno: přesun poznámky.“).
- Zpět se vztahuje na každou změnu poznámek, stavů, odpovědí, položek závad, měřítek listů a názvů listů, až do 500 kroků.
- Historie se vymaže, když zavřete sadu.

## Kopírování poznámek na jiné listy

Chcete-li stejné razítko, poznámku nebo oblak na několika listech, vyberte je (nebo více poznámek) a zvolte {{ui:Kopírovat na další listy…}} v {{ui:Vlastnosti}}. Zaškrtněte listy, nebo {{ui:Všechny listy}}, a zvolte {{ui:Kopírovat}}. Každý list dostane kopii na stejném místě stránky, podepsanou vaším jménem. Jedním {{key:Mod+Z}} je odstraníte všechny.
