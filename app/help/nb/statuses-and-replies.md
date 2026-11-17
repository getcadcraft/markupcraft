---
title: Statuser og svar
summary: Merk hver kommentar Åpen, Akseptert, Avvist eller Fullført, diskuter den i en svartråd, og send tråden videre i PDF-filen.
keywords: status, gjennomgangsstatus, akseptert, avvist, fullført, åpen, svar, svartråd, kommentar, samtale, diskusjon, svare, tilbakesjekk
from: 0f3e8b91
---

Hver markering har en **status** og en **svartråd**. Sammen bærer de en gjennomgangsrunde: gjennomgåeren markerer, tegneren svarer og setter statuser, gjennomgåeren sjekker tilbake.

## Sett en status

1. Velg markeringen (eller flere).
2. Velg en {{ui:Status}} i {{ui:Egenskaper}}: Åpen, Akseptert, Avvist eller Fullført.

Resultat: statusen vises som en brikke i listen {{ui:Markeringer}}, og en linje legges til i tråden: «Status satt til Akseptert av Ana Ruiz.» Når flere markeringer er valgt, står det «Blandet» i statusfeltet til du velger én, og da endres alle.

Nye markeringer starter som Åpen. Innlimte eller dupliserte markeringer starter også som Åpen.

## Svar

1. Velg markeringen.
2. Finn «Svar» under stilinnstillingene i {{ui:Egenskaper}}.
3. Skriv i {{ui:Skriv et svar}}.
4. Velg {{ui:Svar}}, eller trykk {{key:Mod+Enter}}.

Resultat: svaret listes med navnet ditt og dato og klokkeslett, og overskriften teller det: «Svar (3)». Listen {{ui:Markeringer}} viser et antall svar på raden.

- Statusendringer listes i samme tråd og merkes som statusoppføringer, så historikken leses i rekkefølge.
- Hvis du begynner å skrive et svar og klikker på noe annet, beholdes utkastet til du kommer tilbake til markeringen (til du lukker settet).
- Hvis navnet ditt ikke er angitt, spør MarkupCraft etter det før sending.
- Du kan også svare på skrivebeskyttede kommentarer som fulgte med filen.

:::note
Et svar kan ikke redigeres eller slettes når det er sendt. Rett etter sending tar {{key:Mod+Z}} det tilbake; etter det legger du til et nytt svar som retter det.
:::

## Legg til et bilde

Under svarboksen legger {{ui:Legg til bilde}} til et bilde i tråden: en PNG- eller JPEG-fil fra denne datamaskinen, eller, på nettbrett eller telefon, et bilde du tar der og da. Det du skrev i svarboksen, blir bildeteksten. Tråden viser et miniatyrbilde; velg det for å se bildet i full størrelse. Store bilder skaleres ned til 1600 piksler på lengste side.

I den lagrede PDF-filen følger hvert bilde også med som en vedlagt fil ved siden av markeringen (en binders), slik at andre PDF-visningsprogrammer kan åpne den.

## Videresend gjennomgangen

Det finnes ingen felles nettøkt ennå: gjennomgangen reiser i PDF-filen.

1. Velg {{ui:Lagre}}. Kopien inneholder hver markering med status og svar.
2. Send kopien på samme måte som du sender tegninger i dag.
3. Neste person åpner den i MarkupCraft, svarer, setter statuser og lagrer på nytt.

Andre PDF-programmer ser svarene som svar på kommentaren, og statusene som gjennomgangstilstander (Akseptert, Avvist, Fullført; Åpen vises som ingen tilstand). Deres egne svar og gjennomgangstilstander kommer tilbake til MarkupCraft når du åpner filen: den nyeste statusen vinner.

Hvis to personer markerer separate kopier samtidig, finnes det ingen sammenslåing. Du kan åpne begge kopiene i ett sett og kopiere noen markeringer over med {{key:Mod+C}} og {{key:Mod+V}}, men en innlimt kopi er en ny markering: den har navnet ditt, en ny dato og status Åpen, og havner litt forskjøvet. Avtal hvem som markerer hvilke ark for å unngå dette.

## Finn det som fortsatt er åpent

På fanen {{ui:Markeringer}} setter du {{ui:Status}} til «Åpen» for å liste bare åpne punkter, og {{ui:Forfatter}} til én gjennomgåer. Se [Markeringslisten](topic:markups-list-and-export).

Status (Åpen, Akseptert, Avvist, Fullført) gjelder kommentaren. Et avvikspunkt har en egen status for arbeidet i felten; se [Lag en avviksliste](topic:punch-list).
