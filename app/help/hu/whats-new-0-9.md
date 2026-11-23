---
title: Újdonságok a 0.9-es verzióban (korábbi)
summary: Olyan jegyzetek és vázlattábla, amelyek nem nyomtatódnak, titkosított privát jegyzetek és tiszta másolat az ügyfélnek, kötegelt hivatkozások egy teljes rajzkészlethez, egy ívrajzoló eszköz tíz módszerrel, egy másik felülvizsgáló követése élő munkamenetben, valamint javítás arra, hogy a törölt jelölések nem maradnak a mentett PDF-ben.
keywords: újdonságok 0.9, korábbi kiadás, újdonságok, 0.9, kiadási megjegyzések, változásnapló, jegyzetek, vázlattábla, privát jegyzetek, jelmondat, titkosított, jegyzetek elrejtése, jegyzetek megjelenítése, tiszta másolat, pillanatkép, kötegelt hivatkozások, rajzlap-hivatkozások, rajzlapok összekötése, rajzfej, rajzlapszám, kiegészítés, átszámozás, pdf-hivatkozás, ív, ívmódszerek, háromponti ív, sugár, követés, követés élőben, élő, osztálynézet, résztvevők listája, törölt jelölés, a böngészőlapok címei, 0.8, 0.8.1, verzió, új funkciók, feladat, feladatok, felelős, határnap, lejárt, ellenőrzés most, mi változott, revíziók, összehasonlítás, hangjegyzet, döntés, piros javítás, válaszfájl, rajzoló, asszisztens, mcp, problémák, nyelvek, beviteli eszközök, érintőpad, eszköztársorok, tulajdonságrács, frissítés
from: aa3dfeb8
---

Ez a változások listája a MarkupCraft 0.9 verziójában a 0.8.1-hez képest. A fő gondolat, hogy a munkajegyzetek nem kerülnek az ügyfél által kapott oldalra, és egy teljes rajzkészlet egy lépésben köthető össze hivatkozásokkal.

## Újdonságok

### Jegyzetek, vázlattábla és privát jegyzetek

- **A vázlattábla.** Minden rajzlap körüli terület egy asztal: a lap mellé rajzolt, beírt vagy beillesztett minden jegyzet, amely sosem nyomtatódik. Válassza a {{ui:Vázlattábla megjelenítése}} lehetőséget a kicsinyítéshez, vagy a {{ui:Pillanatkép a vázlattáblára}} lehetőséget, húzzon egy téglalapot, majd válassza az {{ui:A vázlattáblára}} lehetőséget, hogy a rajz egy részének képe a lap mellé kerüljön. A pillanatkép egy kép, és nem változik, ha a rajzlap változik. Lásd: [Jegyzetek, vázlattábla és privát jegyzetek](topic:notes-and-pasteboard).
- **Jegyzetek megjelenítése és elrejtése.** Bármely jelölés lehet jegyzet: állítsa be az {{ui:Az új jelölések}} értékét a {{ui:Jegyzetek}} lapon, vagy a {{ui:Ez a jelölés}} értékét a {{ui:Tulajdonságok}} részben. A {{key:Shift+H}} billentyűkombináció vagy a rajzlap alatti {{ui:Jegyzetek}} kapcsoló egyszerre elrejti és megjeleníti az összes jegyzetet. A jegyzetek kimaradnak a nyomtatásból, a lapos másolatokból, a listákból és az exportokból, és más PDF-olvasók nem mutatják őket. A mentett PDF megőrzi őket, így a következő megnyitáskor a MarkupCraftban is látszanak.
- **Privát jegyzetek.** Válassza a {{ui:Jelmondat beállítása}} lehetőséget, majd a jelölésnél válassza a {{ui:Privát megjegyzés}} lehetőséget. A jegyzet a fájlban titkosítva van, legalább 10 karakteres jelmondattal, és nincs visszaállítás: senki, még mi sem nyithatjuk meg a jelmondat nélkül. A {{ui:Zárolás}} elrejti a privát jegyzeteket; a {{ui:Maradjon feloldva ezen az eszközön}} alapértelmezés szerint ki van kapcsolva.
- **Tiszta másolat mentése.** A {{ui:Tiszta másolat mentése}} eltávolít minden jegyzetet, privát jegyzetet és mindent, ami a vázlattáblán van. Az ügyfélnek küldött fájlhoz használja.

### Egy teljes készlet összekötése

