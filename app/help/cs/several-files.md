---
title: Práce s více soubory najednou
summary: Otevřete mnoho PDF jako jednu sadu, hledejte listy napříč soubory, kopírujte poznámky mezi nimi a uložte kopii každého souboru.
keywords: více souborů, více pdf, sada plánů, sada, dávka, mnoho souborů, sloučit, obory, architektonické, konstrukční, strojní, uložit vše, zavřít
from: f59354ae
---

Sada plánů často přichází jako jedno PDF na obor nebo jedno PDF na list. MarkupCraft bere vše, co otevřete, jako **jednu sadu**.

## Otevřít je společně

Vyberte všechna PDF ve výběru souborů najednou, nebo je všechna přetáhněte na oblast listů. Chcete-li přidat další později, otevřete je stejným způsobem; připojí se na konec seznamu {{ui:Listy}} v pořadí, v jakém je otevřete.

Výsledek: „Otevřeno 6 souborů (84 listů v sadě).“ Každá strana je list. Listy s číslem listu zobrazují „List A-101“ pod svým názvem; ostatní zobrazují soubor a stranu.

Není žádný uložený soubor „sady“: příště otevřete stejná PDF znovu (kopie „(marked up)“, pokud jste uložili).

## Napříč celou sadou

- **Najít list:** {{ui:Hledat listy}} hledá v číslech listů, názvech listů a názvech souborů všech souborů. {{key:PageUp}} a {{key:PageDown}} procházejí v pořadí všechny listy všech souborů.
- **Seznam poznámek:** karta {{ui:Poznámky}} vypisuje poznámky ze všech souborů. Filtrujte podle {{ui:List}}, abyste jej zúžili. CSV má sloupec Soubor.
- **Seznam závad:** jedno číslování pro celou sadu.
- **Porovnání:** starý a nový list mohou pocházet z různých souborů.
- **Kopírování a vkládání:** {{key:Mod+C}} na jednom listu a {{key:Mod+V}} na jiném, v libovolném souboru. Kopie přistane na stejném místě stránky, mírně posunutá.

## Uložení

Zvolte {{ui:Uložit}}. Při více než jednom otevřeném souboru se MarkupCraft zeptá:

- {{ui:Tento soubor}}: kopie souboru listu, na kterém jste, s poznámkami.
- {{ui:Každý změněný soubor}}: kopie každého souboru s neuloženými změnami. Každá se stáhne zvlášť jako „<název souboru> (marked up).pdf“.
- {{ui:Zrušit}}

:::chromium
Když poprvé uložíte více souborů najednou, Chrome a Edge se mohou zeptat, zda smí tento web stahovat více souborů. Zvolte {{ui:Povolit}}; jinak dorazí jen první kopie.
:::

:::safari
Safari se může zeptat jednou pro každý soubor. Na iPadu každá kopie jde do aplikace Soubory.
:::

Soubor, jehož poznámky byly uloženy, přestává být počítán jako změněný; ostatní se počítají dál.

Exporty CSV, BCF a seznamu závad se pojmenují podle **prvního** souboru, který jste otevřeli.

## Zavřít

{{ui:Zavřít}} zavře celou sadu; zavřít jen jeden soubor zatím nelze. Pokud je něco neuloženo, zeptá se:

- {{ui:Zrušit}}: nic se nestane.
- {{ui:Zavřít bez uložení}}: neuložené poznámky se ztratí.
- {{ui:Nejdřív uložit kopie}}: uloží každý změněný soubor a pak zavře.

Zavření také vymaže historii zpět.

## Velké sady

- Při otevření se čte text každé strany, aby se našla čísla listů, takže sada se 100 listy chvíli trvá. Stavový řádek počítá listy, jak postupuje.
- Obrázky listů v seznamu se vykreslí, když k nim rolujete.
- Každé otevřené PDF je uloženo v paměti karty prohlížeče. Pokud se karta zpomalí, zavřete jiné náročné karty, nebo kontrolujte jeden obor najednou.
- Otevření stejného souboru dvakrát vám dá dvě kopie jeho listů. Pokud se to stane, zvolte {{ui:Zavřít}} a sadu znovu otevřete.
