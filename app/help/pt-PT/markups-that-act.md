---
title: Tornar uma anotação numa tarefa
summary: Dê a uma anotação um responsável (uma pessoa ou o seu assistente), um dia limite e uma ligação ao desenho ou ao elemento do modelo a que diz respeito, e veja-a fechar quando isso realmente muda.
keywords: tarefa, tarefas, responsável, assistente, prazo, em atraso, ligação, fecha, alterado, elemento, área do desenho, anotações que atuam, MCP
from: 9e970202
---

Uma tarefa é uma anotação que tem de ser feita por alguém. Mantém o seu lugar na folha e a sua conversa, e acrescenta um título, um responsável, um dia limite, um estado e, se quiser, uma ligação à coisa a que diz respeito.

## Criar uma tarefa

1. Selecione uma ou mais anotações.
2. Abra o separador {{ui:Tarefas}} e escolha {{ui:Fazer da seleção uma tarefa}}.
3. Preencha o título (que parte do texto da anotação), para quem é ({{ui:Pessoa}} ou {{ui:Assistente}}, e um nome), um dia limite opcional, e o que vigiar.

Uma tarefa de assistente é trabalho para o assistente que ligou ao MarkupCraft (veja [Usar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants)). O MarkupCraft não tem assistente próprio: apenas lista o trabalho e recebe as respostas do assistente. Escolher {{ui:Atribuída a}} e depois {{ui:Assistente}} na lista mostra o que está à espera dele.

## Vigiar uma alteração

- **O desenho dentro da anotação.** O MarkupCraft guarda as linhas dentro da caixa da anotação tal como estão agora. Quando abre uma revisão mais recente dessa folha (um segundo ficheiro com o mesmo número de folha, ou a mesma posição na página), escolha {{ui:Verificar agora}}: se as linhas dessa área diferirem por mais do que um cabelo, a tarefa é fechada.
- **Um elemento do modelo.** Indique a aplicação e o id do elemento. O seu assistente lê o elemento com as ferramentas próprias da outra aplicação e comunica-o com `tasks_check`. O primeiro relatório fica guardado como estado inicial; um relatório posterior que seja diferente fecha a tarefa. Um elemento que foi eliminado também a fecha.
- **Nada.** Uma tarefa simples que termina à mão.

Uma tarefa fechada fica com o estado Concluído, a sua anotação passa a Concluída, e uma nota na conversa diz o que mudou. Um passo de anulação reabre-a.

**Limite:** a verificação parte do princípio de que a revisão mais recente usa a mesma origem e o mesmo tamanho de página. Uma folha reimpressa noutro tamanho não coincidirá, por isso as suas tarefas não fecham. As folhas são emparelhadas pelo número da folha, senão pela posição na página; o MarkupCraft não ajusta uma revisão à escala da outra.

Voltar a imprimir o mesmo desenho com uma nova data de carimbo, ou linhas que se moveram menos de 1.5 pontos, não conta como alteração. Se nenhuma revisão mais recente estiver aberta, a tarefa continua aberta, e a barra de estado di-lo.

## A lista

A lista de {{ui:Tarefas}} pode ser filtrada por estado e por quem é o destinatário, incluindo {{ui:Em atraso}}. Uma tarefa passada do seu dia limite aparece no painel de Problemas como aviso. {{ui:CSV}} exporta a lista.

As tarefas são guardadas no PDF com a anotação, e circulam pelo Live como as outras propriedades de anotação.
