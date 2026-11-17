---
title: Comparer deux révisions
summary: Superposez une ancienne et une nouvelle émission d'une feuille en deux couleurs, alignez-les sur deux points, et encadrez ce qui a changé.
keywords: comparer, superposition, superposer des pages, révision, différence, différences, modifications, ancien nouveau, aligner, contrôle, émission, bulletin
from: 62f5d1c5
---

Comparer superpose deux feuilles. Les traits présents seulement sur l'ancienne feuille apparaissent en rouge, ceux seulement sur la nouvelle en bleu, et ceux présents sur les deux en gris atténué. Les couleurs sont nommées dans la légende sous la feuille : « Seulement sur l'ancienne feuille », « Seulement sur la nouvelle feuille », « Sur les deux ».

## Comparer deux feuilles

1. Ouvrez les deux émissions. Elles peuvent être des pages d'un même PDF ou de PDF différents ; ouvrez-les ensemble comme un seul ensemble (voir [Travailler avec plusieurs fichiers à la fois](topic:several-files)).
2. Choisissez l'onglet {{ui:Comparer}} à droite.
3. Choisissez la {{ui:Ancienne feuille}} et la {{ui:Nouvelle feuille}}. La nouvelle feuille est d'abord celle où vous êtes. Quand plusieurs fichiers sont ouverts, le nom du fichier de chaque feuille s'affiche après son nom.
4. Choisissez {{ui:Comparer}}.

Résultat : MarkupCraft affiche la nouvelle feuille avec l'ancienne mêlée à elle, la légende apparaît, et l'onglet indique « Comparaison de <old> (ancienne) avec <new> (nouvelle). Les annotations de la nouvelle feuille restent modifiables. »

## Fondu entre l'ancienne et la nouvelle

Faites glisser le curseur {{ui:Ancienne et nouvelle}}. Tout à gauche, seule l'ancienne feuille s'affiche ; tout à droite, seule la nouvelle ; au milieu, les deux. Faire des allers-retours est souvent le moyen le plus rapide de voir un petit changement.

## Aligner les feuilles

Si les deux émissions ont été tracées avec une marge, une taille ou une rotation différentes, tout semble modifié. Pour corriger :

**Par deux points (le mieux) :**

1. Choisissez {{ui:Aligner sur deux points}}. La vue n'affiche que l'ancienne feuille.
2. Cliquez sur un détail net que vous retrouvez sur les deux feuilles, comme l'intersection d'une trame de poteaux. L'onglet compte les étapes (« 1 sur 4 »).
3. Cliquez sur un second détail, loin du premier, comme l'angle opposé de la trame.
4. La vue passe à la nouvelle feuille. Cliquez à nouveau sur le premier détail.
5. Cliquez à nouveau sur le second détail.

Résultat : « Alignée : ancienne feuille à l'échelle 100.00 %, tournée de 0.00°. Ajustez finement avec les boutons de déplacement. » L'ancienne feuille est déplacée, mise à l'échelle et tournée pour s'ajuster. {{key:Esc}} annule pendant la sélection. Zoomez sur chaque détail avant de cliquer pour un ajustement précis.

**Par petits déplacements :** utilisez les quatre boutons fléchés sous « Aligner » pour déplacer l'ancienne feuille. Choisissez le pas (0.25, 1, 5 ou 20 pt ; 72 pt font un pouce sur le papier). L'onglet indique le déplacement effectué.

{{ui:Réinitialiser}} supprime l'alignement et les déplacements.

## Seulement les traits modifiés

Sous les boutons d'alignement, choisissez {{ui:Traits modifiés}} au lieu de {{ui:Superposition d'image}}. MarkupCraft compare alors les traits propres des deux feuilles, et non leurs images : la nouvelle feuille s'affiche telle quelle, avec les traits seulement sur l'ancienne en rouge et les traits seulement sur la nouvelle en bleu. Un trait qui a seulement raccourci n'affiche que la partie manquante. Alignez d'abord les feuilles (voir ci-dessus) : la comparaison utilise l'alignement, donc une feuille simplement décalée n'affiche aucune modification. La ligne d'état indique l'ampleur des changements.

Ceci fonctionne pour les PDF tracés depuis la CAO, où le dessin est fait de traits. Les feuilles numérisées n'ont pas de traits à comparer : utilisez la superposition d'image pour elles. Le texte composé dans une police (non tracé en traits) n'est pas comparé.

## Marquer les modifications

Pendant la comparaison, vous êtes sur la nouvelle feuille et tous les outils fonctionnent. Dessinez des nuages autour des changements au fur et à mesure ; ils appartiennent à la nouvelle feuille et restent quand vous arrêtez la comparaison.

{{ui:Encadrer les modifications}} le fait pour vous : il regroupe les traits modifiés proches les uns des autres et trace un nuage de révision autour de chaque groupe sur la nouvelle feuille, avec « Modifié depuis <old sheet> » comme commentaire. Un seul {{key:Mod+Z}} les retire tous ; supprimez ensuite ceux dont vous n'avez pas besoin.

## Comparer un jeu complet

Quand la nouvelle émission arrive dans son propre PDF, ouvrez les deux PDF et ouvrez {{ui:Comparer deux jeux}} dans l'onglet {{ui:Comparer}}. Choisissez l'ancien fichier et le nouveau, puis choisissez {{ui:Comparer les jeux}}. Les feuilles sont appariées par leur numéro (comme dans [la pose d'intercalaires](topic:slip-sheet-a-revised-set)), comparées par leurs traits, et listées avec les plus modifiées en premier. Choisissez une feuille dans la liste pour comparer cette paire avec {{ui:Traits modifiés}}.

{{ui:Encadrer toutes les modifications}} encadre chaque groupe de traits modifiés sur chaque feuille modifiée, en une seule étape annulable. La comparaison d'ensemble n'aligne pas d'abord les feuilles : une feuille décalée sur la page apparaît donc comme modifiée. Comparez cette paire seule et utilisez {{ui:Aligner sur deux points}}.

## Arrêter la comparaison

Choisissez {{ui:Arrêter la comparaison}}, ou passez à une autre feuille. L'alignement est mémorisé pour la même paire de feuilles jusqu'à la fermeture de l'ensemble.

## Bon à savoir

- La comparaison porte sur ce qui est dessiné, pixel par pixel. Elle ne sait pas qu'un trait a bougé : elle montre l'ancienne position dans une couleur et la nouvelle dans l'autre.
- Un texte réorganisé, une date modifiée dans le cartouche ou un style de tracé différent apparaissent aussi comme des modifications.
- Une feuille numérisée comparée à une feuille tracée est bruitée : la numérisation floute et décale les traits.
- La comparaison du texte composé dans une police, et une liste des modifications, ne sont pas encore disponibles.
