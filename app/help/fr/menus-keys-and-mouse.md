---
title: Menus, touches et souris
summary: Choisissez la barre d'outils propre à MarkupCraft, une barre de menus de révision PDF ou un ruban, attribuez votre propre touche à un outil, déplacez les outils entre menus, et réglez ce que font la molette et les boutons de la souris.
keywords: style de menu, menus, barre de menus, barre d'outils, ruban, onglets, révision pdf, raccourcis clavier, touches, personnaliser, réattribuer, souris, molette, inverser, sens du zoom, bouton du milieu, bouton droit, panoramique, exporter, importer, changer, familier
from: 081438a6
---

Les outils de MarkupCraft sont les mêmes quelle que soit la façon de les atteindre. Un **style de menu** décide seulement où ils se placent à l'écran, comment ils s'appellent à cet endroit et quelles touches les activent. Choisissez-en un dans {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}} ; le changement est immédiat, et ce navigateur le retient.

## Les trois styles

| Style | Ce que vous obtenez |
|---|---|
| {{ui:MarkupCraft}} | La barre d'outils propre à MarkupCraft (Fichier, Sélectionner, Dessiner, Réviser, Annoter, Mesurer, Édition) et ses touches d'une lettre : {{key:V}} sélection, {{key:H}} panoramique, {{key:P}} crayon, {{key:I}} surligneur, {{key:L}} ligne, {{key:A}} flèche, {{key:R}} rectangle, {{key:E}} ellipse, {{key:C}} nuage, {{key:K}} détail, {{key:T}} texte, {{key:N}} note, {{key:S}} tampon, {{key:M}} longueur, {{key:Q}} surface, {{key:U}} comptage. Le point de départ. |
| {{ui:PDF review}} | Une barre de menus ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) au-dessus d'une rangée d'outils de révision, avec des touches disposées comme dans les logiciels de révision PDF : {{key:V}} sélection, {{key:Shift+V}} panoramique, {{key:H}} surligneur, {{key:Q}} détail, {{key:N}} polygone, {{key:Shift+N}} polyligne, {{key:Shift+T}} note, {{key:Shift+A}} arc, et les mesures sur {{key:Alt+Shift}} : {{key:Alt+Shift+K}} étalonner, {{key:Alt+Shift+L}} longueur, {{key:Alt+Shift+G}} angle, {{key:Alt+Shift+A}} surface, {{key:Alt+Shift+C}} comptage. {{key:Alt+L}} ouvre la liste des annotations. Le bouton du milieu fait un panoramique ; le clic droit non. |
| {{ui:Ribbon}} | Des onglets nommés selon le travail : {{ui:Mark up}} (sélection, tracé, nuages, détails, texte, notes, tampons), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}} (la liste des annotations et ses exports, les problèmes BCF, la liste de réserves, les relevés de terrain, le coffre à outils, comparer), {{ui:Pages}} et {{ui:View}}, avec {{ui:File}} et des boutons rapides pour ouvrir, enregistrer, annuler et rétablir. Les outils gardent les touches d'une lettre de MarkupCraft. Un bouton pour un panneau non ouvert ouvre d'abord ce panneau. |

Chaque style conserve les touches {{key:Mod}} : {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} ({{ui:Fit page}}) et {{key:Mod+9}} ({{ui:Fit width}}) ; {{key:PageUp}} et {{key:PageDown}} changent de feuille.

:::tip
Une touche qui appartient à la disposition propre à MarkupCraft, mais pas au style choisi, ne fait rien, et la barre d'état indique où se trouve son outil (« En révision PDF, Détail est Q »). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} et les flèches gardent toujours leur sens. Pendant la saisie dans une zone de texte, un détail ou une note, chaque touche appartient au texte, et les chiffres saisis pendant le tracé ouvrent toujours la zone de longueur.
:::

## Personnalisez-le

1. Choisissez le style le plus proche de ce que vous voulez, puis cliquez sur {{ui:Customize…}}.
2. Dans {{ui:Keys and menus}}, trouvez un outil (la zone de recherche aide). {{ui:Add a key}} puis appuyez sur la touche, ou sur deux touches à la suite pour une touche à deux lettres. Cliquez sur une touche pour la retirer.
3. Avec la barre de menus, {{ui:Where it sits}} déplace l'outil vers un autre menu, ou vers {{ui:Keys only}}.
4. Dans {{ui:Mouse}}, réglez la molette et les boutons qui déplacent la vue sur la feuille.
5. Donnez-lui un nom et cliquez sur {{ui:Save}}.

Enregistrer un style intégré crée votre propre copie (« Ma Revue PDF ») ; le style intégré, lui, ne change jamais. Une touche attribuée à deux outils s'affiche en rouge et doit être corrigée avant l'enregistrement.

## Souris

- **Molette :** {{ui:Scroll up zooms in}} (la valeur de départ) ou {{ui:Scroll up zooms out}}, ainsi que la vitesse. Un pincement sur pavé tactile zoome toujours dans le sens de vos doigts.
- **Panoramique de la feuille avec :** le bouton du milieu, le bouton droit, ou les deux. {{key:Space}} et glisser, ainsi que l'outil {{ui:Pan}}, font toujours un panoramique ; le bouton gauche sert sinon à dessiner et sélectionner, donc le cocher ne change rien ici.
- MarkupCraft n'a pas de vue 3D : les boutons 3D ne font rien ici.

## À emporter

{{ui:Export}} enregistre le style utilisé dans un petit fichier `.ccinput.json` ; {{ui:Import…}} en ajoute un, depuis un autre ordinateur ou d'un collègue. Un fichier importé ne peut pointer que vers les outils propres à MarkupCraft : tout le reste est omis et compté dans la barre d'état. {{ui:Delete this style}} supprime l'un de vos propres styles.

:::note
Ces réglages restent dans ce navigateur. {{ui:Use this style in every app}} sous les cartes de style fait ouvrir chaque application dans son style correspondant : {{ui:PDF review}} va avec les styles à barre de menus des autres applications, {{ui:Ribbon}} avec leurs rubans, la barre d'outils propre à MarkupCraft avec la leur. Une application sans style correspondant conserve le sien.
:::

:::tip
Les dispositions d'espace de travail dans {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}}) construisent leur ruban à partir des onglets du style {{ui:Ribbon}}, et leur boîte à outils à partir de la barre d'outils propre à MarkupCraft, de sorte que chaque outil fonctionne de la même façon dans ces dispositions.
:::

Voir aussi : [Clavier et souris](topic:keyboard) · [Paramètres de MarkupCraft](topic:settings) · [Venir d'autres logiciels d'annotation](topic:coming-from)
