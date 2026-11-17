---
title: Suivre les DDR, les soumissions et les journaux de chantier
summary: Placez les DDR, les soumissions et les journaux de chantier sur les feuilles, avec numéros, responsables, échéances et fils de discussion ; filtrez ce qui est en retard ; exportez en CSV ou BCF ; travaillez hors ligne et fusionnez des copies.
keywords: ddr, demande de renseignements, soumission, journal de chantier, rapport de chantier, cahier de chantier, chantier, construction, en retard, échéance, qui me sont attribués, fil de discussion, pièce jointe, fusionner, hors ligne, tablette, bcf, csv, chantier
from: 95039c5a
---

L'onglet {{ui:Chantier}} conserve trois types d'enregistrements à côté de vos annotations. Chacun est lié à une feuille ; une DDR ou une soumission a aussi une épingle à l'endroit de la feuille auquel elle se rapporte.

- **DDR** : une question pour l'équipe de conception. Statuts : Ouvert, Répondu, Fermé.
- **Soumission** : un élément à examiner avant que le travail ne commence. Statuts : Ouvert, En cours de revue, Approuvé, Approuvé avec observations, Reprendre et soumettre à nouveau, Fermé.
- **Journal de chantier** : la météo du jour, le nombre de personnes présentes sur le site et le travail réalisé. Statuts : Brouillon, Final.

Chaque enregistrement a son propre numéro de type (RFI-0001, SUB-0001, LOG-0001), un titre, un texte, un responsable, une échéance, un fil de réponses et une liste de noms de pièces jointes.

## Ajouter un enregistrement

1. Ouvrez l'onglet {{ui:Chantier}} et choisissez {{ui:DDR}} ou {{ui:Soumission}}.
2. Touchez ou cliquez sur la feuille à laquelle il appartient. Une épingle apparaît et l'enregistrement s'ouvre dans l'onglet.
3. Renseignez le titre, la question ou la description, la personne à qui il est attribué et sa date d'échéance.

Un journal de chantier est ajouté à la feuille ouverte, sans épingle. {{ui:Placer l'épingle}} en place une plus tard ; {{ui:Déplacer l'épingle}} déplace n'importe quelle épingle. Toucher une épingle sur la feuille ouvre son enregistrement.

## Répondre et suivre

Modifiez le {{ui:Statut}} : le changement est consigné dans le fil. Rédigez une réponse et choisissez {{ui:Envoyer la réponse}} (Ctrl+Enter envoie aussi). Les pièces jointes ne sont que des noms : saisissez-en un ou choisissez des fichiers, et la liste indique à l'équipe ce qui accompagne l'enregistrement. Les fichiers eux-mêmes restent à leur emplacement.

Un enregistrement dont l'échéance est dépassée et qui attend toujours (une DDR qui n'est ni Répondu ni Fermé, une soumission non tranchée) est marqué **En retard**, en rouge, dans la liste et sur son épingle.

## Trouver l'essentiel

Les filtres se trouvent au-dessus de la liste : type, statut, échéance (en retard, échéance dans 7 jours, avec ou sans échéance), cette feuille ou toutes les feuilles, une recherche de texte, et {{ui:Qui me sont attribués}}, qui compare le responsable au nom sous lequel MarkupCraft vous connaît (voir [Définir votre nom](topic:set-your-name)). La ligne sous les filtres compte ce qui est affiché et ce qui est en retard.

## Exporter

{{ui:CSV}} écrit les enregistrements listés sous forme de tableur. {{ui:BCF}} les écrit comme sujets BCF, chacun avec un instantané de son emplacement sur la feuille, afin que d'autres outils BCF puissent les lister. Les deux suivent les filtres.

## Enregistrer, travail hors ligne et fusion des copies

Les enregistrements sont sauvegardés dans le PDF lorsque vous l'enregistrez, et ils reviennent à son ouverture. Rien ne nécessite de réseau : ajoutez, modifiez, répondez et enregistrez sur une tablette dans un sous-sol, puis rapportez le PDF. Les anciens PDF, et ceux provenant d'autres programmes, s'ouvrent comme auparavant.

Pour réunir deux copies, ouvrez l'une et choisissez {{ui:Fusionner}}, puis sélectionnez l'autre copie du même PDF. Les enregistrements sont associés par leurs identifiants :

- un enregistrement présent dans une seule copie est ajouté ;
- un enregistrement présent dans les deux prend ses champs (titre, texte, statut, responsable, échéance) de la copie modifiée en dernier, en bloc : si deux personnes ont modifié des champs différents du même enregistrement, la version de la copie la plus récente l'emporte ; les fils de discussion et les noms de pièces jointes des deux copies sont réunis ;
- si les deux copies ont numéroté de la même façon un nouvel enregistrement, celui qui arrive reçoit le prochain numéro libre ;
- un enregistrement supprimé dans une copie reste supprimé, sauf s'il a été modifié après.

Une fusion correspond à une seule étape d'annulation.

## Limites

- Les enregistrements ne sont pas encore partagés par Live TeamWork ; utilisez la fusion.
- Il n'y a pas d'équipes, de notifications ni de projets cloud pour les enregistrements dans cette version.
- Les pages supprimées du PDF emportent leurs enregistrements (la confirmation de suppression de page les compte).
