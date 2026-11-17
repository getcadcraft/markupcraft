---
title: Utgåvor, revisioner och ändringslogg för ritningar
summary: Håll en gemensam utgåvehistorik med arkitektens modell: läs in utgåvor, registrera platsinstruktioner, verkstadsritningar och länkade modeller mot en utgåva, och läs ändringsloggen för ritningar.
keywords: utgåva, revision, revisioner, ändringslogg, ritningsändringslogg, ritningsregister, platsinstruktion, verkstadsritning, länkad modell, anbud, byggande, utgåvehistorik, revisionsmoln, moln, markeringsuppsättning
from: e4688f64
---

## Vad du gör

Arbeta från samma utgåvehistorik som resten av teamet. Se vilka blad som gick ut i vilken revision, och håll det som händer på platsen kopplat till den utgåva det hör till.

## Steg

1. Öppna **Utgåvor och revisioner**.
2. Välj **Läs in en utgåvehistorik** och välj filen `.issues.json` som sparats från BimCraft eller ett annat program. Dess utgåvor och poster läggs till i dina. Inget ersätts.
3. Välj **Lägg till en post** för en platsinstruktion, en verkstadsritning, en markeringsuppsättning, en länkad modell eller en anteckning. Välj den utgåva den gäller och dess status. En fil du väljer registreras med namn, storlek och SHA-256; filen ligger kvar där den är.
4. **Ändringslogg för ritningar** visar en rad för varje blad och en kolumn för varje utgåva. En revision inom parentes utfärdades igen utan ändring.
5. **Ladda ner ändringsloggen (CSV)** sparar utgåvorna, bladtabellen och posterna. **Spara utgåvehistoriken** skriver en fil som de andra apparna läser.

## Bra att veta

- **Registrera de valda markeringarna** lägger de markeringar du valt mot den senaste utgåvan. Ett moln registreras som ett revisionsmoln vid den utgåvans revision. Välj **Visa** bredvid posten för att hoppa dit.
- **Registrera en utgåva** utfärdar dina markerade blad. **Ändringar sedan** visar sedan vilka blad som markerats efter den utgåvan.
- Historiken sparas inuti den markerade PDF-filen. Den ingår inte i {{ui:Ångra}}.
- Om du läser samma fil två gånger läggs inget till dubbelt. När två kopior har samma post behålls den nyare.
