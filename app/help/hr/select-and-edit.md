---
title: Odaberi, pomakni i promijeni oznake
summary: Odaberite oznake klikom ili okvirom, pomaknite ih, promijenite veličinu, pomaknite strelicama, izrežite, kopirajte, zalijepite, zalijepite na isto mjesto, dupliciraj, izbriši i poništi.
keywords: odabir, odaberi, odaberi sve, poništi odabir, prozor, križanje, pomakni, promijeni veličinu, ručke, lagani pomak, izreži, kopiraj, zalijepi, zalijepi na isto mjesto, dupliciraj, međuspremnik, druga kartica, izbriši, poništi, ponovi, uredi
from: 62c7def3
---

Odaberite {{ui:Odabir}} ({{key:V}}) prvo. Pritisak na {{key:Esc}} također vas tamo vodi: prvi pritisak briše odabir, a sljedeći prebacuje natrag na {{ui:Odabir}}.

## Odabir oznaka

:::mouse
- **Jedna oznaka:** kliknite je. Pojavljuju se isprekidani okvir i ručke, a {{ui:Svojstva}} je prikazuje.
- **Dodavanje ili uklanjanje jedne:** držite {{key:Shift}} i kliknite.
- **Potpuno unutar okvira:** povucite s lijeva na desno po praznom dijelu lista. Biraju se samo oznake u potpunosti unutar okvira (puni obris).
- **Dodiruje okvir:** povucite s desna na lijevo. Bira se sve što okvir dodiruje (zeleni, isprekidani obris).
- **Sve na ovom listu:** {{key:Mod+A}} ili {{ui:Više}}, zatim {{ui:Odaberi sve}} u skupini {{ui:Uređivanje}} na alatnoj traci.
- **Ništa:** kliknite prazno mjesto, pritisnite {{key:Esc}} ili {{ui:Više}}, zatim {{ui:Poništi odabir}}.
:::

:::touch
- **Jedna oznaka:** dodirnite je.
- **Više njih:** povucite jedan prst preko praznog dijela lista da nacrtate okvir. S lijeva na desno bira ono što je potpuno unutra; s desna na lijevo bira ono što dodiruje.
- Dodir uz pritisnutu {{key:Shift}} radi samo s priključenom tipkovnicom. Bez nje koristite okvir.
- Jedan prst nikad ne pomiče prikaz u {{ui:Odabir}}; koristite dva prsta ili alat {{ui:Pan}}.
:::

Komentari samo za čitanje koji su došli s datotekom prikazuju sivi isprekidani okvir bez ručki. Na njih se može odabrati i odgovoriti, ali ih nije moguće mijenjati.

## Pomicanje i promjena veličine

- **Pomicanje:** povucite odabranu oznaku. Držite {{key:Shift}} da pomičete samo u koracima od 45°. Više odabranih oznaka pomiče se zajedno.
- **Promjena veličine:** s jednom odabranom oznakom povucite ručku. Kvadratne ručke mijenjaju veličinu okvira (držite {{key:Shift}} da zadržite omjer); okrugle ručke pomiču jednu točku kuta crte, polilinije, poligona, oblaka ili mjere (držite {{key:Shift}} za 45°); dijamantne ručke pomiču vrh i prijelom oblačića. Crte olovke skaliraju se iz svog okvira.
- **Lagani pomak:** pritisnite tipke sa strelicama da odabir pomaknete za jedan piksel zaslona; držite {{key:Shift}} za deset. Svaki pritisak je jedan korak poništavanja.

## Promjena teksta ili izgleda

- **Tekst, oblačići i bilješke:** dvaput kliknite oznaku, pritisnite {{key:Enter}} ili odaberite {{ui:Uredi na listu}} u {{ui:Svojstva}}. Upišite tekst, zatim kliknite izvan ili pritisnite {{key:Mod+Enter}}. {{key:Esc}} otkazuje uređivanje.
- **Pečati:** odaberite drugi pečat u {{ui:Svojstva}} (dvostruki klik otvara {{ui:Svojstva}} za vas).
- **Stil:** {{ui:Boja}}, {{ui:Debljina linije}}, {{ui:Ispuna}}, {{ui:Neprozirnost}} i {{ui:Veličina teksta}} pod „Stil” u {{ui:Svojstva}}. S više odabranih, {{ui:Svojstva}} prikazuje vrste koje ste odabrali i mijenja ih sve odjednom.

## Kopiranje, lijepljenje i dupliciranje

Skupina {{ui:Uređivanje}} na alatnoj traci ima {{ui:Kopiraj}} i {{ui:Zalijepi}}; njezin izbornik {{ui:Više}} sadrži sve ove naredbe, svaku s tipkom.

