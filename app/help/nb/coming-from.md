---
title: Kommer fra annen markeringsprogramvare
summary: Hvordan vanene i et skrivebordsprogram for PDF-markering tilsvarer MarkupCraft, og forskjellene som lurer folk.
keywords: bytte, bytte, migrere, kjent, skrivebords-PDF-markering, verktøykasse, markeringsliste, overlegg, økter, profil, snarveier, forskjeller
from: c8f323e1
---

Hvis du gjennomgår tegninger i Bluebeam Revu (eller kommenterer PDF-er i et annet skrivebords-PDF-program), vil det meste av MarkupCraft føles kjent: skyer, henvisninger, en verktøykasse, en markeringsliste, statuser med svar, kalibrerte målinger og arkoverlegg. Måten filer håndteres på er den store forskjellen, så les neste avsnitt selv om du hopper over resten.

## De fem forskjellene som betyr noe

1. **Lagre lager en ny fil.** MarkupCraft kjører i nettleseren og kan ikke skrive over PDF-en på disken din. {{ui:Lagre}} laster ned «<name> (marked up).pdf», og originalen forblir uendret. Neste gang åpner du kopien «(marked up)», og rydder i gamle kopier selv.
2. **PDF-en lagres når du lagrer.** Inntil da beholder en gjenopprettingskopi i denne nettleseren markeringene dine gjennom et krasj eller en lukket fane, og MarkupCraft tilbyr den tilbake neste gang. Det er et sikkerhetsnett: lagre PDF-en for å beholde gjennomgangen.
3. **Profilen din ligger i nettleseren.** Forfatternavnet ditt, verktøyinnstillinger og verktøykasse lagres i denne nettleseren på denne datamaskinen. En annen nettleser eller datamaskin starter på nytt, og sletting av nettstedsdata sletter dem. Eksporter verktøykassen som sikkerhetskopi. Se [Hva som lagres i denne nettleseren](topic:browser-storage).
4. **Ingen delte økter ennå.** Det finnes ingen direkte, delt gjennomgangsøkt og ingen skyprosjekt. Gjennomgangen følger med i PDF-en: lagre, send kopien, neste person svarer og lagrer.
5. **Målestokk er per ark, og bare per ark.** Det finnes ingen visningsområder inne i et ark og ingen «bruk denne målestokken på alle sider». Kalibrer hvert ark du måler på.

## Vane for vane

| Du er vant til | I MarkupCraft |
|---|---|
| Miniatyrbildepanel, sidenavn | {{ui:Ark}} til venstre. Navnene kommer fra sidenavnene eller leses fra tegningshodet. Rett dem med {{ui:Gi arket nytt navn}}. |
| Åpne flere PDF-er som et sett | Åpne dem alle samtidig; de blir én liste. Ingen settfil lagres: åpne de samme PDF-ene neste gang. |
| Verktøykasse med verktøysett | Fanen {{ui:Verktøy}}: én kasse per nettleser, lagrede verktøy med stil og emne. Del med {{ui:Eksporter}} og {{ui:Importer}} som en JSON-fil. Verktøysettfiler fra andre programmer kan ikke importeres. |
| Egenskapspanel | Fanen {{ui:Egenskaper}}: status, emne, kommentar, stil, svar og avvikspost samlet på ett sted. |
| Markeringsliste med kolonner | Fanen {{ui:Markeringer}} med filtre for ark, forfatter, status og type. Eksporter CSV eller BCF. Ingen egendefinerte kolonner, og ingen PDF- eller arbeidsbokoppsummering ennå. |
| Status og gjennomgangstilstand | {{ui:Status}}: Åpen, Godkjent, Avvist, Fullført. Ingen egendefinerte statussett. Lagres som standard gjennomgangstilstander. |
| Svar på en markering | Tråden «Svar» i {{ui:Egenskaper}}, med statusendringer logget i den. Et sendt svar kan ikke redigeres. |
| Kalibrer, deretter lengde, areal, tell | {{ui:Kalibrer}}, {{ui:Lengde}} ({{key:M}}), {{ui:Areal}} ({{key:Q}}, gir areal og omkrets), {{ui:Tell}} ({{key:U}}). Ingen vinkel, radius, volum, polylengde eller utsparinger ennå. |
| Overlegg for sider | Fanen {{ui:Sammenlign}}: rødt for gammelt, blått for nytt, rett inn etter to punkter. Ingen automatisk skying av «sammenlign dokumenter». |
| Stempler | {{ui:Stempel}} med seks innebygde stempler og egendefinert tekst, signert med navnet ditt og datoen. Ingen bilde- eller signaturstempler ennå. |
| Avvik- eller sakssporing | Fanen {{ui:Avviksliste}}: nummererte poster med ansvarlig, forfallsdato og status; CSV-eksport. |
| Direkte samarbeidsøkt | Ikke tilgjengelig ennå. Send den lagrede PDF-en videre. |
| Flat ut | Ikke bygget ennå. Markeringene forblir kommentarer som andre visningsprogrammer kan vise og skrive ut. |
| Lag for markeringer | Ikke bygget ennå. Bruk emner, forfattere og listefiltrene til å sortere kommentarer. |
| Hyperkoblinger mellom ark | Ikke bygget ennå. |
| Mellomrom for å panorere, hjul for å zoome | Det samme: hold {{key:Space}} og dra. Hjulet zoomer ved pekeren, og hjulet ruller aldri siden. |

