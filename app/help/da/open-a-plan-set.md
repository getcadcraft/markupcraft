---
title: Åbn et arksæt og skift mellem ark
summary: Åbn én PDF eller mange, eller start med tomme sider, find ark efter nummer eller navn, zoom og panorér, og omdøb et ark, når filen giver det forkert navn.
keywords: åbn, ny, tom side, tomt ark, skitse, gitter, uden titel, arksæt, sider, ark, miniaturer, sidemærkater, arknummer, tegningshoved, omdøb, navigér, zoom, panorér, tilpas, søg i ark
from: 1e7f4d50
---

## Åbn sættet

1. Vælg {{ui:Åbn}} i værktøjslinjen, eller tryk {{key:Mod+O}}.
2. I filvælgeren vælger du hver PDF i sættet ({{pick:mac=hold ⌘ og klik på hver fil|windows linux=hold Ctrl og klik på hver fil}}, eller vælg et interval med Shift), og bekræft.
   Eller træk filerne fra {{pick:mac=Finder|windows=File Explorer|linux=din filhåndtering}} over arkområdet. "Slip PDF'er for at åbne dem" vises, mens du trækker.
3. Vent, mens statuslinjen siger "Åbner <file>…". Ved store filer tæller den: "(10 af 60 ark)".

Resultat: listen {{ui:Ark}} viser hver side i hver fil, i den rækkefølge du åbnede dem, og statuslinjen siger noget i stil med "Åbnet 3 filer (42 ark i arksættet)." Hvis filerne allerede havde kommentarer, tilføjes, hvor mange der blev læst.

For at tilføje flere filer til sættet senere, åbn dem på samme måde. De føjes til slutningen af listen.

## Start med tomme sider

For at skitsere eller tage noter uden en tegning, lav tomme sider i stedet for at åbne en PDF:

1. Vælg {{ui:Ny}} i værktøjslinjen, eller {{ui:Start med en tom side}} på startskærmen, eller tryk {{key:Mod+N}}, hvor din browser lader siden få den (desktopappen og Studio gør altid).
2. Vælg {{ui:Papirstørrelse}}: Letter, Tabloid eller ANSI B, ARCH D, ARCH E, A4, A3 eller A1, og {{ui:Stående}} eller {{ui:Liggende}}.
3. Vælg et {{ui:Gitter}}: {{ui:Ingen}}, {{ui:Prikker}} eller {{ui:Ruder}}. Gitteret er hver 1/4 in med en tykkere linje hver inch på inch-papir, og hver 5 mm med en tykkere linje hver 10 mm på metrisk papir. Det udskrives på siden.
4. Skriv, hvor mange {{ui:Sider}} du vil have, fra 1 til 20, og vælg derefter {{ui:Opret}}.

Resultat: en ny PDF ved navn "Untitled-1.pdf" (derefter "Untitled-2.pdf" og så videre) åbnes ligesom enhver anden fil, lavet her på denne computer. Alle værktøjer virker på den, og {{ui:Gem}} henter "Untitled-1 (marked up).pdf". MarkupCraft husker dine valg til næste gang.

Siderne har ingen målestok: linjen under arket siger "Ikke kalibreret". Gitteret er ikke en målestok. For at måle, kalibrér arket eller vælg en målestok først; se [Kalibrér og mål](topic:calibrate-and-measure).

For at tilføje en side til et tomt sæt, åbn et af dets ark og vælg {{ui:Tilføj en tom side}} under listen {{ui:Ark}}. Den nye side har samme papir og gitter og kommer til sidst. Som alle sidendringer kan den ikke fortrydes; se [Udskriv og ændr siderne](topic:pages-and-printing).

## Sådan får arkene deres navne

MarkupCraft navngiver hvert ark "<arknummer> — <titel>", for eksempel "A-101 — Plantegning", ud fra den første af disse, den finder:

1. Et navn, du skrev med {{ui:Omdøb ark}} (nedenfor).
2. PDF'ens egne sidemærkater, når personen, der lavede PDF'en, angav dem (for eksempel "A-101").
3. Tegningshovedet: MarkupCraft læser sidens tekst og leder efter noget, der ligner et arknummer (A-101, A1.01, M-201A, KA1-1), og foretrækker det nederste højre hjørne, den højre stribe og det nederste bånd, og tager den største tekst i nærheden som titel.
4. Ellers filnavnet og siden: "Planer — side 3".

For at se, hvilken der blev brugt, tryk {{key:Esc}}, indtil intet er valgt, og {{ui:Vælg}} er tændt, og kig derefter i {{ui:Egenskaber}}: "Læst fra" siger "Sidens etiket", "Tegningshovedet", "Filnavnet" eller "Indtastet manuelt".

:::note
Scannede ark, og PDF'er hvor teksten er eksporteret som linjer, har ingen tekst at læse. De navngives efter fil og side, indtil du omdøber dem. MarkupCraft kan endnu ikke læse tekst fra billeder.
:::

## Skift mellem ark

