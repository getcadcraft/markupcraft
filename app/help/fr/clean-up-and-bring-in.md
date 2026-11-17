---
title: Nettoyer les traits de stylo, et importer les commentaires de revue et l'avancement du chantier
summary: Transformez les traits de stylo à main levée en lignes, cercles, arcs et rectangles ; importez en notes les commentaires de revue d'un dossier de permis et l'avancement d'un relevé de chantier.
keywords: stylo, main levée, nettoyer, redresser, cercle, ligne, rectangle, arc, permis, commentaires de revue, avancement, drone, numérisation, relevé, notes, csv
from: 547d8e42
---

## Nettoyer les traits de stylo

Dessinez avec {{ui:Crayon}}, puis ouvrez le menu {{ui:Plus}} dans le groupe Modifier et choisissez {{ui:Nettoyer les traits de stylo}}. Chaque trait de stylo sélectionné devient ce qu'il devait être : un trait droit devient une ligne (mise exactement à l'horizontale ou à la verticale lorsqu'il en était proche), un trait rond une ellipse, une partie de cercle un arc, un trait fermé à quatre angles un rectangle, tout le reste une polyligne ou un polygone. Les extrémités libres de traits tracés ensemble sont rapprochées les unes des autres. Sans trait de stylo sélectionné, tous les traits de stylo de la feuille ouverte sont nettoyés. C'est une seule étape d'annulation : Ctrl+Z rétablit le tracé à main levée. La forme est calculée sur votre ordinateur selon des règles fixes ; rien n'est envoyé nulle part.

## Importer des commentaires de revue

Le dossier de permis de BimCraft contient `01-review-comments.csv` : les commentaires qu'un instructeur de dossier est susceptible de formuler, chacun avec la règle, l'article, ce qui est requis, ce qui a été constaté et ce qu'il faut faire. Dans l'onglet {{ui:Tâches}}, ouvrez {{ui:Commentaires de revue du permis}} et choisissez {{ui:Importer des commentaires (CSV)}}. Chaque commentaire devient une note au statut Ouvert dans une colonne le long du bord gauche de la feuille ouverte ; faites-la glisser à l'endroit concerné. Ils sont calculés à partir des contrôles existants, et non par un instructeur.

## Importer des nœuds HAZOP

Le module P&ID de CadCraft dessine les nœuds d'une étude HAZOP et peut les enregistrer sous forme de {{ui:Cadres de nœuds HAZOP}} (un fichier JSON). Ouvrez ici la feuille P&ID imprimée, allez dans l'onglet {{ui:Tâches}}, ouvrez {{ui:Cadres de nœuds HAZOP}} et choisissez {{ui:Importer les cadres de nœuds (JSON)}}. Chaque nœud devient un rectangle au statut Ouvert sur la feuille, avec son numéro, son nom, son équipement et ses lignes dans le texte, et l'équipe rédige ses constats sous forme de réponses. La feuille est prise telle qu'imprimée à taille réelle depuis l'angle inférieur gauche du dessin ; si elle a été imprimée à une autre échelle, saisissez ce nombre dans {{ui:Imprimé à}} d'abord (0.5 pour 1:2). Un nœud situé hors de la page n'est pas dessiné, et le panneau indique combien. Les repères sont une aide à l'étude : ils montrent où sont les nœuds, sans juger l'étude.

## Importer l'avancement du chantier

CivilCraft conserve une ligne pour chaque vol de drone ou numérisation du site. Dans l'onglet {{ui:Tâches}}, ouvrez {{ui:Avancement du chantier}} et choisissez {{ui:Importer l'avancement (JSON)}}. Chaque relevé devient une note sur la feuille ouverte indiquant la part réalisée, ce qui reste à déblayer ou à remblayer, ce qui a été surdéblayé ou surremblayé et ce qui sort du plan. Un relevé avec un élément hors du plan reste au statut Ouvert ; un relevé sans problème passe au statut Accepté.
