---
title: Uporedi dvije revizije
summary: Preklopi stari i novi izdanje lista u dvije boje, poravnaj ih po dvije tačke i označi oblacima šta se promijenilo.
keywords: poređenje, preklop, preklapanje listova, revizija, razlika, razlike, promjene, staro novo, poravnanje, provjera, izdanje, bilten
from: 62f5d1c5
---

Poređenje postavlja dva lista jedan preko drugog. Linije samo na starom listu prikazuju se crveno, linije samo na novom plavo, a linije na oba prikazuju se prigušeno sivo. Boje su navedene u legendi ispod lista: "Samo na starom listu", "Samo na novom listu", "Na oba".

## Uporedi dva lista

1. Otvori oba izdanja. Mogu biti stranice istog PDF-a ili različitih PDF-ova; otvori ih zajedno kao jedan skup (pogledaj [Rad s više datoteka odjednom](topic:several-files)).
2. Izaberi karticu {{ui:Poređenje}} desno.
3. Izaberi {{ui:Stari list}} i {{ui:Novi list}}. Novi list počinje kao onaj na kojem si. Kad je otvoreno više datoteka, uz naziv svakog lista prikazuje se naziv njegove datoteke.
4. Izaberi {{ui:Poređenje}}.

Rezultat: MarkupCraft prikazuje novi list s pomiješanim starim, pojavljuje se legenda, a kartica kaže "Upoređivanje <old> (stari) sa <new> (novi). Oznake na novom listu ostaju za uređivanje."

## Prelaz između starog i novog

Prevuci klizač {{ui:Staro i novo}}. Sasvim lijevo prikazuje se samo stari list, sasvim desno samo novi, a u sredini oba. Pomjeranje naprijed-nazad je često najbrži način da vidiš malu promjenu.

## Poravnaj listove

Ako su dva izdanja iscrtana s drugačijom marginom, veličinom ili rotacijom, sve izgleda promijenjeno. Popravi:

**Po dvije tačke (najbolje):**

1. Izaberi {{ui:Poravnaj po dvije tačke}}. Prikaz pokazuje samo stari list.
2. Klikni oštar detalj koji se može naći na oba lista, na primjer presjek mreže stubova. Kartica broji korake ("1 od 4").
3. Klikni drugi detalj, daleko od prvog, na primjer suprotan ugao mreže.
4. Prikaz prelazi na novi list. Klikni prvi detalj ponovo.
5. Klikni drugi detalj ponovo.

Rezultat: "Poravnato: stari list razmjera 100.00%, okrenut 0.00°. Pomjeri za fino podešavanje." Stari list se pomjera, skalira i okreće da stane. {{key:Esc}} otkazuje dok biraš. Zumiraj na svaki detalj prije klika za preciznije poklapanje.

**Pomjeranjem:** koristi četiri strelice ispod "Poravnaj" da pomjeriš stari list. Izaberi korak (0.25, 1, 5 ili 20 pt; 72 pt je jedan inč na papiru). Kartica kaže koliko se pomjerio.

{{ui:Vrati}} uklanja poravnanje i pomjeranja.

## Samo promijenjene linije

Ispod dugmadi za poravnanje izaberi {{ui:Promijenjene linije}} umjesto {{ui:Preklapanje slike}}. MarkupCraft tada upoređuje vlastite linije dva lista, a ne njihove slike: novi list se prikazuje kakav jeste, s linijama koje su samo na starom listu crvene, a samo na novom plave. Linija koja je samo skraćena prikazuje samo nedostajući dio. Prvo poravnaj listove (vidi gore): poređenje koristi poravnanje, pa list koji je samo pomaknut ne pokazuje promjene. Statusna linija kaže koliko se promijenilo.

Ovo radi za PDF-ove iscrtane iz CAD-a, gdje je crtež sačinjen od linija. Skenirani listovi nemaju linije za poređenje: za njih koristi preklapanje slike. Tekst napisan fontom (ne nacrtan kao potezi) se ne upoređuje.

## Označi promjene

Dok upoređuješ, nalaziš se na novom listu i svaki alat radi. Crtaj oblake oko promjena kako ih nalaziš; pripadaju novom listu i ostaju kad prestaneš s poređenjem.

{{ui:Označi izmjene oblakom}} to radi umjesto tebe: grupiše promijenjene linije koje su blizu jedna drugoj i crta revizioni oblak oko svake grupe na novom listu, s komentarom "Promijenjeno od <old sheet>". Jedan {{key:Mod+Z}} uklanja sve; obriši one koji ti nisu potrebni.

## Uporedi cijeli skup

Kad novo izdanje stigne kao vlastiti PDF, otvori oba PDF-a i otvori {{ui:Uporedi dva skupa}} u kartici {{ui:Poređenje}}. Izaberi stari i novi fajl, zatim izaberi {{ui:Uporedi skupove}}. Listovi se uparuju po broju (kao u [zamjeni listova u reviziji](topic:slip-sheet-a-revised-set)), upoređuju po linijama i navode se s najviše promijenjenim na vrhu. Izaberi list u listi da uporediš taj par s {{ui:Promijenjene linije}}.

{{ui:Označi sve izmjene oblakom}} označava svaku grupu promijenjenih linija na svakom promijenjenom listu, u jednom koraku koji se može poništiti. Poređenje skupa ne poravnava listove unaprijed, pa list koji je pomaknut na stranici prikazuje se kao promijenjen: uporedi taj par zasebno i koristi {{ui:Poravnaj po dvije tačke}}.

## Prekini poređenje

Izaberi {{ui:Prekini poređenje}} ili pređi na drugi list. Poravnanje se pamti za isti par listova dok ne zatvoriš skup.

## Dobro je znati

- Poređenje radi nad onim što je nacrtano, piksel po piksel. Ne zna da se linija pomjerila; prikazuje staru poziciju jednom bojom, a novu drugom.
- Tekst koji je promijenio raspored, promijenjen datum u naslovnom bloku ili drugačiji stil štampe također se prikazuju kao promjene.
- Skenirani list upoređen sa iscrtanim je bučan: skeniranje zamućuje i pomjera linije.
- Poređenje teksta napisanog fontom i lista onoga što se promijenilo još nisu napravljeni.
