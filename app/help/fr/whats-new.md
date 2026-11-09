---
title: Nouveautés des versions 0.8 et 0.8.1
summary: Des annotations qui deviennent des tâches et se ferment seules, une liste simple des modifications entre révisions, des notes vocales et des décisions sur le plan, des fichiers de corrections pour le dessinateur, et les changements communs à la 0.8 : périphériques de saisie, lignes de la barre d'outils, Problèmes, davantage de langues.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, modifications, 0.8, 0.8.1, version, nouvelles fonctionnalités, tâche, tâches, personne assignée, jour d'échéance, en retard, vérifier maintenant, ce qui a changé, révisions, comparer, note vocale, décision, correction, fichier de réponses, dessinateur, assistant, mcp, problèmes, langues, périphériques de saisie, pavé tactile, lignes de la barre d'outils, grille des propriétés, mise à jour
from: 40368796
---

Voici ce qui a changé dans MarkupCraft 0.8 et 0.8.1, par rapport à la 0.7. La grande nouveauté : une annotation peut devenir une tâche, confiée à une personne ou à votre propre assistant, qui se ferme toute seule lorsque le dessin change réellement.

## Nouveautés

### Des annotations qui agissent

- **Transformer une annotation en tâche.** Sélectionnez une ou plusieurs annotations, ouvrez l'onglet {{ui:Tâches}} et choisissez {{ui:Faire de la sélection une tâche}}. Une tâche a un titre, une personne ou votre assistant connecté pour la réaliser, un jour d'échéance facultatif et un état ; elle conserve sa place sur la feuille ainsi que son fil de discussion. Voir [Transformer une annotation en tâche](topic:markups-that-act).
- **Des tâches qui se ferment toutes seules.** Une tâche peut surveiller le dessin situé dans son annotation. Ouvrez une révision plus récente de la feuille et choisissez {{ui:Vérifier maintenant}} : si les tracés de cette zone ont bougé de plus d'un cheveu, la tâche passe à Terminée, son annotation devient Achevée et une note dans le fil indique ce qui a changé. Un nouveau tampon de date, ou des traits déplacés de moins de 1,5 point, ne comptent pas. Une tâche peut aussi surveiller un élément de maquette : votre assistant signale l'élément avec `tasks_check`, et un signalement ultérieur différent, ou la suppression de l'élément, ferme la tâche. Une étape d'annulation la rouvre.
- **Retrouver le travail.** Filtrez la liste {{ui:Tâches}} par état et par destinataire, y compris {{ui:En retard}} ; choisissez {{ui:Confiée à}}, puis {{ui:Assistant}} pour voir ce qui attend votre assistant. Une tâche dont le jour d'échéance est dépassé apparaît comme un avertissement dans le panneau Problèmes. {{ui:CSV}} exporte la liste. Les tâches sont enregistrées dans le PDF avec l'annotation et voyagent via Live, comme les autres propriétés d'annotation.

### Ce qui a changé, en liste simple

- **Lister les modifications.** Ouvrez l'onglet {{ui:Comparer}}, puis {{ui:Comparer un jeu complet}}, choisissez le fichier le plus ancien et le plus récent, et choisissez {{ui:Lister les modifications}}. La liste commence par un total, puis décrit chaque feuille modifiée, la plus importante en premier : emplacement sur la feuille, taille (en unités réelles, ainsi qu'en pouces sur papier pour une feuille étalonnée), ajout ou suppression de traits, nombre d'annotations présentes à cet endroit, et mots apparus ou disparus. {{ui:Copier la liste}} place la liste dans le presse-papiers, et {{ui:CSV}} écrit une ligne par modification. Voir [Lister ce qui a changé entre les révisions](topic:what-changed-in-words).

### Notes vocales et décisions

- **Notes vocales.** Dans l'onglet {{ui:Notes}}, choisissez {{ui:Enregistrer une note vocale}}, puis {{ui:Arrêter l'enregistrement}} ; les enregistrements s'arrêtent d'eux-mêmes au bout de deux minutes. La note est épinglée au centre de la feuille ; faites-la glisser à l'endroit voulu et saisissez une légende dans {{ui:Propriétés}}. {{ui:Lire}}, dans la liste, la joue. L'enregistrement est sauvegardé dans le PDF.
- **Décisions.** {{ui:Épingler une décision}} écrit une ou deux phrases sur la feuille. Si elle remplace une décision antérieure, sélectionnez celle-ci dans {{ui:Elle remplace}} : l'ancienne reste, marquée Remplacée, et renvoie vers la nouvelle. Une étape d'annulation la retire. Voir [Épingler des notes vocales et des décisions sur une feuille](topic:voice-notes-and-decisions).

### Corrections vers la révision

