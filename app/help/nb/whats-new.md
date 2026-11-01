---
title: Nytt i 0.7
summary: RFI-er, innleveringer og dagslogger i en ny fane Byggeplass, med frister, forfalt i rødt, CSV og BCF, frakoblet arbeid og Slå sammen; assistenter som setter status, svarer og eksporterer listen; enhetslister som følger Innstillinger; paneler som rydder seg bort og dialogbokser som flyttes.
keywords: nytt, hva er nytt, versjonsmerknader, endringslogg, endringer, 0.7, versjon, nye funksjoner, byggeplass, feltposter, rfi, forespørsel om informasjon, innlevering, dagslogg, byggedagbok, forfalt, frist, tildelt meg, nål, slå sammen, frakoblet, nettbrett, bcf, csv, assistent, mcp, markeringsstatus, svar, eksport, enheter, enhetslister, stjerne, kalibrer, kompakt, paneler, dialogbokser, portugisisk
from: 142e1a1e
---

Dette er hva som er endret i MarkupCraft 0.7 sammenlignet med 0.6. Det store nye er feltposter: RFI-er, innleveringer og dagslogger som ligger i PDF-en ved siden av markeringene dine.

## Nytt

### RFI-er, innleveringer og dagslogger

- **Fanen Byggeplass.** Åpne fanen {{ui:Byggeplass}} og velg {{ui:RFI}}, {{ui:Innlevering}} eller {{ui:Dagslogg}}. Trykk eller klikk på arket der en RFI eller en innlevering hører hjemme, så markerer en nål stedet; en dagslogg legges på det åpne arket uten nål ({{ui:Plasser nål}} legger til en senere, {{ui:Flytt nål}} flytter en hvilken som helst nål). Hver post har sitt eget nummer (RFI-0001, SUB-0001, LOG-0001), en tittel, tekst, en status, en ansvarlig, en frist, en tråd med svar og en liste med vedleggsnavn. Se [Følg RFI-er, innleveringer og dagslogger](topic:field-records).
- **Se hva som er forsinket.** Filtrer listen etter type, status, frist (forfalt, forfaller om 7 dager, har eller har ikke frist), dette arket eller alle ark, et tekstsøk, eller {{ui:Tildelt meg}}. En post som har passert fristen og fortsatt venter, er merket **Forfalt**, i rødt, i listen og på nålen. Se [Finn det som betyr noe](topic:field-records#find-what-matters).
- **CSV og BCF.** {{ui:CSV}} skriver de listede postene som et regneark; {{ui:BCF}} skriver dem som BCF-emner, hver med et øyeblikksbilde av stedet på arket. Begge følger filtrene. Se [Eksport](topic:field-records#export).
- **Frakoblet, og to kopier gjort til én.** Postene lagres i PDF-en og trenger ikke nettverk, så et nettbrett på byggeplassen kan legge til, besvare og lagre dem. Tilbake på kontoret slår {{ui:Slå sammen}} sammen postene fra en annen kopi av den samme PDF-en etter id, som ett angretrinn. Se [Lagring, frakoblet bruk og sammenslåing av kopier](topic:field-records#save-offline-and-merging-copies).

### AI-assistenter

- **Mer en assistent kan gjøre.** Din egen assistent, koblet til gjennom CadCraft Studio, kan nå sette status på en markering (`markup_status`, loggført i tråden dens), svare i en tråd (`markup_reply`) og eksportere listen {{ui:Markeringer}} som CSV eller BCF (`markups_export`, det listen viser med filtrene sine). Hver endring er ett angretrinn, signert med assistentens navn. Se [Hva en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og fall, med de nøyaktige størrelsene enhetsdefinisjonene gir (den amerikanske oppmålingsfoten er sin egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene; sett stjerne på én, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I MarkupCraft følger måle- og posisjonsenhetene i {{ui:Innstillinger}} › {{ui:MarkupCraft}} og enheten i kalibreringsdialogen bryterne, stjernen angir måleenheten til du lagrer MarkupCrafts egne innstillinger, og den virkelige avstanden du skriver når du kalibrerer, kan ha en hvilken som helst enhets betegnelse, for eksempel `3 yd` eller `1.5 km`. Se [Enheter, innskrevne verdier og enhetslistene](common:unit-lists).
- **Et tettere oppsett og paneler som rydder seg bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder de store knappene). Hvert sidepanel har en slank tittellinje: dra i den for å feste eller frigjøre panelet, slipp det på tittellinjen til et annet panel for å dele én ramme som faner, fest det slik at det glir bort til kanten, eller skjul det og hent det tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogbokser flyttes.** Dra en dialogboks i tittellinjen bort fra tegningen; den kommer tilbake der du lot den stå. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti gjennomarbeidede forespørsler til din egen assistent (rydde en tegning, plotte et sett, kontrollere tegninger, stille en modell spørsmål, summere et mengdeuttak, prøve en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver avspilt av testene våre. Appene inneholder ingen AI. Se [Oppskrifter for AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå hvert ord i appene, som utkast som ennå ikke er gjennomgått av en morsmålsbruker. Hjelpeemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for systemet ditt ennå, ikke noe nettverk, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å hente tilbake et Nytt-kort du har lukket før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8 fordi sertifikatvalideringen ikke har kommet gjennom ennå. Kontroller SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer informasjon}}, deretter {{ui:Kjør likevel}}. På en Mac høyreklikker du CadCraft Studio første gang og velger {{ui:Åpne}}. CadCraft Studio er ikke i noen appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og fall-listene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- Feltposter deles ikke i en CadCraft Studio-liveøkt (liveøkter bærer bare markeringer); samle kopier med {{ui:Slå sammen}}.
- Sammenslåing tar en post som helhet fra kopien som ble endret sist: hvis to personer endret forskjellige felt i én post, vinner feltene fra den senere kopien. Tråder og vedleggsnavn slås sammen.
- Vedlegg er bare navn; filene blir der de er. Det finnes ingen team, varsler eller skyprosjekter for poster, og assistenter har ingen verktøy for poster ennå.
- Feltposter ble testet i en nettleser i telefon- og nettbrettstørrelse med nettverket kuttet, men ennå ikke for hånd på et ekte nettbrett.
- Fortsatt fra 0.6: å dreie sideobjekter til en hvilken som helst vinkel, å tegne nye former rett inn i siden, å endre font eller størrelse på en linje, og tekst som flyter over flere linjer. En lagret kopi med sideendringer er ikke åpnet i Acrobat ennå.
- Fortsatt fra 0.5: å angre en sideendring (for eksempel å legge til en blank side), å lese tekst fra skannede ark, og liveøkter utover ditt eget nettverk.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet).
