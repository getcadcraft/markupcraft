---
title: Lap egy területének vagy fedvénynek a másolása
summary: Másoljon a lap egy részét téglalappal, ellipszissel vagy szabad formával, és illessze be másik lapba, a CadCraft-ba, a BimCraft-ba, a DetailCraft-ba vagy bármely programba, valódi méretben; másolja át átlátszó fedvényként, és igazítson képet két ponttal.
keywords: területmásolás, terület, kivágás, pillanatkép, levágás, régió, téglalap, ellipszis, kör, szabad forma, lasszó, kép, png, fedvény, átlátszó, áttetsző, színezés, átlátszatlanság, beillesztés, valódi méret, méretarány, igazítás, két pont, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Válassza a {{ui:Továbbiak}} › {{ui:Lap területének másolása…}} lehetőséget. Sáv nyílik a lap fölött.

## A terület kiválasztása

A sávban válassza a {{ui:Téglalap}}, {{ui:Ellipszis}} vagy {{ui:Szabad forma}} lehetőséget, majd húzzon a lapon:

- **Téglalap:** húzzon dobozt a másolandó rész köré.
- **Ellipszis:** húzzon dobozt; a benne lévő ellipszis másolódik, a rajta kívüli sarkok átlátszóak.
- **Szabad forma:** rajzoljon a másolandó rész köré; az alakzat magától záródik. Azon kívül átlátszó.

Húzzon újra, ha újra kezdi, vagy nyomja meg az {{key:Esc}} billentyűt.

## Másolás

- A {{ui:Jelölések belefoglalása}} a jelöléseit az oldallal együtt másolja; a tiszta rajzhoz vegye ki a pipát.
- {{ui:Felbontás}}: {{ui:Ahogy a képernyőn}}, 72, 150 vagy 300 dpi. A kép 3 MB alatt marad; ha egy nagy terület nagy felbontásnál meghaladná ezt, a felbontás csökken, és az állapotsor megmondja, mire.
- A {{ui:Másolás}} (vagy a {{key:Mod+C}} vagy az {{key:Enter}}) a területet PNG-képként a vágólapra teszi, amely beilleszthető Wordbe, e-mailbe, más PDF-programokba és rajzprogramokba.
- A {{ui:Mentés PNG-ként}} helyett a képet tölti le, olyan programhoz, amely beillesztéskor eldobja az átlátszó részeket.

## Másolás fedvényként

A {{ui:Másolás fedvényként}} az fehér papírt is átlátszóvá teszi, így csak a vonalak maradnak. A {{ui:Szín}} minden vonalnak egy színt ad (piros, kék, zöld, narancs vagy lila), hogy a fedvény kiemelkedjen az alatta lévő rajzból; a {{ui:Saját színek}} megtartja az eredeti színeket. Az {{ui:Erősség}} azt adja meg, milyen erősen induljon beillesztéskor a saját alkalmazásainkban (alapértelmezetten 50%, ha nem módosítja).

## Beillesztés

**A MarkupCraft-ban** a {{key:Mod+V}} bármely lapon a területet képjelölésként illeszti be a mutatónál. Valódi méretében érkezik:

- papíron ugyanakkora, mint a forrás lapon volt;
- ha mindkét lapnak van méretaránya, akkor a rajzon ugyanakkora: az 1:50-es lap területe az 1:100-as lapon a papírméretének felével érkezik.

Egy fedvény az erősségével indul; az {{ui:Átlátszatlanság}} értékét a {{ui:Tulajdonságok}} lapon változtassa. Mozgassa, méretezze, zárolja és törölje, mint bármely képet, és jelölje be a {{ui:Laposítás az oldalba mentéskor}} lehetőséget, ha a lapba szeretné rajzolni.

**A CadCraft-ban, a BimCraft-ban és a DetailCraft-ban** a másolat a méretét is tudja, így beillesztéskor valódi méretben érkezik, ha a lapnak volt méretaránya, különben kér egyet. Lásd az egyes alkalmazások súgóját a képekről.

## Kép igazítása két ponttal

Jelöljön ki egy képet vagy fedvényt, majd válassza a {{ui:Továbbiak}} › {{ui:Kép igazítása két ponttal}} lehetőséget:

1. Kattintson a képen egy pontra.
2. Kattintson arra a helyre, ahová ez a pont kerül.
3. Kattintson a képen egy második pontra, az elsőtől távol.
4. Kattintson arra a helyre, ahová ez a pont kerül.

A kép úgy lesz méretezve, mozgatva és elforgatva, hogy mindkét pont oda érkezzen, ahová kattintott. Az {{key:Esc}} megállítja; a {{key:Mod+Z}} egy lépésben visszavonja.

## Jó tudni

- A méret csak az azonos webhelyen futó alkalmazásaink között utazik a másolattal, és csak az elmúlt néhány órában készült másolat esetén; más program egyszerű képet kap.
- Ha a böngésző nem engedi, hogy a MarkupCraft használja a rendszer vágólapját, az állapotsor ezt jelzi: alkalmazásainkban a beillesztés még működik, a {{ui:Mentés PNG-ként}} pedig más programoknak.
- A kép igazítása úgy forgatja el a képet, hogy újrarajzolja a pixeleit, ezért az elforgatott kép kissé lágyabb, mint az eredeti.
