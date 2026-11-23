---
title: Osnove BCF
summary: Kaj vsebuje izvoz BCF iz MarkupCraft, kako ga uporabiti z orodji za usklajevanje BIM in kakšne so njegove omejitve.
keywords: bcf, bcfzip, format za sodelovanje pri BIM, zadeve, usklajevanje, kolizija, teme, pogled, posnetek, openbim, buildingsmart, izvoz zadev
from: 0de26175
---

BCF (BIM Collaboration Format) je odprta datotečna oblika za posredovanje zadev med orodji BIM. Številni programi za usklajevanje modelov in načrtovanje lahko uvozijo datoteko `.bcfzip` kot seznam zadev. MarkupCraft zapisuje **BCF 2.1**.

## Ustvarjanje

1. Odprite zavihek {{ui:Označbe}}.
2. Filtrirajte seznam glede na to, kar želite poslati, na primer {{ui:Stanje}} „Odprto“. Izvozijo se samo navedene označbe.
3. Izberite {{ui:BCF}}.
4. Počakajte, medtem ko se za vsako označbo naredi posnetek („Ustvarjanje posnetkov za BCF (5 od 20) …“).

Rezultat: "<name> markups.bcfzip" se prenese, vrstica stanja pa pove, koliko tem vsebuje in kakšna je velikost datoteke.

## Kaj je v datoteki

Vsaka označba postane ena **tema**:

| Polje teme | Izpolnjeno z |
|---|---|
| Naslov | Številka točke, zadeva in list, na primer „#4 Revizijski oblak na A-101 — Tloris“ |
| Vrsta | Vrsta označbe (Revizijski oblak, Oblaček, Dolžina …) |
| Stanje | Odprto, Sprejeto, Zavrnjeno ali Dokončano |
| Oznake | Vrsta označbe in list |
| Avtor in datumi | Avtor označbe ter datuma ustvarjanja in spreminjanja |
| Zadolženo, rok | Iz njene postavke na seznamu pomanjkljivosti, če jo ima |
| Opis | Njeno besedilo ali besedilo žiga, izmerjena vrednost, komentar ter list in datoteka |
| Komentarji | Po en za vsak odgovor, z avtorjem in datumom |
| Posnetek | Slika označbe na njenem delu lista |
| Pogled | Pogled od zgoraj na mesto označbe na listu |

Ponovni izvoz iste označbe da isti ID teme, zato lahko orodje, ki uvozi BCF, prepozna, da gre za isto zadevo.

## Kaj se vrne ob uvozu

{{ui:Uvozi BCF}} bere datoteke BCF 2.0, 2.1 in 3.0 (preverjeno na 19 uradnih preskusnih datotekah buildingSMART 3.0: prebrana je bila vsaka tema, komentarji treh tem, ki imajo besedilo, pa so bili prebrani). Za temo, ki je vaša (enak ID teme), doda nove komentarje kot odgovore in prevzame novo stanje. Vsaka druga tema postane opomba na listu, ki ga določa njena oznaka ali ime datoteke, sicer na odprtem listu. Njen naslov, opis, zadolženi in rok postanejo besedilo opombe, njeni komentarji pa odgovori.

| V temi BCF | V MarkupCraft |
|---|---|
| Naslov, opis, zadolženi, rok | Besedilo opombe |
| Komentarji z besedilom | Odgovori |
| Stanje Odprto, Sprejeto, Zavrnjeno, Dokončano (Zaprto, Rešeno in Opravljeno štejejo kot Dokončano) | Stanje označbe |
| Avtor in datum ustvarjanja | Avtor in datum opombe |
| Položaj kamere | Mesto na listu, samo za temo, povezano z listom po oznaki ali imenu datoteke |
| Izbor modela, skrite dele, rezalne ravnine, posnetki | Ni ohranjeno: list nima modela, v katerem bi jih bilo mogoče prikazati |

## Omejitve

- **List ni model.** Pogled kaže na položaj označbe na papirju, merjen v metrih papirja. Z njim orodje BIM ne pride na mesto v modelu. Za iskanje mesta uporabite posnetek in ime lista.
- **Stanja in vrste so last MarkupCraft** (Odprto, Sprejeto, Zavrnjeno, Dokončano; Revizijski oblak, Oblaček …). Datoteka jih navaja, kot BCF dopušča, vendar jih orodje s svojimi fiksnimi seznami lahko preslika ali spregleda.
- **Uvoz prinese komentarje, ne pogledov modela.** {{ui:Uvozi BCF}} doda odgovore in stanja označbam, ki ste jih izvozili, in ustvari opombe za druge zadeve; kamere modela ne more prikazati. Glejte [Seznam označb in izvoz](topic:markups-list-and-export#import-bcf).
- Pošiljanje označb nazaj kot PDF je pri pregledih risb pogosto preprostejše. BCF je namenjen temu, da komentarji k risbam pridejo v delovni tok usklajevanja modela.
