---
title: Nyt i 0.9 (tidligere)
summary: Notater og en opslagstavle, der aldrig udskrives, krypterede private notater og en ren kopi til kunden, batch-links for et helt tegningssæt, et Bue-værktøj med ti metoder, at følge en anden gennemgår i Live, og en rettelse af slettede markeringer, der bliver i den gemte PDF.
keywords: nyt i 0.9, tidligere udgivelse, nyheder, hvad er nyt, 0.9, udgivelsesnoter, ændringslog, notater, opslagstavle, private notater, adgangssætning, krypteret, skjul notater, vis notater, ren kopi, øjebliksbillede, batch-links, arkhenvisninger, link ark, tegningshoved, arknummer, tillæg, omnummerering, pdf-link, bue, buemetoder, trepunktsbue, radius, følg, følg mig, live, klassevisning, personliste, slettet markering, værktøjstips, fanetitler, nyheder, ændringer, 0.8, 0.8.1, version, nye funktioner, opgave, opgaver, tildelt, forfaldsdag, overskredet, kontrollér nu, hvad der er ændret, revisioner, sammenlign, talebesked, beslutning, rettelse, svarfil, tegner, assistent, mcp, problemer, sprog, inputenheder, trackpad, værktøjslinjens rækker, egenskabsgitter, opdatering
from: aa3dfeb8
---

Dette er, hvad der er ændret i MarkupCraft 0.9 sammenlignet med 0.8.1. Hovedidéen er, at dine arbejdsnoter holdes væk fra den side, kunden får, og at et helt tegningssæt kan linkes på én gang.

## Nyt

### Notater, opslagstavlen og private notater

- **Opslagstavlen.** Området omkring hvert ark er et skrivebord: alt, der tegnes, skrives eller indsættes ved siden af arket, er et notat og udskrives aldrig. Vælg {{ui:Vis opslagstavlen}} for at zoome ud og få plads, eller {{ui:Øjebliksbillede til opslagstavlen}}, træk en boks, og vælg derefter {{ui:Til opslagstavlen}} for at placere et billede af en del af tegningen ved siden af arket. Et øjebliksbillede er et billede og ændrer sig ikke, når arket gør. Se [Notater, opslagstavlen og private notater](topic:notes-and-pasteboard).
- **Vis og skjul notater.** Enhver markering kan være et notat: sæt {{ui:Nye markeringer er}} i fanen {{ui:Notater}}, eller {{ui:Denne markering er}} i {{ui:Egenskaber}}. {{key:Shift+H}} eller kontakten {{ui:Notater}} under arket skjuler og viser alle notater på én gang. Notater udelades fra udskrift, flade kopier, lister og eksporter, og andre pdf-læsere viser dem ikke. Din gemte PDF beholder dem, næste gang du åbner den i MarkupCraft.
- **Private notater.** Vælg {{ui:Angiv en adgangssætning}}, og gør derefter en markering til {{ui:Et privat notat}}. Den krypteres i filen med en adgangssætning på mindst 10 tegn, og der er ingen gendannelse: ingen, heller ikke vi, kan åbne den uden adgangssætningen. {{ui:Lås}} lægger private notater væk; {{ui:Forbliv låst op på denne enhed}} er slået fra som standard.
- **Gem en ren kopi.** {{ui:Gem en renset kopi}} fjerner alle notater, private notater og alt på opslagstavlen. Brug den til filen, der sendes til kunden.

### Link et helt sæt

- **Batch-links.** Vælg {{ui:Sider}} › {{ui:Batch-links…}}, eller {{ui:Link arkhenvisninger…}} under {{ui:Find tekst}} i panelet {{ui:Ark}}. Trin 1 viser hvert arks nummer og navn, som de er læst fra dets tegningshoved; ret dem, der er forkerte. Trin 2 viser de fundne arkhenvisninger, for eksempel `3/A-501` eller `DETAIL 2 ON A-501`. {{ui:Vil blive linket}} viser arket og visningen for hver, {{ui:Ikke linket}} viser numre, som intet åbent ark har, og {{ui:Opret linkene}} laver dem alle i ét fortrydelsestrin. Kør den igen efter et tillæg eller en omnummerering; links, du har lavet manuelt, ændres aldrig. Et link med en visning gemmes som et pdf-link, så andre læsere også åbner detaljen. Se [Arklinks](topic:sheet-links).

