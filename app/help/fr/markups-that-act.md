---
title: Transformer une annotation en tâche
summary: Confier une annotation à une personne ou à votre assistant, lui donner une échéance et un lien vers le dessin ou l'élément de modèle concerné, et la voir se clore lorsque cela change réellement.
keywords: tâche, tâches, responsable, assistant, échéance, en retard, lien, se clôt, modifié, élément, zone du dessin, annotations actives, MCP
from: 9e970202
---

Une tâche est une annotation que quelqu'un doit réaliser. Elle conserve sa place sur la feuille et son fil, et ajoute un titre, une personne assignée, une échéance, un état et, si vous le souhaitez, un lien vers l'objet concerné.

## Créer une tâche

1. Sélectionnez une ou plusieurs annotations.
2. Ouvrez l'onglet {{ui:Tasks}} et choisissez {{ui:Make selected a task}}.
3. Renseignez le titre (il reprend le texte de l'annotation), le destinataire ({{ui:Person}} ou {{ui:Assistant}}, et un nom), une échéance facultative, et ce qu'il faut surveiller.

Une tâche d'assistant est un travail pour l'assistant que vous avez connecté à MarkupCraft (voir [Utiliser MarkupCraft avec un assistant IA](topic:use-with-ai-assistants)). MarkupCraft ne contient pas d'assistant : il se contente de lister le travail et de recevoir les réponses de l'assistant. Choisir {{ui:Assigned to}}, puis {{ui:Assistant}} dans la liste, affiche ce qui l'attend.

## Surveiller un changement

- **Le dessin à l'intérieur de l'annotation.** MarkupCraft conserve les traits à l'intérieur de la boîte de l'annotation tels qu'ils sont. Lorsque vous ouvrez une révision plus récente de cette feuille (un second fichier avec le même numéro de feuille, ou la même position de page), choisissez {{ui:Check now}} : si les traits de cette zone diffèrent de plus qu'un infime écart, la tâche est close.
- **Un élément de modèle.** Indiquez l'application et l'identifiant de l'élément. Votre assistant lit l'élément avec les outils propres à l'autre application et le signale avec `tasks_check`. Le premier signalement est conservé comme état de départ ; un signalement ultérieur qui diffère clôt la tâche. Un élément supprimé la clôt aussi.
- **Rien.** Une tâche simple que vous terminez à la main.

Une tâche close est marquée Terminée, son annotation passe à Terminé, et une note dans le fil indique ce qui a changé. Une seule étape d'annulation la rouvre.

**Limite :** la vérification suppose que la révision plus récente utilise la même origine et la même taille de page. Une feuille retracée à une autre taille ne correspondra pas, donc ses tâches ne se clôtureront pas. Les feuilles sont appariées par numéro de feuille, sinon par position de page ; MarkupCraft ne redimensionne pas une révision pour l'adapter à l'autre.

Retracer le même dessin avec un nouveau tampon de date, ou des traits déplacés de moins de 1.5 points, ne compte pas comme un changement. Si aucune révision plus récente n'est ouverte, la tâche reste ouverte et la barre d'état l'indique.

## La liste

La liste des {{ui:Tasks}} peut être filtrée par état et par destinataire, y compris {{ui:Overdue}}. Une tâche dont l'échéance est dépassée s'affiche dans le panneau des problèmes comme un avertissement. {{ui:CSV}} exporte la liste.

Les tâches sont enregistrées dans le PDF avec l'annotation, et circulent via Live comme les autres propriétés d'annotation.
