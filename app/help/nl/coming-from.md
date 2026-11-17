---
title: Komend van andere markupsoftware
summary: Hoe de gewoonten van een desktop-PDF-markupprogramma overeenkomen met MarkupCraft, en de verschillen waar mensen over struikelen.
keywords: overstappen, migreren, bekend, desktop pdf markup, gereedschapskist, markuslijst, overlay, sessies, profiel, sneltoetsen, verschillen
from: c8f323e1
---

Als u tekeningen beoordeelt in Bluebeam Revu (of PDF's becommentarieert in een ander desktop-PDF-programma), zal het grootste deel van MarkupCraft vertrouwd aanvoelen: wolken, aanwijzingen, een gereedschapskist, een markuslijst, statussen met reacties, geijkte metingen, bladoverlays. De manier waarop bestanden worden behandeld is het grote verschil, dus lees de volgende sectie ook als u de rest overslaat.

## De vijf verschillen die ertoe doen

1. **Opslaan maakt een nieuw bestand.** MarkupCraft draait in de browser en kan de PDF op uw schijf niet overschrijven. {{ui:Save}} downloadt "<name> (marked up).pdf" en het origineel blijft ongewijzigd. Open de volgende keer de kopie "(marked up)", en ruim oude kopieën zelf op.
2. **De PDF wordt opgeslagen wanneer u opslaat.** Tot dan bewaart een herstelkopie in deze browser uw markups bij een crash of een gesloten tabblad, en MarkupCraft biedt die de volgende keer aan. Het is een vangnet: sla de PDF op om de beoordeling te bewaren.
3. **Uw profiel staat in de browser.** Uw auteursnaam, gereedschapsinstellingen en gereedschapskist worden in deze browser op deze computer bewaard. Een andere browser of computer begint leeg, en websitegegevens wissen verwijdert ze. Exporteer uw gereedschapskist als back-up. Zie [Wat in deze browser blijft](topic:browser-storage).
4. **Nog geen gedeelde sessies.** Er is geen Live, gedeelde beoordelingssessie en geen cloudproject. De beoordeling reist mee in de PDF: opslaan, de kopie versturen, de volgende persoon reageert en slaat op.
5. **Schaal is per blad, en alleen per blad.** Er zijn geen viewports binnen een blad en geen "deze schaal op alle pagina's toepassen". Ijk elk blad dat u meet.

## Gewoonte voor gewoonte

| Wat u gewend bent | In MarkupCraft |
|---|---|
| Miniaturenpaneel, paginalabels | {{ui:Sheets}} links. Namen komen van paginalabels of worden van het titelblok gelezen; corrigeer ze met {{ui:Rename sheet}}. |
| Meerdere PDF's openen als set | Open ze allemaal tegelijk; ze worden één lijst. Er wordt geen setbestand opgeslagen: open de volgende keer dezelfde PDF's. |
| Gereedschapskist met gereedschapssets | Tabblad {{ui:Tools}}: één kist per browser, opgeslagen gereedschappen met stijl en onderwerp. Delen via {{ui:Export}} en {{ui:Import}} als JSON-bestand. Gereedschapssetbestanden van andere programma's kunnen niet worden geïmporteerd. |
| Eigenschappenpaneel | Tabblad {{ui:Properties}}: status, onderwerp, opmerking, stijl, reacties en opleverpunt op één plek. |
| Markuslijst met kolommen | Tabblad {{ui:Markups}} met filters voor blad, auteur, status en soort. CSV of BCF exporteren. Nog geen eigen kolommen en geen PDF- of werkboekoverzicht. |
| Status en beoordelingsstatus | {{ui:Status}}: Open, Geaccepteerd, Afgewezen, Voltooid. Geen eigen statussets. Opgeslagen als standaard beoordelingsstatussen. |
| Reacties op een markup | De draad met reacties in {{ui:Properties}}, met statuswijzigingen erin gelogd. Een verzonden reactie kan niet meer worden bewerkt. |
| Ijken, dan lengte, oppervlakte, telling | {{ui:Calibrate}}, {{ui:Length}} ({{key:M}}), {{ui:Area}} ({{key:Q}}, geeft oppervlakte en omtrek), {{ui:Count}} ({{key:U}}). Nog geen hoek, straal, volume, polylengte of uitsparingen. |
| Pagina's als overlay | Tabblad {{ui:Compare}}: rood voor oud, blauw voor nieuw, uitlijnen op twee punten. Geen automatische "documenten vergelijken"-wolken. |
| Stempels | {{ui:Stamp}} met zes ingebouwde stempels en eigen tekst, ondertekend met uw naam en de datum. Nog geen afbeeldings- of handtekeningstempels. |
| Opleverpunten of issues volgen | Tabblad {{ui:Punch list}}: genummerde items met toegewezene, vervaldatum en status; CSV-export. |
| Live samenwerkingssessie | Nog niet beschikbaar. Geef de opgeslagen PDF rond. |
| Platmaken | Nog niet beschikbaar. Markups blijven als opmerkingen die andere viewers kunnen tonen en afdrukken. |
| Lagen voor markups | Nog niet beschikbaar. Gebruik onderwerpen, auteurs en de lijstfilters om opmerkingen te sorteren. |
| Hyperlinks tussen bladen | Nog niet beschikbaar. |
| Spatiebalk om te verschuiven, wiel om te zoomen | Hetzelfde: houd {{key:Space}} vast en sleep; het wiel zoomt bij de aanwijzer. Het wiel scrolt nooit de pagina. |

## Toetsen die anders zijn

Veel eenletter-toetsen zijn wat u verwacht, maar controleer deze voordat uw vingers het voor u doen:

- {{key:K}} is {{ui:Callout}}, en {{key:Q}} is {{ui:Area}}. Als u Q voor aanwijzingen gewend bent, begint hier een oppervlakte.
- {{key:C}} is de rechthoekige {{ui:Cloud}}; {{key:Shift+C}} is {{ui:Free cloud}}.
- {{key:M}} is {{ui:Length}}, {{key:U}} is {{ui:Count}}, {{key:Y}} is {{ui:Polyline}}, {{key:G}} is {{ui:Polygon}}, {{key:I}} is {{ui:Highlight}}.
- {{key:Mod+D}} dupliceert de selectie (in plaats van de bladwijzer van de browser).
- {{key:Mod+Plus}} en {{key:Mod+Minus}} zoomen het blad, niet de browserpagina.
- Elke toets kan worden gewijzigd: zie hieronder.

:::tip
Als uw vingers Bluebeam Revu kennen, kies dan de menustijl {{ui:PDF review}} in {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}: een menubalk (Bestand, Bewerken, Beeld, Document, Markup, Meten, Venster) boven een rij beoordelingsgereedschappen, {{key:Q}} voor een aanwijzing, {{key:H}} voor de markeerstift, {{key:N}} voor een veelhoek, en de metingen op {{key:Alt+Shift}} met een letter. Elke toets kan daar ook worden gewijzigd. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).
:::

