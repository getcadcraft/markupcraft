---
title: Copier une zone de la page, ou une superposition
summary: Copiez une partie d'une feuille avec un rectangle, une ellipse ou une forme libre et collez-la dans une autre feuille, CadCraft, BimCraft, DetailCraft ou tout autre programme, à sa taille ; copiez-la comme superposition transparente, et alignez une image sur deux points.
keywords: copier une zone, zone, recadrer, capture, instantané, presse-papiers, région, rectangle, ellipse, cercle, forme libre, lasso, image, png, superposition, transparent, translucide, teinte, opacité, coller, taille réelle, échelle, aligner, deux points, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Choisissez {{ui:Plus}} › {{ui:Copier une zone de la page…}}. Une barre s'ouvre au-dessus de la feuille.

## Choisir la zone

Choisissez {{ui:Rectangle}}, {{ui:Ellipse}} ou {{ui:Forme libre}} dans la barre, puis faites glisser sur la feuille :

- **Rectangle :** faites glisser une boîte autour de la partie à copier.
- **Ellipse :** faites glisser une boîte ; l'ellipse qu'elle contient est copiée, et les angles hors de l'ellipse sont transparents.
- **Forme libre :** dessinez autour de la partie à copier ; la forme se referme d'elle-même. L'extérieur est transparent.

Faites glisser à nouveau pour recommencer, ou appuyez sur {{key:Esc}}.

## Copier

- {{ui:Inclure les annotations}} copie vos annotations avec la page ; décochez-le pour obtenir le dessin propre.
- {{ui:Résolution}} : {{ui:Telle qu'à l'écran}}, 72, 150 ou 300 dpi. L'image est conservée en dessous de 3 Mo ; quand une grande zone à haute résolution dépasserait cette limite, la résolution est abaissée et la ligne d'état indique à quelle valeur.
- {{ui:Copier}} (ou {{key:Mod+C}} ou {{key:Enter}}) place la zone dans le presse-papiers sous forme d'image PNG, qui se colle dans Word, un e-mail, d'autres programmes PDF et des logiciels de dessin.
- {{ui:Enregistrer en PNG}} télécharge l'image à la place, pour un programme qui supprime les parties transparentes au collage.

## Copier en superposition

{{ui:Copier en superposition}} rend aussi le papier blanc transparent, pour ne garder que les traits. {{ui:Couleur}} donne à chaque trait une seule couleur (rouge, bleu, vert, orange ou violet) pour que la superposition se détache du dessin dessous ; {{ui:Couleurs d'origine}} les conserve. {{ui:Intensité}} est la force de départ lors du collage dans nos applications (50 % sauf si vous la modifiez).

## Coller

**Dans MarkupCraft**, {{key:Mod+V}} sur n'importe quelle feuille colle la zone comme une annotation image au pointeur. Elle arrive à sa taille :

- sur papier, à la même taille que sur la feuille d'origine ;
- quand les deux feuilles ont une échelle, à la même taille dans le dessin : une zone d'une feuille au 1:50 arrive à moitié de sa taille sur papier sur une feuille au 1:100.

Une superposition démarre à son intensité ; modifiez-la avec {{ui:Opacité}} dans {{ui:Propriétés}}. Déplacez, redimensionnez, verrouillez et supprimez-la comme une image, et cochez {{ui:Aplatir dans la page à l'enregistrement}} pour la dessiner dans la page.

**Dans CadCraft, BimCraft et DetailCraft**, la copie connaît aussi sa taille : un collage arrive à la taille réelle du dessin lorsque la feuille avait une échelle, ou demande une échelle sinon. Voir l'aide de chaque application sur les images.

## Aligner une image sur deux points

Sélectionnez une seule image ou superposition, puis choisissez {{ui:Plus}} › {{ui:Aligner une image sur deux points}} :

1. Cliquez sur un point de l'image.
2. Cliquez à l'endroit où ce point doit aller.
3. Cliquez sur un second point de l'image, loin du premier.
4. Cliquez à l'endroit où ce point doit aller.

L'image est mise à l'échelle, déplacée et tournée pour que les deux points tombent où vous avez cliqué. {{key:Esc}} arrête ; {{key:Mod+Z}} annule en une étape.

## Bon à savoir

- La taille ne suit la copie qu'entre nos applications sur le même site, et seulement pour une copie faite dans les dernières heures ; un autre programme reçoit une simple image.
- Si le navigateur ne permet pas à MarkupCraft d'utiliser le presse-papiers du système, la ligne d'état le signale : le collage dans nos applications fonctionne toujours, et {{ui:Enregistrer en PNG}} sert aux autres programmes.
- L'alignement tourne l'image en redessinant ses pixels : une image tournée est donc légèrement plus floue que l'original.
