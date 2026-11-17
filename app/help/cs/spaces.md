---
title: Prostory
summary: Pojmenujte místnosti nebo zóny listu, pak filtrujte, počítejte a exportujte poznámky podle prostoru, ve kterém jsou.
keywords: prostor, prostory, místnost, zóna, křídlo, oblast práce, umístění, filtrovat podle místnosti, seskupit podle místnosti, export podle prostoru
from: b199339c
---

Prostor je pojmenovaná zóna na listu: místnost, křídlo, fáze práce. Každá poznámka uvnitř něj do něj patří, takže můžete vypsat, filtrovat a exportovat poznámky jedné místnosti.

## Vytvoření prostoru

1. Otevřete {{ui:Prostory}} v horní části panelu {{ui:Listy}} a zvolte {{ui:Nový prostor}}.
2. Klikněte na rohy zóny, pak dvojklikněte nebo stiskněte {{key:Enter}}.
3. Napište její název, například `Kuchyně` nebo `Úroveň 2 východ`, a zvolte {{ui:Přidat prostor}}.

Prostor se zobrazí jako světle zelená zóna s přerušovaným obrysem a svým názvem. Stavový řádek ukazuje, kolik poznámek je uvnitř.

## Co je v prostoru

Poznámka patří do prostoru, který obsahuje střed poznámky. Když jsou prostory vnořené (místnost v křídle), vyhrává menší. Přesunete-li poznámku, přesune se mezi prostory. Vyberte prostor, abyste změnili jeho obrys pomocí úchytů, nebo jeho název pod {{ui:Jméno}} v {{ui:Vlastnosti}}.

- {{ui:Vlastnosti}} ukazuje prostor poznámky.
- Seznam {{ui:Poznámky}} filtruje podle {{ui:Prostor}}, včetně {{ui:Bez prostoru}}.
- Exporty do CSV a XLSX dostanou sloupec {{ui:Prostor}}, jakmile sada obsahuje prostory.
- Panel {{ui:Prostory}} vypíše každý prostor s počtem poznámek v něm; zvolte jeden a přejdete na něj.

## V uloženém PDF

Prostor je polygonový komentář s názvem jako textem, nakreslený přerušovaným okrajem, takže ho zobrazí i jiné prohlížeče. Znovu se otevře v MarkupCraftu jako prostor.
