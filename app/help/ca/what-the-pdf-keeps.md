---
title: Què es desa al PDF
summary: Exactament què conté la còpia amb marques, què veuen els altres programes de PDF i què es llegeix en obrir un fitxer.
keywords: anotacions pdf, comentaris, dades desades, anada i tornada, etiquetes de pàgina, mesura, estat de revisió, respostes, interoperabilitat, compatibilitat, tornar a obrir, dades privades
from: 6439ad28
---

La còpia amb marques és el PDF original amb comentaris (anotacions PDF) afegits. Les pàgines en si, els seus dibuixos, el text, els marcadors i els enllaços es copien tal com eren.

## Cada marca

| MarkupCraft | Desat com | Els altres visualitzadors de PDF mostren |
|---|---|---|
| Rectangle, núvol de caixa | Anotació quadrada (núvol: vora de núvol) | Un comentari de rectangle o de núvol |
| El·lipse | Anotació de cercle | Un comentari d'el·lipse |
| Polígon, núvol lliure | Anotació de polígon (núvol: vora de núvol) | Un comentari de polígon o de núvol |
| Polilínia | Anotació PolyLine | Un comentari de polilínia |
| Línia, fletxa | Anotació de línia (fletxa: punta de fletxa tancada) | Un comentari de línia o de fletxa |
| Longitud | Anotació de línia marcada com a cota, amb una mesura | Una mesura de longitud, quan el visualitzador la admet |
| Àrea | Anotació de polígon marcada com a àrea, amb una mesura | Una mesura d'àrea, quan és compatible; si no, un polígon |
| Grup de recompte | Una anotació de tinta, un cercle per element; el seu text és "group: n" | Un comentari de tinta |
| Llapis, marcador | Anotació de tinta (marcador marcat com a tal) | Un comentari de tinta |
| Text | Anotació FreeText | Un comentari de quadre de text |
| Crida | Anotació FreeText amb línia de crida | Un comentari de crida |
| Nota | Anotació de text | Una nota adhesiva que s'obre amb el seu text |
| Segell | Anotació de segell | Un comentari de segell |

Cada una es desa amb:

- **el seu aspecte propi**, dibuixat exactament com el dibuixa MarkupCraft a la pantalla, perquè es vegi igual en qualsevol visualitzador i s'imprimeixi igual, incloent-hi l'insígnia del número de deficiència;
- **l'autor**, **les dates de creació i de modificació**, **l'assumpte**, **el text del comentari** (per als quadres de text i les crides, el text i el comentari), **el color** i **l'opacitat**;
- **els seus detalls de MarkupCraft** en una entrada privada que ignoren els altres programes: estat, element de deficiència, estil i tipus, perquè es torni a obrir exactament igual.

## Fils i estats

- Cada resposta es desa com a comentari de resposta enllaçat a la seva marca, amb el seu autor, data i text. Les respostes no tenen cap icona pròpia al full.
- Cada canvi d'estat es desa com a resposta amb un estat de revisió. Els altres programes de revisió el mostren com a Acceptat, Rebutjat o Completat; Obert es desa sense estat.
- Una marca amb un estat diferent de Obert però sense cap canvi d'estat registrat rep una resposta d'estat de revisió, perquè els altres programes també vegin l'estat.
- Les respostes als comentaris de només lectura del fitxer original es desen de la mateixa manera, enllaçades a aquell comentari.

## Cada full

- **Escala:** un full calibrat rep una finestra gràfica de mesura que cobreix la pàgina (la manera estàndard d'emmagatzemar l'escala de la pàgina) i la còpia pròpia de MarkupCraft de la calibració.
- **Número de full:** un número escrit amb {{ui:Reanomena el full}} es converteix en l'etiqueta de la pàgina. Quan alguna pàgina d'un fitxer en té una, totes les pàgines d'aquell fitxer reben una etiqueta: el seu número escrit, si no, l'etiqueta antiga, si no, el seu número de pàgina.
- **Títol del full:** un títol escrit es desa només per a MarkupCraft; els altres visualitzadors no el mostren.

## Text i caràcters

El text s'escriu en Helvetica, que tenen tots els visualitzadors de PDF. Les lletres fora del conjunt de l'Europa occidental (Windows-1252) s'imprimeixen com a "?" a la còpia; el missatge de desament en compta el nombre.

## Fulls de càlcul i motius

Els fulls de càlcul i els motius es guarden en una entrada privada del PDF anomenada `/MarkupCraftShell`. Els altres programes de PDF la ignoren. Un MarkupCraft més antic també la ignora i la descarta la pròxima vegada que desi aquell fitxer.

## Què passa amb els comentaris que ja hi havia

Quan obriu un PDF que ja té comentaris:

- Els comentaris propis de MarkupCraft es tornen a llegir exactament. Si un altre programa n'ha mogut o redimensionat un, en mana la nova posició.
- Els rectangles, les el·lipses, les línies, les polilínies, els polígons, la tinta, els quadres de text i les notes adhesives d'altres programes es converteixen en marques editables. **En desar, MarkupCraft elimina els originals i els torna a escriure a la seva manera**, amb les seves finestres emergents i respostes. El seu aspecte pot canviar una mica.
- Els estats de revisió d'altres programes fixen l'estat; guanya el més recent.
- Tot el demés (ressaltats de text, segells d'altres programes i tipus especials) es **manté sense tocar** a la còpia, només de lectura.
- Els enllaços i els camps de formulari es mantenen sense tocar i no es llisten.

Desar el mateix fitxer una altra vegada mai no duplica res: les marques que ha llegit MarkupCraft se substitueixen, no s'afegeixen de nou.

## Què no es canvia

El fitxer original del disc mai no es canvia. La còpia no està optimitzada per a la mida, de manera que pot ser una mica més gran que l'original. Els PDF protegits (xifrats) no es poden desar.
