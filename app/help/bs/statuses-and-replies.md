---
title: Statusi i odgovori
summary: Označi svaki komentar kao Otvoreno, Prihvaćeno, Odbijeno ili Završeno, raspravi ga u niti odgovora i proslijedi nit u PDF-u.
keywords: status, status pregleda, prihvaćeno, odbijeno, završeno, otvoreno, odgovor, odgovori, nit, komentar, razgovor, rasprava, odgovori na, povratna provjera
from: 0f3e8b91
---

Svaka oznaka ima **status** i **nit odgovora**. Zajedno nose jedan krug pregleda: recenzent označava, projektant odgovara i postavlja statuse, recenzent provjerava ispravke.

## Postavi status

1. Odaberi oznaku (ili više njih).
2. U panelu {{ui:Svojstva}} odaberi {{ui:Status}}: Otvoreno, Prihvaćeno, Odbijeno ili Završeno.

Rezultat: status se pokazuje kao oznaka u listi {{ui:Oznake}}, a u nit se dodaje red: "Status postavljen na Prihvaćeno, Ana Ruiz." Kada je odabrano više oznaka, polje statusa kaže "Miješano" dok ne odabereš jedan, a tada mijenja sve njih.

Nove oznake počinju kao Otvoreno. Zalijepljene ili duplirane oznake također počinju kao Otvoreno.

## Odgovori

1. Odaberi oznaku.
2. U panelu {{ui:Svojstva}} nađi "Odgovori" ispod postavki stila.
3. Upiši u {{ui:Napiši odgovor}}.
4. Odaberi {{ui:Odgovor}}, ili pritisni {{key:Mod+Enter}}.

Rezultat: odgovor je naveden s tvojim imenom, datumom i vremenom, a naslov ga broji: "Odgovori (3)". Lista {{ui:Oznake}} pokazuje broj odgovora u redu.

- Promjene statusa su navedene u istoj niti i označene kao unosi statusa, pa historija ide po redu.
- Ako počneš pisati odgovor pa klikneš nešto drugo, nacrt se čuva dok se ne vratiš na tu oznaku (dok ne zatvoriš set).
- Ako ime nije postavljeno, MarkupCraft ga traži prije slanja.
- Možeš odgovoriti i na komentare samo za čitanje koji su došli s datotekom.

:::note
Odgovor se ne može mijenjati ni brisati nakon slanja. Odmah nakon slanja {{key:Mod+Z}} ga vraća; poslije toga dodaj novi odgovor koji ispravlja prethodni.
:::

## Dodaj fotografiju

Ispod polja za odgovor, {{ui:Dodaj fotografiju}} dodaje sliku u nit: PNG ili JPEG s ovog računara, ili, na tabletu ili telefonu, fotografiju koju tu snimiš. Što god upišeš u polje za odgovor postaje njen opis. Nit prikazuje sličicu; odaberi je da vidiš fotografiju u punoj veličini. Velike fotografije se smanje na 1600 piksela na dužoj strani.

U sačuvanom PDF-u svaka fotografija putuje i kao priložena datoteka uz oznaku (spajalica), pa je drugi PDF pregledači mogu otvoriti.

## Prosljeđivanje pregleda

Još nema zajedničke sesije na mreži: pregled putuje u PDF-u.

1. Odaberi {{ui:Spasi}}. Kopija sadrži svaku oznaku s njenim statusom i odgovorima.
2. Pošalji tu kopiju kao što šalješ crteže danas.
3. Sljedeća osoba je otvara u MarkupCraftu, odgovara, postavlja statuse i ponovo spašava.

Drugi PDF programi vide odgovore kao odgovore na komentar, a statuse kao stanja pregleda (Prihvaćeno, Odbijeno, Završeno; Otvoreno se prikazuje kao bez stanja). Njihovi vlastiti odgovori i stanja pregleda vraćaju se u MarkupCraft kad otvoriš datoteku: najnoviji status pobjeđuje.

Ako dvije osobe označavaju odvojene kopije u isto vrijeme, nema spajanja. Možeš otvoriti obje kopije u jednom setu i prenijeti nekoliko oznaka pomoću {{key:Mod+C}} i {{key:Mod+V}}, ali zalijepljena kopija je nova oznaka: nosi tvoje ime, novi datum i status Otvoreno, i smjesti se malo pomaknuta. Dogovorite ko označava koje listove da biste to izbjegli.

## Nađi šta je još otvoreno

U kartici {{ui:Oznake}} postavi {{ui:Status}} na "Otvoreno" da vidiš samo otvorene stavke, i {{ui:Autor}} na jednog recenzenta. Vidi [Lista oznaka](topic:markups-list-and-export).

Status (Otvoreno, Prihvaćeno, Odbijeno, Završeno) se odnosi na komentar. Stavka za završne radove (punch) ima svoj zasebni status za posao na terenu; vidi [Napravi listu završnih radova](topic:punch-list).
