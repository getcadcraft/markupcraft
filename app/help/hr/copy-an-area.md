---
title: Kopirajte područje stranice ili overlay
summary: Kopirajte dio lista pravokutnikom, elipsom ili slobodnim oblikom i zalijepite ga na drugi list, u programe CadCraft, BimCraft, DetailCraft ili bilo koji drugi, u njegovoj veličini; kopirajte ga kao prozirni overlay i poravnajte sliku po dvije točke.
keywords: kopiraj područje, područje, izreži, isječak, snimka, međuspremnik, regija, pravokutnik, elipsa, kružnica, slobodni oblik, laso, slika, png, overlay, prozirno, providnost, nijansa, neprozirnost, zalijepi, stvarna veličina, mjerilo, poravnaj, dvije točke, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Odaberite {{ui:Više}} › {{ui:Kopiraj područje stranice…}}. Iznad lista otvara se traka.

## Odaberite područje

U traci odaberite {{ui:Pravokutnik}}, {{ui:Elipsa}} ili {{ui:Slobodni oblik}}, zatim povucite po listu:

- **Pravokutnik:** povucite okvir oko dijela koji kopirate.
- **Elipsa:** povucite okvir; elipsa unutar njega se kopira, a kutovi izvan nje su prozirni.
- **Slobodni oblik:** nacrtajte oko dijela koji kopirate; oblik se sam zatvara. Izvan njega je prozirno.

Povucite opet da počnete ispočetka ili pritisnite {{key:Esc}}.

## Kopiraj

- {{ui:Uključi oznake}} kopira vaše oznake sa stranicom; isključite za čist crtež.
- {{ui:Razlučivost}}: {{ui:Kao na zaslonu}}, 72, 150 ili 300 dpi. Slika ostaje ispod 3 MB; kad bi veliko područje pri visokoj razlučivosti to premašilo, razlučivost se snižava i statusna linija kaže na koju.
- {{ui:Kopiraj}} (ili {{key:Mod+C}} ili {{key:Enter}}) stavlja područje u međuspremnik kao PNG sliku, koja se lijepi u Word, e-poštu, druge PDF programe i programe za crtanje.
- {{ui:Spremi kao PNG}} umjesto toga preuzima sliku, za program koji pri lijepljenju izgubi prozirne dijelove.

## Kopiraj kao overlay

{{ui:Kopiraj kao overlay}} također čini bijeli papir prozirnim, pa ostaju samo linije. {{ui:Boja}} daje svakoj liniji jednu boju (crvenu, plavu, zelenu, narančastu ili ljubičastu) da se overlay istakne od crteža ispod; {{ui:Vlastite boje}} ih zadržava. {{ui:Jačina}} je koliko je jak kad se zalijepi u našim aplikacijama (50% osim ako ne promijenite).

## Zalijepite

**U programu MarkupCraft** {{key:Mod+V}} na bilo kojem listu lijepi područje kao oznaku slike na pokazivaču. Ulazi u svojoj veličini:

- na papiru, u istoj veličini koju je imalo na listu iz kojeg dolazi;
- kad oba lista imaju mjerilo, u istoj veličini u crtežu: područje s lista 1:50 ulazi na pola veličine papira na listu 1:100.

Overlay počinje sa svojom jačinom; promijenite je s {{ui:Neprozirnost}} u {{ui:Svojstva}}. Pomičite, mijenjajte veličinu, zaključavajte i brišite ga kao svaku sliku, a označite {{ui:Spljošti u stranicu pri spremanju}} da ga nacrtate u stranicu.

**U programima CadCraft, BimCraft i DetailCraft** kopija također zna svoju veličinu, pa lijepljenje ulazi u stvarnoj veličini crteža kad je list imao mjerilo, ili traži jedno kad nije. Pogledajte pomoć svake aplikacije o slikama.

## Poravnajte sliku po dvije točke

Odaberite jednu sliku ili overlay, zatim odaberite {{ui:Više}} › {{ui:Poravnaj sliku s dvije točke}}:

1. Kliknite točku na slici.
2. Kliknite gdje ta točka ide.
3. Kliknite drugu točku na slici, daleko od prve.
4. Kliknite gdje ta točka ide.

Slika se skalira, pomiče i zakreće tako da obje točke padnu tamo gdje ste kliknuli. {{key:Esc}} zaustavlja; {{key:Mod+Z}} poništava u jednom koraku.

## Dobro je znati

- Veličina putuje s kopijom samo među našim aplikacijama na istoj web-stranici i samo za kopiju napravljenu u zadnjih nekoliko sati; drugi program dobiva običnu sliku.
- Ako preglednik ne dopušta programu MarkupCraft da koristi sistemski međuspremnik, statusna linija to kaže: lijepljenje u našim aplikacijama i dalje radi, a {{ui:Spremi kao PNG}} radi za druge programe.
- Poravnavanje okreće sliku ponovnim crtanjem njezinih piksela, pa je okrenuta slika malo mekša od izvornika.
