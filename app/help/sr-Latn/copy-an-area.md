---
title: Kopirajte oblast strane ili preklop
summary: Kopirajte deo lista pravougaonikom, elipsom ili slobodnom formom i nalepite ga u drugi list, CadCraft, BimCraft, DetailCraft ili bilo koji program, u njegovoj veličini; kopirajte ga kao providan preklop i poravnajte sliku po dve tačke.
keywords: kopiraj oblast, oblast, isecanje, isečak, snimak, klip, region, pravougaonik, elipsa, krug, slobodna forma, lasso, slika, png, preklop, providno, nijansa, neprovidnost, nalepi, prava veličina, razmera, poravnaj, dve tačke, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Izaberite {{ui:More}} › {{ui:Copy an area of the page…}}. Traka se otvara preko lista.

## Izaberite oblast

Izaberite {{ui:Rectangle}}, {{ui:Ellipse}} ili {{ui:Freeform}} na traci, zatim prevucite po listu:

- **Pravougaonik:** prevucite okvir oko dela koji kopirate.
- **Elipsa:** prevucite okvir; elipsa unutar njega se kopira, a uglovi van nje su providni.
- **Slobodna forma:** nacrtajte oko dela koji kopirate; oblik se sam zatvara. Van njega je providno.

Prevucite ponovo da počnete iznova, ili pritisnite {{key:Esc}}.

## Kopiranje

- {{ui:Include markups}} kopira vaša označavanja zajedno sa stranicom; isključite to za čist crtež.
- {{ui:Resolution}}: {{ui:As on screen}}, 72, 150 ili 300 dpi. Slika ostaje ispod 3 MB; kad bi velika oblast pri visokoj rezoluciji to premašila, rezolucija se snižava, a statusni red kaže na koju.
- {{ui:Copy}} (ili {{key:Mod+C}} ili {{key:Enter}}) stavlja oblast na privremenu memoriju kao PNG sliku, koja se lepi u Word, e-poštu, druge PDF programe i programe za crtanje.
- {{ui:Save as PNG}} umesto toga preuzima sliku, za program koji pri nalepljivanju izgubi providne delove.

## Kopirajte kao preklop

{{ui:Copy as overlay}} takođe čini belu podlogu papira providnom, pa ostaju samo linije. {{ui:Colour}} daje svakoj liniji jednu boju (crvenu, plavu, zelenu, narandžastu ili ljubičastu) da se preklop izdvoji od crteža ispod; {{ui:Own colours}} zadržava njihove boje. {{ui:Strength}} je koliko je jak kad se nalepi u našim aplikacijama (50% ako ga ne promenite).

## Nalepite

**U aplikaciji MarkupCraft**, {{key:Mod+V}} na bilo kom listu lepi oblast kao sliku označavanja na mestu pokazivača. Ulazi u svojoj veličini:

- na papiru, u istoj veličini koju je imala na listu sa kog potiče;
- kad oba lista imaju razmeru, u istoj veličini u crtežu: oblast sa lista 1:50 ulazi na polovini svoje veličine na papiru na listu 1:100.

Preklop počinje sa svojom jačinom; promenite je sa {{ui:Opacity}} u {{ui:Properties}}. Pomerajte, menjajte veličinu, zaključavajte i brišite ga kao svaku sliku, a označite {{ui:Flatten into the page when saved}} da se nacrta u stranu.

**U aplikacijama CadCraft, BimCraft i DetailCraft** kopija takođe zna svoju veličinu, pa nalepljivanje ulazi u pravoj veličini crteža kad je list imao razmeru, ili traži jednu kad nije. Pogledajte pomoć svake aplikacije o slikama.

## Poravnajte sliku po dve tačke

Izaberite jednu sliku ili preklop, zatim izaberite {{ui:More}} › {{ui:Line up a picture with two points}}:

1. Kliknite tačku na slici.
2. Kliknite gde ta tačka ide.
3. Kliknite drugu tačku na slici, daleko od prve.
4. Kliknite gde ta tačka ide.

Slika se razmerava, pomera i okreće tako da obe tačke padnu tamo gde ste kliknuli. {{key:Esc}} zaustavlja; {{key:Mod+Z}} opoziva sve u jednom koraku.

## Dobro je znati

- Veličina putuje sa kopijom samo između naših aplikacija na istom sajtu, i samo za kopiju napravljenu u poslednjih nekoliko sati; drugi program dobija običnu sliku.
- Ako pregledač ne dozvoljava MarkupCraft-u da koristi sistemsku privremenu memoriju, statusni red to kaže: lepljenje u našim aplikacijama i dalje radi, a {{ui:Save as PNG}} radi za druge programe.
- Poravnanje okreće sliku ponovnim crtanjem njenih piksela, pa je okrenuta slika malo mekša od originala.
