---
title: Statusser og svar
summary: Markér hver kommentar som Åben, Accepteret, Afvist eller Afsluttet, drøft den i en svartråd, og send tråden videre i PDF'en.
keywords: status, gennemgangsstatus, accepteret, afvist, afsluttet, åben, svar, svartråd, tråd, kommentar, samtale, diskussion, besvar, kontrol efter rettelse
from: 0f3e8b91
---

Hver markering har en **status** og en **svartråd**. Sammen bærer de en gennemgangsrunde: gennemgangspersonen markerer, tegneren svarer og sætter statusser, og gennemgangspersonen kontrollerer igen.

## Sæt en status

1. Vælg markeringen (eller flere).
2. I {{ui:Egenskaber}} vælger du en {{ui:Status}}: Åben, Accepteret, Afvist eller Afsluttet.

Resultat: statussen vises som et mærke i listen {{ui:Markeringer}}, og en linje føjes til tråden: »Status er sat til Accepteret af Ana Ruiz.« Med flere markeringer valgt står der »Blandet« i statusboksen, indtil du vælger én, og så ændres alle.

Nye markeringer starter som Åben. Indsatte eller duplikerede markeringer starter også som Åben.

## Svar

1. Vælg markeringen.
2. I {{ui:Egenskaber}} finder du »Svar« under stilindstillingerne.
3. Skriv i {{ui:Skriv et svar}}.
4. Vælg {{ui:Svar}}, eller tryk {{key:Mod+Enter}}.

Resultat: svaret vises med dit navn og dato og klokkeslæt, og overskriften tæller det: »Svar (3)«. Listen {{ui:Markeringer}} viser et antal svar på rækken.

- Statusændringer vises i samme tråd og markeres som statuspost, så historikken læses i rækkefølge.
- Begynder du at skrive et svar og klikker på noget andet, gemmes dit udkast, indtil du vender tilbage til markeringen (indtil du lukker sættet).
- Hvis dit navn ikke er angivet, spørger MarkupCraft om det, før det sendes.
- Du kan også svare på skrivebeskyttede kommentarer, der fulgte med filen.

:::note
Et svar kan ikke redigeres eller slettes, når det er sendt. Lige efter afsendelse fortryder {{key:Mod+Z}} det; derefter tilføjer du et nyt svar, der retter det.
:::

## Tilføj et foto

Under svarfeltet tilføjer {{ui:Tilføj foto}} et billede til tråden: en PNG- eller JPEG-fil fra denne computer, eller, på en tablet eller telefon, et foto, du tager der og da. Det, du har skrevet i svarfeltet, bliver billedteksten. Tråden viser en miniature; vælg den for at se fotoet i fuld størrelse. Store fotos skaleres ned til 1600 pixel på deres længste side.

I den gemte PDF følger hvert foto også med som en vedhæftet fil ved siden af markeringen (en papirclips), så andre PDF-fremvisere kan åbne det.

## Videregivelse af gennemgangen

Der findes endnu ingen fælles online-session: gennemgangen rejser i PDF'en.

1. Vælg {{ui:Gem}}. Kopien indeholder hver markering med dens status og svar.
2. Send kopien på den måde, du sender tegninger i dag.
3. Den næste person åbner den i MarkupCraft, svarer, sætter statusser og gemmer igen.

Andre PDF-programmer ser svarene som svar på kommentaren og statusserne som gennemgangstilstande (Accepteret, Afvist, Afsluttet; Åben vises som ingen tilstand). Deres egne svar og gennemgangstilstande kommer tilbage i MarkupCraft, når du åbner filen: den nyeste status vinder.

Hvis to personer markerer separate kopier samtidig, findes der ingen sammenfletning. Du kan åbne begge kopier i ét sæt og kopiere få markeringer over med {{key:Mod+C}} og {{key:Mod+V}}, men en indsat kopi er en ny markering: den bærer dit navn, en ny dato og status Åben, og den lander lidt forskudt. Aftal, hvem der markerer hvilke ark, for at undgå dette.

## Find det, der stadig er åbent

I fanen {{ui:Markeringer}} sætter du {{ui:Status}} til »Åben« for kun at vise åbne punkter, og {{ui:Forfatter}} til én gennemgangsperson. Se [Markeringslisten](topic:markups-list-and-export).

Status (Åben, Accepteret, Afvist, Afsluttet) handler om kommentaren. Et mangelpunkt har sin egen, særskilte status for arbejdet i marken; se [Lav en mangelliste](topic:punch-list).
