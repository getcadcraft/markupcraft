---
title: Utrymmen
summary: Namnge rummen eller zonerna på ett blad och filtrera, räkna och exportera markeringar efter det utrymme de ligger i.
keywords: utrymmen, utrymme, rum, zon, flygel, arbetsområde, plats, filtrera efter rum, gruppera efter rum, exportera per utrymme
from: b199339c
---

Ett utrymme är en namngiven zon på ett blad: ett rum, en flygel, en etapp i arbetet. Varje markering inuti det hör till utrymmet, så att du kan lista, filtrera och exportera markeringarna för ett rum.

## Skapa ett utrymme

1. Öppna {{ui:Spaces}}, överst i panelen {{ui:Sheets}}, och välj {{ui:New space}}.
2. Klicka på zonens hörn och dubbelklicka eller tryck på {{key:Enter}}.
3. Skriv dess namn, till exempel `Kitchen` eller `Level 2 east`, och välj {{ui:Add space}}.

Utrymmet visas som en ljusgrön zon med streckad kontur och sitt namn. Statusfältet visar hur många markeringar som finns i det.

## Vad som finns i ett utrymme

En markering hör till det utrymme som innehåller markeringens mitt. När utrymmen ligger inuti varandra (ett rum i en flygel) vinner det mindre. Flytta en markering så flyttas den mellan utrymmen. Markera ett utrymme för att ändra dess kontur med dess handtag, eller dess namn under {{ui:Name}} i {{ui:Properties}}.

- {{ui:Properties}} visar en markerings utrymme.
- Listan {{ui:Markups}} filtrerar på {{ui:Space}}, inklusive {{ui:No space}}.
- CSV- och XLSX-exporter får en kolumn {{ui:Space}} när satsen har utrymmen.
- Panelen {{ui:Spaces}} listar varje utrymme med hur många markeringar som finns i det; välj ett för att gå dit.

## I den sparade PDF:en

Ett utrymme är en polygonkommentar med sitt namn som text, ritad med streckad kant, så att andra visningsprogram också visar den. Den öppnas igen i MarkupCraft som ett utrymme.
