---
title: Travailler avec plusieurs fichiers à la fois
summary: Ouvrir plusieurs PDF comme un seul jeu, trouver des feuilles dans tous les fichiers, copier des annotations de l'un à l'autre et enregistrer la copie de chaque fichier.
keywords: plusieurs fichiers, plusieurs pdf, jeu de plans, jeu, lot, nombreux fichiers, combiner, disciplines, architectural structure mécanique, tout enregistrer, fermer
from: f59354ae
---

Un jeu de plans arrive souvent sous forme d'un PDF par discipline, ou d'un PDF par feuille. MarkupCraft traite tout ce que vous ouvrez comme **un seul jeu**.

## Les ouvrir ensemble

Sélectionnez tous les PDF dans le sélecteur de fichiers d'un coup, ou déposez-les tous dans la zone des feuilles. Pour en ajouter plus tard, ouvrez-les de la même façon ; ils s'ajoutent à la fin de la liste {{ui:Feuilles}}, dans l'ordre où vous les ouvrez.

Résultat : « 6 fichiers ouverts (84 feuilles dans le jeu). » Chaque page est une feuille. Les feuilles qui ont un numéro affichent « Feuille A-101 » sous leur nom ; les autres affichent le fichier et la page.

Il n'existe pas de fichier de « jeu » enregistré : la prochaine fois, rouvrez les mêmes PDF (les copies « (marked up) », si vous les avez enregistrées).

## Sur tout le jeu

- **Trouver une feuille :** {{ui:Chercher des feuilles}} cherche dans les numéros de feuille, les noms de feuille et les noms de fichier de chaque fichier. {{key:PageUp}} et {{key:PageDown}} parcourent toutes les feuilles de tous les fichiers, dans l'ordre.
- **Liste des annotations :** l'onglet {{ui:Annotations}} liste les annotations de tous les fichiers. Filtrez par {{ui:Feuille}} pour la réduire. Le CSV contient une colonne Fichier.
- **Liste de réserves :** une seule numérotation pour tout le jeu.
- **Comparaison :** l'ancienne et la nouvelle feuille peuvent provenir de fichiers différents.
- **Copier et coller :** {{key:Mod+C}} sur une feuille et {{key:Mod+V}} sur une autre, dans n'importe quel fichier. La copie se place au même endroit sur la page, légèrement décalée.

## Enregistrer

Choisissez {{ui:Enregistrer (S)}}. Avec plusieurs fichiers ouverts, MarkupCraft demande :

- {{ui:Ce fichier}} : une copie annotée du fichier de la feuille affichée.
- {{ui:Chaque fichier modifié}} : une copie de chaque fichier ayant des modifications non enregistrées. Chacune est téléchargée séparément, sous le nom « <nom du fichier> (marked up).pdf ».
- {{ui:Annuler}}

:::chromium
La première fois que vous enregistrez plusieurs fichiers à la fois, Chrome et Edge peuvent demander si ce site peut télécharger plusieurs fichiers. Choisissez {{ui:Autoriser}} ; sinon, seule la première copie arrive.
:::

:::safari
Safari peut demander une fois pour chaque fichier. Sur iPad, chaque copie va dans l'app Fichiers.
:::

Un fichier dont les annotations ont été enregistrées n'est plus considéré comme modifié ; les autres le restent.

Les exports CSV, BCF et de la liste de réserves portent le nom du **premier** fichier que vous avez ouvert.

## Fermer

{{ui:Fermer}} ferme tout le jeu ; il n'est pas encore possible de fermer un seul fichier. Si certaines modifications ne sont pas enregistrées, MarkupCraft demande :

- {{ui:Annuler}} : rien ne se passe.
- {{ui:Fermer sans enregistrer}} : les annotations non enregistrées sont perdues.
- {{ui:Enregistrer d'abord des copies}} : enregistre chaque fichier modifié, puis ferme.

Fermer efface aussi l'historique d'annulation.

## Grands jeux

- Le texte de chaque page est lu à l'ouverture pour trouver les numéros de feuille ; un jeu de 100 feuilles prend donc un certain temps. La barre d'état compte les feuilles au fur et à mesure.
- Les images des feuilles dans la liste sont dessinées au fur et à mesure que vous défilez.
- Chaque PDF ouvert est conservé dans la mémoire de l'onglet du navigateur. Si l'onglet ralentit, fermez les autres onglets lourds, ou examinez une discipline à la fois.
- Ouvrir deux fois le même fichier crée deux copies de ses feuilles. Si cela arrive, choisissez {{ui:Fermer}} et rouvrez le jeu.