- **Kötegelt hivatkozások.** Válassza az {{ui:Oldalak}} › {{ui:Kötegelt hivatkozások…}} lehetőséget, vagy a {{ui:Rajzlapok}} panelen a {{ui:Szöveg keresése}} alatt a {{ui:Rajzlap-hivatkozások összekötése…}} lehetőséget. Az 1. lépés minden rajzlap számát és nevét listázza, a rajzfejből olvasva; javítsa ki a hibásakat. A 2. lépés a talált hivatkozásokat listázza, például `3/A-501` vagy `DETAIL 2 ON A-501`. Az {{ui:Összekötésre kerül}} megmutatja minden hivatkozáshoz a rajzlapot és a nézetet, a {{ui:Nincs összekötve}} azokat a számokat, amelyekhez nincs megnyitott rajzlap, a {{ui:Hivatkozások létrehozása}} pedig egyetlen visszavonási lépésben mindet elkészíti. Kiegészítés vagy átszámozás után futtassa újra; a kézzel készített hivatkozások nem változnak. A nézettel rendelkező hivatkozás PDF-hivatkozásként mentődik, így más olvasók is megnyitják a részletet. Lásd: [Rajzlap-hivatkozások](topic:sheet-links).

### Rajzolás

- **Ív, tíz módszerrel.** Az {{ui:Ív}} eszköz ({{key:O}}) mostantól az oldal fölött egy {{ui:Ívmódszer}} mezőt tartalmaz, tíz módszerrel rajzolhat ívet; a szög, a hossz, a sugár és az irány egérrel kattintva vagy begépelve adható meg. Lásd: [Ív rajzolása tízféleképpen](topic:draw-an-arc).

### Együttműködés

- **Egy felülvizsgáló követése.** Élő munkamenetben válassza a {{ui:Követés}} lehetőséget egy személy neve mellett, és a nézete követi az övét; a saját nagyítása vagy eltolása megállítja a követést. A munkamenet vezetője választhatja a {{ui:Kérje meg mindenkit, hogy kövessék}} lehetőséget. A résztvevők listája minden személy színét, nevét, azt a rajzlapot, amelyen éppen van, és az utolsó szerkesztése idejét mutatja. Lásd: [Egy másik felülvizsgáló követése élő munkamenetben](topic:follow-in-live).

## Minden alkalmazásban

- Az eszköztippek Bootstrap-tippek, a kezdő tipp bezárható, a lapsávok görgethetők, ha túlcsordulnak, a böngészőlapok címei pedig `<dokumentum> — MarkupCraft | CadCraft` formában jelennek meg.
- Egy több szakaszból álló panel egyet nyit, a többit bezárja (a kurzor melletti zár egyet nyitva tart); a {{ui:Beállítások}} egyik kapcsolójával ez kikapcsolható.
- Minden alkalmazás a könyvtári elemek alapértelmezett gyűjteményével indul.
- A súly- és hőmérséklet-mértékegységek a Mértékegységek beállításai között érhetők el.

## Javítva

- **A törölt jelölések már nem maradnak olvashatók a mentett PDF-ben.** A mentés korábban eltávolította a törölt vagy átírt jegyzetet az oldaláról, de az objektum a szövegével együtt a fájlban maradt. A mentés most törli ezeket az objektumokat. A korábbi buildekkel mentett fájlok addig őrzik őket, amíg újra nem mentik.

## Őszinte korlátok

- A kötegelt hivatkozásokat saját teszthalmazainkon próbáltuk ki. A valódi készletek sokféleképpen rajzolnak buborékokat, ezért ügyfél-készleteken egyes nézetek kimaradhatnak. A szkennelt lapokhoz előbb a {{ui:Szöveg beolvasása (OCR)…}} lehetőség szükséges.
- A jegyzeteket, a privát jegyzeteket és a vázlattáblát fejnélküli (headless) böngészőben és saját fájlokon teszteltük, nem nagy, valódi vektoros készleten és nem valódi, két személyes élő munkamenetben. A jelmondat módosítása nincs megvalósítva. A 0.9-nél régebbi buildek nem mutatják a jegyzeteket.
- Az osztálynézet a résztvevők listája; valódi tanárral és diákokkal nem próbáltuk ki.
- Az angoltól eltérő nyelvek gépi piszkozatok, amíg anyanyelvi beszélő el nem olvassa.
- A Windows-telepítők nincsenek kódaláírva (További információ, majd Mégis futtatás); a macOS-lemezkép nincs notarizálva (jobb gombbal kattintva, majd Megnyitás).

## Korábbi: 0.8 és 0.8.1

Ez a változások listája a MarkupCraft 0.8 és 0.8.1 verziójában a 0.7-hez képest. A nagy újdonság, hogy egy jelölés olyan feladat lehet, amelyet valaki vagy a csatlakoztatott asszisztens végez, és amely magától bezáródik, amikor a rajz valóban megváltozik.

### Újdonságok

**Működő jelölések**

