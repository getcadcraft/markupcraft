---
title: Újdonságok a 0.8 és a 0.8.1 verzióban
summary: Jelölésekből lesznek feladatok, amelyek maguktól lezárulnak; egyszerű lista a revíziók közötti változásokról, hangjegyzetek és döntések a terven, piros javítási fájlok a rajzolónak, valamint a közös 0.8-as változások: beviteli eszközök, eszköztársorok, Problémák, több nyelv.
keywords: újdonságok, kiadási jegyzetek, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, feladat, feladatok, felelős, határnap, lejárt, ellenőrzés most, mi változott, revíziók, összehasonlítás, hangjegyzet, döntés, piros javítás, válaszfájl, rajzoló, asszisztens, mcp, problémák, nyelvek, beviteli eszközök, érintőpad, eszköztársorok, tulajdonságrács, frissítés
from: 40368796
---

Ez a változás a MarkupCraft 0.8 és 0.8.1 verziójában, a 0.7-hez képest. A nagy újdonság, hogy egy jelölés lehet olyan feladat, amelyet valaki vagy a saját asszisztense elvégez, és amely magától lezárul, amikor a rajz ténylegesen megváltozik.

## Újdonságok

### Működő jelölések

- **Jelölés feladattá alakítása.** Jelöljön ki egy vagy több jelölést, nyissa meg a {{ui:Feladatok}} lapot, és válassza a {{ui:A kijelölt feladattá tétele}} lehetőséget. A feladatnak van címe, személy vagy a csatlakoztatott asszisztense végzi, lehet határnapja és állapota, és megtartja helyét a lapon és a szálát. Lásd: [Jelölés feladattá alakítása](topic:markups-that-act).
- **Feladatok, amelyek maguktól lezárulnak.** A feladat figyelheti a rajzot a jelölésén belül. Nyissa meg a lap egy újabb revízióját, és válassza az {{ui:Ellenőrzés most}} lehetőséget: ha a vonalak abban a területben egy hajszálnál nagyobb mértékben változtak, a feladat Kész állapotba kerül, a jelölés Befejezett lesz, a szálban pedig megjegyzés írja le, mi változott. Egy új dátumbélyegző, illetve az 1,5 pontnál kevesebbet elmozdult vonalak nem számítanak. A feladat ehelyett egy modellelemet is figyelhet: az asszisztens a `tasks_check` paranccsal jelenti az elemet, és egy későbbi, eltérő jelentés vagy egy törölt elem lezárja a feladatot. Egy visszavonási lépés újra megnyitja.
- **A munka megtalálása.** Szűrje a {{ui:Feladatok}} listát állapot szerint és aszerint, kinek szól, beleértve a {{ui:Lejárt}} feladatokat is. Válassza a {{ui:Felelős}} lehetőséget, majd az {{ui:Asszisztens}} lehetőséget, hogy lássa, mi vár az asszisztensére. A határnapot túllépett feladat figyelmeztetésként jelenik meg a Problémák panelen. A {{ui:CSV}} exportálja a listát. A PDF-be a jelöléssel együtt mentődnek a feladatok, és a Live-on keresztül úgy utaznak, mint a többi jelölési tulajdonság.

### Változások egyszerű listája

- **A változások listázása.** Nyissa meg az {{ui:Összehasonlítás}} lapot, majd a {{ui:Teljes készlet összehasonlítása}} lehetőséget, válassza ki a korábbi és a későbbi fájlt, és válassza a {{ui:A változások listázása}} lehetőséget. A lista egy darabszámmal kezdődik, majd minden változott lapot bemutat, a legnagyobb változással kezdve: hol van a lapon, mekkora (valódi mértékegységben, kalibrált lapon pedig papírbeli hüvelykben (in) is), történt-e vonalhozzáadás vagy -törlés, hány jelölés van ott, és mely szavak jelentek meg vagy tűntek el. A {{ui:A lista másolása}} a vágólapra teszi, a {{ui:CSV}} pedig minden változáshoz egy sort ír. Lásd: [Revíziók közötti változások listázása](topic:what-changed-in-words).

### Hangjegyzetek és döntések

- **Hangjegyzetek.** A {{ui:Jegyzetek}} lapon válassza a {{ui:Hangjegyzet felvétele}} lehetőséget, majd a {{ui:Felvétel leállítása}} lehetőséget; a felvétel két perc után magától leáll. A jegyzet a lap közepére kerül. Húzza a helyére, a feliratot pedig a {{ui:Tulajdonságok}} részben írja be, a listában lévő {{ui:Lejátszás}} gombbal pedig lejátszhatja. A felvétel a PDF-be kerül mentésre.
- **Döntések.** A {{ui:Döntés kitűzése}} egy-két mondatot ír a lapra. Ha egy korábbi döntést vált fel, válassza ki azt az {{ui:Ezt váltja fel}} mezőben: a régi megmarad, Felváltva jelölést kap, és az újra mutat. Egy visszavonási lépés visszaveszi. Lásd: [Hangjegyzetek és döntések kitűzése a lapra](topic:voice-notes-and-decisions).

### Piros javítás a revízióhoz

