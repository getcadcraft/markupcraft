---
title: Liens entre feuilles
summary: Faire passer une annotation à une autre feuille du jeu, et relier chaque renvoi comme 3/A-501 à sa feuille et à sa vue en une seule opération avec Liens par lot.
keywords: lien hypertexte, lien, liens, aller, renvoi de feuille, renvoi de détail, renvoi de coupe, 3/A-501, aller à la feuille, retour, lien automatique, liens par lot, cartouche, numéro de feuille, nom de feuille, vue, détail, renommer, renuméroter, additif, lien pdf
from: 86a17c37
---

Un lien de feuille vous fait passer d'une annotation à une autre feuille du jeu : d'une bulle de détail au détail, ou d'une note à la feuille à laquelle elle renvoie.

## Lier une annotation à une feuille

1. Sélectionnez l'annotation.
2. Dans {{ui:Propriétés}}, choisissez la feuille sous {{ui:Lien vers une feuille}}.

Une petite flèche apparaît en haut à droite de l'annotation. Pour la suivre, maintenez {{key:Mod}} et cliquez sur l'annotation, ou sélectionnez-la et choisissez {{ui:Aller à …}} dans {{ui:Propriétés}}. {{key:Alt+Left}} vous ramène à la feuille d'où vous venez.

Un lien désigne la feuille par son numéro : il fonctionne donc encore après la réouverture du jeu ou l'intercalation d'une nouvelle édition, et ouvre la feuille la plus récente portant ce numéro. Si cette feuille n'est pas ouverte, la barre d'état l'indique.

## Lier tous les renvois de feuilles d'un coup

Choisissez {{ui:Pages}} › {{ui:Liens par lot…}}, ou {{ui:Lier les renvois de feuilles…}} sous {{ui:Rechercher du texte}} en haut du panneau {{ui:Feuilles}}.

1. **Vérifiez les numéros de feuille.** MarkupCraft liste chaque feuille ouverte avec le numéro et le nom lus dans le cartouche de la feuille (ou son étiquette de page), ainsi que leur origine. Corrigez ceux qui sont faux, et saisissez un numéro là où aucun n'a été trouvé (un cartouche dont le numéro a été imprimé sous forme de traits n'a pas de texte à lire). Choisissez ensuite {{ui:Rechercher les légendes}}. Vos corrections forment une seule étape d'annulation et deviennent les étiquettes de page du PDF enregistré.
2. **Vérifiez la liste.** MarkupCraft lit le texte de chaque feuille pour repérer les renvois, comme « 3/A-501 », « 5 / A501 », « DETAIL 2 ON A-501 », une bulle avec « 3 » au-dessus de « A-501 », ou un simple « A-501 » dans une note. Il lit aussi les titres des vues de chaque feuille (un numéro de détail avec le numéro de feuille dessous, ou un grand numéro avec un titre à côté). La liste comporte trois parties :
   - {{ui:Sera lié}} : chaque renvoi, la feuille vers laquelle il pointe et la vue sur cette feuille. Décochez ceux que vous ne voulez pas. Si la vue n'a pas été trouvée (un renvoi vers la vue 7 sur une feuille qui ne comporte que les vues 1 à 6), choisissez la vue dans la liste à côté, ou laissez {{ui:Feuille entière}}.
   - {{ui:Non lié}} : les numéros de feuille qu'aucune feuille ouverte ne porte, avec le nombre de renvois qui les citent. Choisissez la feuille que chacun désigne (par exemple une feuille renumérotée) ; chaque renvoi vers ce numéro sera alors lié. Ou laissez-les non liés.
   - Le nombre de renvois déjà liés qui pointent au bon endroit. Ils sont laissés tels quels.
3. Choisissez {{ui:Créer les liens}}.

Chaque renvoi reçoit un cadre bleu fin qui constitue un lien de feuille. {{key:Mod}}+clic dessus ouvre la feuille zoomée sur la vue. Un seul {{key:Mod+Z}} les supprime tous.

Les codes qui ressemblent seulement à des numéros de feuille, comme R-19 ou W12X26, sont exclus : un renvoi doit avoir la forme des numéros de feuille du jeu. Le numéro propre d'une feuille, dans son cartouche et dans les titres de ses vues, n'est jamais un renvoi. Les feuilles numérisées n'ont pas de texte à lire : utilisez d'abord {{ui:Lire le texte (OCR)…}}, ou liez leurs renvois un par un.

## Relancer lorsque le jeu change

Les liens par lot peuvent être relancés autant de fois que vous le souhaitez :

- **Une feuille a été ajoutée**, par exemple un additif avec A-601 : ouvrez son fichier et relancez les liens par lot. Les renvois vers A-601 qui n'étaient pas liés le sont maintenant.
- **Une feuille a été renumérotée** : corrigez son numéro à l'étape 1. Les liens créés par les liens par lot qui ne retrouvent plus leur feuille sont listés sous {{ui:Non lié}} ; choisissez la feuille une seule fois et tous suivront. Les liens qui ont changé de vue sont mis à jour.
- Les liens que vous avez créés à la main dans {{ui:Propriétés}} ne sont jamais modifiés.

## Dans le PDF enregistré

Un lien vers une feuille du même PDF est aussi écrit comme lien PDF, afin que les autres lecteurs y accèdent également d'un clic. Un lien avec une vue ouvre cette vue dans l'autre lecteur (le saut « fit rectangle » du PDF) ; un lien sans vue ouvre la feuille entière. Les liens vers une feuille d'un autre fichier du jeu ne fonctionnent que dans MarkupCraft.
