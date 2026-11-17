---
title: Fusionner les modifications de deux personnes sur un même PDF
summary: Laissez git, Fossil ou Mercurial fusionner deux copies annotées du même PDF, annotation par annotation, notes comprises.
keywords: fusion, merge, git, fossil, mercurial, gestion de versions, conflit, trois voies, cadcraft merge, gitattributes, annotations, notes, équipe, deux copies
from: a450a9ef
---

Deux personnes annotent le même PDF dans deux copies. Si elles ont touché des annotations différentes, les copies peuvent être fusionnées par un programme au lieu de l'être à la main.

## Ce qui rend cela possible

Chaque annotation enregistrée par MarkupCraft porte son propre nom (son identifiant) à l'intérieur du PDF, et ce nom ne change jamais. La fusion retrouve les annotations grâce à ce nom, et non à leur place dans le fichier, car chaque programme renumérote les places lorsqu'il enregistre. Les notes et les notes privées scellées sont appariées de la même façon.

Les feuilles ne sont jamais modifiées : les deux copies doivent avoir le même nombre de pages. Si elles diffèrent, la fusion conserve votre copie telle quelle et le signale, car ajouter ou supprimer des pages relève d'une personne.

## Mise en place

Git nécessite deux lignes, une fois par dépôt :

```
# .gitattributes
*.pdf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sans git, lancez `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil et Mercurial prennent les mêmes trois fichiers dans leur propre réglage d'outil de fusion. Le fichier de tâches qui accompagne un dessin (`<name>.markups.json`, voir [Transformer une annotation en tâche](topic:markups-that-act)) fusionne de la même façon, en texte brut.

## Les règles

- Une annotation modifiée d'un seul côté est reprise. La même modification des deux côtés n'est prise qu'une fois.
- La même annotation modifiée de deux façons est un **conflit** : votre version reste et le rapport liste les deux. Ouvrez le résultat et corrigez cette annotation à la main.
- Une annotation ajoutée d'un côté est conservée. Une annotation supprimée d'un côté et inchangée de l'autre est supprimée. Supprimée d'un côté et modifiée de l'autre : supprimée, et signalée.
- Calques, colonnes, relevés et notes suivent les mêmes règles.
- Les notes privées scellées ne sont jamais ouvertes : les blocs des deux côtés sont conservés tels quels.

Le fichier fusionné est une réécriture complète de votre copie, comme l'enregistrement propre à MarkupCraft. Rien n'est envoyé : tout s'exécute sur votre ordinateur.
