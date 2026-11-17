---
title: Arbeta med flera filer samtidigt
summary: Öppna många PDF-filer som en uppsättning, hitta blad över filerna, kopiera markeringar mellan dem och spara varje fils kopia.
keywords: flera filer, flera pdf, planuppsättning, uppsättning, batch, många filer, kombinera, discipliner, arkitektur konstruktion mekanik, spara alla, stäng
from: f59354ae
---

En planuppsättning kommer ofta som en PDF-fil per disciplin, eller en PDF-fil per blad. MarkupCraft behandlar allt du öppnar som **en uppsättning**.

## Öppna dem tillsammans

Markera alla PDF-filer i filväljaren samtidigt, eller släpp dem alla på bladområdet. För att lägga till fler senare öppnar du dem på samma sätt; de läggs sist i listan {{ui:Blad}} i den ordning du öppnar dem.

Resultat: ”Öppnade 6 filer (84 blad i uppsättningen).” Varje sida är ett blad. Blad med ett bladnummer visar ”Blad A-101” under sitt namn; andra visar filen och sidan.

Det finns ingen sparad fil för ”uppsättningen”: nästa gång öppnar du samma PDF-filer igen (kopiorna ”(marked up)”, om du sparat).

## Över hela uppsättningen

- **Hitta ett blad:** {{ui:Sök blad}} söker i bladnummer, bladnamn och filnamn i alla filer. {{key:PageUp}} och {{key:PageDown}} går igenom alla blad i alla filer i ordning.
- **Markeringslistan:** fliken {{ui:Markeringar}} listar markeringar från alla filer. Filtrera på {{ui:Blad}} för att begränsa listan. CSV-filen har en kolumn för fil.
- **Åtgärdslista:** en numrering för hela uppsättningen.
- **Jämför:** det gamla och det nya bladet kan komma från olika filer.
- **Kopiera och klistra in:** {{key:Mod+C}} på ett blad och {{key:Mod+V}} på ett annat, i valfri fil. Kopian hamnar på samma plats på sidan, något förskjuten.

## Spara

Välj {{ui:Spara}}. Med fler än en fil öppen frågar MarkupCraft:

- {{ui:Den här filen}}: en markerad kopia av filen för bladet du är på.
- {{ui:Varje ändrad fil}}: en kopia av varje fil med osparade ändringar. Varje laddas ner separat, som ”<filnamn> (marked up).pdf”.
- {{ui:Avbryt}}

:::chromium
Första gången du sparar flera filer samtidigt kan Chrome och Edge fråga om webbplatsen får ladda ner flera filer. Välj {{ui:Tillåt}}; annars kommer bara den första kopian.
:::

:::safari
Safari kan fråga en gång för varje fil. På en iPad hamnar varje kopia i appen Filer.
:::

En fil vars markeringar sparats slutar räknas som ändrad; de andra räknas fortfarande.

CSV-, BCF- och åtgärdslisteexporter får namn efter den **första** fil du öppnade.

## Stäng

{{ui:Stäng}} stänger hela uppsättningen; det finns ännu inget sätt att stänga bara en fil. Om något är osparat frågar den:

- {{ui:Avbryt}}: ingenting händer.
- {{ui:Stäng utan att spara}}: osparade markeringar förloras.
- {{ui:Spara kopior först}}: sparar varje ändrad fil och stänger sedan.

Att stänga rensar också ångringshistoriken.

## Stora uppsättningar

- Texten på varje sida läses vid öppning för att hitta bladnummer, så en uppsättning med 100 blad tar en stund. Statusfältet räknar blad allt eftersom.
- Bladbilderna i listan ritas när du bläddrar till dem.
- Varje öppen PDF-fil hålls i webbläsarfliken minne. Om fliken blir långsam, stäng andra tunga flikar eller granska en disciplin i taget.
- Om du öppnar samma fil två gånger får du två kopior av dess blad. Om det händer väljer du {{ui:Stäng}} och öppnar uppsättningen igen.
