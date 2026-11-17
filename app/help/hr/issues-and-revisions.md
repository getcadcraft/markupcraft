---
title: Izdanja, revizije i dnevnik promjena crteža
summary: Vodite jednu povijest izdanja s modelom arhitekta: čitajte izdanja, bilježite upute za gradilište, radioničke crteže i povezane modele uz izdanje te čitajte dnevnik promjena crteža.
keywords: izdanje, revizija, revizije, dnevnik promjena, dnevnik promjena crteža, registar crteža, uputa za gradilište, radionički crtež, povezani model, natječaj, gradnja, povijest izdanja, revizijski oblak, oblak, skup oznaka
from: e4688f64
---

## Što ćete raditi

Radite iz iste povijesti izdanja kao i ostatak tima. Pogledajte koji su listovi izašli u kojoj reviziji i vodite što se događa na gradilištu uz izdanje kojem to pripada.

## Koraci

1. Otvorite **Izdanja i revizije**.
2. Odaberite **Pročitaj povijest izdanja** i odaberite datoteku `.issues.json` spremljenu iz programa BimCraft ili druge aplikacije. Njezina izdanja i zapisi dodaju se vašima. Ništa se ne zamjenjuje.
3. Odaberite **Dodaj zapis** za uputu za gradilište, radionički crtež, skup oznaka, povezani model ili bilješku. Odaberite izdanje uz koje ide i njegov status. Odabrana datoteka bilježi se prema nazivu, veličini i SHA-256; datoteka ostaje na svom mjestu.
4. **Dnevnik promjena crteža** prikazuje jedan redak za svaki list i jedan stupac za svako izdanje. Revizija u zagradama ponovno je izdana bez promjena.
5. **Preuzmi dnevnik promjena (CSV)** sprema izdanja, tablicu listova i zapise. **Spremi povijest izdanja** zapisuje datoteku koju čitaju druge aplikacije.

## Dobro je znati

- **Zabilježi odabrane oznake** stavlja odabrane oznake uz najnovije izdanje. Oblak se bilježi kao revizijski oblak s revizijom tog izdanja. Odaberite **Prikaži** uz zapis da skočite na njega.
- **Zabilježi izdanje** izdaje vaše označene listove. **Promjene od tada** zatim govori koji su listovi označeni nakon tog izdanja.
- Povijest se sprema unutar označenog PDF-a. Nije dio poništavanja.
- Čitanje iste datoteke dvaput ništa ne dodaje dvaput. Kada dvije kopije sadrže isti zapis, zadržava se noviji.
