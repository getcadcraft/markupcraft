---
title: Alle markeringstyper
summary: De sytten typene markeringer, deres taster, hvordan hver tegnes, standardutseendet og hva den blir i den lagrede PDF-en.
keywords: markeringstyper, verktøyliste, annoteringstyper, sky, henvisning, tekst, notat, stempel, penn, utheving, linje, pil, rektangel, ellipse, polylinje, mangekant, lengde, areal, tell
from: 29bf32e7
---

## Verktøyene

| Verktøylinje | Tast | Slik tegner du | Standardutseende | I den lagrede PDF-en |
|---|---|---|---|---|
| {{ui:Penn}} | {{key:P}} | Dra | Rød, 1.5 pt | Blekk |
| {{ui:Utheving}} | {{key:I}} | Dra | Gul, 14 pt bred, gjennomsiktig, farger det som er under | Blekk (merket som en utheving) |
| {{ui:Linje}} | {{key:L}} | Dra, eller klikk start og slutt | Rød, 2 pt | Linje |
| {{ui:Pil}} | {{key:A}} | Dra, eller klikk start og slutt | Rød, 2 pt, lukket pilspiss på enden | Linje med pilspiss |
| {{ui:Bue}} | {{key:O}} | Klikk start, et punkt på buen, så slutten | Rød, 2 pt | Polylinje langs buen |
| {{ui:Rektangel}} | {{key:R}} | Dra en boks | Rød, 2 pt, ingen fyll | Kvadrat |
| {{ui:Ellipse}} | {{key:E}} | Dra en boks | Rød, 2 pt, ingen fyll | Sirkel |
| {{ui:Polylinje}} | {{key:Y}} | Klikk punkter, dobbeltklikk for å fullføre | Rød, 2 pt | Polylinje |
| {{ui:Mangekant}} | {{key:G}} | Klikk punkter, dobbeltklikk for å fullføre | Rød, 2 pt, ingen fyll | Mangekant |
| {{ui:Sky}} | {{key:C}} | Dra en boks | Rød, 1.5 pt buer | Kvadrat med skyformet kant |
| {{ui:Fri sky}} | {{key:Shift+C}} | Klikk punkter, dobbeltklikk for å fullføre | Rød, 1.5 pt buer | Mangekant med skyformet kant |
| {{ui:Henvisning}} | {{key:K}} | Trykk på punktet, dra til teksten, skriv | Rød tekst og peker, 1 pt, 12 pt tekst | Tekstboks med henvisningspeker |
| {{ui:Tekst}} | {{key:T}} | Klikk eller dra en boks, skriv | Rød 12 pt tekst, ingen ramme | Tekstboks |
| {{ui:Notat}} | {{key:N}} | Klikk, skriv | Gult notatikon | Klebelapp |
| {{ui:Stempel}} | {{key:S}} | Velg et stempel, klikk eller dra | Innrammede store bokstaver pluss «Av <navn>, <dato>»; farget etter betydning | Stempel |
| {{ui:Lengde}} | {{key:M}} | Klikk start og slutt (krever en målestokk) | Blå målelinje med streker og lengden | Linje merket som et mål, med en måling |
| {{ui:Vinkel}} | {{key:X}} | Klikk enden av den ene armen, hjørnet, så enden av den andre armen | Blå armer, en liten bue i hjørnet og vinkelen i grader | Polylinje med vinkelen som tekst |
| {{ui:Areal}} | {{key:Q}} | Klikk hjørner, dobbeltklikk for å fullføre (krever en målestokk) | Blå kontur, lys blå fyll, areal og omkrets | Mangekant merket som et areal, med en måling |
| {{ui:Tell}} | {{key:U}} | Klikk på hvert element | Oransje nummererte prikker og en merkelapp «group: n» | Én blekkkommentar per gruppe, en ring per element |

På berøring er «dobbeltklikk for å fullføre» et dobbelttrykk, og «klikk» er et trykk som virker når du løfter (for punkter, notater og tellinger).

## Hva hver markering inneholder

| Felt | Hvor du ser det |
|---|---|
| Forfatter | {{ui:Egenskaper}}, listen, stempelets andre linje, andre PDF-visere |
| Opprettet og endret | {{ui:Egenskaper}} (din tidssone), listen, CSV |
| Status | Åpen, Akseptert, Avvist eller Fullført |
| Emne | En kort merkelapp; standard er typen («Sky», «Tekstboks», «Lengdemåling») |
| Kommentar | Lengre notater. For et notat er teksten dets kommentar. |
| Tekst | Bare tekstbokser og henvisninger |
| Svar | Tråden, med statusendringer |
| Avviksvare | Nummer, tildelt, frist, varestatus, når den legges til avvikslisten |
| Stil | Farge, linjebredde, fyll og fyllopasitet (lukkede figurer, tekst og henvisninger), opasitet, tekststørrelse (tekst, henvisninger og målinger) |

## Kommentarer som bare kan leses

Kommentarer som fulgte med filen, og som MarkupCraft ikke kan redigere (tekstutheving, andre programmers stempler og andre spesialtyper), listes med typen «Annet» og statusbrikken «Skrivebeskyttet». De beholder nøyaktig det utseendet filen gir dem. Du kan velge dem, se forfatter, emne og kommentar, og svare på dem.

## Ikke bygget ennå

Filvedlegg er ikke bygget ennå. Enhver markering kan lenkes til et ark; se [Arklenker](topic:sheet-links). Bilder og signaturer plasseres med verktøyet {{ui:Stempel}}; se [Stempler og notater](topic:stamps-and-notes). Se [Hva som ikke er bygget ennå](topic:not-built-yet).
