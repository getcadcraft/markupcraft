---
title: Annoter une feuille
summary: Dessinez des nuages de révision, des détails, des zones de texte, des flèches, des formes, des tracés au crayon et des surlignages, et réglez leur couleur et leur trait avant ou après.
keywords: annotation, révision, nuage, nuage de révision, détail, zone de texte, flèche, ligne, rectangle, ellipse, cercle, polyligne, polygone, crayon, tracé libre, encre, surligneur, couleur, épaisseur du trait
from: 9d6de0ac
---

Chaque outil fonctionne de la même façon : choisissez-le, dessinez sur la feuille, et la nouvelle annotation est sélectionnée pour que vous la voyiez dans {{ui:Properties}}. L'outil reste actif pour la suivante. La barre d'état indique toujours ce que l'outil attend ensuite.

:::touch
Sur un écran tactile, utilisez un doigt pour dessiner. Un second doigt annule ce que le premier a commencé, et pince ou déplace la vue à la place : vous ne laissez donc jamais de trace par accident pendant un zoom. Plus d'informations dans [Réviser sur un iPad ou un écran tactile](topic:review-on-a-tablet).
:::

## Nuages de révision

**Nuage en boîte :** choisissez {{ui:Cloud}} ({{key:C}}) et glissez une boîte. Maintenez {{key:Shift}} pour la rendre carrée.

**Nuage libre** autour d'une forme irrégulière :

1. Choisissez {{ui:Free cloud}} ({{key:Shift+C}}).
2. Cliquez sur chaque angle de la zone.
3. Terminez par un double-clic, {{key:Enter}} ou un clic droit. Sur tactile, faites un double appui.

Pendant que vous cliquez les points, {{key:Backspace}} supprime le dernier point et {{key:Esc}} annule la forme entière. Maintenez {{key:Shift}} pour que le côté suivant reste à un multiple de 45°. Un nuage libre nécessite au moins trois points.

Les festons bombent toujours vers l'extérieur et leur taille suit l'épaisseur du trait : un trait plus épais donne des arcs plus grands.

## Détails

Un détail est une zone de texte avec une ligne de repère qui pointe vers un élément.

1. Choisissez {{ui:Callout}} ({{key:K}}).
2. Appuyez sur le point à détailler et glissez jusqu'à l'endroit où le texte doit aller. Relâchez.
   Si vous cliquez sans glisser, la boîte est placée en haut et à droite du point.
3. Saisissez le texte. La boîte s'agrandit vers le bas à mesure que les lignes se retournent.
4. Cliquez n'importe où en dehors de la boîte, ou appuyez sur {{key:Mod+Enter}}, pour terminer. {{key:Esc}} supprime le détail.

Si vous terminez sans rien saisir, aucun détail n'est ajouté (« Rien n'a été saisi, aucun détail n'a été ajouté. »).

Une fois tracé, sélectionnez-le pour déplacer la boîte, faire glisser la pointe de la ligne de repère ou son coude (les deux poignées en losange), ou redimensionner la boîte.

## Zones de texte

1. Choisissez {{ui:Text}} ({{key:T}}).
2. Cliquez à l'endroit où le texte commence (vous obtenez une boîte d'une largeur raisonnable), ou glissez une boîte de la taille voulue.
3. Saisissez, puis cliquez à l'extérieur ou appuyez sur {{key:Mod+Enter}}.

Le texte n'a pas de bordure par défaut. Pour en ajouter une, augmentez {{ui:Line width}} dans {{ui:Properties}}. Pour lui donner un fond, cochez {{ui:Fill}}.

Pour modifier les mots plus tard : avec {{ui:Select}} activé, double-cliquez sur le texte, ou sélectionnez-le et appuyez sur {{key:Enter}}, ou choisissez {{ui:Edit on the sheet}} dans {{ui:Properties}}. Vous pouvez aussi le modifier dans la zone {{ui:Text}} de {{ui:Properties}}.

## Flèches et lignes

1. Choisissez {{ui:Arrow}} ({{key:A}}) ou {{ui:Line}} ({{key:L}}).
2. Glissez du début à la fin. Ou cliquez sur le début, relâchez, puis cliquez sur la fin.
3. Maintenez {{key:Shift}} pour garder un multiple de 45°.

La pointe de flèche se trouve à l'extrémité où vous avez terminé.

## Rectangles, ellipses, polylignes et polygones

- {{ui:Rectangle}} ({{key:R}}) et {{ui:Ellipse}} ({{key:E}}) : glissez une boîte. {{key:Shift}} fait un carré ou un cercle. Un clic sans glisser ne trace rien, et la barre d'état vous demande de glisser.
- {{ui:Polyline}} ({{key:Y}}) et {{ui:Polygon}} ({{key:G}}) : cliquez des points ; terminez par un double-clic, {{key:Enter}} ou un clic droit (double appui sur tactile). {{key:Backspace}} supprime le dernier point. Un polygone se referme automatiquement et nécessite trois points ; une polyligne en nécessite deux.

## Crayon et surligneur

- {{ui:Pen}} ({{key:P}}) : glissez pour dessiner à main levée. Le tracé est légèrement lissé lorsque vous relâchez.
- {{ui:Highlight}} ({{key:I}}) : identique, avec un trait large, jaune et translucide qui teinte le dessin situé dessous au lieu de le recouvrir.
- Maintenez {{key:Shift}} pendant le tracé pour obtenir un seul trait droit à partir du point de départ.

Le surligneur est un tracé à main levée. Il ne s'accroche pas au texte du PDF.

## Couleur, trait et remplissage

Deux méthodes :

- **Avant de dessiner :** choisissez l'outil. Sans rien de sélectionné, {{ui:Properties}} affiche les réglages « outil <tool> » : {{ui:Color}}, {{ui:Line width}} (en points), {{ui:Fill}} et {{ui:Fill opacity}} pour les formes fermées, {{ui:Opacity}}, et {{ui:Text size}} pour le texte. Chaque nouvelle annotation de ce type les utilise, et MarkupCraft les retient dans ce navigateur.
- **Après le tracé :** sélectionnez une ou plusieurs annotations et modifiez les mêmes commandes sous « Style ». Avec plusieurs sélectionnées, la modification s'applique à toutes en une seule étape.

Les valeurs par défaut : annotations rouges, surligneur jaune, mesures bleues, comptages orange, et tampons colorés selon leur sens.

Les styles que vous réutilisez chaque jour trouvent leur place dans le coffre à outils : voir [Le coffre à outils](topic:tool-chest).

## Objet et commentaire

Chaque annotation possède aussi un {{ui:Subject}} (un court libellé comme « Nuage » ou « RFI », affiché dans la liste des annotations et dans les autres visionneuses PDF) et un {{ui:Comment}} (notes plus longues). Renseignez-les dans {{ui:Properties}}. Pour une conversation sur une annotation, utilisez les réponses : voir [Statuts et réponses](topic:statuses-and-replies).

## Suite

- [Sélectionner, déplacer et modifier les annotations](topic:select-and-edit)
- [Tampons et notes](topic:stamps-and-notes)
- [Tous les types d'annotations](topic:markup-types)
