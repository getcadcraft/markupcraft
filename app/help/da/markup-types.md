---
title: Alle markeringstyper
summary: De sytten slags markeringer, deres taster, hvordan hver tegnes, dens standardudseende, og hvad den bliver til i den gemte PDF.
keywords: markeringstyper, værktøjsliste, annoteringstyper, sky, henvisning, tekst, notat, stempel, pen, fremhæver, linje, pil, rektangel, ellipse, polylinje, polygon, længde, areal, antal
from: 29bf32e7
---

## Værktøjerne

| Værktøjslinje | Tast | Sådan tegnes | Standardudseende | I den gemte PDF |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Træk | Rød, 1.5 pt | Blæk |
| {{ui:Fremhæv}} | {{key:I}} | Træk | Gul, 14 pt bred, gennemsigtig, farver det under den | Blæk (markeret som et fremhævningsstrøg) |
| {{ui:Linje}} | {{key:L}} | Træk, eller klik start og slut | Rød, 2 pt | Linje |
| {{ui:Pil}} | {{key:A}} | Træk, eller klik start og slut | Rød, 2 pt, lukket pilespids i enden | Linje med en pilespids |
| {{ui:Bue}} | {{key:O}} | Klik start, et punkt på buen, derefter slutningen | Rød, 2 pt | Polylinje langs buen |
| {{ui:Rektangel}} | {{key:R}} | Træk en boks | Rød, 2 pt, ingen udfyldning | Kvadrat |
| {{ui:Ellipse}} | {{key:E}} | Træk en boks | Rød, 2 pt, ingen udfyldning | Cirkel |
| {{ui:Polylinje}} | {{key:Y}} | Klik punkter, dobbeltklik for at afslutte | Rød, 2 pt | Polylinje |
| {{ui:Polygon}} | {{key:G}} | Klik punkter, dobbeltklik for at afslutte | Rød, 2 pt, ingen udfyldning | Polygon |
| {{ui:Sky}} | {{key:C}} | Træk en boks | Rød, 1.5 pt bølger | Kvadrat med en skyet kant |
| {{ui:Fri sky}} | {{key:Shift+C}} | Klik punkter, dobbeltklik for at afslutte | Rød, 1.5 pt bølger | Polygon med en skyet kant |
| {{ui:Henvisning}} | {{key:K}} | Tryk på punktet, træk til teksten, skriv | Rød tekst og henvisningslinje, 1 pt, 12 pt tekst | Tekstboks med en henvisningslinje |
| {{ui:Tekst}} | {{key:T}} | Klik eller træk en boks, skriv | Rød 12 pt tekst, ingen kant | Tekstboks |
| {{ui:Notat}} | {{key:N}} | Klik, skriv | Gult notatikon | Klæbelap |
| {{ui:Stempel}} | {{key:S}} | Vælg et stempel, klik eller træk | Indrammede versaler plus »Af <navn>, <dato>«; farvet efter betydning | Stempel |
| {{ui:Længde}} | {{key:M}} | Klik start og slut (kræver en skala) | Blå målelinje med ticks og længden | Linje markeret som en måling, med en måling |
| {{ui:Vinkel}} | {{key:X}} | Klik den ene arms ende, hjørnet, derefter den anden arms ende | Blå arme, en lille bue i hjørnet og vinklen i grader | Polylinje med vinklen som tekst |
| {{ui:Areal}} | {{key:Q}} | Klik hjørner, dobbeltklik for at afslutte (kræver en skala) | Blå kontur, lyseblå udfyldning, areal og omkreds | Polygon markeret som et areal, med en måling |
| {{ui:Tæl}} | {{key:U}} | Klik på hvert element | Orange nummererede prikker og et »gruppe: n«-mærke | Én blækkommentar pr. gruppe, en ring pr. element |

På touch er »dobbeltklik for at afslutte« et dobbelttryk, og »klik« er et tryk, der virker, når du løfter (for punkter, notater og tællinger).

## Hvad hver markering indeholder

| Felt | Hvor du ser det |
|---|---|
| {{ui:Forfatter}} | {{ui:Egenskaber}}, listen, stemplets anden linje, andre PDF-fremvisere |
| Oprettet og ændret | {{ui:Egenskaber}} (din tidszone), listen, CSV'en |
| Status | Åben, Accepteret, Afvist eller Afsluttet |
| {{ui:Emne}} | En kort etiket; standard er typen (»Sky«, »Tekstboks«, »Længdemåling«) |
| {{ui:Kommentar}} | Længere noter. For et notat er dets tekst dets kommentar. |
| Tekst | Tekstbokse og henvisninger alene |
| Svar | Tråden, med statusændringer |
| Mangelpost | Nummer, modtager, forfaldsdato, postens status, når den tilføjes til {{ui:Mangelliste}} |
| Stil | Farve, linjetykkelse, udfyldning og udfyldningens dækning (lukkede figurer, tekst og henvisninger), dækning, tekststørrelse (tekst, henvisninger og målinger) |

## Skrivebeskyttede kommentarer

Kommentarer der fulgte med filen, og som MarkupCraft ikke kan redigere (tekstfremhævninger, andre programmers stempler og andre særlige typer), vises med typen »Anden« og statusmærket »Skrivebeskyttet«. De beholder præcis det udseende filen giver dem. Du kan vælge dem, se deres forfatter, emne og kommentar, og svare på dem.

## Ikke lavet endnu

Filvedhæftninger er ikke lavet endnu. Enhver markering kan linke til et ark; se [Arklinks](topic:sheet-links). Billeder og underskrifter placeres med værktøjet {{ui:Stempel}}; se [Stempler og notater](topic:stamps-and-notes). Se [Hvad der ikke er lavet endnu](topic:not-built-yet).
