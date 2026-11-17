---
title: Wat in die PDF gestoor word
summary: Presies wat die gemerkte kopie bevat, wat ander PDF-programme sien, en wat teruggelees word wanneer jy 'n lêer oopmaak.
keywords: pdf-annotasies, kommentaar, gestoorde data, heen-en-terug, bladetikette, meting, hersieningstatus, antwoorde, herlees, verenigbaarheid, weer oopmaak, private data
from: 6439ad28
---

Die gemerkte kopie is die oorspronklike PDF met kommentaar (PDF-annotasies) bygevoeg. Die bladsye self, hul tekeninge, teks, boekmerke en skakels word gekopieer soos hulle was.

## Elke opmerking

| MarkupCraft | Gestoor as | Ander PDF-kykers wys |
|---|---|---|
| Reghoek, wolkkassie | Vierkant-annotasie (wolk: wolkerige rand) | 'n reghoek- of wolkkommentaar |
| Ellips | Sirkel-annotasie | 'n ellipskommentaar |
| Veelhoek, vrye wolk | Veelhoek-annotasie (wolk: wolkerige rand) | 'n veelhoek- of wolkkommentaar |
| Polilyn | PolyLine-annotasie | 'n polilynkommentaar |
| Lyn, pyl | Lyn-annotasie (pyl: geslote pylpunt) | 'n lyn- of pylkommentaar |
| Lengte | Lyn-annotasie gemerk as 'n maat, met 'n meting | 'n lengtemeting, waar die kyker dit ondersteun |
| Oppervlakte | Veelhoek-annotasie gemerk as 'n oppervlakte, met 'n meting | 'n oppervlaktemeting, waar dit ondersteun word; andersins 'n veelhoek |
| Telgroep | Een ink-annotasie, 'n ring per item; die teks is "group: n" | 'n ink-kommentaar |
| Pen, merker | Ink-annotasie (merker só gemerk) | 'n ink-kommentaar |
| Teks | FreeText-annotasie | 'n tekskassie-kommentaar |
| Aanwysing | FreeText-annotasie met 'n aanwysingslyn | 'n aanwysingskommentaar |
| Notas | Teks-annotasie | 'n plakkernota wat oopmaak na sy teks |
| Stempel | Stempel-annotasie | 'n stempelkommentaar |

Elkeen word gestoor met:

- **sy eie voorkoms**, presies soos MarkupCraft dit op die skerm teken, sodat dit in enige kyker dieselfde lyk en dieselfde druk, insluitend die ponsnommer-kenteken;
- **die outeur**, **die geskep- en gewysigde datums**, **die onderwerp**, **die kommentaarteks** (vir tekskassies en aanwysings, die teks en die kommentaar), **die kleur** en **die ondeursigtigheid**;
- **sy MarkupCraft-besonderhede** in 'n private inskrywing wat ander programme ignoreer: status, ponsitem, styl en soort, sodat dit presies weer oopgaan.

## Gesprekke en statusse

- Elke antwoord word gestoor as 'n antwoordkommentaar gekoppel aan sy opmerking, met sy outeur, datum en teks. Antwoorde het nie hul eie ikoon op die blad nie.
- Elke statusverandering word gestoor as 'n antwoord wat 'n hersieningstatus dra. Ander hersieningsinstrumente wys dit as Aanvaar, Verwerp of Voltooi; Oop word gestoor as geen status nie.
- 'n Opmerking met 'n status anders as Oop, maar sonder 'n gelogde statusverandering, kry een hersieningstatus-antwoord, sodat ander programme die status ook sien.
- Antwoorde op alleen-lees-kommentaar uit die oorspronklike lêer word op dieselfde manier gestoor, gekoppel aan daardie kommentaar.

## Elke blad

- **Skaal:** 'n gekalibreerde blad kry 'n meetvenster wat die bladsy dek (die standaardmanier om 'n bladskaal te stoor) en MarkupCraft se eie kopie van die kalibrasie.
- **Bladnommer:** 'n nommer wat met {{ui:Hernoem blad}} getik word, word die bladetiket. Wanneer enige bladsy van 'n lêer een het, kry elke bladsy van daardie lêer 'n etiket: sy getikte nommer, anders sy ou etiket, anders sy bladsynommer.
- **Bladtitel:** 'n getikte titel word slegs vir MarkupCraft gestoor; ander kykers wys dit nie.

## Teks en karakters

Teks word in Helvetica geskryf, wat elke PDF-kyker het. Letters buite die Wes-Europese stel (Windows-1252) word as "?" in die kopie gedruk; die boodskap oor stoor tel hulle.

## Berekeningsblaaie en redes

Berekeningsblaaie en redes word in 'n private inskrywing van die PDF gehou, genaamd `/MarkupCraftShell`. Ander PDF-programme ignoreer dit. 'n Ouer MarkupCraft ignoreer dit ook, en laat dit val die volgende keer wat dit daardie lêer stoor.

## Wat gebeur met kommentaar wat reeds daar was

Wanneer jy 'n PDF oopmaak wat reeds kommentaar het:

- MarkupCraft se eie kommentaar word presies teruggelees. As 'n ander program een geskuif of herboemel het, wen die nuwe posisie.
- Reghoeke, ellipse, lyne, polilyne, veelhoeke, ink, tekskassies en plakkernotas van ander programme word wysigbare opmerkings. **Wanneer jy stoor, verwyder MarkupCraft die oorspronkellikes en skryf dit weer op sy eie manier**, met hul opspringers en antwoorde. Hul voorkoms kan effens verander.
- Hersieningstatusse van ander programme stel die status; die nuutste wen.
- Alles anders (teksmerkings, ander programme se stempels en spesiale soorte) word in die kopie **onaangeraak bewaar**, alleen-lees.
- Skakels en vorm-velde word onaangeraak bewaar en word nie gelys nie.

As jy dieselfde lêer weer stoor, word niks ooit verdubbel nie: die opmerkings wat MarkupCraft gelees het, word vervang, nie weer bygevoeg nie.

## Wat nie verander word nie

Jou oorspronklike lêer op die skyf word nooit verander nie. Die kopie is nie vir grootte geoptimeer nie, so dit kan effens groter wees as die oorspronklike. Beskermde (geënkripteerde) PDF's kan nie gestoor word nie.
