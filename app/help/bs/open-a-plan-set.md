---
title: Otvorite set osnova i krećite se između listova
summary: Otvorite jedan PDF ili više njih, ili počnite s praznim stranicama, pronađite listove po broju ili nazivu, uvećavajte i pomjerajte pogled, i preimenujte list kad datoteka dobije pogrešan naziv.
keywords: otvori, novo, prazna stranica, prazan list, skica, mreža, bez naziva, set osnova, listovi, stranice, minijature, oznake stranica, broj lista, blok s naslovom, preimenuj, kretanje, uvećanje, pomjeranje, uklapanje, traži listove
from: 1e7f4d50
---

## Otvorite set

1. Odaberite {{ui:Open}} na alatnoj traci ili pritisnite {{key:Mod+O}}.
2. U biraču datoteka odaberite svaki PDF iz seta ({{pick:mac=držite ⌘ i kliknite svaku datoteku|windows linux=držite Ctrl i kliknite svaku datoteku}}, ili odaberite opseg uz Shift), pa potvrdite.
   Ili prevucite datoteke iz {{pick:mac=Findera|windows=File Explorera|linux=vašeg upravitelja datoteka}} na područje lista. Dok prevlačite pojavi se „Prevucite PDF-ove da ih otvorite”.
3. Sačekajte dok statusna traka piše „Otvaram <file>…”. Za velike datoteke broji: „(10 od 60 listova)”.

Rezultat: lista {{ui:Sheets}} prikazuje svaku stranicu svake datoteke, redom kojim ste ih otvorili, a statusna traka kaže nešto kao „Otvorene su 3 datoteke (42 lista u setu).” Ako su datoteke već imale komentare, dodaje se koliko ih je pročitano.

Da dodate još datoteka kasnije, otvorite ih na isti način. Pridružuju se na kraju liste.

## Počnite s praznim stranicama

Da skicirate ili pišete bilješke bez crteža, napravite prazne stranice umjesto otvaranja PDF-a:

1. Odaberite {{ui:New}} na alatnoj traci, ili {{ui:Start with a blank page}} na početnom ekranu, ili pritisnite {{key:Mod+N}} tamo gdje vaš pregledač to dozvoljava (desktop aplikacija i Studio to uvijek dozvoljavaju).
2. Odaberite {{ui:Paper size}}: Letter, Tabloid ili ANSI B, ARCH D, ARCH E, A4, A3 ili A1, i {{ui:Portrait}} ili {{ui:Landscape}}.
3. Odaberite {{ui:Grid}}: {{ui:None}}, {{ui:Dots}} ili {{ui:Squares}}. Mreža ide na svakih 1/4 in, s debljom linijom na svakom inču na papiru u inčima, i na svakih 5 mm, s debljom linijom na svakih 10 mm na metričkom papiru. Štampa se na stranici.
4. Upišite koliko {{ui:Pages}} želite, od 1 do 20, pa odaberite {{ui:Create}}.

Rezultat: novi PDF pod nazivom „Untitled-1.pdf” (zatim „Untitled-2.pdf” i tako dalje) otvara se kao svaka druga datoteka, napravljen ovdje na ovom računaru. Svaki alat radi na njemu, a {{ui:Save}} preuzima „Untitled-1 (marked up).pdf”. MarkupCraft pamti vaše izbore za sljedeći put.

Stranice nemaju razmjeru: statusna traka kaže „Nije kalibrirano”. Mreža nije razmjera. Da mjerite, kalibrirajte list ili prvo odaberite razmjeru; pogledajte [Kalibriranje i mjerenje](topic:calibrate-and-measure).

Da dodate stranicu praznom setu, otvorite jedan od njegovih listova i odaberite {{ui:Add a blank page}} ispod liste {{ui:Sheets}}. Nova stranica ima isti papir i mrežu i ide na kraj. Kao i svaka promjena stranice, ne može se poništiti; pogledajte [Štampanje i promjena stranica](topic:pages-and-printing).

## Kako listovi dobijaju imena

MarkupCraft svakom listu daje ime „<broj lista> — <naslov>”, na primjer „A-101 — Tlocrt”, iz prvog od ovih koji nađe:

1. Ime koje ste upisali pomoću {{ui:Rename sheet}} (u nastavku).
2. Oznake stranica samog PDF-a, kad ih je osoba koja je napravila PDF postavila (na primjer „A-101”).
3. Blok s naslovom: MarkupCraft čita tekst stranice i traži nešto što liči na broj lista (A-101, A1.01, M-201A, KA1-1), dajući prednost donjem desnom uglu, desnoj traci i donjem pojasu, i uzima najveći tekst u blizini kao naslov.
4. Inače, naziv datoteke i stranica: „Plans — page 3”.

Da vidite koje je ime korišteno, pritisnite {{key:Esc}} dok ništa nije odabrano i {{ui:Select}} je uključen, pa pogledajte {{ui:Properties}}: „Pročitano iz” kaže „Oznaka stranice”, „Blok s naslovom”, „Naziv datoteke” ili „Upisano ručno”.

:::note
Skenirani listovi i PDF-ovi čiji su natpisi izvezeni kao linije nemaju tekst za čitanje. Imenuju se po datoteci i stranici dok ih ne preimenujete. MarkupCraft još ne može čitati tekst s slika.
:::

## Krećite se između listova

- Kliknite list u {{ui:Sheets}}.
- Pritisnite {{key:PageDown}} za sljedeći list i {{key:PageUp}} za prethodni, ili koristite strelice u traci ispod lista.
- Upišite u {{ui:Search sheets}}: dio broja („A-2”), riječ iz naslova („roof”), ili naziv datoteke. Lista se sužava dok kucate („4 od 42”). Pritisnite {{key:Enter}} da otvorite prvi pogodak. Obrišite polje da ponovo vidite sve listove.

