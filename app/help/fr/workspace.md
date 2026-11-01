---
title: Visite de l'écran
summary: La barre d'outils, la liste des feuilles, la zone de la feuille, les cinq panneaux à droite et la barre d'état, sous leur nom à l'écran.
keywords: écran, disposition, barre d'outils, panneaux, barre latérale, miniatures, propriétés, barre d'état, interface, plein écran, thème, mode sombre
from: 18d82de6
---

MarkupCraft occupe la fenêtre du navigateur. De haut en bas et de gauche à droite :

## La barre tout en haut

La fine barre au-dessus de tout appartient à la famille CadCraft, pas à MarkupCraft lui-même. Elle comprend :

- le nom de l'application et la version que vous utilisez,
- {{ui:À propos de MarkupCraft}}, qui ouvre la page de l'application sur le site web,
- {{ui:Aide}}, qui ouvre cette aide dans un panneau latéral (ou appuyez sur {{key:F1}}),
- {{ui:Enregistrer pour le hors ligne}}, qui conserve MarkupCraft, son lecteur et son écrivain PDF, et cette aide dans ce navigateur pour qu'il s'ouvre sans connexion ; il affiche alors « Prêt hors ligne » (voir [Travailler hors ligne](common:offline)),
- le bouton de mode d'écran ({{ui:Plein écran}}),
- {{ui:Paramètres}} (ou {{key:Mod+,}}), avec un onglet {{ui:MarkupCraft}} pour les paramètres propres à cette application et {{ui:Général}} pour ceux que partagent toutes les applications CadCraft (voir [Paramètres de MarkupCraft](topic:settings)), et
- {{ui:Papier}} et {{ui:Objet}}, les thèmes clair et sombre. Dans {{ui:Objet}}, les feuilles sont dessinées en clair sur fond sombre ; vos annotations gardent leurs propres couleurs.

Le bouton de mode d'écran, ou {{key:Ctrl+Shift+F}}, fait défiler trois modes : normal, plein écran, et plein écran avec les barres masquées. Quand les barres sont masquées, amenez le pointeur au bord supérieur de l'écran (ou touchez-le) et elles reviennent en glissant. Ce raccourci utilise la touche Ctrl sur tous les ordinateurs, Mac compris.

:::note
En plein écran, {{key:Esc}} fait aussi quitter le plein écran au navigateur. Si vous vouliez seulement annuler un tracé, appuyez de nouveau sur {{key:Ctrl+Shift+F}} pour revenir en plein écran.
:::

## La barre d'outils

Sous la barre du haut, les outils sont groupés et étiquetés :

| Groupe | Boutons |
|---|---|
| Fichier | {{ui:Ouvrir}}, {{ui:Enregistrer}}, {{ui:Fermer}} |
| Sélectionner | {{ui:Sélectionner}}, {{ui:Déplacer la vue}} |
| Dessiner | {{ui:Crayon}}, {{ui:Surlignage}}, {{ui:Ligne}}, {{ui:Flèche}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Polyligne}}, {{ui:Polygone}} |
| Réviser | {{ui:Nuage}}, {{ui:Nuage libre}} |
| Annoter | {{ui:Détail}}, {{ui:Texte}}, {{ui:Note}}, {{ui:Tampon}} |
| Mesurer | {{ui:Étalonner}}, {{ui:Longueur}}, {{ui:Surface}}, {{ui:Compter}} |
| Édition | {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}}, et {{ui:Plus}} : {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller à la même position}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}}, {{ui:Désélectionner tout}} |

L'outil que vous utilisez paraît enfoncé. Maintenez le pointeur sur un bouton pour voir sa touche (par exemple « Rectangle (R) ») ; le menu {{ui:Plus}} liste la touche de chaque commande à côté d'elle. Les boutons qui ne peuvent pas agir pour l'instant sont atténués : {{ui:Copier}} tant que vous n'avez pas sélectionné d'annotation, {{ui:Coller}} tant que rien n'est copié. Un petit point après {{ui:Enregistrer}} signifie que certaines annotations ne sont pas encore enregistrées. La liste complète des touches est dans [Clavier et souris](topic:keyboard).

Un outil reste actif après avoir dessiné avec lui, ce qui permet de dessiner plusieurs nuages à la suite. Appuyez sur {{key:Esc}} (deux fois si la nouvelle annotation est encore sélectionnée) ou sur {{key:V}} pour revenir à {{ui:Sélectionner}}.

