---
title: A MarkupCraft beállításai
summary: Módosítsa a nevét, az új jelölések színét és vonalvastagságát, azt, hogy hová kerüljenek a másolatok beillesztéskor, valamint a hosszúságok mértékegységeit és a rajzlapon lévő pozíciót.
keywords: beállítások, preferenciák, lehetőségek, név, szerző, szín, alapértelmezett szín, vonalvastagság, vastag, vékony, beillesztés, beillesztés a mutatónál, eltolás, mértékegységek, metrikus, milliméter, hüvelyk, láb, visszaállítás
from: 63ad97fd
---

A beállításokat a felső sávban lévő fogaskerékkel nyithatja meg, vagy nyomja meg a {{key:Mod+,}} billentyűkombinációt. Az első lap, a {{ui:MarkupCraft}}, az ehhez az alkalmazáshoz tartozó beállításokat tartalmazza; a {{ui:Általános}} lap az összes CadCraft-alkalmazás közös beállításait (téma, eszköztár, panelek). A MarkupCraft beállításai csak ebben az alkalmazásban léteznek: itt módosítja őket, és ez a böngészőben is megmarad (lásd: [Mi marad meg ebben a böngészőben](topic:browser-storage)). A változás azonnal érvényesül, nincs mentendő.

## A neve

A {{ui:Név a jelöléseken}} az a név, amelyet minden új jelölés és válasz visel, és amelyet a mentett PDF-ek a megjegyzés szerzőjeként mutatnak. Ez ugyanaz a név, mint az állapotsor jobb szélén lévő gombon; bármelyik helyen módosítható. A már rajzolt jelölések megtartják a nevüket. Lásd: [A szerző nevének beállítása](topic:set-your-name).

## Új jelölések

- **{{ui:Jelölés színe}}**: az új tollak, vonalak, nyilak, téglalapok, ellipszisek, polivonalak, sokszögek, revíziófelhők, kiemelések (callout) és szövegek ezzel a színnel kezdődnek (alapesetben pirossal). A kiemelők, megjegyzések, bélyegzők, hosszak, területek és darabszámok megtartják a saját színüket, mert a színük azt jelzi, mi az.
- **{{ui:Vékony vonalak}}, {{ui:Normál}}, {{ui:Vastag vonalak}}**: ezeknél a jelöléseknél a vonalak szélességét a felére csökkentik, változatlanul hagyják, vagy a felével növelik.

Az eszközökhöz a {{ui:Tulajdonságok}} panelben választott szín vagy vonalvastagság (amikor az eszköz be van kapcsolva, és nincs kijelölés) felülírja ezeket. Az [eszköztár](topic:tool-chest) eszközei megtartják a saját stílusukat. A már rajzolt jelölések nem változnak: jelölje ki őket, és a {{ui:Tulajdonságok}} panelben módosítsa.

## Beillesztés

Hová kerül az, amit a {{key:Mod+V}} billentyűvel beilleszt:

- **{{ui:A mutatónál}}** (ez az alapbeállítás): ha a mutató a rajzlapon van, a másolat a mutató helyére középre kerül. Ha a mutató máshol van, az eredeti mellé kerül.
- **{{ui:A másolat mellé}}**: mindig az eredetitől kicsit lejjebb és jobbra, minden újabb beillesztésnél egy lépéssel tovább.

A {{ui:Beillesztés}} gomb és a {{key:Mod+Shift+V}} ({{ui:Beillesztés helyben}}) mindkét választással ugyanúgy működik. Lásd: [Másolás, beillesztés és kettőzés](topic:select-and-edit#copy-paste-and-duplicate).

## Mérések

- **{{ui:Hosszak megjelenítése ebben}}**: az a mértékegység, amelyet a rajzlap méretarány-párbeszédpanelje először felajánl, ha két pontból kalibrál: láb és hüvelyk, tizedes láb, hüvelyk, méter vagy milliméter. A már kalibrált rajzlapok megtartják a mértékegységüket. Lásd: [Rajzlap kalibrálása és mérés](topic:calibrate-and-measure).
- **{{ui:Pozíció a rajzlapon}}**: a képernyő bal alsó sarkában a mutató helyzetét hüvelykben vagy milliméterben mutatja. Ez a papír egy pozíciója, nem valós távolság.

## Visszaállítás

A párbeszédpanel alján lévő {{ui:MarkupCraft beállításainak visszaállítása}} gomb ezeket a beállításokat, valamint az {{ui:Általános}} lapon lévő panel- és eszköztárbeállításokat az induláskori állapotra állítja vissza. Megtartja a nevet, mert az azt mondja meg, ki a szerző, nem azt, hogyan szeret dolgozni; és megtartja az egyes eszközök saját panelén kiválasztott színeket.
