---
title: Újdonságok a 0.9-ben
summary: Jegyzetek és vázlattábla, amelyek sosem nyomtatódnak, titkosított privát jegyzetek és tiszta másolat az ügyfélnek, kötegelt hivatkozások egy teljes rajzkészlethez, Ív-eszköz tíz módszerrel, egy másik áttekintő követése Live-ban, és javítás arra, hogy a törölt jelölések a mentett PDF-ben maradnak.
keywords: újdonságok, mi az új, 0.9, kiadási jegyzetek, változásnapló, jegyzetek, vázlattábla, privát jegyzetek, jelmondat, titkosított, jegyzetek elrejtése, jegyzetek megjelenítése, tiszta másolat, pillanatkép, kötegelt hivatkozások, rajzlap-hivatkozások, rajzlapok hivatkozása, rajzfej, rajzlapszám, kiegészítés, átszámozás, PDF-hivatkozás, ív, ívmódszerek, háromponttal megadott ív, sugár, követés, kövessen engem, live, osztálynézet, résztvevők listája, törölt jelölés, buboréksúgók, lapcímek, kiadási jegyzetek, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, feladat, feladatok, felelős, határnap, lejárt, ellenőrzés most, mi változott, revíziók, összehasonlítás, hangjegyzet, döntés, piros javítás, válaszfájl, rajzoló, asszisztens, mcp, problémák, nyelvek, beviteli eszközök, érintőpad, eszköztársorok, tulajdonságrács, frissítés
from: dbdd7ed4
---

Ez változott a MarkupCraft 0.9-ben, a 0.8.1-hez képest. A fő gondolat, hogy a munkajegyzetek nem kerülnek az ügyfélnek átadott oldalra, és egy teljes rajzkészlet egy menetben összekapcsolható.

## Újdonságok

### Jegyzetek, a vázlattábla és a privát jegyzetek

- **A vázlattábla.** Minden rajzlap körüli terület egy asztal: a rajzlap mellé rajzolt, beírt vagy beillesztett minden jegyzet, és soha nem nyomtatódik. Válassza a {{ui:Vázlattábla megjelenítése}} lehetőséget, ha kicsinyíteni szeretne a helyért, vagy a {{ui:Pillanatkép a vázlattáblára}} lehetőséget, húzzon egy keretet, majd a {{ui:A vázlattáblára}} lehetőséget, hogy a rajz egy részének képe a rajzlap mellé kerüljön. A pillanatkép kép, és nem változik, ha a rajzlap változik. Lásd: [Jegyzetek, a vázlattábla és a privát jegyzetek](topic:notes-and-pasteboard).
- **Jegyzetek megjelenítése és elrejtése.** Bármely jelölés lehet jegyzet: állítsa be az {{ui:Jegyzetek}} lapon az {{ui:Az új jelölések}} értékét, vagy a {{ui:Tulajdonságok}} lapon az {{ui:Ez a jelölés}} értékét. A {{key:Shift+H}} vagy a rajzlap alatti {{ui:Jegyzetek}} kapcsoló egyszerre elrejti és megjeleníti az összes jegyzetet. A jegyzetek kimaradnak a nyomtatásból, a lapos másolatokból, a listákból és az exportokból, más PDF-olvasók pedig nem mutatják őket. A mentett PDF megtartja őket a következő alkalomra, amikor MarkupCraftban megnyitja.
- **Privát jegyzetek.** Válassza a {{ui:Jelmondat beállítása}} lehetőséget, majd állítson be egy jelölést erre: {{ui:Privát megjegyzés}}. A fájlban legalább 10 karakteres jelmondattal titkosítódik, és nincs visszaállítás: senki, beleértve minket is, nem nyithatja meg a jelmondat nélkül. A {{ui:Zárolás}} elrejti a privát jegyzeteket; a {{ui:Maradjon feloldva ezen az eszközön}} alapértelmezésben ki van kapcsolva.
- **Tiszta másolat mentése.** A {{ui:Tiszta másolat mentése}} eltávolítja az összes jegyzetet, a privát jegyzeteket és mindent a vázlattáblán. Az ügyfélnek küldött fájlhoz ezt használja.

### Teljes készlet összekapcsolása

