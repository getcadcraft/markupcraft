---
title: Novidades da 0.9
summary: Notas e unha mesa de traballo que nunca se imprimen, notas privadas cifradas e unha copia limpa para o cliente, ligazóns por lotes para un conxunto completo de debuxos, unha ferramenta Arco con dez métodos, seguir a outro revisor en Live e unha corrección para as anotacións eliminadas que seguían no PDF gardado.
keywords: novidades, o que hai de novo, 0.9, notas de versión, rexistro de cambios, notas, mesa de traballo, notas privadas, contrasinal, cifrado, ocultar notas, mostrar notas, copia limpa, instantánea, ligazóns por lotes, chamadas de folla, ligar follas, bloque de títulos, número de folla, adenda, renumerar, ligazón pdf, arco, métodos de arco, arco de tres puntos, raio, seguir, seguir-me, live, vista de clase, lista de persoas, anotación eliminada, info emerxente, títulos de lapela, novidades, notas de versión, rexistro de cambios, cambios, 0.8, 0.8.1, versión, novas funcións, tarefa, tarefas, responsable, día de vencemento, vencido, comprobar agora, o que cambiou, revisións, comparar, nota de voz, decisión, redline, ficheiro de respostas, delineante, asistente, mcp, problemas, idiomas, dispositivos de entrada, panel táctil, filas da barra de ferramentas, cuadrícula de propiedades, actualización
from: dbdd7ed4
---

Isto é o que cambiou en MarkupCraft 0.9, comparado coa 0.8.1. A idea principal é que as súas notas de traballo quedan fóra da páxina que recibe o cliente, e un conxunto completo de debuxos pode ligarse nunha soa pasada.

## Novidades

### Notas, a mesa de traballo e notas privadas

- **A mesa de traballo.** A área ao redor de cada folla é unha mesa: calquera cousa debuxada, escrita ou pegada ao lado da folla é unha nota e nunca se imprime. Escolla {{ui:Mostrar a mesa de traballo}} para afastar a vista e ter sitio, ou {{ui:Facer unha instantánea na mesa de traballo}}, arrastre unha caixa e logo {{ui:Á mesa de traballo}} para pór unha imaxe dunha parte do debuxo ao lado da folla. Unha instantánea é unha imaxe e non cambia cando cambia a folla. Vexa [Notas, a mesa de traballo e notas privadas](topic:notes-and-pasteboard).
- **Mostrar e ocultar notas.** Calquera anotación pode ser unha nota: fixe {{ui:As novas anotacións son}} na lapela {{ui:Notas}}, ou {{ui:Esta anotación é}} en {{ui:Propiedades}}. {{key:Shift+H}} ou o interruptor {{ui:Notas}} debaixo da folla oculta e mostra todas as notas de golpe. As notas quedan fóra da impresión, das copias aplanadas, das listas e das exportacións, e os outros lectores de PDF non as mostran. O seu PDF gardado consérvaas para a próxima vez que o abra en MarkupCraft.
- **Notas privadas.** Escolla {{ui:Definir un contrasinal}} e logo faga unha anotación {{ui:Unha nota privada}}. Cífrase no ficheiro cun contrasinal de polo menos 10 caracteres, e non hai recuperación: ninguén, nin nós, pode abrila sen o contrasinal. {{ui:Bloquear}} garda as notas privadas fóra da vista; {{ui:Manter desbloqueado neste dispositivo}} está desactivado por defecto.
- **Gardar unha copia limpa.** {{ui:Gardar unha copia limpa}} elimina todas as notas, notas privadas e todo o que hai na mesa de traballo. Use este para o ficheiro que vai ao cliente.

### Ligar un conxunto completo

