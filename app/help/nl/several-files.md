---
title: Met meerdere bestanden tegelijk werken
summary: Open veel pdf's als één set, zoek bladen over bestanden heen, kopieer markups ertussen en sla de kopie van elk bestand op.
keywords: meerdere bestanden, meerdere pdf's, plansetset, set, batch, veel bestanden, combineren, disciplines, architectonisch, constructief, werktuigbouwkundig, alles opslaan, sluiten
from: f59354ae
---

Een plansetje komt vaak als één pdf per discipline, of één pdf per blad. MarkupCraft behandelt alles wat u opent als **één set**.

## Samen openen

Selecteer alle pdf's tegelijk in de bestandskiezer, of zet ze allemaal neer op het bladgebied. Om er later meer toe te voegen, opent u ze op dezelfde manier; ze komen achteraan in de lijst {{ui:Bladen}}, in de volgorde waarin u ze opent.

Resultaat: "6 bestanden geopend (84 bladen in de set)." Elke pagina is een blad. Bladen met een bladnummer tonen "Blad A-101" onder hun naam; andere tonen het bestand en de pagina.

Er is geen opgeslagen "set"-bestand: de volgende keer opent u dezelfde pdf's opnieuw (de kopieën "(marked up)", als u ze heeft opgeslagen).

## Over de hele set

- **Een blad zoeken:** {{ui:Bladen zoeken}} zoekt in bladnummers, bladnamen en bestandsnamen van elk bestand. {{key:PageUp}} en {{key:PageDown}} lopen in volgorde door alle bladen van alle bestanden.
- **Markuplijst:** het tabblad {{ui:Markups}} toont markups uit elk bestand. Filter op {{ui:Blad}} om het te beperken. Het CSV-bestand heeft een kolom Bestand.
- **Puntenlijst:** één nummering voor de hele set.
- **Vergelijken:** het oude en het nieuwe blad kunnen uit verschillende bestanden komen.
- **Kopiëren en plakken:** {{key:Mod+C}} op het ene blad en {{key:Mod+V}} op een ander, in elk bestand. De kopie komt op dezelfde plek op de pagina, iets verschoven.

## Opslaan

Kies {{ui:Opslaan}}. Met meer dan één geopend bestand vraagt MarkupCraft:

- {{ui:Dit bestand}}: een kopie met markups van het bestand van het blad waarop u staat.
- {{ui:Elk gewijzigd bestand}}: een kopie van elk bestand met niet-opgeslagen wijzigingen. Elk wordt apart gedownload, als "<bestandsnaam> (marked up).pdf".
- {{ui:Annuleren}}

:::chromium
De eerste keer dat u meerdere bestanden tegelijk opslaat, vragen Chrome en Edge mogelijk of deze site meerdere bestanden mag downloaden. Kies {{ui:Toestaan}}; anders komt alleen de eerste kopie aan.
:::

:::safari
Safari vraagt misschien één keer per bestand. Op een iPad gaat elke kopie naar de app Bestanden.
:::

Een bestand waarvan de markups zijn opgeslagen, telt niet meer als gewijzigd; de andere tellen nog wel.

Exports naar CSV, BCF en de puntenlijst krijgen de naam van het **eerste** bestand dat u opende.

## Sluiten

{{ui:Sluiten}} sluit de hele set; er is nog geen manier om maar één bestand te sluiten. Als er iets niet is opgeslagen, vraagt het:

- {{ui:Annuleren}}: er gebeurt niets.
- {{ui:Sluiten zonder opslaan}}: niet-opgeslagen markups gaan verloren.
- {{ui:Eerst kopieën opslaan}}: slaat elk gewijzigd bestand op en sluit daarna.

Sluiten wist ook de ongedaan-maakgeschiedenis.

## Grote sets

- Bij het openen wordt de tekst van elke pagina gelezen om bladnummers te vinden, dus een set van 100 bladen duurt even. De statusbalk telt de bladen terwijl het gaat.
- Bladafbeeldingen in de lijst worden getekend zodra u erheen scrolt.
- Elke geopende pdf wordt in het geheugen van het browsertabblad bewaard. Wordt het tabblad traag, sluit dan andere zware tabbladen, of bekijk één discipline tegelijk.
- Het twee keer openen van hetzelfde bestand geeft twee kopieën van de bladen. Gebeurt dat, kies dan {{ui:Sluiten}} en open de set opnieuw.
