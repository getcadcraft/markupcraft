---
title: Nytt i 0.7 (tidligere)
summary: RFI-er, innleveringer og dagslogger i en ny Byggeplass-fane, med forfallsdatoer, forfalt i rødt, CSV og BCF, frakoblet arbeid og Slå sammen; assistenter som setter statuser, svarer og eksporterer listen; enhetslister som følger Innstillinger; paneler som ryddes bort og dialogbokser som flyttes.
keywords: hva er nytt 0.7, tidligere utgivelse, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, byggeplass, byggeplassposter, RFI, forespørsel om informasjon, innlevering, dagslogg, byggedagbok, forfalt, forfallsdato, tildelt meg, nål, slå sammen, frakoblet, nettbrett, BCF, CSV, assistent, MCP, markeringsstatus, svar, eksport, enheter, enhetslister, stjerne, kalibrer, kompakt, paneler, dialogbokser, portugisisk
from: ca5ba1f0
---

Dette er det som endret seg i MarkupCraft 0.7, sammenlignet med 0.6. Det store nye er byggeplassposter: RFI-er, innleveringer og dagslogger som holdes inne i PDF-en, ved siden av markeringene dine.

## Nytt

### RFI-er, innleveringer og dagslogger

- **Byggeplass-fanen.** Åpne fanen {{ui:Byggeplass}} og velg {{ui:RFI}}, {{ui:Innlevering}} eller {{ui:Dagslogg}}. Trykk eller klikk på arket der en RFI eller en innlevering hører hjemme, så markerer en nål stedet; en dagslogg legges på det åpne arket uten nål ({{ui:Plasser nål}} legger til en senere, og {{ui:Flytt nål}} flytter en hvilken som helst nål). Hver post har sitt eget nummer (RFI-0001, SUB-0001, LOG-0001), en tittel, tekst, en status, en ansvarlig, en forfallsdato, en tråd med svar og en liste over vedleggsnavn. Se [Følg RFI-er, innleveringer og dagslogger](topic:field-records).
- **Se hva som er forsinket.** Filtrer listen etter type, status, forfallsdato (forfalt, forfaller om 7 dager, har eller har ikke forfallsdato), dette arket eller alle ark, et tekstsøk, eller {{ui:Tildelt meg}}. En post som har passert forfallsdatoen og fortsatt venter, merkes **Forfalt** i rødt, både på listen og på nålen sin. Se [Finn det som betyr noe](topic:field-records#find-what-matters).
- **CSV og BCF.** {{ui:CSV}} skriver de listede postene som et regneark; {{ui:BCF}} skriver dem som BCF-emner, hver med et øyeblikksbilde av plasseringen på arket. Begge følger filtrene. Se [Eksport](topic:field-records#export).
- **Frakoblet, og to kopier blir til én.** Byggeplassposter lagres i PDF-en og trenger ikke nettverk, så et nettbrett på byggeplassen kan legge til, svare på og lagre dem. Når du er tilbake på kontoret, slår {{ui:Slå sammen}} sammen postene fra en annen kopi av samme PDF etter id-ene deres, som ett angretrinn. Se [Lagre, frakoblet arbeid og sammenslåing av kopier](topic:field-records#save-offline-and-merging-copies).

### AI-assistenter

- **Mer en assistent kan gjøre.** Din egen assistent, koblet til via CadCraft Studio, kan nå sette status på en markering (`markup_status`, loggført i tråden), svare i en tråd (`markup_reply`) og eksportere listen {{ui:Markeringer}} som CSV eller BCF (`markups_export`, det listen viser med filtrene sine). Hver endring er ett angretrinn, signert med assistentens navn. Se [Hva en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetsdefinisjonene gir (den amerikanske landmålingsfoten er en egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene; merk én med stjerne, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I MarkupCraft følger mål- og posisjonsenhetene under {{ui:Innstillinger}} › {{ui:MarkupCraft}}, og enheten i kalibreringsdialogen, bryterne; stjernen setter måleenheten inntil du lagrer MarkupCraft sine egne innstillinger; og den virkelige avstanden du skriver inn når du kalibrerer, kan ha et hvilket som helst enhetsmerke, for eksempel `3 yd` eller `1.5 km`. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **Tettere layout og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder de store knappene sine). Hvert sidepanel har en slank tittellinje: dra den for å feste eller frigjøre panelet, slipp det på et annet panels linje for å dele én ramme som faner, lås det slik at det glir bort til kanten, eller skjul det og hent det tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogbokser flyttes.** Dra en dialogboks etter tittellinjen ut av veien for tegningen; den kommer tilbake der du slapp den. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti utarbeidede forespørsler til din egen assistent (rydd en tegning, skriv ut et sett, sjekk tegninger, still spørsmål om en modell, summer en mengdeuttak, prøv en variant av en del …), hver med verktøyene den kaller og tillatelsene den trenger, og hver spilt av på nytt av testene våre. Appene inneholder ingen AI. Se [Oppskrifter for AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Den, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå alle ordene i appene, som utkast som ennå ikke er gjennomgått av en morsmålsbruker. Hjelpeemnene er på engelsk.
- **CadCraft Studio** forklarer hvorfor en oppdateringssjekk mislyktes (ingen fil for systemet ditt ennå, ingen nettverk, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å vise et kort med hva som er nytt som du har lukket, før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi sertifikatvalideringen ikke er kommet gjennom ennå. Sjekk SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer info}}, deretter {{ui:Kjør likevel}}. På en Mac, første gang, høyreklikk CadCraft Studio og velg {{ui:Åpne}}. CadCraft Studio er ikke i en appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og helningslistene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- Byggeplassposter deles ikke i en CadCraft Studio-liveøkt (liveøkter bærer bare markeringer); ta med kopiene og slå dem sammen med {{ui:Slå sammen}}.
- Slå sammen tar en post som helhet fra kopien som sist ble endret: hvis to personer endret ulike felt i én post, vinner den senere kopiens felt. Tråder og vedleggsnavn slås sammen.
- Vedlegg er bare navn; filene blir der de er. Det finnes ingen team, varsler eller skyprosjekter for poster, og assistenter har ingen verktøy for poster ennå.
- Byggeplassposter ble testet i en nettleser i telefon- og nettbrettstørrelse med nettverket kuttet, men ikke ennå for hånd på et ekte nettbrett.
- Ennå fra 0.6: å dreie sideobjekter til en hvilken som helst vinkel, tegne nye figurer rett inn i siden, endre en linjes skrift eller størrelse, og tekst som flyter over flere linjer. En lagret kopi med sideredigeringer er ikke åpnet i Acrobat ennå.
- Ennå fra 0.5: å angre en sideendring (for eksempel å legge til en tom side), lese tekst fra skannede ark, og liveøkter utenfor ditt eget nettverk.

Alt annet finnes i [Hva som ikke er bygget ennå](topic:not-built-yet).
