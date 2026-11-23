---
title: Novidades da 0.9 (anteriores)
summary: Notas e unha mesa de traballo que nunca se imprimen, notas privadas cifradas e unha copia limpa para o cliente, ligazóns por lotes para un conxunto completo de debuxos, unha ferramenta de arco con dez métodos, seguir a outro revisor en Live e unha corrección para as anotacións eliminadas que seguían no PDF gardado.
keywords: novidades 0.9, versión anterior, novidades, notas de publicación, 0.9, notas de versión, rexistro de cambios, notas, mesa de traballo, notas privadas, contrasinal, cifrado, ocultar notas, mostrar notas, copia limpa, instantánea, ligazóns por lotes, chamadas de folla, ligar follas, bloque do título, número de folla, adenda, renumerar, ligazón pdf, arco, métodos de arco, arco de tres puntos, radio, seguir, seguir a min, live, vista de clase, lista de persoas, anotación eliminada, información sobre ferramentas, títulos de lingüeta, cambios, 0.8, 0.8.1, versión, novidades, tarefa, tarefas, asignada, día límite, atrasado, comprobar agora, que cambiou, revisións, comparar, nota de voz, decisión, redline, ficheiro de respostas, debuxante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas da barra de ferramentas, cuadrícula de propiedades, actualización
from: aa3dfeb8
---

Isto é o que cambiou en MarkupCraft 0.9, comparado coa 0.8.1. A idea principal é que as súas notas de traballo quedan fóra da páxina que recibe o cliente, e que un conxunto completo de debuxos pode ligarse dunha soa vez.

## Novo

### Notas, mesa de traballo e notas privadas

- **A mesa de traballo.** A zona que rodea cada folla é unha mesa: calquera cousa debuxada, escrita ou pegada ao lado da folla é unha nota e nunca se imprime. Escolla {{ui:Mostrar a mesa de traballo}} para afastarse e ter espazo, ou {{ui:Facer unha instantánea na mesa de traballo}}, arrastre unha caixa e despois escolla {{ui:Á mesa de traballo}} para pór unha imaxe dunha parte do debuxo ao lado da folla. Unha instantánea é unha imaxe e non cambia cando cambia a folla. Consulte [Notas, mesa de traballo e notas privadas](topic:notes-and-pasteboard).
- **Mostrar e ocultar notas.** Calquera anotación pode ser unha nota: estableza {{ui:As novas anotacións son}} na lingüeta {{ui:Notas}}, ou {{ui:Esta anotación é}} en {{ui:Propiedades}}. {{key:Shift+H}} ou o interruptor {{ui:Notas}} debaixo da folla oculta e mostra todas as notas á vez. As notas quedan fóra da impresión, das copias aplanadas, das listas e das exportacións, e outros lectores de PDF non as mostran. O PDF gardado conserva as notas para a próxima vez que o abra en MarkupCraft.
- **Notas privadas.** Escolla {{ui:Definir un contrasinal}} e logo faga unha anotación {{ui:Unha nota privada}}. Cífrase no ficheiro cun contrasinal de polo menos 10 caracteres, e non hai recuperación: ninguén, nin nós, pode abrila sen o contrasinal. {{ui:Bloquear}} garda as notas privadas; {{ui:Manter desbloqueado neste dispositivo}} está desactivado por defecto.
- **Gardar unha copia limpa.** {{ui:Gardar unha copia limpa}} elimina todas as notas, as notas privadas e todo o que hai na mesa de traballo. Úsea para o ficheiro que vai ao cliente.

### Ligar un conxunto completo

- **Ligazóns por lotes.** Escolla {{ui:Páxinas}} › {{ui:Ligazóns por lotes…}}, ou {{ui:Ligar chamadas de folla…}} debaixo de {{ui:Buscar texto}} no panel {{ui:Follas}}. O paso 1 lista o número e o nome de cada folla tal como se len no seu bloque do título; corrixa os que estean mal. O paso 2 lista as chamadas atopadas, como `3/A-501` ou `DETAIL 2 ON A-501`. {{ui:Será ligada}} indica a folla e a vista de cada unha, {{ui:Sen ligar}} indica números que ningunha folla aberta ten, e {{ui:Crear as ligazóns}} crea todas nun só paso de desfacer. Execútea de novo despois dunha adenda ou dunha renumeración; as ligazóns que fixo á man non se cambian nunca. Unha ligazón cunha vista gárdase como ligazón PDF, así que outros lectores tamén abren o detalle. Consulte [Ligazóns de follas](topic:sheet-links).

