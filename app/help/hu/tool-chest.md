---
title: Az eszközláda
summary: Mentsen el egy formázott jelölést újrafelhasználható eszközként, rajzoljon vele, és ossza meg az eszközládáját az irodával fájlként.
keywords: eszközláda, eszközök, eszközkészlet, egyéni eszközök, mentett jelölések, kedvencek, irodai szabvány, importálás, exportálás, megosztás, json
from: 7dfa36e0
---

Az {{ui:Tools}} lap tartalmazza az **eszközládáját**: kinézetükkel együtt elmentett jelöléseket, amelyekkel újra lehet rajzolni. Az eszköz megőrzi a jelölés típusát, színét, vonalvastagságát, kitöltését, átlátszatlanságát, szövegméretét és tárgyát, valamint a bélyegző szövegét, a darabszám csoportnevét, illetve a szövegdoboz vagy kiemelés kezdő szövegét.

## A kezdeti eszközök

Új ládában hat eszköz van: „Revíziófelhő” (piros), „Kérdésfelhő” (kék), „Sárga kiemelő”, „RFI-kiemelés” (kék, „RFI: ” szöveggel kezdődik), „Helyszíni ellenőrzés” (narancssárga kiemelés, amely ezt mondja: „Helyszíni ellenőrzés.”), és „Jóváhagyva, megjegyzésekkel” (bélyegző).

## Rajzolás eszközzel

1. Nyissa meg az {{ui:Tools}} lapot.
2. Kattintson egy eszközre. Úgy látszik, mintha lenyomták volna, és a megfelelő eszköztári eszköz bekapcsol.
3. Rajzoljon szokás szerint. A {{ui:Properties}} panel ezt írja: „Rajzolás a(z) „<eszköz>” eszközzel az eszközládából.”

Amíg egy eszköz az eszközládából be van kapcsolva, a {{ui:Properties}} panelen a rajzolás előtt végzett módosítások csak erre az eszközre vonatkoznak, a mentett eszköz és a szokásos eszközbeállítások változatlanok maradnak. Egy eszköztári gomb választása, vagy egy eszköz billentyűjének megnyomása visszaviszi a sima eszközhöz.

## Saját eszköz mentése

1. Rajzoljon egy jelölést, és formázza a kívánt módon: szín, vonal, kitöltés, tárgy, bélyegző szövege.
2. Jelölje ki.
3. Válassza az {{ui:Tools}} lapon a {{ui:Save selected as a tool}} lehetőséget, vagy a {{ui:Properties}} panelen a {{ui:Save as a tool}} lehetőséget.
4. Írja be az {{ui:Tool name}} mezőt, majd válassza a {{ui:Save tool}} lehetőséget.

Eredmény: az eszköz az eszközláda végére kerül, és az {{ui:Tools}} lap megnyílik, hogy megmutassa.

## Kijelölésből készült bélyegzők

Jelöljön ki több jelölést (vagy oldaltartalmat a {{ui:Content}} eszközzel), majd válassza a {{ui:More}} menü {{ui:Save selection as a stamp…}} lehetőségét, vagy a jobb egérgombos menüt. Az eszközláda kap egy bélyegzőt, amely mindet tartalmazza („Bélyegző: 3 jelölés együtt”). Kattintson rá, majd bármely rajzlapon kattintson: a jelölések együtt, a kattintás helyére központosítva kerülnek a lapra, mint új jelölések a beállított nevével; az oldaltartalom oda rajzolódik. Ezek a bélyegzők mentődnek és megosztódnak az eszközládával, mint bármely más eszköz.

## Eszköz eltávolítása

Válassza az eszköz sorának végén lévő × jelet, majd a {{ui:Remove}} lehetőséget. Az eszközzel már rajzolt jelölések megmaradnak, ahogy vannak.

## Hol tárolódik az eszközláda

Az eszközláda **ebben a böngészőben, ezen a számítógépen** tárolódik. Egy másik böngészőnek vagy számítógépnek saját ládája van (a hat alapértelmezett eszközzel kezdve); a privát ablak bezárásakor elfelejti, a webhely adatainak törlése a böngésző beállításaiban pedig letörli.

Ha a böngésző nem tudja tárolni (a tárolás ki van kapcsolva, vagy megtelt), az állapotsor ezt írja: „Az eszközláda nem tárolható ebben a böngészőben (a tárolás ki van kapcsolva vagy megtelt). Exportálja a megőrzéséhez.”

:::safari
A Safari törölheti a webhely tárolt adatait, ha egy ideje nem használta az oldalt. Exportálja időnként az eszköztárát, hogy később importálhassa.
:::

**Exportálja az eszközládáját biztonsági másolatként**, különösen akkor, ha olyan eszközöket készített, amelyekre támaszkodik.

## Eszközláda megosztása az irodával

1. Állítsa be az eszközöket egyszer.
2. Válassza az {{ui:Export}} lehetőséget. Az eredmény: „MarkupCraft tool chest.json” fájl.
3. Tegye a fájlt oda, ahol az iroda a szabványait tartja, vagy küldje szét.
4. Mindenki más válassza az {{ui:Import}} lehetőséget a saját {{ui:Tools}} lapján, és válassza ki a fájlt.

Eredmény: „12 eszköz importálva innen: "MarkupCraft tool chest.json".” Az ugyanabból az eszközládából származó eszközök felülírják a régebbi példányaikat, így egy frissített irodai eszközláda importálásakor ezek frissülnek, és nem duplázódnak meg; az új eszközök hozzáadódnak. Egy eszközláda legfeljebb 500 eszközt tartalmazhat.

A MarkupCraft minden értéket ellenőriz az importált fájlban, és kihagyja azt, amit nem tud felhasználni („2 kihagyva (nem használható)”). A nem eszközláda fájlokat elutasítja: „Ez a fájl nem MarkupCraft-eszközláda.” vagy „Ez a fájl nem eszközláda (nem JSON).”

Más jelölőprogramok eszközláda-fájljai nem importálhatók.
