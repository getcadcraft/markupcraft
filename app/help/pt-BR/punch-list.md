---
title: Criar uma lista de pendências
summary: Transforme marcações em itens numerados de pendência, com responsável, prazo e status, e exporte a lista.
keywords: lista de pendências, pendência, lista de defeitos, deficiência, problemas de campo, observação, atribuir, responsável, prazo, encerramento, vistoria, numerar
from: b98b38e6
---

Um item de pendência é uma marcação com número, responsável, prazo e status do item. O número é desenhado na folha ao lado da marcação, então a folha impressa e a lista coincidem.

## Adicionar itens

1. Marque cada problema nas folhas: uma nuvem, uma chamada, uma nota, qualquer coisa.
2. Selecione uma ou mais delas (veja [Selecionar, mover e alterar marcações](topic:select-and-edit)).
3. Ou abra a guia {{ui:Lista de pendências}} e escolha {{ui:Adicionar a seleção à lista de pendências}}, ou escolha {{ui:Adicionar à lista de pendências}} em {{ui:Propriedades}}.

Resultado: cada marcação recebe o próximo número (1, 2, 3…), na ordem das folhas e depois na ordem em que foram desenhadas. Um selo numerado aparece na folha, e a barra de status diz "3 itens adicionados à lista de pendências." Marcações que já têm número, e comentários somente leitura, são ignorados.

## Preencher os detalhes

Na guia {{ui:Lista de pendências}}, cada item mostra seu número, assunto, texto, folha e status, com três campos embaixo. Os mesmos campos estão em {{ui:Propriedades}}, em "Lista de pendências", quando a marcação está selecionada:

- {{ui:Responsável}}: um nome ou uma especialidade, como texto livre.
- {{ui:Prazo}}: uma data, do seletor de data.
- {{ui:Status do item}}: Aberto, Em andamento, Pronto para revisão ou Fechado.

Clique no título de um item para ir até ele na folha.

O status do item é separado do status de revisão da marcação (Aberto, Aceito, Rejeitado, Concluído). Use o status do item para o trabalho, e o status de revisão para o comentário.

## Retirar um item

Selecione a marcação e escolha {{ui:Retirar da lista de pendências}} em {{ui:Propriedades}}. A marcação continua; só o número sai. Enquanto o conjunto estiver aberto, os números não são reaproveitados: o próximo item ainda recebe o próximo número novo, então uma lacuna significa que um item foi retirado. Quando um arquivo é aberto de novo, a numeração continua a partir do maior número nele.

## Exportar a lista

Escolha {{ui:Exportar CSV}} na guia {{ui:Lista de pendências}}. Você recebe "<name> punch list.csv" com as colunas No., Folha, Arquivo, Página, Item, Comentário, Responsável, Prazo, Status, Status da marcação, Autor e Criado, em ordem de número. Abra-o em qualquer planilha.

Os números de pendência, responsáveis, prazos e status dos itens também são salvos dentro do PDF com as marcações, então voltam quando você o reabre. Outros visualizadores de PDF mostram o selo numerado como parte da marcação. A exportação BCF da lista de marcações também leva o responsável e o prazo (veja [Noções básicas de BCF](topic:bcf-basics)).

## Em campo com um tablet

Abra o conjunto em um iPad, percorra a obra e posicione uma {{ui:Nota}} ou desenhe uma {{ui:Nuvem}} em cada problema. Adicione-os à lista de pendências conforme avança, e salve antes de sair. Veja [Revisar em um iPad ou tela sensível ao toque](topic:review-on-a-tablet).

Relatórios da lista de pendências em PDF ou planilha formatados, e fotos anexadas aos itens, ainda não estão implementados.
