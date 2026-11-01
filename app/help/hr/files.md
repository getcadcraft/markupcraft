---
title: Datoteke koje MarkupCraft otvara i sprema
summary: PDF-ovi unutra, kopija PDF-a s oznakama van, uz CSV, BCF i datoteke kutije s alatima; kamo što ide, online i offline.
keywords: pdf, otvaranje, spremanje, izvoz, preuzimanje, csv, bcf, bcfzip, json, kutija s alatima, vrste datoteka, formati, učitavanje, lozinka, šifrirano
from: b3045b4c
---

## Što MarkupCraft otvara

| Datoteka | Kako | Što se događa |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otvori}}, {{key:Mod+O}} ili ispuštanje na područje lista. Može i nekoliko odjednom. | Svaka stranica postaje list. Oznake koje već postoje u datoteci čitaju se natrag (dolje). |
| Kutija s alatima (`.json`) | Kartica {{ui:Alati}}, zatim {{ui:Uvezi}} | Alati se dodaju u vašu kutiju. Pogledajte [Kutija s alatima](topic:tool-chest). |

Sve ostalo se odbija s porukom „MarkupCraft otvara PDF datoteke.“ u statusnoj traci. Ako ispustite mješavinu, PDF-ovi se otvore, a statusna traka kaže koliko datoteka nije bilo PDF.

### Oznake koje već postoje u PDF-u

- **Oznake koje je spremio MarkupCraft** vraćaju se točno: vrsta, stil, autor, datumi, status, odgovori, broj stavke, mjerilo lista i sva imena listova koja ste upisali.
- **Komentari iz drugih PDF programa** također se čitaju. Pravokutnici, elipse, linije i strelice, polilinije, poligoni, poteze olovkom (ink), tekstualni okviri i ljepljive bilješke postaju obične uredive MarkupCraft oznake. Njihovi odgovori i statusi pregleda dolaze s njima.
- **Sve ostalo** (isticanja teksta napravljena odabirom teksta, pečati drugih programa i druge vrste) prikazuje se kakvo jest, označeno samo za čitanje. Možete ga odabrati, vidjeti na popisu oznaka i odgovoriti na njega, ali ga ne možete pomaknuti, promijeniti ni izbrisati.
- Poveznice i polja obrazaca ostavljaju se na miru i ne navode se.
- Mjerilo koje je spremio drugi program (mjerni viewport) koristi se kao mjerilo lista kad MarkupCraft razumije njegovu jedinicu.

### Datoteke koje se ne otvaraju

- PDF koji traži lozinku: poruka glasi „ime“ za otvaranje treba lozinku. Otvorite nezaštićenu kopiju.
- Oštećena datoteka ili ona koja zapravo nije PDF: poruka glasi „ime“ nije moguće pročitati kao PDF (…).
- PDF koji se otvori, ali je zaštićen od izmjena, otvara se bez problema. Njegovo spremanje se odbija (pogledajte dolje).

Kad se otvori više datoteka odjednom, one koje rade se otvore, a okvir „Neke se datoteke nisu otvorile“ navodi ostale.

## Što MarkupCraft sprema

Spremanje je uvijek **preuzimanje** nove datoteke. Web-stranica ne može prepisati datoteku na vašem računalu, a MarkupCraft nikada ne mijenja vaš original.

| Što odaberete | Što dobijete | Napomene |
|---|---|---|
| {{ui:Spremi}} ({{key:Mod+S}}) | „<ime> (marked up).pdf“ | Kopija izvornog PDF-a sa svakom oznakom upisanom kao pravi PDF komentar. Ponovno spremanje datoteke „(marked up)“ zadržava isto ime; nikad ne postaje „(marked up) (marked up)“. Pogledajte [Spremite PDF s oznakama](topic:save-the-marked-up-pdf). |
| Kartica {{ui:Oznake}}, zatim {{ui:CSV}} | „<ime> markups.csv“ | Oznake kako su navedene (filtri se primjenjuju). |
| Kartica {{ui:Oznake}}, zatim {{ui:BCF}} | „<ime> markups.bcfzip“ | BCF 2.1 za alate za BIM koordinaciju, jedna snimka po oznaci. Pogledajte [Osnove BCF-a](topic:bcf-basics). |
| Kartica {{ui:Popis nedostataka}}, zatim {{ui:Izvezi CSV}} | „<ime> punch list.csv“ | Stavke popisa nedostataka redom po broju. |
| Kartica {{ui:Alati}}, zatim {{ui:Izvezi}} | „MarkupCraft tool chest.json“ | Vaša kutija s alatima, za dijeljenje ili čuvanje. |

