---
title: Følg RFI-er, innleveringer og dagsrapporter
summary: Legg RFI-er, innleveringer og dagsrapporter på arkene, med nummer, mottakere, frister og tråder; filtrer det som har forfalt; eksporter CSV eller BCF; arbeid frakoblet og slå sammen kopier.
keywords: rfi, forespørsel om informasjon, innlevering, dagsrapport, byggerapport, byggeplass, forfalt, frist, tildelt meg, tråd, vedlegg, slå sammen, frakoblet, nettbrett, bcf, csv, felt
from: 95039c5a
---

Fanen {{ui:Byggeplass}} holder tre typer poster ved siden av markeringene dine. Hver er knyttet til et ark; en RFI eller en innlevering har også en nål på stedet på arket den gjelder.

- **RFI**: et spørsmål til prosjekteringsgruppen. Statuser: Åpen, Besvart, Lukket.
- **Innlevering**: noe som skal gjennomgås før arbeidet går videre. Statuser: Åpen, Under behandling, Godkjent, Godkjent med merknad, Revider og send inn på nytt, Lukket.
- **Dagsrapport**: dagens vær, antall personer på byggeplassen og arbeidet som er utført. Statuser: Utkast, Endelig.

Hver post har et eget nummer for sin type (RFI-0001, SUB-0001, LOG-0001), en tittel, tekst, en mottaker, en frist, en tråd med svar og en liste over vedleggsnavn.

## Legg til en

1. Åpne fanen {{ui:Byggeplass}} og velg {{ui:RFI}} eller {{ui:Innlevering}}.
2. Trykk eller klikk på arket der posten hører hjemme. En nål vises, og posten åpnes i fanen.
3. Fyll inn tittel, spørsmål eller beskrivelse, hvem posten er tildelt og når den har frist.

En dagsrapport legges til på det åpne arket uten nål. {{ui:Plasser nål}} setter en nål på den senere; {{ui:Flytt nål}} flytter en hvilken som helst nål. Trykk på en nål på arket for å åpne posten.

## Svar og følg opp

Endre {{ui:Status}}, så føres endringen i tråden. Skriv et svar og velg {{ui:Send svar}} (Ctrl+Enter sender også). Vedlegg er bare navn: skriv et navn eller velg filer, og listen forteller teamet hva som hører til posten. Selve filene blir liggende der de er.

En post der fristen har passert og som fortsatt venter (en RFI som ikke er Besvart eller Lukket, en innlevering som ikke er avgjort), merkes **Forfalt** i rødt, både i listen og på nålen.

## Finn det som er viktig

Filtrene står over listen: type, status, frist (forfalt, frist innen 7 dager, med eller uten frist), dette arket eller alle ark, et tekstsøk, og {{ui:Tildelt meg}}, som sammenligner mottakeren med navnet MarkupCraft kjenner deg under (se [Angi navnet ditt](topic:set-your-name)). Linjen under filtrene viser hva som vises, og hva som er forfalt.

## Eksport

{{ui:CSV}} skriver de viste postene som et regneark. {{ui:BCF}} skriver dem som BCF-saker, hver med et bilde av plasseringen på arket, slik at andre BCF-verktøy kan vise dem. Begge følger filtrene.

## Lagre, frakoblet arbeid og sammenslåing av kopier

Postene lagres i PDF-filen når du lagrer den, og de er der igjen når du åpner den. Ingen nettverkstilkobling er nødvendig: legg til, rediger, svar og lagre på et nettbrett i en kjeller, og ta deretter PDF-filen med tilbake. Eldre PDF-filer, og PDF-filer fra andre programmer, åpnes som før.

For å samle to kopier, åpne den ene og velg {{ui:Slå sammen}}, og velg deretter den andre kopien av samme PDF. Poster kobles sammen etter id:

- en post som bare den ene kopien har, legges til;
- en post som finnes i begge tar feltene (tittel, tekst, status, mottaker, frist) fra kopien som sist ble endret, som en helhet; hvis to personer endret ulike felt i samme post, vinner den senere kopiens versjon; tråder og vedleggsnavn fra begge kopiene settes sammen;
- hvis begge kopiene nummererte en ny post likt, får den som kommer inn det neste ledige nummeret;
- en post som er fjernet i én kopi forblir fjernet, med mindre den ble redigert senere.

En sammenslåing er ett steg i {{ui:Angre}}.

## Begrensninger

- Poster deles ikke av Live TeamWork ennå; bruk {{ui:Slå sammen}}.
- Det finnes ingen team, varsler eller skyprosjekter for poster i denne versjonen.
- Sider som slettes fra PDF-filen tar postene sine med seg (sidebekreftelsen teller dem).
