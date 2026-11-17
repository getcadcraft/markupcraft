---
title: Revisa en un iPad o en una pantalla tàctil
summary: Premeu, desplaceu i dibuixeu amb els dits o amb un llapis òptic, què actua en aixecar el dit, què necessita un teclat i com mantenir el treball segur en una tauleta.
keywords: ipad, tauleta, tàctil, pantalla tàctil, pinçament, zoom, dos dits, apple pencil, llapis òptic, dit, obra, lloc, superfície, gestos, mòbil
from: 91eb6438
---

MarkupCraft funciona amb tàctil: en un iPad (Safari o Chrome), en un portàtil amb pantalla tàctil, o en una tauleta Windows o Android amb un navegador recent. En horitzontal, una tauleta mostra el disseny complet.

## Gestos

| Gest | Què fa |
|---|---|
| Un dit | Dibuixa amb l'eina actual, o selecciona amb {{ui:Selecció}} |
| Dos dits, separats o pinçats | Fa zoom al voltant del punt entre els dits |
| Dos dits, moguts junts | Desplaça; podeu fer zoom i desplaçar en un sol moviment |
| Un segon dit mentre dibuixeu | Cancel·la el que el primer dit ha començat, i comença a fer zoom |
| Doble toc, o tocar i mantenir | Acaba una polilínia, un polígon, un núvol lliure o una àrea |
| Tocar i mantenir un text, una crida o una nota, amb {{ui:Selecció}} | Obre el seu text per editar-lo |
| Un dit amb {{ui:Desplaça}} activat | Desplaça |

En una pantalla tàctil, els botons de la barra d'eines, els menús, les pestanyes i els botons dels diàlegs són més grans, perquè siguin fàcils de tocar amb un dit.

## Què passa en aixecar

Perquè el primer dit d'un pinçament no deixi mai cap marca, algunes eines actuen quan **aixequeu** el dit, no quan el toqueu:

- {{ui:Recompte}}: el punt s'afegeix en aixecar.
- {{ui:Nota}}: la nota es col·loca en aixecar.
- {{ui:Polilínia}}, {{ui:Polígon}}, {{ui:Núvol lliure}} i {{ui:Àrea}}: cada punt s'afegeix en aixecar.
- {{ui:Línia}}, {{ui:Fletxa}}, {{ui:Longitud}} i {{ui:Calibra}}: quan toqueu l'inici i després toqueu el final, el final es col·loca en aixecar.

Si el dit llisca més d'una mica abans d'aixecar-lo, no compta com a toc i no s'afegeix res. Toqueu net; per corregir, useu {{ui:Desfés}}.

Les eines que arrossegueu ({{ui:Llapis}}, {{ui:Ressalta}}, {{ui:Núvol}}, {{ui:Rectangle}}, {{ui:El·lipse}}, {{ui:Crida}}, {{ui:Text}}, {{ui:Segell}}) comencen tan bon punt les toqueu; un segon dit les cancel·la.

## Seleccionar amb un dit

