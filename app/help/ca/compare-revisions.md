---
title: Compara dues revisions
summary: Superposa una emissió antiga i una de nova d'un full en dos colors, alineeu-les per dos punts i marqueu amb núvol el que ha canviat.
keywords: compara, superposició, superposa pàgines, revisió, diferència, diferències, canvis, antic, nou, alinea, revisió posterior, emissió, butlletí
from: 62f5d1c5
---

Compare superposa dos fulls. Les línies només a l'antic full es mostren en vermell, les només al nou full en blau, i les que hi són en tots dos en gris apagat. Els colors es designen a la llegenda sota el full: "Només a l'antic full", "Només al nou full", "A tots dos".

## Compara dos fulls

1. Obriu les dues emissions. Poden ser pàgines del mateix PDF o de PDF diferents; obriu-les juntes com a un conjunt (vegeu [Treballa amb diversos fitxers a la vegada](topic:several-files)).
2. Trieu la pestanya {{ui:Compara}} a la dreta.
3. Trieu {{ui:Full antic}} i {{ui:Full nou}}. El nou full comença sent aquell on sou. Quan hi ha diversos fitxers oberts, el nom de fitxer de cada full es mostra després del seu nom.
4. Trieu {{ui:Compara}}.

Resultat: MarkupCraft mostra el nou full amb l'antic barrejat, apareix la llegenda, i la pestanya diu "Comparant <old> (antic) amb <new> (nou). Les marques del nou full continuen sent editables."

## Canvia entre antic i nou

Arrossegueu el control lliscant {{ui:Antic i nou}}. A l'esquerra de tot es mostra només l'antic full, a la dreta de tot només el nou, i al mig tots dos. Lliscar endavant i enrere és sovint la manera més ràpida de veure un canvi petit.

## Alinea els fulls

Si les dues emissions es van traçar amb un marge, una mida o una rotació diferents, tot sembla canviat. Ho arreglem així:

**Per dos punts (el millor):**

1. Trieu {{ui:Alinea per dos punts}}. La vista mostra només l'antic full.
2. Feu clic en un detall precís que pugueu trobar als dos fulls, com una intersecció de la quadrícula de columnes. La pestanya compta els passos ("1 de 4").
3. Feu clic en un segon detall, lluny del primer, com el cantó oposat de la quadrícula.
4. La vista passa al nou full. Feu clic de nou al primer detall.
5. Feu clic de nou al segon detall.

Resultat: "Alineat: antic full escalat al 100.00%, girat 0.00°. Desplaceu per afinar." L'antic full es mou, s'escala i es gira per encaixar. {{key:Esc}} cancel·la mentre escolliu. Feu zoom a cada detall abans de fer clic per a un ajust precís.

**Amb petits desplaçaments:** useu els quatre botons de fletxa sota "Alinea" per moure l'antic full. Trieu el pas (0.25, 1, 5 o 20 pt; 72 pt és una polzada al paper). La pestanya indica quant s'ha mogut.

{{ui:Restableix}} elimina l'alineació i els desplaçaments.

## Només línies canviades

Sota els botons d'alineació, trieu {{ui:Línies canviades}} en lloc de {{ui:Superposició d'imatge}}. MarkupCraft aleshores compara les línies pròpies dels dos fulls, no les seves imatges: el nou full es mostra tal com és, amb les línies només de l'antic full en vermell i les només del nou en blau. Una línia que només s'ha escurçat mostra només la part que falta. Alineeu primer els fulls (vegeu més amunt): la comparació fa servir l'alineació, de manera que un full que només s'ha desplaçat no mostra cap canvi. La línia d'estat indica quant ha canviat.

Això funciona per a PDF traçats des de CAD, on el dibuix està fet de línies. Els fulls escanejats no tenen línies per comparar: per a aquests, useu la superposició d'imatge. El text escrit amb un tipus de lletra (no dibuixat com a traços) no es compara.

## Marca els canvis

Mentre compareu, sou al nou full i totes les eines funcionen. Dibuixeu núvols al voltant dels canvis a mesura que els trobeu; pertanyen al nou full i es queden quan deixeu de comparar.

{{ui:Núvol als canvis}} ho fa per vosaltres: agrupa les línies canviades que són a prop i dibuixa un núvol de revisió al voltant de cada grup al nou full, amb "Canviat des de <old sheet>" com a comentari. Un {{key:Mod+Z}} els elimina tots; esborreu els que no necessiteu.

## Compara un conjunt complet

Quan la nova emissió arriba com a PDF propi, obriu els dos PDF i obriu {{ui:Compara dos jocs de fulls}} a la pestanya {{ui:Compara}}. Trieu el fitxer antic i el fitxer nou, i després trieu {{ui:Compara els jocs}}. Els fulls s'aparellen pel seu número (com a [substitució de fulls](topic:slip-sheet-a-revised-set)), es comparen per les seves línies, i es llisten amb els més canviats primer. Trieu un full de la llista per comparar aquell parell amb {{ui:Línies canviades}}.

{{ui:Marca amb núvol tots els canvis}} marca amb núvol cada grup de línies canviades a cada full canviat, en un sol pas que es pot desfer. La comparació de conjunt no alinea primer els fulls, de manera que un full que s'ha desplaçat a la pàgina es mostra com a canviat: compareu aquell parell per separat i useu {{ui:Alinea per dos punts}}.

## Atura la comparació

Trieu {{ui:Atura la comparació}}, o aneu a un altre full. L'alineació es recorda per al mateix parell de fulls fins que tanqueu el conjunt.

## Bones de saber

- Compare treballa amb el que està dibuixat, píxel a píxel. No sap que una línia s'ha mogut: mostra la posició antiga en un color i la nova en l'altre.
- El text que s'ha redistribuït, una data canviada al caixetí o un estil de traçat diferent també apareixen com a canvis.
- Un full escanejat comparat amb un de traçat és sorollós: l'escaneig fa borrosa i desplaça les línies.
- Comparar text escrit amb un tipus de lletra, i una llista del que ha canviat, encara no estan implementats.
