---
title: Rechercher du texte dans les dessins
summary: Recherchez les mots de chaque feuille, passez à chaque occurrence et encadrez-les toutes en une seule étape.
keywords: rechercher, recherche, texte, mot, mots, ctrl f, chercher, note, note clé, légende, tout encadrer, surligner les résultats, ocr, scan, numérisé, lire le texte, sélectionner le texte, copier le texte, tesseract
from: 3435c9eb
---

{{ui:Rechercher du texte}}, en haut du panneau {{ui:Feuilles}}, recherche les mots dessinés sur les feuilles elles-mêmes. {{ui:Chercher des feuilles}} en dessous ne cherche que les noms de feuilles.

## Rechercher

1. Appuyez sur {{key:Mod+F}}, ou ouvrez {{ui:Rechercher du texte}}.
2. Saisissez les mots, par exemple `hood` ou `verify in field`.
3. Choisissez {{ui:Toutes les feuilles}} ou {{ui:Cette feuille}}, et cochez {{ui:Respecter la casse}} ou {{ui:Mots entiers}} si besoin.
4. Appuyez sur {{key:Enter}} ou choisissez {{ui:Rechercher}}.

Résultat : chaque occurrence est listée avec le numéro de sa feuille et les mots qui l'entourent, et elle est marquée en jaune sur sa feuille. Choisissez une occurrence pour ouvrir sa feuille et faire un zoom dessus.

Une expression est trouvée même lorsque le dessin la répartit sur deux morceaux de texte ou sur deux lignes.

## Encadrer chaque occurrence

Choisissez {{ui:Tout encadrer}}. Un nuage de révision entoure chaque occurrence de la liste, sur chaque feuille, avec « Trouvé : <vos mots> » comme commentaire. Un seul {{key:Mod+Z}} les supprime toutes.

## Lire le texte d'un scan (OCR)

Une feuille numérisée n'est qu'une image : tant que ses mots ne sont pas lus, il n'y a rien à trouver. Lorsque le compteur indique que des feuilles n'ont pas de texte, choisissez {{ui:Lire le texte (OCR)…}} sous celui-ci, ou {{ui:Pages}} › {{ui:Lire le texte (OCR)…}}.

1. Choisissez les pages : cette feuille, chaque page du fichier, ou chaque page de chaque fichier ouvert.
2. Choisissez la langue du texte. {{ui:Aussi l'anglais}} lit aussi les mots anglais.
3. Choisissez {{ui:Lire le texte}}. Une barre affiche la page en cours de lecture ; {{ui:Arrêter}} met fin à l'opération et conserve les pages déjà lues.

Résultat : les mots peuvent être trouvés, sélectionnés et copiés comme tout autre texte. Tout s'exécute sur votre ordinateur : rien n'est envoyé ailleurs. Cela fonctionne sans connexion dans Studio, et dans le navigateur une fois l'application enregistrée pour un usage hors ligne (en anglais et dans la langue de votre interface) ou une fois qu'une langue a été utilisée une fois. Les pages qui ont déjà du texte restent telles quelles.

À l'enregistrement, les mots sont ajoutés au PDF sous forme de texte invisible derrière l'image, séparément de vos annotations, afin que d'autres programmes PDF puissent aussi les rechercher et les copier. Tant que vous n'avez pas enregistré, le fichier est indiqué comme non enregistré.

## Sélectionner et copier le texte

Choisissez {{ui:Plus}} › {{ui:Sélectionner du texte à copier}}. Faites glisser d'un mot à un autre pour sélectionner les mots entre eux, faites glisser depuis une zone vide de la feuille pour sélectionner les mots dans un cadre, ou double-cliquez sur un mot. {{key:Mod+A}} sélectionne chaque mot de la feuille. {{key:Mod+C}} copie ces mots en conservant les lignes. Tout autre outil y met fin.

## Bon à savoir

- Les dessins dont les lettres sont tracées en traits n'ont pas non plus de texte ; la lecture en tant qu'image fonctionne mieux sur du texte imprimé, comme un livre numérisé ou un cahier des charges.
- Le lecteur est Tesseract, intégré à l'application avec ses données de langue pour l'anglais et les langues de l'application. La première exécution le charge (environ 6 MB, davantage pour une seconde langue).
- La qualité de lecture dépend du scan : des pages nettes à 300 dpi sont lues presque mot pour mot ; les scans anciens, pâles ou de faible résolution manquent davantage de mots.
- La liste affiche les 500 premières occurrences ; {{ui:Tout encadrer}} encadre jusqu'à 2,000.
- Les occurrences sont effacées à la fermeture de l'ensemble, et pour un fichier lorsque vous modifiez ses pages.
