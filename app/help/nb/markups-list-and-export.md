---
title: Markeringslisten, filtre og eksport
summary: Se alle markeringene i settet, filtrer etter ark, forfatter, status og type, hopp til én, og eksporter listen som CSV eller BCF.
keywords: markeringsliste, liste, sammendrag, xlsx, regneark, arbeidsbok, pdf-rapport, importer bcf, filter, sorter, rapport, eksporter, csv, bcf, bcfzip, saker, kommentarliste, hopp
from: 6c70261e
---

## Åpne listen

Velg fanen {{ui:Markeringer}} til høyre. Hver markering i alle åpne filer listes, i arkrekkefølge og deretter i den rekkefølgen de ble laget. Hver rad viser:

- et ikon i markeringens farge, nummeret hvis den har et («#4»), og emnet,
- teksten, stempelteksten eller målt verdi, og kommentaren,
- arket, forfatteren og datoen,
- statusen (eller «Skrivebeskyttet» for kommentarer som fulgte med filen), og et antall svar når den har svar.

Linjen over listen teller dem: «38 markeringer», eller «12 av 38 markeringer» når det er filtrert.

## Hopp til en markering

Klikk på en rad. MarkupCraft viser det arket, velger markeringen og zoomer til den når den er utenfor skjermen eller for liten til å se. {{ui:Egenskaper}} viser detaljene og tråden når du bytter tilbake til den fanen.

## Filtrer

Fire menyer over listen. De kombineres.

| Meny | Valg |
|---|---|
| {{ui:Ark}} | Alle ark, Dette arket (følger deg når du bytter ark), eller ethvert ark som har markeringer |
| {{ui:Forfatter}} | Alle, eller hver forfatter i settet |
| {{ui:Status}} | Alle statuser, Åpen, Akseptert, Avvist, Fullført |
| {{ui:Type}} | Alle typer, eller hver markeringstype i settet |

Eksempler:

- Hva som fortsatt er åpent på dette arket: {{ui:Ark}} «Dette arket», {{ui:Status}} «Åpen».
- Én konsulents kommentarer: {{ui:Forfatter}} deres navn.
- Alle målinger: {{ui:Type}} «Lengde» eller «Areal».

Listen viser opptil 2000 rader; begrens den med et filter i svært store sett.

## Eksporter til CSV

Velg {{ui:CSV}} øverst i fanen. Du får «<navn> markeringer.csv» med **markeringene slik de er filtrert nå**, én per rad, med disse kolonnene:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- «Text» inneholder ordene i tekstbokser og henvisninger, et stempels tekst, eller navnet på en tellegruppe.
- «Measurement» inneholder lengder, «area, perimeter» for arealer, og «group: n» for tellinger.
- Datoene er fulle tidsstempler i UTC.

For å eksportere alt, sett alle filtre tilbake til første valg først.

## En tegnforklaring på arket

{{ui:Tegnforklaring}} i fanen {{ui:Markeringer}} legger en tegnforklaring øverst til høyre i det du ser: en boks som lister hver type markering på arket (etter emne og farge, som «Sky», «Spørsmål» eller «Stikkontakter») med hvor mange det er. En tellegruppe teller sine merker. Tegnforklaringen fortsetter å telle mens du tegner, flytter eller sletter markeringer, og den skrives ut og lagres med tallene for det øyeblikket.

Flytt og endre størrelse på den som en hvilken som helst markering. I {{ui:Egenskaper}} endrer du {{ui:Tittel}}, eller setter {{ui:Antall}} til {{ui:Hele settet}} for å telle på alle ark. Rom, andre tegnforklaringer og kommentarer fra andre programmer telles ikke.

## Egne kolonner og sortering

{{ui:Kolonner}} i fanen {{ui:Markeringer}} legger til egne kolonner på hver markering: en **tekst**, et **valg** (for eksempel Fag: Mekanisk, Elektrisk, Rør), et **tall** (for eksempel Kostnad) eller en **dato**. Gi hver et navn, velg typen, skriv inn valgene for en valgkolonne, og velg {{ui:Lagre kolonner}}.

- Fyll dem ut under {{ui:Egenskaper}}: hver kolonne har et felt der. En tallkolonne tar bare tall, en datokolonne tar en dato.
- Listen viser verdiene under hver markering. Filteret {{ui:Kolonne}} velger én verdi (eller markeringene der den er tom), og {{ui:Sorter}} ordner listen etter en kolonne, etter forfatter, status, type eller dato, i stedet for etter ark.
- CSV- og XLSX-eksporter har kolonnene etter de vanlige. Kolonnene lagres med PDF-en og kommer tilbake når du åpner den igjen.

## Eksporter et sammendrag: arbeidsbok eller PDF

- {{ui:XLSX}} laster ned «<navn> markup summary.xlsx» med tre ark: **Markups** (én rad per listet markering, samme kolonner som CSV-en), **By sheet** (hvor mange markeringer hvert ark har, åpne og lukkede, og hvor mange av hver type, med summer) og **Punch list** (når det finnes avviksvarer).
- {{ui:PDF}} laster ned «<navn> markup summary.pdf»: en rapport å skrive ut eller sende, med settets navn, datoen og en tabell over de listede markeringene (nummer, ark, type, emne, tekst eller kommentar, målt verdi, forfatter, status og siste svar). Lang tekst brytes; tabelloverskriften gjentas på hver side.

Begge bruker listen slik den er filtrert, så filtrer først for å rapportere ett ark, én forfatter eller bare de åpne postene.

## Eksporter til BCF

Velg {{ui:BCF}}. MarkupCraft lager et bilde av hver listet markering på arket («Making snapshots for BCF (3 of 12)…»), og laster deretter ned «<navn> markups.bcfzip». Hver markering blir ett BCF-emne med statusen, forfatteren, datoene, svarene som kommentarer, tildelt og frist fra avvikselementet, og øyeblikksbildet.

Bruk det til å få gjennomgangskommentarer fra tegninger inn i BIM-koordineringsverktøy som leser BCF. Hva som følger med, og hva som ikke gjør det, står i [BCF-grunnleggende](topic:bcf-basics).

## Importer BCF

{{ui:Importer BCF}} leser en .bcfzip- (eller .bcf-) fil fra et BIM-verktøy:

- Saker som kom fra MarkupCraft sin egen BCF-eksport, finner sine markeringer igjen: nye svar legges til i tråden, og en ny status settes (Closed teller som Fullført). Svar som allerede finnes, legges ikke til to ganger.
- Andre saker blir notater, med tittel, beskrivelse, forfatter og kommentarer. Et notat havner på arket hvis nummer eller navn saken har i etikettene, ellers på det åpne arket. Et BIM-kamera har ingen plass på papir, så slike notater stables øverst til venstre på arket, for at du skal flytte dem.

Hele importen er ett steg: {{key:Mod+Z}} angrer den. Se [BCF-grunnleggende](topic:bcf-basics).

## Det listen ikke gjør ennå

- Gruppering av listen (sorter, og filtrer deretter i stedet).
- Redigering av verdier i listen (rediger i {{ui:Egenskaper}}; avviksfelt kan redigeres i fanen {{ui:Avviksliste}}).
