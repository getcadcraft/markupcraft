---
title: Novetats de la 0.8 i la 0.8.1
summary: Marques que es converteixen en tasques i es tanquen soles, una llista simple dels canvis entre revisions, notes de veu i decisions al plànol, fitxers de marcatge per al delineant, i els canvis compartits de la 0.8: dispositius d'entrada, files de la barra d'eines, Problemes i més idiomes.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, tasca, tasques, responsable, dia de venciment, fora de termini, comprova ara, què ha canviat, revisions, compara, nota de veu, decisió, marcatge, fitxer de respostes, delineant, assistent, mcp, problemes, idiomes, dispositius d'entrada, trackpad, files de la barra d'eines, graella de propietats, actualització
from: 40368796
---

Aquests són els canvis de MarkupCraft 0.8 i 0.8.1, comparats amb la 0.7. La gran novetat és que una marca pot ser una tasca que algú, o el vostre propi assistent, fa, i que es tanca sola quan el dibuix canvia de veritat.

## Novetats

### Marques que actuen

- **Converteix una marca en tasca.** Seleccioneu una o més marques, obriu la pestanya {{ui:Tasques}} i trieu {{ui:Converteix la selecció en tasca}}. Una tasca té un títol, una persona o el vostre assistent connectat que la fa, un dia de venciment opcional i un estat, i conserva el seu lloc al plànol i el seu fil. Vegeu [Converteix una marca en tasca](topic:markups-that-act).
- **Tasques que es tanquen soles.** Una tasca pot vigilar el dibuix dins de la seva marca. Obriu una revisió més nova del plànol i trieu {{ui:Comprova ara}}: si les línies d'aquella àrea han canviat més que un pèl, la tasca es marca com a Feta, la seva marca passa a Completada i una nota al fil explica què ha canviat. Un segell de data nou, o línies que s'han mogut menys de 1.5 points, no compten. Una tasca també pot vigilar un element del model: el vostre assistent informa de l'element amb `tasks_check`, i un informe posterior que sigui diferent, o un element suprimit, tanca la tasca. Un únic pas de desfer la reobre.
- **Troba la feina.** Filtreu la llista de {{ui:Tasques}} per estat i per a qui és, incloent-hi {{ui:Fora de termini}}; trieu {{ui:Assignada a}} i després {{ui:Assistent}} per veure què espera el vostre assistent. Una tasca que passa del seu dia de venciment apareix com a avís al tauler de Problemes. {{ui:CSV}} exporta la llista. Les tasques es desen al PDF amb la marca i viatgen per Live com les altres propietats de marca.

### Què ha canviat, en una llista simple

- **Llista els canvis.** Obriu la pestanya {{ui:Compara}}, després Compara un joc complet, trieu el fitxer anterior i el posterior i trieu {{ui:Llista els canvis}}. La llista comença amb un recompte i després cobreix cada plànol canviat, començant pel canvi més gran: on és al plànol, quant de gran és (en unitats reals i també en polzades de paper en un plànol calibrat), si s'han afegit o eliminat línies, quantes marques hi ha i quines paraules han aparegut o desaparegut. {{ui:Copia la llista}} la posa al porta-retalls i {{ui:CSV}} escriu una fila per cada canvi. Vegeu [Llista el que ha canviat entre revisions](topic:what-changed-in-words).

### Notes de veu i decisions

- **Notes de veu.** A la pestanya {{ui:Notes}} trieu {{ui:Grava una nota de veu}}, després {{ui:Atura la gravació}}; les gravacions s'aturen soles als dos minuts. La nota queda fixada al centre del plànol: l'arrossegueu on pertoca i hi escriviu un títol a {{ui:Propietats}}, i {{ui:Reprodueix}} a la llista la reprodueix. La gravació es desa dins del PDF.
- **Decisions.** {{ui:Fixa una decisió}} escriu una o dues frases al plànol. Si substitueix una decisió anterior, trieu-la al camp {{ui:Substitueix}}: la vella es conserva, marcada com a Substituïda, i apunta a la nova. Un únic pas de desfer la fa tornar enrere. Vegeu [Fixa notes de veu i decisions en un plànol](topic:voice-notes-and-decisions).

### Marcatge de revisió

- **Envia i respon.** A la pestanya {{ui:Tasques}} obriu {{ui:Marcatge de revisió}}, escriviu la revisió a què es refereixen les marques i trieu {{ui:Exporta el fitxer de marcatge}}. Obtindreu un fitxer `.redline.json` amb un element per a cada marca oberta: plànol, posició (com a fraccions del plànol, de manera que un nou traçat a una altra mida encara quadra), paraules, autor, fil i la seva tasca. Qui dibuixa els canvis respon Acceptada, Rebutjada o Feta en un fitxer `.redline-answers.json`; {{ui:Carrega el fitxer de respostes…}} dona a cada marca aquest estat i la nota del delineant, com a un únic pas de desfer. Vegeu [Envia les marques al delineant com a marcatge](topic:redline-to-revision).

