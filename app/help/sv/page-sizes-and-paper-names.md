---
title: Sidstorlekar och pappersnamn
summary: Se varje PDF-sidas storlek i millimeter och tum samt dess pappersnamn (A-, B- och C-serierna, ANSI, ARCH), och gruppera en blandad uppsättning efter storlek för att hitta de udda sidorna.
keywords: sidstorlek, pappersstorlek, pappersnamn, a0, a1, a2, a3, a4, b-serien, c-serien, ansi, arch, arkitektur, mm, tum, anpassad storlek, efter storlek, udda storlek, blandad uppsättning, kontrollera pdf, kund, problem, mediabox, cropbox, rotation
from: 08e1354f
---

Innan en uppsättning går till en kund, kontrollera att varje blad har den storlek det ska ha. {{ui:MarkupCraft}} läser varje sidas storlek från själva PDF:en och namnger papperet.

## Vad du gör

Titta på ett blads storlek och gruppera sedan hela uppsättningen efter storlek.

## Steg

1. Öppna PDF:erna ({{ui:Öppna}}), tryck sedan på {{key:Esc}} tills inget är markerat och {{ui:Markera}} är på.
2. Titta i {{ui:Egenskaper}}. {{ui:Papper}} visar namnet och riktningen, till exempel ”A4, stående”. {{ui:Storlek}} ger millimeter och tum.
3. Varje rad i listan {{ui:Blad}} har en storleksrad under bladnamnet.
4. Välj {{ui:Efter storlek}} i rubriken för {{ui:Blad}}. Listan samlar bladen under en rubrik per storlek, största gruppen först. En storlek med bara några få blad markeras som avvikande.
5. Välj {{ui:Efter storlek}} igen för att gå tillbaka till uppsättningens egen ordning.

Resultat: en sida som har en annan storlek än resten syns tydligt innan du skickar uppsättningen.

## Så väljs namnet

- Storleken kommer från sidans box i PDF:en med rotationen tillämpad, så en liggande A3 är fortfarande A3.
- Namnen är A- och B-serierna (ISO 216), C-serien (ISO 269), ANSI A till E och ARCH A till E.
- En sida inom 2 mm från en namngiven storlek får det namnet. Övriga sidor säger ”{{ui:anpassad}}” och {{ui:Närmaste namngivna storlek}} anger vilken storlek som ligger närmast och hur långt det är ifrån.
- Tum kommer från den verkliga sidstorleken, så en A4-sida är 8.26 × 11.69 in.

## I filerna du sparar

Sammanfattningsarbetsboken ({{ui:Markeringslistan}}, sedan kalkylbladet) har en kolumn {{ui:Pappersstorlek}} på bladet {{ui:Per blad}} och ett kalkylblad {{ui:Sidstorlekar}}. PDF-rapporten har en rad ”Sidstorlekar” med antalet av varje storlek.

:::note
De ANSI- och ARCH-tumvärdena skrevs av publicerade tabeller och har inte jämförts med de tryckta standarderna. Behandla en ”anpassad” sida som ligger nära någon av dem som något du kontrollerar själv.
:::
