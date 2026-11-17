---
title: Når du kommer fra andet markup-software
summary: Hvordan vanerne i et desktop-program til PDF-markering svarer til MarkupCraft, og de forskelle, der overrasker folk.
keywords: skift, skifter, migrér, velkendt, desktop pdf-markering, værktøjskasse, markeringsliste, overlay, sessioner, profil, genveje, forskelle
from: c8f323e1
---

Hvis du gennemgår tegninger i Bluebeam Revu (eller kommenterer PDF'er i et andet desktop-PDF-program), vil det meste af MarkupCraft føles velkendt: skyer, henvisninger, en værktøjskasse, en markeringsliste, statusser med svar, kalibrerede målinger og arkoverlays. Den største forskel er måden, filer håndteres på, så læs næste afsnit, selv hvis du springer resten over.

## De fem forskelle, der betyder noget

1. **Gem laver en ny fil.** MarkupCraft kører i browseren og kan ikke skrive over PDF'en på din disk. {{ui:Gem}} henter "<name> (marked up).pdf", og originalen bliver, som den var. Næste gang åbner du kopien "(marked up)" og rydder selv gamle kopier op.
2. **PDF'en gemmes, når du gemmer.** Indtil da beholder en gendannelseskopi i denne browser dine markeringer gennem et nedbrud eller en lukket fane, og MarkupCraft tilbyder den igen næste gang. Det er et sikkerhedsnet: gem PDF'en for at beholde gennemgangen.
3. **Din profil ligger i browseren.** Dit forfatternavn, værktøjsindstillinger og værktøjskasse gemmes i denne browser på denne computer. En anden browser eller computer starter forfra, og rydning af webstedsdata sletter dem. Eksportér din værktøjskasse som sikkerhedskopi. Se [Hvad der bliver i denne browser](topic:browser-storage).
4. **Ingen delte sessioner endnu.** Der findes ingen live, delt gennemgangssession og intet cloud-projekt. Gennemgangen rejser i PDF'en: gem, send kopien, den næste person svarer og gemmer.
5. **Målestok er pr. ark, og kun pr. ark.** Der er ingen viewports inde i et ark og ingen "anvend denne målestok på alle sider". Kalibrér hvert ark, du måler på.

## Vane for vane

| Du er vant til | I MarkupCraft |
|---|---|
| Miniaturepanel, sidemærkater | {{ui:Ark}} til venstre. Navnene kommer fra sidemærkaterne eller læses fra tegningshovedet; ret dem med {{ui:Omdøb ark}}. |
| Åbne flere PDF'er som et sæt | Åbn dem alle på én gang; de bliver til én liste. Der gemmes ingen sætfil: åbn de samme PDF'er næste gang. |
| Værktøjskasse med værktøjssæt | Fanen {{ui:Værktøjer}}: én kasse pr. browser, gemte værktøjer med stil og emne. Del dem med {{ui:Eksportér}} og {{ui:Importér}} som en JSON-fil. Værktøjssætfiler fra andre programmer kan ikke importeres. |
| Egenskabspanel | Fanen {{ui:Egenskaber}}: status, emne, kommentar, stil, svar og mangelpost samlet ét sted. |
| Markeringsliste med kolonner | Fanen {{ui:Markeringer}} med filtre for ark, forfatter, status og type. Eksportér CSV eller BCF. Ingen egne kolonner og ingen PDF- eller regnearksoversigt endnu. |
| Status og gennemgangstilstand | {{ui:Status}}: Åben, Accepteret, Afvist, Afsluttet. Ingen egne statussæt. Gemmes som standard gennemgangstilstande. |
| Svar på en markering | Tråden "Svar" i {{ui:Egenskaber}}, med statusændringer logget i den. Et sendt svar kan ikke redigeres. |
| Kalibrér, derefter længde, areal, antal | {{ui:Kalibrér}}, {{ui:Længde}} ({{key:M}}), {{ui:Areal}} ({{key:Q}}, giver areal og omkreds), {{ui:Tæl}} ({{key:U}}). Ingen vinkel, radius, volumen, polylængde eller udsparinger endnu. |
| Overlay af sider | Fanen {{ui:Sammenlign}}: rød for gammel, blå for ny, ret ind efter to punkter. Ingen automatisk "sammenlign dokumenter"-skyer. |
| Stempler | {{ui:Stempel}} med seks indbyggede stempler og egen tekst, underskrevet med dit navn og datoen. Ingen billed- eller signaturstempler endnu. |
| Mangel- eller emnesporing | Fanen {{ui:Mangelliste}}: nummererede poster med ansvarlig, forfaldsdato og status; CSV-eksport. |
| Live-samarbejdssession | Ikke tilgængelig endnu. Send den gemte PDF rundt. |
| Fladgør | Ikke lavet endnu. Markeringer forbliver som kommentarer, som andre fremvisere kan vise og udskrive. |
| Lag til markeringer | Ikke lavet endnu. Brug emner, forfattere og listefiltrene til at sortere kommentarer. |
| Hyperlinks mellem ark | Ikke lavet endnu. |
| Mellemrumstast til panorering, hjul til zoom | Det samme: hold {{key:Space}} nede og træk; hjulet zoomer ved markøren. Hjulet ruller aldrig siden. |

## Taster der er anderledes

Mange enkelttegnstaster er, hvad du måske forventer, men tjek disse, før fingrene gør det for dig:

- {{key:K}} er {{ui:Henvisning}}, og {{key:Q}} er {{ui:Areal}}. Er du vant til Q for henvisninger, starter den et areal her.
- {{key:C}} er boksen {{ui:Sky}}; {{key:Shift+C}} er {{ui:Fri sky}}.
- {{key:M}} er {{ui:Længde}}, {{key:U}} er {{ui:Tæl}}, {{key:Y}} er {{ui:Polylinje}}, {{key:G}} er {{ui:Polygon}}, {{key:I}} er {{ui:Fremhæv}}.
- {{key:Mod+D}} duplikerer markeringen (i stedet for browserens bogmærke).
- {{key:Mod+Plus}} og {{key:Mod+Minus}} zoomer arket, ikke browsersiden.
- Enhver tast kan ændres: se nedenfor.

:::tip
Kender dine fingre Bluebeam Revu, så vælg menustilen {{ui:PDF-gennemgang}} i {{ui:Indstillinger}} › {{ui:MarkupCraft}} › {{ui:Menuer, taster og mus}}: en menulinje (Fil, Rediger, Vis, Dokument, Markering, Mål, Vindue) over en række gennemgangsværktøjer, {{key:Q}} for en henvisning, {{key:H}} for markeringspennen, {{key:N}} for en polygon, og målingerne på {{key:Alt+Shift}} med et bogstav. Enhver tast kan også ændres der. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).
:::

