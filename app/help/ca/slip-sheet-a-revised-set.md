---
title: Interposa un conjunt revisat
summary: Obriu la nova edició d'un joc de plànols al costat de l'antiga i porteu cada marca oberta al full amb el mateix número.
keywords: interposar, interposa, conjunt revisat, nova edició, revisió, substitueix, substituït, porta endavant, substitueix fulls, reedició, addenda, butlletí
from: e15163a0
---

Quan arriba una nova edició dels plànols, interposar-la trasllada la vostra revisió a la nova: cada full nou pren les marques del full antic amb el mateix número, i el full antic es marca com a «Substituït».

## Interposa

1. Obriu el conjunt actual, amb les vostres marques.
2. Trieu {{ui:Pàgines}}, després {{ui:Interposa un conjunt revisat…}}, i trieu els PDF nous. S'obren al costat del conjunt antic.
3. El diàleg llista cada full nou i el full antic que substitueix. Desmarqueu una fila per deixar les marques d'aquell full on són. Els fulls amb un número nou no tenen res a portar.
4. Trieu si voleu deixar les marques tancades (Acceptades, Rebutjades, Completades) als fulls antics, i si voleu marcar els fulls antics.
5. Trieu {{ui:Porta les marques endavant}}.

Resultat: les marques apareixen als fulls nous al mateix lloc, amb les seves respostes, estats i autors. Un element de la llista de deficiències es trasllada al full nou i manté el seu número. Els fulls antics conserven les seves marques com a registre, sota un segell vermell «Substituït». La barra d'estat resumeix què s'ha mogut.

{{ui:Obre només els fitxers}} obre el conjunt nou sense portar res, per exemple per comparar primer. Vegeu [Compara dues revisions](topic:compare-revisions).

## Com es fan coincidir els fulls

- **Per número de full**, llegit com el mostra la llista de fulls: un número que heu escrit amb {{ui:Reanomena el full}}, l'etiqueta de pàgina del PDF, o el caixetí. Les majúscules, els espais, els punts i els guions no importen: «A-101» coincideix amb «a101».
- Si dos fitxers oberts tenen un full amb aquest número, se substitueix el més recent, de manera que podeu interposar edició rere edició.
- **Els conjunts escanejats** no tenen números per llegir. Quan un fitxer nou no n'té, les seves pàgines coincideixen en ordre de pàgina amb un fitxer obert que tingui el mateix nombre de pàgines. Comproveu aquestes files abans de portar.

## Bon a saber

- Un {{key:Mod+Z}} desfà tota la interposició: les còpies, els segells i els elements de la llista de deficiències moguts. Els fitxers nous continuen oberts.
- Si un full nou té una mida diferent, les marques s'escalen amb la pàgina, i la barra d'estat diu quantes cal comprovar.
- L'escala d'un full antic es porta quan el full nou té la mateixa mida i no en té.
- Els comentaris fets per altres programes es queden als fulls antics: aquí són de només lectura.
- Deseu els fitxers nous per conservar les marques portades. Vegeu [Desa el PDF amb les marques](topic:save-the-marked-up-pdf).
