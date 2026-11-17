---
title: Öppna en ritningssats och byt mellan blad
summary: Öppna en eller flera PDF-filer, eller börja med tomma sidor, hitta blad efter nummer eller namn, zooma och panorera, och byt namn på ett blad när filen har fel namn.
keywords: öppna, ny, tom sida, tomt blad, skiss, rutnät, namnlös, ritningssats, sats, blad, sidor, miniatyrer, sidetiketter, bladnummer, ritningshuvud, byt namn, navigera, zooma, panorera, anpassa, sök blad
from: 1e7f4d50
---

## Öppna satsen

1. Välj {{ui:Öppna}} i verktygsfältet, eller tryck på {{key:Mod+O}}.
2. I filväljaren markerar du alla PDF-filer i satsen ({{pick:mac=håll ned ⌘ och klicka på varje fil|windows linux=håll ned Ctrl och klicka på varje fil}}, eller markera ett intervall med Shift), och bekräfta.
   Eller dra filerna från {{pick:mac=Finder|windows=File Explorer|linux=din filhanterare}} till bladytan. "Släpp PDF-filer för att öppna dem" visas medan du drar.
3. Vänta medan statusfältet säger "Öppnar <fil>…". För stora filer räknas det: "(10 av 60 blad)".

Resultat: listan {{ui:Blad}} visar varje sida i varje fil, i den ordning du öppnade dem, och statusfältet säger något i stil med "Öppnade 3 filer (42 blad i satsen)." Om filerna redan hade kommentarer lägger det till hur många som lästes in.

För att lägga till fler filer i satsen senare, öppna dem på samma sätt. De läggs sist i listan.

## Börja med tomma sidor

För att skissa eller anteckna utan ritning, skapa tomma sidor i stället för att öppna en PDF:

1. Välj {{ui:Ny}} i verktygsfältet, eller {{ui:Börja med en tom sida}} på startskärmen, eller tryck på {{key:Mod+N}} där webbläsaren tillåter det (skrivbordsappen och Studio gör alltid det).
2. Välj {{ui:Pappersstorlek}}: Letter, Tabloid eller ANSI B, ARCH D, ARCH E, A4, A3 eller A1, och {{ui:Stående}} eller {{ui:Liggande}}.
3. Välj ett {{ui:Rutnät}}: {{ui:Inget}}, {{ui:Punkter}} eller {{ui:Rutor}}. Rutnätet är var 1/4 tum med en tjockare linje varje tum på papper i tum, och var 5 mm med en tjockare linje var 10 mm på metriskt papper. Det skrivs ut på sidan.
4. Skriv hur många {{ui:Sidor}} du vill ha, från 1 till 20, och välj {{ui:Skapa}}.

Resultat: en ny PDF med namnet "Untitled-1.pdf" (sedan "Untitled-2.pdf" och så vidare) öppnas som vilken annan fil som helst, skapad här på den här datorn. Alla verktyg fungerar på den, och {{ui:Spara}} laddar ner "Untitled-1 (marked up).pdf". MarkupCraft minns dina val till nästa gång.

Sidorna har ingen skala: statusfältet säger "Inte kalibrerad". Rutnätet är ingen skala. För att mäta, kalibrera bladet eller välj en skala först; se [Kalibrera och mät](topic:calibrate-and-measure).

För att lägga till en sida i en tom sats, öppna ett av dess blad och välj {{ui:Lägg till en tom sida}} under listan {{ui:Blad}}. Den nya sidan har samma papper och rutnät och läggs sist. Som alla sidändringar kan den inte ångras; se [Skriv ut och ändra sidorna](topic:pages-and-printing).

## Så får bladen sina namn

MarkupCraft namnger varje blad "<bladnummer> — <titel>", till exempel "A-101 — Planritning", utifrån det första av dessa det hittar:

1. Ett namn som du skrev med {{ui:Byt namn på bladet}} (nedan).
2. PDF:ens egna sidetiketter, när den som gjorde PDF:en ställde in dem (till exempel "A-101").
3. Ritningshuvudet: MarkupCraft läser sidans text och letar efter något som liknar ett bladnummer (A-101, A1.01, M-201A, KA1-1), föredrar det nedre högra hörnet, den högra remsan och det nedre bandet, och tar den största texten nära det som titel.
4. Annars filnamnet och sidan: "Plans — sida 3".

För att se vilket som användes, tryck på {{key:Esc}} tills inget är markerat och {{ui:Markera}} är på, och titta sedan i {{ui:Egenskaper}}: "Läst från" säger "Sidans etikett", "Ritningshuvudet", "Filnamnet" eller "Inskrivet för hand".

:::note
Inskannade blad, och PDF:er vars text exporterades som linjer, har ingen text att läsa. De namnges efter fil och sida tills du byter namn på dem. MarkupCraft kan ännu inte läsa text från bilder.
:::

## Byt mellan blad

- Klicka på ett blad i {{ui:Blad}}.
- Tryck på {{key:PageDown}} för nästa blad och {{key:PageUp}} för föregående, eller använd pilarna i raden under bladet.
- Skriv i {{ui:Sök blad}}: en del av ett nummer ("A-2"), ett ord i titeln ("tak"), eller ett filnamn. Listan smalnar av när du skriver ("4 av 42"). Tryck på {{key:Enter}} för att öppna första träffen. Töm rutan för att se alla blad igen.

