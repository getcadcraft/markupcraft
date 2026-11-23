---
title: Nytt i 0.9 (tidligere)
summary: Notater og et limbord som aldri skrives ut, krypterte private notater og en ren kopi til kunden, batchlenker for et helt tegningssett, et Bue-verktøy med ti metoder, å følge en annen gjennomgåer i Live, og en rettelse for slettede markeringer som forblir i den lagrede PDF-en.
keywords: nytt i 0.9, tidligere utgivelse, nytt i, hva er nytt, 0.9, versjonsnotater, endringslogg, notater, limbord, private notater, passfrase, kryptert, skjul notater, vis notater, ren kopi, øyeblikksbilde, batchlenker, arkhenvisninger, lenk ark, titleblokk, arknummer, tillegg, nummerere på nytt, pdf-lenke, bue, buemetoder, trepunktsbue, radius, følg, følg meg, live, klassevisning, personliste, slettet markering, verktøytips, fanetitler, nytt i, versjonsnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, oppgave, oppgaver, ansvarlig, frist, forfalt, kontroller nå, hva som endret seg, revisjoner, sammenlign, talenotat, beslutning, rødlinje, svarfil, tegner, assistent, mcp, problemer, språk, inndataenheter, styreplate, verktøylinjerader, egenskapsrutenett, oppdatering
from: aa3dfeb8
---

Dette er hva som endret seg i MarkupCraft 0.9, sammenlignet med 0.8.1. Hovedideen er at arbeidsnotatene dine holdes borte fra siden kunden får, og at et helt tegningssett kan lenkes i ett trekk.

## Nytt

### Notater, limbordet og private notater

- **Limbordet.** Området rundt hvert ark er et skrivebord: alt som tegnes, skrives eller limes inn ved siden av arket, er et notat og skrives aldri ut. Velg {{ui:Vis limbordet}} for å zoome ut og få mer plass, eller {{ui:Øyeblikksbilde til limbordet}}, dra en boks, og velg deretter {{ui:Til limbordet}} for å legge et bilde av en del av tegningen ved siden av arket. Et øyeblikksbilde er et bilde og endrer seg ikke når arket endrer seg. Se [Notater, limbordet og private notater](topic:notes-and-pasteboard).
- **Vis og skjul notater.** Enhver markering kan være et notat: sett {{ui:Nye markeringer er}} i fanen {{ui:Notater}}, eller {{ui:Denne markeringen er}} i {{ui:Egenskaper}}. {{key:Shift+H}} eller bryteren {{ui:Notater}} under arket skjuler og viser alle notater samtidig. Notater utelates fra utskrift, flatede kopier, lister og eksporter, og andre PDF-lesere viser dem ikke. Den lagrede PDF-en beholder dem til neste gang du åpner den i MarkupCraft.
- **Private notater.** Velg {{ui:Angi en passfrase}}, og gjør deretter en markering til {{ui:Et privat notat}}. Den krypteres i filen med en passfrase på minst 10 tegn, og det finnes ingen gjenoppretting: ingen, heller ikke vi, kan åpne den uten passfrasen. {{ui:Lås}} legger private notater til side; {{ui:Hold låst opp på denne enheten}} er av som standard.
- **Lagre en ren kopi.** {{ui:Lagre en ren kopi}} fjerner alle notater, private notater og alt på limbordet. Bruk den for filen som sendes til kunden.

### Lenk et helt sett

- **Batchlenker.** Velg {{ui:Sider}} › {{ui:Batchlenker…}}, eller {{ui:Lenk arkhenvisninger…}} under {{ui:Finn tekst}} i panelet {{ui:Ark}}. Trinn 1 lister hvert arks nummer og navn slik de leses fra titleblokken; rett eventuelle feil. Trinn 2 lister de funne henvisningene, for eksempel `3/A-501` eller `DETAIL 2 ON A-501`. {{ui:Vil lenkes}} viser arket og visningen for hver, {{ui:Ikke lenket}} viser numre som ingen åpen ark har, og {{ui:Lag lenkene}} lager dem alle i ett angreTrinn. Kjør den på nytt etter et tillegg eller en omnummerering; lenker du laget for hånd, endres aldri. En lenke med en visning lagres som en PDF-lenke, slik at andre lesere også åpner detaljen. Se [Arklenker](topic:sheet-links).