- **Ligazóns por lotes.** Escolla {{ui:Páxinas}} › {{ui:Ligazóns por lotes…}}, ou {{ui:Ligar chamadas de folla…}} debaixo de {{ui:Buscar texto}} no panel {{ui:Follas}}. O paso 1 lista o número e o nome de cada folla tal como se len no seu bloque de títulos; corrixa os que estean mal. O paso 2 lista as chamadas atopadas, como `3/A-501` ou `DETAIL 2 ON A-501`. {{ui:Ligará}} mostra a folla e a vista de cada unha, {{ui:Sen ligar}} mostra os números que ningunha folla aberta ten, e {{ui:Crear as ligazóns}} faina todas nun só paso de desfacer. Execútea de novo despois dunha adenda ou dunha renumeración; as ligazóns feitas á man nunca se cambian. Unha ligazón cunha vista gárdase como ligazón PDF, para que os outros lectores abran tamén o detalle. Vexa [Ligazóns de follas](topic:sheet-links).

### Debuxo

- **Arco, dez métodos.** A ferramenta {{ui:Arco}} ({{key:O}}) ten agora unha caixa {{ui:Método do arco}} sobre a páxina con dez maneiras de debuxar un arco, e o ángulo, a lonxitude, o raio e a dirección pódense marcar con clic ou escribir. Vexa [Debuxar un arco de dez maneiras](topic:draw-an-arc).

### Traballar xuntos

- **Seguir a un revisor.** Nunha sesión Live escolla {{ui:Seguir}} xunto ao nome dunha persoa e a súa vista move coa dela; desprazar ou ampliar vostede mesmo detén o seguimento. A persoa anfitriá pode escoller {{ui:Pedir a todos que me sigan}}. A lista de persoas mostra a cor, o nome de cada unha, a folla en que está e cando foi a súa última edición. Vexa [Seguir a outro revisor nunha sesión Live](topic:follow-in-live).

## En todas as aplicacións

- As info emerxentes son as de Bootstrap, o consello de inicio pódese pechar, as tiras de lapelas desprázanse cando desbordan e os títulos das lapelas do navegador len `<document> — MarkupCraft | CadCraft`.
- Un panel con varias seccións abre unha e pecha as demais (un candado xunto á frecha mantén unha aberta); un interruptor de Configuración desactiva isto.
- Cada aplicación comeza cunha colección predeterminada de obxectos da Biblioteca.
- As unidades de peso e temperatura están dispoñibles na configuración de Unidades.

## Correccións

- **As anotacións eliminadas xa non seguen lexibles dentro do PDF gardado.** Antes, ao gardar, quitábase unha anotación eliminada ou reescrita da súa páxina pero o obxecto, co seu texto, quedaba no ficheiro. Agora o gardado elimina eses obxectos. Os ficheiros gardados por versións anteriores aínda os conteñen ata que os volva gardar.

## Límites reais

- As ligazóns por lotes probáronse nos nosos propios conxuntos de proba. Os conxuntos reais debuxan as burbullas de moitas maneiras, así que nun conxunto de cliente poderían perderse algunhas vistas. As follas escaneadas necesitan antes {{ui:Ler texto (OCR)…}}.
- As notas, as notas privadas e a mesa de traballo probáronse nun navegador sen interface gráfica e nos nosos propios ficheiros, non cun conxunto vectorial real e grande, e non nunha sesión Live real de dúas persoas. Cambiar un contrasinal aínda non está construído. As versións anteriores á 0.9 non mostran notas.
- A vista de clase é a lista de persoas; aínda non se probou cun profesorado e alumnado reais.
- Os idiomas distintos do inglés son borradores automáticos ata que os lea un falante nativo.
- Os instaladores de Windows non están asinados dixitalmente (Máis información, despois Executar igualmente); a imaxe de disco de macOS non está notarizada (botón dereito, despois Abrir).

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou en MarkupCraft 0.8 e 0.8.1, comparado coa 0.7. A gran novidade é que unha anotación pode ser unha tarefa que fai alguén, ou o seu propio asistente, e que se pecha soa cando o debuxo cambia de verdade.

### Novidades

**Anotacións que actúan**

