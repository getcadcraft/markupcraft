---
title: Novetats de la 0.9
summary: Notes i una zona del costat que mai no s'imprimeix, notes privades xifrades i una còpia neta per al client, enllaços en lot per a un conjunt complet de plànols, una eina Arc amb deu mètodes, seguir un altre revisor en Live, i una correcció perquè les marques esborrades no es quedin al PDF desat.
keywords: novetats, què hi ha de nou, 0.9, notes de la versió, registre de canvis, notes, zona del costat, notes privades, contrasenya, xifrat, amaga les notes, mostra les notes, còpia neta, instantània, enllaços en lot, crides de full, enllaça fulls, bloc del títol, número de full, addenda, renumeració, enllaç PDF, arc, mètodes d'arc, arc de tres punts, radi, segueix, segueix-me, en directe, vista de classe, llista de persones, marca esborrada, consells, pestanyes, títols de pestanya, 0.8, 0.8.1, versió, noves funcions, tasca, tasques, assignat, dia límit, fora de termini, comprova ara, què ha canviat, revisions, comparació, nota de veu, decisió, marcatge, fitxer de respostes, delineant, assistent, mcp, problemes, idiomes, dispositius d'entrada, trackpad, files de la barra d'eines, graella de propietats, actualització
from: dbdd7ed4
---

Això és el que ha canviat a MarkupCraft 0.9, en comparació amb la 0.8.1. La idea principal és que les notes de treball no surten a la pàgina que rep el client, i un conjunt complet de dibuixos es pot enllaçar en una sola passada.

## Novetats

### Notes, la zona del costat i notes privades

- **La zona del costat.** L'àrea al voltant de cada full és un escriptori: tot el que es dibuixa, s'escriu o s'enganxa al costat del full és una nota i mai no s'imprimeix. Trieu {{ui:Mostra la zona del costat}} per allunyar el zoom i tenir espai, o {{ui:Instantània a la zona del costat}}, arrossegueu un quadre i després {{ui:A la zona del costat}} per posar una imatge d'una part del dibuix al costat del full. Una instantània és una imatge i no canvia quan canvia el full. Vegeu [Notes, la zona del costat i notes privades](topic:notes-and-pasteboard).
- **Mostra i amaga les notes.** Qualsevol marca pot ser una nota: definiu {{ui:Les marques noves seran}} a la pestanya {{ui:Notes}}, o {{ui:Aquesta marca és}} a {{ui:Propietats}}. {{key:Shift+H}} o l'interruptor {{ui:Notes}} sota el full amaga i mostra totes les notes alhora. Les notes no s'inclouen a la impressió, a les còpies aplanades, a les llistes ni a les exportacions, i els altres lectors de PDF no les mostren. El PDF desat les conserva per a la següent vegada que l'obriu a MarkupCraft.
- **Notes privades.** Trieu {{ui:Defineix una contrasenya}}, i després feu que una marca sigui {{ui:Una nota privada}}. Es xifra al fitxer amb una contrasenya d'almenys 10 caràcters, i no hi ha recuperació: ningú, nosaltres inclosos, no la pot obrir sense la contrasenya. {{ui:Bloqueja}} amaga les notes privades; {{ui:Resta desbloquejat en aquest dispositiu}} està desactivat per defecte.
- **Desa una còpia neta.** {{ui:Desa una còpia neta}} elimina totes les notes, les notes privades i tot el que hi ha a la zona del costat. Useu-la per al fitxer que va al client.

### Enllaça un conjunt complet

