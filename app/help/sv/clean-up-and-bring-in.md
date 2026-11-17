---
title: Rensa penndrag, och hämta in granskningskommentarer och byggplatsens framsteg
summary: Gör om frihandspenndrag till linjer, cirklar, bågar och rektanglar; hämta in ett bygglovspakets granskningskommentarer och en byggplats mätframsteg som noteringar.
keywords: penna, frihand, rensa, räta ut, cirkel, linje, rektangel, båge, bygglov, granskningskommentarer, framsteg, drönare, skanning, mätning, noteringar, csv
from: 547d8e42
---

## Rensa penndrag

Rita med {{ui:Penna}}, öppna sedan menyn {{ui:Mer}} i gruppen Redigera och välj {{ui:Rensa penndrag}}. Varje markerat penndrag blir det det var tänkt att vara: ett rakt drag blir en linje (exakt vågrät eller lodrät när det var nästan det), ett runt drag blir en ellips, en del av en cirkel blir en båge, ett slutet fyrhörnigt drag blir en rektangel och allt annat en polylinje eller polygon. Lösa ändar på drag som ritats tillsammans dras mot varandra. Utan markerat penndrag rensas alla penndrag på det öppna bladet. Det är ett enda ångra-steg: Ctrl+Z återställer frihandsdraget. Formen beräknas på din dator enligt fasta regler; ingenting skickas någonstans.

## Hämta in granskningskommentarer

BimCraft:s bygglovspaket innehåller `01-review-comments.csv`: kommentarerna en granskare sannolikt gör, var och en med regeln, paragrafen, vad som behövs, vad som hittades och vad som ska göras. I fliken {{ui:Uppgifter}} öppnar du {{ui:Granskningskommentarer för bygglov}} och väljer {{ui:Hämta in kommentarer (CSV)}}. Varje kommentar blir en öppen notering i en kolumn längs vänstra kanten av det öppna bladet; dra var och en till platsen den gäller. De beräknas utifrån de kontroller som finns, inte av en handläggare.

## Hämta in HAZOP-nodrutor

CadCraft:s P&ID-tillägg ritar noderna i en HAZOP-studie och kan spara dem som {{ui:HAZOP-nodrutor}} (en JSON-fil). Öppna det utskrivna P&ID-bladet här, gå till fliken {{ui:Uppgifter}}, öppna {{ui:HAZOP-nodrutor}} och välj {{ui:Hämta nodrutor (JSON)}}. Varje nod blir en öppen rektangel på bladet med sitt nummer, namn, utrustning och linjer i texten, och teamet skriver sina iakttagelser som svar på den. Bladet tas som det skrevs ut i full storlek från ritningens nedre vänstra hörn; om det skrevs ut i en annan skala, skriv in det talet i {{ui:Utskriftsskala}} först (0.5 för 1:2). En nod som hamnar utanför sidan ritas inte, och panelen säger hur många. Markörerna är ett studiestöd: de visar var noderna finns, men de bedömer inte studien.

## Hämta in byggplatsens framsteg

CivilCraft håller en rad för varje drönarflygning eller skanning av platsen. I fliken {{ui:Uppgifter}} öppnar du {{ui:Byggplatsens framsteg}} och väljer {{ui:Hämta in framsteg (JSON)}}. Varje mätning blir en notering på det öppna bladet som anger hur mycket som är klart, vad som återstår att schakta eller fylla, vad som schaktats för mycket eller fyllts på för mycket och vad som ligger utanför planen. En mätning med något utanför planen förblir Öppen; en ren mätning blir Godkänd.
