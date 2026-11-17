---
title: Njësitë, gjatësitë dhe shkallët
summary: Çdo mënyrë për të shkruar një gjatësi, njësitë në të cilat shfaqen gjatësitë dhe sipërfaqet, rrumbullimi dhe lista e shkallëve të paracaktuara.
keywords: njësi, këmbë, inç, këmbë dhe inç, metrik, metra, milimetra, centimetra, shkallë, e paracaktuar, shkallë arkitekturore, shkallë inxhinierike, raport, këmbë katrore, rrumbullim, thyesa
from: 574b0291
---

## Shkrimi i një gjatësie

Kur kalibron nga dy pika, shkruan distancën reale. MarkupCraft i lexon të gjitha këto:

| Ti shkruan | Do të thotë |
|---|---|
| `24'-0"` | 24 këmbë |
| `12' 6 1/2"` ose `12'-6 1/2"` | 12 këmbë 6½ inç |
| `12' 6` | 12 këmbë 6 inç (pa shenjën e inçit) |
| `6"` ose `1/2"` | inç |
| `12.5'` ose `12.5 ft` | 12½ këmbë |
| `3 ft 6 in` | 3 këmbë 6 inç (edhe feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrike (edhe meter, metre, millimeter, centimetre…) |
| `24` | një numër i thjeshtë, në njësinë e zgjedhur te {{ui:Trego gjatësitë në}} |

Thonjëzat e lakuara (’ ”) dhe dy apostrofa ('') për inç gjithashtu funksionojnë. Gjatësitë zero dhe negative refuzohen.

:::warning
Presja lexohet si presje dhjetore: `1,5 m` është 1.5 metra. Mos shkruaj ndarës mijësh: `1,200 mm` lexohet si 1.2 milimetra. Shkruaj `1200 mm`.
:::

## Si shfaqen gjatësitë dhe sipërfaqet

| {{ui:Trego gjatësitë në}} | Një gjatësi shfaqet si | Një sipërfaqe shfaqet si |
|---|---|---|
| {{ui:Këmbë dhe inç}} | `12'-6 1/2"`, rrumbullosur në 1/16" | këmbë katrore, dy shifra pas presjes |
| {{ui:Këmbë dhjetore}} | `12.54'`, dy shifra pas presjes | këmbë katrore, dy shifra pas presjes |
| {{ui:Inç}} | `150.5"`, deri në dy shifra pas presjes | inç katrorë, një shifër pas presjes |
| {{ui:Metra}} | `3.820 m`, tre shifra pas presjes | metra katrorë, tre shifra pas presjes |
| {{ui:Milimetra}} | `3820 mm`, milimetra të plotë | milimetra katrorë, të plotë |

Perimetri i një sipërfaqeje përdor formatin e gjatësisë.

## Shkallët e paracaktuara

Të paracaktuarat supozojnë se PDF-ja është në madhësinë e plotë të printuar: 72 pika PDF për inç, ashtu si e nxjerr një program CAD.

| Grupi | Shkallët | Gjatësitë shfaqen në |
|---|---|---|
| Arkitekturore | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Këmbë dhe inç |
| Inxhinierike | 1" = 10', 20', 30', 40', 50', 60', 100' | Këmbë dhjetore |
| Metrike | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetra |
| Metrike | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metra |

Për të përdorur një shkallë të paracaktuar por për të parë gjatësitë në një njësi tjetër, kalibro nga dy pika dhe zgjidh njësinë atje.

## Shkallët që kanë ruajtur programe të tjera

Kur një PDF ka tashmë një shkallë për një faqe nga një program tjetër (një shkallë matjeje e ruajtur në faqe), MarkupCraft e përdor nëse është në këmbë, inç, metra, centimetra ose milimetra. Etiketa e saj shfaqet ashtu si e shpreh skedari.

## Pozicionet në letër

Shiriti i gjendjes tregon ku është treguesi mbi letër, në inç nga këndi i sipërm majtas i fletës, pavarësisht shkallës së fletës. Hapat e lëvizjes së Compare janë në pika (72 pika për inç).

## Saktësia

Një matje është aq e saktë sa kalibrimi dhe klikimet e tua. Kalibro mbi përmasën më të gjatë të njohur që gjen, zmadho për të klikuar skajet e saj, pastaj kontrollo një përmasë tjetër. Një PDF që është shkallëzuar kur u krijua (një printim "përshtatur në faqe" ose një grup në gjysmë madhësie) mbetet i saktë pasi të kalibrohet nga një përmasë, por jo me një të paracaktuar.
