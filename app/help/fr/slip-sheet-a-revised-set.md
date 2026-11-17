---
title: Intercaler un jeu révisé
summary: Ouvrir la nouvelle édition d'un jeu de plans à côté de l'ancienne et reporter chaque annotation ouverte sur la feuille de même numéro.
keywords: intercaler, jeu révisé, nouvelle édition, révision, remplacer, remplacée, reporter, remplacer des feuilles, réédition, additif, bulletin
from: e15163a0
---

Lorsqu'une nouvelle édition des plans arrive, l'intercalation déplace votre révision sur elle : chaque nouvelle feuille reprend les annotations de l'ancienne feuille portant le même numéro, et l'ancienne feuille reçoit le tampon « Remplacée ».

## Intercaler

1. Ouvrez le jeu actuel, avec vos annotations.
2. Choisissez {{ui:Pages}}, puis {{ui:Intercaler un jeu révisé…}}, et sélectionnez les nouveaux PDF. Ils s'ouvrent à côté de l'ancien jeu.
3. La boîte de dialogue liste chaque nouvelle feuille et l'ancienne feuille qu'elle remplace. Décochez une ligne pour laisser les annotations de cette feuille à leur place. Les feuilles portant un nouveau numéro n'ont rien à reporter.
4. Choisissez si vous voulez laisser les annotations clôturées (Accepté, Rejeté, Terminé) sur les anciennes feuilles, et si vous voulez tamponner les anciennes feuilles.
5. Choisissez {{ui:Reporter les annotations}}.

Résultat : les annotations apparaissent sur les nouvelles feuilles au même endroit, avec leurs réponses, leurs statuts et leurs auteurs. Un élément de la liste de réserves passe sur la nouvelle feuille et conserve son numéro. Les anciennes feuilles gardent leurs annotations comme archive, sous le tampon rouge « Remplacée ». La barre d'état résume ce qui a été déplacé.

{{ui:Simplement ouvrir les fichiers}} ouvre le nouveau jeu sans rien reporter, par exemple pour comparer d'abord. Voir [Comparer deux révisions](topic:compare-revisions).

## Comment les feuilles sont associées

- **Par numéro de feuille**, tel que la liste des feuilles l'affiche : un numéro que vous avez saisi avec {{ui:Renommer la feuille}}, l'étiquette de page du PDF, ou le cartouche. La casse, les espaces, les points et les tirets n'ont pas d'importance : « A-101 » correspond à « a101 ».
- Si deux fichiers ouverts comportent une feuille portant ce numéro, la plus récente est remplacée, ce qui vous permet d'intercaler édition après édition.
- **Les jeux numérisés** n'ont pas de numéro à lire. Lorsqu'un nouveau fichier n'en a pas, ses pages sont associées dans l'ordre des pages à un fichier ouvert ayant le même nombre de pages. Vérifiez ces lignes avant de reporter.

## Bon à savoir

- Un seul {{key:Mod+Z}} annule toute l'intercalation : les copies, les tampons et les éléments de la liste de réserves déplacés. Les nouveaux fichiers restent ouverts.
- Si une nouvelle feuille a une autre taille, les annotations sont mises à l'échelle avec la page, et la barre d'état indique combien vérifier.
- L'échelle d'une ancienne feuille est conservée lorsque la nouvelle feuille a la même taille et n'en a pas.
- Les commentaires créés par d'autres programmes restent sur les anciennes feuilles : ils sont en lecture seule ici.
- Enregistrez les nouveaux fichiers pour conserver les annotations reportées. Voir [Enregistrer le PDF annoté](topic:save-the-marked-up-pdf).
