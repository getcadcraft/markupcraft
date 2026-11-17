---
title: Venant d'un autre logiciel d'annotation
summary: Comment les habitudes d'un logiciel de bureau d'annotation PDF correspondent à MarkupCraft, et les différences qui surprennent.
keywords: changer de logiciel, migrer, habitudes, annotation PDF de bureau, coffre d'outils, liste des annotations, superposition, sessions, profil, raccourcis, différences
from: c8f323e1
---

Si vous revoyez des plans dans Bluebeam Revu (ou commentez des PDF dans un autre programme PDF de bureau), la plupart des fonctions de MarkupCraft vous seront familières : nuages, détails, un coffre d'outils, une liste des annotations, des statuts avec réponses, des mesures étalonnées, des superpositions de feuilles. La gestion des fichiers est la grande différence : lisez donc la section suivante même si vous sautez le reste.

## Les cinq différences qui comptent

1. **Enregistrer crée un nouveau fichier.** MarkupCraft fonctionne dans le navigateur et ne peut pas écraser le PDF sur votre disque. {{ui:Enregistrer (S)}} télécharge « <name> (marked up).pdf », et l'original reste inchangé. La fois suivante, ouvrez la copie « (marked up) », et supprimez vous-même les anciennes copies.
2. **Le PDF est enregistré quand vous enregistrez.** Jusque-là, une copie de récupération dans ce navigateur conserve vos annotations en cas de plantage ou d'onglet fermé, et MarkupCraft vous la propose à la prochaine ouverture. C'est un filet de sécurité : enregistrez le PDF pour conserver la revue.
3. **Votre profil est conservé dans le navigateur.** Votre nom d'auteur, vos paramètres d'outils et votre coffre d'outils sont conservés dans ce navigateur, sur cet ordinateur. Un autre navigateur ou ordinateur repart de zéro, et effacer les données du site les supprime. Exportez votre coffre d'outils comme sauvegarde. Voir [Ce qui reste dans ce navigateur](topic:browser-storage).
4. **Pas encore de sessions partagées.** Il n'existe ni session de revue partagée en direct ni projet dans le cloud. La revue voyage dans le PDF : vous enregistrez, envoyez la copie, la personne suivante répond et enregistre.
5. **L'échelle est par feuille, et seulement par feuille.** Il n'existe ni fenêtres de présentation dans une feuille, ni « appliquer cette échelle à toutes les pages ». Étalonnez chaque feuille que vous mesurez.

## Habitude par habitude

