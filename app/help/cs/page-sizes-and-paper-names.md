---
title: Formáty stran a názvy papíru
summary: Zobrazte velikost každé stránky PDF v milimetrech a palcích a její název papíru (řady A, B a C, ANSI, ARCH) a seskupte smíšenou sadu podle velikosti, abyste našli odlišné stránky.
keywords: velikost stránky, formát papíru, název papíru, a0, a1, a2, a3, a4, řada b, řada c, ansi, arch, architektonický, mm, palce, vlastní velikost, podle velikosti, neobvyklá velikost, smíšená sada, zkontrolovat pdf, klient, vydání, mediabox, cropbox, otočení
from: 08e1354f
---

Než sadu odešlete klientovi, zkontrolujte, že každý list má správnou velikost. {{ui:MarkupCraft}} čte velikost každé stránky přímo z PDF a pojmenovává papír.

## Co uděláte

Podívejte se na velikost jednoho listu a poté seskupte celou sadu podle velikosti.

## Postup

1. Otevřete PDF soubory ({{ui:Otevřít}}), pak stiskněte {{key:Esc}}, dokud nic není vybráno, a ujistěte se, že je zapnutý {{ui:Výběr}}.
2. Podívejte se na {{ui:Vlastnosti}}. {{ui:Papír}} uvádí název a orientaci, například "A4, na výšku". {{ui:Velikost}} uvádí milimetry a palce.
3. Každý řádek seznamu {{ui:Listy}} má pod názvem listu řádek s velikostí.
4. Zvolte {{ui:Podle velikosti}} v záhlaví {{ui:Listy}}. Seznam seskupí listy pod jeden nadpis pro každou velikost, největší skupina je první. Velikost s jen několika listy je označena jako odlišná.
5. Zvolte znovu {{ui:Podle velikosti}}, čímž se vrátíte k původnímu pořadí sady.

Výsledek: stránka, jejíž velikost se liší od ostatních, je před odesláním sady snadno vidět.

## Jak se určuje název

- Velikost se určuje podle boxu stránky v PDF s uplatněným natočením, takže A3 na šířku je pořád A3.
- Názvy jsou řada A a B (ISO 216), řada C (ISO 269), ANSI A až E a ARCH A až E.
- Stránka do 2 mm od pojmenované velikosti převezme tento název. Ostatní stránky mají označení {{ui:vlastní}} a {{ui:Nejbližší pojmenovaný formát}} uvádí nejbližší velikost a jak moc se od ní liší.
- Palce se počítají ze skutečné velikosti stránky, takže stránka A4 má 8.26 by 11.69 in.

## V souborech, které ukládáte

Souhrnný sešit ({{ui:Seznam poznámek}}, pak tabulka) má sloupec {{ui:Formát papíru}} na listu {{ui:Podle listů}} a list {{ui:Formáty stran}}. PDF zpráva má řádek "Formáty stran" s počtem každé velikosti.

:::note
Hodnoty palců pro ANSI a ARCH byly zapsány podle publikovaných tabulek a nebyly porovnány s vytištěnými normami. Stránku "vlastní", která se blíží jedné z nich, ověřte sami.
:::
