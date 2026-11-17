---
title: Tots els tipus de marca
summary: Les disset classes de marca, les seves tecles, com es dibuixa cadascuna, el seu aspecte per defecte i què esdevé al PDF desat.
keywords: tipus de marca, llista d'eines, tipus d'anotació, núvol, crida, text, nota, segell, llapis, ressaltador, línia, fletxa, rectangle, el·lipse, polilínia, polígon, longitud, àrea, recompte
from: 29bf32e7
---

## Les eines

| Barra d'eines | Tecla | Com es dibuixa | Aspecte per defecte | Al PDF desat |
|---|---|---|---|---|
| {{ui:Llapis}} | {{key:P}} | Arrossegar | Vermell, 1.5 pt | Tinta |
| {{ui:Ressalta}} | {{key:I}} | Arrossegar | Groc, 14 pt d'amplada, transparent, tenyeix el que hi ha sota | Tinta (marcada com a traç de ressaltador) |
| {{ui:Línia}} | {{key:L}} | Arrossegar, o fer clic a l'inici i al final | Vermell, 2 pt | Línia |
| {{ui:Fletxa}} | {{key:A}} | Arrossegar, o fer clic a l'inici i al final | Vermell, 2 pt, punta tancada al final | Línia amb punta de fletxa |
| {{ui:Arc}} | {{key:O}} | Fer clic a l'inici, a un punt de l'arc i després al final | Vermell, 2 pt | Polilínia seguint l'arc |
| {{ui:Rectangle}} | {{key:R}} | Arrossegar un quadre | Vermell, 2 pt, sense farciment | Quadrat |
| {{ui:El·lipse}} | {{key:E}} | Arrossegar un quadre | Vermell, 2 pt, sense farciment | Cercle |
| {{ui:Polilínia}} | {{key:Y}} | Fer clic als punts, doble clic per acabar | Vermell, 2 pt | Polilínia |
| {{ui:Polígon}} | {{key:G}} | Fer clic als punts, doble clic per acabar | Vermell, 2 pt, sense farciment | Polígon |
| {{ui:Núvol}} | {{key:C}} | Arrossegar un quadre | Vermell, arcs de 1.5 pt | Quadrat amb vora de núvol |
| {{ui:Núvol lliure}} | {{key:Shift+C}} | Fer clic als punts, doble clic per acabar | Vermell, arcs de 1.5 pt | Polígon amb vora de núvol |
| {{ui:Crida}} | {{key:K}} | Premer sobre el punt, arrossegar fins al text, escriure | Text i línia de crida vermells, 1 pt, text de 12 pt | Caixa de text amb línia de crida |
| {{ui:Text}} | {{key:T}} | Fer clic o arrossegar un quadre, escriure | Text vermell de 12 pt, sense vora | Caixa de text |
| {{ui:Nota}} | {{key:N}} | Fer clic, escriure | Icona de nota groga | Nota adhesiva |
| {{ui:Segell}} | {{key:S}} | Triar un segell, fer clic o arrossegar | Majúscules emmarcades i "Per <name>, <date>"; color segons el significat | Segell |
| {{ui:Longitud}} | {{key:M}} | Fer clic a l'inici i al final (cal una escala) | Cota blava amb traços i la longitud | Línia marcada com a cota, amb una mesura |
| {{ui:Angle}} | {{key:X}} | Fer clic al final d'un braç, al cantó, i al final de l'altre braç | Braços blaus, un petit arc al cantó i l'angle en graus | Polilínia amb l'angle com a text |
| {{ui:Àrea}} | {{key:Q}} | Fer clic a les cantonades, doble clic per acabar (cal una escala) | Contorn blau, farciment blau clar, àrea i perímetre | Polígon marcat com a àrea, amb una mesura |
| {{ui:Recompte}} | {{key:U}} | Fer clic a cada element | Punts numerats taronges i una etiqueta "grup: n" | Un comentari de tinta per grup, un anell per element |

En tàctil, "doble clic per acabar" és un doble toc, i "clic" és un toc que actua en aixecar el dit (per als punts, les notes i els recomptes).

## Què porta cada marca

| Camp | On es veu |
|---|---|
| Autor | {{ui:Propietats}}, la llista, la segona línia del segell, altres visualitzadors de PDF |
| Creat i modificat | {{ui:Propietats}} (la vostra zona horària), la llista, el CSV |
| Estat | Obert, Acceptat, Rebutjat o Completat |
| Assumpte | Una etiqueta curta; per defecte, el tipus ("Núvol", "Caixa de text", "Mesura de longitud") |
| Comentari | Notes més llargues. En una nota, el seu text és el seu comentari. |
| Text | Només caixes de text i crides |
| Respostes | El fil, amb els canvis d'estat |
| Element de deficiència | Número, responsable, data límit, estat de l'element, quan s'afegeix a la llista de deficiències |
| Estil | Color, amplada de línia, farciment i opacitat del farciment (formes tancades, text i crides), opacitat, mida del text (text, crides i mesures) |

## Comentaris de només lectura

Els comentaris que venen amb el fitxer i que MarkupCraft no pot editar (ressaltats de text, segells d'altres programes i altres tipus especials) es llisten amb el tipus "Altre" i el distintiu d'estat "Només lectura". Mantenen exactament l'aspecte que els dona el fitxer. Els podeu seleccionar, veure'n l'autor, l'assumpte i el comentari, i respondre'ls.

## Encara no implementat

Els fitxers adjunts encara no estan implementats. Qualsevol marca es pot enllaçar a un full; vegeu [Enllaços de full](topic:sheet-links). Les imatges i les signatures es col·loquen amb l'eina {{ui:Segell}}; vegeu [Segells i notes](topic:stamps-and-notes). Vegeu [Què encara no està implementat](topic:not-built-yet).
