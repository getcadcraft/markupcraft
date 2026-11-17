---
title: Rješavanje problema
summary: Poruke koje MarkupCraft prikazuje i šta da uradiš s njima, plus rješenja za stvari koje ne rade.
keywords: problem, greška, ne radi, pomoć, poruka, neće se otvoriti, ne može se spasiti, lozinka, zaštićeno, mjerenje odbijeno, kalibriraj, van mreže, prazno, sporo, izgubljene oznake, upitnici
from: bb650b39
---

Većina problema je objašnjena u statusnoj traci na dnu ekrana. Prvo je pročitaj.

## Otvaranje datoteka

**"MarkupCraft otvara PDF datoteke. "x" nije PDF."**
Odabrao si ili ispustio nešto drugo. Otvaraju se samo PDF datoteke. Prvo izvezi crteže iz svog CAD programa kao PDF.

**'"name" traži lozinku za otvaranje. Otvori kopiju bez zaštite.'**
PDF je zaštićen lozinkom. Zatraži od pošiljaoca kopiju bez zaštite, ili ga otvori u PDF programu u kojem znaš lozinku i spasi kopiju bez lozinke.

**'"name" se ne može pročitati kao PDF (…)'**
Datoteka je oštećena ili zapravo nije PDF (nepotpuno preuzimanje, prilog iz e-pošte odsječen). Preuzmi je ponovo. Ako je mogu otvoriti drugi PDF programi, koristi njihovo "spasi kao" da napraviš čistu kopiju i otvori nju.

**"Neke datoteke nisu otvorene"**
Kada otvoriš više njih odjednom, ovaj okvir navodi datoteke koje nisu uspjele i zašto. Ostale su otvorene.

**"PDF čitač se nije mogao učitati: …"**
PDF mehanizam nije mogao biti preuzet. Na mreži: ponovo učitaj stranicu i pokušaj opet; provjeri da vatrozid ili blokator sadržaja ne blokira sajt. Van mreže: MarkupCraft nije spašen za rad van mreže u ovom pregledaču (traka na vrhu ne kaže "Spreman za rad van mreže"). Priključi se na mrežu, odaberi {{ui:Spasi za rad van mreže}} i sačekaj "Spreman za rad van mreže". Vidi [Rad van mreže](common:offline).

**"Neke anotacije mogu se prikazati dvaput na ekranu" ili "Dodatni detalji anotacija nisu mogli biti pročitani"**
Postojeći komentari u datoteci su neobični. I dalje se otvaraju koliko MarkupCraft može; provjeri ih prije nego se na njih osloniš. Spašavanje i dalje radi.

