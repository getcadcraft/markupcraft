---
title: Formats de page et noms de papier
summary: Voir la taille de chaque page PDF en millimètres et en pouces ainsi que son nom de papier (séries A, B et C, ANSI, ARCH), et regrouper un ensemble mixte par format pour repérer les pages atypiques.
keywords: format de page, format de papier, nom de papier, a0, a1, a2, a3, a4, série b, série c, ansi, arch, architectural, mm, pouces, format personnalisé, par format, format atypique, ensemble mixte, vérifier pdf, client, problème, mediabox, cropbox, rotation
from: 08e1354f
---

Avant qu'un ensemble soit envoyé à un client, vérifiez que chaque feuille a le format qu'elle doit avoir. {{ui:MarkupCraft}} lit la taille de chaque page dans le PDF lui-même et nomme le papier.

## Ce que vous allez faire

Regardez la taille d'une feuille, puis regroupez tout l'ensemble par format.

## Étapes

1. Ouvrez les PDF ({{ui:Ouvrir}}), puis appuyez sur {{key:Esc}} jusqu'à ce que rien ne soit sélectionné et que {{ui:Sélectionner}} soit activé.
2. Regardez {{ui:Propriétés}}. {{ui:Papier}} indique le nom et le sens, par exemple « A4, portrait ». {{ui:Format}} donne les millimètres et les pouces.
3. Chaque ligne de la liste {{ui:Feuilles}} a une ligne de taille sous le nom de la feuille.
4. Choisissez {{ui:Par format}} dans l'en-tête de {{ui:Feuilles}}. La liste regroupe les feuilles sous un intitulé par format, le groupe le plus grand en premier. Un format avec seulement quelques feuilles est marqué comme un cas isolé.
5. Choisissez de nouveau {{ui:Par format}} pour revenir à l'ordre propre à l'ensemble.

Résultat : une page d'une taille différente du reste se repère facilement avant d'envoyer l'ensemble.

## Comment le nom est choisi

- La taille provient de la boîte de la page dans le PDF, rotation appliquée : un A3 en paysage reste un A3.
- Les noms sont ceux des séries A et B (ISO 216), de la série C (ISO 269), ANSI A à E et ARCH A à E.
- Une page à moins de 2 mm d'un format nommé prend ce nom. Toute autre page indique {{ui:personnalisé}}, et {{ui:Format nommé le plus proche}} indique le format le plus proche et l'écart.
- Les pouces proviennent de la taille réelle de la page : une page A4 mesure donc 8.26 by 11.69 in.

## Dans les fichiers que vous enregistrez

Le classeur récapitulatif ({{ui:Liste des annotations}}, puis le tableur) a une colonne {{ui:Format de papier}} sur la feuille {{ui:Par feuille}} et une feuille de calcul {{ui:Formats des pages}}. Le rapport PDF a une ligne « Formats des pages » avec le nombre de chaque format.

:::note
Les valeurs en pouces ANSI et ARCH ont été saisies à partir des tableaux publiés et n'ont pas été comparées aux normes imprimées. Considérez une page « personnalisée » proche de l'une d'elles comme un point à vérifier vous-même.
:::
