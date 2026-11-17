---
title: Ouvrir un jeu de plans et passer d'une feuille à l'autre
summary: Ouvrez un PDF ou plusieurs, ou commencez par des pages vierges, trouvez des feuilles par numéro ou par nom, réglez le zoom et le panoramique, et renommez une feuille lorsque le fichier la nomme mal.
keywords: ouvrir, nouveau, page vierge, feuille vierge, croquis, grille, sans titre, jeu de plans, feuilles, pages, miniatures, étiquettes de page, numéro de feuille, cartouche, renommer, naviguer, zoom, panoramique, ajuster, chercher des feuilles
from: 1e7f4d50
---

## Ouvrir le jeu

1. Choisissez {{ui:Ouvrir}} dans la barre d'outils, ou appuyez sur {{key:Mod+O}}.
2. Dans le sélecteur de fichiers, sélectionnez tous les PDF du jeu ({{pick:mac=maintenez ⌘ et cliquez sur chaque fichier|windows linux=maintenez Ctrl et cliquez sur chaque fichier}}, ou sélectionnez une plage avec Maj), puis confirmez.
   Vous pouvez aussi faire glisser les fichiers depuis {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} vers la zone de la feuille. « Déposez les PDF pour les ouvrir » apparaît pendant le glissement.
3. Patientez pendant que la barre d'état affiche « Ouverture de <file>… ». Pour les gros fichiers, elle compte : « (10 sur 60 feuilles) ».

Résultat : la liste {{ui:Feuilles}} affiche chaque page de chaque fichier, dans l'ordre où vous les avez ouverts, et la barre d'état indique quelque chose comme « 3 fichiers ouverts (42 feuilles dans le jeu). » Si les fichiers contenaient déjà des commentaires, elle indique combien ont été lus.

Pour ajouter d'autres fichiers au jeu plus tard, ouvrez-les de la même façon. Ils sont ajoutés à la fin de la liste.

## Commencer par des pages vierges

Pour esquisser ou prendre des notes sans dessin, créez des pages vierges au lieu d'ouvrir un PDF :

1. Choisissez {{ui:Nouvelle}} dans la barre d'outils, ou {{ui:Commencer par une page vierge}} sur l'écran d'accueil, ou appuyez sur {{key:Mod+N}} lorsque votre navigateur le permet (l'application de bureau et Studio le font toujours).
2. Choisissez le {{ui:Format du papier}} : Letter, Tabloid ou ANSI B, ARCH D, ARCH E, A4, A3 ou A1, puis {{ui:Portrait}} ou {{ui:Aménagement paysager}}.
3. Choisissez une {{ui:Grille}} : {{ui:Aucun}}, {{ui:Points}} ou {{ui:Carreaux}}. Sur papier en in, la grille a un pas de 1/4 in, avec un trait plus épais à chaque in ; sur papier métrique, elle a un pas de 5 mm, avec un trait plus épais tous les 10 mm. Elle est imprimée sur la page.
4. Saisissez le nombre de {{ui:Pages}} souhaité, de 1 à 20, puis choisissez {{ui:Créer}}.

Résultat : un nouveau PDF nommé « Untitled-1.pdf » (puis « Untitled-2.pdf », et ainsi de suite) s'ouvre comme n'importe quel autre fichier, créé ici sur cet ordinateur. Tous les outils fonctionnent dessus, et {{ui:Enregistrer (S)}} télécharge « Untitled-1 (marked up).pdf ». MarkupCraft retient vos choix pour la prochaine fois.

Les pages n'ont pas d'échelle : la barre d'état affiche « Non étalonné ». La grille n'est pas une échelle. Pour mesurer, étalonnez la feuille ou choisissez d'abord une échelle ; voir [Étalonner et mesurer](topic:calibrate-and-measure).

Pour ajouter une page à un jeu vierge, ouvrez l'une de ses feuilles et choisissez {{ui:Ajouter une page vierge}} sous la liste {{ui:Feuilles}}. La nouvelle page a le même papier et la même grille, et se place à la fin. Comme toute modification de page, elle ne peut pas être annulée ; voir [Imprimer et modifier les pages](topic:pages-and-printing).

