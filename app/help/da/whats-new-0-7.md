---
title: Nyheder i 0.7 (tidligere)
summary: RFI'er, indsendelser og dagbøger i en ny fane Felt, med forfaldsdatoer, forsinkede i rødt, CSV og BCF, arbejde offline og Sammenflet; assistenter der sætter statusser, svarer og eksporterer listen; enhedslister der følger Indstillinger; paneler der ryddes væk og dialogbokse der kan flyttes.
keywords: nyheder 0.7, tidligere udgivelse, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, felt, feltposter, rfi, anmodning om oplysninger, indsendelse, dagbog, byggepladsdagbog, forsinket, forfaldsdato, tildelt mig, nål, sammenflet, offline, tablet, bcf, csv, assistent, mcp, markeringsstatus, svar, eksport, enheder, enhedslister, stjerne, kalibrér, kompakt, paneler, dialogbokse, portugisisk
from: f8578677
---

Dette er hvad der er ændret i MarkupCraft 0.7, sammenlignet med 0.6. Det store nye er feltposter: RFI'er, indsendelser og dagbøger gemt inde i PDF'en ved siden af dine markeringer.

## Nyt

### RFI'er, indsendelser og dagbøger

- **Fanen Felt.** Åbn fanen {{ui:Felt}} og vælg {{ui:RFI}}, {{ui:Indsendelse}} eller {{ui:Dagbog}}. Tryk eller klik på arket, hvor en RFI eller en indsendelse hører hjemme, og en nål markerer stedet; en dagbog lægges på det åbne ark uden nål ({{ui:Placér nål}} tilføjer en senere, {{ui:Flyt nål}} flytter enhver nål). Hver post har sit eget nummer (RFI-0001, SUB-0001, LOG-0001), en titel, tekst, en status, en tildeling, en forfaldsdato, en tråd af svar og en liste over vedhæftede filnavne. Se [Følg RFI'er, indsendelser og dagbøger](topic:field-records).
- **Se hvad der er forsinket.** Filtrér listen efter type, status, forfaldsdato (forsinket, forfalder om 7 dage, har eller har ingen forfaldsdato), dette ark eller alle ark, en tekstsøgning eller {{ui:Tildelt mig}}. En post der er forbi sin forfaldsdato og stadig venter, markeres **Overskredet**, i rødt, på listen og på sin nål. Se [Find det vigtige](topic:field-records#find-what-matters).
- **CSV og BCF.** {{ui:CSV}} skriver de viste poster som et regneark; {{ui:BCF}} skriver dem som BCF-emner, hver med et øjebliksbillede af sit sted på arket. Begge følger filtrene. Se [Eksport](topic:field-records#export).
- **Offline, og to kopier gjort til én.** Poster gemmes inde i PDF'en og kræver intet netværk, så en tablet på byggepladsen kan tilføje, besvare og gemme dem. Tilbage på kontoret sammenfletter {{ui:Sammenflet}} posterne fra en anden kopi af den samme PDF efter deres id'er, som ét fortrydelsestrin. Se [Gem, offline og sammenfletning af kopier](topic:field-records#save-offline-and-merging-copies).

### AI-assistenter

- **Mere en assistent kan gøre.** Din egen assistent, tilsluttet via CadCraft Studio, kan nu sætte en markerings status (`markup_status`, logført i dens tråd), svare i en tråd (`markup_reply`) og eksportere {{ui:Markeringer}}-listen som CSV eller BCF (`markups_export`, det listen viser med sine filtre). Hver ændring er ét fortrydelsestrin, signeret med assistentens navn. Se [Hvad en assistent kan bede om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, volumen, vinkel og hældning, med de præcise størrelser enhedernes definitioner giver (den amerikanske landmålerfod er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forlader enhedslisterne; sæt en stjerne ved én, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I MarkupCraft følger måle- og positionsenhederne i {{ui:Indstillinger}} › {{ui:MarkupCraft}} og enheden i kalibreringsdialogen kontakterne, stjernen sætter måleenheden, indtil du gemmer MarkupCraft's egne indstillinger, og den reelle afstand du skriver, når du kalibrerer, kan have hvilken som helst enheds mærke, fx `3 yd` eller `1.5 km`. Se [Enheder, skrevne værdier og enhedslisterne](common:unit-lists).
- **En tættere layout og paneler der ryddes væk.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere på skærmen (berøringsskærme og telefoner beholder deres store knapper). Hvert sidepanel har en smal titellinje: træk den for at fastgøre eller frigøre panelet, slip den på en anden panels linje for at dele én ramme som faner, fastgør den så den glider væk til kanten, eller skjul den og hent den tilbage fra kanten. Se [Arrangér panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse kan flyttes.** Træk en dialogboks i dens titellinje ud af vejen for tegningen; den kommer tilbage, hvor du slap den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede anmodninger til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil modellen spørgsmål, sammentæl et mængdeudtræk, prøv en delvariant …), hver med de værktøjer den kalder og de tilladelser den kræver, og hver gennemspillet af vores tests. Appsene indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu hvert ord i appsene, som kladder der endnu ikke er gennemlæst af en indfødt taler. Hjælpeemner er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en ugyldig signatur), i stedet for blot »Færdig«, og holder op med at vise et Nyheder-kort, du har lukket, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen endnu ikke er kommet igennem. Tjek SHA-256-værdien ved hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Mere information}}, derefter {{ui:Kør alligevel}}. På en Mac skal du første gang højreklikke på CadCraft Studio og vælge {{ui:Åbn}}. CadCraft Studio er ikke i en appbutik endnu, og der er endnu ingen iPad- eller iPhone-version.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen boks læser dem endnu.
- Feltposter deles ikke i en CadCraft Studio-liveseance (live-seancer bærer kun markeringer); før kopier sammen med {{ui:Sammenflet}}.
- Sammenflet tager en post som helhed fra den kopi, der sidst blev ændret: hvis to personer ændrede forskellige felter i én post, vinder den senere kopis felter. Tråde og vedhæftede filnavne sammenføjes.
- Vedhæftninger er kun navne; filerne bliver, hvor de er. Der er ingen teams, notifikationer eller skyprojekter for poster, og assistenter har endnu ingen værktøjer til poster.
- Feltposter er testet i en browser i telefon- og tablet-størrelser med netværket afbrudt, men endnu ikke i hånden på en rigtig tablet.
- Stadig fra 0.6: at dreje sideobjekter til en vilkårlig vinkel, tegne nye figurer direkte ind i siden, ændre en linjes skrifttype eller størrelse og tekst der flyder over flere linjer. En gemt kopi med sideredigeringer er endnu ikke åbnet i Acrobat.
- Stadig fra 0.5: at fortryde en sideændring (såsom at tilføje en tom side), læsning af tekst fra scannede ark og live-seancer ud over dit eget netværk.

Alt andet står i [Hvad er ikke bygget endnu](topic:not-built-yet).
