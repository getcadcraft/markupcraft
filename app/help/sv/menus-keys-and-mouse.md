---
title: Menyer, tangenter och mus
summary: Välj MarkupCrafts egna verktygsfält, en menyrad för PDF-granskning eller en menyflik, ge valfritt verktyg en egen tangent, flytta verktyg mellan menyer, och ange vad hjulet och musknapparna gör.
keywords: menystil, menyer, menyrad, verktygsfält, menyflik, flikar, pdf-granskning, tangentbordsgenvägar, snabbtangenter, tangenter, anpassa, ändra tilldelning, tilldela om, mus, hjul, invertera, zoomriktning, mittknapp, högerknapp, panorera, exportera, importera, byta, bekant
from: 081438a6
---

MarkupCrafts verktyg är desamma oavsett vilket sätt du når dem. En **menystil** avgör bara var de sitter på skärmen, vad de heter där och vilka tangenter som väljer dem. Välj en i {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}; ändringen gäller direkt, och den här webbläsaren kommer ihåg den.

## De tre stilarna

| Stil | Det du får |
|---|---|
| {{ui:MarkupCraft}} | MarkupCrafts eget verktygsfält (Fil, Markera, Rita, Revidera, Annotera, Mät, Redigera) och dess enbokstavstangenter: {{key:V}} markera, {{key:H}} panorera, {{key:P}} penna, {{key:I}} överstrykning, {{key:L}} linje, {{key:A}} pil, {{key:R}} rektangel, {{key:E}} ellips, {{key:C}} moln, {{key:K}} utropsruta, {{key:T}} text, {{key:N}} anteckning, {{key:S}} stämpel, {{key:M}} längd, {{key:Q}} area, {{key:U}} räkna. Utgångsläget. |
| {{ui:PDF review}} | En menyrad ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) över en rad granskningsverktyg, med tangenter satta på samma sätt som PDF-granskningsprogram brukar sätta sina: {{key:V}} markera, {{key:Shift+V}} panorera, {{key:H}} överstrykning, {{key:Q}} utropsruta, {{key:N}} polygon, {{key:Shift+N}} polylinje, {{key:Shift+T}} anteckning, {{key:Shift+A}} båge, och mätningarna på {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibrera, {{key:Alt+Shift+L}} längd, {{key:Alt+Shift+G}} vinkel, {{key:Alt+Shift+A}} area, {{key:Alt+Shift+C}} räkna. {{key:Alt+L}} öppnar markeringslistan. Mittknappen panorerar; ett högerklick gör inte det. |
| {{ui:Ribbon}} | Flikar med namn efter arbetet: {{ui:Mark up}} (markera, rita, moln, utropsrutor, text, anteckningar, stämplar), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}} (markeringslistan och dess exporter, BCF-ärenden, åtgärdslistan, fältposter, verktygslådan, jämför), {{ui:Pages}} och {{ui:View}}, med {{ui:File}} och snabbknappar för öppna, spara, ångra och gör om. Verktygen behåller MarkupCrafts egna enbokstavstangenter. En knapp för en panel som inte är öppen öppnar den panelen först. |

Varje stil behåller tangenterna med {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} anpassa sida och {{key:Mod+9}} anpassa bredd; {{key:PageUp}} och {{key:PageDown}} byter blad.

:::tip
En tangent som hör till MarkupCrafts egna layout men inte till stilen du valde gör ingenting, och statusfältet säger var dess verktyg tog vägen ("I PDF-granskning är Utropsruta Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} och piltangenterna behåller alltid sin betydelse. När du skriver i en textruta, utropsruta eller anteckning tillhör varje tangent texten, och siffror som skrivs medan du ritar öppnar fortfarande längdrutan.
:::

## Gör den till din egen

1. Välj stilen som ligger närmast det du vill ha, och klicka sedan på {{ui:Customize…}}.
2. Under {{ui:Keys and menus}}, hitta ett verktyg (sökrutan hjälper). Klicka på {{ui:Add a key}} och tryck tangenten, eller två tangenter i följd för en tvåbokstavstangent. Klicka på en tangent för att ta bort den.
3. Med menyraden flyttar {{ui:Where it sits}} verktyget till en annan meny, eller till {{ui:Keys only}}.
4. Under {{ui:Mouse}} ställer du in hjulet och de knappar som panorerar bladet.
5. Ge den ett namn och klicka på {{ui:Save}}.

Om du sparar en inbyggd stil skapas en egen kopia ("Min PDF-granskning"); den inbyggda ändras aldrig. En tangent som ges till två verktyg visas i rött och måste åtgärdas innan du kan spara.

## Mus

- **Mushjul**: {{ui:Scroll up zooms in}} (utgångsläget) eller {{ui:Scroll up zooms out}}, och hur snabbt. En nypning på en styrplatta zoomar alltid åt det håll dina fingrar rör sig.
- **Panorera bladet med**: mittknappen, högerknappen, eller båda. {{key:Space}} och dra, och verktyget {{ui:Pan}}, panorerar alltid; den vänstra knappen ritar och markerar annars, så att en bockning där ändrar ingenting.
- MarkupCraft har ingen 3D-vy, så 3D-knapparna gör ingenting här.

## Ta med den

{{ui:Export}} sparar stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Import…}} lägger till en, från en annan dator eller en kollega. En importerad fil kan bara peka på MarkupCrafts egna verktyg: allt annat i den lämnas bort och räknas i statusfältet. {{ui:Delete this style}} tar bort en av dina egna.

:::note
Dessa inställningar stannar i den här webbläsaren. {{ui:Use this style in every app}} under stilkorten gör att varje app öppnas i sin motsvarande stil: {{ui:PDF review}} hör ihop med de andra apparnas menyradsstilar, {{ui:Ribbon}} med deras menyflikar, och MarkupCrafts egna verktygsfält med deras. En app utan motsvarande stil behåller sin egen.
:::

:::tip
Arbetsytelayouterna i {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}}) bygger sin menyflik av flikarna i stilen {{ui:Ribbon}} och sin verktygslåda av MarkupCrafts verktygsfält, så att varje verktyg fungerar på samma sätt i dem.
:::

Relaterat: [Tangentbord och mus](topic:keyboard) · [MarkupCraft-inställningar](topic:settings) · [Kommer från annan markeringsprogramvara](topic:coming-from)
