---
title: Nouveautés de la version 0.9
summary: Notes et plan de travail qui ne s'impriment jamais, notes privées chiffrées et copie épurée pour le client, liens par lot pour tout un jeu de dessins, un outil Arc à dix méthodes, suivi d'un autre relecteur dans Live, et correction des annotations supprimées qui restaient dans le PDF enregistré.
keywords: nouveautés, quoi de neuf, 0.9, notes de version, journal des modifications, changements, notes, plan de travail, notes privées, phrase de passe, chiffré, masquer les notes, afficher les notes, copie épurée, capture, liens par lot, renvois de feuilles, lier les feuilles, cartouche, numéro de feuille, additif, renumérotation, lien PDF, arc, méthodes d'arc, arc à trois points, rayon, suivre, suivez-moi, live, vue de classe, liste des personnes, annotation supprimée, info-bulles, titres d'onglets, 0.8, 0.8.1, version, nouvelles fonctions, tâche, tâches, responsable, jour d'échéance, en retard, vérifier maintenant, ce qui a changé, révisions, comparer, note vocale, décision, correction, fichier de réponses, dessinateur, assistant, mcp, problèmes, langues, périphériques de saisie, pavé tactile, lignes de la barre d'outils, grille des propriétés, mise à jour
from: dbdd7ed4
---

Voici ce qui a changé dans MarkupCraft 0.9, par rapport à 0.8.1. L'idée principale est que vos notes de travail restent hors de la page que reçoit le client, et qu'un jeu de dessins complet peut être lié en une seule passe.

## Nouveautés

### Notes, plan de travail et notes privées

- **Le plan de travail.** La zone autour de chaque feuille est un bureau : tout ce qui est dessiné, saisi ou collé à côté de la feuille est une note et ne s'imprime jamais. Choisissez {{ui:Afficher le plan de travail}} pour dézoomer et disposer d'espace, ou {{ui:Capture sur le plan de travail}}, tracez un cadre, puis {{ui:Sur le plan de travail}} pour placer une image d'une partie du dessin à côté de la feuille. Une capture est une image et ne change pas lorsque la feuille change. Voir [Notes, plan de travail et notes privées](topic:notes-and-pasteboard).
- **Afficher et masquer les notes.** Toute annotation peut être une note : réglez {{ui:Les nouvelles annotations sont}} dans l'onglet {{ui:Notes}}, ou {{ui:Cette annotation est}} dans {{ui:Propriétés}}. {{key:Shift+H}} ou l'interrupteur {{ui:Notes}} sous la feuille masque et affiche toutes les notes d'un coup. Les notes sont exclues de l'impression, des copies aplaties, des listes et des exports, et les autres lecteurs PDF ne les affichent pas. Votre PDF enregistré les conserve pour la prochaine fois que vous l'ouvrez dans MarkupCraft.
- **Notes privées.** Choisissez {{ui:Définir une phrase de passe}}, puis faites d'une annotation {{ui:Une note privée}}. Elle est chiffrée dans le fichier avec une phrase de passe d'au moins 10 caractères, et il n'existe aucune récupération : personne, nous compris, ne peut l'ouvrir sans la phrase de passe. {{ui:Verrouiller}} range les notes privées ; {{ui:Rester déverrouillé sur cet appareil}} est désactivé par défaut.
- **Enregistrer une copie épurée.** {{ui:Enregistrer une copie épurée}} supprime toutes les notes, les notes privées et tout ce qui se trouve sur le plan de travail. Utilisez-la pour le fichier qui part chez le client.

### Lier un jeu complet

- **Liens par lot.** Choisissez {{ui:Pages}} › {{ui:Liens par lot…}}, ou {{ui:Lier les renvois de feuilles…}} sous {{ui:Rechercher du texte}} dans le panneau {{ui:Feuilles}}. L'étape 1 liste le numéro et le nom de chaque feuille, tels qu'ils sont lus dans son cartouche ; corrigez ceux qui sont faux. L'étape 2 liste les renvois trouvés, comme `3/A-501` ou `DETAIL 2 ON A-501`. {{ui:Sera lié}} indique la feuille et la vue de chacun, {{ui:Non lié}} indique les numéros qu'aucune feuille ouverte ne possède, et {{ui:Créer les liens}} les crée tous en une seule étape d'annulation. Relancez-le après un additif ou une renumérotation ; les liens que vous avez créés à la main ne sont jamais modifiés. Un lien avec une vue est enregistré comme lien PDF, de sorte que les autres lecteurs ouvrent aussi le détail. Voir [Liens entre feuilles](topic:sheet-links).

