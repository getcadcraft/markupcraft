---
title: A képernyő bemutatása
summary: Az eszköztár, a rajzlaplista, a rajzlapterület, a jobb oldali öt panel és az állapotsor, a képernyőn látható nevükön.
keywords: képernyő, elrendezés, eszköztár, panelek, oldalsáv, bélyegképek, tulajdonságok, állapotsor, felület, teljes képernyő, téma, sötét mód
from: 18d82de6
---

A MarkupCraft kitölti a böngészőablakot. Fentről lefelé és balról jobbra haladva:

## A legfelső sáv

A mindennél feljebb lévő vékony sáv a CadCraft családhoz tartozik, nem magához a MarkupCrafthoz. Ezek vannak rajta:

- az alkalmazás neve és a használt verzió,
- a {{ui:A(z) MarkupCraft névjegye}}, amely megnyitja az alkalmazás oldalát a weboldalon,
- a {{ui:Súgó}}, amely oldalpanelben megnyitja ezt a súgót (vagy nyomja meg az {{key:F1}} billentyűt),
- a {{ui:Mentés offline használatra}}, amely ebben a böngészőben megőrzi a MarkupCraftot, a PDF-olvasóját és -íróját, valamint ezt a súgót, hogy kapcsolat nélkül is megnyíljon; ezután ezt írja: „Offline használatra kész” (lásd [Offline munka](common:offline)),
- a képernyőmód-gomb ({{ui:Teljes képernyő}}), és
- a {{ui:Beállítások}} (vagy {{key:Mod+,}}), egy {{ui:MarkupCraft}} lappal az alkalmazás saját beállításaihoz és egy {{ui:Általános}} lappal a minden CadCraft alkalmazásban közösekhez (lásd [A MarkupCraft beállításai](topic:settings)), és
- a {{ui:Papír}} és a {{ui:Modell}}, a világos és a sötét téma. A {{ui:Modell}} témában a rajzlapok világos a sötéten jelennek meg; a jelölései megtartják a saját színüket.

A képernyőmód-gomb, vagy a {{key:Ctrl+Shift+F}}, három mód között lép: normál, teljes képernyő, és teljes képernyő elrejtett sávokkal. Elrejtett sávoknál vigye a mutatót a képernyő felső széléhez (vagy koppintson oda), és visszacsúsznak. Ez a billentyűparancs minden számítógépen a Control billentyűt használja, Macen is.

:::note
Teljes képernyőn az {{key:Esc}} a böngészőt is kilépteti a teljes képernyőből. Ha csak egy rajzolást akart megszakítani, nyomja meg újra a {{key:Ctrl+Shift+F}} billentyűket, hogy visszatérjen a teljes képernyőre.
:::

## Az eszköztár

A felső sáv alatt az eszközök csoportosítva és felirattal vannak ellátva:

| Csoport | Gombok |
|---|---|
| Fájl | {{ui:Megnyitás}}, {{ui:Mentés}}, {{ui:Bezárás}} |
| Kijelölés | {{ui:Kijelölés}}, {{ui:Eltolás}} |
| Rajzolás | {{ui:Toll}}, {{ui:Kiemelő}}, {{ui:Vonal}}, {{ui:Nyíl}}, {{ui:Téglalap}}, {{ui:Ellipszis}}, {{ui:Polivonal}}, {{ui:Sokszög}} |
| Revízió | {{ui:Felhő}}, {{ui:Szabad felhő}} |
| Jegyzetelés | {{ui:Kiemelés}}, {{ui:Szöveg}}, {{ui:Megjegyzés}}, {{ui:Bélyegző}} |
| Mérés | {{ui:Kalibrálás}}, {{ui:Hossz}}, {{ui:Terület}}, {{ui:Darabszám}} |
| Szerkesztés | {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}}, {{ui:Beillesztés}}, és a {{ui:Továbbiak}}: {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}}, {{ui:Kijelölés megszüntetése}} |

Az éppen használt eszköz benyomottnak látszik. Tartsa a mutatót egy gomb fölött, hogy lássa a billentyűjét (például „Téglalap (R)”); a {{ui:Továbbiak}} menü minden parancs mellett kiírja a billentyűjét. Azok a gombok, amelyek most nem használhatók, halványak: a {{ui:Másolás}}, amíg nem jelöl ki jelölést, és a {{ui:Beillesztés}}, amíg nincs semmi lemásolva. A {{ui:Mentés}} utáni kis pont azt jelzi, hogy egyes jelölések még nincsenek mentve. A teljes billentyűlista a [Billentyűzet és egér](topic:keyboard) témakörben van.

