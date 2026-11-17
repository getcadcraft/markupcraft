---
title: Dolazak iz drugog softvera za označavanje
summary: Kako navike desktop programa za označavanje PDF-a odgovaraju MarkupCraft-u i razlike koje ljude znaju iznenaditi.
keywords: prebacivanje, prelazak, migracija, poznato, desktop pdf označavanje, alatna kutija, lista oznaka, preklop, sesije, profil, prečice, razlike
from: c8f323e1
---

Ako pregledaš crteže u Bluebeam Revu (ili komentarišeš PDF-ove u nekom drugom desktop programu za PDF), veći dio MarkupCraft-a će ti biti poznat: oblaci, izvučene oznake, alatna kutija, lista oznaka, statusi s odgovorima, kalibrirana mjerenja, preklopi listova. Način na koji se datoteke obrađuju je velika razlika, pa pročitaj sljedeći odjeljak čak i ako preskočiš ostalo.

## Pet razlika koje su bitne

1. **Spasi pravi novu datoteku.** MarkupCraft radi u pregledniku i ne može prepisati PDF na tvom disku. {{ui:Spasi}} preuzima "<name> (marked up).pdf", a original ostaje kakav je bio. Sljedeći put otvori kopiju "(marked up)" i sam počisti stare kopije.
2. **PDF se čuva kad ga spasiš.** Dok to ne uradiš, kopija za oporavak u ovom pregledniku čuva tvoje oznake kroz pad ili zatvoren tab, a MarkupCraft je ponudi nazad sljedeći put. To je mreža sigurnosti: spasi PDF da bi zadržao pregled.
3. **Tvoj profil živi u pregledniku.** Tvoje ime autora, postavke alata i alatna kutija čuvaju se u ovom pregledniku na ovom računaru. Drugi preglednik ili računar kreću ispočetka, a brisanje podataka sajta ih briše. Izvezi alatnu kutiju kao sigurnosnu kopiju. Pogledaj [Šta ostaje u ovom pregledniku](topic:browser-storage).
4. **Još nema zajedničkih sesija.** Nema žive, zajedničke sesije pregleda ni cloud projekta. Pregled putuje u PDF-u: spasi, pošalji kopiju, sljedeća osoba odgovori i spasi.
5. **Razmjera je po listu, i samo po listu.** Nema prozora prikaza unutar lista i nema "primijeni ovu razmjeru na sve stranice". Kalibriraj svaki list na kojem mjeriš.

## Navika po navika

| Navikao si na | U MarkupCraft-u |
|---|---|
| Panel s minijaturama, oznake stranica | {{ui:Listovi}} lijevo. Nazivi dolaze iz oznaka stranica ili se čitaju iz naslovnog bloka; popravi ih s {{ui:Preimenuj list}}. |
| Otvaranje više PDF-ova kao skupa | Otvori ih sve odjednom; postaju jedna lista. Nijedna datoteka skupa se ne čuva: sljedeći put otvori iste PDF-ove. |
| Alatna kutija sa skupovima alata | Kartica {{ui:Alati}}: jedna kutija po pregledniku, spašeni alati sa stilom i predmetom. Dijeli se preko {{ui:Izvezi}} i {{ui:Uvezi}} kao JSON datoteka. Datoteke skupova alata iz drugih programa se ne mogu uvesti. |
| Panel svojstava | Kartica {{ui:Svojstva}}: status, predmet, komentar, stil, odgovori i stavka liste ispravki na jednom mjestu. |
| Lista oznaka s kolonama | Kartica {{ui:Oznake}} s filterima po listu, autoru, statusu i vrsti. Izvoz u CSV ili BCF. Nema prilagođenih kolona i još nema sažetka PDF-a ili radne sveske. |
| Status i stanje pregleda | {{ui:Status}}: Otvoreno, Prihvaćeno, Odbijeno, Završeno. Nema prilagođenih skupova statusa. Spašava se kao standardna stanja pregleda. |
| Odgovori na oznaku | Nit "Odgovori" u {{ui:Svojstva}}, s promjenama statusa zabilježenim u njoj. Poslani odgovor se ne može uređivati. |
| Kalibriraj, pa dužina, površina, brojanje | {{ui:Kalibriraj}}, {{ui:Dužina}} ({{key:M}}), {{ui:Površina}} ({{key:Q}}, daje površinu i obim), {{ui:Brojanje}} ({{key:U}}). Još nema ugla, radijusa, zapremine, dužine polilinije ni izreza. |
| Preklapanje stranica | Kartica {{ui:Poređenje}}: crveno za staro, plavo za novo, poravnanje po dvije tačke. Nema automatskog oblaka za poređenje dokumenata. |
| Pečati | {{ui:Pečat}} sa šest ugrađenih pečata i prilagođenim tekstom, potpisan tvojim imenom i datumom. Još nema pečata sa slikom ili potpisom. |
| Praćenje ispravki ili problema | Kartica {{ui:Lista ispravki}}: numerisane stavke s dodijeljenim, rokom i statusom; izvoz u CSV. |
| Zajednička sesija uživo | Još nije dostupna. Proslijedi sačuvani PDF. |
| Spljoštavanje | Još nije napravljeno. Oznake ostaju kao komentari koje drugi pregledači mogu prikazati i štampati. |
| Slojevi za oznake | Još nije napravljeno. Koristi predmete, autore i filtere liste da sortiraš komentare. |
| Hiperveze između listova | Još nije napravljeno. |
| Razmaknica za pomjeranje, točkić za zum | Isto: drži {{key:Space}} i prevuci; točkić zumira na pokazivaču. Točkić nikad ne pomjera stranicu. |

