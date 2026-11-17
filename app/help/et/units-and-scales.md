---
title: Ühikud, pikkused ja mõõtkavad
summary: Kõik viisid pikkuse sisestamiseks, ühikud, milles pikkusi ja pindalu kuvatakse, ümardamine ning eelseadistatud mõõtkavade loend.
keywords: ühikud, jalad, tollid, jalad ja tollid, meetriline, meetrid, millimeetrid, sentimeetrid, mõõtkava, eelseadistatud, arhitektuurne mõõtkava, inseneri mõõtkava, suhe, ruutjalad, ümardamine, murdarvud
from: 574b0291
---

## Pikkuse sisestamine

Kui kalibreerid kahe punkti järgi, sisestad tegeliku kauguse. MarkupCraft loeb kõiki neid:

| Sisestad | See tähendab |
|---|---|
| `24'-0"` | 24 jalga |
| `12' 6 1/2"` või `12'-6 1/2"` | 12 jalga 6½ tolli |
| `12' 6` | 12 jalga 6 tolli (tollimärk jäetud ära) |
| `6"` või `1/2"` | tollid |
| `12.5'` või `12.5 ft` | 12½ jalga |
| `3 ft 6 in` | 3 jalga 6 tolli (töötavad ka feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | meetriline (töötavad ka meter, metre, millimeter, centimetre…) |
| `24` | ainult number, selles ühikus, mis on valitud jaotises {{ui:Näita pikkusi ühikutes}} |

Kõverad jutumärgid (’ ”) ja kaks apostroofi ('') tollide jaoks töötavad samuti. Null ja negatiivseid pikkusi ei aktsepteerita.

:::warning
Koma loetakse komakohana: `1,5 m` on 1,5 meetrit. Ära sisesta tuhandete eraldajaid: `1,200 mm` loetakse 1,2 millimeetriks. Sisesta `1200 mm`.
:::

## Kuidas pikkusi ja pindalu kuvatakse

| {{ui:Näita pikkusi ühikutes}} | Pikkus kuvatakse kujul | Pindala kuvatakse kujul |
|---|---|---|
| {{ui:Jalad ja tollid}} | `12'-6 1/2"`, ümardatud 1/16 tollini | ruutjalad, kaks kohta pärast koma |
| {{ui:Kümnendjalad}} | `12.54'`, kaks kohta pärast koma | ruutjalad, kaks kohta pärast koma |
| {{ui:Tollid}} | `150.5"`, kuni kaks kohta pärast koma | ruuttollid, üks koht pärast koma |
| {{ui:Meetrid}} | `3.820 m`, kolm kohta pärast koma | ruutmeetrid, kolm kohta pärast koma |
| {{ui:Millimeetrid}} | `3820 mm`, täisarvud millimeetrites | ruutmillimeetrid, täisarvud |

Pindala ümbermõõt kasutab pikkuse vormingut.

## Eelseadistatud mõõtkavad

Eelseadistused eeldavad, et PDF on oma trükitud täissuuruses: 72 PDF-punkti tolli kohta, nii nagu CAD-programm seda joonistab.

| Rühm | Mõõtkavad | Pikkused kuvatakse |
|---|---|---|
| Arhitektuurne | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Jalad ja tollid |
| Insener | 1" = 10', 20', 30', 40', 50', 60', 100' | Kümnendjalad |
| Meetriline | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeetrid |
| Meetriline | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meetrid |

Kui tahad kasutada eelseadistatud mõõtkava, aga näha pikkusi muus ühikus, kalibreeri hoopis kahe punkti järgi ja vali ühik seal.

## Teiste programmide salvestatud mõõtkavad

Kui PDF juba sisaldab lehe jaoks mõõtkava teisest programmist (lehel salvestatud mõõtkava), kasutab MarkupCraft seda, kui see on jalgades, tollides, meetrites, sentimeetrites või millimeetrites. Silt kuvatakse nii, nagu fail seda ütleb.

## Paberi asukohad

Olekuribal näidatakse, kus kursor on paberil, tollides lehe vasakust ülanurgast, sõltumata lehe mõõtkavast. Võrdluse nihutussammud on punktides (72 punkti tolli kohta).

## Täpsus

Mõõtmine on sama hea kui kalibreerimine ja sinu klõpsud. Kalibreeri pikima teadaoleva mõõtme järgi, mida leiad, suumi sisse, et klõpsata selle otstele, ning kontrolli siis üht teist mõõtmet. PDF, mis skaleeriti loomisel (plott „sobita lehele“ või poolsuurune komplekt), on pärast mõõtme järgi kalibreerimist ikka täpne, kuid mitte eelseadistusega.
