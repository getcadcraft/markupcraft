---
title: Utiliser MarkupCraft avec un assistant IA
summary: Laissez votre propre assistant IA ou script lister les annotations d'un jeu, en ajouter de simples, définir leur statut, répondre et exporter la liste : autorisations, connexion via CadCraft Studio et journal d'activité.
keywords: ia, assistant, agent, mcp, model context protocol, script, automatisation, annotations, révision, autorisations, déconnexion, activité
from: 095f2977
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (ou un script que vous avez écrit) travailler avec MarkupCraft, et comment décider de ce qu'il a le droit de modifier.

MarkupCraft n'a **pas d'IA propre** et n'envoie rien nulle part. Vous apportez l'assistant : tout programme qui parle le Model Context Protocol (MCP). MarkupCraft lui fournit seulement des outils, et vous choisissez lesquels.

## L'activer

1. Ouvrez {{ui:Paramètres}} (l'engrenage de la barre d'application, ou {{key:Mod+,}}) et allez dans l'onglet {{ui:MarkupCraft}}.
2. Sous {{ui:Assistants}}, cochez **Autoriser les assistants IA et les scripts à utiliser MarkupCraft**. Elle est désactivée tant que vous ne la cochez pas.
3. Choisissez ce qu'il peut faire : **Lire** est coché au départ ; cochez **Modifier**, **Enregistrer** ou **Exporter** seulement lorsque vous en avez besoin.

Les outils qui sortent des autorisations cochées ne sont pas proposés à l'assistant ; s'il en demande un quand même, MarkupCraft le refuse et l'inscrit dans le journal d'activité. Désactiver le commutateur met fin à toutes les connexions d'un coup ; {{ui:Réinitialiser les paramètres de MarkupCraft}} le désactive aussi.

## Connecter votre assistant

Les assistants se connectent via **CadCraft Studio** sur votre ordinateur : Studio lance un petit serveur auquel seul cet ordinateur peut accéder, protégé par un jeton qu'il génère à chaque démarrage. Dans Studio, choisissez {{ui:Connecter un assistant}} et copiez l'adresse et le jeton dans votre assistant (Studio affiche les réglages exacts à coller). Ne partagez jamais le jeton.

:::note
Un onglet de navigateur ne peut pas ouvrir de connexion pour un assistant : dans les applications web, le commutateur n'a aucun effet tant que vous n'utilisez pas CadCraft Studio sur votre ordinateur.
:::

## Vous gardez le contrôle

- **Chaque modification est une seule étape d'annulation**, étiquetée avec le nom que lui donne l'assistant (par exemple « Assistant : ajouter cloudrect »). {{key:Mod+Z}} annule la dernière modification de l'assistant dans son ensemble.
- **Vous savez quand un assistant est connecté.** Un bouton dans la barre d'application affiche le nom de l'assistant tant qu'il est connecté ; cliquez dessus pour voir ce qu'il peut faire, ou pour le **déconnecter**.
- **Activité.** {{ui:Paramètres}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activité}} liste chaque appel : quand, quel outil, terminé ou refusé. {{ui:Enregistrer le journal}} en conserve une copie.

## Ce qu'un assistant peut demander

| Outil | Autorisation | Ce qu'il fait |
|---|---|---|
| `app_info`, `sheets_list` | Lire | Les jeux ouverts, leurs feuilles et le nombre d'annotations de chacun |
| `markups_list` | Lire | Les annotations avec leur type, leur feuille, leur texte, leur commentaire, leur mesure, leur statut, leur auteur et leurs réponses, filtrées par feuille, statut, type ou auteur |
| `markup_add` | Modifier | Ajoute un rectangle, un nuage, une ellipse, une zone de texte, une note, une ligne ou une flèche sur une feuille |
| `markup_status`, `markup_reply` | Modifier | Définit le statut d'une annotation (consigné dans son fil, signé par l'assistant) ; ajoute un commentaire à un fil |
| `markups_export` | Exporter | Le CSV ou BCF propre à la liste {{ui:Annotations}}, de ce qu'elle affiche (ses filtres tels que vous les avez réglés) ; dans Studio, il peut écrire le fichier dans un dossier que vous avez autorisé |
| `tasks_list` | Lire | Les annotations qui sont des tâches : assigné (personne ou assistant), jour d'échéance, état, lien, mode de clôture. `assignee: "assistant"` liste le travail en attente d'un assistant |
| `task_set`, `task_clear` | Modifier | Transforme une annotation en tâche ou la modifie (titre, assigné, échéance, état, lien) ; retire la tâche |
| `tasks_check` | Modifier | Clôt les tâches dont la zone de plan liée ou l'élément de modèle a réellement changé ; transmettez les états des éléments lus dans l'autre application |
| `revisions_changes` | Lire | La liste simple des changements entre deux jeux de plans ouverts, à reformuler avec vos propres mots |
| `pins_list`, `decision_add` | Lire, Modifier | Notes vocales (durée, auteur, date, légende ; jamais le son, ni transcription) et décisions ; épingler une décision et en remplacer une précédente |
| `redline_export`, `redline_answer` | Exporter, Modifier | Écrit le fichier de révision (redline) pour le dessinateur ; applique les réponses du dessinateur |

Une annotation ajoutée par un assistant porte son nom comme auteur : le nom que le programme de l'assistant se donne, suivi de « (assistant) », ou de « (assistant pour <votre nom>) » une fois que vous avez défini votre nom de réviseur. Ses changements de statut et ses réponses sont signés de la même façon. Chaque action est une étape d'annulation. L'enregistrement du PDF annoté reste de votre ressort : utilisez {{ui:Enregistrer (S)}} comme d'habitude.

Sans ouvrir MarkupCraft, le serveur MCP CadCraft liste les annotations d'un PDF situé dans un dossier que vous indiquez (`markups_list`), et `cadcraft info Set.pdf` les affiche en ligne de commande.

## En cas de problème

- **L'assistant ne voit aucun outil MarkupCraft :** vérifiez que le commutateur est activé dans cette fenêtre, et que la fenêtre est ouverte dans Studio.
- **« needs the edit permission » (nécessite l'autorisation de modification) :** cochez **Modifier** sous {{ui:Assistants}}, puis redemandez.
- **Erreurs « 401 » ou « token » :** le jeton a changé (Studio a redémarré, ou {{ui:Nouveau jeton}}). Copiez le nouveau jeton dans les réglages de l'assistant.

## Voir aussi

- [Recettes pour assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.
