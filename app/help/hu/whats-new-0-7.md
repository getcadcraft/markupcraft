---
title: Újdonságok a 0.7-ben (korábbi)
summary: RFI-k, beadványok és építési naplók új Terepi lapon, határidőkkel, a lejártak pirossal, CSV és BCF, offline munka és egyesítés; asszisztensek, amelyek állapotot állítanak be, válaszolnak és exportálják a listát; mértékegység-listák, amelyek a Beállításokat követik; panelek, amelyek elrendezhetően elrejthetők, és párbeszédpanelek, amelyek mozgathatók.
keywords: újdonságok 0.7, korábbi kiadás, kiadási jegyzetek, változásnapló, változások, 0.7, verzió, új funkciók, terepi, terepi rekordok, rfi, információkérés, beadvány, építési napló, helyszíni napló, lejárt, határidő, nekem kiosztva, kitűző, egyesítés, offline, táblagép, bcf, csv, asszisztens, mcp, jelölés állapota, válasz, exportálás, mértékegységek, mértékegység-listák, csillag, kalibrálás, kompakt, panelek, párbeszédpanelek, portugál
from: f8578677
---

Ez változott a MarkupCraft 0.7-ben, a 0.6-hoz képest. A nagy újdonság a terepi rekord: RFI-k, beadványok és építési naplók, amelyek a PDF-en belül, a jelölések mellett tárolódnak.

## Újdonságok

### RFI-k, beadványok és építési naplók