### Tegning

- **Bue, ti metoder.** Verktøyet {{ui:Bue}} ({{key:O}}) har nå en boks {{ui:Buemetode}} over siden med ti måter å tegne en bue på, og vinkel, lengde, radius og retning kan klikkes eller skrives inn. Se [Tegn en bue på ti måter](topic:draw-an-arc).

### Samarbeid

- **Følg en gjennomgåer.** I en Live-økt velger du {{ui:Følg}} ved siden av en persons navn, og visningen din flytter seg med deres; panorering eller zoom selv stopper det. Verten kan velge {{ui:Be alle om å følge meg}}. Personlisten viser hver persons farge, navn, arket de er på, og når den siste endringen ble gjort. Se [Følg en annen gjennomgåer i en Live-økt](topic:follow-in-live).

## I alle programmer

- Verktøytips er Bootstrap-verktøytips, starttipset kan lukkes, fanelinjer ruller når de flyter over, og tittelen på nettleserfanene lyder `<dokument> — MarkupCraft | CadCraft`.
- Et panel med flere seksjoner åpner én og lukker de andre (en lås ved siden av pilen holder én åpen); en bryter i Innstillinger slår dette av.
- Hvert program starter fra en standardsamling av Bibliotek-objekter.
- Vekt- og temperaturenheter er tilgjengelige i innstillingene for Enheter.

## Rettet

- **Slettede markeringer er ikke lenger lesbare i den lagrede PDF-en.** Lagring pleide å fjerne en slettet eller omskrevet merknad fra siden, men la objektet, med teksten, bli igjen i filen. Nå sletter lagring disse objektene. Filer lagret av tidligere versjoner har dem fortsatt til du lagrer dem på nytt.

## Ærlige begrensninger

- Batchlenker er prøvd på våre egne testsett. Ekte sett tegner sirkler på mange måter, så på et kundesett kan noen visninger bli oversett. Skannede ark trenger {{ui:Les tekst (OCR)…}} først.
- Notater, private notater og limbordet er testet i en hodeløs nettleser og på våre egne filer, ikke med et stort ekte vektorsett og ikke i en ekte Live-økt med to personer. Endring av en passfrase er ikke bygget. Versjoner eldre enn 0.9 viser ikke notater.
- Klassevisningen er personlisten; den er ikke prøvd med en ekte lærer og ekte elever.
- Andre språk enn engelsk er maskinutkast til en morsmålstaler har lest dem.
- Windows-installasjonsprogrammer er ikke kodesignert (Mer info, deretter Kjør likevel); macOS-diskbildet er ikke notarisert (høyreklikk, deretter Åpne).

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i MarkupCraft 0.8 og 0.8.1, sammenlignet med 0.7. Det store nye er at en markering kan være en oppgave som noen, eller din egen assistent, utfører, og som lukker seg selv når tegningen virkelig endrer seg.

### Nytt

**Markeringer som handler**

