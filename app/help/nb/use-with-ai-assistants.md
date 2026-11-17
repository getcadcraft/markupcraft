---
title: Bruk MarkupCraft med en KI-assistent
summary: La din egen KI-assistent eller ditt skript liste markeringene i et sett, legge til enkle, sette status, svare og eksportere listen: tillatelser, tilkobling via CadCraft Studio og aktivitetsloggen.
keywords: ki, assistent, agent, mcp, model context protocol, skript, automatisering, markeringer, gjennomgang, tillatelser, koble fra, aktivitet
from: 095f2977
---

## Hva du lærer

Hvordan du lar en KI-assistent (eller et skript du har skrevet) jobbe med MarkupCraft, og hvordan du bestemmer hva den har lov til å røre.

MarkupCraft har **ingen egen KI** og sender ingenting noe sted. Du tar med assistenten: ethvert program som snakker Model Context Protocol (MCP). MarkupCraft gir den bare verktøy, og du velger hvilke.

## Slå den på

1. Åpne {{ui:Innstillinger}} (tannhjulet i appens øverste linje, eller {{key:Mod+,}}) og gå til fanen {{ui:MarkupCraft}}.
2. Under {{ui:Assistenter}} huker du av **La KI-assistenter og skript bruke MarkupCraft**. Den er av til du gjør det.
3. Velg hva den kan gjøre: **Les** er avhuket fra start; huk av **Rediger**, **Lagre** eller **Eksporter** bare når du trenger dem.

Verktøy utenfor tillatelsene du har huket av, tilbys ikke assistenten, og hvis den likevel ber om ett, avviser MarkupCraft det og skriver det i aktivitetsloggen. Å slå av bryteren avslutter alle tilkoblinger med en gang; {{ui:Tilbakestill MarkupCraft-innstillinger}} slår den også av.

## Koble til assistenten

Assistenter kobler seg til via **CadCraft Studio** på datamaskinen din: Studio kjører en liten server som bare denne datamaskinen kan nå, beskyttet med en token som den lager hver gang den starter. I Studio velger du {{ui:Koble til en assistent}} og kopierer adressen og tokenet inn i assistenten din (Studio viser de nøyaktige innstillingene å lime inn). Del aldri tokenet.

:::note
En nettleserfane kan ikke åpne en tilkobling for en assistent: i nettleserappene har bryteren ingen effekt før du bruker CadCraft Studio på datamaskinen din.
:::

## Du har kontroll

- **Hver endring er ett angre-steg**, merket med assistentens navn for den (for eksempel «Assistent: legg til cloudrect»). {{key:Mod+Z}} tar tilbake assistentens siste endring samlet.
- **Du vet når en er tilkoblet.** En knapp i appens øverste linje nevner assistenten mens den er tilkoblet; klikk på den for å se hva den kan gjøre, eller for å **koble fra** den.
- **Aktivitet.** {{ui:Innstillinger}} › {{ui:MarkupCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} lister hvert kall: når, hvilket verktøy, utført eller avvist. {{ui:Lagre loggen}} beholder en kopi.

## Hva en assistent kan be om

| Verktøy | Tillatelse | Hva det gjør |
|---|---|---|
| `app_info`, `sheets_list` | Les | Settene som er åpne, arkene deres og hvor mange markeringer hvert har |
| `markups_list` | Les | Markeringene med type, ark, tekst, kommentar, måling, status, forfatter og svar, filtrert etter ark, status, type eller forfatter |
| `markup_add` | Rediger | Legger til et rektangel, en sky, en ellipse, en tekstboks, et notat, en linje eller en pil på et ark |
| `markup_status`, `markup_reply` | Rediger | Setter status på en markering (logget i tråden, signert av assistenten); legger til en kommentar i en tråd |
| `markups_export` | Eksporter | CSV- eller BCF-filen til listen {{ui:Markeringer}} over det listen viser (filtrene slik du har satt dem); i Studio kan den skrive filen til en mappe du har tillatt |
| `tasks_list` | Les | Markeringene som er oppgaver: ansvarlig (person eller assistent), forfallsdag, tilstand, lenke, hvordan den ble lukket. `assignee: "assistant"` lister arbeidet som venter på en assistent |
| `task_set`, `task_clear` | Rediger | Gjør en markering til en oppgave eller endrer den (tittel, ansvarlig, forfall, tilstand, lenke); fjern oppgaven |
| `tasks_check` | Rediger | Lukk oppgaver der det koblede tegningsområdet eller modellelementet faktisk er endret; send inn elementtilstandene du leste fra det andre programmet |
| `revisions_changes` | Les | Den enkle listen over hva som er endret mellom to åpne plansett, for å formulere med egne ord |
| `pins_list`, `decision_add` | Les, Rediger | Talenotater (lengde, hvem, når, bildetekst; aldri lyden, ingen transkripsjon) og beslutninger; fest en beslutning og erstatt en tidligere |
| `redline_export`, `redline_answer` | Eksporter, Rediger | Skriv rødstrekfilen for tegneren; bruk tegnerens svar |

En markering en assistent legger til, oppgir den som forfatter: navnet assistentprogrammet gir seg selv, etterfulgt av «(assistent)», eller «(assistent for <ditt navn>)» når du har angitt gjennomgåernavnet ditt. Statusendringer og svar signeres på samme måte. Hver er ett angre-steg. Å lagre den markerte PDF-filen er fortsatt din oppgave: bruk {{ui:Lagre}} som vanlig.

Uten å åpne MarkupCraft lister CadCraft MCP-serveren markeringene i en PDF i en mappe du oppgir (`markups_list`), og `cadcraft info Set.pdf` skriver dem ut i kommandolinjen.

## Hvis noe ikke fungerer

- **Assistenten ser ingen MarkupCraft-verktøy:** sjekk at bryteren er på i dette vinduet, og at vinduet er åpent i Studio.
- **«trenger redigeringstillatelsen»:** huk av **Rediger** under {{ui:Assistenter}}, og spør igjen.
- **Feil «401» eller «token»:** tokenet er endret (Studio startet på nytt, eller {{ui:Ny token}}). Kopier det nye inn i assistentens innstillinger.

## Se også

- [Oppskrifter for KI-assistenter](common:assistants-recipes): eksempler med fremgangsmåte, hver med verktøyene den kaller.
