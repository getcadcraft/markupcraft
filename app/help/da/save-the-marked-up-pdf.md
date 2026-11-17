---
title: Gem den markerede PDF
summary: Download en kopi med alle markeringer skrevet ind som almindelige PDF-kommentarer, se hvad andre PDF-læsere viser, og fortsæt arbejdet senere.
keywords: gem, download, eksportér pdf, markeret, noteringer, kommentarer, del, send, emne, fortsæt arbejdet, genåbn, rundtur, udskriv
from: 4c198ebe
---

## Gem

1. Vælg {{ui:Gem}} i værktøjslinjen, eller tryk {{key:Mod+S}}.
2. Hvis flere filer er åbne, vælg {{ui:Denne fil}} (filen med arket, du er på) eller {{ui:Alle ændrede filer}}. Hver kopi downloades særskilt.
3. Vent, til »Gemmer <file>…« er færdig. Den første gemning i en session indlæser også PDF-skriveren.

Resultat: Din browser downloader »<name> (marked up).pdf«, og statuslinjen viser det: »Gemt A-Plans (marked up).pdf (24 markeringer, 18.2 MB). Den originale fil er uændret.« Prikken efter {{ui:Gem}} forsvinder.

**Din originale PDF ændres aldrig.** MarkupCraft skriver en ny fil. Hvor den havner, afhænger af din browsers downloadindstillinger (se [Filer MarkupCraft åbner og gemmer](topic:files#where-downloads-go)).

## Fortsæt arbejdet senere

Åbn kopien »(marked up)« næste gang, ikke originalen. Alt kommer tilbage og kan redigeres: markeringer, statusser, svar, mangelposter, hvert arks målestok og de arknavne, du har skrevet. Gemmer du igen, downloades en fil med samme navn »(marked up)«; din browser kan tilføje et nummer som »(1)«, hvis den gamle download stadig ligger i mappen. Erstat eller ryd selv op i gamle kopier.

MarkupCraft gemmer ikke PDF'en af sig selv. Mens du arbejder, gemmer den en gendannelseskopi i denne browser, så et nedbrud eller en lukket fane ikke mister dine markeringer: næste gang du åbner MarkupCraft, spørger den »Gendan dit arbejde?«. Se [Gendan dit arbejde](common:recover). Gem stadig, før du lukker; hvis du forsøger at forlade siden med ikke-gemte markeringer, spørger browseren først »Forlad siden?« (iPad Safari gør ikke).

## Hvad andre PDF-læsere ser

Hver markering skrives som en almindelig PDF-kommentar (notering) med sin egen tegning, så enhver PDF-læser viser den, udskriver den og lister den i sit kommentarpanel:

- **Udseendet er det samme** som i MarkupCraft: skyer med deres buer, pilespidser, stempler, tælleprikker, mangelnummer-mærker og målingsetiketter.
- **Detaljerne er standard:** forfatter, dato, emne, kommentarteksten og farver.
- **Skyer** er rektangel- eller polygonkommentarer med en skyet kant; **tekstfelter** og **henvisninger** er tekstfeltkommentarer; **noter** er post-it-noter; **pen**- og **fremhævningsstreger** er ink-kommentarer; **stempler** er stempelkommentarer.
- **Længder og arealer** er målingskommentarer, og hvert kalibreret ark har sin målestok med, så fremvisere, der forstår målinger, kan vise værdierne.
- **Svar** er svar på kommentaren, og **statusser** er gennemgangstilstande (Åben vises som ingen tilstand).
- **Arknumre**, du har skrevet, bliver de sidelabels, andre PDF-læsere viser.

Nogle få ting læses kun tilbage af MarkupCraft: mangelpostens ansvarlige og frist, postens status og nogle stiloplysninger. Andre programmer beholder dem, medmindre de omskriver kommentaren.

I et andet program kan kommentarer flyttes eller redigeres som alle andre. Hvis nogen gør det og sender filen tilbage, bruger MarkupCraft kommentarens nye position, når den åbner filen.

Fuld beskrivelse: [Hvad der gemmes i PDF'en](topic:what-the-pdf-keeps).

## Tegn der udskrives som »?«

Markeringstekst skrives med standardskriften Helvetica, som enhver PDF-læser har. Den dækker engelske og vesteuropæiske bogstaver (é, ñ, ü, ø og lignende), men ikke andre skriftsystemer, symboler uden for det sæt eller emojis. Den slags tegn vises fint i MarkupCraft, men udskrives som »?« i den gemte kopi, og gemmemeddelelsen tæller dem: »3 tegn uden for det vesteuropæiske sæt udskrives som "?" i kopien.« Stav ordene ud, eller brug en simpel erstatning (for eksempel »dia.« for diametertegnet).

## Filer, der ikke kan gemmes

- **Beskyttede PDF'er:** »Denne PDF er beskyttet (krypteret), så en markeret kopi kan ikke skrives. Bed om en ubeskyttet kopi.« Du kan stadig gennemgå den på skærmen og eksportere CSV og BCF.
- Hvis gemningen fejler af en anden grund, viser en boks med navnet »Kunne ikke gemme <file>« årsagen. Dine markeringer er stadig i fanen; intet går tabt, før du lukker den.

## Fladgørelse og udskrivning

Der findes endnu ingen fladgørelse (indbrænding af markeringer i siden) og ingen udskriftskommando. For at udskrive skal du åbne den gemte kopi i en PDF-læser og udskrive med kommentarerne vist.
