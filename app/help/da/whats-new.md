---
title: Nyheder i 0.9
summary: Noter og en opslagstavle der aldrig udskrives, krypterede private noter og en ren kopi til kunden, batch-links for et helt tegningssæt, et Bue-værktøj med ti metoder, følg en anden gennemgår i Live og en rettelse for slettede markeringer, der bliver i den gemte PDF.
keywords: nyheder, hvad er nyt, 0.9, udgivelsesnoter, ændringslog, noter, opslagstavle, private noter, adgangssætning, krypteret, skjul noter, vis noter, ren kopi, øjebliksbillede, batch-links, arkhenvisninger, link ark, titelblok, arknummer, tillæg, omnummerering, pdf-link, bue, buemetoder, tre-punkts-bue, radius, følg, følg mig, live, klasseoversigt, personliste, slettet markering, værktøjstips, fanetitler, ændringer, 0.8, 0.8.1, version, nye funktioner, opgave, opgaver, ansvarlig, forfaldsdag, forsinket, kontrollér nu, hvad er ændret, revisioner, sammenlign, stemmenote, beslutning, rettelse, svarfil, tegner, assistent, mcp, problemer, sprog, inputenheder, trackpad, værktøjslinjerækker, egenskabsgitter, opdatering
from: dbdd7ed4
---

Dette er hvad der er ændret i MarkupCraft 0.9, sammenlignet med 0.8.1. Hovedidéen er, at dine arbejdsnoter forbliver væk fra siden, kunden får, og at et helt tegningssæt kan linkes i ét gennemløb.

## Nyt

### Noter, opslagstavlen og private noter

- **Opslagstavlen.** Området omkring hvert ark er et skrivebord: alt der tegnes, skrives eller indsættes ved siden af arket, er en note og udskrives aldrig. Vælg {{ui:Vis opslagstavlen}} for at zoome ud for plads, eller {{ui:Øjebliksbillede til opslagstavlen}}, træk en boks, og vælg så {{ui:Til opslagstavlen}} for at lægge et billede af en del af tegningen ved siden af arket. Et øjebliksbillede er et billede og ændrer sig ikke, når arket gør. Se [Noter, opslagstavlen og private noter](topic:notes-and-pasteboard).
- **Vis og skjul noter.** Enhver markering kan være en note: sæt {{ui:Nye markeringer er}} på fanen {{ui:Notater}}, eller {{ui:Denne markering er}} i {{ui:Egenskaber}}. {{key:Shift+H}} eller kontakten {{ui:Notater}} under arket skjuler og viser alle noter på én gang. Noter udelades ved udskrivning, flade kopier, lister og eksporter, og andre PDF-læsere viser dem ikke. Din gemte PDF beholder dem, næste gang du åbner den i MarkupCraft.
- **Private noter.** Vælg {{ui:Angiv en adgangssætning}}, og gør derefter en markering til {{ui:Et privat notat}}. Den krypteres i filen med en adgangssætning på mindst 10 tegn, og der er ingen gendannelse: ingen, heller ikke vi, kan åbne den uden adgangssætningen. {{ui:Lås}} gemmer private noter væk; {{ui:Forbliv låst op på denne enhed}} er slået fra som standard.
- **Gem en ren kopi.** {{ui:Gem en renset kopi}} fjerner alle noter, private noter og alt på opslagstavlen. Brug den til filen, der går til kunden.

### Link et helt sæt

- **Batch-links.** Vælg {{ui:Sider}} › {{ui:Batch-links…}}, eller {{ui:Link arkhenvisninger…}} under {{ui:Find tekst}} i panelet {{ui:Ark}}. Trin 1 lister hvert arks nummer og navn, som de er læst fra dets titelblok; ret dem der er forkerte. Trin 2 lister de fundne henvisninger, fx `3/A-501` eller `DETAIL 2 ON A-501`. {{ui:Bliver linket}} viser arket og visningen for hver, {{ui:Ikke linket}} viser numre som intet åbent ark har, og {{ui:Opret linkene}} laver dem alle i ét fortrydelsestrin. Kør den igen efter et tillæg eller en omnummerering; links du har lavet i hånden, ændres aldrig. Et link med en visning gemmes som et PDF-link, så andre læsere også åbner detaljen. Se [Arklinks](topic:sheet-links).

