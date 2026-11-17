---
title: Modifier les lignes, images et textes propres à la page
summary: Déplacez, redimensionnez, recolorez ou supprimez ce que le PDF dessine lui-même, déplacez les points d'une ligne, remplacez une image et modifiez les mots d'une ligne de texte.
keywords: contenu de la page, contenu de base, modifier le pdf, modifier le dessin, vecteur, tracé, forme, ligne, image, remplacer l'image, texte, mots, police, points, nœuds, déplacer, redimensionner, recolorer, supprimer, outil de contenu
from: 471d457e
---

Les annotations se superposent à une feuille. L'outil {{ui:Contenu}} agit sur la feuille elle-même : les lignes, images et lignes de texte que dessine le PDF. Votre PDF sur cet ordinateur n'est jamais modifié : les changements font partie de la copie que vous enregistrez.

## Choisir ce qu'il faut modifier

1. Choisissez {{ui:Contenu}} dans le groupe {{ui:Sélectionner}}, ou appuyez sur {{key:B}}.
2. Sous {{ui:Choisir}} dans {{ui:Propriétés}}, activez ou désactivez {{ui:Formes}}, {{ui:Images}} et {{ui:Texte}}. Seules les catégories activées peuvent être choisies : vous pouvez ainsi sélectionner le texte d'un dessin chargé sans attraper ses lignes.
3. Cliquez sur un élément pour le sélectionner. Maj+clic ajoute ou retire un élément. Faites glisser un cadre sur du papier vide pour sélectionner plusieurs éléments : glisser vers la droite prend ce qui est entièrement dans le cadre, glisser vers la gauche prend ce qu'il touche.

Une forme située dans une zone recadrée n'est sélectionnée qu'à l'endroit où elle apparaît.

## Déplacer, redimensionner, recolorer, supprimer

- **Déplacer :** faites glisser un objet sélectionné, ou appuyez sur les touches fléchées (maintenez Maj pour des pas plus grands). Maintenez Maj en faisant glisser pour déplacer en ligne droite, horizontalement ou verticalement.
- **Redimensionner :** faites glisser l'un des huit carrés autour de la sélection. L'objet grandit ou rétrécit à partir du côté opposé. Maintenez Maj pour conserver les proportions.
- **Recolorer :** pour les lignes et les formes, réglez {{ui:Couleur du trait}}, {{ui:Couleur de remplissage}} et {{ui:Épaisseur du trait (pt)}} dans {{ui:Propriétés}}.
- **Supprimer :** appuyez sur {{key:Delete}}, ou choisissez {{ui:Supprimer de la page}}.
- **Annuler :** chaque modification est une étape : {{key:Mod+Z}} la révoque, {{key:Mod+Y}} la rétablit.

{{ui:Remettre comme il était}} annule d'un coup toutes les modifications des objets sélectionnés ; {{ui:Remettre cette page comme elle était}} le fait pour toute la page.

## Copier, couper et coller le contenu de la page

Sélectionnez des lignes, images ou textes avec l'outil {{ui:Contenu}}, puis :

- {{key:Mod+C}} copie, {{key:Mod+X}} coupe (copie et retire de la page), {{key:Mod+D}} place une copie à côté d'eux.
- {{key:Mod+V}} colle en tant que contenu de la page, à côté de l'original ou à l'emplacement du pointeur (comme l'indiquent les [Paramètres](topic:settings)) ; {{key:Mod+Shift+V}} colle exactement au même endroit. Collez sur une autre page, dans un autre PDF ouvert ou dans un autre onglet MarkupCraft de ce navigateur.
- Le menu du groupe {{ui:Édition}} et le menu contextuel (clic droit) proposent les mêmes commandes.

Un collage conserve les lignes en lignes, les mots en mots dans leur propre police, et les images en images. C'est un seul bloc : déplacez-le, redimensionnez-le par ses carrés, supprimez-le, ou annulez-le avec {{key:Mod+Z}}. Il fait partie de la page dans la copie que vous enregistrez. Le dernier élément copié, annotation ou contenu de page, est ce que {{key:Mod+V}} colle.

Le contenu de la copie est limité au cadre entourant la sélection : un élément que MarkupCraft ne peut pas retirer de la copie (voir ci-dessous) et qui se trouve dans ce cadre est aussi copié.

## Déplacer les points d'une ligne

Double-cliquez sur une ligne ou une courbe (ou sélectionnez-la et choisissez {{ui:Modifier les points}}). Ses points apparaissent sous forme de carrés, et ses poignées de courbe sous forme de cercles. Faites glisser un point ou une poignée ; un point entraîne avec lui les poignées voisines, afin que la courbe garde sa forme autour de lui. Appuyez sur {{key:Esc}}, ou cliquez à côté de la ligne, lorsque vous avez terminé.

Les rectangles n'ont pas de points à faire glisser : redimensionnez-les avec les carrés qui les entourent.

## Remplacer une image

Sélectionnez une image et choisissez {{ui:Remplacer l'image…}}, puis choisissez un fichier PNG, JPEG ou SVG (ou un PDF : sa première page). La nouvelle image prend la place de l'ancienne, en conservant ses propres proportions.

## Modifier les mots d'une ligne de texte

Double-cliquez sur une ligne de texte, saisissez les nouveaux mots dans {{ui:Mots}} et appuyez sur {{key:Enter}}. Les mots sont écrits dans la police et la taille propres à la ligne, et la ligne garde sa longueur, si bien que le texte qui la suit ne bouge pas.

:::note
La plupart des PDF ne contiennent que les lettres utilisées de chaque police. Lorsque vous tapez une lettre que la copie de la police du fichier ne contient pas, MarkupCraft l'écrit en Helvetica et le signale. {{ui:Propriétés}} indique quelles lettres la police du fichier contient.
:::

Le texte est modifié une ligne à la fois ; il ne passe pas à la ligne suivante.

## Ce que MarkupCraft laisse tel quel

- **Les pages numérisées** sont une seule image : vous pouvez déplacer, redimensionner, remplacer ou supprimer l'image, mais son contenu ne peut pas être modifié.
- **PDF chiffrés et signés :** modifier la page casserait une signature ; l'outil {{ui:Contenu}} le signale et ne modifie rien. Les annotations fonctionnent toujours.
- **Zones de recadrage, objets répartis entre deux parties du contenu de la page, et dégradés de couleur qui remplissent toute une zone** restent tels quels ; MarkupCraft indique pourquoi lorsque vous essayez.
- **Mots dans une police standard que le PDF ne décrit pas** (comme une police Times sans largeurs de caractères dans le fichier) ne peuvent pas être modifiés, car MarkupCraft ne pourrait pas conserver l'espacement de la ligne. La ligne peut toutefois être déplacée.

## Intégrer les annotations à la page

Les lignes, rectangles, ellipses, polylignes, nuages et tracés au stylet que vous avez dessinés comme annotations peuvent faire partie de la page elle-même : sélectionnez-les et choisissez {{ui:Intégrer à la page}} dans {{ui:Propriétés}}. Le texte, les tampons, les images et les couleurs transparentes restent des annotations.
