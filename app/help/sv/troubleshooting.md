---
title: Felsökning
summary: Meddelanden som MarkupCraft visar och vad du ska göra åt dem, samt åtgärder för sådant som verkar inte fungera.
keywords: problem, fel, fungerar inte, hjälp, meddelande, öppnas inte, kan inte spara, lösenord, skyddad, mätning avvisad, kalibrera, offline, tom, långsam, förlorade markeringar, frågetecken
from: bb650b39
---

Det mesta förklaras i statusfältet längst ner på skärmen. Läs det först.

## Öppna filer

**”MarkupCraft öppnar PDF-filer. ”x” är inte en PDF.”**
Du valde eller släppte något annat. Bara PDF-filer öppnas. Exportera ritningarna från ditt CAD-program som PDF först.

**””namn” kräver ett lösenord för att öppnas. Öppna en oskyddad kopia.”**
PDF-filen är lösenordsskyddad. Be avsändaren om en oskyddad kopia, eller öppna den i ett PDF-program där du känner till lösenordet och spara en kopia utan lösenord.

**””namn” kunde inte läsas som en PDF (…)”**
Filen är skadad eller är inte egentligen en PDF (en ofullständig nedladdning, en bilaga i e-post som klipps av). Ladda ner den igen. Om andra PDF-program kan öppna den, använd deras ”Spara som” för att göra en ren kopia och öppna den.

**”Vissa filer öppnades inte”**
När du öppnar flera på en gång listar den här rutan filerna som misslyckades och varför. De andra är öppna.

**”PDF-läsaren kunde inte läsa in: …”**
PDF-motorn kunde inte hämtas. Online: ladda om sidan och försök igen; kontrollera att en brandvägg eller innehållsblockerare inte blockerar sajten. Offline: MarkupCraft sparades inte för användning offline i den här webbläsaren (fältet överst säger inte ”Redo offline”). Gå online, välj {{ui:Save for offline}} och vänta på ”Redo offline”. Se [Arbeta offline](common:offline).

**”Vissa noteringar kan visas två gånger på skärmen” eller ”Ytterligare detaljer för noteringar kunde inte läsas”**
Filens befintliga kommentarer är ovanliga. De öppnas ändå så väl MarkupCraft kan; kontrollera dem innan du förlitar dig på dem. Sparandet fungerar ändå.

