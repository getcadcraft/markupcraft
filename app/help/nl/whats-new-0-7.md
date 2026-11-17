---
title: Wat is er nieuw in 0.7 (eerder)
summary: RFI's, submittals en dagrapporten in een nieuw tabblad Veld, met vervaldatums, te late items in rood, CSV en BCF, offline werken en samenvoegen; assistenten die statussen instellen, reageren en de lijst exporteren; eenhedenlijsten die de Instellingen volgen; panelen die zich opruimen en dialoogvensters die verschuiven.
keywords: wat is er nieuw 0.7, eerdere uitgave, releasenotities, changelog, wijzigingen, 0.7, versie, nieuwe functies, veld, veldrecords, rfi, request for information, submittal, dagrapport, bouwdagboek, te laat, vervaldatum, aan mij toegewezen, pin, samenvoegen, offline, tablet, bcf, csv, assistent, mcp, markupstatus, reactie, exporteren, eenheden, eenhedenlijsten, ster, kalibreren, compact, panelen, dialoogvensters, portugees
from: f8578677
---

Dit is wat er is veranderd in MarkupCraft 0.7, vergeleken met 0.6. Het grote nieuwe is veldrecords: RFI's, submittals en dagrapporten die in de pdf naast uw markups worden bewaard.

## Nieuw

### RFI's, submittals en dagrapporten

- **Het tabblad Veld.** Open het tabblad {{ui:Veld}} en kies {{ui:RFI}}, {{ui:Submittal}} of {{ui:Dagrapport}}. Tik of klik op het blad waar een RFI of submittal hoort en een pin markeert de plek; een dagrapport komt op het open blad zonder pin ({{ui:Pin plaatsen}} voegt er later een toe, {{ui:Pin verplaatsen}} verplaatst elke pin). Elk record heeft een eigen nummer (RFI-0001, SUB-0001, LOG-0001), een titel, tekst, een status, een toegewezene, een vervaldatum, een draad met reacties en een lijst met bijlagenamen. Zie [Volg RFI's, submittals en dagrapporten](topic:field-records).
- **Zie wat te laat is.** Filter de lijst op type, status, vervaldatum (verlopen, binnen 7 dagen, met of zonder vervaldatum), dit blad of alle bladen, een tekstzoekopdracht, of {{ui:Aan mij toegewezen}}. Een record dat na zijn vervaldatum nog wacht, wordt op de lijst en op zijn pin in rood gemarkeerd als **Te laat**. Zie [Vind wat ertoe doet](topic:field-records#find-what-matters).
- **CSV en BCF.** {{ui:CSV}} schrijft de getoonde records als spreadsheet; {{ui:BCF}} schrijft ze als BCF-onderwerpen, elk met een momentopname van zijn plek op het blad. Beide volgen de filters. Zie [Exporteren](topic:field-records#export).
- **Offline, en twee kopieën worden één.** Records worden in de pdf opgeslagen en hebben geen netwerk nodig, zodat een tablet op de bouwplaats ze kan toevoegen, beantwoorden en opslaan. Terug op kantoor voegt {{ui:Samenvoegen}} de records van een andere kopie van dezelfde pdf samen op hun id's, als één ongedaan-maken-stap. Zie [Opslaan, offline werken en kopieën samenvoegen](topic:field-records#save-offline-and-merging-copies).

### AI-assistenten

- **Meer wat een assistent kan.** Uw eigen assistent, verbonden via CadCraft Studio, kan nu een markupstatus instellen (`markup_status`, gelogd in de draad), antwoorden in een draad (`markup_reply`) en de lijst {{ui:Markups}} exporteren als CSV of BCF (`markups_export`, wat de lijst met zijn filters toont). Elke wijziging is één ongedaan-maken-stap, ondertekend met de naam van de assistent. Zie [Wat een assistent kan vragen](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In elke app

- **Eenheden.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} heeft voor lengte, oppervlakte, volume, hoek en helling elk één lijst, met de exacte maten uit de definities van de eenheden (de US survey foot is een eigen eenheid). Schakel de eenheden die u nooit gebruikt uit en ze verdwijnen uit de eenhedenlijsten; zet er een ster op en nieuw werk begint erin. Een bestand houdt altijd zijn eigen eenheid. In MarkupCraft volgen de meet- en positie-eenheden in {{ui:Instellingen}} › {{ui:MarkupCraft}} en de eenheid in het kalibratievenster de schakelaars; de ster bepaalt de meeteenheid totdat u de eigen instellingen van MarkupCraft opslaat. De echte afstand die u bij het kalibreren typt, kan elke eenheidsaanduiding hebben, zoals `3 yd` of `1.5 km`. Zie [Eenheden, getypte waarden en de eenhedenlijsten](common:unit-lists).
- **Een compactere indeling en panelen die zich opruimen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Opmaakdichtheid}} › {{ui:Compact}} past meer op het scherm (touchschermen en telefoons houden hun grote knoppen). Elk zijpaneel heeft een smalle titelbalk: sleep die om het paneel vast te zetten of zwevend te maken, zet het op de balk van een ander paneel om één kader als tabbladen te delen, zet het vast om het naar de rand weg te laten schuiven, of verberg het en haal het weer terug van de rand. Zie [Panelen inrichten](common:arrange-panels#make-the-layout-denser).
- **Dialoogvensters verplaatsen.** Sleep een dialoogvenster aan de titelbalk uit de weg van de tekening; het komt terug waar u het liet. Dubbelklik op de titelbalk om het weer te centreren. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).
- **Recepten voor AI-assistenten.** Tien uitgewerkte verzoeken voor uw eigen assistent (een tekening opruimen, een set plotten, tekeningen controleren, modellen vragen stellen, een opmeting totaliseren, een onderdeelvariant proberen…), elk met de hulpmiddelen die het aanroept en de rechten die het nodig heeft, en elk herhaald door onze tests. De apps bevatten geen AI. Zie [Recepten voor AI-assistenten](common:assistants-recipes).
- **Talen.** **Português (Portugal)** is nieuw in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Taal}}. Deze, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** hebben nu elk woord van de apps, als concepten die nog niet door een native speaker zijn nagelezen. Help-onderwerpen zijn in het Engels.
- **CadCraft Studio** meldt waarom een updatecontrole mislukte (nog geen bestand voor uw systeem, geen netwerk, een ongeldige handtekening), in plaats van alleen "Gereed", en stopt met het terugbrengen van een kaart Wat is er nieuw die u hebt gesloten, totdat er een nieuwere uitgave is.

