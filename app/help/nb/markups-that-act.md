---
title: Gjør en markering til en oppgave
summary: Gi en markering en tildelt (en person eller din assistent), en frist og en lenke til tegningen eller modellelementet den gjelder, og se den lukkes når det virkelig endrer seg.
keywords: oppgave, oppgaver, tildelt, assistent, frist, forfalt, lenke, lukkes, endret, element, tegningsområde, markeringer som virker, MCP
from: 9e970202
---

En oppgave er en markering som må utføres av noen. Den beholder sin plass på arket og sin tråd, og legger til en tittel, en tildelt, en frist, en tilstand og, hvis du vil, en lenke til det den handler om.

## Lag en oppgave

1. Velg én eller flere markeringer.
2. Åpne fanen {{ui:Oppgaver}} og velg {{ui:Gjør valgte til en oppgave}}.
3. Fyll ut tittelen (den starter fra markeringens tekst), hvem den er for ({{ui:Person}} eller {{ui:Assistent}}, og et navn), en valgfri frist, og hva som skal overvåkes.

En assistentoppgave er arbeid for assistenten du koblet til MarkupCraft (se [Bruk MarkupCraft med en KI-assistent](topic:use-with-ai-assistants)). MarkupCraft inneholder ingen assistent selv: den lister bare arbeidet og tar imot assistentens svar. Velg {{ui:Tildelt}}, og deretter {{ui:Assistent}} i listen, for å se hva som venter på den.

## Hold øye med en endring

- **Tegningen inne i markeringen.** MarkupCraft beholder linjene innenfor markeringens boks slik de er nå. Når du åpner en nyere revisjon av det arket (en andre fil med samme arknummer, eller samme sideposisjon), velg {{ui:Kontroller nå}}: hvis linjene i området avviker mer enn et hår, lukkes oppgaven.
- **Et modellelement.** Oppgi appen og elementets id. Assistenten leser elementet med den andre appens egne verktøy og rapporterer det med `tasks_check`. Den første rapporten beholdes som startstatus; en senere rapport som avviker, lukker oppgaven. Et element som er slettet, lukker den også.
- **Ingenting.** En vanlig oppgave som du fullfører for hånd.

En lukket oppgave merkes Ferdig, markeringen blir Fullført, og et notat i tråden sier hva som endret seg. Ett steg å angre gjenåpner den.

**Begrensning:** kontrollen forutsetter at den nyere revisjonen bruker samme sideopprinnelse og sidestørrelse. Et ark tegnet ut på nytt i en annen størrelse vil ikke samsvare, så oppgavene lukkes ikke. Ark kobles sammen etter arknummer, ellers etter sideposisjon; MarkupCraft skalerer ikke den ene revisjonen for å passe den andre.

Å tegne ut den samme tegningen på nytt med en ny datostempel, eller linjer som har flyttet seg mindre enn 1.5 punkt, regnes ikke som en endring. Er ingen nyere revisjon åpen, forblir oppgaven åpen, og statuslinjen sier det.

## Listen

Listen {{ui:Oppgaver}} kan filtreres etter tilstand og etter hvem den er for, inkludert {{ui:Forfalt}}. En oppgave som er forbi fristen, vises i panelet {{ui:Problemer}} som en advarsel. {{ui:CSV}} eksporterer listen.

Oppgaver lagres i PDF-en sammen med markeringen, og de reiser med Live på samme måte som de andre markeringsegenskapene.
