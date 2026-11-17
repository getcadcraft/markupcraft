---
title: Jelölések küldése a rajzolónak piros javításként
summary: Írja meg a nyitott jelöléseket piros javítási fájlba a rajzoló számára, majd töltse be a válaszait, hogy minden jelölés Elfogadva vagy Elutasítva állapotot mutasson.
keywords: piros javítás, revízió, rajzoló, elfogadás, elutasítás, válaszok, cc-redline, revíziófelhő, jelölések alkalmazása
from: cb099d04
---

Az átnézés csak fél munka; a rajzot még át kell alakítani. A piros javítási fájl eljuttatja minden nyitott jelölést a rajzolóhoz, a rajzoló válaszai pedig visszahozzák az eredményt.

## Küldés

1. Nyissa meg a {{ui:Feladatok}} lapot, és nyissa meg a {{ui:Piros javítás a revízióhoz}} részt.
2. Írja be azt a revíziót, amelyhez a jelölések tartoznak (például B).
3. Válassza a {{ui:Piros javítási fájl exportálása}} lehetőséget.

Ekkor egy `.redline.json` fájl jön létre, amelyben minden nyitott jelöléshez egy tétel tartozik: a rajzlapja, a helye (a rajzlap törtrészeiben, így más méretben újranyomtatva is pontosan illeszkedik, és pontokban is), a szövege, a szerzője és a szála, valamint a feladata, ha van. A más programoktól származó, csak olvasható megjegyzések, képek és jelmagyarázatok kimaradnak.

## Válaszok

A rajzolói oldal minden tételre Elfogadva, Elutasítva vagy Kész választ ad, megjegyzéssel, egy `.redline-answers.json` fájlban. Válassza a {{ui:Válaszfájl betöltése…}} lehetőséget, és válassza ki a fájlt: minden jelölés megkapja ezt az állapotot és a rajzoló megjegyzését a szálában, az elfogadott vagy kész jelöléshez tartozó feladat pedig befejeződik. Egy visszavonási lépés az összes választ visszavonja.

A fájlformátum leírása a `docs/REDLINE-FORMAT.md` fájlban található. A CadCraft oldal (a csomag beolvasása, minden tétel elfogadása vagy elutasítása, a revíziófelhők és a napló) külön készül.
