---
title: Gør en markering til en opgave
summary: Giv en markering en modtager (en person eller din assistent), en forfaldsdag og et link til tegningen eller modelelementet den handler om, og se den lukke, når det virkelig ændrer sig.
keywords: opgave, opgaver, modtager, assistent, forfald, overskredet, link, lukker, ændret, element, tegneområde, markeringer der handler, MCP
from: 9e970202
---

En opgave er en markering, som nogen skal udføre. Den beholder sin plads på arket og sin tråd, og den tilføjer en titel, en modtager, en forfaldsdag, en tilstand og, hvis du vil, et link til det den handler om.

## Lav en opgave

1. Vælg en eller flere markeringer.
2. Åbn fanen {{ui:Opgaver}} og vælg {{ui:Gør det valgte til en opgave}}.
3. Udfyld titlen (den starter fra markeringens tekst), hvem den er til ({{ui:Person}} eller {{ui:Assistent}}, og et navn), en valgfri forfaldsdag og hvad der skal holdes øje med.

En opgave til assistenten er arbejde for den assistent, du har forbundet til MarkupCraft (se [Brug MarkupCraft med en AI-assistent](topic:use-with-ai-assistants)). MarkupCraft indeholder ingen assistent selv: det lister kun arbejdet og tager imod assistentens svar. Vælg {{ui:Tildelt}} og derefter {{ui:Assistent}} på listen for at se, hvad der venter på den.

## Hold øje med en ændring

- **Tegningen inde i markeringen.** MarkupCraft gemmer linjerne inde i markeringens boks, som de er nu. Når du åbner en nyere revision af det ark (en anden fil med samme arknummer, eller samme sideposition), vælg {{ui:Kontrollér nu}}: hvis linjerne i området afviger mere end et hår, lukkes opgaven.
- **Et modelelement.** Angiv appen og elementets id. Din assistent læser elementet med den andens apps egne værktøjer og rapporterer det med `tasks_check`. Den første rapport gemmes som udgangstilstand; en senere rapport, der afviger, lukker opgaven. Et element der er slettet, lukker den også.
- **Intet.** En almindelig opgave, du afslutter manuelt.

En lukket opgave markeres som Færdig, dens markering bliver Afsluttet, og et notat i tråden siger, hvad der ændrede sig. Ét fortrydelsestrin genåbner den.

**Begrænsning:** kontrollen går ud fra, at den nyere revision bruger samme sideudgangspunkt og sidestørrelse. Et ark, der er genudskrevet i en anden størrelse, matcher ikke, så dets opgaver lukkes ikke. Ark parres efter arknummer, ellers efter sideposition; MarkupCraft skalerer ikke den ene revision, så den passer til den anden.

Genudskrivning af den samme tegning med et nyt datostempel, eller linjer der er flyttet mindre end 1.5 pt, tæller ikke som en ændring. Hvis ingen nyere revision er åben, forbliver opgaven åben, og statuslinjen siger det.

## Listen

Listen {{ui:Opgaver}} kan filtreres efter tilstand og efter, hvem den er til, herunder {{ui:Overskredet}}. En opgave efter sin forfaldsdag vises som en advarsel i panelet Problemer. {{ui:CSV}} eksporterer listen.

Opgaver gemmes i PDF'en sammen med markeringen, og de følger med gennem Live ligesom de andre markeringsegenskaber.
