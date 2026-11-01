---
title: Datoteke koje MarkupCraft otvara i spašava
summary: PDF-ovi na ulazu, kopija PDF-a s oznakama na izlazu, plus CSV, BCF i datoteke sanduka alata; gdje ide svaka, na mreži i van nje.
keywords: pdf, otvori, spasi, izvezi, preuzmi, csv, bcf, bcfzip, json, sanduk alata, tipovi datoteka, formati, otpremi, lozinka, šifrirano
from: b3045b4c
---

## Šta MarkupCraft otvara

| Datoteka | Kako | Šta se dešava |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otvori}}, {{key:Mod+O}}, ili prevuci na područje lista. Više odjednom je u redu. | Svaka stranica postaje list. Oznake koje već postoje u datoteci se učitavaju (dolje). |
| Sanduk alata (`.json`) | Kartica {{ui:Alati}}, zatim {{ui:Uvezi}} | Alati se dodaju u vaš sanduk. Pogledajte [Sanduk alata](topic:tool-chest). |

Sve ostalo se odbija porukom "MarkupCraft otvara PDF datoteke." u statusnoj traci. Ako prevučete mješavinu, PDF-ovi se otvore, a statusna traka kaže koliko datoteka nije PDF.

### Oznake koje već postoje u PDF-u

- **Oznake koje je MarkupCraft spasio** se vraćaju tačno kakve su bile: vrsta, stil, autor, datumi, status, odgovori, broj stavke liste ispravki, razmjera lista i svi nazivi listova koje ste upisali.
- **Komentari iz drugih PDF programa** se također učitavaju. Pravougaonici, elipse, linije i strelice, polilinije, poligoni, potezi tintom (olovkom), tekstualni okviri i ljepljive bilješke postaju obične, izmjenjive MarkupCraft oznake. Njihovi odgovori i statusi pregleda se prenose.
- **Sve ostalo** (isticanja teksta napravljena odabirom teksta, pečati drugih programa i druge vrste) prikazuje se kako jeste, označeno kao samo za čitanje. Možete ih odabrati, vidjeti na listi oznaka i odgovoriti na njih, ali ih ne možete pomjeriti, mijenjati ni izbrisati.
- Veze i polja obrazaca se ne diraju i nisu navedeni.
- Razmjeru koju je sačuvao drugi program (prikaz za mjerenje) MarkupCraft koristi kao razmjeru lista kada razumije njegovu jedinicu.

### Datoteke koje se ne otvaraju

- PDF kojem treba lozinka: '"naziv" zahtijeva lozinku za otvaranje. Otvorite kopiju bez zaštite.'
- Oštećena datoteka ili ona koja nije stvarno PDF: '"naziv" nije moguće pročitati kao PDF (…)'.
- PDF koji je zaštićen od izmjena otvara se bez problema. Spašavanje se odbija (pogledajte dolje).

Kada se više datoteka otvara odjednom, one koje rade se otvore, a okvir pod nazivom "Neke datoteke nisu otvorene" navodi ostale.

## Šta MarkupCraft spašava

Spašavanje je uvijek **preuzimanje** nove datoteke. Web stranica ne može prepisati datoteku na vašem računaru, a MarkupCraft nikada ne mijenja vaš original.

