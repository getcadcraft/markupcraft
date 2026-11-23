---
title: Novetats de la versió 0.9 (anteriors)
summary: Notes i una zona del costat que mai no s'imprimeixen, notes privades xifrades i una còpia neta per al client, enllaços en lot per a un joc complet de plànols, una eina d'arc amb deu mètodes, seguir un altre revisor en Live, i una correcció perquè les marques suprimides no es quedin al PDF desat.
keywords: novetats 0.9, versió anterior, novetats, què hi ha de nou, 0.9, notes de la versió, registre de canvis, notes, zona del costat, notes privades, contrasenya, xifrat, amaga notes, mostra notes, còpia neta, instantània, enllaços en lot, crides de full, enllaça fulls, bloc de títol, número de full, addenda, renumerar, enllaç pdf, arc, mètodes d'arc, arc de tres punts, radi, segueix, segueix-me, live, vista de classe, llista de persones, marca suprimida, consells emergents, títols de pestanya, canvis, 0.8, 0.8.1, versió, funcions noves, tasca, tasques, persona assignada, dia límit, fora de termini, comprova ara, quins canvis, revisions, compara, nota de veu, decisió, marcatge de revisió, fitxer de respostes, delineant, assistent, mcp, problemes, idiomes, dispositius d'entrada, trackpad, files de la barra d'eines, graella de propietats, actualització
from: aa3dfeb8
---

Això és el que ha canviat a MarkupCraft 0.9, en comparació amb la 0.8.1. La idea principal és que les vostres notes de treball no surtin de la pàgina que rep el client, i que un joc complet de plànols es pot enllaçar en una sola passada.

## Novetats

### Notes, la zona del costat i les notes privades

- **La zona del costat.** L'àrea que envolta cada full és una taula de treball: tot el que es dibuixa, s'escriu o s'enganxa al costat del full és una nota i mai no s'imprimeix. Trieu {{ui:Mostra la zona del costat}} per allunyar la vista i tenir més espai, o {{ui:Instantània a la zona del costat}}, arrossegueu un quadre i després {{ui:A la zona del costat}} per posar una imatge d'una part del dibuix al costat del full. Una instantània és una imatge i no canvia quan canvia el full. Consulteu [Notes, la zona del costat i les notes privades](topic:notes-and-pasteboard).
- **Mostrar i amagar notes.** Qualsevol marca pot ser una nota: definiu {{ui:Les marques noves seran}} a la pestanya {{ui:Notes}}, o {{ui:Aquesta marca és}} a {{ui:Propietats}}. {{key:Shift+H}} o l'interruptor {{ui:Notes}} sota el full amaga i mostra totes les notes alhora. Les notes no s'inclouen en la impressió, les còpies aplanades, les llistes ni les exportacions, i altres lectors de PDF no les mostren. El PDF desat les conserva per a la propera vegada que l'obriu amb MarkupCraft.
- **Notes privades.** Trieu {{ui:Defineix una contrasenya}}, i després feu que una marca sigui {{ui:Una nota privada}}. S'xifra al fitxer amb una contrasenya d'almenys 10 caràcters, i no hi ha recuperació: ningú, ni nosaltres, no la pot obrir sense la contrasenya. {{ui:Bloqueja}} amaga les notes privades; {{ui:Resta desbloquejat en aquest dispositiu}} està desactivat per defecte.
- **Desa una còpia neta.** {{ui:Desa una còpia neta}} elimina totes les notes, les notes privades i tot el que hi ha a la zona del costat. Useu-la per al fitxer que va al client.

### Enllaçar un joc complet