### Dessin

- **Arc, dix méthodes.** L'outil {{ui:Arc}} ({{key:O}}) dispose maintenant d'une zone {{ui:Méthode de l'arc}} au-dessus de la page, avec dix façons de tracer un arc ; l'angle, la longueur, le rayon et le sens peuvent être cliqués ou saisis. Voir [Tracer un arc de dix façons](topic:draw-an-arc).

### Travailler ensemble

- **Suivre un relecteur.** Dans une session Live, choisissez {{ui:Suivre}} à côté du nom d'une personne : votre vue suit la sienne ; un déplacement ou un zoom de votre part arrête le suivi. L'hôte peut choisir {{ui:Demander à tous de me suivre}}. La liste des personnes indique la couleur, le nom et la feuille de chacun, ainsi que l'heure de sa dernière modification. Voir [Suivre un autre relecteur dans une session Live](topic:follow-in-live).

## Dans toutes les applications

- Les info-bulles sont celles de Bootstrap, la bulle de démarrage peut être fermée, les bandeaux d'onglets défilent lorsqu'ils débordent, et les titres d'onglets du navigateur affichent `<document> — MarkupCraft | CadCraft`.
- Un panneau à plusieurs sections en ouvre une et ferme les autres (un cadenas à côté du chevron en garde une ouverte) ; un interrupteur des {{ui:Paramètres}} désactive ce comportement.
- Chaque application démarre avec une collection par défaut d'éléments de bibliothèque.
- Les unités de masse et de température sont disponibles dans les paramètres d'unités.

## Corrigé

- **Les annotations supprimées ne restent plus lisibles dans le PDF enregistré.** Auparavant, l'enregistrement retirait de sa page une annotation supprimée ou réécrite, mais laissait l'objet, avec son texte, dans le fichier. L'enregistrement supprime maintenant ces objets. Les fichiers enregistrés par des versions antérieures les contiennent encore jusqu'à ce que vous les enregistriez à nouveau.

## Limites à connaître

- Les liens par lot ont été essayés sur nos propres jeux de test. Les jeux réels dessinent les bulles de bien des façons : sur un jeu client, certaines vues peuvent être manquées. Les feuilles scannées demandent d'abord {{ui:Lire le texte (OCR)…}}.
- Les notes, les notes privées et le plan de travail ont été testés dans un navigateur sans interface et sur nos propres fichiers, pas avec un grand jeu vectoriel réel, et pas dans une vraie session Live à deux personnes. Changer une phrase de passe n'est pas disponible. Les versions antérieures à la 0.9 n'affichent pas les notes.
- La vue de classe est la liste des personnes ; elle n'a pas encore été essayée avec un vrai enseignant et de vrais élèves.
- Les langues autres que l'anglais sont des brouillons automatiques jusqu'à leur relecture par un locuteur natif.
- Les installeurs Windows ne sont pas signés (Informations complémentaires, puis Exécuter quand même) ; l'image disque macOS n'est pas notariée (clic droit, puis Ouvrir).

## Plus tôt : 0.8 et 0.8.1

Voici ce qui a changé dans MarkupCraft 0.8 et 0.8.1, par rapport à 0.7. La grande nouveauté est qu'une annotation peut être une tâche, réalisée par quelqu'un ou par votre propre assistant, et qui se referme d'elle-même lorsque le dessin change réellement.

### Nouveautés

**Des annotations qui agissent**

- **Transformer une annotation en tâche.** Sélectionnez une ou plusieurs annotations, ouvrez l'onglet {{ui:Tâches}} et choisissez {{ui:Faire de la sélection une tâche}}. Une tâche a un titre, une personne ou votre assistant connecté pour la réaliser, une échéance facultative (un jour) et un état ; elle garde sa place sur la feuille et son fil. Voir [Transformer une annotation en tâche](topic:markups-that-act).
- **Des tâches qui se referment d'elles-mêmes.** Une tâche peut surveiller le dessin situé dans son annotation. Ouvrez une révision plus récente de la feuille et choisissez {{ui:Vérifier maintenant}} : si les traits de cette zone ont changé de plus d'un poil, la tâche passe à Terminée, son annotation devient Terminée et une note dans le fil indique ce qui a changé. Un nouveau tampon de date, ou des traits qui ont bougé de moins de 1.5 point, ne comptent pas. Une tâche peut aussi surveiller un élément de modèle : votre assistant signale l'élément avec `tasks_check`, et un signalement ultérieur qui diffère, ou un élément supprimé, ferme la tâche. Une seule étape d'annulation la rouvre.
- **Retrouver le travail.** Filtrez la liste des {{ui:Tâches}} par état et par destinataire, y compris {{ui:En retard}} ; choisissez {{ui:Confiée à}}, puis {{ui:Assistant}} pour voir ce qui attend votre assistant. Une tâche dont l'échéance est dépassée apparaît comme un avertissement dans le panneau Problèmes. {{ui:CSV}} exporte la liste. Les tâches sont enregistrées dans le PDF avec l'annotation et circulent dans Live comme les autres propriétés d'annotation.

**Ce qui a changé, sous forme de liste simple**

- **Lister les modifications.** Ouvrez l'onglet {{ui:Comparer}}, puis {{ui:Comparer tout un jeu}}, choisissez le fichier antérieur et le fichier postérieur, et choisissez {{ui:Lister les modifications}}. La liste commence par un décompte, puis détaille chaque feuille modifiée, la plus grande modification en premier : où se trouve le changement sur la feuille, son étendue (en unités réelles, et en pouces sur le papier pour une feuille calibrée), si des traits ont été ajoutés ou supprimés, combien d'annotations s'y trouvent, et quels mots sont apparus ou ont disparu. {{ui:Copier la liste}} la place dans le presse-papiers et {{ui:CSV}} écrit une ligne par modification. Voir [Lister les modifications entre les révisions](topic:what-changed-in-words).

**Notes vocales et décisions**

- **Notes vocales.** Dans l'onglet {{ui:Notes}}, choisissez {{ui:Enregistrer une note vocale}}, puis {{ui:Arrêter l'enregistrement}} ; les enregistrements s'arrêtent d'eux-mêmes au bout de deux minutes. La note est épinglée au centre de la feuille ; vous la glissez à l'endroit voulu et saisissez une légende dans {{ui:Propriétés}}, et {{ui:Lire}} dans la liste la joue. L'enregistrement est conservé dans le PDF.
- **Décisions.** {{ui:Épingler une décision}} écrit une ou deux phrases sur la feuille. Si elle remplace une décision antérieure, choisissez celle-ci dans {{ui:Elle remplace}} : l'ancienne reste, marquée Remplacée, et renvoie à la nouvelle. Une étape d'annulation la reprend. Voir [Épingler des notes vocales et des décisions sur une feuille](topic:voice-notes-and-decisions).

