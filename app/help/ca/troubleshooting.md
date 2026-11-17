---
title: Resolució de problemes
summary: Missatges que mostra MarkupCraft i què fer-hi, més solucions per a coses que sembla que no funcionen.
keywords: problema, error, no funciona, ajuda, missatge, no s'obre, no es pot desar, contrasenya, protegit, mesura rebutjada, calibra, fora de línia, en blanc, lent, marques perdudes, interrogants
from: bb650b39
---

La majoria de problemes s'expliquen a la barra d'estat de la part inferior de la pantalla. Llegiu-la primer.

## Obrir fitxers

**"MarkupCraft obre fitxers PDF. "x" no és un PDF."**
Heu triat o arrossegat una altra cosa. Només s'obren els PDF. Exporteu primer els plànols del vostre programa CAD en format PDF.

**'"nom" necessita una contrasenya per obrir-se. Obriu una còpia sense protecció.'**
El PDF està protegit amb contrasenya. Demaneu a qui l'ha enviat una còpia sense protecció, o obriu-lo en un programa de PDF on sabeu la contrasenya i deseu-ne una còpia sense contrasenya.

**'"nom" no s'ha pogut llegir com a PDF (…)'**
El fitxer està malmès o no és realment un PDF (una baixada incompleta, un adjunt de correu tallat). Torneu a baixar-lo. Si altres programes de PDF l'obren, useu-ne "Anomena i desa" per fer una còpia neta i obriu-la.

**"Alguns fitxers no s'han obert"**
Quan n'obriu diversos alhora, aquest quadre llista els fitxers que han fallat i el motiu. Els altres estan oberts.

**"El lector de PDF no s'ha pogut carregar: …"**
No s'ha pogut obtenir el motor de PDF. En línia: torneu a carregar la pàgina i proveu-ho de nou; comproveu que un tallafoc o un bloquejador de contingut no bloquegi el lloc. Fora de línia: MarkupCraft no s'ha desat per usar fora de línia en aquest navegador (la barra de dalt no diu "Preparat fora de línia"). Connecteu-vos, trieu {{ui:Desa per fer-lo servir sense connexió}}, i espereu "Preparat fora de línia". Vegeu [Treballar fora de línia](common:offline).

**"Algunes anotacions es poden mostrar dues vegades a la pantalla" o "No s'han pogut llegir detalls addicionals de les anotacions"**
Els comentaris existents del fitxer són inusuals. Igualment s'obren tan bé com pot MarkupCraft; comproveu-los abans de confiar-hi. Desar continua funcionant.

