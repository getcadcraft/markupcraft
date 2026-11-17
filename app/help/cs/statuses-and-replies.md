---
title: Stavy a odpovědi
summary: Označte každý komentář jako Otevřeno, Přijato, Zamítnuto nebo Dokončeno, diskutujte o něm ve vlákně odpovědí a předejte vlákno dál v PDF.
keywords: stav, stav revize, přijato, zamítnuto, dokončeno, otevřeno, odpověď, odpovědi, vlákno, komentář, konverzace, diskuse, reagovat, zpětná kontrola
from: 0f3e8b91
---

Každá poznámka má **stav** a **vlákno odpovědí**. Společně nesou jedno kolo revize: revizor označí poznámky, projektant odpoví a nastaví stavy, revizor provede zpětnou kontrolu.

## Nastavení stavu

1. Vyberte poznámku (nebo více).
2. V {{ui:Vlastnosti}} vyberte {{ui:Stav}}: Otevřeno, Přijato, Zamítnuto nebo Dokončeno.

Výsledek: stav se zobrazí jako štítek v seznamu {{ui:Poznámky}} a do vlákna se přidá řádek: „Stav nastaven na Přijato uživatelem Ana Ruiz.“ Pokud je vybráno více poznámek, pole stavu ukazuje „Smíšené“, dokud nevyberete jednu hodnotu, a pak se změní u všech.

Nové poznámky začínají jako Otevřeno. Vložené nebo duplikované poznámky také začínají jako Otevřeno.

## Odpověď

1. Vyberte poznámku.
2. V {{ui:Vlastnosti}} najděte „Odpovědi“ pod nastavením stylu.
3. Napište do pole {{ui:Napište odpověď}}.
4. Zvolte {{ui:Odpověď}}, nebo stiskněte {{key:Mod+Enter}}.

Výsledek: odpověď se zobrazí s vaším jménem, datem a časem a nadpis ji počítá: „Odpovědi (3)“. Seznam {{ui:Poznámky}} ukazuje u řádku počet odpovědí.

- Změny stavu jsou uvedeny ve stejném vlákně a označeny jako záznamy stavu, takže historie se čte v pořadí.
- Začnete-li psát odpověď a klepnete na něco jiného, koncept se uchová, dokud se nevrátíte k této poznámce (dokud nezavřete sadu).
- Pokud vaše jméno není nastaveno, MarkupCraft ho před odesláním vyžádá.
- Můžete odpovídat i na komentáře jen pro čtení, které přišly se souborem.

:::note
Odeslanou odpověď nelze upravit ani smazat. Ihned po odeslání ji vrátíte zpět pomocí {{key:Mod+Z}}; poté přidejte novou odpověď, která ji opraví.
:::

## Přidání fotografie

Pod polem odpovědi přidá {{ui:Přidat fotku}} do vlákna obrázek: PNG nebo JPEG z tohoto počítače, nebo na tabletu či telefonu fotku, kterou tam právě pořídíte. Cokoli napíšete do pole odpovědi, se stane jejím popiskem. Vlákno zobrazuje miniaturu; kliknutím ji uvidíte v plné velikosti. Velké fotografie se zmenší na 1600 pixelů na delší straně.

V uloženém PDF je každá fotografie navíc připojena jako soubor vedle poznámky (sponka), takže ji mohou otevřít i jiné prohlížeče PDF.

## Předání revize dál

Sdílená online relace zatím neexistuje: revize putuje v PDF.

1. Zvolte {{ui:Uložit}}. Kopie obsahuje každou poznámku s jejím stavem a odpověďmi.
2. Pošlete tuto kopii stejně, jako posíláte výkresy dnes.
3. Další osoba ji otevře v MarkupCraftu, odpoví, nastaví stavy a znovu uloží.

Jiné programy pro PDF zobrazují odpovědi jako odpovědi na komentář a stavy jako stavy revize (Přijato, Zamítnuto, Dokončeno; Otevřeno se zobrazí jako žádný stav). Jejich vlastní odpovědi a stavy revize se vrátí do MarkupCraftu při otevření souboru: rozhodující je nejnovější stav.

Pokud dva lidé označují současně oddělené kopie, neexistuje slučování. Můžete otevřít obě kopie v jedné sadě a několik poznámek přenést klávesami {{key:Mod+C}} a {{key:Mod+V}}, ale vložená kopie je nová poznámka: nese vaše jméno, nové datum a stav Otevřeno a umístí se mírně posunutá. Dohodněte se, kdo označuje které listy, abyste tomu předešli.

## Vyhledání toho, co je stále otevřené

Na kartě {{ui:Poznámky}} nastavte {{ui:Stav}} na „Otevřeno“, aby se vypsaly jen otevřené položky, a {{ui:Autor}} na jednoho revizora. Viz [Seznam poznámek](topic:markups-list-and-export).

Stav (Otevřeno, Přijato, Zamítnuto, Dokončeno) se týká komentáře. Položka závady má vlastní, oddělený stav práce na stavbě; viz [Vytvoření seznamu závad](topic:punch-list).