- **Kötegelt hivatkozások.** Válassza a {{ui:Oldalak}} › {{ui:Kötegelt hivatkozások…}} lehetőséget, vagy a {{ui:Rajzlapok}} panelen a {{ui:Szöveg keresése}} alatti {{ui:Rajzlap-hivatkozások összekötése…}} lehetőséget. Az 1. lépés minden rajzlap számát és nevét listázza, a címblokkjából olvasva; javítsa ki a hibásakat. A 2. lépés a talált kiemeléseket listázza, például `3/A-501` vagy `DETAIL 2 ON A-501`. Az Összekapcsolandó minden kiemeléshez megmutatja a rajzlapot és a nézetet, a Nincs összekapcsolva a számokat mutatja, amelyekhez nincs nyitott rajzlap, a {{ui:Hivatkozások létrehozása}} pedig mindegyiket egyetlen visszavonási lépésben elkészíti. Egy kiegészítés vagy átszámozás után futtassa újra; a kézzel készített hivatkozásokat soha nem módosítja. A nézetet tartalmazó hivatkozás PDF-hivatkozásként mentődik, így más olvasók is megnyitják a részletet. Lásd: [Rajzlap-hivatkozások](topic:sheet-links).

### Rajzolás

- **Ív, tíz módszerrel.** Az {{ui:Ív}} eszköznek ({{key:O}}) mostantól van egy {{ui:Ívmódszer}} doboza az oldal fölött, tíz módszerrel rajzolhat ívet; a szög, a hossz, a sugár és az irány kattintással vagy beírással adható meg. Lásd: [Ív rajzolása tízféleképpen](topic:draw-an-arc).

### Együttes munka

- **Egy áttekintő követése.** Live-munkamenetben válassza a személy neve melletti {{ui:Követés}} lehetőséget, és a nézet az övével együtt mozog; a saját nézet mozgatása vagy nagyítása megszünteti a követést. A házigazda választhatja a {{ui:Kérje meg mindenkit, hogy kövessék}} lehetőséget. A résztvevők listája mutatja mindenki színét, nevét, azt, hogy melyik rajzlapon van, és mikor volt az utolsó szerkesztése. Lásd: [Egy másik áttekintő követése Live-munkamenetben](topic:follow-in-live).

## Minden alkalmazásban

- A buboréksúgók Bootstrap-buboréksúgók, az indítási tipp bezárható, a lapsávok túlcsordulásakor görgethetők, a böngészőlapok címe pedig így szól: `<document> — MarkupCraft | CadCraft`.
- A több szakaszos panel egyet nyit, a többit bezárja (a nyíl melletti zár nyitva tartja az egyiket); egy Beállítások-kapcsoló ezt kikapcsolja.
- Minden alkalmazás az alapértelmezett könyvtári elemgyűjteménnyel indul.
- A tömeg- és hőmérséklet-mértékegységek elérhetők a Mértékegységek beállításaiban.

## Javítva

- **A törölt jelölések már nem maradnak olvashatók a mentett PDF-ben.** A mentés korábban eltávolította a törölt vagy átírt annotációt az oldalról, de az objektum a szövegével együtt a fájlban maradt. A mentés most törli ezeket az objektumokat. A korábbi verziókkal mentett fájlok ezeket addig tartalmazzák, amíg újra nem mentik őket.

## Őszinte korlátok

- A kötegelt hivatkozásokat saját tesztkészleteinken próbálták ki. A valódi készletek sokféleképpen rajzolnak kiemelő buborékokat, ezért ügyfélkészleten néhány nézet kimaradhat. A beolvasott rajzlapokhoz előbb a {{ui:Szöveg beolvasása (OCR)…}} szükséges.
- A jegyzeteket, a privát jegyzeteket és a vázlattáblát fej nélküli (headless) böngészőben és saját fájlainkon tesztelték, nem nagy, valódi vektoros készleten és nem valódi, kéttagú Live-munkamenetben. A jelmondat megváltoztatása még nincs elkészítve. A 0.9 előtti verziók nem mutatják a jegyzeteket.
- Az osztálynézet a résztvevők listája; valódi tanárral és diákokkal még nem próbálták ki.
- Az angoltól eltérő nyelvek gépi piszkozatok, amíg anyanyelvi lektor el nem olvassa őket.
- A Windows-telepítők nincsenek kódaláírással (További információ, majd Futtatás mindenképp); a macOS-lemezkép nincs notarizálva (jobb kattintás, majd Megnyitás).

## Korábbi: 0.8 és 0.8.1

Ez változott a MarkupCraft 0.8 és 0.8.1 verzióban, a 0.7-hez képest. A nagy újdonság, hogy egy jelölés lehet feladat, amelyet valaki vagy egy csatlakoztatott asszisztens elvégez, és amely magától lezárul, amikor a rajz valóban megváltozik.

### Újdonságok

**Működő jelölések**

