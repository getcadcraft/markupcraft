---
title: Hva er nytt i 0.8 og 0.8.1
summary: Markeringer som blir oppgaver og lukkes selv, en enkel liste over hva som endret seg mellom revisjoner, talenotater og beslutninger på planen, rødlinjefiler for tegneren, og de felles endringene i 0.8: inndataenheter, verktøylinjerader, Problemer, flere språk.
keywords: hva er nytt, nytt, utgivelsesnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, oppgave, oppgaver, tildelt, forfallsdag, forfalt, kontroller nå, hva endret seg, revisjoner, sammenlign, talenotat, beslutning, rødlinje, svarfil, tegner, assistent, mcp, problemer, språk, inndataenheter, styreflate, verktøylinjerader, egenskapsrutenett, oppdater
from: 40368796
---

Dette er hva som endret seg i MarkupCraft 0.8 og 0.8.1, sammenlignet med 0.7. Det store nye er at en markering kan være en oppgave som noen, eller din egen assistent, utfører, og som lukkes av seg selv når tegningen faktisk endres.

## Nytt

### Markeringer som handler

- **Gjør en markering til en oppgave.** Velg en eller flere markeringer, åpne fanen {{ui:Oppgaver}} og velg {{ui:Gjør valgte til en oppgave}}. En oppgave har en tittel, en person eller den tilkoblede assistenten din som skal utføre den, en valgfri forfallsdag og en tilstand, og den beholder plassen sin på arket og samtalen sin. Se [Gjør en markering til en oppgave](topic:markups-that-act).
- **Oppgaver som lukkes selv.** En oppgave kan følge med på tegningen inne i markeringen. Åpne en nyere revisjon av arket og velg {{ui:Kontroller nå}}: hvis linjene i det området er endret mer enn et hår, markeres oppgaven som Ferdig, markeringen blir Fullført, og et notat i samtalen sier hva som er endret. En ny datostempel, eller linjer som er flyttet mindre enn 1.5 punkt, teller ikke. En oppgave kan i stedet følge med på et modellelement: assistenten din rapporterer elementet med `tasks_check`, og en senere rapport som avviker, eller et slettet element, lukker oppgaven. Ett trinn med Angre åpner den igjen.
- **Finn arbeidet.** Filtrer listen {{ui:Oppgaver}} etter tilstand og etter hvem den er for, inkludert {{ui:Forfalt}}; velg {{ui:Tildelt}}, deretter {{ui:Assistent}} for å se hva som venter på assistenten din. En oppgave etter forfallsdagen vises som en advarsel i Problemer-panelet. {{ui:CSV}} eksporterer listen. Oppgaver lagres i PDF-filen sammen med markeringen og følger med gjennom Live på samme måte som andre markeringsegenskaper.

### Hva som endret seg, som en enkel liste

- **List endringene.** Åpne fanen {{ui:Sammenlign}}, deretter {{ui:Sammenlign et helt sett}}, velg den tidligere og den senere filen og velg {{ui:List endringene}}. Listen starter med en telling og dekker deretter hvert endret ark, største endring først: hvor på arket, hvor stor (i virkelige enheter og også papirtommer på et kalibrert ark), om linjer er lagt til eller fjernet, hvor mange markeringer som ligger der, og hvilke ord som dukket opp eller forsvant. {{ui:Kopier listen}} legger den på utklippstavlen, og {{ui:CSV}} skriver én rad per endring. Se [List hva som endret seg mellom revisjonene](topic:what-changed-in-words).

### Talenotater og beslutninger

- **Talenotater.** I fanen {{ui:Notater}} velg {{ui:Ta opp et talenotat}}, deretter {{ui:Stopp opptaket}}; opptak stopper av seg selv etter to minutter. Notatet festes midt på arket. Dra det dit det hører hjemme og skriv en bildetekst i {{ui:Egenskaper}}. {{ui:Spill av}} i listen spiller det av. Opptaket lagres i PDF-filen.
- **Beslutninger.** {{ui:Fest en beslutning}} skriver en eller to setninger på arket. Hvis den erstatter en tidligere beslutning, velg den i {{ui:Den erstatter}}: den gamle forblir, merkes Erstattet og peker til den nye. Ett trinn med Angre tar den tilbake. Se [Fest talenotater og beslutninger på et ark](topic:voice-notes-and-decisions).

### Rødlinjer til revisjon

