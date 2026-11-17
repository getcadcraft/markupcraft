---
title: Treballa amb diversos fitxers alhora
summary: Obriu molts PDF com un sol conjunt, trobeu fulls entre fitxers, copieu marques entre ells i deseu la còpia de cada fitxer.
keywords: diversos fitxers, pdf múltiples, joc de plànols, conjunt, lot, molts fitxers, combina, disciplines, arquitectònic, estructural, mecànic, desa tot, tanca
from: f59354ae
---

Un joc de plànols sovint arriba com un PDF per disciplina, o un PDF per full. MarkupCraft tracta tot el que obriu com un **sol conjunt**.

## Obriu-los junts

Seleccioneu tots els PDF al selector de fitxers de cop, o deixeu-los tots a la zona dels fulls. Per afegir-ne més tard, obriu-los de la mateixa manera; s'afegeixen al final de la llista {{ui:Fulls}} en l'ordre en què els obriu.

Resultat: «S'han obert 6 fitxers (84 fulls al conjunt).» Cada pàgina és un full. Els fulls amb número de full mostren «Full A-101» sota el seu nom; els altres mostren el fitxer i la pàgina.

No hi ha un fitxer de «conjunt» desat: la propera vegada, obriu els mateixos PDF de nou (les còpies «(marked up)», si les heu desat).

## A tot el conjunt

- **Trobar un full:** {{ui:Cerca fulls}} busca als números de full, noms de full i noms de fitxer de cada fitxer. {{key:PageUp}} i {{key:PageDown}} recorren tots els fulls de tots els fitxers en ordre.
- **Llista de marques:** la pestanya {{ui:Marques}} llista les marques de cada fitxer. Filtreu per {{ui:Full}} per reduir-la. El CSV té una columna de fitxer.
- **Llista de deficiències:** una sola numeració per a tot el conjunt.
- **Comparar:** el full antic i el nou poden venir de fitxers diferents.
- **Copiar i enganxar:** {{key:Mod+C}} en un full i {{key:Mod+V}} en un altre, en qualsevol fitxer. La còpia cau al mateix lloc de la pàgina, lleugerament desplaçada.

## Desa

Trieu {{ui:Desa}}. Amb més d'un fitxer obert, MarkupCraft pregunta:

- {{ui:Aquest fitxer}}: una còpia amb marques del fitxer del full en què sou.
- {{ui:Cada fitxer canviat}}: una còpia de cada fitxer amb canvis sense desar. Cadascuna es baixa per separat, com a «<file name> (marked up).pdf».
- {{ui:Cancel·la}}

:::chromium
La primera vegada que deseu diversos fitxers alhora, Chrome i Edge poden preguntar si aquest lloc pot baixar diversos fitxers. Trieu {{ui:Permet}}; si no, només arriba la primera còpia.
:::

:::safari
Safari pot preguntar una vegada per cada fitxer. En un iPad, cada còpia va a l'aplicació Fitxers.
:::

Un fitxer les marques del qual s'han desat deixa de comptar com a canviat; els altres encara ho fan.

Les exportacions CSV, BCF i de la llista de deficiències porten el nom del **primer** fitxer que heu obert.

## Tanca

{{ui:Tanca}} tanca tot el conjunt; encara no hi ha manera de tancar només un fitxer. Si hi ha alguna cosa sense desar, pregunta:

- {{ui:Cancel·la}}: no passa res.
- {{ui:Tanca sense desar}}: les marques sense desar es perden.
- {{ui:Desa còpies primer}}: desa cada fitxer canviat i després tanca.

Tancar també esborra l'historial de desfer.

## Conjunts grans

- El text de cada pàgina es llegeix en obrir per trobar els números de full, de manera que un conjunt de 100 fulls triga una estona. La barra d'estat compta els fulls mentre avança.
- Les imatges dels fulls a la llista es dibuixen a mesura que us hi desplaceu.
- Cada PDF obert es guarda a la memòria de la pestanya del navegador. Si la pestanya s'alenteix, tanqueu altres pestanyes pesades, o reviseu una disciplina cada vegada.
- Obrir el mateix fitxer dues vegades us dona dues còpies dels seus fulls. Si passa, trieu {{ui:Tanca}} i torneu a obrir el conjunt.
