---
title: Lista označavanja, filteri i izvoz
summary: Pogledajte svako označavanje u skupu, filtrirajte po listu, autoru, statusu i vrsti, pređite na jedno i izvezite listu kao CSV ili BCF.
keywords: lista označavanja, lista, pregled, xlsx, tabelarna radna sveska, radna sveska, izveštaj u PDF-u, uvoz bcf, filter, sortiranje, izveštaj, izvoz, csv, bcf, bcfzip, problemi, lista komentara, pređi
from: 6c70261e
---

## Otvorite listu

Izaberite karticu {{ui:Markups}} sa desne strane. Svako označavanje svake otvorene datoteke je na listi, po redosledu listova, a zatim po redosledu nastanka. Svaki red prikazuje:

- ikonu u boji označavanja, njegov broj nedostatka ako ga ima („#4“), i njegovu temu,
- njegov tekst, tekst pečata ili izmerenu vrednost, i njegov komentar,
- list, autora i datum,
- njegov status (ili „Samo za čitanje“ za komentare koji su došli uz datoteku), i broj odgovora kada ih ima.

Red iznad liste ih broji: „38 označavanja“, ili „12 od 38 označavanja“ kada je filtrirano.

## Pređite na označavanje

Kliknite red. MarkupCraft prikazuje taj list, bira označavanje i zumira na njega kada je van ekrana ili premalo da se vidi. {{ui:Properties}} ima njegove detalje i nit kada se vratite na tu karticu.

## Filter

Četiri menija iznad liste. Kombinuju se.

| Meni | Izbori |
|---|---|
| {{ui:Sheet}} | Svi listovi, „Ovaj list“ (prati vas dok menjate listove), ili bilo koji list koji ima označavanja |
| {{ui:Author}} | Bilo ko, ili svaki autor u skupu |
| {{ui:Status}} | Bilo koji status, Otvoreno, Prihvaćeno, Odbijeno, Završeno |
| {{ui:Type}} | Bilo koja vrsta, ili svaka vrsta označavanja u skupu |

Primeri:

- Šta je još otvoreno na ovom listu: {{ui:Sheet}} „Ovaj list“, {{ui:Status}} „Otvoreno“.
- Komentari jednog konsultanta: {{ui:Author}} njihovo ime.
- Sva merenja: {{ui:Type}} „Dužina“ ili „Površina“.

Lista prikazuje do 2000 redova; u vrlo velikim skupovima suzite je filterom.

## Izvoz u CSV

Izaberite {{ui:CSV}} na vrhu kartice. Dobijate datoteku „<name> markups.csv“ sa **označavanjima kako su trenutno filtrirana**, jedno po redu, sa ovim kolonama:

Br. nedostatka, List, Datoteka, Stranica, Vrsta, Tema, Tekst, Komentar, Merenje, Autor, Kreirano, Izmenjeno, Status, Odgovori, Poslednji odgovor, Boja, Samo za čitanje.

- „Tekst“ sadrži reči polja za tekst i pokaznih oznaka, tekst pečata ili naziv grupe brojanja.
- „Merenje“ sadrži dužine, „površina, obim“ za površine, i „grupa: n“ za brojanja.
- Datumi su potpune vremenske oznake u UTC-u.

Da izvezete sve, prvo vratite svaki filter na prvi izbor.

## Legenda na listu

{{ui:Legend}} na kartici {{ui:Markups}} postavlja legendu u gornji desni ugao onoga što vidite: okvir sa spiskom svake vrste označavanja na listu (po temi i boji, na primer „Oblak“, „Pitanje“ ili „Utičnice“) sa brojem svake. Grupa brojanja broji svoje oznake. Legenda nastavlja da broji dok crtate, pomerate ili brišete označavanja, i štampa se i čuva sa brojevima u tom trenutku.

Pomerajte je i menjajte joj veličinu kao bilo koje označavanje. U njenom {{ui:Properties}} promenite {{ui:Title}}, ili postavite {{ui:Counts}} na {{ui:The whole set}} da se broje svi listovi. Razmaci, druge legende i komentari iz drugih programa se ne broje.

## Sopstvene kolone i sortiranje

{{ui:Columns}} na kartici {{ui:Markups}} dodaje sopstvene kolone svakom označavanju: **tekst**, **izbor** (na primer Struka: Mašinska, Elektro, Vodovod), **broj** (na primer Cena) ili **datum**. Dajte svakoj ime, izaberite vrstu, navedite izbore za kolonu izbora, i izaberite {{ui:Save columns}}.

- Popunite ih u {{ui:Properties}}: svaka kolona ima polje tamo. Kolona za broj prihvata samo brojeve, a kolona za datum samo datum.
- Lista prikazuje vrednosti ispod svakog označavanja, filter {{ui:Column}} bira jednu vrednost (ili označavanja gde je prazna), a {{ui:Sort}} sortira listu po koloni, autoru, statusu, vrsti ili datumu, umesto po listu.
- Izvozi u CSV i XLSX nose kolone posle uobičajenih. Kolone se čuvaju u PDF-u i vraćaju se kada ga ponovo otvorite.

## Izvezite sažetak: radna sveska ili PDF

- {{ui:XLSX}} preuzima datoteku „<name> markup summary.xlsx“ sa tri lista: **Označavanja** (jedan red po navedenom označavanju, iste kolone kao CSV), **Po listu** (koliko označavanja ima svaki list, otvorenih i zatvorenih, i koliko svake vrste, sa zbirovima) i **Lista nedostataka** (kada ima stavki).
- {{ui:PDF}} preuzima datoteku „<name> markup summary.pdf“: izveštaj za štampu ili slanje, sa nazivom skupa, datumom i tabelom navedenih označavanja (broj, list, vrsta, tema, tekst ili komentar, izmerena vrednost, autor, status i poslednji odgovor). Dug tekst se prelama; zaglavlje tabele se ponavlja na svakoj strani.

Oba uzimaju listu onako kako je filtrirana, pa prvo filtrirajte da biste prijavili jedan list, jednog autora ili samo otvorene stavke.

## Izvoz u BCF

Izaberite {{ui:BCF}}. MarkupCraft pravi sliku svakog navedenog označavanja na njegovom listu („Pravim snimke za BCF (3 od 12)…“), pa preuzima datoteku „<name> markups.bcfzip“. Svako označavanje postaje jedna BCF tema sa svojim statusom, autorom, datumima, odgovorima kao komentarima, dodeljenim i rokom iz svoje stavke liste nedostataka, i snimkom.

Upotrebite ga da biste komentare pregleda crteža uneli u alate za BIM koordinaciju koji čitaju BCF. Šta se prenosi, a šta ne, nalazi se u [Osnovama BCF-a](topic:bcf-basics).

## Uvoz BCF

{{ui:Import BCF}} čita datoteku .bcfzip (ili .bcf) iz BIM alata:

- Problemi koji potiču iz BCF izvoza programa MarkupCraft ponovo nalaze svoja označavanja: novi odgovori se dodaju niti, a postavlja se novi status (Closed se računa kao Završeno). Odgovori koji su već tu se ne dodaju dvaput.
- Ostali problemi postaju beleške, sa naslovom, opisom, autorom i komentarima. Beleška ide na list čiji broj ili naziv daju oznake problema, inače na otvoreni list. Pošto BIM kamera nema mesto na papiru, takve beleške se slažu u gornji levi ugao lista da ih pomerite.

Ceo uvoz je jedan korak: {{key:Mod+Z}} ga poništava. Pogledajte [Osnove BCF-a](topic:bcf-basics).

## Šta lista još ne radi

- Grupisanje liste (sortirajte, pa filtrirajte).
- Menjanje vrednosti na listi (menjajte u {{ui:Properties}}; polja nedostataka se menjaju na kartici {{ui:Punch list}}).
