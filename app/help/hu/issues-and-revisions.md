---
title: Kiadások, revíziók és a rajz változásnaplója
summary: Tartson fenn egy kiadástörténetet az építész modelljével: olvassa be a kiadásokat, rögzítsen helyszíni utasításokat, műhelyrajzokat és csatolt modelleket egy kiadáshoz, és olvassa a rajz változásnaplóját.
keywords: kiadás, revízió, revíziók, változásnapló, rajz változásnapló, rajznyilvántartás, helyszíni utasítás, műhelyrajz, csatolt modell, ajánlati felhívás, kivitelezés, kiadástörténet, revíziófelhő, felhő, jelölési készlet
from: e4688f64
---

## Mit tehet

Dolgozzon a csapat többi tagjával azonos kiadástörténetből. Lássa, mely rajzlapok melyik revízióval kerültek ki, a helyszíni történéseket pedig tartsa nyilván a hozzájuk tartozó kiadáshoz.

## Lépések

1. Nyissa meg a **Kiadások és revíziók** részt.
2. Válassza a **Kiadástörténet beolvasása** lehetőséget, és válassza ki a BimCraft vagy más alkalmazás által mentett `.issues.json` fájlt. A kiadásai és bejegyzései a meglévők mellé kerülnek. Semmi nem íródik felül.
3. Válassza a **Bejegyzés hozzáadása** lehetőséget egy helyszíni utasításhoz, műhelyrajzhoz, jelölési készlethez, csatolt modellhez vagy megjegyzéshez. Válassza ki a hozzá tartozó kiadást és annak állapotát. A kiválasztott fájl a neve, mérete és SHA-256 értéke alapján rögzül; maga a fájl a helyén marad.
4. A **Rajz változásnaplója** soronként egy rajzlapot, oszloponként egy kiadást mutat. A zárójelben lévő revízió azt jelzi, hogy változtatás nélkül újra ki lett adva.
5. A **Változásnapló letöltése (CSV)** a kiadásokat, a rajzlaptáblázatot és a bejegyzéseket menti. A **Kiadástörténet mentése** olyan fájlt ír, amelyet a többi alkalmazás is olvas.

## Jó tudni

- A **Kijelölt jelölések rögzítése** a kijelölt jelöléseket a legutóbbi kiadáshoz rendeli. A felhő revíziófelhőként kerül rögzítésre annak a kiadásnak a revíziójával. A bejegyzés melletti **Megjelenítés** gombbal oda lehet ugrani.
- A **Kiadás rögzítése** kiadja a jelölt rajzlapokat. A **Változások azóta** pedig megmutatja, mely rajzlapokat jelölték meg az adott kiadás után.
- A történet a jelölt PDF-be mentődik. Nem része a visszavonásnak.
- Ugyanazt a fájlt kétszer beolvasva semmi nem adódik hozzá kétszer. Ha két példány ugyanazt a bejegyzést tartalmazza, az újabb marad meg.
