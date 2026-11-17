---
title: Uporedite dve revizije
summary: Preklopite staro i novo izdanje lista u dve boje, poravnajte ih po dve tačke i oblačite šta se promenilo.
keywords: uporedi, preklapanje, preklapanje stranica, revizija, razlika, razlike, promene, staro novo, poravnaj, provera, izdanje, bilten
from: 62f5d1c5
---

Uporedi preklapa dva lista jedan preko drugog. Linije samo na starom listu prikazuju se crveno, linije samo na novom plavo, a linije na oba sivo i prigušeno. Boje su navedene u legendi ispod lista: „Samo na starom listu“, „Samo na novom listu“, „Na oba“.

## Uporedite dva lista

1. Otvorite oba izdanja. Mogu biti stranice istog PDF-a ili različitih PDF-ova; otvorite ih zajedno kao jedan skup (pogledajte [Rad sa više datoteka istovremeno](topic:several-files)).
2. Izaberite karticu {{ui:Compare}} sa desne strane.
3. Izaberite {{ui:Old sheet}} i {{ui:New sheet}}. Novi list počinje kao onaj na kojem ste. Kad je otvoreno više datoteka, uz naziv svakog lista prikazuje se naziv njegove datoteke.
4. Izaberite {{ui:Compare}}.

Rezultat: MarkupCraft prikazuje novi list sa pomešanim starim, pojavljuje se legenda, a kartica kaže „Upoređujem <old> (staro) sa <new> (novo). Označavanja na novom listu ostaju izmenjiva.“

## Prelazak sa starog na novo

Prevucite klizač {{ui:Old and new}}. Sasvim levo prikazuje se samo stari list, sasvim desno samo novi, a sredina oba. Pomeranje napred-nazad je često najbrži način da vidite malu promenu.

## Poravnajte listove

Ako su dva izdanja odštampana sa drugačijom marginom, veličinom ili rotacijom, sve izgleda promenjeno. Ispravite to:

**Po dve tačke (najbolje):**

1. Izaberite {{ui:Align by two points}}. Prikaz pokazuje samo stari list.
2. Kliknite oštar detalj koji možete naći na oba lista, kao presek mreže stubova. Kartica broji korake („1 od 4“).
3. Kliknite drugi detalj, daleko od prvog, na primer suprotni ugao mreže.
4. Prikaz prelazi na novi list. Ponovo kliknite prvi detalj.
5. Ponovo kliknite drugi detalj.

Rezultat: „Poravnato: stari list razmeren 100.00%, okrenut za 0.00°. Pomerajte za fino podešavanje.“ Stari list se pomera, razmerava i okreće da bi se uklopio. {{key:Esc}} otkazuje dok birate. Pre klika uvećajte svaki detalj za precizno poravnanje.

**Pomeranjem:** koristite četiri dugmeta sa strelicama ispod „Poravnanje“ da pomerate stari list. Izaberite korak (0.25, 1, 5 ili 20 pt; 72 pt je jedan inč na papiru). Kartica kaže koliko je pomeren.

{{ui:Reset}} uklanja poravnanje i pomeranja.

## Samo izmenjene linije

Ispod dugmadi za poravnanje izaberite {{ui:Changed lines}} umesto {{ui:Picture overlay}}. MarkupCraft tada upoređuje sopstvene linije dva lista, a ne njihove slike: novi list se prikazuje kakav jeste, sa linijama koje su samo na starom listu crveno, i onima samo na novom plavo. Linija koja je samo skraćena prikazuje samo nedostajući deo. Prvo poravnajte listove (vidi gore): poređenje koristi poravnanje, pa list koji je samo pomeren ne pokazuje promene. Statusni red kaže koliko se promenilo.

Ovo radi za PDF-ove odštampane iz CAD-a, gde je crtež od linija. Skenirani listovi nemaju linije za poređenje: za njih koristite preklapanje slike. Tekst napisan fontom (ne nacrtan kao potezi) se ne upoređuje.

## Označite promene

Dok upoređujete, nalazite se na novom listu i svi alati rade. Oblačite promene čim ih nađete; one pripadaju novom listu i ostaju kad prestanete da upoređujete.

{{ui:Cloud the changes}} to radi umesto vas: grupiše izmenjene linije koje su blizu jedna drugoj i crta revizioni oblak oko svake grupe na novom listu, sa komentarom „Promenjeno od <old sheet>“. Jedan {{key:Mod+Z}} uklanja sve; obrišite one koji vam nisu potrebni.

## Uporedite ceo skup

Kad nova revizija stigne kao sopstveni PDF, otvorite oba PDF-a i otvorite {{ui:Compare two sets}} na kartici {{ui:Compare}}. Izaberite stari i novi fajl, zatim izaberite {{ui:Compare the sets}}. Listovi se uparuju po broju (kao u [zameni listova revidovanog skupa](topic:slip-sheet-a-revised-set)), porede po linijama i navode se, najviše promenjeni prvi. Izaberite list na spisku da uporedite taj par sa {{ui:Changed lines}}.

{{ui:Cloud all changes}} označava oblakom svaku grupu izmenjenih linija na svakom promenjenom listu, u jednom koraku koji možete opozvati. Poređenje skupa ne poravnava listove unapred, pa list koji je pomeren na stranici pokazuje se kao izmenjen: uporedite taj par zasebno i koristite {{ui:Align by two points}}.

## Prekinite poređenje

Izaberite {{ui:Stop comparing}} ili pređite na drugi list. Poravnanje se pamti za isti par listova dok ne zatvorite skup.

## Dobro je znati

- Poređenje radi nad onim što je nacrtano, piksel po piksel. Ne zna da je linija pomerena; prikazuje staru poziciju jednom bojom, a novu drugom.
- Tekst koji je promenio prelom, izmenjen datum u naslovnom bloku ili drugačiji stil štampe takođe se pokazuje kao promena.
- Skenirani list upoređen sa odštampanim je pun šuma: skeniranje zamućuje i pomera linije.
- Poređenje teksta napisanog fontom i spisak šta se promenilo još nisu napravljeni.
