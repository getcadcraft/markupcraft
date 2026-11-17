---
title: Izaberi, pomeri i menjaj označavanja
summary: Birajte označavanja klikom ili prozorom, pomerajte ih, menjajte im veličinu, pomerajte strelicama, isecajte, kopirajte, lepite, lepite na istom mestu, dupliraj, brišite i opozivajte.
keywords: izbor, izaberi, izaberi sve, ukloni izbor, prozor, presecanje, pomeranje, promena veličine, ručice, pomeranje strelicama, iseci, kopiraj, nalepi, nalepi na istom mestu, dupliraj, međuspremnik, drugi tab, izbriši, opozovi, ponovi, uredi
from: 62c7def3
---

Prvo izaberite {{ui:Izbor}} ({{key:V}}). Pritisak na {{key:Esc}} takođe vas tu vodi: prvi pritisak briše izbor, a sledeći vraća na {{ui:Izbor}}.

## Biranje označavanja

:::mouse
- **Jedno označavanje:** kliknite na njega. Pojavljuju se isprekidani okvir i ručice, a {{ui:Svojstva}} ga prikazuje.
- **Dodaj ili ukloni jedno:** držite {{key:Shift}} i kliknite.
- **Potpuno unutar prozora:** prevucite sa leva na desno po praznom delu lista. Biraju se samo označavanja koja su u potpunosti unutar okvira (puna linija).
- **Dodiruje prozor:** prevucite sa desna na levo. Bira se sve što okvir dodirne (zelena isprekidana linija).
- **Sve na ovom listu:** {{key:Mod+A}}, ili {{ui:Više}} pa {{ui:Izaberi sve}} u grupi {{ui:Uređivanje}} na traci sa alatkama.
- **Ništa:** kliknite na prazno mesto, pritisnite {{key:Esc}} ili {{ui:Više}} pa {{ui:Ukloni izbor}}.
:::

:::touch
- **Jedno označavanje:** dodirnite ga.
- **Više njih:** prevucite jedan prst preko praznog dela lista da nacrtate prozor. Sa leva na desno bira ono što je potpuno unutra; sa desna na levo bira ono što dodiruje.
- Dodir uz držanje {{key:Shift}} radi samo ako je priključena tastatura. Bez nje koristite prozor.
- Jedan prst nikada ne pomera pogled u {{ui:Izbor}}; koristite dva prsta ili alat {{ui:Pomeri pogled}}.
:::

Komentari samo za čitanje koji su došli uz datoteku prikazuju se kao siva isprekidana kutija bez ručica. Na njih se može birati i odgovarati, ali ih ne možete menjati.

## Pomeranje i promena veličine

- **Pomeranje:** prevucite izabrano označavanje. Držite {{key:Shift}} da pomerate samo u koracima od 45°. Više izabranih označavanja se pomera zajedno.
- **Promena veličine:** kada je izabrano jedno označavanje, prevucite ručicu. Kvadratne ručice menjaju veličinu okvira (držite {{key:Shift}} da zadržite proporcije); okrugle ručice pomeraju jednu tačku ugla linije, polilinije, poligona, oblaka ili mere (držite {{key:Shift}} za 45°); romboidne ručice pomeraju vrh i savijanje napomene. Potezi olovkom se skaliraju iz svog okvira.
- **Pomeranje strelicama:** pritisnite strelice da pomerite izbor za jedan piksel ekrana; držite {{key:Shift}} za deset. Svaki pritisak je jedan korak opozivanja.

## Promena teksta ili izgleda

- **Tekst, napomene i beleške:** dvaput kliknite na označavanje, pritisnite {{key:Enter}} ili izaberite {{ui:Izmeni na listu}} u {{ui:Svojstva}}. Ukucajte, pa kliknite van ili pritisnite {{key:Mod+Enter}}. {{key:Esc}} poništava izmenu.
- **Pečati:** izaberite drugi pečat u {{ui:Svojstva}} (dvostruki klik otvara {{ui:Svojstva}} za vas).
- **Stil:** {{ui:Boja}}, {{ui:Debljina linije}}, {{ui:Ispuna}}, {{ui:Neprovidnost}} i {{ui:Veličina teksta}} pod „Stil“ u {{ui:Svojstva}}. Kada je izabrano više njih, {{ui:Svojstva}} prikazuje vrste koje ste izabrali i menja ih sve odjednom.

## Kopiranje, lepljenje i dupliranje

Grupa {{ui:Uređivanje}} na traci sa alatkama ima {{ui:Kopiraj}} i {{ui:Nalepi}}; meni {{ui:Više}} ima sve ove, svaku sa njenim tasterom.

