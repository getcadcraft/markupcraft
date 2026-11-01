---
title: En rundtur på skärmen
summary: Verktygsfältet, bladlistan, bladytan, de fem panelerna till höger och statusfältet, med de namn som står på skärmen.
keywords: skärm, layout, verktygsfält, paneler, sidofält, miniatyrer, egenskaper, statusfält, gränssnitt, helskärm, tema, mörkt läge
from: 18d82de6
---

MarkupCraft fyller webbläsarfönstret. Uppifrån och ned och från vänster till höger:

## Fältet allra överst

Det smala fältet ovanför allt hör till CadCraft-familjen, inte till MarkupCraft självt. Det har:

- appens namn och vilken version du kör,
- {{ui:Om MarkupCraft}}, som öppnar appens sida på webbplatsen,
- {{ui:Hjälp}}, som öppnar den här hjälpen i en sidopanel (eller tryck på {{key:F1}}),
- {{ui:Spara för offline}}, som behåller MarkupCraft, dess PDF-läsare och PDF-skrivare och den här hjälpen i den här webbläsaren så att den öppnas utan anslutning; den säger sedan ”Redo för offline” (se [Arbeta offline](common:offline)),
- skärmlägesknappen ({{ui:Helskärm}}), och
- {{ui:Inställningar}} (eller {{key:Mod+,}}), med fliken {{ui:MarkupCraft}} för appens egna inställningar och {{ui:Allmänt}} för dem som alla CadCraft-appar delar (se [Inställningar för MarkupCraft](topic:settings)), och
- {{ui:Papper}} och {{ui:Modell}}, de ljusa och mörka teman. I {{ui:Modell}} ritas bladen ljust på mörkt; dina markeringar behåller sina egna färger.

Skärmlägesknappen, eller {{key:Ctrl+Shift+F}}, växlar mellan tre lägen: normalt, helskärm och helskärm med fälten dolda. Med fälten dolda för du pekaren till skärmens överkant (eller trycker där) så glider de tillbaka. Den här genvägen använder Ctrl-tangenten på alla datorer, även Mac.

:::note
I helskärm gör {{key:Esc}} också att webbläsaren lämnar helskärmen. Om du bara ville avbryta en ritning trycker du på {{key:Ctrl+Shift+F}} igen för att gå tillbaka till helskärm.
:::

## Verktygsfältet

Under det övre fältet är verktygen grupperade och märkta:

| Grupp | Knappar |
|---|---|
| Fil | {{ui:Öppna}}, {{ui:Spara}}, {{ui:Stäng}} |
| Markera | {{ui:Markera}}, {{ui:Panorera}} |
| Rita | {{ui:Penna}}, {{ui:Överstrykning}}, {{ui:Linje}}, {{ui:Pil}}, {{ui:Rektangel}}, {{ui:Ellips}}, {{ui:Polylinje}}, {{ui:Polygon}} |
| Revidera | {{ui:Moln}}, {{ui:Fritt moln}} |
| Notera | {{ui:Utropsruta}}, {{ui:Text}}, {{ui:Anteckning}}, {{ui:Stämpel}} |
| Mät | {{ui:Kalibrera}}, {{ui:Längd}}, {{ui:Area}}, {{ui:Räkna}} |
| Redigera | {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}} och {{ui:Mer}}: {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}}, {{ui:Avmarkera}} |

Verktyget du använder ser nedtryckt ut. Håll pekaren över en knapp för att se dess tangent (till exempel ”Rektangel (R)”); menyn {{ui:Mer}} listar varje kommandos tangent bredvid det. Knappar som inte kan användas just nu är nedtonade: {{ui:Kopiera}} tills du markerar en markering, {{ui:Klistra in}} tills något har kopierats. En liten punkt efter {{ui:Spara}} betyder att vissa markeringar inte är sparade ännu. Hela tangentlistan finns i [Tangentbord och mus](topic:keyboard).