Az eszköz bekapcsolva marad a rajzolás után, így egymás után több felhőt is rajzolhat. Nyomja meg az {{key:Esc}} billentyűt (kétszer, ha az új jelölés még ki van jelölve) vagy a {{key:V}} billentyűt, hogy visszatérjen a {{ui:Kijelölés}} eszközre.

## A rajzlaplista (balra)

A {{ui:Rajzlapok}} felsorolja minden megnyitott PDF minden oldalát. Minden sor mutat egy kis képet a rajzlapról, a nevét, a rajzlapszámát vagy a fájlt és oldalt, és hogy hány jelölése van. A címsor utáni szám a rajzlapok száma.

- Kattintson egy sorra a rajzlap megjelenítéséhez.
- Gépeljen a {{ui:Rajzlapok keresése}} mezőbe a rajzlap neve, rajzlapszáma vagy fájlneve szerinti szűréshez. Az {{key:Enter}} megnyitja az első találatot.

A rajzlapnevek a PDF-ből származnak, ha van benne. Lásd [Tervkészlet megnyitása és mozgás a rajzlapok között](topic:open-a-plan-set).

## A rajzlapterület (középen)

Az a rajzlap, amelyen éppen dolgozik. Mielőtt bármi meg van nyitva, ezt mutatja: „Tervkészlet megnyitása”, egy {{ui:PDF-ek megnyitása}} gombbal. Húzzon ide PDF-eket bárhová a megnyitásukhoz.

A rajzlap alatt egy keskeny sáv van, rajta:

- az előző és a következő rajzlap nyilai, és a „3/12: A-101 — Alaprajz” (tartsa fölötte a mutatót a fájl és az oldal megtekintéséhez),
- a kicsinyítés, a nagyítás mező (írjon be egy százalékot, és nyomja meg az {{key:Enter}} billentyűt; a 100% a valódi méret egy tipikus képernyőn), a nagyítás,
- az {{ui:Oldal illesztése}} és a {{ui:Szélesség illesztése}}.

Minden rajzlap megjegyzi a saját nagyítását, amíg a készlet nyitva van.

Két rajzlap összehasonlításakor egy jelmagyarázat jelenik meg itt: „Csak a régi lapon”, „Csak az új lapon” és „Mindkettőn”. Lásd [Két revízió összehasonlítása](topic:compare-revisions).

## A panelek (jobbra)

Öt lap:

| Lap | Mit mutat |
|---|---|
| {{ui:Tulajdonságok}} | A kijelölt jelölés: szerző, dátumok, mért értékek, állapot, tárgy, szöveg, megjegyzés, stílus, válaszai és hibalista-tétele. Bekapcsolt rajzolóeszköznél és kijelölés nélkül azok a beállítások, amelyeket az új jelölések használni fognak. Kijelölés nélkül és bekapcsolt {{ui:Kijelölés}} eszköznél a rajzlap: szám, cím, honnan olvasták ki a nevet, papírméret, méretarány és a {{ui:Rajzlap átnevezése}}. |
| {{ui:Jelölések}} | A megnyitott készlet minden jelölése, szűrőkkel, valamint {{ui:CSV}}- és {{ui:BCF}}-exporttal. Lásd [A jelölések listája](topic:markups-list-and-export). |
| {{ui:Hibalista}} | Számozott hibalista-tételek felelőssel, határidővel és állapottal. Lásd [Hibalista készítése](topic:punch-list). |
| {{ui:Eszközök}} | Az eszköztár: mentett, stílussal ellátott eszközök. Lásd [Az eszköztár](topic:tool-chest). |
| {{ui:Összehasonlítás}} | Két rajzlap egymásra vetítése. Lásd [Két revízió összehasonlítása](topic:compare-revisions). |

## Az állapotsor (alul)

- Balra az látható, hol van a mutató a rajzlapon, hüvelykben (vagy milliméterben, a [Beállításokban](topic:settings)) a papíron.
- Középen az üzenetek: mit vár a következő eszköz, mi mentődött az imént, miért tagadtak meg valamit. **Olvassa el, ha valami nem történik meg.**
- A rajzlap méretarány-gombja („Nincs kalibrálva”, vagy a méretarány). Kattintson rá a méretarány beállításához. Lásd [Rajzlap kalibrálása és mérés](topic:calibrate-and-measure).
- A neve („Adja meg a nevét”, amíg nem ad meg egyet). Kattintson rá a módosításához.

## Kis képernyőn

Körülbelül 1180 képpont szélesség alatt a panelek keskenyebbek lesznek, és a rajzlapképek összezsugorodnak. Telefonméretű képernyőn az elemek egymás alá kerülnek: eszköztár (oldalra görgethető), a rajzlap, az állapotsor, a panelek, majd alul a rajzlaplista. A fekvő táblagép megtartja a teljes elrendezést.
