---
title: Veze između listova
summary: Napravite da označavanje skoči na drugi list i povežite svaku oznaku lista, poput 3/A-501, sa njenim listom i prikazom u jednom prolazu uz Grupne veze.
keywords: hiperveza, veza, veze, skok, oznaka lista, oznaka detalja, oznaka preseka, 3/A-501, idi na list, nazad, automatska veza, grupna veza, grupne veze, blok naslova, broj lista, naziv lista, prikaz, detalj, preimenuj, prenumeriši, dodatak, pdf veza
from: 86a17c37
---

Veza lista vodi vas od označavanja do drugog lista skupa: od balona detalja do detalja, od beleške do lista na koji se odnosi.

## Povežite označavanje sa listom

1. Izaberite označavanje.
2. U {{ui:Svojstva}} izaberite list pod {{ui:Veza sa listom}}.

Mala strelica se pojavljuje u gornjem desnom uglu označavanja. Da je pratite, držite {{key:Mod}} i kliknite na označavanje, ili ga izaberite i izaberite {{ui:Idi na …}} u {{ui:Svojstva}}. {{key:Alt+Left}} vraća vas na list sa kojeg ste došli.

Veza imenuje list po njegovom broju, pa radi i posle ponovnog otvaranja skupa ili zamene lista novim izdanjem: otvara najnoviji list sa tim brojem. Ako taj list nije otvoren, statusna traka to kaže.

## Povežite sve oznake lista odjednom

Izaberite {{ui:Stranice}} › {{ui:Grupne veze…}}, ili {{ui:Poveži napomene listova…}} pod {{ui:Traži tekst}} na vrhu panela {{ui:Listovi}}.

1. **Proverite brojeve listova.** MarkupCraft navodi svaki otvoreni list sa brojem i nazivom koje je pročitao iz bloka naslova lista (ili oznake strane), i odakle su došli. Ispravite one koji nisu tačni i upišite broj tamo gde nije našao nijedan (blok naslova čiji je broj iscrtan linijama nema tekst za čitanje). Zatim izaberite {{ui:Pronađi oznake}}. Vaše ispravke su jedan korak opozivanja i postaju oznake strana u sačuvanom PDF-u.
2. **Pregledajte spisak.** MarkupCraft čita tekst svakog lista za oznake poput „3/A-501“, „5 / A501“, „DETAIL 2 ON A-501“, balon sa „3“ iznad „A-501“ ili običan „A-501“ u napomeni, i čita nazive prikaza svakog lista (broj detalja sa brojem lista ispod, ili veliki broj sa nazivom pored). Spisak ima tri dela:
   - {{ui:Biće povezano}}: svaka oznaka, list na koji vodi i prikaz na tom listu. Isključite one koje ne želite. Ako prikaz nije pronađen (oznaka za prikaz 7 na listu sa prikazima 1 do 6), izaberite prikaz sa spiska pored ili ostavite {{ui:Ceo list}}.
   - {{ui:Nije povezano}}: brojevi listova koje nijedan otvoreni list nema, sa brojem oznaka koje ih navode. Izaberite list na koji se svaki odnosi (na primer list koji je preimenovan), pa se svaka oznaka na taj broj povezuje sa njim. Ili ostavite nepovezano.
   - Koliko je oznaka već povezano i još vodi na pravo mesto. One ostaju kako jesu.
3. Izaberite {{ui:Napravi veze}}.

Svaka oznaka dobija tanku plavu kutiju koja je veza lista. {{key:Mod}}+klik na nju otvara list uvećan na prikaz. Jedno {{key:Mod+Z}} uklanja sve.

Oznake koje samo liče na brojeve listova, poput R-19 ili W12X26, se izostavljaju: oznaka mora imati oblik brojeva listova samog skupa. Sopstveni broj lista, u njegovom bloku naslova i u nazivima prikaza, nikada nije oznaka. Skenirani listovi nemaju tekst za čitanje: prvo koristite {{ui:Pročitaj tekst (OCR)…}} ili povežite njihove oznake jednu po jednu.

## Pokrenite ponovo kada se skup promeni

Grupne veze se mogu pokretati koliko god puta želite:

- **Dodat je list**, na primer dodatak sa A-601: otvorite njegovu datoteku i ponovo pokrenite Grupne veze. Oznake za A-601 koje ranije nisu bile povezane sada jesu.
- **List je preimenovan**: ispravite njegov broj u koraku 1. Veze koje su napravile Grupne veze, a koje više ne nalaze svoj list, navedene su pod {{ui:Nije povezano}}; izaberite list jednom i sve one ga prate. Veze koje su prešle na drugi prikaz se ažuriraju.
- Veze koje ste sami napravili u {{ui:Svojstva}} se nikada ne menjaju.

## U sačuvanom PDF-u

Veza ka listu u istom PDF-u se takođe upisuje kao PDF veza, pa i drugi prikazivači skoče tamo klikom. Veza sa prikazom otvara taj prikaz u drugom prikazivaču (PDF skok „fit rectangle“); veza bez prikaza otvara ceo list. Veze ka listu u drugoj datoteci skupa rade samo u MarkupCraft-u.