## Comment les feuilles reçoivent leur nom

MarkupCraft nomme chaque feuille « <numéro de feuille> — <titre> », par exemple « A-101 — Plan du rez-de-chaussée », à partir du premier de ces éléments trouvé :

1. Un nom que vous avez saisi avec {{ui:Renommer la feuille}} (ci-dessous).
2. Les étiquettes de page du PDF lui-même, lorsque la personne qui a créé le PDF les a définies (par exemple « A-101 »).
3. Le cartouche : MarkupCraft lit le texte de la page et cherche quelque chose qui ressemble à un numéro de feuille (A-101, A1.01, M-201A, KA1-1), en privilégiant le coin inférieur droit, la bande de droite et la bande du bas, et prend le texte le plus grand à proximité comme titre.
4. Sinon, le nom du fichier et la page : « Plans — page 3 ».

Pour voir laquelle a été utilisée, appuyez sur {{key:Esc}} jusqu'à ce que rien ne soit sélectionné et que {{ui:Sélectionner}} soit activé, puis regardez {{ui:Propriétés}} : « Lu à partir de » indique « L'étiquette de page », « Le cartouche », « Le nom du fichier » ou « Saisi à la main ».

:::note
Les feuilles numérisées, ainsi que les PDF dont le lettrage a été exporté en traits, ne contiennent pas de texte à lire. Elles sont nommées par fichier et page tant que vous ne les renommez pas. MarkupCraft ne peut pas encore lire le texte des images.
:::

## Passer d'une feuille à l'autre

- Cliquez sur une feuille dans {{ui:Feuilles}}.
- Appuyez sur {{key:PageDown}} pour la feuille suivante et {{key:PageUp}} pour la précédente, ou utilisez les flèches de la barre sous la feuille.
- Saisissez dans {{ui:Chercher des feuilles}} : une partie d'un numéro (« A-2 »), un mot du titre (« toiture ») ou un nom de fichier. La liste se réduit à mesure que vous tapez (« 4 sur 42 »). Appuyez sur {{key:Enter}} pour ouvrir la première correspondance. Effacez la zone pour revoir toutes les feuilles.

Chaque feuille conserve son propre zoom et sa position jusqu'à la fermeture du jeu.

## Zoom et panoramique

:::mouse
- **Zoom :** faites tourner la molette au-dessus de la feuille. Le zoom se fait autour du pointeur. Vous pouvez aussi appuyer sur {{key:Plus}} et {{key:Minus}} (également avec {{key:Mod}}), ou utiliser les boutons de zoom. Saisissez un pourcentage exact dans la zone de zoom.
- **Ajuster :** {{ui:Page entière}} ({{key:Mod+0}}) affiche toute la feuille ; {{ui:Largeur}} ({{key:Mod+9}}) remplit la largeur.
- **Panoramique :** faites glisser avec le bouton du milieu (la molette), ou avec le bouton droit, ou maintenez {{key:Space}} et faites glisser, ou choisissez {{ui:Déplacer la vue}} ({{key:H}}) puis faites glisser. Sans sélection, les touches fléchées déplacent aussi la feuille.
:::

:::mac mouse
Sur le pavé tactile d'un Mac, le défilement à deux doigts zoome (il ne fait pas défiler la feuille). Pour faire un panoramique, maintenez {{key:Space}} et faites glisser avec un doigt, ou passez à {{ui:Déplacer la vue}} avec {{key:H}}. Un pincement zoome dans Chrome, Edge et Firefox.
:::

:::touch
- **Zoom et panoramique :** posez deux doigts sur la feuille. Écartez-les ou pincez-les pour zoomer autour du point situé entre eux, et déplacez-les ensemble pour faire un panoramique. Les deux se font en même temps.
- **Panoramique à un doigt :** choisissez d'abord {{ui:Déplacer la vue}}. Avec tout autre outil, un doigt dessine ou sélectionne.
- {{ui:Page entière}} et {{ui:Largeur}} se trouvent dans la barre sous la feuille.
:::