| Komanda | Taster | Šta radi |
|---|---|---|
| {{ui:Iseci}} | {{key:Mod+X}} | Kopira izabrana označavanja i briše ih |
| {{ui:Kopiraj}} | {{key:Mod+C}} | Kopira izabrana označavanja |
| {{ui:Nalepi}} | {{key:Mod+V}} | Stavlja kopiju na list na kojem ste (gde, pogledajte dole) |
| {{ui:Nalepi na istom mestu}} | {{key:Mod+Shift+V}} | Stavlja kopiju tačno na mesto sa kog je kopirana: na istom listu, preko originala; na drugom listu, na istom mestu na papiru |
| {{ui:Dupliraj}} | {{key:Mod+D}} | Pravi kopiju izbora malo nadole i nadesno, bez diranja onoga što ste ranije kopirali |

**Gde Nalepi stavlja kopiju:**

- {{key:Mod+V}} sa pokazivačem na listu stavlja kopiju centriranu tamo gde je pokazivač. Pomerite pokazivač, ponovo pritisnite {{key:Mod+V}} i postavljate još jednu.
- Dugme {{ui:Nalepi}} (tada je pokazivač na traci sa alatkama), ili {{key:Mod+V}} sa pokazivačem van lista, stavlja kopiju malo nadole i nadesno od originala. Svako lepljenje iste kopije ide korak dalje, pa se kopije nikada ne skrivaju jedna iza druge. Na drugom listu prvo lepljenje ide tamo gde je bio original na svom listu. Ako to mesto nije u vidnom polju, kopija se stavlja na sredinu prikaza.
- Da {{key:Mod+V}} uvek nalepi pored originala, izaberite {{ui:Pored kopije}} pod {{ui:Nalepi}} u [podešavanjima MarkupCraft-a](topic:settings).

Nalepljena označavanja su izabrana, pa ih odmah možete prevući. Svako isecanje, lepljenje ili dupliranje je jedan korak opozivanja: {{key:Mod+Z}} uklanja celo lepljenje.

Nalepljene kopije su nova označavanja: dobijaju vaše ime, današnji datum, status Otvoreno, bez broja stavke za ispravku i prazan niz odgovora. Njihova vrsta, oblik, stil, tekst i komentar dolaze sa njima. Komentari samo za čitanje koji su došli uz datoteku ne mogu se kopirati ili seći.

**Između tabova:** ono što kopirate čuva se i u ovom pregledaču, pa drugi tab MarkupCraft-a u istom pregledaču može da nalepi. Kopiranje označavanja ne koristi sistemski međuspremnik računara: ne možete ih nalepiti u drugi program, a tekst kopiran negde drugde ne lepi se kao označavanje.

**Meni desnog klika:** desni klik na označavanje (ili na prazan papir) daje {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi ovde}}, {{ui:Nalepi na istom mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Sačuvaj izbor kao pečat…}}, {{ui:Spljošti u stranu pri čuvanju}}, {{ui:Umetni sliku ovde…}} i {{ui:Izaberi sve}}. Desni klik na označavanje koje nije izabrano prvo ga bira. Prevlačenje desnim dugmetom i dalje pomera pogled. Na ekranu osetljivom na dodir, dugo pritiskanje na označavanje otvara isti meni (na tekstu počinje uređivanje teksta). Taster menija ili {{key:Shift+F10}} otvara ga kod izbora.

Sadržaj stranice izabran alatom {{ui:Sadržaj}} takođe se kopira i lepi: vidi [Promena sopstvenih linija, slika i teksta stranice](topic:page-content).

Da kopirate deo same stranice kao sliku (pravougaonik, elipsu ili slobodan oblik), ili kao providni sloj za drugi list ili aplikaciju, vidi [Kopiranje oblasti stranice ili providnog sloja](topic:copy-an-area).

## Brisanje

Pritisnite {{key:Delete}} ili {{key:Backspace}}, izaberite {{ui:Više}} pa {{ui:Izbriši}} na traci sa alatkama, ili {{ui:Izbriši}} u {{ui:Svojstva}}. Statusna traka kaže koliko je obrisano. Komentari samo za čitanje iz datoteke se nikada ne brišu („zadržano kao u datoteci“).

## Opozivanje i ponavljanje

- {{key:Mod+Z}} opoziva, {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} ponavlja. Traka sa alatkama ima {{ui:Opozovi}} i {{ui:Ponovi}}.
- Statusna traka kaže šta je opozvano („Opozvano: pomeranje označavanja.“).
- Opozivanje pokriva svaku promenu označavanja, statusa, odgovora, stavki za ispravku, razmera listova i naziva listova, do 500 koraka.
- Istorija se briše kada zatvorite skup.

## Kopiranje označavanja na druge listove

Da istu oznaku pečata, belešku ili oblak stavite na više listova, izaberite je (ili više označavanja) i izaberite {{ui:Kopiraj na druge listove…}} u {{ui:Svojstva}}. Označite listove ili {{ui:Svi listovi}}, pa izaberite {{ui:Kopiraj}}. Svaki list dobija kopiju na istom mestu na stranici, potpisanu vašim imenom. Jedno {{key:Mod+Z}} uklanja sve.
