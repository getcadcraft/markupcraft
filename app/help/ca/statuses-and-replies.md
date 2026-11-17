---
title: Estats i respostes
summary: Marqueu cada comentari com a Obert, Acceptat, Rebutjat o Completat, discutiu-lo en un fil de respostes i passeu el fil al PDF.
keywords: estat, estat de revisió, acceptat, rebutjat, completat, obert, resposta, respostes, fil, comentari, conversa, discussió, respondre, revisió de comprovació
from: 0f3e8b91
---

Cada marca té un **estat** i un **fil de respostes**. Junts porten una ronda de revisió: el revisor marca, el dissenyador respon i fixa els estats, i el revisor comprova.

## Definir un estat

1. Seleccioneu la marca (o diverses).
2. A {{ui:Propietats}}, trieu un {{ui:Estat}}: Obert, Acceptat, Rebutjat o Completat.

Resultat: l'estat apareix com una etiqueta a la llista {{ui:Marques}}, i s'afegeix una línia al fil: "Estat definit com a Acceptat per Ana Ruiz." Amb diverses marques seleccionades, el quadre d'estat diu "Mixt" fins que en trieu un, i aleshores les canvia totes.

Les marques noves comencen com a Obertes. Les marques enganxades o duplicades també comencen com a Obertes.

## Respondre

1. Seleccioneu la marca.
2. A {{ui:Propietats}}, cerqueu "Respostes" sota els paràmetres d'estil.
3. Escriviu a {{ui:Escriviu una resposta}}.
4. Trieu {{ui:Resposta}}, o premeu {{key:Mod+Enter}}.

Resultat: la resposta apareix amb el vostre nom, la data i l'hora, i el títol la compta: "Respostes (3)". La llista {{ui:Marques}} mostra un recompte de respostes a la fila.

- Els canvis d'estat apareixen al mateix fil i marcats com a entrades d'estat, de manera que l'historial es llegeix en ordre.
- Si comenceu a escriure una resposta i feu clic en una altra cosa, l'esborrany es conserva fins que torneu a aquella marca (fins que tanqueu el conjunt).
- Si no heu definit el vostre nom, MarkupCraft us el demana abans d'enviar.
- També podeu respondre als comentaris de només lectura que venien amb el fitxer.

:::note
Una resposta, un cop enviada, no es pot editar ni suprimir. Just després d'enviar-la, {{key:Mod+Z}} la retira; després, afegiu una resposta nova que la corregeixi.
:::

## Afegir una foto

Sota el quadre de resposta, {{ui:Afegeix una foto}} afegeix una imatge al fil: un PNG o JPEG d'aquest ordinador o, en una tauleta o un telèfon, una foto que feu en aquell moment. El que hagueu escrit al quadre de resposta esdevé el seu peu de foto. El fil mostra una miniatura; trieu-la per veure la foto a mida completa. Les fotos grans es redueixen fins a 1600 píxels pel costat més llarg.

Al PDF desat, cada foto viatja també com a fitxer adjunt al costat de la marca (un clip), de manera que altres visualitzadors de PDF la poden obrir.

## Passar la revisió

Encara no hi ha cap sessió compartida en línia: la revisió viatja dins el PDF.

1. Trieu {{ui:Desa}}. La còpia conté cada marca amb el seu estat i les seves respostes.
2. Envieu aquesta còpia com envieu ara els plànols.
3. La persona següent l'obre a MarkupCraft, respon, fixa els estats i torna a desar.

Altres programes de PDF veuen les respostes com a respostes al comentari, i els estats com a estats de revisió (Acceptat, Rebutjat, Completat; Obert es mostra sense estat). Les seves pròpies respostes i estats de revisió tornen a MarkupCraft en obrir el fitxer: guanya l'estat més recent.

Si dues persones marquen còpies separades al mateix temps, no hi ha fusió. Podeu obrir les dues còpies en un conjunt i copiar algunes marques d'una a l'altra amb {{key:Mod+C}} i {{key:Mod+V}}, però una còpia enganxada és una marca nova: porta el vostre nom, una data nova i l'estat Obert, i apareix una mica desplaçada. Acordeu qui marca quins fulls per evitar-ho.

## Trobar el que encara és obert

A la pestanya {{ui:Marques}}, definiu {{ui:Estat}} a "Obert" per llistar només els elements oberts, i {{ui:Autor}} a un revisor. Vegeu [La llista de marques](topic:markups-list-and-export).

L'estat (Obert, Acceptat, Rebutjat, Completat) fa referència al comentari. Un element de llista de deficiències té el seu propi estat, separat, per a la feina en obra; vegeu [Crear una llista de deficiències](topic:punch-list).
