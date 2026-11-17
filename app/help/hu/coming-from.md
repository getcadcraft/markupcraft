---
title: Átállás más jelölő szoftverekről
summary: Hogyan felelnek meg egy asztali PDF-jelölő program szokásai a MarkupCraft-nak, és melyek azok a különbségek, amelyek meglepetést okoznak.
keywords: átállás, áttelepítés, ismerős, asztali pdf-jelölés, eszközláda, jelölések listája, fedvény, munkamenetek, profil, billentyűparancsok, különbségek
from: c8f323e1
---

Ha rajzokat a Bluebeam Revu-ban vizsgál át (vagy más asztali PDF-programban kommentál), a MarkupCraft nagy része ismerősnek fog tűnni: felhők, kiemelések, eszközláda, jelöléslista, válaszokkal rendelkező állapotok, kalibrált mérések, lapfedvények. A fájlkezelés a nagy különbség, ezért olvassa el a következő szakaszt akkor is, ha a többit kihagyja.

## Az öt fontos különbség

1. **A mentés új fájlt hoz létre.** A MarkupCraft a böngészőben fut, és nem írhatja felül a lemezén lévő PDF-et. A {{ui:Mentés}} letölti a „<name> (marked up).pdf” fájlt, az eredeti pedig változatlan marad. Legközelebb a „(marked up)” másolatot nyissa meg, a régi másolatokat pedig maga takarítsa el.
2. **A PDF a mentéskor kerül mentésre.** Addig a böngészőben lévő helyreállítási másolat megőrzi a jelöléseit összeomlás vagy bezárt lap esetén, és a MarkupCraft legközelebb felajánlja. Ez biztonsági háló: a felülvizsgálat megőrzéséhez mentse el a PDF-et.
3. **A profilja a böngészőben él.** A szerzőneve, az eszközbeállításai és az eszközláda ebben a böngészőben, ezen a számítógépen maradnak meg. Másik böngészővel vagy géppel tisztán indul, a webhelyadatok törlése pedig törli őket. Az eszközládát biztonsági mentésként exportálja. Lásd: [Mi marad ebben a böngészőben](topic:browser-storage).
4. **Még nincsenek megosztott munkamenetek.** Nincs élő, megosztott felülvizsgálati munkamenet és nincs felhőprojekt. A felülvizsgálat a PDF-fel utazik: mentse, küldje el a másolatot, a következő személy válaszol, majd menti.
5. **A méretarány lapra vonatkozik, és csak lapra.** Nincsenek nézetablakok a lapon belül, és nincs „ezt a méretarányt alkalmazza minden oldalra” funkció. Minden mérendő lapot külön kalibráljon.

## Szokásról szokásra

| Ehhez szokott | A MarkupCraft-ban |
|---|---|
| Bélyegképpanel, oldalcímkék | A {{ui:Rajzlapok}} a bal oldalon. A nevek az oldalcímkékből származnak, vagy a rajzfejből olvassuk ki; javítsa a {{ui:Rajzlap átnevezése}} lehetőséggel. |
| Több PDF megnyitása készletként | Nyissa meg mindet egyszerre; egy listává válnak. Nem mentődik készletfájl: legközelebb nyissa meg ugyanazokat a PDF-eket. |
| Eszközláda eszközkészletekkel | Az {{ui:Eszközök}} lap: egy láda böngészőnként, mentett eszközök stílussal és tárggyal. Megosztás az {{ui:Exportálás}} és az {{ui:Importálás}} révén, JSON-fájlként. Más programok eszközkészlet-fájljait nem lehet importálni. |
| Tulajdonságok panel | A {{ui:Tulajdonságok}} lap: állapot, tárgy, megjegyzés, stílus, válaszok és hibalista-tétel egy helyen. |
| Oszlopokkal rendelkező jelöléslista | A {{ui:Jelölések}} lap szűrőkkel lap, szerző, állapot és típus szerint. CSV vagy BCF exportálás. Egyéni oszlop és PDF- vagy munkafüzet-összesítő még nincs. |
| Állapot és felülvizsgálati állapot | {{ui:Állapot}}: Nyitott, Elfogadva, Elutasítva, Befejezve. Nincsenek egyéni állapotkészletek. Szabványos felülvizsgálati állapotként mentődnek. |
| Válaszok egy jelölésen | A {{ui:Tulajdonságok}} „Válaszok” szála, amelyben az állapotváltozások is naplózódnak. Az elküldött választ nem lehet szerkeszteni. |
| Kalibrálás, majd hossz, terület, darabszám | {{ui:Kalibrálás}}, {{ui:Hossz}} ({{key:M}}), {{ui:Terület}} ({{key:Q}}, terület és kerület), {{ui:Darabszám}} ({{key:U}}). Még nincs szög, sugár, térfogat, polivonal-hossz vagy kivágás. |
| Oldalak fedése | Az {{ui:Összehasonlítás}} lap: piros a régi, kék az új, igazítás két ponttal. Nincs automatikus „dokumentumok összehasonlítása” felhőzés. |
| Bélyegzők | A {{ui:Bélyegző}} hat beépített bélyegzővel és egyéni szöveggel, a nevével és a dátumával aláírva. Még nincs kép- vagy aláírásbélyegző. |
| Hibalista vagy problémakövetés | A {{ui:Hibalista}} lap: számozott tételek felelőssel, határidővel és állapottal; CSV-exportálás. |
| Élő együttműködési munkamenet | Még nem érhető el. Adja tovább a mentett PDF-et. |
| Laposítás | Még nincs elkészítve. A jelölések olyan megjegyzések maradnak, amelyeket más megjelenítők meg tudnak mutatni és nyomtatni. |
| Rétegek a jelölésekhez | Még nincs elkészítve. A megjegyzések rendezéséhez használja a tárgyakat, a szerzőket és a lista szűrőit. |
| Hivatkozások lapok között | Még nincs elkészítve. |
| Szóköz a mozgatáshoz, görgő a nagyításhoz | Ugyanaz: tartsa lenyomva a {{key:Space}} billentyűt, és húzzon; a görgő a mutatónál nagyít. A görgő soha nem görgeti az oldalt. |