„<ime>“ je ime datoteke prvog otvorenog PDF-a bez „.pdf“.

CSV datoteke otvaraju se u bilo kojoj proračunskoj tablici. Zapisane su u UTF-8 s oznakom koju tablice traže, pa se znakovi s dijakriticima ispravno prikazuju. Ćelija koja počinje znakom =, +, - ili @ dobiva apostrof na početku da je tablica nikada ne izvrši kao formulu.

## Kamo idu preuzimanja

Odlučuje vaš preglednik: obično mapa Preuzimanja, ili pita svaki put ako je tako postavljen. Pogledajte [Preglednici i računala](common:browsers#what-differs-between-browsers).

:::chromium
Kad odjednom spremate sve izmijenjene datoteke jednog kompleta, Chrome i Edge mogu pitati smije li ova stranica preuzimati više datoteka. Odaberite {{ui:Dopusti}} ili ćete dobiti samo prvu kopiju.
:::

:::safari
Na iPadu Safari pita prije svakog preuzimanja i stavlja datoteku u aplikaciju Datoteke, u mapu Preuzimanja. Na Macu ide u mapu zadanu u postavkama Safarija.
:::

## Online i offline

- **Vaši PDF-ovi nikada ne napuštaju ovo računalo**, online ili offline. Nigdje nema slanja.
- PDF čitač učitava se pri prvom otvaranju PDF-a („Učitavanje PDF čitača…“), a PDF pisač pri prvom spremanju („Učitavanje PDF pisača…“) ili pri otvaranju datoteke koja već ima komentare.
- S vezom se oba učitavaju s web-mjesta.
- **Za rad bez veze** odaberite {{ui:Spremi za offline}} u traci pri vrhu dok ste online. Gumb broji „Spremanje 1 od 5“ i zatim kaže „Spremno za offline“. Ta kopija sadrži PDF čitač i PDF pisač (ukupno oko 6 MB) i ovu pomoć, pa nakon toga otvaranje, označavanje i spremanje PDF-ova radi offline u ovom pregledniku.
- Ako gumb kaže „Spremanje nije uspjelo“, neke datoteke nisu preuzete: provjerite vezu i ponovno ga kliknite. Ako kaže „Offline nije dostupan“, ovaj prozor preglednika ne može čuvati offline kopiju (privatni prozori i neka upravljana računala); koristite običan prozor.
- Za osvježavanje ili odbacivanje kopije kliknite „Spremno za offline“ i odaberite „Spremi ponovno (preuzmi najnoviju verziju)“ ili „Ukloni offline kopiju“. Više u temi [Rad offline](common:offline).

:::offline
Offline ste. Ako u traci pri vrhu piše „Spremno za offline“, sve radi, uključujući spremanje. Ako ne piše i još niste spremali u ovoj kartici, {{ui:Spremi}} može propasti s porukom „PDF pisač nije se mogao učitati“. Vaše su oznake još u kartici: ostavite je otvorenom, spojite se ponovno i opet odaberite {{ui:Spremi}}.
:::

## Što je dobro znati

- Veliki kompleti nacrta dugo se otvaraju: MarkupCraft čita tekst svake stranice da pronađe brojeve listova. Statusna traka broji listove kako ide.
- Ako isti PDF otvorite dvaput, njegovi se listovi dodaju dvaput. Ako se to dogodi, zatvorite komplet i otvorite ga ponovno.
- {{ui:Zatvori}} zatvara sve otvorene datoteke odjednom. Ako neke imaju nespremljene oznake, pita: {{ui:Odustani}}, {{ui:Zatvori bez spremanja}} ili {{ui:Prvo spremi kopije}}.
- Spremanje u oblak još nije dostupno, a još nema ni desktop izdanja. Čuvajte PDF-ove uz ostale datoteke projekta i izrađujte sigurnosne kopije kao i inače. Pogledajte [Kamo idu vaše datoteke](common:your-files).
