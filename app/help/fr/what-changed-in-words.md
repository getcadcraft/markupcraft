---
title: Lister les modifications entre les révisions
summary: Comparez deux jeux de plans et obtenez une liste simple, feuille par feuille, des endroits où le dessin et les mots ont changé, prête à être lue, copiée ou transmise à votre assistant.
keywords: ce qui a changé, modifications, liste des révisions, liste de comparaison, liste simple, raconter, assistant, delta, résumé des révisions
from: bab93d2e
---

Les outils de comparaison montrent les modifications sur la feuille. Celui-ci les consigne par écrit.

1. Ouvrez les deux révisions (voir [Ouvrir un jeu de plans](topic:open-a-plan-set)).
2. Ouvrez l'onglet {{ui:Comparer}}, puis {{ui:Comparer tout un jeu}}.
3. Choisissez le fichier antérieur et le fichier postérieur, puis choisissez {{ui:Lister les modifications}}.

La liste commence par un décompte (« 2 feuilles sur 14 correspondantes modifiées ; 1 nouvelle ; 1 supprimée »), puis détaille chaque feuille modifiée, la plus grande modification en premier : où se trouve le changement sur la feuille (en haut à gauche, au centre…), son étendue, si des traits ont été ajoutés, supprimés ou les deux, le nombre d'annotations qui s'y trouvent, et quels mots sont apparus ou ont disparu. Sur une feuille calibrée, la taille est donnée en unités réelles ainsi qu'en pouces sur le papier.

La liste indique ce qui figure sur la page ; elle n'indique pas ce que cela signifie. Un trait déplacé peut être un mur ou une ligne de repère. Votre assistant connecté peut lire la liste avec l'outil `revisions_changes` et la rédiger en mots, et vous pouvez regarder la feuille pour le reste. {{ui:Copier la liste}} la place dans le presse-papiers et {{ui:CSV}} écrit une ligne par modification.

Les feuilles sont appariées par numéro de feuille, comme dans [Ajouter une feuille de remplacement à un jeu révisé](topic:slip-sheet-a-revised-set). Les modifications inférieures à quelques points sont ignorées, et le texte qui fait partie d'une image (un scan) n'a aucun mot à comparer.
