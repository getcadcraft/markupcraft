---
title: Novidades na 0.8 e na 0.8.1
summary: Marcações que viram tarefas e se fecham sozinhas, uma lista simples do que mudou entre revisões, notas de voz e decisões no plano, arquivos redline para o desenhista e as mudanças compartilhadas da 0.8: dispositivos de entrada, linhas da barra de ferramentas, Problemas, mais idiomas.
keywords: novidades, o que há de novo, notas de versão, registro de alterações, alterações, 0.8, 0.8.1, versão, novos recursos, tarefa, tarefas, responsável, dia de vencimento, atrasados, verificar agora, o que mudou, revisões, comparar, nota de voz, decisão, redline, arquivo de respostas, desenhista, assistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, linhas da barra de ferramentas, grade de propriedades, atualização
from: 40368796
---

Isto é o que mudou na MarkupCraft 0.8 e 0.8.1, em comparação com a 0.7. A grande novidade é que uma marcação pode ser uma tarefa que alguém, ou o seu próprio assistente, executa, e que se fecha sozinha quando o desenho realmente muda.

## Novo

### Marcações que agem

- **Transformar uma marcação em tarefa.** Selecione uma ou mais marcações, abra a guia {{ui:Tarefas}} e escolha {{ui:Transformar selecionada em tarefa}}. Uma tarefa tem um título, uma pessoa ou o seu assistente conectado para executá-la, um dia de vencimento opcional e um estado, e mantém o seu lugar na folha e a sua conversa. Veja [Transformar uma marcação em tarefa](topic:markups-that-act).
- **Tarefas que se fecham sozinhas.** Uma tarefa pode observar o desenho dentro da sua marcação. Abra uma revisão mais recente da folha e escolha {{ui:Verificar agora}}: se as linhas daquela área mudaram mais do que um fio de cabelo, a tarefa fica marcada como Concluída, a sua marcação passa a Concluída e uma nota na conversa diz o que mudou. Um novo carimbo de data, ou linhas que se moveram menos de 1,5 ponto, não contam. Em vez disso, a tarefa pode observar um elemento do modelo: o seu assistente informa o elemento com `tasks_check`, e um relatório posterior que seja diferente, ou um elemento excluído, fecha a tarefa. Um passo de desfazer a reabre.
- **Encontrar o trabalho.** Filtre a lista de {{ui:Tarefas}} por estado e por quem é o responsável, incluindo {{ui:Atrasados}}; escolha {{ui:Atribuída a}} e depois {{ui:Assistente}} para ver o que espera pelo seu assistente. Uma tarefa que passou do dia de vencimento aparece como aviso no painel Problemas. {{ui:CSV}} exporta a lista. As tarefas são salvas no PDF junto com a marcação e viajam pela Live como outras propriedades de marcação.

### O que mudou, em lista simples

- **Listar as alterações.** Abra a guia {{ui:Comparar}}, depois {{ui:Comparar um conjunto inteiro}}, escolha o arquivo anterior e o posterior e clique em {{ui:Listar as alterações}}. A lista começa com uma contagem e depois cobre cada folha alterada, da maior mudança para a menor: onde está na folha, qual o tamanho (em unidades reais e também em polegadas no papel, numa folha calibrada), se linhas foram acrescentadas ou removidas, quantas marcações há ali e quais palavras apareceram ou desapareceram. {{ui:Copiar a lista}} coloca a lista na área de transferência, e {{ui:CSV}} grava uma linha por alteração. Veja [Listar o que mudou entre revisões](topic:what-changed-in-words).

### Notas de voz e decisões

- **Notas de voz.** Na guia {{ui:Notas}}, escolha {{ui:Gravar uma nota de voz}} e depois {{ui:Parar gravação}}; as gravações param sozinhas após dois minutos. A nota é fixada no centro da folha, você a arrasta para onde ela deve ficar e digita uma legenda em {{ui:Propriedades}}, e {{ui:Reproduzir}} na lista toca a nota. A gravação é salva dentro do PDF.
- **Decisões.** {{ui:Fixar uma decisão}} escreve uma ou duas frases na folha. Se ela substitui uma decisão anterior, escolha essa em {{ui:Ela substitui}}: a antiga continua ali, marcada como Substituída, e aponta para a nova. Um passo de desfazer a remove. Veja [Fixar notas de voz e decisões em uma folha](topic:voice-notes-and-decisions).

### Redline para revisão

