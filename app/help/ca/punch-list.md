---
title: Fes una llista de deficiències
summary: Converteix les marques en elements numerats de la llista de deficiències amb un assignat, una data de venciment i un estat, i exporta la llista.
keywords: llista de deficiències, deficiència, llista de defectes, observació, assignar, assignat a, data de venciment, lliurament, recorregut, número
from: b98b38e6
---

Un element de la llista de deficiències és una marca amb un número, un assignat, una data de venciment i un estat de l'element. El número es dibuixa al full al costat de la marca, de manera que el full imprès i la llista coincideixen.

## Afegir elements

1. Marqueu cada problema als fulls: un núvol, una crida, una nota, qualsevol cosa.
2. Seleccioneu-ne una o més (vegeu [Seleccionar, moure i canviar marques](topic:select-and-edit)).
3. O obriu la pestanya {{ui:Llista de deficiències}} i trieu {{ui:Afegeix la selecció a la llista de deficiències}}, o trieu {{ui:Afegeix a la llista de deficiències}} a {{ui:Propietats}}.

Resultat: cada marca rep el número següent (1, 2, 3…), en l'ordre dels fulls i després en l'ordre en què es van dibuixar. Apareix una insígnia numerada al full, i la barra d'estat diu "S'han afegit 3 elements a la llista de deficiències." Les marques que ja tenen número, i els comentaris de només lectura, s'ometen.

## Omplir els detalls

A la pestanya {{ui:Llista de deficiències}}, cada element mostra el seu número, assumpte, text, full i estat, amb tres camps a sota. Els mateixos camps són a {{ui:Propietats}} sota "Llista de deficiències" quan la marca està seleccionada:

- {{ui:Assignat a}}: un nom o un ofici, com a text lliure.
- {{ui:Venciment}}: una data, des del selector de dates.
- {{ui:Estat de l'element}}: Obert, En curs, Preparat per revisar o Tancat.

Feu clic a la capçalera d'un element per anar-hi al seu full.

L'estat de l'element és independent de l'estat de revisió de la marca (Obert, Acceptat, Rebutjat, Completat). Useu l'estat de l'element per a la feina, i l'estat de revisió per al comentari.

## Treure un element

Seleccioneu la marca i trieu {{ui:Treu de la llista de deficiències}} a {{ui:Propietats}}. La marca es queda; només se n'aneu el número. Mentre el joc és obert, els números no es reutilitzen: el següent element encara rep el següent número nou, de manera que un forat vol dir que s'ha tret un element. Quan es torna a obrir un fitxer, la numeració continua després del número més alt que hi ha.

## Exportar la llista

Trieu {{ui:Exporta CSV}} a la pestanya {{ui:Llista de deficiències}}. Obteniu "<name> punch list.csv" amb les columnes Núm., Full, Fitxer, Pàgina, Element, Comentari, Assignat a, Venciment, Estat, Estat de la marca, Autor i Creat, en ordre de número. Obriu-lo amb qualsevol full de càlcul.

Els números, els assignats, les dates de venciment i els estats dels elements també es desen dins del PDF marcat, de manera que tornen quan el torneu a obrir. Altres visors de PDF mostren la insígnia del número com a part de la marca. L'exportació BCF de la llista de marques també porta l'assignat i la data de venciment (vegeu [Conceptes bàsics de BCF](topic:bcf-basics)).

## A l'obra amb una tauleta

Obriu el joc en un iPad, recorregueu l'obra, i poseu una {{ui:Nota}} o dibuixeu un {{ui:Núvol}} a cada problema. Afegiu-los a la llista de deficiències a mesura que aneu, i deseu abans de marxar. Vegeu [Revisar en un iPad o en una pantalla tàctil](topic:review-on-a-tablet).

Una llista de deficiències com a informe PDF o full de càlcul amb format, i les fotos adjuntes als elements, encara no estan implementats.
