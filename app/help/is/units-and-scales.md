---
title: Einingar, lengdir og mælikvarðar
summary: Allar leiðir til að skrifa lengd, einingarnar sem lengdir og flatarmál eru sýnd í, námundun og listi yfir forstillta mælikvarða.
keywords: einingar, fet, tommur, fet og tommur, metrar, millimetrar, sentimetrar, mælikvarði, forstilling, arkitektamælikvarði, verkfræðimælikvarði, hlutfall, ferfet, námundun, brot
from: 574b0291
---

## Að skrifa lengd

Þegar þú kvarðar út frá tveimur punktum skrifar þú raunverulega fjarlægð. MarkupCraft les allt þetta:

| Þú skrifar | Það þýðir |
|---|---|
| `24'-0"` | 24 fet |
| `12' 6 1/2"` eða `12'-6 1/2"` | 12 fet og 6½ tomma |
| `12' 6` | 12 fet og 6 tommur (tommumerki sleppt) |
| `6"` eða `1/2"` | tommur |
| `12.5'` eða `12.5 ft` | 12½ fet |
| `3 ft 6 in` | 3 fet og 6 tommur (einnig feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrar (einnig meter, metre, millimeter, centimetre…) |
| `24` | tala án einingar, í þeirri einingu sem valin er undir {{ui:Sýna lengdir í}} |

Bognar gæsalappir (’ ”) og tvær upphafsgæsalappir ('') fyrir tommur virka líka. Núll og neikvæðar lengdir eru ekki samþykktar.

:::warning
Komma er lesin sem tugabrotsmerki: `1,5 m` er 1,5 metrar. Ekki skrifa þúsundaskil: `1,200 mm` er lesið sem 1,2 millimetrar. Skrifaðu `1200 mm`.
:::

## Hvernig lengdir og flatarmál eru sýnd

| {{ui:Sýna lengdir í}} | Lengd birtist sem | Flatarmál birtist sem |
|---|---|---|
| {{ui:Fet og tommur}} | `12'-6 1/2"`, námundað að 1/16" | ferfet, tveir aukastafir |
| {{ui:Fet (tugabrot)}} | `12.54'`, tveir aukastafir | ferfet, tveir aukastafir |
| {{ui:Tommur}} | `150.5"`, allt að tveimur aukastöfum | fertommur, einn aukastafur |
| {{ui:Metrar}} | `3.820 m`, þrír aukastafir | fermetrar, þrír aukastafir |
| {{ui:Millimetrar}} | `3820 mm`, heilir millimetrar | fermillimetrar, heilir |

Ummál flatar notar lengdarsniðið.

## Forstilltir mælikvarðar

Forstillingarnar gera ráð fyrir að PDF-skráin sé í fullri prentaðri stærð: 72 PDF-punktar á tommu, eins og CAD-forrit teiknar hana.

| Flokkur | Mælikvarðar | Lengdir sýndar í |
|---|---|---|
| Arkitektúr | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Fet og tommur |
| Verkfræði | 1" = 10', 20', 30', 40', 50', 60', 100' | Fet (tugabrot) |
| Metrakerfi | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimetrar |
| Metrakerfi | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metrar |

Til að nota forstilltan mælikvarða en sjá lengdir í annarri einingu, kvarðaðu í staðinn út frá tveimur punktum og veldu einingu þar.

## Mælikvarðar sem önnur forrit vistuðu

Þegar PDF-skrá ber nú þegar mælikvarða fyrir síðu úr öðru forriti (mælikvarða sem er geymdur á síðunni), notar MarkupCraft hann ef hann er í fetum, tommum, metrum, sentimetrum eða millimetrum. Merki hans er sýnt eins og skráin segir það.

## Staðsetning á pappír

Stöðustikan sýnir hvar bendillinn er á pappírnum, í tommum frá efra vinstra horni blaðsins, sama hver mælikvarði blaðsins er. Skref Compare við hnikun eru í punktum (72 punktar á tommu).

## Nákvæmni

Mæling er jafngóð og kvörðunin og smellirnir þínir. Kvarðaðu út frá lengstu þekktu málsetningu sem þú finnur, auktu aðdrátt til að smella á endana og athugaðu síðan eina aðra málsetningu. PDF-skrá sem var skalað þegar hún var gerð („passa á síðu“ útprentun eða hálfstærðarsafn) er enn nákvæm eftir kvörðun út frá málsetningu, en ekki með forstillingu.
