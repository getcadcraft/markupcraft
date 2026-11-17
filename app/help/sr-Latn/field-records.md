---
title: Pratite RFI, dokumentaciju za odobrenje i dnevne izveštaje
summary: Dodajte RFI, dokumentaciju za odobrenje i dnevne izveštaje na listove, sa brojevima, zaduženima, rokovima i nizovima odgovora; filtrirajte ono što kasni; izvezite CSV ili BCF; radite van mreže i spajajte kopije.
keywords: rfi, zahtev za informacije, dokumentacija za odobrenje, dnevni izveštaj, izveštaj sa terena, građevinski dnevnik, gradnja, kasni, rok, dodeljeno meni, niz odgovora, prilog, spoji, van mreže, tablet, bcf, csv, teren
from: 95039c5a
---

Kartica {{ui:Polje}} čuva tri vrste zapisa uz vaša označavanja. Svaki je vezan za list; RFI ili dokumentacija za odobrenje takođe ima pribadaču na mestu na listu na koje se odnosi.

- **RFI**: pitanje za projektantski tim. Statusi: Otvoren, Odgovoreno, Zatvoren.
- **Dokumentacija za odobrenje**: nešto što treba pregledati pre nego što se radovi nastave. Statusi: Otvoren, U pregledu, Odobreno, Odobreno uz napomenu, Doraditi i ponovo poslati, Zatvoren.
- **Dnevni izveštaj**: vremenski uslovi tog dana, broj ljudi na gradilištu i obavljeni radovi. Statusi: Nacrt, Konačno.

Svaki zapis ima sopstveni broj svoje vrste (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, zaduženo lice, rok, niz odgovora i spisak naziva priloga.

## Dodajte novi

1. Otvorite karticu {{ui:Polje}} i izaberite {{ui:RFI}} ili {{ui:Dokumentacija za odobrenje}}.
2. Dodirnite ili kliknite list na kom mu je mesto. Pojavljuje se pribadača i zapis se otvara u kartici.
3. Popunite naslov, pitanje ili opis, kome je dodeljen i kada mu je rok.

Dnevni izveštaj se dodaje na otvoreni list bez pribadače. {{ui:Postavi pribadaču}} kasnije stavlja jednu na njega; {{ui:Pomeri pribadaču}} premešta bilo koju pribadaču. Dodir na pribadaču na listu otvara njen zapis.

## Odgovorite i pratite

Promenite {{ui:Status}} i promena se beleži u nizu odgovora. Napišite odgovor i izaberite {{ui:Pošalji odgovor}} (Ctrl+Enter takođe šalje). Prilozi su samo nazivi: upišite jedan ili izaberite datoteke, a spisak pokazuje timu šta ide uz zapis. Same datoteke ostaju tamo gde jesu.

Zapis čiji je rok prošao, a koji još čeka (RFI koji nije Odgovoreno ili Zatvoren, dokumentacija za odobrenje o kojoj nije odlučeno), označen je **Kasni**, crveno, na spisku i na svojoj pribadači.

## Pronađite ono što je bitno

Filteri su iznad spiska: vrsta, status, rok (kasni, rok za 7 dana, ima ili nema roka), ovaj list ili svi listovi, pretraga teksta i {{ui:Dodeljeno meni}}, koji poredi zaduženo lice sa imenom po kom vas MarkupCraft poznaje (vidi [Podesi svoje ime](topic:set-your-name)). Red ispod filtera broji šta je prikazano i šta kasni.

## Izvoz

{{ui:CSV}} upisuje navedene zapise kao tabelu. {{ui:BCF}} ih upisuje kao BCF teme, svaka sa snimkom svog mesta na listu, da ih drugi BCF alati mogu prikazati. Oba prate filtere.

## Čuvanje, rad van mreže i spajanje kopija

Zapisi se čuvaju unutar PDF-a kad ga sačuvate, i vraćaju se kad ga otvorite. Ništa ne zahteva mrežu: dodajte, menjajte, odgovarajte i čuvajte na tabletu u podrumu, pa zatim vratite PDF. Stariji PDF-ovi i PDF-ovi iz drugih programa otvaraju se kao i uvek.

Da spojite dve kopije, otvorite jednu i izaberite {{ui:Spoji}}, pa izaberite drugu kopiju istog PDF-a. Zapisi se spajaju po svojim identifikatorima:

- zapis koji ima samo jedna kopija se dodaje;
- zapis u obe kopije uzima svoja polja (naslov, tekst, status, zaduženo lice, rok) iz kopije izmenjene poslednje, u celini, pa ako su dvoje ljudi menjali različita polja istog zapisa, važi verzija kasnije kopije; nizovi odgovora i nazivi priloga iz obe kopije se spajaju;
- ako su obe kopije isto numerisale novi zapis, onaj koji stiže dobija sledeći slobodan broj;
- zapis uklonjen u jednoj kopiji ostaje uklonjen, osim ako je posle toga izmenjen.

Spajanje je jedan korak opoziva.

## Ograničenja

- Zapise još ne deli Live TeamWork; koristite {{ui:Spoji}}.
- U ovoj verziji nema timova, obaveštenja ni oblačnih projekata za zapise.
- Stranice obrisane iz PDF-a nose sa sobom i svoje zapise (potvrda o stranicama ih broji).
