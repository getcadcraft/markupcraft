---
title: Nyheder i 0.7
summary: RFI'er, indsendelser og dagbøger i en ny fane Felt, med frister, forfaldne i rødt, CSV og BCF, offlinearbejde og Sammenflet; assistenter, der sætter statusser, svarer og eksporterer listen; enhedslister, der følger Indstillinger; paneler, der rydder af vejen, og dialogbokse, der kan flyttes.
keywords: nyheder, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, felt, feltoptegnelser, rfi, request for information, indsendelse, dagbog, byggepladsdagbog, forfalden, frist, tildelt mig, nål, sammenflet, offline, tablet, bcf, csv, assistent, mcp, markeringsstatus, svar, eksport, enheder, enhedslister, stjerne, kalibrér, kompakt, paneler, dialogbokse, portugisisk
from: 142e1a1e
---

Her er, hvad der er ændret i MarkupCraft 0.7 i forhold til 0.6. Det store nye er feltoptegnelser: RFI'er, indsendelser og dagbøger, der opbevares i PDF'en ved siden af dine markeringer.

## Nyt

### RFI'er, indsendelser og dagbøger

- **Fanen Felt.** Åbn fanen {{ui:Felt}} og vælg {{ui:RFI}}, {{ui:Indsendelse}} eller {{ui:Dagbog}}. Tryk eller klik på det ark, hvor en RFI eller en indsendelse hører hjemme, og en nål markerer stedet; en dagbog placeres på det åbne ark uden nål ({{ui:Placér nål}} tilføjer en senere, {{ui:Flyt nål}} flytter en vilkårlig nål). Hver optegnelse har sit eget nummer (RFI-0001, SUB-0001, LOG-0001), en titel, tekst, en status, en ansvarlig, en frist, en tråd af svar og en liste over bilagsnavne. Se [Følg RFI'er, indsendelser og dagbøger](topic:field-records).
- **Se, hvad der er forsinket.** Filtrér listen efter type, status, frist (forfalden, forfalder inden for 7 dage, har eller har ingen frist), dette ark eller alle ark, en tekstsøgning eller {{ui:Tildelt mig}}. En optegnelse, der har overskredet sin frist og stadig venter, er markeret **Forfalden**, i rødt, på listen og på sin nål. Se [Find det, der betyder noget](topic:field-records#find-what-matters).
- **CSV og BCF.** {{ui:CSV}} skriver de listede optegnelser som et regneark; {{ui:BCF}} skriver dem som BCF-emner, hver med et snapshot af sit sted på arket. Begge følger filtrene. Se [Eksport](topic:field-records#export).
- **Offline, og to kopier gjort til én.** Optegnelser gemmes i PDF'en og kræver intet netværk, så en tablet på pladsen kan tilføje, besvare og gemme dem. Tilbage på kontoret samler {{ui:Sammenflet}} en anden kopi af den samme PDF's optegnelser via deres id'er, som ét fortryd-trin. Se [Gem, offline og sammenfletning af kopier](topic:field-records#save-offline-and-merging-copies).

### AI-assistenter

- **Mere en assistent kan gøre.** Din egen assistent, tilsluttet via CadCraft Studio, kan nu sætte en markerings status (`markup_status`, logget i dens tråd), svare i en tråd (`markup_reply`) og eksportere listen {{ui:Markeringer}} som CSV eller BCF (`markups_export`, det listen viser med sine filtre). Hver ændring er ét fortryd-trin, signeret med assistentens navn. Se [Hvad en assistent kan bede om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har en liste hver til længde, areal, volumen, vinkel og hældning med de præcise størrelser, enhedernes definitioner giver (den amerikanske opmålingsfod er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forsvinder fra enhedslisterne; sæt en stjerne ved én, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I MarkupCraft følger mål- og positionsenhederne i {{ui:Indstillinger}} › {{ui:MarkupCraft}} og enheden i kalibreringsdialogen til/fra-valgene, stjernen angiver måleenheden, indtil du gemmer MarkupCrafts egne indstillinger, og den rigtige afstand, du skriver, når du kalibrerer, kan have en vilkårlig enheds mærke, som `3 yd` eller `1.5 km`. Se [Enheder, indtastede værdier og enhedslisterne](common:unit-lists).
- **Et tættere layout og paneler, der rydder af vejen.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere plads på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en smal titellinje: træk i den for at fastgøre eller frigøre panelet, slip den på et andet panels linje for at dele én ramme som faner, fastgør det, så det glider ud til kanten, eller skjul det og hent det tilbage fra kanten. Se [Ordn panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse kan flyttes.** Træk en dialogboks i dens titellinje væk fra tegningen; den kommer tilbage, hvor du lod den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil en model spørgsmål, summér et mængdeudtræk, prøv en variant af en del…), hver med de værktøjer, den kalder, og de tilladelser, den kræver, og hver afspillet igen af vores tests. Apperne indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu hvert ord i apperne, som kladder, der endnu ikke er gennemgået af en modersmålstaler. Hjælpeemnerne er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en ugyldig signatur) i stedet for blot »Færdig«, og holder op med at bringe et Nyheder-kort tilbage, som du har lukket, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen ikke er kommet igennem endnu. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. Hvis SmartScreen på Windows stopper installationsprogrammet, vælger du {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}. På en Mac højreklikker du første gang på CadCraft Studio og vælger {{ui:Åbn}}. CadCraft Studio er ikke i en appbutik endnu, og der er ingen version til iPad eller iPhone endnu.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen boks læser dem endnu.
- Feltoptegnelser deles ikke i en CadCraft Studio-livesession (livesessioner bærer kun markeringer); saml kopier med {{ui:Sammenflet}}.
- Sammenflet tager en optegnelse som helhed fra den kopi, der blev ændret sidst: hvis to personer har ændret forskellige felter i den samme optegnelse, vinder den senere kopis felter. Tråde og bilagsnavne samles.
- Bilag er kun navne; filerne bliver, hvor de er. Der er ingen teams, notifikationer eller skyprojekter til optegnelser, og assistenter har endnu ingen værktøjer til optegnelser.
- Feltoptegnelser blev testet i en browser i telefon- og tabletstørrelser med netværket afbrudt, men endnu ikke i hånden på en rigtig tablet.
- Stadig fra 0.6: at dreje sideobjekter til en vilkårlig vinkel, at tegne nye figurer direkte ind i siden, at ændre en linjes skrifttype eller størrelse og tekst, der løber over flere linjer. En gemt kopi med sideændringer er endnu ikke åbnet i Acrobat.
- Stadig fra 0.5: at fortryde en sideændring (som at tilføje en tom side), at læse tekst fra scannede ark og livesessioner ud over dit eget netværk.

Alt andet står i [Hvad der ikke er lavet endnu](topic:not-built-yet).
