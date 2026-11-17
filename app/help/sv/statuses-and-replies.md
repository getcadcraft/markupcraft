---
title: Status och svar
summary: Markera varje kommentar Öppen, Godkänd, Avvisad eller Klar, diskutera den i en svarstråd och skicka vidare tråden i PDF:en.
keywords: status, granskningsstatus, godkänd, avvisad, klar, öppen, svar, tråd, kommentar, konversation, diskussion, svara, återkontroll
from: 0f3e8b91
---

Varje markering har en **status** och en **svarstråd**. Tillsammans bär de en granskningsrunda: granskaren markerar, konstruktören svarar och sätter statusar, och granskaren gör en återkontroll.

## Sätt en status

1. Markera markeringen (eller flera).
2. I {{ui:Properties}} väljer du en {{ui:Status}}: Öppen, Godkänd, Avvisad eller Klar.

Resultat: statusen visas som en bricka i listan {{ui:Markups}}, och en rad läggs till i tråden: ”Status satt till Godkänd av Ana Ruiz.” Med flera markeringar markerade visar statusrutan ”Blandad” tills du väljer en, och då ändras alla.

Nya markeringar börjar som Öppen. Inklistrade eller duplicerade markeringar börjar också som Öppen.

## Svara

1. Markera markeringen.
2. I {{ui:Properties}} hittar du ”Svar” under stilinställningarna.
3. Skriv i {{ui:Write a reply}}.
4. Välj {{ui:Reply}}, eller tryck på {{key:Mod+Enter}}.

Resultat: svaret listas med ditt namn, datum och klockslag, och rubriken räknar det: ”Svar (3)”. Listan {{ui:Markups}} visar ett antal svar på raden.

- Statusändringar listas i samma tråd och markeras som statusposter, så historiken läses i ordning.
- Om du börjar skriva ett svar och klickar på något annat sparas utkastet tills du kommer tillbaka till markeringen (tills du stänger satsen).
- Om ditt namn inte är inställt frågar MarkupCraft efter det innan svaret skickas.
- Du kan också svara på skrivskyddade kommentarer som följde med filen.

:::note
Ett svar kan inte redigeras eller tas bort när det har skickats. Direkt efter att du skickat det tar {{key:Mod+Z}} tillbaka det; efter det lägger du till ett nytt svar som rättar det.
:::

## Lägg till ett foto

Under svarsrutan lägger {{ui:Add photo}} till en bild i tråden: en PNG- eller JPEG-fil från den här datorn, eller, på en surfplatta eller telefon, ett foto du tar där och då. Det du skrev i svarsrutan blir bildtext. Tråden visar en miniatyr; välj den för att se fotot i full storlek. Stora foton skalas ner till 1600 bildpunkter på sin längre sida.

I den sparade PDF:en följer varje foto också med som en bifogad fil bredvid markeringen (ett gem), så att andra PDF-visare kan öppna det.

## Skicka vidare granskningen

Det finns ännu ingen gemensam onlinesession: granskningen följer med i PDF:en.

1. Välj {{ui:Save}}. Kopian innehåller varje markering med dess status och svar.
2. Skicka kopian på samma sätt som du skickar ritningar i dag.
3. Nästa person öppnar den i MarkupCraft, svarar, sätter statusar och sparar igen.

Andra PDF-program visar svaren som svar på kommentaren, och statusarna som granskningstillstånd (Godkänd, Avvisad, Klar; Öppen visas som inget tillstånd). Deras egna svar och granskningstillstånd kommer tillbaka in i MarkupCraft när du öppnar filen: den senaste statusen gäller.

Om två personer markerar separata kopior samtidigt finns ingen sammanslagning. Du kan öppna båda kopiorna i en sats och kopiera några markeringar över med {{key:Mod+C}} och {{key:Mod+V}}, men en inklistrad kopia är en ny markering: den bär ditt namn, ett nytt datum och statusen Öppen, och hamnar något förskjuten. Kom överens om vem som markerar vilka blad för att undvika detta.

## Hitta det som fortfarande är öppet

I fliken {{ui:Markups}} sätter du {{ui:Status}} till ”Öppen” för att bara lista öppna punkter, och {{ui:Author}} till en granskare. Se [Markeringslistan](topic:markups-list-and-export).

Status (Öppen, Godkänd, Avvisad, Klar) gäller kommentaren. En åtgärdspunkt har en egen, separat status för arbetet ute på fältet; se [Skapa en åtgärdslista](topic:punch-list).
