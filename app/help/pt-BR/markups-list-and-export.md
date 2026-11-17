---
title: A lista de marcações, filtros e exportações
summary: Veja cada marcação do conjunto, filtre por folha, autor, status e tipo, vá até uma delas e exporte a lista como CSV ou BCF.
keywords: lista de marcações, lista, resumo, xlsx, planilha, pasta de trabalho, relatório pdf, importar bcf, filtro, ordenar, relatório, exportar, csv, planilha, bcf, bcfzip, problemas, lista de comentários, ir até
from: 6c70261e
---

## Abrir a lista

Escolha a aba {{ui:Marcações}} à direita. Toda marcação de todos os arquivos abertos é listada, na ordem das folhas e depois na ordem em que foram feitas. Cada linha mostra:

- um ícone na cor da marcação, o número de pendência dela, se tiver um ("#4"), e o assunto,
- o texto, a palavra do carimbo ou o valor medido, e o comentário,
- a folha, o autor e a data,
- o status (ou "Somente leitura" para comentários que vieram com o arquivo), e uma contagem de respostas quando houver respostas.

A linha acima da lista conta todas elas: "38 marcações", ou "12 de 38 marcações" quando há filtro.

## Ir até uma marcação

Clique em uma linha. O MarkupCraft mostra essa folha, seleciona a marcação e dá zoom nela quando ela está fora da tela ou pequena demais para ver. {{ui:Propriedades}} tem os detalhes e a conversa quando você volta para essa aba.

## Filtrar

Quatro menus acima da lista. Eles se combinam.

| Menu | Opções |
|---|---|
| {{ui:Folha}} | Todas as folhas, Esta folha (acompanha você ao mudar de folha), ou qualquer folha que tenha marcações |
| {{ui:Autor}} | Qualquer um, ou cada autor do conjunto |
| {{ui:Status}} | Qualquer status, Aberto, Aceito, Rejeitado, Concluído |
| {{ui:Tipo}} | Qualquer tipo, ou cada tipo de marcação do conjunto |

Exemplos:

- O que ainda está aberto nesta folha: {{ui:Folha}} "Esta folha", {{ui:Status}} "Aberto".
- Os comentários de um consultor: {{ui:Autor}} com o nome dele.
- Todas as medições: {{ui:Tipo}} "Comprimento" ou "Área".

A lista mostra até 2000 linhas; em conjuntos muito grandes, restrinja-a com um filtro.

## Exportar para CSV

Escolha {{ui:CSV}} no topo da aba. Você recebe "<name> markups.csv" com **as marcações como estão filtradas agora**, uma por linha, com estas colunas:

Nº da pendência, Folha, Arquivo, Página, Tipo, Assunto, Texto, Comentário, Medição, Autor, Criada, Modificada, Status, Respostas, Última resposta, Cor, Somente leitura.

- "Texto" guarda as palavras de caixas de texto e chamadas, a palavra de um carimbo ou o nome de um grupo de contagem.
- "Medição" guarda comprimentos, "área, perímetro" para áreas e "grupo: n" para contagens.
- As datas são data e hora completas em UTC.

Para exportar tudo, primeiro volte todos os filtros para a primeira opção.

## Uma legenda na folha

{{ui:Legenda}} na aba {{ui:Marcações}} coloca uma legenda no canto superior direito do que você vê: uma caixa que lista cada tipo de marcação da folha (pelo assunto e pela cor, como "Nuvem", "Pergunta" ou "Tomadas") com quantas há. Um grupo de contagem conta as suas marcas. A legenda continua contando enquanto você desenha, move ou apaga marcações, e é impressa e salva com as contagens do momento.

Mova e redimensione-a como qualquer marcação. Nas suas {{ui:Propriedades}}, altere o {{ui:Título}}, ou defina {{ui:Contagens}} como {{ui:O conjunto inteiro}} para contar todas as folhas. Espaços, outras legendas e comentários de outros programas não são contados.

## Suas próprias colunas e ordenação

{{ui:Colunas}} na aba {{ui:Marcações}} adiciona colunas próprias a cada marcação: um **texto**, uma **escolha** (como Especialidade: Mecânica, Elétrica, Hidráulica), um **número** (como Custo) ou uma **data**. Dê um nome a cada uma, escolha o tipo, liste as opções de uma coluna de escolha e escolha {{ui:Salvar colunas}}.

- Preencha-as em {{ui:Propriedades}}: cada coluna tem um campo ali. Uma coluna de número aceita apenas números, e uma coluna de data aceita apenas datas.
- A lista mostra os valores sob cada marcação, o filtro {{ui:Coluna}} escolhe um valor (ou as marcações em que ele está vazio), e {{ui:Ordenar}} ordena a lista por uma coluna, por autor, status, tipo ou data, em vez de por folha.
- As exportações CSV e XLSX trazem as colunas depois das usuais. As colunas são salvas com o PDF e voltam quando você o reabre.

## Exportar um resumo: planilha ou PDF

- {{ui:XLSX}} baixa "<name> markup summary.xlsx" com três abas: **Marcações** (uma linha por marcação listada, com as mesmas colunas do CSV), **Por folha** (quantas marcações cada folha tem, abertas e fechadas, e quantas de cada tipo, com totais) e **Lista de pendências** (quando há itens de pendência).
- {{ui:PDF}} baixa "<name> markup summary.pdf": um relatório para imprimir ou enviar, com o nome do conjunto, a data e uma tabela das marcações listadas (número, folha, tipo, assunto, texto ou comentário, valor medido, autor, status e a última resposta). Textos longos quebram linha; o cabeçalho da tabela se repete em cada página.

Os dois usam a lista como ela está filtrada, então filtre primeiro para relatar uma folha, um autor ou apenas os itens abertos.

## Exportar para BCF

Escolha {{ui:BCF}}. O MarkupCraft faz uma captura de cada marcação listada na sua folha ("Criando capturas para BCF (3 de 12)…") e depois baixa "<name> markups.bcfzip". Cada marcação vira um tópico BCF com o status, o autor, as datas, as respostas como comentários, o responsável e a data de vencimento do seu item de pendência, e a captura.

Use isso para levar comentários de revisão de desenhos para ferramentas de coordenação BIM que leem BCF. O que é transferido e o que não é está em [Noções básicas de BCF](topic:bcf-basics).

## Importar BCF

{{ui:Importar BCF}} lê um arquivo .bcfzip (ou .bcf) de uma ferramenta BIM:

- Problemas que vieram da exportação BCF do próprio MarkupCraft encontram as marcações de volta: novas respostas são adicionadas à conversa, e um novo status é definido (Closed conta como Concluído). Respostas que já estão lá não são adicionadas duas vezes.
- Outros problemas viram notas, com título, descrição, autor e comentários. Uma nota vai na folha cujo número ou nome os rótulos do problema indicam; caso contrário, na folha aberta. Uma câmera BIM não tem lugar no papel, por isso essas notas ficam empilhadas no canto superior esquerdo da folha para você mover.

A importação inteira é uma única etapa: {{key:Mod+Z}} a desfaz. Veja [Noções básicas de BCF](topic:bcf-basics).

## O que a lista ainda não faz

- Agrupar a lista (ordene e depois filtre, no lugar).
- Editar valores na lista (edite em {{ui:Propriedades}}; os campos de pendência são editáveis na aba {{ui:Lista de pendências}}).
