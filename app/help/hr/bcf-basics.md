---
title: Osnove BCF formata
summary: Što sadrži BCF izvoz programa MarkupCraft, kako ga koristiti s alatima za BIM koordinaciju i koja su njegova ograničenja.
keywords: bcf, bcfzip, format za BIM suradnju, teme, koordinacija, sudar, teme, pogled, snimka, openbim, buildingsmart, izvoz tema
from: 446f38c1
---

BCF (BIM Collaboration Format) je otvoreni format datoteke za razmjenu tema između BIM alata. Mnogi programi za koordinaciju i izradu modela mogu uvesti datoteku `.bcfzip` kao popis tema. MarkupCraft zapisuje **BCF 2.1**.

## Izrada datoteke

1. Otvorite karticu {{ui:Oznake}}.
2. Filtrirajte popis na ono što želite poslati, na primjer {{ui:Status}} "Otvoreno". Izvoze se samo navedene oznake.
3. Odaberite {{ui:BCF}}.
4. Pričekajte dok se izrađuje snimka svake oznake ("Izrada snimki za BCF (5 od 20)…").

Rezultat: preuzima se datoteka „<name> markups.bcfzip“, a statusna traka prikazuje koliko tema sadrži i veličinu datoteke.

## Što je u datoteci

Svaka oznaka postaje jedna **tema**:

| Polje teme | Popunjava se |
|---|---|
| Naslov | Broj nedostatka, predmet i list, na primjer "#4 Oblak na A-101 — Tlocrt" |
| Vrsta | Vrsta oznake (Oblak, Oblačić, Duljina…) |
| Status | Otvoreno, Prihvaćeno, Odbijeno ili Dovršeno |
| Natpisi | Vrsta oznake i list |
| Autor i datumi | Autor oznake te datumi nastanka i izmjene |
| Dodijeljeno, rok | Iz njene stavke popisa nedostataka, kad je ima |
| Opis | Njezin tekst ili tekst pečata, izmjerena vrijednost, komentar te list i datoteka |
| Komentari | Jedan po odgovoru, s autorom i datumom |
| Snimka | Slika oznake na njezinom dijelu lista |
| Pogled | Pogled odozgo na mjesto oznake na listu |

Ponovni izvoz iste oznake daje isti ID teme, pa alat koji uvozi BCF može prepoznati da je riječ o istoj temi.

## Ograničenja

- **List nije model.** Pogled pokazuje na položaj oznake na papiru, mjeren u metrima papira. Ne vodi alat za BIM na neko mjesto u modelu. Za pronalazak mjesta koristite snimku i naziv lista.
- **Statusi i vrste su vlastiti za MarkupCraft** (Otvoreno, Prihvaćeno, Odbijeno, Dovršeno; Oblak, Oblačić…). Datoteka ih deklarira, kako BCF dopušta, ali alat s vlastitim fiksnim popisima može ih preslikati ili zanemariti.
- **Uvoz donosi komentare, a ne prikaze modela.** {{ui:Uvezi BCF}} dodaje odgovore i statuse oznakama koje ste izvezli i bilježi ostale teme kao bilješke; ne može prikazati kameru modela. Vidi [Popis oznaka i izvoz](topic:markups-list-and-export#import-bcf).
- Slanje oznaka natrag kao PDF često je jednostavnije za pregled crteža. BCF služi za prijenos komentara s crteža u tijek koordinacije modela.
