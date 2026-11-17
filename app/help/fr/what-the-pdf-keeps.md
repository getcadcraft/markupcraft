---
title: Ce qui est enregistré dans le PDF
summary: Le contenu exact de la copie annotée, ce que voient les autres lecteurs PDF et ce qui est relu lorsque vous ouvrez un fichier.
keywords: annotations PDF, commentaires, données enregistrées, aller-retour, étiquettes de page, mesure, état de révision, réponses, interopérabilité, compatibilité, rouvrir, données privées
from: 6439ad28
---

La copie annotée est le PDF d'origine auquel sont ajoutés des commentaires (annotations PDF). Les pages elles-mêmes, leurs dessins, leur texte, leurs signets et leurs liens sont copiés tels quels.

## Chaque annotation

| MarkupCraft | Enregistré comme | Les autres lecteurs PDF affichent |
|---|---|---|
| Rectangle, nuage en boîte | Annotation Carré (nuage : bordure en nuage) | Un commentaire rectangle ou nuage |
| Ellipse | Annotation Cercle | Un commentaire ellipse |
| Polygone, nuage libre | Annotation Polygone (nuage : bordure en nuage) | Un commentaire polygone ou nuage |
| Polyligne | Annotation PolyLine | Un commentaire polyligne |
| Ligne, flèche | Annotation Ligne (flèche : pointe fermée) | Un commentaire ligne ou flèche |
| Longueur | Annotation Ligne marquée comme cote, avec une mesure | Une mesure de longueur, lorsque le lecteur les prend en charge |
| Surface | Annotation Polygone marquée comme surface, avec une mesure | Une mesure de surface, lorsqu'elle est prise en charge ; sinon un polygone |
| Groupe de comptage | Une annotation Encre, un anneau par élément ; son texte est « groupe : n » | Un commentaire encre |
| Stylo, surligneur | Annotation Encre (surligneur marqué comme tel) | Un commentaire encre |
| Texte | Annotation FreeText | Un commentaire zone de texte |
| Légende (bulle) | Annotation FreeText avec une ligne de repère de légende | Un commentaire légende |
| Note | Annotation Texte | Une note adhésive qui s'ouvre sur son texte |
| Tampon | Annotation Tampon | Un commentaire tampon |

Chacune est enregistrée avec :

- **son propre aspect**, dessiné exactement comme MarkupCraft le dessine à l'écran, pour qu'il soit identique dans tout lecteur et s'imprime de la même façon, badge de numéro de réserve compris ;
- **l'auteur**, **les dates de création et de modification**, **l'objet**, **le texte du commentaire** (pour les zones de texte et les légendes, le texte et le commentaire), **la couleur** et **l'opacité** ;
- **ses détails MarkupCraft** dans une entrée privée que les autres programmes ignorent : état, réserve, style et type, pour qu'elle se rouvre à l'identique.

## Fils de discussion et états

- Chaque réponse est enregistrée comme un commentaire de réponse lié à son annotation, avec son auteur, sa date et son texte. Les réponses n'ont pas d'icône propre sur la feuille.
- Chaque changement d'état est enregistré comme une réponse portant un état de révision. Les autres outils de révision l'affichent comme Accepté, Rejeté ou Terminé ; Ouvert est enregistré sans état.
- Une annotation dont l'état n'est pas Ouvert, sans changement d'état enregistré, reçoit une réponse d'état de révision, pour que les autres programmes voient aussi son état.
- Les réponses aux commentaires en lecture seule du fichier d'origine sont enregistrées de la même façon, liées à ce commentaire.

## Chaque feuille

- **Échelle :** une feuille calibrée reçoit une fenêtre de mesure couvrant la page (la manière standard d'enregistrer l'échelle d'une page) et la copie propre à MarkupCraft du calibrage.
- **Numéro de feuille :** un numéro saisi avec {{ui:Renommer la feuille}} devient l'étiquette de page. Lorsqu'une page d'un fichier en a une, chaque page de ce fichier reçoit une étiquette : son numéro saisi, sinon son ancienne étiquette, sinon son numéro de page.
- **Titre de feuille :** un titre saisi est enregistré pour MarkupCraft seulement ; les autres lecteurs ne l'affichent pas.

## Texte et caractères

Le texte est écrit en Helvetica, que tout lecteur PDF possède. Les lettres hors de l'ensemble Europe occidentale (Windows-1252) s'impriment en « ? » dans la copie ; le message d'enregistrement les compte.

## Feuilles de calcul et motifs

Les feuilles de calcul et les motifs sont conservés dans une entrée privée du PDF nommée `/MarkupCraftShell`. Les autres programmes PDF l'ignorent. Une ancienne version de MarkupCraft l'ignore aussi, et la supprime la prochaine fois qu'elle enregistre ce fichier.

## Ce qui arrive aux commentaires déjà présents

Lorsque vous ouvrez un PDF qui contient déjà des commentaires :

- Les commentaires propres à MarkupCraft sont relus exactement. Si un autre programme en a déplacé ou redimensionné un, sa nouvelle position l'emporte.
- Les rectangles, ellipses, lignes, polylignes, polygones, encres, zones de texte et notes adhésives venant d'autres programmes deviennent des annotations modifiables. **Lors de l'enregistrement, MarkupCraft supprime les originaux et les réécrit à sa manière**, avec leurs fenêtres contextuelles et leurs réponses. Leur aspect peut légèrement changer.
- Les états de révision venant d'autres programmes fixent l'état ; le plus récent l'emporte.
- Tout le reste (surlignages de texte, tampons d'autres programmes et types particuliers) est **conservé tel quel** dans la copie, en lecture seule.
- Les liens et les champs de formulaire sont conservés tels quels et ne sont pas listés.

Enregistrer à nouveau le même fichier ne double jamais rien : les annotations relues par MarkupCraft sont remplacées, et non ajoutées une seconde fois.

## Ce qui n'est pas modifié

Votre fichier d'origine sur le disque n'est jamais modifié. La copie n'est pas optimisée pour la taille : elle peut donc être un peu plus volumineuse que l'original. Les PDF protégés (chiffrés) ne peuvent pas être enregistrés.