- **Gjør en markering til en oppgave.** Velg én eller flere markeringer, åpne fanen {{ui:Oppgaver}} og velg {{ui:Gjør valgte til en oppgave}}. En oppgave har en tittel, en person eller din tilkoblede assistent som utfører den, en valgfri frist og en tilstand, og den beholder sin plass på arket og sin tråd. Se [Gjør en markering til en oppgave](topic:markups-that-act).
- **Oppgaver som lukker seg selv.** En oppgave kan følge med på tegningen inne i markeringen. Åpne en nyere revisjon av arket og velg {{ui:Kontroller nå}}: hvis linjene i området har endret seg mer enn et hår, merkes oppgaven som Ferdig, markeringen blir Fullført, og et notat i tråden sier hva som endret seg. En ny datostempel, eller linjer som har flyttet seg mindre enn 1,5 punkter, teller ikke. En oppgave kan i stedet følge med på et modellelement: assistenten din rapporterer elementet med `tasks_check`, og en senere rapport som er forskjellig, eller et slettet element, lukker oppgaven. Ett angreTrinn åpner den igjen.
- **Finn arbeidet.** Filtrer listen {{ui:Oppgaver}} etter tilstand og etter hvem den er for, inkludert {{ui:Forfalt}}; velg {{ui:Tildelt}}, deretter {{ui:Assistent}} for å se hva som venter på assistenten din. En oppgave som har passert fristen vises som en advarsel i panelet Problemer. {{ui:CSV}} eksporterer listen. Oppgaver lagres i PDF-en sammen med markeringen og følger med gjennom Live, på samme måte som andre markeringsegenskaper.

**Hva som endret seg, som en vanlig liste**

- **List endringene.** Åpne fanen {{ui:Sammenlign}}, deretter {{ui:Sammenlign hele settet}}, velg den tidligere og den senere filen, og velg {{ui:List endringene}}. Listen starter med et antall, og dekker deretter hvert endret ark, med den største endringen først: hvor på arket, hvor stor (i reelle enheter, og også i papirtommer på et kalibrert ark), om linjer ble lagt til eller fjernet, hvor mange markeringer som ligger der, og hvilke ord som dukket opp eller forsvant. {{ui:Kopier listen}} legger den på utklippstavlen, og {{ui:CSV}} skriver én rad per endring. Se [List hva som endret seg mellom revisjoner](topic:what-changed-in-words).

**Talenotater og beslutninger**

- **Talenotater.** I fanen {{ui:Notater}} velger du {{ui:Ta opp et talenotat}}, deretter {{ui:Stopp opptaket}}; opptak stopper av seg selv etter to minutter. Notatet festes i midten av arket, du drar det dit det hører hjemme, og skriver en bildetekst i {{ui:Egenskaper}}, og {{ui:Spill av}} i listen spiller det av. Opptaket lagres inne i PDF-en.
- **Beslutninger.** {{ui:Fest en beslutning}} skriver en eller to setninger på arket. Hvis den erstatter en tidligere beslutning, velger du den under {{ui:Den erstatter}}: den gamle blir liggende, merket Erstattet, og peker til den nye. Ett angreTrinn tar den tilbake. Se [Fest talenotater og beslutninger på et ark](topic:voice-notes-and-decisions).

**Rødlinjer til revisjon**

- **Send og svar.** I fanen {{ui:Oppgaver}} åpner du {{ui:Rødlinjer til revisjon}}, skriver inn revisjonen markeringene gjelder for, og velger {{ui:Eksporter rødlinjefil}}. Du får en `.redline.json`-fil med ett element per åpen markering: ark, plassering (som brøkdeler av arket, slik at en ny utskrift i en annen størrelse fortsatt stemmer), ord, forfatter, tråd og oppgave. Den som tegner endringene, svarer Akseptert, Avvist eller Ferdig i en `.redline-answers.json`-fil; {{ui:Last inn svarfil…}} gir hver markering den statusen og tegnerens merknad, som ett angreTrinn. Se [Send markeringer til tegneren som en rødlinje](topic:redline-to-revision).

**AI-assistenter**

- **Flere verktøy.** En assistent du koblet til via CadCraft Studio kan liste oppgaver (`tasks_list`), lage eller endre en (`task_set`), fjerne oppgaven (`task_clear`), kontrollere en mot en nyere revisjon eller et element (`tasks_check`) og lese den vanlige listen over endringer mellom to åpne plansett (`revisions_changes`). Den får bare de verktøyene du har krysset av under bryteren for Assistenter, og hver endring er ett angreTrinn. Se [Bruk MarkupCraft med en AI-assistent](topic:use-with-ai-assistants).

