---
title: Använd MarkupCraft med en AI-assistent
summary: Låt din egen AI-assistent eller ditt skript lista markeringarna i en sats, lägga till enkla, sätta deras status, svara och exportera listan. Behörigheter, anslutning via CadCraft Studio och aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, skript, automatisering, markeringar, granskning, behörigheter, koppla från, aktivitet
from: 095f2977
---

## Vad du får lära dig

Hur du låter en AI-assistent (eller ett skript du skrivit) arbeta med MarkupCraft, och hur du bestämmer vad den får röra.

MarkupCraft har **ingen egen AI** och skickar inget någonstans. Du tar med din assistent: vilket program som helst som talar Model Context Protocol (MCP). MarkupCraft ger den bara verktyg, och du väljer vilka.

## Slå på det

1. Öppna {{ui:Settings}} (kugghjulet i appfältet, eller {{key:Mod+,}}) och gå till fliken {{ui:MarkupCraft}}.
2. Under {{ui:Assistants}} bockar du i **Låt AI-assistenter och skript använda MarkupCraft**. Det är av tills du gör det.
3. Välj vad den får göra: **Läs** är ibockat från början; bocka i **Redigera**, **Spara** eller **Exportera** bara när du behöver dem.

Verktyg utanför de behörigheter du bockat i erbjuds inte assistenten. Om den ändå begär ett sådant nekar MarkupCraft det och skriver det i aktivitetsloggen. Att stänga av reglaget avslutar alla anslutningar på en gång. {{ui:Reset MarkupCraft settings}} stänger av det också.

## Anslut din assistent

Assistenter ansluter via **CadCraft Studio** på din dator. Studio kör en liten server som bara den här datorn kan nå, skyddad av en token som den skapar varje gång den startar. I Studio väljer du {{ui:Connect an assistant}} och kopierar adressen och token till din assistent (Studio visar de exakta inställningarna att klistra in). Dela aldrig token.

:::note
En webbläsarflik kan inte öppna en anslutning för en assistent: i webbläsarappar har reglaget ingen effekt förrän du använder CadCraft Studio på din dator.
:::

## Du har kontrollen

- **Varje ändring är ett steg i ångra**, märkt med assistentens namn för den (till exempel ”Assistent: lägg till cloudrect”). {{key:Mod+Z}} tar tillbaka assistentens senaste ändring i sin helhet.
- **Du vet när en är ansluten.** En knapp i appfältet visar assistentens namn medan den är ansluten. Klicka på den för att se vad den får göra, eller för att **Koppla från** den.
- **Aktivitet.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} listar varje anrop: när, vilket verktyg, och om det gick bra eller nekades. {{ui:Save the log}} sparar en kopia.

## Vad en assistent kan begära

| Verktyg | Behörighet | Vad det gör |
|---|---|---|
| `app_info`, `sheets_list` | Läs | Satserna som är öppna, deras blad och hur många markeringar var och en har |
| `markups_list` | Läs | Markeringarna med typ, blad, text, kommentar, mått, status, upphovsperson och svar, filtrerade efter blad, status, typ eller upphovsperson |
| `markup_add` | Redigera | Lägger till en rektangel, ett moln, en ellips, en textruta, en anteckning, en linje eller en pil på ett blad |
| `markup_status`, `markup_reply` | Redigera | Sätter en markerings status (loggas i dess tråd, signerad av assistenten); lägger till en kommentar i en tråd |
| `markups_export` | Exportera | {{ui:Markups}}-listans egna CSV- eller BCF-fil av det listan visar (med dess filter som du angett); i Studio kan den skriva filen till en mapp du tillåtit |
| `tasks_list` | Läs | Markeringarna som är uppgifter: ansvarig (person eller assistent), förfallodag, tillstånd, länk och hur den stängdes. `assignee: "assistant"` listar arbetet som väntar på en assistent |
| `task_set`, `task_clear` | Redigera | Gör en markering till en uppgift eller ändrar den (titel, ansvarig, förfallodag, tillstånd, länk); tar bort uppgiften |
| `tasks_check` | Redigera | Stänger uppgifter vars länkade ritningsområde eller modellelement verkligen ändrats; skicka med elementtillstånden du läst från det andra programmet |
| `revisions_changes` | Läs | Den enkla listan över vad som ändrats mellan två öppna plansatser, för att sammanfatta med egna ord |
| `pins_list`, `decision_add` | Läs, Redigera | Röstanteckningar (längd, vem, när, bildtext; aldrig ljudet, ingen transkription) och beslut; fäst ett beslut och ersätt ett tidigare |
| `redline_export`, `redline_answer` | Exportera, Redigera | Skriver rödpennefilen för ritaren; tillämpar ritarens svar |

En markering som en assistent lägger till anger den som upphovsperson: namnet som assistentprogrammet ger sig självt, följt av ”(assistent)”, eller av ”(assistent för <ditt namn>)” när du har angett ditt granskarnamn. Dess statusändringar och svar signeras på samma sätt. Varje är ett steg i ångra. Att spara den markerade PDF:en är fortfarande din sak: använd {{ui:Save}} som vanligt.

Utan att öppna MarkupCraft listar CadCraft MCP-servern markeringarna i en PDF i en mapp du anger (`markups_list`), och `cadcraft info Set.pdf` skriver ut dem på kommandoraden.

## Om något inte fungerar

- **Assistenten ser inga MarkupCraft-verktyg:** kontrollera att reglaget är på i det här fönstret, och att fönstret är öppet i Studio.
- **”kräver behörigheten att redigera”:** bocka i **Redigera** under {{ui:Assistants}} och fråga sedan igen.
- **Felet ”401” eller ”token”:** token har ändrats (Studio startades om, eller {{ui:New token}}). Kopiera den nya till assistentens inställningar.

## Se även

- [Recept för AI-assistenter](common:assistants-recipes): genomarbetade exempel, vart och ett med de verktyg det anropar.
