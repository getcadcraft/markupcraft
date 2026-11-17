---
title: Camadas de anotações
summary: Coloque as anotações em camadas com nome e depois mostre, oculte ou bloqueie cada camada; outros visualizadores de PDF também as podem alternar.
keywords: camadas, camada, ocultar, mostrar, bloquear, agrupar anotações, disciplina, mecânica, elétrica, conteúdo opcional, ocg, visibilidade
from: 0fbb4c26
---

As camadas agrupam anotações, por exemplo por disciplina ou por revisor. Oculte uma camada para ver o desenho por baixo, ou bloqueie-a para que as suas anotações não sejam movidas por acidente.

## Criar uma camada e desenhar nela

1. Abra {{ui:Camadas}}, no topo do painel {{ui:Folhas}}.
2. Escolha {{ui:Nova camada}}, escreva um nome como `Mechanical` e escolha {{ui:Adicionar camada}}.
3. A nova camada passa a ser a camada atual: todas as anotações que desenhar a partir de agora ficam nela. Escolha o nome de outra camada, ou {{ui:Sem camada}}, para mudar onde ficam as novas anotações.

Para mover uma anotação para outra camada, selecione-a e escolha a camada em {{ui:Camada}}, em {{ui:Propriedades}}. {{ui:Nova camada…}}, no fim dessa lista, cria uma no momento. Mover pode ser anulado com {{key:Mod+Z}}.

## Mostrar, ocultar e bloquear

Cada linha de camada tem dois botões:

- O **olho** mostra ou oculta a camada. As anotações ocultas não são desenhadas nem podem ser selecionadas; continuam a contar na lista de {{ui:Anotações}}.
- O **cadeado** mantém as anotações da camada na folha, mas impede que sejam selecionadas, movidas ou eliminadas.

O botão do lápis muda o nome de uma camada, e as suas anotações acompanham-na. Filtre a lista de {{ui:Anotações}} por {{ui:Camada}} para ver as anotações de uma só camada.

## No PDF guardado

Cada camada torna-se uma camada do PDF (conteúdo opcional). Outros visualizadores de PDF listam as camadas no respetivo painel de camadas e podem alterná-las; uma camada que ocultou também começa oculta aí. As camadas que o desenho já tinha, como as camadas de CAD, mantêm-se como estavam. Quando reabrir a cópia no MarkupCraft, as anotações voltam nas suas camadas, ocultas e bloqueadas como as deixou.

## Bom saber

- Ocultar e bloquear não são edições: não são anuladas com {{key:Mod+Z}}, mas ficam guardadas com o PDF.
- Copiar e colar mantêm a camada de uma anotação.
- Uma cópia achatada desenha todas as anotações na página, qualquer que seja a sua camada. Veja [Guardar uma cópia achatada](topic:flatten).
