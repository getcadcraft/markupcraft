---
title: Ce qui reste dans ce navigateur
summary: Votre nom, vos paramètres, votre coffre d'outils et les dernières annotations copiées sont conservés dans ce navigateur, sur cet ordinateur ; vos annotations ne sont conservées que dans les PDF que vous enregistrez.
keywords: stockage local, stockage du navigateur, paramètres, préférences, profil, effacer les données, fenêtre privée, navigation privée, sauvegarde, autre ordinateur, synchronisation, réinitialiser
from: ab6e3c81
---

MarkupCraft n'a ni compte ni stockage sur serveur. Quelques petites données sont conservées dans le stockage de votre navigateur pour ce site web, et tout le reste se trouve dans vos fichiers.

## Ce qui est conservé dans le navigateur

| Quoi | Défini où | Conservé sous forme de |
|---|---|---|
| Votre nom d'auteur | Le bouton de nom dans la barre d'état, ou {{ui:Paramètres}} | Un nom |
| Paramètres de MarkupCraft | {{ui:Paramètres}}, onglet {{ui:MarkupCraft}} : couleur et épaisseur de trait des nouvelles annotations, destination des collages, unités (voir [Paramètres de MarkupCraft](topic:settings)) | Un jeu |
| Paramètres des outils | {{ui:Propriétés}} pendant qu'un outil de dessin est actif : couleur, trait, remplissage, opacité et taille du texte pour chaque outil, le tampon choisi, le nom du groupe de comptage | Un jeu |
| Coffre d'outils | L'onglet {{ui:Outils}} | Jusqu'à 500 outils |
| Ce que vous avez copié en dernier | {{ui:Copier}} ou {{ui:Couper}} | Les annotations copiées, pour qu'un autre onglet puisse les coller ; remplacées par la copie suivante |
| Image du tampon et signature | {{ui:Image…}} et {{ui:Ma signature…}} dans la liste des tampons | La dernière image et votre signature |
| Copies de récupération | Conservées pendant qu'un PDF contient des annotations non enregistrées | Le PDF et ses annotations ; supprimées quand vous enregistrez, fermez ou abandonnez le fichier ; conservées jusqu'à 30 jours |

## Ce que cela signifie

- **Par navigateur, par ordinateur.** Chrome et Firefox sur le même ordinateur ont chacun leurs données. Votre ordinateur portable et le poste de bureau ont chacun les leurs. Rien n'est synchronisé entre eux, même si vous vous connectez au navigateur.
- **Les fenêtres privées et de navigation privée** démarrent vides et oublient tout à leur fermeture.
- **Effacer les données du site les supprime.** Effacer les cookies et les données de ce site web, ou de tous les sites, dans les paramètres du navigateur supprime votre nom, vos paramètres et votre coffre. Certains outils de nettoyage et certaines politiques d'entreprise le font automatiquement.
- **Rien n'est envoyé.** Ces valeurs ne quittent jamais l'ordinateur, sauf votre nom dans les PDF que vous enregistrez. Les copies de récupération restent elles aussi dans ce navigateur.

:::safari
Safari peut supprimer les données stockées d'un site web après quelques semaines sans visite. Ouvrez MarkupCraft de temps en temps, et conservez un coffre d'outils exporté.
:::

## Ce qui n'est pas conservé dans le navigateur

- **Vos annotations, définitivement.** Elles doivent se trouver dans le PDF « (marked up) » que vous enregistrez. La copie de récupération est un filet de sécurité en cas de plantage ou d'onglet fermé, et non un endroit où conserver votre travail : elle disparaît à l'enregistrement, et effacer les données du site la supprime. Voir [Récupérer votre travail](common:recover).
- **Vos fichiers ouverts.** À chaque ouverture de MarkupCraft, rouvrez les PDF.
- **La feuille où vous étiez, le zoom, les filtres et l'historique d'annulation.** Ils durent jusqu'à la fermeture de l'ensemble ou de l'onglet.

## Sauvegarder et transférer votre configuration

- **Coffre d'outils :** {{ui:Outils}}, puis {{ui:Exporter}}. Sur l'autre navigateur ou ordinateur : {{ui:Outils}}, puis {{ui:Importer}}.
- **Nom :** retapez-le sur l'autre navigateur (cliquez sur le bouton de nom dans la barre d'état).
- **Paramètres des outils :** réglez-les à nouveau, ou enregistrez chaque annotation stylisée comme outil pour qu'elle voyage avec le coffre.

## Repartir de zéro

Pour tout réinitialiser, effacez les données de ce site web dans les paramètres de votre navigateur. Votre nom, vos paramètres et votre coffre disparaissent ; les six outils par défaut reviennent.

## La copie hors ligne

{{ui:Enregistrer pour le hors ligne}} dans la barre du haut stocke aussi les fichiers de l'application (avec le lecteur et le générateur de PDF, environ 6 Mo) dans le navigateur, séparément de ces paramètres. Effacer les données du site supprime aussi cette copie. Cliquez sur « Prêt hors ligne » et choisissez « Supprimer la copie hors ligne » pour ne supprimer que celle-ci. Voir [Travailler hors ligne](common:offline).

La sauvegarde dans le cloud et la synchronisation entre ordinateurs ne sont pas encore disponibles.
