---
title: Dolazak iz drugog programa za označavanje
summary: Kako se navike desktop programa za označavanje PDF-ova preslikavaju na MarkupCraft i razlike zbog kojih ljudi griješe.
keywords: prebacivanje, migracija, poznato, desktop pdf označavanje, spremnik alata, popis oznaka, overlay, sesije, profil, prečaci, razlike
from: c8f323e1
---

Ako pregledavate crteže u Bluebeam Revu (ili komentirate PDF-ove u drugom desktop PDF programu), većina programa MarkupCraft bit će vam poznata: oblaci, oblačići, spremnik alata, popis oznaka, statusi s odgovorima, kalibrirana mjerenja, overlay listova. Velika razlika je način na koji se rukuje datotekama, pa pročitajte sljedeći odjeljak čak i ako preskočite ostalo.

## Pet razlika koje su bitne

1. **Spremanje stvara novu datoteku.** MarkupCraft radi u pregledniku i ne može prepisati PDF na vašem disku. {{ui:Spremi}} preuzima „<name> (marked up).pdf“, a izvornik ostaje kakav je bio. Sljedeći put otvorite kopiju „(marked up)“ i sami uklonite stare kopije.
2. **PDF se sprema kad spremite.** Do tada kopija za oporavak u ovom pregledniku čuva oznake kroz pad programa ili zatvorenu karticu, a MarkupCraft je ponudi natrag sljedeći put. To je sigurnosna mreža: spremite PDF da biste sačuvali pregled.
3. **Vaš profil živi u pregledniku.** Vaše ime autora, postavke alata i spremnik alata čuvaju se u ovom pregledniku na ovom računalu. Drugi preglednik ili računalo počinje ispočetka, a brisanje podataka web-mjesta ih briše. Izvezite spremnik alata kao sigurnosnu kopiju. Vidi [Što ostaje u ovom pregledniku](topic:browser-storage).
4. **Još nema zajedničkih sesija.** Nema uživo zajedničke sesije pregleda ni oblačnog projekta. Pregled putuje u PDF-u: spremite, pošaljite kopiju, sljedeća osoba odgovori i spremi.
5. **Mjerilo je po listu, i samo po listu.** Nema viewporta unutar lista niti „primijeni ovo mjerilo na sve stranice“. Kalibrirajte svaki list na kojem mjerite.

## Navika po navika

| Navikli ste se na | U programu MarkupCraft |
|---|---|
| Panel s minijaturama, oznake stranica | {{ui:Listovi}} s lijeve strane. Nazivi dolaze iz oznaka stranica ili se čitaju iz zaglavlja crteža; popravite ih s {{ui:Preimenuj list}}. |
| Otvaranje više PDF-ova kao skupa | Otvorite ih sve odjednom; postaju jedan popis. Nijedna datoteka skupa se ne sprema: sljedeći put otvorite iste PDF-ove. |
| Spremnik alata sa skupovima alata | Kartica {{ui:Alati}}: jedan spremnik po pregledniku, spremljeni alati sa stilom i predmetom. Dijelite putem {{ui:Izvezi}} i {{ui:Uvezi}} kao JSON datoteke. Datoteke skupova alata iz drugih programa ne mogu se uvesti. |
| Panel svojstava | Kartica {{ui:Svojstva}}: status, predmet, komentar, stil, odgovori i stavka popisa nedostataka na jednom mjestu. |
| Popis oznaka sa stupcima | Kartica {{ui:Oznake}} s filtrima po listu, autoru, statusu i vrsti. Izvoz CSV ili BCF. Još nema prilagođenih stupaca ni sažetka PDF-a ili radne knjige. |
| Status i stanje pregleda | {{ui:Status}}: Otvoreno, Prihvaćeno, Odbijeno, Dovršeno. Nema prilagođenih skupova statusa. Spremaju se kao standardna stanja pregleda. |
| Odgovori na oznaku | Nit „Odgovori“ u {{ui:Svojstva}}, s upisanim promjenama statusa. Poslani odgovor se ne može urediti. |
| Kalibrirajte, zatim duljina, površina, broj | {{ui:Kalibriraj}}, {{ui:Duljina}} ({{key:M}}), {{ui:Površina}} ({{key:Q}}, daje površinu i opseg), {{ui:Broji}} ({{key:U}}). Još nema kuta, radijusa, volumena, duljine polilinije ni otvora. |
| Preklapanje stranica | Kartica {{ui:Usporedba}}: crveno za staro, plavo za novo, poravnanje po dvije točke. Nema automatskog oblačenja „usporedi dokumente“. |
| Pečati | {{ui:Pečat}} sa šest ugrađenih pečata i prilagođenim tekstom, potpisan vašim imenom i datumom. Još nema pečata sa slikom ili potpisom. |
| Praćenje nedostataka ili izdanja | Kartica {{ui:Popis nedostataka}}: stavke s brojem, dodijeljenom osobom, rokom i statusom; izvoz CSV. |
| Zajednička sesija uživo | Još nije dostupna. Proslijedite spremljeni PDF. |
| Spljoštavanje | Još nije izrađeno. Oznake ostaju kao komentari koje druge aplikacije mogu prikazati i ispisati. |
| Slojevi za oznake | Još nije izrađeno. Koristite predmete, autore i filtre popisa za sortiranje komentara. |
| Hiperveze između listova | Još nije izrađeno. |
| Razmaknica za pomicanje, kotačić za zumiranje | Isto: držite {{key:Space}} i povucite; kotačić zumira na pokazivaču. Kotačić nikad ne pomiče stranicu. |

