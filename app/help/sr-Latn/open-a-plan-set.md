---
title: Otvorite skup listova i krećite se između listova
summary: Otvorite jedan PDF ili više njih, ili počnite sa praznim stranama, nađite listove po broju ili nazivu, zumirajte i pomerajte pogled, i preimenujte list kada ga datoteka pogrešno nazove.
keywords: otvori, novo, prazna strana, prazan list, skica, mreža, bez naziva, skup listova, listovi, strane, sličice, oznake strana, broj lista, natpisni blok, preimenuj, kretanje, zumiranje, pomeranje, uklopi, pretraži listove
from: 1e7f4d50
---

## Otvorite skup

1. Izaberite {{ui:Otvori}} na traci sa alatima, ili pritisnite {{key:Mod+O}}.
2. U biraču datoteka izaberite svaki PDF skupa ({{pick:mac=držite ⌘ i kliknite na svaku datoteku|windows linux=držite Ctrl i kliknite na svaku datoteku}}, ili izaberite opseg uz Shift), pa potvrdite.
   Ili prevucite datoteke iz {{pick:mac=Findera|windows=Explorer-a|linux=vašeg upravljača datotekama}} na površinu lista. Dok prevlačite, pojavljuje se poruka „Prevucite PDF-ove da ih otvorite”.
3. Sačekajte dok statusna traka ne pokaže „Otvaranje <file>…”. Kod velikih datoteka prikazuje se brojanje: „(10 od 60 listova)”.

Rezultat: lista {{ui:Listovi}} prikazuje svaku stranu svake datoteke, redom kojim ste ih otvarali, a statusna traka kaže nešto poput „Otvoreno je 3 datoteke (42 lista u skupu).” Ako su datoteke već imale komentare, dodaje se i koliko ih je pročitano.

Da kasnije dodate još datoteka u skup, otvorite ih na isti način. Pridružuju se na kraju liste.

## Počni sa praznim stranama

Ako hoćete da skicirate ili pišete beleške bez crteža, napravite prazne strane umesto da otvarate PDF:

1. Izaberite {{ui:Novo}} na traci sa alatima, ili {{ui:Počni sa praznom stranom}} na početnom ekranu, ili pritisnite {{key:Mod+N}} ako ga vaš pregledač dozvoljava (desktop aplikacija i Studio ga uvek dozvoljavaju).
2. Izaberite {{ui:Veličina papira}}: Letter, Tabloid ili ANSI B, ARCH D, ARCH E, A4, A3 ili A1, i {{ui:Uspravno}} ili {{ui:Položeno}}.
3. Izaberite {{ui:Mreža}}: {{ui:Nema}}, {{ui:Tačkice}} ili {{ui:Kvadrati}}. Mreža je na svakih 1/4 in, sa debljom linijom na svakih 1 in na papiru u inčima, i na svakih 5 mm, sa debljom linijom na svakih 10 mm na metričkom papiru. Štampa se na strani.
4. Upišite koliko {{ui:Stranica}} želite, od 1 do 20, pa izaberite {{ui:Napravi}}.

Rezultat: nova PDF datoteka naziva „Untitled-1.pdf” (zatim „Untitled-2.pdf”, i tako dalje) otvara se kao i svaka druga datoteka, napravljena ovde na ovom računaru. Svaki alat radi na njoj, a {{ui:Sačuvaj}} preuzima „Untitled-1 (marked up).pdf”. MarkupCraft pamti vaše izbore za sledeći put.

Strane nemaju razmeru: statusna traka kaže „Nije kalibrisano”. Mreža nije razmera. Za merenje prvo kalibrišite list ili izaberite razmeru; pogledajte [Kalibracija i merenje](topic:calibrate-and-measure).

Da dodate stranu u prazan skup, otvorite jedan od njegovih listova i izaberite {{ui:Dodaj praznu stranu}} ispod liste {{ui:Listovi}}. Nova strana ima isti papir i mrežu i ide na kraj. Kao i svaka promena strane, ne može se opozvati; pogledajte [Štampanje i promena strana](topic:pages-and-printing).

## Kako listovi dobijaju nazive

MarkupCraft naziva svaki list „<broj lista> — <naslov>”, na primer „A-101 — Osnova sprata”, prema prvom od ovih koji nađe:

1. Naziv koji ste upisali pomoću {{ui:Preimenuj list}} (ispod).
2. Oznake strana samog PDF-a, kada ih je osoba koja je napravila PDF podesila (na primer „A-101”).
3. Natpisni blok: MarkupCraft čita tekst strane i traži nešto što liči na broj lista (A-101, A1.01, M-201A, KA1-1), dajući prednost donjem desnom uglu, desnoj traci i donjoj traci, i uzima najveći tekst u blizini kao naslov.
4. Inače, naziv datoteke i strana: „Plans — strana 3”.

Da vidite koji je korišćen, pritisnite {{key:Esc}} dok ništa nije izabrano i {{ui:Izbor}} je uključen, pa pogledajte {{ui:Svojstva}}: „Pročitano iz” kaže „Oznaka strane”, „Natpisni blok”, „Naziv datoteke” ili „Upisano ručno”.

:::note
Skenirani listovi, i PDF-ovi čiji su natpisi izvezeni kao linije, nemaju tekst koji se može pročitati. Oni se imenuju prema datoteci i strani dok ih ne preimenujete. MarkupCraft još ne može da čita tekst sa slika.
:::

## Krećite se između listova

- Kliknite list u {{ui:Listovi}}.
- Pritisnite {{key:PageDown}} za sledeći list i {{key:PageUp}} za prethodni, ili upotrebite strelice u traci ispod lista.
- Upišite u {{ui:Pretraži listove}}: deo broja („A-2”), reč iz naslova („krov”) ili naziv datoteke. Lista se sužava dok kucate („4 od 42”). Pritisnite {{key:Enter}} da otvorite prvi pogodak. Obrišite polje da ponovo vidite sve listove.

