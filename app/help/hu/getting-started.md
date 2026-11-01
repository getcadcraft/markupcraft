---
title: Első lépések a MarkupCraftban
summary: Nyisson meg egy tervkészletet, tegye fel az első felhőjét és kiemelését egy rajzlapra, és mentsen jelölt másolatot.
keywords: indulás, első lépések, pdf megnyitása, átnézés, jelölés, redline, piros toll, tervkészlet, útmutató, gyors útmutató
from: 0b1aae4e
---

A MarkupCraft rajzok átnézésére való: PDF-tervkészleteket nyit meg, felhőkkel, kiemelésekkel, szöveggel, bélyegzőkkel és mérésekkel jelöli meg őket, követi minden megjegyzés állapotát, és elmenti a PDF egy másolatát, amelyet bármelyik PDF-megjelenítő meg tud mutatni.

A böngészőben fut. A PDF-eit a saját számítógépén nyitja meg, és **sosem töltődnek fel**. A mentés új másolatot tölt le; az eredeti fájl nem változik.

:::note
A MarkupCraft fejlesztés alatt áll. A súgó azt a kiadást írja le, amelyet éppen használ. Amit még nem tud, azt a [Ami még nincs elkészítve](topic:not-built-yet) című témakör sorolja fel.
:::

## Amire szüksége van

- Egy friss Chrome, Edge, Firefox vagy Safari Mac, Windows vagy Linux számítógépen, illetve Safari vagy Chrome iPaden. Lásd [Böngészők és számítógépek](common:browsers).
- Egy vagy több PDF-fájl. Egy egész tervkészlet lehet egyetlen PDF vagy sok.
- Egy görgős egér a legkényelmesebb. Az érintőpad is működik, és az érintőképernyő is (lásd [Átnézés iPaden vagy érintőképernyőn](topic:review-on-a-tablet)).

## Az első átnézés tíz lépésben

1. Nyissa meg a MarkupCraftot a böngészőben. A képernyő közepén ez áll: „Tervkészlet megnyitása”.
2. Válassza a {{ui:PDF-ek megnyitása}} lehetőséget (vagy az eszköztár bal szélén a {{ui:Megnyitás}} gombot, vagy nyomja meg a {{key:Mod+O}} billentyűt), jelöljön ki egy vagy több PDF-et, és erősítse meg.
   A fájlokat áthúzhatja a rajzlapterületre innen is: {{pick:mac=Finder|windows=Fájlkezelő|linux=a fájlkezelő}}.
   Az első alkalommal az alul lévő állapotsor ezt írja: „A PDF-olvasó betöltése…”. Ezután minden oldal egy rajzlap lesz a bal oldali {{ui:Rajzlapok}} listában, és az első rajzlap kitölti a közepet.
3. Kattintson egy rajzlapra a listában a megjelenítéséhez. Forgassa az egérgörgőt a rajzlap fölött, hogy oda nagyítson, ahol a mutató áll.
4. Válassza a {{ui:Felhő}} eszközt az eszköztár {{ui:Revízió}} csoportjában (vagy nyomja meg a {{key:C}} billentyűt).
   Az első rajzolóeszköz kiválasztásakor a MarkupCraft megkérdezi a nevét. Írja be, és válassza a {{ui:Mentés}} lehetőséget. Minden jelölés rögzíti. (Bővebben: [A szerzőnév megadása](topic:set-your-name).)
5. Húzzon egy négyzetet a megjelölendő terület köré. Megjelenik egy piros revíziófelhő, és ki van jelölve.
6. Válassza a {{ui:Kiemelés}} eszközt a {{ui:Jegyzetelés}} csoportban (vagy nyomja meg a {{key:K}} billentyűt). Nyomja meg azt, amire mutat, húzza oda, ahová a szöveg kerüljön, és engedje el.
7. Írja be a megjegyzését a megjelenő mezőbe. A befejezéshez kattintson a mezőn kívülre (vagy nyomja meg a {{key:Mod+Enter}} billentyűt).
8. Nyomja meg kétszer az {{key:Esc}} billentyűt: először a kijelölés törlődik, másodszor visszatér a {{ui:Kijelölés}} eszközre. Kattintson a felhőre. A jobb oldali {{ui:Tulajdonságok}} lap megmutatja, ki készítette, mikor, és mi az {{ui:Állapot}} mező értéke.
9. Válassza a {{ui:Mentés}} gombot az eszköztáron (vagy nyomja meg a {{key:Mod+S}} billentyűt).
   A böngésző letölt egy másolatot, például „A-Plans (marked up).pdf” néven. Az állapotsor megadja, hány jelölés íródott bele.
10. Nyissa meg a másolatot egy tetszőleges PDF-megjelenítőben az ellenőrzéshez: a felhő és a kiemelés ott van, közönséges PDF-megjegyzésként, az Ön nevével.

A későbbi folytatáshoz nyissa meg a „(marked up)” másolatot a MarkupCraftban. A jelölései szerkeszthetően, az állapotukkal, válaszaikkal és hibalistaszámaikkal térnek vissza.

## Online és offline

:::online
Online van. A MarkupCraft az első PDF megnyitásakor tölti be a PDF-olvasóját, az első mentéskor pedig a PDF-íróját. Hogy később kapcsolat nélkül is dolgozhasson (építkezésen, repülőn), válassza most a felső sávban a {{ui:Mentés offline használatra}} gombot, és várja meg az „Offline használatra kész” feliratot. A másolat tartalmazza a PDF-olvasót és -írót, így a PDF-ek megnyitása és mentése offline is működik. Lásd [Offline munka](common:offline).
:::

:::offline
Offline van. Ha a felső sáv azt írja: „Offline használatra kész”, a MarkupCraft el van mentve offline használatra ebben a böngészőben, és minden működik: megnyitás, jelölés, mérés, mentés. Ha nem, használja azt, ami ebben a lapban már betöltődött, és ne töltse újra az oldalt, amíg nem kapcsolódik újra. Lásd [Offline munka](common:offline).
:::

## Amit az alkalmazás megjegyez, és amit nem

- **A jelölései abban a PDF-ben élnek, amelyet elment.** Semmi sem marad kiszolgálón. Az alkalmazás nem menti el magától a PDF-et, de helyreállítási másolatot tart ebben a böngészőben, amíg el nem menti. Mentsen, mielőtt bezárja a lapot; ha nem mentett jelölésekkel próbál kilépni, a böngésző előbb rákérdez (iPad kivételével, lásd [Átnézés iPaden vagy érintőképernyőn](topic:review-on-a-tablet)).
- **A neve, az eszközstílusai és az eszköztára** ebben a böngészőben, ezen a számítógépen maradnak. Egy másik böngésző vagy számítógép üresen indul, és a böngésző webhelyadatainak törlése eltávolítja őket. Lásd [Mi marad ebben a böngészőben](topic:browser-storage).
- A felhőbe mentés és a személyek közötti megosztott átnézési munkamenetek még nem érhetők el.

## Merre tovább

- [A képernyő bemutatása](topic:workspace)
- [Rajzlap jelölése](topic:mark-up-a-sheet)
- [Rajzlap kalibrálása és mérés](topic:calibrate-and-measure)
- [Más jelölőszoftverből érkezik?](topic:coming-from), ha már használ más programot rajzok átnézésére.
