---
title: A lista de anotações, filtros e exportações
summary: Veja todas as anotações do conjunto, filtre por folha, autor, estado e tipo, salte para uma delas e exporte a lista em CSV ou BCF.
keywords: lista de anotações, lista, resumo, xlsx, livro de cálculo, folha de cálculo, relatório PDF, importar BCF, filtrar, ordenar, relatório, exportar, csv, bcf, bcfzip, questões, lista de comentários, saltar
from: 6c70261e
---

## Abrir a lista

Escolha o separador {{ui:Anotações}}, à direita. Todas as anotações de todos os ficheiros abertos são listadas, por ordem de folha e depois pela ordem em que foram criadas. Cada linha mostra:

- um ícone na cor da anotação, o seu número de anomalia se tiver um («#4»), e o seu assunto,
- o seu texto, a palavra do carimbo ou o valor medido, e o seu comentário,
- a folha, o autor e a data,
- o seu estado (ou «Só de visualização» para comentários que vieram com o ficheiro), e uma contagem de respostas quando tem respostas.

A linha acima da lista conta-as: «38 anotações», ou «12 de 38 anotações» quando há filtros.

## Saltar para uma anotação

Clique numa linha. O MarkupCraft mostra essa folha, seleciona a anotação e aproxima-a quando está fora do ecrã ou pequena demais para se ver. {{ui:Propriedades}} tem os seus detalhes e a conversa quando volta a esse separador.

## Filtrar

Quatro menus acima da lista. Combinam-se entre si.

| Menu | Opções |
|---|---|
| {{ui:Folha}} | Todas as folhas, Esta folha (segue-o ao mudar de folha), ou qualquer folha que tenha anotações |
| {{ui:Autor}} | Qualquer pessoa, ou cada autor do conjunto |
| {{ui:Estado}} | Qualquer estado, Aberta, Aceite, Rejeitada, Concluída |
| {{ui:Tipo}} | Qualquer tipo, ou cada tipo de anotação do conjunto |

Exemplos:

- O que ainda está aberto nesta folha: {{ui:Folha}} «Esta folha», {{ui:Estado}} «Aberta».
- Os comentários de um consultor: {{ui:Autor}} o nome da pessoa.
- Todas as medições: {{ui:Tipo}} «Comprimento» ou «Área».

A lista mostra até 2000 linhas; restrinja-a com um filtro em conjuntos muito grandes.

## Exportar para CSV

Escolha {{ui:CSV}} no topo do separador. Obtém «<nome> anotações.csv» com **as anotações tal como estão filtradas**, uma por linha, com estas colunas:

N.º de anomalia, Folha, Ficheiro, Página, Tipo, Assunto, Texto, Comentário, Medição, Autor, Criada, Alterada, Estado, Respostas, Última resposta, Cor, Só de visualização.

- «Texto» guarda as palavras das caixas de texto e das chamadas, a palavra de um carimbo, ou o nome de um grupo de contagem.
- «Medição» guarda os comprimentos, «área, perímetro» para áreas, e «grupo: n» para contagens.
- As datas são carimbos completos em UTC.

Para exportar tudo, reponha primeiro cada filtro na primeira opção.

## Uma legenda na folha

{{ui:Legenda}}, no separador {{ui:Anotações}}, coloca uma legenda no canto superior direito do que vê: uma caixa que lista cada tipo de anotação da folha (pelo assunto e pela cor, como «Nuvem», «Pergunta» ou «Tomadas») com quantas há. Um grupo de contagem conta as suas marcas. A legenda continua a contar à medida que desenha, move ou elimina anotações, e imprime-se e guarda-se com as contagens desse momento.

Mova-a e redimensione-a como qualquer anotação. Nas suas {{ui:Propriedades}}, altere o {{ui:Título}}, ou defina {{ui:Contagens}} como {{ui:O conjunto inteiro}} para contar todas as folhas. Espaços, outras legendas e comentários de outros programas não são contados.

## As suas próprias colunas e ordenação

{{ui:Colunas}}, no separador {{ui:Anotações}}, acrescenta colunas suas a todas as anotações: um **texto**, uma **escolha** (como Especialidade: Mecânica, Elétrica, Canalização), um **número** (como Custo) ou uma **data**. Dê um nome a cada uma, escolha o tipo, indique as opções numa coluna de escolha, e escolha {{ui:Guardar colunas}}.

- Preencha-as em {{ui:Propriedades}}: cada coluna tem ali um campo. Uma coluna de número aceita apenas números; uma coluna de data, apenas uma data.
- A lista mostra os valores sob cada anotação, o filtro {{ui:Coluna}} escolhe um valor (ou as anotações onde está vazia), e {{ui:Ordenar}} ordena a lista por uma coluna, por autor, estado, tipo ou data, em vez de por folha.
- As exportações CSV e XLSX levam as colunas depois das habituais. As colunas ficam guardadas no PDF e voltam quando o reabre.

## Exportar um resumo: livro de cálculo ou PDF

- {{ui:XLSX}} transfere «<nome> resumo de anotações.xlsx», com três separadores: **Anotações** (uma linha por anotação listada, com as mesmas colunas do CSV), **Por folha** (quantas anotações tem cada folha, abertas e fechadas, e quantas de cada tipo, com totais) e **Lista de anomalias** (quando há itens de anomalia).
- {{ui:PDF}} transfere «<nome> resumo de anotações.pdf»: um relatório para imprimir ou enviar, com o nome do conjunto, a data e uma tabela das anotações listadas (número, folha, tipo, assunto, texto ou comentário, valor medido, autor, estado e a última resposta). O texto longo quebra de linha; o cabeçalho da tabela repete-se em cada página.

Ambos usam a lista tal como está filtrada; por isso, filtre primeiro para reportar uma só folha, um só autor ou apenas os itens abertos.

## Exportar para BCF

Escolha {{ui:BCF}}. O MarkupCraft faz uma captura de cada anotação listada na sua folha («A fazer capturas para BCF (3 de 12)…») e depois transfere «<nome> anotações.bcfzip». Cada anotação torna-se uma questão BCF, com o seu estado, autor, datas, respostas como comentários, responsável e data limite vindos do seu item de anomalia, e a captura.

Use esta exportação para trazer comentários de revisão de desenhos para as ferramentas de coordenação BIM que leem BCF. O que passa para lá e o que não passa está em [Noções básicas de BCF](topic:bcf-basics).

## Importar BCF

{{ui:Importar BCF}} lê um ficheiro .bcfzip (ou .bcf) de uma ferramenta BIM:

- As questões que vieram da exportação BCF do próprio MarkupCraft encontram de novo as suas anotações: as novas respostas são acrescentadas à conversa, e é definido um novo estado («Closed» conta como Concluída). As respostas que já existem não são acrescentadas outra vez.
- As outras questões tornam-se notas, com o título, a descrição, o autor e os comentários. Uma nota vai para a folha cujo número ou nome indicam as etiquetas da questão; senão, vai para a folha aberta. Uma câmara BIM não tem lugar no papel, por isso essas notas são empilhadas no canto superior esquerdo da folha para as mover.

A importação inteira é um único passo: {{key:Mod+Z}} desfaz tudo. Veja [Noções básicas de BCF](topic:bcf-basics).

## O que a lista ainda não faz

- Agrupar a lista (ordenar e depois filtrar, em vez disso).
- Editar valores na lista (edite em {{ui:Propriedades}}; os campos de anomalia são editáveis no separador {{ui:Lista de anomalias}}).