| Vi birate | Dobijate | Napomene |
|---|---|---|
| {{ui:Spasi}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Kopija originalnog PDF-a sa svakom oznakom upisanom kao pravi PDF komentar. Ponovno spašavanje datoteke "(marked up)" zadržava isti naziv; nikada ne postaje "(marked up) (marked up)". Pogledajte [Spasi PDF s oznakama](topic:save-the-marked-up-pdf). |
| Kartica {{ui:Oznake}}, zatim {{ui:CSV}} | "<name> markups.csv" | Oznake kako su navedene na listi (filteri se primjenjuju). |
| Kartica {{ui:Oznake}}, zatim {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 za alate za BIM koordinaciju, snimak za svaku oznaku. Pogledajte [Osnove BCF-a](topic:bcf-basics). |
| Kartica {{ui:Lista ispravki}}, zatim {{ui:Izvezi CSV}} | "<name> punch list.csv" | Stavke liste ispravki po rednom broju. |
| Kartica {{ui:Alati}}, zatim {{ui:Izvezi}} | "MarkupCraft tool chest.json" | Vaš sanduk alata, za dijeljenje ili čuvanje. |

"<name>" je naziv prve otvorene PDF datoteke bez ".pdf".

CSV datoteke se otvaraju u bilo kojoj tabeli. Kodirane su u UTF-8 uz oznaku koju tabele traže, tako da se nazivi s dijakritičkim znakovima ispravno prikazuju. Ćeliji koja počinje sa =, +, - ili @ dodaje se apostrof na početku, kako je tabela nikada ne bi izvršila kao formulu.

## Gdje idu preuzimanja

Vaš pretraživač odlučuje: obično mapa Preuzimanja, ili pita svaki put ako ste tako podesili. Pogledajte [Pretraživači i računari](common:browsers#what-differs-between-browsers).

:::chromium
Kada odjednom spašavate svaku izmijenjenu datoteku iz seta, Chrome i Edge mogu pitati smije li ovaj sajt preuzeti više datoteka. Izaberite {{ui:Dozvoli}}, inače dobijate samo prvu kopiju.
:::

:::safari
Na iPadu Safari pita prije svakog preuzimanja i stavlja datoteku u aplikaciju Files, u mapu Preuzimanja. Na Macu ide u mapu podešenu u Safari postavkama.
:::

## Na mreži i van mreže

- **Vaši PDF-ovi nikada ne napuštaju ovaj računar**, na mreži ili van nje. Nigdje nema otpremanja.
- PDF čitač se učitava prvi put kada otvorite PDF ("Učitavanje PDF čitača…"), a PDF modul za spašavanje prvi put kada spašavate ("Učitavanje PDF modula za spašavanje…") ili otvorite datoteku koja već ima komentare.
- Uz vezu, oba se učitavaju sa web sajta.
- **Za rad bez veze** izaberite {{ui:Spasi za rad van mreže}} u traci na vrhu dok ste na mreži. Dugme broji "Spašavanje N od M", a zatim kaže "Spremno za rad van mreže". Ta kopija uključuje PDF čitač i PDF modul za spašavanje (ukupno oko 6 MB) i ovu pomoć, pa otvaranje, označavanje i spašavanje PDF-ova zatim rade van mreže u ovom pretraživaču.
- Ako dugme kaže "Nije moguće spasiti", neke datoteke nisu preuzete: provjerite vezu i ponovo kliknite. Ako kaže "Van mreže nije dostupno", ovaj prozor pretraživača ne može zadržati kopiju za rad van mreže (privatni prozori i neki upravljani računari); koristite običan prozor.
- Za ažuriranje ili uklanjanje kopije kliknite "Spremno za rad van mreže" i izaberite "Spasi ponovo (preuzmi najnoviju verziju)" ili "Ukloni kopiju za rad van mreže". Više u [Rad van mreže](common:offline).

:::offline
Niste na mreži. Ako traka na vrhu kaže "Spremno za rad van mreže", sve radi, uključujući spašavanje. Ako ne kaže, a još niste spašavali u ovoj kartici, {{ui:Spasi}} može da ne uspije uz poruku "Nije moguće učitati PDF modul za spašavanje". Vaše oznake su i dalje u kartici: ostavite je otvorenu, vratite se na mrežu i ponovo izaberite {{ui:Spasi}}.
:::

## Šta treba znati

- Veliki setovi planova se sporo otvaraju: MarkupCraft čita tekst svake stranice da bi pronašao brojeve listova. Statusna traka broji listove kako napreduje.
- Ponovno otvaranje iste PDF datoteke dodaje njene listove dvaput. Zatvorite set i ponovo ga otvorite ako se to desi.
- {{ui:Zatvori}} zatvara sve otvorene datoteke odjednom. Ako neke imaju nespašene oznake, pita: {{ui:Otkaži}}, {{ui:Zatvori bez snimanja}} ili {{ui:Prvo spasi kopije}}.
- Spašavanje u oblaku još nije dostupno, i još nema desktop verzija. Držite PDF-ove uz ostale projektne datoteke i pravite rezervne kopije kao obično. Pogledajte [Gdje su vaše datoteke](common:your-files).