**List ima pogrešno ime, ili "stranica 3"**
Vidi [Kako listovi dobijaju imena](topic:open-a-plan-set#how-sheets-get-their-names). Skenirani listovi nemaju tekst koji se može pročitati; koristi {{ui:Preimenuj list}}.

**Isti listovi se pojavljuju dvaput**
Ista datoteka je otvorena dvaput. Odaberi {{ui:Zatvori}} (prvo spasi ako treba) i ponovo otvori set.

## Crtanje i odabir

**Ništa se ne dešava kad kliknem na list**
Provjeri koji je alat pritisnut na traci s alatima i pročitaj statusnu traku. Kod {{ui:Pravougaonik}}, {{ui:Elipsa}} i {{ui:Oblak}}, klik bez prevlačenja ne crta ništa: prevuci. Kod {{ui:Polilinija}}, {{ui:Poligon}}, {{ui:Slobodni oblak}} i {{ui:Površina}}, dodaju se tačke: završi dvostrukim klikom ili s {{key:Enter}}.

**"Poligon treba najmanje 3 tačke." (ili 2 za polilinije)**
Klikni više tačaka prije završetka.

**"Ništa nije upisano, pa tekst nije dodan."**
Tekstualni okviri i oznake s vodilicom se čuvaju samo kad imaju tekst. Nacrtaj ih ponovo i upiši prije klika van.

**"Dvije tačke su iste. Klikni dvije različite tačke."**
Za linije, strelice, dužine i kalibraciju, dva kraja moraju biti razdvojena. Prevuci ili klikni dvaput na različitim mjestima.

**Ne mogu pomjeriti ili izbrisati oznaku; ima sivi isprekidani okvir**
To je komentar samo za čitanje koji je došao s datotekom (na primjer istaknuti tekst). MarkupCraft ga čuva kakav jeste: možeš samo odgovoriti na njega. Statusna traka kaže "oznake samo za čitanje čuvaju se kao u datoteci".

**Tipke upisuju slova u okvir umjesto da biraju alate**
Kursor je u tekstualnom okviru (odgovor, polje u panelu {{ui:Svojstva}}, pretraga lista). Prvo klikni na prazan dio područja lista, ili pritisni {{key:Esc}} ako uređuješ tekst oznake.

**Space ne pomjera pogled, ili strelice ne rade ništa**
Upravo si kliknuo dugme na traci s alatima, pa ono još drži tastaturu. Umjesto toga prevuci srednjim dugmetom miša, ili jednom klikni na list kad je {{ui:Odaberi}} uključen, pa pokušaj ponovo. Vidi i [Tastatura i miš](topic:keyboard#when-a-key-does-nothing).

**Štipanje na ekranu osjetljivom na dodir ostavilo je trag**
Alat za prevlačenje (olovka, oblak, pravougaonik) počeo je prije nego je stigao drugi prst i završio se prije nego je poništen. Pritisni {{ui:Poništi}}. Spusti oba prsta zajedno kad hoćeš da zumiraš.

## Mjerenje

**"Prvo kalibriraj ovaj list: odaberi dvije tačke poznate udaljenosti, ili odaberi njegovu razmjeru. Zatim mjeri."**
Svaki list treba svoju razmjeru prije {{ui:Dužina}} ili {{ui:Površina}}. MarkupCraft je prešao na {{ui:Kalibriraj}}: klikni dva kraja poznate dimenzije i upiši njenu dužinu, ili klikni dugme razmjere u statusnoj traci i odaberi razmjeru. Vidi [Kalibriraj list i mjeri](topic:calibrate-and-measure).

**'MarkupCraft ne razumije tu dužinu.'**
Upiši je ovako: `24'-0"`, `12' 6 1/2"`, `7.2 m` ili `900 mm`. Vidi [Jedinice, dužine i razmjere](topic:units-and-scales).

**Mjerenja su malo pogrešna, ili jako pogrešna**
- Unaprijed postavljena razmjera na PDF-u koji nije pune veličine mjeri pogrešno. Umjesto toga kalibriraj po dugoj poznatoj dimenziji.
- Separator hiljada pročitan je kao decimalna tačka: `1,200 mm` znači 1.2 mm. Upiši `1200 mm`.
- Zumiraj kad klikneš krajeve.
- Crtež možda nije u razmjeri ("NTS").

**"Prvo odaberi grupu brojanja, zatim Shift+klik na oznaku da je ukloniš."**
Odaberi {{ui:Odaberi}}, klikni grupu brojanja, zatim ponovo odaberi {{ui:Brojanje}} i {{key:Shift}}-klikni tačku.

## Spašavanje

**"Ovaj PDF je zaštićen (šifrovan), pa se kopija s oznakama ne može napisati."**
Datoteka zabranjuje izmjene. Zatraži kopiju bez zaštite. U međuvremenu i dalje možeš izvesti listu oznaka kao CSV ili BCF.

**"PDF pisač se nije mogao učitati: …"**
Obično si van mreže, a aplikacija nije spašena za rad van mreže (nema "Spreman za rad van mreže" u traci na vrhu). Tvoje oznake su i dalje u kartici: ostavi je otvorenu, priključi se na mrežu i ponovo odaberi {{ui:Spasi}}. Zatim odaberi {{ui:Spasi za rad van mreže}} da radi van mreže sljedeći put; spašena kopija uključuje PDF pisač.

**"Nije moguće spasiti <file>"**
Okvir pokazuje zašto. Tvoje oznake su i dalje u kartici. Pokušaj ponovo; ako se ponovi, izvezi CSV da komentari ne bi bili izgubljeni, i prijavi poruku.

**Odabrao sam Spasi, ali je stigla samo jedna datoteka**
Tvoj pregledač je blokirao dodatna preuzimanja. Potraži obavještenje u adresnoj traci i dozvoli ovom sajtu da preuzima više datoteka, pa ponovo spasi.

**Ne mogu naći spašenu datoteku**
Otišla je u fasciklu preuzimanja tvog pregledača. Otvori listu preuzimanja pregledača (u Chromeu i Edgeu, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; u Firefoxu i Safariju, dugme za preuzimanja na traci) da vidiš gdje je. Vidi [Pregledači i računari](common:browsers).

**Neki tekst pokazuje "?" u drugim PDF pregledačima**
Znakovi van zapadnoevropskog skupa štampaju se kao "?" u kopiji. Poruka o spašavanju ih broji. Vidi [Spasi PDF s oznakama](topic:save-the-marked-up-pdf).

**Pečat pokazuje sutrašnji (ili jučerašnji) datum**
Datumi pečata su u UTC. Vidi [Pečati i ljepljive bilješke](topic:stamps-and-notes).

## Rad van mreže

**Dugme za rad van mreže kaže "Nije moguće spasiti"**
Neke datoteke aplikacije nisu se preuzele. Provjeri vezu i ponovo klikni dugme; broji "Spašavanje N od M" dok ne bude "Spreman za rad van mreže".

**Dugme za rad van mreže kaže "Rad van mreže nije dostupan"**
Ovaj prozor pregledača ne može čuvati kopiju za rad van mreže: privatni prozor, ili računar čija pravila to blokiraju. Otvori MarkupCraft u običnom prozoru i pokušaj ponovo.

**Van mreže, aplikacija je starija verzija**
Kopija za rad van mreže je verzija koju si spasio. Kad si na mreži, klikni "Spreman za rad van mreže" i odaberi "Spasi ponovo (preuzmi najnoviju verziju)". Da oslobodiš prostor, odaberi "Ukloni kopiju za rad van mreže". Vidi [Rad van mreže](common:offline).

**Pomoć se ne otvara**
Pritisni {{key:F1}} (na Macu, uz **fn**), ili odaberi {{ui:Pomoć}} na traci na vrhu. Radi i van mreže.

## Izgubljene stvari

**Moje oznake su nestale nakon zatvaranja ili ponovnog učitavanja kartice**
Ponovo otvori MarkupCraft u istom pregledaču: nudi nespašeni rad s porukom "Oporaviti tvoj rad?". Odaberi {{ui:Oporavi}} i spasi PDF. Kopije se čuvaju do 30 dana; privatni prozor ili brisanje podataka sajta ne ostavlja nijednu. Vidi [Oporavi svoj rad](common:recover).

**Moje ime, postavke alata ili sanduk s alatima su nestali**
Čuvaju se samo u ovom pregledaču i obrisani su (obrisani podaci sajta, privatni prozor, drugi pregledač ili računar, ili Safarijevo čišćenje sajtova koji se neko vrijeme ne posjećuju). Ponovo postavi ime i uvezi izvezeni sanduk. Vidi [Šta ostaje u ovom pregledaču](topic:browser-storage).

**"Sanduk s alatima nije mogao biti sačuvan u ovom pregledaču (pohrana je isključena ili puna). Izvezi ga da ga sačuvaš."**
Pregledač odbija da čuva podatke za ovaj sajt (privatni režim, pohrana blokirana postavkom ili pravilom, ili puna). Izvezi sanduk nakon promjene, i uvezi ga sljedeći put.

## Prikaz i brzina

**List je neko vrijeme mutan**
MarkupCraft prikazuje brz, grub prikaz dok zumiraš ili pomjeraš pogled, i ponovo ga iscrtava oštro nakon kratkog vremena nakon što staneš.

**Sve je sporo s velikim setom**
Zatvori druge teške kartice, otvori manje datoteka odjednom, i izbjegavaj zumiranje do maksimuma na ogromnim listovima. Vidi [Rad s više datoteka odjednom](topic:several-files#big-sets).

**List je taman sa svijetlim linijama**
Koristiš temu {{ui:Model}}. Odaberi {{ui:Papir}} na traci na vrhu za tamne linije na bijelom. Tvoje oznake i spašeni PDF nisu pogođeni.
