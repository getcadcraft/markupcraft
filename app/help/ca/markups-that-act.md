---
title: Fer d'una marca una tasca
summary: Doneu a una marca un responsable (una persona o el vostre assistent), un dia límit i un enllaç al dibuix o a l'element del model del qual tracta, i veieu-la tancar-se quan això canvia de debò.
keywords: tasca, tasques, responsable, assistent, data límit, fora de termini, enllaç, tanca, canviat, element, àrea del dibuix, marques que actuen, MCP
from: 9e970202
---

Una tasca és una marca que ha de fer algú. Conserva el seu lloc al full i el seu fil, i hi afegeix un títol, un responsable, un dia límit, un estat i, si voleu, un enllaç a allò de què tracta.

## Crear una tasca

1. Seleccioneu una o més marques.
2. Obriu la pestanya {{ui:Tasques}} i trieu {{ui:Converteix la selecció en tasca}}.
3. Ompliu el títol (comença amb el text de la marca), per a qui és ({{ui:Persona}} o {{ui:Assistent}}, i un nom), un dia límit opcional, i què cal vigilar.

Una tasca d'assistent és feina per a l'assistent que heu connectat a MarkupCraft (vegeu [Utilitza MarkupCraft amb un assistent d'IA](topic:use-with-ai-assistants)). MarkupCraft no té cap assistent propi: només llista la feina i rep les respostes de l'assistent. Triar {{ui:Assignada a}} i després {{ui:Assistent}} a la llista mostra què l'espera.

## Vigilar un canvi

- **El dibuix dins de la marca.** MarkupCraft guarda les línies dins de la caixa de la marca tal com són ara. Quan obriu una revisió més nova d'aquell full (un segon fitxer amb el mateix número de full, o la mateixa posició de pàgina), trieu {{ui:Comprova ara}}: si les línies d'aquella àrea difereixen més d'un pèl, la tasca es tanca.
- **Un element del model.** Doneu-hi l'aplicació i l'identificador de l'element. El vostre assistent llegeix l'element amb les eines pròpies de l'altra aplicació i l'informa amb `tasks_check`. El primer informe es guarda com a estat inicial; un informe posterior que difereixi tanca la tasca. Un element que s'ha suprimit també la tanca.
- **Res.** Una tasca simple que acabeu a mà.

Una tasca tancada es marca com a Feta, la seva marca passa a Completat, i una nota al fil explica què ha canviat. Un sol pas per desfer la torna a obrir.

**Límit:** la comprovació suposa que la revisió nova utilitza el mateix origen de pàgina i la mateixa mida de pàgina. Un full tornat a dibuixar a una altra mida no coincidirà, així que les seves tasques no es tancaran. Els fulls s'aparellen pel número de full, i si no, per posició de pàgina; MarkupCraft no escala una revisió per ajustar-la a l'altra.

Tornar a traçar el mateix dibuix amb una data nova, o línies que s'han mogut menys de 1.5 punts, no compta com a canvi. Si no hi ha cap revisió més nova oberta, la tasca es manté oberta i la barra d'estat ho diu.

## La llista

La llista de {{ui:Tasques}} es pot filtrar per estat i per a qui és, incloent-hi {{ui:Fora de termini}}. Una tasca que passa del seu dia límit apareix al panell de Problemes com a avís. {{ui:CSV}} exporta la llista.

Les tasques es desen al PDF amb la marca, i viatgen per Live igual que les altres propietats de la marca.