- **Enviar e responder.** Na guia {{ui:Tarefas}}, abra {{ui:Redline para revisão}}, digite a revisão em que as marcações se baseiam e escolha {{ui:Exportar arquivo redline}}. Você recebe um arquivo `.redline.json` com um item por marcação aberta: folha, posição (como frações da folha, para que uma nova plotagem em outro tamanho ainda fique alinhada), palavras, autor, conversa e a sua tarefa. Quem desenha as alterações responde Aceito, Rejeitado ou Concluído em um arquivo `.redline-answers.json`; {{ui:Carregar arquivo de respostas…}} atribui a cada marcação esse status e a nota do desenhista, como um único passo de desfazer. Veja [Enviar marcações ao desenhista como redline](topic:redline-to-revision).

### Assistentes de IA

- **Mais ferramentas.** Um assistente que você conectou pelo CadCraft Studio pode listar tarefas (`tasks_list`), criar ou alterar uma (`task_set`), tirar a tarefa (`task_clear`), verificar uma em relação a uma revisão mais nova ou a um elemento (`tasks_check`) e ler a lista simples de alterações entre dois conjuntos de plantas abertos (`revisions_changes`). Ele recebe apenas as ferramentas que você marcou em Assistentes, na chave de Assistentes, e cada alteração é um passo de desfazer. Veja [Usar a MarkupCraft com um assistente de IA](topic:use-with-ai-assistants).

## Em todos os aplicativos

- **Idiomas.** O CadCraft Studio agora tem 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e uzbeque. Todos os idiomas que não são o inglês são rascunhos de máquina até que um falante nativo os revise.
- **Dispositivos de entrada.** {{ui:Configurações}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fazem um trackpad, os botões laterais do seu mouse, uma caneta, toques com os dedos, um mouse 3D, um controle de jogo ou um controlador MIDI, para todos os aplicativos ou apenas para este. Até que você altere algo, cada dispositivo funciona como antes. Veja [Usar um trackpad, mouse 3D ou controle](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} tem {{ui:Quebrar}} (o padrão), {{ui:2 linhas}} e {{ui:1 linha}}, para que o desenho tenha mais espaço. Veja [Organizar os painéis](common:arrange-panels).
- **Grade de propriedades.** Os campos de Estilo de uma marcação usam a grade compartilhada, com categorias recolhíveis e colunas de rótulo e valor.
- **Painel Problemas.** Avisos do aplicativo, como uma tarefa atrasada, se reúnem em um só painel Problemas.
- **Live e complementos.** As sessões Live são descritas em [Trabalhar junto em Live](common:work-together-live); a lista de complementos que acompanha a sua conta está em [Complementos e a lista da sua conta](common:addons-basics).
- **Conecte a sua IA.** O CadCraft Studio é o centro do seu próprio assistente: conecte uma vez para todos os oito aplicativos. Os aplicativos não têm IA própria.

## Corrigido na 0.8.1

- **O Studio pode trocar de idioma enquanto está em execução.** Antes, o aplicativo de desktop e as edições empacotadas ficavam em inglês. Isso ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.
- Instalações do Studio 0.8 recebem a oferta da 0.8.1 por {{ui:Configurações}} › {{ui:Atualizações}}.

## Ainda não nesta versão

- **Sem assinatura de código.** Os instaladores do Windows e o .dmg do macOS ainda não têm assinatura. No Windows, se o SmartScreen impedir o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. No Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para a loja estão em espera.
- **Conectar a sua IA ainda está incompleto em alguns pontos.** A conexão com um clique dentro do Studio, o conector hospedado para assistentes de navegador e a sua própria chave de API dentro do Studio não estão garantidos nesta versão. O ciclo de tarefas foi testado, mas ainda não com um assistente real.
- **As verificações de tarefas exigem o mesmo tamanho de página.** Uma folha plotada em outro tamanho não vai coincidir, então as tarefas dela não se fecham. As folhas são pareadas pelo número da folha ou, na falta dele, pela posição na página.
- **As notas de voz são apenas gravações.** Não há transcrição, e um assistente vê a duração da nota, o autor e a legenda, não o som. A gravação foi testada com um microfone falso em um navegador sem interface; um microfone real em celular, tablet ou notebook ainda precisa ser verificado.
- **Planilhas de cálculo e motivos em um PDF** ficam guardados em uma entrada privada do arquivo. Uma MarkupCraft mais antiga ignora essa entrada e a descarta na próxima vez que salvar o arquivo, então abra e salve esse tipo de arquivo com a 0.8 ou posterior.
- **O lado do desenhista nos redlines.** O CadCraft ler o arquivo redline e respondê-lo ainda não está implementado.
- **Outros idiomas.** A barra de aplicativo em tâmil ultrapassa em 528 px.

Todo o resto está em [O que ainda não foi implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades na 0.7](topic:whats-new-0-7).
