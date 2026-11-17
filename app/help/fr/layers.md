---
title: Calques d'annotations
summary: Placez les annotations sur des calques nommés, puis affichez, masquez ou verrouillez chaque calque ; les autres visionneuses PDF peuvent aussi les activer ou désactiver.
keywords: calques, calque, masquer, afficher, verrouiller, grouper les annotations, discipline, mécanique, électrique, contenu facultatif, ocg, visibilité
from: 0fbb4c26
---

Les calques regroupent des annotations, par exemple par discipline ou par relecteur. Masquez un calque pour voir le dessin situé dessous, ou verrouillez-le pour que ses annotations ne soient pas déplacées par accident.

## Créer un calque et dessiner dessus

1. Ouvrez {{ui:Layers}}, en haut du panneau {{ui:Sheets}}.
2. Choisissez {{ui:New layer}}, saisissez un nom comme `Mechanical`, puis choisissez {{ui:Add layer}}.
3. Le nouveau calque devient le calque courant : toute annotation tracée ensuite s'y place. Choisissez le nom d'un autre calque, ou {{ui:No layer}}, pour changer l'endroit où se placent les nouvelles annotations.

Pour déplacer une annotation vers un autre calque, sélectionnez-la et choisissez le calque sous {{ui:Layer}} dans {{ui:Properties}}. {{ui:New layer…}} en bas de cette liste en crée un immédiatement. Le déplacement peut être annulé avec {{key:Mod+Z}}.

## Afficher, masquer et verrouiller

La ligne de chaque calque comporte deux boutons :

- L'**œil** affiche ou masque le calque. Les annotations masquées ne sont pas dessinées et ne peuvent pas être sélectionnées ; elles comptent toujours dans la liste {{ui:Markups}}.
- Le **cadenas** garde les annotations du calque sur la feuille, mais empêche de les sélectionner, de les déplacer ou de les supprimer.

Le bouton crayon renomme un calque et déplace ses annotations avec lui. Filtrez la liste {{ui:Markups}} par {{ui:Layer}} pour voir les annotations d'un seul calque.

## Dans le PDF enregistré

Chaque calque devient un calque PDF (contenu facultatif). Les autres visionneuses PDF affichent les calques dans leur panneau de calques et peuvent les activer ou les désactiver ; un calque que vous avez masqué reste masqué là aussi. Les calques que le dessin possédait déjà, comme les calques de CAO, restent inchangés. Lorsque vous rouvrez la copie dans MarkupCraft, les annotations reviennent sur leurs calques, masquées et verrouillées comme vous les avez laissées.

## Bon à savoir

- Masquer et verrouiller ne sont pas des modifications : ils ne s'annulent pas avec {{key:Mod+Z}}, mais ils sont enregistrés avec le PDF.
- Copier et coller conservent le calque d'une annotation.
- Une copie aplatie dessine chaque annotation dans la page, quel que soit son calque. Voir [Enregistrer une copie aplatie](topic:flatten).
