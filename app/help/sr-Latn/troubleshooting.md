---
title: Rešavanje problema
summary: Poruke koje MarkupCraft prikazuje i šta da radite u vezi sa njima, plus rešenja za stvari koje izgleda ne rade.
keywords: problem, greška, ne radi, pomoć, poruka, ne otvara se, ne može da sačuva, lozinka, zaštićeno, merenje odbijeno, kalibracija, van mreže, prazno, sporo, izgubljena označavanja, upitnici
from: bb650b39
---

Većina problema objašnjena je u statusnoj traci na dnu ekrana. Najpre je pročitajte.

## Otvaranje datoteka

**„MarkupCraft otvara PDF datoteke. ‚x‘ nije PDF.“**
Izabrali ste ili prevukli nešto drugo. Otvaraju se samo PDF datoteke. Najpre izvezite crteže iz vašeg CAD programa kao PDF.

**„"name" zahteva lozinku za otvaranje. Otvorite kopiju bez zaštite.“**
PDF je zaštićen lozinkom. Zatražite od pošiljaoca kopiju bez zaštite, ili je otvorite u PDF programu u kojem znate lozinku i sačuvajte kopiju bez lozinke.

**„"name" nije moguće pročitati kao PDF (…)“**
Datoteka je oštećena ili nije stvarno PDF (nepotpuno preuzimanje, prilog iz e-pošte koji je odsečen). Preuzmite je ponovo. Ako je drugi PDF programi mogu otvoriti, upotrebite njihovo „sačuvaj kao“ da napravite čistu kopiju i otvorite nju.

**„Neke datoteke nisu otvorene“**
Kada otvarate više datoteka odjednom, ovaj okvir navodi datoteke koje nisu uspele i zašto. Ostale su otvorene.

**„Čitač PDF-a nije mogao da se učita: …“**
PDF mašina nije mogla da se preuzme. Na mreži: ponovo učitajte stranicu i pokušajte ponovo; proverite da li vatrozid ili blokator sadržaja ne blokira sajt. Van mreže: MarkupCraft nije sačuvan za rad van mreže u ovom pregledaču (traka na vrhu ne kaže „Spremno za rad van mreže“). Povežite se na mrežu, izaberite {{ui:Sačuvaj za rad van mreže}} i sačekajte „Spremno za rad van mreže“. Pogledajte [Rad van mreže](common:offline).

**„Neke napomene mogu se prikazati dvaput na ekranu“ ili „Dodatni detalji napomene nisu mogli da se pročitaju“**
Postojeći komentari u datoteci su neobični. Oni se i dalje otvaraju koliko MarkupCraft može; proverite ih pre nego što se na njih oslonite. Čuvanje i dalje radi.

