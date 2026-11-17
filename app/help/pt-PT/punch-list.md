---
title: Criar uma lista de anomalias
summary: Transformar anotações em itens de anomalia numerados, com responsável, prazo e estado, e exportar a lista.
keywords: lista de anomalias, anomalia, pendência, não conformidade, problemas em obra, observação, atribuir, responsável, prazo, receção de obra, vistoria, número
from: b98b38e6
---

Um item de anomalia é uma anotação com um número, um responsável, um prazo e um estado do item. O número é desenhado na folha junto à anotação, para que a folha impressa e a lista coincidam.

## Adicionar itens

1. Anote cada problema nas folhas: uma nuvem, uma chamada, uma nota, o que for.
2. Selecione uma ou mais delas (consulte [Selecionar, mover e alterar anotações](topic:select-and-edit)).
3. Abra o separador {{ui:Lista de anomalias}} e escolha {{ui:Adicionar a seleção à lista de anomalias}}, ou escolha {{ui:Adicionar à lista de anomalias}} em {{ui:Propriedades}}.

Resultado: cada anotação recebe o número seguinte (1, 2, 3…), pela ordem das folhas e depois pela ordem em que foram desenhadas. Aparece um distintivo numerado na folha, e a barra de estado diz "3 itens adicionados à lista de anomalias." As anotações que já têm número, e os comentários só de leitura, são ignoradas.

## Preencher os detalhes

No separador {{ui:Lista de anomalias}}, cada item mostra o seu número, assunto, texto, folha e estado, com três campos por baixo. Os mesmos campos estão em {{ui:Propriedades}}, em "Lista de anomalias", quando a anotação está selecionada:

- {{ui:Responsável}}: um nome ou especialidade, como texto livre.
- {{ui:Prazo}}: uma data, escolhida no seletor de datas.
- {{ui:Estado do item}}: Aberto, Em curso, Pronto para revisão ou Fechado.

Clique no cabeçalho de um item para ir até ele na sua folha.

O estado do item é separado do estado de revisão da anotação (Aberta, Aceite, Recusada, Concluída). Use o estado do item para o trabalho e o estado de revisão para o comentário.

## Retirar um item

Selecione a anotação e escolha {{ui:Retirar da lista de anomalias}} em {{ui:Propriedades}}. A anotação mantém-se; só o número sai. Enquanto o conjunto estiver aberto, os números não são reutilizados: o item seguinte recebe o número seguinte, por isso um intervalo significa que um item foi retirado. Quando um ficheiro é aberto de novo, a numeração continua a partir do número mais alto nele.

## Exportar a lista

Escolha {{ui:Exportar CSV}} no separador {{ui:Lista de anomalias}}. Obtém "<name> punch list.csv" com as colunas No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author e Created, por ordem de número. Abra-o em qualquer folha de cálculo.

Os números de anomalia, responsáveis, prazos e estados dos itens também ficam guardados dentro do PDF anotado, por isso voltam quando o reabrir. Outros leitores de PDF mostram o distintivo numerado como parte da anotação. A exportação BCF da lista de anotações também leva o responsável e o prazo (consulte [Noções básicas de BCF](topic:bcf-basics)).

## Em obra com um tablet

Abra o conjunto num iPad, percorra a obra, e largue uma {{ui:Nota}} ou desenhe uma {{ui:Nuvem}} em cada problema. Acrescente-as à lista de anomalias à medida que avança, e guarde antes de sair. Consulte [Rever num iPad ou ecrã tátil](topic:review-on-a-tablet).

Um relatório da lista de anomalias em PDF ou folha de cálculo formatado, e fotografias anexadas aos itens, ainda não estão implementados.
