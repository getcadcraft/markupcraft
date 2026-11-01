---
title: Datoteke koje MarkupCraft otvara i čuva
summary: PDF-ovi na ulazu, PDF kopija sa označavanjima na izlazu, plus CSV, BCF i datoteke sanduka sa alatkama; gde ide svaka, na mreži i van nje.
keywords: pdf, otvori, sačuvaj, izvezi, preuzmi, csv, bcf, bcfzip, json, sanduk sa alatkama, vrste datoteka, formati, otpremi, lozinka, šifrovano
from: b3045b4c
---

## Šta MarkupCraft otvara

| Datoteka | Kako | Šta se dešava |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open}}, {{key:Mod+O}}, ili prevuci u oblast lista. Više odjednom je u redu. | Svaka strana postaje list. Označavanja koja već postoje u datoteci se učitavaju (dole). |
| Sanduk sa alatkama (`.json`) | Kartica {{ui:Tools}}, zatim {{ui:Import}} | Alatke se dodaju u tvoj sanduk. Videti [Sanduk sa alatkama](topic:tool-chest). |

Sve ostalo se odbija porukom „MarkupCraft otvara PDF datoteke.“ u statusnoj traci. Ako prevučeš mešavinu, PDF-ovi se otvore, a statusna traka kaže koliko datoteka nije PDF.

### Označavanja koja već postoje u PDF-u

- **Označavanja koja je MarkupCraft sačuvao** vraćaju se tačno: tip, stil, autor, datumi, status, odgovori, broj stavke za nedostatke, razmera lista i nazivi listova koje si uneo.
- **Komentari iz drugih PDF programa** takođe se čitaju. Pravougaonici, elipse, linije i strelice, polilinije, poligoni, potezi olovkom (mastilo), tekstualna polja i lepljive beleške postaju obična označavanja u MarkupCraft-u koja se mogu menjati. Njihovi odgovori i statusi pregleda se prenose.
- **Sve ostalo** (tekstualna isticanja napravljena selektovanjem teksta, pečati drugih programa i ostale vrste) prikazuje se kakvo jeste, označeno kao samo za čitanje. Možeš ga izabrati, videti u listi označavanja i odgovoriti na njega, ali ne i pomeriti, menjati ili izbrisati.
- Veze i polja za unos ostaju netaknuti i nisu navedeni.
- Razmera koju je sačuvao drugi program (prozor za merenje) koristi se kao razmera lista kada MarkupCraft razume njegovu jedinicu.

### Datoteke koje se ne otvaraju

- PDF kojem treba lozinka: ‚„name“ treba lozinku za otvaranje. Otvori kopiju bez zaštite.‘
- Oštećena datoteka ili ona koja nije pravi PDF: ‚„name“ nije moglo da se pročita kao PDF (…)‘
- PDF koji se otvara, ali je zaštićen od izmena, otvara se normalno. Čuvanje se za njega odbija (videti dole).

Kada se otvori više datoteka odjednom, one koje rade se otvaraju, a okvir pod nazivom „Neke datoteke nisu otvorene“ navodi ostale.

## Šta MarkupCraft čuva

Čuvanje je uvek **preuzimanje** nove datoteke. Veb stranica ne može da prepiše datoteku na tvom računaru, a MarkupCraft nikad ne menja tvoj original.