**Corrections vers la révision**

- **Envoyer et répondre.** Dans l'onglet {{ui:Tâches}}, ouvrez {{ui:Corrections vers la révision}}, saisissez la révision à laquelle se rapportent les annotations et choisissez {{ui:Exporter le fichier de corrections}}. Vous obtenez un fichier `.redline.json` avec un élément par annotation ouverte : feuille, position (en fractions de la feuille, pour qu'un nouveau tracé à une autre taille reste aligné), mots, auteur, fil et tâche. Celui qui dessine les modifications répond Accepté, Rejeté ou Terminé dans un fichier `.redline-answers.json` ; {{ui:Charger le fichier de réponses…}} donne à chaque annotation cet état et la note du dessinateur, en une seule étape d'annulation. Voir [Envoyer les annotations au dessinateur sous forme de corrections](topic:redline-to-revision).

**Assistants IA**

- **Plus d'outils.** Un assistant connecté via CadCraft Studio peut lister les tâches (`tasks_list`), en créer ou en modifier une (`task_set`), retirer la tâche (`task_clear`), la vérifier par rapport à une révision plus récente ou à un élément (`tasks_check`), et lire la liste simple des modifications entre deux jeux de plans ouverts (`revisions_changes`). Il n'obtient que les outils que vous cochez sous l'interrupteur Assistants, et chaque modification est une seule étape d'annulation. Voir [Utiliser MarkupCraft avec un assistant IA](topic:use-with-ai-assistants).

