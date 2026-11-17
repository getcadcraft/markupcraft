---
title: Uložení PDF s poznámkami
summary: Stáhněte kopii se všemi poznámkami zapsanými jako standardní komentáře PDF, zkontrolujte, co vidí jiné čtečky PDF, a práci můžete později pokračovat.
keywords: uložit, stáhnout, export pdf, s poznámkami, anotace, komentáře, sdílet, odeslat, problém, pokračovat, znovu otevřít, přenos tam a zpět, tisk
from: 4c198ebe
---

## Uložení

1. Zvolte {{ui:Uložit}} na panelu nástrojů, nebo stiskněte {{key:Mod+S}}.
2. Pokud je otevřeno více souborů, zvolte {{ui:Tento soubor}} (soubor listu, na kterém jste) nebo {{ui:Každý změněný soubor}}. Každá kopie se stáhne zvlášť.
3. Počkejte, až dokončí „Ukládání <file>…“. První uložení v relaci také načte zapisovač PDF.

Výsledek: prohlížeč stáhne „<name> (marked up).pdf“ a stavový řádek to ohlásí: „Soubor A-Plans (marked up).pdf byl uložen (24 poznámek, 18.2 MB). Původní soubor nebyl změněn.“ Tečka za {{ui:Uložit}} zmizí.

**Váš původní PDF se nikdy nemění.** MarkupCraft zapíše nový soubor. Kam se soubor uloží, závisí na nastavení stahování ve vašem prohlížeči (viz [Soubory, které MarkupCraft otevírá a ukládá](topic:files#where-downloads-go)).

## Pokračovat v práci později

Příště otevřete kopii „(marked up)“, ne původní soubor. Vše se vrátí k úpravám: poznámky, stavy, odpovědi, položky závad, měřítko každého listu a všechny názvy listů, které jste zadali.

Při dalším uložení se stáhne soubor se stejným názvem „(marked up)“. Pokud je starší stažená verze ve složce ještě k dispozici, prohlížeč může připojit číslo, například „(1)“. Staré kopie si sami nahraďte nebo vyčistěte.

MarkupCraft PDF sám neukládá. Během práce si v tomto prohlížeči drží záložní kopii, takže pád nebo zavřená karta neztratí vaše poznámky: při dalším otevření MarkupCraftu se zeptá „Obnovit práci?“. Viz [Obnovit práci](common:recover). Přesto ukládejte před zavřením. Pokud se pokusíte odejít s neuloženými poznámkami, prohlížeč se nejdřív zeptá „Opustit stránku?“ (iPad Safari se neptá).

## Co vidí jiné čtečky PDF

Každá poznámka je zapsána jako standardní komentář PDF (anotace) s vlastní kresbou, takže ji zobrazí, vytiskne a uvede v panelu komentářů libovolná čtečka PDF:

- **Vzhled je stejný** jako v MarkupCraftu: oblaky s vlnkovaným okrajem, hroty šipek, razítka, tečky počtu, štítky čísel položek závad, popisky měření.
- **Podrobnosti jsou standardní:** autor, datum, předmět, text komentáře a barvy.
- **Oblaky** jsou komentáře obdélníku nebo mnohoúhelníku s oblačným okrajem; **textová pole** a **výnosky** jsou komentáře textového pole; **poznámky** jsou lepicí poznámky; tahy **pera** a **zvýrazňovače** jsou inkoust; **razítka** jsou komentáře razítka.
- **Délky a plochy** jsou komentáře měření. Každý zkalibrovaný list nese své měřítko, takže čtečky, které rozumějí měřením, mohou hodnoty zobrazit.
- **Odpovědi** jsou odpovědi na komentář a **stavy** jsou stavy revize (Otevřeno se zobrazí jako žádný stav).
- **Čísla listů**, která jste zadali, se stanou popisky stran, které zobrazují ostatní čtečky.

Několik věcí čte zpět jen MarkupCraft: přiřazení položky závady a termín, stav položky a některé podrobnosti stylu. Jiné programy je zachovají, pokud komentář nepřepíšou.

V jiném programu lze komentáře přesouvat nebo upravovat stejně jako jiné objekty. Pokud to někdo udělá a pošle soubor zpět, MarkupCraft při otevření souboru použije novou polohu komentáře.

Podrobnosti: [Co se ukládá do PDF](topic:what-the-pdf-keeps).

## Znaky, které se tisknou jako „?“

Text poznámek se zapisuje standardním písmem Helvetica, které má každá čtečka PDF. Pokrývá anglická a západoevropská písmena (é, ñ, ü, ø a podobná), ale ne jiná písma, symboly mimo tuto sadu ani emoji. Tyto znaky se v MarkupCraftu zobrazí správně, ale v uložené kopii se vytisknou jako „?“. Zpráva o uložení je počítá: „3 znaky mimo západoevropskou sadu se v kopii vytisknou jako "?"“.

Takové slovo napište celé, nebo použijte prostou náhradu (například „dia.“ místo znaku průměru).

## Soubory, které nelze uložit

- **Chráněná PDF:** „Toto PDF je chráněno (šifrováno), takže kopii s poznámkami nelze zapsat. Požádejte o nechráněnou kopii.“ Můžete je stále kontrolovat na obrazovce a exportovat CSV a BCF.
- Pokud se uložení nezdaří z jiného důvodu, zobrazí se dialog „Nelze uložit <file>“ s důvodem. Vaše poznámky jsou stále na kartě; nic se neztratí, dokud ji nezavřete.

## Zapékání a tisk

Zatím není k dispozici zapékání poznámek do stránky ani příkaz tisku. Pro tisk otevřete uloženou kopii v libovolné čtečce PDF a tiskněte se zobrazenými komentáři.
