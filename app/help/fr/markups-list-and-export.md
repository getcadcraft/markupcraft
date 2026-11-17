---
title: La liste des annotations, filtres et exports
summary: Voir toutes les annotations du jeu, filtrer par feuille, auteur, statut et type, aller à l'une d'elles, et exporter la liste en CSV ou BCF.
keywords: liste des annotations, liste, résumé, xlsx, classeur, rapport pdf, import bcf, filtre, tri, rapport, export, csv, bcf, bcfzip, problèmes, liste des commentaires, aller à
from: 6c70261e
---

## Ouvrir la liste

Choisissez l'onglet {{ui:Markups}} à droite. Chaque annotation de chaque fichier ouvert est listée, par ordre de feuille puis dans l'ordre de création. Chaque ligne affiche :

- une icône à la couleur de l'annotation, son numéro de réserve s'il en a un (« #4 »), et son objet,
- son texte, le libellé de son tampon ou sa valeur mesurée, et son commentaire,
- la feuille, l'auteur et la date,
- son statut (ou « Lecture seule » pour les commentaires venus du fichier), et le nombre de réponses lorsqu'il y en a.

La ligne au-dessus de la liste les compte : « 38 annotations », ou « 12 sur 38 annotations » lorsqu'un filtre est appliqué.

## Aller à une annotation

Cliquez sur une ligne. MarkupCraft affiche cette feuille, sélectionne l'annotation et fait un zoom sur elle lorsqu'elle est hors écran ou trop petite pour être vue. {{ui:Properties}} présente ses détails et son fil lorsque vous revenez à cet onglet.

## Filtrer

Quatre menus au-dessus de la liste. Ils se combinent.

| Menu | Choix |
|---|---|
| {{ui:Sheet}} | Toutes les feuilles, Cette feuille (suit vos changements de feuille), ou toute feuille comportant des annotations |
| {{ui:Author}} | Tout le monde, ou chaque auteur du jeu |
| {{ui:Status}} | Tout statut, Ouvert, Accepté, Rejeté, Terminé |
| {{ui:Type}} | Tout type, ou chaque type d'annotation du jeu |

Exemples :

- Ce qui reste ouvert sur cette feuille : {{ui:Sheet}} « Cette feuille », {{ui:Status}} « Ouvert ».
- Les commentaires d'un consultant : {{ui:Author}} son nom.
- Toutes les mesures : {{ui:Type}} « Longueur » ou « Surface ».

La liste affiche jusqu'à 2000 lignes ; affinez-la avec un filtre dans les très grands jeux.

## Exporter en CSV

Choisissez {{ui:CSV}} en haut de l'onglet. Vous obtenez « <name> markups.csv » contenant **les annotations telles qu'elles sont filtrées**, une par ligne, avec ces colonnes :

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- « Text » contient le texte des zones de texte et des détails, le libellé d'un tampon ou le nom d'un groupe de comptage.
- « Measurement » contient les longueurs, « area, perimeter » pour les surfaces, et « group: n » pour les comptages.
- Les dates sont des horodatages complets en UTC.

Pour tout exporter, remettez d'abord chaque filtre sur son premier choix.

## Une légende sur la feuille

{{ui:Legend}} dans l'onglet {{ui:Markups}} place une légende en haut à droite de ce que vous voyez : une boîte qui liste chaque type d'annotation de la feuille (par objet et couleur, comme « Nuage », « Question » ou « Prises ») avec leur nombre. Un groupe de comptage compte ses marques. La légende continue de compter pendant que vous tracez, déplacez ou supprimez des annotations, et elle s'imprime et s'enregistre avec les comptes du moment.

Déplacez-la et redimensionnez-la comme toute annotation. Dans ses {{ui:Properties}}, modifiez son {{ui:Title}}, ou réglez {{ui:Counts}} sur {{ui:The whole set}} pour compter toutes les feuilles. Les espaces, les autres légendes et les commentaires d'autres logiciels ne sont pas comptés.

## Vos propres colonnes et le tri

{{ui:Columns}} dans l'onglet {{ui:Markups}} ajoute vos propres colonnes à chaque annotation : un **texte**, un **choix** (comme Lot : Mécanique, Électrique, Plomberie), un **nombre** (comme Coût) ou une **date**. Donnez un nom à chacune, choisissez son type, listez les choix pour une colonne de choix, puis choisissez {{ui:Save columns}}.

- Renseignez-les dans {{ui:Properties}} : chaque colonne y a un champ. Une colonne de nombres n'accepte que des nombres, une colonne de dates une date.
- La liste affiche les valeurs sous chaque annotation, le filtre {{ui:Column}} choisit une valeur (ou les annotations où elle est vide), et {{ui:Sort}} trie la liste par colonne, auteur, statut, type ou date, au lieu de par feuille.
- Les exports CSV et XLSX reprennent ces colonnes après les colonnes habituelles. Les colonnes sont enregistrées avec le PDF et reviennent lorsque vous le rouvrez.

## Exporter un récapitulatif : classeur ou PDF

- {{ui:XLSX}} télécharge « <name> markup summary.xlsx » avec trois feuilles : **Markups** (une ligne par annotation listée, mêmes colonnes que le CSV), **By sheet** (nombre d'annotations par feuille, ouvertes et fermées, et nombre par type, avec les totaux) et **Punch list** (lorsqu'il y a des réserves).
- {{ui:PDF}} télécharge « <name> markup summary.pdf » : un rapport à imprimer ou à envoyer, avec le nom du jeu, la date et un tableau des annotations listées (numéro, feuille, type, objet, texte ou commentaire, valeur mesurée, auteur, statut et dernière réponse). Les longs textes passent à la ligne ; l'en-tête du tableau se répète sur chaque page.

Les deux utilisent la liste telle qu'elle est filtrée : filtrez donc d'abord pour ne rapporter qu'une feuille, un auteur ou les seuls éléments ouverts.

## Exporter en BCF

Choisissez {{ui:BCF}}. MarkupCraft fait une image de chaque annotation listée sur sa feuille (« Création des instantanés BCF (3 sur 12)… »), puis télécharge « <name> markups.bcfzip ». Chaque annotation devient un sujet BCF avec son statut, son auteur, ses dates, ses réponses en commentaires, la personne assignée et l'échéance issues de sa réserve, et l'instantané.

Utilisez-le pour transférer les commentaires de révision de dessins vers les outils de coordination BIM qui lisent le BCF. Ce qui est repris, et ce qui ne l'est pas, figure dans [Bases du BCF](topic:bcf-basics).

## Importer un BCF

{{ui:Import BCF}} lit un fichier .bcfzip (ou .bcf) provenant d'un outil BIM :

- Les problèmes issus de l'export BCF de MarkupCraft retrouvent leurs annotations : les nouvelles réponses sont ajoutées au fil, et un nouveau statut est défini (« Closed » compte comme « Terminé »). Les réponses déjà présentes ne sont pas ajoutées deux fois.
- Les autres problèmes deviennent des notes, avec leur titre, leur description, leur auteur et leurs commentaires. Une note se place sur la feuille dont le numéro ou le nom figure dans les étiquettes du problème, sinon sur la feuille ouverte ; une caméra BIM n'a pas de place sur le papier, donc ces notes sont empilées en haut à gauche de la feuille pour que vous les déplaciez.

Tout l'import ne forme qu'une seule étape : {{key:Mod+Z}} l'annule. Voir [Bases du BCF](topic:bcf-basics).

## Ce que la liste ne fait pas encore

- Grouper la liste (trier, puis filtrer, à la place).
- Modifier les valeurs dans la liste (modifiez-les dans {{ui:Properties}} ; les champs de réserve se modifient dans l'onglet {{ui:Punch list}}).