Svaki list čuva svoje uvećanje i položaj dok ne zatvorite set.

## Uvećanje i pomjeranje

:::mouse
- **Uvećanje:** okrenite točkić iznad lista. Uvećava se oko pokazivača. Ili pritisnite {{key:Plus}} i {{key:Minus}} (također s {{key:Mod}}), ili koristite dugmad za uvećanje. Upišite tačan procenat u polje za uvećanje.
- **Uklapanje:** {{ui:Fit page}} ({{key:Mod+0}}) prikazuje cijeli list; {{ui:Fit width}} ({{key:Mod+9}}) popunjava širinu.
- **Pomjeranje:** prevucite srednjim dugmetom (točkićem), ili prevucite desnim dugmetom, ili držite {{key:Space}} i prevucite, ili odaberite {{ui:Pan}} ({{key:H}}) i prevucite. Kad ništa nije odabrano, i tasteri sa strelicama pomjeraju list.
:::

:::mac mouse
Na Mac trackpadu, skrolanje sa dva prsta uvećava (ne pomjera list). Da pomjerate, držite {{key:Space}} i prevucite jednim prstom, ili pređite na {{ui:Pan}} pomoću {{key:H}}. Štipanje uvećava u pregledačima Chrome, Edge i Firefox.
:::

:::touch
- **Uvećanje i pomjeranje:** stavite dva prsta na list. Raširite ili stisnite ih da uvećate oko tačke između njih, a pomjerite ih zajedno da pomjerate. Oba se dešavaju istovremeno.
- **Pomjeranje jednim prstom:** prvo odaberite {{ui:Pan}}. Uz bilo koji drugi alat, jedan prst crta ili bira.
- {{ui:Fit page}} i {{ui:Fit width}} su u traci ispod lista.
:::

Možete smanjiti prikaz mnogo ispod cijelog lista i uvećati do 6400%. List se ponovo iscrta oštro nakon što prestanete s pomjeranjem.

## Zabilješke

{{ui:Bookmarks}}, na vrhu panela {{ui:Sheets}}, prikazuje zabilješke (pregled sadržaja) PDF-a kojem pripada otvoreni list. Odaberite jednu da odete na njenu stranicu. Olovka preimenuje zabilješku, a križić je uklanja. {{ui:Build from sheets}} pravi jednu zabilješku po listu, nazvanu kako je prikazuje lista listova (broj lista i naslov), a {{ui:Add for this sheet}} dodaje jednu za list na kojem ste. Promjene su dio nesačuvanog rada na datoteci: {{ui:Save}} ih upisuje u kopiju, gdje ih svaki PDF pregledač prikazuje.

## Okrenite prikaz

Dva dugmeta za okretanje s desne strane trake ispod lista okreću prikaz za četvrt okreta u jednom ili drugom smjeru, za list nacrtan vodoravno. Okreće se samo prikaz: PDF i njegova označavanja ostaju kakva jesu, a sljedeći list se otvara onako kako je otvoren njegov PDF (svaki list pamti svoj okret dok je set otvoren). Tekst koji dodate na okrenutom prikazu čita se uspravno kako ga vidite. Da okrenete samu stranicu u spašenom PDF-u, koristite {{ui:Pages}}, pa {{ui:Rotate page clockwise}}; pogledajte [Štampanje i promjena stranica](topic:pages-and-printing).

## Preimenujte list

Kad je ime lista pogrešno ili nedostaje:

1. Prikažite list.
2. Pritisnite {{key:Esc}} dok ništa nije odabrano i alat {{ui:Select}} nije uključen. {{ui:Properties}} sada prikazuje list.
3. Odaberite {{ui:Rename sheet}}.
4. Upišite {{ui:Sheet number}} i {{ui:Title}}, pa odaberite {{ui:Save}}.

Rezultat: lista listova, traka ispod lista i lista označavanja koriste novo ime, a „Pročitano iz” kaže „Upisano ručno”. Preimenovanje se može poništiti pomoću {{key:Mod+Z}}.

Da se vratite na ono što piše u datoteci, ponovo otvorite {{ui:Rename sheet}}, obrišite oba polja i odaberite {{ui:Save}}.

Kad spašavate, upisani broj lista postaje oznaka stranice u PDF-u, pa drugi PDF pregledači prikazuju „A-101” u svom okviru stranice. Ako date broj bilo kojoj stranici datoteke, svaka stranica te datoteke dobija oznaku u kopiji (njen upisani broj, inače njena stara oznaka, inače njen broj stranice). Upisani naslov se čuva za MarkupCraft, ali ga drugi pregledači ne prikazuju.

## Odnesite PDF u TakeoffCraft ili ga vratite ovdje

Kad je TakeoffCraft otvoren na istom mjestu (laboratorij, Try ili online aplikacije), traka ispod lista ima {{ui:Open in TakeoffCraft}}. Otvara PDF lista u aplikaciji TakeoffCraft, u novoj kartici, kako je otvoren ovdje, da biste mogli mjeriti količine na njemu. Vaša označavanja ostaju ovdje; spasite ih kao i obično.

Dugme {{ui:MarkupCraft}} u aplikaciji TakeoffCraft radi isto u suprotnom smjeru: PDF se otvara ovdje kao da ste odabrali {{ui:Open}}. Ako pregledač blokira novu karticu, dozvolite iskačuće prozore za ovu stranicu i ponovo odaberite dugme.