- **Converter unha anotación en tarefa.** Seleccione unha ou varias anotacións, abra a lapela {{ui:Tarefas}} e escolla {{ui:Converter en tarefa a selección}}. Unha tarefa ten un título, unha persoa ou o seu asistente conectado que a fai, un día de vencemento opcional e un estado, e conserva o seu lugar na folla e o seu fío. Vexa [Converter unha anotación en tarefa](topic:markups-that-act).
- **Tarefas que se pechan soas.** Unha tarefa pode vixiar o debuxo dentro da súa anotación. Abra unha revisión máis nova da folla e escolla {{ui:Comprobar agora}}: se as liñas daquela zona cambiaron en máis do mínimo, a tarefa márcase como Feita, a súa anotación pasa a Completada e unha nota no fío di o que cambiou. Unha data nova ou liñas que se moveron menos de 1,5 puntos non contan. Unha tarefa tamén pode vixiar un elemento do modelo: o seu asistente informa do elemento con `tasks_check`, e un informe posterior que difira, ou un elemento eliminado, pecha a tarefa. Un paso de desfacer volve abrila.
- **Atopar o traballo.** Filtre a lista {{ui:Tarefas}} por estado e por para quen é, incluído {{ui:Vencido}}; escolla {{ui:Asignada a}} e logo {{ui:Asistente}} para ver o que espera polo seu asistente. Unha tarefa que pasou o seu día de vencemento aparece como aviso no panel de {{ui:Problemas}}. {{ui:CSV}} exporta a lista. As tarefas gárdanse no PDF coa anotación e viaxan por Live como outras propiedades da anotación.

**Que cambiou, en lista simple**

- **Listar os cambios.** Abra a lapela {{ui:Comparar}}, logo {{ui:Comparar un conxunto completo}}, escolla o ficheiro anterior e o posterior e escolla {{ui:Listar os cambios}}. A lista comeza cun reconto e logo recolle cada folla cambiada, co maior cambio primeiro: onde está na folla, de que tamaño (en unidades reais e, ademais, en polgadas de papel nunha folla calibrada), se se engadiron ou eliminaron liñas, cantas anotacións hai alí e que palabras apareceron ou desapareceron. {{ui:Copiar a lista}} pon a lista no portapapeis e {{ui:CSV}} escribe unha fila por cambio. Vexa [Listar o que cambiou entre revisións](topic:what-changed-in-words).

**Notas de voz e decisións**

- **Notas de voz.** Na lapela {{ui:Notas}} escolla {{ui:Gravar unha nota de voz}}, e logo {{ui:Deter a gravación}}; as gravacións deteñen soas aos dous minutos. A nota fíxase no centro da folla, arrástrea ao lugar que lle corresponde e escribe un título en {{ui:Propiedades}}, e {{ui:Reproducir}} na lista reprodúcea. A gravación gárdase dentro do PDF.
- **Decisións.** {{ui:Fixar unha decisión}} escribe unha ou dúas frases na folla. Se substitúe unha decisión anterior, escóllaa en {{ui:Substitúe a}}: a vella queda, marcada como Substituída, e apunta á nova. Un paso de desfacer a devolve. Vexa [Fixar notas de voz e decisións nunha folla](topic:voice-notes-and-decisions).

**Redline a revisión**

- **Enviar e responder.** Na lapela {{ui:Tarefas}} abra {{ui:Redline a revisión}}, escriba a revisión contra a que están as anotacións e escolla {{ui:Exportar ficheiro redline}}. Obtén un ficheiro `.redline.json` cun elemento por cada anotación aberta: folla, posición (como fraccións da folla, para que unha nova impresión a outro tamaño siga aliñada), palabras, autor, fío e a súa tarefa. Quen debuxa os cambios responde Aceptada, Rexeitada ou Feita nun ficheiro `.redline-answers.json`; {{ui:Cargar ficheiro de respostas…}} dálle a cada anotación ese estado e a nota do delineante, nun só paso de desfacer. Vexa [Enviar anotacións ao delineante como redline](topic:redline-to-revision).

**Asistentes de IA**

