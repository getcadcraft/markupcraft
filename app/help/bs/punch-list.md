---
title: Napravite listu ispravki
summary: Pretvorite označavanja u numerisane stavke ispravki s dodijeljenom osobom, rokom i statusom, i izvezite listu.
keywords: lista ispravki, ispravka, lista nedostataka, nedostatak, problemi na terenu, zapažanje, dodijeli, dodijeljeno, rok, primopredaja, obilazak, broj
from: b98b38e6
---

Stavka ispravke je označavanje s brojem, dodijeljenom osobom, rokom i statusom stavke. Broj se crta na listu pored označavanja, pa se odštampani list i spisak poklapaju.

## Dodajte stavke

1. Označite svaki problem na listovima: oblak, izvučena oznaka, bilješka, bilo šta.
2. Odaberite jedno ili više njih (pogledajte [Odabir, pomjeranje i promjena označavanja](topic:select-and-edit)).
3. Ili otvorite karticu {{ui:Punch list}} i odaberite {{ui:Add selected to the punch list}}, ili odaberite {{ui:Add to the punch list}} u {{ui:Properties}}.

Rezultat: svako označavanje dobija sljedeći broj (1, 2, 3…), po redoslijedu listova pa po redoslijedu kojim su nacrtana. Na listu se pojavi numerisana oznaka, a statusna traka kaže „Dodano je 3 stavke na listu ispravki.” Označavanja koja već imaju broj i komentari samo za čitanje se preskaču.

## Popunite detalje

U kartici {{ui:Punch list}} svaka stavka prikazuje svoj broj, predmet, tekst, list i status, s tri polja ispod. Ista polja su u {{ui:Properties}} pod „Lista ispravki” kad je označavanje odabrano:

- {{ui:Assignee}}: ime ili zanat, kao slobodan tekst.
- {{ui:Due}}: datum, iz birača datuma.
- {{ui:Item status}}: Otvoreno, U toku, Spremno za pregled ili Zatvoreno.

Kliknite naslov stavke da skočite na nju na njenom listu.

Status stavke je odvojen od statusa pregleda označavanja (Otvoreno, Prihvaćeno, Odbijeno, Završeno). Koristite status stavke za posao, a status pregleda za komentar.

## Skinite stavku

Odaberite označavanje i odaberite {{ui:Take off the punch list}} u {{ui:Properties}}. Označavanje ostaje; uklanja se samo broj. Dok je set otvoren, brojevi se ne ponovo koriste: sljedeća stavka i dalje dobija sljedeći novi broj, pa praznina znači da je stavka skinuta. Kad se datoteka ponovo otvori, numeracija nastavlja od najvećeg broja u njoj.

## Izvezite listu

Odaberite {{ui:Export CSV}} u kartici {{ui:Punch list}}. Dobijate „<name> punch list.csv” sa kolonama No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author i Created, poredanim po broju. Otvorite je u bilo kojem tabelarnom programu.

Brojevi ispravki, dodijeljene osobe, rokovi i statusi stavki također se spašavaju unutar označenog PDF-a, pa se vrate kad ga ponovo otvorite. Drugi PDF pregledači prikazuju numerisanu oznaku kao dio označavanja. Izvoz BCF-a iz liste označavanja također nosi dodijeljenu osobu i rok (pogledajte [Osnove BCF-a](topic:bcf-basics)).

## Na terenu s tabletom

Otvorite set na iPad-u, obiđite posao i ostavite {{ui:Note}} ili nacrtajte {{ui:Cloud}} kod svakog problema. Dodajte ih na listu ispravki dok idete, i spasite prije odlaska. Pogledajte [Pregled na iPad-u ili ekranu osjetljivom na dodir](topic:review-on-a-tablet).

Lista ispravki kao formatiran PDF ili tabelarni izvještaj, i fotografije priložene stavkama, još nisu napravljeni.