- **A Terepi lap.** Nyissa meg a {{ui:Terepi}} lapot, és válassza a {{ui:RFI}}, a {{ui:Beadvány}} vagy az {{ui:Építési napló}} lehetőséget. Érintse meg vagy kattintson arra a rajzlapra, ahová egy RFI vagy beadvány tartozik; a helyet egy kitűző jelöli. Az építési napló kitűző nélkül kerül a megnyitott rajzlapra ({{ui:Kitűző elhelyezése}} később ad egyet, a {{ui:Kitűző mozgatása}} bármely kitűzőt áthelyez). Minden rekordnak saját száma van (RFI-0001, SUB-0001, LOG-0001), címe, szövege, állapota, felelőse, határideje, válaszszála és a mellékletnevek listája. Lásd: [RFI-k, beadványok és építési naplók követése](topic:field-records).
- **Nézze meg, mi késik.** Szűrje a listát típus, állapot, határidő szerint (lejárt, 7 napon belül esedékes, van vagy nincs határidő), erre a rajzlapra vagy minden rajzlapra, szöveges keresésre vagy a {{ui:Nekem kiosztva}} szűrőre. A határidején túl is még váró rekord a listán és a kitűzőjén, pirossal, **Lejárt** jelölést kap. Lásd: [A fontos dolgok megtalálása](topic:field-records#find-what-matters).
- **CSV és BCF.** A {{ui:CSV}} gomb a listázott rekordokat táblázatként írja ki; a {{ui:BCF}} gomb BCF-témakörökként írja ki őket, mindegyikhez a rajzlapon elfoglalt helyükről készült pillanatképpel. Mindkettő követi a szűrőket. Lásd: [Exportálás](topic:field-records#export).
- **Offline, és két másolat egy lesz.** A rekordok a PDF-en belül mentődnek, és nincs szükség hálózatra, így a helyszínen lévő táblagép hozzáadhatja, megválaszolhatja és mentheti őket. Az irodában az {{ui:Egyesítés}} összekapcsolja ugyanazon PDF másik másolatának rekordjait azonosítóik alapján, egyetlen visszavonási lépésként. Lásd: [Mentés, offline munka és másolatok egyesítése](topic:field-records#save-offline-and-merging-copies).

### MI-asszisztensek

- **Többet tud az asszisztens.** A CadCraft Studion át csatlakoztatott saját asszisztens mostantól be tudja állítani egy jelölés állapotát (`markup_status`, a szálában naplózva), tud válaszolni egy szálban (`markup_reply`), és exportálhatja a {{ui:Jelölések}} listát CSV vagy BCF formátumban (`markups_export`, a lista azt exportálja, amit a szűrőkkel mutat). Minden változás egy visszavonási lépés, az asszisztens nevével aláírva. Lásd: [Mit kérhet az asszisztens](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Minden alkalmazásban

- **Mértékegységek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} alatt külön lista van a hosszúsághoz, területhez, térfogathoz, szöghöz és lejtéshez, pontosan azokkal a méretekkel, amelyeket az egységek definíciói adnak (az USA-beli felmérési láb saját egység). Kapcsolja ki azokat a mértékegységeket, amelyeket soha nem használ; ezek kikerülnek a listákból. Jelöljön meg egyet csillaggal, és az új munka abban indul. A fájl mindig megtartja a saját mértékegységét. A MarkupCraftban a {{ui:Beállítások}} › {{ui:MarkupCraft}} alatti mérési és pozícióegységek, valamint a kalibráló párbeszédpanel egysége a kapcsolókat követik; a csillag a mérési egységet állítja be, amíg nem menti a MarkupCraft saját beállításait; a kalibráláskor beírt valós távolság pedig bármely egység jelölését hordozhatja, például `3 yd` vagy `1.5 km`. Lásd: [Mértékegységek, beírt értékek és a mértékegység-listák](common:unit-lists).
- **Sűrűbb elrendezés és elrejthető panelek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés sűrűsége}} › {{ui:Kompakt}} több helyet ad a képernyőn (az érintőképernyők és telefonok megtartják nagy gombjaikat). Minden oldalsó panelnek keskeny címsora van: húzza, hogy dokkolja vagy lebegővé tegye a panelt; egy másik panel címsorára ejtve közös keret lapjaiként oszthatja meg; rögzítse, hogy a szélre csússzon; vagy rejtse el, és a szélről hozza vissza. Lásd: [A panelek elrendezése](common:arrange-panels#make-the-layout-denser).
- **A párbeszédpanelek mozgathatók.** Húzza a párbeszédpanelt a címsorától fogva a rajz elől félre; visszatéréskor oda kerül vissza, ahol hagyta. A címsorra duplán kattintva ismét középre kerül. Lásd: [Párbeszédpanel áthelyezése](common:arrange-panels#move-a-dialog).
- **Receptek MI-asszisztensekhez.** Tíz kidolgozott kérés a saját asszisztenséhez (rajz rendezése, készlet plottolása, rajzok ellenőrzése, kérdések a modellről, mennyiségkimutatás összegzése, alkatrész-változat kipróbálása…), mindegyik a hívott eszközökkel és a szükséges engedélyekkel, és mindegyiket tesztjeink újrafuttatják. Az alkalmazások nem tartalmaznak MI-t. Lásd: [Receptek MI-asszisztensekhez](common:assistants-recipes).
- **Nyelvek.** A **Português (Portugal)** új a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Nyelv}} alatt. Ez, a **Português (Brasil)**, az **Español (México)** és a **Bahasa Indonesia** most már az alkalmazások minden szavát tartalmazza, piszkozatként, amelyet még nem olvasott el anyanyelvi lektor. A súgótémakörök angol nyelvűek.
- A **CadCraft Studio** megmondja, miért nem sikerült a frissítés-ellenőrzés (még nincs fájl a rendszeréhez, nincs hálózat, hibás aláírás), a puszta „Kész” helyett, és nem hozza vissza a bezárt Újdonságok kártyát, amíg nincs újabb kiadás.

## Még nincs ebben a verzióban

- **A 0.7 nincs kódaláírással ellátva.** Az aláírás és a Microsoft Store-csomag a 0.8-ba került át, mert a tanúsítvány-ellenőrzés még nem érkezett meg. Ellenőrizze minden fájl mellett a SHA-256 értéket a getcadcraft.com/download oldalon. Windowsban, ha a SmartScreen leállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget. Macen először a CadCraft Studio ikonján kattintson jobb gombbal, és válassza a {{ui:Megnyitás}} lehetőséget. A CadCraft Studio még nincs alkalmazásboltban, és iPad- vagy iPhone-változat sincs még.
- A {{ui:Mértékegységek}} alatti szög- és lejtéslisták mentődnek, de egyetlen mező sem olvassa be őket még.
- A terepi rekordok nem osztódnak meg a CadCraft Studio Live-munkamenetében (a Live-munkamenetek csak jelöléseket visznek); a másolatokat az {{ui:Egyesítés}} segítségével hozza össze.
- Az egyesítés az utoljára módosított másolatból egészben veszi át a rekordot: ha két ember egy rekord különböző mezőit módosította, a későbbi másolat mezői érvényesülnek. A szálak és a mellékletnevek összefűződnek.
- A mellékletek csak nevek; a fájlok ott maradnak, ahol vannak. A rekordokhoz nincsenek csapatok, értesítések vagy felhőprojektek, az asszisztenseknek pedig egyelőre nincsenek eszközeik a rekordokhoz.
- A terepi rekordokat böngészőben tesztelték telefon- és táblagép-méreteknél, hálózat nélkül, de még nem próbálták ki kézzel valódi táblagépen.
- A 0.6-ból még hiányzik: oldalobjektumok bármilyen szögű elforgatása, új alakzatok közvetlen rajzolása az oldalba, vonal betűtípusának vagy méretének megváltoztatása, valamint több sorra folyó szöveg. Az oldalszerkesztésekkel mentett másolatot még nem nyitották meg az Acrobatban.
- A 0.5-ből még hiányzik: az oldalmódosítás visszavonása (például üres oldal hozzáadása), szöveg olvasása beolvasott rajzlapokról, és a saját hálózaton túli Live-munkamenetek.

Ami még nincs elkészítve, azt a [Még nincs elkészítve](topic:not-built-yet) oldal sorolja fel.
