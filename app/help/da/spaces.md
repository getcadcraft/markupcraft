---
title: Zoner
summary: Navngiv rummene eller zonerne på et ark, og filtrér, tæl og eksportér markeringer efter den zone, de ligger i.
keywords: zoner, zone, rum, fløj, arbejdsområde, placering, filtrér efter rum, gruppér efter rum, eksportér efter zone
from: b199339c
---

En zone er et navngivet område på et ark: et rum, en fløj eller en arbejdsfase. Hver markering inden i den hører til den, så du kan liste, filtrere og eksportere markeringerne for ét rum.

## Opret en zone

1. Åbn {{ui:Zoner}}, øverst i panelet {{ui:Ark}}, og vælg {{ui:Ny zone}}.
2. Klik på zonens hjørner, og dobbeltklik eller tryk {{key:Enter}}.
3. Skriv navnet, fx `Køkken` eller `Niveau 2 øst`, og vælg {{ui:Tilføj zone}}.

Zonen vises som et lysegrønt område med en stiplet kant og sit navn. Statuslinjen viser, hvor mange markeringer der ligger i den.

## Hvad der er i en zone

En markering hører til den zone, der rummer markeringens midte. Når zoner ligger inde i hinanden (et rum i en fløj), vinder den mindste. Flytter du en markering, flytter den sig mellem zoner. Vælg en zone for at ændre dens kontur med dens håndtag, eller dens navn under {{ui:Navn}} i {{ui:Egenskaber}}.

- {{ui:Egenskaber}} viser en markerings zone.
- Listen {{ui:Markeringer}} filtrerer efter {{ui:Zone}}, inklusive {{ui:Ingen zone}}.
- CSV- og XLSX-eksporter får en kolonne {{ui:Zone}}, når sættet har zoner.
- Panelet {{ui:Zoner}} viser alle zoner med antal markeringer i hver; vælg en for at gå til den.

## I den gemte PDF

En zone er en polygonkommentar med sit navn som tekst, tegnet med en stiplet kant, så andre PDF-fremvisere også viser den. Den åbnes igen i MarkupCraft som en zone.