Vous pouvez dézoomer bien au-delà de la feuille entière, et zoomer jusqu'à 6400 %. La feuille est redessinée nette un instant après que vous avez arrêté de bouger.

## Signets

{{ui:Signets}}, en haut du panneau {{ui:Feuilles}}, affiche les signets (plan du document) du PDF auquel appartient la feuille ouverte. Choisissez-en un pour aller à sa page. Le crayon renomme un signet et la croix le supprime. {{ui:Créer à partir des feuilles}} crée un signet par feuille, nommé comme les feuilles sont affichées dans la liste (numéro et titre), et {{ui:Ajouter pour cette feuille}} en ajoute un pour la feuille affichée. Les modifications font partie du travail non enregistré du fichier : {{ui:Enregistrer (S)}} les écrit dans la copie, où tous les lecteurs PDF les affichent.

## Faire pivoter la vue

Les deux boutons de rotation à droite de la barre sous la feuille font pivoter la vue d'un quart de tour dans un sens ou dans l'autre, pour une feuille dessinée de travers. Seule la vue pivote : le PDF et ses annotations restent tels quels, et la feuille suivante s'ouvre comme son PDF l'impose (chaque feuille garde sa propre rotation tant que le jeu est ouvert). Le texte ajouté sur une vue pivotée s'affiche droit tel que vous le voyez. Pour faire pivoter la page elle-même dans le PDF enregistré, utilisez {{ui:Pages}}, puis {{ui:Pivoter la page dans le sens horaire}} ; voir [Imprimer et modifier les pages](topic:pages-and-printing).

## Renommer une feuille

Lorsque le nom d'une feuille est faux ou absent :

1. Affichez la feuille.
2. Appuyez sur {{key:Esc}} jusqu'à ce que rien ne soit sélectionné et que l'outil {{ui:Sélectionner}} soit actif. {{ui:Propriétés}} affiche maintenant la feuille.
3. Choisissez {{ui:Renommer la feuille}}.
4. Saisissez le {{ui:Numéro de feuille}} et le {{ui:Titre}}, puis choisissez {{ui:Enregistrer (S)}}.

Résultat : la liste des feuilles, la barre sous la feuille et la liste des annotations utilisent tous le nouveau nom, et « Lu à partir de » indique « Saisi à la main ». Le renommage peut être annulé avec {{key:Mod+Z}}.

Pour revenir à ce qu'indique le fichier, rouvrez {{ui:Renommer la feuille}}, effacez les deux zones et choisissez {{ui:Enregistrer (S)}}.

À l'enregistrement, un numéro de feuille saisi devient l'étiquette de la page dans le PDF, afin que les autres lecteurs PDF affichent « A-101 » dans leur case de page également. Si vous donnez un numéro à une page d'un fichier, chaque page de ce fichier reçoit une étiquette dans la copie (son numéro saisi, sinon son ancienne étiquette, sinon son numéro de page). Un titre saisi est conservé pour MarkupCraft, mais les autres lecteurs ne l'affichent pas.

## Envoyer le PDF à TakeoffCraft, ou le ramener ici

Lorsque TakeoffCraft est ouvert au même endroit (le labo, Try ou les applications en ligne), la barre sous la feuille affiche {{ui:Ouvrir dans TakeoffCraft}}. Cela ouvre le PDF de la feuille dans TakeoffCraft, dans un nouvel onglet, tel qu'il a été ouvert ici, afin que vous puissiez mesurer des quantités dessus. Vos annotations restent ici ; enregistrez-les comme d'habitude.

Le bouton {{ui:MarkupCraft}} de TakeoffCraft fait l'inverse : le PDF s'ouvre ici comme si vous aviez choisi {{ui:Ouvrir}}. Si le navigateur bloque le nouvel onglet, autorisez les fenêtres surgissantes pour ce site, puis choisissez à nouveau le bouton.
