---
title: Usporedite dvije revizije
summary: Preklopite stari i novi izdanje lista u dvije boje, poravnajte ih po dvije točke i oblačite ono što se promijenilo.
keywords: usporedba, overlay, preklapanje stranica, revizija, razlika, razlike, promjene, staro novo, poravnanje, backcheck, izdanje, bilten
from: 62f5d1c5
---

Usporedba polaže dva lista jedan preko drugoga. Linije samo na starom listu prikazuju se crveno, linije samo na novom plavo, a linije na oba prigušeno sivo. Boje su navedene u legendi ispod lista: "Samo na starom listu", "Samo na novom listu", "Na oba".

## Usporedite dva lista

1. Otvorite oba izdanja. Mogu biti stranice istog PDF-a ili različitih PDF-ova; otvorite ih zajedno kao jedan skup (vidi [Rad s više datoteka istovremeno](topic:several-files)).
2. Odaberite karticu {{ui:Usporedba}} s desne strane.
3. Odaberite {{ui:Stari list}} i {{ui:Novi list}}. Novi list počinje kao onaj na kojem ste. Kad je otvoreno više datoteka, naziv datoteke svakog lista prikazuje se iza njegova naziva.
4. Odaberite {{ui:Usporedba}}.

Rezultat: MarkupCraft prikazuje novi list pomiješan sa starim, pojavljuje se legenda, a kartica kaže „Uspoređuje se <old> (stari) s <new> (novi). Oznake na novom listu ostaju uredive.“

## Prijelaz između starog i novog

Povucite klizač {{ui:Staro i novo}}. Potpuno lijevo prikazuje samo stari list, potpuno desno samo novi, a sredina prikazuje oba. Pomicanje naprijed-natrag često je najbrži način da vidite malu promjenu.

## Poravnajte listove

Ako su dva izdanja plotirana s drugačijom marginom, veličinom ili rotacijom, sve izgleda promijenjeno. Popravite to:

**Po dvije točke (najbolje):**

1. Odaberite {{ui:Poravnaj po dvije točke}}. Prikaz pokazuje samo stari list.
2. Kliknite oštru značajku koju možete naći na oba lista, na primjer sjecište mreže stupova. Kartica broji korake ("1 od 4").
3. Kliknite drugu značajku, daleko od prve, na primjer suprotni kut mreže.
4. Prikaz prelazi na novi list. Ponovno kliknite prvu značajku.
5. Ponovno kliknite drugu značajku.

Rezultat: "Poravnato: stari list skaliran 100.00%, zakrenut 0.00°. Pomaknite za fino podešavanje." Stari list se pomiče, skalira i zakreće da stane. {{key:Esc}} otkazuje dok birate. Zumirajte na svaku značajku prije klika za precizno poravnanje.

**Pomicanjem:** koristite četiri strelice ispod "Poravnanje" za pomicanje starog lista. Odaberite korak (0.25, 1, 5 ili 20 pt; 72 pt je jedan inč na papiru). Kartica kaže koliko se pomaknulo.

{{ui:Vrati zadano}} uklanja poravnanje i pomake.

## Samo promijenjene linije

Ispod gumba za poravnanje odaberite {{ui:Promijenjene linije}} umjesto {{ui:Preklapanje slika}}. MarkupCraft tada uspoređuje vlastite linije dvaju listova, a ne njihove slike: novi list prikazuje se kakav jest, s linijama koje su samo na starom listu crveno i onima samo na novom plavo. Linija koja se samo skratila prikazuje samo nedostajući dio. Prvo poravnajte listove (vidi gore): usporedba koristi poravnanje, pa list koji je samo pomaknut ne prikazuje promjene. Statusna linija kaže koliko se promijenilo.

Ovo radi za PDF-ove plotirane iz CAD-a, gdje se crtež sastoji od linija. Skenirani listovi nemaju linija za usporedbu: za njih koristite preklapanje slika. Tekst postavljen fontom (a ne nacrtan kao potez) se ne uspoređuje.

## Označite promjene

Dok uspoređujete, nalazite se na novom listu i svaki alat radi. Oblačite promjene dok ih nalazite; pripadaju novom listu i ostaju kad prestanete uspoređivati.

{{ui:Oblakuj promjene}} to radi za vas: grupira promijenjene linije koje su blizu jedna drugoj i crta revizijski oblak oko svake grupe na novom listu, s komentarom „Promijenjeno od <stari list>“. Jedan {{key:Mod+Z}} uklanja ih sve; obrišite one koje ne trebate.

## Usporedite cijeli skup

Kad novo izdanje dođe kao vlastiti PDF, otvorite oba PDF-a i otvorite {{ui:Usporedi dva kompleta}} na kartici {{ui:Usporedba}}. Odaberite stari i novi datoteku, zatim odaberite {{ui:Usporedi komplete}}. Listovi se uparuju prema broju (kao u [slip-sheeting](topic:slip-sheet-a-revised-set)), uspoređuju prema linijama i navode s najviše promijenjenim prvo. Odaberite list na popisu da usporedite taj par s {{ui:Promijenjene linije}}.

{{ui:Oblakuj sve promjene}} oblači svaku grupu promijenjenih linija na svakom promijenjenom listu, u jednom koraku koji se može poništiti. Usporedba skupa ne poravnava listove prvo, pa se list koji je pomaknut na stranici prikazuje kao promijenjen: usporedite taj par zasebno i upotrijebite {{ui:Poravnaj po dvije točke}}.

## Prestanite usporedbu

Odaberite {{ui:Prekini usporedbu}} ili idite na drugi list. Poravnanje se pamti za isti par listova dok ne zatvorite skup.

## Dobro je znati

- Usporedba radi s onim što je nacrtano, piksel po piksel. Ne zna da se linija pomaknula; prikazuje staru poziciju u jednoj boji, a novu u drugoj.
- Tekst koji je preloman, promijenjen datum u zaglavlju ili drukčiji stil ispisa također se prikazuju kao promjene.
- Skenirani list uspoređen s plotiranim je bučan: skeniranje zamućuje i pomiče linije.
- Usporedba teksta napisanog fontom i popis onoga što se promijenilo još nisu izrađeni.
