---
title: Les fichiers que MarkupCraft ouvre et enregistre
summary: Des PDF en entrée, une copie PDF annotée en sortie, plus des fichiers CSV, BCF et de coffre d'outils ; où va chacun, en ligne et hors ligne.
keywords: pdf, ouvrir, enregistrer, exporter, télécharger, csv, bcf, bcfzip, json, coffre d'outils, types de fichiers, formats, téléverser, mot de passe, chiffré
from: b3045b4c
---

## Ce que MarkupCraft ouvre

| Fichier | Comment | Ce qui se passe |
|---|---|---|
| PDF (`.pdf`) | {{ui:Ouvrir}}, {{key:Mod+O}}, ou déposer sur la zone de la feuille. Plusieurs à la fois, c'est possible. | Chaque page devient une feuille. Les annotations déjà présentes dans le fichier sont relues (ci-dessous). |
| Coffre d'outils (`.json`) | Onglet {{ui:Outils}}, puis {{ui:Importer}} | Les outils sont ajoutés à votre coffre. Voir [Le coffre d'outils](topic:tool-chest). |

Tout le reste est refusé avec « MarkupCraft ouvre les fichiers PDF. » dans la barre d'état. Si vous déposez un mélange, les PDF s'ouvrent et la barre d'état dit combien de fichiers n'étaient pas des PDF.

### Annotations déjà présentes dans un PDF

