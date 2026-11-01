---
title: Novetats de la versió 0.7
summary: RFI, aprovacions de materials i diaris d'obra en una nova pestanya Obra, amb dates límit, retards en vermell, CSV i BCF, treball sense connexió i Combina; assistents que defineixen estats, responen i exporten la llista; llistes d'unitats que segueixen la Configuració; panells que es recullen i diàlegs que es mouen.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.7, versió, noves funcions, obra, registres d'obra, rfi, sol·licitud d'informació, aprovació de materials, diari d'obra, retard, data límit, assignats a mi, marcador, combina, sense connexió, tauleta, bcf, csv, assistent, mcp, estat de la marca, resposta, exporta, unitats, llistes d'unitats, estrella, calibra, compacta, panells, diàlegs, portuguès
from: 142e1a1e
---

Això és el que ha canviat a MarkupCraft 0.7, en comparació amb la 0.6. La gran novetat són els registres d'obra: RFI, aprovacions de materials i diaris d'obra guardats dins el PDF, al costat de les marques.

## Novetats

### RFI, aprovacions de materials i diaris d'obra

- **La pestanya Obra.** Obriu la pestanya {{ui:Obra}} i trieu {{ui:RFI}}, {{ui:Aprovació de materials}} o {{ui:Diari d'obra}}. Toqueu o feu clic a la fulla on pertoca un RFI o una aprovació i un marcador indica el lloc. Un diari d'obra es posa a la fulla oberta sense marcador ({{ui:Col·loca el marcador}} n'hi afegeix un més tard, i {{ui:Mou el marcador}} mou qualsevol marcador). Cada registre té el seu número (RFI-0001, SUB-0001, LOG-0001), un títol, text, un estat, una persona assignada, una data límit, un fil de respostes i una llista de noms d'adjunts. Consulteu [Seguiment de RFI, aprovacions de materials i diaris d'obra](topic:field-records).
- **Vegeu què va tard.** Filtreu la llista per tipus, estat, data límit (amb retard, ha de vèncer en 7 dies, amb o sense data límit), per aquesta fulla o per totes, per una cerca de text, o per {{ui:Assignats a mi}}. Un registre que ha passat la seva data límit i encara està pendent es marca **Amb retard**, en vermell, a la llista i al seu marcador. Consulteu [Trobar el que importa](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} escriu els registres de la llista com a full de càlcul; {{ui:BCF}} els escriu com a temes BCF, cadascun amb una instantània del seu lloc a la fulla. Tots dos segueixen els filtres. Consulteu [Exportació](topic:field-records#export).
- **Sense connexió, i dues còpies fetes una.** Els registres es desen dins del PDF i no necessiten xarxa, de manera que una tauleta a l'obra pot afegir-los, respondre'ls i desar-los. De tornada a l'oficina, {{ui:Combina}} uneix els registres d'una altra còpia del mateix PDF pels seus identificadors, com un sol pas de desfer. Consulteu [Desar, treballar sense connexió i combinar còpies](topic:field-records#save-offline-and-merging-copies).

### Assistents d'IA

- **Més coses que pot fer un assistent.** El vostre propi assistent, connectat a través de CadCraft Studio, ara pot definir l'estat d'una marca (`markup_status`, registrat al seu fil), respondre en un fil (`markup_reply`) i exportar la llista {{ui:Marques}} com a CSV o BCF (`markups_export`, el que mostra la llista amb els seus filtres). Cada canvi és un pas de desfer, signat amb el nom de l'assistent. Consulteu [Què pot demanar un assistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## A totes les aplicacions

- **Unitats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}} té una llista per a longitud, àrea, volum, angle i pendent, amb les mides exactes que donen les definicions de les unitats (el peu d'agrimensura dels EUA és una unitat pròpia). Desactiveu les unitats que no feu servir i surten de les llistes; marqueu-ne una amb l'estrella i el treball nou comença amb ella. Un fitxer conserva sempre la seva pròpia unitat. A MarkupCraft, les unitats de mesura i de posició de {{ui:Configuració}} › {{ui:MarkupCraft}} i la unitat del diàleg de calibratge segueixen els interruptors; l'estrella fixa la unitat de mesura fins que deseu la configuració pròpia de MarkupCraft; i la distància real que escriviu en calibrar pot portar la marca de qualsevol unitat, com `3 yd` o `1.5 km`. Consulteu [Unitats, valors escrits i les llistes d'unitats](common:unit-lists).
- **Un disseny més dens i panells que es recullen.** {{ui:Configuració}} › {{ui:General}} › {{ui:Densitat de la disposició}} › {{ui:Compacta}} hi cap més a la pantalla (les pantalles tàctils i els telèfons mantenen els botons grans). Cada panell lateral té una barra de títol prima: arrossegueu-la per acoblar o deixar flotant el panell, deixeu-la sobre la barra d'un altre panell per compartir un marc com a pestanyes, fixeu-la per fer-la lliscar cap a la vora, o amagueu-la i torneu-la a treure de la vora. Consulteu [Organitzar els panells](common:arrange-panels#make-the-layout-denser).
- **Els diàlegs es mouen.** Arrossegueu un diàleg per la seva barra de títol fora del camí del dibuix; torna al lloc on l'heu deixat. Feu doble clic a la barra de títol per centrar-lo de nou. Consulteu [Moure un diàleg](common:arrange-panels#move-a-dialog).
- **Receptes per a assistents d'IA.** Deu peticions resoltes per al vostre propi assistent (ordenar un dibuix, traçar un joc, comprovar dibuixos, fer preguntes a un model, totalitzar un amidament, provar una variant de peça…), cadascuna amb les eines que crida i els permisos que necessita, i cadascuna repetida pels nostres tests. Les aplicacions no contenen cap IA. Consulteu [Receptes per a assistents d'IA](common:assistants-recipes).
- **Idiomes.** **Português (Portugal)** és nou a {{ui:Configuració}} › {{ui:General}} › {{ui:Idioma}}. Aquest, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** ara tenen totes les paraules de les aplicacions, com a esborranys que encara no ha revisat un parlant natiu. Els temes d'ajuda són en anglès.
- **CadCraft Studio** indica per què ha fallat una comprovació d'actualitzacions (no hi ha cap fitxer per al vostre sistema encara, no hi ha xarxa, una signatura incorrecta) en lloc de només "Fet", i deixa de tornar a mostrar una targeta de Novetats que heu tancat fins que hi hagi una versió més nova.

## No hi és en aquesta versió encara

- **La 0.7 no està signada amb codi.** La signatura, i el paquet de la Microsoft Store, es van traslladar a la 0.8 perquè la validació del certificat encara no ha arribat. Comproveu el SHA-256 al costat de cada fitxer a getcadcraft.com/download. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}} i després {{ui:Executa igualment}}. En un Mac, la primera vegada, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. CadCraft Studio encara no és a cap botiga d'aplicacions, i encara no hi ha versió per a iPad ni iPhone.
- Les llistes d'angle i de pendent de {{ui:Unitats}} es desen, però encara cap quadre no les llegeix.
- Els registres d'obra no es comparteixen en una sessió en directe de CadCraft Studio (les sessions en directe només porten marques); porteu les còpies juntes amb {{ui:Combina}}.
- Combina pren un registre sencer de la còpia canviada més recentment: si dues persones han canviat camps diferents d'un mateix registre, guanyen els camps de la còpia més recent. Els fils i els noms d'adjunts s'uneixen.
- Els adjunts són només noms; els fitxers es queden on són. No hi ha equips, notificacions ni projectes al núvol per als registres, i els assistents encara no tenen eines per als registres.
- Els registres d'obra s'han provat en un navegador a mides de telèfon i de tauleta amb la xarxa tallada, però encara no a mà en una tauleta real.
- Encara de la 0.6: girar objectes de la pàgina a qualsevol angle, dibuixar formes noves directament a la pàgina, canviar el tipus o la mida de lletra d'una línia, i text que es distribueix en diverses línies. Una còpia desada amb canvis de pàgina encara no s'ha obert a Acrobat.
- Encara de la 0.5: desfer un canvi de pàgina (com afegir una pàgina en blanc), llegir text de fulls escanejats, i sessions en directe més enllà de la vostra pròpia xarxa.

Tot la resta és a [Què encara no està implementat](topic:not-built-yet).
