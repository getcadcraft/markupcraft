---
title: Kopírování oblasti stránky nebo překryvu
summary: Zkopírujte část listu obdélníkem, elipsou nebo volným tvarem a vložte ji do jiného listu, CadCraftu, BimCraftu, DetailCraftu nebo jakéhokoli programu ve správné velikosti; zkopírujte ji jako průhledný překryv a zarovnejte obrázek podle dvou bodů.
keywords: kopírovat oblast, oblast, oříznutí, výstřižek, snímek, schránka, region, obdélník, elipsa, kruh, volný tvar, lasso, obrázek, obraz, png, překryv, průhledný, prosvítající, zabarvení, krytí, vložit, skutečná velikost, měřítko, zarovnat, dva body, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Zvolte {{ui:Více}} › {{ui:Kopírovat oblast stránky…}}. Nad listem se otevře lišta.

## Výběr oblasti

Na liště zvolte {{ui:Obdélník}}, {{ui:Elipsa}} nebo {{ui:Volný tvar}} a pak táhněte po listu:

- **Obdélník:** přetáhněte rámeček kolem části ke zkopírování.
- **Elipsa:** přetáhněte rámeček; elipsa uvnitř se zkopíruje a rohy mimo ni jsou průhledné.
- **Volný tvar:** nakreslete obrys kolem části ke zkopírování; tvar se uzavře sám. Vně je průhledný.

Táhněte znovu, chcete-li začít od začátku, nebo stiskněte {{key:Esc}}.

## Kopírování

- {{ui:Zahrnout poznámky}} zkopíruje vaše poznámky spolu se stránkou; odškrtněte to pro čistý výkres.
- {{ui:Rozlišení}}: {{ui:Jako na obrazovce}}, 72, 150 nebo 300 dpi. Obrázek se udrží pod 3 MB; když by velká oblast ve vysokém rozlišení tuto hranici překročila, rozlišení se sníží a stavový řádek říká na jaké.
- {{ui:Kopírovat}} (nebo {{key:Mod+C}}, případně {{key:Enter}}) dá oblast do schránky jako obrázek PNG, který se vloží do Wordu, e-mailu, jiných PDF programů a kreslicích programů.
- {{ui:Uložit jako PNG}} místo toho stáhne obrázek pro program, který při vložení průhledné části vynechá.

## Kopírovat jako překryv

{{ui:Kopírovat jako překryv}} také zprůhlední bílý papír, takže zůstanou jen čáry. {{ui:Barva}} dá každé čáře jednu barvu (červenou, modrou, zelenou, oranžovou nebo fialovou), aby překryv vynikl nad výkresem pod ním; {{ui:Vlastní barvy}} je ponechá. {{ui:Intenzita}} je síla, s jakou začne při vložení v našich aplikacích (50 %, pokud ji nezměníte).

## Vložení

**V MarkupCraftu** vloží {{key:Mod+V}} na libovolném listu oblast jako obrázkovou poznámku u kurzoru. Vloží se ve své velikosti:

- na papíře ve stejné velikosti, jakou měla na listu, odkud pochází;
- když mají oba listy měřítko, ve stejné velikosti ve výkresu: oblast z listu 1:50 se vloží v polovině své papírové velikosti na listu 1:100.

Překryv začíná na své intenzitě; změňte ji pomocí {{ui:Krytí}} v {{ui:Vlastnosti}}. Přesouvejte, měňte velikost, zamykejte a mažte jej jako každý obrázek. Zaškrtněte {{ui:Při uložení slít se stránkou}}, pokud ho chcete nakreslit do stránky.

**V CadCraftu, BimCraftu a DetailCraftu** kopie také zná svou velikost, takže se vložení objeví ve skutečné velikosti výkresu, pokud měl list měřítko, nebo se zeptá na měřítko, pokud ho neměl. Viz nápověda každé aplikace k obrázkům.

## Zarovnání obrázku podle dvou bodů

Vyberte jeden obrázek nebo překryv a zvolte {{ui:Více}} › {{ui:Zarovnat obrázek podle dvou bodů}}:

1. Klikněte na bod na obrázku.
2. Klikněte, kam ten bod patří.
3. Klikněte na druhý bod na obrázku, daleko od prvního.
4. Klikněte, kam ten bod patří.

Obrázek se zvětší, posune a otočí tak, aby oba body dopadly tam, kam jste klikli. {{key:Esc}} zastaví; {{key:Mod+Z}} to vrátí jedním krokem.

## Dobré vědět

- Velikost se přenáší s kopií jen mezi našimi aplikacemi na témže webu a jen u kopie vytvořené za posledních několik hodin; jiný program dostane obyčejný obrázek.
- Pokud prohlížeč nedovolí MarkupCraftu používat systémovou schránku, stavový řádek to řekne: vložení v našich aplikacích funguje dál a {{ui:Uložit jako PNG}} funguje pro ostatní programy.
- Zarovnání obrázek otáčí tím, že překresluje jeho pixely, takže otočený obrázek je mírně měkčí než originál.
