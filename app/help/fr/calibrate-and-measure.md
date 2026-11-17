---
title: Étalonner une feuille et mesurer
summary: Réglez l'échelle de chaque feuille à partir d'un préréglage ou d'une cote connue, puis mesurez des longueurs, des surfaces avec leur périmètre et des comptages.
keywords: étalonner, échelle, régler l'échelle, mesurer, longueur, distance, cote, surface, pieds carrés, périmètre, comptage, métré, quantité, règle, arithmétique, calcul, plus, fraction
from: 49a25c6d
---

Les longueurs et les surfaces ont besoin de connaître l'échelle de la feuille. MarkupCraft conserve une échelle **par feuille** : étalonnez chaque feuille que vous mesurez. Les comptages n'ont pas besoin d'échelle.

La barre d'état affiche l'échelle de la feuille courante, ou « Non étalonnée ».

## Choisir une échelle dans la liste

Utilisez ceci quand le PDF est à taille réelle (une feuille de 24 × 36 qui s'imprime à 24 × 36) et que le dessin indique son échelle.

1. Cliquez sur le bouton d'échelle de la barre d'état (« Non étalonnée »). La boîte « Échelle de la feuille » s'ouvre.
2. Sous {{ui:Échelle}}, choisissez l'échelle : architecturale (1/32" = 1'-0" à 3" = 1'-0"), ingénieur (1" = 10' à 1" = 100') ou métrique (1:1 à 1:1000).
3. Choisissez {{ui:Régler l'échelle}}.

Résultat : la barre d'état affiche l'échelle, par exemple `1/4" = 1'-0"`. Les échelles architecturales affichent les longueurs en pieds et pouces, les échelles ingénieur en pieds décimaux, les échelles métriques jusqu'à 1:50 en millimètres et à partir de 1:100 en mètres.

:::warning
Un préréglage n'est juste que si le PDF n'a pas été réduit. Un jeu à demi-taille, ou une feuille « ajustée à la page » lors de sa création, se mesure faux avec un préréglage. Étalonnez plutôt à partir d'une cote connue, et vérifiez une cote dans tous les cas.
:::

## Étalonner à partir d'une cote connue

Utilisez ceci pour les jeux à demi-taille, les feuilles numérisées, les détails à des échelles inhabituelles, ou pour vérifier un préréglage.

1. Trouvez une cote longue en laquelle vous avez confiance, ou une barre d'échelle graphique.
2. Choisissez {{ui:Étalonner}} dans le groupe {{ui:Mesurer}} (ou choisissez {{ui:Choisir deux points}} dans la boîte « Échelle de la feuille »).
3. Cliquez sur une extrémité de la cote, puis sur l'autre. (Ou faites glisser d'une extrémité à l'autre.) Zoomez d'abord pour plus de précision ; {{key:Shift}} garde la ligne par pas de 45°.
4. La boîte indique l'écart entre les points sur le papier et demande « Quelle est la distance réelle ? ». Saisissez la {{ui:Distance réelle}}, par exemple `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`.
5. Choisissez le mode d'affichage des longueurs sous {{ui:Afficher les longueurs en}} : {{ui:Pieds et pouces}}, {{ui:Pieds décimaux}}, {{ui:Pouces}}, {{ui:Mètres}} ou {{ui:Millimètres}}.
6. Choisissez {{ui:Régler l'échelle}}.

Résultat : la barre d'état affiche « Étalonnée : 24'-0" pour 1.00 in » (la longueur réelle et la longueur sur le papier), et l'outil avec lequel vous alliez mesurer revient. Toutes les façons de saisir une longueur figurent dans [Unités et longueurs](topic:units-and-scales).

La distance réelle peut aussi être un petit calcul : `12'6"+3/4"`, `(24'-0")/3` ou `2*450mm`. Utilisez `+ - * /` et des parenthèses ; un nombre sans unité compte dans l'unité choisie sous {{ui:Afficher les longueurs en}} (pieds pour {{ui:Pieds et pouces}}). {{ui:Régler l'échelle}} utilise le résultat.

Si MarkupCraft ne peut pas lire ce que vous avez saisi, la boîte le signale : « Ce n'est pas une longueur que MarkupCraft comprend. Essayez 24'-0", 12' 6 1/2", 7.2 m ou 900 mm. » Un calcul qu'il ne peut pas résoudre indique pourquoi et où, par exemple « Une parenthèse n'est pas fermée (caractère 5). »

## Mesurer une longueur

1. Choisissez {{ui:Longueur}} ({{key:M}}).
2. Cliquez sur le début, puis sur la fin. Ou faites glisser du début à la fin. {{key:Shift}} la garde par pas de 45°.

Résultat : une ligne de cote avec des traits et la longueur écrite dessus. La barre d'état la répète (« Longueur : 12'-6 1/2" (1/4" = 1'-0") »), et {{ui:Propriétés}} l'affiche sous {{ui:Longueur}}. Les pieds et pouces sont arrondis au 1/16" le plus proche.

Si la feuille n'a pas encore d'échelle, choisir {{ui:Longueur}} passe à {{ui:Étalonner}} et la barre d'état l'explique : « Étalonnez d'abord cette feuille : indiquez deux points à une distance connue, ou choisissez son échelle. Mesurez ensuite. » Après avoir réglé l'échelle, {{ui:Longueur}} revient.

## Dessiner à l'échelle

Sur une feuille étalonnée, vous pouvez saisir des longueurs réelles pendant le dessin d'une {{ui:Ligne}}, d'une {{ui:Flèche}}, d'une {{ui:Longueur}}, d'une {{ui:Polyligne}}, d'un {{ui:Polygone}}, d'un {{ui:Nuage libre}}, d'une {{ui:Surface}} ou d'un espace :

1. Cliquez sur le premier point.
2. Orientez le segment suivant et saisissez sa longueur, par exemple `16` (dans l'unité de la feuille), `12'6"` ou `3.5 m`. Une boîte s'ouvre près du pointeur pendant la saisie.
3. Appuyez sur {{key:Enter}}. Le point se place à cette distance, dans la direction du pointeur.

Pour fixer la direction exactement, ajoutez `<` et un angle en degrés : `8 < 90` va 8 pieds tout droit vers le haut, `4<0` vers la droite, `10 < 225` vers le bas et à gauche, tel que la feuille est vue (pages pivotées comprises). Continuez à saisir les longueurs des coins suivants, et terminez la forme comme d'habitude. {{key:Esc}} ferme la boîte sans placer de point.

## Mesurer un angle

1. Choisissez {{ui:Angle}} ({{key:X}}).
2. Cliquez sur l'extrémité d'une branche, puis sur le sommet, puis sur l'extrémité de l'autre branche.

Résultat : les deux branches, un petit arc au sommet et l'angle en degrés, au dixième près (de 0° à 180°). Un angle n'a pas besoin d'échelle. {{ui:Propriétés}} l'affiche sous {{ui:Angle}}, et la liste, le CSV et le BCF le transportent.

Un {{ui:Arc}} ({{key:O}}) sur une feuille étalonnée affiche aussi sa longueur le long de la courbe dans {{ui:Propriétés}}.

## Mesurer une surface et son périmètre

1. Choisissez {{ui:Surface}} ({{key:Q}}).
2. Cliquez sur chaque angle de la pièce ou de la zone.
3. Terminez par un double-clic, {{key:Enter}} ou un clic droit (double tapotement sur tactile). {{key:Backspace}} supprime le dernier coin.

Résultat : un contour ombré avec la surface, et « P » suivi du périmètre au centre, par exemple « 128.00 sq ft » et « P 48'-0" ». Les échelles en pieds donnent des pieds carrés, en pouces des pouces carrés, en mètres des mètres carrés, en millimètres des millimètres carrés. Une surface a besoin d'au moins trois coins.

### Découpes

Pour exclure un poteau, une gaine ou une cour, sélectionnez la surface et choisissez {{ui:Ajouter une découpe}} dans {{ui:Propriétés}}. Cliquez sur les coins de la découpe à l'intérieur de la surface, et terminez comme pour une surface. La découpe reste ouverte (non ombrée), sa surface est retirée, et ses bords sont ajoutés au périmètre : une pièce de 16' × 8' avec une découpe de 4' × 4' affiche « 112.00 sq ft » et « P 64'-0" ». Ajoutez-en autant que nécessaire ; elles ne peuvent pas se chevaucher ni traverser le contour de la surface. {{ui:Supprimer les découpes}} les retire toutes, et {{key:Mod+Z}} annule la dernière.

## Compter des éléments

1. Choisissez {{ui:Compter}} ({{key:U}}).
2. Dans {{ui:Propriétés}}, saisissez un {{ui:Nom du groupe}}, par exemple « Siphons de sol ». (Il est conservé pour la prochaine fois.)
3. Cliquez sur chaque élément de la feuille.

Résultat : chaque clic ajoute un point numéroté ; le premier point porte une étiquette comme « Siphons de sol : 7 », et la barre d'état conserve le total en cours.

- **Commencer un autre groupe :** appuyez une fois sur {{key:Esc}} (cela efface la sélection), modifiez le {{ui:Nom du groupe}}, puis cliquez à nouveau.
- **Ajouter à un groupe existant :** sélectionnez d'abord le groupe, puis choisissez {{ui:Compter}} et cliquez.
- **Retirer une marque :** le groupe étant sélectionné, maintenez {{key:Shift}} et cliquez sur le point. Retirer le dernier point supprime le groupe. Sur un écran tactile sans clavier, utilisez {{key:Mod+Z}} ou {{ui:Annuler}} à la place.
- **Renommer un groupe :** sélectionnez-le et modifiez le {{ui:Nom du groupe}} dans {{ui:Propriétés}}.

Un groupe de comptage appartient à une seule feuille. Les comptages sur plusieurs feuilles apparaissent comme des groupes distincts dans la liste des annotations.

## Changer ou supprimer une échelle

Cliquez sur le bouton d'échelle de la barre d'état. La boîte affiche l'échelle actuelle ; choisissez-en une autre, choisissez {{ui:Choisir deux points}}, ou choisissez {{ui:Retirer l'échelle}}.

Les longueurs et surfaces déjà dessinées sont **remesurées** immédiatement avec la nouvelle échelle. Annuler rétablit l'ancienne échelle.

## Où vont les nombres

- {{ui:Propriétés}} affiche les valeurs de la mesure sélectionnée.
- L'onglet {{ui:Annotations}} liste chaque valeur, et son CSV comporte une colonne « Mesure ». Voir [La liste des annotations](topic:markups-list-and-export).
- Le PDF enregistré conserve l'échelle sur la page et écrit les longueurs et surfaces comme commentaires de mesure, afin que les autres programmes PDF qui savent lire les mesures puissent les afficher. Voir [Ce qui est enregistré dans le PDF](topic:what-the-pdf-keeps).

Pour un métré complet avec postes, ouvrages et prix, utilisez TakeoffCraft : MarkupCraft mesure pour la revue, pas pour l'estimation.