### Tegning

- **Bue, ti metoder.** Værktøjet {{ui:Bue}} ({{key:O}}) har nu en boks {{ui:Buemetode}} over siden med ti måder at tegne en bue på, og vinkel, længde, radius og retning kan klikkes eller skrives. Se [Tegn en bue på ti måder](topic:draw-an-arc).

### Arbejd sammen

- **Følg en gennemgår.** I en Live-seance vælg {{ui:Følg}} ved siden af en persons navn, og din visning flytter sig med deres; selv at panorere eller zoome stopper det. Værten kan vælge {{ui:Bed alle om at følge mig}}. Personlisten viser hver persons farve, navn, arket de er på, og hvornår deres sidste redigering var. Se [Følg en anden gennemgår i en Live-seance](topic:follow-in-live).

## I alle apps

- Værktøjstips er Bootstrap-tooltips, starttippet kan lukkes, fanelinjer ruller når de løber over, og browserfanernes titler lyder `<document> — MarkupCraft | CadCraft`.
- Et panel med flere sektioner åbner én og lukker de andre (en lås ved siden af pilen holder én åben); en kontakt i Indstillinger slår dette fra.
- Hver app starter fra en standardsamling af biblioteksobjekter.
- Vægt- og temperaturenheder er tilgængelige i enhedsindstillingerne.

## Rettet

- **Slettede markeringer bliver ikke længere læsbare i den gemte PDF.** Før fjernede gemning en slettet eller omskrevet annotering fra sin side, men lod objektet, med sin tekst, blive i filen. Nu sletter gemning disse objekter. Filer gemt af tidligere versioner indeholder dem stadig, indtil du gemmer dem igen.

## Ærlige begrænsninger

- Batch-links er afprøvet på vores egne testsæt. Rigtige sæt tegner bobler på mange måder, så på et kundesæt kan nogle visninger blive overset. Scannede ark kræver {{ui:Læs tekst (OCR)…}} først.
- Noter, private noter og opslagstavlen er testet i en headless browser og i vores egne filer, ikke med et stort rigtigt vektorsæt og ikke i en rigtig to-personers Live-seance. Ændring af en adgangssætning er ikke bygget. Versioner ældre end 0.9 viser ikke noter.
- Klassevisningen er personlisten; den er ikke afprøvet med en rigtig lærer og rigtige elever.
- Sprog ud over engelsk er maskinkladder, indtil en indfødt taler har læst dem.
- Windows-installationsprogrammer er ikke kodesigneret (Mere information, derefter Kør alligevel); macOS-diskbilledet er ikke notariseret (højreklik, derefter Åbn).

## Tidligere: 0.8 og 0.8.1

Dette er hvad der er ændret i MarkupCraft 0.8 og 0.8.1, sammenlignet med 0.7. Det store nye er, at en markering kan være en opgave, som nogen, eller din egen assistent, udfører, og som lukker sig selv, når tegningen virkelig ændres.

### Nyt

**Markeringer der handler**