### Debuxo

- **Arco, dez métodos.** A ferramenta {{ui:Arco}} ({{key:O}}) ten agora unha caixa {{ui:Método do arco}} sobre a páxina con dez xeitos de debuxar un arco, e o ángulo, a lonxitude, o radio e a dirección poden marcarse con clic ou escribirse. Consulte [Debuxar un arco de dez xeitos](topic:draw-an-arc).

### Traballo en equipo

- **Seguir a un revisor.** Nunha sesión Live escolla {{ui:Seguir}} ao lado do nome dunha persoa e a súa vista move a vostede coa dela; se vostede despraza ou fai zoom, deixa de seguila. A persoa anfitriá pode escoller {{ui:Pedir a todos que me sigan}}. A lista de persoas amosa a cor, o nome, a folla na que están e cando foi a última edición de cada unha. Consulte [Seguir a outro revisor nunha sesión Live](topic:follow-in-live).

## En todas as aplicacións

- As indicacións emerxentes (información sobre ferramentas) son de Bootstrap, a suxestión inicial pódese pechar, as tiras de lingüetas desprázanse cando desbordan, e os títulos das lingüetas do navegador len `<documento> — MarkupCraft | CadCraft`.
- Un panel con varias seccións abre unha e pecha as demais (un candado ao lado do cursor mantén unha aberta); un interruptor de Configuración desactiva isto.
- Cada aplicación comeza cunha colección predeterminada de obxectos da Biblioteca.
- As unidades de peso e temperatura están dispoñibles na configuración de Unidades.

## Corrixido

- **As anotacións eliminadas xa non se poden ler dentro do PDF gardado.** Antes, ao gardar, quitábase unha anotación eliminada ou reescrita da súa páxina pero o obxecto, co seu texto, quedaba no ficheiro. Agora o gardado elimina eses obxectos. Os ficheiros gardados por versións anteriores aínda os conteñen ata que os volva gardar.

## Límites recoñecidos

- As ligazóns por lotes probáronse nos nosos propios conxuntos de proba. Os conxuntos reais debuxan as burbullas de moitas maneiras, así que nalgúns conxuntos de clientes poden perderse algunhas vistas. As follas escaneadas necesitan antes {{ui:Ler texto (OCR)…}}.
- As notas, as notas privadas e a mesa de traballo probáronse nun navegador sen interface e nos nosos ficheiros, non cun conxunto vectorial grande e real nin nunha sesión Live real de dúas persoas. Cambiar o contrasinal aínda non está feito. As versións anteriores á 0.9 non mostran as notas.
- A vista de clase é a lista de persoas; aínda non se probou con profesorado e alumnado reais.
- Os idiomas distintos do inglés son borradores automáticos ata que unha persoa falante nativa os lea.
- Os instaladores de Windows non están asinados dixitalmente (Máis información, despois Executar igualmente); a imaxe de disco de macOS non está notarizada (botón dereito, despois Abrir).

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou en MarkupCraft 0.8 e 0.8.1, comparado coa 0.7. A gran novidade é que unha anotación pode ser unha tarefa que alguén, ou o seu propio asistente, realiza, e que se pecha sola cando o debuxo cambia de verdade.

### Novo

**Anotacións que actúan**

