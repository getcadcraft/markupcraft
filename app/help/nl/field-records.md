---
title: RFI's, submittals en dagelijkse logboeken bijhouden
summary: Zet RFI's, submittals en dagelijkse logboeken op de bladen, met nummers, toegewezen personen, vervaldatums en draden; filter wat verlopen is; exporteer CSV of BCF; werk offline en voeg kopieën samen.
keywords: rfi, verzoek om informatie, submittal, dagelijks logboek, veldrapport, bouwdagboek, bouw, verlopen, vervaldatum, aan mij toegewezen, draad, bijlage, samenvoegen, offline, tablet, bcf, csv, veld
from: 95039c5a
---

Het tabblad {{ui:Veld}} houdt drie soorten records naast uw markups bij. Elk record is gekoppeld aan een blad; een RFI of een submittal heeft ook een pin op de plek op het blad waar het over gaat.

- **RFI**: een vraag aan het ontwerpteam. Statussen: Open, Beantwoord, Gesloten.
- **Submittal**: iets dat beoordeeld moet worden voordat het werk verdergaat. Statussen: Open, In beoordeling, Goedgekeurd, Goedgekeurd met opmerkingen, Herzien en opnieuw indienen, Gesloten.
- **Dagelijks logboek**: het weer van die dag, het aantal personen op de bouwplaats en het uitgevoerde werk. Statussen: Concept, Definitief.

Elk record heeft een eigen nummer binnen zijn soort (RFI-0001, SUB-0001, LOG-0001), een titel, tekst, een toegewezen persoon, een vervaldatum, een draad met reacties en een lijst met bijlagenamen.

## Er een toevoegen

1. Open het tabblad {{ui:Veld}} en kies {{ui:RFI}} of {{ui:Submittal}}.
2. Tik of klik op het blad waar het hoort. Er verschijnt een pin en het record wordt in het tabblad geopend.
3. Vul de titel in, de vraag of beschrijving, aan wie het is toegewezen en wanneer het moet zijn afgerond.

Een dagelijks logboek wordt zonder pin aan het open blad toegevoegd. {{ui:Pin plaatsen}} plaatst er later een; {{ui:Pin verplaatsen}} verplaatst elke pin. Als u op een pin op het blad tikt, wordt het bijbehorende record geopend.

## Beantwoorden en bijhouden

Wijzig de {{ui:Status}} en de wijziging wordt in de draad vastgelegd. Schrijf een reactie en kies {{ui:Reactie verzenden}} (Ctrl+Enter verzendt ook). Bijlagen zijn alleen namen: typ er een in of kies bestanden, en de lijst laat het team zien wat bij het record hoort. De bestanden zelf blijven waar ze zijn.

Een record waarvan de vervaldatum is verstreken en dat nog wacht op een besluit (een RFI die niet Beantwoord of Gesloten is, of een submittal waarover nog niet is beslist), wordt in de lijst en op de pin als **Verlopen** in rood gemarkeerd.

## Vind wat belangrijk is

De filters staan boven de lijst: type, status, vervaldatum (verlopen, binnen 7 dagen, wel of geen vervaldatum), dit blad of alle bladen, een tekstzoekopdracht, en {{ui:Aan mij toegewezen}}. Dat laatste vergelijkt de toegewezen persoon met de naam waarmee MarkupCraft u kent (zie [Uw naam instellen](topic:set-your-name)). De regel onder de filters telt wat wordt getoond en wat verlopen is.

## Exporteren

{{ui:CSV}} schrijft de weergegeven records weg als spreadsheet. {{ui:BCF}} schrijft ze als BCF-onderwerpen, elk met een momentopname van de plek op het blad, zodat andere BCF-programma's ze kunnen tonen. Beide volgen de filters.

## Opslaan, offline en kopieën samenvoegen

Records worden in de PDF opgeslagen wanneer u die opslaat, en ze komen terug wanneer u de PDF opent. Er is geen netwerk nodig: toevoegen, bewerken, reageren en opslaan kunt u op een tablet in een kelder doen; breng de PDF daarna terug. Oudere PDF's en PDF's van andere programma's worden geopend zoals altijd.

Om twee kopieën samen te voegen, opent u er een en kiest u {{ui:Samenvoegen}}, en daarna de andere kopie van dezelfde PDF. Records worden samengevoegd op hun id's:

- een record dat maar in één kopie voorkomt, wordt toegevoegd;
- een record dat in beide voorkomt, krijgt zijn velden (titel, tekst, status, toegewezen persoon, vervaldatum) als geheel uit de kopie die het laatst is gewijzigd, dus als twee personen verschillende velden van hetzelfde record hebben gewijzigd, wint de versie van de latere kopie; draden en bijlagenamen uit beide kopieën worden samengevoegd;
- als beide kopieën hetzelfde nieuwe record van een nummer hebben voorzien, krijgt het record dat binnenkomt het eerstvolgende vrije nummer;
- een record dat in één kopie is verwijderd, blijft verwijderd, tenzij het daarna is bewerkt.

Een samenvoeging is één stap ongedaan maken.

## Beperkingen

- Records worden nog niet gedeeld via Live TeamWork; gebruik Samenvoegen.
- Er zijn in deze versie geen teams, meldingen of cloudprojecten voor records.
- Pagina's die uit de PDF worden verwijderd, nemen hun records mee (de bevestiging van de pagina telt ze).
