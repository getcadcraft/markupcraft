---
title: Tous les types d'annotations
summary: Les dix-sept types d'annotations, leurs touches, leur tracé, leur apparence par défaut et ce qu'ils deviennent dans le PDF enregistré.
keywords: types d'annotations, liste des outils, types d'annotation, nuage, détail, texte, note, tampon, crayon, surligneur, ligne, flèche, rectangle, ellipse, polyligne, polygone, longueur, surface, comptage
from: 29bf32e7
---

## Les outils

| Barre d'outils | Touche | Comment tracer | Apparence par défaut | Dans le PDF enregistré |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Glisser | Rouge, 1.5 pt | Encre |
| {{ui:Highlight}} | {{key:I}} | Glisser | Jaune, 14 pt de large, translucide, teinte ce qui se trouve dessous | Encre (marquée comme trait de surligneur) |
| {{ui:Line}} | {{key:L}} | Glisser, ou cliquer le début et la fin | Rouge, 2 pt | Ligne |
| {{ui:Arrow}} | {{key:A}} | Glisser, ou cliquer le début et la fin | Rouge, 2 pt, pointe fermée à la fin | Ligne avec une pointe de flèche |
| {{ui:Arc}} | {{key:O}} | Cliquer le début, un point de l'arc, puis la fin | Rouge, 2 pt | Polyligne le long de l'arc |
| {{ui:Rectangle}} | {{key:R}} | Glisser une boîte | Rouge, 2 pt, sans remplissage | Carré |
| {{ui:Ellipse}} | {{key:E}} | Glisser une boîte | Rouge, 2 pt, sans remplissage | Cercle |
| {{ui:Polyline}} | {{key:Y}} | Cliquer des points, double-clic pour terminer | Rouge, 2 pt | Polyligne |
| {{ui:Polygon}} | {{key:G}} | Cliquer des points, double-clic pour terminer | Rouge, 2 pt, sans remplissage | Polygone |
| {{ui:Cloud}} | {{key:C}} | Glisser une boîte | Rouge, festons de 1.5 pt | Carré avec bordure en nuage |
| {{ui:Free cloud}} | {{key:Shift+C}} | Cliquer des points, double-clic pour terminer | Rouge, festons de 1.5 pt | Polygone avec bordure en nuage |
| {{ui:Callout}} | {{key:K}} | Appuyer sur le point, glisser jusqu'au texte, saisir | Texte et ligne de repère rouges, 1 pt, texte de 12 pt | Zone de texte avec ligne de repère de détail |
| {{ui:Text}} | {{key:T}} | Cliquer ou glisser une boîte, saisir | Texte rouge de 12 pt, sans bordure | Zone de texte |
| {{ui:Note}} | {{key:N}} | Cliquer, saisir | Icône de note jaune | Note adhésive |
| {{ui:Stamp}} | {{key:S}} | Choisir un tampon, cliquer ou glisser | Majuscules encadrées plus « Par <name>, <date> » ; coloré selon son sens | Tampon |
| {{ui:Length}} | {{key:M}} | Cliquer le début et la fin (nécessite une échelle) | Ligne de cote bleue avec traits et la longueur | Ligne marquée comme cote, avec une mesure |
| {{ui:Angle}} | {{key:X}} | Cliquer l'extrémité d'une branche, le sommet, puis l'extrémité de l'autre branche | Branches bleues, petit arc au sommet et angle en degrés | Polyligne avec l'angle comme texte |
| {{ui:Area}} | {{key:Q}} | Cliquer les angles, double-clic pour terminer (nécessite une échelle) | Contour bleu, remplissage bleu clair, surface et périmètre | Polygone marqué comme surface, avec une mesure |
| {{ui:Count}} | {{key:U}} | Cliquer chaque élément | Points orange numérotés et une étiquette « groupe : n » | Un commentaire à l'encre par groupe, un anneau par élément |

Au tactile, « double-clic pour terminer » est un double appui, et « clic » est un appui qui agit au relâchement (pour les points, notes et comptages).

## Ce que contient chaque annotation

| Champ | Où le voir |
|---|---|
| Author | {{ui:Properties}}, la liste, la seconde ligne du tampon, les autres visionneuses PDF |
| Création et modification | {{ui:Properties}} (dans votre fuseau horaire), la liste, le CSV |
| Statut | Ouvert, Accepté, Rejeté ou Terminé |
| Objet | Un libellé court ; par défaut le type (« Nuage », « Zone de texte », « Mesure de longueur ») |
| Commentaire | Notes plus longues. Pour une note, son texte est son commentaire. |
| Texte | Zones de texte et détails uniquement |
| Réponses | Le fil, avec les changements de statut |
| Réserve | Numéro, personne assignée, échéance, statut, lorsqu'elle est ajoutée à la liste de réserves |
| Style | Couleur, épaisseur du trait, remplissage et opacité du remplissage (formes fermées, texte et détails), opacité, taille du texte (texte, détails et mesures) |

## Commentaires en lecture seule

Les commentaires qui accompagnaient le fichier et que MarkupCraft ne peut pas modifier (surlignages de texte, tampons d'autres logiciels et autres types particuliers) sont listés avec le type « Autre » et le badge de statut « Lecture seule ». Ils conservent exactement l'apparence que leur donne le fichier. Vous pouvez les sélectionner, voir leur auteur, leur objet et leur commentaire, et y répondre.

## Pas encore disponible

Les pièces jointes ne sont pas encore disponibles. Toute annotation peut renvoyer vers une feuille ; voir [Liens entre feuilles](topic:sheet-links). Les images et signatures se placent avec l'outil {{ui:Stamp}} ; voir [Tampons et notes](topic:stamps-and-notes). Voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
