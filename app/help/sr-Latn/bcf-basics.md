---
title: Osnove BCF-a
summary: Šta sadrži BCF izvoz iz MarkupCraft-a, kako se koristi sa alatima za BIM koordinaciju i koja su njegova ograničenja.
keywords: bcf, bcfzip, format za BIM saradnju, problemi, koordinacija, sukob, teme, pogled, snimak, openbim, buildingsmart, izvoz problema
from: 446f38c1
---

BCF (BIM Collaboration Format) je otvoreni format datoteke za prenos problema između BIM alata. Mnogi programi za koordinaciju i izradu modela mogu da uvezu datoteku `.bcfzip` kao listu problema. MarkupCraft piše **BCF 2.1**.

## Napravite datoteku

1. Otvorite karticu {{ui:Markups}}.
2. Filtrirajte listu na ono što želite da pošaljete, na primer {{ui:Status}} „Otvoreno“. Izvoze se samo navedena označavanja.
3. Izaberite {{ui:BCF}}.
4. Sačekajte dok se pravi snimak svakog označavanja („Pravim snimke za BCF (5 od 20)…“).

Rezultat: datoteka „<name> markups.bcfzip“ se preuzima, a statusna traka kaže koliko tema sadrži i kolika je veličina datoteke.

## Šta sadrži

Svako označavanje postaje jednu **temu**:

| Polje teme | Popunjava se |
|---|---|
| Naslov | Redni broj, predmet i list, na primer „#4 Oblak na A-101 — Osnova sprata“ |
| Vrsta | Vrsta označavanja (Oblak, Pokazna oznaka, Dužina…) |
| Status | Otvoreno, Prihvaćeno, Odbijeno ili Završeno |
| Oznake | Vrsta označavanja i list |
| Autor i datumi | Autor označavanja, datumi nastanka i izmene |
| Dodeljeno, rok | Iz stavke {{ui:Punch list}}, kad je ima |
| Opis | Tekst ili tekst pečata, izmerena vrednost, komentar, list i datoteka |
| Komentari | Po jedan za svaki odgovor, sa autorom i datumom |
| Snimak | Slika označavanja na njegovom delu lista |
| Pogled | Pogled odozgo na mesto označavanja na listu |

Ponovni izvoz istog označavanja daje isti ID teme, pa alat koji uvozi BCF može da ga prepozna kao isti problem.

## Ograničenja koja treba znati

- **List nije model.** Pogled pokazuje položaj označavanja na papiru, izražen u metrima papira. Ne vodi BIM alat do mesta u modelu. Za pronalaženje mesta koristite snimak i naziv lista.
- **Statusi i vrste su MarkupCraft-ovi** (Otvoreno, Prihvaćeno, Odbijeno, Završeno; Oblak, Pokazna oznaka…). Datoteka ih navodi, kako BCF dozvoljava, ali alat sa sopstvenim fiksnim listama može da ih preslika ili zanemari.
- **Uvoz donosi komentare, a ne poglede na model.** {{ui:Import BCF}} dodaje odgovore i statuse označavanjima koje ste izvezli i beleži druge probleme; ne može da prikaže kameru modela. Pogledajte [Lista označavanja i izvoz](topic:markups-list-and-export#import-bcf).
- Slanje označavanja nazad kao PDF je često jednostavnije za pregled crteža. BCF služi za to da komentari o crtežu uđu u tok koordinacije modela.
