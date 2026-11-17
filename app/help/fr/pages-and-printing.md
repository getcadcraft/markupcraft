---
title: Imprimer et modifier les pages d'un PDF
summary: Imprimez les feuilles avec leurs annotations, et faites pivoter, déplacez, insérez, supprimez ou extrayez des pages d'un PDF ouvert.
keywords: imprimer, imprimante, papier, pages, page, pivoter, tourner, réordonner, déplacer la page, insérer, ajouter une page, page vierge, supprimer la page, retirer la page, extraire, diviser, opérations sur les pages
from: 81832d9b
---

Le menu {{ui:Pages}} du groupe {{ui:Fichier}} agit sur le PDF auquel appartient la feuille ouverte. Votre PDF sur cet ordinateur n'est jamais modifié : les changements font partie de la copie que vous enregistrez.

## Imprimer

1. Appuyez sur {{key:Mod+P}}, ou choisissez {{ui:Pages}}, puis {{ui:Imprimer…}}.
2. Lorsque plusieurs feuilles sont ouvertes, choisissez ce qu'il faut imprimer : {{ui:Cette feuille}}, chaque page de ce fichier, le jeu entier, ou les pages que vous saisissez (par exemple `1-3, 5`).
3. Choisissez {{ui:Imprimer}}. La boîte de dialogue d'impression de votre navigateur s'ouvre : choisissez-y l'imprimante, le papier et l'échelle.

Les annotations s'impriment comme elles apparaissent sur la feuille : elles sont dessinées dans les pages de la copie envoyée à l'imprimante. Les commentaires créés par d'autres logiciels s'impriment selon ce que prévoit leur PDF.

:::safari firefox
Si votre navigateur ne peut pas imprimer depuis la page, les feuilles s'ouvrent comme PDF dans un nouvel onglet. Imprimez à partir de là.
:::

## Faire pivoter une page

Choisissez {{ui:Pages}}, puis {{ui:Pivoter la page dans le sens horaire}} ou {{ui:Pivoter la page dans le sens antihoraire}}. La feuille ouverte pivote d'un quart de tour. Ses annotations restent à leur place sur le dessin, et le texte que vous avez saisi pivote avec la page afin de rester lisible à l'endroit.

## Déplacer une page

Choisissez {{ui:Pages}}, puis {{ui:Déplacer la page plus tôt}} ou {{ui:Déplacer la page plus tard}}. La feuille ouverte échange sa place avec sa voisine dans son propre PDF. Ses annotations, son échelle et son numéro de feuille la suivent.

## Insérer des pages

- {{ui:Insérer des pages depuis un PDF…}} place toutes les pages d'un autre PDF après la feuille ouverte.
- {{ui:Insérer une page vierge}} ajoute une page vide de même format après la feuille ouverte, pour des croquis et des notes. Dans un jeu créé avec {{ui:Nouvelle}}, elle a aussi la grille du jeu.
- Dans un jeu créé avec {{ui:Nouvelle}}, {{ui:Ajouter une page vierge}} sous la liste {{ui:Feuilles}} ajoute une page de plus, semblable aux autres, à la fin. Voir [Commencer par des pages vierges](topic:open-a-plan-set#start-with-blank-pages).

Les pages insérées reçoivent leur numéro de page comme étiquette jusqu'à ce que vous les renommiez. Voir [Renommer une feuille](topic:open-a-plan-set#rename-a-sheet).

## Supprimer des pages

1. Choisissez {{ui:Pages}}, puis {{ui:Supprimer des pages…}}.
2. Saisissez les numéros de page de ce PDF, par exemple `3` ou `2-4`. La page de la feuille ouverte est déjà renseignée.
3. Choisissez {{ui:Supprimer des pages}}. Si ces pages contiennent des annotations, MarkupCraft indique leur nombre et demande à nouveau.

Un PDF conserve au moins une page. Pour retirer un fichier entier, fermez le jeu et ouvrez les fichiers dont vous avez encore besoin.

## Extraire des pages

Choisissez {{ui:Pages}}, puis {{ui:Extraire des pages…}}, et saisissez les pages. Elles sont téléchargées sous forme de nouveau PDF nommé « <file> (pages 1-3).pdf », avec leurs annotations sous forme de commentaires que vous pouvez continuer à modifier. Le fichier ouvert reste inchangé.

## À savoir

- **L'annulation s'arrête à une modification de page.** {{key:Mod+Z}} annule les annotations tracées après elle, mais pas la modification de page elle-même ni ce qui la précède. Fermez sans enregistrer pour recommencer à partir de votre PDF d'origine.
- Les numéros de page comptent les pages d'un seul PDF, et non tout le jeu. Déplacer une page la garde dans son propre fichier.
- Les pages modifiées sont du travail non enregistré : {{ui:Enregistrer (S)}} télécharge la copie réorganisée, et quitter demande confirmation.
