---
title: Statuts et réponses
summary: Marquez chaque commentaire Ouvert, Accepté, Rejeté ou Terminé, discutez-en dans un fil de réponses et transmettez le fil dans le PDF.
keywords: statut, statut de révision, accepté, rejeté, terminé, ouvert, réponse, réponses, fil, commentaire, conversation, discussion, répondre, vérification
from: 0f3e8b91
---

Chaque annotation possède un **statut** et un **fil de réponses**. Ensemble, ils portent un cycle de révision : le réviseur annote, le concepteur répond et définit les statuts, le réviseur vérifie à nouveau.

## Définir un statut

1. Sélectionnez l'annotation (ou plusieurs).
2. Dans {{ui:Propriétés}}, choisissez un {{ui:Statut}} : Ouvert, Accepté, Rejeté ou Terminé.

Résultat : le statut s'affiche sous forme de puce dans la liste {{ui:Annotations}}, et une ligne est ajoutée au fil : « Statut défini sur Accepté par Ana Ruiz. » Lorsque plusieurs annotations sont sélectionnées, la case de statut affiche « Mixte » jusqu'à ce que vous en choisissiez un, puis elle les modifie toutes.

Les nouvelles annotations démarrent en Ouvert. Les annotations collées ou dupliquées démarrent aussi en Ouvert.

## Répondre

1. Sélectionnez l'annotation.
2. Dans {{ui:Propriétés}}, repérez « Réponses » sous les réglages de style.
3. Saisissez dans {{ui:Écrire une réponse}}.
4. Choisissez {{ui:Réponse}}, ou appuyez sur {{key:Mod+Enter}}.

Résultat : la réponse est listée avec votre nom, la date et l'heure, et le titre la compte : « Réponses (3) ». La liste {{ui:Annotations}} affiche un nombre de réponses sur la ligne.

- Les changements de statut sont listés dans le même fil et marqués comme entrées de statut, afin que l'historique se lise dans l'ordre.
- Si vous commencez à écrire une réponse puis cliquez ailleurs, votre brouillon est conservé jusqu'à ce que vous reveniez à cette annotation (jusqu'à la fermeture du jeu).
- Si votre nom n'est pas défini, MarkupCraft le demande avant l'envoi.
- Vous pouvez aussi répondre aux commentaires en lecture seule fournis avec le fichier.

:::note
Une réponse ne peut plus être modifiée ni supprimée une fois envoyée. Juste après l'envoi, {{key:Mod+Z}} la retire ; ensuite, ajoutez une nouvelle réponse qui corrige la précédente.
:::

## Ajouter une photo

Sous la zone de réponse, {{ui:Ajouter une photo}} ajoute une image au fil : un PNG ou un JPEG depuis cet ordinateur, ou, sur une tablette ou un téléphone, une photo prise à ce moment-là. Le texte saisi dans la zone de réponse devient sa légende. Le fil affiche une miniature ; cliquez dessus pour voir la photo en taille réelle. Les grandes photos sont réduites à 1600 pixels sur leur plus grand côté.

Dans le PDF enregistré, chaque photo voyage aussi comme fichier joint à côté de l'annotation (un trombone), afin que les autres lecteurs PDF puissent l'ouvrir.

## Transmettre la révision

Il n'existe pas encore de session partagée en ligne : la révision voyage dans le PDF.

1. Choisissez {{ui:Enregistrer (S)}}. La copie contient chaque annotation avec son statut et ses réponses.
2. Envoyez cette copie comme vous envoyez aujourd'hui vos plans.
3. La personne suivante l'ouvre dans MarkupCraft, répond, définit les statuts et enregistre à nouveau.

Les autres programmes PDF voient les réponses comme des réponses au commentaire, et les statuts comme des états de révision (Accepté, Rejeté, Terminé ; Ouvert n'apparaît comme aucun état). Leurs propres réponses et états de révision reviennent dans MarkupCraft lorsque vous ouvrez le fichier : le statut le plus récent l'emporte.

Si deux personnes annotent des copies séparées en même temps, il n'existe pas de fusion. Vous pouvez ouvrir les deux copies dans un même jeu et copier quelques annotations avec {{key:Mod+C}} et {{key:Mod+V}}, mais une copie collée est une nouvelle annotation : elle porte votre nom, une nouvelle date et le statut Ouvert, et elle se place légèrement décalée. Convenez de qui annote quelles feuilles pour éviter cela.

## Trouver ce qui reste ouvert

Dans l'onglet {{ui:Annotations}}, réglez {{ui:Statut}} sur « Ouvert » pour ne lister que les éléments ouverts, et {{ui:Auteur}} sur un seul réviseur. Voir [La liste des annotations](topic:markups-list-and-export).

Le statut (Ouvert, Accepté, Rejeté, Terminé) concerne le commentaire. Un élément de liste de réserves a son propre statut, distinct, pour le travail sur le terrain ; voir [Établir une liste de réserves](topic:punch-list).
