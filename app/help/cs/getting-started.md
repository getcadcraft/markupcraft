---
title: Začínáme s MarkupCraftem
summary: Otevřete sadu výkresů, umístěte na list první oblak a první vynášecí text a uložte kopii s poznámkami.
keywords: start, první kroky, otevřít pdf, revize, poznámky, redline, červené pero, sada výkresů, návod, rychlý start
from: 0b1aae4e
---

MarkupCraft slouží k revizi výkresů: otevřete sady výkresů v PDF, označíte je oblaky, vynášecími texty, texty, razítky a měřeními, sledujete stav každého komentáře a uložíte kopii PDF, kterou zobrazí jakákoli čtečka PDF.

Běží ve webovém prohlížeči. Vaše soubory PDF se otevírají ve vašem počítači a **nikdy se nenahrávají**. Uložením se stáhne nová kopie; původní soubor se nezmění.

:::note
MarkupCraft je ve vývoji. Nápověda popisuje verzi, kterou právě používáte. Co zatím neumí, je uvedeno v tématu [Co ještě není hotovo](topic:not-built-yet).
:::

## Co budete potřebovat

- Aktuální Chrome, Edge, Firefox nebo Safari na počítači Mac, Windows nebo Linux, nebo Safari či Chrome na iPadu. Viz [Prohlížeče a počítače](common:browsers).
- Jeden nebo více souborů PDF. Celá sada výkresů může být jeden PDF soubor nebo mnoho souborů.
- Nejpohodlnější je myš s kolečkem. Funguje i touchpad a také dotyková obrazovka (viz [Revize na iPadu nebo dotykové obrazovce](topic:review-on-a-tablet)).

## Vaše první revize v deseti krocích

1. Otevřete MarkupCraft v prohlížeči. Uprostřed obrazovky je text „Otevřete sadu plánů“.
2. Zvolte {{ui:Otevřít PDF}} (nebo {{ui:Otevřít}} na levém konci panelu nástrojů, nebo stiskněte {{key:Mod+O}}), vyberte jeden nebo více souborů PDF a potvrďte.
   Soubory PDF můžete také přetáhnout z {{pick:mac=Finderu|windows=Průzkumníka souborů|linux=správce souborů}} a pustit je na plochu listu.
   Poprvé se ve stavovém řádku dole zobrazí „Načítám čtečku PDF…“. Poté se každá strana stane listem v seznamu {{ui:Listy}} vlevo a první list vyplní střed.
3. Kliknutím na list v seznamu jej zobrazíte. Točením kolečka myši nad listem přiblížíte místo, kde je ukazatel.
4. Zvolte {{ui:Oblak}} ve skupině {{ui:Revize}} na panelu nástrojů (nebo stiskněte {{key:C}}).
   Když poprvé vyberete kreslicí nástroj, MarkupCraft se zeptá na vaše jméno. Napište je a zvolte {{ui:Uložit}}. Každá poznámka si je zaznamená. (Více v tématu [Nastavení jména autora](topic:set-your-name).)
5. Tažením nakreslete obdélník kolem oblasti, kterou chcete označit. Zobrazí se červený revizní oblak a bude vybraný.
6. Zvolte {{ui:Vynášecí text}} ve skupině {{ui:Anotace}} (nebo stiskněte {{key:K}}). Klikněte na to, na co ukazujete, přetáhněte tam, kam má text přijít, a pusťte.
7. Do zobrazeného pole napište komentář. Kliknutím kamkoli mimo pole (nebo stisknutím {{key:Mod+Enter}}) dokončíte zadání.
8. Dvakrát stiskněte {{key:Esc}}: poprvé zrušíte výběr, podruhé se vrátíte k nástroji {{ui:Vybrat}}. Klikněte na oblak. Karta {{ui:Vlastnosti}} vpravo ukazuje, kdo jej vytvořil, kdy a jaký má {{ui:Stav}}.
9. Zvolte {{ui:Uložit}} na panelu nástrojů (nebo stiskněte {{key:Mod+S}}).
   Prohlížeč stáhne kopii s názvem například „A-Plans (marked up).pdf“. Stavový řádek uvádí, kolik poznámek bylo zapsáno.
10. Otevřete tuto kopii v libovolné čtečce PDF a zkontrolujte: oblak i vynášecí text tam jsou jako běžné komentáře PDF s vaším jménem.

Chcete-li pokračovat později, otevřete kopii „(marked up)“ v MarkupCraftu. Vaše poznámky se vrátí jako upravitelné, se svými stavy, odpověďmi a čísly závad.

## Online a offline

:::online
Jste online. MarkupCraft načte čtečku PDF při prvním otevření PDF a zapisovač PDF při prvním uložení. Abyste později mohli pracovat bez připojení (na stavbě, v letadle), zvolte nyní v liště nahoře {{ui:Uložit pro offline}} a počkejte na „Připraveno offline“. Kopie obsahuje čtečku i zapisovač PDF, takže pak funguje offline otevírání i ukládání PDF. Viz [Práce offline](common:offline).
:::

:::offline
Jste offline. Pokud lišta nahoře říká „Připraveno offline“, MarkupCraft byl v tomto prohlížeči uložen pro offline použití a vše funguje: otevírání, poznámky, měření, ukládání. Pokud ne, použijte to, co se již v této kartě načetlo, a stránku znovu nenačítejte, dokud nebudete zase online. Viz [Práce offline](common:offline).
:::

## Co si aplikace pamatuje a co ne

- **Vaše poznámky jsou v PDF, které uložíte.** Na serveru se nic neukládá. Aplikace PDF neukládá sama, ale v tomto prohlížeči drží záložní kopii, dokud je neuložíte vy. Před zavřením karty uložte; prohlížeč se nejdřív zeptá, pokud se pokusíte odejít s neuloženými poznámkami (kromě iPadu, viz [Revize na iPadu nebo dotykové obrazovce](topic:review-on-a-tablet)).
- **Vaše jméno, styly nástrojů a sada nástrojů** zůstávají v tomto prohlížeči na tomto počítači. Jiný prohlížeč nebo počítač začíná od nuly a vymazání dat webu v prohlížeči je odstraní. Viz [Co zůstává v tomto prohlížeči](topic:browser-storage).
- Ukládání do cloudu a sdílené revizní relace mezi více lidmi zatím nejsou k dispozici.

## Kam dál

- [Prohlídka obrazovky](topic:workspace)
- [Označování listu](topic:mark-up-a-sheet)
- [Kalibrace listu a měření](topic:calibrate-and-measure)
- [Pokud přecházíte z jiného programu pro poznámky](topic:coming-from), jestliže už výkresy kontrolujete v jiném programu.
