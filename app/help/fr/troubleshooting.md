---
title: Dépannage
summary: Messages affichés par MarkupCraft et que faire, ainsi que des solutions pour les problèmes qui semblent ne pas fonctionner.
keywords: problème, erreur, ne fonctionne pas, aide, message, ne s'ouvre pas, impossible d'enregistrer, mot de passe, protégé, mesure refusée, étalonner, hors ligne, vide, lent, annotations perdues, points d'interrogation
from: bb650b39
---

La plupart des problèmes sont expliqués dans la barre d'état en bas de l'écran. Lisez-la en premier.

## Ouvrir des fichiers

**« MarkupCraft ouvre les fichiers PDF. “x” n'est pas un PDF. »**
Vous avez choisi ou déposé autre chose. Seuls les PDF s'ouvrent. Exportez d'abord vos plans depuis votre logiciel de CAO au format PDF.

**« “nom” nécessite un mot de passe pour être ouvert. Ouvrez une copie non protégée. »**
Le PDF est protégé par un mot de passe. Demandez à l'expéditeur une copie non protégée, ou ouvrez-le dans un programme PDF dont vous connaissez le mot de passe, puis enregistrez une copie sans mot de passe.

**« “nom” n'a pas pu être lu comme un PDF (…) »**
Le fichier est endommagé ou n'est pas réellement un PDF (téléchargement incomplet, pièce jointe d'e-mail coupée). Téléchargez-le à nouveau. Si d'autres programmes PDF peuvent l'ouvrir, utilisez leur {{ui:Enregistrer sous}} pour créer une copie propre, et ouvrez celle-ci.

**« Certains fichiers n'ont pas pu être ouverts »**
Lorsque vous ouvrez plusieurs fichiers à la fois, cette boîte liste ceux qui ont échoué et la raison. Les autres sont ouverts.

**« Le lecteur PDF n'a pas pu charger : … »**
Le moteur PDF n'a pas pu être récupéré. En ligne : rechargez la page et réessayez ; vérifiez qu'un pare-feu ou un bloqueur de contenu n'empêche pas l'accès au site. Hors ligne : MarkupCraft n'a pas été enregistré pour un usage hors ligne dans ce navigateur (la barre du haut n'affiche pas « Prêt hors ligne »). Connectez-vous, choisissez {{ui:Enregistrer pour le hors ligne}}, et attendez « Prêt hors ligne ». Voir [Travailler hors ligne](common:offline).

**« Certaines annotations peuvent s'afficher deux fois à l'écran » ou « Des détails supplémentaires d'annotation n'ont pas pu être lus »**
Les commentaires existants du fichier sont inhabituels. MarkupCraft les ouvre tout de même du mieux possible ; vérifiez-les avant de vous y fier. L'enregistrement fonctionne toujours.