## Nog niet in deze versie

- **0.7 is niet codeondertekend.** Ondertekening en het Microsoft Store-pakket zijn naar 0.8 verschoven, omdat de certificaatvalidatie nog niet is doorgekomen. Controleer de SHA-256 naast elk bestand op getcadcraft.com/download. Op Windows: als SmartScreen het installatieprogramma stopt, kies {{ui:Meer informatie}} en dan {{ui:Toch uitvoeren}}. Op een Mac: klik de eerste keer met de rechtermuisknop op CadCraft Studio en kies {{ui:Openen}}. CadCraft Studio staat nog niet in een appwinkel, en er is nog geen iPad- of iPhone-versie.
- De hoek- en helling-lijsten in {{ui:Eenheden}} worden opgeslagen, maar nog geen enkel vak leest ze.
- Veldrecords worden niet gedeeld in een CadCraft Studio-livesessie (livesessies brengen alleen markups over); breng kopieën samen met {{ui:Samenvoegen}}.
- Samenvoegen neemt een record als geheel uit de laatst gewijzigde kopie: als twee personen verschillende velden van één record hebben gewijzigd, winnen de velden van de latere kopie. Draden en bijlagenamen worden samengevoegd.
- Bijlagen zijn alleen namen; de bestanden blijven waar ze zijn. Er zijn voor records geen teams, meldingen of cloudprojecten, en assistenten hebben nog geen hulpmiddelen voor records.
- Veldrecords zijn in een browser getest op telefoon- en tabletformaat, met de netwerkverbinding verbroken, maar nog niet met de hand op een echte tablet.
- Nog uit 0.6: pagina-objecten naar elke hoek draaien, nieuwe vormen rechtstreeks op de pagina tekenen, het lettertype of de grootte van een lijn wijzigen, en tekst die over meerdere regels loopt. Een opgeslagen kopie met paginabewerkingen is nog niet in Acrobat geopend.
- Nog uit 0.5: een paginawijziging ongedaan maken (zoals een lege pagina toevoegen), tekst van gescande bladen lezen, en livesessies buiten uw eigen netwerk.

Al het overige staat in [Wat nog niet beschikbaar is](topic:not-built-yet).
