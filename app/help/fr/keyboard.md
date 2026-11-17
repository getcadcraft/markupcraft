---
title: Clavier et souris
summary: Chaque touche, action de souris et geste tactile que MarkupCraft reconnaît, regroupés, ainsi que les raccourcis conservés par le navigateur.
keywords: clavier, raccourcis, touches de raccourci, touches, souris, molette, clic droit, bouton du milieu, pavé tactile, tactile, gestes, pincement, panoramique avec espace
from: 7bf207ec
---

Les raccourcis écrits avec {{key:Mod}} acceptent ⌘ ou Ctrl sur Mac, et Ctrl sous Windows et Linux. Les lettres des outils ne fonctionnent que lorsque vous ne saisissez pas de texte dans une zone ; pendant la saisie, ce ne sont que des lettres. Voir aussi [Touches, souris et pavés tactiles](common:keys).

## Outils

| Touche | Outil |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Content}} : les lignes, images et textes propres à la page (voir [Modifier le contenu propre à la page](topic:page-content)) |
| {{key:P}} | {{ui:Pen}} |
| {{key:I}} | {{ui:Highlight}} |
| {{key:L}} | {{ui:Line}} |
| {{key:A}} | {{ui:Arrow}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polyline}} |
| {{key:G}} | {{ui:Polygon}} |
| {{key:C}} | {{ui:Cloud}} (glissez une boîte) |
| {{key:Shift+C}} | {{ui:Free cloud}} |
| {{key:K}} | {{ui:Callout}} |
| {{key:T}} | {{ui:Text}} |
| {{key:N}} | {{ui:Note}} |
| {{key:S}} | {{ui:Stamp}} |
| {{key:M}} | {{ui:Length}} |
| {{key:Q}} | {{ui:Area}} |
| {{key:U}} | {{ui:Count}} |
| {{key:O}} | {{ui:Arc}} |
| {{key:X}} | {{ui:Angle}} |

{{ui:Calibrate}} n'a pas de touche : utilisez son bouton dans la barre d'outils ou le bouton d'échelle de la barre d'état. Les lettres des outils sont ignorées lorsque {{key:Alt}} est maintenue enfoncée.

## Pendant le tracé

