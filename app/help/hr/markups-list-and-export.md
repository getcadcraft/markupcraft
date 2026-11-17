---
title: Popis oznaka, filtri i izvoz
summary: Pogledajte svaku oznaku u skupu, filtrirajte po listu, autoru, statusu i vrsti, skočite na jednu i izvezite popis kao CSV ili BCF.
keywords: popis oznaka, popis, sažetak, xlsx, radna knjiga, izvješće, pdf izvješće, uvezi bcf, filtar, sortiranje, izvoz, csv, bcf, bcfzip, problemi, popis komentara, skok
from: 6c70261e
---

## Otvorite popis

Odaberite karticu {{ui:Markups}} s desne strane. Navedena je svaka oznaka svake otvorene datoteke, po redoslijedu listova, a zatim po redoslijedu nastanka. Svaki redak prikazuje:

- ikonu u boji oznake, njen broj stavke ako ga ima („#4“) i njen predmet,
- njen tekst, tekst pečata ili izmjerenu vrijednost i njen komentar,
- list, autora i datum,
- njen status (ili „Samo za čitanje“ za komentare koji su došli s datotekom) i broj odgovora kad ih ima.

Redak iznad popisa ih broji: „38 oznaka“ ili „12 od 38 oznaka“ kad je filtrirano.

## Skočite na oznaku

Kliknite redak. MarkupCraft prikazuje taj list, odabire oznaku i zumira na nju kad je izvan ekrana ili premala da se vidi. {{ui:Properties}} ima njene pojedinosti i nit kad se vratite na tu karticu.

## Filtriranje

Četiri izbornika iznad popisa. Kombiniraju se.

| Izbornik | Izbori |
|---|---|
| {{ui:Sheet}} | Svi listovi, Ovaj list (prati vas dok mijenjate listove), ili bilo koji list koji ima oznake |
| {{ui:Author}} | Bilo tko, ili svaki autor u skupu |
| {{ui:Status}} | Bilo koji status, Otvoreno, Prihvaćeno, Odbijeno, Dovršeno |
| {{ui:Type}} | Bilo koja vrsta, ili svaka vrsta oznake u skupu |

Primjeri:

- Što je još otvoreno na ovom listu: {{ui:Sheet}} „Ovaj list“, {{ui:Status}} „Otvoreno“.
- Komentari jednog konzultanta: {{ui:Author}} njihovo ime.
- Sva mjerenja: {{ui:Type}} „Duljina“ ili „Površina“.

Popis prikazuje do 2000 redaka; u vrlo velikim skupovima suzite ga filtrom.

## Izvoz u CSV

Odaberite {{ui:CSV}} na vrhu kartice. Dobivate „<name> markups.csv“ s **oznakama kako su trenutačno filtrirane**, jedna po retku, sa stupcima:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- „Text“ sadrži riječi tekstnih okvira i oblačića, tekst pečata ili naziv grupe brojanja.
- „Measurement“ sadrži duljine, „površina, opseg“ za površine i „grupa: n“ za brojanja.
- Datumi su potpune vremenske oznake u UTC-u.

Za izvoz svega vratite svaki filtar na prvi izbor.

## Sažetak: radna knjiga ili PDF

- {{ui:XLSX}} preuzima „<name> markup summary.xlsx“ s tri lista: **Markups** (jedan redak po navedenoj oznaci, isti stupci kao u CSV-u), **By sheet** (koliko oznaka ima svaki list, otvorenih i zatvorenih, te koliko je svake vrste, s ukupnim zbrojevima) i **Punch list** (kad postoje stavke popisa nedostataka).
- {{ui:PDF}} preuzima „<name> markup summary.pdf“: izvješće za ispis ili slanje, s nazivom skupa, datumom i tablicom navedenih oznaka (broj, list, vrsta, predmet, tekst ili komentar, izmjerena vrijednost, autor, status i zadnji odgovor). Dugi tekst se prelama; zaglavlje tablice ponavlja se na svakoj stranici.

Oba uzimaju popis onako kako je filtriran, pa prvo filtrirajte da izvijestite za jedan list, jednog autora ili samo otvorene stavke.

## Izvoz u BCF

Odaberite {{ui:BCF}}. MarkupCraft izrađuje sliku svake navedene oznake na njenom listu („Izrađujem snimke za BCF (3 od 12)…“), zatim preuzima „<name> markups.bcfzip“. Svaka oznaka postaje jedna BCF tema sa svojim statusom, autorom i datumima; odgovori postaju komentari, a dodijeljeno i rok dolaze iz njene stavke popisa nedostataka. Uz to ide i snimka.

Koristite to da prenesete komentare s pregleda crteža u alate za BIM koordinaciju koji čitaju BCF. Što se prenosi, a što ne, nalazi se u [Osnove BCF-a](topic:bcf-basics).

## Uvoz BCF

{{ui:Import BCF}} čita datoteku .bcfzip (ili .bcf) iz BIM alata:

- Teme nastale iz vlastitog BCF izvoza MarkupCrafta pronalaze svoje oznake: novi odgovori se dodaju niti, a postavlja se novi status (Zatvoreno se računa kao Dovršeno). Odgovori koji su već tu ne dodaju se dvaput.
- Ostale teme postaju bilješke, s naslovom, opisom, autorom i komentarima. Bilješka ide na list čiji broj ili naziv daju oznake teme, inače na otvoreni list. Kamera BIM-a nema mjesta na papiru, pa se takve bilješke slažu u gornji lijevi kut lista da ih pomaknete.

Cijeli uvoz je jedan korak: {{key:Mod+Z}} ga poništava. Vidi [Osnove BCF-a](topic:bcf-basics).

## Vlastiti stupci i sortiranje

{{ui:Columns}} na kartici {{ui:Markups}} dodaje vaše stupce svakoj oznaci: **tekst**, **izbor** (poput Vrsta radova: Strojarski, Elektro, Vodovod), **broj** (poput Trošak) ili **datum**. Dajte svakom ime, odaberite vrstu, za stupac izbora navedite izbore i odaberite {{ui:Save columns}}.

- Ispunite ih pod {{ui:Properties}}: svaki stupac ima polje tamo. Stupac broja prima samo brojeve, a stupac datuma datum.
- Popis prikazuje vrijednosti pod svakom oznakom, filtar {{ui:Column}} bira jednu vrijednost (ili oznake u kojima je prazno), a {{ui:Sort}} slaže popis po stupcu, autoru, statusu, vrsti ili datumu, umjesto po listu.
- CSV i XLSX izvozi nose stupce nakon uobičajenih. Stupci se spremaju s PDF-om i vraćaju se kad ga ponovno otvorite.

## Legenda na listu

{{ui:Legend}} na kartici {{ui:Markups}} stavlja legendu u gornji desni kut onoga što vidite: okvir koji navodi svaku vrstu oznake na listu (po predmetu i boji, poput „Oblak“, „Pitanje“ ili „Utičnice“) s brojem svake. Grupa brojanja broji svoje oznake. Legenda se i dalje broji dok crtate, pomičete ili brišete oznake, a ispisuje se i sprema s brojevima tog trenutka.

Pomaknite je i promijenite joj veličinu kao bilo koju oznaku. U njenim {{ui:Properties}} promijenite {{ui:Title}} ili postavite {{ui:Counts}} na {{ui:The whole set}} da broji svaki list. Prostori, druge legende i komentari iz drugih programa se ne broje.

## Što popis još ne radi

- Grupiranje popisa (zato sortirajte, pa filtrirajte).
- Uređivanje vrijednosti na popisu (uredite ih u {{ui:Properties}}; polja stavki uređuju se na kartici {{ui:Punch list}}).
