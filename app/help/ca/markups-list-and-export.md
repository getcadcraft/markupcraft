---
title: La llista de marques, filtres i exportacions
summary: Vegeu totes les marques del conjunt, filtreu per full, autor, estat i tipus, salteu-ne una i exporteu la llista com a CSV o BCF.
keywords: llista de marques, llista, resum, xlsx, llibre de càlcul, informe pdf, importa bcf, filtre, ordena, informe, exporta, csv, full de càlcul, bcf, bcfzip, incidències, llista de comentaris, salta
from: 6c70261e
---

## Obrir la llista

Trieu la pestanya {{ui:Marques}} a la dreta. Es llisten totes les marques de cada fitxer obert, en ordre de full i després en l'ordre en què es van fer. Cada fila mostra:

- una icona del color de la marca, el seu número de deficiència si en té un ("#4"), i el seu assumpte,
- el seu text, la paraula del segell o el valor mesurat, i el seu comentari,
- el full, l'autor i la data,
- el seu estat (o "Només lectura" per als comentaris que venen amb el fitxer), i un recompte de respostes quan en té.

La línia de sobre de la llista els compta: "38 marques", o "12 de 38 marques" quan hi ha un filtre.

## Saltar a una marca

Feu clic en una fila. MarkupCraft mostra aquell full, selecciona la marca i fa zoom fins a ella quan és fora de pantalla o massa petita per veure-la. {{ui:Propietats}} té els seus detalls i el fil quan torneu a aquella pestanya.

## Filtrar

Quatre menús sobre la llista. Es combinen.

| Menú | Opcions |
|---|---|
| {{ui:Full}} | Tots els fulls, Aquest full (us segueix quan canvieu de full), o qualsevol full que tingui marques |
| {{ui:Autor}} | Qualsevol, o cada autor del conjunt |
| {{ui:Estat}} | Qualsevol estat, Obert, Acceptat, Rebutjat, Completat |
| {{ui:Tipus}} | Qualsevol tipus, o cada classe de marca del conjunt |

Exemples:

- Què queda obert en aquest full: {{ui:Full}} "Aquest full", {{ui:Estat}} "Obert".
- Els comentaris d'un consultor: {{ui:Autor}} el seu nom.
- Totes les mesures: {{ui:Tipus}} "Longitud" o "Àrea".

La llista mostra fins a 2000 files; en conjunts molt grans, filtreu-la.

## Exportar a CSV

Trieu {{ui:CSV}} a la part superior de la pestanya. Obtindreu "<name> markups.csv" amb **les marques tal com estan filtrades**, una per fila, amb aquestes columnes:

Núm. de deficiència, Full, Fitxer, Pàgina, Tipus, Assumpte, Text, Comentari, Mesura, Autor, Creat, Modificat, Estat, Respostes, Última resposta, Color, Només lectura.

- "Text" conté les paraules de les caixes de text i de les crides, el text d'un segell, o el nom d'un grup de recompte.
- "Mesura" conté les longituds, "àrea, perímetre" per a les àrees, i "grup: n" per als recomptes.
- Les dates són marques de temps completes en UTC.

Per exportar-ho tot, torneu primer cada filtre a la seva primera opció.

## Un resum: llibre de càlcul o PDF

- {{ui:XLSX}} descarrega "<name> markup summary.xlsx" amb tres fulls: **Marques** (una fila per marca llistada, les mateixes columnes que el CSV), **Per full** (quantes marques té cada full, obertes i tancades, i quantes de cada tipus, amb totals) i **Llista de deficiències** (quan hi ha elements de deficiència).
- {{ui:PDF}} descarrega "<name> markup summary.pdf": un informe per imprimir o enviar, amb el nom del conjunt, la data i una taula de les marques llistades (número, full, tipus, assumpte, text o comentari, valor mesurat, autor, estat i l'última resposta). El text llarg es parteix, i la capçalera de la taula es repeteix a cada pàgina.

Tots dos agafen la llista tal com està filtrada; per tant, filtreu primer si voleu informar d'un sol full, d'un sol autor o només dels elements oberts.

## Exportar a BCF

Trieu {{ui:BCF}}. MarkupCraft fa una imatge de cada marca llistada al seu full ("Fent instantànies per a BCF (3 de 12)…") i després descarrega "<name> markups.bcfzip". Cada marca es converteix en un tema BCF amb el seu estat, autor i dates; les respostes com a comentaris; el responsable i la data límit del seu element de deficiència; i la instantània.

Useu-lo per portar els comentaris de revisió del dibuix a les eines de coordinació BIM que llegeixen BCF. El que es transfereix, i el que no, és a [Conceptes bàsics de BCF](topic:bcf-basics).

## Importar BCF

{{ui:Importa BCF}} llegeix un fitxer .bcfzip (o .bcf) d'una eina BIM:

- Les incidències que venen de l'exportació BCF pròpia de MarkupCraft tornen a trobar les seves marques: les respostes noves s'afegeixen al fil, i s'estableix un estat nou (Closed compta com a Completat). Les respostes que ja hi són no s'afegeixen dues vegades.
- Les altres incidències es converteixen en notes, amb el seu títol, descripció, autor i comentaris. Una nota va al full el número o nom del qual indiquen les etiquetes de la incidència; si no, va al full obert. Com que una càmera BIM no té lloc al paper, aquestes notes s'apilen a la cantonada superior esquerra del full perquè les moveu vosaltres.

La importació completa és un sol pas: {{key:Mod+Z}} la desfà. Vegeu [Conceptes bàsics de BCF](topic:bcf-basics).

## Una llegenda al full

{{ui:Llegenda}} a la pestanya {{ui:Marques}} situa una llegenda a la part superior dreta del que veieu: una caixa que llista cada classe de marca del full (per assumpte i color, com "Núvol", "Pregunta" o "Endolls") amb quantes n'hi ha. Un grup de recompte compta les seves marques. La llegenda continua comptant mentre dibuixeu, moveu o suprimiu marques, i s'imprimeix i es desa amb els recomptes d'aquell moment.

Moveu-la i canvieu-ne la mida com qualsevol marca. A les seves {{ui:Propietats}}, canvieu el seu {{ui:Títol}}, o poseu {{ui:Recomptes}} a {{ui:Tot el conjunt}} per comptar tots els fulls. Els espais, les altres llegendes i els comentaris d'altres programes no es compten.

## Les vostres columnes i l'ordenació

{{ui:Columnes}} a la pestanya {{ui:Marques}} afegeix columnes pròpies a cada marca: un **text**, una **opció** (com Gremi: Mecànic, Elèctric, Fontaneria), un **número** (com Cost) o una **data**. Doneu-ne un nom a cadascuna, trieu-ne el tipus, enumereu les opcions per a una columna d'opcions, i trieu {{ui:Desa les columnes}}.

- Ompliu-les a {{ui:Propietats}}: cada columna hi té un camp. Una columna de número només accepta números, i una columna de data només una data.
- La llista mostra els valors sota cada marca. El filtre {{ui:Columna}} tria un valor (o les marques on està buit), i {{ui:Ordena}} ordena la llista per una columna, per autor, estat, tipus o data, en lloc de per full.
- Les exportacions CSV i XLSX porten les columnes després de les habituals. Les columnes es desen amb el PDF i tornen en reobrir-lo.

## Què encara no fa la llista

- Agrupar la llista (ordeneu i després filtreu).
- Editar valors a la llista (editeu-los a {{ui:Propietats}}; els camps de deficiència es poden editar a la pestanya {{ui:Llista de deficiències}}).
