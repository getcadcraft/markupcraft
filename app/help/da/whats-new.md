---
title: Nyt i 0.8 og 0.8.1
summary: Markeringer, der bliver til opgaver og lukker sig selv, en almindelig liste over ændringer mellem revisioner, talebeskeder og beslutninger på planen, rettelsesfiler til tegneren samt de fælles ændringer i 0.8: inputenheder, værktøjslinjens rækker, Problemer og flere sprog.
keywords: nyt, hvad er nyt, udgivelsesnoter, ændringshistorik, ændringer, 0.8, 0.8.1, version, nye funktioner, opgave, opgaver, tildelt, forfaldsdag, overskredet, kontrollér nu, hvad ændrede sig, revisioner, sammenlign, talebesked, beslutning, rettelse, svarfil, tegner, assistent, mcp, problemer, sprog, inputenheder, trackpad, værktøjslinjens rækker, egenskabsgitter, opdatering
from: 40368796
---

Dette er ændringerne i MarkupCraft 0.8 og 0.8.1 sammenlignet med 0.7. Det store nye er, at en markering kan være en opgave, som en person eller din egen assistent udfører, og som lukker sig selv, når tegningen virkelig ændrer sig.

## Nyt

### Markeringer, der handler

- **Gør en markering til en opgave.** Vælg en eller flere markeringer, åbn fanen {{ui:Opgaver}} og vælg {{ui:Gør det valgte til en opgave}}. En opgave har en titel, en person eller din tilsluttede assistent til at udføre den, en valgfri forfaldsdag og en status, og den beholder sin plads på arket og sin tråd. Se [Gør en markering til en opgave](topic:markups-that-act).
- **Opgaver, der lukker sig selv.** En opgave kan holde øje med tegningen inden for sin markering. Åbn en nyere revision af arket og vælg {{ui:Kontrollér nu}}: Hvis linjerne i området er ændret mere end en hårsbredde, markeres opgaven som Færdig, markeringen bliver Afsluttet, og en note i tråden siger, hvad der ændrede sig. En ny datostempel eller linjer, der er flyttet mindre end 1.5 point, tæller ikke. En opgave kan i stedet holde øje med et modelelement: din assistent melder elementet med `tasks_check`, og en senere melding, der er forskellig, eller et slettet element, lukker opgaven. Ét trin i fortryd åbner den igen.
- **Find arbejdet.** Filtrér listen over {{ui:Opgaver}} efter status og efter hvem opgaven er til, herunder {{ui:Overskredet}}; vælg {{ui:Tildelt}} og derefter {{ui:Assistent}} for at se, hvad der venter på din assistent. En opgave, der har passeret sin forfaldsdag, vises som en advarsel i panelet Problemer. {{ui:CSV}} eksporterer listen. Opgaver gemmes i PDF-filen sammen med markeringen og følger med gennem Live som andre markeringsegenskaber.

### Hvad der ændrede sig, som en almindelig liste

- **List ændringerne.** Åbn fanen {{ui:Compare}}, vælg derefter {{ui:Sammenlign et helt sæt}}, vælg den tidligere og den senere fil, og vælg {{ui:List ændringerne}}. Listen starter med et antal og dækker derefter hvert ændret ark, med den største ændring først: hvor på arket, hvor stor (i reelle enheder samt i papirtommer på et kalibreret ark), om linjer er tilføjet eller fjernet, hvor mange markeringer der ligger der, og hvilke ord der er dukket op eller forsvundet. {{ui:Kopiér listen}} lægger den på udklipsholderen, og {{ui:CSV}} skriver én række pr. ændring. Se [List ændringer mellem revisioner](topic:what-changed-in-words).

### Talebeskeder og beslutninger

- **Talebeskeder.** På fanen {{ui:Notater}} vælg {{ui:Optag en talebesked}}, og vælg derefter {{ui:Stop optagelsen}}; optagelser stopper af sig selv efter to minutter. Noten fastgøres i midten af arket, du trækker den hen, hvor den skal være, og skriver en billedtekst i {{ui:Egenskaber}}, og {{ui:Afspil}} i listen afspiller den. Optagelsen gemmes i PDF-filen.
- **Beslutninger.** {{ui:Fastgør en beslutning}} skriver en eller to sætninger på arket. Hvis den erstatter en tidligere beslutning, vælges den i {{ui:Den erstatter}}: den gamle bliver stående, markeret Erstattet, og peger på den nye. Ét trin i fortryd fjerner den igen. Se [Fastgør talebeskeder og beslutninger på et ark](topic:voice-notes-and-decisions).

### Rettelser til revision

