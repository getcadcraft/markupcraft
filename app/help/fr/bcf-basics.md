---
title: Bases du BCF
summary: Ce que contient un export BCF depuis MarkupCraft, comment l'utiliser avec les outils de coordination BIM, et ses limites.
keywords: bcf, bcfzip, format de collaboration BIM, problèmes, coordination, conflit, sujets, point de vue, instantané, openbim, buildingsmart, exporter les problèmes
from: 446f38c1
---

BCF (BIM Collaboration Format) est un format de fichier ouvert pour transmettre des problèmes entre outils BIM. Beaucoup de logiciels de coordination et de modélisation peuvent importer un fichier `.bcfzip` sous forme de liste de problèmes. MarkupCraft écrit du **BCF 2.1**.

## Créer un fichier

1. Ouvrez l'onglet {{ui:Annotations}}.
2. Filtrez la liste selon ce que vous voulez envoyer, par exemple {{ui:Statut}} « Ouvert ». Seules les annotations listées sont exportées.
3. Choisissez {{ui:BCF}}.
4. Patientez pendant la création d'un instantané de chaque annotation (« Création des instantanés pour BCF (5 sur 20)… »).

Résultat : « <name> markups.bcfzip » se télécharge, et la barre d'état indique le nombre de sujets et la taille du fichier.

## Contenu

Chaque annotation devient un **sujet** :

| Champ du sujet | Rempli avec |
|---|---|
| Titre | Numéro de réserve, sujet et feuille, par exemple « #4 Nuage sur A-101 — Plan d'étage » |
| Type | La nature de l'annotation (Nuage, Détail, Longueur…) |
| Statut | Ouvert, Accepté, Rejeté ou Terminé |
| Étiquettes | La nature de l'annotation et la feuille |
| Auteur et dates | L'auteur de l'annotation, ses dates de création et de modification |
| Assigné à, échéance | Depuis son élément de réserve, lorsqu'il en a un |
| Description | Son texte ou le libellé de son tampon, la valeur mesurée, le commentaire, ainsi que la feuille et le fichier |
| Commentaires | Un par réponse, avec l'auteur et la date |
| Instantané | Une image de l'annotation sur sa partie de la feuille |
| Point de vue | Une vue de dessus de l'emplacement de l'annotation sur la feuille |

Exporter de nouveau la même annotation donne le même identifiant de sujet, afin qu'un outil qui importe le BCF puisse la reconnaître comme le même problème.

## Limites à connaître

- **Une feuille n'est pas un modèle.** Le point de vue désigne la position de l'annotation sur le papier, mesurée en mètres de papier. Il ne permet pas à un outil BIM d'aller à un endroit du modèle. Utilisez l'instantané et le nom de la feuille pour retrouver l'emplacement.
- **Les statuts et les types sont propres à MarkupCraft** (Ouvert, Accepté, Rejeté, Terminé ; Nuage, Détail…). Le fichier les déclare, comme le permet BCF, mais un outil doté de listes fixes peut les associer autrement ou les ignorer.
- **L'import apporte des commentaires, pas des vues de modèle.** {{ui:Importer un BCF}} ajoute des réponses et des statuts aux annotations exportées, et crée des notes pour les autres problèmes ; il ne peut pas afficher de caméra de modèle. Voir [Liste des annotations et export](topic:markups-list-and-export#import-bcf).
- Renvoyer les annotations sous forme de PDF est souvent plus simple pour les revues de plans. Le BCF sert à faire entrer les commentaires de plan dans un flux de coordination de maquette.
