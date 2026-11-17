---
title: Stempler og klæbenotater
summary: Stempl et ark Godkendt, Revidér og indsend igen eller din egen tekst, og lav klæbenotater, der åbnes som pop-up-kommentarer.
keywords: stempel, billede, indsæt billede, sæt billede ind, skærmbillede, udklipsholder, logo, fotostempel, signatur, underskriv, godkendt, godkendt med bemærkninger, revidér og indsend igen, afvist, gennemset, ugyldig, brugerdefineret stempel, klæbenotat, notat, kommentar, pop-up
from: 76026792
---

## Stempl et ark

1. Vælg {{ui:Stempel}} ({{key:S}}).
2. I {{ui:Egenskaber}} til højre vælger du stemplet under {{ui:Stempel}}:
   - Godkendt
   - Godkendt med bemærkninger
   - Revidér og indsend igen
   - Afvist
   - Gennemset
   - Ugyldig
   - Brugerdefineret tekst… (skriv op til 60 tegn i feltet, der vises, og tryk derefter på {{key:Enter}} eller klik et andet sted)
3. Klik på arket, hvor stemplet skal stå. Eller træk en boks for at vælge størrelsen.

Resultat: et indrammet stempel med versaler og en anden linje »Af <dit navn>, <dato>«. Et klikket stempel får en størrelse, der passer til skærmen ved dit zoom, og holdes mellem en halv tomme og en tomme og en kvart tomme høj på det udskrevne ark.

Stemplet, du valgte, forbliver valgt til det næste, også efter at du har åbnet MarkupCraft igen i denne browser.

**Farverne følger betydningen:** Godkendt-stemplerne er grønne, Revidér og indsend igen orange, Afvist og Ugyldig røde, Gennemset blå og brugerdefinerede stempler lilla. Vælger du en anden farve i {{ui:Egenskaber}}, bevares den farve.

### Ændr et stempel senere

Vælg det, og vælg et andet stempel i {{ui:Egenskaber}}. Havde det stadig sin automatiske farve, skifter farven i takt med betydningen.

Navnet og datoen på stemplet er stemplets forfatter og den dag, det blev lavet. De ændres ikke, når du redigerer det, og stemplets forfatter kan ikke ændres. Vil du stemple i en andens navn, skal den person selv angive sit navn og stemple.

:::note
Datoen på et stempel er datoen i Koordineret universel tid (UTC). Sent om aftenen i Amerika eller tidligt om morgenen i Asien og Australien kan den vise den næste eller den forrige dag i forhold til dit ur. Tidspunktet for oprettelse, der vises i {{ui:Egenskaber}}, er i din egen tidszone.
:::

### Stempler du bruger ofte

Værktøjskassen indeholder et værktøj med stemplet »Godkendt med bemærkninger«, og du kan gemme ethvert stempel (dets ordlyd og farve) som et eget værktøj. Se [Værktøjskassen](topic:tool-chest).

Stempler med udfyldte felter (modtagelsesdato, projektnummer) er ikke lavet endnu.

## Stempl et billede eller din signatur

Stemplerlisten i {{ui:Egenskaber}} slutter med to valg mere:

- {{ui:Billede…}} beder om en PNG-, JPEG- eller SVG-fil på denne computer, eller en side i en PDF, fx et firmastempel eller et logo. Store billeder skaleres ned til 1600 pixel på deres længste side; en SVG-fil eller en PDF-side bliver til et billede af den størrelse.
- {{ui:Min signatur…}} åbner en signaturboks: underskriv med mus, pen eller finger, og vælg {{ui:Brug denne signatur}}. {{ui:Ryd}} starter forfra. {{ui:Brug et billede af en signatur…}} tager i stedet en scanning eller et foto af din signatur: MarkupCraft gør det hvide papir gennemsigtigt og beskærer billedet til blækket (for en PNG-fil spørger den først).

