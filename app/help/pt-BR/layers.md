---
title: Camadas de marcação
summary: Coloque marcações em camadas nomeadas e depois mostre, oculte ou bloqueie cada camada; outros visualizadores de PDF também podem alternar essas camadas.
keywords: camadas, camada, ocultar, mostrar, bloquear, agrupar marcações, disciplina, mecânica, elétrica, conteúdo opcional, ocg, visibilidade
from: 0fbb4c26
---

Camadas agrupam marcações, por exemplo por disciplina ou por revisor. Oculte uma camada para ver o desenho sob ela, ou bloqueie-a para que as marcações não sejam movidas por acidente.

## Criar uma camada e desenhar nela

1. Abra {{ui:Camadas}}, no topo do painel {{ui:Folhas}}.
2. Escolha {{ui:Nova camada}}, digite um nome como `Mechanical` e escolha {{ui:Adicionar camada}}.
3. A nova camada vira a camada atual: toda marcação que você desenhar a partir de agora vai para ela. Escolha o nome de outra camada, ou {{ui:Nenhuma camada}}, para mudar onde as novas marcações vão.

Para mover uma marcação para outra camada, selecione-a e escolha a camada em {{ui:Camada}} em {{ui:Propriedades}}. {{ui:Nova camada…}} no fim dessa lista cria uma camada na hora. Mover pode ser desfeito com {{key:Mod+Z}}.

## Mostrar, ocultar e bloquear

Cada linha de camada tem dois botões:

- O **olho** mostra ou oculta a camada. Marcações ocultas não são desenhadas nem podem ser selecionadas; elas continuam contando na lista {{ui:Marcações}}.
- O **cadeado** mantém as marcações da camada na folha, mas impede que elas sejam selecionadas, movidas ou apagadas.

O botão de lápis renomeia uma camada e leva junto as marcações dela. Filtre a lista {{ui:Marcações}} por {{ui:Camada}} para ver as marcações de uma única camada.

## No PDF salvo

Cada camada vira uma camada do PDF (conteúdo opcional). Outros visualizadores de PDF listam as camadas no painel de camadas e podem alterná-las; uma camada que você ocultou começa oculta lá também. As camadas que o desenho já tinha, como camadas de CAD, permanecem como estavam. Ao reabrir a cópia no MarkupCraft, as marcações voltam nas suas camadas, ocultas e bloqueadas como você as deixou.

## Bom saber

- Ocultar e bloquear não são edições: não são desfeitas com {{key:Mod+Z}}, mas são salvas com o PDF.
- Copiar e colar mantém a camada de uma marcação.
- Uma cópia achatada desenha cada marcação na página, seja qual for a camada. Veja [Salvar uma cópia achatada](topic:flatten).