- **Jelölés feladattá tétele.** Jelöljön ki egy vagy több jelölést, nyissa meg a {{ui:Feladatok}} lapot, és válassza a {{ui:A kijelölt feladattá tétele}} lehetőséget. A feladatnak van címe, az elvégzésére jelölt személy vagy a csatlakoztatott asszisztens, egy opcionális határnapja és állapota, és megtartja helyét a rajzlapon és a szálában. Lásd: [Jelölés feladattá tétele](topic:markups-that-act).
- **Magától záródó feladatok.** A feladat figyelheti a jelölésén belüli rajzot. Nyisson meg a rajzlapnak egy újabb revízióját, és válassza a {{ui:Ellenőrzés most}} lehetőséget: ha a vonalak abban a területben egy hajszálnyinál többet változtak, a feladat Kész állapotot kap, a jelölése Befejezett lesz, a szálban pedig egy megjegyzés írja le, mi változott. Egy új dátumbélyegző vagy az 1,5 pontnál kevesebbet elmozduló vonalak nem számítanak. A feladat ehelyett egy modellelemet is figyelhet: az asszisztense a `tasks_check` eszközzel jelenti az elemet, és egy későbbi, eltérő jelentés vagy egy törölt elem lezárja a feladatot. Egy visszavonási lépés újra megnyitja.
- **A munka megtalálása.** Szűrje a {{ui:Feladatok}} listát állapot szerint és az alapján, kinek szól, beleértve a {{ui:Lejárt}} szűrőt; válassza a {{ui:Felelős}} lehetőséget, majd az {{ui:Asszisztens}} lehetőséget, hogy lássa, mi vár az asszisztensére. A határnapját túllépő feladat figyelmeztetésként jelenik meg a Problémák panelen. A {{ui:CSV}} gomb exportálja a listát. A feladatok a jelöléssel együtt mentődnek a PDF-be, és a Live-on keresztül úgy utaznak, mint a többi jelöléstulajdonság.

**Mi változott, egyszerű listaként**

- **A változások listázása.** Nyissa meg az {{ui:Összehasonlítás}} lapot, majd a {{ui:Teljes készlet összehasonlítása}} lehetőséget, válassza ki a korábbi és a későbbi fájlt, és válassza a {{ui:A változások listázása}} lehetőséget. A lista egy számmal kezdődik, majd minden megváltozott rajzlapot ismertet, a legnagyobb változással kezdve: hol van a rajzlapon, mekkora (kalibrált rajzlapon valós mértékegységben és a papíron mért hüvelykben is), történt-e vonalhozzáadás vagy -törlés, hány jelölés van ott, és mely szavak jelentek meg vagy tűntek el. A {{ui:A lista másolása}} a vágólapra teszi a listát, a {{ui:CSV}} pedig soronként egy változást ír. Lásd: [Változások listázása revíziók között](topic:what-changed-in-words).

**Hangjegyzetek és döntések**

- **Hangjegyzetek.** A {{ui:Jegyzetek}} lapon válassza a {{ui:Hangjegyzet felvétele}} lehetőséget, majd a {{ui:Felvétel leállítása}} lehetőséget; a felvétel két perc után magától leáll. A jegyzet a rajzlap közepére kerül; húzza oda, ahová tartozik, és a {{ui:Tulajdonságok}} lapon írjon feliratot. A listában a {{ui:Lejátszás}} lejátssza. A felvétel a PDF-be mentődik.
- **Döntések.** A {{ui:Döntés kitűzése}} egy-két mondatot ír a rajzlapra. Ha egy korábbi döntést vált fel, azt jelölje ki az {{ui:Ezt váltja fel}} mezőben: a régi megmarad, Felváltva jelöléssel, és az újra mutat. Egy visszavonási lépés visszaveszi. Lásd: [Hangjegyzetek és döntések kitűzése a rajzlapra](topic:voice-notes-and-decisions).

**Piros javítás a revízióhoz**

- **Küldés és válasz.** A {{ui:Feladatok}} lapon nyissa meg a {{ui:Piros javítás a revízióhoz}} lehetőséget, írja be azt a revíziót, amelyhez a jelölések tartoznak, és válassza az {{ui:Piros javítási fájl exportálása}} lehetőséget. Egy `.redline.json` fájlt kap, nyitott jelölésenként egy tétellel: rajzlap, pozíció (a rajzlap törtrészeiben, így egy más méretű újrakinyomtatás is pontosan illeszkedik), szavak, szerző, szál és a hozzá tartozó feladat. A változtatásokat rajzoló fél egy `.redline-answers.json` fájlban válaszol Elfogadva, Elutasítva vagy Kész állapottal; a {{ui:Válaszfájl betöltése…}} minden jelölésnek beállítja ezt az állapotot és a rajzoló megjegyzését, egyetlen visszavonási lépésként. Lásd: [Jelölések küldése a rajzolónak piros javításként](topic:redline-to-revision).

**MI-asszisztensek**