- **Máis ferramentas.** Un asistente que conectou a través de CadCraft Studio pode listar tarefas (`tasks_list`), crear ou cambiar unha (`task_set`), quitar a tarefa (`task_clear`), comprobar unha contra unha revisión máis nova ou un elemento (`tasks_check`) e ler a lista simple de cambios entre dous conxuntos de planos abertos (`revisions_changes`). Só recibe as ferramentas que marcou no interruptor de Asistentes, e cada cambio é un paso de desfacer. Vexa [Usar MarkupCraft cun asistente de IA](topic:use-with-ai-assistants).

### En todas as aplicacións

- **Idiomas.** CadCraft Studio ten agora 54 idiomas. Dez son novos: lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, suahili e uzbeko. Todos os que non son inglés son borradores automáticos ata que os lea un falante nativo.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} fixa o que fan un panel táctil, os botóns laterais do rato, unha caneta, os toques con dedos, un rato 3D, un mando de xogo ou un controlador MIDI, para todas as aplicacións ou só para esta. Ata que cambie algo, cada dispositivo funciona como antes. Vexa [Usar un panel táctil, rato 3D ou mando](common:input-devices).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ten {{ui:Ajustar}} (o predeterminado), {{ui:2 filas}} e {{ui:1 fila}}, para que o debuxo teña máis sitio. Vexa [Organizar os paneis](common:arrange-panels).
- **Cuadrícula de propiedades.** Os campos de Estilo dunha anotación usan a cuadrícula compartida, con categorías plegables e columnas de etiqueta e valor.
- **Panel de problemas.** Os avisos da aplicación, como unha tarefa vencida, xúntanse nun só panel de Problemas.
- **Live e complementos.** As sesións Live descríbense en [Traballar xuntos en directo](common:work-together-live); a lista de complementos que segue á súa conta está en [Complementos e a lista da súa conta](common:addons-basics).
- **Conecte a súa IA.** CadCraft Studio é o centro do seu propio asistente: conéctese unha vez para as oito aplicacións. As aplicacións non teñen IA propia.

### Correccións na 0.8.1

- **Studio pode cambiar de idioma mentres se executa.** Antes, a aplicación de escritorio e as edicións empaquetadas quedaban en inglés. Aínda non se probou en todas as plataformas: díganos se o idioma non cambia.
- As instalacións de Studio 0.8 reciben a 0.8.1 a través de {{ui:Configuración}} › {{ui:Actualizacións}}.

### Aínda non nesta versión

- **Non asinada dixitalmente.** Os instaladores de Windows e a imaxe .dmg de macOS aínda non levan sinatura. En Windows, se SmartScreen detén o instalador, escolla {{ui:Máis información}}, despois {{ui:Executar igualmente}}. Nun Mac, prema co botón dereito en CadCraft Studio e escolla {{ui:Abrir}}. As versións para tendas están en espera.
- **Conectar a IA está inacabado en partes.** Non se prometen para esta versión a conexión dun clic dentro de Studio, o conector aloxado para asistentes de navegador nin a súa propia clave de API dentro de Studio. O ciclo de tarefas probouse, pero aínda non cun asistente real.
- **As comprobacións de tarefas necesitan o mesmo tamaño de páxina.** Unha folla impresa de novo a outro tamaño non coincidirá, así que as súas tarefas non se pechan. As follas emparéllanse polo número de folla, se non pola posición na páxina.
- **As notas de voz son só gravacións.** Non hai transcrición, e un asistente ve a duración, o autor e o título dunha nota, non o son. A gravación probouse cun micrófono falso nun navegador sen interface gráfica; aínda hai que comprobar un micrófono real nun teléfono, tableta ou portátil.
- **As follas de cálculo e os motivos nun PDF** gárdanse nunha entrada privada do ficheiro. Un MarkupCraft máis antigo ignora esa entrada e elimínaa a próxima vez que garda o ficheiro, así que abra e garde un ficheiro así coa 0.8 ou posterior.
- **A parte do delineante nos redlines.** Que CadCraft lea o ficheiro redline e responda a el aínda non está construído.
- **Outros idiomas.** A barra de aplicacións en tamil desborda 528 px.

O resto está en [O que aínda non está construído](topic:not-built-yet). Para a versión anterior, vexa [Novidades da 0.7](topic:whats-new-0-7).