- **Küldés és válasz.** A {{ui:Feladatok}} lapon nyissa meg a {{ui:Piros javítás a revízióhoz}} lehetőséget, írja be azt a revíziót, amelyhez a jelölések tartoznak, majd válassza a {{ui:Piros javítási fájl exportálása}} lehetőséget. Kap egy `.redline.json` fájlt, amely nyitott jelölésenként egy elemet tartalmaz: lapot, pozíciót (a lap törtrészeiben, így más méretben újranyomtatva is egyezik), szavakat, szerzőt, szálat és a hozzá tartozó feladatot. Aki a változtatásokat rajzolja, a `.redline-answers.json` fájlban válaszol: Elfogadva, Elutasítva vagy Kész. A {{ui:Válaszfájl betöltése…}} minden jelöléshez beállítja ezt az állapotot és a rajzoló megjegyzését, egy visszavonási lépésként. Lásd: [Jelölések küldése a rajzolónak piros javításként](topic:redline-to-revision).

### AI asszisztensek

- **További eszközök.** A CadCraft Studio-n keresztül csatlakoztatott asszisztens listázhatja a feladatokat (`tasks_list`), létrehozhat vagy módosíthat egyet (`task_set`), levehet róla feladatot (`task_clear`), ellenőrizhet egyet egy újabb revízióval vagy elemmel szemben (`tasks_check`), és olvashatja két megnyitott rajzlapkészlet közötti változások egyszerű listáját (`revisions_changes`). Csak azokat az eszközöket kapja meg, amelyeket az Asszisztensek kapcsoló alatt bejelölt, és minden változás egy visszavonási lépés. Lásd: [MarkupCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

## Minden alkalmazásban

- **Nyelvek.** A CadCraft Studio mostantól 54 nyelvet tartalmaz. Tíz új: litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli és üzbég. Az összes nem angol nyelv gépi piszkozat, amíg egy anyanyelvi beszélő el nem olvassa.
- **Beviteli eszközök.** A {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Beviteli eszközök}} alatt megadható, mit tesz az érintőpad, az egér oldalsó gombjai, a toll, az ujjal koppintás, a 3D-egér, a játékvezérlő vagy a MIDI-vezérlő, minden alkalmazásban vagy csak ebben az egyben. Amíg nem változtat semmin, minden eszköz a korábban megszokott módon működik. Lásd: [Érintőpad, 3D-egér vagy vezérlő használata](common:input-devices).
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} alatt a {{ui:Tördelés}} (az alapérték), a {{ui:2 sor}} és az {{ui:1 sor}} közül lehet választani, így a rajz több helyet kap. Lásd: [Panelek elrendezése](common:arrange-panels).
- **Tulajdonságrács.** A jelölés stílusmezői a közös rácsot használják, összecsukható kategóriákkal, címke- és értékoszlopokkal.
- **Problémák panel.** Az alkalmazás figyelmeztetései, például egy lejárt feladat, a Problémák panelen gyűlnek össze.
- **Élő munka és bővítmények.** Az élő munkamenetekről a [Közös munka élőben](common:work-together-live) oldalon olvashat; a fiókjához tartozó bővítménylista a [Bővítmények és a fiók listája](common:addons-basics) oldalon található.
- **AI csatlakoztatása.** A CadCraft Studio a saját asszisztense központja (hub): egyszer csatlakoztassa mind a nyolc alkalmazáshoz. Az alkalmazások nem tartalmaznak saját AI-t.

## A 0.8.1 verzióban javítva

- **A Studio futás közben is tud nyelvet váltani.** Korábban az asztali alkalmazás és a csomagolt kiadások angolul maradtak. Ez még nincs minden platformon tesztelve: jelezze, ha a nyelv nem változik.
- A 0.8-as Studio-telepítések a {{ui:Beállítások}} › {{ui:Frissítések}} menüpontban kapják meg a 0.8.1-et.

## Ebben a verzióban még nincs

- **Nincs kódaláírás.** A Windows-telepítőkön és a macOS .dmg fájlon még nincs aláírás. Windows alatt, ha a SmartScreen leállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Mégis futtatás}} lehetőséget. Mac gépen kattintson jobb gombbal a CadCraft Studio-ra, és válassza az {{ui:Megnyitás}} lehetőséget. Az áruházi kiadások szüneteltetve vannak.
- **Az AI csatlakoztatása több helyen is befejezetlen.** A CadCraft Studio-n belüli egykattintásos csatlakoztatás, a böngészős asszisztensekhez szánt üzemeltetett csatlakozó és a Studio-n belüli saját API-kulcs ebben a kiadásban nincs ígérve. A feladatciklust teszteltük, de még nem valódi asszisztenssel.
- **A feladatellenőrzéshez azonos lapméret kell.** Más méretre újranyomtatott lap nem illeszkedik, ezért a feladatai nem záródnak le. A lapokat lapszám alapján párosítjuk, különben az oldal helye alapján.
- **A hangjegyzetek csak felvételek.** Nincs átirat, és az asszisztens a jegyzet hosszát, szerzőjét és feliratát látja, a hangot nem. A felvételt egy fiktív mikrofonnal, egy fejnélküli böngészőben próbáltuk ki; valódi mikrofonnal telefonon, táblagépen vagy laptopon még ellenőrizni kell.
- **A PDF-ben lévő számítólapok és indoklások** a fájl egy privát bejegyzésében maradnak meg. A régebbi MarkupCraft figyelmen kívül hagyja ezt a bejegyzést, és a következő mentéskor eldobja, ezért az ilyen fájlt 0.8-as vagy újabb verzióval nyissa meg és mentse.
- **A rajzoló oldala a piros javításoknak.** A CadCraft még nem tudja beolvasni és megválaszolni a piros javítási fájlt.
- **Más nyelvek.** A tamil alkalmazássáv 528 px-rel túllóg.

Minden más a [Ami még nincs elkészítve](topic:not-built-yet) oldalon található. Az ezt megelőző kiadásról lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