- **Enllaços en lot.** Trieu {{ui:Pàgines}} › {{ui:Enllaços en lot…}}, o {{ui:Enllaça les crides de full…}} sota {{ui:Cerca text}} al tauler {{ui:Fulls}}. El pas 1 llista el número i el nom de cada full tal com es llegeixen del caixetí; corregiu els que siguin erronis. El pas 2 llista les crides trobades, com `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Enllaçarà}} mostra el full i la vista de cadascuna, {{ui:Sense enllaçar}} mostra els números que cap full obert no té, i {{ui:Crea els enllaços}} els crea tots en un sol pas de desfer. Torneu-lo a executar després d'una addenda o d'una renumeració; els enllaços que heu fet a mà mai no es canvien. Un enllaç amb vista es desa com a enllaç PDF, de manera que altres lectors també obren el detall. Consulteu [Enllaços de fulls](topic:sheet-links).

### Dibuix

- **Arc, deu mètodes.** L'eina {{ui:Arc}} ({{key:O}}) ara té un quadre {{ui:Mètode d'arc}} sobre la pàgina amb deu maneres de dibuixar un arc, i l'angle, la longitud, el radi i la direcció es poden fer clic o escriure. Consulteu [Dibuixa un arc de deu maneres](topic:draw-an-arc).

### Treballar junts

- **Seguir un revisor.** En una sessió Live, trieu {{ui:Segueix}} al costat del nom d'una persona i la vostra vista es mou amb la seva; si desplaceu la vista o feu zoom vosaltres, el seguiment s'atura. L'amfitrió pot triar {{ui:Demana a tothom que em segueixi}}. La llista de persones mostra el color, el nom, el full on és cada persona i quan va ser la darrera edició. Consulteu [Seguir un altre revisor en una sessió Live](topic:follow-in-live).

## En totes les aplicacions

- Els consells emergents són de Bootstrap, el consell d'inici es pot tancar, les barres de pestanyes es desplacen quan es desborden, i els títols de les pestanyes del navegador tenen el format `<document> — MarkupCraft | CadCraft`.
- Un tauler amb diverses seccions n'obre una i tanca les altres (un cadenat al costat de la fletxa en manté una d'oberta); un interruptor de Configuració desactiva això.
- Cada aplicació comença amb una col·lecció predeterminada d'elements de la biblioteca.
- Les unitats de pes i de temperatura estan disponibles a la configuració d'unitats.

## Corregit

- **Les marques suprimides ja no es poden llegir dins del PDF desat.** Abans, en desar, s'eliminava de la pàgina una anotació suprimida o reescrita, però l'objecte, amb el seu text, quedava al fitxer. Ara, en desar, aquests objectes se suprimeixen. Els fitxers desats per versions anteriors encara els contenen fins que els torneu a desar.

## Límits reals

- Els enllaços en lot s'han provat amb els nostres propis jocs de prova. Els jocs reals dibuixen les bombolles de moltes maneres, de manera que en un joc de client algunes vistes es poden perdre. Els fulls escanejats necessiten primer {{ui:Llegeix el text (OCR)…}}.
- Les notes, les notes privades i la zona del costat s'han provat en un navegador sense interfície gràfica i amb els nostres propis fitxers, no amb un joc vectorial gran i real, i no en una sessió Live real de dues persones. Canviar una contrasenya encara no està implementat. Les versions anteriors a la 0.9 no mostren les notes.
- La vista de classe és la llista de persones; encara no s'ha provat amb un professor i alumnes reals.
- Els idiomes que no són l'anglès són esborranys automàtics fins que un parlant nadiu els llegeixi.
- Els instal·ladors de Windows no estan signats digitalment (Més informació, i després Executa de totes maneres); la imatge de disc de macOS no està notaritzada (clic dret i després Obre).

## Anteriors: 0.8 i 0.8.1

Això és el que ha canviat a MarkupCraft 0.8 i 0.8.1, en comparació amb la 0.7. La gran novetat és que una marca pot ser una tasca que algú, o el vostre propi assistent, fa, i que es tanca sola quan el dibuix canvia de veritat.

### Novetats

**Marques que actuen**

- **Converteix una marca en tasca.** Seleccioneu una o més marques, obriu la pestanya {{ui:Tasques}} i trieu {{ui:Converteix la selecció en tasca}}. Una tasca té un títol, una persona o el vostre assistent connectat que la fa, un dia límit opcional i un estat, i conserva el seu lloc al full i el seu fil. Consulteu [Convertir una marca en tasca](topic:markups-that-act).
- **Tasques que es tanquen soles.** Una tasca pot vigilar el dibuix dins de la seva marca. Obriu una revisió més nova del full i trieu {{ui:Comprova ara}}: si les línies d'aquella àrea han canviat més d'un pèl, la tasca es marca com a Fet, la seva marca passa a Completat i una nota al fil explica què ha canviat. Una data nova o línies que s'han mogut menys de 1,5 punts no compten. Una tasca també pot vigilar un element del model: el vostre assistent informa de l'element amb `tasks_check`, i un informe posterior que sigui diferent, o un element suprimit, tanca la tasca. Un pas de desfer la torna a obrir.
- **Trobeu la feina.** Filtreu la llista de {{ui:Tasques}} per estat i per a qui és, incloent-hi {{ui:Fora de termini}}; trieu {{ui:Assignada a}}, i després {{ui:Assistent}} per veure què espera el vostre assistent. Una tasca passada del seu dia límit apareix com un avís al tauler de Problemes. {{ui:CSV}} exporta la llista. Les tasques es desen al PDF amb la marca i viatgen per Live com les altres propietats de la marca.

**Què ha canviat, en una llista simple**

- **Llista els canvis.** Obriu la pestanya {{ui:Compara}}, després Compara un joc sencer, trieu el fitxer anterior i el posterior i trieu {{ui:Llista els canvis}}. La llista comença amb un recompte i després cobreix cada full canviat, el canvi més gran primer: on és al full, quina mida té (en unitats reals i també en polzades de paper en un full calibrat), si s'han afegit o eliminat línies, quantes marques hi ha, i quines paraules han aparegut o desaparegut. {{ui:Copia la llista}} la posa al porta-retalls, i {{ui:CSV}} escriu una fila per cada canvi. Consulteu [Llista què ha canviat entre revisions](topic:what-changed-in-words).

**Notes de veu i decisions**

- **Notes de veu.** A la pestanya {{ui:Notes}} trieu {{ui:Grava una nota de veu}}, i després {{ui:Atura la gravació}}; les gravacions s'aturen soles als dos minuts. La nota queda fixada al centre del full; l'arrossegueu on pertoca i escriviu un peu a {{ui:Propietats}}, i {{ui:Reprodueix}} a la llista la reprodueix. La gravació es desa dins del PDF.
- **Decisions.** {{ui:Fixa una decisió}} escriu una o dues frases al full. Si substitueix una decisió anterior, trieu-la a {{ui:Substitueix}}: l'anterior es conserva, marcada com a Substituït, i apunta a la nova. Un pas de desfer la treu. Consulteu [Fixar notes de veu i decisions en un full](topic:voice-notes-and-decisions).

**Marcatge de revisió**

- **Envieu i respongueu.** A la pestanya {{ui:Tasques}} obriu {{ui:Marcatge de revisió}}, escriviu la revisió amb què es comparen les marques i trieu {{ui:Exporta el fitxer de marcatge}}. Obteniu un fitxer `.redline.json` amb un element per cada marca oberta: full, posició (com a fraccions del full, de manera que una nova impressió a una altra mida encara coincideix), paraules, autor, fil i la seva tasca. Qui dibuixa els canvis respon Accepted, Rejected o Done en un fitxer `.redline-answers.json`; {{ui:Carrega el fitxer de respostes…}} dona a cada marca aquest estat i la nota del delineant, com un sol pas de desfer. Consulteu [Envia les marques al delineant com a marcatge de revisió](topic:redline-to-revision).

**Assistents d'IA**

- **Més eines.** Un assistent que heu connectat amb CadCraft Studio pot llistar tasques (`tasks_list`), crear-ne o canviar-ne una (`task_set`), treure'n la tasca (`task_clear`), comprovar-ne una amb una revisió més nova o amb un element (`tasks_check`), i llegir la llista simple de canvis entre dos jocs de plànols oberts (`revisions_changes`). Només rep les eines que heu marcat sota l'interruptor Assistents, i cada canvi és un pas de desfer. Consulteu [Feu servir MarkupCraft amb un assistent d'IA](topic:use-with-ai-assistants).

### Dins de cada aplicació

- **Idiomes.** CadCraft Studio ja té 54 idiomes. Deu són nous: lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, swahili i uzbek. Tots els idiomes que no són l'anglès són esborranys automàtics fins que un parlant nadiu els llegeixi.
- **Dispositius d'entrada.** {{ui:Configuració}} › {{ui:Global}} › {{ui:Dispositius d'entrada}} defineix què fan un trackpad, els botons laterals del ratolí, un llapis, els tocs amb el dit, un ratolí 3D, un comandament de joc o un controlador MIDI, per a totes les aplicacions o només per a aquesta. Fins que no canvieu res, tots els dispositius funcionen com abans. Consulteu [Fer servir un trackpad, un ratolí 3D o un comandament](common:input-devices).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} té {{ui:Ajusta}} (el valor predeterminat), {{ui:2 files}} i {{ui:1 fila}}, perquè el dibuix tingui més espai. Consulteu [Organitzar els taulers](common:arrange-panels).
- **Graella de propietats.** Els camps d'estil d'una marca fan servir la graella compartida, amb categories plegables i columnes d'etiqueta i de valor.
- **Tauler de Problemes.** Els avisos de l'aplicació, com una tasca fora de termini, es reuneixen en un sol tauler de Problemes.
- **Live i complements.** Les sessions Live es descriuen a [Treballar junts en directe](common:work-together-live); la llista de complements que segueix el vostre compte és a [Complements i la llista del vostre compte](common:addons-basics).
- **Connecteu la vostra IA.** CadCraft Studio és el centre per al vostre propi assistent: connecteu-lo una vegada per a les vuit aplicacions. Les aplicacions no contenen cap IA pròpia.

### Corregit a 0.8.1

- **Studio pot canviar d'idioma mentre s'executa.** Abans, l'aplicació d'escriptori i les edicions empaquetades es quedaven en anglès. Encara no s'ha provat a totes les plataformes: digueu-nos-ho si l'idioma no canvia.
- Les instal·lacions de Studio 0.8 reben la 0.8.1 a través de {{ui:Configuració}} › {{ui:Actualitzacions}}.

### Encara no inclòs en aquesta versió

- **Sense signatura de codi.** Els instal·ladors de Windows i el fitxer .dmg de macOS encara no tenen signatura. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}} i després {{ui:Executa de totes maneres}}. En un Mac, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. Les versions per a botigues estan en espera.
- **Connectar la IA encara està inacabat en alguns punts.** La connexió amb un clic dins de Studio, el connector allotjat per als assistents del navegador i la vostra pròpia clau d'API dins de Studio no es garanteixen en aquesta versió. El bucle de tasques s'ha provat, però encara no amb un assistent real.
- **Les comprovacions de tasques necessiten la mateixa mida de pàgina.** Un full re-imprès a una altra mida no coincidirà, de manera que les seves tasques no es tancaran. Els fulls s'aparellen pel número de full o, si no, per la posició a la pàgina.
- **Les notes de veu són només gravacions.** No hi ha transcripció, i un assistent veu la durada, l'autor i el peu de la nota, no el so. La gravació s'ha provat amb un micròfon simulat en un navegador sense interfície gràfica; encara cal comprovar un micròfon real en un telèfon, una tauleta o un portàtil.
- **Els fulls de càlcul i els motius d'un PDF** es guarden en una entrada privada del fitxer. Una MarkupCraft més antiga l'ignora i l'elimina la propera vegada que desa el fitxer, de manera que obriu i deseu aquests fitxers amb la 0.8 o posterior.
- **La part del delineant dels marcatges de revisió.** CadCraft que llegeix el fitxer de marcatge i hi respon encara no està implementat.
- **Altres idiomes.** La barra d'aplicació en tàmil es desborda 528 px.

Tot el que falta és a [Què encara no està implementat](topic:not-built-yet). Per a la versió anterior, consulteu [Novetats de la versió 0.7](topic:whats-new-0-7).
