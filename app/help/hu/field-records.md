---
title: RFI-k, beadványok és napi naplók követése
summary: RFI-k, beadványok és napi naplók felvétele a rajzlapokra, számokkal, felelősökkel, határidőkkel és szálakkal; a lejárt tételek szűrése; exportálás CSV vagy BCF formátumban; offline munka és másolatok egyesítése.
keywords: rfi, információkérés, beadvány, napi napló, terepi jelentés, építési napló, építkezés, lejárt, határidő, nekem kiosztva, szál, melléklet, egyesítés, offline, táblagép, bcf, csv, terepi
from: 95039c5a
---

Az {{ui:Field}} lap három fajta bejegyzést tart nyilván a jelölései mellett. Mindegyik egy rajzlaphoz tartozik; az RFI és a beadvány a rajzlapon arról a helyről is kap egy kitűzőt, amelyre vonatkozik.

- **RFI**: kérdés a tervezőcsapat felé. Állapotok: Nyitott, Megválaszolva, Lezárva.
- **Beadvány**: olyan dolog, amelyet a munka megkezdése előtt felül kell vizsgálni. Állapotok: Nyitott, Felülvizsgálatban, Jóváhagyva, Jóváhagyva megjegyzésekkel, Javítás és újra benyújtás, Lezárva.
- **Napi napló**: a nap időjárása, a helyszínen tartózkodók száma és az elvégzett munka. Állapotok: Piszkozat, Végleges.

Minden bejegyzésnek van a saját fajtáján belüli száma (RFI-0001, SUB-0001, LOG-0001), címe, szövege, felelőse, határideje, válaszszála és mellékletneveket tartalmazó listája.

## Hozzáadás

1. Nyissa meg a {{ui:Field}} lapot, és válassza a {{ui:RFI}} vagy a {{ui:Submittal}} lehetőséget.
2. Érintse meg vagy kattintson arra a rajzlapra, ahová a bejegyzés tartozik. Kitűző jelenik meg, és a bejegyzés megnyílik a lapon.
3. Töltse ki a címet, a kérdést vagy a leírást, a felelőst és a határidőt.

A napi naplót kitűző nélkül adja hozzá a nyitott rajzlaphoz. A {{ui:Place pin}} később egyet helyez el rajta; a {{ui:Move pin}} bármelyik kitűzőt áthelyezi. A rajzlapon egy kitűzőre koppintva megnyílik a hozzá tartozó bejegyzés.

## Válaszadás és követés

Módosítsa az {{ui:Status}} értékét, és a változás bekerül a szálba. Írjon választ, majd válassza a {{ui:Send reply}} lehetőséget (a Ctrl+Enter is elküldi). A mellékletek csak nevek: írjon be egyet, vagy válasszon fájlokat, a lista pedig megmutatja a csapatnak, mi tartozik a bejegyzéshez. Maguk a fájlok a helyükön maradnak.

Az a bejegyzés, amelynek a határideje letelt, és amely még vár válaszra vagy döntésre (olyan RFI, amely nincs Megválaszolva vagy Lezárva állapotban, illetve olyan beadvány, amelyről még nem döntöttek), a listán és a kitűzőjén piros színnel **Lejárt** jelölést kap.

## A fontos tételek megkeresése

A szűrők a lista fölött vannak: típus, állapot, határidő (lejárt, 7 napon belül esedékes, van vagy nincs határidő), ez a rajzlap vagy összes rajzlap, szövegkeresés, valamint a {{ui:Assigned to me}}, amely a felelőst összeveti azzal a névvel, amellyel a MarkupCraft ismeri (lásd: [Név beállítása](topic:set-your-name)). A szűrők alatti sor azt számolja, hány tétel látszik és hány közülük lejárt.

## Exportálás

A {{ui:CSV}} a listázott bejegyzéseket táblázatként írja ki. A {{ui:BCF}} BCF-témákként írja ki őket, mindegyikhez a rajzlapon elfoglalt helyükről készült pillanatképpel, hogy más BCF-eszközök is listázhassák őket. Mindkettő követi a szűrőket.

## Mentés, offline munka és másolatok egyesítése

A bejegyzések a PDF-be mentődnek, amikor elmenti a fájlt, és visszatöltődnek, amikor megnyitja. Nincs szükség hálózatra: vegyen fel, szerkesszen, válaszoljon és mentsen táblagépen egy pincében, majd vigye vissza a PDF-et. A régebbi PDF-fájlok és más programok PDF-jei a szokásos módon nyílnak meg.

Két másolat összevonásához nyissa meg az egyiket, válassza a {{ui:Merge}} lehetőséget, majd válassza ki ugyanannak a PDF-nek a másik példányát. A bejegyzések az azonosítójuk alapján kapcsolódnak össze:

- az egyik példányban meglévő bejegyzés hozzáadódik;
- ha mindkét példányban megvan, a mezőit (cím, szöveg, állapot, felelős, határidő) a legutoljára módosított példány adja egészben, így ha két személy a bejegyzés különböző mezőit módosította, a későbbi példány változata nyer; a szálak és a mellékletnevek mindkét példányból összefűződnek;
- ha mindkét példány ugyanazt a számot adta egy új bejegyzésnek, az, amelyik most érkezik, a következő szabad számot kapja;
- az egyik példányban törölt bejegyzés törölve marad, kivéve, ha utána szerkesztették.

Az egyesítés egy visszavonási lépés.

## Korlátok

- A bejegyzéseket a Live TeamWork még nem osztja meg; használja a {{ui:Merge}} lehetőséget.
- Ebben a verzióban nincsenek csapatok, értesítések vagy felhőprojektek a bejegyzésekhez.
- A PDF-ből törölt oldalak magukkal viszik a bejegyzéseiket (az oldaltörlés megerősítése megszámolja őket).
