---
title: Seznam změn mezi revizemi
summary: Porovnejte dvě sady výkresů a získejte prostý seznam, list po listu, kde se změnily výkresy a slova. Je připravený ke čtení, kopírování nebo předání vašemu asistentovi.
keywords: co se změnilo, změny, seznam revizí, seznam porovnání, prostý seznam, vyprávění, asistent, delta, shrnutí revize
from: bab93d2e
---

Nástroje pro porovnání zobrazují změny na listu. Tento nástroj je zapisuje.

1. Otevřete obě revize (viz [Otevřít sadu výkresů](topic:open-a-plan-set)).
2. Otevřete kartu {{ui:Porovnat}}, pak {{ui:Porovnat celou sadu}}.
3. Vyberte starší a novější soubor a zvolte {{ui:Vypsat změny}}.

Seznam začíná počtem („2 z 14 odpovídajících listů změněno; 1 nový; 1 vynechán“) a pak pokrývá každý změněný list, od největší změny: kde na listu (vlevo nahoře, uprostřed…), jak velká, zda byly čáry přidány, odebrány nebo obojí, kolik poznámek tam leží a která slova se objevila nebo zmizela. U kalibrovaného listu je velikost v reálných jednotkách i v palcích na papíře.

Seznam říká, co je na stránce; neříká, co to znamená. Posunutá čára může být zeď nebo výnoska. Váš připojený asistent může seznam přečíst nástrojem `revisions_changes` a převést ho do slov, zbytek si můžete prohlédnout na listu. {{ui:Kopírovat seznam}} ho vloží do schránky a {{ui:CSV}} zapíše jeden řádek na každou změnu.

Listy se párují podle čísla listu, jako v [Přelepka revidované sady](topic:slip-sheet-a-revised-set). Změny menší než několik bodů se ignorují a text, který je součástí obrázku (skenu), nemá slova k porovnání.