- **Les annotations enregistrées par MarkupCraft** reviennent exactement : type, style, auteur, dates, statut, réponses, numéro de réserve, l'échelle de la feuille et les noms de feuilles que vous avez saisis.
- **Les commentaires d'autres programmes PDF** sont lus aussi. Rectangles, ellipses, lignes et flèches, polylignes, polygones, traits d'encre (crayon), zones de texte et notes autocollantes deviennent des annotations MarkupCraft normales et modifiables. Leurs réponses et statuts de revue suivent.
- **Tout le reste** (surlignages de texte faits en sélectionnant du texte, tampons d'autres programmes, et autres sortes) est montré tel quel, marqué en lecture seule. Vous pouvez le sélectionner, le voir dans la liste des annotations et y répondre, mais pas le déplacer, le modifier ni le supprimer.
- Les liens et les champs de formulaire sont laissés tels quels et ne sont pas listés.
- Une échelle enregistrée par un autre programme (une fenêtre de mesure) est utilisée comme échelle de la feuille quand MarkupCraft comprend son unité.

### Fichiers qui ne s'ouvrent pas

- Un PDF qui demande un mot de passe : « "nom" demande un mot de passe pour s'ouvrir. Ouvrez une copie non protégée. »
- Un fichier endommagé ou qui n'est pas vraiment un PDF : « "nom" n'a pas pu être lu comme un PDF (…) ».
- Un PDF qui s'ouvre mais est protégé contre les modifications s'ouvre normalement. L'enregistrer est refusé (voir ci-dessous).

Quand plusieurs fichiers sont ouverts à la fois, ceux qui fonctionnent s'ouvrent et une boîte intitulée « Certains fichiers ne se sont pas ouverts » liste les autres.

## Ce que MarkupCraft enregistre

Enregistrer est toujours le **téléchargement** d'un nouveau fichier. Une page web ne peut pas écraser un fichier sur votre ordinateur, et MarkupCraft ne modifie jamais votre original.

| Vous choisissez | Vous obtenez | Remarques |
|---|---|---|
| {{ui:Enregistrer}} ({{key:Mod+S}}) | « <nom> (marked up).pdf » | Une copie du PDF d'origine avec chaque annotation écrite comme un vrai commentaire PDF. Enregistrer de nouveau un fichier « (marked up) » garde le même nom ; il ne devient jamais « (marked up) (marked up) ». Voir [Enregistrer le PDF annoté](topic:save-the-marked-up-pdf). |
| Onglet {{ui:Annotations}}, puis {{ui:CSV}} | « <nom> markups.csv » | Les annotations telles que listées (les filtres s'appliquent). |
| Onglet {{ui:Annotations}}, puis {{ui:BCF}} | « <nom> markups.bcfzip » | BCF 2.1 pour les outils de coordination BIM, une capture par annotation. Voir [Notions de base du BCF](topic:bcf-basics). |
| Onglet {{ui:Liste de réserves}}, puis {{ui:Exporter en CSV}} | « <nom> punch list.csv » | Les postes de réserve dans l'ordre des numéros. |
| Onglet {{ui:Outils}}, puis {{ui:Exporter}} | « MarkupCraft tool chest.json » | Votre coffre d'outils, à partager ou à conserver. |

« <nom> » est le nom de fichier du premier PDF ouvert, sans « .pdf ».

Les fichiers CSV s'ouvrent dans n'importe quel tableur. Ils sont en UTF-8 avec la marque que les tableurs recherchent, donc les noms accentués s'affichent correctement. Une cellule qui commence par =, +, - ou @ reçoit une apostrophe en tête pour qu'un tableur ne l'exécute jamais comme une formule.

## Où vont les téléchargements

Votre navigateur décide : en général votre dossier Téléchargements, ou il demande à chaque fois si vous l'avez réglé ainsi. Voir [Navigateurs et ordinateurs](common:browsers#what-differs-between-browsers).

:::chromium
Quand vous enregistrez d'un coup chaque fichier modifié d'un jeu, Chrome et Edge peuvent demander si ce site peut télécharger plusieurs fichiers. Choisissez {{ui:Autoriser}}, sinon vous n'obtenez que la première copie.
:::

:::safari
Sur un iPad, Safari demande avant chaque téléchargement et met le fichier dans l'app Fichiers, sous Téléchargements. Sur un Mac, il va dans le dossier défini dans les réglages de Safari.
:::

## En ligne et hors ligne

- **Vos PDF ne quittent jamais cet ordinateur**, en ligne ou hors ligne. Il n'y a aucun téléversement nulle part.
- Le lecteur PDF est chargé la première fois que vous ouvrez un PDF (« Chargement du lecteur PDF… »), et l'écrivain PDF la première fois que vous enregistrez (« Chargement de l'écrivain PDF… ») ou ouvrez un fichier qui contient déjà des commentaires.
- Avec une connexion, les deux se chargent depuis le site web.
- **Pour travailler sans connexion,** choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre du haut pendant que vous êtes en ligne. Le bouton compte « Enregistrement de N sur M » puis affiche « Prêt hors ligne ». Cette copie comprend le lecteur PDF et l'écrivain PDF (environ 6 Mo en tout) et cette aide ; ensuite, ouvrir, annoter et enregistrer des PDF fonctionnent tous hors ligne dans ce navigateur.
- Si le bouton affiche « Enregistrement impossible », certains fichiers ne se sont pas téléchargés : vérifiez la connexion et cliquez-le de nouveau. S'il affiche « Hors ligne indisponible », cette fenêtre de navigateur ne peut pas conserver de copie hors ligne (fenêtres privées et certains ordinateurs gérés) ; utilisez une fenêtre normale.
- Pour mettre à jour ou abandonner la copie, cliquez « Prêt hors ligne » et choisissez « Enregistrer à nouveau (obtenir la version la plus récente) » ou « Supprimer la copie hors ligne ». Plus de détails dans [Travailler hors ligne](common:offline).

:::offline
Vous êtes hors ligne. Si la barre du haut affiche « Prêt hors ligne », tout fonctionne, enregistrer compris. Sinon, et si vous n'avez pas encore enregistré dans cet onglet, {{ui:Enregistrer}} peut échouer avec « L'écrivain PDF n'a pas pu se charger ». Vos annotations sont toujours dans l'onglet : gardez-le ouvert, reconnectez-vous, et choisissez de nouveau {{ui:Enregistrer}}.
:::

## À savoir

- Les grands jeux de plans mettent du temps à s'ouvrir : MarkupCraft lit le texte de chaque page pour trouver les numéros de feuilles. La barre d'état compte les feuilles au fur et à mesure.
- Ouvrir deux fois le même PDF ajoute deux fois ses feuilles. Fermez le jeu et rouvrez-le si cela arrive.
- {{ui:Fermer}} ferme d'un coup tous les fichiers ouverts. Si certains ont des annotations non enregistrées, il demande : {{ui:Annuler}}, {{ui:Fermer sans enregistrer}} ou {{ui:Enregistrer d'abord des copies}}.
- L'enregistrement dans le cloud n'est pas encore disponible, et il n'y a pas encore de versions de bureau. Gardez vos PDF avec vos autres fichiers de projet et sauvegardez-les comme d'habitude. Voir [Où vont vos fichiers](common:your-files).
