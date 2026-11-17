---
title: Jednotky, délky a měřítka
summary: Všechny způsoby zadání délky, jednotky, v nichž se zobrazují délky a plochy, zaokrouhlování a seznam předvolených měřítek.
keywords: jednotky, stopy, palce, stopy a palce, metrické, metry, milimetry, centimetry, měřítko, předvolba, architektonické měřítko, inženýrské měřítko, poměr, čtvereční stopy, zaokrouhlování, zlomky
from: 574b0291
---

## Zadání délky

Při kalibraci ze dvou bodů zadáte skutečnou vzdálenost. MarkupCraft čte všechny tyto tvary:

| Zadáte | Znamená |
|---|---|
| `24'-0"` | 24 stop |
| `12' 6 1/2"` nebo `12'-6 1/2"` | 12 stop 6½ palce |
| `12' 6` | 12 stop 6 palců (značka palců vynechána) |
| `6"` nebo `1/2"` | palce |
| `12.5'` nebo `12.5 ft` | 12½ stopy |
| `3 ft 6 in` | 3 stopy 6 palců (také feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrické (také meter, metre, millimeter, centimetre…) |
| `24` | holé číslo, v jednotce zvolené pod {{ui:Zobrazovat délky v}} |

Typografické uvozovky (’ ”) a dvojité apostrofy ('') pro palce fungují také. Nulové a záporné délky se odmítnou.

:::warning
Čárka se čte jako desetinná čárka: `1,5 m` je 1.5 metru. Nezadávejte oddělovače tisíců: `1,200 mm` se čte jako 1.2 milimetru. Napište `1200 mm`.
:::

## Jak se zobrazují délky a plochy

| {{ui:Zobrazovat délky v}} | Délka se zobrazí jako | Plocha se zobrazí jako |
|---|---|---|
| {{ui:Stopy a palce}} | `12'-6 1/2"`, zaokrouhleno na 1/16" | čtvereční stopy, dvě desetinná místa |
| {{ui:Desetinné stopy}} | `12.54'`, dvě desetinná místa | čtvereční stopy, dvě desetinná místa |
| {{ui:Palce}} | `150.5"`, až dvě desetinná místa | čtvereční palce, jedno desetinné místo |
| {{ui:Metry}} | `3.820 m`, tři desetinná místa | čtvereční metry, tři desetinná místa |
| {{ui:Milimetry}} | `3820 mm`, celé milimetry | čtvereční milimetry, celé |

Obvod plochy používá formát délky.

## Předvolená měřítka

Předvolby předpokládají, že PDF je v plné vytištěné velikosti: 72 bodů PDF na palec, jak je vykresluje CAD program.

| Skupina | Měřítka | Délky se zobrazují v |
|---|---|---|
| Architektonické | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Stopy a palce |
| Inženýrské | 1" = 10', 20', 30', 40', 50', 60', 100' | Desetinné stopy |
| Metrické | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetry |
| Metrické | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metry |

Chcete-li použít předvolené měřítko, ale vidět délky v jiné jednotce, kalibrujte místo toho ze dvou bodů a jednotku zvolte tam.

## Měřítka uložená jinými programy

Když PDF už pro stránku nese měřítko z jiného programu (měřítko uložené na stránce), MarkupCraft ho použije, pokud je v stopách, palcích, metrech, centimetrech nebo milimetrech. Jeho popisek se zobrazí tak, jak ho soubor uvádí.

## Pozice na papíře

Stavový řádek ukazuje, kde je ukazatel na papíru, v palcích od levého horního rohu listu, bez ohledu na měřítko listu. Kroky posunu při porovnávání jsou v bodech (72 bodů na palec).

## Přesnost

Měření je tak přesné, jak přesná je kalibrace a vaše kliknutí. Kalibrujte přes nejdelší známý rozměr, který najdete, přibližte si pro kliknutí na jeho konce, a pak ověřte jiný rozměr. PDF, které bylo při vzniku změněno měřítko (tisk „přizpůsobit stránce“ nebo sada v poloviční velikosti), zůstává přesné po kalibraci podle rozměru, ale ne s předvolbou.