**El full té un nom equivocat, o "pàgina 3"**
Vegeu [Com obtenen el nom els fulls](topic:open-a-plan-set#how-sheets-get-their-names). Els fulls escanejats no tenen text per llegir; useu {{ui:Reanomena el full}}.

**Els mateixos fulls apareixen dues vegades**
S'ha obert el mateix fitxer dues vegades. Trieu {{ui:Tanca}} (deseu primer si cal) i torneu a obrir el conjunt.

## Dibuixar i seleccionar

**No passa res quan faig clic al full**
Comproveu quina eina està premuda a la barra d'eines i llegiu la barra d'estat. Amb {{ui:Rectangle}}, {{ui:El·lipse}} i {{ui:Núvol}}, un clic sense arrossegar no dibuixa res: arrossegueu. Amb {{ui:Polilínia}}, {{ui:Polígon}}, {{ui:Núvol lliure}} i {{ui:Àrea}}, s'hi afegeixen punts: acabeu amb doble clic o amb {{key:Enter}}.

**"Un polígon necessita almenys 3 punts." (o 2 per a una polilínia)**
Feu clic en més punts abans d'acabar.

**"No s'ha escrit res, per tant no s'ha afegit cap text."**
Els quadres de text i les crides només es conserven si tenen text. Torneu-los a dibuixar i escriviu abans de fer clic en un altre lloc.

**"Els dos punts són iguals. Feu clic en dos punts diferents."**
Per a línies, fletxes, longituds i calibratge, els dos extrems han d'estar separats. Arrossegueu, o feu clic dues vegades en llocs diferents.

**No puc moure ni suprimir una marca; té un quadre gris discontinu**
És un comentari de només lectura que venia amb el fitxer (per exemple, un ressaltat de text). MarkupCraft el manté tal com és: només hi podeu respondre. La barra d'estat diu "la marca(es) de només lectura es conserven tal com són al fitxer".

**Les tecles escriuen lletres en un quadre en lloc de triar eines**
El cursor és en un quadre de text (una resposta, un camp de {{ui:Propietats}}, la cerca de fulls). Primer feu clic en una part buida de l'àrea del full, o premeu {{key:Esc}} si editeu el text de la marca.

**Space no desplaça, o les tecles de fletxa no fan res**
Acabeu de fer clic en un botó de la barra d'eines, de manera que encara té el teclat. Arrossegueu amb el botó central del ratolí, o feu clic una vegada al full amb {{ui:Selecció}} activada, i proveu-ho de nou. Vegeu també [Teclat i ratolí](topic:keyboard#when-a-key-does-nothing).

**Un pessic a la pantalla tàctil ha deixat una marca**
Una eina d'arrossegament (llapis, núvol, rectangle) s'ha iniciat abans que arribés el segon dit i ha acabat abans de cancel·lar-se. Premeu {{ui:Desfés}}. Poseu els dos dits alhora quan vulgueu fer zoom.

## Mesurar

**"Primer calibreu aquest full: trieu dos punts a una distància coneguda, o trieu-ne l'escala. Després mesureu."**
Cada full necessita la seva pròpia escala abans de {{ui:Longitud}} o {{ui:Àrea}}. MarkupCraft ha canviat a {{ui:Calibra}}: feu clic als dos extrems d'una cota coneguda i escriviu-ne la longitud, o feu clic al botó d'escala de la barra d'estat i trieu una escala. Vegeu [Calibrar un full i mesurar](topic:calibrate-and-measure).

**"Aquesta no és una longitud que MarkupCraft entengui."**
Escriviu-la com `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`. Vegeu [Unitats, longituds i escales](topic:units-and-scales).

**Les mesures són una mica inexactes, o molt inexactes**
- Una escala predefinida en un PDF que no és a mida completa mesura malament. Calibreu a partir d'una cota llarga i coneguda.
- Un separador de milers s'ha llegit com a punt decimal: `1,200 mm` vol dir 1.2 mm. Escriviu `1200 mm`.
- Amplieu quan feu clic als extrems.
- És possible que el plànol no estigui a escala ("NTS").

**"Seleccioneu primer un grup de recompte, i després feu {{key:Shift}}+clic en una marca per eliminar-la."**
Trieu {{ui:Selecció}}, feu clic al grup de recompte, i després torneu a triar {{ui:Recompte}} i feu clic amb {{key:Shift}} al punt.

## Desar

**"Aquest PDF està protegit (xifrat), de manera que no es pot escriure una còpia marcada."**
El fitxer prohibeix els canvis. Demaneu una còpia sense protecció. Mentrestant, encara podeu exportar la llista de marques com a CSV o BCF.

**"El component d'escriptura de PDF no s'ha pogut carregar: …"**
Normalment esteu fora de línia i l'aplicació no s'ha desat per usar fora de línia (no hi ha "Preparat fora de línia" a la barra de dalt). Les vostres marques encara són a la pestanya: deixeu-la oberta, connecteu-vos i torneu a triar {{ui:Desa}}. Després trieu {{ui:Desa per fer-lo servir sense connexió}} perquè funcioni fora de línia la propera vegada; la còpia desada inclou el component d'escriptura de PDF.

**"No s'ha pogut desar <file>"**
El quadre mostra el motiu. Les vostres marques encara són a la pestanya. Torneu-ho a provar; si es repeteix, exporteu el CSV perquè els comentaris no es perdin, i informeu del missatge.

**He triat Desa, però només ha arribat un fitxer**
El navegador ha bloquejat les baixades addicionals. Mireu si hi ha un avís a la barra d'adreces i permeteu que aquest lloc baixi diversos fitxers, i després torneu a desar.

**No trobo el fitxer desat**
Ha anat a la carpeta de baixades del navegador. Obriu la llista de baixades del navegador (a Chrome i Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; a Firefox i Safari, el botó de baixades de la barra d'eines) per veure on. Vegeu [Navegadors i ordinadors](common:browsers).

**Alguns textos mostren "?" en altres visualitzadors de PDF**
Els caràcters fora del conjunt d'Europa occidental s'imprimeixen com a "?" a la còpia. El missatge de desament els compta. Vegeu [Desar el PDF marcat](topic:save-the-marked-up-pdf).

**El segell mostra la data de demà (o d'ahir)**
Les dates dels segells són en UTC. Vegeu [Segells i notes adhesives](topic:stamps-and-notes).

## Treballar fora de línia

**El botó de fora de línia diu "No s'ha pogut desar"**
Alguns fitxers de l'aplicació no s'han baixat. Comproveu la connexió i torneu a fer clic al botó; compta "Desant N de M" fins que diu "Preparat fora de línia".

**El botó de fora de línia diu "Fora de línia no disponible"**
Aquesta finestra del navegador no pot conservar una còpia per usar fora de línia: una finestra privada, o un ordinador amb una política que ho bloqueja. Obriu MarkupCraft en una finestra normal i proveu-ho de nou.

**Fora de línia, l'aplicació és una versió anterior**
La còpia fora de línia és la versió que heu desat. Quan sigueu en línia, feu clic a "Preparat fora de línia" i trieu "Torna a desar (obtén la versió més recent)". Per alliberar espai, trieu "Elimina la còpia fora de línia". Vegeu [Treballar fora de línia](common:offline).

**L'ajuda no s'obre**
Premeu {{key:F1}} (en un Mac, amb **fn**), o trieu {{ui:Ajuda}} a la barra de dalt. També funciona fora de línia.

## Coses perdudes

**Les meves marques han desaparegut després de tancar o recarregar la pestanya**
Torneu a obrir MarkupCraft en el mateix navegador: us ofereix recuperar el treball no desat amb "Voleu recuperar el vostre treball?". Trieu {{ui:Recupera}} i deseu el PDF. Les còpies es conserven fins a 30 dies; una finestra privada, o esborrar les dades del lloc, no en deixa cap. Vegeu [Recuperar el vostre treball](common:recover).

**El meu nom, la configuració d'eines o la caixa d'eines han desaparegut**
Només es conserven en aquest navegador, i s'han esborrat (dades del lloc esborrades, una finestra privada, un altre navegador o ordinador, o la neteja de Safari dels llocs que no s'han visitat durant un temps). Torneu a definir el nom i importeu la caixa exportada. Vegeu [Què es conserva en aquest navegador](topic:browser-storage).

**"No s'ha pogut conservar la caixa d'eines en aquest navegador (l'emmagatzematge està desactivat o ple). Exporteu-la per conservar-la."**
El navegador no vol desar dades d'aquest lloc (mode privat, emmagatzematge bloquejat per una configuració o política, o ple). Exporteu la caixa després de canviar-la, i importeu-la la propera vegada.

## Visualització i velocitat

**El full es veu borrós durant un moment**
MarkupCraft mostra una representació ràpida i grollera mentre feu zoom o desplaceu, i la redibuixa nítida un moment després d'aturar-vos.

**Tot va lent amb un conjunt gran**
Tanqueu altres pestanyes pesades, obriu menys fitxers alhora, i eviteu fer zoom al màxim en fulls enormes. Vegeu [Treballar amb diversos fitxers alhora](topic:several-files#big-sets).

**El full és fosc amb línies clares**
Esteu al tema {{ui:Model}}. Trieu {{ui:Paper}} a la barra de dalt per tenir línies fosques sobre blanc. Les vostres marques i el PDF desat no es veuen afectats.
