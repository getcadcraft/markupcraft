---
title: Envoyer les annotations au dessinateur sous forme de corrections
summary: Écrivez les annotations ouvertes sous forme de fichier de corrections destiné à celui qui dessine les modifications, puis chargez ses réponses pour que chaque annotation affiche Accepté ou Rejeté.
keywords: corrections, révision, dessinateur, accepter, rejeter, réponses, cc-redline, nuage de révision, appliquer les annotations
from: cb099d04
---

La revue n'est que la moitié du travail : le dessin doit encore être modifié. Le fichier de corrections transporte chaque annotation ouverte jusqu'au dessinateur, et ses réponses ramènent le résultat.

## Envoyer

1. Ouvrez l'onglet {{ui:Tâches}} et ouvrez {{ui:Corrections vers la révision}}.
2. Saisissez la révision à laquelle se rapportent les annotations (par exemple B).
3. Choisissez {{ui:Exporter le fichier de corrections}}.

Vous obtenez un fichier `.redline.json` comportant un élément par annotation ouverte : sa feuille, sa position (en fractions de la feuille, afin qu'un nouveau tracé à une autre taille reste aligné, et en points), ses mots, son auteur et son fil de discussion, ainsi que sa tâche si elle en a une. Les commentaires en lecture seule issus d'autres logiciels, les images et les légendes sont exclus.

## Réponses

Le dessinateur répond à chaque élément par Accepté, Rejeté ou Terminé, avec une note, dans un fichier `.redline-answers.json`. Choisissez {{ui:Charger le fichier de réponses…}} et sélectionnez-le : chaque annotation reçoit ce statut ainsi que la note du dessinateur dans son fil de discussion, et une tâche dont l'annotation a été acceptée ou terminée est achevée. Une seule étape d'annulation retire toutes les réponses.

Le format du fichier est décrit dans `docs/REDLINE-FORMAT.md`. La partie CadCraft (lecture du paquet, acceptation ou rejet de chaque élément, nuages de révision et journal) est développée séparément.