### Dans toutes les applications

- **Langues.** CadCraft Studio propose maintenant 54 langues. Dix sont nouvelles : lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili et ouzbek. Toutes les langues autres que l'anglais sont des brouillons automatiques jusqu'à leur relecture par un locuteur natif.
- **Périphériques de saisie.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Périphériques de saisie}} règle ce que font un pavé tactile, les boutons latéraux de votre souris, un stylet, les tapotements du doigt, une souris 3D, une manette de jeu ou un contrôleur MIDI, pour toutes les applications ou seulement pour celle-ci. Tant que vous ne changez rien, chaque périphérique fonctionne comme avant. Voir [Utiliser un pavé tactile, une souris 3D ou une manette](common:input-devices).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose {{ui:Retour à la ligne}} (par défaut), {{ui:2 lignes}} et {{ui:1 ligne}}, pour laisser plus de place au dessin. Voir [Disposer les panneaux](common:arrange-panels).
- **Grille des propriétés.** Les champs Style d'une annotation utilisent la grille commune, avec des catégories repliables et des colonnes d'étiquette et de valeur.
- **Panneau Problèmes.** Les avertissements de l'application, comme une tâche en retard, se regroupent dans un seul panneau Problèmes.
- **Live et modules complémentaires.** Les sessions Live sont décrites dans [Travailler ensemble en direct](common:work-together-live) ; la liste des modules complémentaires liés à votre compte se trouve dans [Modules complémentaires et liste de votre compte](common:addons-basics).
- **Connectez votre IA.** CadCraft Studio est le point central pour votre propre assistant : connectez-le une seule fois pour les huit applications. Les applications ne contiennent aucune IA propre.

### Corrigé dans 0.8.1

- **Studio peut changer de langue pendant son exécution.** Auparavant, l'application de bureau et les éditions packagées restaient en anglais. Ce point n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- Les installations de Studio 0.8 se voient proposer la 0.8.1 via {{ui:Paramètres}} › {{ui:Mise à jour}}.

### Pas encore dans cette version

- **Non signée.** Les installeurs Windows et l'image disque macOS (.dmg) ne portent pas encore de signature. Sous Windows, si SmartScreen bloque l'installeur, choisissez {{ui:Informations complémentaires}}, puis {{ui:Exécuter quand même}}. Sur un Mac, faites un clic droit sur CadCraft Studio et choisissez {{ui:Ouvrir}}. Les versions pour les magasins sont en attente.
- **Le branchement de votre IA est inachevé sur certains points.** Le branchement en un clic dans Studio, le connecteur hébergé pour les assistants dans le navigateur et votre propre clé d'API dans Studio ne sont pas garantis pour cette version. La boucle des tâches a été testée, mais pas encore avec un vrai assistant.
- **Les vérifications de tâches exigent la même taille de page.** Une feuille retracée à une autre taille ne correspondra pas, donc ses tâches ne se referment pas. Les feuilles sont appariées par numéro de feuille, sinon par position de page.
- **Les notes vocales ne sont que des enregistrements.** Il n'y a pas de transcription, et un assistant voit la durée, l'auteur et la légende d'une note, pas le son. L'enregistrement a été essayé avec un faux microphone dans un navigateur sans interface ; un vrai microphone sur un téléphone, une tablette ou un ordinateur portable reste à vérifier.
- **Les feuilles de calcul et les motifs dans un PDF** sont conservés dans une entrée privée du fichier. Une ancienne version de MarkupCraft ignore cette entrée et la supprime lors de son prochain enregistrement du fichier ; ouvrez et enregistrez donc un tel fichier avec la 0.8 ou une version ultérieure.
- **La partie dessinateur des corrections.** La lecture du fichier de corrections par CadCraft et la réponse à celui-ci ne sont pas encore disponibles.
- **Autres langues.** La barre d'application en tamoul déborde de 528 px.

Le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet). Pour la version précédente, voir [Nouveautés de la version 0.7](topic:whats-new-0-7).
