---
title: Calibra un full i mesura
summary: Definiu l'escala de cada full a partir d'una preselecció o d'una cota coneguda, i després mesureu longituds, àrees amb perímetres i recomptes.
keywords: calibra, escala, defineix l'escala, mesura, longitud, distància, cota, àrea, peus quadrats, perímetre, recompte, amidament, quantitat, regle, aritmètica, càlcul, suma, fracció
from: 49a25c6d
---

Les longituds i les àrees necessiten saber l'escala del full. MarkupCraft guarda una escala **per full**: calibreu cada full que mesureu. Els recomptes no necessiten escala.

La barra d'estat mostra l'escala del full actual, o "Sense calibrar".

## Trieu una escala de la llista

Feu-ho servir quan el PDF és a mida completa (un full de 24 × 36 que s'imprimeix a 24 × 36) i el dibuix indica la seva escala.

1. Feu clic al botó d'escala de la barra d'estat ("Sense calibrar"). S'obre el quadre "Escala del full".
2. Sota {{ui:Escala}}, trieu l'escala: arquitectònica (1/32" = 1'-0" a 3" = 1'-0"), d'enginyeria (1" = 10' a 1" = 100') o mètrica (1:1 a 1:1000).
3. Trieu {{ui:Defineix l'escala}}.

Resultat: la barra d'estat mostra l'escala, per exemple `1/4" = 1'-0"`. Les escales arquitectòniques mostren les longituds en peus i polzades, les d'enginyeria en peus decimals, i les mètriques fins a 1:50 en mil·límetres i a partir de 1:100 en metres.

:::warning
Una preselecció només és correcta si el PDF no s'ha reduït. Un joc a mitja mida, o un full que era "ajustat a la pàgina" quan es va fer, es mesura malament amb una preselecció. Calibreu més aviat a partir d'una cota coneguda, i en tot cas comproveu una cota.
:::

## Calibra a partir d'una cota coneguda

Useu-ho per a jocs a mitja mida, fulls escanejats, detalls a escales estranyes, o per comprovar una preselecció.

1. Busqueu una cota llarga en què confieu, o una barra d'escala gràfica.
2. Trieu {{ui:Calibra}} al grup {{ui:Mesura}} (o trieu {{ui:Selecciona dos punts}} al quadre "Escala del full").
3. Feu clic a un extrem de la cota, i després a l'altre. (O arrossegueu d'un extrem a l'altre.) Feu zoom primer per més precisió; {{key:Shift}} manté la línia en passos de 45°.
4. El quadre indica la distància entre els punts sobre el paper i pregunta "Quina és la distància real?". Escriviu la {{ui:Distància real}}, per exemple `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`.
5. Trieu com es mostren les longituds a {{ui:Mostra les longituds en}}: {{ui:Peus i polzades}}, {{ui:Peus decimals}}, {{ui:Polzades}}, {{ui:Metres}} o {{ui:Mil·límetres}}.
6. Trieu {{ui:Defineix l'escala}}.

Resultat: la barra d'estat mostra "Calibrat: 24'-0" sobre 1.00 in" (la longitud real i la del paper), i l'eina amb què anàveu a mesurar torna a estar activa. Totes les maneres d'escriure una longitud són a [Unitats i longituds](topic:units-and-scales).

La distància real també pot ser un petit càlcul: `12'6"+3/4"`, `(24'-0")/3` o `2*450mm`. Useu `+ - * /` i parèntesis; un nombre sense unitat compta en la unitat de {{ui:Mostra les longituds en}} (peus per a {{ui:Peus i polzades}}). {{ui:Defineix l'escala}} fa servir el resultat.

Si MarkupCraft no pot llegir el que heu escrit, el quadre ho indica: "Això no és una longitud que MarkupCraft entengui. Proveu 24'-0", 12' 6 1/2", 7.2 m o 900 mm." Un càlcul que no pot resoldre diu per què i on, per exemple "Un parèntesi no està tancat (caràcter 5)."

## Mesura una longitud

1. Trieu {{ui:Longitud}} ({{key:M}}).
2. Feu clic al principi, i després al final. O arrossegueu del principi al final. {{key:Shift}} la manté en passos de 45°.

Resultat: una línia de cota amb marques i la longitud escrita. La barra d'estat la repeteix ("Longitud: 12'-6 1/2" (1/4" = 1'-0")."), i {{ui:Propietats}} la mostra sota {{ui:Longitud}}. Els peus i les polzades s'arrodoneixen a la 1/16" més propera.

Si el full encara no té escala, triar {{ui:Longitud}} canvia a {{ui:Calibra}}, i la barra d'estat ho explica: "Calibreu aquest full primer: trieu dos punts a una distància coneguda, o trieu-ne l'escala. Després, mesureu." Un cop definida l'escala, {{ui:Longitud}} torna.

## Dibuixa a escala

En un full calibrat podeu escriure longituds reals mentre dibuixeu una {{ui:Línia}}, {{ui:Fletxa}}, {{ui:Longitud}}, {{ui:Polilínia}}, {{ui:Polígon}}, {{ui:Núvol lliure}}, {{ui:Àrea}} o un espai:

1. Feu clic al primer punt.
2. Apunteu cap a on va el següent segment i escriviu-ne la longitud, com `16` (en la unitat del full), `12'6"` o `3.5 m`. Mentre escriviu, s'obre un quadre al costat del punter.
3. Premeu {{key:Enter}}. El punt cau a aquesta distància, en la direcció del punter.

Per fixar la direcció exacta, afegiu `<` i un angle en graus: `8 < 90` va 8 peus cap amunt, `4<0` cap a la dreta, `10 < 225` cap avall i a l'esquerra, tal com es veu el full (també les pàgines girades). Seguiu escrivint longituds per als cantons següents, i acabeu la forma com de costum. {{key:Esc}} tanca el quadre sense col·locar cap punt.

## Mesura un angle

1. Trieu {{ui:Angle}} ({{key:X}}).
2. Feu clic a l'extrem d'un braç, després al cantó, i després a l'extrem de l'altre braç.

Resultat: els dos braços, un petit arc al cantó i l'angle en graus, amb un decimal (de 0° a 180°). Un angle no necessita escala. {{ui:Propietats}} el mostra sota {{ui:Angle}}, i la llista, el CSV i el BCF el porten.

Un {{ui:Arc}} ({{key:O}}) en un full calibrat també mostra la seva longitud al llarg de la corba a {{ui:Propietats}}.

## Mesura una àrea i el seu perímetre

1. Trieu {{ui:Àrea}} ({{key:Q}}).
2. Feu clic a cada cantó de l'habitació o de la regió.
3. Acabeu amb un doble clic, {{key:Enter}} o un clic dret (doble toc en pantalla tàctil). {{key:Backspace}} elimina l'últim cantó.

Resultat: un contorn ombrejat amb l'àrea i la "P" amb el perímetre al mig, per exemple "128.00 sq ft" i "P 48'-0"". Les escales en peus donen peus quadrats, les de polzades polzades quadrades, les de metres metres quadrats, i les de mil·límetres mil·límetres quadrats. Una àrea necessita almenys tres cantons.

### Forats

Per deixar fora una columna, un pou o un pati, seleccioneu l'àrea i trieu {{ui:Afegeix un forat}} a {{ui:Propietats}}. Feu clic als cantons del forat dins de l'àrea i acabeu com per a una àrea. El forat queda obert (sense ombrejar), la seva àrea es resta, i les seves vores s'afegeixen al perímetre: una habitació de 16' × 8' amb un forat de 4' × 4' mostra "112.00 sq ft" i "P 64'-0"". Afegiu-ne tants com calgui; no es poden encavalcar entre ells ni creuar el contorn de l'àrea. {{ui:Elimina forats}} els elimina tots, i {{key:Mod+Z}} desfà un.

## Compta elements

1. Trieu {{ui:Recompte}} ({{key:U}}).
2. A {{ui:Propietats}}, escriviu un {{ui:Nom del grup}}, per exemple "Desguassos de terra". (Es recorda per a la propera vegada.)
3. Feu clic a cada element del full.

Resultat: cada clic afegeix un punt numerat, el primer punt porta una etiqueta com "Desguassos de terra: 7", i la barra d'estat manté el total acumulat.

- **Començar un altre grup:** premeu {{key:Esc}} una vegada (neteja la selecció), canvieu el {{ui:Nom del grup}} i torneu a fer clic.
- **Afegir a un grup existent:** seleccioneu primer el grup, després trieu {{ui:Recompte}} i feu clic.
- **Eliminar una marca:** amb el grup seleccionat, manteniu {{key:Shift}} i feu clic al punt. En eliminar l'últim punt se suprimeix el grup. En una pantalla tàctil sense teclat, useu {{key:Mod+Z}} o {{ui:Desfés}}.
- **Canviar el nom d'un grup:** seleccioneu-lo i editeu {{ui:Nom del grup}} a {{ui:Propietats}}.

Un grup de recompte pertany a un sol full. Els recomptes en diversos fulls es mostren com a grups separats a la llista de marques.

## Canvia o elimina una escala

Feu clic al botó d'escala de la barra d'estat. El quadre mostra l'escala actual; trieu-ne una altra, trieu {{ui:Selecciona dos punts}} o trieu {{ui:Elimina l'escala}}.

Les longituds i les àrees ja dibuixades es **tornen a mesurar** amb la nova escala a l'instant. Desfer-ho torna a posar l'escala antiga.

## On van els números

- {{ui:Propietats}} mostra els valors de la mesura seleccionada.
- La pestanya {{ui:Marques}} llista cada valor, i el seu CSV té una columna "Measurement". Vegeu [La llista de marques](topic:markups-list-and-export).
- El PDF desat manté l'escala a la pàgina i escriu les longituds i les àrees com a comentaris de mesura, perquè altres programes de PDF que entenen mesures les puguin mostrar. Vegeu [Què guarda el PDF](topic:what-the-pdf-keeps).

Per a un amidament complet de quantitats amb partides, preus descomposts i preus, useu TakeoffCraft: MarkupCraft mesura per a la revisió, no per fer pressupostos.
