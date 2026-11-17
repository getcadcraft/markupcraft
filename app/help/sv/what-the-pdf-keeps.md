---
title: Vad som sparas i PDF-filen
summary: Exakt vad den markerade kopian innehåller, vad andra PDF-program ser och vad som läses tillbaka när du öppnar en fil.
keywords: pdf-annoteringar, kommentarer, sparad data, tur och retur, sidetiketter, mätning, granskningstillstånd, svar, interoperabilitet, kompatibilitet, öppna igen, privata data
from: 6439ad28
---

Den markerade kopian är den ursprungliga PDF-filen med kommentarer (PDF-annoteringar) tillagda. Sidorna själva, deras ritningar, text, bokmärken och länkar kopieras som de var.

## Varje markering

| MarkupCraft | Sparas som | Andra PDF-läsare visar |
|---|---|---|
| Rektangel, rutmoln | Kvadratannotering (moln: molnig kant) | En rektangel- eller molnkommentar |
| Ellips | Cirkelannotering | En ellipskommentar |
| Polygon, fritt moln | Polygonannotering (moln: molnig kant) | En polygon- eller molnkommentar |
| Polylinje | PolyLine-annotering | En polylinjekommentar |
| Linje, pil | Linjeannotering (pil: sluten pilspets) | En linje- eller pilkommentar |
| Längd | Linjeannotering markerad som måttsättning, med ett mått | Ett längdmått, där läsaren stöder det |
| Area | Polygonannotering markerad som area, med ett mått | Ett areamått, där det stöds; annars en polygon |
| Räknegrupp | En bläckannotering, en ring per objekt; dess text är "grupp: n" | En bläckkommentar |
| Penna, överstrykningspenna | Bläckannotering (överstrykningspenna markerad som sådan) | En bläckkommentar |
| Text | FreeText-annotering | En textrutekommentar |
| Utropsruta | FreeText-annotering med en hänvisningslinje | En utropsrutekommentar |
| Anteckning | Textannotering | En klisterlapp som öppnas till sin text |
| Stämpel | Stämpelannotering | En stämpelkommentar |

Varje markering sparas med:

- **sitt eget utseende**, ritat exakt så som MarkupCraft ritar det på skärmen, så att det ser likadant ut i alla läsare och skrivs ut likadant, inklusive märket med åtgärdsnumret;
- **författaren**, **skapat- och ändrat-datum**, **ämnet**, **kommentarstexten** (för textrutor och utropsrutor, texten och kommentaren), **färgen** och **opaciteten**;
- **dess MarkupCraft-uppgifter** i en privat post som andra program ignorerar: status, åtgärdspunkt, stil och typ, så att den öppnas exakt likadant igen.

## Trådar och statusar

- Varje svar sparas som en svarskommentar kopplad till sin markering, med författare, datum och text. Svar har ingen egen ikon på bladet.
- Varje statusändring sparas som ett svar med ett granskningstillstånd. Andra granskningsverktyg visar det som Accepted, Rejected eller Completed; Open sparas utan något tillstånd.
- En markering med en annan status än Open men utan någon loggad statusändring får ett svar med granskningstillstånd, så att andra program också ser statusen.
- Svar på skrivskyddade kommentarer från den ursprungliga filen sparas på samma sätt, kopplade till den kommentaren.

## Varje blad

- **Skala:** ett kalibrerat blad får en mätvyport som täcker sidan (det vanliga sättet att spara en sidskala) och MarkupCraft:s egna kopia av kalibreringen.
- **Bladnummer:** ett nummer som skrivs med {{ui:Byt namn på bladet}} blir sidetikett. När någon sida i en fil har en etikett får varje sida i filen en: dess inskrivna nummer, annars dess gamla etikett, annars dess sidnummer.
- **Bladtitel:** en inskriven titel sparas bara för MarkupCraft; andra läsare visar den inte.

## Text och tecken

Text skrivs i Helvetica, som alla PDF-läsare har. Bokstäver utanför den västeuropeiska teckenuppsättningen (Windows-1252) skrivs ut som "?" i kopian; sparmeddelandet räknar dem.

## Kalkylblad och motiveringar

Kalkylblad och motiveringar sparas i en privat post i PDF-filen som heter `/MarkupCraftShell`. Andra PDF-program ignorerar den. En äldre MarkupCraft ignorerar den också och tar bort den nästa gång den sparar filen.

## Vad som händer med kommentarer som redan fanns

När du öppnar en PDF som redan har kommentarer:

- MarkupCraft:s egna kommentarer läses tillbaka exakt. Om ett annat program flyttat eller ändrat storlek på en, gäller dess nya position.
- Rektanglar, ellipser, linjer, polylinjer, polygoner, bläck, textrutor och klisterlappar från andra program blir redigerbara markeringar. **När du sparar tar MarkupCraft bort originalen och skriver dem igen på sitt eget sätt**, med sina popup-rutor och svar. Utseendet kan ändras något.
- Granskningstillstånd från andra program sätter statusen; det senaste vinner.
- Allt annat (textmarkeringar, andra programs stämplar och speciella typer) **lämnas orört** i kopian, skrivskyddat.
- Länkar och formulärfält lämnas orörda och listas inte.

Att spara samma fil igen dubblerar aldrig något: de markeringar MarkupCraft läste ersätts, de läggs inte till igen.

## Vad som inte ändras

Din originalfil på disken ändras aldrig. Kopian är inte optimerad för storlek, så den kan vara något större än originalet. Skyddade (krypterade) PDF-filer kan inte sparas.
