---
title: Brug MarkupCraft med en AI-assistent
summary: Lad din egen AI-assistent eller dit script liste markeringerne i et sæt, tilføje enkle, sætte deres status, svare og eksportere listen: tilladelser, forbindelse via CadCraft Studio og aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, markeringer, gennemgang, tilladelser, afbryd, aktivitet
from: 095f2977
---

## Hvad du lærer

Hvordan du lader en AI-assistent (eller et script, du har skrevet) arbejde med MarkupCraft, og hvordan du bestemmer, hvad den må røre ved.

MarkupCraft har **ingen egen AI** og sender ikke noget nogen steder hen. Du medbringer assistenten: ethvert program, der taler Model Context Protocol (MCP). MarkupCraft giver den kun værktøjer, og du vælger hvilke.

## Slå det til

1. Åbn {{ui:Indstillinger}} (tandhjulet i appens øverste linje, eller {{key:Mod+,}}), og gå til fanen {{ui:MarkupCraft}}.
2. Under {{ui:Assistenter}} sætter du kryds ved **Lad AI-assistenter og scripts bruge MarkupCraft**. Den er slået fra, indtil du gør det.
3. Vælg, hvad den må: **Læs** er markeret fra start; sæt kryds ved **Rediger**, **Gem** eller **Eksportér** kun, når du har brug for dem.

Værktøjer uden for de tilladelser, du har sat kryds ved, tilbydes ikke assistenten, og hvis den alligevel beder om et, afviser MarkupCraft det og skriver det i aktivitetsloggen. Slår du kontakten fra, afbrydes alle forbindelser med det samme; {{ui:Nulstil MarkupCraft-indstillinger}} slår den også fra.

## Forbind din assistent

Assistenter forbindes gennem **CadCraft Studio** på din computer: Studio kører en lille server, som kun denne computer kan nå, beskyttet af et token, som den laver, hver gang den starter. I Studio vælger du {{ui:Forbind en assistent}} og kopierer adressen og tokenet ind i din assistent (Studio viser de præcise indstillinger, du skal indsætte). Del aldrig tokenet.

:::note
En browserfane kan ikke åbne en forbindelse for en assistent: i browserappene har kontakten ingen virkning, før du bruger CadCraft Studio på din computer.
:::

## Du har kontrollen

- **Hver ændring er ét fortrydelsestrin**, mærket med assistentens navn for den (fx »Assistent: tilføj cloudrect«). {{key:Mod+Z}} tager assistentens seneste ændring tilbage som helhed.
- **Du ved, når en er forbundet.** En knap i appens øverste linje navngiver assistenten, mens den er forbundet; klik på den for at se, hvad den må, eller for at **Afbryde forbindelsen**.
- **Aktivitet.** {{ui:Indstillinger}} › {{ui:MarkupCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} lister hvert kald: hvornår, hvilket værktøj, og om det blev udført eller afvist. {{ui:Gem loggen}} gemmer en kopi.

## Hvad en assistent kan bede om

| Værktøj | Tilladelse | Hvad det gør |
|---|---|---|
| `app_info`, `sheets_list` | Læs | De åbne sæt, deres ark og hvor mange markeringer hvert har |
| `markups_list` | Læs | Markeringerne med type, ark, tekst, kommentar, måling, status, forfatter og svar, filtreret efter ark, status, type eller forfatter |
| `markup_add` | Rediger | Tilføjer et rektangel, en sky, en ellipse, et tekstfelt, en note, en linje eller en pil til et ark |
| `markup_status`, `markup_reply` | Rediger | Sætter en markerings status (logget i dens tråd, underskrevet af assistenten); tilføjer en kommentar til en tråd |
| `markups_export` | Eksportér | Markeringslistens egen CSV- eller BCF-fil af det, listen viser (dens filtre, som du har sat dem); i Studio kan den skrive filen til en mappe, du har tilladt |
| `tasks_list` | Læs | Markeringerne, der er opgaver: ansvarlig (person eller assistent), forfaldsdag, tilstand, link og hvordan de blev lukket. `assignee: "assistant"` lister arbejdet, der venter på en assistent |
| `task_set`, `task_clear` | Rediger | Gør en markering til en opgave eller ændrer den (titel, ansvarlig, forfald, tilstand, link); fjerner opgaven |
| `tasks_check` | Rediger | Lukker opgaver, hvis knyttede tegningsområde eller modelelement virkelig er ændret; send de elementtilstande, du læste fra det andet program |
| `revisions_changes` | Læs | Den almindelige liste over, hvad der er ændret mellem to åbne plansæt, så du kan formulere det med egne ord |
| `pins_list`, `decision_add` | Læs, Rediger | Talebeskeder (længde, hvem, hvornår, billedtekst; aldrig lyden, ingen udskrift) og beslutninger; fastgør en beslutning og erstat en tidligere |
| `redline_export`, `redline_answer` | Eksportér, Rediger | Skriver redline-filen til tegneren; anvender tegnerens svar |

En markering, som en assistent tilføjer, navngiver den som forfatter: det navn, assistentprogrammet giver sig selv, efterfulgt af »(assistent)«, eller af »(assistent for <dit navn>)«, når du har angivet dit navn som gennemgangsperson. Dens statusændringer og svar underskrives på samme måde. Hver af dem er ét fortrydelsestrin. At gemme den markerede PDF er stadig din opgave: brug {{ui:Gem}} som sædvanligt.

Uden at åbne MarkupCraft lister CadCraft MCP-serveren markeringerne i en PDF i en mappe, du angiver (`markups_list`), og `cadcraft info Set.pdf` udskriver dem på kommandolinjen.

## Hvis noget ikke virker

- **Assistenten ser ingen MarkupCraft-værktøjer:** kontrollér, at kontakten er slået til i dette vindue, og at vinduet er åbent i Studio.
- **»needs the edit permission«:** sæt kryds ved **Rediger** under {{ui:Assistenter}}, og spørg igen.
- **»401«- eller »token«-fejl:** tokenet er ændret (Studio blev genstartet, eller du valgte {{ui:Nyt token}}). Kopiér det nye ind i assistentens indstillinger.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): gennemarbejdede eksempler, hver med de værktøjer, den kalder.
