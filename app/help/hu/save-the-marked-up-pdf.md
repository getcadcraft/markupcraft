---
title: A jelölt PDF mentése
summary: Töltsön le egy példányt, amelyben minden jelölés szabványos PDF-megjegyzésként szerepel, nézze meg, mit látnak a többi PDF-olvasó, és később folytassa a munkát.
keywords: mentés, letöltés, pdf exportálása, jelölt, jegyzetek, megjegyzések, megosztás, küldés, probléma, munka folytatása, újranyitás, oda-vissza, nyomtatás
from: 4c198ebe
---

## Mentés

1. Válassza az eszköztárban a {{ui:Mentés}} parancsot, vagy nyomja meg a {{key:Mod+S}} billentyűkombinációt.
2. Ha több fájl van megnyitva, válassza az {{ui:Ez a fájl}} lehetőséget (az a fájl, amelyhez a jelenlegi rajzlap tartozik), vagy a {{ui:Minden módosított fájl}} lehetőséget. Minden példány külön töltődik le.
3. Várja meg, amíg a „<file> mentése…” művelet befejeződik. A munkamenet első mentésekor a PDF-író is betöltődik.

Eredmény: a böngésző letölti a „<name> (marked up).pdf” fájlt, az állapotsor pedig ezt jelzi: „A(z) A-Plans (marked up).pdf mentve (24 jelölés, 18.2 MB). Az eredeti fájl nem változott.” A {{ui:Mentés}} mellett lévő pont eltűnik.

**Az eredeti PDF soha nem változik.** A MarkupCraft új fájlt készít. Hogy hová kerül, az a böngésző letöltési beállításaitól függ (lásd: [A MarkupCraft által megnyitott és mentett fájlok](topic:files#where-downloads-go)).

## Munka folytatása később

Legközelebb a „(marked up)” példányt nyissa meg, ne az eredetit. Minden szerkeszthető állapotba tér vissza: a jelölések, állapotok, válaszok, hibalista-tételek, minden rajzlap méretaránya és a beírt rajzlapnevek. A fájl újbóli mentése ugyanilyen nevű, „(marked up)” fájlt tölt le; ha a régi letöltés még a mappában van, a böngésző számot is fűzhet hozzá, például „(1)”. A régi példányokat kézzel cserélje le vagy rendezze el.

A MarkupCraft nem menti magától a PDF-et. Munka közben a böngészőben tart egy helyreállítási másolatot, így egy összeomlás vagy bezárt lap nem veszti el a jelöléseket: a MarkupCraft következő megnyitásakor megkérdezi: „Helyreállítja a munkát?”. Lásd: [Munka helyreállítása](common:recover). A bezárás előtt mindenképpen mentsen; ha mentetlen jelölésekkel próbál elhagyni az oldalt, a böngésző előbb megkérdezi: „Elhagyja a webhelyet?” (az iPad Safari nem).

## Mit látnak a többi PDF-olvasóban

Minden jelölés szabványos PDF-megjegyzésként (annotációként), saját rajzával készül, így bármely PDF-megjelenítő megjeleníti, kinyomtatja, és felsorolja a megjegyzés-panelében:

- **A megjelenés ugyanaz**, mint a MarkupCraftban: a revíziófelhők ívelt szegélyükkel, a nyílhegyek, bélyegzők, darabszám-pontok, hibalista-számjelvények és mérési feliratok.
- **A részletek szabványosak:** szerző, dátum, tárgy, a megjegyzés szövege és a színek.
- **A revíziófelhők** téglalap vagy sokszög alakú megjegyzések, felhős szegéllyel; a **szövegdobozok** és a **kiemelések (callout)** szövegdoboz-megjegyzések; a **megjegyzések** ragadós jegyzetek; a **toll** és a **kiemelő** vonalai tintás megjegyzések; a **bélyegzők** bélyegző-megjegyzések.
- **A hosszak és területek** mérési megjegyzések, és minden kalibrált rajzlap hordozza a méretarányát, így a mérést értő megjelenítők meg tudják mutatni az értékeket.
- **A válaszok** a megjegyzésre adott válaszok, az **állapotok** pedig felülvizsgálati állapotok (a Nyitott nem jelenik meg állapotként).
- **A beírt rajzlapszámok** lesznek azok az oldalcímkék, amelyeket más megjelenítők mutatnak.

Csak a MarkupCraft olvassa vissza a hibalista-tétel felelősét és határidejét, a tétel állapotát és néhány stílusbeállítást. Más programok ezeket megtartják, hacsak át nem írják a megjegyzést.

Egy másik programban a megjegyzések úgy mozgathatók vagy szerkeszthetők, mint bármikor. Ha valaki ezt megteszi, és visszaküldi a fájlt, a MarkupCraft a megnyitáskor a megjegyzés új helyzetét veszi figyelembe.

Teljes leírás: [Mi kerül a PDF-be](topic:what-the-pdf-keeps).

## Karakterek, amelyek „?”-ként nyomtatódnak

A jelölésszöveg a szabványos Helvetica betűkészlettel íródik, amelyet minden PDF-megjelenítő ismer. Ez lefedi az angol és a nyugat-európai betűket (é, ñ, ü, ø és hasonlók), de nem a más írásrendszereket, a készlettől eltérő jeleket és az emodzsikat. Ezek a MarkupCraftban rendben látszanak, a mentett példányban viszont „?”-ként nyomtatódnak, a mentési üzenet pedig megszámolja őket: „3 karakter a nyugat-európai készleten kívül esik, és a példányban ?-ként nyomtatódik.” Írja ki az ilyen szavakat, vagy használjon egyszerű helyettesítést (például „átm.” az átmérőjel helyett).

## Mentésre nem alkalmas fájlok

- **Védett PDF-ek:** „Ez a PDF védett (titkosított), ezért jelölt másolat nem írható. Kérjen védelem nélküli példányt.” A képernyőn továbbra is át lehet nézni, a CSV és a BCF exportálható.
- Ha a mentés más okból nem sikerül, a „Nem sikerült menteni: <file>” feliratú doboz megmutatja az okot. A jelölések továbbra is a lapon vannak; semmi sem vész el, amíg a lapot be nem zárja.

## Laposítás és nyomtatás

Egyelőre nincs laposítás (a jelölések az oldalba égetése) és nincs nyomtatási parancs. Nyomtatáshoz nyissa meg a mentett példányt bármely PDF-megjelenítőben, és a megjegyzések megjelenítésével nyomtasson.
