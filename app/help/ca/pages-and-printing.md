---
title: Imprimeix i canvia les pàgines d'un PDF
summary: Imprimiu fulls amb les seves marques i gireu, moveu, inseriu, suprimiu o extraieu pàgines d'un PDF obert.
keywords: imprimeix, impressora, paper, pàgines, pàgina, gira, gir, reordena, mou pàgina, insereix, afegeix pàgina, pàgina en blanc, suprimeix pàgina, elimina pàgina, extreu, divideix, operacions de pàgina
from: 81832d9b
---

El menú {{ui:Pàgines}} del grup {{ui:Fitxer}} funciona sobre el PDF al qual pertany el full obert. El vostre PDF en aquest ordinador no es modifica mai: els canvis formen part de la còpia que deseu.

## Imprimir

1. Premeu {{key:Mod+P}}, o trieu {{ui:Pàgines}}, després {{ui:Imprimeix…}}.
2. Quan hi ha més d'un full obert, trieu què imprimir: {{ui:Aquest full}}, cada pàgina d'aquest fitxer, tot el joc, o les pàgines que escriviu (com ara `1-3, 5`).
3. Trieu {{ui:Imprimeix}}. S'obre el diàleg d'impressió del navegador: trieu-hi la impressora, el paper i l'escala.

Les marques s'imprimeixen tal com es veuen al full: es dibuixen a les pàgines de la còpia que va a la impressora. Els comentaris fets per altres programes s'imprimeixen tal com ho indica el seu PDF.

:::safari firefox
Si el navegador no pot imprimir des de dins de la pàgina, els fulls s'obren com a PDF en una pestanya nova. Imprimiu des d'allà.
:::

## Girar una pàgina

Trieu {{ui:Pàgines}}, després {{ui:Gira la pàgina en sentit horari}} o {{ui:Gira la pàgina en sentit antihorari}}. El full obert gira un quart de volta. Les seves marques es queden on eren al dibuix, i el text que heu escrit gira amb la pàgina perquè es continuï llegint dret.

## Moure una pàgina

Trieu {{ui:Pàgines}}, després {{ui:Mou la pàgina cap amunt}} o {{ui:Mou la pàgina cap avall}}. El full obert intercanvia el lloc amb el seu veí al seu propi PDF. Les seves marques, la seva escala i el seu número de full l'acompanyen.

## Inserir pàgines

- {{ui:Insereix pàgines d'un PDF…}} posa totes les pàgines d'un altre PDF després del full obert.
- {{ui:Insereix una pàgina en blanc}} afegeix una pàgina buida de la mateixa mida després del full obert, per a esbossos i notes. En un joc creat amb {{ui:Nou}}, té també la quadrícula del joc.
- En un joc creat amb {{ui:Nou}}, {{ui:Afegeix una pàgina en blanc}} sota la llista {{ui:Fulls}} afegeix una pàgina més, com les altres, al final. Vegeu [Començar amb pàgines en blanc](topic:open-a-plan-set#start-with-blank-pages).

Les pàgines inserides reben el seu número de pàgina com a etiqueta fins que les reanomeneu. Vegeu [Reanomenar un full](topic:open-a-plan-set#rename-a-sheet).

## Suprimir pàgines

1. Trieu {{ui:Pàgines}}, després {{ui:Suprimeix pàgines…}}.
2. Escriviu els números de pàgina d'aquest PDF, com ara `3` o `2-4`. Ja s'omple la pàgina del full obert.
3. Trieu {{ui:Suprimeix pàgines}}. Si aquestes pàgines tenen marques, MarkupCraft diu quantes i torna a preguntar.

Un PDF manté almenys una pàgina. Per treure un fitxer sencer, tanqueu el joc i obriu els fitxers que encara necessiteu.

## Extreure pàgines

Trieu {{ui:Pàgines}}, després {{ui:Extreu pàgines…}}, i escriviu les pàgines. Es baixen com un PDF nou anomenat "<file> (pages 1-3).pdf", amb les seves marques com a comentaris que podeu seguir editant. El fitxer obert es queda tal com està.

## Coses a tenir en compte

- **Desfer s'atura en un canvi de pàgina.** {{key:Mod+Z}} desfà les marques dibuixades després, però no el canvi de pàgina en si ni res d'abans. Tanqueu sense desar per començar de nou des del vostre PDF original.
- Els números de pàgina compten les pàgines d'un sol PDF, no de tot el joc. Moure una pàgina la manté dins del seu propi fitxer.
- Les pàgines canviades són treball no desat: {{ui:Desa}} baixa la còpia reorganitzada, i en sortir es pregunta primer.