Klik derefter på arket for at placere det (et billede 3 in bredt, en signatur 2 in bredt), eller træk en boks for at tilpasse det; proportionerne bevares. Ændr størrelsen med dets håndtag som for enhver anden markering ({{key:Shift}} bevarer proportionerne).

Det sidste billede gemmes i denne browser, så det er klar næste gang; {{ui:Vælg et andet billede…}} erstatter det. Hver signatur, du tegner eller indlæser, gemmes under {{ui:Dine signaturer}} (op til otte, nyeste først): klik på en for at bruge den, eller på × for at fjerne den. Se [Hvad der gemmes i denne browser](topic:browser-storage).

I den gemte PDF er et billede en stempelkommentar, der viser billedet, så enhver PDF-fremviser viser og udskriver det. En signatur, der tegnes her, er et billede af din signatur, ikke en certificeret digital signatur.

## Indsæt et billede fra udklipsholderen

Kopiér et billede i et andet program, eller tag et skærmbillede til udklipsholderen, og tryk derefter {{key:Mod+V}} over arket. Det lander, hvor markøren er, højst 3 in bredt eller højt med bevarede proportioner, som en billedmarkering, du kan flytte og ændre størrelsen på. I den gemte PDF er det en stempelkommentar, der viser billedet, ligesom billederne ovenfor.

{{ui:Mere}} › {{ui:Sæt et billede ind}} i gruppen {{ui:Rediger}} gør det samme fra menuen; browseren spørger muligvis først. Når udklipsholderen ikke indeholder et billede, indsætter {{key:Mod+V}} kopierede markeringer som før.

## Indsæt et billede fra en fil

Vælg {{ui:Mere}} › {{ui:Indsæt et billede fra en fil…}} i gruppen {{ui:Rediger}} (eller {{ui:Indsæt et billede her…}} i genvejsmenuen), og vælg en PNG-, JPEG- eller SVG-fil eller en PDF (en PDF med flere sider spørger, hvilken der skal bruges). Du kan også trække en PNG-, JPEG- eller SVG-fil over på arket: den lander, hvor du slipper den. Billedet er en markering, højst 3 in bredt eller højt: flyt og ændr størrelsen på det som enhver anden.

For at gøre et billede til en del af siden skal du sætte kryds ved {{ui:Fladgør ind i siden ved gemning}} i {{ui:Egenskaber}}. Se [Gem en fladgjort kopi](topic:flatten).

## Lav et stempel af et valg

Vælg markeringer (eller sideindhold med værktøjet {{ui:Indhold}}), og vælg {{ui:Gem valget som stempel…}} i {{ui:Mere}}, i genvejsmenuen, eller {{ui:Gem som stempel…}} i {{ui:Egenskaber}}. Giv det et navn. Det går ind i værktøjskassen: klik på det der, og klik derefter på et hvilket som helst ark for at placere alt, du valgte, samlet, centreret, hvor du klikker. Se [Værktøjskassen](topic:tool-chest).

## Klæbenotater

1. Vælg {{ui:Notat}} ({{key:N}}).
2. Klik, hvor noten skal stå. Et lille notatikon vises med en boks ved siden af.
3. Skriv noten. Klik udenfor, eller tryk {{key:Mod+Enter}}, for at beholde den; {{key:Esc}} kasserer den.

Modsat tekst og henvisninger bevares en note, også hvis du ikke skriver noget, så du kan placere ikonet nu og skrive senere.

- Notens ord er dens felt {{ui:Notat}} i {{ui:Egenskaber}}. Dobbeltklik på ikonet (eller vælg det og tryk {{key:Enter}}) for at redigere dem på arket.
- På arket ser du kun ikonet. Andre PDF-fremvisere viser en standard klæbenote, der åbnes med teksten, når man klikker på den.
- Skift ikonets farve med {{ui:Farve}} i {{ui:Egenskaber}}.

Til frem-og-tilbage-diskussion skal du i stedet bruge svartråden på en markering: se [Statusser og svar](topic:statuses-and-replies).
