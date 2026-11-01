---
title: Wat is er nieuw in 0.7
summary: RFI's, submittals en dagrapporten in een nieuw tabblad Veld, met uiterste datums, te late in rood, CSV en BCF, offline werken en Samenvoegen; assistenten die statussen instellen, reageren en de lijst exporteren; eenhedenlijsten die Instellingen volgen; panelen die opschuiven en dialoogvensters die verplaatsbaar zijn.
keywords: wat is er nieuw, release-opmerkingen, wijzigingslogboek, wijzigingen, 0.7, versie, nieuwe functies, veld, veldrecords, rfi, request for information, submittal, dagrapport, bouwdagboek, te laat, uiterste datum, aan mij toegewezen, pin, samenvoegen, offline, tablet, bcf, csv, assistent, mcp, markupstatus, reactie, exporteren, eenheden, eenhedenlijsten, ster, ijken, compact, panelen, dialoogvensters, portugees
from: 142e1a1e
---

Dit is wat er in MarkupCraft 0.7 is veranderd ten opzichte van 0.6. Het grote nieuwe is veldrecords: RFI's, submittals en dagrapporten die in de pdf naast uw markups worden bewaard.

## Nieuw

### RFI's, submittals en dagrapporten

- **Het tabblad Veld.** Open het tabblad {{ui:Veld}} en kies {{ui:RFI}}, {{ui:Submittal}} of {{ui:Dagrapport}}. Tik of klik op het blad waar een RFI of submittal bij hoort en een pin markeert de plek; een dagrapport komt zonder pin op het geopende blad ({{ui:Pin plaatsen}} voegt er later een toe, {{ui:Pin verplaatsen}} verplaatst elke pin). Elk record heeft een eigen nummer (RFI-0001, SUB-0001, LOG-0001), een titel, tekst, een status, een uitvoerder, een uiterste datum, een draad met reacties en een lijst met namen van bijlagen. Zie [RFI's, submittals en dagrapporten bijhouden](topic:field-records).
- **Zie wat te laat is.** Filter de lijst op type, status, uiterste datum (te laat, binnen 7 dagen, met of zonder uiterste datum), dit blad of alle bladen, een tekstzoekopdracht of {{ui:Aan mij toegewezen}}. Een record dat na de uiterste datum nog open staat, wordt als **Te laat** gemarkeerd, in rood, in de lijst en op de pin. Zie [Vind wat ertoe doet](topic:field-records#find-what-matters).
- **CSV en BCF.** {{ui:CSV}} schrijft de weergegeven records als spreadsheet; {{ui:BCF}} schrijft ze als BCF-topics, elk met een momentopname van de plek op het blad. Beide volgen de filters. Zie [Exporteren](topic:field-records#export).
- **Offline, en twee kopieën samengevoegd tot één.** Records worden in de pdf opgeslagen en hebben geen netwerk nodig, dus een tablet op de bouwplaats kan ze toevoegen, beantwoorden en opslaan. Terug op kantoor voegt {{ui:Samenvoegen}} de records van een andere kopie van dezelfde pdf samen op basis van hun id's, als één stap ongedaan maken. Zie [Opslaan, offline en kopieën samenvoegen](topic:field-records#save-offline-and-merging-copies).

### AI-assistenten

- **Meer dat een assistent kan doen.** Uw eigen assistent, verbonden via CadCraft Studio, kan nu de status van een markup instellen (`markup_status`, vastgelegd in de draad), in een draad reageren (`markup_reply`) en de lijst {{ui:Markups}} als CSV of BCF exporteren (`markups_export`, wat de lijst met zijn filters toont). Elke wijziging is één stap ongedaan maken, ondertekend met de naam van de assistent. Zie [Wat een assistent kan vragen](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In elke app

- **Eenheden.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} heeft een lijst voor lengte, oppervlakte, volume, hoek en helling, met de exacte maten uit de definities van de eenheden (de Amerikaanse landmeetvoet is een eigen eenheid). Schakel eenheden uit die u nooit gebruikt en ze verdwijnen uit de eenhedenlijsten; markeer er een met een ster en nieuw werk begint daarin. Een bestand behoudt altijd zijn eigen eenheid. In MarkupCraft volgen de meet- en positie-eenheden in {{ui:Instellingen}} › {{ui:MarkupCraft}} en de eenheid in het ijkvenster de schakelaars, stelt de ster de meeteenheid in totdat u de eigen instellingen van MarkupCraft opslaat, en kan de werkelijke afstand die u bij het ijken typt het teken van elke eenheid dragen, zoals `3 yd` of `1.5 km`. Zie [Eenheden, getypte waarden en de eenhedenlijsten](common:unit-lists).
- **Een compactere indeling en panelen die opschuiven.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Opmaakdichtheid}} › {{ui:Compact}} past meer op het scherm (aanraakschermen en telefoons houden hun grote knoppen). Elk zijpaneel heeft een smalle titelbalk: sleep hem om het paneel vast te zetten of zwevend te maken, zet hem neer op de balk van een ander paneel om één kader als tabbladen te delen, zet hem vast om naar de rand weg te schuiven, of verberg hem en haal hem terug vanaf de rand. Zie [De panelen indelen](common:arrange-panels#make-the-layout-denser).
- **Dialoogvensters verplaatsen.** Sleep een dialoogvenster aan de titelbalk weg van de tekening; het komt terug waar u het hebt gelaten. Dubbelklik op de titelbalk om het weer te centreren. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).
- **Recepten voor AI-assistenten.** Tien uitgewerkte verzoeken voor uw eigen assistent (een tekening opruimen, een set plotten, tekeningen controleren, een model vragen stellen, een opmeting totaliseren, een onderdeelvariant proberen…), elk met de gereedschappen die het aanroept en de rechten die het nodig heeft, en elk opnieuw afgespeeld door onze tests. De apps bevatten geen AI. Zie [Recepten voor AI-assistenten](common:assistants-recipes).
- **Talen.** **Português (Portugal)** is nieuw in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Taal}}. Die taal, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** hebben nu elk woord van de apps, als concepten die nog niet door een moedertaalspreker zijn gecontroleerd. De Help-onderwerpen zijn in het Engels.
- **CadCraft Studio** zegt waarom een controle op updates is mislukt (nog geen bestand voor uw systeem, geen netwerk, een ongeldige handtekening) in plaats van alleen "Gereed", en brengt een Wat is er nieuw-kaart die u hebt gesloten niet terug totdat er een nieuwere uitgave is.