- **Converter unha anotación en tarefa.** Seleccione unha ou máis anotacións, abra a lingüeta {{ui:Tarefas}} e escolla {{ui:Converter en tarefa a selección}}. Unha tarefa ten título, unha persoa ou o seu asistente conectado que a fará, un día límite opcional e un estado, e conserva o seu lugar na folla e o seu fío. Consulte [Converter unha anotación en tarefa](topic:markups-that-act).
- **Tarefas que se pechan sozas.** Unha tarefa pode vixiar o debuxo dentro da súa anotación. Abra unha revisión máis nova da folla e escolla {{ui:Comprobar agora}}: se as liñas desa zona cambiaron máis dun pelo, a tarefa márcase como Feita, a súa anotación pasa a Completada e unha nota no fío indica o que cambiou. Un novo selo de data, ou liñas que se moveron menos de 1,5 puntos, non contan. Unha tarefa pode vixiar un elemento do modelo: o seu asistente informa do elemento con `tasks_check`, e un informe posterior que difira, ou un elemento eliminado, pecha a tarefa. Un paso de desfacer volve abrila.
- **Atopar o traballo.** Filtre a lista de {{ui:Tarefas}} por estado e por destinataria, incluído {{ui:Atrasado}}; escolla {{ui:Asignada a}} e despois {{ui:Asistente}} para ver o que espera pelo seu asistente. Unha tarefa que pasou o seu día límite aparece como aviso no panel {{ui:Problemas}}. {{ui:CSV}} exporta a lista. As tarefas gárdanse no PDF coa anotación e viaxan por Live como as demais propiedades das anotacións.

**Que cambiou, en forma de lista**

- **Listar os cambios.** Abra a lingüeta {{ui:Comparar}}, despois {{ui:Comparar un conxunto completo}}, escolla o ficheiro anterior e o posterior e escolla {{ui:Listar os cambios}}. A lista comeza cun total e logo recolle cada folla cambiada, a maior mudanza primeiro: onde está na folla, de que tamaño (en unidades reais e tamén en polgadas de papel nunha folla calibrada), se se engadiron ou eliminaron liñas, cantas anotacións hai alí e que palabras apareceron ou desapareceron. {{ui:Copiar a lista}} a pon no portapapeis e {{ui:CSV}} escribe unha fila por cambio. Consulte [Listar o que cambiou entre revisións](topic:what-changed-in-words).

**Notas de voz e decisións**

- **Notas de voz.** Na lingüeta {{ui:Notas}} escolla {{ui:Gravar unha nota de voz}} e despois {{ui:Deter a gravación}}; as gravacións páranse soas aos dous minutos. A nota fíxase no centro da folla, vostede arrástrea ao sitio que lle corresponde e escribe un subtítulo en {{ui:Propiedades}}, e {{ui:Reproducir}} na lista a reproduce. A gravación gárdase dentro do PDF.
- **Decisións.** {{ui:Fixar unha decisión}} escribe unha ou dúas frases na folla. Se substitúe unha decisión anterior, escóllaa en {{ui:Substitúe a}}: a antiga queda, marcada como Substituída, e apunta á nova. Un paso de desfacer a retira. Consulte [Fixar notas de voz e decisións nunha folla](topic:voice-notes-and-decisions).

**Redline a revisión**

- **Enviar e responder.** Na lingüeta {{ui:Tarefas}} abra {{ui:Redline a revisión}}, escriba a revisión á que se refiren as anotacións e escolla {{ui:Exportar ficheiro redline}}. Obtén un ficheiro `.redline.json` con un elemento por cada anotación aberta: folla, posición (en fraccións da folla, para que un novo trazado a outro tamaño siga aliñado), palabras, autor, fío e a súa tarefa. Quen debuxa os cambios responde Aceptada, Rexeitada ou Feita nun ficheiro `.redline-answers.json`; {{ui:Cargar ficheiro de respostas…}} dá a cada anotación ese estado e a nota do debuxante, nun só paso de desfacer. Consulte [Enviar anotacións ao debuxante como redline](topic:redline-to-revision).

**Asistentes de IA**

- **Máis ferramentas.** Un asistente conectado a través de CadCraft Studio pode listar tarefas (`tasks_list`), crear ou cambiar unha (`task_set`), quitar a tarefa (`task_clear`), comprobar unha contra unha revisión máis nova ou un elemento (`tasks_check`) e ler a lista simple de cambios entre dous conxuntos de planos abertos (`revisions_changes`). Só recibe as ferramentas que marcou baixo o interruptor Asistentes, e cada cambio é un paso de desfacer. Consulte [Usar MarkupCraft cun asistente de IA](topic:use-with-ai-assistants).

