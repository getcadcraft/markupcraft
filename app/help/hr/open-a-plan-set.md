---
title: Otvorite skup listova i krećite se između listova
summary: Otvorite jedan PDF ili više njih ili počnite s praznim stranicama, pronađite listove prema broju ili nazivu, zumirajte i pomičite prikaz te preimenujte list kad datoteka dobije krivi naziv.
keywords: otvori, novo, prazna stranica, prazan list, skica, mreža, bez naziva, skup listova, listovi, stranice, sličice, oznake stranica, broj lista, zaglavlje, preimenuj, kretanje, zumiranje, pomicanje, prilagodi, traži listove
from: 1e7f4d50
---

## Otvorite skup

1. Odaberite {{ui:Otvori}} na alatnoj traci ili pritisnite {{key:Mod+O}}.
2. U biraču datoteka odaberite svaki PDF iz skupa ({{pick:mac=držite ⌘ i kliknite svaku datoteku|windows linux=držite Ctrl i kliknite svaku datoteku}}, ili odaberite raspon uz Shift), zatim potvrdite.
   Ili povucite datoteke u područje lista iz {{pick:mac=programa Finder|windows=programa File Explorer|linux=vašeg upravitelja datoteka}}. Dok povlačite, pojavljuje se „Ispustite PDF-ove da ih otvorite“.
3. Pričekajte dok traka statusa ne prikaže „Otvaranje <file>…“. Za velike datoteke broji: „(10 od 60 listova)“.

Rezultat: popis {{ui:Listovi}} prikazuje svaku stranicu svake datoteke, redom kojim ste ih otvorili, a traka statusa kaže nešto poput „Otvoreno datoteka: 3 (listova u skupu: 42).“ Ako su datoteke već imale komentare, dodaje se i koliko ih je pročitano.

Kasnije dodajte još datoteka u skup na isti način. Dodaju se na kraj popisa.

## Počnite s praznim stranicama

Za skicu ili bilješke bez crteža napravite prazne stranice umjesto otvaranja PDF-a:

1. Odaberite {{ui:Novo}} na alatnoj traci ili {{ui:Započni praznom stranicom}} na početnom zaslonu, ili pritisnite {{key:Mod+N}} ako to vaš preglednik dopušta (desktop aplikacija i Studio to uvijek dopuštaju).
2. Odaberite {{ui:Veličina papira}}: Letter, Tabloid ili ANSI B, ARCH D, ARCH E, A4, A3 ili A1, te {{ui:Okomito}} ili {{ui:Vodoravno}}.
3. Odaberite {{ui:Mreža}}: {{ui:Nema}}, {{ui:Točke}} ili {{ui:Kvadrati}}. Mreža je svakih 1/4 in, s debljom linijom svakog inča na inčnom papiru, a svakih 5 mm, s debljom linijom svakih 10 mm, na metričkom papiru. Ispisuje se na stranici.
4. Upišite koliko {{ui:Stranice}} želite, od 1 do 20, zatim odaberite {{ui:Izradi}}.

Rezultat: nova PDF datoteka pod nazivom „Untitled-1.pdf“ (zatim „Untitled-2.pdf“ i tako dalje) otvara se kao i svaka druga datoteka, izrađena ovdje na ovom računalu. Svi alati rade na njoj, a {{ui:Spremi}} preuzima „Untitled-1 (marked up).pdf“. MarkupCraft pamti vaše odabire za sljedeći put.

Stranice nemaju mjerilo: traka statusa kaže „Nije kalibrirano“. Mreža nije mjerilo. Za mjerenje prvo kalibrirajte list ili odaberite mjerilo; pogledajte [Kalibracija i mjerenje](topic:calibrate-and-measure).

Da dodate stranicu praznom skupu, otvorite jedan od njegovih listova i odaberite {{ui:Dodaj praznu stranicu}} ispod popisa {{ui:Listovi}}. Nova stranica ima isti papir i mrežu i dolazi na kraj. Kao i svaka promjena stranice, ne može se poništiti; pogledajte [Ispis i promjena stranica](topic:pages-and-printing).

## Kako listovi dobivaju nazive

MarkupCraft svakom listu daje naziv „<sheet number> — <title>“, na primjer „A-101 — Tlocrt“, iz prvog od ovih koji pronađe:

1. Naziv koji ste upisali pomoću {{ui:Preimenuj list}} (u nastavku).
2. Oznake stranica samog PDF-a, kad ih je postavila osoba koja je napravila PDF (na primjer „A-101“).
3. Zaglavlje: MarkupCraft čita tekst stranice i traži nešto što izgleda kao broj lista (A-101, A1.01, M-201A, KA1-1), dajući prednost donjem desnom kutu, desnoj traci i donjoj traci. Najveći tekst u blizini uzima kao naslov.
4. Inače naziv datoteke i stranica: „Plans — stranica 3“.

Da vidite koji je korišten, pritisnite {{key:Esc}} dok ništa nije odabrano i {{ui:Odabir}} je uključen, zatim pogledajte {{ui:Svojstva}}: „Pročitano iz“ kaže „Oznaka stranice“, „Zaglavlje (crteža)“, „Naziv datoteke“ ili „Upisano ručno“.

:::note
Skenirani listovi i PDF-ovi čiji su natpisi izvezeni kao linije nemaju tekst koji se može čitati. Imenuju se prema datoteci i stranici dok ih ne preimenujete. MarkupCraft zasad ne može čitati tekst sa slika.
:::

## Kretanje između listova