**La feuille a le mauvais nom, ou affiche « page 3 »**
Voir [Comment les feuilles reçoivent leur nom](topic:open-a-plan-set#how-sheets-get-their-names). Les feuilles numérisées n'ont pas de texte à lire ; utilisez {{ui:Renommer la feuille}}.

**Les mêmes feuilles apparaissent deux fois**
Le même fichier a été ouvert deux fois. Choisissez {{ui:Fermer}} (enregistrez d'abord si nécessaire), puis ouvrez à nouveau le jeu.

## Dessiner et sélectionner

**Rien ne se passe lorsque je clique sur la feuille**
Vérifiez quel outil est enfoncé dans la barre d'outils, et lisez la barre d'état. Avec {{ui:Rectangle}}, {{ui:Ellipse}} et {{ui:Nuage}}, un clic sans glisser ne dessine rien : faites glisser. Avec {{ui:Polyligne}}, {{ui:Polygone}}, {{ui:Nuage libre}} et {{ui:Surface}}, des points sont ajoutés : terminez par un double-clic ou {{key:Enter}}.

**« Un polygone nécessite au moins 3 points. » (ou 2 pour une polyligne)**
Cliquez sur davantage de points avant de terminer.

**« Rien n'a été saisi, aucun texte n'a donc été ajouté. »**
Les zones de texte et les légendes ne sont conservées que si elles contiennent du texte. Dessinez-les à nouveau et saisissez du texte avant de cliquer ailleurs.

**« Les deux points sont identiques. Cliquez sur deux points différents. »**
Pour les lignes, les flèches, les longueurs et l'étalonnage, les deux extrémités doivent être distinctes. Faites glisser, ou cliquez deux fois à des endroits différents.

**Je ne peux pas déplacer ni supprimer une annotation ; elle a un cadre gris en tirets**
C'est un commentaire en lecture seule venu avec le fichier (par exemple un surlignage de texte). MarkupCraft le conserve tel quel : vous pouvez seulement y répondre. La barre d'état indique « annotation(s) en lecture seule conservée(s) telle(s) quelle(s) dans le fichier ».

**Mes touches saisissent des lettres dans une zone au lieu de choisir des outils**
Le curseur est dans une zone de texte (une réponse, un champ de {{ui:Propriétés}}, la recherche de feuille). Cliquez d'abord sur une partie vide de la zone de feuille, ou appuyez sur {{key:Esc}} si vous modifiez le texte d'une annotation.

**La touche Espace ne fait pas de panoramique, ou les touches fléchées ne font rien**
Vous venez de cliquer sur un bouton de la barre d'outils, qui garde donc le clavier. Faites glisser avec le bouton central de la souris à la place, ou cliquez une fois sur la feuille avec {{ui:Sélectionner}} activé, puis réessayez. Voir aussi [Clavier et souris](topic:keyboard#when-a-key-does-nothing).

**Un pincement sur l'écran tactile a laissé une marque**
Un outil de glissement (stylet, nuage, rectangle) a démarré avant l'arrivée du second doigt et s'est terminé avant d'être annulé. Appuyez sur {{ui:Annuler}}. Posez les deux doigts ensemble lorsque vous voulez zoomer.

## Mesurer

**« Étalonnez d'abord cette feuille : indiquez deux points séparés d'une distance connue, ou choisissez son échelle. Ensuite, mesurez. »**
Chaque feuille a besoin de sa propre échelle avant {{ui:Longueur}} ou {{ui:Surface}}. MarkupCraft est passé à {{ui:Étalonner}} : cliquez sur les deux extrémités d'une cote connue et saisissez sa longueur, ou cliquez sur le bouton d'échelle dans la barre d'état et choisissez une échelle. Voir [Étalonner une feuille et mesurer](topic:calibrate-and-measure).

**« Ce n'est pas une longueur que MarkupCraft comprend. »**
Saisissez-la comme `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`. Voir [Unités, longueurs et échelles](topic:units-and-scales).

**Les mesures sont un peu fausses, ou très fausses**
- Une échelle prédéfinie sur un PDF qui n'est pas à taille réelle donne des mesures fausses. Étalonnez plutôt à partir d'une longue cote connue.
- Un séparateur de milliers a été lu comme point décimal : `1,200 mm` signifie 1.2 mm. Saisissez `1200 mm`.
- Zoomez avant de cliquer sur les extrémités.
- Le dessin n'est peut-être pas à l'échelle (« NTS » pour non à l'échelle).

**« Sélectionnez d'abord un groupe de comptage, puis faites Maj+clic sur un repère pour le retirer. »**
Choisissez {{ui:Sélectionner}}, cliquez sur le groupe de comptage, puis choisissez à nouveau {{ui:Compter}} et faites {{key:Shift}}-clic sur le point.

## Enregistrer

**« Ce PDF est protégé (chiffré), donc une copie annotée ne peut pas être écrite. »**
Le fichier interdit les modifications. Demandez une copie non protégée. En attendant, vous pouvez toujours exporter la liste des annotations en CSV ou en BCF.

**« Le moteur d'écriture PDF n'a pas pu charger : … »**
En général, vous êtes hors ligne et l'application n'a pas été enregistrée pour un usage hors ligne (pas de « Prêt hors ligne » dans la barre du haut). Vos annotations sont toujours dans l'onglet : gardez-le ouvert, connectez-vous, puis choisissez {{ui:Enregistrer (S)}} à nouveau. Choisissez ensuite {{ui:Enregistrer pour le hors ligne}} pour que cela fonctionne hors ligne la prochaine fois ; la copie enregistrée inclut le moteur d'écriture PDF.

**« Impossible d'enregistrer <fichier> »**
La boîte indique la raison. Vos annotations sont toujours dans l'onglet. Réessayez ; si le problème persiste, exportez le CSV pour que les commentaires ne soient pas perdus, et signalez le message.

**J'ai choisi Enregistrer mais un seul fichier est arrivé**
Votre navigateur a bloqué les téléchargements supplémentaires. Cherchez un avis dans la barre d'adresse, autorisez ce site à télécharger plusieurs fichiers, puis enregistrez à nouveau.

**Je ne trouve pas le fichier enregistré**
Il est allé dans le dossier de téléchargements de votre navigateur. Ouvrez la liste des téléchargements du navigateur (dans Chrome et Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}} ; dans Firefox et Safari, le bouton des téléchargements dans la barre d'outils) pour voir où. Voir [Navigateurs et ordinateurs](common:browsers).

**Certains textes affichent « ? » dans d'autres lecteurs PDF**
Les caractères hors de l'ensemble de caractères d'Europe occidentale apparaissent sous forme de « ? » dans la copie. Le message d'enregistrement les compte. Voir [Enregistrer le PDF annoté](topic:save-the-marked-up-pdf).

**Le tampon affiche la date de demain (ou d'hier)**
Les dates des tampons sont en UTC. Voir [Tampons et notes adhésives](topic:stamps-and-notes).

## Travailler hors ligne

**Le bouton hors ligne indique « Impossible d'enregistrer »**
Certains fichiers de l'application n'ont pas été téléchargés. Vérifiez la connexion et cliquez à nouveau sur le bouton ; il affiche « Enregistrement de N sur M » jusqu'à « Prêt hors ligne ».

**Le bouton hors ligne indique « Hors ligne non disponible »**
Cette fenêtre de navigateur ne peut pas conserver de copie hors ligne : c'est une fenêtre privée, ou un ordinateur dont la politique le bloque. Ouvrez MarkupCraft dans une fenêtre normale et réessayez.

**Hors ligne, l'application est une version plus ancienne**
La copie hors ligne est la version que vous avez enregistrée. Lorsque vous êtes en ligne, cliquez sur « Prêt hors ligne » et choisissez « Enregistrer à nouveau (obtenir la version la plus récente) ». Pour libérer l'espace, choisissez « Supprimer la copie hors ligne ». Voir [Travailler hors ligne](common:offline).

**L'aide ne s'ouvre pas**
Appuyez sur {{key:F1}} (sur un Mac, avec **fn**), ou choisissez {{ui:Aide}} dans la barre supérieure. Elle fonctionne aussi hors ligne.

## Choses perdues

**Mes annotations ont disparu après la fermeture ou le rechargement de l'onglet**
Rouvrez MarkupCraft dans le même navigateur : il vous propose le travail non enregistré avec « Récupérer votre travail ? ». Choisissez {{ui:Récupérer}} et enregistrez le PDF. Les copies sont conservées jusqu'à 30 jours ; une fenêtre privée, ou l'effacement des données du site, n'en laisse aucune. Voir [Récupérer votre travail](common:recover).

**Mon nom, les réglages d'outils ou la boîte à outils ont disparu**
Ils sont conservés uniquement dans ce navigateur, et ont été effacés (données du site effacées, fenêtre privée, autre navigateur ou ordinateur, ou nettoyage de Safari pour les sites non visités depuis un moment). Redéfinissez votre nom et importez la boîte exportée. Voir [Ce qui reste dans ce navigateur](topic:browser-storage).

**« La boîte à outils n'a pas pu être conservée dans ce navigateur (le stockage est désactivé ou plein). Exportez-la pour la conserver. »**
Le navigateur refuse de stocker des données pour ce site (mode privé, stockage bloqué par un réglage ou une politique, ou plein). Exportez la boîte après l'avoir modifiée, et importez-la la prochaine fois.

## Affichage et vitesse

**La feuille paraît floue un instant**
MarkupCraft affiche un rendu rapide et approximatif pendant que vous zoomez ou faites un panoramique, puis le redessine net peu après que vous vous arrêtez.

**Tout est lent avec un grand jeu**
Fermez les autres onglets lourds, ouvrez moins de fichiers à la fois, et évitez de zoomer au maximum sur de très grandes feuilles. Voir [Travailler avec plusieurs fichiers à la fois](topic:several-files#big-sets).

**La feuille est sombre avec des traits clairs**
Vous êtes dans le thème {{ui:Objet}}. Choisissez {{ui:Papier}} dans la barre supérieure pour des traits sombres sur fond blanc. Vos annotations et le PDF enregistré ne sont pas affectés.