- **Gør en markering til en opgave.** Vælg en eller flere markeringer, åbn fanen {{ui:Opgaver}} og vælg {{ui:Gør det valgte til en opgave}}. En opgave har en titel, en person eller din tilsluttede assistent til at udføre den, en valgfri forfaldsdag og en tilstand, og den beholder sin plads på arket og sin tråd. Se [Gør en markering til en opgave](topic:markups-that-act).
- **Opgaver der lukker sig selv.** En opgave kan følge tegningen inde i sin markering. Åbn en nyere revision af arket og vælg {{ui:Kontrollér nu}}: hvis linjerne i det område er ændret mere end et hår, markeres opgaven som Udført, dens markering bliver Afsluttet, og en note i tråden siger, hvad der ændrede sig. Et nyt datostempel, eller linjer der flyttede sig under 1.5 punkter, tæller ikke. En opgave kan i stedet følge et modelelement: din assistent melder elementet med `tasks_check`, og en senere melding der er forskellig, eller et slettet element, lukker opgaven. Ét fortrydelsestrin genåbner den.
- **Find arbejdet.** Filtrér listen {{ui:Opgaver}} efter tilstand og efter hvem den er for, inklusive {{ui:Overskredet}}; vælg {{ui:Tildelt}}, og derefter {{ui:Assistent}} for at se, hvad der venter på din assistent. En opgave der er forbi sin forfaldsdag, vises som en advarsel i panelet Problemer. {{ui:CSV}} eksporterer listen. Opgaver gemmes i PDF'en sammen med markeringen og rejser gennem Live, ligesom andre markeringsegenskaber.

**Hvad der er ændret, som en almindelig liste**

- **List ændringerne.** Åbn fanen {{ui:Sammenlign}}, og vælg derefter {{ui:Sammenlign et helt sæt}}, vælg den tidligere og den senere fil, og vælg {{ui:List ændringerne}}. Listen starter med en optælling og dækker derefter hvert ændret ark, største ændring først: hvor på arket, hvor stor den er (i virkelige enheder samt in på papiret på et kalibreret ark), om linjer er tilføjet eller fjernet, hvor mange markeringer der sidder der, og hvilke ord der er dukket op eller forsvundet. {{ui:Kopiér listen}} lægger den på udklipsholderen, og {{ui:CSV}} skriver én række pr. ændring. Se [Lav en liste over ændringer mellem revisioner](topic:what-changed-in-words).

**Stemmenoter og beslutninger**

- **Stemmenoter.** På fanen {{ui:Notater}} vælg {{ui:Optag en talebesked}}, og derefter {{ui:Stop optagelsen}}; optagelser stopper af sig selv efter to minutter. Noten fastgøres i midten af arket; du trækker den dertil, hvor den hører hjemme, og skriver en billedtekst i {{ui:Egenskaber}}, og {{ui:Afspil}} på listen afspiller den. Optagelsen gemmes inde i PDF'en.
- **Beslutninger.** {{ui:Fastgør en beslutning}} skriver en eller to sætninger på arket. Hvis den erstatter en tidligere beslutning, vælg den under {{ui:Den erstatter}}: den gamle bliver stående, markeret Erstattet, og peger på den nye. Ét fortrydelsestrin tager den tilbage. Se [Fastgør stemmenoter og beslutninger på et ark](topic:voice-notes-and-decisions).

**Rettelser til revision**

- **Send og besvar.** På fanen {{ui:Opgaver}} åbn {{ui:Rettelser til revision}}, skriv den revision markeringerne er mod, og vælg {{ui:Eksportér rettelsesfil}}. Du får en `.redline.json`-fil med én post pr. åben markering: ark, placering (som brøkdele af arket, så en omplotning i en anden størrelse stadig passer), tekst, forfatter, tråd og dens opgave. Den, der tegner ændringerne, besvarer med Accepteret, Afvist eller Udført i en `.redline-answers.json`-fil; {{ui:Indlæs svarfil…}} giver hver markering den status og tegnerens note, som ét fortrydelsestrin. Se [Send markeringer til tegneren som en rettelse](topic:redline-to-revision).

**AI-assistenter**

- **Flere værktøjer.** En assistent du har tilsluttet via CadCraft Studio, kan liste opgaver (`tasks_list`), oprette eller ændre en (`task_set`), fjerne opgaven (`task_clear`), kontrollere en mod en nyere revision eller et element (`tasks_check`) og læse den almindelige liste over ændringer mellem to åbne plansæt (`revisions_changes`). Den får kun de værktøjer, du har afkrydset under kontakten Assistenter, og hver ændring er ét fortrydelsestrin. Se [Brug MarkupCraft med en AI-assistent](topic:use-with-ai-assistants).

