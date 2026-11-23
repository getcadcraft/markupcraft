---
title: Bases du BCF
summary: Ce que contient un export BCF de MarkupCraft, comment l'utiliser avec les outils de coordination BIM, et ses limites.
keywords: bcf, bcfzip, format de collaboration BIM, problèmes, coordination, conflit, sujets, point de vue, capture, openbim, buildingsmart, exporter les problèmes
from: 0de26175
---

BCF (BIM Collaboration Format) est un format de fichier ouvert pour transmettre des problèmes entre outils BIM. De nombreux logiciels de coordination de maquettes et de modélisation peuvent importer un fichier `.bcfzip` sous forme de liste de problèmes. MarkupCraft écrit du **BCF 2.1**.

## Créer un fichier

1. Ouvrez l'onglet {{ui:Annotations}}.
2. Filtrez la liste sur ce que vous voulez envoyer, par exemple {{ui:Statut}} « Ouvert ». Seules les annotations listées sont exportées.
3. Choisissez {{ui:BCF}}.
4. Patientez pendant la création d'une capture de chaque annotation (« Création des captures pour BCF (5 sur 20)… »).

Résultat : « <name> markups.bcfzip » se télécharge, et la barre d'état indique le nombre de sujets qu'il contient ainsi que la taille du fichier.

## Contenu du fichier

Chaque annotation devient un **sujet** :

| Champ du sujet | Rempli avec |
|---|---|
| Titre | Numéro de repère, objet et feuille, par exemple « #4 Nuage sur A-101 — Plan d'étage » |
| Type | Le genre d'annotation (Nuage, Légende, Longueur…) |
| Statut | Ouvert, Accepté, Rejeté ou Terminé |
| Étiquettes | Le genre d'annotation et la feuille |
| Auteur et dates | L'auteur de l'annotation, les dates de création et de modification |
| Confiée à, échéance | Depuis son élément de la liste de réserves, lorsqu'il en a un |
| Description | Son texte ou le libellé de son tampon, la valeur mesurée, le commentaire, ainsi que la feuille et le fichier |
| Commentaires | Un par réponse, avec l'auteur et la date |
| Capture | Une image de l'annotation sur sa partie de la feuille |
| Point de vue | Une vue de dessus de l'emplacement de l'annotation sur la feuille |

Réexporter la même annotation donne le même identifiant de sujet, de sorte qu'un outil qui importe le BCF peut la reconnaître comme le même problème.

## Ce qui revient à l'import

{{ui:Importer un BCF}} lit les fichiers BCF 2.0, 2.1 et 3.0 (vérifié sur les 19 fichiers de test officiels buildingSMART 3.0 : chaque sujet a été lu, ainsi que les commentaires des trois qui contiennent du texte). Pour un sujet qui est l'un des vôtres (même identifiant de sujet), il ajoute les nouveaux commentaires comme réponses et reprend le nouveau statut. Tout autre sujet devient une note sur la feuille que désignent son étiquette ou le nom de son fichier, sinon sur la feuille ouverte, avec son titre, sa description, son assigné et son échéance comme texte de la note, et ses commentaires comme réponses.

| Dans le sujet BCF | Dans MarkupCraft |
|---|---|
| Titre, description, assigné, échéance | Le texte de la note |
| Commentaires avec texte | Réponses |
| Statut Open, Accepted, Rejected, Completed (Closed, Resolved, Done comptent comme Completed) | Le statut de l'annotation |
| Auteur et date de création | L'auteur et la date de la note |
| Position de la caméra | Un emplacement sur la feuille, seulement pour un sujet rattaché à une feuille par son étiquette ou le nom de son fichier |
| Sélection de modèle, parties masquées, plans de coupe, captures | Non conservés : une feuille n'a pas de modèle où les afficher |

## Limites à connaître

- **Une feuille n'est pas une maquette.** Le point de vue indique la position de l'annotation sur le papier, mesurée en mètres de papier. Il ne permet pas d'amener un outil BIM à un endroit de la maquette. Utilisez la capture et le nom de la feuille pour retrouver l'emplacement.
- **Les statuts et les types sont ceux de MarkupCraft** (Ouvert, Accepté, Rejeté, Terminé ; Nuage, Légende…). Le fichier les déclare, comme le permet BCF, mais un outil qui a ses propres listes fixes peut les associer autrement ou les ignorer.
- **L'import apporte des commentaires, pas des vues de maquette.** {{ui:Importer un BCF}} ajoute des réponses et des statuts aux annotations que vous avez exportées, et crée des notes pour les autres problèmes ; il ne peut pas afficher une caméra de modèle. Voir [Liste des annotations et export](topic:markups-list-and-export#import-bcf).
- Renvoyer les annotations en PDF est souvent plus simple pour la révision de plans. BCF sert à faire entrer les commentaires de plan dans un flux de coordination de maquette.
