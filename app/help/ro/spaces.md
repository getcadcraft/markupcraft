---
title: Spații
summary: Denumiți camerele sau zonele unei foi, apoi filtrați, numărați și exportați adnotările după spațiul în care se află.
keywords: spații, spațiu, cameră, zonă, aripă, zonă de lucru, locație, filtrare după cameră, grupare după cameră, export după spațiu
from: b199339c
---

Un spațiu este o zonă denumită de pe o foaie: o cameră, o aripă, o fază de lucru. Fiecare adnotare aflată în interiorul lui îi aparține, astfel că puteți lista, filtra și exporta adnotările unei singure camere.

## Crearea unui spațiu

1. Deschideți {{ui:Spaces}}, în partea de sus a panoului {{ui:Sheets}}, și alegeți {{ui:New space}}.
2. Faceți clic pe colțurile zonei, apoi faceți dublu clic sau apăsați {{key:Enter}}.
3. Tastați numele său, de exemplu `Bucătărie` sau `Nivelul 2 est`, și alegeți {{ui:Add space}}.

Spațiul apare ca o zonă verde deschis, cu contur punctat și cu numele său. Bara de stare indică câte adnotări se află în el.

## Ce se află într-un spațiu

O adnotare aparține spațiului care conține mijlocul adnotării. Când spațiile sunt unul în altul (o cameră într-o aripă), cel mai mic câștigă. Mutați o adnotare și ea trece între spații. Selectați un spațiu pentru a-i modifica conturul cu mânerele sale, sau numele său, sub {{ui:Name}} în {{ui:Properties}}.

- {{ui:Properties}} afișează spațiul unei adnotări.
- Lista {{ui:Markups}} filtrează după {{ui:Space}}, inclusiv {{ui:No space}}.
- Exporturile CSV și XLSX primesc o coloană {{ui:Space}} după ce setul are spații.
- Panoul {{ui:Spaces}} listează fiecare spațiu cu câte adnotări conține; alegeți unul pentru a ajunge la el.

## În PDF-ul salvat

Un spațiu este un comentariu de tip poligon, având numele său ca text, desenat cu contur punctat, astfel încât și alte vizualizatoare îl afișează. Se redeschide în MarkupCraft ca spațiu.