## Tipke koje se razlikuju

Mnoge tipke s jednim slovom su onakve kakve biste očekivali, ali provjerite ove prije nego prsti to učine umjesto vas:

- {{key:K}} je {{ui:Oblačić}}, a {{key:Q}} je {{ui:Površina}}. Ako ste navikli na Q za oblačiće, ovdje će pokrenuti površinu.
- {{key:C}} je okvir {{ui:Oblak}}; {{key:Shift+C}} je {{ui:Slobodni oblak}}.
- {{key:M}} je {{ui:Duljina}}, {{key:U}} je {{ui:Broji}}, {{key:Y}} je {{ui:Polilinija}}, {{key:G}} je {{ui:Poligon}}, {{key:I}} je {{ui:Isticanje}}.
- {{key:Mod+D}} duplicira odabir (umjesto oznake preglednika).
- {{key:Mod+Plus}} i {{key:Mod+Minus}} zumiraju list, a ne stranicu preglednika.
- Svaka tipka se može promijeniti: vidi dolje.

:::tip
Ako su vaši prsti naučili Bluebeam Revu, u {{ui:Postavke}} › {{ui:MarkupCraft}} › {{ui:Izbornici, tipke i miš}} odaberite stil izbornika {{ui:Pregled PDF-a}}: traka izbornika (Datoteka, Uređivanje, Prikaz, Dokument, Oznaka, Mjerenje, Prozor) iznad retka alata za pregled, {{key:Q}} za oblačić, {{key:H}} za isticač, {{key:N}} za poligon, a mjerenja na {{key:Alt+Shift}} s nekim slovom. I tu se svaka tipka može promijeniti. Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse).
:::

Cijeli popis je u [Tipkovnica i miš](topic:keyboard).

## Stvari koje rade drukčije nego što možda očekujete

- **Alati ostaju uključeni.** Nakon oblaka i dalje crtate oblake. {{key:Esc}} jednom briše odabir, dvaput vraća na {{ui:Odabir}}.
- **Tekst i oblačići trebaju tekst.** Ako završite bez upisanog teksta, oznaka se ne dodaje. Bilješke ostaju prazne.
- **Mjerenja trebaju prvo mjerilo.** {{ui:Duljina}} i {{ui:Površina}} prebacuju na {{ui:Kalibriraj}} na nekalibriranom listu i vraćaju se nakon toga.
- **Komentari iz drugih programa.** Pravokutnici, elipse, linije, polilinije, poligoni, tinta, tekstni okviri i ljepljive bilješke napravljeni drugdje postaju uredive oznake u programu MarkupCraft i ponovno se pišu na način programa MarkupCraft pri spremanju (izgled se može malo promijeniti). Tekstna isticanja, pečati drugih programa i druge posebne vrste ostaju samo za čitanje: možete odgovoriti na njih, ali ih ne možete mijenjati.
- **Znakovi izvan zapadnoeuropskih slova** ispisuju se kao „?“ u spremljenom PDF-u. Vidi [Spremi označeni PDF](topic:save-the-marked-up-pdf).
- **Datumi pečata** koriste UTC, pa pečat napravljen kasno navečer u Americi može pokazati sutrašnji datum.
- **Mjerenja se prenose** kao standardni komentari o mjerenju, a svaki kalibrirani list čuva svoje mjerilo, pa program koji čita PDF-mjerenja obično može prikazati. Točno ponašanje ovisi o tom programu.

## Korištenje oba

Možete ići naprijed-natrag. Komentari napravljeni drugdje otvaraju se u programu MarkupCraft, a označeni PDF se otvara u drugim PDF programima sa svim oznakama, odgovorima i statusima vidljivima. Ono što samo MarkupCraft čita natrag (dodijeljena osoba i rok stavke popisa, status stavke) čuva se u datoteci za MarkupCraft.