### I alle programmer

- **Språk.** CadCraft Studio har nå 54 språk. Ti er nye: litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Alle de ikke-engelske er maskinutkast til en morsmålstaler har lest dem.
- **Inndataenheter.** {{ui:Innstillinger}} › {{ui:Globalt}} › {{ui:Inndataenheter}} bestemmer hva en styreplate, sideknappene på musen, en penn, fingertrykk, en 3D-mus, en spillkontroller eller en MIDI-kontroller gjør, for alle programmer eller bare for dette. Helt til du endrer noe, virker alle enheter som før. Se [Bruk styreplate, 3D-mus eller kontroller](common:input-devices).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} har {{ui:Bryt}} (standard), {{ui:2 rader}} og {{ui:1 rad}}, slik at tegningen får mer plass. Se [Ordne panelene](common:arrange-panels).
- **Egenskapsrutenett.** Stilfeltene for en markering bruker det felles rutenettet, med sammenleggbare kategorier og kolonner for etikett og verdi.
- **Panelet Problemer.** Advarsler fra programmet, for eksempel en forfalt oppgave, samles i ett panel for problemer.
- **Live og tillegg.** Live-økter er beskrevet i [Samarbeid live](common:work-together-live); tilleggslisten som følger kontoen din, står i [Tillegg og kontolisten din](common:addons-basics).
- **Koble til AI-en din.** CadCraft Studio er navet for din egen assistent: koble til én gang for alle åtte programmene. Programmene har ingen egen AI.

### Rettet i 0.8.1

- **Studio kan bytte språk mens det kjører.** Tidligere ble skrivebordsappen og de pakkede utgavene værende på engelsk. Dette er ikke testet på alle plattformer ennå: si fra hvis språket ikke endres.
- Studio 0.8-installasjoner tilbys 0.8.1 via {{ui:Innstillinger}} › {{ui:Oppdateringer}}.

### Ikke i denne versjonen ennå

- **Ikke kodesignert.** Windows-installasjonsprogrammene og macOS-.dmg-filen har ingen signatur ennå. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer info}}, deretter {{ui:Kjør likevel}}. På en Mac høyreklikker du CadCraft Studio og velger {{ui:Åpne}}. Butikkversjoner er satt på vent.
- **Koble til AI-en din er ufullstendig noen steder.** Tilkobling med ett klikk i Studio, den vertsbaserte koblingen for nettleserassistenter og din egen API-nøkkel i Studio er ikke lovet for denne utgivelsen. Oppgaveløkken er testet, men ikke ennå med en ekte assistent.
- **Oppgavekontroller krever samme sidestørrelse.** Et ark som skrives ut på nytt i en annen størrelse, vil ikke stemme, så oppgavene lukkes ikke. Ark pares etter arknummer, ellers etter sideposisjon.
- **Talenotater er bare opptak.** Det finnes ingen transkripsjon, og en assistent ser et notats lengde, forfatter og bildetekst, ikke lyden. Opptak er prøvd med en falsk mikrofon i en hodeløs nettleser; en ekte mikrofon på telefon, nettbrett eller bærbar PC gjenstår å kontrollere.
- **Beregningsark og begrunnelser i en PDF** lagres i et privat felt i filen. En eldre MarkupCraft ignorerer det feltet og fjerner det neste gang den lagrer filen, så åpne og lagre slike filer med 0.8 eller nyere.
- **Tegnerens side av rødlinjer.** At CadCraft leser rødlinjefilen og svarer på den, er ikke bygget ennå.
- **Andre språk.** Tamilsk appfelt flyter over med 528 px.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet). For utgivelsen før denne, se [Nytt i 0.7](topic:whats-new-0-7).