- Klik på et ark i {{ui:Ark}}.
- Tryk {{key:PageDown}} for næste ark og {{key:PageUp}} for det forrige, eller brug pilene i linjen under arket.
- Skriv i {{ui:Søg i ark}}: en del af et nummer ("A-2"), et ord af titlen ("tag"), eller et filnavn. Listen indsnævres, mens du skriver ("4 af 42"). Tryk {{key:Enter}} for at åbne det første match. Ryd feltet for at se alle ark igen.

Hvert ark beholder sin egen zoom og position, indtil du lukker sættet.

## Zoom og panorér

:::mouse
- **Zoom:** drej hjulet over arket. Det zoomer omkring markøren. Eller tryk {{key:Plus}} og {{key:Minus}} (også med {{key:Mod}}), eller brug zoomknapperne. Skriv en præcis procentsats i zoomfeltet.
- **Tilpas:** {{ui:Tilpas side}} ({{key:Mod+0}}) viser hele arket; {{ui:Tilpas bredde}} ({{key:Mod+9}}) fylder bredden.
- **Panorér:** træk med midterknappen (hjulet), eller træk med højre knap, eller hold {{key:Space}} nede og træk, eller vælg {{ui:Panorér}} ({{key:H}}) og træk. Uden noget valgt flytter piletasterne også arket.
:::

:::mac mouse
På en Mac-trackpad zoomer tofingerscrolling (den scroller ikke arket). For at panorere, hold {{key:Space}} nede og træk med én finger, eller skift til {{ui:Panorér}} med {{key:H}}. Et knib zoomer i Chrome, Edge og Firefox.
:::

:::touch
- **Zoom og panorering:** læg to fingre på arket. Spred eller knib dem for at zoome omkring punktet mellem dem, og flyt dem sammen for at panorere. Begge sker samtidigt.
- **Panorér med én finger:** vælg {{ui:Panorér}} først. Med et hvilket som helst andet værktøj tegner eller vælger én finger.
- {{ui:Tilpas side}} og {{ui:Tilpas bredde}} er i linjen under arket.
:::

Du kan zoome langt ud over hele arket og ind til 6400 %. Arket tegnes skarpt igen et øjeblik efter, du stopper med at bevæge dig.

## Bogmærker

{{ui:Bogmærker}} øverst i panelet {{ui:Ark}} viser bogmærkerne (oversigten) i den PDF, det åbne ark hører til. Vælg et for at gå til dets side. Blyanten omdøber et bogmærke, og krydset fjerner det. {{ui:Byg ud fra ark}} laver ét bogmærke pr. ark, navngivet som arklisten viser dem (arknummer og titel), og {{ui:Tilføj for dette ark}} tilføjer ét for det ark, du er på. Ændringer er en del af filens ikke-gemte arbejde: {{ui:Gem}} skriver dem ind i kopien, hvor alle PDF-fremvisere viser dem.

## Drej visningen

De to drejeknapper til højre i linjen under arket drejer visningen en kvart omgang den ene eller den anden vej, for et ark tegnet på langs. Kun visningen drejes: PDF'en og dens markeringer bliver, som de er, og det næste ark åbnes, som dets PDF er (hvert ark husker sin egen drejning, mens sættet er åbent). Tekst, du tilføjer på en drejet visning, læses lodret, som du ser den. For at dreje selve siden i den gemte PDF, brug {{ui:Sider}}, derefter {{ui:Roter siden med uret}}; se [Udskriv og ændr siderne](topic:pages-and-printing).

## Omdøb et ark

Når et arks navn er forkert eller mangler:

1. Vis arket.
2. Tryk {{key:Esc}}, indtil intet er valgt, og værktøjet {{ui:Vælg}} er tændt. {{ui:Egenskaber}} viser nu arket.
3. Vælg {{ui:Omdøb ark}}.
4. Skriv {{ui:Arknummer}} og {{ui:Titel}}, og vælg {{ui:Gem}}.

Resultat: arklisten, linjen under arket og markeringslisten bruger alle det nye navn, og "Læst fra" siger "Indtastet manuelt". Omdøbning kan fortrydes med {{key:Mod+Z}}.

For at gå tilbage til det, filen siger, åbn {{ui:Omdøb ark}} igen, ryd begge felter, og vælg {{ui:Gem}}.

Når du gemmer, bliver et skrevet arknummer til sidens mærkat i PDF'en, så andre PDF-fremvisere også viser "A-101" i deres sidefelt. Hvis du giver en side i en fil et nummer, får hver side i filen en mærkat i kopien (dens skrevne nummer, ellers dens gamle mærkat, ellers dens sidenummer). En skrevet titel gemmes for MarkupCraft, men andre fremvisere viser den ikke.

## Tag PDF'en til TakeoffCraft, eller hent den hertil

Når TakeoffCraft er åbent på samme sted (labbet, Try eller de online-apps), har linjen under arket {{ui:Åbn i TakeoffCraft}}. Den åbner arkets PDF i TakeoffCraft i en ny fane, som den blev åbnet her, så du kan måle mængder på den. Dine markeringer bliver her; gem dem som sædvanligt.

TakeoffCrafts knap {{ui:MarkupCraft}} gør det samme den anden vej: PDF'en åbnes her, som om du havde valgt {{ui:Åbn}}. Hvis browseren blokerer den nye fane, så tillad pop-ups for dette site, og vælg knappen igen.
