---
title: Novidades da 0.8 e a 0.8.1
summary: Anotacións que se converten en tarefas e se pechan soas, unha lista simple dos cambios entre revisións, notas de voz e decisións no plano, ficheiros redline para o debuxante, e os cambios compartidos da 0.8: dispositivos de entrada, filas da barra de ferramentas, Problemas, máis idiomas.
keywords: novidades, o que hai de novo, notas da versión, rexistro de cambios, cambios, 0.8, 0.8.1, versión, funcionalidades novas, tarefa, tarefas, asignada, día de vencemento, vencido, comprobar agora, que cambiou, revisións, comparar, nota de voz, decisión, redline, ficheiro de respostas, debuxante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas da barra de ferramentas, grella de propiedades, actualizar
from: 40368796
---

Isto é o que cambiou en MarkupCraft 0.8 e 0.8.1, comparado coa 0.7. A gran novidade é que unha anotación pode ser unha tarefa que alguén, ou o seu propio asistente, realiza, e que se pecha soa cando o debuxo cambia de verdade.

## Novidades

### Anotacións que actúan

- **Converta unha anotación nunha tarefa.** Seleccione unha ou máis anotacións, abra a lapela {{ui:Tasks}} e escolla {{ui:Make selected a task}}. Unha tarefa ten un título, unha persoa ou o seu asistente conectado para facela, un día de vencemento opcional e un estado, e mantén o seu lugar na folla e o seu fío. Vexa [Converter unha anotación nunha tarefa](topic:markups-that-act).
- **Tarefas que se pechan soas.** Unha tarefa pode vixiar o debuxo dentro da súa anotación. Abra unha revisión máis recente da folla e escolla {{ui:Check now}}: se as liñas daquela zona cambiaron de forma apreciable, a tarefa márcase como Feita, a súa anotación pasa a Completada e unha nota no fío indica o que cambiou. Unha nova data de selo, ou liñas que se moveron menos de 1,5 puntos, non contan. En cambio, unha tarefa pode vixiar un elemento do modelo: o seu asistente informa do elemento con `tasks_check`, e un informe posterior que difira, ou un elemento borrado, pecha a tarefa. Un paso de desfacer a reabre.
- **Atope o traballo.** Filtre a lista {{ui:Tasks}} por estado e pola persoa á que vai destinada, incluído {{ui:Overdue}}; escolla {{ui:Assigned to}} e logo {{ui:Assistant}} para ver o que espera polo seu asistente. Unha tarefa que pasou o seu día de vencemento aparece como aviso no panel Problemas. {{ui:CSV}} exporta a lista. As tarefas gárdanse no PDF coa anotación e viaxan con Live como outras propiedades das anotacións.

### Que cambiou, en lista simple

- **Liste os cambios.** Abra a lapela {{ui:Compare}}, logo {{ui:Compare a whole set}}, escolla o ficheiro anterior e o posterior, e escolla {{ui:List the changes}}. A lista comeza cun reconto e despois cubre cada folla cambiada, o cambio máis grande primeiro: onde está na folla, o tamaño (en unidades reais e tamén en polgadas de papel nunha folla calibrada), se se engadiron ou eliminaron liñas, cantas anotacións hai alí e que palabras apareceron ou desapareceron. {{ui:Copy the list}} pon a lista no portapapeis e {{ui:CSV}} escribe unha fila por cada cambio. Vexa [Listar o que cambiou entre revisións](topic:what-changed-in-words).

### Notas de voz e decisións

- **Notas de voz.** Na lapela {{ui:Notes}} escolla {{ui:Record a voice note}} e logo {{ui:Stop recording}}; as gravacións páranse soas aos dous minutos. A nota fíxase no centro da folla, arrástrea ao sitio que lle corresponde e escriba unha lenda en {{ui:Properties}}, e {{ui:Play}} na lista reprodúceo. A gravación gárdase dentro do PDF.
- **Decisións.** {{ui:Pin a decision}} escribe unha ou dúas frases na folla. Se substitúe unha decisión anterior, escóllaa en {{ui:It replaces}}: a vella mantense, marcada como Substituída, e apunta á nova. Un paso de desfacer lévaa atrás. Vexa [Fixar notas de voz e decisións nunha folla](topic:voice-notes-and-decisions).

### Redline a revisión

- **Enviar e responder.** Na lapela {{ui:Tasks}} abra {{ui:Redline to revision}}, escriba a revisión á que están referidas as anotacións e escolla {{ui:Export redline file}}. Obtén un ficheiro `.redline.json` cun elemento por cada anotación aberta: folla, posición (como fraccións da folla, para que unha nova impresión a outro tamaño siga aliñada), palabras, autor, fío e a súa tarefa. Quen debuxa os cambios responde Aceptada, Rexeitada ou Feita nun ficheiro `.redline-answers.json`; {{ui:Load answers file…}} dálle a cada anotación ese estado e a nota do debuxante, como un único paso de desfacer. Vexa [Enviar anotacións ao debuxante como redline](topic:redline-to-revision).

