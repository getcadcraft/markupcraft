---
title: Sélectionner, déplacer et modifier les annotations
summary: Choisir des annotations en cliquant ou avec une fenêtre, déplacer, redimensionner, décaler, couper, copier, coller, coller à la même position, dupliquer, supprimer et annuler.
keywords: sélectionner, sélection, tout sélectionner, désélectionner tout, fenêtre, capture, déplacer, redimensionner, poignées, petit déplacement, décaler, couper, copier, coller, coller à la même position, presse-papiers, autre onglet, supprimer, annuler, rétablir, modifier
from: 62c7def3
---

Choisissez d'abord {{ui:Sélectionner}} ({{key:V}}). {{key:Esc}} y mène aussi : le premier appui efface la sélection, le suivant revient à {{ui:Sélectionner}}.

## Choisir des annotations

:::mouse
- **Une annotation :** cliquez dessus. Un cadre en tirets et des poignées apparaissent, et {{ui:Propriétés}} l'affiche.
- **Ajouter ou retirer une annotation :** maintenez {{key:Shift}} et cliquez.
- **Entièrement dans une fenêtre :** faites glisser de gauche à droite sur une partie vide de la feuille. Seules les annotations entièrement comprises dans le cadre sont choisies (contour plein).
- **En touchant une fenêtre :** faites glisser de droite à gauche. Tout ce que le cadre touche est choisi (contour vert en tirets).
- **Tout ce qui est sur cette feuille :** {{key:Mod+A}}, ou {{ui:Plus}} puis {{ui:Tout sélectionner}} dans le groupe {{ui:Édition}} de la barre d'outils.
- **Rien :** cliquez sur un espace vide, appuyez sur {{key:Esc}}, ou {{ui:Plus}} puis {{ui:Désélectionner tout}}.
:::

:::touch
- **Une annotation :** appuyez dessus.
- **Plusieurs :** faites glisser un doigt sur une partie vide de la feuille pour tracer une fenêtre. De gauche à droite, on choisit ce qui est entièrement dedans ; de droite à gauche, ce que la fenêtre touche.
- Appuyer avec {{key:Shift}} maintenu ne fonctionne qu'avec un clavier connecté. Sans clavier, utilisez une fenêtre.
- Un doigt ne déplace jamais la vue dans {{ui:Sélectionner}} ; utilisez deux doigts, ou l'outil {{ui:Déplacer la vue}}.
:::

Les commentaires en lecture seule venus avec le fichier affichent un cadre gris en tirets et aucune poignée. Ils peuvent être sélectionnés et recevoir une réponse, mais pas être modifiés.

## Déplacer et redimensionner

- **Déplacer :** faites glisser une annotation sélectionnée. Maintenez {{key:Shift}} pour ne la déplacer que par multiples de 45°. Plusieurs annotations sélectionnées se déplacent ensemble.
- **Redimensionner :** avec une seule annotation sélectionnée, faites glisser une poignée. Les poignées carrées redimensionnent le cadre (maintenez {{key:Shift}} pour garder ses proportions) ; les poignées rondes déplacent un point d'angle d'une ligne, d'une polyligne, d'un polygone, d'un nuage ou d'une mesure (maintenez {{key:Shift}} pour 45°) ; les poignées en losange déplacent la pointe et le coude d'une légende. Les traits au stylo sont mis à l'échelle à partir de leur cadre.
- **Déplacement fin :** appuyez sur les touches fléchées pour déplacer la sélection d'un pixel écran ; maintenez {{key:Shift}} pour dix pixels. Chaque appui correspond à une étape d'annulation.

## Modifier le texte ou l'apparence

- **Texte, légendes et notes :** double-cliquez sur l'annotation, ou appuyez sur {{key:Enter}}, ou choisissez {{ui:Modifier sur la feuille}} dans {{ui:Propriétés}}. Tapez, puis cliquez à l'extérieur ou appuyez sur {{key:Mod+Enter}}. {{key:Esc}} annule la modification.
- **Tampons :** choisissez un autre tampon dans {{ui:Propriétés}} (un double-clic ouvre {{ui:Propriétés}} pour vous).
- **Style :** {{ui:Couleur}}, {{ui:Épaisseur du trait}}, {{ui:Remplissage}}, {{ui:Opacité}} et {{ui:Taille du texte}} sous « Style » dans {{ui:Propriétés}}. Si plusieurs annotations sont sélectionnées, {{ui:Propriétés}} affiche les types choisis et les modifie tous d'un coup.

## Copier, coller et dupliquer

Le groupe {{ui:Édition}} de la barre d'outils contient {{ui:Copier}} et {{ui:Coller}} ; son menu {{ui:Plus}} regroupe toutes ces commandes, chacune avec son raccourci.

