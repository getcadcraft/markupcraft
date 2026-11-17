---
title: Een opleverlijst maken
summary: Zet markups om in genummerde opleveringspunten met een toegewezen persoon, een uiterlijke datum en een status, en exporteer de lijst.
keywords: opleverlijst, punch, puntenlijst, gebrek, veldproblemen, waarneming, toewijzen, toegewezen aan, uiterlijke datum, afsluiting, rondgang, nummer
from: b98b38e6
---

Een opleveringspunt is een markup met een nummer, een toegewezen persoon, een uiterlijke datum en een itemstatus. Het nummer wordt op het blad naast de markup getekend, zodat het afgedrukte blad en de lijst overeenkomen.

## Punten toevoegen

1. Markeer elk probleem op de bladen: een wolk, een aanwijzing, een notitie, wat dan ook.
2. Selecteer een of meer ervan (zie [Markups selecteren, verplaatsen en wijzigen](topic:select-and-edit)).
3. Open het tabblad {{ui:Opleverlijst}} en kies {{ui:Selectie aan de opleverlijst toevoegen}}, of kies {{ui:Aan de opleverlijst toevoegen}} in {{ui:Eigenschappen}}.

Resultaat: elke markup krijgt het volgende nummer (1, 2, 3…), in bladvolgorde en daarna in de volgorde waarin ze zijn getekend. Er verschijnt een genummerd label op het blad, en de statusbalk zegt "3 items aan de opleverlijst toegevoegd." Markups die al een nummer hebben, en alleen-lezen opmerkingen, worden overgeslagen.

## De details invullen

In het tabblad {{ui:Opleverlijst}} toont elk item zijn nummer, onderwerp, tekst, blad en status, met drie velden eronder. Dezelfde velden staan in {{ui:Eigenschappen}} onder "Opleverlijst" wanneer de markup is geselecteerd:

- {{ui:Toegewezen aan}}: een naam of vak, als vrije tekst.
- {{ui:Uiterlijk}}: een datum, uit de datumkiezer.
- {{ui:Itemstatus}}: Open, In uitvoering, Klaar voor beoordeling of Gesloten.

Klik op de kop van een item om er naar de plek op het blad te springen.

De itemstatus staat los van de beoordelingsstatus van de markup (Open, Geaccepteerd, Afgewezen, Voltooid). Gebruik de itemstatus voor het werk, en de beoordelingsstatus voor de opmerking.

## Een item verwijderen

Selecteer de markup en kies {{ui:Van de opleverlijst halen}} in {{ui:Eigenschappen}}. De markup blijft; alleen het nummer verdwijnt. Zolang de set open is, worden nummers niet hergebruikt: het volgende item krijgt het volgende nieuwe nummer, dus een gat betekent dat een item is verwijderd. Wanneer een bestand opnieuw wordt geopend, loopt de nummering verder vanaf het hoogste nummer erin.

## De lijst exporteren

Kies {{ui:CSV exporteren}} in het tabblad {{ui:Opleverlijst}}. U krijgt "<name> punch list.csv", met de kolommen Nr., Blad, Bestand, Pagina, Item, Opmerking, Toegewezen aan, Uiterlijk, Status, Markupstatus, Auteur en Gemaakt, op nummervolgorde. Open het in elk spreadsheetprogramma.

De opleveringsnummers, toegewezen personen, uiterlijke datums en itemstatussen worden ook in de gemarkeerde PDF bewaard, zodat ze terugkomen wanneer u hem opnieuw opent. Andere PDF-viewers tonen het nummerlabel als onderdeel van de markup. De BCF-export van de markuplijst bevat de toegewezen persoon en de uiterlijke datum ook (zie [BCF-grondbeginselen](topic:bcf-basics)).

## Op locatie met een tablet

Open de set op een iPad, loop de bouwplaats af, en zet bij elk probleem een {{ui:Notitie}} of teken een {{ui:Wolk}}. Voeg ze onderweg toe aan de opleverlijst en sla op voordat u vertrekt. Zie [Beoordelen op een iPad of touchscreen](topic:review-on-a-tablet).

Een opleverlijst als opgemaakt PDF- of spreadsheetrapport, en foto's die aan items zijn gehecht, zijn nog niet beschikbaar.
