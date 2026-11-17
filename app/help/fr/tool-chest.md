---
title: Boîte à outils
summary: Enregistrez une annotation stylisée comme outil réutilisable, dessinez avec, et partagez votre boîte avec le bureau sous forme de fichier.
keywords: boîte à outils, outils, jeu d'outils, outils personnalisés, annotations enregistrées, favoris, standard de bureau, importer, exporter, partager, json
from: 7dfa36e0
---

L'onglet {{ui:Outils}} contient votre **boîte à outils** : des annotations enregistrées avec leur apparence, prêtes à être dessinées à nouveau. Un outil conserve le type, la couleur, l'épaisseur de trait, le remplissage, l'opacité, la taille du texte et le sujet de l'annotation, ainsi que le texte d'un tampon, le nom de groupe d'un comptage, ou le texte de départ d'une zone de texte ou d'une légende.

## Les outils de départ

Une boîte neuve en contient six : « Nuage de révision » (rouge), « Nuage de question » (bleu), « Surligneur jaune », « Légende RFI » (bleue, commence par « RFI : »), « Vérification sur site » (une légende orange qui dit « Vérifier sur site. ») et « Approuvé avec remarques » (un tampon).

## Dessiner avec un outil

1. Ouvrez l'onglet {{ui:Outils}}.
2. Cliquez sur un outil. Il apparaît enfoncé, et l'outil correspondant de la barre d'outils s'active.
3. Dessinez comme d'habitude. {{ui:Propriétés}} indique « Dessin avec “<outil>” depuis la boîte à outils. »

Tant qu'un outil de la boîte est actif, les modifications faites dans {{ui:Propriétés}} avant de dessiner s'appliquent à cet outil pour l'instant, sans changer l'outil enregistré ni vos réglages habituels. Choisir un bouton de la barre d'outils, ou appuyer sur la touche d'un outil, revient à l'outil simple.

## Enregistrer vos propres outils

1. Dessinez une annotation et donnez-lui le style voulu : couleur, trait, remplissage, sujet, texte du tampon.
2. Sélectionnez-la.
3. Choisissez {{ui:Enregistrer la sélection comme outil}} dans l'onglet {{ui:Outils}}, ou {{ui:Enregistrer comme outil}} dans {{ui:Propriétés}}.
4. Saisissez un {{ui:Nom de l'outil}} et choisissez {{ui:Enregistrer l'outil}}.

Résultat : l'outil est ajouté à la fin de la boîte, et l'onglet {{ui:Outils}} s'ouvre pour le montrer.

## Tampons créés à partir d'une sélection

Sélectionnez plusieurs annotations (ou le contenu de la page avec l'outil {{ui:Contenu}}) et choisissez {{ui:Enregistrer la sélection comme tampon…}} dans {{ui:Plus}} ou dans le menu contextuel. La boîte reçoit un seul tampon qui les contient toutes (« Tampon : 3 annotations ensemble »). Cliquez dessus, puis cliquez sur n'importe quelle feuille : les annotations arrivent ensemble, centrées à l'endroit du clic, comme de nouvelles annotations à votre nom ; le contenu de la page y est dessiné. Ces tampons sont enregistrés et partagés avec la boîte comme n'importe quel outil.

## Supprimer un outil

Choisissez le × à la fin de la ligne de l'outil, puis {{ui:Supprimer}}. Les annotations déjà dessinées avec lui restent telles quelles.

## Où la boîte est conservée

La boîte est stockée **dans ce navigateur, sur cet ordinateur**. Un autre navigateur ou ordinateur a sa propre boîte (commençant par les six outils de départ), une fenêtre privée l'oublie à sa fermeture, et l'effacement des données de ce site dans les paramètres du navigateur la supprime.

Si le navigateur refuse de la conserver (stockage désactivé ou plein), la barre d'état affiche : « La boîte à outils n'a pas pu être conservée dans ce navigateur (le stockage est désactivé ou plein). Exportez-la pour la conserver. »

:::safari
Safari peut effacer les données enregistrées d'un site lorsque vous ne l'avez pas utilisé depuis un moment. Exportez votre boîte de temps en temps pour pouvoir l'importer à nouveau.
:::

**Exportez votre boîte comme sauvegarde**, surtout après avoir créé des outils dont vous dépendez.

## Partager une boîte avec votre bureau

1. Configurez les outils une fois.
2. Choisissez {{ui:Exporter}}. Vous obtenez « MarkupCraft tool chest.json ».
3. Placez ce fichier là où le bureau conserve ses standards, ou envoyez-le.
4. Chacun choisit ensuite {{ui:Importer}} dans son onglet {{ui:Outils}} et sélectionne le fichier.

Résultat : « 12 outils importés depuis “MarkupCraft tool chest.json”. » Les outils issus de la même boîte remplacent leurs anciennes copies : importer une boîte de bureau mise à jour rafraîchit donc ces outils au lieu de les doubler, et les nouveaux outils sont ajoutés. Une boîte contient jusqu'à 500 outils.

MarkupCraft vérifie chaque valeur d'un fichier importé et ignore celles qu'il ne peut pas utiliser (« 2 ignorés (inutilisables) »). Les fichiers qui ne sont pas une boîte sont refusés : « Ce fichier n'est pas une boîte à outils MarkupCraft. » ou « Ce fichier n'est pas une boîte à outils (ce n'est pas du JSON). »

Les fichiers de boîte à outils provenant d'autres programmes d'annotation ne peuvent pas être importés.
