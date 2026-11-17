---
title: Poveznice listova
summary: Napravite da oznaka skoči na drugi list i povežite svaki oblačić lista, poput 3/A-501, s njegovim listom i prikazom u jednom prolazu uz Skupne poveznice.
keywords: hiperveza, poveznica, poveznice, skok, oblačić lista, oblačić detalja, oblačić presjeka, 3/A-501, idi na list, natrag, automatska poveznica, skupna poveznica, skupne poveznice, naslovni blok, broj lista, naziv lista, prikaz, detalj, preimenuj, preoznači, dodatak, pdf poveznica
from: 86a17c37
---

Poveznica lista vodi vas od oznake do drugog lista skupa: od mjehurića detalja do detalja, od bilješke do lista na koji se odnosi.

## Povežite oznaku s listom

1. Odaberite oznaku.
2. U {{ui:Svojstva}} odaberite list pod {{ui:Poveznica na list}}.

Mala strelica pojavljuje se u gornjem desnom kutu oznake. Da je slijedite, držite {{key:Mod}} i kliknite oznaku, ili je odaberite i odaberite {{ui:Idi na …}} u {{ui:Svojstva}}. {{key:Alt+Left}} vraća vas na list s kojeg ste došli.

Poveznica navodi list svojim brojem, pa radi i nakon ponovnog otvaranja skupa ili zamjene novim izdanjem listova: otvara najnoviji list s tim brojem. Ako taj list nije otvoren, statusna traka to javlja.

## Povežite odjednom svaki oblačić lista

Odaberite {{ui:Stranice}} › {{ui:Skupne poveznice…}}, ili {{ui:Poveži oznake listova…}} pod {{ui:Traži tekst}} na vrhu ploče {{ui:Listovi}}.

1. **Provjerite brojeve listova.** MarkupCraft navodi svaki otvoreni list s brojem i nazivom koje je pročitao iz naslovnog bloka lista (ili oznake stranice) i odakle je to došlo. Ispravite pogrešne i upišite broj tamo gdje ga nije pronašao (naslovni blok čiji je broj ucrtan kao linije nema teksta za čitanje). Zatim odaberite {{ui:Pronađi oblačiće}}. Vaši ispravci su jedan korak poništavanja i postaju oznake stranica u spremljenom PDF-u.
2. **Pregledajte popis.** MarkupCraft čita tekst svakog lista za oblačiće poput „3/A-501”, „5 / A501”, „DETALJ 2 NA A-501”, mjehurić s „3” iznad „A-501” ili običan „A-501” u bilješci, i čita nazive prikaza svakog lista (broj detalja s brojem lista ispod ili veliki broj s nazivom pored). Popis ima tri dijela:
   - {{ui:Će se povezati}}: svaki oblačić, list na koji ide i prikaz na tom listu. Isključite one koje ne želite. Ako prikaz nije pronađen (oblačić za prikaz 7 na listu s prikazima 1 do 6), odaberite prikaz s popisa pored ili ostavite {{ui:Cijeli list}}.
   - {{ui:Nije povezano}}: brojevi listova koje nijedan otvoreni list nema, s brojem oblačića koji ih navode. Odaberite list na koji se svaki odnosi (na primjer list koji je preimenovan), i svaki oblačić na taj broj povezuje se s njim. Ili ostavite nepovezano.
   - Koliko je oblačića već povezano i još ide na pravo mjesto. Ostaju kakvi jesu.
3. Odaberite {{ui:Izradi poveznice}}.

Svaki oblačić dobiva tanki plavi okvir koji je poveznica lista. {{key:Mod}}+klik na njega otvara list uvećan na prikaz. Jedan {{key:Mod+Z}} uklanja ih sve.

Kodovi koji samo izgledaju kao brojevi listova, poput R-19 ili W12X26, izostavljaju se: oblačić mora biti oblikovan kao brojevi listova u skupu. Broj samog lista, u njegovom naslovnom bloku i nazivima prikaza, nikad nije oblačić. Skenirani listovi nemaju teksta za čitanje: prvo upotrijebite {{ui:Pročitaj tekst (OCR)…}}, ili povežite njihove oblačiće jedan po jedan.

## Pokrenite ponovno kad se skup promijeni

Skupne poveznice mogu se pokretati koliko god želite:

- **Dodan je list**, na primjer dodatak s A-601: otvorite njegovu datoteku i ponovno pokrenite Skupne poveznice. Oblačići za A-601 koji se prije nisu povezali sada se povezuju.
- **List je preimenovan**: ispravite njegov broj u koraku 1. Poveznice koje su napravile Skupne poveznice, a više ne pronalaze svoj list, navedene su pod {{ui:Nije povezano}}; odaberite list jednom i sve slijede. Poveznice koje su prešle na drugi prikaz se ažuriraju.
- Poveznice koje ste sami napravili u {{ui:Svojstva}} nikad se ne mijenjaju.

## U spremljenom PDF-u

Poveznica na list u istom PDF-u također se zapisuje kao PDF poveznica, pa i drugi čitači na klik skaču tamo. Poveznica s prikazom otvara taj prikaz u drugom čitaču (PDF skok „fit rectangle”); ona bez prikaza otvara cijeli list. Poveznice na list u drugoj datoteci skupa rade samo u MarkupCraft.