Ett verktyg förblir aktivt efter att du ritat med det, så att du kan rita flera moln i rad. Tryck på {{key:Esc}} (två gånger om den nya markeringen fortfarande är markerad) eller {{key:V}} för att gå tillbaka till {{ui:Markera}}.

## Bladlistan (vänster)

{{ui:Blad}} listar varje sida i varje öppen PDF. Varje rad visar en liten bild av bladet, dess namn, dess bladnummer eller fil och sida, och hur många markeringar det har. Siffran efter rubriken är antalet blad.

- Klicka på en rad för att visa det bladet.
- Skriv i {{ui:Sök blad}} för att filtrera efter bladnamn, bladnummer eller filnamn. Tryck på {{key:Enter}} för att öppna den första träffen.

Bladnamn kommer från PDF-filen när den har några. Se [Öppna en ritningsuppsättning och flytta mellan blad](topic:open-a-plan-set).

## Bladytan (mitten)

Bladet du arbetar med. Innan något är öppet visar den ”Öppna en ritningsuppsättning” med en knapp {{ui:Öppna PDF-filer}}. Släpp PDF-filer var som helst här för att öppna dem.

Under bladet finns ett smalt fält med:

- pilarna till föregående och nästa blad, och ”3 av 12: A-101 — Planritning” (håll pekaren över det för att se filen och sidan),
- zooma ut, zoomrutan (skriv en procentsats och tryck på {{key:Enter}}; 100 % är verklig storlek på en typisk skärm), zooma in,
- {{ui:Anpassa sida}} och {{ui:Anpassa bredd}}.

Varje blad minns sin egen zoom medan uppsättningen är öppen.

När du jämför två blad visas en teckenförklaring här: ”Endast på det gamla bladet”, ”Endast på det nya bladet” och ”På båda”. Se [Jämför två revideringar](topic:compare-revisions).

## Panelerna (höger)

Fem flikar:

| Flik | Vad den visar |
|---|---|
| {{ui:Egenskaper}} | Den markerade markeringen: författare, datum, uppmätta värden, status, ämne, text, kommentar, stil, dess svar och dess åtgärdspost. Med ett ritverktyg aktivt och inget markerat: inställningarna som nya markeringar kommer att använda. Med inget markerat och {{ui:Markera}} aktivt: bladet, med nummer, titel, varifrån namnet lästes, pappersstorlek, skala och {{ui:Byt namn på bladet}}. |
| {{ui:Markeringar}} | Varje markering i den öppna uppsättningen, med filter, och exporterna {{ui:CSV}} och {{ui:BCF}}. Se [Markeringslistan](topic:markups-list-and-export). |
| {{ui:Åtgärdslista}} | Numrerade åtgärdsposter med ansvarig, förfallodatum och status. Se [Gör en åtgärdslista](topic:punch-list). |
| {{ui:Verktyg}} | Verktygslådan: sparade verktyg med stil. Se [Verktygslådan](topic:tool-chest). |
| {{ui:Jämför}} | Lägg två blad över varandra. Se [Jämför två revideringar](topic:compare-revisions). |

## Statusfältet (nederst)

- Till vänster, var pekaren är på bladet, i tum (eller millimeter, i [Inställningar](topic:settings)) på papperet.
- I mitten, meddelanden: vad ett verktyg väntar på härnäst, vad som just sparades, varför något avvisades. **Läs det när något inte händer.**
- Bladets skalknapp (”Inte kalibrerat”, eller skalan). Klicka på den för att ange skalan. Se [Kalibrera ett blad och mät](topic:calibrate-and-measure).
- Ditt namn (”Ange ditt namn” tills du anger ett). Klicka på det för att ändra det.

## På en liten skärm

Under cirka 1180 pixlars bredd blir panelerna smalare och bladbilderna krymper. På en skärm i telefonstorlek staplas delarna: verktygsfältet (rulla det i sidled), bladet, statusfältet, panelerna och sedan bladlistan längst ned. En surfplatta i liggande läge behåller hela layouten.
