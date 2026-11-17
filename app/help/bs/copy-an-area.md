---
title: Kopiraj dio stranice ili preklop
summary: Kopiraj dio lista pravougaonikom, elipsom ili slobodnim oblikom i zalijepi ga u drugi list, CadCraft, BimCraft, DetailCraft ili bilo koji program, u njegovoj veličini; kopiraj ga kao providan preklop i poravnaj sliku s dvije tačke.
keywords: kopiraj područje, područje, obrezivanje, isječak, snimak, region, pravougaonik, elipsa, krug, slobodno, lasso, slika, picture, png, preklop, providno, prozirno, nijansa, neprozirnost, zalijepi, stvarna veličina, razmjera, poravnaj, dvije tačke, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Izaberi {{ui:Više}} › {{ui:Kopiraj dio stranice…}}. Na listu se otvara traka.

## Odaberi područje

U traci izaberi {{ui:Pravougaonik}}, {{ui:Elipsa}} ili {{ui:Slobodno}}, zatim prevuci po listu:

- **Pravougaonik:** prevuci okvir oko dijela koji kopiraš.
- **Elipsa:** prevuci okvir; elipsa unutar njega se kopira, a uglovi van nje su providni.
- **Slobodno:** nacrtaj oko dijela koji kopiraš; oblik se sam zatvara. Van njega je providno.

Prevuci ponovo da počneš ispočetka, ili pritisni {{key:Esc}}.

## Kopiraj

- {{ui:Uključi oznake}} kopira tvoje oznake sa stranicom; isključi ga za čist crtež.
- {{ui:Rezolucija}}: {{ui:Kao na ekranu}}, 72, 150 ili 300 dpi. Slika ostaje ispod 3 MB; kad bi velika površina u visokoj rezoluciji to premašila, rezolucija se smanjuje i statusna linija kaže na koju.
- {{ui:Kopiraj}} (ili {{key:Mod+C}} ili {{key:Enter}}) stavlja područje u međuspremnik kao PNG sliku, koja se lijepi u Word, e-poštu, druge PDF programe i programe za crtanje.
- {{ui:Spasi kao PNG}} umjesto toga preuzima sliku, za program koji pri lijepljenju izgubi providne dijelove.

## Kopiraj kao preklop

{{ui:Kopiraj kao preklop}} također čini bijeli papir providnim, pa ostanu samo linije. {{ui:Boja}} daje svakoj liniji jednu boju (crvena, plava, zelena, narandžasta ili ljubičasta) da se preklop izdvoji od crteža ispod; {{ui:Vlastite boje}} ih zadržava. {{ui:Jačina}} je koliko je jak kad se zalijepi u našim aplikacijama (50% dok ga ne promijeniš).

## Zalijepi ga

**U aplikaciji MarkupCraft**, {{key:Mod+V}} na bilo kojem listu lijepi područje kao sliku-oznaku na pokazivaču. Dolazi u svojoj veličini:

- na papiru, u istoj veličini koju je imalo na listu iz kojeg dolazi;
- kad oba lista imaju razmjeru, u istoj veličini u crtežu: područje s lista 1:50 dolazi na pola veličine papira na listu 1:100.

Preklop počinje sa svojom jačinom; promijeni je s {{ui:Neprozirnost}} u {{ui:Svojstva}}. Pomjeraj, mijenjaj veličinu, zaključaj i briši ga kao svaku sliku, a označi {{ui:Spljošti na stranicu pri spašavanju}} da ga nacrta u stranicu.

**U aplikacijama CadCraft, BimCraft i DetailCraft** kopija također zna svoju veličinu, pa lijepljenje dolazi u stvarnoj veličini crteža kad je list imao razmjeru, ili traži jednu kad nije. Pogledaj pomoć svake aplikacije o slikama.

## Poravnaj sliku sa dvije tačke

Izaberi jednu sliku ili preklop, zatim izaberi {{ui:Više}} › {{ui:Poravnaj sliku sa dvije tačke}}:

1. Klikni tačku na slici.
2. Klikni gdje ta tačka ide.
3. Klikni drugu tačku na slici, daleko od prve.
4. Klikni gdje ta tačka ide.

Slika se skalira, pomjera i okreće tako da obje tačke padnu tamo gdje si kliknuo. {{key:Esc}} zaustavlja; {{key:Mod+Z}} poništava u jednom koraku.

## Dobro je znati

- Veličina putuje s kopijom samo između naših aplikacija na istom sajtu, i samo za kopiju napravljenu u zadnjih nekoliko sati; drugi program dobija običnu sliku.
- Ako preglednik ne dozvoljava MarkupCraft-u da koristi sistemski međuspremnik, statusna linija to kaže: lijepljenje u našim aplikacijama i dalje radi, a {{ui:Spasi kao PNG}} radi za druge programe.
- Poravnanje okreće sliku tako što ponovo crta njene piksele, pa je okrenuta slika malo mekša od originala.
