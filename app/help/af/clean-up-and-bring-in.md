---
title: Maak pen-streke skoon, en bring nabesigtigingskommentaar en terreinvordering in
summary: Verander vrye pen-streke in lyne, sirkels, boë en reghoeke; bring 'n vergunningspakket se nabesigtigingskommentaar en 'n terrein se opmetingsvordering in as notas.
keywords: pen, vrye hand, maak skoon, reguit trek, sirkel, lyn, reghoek, boog, vergunning, nabesigtigingskommentaar, vordering, hommeltuig, skandeer, opmeting, notas, csv
from: 547d8e42
---

## Maak pen-streke skoon

Teken met {{ui:Pen}}, maak dan die {{ui:Meer}}-kieslys oop in die Wysig-groep en kies {{ui:Maak pen-streke skoon}}. Elke gekose pen-streek word wat dit bedoel was: 'n reguit streek word 'n lyn (presies waterpas of loodreg gemaak as dit amper so was), 'n ronde een 'n elips, deel van 'n sirkel 'n boog, 'n geslote vierhoekige een 'n reghoek, enigiets anders 'n polilyn of poligoon. Los eindpunte van streke wat saam geteken is, word na mekaar getrek. Met geen pen-streek gekies nie, word elke pen-streek op die oop blad skoongemaak. Dit is een ontdoen-stap: Ctrl+Z plaas die vrye hand terug. Die vorm word op jou rekenaar bereken volgens vaste reëls; niks word êrens gestuur nie.

## Bring nabesigtigingskommentaar in

BimCraft se vergunningspakket bevat `01-review-comments.csv`: die kommentaar wat 'n planhersiener waarskynlik sal maak, elk met die reël, die klousule, wat nodig is, wat gevind is en wat om te doen. In die {{ui:Take}}-oortjie, maak {{ui:Kommentaar van vergunningsresensie}} oop en kies {{ui:Bring kommentaar in (CSV)}}. Elke kommentaar word 'n oop nota in 'n kolom aan die linkerkant van die oop blad; sleep elkeen na die plek waaroor dit gaan. Hulle word bereken uit die kontroles wat bestaan, nie deur 'n planeksaminator nie.

## Bring HAZOP-nodusblokke in

CadCraft se P&ID-byvoeging teken die nodusse van 'n HAZOP-studie en kan dit as {{ui:HAZOP-nodusblokke}} ('n JSON-lêer) stoor. Maak hier die gedrukte P&ID-blad oop, gaan na die {{ui:Take}}-oortjie, maak {{ui:HAZOP-nodusblokke}} oop en kies {{ui:Bring nodusblokke in (JSON)}}. Elke nodus word 'n oop reghoek op die blad met sy nommer, naam, toerusting en lyne in die teks, en die span skryf sy bevindinge as antwoorde daarop. Die blad word geneem soos gedruk op volle grootte vanaf die tekening se linkerbenedehoek; as dit op 'n ander skaal gedruk is, tik daardie getal eers in {{ui:Gedruk op}} (0.5 vir 1:2). 'n Nodus wat buite die bladsy val, word nie geteken nie, en die paneel sê hoeveel. Die merkers is 'n studiehulp: hulle wys waar die nodusse is, hulle beoordeel nie die studie nie.

## Bring terreinvordering in

CivilCraft hou 'n ry vir elke hommeltuigvlug of skandering van die terrein. In die {{ui:Take}}-oortjie, maak {{ui:Terreinvordering}} oop en kies {{ui:Bring vordering in (JSON)}}. Elke opmeting word 'n nota op die oop blad wat sê hoeveel gedoen is, wat oor is om af te grawe of op te vul, wat té diep uitgegrawe of té vol gemaak is en wat buite die plan staan. 'n Opmeting met iets buite die plan bly Oop; 'n skoon een is Aanvaar.
