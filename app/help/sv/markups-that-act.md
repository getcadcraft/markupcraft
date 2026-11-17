---
title: Gör en markering till en uppgift
summary: Ge en markering en tilldelad (en person eller din assistent), en förfallodag och en länk till ritningen eller modellelementet den handlar om, och se den stängas när det verkligen ändras.
keywords: uppgift, uppgifter, tilldelad, assistent, förfallodatum, försenad, länk, stängs, ändrad, element, ritningsområde, markeringar som agerar, MCP
from: 9e970202
---

En uppgift är en markering som någon måste utföra. Den behåller sin plats på bladet och sin tråd, och den lägger till en titel, en tilldelad, en förfallodag, ett tillstånd och, om du vill, en länk till det den handlar om.

## Gör en uppgift

1. Markera en eller flera markeringar.
2. Öppna fliken {{ui:Tasks}} och välj {{ui:Make selected a task}}.
3. Fyll i titeln (den börjar med markeringens text), vem uppgiften är till för ({{ui:Person}} eller {{ui:Assistant}}, och ett namn), en valfri förfallodag och vad som ska bevakas.

En assistentuppgift är arbete för assistenten du kopplat till MarkupCraft (se [Använd MarkupCraft med en AI-assistent](topic:use-with-ai-assistants)). MarkupCraft innehåller ingen assistent själv: den listar bara arbetet och tar emot assistentens svar. Om du väljer {{ui:Assigned to}} och sedan {{ui:Assistant}} i listan visas vad som väntar på den.

## Bevaka en ändring

- **Ritningen inuti markeringen.** MarkupCraft behåller linjerna inuti markeringens ruta som de är nu. När du öppnar en nyare revision av det bladet (en andra fil med samma bladnummer, eller samma sidposition), välj {{ui:Check now}}: om linjerna i området skiljer sig mer än ett hårstrå stängs uppgiften.
- **Ett modellelement.** Ange appen och elementets id. Din assistent läser elementet med den andra appens egna verktyg och rapporterar det med `tasks_check`. Den första rapporten sparas som utgångsläge; en senare rapport som skiljer sig stänger uppgiften. Ett element som togs bort stänger den också.
- **Inget.** En vanlig uppgift som du avslutar för hand.

En stängd uppgift markeras som Klar, dess markering blir Slutförd, och en anteckning i tråden säger vad som ändrades. Ett steg av ångra öppnar den igen.

**Begränsning:** kontrollen förutsätter att den nyare revisionen använder samma sidursprung och sidstorlek. Ett blad som ritats om i en annan storlek matchar inte, så dess uppgifter stängs inte. Blad paras ihop efter bladnummer, annars efter sidposition; MarkupCraft skalar inte den ena revisionen för att passa den andra.

Att rita om samma ritning med en ny datumstämpel, eller linjer som flyttats mindre än 1.5 points, räknas inte som en ändring. Om ingen nyare revision är öppen förblir uppgiften öppen, och statusfältet säger det.

## Listan

Listan {{ui:Tasks}} kan filtreras efter tillstånd och efter vem uppgiften är till för, inklusive {{ui:Overdue}}. En uppgift som passerat sin förfallodag visas i panelen Problem som en varning. {{ui:CSV}} exporterar listan.

Uppgifter sparas i PDF-filen tillsammans med markeringen, och de följer med {{ui:Live}}-delningen precis som de andra markeringsegenskaperna.
