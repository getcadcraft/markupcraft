---
title: Limpar os traços de caneta e trazer comentários de revisão e progresso da obra
summary: Transforme traços de caneta à mão livre em linhas, círculos, arcos e retângulos; traga os comentários de revisão de um pacote de licenciamento e o progresso de levantamento de uma obra como notas.
keywords: caneta, mão livre, limpar, endireitar, círculo, linha, retângulo, arco, licenciamento, comentários de revisão, progresso, drone, digitalização, levantamento, notas, csv
from: 547d8e42
---

## Limpar traços de caneta

Desenhe com {{ui:Caneta}}, depois abra o menu {{ui:Mais}} no grupo Editar e escolha {{ui:Limpar os traços de caneta}}. Cada traço de caneta selecionado transforma-se no que devia ser: um traço reto passa a linha (ficando exatamente na horizontal ou na vertical quando estava quase), um redondo passa a elipse, parte de um círculo passa a arco, um fechado de quatro cantos passa a retângulo, e qualquer outro passa a polilinha ou polígono. As pontas soltas de traços desenhados juntos são puxadas umas para as outras. Sem traço de caneta selecionado, são limpos todos os traços de caneta da folha aberta. É um só passo de anulação: Ctrl+Z repõe o traço à mão livre. A forma é calculada no seu computador, por regras fixas; nada é enviado para lado nenhum.

## Trazer comentários de revisão

O pacote de licenciamento do BimCraft contém `01-review-comments.csv`: os comentários que um técnico de revisão de projetos provavelmente fará, cada um com a regra, a cláusula, o que é necessário, o que foi encontrado e o que fazer. No separador {{ui:Tarefas}}, abra {{ui:Comentários da revisão de licenciamento}} e escolha {{ui:Trazer comentários (CSV)}}. Cada comentário passa a ser uma nota com o estado Aberto, numa coluna ao longo do lado esquerdo da folha aberta; arraste cada uma para o local a que diz respeito. São calculados a partir das verificações existentes, e não por um analista de projetos.

## Trazer caixas de nós HAZOP

O suplemento de P&ID do CadCraft desenha os nós de um estudo HAZOP e pode guardá-los como {{ui:Caixas de nós HAZOP}} (um ficheiro JSON). Abra aqui a folha P&ID impressa, vá ao separador {{ui:Tarefas}}, abra {{ui:Caixas de nós HAZOP}} e escolha {{ui:Importar caixas de nós (JSON)}}. Cada nó passa a ser um retângulo com o estado Aberto na folha, com o seu número, nome, equipamento e linhas no texto, e a equipa escreve as suas conclusões como respostas nele. A folha é considerada impressa à escala real a partir do canto inferior esquerdo do desenho; se foi impressa noutra escala, escreva primeiro esse número em {{ui:Impresso a}} (0.5 para 1:2). Um nó que caia fora da página não é desenhado, e o painel indica quantos. Os marcadores são um apoio ao estudo: mostram onde estão os nós, não avaliam o estudo.

## Trazer o progresso da obra

O CivilCraft guarda uma linha por cada voo de drone ou digitalização da obra. No separador {{ui:Tarefas}}, abra {{ui:Progresso da obra}} e escolha {{ui:Trazer o progresso (JSON)}}. Cada levantamento passa a ser uma nota na folha aberta, que indica quanto está feito, o que falta escavar ou aterrar, o que foi escavado ou aterrado em excesso e o que fica fora do plano. Um levantamento com algo fora do plano fica com o estado Aberto; um sem problemas fica com o estado Aceite.
