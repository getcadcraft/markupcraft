---
title: Remplir un formulaire PDF
summary: Saisissez du texte dans les champs de formulaire d'un PDF, cochez ses cases et choisissez dans ses listes ; les valeurs sont enregistrées dans le formulaire lui-même.
keywords: formulaire, formulaires, remplissable, remplir, compléter, acroform, champ, champs, champ de texte, case à cocher, cocher, bouton radio, liste déroulante, liste, permis, demande, formulaire d'inspection, formulaire de soumission, valider
from: ab366541
---

Beaucoup de PDF contiennent un formulaire : demandes de permis, listes de contrôle d'inspection, pages de garde de soumission. MarkupCraft affiche les champs du formulaire et leurs valeurs, et vous permet de les remplir. Les valeurs entrent dans les champs propres au PDF, afin qu'Acrobat et tout autre lecteur PDF les affichent et les conservent.

## Remplir le formulaire

1. Ouvrez le PDF. S'il contient un formulaire, la barre d'état indique son nombre de champs.
2. Choisissez {{ui:Remplir le formulaire}} dans la barre d'outils (ou appuyez sur {{key:F}}). Chaque champ de la page reçoit une zone où saisir du texte.
3. Cliquez sur un champ et saisissez. Cochez les cases, sélectionnez les boutons radio, choisissez dans les listes déroulantes et les listes. {{key:Tab}} passe au champ suivant.
4. Pour déplacer la feuille pendant le remplissage, faites glisser n'importe où en dehors des champs.
5. Appuyez sur {{key:Esc}} ou choisissez un autre outil lorsque vous avez terminé. Ce que vous avez saisi reste sur la feuille.

Avec {{ui:Sélectionner}}, un double-clic sur un champ active {{ui:Remplir le formulaire}} et place le curseur dans ce champ.

## Enregistrer le formulaire rempli

Choisissez {{ui:Enregistrer (S)}}. La copie que vous téléchargez contient vos valeurs dans ses champs, avec vos annotations à côté. La barre d'état indique combien de champs ont été remplis.

Pour remettre un formulaire que personne ne puisse modifier, choisissez {{ui:Pages}}, puis {{ui:Enregistrer une copie aplatie…}} : les valeurs deviennent partie intégrante de la page. L'impression fait de même.

## Bon à savoir

- Un champ verrouillé par le PDF (lecture seule) ne peut pas être modifié. Sa zone est grise.
- Le texte jusqu'à la limite de longueur propre au champ est conservé ; les caractères en trop ne sont pas saisis.
- Certains formulaires n'ont pas de dessin de leurs cases et boutons, et d'autres programmes les affichent vides. MarkupCraft les dessine, et à l'enregistrement il ajoute le dessin, afin qu'ils s'affichent partout.
- L'annulation dans un champ est celle du champ : appuyez sur {{key:Ctrl+Z}} pendant que vous saisissez dedans. L'annulation des annotations n'annule pas les valeurs du formulaire.
- Si votre navigateur se ferme, les valeurs saisies reviennent avec le reste de votre travail non enregistré.
- Les valeurs saisies avec des caractères que la police PDF standard ne peut pas écrire (par exemple le chinois) sont enregistrées, et le PDF demande à chaque lecteur de les dessiner lui-même.
- Les champs de signature et les boutons-poussoirs ne se remplissent pas ici. Pour signer, utilisez {{ui:Tampon}} et votre signature.
- Les valeurs saisies dans un formulaire ne sont pas encore partagées pendant une session Live.
