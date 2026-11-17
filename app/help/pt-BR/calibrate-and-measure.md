---
title: Calibrar uma folha e medir
summary: Defina a escala de cada folha a partir de uma predefinição ou de uma dimensão conhecida, depois meça comprimentos, áreas com perímetros e contagens.
keywords: calibrar, escala, definir escala, medir, comprimento, distância, cota, área, pés quadrados, perímetro, contagem, levantamento de quantitativos, quantidade, régua, aritmética, cálculo, soma, fração
from: 49a25c6d
---

Comprimentos e áreas precisam conhecer a escala da folha. O MarkupCraft guarda uma escala **por folha**: calibre cada folha que você medir. Contagens não precisam de escala.

A barra de status mostra a escala da folha atual, ou "Não calibrada".

## Escolher uma escala da lista

Use isto quando o PDF estiver em tamanho real (uma folha 24 × 36 que imprime em 24 × 36) e o desenho indicar a sua escala.

1. Clique no botão de escala na barra de status ("Não calibrada"). A caixa "Escala da folha" abre.
2. Em {{ui:Escala}}, escolha a escala: arquitetônica (1/32" = 1'-0" a 3" = 1'-0"), de engenharia (1" = 10' a 1" = 100') ou métrica (1:1 a 1:1000).
3. Escolha {{ui:Definir escala}}.

Resultado: a barra de status mostra a escala, por exemplo `1/4" = 1'-0"`. Escalas arquitetônicas mostram comprimentos em pés e polegadas, escalas de engenharia em pés decimais, escalas métricas até 1:50 em milímetros e a partir de 1:100 em metros.

:::warning
Uma predefinição só está certa se o PDF não tiver sido reduzido. Um conjunto em meia escala, ou uma folha que foi "ajustada à página" ao ser feita, mede errado com uma predefinição. Calibre a partir de uma dimensão conhecida e confira uma dimensão de qualquer forma.
:::

## Calibrar a partir de uma dimensão conhecida

Use isto para conjuntos em meia escala, folhas digitalizadas, detalhes em escalas incomuns, ou para conferir uma predefinição.

1. Encontre uma dimensão longa em que você confie, ou uma barra gráfica de escala.
2. Escolha {{ui:Calibrar}} no grupo {{ui:Medir}} (ou escolha {{ui:Escolher dois pontos}} na caixa "Escala da folha").
3. Clique em uma extremidade da dimensão, depois na outra. (Ou arraste de uma extremidade até a outra.) Aplique zoom antes para mais precisão; {{key:Shift}} mantém a linha em passos de 45°.
4. A caixa informa a distância entre os pontos no papel e pergunta "Qual é a distância real?". Digite a {{ui:Distância real}}, por exemplo `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`.
5. Escolha como os comprimentos são mostrados em {{ui:Mostrar comprimentos em}}: {{ui:Pés e polegadas}}, {{ui:Pés decimais}}, {{ui:Polegadas}}, {{ui:Metros}} ou {{ui:Milímetros}}.
6. Escolha {{ui:Definir escala}}.

Resultado: a barra de status mostra "Calibrada: 24'-0" sobre 1.00 in" (o comprimento real e o comprimento no papel), e a ferramenta com que você ia medir volta a ficar ativa. Todas as formas de digitar um comprimento estão em [Unidades e comprimentos](topic:units-and-scales).

A distância real também pode ser um pequeno cálculo: `12'6"+3/4"`, `(24'-0")/3` ou `2*450mm`. Use `+ - * /` e parênteses; um número sem unidade conta na unidade de {{ui:Mostrar comprimentos em}} (pés, para {{ui:Pés e polegadas}}). {{ui:Definir escala}} usa o resultado.

Se o MarkupCraft não conseguir ler o que você digitou, a caixa informa isso: 'Isto não é um comprimento que o MarkupCraft entende. Tente 24'-0", 12' 6 1/2", 7.2 m ou 900 mm.' Um cálculo que ele não consegue resolver diz o motivo e o lugar, por exemplo "Um colchete não está fechado (caractere 5)."

## Medir um comprimento

1. Escolha {{ui:Comprimento}} ({{key:M}}).
2. Clique no início e depois no fim. Ou arraste do início ao fim. {{key:Shift}} mantém em passos de 45°.

Resultado: uma linha de cota com marcas e o comprimento escrito. A barra de status repete ("Comprimento: 12'-6 1/2" (1/4" = 1'-0")."), e {{ui:Propriedades}} mostra em {{ui:Comprimento}}. Pés e polegadas são arredondados para a 1/16" mais próxima.

Se a folha ainda não tiver escala, escolher {{ui:Comprimento}} muda para {{ui:Calibrar}}, e a barra de status explica: "Calibre esta folha primeiro: escolha dois pontos a uma distância conhecida, ou escolha a escala dela. Depois meça." Depois que você definir a escala, {{ui:Comprimento}} volta.

## Desenhar em escala

Em uma folha calibrada você pode digitar comprimentos reais enquanto desenha uma {{ui:Linha}}, {{ui:Seta}}, {{ui:Comprimento}}, {{ui:Polilinha}}, {{ui:Polígono}}, {{ui:Nuvem livre}}, {{ui:Área}} ou um espaço:

1. Clique no primeiro ponto.
2. Aponte para a direção em que vai o próximo segmento e digite o comprimento, como `16` (na unidade da folha), `12'6"` ou `3.5 m`. Uma caixa abre perto do ponteiro enquanto você digita.
3. Pressione {{key:Enter}}. O ponto cai a essa distância, na direção do ponteiro.

Para definir a direção exatamente, acrescente `<` e um ângulo em graus: `8 < 90` vai 8 pés diretamente para cima, `4<0` para a direita, `10 < 225` para baixo e para a esquerda, como a folha é vista (incluindo páginas giradas). Continue digitando comprimentos para os próximos cantos e finalize a forma como de costume. {{key:Esc}} fecha a caixa sem colocar um ponto.

## Medir um ângulo

1. Escolha {{ui:Ângulo}} ({{key:X}}).
2. Clique na extremidade de um braço, depois no vértice, depois na extremidade do outro braço.

Resultado: os dois braços, um pequeno arco no vértice e o ângulo em graus, com precisão de décimo (0° a 180°). Um ângulo não precisa de escala. {{ui:Propriedades}} mostra em {{ui:Ângulo}}, e a lista, o CSV e o BCF o incluem.

Um {{ui:Arco}} ({{key:O}}) em uma folha calibrada também mostra o seu comprimento ao longo da curva em {{ui:Propriedades}}.

## Medir uma área e o seu perímetro

1. Escolha {{ui:Área}} ({{key:Q}}).
2. Clique em cada canto do cômodo ou da região.
3. Finalize com duplo clique, {{key:Enter}} ou clique com o botão direito (duplo toque em telas sensíveis ao toque). {{key:Backspace}} remove o último canto.

Resultado: um contorno sombreado com a área, e "P" com o perímetro no meio, por exemplo "128.00 sq ft" e "P 48'-0"". Escalas em pés dão pés quadrados, em polegadas dão polegadas quadradas, em metros dão metros quadrados, em milímetros dão milímetros quadrados. Uma área precisa de pelo menos três cantos.

### Recortes

Para deixar de fora um pilar, um poço ou um pátio, selecione a área e escolha {{ui:Adicionar um recorte}} em {{ui:Propriedades}}. Clique nos cantos do recorte dentro da área e finalize como em uma área. O recorte fica aberto (sem sombreado), a sua área é descontada, e as suas bordas são somadas ao perímetro: um cômodo de 16' × 8' com um recorte de 4' × 4' mostra "112.00 sq ft" e "P 64'-0"". Adicione quantos precisar; eles não podem se sobrepor entre si nem cruzar o contorno da área. {{ui:Remover recortes}} tira todos, e {{key:Mod+Z}} desfaz um.

## Contar itens

1. Escolha {{ui:Contagem}} ({{key:U}}).
2. Em {{ui:Propriedades}}, digite um {{ui:Nome do grupo}}, por exemplo "Ralos de piso". (Ele fica guardado para a próxima vez.)
3. Clique em cada item na folha.

Resultado: cada clique adiciona um ponto numerado; o primeiro ponto recebe uma etiqueta como "Ralos de piso: 7", e a barra de status mantém o total acumulado.

- **Iniciar outro grupo:** pressione {{key:Esc}} uma vez (isso limpa a seleção), altere o {{ui:Nome do grupo}} e clique de novo.
- **Adicionar a um grupo existente:** selecione o grupo primeiro, depois escolha {{ui:Contagem}} e clique.
- **Remover uma marca:** com o grupo selecionado, mantenha {{key:Shift}} pressionado e clique no ponto. Remover o último ponto remove o grupo. Em uma tela sensível ao toque sem teclado, use {{key:Mod+Z}} ou {{ui:Desfazer}} no lugar.
- **Renomear um grupo:** selecione-o e edite o {{ui:Nome do grupo}} em {{ui:Propriedades}}.

Um grupo de contagem pertence a uma folha. Contagens em várias folhas aparecem como grupos separados na lista de marcações.

## Alterar ou remover uma escala

Clique no botão de escala na barra de status. A caixa mostra a escala atual; escolha outra, escolha {{ui:Escolher dois pontos}} ou escolha {{ui:Remover escala}}.

Comprimentos e áreas já desenhados são **medidos de novo** com a nova escala imediatamente. Desfazer restaura a escala antiga.

## Onde os números vão

- {{ui:Propriedades}} mostra os valores da medição selecionada.
- A guia {{ui:Marcações}} lista cada valor, e o CSV dela tem uma coluna "Medição". Veja [A lista de marcações](topic:markups-list-and-export).
- O PDF salvo mantém a escala na página e grava comprimentos e áreas como comentários de medição, para que outros programas de PDF que entendem medidas possam mostrá-los. Veja [O que é salvo no PDF](topic:what-the-pdf-keeps).

Para um levantamento completo de quantitativos com itens, composições e preços, use o TakeoffCraft: o MarkupCraft mede para revisão, não para orçamento.
