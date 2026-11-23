---
title: Osnove BCF-a
summary: Što sadrži BCF izvoz programa MarkupCraft, kako ga koristiti s alatima za BIM koordinaciju i njegova ograničenja.
keywords: bcf, bcfzip, BIM collaboration format, teme, koordinacija, sudar, teme, pogled, snimka, openbim, buildingsmart, izvoz tema
from: 0de26175
---

BCF (BIM Collaboration Format) je otvoreni format datoteke za prenošenje tema između BIM alata. Mnogi programi za koordinaciju modela i izradu modela mogu uvesti datoteku `.bcfzip` kao popis tema. MarkupCraft zapisuje **BCF 2.1**.

## Izrada datoteke

1. Otvorite karticu {{ui:Oznake}}.
2. Filtrirajte popis na ono što želite poslati, na primjer {{ui:Status}} „Otvoreno“. Izvezene su samo navedene oznake.
3. Odaberite {{ui:BCF}}.
4. Pričekajte dok se ne napravi snimka svake oznake („Izrada snimaka za BCF (5 od 20)…“).

Rezultat: preuzima se datoteka „<name> markups.bcfzip“, a statusna traka kaže koliko tema sadrži i kolika je veličina datoteke.

## Što je u datoteci

Svaka oznaka postaje jedna **tema**:

| Polje teme | Ispunjava se |
|---|---|
| Naslov | Redni broj, predmet i list, na primjer „#4 Oblak na A-101 — Tlocrt“ |
| Vrsta | Vrsta oznake (Oblak, Oblačić, Duljina…) |
| Status | Otvoreno, Prihvaćeno, Odbijeno ili Završeno |
| Natpisi | Vrsta oznake i list |
| Autor i datumi | Autor oznake, datumi nastanka i izmjene |
| Dodijeljeno, rok | Iz njezine stavke popisa nedostataka, ako je ima |
| Opis | Njezin tekst ili tekst pečata, izmjerena vrijednost, komentar, te list i datoteka |
| Komentari | Jedan po odgovoru, s autorom i datumom |
| Snimka | Slika oznake na njezinom dijelu lista |
| Pogled | Pogled odozgo na mjesto oznake na listu |

Ponovni izvoz iste oznake daje isti ID teme, pa alat koji uvozi BCF može prepoznati da je riječ o istoj temi.

## Što se vraća pri uvozu

{{ui:Uvezi BCF}} čita datoteke BCF 2.0, 2.1 i 3.0 (provjereno na 19 službenih testnih datoteka buildingSMART 3.0: pročitana je svaka tema, a komentari triju koje imaju tekst). Za temu koja je vaša (isti ID teme) dodaje nove komentare kao odgovore i preuzima novi status. Svaka druga tema postaje bilješka na listu čiji je naziv naveden u natpisu ili nazivu datoteke, inače na otvorenom listu, a njezin naslov, opis, dodijeljena osoba i rok postaju tekst bilješke, a komentari odgovori.

| U BCF temi | U MarkupCraftu |
|---|---|
| Naslov, opis, dodijeljena osoba, rok | Tekst bilješke |
| Komentari s tekstom | Odgovori |
| Status Otvoreno, Prihvaćeno, Odbijeno, Završeno (Closed, Resolved i Done smatraju se Završeno) | Status oznake |
| Autor i datum nastanka | Autor i datum bilješke |
| Položaj kamere | Mjesto na listu, samo za temu povezanu s listom natpisom ili nazivom datoteke |
| Odabir modela, skriveni dijelovi, ravnine rezanja, snimke | Ne čuva se: list nema model u kojem bi se prikazali |

## Ograničenja

- **List nije model.** Pogled pokazuje na položaj oznake na papiru, mjeren u metrima papira. Ne vodi BIM alat na mjesto u modelu. Za pronalaženje mjesta koristite snimku i naziv lista.
- **Statusi i vrste su vlastiti MarkupCraftu** (Otvoreno, Prihvaćeno, Odbijeno, Završeno; Oblak, Oblačić…). Datoteka ih navodi, kako BCF dopušta, ali alat s vlastitim fiksnim popisima ih može preslikati ili zanemariti.
- **Uvoz donosi komentare, a ne prikaze modela.** {{ui:Uvezi BCF}} dodaje odgovore i statuse oznakama koje ste izvezli te pravi bilješke za ostale teme; ne može prikazati kameru modela. Pogledajte [Popis oznaka i izvoz](topic:markups-list-and-export#import-bcf).
- Slanje oznaka natrag kao PDF često je jednostavnije za pregled crteža. BCF je za unos komentara s crteža u tijek koordinacije modela.
