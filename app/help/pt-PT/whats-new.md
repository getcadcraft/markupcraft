---
title: Novidades na 0.8 e na 0.8.1
summary: Anotações que se tornam tarefas e se fecham sozinhas, uma lista simples do que mudou entre revisões, notas de voz e decisões no plano, ficheiros de marcação para o desenhador, e as alterações partilhadas da 0.8, como dispositivos de entrada, linhas da barra de ferramentas, Problemas e mais idiomas.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, tarefa, tarefas, responsável, dia limite, em atraso, verificar agora, o que mudou, revisões, comparar, nota de voz, decisão, marcação, ficheiro de respostas, desenhador, assistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, linhas da barra de ferramentas, grelha de propriedades, atualização
from: 40368796
---

Isto é o que mudou na MarkupCraft 0.8 e 0.8.1, comparado com a 0.7. A grande novidade é que uma anotação pode ser uma tarefa que alguém, ou o seu assistente, executa, e que se fecha sozinha quando o desenho muda de facto.

## Novo

### Anotações que agem

- **Transformar uma anotação numa tarefa.** Selecione uma ou mais anotações, abra o separador {{ui:Tarefas}} e escolha {{ui:Fazer da seleção uma tarefa}}. Uma tarefa tem um título, uma pessoa ou o seu assistente ligado para a executar, um dia limite opcional e um estado, e mantém o seu sítio na folha e a sua conversa. Ver [Transformar uma anotação numa tarefa](topic:markups-that-act).
- **Tarefas que se fecham sozinhas.** Uma tarefa pode acompanhar o desenho dentro da sua anotação. Abra uma revisão mais recente da folha e escolha {{ui:Verificar agora}}: se as linhas dessa área mudaram mais do que um fio de cabelo, a tarefa é marcada como Concluída, a anotação passa a Concluída e uma nota na conversa diz o que mudou. Um novo carimbo de data, ou linhas que se deslocaram menos de 1.5 pontos, não contam. Em vez disso, uma tarefa pode acompanhar um elemento do modelo: o seu assistente comunica o elemento com `tasks_check`, e um relatório posterior que difere, ou um elemento eliminado, fecha a tarefa. Um passo de anulação reabre-a.
- **Encontrar o trabalho.** Filtre a lista {{ui:Tarefas}} por estado e pela pessoa a quem se destina, incluindo {{ui:Em atraso}}; escolha {{ui:Atribuída a}} e depois {{ui:Assistente}} para ver o que espera pelo seu assistente. Uma tarefa passada do dia limite aparece como aviso no painel Problemas. {{ui:CSV}} exporta a lista. As tarefas são guardadas no PDF com a anotação e viajam pela Live como as outras propriedades das anotações.

### O que mudou, numa lista simples

- **Listar as alterações.** Abra o separador {{ui:Comparar}}, depois {{ui:Comparar um conjunto de folhas completo}}, escolha o ficheiro anterior e o posterior e escolha {{ui:Listar as alterações}}. A lista começa com uma contagem e depois cobre cada folha alterada, começando pela maior alteração: onde está na folha, qual a sua dimensão (em unidades reais e também em polegadas (in) de papel numa folha calibrada), se foram acrescentadas ou removidas linhas, quantas anotações lá estão e que palavras apareceram ou desapareceram. {{ui:Copiar a lista}} coloca-a na área de transferência, e {{ui:CSV}} escreve uma linha por alteração. Ver [Listar o que mudou entre revisões](topic:what-changed-in-words).

### Notas de voz e decisões

- **Notas de voz.** No separador {{ui:Notas}} escolha {{ui:Gravar uma nota de voz}}, depois {{ui:Parar a gravação}}; as gravações param sozinhas ao fim de dois minutos. A nota fica fixada no centro da folha; arrasta-se para onde pertence e escreve-se uma legenda em {{ui:Propriedades}}, e {{ui:Reproduzir}} na lista reproduz a nota. A gravação fica guardada dentro do PDF.
- **Decisões.** {{ui:Afixar uma decisão}} escreve uma ou duas frases na folha. Se a nova substituir uma decisão anterior, escolha essa em {{ui:Substitui}}: a antiga mantém-se, marcada como Substituída, e aponta para a nova. Um único passo de anulação a retira. Ver [Afixar notas de voz e decisões numa folha](topic:voice-notes-and-decisions).

### Marcação para revisão

