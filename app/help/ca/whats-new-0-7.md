---
title: Novetats de la 0.7 (anterior)
summary: RFI, aprovacions de materials i diaris d'obra en una nova pestanya Obra, amb dates límit, fora de termini en vermell, CSV i BCF, treball fora de línia i Combina; assistents que fixen estats, responen i exporten la llista; llistes d'unitats que segueixen Configuració; taulers que es recullen i diàlegs que es mouen.
keywords: novetats 0.7, versió anterior, notes de la versió, registre de canvis, canvis, 0.7, versió, noves funcions, obra, registres d'obra, rfi, sol·licitud d'informació, aprovació de materials, diari d'obra, fora de termini, data límit, assignats a mi, marcador, combina, fora de línia, tauleta, bcf, csv, assistent, mcp, estat de la marca, resposta, exporta, unitats, llistes d'unitats, estrella, calibra, compacte, taulers, diàlegs, portuguès
from: ca5ba1f0
---

Això és el que ha canviat a MarkupCraft 0.7, en comparació amb la 0.6. La gran novetat són els registres d'obra: RFI, aprovacions de materials i diaris d'obra guardats dins del PDF, al costat de les marques.

## Novetats

### RFI, aprovacions de materials i diaris d'obra

- **La pestanya Obra.** Obriu la pestanya {{ui:Obra}} i trieu {{ui:RFI}}, {{ui:Aprovació de materials}} o {{ui:Diari d'obra}}. Toqueu o feu clic al full on pertoca un RFI o una aprovació de materials i un marcador indicarà el lloc; un diari d'obra es posa al full obert sense marcador ({{ui:Col·loca el marcador}} n'afegeix un més tard, {{ui:Mou el marcador}} mou qualsevol marcador). Cada registre té el seu propi número (RFI-0001, SUB-0001, LOG-0001), un títol, text, un estat, una persona assignada, una data límit, un fil de respostes i una llista de noms d'adjunts. Vegeu [Fes el seguiment de RFI, aprovacions de materials i diaris d'obra](topic:field-records).
- **Veu què va amb retard.** Filtreu la llista per tipus, estat, data límit (fora de termini, venç en 7 dies, amb o sense data límit), aquest full o tots els fulls, una cerca de text, o {{ui:Assignats a mi}}. Un registre passada la seva data límit que encara espera es marca **Fora de termini**, en vermell, a la llista i al seu marcador. Vegeu [Troba el que importa](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} escriu els registres de la llista com a full de càlcul; {{ui:BCF}} els escriu com a temes BCF, cadascun amb una instantània del seu lloc al full. Tots dos segueixen els filtres. Vegeu [Exporta](topic:field-records#export).
- **Fora de línia, i dues còpies fetes una.** Els registres es desen dins del PDF i no necessiten xarxa, de manera que una tauleta a l'obra pot afegir-los, respondre'ls i desar-los. De tornada a l'oficina, {{ui:Combina}} uneix els registres d'una altra còpia del mateix PDF pels seus identificadors, com un sol pas per desfer. Vegeu [Desa, fora de línia i combina còpies](topic:field-records#save-offline-and-merging-copies).

### Assistents d'IA

- **Més coses que pot fer un assistent.** El vostre propi assistent, connectat a través de CadCraft Studio, ara pot fixar l'estat d'una marca (`markup_status`, registrat al seu fil), respondre en un fil (`markup_reply`) i exportar la llista de {{ui:Marques}} com a CSV o BCF (`markups_export`, el que mostra la llista amb els seus filtres). Cada canvi és un sol pas per desfer, signat amb el nom de l'assistent. Vegeu [Què pot demanar un assistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## En totes les aplicacions

- **Unitats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}} té una llista per a longitud, àrea, volum, angle i pendent, amb les mides exactes que donen les definicions de les unitats (el peu d'enquesta dels EUA és una unitat pròpia). Desactiveu les unitats que no feu servir mai i surten de les llistes d'unitats; marqueu-ne una amb l'estrella i el treball nou comença amb ella. Un fitxer sempre conserva la seva pròpia unitat. A MarkupCraft, les unitats de mesura i de posició de {{ui:Configuració}} › {{ui:MarkupCraft}} i la unitat del diàleg de calibratge segueixen els interruptors; l'estrella fixa la unitat de mesura fins que deseu la configuració pròpia de MarkupCraft, i la distància real que escriviu en calibrar pot portar la marca de qualsevol unitat, com ara `3 yd` o `1.5 km`. Vegeu [Unitats, valors escrits i llistes d'unitats](common:unit-lists).
- **Una disposició més densa i taulers que es recullen.** {{ui:Configuració}} › {{ui:General}} › {{ui:Densitat de la disposició}} › {{ui:Compacta}} hi cap més a la pantalla (les pantalles tàctils i els telèfons mantenen els botons grans). Cada tauler lateral té una barra de títol estreta: arrossegueu-la per acoplar o deixar flotant el tauler, deixeu-la sobre la barra d'un altre tauler per compartir un marc com a pestanyes, fixeu-la perquè llisqui fins a la vora, o amagueu-la i torneu-la a treure des de la vora. Vegeu [Organitza els taulers](common:arrange-panels#make-the-layout-denser).
- **Els diàlegs es mouen.** Arrossegueu un diàleg per la barra de títol fora del camí del dibuix; torna al lloc on l'heu deixat. Feu doble clic a la barra de títol per tornar-lo a centrar. Vegeu [Mou un diàleg](common:arrange-panels#move-a-dialog).
- **Receptes per als assistents d'IA.** Deu peticions resoltes per al vostre assistent (endreçar un dibuix, traçar un conjunt, revisar dibuixos, fer preguntes a un model, totalitzar un amidament, provar una variant de peça…), cadascuna amb les eines que crida i els permisos que necessita, i cadascuna repetida per les nostres proves. Les aplicacions no contenen cap IA. Vegeu [Receptes per als assistents d'IA](common:assistants-recipes).
- **Idiomes.** **Português (Portugal)** és nou a {{ui:Configuració}} › {{ui:General}} › {{ui:Idioma}}. Aquest, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** tenen ara totes les paraules de les aplicacions, com a esborranys encara no revisats per una persona parlant nativa. Els temes d'ajuda són en anglès.
- **CadCraft Studio** indica per què ha fallat una comprovació d'actualització (encara no hi ha cap fitxer per al vostre sistema, no hi ha xarxa, una signatura no vàlida) en lloc de només "Fet", i deixa de tornar a mostrar una targeta de Novetats que heu tancat fins que hi hagi una versió més nova.

## Encara no en aquesta versió

- **La 0.7 no està signada digitalment.** La signatura, i el paquet per a la Microsoft Store, es van passar a la 0.8 perquè encara no ha arribat la validació del certificat. Comproveu el SHA-256 al costat de cada fitxer a getcadcraft.com/download. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}} i després {{ui:Executa-ho igualment}}. En un Mac, la primera vegada, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. CadCraft Studio encara no és en cap botiga d'aplicacions, i encara no hi ha cap versió per a iPad o iPhone.
- Les llistes d'angle i de pendent de {{ui:Unitats}} es desen, però encara cap quadre les llegeix.
- Els registres d'obra no es comparteixen en una sessió en directe de CadCraft Studio (les sessions en directe només porten marques); porteu les còpies juntes amb {{ui:Combina}}.
- Combina pren un registre sencer de la còpia modificada per última vegada: si dues persones han canviat camps diferents d'un registre, guanyen els camps de la còpia posterior. Els fils i els noms d'adjunts s'uneixen.
- Els adjunts són només noms; els fitxers es queden on són. No hi ha equips, notificacions ni projectes al núvol per als registres, i els assistents encara no tenen eines per als registres.
- Els registres d'obra s'han provat en un navegador amb mides de telèfon i tauleta, amb la xarxa desconnectada, però encara no a mà en una tauleta real.
- Encara de la 0.6: girar els objectes de la pàgina a qualsevol angle, dibuixar formes noves directament a la pàgina, canviar el tipus de lletra o la mida d'una línia, i el text que passa per diverses línies. Una còpia desada amb edicions de pàgina encara no s'ha obert a Acrobat.
- Encara de la 0.5: desfer un canvi de pàgina (com afegir una pàgina en blanc), llegir el text de fulls escanejats, i sessions en directe més enllà de la vostra pròpia xarxa.

Tota la resta és a [Què encara no està implementat](topic:not-built-yet).
