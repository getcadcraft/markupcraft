---
title: Szöveg keresése a rajzokon
summary: Keressen szavakat minden rajzlapon, ugorjon minden találathoz, és egy lépésben jelölje be mindet felhővel.
keywords: keresés, keres, szöveg, szó, szavak, ctrl f, megkeres, megjegyzés, kulcsszó, kiemelés, mind felhőbe, találatok kiemelése, ocr, szkennelés, beolvasás, szöveg beolvasása, szöveg kijelölése, szöveg másolása, tesseract
from: 3435c9eb
---

A {{ui:Find text}} a {{ui:Sheets}} panel tetején a rajzlapokon látható szavakat keresi. A {{ui:Search sheets}} alatta csak a rajzlapok neveiben keres.

## Keresés

1. Nyomja meg a {{key:Mod+F}} billentyűt, vagy nyissa meg a {{ui:Find text}} lehetőséget.
2. Írja be a szavakat, például `hood` vagy `verify in field`.
3. Válassza az {{ui:All sheets}} vagy az {{ui:This sheet}} lehetőséget, és ha szükséges, jelölje be a {{ui:Match case}} vagy az {{ui:Whole words}} lehetőséget.
4. Nyomja meg az {{key:Enter}} billentyűt, vagy válassza a {{ui:Find}} lehetőséget.

Eredmény: minden találat listába kerül a rajzlapszámával és a körülötte lévő szavakkal, és sárgával jelölődik a rajzlapján. Válasszon ki egy találatot, hogy megnyissa a rajzlapját, és ráközelítsen.

Egy kifejezést akkor is megtalál, ha a rajz két szövegdarabra vagy két sorra bontja.

## Minden találat felhőzése

Válassza a {{ui:Cloud all}} lehetőséget. Revíziófelhő vesz körül minden találatot a listában, minden rajzlapon, megjegyzésként ezzel a szöveggel: „Talált: <a keresett szavak>”. Egyetlen {{key:Mod+Z}} mindet eltávolítja.

## Szöveg beolvasása szkennelt rajzról (OCR)

A szkennelt rajzlap csak kép: amíg nincs beolvasva a szövege, nincs mit megtalálni. Ha a számláló azt jelzi, hogy a rajzlapoknak nincs szövegük, válassza a {{ui:Read text (OCR)…}} lehetőséget a számláló alatt, vagy az {{ui:Pages}} › {{ui:Read text (OCR)…}} lehetőséget.

1. Válassza ki az oldalakat: ez a rajzlap, a fájl minden oldala, vagy a megnyitott fájlok minden oldala.
2. Válassza ki a szöveg nyelvét. Az {{ui:Also English}} az angol szavakat is beolvassa.
3. Válassza a {{ui:Read text}} lehetőséget. Egy sáv mutatja az éppen beolvasott oldalt; a {{ui:Stop}} leállítja a futást, és megtartja a már beolvasott oldalakat.

Eredmény: a szavak megtalálhatók, kijelölhetők és másolhatók, mint bármely más szöveg. Mindez a számítógépen fut: semmi nem kerül sehová. Kapcsolat nélkül működik a Studio-ban, a böngészőben pedig akkor, ha az alkalmazás offline mentésre került (angol és a felület nyelve), vagy ha egy nyelvet már egyszer használtak. A már szöveget tartalmazó oldalak változatlanok maradnak.

Mentéskor a szavak a jelöléseitől függetlenül, a kép mögött láthatatlan szövegként kerülnek a PDF-be, így más PDF-programok is kereshetik és másolhatják őket. Mentésig a fájl mentetlenként jelenik meg.

## Szöveg kijelölése és másolása

Válassza a {{ui:More}} › {{ui:Select text to copy}} lehetőséget. Húzzon egyik szótól a másikig, hogy kijelölje a köztük lévő szavakat; húzzon egy üres területről egy dobozon át, hogy kijelölje a dobozban lévő szavakat; vagy kattintson duplán egy szóra. A {{key:Mod+A}} kijelöli az összes szót a rajzlapon. A {{key:Mod+C}} másolja őket, megtartva a sorokat. Bármely más eszköz befejezi.

## Jó tudni

- Azok a rajzok sem tartalmaznak szöveget, amelyeknek a betűi vonalakból vannak rajzolva; képként való beolvasás a nyomtatott szövegen működik a legjobban, például beszkennelt könyvön vagy műszaki leíráson.
- Az olvasó a Tesseract, amely az alkalmazásba van építve, az angol és az alkalmazás nyelveinek adataival együtt. Az első futtatáskor betöltődik (kb. 6 MB, egy második nyelv esetén több).
- A beolvasás minősége a szkenneléstől függ: a tiszta, 300 dpi-s oldalak szinte szóról szóra olvasódnak be; a régi, halvány vagy alacsony felbontású szkenneléseknél több szó marad ki.
- A lista az első 500 találatot mutatja; a {{ui:Cloud all}} legfeljebb 2 000-et fed be felhővel.
- A találatok a készlet bezárásakor törlődnek, egy fájl esetén pedig akkor, amikor az oldalait módosítják.
