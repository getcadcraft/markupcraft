---
title: Dolazak iz drugog softvera za označavanje
summary: Kako se navike desktop programa za označavanje PDF-a preslikavaju na MarkupCraft i razlike koje iznenade ljude.
keywords: prebacivanje, prelazak, migracija, poznato, desktop PDF označavanje, skup alatki, lista označavanja, preklapanje, sesije, profil, prečice, razlike
from: c8f323e1
---

Ako pregledate crteže u Bluebeam Revu (ili komentarišete PDF-ove u drugom desktop PDF programu), većina MarkupCraft-a će vam biti poznata: oblaci, pokazne oznake, skup alatki, lista označavanja, statusi sa odgovorima, izmerene dužine, preklapanja listova. Način rada s datotekama je velika razlika, zato pročitajte sledeći odeljak čak i ako preskočite ostatak.

## Pet razlika koje su bitne

1. **Čuvanje pravi novu datoteku.** MarkupCraft radi u pregledaču i ne može da prepiše PDF na vašem disku. {{ui:Save}} preuzima „<name> (marked up).pdf“, a original ostaje kakav je bio. Sledeći put otvorite kopiju „(marked up)“, a stare kopije sami počistite.
2. **PDF se čuva kad sačuvate.** Do tada kopija za oporavak u ovom pregledaču čuva vaša označavanja kroz pad ili zatvoren tab, a MarkupCraft je ponudi sledeći put. To je zaštitna mreža: sačuvajte PDF da biste zadržali pregled.
3. **Vaš profil živi u pregledaču.** Vaše ime autora, podešavanja alata i skup alatki čuvaju se u ovom pregledaču na ovom računaru. Drugi pregledač ili računar počinje ispočetka, a brisanje podataka sajta ih briše. Izvezite skup alatki kao rezervnu kopiju. Pogledajte [Šta ostaje u ovom pregledaču](topic:browser-storage).
4. **Još nema deljenih sesija.** Nema zajedničke sesije pregleda uživo ni oblačnog projekta. Pregled putuje u PDF-u: sačuvajte, pošaljite kopiju, sledeća osoba odgovara i čuva.
5. **Razmera je po listu, i samo po listu.** Nema prozora pogleda unutar lista niti „primeni ovu razmeru na sve stranice“. Kalibrišite svaki list koji merite.

## Navika po navika

| Navikli ste se na | U MarkupCraft-u |
|---|---|
| Panel sa sličicama, oznake stranica | {{ui:Sheets}} sa leve strane. Nazivi dolaze iz oznaka stranica ili se čitaju iz naslovnog bloka; ispravite ih sa {{ui:Rename sheet}}. |
| Otvaranje više PDF-ova kao skupa | Otvorite ih sve odjednom; postaju jedna lista. Datoteka skupa se ne čuva: sledeći put otvorite iste PDF-ove. |
| Skup alatki sa setovima alata | Kartica {{ui:Tools}}: jedan skup po pregledaču, sačuvani alati sa stilom i predmetom. Deli se preko {{ui:Export}} i {{ui:Import}} kao JSON datoteka. Datoteke skupova alata iz drugih programa ne mogu se uvoziti. |
| Panel svojstava | Kartica {{ui:Properties}}: status, predmet, komentar, stil, odgovori i stavka liste nedostataka na jednom mestu. |
| Lista označavanja sa kolonama | Kartica {{ui:Markups}} sa filterima za list, autora, status i vrstu. Izvoz u CSV ili BCF. Nema prilagođenih kolona i još nema sažetka PDF-a ili radne sveske. |
| Status i stanje pregleda | {{ui:Status}}: Otvoreno, Prihvaćeno, Odbijeno, Završeno. Nema prilagođenih skupova statusa. Čuva se kao standardna stanja pregleda. |
| Odgovori na označavanje | Nit „Odgovori“ u {{ui:Properties}}, sa zabeleženim promenama statusa. Poslat odgovor ne može se menjati. |
| Kalibrišite, zatim dužina, površina, brojanje | {{ui:Calibrate}}, {{ui:Length}} ({{key:M}}), {{ui:Area}} ({{key:Q}}, daje površinu i obim), {{ui:Count}} ({{key:U}}). Još nema ugla, poluprečnika, zapremine, dužine polilinije ni otvora. |
| Preklapanje stranica | {{ui:Compare}} kartica: crveno za staro, plavo za novo, poravnanje po dve tačke. Nema automatskog oblačenja razlika između dokumenata. |
| Pečati | {{ui:Stamp}} sa šest ugrađenih pečata i prilagođenim tekstom, potpisanih vašim imenom i datumom. Još nema pečata sa slikom ili potpisom. |
| Praćenje nedostataka ili problema | Kartica {{ui:Punch list}}: numerisane stavke sa licem zaduženim, rokom i statusom; izvoz u CSV. |
| Sesija saradnje uživo | Još nije dostupna. Prosledite sačuvani PDF. |
| Spljoštavanje | Još nije napravljeno. Označavanja ostaju kao komentari koje drugi pregledači mogu da prikažu i odštampaju. |
| Slojevi za označavanja | Još nije napravljeno. Koristite predmete, autore i filtere liste da biste sortirali komentare. |
| Hiperveze između listova | Još nije napravljeno. |
| Razmaknica za pomeranje, točkić za zum | Isto: držite {{key:Space}} i prevucite; točkić zumira na mestu pokazivača. Točkić nikad ne pomera stranicu. |

