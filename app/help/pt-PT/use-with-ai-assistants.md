---
title: Utilizar o MarkupCraft com um assistente de IA
summary: Deixe o seu próprio assistente de IA ou script listar as anotações de um conjunto, acrescentar anotações simples, definir o estado, responder e exportar a lista: permissões, ligação através do CadCraft Studio e o registo de atividade.
keywords: ia, assistente, agente, mcp, protocolo de contexto de modelo, script, automatização, anotações, revisão, permissões, desligar, atividade
from: 095f2977
---

## O que vai aprender

Como deixar um assistente de IA (ou um script que escreveu) trabalhar com o MarkupCraft, e como decidir o que ele pode tocar.

O MarkupCraft **não tem IA própria** e não envia nada para lado nenhum. Você traz o assistente: qualquer programa que fale o Model Context Protocol (MCP), ou seja, o Protocolo de Contexto do Modelo. O MarkupCraft apenas lhe disponibiliza ferramentas, e você escolhe quais.

## Ativar

1. Abra {{ui:Definições}} (a roda dentada na barra da aplicação, ou {{key:Mod+,}}) e vá ao separador {{ui:MarkupCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o MarkupCraft**. Está desligado até o fazer.
3. Escolha o que pode fazer: **Ler** vem marcado de início; marque **Editar**, **Guardar** ou **Exportar** apenas quando precisar.

As ferramentas fora das permissões que marcou não são oferecidas ao assistente, e se ele pedir uma mesmo assim, o MarkupCraft recusa e regista-o no registo de atividade. Desligar o interruptor termina todas as ligações de uma vez; {{ui:Repor as definições do MarkupCraft}} também o desliga.

## Ligar o seu assistente

Os assistentes ligam-se através do **CadCraft Studio** no seu computador: o Studio executa um pequeno servidor que só este computador consegue alcançar, protegido por um token que cria cada vez que arranca. No Studio, escolha {{ui:Ligar um assistente}} e copie o endereço e o token para o seu assistente (o Studio mostra as definições exatas a colar). Nunca partilhe o token.

:::note
Um separador do navegador não pode abrir uma ligação para um assistente: nas aplicações do navegador, o interruptor não tem efeito até usar o CadCraft Studio no seu computador.
:::

## Continua a mandar

- **Cada alteração é um passo de anular**, identificado com o nome do assistente para essa ação (por exemplo "Assistente: acrescentar nuvem retangular"). {{key:Mod+Z}} anula a última alteração do assistente por completo.
- **Sabe quando há um ligado.** Um botão na barra da aplicação indica o assistente enquanto estiver ligado; clique nele para ver o que pode fazer, ou para o **desligar**.
- **Atividade.** {{ui:Definições}} › {{ui:MarkupCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, que ferramenta, concluída ou recusada. {{ui:Guardar o registo}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `sheets_list` | Ler | Os conjuntos abertos, as respetivas folhas e quantas anotações tem cada uma |
| `markups_list` | Ler | As anotações com tipo, folha, texto, comentário, medição, estado, autor e respostas, filtradas por folha, estado, tipo ou autor |
| `markup_add` | Editar | Acrescenta um retângulo, nuvem, elipse, caixa de texto, nota, linha ou seta a uma folha |
| `markup_status`, `markup_reply` | Editar | Define o estado de uma anotação (registado na conversa, assinado pelo assistente); acrescenta um comentário a uma conversa |
| `markups_export` | Exportar | O CSV ou BCF da própria lista de {{ui:Anotações}}, com o que a lista mostra (os filtros tal como os definiu); no Studio pode escrever o ficheiro numa pasta que tenha permitido |
| `tasks_list` | Ler | As anotações que são tarefas: responsável (pessoa ou assistente), dia limite, estado, ligação, como foram fechadas. `assignee: "assistant"` lista o trabalho à espera de um assistente |
| `task_set`, `task_clear` | Editar | Transforma uma anotação numa tarefa ou altera-a (título, responsável, prazo, estado, ligação); retira a tarefa |
| `tasks_check` | Editar | Fecha tarefas cuja área do desenho ligada ou elemento do modelo realmente mudou; passa os estados dos elementos que leu da outra aplicação |
| `revisions_changes` | Ler | A lista simples do que mudou entre dois conjuntos de plantas abertos, para reformular com as suas palavras |
| `pins_list`, `decision_add` | Ler, Editar | Notas de voz (duração, autor, data, legenda; nunca o som, nem transcrição) e decisões; afixar uma decisão e substituir uma anterior |
| `redline_export`, `redline_answer` | Exportar, Editar | Escrever o ficheiro de redline para o desenhador; aplicar as respostas do desenhador |

Uma anotação que um assistente acrescenta indica o nome dele como autor: o nome que o programa do assistente se dá, seguido de "(assistente)", ou de "(assistente de <o seu nome>)" depois de definir o seu nome de revisor. As alterações de estado e as respostas dele são assinadas da mesma forma. Cada uma é um passo de anular. Guardar o PDF anotado continua a cargo de si: use {{ui:Guardar}} como habitualmente.

Sem abrir o MarkupCraft, o servidor MCP do CadCraft lista as anotações de um PDF numa pasta que indicar (`markups_list`), e `cadcraft info Set.pdf` imprime-as na linha de comandos.

## Se algo não funcionar

- **O assistente não vê ferramentas do MarkupCraft:** verifique se o interruptor está ligado nesta janela e se a janela está aberta no Studio.
- **"precisa da permissão de edição":** marque **Editar** em {{ui:Assistentes}} e peça de novo.
- **Erros "401" ou "token":** o token mudou (o Studio foi reiniciado, ou {{ui:Novo token}}). Copie o novo para as definições do assistente.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
