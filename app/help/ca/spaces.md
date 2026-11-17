---
title: Espais
summary: Doneu nom a les sales o zones d'un full, i després filtreu, compteu i exporteu les marques segons l'espai on són.
keywords: espai, espais, sala, zona, ala, àrea de treball, ubicació, filtra per sala, agrupa per sala, exporta per espai
from: b199339c
---

Un espai és una zona amb nom d'un full: una sala, una ala, una fase de treball. Cada marca que hi ha dins hi pertany, de manera que podeu llistar, filtrar i exportar les marques d'una sala.

## Crear un espai

1. Obriu {{ui:Espais}}, a la part superior del tauler {{ui:Fulls}}, i trieu {{ui:Espai nou}}.
2. Feu clic als cantons de la zona, i després feu doble clic o premeu {{key:Enter}}.
3. Escriviu-ne el nom, com ara `Cuina` o `Nivell 2 est`, i trieu {{ui:Afegeix l'espai}}.

L'espai es mostra com una zona verd clar amb un contorn discontinu i el seu nom. La barra d'estat indica quantes marques hi ha dins.

## Què hi ha en un espai

Una marca pertany a l'espai que conté el centre de la marca. Quan els espais són un dins de l'altre (una sala en una ala), guanya el més petit. Si moveu una marca, canvia d'espai. Seleccioneu un espai per canviar-ne el contorn amb els seus punts de control, o el seu nom sota {{ui:Nom}} a {{ui:Propietats}}.

- {{ui:Propietats}} mostra l'espai d'una marca.
- La llista {{ui:Marques}} filtra per {{ui:Espai}}, incloent-hi {{ui:Cap espai}}.
- Les exportacions CSV i XLSX tenen una columna {{ui:Espai}} quan el conjunt té espais.
- El tauler {{ui:Espais}} llista tots els espais amb el nombre de marques que hi ha dins; trieu-ne un per anar-hi.

## Al PDF desat

Un espai és un comentari de polígon amb el seu nom com a text, dibuixat amb una vora discontinua, de manera que altres visualitzadors també el mostren. Es torna a obrir a MarkupCraft com a espai.
