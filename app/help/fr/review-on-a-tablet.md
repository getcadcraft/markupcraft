---
title: Revoir sur iPad ou écran tactile
summary: Pincez, déplacez et dessinez avec vos doigts ou un stylet, ce qui agit au relâchement, ce qui nécessite un clavier, et comment protéger votre travail sur une tablette.
keywords: ipad, tablette, tactile, écran tactile, pincer, zoom, deux doigts, apple pencil, stylet, doigt, terrain, chantier, surface, gestes, mobile
from: 91eb6438
---

MarkupCraft fonctionne au tactile : sur iPad (Safari ou Chrome), sur un ordinateur portable à écran tactile, ou sur une tablette Windows ou Android avec un navigateur récent. En mode paysage, une tablette affiche la mise en page complète.

## Gestes

| Geste | Ce qu'il fait |
|---|---|
| Un doigt | Dessine avec l'outil courant, ou sélectionne avec {{ui:Sélectionner}} |
| Deux doigts, écartés ou pincés | Zoome autour du point situé entre vos doigts |
| Deux doigts, déplacés ensemble | Fait un panoramique ; vous pouvez zoomer et faire un panoramique en un seul geste |
| Un second doigt pendant le tracé | Annule ce que le premier doigt a commencé et lance le zoom à la place |
| Double tapotement, ou appui prolongé | Termine une polyligne, un polygone, un nuage libre ou une zone |
| Appui prolongé sur un texte, un détail ou une note, avec {{ui:Sélectionner}} | Ouvre son texte pour le modifier |
| Un doigt avec {{ui:Déplacer la vue}} activé | Fait un panoramique |

Sur un écran tactile, les boutons de la barre d'outils, les menus, les onglets et les boutons des boîtes de dialogue sont plus grands, pour être faciles à toucher du doigt.

## Ce qui se passe au relâchement

Pour que le premier doigt d'un pincement ne laisse jamais de marque, certains outils agissent quand vous **relâchez** le doigt, et non au contact :

- {{ui:Compter}} : le point est ajouté au relâchement.
- {{ui:Note}} : la note est placée au relâchement.
- {{ui:Polyligne}}, {{ui:Polygone}}, {{ui:Nuage libre}} et {{ui:Surface}} : chaque point est ajouté au relâchement.
- {{ui:Ligne}}, {{ui:Flèche}}, {{ui:Longueur}} et {{ui:Étalonner}} : lorsque vous tapotez le départ puis la fin, la fin est placée au relâchement.

Si votre doigt glisse plus qu'un peu avant de se relever, ce n'est pas considéré comme un tapotement, et rien n'est ajouté. Tapotez proprement ; pour corriger, utilisez {{ui:Annuler}}.

Les outils que vous faites glisser ({{ui:Crayon}}, {{ui:Surlignage}}, {{ui:Nuage}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Détail}}, {{ui:Texte}}, {{ui:Tampon}}) démarrent dès le contact ; un second doigt les annule.

## Sélectionner avec un doigt

