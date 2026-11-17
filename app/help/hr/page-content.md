---
title: Promjena linija, slika i teksta same stranice
summary: Pomičite, mijenjajte veličinu, bojite ili brišite ono što sam PDF crta, pomičite točke linije, zamijenite sliku i promijenite riječi retka teksta.
keywords: sadržaj stranice, osnovni sadržaj, uredi pdf, uredi crtež, vektor, putanja, oblik, linija, slika, zamijeni sliku, tekst, riječi, font, točke, čvorovi, pomakni, promijeni veličinu, boja, obriši, alat za sadržaj
from: 471d457e
---

Oznake leže preko lista. Alat {{ui:Sadržaj}} radi na samom listu: linijama, slikama i redovima teksta koje crta PDF. Vaš PDF na ovom računalu nikad se ne mijenja: promjene su dio kopije koju spremate.

## Odaberite što mijenjate

1. Odaberite {{ui:Sadržaj}} u grupi {{ui:Odabir}} ili pritisnite {{key:B}}.
2. U {{ui:Odabir}} u {{ui:Svojstva}} uključite ili isključite {{ui:Oblici}}, {{ui:Slike}} i {{ui:Tekst}}. Može se odabrati samo vrsta koje su uključene, pa možete odabrati tekst gusto ispunjenog crteža bez hvatanja njegovih linija.
3. Kliknite nešto da ga odaberete. Shift+klik dodaje ili uklanja. Povucite okvir preko praznog papira da odaberete više: povlačenje udesno uzima ono što je u potpunosti unutar okvira, a povlačenje ulijevo uzima ono što okvir dodiruje.

Oblik unutar obrezanog područja odabire se samo tamo gdje se vidi.

## Pomičite, mijenjajte veličinu, bojite, brišite

- **Pomicanje:** povucite odabrani objekt ili pritisnite tipke sa strelicama (držite Shift za veće korake). Držite Shift dok povlačite da biste se kretali ravno udesno ili ravno gore.
- **Promjena veličine:** povucite jedan od osam kvadrata oko odabira. Raste ili se smanjuje s suprotne strane. Držite Shift da zadržite proporcije.
- **Bojanje:** za linije i oblike postavite {{ui:Boja linije}}, {{ui:Boja ispune}} i {{ui:Debljina linije (pt)}} u {{ui:Svojstva}}.
- **Brisanje:** pritisnite {{key:Delete}} ili odaberite {{ui:Izbriši sa stranice}}.
- **Poništavanje:** svaka promjena je jedan korak: {{key:Mod+Z}} je poništava, {{key:Mod+Y}} je vraća.

{{ui:Vrati kako je bilo}} poništava sve promjene odabranih objekata odjednom; {{ui:Vrati ovu stranicu kako je bila}} to radi za cijelu stranicu.

## Kopirajte, izrežite i zalijepite sadržaj stranice

Odaberite linije, slike ili tekst alatom {{ui:Sadržaj}}, zatim:

- {{key:Mod+C}} kopira, {{key:Mod+X}} izrezuje (kopira i uklanja sa stranice), {{key:Mod+D}} stavlja kopiju pored njih.
- {{key:Mod+V}} lijepi kao sadržaj stranice, pored izvornika ili tamo gdje je pokazivač (kako navode [Postavke](topic:settings)); {{key:Mod+Shift+V}} lijepi točno na isto mjesto. Lijepite na drugoj stranici, u drugom otvorenom PDF-u ili u drugoj kartici MarkupCrafta u ovom pregledniku.
- Izbornik grupe {{ui:Uređivanje}} i izbornik desnog klika imaju iste naredbe.

Lijepljenje zadržava linije kao linije, riječi kao riječi u vlastitom fontu, a slike kao slike. To je jedan dio: pomaknite ga, promijenite mu veličinu kvadratima, izbrišite ga ili ga poništite pomoću {{key:Mod+Z}}. Postaje dio stranice u kopiji koju spremate. Što god ste kopirali zadnje, oznake ili sadržaj stranice, to {{key:Mod+V}} zalijepi.

Ono što kopija sadrži ograničeno je na okvir oko odabira: nešto što MarkupCraft ne može izvući iz kopije (vidi dolje), a što se nalazi unutar tog okvira, dolazi zajedno.

## Pomicanje točaka linije

Dvaput kliknite liniju ili krivulju (ili je odaberite i odaberite {{ui:Uredi točke}}). Njezine točke prikazuju se kao kvadrati, a ručke krivulje kao krugovi. Povucite točku ili ručku; točka povlači susjedne ručke uz sebe, pa krivulja zadržava svoj oblik oko nje. Pritisnite {{key:Esc}} ili kliknite pored linije kad ste gotovi.

Pravokutnici nemaju točke za povlačenje: mijenjajte im veličinu kvadratima oko njih.

## Zamijenite sliku

Odaberite sliku i odaberite {{ui:Zamijeni sliku…}}, zatim odaberite PNG, JPEG ili SVG datoteku (ili PDF: njegovu prvu stranicu). Nova slika popunjava mjesto stare, zadržavajući vlastite proporcije.

## Promijenite riječi retka teksta

Dvaput kliknite redak teksta, upišite nove riječi u {{ui:Riječi}} i pritisnite {{key:Enter}}. Riječi se pišu fontom i veličinom retka, a redak zadržava svoju duljinu, pa se tekst iza njega ne pomiče.

:::note
Većina PDF-ova nosi samo slova koja koriste iz svakog fonta. Kad upišete slovo koje kopija fonta u datoteci nema, MarkupCraft ga ispisuje fontom Helvetica i to kaže. {{ui:Svojstva}} prikazuju koja slova font u datoteci ima.
:::

Tekst se mijenja po jedan redak; ne prelazi u sljedeći redak.

## Što MarkupCraft ostavlja nepromijenjeno

- **Skenirane stranice** su jedna slika: možete pomicati, mijenjati veličinu, zamijeniti ili izbrisati sliku, ali se sadržaj u njoj ne može uređivati.
- **Šifrirani i potpisani PDF-ovi:** promjena stranice prekinula bi potpis, pa alat {{ui:Sadržaj}} to kaže i ništa ne mijenja. Oznake i dalje rade.
- **Područja obrezivanja, objekti podijeljeni između dvaju dijelova sadržaja stranice i prijelazi boja koji ispunjavaju cijelo područje ostaju kakvi jesu; MarkupCraft kaže zašto kad pokušate.
- **Riječi u standardnom fontu koji PDF ne opisuje** (npr. font Times bez širina slova u datoteci) ne mogu se mijenjati, jer MarkupCraft ne bi mogao zadržati razmak retka. Redak se i dalje može pomicati.

## Stavite oznake na stranicu

Linije, pravokutnike, elipse, polilinije, oblake i poteze olovkom koje ste nacrtali kao oznake mogu postati dio same stranice: odaberite ih i odaberite {{ui:Stavi u stranicu}} u {{ui:Svojstva}}. Tekst, pečati, slike i prozirne boje ostaju oznake.
