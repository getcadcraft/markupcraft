---
title: Napravite listu nedostataka
summary: Pretvorite označavanja u numerisane stavke liste sa izvršiocem, rokom i statusom, i izvezite listu.
keywords: lista nedostataka, nedostatak, lista propusta, nedostatak, problemi na terenu, zapažanje, dodeli, izvršilac, rok, primopredaja, obilazak, broj
from: b98b38e6
---

Stavka liste nedostataka je označavanje sa brojem, izvršiocem, rokom i statusom stavke. Broj se crta na listu pored označavanja, pa se odštampani list i spisak poklapaju.

## Dodajte stavke

1. Označite svaki problem na listovima: oblak, pokaznu oznaku, belešku, bilo šta.
2. Izaberite jedno ili više njih (pogledajte [Izbor, pomeranje i menjanje označavanja](topic:select-and-edit)).
3. Ili otvorite karticu {{ui:Lista nedostataka}} i izaberite {{ui:Dodaj izabrano na listu nedostataka}}, ili izaberite {{ui:Dodaj na listu nedostataka}} u {{ui:Svojstva}}.

Rezultat: svako označavanje dobija sledeći broj (1, 2, 3…), po redu listova, pa po redu kojim su nacrtana. Na listu se pojavljuje značka sa brojem, a statusna traka kaže „Dodato je 3 stavke na listu nedostataka.” Označavanja koja već imaju broj i komentari samo za čitanje se preskaču.

## Popunite detalje

Na kartici {{ui:Lista nedostataka}}, svaka stavka prikazuje svoj broj, predmet, tekst, list i status, sa tri polja ispod. Ista polja su u {{ui:Svojstva}} pod „Lista nedostataka” kada je označavanje izabrano:

- {{ui:Izvršilac}}: ime ili struka, kao slobodan tekst.
- {{ui:Rok}}: datum, iz birača datuma.
- {{ui:Status stavke}}: Otvoreno, U toku, Spremno za pregled ili Zatvoreno.

Kliknite zaglavlje stavke da biste skočili do nje na njenom listu.

Status stavke je odvojen od statusa pregleda označavanja (Otvoreno, Prihvaćeno, Odbijeno, Završeno). Koristite status stavke za posao, a status pregleda za komentar.

## Skinite stavku

Izaberite označavanje i izaberite {{ui:Skini sa liste nedostataka}} u {{ui:Svojstva}}. Označavanje ostaje; uklanja se samo broj. Dok je skup otvoren, brojevi se ne ponovo koriste: sledeća stavka i dalje dobija sledeći novi broj, pa praznina znači da je stavka skinuta. Kada se datoteka ponovo otvori, numerisanje nastavlja od najvećeg broja u njoj.

## Izvezite listu

Izaberite {{ui:Izvezi CSV}} na kartici {{ui:Lista nedostataka}}. Dobijate „<naziv> punch list.csv” sa kolonama No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author i Created, po rednom broju. Otvorite je u bilo kojoj tabeli.

Brojevi nedostataka, izvršioci, rokovi i statusi stavki takođe se čuvaju unutar označenog PDF-a, pa se vraćaju kada ga ponovo otvorite. Drugi PDF pregledači prikazuju značku sa brojem kao deo označavanja. BCF izvoz iz liste označavanja takođe nosi izvršioca i rok (pogledajte [Osnove BCF-a](topic:bcf-basics)).

## Na terenu sa tabletom

Otvorite skup na iPad-u, obiđite posao i ostavite {{ui:Beleška}} ili nacrtajte {{ui:Oblak}} kod svakog problema. Dodajte ih na listu nedostataka dok idete, i sačuvajte pre odlaska. Pogledajte [Pregled na iPad-u ili ekranu osetljivom na dodir](topic:review-on-a-tablet).

Lista nedostataka kao formatiran PDF ili tabelarni izveštaj, i fotografije priložene stavkama, još nisu dostupne.
