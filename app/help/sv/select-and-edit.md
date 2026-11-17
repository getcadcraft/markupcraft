---
title: Markera, flytta och ändra markeringar
summary: Markera markeringar genom att klicka eller med ett fönster, flytta, ändra storlek, justera, klipp ut, kopiera, klistra in, klistra in på plats, duplicera, ta bort och ångra.
keywords: markera, markering, markera allt, avmarkera, fönster, korsande, flytta, ändra storlek, handtag, justera, klipp ut, kopiera, klistra in, klistra in på plats, duplicera, urklipp, annan flik, ta bort, ångra, gör om, redigera
from: 62c7def3
---

Välj först {{ui:Markera}} ({{key:V}}). Du kan också trycka på {{key:Esc}}: första tryckningen rensar markeringen och nästa återgår till {{ui:Markera}}.

## Markera markeringar

:::mouse
- **En markering:** klicka på den. En streckad ruta och handtag visas, och {{ui:Egenskaper}} visar den.
- **Lägg till eller ta bort en:** håll ned {{key:Shift}} och klicka.
- **Helt inuti ett fönster:** dra från vänster till höger på en tom del av bladet. Bara markeringar som helt ryms i rutan väljs (heldragen kontur).
- **Vidrör ett fönster:** dra från höger till vänster. Allt som rutan vidrör väljs (grön, streckad kontur).
- **Allt på det här bladet:** {{key:Mod+A}}, eller {{ui:Mer}} och sedan {{ui:Markera allt}} i verktygsfältets grupp {{ui:Redigera}}.
- **Ingenting:** klicka på en tom plats, tryck på {{key:Esc}} eller välj {{ui:Mer}} och sedan {{ui:Avmarkera}}.
:::

:::touch
- **En markering:** tryck på den.
- **Flera:** dra ett finger över en tom del av bladet för att rita ett fönster. Från vänster till höger väljs det som ligger helt inuti; från höger till vänster väljs det som rutan vidrör.
- Att trycka med {{key:Shift}} hållen nedtryckt fungerar bara med ett anslutet tangentbord. Utan tangentbord använder du ett fönster.
- Ett finger flyttar aldrig vyn i {{ui:Markera}}; använd två fingrar eller verktyget {{ui:Panorera}}.
:::

Skrivskyddade kommentarer som följde med filen visas med en grå streckad ruta och inga handtag. De kan markeras och få svar, men inte ändras.

## Flytta och ändra storlek

- **Flytta:** dra en markerad markering. Håll ned {{key:Shift}} för att bara flytta i steg om 45°. Flera markerade markeringar flyttas tillsammans.
- **Ändra storlek:** med en markering vald drar du i ett handtag. Fyrkantiga handtag ändrar rutans storlek (håll ned {{key:Shift}} för att behålla proportionerna). Runda handtag flyttar en hörnpunkt på en linje, polylinje, polygon, moln eller mätning (håll ned {{key:Shift}} för 45°). Romboida handtag flyttar en hänvisnings spets och knäck. Penndrag skalas från sin ruta.
- **Justera:** tryck på piltangenterna för att flytta markeringen en skärmpixel; håll ned {{key:Shift}} för tio. Varje tryckning är ett ångringssteg.

## Ändra text eller utseende

- **Text, hänvisningar och anteckningar:** dubbelklicka på markeringen, tryck på {{key:Enter}} eller välj {{ui:Redigera på bladet}} i {{ui:Egenskaper}}. Skriv, klicka sedan utanför eller tryck på {{key:Mod+Enter}}. {{key:Esc}} avbryter redigeringen.
- **Stämplar:** välj en annan stämpel i {{ui:Egenskaper}} (dubbelklick öppnar {{ui:Egenskaper}} åt dig).
- **Stil:** {{ui:Färg}}, {{ui:Linjetjocklek}}, {{ui:Fyllning}}, {{ui:Opacitet}} och {{ui:Textstorlek}} under ”Stil” i {{ui:Egenskaper}}. Med flera markerade visar {{ui:Egenskaper}} de typer du valt och ändrar dem alla på en gång.

## Kopiera, klistra in och duplicera

Gruppen {{ui:Redigera}} i verktygsfältet har {{ui:Kopiera}} och {{ui:Klistra in}}. Menyn {{ui:Mer}} har alla dessa, var och en med sin tangent.

