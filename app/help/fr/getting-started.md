---
title: Prise en main de MarkupCraft
summary: Ouvrez un jeu de plans, placez votre premier nuage et votre première légende sur une feuille, et enregistrez une copie annotée.
keywords: démarrer, premiers pas, ouvrir un pdf, revue, annotation, corrections, stylo rouge, jeu de plans, tutoriel, démarrage rapide
from: 0b1aae4e
---

MarkupCraft sert à relire des plans : vous ouvrez des jeux de plans PDF, vous les annotez avec des nuages, des légendes, du texte, des tampons et des mesures, vous suivez le statut de chaque commentaire, et vous enregistrez une copie du PDF que n'importe quelle visionneuse PDF peut afficher.

Il fonctionne dans votre navigateur web. Vos PDF sont ouverts sur votre propre ordinateur et ne sont **jamais téléversés**. Enregistrer télécharge une nouvelle copie ; votre fichier d'origine n'est pas modifié.

:::note
MarkupCraft est en cours de développement. L'aide décrit la version que vous utilisez. Ce qu'il ne fait pas encore est listé dans [Ce qui n'est pas encore développé](topic:not-built-yet).
:::

## Ce qu'il vous faut

- Un Chrome, Edge, Firefox ou Safari récent sur un ordinateur Mac, Windows ou Linux, ou Safari ou Chrome sur un iPad. Voir [Navigateurs et ordinateurs](common:browsers).
- Un ou plusieurs fichiers PDF. Un jeu de plans entier peut tenir dans un seul PDF ou dans plusieurs.
- Une souris à molette est le plus confortable. Un pavé tactile convient, et un écran tactile aussi (voir [Relire sur un iPad ou un écran tactile](topic:review-on-a-tablet)).

## Votre première revue en dix étapes

1. Ouvrez MarkupCraft dans votre navigateur. Le milieu de l'écran affiche « Ouvrir un jeu de plans ».
2. Choisissez {{ui:Ouvrir des PDF}} (ou {{ui:Ouvrir}} à l'extrémité gauche de la barre d'outils, ou appuyez sur {{key:Mod+O}}), choisissez un ou plusieurs PDF, et confirmez.
   Vous pouvez aussi faire glisser des PDF depuis {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} et les déposer sur la zone de la feuille.
   La première fois, la barre d'état en bas affiche « Chargement du lecteur PDF… ». Ensuite chaque page devient une feuille dans la liste {{ui:Feuilles}} à gauche, et la première feuille remplit le milieu.
3. Cliquez une feuille dans la liste pour l'afficher. Tournez la molette de la souris au-dessus de la feuille pour zoomer là où se trouve le pointeur.
4. Choisissez {{ui:Nuage}} dans le groupe {{ui:Réviser}} de la barre d'outils (ou appuyez sur {{key:C}}).
   La première fois que vous choisissez un outil de dessin, MarkupCraft demande votre nom. Saisissez-le et choisissez {{ui:Enregistrer}}. Chaque annotation le consigne. (Plus de détails dans [Définir votre nom d'auteur](topic:set-your-name).)
5. Tracez un cadre autour de la zone à signaler. Un nuage de révision rouge apparaît et est sélectionné.
6. Choisissez {{ui:Détail}} dans le groupe {{ui:Annoter}} (ou appuyez sur {{key:K}}). Appuyez sur ce que vous désignez, faites glisser jusqu'à l'endroit où le texte doit aller, et relâchez.
7. Saisissez votre commentaire dans la zone qui apparaît. Cliquez n'importe où en dehors de la zone (ou appuyez sur {{key:Mod+Enter}}) pour terminer.
8. Appuyez deux fois sur {{key:Esc}} : une fois pour effacer la sélection, une fois pour revenir à l'outil {{ui:Sélectionner}}. Cliquez le nuage. L'onglet {{ui:Propriétés}} à droite montre qui l'a fait, quand, et son {{ui:Statut}}.
9. Choisissez {{ui:Enregistrer}} dans la barre d'outils (ou appuyez sur {{key:Mod+S}}).
   Votre navigateur télécharge une copie nommée par exemple « A-Plans (marked up).pdf ». La barre d'état indique combien d'annotations ont été écrites.
10. Ouvrez cette copie dans n'importe quelle visionneuse PDF pour vérifier : le nuage et la légende y sont, comme des commentaires PDF normaux portant votre nom.

Pour continuer plus tard, ouvrez la copie « (marked up) » dans MarkupCraft. Vos annotations reviennent modifiables, avec leurs statuts, réponses et numéros de réserve.

## En ligne et hors ligne

:::online
Vous êtes en ligne. MarkupCraft charge son lecteur PDF la première fois que vous ouvrez un PDF, et son écrivain PDF la première fois que vous enregistrez. Pour travailler plus tard sans connexion (en visite de chantier, en avion), choisissez dès maintenant {{ui:Enregistrer pour le hors ligne}} dans la barre du haut et attendez « Prêt hors ligne ». La copie comprend le lecteur et l'écrivain PDF, donc ouvrir et enregistrer des PDF fonctionnent ensuite hors ligne. Voir [Travailler hors ligne](common:offline).
:::

:::offline
Vous êtes hors ligne. Si la barre du haut affiche « Prêt hors ligne », MarkupCraft a été enregistré pour un usage hors ligne dans ce navigateur et tout fonctionne : ouvrir, annoter, mesurer, enregistrer. Sinon, utilisez ce qui est déjà chargé dans cet onglet et ne rechargez pas la page avant d'être de nouveau en ligne. Voir [Travailler hors ligne](common:offline).
:::

## Ce que l'application retient, et ce qu'elle ne retient pas

- **Vos annotations vivent dans le PDF que vous enregistrez.** Rien n'est conservé sur un serveur. L'application n'enregistre pas le PDF toute seule, mais garde une copie de récupération dans ce navigateur jusqu'à ce que vous le fassiez. Enregistrez avant de fermer l'onglet ; le navigateur demande d'abord si vous essayez de partir avec des annotations non enregistrées (sauf sur un iPad, voir [Relire sur un iPad ou un écran tactile](topic:review-on-a-tablet)).
- **Votre nom, vos styles d'outils et votre coffre d'outils** restent dans ce navigateur, sur cet ordinateur. Un autre navigateur ou ordinateur repart de zéro, et effacer les données de site du navigateur les supprime. Voir [Ce qui reste dans ce navigateur](topic:browser-storage).
- L'enregistrement dans le cloud et les sessions de revue partagées entre plusieurs personnes ne sont pas encore disponibles.

## Où aller ensuite

- [Visite de l'écran](topic:workspace)
- [Annoter une feuille](topic:mark-up-a-sheet)
- [Étalonner une feuille et mesurer](topic:calibrate-and-measure)
- [Si vous venez d'un autre logiciel d'annotation](topic:coming-from) si vous relisez déjà des plans dans un autre programme.