De volledige lijst staat in [Toetsenbord en muis](topic:keyboard).

## Dingen die anders werken dan u misschien verwacht

- **Gereedschappen blijven aan.** Na een wolk tekent u nog steeds wolken. {{key:Esc}} eenmaal wist de selectie, tweemaal keert terug naar {{ui:Select}}.
- **Tekst en aanwijzingen hebben tekst nodig.** Als u niets typt en afrondt, wordt geen markup toegevoegd. Notities blijven leeg.
- **Metingen hebben eerst een schaal nodig.** {{ui:Length}} en {{ui:Area}} schakelen over naar {{ui:Calibrate}} op een niet-geijkt blad en keren daarna terug.
- **Opmerkingen van andere programma's.** Rechthoeken, ellipsen, lijnen, polylijnen, veelhoeken, inkt, tekstvakken en plaknotities die elders zijn gemaakt, worden bewerkbare MarkupCraft-markups, en worden bij het opslaan opnieuw geschreven op MarkupCraft's manier (hun uiterlijk kan iets veranderen). Tekstmarkeringen, stempels van andere programma's en andere speciale soorten blijven alleen-lezen: u kunt erop reageren, maar ze niet wijzigen.
- **Tekens buiten de West-Europese letters** worden in de opgeslagen PDF als "?" afgedrukt. Zie [Het gemarkeerde PDF opslaan](topic:save-the-marked-up-pdf).
- **Stempeldatums** gebruiken UTC, dus een stempel die laat op de avond in Amerika is gemaakt, kan de datum van morgen tonen.
- **Metingen worden meegenomen** als standaard meetopmerkingen, en elk geijkt blad bewaart zijn schaal, dus een programma dat PDF-metingen leest kan ze meestal tonen. Het precieze gedrag hangt af van dat programma.

## Beide gebruiken

U kunt heen en weer gaan. Opmerkingen die elders zijn gemaakt, openen in MarkupCraft, en de PDF "(marked up)" opent in andere PDF-programma's met elke markup, reactie en status zichtbaar. Wat alleen MarkupCraft terugleest (toegewezene en vervaldatum van het opleverpunt, status van het item) wordt voor MarkupCraft in het bestand bewaard.