## Tasteri koji se razlikuju

Mnogi tasteri sa jednim slovom su onakvi kakve biste očekivali, ali proverite ove pre nego što ih prsti urade umesto vas:

- {{key:K}} je {{ui:Callout}}, a {{key:Q}} je {{ui:Area}}. Ako ste navikli na Q za pokazne oznake, ovde će pokrenuti oblast.
- {{key:C}} je kutija {{ui:Cloud}}; {{key:Shift+C}} je {{ui:Free cloud}}.
- {{key:M}} je {{ui:Length}}, {{key:U}} je {{ui:Count}}, {{key:Y}} je {{ui:Polyline}}, {{key:G}} je {{ui:Polygon}}, {{key:I}} je {{ui:Highlight}}.
- {{key:Mod+D}} duplira izbor (umesto oznake knjige pregledača).
- {{key:Mod+Plus}} i {{key:Mod+Minus}} zumiraju list, a ne stranicu pregledača.
- Svaki taster može se promeniti: pogledajte dole.

:::tip
Ako vaši prsti znaju Bluebeam Revu, izaberite stil menija {{ui:PDF review}} u {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}: traka menija (Datoteka, Uređivanje, Prikaz, Dokument, Označavanje, Merenje, Prozor) iznad reda alata za pregled, {{key:Q}} za pokaznu oznaku, {{key:H}} za marker, {{key:N}} za poligon, a merenja na {{key:Alt+Shift}} sa slovom. I tu se svaki taster može promeniti. Pogledajte [Meniji, tasteri i miš](topic:menus-keys-and-mouse).
:::

Pun spisak je u [Tastatura i miš](topic:keyboard).

## Stvari koje rade drugačije nego što očekujete

- **Alati ostaju uključeni.** Posle oblaka i dalje crtate oblake. {{key:Esc}} jednom briše izbor, dvaput vraća na {{ui:Select}}.
- **Tekst i pokazne oznake moraju imati tekst.** Ako završite bez ikakvog unosa, ne dodaje se označavanje. Beleške ostaju prazne.
- **Merenja prvo traže razmeru.** {{ui:Length}} i {{ui:Area}} prebacuju na {{ui:Calibrate}} na nekalibrisanom listu i vraćaju se posle.
- **Komentari iz drugih programa.** Pravougaonici, elipse, linije, polilinije, poligoni, mastilo, tekstualni okviri i lepljive beleške napravljeni drugde postaju izmenjiva MarkupCraft označavanja i prepisuju se na način MarkupCraft-a kad sačuvate (izgled se može malo promeniti). Tekstualni markeri, pečati drugih programa i ostale posebne vrste ostaju samo za čitanje: možete odgovoriti na njih, ali ne i menjati ih.
- **Znaci van zapadnoevropskih slova** štampaju se kao „?“ u sačuvanom PDF-u. Pogledajte [Čuvanje PDF-a sa označavanjima](topic:save-the-marked-up-pdf).
- **Datumi pečata** koriste UTC, pa pečat napravljen kasno uveče u Americi može prikazati sutrašnji datum.
- **Merenja se prenose** kao standardni komentari merenja, a svaki kalibrisani list čuva svoju razmeru, pa program koji čita PDF merenja obično može da ih prikaže. Tačno ponašanje zavisi od tog programa.

## Korišćenje oba

Možete ići napred-nazad. Komentari napravljeni drugde otvaraju se u MarkupCraft-u, a PDF „(marked up)“ otvara se u drugim PDF programima sa svim označavanjima, odgovorima i statusima vidljivima. Ono što samo MarkupCraft čita nazad (lice zaduženo i rok stavke liste nedostataka, status stavke) čuva se u datoteci za MarkupCraft.