### Tegning

- **Bue, ti metoder.** Værktøjet {{ui:Bue}} ({{key:O}}) har nu en boks {{ui:Buemetode}} over siden med ti måder at tegne en bue på, og vinkel, længde, radius og retning kan klikkes eller skrives. Se [Tegn en bue på ti måder](topic:draw-an-arc).

### Arbejd sammen

- **Følg en gennemgår.** I en Live-session vælger du {{ui:Følg}} ved siden af en persons navn, og din visning flytter sig med deres; når du selv panorerer eller zoomer, stopper det. Værten kan vælge {{ui:Bed alle om at følge mig}}. Personlisten viser hver persons farve, navn, arket de er på, og hvornår deres seneste redigering var. Se [Følg en anden gennemgår i en Live-session](topic:follow-in-live).

## I alle apps

- Værktøjstips er Bootstrap-tooltips, starttippet kan lukkes, fanelinjer ruller, når de løber over, og fanetitler i browseren lyder `<dokument> — MarkupCraft | CadCraft`.
- Et panel med flere sektioner åbner én og lukker de andre (en lås ved siden af markøren holder én åben); en kontakt i {{ui:Indstillinger}} slår dette fra.
- Hver app starter fra en standardsamling af biblioteksobjekter.
- Vægt- og temperaturenheder er tilgængelige under indstillingerne for enheder.

## Rettet

- **Slettede markeringer kan ikke længere læses i den gemte PDF.** Før tog gemning en slettet eller omskrevet annotation af sin side, men lod objektet med dets tekst blive i filen. Nu sletter gemning disse objekter. Filer gemt af tidligere builds indeholder dem stadig, indtil du gemmer dem igen.

## Ærlige begrænsninger

- Batch-links er afprøvet på vores egne testsæt. Rigtige sæt tegner bobler på mange måder, så på et kundesæt kan nogle visninger blive overset. Scannede ark skal først igennem {{ui:Læs tekst (OCR)…}}.
- Notater, private notater og opslagstavlen er afprøvet i en headless browser og på vores egne filer, ikke med et stort rigtigt vektorsæt og ikke i en rigtig to-personers Live-session. Ændring af en adgangssætning er ikke bygget. Builds ældre end 0.9 viser ikke notater.
- Klassevisningen er personlisten; den er ikke afprøvet med en rigtig lærer og rigtige elever.
- Sprog ud over engelsk er maskinoversættelser, indtil en indfødt taler har læst dem.
- Windows-installationsprogrammer er ikke kodesignerede (Flere oplysninger, derefter Kør alligevel); macOS-diskbilledet er ikke notariseret (højreklik, derefter Åbn).

## Tidligere: 0.8 og 0.8.1

Dette er, hvad der er ændret i MarkupCraft 0.8 og 0.8.1 sammenlignet med 0.7. Det store nye er, at en markering kan være en opgave, som nogen eller din egen assistent udfører, og som lukker sig selv, når tegningen virkelig ændrer sig.

### Nyt

**Markeringer, der handler**