Den fulde liste findes i [Tastatur og mus](topic:keyboard).

## Ting der virker anderledes, end du måske forventer

- **Værktøjer forbliver tændt.** Efter en sky tegner du stadig skyer. {{key:Esc}} én gang fravælger, to gange returnerer til {{ui:Vælg}}.
- **Tekst og henvisninger skal have tekst.** Afslutter du uden at skrive noget, tilføjes ingen markering. Noter bliver tomme.
- **Målinger kræver først en målestok.** {{ui:Længde}} og {{ui:Areal}} skifter til {{ui:Kalibrér}} på et ukalibreret ark og vender tilbage bagefter.
- **Kommentarer fra andre programmer.** Rektangler, ellipser, linjer, polylinjer, polygoner, blæk, tekstbokse og sticky notes lavet andre steder bliver redigerbare MarkupCraft-markeringer og skrives om på MarkupCrafts måde, når du gemmer (deres udseende kan ændre sig lidt). Tekstfremhævninger, andre programmers stempler og andre specielle typer forbliver skrivebeskyttede: du kan svare på dem, men ikke ændre dem.
- **Tegn uden for vesteuropæiske bogstaver** udskrives som "?" i den gemte PDF. Se [Gem den markerede PDF](topic:save-the-marked-up-pdf).
- **Stempeldatoer** bruger UTC, så et stempel lavet sent om aftenen i Amerika kan vise morgendagens dato.
- **Målinger følger med** som standard målekommentarer, og hvert kalibreret ark beholder sin målestok, så et program, der læser PDF-målinger, normalt kan vise dem. Den præcise opførsel afhænger af det program.

## Brug begge

Du kan gå frem og tilbage. Kommentarer lavet andre steder åbnes i MarkupCraft, og "(marked up)"-PDF'en åbnes i andre PDF-programmer med alle markeringer, svar og statusser synlige. Det, kun MarkupCraft læser tilbage (mangelpostens ansvarlige og forfaldsdato, postens status), gemmes i filen til MarkupCraft.
