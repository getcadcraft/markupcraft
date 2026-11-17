---
title: Unités, longueurs et échelles
summary: Toutes les façons de saisir une longueur, les unités d'affichage des longueurs et des surfaces, l'arrondi et la liste des échelles prédéfinies.
keywords: unités, pieds, pouces, pieds et pouces, métrique, mètres, millimètres, centimètres, échelle, prédéfinie, échelle architecturale, échelle ingénieur, rapport, pieds carrés, arrondi, fractions
from: 574b0291
---

## Saisir une longueur

Lorsque vous étalonnez à partir de deux points, vous saisissez la distance réelle. MarkupCraft lit toutes ces formes :

| Vous saisissez | Cela signifie |
|---|---|
| `24'-0"` | 24 pieds |
| `12' 6 1/2"` ou `12'-6 1/2"` | 12 pieds 6½ pouces |
| `12' 6` | 12 pieds 6 pouces (marque de pouces omise) |
| `6"` ou `1/2"` | pouces |
| `12.5'` ou `12.5 ft` | 12½ pieds |
| `3 ft 6 in` | 3 pieds 6 pouces (aussi feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | métrique (aussi meter, metre, millimeter, centimetre…) |
| `24` | un nombre seul, dans l'unité choisie sous {{ui:Afficher les longueurs en}} |

Les guillemets courbes (’ ”) et deux apostrophes ('') pour les pouces fonctionnent aussi. Les longueurs nulles ou négatives sont refusées.

:::warning
Une virgule est lue comme un point décimal : `1,5 m` vaut 1.5 mètres. Ne saisissez pas de séparateurs de milliers : `1,200 mm` est lu comme 1.2 millimètres. Saisissez `1200 mm`.
:::

## Affichage des longueurs et des surfaces

| {{ui:Afficher les longueurs en}} | Une longueur s'affiche ainsi | Une surface s'affiche ainsi |
|---|---|---|
| {{ui:Pieds et pouces}} | `12'-6 1/2"`, arrondi au 1/16" | pieds carrés, deux décimales |
| {{ui:Pieds décimaux}} | `12.54'`, deux décimales | pieds carrés, deux décimales |
| {{ui:Pouces}} | `150.5"`, jusqu'à deux décimales | pouces carrés, une décimale |
| {{ui:Mètres}} | `3.820 m`, trois décimales | mètres carrés, trois décimales |
| {{ui:Millimètres}} | `3820 mm`, millimètres entiers | millimètres carrés, entiers |

Le périmètre d'une surface utilise le format de longueur.

## Échelles prédéfinies

Les valeurs prédéfinies supposent que le PDF est à sa taille d'impression réelle : 72 points PDF par pouce, comme le trace un logiciel de CAO.

| Groupe | Échelles | Longueurs affichées en |
|---|---|---|
| Architecturale | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pieds et pouces |
| Ingénieur | 1" = 10', 20', 30', 40', 50', 60', 100' | Pieds décimaux |
| Métrique | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimètres |
| Métrique | 1:100, 1:200, 1:250, 1:500, 1:1000 | Mètres |

Pour utiliser une échelle prédéfinie tout en voyant les longueurs dans une autre unité, étalonnez plutôt à partir de deux points et choisissez l'unité à cet endroit.

## Échelles enregistrées par d'autres programmes

Lorsqu'un PDF porte déjà une échelle pour une page, provenant d'un autre programme (une échelle de mesure enregistrée sur la page), MarkupCraft l'utilise si elle est en pieds, pouces, mètres, centimètres ou millimètres. Son libellé s'affiche tel que le fichier l'indique.

## Positions sur le papier

La barre d'état indique où se trouve le pointeur sur le papier, en pouces depuis le coin supérieur gauche de la feuille, quelle que soit l'échelle de la feuille. Les pas de décalage de Compare sont exprimés en points (72 points par pouce).

## Précision

Une mesure n'est aussi bonne que l'étalonnage et vos clics. Étalonnez sur la plus longue cote connue que vous trouvez, zoomez pour cliquer sur ses extrémités, puis vérifiez une autre cote. Un PDF mis à l'échelle lors de sa création (un tracé « ajusté à la page » ou un jeu à moitié de taille) reste exact après étalonnage à partir d'une cote, mais pas avec une échelle prédéfinie.