- Toqueu una marca per seleccionar-la; arrossegueu-la per moure-la; arrossegueu una nansa per redimensionar-la. Després que un dit toqui el full, les marques i les nanses tenen una zona de toc més gran, i les nanses es dibuixen més grans.
- Arrossegueu sobre el full buit per dibuixar una finestra de selecció (d'esquerra a dreta: completament dins; de dreta a esquerra: tocant).
- A {{ui:Selecció}}, un dit **no** desplaça. Useu dos dits, o trieu {{ui:Desplaça}}.

## Coses que necessiten un teclat

Sense teclat no hi ha {{key:Shift}}, {{key:Esc}} ni {{key:Enter}}. Això és el que cal fer en lloc seu:

| Acció de teclat | Sense teclat |
|---|---|
| {{key:Esc}} per cancel·lar o tornar a {{ui:Selecció}} | Toqueu {{ui:Selecció}} a la barra d'eines |
| {{key:Shift}} per a línies a 45°, quadrats i cercles | Dibuixeu amb cura; ajusteu amb les nanses |
| Clic amb {{key:Shift}} per afegir a una selecció | Useu una finestra de selecció |
| Clic amb {{key:Shift}} per treure un punt de recompte | {{ui:Desfés}} just després d'un toc equivocat |
| {{key:Mod+Enter}} per acabar d'escriure | Toqueu fora del quadre de text |
| {{key:Enter}} per acabar una polilínia, o per editar el text d'una marca | Toqueu i mantingueu, o {{ui:Edita a la fulla}} a {{ui:Propietats}} |
| {{key:Delete}} | {{ui:Suprimeix}} a la barra d'eines o a {{ui:Propietats}} |
| Començar un grup de recompte nou amb {{key:Esc}} | Toqueu el full buit amb {{ui:Selecció}}, i després torneu a tocar {{ui:Recompte}} |

Una funda amb teclat o un teclat Bluetooth recupera totes les dreceres; en un iPad, la tecla ⌘ funciona per a {{key:Mod+Z}} i la resta.

Els botons no mostren les seves indicacions emergents en tàctil. La tecla de cada eina figura a [Teclat i ratolí](topic:keyboard).

## Llapis òptic i Apple Pencil

Un llapis òptic (Apple Pencil, Surface Pen i similars) funciona com un ratolí: dibuixa i selecciona, i actua de seguida en tocar. Useu els dits per al pinçament i el desplaçament. La pressió no canvia el gruix de línia.

## Obrir i desar en un iPad

- {{ui:Obre}} mostra el selector de Fitxers: iCloud Drive, Al meu iPad i qualsevol aplicació d'emmagatzematge que hàgiu connectat.
- {{ui:Desa}} demana per baixar; la còpia va a Fitxers, dins de Baixades (o a la carpeta definida a la configuració de Safari).

## Mantenir el treball segur en una tauleta

:::warning
Safari a l'iPad no avisa abans de sortir d'una pàgina amb treball no desat, i iPadOS pot tornar a carregar una pestanya en segon pla per alliberar memòria. MarkupCraft guarda una còpia de recuperació al navegador i la ofereix quan la torneu a obrir (vegeu [Recupera el vostre treball](common:recover)), però **deseu després de cada full o cada recorregut**: una pestanya privada no guarda cap còpia.
:::

- El vostre nom, la configuració de les eines i el calaix d'eines es guarden en aquell navegador d'aquell iPad, igual que en un ordinador. Vegeu [Què es queda en aquest navegador](topic:browser-storage).
- **Abans d'una visita a l'obra sense cobertura:** mentre encara hi sou en línia, obriu MarkupCraft a Safari (o Chrome) a l'iPad i trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de dalt. Espereu fins que digui "Preparat per treballar sense connexió" (compta "Desant N de M"; el lector i l'escriptor de PDF pesen uns 6 MB). A l'obra, obriu la mateixa adreça o un marcador d'aquesta; obrir, marcar i desar PDF funciona sense connexió. Si diu "Sense connexió no disponible", sou en una pestanya privada; useu-ne una de normal. Vegeu [Treballar fora de línia](common:offline).
- Safari elimina una còpia fora de línia que no heu fet servir durant unes setmanes. Abans d'un viatge, feu clic a "Preparat per treballar sense connexió" i trieu "Torna a desar (obté la versió més recent)".
- Els jocs de fulls molt grans fan servir molta memòria. En una tauleta, obriu només els fulls que necessiteu per a la visita.

## En un telèfon

Funciona, però la pantalla és petita: les parts s'apilen (barra d'eines, full, barra d'estat, panells i, després, la llista de fulls), i la barra d'eines es desplaça de costat. Useu un telèfon per mirar i per afegir una nota ràpida, i una tauleta o un ordinador per a una revisió de debò.
