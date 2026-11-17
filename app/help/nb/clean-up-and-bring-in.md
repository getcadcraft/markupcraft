---
title: Rydd opp i pennstrøk, og hent inn gjennomgangskommentarer og byggeplassfremdrift
summary: Gjør frihåndspennstrøk om til linjer, sirkler, buer og rektangler. Hent inn gjennomgangskommentarer fra en byggesakspakke og oppmålingsfremdrift fra en byggeplass som notater.
keywords: penn, frihånd, rydd opp, rett ut, sirkel, linje, rektangel, bue, byggesak, gjennomgangskommentarer, fremdrift, drone, skanning, oppmåling, notater, csv
from: 547d8e42
---

## Rydd opp i pennstrøk

Tegn med {{ui:Penn}}, åpne deretter {{ui:Mer}}-menyen i Rediger-gruppen og velg {{ui:Rydd opp i pennstreker}}. Hvert valgte pennstrøk blir det det var ment å være: et rett strøk blir en linje (gjort helt vannrett eller loddrett når det var nesten det), et rundt en ellipse, en del av en sirkel en bue, et lukket firkantet et rektangel, og alt annet en polylinje eller mangekant. Løse ender på strøk tegnet sammen trekkes mot hverandre. Uten valgt pennstrøk ryddes alle pennstrøk på det åpne arket. Det er ett angrertrinn: Ctrl+Z setter frihåndstegningen tilbake. Formen beregnes på datamaskinen din etter faste regler, og ingenting sendes noe sted.

## Hent inn gjennomgangskommentarer

BimCrafts byggesakspakke inneholder `01-review-comments.csv`: kommentarene en plangodkjenner sannsynligvis vil komme med, hver med regelen, paragrafen, hva som trengs, hva som ble funnet og hva som skal gjøres. Åpne {{ui:Kommentarer fra byggesaksbehandling}} i fanen {{ui:Oppgaver}} og velg {{ui:Hent inn kommentarer (CSV)}}. Hver kommentar blir et åpent notat i en kolonne langs venstre side av det åpne arket. Dra hver til stedet den gjelder. De er beregnet ut fra de eksisterende kontrollene, ikke fra en saksbehandler.

## Hent inn HAZOP-nodebokser

CadCrafts P&ID-tillegg tegner nodene i en HAZOP-studie og kan lagre dem som {{ui:HAZOP-nodebokser}} (en JSON-fil). Åpne det utskrevne P&ID-arket her, gå til fanen {{ui:Oppgaver}}, åpne {{ui:HAZOP-nodebokser}} og velg {{ui:Hent inn nodebokser (JSON)}}. Hver node blir en åpen rektangel på arket med nummer, navn, utstyr og linjer i teksten, og teamet skriver funnene sine som svar på dem. Arket tas som utskrevet i full størrelse fra tegningens nedre venstre hjørne. Hvis det ble skrevet ut i en annen målestokk, skriver du tallet inn i {{ui:Skrevet ut i}} først (0.5 for 1:2). En node utenfor siden tegnes ikke, og panelet sier hvor mange. Markørene er et hjelpemiddel for studien: de viser hvor nodene er, men de vurderer ikke studien.

## Hent inn byggeplassfremdrift

CivilCraft holder en rad for hver droneflyging eller skanning av byggeplassen. I fanen {{ui:Oppgaver}} åpner du {{ui:Byggeplassfremdrift}} og velger {{ui:Hent inn fremdrift (JSON)}}. Hver oppmåling blir et notat på det åpne arket som sier hvor mye som er gjort, hva som gjenstår å grave eller fylle, hva som er for dypt gravd eller for mye fylt, og hva som ligger utenfor planen. En oppmåling med noe utenfor planen forblir Åpen. En uten avvik blir Godkjent.
