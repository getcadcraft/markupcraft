---
title: Find tekst i tegningerne
summary: Søg i ordene på hvert ark, hop til hvert træf, og sæt sky om dem alle i ét trin.
keywords: find, søg, tekst, ord, ctrl f, led efter, note, nøglenote, henvisning, sæt sky om alle, fremhæv træf, ocr, scan, skannet, læs tekst, vælg tekst, kopiér tekst, tesseract
from: 3435c9eb
---

{{ui:Find tekst}}, øverst i panelet {{ui:Ark}}, søger i ordene, der er tegnet på selve arkene. {{ui:Søg i ark}} under den søger kun i arknavne.

## Find

1. Tryk {{key:Mod+F}}, eller åbn {{ui:Find tekst}}.
2. Skriv ordene, f.eks. `hood` eller `verify in field`.
3. Vælg {{ui:Alle ark}} eller {{ui:Dette ark}}, og sæt flueben i {{ui:Versalfølsom}} eller {{ui:Hele ord}}, hvis du har brug for dem.
4. Tryk {{key:Enter}} eller vælg {{ui:Find}}.

Resultat: hvert træf vises med sit arknummer og ordene omkring det og markeres med gult på sit ark. Vælg et træf for at åbne dets ark og zoome til det.

En frase findes, også når tegningen deler den over to tekststykker eller to linjer.

## Sæt sky om hvert træf

Vælg {{ui:Sæt sky om alle}}. Der tegnes en revisionssky om hvert træf i listen, på hvert ark, med "Fundet: <dine ord>" som kommentar. Ét {{key:Mod+Z}} fjerner dem alle.

## Læs teksten på en scanning (OCR)

Et skannet ark er kun et billede: indtil dets ord er læst, er der intet at finde. Når tællingen siger, at ark ikke har tekst, vælg {{ui:Læs tekst (OCR)…}} under den, eller {{ui:Sider}} › {{ui:Læs tekst (OCR)…}}.

1. Vælg siderne: dette ark, hver side i filen eller hver side i alle åbne filer.
2. Vælg sproget for teksten. {{ui:Også engelsk}} læser også engelske ord.
3. Vælg {{ui:Læs tekst}}. En bjælke viser siden, der læses; {{ui:Stop}} afslutter kørslen og beholder de sider, der allerede er læst.

Resultat: ordene kan findes, markeres og kopieres ligesom anden tekst. Det hele kører på din computer: intet sendes nogen steder hen. Det virker uden forbindelse i Studio, og i browseren, når appen er gemt til offline-brug (engelsk og dit grænsefladesprog), eller et sprog er blevet brugt én gang. Sider, der allerede har tekst, lades, som de er.

Når du gemmer, lægges ordene ind i PDF'en som usynlig tekst bag billedet, adskilt fra dine markeringer, så andre PDF-programmer også kan søge og kopiere dem. Indtil du gemmer, vises filen som ikke-gemt.

## Vælg og kopiér tekst

Vælg {{ui:Mere}} › {{ui:Vælg tekst, der skal kopieres}}. Træk fra et ord til et andet for at markere ordene imellem dem, træk fra tomt papir for at markere ordene i en boks, eller dobbeltklik på ét ord. {{key:Mod+A}} markerer hvert ord på arket. {{key:Mod+C}} kopierer dem og bevarer linjerne. Et hvilket som helst andet værktøj afslutter det.

## Godt at vide

- Tegninger, hvis bogstaver er tegnet som linjer, har heller ingen tekst; læsning som billede virker bedst på trykt tekst, f.eks. en skannet bog eller specifikation.
- Læseren er Tesseract, indbygget i appen med sine sprogdata for engelsk og appens sprog. Første kørsel indlæser den (ca. 6 MB, mere for et andet sprog).
- Hvor godt den læser, afhænger af scanningen: rene sider i 300 dpi læses næsten ord for ord; gamle, svage eller lavopløselige scanninger misser flere ord.
- Listen viser de første 500 træf; Sæt sky om alle sætter sky om op til 2,000.
- Træffene ryddes, når du lukker sættet, og for én fil, når du ændrer dens sider.
