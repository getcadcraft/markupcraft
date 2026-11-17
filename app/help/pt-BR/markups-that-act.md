---
title: Transformar uma marcação em tarefa
summary: Dê a uma marcação um responsável (uma pessoa ou o seu assistente), um prazo e um link para o desenho ou elemento do modelo a que ela se refere, e veja-a fechar quando isso realmente mudar.
keywords: tarefa, tarefas, responsável, assistente, prazo, vencimento, atrasada, link, fecha, mudança, elemento, área do desenho, marcações que agem, MCP
from: 9e970202
---

Uma tarefa é uma marcação que alguém precisa cumprir. Ela mantém o seu lugar na folha e a sua conversa, e acrescenta um título, um responsável, um prazo, um estado e, se quiser, um link para a coisa a que se refere.

## Criar uma tarefa

1. Selecione uma ou mais marcações.
2. Abra a aba {{ui:Tarefas}} e escolha {{ui:Transformar selecionada em tarefa}}.
3. Preencha o título (ele começa com o texto da marcação), para quem ela é ({{ui:Pessoa}} ou {{ui:Assistente}}, e um nome), um prazo opcional e o que observar.

Uma tarefa de assistente é um trabalho para o assistente que você conectou ao MarkupCraft (veja [Usar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants)). O MarkupCraft não tem assistente próprio: ele apenas lista o trabalho e recebe as respostas do assistente. Escolher {{ui:Atribuída a}} e depois {{ui:Assistente}} na lista mostra o que está esperando por ele.

## Observar uma mudança

- **O desenho dentro da marcação.** O MarkupCraft mantém as linhas dentro da caixa da marcação como estão agora. Quando você abre uma revisão mais nova dessa folha (um segundo arquivo com o mesmo número de folha, ou a mesma posição na página), escolha {{ui:Verificar agora}}: se as linhas dessa área diferirem por mais que um fio de cabelo, a tarefa é fechada.
- **Um elemento do modelo.** Informe o aplicativo e o id do elemento. Seu assistente lê o elemento com as ferramentas do outro aplicativo e informa com `tasks_check`. O primeiro relatório é guardado como estado inicial; um relatório posterior que seja diferente fecha a tarefa. Um elemento que foi apagado também a fecha.
- **Nada.** Uma tarefa simples que você conclui à mão.

Uma tarefa fechada é marcada como Concluída, a sua marcação vira Concluído, e uma nota na conversa diz o que mudou. Uma etapa de desfazer a reabre.

**Limite:** a verificação supõe que a revisão mais nova usa a mesma origem e o mesmo tamanho de página. Uma folha replotada em outro tamanho não vai coincidir, então as suas tarefas não fecham. As folhas são pareadas pelo número da folha; se não houver, pela posição na página. O MarkupCraft não redimensiona uma revisão para caber na outra.

Replotar o mesmo desenho com um novo carimbo de data, ou linhas que se moveram menos de 1.5 pontos, não conta como mudança. Se nenhuma revisão mais nova estiver aberta, a tarefa continua aberta e a barra de status diz isso.

## A lista

A lista de {{ui:Tarefas}} pode ser filtrada por estado e por quem ela é destinada, incluindo {{ui:Atrasados}}. Uma tarefa que passou do prazo aparece no painel de Problemas como um aviso. {{ui:CSV}} exporta a lista.

As tarefas são salvas no PDF com a marcação, e viajam pelo Live como as outras propriedades de marcação.