Varje blad behåller sin egen zoom och position tills du stänger satsen.

## Zooma och panorera

:::mouse
- **Zooma:** rulla hjulet över bladet. Det zoomar runt pekaren. Eller tryck på {{key:Plus}} och {{key:Minus}} (också med {{key:Mod}}), eller använd zoomknapparna. Skriv en exakt procentsats i zoomrutan.
- **Anpassa:** {{ui:Anpassa sida}} ({{key:Mod+0}}) visar hela bladet; {{ui:Anpassa bredd}} ({{key:Mod+9}}) fyller bredden.
- **Panorera:** dra med mittenknappen (hjulet), eller dra med högerknappen, eller håll ned {{key:Space}} och dra, eller välj {{ui:Panorera}} ({{key:H}}) och dra. När inget är markerat flyttar piltangenterna också bladet.
:::

:::mac mouse
På en Mac-pekplatta zoomar tvåfingersrullning (den rullar inte bladet). För att panorera, håll ned {{key:Space}} och dra med ett finger, eller byt till {{ui:Panorera}} med {{key:H}}. En nypning zoomar in i Chrome, Edge och Firefox.
:::

:::touch
- **Zooma och panorera:** lägg två fingrar på bladet. Sprid eller nyp dem för att zooma runt punkten mellan dem, och flytta dem tillsammans för att panorera. Båda sker samtidigt.
- **Panorera med ett finger:** välj {{ui:Panorera}} först. Med alla andra verktyg ritar eller markerar ett finger.
- {{ui:Anpassa sida}} och {{ui:Anpassa bredd}} finns i raden under bladet.
:::

Du kan zooma ut långt förbi hela bladet och in till 6400%. Bladet ritas om skarpt en stund efter att du slutat röra det.

## Bokmärken

{{ui:Bokmärken}}, överst i panelen {{ui:Blad}}, visar bokmärkena (dispositionen) i PDF:en som det öppna bladet tillhör. Välj ett för att gå till dess sida. Pennan byter namn på ett bokmärke och krysset tar bort det. {{ui:Bygg från blad}} skapar ett bokmärke per blad, med namn som bladlistan visar dem (bladnummer och titel), och {{ui:Lägg till för det här bladet}} lägger till ett för bladet du är på. Ändringarna är en del av filens osparade arbete: {{ui:Spara}} skriver dem i kopian, där alla PDF-läsare visar dem.

## Vrid vyn

De två vridknapparna till höger i raden under bladet vrider vyn en kvartsvarv åt något håll, för ett blad som ritats på sidan. Endast vyn vrids: PDF:en och dess markeringar förblir som de är, och nästa blad öppnas som dess PDF gör det (varje blad minns sin egen vridning medan satsen är öppen). Text du lägger till i en vriden vy läses rakt upp som du ser den. För att vrida själva sidan i den sparade PDF:en, använd {{ui:Sidor}}, sedan {{ui:Rotera sidan medurs}}; se [Skriv ut och ändra sidorna](topic:pages-and-printing).

## Byt namn på ett blad

När ett bladnamn är fel eller saknas:

1. Visa bladet.
2. Tryck på {{key:Esc}} tills inget är markerat och verktyget {{ui:Markera}} är på. {{ui:Egenskaper}} visar nu bladet.
3. Välj {{ui:Byt namn på bladet}}.
4. Skriv {{ui:Bladnummer}} och {{ui:Titel}}, och välj {{ui:Spara}}.

Resultat: bladlistan, raden under bladet och markeringslistan använder alla det nya namnet, och "Läst från" säger "Inskrivet för hand". Namnbytet kan ångras med {{key:Mod+Z}}.

För att gå tillbaka till vad filen säger, öppna {{ui:Byt namn på bladet}} igen, töm båda rutorna och välj {{ui:Spara}}.

När du sparar blir ett skrivet bladnummer sidans etikett i PDF:en, så andra PDF-läsare visar "A-101" i sin sidruta också. Om du ger en sida i en fil ett nummer får varje sida i den filen en etikett i kopian (dess skrivna nummer, annars dess gamla etikett, annars sidnumret). En skriven titel behålls för MarkupCraft, men andra läsare visar den inte.

## Ta PDF:en till TakeoffCraft, eller hämta den hit

När TakeoffCraft är öppet på samma ställe (labbet, Try eller onlineapparna) har raden under bladet {{ui:Öppna i TakeoffCraft}}. Den öppnar bladets PDF i TakeoffCraft i en ny flik, så som den öppnades här, så att du kan mäta mängder på den. Dina markeringar stannar här; spara dem som vanligt.

TakeoffCrafts knapp {{ui:MarkupCraft}} gör detsamma åt andra hållet: PDF:en öppnas här som om du hade valt {{ui:Öppna}}. Om webbläsaren blockerar den nya fliken, tillåt popup-fönster för den här webbplatsen och välj knappen igen.
