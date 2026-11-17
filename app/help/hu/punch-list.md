---
title: Hibalista készítése
summary: Alakítsa a jelöléseket számozott hibatételekké felelőssel, határidővel és állapottal, és exportálja a listát.
keywords: hibalista, hiba, hibajegy, hiányosság, terepi problémák, megfigyelés, hozzárendelés, felelős, határidő, átadás, bejárás, szám
from: b98b38e6
---

A hibatétel olyan jelölés, amelynek van száma, felelőse, határideje és tételállapota. A szám a jelölés mellé kerül a rajzlapra, így a kinyomtatott rajzlap és a lista egyezik.

## Tételek hozzáadása

1. Jelölje meg minden problémát a rajzlapokon: felhővel, kiemeléssel, megjegyzéssel, bármivel.
2. Jelöljön ki egyet vagy többet közülük (lásd [Jelölések kijelölése, mozgatása és módosítása](topic:select-and-edit)).
3. Vagy nyissa meg a {{ui:Hibalista}} lapot, és válassza a {{ui:A kijelöltek hozzáadása a hibalistához}} parancsot, vagy a {{ui:Tulajdonságok}} részben válassza a {{ui:Hozzáadás a hibalistához}} lehetőséget.

Eredmény: minden jelölés a következő számot kapja (1, 2, 3…), a rajzlapok sorrendjében, azon belül pedig a rajzolás sorrendjében. A rajzlapon számozott jelvény jelenik meg, az állapotsor pedig ezt írja ki: „3 tétel hozzáadva a hibalistához.” A már számot kapott jelölések és a csak olvasható megjegyzések kimaradnak.

## A részletek kitöltése

A {{ui:Hibalista}} lapon minden tétel megmutatja a számát, tárgyát, szövegét, rajzlapját és állapotát, alatta három mezővel. Ugyanezek a mezők megvannak a {{ui:Tulajdonságok}} részben, a „Hibalista” alatt, ha a jelölés ki van jelölve:

- {{ui:Felelős}}: név vagy szakág, szabad szövegként.
- {{ui:Határidő}}: dátum, a dátumválasztóból.
- {{ui:Tétel állapota}}: Nyitott, Folyamatban, Felülvizsgálatra kész vagy Lezárva.

Kattintson a tétel fejlécére, hogy odaugorjon a rajzlapján.

A tétel állapota elkülönül a jelölés átnézési állapotától (Nyitott, Elfogadva, Elutasítva, Befejezve). A tétel állapotát a munkához, az átnézési állapotot a megjegyzéshez használja.

## Tétel eltávolítása a listából

Jelölje ki a jelölést, és a {{ui:Tulajdonságok}} részben válassza a {{ui:Levétel a hibalistáról}} lehetőséget. A jelölés megmarad, csak a szám tűnik el. Amíg a készlet nyitva van, a számokat nem használják újra: a következő tétel továbbra is a következő új számot kapja, így a hiányzó szám azt jelenti, hogy egy tételt eltávolítottak. Amikor a fájlt újra megnyitják, a számozás a benne lévő legnagyobb szám után folytatódik.

## A lista exportálása

Válassza a {{ui:Hibalista}} lapon a {{ui:CSV exportálása}} lehetőséget. Ekkor a „<name> punch list.csv” fájl jön létre, ezekkel az oszlopokkal, szám szerinti sorrendben: Sz., Rajzlap, Fájl, Oldal, Tétel, Megjegyzés, Felelős, Határidő, Állapot, Jelölés állapota, Szerző és Létrehozva. Nyissa meg bármely táblázatkezelőben.

A hibaszámok, a felelősök, a határidők és a tételállapotok a jelölt PDF-be is mentésre kerülnek, így újranyitáskor visszajönnek. Más PDF-megjelenítők a számozott jelvényt a jelölés részeként mutatják. A jelölések listájának BCF-exportja a felelőst és a határidőt is tartalmazza (lásd [BCF alapok](topic:bcf-basics)).

## Helyszínen, táblagéppel

Nyissa meg a készletet iPaden, járja be a munkát, és minden problémánál adjon hozzá egy {{ui:Megjegyzés}} jelölést vagy rajzoljon egy {{ui:Felhő}} jelölést. Menet közben adja hozzá őket a hibalistához, és indulás előtt mentsen. Lásd [Áttekintés iPaden vagy érintőképernyőn](topic:review-on-a-tablet).

A hibalista formázott PDF-jelentésként vagy táblázatként, valamint a tételekhez csatolt fényképek még nincsenek elkészítve.
