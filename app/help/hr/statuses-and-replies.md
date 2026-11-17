---
title: Statusi i odgovori
summary: Označite svaki komentar kao Otvoreno, Prihvaćeno, Odbijeno ili Dovršeno, raspravite ga u razgovoru s odgovorima i prenesite raspravu u PDF-u.
keywords: status, status pregleda, prihvaćeno, odbijeno, dovršeno, otvoreno, odgovor, odgovori, rasprava, komentar, razgovor, odgovoriti, provjera
from: 0f3e8b91
---

Svaki markup ima **status** i **raspravu s odgovorima**. Zajedno nose jedan krug pregleda: revizor označava markup, projektant odgovara i postavlja statuse, a revizor provjerava.

## Postavljanje statusa

1. Odaberite markup (ili više njih).
2. U {{ui:Properties}} odaberite {{ui:Status}}: Otvoreno, Prihvaćeno, Odbijeno ili Dovršeno.

Rezultat: status se prikazuje kao oznaka u popisu {{ui:Markups}}, a u raspravu se dodaje redak: „Status postavljen na Prihvaćeno, Ana Ruiz.“ Kad je odabrano više markupa, okvir statusa piše „Miješano“ dok ne odaberete jedan, a tada on mijenja sve njih.

Novi markupi počinju kao Otvoreno. Zalijepljeni ili duplicirani markupi također počinju kao Otvoreno.

## Odgovor

1. Odaberite markup.
2. U {{ui:Properties}} pronađite „Odgovori“ ispod postavki stila.
3. Upišite u {{ui:Write a reply}}.
4. Odaberite {{ui:Reply}} ili pritisnite {{key:Mod+Enter}}.

Rezultat: odgovor je naveden s vašim imenom, datumom i vremenom, a naslov ga broji: „Odgovori (3)“. Popis {{ui:Markups}} prikazuje broj odgovora u retku.

- Promjene statusa navode se u istoj raspravi i označene su kao unosi statusa, pa se povijest čita redom.
- Ako počnete pisati odgovor pa kliknete nešto drugo, vaš nacrt odgovora čuva se dok se ne vratite na taj markup (dok ne zatvorite skup).
- Ako vaše ime nije postavljeno, MarkupCraft ga traži prije slanja.
- Možete odgovoriti i na komentare samo za čitanje koji su došli uz datoteku.

:::note
Odgovor se ne može uređivati ni brisati nakon slanja. Odmah nakon slanja {{key:Mod+Z}} ga poništava; nakon toga dodajte novi odgovor koji ispravlja prethodni.
:::

## Dodavanje fotografije

Ispod polja za odgovor, {{ui:Add photo}} dodaje sliku u raspravu: PNG ili JPEG s ovog računala ili, na tabletu ili telefonu, fotografiju koju tamo snimite. Što god upišete u polje za odgovor, postaje njezin natpis. Rasprava prikazuje sličicu; kliknite je da vidite fotografiju u punoj veličini. Velike fotografije smanjuju se na 1600 piksela na duljoj strani.

U spremljenom PDF-u svaka fotografija putuje i kao priložena datoteka uz markup (spajalica), pa je mogu otvoriti drugi PDF preglednici.

## Prosljeđivanje pregleda

Još nema zajedničke mrežne sesije: pregled putuje u PDF-u.

1. Odaberite {{ui:Save}}. Kopija sadrži svaki markup sa statusom i odgovorima.
2. Pošaljite tu kopiju onako kako šaljete crteže danas.
3. Sljedeća osoba je otvara u MarkupCraftu, odgovara, postavlja statuse i ponovno sprema.

Drugi PDF programi vide odgovore kao odgovore na komentar, a statuse kao stanja pregleda (Prihvaćeno, Odbijeno, Dovršeno; Otvoreno se prikazuje bez stanja). Njihovi vlastiti odgovori i stanja pregleda vraćaju se u MarkupCraft kad otvorite datoteku: najnoviji status vrijedi.

Ako dvoje ljudi istovremeno označavaju odvojene kopije, nema spajanja. Obje kopije možete otvoriti u jednom skupu i prenijeti nekoliko markupa s {{key:Mod+C}} i {{key:Mod+V}}, ali zalijepljena kopija je novi markup: nosi vaše ime, novi datum i status Otvoreno te se smjesti malo pomaknuta. Dogovorite tko označava koje listove da to izbjegnete.

## Pronađite što je još otvoreno

U kartici {{ui:Markups}} postavite {{ui:Status}} na „Otvoreno“ da popišete samo otvorene stavke, a {{ui:Author}} na jednog revizora. Vidi [Popis markupa](topic:markups-list-and-export).

Status (Otvoreno, Prihvaćeno, Odbijeno, Dovršeno) odnosi se na komentar. Stavka s popisa nedostataka ima svoj zaseban status za radove na terenu; vidi [Izrada popisa nedostataka](topic:punch-list).