- **Send og svar.** I fanen {{ui:Oppgaver}} åpne {{ui:Rødlinjer til revisjon}}, skriv revisjonen markeringene gjelder for og velg {{ui:Eksporter rødlinjefil}}. Du får en `.redline.json`-fil med ett element per åpen markering: ark, posisjon (som brøkdeler av arket, slik at en ny utskrift i annen størrelse fortsatt passer), ord, forfatter, samtale og oppgave. Den som tegner endringene, svarer med Godkjent, Avvist eller Ferdig i en `.redline-answers.json`-fil. {{ui:Last inn svarfil…}} gir hver markering denne statusen og tegnerens merknad, som ett trinn med Angre. Se [Send markeringer til tegneren som en rødlinje](topic:redline-to-revision).

### KI-assistenter

- **Flere verktøy.** En assistent du har koblet til via CadCraft Studio kan liste oppgaver (`tasks_list`), lage eller endre én (`task_set`), fjerne oppgaven (`task_clear`), kontrollere én mot en nyere revisjon eller et element (`tasks_check`) og lese den enkle listen over endringer mellom to åpne plansett (`revisions_changes`). Den får bare verktøyene du har krysset av under bryteren Assistent, og hver endring er ett trinn med Angre. Se [Bruk MarkupCraft med en KI-assistent](topic:use-with-ai-assistants).

## I alle apper

- **Språk.** CadCraft Studio har nå 54 språk. Ti er nye: litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Alle de ikke-engelske er maskinelle utkast inntil en morsmålstalende har lest dem.
- **Inndataenheter.** {{ui:Innstillinger}} › {{ui:Globalt}} › {{ui:Inndataenheter}} angir hva en styreflate, sideknappene på musen, en penn, fingertrykk, en 3D-mus, en spillkontroller eller en MIDI-kontroller gjør, for alle apper eller bare for denne. Helt til du endrer noe, fungerer alle enhetene som før. Se [Bruk styreflate, 3D-mus eller kontroller](common:input-devices).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} har {{ui:Bryt}} (standard), {{ui:2 rader}} og {{ui:1 rad}}, slik at tegningen får mer plass. Se [Ordne panelene](common:arrange-panels).
- **Egenskapsrutenett.** Stilfeltene for en markering bruker det felles rutenettet, med sammenleggbare kategorier og kolonner for etikett og verdi.
- **Problemer-panelet.** Advarsler fra appen, for eksempel en forfalt oppgave, samles i ett Problemer-panel.
- **Live og tillegg.** Live-økter beskrives i [Samarbeid direkte](common:work-together-live). Listen over tillegg som følger kontoen din, står i [Tillegg og kontolisten din](common:addons-basics).
- **Koble til KI-en din.** CadCraft Studio er navet for din egen assistent: koble til én gang for alle åtte appene. Appene har ingen egen KI.

## Rettet i 0.8.1

- **Studio kan bytte språk mens det kjører.** Før ble skrivebordsappen og de pakkede utgavene værende på engelsk. Dette er ikke testet på alle plattformer ennå: si fra hvis språket ikke endrer seg.
- Studio 0.8-installasjoner tilbys 0.8.1 via {{ui:Innstillinger}} › {{ui:Oppdateringer}}.

## Ikke i denne versjonen ennå

- **Ikke kodesignert.** Windows-installasjonene og macOS .dmg-filen har ingen signatur ennå. På Windows, hvis SmartScreen stopper installasjonen, velg {{ui:Mer informasjon}}, deretter {{ui:Kjør likevel}}. På Mac, høyreklikk CadCraft Studio og velg {{ui:Åpne}}. Butikkversjonene er satt på vent.
- **Koble til KI-en din er ikke ferdig enkelte steder.** Tilkobling med ett klikk i Studio, den hostede koblingen for nettleserassistenter og din egen API-nøkkel i Studio er ikke lovet for denne utgivelsen. Oppgaveløkken er testet, men ikke ennå med en ekte assistent.
- **Oppgavekontroller krever samme sidestørrelse.** Et ark som er skrevet ut på nytt i en annen størrelse, vil ikke samsvare, så oppgavene lukkes ikke. Ark pares etter arknummer, ellers etter sideposisjon.
- **Talenotater er bare opptak.** Det finnes ingen transkripsjon, og en assistent ser lengden, forfatteren og bildeteksten til et notat, ikke lyden. Opptak er prøvd med en falsk mikrofon i en hodeløs nettleser; en ekte mikrofon på mobil, nettbrett eller bærbar PC gjenstår å sjekke.
- **Kalkyleark og begrunnelser i en PDF** lagres i en privat oppføring i filen. En eldre MarkupCraft ignorerer den oppføringen og fjerner den neste gang den lagrer filen, så åpne og lagre slike filer med 0.8 eller nyere.
- **Tegnerens side av rødlinjene.** At CadCraft leser rødlinjefilen og svarer på den, er ikke bygget ennå.
- **Andre språk.** Verktøylinjen i appen for tamil går 528 px utenfor.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet). For utgivelsen før denne, se [Hva er nytt i 0.7](topic:whats-new-0-7).