| Kommando | Tangent | Vad det gör |
|---|---|---|
| {{ui:Klipp ut}} | {{key:Mod+X}} | Kopierar de markerade markeringarna och tar bort dem |
| {{ui:Kopiera}} | {{key:Mod+C}} | Kopierar de markerade markeringarna |
| {{ui:Klistra in}} | {{key:Mod+V}} | Lägger en kopia på bladet du är på (var, se nedan) |
| {{ui:Klistra in på plats}} | {{key:Mod+Shift+V}} | Lägger kopian exakt där den kopierades från: på samma blad, ovanpå originalet; på ett annat blad, på samma plats på papperet |
| {{ui:Duplicera}} | {{key:Mod+D}} | Gör en kopia av markeringen lite nedanför och till höger, utan att röra det du kopierat tidigare |

**Var Klistra in lägger kopian:**

- {{key:Mod+V}} med pekaren på bladet lägger kopian centrerad där pekaren är. Flytta pekaren, tryck på {{key:Mod+V}} igen, så placerar du en till.
- Knappen {{ui:Klistra in}} (när pekaren är på verktygsfältet), eller {{key:Mod+V}} med pekaren utanför bladet, lägger den lite nedanför och till höger om originalet. Varje inklistring av samma kopia går ett steg längre, så kopiorna aldrig döljer varandra. På ett annat blad hamnar första inklistringen där originalet låg på sitt blad. Om den platsen är utanför vyn hamnar kopian mitt i vyn.
- För att {{key:Mod+V}} alltid ska klistra in bredvid originalet, välj {{ui:Intill kopian}} under {{ui:Klistra in}} i [MarkupCraft-inställningar](topic:settings).

De inklistrade markeringarna är markerade, så du kan dra dem direkt. Varje klipp ut, inklistring eller duplicering är ett ångringssteg: {{key:Mod+Z}} tar bort hela inklistringen.

Inklistrade kopior är nya markeringar: de får ditt namn, dagens datum, statusen Öppen, inget åtgärdsnummer och en tom tråd. Deras typ, form, stil, text och kommentar följer med. Skrivskyddade kommentarer som följde med filen kan inte kopieras eller klippas ut.

**Mellan flikar:** det du kopierar sparas också i den här webbläsaren, så en annan MarkupCraft-flik i samma webbläsare kan klistra in det. Att kopiera markeringar använder inte datorns urklipp: du kan inte klistra in dem i ett annat program, och text du kopierat någon annanstans klistras inte in som en markering.

**Högerklicksmenyn:** högerklicka på en markering (eller på tomt papper) för {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in här}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Spara markeringen som stämpel…}}, {{ui:Platta till i sidan vid sparande}}, {{ui:Infoga en bild här…}} och {{ui:Markera allt}}. Om du högerklickar på en markering som inte är markerad markeras den först. Att dra med högra knappen panorerar fortfarande. På en pekskärm öppnar ett långt tryck på en markering samma meny (på text börjar det redigera texten). Menytangenten eller {{key:Shift+F10}} öppnar den vid markeringen.

Sidinnehåll som markerats med verktyget {{ui:Innehåll}} kan också kopieras och klistras in: se [Ändra sidans egna linjer, bilder och text](topic:page-content).

För att kopiera en del av själva sidan som en bild (en rektangel, en ellips eller en fri form), eller som ett genomskinligt överlägg för ett annat blad eller program, se [Kopiera ett område av sidan, eller ett överlägg](topic:copy-an-area).

## Ta bort

Tryck på {{key:Delete}} eller {{key:Backspace}}, välj {{ui:Mer}} och sedan {{ui:Ta bort}} i verktygsfältet, eller {{ui:Ta bort}} i {{ui:Egenskaper}}. Statusfältet visar hur många som togs bort. Skrivskyddade kommentarer från filen tas aldrig bort (”behålls som i filen”).

## Ångra och gör om

- {{key:Mod+Z}} ångrar, {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} gör om. Verktygsfältet har {{ui:Ångra}} och {{ui:Gör om}}.
- Statusfältet anger vad som ångrades (”Ångrade flytta markering.”).
- Ångra omfattar alla ändringar av markeringar, statusar, svar, åtgärdspunkter, bladskalor och bladnamn, upp till 500 steg.
- Historiken rensas när du stänger uppsättningen.

## Kopiera markeringar till andra blad

För att lägga samma stämpel, anteckning eller moln på flera blad, markera den (eller flera markeringar) och välj {{ui:Kopiera till andra blad…}} i {{ui:Egenskaper}}. Bocka i bladen, eller välj {{ui:Alla blad}}, och välj {{ui:Kopiera}}. Varje blad får en kopia på samma plats på sidan, signerad med ditt namn. Ett enda {{key:Mod+Z}} tar bort alla.
