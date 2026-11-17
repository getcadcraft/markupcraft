---
title: Paramètres de MarkupCraft
summary: Modifier votre nom, la couleur et l'épaisseur des nouvelles annotations, l'endroit où la copie est collée, ainsi que les unités des longueurs et la position sur la feuille.
keywords: paramètres, préférences, options, nom, auteur, couleur, couleur par défaut, épaisseur de trait, épais, fin, coller, coller au pointeur, décalage, unités, métrique, millimètres, pouces, pieds, réinitialiser
from: 63ad97fd
---

Ouvrez {{ui:Paramètres}} avec l'engrenage de la barre en haut, ou appuyez sur {{key:Mod+,}}. Le premier onglet, {{ui:MarkupCraft}}, contient les paramètres propres à cette application ; {{ui:Général}} regroupe ceux que partagent toutes les applications CadCraft (thème, barre d'outils, panneaux). Les paramètres de MarkupCraft n'existent que dans l'application : vous les modifiez ici, et ce navigateur les mémorise (voir [Ce qui reste dans ce navigateur](topic:browser-storage)). Un changement prend effet immédiatement ; il n'y a rien à enregistrer.

## Votre nom

{{ui:Nom sur les annotations}} est le nom que porte chaque nouvelle annotation et réponse, et que les PDF enregistrés affichent comme auteur du commentaire. C'est le même nom que le bouton à l'extrémité droite de la barre d'état ; modifiez-le à l'un ou l'autre endroit. Les annotations déjà dessinées gardent le nom sous lequel elles ont été créées. Voir [Définir votre nom d'auteur](topic:set-your-name).

## Nouvelles annotations

- **{{ui:Couleur des annotations}}** est la couleur avec laquelle commencent les nouveaux stylos, traits, flèches, rectangles, ellipses, polylignes, polygones, nuages, légendes et textes (rouge au départ). Les surligneurs, notes, tampons, longueurs, surfaces et comptages gardent leurs propres couleurs, car leurs couleurs indiquent ce qu'ils sont.
- **{{ui:Traits fins}}, {{ui:Normal}}, {{ui:Traits épais}}** rendent les traits de ces mêmes annotations moitié moins épais, tels quels, ou moitié plus épais.

Une couleur ou une épaisseur de trait que vous choisissez pour un outil dans {{ui:Propriétés}} (avec cet outil activé et rien de sélectionné) l'emporte sur ces réglages. Les outils de la [boîte à outils](topic:tool-chest) gardent leur propre style. Les annotations déjà dessinées ne changent pas : sélectionnez-les et modifiez-les dans {{ui:Propriétés}}.

## Coller

Emplacement où {{key:Mod+V}} place ce que vous avez copié :

- **{{ui:Au pointeur}}** (par défaut) : avec le pointeur sur la feuille, la copie est centrée là où il pointe. Pointeur ailleurs, elle se place à côté de l'original.
- **{{ui:À côté de la copie}}** : toujours un peu plus bas et à droite de l'original, avec un pas de plus à chaque collage.

Le bouton {{ui:Coller}} et {{key:Mod+Shift+V}} ({{ui:Coller à la même position}}) fonctionnent de la même façon avec l'un ou l'autre choix. Voir [Copier, coller et dupliquer](topic:select-and-edit#copy-paste-and-duplicate).

## Mesures

- **{{ui:Afficher les longueurs en}}** est l'unité que la boîte d'échelle de la feuille propose en premier lorsque vous étalonnez à partir de deux points : pieds et pouces, pieds décimaux, pouces, mètres ou millimètres. Les feuilles déjà étalonnées gardent leur unité. Voir [Étalonner une feuille et mesurer](topic:calibrate-and-measure).
- **{{ui:Position sur la feuille}}** choisit les pouces ou les millimètres pour la position du pointeur en bas à gauche de l'écran. Il s'agit d'une position sur le papier, et non d'une distance réelle.

## Réinitialiser

{{ui:Réinitialiser les paramètres de MarkupCraft}} en bas de la boîte remet ces paramètres, ainsi que ceux des panneaux et de la barre d'outils de {{ui:Général}}, à leur état de départ. Votre nom est conservé, car il indique qui vous êtes plutôt que la façon dont vous aimez travailler, et les couleurs choisies dans le panneau de chaque outil sont conservées.