- **Send og svar.** På fanen {{ui:Opgaver}} åbnes {{ui:Rettelser til revision}}, skriv den revision markeringerne er i forhold til, og vælg {{ui:Eksportér rettelsesfil}}. Du får en `.redline.json`-fil med ét punkt pr. åben markering: ark, position (som brøkdele af arket, så en ny plot i en anden størrelse stadig passer), ord, forfatter, tråd og dens opgave. Den, der tegner ændringerne, svarer Accepteret, Afvist eller Færdig i en `.redline-answers.json`-fil; {{ui:Indlæs svarfil…}} giver hver markering den status og tegnerens note som ét trin i fortryd. Se [Send markeringer til tegneren som en rettelse](topic:redline-to-revision).

### AI-assistenter

- **Flere værktøjer.** En assistent, du har forbundet via CadCraft Studio, kan liste opgaver (`tasks_list`), oprette eller ændre en (`task_set`), fjerne opgaven (`task_clear`), kontrollere en mod en nyere revision eller et element (`tasks_check`) og læse den almindelige liste over ændringer mellem to åbne plansæt (`revisions_changes`). Den får kun de værktøjer, du har markeret under kontakten {{ui:Assistenter}}, og hver ændring er ét trin i fortryd. Se [Brug MarkupCraft med en AI-assistent](topic:use-with-ai-assistants).

## I alle apps

- **Sprog.** CadCraft Studio har nu 54 sprog. Ti er nye: litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Alle de ikke-engelske er maskinelle kladder, indtil en indfødt taler har læst dem.
- **Inputenheder.** {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Inputenheder}} angiver, hvad et trackpad, musens sideknapper, en pen, fingertryk, en 3D-mus, en spilcontroller eller en MIDI-controller gør, for alle apps eller kun for denne. Indtil du ændrer noget, virker alle enheder som før. Se [Brug et trackpad, 3D-mus eller controller](common:input-devices).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} har {{ui:Ombryd}} (standard), {{ui:2 rækker}} og {{ui:1 række}}, så tegningen får mere plads. Se [Arrangér panelerne](common:arrange-panels).
- **Egenskabsgitter.** Felterne for Stil på en markering bruger det fælles gitter med sammenklappelige kategorier og kolonner for etiket og værdi.
- **Panelet Problemer.** Advarsler fra appen, for eksempel en overskredet opgave, samles i ét panel for problemer.
- **Live og add-ons.** Live-sessioner beskrives i [Arbejd sammen live](common:work-together-live); listen over add-ons, der følger din konto, står i [Add-ons og din kontoliste](common:addons-basics).
- **Forbind din AI.** CadCraft Studio er samlingspunktet for din egen assistent: forbind én gang for alle otte apps. Appene indeholder ingen AI af egen.

## Rettet i 0.8.1

- **Studio kan skifte sprog, mens det kører.** Før blev desktopappen og de pakkede udgaver på engelsk. Det er endnu ikke testet på alle platforme: giv os besked, hvis sproget ikke skifter.
- Installationer af Studio 0.8 får tilbudt 0.8.1 via {{ui:Indstillinger}} › {{ui:Opdateringer}}.

## Ikke i denne version endnu

- **Ikke kodesigneret.** Windows-installationsprogrammerne og .dmg-filen til macOS har endnu ingen signatur. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Flere oplysninger}}, og derefter {{ui:Kør alligevel}}. På en Mac: højreklik på CadCraft Studio og vælg {{ui:Åbn}}. Butiksudgivelser er sat på pause.
- **Forbindelse til din AI er ufærdig flere steder.** Forbindelse med ét klik i Studio, den hostede connector til browserassistenter og din egen API-nøgle i Studio er ikke lovet i denne udgivelse. Opgaveløkken er testet, men endnu ikke med en rigtig assistent.
- **Opgavekontrol kræver samme sidestørrelse.** Et ark, der er plottet igen i en anden størrelse, matcher ikke, så dets opgaver lukkes ikke. Ark parres efter arknummer, ellers efter sideposition.
- **Talebeskeder er kun optagelser.** Der findes ingen transskription, og en assistent ser en notes længde, forfatter og billedtekst, ikke lyden. Optagelse er testet med en falsk mikrofon i en browser uden grafisk brugerflade; en rigtig mikrofon på telefon, tablet eller bærbar er endnu ikke testet.
- **Beregningsark og begrundelser i en PDF** gemmes i en privat post i filen. En ældre MarkupCraft ignorerer posten og fjerner den, næste gang den gemmer filen, så åbn og gem sådan en fil med 0.8 eller nyere.
- **Tegnerens side af rettelser.** At CadCraft læser rettelsesfilen og svarer på den, er ikke lavet endnu.
- **Andre sprog.** Tamils appbjælke løber over med 528 px.

Alt andet står i [Hvad er ikke lavet endnu](topic:not-built-yet). For udgivelsen før denne, se [Nyt i 0.7](topic:whats-new-0-7).