| Naredba | Tipka | Što radi |
|---|---|---|
| {{ui:Izreži}} | {{key:Mod+X}} | Kopira odabrane oznake i briše ih |
| {{ui:Kopiraj}} | {{key:Mod+C}} | Kopira odabrane oznake |
| {{ui:Zalijepi}} | {{key:Mod+V}} | Stavlja kopiju na list na kojem ste (gdje, u nastavku) |
| {{ui:Zalijepi na isto mjesto}} | {{key:Mod+Shift+V}} | Stavlja kopiju točno na mjesto s kojeg je kopirana: na istom listu, preko izvornika; na drugom listu, na isto mjesto na papiru |
| {{ui:Dupliciraj}} | {{key:Mod+D}} | Pravi kopiju odabira malo dolje i desno, bez diranja onoga što ste ranije kopirali |

**Gdje Zalijepi stavlja kopiju:**

- {{key:Mod+V}} s pokazivačem na listu stavlja kopiju centriranu na mjesto pokazivača. Pomaknite pokazivač, ponovno pritisnite {{key:Mod+V}} i postavljate još jednu.
- Gumb {{ui:Zalijepi}} (tada je pokazivač na alatnoj traci) ili {{key:Mod+V}} s pokazivačem izvan lista stavlja je malo dolje i desno od izvornika. Svako lijepljenje iste kopije ide korak dalje, pa se kopije nikad ne skrivaju. Na drugom listu prvo lijepljenje ide tamo gdje je bio izvornik na svom listu. Ako je to mjesto izvan pogleda, kopija završava u sredini pogleda.
- Da {{key:Mod+V}} uvijek lijepi pokraj izvornika, odaberite {{ui:Pokraj kopije}} pod {{ui:Zalijepi}} u [postavkama MarkupCraft](topic:settings).

Zalijepljene oznake su odabrane pa ih odmah možete povući. Svako izrezivanje, lijepljenje ili dupliciranje je jedan korak poništavanja: {{key:Mod+Z}} uklanja cijelo lijepljenje.

Zalijepljene kopije su nove oznake: dobivaju vaše ime, današnji datum, status Otvoreno, bez broja nedostatka i prazan niz odgovora. Njihova vrsta, oblik, stil, tekst i komentar prenose se. Komentari samo za čitanje koji su došli s datotekom ne mogu se kopirati ni izrezati.

**Između kartica:** ono što kopirate čuva se i u ovom pregledniku, pa ga druga kartica MarkupCraft u istom pregledniku može zalijepiti. Kopiranje oznaka ne koristi međuspremnik računala: ne možete ih zalijepiti u drugi program, a tekst kopiran drugdje ne lijepi se kao oznaka.

**Izbornik desnog klika:** desnom tipkom kliknite oznaku (ili prazan papir) za {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi ovdje}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Spremi odabir kao pečat…}}, {{ui:Spljošti u stranicu pri spremanju}}, {{ui:Umetni sliku ovdje…}} i {{ui:Odaberi sve}}. Desni klik na oznaku koja nije odabrana prvo je odabere. Povlačenje desnom tipkom i dalje pomiče prikaz. Na zaslonu osjetljivom na dodir dugi pritisak na oznaku otvara isti izbornik (na tekstu počinje uređivanje teksta). Tipka izbornika ili {{key:Shift+F10}} otvara ga na odabiru.

Sadržaj stranice odabran alatom {{ui:Sadržaj}} također se kopira i lijepi: vidi [Promjena vlastitih linija, slika i teksta stranice](topic:page-content).

Za kopiranje dijela same stranice kao slike (pravokutnik, elipsa ili slobodni oblik) ili kao prozirnog preklapanja za drugi list ili program, vidi [Kopiranje područja stranice ili preklapanja](topic:copy-an-area).

## Brisanje

Pritisnite {{key:Delete}} ili {{key:Backspace}}, odaberite {{ui:Više}} pa {{ui:Izbriši}} na alatnoj traci, ili {{ui:Izbriši}} u {{ui:Svojstva}}. Statusna traka kaže koliko je obrisano. Komentari samo za čitanje iz datoteke nikad se ne brišu („zadržano kao u datoteci”).

## Poništavanje i ponavljanje

- {{key:Mod+Z}} poništava, {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} ponavlja. Alatna traka ima {{ui:Poništi}} i {{ui:Ponovi}}.
- Statusna traka kaže što je poništeno („Poništeno: pomicanje oznake.”).
- Poništavanje obuhvaća svaku promjenu oznaka, statusa, odgovora, stavki popisa nedostataka, mjerila listova i imena listova, do 500 koraka.
- Povijest se briše kad zatvorite skup.

## Kopiranje oznaka na druge listove

Da isti pečat, bilješku ili oblak stavite na nekoliko listova, odaberite ga (ili više oznaka) i odaberite {{ui:Kopiraj na druge listove…}} u {{ui:Svojstva}}. Označite listove ili {{ui:Svi listovi}} i odaberite {{ui:Kopiraj}}. Svaki list dobiva kopiju na istom mjestu na stranici, potpisanu vašim imenom. Jedan {{key:Mod+Z}} uklanja ih sve.