### En todas as aplicacións

- **Idiomas.** CadCraft Studio ten agora 54 idiomas. Dez son novos: lituano, letón, bosníaco, marathi, telugu, albanés, afrikáans, filipino, swahili e uzbeko. Todos os idiomas distintos do inglés son borradores automáticos ata que unha persoa falante nativa os lea.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fan un trackpad, os botóns laterais do rato, unha caneta, os toques con dedos, un rato 3D, un mando de xogo ou un controlador MIDI, para todas as aplicacións ou só para esta. Ata que cambie algo, cada dispositivo funciona como antes. Consulte [Usar un trackpad, un rato 3D ou un mando](common:input-devices).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ten {{ui:Ajustar}} (o predeterminado), {{ui:2 filas}} e {{ui:1 fila}}, para que o debuxo teña máis espazo. Consulte [Organizar os paneis](common:arrange-panels).
- **Cuadrícula de propiedades.** Os campos de Estilo dunha anotación usan a cuadrícula común, con categorías plegables e columnas de etiqueta e valor.
- **Panel de problemas.** Os avisos da aplicación, como unha tarefa atrasada, reúnense nun só panel de Problemas.
- **Live e complementos.** As sesións Live descríbense en [Traballar xuntos en directo](common:work-together-live); a lista de complementos que segue á súa conta está en [Complementos e a lista da súa conta](common:addons-basics).
- **Conecte a súa IA.** CadCraft Studio é o centro para o seu propio asistente: conéctese unha vez para as oito aplicacións. As aplicacións non teñen IA propia.

### Corrixido na 0.8.1

- **Studio pode cambiar de idioma mentres se executa.** Antes, a aplicación de escritorio e as edicións empaquetadas quedaban en inglés. Isto aínda non se probou en todas as plataformas: díganos se o idioma non cambia.
- As instalacións de Studio 0.8 ofrécense 0.8.1 en {{ui:Configuración}} › {{ui:Actualizacións}}.

### Aínda non está nesta versión

- **Sen asinatura dixital.** Os instaladores de Windows e a imaxe .dmg de macOS aínda non levan sinatura. En Windows, se SmartScreen detén o instalador, escolla {{ui:Máis información}} e despois {{ui:Executar igualmente}}. En Mac, prema o botón dereito en CadCraft Studio e escolla {{ui:Abrir}}. As versións para tendas están en espera.
- **Conectar a súa IA está incompleto en partes.** A conexión dun clic dentro de Studio, o conector aloxado para asistentes do navegador e a súa propia chave de API dentro de Studio non se prometen para esta versión. O ciclo de tarefas probouse, pero aínda non cun asistente real.
- **As comprobacións de tarefas necesitan o mesmo tamaño de páxina.** Unha folla trazada de novo a outro tamaño non coincidirá, así que as súas tarefas non se pechan. As follas emparéllanse polo número de folla, ou pola posición da páxina.
- **As notas de voz son só gravacións.** Non hai transcrición, e un asistente ve a duración, o autor e o subtítulo dunha nota, non o son. A gravación probouse cun micrófono falso nun navegador sen interface; un micrófono real nun teléfono, tableta ou portátil aínda hai que comprobalo.
- **As follas de cálculo e as razóns dun PDF** gárdanse nunha entrada privada do ficheiro. Unha versión anterior de MarkupCraft ignora esa entrada e elimínaa a próxima vez que garda o ficheiro, así que abra e garde ese ficheiro coa 0.8 ou unha posterior.
- **O lado do debuxante nos redlines.** Que CadCraft lea o ficheiro redline e responda a el aínda non está feito.
- **Outros idiomas.** A barra de aplicación en támil desborda 528 px.

Todo o demais está en [O que aínda non está feito](topic:not-built-yet). Para a versión anterior a esta, consulte [Novidades da 0.7](topic:whats-new-0-7).
