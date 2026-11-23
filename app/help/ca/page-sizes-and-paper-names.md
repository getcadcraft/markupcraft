---
title: Mides de pàgina i noms de paper
summary: Consulteu la mida de cada pàgina PDF en mil·límetres i polzades i el seu nom de paper (sèries A, B i C, ANSI, ARCH), i agrupeu un joc barrejat per mida per trobar les pàgines que no encaixen.
keywords: mida de pàgina, mida del paper, nom del paper, a0, a1, a2, a3, a4, sèrie b, sèrie c, ansi, arch, arquitectònic, mm, polzades, mida personalitzada, per mida, mida atípica, joc barrejat, comprova pdf, client, incidència, mediabox, cropbox, rotació
from: 08e1354f
---

Abans d'enviar un joc a un client, comproveu que cada full tingui la mida que ha de tenir. {{ui:MarkupCraft}} llegeix la mida de cada pàgina del mateix PDF i n'anomena el paper.

## Què hi farà

Mireu la mida d'un full i després agrupeu tot el joc per mida.

## Passos

1. Obriu els PDF ({{ui:Obre}}), després premeu {{key:Esc}} fins que no hi hagi res seleccionat i {{ui:Selecció}} estigui activat.
2. Mireu {{ui:Propietats}}. {{ui:Paper}} indica el nom i l'orientació, per exemple "A4, vertical". {{ui:Mida}} indica els mil·límetres i les polzades.
3. Cada fila de la llista {{ui:Fulls}} té una línia de mida sota el nom del full.
4. Trieu {{ui:Per mida}} a la capçalera de {{ui:Fulls}}. La llista agrupa els fulls sota un encapçalament per cada mida, primer el grup més gran. Una mida amb només uns quants fulls es marca com una excepció.
5. Torneu a triar {{ui:Per mida}} per tornar a l'ordre propi del joc.

Resultat: es veu fàcilment una pàgina amb una mida diferent de la resta abans d'enviar el joc.

## Com es tria el nom

- La mida surt del quadre de la pàgina al PDF amb la rotació aplicada, de manera que un A3 apaisat continua essent A3.
- Els noms són les sèries A i B (ISO 216), la sèrie C (ISO 269), ANSI de la A a la E i ARCH de la A a la E.
- Una pàgina a menys de 2 mm d'una mida amb nom rep aquest nom. Qualsevol altra pàgina indica {{ui:personalitzada}}, i {{ui:Mida amb nom més propera}} indica quina és la mida més propera i a quina distància n'és.
- Les polzades surten de la mida real de la pàgina, de manera que una pàgina A4 mesura 8.26 per 11.69 in.

## Als fitxers que deseu

El full de resum ({{ui:Llista de marques}}, i després la fulla de càlcul) té una columna {{ui:Mida del paper}} al full {{ui:Per full}} i una fulla {{ui:Mides de pàgina}}. L'informe PDF té una línia "Mides de pàgina" amb el recompte de cada mida.

:::note
Els valors en polzades d'ANSI i ARCH s'han introduït a mà a partir de les taules publicades i no s'han comparat amb les normes impreses. Considereu una pàgina "personalitzada" que sigui a prop d'una d'aquestes com una qüestió a comprovar vosaltres mateixos.
:::
