---
title: Finn tekst i tegningene
summary: Søk etter ordene på alle ark, hopp til hvert treff, og sky dem alle i ett steg.
keywords: finn, søk, tekst, ord, ctrl f, se etter, notat, nøkkelnotat, henvisning, sky alle, uthev treff, ocr, skanning, skannet, les tekst, velg tekst, kopier tekst, tesseract
from: 3435c9eb
---

{{ui:Finn tekst}}, øverst i {{ui:Ark}}-panelet, søker etter ordene som er tegnet på selve arkene. {{ui:Søk i ark}} under det søker bare i arknavnene.

## Finn

1. Trykk {{key:Mod+F}}, eller åpne {{ui:Finn tekst}}.
2. Skriv inn ordene, for eksempel `hette` eller `kontroller på byggeplass`.
3. Velg {{ui:Alle ark}} eller {{ui:Dette arket}}, og kryss av for {{ui:Skill mellom store og små bokstaver}} eller {{ui:Hele ord}} hvis du trenger det.
4. Trykk {{key:Enter}} eller velg {{ui:Finn}}.

Resultat: Hvert treff vises med arknummeret og ordene rundt, og er merket gult på arket. Velg et treff for å åpne arket og zoome til det.

En frase blir funnet selv når tegningen deler den over to tekstbiter eller to linjer.

## Sky alle treff

Velg {{ui:Sky rundt alle}}. En revisjonssky går rundt hvert treff i listen, på alle ark, med «Funnet: <dine ord>» som kommentar. Ett trykk på {{key:Mod+Z}} fjerner dem alle.

## Les teksten på en skanning (OCR)

Et skannet ark er bare et bilde: før ordene er lest, er det ingenting å finne. Når telleren viser at ark mangler tekst, velg {{ui:Les tekst (OCR)…}} under den, eller {{ui:Sider}} › {{ui:Les tekst (OCR)…}}.

1. Velg sidene: dette arket, hver side i filen, eller hver side i alle åpne filer.
2. Velg språket i teksten. {{ui:Også engelsk}} leser engelske ord også.
3. Velg {{ui:Les tekst}}. En linje viser siden som leses; {{ui:Stopp}} avslutter kjøringen og beholder sidene som er lest.

Resultat: Ordene kan finnes, velges og kopieres som all annen tekst. Alt kjører på datamaskinen din: ingenting sendes noe sted. Det fungerer uten tilkobling i Studio, og i nettleseren når appen er lagret for frakoblet bruk (engelsk og grensesnittspråket ditt) eller et språk har vært brukt én gang. Sider som allerede har tekst, lar man være.

Når du lagrer, går ordene inn i PDF-filen som usynlig tekst bak bildet, adskilt fra markeringene dine, slik at andre PDF-programmer også kan søke og kopiere dem. Før du lagrer, vises filen som ulagret.

## Velg og kopier tekst

Velg {{ui:Mer}} › {{ui:Velg tekst som skal kopieres}}. Dra fra ett ord til et annet for å velge ordene mellom dem, dra fra et tomt område for å velge ordene i en boks, eller dobbeltklikk på ett ord. {{key:Mod+A}} velger alle ordene på arket. {{key:Mod+C}} kopierer dem og beholder linjene. Et annet verktøy avslutter det.

## Greit å vite

- Tegninger der bokstavene er tegnet som linjer, har heller ingen tekst; å lese dem som bilde fungerer best på trykt tekst, som en skannet bok eller spesifikasjon.
- Leseren er Tesseract, innebygd i appen med språkdata for engelsk og appens språk. Første gang lastes den inn (ca. 6 MB, mer for et andre språk).
- Hvor godt den leser, avhenger av skanningen: rene sider i 300 dpi leses nesten ord for ord; gamle, svake eller lavoppløselige skanninger bommer på flere ord.
- Listen viser de første 500 treffene; {{ui:Sky rundt alle}} skyer opp til 2 000.
- Treffene tømmes når du lukker settet, og for én fil når du endrer sidene.