## La liste des feuilles (à gauche)

{{ui:Feuilles}} liste chaque page de chaque PDF ouvert. Chaque ligne montre une petite image de la feuille, son nom, son numéro de feuille ou son fichier et sa page, et le nombre d'annotations qu'elle porte. Le nombre après le titre est le nombre de feuilles.

- Cliquez une ligne pour afficher cette feuille.
- Saisissez dans {{ui:Chercher des feuilles}} pour filtrer par nom de feuille, numéro de feuille ou nom de fichier. Appuyez sur {{key:Enter}} pour ouvrir la première correspondance.

Les noms de feuilles viennent du PDF quand il en contient. Voir [Ouvrir un jeu de plans et passer d'une feuille à l'autre](topic:open-a-plan-set).

## La zone de la feuille (au milieu)

La feuille sur laquelle vous travaillez. Tant que rien n'est ouvert, elle affiche « Ouvrir un jeu de plans » avec un bouton {{ui:Ouvrir des PDF}}. Déposez des PDF n'importe où ici pour les ouvrir.

Sous la feuille, une barre étroite comprend :

- les flèches de feuille précédente et suivante, et « 3 sur 12 : A-101 — Plan d'étage » (maintenez le pointeur dessus pour voir le fichier et la page),
- zoom arrière, la zone de zoom (saisissez un pourcentage et appuyez sur {{key:Enter}} ; 100 % est la taille réelle sur un écran typique), zoom avant,
- {{ui:Page entière}} et {{ui:Largeur}}.

Chaque feuille retient son propre zoom tant que le jeu est ouvert.

Quand vous comparez deux feuilles, une légende apparaît ici : « Seulement sur l'ancienne feuille », « Seulement sur la nouvelle feuille » et « Sur les deux ». Voir [Comparer deux révisions](topic:compare-revisions).

## Les panneaux (à droite)

Cinq onglets :

| Onglet | Ce qu'il montre |
|---|---|
| {{ui:Propriétés}} | L'annotation sélectionnée : auteur, dates, valeurs mesurées, statut, objet, texte, commentaire, style, ses réponses et son poste de réserve. Avec un outil de dessin actif et rien de sélectionné, les réglages que les nouvelles annotations utiliseront. Avec rien de sélectionné et {{ui:Sélectionner}} actif, la feuille : numéro, titre, d'où le nom a été lu, format de papier, échelle, et {{ui:Renommer la feuille}}. |
| {{ui:Annotations}} | Toutes les annotations du jeu ouvert, avec des filtres, et les exports {{ui:CSV}} et {{ui:BCF}}. Voir [La liste des annotations](topic:markups-list-and-export). |
| {{ui:Liste de réserves}} | Des postes de réserve numérotés avec responsable, échéance et statut. Voir [Faire une liste de réserves](topic:punch-list). |
| {{ui:Outils}} | Le coffre d'outils : des outils enregistrés et stylés. Voir [Le coffre d'outils](topic:tool-chest). |
| {{ui:Comparer}} | Superposer deux feuilles. Voir [Comparer deux révisions](topic:compare-revisions). |

## La barre d'état (en bas)

- À gauche, la position du pointeur sur la feuille, en pouces (ou en millimètres, dans les [Paramètres](topic:settings)) sur le papier.
- Au milieu, les messages : ce qu'un outil attend ensuite, ce qui vient d'être enregistré, pourquoi quelque chose a été refusé. **Lisez-la quand quelque chose ne se produit pas.**
- Le bouton d'échelle de la feuille (« Non étalonnée », ou l'échelle). Cliquez-le pour définir l'échelle. Voir [Étalonner une feuille et mesurer](topic:calibrate-and-measure).
- Votre nom (« Définir votre nom » tant que vous n'en avez pas donné). Cliquez-le pour le modifier.

## Sur un petit écran

En dessous d'environ 1180 pixels de large, les panneaux rétrécissent et les images de feuilles diminuent. Sur un écran de la taille d'un téléphone, les parties s'empilent : barre d'outils (faites-la défiler latéralement), la feuille, la barre d'état, les panneaux, puis la liste des feuilles en bas. Une tablette en paysage garde la disposition complète.