- **Enviar e responder.** No separador {{ui:Tarefas}} abra {{ui:Marcação para revisão}}, escreva a revisão a que as anotações se referem e escolha {{ui:Exportar ficheiro de marcação}}. Obtém-se um ficheiro `.redline.json` com um item por cada anotação aberta: folha, posição (em frações da folha, para que uma nova impressão a outra escala continue alinhada), palavras, autor, conversa e a sua tarefa. Quem desenha as alterações responde Aceite, Rejeitada ou Concluída num ficheiro `.redline-answers.json`; {{ui:Carregar ficheiro de respostas…}} dá a cada anotação esse estado e a nota do desenhador, como um único passo de anulação. Ver [Enviar anotações ao desenhador como marcação para revisão](topic:redline-to-revision).

### Assistentes de IA

- **Mais ferramentas.** Um assistente ligado através do CadCraft Studio pode listar tarefas (`tasks_list`), criar ou alterar uma (`task_set`), retirá-la (`task_clear`), verificá-la contra uma revisão mais recente ou um elemento (`tasks_check`) e ler a lista simples de alterações entre dois conjuntos de planos abertos (`revisions_changes`). Só recebe as ferramentas que assinalou sob o interruptor Assistentes, e cada alteração é um passo de anulação. Ver [Usar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants).

## Em todas as aplicações

- **Idiomas.** O CadCraft Studio tem agora 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, télugu, albanês, africâner, filipino, suaíli e uzbeque. Todos os não ingleses são rascunhos automáticos até que um falante nativo os leia.
- **Dispositivos de entrada.** {{ui:Definições}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que faz um trackpad, os botões laterais do seu rato, uma caneta, toques com os dedos, um rato 3D, um controlador de jogos ou um controlador MIDI, para todas as aplicações ou só para esta. Até alterar algo, todos os dispositivos funcionam como antes. Ver [Usar um trackpad, rato 3D ou controlador](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} tem {{ui:Quebrar}} (a predefinição), {{ui:2 linhas}} e {{ui:1 linha}}, para que o desenho ganhe mais espaço. Ver [Organizar os painéis](common:arrange-panels).
- **Grelha de propriedades.** Os campos de Estilo de uma anotação usam a grelha partilhada, com categorias recolhíveis e colunas de rótulo e de valor.
- **Painel Problemas.** Os avisos da aplicação, como uma tarefa em atraso, reúnem-se num só painel Problemas.
- **Live e suplementos.** As sessões Live estão descritas em [Trabalhar em conjunto em Live](common:work-together-live); a lista de suplementos que segue a sua conta está em [Suplementos e a lista da sua conta](common:addons-basics).
- **Ligar a sua IA.** O CadCraft Studio é o centro do seu próprio assistente: ligar uma vez serve para as oito aplicações. As aplicações não têm IA própria.

## Corrigido na 0.8.1

- **O Studio pode mudar de idioma enquanto corre.** Antes, a aplicação de ambiente de trabalho e as edições empacotadas ficavam em inglês. Isto ainda não foi testado em todas as plataformas: se o idioma não mudar, convém comunicá-lo.
- As instalações do Studio 0.8 recebem a oferta da 0.8.1 através de {{ui:Definições}} › {{ui:Atualizações}}.

## Ainda não nesta versão

- **Sem assinatura de código.** Os instaladores do Windows e o .dmg do macOS ainda não têm assinatura. No Windows, se o SmartScreen impedir o instalador, escolha {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}. Num Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para as lojas estão suspensas.
- **Ligar a sua IA ainda está incompleto em alguns pontos.** A ligação com um clique dentro do Studio, o conector alojado para assistentes de navegador e a chave de API própria dentro do Studio não estão prometidos para esta versão. O ciclo de tarefas foi testado, mas ainda não com um assistente real.
- **As verificações de tarefas exigem o mesmo tamanho de página.** Uma folha reimpressa com outro tamanho não coincide, por isso as suas tarefas não se fecham. As folhas são emparelhadas pelo número da folha ou, na falta dele, pela posição na página.
- **As notas de voz são apenas gravações.** Não há transcrição, e um assistente vê a duração, o autor e a legenda de uma nota, não o som. A gravação foi testada com um microfone falso num navegador sem interface gráfica; um microfone real num telemóvel, tablet ou portátil ainda está por verificar.
- **Folhas de cálculo e motivos num PDF** são guardados numa entrada privada do ficheiro. Um MarkupCraft mais antigo ignora essa entrada e descarta-a na próxima vez que guardar o ficheiro, por isso abra e guarde esse ficheiro com a versão 0.8 ou posterior.
- **O lado do desenhador nas marcações para revisão.** A leitura do ficheiro de marcação pelo CadCraft e a resposta a esse ficheiro ainda não estão feitas.
- **Outros idiomas.** A barra de aplicação em tâmil transborda 528 px.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). Para a versão anterior, ver [Novidades na 0.7](topic:whats-new-0-7).
