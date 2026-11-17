---
title: Calibrar uma folha e medir
summary: Defina a escala de cada folha a partir de uma predefinição ou de uma dimensão conhecida, e depois meça comprimentos, áreas com perímetros e contagens.
keywords: calibrar, escala, definir escala, medir, comprimento, distância, cota, área, pés quadrados, perímetro, contagem, medição de quantidades, quantidade, régua, aritmética, cálculo, mais, fração
from: 49a25c6d
---

Os comprimentos e as áreas precisam de conhecer a escala da folha. O MarkupCraft guarda uma escala **por folha**: calibre cada folha em que vai medir. As contagens não precisam de escala.

A barra de estado mostra a escala da folha atual, ou «Não calibrado».

## Escolher uma escala da lista

Use isto quando o PDF está à escala real (uma folha de 24 × 36 que imprime a 24 × 36) e o desenho indica a escala.

1. Clique no botão de escala na barra de estado («Não calibrado»). Abre-se a caixa «Escala da folha».
2. Em {{ui:Escala}}, escolha a escala: arquitetónica (1/32" = 1'-0" a 3" = 1'-0"), de engenharia (1" = 10' a 1" = 100') ou métrica (1:1 a 1:1000).
3. Escolha {{ui:Definir escala}}.

Resultado: a barra de estado mostra a escala, por exemplo `1/4" = 1'-0"`. As escalas arquitetónicas mostram os comprimentos em pés e polegadas, as de engenharia em pés decimais, e as métricas até 1:50 em milímetros e a partir de 1:100 em metros.

:::warning
Uma predefinição só está certa se o PDF não tiver sido reduzido. Um conjunto a meia escala, ou uma folha que foi «ajustar à página» quando foi feita, mede mal com uma predefinição. Calibre antes a partir de uma dimensão conhecida, e verifique uma dimensão de qualquer forma.
:::

## Calibrar a partir de uma dimensão conhecida

Use isto para conjuntos a meia escala, folhas digitalizadas, pormenores em escalas invulgares, ou para verificar uma predefinição.

1. Encontre uma dimensão longa em que confie, ou uma barra de escala gráfica.
2. Escolha {{ui:Calibrar}} no grupo {{ui:Medir}} (ou escolha {{ui:Escolher dois pontos}} na caixa «Escala da folha»).
3. Clique numa extremidade da dimensão e depois na outra. (Ou arraste de uma extremidade até à outra.) Faça zoom primeiro para maior precisão; {{key:Shift}} mantém a linha em passos de 45°.
4. A caixa indica a distância entre os pontos no papel e pergunta «Qual é a distância real entre eles?». Escreva a {{ui:Distância real}}, por exemplo `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`.
5. Escolha a forma como os comprimentos aparecem em {{ui:Mostrar comprimentos em}}: {{ui:Pés e polegadas}}, {{ui:Pés decimais}}, {{ui:Polegadas}}, {{ui:Metros}} ou {{ui:Milímetros}}.
6. Escolha {{ui:Definir escala}}.

Resultado: a barra de estado mostra «Calibrado: 24'-0" sobre 1.00 in» (o comprimento real e o comprimento no papel), e a ferramenta com que ia medir volta a ficar ativa. Todas as formas de escrever um comprimento estão em [Unidades e comprimentos](topic:units-and-scales).

A distância real também pode ser um pequeno cálculo: `12'6"+3/4"`, `(24'-0")/3` ou `2*450mm`. Use `+ - * /` e parênteses; um número sem unidade conta na unidade de {{ui:Mostrar comprimentos em}} (pés, para {{ui:Pés e polegadas}}). {{ui:Definir escala}} usa o resultado.

Se o MarkupCraft não conseguir ler o que escreveu, a caixa indica-o: «Isso não é um comprimento que o MarkupCraft perceba. Experimente 24'-0", 12' 6 1/2", 7.2 m ou 900 mm.» Um cálculo que não consegue resolver indica porquê e onde, por exemplo «Um parêntese não está fechado (carácter 5).»

## Medir um comprimento

1. Escolha {{ui:Comprimento}} ({{key:M}}).
2. Clique no início e depois no fim. Ou arraste do início até ao fim. {{key:Shift}} mantém-no em passos de 45°.

Resultado: uma linha de cota com traços e o comprimento escrito. A barra de estado repete-o («Comprimento: 12'-6 1/2" (1/4" = 1'-0")."), e {{ui:Propriedades}} mostra-o em {{ui:Comprimento}}. Pés e polegadas são arredondados à 1/16" mais próxima.

Se a folha ainda não tiver escala, escolher {{ui:Comprimento}} muda para {{ui:Calibrar}}, e a barra de estado explica: «Calibre primeiro esta folha: escolha dois pontos a uma distância conhecida, ou escolha a respetiva escala. Depois, meça.» Depois de definir a escala, {{ui:Comprimento}} volta.

## Esboçar à escala

Numa folha calibrada pode escrever comprimentos reais enquanto desenha uma {{ui:Linha}}, {{ui:Seta}}, {{ui:Comprimento}}, {{ui:Polilinha}}, {{ui:Polígono}}, {{ui:Nuvem livre}}, {{ui:Área}} ou um espaço:

1. Clique no primeiro ponto.
2. Aponte o sentido do segmento seguinte e escreva o seu comprimento, como `16` (na unidade da folha), `12'6"` ou `3.5 m`. Abre-se uma caixa junto ao ponteiro à medida que escreve.
3. Prima {{key:Enter}}. O ponto fica a essa distância, no sentido do ponteiro.

Para definir o sentido com exatidão, acrescente `<` e um ângulo em graus: `8 < 90` vai 8 pés para cima em linha reta, `4<0` para a direita, `10 < 225` para baixo e para a esquerda, tal como a folha é vista (incluindo as páginas rodadas). Continue a escrever comprimentos para os cantos seguintes e termine a forma como habitualmente. {{key:Esc}} fecha a caixa sem colocar um ponto.

## Medir um ângulo

1. Escolha {{ui:Ângulo}} ({{key:X}}).
2. Clique na extremidade de um braço, depois no vértice, e depois na extremidade do outro braço.

Resultado: os dois braços, um pequeno arco no vértice e o ângulo em graus, com uma casa decimal (de 0° a 180°). Um ângulo não precisa de escala. {{ui:Propriedades}} mostra-o em {{ui:Ângulo}}, e a lista, o CSV e o BCF incluem-no.

Um {{ui:Arco}} ({{key:O}}) numa folha calibrada também mostra o comprimento ao longo da curva em {{ui:Propriedades}}.

## Medir uma área e o seu perímetro

1. Escolha {{ui:Área}} ({{key:Q}}).
2. Clique em cada canto do compartimento ou da região.
3. Termine com duplo clique, {{key:Enter}} ou clique com o botão direito (duplo toque num ecrã tátil). {{key:Backspace}} remove o último canto.

Resultado: um contorno sombreado com a área e «P» com o perímetro no meio, por exemplo "128.00 sq ft" e "P 48'-0"". As escalas em pés dão pés quadrados, em polegadas dão polegadas quadradas, em metros dão metros quadrados, em milímetros dão milímetros quadrados. Uma área precisa de pelo menos três cantos.

### Recortes

Para deixar de fora uma coluna, um poço ou um pátio, selecione a área e escolha {{ui:Adicionar um recorte}} em {{ui:Propriedades}}. Clique nos cantos do recorte dentro da área e termine como numa área. O recorte fica aberto (sem sombreado), a sua área é subtraída, e as suas arestas são acrescentadas ao perímetro: um compartimento de 16' × 8' com um recorte de 4' × 4' mostra "112.00 sq ft" e "P 64'-0"". Acrescente quantos precisar; não se podem sobrepor entre si nem cruzar o contorno da área. {{ui:Remover recortes}} retira todos, e {{key:Mod+Z}} anula um.

## Contar elementos

1. Escolha {{ui:Contagem}} ({{key:U}}).
2. Em {{ui:Propriedades}}, escreva um {{ui:Nome do grupo}}, por exemplo "Ralos de piso". Fica guardado para a próxima vez.
3. Clique em cada elemento da folha.

Resultado: cada clique acrescenta um ponto numerado; o primeiro ponto tem uma etiqueta como "Ralos de piso: 7", e a barra de estado mantém o total acumulado.

- **Iniciar outro grupo:** prima {{key:Esc}} uma vez (limpa a seleção), altere o {{ui:Nome do grupo}} e clique de novo.
- **Acrescentar a um grupo existente:** selecione primeiro o grupo, depois escolha {{ui:Contagem}} e clique.
- **Remover uma marca:** com o grupo selecionado, mantenha {{key:Shift}} premido e clique no ponto. Remover o último ponto remove o grupo. Num ecrã tátil sem teclado, use {{key:Mod+Z}} ou {{ui:Anular}} em vez disso.
- **Mudar o nome de um grupo:** selecione-o e edite o {{ui:Nome do grupo}} em {{ui:Propriedades}}.

Um grupo de contagem pertence a uma folha. As contagens em várias folhas aparecem como grupos separados na lista de anotações.

## Alterar ou remover uma escala

Clique no botão de escala na barra de estado. A caixa mostra a escala atual; escolha outra, escolha {{ui:Escolher dois pontos}}, ou escolha {{ui:Remover escala}}.

Os comprimentos e áreas já desenhados são **medidos de novo** com a nova escala de imediato. {{ui:Anular}} repõe a escala antiga.

## Onde ficam os números

- {{ui:Propriedades}} mostra os valores da medição selecionada.
- O separador {{ui:Anotações}} lista cada valor, e o seu CSV tem uma coluna "Medição". Veja [A lista de anotações](topic:markups-list-and-export).
- O PDF guardado mantém a escala na página e escreve os comprimentos e áreas como comentários de medição, para que outros programas de PDF que entendam medições as possam mostrar. Veja [O que é guardado no PDF](topic:what-the-pdf-keeps).

Para uma medição completa de quantidades, com itens, conjuntos e preços, use o TakeoffCraft: o MarkupCraft mede para revisão, não para orçamentação.
