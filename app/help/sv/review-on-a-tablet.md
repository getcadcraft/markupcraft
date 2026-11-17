---
title: Granska på iPad eller pekskärm
summary: Nyp, panorera och rita med fingrar eller penna, vad som verkställs när du lyfter, vad som kräver tangentbord, och hur du håller ditt arbete säkert på en surfplatta.
keywords: ipad, surfplatta, touch, pekskärm, nyp, zooma, två fingrar, apple pencil, penna, finger, fält, plats, yta, gester, mobil
from: 91eb6438
---

MarkupCraft fungerar med touch: på en iPad (Safari eller Chrome), på en bärbar dator med pekskärm, eller på en Windows- eller Android-surfplatta med en nyare webbläsare. I liggande läge visar en surfplatta hela layouten.

## Gester

| Gest | Vad den gör |
|---|---|
| Ett finger | Ritar med aktuellt verktyg, eller markerar med {{ui:Markera}} |
| Två fingrar, spridda eller nypta | Zoomar runt punkten mellan fingrarna |
| Två fingrar, flyttade tillsammans | Panorerar; du kan zooma och panorera i en och samma rörelse |
| Ett andra finger medan du ritar | Avbryter det som första fingret startade och startar zoomning i stället |
| Dubbeltryck, eller tryck och håll | Avslutar en polylinje, polygon, fritt moln eller yta |
| Tryck och håll på en text, utropsruta eller anteckning, med {{ui:Markera}} | Öppnar dess text för redigering |
| Ett finger med {{ui:Panorera}} på | Panorerar |

På en pekskärm är knapparna i verktygsfältet, menyerna, flikarna och dialogknapparna större, så de är lätta att träffa med fingret.

## Vad som händer när du lyfter

Så att det första fingret i en nypning aldrig lämnar ett märke, verkställs vissa verktyg när du **lyfter** fingret, inte när du rör vid skärmen:

- {{ui:Räkna}}: pricken läggs till vid lyft.
- {{ui:Anteckning}}: anteckningen placeras vid lyft.
- {{ui:Polylinje}}, {{ui:Polygon}}, {{ui:Fritt moln}} och {{ui:Area}}: varje punkt läggs till vid lyft.
- {{ui:Linje}}, {{ui:Pil}}, {{ui:Längd}} och {{ui:Kalibrera}}: när du trycker på början och sedan på slutet, placeras slutet vid lyft.

Om fingret glider mer än lite innan du lyfter räknas det inte som ett tryck, och ingenting läggs till. Tryck rent; för att rätta, använd {{ui:Ångra}}.

Verktyg som du drar ({{ui:Penna}}, {{ui:Överstrykning}}, {{ui:Moln}}, {{ui:Rektangel}}, {{ui:Ellips}}, {{ui:Utropsruta}}, {{ui:Text}}, {{ui:Stämpel}}) startar så snart du rör vid skärmen; ett andra finger avbryter dem.

## Markera med ett finger

- Tryck på en markering för att markera den; dra den för att flytta den; dra ett handtag för att ändra storlek. När ett finger rört bladet får markeringar och handtag ett större träffområde, och handtagen ritas större.
- Dra över tomt blad för att rita ett markeringsfönster (vänster till höger: helt inuti; höger till vänster: rör).
- I {{ui:Markera}} panorerar ett finger **inte**. Använd två fingrar, eller välj {{ui:Panorera}}.

## Saker som kräver tangentbord

Utan tangentbord finns det ingen {{key:Shift}}, {{key:Esc}} eller {{key:Enter}}. Så här gör du i stället:

| Tangentbordsåtgärd | Utan tangentbord |
|---|---|
| {{key:Esc}} för att avbryta eller återgå till {{ui:Markera}} | Tryck på {{ui:Markera}} i verktygsfältet |
| {{key:Shift}} för 45°-linjer, kvadrater och cirklar | Rita försiktigt; justera med handtagen |
| {{key:Shift}}-klicka för att lägga till i en markering | Använd ett markeringsfönster |
| {{key:Shift}}-klicka för att ta bort en räkneprick | {{ui:Ångra}} direkt efter ett felaktigt tryck |
| {{key:Mod+Enter}} för att avsluta inskrivningen | Tryck utanför textrutan |
| {{key:Enter}} för att avsluta en polylinje, eller för att redigera en markerings text | Tryck och håll, eller {{ui:Redigera på bladet}} i {{ui:Egenskaper}} |
| {{key:Delete}} | {{ui:Ta bort}} i verktygsfältet eller i {{ui:Egenskaper}} |
| Starta en ny räknegrupp med {{key:Esc}} | Tryck på tomt blad med {{ui:Markera}}, tryck sedan på {{ui:Räkna}} igen |

Ett tangentbordsfodral eller ett Bluetooth-tangentbord återställer alla genvägar; på en iPad fungerar ⌘-tangenten för {{key:Mod+Z}} och resten.

Knappar visar inte sina verktygstips vid touch. Tangenten för varje verktyg står i [Tangentbord och mus](topic:keyboard).

## Penna och Apple Pencil

En penna (Apple Pencil, Surface Pen och liknande) fungerar som en mus: den ritar och markerar, och verkställer direkt när den vidrörs. Använd fingrarna för att nypa och panorera. Trycket ändrar inte linjetjockleken.

## Öppna och spara på en iPad

- {{ui:Öppna}} visar Files-väljaren: iCloud Drive, På min iPad och alla lagringsappar du har anslutit.
- {{ui:Spara}} frågar om nedladdning; kopian hamnar i Files, under Downloads (eller i mappen som är inställd i Safaris inställningar).

## Håll ditt arbete säkert på en surfplatta

:::warning
iPad Safari varnar inte innan du lämnar en sida med osparat arbete, och iPadOS kan ladda om en flik i bakgrunden för att frigöra minne. MarkupCraft behåller en återställningskopia i webbläsaren och erbjuder den när du öppnar den igen (se [Återställ ditt arbete](common:recover)), men **spara efter varje blad eller varje genomgång**: en privat flik behåller ingen kopia.
:::

- Ditt namn, verktygsinställningar och verktygslåda sparas i den webbläsaren på den iPaden, precis som på en dator. Se [Vad som stannar i den här webbläsaren](topic:browser-storage).
- **Före ett platsbesök utan signal:** medan du fortfarande är online, öppna MarkupCraft i Safari (eller Chrome) på iPaden och välj {{ui:Spara för offline}} i fältet överst. Vänta tills det står "Klar för offline" (det räknar "Sparar N av M"; PDF-läsaren och -skrivaren är cirka 6 MB). På plats, öppna samma adress eller ett bokmärke till den: att öppna, markera och spara PDF:er fungerar utan anslutning. Om det står "Offline är inte tillgängligt" är du i en privat flik; använd en vanlig. Se [Arbeta offline](common:offline).
- Safari tar bort en offlinekopia som du inte har använt på några veckor. Före en resa, klicka på "Klar för offline" och välj "Spara igen (hämta den senaste versionen)".
- Mycket stora ritningssatser använder mycket minne. På en surfplatta, öppna bara de blad du behöver för besöket.

## På en telefon

Det fungerar, men skärmen är liten: delarna staplas (verktygsfält, blad, statusfält, paneler, sedan bladlistan), och verktygsfältet rullar i sidled. Använd en telefon för att titta och för att lägga till en snabb anteckning, och en surfplatta eller dator för riktig granskning.
