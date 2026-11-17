---
title: Enllaços de full
summary: Feu que una marca salti a un altre full, i enllaceu cada crida de full com 3/A-501 al seu full i vista d'una vegada amb Enllaços en lot.
keywords: hiperenllaç, enllaç, enllaços, salta, crida de full, crida de detall, crida de secció, 3/A-501, vés al full, enrere, enllaç automàtic, enllaç en lot, enllaços en lot, caixetí, número de full, nom de full, vista, detall, reanomena, renumera, addenda, enllaç de PDF
from: 86a17c37
---

Un enllaç de full us porta d'una marca a un altre full del conjunt: d'una bombolla de detall al detall, o d'una nota al full a què es refereix.

## Enllaça una marca a un full

1. Seleccioneu la marca.
2. A {{ui:Propietats}}, trieu el full sota {{ui:Enllaça al full}}.

Apareix una petita fletxa a la cantonada superior dreta de la marca. Per seguir-la, manteniu {{key:Mod}} i feu clic a la marca, o seleccioneu-la i trieu {{ui:Vés a …}} a {{ui:Propietats}}. {{key:Alt+Left}} torna al full d'on veníeu.

Un enllaç anomena el full pel seu número, de manera que encara funciona després de tornar a obrir el conjunt o interposar una nova edició: obre el full més recent amb aquest número. Si aquest full no és obert, la barra d'estat ho diu.

## Enllaça totes les crides de full alhora

Trieu {{ui:Pàgines}} › {{ui:Enllaços en lot…}}, o {{ui:Enllaça les crides de full…}} sota {{ui:Cerca text}} a la part superior del tauler {{ui:Fulls}}.

1. **Comproveu els números de full.** MarkupCraft llista cada full obert amb el número i el nom que ha llegit del caixetí del full (o de l'etiqueta de pàgina), i d'on ha sortit cada un. Corregiu els que siguin erronis, i escriviu un número on no n'ha trobat cap (un caixetí el número del qual està dibuixat com a línies no té text per llegir). Després trieu {{ui:Cerca les crides}}. Les correccions són un pas per desfer, i esdevenen les etiquetes de pàgina del PDF desat.
2. **Reviseu la llista.** MarkupCraft llegeix el text de cada full en busca de crides com «3/A-501», «5 / A501», «DETAIL 2 ON A-501», una bombolla amb «3» sobre «A-501», o un simple «A-501» en una nota, i llegeix els títols de vista de cada full (un número de detall amb el número de full a sota, o un número gran amb un títol al costat). La llista té tres parts:
   - {{ui:S'enllaçarà}}: cada crida, el full a què va i la vista d'aquell full. Desmarqueu les que no vulgueu. Si no s'ha trobat la vista (una crida a la vista 7 en un full amb les vistes 1 a 6), trieu la vista de la llista del costat, o deixeu {{ui:Full sencer}}.
   - {{ui:No enllaçat}}: números de full que cap full obert no té, amb quantes crides els anomenen cadascun. Trieu el full que cadascun vol dir (per exemple un full que ha canviat de número), i cada crida a aquell número s'enllaça a ell. O deixeu-ho sense enllaçar.
   - Quantes crides ja estan enllaçades i van al lloc correcte. Es deixen tal com estan.
3. Trieu {{ui:Crea els enllaços}}.

Cada crida rep un quadre blau fi que és un enllaç de full. {{key:Mod}}+clic sobre ell obre el full ampliat a la vista. Un {{key:Mod+Z}} les treu totes.

Els codis que només semblen números de full, com R-19 o W12X26, es deixen fora: una crida ha de tenir la forma dels números de full del mateix conjunt. El número propi d'un full, al seu caixetí i als seus títols de vista, mai no és una crida. Els fulls escanejats no tenen text per llegir: useu primer {{ui:Llegeix el text (OCR)…}}, o enllaceu les seves crides una a una.

## Torneu-ho a executar quan canvia el conjunt

Els enllaços en lot es poden executar tantes vegades com vulgueu:

- **S'ha afegit un full**, com una addenda amb A-601: obriu-ne el fitxer i torneu a executar {{ui:Enllaços en lot…}}. Les crides a A-601 que abans no s'enllaçaven ara s'enllacen.
- **Un full ha canviat de número**: corregiu-ne el número al pas 1. Els enllaços fets per {{ui:Enllaços en lot…}} que ja no troben el seu full apareixen a {{ui:No enllaçat}}; trieu el full una vegada i tots el segueixen. Els enllaços que han passat a una altra vista s'actualitzen.
- Els enllaços que heu fet a mà a {{ui:Propietats}} mai no es canvien.

## Al PDF desat

Un enllaç a un full del mateix PDF també s'escriu com a enllaç PDF, de manera que altres visors hi salten en fer clic. Un enllaç amb vista obre aquella vista a l'altre visor (el salt de «fit rectangle» del PDF); un sense vista obre tot el full. Els enllaços a un full d'un altre fitxer del conjunt funcionen només a MarkupCraft.
