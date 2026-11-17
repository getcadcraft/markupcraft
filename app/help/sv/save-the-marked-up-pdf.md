---
title: Spara den markerade PDF-filen
summary: Ladda ner en kopia med alla markeringar inskrivna som vanliga PDF-kommentarer, kontrollera hur andra PDF-läsare visar dem och fortsätt arbeta med filen senare.
keywords: spara, ladda ner, exportera pdf, markerad, annoteringar, kommentarer, dela, skicka, ärende, fortsätt arbeta, öppna igen, tur och retur, skriva ut
from: 4c198ebe
---

## Spara

1. Välj {{ui:Spara}} i verktygsfältet eller tryck på {{key:Mod+S}}.
2. Om flera filer är öppna väljer du {{ui:Den här filen}} (filen för bladet du är på) eller {{ui:Varje ändrad fil}}. Varje kopia laddas ner separat.
3. Vänta tills ”Sparar <file>…” är klart. Den första sparningen under en session laddar också PDF-skrivaren.

Resultat: webbläsaren laddar ner ”<name> (marked up).pdf”, och statusfältet visar: ”Sparade A-Plans (marked up).pdf (24 markeringar, 18,2 MB). Originalfilen är oförändrad.” Punkten efter {{ui:Spara}} försvinner.

**Din ursprungliga PDF-fil ändras aldrig.** MarkupCraft skriver en ny fil. Var den hamnar beror på webbläsarens inställningar för nedladdningar (se [Filer som MarkupCraft öppnar och sparar](topic:files#where-downloads-go)).

## Fortsätt arbeta med den senare

Öppna kopian ”(marked up)” nästa gång, inte originalet. Allt kommer tillbaka och går att redigera: markeringar, statusar, svar, åtgärdspunkter, skalan för varje blad och eventuella bladnamn du skrev. Om du sparar igen laddas en fil ner med samma namn ”(marked up)”. Webbläsaren kan lägga till ett nummer, till exempel ”(1)”, om den gamla nedladdningen finns kvar i mappen. Ersätt eller rensa gamla kopior själv.

MarkupCraft sparar inte PDF-filen av sig själv. Under arbetet sparas en återställningskopia i den här webbläsaren, så att en krasch eller en stängd flik inte förlorar dina markeringar. Nästa gång du öppnar MarkupCraft frågar den ”Återställ ditt arbete?”. Se [Återställ ditt arbete](common:recover). Spara ändå innan du stänger. Om du försöker lämna med osparade markeringar frågar webbläsaren först ”Lämna webbplatsen?” (iPad Safari gör inte det).

## Vad andra PDF-läsare visar

Varje markering skrivs som en vanlig PDF-kommentar (annotering) med sin egen ritning. Därför visar, skriver ut och listar alla PDF-läsare den i sin kommentarspanel:

- **Utseendet är detsamma** som i MarkupCraft: moln med sina bågar, pilspetsar, stämplar, räknepunkter, åtgärdsnummer och mätetiketter.
- **Detaljerna är standard:** författare, datum, ämne, kommentarstext och färger.
- **Moln** är rektangel- eller polygonkommentarer med en molnig kant. **Textrutor** och **hänvisningar** är textrutekommentarer. **Anteckningar** är post-it-lappar. **Penn-** och **överstrykningsstreck** är bläck. **Stämplar** är stämpelkommentarer.
- **Längder och areor** är mätkommentarer. Varje kalibrerat blad har sin skala, så läsare som förstår mått kan visa värdena.
- **Svar** är svar på kommentaren och **statusar** är granskningstillstånd (Öppen visas som inget tillstånd).
- **Bladnummer** du skrev blir de sidetiketter som andra läsare visar.

Några saker läser bara MarkupCraft tillbaka: åtgärdspunktens ansvarige och förfallodatum, punktens status och vissa stildetaljer. Andra program behåller dem om de inte skriver om kommentaren.

I ett annat program kan kommentarer flyttas eller redigeras som vanligt. Om någon gör det och skickar tillbaka filen använder MarkupCraft kommentarens nya position när filen öppnas.

Fullständig information: [Vad som sparas i PDF-filen](topic:what-the-pdf-keeps).

## Tecken som skrivs ut som ”?”

Markeringstexten skrivs med typsnittet Helvetica som alla PDF-läsare har. Det täcker engelska och västeuropeiska bokstäver (é, ñ, ü, ø och liknande), men inte andra skriftsystem, symboler utanför den uppsättningen eller emojis. Sådana tecken visas korrekt i MarkupCraft men skrivs ut som ”?” i den sparade kopian. Sparmeddelandet räknar dem: ”3 tecken utanför den västeuropeiska uppsättningen skrivs ut som ”?” i kopian.” Skriv ut ordet eller använd en enkel ersättning (till exempel ”diam.” för diametertecknet).

## Filer som inte kan sparas

- **Skyddade PDF-filer:** ”Den här PDF-filen är skyddad (krypterad), så en markerad kopia kan inte skrivas. Be om en oskyddad kopia.” Du kan fortfarande granska den på skärmen och exportera CSV- och BCF-filen.
- Om sparningen misslyckas av någon annan anledning visar en ruta ”Kunde inte spara <file>” med orsaken. Dina markeringar finns kvar i fliken. Inget förloras förrän du stänger den.

## Platta till och skriva ut

Det finns ännu ingen funktion för att platta till (bränna in markeringar i sidan) och inget utskriftskommando. För att skriva ut öppnar du den sparade kopian i valfri PDF-läsare och skriver ut med kommentarerna synliga.
