---
title: Hibaelhárítás
summary: A MarkupCraft üzenetei és a teendők, valamint megoldások azokra a dolgokra, amelyek nem működni látszanak.
keywords: probléma, hiba, nem működik, súgó, üzenet, nem nyílik meg, nem menthető, jelszó, védett, mérés elutasítva, kalibrálás, offline, üres, lassú, elveszett jelölések, kérdőjelek
from: bb650b39
---

A legtöbb problémát az ablak alján lévő állapotsor magyarázza. Először azt olvassa el.

## Fájlok megnyitása

**„A MarkupCraft PDF-fájlokat nyit meg. „x” nem PDF.”**
Más fájlt választott vagy húzott ide. Csak PDF-ek nyílnak meg. Először exportálja a rajzokat PDF formátumban a CAD-programjából.

**'"név" megnyitásához jelszó szükséges. Nyisson meg egy védelem nélküli másolatot.'**
A PDF jelszóval védett. Kérje a feladótól egy nem védett másolatot, vagy nyissa meg egy PDF-programban, ahol ismeri a jelszót, és mentsen egy másolatot jelszó nélkül.

**'"név" nem olvasható PDF-ként (…)'**
A fájl sérült, vagy nem valódi PDF (befejezetlen letöltés, levélmelléklet, amely csonkán érkezett). Töltse le újra. Ha más PDF-programok meg tudják nyitni, használják azok „Mentés másként” funkcióját egy tiszta másolat készítéséhez, és azt nyissák meg.

**„Egyes fájlok nem nyíltak meg”**
Ha egyszerre több fájlt nyit meg, ez a doboz felsorolja a sikertelen fájlokat és az okukat. A többi meg van nyitva.

**„A PDF-olvasó nem tudta betölteni: …”**
A PDF-motort nem sikerült letölteni. Online: töltse újra az oldalt, és próbálja újra; ellenőrizze, hogy tűzfal vagy tartalomblokkoló nem blokkolja-e a webhelyet. Offline: a MarkupCraft nem lett mentve offline használatra ebben a böngészőben (a felső sáv nem írja, hogy „Offline készen áll”). Kapcsolódjon az internetre, válassza a {{ui:Save for offline}} lehetőséget, és várjon, amíg megjelenik az „Offline készen áll”. Lásd: [Munka offline](common:offline).

**„Egyes megjegyzések kétszer is megjelenhetnek a képernyőn” vagy „A megjegyzések további adatait nem sikerült beolvasni”**
A fájl meglévő megjegyzései szokatlanok. Ezek is meg lesznek nyitva, ahogy a MarkupCraft tudja; ellenőrizze őket, mielőtt rájuk hagyatkozna. A mentés továbbra is működik.

