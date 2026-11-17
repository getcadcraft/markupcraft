---
title: Mértékegységek, hosszúságok és léptékek
summary: A hosszúságok beírásának minden módja, a hosszúságok és területek megjelenítési egységei, a kerekítés, és az előre beállított léptékek listája.
keywords: mértékegységek, láb, hüvelyk, láb és hüvelyk, metrikus, méter, milliméter, centiméter, lépték, előre beállított, építészeti lépték, mérnöki lépték, arány, négyzetláb, kerekítés, törtek
from: 574b0291
---

## Hossz beírása

Ha két pontból kalibrál, be kell írnia a valódi távolságot. A MarkupCraft ezeket mind olvassa:

| Beírja | Ez jelent |
|---|---|
| `24'-0"` | 24 láb |
| `12' 6 1/2"` vagy `12'-6 1/2"` | 12 láb 6½ hüvelyk |
| `12' 6` | 12 láb 6 hüvelyk (a hüvelyk-jel nélkül) |
| `6"` vagy `1/2"` | hüvelyk |
| `12.5'` vagy `12.5 ft` | 12½ láb |
| `3 ft 6 in` | 3 láb 6 hüvelyk (a feet, foot, inch, inches szavak is működnek) |
| `3.5 m`, `90 cm`, `900 mm` | metrikus (a meter, metre, millimeter, centimetre… is működik) |
| `24` | szám a {{ui:Show lengths in}} alatt kiválasztott egységben |

A görbe idézőjelek (’ ”) és a két aposztróf ('') a hüvelyk jelölésére is működnek. A nulla és a negatív hosszúságok nem fogadhatók el.

:::warning
A vessző tizedespontként értelmeződik: `1,5 m` 1,5 métert jelent. Ne írjon ezres elválasztót: `1,200 mm` 1,2 milliméterként olvasódik. Írja be így: `1200 mm`.
:::

## Hogyan jelennek meg a hosszúságok és területek

| {{ui:Show lengths in}} | A hosszúság így jelenik meg | A terület így jelenik meg |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, 1/16 hüvelykre kerekítve | négyzetláb, két tizedesjegy |
| {{ui:Decimal feet}} | `12.54'`, két tizedesjegy | négyzetláb, két tizedesjegy |
| {{ui:Inches}} | `150.5"`, legfeljebb két tizedesjegy | négyzethüvelyk, egy tizedesjegy |
| {{ui:Meters}} | `3.820 m`, három tizedesjegy | négyzetméter, három tizedesjegy |
| {{ui:Millimeters}} | `3820 mm`, egész milliméter | négyzetmilliméter, egész |

Egy terület kerülete a hosszúság formátumát használja.

## Előre beállított léptékek

Az előre beállítások azt feltételezik, hogy a PDF a teljes nyomtatott méretében van: 72 PDF-pont egy hüvelyknek felel meg, ahogy a CAD-program kirajzolja.

| Csoport | Léptékek | Hosszúságok ebben jelennek meg |
|---|---|---|
| Építészeti | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Láb és hüvelyk |
| Mérnöki | 1" = 10', 20', 30', 40', 50', 60', 100' | Tizedes láb |
| Metrikus | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milliméter |
| Metrikus | 1:100, 1:200, 1:250, 1:500, 1:1000 | Méter |

Ha előre beállított léptéket szeretne használni, de a hosszúságokat más egységben látni, kalibráljon inkább két pontból, és ott válassza ki az egységet.

## Más programok által mentett léptékek

Ha a PDF már tartalmaz léptéket egy oldalhoz egy másik programtól (az oldalon tárolt mérési lépték), a MarkupCraft azt használja, ha láb, hüvelyk, méter, centiméter vagy milliméter. A címkéjét úgy jeleníti meg, ahogy a fájl megadja.

## Papíron lévő pozíciók

Az állapotsor megmutatja, hol van a mutató a papíron, hüvelykben a rajzlap bal felső sarkától mérve, a rajzlap léptékétől függetlenül. A Compare finom léptetésének lépésköze pontban értendő (72 pont egy hüvelyk).

## Pontosság

A mérés csak annyira pontos, mint a kalibrálás és a kattintásai. Kalibráljon a leghosszabb ismert mérete mentén, amelyet találni tud, nagyítson rá a végpontok kattintásakor, majd ellenőrizzen egy másik méretet. Egy PDF, amelyet létrehozásakor méretezték (egy „oldalra illesztett” nyomtatás vagy féleméretű készlet), kalibrálás után egy méret alapján továbbra is pontos, de előre beállított léptékkel nem.
