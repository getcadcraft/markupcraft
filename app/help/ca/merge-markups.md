---
title: Fusiona les edicions de dues persones d'un PDF
summary: Deixeu que git, Fossil o Mercurial fusionin dues còpies marcades del mateix PDF, marca per marca, incloses les notes.
keywords: fusió, git, fossil, mercurial, control de versions, conflicte, tres vies, fusió de CadCraft, gitattributes, marques, notes, equip, dues còpies
from: a450a9ef
---

Dues persones marquen el mateix PDF en dues còpies. Si han tocat marques diferents, les còpies es poden fusionar amb un programa en lloc de fer-ho a mà.

## Què ho fa possible

Cada marca que MarkupCraft desa porta el seu propi nom (el seu identificador) dins del PDF, i el nom mai no canvia. La fusió busca les marques pel seu nom, no per la seva posició al fitxer, perquè cada programa renumera les posicions en desar. Les notes i les notes privades segellades es comparen de la mateixa manera.

Les pàgines no es toquen mai: les dues còpies han de tenir el mateix nombre de pàgines. Si no, la fusió manté la vostra còpia tal com és i ho indica, perquè afegir o treure pàgines és feina d'una persona.

## Configuració

Git necessita dues línies, una vegada per repositori:

```
# .gitattributes
*.pdf merge=cadcraft

# una vegada, a cada ordinador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sense git, executeu `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial accepten els mateixos tres fitxers a la seva pròpia configuració d'eina de fusió. El fitxer de tasques que va amb un dibuix (`<name>.markups.json`, vegeu [Marques que actuen](topic:markups-that-act)) es fusiona de la mateixa manera, com a text pla.

## Les regles

- Una marca canviada només a un costat es prén. El mateix canvi als dos costats es pren una sola vegada.
- La mateixa marca canviada de dues maneres és un **conflicte**: es manté la vostra versió i l'informe llista totes dues. Obriu el resultat i corregiu aquella marca a mà.
- Una marca afegida a qualsevol costat es manté. Una eliminada a un costat i sense tocar a l'altre s'elimina. Una eliminada a un costat i canviada a l'altre s'elimina, i s'informa.
- Les capes, les columnes, els registres i les notes segueixen les mateixes regles.
- Les notes privades segellades no s'obren mai: els blocs dels dos costats es mantenen tal com són.

La fusió és una reescriptura completa de la vostra còpia, com ho és el Desa propi de MarkupCraft. No es puja res; tot s'executa al vostre ordinador.
