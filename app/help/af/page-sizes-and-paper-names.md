---
title: Bladsygroottes en papiernaamme
summary: Sien elke PDF-bladsy se grootte in millimeter en duim en sy papiernaam (A-, B- en C-reeks, ANSI, ARCH), en groepeer 'n gemengde stel volgens grootte om die vreemde bladsye te vind.
keywords: bladsygrootte, papiergrootte, papiernaam, a0, a1, a2, a3, a4, b-reeks, c-reeks, ansi, arch, argitektoniese, mm, duim, pasgemaakte grootte, volgens grootte, vreemde grootte, gemengde stel, kontroleer pdf, kliënt, uitgawe, mediabox, cropbox, rotasie
from: 08e1354f
---

Voordat 'n stel na 'n kliënt gaan, kontroleer dat elke blad die grootte is wat dit moet wees. {{ui:MarkupCraft}} lees elke bladsy se grootte uit die PDF self en noem die papier.

## Wat jy gaan doen

Kyk na die grootte van een blad, en groepeer dan die hele stel volgens grootte.

## Stappe

1. Maak die PDF's oop ({{ui:Maak oop}}), druk dan {{key:Esc}} totdat niks gekies is nie en {{ui:Kies}} aan is.
2. Kyk na {{ui:Eienskappe}}. {{ui:Papier}} sê die naam en die rigting, byvoorbeeld "A4, staande". {{ui:Grootte}} gee millimeter en duim.
3. Elke ry in die {{ui:Blaaie}}-lys het 'n grootte-reël onder die bladnaam.
4. Kies {{ui:Volgens grootte}} in die {{ui:Blaaie}}-kopskrif. Die lys groepeer die blaaie onder een opskrif per grootte, die grootste groep eerste. 'n Grootte met net 'n paar blaaie word as 'n vreemde een gemerk.
5. Kies {{ui:Volgens grootte}} weer om terug te gaan na die stel se eie volgorde.

Resultaat: 'n bladsy wat 'n ander grootte as die res het, is maklik om te sien voordat jy die stel stuur.

## Hoe die naam gekies word

- Die grootte kom uit die bladsy se kassie in die PDF, met die rotasie toegepas, so 'n liggende A3 is steeds A3.
- Die name is die A- en B-reeks (ISO 216), die C-reeks (ISO 269), ANSI A tot E en ARCH A tot E.
- 'n Bladsy binne 2 mm van 'n benoemde grootte kry daardie naam. Enige ander bladsy sê {{ui:pasgemaak}}, en {{ui:Naaste benoemde grootte}} sê watter grootte die naaste is en hoe ver dit af is.
- Duim kom uit die werklike bladsygrootte, so 'n A4-bladsy is 8.26 by 11.69 in.

## In die lêers wat jy stoor

Die opsommingswerkboek ({{ui:Opmerkingslys}}, dan die sigblad) het 'n {{ui:Papiergrootte}}-kolom op die {{ui:Per blad}}-blad en 'n {{ui:Bladsygroottes}}-werkblad. Die PDF-verslag het 'n "Bladsygroottes"-reël met die aantal van elke grootte.

:::note
Die ANSI- en ARCH-duimwaardes is uit die gepubliseerde tabelle oorgetik en is nie met die gedrukte standaarde vergelyk nie. Behandel 'n "pasgemaak"-bladsy wat naby een van hulle is as iets wat jy self moet nagaan.
:::