**Bladet har fel namn, eller ”sida 3”**
Se [Så får blad sina namn](topic:open-a-plan-set#how-sheets-get-their-names). Skannade blad har ingen text att läsa; använd {{ui:Rename sheet}}.

**Samma blad visas två gånger**
Samma fil öppnades två gånger. Välj {{ui:Close}} (spara först om det behövs) och öppna satsen igen.

## Rita och markera

**Inget händer när jag klickar på bladet**
Kontrollera vilket verktyg som är nedtryckt i verktygsfältet, och läs statusfältet. Med {{ui:Rectangle}}, {{ui:Ellipse}} och {{ui:Cloud}} ritas inget om du klickar utan att dra: dra. Med {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} och {{ui:Area}} läggs punkter till: avsluta med dubbelklick eller {{key:Enter}}.

**”En polygon behöver minst 3 punkter.” (eller 2 för en polylinje)**
Klicka på fler punkter innan du avslutar.

**”Inget skrivet, så ingen text lades till.”**
Textrutor och utropsrutor behålls bara när de har text. Rita om den och skriv innan du klickar bort.

**”De två punkterna är samma. Klicka på två olika punkter.”**
För linjer, pilar, längder och kalibrering måste de två ändarna ligga på avstånd från varandra. Dra, eller klicka två gånger på olika ställen.

**Jag kan inte flytta eller ta bort en markering; den har en grå streckad ruta**
Det är en skrivskyddad kommentar som följde med filen (till exempel en textmarkering). MarkupCraft behåller den som den är: du kan bara svara på den. Statusfältet säger ”skrivskyddade markeringar behålls som i filen”.

**Mina tangenter skriver bokstäver i en ruta i stället för att välja verktyg**
Markören står i en textruta (ett svar, ett fält i {{ui:Properties}}, bladsökningen). Klicka på en tom del av bladytan först, eller tryck på {{key:Esc}} om du redigerar markeringstext.

**Space panorerar inte, eller piltangenterna gör ingenting**
Du klickade just på en verktygsknapp, så den har fortfarande tangentbordet. Dra med mittenknappen i stället, eller klicka en gång på bladet med {{ui:Select}} påslagen och försök igen. Se även [Tangentbord och mus](topic:keyboard#when-a-key-does-nothing).

**En nypning på pekskärmen lämnade ett märke**
Ett drag-verktyg (penna, moln, rektangel) startade innan det andra fingret kom och slutfördes innan det avbröts. Tryck på {{ui:Undo}}. Sätt ner båda fingrarna samtidigt när du menar att zooma.

## Mäta

**”Kalibrera det här bladet först: ange två punkter på ett känt avstånd från varandra, eller välj dess skala. Mät sedan.”**
Varje blad behöver sin egen skala innan {{ui:Length}} eller {{ui:Area}} kan användas. MarkupCraft har bytt till {{ui:Calibrate}}: klicka på de två ändarna av ett känt mått och skriv dess längd, eller klicka på skalknappen i statusfältet och välj en skala. Se [Kalibrera ett blad och mät](topic:calibrate-and-measure).

**”Det där är inte en längd som MarkupCraft förstår.”**
Skriv den så här: `24'-0"`, `12' 6 1/2"`, `7.2 m` eller `900 mm`. Se [Enheter, längder och skalor](topic:units-and-scales).

**Mätningarna är lite fel, eller helt fel**
- En förinställd skala på en PDF som inte är i full storlek mäter fel. Kalibrera i stället från ett långt känt mått.
- En tusentalsavgränsare lästes som decimalpunkt: `1,200 mm` betyder 1.2 mm. Skriv `1200 mm`.
- Zooma in när du klickar på ändarna.
- Ritningen kanske inte är i skala (”NTS”).

**”Välj en räknegrupp först, och Shift+klicka sedan på en prick för att ta bort den.”**
Välj {{ui:Select}}, klicka på räknegruppen, välj {{ui:Count}} igen och {{key:Shift}}-klicka på pricken.

## Spara

**”Den här PDF:en är skyddad (krypterad), så en markerad kopia kan inte skrivas.”**
Filen förbjuder ändringar. Be om en oskyddad kopia. Under tiden kan du ändå exportera markeringslistan som CSV eller BCF.

**”PDF-skrivaren kunde inte läsas in: …”**
Oftast är du offline och appen har inte sparats för användning offline (ingen ”Redo offline” i fältet överst). Dina markeringar finns kvar i fliken: håll den öppen, gå online och välj {{ui:Save}} igen. Välj sedan {{ui:Save for offline}} så att det fungerar offline nästa gång; den sparade kopian innehåller PDF-skrivaren.

**”Kunde inte spara <file>”**
Rutan visar varför. Dina markeringar finns kvar i fliken. Försök igen; om det upprepas, exportera CSV-filen så att kommentarerna inte förloras, och rapportera meddelandet.

**Jag valde Spara men bara en fil kom fram**
Din webbläsare blockerade de extra nedladdningarna. Leta efter ett meddelande i adressfältet, tillåt den här sajten att ladda ner flera filer och spara sedan igen.

**Jag hittar inte den sparade filen**
Den hamnade i din webbläsares nedladdningsmapp. Öppna webbläsarens nedladdningslista (i Chrome och Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; i Firefox och Safari, nedladdningsknappen i verktygsfältet) för att se var. Se [Webbläsare och datorer](common:browsers).

**Vissa texter visar ”?” i andra PDF-visare**
Tecken utanför den västeuropeiska teckenuppsättningen skrivs ut som ”?” i kopian. Sparmeddelandet räknar dem. Se [Spara den markerade PDF:en](topic:save-the-marked-up-pdf).

**Stämpeln visar morgondagens (eller gårdagens) datum**
Stämpeldatum är i UTC. Se [Stämplar och klisterlappar](topic:stamps-and-notes).

## Arbeta offline

**Knappen för offline säger ”Kunde inte spara”**
Några av appens filer laddades inte ner. Kontrollera anslutningen och klicka på knappen igen; den räknar ”Sparar N av M” tills det står ”Redo offline”.

**Knappen för offline säger ”Offline inte tillgängligt”**
Det här webbläsarfönstret kan inte behålla en offlinekopia: ett privat fönster, eller en dator vars policy blockerar det. Öppna MarkupCraft i ett vanligt fönster och försök igen.

**Offline är appen en äldre version**
Offlinekopian är den version du sparade. När du är online klickar du på ”Redo offline” och väljer ”Spara igen (hämta den senaste versionen)”. För att frigöra utrymmet väljer du ”Ta bort offlinekopian”. Se [Arbeta offline](common:offline).

**Hjälpen öppnas inte**
Tryck på {{key:F1}} (på en Mac, med **fn**), eller välj {{ui:Help}} i fältet överst. Den fungerar också offline.

## Förlorade saker

**Mina markeringar är borta efter att jag stängt eller laddat om fliken**
Öppna MarkupCraft igen i samma webbläsare: den erbjuder det osparade arbetet tillbaka med ”Återställ ditt arbete?”. Välj {{ui:Recover}} och spara PDF:en. Kopior behålls upp till 30 dagar; ett privat fönster eller rensade webbplatsdata lämnar inga kopior alls. Se [Återställ ditt arbete](common:recover).

**Mitt namn, verktygsinställningar eller verktygslåda är borta**
De sparas bara i den här webbläsaren och har rensats (webbplatsdata rensad, ett privat fönster, en annan webbläsare eller dator, eller Safaris rensning av sajter som inte besökts på ett tag). Ange namnet igen och importera din exporterade låda. Se [Vad som finns kvar i den här webbläsaren](topic:browser-storage).

**”Verktygslådan kunde inte sparas i den här webbläsaren (lagringen är avstängd eller full). Exportera den för att behålla den.”**
Webbläsaren vägrar lagra data för den här webbplatsen (privat läge, lagring blockerad av en inställning eller policy, eller full). Exportera lådan efter att du ändrat den, och importera den nästa gång.

## Visning och hastighet

**Bladet ser suddigt ut en stund**
MarkupCraft visar en snabb, grov återgivning medan du zoomar eller panorerar, och ritar om den skarp en stund efter att du slutat.

**Allt är långsamt med en stor sats**
Stäng andra tunga flikar, öppna färre filer samtidigt och undvik att zooma till max på enorma blad. Se [Arbeta med flera filer samtidigt](topic:several-files#big-sets).

**Bladet är mörkt med ljusa linjer**
Du är i temat {{ui:Model}}. Välj {{ui:Paper}} i fältet överst för mörka linjer på vitt. Dina markeringar och den sparade PDF:en påverkas inte.
