---
title: Praćenje zahtjeva RFI, podnesaka i dnevnika radova
summary: Dodajte zahtjeve RFI, podneske i dnevnike radova na listove, s brojevima, osobama zaduženima, rokovima i raspravama; filtrirajte zakašnjele stavke; izvozite u CSV ili BCF; radite offline i spajajte kopije.
keywords: rfi, zahtjev za informacijama, podnesak, dnevnik radova, izvješće s terena, dnevnik gradilišta, gradnja, zakašnjelo, rok, dodijeljeno meni, rasprava, privitak, spoji, offline, tablet, bcf, csv, teren
from: 95039c5a
---

Kartica {{ui:Teren}} čuva tri vrste zapisa uz vaše oznake. Svaki je vezan uz list; zahtjev RFI ili podnesak ima i pribadaču na mjestu na listu na koje se odnosi.

- **RFI**: pitanje za projektni tim. Statusi: Otvoreno, Odgovoreno, Zatvoreno.
- **Podnesak**: nešto što treba pregledati prije nego što se radovi nastave. Statusi: Otvoreno, U pregledu, Odobreno, Odobreno uz napomenu, Revidirati i ponovno podnijeti, Zatvoreno.
- **Dnevnik radova**: vremenske prilike na dan, broj ljudi na gradilištu i obavljeni radovi. Statusi: Radna verzija, Konačno.

Svaki zapis ima broj svoje vrste (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, osobu zaduženu, rok, raspravu odgovora i popis naziva privitaka.

## Dodavanje zapisa

1. Otvorite karticu {{ui:Teren}} i odaberite {{ui:RFI}} ili {{ui:Podnesak}}.
2. Dodirnite ili kliknite list na kojem zapis pripada. Pojavit će se pribadača i zapis će se otvoriti u kartici.
3. Ispunite naslov, pitanje ili opis, kome je zapis dodijeljen i kada je rok.

Dnevnik radova dodaje se na otvoreni list bez pribadače. {{ui:Postavi pribadaču}} kasnije postavlja jednu na njega; {{ui:Pomakni pribadaču}} pomiče bilo koju pribadaču. Dodirom pribadače na listu otvara se njezin zapis.

## Odgovaranje i praćenje

Promijenite {{ui:Status}} i promjena se bilježi u raspravi. Napišite odgovor i odaberite {{ui:Pošalji odgovor}} (Ctrl+Enter također šalje). Privitci su samo nazivi: upišite naziv ili odaberite datoteke, a popis timu pokazuje što ide uz zapis. Same datoteke ostaju tamo gdje jesu.

Zapis čiji je rok prošao, a koji još čeka (zahtjev RFI čiji status nije Odgovoreno ni Zatvoreno, podnesak o kojem nije odlučeno), označen je **Zakašnjelo**, crvenom bojom, na popisu i na svojoj pribadači.

## Pronalaženje bitnog

Filtri su iznad popisa: vrsta, status, rok (zakašnjelo, rok za 7 dana, ima ili nema rok), ovaj list ili svi listovi, pretraga teksta i {{ui:Zaduženo meni}}, koji uspoređuje osobu zaduženu s imenom koje MarkupCraft zna za vas (vidi [Postavite svoje ime](topic:set-your-name)). Redak ispod filtara broji što je prikazano i što je zakašnjelo.

## Izvoz

{{ui:CSV}} zapisuje prikazane zapise kao proračunsku tablicu. {{ui:BCF}} zapisuje ih kao BCF teme, svaku sa snimkom njezina mjesta na listu, kako ih mogu prikazati drugi BCF alati. Oba slijede filtre.

## Spremanje, rad offline i spajanje kopija

Zapisi se spremaju unutar PDF-a kada ga spremite i vraćaju se kada ga otvorite. Ništa ne treba mrežu: dodajte, uređujte, odgovarajte i spremajte na tabletu u podrumu, a zatim vratite PDF. Stariji PDF-ovi i PDF-ovi iz drugih programa otvaraju se kao i uvijek.

Da biste spojili dvije kopije, otvorite jednu i odaberite {{ui:Spoji}}, a zatim odaberite drugu kopiju istog PDF-a. Zapisi se spajaju prema svojim identifikatorima:

- zapis koji ima samo jedna kopija dodaje se;
- zapis koji je u obje kopije preuzima svoja polja (naslov, tekst, status, osoba zadužena, rok) iz kopije koja je zadnja promijenjena, u cijelosti, pa ako su dvije osobe mijenjale različita polja istog zapisa, vrijedi verzija kasnije kopije; rasprave i nazivi privitaka iz obje kopije se spajaju;
- ako su obje kopije isto numerirale novi zapis, onaj koji dolazi dobiva sljedeći slobodan broj;
- zapis uklonjen u jednoj kopiji ostaje uklonjen, osim ako je poslije uređivan.

Spajanje je jedan korak poništavanja.

## Ograničenja

- Zapise još ne dijeli Live TeamWork; koristite spajanje.
- U ovoj verziji za zapise nema timova, obavijesti ni projekata u oblaku.
- Stranice izbrisane iz PDF-a nose sa sobom i svoje zapise (potvrda za stranicu ih broji).
