---
title: Újdonságok a 0.7-ben
summary: RFI-k, beadványok és építési naplók az új Terepi lapon, határidőkkel, pirossal jelölt lejárttal, CSV-vel és BCF-fel, offline munkával és egyesítéssel; asszisztensek, amelyek állapotot állítanak, válaszolnak és exportálják a listát; a Beállításokat követő mértékegységlisták; eltűnő panelek és mozgatható párbeszédpanelek.
keywords: újdonságok, kiadási megjegyzések, változásnapló, változások, 0.7, verzió, új funkciók, terepi, terepi bejegyzések, rfi, információkérés, beadvány, építési napló, lejárt, határidő, nekem kiosztva, kitűző, egyesítés, offline, táblagép, bcf, csv, asszisztens, mcp, jelölés állapota, válasz, exportálás, mértékegységek, mértékegységlisták, csillag, kalibrálás, kompakt, panelek, párbeszédpanelek, portugál
from: 142e1a1e
---

Ez változott a MarkupCraft 0.7-ben a 0.6-hoz képest. A nagy újdonság a terepi bejegyzések: az RFI-k, beadványok és építési naplók a PDF-ben, a jelölései mellett maradnak.

## Új

### RFI-k, beadványok és építési naplók

- **A Terepi lap.** Nyissa meg a {{ui:Terepi}} lapot, és válassza az {{ui:RFI}}, a {{ui:Beadvány}} vagy az {{ui:Építési napló}} lehetőséget. Koppintson vagy kattintson arra a rajzlapra, ahová az RFI vagy a beadvány tartozik, és egy kitűző jelöli a helyet; az építési napló kitűző nélkül a megnyitott rajzlapra kerül (a {{ui:Kitűző elhelyezése}} később hozzáad egyet, a {{ui:Kitűző mozgatása}} bármelyiket áthelyezi). Minden bejegyzésnek saját száma (RFI-0001, SUB-0001, LOG-0001), címe, szövege, állapota, felelőse, határideje, válaszszála és mellékletneveinek listája van. Lásd [RFI-k, beadványok és építési naplók követése](topic:field-records).
- **Lássa, mi késik.** Szűrje a listát típus, állapot, határidő (lejárt, 7 napon belül esedékes, van vagy nincs határideje), ez a rajzlap vagy minden rajzlap, szöveges keresés szerint, vagy a {{ui:Nekem kiosztva}} szűrővel. Az a bejegyzés, amelynek elmúlt a határideje, és még vár, **Lejárt** jelölést kap, pirossal, a listán és a kitűzőjén. Lásd [Találja meg, ami számít](topic:field-records#find-what-matters).
- **CSV és BCF.** A {{ui:CSV}} a listázott bejegyzéseket táblázatként írja ki; a {{ui:BCF}} BCF-témákként, mindegyikhez a rajzlapon elfoglalt helyének pillanatképével. Mindkettő követi a szűrőket. Lásd [Exportálás](topic:field-records#export).
- **Offline, és két másolat eggyé téve.** A bejegyzések a PDF-ben mentődnek, és nem kell hozzájuk hálózat, így egy építkezési táblagép hozzáadhat, megválaszolhat és menthet. Az irodában az {{ui:Egyesítés}} ugyanannak a PDF-nek egy másik másolatából egyesíti a bejegyzéseket az azonosítójuk alapján, egyetlen visszavonási lépésként. Lásd [Mentés, offline munka és másolatok egyesítése](topic:field-records#save-offline-and-merging-copies).

### AI-asszisztensek

- **Többet tud az asszisztens.** A saját asszisztense, a CadCraft Studión keresztül kapcsolva, mostantól beállíthatja egy jelölés állapotát (`markup_status`, naplózva a szálában), válaszolhat egy szálban (`markup_reply`), és exportálhatja a {{ui:Jelölések}} listát CSV-ként vagy BCF-ként (`markups_export`, azt, amit a lista a szűrőivel mutat). Minden módosítás egyetlen visszavonási lépés, az asszisztens nevével aláírva. Lásd [Mit kérhet egy asszisztens](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Minden alkalmazásban

- **Mértékegységek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} részben a hosszhoz, területhez, térfogathoz, szöghöz és lejtéshez egy-egy lista tartozik, a mértékegységek definíciói szerinti pontos méretekkel (az amerikai felmérési láb külön mértékegység). Kapcsolja ki azokat, amelyeket sosem használ, és kikerülnek a mértékegységlistákból; jelöljön meg egyet csillaggal, és az új munka abban indul. A fájl mindig megtartja a saját mértékegységét. A MarkupCraftban a {{ui:Beállítások}} › {{ui:MarkupCraft}} részben a mérési és pozíció-mértékegységek, valamint a kalibrálás párbeszédpanel mértékegysége követik a kapcsolókat, a csillag addig a mérési mértékegységet állítja, amíg el nem menti a MarkupCraft saját beállításait, és a kalibráláskor beírt valós távolság bármelyik mértékegység jelét viselheti, például `3 yd` vagy `1.5 km`. Lásd [Mértékegységek, beírt értékek és a mértékegységlisták](common:unit-lists).
- **Sűrűbb elrendezés és eltűnő panelek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés sűrűsége}} › {{ui:Kompakt}} több mindent elhelyez a képernyőn (az érintőképernyők és a telefonok megtartják a nagy gombjaikat). Minden oldalpanelnek van egy keskeny címsora: húzza el, hogy rögzítse vagy lebegtesse a panelt, ejtse egy másik panel sávjára, hogy egy keretben osztozzanak lapokként, tűzze ki, hogy a szélre csússzon, vagy rejtse el, és hozza vissza a szélről. Lásd [A panelek elrendezése](common:arrange-panels#make-the-layout-denser).
- **A párbeszédpanelek mozognak.** Húzza el a párbeszédpanelt a címsoránál fogva a rajz útjából; ott tér vissza, ahol hagyta. Kattintson duplán a címsorra, hogy újra középre kerüljön. Lásd [Párbeszédpanel mozgatása](common:arrange-panels#move-a-dialog).
- **Receptek AI-asszisztensekhez.** Tíz kidolgozott kérés a saját asszisztensének (rajz rendbetétele, készlet plottolása, rajzok ellenőrzése, kérdések egy modellről, mennyiségkimutatás összesítése, alkatrészváltozat kipróbálása…), mindegyikhez a hívott eszközökkel és a szükséges jogosultságokkal, és mindegyiket lejátszják a tesztjeink. Az alkalmazások nem tartalmaznak AI-t. Lásd [Receptek AI-asszisztensekhez](common:assistants-recipes).
- **Nyelvek.** A **Português (Portugal)** új a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Nyelv}} részben. Ez, a **Português (Brasil)**, az **Español (México)** és a **Bahasa Indonesia** most már az alkalmazások minden szavával rendelkezik, olyan piszkozatként, amelyet még nem nézett át anyanyelvi beszélő. A súgótémakörök angolul vannak.
- A **CadCraft Studio** megmondja, miért hiúsult meg egy frissítésellenőrzés (még nincs fájl az Ön rendszeréhez, nincs hálózat, hibás aláírás), ahelyett, hogy csak annyit írna: „Kész”, és nem hozza vissza az Újdonságok kártyát, amelyet bezárt, amíg nincs újabb kiadás.

## Ebben a verzióban még nincs

- **A 0.7 nincs kódaláírással ellátva.** Az aláírás és a Microsoft Store csomag a 0.8-ba került, mert a tanúsítvány érvényesítése még nem jött meg. Ellenőrizze az SHA-256 értéket minden fájl mellett a getcadcraft.com/download oldalon. Windowson, ha a SmartScreen megállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképpen}} lehetőséget. Macen az első alkalommal kattintson jobb gombbal a CadCraft Studióra, és válassza a {{ui:Megnyitás}} lehetőséget. A CadCraft Studio még nincs alkalmazásáruházban, és még nincs iPad- vagy iPhone-kiadás.
- A {{ui:Mértékegységek}} szög- és lejtéslistái mentődnek, de még nincs mező, amely olvasná őket.
- A terepi bejegyzések nincsenek megosztva a CadCraft Live TeamWork-munkamenetében (a Live-munkamenetek csak jelöléseket visznek); hozza össze a másolatokat az {{ui:Egyesítés}} paranccsal.
- Az egyesítés egy bejegyzést egészében az utoljára módosított másolatból vesz át: ha ketten egy bejegyzés különböző mezőit módosították, a későbbi másolat mezői érvényesülnek. A szálak és a mellékletnevek egyesülnek.
- A mellékletek csak nevek; a fájlok ott maradnak, ahol vannak. A bejegyzésekhez nincsenek csapatok, értesítések vagy felhőprojektek, és az asszisztenseknek még nincsenek eszközeik a bejegyzésekhez.
- A terepi bejegyzéseket böngészőben, telefon- és táblagépméreten, megszakított hálózattal teszteltük, de még nem kézzel, valódi táblagépen.
- A 0.6-ból még hiányzik: az oldalobjektumok tetszőleges szögben forgatása, új alakzatok közvetlen rajzolása az oldalra, a vonalak betűtípusának vagy méretének módosítása, és a több soron átfutó szöveg. Az oldalszerkesztéseket tartalmazó mentett másolatot még nem nyitottuk meg Acrobatban.
- A 0.5-ből még hiányzik: egy oldalmódosítás visszavonása (például egy üres oldal hozzáadásáé), a szöveg olvasása beolvasott rajzlapokról, és a Live-munkamenetek a saját hálózatán túl.

Minden más a [Ami még nincs elkészítve](topic:not-built-yet) témakörben van.
