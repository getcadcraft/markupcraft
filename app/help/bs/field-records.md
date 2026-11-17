---
title: Prati RFI-je, podneske i dnevne izvještaje
summary: Stavi RFI-je, podneske i dnevne izvještaje na listove, sa brojevima, dodijeljenim licima, rokovima i nitima; filtriraj ono što kasni; izvezi CSV ili BCF; radi van mreže i spajaj kopije.
keywords: rfi, zahtjev za informacijom, podnesak, dnevni izvještaj, terenski izvještaj, dnevnik gradilišta, gradilište, kasni, rok, dodijeljeno meni, nit, prilog, spoji, van mreže, tablet, bcf, csv, polje
from: 95039c5a
---

Kartica {{ui:Polje}} čuva tri vrste zapisa uz tvoje oznake. Svaki je vezan za list; RFI ili podnesak također ima oznaku na mjestu na listu na koje se odnosi.

- **RFI**: pitanje za projektantski tim. Statusi: Otvoreno, Odgovoreno, Zatvoreno.
- **Podnesak**: nešto što treba pregledati prije nego se radovi nastave. Statusi: Otvoreno, U pregledu, Odobreno, Odobreno uz napomene, Revidirati i ponovo podnijeti, Zatvoreno.
- **Dnevni izvještaj**: vremenske prilike tog dana, broj ljudi na gradilištu i obavljeni posao. Statusi: Nacrt, Konačno.

Svaki zapis ima broj svoje vrste (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, dodijeljeno lice, rok, nit odgovora i spisak naziva priloga.

## Dodaj jedan

1. Otvori karticu {{ui:Polje}} i odaberi {{ui:RFI}} ili {{ui:Podnesak}}.
2. Dodirni ili klikni list kojem pripada. Pojavljuje se oznaka i zapis se otvara u kartici.
3. Popuni naslov, pitanje ili opis, kome je dodijeljeno i kada je rok.

Dnevni izvještaj se dodaje na otvoreni list bez oznake. {{ui:Postavi oznaku}} stavlja jednu kasnije; {{ui:Premjesti oznaku}} pomjera bilo koju oznaku. Dodir na oznaku na listu otvara njen zapis.

## Odgovori i prati

Promijeni {{ui:Status}} i promjena se bilježi u niti. Napiši odgovor i odaberi {{ui:Pošalji odgovor}} ({{key:Ctrl+Enter}} također šalje). Prilozi su samo nazivi: upiši jedan ili odaberi datoteke, a spisak pokazuje timu šta ide uz zapis. Same datoteke ostaju gdje jesu.

Zapis čiji je rok prošao, a koji još čeka (RFI koji nije Odgovoreno ili Zatvoreno, podnesak o kojem nije odlučeno), označen je **Kasni**, crveno, na spisku i na svojoj oznaci.

## Pronađi ono što je bitno

Filteri su iznad spiska: vrsta, status, rok (kasni, rok za 7 dana, ima ili nema roka), ovaj list ili svi listovi, tekstualna pretraga i {{ui:Dodijeljeno meni}}, koji upoređuje dodijeljeno lice sa imenom pod kojim te MarkupCraft poznaje (vidi [Postavi svoje ime](topic:set-your-name)). Red ispod filtera broji šta se prikazuje i šta kasni.

## Izvoz

{{ui:CSV}} zapisuje navedene zapise kao tabelu. {{ui:BCF}} zapisuje ih kao BCF teme, svaka sa snimkom svog mjesta na listu, da ih drugi BCF alati mogu navesti. Oba prate filtere.

## Spašavanje, rad van mreže i spajanje kopija

Zapisi se spašavaju unutar PDF-a kad ga spasiš i vraćaju se kad ga otvoriš. Mreža nije potrebna: dodaj, uredi, odgovori i spasi na tabletu u podrumu, pa vrati PDF. Stariji PDF-ovi i PDF-ovi iz drugih programa otvaraju se kao i uvijek.

Da spojiš dvije kopije, otvori jednu i odaberi {{ui:Spoji}}, pa izaberi drugu kopiju istog PDF-a. Zapisi se spajaju po svojim ID-ovima:

- zapis koji ima samo jedna kopija se dodaje;
- zapis u obje uzima svoja polja (naslov, tekst, status, dodijeljeno lice, rok) iz kopije koja je zadnja promijenjena, kao cjelinu, pa ako su dvije osobe mijenjale različita polja istog zapisa, važi verzija kasnije kopije; niti i nazivi priloga iz obje kopije se spajaju;
- ako su obje kopije isti novi zapis numerisale istim brojem, onaj koji stiže dobija sljedeći slobodan broj;
- zapis uklonjen u jednoj kopiji ostaje uklonjen, osim ako je uređen poslije.

Spajanje je jedan korak poništavanja.

## Ograničenja

- Zapisi još nisu dijeljeni kroz Live TeamWork; koristi {{ui:Spoji}}.
- U ovoj verziji nema timova, obavještenja ni cloud projekata za zapise.
- Stranice obrisane iz PDF-a nose sa sobom i svoje zapise (potvrda za stranice ih broji).
