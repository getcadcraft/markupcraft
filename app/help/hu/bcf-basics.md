---
title: BCF-alapok
summary: Mit tartalmaz a MarkupCraft BCF-exportja, hogyan használható BIM-koordinációs eszközökkel, és mik a korlátai.
keywords: bcf, bcfzip, BIM-együttműködési formátum, problémák, koordináció, ütközés, témakörök, nézetpont, pillanatkép, openbim, buildingsmart, problémák exportálása
from: 446f38c1
---

A BCF (BIM Collaboration Format) nyílt fájlformátum, amellyel problémák adhatók át BIM-eszközök között. Sok modellkoordinációs és modellező program a `.bcfzip` fájlt problémák listájaként tudja importálni. A MarkupCraft **BCF 2.1** verziót ír.

## Készítés

1. Nyissa meg a {{ui:Jelölések}} lapot.
2. Szűrje a listát a kívánt elemekre, például {{ui:Állapot}} „Nyitott”. Csak a listában szereplő jelölések exportálódnak.
3. Válassza a {{ui:BCF}} lehetőséget.
4. Várjon, amíg minden jelölésről pillanatkép készül („Pillanatképek készítése a BCF-hez (5 / 20)…”).

Eredmény: a „<name> markups.bcfzip” fájl letöltődik, az állapotsor pedig megmutatja, hány témakört tartalmaz, és mekkora a fájl.

## Mi van benne

Minden jelölésből egy **témakör** lesz:

| Témakörmező | Kitöltése |
|---|---|
| Cím | Hibalista-szám, tárgy és lap, például „#4 Felhő, A-101 — Alaprajz” |
| Típus | A jelölés típusa (Felhő, Kiemelés, Hossz…) |
| Állapot | Nyitott, Elfogadva, Elutasítva vagy Befejezve |
| Címkék | A jelölés típusa és a lap |
| Szerző és dátumok | A jelölés szerzője, a létrehozás és a módosítás dátuma |
| Hozzárendelve, határidő | A hibalista-tételből, ha van ilyen |
| Leírás | A szöveg vagy a bélyegző szövege, a mért érték, a megjegyzés, valamint a lap és a fájl |
| Megjegyzések | Válaszonként egy, szerzővel és dátummal |
| Pillanatkép | A jelölésről készült kép a lap adott részén |
| Nézetpont | A jelölés helyének felülnézeti képe a lapon |

Ha ugyanazt a jelölést újra exportálja, ugyanaz lesz a témakör-azonosítója, így a BCF-et importáló eszköz felismeri, hogy ugyanarról a problémáról van szó.

## Ismert korlátok

- **A lap nem modell.** A nézetpont a jelölés helyét mutatja a papíron, a papíron mért méterekben. Nem vezet el a BIM-eszközzel a modell egy helyére. A pillanatkép és a lap neve segítségével találja meg a helyet.
- **Az állapotok és típusok a MarkupCraft saját elemei** (Nyitott, Elfogadva, Elutasítva, Befejezve; Felhő, Kiemelés…). A fájl a BCF által engedett módon tartalmazza őket, de a saját rögzített listákkal rendelkező eszköz átfeleltetheti vagy figyelmen kívül hagyhatja őket.
- **Az importálás megjegyzéseket hoz, nem modellnézeteket.** A {{ui:BCF importálása}} a kiexportált jelölésekhez válaszokat és állapotokat ad, más problémákból pedig jegyzeteket készít; modellkamerát nem tud megjeleníteni. Lásd: [A jelölések listája és exportja](topic:markups-list-and-export#import-bcf).
- A rajzok átnézéséhez gyakran egyszerűbb a jelöléseket PDF-ben visszaküldeni. A BCF arra való, hogy a rajzra vonatkozó megjegyzések bekerüljenek a modellkoordinációs munkafolyamatba.