- **Enllaços en lot.** Trieu {{ui:Pàgines}} › {{ui:Enllaços en lot…}}, o {{ui:Enllaça les crides de full…}} sota {{ui:Cerca text}} al tauler {{ui:Fulls}}. El pas 1 llista el número i el nom de cada full, tal com es llegeixen del seu bloc del títol; corregiu els que siguin incorrectes. El pas 2 llista les crides trobades, com `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Enllaçarà}} mostra el full i la vista de cadascuna, {{ui:No enllaçat}} mostra els números que no tenen cap full obert, i {{ui:Crea els enllaços}} els fa tots en un sol pas per desfer. Executeu-ho de nou després d'una addenda o d'una renumeració; els enllaços que heu fet a mà mai no es canvien. Un enllaç amb una vista es desa com a enllaç PDF, de manera que els altres lectors també obren el detall. Vegeu [Enllaços de fulls](topic:sheet-links).

### Dibuix

- **Arc, deu mètodes.** L'eina {{ui:Arc}} ({{key:O}}) ara té un quadre {{ui:Mètode d'arc}} sobre la pàgina amb deu maneres de dibuixar un arc, i l'angle, la longitud, el radi i la direcció es poden fer clicant o escrivint. Vegeu [Dibuixa un arc de deu maneres](topic:draw-an-arc).

### Treball conjunt

- **Segueix un revisor.** En una sessió en directe trieu {{ui:Segueix}} al costat del nom d'una persona i la vostra vista es mou amb la seva; desplaçar-vos o fer zoom vosaltres mateixos l'atura. L'amfitrió pot triar {{ui:Demana a tothom que em segueixi}}. La llista de persones mostra el color, el nom de cada persona, el full on és i quan va ser la seva darrera edició. Vegeu [Segueix un altre revisor en una sessió en directe](topic:follow-in-live).

## En totes les aplicacions

- Els consells emergents són consells de Bootstrap, el consell d'inici es pot tancar, les barres de pestanyes es desplacen quan es desborden, i els títols de les pestanyes del navegador diuen `<document> — MarkupCraft | CadCraft`.
- Un tauler amb diverses seccions n'obre una i tanca les altres (un cadenat al costat de la fletxa en manté una oberta); un interruptor de Configuració desactiva això.
- Cada aplicació comença amb una col·lecció predeterminada d'objectes de la Biblioteca.
- Les unitats de pes i de temperatura estan disponibles a la configuració d'unitats.

## Corregit

- **Les marques eliminades ja no es poden llegir dins del PDF desat.** Abans, en desar, s'eliminava una anotació esborrada o reescrita de la pàgina però l'objecte, amb el seu text, quedava al fitxer. Ara desar elimina aquests objectes. Els fitxers desats amb versions anteriors encara els conserven fins que els torneu a desar.

## Límits reals

- Els enllaços en lot s'han provat en els nostres conjunts de prova. Els conjunts reals dibuixen les crides de moltes maneres, de manera que en un conjunt de client podrien faltar algunes vistes. Els fulls escanejats necessiten primer {{ui:Llegeix el text (OCR)…}}.
- Les notes, les notes privades i la zona del costat s'han provat en un navegador sense interfície gràfica i en els nostres fitxers, no amb un conjunt vectorial real de gran mida i no en una sessió en directe real de dues persones. Canviar una contrasenya encara no està implementat. Les versions anteriors a la 0.9 no mostren les notes.
- La vista de classe és la llista de persones; encara no s'ha provat amb un professor i alumnes reals.
- Els idiomes que no són l'anglès són esborranys de màquina fins que els llegeixi una persona parlant nativa.
- Els instal·ladors de Windows no estan signats digitalment (Més informació, i després Executa-ho igualment); la imatge de disc de macOS no està notaritzada (feu clic dret i després Obre).

## Anteriors: 0.8 i 0.8.1

Això és el que ha canviat a MarkupCraft 0.8 i 0.8.1, en comparació amb la 0.7. La gran novetat és que una marca pot ser una tasca que fa algú, o el vostre propi assistent, i que es tanca sola quan el dibuix canvia de veritat.

### Novetats

**Marques que actuen**

- **Converteix una marca en tasca.** Seleccioneu una o més marques, obriu la pestanya {{ui:Tasques}} i trieu {{ui:Converteix la selecció en tasca}}. Una tasca té un títol, una persona o el vostre assistent connectat que la fa, un dia límit opcional i un estat, i conserva el seu lloc al full i el seu fil. Vegeu [Converteix una marca en tasca](topic:markups-that-act).
- **Tasques que es tanquen soles.** Una tasca pot vigilar el dibuix dins de la seva marca. Obriu una revisió més recent del full i trieu {{ui:Comprova ara}}: si les línies d'aquella àrea han canviat més d'un pèl, la tasca es marca com a Feta, la seva marca passa a Completada i una nota del fil explica què ha canviat. Un nou segell de data, o línies que s'han mogut menys de 1.5 punts, no compten. En canvi, una tasca pot vigilar un element del model: el vostre assistent informa de l'element amb `tasks_check`, i un informe posterior que sigui diferent, o un element eliminat, tanca la tasca. Un sol pas per desfer la torna a obrir.
- **Trobeu la feina.** Filtreu la llista de {{ui:Tasques}} per estat i per a qui és, incloent-hi {{ui:Fora de termini}}; trieu {{ui:Assignada a}} i després {{ui:Assistent}} per veure què espera el vostre assistent. Una tasca passada del seu dia límit es mostra com un avís al tauler de Problemes. {{ui:CSV}} exporta la llista. Les tasques es desen al PDF amb la marca i viatgen per Live com les altres propietats de les marques.

**Què ha canviat, en una llista simple**

- **Llista els canvis.** Obriu la pestanya {{ui:Compara}}, després {{ui:Compara tot el conjunt}}, trieu el fitxer anterior i el posterior i trieu {{ui:Llista els canvis}}. La llista comença amb un recompte, després cobreix cada full canviat, començant pel canvi més gran: on és al full, quina mida té (en unitats reals a més de polzades del paper en un full calibrat), si s'hi han afegit o eliminat línies, quantes marques hi ha i quines paraules han aparegut o desaparegut. {{ui:Copia la llista}} la posa al porta-retalls i {{ui:CSV}} escriu una fila per canvi. Vegeu [Llista què ha canviat entre revisions](topic:what-changed-in-words).

**Notes de veu i decisions**

- **Notes de veu.** A la pestanya {{ui:Notes}} trieu {{ui:Grava una nota de veu}}, i després {{ui:Atura la gravació}}; les gravacions s'aturen soles als dos minuts. La nota es fixa al centre del full, l'arrossegueu al lloc que li correspon i escriviu un rètol a {{ui:Propietats}}, i {{ui:Reprodueix}} a la llista la reprodueix. La gravació es desa dins del PDF.
- **Decisions.** {{ui:Fixa una decisió}} escriu una o dues frases al full. Si substitueix una decisió anterior, trieu-la a {{ui:Substitueix}}: la vella es queda, marcada com a Substituïda, i apunta a la nova. Un sol pas per desfer la retira. Vegeu [Fixa notes de veu i decisions en un full](topic:voice-notes-and-decisions).

**Marcatge de revisió**

- **Envia i respon.** A la pestanya {{ui:Tasques}} obriu {{ui:Marcatge de revisió}}, escriviu la revisió a la qual corresponen les marques i trieu {{ui:Exporta el fitxer de marcatge}}. Obtindreu un fitxer `.redline.json` amb un element per cada marca oberta: full, posició (com a fraccions del full, de manera que un nou traçat a una altra mida encara quadra), paraules, autor, fil i la seva tasca. Qui dibuixa els canvis respon Acceptat, Rebutjat o Fet en un fitxer `.redline-answers.json`; {{ui:Carrega el fitxer de respostes…}} dona a cada marca aquest estat i la nota del delineant, com un sol pas per desfer. Vegeu [Envia les marques al delineant com a marcatge](topic:redline-to-revision).

**Assistents d'IA**

- **Més eines.** Un assistent que hàgiu connectat a través de CadCraft Studio pot llistar tasques (`tasks_list`), crear-ne o canviar-ne una (`task_set`), treure'n la tasca (`task_clear`), comprovar-ne una contra una revisió més recent o un element (`tasks_check`) i llegir la llista simple de canvis entre dos conjunts de plànols oberts (`revisions_changes`). Només rep les eines que heu marcat sota l'interruptor Assistents, i cada canvi és un sol pas per desfer. Vegeu [Utilitza MarkupCraft amb un assistent d'IA](topic:use-with-ai-assistants).

### En totes les aplicacions

- **Idiomes.** CadCraft Studio ara té 54 idiomes. Deu són nous: lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili i uzbek. Tots els que no són l'anglès són esborranys de màquina fins que els llegeixi una persona parlant nativa.
- **Dispositius d'entrada.** {{ui:Configuració}} › {{ui:Global}} › {{ui:Dispositius d'entrada}} decideix què fa un trackpad, els botons laterals del ratolí, un llapis, els tocs amb el dit, un ratolí 3D, un comandament de joc o un controlador MIDI, per a totes les aplicacions o només per a aquesta. Fins que canvieu alguna cosa, cada dispositiu funciona com abans. Vegeu [Utilitza un trackpad, un ratolí 3D o un comandament](common:input-devices).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} té {{ui:Ajusta}} (per defecte), {{ui:2 files}} i {{ui:1 fila}}, perquè el dibuix tingui més espai. Vegeu [Organitza els taulers](common:arrange-panels).
- **Graella de propietats.** Els camps d'Estil d'una marca utilitzen la graella compartida, amb categories plegables i columnes d'etiqueta i de valor.
- **Tauler de Problemes.** Els avisos de l'aplicació, com una tasca fora de termini, s'agrupen en un sol tauler de Problemes.
- **Live i complements.** Les sessions en directe es descriuen a [Treballa junts en directe](common:work-together-live); la llista de complements que segueix el vostre compte és a [Complements i la llista del vostre compte](common:addons-basics).
- **Connecteu la vostra IA.** CadCraft Studio és el centre del vostre propi assistent: connecteu-lo una vegada per a les vuit aplicacions. Les aplicacions no contenen cap IA pròpia.

### Corregit a la 0.8.1

- **Studio pot canviar d'idioma mentre s'executa.** Abans, l'aplicació d'escriptori i les edicions empaquetades es quedaven en anglès. Això encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.
- Les instal·lacions de Studio 0.8 reben l'oferta de la 0.8.1 a través de {{ui:Configuració}} › {{ui:Actualitzacions}}.

### Encara no en aquesta versió

- **No està signat digitalment.** Els instal·ladors de Windows i el .dmg de macOS encara no tenen signatura. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}} i després {{ui:Executa-ho igualment}}. En un Mac, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. Les versions per a botigues estan en espera.
- **La connexió de la vostra IA encara no està acabada en alguns punts.** La connexió amb un sol clic dins de Studio, el connector allotjat per a assistents de navegador i la vostra pròpia clau d'API dins de Studio no es prometen per a aquesta versió. El cicle de tasques s'ha provat, però encara no amb un assistent real.
- **Les comprovacions de tasques necessiten la mateixa mida de pàgina.** Un full retraçat a una altra mida no coincidirà, i per tant les seves tasques no es tancaran. Els fulls s'aparellen pel número de full, si no, per la posició a la pàgina.
- **Les notes de veu són només gravacions.** No hi ha transcripció, i un assistent veu la durada, l'autor i el rètol de la nota, no el so. La gravació s'ha provat amb un micròfon fictici en un navegador sense interfície gràfica; encara cal comprovar un micròfon real en un telèfon, una tauleta o un portàtil.
- **Els fulls de càlcul i els motius d'un PDF** es guarden en una entrada privada del fitxer. Un MarkupCraft més antic ignora aquesta entrada i la descarta la pròxima vegada que desi el fitxer, de manera que obriu i deseu aquest fitxer amb la 0.8 o posterior.
- **La part del delineant en els marcatges.** La lectura del fitxer de marcatge per part de CadCraft i la seva resposta encara no estan implementades.
- **Altres idiomes.** La barra d'aplicació en tàmil es desborda 528 px.

Tota la resta és a [Què encara no està implementat](topic:not-built-yet). Per a la versió anterior, vegeu [Novetats de la 0.7](topic:whats-new-0-7).