| Commande | Touche | Effet |
|---|---|---|
| {{ui:Couper}} | {{key:Mod+X}} | Copie les annotations sélectionnées et les supprime |
| {{ui:Copier}} | {{key:Mod+C}} | Copie les annotations sélectionnées |
| {{ui:Coller}} | {{key:Mod+V}} | Place une copie sur la feuille affichée (où, voir ci-dessous) |
| {{ui:Coller à la même position}} | {{key:Mod+Shift+V}} | Place la copie exactement à l'endroit d'origine : sur la même feuille, par-dessus l'original ; sur une autre feuille, au même endroit sur le papier |
| {{ui:Dupliquer}} | {{key:Mod+D}} | Crée une copie de la sélection un peu plus bas et à droite, sans toucher à ce que vous aviez copié auparavant |

**Où Coller place la copie :**

- {{key:Mod+V}} avec le pointeur sur la feuille place la copie centrée sur le pointeur. Déplacez le pointeur, appuyez de nouveau sur {{key:Mod+V}}, et vous en placez une autre.
- Le bouton {{ui:Coller}} (le pointeur est alors sur la barre d'outils), ou {{key:Mod+V}} avec le pointeur hors de la feuille, la place un peu plus bas et à droite de l'original. Chaque collage de la même copie avance d'un cran, si bien que les copies ne se cachent jamais. Sur une autre feuille, le premier collage atterrit à l'endroit où se trouvait l'original sur sa feuille. Si cet endroit est hors de vue, la copie atterrit au milieu de la vue.
- Pour que {{key:Mod+V}} colle toujours à côté de l'original, choisissez {{ui:À côté de la copie}} sous {{ui:Coller}} dans les [paramètres de MarkupCraft](topic:settings).

Les annotations collées sont sélectionnées, vous pouvez donc les faire glisser aussitôt. Chaque couper, coller ou dupliquer est une étape d'annulation : {{key:Mod+Z}} retire tout le collage d'un coup.

Les copies collées sont de nouvelles annotations : elles reçoivent votre nom, la date du jour, le statut Ouvert, aucun numéro de réserve et un fil de discussion vide. Leur type, leur forme, leur style, leur texte et leur commentaire sont conservés. Les commentaires en lecture seule venus avec le fichier ne peuvent pas être copiés ni coupés.

**Entre onglets :** ce que vous copiez est aussi conservé dans ce navigateur, si bien qu'un autre onglet MarkupCraft du même navigateur peut le coller. Copier des annotations n'utilise pas le presse-papiers de l'ordinateur : vous ne pouvez pas les coller dans un autre programme, et un texte copié ailleurs ne se colle pas comme annotation.

**Menu contextuel :** faites un clic droit sur une annotation (ou sur le papier vide) pour obtenir {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller ici}}, {{ui:Coller à la même position}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Enregistrer la sélection comme tampon…}}, {{ui:Aplatir dans la page à l'enregistrement}}, {{ui:Insérer une image ici…}} et {{ui:Tout sélectionner}}. Un clic droit sur une annotation non sélectionnée la sélectionne d'abord. Un glissement avec le bouton droit déplace toujours la vue. Sur un écran tactile, un appui prolongé sur une annotation ouvre le même menu (sur un texte, il lance la modification du texte). La touche de menu ou {{key:Shift+F10}} l'ouvre à la sélection.

Le contenu de la page sélectionné avec l'outil {{ui:Contenu}} se copie et se colle aussi : voir [Modifier les traits, images et textes propres à la page](topic:page-content).

Pour copier une partie de la page elle-même comme image (un rectangle, une ellipse ou une forme libre), ou comme superposition transparente pour une autre feuille ou application, voir [Copier une zone de la page, ou une superposition](topic:copy-an-area).

## Supprimer

Appuyez sur {{key:Delete}} ou {{key:Backspace}}, choisissez {{ui:Plus}} puis {{ui:Supprimer}} dans la barre d'outils, ou {{ui:Supprimer}} dans {{ui:Propriétés}}. La barre d'état indique le nombre supprimé. Les commentaires en lecture seule venus du fichier ne sont jamais supprimés (« conservé comme dans le fichier »).

## Annuler et rétablir

- {{key:Mod+Z}} annule, {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} rétablit. La barre d'outils contient {{ui:Annuler}} et {{ui:Rétablir}}.
- La barre d'état indique ce qui a été annulé (« Déplacement d'annotation annulé. »).
- L'annulation couvre chaque modification des annotations, des statuts, des réponses, des éléments de la liste de réserves, des échelles et des noms de feuilles, jusqu'à 500 étapes.
- L'historique est effacé lorsque vous fermez le jeu.

## Copier des annotations vers d'autres feuilles

Pour mettre le même tampon, la même note ou le même nuage sur plusieurs feuilles, sélectionnez-le (ou plusieurs annotations) et choisissez {{ui:Copier vers d'autres feuilles…}} dans {{ui:Propriétés}}. Cochez les feuilles, ou {{ui:Toutes les feuilles}}, puis choisissez {{ui:Copier}}. Chaque feuille reçoit une copie au même endroit sur la page, signée de votre nom. Un seul {{key:Mod+Z}} les supprime toutes.
