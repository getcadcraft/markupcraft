---
title: Bladskakels
summary: Laat 'n opmerking na 'n ander blad spring, en skakel elke bladverwysing soos 3/A-501 na sy blad en aansig in een slag met Groepskakels.
keywords: hiperskakel, skakel, skakels, spring, bladverwysing, detailverwysing, snitverwysing, 3/A-501, gaan na blad, terug, outoskakel, groepskakel, groepskakels, titelblok, bladnommer, bladnaam, aansig, detail, hernoem, hernommer, bylae, pdf-skakel
from: 86a17c37
---

'n Bladskakel neem jou van 'n opmerking na 'n ander blad van die stel: van 'n detailbel na die detail, of van 'n nota na die blad waarna dit verwys.

## Skakel 'n opmerking na 'n blad

1. Kies die opmerking.
2. Kies in {{ui:Eienskappe}} die blad onder {{ui:Skakel na blad}}.

'n Klein pyltjie verskyn by die opmerking se boonste regterhoek. Om dit te volg, hou {{key:Mod}} vas en klik die opmerking, of kies dit en kies {{ui:Gaan na …}} in {{ui:Eienskappe}}. {{key:Alt+Left}} gaan terug na die blad waarvandaan jy gekom het.

'n Skakel noem die blad volgens sy nommer. Dit werk dus steeds nadat jy die stel weer oopmaak, of 'n nuwe uitgawe met 'n tussenblad bytrek: dit open die nuutste blad met daardie nommer. As daardie blad nie oop is nie, sê die statusbalk so.

## Skakel elke bladverwysing op een slag

Kies {{ui:Bladsye}} › {{ui:Groepskakels…}}, of {{ui:Skakel bladverwysings…}} onder {{ui:Soek teks}} aan die bopunt van die {{ui:Blaaie}}-paneel.

1. **Kontroleer die bladnommers.** MarkupCraft lys elke oop blad met die nommer en naam wat dit uit die blad se titelblok (of sy bladetiket) gelees het, en waar elkeen vandaan kom. Regstel enige wat verkeerd is, en tik 'n nommer waar dit geen gevind het nie. ('n Titelblok waarvan die nommer as lyne gedruk is, het geen teks om te lees nie.) Kies dan {{ui:Soek verwysings}}. Jou regstellings is een ontdoen-stap, en hulle word die bladetikette in die gestoorde PDF.
2. **Hersien die lys.** MarkupCraft lees die teks van elke blad vir verwysings soos "3/A-501", "5 / A501", "DETAIL 2 ON A-501", 'n bel met "3" bo "A-501", of 'n blote "A-501" in 'n nota. Dit lees ook elke blad se aansigtitels ('n detailnommer met die bladnommer daaronder, of 'n groot nommer met 'n titel daarnaas). Die lys het drie dele:
   - {{ui:Sal skakel}}: elke verwysing, die blad waarheen dit gaan, en die aansig op daardie blad. Ontmerk enige wat jy nie wil hê nie. As die aansig nie gevind is nie (byvoorbeeld 'n verwysing na aansig 7 op 'n blad met aansigte 1 tot 6), kies die aansig uit die lys langsaan, of laat {{ui:Hele blad}}.
   - {{ui:Nie geskakel nie}}: bladnommers wat geen oop blad het nie, met hoeveel verwysings elk noem. Kies die blad wat elk beteken (byvoorbeeld 'n blad wat hernommer is). Elke verwysing na daardie nommer skakel dan daarheen. Of laat dit ongeskakel.
   - Hoeveel verwysings reeds geskakel is en steeds na die regte plek gaan. Hulle bly soos hulle is.
3. Kies {{ui:Skep die skakels}}.

Elke verwysing kry 'n dun blou kassie wat 'n bladskakel is. {{key:Mod}}+klik daarop open die blad, ingezoem tot die aansig. Een {{key:Mod+Z}} verwyder hulle almal.

Kodes wat net soos bladnommers lyk, soos R-19 of W12X26, word uitgelaat: 'n verwysing moet gevorm wees soos die stel se eie bladnommers. 'n Blad se eie nommer, in sy titelblok en sy aansigtitels, is nooit 'n verwysing nie. Ingeskandeerde blaaie het geen teks om te lees nie. Gebruik {{ui:Lees teks (OCR)…}} eerste, of skakel hulle verwysings een vir een.

## Voer dit weer uit wanneer die stel verander

Groepskakels kan so dikwels uitgevoer word as wat jy wil:

- **'n Blad is bygevoeg**, soos 'n bylae met A-601: maak sy lêer oop en voer Groepskakels weer uit. Verwysings na A-601 wat vroeër nie geskakel is nie, skakel nou.
- **'n Blad is hernommer**: regstel sy nommer in stap 1. Skakels wat deur Groepskakels gemaak is en nie meer hul blad vind nie, word onder {{ui:Nie geskakel nie}} gelys. Kies die blad een keer, en hulle volg almal. Skakels wat na 'n ander aansig geskuif het, word opgedateer.
- Skakels wat jy met die hand in {{ui:Eienskappe}} gemaak het, word nooit verander nie.

## In die gestoorde PDF

'n Skakel na 'n blad in dieselfde PDF word ook as 'n PDF-skakel geskryf, sodat ander kykers met 'n klik daarheen spring. 'n Skakel met 'n aansig open daardie aansig in die ander kyker (die PDF "fit rectangle"-sprong). Een sonder aansig open die hele blad. Skakels na 'n blad in 'n ander lêer van die stel werk net in MarkupCraft.