| Ti biraš | Dobijaš | Napomene |
|---|---|---|
| {{ui:Save}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Kopija originalnog PDF-a sa svakim označavanjem upisanim kao pravi PDF komentar. Ponovno čuvanje datoteke "(marked up)" zadržava isto ime; nikad ne postaje "(marked up) (marked up)". Videti [Sačuvaj PDF sa označavanjima](topic:save-the-marked-up-pdf). |
| Kartica {{ui:Markups}}, zatim {{ui:CSV}} | "<name> markups.csv" | Označavanja kako su navedena (filteri se primenjuju). |
| Kartica {{ui:Markups}}, zatim {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 za alate za BIM koordinaciju, snimak za svako označavanje. Videti [Osnove BCF-a](topic:bcf-basics). |
| Kartica {{ui:Punch list}}, zatim {{ui:Export CSV}} | "<name> punch list.csv" | Stavke za nedostatke po rednom broju. |
| Kartica {{ui:Tools}}, zatim {{ui:Export}} | "MarkupCraft tool chest.json" | Tvoj sanduk sa alatkama, za deljenje ili čuvanje. |

"<name>" je naziv prve otvorene PDF datoteke bez „.pdf“.

CSV datoteke se otvaraju u bilo kom tabelarnom programu. Kodirane su kao UTF-8 sa oznakom koju tabelarni programi traže, pa se imena sa dijakriticima ispravno prikazuju. Ćelija koja počinje sa =, +, - ili @ dobija vodeći apostrof, da je tabelarni program nikad ne izvrši kao formulu.

## Gde idu preuzimanja

Tvoj pregledač odlučuje: obično fascikla Preuzimanja, ili pita svaki put ako si tako podesio. Videti [Pregledači i računari](common:browsers#what-differs-between-browsers).

:::chromium
Kada sačuvaš sve izmenjene datoteke jednog skupa odjednom, Chrome i Edge mogu pitati da li ovaj sajt sme da preuzme više datoteka. Izaberi {{ui:Allow}}, inače dobijaš samo prvu kopiju.
:::

:::safari
Na iPad-u Safari pita pre svakog preuzimanja i stavlja datoteku u aplikaciju Files, u fasciklu Preuzimanja. Na Mac-u ide u fasciklu koja je podešena u Safari podešavanjima.
:::

## Na mreži i van nje

- **Tvoji PDF-ovi nikad ne napuštaju ovaj računar**, na mreži ili van nje. Nigde se ništa ne otprema.
- Čitač PDF-a se učitava prvi put kada otvoriš PDF („Učitavanje PDF čitača…“), a modul za pisanje PDF-a prvi put kada sačuvaš („Učitavanje modula za pisanje PDF-a…“) ili otvoriš datoteku koja već ima komentare.
- Uz vezu, oba se učitavaju sa veb sajta.
- **Za rad bez veze** izaberi {{ui:Save for offline}} na traci na vrhu dok si na mreži. Dugme prikazuje „Čuvanje N od M“, a zatim „Spremno za rad van mreže“. Ta kopija obuhvata čitač i modul za pisanje PDF-a (ukupno oko 6 MB) i ovu pomoć, tako da posle rade otvaranje, označavanje i čuvanje PDF-ova u ovom pregledaču i van mreže.
- Ako dugme kaže „Nije moguće sačuvati“, neke datoteke nisu preuzete: proveri vezu i klikni ponovo. Ako kaže „Van mreže nije dostupno“, ovaj prozor pregledača ne može da čuva kopiju za rad van mreže (privatni prozori i neki upravljani računari); koristi običan prozor.
- Da ažuriraš ili ukloniš kopiju, klikni „Spremno za rad van mreže“ i izaberi „Sačuvaj ponovo (preuzmi najnoviju verziju)“ ili „Ukloni kopiju za rad van mreže“. Više u [Rad van mreže](common:offline).

:::offline
Van si mreže. Ako traka na vrhu kaže „Spremno za rad van mreže“, sve radi, uključujući čuvanje. Ako ne kaže, a još nisi ništa sačuvao u ovoj kartici, {{ui:Save}} može da ne uspe sa porukom „Modul za pisanje PDF-a nije mogao da se učita“. Tvoja označavanja su i dalje u kartici: ostavi je otvorenu, vrati se na mrežu i ponovo izaberi {{ui:Save}}.
:::

## Stvari koje treba znati

- Veliki setovi planova se otvaraju dugo: MarkupCraft čita tekst svake strane da bi pronašao brojeve listova. Statusna traka broji listove dok radi.
- Ako otvoriš isti PDF dvaput, njegovi listovi se dodaju dvaput. Zatvori set i otvori ga ponovo ako se to desi.
- {{ui:Close}} zatvara sve otvorene datoteke odjednom. Ako neke imaju nesačuvana označavanja, pita: {{ui:Cancel}}, {{ui:Close without saving}} ili {{ui:Save copies first}}.
- Čuvanje u oblaku još nije dostupno, a desktop verzije još ne postoje. Čuvaj PDF-ove uz ostale projektne datoteke i pravi rezervne kopije kao i obično. Videti [Gde idu tvoje datoteke](common:your-files).
