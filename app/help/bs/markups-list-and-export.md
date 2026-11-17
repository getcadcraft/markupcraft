---
title: Lista oznaka, filteri i izvoz
summary: Pogledaj svaku oznaku u skupu, filtriraj po listu, autoru, statusu i vrsti, skoči na jednu i izvezi listu kao CSV ili BCF.
keywords: lista oznaka, lista, sažetak, xlsx, tabelarna radna sveska, pdf izvještaj, uvezi bcf, filter, sortiraj, izvještaj, izvoz, csv, bcf, bcfzip, problemi, lista komentara, skoči
from: 6c70261e
---

## Otvori listu

Odaberi karticu {{ui:Oznake}} s desne strane. Svaka oznaka svake otvorene datoteke je navedena, po redoslijedu listova, pa po redoslijedu kojim su napravljene. Svaki red prikazuje:

- ikonu u boji oznake, njen broj ispravke ako ga ima („#4”), i njenu temu,
- njen tekst, tekst pečata ili izmjerenu vrijednost, i njen komentar,
- list, autora i datum,
- njen status (ili „Samo za čitanje” za komentare koji su došli uz datoteku), i broj odgovora kada ih ima.

Red iznad liste ih broji: „38 oznaka”, ili „12 od 38 oznaka” kada je filtrirano.

## Skoči na oznaku

Klikni red. MarkupCraft prikazuje taj list, odabire oznaku i uvećava je kada je van ekrana ili premala da se vidi. {{ui:Svojstva}} ima njene detalje i nit kada se vratiš na tu karticu.

## Filtriraj

Četiri menija iznad liste. Kombinuju se.

| Meni | Izbori |
|---|---|
| {{ui:List}} | Svi listovi, Ovaj list (prati te dok mijenjaš listove), ili bilo koji list koji ima oznake |
| {{ui:Autor}} | Bilo ko, ili svaki autor u skupu |
| {{ui:Status}} | Bilo koji status, Otvoren, Prihvaćen, Odbijen, Završen |
| {{ui:Vrsta}} | Bilo koja vrsta, ili svaka vrsta oznake u skupu |

Primjeri:

- Šta je još otvoreno na ovom listu: {{ui:List}} „Ovaj list”, {{ui:Status}} „Otvoren”.
- Komentari jednog konsultanta: {{ui:Autor}} njegovo ime.
- Sva mjerenja: {{ui:Vrsta}} „Dužina” ili „Površina”.

Lista prikazuje do 2000 redova; suzi je filterom u vrlo velikim skupovima.

## Izvoz u CSV

Odaberi {{ui:CSV}} na vrhu kartice. Dobiješ „<name> markups.csv” s **oznakama kako su trenutno filtrirane**, jedna po redu, s ovim kolonama:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- „Tekst” sadrži riječi tekstualnih polja i izvučenih oznaka, tekst pečata ili naziv grupe brojanja.
- „Measurement” sadrži dužine, „površina, obim” za površine, i „grupa: n” za brojanja.
- Datumi su puni vremenski zapisi u UTC.

Da izvezeš sve, prvo vrati svaki filter na njegov prvi izbor.

## Legenda na listu

{{ui:Legenda}} na kartici {{ui:Oznake}} stavlja legendu u gornji desni ugao onoga što vidiš: okvir koji navodi svaku vrstu oznake na listu (po temi i boji, na primjer „Oblak”, „Pitanje” ili „Utičnice”) s brojem svake. Grupa brojanja broji svoje oznake. Legenda nastavlja brojati dok crtaš, pomjeraš ili brišeš oznake, i štampa se i snima s brojevima tog trenutka.

Pomjeri i promijeni veličinu kao bilo koju oznaku. U njenim {{ui:Svojstva}} promijeni njen {{ui:Naslov}}, ili postavi {{ui:Brojanje}} na {{ui:Cijeli skup}} da broji svaki list. Prostori, druge legende i komentari iz drugih programa se ne broje.

## Tvoje kolone i sortiranje

{{ui:Kolone}} na kartici {{ui:Oznake}} dodaje sopstvene kolone svakoj oznaci: **tekst**, **izbor** (na primjer Struka: Mašinska, Elektro, Vodovod), **broj** (na primjer Trošak) ili **datum**. Daj svakoj ime, izaberi njenu vrstu, navedi izbore za kolonu izbora, i odaberi {{ui:Spasi kolone}}.

- Popuni ih u {{ui:Svojstva}}: svaka kolona ima polje tamo. Kolona broja prima samo brojeve, kolona datuma datum.
- Lista prikazuje vrijednosti ispod svake oznake. Filter {{ui:Kolona}} bira jednu vrijednost (ili oznake gdje je prazna), a {{ui:Sortiraj}} poređa listu po koloni, po autoru, statusu, vrsti ili datumu, umjesto po listu.
- CSV i XLSX izvozi nose kolone poslije uobičajenih. Kolone se snimaju s PDF-om i vraćaju se kada ga ponovo otvoriš.

## Izvoz sažetka: radna sveska ili PDF

- {{ui:XLSX}} preuzima „<name> markup summary.xlsx” s tri lista: **Markups** (jedan red po navedenoj oznaci, iste kolone kao CSV), **By sheet** (koliko oznaka ima svaki list, otvorenih i zatvorenih, i koliko svake vrste, sa zbirovima) i **Punch list** (kada ima stavki ispravke).
- {{ui:PDF}} preuzima „<name> markup summary.pdf”: izvještaj za štampu ili slanje, s nazivom skupa, datumom i tabelom navedenih oznaka (broj, list, vrsta, tema, tekst ili komentar, izmjerena vrijednost, autor, status i zadnji odgovor). Dugi tekst se prelama; zaglavlje tabele se ponavlja na svakoj stranici.

Oba uzimaju listu onako kako je filtrirana, zato prvo filtriraj da prijaviš jedan list, jednog autora ili samo otvorene stavke.

## Izvoz u BCF

Odaberi {{ui:BCF}}. MarkupCraft pravi sliku svake navedene oznake na njenom listu („Making snapshots for BCF (3 of 12)…”), zatim preuzima „<name> markups.bcfzip”. Svaka oznaka postaje jedna BCF tema sa svojim statusom, autorom, datumima, odgovorima kao komentarima, izvršiocem i rokom iz njene stavke ispravke, i snimkom.

Koristi to da unosiš komentare pregleda crteža u alate za BIM koordinaciju koji čitaju BCF. Šta se prenosi, a šta ne, nalazi se u [Osnove BCF-a](topic:bcf-basics).

## Uvezi BCF

{{ui:Uvezi BCF}} čita datoteku .bcfzip (ili .bcf) iz BIM alata:

- Problemi koji potiču od MarkupCraft-ovog BCF izvoza ponovo pronalaze svoje oznake: novi odgovori se dodaju niti, a postavlja se novi status (Closed se računa kao Završen). Odgovori koji su već tu se ne dodaju dvaput.
- Ostali problemi postaju bilješke, sa svojim naslovom, opisom, autorom i komentarima. Bilješka ide na list čiji broj ili naziv navode oznake problema, inače na otvoreni list. Kamera BIM-a nema mjesta na papiru, pa se takve bilješke slažu u gornji lijevi ugao lista da ih ti pomjeriš.

Cijeli uvoz je jedan korak: {{key:Mod+Z}} ga vraća. Vidi [Osnove BCF-a](topic:bcf-basics).

## Šta lista još ne radi

- Grupisanje liste (umjesto toga sortiraj, pa filtriraj).
- Uređivanje vrijednosti u listi (uređuj u {{ui:Svojstva}}; polja ispravke se uređuju u kartici {{ui:Lista ispravki}}).