- Kliknite list u {{ui:Listovi}}.
- Pritisnite {{key:PageDown}} za sljedeći list i {{key:PageUp}} za prethodni, ili upotrijebite strelice u traci ispod lista.
- Upišite u {{ui:Traži listove}}: dio broja („A-2“), riječ iz naslova („krov“) ili naziv datoteke. Popis se sužava dok tipkate („4 od 42“). Pritisnite {{key:Enter}} da otvorite prvi pogodak. Obrišite okvir da ponovno vidite sve listove.

Svaki list pamti svoj zum i položaj dok ne zatvorite skup.

## Zumiranje i pomicanje

:::mouse
- **Zumiranje:** okrenite kotačić iznad lista. Zumira oko pokazivača. Ili pritisnite {{key:Plus}} i {{key:Minus}} (također s {{key:Mod}}) ili upotrijebite gumbe za zum. Upišite točan postotak u okvir za zum.
- **Prilagodba:** {{ui:Prilagodi stranicu}} ({{key:Mod+0}}) prikazuje cijeli list; {{ui:Prilagodi širinu}} ({{key:Mod+9}}) popunjava širinu.
- **Pomicanje:** povucite srednjom tipkom (kotačićem) ili desnom tipkom, ili držite {{key:Space}} i povucite, ili odaberite {{ui:Pan}} ({{key:H}}) i povucite. Ako ništa nije odabrano, i tipke sa strelicama pomiču list.
:::

:::mac mouse
Na Mac trackpadu dvoprsto pomicanje zumira (ne pomiče list). Za pomicanje držite {{key:Space}} i povucite jednim prstom ili prebacite na {{ui:Pan}} tipkom {{key:H}}. Sažimanje prstima zumira u Chromeu, Edgeu i Firefoxu.
:::

:::touch
- **Zum i pomicanje:** stavite dva prsta na list. Raširite ih ili stisnite da zumirate oko točke između njih, a pomaknite ih zajedno da pomičete. Oboje se događa istodobno.
- **Pomicanje jednim prstom:** prvo odaberite {{ui:Pan}}. Uz bilo koji drugi alat jedan prst crta ili odabire.
- {{ui:Prilagodi stranicu}} i {{ui:Prilagodi širinu}} nalaze se u traci ispod lista.
:::

Možete zumirati daleko izvan cijelog lista i do 6400%. List se nakon trenutka kad prestanete micati ponovno iscrta oštro.

## Knjižne oznake

{{ui:Knjižne oznake}}, na vrhu ploče {{ui:Listovi}}, prikazuje oznake (strukturu) PDF-a kojem pripada otvoreni list. Odaberite jednu da idete na njezinu stranicu. Olovka preimenuje oznaku, a križić je uklanja. {{ui:Izgradi iz listova}} pravi jednu oznaku po listu, nazvanu kako je prikazano na popisu listova (broj lista i naslov), a {{ui:Dodaj za ovaj list}} dodaje jednu za list na kojem ste. Promjene su dio nespremljenog rada datoteke: {{ui:Spremi}} ih upisuje u kopiju, u kojoj ih svaki PDF preglednik prikazuje.

## Okretanje prikaza

Dva gumba za okretanje s desne strane trake ispod lista okreću prikaz za četvrtinu okreta u jednu ili drugu stranu, za list nacrtan vodoravno. Okreće se samo prikaz: PDF i njegove oznake ostaju kakvi jesu, a sljedeći list otvara se onako kako je otvoren njegov PDF (svaki list pamti vlastito okretanje dok je skup otvoren). Tekst koji dodate na okrenutom prikazu čita se uspravno kako ga vidite. Da biste okrenuli samu stranicu u spremljenom PDF-u, upotrijebite {{ui:Stranice}}, zatim {{ui:Zakreni stranicu udesno}}; pogledajte [Ispis i promjena stranica](topic:pages-and-printing).

## Preimenujte list

Kad je naziv lista krivi ili nedostaje:

1. Prikažite list.
2. Pritisnite {{key:Esc}} dok ništa nije odabrano i alat {{ui:Odabir}} nije uključen. {{ui:Svojstva}} sada prikazuju list.
3. Odaberite {{ui:Preimenuj list}}.
4. Upišite {{ui:Broj lista}} i {{ui:Naslov}}, zatim odaberite {{ui:Spremi}}.

Rezultat: popis listova, traka ispod lista i popis oznaka koriste novi naziv, a „Pročitano iz“ kaže „Upisano ručno“. Preimenovanje se može poništiti pomoću {{key:Mod+Z}}.

Da se vratite na ono što piše u datoteci, ponovno otvorite {{ui:Preimenuj list}}, obrišite oba okvira i odaberite {{ui:Spremi}}.

Kad spremate, upisani broj lista postaje oznaka stranice u PDF-u, pa drugi PDF prikazi pokazuju „A-101“ i u svom okviru stranice. Ako dodate broj bilo kojoj stranici datoteke, svaka stranica te datoteke dobiva oznaku u kopiji (upisani broj, inače njezina stara oznaka, inače broj stranice). Upisani naslov zadržava se za MarkupCraft, ali ga drugi prikazi ne prikazuju.

## Odnesite PDF u TakeoffCraft ili ga vratite ovdje

Kad je TakeoffCraft otvoren na istom mjestu (lab, Try ili online aplikacije), traka ispod lista ima {{ui:Otvori u TakeoffCraftu}}. Otvara PDF lista u TakeoffCraftu u novoj kartici, kao što je otvoren ovdje, pa možete mjeriti količine na njemu. Vaše oznake ostaju ovdje; spremite ih kao i obično.

Gumb {{ui:MarkupCraft}} u TakeoffCraftu radi isto u drugom smjeru: PDF se otvara ovdje kao da ste odabrali {{ui:Otvori}}. Ako preglednik blokira novu karticu, dopustite skočne prozore za ovo mjesto i ponovno odaberite gumb.
