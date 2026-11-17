---
title: Rješavanje problema
summary: Poruke koje MarkupCraft prikazuje i što učiniti s njima, plus rješenja za stvari koje ne rade.
keywords: problem, pogreška, ne radi, pomoć, poruka, ne otvara se, ne može spremiti, lozinka, zaštićeno, mjerenje odbijeno, kalibracija, izvan mreže, prazno, sporo, izgubljeni markupi, upitnici
from: bb650b39
---

Većina problema objašnjena je u statusnoj traci na dnu zaslona. Najprije je pročitajte.

## Otvaranje datoteka

**„MarkupCraft otvara PDF datoteke. ‚x‘ nije PDF.“**
Odabrali ste ili ispustili nešto drugo. Otvaraju se samo PDF datoteke. Najprije izvezite crteže iz svog CAD programa kao PDF.

**„‚naziv‘ treba lozinku za otvaranje. Otvorite nezaštićenu kopiju.“**
PDF je zaštićen lozinkom. Zatražite od pošiljatelja nezaštićenu kopiju ili ga otvorite u PDF programu u kojem znate lozinku i spremite kopiju bez lozinke.

**„‚naziv‘ se ne može pročitati kao PDF (…)“**
Datoteka je oštećena ili zapravo nije PDF (nepotpuno preuzimanje, privitak e-pošte koji je odrezan). Preuzmite je ponovno. Ako je drugi PDF programi mogu otvoriti, upotrijebite njihovo „spremi kao“ da napravite čistu kopiju i otvorite nju.

**„Neke datoteke nisu se otvorile“**
Kad otvorite više datoteka odjednom, ovaj okvir navodi datoteke koje nisu uspjele i razlog. Ostale su otvorene.

**„PDF čitač se ne može učitati: …“**
PDF mehanizam nije mogao biti preuzet. Na mreži: ponovno učitajte stranicu i pokušajte ponovno; provjerite ne blokira li vatrozid ili blokator sadržaja web-mjesto. Izvan mreže: MarkupCraft nije spremljen za rad izvan mreže u ovom pregledniku (traka na vrhu ne kaže „Spremno za rad izvan mreže“). Povežite se na mrežu, odaberite {{ui:Save for offline}} i pričekajte „Spremno za rad izvan mreže“. Vidi [Rad izvan mreže](common:offline).

**„Neke napomene mogu se na zaslonu prikazati dvaput“ ili „Dodatni podaci o napomenama nisu se mogli pročitati“**
Postojeći komentari u datoteci neobični su. I dalje se otvaraju koliko MarkupCraft može; provjerite ih prije oslanjanja na njih. Spremanje i dalje radi.

