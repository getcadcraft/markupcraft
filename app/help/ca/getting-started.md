---
title: Primers passos amb MarkupCraft
summary: Obriu un joc de plànols, poseu el primer núvol i la primera crida en una fulla i deseu una còpia amb les marques.
keywords: inici, primers passos, obre pdf, revisió, marca, revisió en vermell, llapis vermell, joc de plànols, tutorial, inici ràpid
from: 0b1aae4e
---

MarkupCraft serveix per revisar plànols: obriu jocs de plànols en PDF, els marqueu amb núvols, crides, text, segells i mesures, feu seguiment de l'estat de cada comentari, i deseu una còpia del PDF que qualsevol visor de PDF pot mostrar.

Funciona al navegador web. Els vostres PDF s'obren al vostre propi ordinador i **mai no es pugen**. Desar baixa una còpia nova; el fitxer original no canvia.

:::note
MarkupCraft està en desenvolupament. Aquesta ajuda descriu la versió que esteu executant. Les coses que encara no fa es llisten a [Què encara no està implementat](topic:not-built-yet).
:::

## Què cal

- Un Chrome, Edge, Firefox o Safari recent en un ordinador amb Mac, Windows o Linux, o Safari o Chrome en un iPad. Consulteu [Navegadors i ordinadors](common:browsers).
- Un o més fitxers PDF. Un joc de plànols complet pot ser un sol PDF o molts.
- Un ratolí amb roda és el més còmode. També va bé un trackpad, i una pantalla tàctil (vegeu [Revisió en un iPad o en una pantalla tàctil](topic:review-on-a-tablet)).

## La vostra primera revisió en deu passos

1. Obriu MarkupCraft al navegador. Al mig de la pantalla diu "Obre un joc de plànols".
2. Trieu {{ui:Obre PDF}} (o {{ui:Obre}} a l'extrem esquerre de la barra d'eines, o premeu {{key:Mod+O}}), escolliu un o més PDF i confirmeu.
   També podeu arrossegar PDF des de {{pick:mac=Finder|windows=File Explorer|linux=el gestor de fitxers}} i deixar-los a la zona de la fulla.
   La primera vegada, la barra d'estat de baix diu "Carregant el lector de PDF…". Després, cada pàgina es converteix en una fulla a la llista {{ui:Fulls}} de l'esquerra, i la primera fulla omple el mig.
3. Feu clic a una fulla de la llista per mostrar-la. Gireu la roda del ratolí sobre la fulla per ampliar on hi ha el punter.
4. Trieu {{ui:Núvol}} al grup {{ui:Revisa}} de la barra d'eines (o premeu {{key:C}}).
   La primera vegada que trieu una eina de dibuix, MarkupCraft us demana el vostre nom. Escriviu-lo i trieu {{ui:Desa}}. Cada marca registra el vostre nom. (Més a [Definiu el vostre nom d'autor](topic:set-your-name).)
5. Arrossegueu una caixa al voltant de l'àrea que voleu marcar. Apareix un núvol de revisió vermell i queda seleccionat.
6. Trieu {{ui:Crida}} al grup {{ui:Anota}} (o premeu {{key:K}}). Premeu sobre el que assenyaleu, arrossegueu fins on ha d'anar el text i deixeu anar.
7. Escriviu el comentari a la caixa que apareix. Feu clic fora de la caixa (o premeu {{key:Mod+Enter}}) per acabar.
8. Premeu {{key:Esc}} dues vegades: una per netejar la selecció, i una altra per tornar a l'eina {{ui:Selecció}}. Feu clic al núvol. La pestanya {{ui:Propietats}} de la dreta mostra qui l'ha fet, quan, i el seu {{ui:Estat}}.
9. Trieu {{ui:Desa}} a la barra d'eines (o premeu {{key:Mod+S}}).
   El navegador baixa una còpia amb un nom com "A-Plans (marked up).pdf". La barra d'estat indica quantes marques s'han escrit.
10. Obriu aquesta còpia en qualsevol visor de PDF per comprovar-ho: el núvol i la crida hi són, com a comentaris PDF normals amb el vostre nom.

Per continuar més tard, obriu la còpia "(marked up)" a MarkupCraft. Les marques tornen editables, amb els seus estats, respostes i números de la llista de deficiències.

## En línia i fora de línia

:::online
Esteu en línia. MarkupCraft carrega el lector de PDF la primera vegada que obriu un PDF, i el generador de PDF la primera vegada que desats. Per treballar més tard sense connexió (en una visita a obra, en un avió), trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de dalt ara i espereu "Preparat sense connexió". La còpia inclou el lector i el generador de PDF, de manera que obrir i desar PDF funciona sense connexió. Consulteu [Treballar sense connexió](common:offline).
:::

:::offline
Esteu fora de línia. Si la barra de dalt diu "Preparat sense connexió", MarkupCraft s'ha desat per usar sense connexió en aquest navegador i tot funciona: obrir, marcar, mesurar, desar. Si no ho diu, useu el que ja s'ha carregat en aquesta pestanya i no recarregueu la pàgina fins que torneu a tenir connexió. Consulteu [Treballar sense connexió](common:offline).
:::

## Què recorda l'aplicació i què no

- **Les marques són dins el PDF que deseu.** No es guarda res en cap servidor. L'aplicació no desa el PDF per si sola, però guarda una còpia de recuperació en aquest navegador fins que ho feu. Deseu abans de tancar la pestanya; el navegador pregunta primer si intenteu sortir amb marques sense desar (excepte en un iPad, vegeu [Revisió en un iPad o en una pantalla tàctil](topic:review-on-a-tablet)).
- **El vostre nom, els estils de les eines i la vostra caixa d'eines** es queden en aquest navegador d'aquest ordinador. Un altre navegador o ordinador comença de zero, i esborrar les dades del lloc del navegador els elimina. Consulteu [Què es guarda en aquest navegador](topic:browser-storage).
- La desada al núvol i les sessions de revisió compartides entre persones encara no estan disponibles.

## On anar a continuació

- [Una visita per la pantalla](topic:workspace)
- [Marcar una fulla](topic:mark-up-a-sheet)
- [Calibrar una fulla i mesurar](topic:calibrate-and-measure)
- [Si veniu d'un altre programa de marques](topic:coming-from), si ja reviseu plànols en un altre programa.