| Vous avez l'habitude de | Dans MarkupCraft |
|---|---|
| Panneau des vignettes, étiquettes de page | {{ui:Feuilles}} à gauche. Les noms viennent des étiquettes de page ou sont lus dans le cartouche ; corrigez-les avec {{ui:Renommer la feuille}}. |
| Ouvrir plusieurs PDF comme un ensemble | Ouvrez-les tous en même temps ; ils deviennent une seule liste. Aucun fichier d'ensemble n'est enregistré : rouvrez les mêmes PDF la fois suivante. |
| Coffre d'outils avec des jeux d'outils | Onglet {{ui:Outils}} : un coffre par navigateur, des outils enregistrés avec leur style et leur sujet. Partagez-les par {{ui:Exporter}} et {{ui:Importer}} sous forme de fichier JSON. Les fichiers de jeux d'outils d'autres programmes ne peuvent pas être importés. |
| Panneau des propriétés | Onglet {{ui:Propriétés}} : statut, sujet, commentaire, style, réponses et élément de réserve réunis au même endroit. |
| Liste des annotations avec colonnes | Onglet {{ui:Annotations}} avec des filtres par feuille, auteur, statut et type. Export CSV ou BCF. Pas encore de colonnes personnalisées, ni de récapitulatif PDF ou de classeur. |
| Statut et état de revue | {{ui:Statut}} : Ouvert, Accepté, Rejeté, Terminé. Pas de jeux de statuts personnalisés. Enregistrés comme des états de revue standard. |
| Réponses à une annotation | Le fil « Réponses » dans {{ui:Propriétés}}, avec les changements de statut consignés. Une réponse envoyée ne peut pas être modifiée. |
| Étalonner, puis longueur, surface, comptage | {{ui:Étalonner}}, {{ui:Longueur}} ({{key:M}}), {{ui:Surface}} ({{key:Q}}, donne la surface et le périmètre), {{ui:Compter}} ({{key:U}}). Pas encore d'angle, de rayon, de volume, de longueur de polyligne ni de découpes. |
| Superposer des pages | Onglet {{ui:Comparer}} : rouge pour l'ancienne, bleu pour la nouvelle, alignement sur deux points. Pas de « comparaison de documents » avec nuages automatiques. |
| Tampons | {{ui:Tampon}} avec six tampons intégrés et un libellé personnalisé, signé de votre nom et de la date. Pas encore de tampons image ni de tampons signature. |
| Suivi des réserves ou des problèmes | Onglet {{ui:Liste de réserves}} : éléments numérotés avec responsable, échéance et statut ; export CSV. |
| Session de collaboration en direct | Pas encore disponible. Faites circuler le PDF enregistré. |
| {{ui:Aplatir dans la page à l'enregistrement}} | Pas encore disponible. Les annotations restent des commentaires que les autres visionneuses peuvent afficher et imprimer. |
| Calques pour les annotations | Pas encore disponible. Utilisez les sujets, les auteurs et les filtres de la liste pour trier les commentaires. |
| Liens entre feuilles | Pas encore disponible. |
| Barre d'espace pour le panoramique, molette pour le zoom | Identique : maintenez {{key:Space}} et faites glisser ; la molette zoome sous le pointeur. La molette ne fait jamais défiler la page. |

## Touches différentes

Beaucoup de touches à une lettre sont ce qu'on imagine, mais vérifiez celles-ci avant que vos doigts ne le fassent pour vous :

- {{key:K}} est {{ui:Détail}}, et {{key:Q}} est {{ui:Surface}}. Si vous êtes habitué à Q pour les détails, cela démarrera une surface ici.
- {{key:C}} est le cadre {{ui:Nuage}} ; {{key:Shift+C}} est {{ui:Nuage libre}}.
- {{key:M}} est {{ui:Longueur}}, {{key:U}} est {{ui:Compter}}, {{key:Y}} est {{ui:Polyligne}}, {{key:G}} est {{ui:Polygone}}, {{key:I}} est {{ui:Surlignage}}.
- {{key:Mod+D}} duplique la sélection (au lieu du signet du navigateur).
- {{key:Mod+Plus}} et {{key:Mod+Minus}} zooment la feuille, et non la page du navigateur.
- Toute touche peut être modifiée : voir ci-dessous.

:::tip
Si vos doigts connaissent Bluebeam Revu, choisissez le style de menu {{ui:Revue PDF}} dans {{ui:Paramètres}} › {{ui:MarkupCraft}} › {{ui:Menus, touches et souris}} : une barre de menus (Fichier, Modifier, Affichage, Document, Annotation, Mesure, Fenêtre) au-dessus d'une rangée d'outils de revue, {{key:Q}} pour un détail, {{key:H}} pour le surligneur, {{key:N}} pour un polygone, et les mesures sur {{key:Alt+Shift}} avec une lettre. Toute touche peut aussi y être modifiée. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).
:::

La liste complète figure dans [Clavier et souris](topic:keyboard).

## Ce qui fonctionne autrement que prévu

- **Les outils restent actifs.** Après un nuage, vous dessinez encore des nuages. {{key:Esc}} une fois efface la sélection, deux fois revient à {{ui:Sélectionner}}.
- **Le texte et les détails ont besoin de texte.** Si vous terminez sans rien saisir, aucune annotation n'est ajoutée. Les notes restent vides.
- **Les mesures ont besoin d'une échelle d'abord.** {{ui:Longueur}} et {{ui:Surface}} passent à {{ui:Étalonner}} sur une feuille non étalonnée, puis reviennent après.
- **Commentaires venant d'autres programmes.** Les rectangles, ellipses, lignes, polylignes, polygones, traits d'encre, zones de texte et notes adhésives créés ailleurs deviennent des annotations MarkupCraft modifiables, et sont réécrits à la façon de MarkupCraft lors de l'enregistrement (leur apparence peut légèrement changer). Les surlignages de texte, les tampons d'autres programmes et les autres types particuliers restent en lecture seule : vous pouvez y répondre, mais pas les modifier.
- **Les caractères hors lettres de l'Europe de l'Ouest** s'impriment sous forme de « ? » dans le PDF enregistré. Voir [Enregistrer le PDF annoté](topic:save-the-marked-up-pdf).
- **Les dates des tampons** utilisent UTC : un tampon fait tard le soir sur le continent américain peut donc afficher la date du lendemain.
- **Les mesures sont transférées** comme des commentaires de mesure standard, et chaque feuille étalonnée conserve son échelle ; un programme qui lit les mesures PDF peut généralement les afficher. Le comportement exact dépend de ce programme.

## Utiliser les deux

Vous pouvez faire des allers-retours. Les commentaires faits ailleurs s'ouvrent dans MarkupCraft, et le PDF « (marked up) » s'ouvre dans d'autres programmes PDF avec chaque annotation, réponse et statut visibles. Ce que seul MarkupCraft relit (responsable et échéance de la réserve, statut de l'élément) est conservé dans le fichier pour MarkupCraft.
