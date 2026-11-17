---
title: Tampons et notes adhésives
summary: Apposez sur une feuille un tampon Approuvé, Réviser et soumettre à nouveau ou votre propre texte, et ajoutez des notes adhésives qui s'ouvrent en commentaires contextuels.
keywords: tampon, image, coller une image, capture d'écran, presse-papiers, logo, tampon photo, signature, signer, approuvé, approuvé avec remarques, réviser et soumettre à nouveau, rejeté, vérifié, nul, tampon personnalisé, note adhésive, note, commentaire, contextuel
from: 76026792
---

## Apposer un tampon sur une feuille

1. Choisissez {{ui:Tampon}} ({{key:S}}).
2. Dans {{ui:Propriétés}} à droite, choisissez le tampon sous {{ui:Tampon}} :
   - Approuvé
   - Approuvé avec remarques
   - Réviser et soumettre à nouveau
   - Rejeté
   - Vérifié
   - Nul
   - Texte personnalisé… (saisissez jusqu'à 60 caractères dans la zone qui apparaît, puis appuyez sur {{key:Enter}} ou cliquez ailleurs)
3. Cliquez sur la feuille à l'endroit où le tampon doit aller. Ou faites glisser un cadre pour choisir sa taille.

Résultat : un tampon encadré en majuscules, avec une seconde ligne « Par <votre nom>, <date> ». Un tampon placé en cliquant est dimensionné pour l'écran à votre zoom, et reste entre 1/2 in et 1 1/4 in de haut sur la feuille imprimée.

Le tampon choisi reste sélectionné pour le suivant, y compris après avoir rouvert MarkupCraft dans ce navigateur.

**Les couleurs suivent le sens :** les tampons Approuvé sont verts, Réviser et soumettre à nouveau orange, Rejeté et Nul rouges, Vérifié bleus, et les tampons personnalisés violets. Si vous choisissez une autre couleur dans {{ui:Propriétés}}, cette couleur est conservée.

### Modifier un tampon plus tard

Sélectionnez-le et choisissez un autre tampon dans {{ui:Propriétés}}. S'il avait encore sa couleur automatique, la couleur change selon le nouveau sens.

Le nom et la date sur le tampon sont l'auteur du tampon et le jour où il a été créé. Ils ne changent pas lorsque vous le modifiez, et l'auteur d'un tampon ne peut pas être changé. Pour apposer un tampon au nom de quelqu'un d'autre, cette personne définit son nom et l'appose elle-même.

:::note
La date d'un tampon est la date en temps universel coordonné (UTC). Tard le soir dans les Amériques, ou tôt le matin en Asie et en Australie, elle peut afficher le lendemain ou la veille par rapport à votre horloge. L'heure de création dans {{ui:Propriétés}} est dans votre propre fuseau horaire.
:::

### Tampons que vous utilisez souvent

La boîte à outils contient un outil de tampon « Approuvé avec remarques », et vous pouvez enregistrer n'importe quel tampon (son texte et sa couleur) comme outil à part entière. Voir [La boîte à outils](topic:tool-chest).

Les tampons avec des champs à remplir (date de réception, numéro de projet) ne sont pas encore disponibles.

## Apposer une image ou votre signature

La liste des tampons dans {{ui:Propriétés}} se termine par deux choix supplémentaires :

- {{ui:Image…}} demande un fichier PNG, JPEG ou SVG sur cet ordinateur, ou une page d'un PDF, comme un sceau d'entreprise ou un logo. Les grandes images sont réduites à 1600 pixels sur leur plus grand côté ; un SVG ou une page de PDF devient une image de cette taille.
- {{ui:Ma signature…}} ouvre une zone de signature : signez à la souris, au stylet ou au doigt, puis choisissez {{ui:Utiliser cette signature}}. {{ui:Effacer}} recommence. {{ui:Utiliser une image de signature…}} utilise à la place un scan ou une photo de votre signature : MarkupCraft rend le papier blanc transparent et recadre l'image sur l'encre (pour un PNG, il demande d'abord).

Cliquez ensuite sur la feuille pour placer l'image (une image de 3 in de large, une signature de 2 in de large), ou faites glisser un cadre pour l'ajuster à l'intérieur ; les proportions sont conservées. Redimensionnez-la avec ses poignées comme n'importe quelle annotation ({{key:Shift}} conserve les proportions).

La dernière image est conservée dans ce navigateur, prête la prochaine fois ; {{ui:Choisir une autre image…}} la remplace. Chaque signature que vous dessinez ou chargez est conservée dans {{ui:Vos signatures}} (jusqu'à huit, la plus récente en premier) : cliquez sur l'une pour l'utiliser, ou sur × pour la supprimer. Voir [Ce qui reste dans ce navigateur](topic:browser-storage).

Dans le PDF enregistré, une image est un commentaire tampon qui affiche l'image, si bien que tout lecteur PDF l'affiche et l'imprime. Une signature dessinée ici est une image de votre signature, et non une signature numérique certifiée.

## Coller une image depuis le presse-papiers

Copiez une image dans un autre programme, ou faites une capture d'écran vers le presse-papiers, puis appuyez sur {{key:Mod+V}} au-dessus de la feuille. L'image apparaît à l'endroit du pointeur, au plus 3 in de large ou de haut avec ses proportions conservées, sous forme d'annotation image que vous pouvez déplacer et redimensionner. Dans le PDF enregistré, c'est un commentaire tampon qui affiche l'image, comme les images ci-dessus.

{{ui:Plus}} › {{ui:Coller une image}} dans le groupe {{ui:Édition}} fait la même chose depuis le menu ; le navigateur peut demander une confirmation d'abord. Lorsque le presse-papiers ne contient pas d'image, {{key:Mod+V}} colle les annotations copiées comme auparavant.

## Insérer une image depuis un fichier

Choisissez {{ui:Plus}} › {{ui:Insérer une image depuis un fichier…}} dans le groupe {{ui:Édition}} (ou {{ui:Insérer une image ici…}} dans le menu contextuel), puis choisissez un fichier PNG, JPEG ou SVG, ou un PDF (un PDF de plusieurs pages demande laquelle utiliser). Vous pouvez aussi faire glisser un fichier PNG, JPEG ou SVG sur la feuille : il apparaît à l'endroit où vous le déposez. L'image est une annotation, d'au plus 3 in de large ou de haut : déplacez-la et redimensionnez-la comme les autres.

Pour faire de l'image une partie de la page, cochez {{ui:Aplatir dans la page à l'enregistrement}} dans {{ui:Propriétés}}. Voir [Enregistrer une copie aplatie](topic:flatten).

## Créer un tampon à partir d'une sélection

Sélectionnez des annotations (ou le contenu de la page avec l'outil {{ui:Contenu}}) et choisissez {{ui:Enregistrer la sélection comme tampon…}} dans {{ui:Plus}}, dans le menu contextuel, ou {{ui:Enregistrer comme tampon…}} dans {{ui:Propriétés}}. Donnez-lui un nom. Il rejoint la boîte à outils : cliquez dessus là-bas, puis cliquez sur n'importe quelle feuille pour placer tout ce que vous avez sélectionné, ensemble, centré à l'endroit du clic. Voir [La boîte à outils](topic:tool-chest).

## Notes adhésives

1. Choisissez {{ui:Note}} ({{key:N}}).
2. Cliquez à l'endroit où la note doit aller. Une petite icône de note apparaît avec une zone de texte à côté.
3. Saisissez la note. Cliquez à l'extérieur ou appuyez sur {{key:Mod+Enter}} pour la conserver ; {{key:Esc}} la supprime.

Contrairement au texte et aux légendes, une note est conservée même si vous ne saisissez rien, afin que vous puissiez placer l'icône maintenant et écrire plus tard.

- Le texte de la note correspond à son champ {{ui:Note}} dans {{ui:Propriétés}}. Double-cliquez sur l'icône (ou sélectionnez-la et appuyez sur {{key:Enter}}) pour le modifier sur la feuille.
- Sur la feuille, vous ne voyez que l'icône. Les autres lecteurs PDF affichent une note adhésive standard qui s'ouvre sur le texte au clic.
- Changez la couleur de l'icône avec {{ui:Couleur}} dans {{ui:Propriétés}}.

Pour un échange à double sens, utilisez plutôt le fil de réponses de n'importe quelle annotation : voir [Statuts et réponses](topic:statuses-and-replies).
