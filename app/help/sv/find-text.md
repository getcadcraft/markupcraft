---
title: Sök text i ritningarna
summary: Sök orden på varje blad, hoppa till varje träff och markera alla med moln i ett enda steg.
keywords: hitta, sök, text, ord, ord, ctrl f, leta efter, notering, nyckelnotering, hänvisning, markera alla med moln, markera träffar, ocr, skanning, skannad, läs text, markera text, kopiera text, tesseract
from: 3435c9eb
---

{{ui:Sök text}}, överst i panelen {{ui:Blad}}, söker i orden som är ritade på bladen själva. {{ui:Sök blad}} under den söker bara i bladnamnen.

## Sök

1. Tryck {{key:Mod+F}}, eller öppna {{ui:Sök text}}.
2. Skriv orden, till exempel `huv` eller `kontrollera på plats`.
3. Välj {{ui:Alla blad}} eller {{ui:Det här bladet}}, och bocka i {{ui:Matcha versaler/gemener}} eller {{ui:Hela ord}} om du behöver det.
4. Tryck på {{key:Enter}} eller välj {{ui:Sök}}.

Resultat: varje träff listas med sitt bladnummer och orden runt omkring, och markeras i gult på sitt blad. Välj en träff för att öppna dess blad och zooma till den.

En fras hittas även när ritningen delar upp den över två textstycken eller två rader.

## Markera alla träffar med moln

Välj {{ui:Markera alla med moln}}. Ett revisionsmoln läggs runt varje träff i listan, på varje blad, med "Hittat: <dina ord>" som kommentar. Ett {{key:Mod+Z}} tar bort alla.

## Läs texten på en skanning (OCR)

Ett skannat blad är bara en bild: tills dess ord har lästs finns det inget att hitta. När räkningen visar att blad saknar text, välj {{ui:Läs text (OCR)…}} under den, eller {{ui:Sidor}} › {{ui:Läs text (OCR)…}}.

1. Välj sidorna: det här bladet, varje sida i filen eller varje sida i alla öppna filer.
2. Välj språk för texten. {{ui:Även engelska}} läser även engelska ord.
3. Välj {{ui:Läs text}}. En stapel visar sidan som läses; {{ui:Stopp}} avslutar körningen och behåller de sidor som redan lästs.

Resultat: orden kan hittas, markeras och kopieras som vilken annan text som helst. Allt körs på din dator: inget skickas någonstans. Det fungerar utan anslutning i Studio, och i webbläsaren när appen har sparats för offline (engelska och ditt gränssnittsspråk) eller när ett språk har använts en gång. Sidor som redan har text lämnas som de är.

När du sparar går orden in i PDF-filen som osynlig text bakom bilden, skild från dina markeringar, så att andra PDF-program också kan söka och kopiera dem. Tills du sparar visas filen som osparad.

## Markera och kopiera text

Välj {{ui:Mer}} › {{ui:Markera text att kopiera}}. Dra från ett ord till ett annat för att markera orden mellan dem, dra från tom yta för att markera orden i en ruta, eller dubbelklicka på ett ord. {{key:Mod+A}} markerar varje ord på bladet. {{key:Mod+C}} kopierar dem och behåller raderna. Ett annat verktyg avslutar det.

## Bra att veta

- Ritningar vars bokstäver är ritade som linjer har heller ingen text; att läsa dem som bild fungerar bäst på tryckt text, till exempel en skannad bok eller specifikation.
- Läsaren är Tesseract, inbyggd i appen med språkdata för engelska och appens språk. Första körningen laddar den (cirka 6 MB, mer för ett andra språk).
- Hur bra den läser beror på skanningen: rena sidor i 300 dpi läses nästan ord för ord; gamla, bleka eller lågupplösta skanningar missar fler ord.
- Listan visar de första 500 träffarna; {{ui:Markera alla med moln}} markerar upp till 2 000.
- Träffarna rensas när du stänger uppsättningen, och för en fil när du ändrar dess sidor.
