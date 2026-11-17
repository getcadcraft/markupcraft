---
title: Espaces
summary: Nommez les pièces ou zones d'une feuille, puis filtrez, comptez et exportez les annotations selon l'espace où elles se trouvent.
keywords: espaces, espace, pièce, zone, aile, zone de travail, emplacement, filtrer par pièce, grouper par pièce, exporter par espace
from: b199339c
---

Un espace est une zone nommée sur une feuille : une pièce, une aile, une phase de travaux. Chaque annotation située à l'intérieur lui appartient, ce qui vous permet de lister, filtrer et exporter les annotations d'une seule pièce.

## Créer un espace

1. Ouvrez {{ui:Espaces}}, en haut du panneau {{ui:Feuilles}}, puis choisissez {{ui:Nouvel espace}}.
2. Cliquez sur les angles de la zone, puis double-cliquez ou appuyez sur {{key:Enter}}.
3. Saisissez son nom, par exemple `Cuisine` ou `Niveau 2 est`, puis choisissez {{ui:Ajouter l'espace}}.

L'espace apparaît comme une zone vert clair avec un contour en tirets et son nom. La barre d'état indique combien d'annotations il contient.

## Ce qui se trouve dans un espace

Une annotation appartient à l'espace qui contient le milieu de l'annotation. Lorsque des espaces sont imbriqués (une pièce dans une aile), le plus petit l'emporte. Déplacez une annotation et elle passe d'un espace à l'autre. Sélectionnez un espace pour modifier son contour avec ses poignées, ou son nom sous {{ui:Nom}} dans {{ui:Propriétés}}.

- {{ui:Propriétés}} affiche l'espace d'une annotation.
- La liste {{ui:Annotations}} filtre par {{ui:Espace}}, y compris {{ui:Aucun espace}}.
- Les exports CSV et XLSX reçoivent une colonne {{ui:Espace}} dès que le jeu contient des espaces.
- Le panneau {{ui:Espaces}} liste chaque espace avec le nombre d'annotations qu'il contient ; choisissez-en un pour y aller.

## Dans le PDF enregistré

Un espace est un commentaire polygone dont le texte est son nom, dessiné avec une bordure en tirets pour que les autres lecteurs l'affichent aussi. Il se rouvre dans MarkupCraft comme un espace.
