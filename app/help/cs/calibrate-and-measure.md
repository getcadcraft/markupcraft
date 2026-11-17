---
title: Kalibrace listu a měření
summary: Nastavte měřítko každého listu podle předvolby nebo známého rozměru, pak měřte délky, plochy s obvody a počty.
keywords: kalibrovat, měřítko, nastavit měřítko, měřit, délka, vzdálenost, kóta, plocha, čtvereční stopy, obvod, počet, výkaz výměr, množství, pravítko, aritmetika, výpočet, plus, zlomek
from: 49a25c6d
---

Délky a plochy potřebují znát měřítko listu. MarkupCraft uchovává měřítko **pro každý list** zvlášť: kalibrujte každý list, který měříte. Počty měřítko nepotřebují.

Stavový řádek ukazuje měřítko aktuálního listu, nebo "Nezkalibrováno".

## Zvolte měřítko ze seznamu

Použijte to, když je PDF v plné velikosti (list 24 × 36, který se tiskne na 24 × 36) a výkres uvádí své měřítko.

1. Klikněte na tlačítko měřítka ve stavovém řádku ("Nezkalibrováno"). Otevře se pole "Měřítko listu".
2. V {{ui:Měřítko}} zvolte měřítko: stavební (1/32" = 1'-0" až 3" = 1'-0"), inženýrské (1" = 10' až 1" = 100') nebo metrické (1:1 až 1:1000).
3. Zvolte {{ui:Nastavit měřítko}}.

Výsledek: stavový řádek ukáže měřítko, například `1/4" = 1'-0"`. Stavební měřítka ukazují délky ve stopách a palcích, inženýrská v desetinných stopách, metrická až do 1:50 v milimetrech a od 1:100 v metrech.

:::warning
Předvolba je správná jen tehdy, když PDF nebylo zmenšeno. Polovičně velká sada nebo list, který byl při tvorbě "přizpůsobit stránce", se s předvolbou měří špatně. Kalibrujte raději podle známého rozměru a v každém případě zkontrolujte jeden rozměr.
:::

## Kalibrace podle známého rozměru

Použijte to u polovičně velkých sad, naskenovaných listů, detailů v nestandardním měřítku nebo ke kontrole předvolby.

1. Najděte dlouhou kótu, které věříte, nebo grafické měřítko.
2. Zvolte {{ui:Kalibrovat}} ve skupině {{ui:Měření}} (nebo zvolte {{ui:Vybrat dva body}} v poli "Měřítko listu").
3. Klikněte na jeden konec kóty, pak na druhý. (Nebo táhněte od jednoho konce k druhému.) Nejprve přibližte kvůli přesnosti; {{key:Shift}} drží čáru v krocích po 45°.
4. Pole ukáže, jak daleko jsou body od sebe na papíře, a zeptá se "Jak daleko od sebe jsou ve skutečnosti?". Zadejte {{ui:Skutečná vzdálenost}}, například `24'-0"`, `12' 6 1/2"`, `7.2 m` nebo `900 mm`.
5. Zvolte, jak se délky zobrazují pod {{ui:Zobrazovat délky v}}: {{ui:Stopy a palce}}, {{ui:Desetinné stopy}}, {{ui:Palce}}, {{ui:Metry}} nebo {{ui:Milimetry}}.
6. Zvolte {{ui:Nastavit měřítko}}.

Výsledek: stavový řádek ukáže "Zkalibrováno: 24'-0" over 1.00 in" (skutečnou délku a délku na papíře) a nástroj, kterým jste chtěli měřit, se vrátí. Všechny způsoby zadání délky jsou v [Jednotky a délky](topic:units-and-scales).

Skutečná vzdálenost může být i malý výpočet: `12'6"+3/4"`, `(24'-0")/3` nebo `2*450mm`. Použijte `+ - * /` a závorky; číslo bez jednotky platí v jednotce pod {{ui:Zobrazovat délky v}} (stopy pro {{ui:Stopy a palce}}). {{ui:Nastavit měřítko}} použije výsledek.

Pokud MarkupCraft nerozumí tomu, co jste zadali, pole to řekne: "Toto není délka, které MarkupCraft rozumí. Zkuste 24'-0", 12' 6 1/2", 7.2 m nebo 900 mm." Výpočet, který nedokáže vyřešit, řekne proč a kde, například "Závorka není uzavřena (znak 5)."

## Změřte délku

1. Zvolte {{ui:Délka}} ({{key:M}}).
2. Klikněte na začátek, pak na konec. Nebo táhněte od začátku ke konci. {{key:Shift}} ji drží v krocích po 45°.

Výsledek: kótovací čára s rysками a délkou napsanou na ní. Stavový řádek ji zopakuje ("Délka: 12'-6 1/2" (1/4" = 1'-0")."), a {{ui:Vlastnosti}} ji ukáže pod {{ui:Délka}}. Stopy a palce se zaokrouhlují na nejbližší 1/16".

Pokud list zatím nemá měřítko, zvolení {{ui:Délka}} přepne na {{ui:Kalibrovat}} a stavový řádek to vysvětlí: "Nejprve zkalibrujte tento list: vyberte dva body ve známé vzdálenosti od sebe, nebo zvolte jeho měřítko. Pak měřte." Po nastavení měřítka se {{ui:Délka}} vrátí.

## Kreslení v měřítku

Na zkalibrovaném listu můžete zadávat skutečné délky při kreslení {{ui:Úsečka}}, {{ui:Šipka}}, {{ui:Délka}}, {{ui:Mnohočára}}, {{ui:Mnohoúhelník}}, {{ui:Volný oblak}}, {{ui:Plocha}} nebo prostoru:

1. Klikněte na první bod.
2. Ukažte směr, kterým jde další úsek, a zadejte jeho délku, například `16` (v jednotce listu), `12'6"` nebo `3.5 m`. U kurzoru se při psaní otevře pole.
3. Stiskněte {{key:Enter}}. Bod se umístí v dané vzdálenosti ve směru kurzoru.

Chcete-li směr nastavit přesně, přidejte `<` a úhel ve stupních: `8 < 90` jde 8 stop přímo nahoru, `4<0` doprava, `10 < 225` dolů a doleva, tak jak je list vidět (včetně otočených stran). Pro další rohy pokračujte v zadávání délek a tvar dokončete obvyklým způsobem. {{key:Esc}} zavře pole, aniž by umístil bod.

## Změřte úhel

1. Zvolte {{ui:Úhel}} ({{key:X}}).
2. Klikněte na konec jednoho ramene, pak na vrchol, pak na konec druhého ramene.

Výsledek: obě ramena, malý oblouk ve vrcholu a úhel ve stupních na desetinu (0° až 180°). Úhel měřítko nepotřebuje. {{ui:Vlastnosti}} ho ukáže pod {{ui:Úhel}} a seznam, CSV i BCF ho přenášejí.

{{ui:Oblouk}} ({{key:O}}) na zkalibrovaném listu ukazuje v {{ui:Vlastnosti}} také svou délku po křivce.

## Změřte plochu a její obvod

1. Zvolte {{ui:Plocha}} ({{key:Q}}).
2. Klikněte na každý roh místnosti nebo oblasti.
3. Dokončete dvojklikem, {{key:Enter}} nebo pravým tlačítkem (na dotykové obrazovce dvojklepem). {{key:Backspace}} odebere poslední roh.

Výsledek: vyšrafovaný obrys s plochou a "P" s obvodem uprostřed, například "128.00 sq ft" a "P 48'-0"". Stopová měřítka dají čtvereční stopy, palcová čtvereční palce, metrická čtvereční metry a milimetrová čtvereční milimetry. Plocha potřebuje alespoň tři rohy.

### Výřezy

Chcete-li vynechat sloup, šachtu nebo nádvoří, vyberte plochu a zvolte {{ui:Přidat výřez}} v {{ui:Vlastnosti}}. Klikejte na rohy výřezu uvnitř plochy a dokončete jako u plochy. Výřez zůstane otevřený (bez šrafy), jeho plocha se odečte a jeho hrany se přidají k obvodu: místnost 16' × 8' s výřezem 4' × 4' ukáže "112.00 sq ft" a "P 64'-0"". Přidejte, kolik potřebujete; nesmějí se překrývat ani protínat obrys plochy. {{ui:Odebrat výřezy}} je odstraní všechny a {{key:Mod+Z}} vrátí jeden.

## Počítejte věci

1. Zvolte {{ui:Počet}} ({{key:U}}).
2. V {{ui:Vlastnosti}} napište {{ui:Název skupiny}}, například "Podlahové vpusti". (Zůstane pro příště.)
3. Klikněte na každou položku na listu.

Výsledek: každé kliknutí přidá očíslovanou tečku, první tečka nese štítek jako "Podlahové vpusti: 7" a stavový řádek průběžně drží součet.

- **Začít další skupinu:** stiskněte {{key:Esc}} jednou (zruší výběr), změňte {{ui:Název skupiny}} a klikněte znovu.
- **Přidat do existující skupiny:** nejprve skupinu vyberte, pak zvolte {{ui:Počet}} a klikněte.
- **Odebrat značku:** při vybrané skupině podržte {{key:Shift}} a klikněte na tečku. Odebráním poslední tečky se odstraní i skupina. Na dotykové obrazovce bez klávesnice použijte místo toho {{key:Mod+Z}} nebo {{ui:Zpět}}.
- **Přejmenovat skupinu:** vyberte ji a upravte {{ui:Název skupiny}} v {{ui:Vlastnosti}}.

Skupina počtu patří jednomu listu. Počty na několika listech se v seznamu poznámek zobrazí jako samostatné skupiny.

## Změna nebo odstranění měřítka

Klikněte na tlačítko měřítka ve stavovém řádku. Pole ukáže aktuální měřítko; vyberte jiné, zvolte {{ui:Vybrat dva body}}, nebo zvolte {{ui:Odebrat měřítko}}.

Délky a plochy, které už jsou nakresleny, se hned **přeměří** novým měřítkem. {{ui:Zpět}} vrátí staré měřítko.

## Kam čísla jdou

- {{ui:Vlastnosti}} ukazuje hodnoty vybraného měření.
- Karta {{ui:Poznámky}} vypisuje každou hodnotu a její CSV má sloupec "Measurement". Viz [Seznam poznámek](topic:markups-list-and-export).
- Uložené PDF uchovává měřítko na stránce a zapisuje délky a plochy jako komentáře měření, takže je mohou zobrazit jiné PDF programy, které měření rozumí. Viz [Co se uloží do PDF](topic:what-the-pdf-keeps).

Pro úplný výkaz výměr s položkami, sestavami a cenami použijte TakeoffCraft: MarkupCraft měří pro revizi, ne pro odhady.