- **Jelölés feladattá tétele.** Jelöljön ki egy vagy több jelölést, nyissa meg a {{ui:Feladatok}} lapot, és válassza az {{ui:A kijelölt feladattá tétele}} lehetőséget. A feladatnak van címe, egy személy vagy a csatlakoztatott asszisztens, aki elvégzi, opcionális határnapja és állapota, és megtartja helyét a rajzlapon és a szálát. Lásd: [Jelölés feladattá tétele](topic:markups-that-act).
- **Feladatok, amelyek maguktól záródnak.** A feladat figyelheti a jelölésében lévő rajzot. Nyisson meg a rajzlap újabb revízióját, és válassza az {{ui:Ellenőrzés most}} lehetőséget: ha a terület vonalai egy hajszálnál többel változtak, a feladat Kész állapotot kap, a jelölés Befejezett lesz, a szálban pedig egy megjegyzés írja le a változást. Egy új dátumbélyegző, vagy az 1,5 pontnál kevesebbet mozdult vonalak nem számítanak. A feladat helyette egy modellelemet is figyelhet: az asszisztens a `tasks_check` paranccsal jelenti az elemet, és egy későbbi, eltérő jelentés vagy egy törölt elem bezárja a feladatot. Egy visszavonási lépés újra megnyitja.
- **A munka megtalálása.** Szűrje a {{ui:Feladatok}} listát állapot szerint és aszerint, kinek szól, beleértve a {{ui:Lejárt}} értéket is; válassza a {{ui:Felelős}} lehetőséget, majd az {{ui:Asszisztens}} lehetőséget, hogy lássa, mi vár az asszisztensre. A határnapján túl lévő feladat figyelmeztetésként jelenik meg a Problémák panelen. A {{ui:CSV}} exportálja a listát. A feladatok a jelöléssel együtt mentődnek a PDF-be, és a Live munkameneten keresztül ugyanúgy utaznak, mint a többi jelölés-tulajdonság.

**Mi változott, egyszerű listaként**

- **Változások listázása.** Nyissa meg az {{ui:Összehasonlítás}} lapot, majd válassza az Egész készlet összehasonlítása lehetőséget, jelölje ki a korábbi és a későbbi fájlt, és válassza az {{ui:A változások listázása}} lehetőséget. A lista egy darabszámmal kezdődik, majd minden módosított rajzlapot bemutat, a legnagyobb változással elöl: hol van a lapon, mekkora (valódi mértékegységben, és kalibrált lapon papírhüvelykben is), vonalak kerültek-e hozzá vagy el, hány jelölés van ott, és mely szavak jelentek meg vagy tűntek el. Az {{ui:A lista másolása}} a vágólapra teszi, a {{ui:CSV}} pedig változásonként egy sort ír. Lásd: [Revíziók közötti változások szavakkal](topic:what-changed-in-words).

**Hangjegyzetek és döntések**

- **Hangjegyzetek.** A {{ui:Jegyzetek}} lapon válassza a {{ui:Hangjegyzet felvétele}} lehetőséget, majd a {{ui:Felvétel leállítása}} lehetőséget; a felvétel két perc után magától leáll. A jegyzet a lap közepéhez van rögzítve: húzza oda, ahová tartozik, és a {{ui:Tulajdonságok}} részben írjon hozzá feliratot; a listában a {{ui:Lejátszás}} lejátssza. A felvétel a PDF-be mentődik.
- **Döntések.** A {{ui:Döntés kitűzése}} egy-két mondatot ír a lapra. Ha egy korábbi döntést vált fel, azt válassza ki az {{ui:Ezt váltja fel}} mezőben: a régi megmarad, Felváltva jelöléssel, és az újra mutat. Egy visszavonási lépés visszaveszi. Lásd: [Hangjegyzetek és döntések kitűzése a lapra](topic:voice-notes-and-decisions).

**Piros javítás a revízióhoz**

- **Küldés és válasz.** A {{ui:Feladatok}} lapon nyissa meg a {{ui:Piros javítás a revízióhoz}} lehetőséget, írja be azt a revíziót, amelyhez a jelölések tartoznak, és válassza a {{ui:Piros javítási fájl exportálása}} lehetőséget. Egy `.redline.json` fájlt kap, benne minden nyitott jelölésnek egy elemmel: lap, pozíció (a lap törtrészeiben, így a más méretre újranyomtatott lap is pontosan illeszkedik), szavak, szerző, szál és a hozzá tartozó feladat. Aki a változásokat rajzolja, a `.redline-answers.json` fájlban válaszolhat Elfogadott, Elutasított vagy Kész értékkel; a {{ui:Válaszfájl betöltése…}} minden jelölésnek beállítja ezt az állapotot és a rajzoló megjegyzését, egy visszavonási lépésként. Lásd: [Jelölések küldése a rajzolónak piros javításként](topic:redline-to-revision).

**AI-asszisztensek**