- **Gør en markering til en opgave.** Vælg en eller flere markeringer, åbn fanen {{ui:Opgaver}}, og vælg {{ui:Gør det valgte til en opgave}}. En opgave har en titel, en person eller din tilsluttede assistent til at udføre den, en valgfri forfaldsdag og en tilstand, og den beholder sin plads på arket og sin tråd. Se [Gør en markering til en opgave](topic:markups-that-act).
- **Opgaver, der lukker sig selv.** En opgave kan holde øje med tegningen inde i sin markering. Åbn en nyere revision af arket og vælg {{ui:Kontrollér nu}}: hvis linjerne i området er ændret mere end et hårstrå, markeres opgaven som Udført, dens markering bliver Afsluttet, og et notat i tråden siger, hvad der er ændret. Et nyt datostempel, eller linjer, der er flyttet mindre end 1.5 punkt, tæller ikke. En opgave kan i stedet holde øje med et modelelement: din assistent rapporterer elementet med `tasks_check`, og en senere rapport, der er forskellig, eller et slettet element, lukker opgaven. Ét fortrydelsestrin åbner den igen.
- **Find arbejdet.** Filtrér listen {{ui:Opgaver}} efter tilstand og efter hvem den er til, inklusive {{ui:Overskredet}}; vælg {{ui:Tildelt}}, derefter {{ui:Assistent}} for at se, hvad der venter på din assistent. En opgave efter sin forfaldsdag vises som en advarsel i panelet Problemer. {{ui:CSV}} eksporterer listen. Opgaver gemmes i pdf-filen sammen med markeringen og følger med gennem Live, ligesom andre markeringsegenskaber.

**Hvad der er ændret, som en simpel liste**

- **List ændringerne.** Åbn fanen {{ui:Sammenlign}}, derefter {{ui:Sammenlign et helt sæt}}, vælg den tidligere og den senere fil, og vælg {{ui:List ændringerne}}. Listen starter med et antal, derefter dækker den hvert ændret ark, største ændring først: hvor på arket, hvor stor (i virkelige enheder såvel som papirtommer på et kalibreret ark), om linjer er tilføjet eller fjernet, hvor mange markeringer der ligger der, og hvilke ord der er dukket op eller forsvundet. {{ui:Kopiér listen}} lægger den på udklipsholderen, og {{ui:CSV}} skriver én række pr. ændring. Se [Vis hvad der er ændret mellem revisioner](topic:what-changed-in-words).

**Talebeskeder og beslutninger**

- **Talebeskeder.** I fanen {{ui:Notater}} vælger du {{ui:Optag en talebesked}}, derefter {{ui:Stop optagelsen}}; optagelser stopper af sig selv efter to minutter. Noten fastgøres i midten af arket; du trækker den hen, hvor den hører til, og skriver en billedtekst i {{ui:Egenskaber}}. {{ui:Afspil}} i listen afspiller den. Optagelsen gemmes i pdf-filen.
- **Beslutninger.** {{ui:Fastgør en beslutning}} skriver en eller to sætninger på arket. Hvis den erstatter en tidligere beslutning, vælg den under {{ui:Den erstatter}}: den gamle forbliver, markeret Erstattet, og peger på den nye. Ét fortrydelsestrin fjerner den igen. Se [Fastgør talebeskeder og beslutninger på et ark](topic:voice-notes-and-decisions).

**Rettelser til revision**

- **Send og svar.** I fanen {{ui:Opgaver}} åbner du {{ui:Rettelser til revision}}, skriver den revision markeringerne er mod, og vælger {{ui:Eksportér rettelsesfil}}. Du får en `.redline.json`-fil med ét punkt pr. åben markering: ark, placering (som brøkdele af arket, så en ny udskrift i en anden størrelse stadig passer), ord, forfatter, tråd og dens opgave. Den, der tegner ændringerne, svarer Accepteret, Afvist eller Udført i en `.redline-answers.json`-fil; {{ui:Indlæs svarfil…}} giver hver markering den status og tegnerens note som ét fortrydelsestrin. Se [Send markeringer til tegneren som rettelser](topic:redline-to-revision).

**AI-assistenter**

- **Flere værktøjer.** En assistent, du har tilsluttet gennem CadCraft Studio, kan liste opgaver (`tasks_list`), oprette eller ændre en (`task_set`), fjerne opgaven (`task_clear`), kontrollere en mod en nyere revision eller et element (`tasks_check`) og læse den simple liste over ændringer mellem to åbne plansæt (`revisions_changes`). Den får kun de værktøjer, du har markeret under kontakten {{ui:Assistenter}}, og hver ændring er ét fortrydelsestrin. Se [Brug MarkupCraft med en AI-assistent](topic:use-with-ai-assistants).

