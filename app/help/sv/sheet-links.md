---
title: Bladlänkar
summary: Låt en markering hoppa till ett annat blad, och länka varje bladhänvisning som 3/A-501 till dess blad och vy i ett svep med Batchlänkar.
keywords: hyperlänk, länk, länkar, hoppa, bladhänvisning, detaljhänvisning, sektionshänvisning, 3/A-501, gå till blad, tillbaka, automatisk länk, batchlänk, batchlänkar, ritningshuvud, bladnummer, bladnamn, vy, detalj, byt namn, numrera om, tillägg, pdf-länk
from: 86a17c37
---

En bladlänk tar dig från en markering till ett annat blad i uppsättningen: från en detaljbubbla till detaljen, från en anteckning till bladet den hänvisar till.

## Länka en markering till ett blad

1. Markera markeringen.
2. Välj bladet under {{ui:Länk till blad}} i {{ui:Egenskaper}}.

En liten pil visas uppe till höger på markeringen. För att följa den håller du ned {{key:Mod}} och klickar på markeringen, eller markerar den och väljer {{ui:Gå till …}} i {{ui:Egenskaper}}. {{key:Alt+Left}} går tillbaka till bladet du kom från.

En länk anger bladet med dess nummer, så den fungerar fortfarande efter att du öppnat uppsättningen igen eller ersatt ett blad med en ny utgåva: den öppnar det senaste bladet med det numret. Om bladet inte är öppet visar statusfältet det.

## Länka alla bladhänvisningar på en gång

Välj {{ui:Sidor}} › {{ui:Batchlänkar…}}, eller {{ui:Länka bladhänvisningar…}} under {{ui:Sök text}} överst i panelen {{ui:Blad}}.

1. **Kontrollera bladnumren.** MarkupCraft listar varje öppet blad med det nummer och namn det läste från bladets ritningshuvud (eller dess sidetikett), och varifrån det kom. Rätta de som är fel, och skriv ett nummer där det inte hittade något (ett ritningshuvud vars nummer ritats som linjer har ingen text att läsa). Välj sedan {{ui:Hitta hänvisningar}}. Dina rättelser är ett ångringssteg och blir sidetiketterna i den sparade PDF-filen.
2. **Granska listan.** MarkupCraft läser texten på varje blad efter hänvisningar som ”3/A-501”, ”5 / A501”, ”DETALJ 2 PÅ A-501”, en bubbla med ”3” över ”A-501”, eller ett enkelt ”A-501” i en anteckning, och läser varje blads vyrubriker (ett detaljnummer med bladnumret under, eller ett stort nummer med en rubrik bredvid). Listan har tre delar:
   - {{ui:Länkas}}: varje hänvisning, bladet den går till och vyn på bladet. Avmarkera de du inte vill ha. Om vyn inte hittades (en hänvisning till vy 7 på ett blad med vy 1 till 6) väljer du vyn i listan bredvid, eller lämnar {{ui:Hela bladet}}.
   - {{ui:Inte länkad}}: bladnummer som inget öppet blad har, med antal hänvisningar som nämner vart och ett. Välj bladet varje avser (till exempel ett blad som numrerats om), så länkas varje hänvisning till det numret dit. Eller lämna det olänkat.
   - Hur många hänvisningar som redan är länkade och fortfarande går rätt. De lämnas som de är.
3. Välj {{ui:Skapa länkarna}}.

Varje hänvisning får en tunn blå ruta som är en bladlänk. {{key:Mod}}+klick på den öppnar bladet zoomat till vyn. Ett enda {{key:Mod+Z}} tar bort alla.

Koder som bara ser ut som bladnummer, till exempel R-19 eller W12X26, utelämnas: en hänvisning måste ha samma form som uppsättningens egna bladnummer. Ett blads eget nummer, i dess ritningshuvud och vyrubriker, räknas aldrig som en hänvisning. Skannade blad har ingen text att läsa: använd {{ui:Läs text (OCR)…}} först, eller länka deras hänvisningar en i taget.

## Kör den igen när uppsättningen ändras

Batchlänkar kan köras så ofta du vill:

- **Ett blad har lagts till**, till exempel ett tillägg med A-601: öppna dess fil och kör Batchlänkar igen. Hänvisningar till A-601 som inte länkades tidigare länkas nu.
- **Ett blad har numrerats om**: rätta dess nummer i steg 1. Länkar som gjorts av Batchlänkar som inte längre hittar sitt blad listas under {{ui:Inte länkad}}; välj bladet en gång så följer de alla med. Länkar som flyttats till en annan vy uppdateras.
- Länkar du gjort för hand i {{ui:Egenskaper}} ändras aldrig.

## I den sparade PDF-filen

En länk till ett blad i samma PDF skrivs också som en PDF-länk, så att andra läsare hoppar dit vid ett klick. En länk med en vy öppnar den vyn i den andra läsaren (PDF-hoppet ”fit rectangle”); en utan vy öppnar hela bladet. Länkar till ett blad i en annan fil i uppsättningen fungerar bara i MarkupCraft.