## Nog niet in deze versie

- **0.7 is niet code-ondertekend.** Ondertekenen en het pakket voor de Microsoft Store zijn verplaatst naar 0.8 omdat de validatie van het certificaat nog niet rond is. Controleer de SHA-256 naast elk bestand op getcadcraft.com/download. Als SmartScreen op Windows het installatieprogramma tegenhoudt, kiest u {{ui:Meer informatie}} en dan {{ui:Toch uitvoeren}}. Op een Mac klikt u de eerste keer met de rechtermuisknop op CadCraft Studio en kiest u {{ui:Open}}. CadCraft Studio staat nog niet in een appstore en er is nog geen versie voor iPad of iPhone.
- De lijsten voor hoek en helling in {{ui:Eenheden}} worden opgeslagen, maar er leest nog geen vak ze.
- Veldrecords worden niet gedeeld in een live sessie van CadCraft Studio (live sessies bevatten alleen markups); breng kopieën samen met {{ui:Samenvoegen}}.
- Samenvoegen neemt een record als geheel over van de laatst gewijzigde kopie: als twee mensen verschillende velden van één record hebben gewijzigd, winnen de velden van de latere kopie. Draden en namen van bijlagen worden samengevoegd.
- Bijlagen zijn alleen namen; de bestanden blijven waar ze zijn. Er zijn geen teams, meldingen of cloudprojecten voor records, en assistenten hebben nog geen gereedschappen voor records.
- Veldrecords zijn getest in een browser op telefoon- en tabletformaat met het netwerk uitgeschakeld, maar nog niet met de hand op een echte tablet.
- Nog uit 0.6: paginaobjecten onder een willekeurige hoek draaien, nieuwe vormen rechtstreeks in de pagina tekenen, het lettertype of de grootte van een regel wijzigen, en tekst die over meerdere regels loopt. Een opgeslagen kopie met paginabewerkingen is nog niet in Acrobat geopend.
- Nog uit 0.5: een paginawijziging ongedaan maken (zoals een lege pagina toevoegen), tekst lezen uit gescande bladen, en live sessies buiten uw eigen netwerk.

Al het andere staat in [Wat nog niet beschikbaar is](topic:not-built-yet).