Svaki list zadržava svoj zum i položaj dok ne zatvorite skup.

## Zumiranje i pomeranje pogleda

:::mouse
- **Zumiranje:** okrenite točkić iznad lista. Zumira oko pokazivača. Ili pritisnite {{key:Plus}} i {{key:Minus}} (takođe sa {{key:Mod}}), ili upotrebite dugmad za zum. Upišite tačan procenat u polje za zum.
- **Uklapanje:** {{ui:Uklopi stranu}} ({{key:Mod+0}}) prikazuje ceo list; {{ui:Uklopi širinu}} ({{key:Mod+9}}) popunjava širinu.
- **Pomeranje:** prevucite srednjim dugmetom (točkićem), ili prevucite desnim dugmetom, ili držite {{key:Space}} i prevucite, ili izaberite {{ui:Pomeri pogled}} ({{key:H}}) i prevucite. Kada ništa nije izabrano, i tasteri sa strelicama pomeraju list.
:::

:::mac mouse
Na Mac trackpad-u, skrolovanje sa dva prsta zumira (ne pomera list). Za pomeranje držite {{key:Space}} i prevucite jednim prstom, ili pređite na {{ui:Pomeri pogled}} pomoću {{key:H}}. Štipanje zumira u Chrome-u, Edge-u i Firefox-u.
:::

:::touch
- **Zum i pomeranje:** stavite dva prsta na list. Raširite ili stegnite ih da zumirate oko tačke između njih, a pomerajte ih zajedno da pomerate pogled. Oba se dešavaju u isto vreme.
- **Pomeranje jednim prstom:** prvo izaberite {{ui:Pomeri pogled}}. Uz bilo koji drugi alat, jedan prst crta ili bira.
- {{ui:Uklopi stranu}} i {{ui:Uklopi širinu}} nalaze se u traci ispod lista.
:::

Možete zumirati mnogo dalje od celog lista i do 6400%. List se ponovo iscrtava oštro nekoliko trenutaka nakon što prestanete da ga pomerate.

## Oznake (zabeleške)

{{ui:Oznake}}, na vrhu panela {{ui:Listovi}}, prikazuje oznake (pregled sadržaja) PDF-a kome pripada otvoreni list. Izaberite jednu da idete na njenu stranu. Olovka preimenuje oznaku, a krstić je uklanja. {{ui:Napravi od listova}} pravi jednu oznaku po listu, nazvanu kao što lista listova prikazuje (broj lista i naslov), a {{ui:Dodaj za ovaj list}} dodaje jednu za list na kojem se nalazite. Promene su deo nesačuvanog rada datoteke: {{ui:Sačuvaj}} ih upisuje u kopiju, gde ih svaki PDF pregledač prikazuje.

## Okretanje prikaza

Dva dugmeta za okretanje na desnoj strani trake ispod lista okreću prikaz za četvrtinu kruga u jednom ili drugom smeru, za list nacrtan postrance. Okreće se samo prikaz: PDF i njegova označavanja ostaju kakva jesu, a sledeći list se otvara onako kako je njegov PDF (svaki list pamti sopstveno okretanje dok je skup otvoren). Tekst koji dodate na okrenutom prikazu čita se uspravno kako ga vidite. Da okrenete samu stranu u sačuvanom PDF-u, upotrebite {{ui:Stranice}}, pa {{ui:Okreni stranu u smeru kazaljke}}; pogledajte [Štampanje i promena strana](topic:pages-and-printing).

## Preimenovanje lista

Kada je naziv lista pogrešan ili nedostaje:

1. Prikažite list.
2. Pritisnite {{key:Esc}} dok ništa nije izabrano i alat {{ui:Izbor}} nije uključen. {{ui:Svojstva}} sada prikazuju list.
3. Izaberite {{ui:Preimenuj list}}.
4. Upišite {{ui:Broj lista}} i {{ui:Naslov}}, pa izaberite {{ui:Sačuvaj}}.

Rezultat: lista listova, traka ispod lista i lista označavanja koriste novi naziv, a „Pročitano iz” kaže „Upisano ručno”. Preimenovanje se može opozvati pomoću {{key:Mod+Z}}.

Da se vratite na ono što piše u datoteci, ponovo otvorite {{ui:Preimenuj list}}, obrišite oba polja i izaberite {{ui:Sačuvaj}}.

Kada sačuvate, upisani broj lista postaje oznaka strane u PDF-u, pa drugi PDF pregledači prikazuju „A-101” i u svom okviru za stranu. Ako dodelite broj bilo kojoj strani datoteke, svaka strana te datoteke dobija oznaku u kopiji (upisani broj, inače stara oznaka, inače broj strane). Upisani naslov se čuva za MarkupCraft, ali ga drugi pregledači ne prikazuju.

## Otvorite PDF u TakeoffCraft-u, ili ga donesite ovde

Kada je TakeoffCraft otvoren na istom mestu (u laboratoriji, Try ili onlajn aplikacijama), traka ispod lista ima {{ui:Otvori u programu TakeoffCraft}}. On otvara PDF lista u TakeoffCraft-u na novoj kartici, kao što je otvoren ovde, pa možete meriti količine na njemu. Vaša označavanja ostaju ovde; sačuvajte ih kao i obično.

Dugme {{ui:MarkupCraft}} u TakeoffCraft-u radi isto u suprotnom smeru: PDF se otvara ovde kao da ste izabrali {{ui:Otvori}}. Ako pregledač blokira novu karticu, dozvolite iskačuće prozore za ovaj sajt i ponovo izaberite dugme.
