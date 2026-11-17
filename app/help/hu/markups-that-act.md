---
title: Jelölés feladattá tétele
summary: Adjon a jelölésnek felelőst (személyt vagy az asszisztensét), határnapot és kapcsolatot a rajzhoz vagy modellelemhez, amelyről szól, és lássa, hogy lezárul, amikor ez valóban változik.
keywords: feladat, feladatok, felelős, asszisztens, határidő, lejárt, hivatkozás, lezárul, változás, elem, rajzterület, működő jelölések, MCP
from: 9e970202
---

A feladat olyan jelölés, amelyet valakinek el kell végeznie. Megtartja a helyét a rajzlapon és a szálát, és hozzáad egy címet, egy felelőst, egy határnapot, egy állapotot és – ha szeretné – egy kapcsolatot ahhoz, amiről szól.

## Feladat készítése

1. Jelöljön ki egy vagy több jelölést.
2. Nyissa meg a {{ui:Feladatok}} lapot, és válassza a {{ui:A kijelölt feladattá tétele}} lehetőséget.
3. Töltse ki a címet (az a jelölés szövegéből indul), hogy kinek szól ({{ui:Személy}} vagy {{ui:Asszisztens}}, és egy név), egy elhagyható határnapot, valamint azt, mire figyeljen.

Az asszisztensi feladat az a munka, amelyet az Önhöz a MarkupCraftban csatlakoztatott asszisztensnek adott (lásd [MarkupCraft használata MI-asszisztenssel](topic:use-with-ai-assistants)). A MarkupCraftban nincs saját asszisztens: csak listázza a munkát, és átveszi az asszisztens válaszait. A {{ui:Felelős}} szerinti szűréshez válassza az {{ui:Asszisztens}} lehetőséget a listában: így látja, mi vár rá.

## Változás figyelése

- **A jelölésen belüli rajz.** A MarkupCraft megtartja a jelölés dobozán belüli vonalakat úgy, ahogy most vannak. Ha a rajzlap újabb revízióját nyitja meg (második fájl ugyanazzal a rajzlapszámmal, vagy ugyanazon az oldalhelyen), válassza az {{ui:Ellenőrzés most}} gombot: ha a vonalak az adott területen egy hajszálnál többel eltérnek, a feladat lezárul.
- **Egy modellelem.** Adja meg az alkalmazást és az elem azonosítóját. Az asszisztens a másik alkalmazás saját eszközeivel olvassa be az elemet, és a `tasks_check` eszközzel jelenti. Az első jelentés lesz a kiindulási állapot; egy később eltérő jelentés lezárja a feladatot. A törölt elem is lezárja.
- **Semmi.** Egyszerű feladat, amelyet kézzel fejez be.

A lezárt feladat jelzése Kész lesz, a jelölése Befejezve állapotba kerül, a szálban pedig egy megjegyzés írja le, mi változott. Egy visszavonási lépés újranyitja.

**Korlát:** az ellenőrzés feltételezi, hogy az újabb revízió ugyanazt az oldalhelyzetet és oldalméretet használja. A más méretre újra kinyomtatott rajz nem fog egyezni, ezért a feladatai nem záródnak le. A rajzlapokat a rajzlapszám, különben az oldalhely alapján párosítja a MarkupCraft; nem méretezi át az egyik revíziót, hogy illeszkedjen a másikhoz.

Az új dátumbélyeggel újra nyomtatott rajz, vagy az 1,5 pontnál kevesebbel elmozdult vonalak nem számítanak változásnak. Ha nincs megnyitva újabb revízió, a feladat nyitott marad, és az állapotsor ezt jelzi.

## A lista

A {{ui:Feladatok}} lista szűrhető állapot és címzett szerint, beleértve a {{ui:Lejárt}} tételeket is. A határidején túli feladat figyelmeztetésként jelenik meg a Problémák panelen. A {{ui:CSV}} gomb exportálja a listát.

A feladatok a jelöléssel együtt mentődnek a PDF-be, és a Live-on keresztül a többi jelölés-tulajdonsággal együtt utaznak.
