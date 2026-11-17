---
title: Limpar traços de caneta, e trazer comentários de revisão e andamento da obra
summary: Transforme traços de caneta à mão livre em linhas, círculos, arcos e retângulos; traga os comentários de revisão de um pacote de licenciamento e o andamento de levantamento de um canteiro como notas.
keywords: caneta, mão livre, limpar, endireitar, círculo, linha, retângulo, arco, licenciamento, comentários de revisão, andamento, drone, digitalização, levantamento, notas, csv
from: 547d8e42
---

## Limpar traços de caneta

Desenhe com {{ui:Caneta}}, depois abra o menu {{ui:Mais}} no grupo Editar e escolha {{ui:Limpar traços de caneta}}. Cada traço de caneta selecionado vira o que deveria ser: um traço reto vira uma linha (deixada exatamente na horizontal ou na vertical quando estava quase nelas), um traço redondo vira uma elipse, parte de um círculo vira um arco, um traço fechado com quatro cantos vira um retângulo, e qualquer outro vira uma polilinha ou um polígono. As pontas soltas de traços desenhados juntos são puxadas umas para as outras. Sem traço de caneta selecionado, todos os traços de caneta da folha aberta são limpos. É um único passo de desfazer: Ctrl+Z devolve o traço à mão livre. A forma é calculada no seu computador por regras fixas; nada é enviado a lugar nenhum.

## Trazer comentários de revisão

O pacote de licenciamento do BimCraft contém `01-review-comments.csv`: os comentários que um revisor de projeto provavelmente fará, cada um com a regra, a cláusula, o que é necessário, o que foi encontrado e o que fazer. Na guia {{ui:Tarefas}}, abra {{ui:Comentários da revisão de licenciamento}} e escolha {{ui:Trazer comentários (CSV)}}. Cada comentário vira uma nota Aberta em uma coluna à esquerda da folha aberta; arraste cada uma até o lugar a que se refere. Eles são calculados a partir das verificações existentes, não por um examinador de projetos.

## Trazer caixas de nó HAZOP

O complemento P&ID do CadCraft desenha os nós de um estudo HAZOP e pode salvá-los como {{ui:Caixas de nó HAZOP}} (um arquivo JSON). Abra aqui a folha P&ID impressa, vá à guia {{ui:Tarefas}}, abra {{ui:Caixas de nó HAZOP}} e escolha {{ui:Trazer caixas de nó (JSON)}}. Cada nó vira um retângulo Aberto na folha, com o seu número, nome, equipamento e linhas no texto, e a equipe escreve as suas conclusões como respostas nele. A folha é considerada impressa em tamanho real a partir do canto inferior esquerdo do desenho; se foi impressa em outra escala, digite esse número em {{ui:Impresso em}} antes (0.5 para 1:2). Um nó que cai fora da página não é desenhado, e o painel informa quantos foram. As marcações são um apoio ao estudo: mostram onde estão os nós, não avaliam o estudo.

## Trazer andamento da obra

O CivilCraft mantém uma linha para cada voo de drone ou digitalização do canteiro. Na guia {{ui:Tarefas}}, abra {{ui:Andamento da obra}} e escolha {{ui:Trazer andamento (JSON)}}. Cada levantamento vira uma nota na folha aberta dizendo quanto está pronto, o que resta para escavar ou aterrar, o que foi escavado ou aterrado em excesso e o que está fora do plano. Um levantamento com algo fora do plano fica Aberto; um limpo fica Aceito.
