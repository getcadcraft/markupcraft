---
title: Odaberi, pomjeri i mijenjaj označavanja
summary: Odaberi označavanja klikom ili prozorom, pomjeri, promijeni veličinu, fino pomjeri, izreži, kopiraj, zalijepi, zalijepi na mjesto, dupliraj, izbriši i poništi.
keywords: odabir, odabrano, odaberi sve, ukloni odabir, prozor, presijecanje, pomjeri, promijeni veličinu, ručice, fino pomjeranje, izreži, kopiraj, zalijepi, zalijepi na mjesto, dupliraj, međuspremnik, druga kartica, izbriši, poništi, ponovi, uredi
from: 62c7def3
---

Prvo odaberi {{ui:Odaberi}} ({{key:V}}). Pritisak na {{key:Esc}} također vodi tamo: prvi pritisak briše odabir, a sljedeći vraća na {{ui:Odaberi}}.

## Odabir označavanja

:::mouse
- **Jedno označavanje:** klikni na njega. Pojave se isprekidani okvir i ručice, a {{ui:Svojstva}} ga prikazuju.
- **Dodaj ili ukloni jedno:** drži {{key:Shift}} i klikni.
- **Potpuno unutar prozora:** povuci s lijeva na desno preko praznog dijela lista. Odabiru se samo označavanja potpuno unutar okvira (puna linija).
- **Dodiruje prozor:** povuci s desna na lijevo. Odabere se sve što okvir dodirne (zelena isprekidana linija).
- **Sve na ovom listu:** {{key:Mod+A}}, ili {{ui:Više}} pa {{ui:Odaberi sve}} u grupi {{ui:Uređivanje}} na alatnoj traci.
- **Ništa:** klikni prazno mjesto, pritisni {{key:Esc}}, ili {{ui:Više}} pa {{ui:Ukloni odabir}}.
:::

:::touch
- **Jedno označavanje:** dodirni ga.
- **Više njih:** povuci jedan prst preko praznog dijela lista da nacrtaš prozor. S lijeva na desno odabire ono što je potpuno unutra; s desna na lijevo odabire ono što dodiruje.
- Dodir uz držanje {{key:Shift}} radi samo s priključenom tastaturom. Bez nje koristi prozor.
- Jedan prst nikad ne pomjera pogled u {{ui:Odaberi}}; koristi dva prsta ili alat {{ui:Pomjeri pogled}}.
:::

Označavanja samo za čitanje koja su došla uz datoteku prikazuju sivi isprekidani okvir i nemaju ručice. Mogu se odabrati i na njih se može odgovoriti, ali se ne mogu mijenjati.

## Pomjeranje i promjena veličine

- **Pomjeri:** povuci odabrano označavanje. Drži {{key:Shift}} da pomjeraš samo u koracima od 45°. Više odabranih označavanja se pomjera zajedno.
- **Promijeni veličinu:** kad je odabrano jedno označavanje, povuci ručicu. Kvadratne ručice mijenjaju veličinu okvira (drži {{key:Shift}} da zadržiš proporcije); okrugle ručice pomjeraju jednu tačku linije, polilinije, poligona, oblaka ili mjere (drži {{key:Shift}} za 45°); romb ručice pomjeraju vrh i savijanje pozivne oznake. Crte olovke se skaliraju iz svog okvira.
- **Fino pomjeranje:** pritisni strelice da pomjeriš odabir za jedan piksel ekrana; drži {{key:Shift}} za deset. Svaki pritisak je jedan korak poništavanja.

## Promijeni šta piše ili kako izgleda

- **Tekst, pozivne oznake i bilješke:** dvaput klikni označavanje, ili pritisni {{key:Enter}}, ili izaberi {{ui:Uredi na listu}} u {{ui:Svojstva}}. Upiši, pa klikni van ili pritisni {{key:Mod+Enter}}. {{key:Esc}} otkazuje uređivanje.
- **Pečati:** izaberi drugi pečat u {{ui:Svojstva}} (dvoklik otvara {{ui:Svojstva}} za tebe).
- **Stil:** {{ui:Boja}}, {{ui:Debljina linije}}, {{ui:Ispuna}}, {{ui:Neprozirnost}} i {{ui:Veličina teksta}} pod "Stil" u {{ui:Svojstva}}. Kad je odabrano više označavanja, {{ui:Svojstva}} prikazuje vrste koje si odabrao i mijenja ih sve odjednom.

## Kopiranje, lijepljenje i dupliranje

Grupa {{ui:Uređivanje}} na alatnoj traci ima {{ui:Kopiraj}} i {{ui:Zalijepi}}; njen meni {{ui:Više}} sadrži sve ove, svaku s njenom tipkom.

