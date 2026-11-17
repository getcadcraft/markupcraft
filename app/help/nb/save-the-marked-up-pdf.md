---
title: Lagre den markerte PDF-filen
summary: Last ned en kopi med alle markeringer skrevet inn som vanlige PDF-kommentarer, sjekk hva andre PDF-lesere viser, og fortsett å jobbe med den senere.
keywords: lagre, last ned, eksporter pdf, markert, merknader, kommentarer, dele, send, problem, fortsett å jobbe, åpne igjen, rundtur, skriv ut
from: 4c198ebe
---

## Lagre

1. Velg {{ui:Save}} i verktøylinjen, eller trykk {{key:Mod+S}}.
2. Hvis flere filer er åpne, velg {{ui:This file}} (filen til arket du er på) eller {{ui:Every changed file}}. Hver kopi lastes ned for seg.
3. Vent til "Lagrer <file>…" er ferdig. Den første lagringen i en økt laster også PDF-skriveren.

Resultat: Nettleseren laster ned "<name> (marked up).pdf", og statuslinjen melder det: 'Lagret A-Plans (marked up).pdf (24 markeringer, 18.2 MB). Originalfilen er uendret.' Prikken etter {{ui:Save}} forsvinner.

**Din originale PDF-fil endres aldri.** MarkupCraft skriver en ny fil. Hvor den havner, avhenger av nettleserens innstillinger for nedlasting (se [Filer MarkupCraft åpner og lagrer](topic:files#where-downloads-go)).

## Fortsett å jobbe med den senere

Åpne kopien "(marked up)" neste gang, ikke originalen. Alt kommer tilbake og kan redigeres: markeringer, statuser, svar, avviksposter, skalaen til hvert ark og arknavn du skrev inn. Når du lagrer på nytt, lastes det ned en fil med samme navn "(marked up)". Nettleseren kan legge til et nummer, for eksempel "(1)", hvis den gamle nedlastingen fortsatt ligger i mappen. Erstatt eller rydd i gamle kopier selv.

MarkupCraft lagrer ikke PDF-filen av seg selv. Mens du jobber, beholder den en gjenopprettingskopi i denne nettleseren, slik at et krasj eller en lukket fane ikke fjerner markeringene dine. Neste gang du åpner MarkupCraft, spør den "Gjenopprett arbeidet ditt?". Se [Gjenopprett arbeidet ditt](common:recover). Lagre likevel før du lukker. Hvis du prøver å forlate siden med ulagrede markeringer, spør nettleseren "Forlate siden?" først (iPad Safari gjør ikke det).

## Hva andre PDF-lesere ser

Hver markering skrives som en vanlig PDF-kommentar (merknad) med sin egen tegning, slik at alle PDF-lesere viser den, skriver den ut og lister den i kommentarpanelet:

- **Utseendet er det samme** som i MarkupCraft: skyer med bølgede kanter, pilspisser, stempler, telleprikker og merker for avviksnummer og målinger.
- **Detaljene er standard:** forfatter, dato, emne, kommentarteksten og farger.
- **Skyer** er rektangel- eller polygonkommentarer med skyformet kant. **Tekstbokser** og **henvisninger** er tekstboks-kommentarer. **Notater** er gule lapper. **Penn** og **utheving** er blekkstreker. **Stempler** er stempelkommentarer.
- **Lengder og arealer** er målekommentarer, og hvert kalibrert ark har med seg skalaen sin, slik at lesere som forstår målinger kan vise verdiene.
- **Svar** er svar på kommentaren, og **statuser** er gjennomgangstilstander (Åpen vises som ingen tilstand).
- **Arknumre** du skrev inn, blir sidetitlene som andre lesere viser.

Noen ting leses bare tilbake av MarkupCraft: avviksposten sin tildelte person og forfallsdato, status for avviksposten og noen stildetaljer. Andre programmer beholder dem, med mindre de skriver om kommentaren.

I et annet program kan kommentarer flyttes eller redigeres som vanlig. Hvis noen gjør det og sender filen tilbake, bruker MarkupCraft kommentarens nye posisjon når filen åpnes.

Full beskrivelse: [Hva som lagres i PDF-filen](topic:what-the-pdf-keeps).

## Tegn som skrives ut som "?"

Markeringstekst skrives med standardskriften Helvetica, som alle PDF-lesere har. Den dekker engelske og vesteuropeiske bokstaver (é, ñ, ü, ø og lignende), men ikke andre skriftsystemer, symboler utenfor dette settet eller emojier. Disse tegnene vises fint i MarkupCraft, men skrives ut som "?" i den lagrede kopien, og lagringsmeldingen teller dem: "3 tegn utenfor det vesteuropeiske settet skrives ut som «?» i kopien." Skriv ut ordet med bokstaver, eller bruk en enkel erstatning (for eksempel "dia." for diametertegnet).

## Filer som ikke kan lagres

- **Beskyttede PDF-filer:** "Denne PDF-filen er beskyttet (kryptert), så en markert kopi kan ikke skrives. Be om en ubeskyttet kopi." Du kan fortsatt gjennomgå den på skjermen og eksportere CSV og BCF.
- Hvis lagringen mislykkes av en annen grunn, vises en boks som heter "Kunne ikke lagre <file>" med årsaken. Markeringene dine er fortsatt i fanen. Ingenting går tapt før du lukker den.

## Utskrift og flating

Det finnes ingen flating (å brenne markeringer inn i siden) og ingen utskriftskommando ennå. For å skrive ut, åpne den lagrede kopien i en PDF-leser og skriv ut med kommentarene vist.