- **Envoyer et répondre.** Dans l'onglet {{ui:Tâches}}, ouvrez {{ui:Corrections vers la révision}}, saisissez la révision à laquelle se rapportent les annotations, et choisissez {{ui:Exporter le fichier de corrections}}. Vous obtenez un fichier `.redline.json` contenant un élément par annotation ouverte : feuille, position (en fractions de la feuille, pour qu'un nouveau tracé à une autre taille reste aligné), texte, auteur, fil de discussion et tâche. Celui qui réalise les modifications répond Acceptée, Refusée ou Terminée dans un fichier `.redline-answers.json` ; {{ui:Charger le fichier de réponses…}} attribue ce statut à chaque annotation, ainsi que la remarque du dessinateur, en une seule étape d'annulation. Voir [Envoyer les annotations au dessinateur sous forme de corrections](topic:redline-to-revision).

### Assistants IA

- **Davantage d'outils.** Un assistant connecté via CadCraft Studio peut lister les tâches (`tasks_list`), en créer ou en modifier une (`task_set`), en retirer une (`task_clear`), vérifier une tâche par rapport à une révision plus récente ou à un élément (`tasks_check`), et lire la liste simple des modifications entre deux jeux de plans ouverts (`revisions_changes`). Il n'obtient que les outils que vous avez cochés sous le commutateur Assistants, et chaque modification est une étape d'annulation. Voir [Utiliser MarkupCraft avec un assistant IA](topic:use-with-ai-assistants).

## Dans toutes les applications

- **Langues.** CadCraft Studio propose désormais 54 langues. Dix sont nouvelles : lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili et ouzbek. Toutes les langues autres que l'anglais sont des traductions automatiques, en attendant la relecture d'un locuteur natif.
- **Périphériques de saisie.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Périphériques de saisie}} définit l'action d'un pavé tactile, des boutons latéraux de votre souris, d'un stylet, des tapotements au doigt, d'une souris 3D, d'une manette de jeu ou d'un contrôleur MIDI, pour toutes les applications ou seulement pour celle-ci. Tant que vous ne modifiez rien, chaque périphérique fonctionne comme auparavant. Voir [Utiliser un pavé tactile, une souris 3D ou une manette](common:input-devices).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose {{ui:Retour à la ligne}} (par défaut), {{ui:2 lignes}} et {{ui:1 ligne}}, afin de laisser plus de place au dessin. Voir [Disposer les panneaux](common:arrange-panels).
- **Grille des propriétés.** Les champs de style d'une annotation utilisent la grille commune, avec des catégories repliables et des colonnes d'étiquette et de valeur.
- **Panneau Problèmes.** Les avertissements de l'application, comme une tâche en retard, se regroupent dans un seul panneau Problèmes.
- **Live et modules complémentaires.** Les sessions Live sont décrites dans [Travailler ensemble en direct](common:work-together-live) ; la liste des modules complémentaires liés à votre compte se trouve dans [Modules complémentaires et liste de votre compte](common:addons-basics).
- **Connectez votre IA.** CadCraft Studio est le hub de votre propre assistant : connectez-le une seule fois pour les huit applications. Les applications ne contiennent aucune IA propre.

## Corrigé dans la 0.8.1

- **Studio peut changer de langue pendant son exécution.** Auparavant, l'application de bureau et les éditions empaquetées restaient en anglais. Ce point n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- Les installations de Studio 0.8 se voient proposer la 0.8.1 via {{ui:Paramètres}} › {{ui:Mises à jour}}.

## Pas encore disponible dans cette version

- **Pas encore signé numériquement.** Les programmes d'installation Windows et le fichier .dmg macOS ne portent pas encore de signature. Sous Windows, si SmartScreen bloque l'installation, choisissez {{ui:Informations complémentaires}}, puis {{ui:Exécuter quand même}}. Sur un Mac, faites un clic droit sur CadCraft Studio et choisissez {{ui:Ouvrir}}. Les versions pour les magasins d'applications sont suspendues.
- **La connexion de votre IA est incomplète par endroits.** La connexion en un clic dans Studio, le connecteur hébergé pour les assistants de navigateur et votre propre clé d'API dans Studio ne sont pas garantis pour cette version. La boucle des tâches a été testée, mais pas encore avec un véritable assistant.
- **Les vérifications de tâches exigent la même taille de page.** Une feuille replacée à une autre taille ne correspondra pas, et ses tâches ne se fermeront donc pas. Les feuilles sont associées par leur numéro, sinon par leur position dans le PDF.
- **Les notes vocales sont des enregistrements uniquement.** Il n'y a pas de transcription, et un assistant voit la durée, l'auteur et la légende d'une note, mais pas le son. L'enregistrement a été essayé avec un faux microphone dans un navigateur sans interface ; un véritable microphone sur un téléphone, une tablette ou un ordinateur portable reste à vérifier.
- **Les feuilles de calcul et les motifs dans un PDF** sont conservés dans une entrée privée du fichier. Une version antérieure de MarkupCraft ignore cette entrée et la supprime à son prochain enregistrement du fichier ; ouvrez et enregistrez donc un tel fichier avec la version 0.8 ou une version ultérieure.
- **Le côté dessinateur des corrections.** La lecture du fichier de corrections par CadCraft, et la réponse à ce fichier, ne sont pas encore disponibles.
- **Autres langues.** La barre de l'application en tamoul déborde de 528 px.

Tout le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la 0.7](topic:whats-new-0-7).