### I alle apps

- **Sprog.** CadCraft Studio har nu 54 sprog. Ti er nye: litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Alle de ikke-engelske er maskinoversættelser, indtil en indfødt taler har læst dem.
- **Inputenheder.** {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Inputenheder}} angiver, hvad en trackpad, din musesides knapper, en pen, fingertryk, en 3D-mus, en spillecontroller eller en MIDI-controller gør, for alle apps eller kun for denne. Indtil du ændrer noget, virker alle enheder som før. Se [Brug en trackpad, 3D-mus eller controller](common:input-devices).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} har {{ui:Ombryd}} (standard), {{ui:2 rækker}} og {{ui:1 række}}, så tegningen får mere plads. Se [Ordn panelerne](common:arrange-panels).
- **Egenskabsgitter.** Stil-felterne for en markering bruger det fælles gitter med sammenklappelige kategorier og kolonner for navn og værdi.
- **Panelet Problemer.** Advarsler fra appen, for eksempel en overskredet opgave, samles i ét panel, Problemer.
- **Live og add-ons.** Live-sessioner beskrives i [Arbejd sammen live](common:work-together-live); add-on-listen, der følger din konto, er i [Add-ons og din kontoliste](common:addons-basics).
- **Tilslut din AI.** CadCraft Studio er navet for din egen assistent: tilslut én gang for alle otte apps. Apps indeholder ingen AI af sig selv.

### Rettet i 0.8.1

- **Studio kan skifte sprog, mens det kører.** Før blev desktop-appen og de pakkede udgaver stående på engelsk. Dette er ikke testet på alle platforme endnu: sig til, hvis sproget ikke skifter.
- Studio 0.8-installationer får tilbudt 0.8.1 via {{ui:Indstillinger}} › {{ui:Opdateringer}}.

### Ikke i denne version endnu

- **Ikke kodesigneret.** Windows-installationsprogrammerne og macOS .dmg har endnu ingen signatur. Hvis SmartScreen stopper installationsprogrammet på Windows, vælg {{ui:Flere oplysninger}}, derefter {{ui:Kør alligevel}}. På en Mac højreklikker du på CadCraft Studio og vælger {{ui:Åbn}}. Butiksbuilds er på pause.
- **Tilslut din AI er ufærdig flere steder.** Tilslutning med ét klik i Studio, den hostede connector til browserassistenter og din egen API-nøgle i Studio er ikke lovet til denne udgivelse. Opgaveløkken er testet, men endnu ikke med en rigtig assistent.
- **Opgavekontrol kræver samme sidestørrelse.** Et ark, der udskrives igen i en anden størrelse, passer ikke, så dets opgaver lukkes ikke. Ark parres efter arknummer, ellers efter sidens position.
- **Talebeskeder er kun optagelser.** Der er ingen transskription, og en assistent ser en notes længde, forfatter og billedtekst, ikke lyden. Optagelse er testet med en falsk mikrofon i en headless browser; en rigtig mikrofon på telefon, tablet eller laptop mangler stadig at blive kontrolleret.
- **Beregningsark og begrundelser i en PDF** gemmes i en privat post i filen. En ældre MarkupCraft ignorerer den post og fjerner den, næste gang den gemmer filen, så åbn og gem sådan en fil med 0.8 eller nyere.
- **Tegnerens side af rettelser.** At CadCraft læser rettelsesfilen og svarer på den, er ikke bygget endnu.
- **Andre sprog.** Den tamilske app-bar løber over med 528 px.

Alt andet findes i [Hvad der ikke er bygget endnu](topic:not-built-yet). For udgivelsen før denne, se [Nyt i 0.7](topic:whats-new-0-7).
