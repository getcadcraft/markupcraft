---
title: MarkupCraft-inställningar
summary: Ändra ditt namn, färgen och linjetjockleken för nya markeringar, var klistra in lägger kopior och enheterna för längder och bladets position.
keywords: inställningar, egenskaper, alternativ, namn, författare, färg, standardfärg, linjetjocklek, linjebredd, tjock, tunn, klistra in, pekare, förskjutning, enheter, metrisk, millimeter, tum, fot, återställ
from: 63ad97fd
---

Öppna {{ui:Inställningar}} med kugghjulet i raden överst, eller tryck på {{key:Mod+,}}. Den första fliken, {{ui:MarkupCraft}}, innehåller inställningarna för just den här appen; {{ui:Allmänt}} innehåller dem som alla CadCraft-appar delar (tema, verktygsfält, paneler). MarkupCraft-inställningarna gäller bara i appen: du ändrar dem här, och den här webbläsaren kommer ihåg dem (se [Vad som finns kvar i den här webbläsaren](topic:browser-storage)). En ändring gäller direkt; det finns inget att spara.

## Ditt namn

{{ui:Namn på markeringar}} är namnet varje ny markering och varje nytt svar får, och som sparade PDF-filer visar som kommentarens författare. Det är samma namn som knappen längst till höger i statusfältet; ändra det på något av ställena. Redan ritade markeringar behåller namnet de gjordes med. Se [Ange ditt författarnamn](topic:set-your-name).

## Nya markeringar

- **{{ui:Markeringsfärg}}** är färgen som nya pennor, linjer, pilar, rektanglar, ellipser, polylinjer, polygoner, moln, hänvisningar och text börjar med (från början röd). Överstrykningspennor, anteckningar, stämplar, längder, areor och räkningar behåller sina egna färger, eftersom deras färger anger vad de är.
- **{{ui:Tunna linjer}}, {{ui:Normal}}, {{ui:Tjocka linjer}}** gör linjerna i just dessa markeringar hälften så breda som de är, eller en halv gång bredare.

En färg eller linjetjocklek du väljer för ett verktyg i {{ui:Egenskaper}} (med verktyget påslaget och inget markerat) går före dessa. Verktyg från [verktygslådan](topic:tool-chest) behåller sin egen stil. Redan ritade markeringar ändras inte: markera dem och ändra dem i {{ui:Egenskaper}}.

## Klistra in

Var {{key:Mod+V}} lägger det du kopierat:

- **{{ui:Vid pekaren}}** (startvärdet): med pekaren på bladet hamnar kopian centrerad dit den pekar. Med pekaren någon annanstans hamnar den bredvid originalet.
- **{{ui:Intill kopian}}**: alltid lite nedanför och till höger om originalet, ett steg längre för varje inklistring.

Knappen {{ui:Klistra in}} och {{key:Mod+Shift+V}} ({{ui:Klistra in på plats}}) fungerar likadant med båda valen. Se [Kopiera, klistra in och duplicera](topic:select-and-edit#copy-paste-and-duplicate).

## Mått

- **{{ui:Visa längder i}}** är enheten som dialogrutan för bladskalan erbjuder först när du kalibrerar från två punkter: fot och tum, decimalfot, tum, meter eller millimeter. Blad du redan kalibrerat behåller sin enhet. Se [Kalibrera ett blad och mät](topic:calibrate-and-measure).
- **{{ui:Position på bladet}}** väljer tum eller millimeter för pekarens position nere till vänster på skärmen. Det är en position på papperet, inte ett verkligt avstånd.

## Återställ

{{ui:Återställ MarkupCraft-inställningarna}} längst ner i dialogrutan återställer dessa inställningar, och panel- och verktygsfältsinställningarna under {{ui:Allmänt}}, till startläget. Ditt namn behålls, eftersom det säger vem du är snarare än hur du vill arbeta, och de färger du valt i varje verktygs egen panel behålls också.
