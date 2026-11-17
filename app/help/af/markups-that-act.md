---
title: Maak 'n opmerking 'n taak
summary: Gee 'n opmerking 'n toegewysde ('n persoon of jou assistent), 'n sperdag en 'n skakel na die tekening of modelelement waaroor dit gaan, en sien dit sluit wanneer dit werklik verander.
keywords: taak, take, toegewysde, assistent, sperdatum, agterstallig, skakel, sluit, verander, element, tekeninggebied, opmerkings wat optree, MCP
from: 9e970202
---

'n Taak is 'n opmerking wat deur iemand gedoen moet word. Dit hou sy plek op die blad en sy draad, en voeg 'n titel, 'n toegewysde, 'n sperdag, 'n staat en, as jy wil, 'n skakel na die ding waaroor dit gaan, by.

## Maak 'n taak

1. Kies een of meer opmerkings.
2. Maak die {{ui:Take}}-oortjie oop en kies {{ui:Maak gekose 'n taak}}.
3. Vul die titel in (dit begin uit die opmerking se teks), vir wie dit is ({{ui:Persoon}} of {{ui:Assistent}}, en 'n naam), 'n opsionele sperdag, en waarna om te kyk.

'n Assistent-taak is werk vir die assistent wat jy aan MarkupCraft gekoppel het (sien [Gebruik MarkupCraft met 'n KI-assistent](topic:use-with-ai-assistants)). MarkupCraft bevat geen assistent van sy eie nie: dit lys net die werk en neem die assistent se antwoorde. Kies {{ui:Toegewys aan}}, dan {{ui:Assistent}} in die lys, om te wys wat daarop wag.

## Kyk vir 'n verandering

- **Die tekening binne die opmerking.** MarkupCraft hou die lyne binne die opmerking se boks soos hulle nou is. Wanneer jy 'n nuwer hersiening van daardie blad oopmaak ('n tweede lêer met dieselfde bladnommer, of dieselfde bladposisie), kies {{ui:Kontroleer nou}}: as die lyne in daardie gebied meer as 'n haarlyn verskil, word die taak gesluit.
- **'n Modelelement.** Gee die program en die element se id. Jou assistent lees die element met die ander program se eie gereedskap en rapporteer dit met `tasks_check`. Die eerste verslag word as die beginstaat behou; 'n latere verslag wat verskil, sluit die taak. 'n Element wat uitgevee is, sluit dit ook.
- **Niks.** 'n Gewone taak wat jy met die hand klaarmaak.

'n Gesluite taak word as Klaar gemerk, sy opmerking word Voltooi, en 'n nota in die draad sê wat verander het. Een ontdoen-stap maak dit weer oop.

**Beperking:** die kontrole neem aan dat die nuwer hersiening dieselfde bladoorsprong en bladgrootte gebruik. 'n Blad wat teen 'n ander grootte herdruk is, sal nie pas nie, so sy take sluit nie. Blaaie word gepaar volgens bladnommer, anders volgens bladposisie; MarkupCraft skaal nie een hersiening om by die ander te pas nie.

Herdruk van dieselfde tekening met 'n nuwe datumstempel, of lyne wat minder as 1.5 pt beweeg het, tel nie as 'n verandering nie. As geen nuwer hersiening oop is nie, bly die taak oop en die statusbalk sê so.

## Die lys

Die {{ui:Take}}-lys kan gefiltreer word volgens staat en vir wie dit is, insluitend {{ui:Agterstallig}}. 'n Taak wat sy sperdag verbygaan, wys in die Probleme-paneel as 'n waarskuwing. {{ui:CSV}} voer die lys uit.

Take word saam met die PDF gestoor, saam met die opmerking, en hulle reis deur Live soos die ander opmerkingseienskappe.