### I alle apps

- **Sprog.** CadCraft Studio har nu 54 sprog. Ti er nye: litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filipino, swahili og usbekisk. Alle de ikke-engelske er maskinkladder, indtil en indfødt taler har læst dem.
- **Inputenheder.** {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Inputenheder}} bestemmer, hvad en trackpad, din musesides knapper, en pen, fingertryk, en 3D-mus, en spilcontroller eller en MIDI-controller gør, for alle apps eller kun for denne. Indtil du ændrer noget, virker alle enheder som før. Se [Brug en trackpad, 3D-mus eller controller](common:input-devices).
- **Værktøjslinjerækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} har {{ui:Ombryd}} (standard), {{ui:2 rækker}} og {{ui:1 række}}, så tegningen får mere plads. Se [Arrangér panelerne](common:arrange-panels).
- **Egenskabsgitter.** Stil-felterne på en markering bruger det fælles gitter, med sammenklappelige kategorier og kolonner for etiket og værdi.
- **Problemer-panel.** Advarsler fra appen, såsom en forsinket opgave, samles i ét Problemer-panel.
- **Live og tilføjelser.** Live-seancer beskrives i [Arbejd sammen live](common:work-together-live); tilføjelseslisten, der følger din konto, findes i [Tilføjelser og din kontoliste](common:addons-basics).
- **Tilslut din AI.** CadCraft Studio er navet for din egen assistent: tilslut én gang for alle otte apps. Appsene indeholder ingen AI selv.

### Rettet i 0.8.1

- **Studio kan skifte sprog, mens det kører.** Før blev desktop-appen og de pakkede udgaver på engelsk. Dette er endnu ikke testet på alle platforme: sig til os, hvis sproget ikke skifter.
- Studio 0.8-installationer får tilbudt 0.8.1 via {{ui:Indstillinger}} › {{ui:Opdateringer}}.

### Ikke i denne version endnu

- **Ikke kodesigneret.** Windows-installationsprogrammerne og macOS-.dmg'en har endnu ingen signatur. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Mere information}}, derefter {{ui:Kør alligevel}}. På en Mac, højreklik på CadCraft Studio og vælg {{ui:Åbn}}. Butiksudgaver er sat på hold.
- **At tilslutte din AI er ufærdigt de steder.** Tilslutning med ét klik i Studio, den hostede connector til browserassistenter og din egen API-nøgle i Studio er ikke lovet til denne udgivelse. Opgaveløkken er testet, men endnu ikke med en rigtig assistent.
- **Opgavekontrol kræver samme sidestørrelse.** Et ark omplottet i en anden størrelse matcher ikke, så dets opgaver lukker ikke. Ark parres efter arknummer, ellers efter sidens position.
- **Stemmenoter er kun optagelser.** Der er ingen transskription, og en assistent ser en notes længde, forfatter og billedtekst, ikke lyden. Optagelse er afprøvet med en falsk mikrofon i en headless browser; en rigtig mikrofon på telefon, tablet eller laptop mangler stadig at blive kontrolleret.
- **Beregningsark og begrundelser** i en PDF gemmes i en privat post i filen. En ældre MarkupCraft ignorerer posten og fjerner den, næste gang den gemmer filen, så åbn og gem sådan en fil med 0.8 eller nyere.
- **Tegnerens side af rettelser.** At CadCraft læser rettelsesfilen og besvarer den, er ikke bygget endnu.
- **Andre sprog.** Den tamilske app-bjælke løber over med 528 px.

Alt andet står i [Hvad er ikke bygget endnu](topic:not-built-yet). For udgivelsen før denne, se [Nyheder i 0.7](topic:whats-new-0-7).
