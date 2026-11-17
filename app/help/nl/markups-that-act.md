---
title: Een markup een taak maken
summary: Geef een markup een toegewezene (een persoon of uw assistent), een vervaldag en een koppeling naar de tekening of het modelelement waar hij over gaat, en zie hem sluiten wanneer dat echt verandert.
keywords: taak, taken, toegewezene, assistent, vervaldatum, te laat, koppeling, sluit, gewijzigd, element, tekengebied, markups die handelen, MCP
from: 9e970202
---

Een taak is een markup die door iemand moet worden gedaan. Hij behoudt zijn plek op het blad en zijn draad, en voegt een titel, een toegewezene, een vervaldag, een status en, als u wilt, een koppeling naar het ding waar hij over gaat toe.

## Een taak maken

1. Selecteer een of meer markups.
2. Open het tabblad {{ui:Tasks}} en kies {{ui:Make selected a task}}.
3. Vul de titel in (die begint met de tekst van de markup), voor wie hij is ({{ui:Person}} of {{ui:Assistant}}, en een naam), een optionele vervaldag, en waarop moet worden gelet.

Een assistenttaak is werk voor de assistent die u aan MarkupCraft hebt gekoppeld (zie [MarkupCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants)). MarkupCraft bevat geen eigen assistent: hij toont alleen het werk en neemt de antwoorden van de assistent over. Kies {{ui:Assigned to}}, en daarna {{ui:Assistant}} in de lijst, om te zien wat erop wacht.

## Op een wijziging letten

- **De tekening binnen de markup.** MarkupCraft houdt de lijnen binnen het kader van de markup zoals ze nu zijn. Wanneer u een nieuwere herziening van dat blad opent (een tweede bestand met hetzelfde bladnummer, of dezelfde paginapositie), kies {{ui:Check now}}: als de lijnen in dat gebied meer dan een haarbreedte verschillen, wordt de taak gesloten.
- **Een modelelement.** Geef de app en het id van het element. Uw assistent leest het element met de eigen tools van de andere app en meldt het met `tasks_check`. Het eerste rapport wordt als beginstatus bewaard; een later rapport dat verschilt, sluit de taak. Een element dat is verwijderd, sluit hem ook.
- **Niets.** Een gewone taak die u met de hand afrondt.

Een gesloten taak krijgt de status Gereed, de markup wordt Voltooid, en een notitie in de draad zegt wat er is veranderd. Eén stap ongedaan maken heropent hem.

**Beperking:** de controle gaat ervan uit dat de nieuwere herziening dezelfde paginaoorsprong en paginagrootte gebruikt. Een blad dat op een andere grootte opnieuw is geplot, komt niet overeen, dus zijn taken sluiten niet. Bladen worden gekoppeld op bladnummer, anders op paginapositie; MarkupCraft schaalt de ene herziening niet om in de andere te passen.

Opnieuw plotten van dezelfde tekening met een nieuwe datumstempel, of lijnen die minder dan 1.5 punten zijn verschoven, telt niet als wijziging. Als er geen nieuwere herziening open is, blijft de taak open en zegt de statusbalk dat.

## De lijst

De lijst {{ui:Tasks}} kan worden gefilterd op status en op voor wie hij is, inclusief {{ui:Overdue}}. Een taak na zijn vervaldag verschijnt als waarschuwing in het Problemen-paneel. {{ui:CSV}} exporteert de lijst.

Taken worden met de markup in de PDF opgeslagen, en reizen via Live mee zoals de andere eigenschappen van markups.