| Naredba | Tipka | Šta radi |
|---|---|---|
| {{ui:Izreži}} | {{key:Mod+X}} | Kopira odabrana označavanja i briše ih |
| {{ui:Kopiraj}} | {{key:Mod+C}} | Kopira odabrana označavanja |
| {{ui:Zalijepi}} | {{key:Mod+V}} | Stavlja kopiju na list na kojem si (gdje, vidi dolje) |
| {{ui:Zalijepi na mjesto}} | {{key:Mod+Shift+V}} | Stavlja kopiju tačno na mjesto s kojeg je kopirana: na istom listu, preko originala; na drugom listu, na isto mjesto na papiru |
| {{ui:Dupliraj}} | {{key:Mod+D}} | Pravi kopiju odabira malo dolje i desno, bez diranja onoga što si ranije kopirao |

**Gdje Zalijepi stavlja kopiju:**

- {{key:Mod+V}} kad je pokazivač na listu stavlja kopiju centriranu tamo gdje je pokazivač. Pomjeri pokazivač, pritisni {{key:Mod+V}} ponovo, i postavljaš još jednu.
- Dugme {{ui:Zalijepi}} (tada je pokazivač na alatnoj traci), ili {{key:Mod+V}} kad je pokazivač van lista, stavlja kopiju malo dolje i desno od originala. Svako lijepljenje iste kopije ide korak dalje, pa se kopije nikad ne skrivaju jedna za drugu. Na drugom listu prvo lijepljenje ide tamo gdje je bio original na svom listu. Ako je to mjesto van vidnog polja, kopija ide u sredinu prikaza.
- Da {{key:Mod+V}} uvijek zalijepi pored originala, izaberi {{ui:Pored kopije}} pod {{ui:Zalijepi}} u [postavkama MarkupCraft](topic:settings).

Zalijepljena označavanja su odabrana, pa ih možeš odmah povući. Svako izrezivanje, lijepljenje ili dupliranje je jedan korak poništavanja: {{key:Mod+Z}} uklanja cijelo lijepljenje.

Zalijepljene kopije su nova označavanja: dobijaju tvoje ime, današnji datum, status Otvoreno, bez broja stavke i prazan niz odgovora. Njihova vrsta, oblik, stil, tekst i komentar se prenose. Označavanja samo za čitanje koja su došla uz datoteku ne mogu se kopirati ni izrezati.

**Između kartica:** ono što kopiraš čuva se i u ovom pregledniku, pa druga kartica MarkupCraft u istom pregledniku može to zalijepiti. Kopiranje označavanja ne koristi međuspremnik računara: ne možeš ih zalijepiti u drugi program, a tekst kopiran drugdje se ne lijepi kao označavanje.

**Meni desnim klikom:** desnim klikom na označavanje (ili prazan papir) dobija se {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi ovdje}}, {{ui:Zalijepi na mjesto}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Spasi odabir kao pečat…}}, {{ui:Spljošti na stranicu pri spašavanju}}, {{ui:Umetni sliku ovdje…}} i {{ui:Odaberi sve}}. Desni klik na označavanje koje nije odabrano prvo ga odabere. Povlačenje desnim dugmetom i dalje pomjera pogled. Na ekranu osjetljivom na dodir, dugi pritisak na označavanje otvara isti meni (na tekstu počinje uređivanje teksta). Tipka menija ili {{key:Shift+F10}} otvara ga kod odabira.

Sadržaj stranice odabran alatom {{ui:Sadržaj}} također se kopira i lijepi: vidi [Promjena vlastitih linija, slika i teksta stranice](topic:page-content).

Za kopiranje dijela same stranice kao slike (pravougaonik, elipsa ili slobodan oblik), ili kao providni sloj za drugi list ili aplikaciju, vidi [Kopiranje područja stranice ili sloja](topic:copy-an-area).

## Brisanje

Pritisni {{key:Delete}} ili {{key:Backspace}}, izaberi {{ui:Više}} pa {{ui:Izbriši}} na alatnoj traci, ili {{ui:Izbriši}} u {{ui:Svojstva}}. Statusna traka kaže koliko je obrisano. Označavanja samo za čitanje iz datoteke se nikad ne brišu ("zadržano kao u datoteci").

## Poništavanje i ponavljanje

- {{key:Mod+Z}} poništava, {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} ponavlja. Alatna traka ima {{ui:Poništi}} i {{ui:Ponovi}}.
- Statusna traka kaže šta je poništeno ("Poništeno: pomjeranje označavanja.").
- Poništavanje obuhvata svaku promjenu označavanja, statusa, odgovora, stavki liste nedostataka, razmjera listova i naziva listova, do 500 koraka.
- Historija se briše kad zatvoriš set.

## Kopiranje označavanja na druge listove

Da istu pečatnu oznaku, bilješku ili oblak staviš na više listova, odaberi je (ili više označavanja) i izaberi {{ui:Kopiraj na druge listove…}} u {{ui:Svojstva}}. Označi listove ili izaberi {{ui:Svi listovi}}, pa izaberi {{ui:Kopiraj}}. Svaki list dobija kopiju na istom mjestu na stranici, potpisanu tvojim imenom. Jedno {{key:Mod+Z}} ih uklanja sve.
