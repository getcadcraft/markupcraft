---
title: Mga unit, haba at scale
summary: Lahat ng paraan ng pag-type ng haba, ang mga unit kung saan ipinapakita ang haba at lawak, pag-round, at listahan ng mga preset na scale.
keywords: units, feet, inches, feet and inches, metric, meters, millimeters, centimeters, scale, preset, architectural scale, engineering scale, ratio, square feet, pag-round, mga fraction
from: 574b0291
---

## Pag-type ng haba

Kapag nag-calibrate ka mula sa dalawang punto, i-type mo ang totoong distansya. Binabasa ng MarkupCraft ang lahat ng ito:

| Ina-type mo | Ibig sabihin |
|---|---|
| `24'-0"` | 24 feet |
| `12' 6 1/2"` o `12'-6 1/2"` | 12 feet 6½ inches |
| `12' 6` | 12 feet 6 inches (walang inch mark) |
| `6"` o `1/2"` | inches |
| `12.5'` o `12.5 ft` | 12½ feet |
| `3 ft 6 in` | 3 feet 6 inches (tinatanggap din ang feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metric (tinatanggap din ang meter, metre, millimeter, centimetre…) |
| `24` | bare na numero, sa unit na pinili sa ilalim ng {{ui:Ipakita ang haba sa}} |

Tinatanggap din ang curly quotes (’ ”) at dalawang apostrophe ('') para sa inches. Tinatanggihan ang zero at negatibong haba.

:::warning
Binabasa ang kuwit bilang decimal point: ang `1,5 m` ay 1.5 meters. Huwag mag-type ng thousands separator: ang `1,200 mm` ay binabasa bilang 1.2 millimeters. I-type ang `1200 mm`.
:::

## Paano ipinapakita ang haba at lawak

| {{ui:Ipakita ang haba sa}} | Ang haba ay lumalabas bilang | Ang lawak ay lumalabas bilang |
|---|---|---|
| {{ui:Talampakan at pulgada}} | `12'-6 1/2"`, naka-round sa 1/16" | square feet, dalawang decimal |
| {{ui:Decimal na feet}} | `12.54'`, dalawang decimal | square feet, dalawang decimal |
| {{ui:Inches}} | `150.5"`, hanggang dalawang decimal | square inches, isang decimal |
| {{ui:Meters}} | `3.820 m`, tatlong decimal | square meters, tatlong decimal |
| {{ui:Millimeters}} | `3820 mm`, buong millimeter | square millimeters, buo |

Ang perimeter ng isang lugar ay gumagamit ng format ng haba.

## Mga preset na scale

Ipinapalagay ng mga preset na nasa buong naka-print na laki ang PDF: 72 PDF point sa bawat pulgada, gaya ng pag-plot ng CAD program.

| Grupo | Mga scale | Ipinapakita ang haba sa |
|---|---|---|
| Architectural | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Talampakan at pulgada |
| Engineering | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimal na feet |
| Metric | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeters |
| Metric | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meters |

Para gamitin ang preset na scale pero makita ang haba sa ibang unit, mag-calibrate mula sa dalawang punto at piliin ang unit doon.

## Mga scale na na-save ng ibang program

Kapag may dala nang scale ang PDF para sa isang pahina mula sa ibang program (isang measurement scale na nakaimbak sa pahina), ginagamit ito ng MarkupCraft kung nasa feet, inches, meters, centimeters o millimeters ito. Ipinapakita ang label nito gaya ng sinasabi ng file.

## Posisyon sa papel

Ipinapakita ng status bar kung nasaan ang pointer sa papel, sa inches mula sa kaliwang itaas na sulok ng sheet, anuman ang scale ng sheet. Ang nudge steps ng Compare ay nasa points (72 points sa bawat pulgada).

## Katumpakan

Kasing-tumpak lang ng calibration at ng mga click mo ang sukat. Mag-calibrate sa pinakamahabang kilalang dimensyon na mahahanap mo, mag-zoom in para i-click ang mga dulo nito, pagkatapos suriin ang isa pang dimensyon. Ang PDF na na-scale noong ginawa ito (isang plot na "fit to page" o set na kalahating laki) ay tumpak pa rin pagkatapos mag-calibrate mula sa isang dimensyon, pero hindi kapag preset ang ginamit.
