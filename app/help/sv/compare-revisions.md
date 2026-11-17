---
title: Jämför två revisioner
summary: Lägg över en gammal och en ny utgåva av ett blad i två färger, rikta in dem med två punkter och sätt moln på det som ändrats.
keywords: jämför, överlägg, bladöverlägg, revision, diff, skillnader, ändringar, gammal ny, passa in, kontrollgranskning, utgåva, bulletin
from: 62f5d1c5
---

Jämför lägger två blad över varandra. Linjer som bara finns på det gamla bladet visas i rött, linjer som bara finns på det nya bladet i blått, och linjer på båda i en dämpad grå. Färgerna anges i teckenförklaringen under bladet: "Endast på det gamla bladet", "Endast på det nya bladet" och "På båda".

## Jämför två blad

1. Öppna båda utgåvorna. De kan vara sidor i samma PDF eller i olika PDF-filer; öppna dem tillsammans som en uppsättning (se [Arbeta med flera filer samtidigt](topic:several-files)).
2. Välj fliken {{ui:Jämför}} till höger.
3. Välj {{ui:Gammalt blad}} och {{ui:Nytt blad}}. Det nya bladet börjar som det du är på. När flera filer är öppna visas varje blads filnamn efter dess namn.
4. Välj {{ui:Jämför}}.

Resultat: MarkupCraft visar det nya bladet med det gamla blandat i, teckenförklaringen visas, och fliken säger "Jämför <old> (gammalt) med <new> (nytt). Markeringar på det nya bladet förblir redigerbara."

## Tona mellan gammalt och nytt

Dra reglaget {{ui:Gammalt och nytt}}. Helt till vänster visas bara det gamla bladet, helt till höger bara det nya och i mitten båda. Att skjuta fram och tillbaka är ofta det snabbaste sättet att se en liten ändring.

## Rikta in bladen

Om de två utgåvorna plottades med olika marginal, storlek eller rotation ser allt ändrat ut. Så här åtgärdar du det:

**Med två punkter (bäst):**

1. Välj {{ui:Passa in med två punkter}}. Vyn visar bara det gamla bladet.
2. Klicka på en skarp detalj du kan hitta på båda bladen, till exempel en pelarrasters skärningspunkt. Fliken räknar stegen ("1 av 4").
3. Klicka på en andra detalj, långt från den första, till exempel det motsatta rasterhörnet.
4. Vyn växlar till det nya bladet. Klicka på den första detaljen igen.
5. Klicka på den andra detaljen igen.

Resultat: "Inpassat: gammalt blad skalat 100.00%, vridet 0.00°. Justera för finjustering." Det gamla bladet flyttas, skalas och vrids så att det passar. {{key:Esc}} avbryter medan du väljer. Zooma in på varje detalj innan du klickar för en exakt passning.

**Med justering:** använd de fyra pilknapparna under "Passa in" för att flytta det gamla bladet. Välj steget (0.25, 1, 5 eller 20 pt; 72 pt är en tum på papperet). Fliken säger hur långt det har flyttats.

{{ui:Återställ}} tar bort inpassningen och justeringarna.

## Bara ändrade linjer

Under inpassningsknapparna väljer du {{ui:Ändrade linjer}} i stället för {{ui:Bildöverlagring}}. MarkupCraft jämför då bladens egna linjer, inte deras bilder: det nya bladet visas som det är, med linjerna som bara finns på det gamla bladet i rött och linjerna som bara finns på det nya i blått. En linje som bara blivit kortare visar bara den saknade delen. Passa in bladen först (se ovan): jämförelsen använder inpassningen, så ett blad som bara förskjutits visar inga ändringar. Statusraden säger hur mycket som ändrats.

Det fungerar för PDF-filer plottade från CAD, där ritningen består av linjer. Skannade blad har inga linjer att jämföra, så använd bildöverlagringen för dem. Text satt i ett typsnitt (inte ritad som streck) jämförs inte.

## Markera ändringarna

Under jämförelsen är du på det nya bladet och alla verktyg fungerar. Rita moln runt ändringarna när du hittar dem; de hör till det nya bladet och finns kvar när du slutar jämföra.

{{ui:Sätt moln på ändringarna}} gör det åt dig: den grupperar de ändrade linjerna som ligger nära varandra och ritar ett revisionsmoln runt varje grupp på det nya bladet, med "Ändrat sedan <old sheet>" som kommentar. Ett {{key:Mod+Z}} tar bort dem alla; ta bort de du inte behöver.

## Jämför en hel uppsättning

När den nya utgåvan kommer som en egen PDF-fil öppnar du båda PDF-filerna och öppnar {{ui:Jämför två uppsättningar}} i fliken {{ui:Jämför}}. Välj den gamla filen och den nya filen och välj sedan {{ui:Jämför uppsättningarna}}. Blad paras ihop efter sitt nummer (som i [byte av blad i en reviderad uppsättning](topic:slip-sheet-a-revised-set)), jämförs på sina linjer och listas med mest ändrade först. Välj ett blad i listan för att jämföra det paret med {{ui:Ändrade linjer}}.

{{ui:Sätt moln på alla ändringar}} sätter moln på varje grupp av ändrade linjer på varje ändrat blad, i ett steg som du kan ångra. Uppsättningsjämförelsen passar inte in bladen först, så ett blad som förskjutits på sidan visas som ändrat: jämför det paret för sig och använd {{ui:Passa in med två punkter}}.

## Sluta jämföra

Välj {{ui:Sluta jämföra}}, eller gå till ett annat blad. Inpassningen minns för samma par av blad tills du stänger uppsättningen.

## Bra att veta

- Jämförelsen arbetar med det som är ritat, pixel för pixel. Den vet inte att en linje har flyttats; den visar den gamla positionen i en färg och den nya i den andra.
- Text som flödat om, ett ändrat datum i ritningshuvudet eller en annan plotstil visas också som ändringar.
- Ett skannat blad jämfört med ett plottat är brusigt: skanning suddar ut och förskjuter linjer.
- Jämförelse av text satt i ett typsnitt, och en lista över vad som ändrats, finns inte ännu.