- **További eszközök.** A CadCraft Studion át csatlakoztatott asszisztens listázhatja a feladatokat (`tasks_list`), létrehozhat vagy módosíthat egyet (`task_set`), levehet egy feladatot (`task_clear`), ellenőrizhet egyet egy újabb revízióval vagy egy elemmel szemben (`tasks_check`), és beolvashatja két megnyitott rajzkészlet közötti változások egyszerű listáját (`revisions_changes`). Csak azokat az eszközöket kapja meg, amelyeket az Asszisztensek kapcsolónál bejelölt, és minden változás egy visszavonási lépés. Lásd: [MarkupCraft használata MI-asszisztenssel](topic:use-with-ai-assistants).

### Minden alkalmazásban

- **Nyelvek.** A CadCraft Studio mostantól 54 nyelven érhető el. Tíz új: litván, lett, bosnyák, marathi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Az összes nem angol nyelv gépi piszkozat, amíg anyanyelvi lektor el nem olvassa.
- **Beviteli eszközök.** A {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Beviteli eszközök}} megadja, mit tegyen az érintőpad, az egér oldalsó gombjai, a toll, az ujjal koppintás, a 3D-egér, a játékvezérlő vagy a MIDI-vezérlő, mindegyik alkalmazásban vagy csak ebben. Amíg nem változtat semmit, minden eszköz a korábbi módon működik. Lásd: [Érintőpad, 3D-egér vagy vezérlő használata](common:input-devices).
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} alatt a {{ui:Tördelés}} (az alapértelmezett), a {{ui:2 sor}} és az {{ui:1 sor}} közül választhat, így több hely jut a rajznak. Lásd: [A panelek elrendezése](common:arrange-panels).
- **Tulajdonságrács.** A jelölés stílusmezői a közös rácsot használják, összecsukható kategóriákkal, címke- és értékoszlopokkal.
- **Problémák panel.** Az alkalmazás figyelmeztetései, például egy lejárt feladat, egy Problémák panelen gyűlnek össze.
- **Live és bővítmények.** A Live-munkamenetek leírása a [Együttes munka élőben](common:work-together-live) oldalon található; a fiókhoz tartozó bővítménylista a [Bővítmények és a fiókhoz tartozó lista](common:addons-basics) oldalon található.
- **MI csatlakoztatása.** A CadCraft Studio a saját asszisztens központja (hub): egyszer csatlakoztatható mind a nyolc alkalmazáshoz. Az alkalmazások nem tartalmaznak saját MI-t.

### Javítva a 0.8.1-ben

- **A Studio a futás közben is tud nyelvet váltani.** Korábban az asztali alkalmazás és a csomagolt kiadások angolul maradtak. Ezt még nem tesztelték minden platformon: jelezze, ha a nyelv nem változik.
- A 0.8-as Studio-telepítések a {{ui:Beállítások}} › {{ui:Frissítések}} útján kapják meg a 0.8.1-et.

### Még nincs ebben a verzióban

- **Nincs kódaláírás.** A Windows-telepítők és a macOS .dmg fájl még nincs aláírva. Windowsban, ha a SmartScreen leállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget. Macen a CadCraft Studio ikonján kattintson jobb gombbal, és válassza a {{ui:Megnyitás}} lehetőséget. Az áruházi kiadások szüneteltek.
- **Az MI csatlakoztatása részben kész.** Az egykattintásos csatlakozás a Studión belül, a böngészős asszisztensek üzemeltetett csatlakozója és a saját API-kulcs a Studión belül ebben a kiadásban nincs ígérve. A feladatciklust teszteltük, de még nem valódi asszisztenssel.
- **A feladatellenőrzéshez azonos oldalméret kell.** Egy másik méretben újrakinyomtatott rajzlap nem fog egyezni, így a feladatai nem záródnak le. A rajzlapok rajzlapszám alapján párosodnak, különben oldalpozíció szerint.
- **A hangjegyzetek csak felvételek.** Nincs átirat, és az asszisztens a jegyzet hosszát, szerzőjét és feliratát látja, a hangot nem. A felvételt szimulált mikrofonnal próbálták ki fej nélküli böngészőben; valódi mikrofont telefonon, táblagépen vagy laptopon még ellenőrizni kell.
- **A PDF-ben lévő számítási lapok és indoklások** a fájl privát bejegyzésében maradnak meg. A régebbi MarkupCraft figyelmen kívül hagyja ezt a bejegyzést, és a fájl következő mentésekor eltávolítja, ezért az ilyen fájlt 0.8-as vagy újabb verzióval nyissa meg és mentse.
- **A rajzoló oldala a piros javításoknak.** A CadCraft beolvasó és megválaszoló funkciója a piros javítási fájlhoz még nincs elkészítve.
- **Más nyelvek.** A tamil alkalmazássáv 528 px-rel túlcsordul.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon található. Az ezt megelőző kiadásról lásd: [Újdonságok a 0.7-ben](topic:whats-new-0-7).
