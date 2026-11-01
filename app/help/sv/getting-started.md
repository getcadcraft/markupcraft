---
title: Komma igång med MarkupCraft
summary: Öppna en ritningsuppsättning, lägg ut ditt första moln och din första utropsruta på ett blad och spara en markerad kopia.
keywords: start, första stegen, öppna pdf, granskning, markering, redline, rödpenna, ritningsuppsättning, handledning, snabbstart
from: 0b1aae4e
---

MarkupCraft är till för att granska ritningar: du öppnar PDF-ritningsuppsättningar, markerar dem med moln, utropsrutor, text, stämplar och mått, följer varje kommentars status och sparar en kopia av PDF-filen som vilken PDF-läsare som helst kan visa.

Det körs i din webbläsare. Dina PDF-filer öppnas på din egen dator och **laddas aldrig upp**. Vid sparande laddas en ny kopia ner; din originalfil ändras inte.

:::note
MarkupCraft är under utveckling. Hjälpen beskriver den version du kör. Det som den inte kan göra ännu står i [Vad som inte är byggt ännu](topic:not-built-yet).
:::

## Det här behöver du

- En ny version av Chrome, Edge, Firefox eller Safari på en Mac-, Windows- eller Linux-dator, eller Safari eller Chrome på en iPad. Se [Webbläsare och datorer](common:browsers).
- En eller flera PDF-filer. En hel ritningsuppsättning kan vara en PDF eller många.
- En mus med hjul är bekvämast. En styrplatta fungerar, och det gör en pekskärm också (se [Granska på en iPad eller pekskärm](topic:review-on-a-tablet)).

## Din första granskning i tio steg

1. Öppna MarkupCraft i din webbläsare. Mitt på skärmen står det ”Öppna en ritningsuppsättning”.
2. Välj {{ui:Öppna PDF-filer}} (eller {{ui:Öppna}} längst till vänster i verktygsfältet, eller tryck på {{key:Mod+O}}), välj en eller flera PDF-filer och bekräfta.
   Du kan också dra PDF-filer från {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} och släppa dem på bladytan.
   Första gången står det ”Läser in PDF-läsaren…” i statusfältet längst ned. Sedan blir varje sida ett blad i listan {{ui:Blad}} till vänster, och det första bladet fyller mitten.
3. Klicka på ett blad i listan för att visa det. Vrid mushjulet över bladet för att zooma in där pekaren är.
4. Välj {{ui:Moln}} i gruppen {{ui:Revidera}} i verktygsfältet (eller tryck på {{key:C}}).
   Första gången du väljer ett ritverktyg frågar MarkupCraft efter ditt namn. Skriv det och välj {{ui:Spara}}. Varje markering registrerar det. (Mer i [Ange ditt författarnamn](topic:set-your-name).)
5. Dra en ruta runt det område du vill flagga. Ett rött revisionsmoln visas och är markerat.
6. Välj {{ui:Utropsruta}} i gruppen {{ui:Notera}} (eller tryck på {{key:K}}). Tryck på det du pekar på, dra till där texten ska stå och släpp.
7. Skriv din kommentar i rutan som visas. Klicka var som helst utanför rutan (eller tryck på {{key:Mod+Enter}}) för att slutföra.
8. Tryck på {{key:Esc}} två gånger: en gång för att avmarkera, en gång för att gå tillbaka till verktyget {{ui:Markera}}. Klicka på molnet. Fliken {{ui:Egenskaper}} till höger visar vem som skapade det, när, och dess {{ui:Status}}.
9. Välj {{ui:Spara}} i verktygsfältet (eller tryck på {{key:Mod+S}}).
   Webbläsaren laddar ner en kopia med ett namn som ”A-Plans (marked up).pdf”. Statusfältet anger hur många markeringar som skrevs.
10. Öppna den kopian i vilken PDF-läsare som helst för att kontrollera: molnet och utropsrutan finns där, som vanliga PDF-kommentarer med ditt namn på.

För att fortsätta arbeta senare öppnar du ”(marked up)”-kopian i MarkupCraft. Dina markeringar kommer tillbaka redigerbara, med sina statusar, svar och åtgärdsnummer.

## Online och offline

:::online
Du är online. MarkupCraft läser in sin PDF-läsare första gången du öppnar en PDF och sin PDF-skrivare första gången du sparar. För att kunna arbeta utan anslutning senare (vid ett platsbesök, på ett flyg) väljer du {{ui:Spara för offline}} i fältet överst nu och väntar på ”Redo för offline”. Kopian innehåller PDF-läsaren och PDF-skrivaren, så att det sedan fungerar offline att öppna och spara PDF-filer. Se [Arbeta offline](common:offline).
:::

:::offline
Du är offline. Om fältet överst säger ”Redo för offline” sparades MarkupCraft för offlineanvändning i den här webbläsaren och allt fungerar: öppna, markera, mäta, spara. Om det inte gjorde det, använd det som redan lästs in i den här fliken och ladda inte om sidan förrän du är online igen. Se [Arbeta offline](common:offline).
:::

## Vad appen minns, och vad den inte minns

- **Dina markeringar finns i den PDF du sparar.** Ingenting lagras på en server. Appen sparar inte PDF-filen själv, men håller en återställningskopia i den här webbläsaren tills du gör det. Spara innan du stänger fliken; webbläsaren frågar först om du försöker lämna sidan med osparade markeringar (utom på en iPad, se [Granska på en iPad eller pekskärm](topic:review-on-a-tablet)).
- **Ditt namn, dina verktygsstilar och din verktygslåda** stannar i den här webbläsaren på den här datorn. En annan webbläsare eller dator börjar från noll, och om du rensar webbläsarens webbplatsdata försvinner de. Se [Vad som stannar i den här webbläsaren](topic:browser-storage).
- Molnsparande och granskningssessioner som delas mellan flera personer finns inte ännu.

## Vart du går härnäst

- [En rundtur på skärmen](topic:workspace)
- [Markera ett blad](topic:mark-up-a-sheet)
- [Kalibrera ett blad och mät](topic:calibrate-and-measure)
- [Om du kommer från annan markeringsprogramvara](topic:coming-from) om du redan granskar ritningar i ett annat program.
