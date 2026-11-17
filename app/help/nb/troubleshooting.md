---
title: Feilsøking
summary: Meldinger MarkupCraft viser og hva du gjør med dem, pluss løsninger på ting som ser ut til ikke å fungere.
keywords: problem, feil, fungerer ikke, hjelp, melding, åpnes ikke, kan ikke lagre, passord, beskyttet, måling avvist, kalibrer, frakoblet, tom, treg, tapte markeringer, spørsmålstegn
from: bb650b39
---

De fleste problemer forklares i statuslinjen nederst på skjermen. Les den først.

## Åpne filer

**"MarkupCraft åpner PDF-filer. "x" er ikke en PDF."**
Du valgte eller slapp noe annet. Bare PDF-filer åpnes. Eksporter tegningene fra CAD-programmet som PDF først.

**'«navn» trenger et passord for å åpnes. Åpne en kopi uten beskyttelse.'**
PDF-filen er passordbeskyttet. Be avsenderen om en kopi uten beskyttelse, eller åpne den i et PDF-program der du kjenner passordet, og lagre en kopi uten passord.

**'«navn» kunne ikke leses som en PDF (…)'**
Filen er skadet eller er ikke egentlig en PDF (en ufullstendig nedlasting, et e-postvedlegg som er kuttet av). Last den ned på nytt. Hvis andre PDF-programmer kan åpne den, bruk deres «lagre som» for å lage en ren kopi og åpne den.

**Noen filer ble ikke åpnet**
Når du åpner flere samtidig, lister denne boksen filene som feilet og hvorfor. De andre er åpne.

**PDF-leseren kunne ikke lastes: …**
PDF-motoren kunne ikke hentes. Tilkoblet: last siden på nytt og prøv igjen; sjekk at en brannmur eller innholdsblokkerer ikke blokkerer nettstedet. Frakoblet: MarkupCraft ble ikke lagret for frakoblet bruk i denne nettleseren (linjen øverst sier ikke «Klar for frakoblet bruk»). Koble til nettet, velg {{ui:Lagre for frakoblet bruk}}, og vent på «Klar for frakoblet bruk». Se [Arbeid frakoblet](common:offline).

**"Noen merknader kan vises to ganger på skjermen" eller "Ekstra detaljer om merknader kunne ikke leses"**
Filens eksisterende kommentarer er uvanlige. De åpnes likevel så godt MarkupCraft kan; sjekk dem før du stoler på dem. Lagring fungerer fortsatt.

