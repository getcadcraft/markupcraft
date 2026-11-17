---
title: Usar o MarkupCraft com um assistente de IA
summary: Deixe o seu próprio assistente de IA ou script listar as marcações de um conjunto, adicionar marcações simples, definir o status, responder e exportar a lista: permissões, conexão pelo CadCraft Studio e o registro de atividades.
keywords: ia, assistente, agente, mcp, model context protocol, script, automação, marcações, revisão, permissões, desconectar, atividade
from: 095f2977
---

## O que você vai aprender

Como deixar um assistente de IA (ou um script que você escreveu) trabalhar com o MarkupCraft, e como decidir o que ele pode alterar.

O MarkupCraft **não tem IA própria** e não envia nada a lugar nenhum. Você traz o assistente: qualquer programa que fale o Model Context Protocol (MCP). O MarkupCraft apenas oferece ferramentas, e você escolhe quais.

## Ativar

1. Abra {{ui:Configurações}} (a engrenagem na barra do aplicativo, ou {{key:Mod+,}}) e vá para a aba {{ui:MarkupCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o MarkupCraft**. Ela fica desligada até você fazer isso.
3. Escolha o que ele pode fazer: **Ler** já vem marcado; marque **Editar**, **Salvar** ou **Exportar** só quando precisar.

Ferramentas fora das permissões marcadas não são oferecidas ao assistente, e, se ele pedir uma mesmo assim, o MarkupCraft recusa e registra isso no registro de atividades. Desligar a chave encerra todas as conexões de uma vez; {{ui:Redefinir configurações do MarkupCraft}} também a desliga.

## Conectar o seu assistente

Os assistentes se conectam pelo **CadCraft Studio** no seu computador: o Studio executa um pequeno servidor que só este computador consegue alcançar, protegido por um token que ele gera toda vez que inicia. No Studio, escolha {{ui:Conectar um assistente}} e copie o endereço e o token para o seu assistente (o Studio mostra as configurações exatas a colar). Nunca compartilhe o token.

:::note
Uma aba do navegador não pode abrir uma conexão para um assistente: nos aplicativos de navegador, a chave não tem efeito até você usar o CadCraft Studio no seu computador.
:::

## Você continua no comando

- **Cada alteração é uma etapa de desfazer**, rotulada com o nome que o assistente lhe dá (por exemplo, "Assistente: add cloudrect"). {{key:Mod+Z}} desfaz a última alteração do assistente como um todo.
- **Você sabe quando um está conectado.** Um botão na barra do aplicativo mostra o nome do assistente enquanto ele está conectado; clique nele para ver o que ele pode fazer, ou para **Desconectar** o assistente.
- **Atividade.** {{ui:Configurações}} › {{ui:MarkupCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, qual ferramenta, e se foi concluída ou recusada. {{ui:Salvar o registro}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `sheets_list` | Ler | Os conjuntos abertos, as suas folhas e quantas marcações cada uma tem |
| `markups_list` | Ler | As marcações com tipo, folha, texto, comentário, medida, status, autor e respostas, filtradas por folha, status, tipo ou autor |
| `markup_add` | Editar | Adiciona um retângulo, nuvem, elipse, caixa de texto, nota, linha ou seta a uma folha |
| `markup_status`, `markup_reply` | Editar | Define o status de uma marcação (registrado na conversa, assinado pelo assistente); adiciona um comentário a uma conversa |
| `markups_export` | Exportar | O CSV ou BCF da própria lista de {{ui:Marcações}}, com o que a lista mostra (com os filtros como você os definiu); no Studio, ele pode salvar o arquivo em uma pasta que você permitiu |
| `tasks_list` | Ler | As marcações que são tarefas: responsável (pessoa ou assistente), dia de entrega, estado, link e como foram encerradas. `assignee: "assistant"` lista o trabalho que aguarda um assistente |
| `task_set`, `task_clear` | Editar | Transformam uma marcação em tarefa ou a alteram (título, responsável, entrega, estado, link); removem a tarefa |
| `tasks_check` | Editar | Encerra tarefas cuja área do desenho vinculada ou elemento do modelo realmente mudou; passe os estados dos elementos lidos do outro aplicativo |
| `revisions_changes` | Ler | A lista simples do que mudou entre dois conjuntos de planos abertos, para você colocar com as suas palavras |
| `pins_list`, `decision_add` | Ler, Editar | Notas de voz (duração, quem, quando, legenda; nunca o som, sem transcrição) e decisões; fixe uma decisão e substitua uma anterior |
| `redline_export`, `redline_answer` | Exportar, Editar | Salva o arquivo de redline para o desenhista; aplica as respostas do desenhista |

Uma marcação que um assistente adiciona o registra como autor: o nome que o programa do assistente dá a si mesmo, seguido de "(assistente)", ou de "(assistente para <seu nome>)" depois que você definir o seu nome de revisor. As alterações de status e as respostas dele são assinadas do mesmo modo. Cada uma é uma etapa de desfazer. Salvar o PDF com marcações continua com você: use {{ui:Salvar}} como de costume.

Sem abrir o MarkupCraft, o servidor MCP do CadCraft lista as marcações de um PDF em uma pasta que você indicar (`markups_list`), e `cadcraft info Set.pdf` as imprime na linha de comando.

## Se algo não funcionar

- **O assistente não vê as ferramentas do MarkupCraft:** verifique se a chave está ligada nesta janela, e se a janela está aberta no Studio.
- **"precisa da permissão de edição":** marque **Editar** em {{ui:Assistentes}} e peça de novo.
- **Erros "401" ou "token":** o token mudou (o Studio reiniciou, ou você usou {{ui:Novo token}}). Copie o novo token para as configurações do assistente.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
