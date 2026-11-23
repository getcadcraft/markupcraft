---
title: BCF alapok
summary: Mit tartalmaz a MarkupCraft BCF-exportja, hogyan használható BIM-koordinációs eszközökkel, és melyek a korlátai.
keywords: bcf, bcfzip, bim együttműködési formátum, problémák, koordináció, ütközés, témakörök, nézetpont, pillanatkép, openbim, buildingsmart, problémák exportálása
from: 0de26175
---

A BCF (BIM Collaboration Format) nyílt fájlformátum, amellyel problémák adhatók át BIM-eszközök között. Sok modellkoordinációs és tervezőprogram tud `.bcfzip` fájlt problémák listájaként importálni. A MarkupCraft **BCF 2.1** formátumot ír.

## Készítés

1. Nyissa meg a {{ui:Jelölések}} lapot.
2. Szűrje a listát a küldeni kívánt elemekre, például {{ui:Állapot}} „Nyitott”. Csak a listázott jelölések kerülnek exportálásra.
3. Válassza a {{ui:BCF}} lehetőséget.
4. Várjon, amíg minden jelölésről pillanatkép készül („Pillanatképek készítése a BCF-hez (5 / 20)…”).

Eredmény: a "<name> markups.bcfzip" fájl letöltődik, az állapotsor pedig megmutatja, hány témakört tartalmaz, és mekkora a fájl.

## Mi van benne

Minden jelölés egy **témakört** alkot:

| Témakör mező | Ennek a tartalma |
|---|---|
| Cím | Hibaszám, tárgy és rajzlap, például "#4 Felhő az A-101 lapon — Alaprajz" |
| Típus | A jelölés típusa (Felhő, Kiemelés, Hossz…) |
| Állapot | Nyitott, Elfogadott, Elutasított vagy Befejezett |
| Címkék | A jelölés típusa és a rajzlap |
| Szerző és dátumok | A jelölés szerzője, a létrehozás és a módosítás dátuma |
| Felelős, határidő | A hibalista tételéből, ha van ilyen |
| Leírás | A jelölés szövege vagy bélyegzőszövege, mért értéke, megjegyzése, valamint a rajzlap és a fájl |
| Megjegyzések | Válaszonként egy, a szerzővel és a dátummal |
| Pillanatkép | A jelölés képe a rajzlap megfelelő részén |
| Nézetpont | A jelölés helyének felülnézete a rajzlapon |

Ugyanazt a jelölést újra exportálva ugyanaz a témakörazonosító keletkezik, így a BCF-et importáló eszköz felismeri, hogy ugyanarról a problémáról van szó.

## Mit kapunk vissza importáláskor

A {{ui:BCF importálása}} a BCF 2.0, 2.1 és 3.0 fájlokat olvassa (a 19 hivatalos buildingSMART 3.0 tesztfájlon ellenőrizve: minden témakört beolvas, és a három szöveges megjegyzéssel rendelkező fájl megjegyzéseit is). Ha a témakör a saját jelölései közül való (ugyanaz a témakörazonosító), az új megjegyzéseket válaszként adja hozzá, és átveszi az új állapotot. Minden más témakörből jegyzet lesz a rajzlapon, amelyet a címke vagy a fájlnév nevez meg, különben a megnyitott rajzlapon. A jegyzet szövege a témakör címe, leírása, felelőse és határideje, a megjegyzései pedig válaszok lesznek.

| A BCF-témakörben | A MarkupCraftban |
|---|---|
| Cím, leírás, felelős, határidő | A jegyzet szövege |
| Szöveges megjegyzések | Válaszok |
| Állapot Open, Accepted, Rejected, Completed (a Closed, Resolved és Done is Completed-nek számít) | A jelölés állapota |
| Szerző és létrehozási dátum | A jegyzet szerzője és dátuma |
| Kameraállás | Hely a rajzlapon, csak a címkével vagy fájlnévvel rajzlaphoz kötött témakörnél |
| Modellkijelölés, rejtett részek, metszősíkok, pillanatképek | Nem őrződik meg: a rajzlapnak nincs modellje, amelyben ezek megjeleníthetők volnának |

## Tudnivalók a korlátokról

- **A rajzlap nem modell.** A nézetpont a jelölés helyére mutat a papíron, papíron mért méterben. Nem viszi a BIM-eszközt a modell egy helyére. A pillanatkép és a rajzlap neve segít megtalálni a helyet.
- **Az állapotok és típusok a MarkupCraft saját elemei** (Nyitott, Elfogadott, Elutasított, Befejezett; Felhő, Kiemelés…). A fájl deklarálja őket, ahogy a BCF engedi, de a saját, fix listákkal dolgozó eszköz átképezheti vagy figyelmen kívül hagyhatja őket.
- **Az importálás megjegyzéseket hoz, nem modellnézeteket.** A {{ui:BCF importálása}} válaszokat és állapotokat ad a exportált jelölésekhez, más problémákból pedig jegyzetet készít; modellkamerát nem tud megjeleníteni. Lásd: [Jelölések listája és exportálás](topic:markups-list-and-export#import-bcf).
- Rajzfelülvizsgálatnál a jelölések PDF-ben való visszaküldése gyakran egyszerűbb. A BCF arra való, hogy a rajzra írt megjegyzések bekerüljenek a modellkoordinációs munkafolyamatba.
