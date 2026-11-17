---
title: Osnove BCF
summary: Kaj vsebuje izvoz BCF iz MarkupCraft, kako ga uporabiti z orodji za usklajevanje BIM in kakšne so njegove omejitve.
keywords: bcf, bcfzip, format sodelovanja BIM, zadeve, usklajevanje, kolizija, teme, pogled, posnetek, openbim, buildingsmart, izvoz zadev
from: 446f38c1
---

BCF (BIM Collaboration Format) je odprta datotečna oblika za prenos zadev med orodji BIM. Mnogi programi za usklajevanje in izdelavo modelov lahko uvozijo datoteko `.bcfzip` kot seznam zadev. MarkupCraft zapisuje **BCF 2.1**.

## Ustvarite datoteko

1. Odprite zavihek {{ui:Označbe}}.
2. Seznam omejite na to, kar želite poslati, na primer {{ui:Stanje}} „Odprto“. Izvozijo se samo navedene označbe.
3. Izberite {{ui:BCF}}.
4. Počakajte, medtem ko se za vsako označbo ustvari posnetek („Ustvarjanje posnetkov za BCF (5 od 20) …“).

Rezultat: prenese se „<name> markups.bcfzip“, vrstica stanja pa pove, koliko tem datoteka vsebuje in kakšna je njena velikost.

## Kaj je v datoteki

Vsaka označba postane ena **tema**:

| Polje teme | Napolnjeno z |
|---|---|
| Naslov | Številka pomanjkljivosti, zadeva in list, na primer „#4 Oblak na A-101 — Tloris“ |
| Tip | Vrsta označbe (Oblak, Oblaček, Dolžina …) |
| Stanje | Odprto, Sprejeto, Zavrnjeno ali Dokončano |
| Oznake | Vrsta označbe in list |
| Avtor in datumi | Avtor označbe ter datuma nastanka in zadnje spremembe |
| Dodeljeno, rok | Iz njene postavke pomanjkljivosti, če jo ima |
| Opis | Njeno besedilo ali besedilo žiga, izmerjena vrednost, komentar ter list in datoteka |
| Komentarji | Po en za vsak odgovor, z avtorjem in datumom |
| Posnetek | Slika označbe na njenem delu lista |
| Pogled | Pogled z vrha na mesto označbe na listu |

Ponovni izvoz iste označbe da isti ID teme, zato jo orodje, ki uvozi BCF, lahko prepozna kot isto zadevo.

## Omejitve, ki jih je treba poznati

- **List ni model.** Pogled kaže na položaj označbe na papirju, merjen v metrih papirja. Orodje BIM z njim ne pride do mesta v modelu. Za iskanje mesta uporabite posnetek in ime lista.
- **Stanja in vrste so lastne za MarkupCraft.** (Odprto, Sprejeto, Zavrnjeno, Dokončano; Oblak, Oblaček …) Datoteka jih navaja, kot dovoljuje BCF, vendar lahko orodje z lastnimi fiksnimi seznami jih preslika ali spregleda.
- **Uvoz prinese komentarje, ne pogledov modela.** {{ui:Uvozi BCF}} doda odgovore in stanja označbam, ki ste jih izvozili, in ustvari opombe za druge zadeve; ne more prikazati kamere modela. Glejte [Seznam označb in izvoz](topic:markups-list-and-export#import-bcf).
- Pošiljanje označb nazaj kot PDF je pri pregledih risb pogosto preprostejše. BCF je namenjen temu, da komentarji risb pridejo v delovni tok usklajevanja modela.