**List ima pogrešan naziv ili „stranica 3“**
Vidi [Kako listovi dobivaju nazive](topic:open-a-plan-set#how-sheets-get-their-names). Skenirani listovi nemaju tekst koji bi se mogao pročitati; upotrijebite {{ui:Rename sheet}}.

**Isti listovi pojavljuju se dvaput**
Ista datoteka otvorena je dvaput. Odaberite {{ui:Close}} (najprije spremite ako treba) i ponovno otvorite skup.

## Crtanje i odabir

**Ništa se ne događa kad kliknem na list**
Provjerite koji je alat uključen na alatnoj traci i pročitajte statusnu traku. Kod {{ui:Rectangle}}, {{ui:Ellipse}} i {{ui:Cloud}} klik bez povlačenja ništa ne crta: povucite. Kod {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} i {{ui:Area}} dodaju se točke: završite dvostrukim klikom ili pritiskom na {{key:Enter}}.

**„Poligon treba najmanje 3 točke.“ (ili 2 za polilinije)**
Prije završetka kliknite još točaka.

**„Ništa nije upisano, pa tekst nije dodan.“**
Tekstni okviri i oblačići zadržavaju se samo kad imaju tekst. Nacrtajte ga ponovno i upišite prije klika izvan njega.

**„Dvije točke su iste. Kliknite dvije različite točke.“**
Za linije, strelice, duljine i kalibraciju dva kraja moraju biti razmaknuta. Povucite ili kliknite dvaput na različitim mjestima.

**Ne mogu pomaknuti ili izbrisati markup; ima sivi crtkani okvir**
To je komentar samo za čitanje koji je došao uz datoteku (npr. isticanje teksta). MarkupCraft ga čuva kakav jest: na njega možete samo odgovoriti. Statusna traka kaže „markup(i) samo za čitanje čuvaju se kao u datoteci“.

**Tipke mi upisuju slova u okvir umjesto da biraju alate**
Kursor je u tekstnom okviru (odgovor, polje u {{ui:Properties}}, pretraga lista). Najprije kliknite na prazan dio područja lista ili pritisnite {{key:Esc}} ako uređujete tekst markupa.

**Razmaknica ne pomiče prikaz ili tipke sa strelicama ne rade ništa**
Upravo ste kliknuli gumb na alatnoj traci, pa on još ima tipkovnicu. Umjesto toga povucite srednjom tipkom miša ili jednom kliknite list s uključenim {{ui:Select}}, pa pokušajte ponovno. Vidi i [Tipkovnica i miš](topic:keyboard#when-a-key-does-nothing).

**Štipanje na dodirnom zaslonu ostavilo je trag**
Alat za povlačenje (olovka, oblak, pravokutnik) pokrenuo se prije drugog prsta, a završio prije nego što je otkazan. Pritisnite {{ui:Undo}}. Stavite oba prsta zajedno kad želite zumirati.

## Mjerenje

**„Najprije kalibrirajte ovaj list: odaberite dvije točke poznate međusobne udaljenosti ili odaberite njegovo mjerilo. Zatim mjerite.“**
Svaki list treba vlastito mjerilo prije {{ui:Length}} ili {{ui:Area}}. MarkupCraft je prešao na {{ui:Calibrate}}: kliknite dva kraja poznate mjere i upišite njezinu duljinu ili kliknite gumb mjerila u statusnoj traci i odaberite mjerilo. Vidi [Kalibracija lista i mjerenje](topic:calibrate-and-measure).

**„MarkupCraft ne razumije tu duljinu.“**
Upišite je kao `24'-0"`, `12' 6 1/2"`, `7.2 m` ili `900 mm`. Vidi [Jedinice, duljine i mjerila](topic:units-and-scales).

**Mjere su malo netočne ili potpuno netočne**
- Unaprijed postavljeno mjerilo na PDF-u koji nije u punoj veličini mjeri netočno. Umjesto toga kalibrirajte prema dugoj poznatoj mjeri.
- Separator tisućica pročitan je kao decimalna točka: `1,200 mm` znači 1.2 mm. Upišite `1200 mm`.
- Zumirajte kad kliknete krajeve.
- Crtež možda nije u mjerilu („NTS“).

**„Najprije odaberite grupu brojanja, zatim Shift+klik na oznaku da je uklonite.“**
Odaberite {{ui:Select}}, kliknite grupu brojanja, zatim ponovno odaberite {{ui:Count}} i {{key:Shift}}-klik na točku.

## Spremanje

**„Ovaj PDF je zaštićen (šifriran), pa se kopija s markupima ne može zapisati.“**
Datoteka zabranjuje izmjene. Zatražite nezaštićenu kopiju. U međuvremenu i dalje možete izvesti popis markupa kao CSV ili BCF.

**„PDF pisač se ne može učitati: …“**
Obično ste izvan mreže i aplikacija nije spremljena za rad izvan mreže (u traci na vrhu nema „Spremno za rad izvan mreže“). Vaši markupi su i dalje u kartici: ostavite je otvorenu, povežite se na mrežu i ponovno odaberite {{ui:Save}}. Zatim odaberite {{ui:Save for offline}} da radi izvan mreže sljedeći put; spremljena kopija uključuje PDF pisač.

**„Nije moguće spremiti <file>“**
Okvir prikazuje razlog. Vaši markupi su i dalje u kartici. Pokušajte ponovno; ako se ponavlja, izvezite CSV da komentari ne budu izgubljeni i prijavite poruku.

**Odabrao sam Spremi, ali stigla je samo jedna datoteka**
Preglednik je blokirao dodatna preuzimanja. Potražite obavijest u adresnoj traci i dopustite ovom web-mjestu preuzimanje više datoteka, zatim ponovno spremite.

**Ne mogu pronaći spremljenu datoteku**
Otišla je u mapu preuzimanja vašeg preglednika. Otvorite popis preuzimanja preglednika (u Chromeu i Edgeu, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; u Firefoxu i Safariju, gumb za preuzimanja na alatnoj traci) da vidite gdje je. Vidi [Preglednici i računala](common:browsers).

**Neki tekst u drugim PDF preglednicima prikazuje „?“**
Znakovi izvan zapadnoeuropskog skupa u kopiji se ispisuju kao „?“. Poruka o spremanju ih broji. Vidi [Spremanje PDF-a s markupima](topic:save-the-marked-up-pdf).

**Pečat prikazuje sutrašnji (ili jučerašnji) datum**
Datumi pečata su u UTC-u. Vidi [Pečati i ljepljive bilješke](topic:stamps-and-notes).

## Rad izvan mreže

**Gumb za rad izvan mreže kaže „Nije moguće spremiti“**
Neke datoteke aplikacije nisu se preuzele. Provjerite vezu i ponovno kliknite gumb; broji „Spremanje N od M“ dok ne bude „Spremno za rad izvan mreže“.

**Gumb za rad izvan mreže kaže „Rad izvan mreže nije dostupan“**
Ovaj prozor preglednika ne može čuvati kopiju za rad izvan mreže: privatni je prozor ili računalo čija pravila to blokiraju. Otvorite MarkupCraft u običnom prozoru i pokušajte ponovno.

**Izvan mreže aplikacija je starija verzija**
Kopija za rad izvan mreže je verzija koju ste spremili. Kad ste na mreži, kliknite „Spremno za rad izvan mreže“ i odaberite „Spremi ponovno (preuzmi najnoviju verziju)“. Da oslobodite prostor, odaberite „Ukloni kopiju za rad izvan mreže“. Vidi [Rad izvan mreže](common:offline).

**Pomoć se ne otvara**
Pritisnite {{key:F1}} (na Macu, s **fn**) ili odaberite {{ui:Help}} na traci na vrhu. Radi i izvan mreže.

## Izgubljene stvari

**Moji markupi nestali su nakon zatvaranja ili ponovnog učitavanja kartice**
Ponovno otvorite MarkupCraft u istom pregledniku: nudi vam nespremljeni rad uz „Oporaviti svoj rad?“. Odaberite {{ui:Recover}} i spremite PDF. Kopije se čuvaju do 30 dana; privatni prozor ili brisanje podataka web-mjesta ne ostavlja nijednu. Vidi [Oporavak vašeg rada](common:recover).

**Moje ime, postavke alata ili skrinja s alatima su nestali**
Čuvaju se samo u ovom pregledniku i obrisani su (obrisani podaci web-mjesta, privatni prozor, drugi preglednik ili računalo, ili Safarijevo čišćenje web-mjesta koja neko vrijeme nisu posjećena). Ponovno postavite ime i uvezite izvezenu skrinju. Vidi [Što ostaje u ovom pregledniku](topic:browser-storage).

**„Skrinja s alatima ne može se zadržati u ovom pregledniku (pohrana je isključena ili puna). Izvezite je da je zadržite.“**
Preglednik odbija pohranjivati podatke za ovo web-mjesto (privatni način, pohrana blokirana postavkom ili pravilom, ili puna). Izvezite skrinju nakon promjene i uvezite je sljedeći put.

## Prikaz i brzina

**List je neko vrijeme mutan**
MarkupCraft prikazuje brz, grub prikaz dok zumirate ili pomičete prikaz, i iscrtava ga oštro kratko nakon što prestanete.

**Sve je sporo s velikim skupom**
Zatvorite ostale teške kartice, otvorite manje datoteka odjednom i izbjegavajte zumiranje do maksimuma na ogromnim listovima. Vidi [Rad s nekoliko datoteka odjednom](topic:several-files#big-sets).

**List je taman sa svijetlim linijama**
U {{ui:Model}} temi ste. Odaberite {{ui:Paper}} na traci na vrhu za tamne linije na bijelom. Vaši markupi i spremljeni PDF nisu pogođeni.