### Assistents d'IA

- **Més eines.** Un assistent que heu connectat des de CadCraft Studio pot llistar tasques (`tasks_list`), crear-ne o canviar-ne una (`task_set`), treure-li la tasca (`task_clear`), comprovar-ne una contra una revisió més nova o un element (`tasks_check`) i llegir la llista simple dels canvis entre dos conjunts de plànols oberts (`revisions_changes`). Només té les eines que heu marcat sota l'interruptor d'Assistents, i cada canvi és un únic pas de desfer. Vegeu [Utilitza MarkupCraft amb un assistent d'IA](topic:use-with-ai-assistants).

## En totes les apps

- **Idiomes.** CadCraft Studio ara té 54 idiomes. Deu són nous: lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili i uzbek. Tots els idiomes que no són l'anglès són esborranys automàtics fins que un parlant nadiu els llegeixi.
- **Dispositius d'entrada.** {{ui:Configuració}} › {{ui:Global}} › {{ui:Dispositius d'entrada}} decideix què fan un trackpad, els botons laterals del ratolí, un llapis, els tocs amb el dit, un ratolí 3D, un comandament de joc o un controlador MIDI, per a totes les apps o només per a aquesta. Mentre no canvieu res, cada dispositiu funciona com abans. Vegeu [Utilitza un trackpad, un ratolí 3D o un comandament](common:input-devices).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} té {{ui:Ajusta}} (per defecte), {{ui:2 files}} i {{ui:1 fila}}, perquè el dibuix tingui més espai. Vegeu [Organitza els taulers](common:arrange-panels).
- **Graella de propietats.** Els camps d'Estil d'una marca fan servir la graella compartida, amb categories plegables i columnes d'etiqueta i valor.
- **Tauler de Problemes.** Els avisos de l'app, com una tasca fora de termini, es reuneixen en un únic tauler de Problemes.
- **Live i complements.** Les sessions Live es descriuen a [Treballa junts en directe](common:work-together-live); la llista de complements que segueix el vostre compte és a [Complements i la llista del vostre compte](common:addons-basics).
- **Connecteu la vostra IA.** CadCraft Studio és el centre del vostre propi assistent: connecteu-lo una sola vegada per a les vuit apps. Les apps no contenen cap IA pròpia.

## Corregit a la 0.8.1

- **Studio pot canviar d'idioma mentre s'executa.** Abans, l'app d'escriptori i les edicions empaquetades es quedaven en anglès. Encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.
- Les instal·lacions de Studio 0.8 reben l'oferta de la 0.8.1 a través de {{ui:Configuració}} › {{ui:Actualitzacions}}.

## Encara no és a aquesta versió

- **Sense signatura de codi.** Els instal·ladors de Windows i el .dmg de macOS encara no tenen signatura. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}} i després {{ui:Executa igualment}}. En un Mac, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. Les versions per a botigues estan en espera.
- **Connectar la IA encara no està acabat en alguns punts.** La connexió amb un clic dins de Studio, el connector allotjat per a assistents de navegador i la vostra clau d'API pròpia dins de Studio no estan garantits en aquesta versió. El bucle de tasques s'ha provat, però encara no amb un assistent real.
- **Les comprovacions de tasques necessiten la mateixa mida de pàgina.** Un plànol traçat a una altra mida no coincidirà, i per tant les seves tasques no es tancaran. Els plànols s'aparellen pel número de plànol o, si no, per la posició a la pàgina.
- **Les notes de veu són només gravacions.** No hi ha transcripció, i un assistent veu la durada, l'autor i el títol d'una nota, no el so. La gravació s'ha provat amb un micròfon fals en un navegador sense interfície gràfica; encara falta comprovar un micròfon real en un telèfon, una tauleta o un portàtil.
- **Els fulls de càlcul i els motius en un PDF** es guarden en una entrada privada del fitxer. Una MarkupCraft més antiga ignora aquesta entrada i l'elimina la propera vegada que desa el fitxer, així que obriu i deseu aquests fitxers amb la 0.8 o posterior.
- **El costat del delineant de les marques de revisió.** CadCraft que llegeix el fitxer de marcatge i hi respon encara no està implementat.
- **Altres idiomes.** La barra d'aplicació del tàmil es desborda en 528 px.

Tot el que queda és a [Què encara no està implementat](topic:not-built-yet). Per a la versió anterior, vegeu [Novetats de la 0.7](topic:whats-new-0-7).
