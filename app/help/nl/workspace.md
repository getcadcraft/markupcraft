---
title: Een rondleiding door het scherm
summary: De werkbalk, de bladenlijst, het bladgebied, de vijf panelen rechts en de statusbalk, met de namen die op het scherm staan.
keywords: scherm, indeling, werkbalk, panelen, zijbalk, miniaturen, eigenschappen, statusbalk, interface, volledig scherm, thema, donkere modus
from: 18d82de6
---

MarkupCraft vult het browservenster. Van boven naar beneden en van links naar rechts:

## De balk helemaal bovenaan

De smalle balk boven alles hoort bij de CadCraft-familie, niet bij MarkupCraft zelf. Hij bevat:

- de naam van de app en welke versie u gebruikt,
- {{ui:Over MarkupCraft}}, dat de pagina van de app op de website opent,
- {{ui:Help}}, dat deze Help in een zijpaneel opent (of druk op {{key:F1}}),
- {{ui:Opslaan voor offline gebruik}}, dat MarkupCraft, de pdf-lezer en pdf-schrijver en deze Help in deze browser bewaart zodat de app zonder verbinding opent; er staat dan "Klaar voor offline gebruik" (zie [Offline werken](common:offline)),
- de knop voor de schermmodus ({{ui:Volledig scherm}}), en
- {{ui:Instellingen}} (of {{key:Mod+,}}), met een tabblad {{ui:MarkupCraft}} voor de eigen instellingen van deze app en {{ui:Algemeen}} voor de instellingen die elke CadCraft-app deelt (zie [MarkupCraft-instellingen](topic:settings)), en
- {{ui:Papier}} en {{ui:Model}}, het lichte en het donkere thema. In {{ui:Model}} worden de bladen licht op donker getekend; uw markups houden hun eigen kleuren.

De knop voor de schermmodus, of {{key:Ctrl+Shift+F}}, loopt door drie standen: normaal, volledig scherm en volledig scherm met verborgen balken. Zijn de balken verborgen, beweeg dan de aanwijzer naar de bovenrand van het scherm (of tik daar) en ze schuiven terug. Deze sneltoets gebruikt op elke computer de Control-toets, ook op een Mac.

:::note
In volledig scherm laat {{key:Esc}} de browser ook het volledige scherm verlaten. Als u alleen een tekenactie wilde annuleren, druk dan opnieuw op {{key:Ctrl+Shift+F}} om terug te gaan naar volledig scherm.
:::

## De werkbalk

Onder de bovenste balk zijn de gereedschappen gegroepeerd en van een label voorzien:

| Groep | Knoppen |
|---|---|
| Bestand | {{ui:Openen}}, {{ui:Opslaan}}, {{ui:Sluiten}} |
| Selecteren | {{ui:Selecteren}}, {{ui:Verschuiven}} |
| Tekenen | {{ui:Pen}}, {{ui:Markeerstift}}, {{ui:Lijn}}, {{ui:Pijl}}, {{ui:Rechthoek}}, {{ui:Ellips}}, {{ui:Polylijn}}, {{ui:Veelhoek}} |
| Herzien | {{ui:Wolk}}, {{ui:Vrije wolk}} |
| Annoteren | {{ui:Aanwijzing}}, {{ui:Tekst}}, {{ui:Notitie}}, {{ui:Stempel}} |
| Meten | {{ui:IJken}}, {{ui:Lengte}}, {{ui:Oppervlakte}}, {{ui:Tellen}} |
| Bewerken | {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}} en {{ui:Meer}}: {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Op dezelfde plaats plakken}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}}, {{ui:Niets selecteren}} |

Het gereedschap dat u gebruikt, ziet er ingedrukt uit. Houd de aanwijzer boven een knop om de toets te zien (bijvoorbeeld "Rechthoek (R)"); het menu {{ui:Meer}} toont de toets van elke opdracht ernaast. Knoppen die nu niets kunnen doen, zijn gedimd: {{ui:Kopiëren}} totdat u een markup selecteert, {{ui:Plakken}} totdat er iets is gekopieerd. Een klein puntje achter {{ui:Opslaan}} betekent dat sommige markups nog niet zijn opgeslagen. De volledige toetsenlijst staat in [Toetsenbord en muis](topic:keyboard).