| Touche ou action | Effet |
|---|---|
| {{key:Shift}} pendant le tracé | Lignes, flèches, longueurs et côtés de polyligne par pas de 45° ; rectangles, ellipses et nuages en boîte carrés ; crayon et surligneur tracent un seul trait droit |
| Double-clic, {{key:Enter}} ou clic droit | Termine une polyligne, un polygone, un nuage libre ou une surface |
| {{key:Backspace}} | Supprime le dernier point d'une polyligne, d'un polygone, d'un nuage libre ou d'une surface |
| {{key:Esc}} | Annule ce que vous tracez ; sans rien en cours, désélectionne ; sans rien de sélectionné, revient à {{ui:Select}} |
| {{key:Mod+Enter}} | Termine la saisie dans une zone de texte, un détail ou une note (ou clic à l'extérieur) |
| {{key:Esc}} pendant la saisie | Annule le texte en cours de saisie |
| {{key:Shift}}-clic avec {{ui:Count}} | Supprime le point le plus proche du groupe de comptage sélectionné |

## Sélection et modification

| Touche ou action | Effet |
|---|---|
| Clic | Sélectionne une annotation |
| {{key:Shift}}-clic | Ajoute ou retire une annotation de la sélection |
| Glisser de gauche à droite sur une feuille vide | Sélectionne ce qui est entièrement dans la fenêtre |
| Glisser de droite à gauche sur une feuille vide | Sélectionne ce que la fenêtre touche |
| {{key:Mod+A}} | Sélectionne toutes les annotations de cette feuille |
| Glisser une annotation sélectionnée | La déplace ({{key:Shift}} : par pas de 45°) |
| Glisser une poignée | Redimensionne ou remodèle ({{key:Shift}} : garde les proportions, ou 45°) |
| Touches fléchées | Déplace la sélection d'un pixel écran ({{key:Shift}} : dix) |
| Double-clic, ou {{key:Enter}} | Modifie le texte d'une zone de texte, d'un détail ou d'une note ; pour un tampon, ouvre {{ui:Properties}} |
| {{key:Delete}} ou {{key:Backspace}} | Supprime la sélection |
| {{key:Esc}} | Désélectionne tout |
| {{key:Mod+Z}} | Annuler |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Rétablir |

## Couper, copier et coller

Les mêmes commandes se trouvent dans le groupe {{ui:Edit}} de la barre d'outils ({{ui:Copy}}, {{ui:Paste}}) et dans son menu {{ui:More}}, chacune avec sa touche. Chacune constitue une seule étape d'annulation. Voir [Copier, coller et dupliquer](topic:select-and-edit#copy-paste-and-duplicate).

| Touche | Effet |
|---|---|
| {{key:Mod+X}} | Couper : copie la sélection puis la supprime |
| {{key:Mod+C}} | Copie la sélection |
| {{key:Mod+V}} | Coller. Si le pointeur est sur la feuille, la copie est centrée à l'endroit visé ; sinon, elle est placée à côté de l'original. Les paramètres permettent de toujours coller à côté de l'original. |
| {{key:Mod+Shift+V}} | Coller à la même position : au même endroit sur la feuille, sur cette feuille ou sur une autre |
| {{key:Mod+D}} | Duplique la sélection à côté d'elle (le presse-papiers n'est pas modifié) |

## Aide

| Touche | Effet |
|---|---|
| {{key:F1}} | Ouvre ou ferme cette aide (un panneau sur le côté ; la feuille reste utilisable). Également {{ui:Help}} dans la barre du haut. |
| {{key:Esc}} dans l'aide | Ferme l'aide |

:::mac
Sur la plupart des claviers Mac, appuyez sur {{key:F1}} avec **fn** (ou la touche globe), ou utilisez {{ui:Help}}. Voir [Touches, souris et pavés tactiles](common:keys#function-keys-on-a-mac).
:::

## Fichiers et feuilles

| Touche | Effet |
|---|---|
| {{key:Mod+N}} | Nouvelles pages vierges (lorsque le navigateur laisse la page utiliser cette touche ; voir [Commencer avec des pages vierges](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Ouvre des PDF |
| {{key:Mod+P}} | Imprimer (voir [Imprimer et modifier les pages](topic:pages-and-printing)) |
| {{key:Mod+F}} | Recherche du texte dans les dessins (voir [Rechercher du texte](topic:find-text)) |
| {{key:Mod}}+clic sur une annotation liée | Suit son lien vers la feuille ; {{key:Alt+Left}} revient en arrière (voir [Liens entre feuilles](topic:sheet-links)) |
| {{key:Mod+S}} | Enregistre une copie annotée |
| {{key:PageDown}} / {{key:PageUp}} | Feuille suivante / précédente |
| {{key:Enter}} dans {{ui:Search sheets}} | Ouvre la première feuille correspondante |
| {{key:Mod+Enter}} dans {{ui:Write a reply}} | Envoie la réponse |

## Zoom et panoramique

| Touche ou action | Effet |
|---|---|
| Molette de la souris | Zoom avant ou arrière autour du pointeur (la molette ne fait jamais défiler) |
| {{key:Ctrl}} + molette | Zoom plus rapide |
| {{key:Plus}} ou {{key:Minus}} (aussi avec {{key:Mod}}) | Zoom avant ou arrière autour du centre ; {{key:=}} fonctionne comme plus |
| {{key:Mod+0}} | {{ui:Fit page}} |
| {{key:Mod+9}} | {{ui:Fit width}} |
| Glisser avec le bouton du milieu | Panoramique |
| Glisser avec le bouton droit | Panoramique (sauf au milieu d'une polyligne) |
| Maintenir {{key:Space}} et glisser | Panoramique |
| Touches fléchées sans sélection | Panoramique |
| {{key:Ctrl+Shift+F}} | Mode d'écran : normal, plein écran, plein écran avec barres masquées (touche Ctrl sur tous les ordinateurs) |

:::mac
**Sur un pavé tactile :** le défilement à deux doigts zoome. Le pincement zoome aussi dans Chrome, Edge et Firefox. Faites un panoramique en maintenant {{key:Space}} enfoncée pendant que vous glissez, ou avec l'outil {{ui:Pan}}. Un clic à deux doigts équivaut à un clic droit et termine une polyligne. Ctrl+clic peut ici agir comme un simple clic plutôt que comme un clic droit ; utilisez donc un clic à deux doigts.
:::

:::touch
## Tactile

| Geste | Effet |
|---|---|
| Un doigt | Trace avec l'outil courant, ou sélectionne |
| Deux doigts | Pincer pour zoomer autour de leur milieu, déplacer pour faire un panoramique |
| Second doigt pendant un tracé | Annule le tracé et zoome à la place |
| Double appui | Termine une polyligne, un polygone, un nuage libre ou une surface |

Les points de comptage, les notes, les points de polyligne et le second point d'un outil à deux points sont placés lorsque le doigt se lève. Voir [Réviser sur un iPad ou un écran tactile](topic:review-on-a-tablet).
:::

## Raccourcis conservés par le navigateur

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} et {{key:Mod+Q}} appartiennent au navigateur. Fermer l'onglet ou la fenêtre avec des annotations non enregistrées les fait perdre, après la question « Quitter le site ? » du navigateur sur ordinateur.
- La plupart des navigateurs réservent {{key:Mod+N}} à une nouvelle fenêtre ; dans un onglet de navigateur, utilisez donc {{ui:New}} dans la barre d'outils ; l'application de bureau et Studio transmettent la touche à MarkupCraft.
- MarkupCraft prend au navigateur {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} et {{key:Mod+Minus}} tant que l'application a le clavier, et {{key:Mod+C}} et {{key:Mod+X}} lorsque des annotations sont sélectionnées. {{key:Mod+,}} ouvre {{ui:Settings}}. Pour zoomer sur toute la page du navigateur, utilisez le menu du navigateur.
- Dans certains navigateurs, {{key:Mod+9}} fait sauter au dernier onglet avant que MarkupCraft ne reçoive la touche. Si cela arrive, utilisez {{ui:Fit width}} sous la feuille.
- {{key:Esc}} en plein écran quitte aussi le plein écran.

## Quand une touche ne fait rien

- **Vous saisissez du texte dans une zone.** Cliquez d'abord sur la feuille. (Un clic avec un outil de tracé trace ; appuyez ensuite sur {{key:Esc}} ou utilisez {{key:Mod+Z}}.)
- **Une boîte de dialogue est ouverte.** Les touches vont à la boîte de dialogue jusqu'à sa fermeture.
- **Vous venez de cliquer sur un bouton de la barre d'outils** : les touches fléchées ou {{key:Space}} agissent alors sur ce bouton. Placez le pointeur sur la feuille et utilisez la molette ou le bouton du milieu, ou appuyez sur une lettre d'outil au lieu de cliquer sur les boutons.

## Où se trouve Déplacer

Il n'existe pas de commande Déplacer : sélectionnez une annotation et faites-la glisser ({{key:Shift}} conserve les pas de 45°). Une épingle se déplace avec {{ui:Move pin}}, et une page avec {{ui:Move page earlier}} ou {{ui:Move page later}}.
