---
title: Osnove BCF-a
summary: Šta sadrži BCF izvoz iz MarkupCraft-a, kako ga koristiti s alatima za BIM koordinaciju i koja su njegova ograničenja.
keywords: bcf, bcfzip, format za BIM saradnju, problemi, koordinacija, sukob, teme, pogled, snimak, openbim, buildingsmart, izvoz problema
from: 0de26175
---

BCF (BIM Collaboration Format) je otvoreni format datoteke za prenos problema između BIM alata. Mnogi programi za koordinaciju modela i autorski programi mogu uvesti datoteku `.bcfzip` kao listu problema. MarkupCraft piše **BCF 2.1**.

## Napravi izvoz

1. Otvori karticu {{ui:Oznake}}.
2. Filtriraj listu na ono što želiš poslati, na primjer {{ui:Status}} "Open". Izvezu se samo navedene oznake.
3. Odaberi {{ui:BCF}}.
4. Sačekaj dok se pravi snimak svake oznake („Making snapshots for BCF (5 of 20)…“).

Rezultat: preuzima se datoteka „<name> markups.bcfzip“, a statusna traka kaže koliko tema sadrži i kolika je veličina datoteke.

## Šta je u njemu

Svaka oznaka postaje jedna **tema**:

| Polje teme | Popunjeno sa |
|---|---|
| Naslov | Broj stavke, predmet i list, na primjer „#4 Oblak na A-101 — Tlocrt“ |
| Tip | Vrsta oznake (Oblak, Poziv, Dužina…) |
| Status | Open, Accepted, Rejected ili Completed |
| Oznake | Vrsta oznake i list |
| Autor i datumi | Autor oznake te datumi kreiranja i izmjene |
| Zaduženi, rok | Iz njene stavke nedostataka, kad je ima |
| Opis | Njen tekst ili tekst pečata, izmjerena vrijednost, komentar, te list i datoteka |
| Komentari | Jedan po odgovoru, s autorom i datumom |
| Snimak | Slika oznake na njenom dijelu lista |
| Pogled | Pogled odozgo na mjesto oznake na listu |

Ponovni izvoz iste oznake daje isti ID teme, pa alat koji uvozi BCF može prepoznati da je riječ o istom problemu.

## Šta se vraća pri uvozu

{{ui:Uvezi BCF}} čita datoteke BCF 2.0, 2.1 i 3.0 (provjereno na 19 zvaničnih buildingSMART 3.0 test datoteka: pročitana je svaka tema, a komentari tri koje imaju tekst). Za temu koja je tvoja (isti ID teme) dodaje nove komentare kao odgovore i preuzima novi status. Svaka druga tema postaje bilješka na listu koji imenuje njena oznaka ili naziv datoteke, a ako takvog nema, na otvorenom listu. Njen naslov, opis, zaduženi i rok postaju tekst bilješke, a komentari postaju odgovori.

| U BCF temi | U MarkupCraft-u |
|---|---|
| Naslov, opis, zaduženi, rok | Tekst bilješke |
| Komentari s tekstom | Odgovori |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done računaju se kao Completed) | Status oznake |
| Autor i datum kreiranja | Autor i datum bilješke |
| Pozicija kamere | Mjesto na listu, samo za temu vezanu za list preko oznake ili naziva datoteke |
| Izbor modela, skriveni dijelovi, ravni presjeka, snimci | Nije sačuvano: list nema model u kojem bi se to prikazalo |

## Ograničenja koja treba znati

- **List nije model.** Pogled pokazuje na položaj oznake na papiru, mjereno u metrima papira. Ne vodi BIM alat do mjesta u modelu. Za pronalaženje mjesta koristi snimak i naziv lista.
- **Statusi i tipovi su MarkupCraft-ovi** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Datoteka ih navodi, kako BCF dozvoljava, ali alat sa svojim fiksnim listama može ih preslikati ili zanemariti.
- **Uvoz donosi komentare, ne prikaze modela.** {{ui:Uvezi BCF}} dodaje odgovore i statuse oznakama koje si izvezao, a ostale probleme pretvara u bilješke; ne može prikazati kameru modela. Pogledaj [Lista oznaka i izvoz](topic:markups-list-and-export#import-bcf).
- Slanje oznaka nazad kao PDF je za pregled crteža često jednostavnije. BCF služi za prenos komentara o crtežima u tok koordinacije modela.