**A rajzlap rossz nevet kapott, vagy „3. oldal”**
Lásd: [Hogyan kapnak nevet a rajzlapok](topic:open-a-plan-set#how-sheets-get-their-names). A beszkennelt rajzlapokon nincs olvasható szöveg; használja a {{ui:Rename sheet}} parancsot.

**Ugyanazok a rajzlapok kétszer jelennek meg**
Ugyanazt a fájlt kétszer nyitotta meg. Válassza a {{ui:Close}} lehetőséget (szükség esetén előbb mentsen), majd nyissa meg újra a készletet.

## Rajzolás és kijelölés

**Semmi sem történik, amikor a rajzlapra kattint**
Ellenőrizze, melyik eszköz van lenyomva az eszköztáron, és olvassa el az állapotsort. A {{ui:Rectangle}}, {{ui:Ellipse}} és {{ui:Cloud}} eszközöknél a húzás nélküli kattintás nem rajzol semmit: húzzon. A {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} és {{ui:Area}} eszközöknél pontok kerülnek hozzá: fejezze be dupla kattintással vagy az {{key:Enter}} billentyűvel.

**„A sokszöghöz legalább 3 pont kell.” (polivonalhoz 2)**
Kattintson több pontra, mielőtt befejezi.

**„Nem lett beírva semmi, ezért nem lett szöveg hozzáadva.”**
A szövegdobozok és kiemelések csak akkor maradnak meg, ha van bennük szöveg. Rajzolja újra, és írjon be szöveget, mielőtt máshova kattint.

**„A két pont azonos. Kattintson két különböző pontra.”**
Vonalaknál, nyilaknál, hosszaknál és kalibrálásnál a két végpontnak el kell térnie egymástól. Húzzon, vagy kattintson kétszer különböző helyeken.

**Nem tudok mozgatni vagy törölni egy jelölést; szürke, szaggatott keret van rajta**
Ez egy csak olvasható megjegyzés, amely a fájllal érkezett (például szövegkiemelés). A MarkupCraft úgy hagyja meg, ahogy van: csak válaszolni lehet rá. Az állapotsor ezt mondja: „a csak olvasható jelölések a fájlban szereplő módon maradnak meg”.

**A billentyűk betűket írnak be egy mezőbe az eszközök kiválasztása helyett**
A kurzor egy szövegmezőben van (válasz, mező a {{ui:Properties}} panelen, rajzlap-keresés). Kattintson előbb a rajzlap üres részére, vagy nyomja meg az {{key:Esc}} billentyűt, ha jelölésszöveget szerkeszt.

**A szóköz nem tolja el a nézetet, vagy a nyílbillentyűk nem tesznek semmit**
Éppen egy eszköztári gombra kattintott, így a billentyűzet még annál van. Húzzon az egér középső gombjával, vagy kattintson egyszer a rajzlapra, miközben a {{ui:Select}} be van kapcsolva, majd próbálja újra. Lásd még: [Billentyűzet és egér](topic:keyboard#when-a-key-does-nothing).

**Egy csippentés az érintőképernyőn nyomot hagyott**
Egy húzóeszköz (toll, felhő, téglalap) már elindult, mielőtt a második ujj megérkezett, és befejeződött, mielőtt megszakították. Nyomja meg a {{ui:Undo}} gombot. Nagyításhoz mindkét ujját egyszerre tegye a képernyőre.

## Mérés

**„Előbb kalibrálja ezt a rajzlapot: jelöljön ki két pontot ismert távolságra egymástól, vagy válassza ki a méretarányát. Utána mérhet.”**
Minden rajzlapnak saját léptékre van szüksége a {{ui:Length}} vagy {{ui:Area}} előtt. A MarkupCraft átváltott a {{ui:Calibrate}} eszközre: kattintson egy ismert méret két végére, és írja be a hosszát, vagy kattintson az állapotsor léptéknyomógombjára, és válasszon egy léptéket. Lásd: [Rajzlap kalibrálása és mérése](topic:calibrate-and-measure).

**'Ezt a MarkupCraft nem értelmezi hosszúságként.'**
Írja be például így: `24'-0"`, `12' 6 1/2"`, `7.2 m` vagy `900 mm`. Lásd: [Mértékegységek, hosszúságok és léptékek](topic:units-and-scales).

**A mérések kissé pontatlanok, vagy egészen pontatlanok**
- Egy nem teljes méretű PDF előre beállított léptéke hibás mérést ad. Kalibráljon inkább egy hosszú, ismert mérettel.
- Egy ezres elválasztót tizedespontként olvasott a program: `1,200 mm` 1,2 mm-t jelent. Írja be így: `1200 mm`.
- A végpontok kattintásakor nagyítson rá.
- A rajz nem méretarányos („NTS”).

**„Előbb jelöljön ki egy darabszám-csoportot, majd a Shift+kattintással távolítsa el a jelölést.”**
Válassza a {{ui:Select}} lehetőséget, kattintson a darabszám-csoportra, majd válassza újra a {{ui:Count}} lehetőséget, és a {{key:Shift}} billentyűvel kattintson a pontra.

## Mentés

**„Ez a PDF védett (titkosított), ezért jelölt másolat nem írható.”**
A fájl tiltja a módosításokat. Kérjen védelem nélküli másolatot. Addig is exportálhatja a jelöléslistát CSV vagy BCF formátumban.

**„A PDF-író nem tudta betölteni: …”**
Általában offline van, és az alkalmazás nem lett offline használatra mentve (a felső sávban nincs „Offline készen áll”). A jelölései továbbra is a lapon vannak: hagyja nyitva, kapcsolódjon az internetre, és válassza újra a {{ui:Save}} lehetőséget. Utána válassza a {{ui:Save for offline}} lehetőséget, hogy legközelebb offline is működjön; a mentett másolat tartalmazza a PDF-írót.

**„Nem sikerült menteni: <fájl>”**
A doboz megmutatja az okot. A jelölései továbbra is a lapon vannak. Próbálja újra; ha megismétlődik, exportálja a CSV-t, hogy a megjegyzések ne vesszenek el, és jelentse az üzenetet.

**Mentést választottam, de csak egy fájl érkezett meg**
A böngésző letiltotta a további letöltéseket. Keressen értesítést a címsorban, engedélyezze a webhelynek, hogy több fájlt töltsön le, majd mentse újra.

**Nem találom a mentett fájlt**
A fájl a böngésző letöltések mappájába került. Nyissa meg a böngésző letöltési listáját (Chrome és Edge esetén {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; Firefoxban és Safariban a letöltés gomb az eszköztáron), hogy megtudja, hol van. Lásd: [Böngészők és számítógépek](common:browsers).

**Egyes szövegek „?” jelet mutatnak más PDF-megjelenítőkben**
A nyugat-európai készleten kívüli karakterek „?” jelként jelennek meg a másolatban. A mentési üzenet megszámolja őket. Lásd: [A jelölt PDF mentése](topic:save-the-marked-up-pdf).

**A bélyegzőn a holnapi (vagy a tegnapi) dátum látszik**
A bélyegzők dátuma UTC szerinti. Lásd: [Bélyegzők és ragasztott jegyzetek](topic:stamps-and-notes).

## Munka offline

**Az offline gomb ezt írja: „Nem sikerült menteni”**
Az alkalmazás néhány fájlja nem töltődött le. Ellenőrizze a kapcsolatot, és kattintson a gombra újra; a „Mentés: N / M” számlálót mutatja, amíg meg nem jelenik az „Offline készen áll”.

**Az offline gomb ezt írja: „Offline nem érhető el”**
Ez a böngészőablak nem tud offline másolatot tartani: privát ablak, vagy olyan számítógép, amelynek szabályzata tiltja. Nyissa meg a MarkupCraft-ot normál ablakban, és próbálja újra.

**Offline az alkalmazás régebbi verzió**
Az offline másolat az a verzió, amelyet elmentett. Ha van kapcsolat, kattintson az „Offline készen áll” gombra, és válassza a „Mentés újra (a legújabb verzió letöltése)” lehetőséget. A hely felszabadításához válassza az „Offline másolat eltávolítása” lehetőséget. Lásd: [Munka offline](common:offline).

**A súgó nem nyílik meg**
Nyomja meg az {{key:F1}} billentyűt (Macen az **fn** gombbal együtt), vagy válassza a {{ui:Help}} lehetőséget a felső sávban. Offline is működik.

## Elveszett dolgok

**A jelöléseim eltűntek a fül bezárása vagy újratöltése után**
Nyissa meg újra a MarkupCraft-ot ugyanabban a böngészőben: a nem mentett munkát felajánlja a „Helyreállítja a munkáját?” kérdéssel. Válassza a {{ui:Recover}} lehetőséget, és mentse a PDF-et. A másolatok legfeljebb 30 napig maradnak meg; privát ablak vagy a webhely adatainak törlése után nem marad semmi. Lásd: [Munka helyreállítása](common:recover).

**A nevem, az eszközbeállításaim vagy az eszközláda eltűnt**
Ezek csak ebben a böngészőben tárolódnak, és törlődtek (a webhely adatai törlődtek, privát ablak volt, másik böngészőt vagy számítógépet használt, vagy a Safari takarította a régóta nem látogatott webhelyeket). Állítsa be újra a nevet, és importálja az exportált eszközládát. Lásd: [Mi marad meg ebben a böngészőben](topic:browser-storage).

**„Az eszközláda nem tárolható ebben a böngészőben (a tárolás ki van kapcsolva vagy megtelt). Exportálja a megőrzéséhez.”**
A böngésző nem hajlandó adatokat tárolni ennek a webhelynek (privát mód, tárolást tiltó beállítás vagy szabályzat, vagy megtelt). Exportálja az eszközládát módosítás után, és importálja legközelebb.

## Megjelenítés és sebesség

**A rajzlap egy pillanatig elmosódottnak látszik**
A MarkupCraft gyors, durva képet mutat nagyításkor vagy eltoláskor, majd egy pillanattal azután, hogy abbahagyta, élesen újrarajzolja.

**Nagy készlettel minden lassú**
Zárjon be más nehéz füleket, nyisson meg egyszerre kevesebb fájlt, és kerülje a maximális nagyítást nagy rajzlapokon. Lásd: [Több fájl használata egyszerre](topic:several-files#big-sets).

**A rajzlap sötét, világos vonalakkal**
A {{ui:Model}} témában van. Válassza a felső sávban a {{ui:Paper}} lehetőséget a fehér alapon sötét vonalakhoz. A jelölései és a mentett PDF nem változik.
