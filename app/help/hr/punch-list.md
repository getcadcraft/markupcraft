---
title: Izrada popisa nedostataka
summary: Pretvorite oznake u brojčane stavke popisa sa zaduženim, rokom i statusom te izvezite popis.
keywords: popis nedostataka, nedostatak, popis manjkavosti, terenski nedostatak, zapažanje, zaduži, zaduženi, rok, primopredaja, obilazak, broj
from: b98b38e6
---

Stavka popisa je oznaka s brojem, zaduženim, rokom i statusom stavke. Broj se crta na listu uz oznaku, pa se ispisani list i popis podudaraju.

## Dodavanje stavki

1. Označite svaki problem na listovima: oblak, oblačić, bilješku, bilo što.
2. Odaberite jednu ili više njih (pogledajte [Odabir, pomicanje i promjena oznaka](topic:select-and-edit)).
3. Ili otvorite karticu {{ui:Popis nedostataka}} i odaberite {{ui:Dodaj odabrano na popis nedostataka}}, ili odaberite {{ui:Dodaj na popis nedostataka}} u {{ui:Svojstva}}.

Rezultat: svaka oznaka dobiva sljedeći broj (1, 2, 3…), redom po listu, a zatim redom kojim su nacrtane. Na listu se pojavljuje brojčana oznaka, a traka statusa kaže „Dodano stavki na popis nedostataka: 3.“ Oznake koje već imaju broj i komentari samo za čitanje se preskaču.

## Ispunite pojedinosti

U kartici {{ui:Popis nedostataka}} svaka stavka prikazuje svoj broj, predmet, tekst, list i status, s tri polja ispod. Ista polja nalaze se u {{ui:Svojstva}} pod „Popis nedostataka“ kad je oznaka odabrana:

- {{ui:Zaduženi}}: ime ili struka, kao slobodan tekst.
- {{ui:Rok}}: datum, iz birača datuma.
- {{ui:Status stavke}}: Otvoreno, U tijeku, Spremno za pregled ili Zatvoreno.

Kliknite naslov stavke da skočite na nju na njezinom listu.

Status stavke odvojen je od statusa pregleda oznake (Otvoreno, Prihvaćeno, Odbijeno, Dovršeno). Koristite status stavke za posao, a status pregleda za komentar.

## Uklonite stavku

Odaberite oznaku i odaberite {{ui:Ukloni s popisa nedostataka}} u {{ui:Svojstva}}. Oznaka ostaje; uklanja se samo broj. Dok je skup otvoren, brojevi se ne ponovno koriste: sljedeća stavka i dalje dobiva sljedeći novi broj, pa praznina znači da je stavka uklonjena. Kad se datoteka ponovno otvori, numeriranje nastavlja od najvišeg broja u njoj.

## Izvezite popis

Odaberite {{ui:Izvezi CSV}} u kartici {{ui:Popis nedostataka}}. Dobijete „<name> punch list.csv“ sa stupcima No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author i Created, poredanima po broju. Otvorite ga u bilo kojoj tabličnoj aplikaciji.

Brojevi stavki, zaduženi, rokovi i statusi stavki također se spremaju unutar označenog PDF-a, pa se vraćaju kad ga ponovno otvorite. Drugi PDF prikazi prikazuju brojčanu oznaku kao dio oznake. BCF izvoz oznaka također nosi zaduženog i rok (pogledajte [Osnove BCF-a](topic:bcf-basics)).

## Na terenu s tabletom

Otvorite skup na iPadu, obiđite posao i na svakom problemu ispustite bilješku ({{ui:Bilješka}}) ili nacrtajte oblak ({{ui:Oblak}}). Dodajte ih na popis nedostataka dok idete i spremite prije odlaska. Pogledajte [Pregled na iPadu ili zaslonu osjetljivom na dodir](topic:review-on-a-tablet).

Popis nedostataka kao formatirani PDF ili tablični izvještaj te fotografije priložene stavkama još nisu izrađeni.