Een gereedschap blijft actief nadat u ermee hebt getekend, zodat u meerdere wolken achter elkaar kunt tekenen. Druk op {{key:Esc}} (twee keer als de nieuwe markup nog geselecteerd is) of op {{key:V}} om terug te gaan naar {{ui:Selecteren}}.

## De bladenlijst (links)

{{ui:Bladen}} toont elke pagina van elke geopende pdf. Elke rij toont een klein plaatje van het blad, de naam, het bladnummer of het bestand en de pagina, en hoeveel markups het blad heeft. Het aantal achter de kop is het aantal bladen.

- Klik op een rij om dat blad te tonen.
- Typ in {{ui:Bladen zoeken}} om te filteren op bladnaam, bladnummer of bestandsnaam. Druk op {{key:Enter}} om de eerste overeenkomst te openen.

Bladnamen komen uit de pdf als die ze heeft. Zie [Een tekenset openen en tussen bladen wisselen](topic:open-a-plan-set).

## Het bladgebied (midden)

Het blad waaraan u werkt. Voordat er iets is geopend, staat er "Open een tekenset" met een knop {{ui:pdf's openen}}. Zet pdf-bestanden ergens hier neer om ze te openen.

Onder het blad staat een smalle balk met:

- de pijlen naar het vorige en volgende blad, en "3 van 12: A-101 — Plattegrond" (houd de aanwijzer erboven om het bestand en de pagina te zien),
- uitzoomen, het zoomvak (typ een percentage en druk op {{key:Enter}}; 100% is ware grootte op een gangbaar scherm), inzoomen,
- {{ui:Pagina passend}} en {{ui:Breedte passend}}.

Elk blad onthoudt zijn eigen zoom zolang de set open is.

Als u twee bladen vergelijkt, verschijnt hier een legenda: "Alleen op het oude blad", "Alleen op het nieuwe blad" en "Op beide". Zie [Twee revisies vergelijken](topic:compare-revisions).

## De panelen (rechts)

Vijf tabbladen:

| Tabblad | Wat het toont |
|---|---|
| {{ui:Eigenschappen}} | De geselecteerde markup: auteur, data, gemeten waarden, status, onderwerp, tekst, opmerking, stijl, de reacties en de opleverpost. Met een tekengereedschap aan en niets geselecteerd: de instellingen die nieuwe markups gebruiken. Met niets geselecteerd en {{ui:Selecteren}} aan: het blad, met nummer, titel, waar de naam vandaan is gelezen, papierformaat, schaal en {{ui:Blad hernoemen}}. |
| {{ui:Markups}} | Elke markup in de geopende set, met filters, en de exports {{ui:CSV}} en {{ui:BCF}}. Zie [De markuplijst](topic:markups-list-and-export). |
| {{ui:Opleverlijst}} | Genummerde opleverposten met uitvoerder, uiterste datum en status. Zie [Een opleverlijst maken](topic:punch-list). |
| {{ui:Gereedschap}} | De gereedschapskist: opgeslagen gereedschappen met stijl. Zie [De gereedschapskist](topic:tool-chest). |
| {{ui:Vergelijken}} | Twee bladen over elkaar leggen. Zie [Twee revisies vergelijken](topic:compare-revisions). |

## De statusbalk (onderaan)

- Links, waar de aanwijzer zich op het blad bevindt, in inches (of millimeters, in [Instellingen](topic:settings)) op het papier.
- In het midden berichten: wat een gereedschap hierna verwacht, wat zojuist is opgeslagen, waarom iets is geweigerd. **Lees dit als er iets niet gebeurt.**
- De schaalknop van het blad ("Niet geijkt", of de schaal). Klik erop om de schaal in te stellen. Zie [Een blad ijken en meten](topic:calibrate-and-measure).
- Uw naam ("Stel uw naam in" totdat u er een opgeeft). Klik erop om hem te wijzigen.

## Op een klein scherm

Onder ongeveer 1180 pixels breed worden de panelen smaller en worden de bladplaatjes kleiner. Op een scherm ter grootte van een telefoon komen de onderdelen onder elkaar: de werkbalk (schuif hem opzij), het blad, de statusbalk, de panelen en onderaan de bladenlijst. Een tablet in liggende stand behoudt de volledige indeling.
