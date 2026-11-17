---
title: Följ upp RFI:er, inlämningar och dagbok
summary: Lägg RFI:er, inlämningar och dagboksposter på bladen, med nummer, ansvariga, förfallodatum och trådar; filtrera det som är försenat; exportera CSV eller BCF; arbeta offline och slå ihop kopior.
keywords: rfi, begäran om information, inlämning, dagbok, fältrapport, byggdagbok, byggande, försenad, förfallodatum, tilldelade mig, tråd, bilaga, slå ihop, offline, surfplatta, bcf, csv, fält
from: 95039c5a
---

Fliken {{ui:Fält}} håller tre typer av poster bredvid dina markeringar. Varje post är kopplad till ett blad; en RFI eller en inlämning har också en nål på den plats på bladet som den gäller.

- **RFI**: en fråga till projekteringsgruppen. Status: Öppen, Besvarad, Stängd.
- **Inlämning**: något som ska granskas innan arbetet går vidare. Status: Öppen, Under granskning, Godkänd, Godkänd med anmärkning, Revidera och skicka in igen, Stängd.
- **Dagbok**: dagens väder, antal personer på plats och utfört arbete. Status: Utkast, Slutlig.

Varje post har ett nummer i sin egen typ (RFI-0001, SUB-0001, LOG-0001), en titel, text, en ansvarig, ett förfallodatum, en tråd med svar och en lista med bilagenamn.

## Lägg till en

1. Öppna fliken {{ui:Fält}} och välj {{ui:RFI}} eller {{ui:Inlämning}}.
2. Tryck eller klicka på bladet där den hör hemma. En nål visas och posten öppnas i fliken.
3. Fyll i titeln, frågan eller beskrivningen, vem den är tilldelad till och när den ska vara klar.

En dagboksinlägg läggs till i det öppna bladet utan nål. {{ui:Placera nål}} sätter en nål på den senare; {{ui:Flytta nålen}} flyttar valfri nål. Tryck på en nål på bladet för att öppna dess post.

## Svara och följ upp

Ändra {{ui:Status}} så loggas ändringen i tråden. Skriv ett svar och välj {{ui:Skicka svar}} (Ctrl+Enter skickar också). Bilagor är bara namn: skriv ett namn eller välj filer, så visar listan för teamet vad som hör till posten. Själva filerna ligger kvar där de är.

En post vars förfallodatum har passerat och som fortfarande väntar (en RFI som inte är Besvarad eller Stängd, en inlämning som inte är avgjord) markeras **Försenad**, i rött, i listan och på sin nål.

## Hitta det som är viktigt

Filtren ligger ovanför listan: typ, status, förfallodatum (försenad, förfaller inom 7 dagar, har eller saknar förfallodatum), detta blad eller alla blad, en textsökning och {{ui:Tilldelade mig}}, som jämför den ansvarige med det namn MarkupCraft känner dig till (se [Ange ditt namn](topic:set-your-name)). Raden under filtren räknar vad som visas och vad som är försenat.

## Exportera

{{ui:CSV}} skriver de listade posterna som ett kalkylblad. {{ui:BCF}} skriver dem som BCF-ärenden, var och en med en ögonblicksbild av dess plats på bladet, så att andra BCF-verktyg kan lista dem. Båda följer filtren.

## Spara, offline och sammanslagning av kopior

Poster sparas inuti PDF-filen när du sparar den, och de kommer tillbaka när du öppnar den. Inget kräver nätverk: lägg till, redigera, svara och spara på en surfplatta i en källare och ta sedan med PDF-filen tillbaka. Äldre PDF-filer och PDF-filer från andra program öppnas som förut.

För att föra samman två kopior: öppna den ena och välj {{ui:Slå ihop}}, och välj sedan den andra kopian av samma PDF. Poster sammanfogas med sina id:n:

- en post som bara finns i en kopia läggs till;
- en post som finns i båda tar sina fält (titel, text, status, ansvarig, förfallodatum) från kopian som ändrades senast, som helhet, så om två personer ändrade olika fält i samma post vinner den senare kopians version; trådar och bilagenamn från båda kopiorna sammanfogas;
- om båda kopiorna numrerade en ny post likadant får den som kommer in nästa lediga nummer;
- en post som tagits bort i en kopia förblir borttagen om den inte redigerats efter det.

En sammanslagning är ett steg i {{ui:Ångra}}.

## Begränsningar

- Poster delas ännu inte via Live TeamWork; använd Slå ihop.
- Det finns inga team, aviseringar eller molnprojekt för poster i den här versionen.
- Sidor som tas bort från PDF-filen tar med sig sina poster (sidbekräftelsen räknar dem).
