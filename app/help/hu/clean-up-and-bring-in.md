---
title: Tollvonások tisztítása, valamint felülvizsgálati megjegyzések és építési előrehaladás behozatala
summary: A szabadkézi tollvonásokat vonalakká, körökké, ívekké és téglalapokká alakítja; egy engedélycsomag felülvizsgálati megjegyzéseit és egy helyszín felmérési előrehaladását jegyzetekként hozza be.
keywords: toll, szabadkézi, tisztítás, kiegyenesítés, kör, vonal, téglalap, ív, engedély, felülvizsgálati megjegyzések, előrehaladás, drón, szkennelés, felmérés, jegyzetek, csv
from: 547d8e42
---

## Tollvonások tisztítása

Rajzoljon a {{ui:Toll}} eszközzel, majd nyissa meg a Szerkesztés csoport {{ui:Továbbiak}} menüjét, és válassza a {{ui:Tollvonások tisztítása}} lehetőséget. Minden kijelölt tollvonás abból lesz, aminek szánták: az egyenes vonal vonallá (ha közel volt hozzá, pontosan vízszintessé vagy függőlegessé teszi), a kerek vonal ellipszissé, a kör egy része ívvé, a zárt, négysarkú alakzat téglalappá, minden más polivonallá vagy sokszöggé. Az együtt rajzolt vonalak szabad végei egymásra húzódnak. Ha nincs kijelölt tollvonás, a nyitott lap minden tollvonása megtisztul. Ez egy visszavonási lépés: a Ctrl+Z visszaállítja a szabadkézi rajzot. Az alakzatot a számítógépen, rögzített szabályok szerint határozzuk meg; semmi nem kerül elküldésre.

## Felülvizsgálati megjegyzések behozatala

A BimCraft engedélycsomagja tartalmazza a `01-review-comments.csv` fájlt: azokat a megjegyzéseket, amelyeket egy tervellenőr valószínűleg tesz, mindegyik a szabállyal, a pontjával, a szükséges feltétellel, a talált hibával és a teendővel együtt. A {{ui:Feladatok}} lapon nyissa meg az {{ui:Engedélyezési észrevételek}} lehetőséget, és válassza a {{ui:Észrevételek behozatala (CSV)}} lehetőséget. Minden megjegyzés nyitott jegyzetként jelenik meg a nyitott lap bal szélén lévő oszlopban; húzza mindegyiket oda, amire vonatkozik. Ezek a meglévő ellenőrzésekből készülnek, nem egy tervellenőr véleményéből.

## HAZOP-csomópontdobozok behozatala

A CadCraft P&ID bővítménye a HAZOP-vizsgálat csomópontjait rajzolja meg, és a {{ui:HAZOP-csomópontdobozok}} (JSON-fájlként) mentheti őket. Nyissa meg itt a nyomtatott P&ID lapot, lépjen a {{ui:Feladatok}} lapra, nyissa meg a {{ui:HAZOP-csomópontdobozok}} lehetőséget, és válassza a {{ui:Csomópontdobozok beolvasása (JSON)}} lehetőséget. Minden csomópont nyitott téglalapként jelenik meg a lapon, benne a számával, nevével, berendezésével és vonalaival; a csapat a megállapításait válaszként írja rá. A lapot teljes méretben veszi figyelembe, a rajz bal alsó sarkától. Ha más méretarányban lett nyomtatva, előbb írja be ezt a számot a „Nyomtatott méretarány” mezőbe (0.5 az 1:2-höz). Az oldalon kívül eső csomópont nem rajzolódik ki, a panel pedig megmondja, hány ilyen van. A jelölések a vizsgálat segédeszközei: megmutatják, hol vannak a csomópontok, de nem értékelik a vizsgálatot.

## Építési előrehaladás behozatala

A CivilCraft a helyszín minden drónrepüléséről vagy szkenneléséről tart nyilván egy sort. A {{ui:Feladatok}} lapon nyissa meg az {{ui:Építési előrehaladás}} lehetőséget, és válassza a {{ui:Előrehaladás behozatala (JSON)}} lehetőséget. Minden felmérés a nyitott lapon jegyzetté válik, amely megmondja, mennyi készült el, mennyi van hátra kivágásból vagy feltöltésből, mi lett túlkiásva vagy túltöltve, és mi áll ki a tervből. Ha valami kilóg a tervből, a felmérés Nyitott marad; a tiszta felmérés Elfogadva állapotú lesz.