- Tapotez une annotation pour la sélectionner ; faites-la glisser pour la déplacer ; faites glisser une poignée pour la redimensionner. Une fois qu'un doigt a touché la feuille, les annotations et poignées offrent une zone de prise plus grande, et les poignées s'affichent plus grandes.
- Faites glisser sur une zone vide de la feuille pour tracer un cadre de sélection (de gauche à droite : entièrement à l'intérieur ; de droite à gauche : en contact).
- Dans {{ui:Sélectionner}}, un doigt ne fait **pas** de panoramique. Utilisez deux doigts, ou choisissez {{ui:Déplacer la vue}}.

## Ce qui nécessite un clavier

Sans clavier, il n'y a pas de {{key:Shift}}, {{key:Esc}} ni {{key:Enter}}. Voici quoi faire à la place :

| Action au clavier | Sans clavier |
|---|---|
| {{key:Esc}} pour annuler ou revenir à Sélectionner | Tapotez {{ui:Sélectionner}} dans la barre d'outils |
| {{key:Shift}} pour des lignes à 45°, des carrés et des cercles | Tracez avec soin ; ajustez avec les poignées |
| {{key:Shift}}-clic pour ajouter à une sélection | Utilisez un cadre de sélection |
| {{key:Shift}}-clic pour retirer un point de comptage | {{ui:Annuler}} juste après un mauvais tapotement |
| {{key:Mod+Enter}} pour terminer la saisie | Tapotez en dehors de la zone de texte |
| {{key:Enter}} pour terminer une polyligne, ou pour modifier le texte d'une annotation | Appui prolongé, ou {{ui:Modifier sur la feuille}} dans {{ui:Propriétés}} |
| {{key:Delete}} | {{ui:Supprimer}} dans la barre d'outils ou dans {{ui:Propriétés}} |
| Commencer un nouveau groupe de comptage avec {{key:Esc}} | Tapotez une zone vide de la feuille avec {{ui:Sélectionner}}, puis retapez {{ui:Compter}} |

Un clavier à étui ou un clavier Bluetooth rétablit tous les raccourcis ; sur un iPad, la touche ⌘ fonctionne pour {{key:Mod+Z}} et le reste.

Les boutons n'affichent pas leurs info-bulles au tactile. La touche de chaque outil est indiquée dans [Clavier et souris](topic:keyboard).

## Stylet et Apple Pencil

Un stylet (Apple Pencil, Surface Pen et similaires) fonctionne comme une souris : il dessine et sélectionne, et agit dès le contact. Utilisez vos doigts pour le pincement et le panoramique. La pression ne modifie pas l'épaisseur du trait.

## Ouvrir et enregistrer sur iPad

- {{ui:Ouvrir}} affiche le sélecteur Fichiers : iCloud Drive, Sur mon iPad, et toute application de stockage que vous avez connectée.
- {{ui:Enregistrer (S)}} demande un téléchargement ; la copie arrive dans Fichiers, dans Téléchargements (ou dans le dossier défini dans les réglages de Safari).

## Protéger votre travail sur une tablette

:::warning
Safari sur iPad ne vous prévient pas avant de quitter une page comportant un travail non enregistré, et iPadOS peut recharger un onglet en arrière-plan pour libérer de la mémoire. MarkupCraft conserve une copie de récupération dans le navigateur et vous la propose à votre prochaine ouverture (voir [Récupérer votre travail](common:recover)), mais **enregistrez après chaque feuille ou à chaque tour de chantier** : un onglet privé ne conserve aucune copie.
:::

- Votre nom, les réglages des outils et le coffre à outils sont conservés dans ce navigateur sur cet iPad, comme sur un ordinateur. Voir [Ce qui reste dans ce navigateur](topic:browser-storage).
- **Avant une visite de chantier sans réseau :** pendant que vous êtes encore en ligne, ouvrez MarkupCraft dans Safari (ou Chrome) sur l'iPad et choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre en haut. Attendez l'affichage de « Prêt hors ligne » (le compteur indique « Enregistrement de N sur M » ; le lecteur et le générateur de PDF pèsent environ 6 Mo). Sur place, ouvrez la même adresse ou un favori vers elle : l'ouverture, l'annotation et l'enregistrement de PDF fonctionnent sans connexion. Si le message indique « Hors ligne non disponible », vous êtes dans un onglet privé ; utilisez un onglet normal. Voir [Travailler hors ligne](common:offline).
- Safari supprime une copie hors ligne que vous n'avez pas utilisée depuis quelques semaines. Avant un déplacement, cliquez sur « Prêt hors ligne » et choisissez « Enregistrer à nouveau (obtenir la version la plus récente) ».
- Les très gros jeux de plans consomment beaucoup de mémoire. Sur une tablette, ouvrez seulement les feuilles dont vous avez besoin pour la visite.

## Sur téléphone

Cela fonctionne, mais l'écran est petit : les parties s'empilent (barre d'outils, feuille, barre d'état, panneaux, puis liste des feuilles), et la barre d'outils défile latéralement. Utilisez un téléphone pour consulter et ajouter une note rapide, et une tablette ou un ordinateur pour une vraie revue.