### Asistentes de IA

- **Máis ferramentas.** Un asistente que conectou a través de CadCraft Studio pode listar tarefas (`tasks_list`), crear ou cambiar unha (`task_set`), quitar a tarefa (`task_clear`), comprobar unha contra unha revisión máis recente ou un elemento (`tasks_check`) e ler a lista simple dos cambios entre dous conxuntos de planos abertos (`revisions_changes`). Só recibe as ferramentas que marcou baixo o interruptor Asistentes, e cada cambio é un paso de desfacer. Vexa [Usar MarkupCraft cun asistente de IA](topic:use-with-ai-assistants).

## En todas as aplicacións

- **Idiomas.** CadCraft Studio ten agora 54 idiomas. Dez son novos: lituano, letón, bosníaco, maratí, telugu, albanés, afrikáans, filipino, suahili e uzbeko. Todos os idiomas distintos do inglés son borradores automáticos ata que un falante nativo os lea.
- **Dispositivos de entrada.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} define o que fan un trackpad, os botóns laterais do rato, unha pluma, os toques cos dedos, un rato 3D, un mando de xogo ou un controlador MIDI, para todas as aplicacións ou só para esta. Ata que cambie algo, todos os dispositivos funcionan como antes. Vexa [Usar un trackpad, rato 3D ou mando](common:input-devices).
- **Filas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ten {{ui:Wrap}} (o predeterminado), {{ui:2 rows}} e {{ui:1 row}}, para que o debuxo teña máis espazo. Vexa [Organizar os paneis](common:arrange-panels).
- **Grella de propiedades.** Os campos de Estilo dunha anotación usan a grella compartida, con categorías que se poden pregar e columnas de etiqueta e valor.
- **Panel Problemas.** Os avisos da aplicación, como unha tarefa vencida, reúnense nun único panel Problemas.
- **Live e complementos.** As sesións Live descríbense en [Traballar xuntos en directo](common:work-together-live); a lista de complementos que segue á súa conta está en [Complementos e a lista da súa conta](common:addons-basics).
- **Conecte a súa IA.** CadCraft Studio é o centro para o seu propio asistente: conéctese unha vez para as oito aplicacións. As aplicacións non teñen IA propia.

## Corrixido na 0.8.1

- **Studio pode cambiar de idioma mentres funciona.** Antes, a aplicación de escritorio e as edicións empaquetadas quedaban en inglés. Isto aínda non se probou en todas as plataformas: díganos se o idioma non cambia.
- As instalacións de Studio 0.8 ofrécense a 0.8.1 en {{ui:Settings}} › {{ui:Updates}}.

## Aínda non nesta versión

- **Sen sinatura de código.** Os instaladores de Windows e o .dmg de macOS aínda non levan sinatura. En Windows, se SmartScreen detén o instalador, escolla {{ui:More info}} e logo {{ui:Run anyway}}. Nun Mac, faga clic co botón dereito en CadCraft Studio e escolla {{ui:Open}}. As versións para tendas están en espera.
- **Conectar a IA aínda está incompleta en partes.** A conexión dun clic dentro de Studio, o conector aloxado para asistentes de navegador e a súa propia clave de API dentro de Studio non se prometen para esta versión. O ciclo de tarefas probouse, pero aínda non cun asistente real.
- **As comprobacións de tarefas precisan o mesmo tamaño de páxina.** Unha folla reimpresa a outro tamaño non coincidirá, polo que as súas tarefas non se pechan. As follas emparéllanse polo número de folla e, se non, pola posición na páxina.
- **As notas de voz son só gravacións.** Non hai transcrición, e un asistente ve a duración, o autor e a lenda dunha nota, non o son. A gravación probouse cun micrófono falso nun navegador sen interface gráfica; aínda hai que comprobar un micrófono real nun teléfono, tableta ou portátil.
- **As follas de cálculo e os motivos dun PDF** gárdanse nunha entrada privada do ficheiro. Unha MarkupCraft máis antiga ignora esa entrada e elimínaa a próxima vez que garde o ficheiro, así que abra e grave ese ficheiro coa 0.8 ou posterior.
- **O lado do debuxante das redlines.** Que CadCraft lea o ficheiro redline e lle responda aínda non está feito.
- **Outros idiomas.** A barra da aplicación en tamil desborda 528 px.

Todo o demais está en [O que aínda non está feito](topic:not-built-yet). Para a versión anterior, vexa [Novidades da 0.7](topic:whats-new-0-7).
