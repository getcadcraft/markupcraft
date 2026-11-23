---
title: BCF osnove
summary: Šta sadrži BCF izvoz iz MarkupCraft-a, kako se koristi sa alatima za BIM koordinaciju i njegova ograničenja.
keywords: bcf, bcfzip, format za BIM saradnju, problemi, koordinacija, sukob, teme, pogled, snimak, openbim, buildingsmart, izvoz problema
from: 0de26175
---

BCF (BIM Collaboration Format) je otvoreni format datoteke za prenos problema između BIM alata. Mnogi programi za koordinaciju i izradu modela mogu da uvezu `.bcfzip` datoteku kao spisak problema. MarkupCraft piše **BCF 2.1**.

## Napravi izvoz

1. Otvori karticu {{ui:Označavanja}}.
2. Filtriraj spisak na ono što želiš da pošalješ, na primer {{ui:Status}} „Otvoreno”. Izvoze se samo navedena označavanja.
3. Izaberi {{ui:BCF}}.
4. Sačekaj dok se pravi snimak svakog označavanja („Pravljenje snimaka za BCF (5 od 20)…”).

Rezultat: datoteka „<name> markups.bcfzip” se preuzima, a statusna traka kaže koliko tema sadrži i kolika je veličina datoteke.

## Šta je u njoj

Svako označavanje postaje jedna **tema**:

| Polje teme | Popunjava se |
|---|---|
| Naslov | Broj stavke, predmet i list, na primer „#4 Oblak na A-101 — Plan sprata” |
| Vrsta | Vrsta označavanja (Oblak, Upućivanje, Dužina…) |
| Status | Otvoreno, Prihvaćeno, Odbijeno ili Završeno |
| Oznake | Vrsta označavanja i list |
| Autor i datumi | Autor označavanja, datumi kreiranja i izmene |
| Dodeljeno, rok | Iz njegove stavke spiska ispravki, kada je ima |
| Opis | Tekst ili tekst žiga, izmerena vrednost, komentar, kao i list i datoteka |
| Komentari | Jedan po odgovoru, sa autorom i datumom |
| Snimak | Slika označavanja na njegovom delu lista |
| Pogled | Pogled odozgo na mesto označavanja na listu |

Ponovni izvoz istog označavanja daje isti ID teme, pa alat koji uvozi BCF može da ga prepozna kao isti problem.

## Šta se vraća pri uvozu

{{ui:Uvezi BCF}} čita BCF 2.0, 2.1 i 3.0 datoteke (proveren na 19 zvaničnih buildingSMART test datoteka 3.0: pročitana je svaka tema, a komentari tri koje imaju tekst). Za temu koja je tvoja (isti ID teme) dodaje nove komentare kao odgovore i preuzima novi status. Svaka druga tema postaje napomena na listu čiji naziv oznake ili datoteke navodi, inače na otvorenom listu, sa naslovom, opisom, odgovornim licem i rokom kao tekstom napomene, a njeni komentari kao odgovori.

| U BCF temi | U MarkupCraft-u |
|---|---|
| Naslov, opis, odgovorno lice, rok | Tekst napomene |
| Komentari sa tekstom | Odgovori |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved i Done računaju se kao Completed) | Status označavanja |
| Autor i datum kreiranja | Autor i datum napomene |
| Položaj kamere | Mesto na listu, samo za temu vezanu za list preko oznake ili naziva datoteke |
| Izbor modela, skriveni delovi, ravni sečenja, snimci | Ne čuvaju se: list nema model u kome bi se prikazali |

## Ograničenja koja treba znati

- **List nije model.** Pogled pokazuje na položaj označavanja na papiru, izmeren u metrima papira. Ne vodi BIM alat do mesta u modelu. Za pronalaženje mesta koristi snimak i naziv lista.
- **Statusi i vrste su MarkupCraft-ovi** (Otvoreno, Prihvaćeno, Odbijeno, Završeno; Oblak, Upućivanje…). Datoteka ih deklariše, kako BCF dozvoljava, ali alat sa sopstvenim fiksnim listama može da ih preslika ili zanemari.
- **Uvoz donosi komentare, a ne poglede na model.** {{ui:Uvezi BCF}} dodaje odgovore i statuse označavanjima koja si izvezao, a od ostalih problema pravi napomene; ne može da prikaže kameru modela. Pogledaj [Spisak označavanja i izvoz](topic:markups-list-and-export#import-bcf).
- Slanje označavanja nazad kao PDF je za preglede crteža često jednostavnije. BCF služi da komentari sa crteža uđu u tok koordinacije modela.
