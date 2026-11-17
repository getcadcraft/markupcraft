---
title: Porovnání dvou revizí
summary: Překryjte starou a novou verzi listu dvěma barvami, zarovnejte je podle dvou bodů a označte oblakem, co se změnilo.
keywords: porovnání, překryv, překryv stran, revize, rozdíl, rozdíly, změny, starý nový, zarovnání, kontrola změn, vydání, bulletin
from: 62f5d1c5
---

Porovnání položí dva listy přes sebe. Čáry jen na starém listu se zobrazí červeně, čáry jen na novém listu modře a čáry na obou tlumeně šedě. Barvy jsou pojmenovány v legendě pod listem: "Jen na starém listu", "Jen na novém listu", "Na obou".

## Porovnání dvou listů

1. Otevřete obě vydání. Mohou to být stránky téhož PDF nebo různých PDF; otevřete je společně jako jednu sadu (viz [Práce s více soubory najednou](topic:several-files)).
2. Zvolte kartu {{ui:Porovnat}} vpravo.
3. Vyberte {{ui:Starý list}} a {{ui:Nový list}}. Nový list začíná jako ten, na kterém jste. Když je otevřeno více souborů, za názvem každého listu se zobrazí název jeho souboru.
4. Zvolte {{ui:Porovnat}}.

Výsledek: MarkupCraft zobrazí nový list se smíseným starým listem, objeví se legenda a karta říká "Porovnávání <old> (starý) s <new> (nový). Poznámky na novém listu zůstávají upravitelné."

## Prolínání mezi starým a novým

Přetáhněte posuvník {{ui:Starý a nový}}. Úplně vlevo je vidět jen starý list, úplně vpravo jen nový, uprostřed oba. Posouvání sem a tam je často nejrychlejší způsob, jak uvidět malou změnu.

## Zarovnání listů

Pokud byla dvě vydání vytištěna s jiným okrajem, velikostí nebo otočením, vypadá vše změněně. Opravte to:

**Podle dvou bodů (nejlépe):**

1. Zvolte {{ui:Zarovnat podle dvou bodů}}. Pohled ukazuje jen starý list.
2. Klikněte na ostrý prvek, který najdete na obou listech, například průsečík sloupové osy. Karta počítá kroky ("1 z 4").
3. Klikněte na druhý prvek, daleko od prvního, například na protilehlý roh sítě.
4. Pohled přepne na nový list. Klikněte znovu na první prvek.
5. Klikněte znovu na druhý prvek.

Výsledek: "Zarovnáno: starý list zvětšen na 100.00 %, otočen o 0.00°. Doladěte posunutím." Starý list se posune, zvětší a otočí tak, aby seděl. {{key:Esc}} zruší výběr bodů. Před každým kliknutím přibližte na prvek, aby bylo zarovnání přesné.

**Posunutím:** použijte čtyři šipková tlačítka pod "Zarovnání" a posuňte starý list. Zvolte krok (0.25, 1, 5 nebo 20 pt; 72 pt je jeden palec na papíře). Karta říká, o kolik se posunul.

{{ui:Obnovit}} odstraní zarovnání i posuny.

## Jen změněné čáry

Pod tlačítky zarovnání zvolte {{ui:Změněné čáry}} místo {{ui:Překryv obrázků}}. MarkupCraft pak porovnává vlastní čáry obou listů, ne jejich obrázky: nový list se zobrazí tak, jak je, s čárami jen na starém listu červeně a čárami jen na novém modře. Čára, která se jen zkrátila, ukazuje jen chybějící část. Nejprve list zarovnejte (viz výše): porovnání používá zarovnání, takže list, který byl jen posunut, nezobrazí žádné změny. Stavový řádek říká, kolik se změnilo.

Tento způsob funguje u PDF vytištěných z CADu, kde je výkres tvořen čarami. Naskenované listy nemají čáry k porovnání: u nich použijte překryv obrázků. Text sazený písmem (ne nakreslený tahy) se neporovnává.

## Označení změn

Při porovnávání jste na novém listu a všechny nástroje fungují. Kreslete oblaky kolem změn, jak je nacházíte; patří novému listu a zůstanou, i když porovnávání ukončíte.

{{ui:Označit změny oblakem}} to udělá za vás: seskupí změněné čáry, které jsou blízko sebe, a na nový list nakreslí revizní oblak kolem každé skupiny s komentářem "Změněno od <old sheet>". Jedním {{key:Mod+Z}} je odstraníte všechny; smažte ty, které nepotřebujete.

## Porovnání celé sady

Když nové vydání přijde jako vlastní PDF, otevřete obě PDF a v kartě {{ui:Porovnat}} otevřete {{ui:Porovnat dvě sady}}. Vyberte starý a nový soubor, pak zvolte {{ui:Porovnat sady}}. Listy se páruje podle čísla (jako v [vkládání revidovaných listů](topic:slip-sheet-a-revised-set)), porovnají se podle čar a seřadí se od nejvíce změněného. Zvolte list v seznamu a porovnejte tuto dvojici pomocí {{ui:Změněné čáry}}.

{{ui:Označit všechny změny oblakem}} označí každou skupinu změněných čar na každém změněném listu jedním krokem, který lze vrátit zpět. Porovnání sady nejprve listy nezarovnává, takže list posunutý na stránce se ukáže jako změněný: porovnejte tuto dvojici samostatně a použijte {{ui:Zarovnat podle dvou bodů}}.

## Ukončení porovnání

Zvolte {{ui:Ukončit porovnání}}, nebo přejděte na jiný list. Zarovnání se pamatuje pro tutéž dvojici listů, dokud sadu nezavřete.

## Dobré vědět

- Porovnání funguje na tom, co je nakresleno, pixel po pixelu. Neví, že se čára posunula; ukáže starou polohu jednou barvou a novou polohu druhou.
- Přetékající text, změněné datum v razítku výkresu nebo jiný styl tisku se také ukáže jako změny.
- Naskenovaný list porovnaný s vytištěným je hlučný: skenování rozmazává a posouvá čáry.
- Porovnání textu sázeného písmem a seznam změn ještě nejsou hotové.