## Tipke koje se razlikuju

Mnoga jednoslovna dugmad su ono što bi očekivao, ali provjeri ova prije nego prsti to urade umjesto tebe:

- {{key:K}} je {{ui:Izvučena oznaka}}, a {{key:Q}} je {{ui:Površina}}. Ako si navikao na Q za izvučene oznake, ovdje će pokrenuti površinu.
- {{key:C}} je kutija {{ui:Oblak}}; {{key:Shift+C}} je {{ui:Slobodni oblak}}.
- {{key:M}} je {{ui:Dužina}}, {{key:U}} je {{ui:Brojanje}}, {{key:Y}} je {{ui:Polilinija}}, {{key:G}} je {{ui:Poligon}}, {{key:I}} je {{ui:Isticanje}}.
- {{key:Mod+D}} duplicira odabir (umjesto markera preglednika).
- {{key:Mod+Plus}} i {{key:Mod+Minus}} zumiraju list, a ne stranicu preglednika.
- Bilo koju tipku je moguće promijeniti: pogledaj dolje.

:::tip
Ako tvoji prsti znaju Bluebeam Revu, izaberi stil menija {{ui:PDF pregled}} u {{ui:Postavke}} › {{ui:MarkupCraft}} › {{ui:Meniji, tipke i miš}}: traka menija (Datoteka, Uredi, Pogled, Dokument, Označavanje, Mjeri, Prozor) iznad reda alata za pregled, {{key:Q}} za izvučenu oznaku, {{key:H}} za isticač, {{key:N}} za poligon, a mjerenja na {{key:Alt+Shift}} s nekim slovom. I ovdje se bilo koja tipka može promijeniti. Pogledaj [Meniji, tipke i miš](topic:menus-keys-and-mouse).
:::

Puna lista je u [Tastatura i miš](topic:keyboard).

## Stvari koje rade drugačije nego što možda očekuješ

- **Alati ostaju uključeni.** Nakon oblaka i dalje crtaš oblake. {{key:Esc}} jednom briše odabir, dvaput vraća na {{ui:Odaberi}}.
- **Tekst i izvučene oznake trebaju tekst.** Završi bez upisa i nijedna oznaka se ne dodaje. Bilješke ostaju prazne.
- **Mjerenja prvo trebaju razmjeru.** {{ui:Dužina}} i {{ui:Površina}} prebacuju na {{ui:Kalibriraj}} na nekalibriranom listu i vraćaju se poslije.
- **Komentari iz drugih programa.** Pravougaonici, elipse, linije, polilinije, poligoni, crtež, tekstualna polja i samoljepljive bilješke napravljene drugdje postaju oznake MarkupCraft-a koje se mogu uređivati, i prepisuju se na način MarkupCraft-a kad spasiš (izgled se može malo promijeniti). Tekstualni isticači, pečati drugih programa i ostale posebne vrste ostaju samo za čitanje: možeš im odgovoriti, ali ih ne možeš mijenjati.
- **Znakovi izvan slova zapadne Evrope** u sačuvanom PDF-u štampaju se kao "?". Pogledaj [Spasi PDF s oznakama](topic:save-the-marked-up-pdf).
- **Datumi pečata** koriste UTC, pa pečat napravljen kasno uveče u Americi može pokazati sutrašnji datum.
- **Mjerenja se prenose** kao standardni komentari mjerenja, a svaki kalibrirani list čuva svoju razmjeru, pa program koji čita mjerenja iz PDF-a obično može da ih prikaže. Tačno ponašanje zavisi od tog programa.

## Korištenje oba

Možeš ići naprijed-nazad. Komentari napravljeni drugdje otvaraju se u MarkupCraft-u, a PDF "(marked up)" otvara se u drugim PDF programima sa svim oznakama, odgovorima i statusima vidljivima. Ono što samo MarkupCraft čita nazad (dodijeljeni i rok stavke liste ispravki, status stavke) čuva se u datoteci za MarkupCraft.