- **További eszközök.** A CadCraft Studio-n keresztül csatlakoztatott asszisztens listázhatja a feladatokat (`tasks_list`), létrehozhat vagy módosíthat egyet (`task_set`), levehet róla egy feladatot (`task_clear`), ellenőrizhet egyet egy újabb revízióval vagy egy elemmel (`tasks_check`), és beolvashatja két megnyitott tervkészlet közötti változások egyszerű listáját (`revisions_changes`). Csak azokat az eszközöket kapja meg, amelyeket az Asszisztensek kapcsolónál bejelölt, és minden változás egy visszavonási lépés. Lásd: [MarkupCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

### Minden alkalmazásban

- **Nyelvek.** A CadCraft Studio most 54 nyelvű. Tízet újonnan adtunk hozzá: litván, lett, bosnyák, marathi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Minden nem angol nyelv gépi piszkozat, amíg anyanyelvi beszélő el nem olvassa.
- **Beviteli eszközök.** A {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Beviteli eszközök}} alatt megadható, mit csináljon az érintőpad, az egér oldalsó gombjai, a toll, az ujjal koppintás, a 3D-egér, a játékvezérlő vagy a MIDI-vezérlő, minden alkalmazásban vagy csak ebben. Amíg nem változtat semmin, minden eszköz a korábbi módon működik. Lásd: [Érintőpad, 3D-egér vagy vezérlő használata](common:input-devices).
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} lehetőségei: {{ui:Tördelés}} (az alapértelmezett), {{ui:2 sor}} és {{ui:1 sor}}, így a rajz több helyet kap. Lásd: [Panelek elrendezése](common:arrange-panels).
- **Tulajdonságrács.** A jelölés stílusmezői a közös rácsot használják, összecsukható kategóriákkal, címke- és értékoszlopokkal.
- **Problémák panel.** Az alkalmazás figyelmeztetései, például a lejárt feladat, egy Problémák panelbe gyűlnek.
- **Élő munkamenetek és bővítmények.** Az élő munkameneteket a [Közös munka élőben](common:work-together-live) leírás ismerteti; a fiókjához tartozó bővítménylista a [Bővítmények és a fiókja listája](common:addons-basics) alatt található.
- **Csatlakoztassa a saját AI-ját.** A CadCraft Studio a saját asszisztensének központja: egyszer csatlakoztassa mind a nyolc alkalmazáshoz. Az alkalmazások nem tartalmaznak saját AI-t.

### Javítva a 0.8.1-ben

- **A Studio futás közben tud nyelvet váltani.** Korábban az asztali alkalmazás és a csomagolt kiadások angolul maradtak. Még nincs minden platformon tesztelve: jelezze, ha a nyelv nem változik.
- A 0.8-as Studio-telepítések a {{ui:Beállítások}} › {{ui:Frissítések}} menüpontban kapják meg a 0.8.1-et.

### Ebben a verzióban még nincs

- **Nincs kódaláírás.** A Windows-telepítők és a macOS .dmg fájl még nincs aláírva. Windows alatt, ha a SmartScreen leállítja a telepítőt, válassza a {{ui:További információ}} lehetőséget, majd a {{ui:Mégis futtatás}} lehetőséget. Macen kattintson jobb gombbal a CadCraft Studio-ra, és válassza a {{ui:Megnyitás}} lehetőséget. Az áruházi verziók szünetelnek.
- **A saját AI csatlakoztatása helyenként még nem kész.** Az egykattintásos csatlakozás a Studióban, a böngészős asszisztensek hosztolt összekötője és a saját API-kulcs a Studióban nem ígért funkció ebben a kiadásban. A feladatciklus tesztelve van, de még nem valódi asszisztenssel.
- **A feladatellenőrzéshez azonos oldalméret kell.** Más méretre újranyomtatott lap nem egyezik, így a hozzá tartozó feladatok nem záródnak be. A lapok rajzlapszám alapján párosodnak, különben oldalpozíció szerint.
- **A hangjegyzetek csak felvételek.** Nincs átirat, és az asszisztens a jegyzet hosszát, szerzőjét és feliratát látja, a hangot nem. A felvételt fals mikrofonnal, fejnélküli böngészőben próbálták ki; valódi mikrofon telefonon, táblagépen vagy laptopon még ellenőrzésre vár.
- **A PDF-ben lévő számítási lapok és indoklások** egy privát bejegyzésben maradnak meg a fájlban. A régebbi MarkupCraft ezt figyelmen kívül hagyja, és a következő mentéskor eldobja, ezért az ilyen fájlt 0.8 vagy újabb verzióval nyissa meg és mentse.
- **A rajzoló oldala a piros javításoknak.** A CadCraft még nem olvassa be és nem válaszol a piros javítási fájlra.
- **Más nyelvek.** A tamil nyelvű alkalmazássáv 528 px-lel túlcsordul.

Minden más a [Ami még nincs kész](topic:not-built-yet) oldalon található. Az ezt megelőző kiadásról lásd: [Újdonságok a 0.7-ben](topic:whats-new-0-7).
