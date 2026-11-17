---
title: Llista què ha canviat entre revisions
summary: Compara dos conjunts de plànols i obté una llista simple, full per full, de on han canviat el dibuix i les paraules, a punt per llegir, copiar o donar al vostre assistent.
keywords: què ha canviat, canvis, llista de revisions, llista de comparació, llista simple, narrar, assistent, delta, resum de revisió
from: bab93d2e
---

Les eines de comparació mostren els canvis al full. Aquesta els escriu.

1. Obriu les dues revisions (vegeu [Obre un conjunt de plànols](topic:open-a-plan-set)).
2. Obriu la pestanya {{ui:Compara}} i després {{ui:Compara tot el conjunt}}.
3. Trieu el fitxer anterior i el posterior i trieu {{ui:Llista els canvis}}.

La llista comença amb un recompte ("2 de 14 fulls coincidents han canviat; 1 de nou; 1 eliminat") i després cobreix cada full canviat, començant pel canvi més gran: on és al full (dalt a l'esquerra, al centre…), quina mida té, si s'hi han afegit línies, si n'han eliminat o si han fet les dues coses, quantes marques hi ha i quines paraules han aparegut o desaparegut. En un full calibrat la mida és en unitats reals, a més de polzades al paper.

La llista indica què hi ha a la pàgina; no diu què significa. Una línia dibuixada que es mou pot ser un mur o una línia de crida. El vostre assistent connectat pot llegir la llista amb l'eina `revisions_changes` i posar-la en paraules, i la resta la podeu mirar al full. {{ui:Copia la llista}} la posa al porta-retalls i {{ui:CSV}} escriu una fila per canvi.

Els fulls s'aparellen pel número de full, tal com a [Marca amb un full de substitució un conjunt revisat](topic:slip-sheet-a-revised-set). Els canvis més petits de pocs punts s'ignoren, i el text que forma part d'una imatge (un escaneig) no té paraules que es puguin comparar.
