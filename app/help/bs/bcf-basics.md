---
title: BCF osnove
summary: Šta sadrži BCF izvoz iz MarkupCraft-a, kako se koristi s alatima za BIM koordinaciju i koja su njegova ograničenja.
keywords: bcf, bcfzip, BIM format za saradnju, problemi, koordinacija, sukobi, teme, pogled, snimak, openbim, buildingsmart, izvoz problema
from: 446f38c1
---

BCF (BIM Collaboration Format) je otvoreni format datoteke za prenos problema između BIM alata. Mnogi programi za koordinaciju i izradu modela mogu uvesti datoteku `.bcfzip` kao listu problema. MarkupCraft piše **BCF 2.1**.

## Izrada

1. Otvori karticu {{ui:Oznake}}.
2. Filtriraj listu na ono što želiš poslati, na primjer {{ui:Status}} "Otvoreno". Izvoze se samo navedene oznake.
3. Izaberi {{ui:BCF}}.
4. Sačekaj dok se pravi snimak svake oznake ("Pravljenje snimaka za BCF (5 od 20)…").

Rezultat: "<name> markups.bcfzip" se preuzme, a statusna traka kaže koliko tema sadrži i kolika je veličina datoteke.

## Šta je u datoteci

Svaka oznaka postaje jednu **temu**:

| Polje teme | Popunjava se sa |
|---|---|
| Naslov | Broj problema, predmet i list, na primjer "#4 Oblak na A-101 — Tlocrt" |
| Tip | Vrsta oznake (Oblak, Izvučena oznaka, Dužina…) |
| Status | Otvoreno, Prihvaćeno, Odbijeno ili Završeno |
| Etikete | Vrsta oznake i list |
| Autor i datumi | Autor oznake, datum kreiranja i datum izmjene |
| Dodijeljeno, rok | Iz njene stavke liste ispravki, kad je ima |
| Opis | Njen tekst ili tekst pečata, izmjerena vrijednost, komentar, te list i datoteka |
| Komentari | Po jedan za svaki odgovor, s autorom i datumom |
| Snimak | Slika oznake na njenom dijelu lista |
| Pogled | Pogled odozgo na mjesto oznake na listu |

Ponovni izvoz iste oznake daje isti ID teme, pa alat koji uvozi BCF može prepoznati da je riječ o istom problemu.

## Ograničenja koja treba znati

- **List nije model.** Pogled pokazuje na položaj oznake na papiru, mjereno u metrima papira. Ne vodi BIM alat na mjesto u modelu. Za pronalaženje mjesta koristi snimak i naziv lista.
- **Statusi i vrste su MarkupCraft-ovi** (Otvoreno, Prihvaćeno, Odbijeno, Završeno; Oblak, Izvučena oznaka…). Datoteka ih navodi, kako BCF dozvoljava, ali alat sa svojim fiksnim listama ih može preslikati ili zanemariti.
- **Uvoz donosi komentare, a ne poglede na model.** {{ui:Uvezi BCF}} dodaje odgovore i statuse oznakama koje si izvezao i pravi bilješke za ostale probleme; ne može prikazati kameru modela. Pogledaj [Lista oznaka i izvoz](topic:markups-list-and-export#import-bcf).
- Slanje oznaka nazad kao PDF je za pregled crteža često jednostavnije. BCF služi za to da komentari na crteže uđu u tok koordinacije modela.