**Arket har feil navn, eller «side 3»**
Se [Hvordan ark får navn](topic:open-a-plan-set#how-sheets-get-their-names). Skannede ark har ingen tekst å lese; bruk {{ui:Gi arket nytt navn}}.

**De samme arkene vises to ganger**
Den samme filen ble åpnet to ganger. Velg {{ui:Lukk}} (lagre først hvis nødvendig) og åpne settet på nytt.

## Tegning og valg

**Ingenting skjer når jeg klikker på arket**
Sjekk hvilket verktøy som er trykt inn i verktøylinjen, og les statuslinjen. Med {{ui:Rektangel}}, {{ui:Ellipse}} og {{ui:Sky}} tegner et klikk uten å dra ingenting: dra. Med {{ui:Polylinje}}, {{ui:Mangekant}}, {{ui:Fri sky}} og {{ui:Areal}} legges det til punkter: avslutt med et dobbeltklikk eller {{key:Enter}}.

**"En mangekant trenger minst 3 punkter." (eller 2 for en polylinje)**
Klikk på flere punkter før du avslutter.

**"Ingenting er skrevet, så ingen tekst ble lagt til."**
Tekstbokser og henvisninger beholdes bare når de har tekst. Tegn den på nytt og skriv før du klikker et annet sted.

**"De to punktene er like. Klikk på to ulike punkter."**
For linjer, piler, lengder og kalibrering må de to endene være fra hverandre. Dra, eller klikk to ganger på ulike steder.

**Jeg kan ikke flytte eller slette en markering; den har en grå stiplet boks**
Det er en skrivebeskyttet kommentar som fulgte med filen (for eksempel en tekstutheving). MarkupCraft beholder den slik den er: du kan bare svare på den. Statuslinjen sier «skrivebeskyttede markeringer beholdes som i filen».

**Tastene mine skriver bokstaver i en boks i stedet for å velge verktøy**
Markøren står i en tekstboks (et svar, et felt i {{ui:Egenskaper}}, arksøket). Klikk først på en tom del av arkområdet, eller trykk {{key:Esc}} hvis du redigerer markeringstekst.

**Mellomrom panorerer ikke, eller piltastene gjør ingenting**
Du klikket nettopp på en verktøylinjeknapp, så den har fortsatt tastaturet. Dra med midtknappen på musen i stedet, eller klikk på arket én gang med {{ui:Velg}} på, og prøv igjen. Se også [Tastatur og mus](topic:keyboard#when-a-key-does-nothing).

**En klype på berøringsskjermen etterlot et merke**
Et dra-verktøy (penn, sky, rektangel) startet før den andre fingeren kom og ble avsluttet før det ble avbrutt. Trykk {{ui:Angre}}. Sett begge fingrene ned samtidig når du vil zoome.

## Måling

**"Kalibrer dette arket først: velg to punkter med en kjent avstand fra hverandre, eller velg målestokken. Mål deretter."**
Hvert ark trenger sin egen målestokk før {{ui:Lengde}} eller {{ui:Areal}}. MarkupCraft har byttet til {{ui:Kalibrer}}: klikk på de to endene av et kjent mål og skriv inn lengden, eller klikk på målestokkknappen i statuslinjen og velg en målestokk. Se [Kalibrer et ark og mål](topic:calibrate-and-measure).

**'Dette er ikke en lengde MarkupCraft forstår.'**
Skriv den slik: `24'-0"`, `12' 6 1/2"`, `7.2 m` eller `900 mm`. Se [Enheter, lengder og målestokker](topic:units-and-scales).

**Målingene er litt feil, eller svært feil**
- En forhåndsinnstilt målestokk på en PDF som ikke er i full størrelse, måler feil. Kalibrer i stedet fra et langt kjent mål.
- Et tusenskilletegn ble lest som desimaltegn: `1,200 mm` betyr 1.2 mm. Skriv `1200 mm`.
- Zoom inn når du klikker på endene.
- Tegningen er kanskje ikke i målestokk («NTS»).

**"Velg en tellegruppe først, og Shift+klikk deretter på et merke for å fjerne det."**
Velg {{ui:Velg}}, klikk på tellegruppen, og velg deretter {{ui:Tell}} igjen og {{key:Shift}}-klikk på prikken.

## Lagring

**"Denne PDF-filen er beskyttet (kryptert), så en markert kopi kan ikke skrives."**
Filen forbyr endringer. Be om en kopi uten beskyttelse. I mellomtiden kan du fortsatt eksportere markeringslisten som CSV eller BCF.

**"PDF-skriveren kunne ikke lastes: …"**
Vanligvis er du frakoblet, og appen ble ikke lagret for frakoblet bruk (ingen «Klar for frakoblet bruk» i linjen øverst). Markeringene dine er fortsatt i fanen: la den være åpen, koble til nettet, og velg {{ui:Lagre}} igjen. Velg deretter {{ui:Lagre for frakoblet bruk}} slik at det fungerer frakoblet neste gang; den lagrede kopien inkluderer PDF-skriveren.

**"Kunne ikke lagre <fil>"**
Boksen viser hvorfor. Markeringene dine er fortsatt i fanen. Prøv igjen; hvis det gjentar seg, eksporter CSV-filen slik at kommentarene ikke går tapt, og meld fra om meldingen.

**Jeg valgte Lagre, men bare én fil kom**
Nettleseren blokkerte de ekstra nedlastingene. Se etter et varsel i adressefeltet, tillat dette nettstedet å laste ned flere filer, og lagre på nytt.

**Jeg finner ikke den lagrede filen**
Den havnet i nettleserens nedlastingsmappe. Åpne nettleserens nedlastingsliste (i Chrome og Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; i Firefox og Safari, nedlastingsknappen i verktøylinjen) for å se hvor. Se [Nettlesere og datamaskiner](common:browsers).

**Noe tekst viser «?» i andre PDF-visningsprogrammer**
Tegn utenfor det vesteuropeiske settet skrives ut som «?» i kopien. Lagringsmeldingen teller dem. Se [Lagre den markerte PDF-filen](topic:save-the-marked-up-pdf).

**Stempelet viser morgendagens (eller gårsdagens) dato**
Stempeldatoer er i UTC. Se [Stempler og notater](topic:stamps-and-notes).

## Arbeid frakoblet

**Knappen for frakoblet bruk sier «Kunne ikke lagre»**
Noen av appens filer ble ikke lastet ned. Sjekk tilkoblingen og klikk på knappen igjen; den teller «Lagrer N av M» til «Klar for frakoblet bruk».

**Knappen for frakoblet bruk sier «Frakoblet bruk er ikke tilgjengelig»**
Dette nettleservinduet kan ikke ta vare på en frakoblet kopi: et privat vindu, eller en datamaskin der policyen blokkerer det. Åpne MarkupCraft i et vanlig vindu og prøv igjen.

**Frakoblet er appen en eldre versjon**
Den frakoblede kopien er versjonen du lagret. Når du er tilkoblet, klikk på «Klar for frakoblet bruk» og velg «Lagre på nytt (hent nyeste versjon)». For å frigjøre plassen, velg «Fjern den frakoblede kopien». Se [Arbeid frakoblet](common:offline).

**Hjelpen åpnes ikke**
Trykk {{key:F1}} (på en Mac, med **fn**), eller velg {{ui:Hjelp}} i linjen øverst. Den fungerer også frakoblet.

## Tapte ting

**Markeringene mine er borte etter at fanen er lukket eller lastet på nytt**
Åpne MarkupCraft igjen i samme nettleser: den tilbyr det ulagrede arbeidet tilbake med «Gjenopprett arbeidet ditt?». Velg {{ui:Gjenopprett}} og lagre PDF-filen. Kopier beholdes i inntil 30 dager; et privat vindu, eller tømming av nettstedets data, etterlater ingen. Se [Gjenopprett arbeidet ditt](common:recover).

**Navnet mitt, verktøyinnstillinger eller verktøykiste er borte**
De lagres bare i denne nettleseren og er blitt tømt (nettstedets data tømt, et privat vindu, en annen nettleser eller datamaskin, eller Safaris opprydding av nettsteder som ikke er besøkt på en stund). Angi navnet på nytt og importer den eksporterte kisten. Se [Hva som lagres i denne nettleseren](topic:browser-storage).

**"Verktøykisten kunne ikke lagres i denne nettleseren (lagring er av eller full). Eksporter den for å beholde den."**
Nettleseren nekter å lagre data for dette nettstedet (privat modus, lagring blokkert av en innstilling eller policy, eller full). Eksporter kisten etter at du har endret den, og importer den neste gang.

## Visning og hastighet

**Arket ser uskarpt ut en kort stund**
MarkupCraft viser en rask, grov gjengivelse mens du zoomer eller panorerer, og tegner den skarpt igjen et øyeblikk etter at du slutter.

**Alt er tregt med et stort sett**
Lukk andre tunge faner, åpne færre filer samtidig, og unngå å zoome til maksimum på svært store ark. Se [Arbeid med flere filer samtidig](topic:several-files#big-sets).

**Arket er mørkt med lyse linjer**
Du er i temaet {{ui:Modell}}. Velg {{ui:Papir}} i linjen øverst for mørke linjer på hvitt. Markeringene dine og den lagrede PDF-filen påvirkes ikke.
