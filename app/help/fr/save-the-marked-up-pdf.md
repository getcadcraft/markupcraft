---
title: Enregistrer le PDF annoté
summary: Télécharger une copie dans laquelle chaque annotation est écrite sous forme de commentaire PDF standard, vérifier ce que voient les autres lecteurs PDF, et reprendre le travail plus tard.
keywords: enregistrer, télécharger, exporter pdf, annoté, annotations, commentaires, partager, envoyer, problème, reprendre, rouvrir, aller-retour, imprimer
from: 4c198ebe
---

## Enregistrer

1. Choisissez {{ui:Enregistrer (S)}} dans la barre d'outils, ou appuyez sur {{key:Mod+S}}.
2. Si plusieurs fichiers sont ouverts, choisissez {{ui:Ce fichier}} (le fichier de la feuille affichée) ou {{ui:Chaque fichier modifié}}. Chaque copie est téléchargée séparément.
3. Attendez que « Enregistrement de <file>… » se termine. La première sauvegarde d'une session charge aussi le générateur de PDF.

Résultat : votre navigateur télécharge « <name> (marked up).pdf », et la barre d'état l'indique : « Enregistré : A-Plans (marked up).pdf (24 annotations, 18.2 MB). Le fichier d'origine est inchangé. » Le point après {{ui:Enregistrer (S)}} disparaît.

**Votre PDF d'origine n'est jamais modifié.** MarkupCraft écrit un nouveau fichier. Son emplacement dépend des paramètres de téléchargement de votre navigateur (voir [Fichiers ouverts et enregistrés par MarkupCraft](topic:files#where-downloads-go)).

## Continuer le travail plus tard

Ouvrez la copie « (marked up) » la prochaine fois, et non l'original. Tout revient modifiable : annotations, statuts, réponses, éléments de la liste de réserves, échelle de chaque feuille et noms de feuilles que vous avez saisis. Enregistrer à nouveau télécharge un fichier portant le même nom « (marked up) » ; votre navigateur peut ajouter un numéro comme « (1) » si l'ancien téléchargement se trouve encore dans le dossier. Remplacez ou rangez vous-même les anciennes copies.

MarkupCraft n'enregistre pas le PDF tout seul. Pendant votre travail, il conserve une copie de récupération dans ce navigateur : en cas de plantage ou de fermeture de l'onglet, vos annotations ne sont pas perdues, et la prochaine fois que vous ouvrez MarkupCraft, il demande « Récupérer votre travail ? ». Voir [Récupérer votre travail](common:recover). Enregistrez tout de même avant de fermer ; si vous tentez de quitter avec des annotations non enregistrées, le navigateur demande d'abord « Quitter le site ? » (Safari sur iPad ne le fait pas).

## Ce que voient les autres lecteurs PDF

Chaque annotation est écrite comme commentaire PDF standard (annotation), avec son propre dessin ; tout lecteur PDF l'affiche, l'imprime et la liste dans son panneau de commentaires :

- **L'aspect est le même** que dans MarkupCraft : nuages avec leurs festons, pointes de flèche, tampons, points de comptage, pastilles de numéro de réserve, étiquettes de mesure.
- **Les détails sont standard :** auteur, date, objet, texte du commentaire et couleurs.
- **Les nuages** sont des commentaires rectangle ou polygone avec une bordure ondulée ; **les zones de texte** et **les légendes** sont des commentaires de zone de texte ; **les notes** sont des notes adhésives ; **les traits au stylo** et **au surligneur** sont des encres ; **les tampons** sont des commentaires de tampon.
- **Les longueurs et les surfaces** sont des commentaires de mesure, et chaque feuille étalonnée porte son échelle, afin que les lecteurs qui comprennent les mesures puissent afficher les valeurs.
- **Les réponses** sont des réponses au commentaire, et **les statuts** sont des états de révision (Ouvert n'apparaît pas comme un état).
- **Les numéros de feuille** que vous avez saisis deviennent les étiquettes de page affichées par les autres lecteurs.

Quelques éléments seule MarkupCraft les relit : l'affectation et l'échéance d'un élément de la liste de réserves, son statut, et certains détails de style. Les autres programmes les conservent, sauf s'ils réécrivent le commentaire.

Dans un autre programme, les commentaires peuvent être déplacés ou modifiés comme n'importe quel autre. Si quelqu'un le fait et renvoie le fichier, MarkupCraft utilise la nouvelle position du commentaire à l'ouverture du fichier.

Détail complet : [Ce qui est enregistré dans le PDF](topic:what-the-pdf-keeps).

## Caractères affichés en « ? »

Le texte des annotations est écrit avec la police standard Helvetica, présente dans tous les lecteurs PDF. Elle couvre l'anglais et les lettres d'Europe occidentale (é, ñ, ü, ø, etc.), mais pas les autres écritures, les symboles hors de cet ensemble ni les emojis. Ces caractères s'affichent correctement dans MarkupCraft, mais apparaissent en « ? » dans la copie enregistrée, et le message d'enregistrement les compte : « 3 caractères hors de l'ensemble d'Europe occidentale apparaissent en "?" dans la copie. » Écrivez ces mots en toutes lettres, ou utilisez un substitut simple (par exemple « dia. » pour le symbole du diamètre).

## Fichiers qui ne peuvent pas être enregistrés

- **PDF protégés :** « Ce PDF est protégé (chiffré), donc une copie annotée ne peut pas être écrite. Demandez une copie sans protection. » Vous pouvez encore le consulter à l'écran, exporter le CSV et le BCF.
- Si l'enregistrement échoue pour une autre raison, une boîte intitulée « Impossible d'enregistrer <file> » indique la cause. Vos annotations restent dans l'onglet ; rien n'est perdu tant que vous ne le fermez pas.

## Aplatissement et impression

L'aplatissement (intégration des annotations dans la page) n'est pas encore disponible, et il n'existe pas encore de commande d'impression. Pour imprimer, ouvrez la copie enregistrée dans n'importe quel lecteur PDF et imprimez avec les commentaires affichés.
