---
title: Skriv ut och ändra sidorna i en PDF
summary: Skriv ut blad med deras markeringar, och rotera, flytta, infoga, ta bort eller extrahera sidor i en öppen PDF.
keywords: skriv ut, skrivare, papper, sidor, sida, rotera, vrid, ordna om, flytta sida, infoga, lägg till sida, tom sida, ta bort sida, extrahera, dela, sidåtgärder
from: 81832d9b
---

Menyn {{ui:Sidor}} i gruppen {{ui:Fil}} arbetar på PDF:en som det öppna bladet tillhör. Din PDF på den här datorn ändras aldrig: ändringarna är en del av kopian du sparar.

## Skriv ut

1. Tryck på {{key:Mod+P}}, eller välj {{ui:Sidor}}, sedan {{ui:Skriv ut…}}.
2. När fler än ett blad är öppet, välj vad som ska skrivas ut: {{ui:Det här bladet}}, varje sida i den här filen, hela satsen, eller de sidor du skriver (till exempel `1-3, 5`).
3. Välj {{ui:Skriv ut}}. Webbläsarens utskriftsdialog öppnas: välj skrivare, papper och skala där.

Markeringarna skrivs ut som de ser ut på bladet: de ritas in i sidorna i kopian som går till skrivaren. Kommentarer från andra program skrivs ut på det sätt som deras PDF anger.

:::safari firefox
Om webbläsaren inte kan skriva ut från inne i sidan öppnas bladen som en PDF i en ny flik. Skriv ut därifrån.
:::

## Vrid en sida

Välj {{ui:Sidor}}, sedan {{ui:Rotera sidan medurs}} eller {{ui:Rotera sidan moturs}}. Det öppna bladet vrids en kvartsvarv. Dess markeringar står kvar där de var på ritningen, och text du skrev vrids med sidan så att den fortfarande läses rakt upp.

## Flytta en sida

Välj {{ui:Sidor}}, sedan {{ui:Flytta sidan tidigare}} eller {{ui:Flytta sidan senare}}. Det öppna bladet byter plats med sin granne i sin egen PDF. Dess markeringar, skala och bladnummer följer med.

## Infoga sidor

- {{ui:Infoga sidor från en PDF…}} lägger in varje sida i en annan PDF efter det öppna bladet.
- {{ui:Infoga en tom sida}} lägger till en tom sida i samma storlek efter det öppna bladet, för skisser och anteckningar. I en sats som skapats med {{ui:Ny}} har den satsens rutnät också.
- I en sats som skapats med {{ui:Ny}} lägger {{ui:Lägg till en tom sida}} under listan {{ui:Blad}} till en sida till, lik de andra, sist. Se [Börja med tomma sidor](topic:open-a-plan-set#start-with-blank-pages).

Infogade sidor får sitt sidnummer som etikett tills du byter namn på dem. Se [Byt namn på ett blad](topic:open-a-plan-set#rename-a-sheet).

## Ta bort sidor

1. Välj {{ui:Sidor}}, sedan {{ui:Ta bort sidor…}}.
2. Skriv sidnumren i den här PDF:en, till exempel `3` eller `2-4`. Det öppna bladets sida är ifylld.
3. Välj {{ui:Ta bort sidor}}. Om de sidorna har markeringar säger MarkupCraft hur många och frågar igen.

En PDF behåller minst en sida. För att ta bort en hel fil, stäng satsen och öppna de filer du fortfarande behöver.

## Extrahera sidor

Välj {{ui:Sidor}}, sedan {{ui:Extrahera sidor…}}, och skriv sidorna. De laddas ner som en ny PDF med namnet "<fil> (sidor 1-3).pdf", med sina markeringar som kommentarer du kan fortsätta redigera. Den öppna filen förblir som den är.

## Bra att veta

- **Ångra stannar vid en sidändring.** {{key:Mod+Z}} ångrar markeringar som ritats efter den, men inte själva sidändringen eller något före den. Stäng utan att spara för att börja om från din ursprungliga PDF.
- Sidnummer räknas i en PDF, inte i hela satsen. Att flytta en sida håller den inne i sin egen fil.
- De ändrade sidorna är osparat arbete: {{ui:Spara}} laddar ner den omorganiserade kopian, och att lämna frågar först.
