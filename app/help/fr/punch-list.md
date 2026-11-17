---
title: Créer une liste de réserves
summary: Transformez les annotations en éléments numérotés de la liste de réserves, avec un affecté à, une échéance et un état, puis exportez la liste.
keywords: liste de réserves, réserve, liste de défauts, défaut, problèmes de chantier, observation, affecter, affecté à, échéance, levée des réserves, visite de chantier, numéro
from: b98b38e6
---

Un élément de la liste de réserves est une annotation avec un numéro, un affecté à, une échéance et un état d'élément. Le numéro est dessiné sur la feuille à côté de l'annotation, de sorte que la feuille imprimée et la liste concordent.

## Ajouter des éléments

1. Annotez chaque problème sur les feuilles : un nuage, un détail, une note, n'importe quoi.
2. Sélectionnez-en un ou plusieurs (voir [Sélectionner, déplacer et modifier les annotations](topic:select-and-edit)).
3. Soit ouvrez l'onglet {{ui:Liste de réserves}} et choisissez {{ui:Ajouter la sélection à la liste de réserves}}, soit choisissez {{ui:Ajouter à la liste de réserves}} dans {{ui:Propriétés}}.

Résultat : chaque annotation reçoit le numéro suivant (1, 2, 3…), dans l'ordre des feuilles puis dans l'ordre de tracé. Un repère numéroté apparaît sur la feuille, et la barre d'état indique « 3 éléments ajoutés à la liste de réserves. » Les annotations déjà numérotées et les commentaires en lecture seule sont ignorés.

## Renseigner les détails

Dans l'onglet {{ui:Liste de réserves}}, chaque élément affiche son numéro, son objet, son texte, sa feuille et son état, avec trois champs dessous. Les mêmes champs figurent dans {{ui:Propriétés}}, sous « Liste de réserves », lorsque l'annotation est sélectionnée :

- {{ui:Affecté à}} : un nom ou un corps de métier, en texte libre.
- {{ui:Échéance}} : une date, à choisir dans le sélecteur de date.
- {{ui:État de l'élément}} : Ouvert, En cours, Prêt pour revue ou Clos.

Cliquez sur l'en-tête d'un élément pour aller à sa position sur la feuille.

L'état de l'élément est distinct de l'état de revue de l'annotation (Ouvert, Accepté, Rejeté, Terminé). Utilisez l'état de l'élément pour le travail, et l'état de revue pour le commentaire.

## Retirer un élément

Sélectionnez l'annotation et choisissez {{ui:Retirer de la liste de réserves}} dans {{ui:Propriétés}}. L'annotation reste ; seul son numéro disparaît. Tant que le jeu est ouvert, les numéros ne sont pas réutilisés : le prochain élément reçoit le numéro suivant, de sorte qu'un trou indique qu'un élément a été retiré. Lorsqu'un fichier est rouvert, la numérotation reprend après le numéro le plus élevé qu'il contient.

## Exporter la liste

Choisissez {{ui:Exporter en CSV}} dans l'onglet {{ui:Liste de réserves}}. Vous obtenez « <name> punch list.csv », avec les colonnes N°, Feuille, Fichier, Page, Élément, Commentaire, Affecté à, Échéance, État, État de l'annotation, Auteur et Créé le, dans l'ordre des numéros. Ouvrez-le dans n'importe quel tableur.

Les numéros de réserve, affectations, échéances et états d'élément sont aussi enregistrés dans le PDF annoté, et réapparaissent à sa réouverture. Les autres lecteurs PDF affichent le repère numéroté comme partie de l'annotation. L'export BCF de la liste des annotations transporte aussi l'affectation et l'échéance (voir [Notions de base BCF](topic:bcf-basics)).

## Sur chantier avec une tablette

Ouvrez le jeu sur un iPad, faites le tour du chantier, et déposez une {{ui:Note}} ou tracez un {{ui:Nuage}} à chaque problème. Ajoutez-les à la liste de réserves au fur et à mesure, et enregistrez avant de partir. Voir [Revoir sur iPad ou écran tactile](topic:review-on-a-tablet).

Une liste de réserves au format PDF ou tableur mis en forme, ainsi que des photos jointes aux éléments, ne sont pas encore disponibles.
