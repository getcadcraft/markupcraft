---
title: MarkupCraft gebruiken met een AI-assistent
summary: Laat uw eigen AI-assistent of script de markups van een set weergeven, eenvoudige markups toevoegen, hun status instellen, reageren en de lijst exporteren, met rechten, verbinden via CadCraft Studio en het activiteitenlogboek.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, markups, review, rechten, verbreken, activiteit
from: 095f2977
---

## Wat u leert

Hoe u een AI-assistent (of een script dat u zelf schreef) met MarkupCraft laat werken, en hoe u bepaalt wat die mag aanraken.

MarkupCraft heeft **geen eigen AI** en stuurt niets ergens heen. U brengt de assistent mee: elk programma dat het Model Context Protocol (MCP) spreekt. MarkupCraft geeft er alleen tools aan, en u kiest welke.

## Zet het aan

1. Open {{ui:Instellingen}} (het tandwiel in de appbalk, of {{key:Mod+,}}) en ga naar het tabblad {{ui:MarkupCraft}}.
2. Vink onder {{ui:Assistenten}} **AI-assistenten en scripts MarkupCraft laten gebruiken** aan. Het staat uit totdat u dat doet.
3. Kies wat het mag doen: **Lezen** staat in het begin aan; vink **Bewerken**, **Opslaan** of **Exporteren** alleen aan wanneer u ze nodig heeft.

Tools buiten de rechten die u aanvinkte, worden de assistent niet aangeboden. Vraagt hij er toch om, dan weigert MarkupCraft en schrijft het dit in het activiteitenlogboek. Het uitschakelen van de schakelaar beëindigt alle verbindingen in één keer; {{ui:MarkupCraft-instellingen opnieuw instellen}} schakelt hem ook uit.

## Uw assistent verbinden

Assistenten verbinden via **CadCraft Studio** op uw computer: Studio draait een kleine server die alleen deze computer kan bereiken, beschermd door een token dat het elke keer bij het starten maakt. Kies in Studio {{ui:Een assistent verbinden}} en kopieer het adres en het token naar uw assistent (Studio toont de precieze instellingen om te plakken). Deel het token nooit.

:::note
Een browsertabblad kan geen verbinding voor een assistent openen: in de browserapps heeft de schakelaar geen effect totdat u CadCraft Studio op uw computer gebruikt.
:::

## U houdt de regie

- **Elke wijziging is één stap ongedaan te maken**, met de naam van de assistent erbij (bijvoorbeeld "Assistent: cloudrect toevoegen"). {{key:Mod+Z}} haalt de laatste wijziging van de assistent in zijn geheel terug.
- **U weet wanneer er een verbonden is.** Een knop in de appbalk noemt de assistent zolang hij verbonden is; klik erop om te zien wat hij mag, of om hem te **verbreken**.
- **Activiteit.** {{ui:Instellingen}} › {{ui:MarkupCraft}} › {{ui:Assistenten}} › {{ui:Activiteit}} toont elke aanroep: wanneer, welke tool, en of die gelukt of geweigerd is. {{ui:Het logboek opslaan}} bewaart een kopie.

## Wat een assistent kan vragen

| Tool | Recht | Wat het doet |
|---|---|---|
| `app_info`, `sheets_list` | Lezen | De geopende sets, hun bladen en hoeveel markups elk heeft |
| `markups_list` | Lezen | De markups met type, blad, tekst, opmerking, meting, status, auteur en reacties, gefilterd op blad, status, type of auteur |
| `markup_add` | Bewerken | Voegt een rechthoek, wolk, ellips, tekstvak, notitie, lijn of pijl aan een blad toe |
| `markup_status`, `markup_reply` | Bewerken | Stelt de status van een markup in (vastgelegd in de draad, ondertekend door de assistent); voegt een opmerking aan een draad toe |
| `markups_export` | Exporteren | De CSV of BCF van de lijst {{ui:Markups}} van wat de lijst toont (de filters zoals u ze instelde); in Studio kan het bestand naar een map worden geschreven die u heeft toegestaan |
| `tasks_list` | Lezen | De markups die taken zijn: toegewezen aan (persoon of assistent), vervaldag, status, koppeling, en hoe ze zijn afgesloten. `assignee: "assistant"` toont het werk dat op een assistent wacht |
| `task_set`, `task_clear` | Bewerken | Maakt een markup een taak of wijzigt die (titel, toewijzing, vervaldag, status, koppeling); haalt de taak weg |
| `tasks_check` | Bewerken | Sluit taken waarvan het gekoppelde tekeninggebied of modelelement echt is gewijzigd; geef de elementstatussen door die u uit de andere app las |
| `revisions_changes` | Lezen | De eenvoudige lijst van wat er tussen twee geopende plansets is veranderd, om in uw eigen woorden te zetten |
| `pins_list`, `decision_add` | Lezen, Bewerken | Spraaknotities (lengte, wie, wanneer, onderschrift; nooit het geluid, geen transcriptie) en besluiten; een besluit vastpinnen en een eerder besluit vervangen |
| `redline_export`, `redline_answer` | Exporteren, Bewerken | Schrijft het redline-bestand voor de tekenaar; past de antwoorden van de tekenaar toe |

Een markup die een assistent toevoegt, noemt de assistent als auteur: de naam die het assistentprogramma zichzelf geeft, gevolgd door "(assistent)", of door "(assistent voor <uw naam>)" zodra u uw reviewernaam heeft ingesteld. Statuswijzigingen en reacties worden op dezelfde manier ondertekend. Elk is één stap ongedaan te maken. Het opslaan van de gemarkeerde PDF blijft bij u: gebruik {{ui:Opslaan}} zoals gewoonlijk.

Zonder MarkupCraft te openen, toont de CadCraft MCP-server de markups van een PDF in een map die u noemt (`markups_list`), en `cadcraft info Set.pdf` drukt ze af op de opdrachtregel.

## Als iets niet werkt

- **De assistent ziet geen MarkupCraft-tools:** controleer of de schakelaar in dit venster aan staat, en of het venster open is in Studio.
- **"heeft het bewerkingsrecht nodig":** vink **Bewerken** aan onder {{ui:Assistenten}} en vraag het opnieuw.
- **"401"- of "token"-fouten:** het token is gewijzigd (Studio is opnieuw gestart, of er is een {{ui:Nieuw token}}). Kopieer het nieuwe token naar de instellingen van de assistent.

## Zie ook

- [Recepten voor AI-assistenten](common:assistants-recipes): uitgewerkte voorbeelden, elk met de tools die ze aanroepen.