**List ima pogrešno ime, ili „strana 3“**
Pogledajte [Kako listovi dobijaju imena](topic:open-a-plan-set#how-sheets-get-their-names). Skenirani listovi nemaju tekst koji se može pročitati; upotrebite {{ui:Preimenuj list}}.

**Isti listovi se pojavljuju dvaput**
Ista datoteka je otvorena dvaput. Izaberite {{ui:Zatvori}} (prvo sačuvajte ako je potrebno) i ponovo otvorite skup.

## Crtanje i izbor

**Ništa se ne dešava kada kliknem na list**
Proverite koji je alat pritisnut na traci sa alatima i pročitajte statusnu traku. Sa {{ui:Pravougaonik}}, {{ui:Elipsa}} i {{ui:Oblak}}, klik bez prevlačenja ništa ne crta: prevucite. Sa {{ui:Polilinija}}, {{ui:Poligon}}, {{ui:Slobodni oblak}} i {{ui:Površina}}, dodaju se tačke: završite dvostrukim klikom ili sa {{key:Enter}}.

**„Poligonu su potrebne najmanje 3 tačke.“ (ili 2 za polilinije)**
Kliknite još tačaka pre završetka.

**„Ništa nije ukucano, pa tekst nije dodat.“**
Tekstualni okviri i oznake čuvaju se samo kada imaju tekst. Nacrtajte ponovo i ukucajte pre nego što kliknete van.

**„Dve tačke su iste. Kliknite dve različite tačke.“**
Za linije, strelice, dužine i kalibraciju, dva kraja moraju biti razdvojena. Prevucite ili kliknite dvaput na različitim mestima.

**Ne mogu da pomerim ili obrišem označavanje; ima sivi isprekidani okvir**
To je komentar samo za čitanje koji je došao uz datoteku (na primer istaknut tekst). MarkupCraft ga čuva kakav jeste: možete mu samo odgovoriti. Statusna traka kaže „označavanja samo za čitanje čuvaju se kao u datoteci“.

**Tasteri mi ukucavaju slova u polje umesto da biraju alate**
Kursor je u tekstualnom polju (odgovor, polje u {{ui:Svojstva}}, pretraga lista). Najpre kliknite na prazan deo područja lista, ili pritisnite {{key:Esc}} ako uređujete tekst označavanja.

**Space ne pomera pogled, ili strelice ne rade ništa**
Upravo ste kliknuli dugme na traci sa alatima, pa ono još ima tastaturu. Umesto toga prevucite srednjim dugmetom miša, ili jednom kliknite list uz uključen {{ui:Izbor}}, pa pokušajte ponovo. Pogledajte i [Tastatura i miš](topic:keyboard#when-a-key-does-nothing).

**Štipanje na ekranu osetljivom na dodir ostavilo je trag**
Alat za prevlačenje (olovka, oblak, pravougaonik) počeo je pre nego što je stigao drugi prst, i završio se pre nego što je poništen. Pritisnite {{ui:Opozovi}}. Spustite oba prsta zajedno kada želite da uvećate.

## Merenje

**„Najpre kalibrišite ovaj list: izaberite dve tačke poznatog rastojanja, ili izaberite njegovu razmeru. Zatim merite.“**
Svaki list treba svoju razmeru pre {{ui:Dužina}} ili {{ui:Površina}}. MarkupCraft je prešao na {{ui:Kalibriši}}: kliknite dva kraja poznate dimenzije i ukucajte njenu dužinu, ili kliknite dugme razmere u statusnoj traci i izaberite razmeru. Pogledajte [Kalibrišite list i merite](topic:calibrate-and-measure).

**„MarkupCraft ne razume tu dužinu.“**
Ukucajte je kao `24'-0"`, `12' 6 1/2"`, `7.2 m` ili `900 mm`. Pogledajte [Jedinice, dužine i razmere](topic:units-and-scales).

**Merenja su malo pogrešna, ili jako pogrešna**
- Unapred zadata razmera na PDF-u koji nije u punoj veličini meri pogrešno. Umesto toga kalibrišite iz duge poznate dimenzije.
- Separator hiljada je pročitan kao decimalni zarez: `1,200 mm` znači 1.2 mm. Ukucajte `1200 mm`.
- Uvećajte kada kliknete krajeve.
- Crtež možda nije u razmeri („NTS“).

**„Najpre izaberite grupu brojanja, pa Shift+klik na oznaku da je uklonite.“**
Izaberite {{ui:Izbor}}, kliknite grupu brojanja, pa ponovo izaberite {{ui:Brojanje}} i kliknite na tačku uz {{key:Shift}}-klik.

## Čuvanje

**„Ovaj PDF je zaštićen (šifrovan), pa se označena kopija ne može napisati.“**
Datoteka zabranjuje izmene. Zatražite kopiju bez zaštite. U međuvremenu i dalje možete izvesti spisak označavanja kao CSV ili BCF.

**„PDF pisač nije mogao da se učita: …“**
Obično ste van mreže, a aplikacija nije sačuvana za rad van mreže (nema „Spremno za rad van mreže“ na traci na vrhu). Vaša označavanja su i dalje u kartici: ostavite je otvorenu, povežite se na mrežu i ponovo izaberite {{ui:Sačuvaj}}. Zatim izaberite {{ui:Sačuvaj za rad van mreže}} da radi van mreže sledeći put; sačuvana kopija uključuje PDF pisač.

**„Nije moguće sačuvati <file>“**
Okvir pokazuje zašto. Vaša označavanja su i dalje u kartici. Pokušajte ponovo; ako se ponavlja, izvezite CSV da komentari ne bi bili izgubljeni, i prijavite poruku.

**Izabrao sam Sačuvaj, ali je stigla samo jedna datoteka**
Pregledač je blokirao dodatna preuzimanja. Potražite obaveštenje u adresnoj traci i dozvolite ovom sajtu da preuzima više datoteka, pa ponovo sačuvajte.

**Ne mogu da pronađem sačuvanu datoteku**
Otišla je u fasciklu preuzimanja vašeg pregledača. Otvorite spisak preuzimanja pregledača (u Chrome i Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; u Firefox i Safari, dugme preuzimanja na traci) da vidite gde je. Pogledajte [Pregledači i računari](common:browsers).

**Neki tekst pokazuje „?“ u drugim PDF pregledačima**
Znakovi van zapadnoevropskog skupa štampaju se kao „?“ u kopiji. Poruka o čuvanju ih broji. Pogledajte [Sačuvajte označeni PDF](topic:save-the-marked-up-pdf).

**Pečat pokazuje sutrašnji (ili jučerašnji) datum**
Datumi na pečatima su u UTC. Pogledajte [Pečati i samolepljive beleške](topic:stamps-and-notes).

## Rad van mreže

**Dugme za rad van mreže kaže „Nije moguće sačuvati“**
Neke datoteke aplikacije nisu preuzete. Proverite vezu i ponovo kliknite dugme; ono broji „Čuvanje N od M“ dok ne bude „Spremno za rad van mreže“.

**Dugme za rad van mreže kaže „Rad van mreže nije dostupan“**
Ovaj prozor pregledača ne može da čuva kopiju za rad van mreže: privatni prozor, ili računar čija pravila to blokiraju. Otvorite MarkupCraft u običnom prozoru i pokušajte ponovo.

**Van mreže, aplikacija je starija verzija**
Kopija za rad van mreže je verzija koju ste sačuvali. Kada ste na mreži, kliknite „Spremno za rad van mreže“ i izaberite „Sačuvaj ponovo (preuzmi najnoviju verziju)“. Da oslobodite prostor, izaberite „Ukloni kopiju za rad van mreže“. Pogledajte [Rad van mreže](common:offline).

**Pomoć se ne otvara**
Pritisnite {{key:F1}} (na Mac-u, uz **fn**), ili izaberite {{ui:Pomoć}} na traci na vrhu. Radi i van mreže.

## Izgubljene stvari

**Moja označavanja su nestala posle zatvaranja ili ponovnog učitavanja kartice**
Ponovo otvorite MarkupCraft u istom pregledaču: nudi vam nesačuvani rad uz „Oporaviti vaš rad?“. Izaberite {{ui:Oporavi}} i sačuvajte PDF. Kopije se čuvaju do 30 dana; privatni prozor ili brisanje podataka sajta ne ostavlja ništa. Pogledajte [Oporavak rada](common:recover).

**Moje ime, podešavanja alata ili kutija sa alatima su nestali**
Čuvaju se samo u ovom pregledaču i obrisani su (obrisani podaci sajta, privatni prozor, drugi pregledač ili računar, ili Safari-jevo čišćenje sajtova koji dugo nisu posećeni). Ponovo podesite ime i uvezite izvezenu kutiju. Pogledajte [Šta ostaje u ovom pregledaču](topic:browser-storage).

**„Kutija sa alatima ne može se čuvati u ovom pregledaču (skladište je isključeno ili puno). Izvezite je da je sačuvate.“**
Pregledač odbija da čuva podatke za ovaj sajt (privatni režim, skladište blokirano podešavanjem ili pravilom, ili puno). Izvezite kutiju posle izmene i uvezite je sledeći put.

## Prikaz i brzina

**List na trenutak izgleda mutno**
MarkupCraft prikazuje brz, grub prikaz dok uvećavate ili pomerate pogled, i ponovo ga crta oštro čim prestanete.

**Sve je sporo sa velikim skupom**
Zatvorite druge teške kartice, otvorite manje datoteka odjednom i izbegavajte uvećanje do maksimuma na ogromnim listovima. Pogledajte [Rad sa više datoteka istovremeno](topic:several-files#big-sets).

**List je taman sa svetlim linijama**
Vi ste u temi {{ui:Model}}. Izaberite {{ui:Papir}} na traci na vrhu za tamne linije na belom. Vaša označavanja i sačuvani PDF nisu time pogođeni.