## Eltérő billentyűk

Sok egybetűs billentyű az, amire számít, de ezeket ellenőrizze, mielőtt az ujjai megteszik helyette:

- A {{key:K}} a {{ui:Kiemelés}}, a {{key:Q}} pedig a {{ui:Terület}}. Ha a Q-t kiemelésekhez szokta használni, itt területet kezd.
- A {{key:C}} a dobozos {{ui:Felhő}}; a {{key:Shift+C}} a {{ui:Szabad felhő}}.
- A {{key:M}} a {{ui:Hossz}}, a {{key:U}} a {{ui:Darabszám}}, a {{key:Y}} a {{ui:Polivonal}}, a {{key:G}} a {{ui:Sokszög}}, a {{key:I}} a {{ui:Kiemelő}}.
- A {{key:Mod+D}} megkettőzi a kijelölést (a böngésző könyvjelzője helyett).
- A {{key:Mod+Plus}} és a {{key:Mod+Minus}} a lapot nagyítja, nem a böngészőoldalt.
- Bármelyik billentyű megváltoztatható: lásd lent.

:::tip
Ha az ujjai a Bluebeam Revu-t ismerik, válassza a {{ui:PDF-átnézés}} menüstílust a {{ui:Beállítások}} › {{ui:MarkupCraft}} › {{ui:Menük, billentyűk és egér}} alatt: egy menüsor (Fájl, Szerkesztés, Nézet, Dokumentum, Jelölés, Mérés, Ablak) a felülvizsgálati eszközök sora fölött, a {{key:Q}} a kiemeléshez (callout), a {{key:H}} a kiemelőhöz, a {{key:N}} a sokszöghöz, a mérések pedig {{key:Alt+Shift}} és egy betű alatt. Ott is bármelyik billentyű megváltoztatható. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse).
:::

A teljes lista itt található: [Billentyűzet és egér](topic:keyboard).

## Ami másképp működik, mint várná

- **Az eszközök bekapcsolva maradnak.** Egy felhő után továbbra is felhőket rajzol. Az {{key:Esc}} egyszer törli a kijelölést, kétszer a {{ui:Kijelölés}} eszközre tér vissza.
- **A szöveghez és a kiemeléshez szöveg kell.** Ha semmit sem ír be, nem kerül jelölés. A jegyzetek üresen maradnak.
- **A mérésekhez előbb méretarány kell.** A {{ui:Hossz}} és a {{ui:Terület}} kalibrálatlan lapon átvált a {{ui:Kalibrálás}} lehetőségre, majd utána visszatér.
- **Más programokban készült megjegyzések.** Téglalapok, ellipszisek, vonalak, polivonalak, sokszögek, tinta, szövegdobozok és ragasztható jegyzetek, amelyeket máshol készítettek, szerkeszthető MarkupCraft-jelölésekké válnak, és mentéskor a MarkupCraft módján íródnak újra (a megjelenésük kissé változhat). A szöveges kiemelések, más programok bélyegzői és egyéb különleges típusok csak olvashatók: válaszolhat rájuk, de nem módosíthatja őket.
- **A nyugat-európai betűkön kívüli karakterek** a mentett PDF-ben „?” jelként jelennek meg. Lásd: [A jelölt PDF mentése](topic:save-the-marked-up-pdf).
- **A bélyegzők dátumai UTC szerint** vannak, így az Amerikában késő este készített bélyegző holnapi dátumot mutathat.
- **A mérések átkerülnek** szabványos mérési megjegyzésként, és minden kalibrált lap megőrzi a méretarányát, így a PDF-mérést olvasó program általában meg tudja jeleníteni. A pontos viselkedés attól függ, melyik programról van szó.

## Mindkettő használata

Oda-vissza válthat. A máshol készült megjegyzések megnyílnak a MarkupCraft-ban, a „(marked up)” PDF pedig más PDF-programokban is megnyílik, minden jelöléssel, válasszal és állapottal együtt. Amit csak a MarkupCraft olvas vissza (a hibalista-tétel felelősét, határidejét és állapotát), az a MarkupCraft-nak szóló fájlban marad meg.
