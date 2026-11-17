---
title: Statusi i odgovori
summary: Označite svaki komentar kao Otvoreno, Prihvaćeno, Odbijeno ili Završeno, razgovarajte o njemu u niti odgovora i prosledite nit u PDF-u.
keywords: status, status pregleda, prihvaćeno, odbijeno, završeno, otvoreno, odgovor, odgovori, nit, komentar, razgovor, diskusija, odgovori na, povratna provera
from: 0f3e8b91
---

Svako označavanje ima **status** i **nit odgovora**. Zajedno nose jedan krug pregleda: recenzent označava, projektant odgovara i postavlja statuse, a recenzent proverava.

## Postavite status

1. Izaberite označavanje (ili više njih).
2. U {{ui:Svojstva}} izaberite {{ui:Status}}: Otvoreno, Prihvaćeno, Odbijeno ili Završeno.

Rezultat: status se prikazuje kao oznaka u spisku {{ui:Označavanja}}, a u niti se dodaje red: „Status postavljen na Prihvaćeno, Ana Ruiz.“ Kada je izabrano više označavanja, polje statusa kaže „Mešovito“ dok ne izaberete jedan, a zatim menja sve njih.

Novo označavanje počinje kao Otvoreno. Nalepljena ili duplirana označavanja takođe počinju kao Otvoreno.

## Odgovorite

1. Izaberite označavanje.
2. U {{ui:Svojstva}} pronađite „Odgovori“ ispod podešavanja stila.
3. Ukucajte u {{ui:Napiši odgovor}}.
4. Izaberite {{ui:Odgovor}} ili pritisnite {{key:Mod+Enter}}.

Rezultat: odgovor se navodi sa vašim imenom i datumom i vremenom, a naslov ga broji: „Odgovori (3)“. Spisak {{ui:Označavanja}} prikazuje broj odgovora u redu.

- Promene statusa navode se u istoj niti i označene su kao stavke statusa, pa istorija ide po redu.
- Ako počnete da kucate odgovor pa kliknete nešto drugo, nacrt se čuva dok se ne vratite na to označavanje (dok ne zatvorite skup).
- Ako vaše ime nije podešeno, MarkupCraft ga traži pre slanja.
- Možete odgovoriti i na komentare samo za čitanje koji su došli uz datoteku.

:::note
Odgovor se ne može menjati ni brisati kada je poslat. Odmah posle slanja, {{key:Mod+Z}} ga vraća; posle toga dodajte novi odgovor koji ga ispravlja.
:::

## Dodajte fotografiju

Ispod polja za odgovor, {{ui:Dodaj fotografiju}} dodaje sliku u nit: PNG ili JPEG sa ovog računara, ili, na tabletu ili telefonu, fotografiju koju tu odmah snimite. Šta god ukucate u polje za odgovor postaje njen natpis. Nit prikazuje sličicu; izaberite je da vidite fotografiju u punoj veličini. Velike fotografije se smanjuju na 1600 piksela na dužoj strani.

U sačuvanom PDF-u svaka fotografija putuje i kao priložena datoteka pored označavanja (spajalica), pa je mogu otvoriti i drugi PDF pregledači.

## Prosleđivanje pregleda

Zajednička sesija na mreži još ne postoji: pregled putuje u PDF-u.

1. Izaberite {{ui:Sačuvaj}}. Kopija sadrži svako označavanje sa njegovim statusom i odgovorima.
2. Pošaljite tu kopiju na način na koji šaljete crteže danas.
3. Sledeća osoba je otvara u MarkupCraft, odgovara, postavlja statuse i ponovo čuva.

Drugi PDF programi vide odgovore kao odgovore na komentar, a statuse kao stanja pregleda (Prihvaćeno, Odbijeno, Završeno; Otvoreno se prikazuje bez stanja). Njihovi sopstveni odgovori i stanja pregleda vraćaju se u MarkupCraft kada otvorite datoteku: najnoviji status pobeđuje.

Ako dve osobe istovremeno označavaju odvojene kopije, spajanja nema. Obe kopije možete otvoriti u jednom skupu i prebaciti nekoliko označavanja pomoću {{key:Mod+C}} i {{key:Mod+V}}, ali nalepljena kopija je novo označavanje: nosi vaše ime, novi datum i status Otvoreno, i postavlja se malo pomereno. Dogovorite se ko označava koje listove da biste to izbegli.

## Pronađite šta je još otvoreno

Na kartici {{ui:Označavanja}} podesite {{ui:Status}} na „Otvoreno“ da prikažete samo otvorene stavke, a {{ui:Autor}} na jednog recenzenta. Pogledajte [Spisak označavanja](topic:markups-list-and-export).

Status (Otvoreno, Prihvaćeno, Odbijeno, Završeno) odnosi se na komentar. Stavka za otklanjanje nedostataka ima svoj zaseban status za rad na terenu; pogledajte [Napravite listu nedostataka](topic:punch-list).