## Taster som er annerledes

Mange enbokstav-taster er det du kanskje forventer, men sjekk disse før fingrene gjør det for deg:

- {{key:K}} er {{ui:Henvisning}}, og {{key:Q}} er {{ui:Areal}}. Hvis du er vant til Q for henvisninger, starter den et areal her.
- {{key:C}} er boksen {{ui:Sky}}; {{key:Shift+C}} er {{ui:Fri sky}}.
- {{key:M}} er {{ui:Lengde}}, {{key:U}} er {{ui:Tell}}, {{key:Y}} er {{ui:Polylinje}}, {{key:G}} er {{ui:Mangekant}}, {{key:I}} er {{ui:Utheving}}.
- {{key:Mod+D}} dupliserer utvalget (i stedet for nettleserens bokmerke).
- {{key:Mod+Plus}} og {{key:Mod+Minus}} zoomer arket, ikke nettleserens side.
- Alle taster kan endres: se nedenfor.

:::tip
Hvis fingrene dine kjenner Bluebeam Revu, velg menystilen {{ui:PDF-gjennomgang}} i {{ui:Innstillinger}} › {{ui:MarkupCraft}} › {{ui:Menyer, taster og mus}}: en menylinje (Fil, Rediger, Vis, Dokument, Markering, Mål, Vindu) over en rad med gjennomgangsverktøy, {{key:Q}} for en henvisning, {{key:H}} for utheving, {{key:N}} for en mangekant, og målingene på {{key:Alt+Shift}} med en bokstav. Alle taster kan også endres der. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).
:::

Hele listen står i [Tastatur og mus](topic:keyboard).

## Ting som fungerer annerledes enn du kanskje forventer

- **Verktøy forblir på.** Etter en sky tegner du fortsatt skyer. {{key:Esc}} én gang fjerner utvalget, to ganger går tilbake til {{ui:Velg}}.
- **Tekst og henvisninger trenger tekst.** Avslutter du uten å skrive noe, legges ingen markering til. Notater beholdes tomme.
- **Målinger trenger en målestokk først.** {{ui:Lengde}} og {{ui:Areal}} bytter til {{ui:Kalibrer}} på et ukalibrert ark, og kommer tilbake etterpå.
- **Kommentarer fra andre programmer.** Rektangler, ellipser, linjer, polylinjer, mangekanter, blekk, tekstbokser og klistrelapper laget andre steder blir redigerbare MarkupCraft-markeringer, og skrives om på MarkupCraft sin måte når du lagrer (utseendet kan endre seg litt). Tekstutheving, andre programmers stempler og andre spesielle typer forblir skrivebeskyttet: du kan svare på dem, men ikke endre dem.
- **Tegn utenfor vesteuropeiske bokstaver** skrives ut som «?» i den lagrede PDF-en. Se [Lagre den markerte PDF-en](topic:save-the-marked-up-pdf).
- **Stempeldatoer** bruker UTC, så et stempel laget sent på kvelden i Amerika kan vise morgendagens dato.
- **Målinger følger med** som standard måle-kommentarer, og hvert kalibrert ark beholder målestokken sin. Da kan et program som leser PDF-målinger som regel vise dem. Eksakt oppførsel avhenger av programmet.

## Bruke begge

Du kan gå frem og tilbake. Kommentarer laget andre steder åpnes i MarkupCraft, og den «(marked up)» PDF-en åpnes i andre PDF-programmer med hver markering, hvert svar og hver status synlig. Det bare MarkupCraft leser tilbake (ansvarlig og forfallsdato for avviket, og status for posten), lagres i filen for MarkupCraft.
