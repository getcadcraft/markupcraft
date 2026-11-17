---
title: Anotar uma folha
summary: Desenhe nuvens de revisão, chamadas, caixas de texto, setas, formas, traços de caneta e realces, e defina a cor e a espessura da linha antes ou depois.
keywords: anotação, redline, nuvem, nuvem de revisão, chamada, linha de chamada, caixa de texto, seta, linha, retângulo, elipse, círculo, polilinha, polígono, caneta, à mão livre, tinta, marcador de realce, cor, espessura da linha
from: 9d6de0ac
---

Todas as ferramentas funcionam da mesma forma: escolha a ferramenta, desenhe na folha, e a nova anotação fica selecionada para a ver em {{ui:Propriedades}}. A ferramenta fica ativa para a seguinte. A barra de estado indica sempre o que a ferramenta espera a seguir.

:::touch
No ecrã tátil, use um dedo para desenhar. Um segundo dedo cancela o que o primeiro começou e pinça ou desloca em vez disso, para nunca deixar uma marca por acidente ao aproximar. Mais em [Rever num iPad ou ecrã tátil](topic:review-on-a-tablet).
:::

## Nuvens de revisão

**Nuvem de caixa:** escolha {{ui:Nuvem}} ({{key:C}}) e arraste uma caixa. Mantenha {{key:Shift}} premida para a tornar quadrada.

**Nuvem livre** à volta de uma forma irregular:

1. Escolha {{ui:Nuvem livre}} ({{key:Shift+C}}).
2. Clique em cada canto da área.
3. Termine com um duplo clique, {{key:Enter}} ou um clique com o botão direito. No ecrã tátil, faça duplo toque.

Enquanto clica nos pontos, {{key:Backspace}} remove o último ponto e {{key:Esc}} cancela a forma inteira. Mantenha {{key:Shift}} premida para que o lado seguinte fique num múltiplo de 45°. Uma nuvem livre precisa de pelo menos três pontos.

As ondulações ficam sempre viradas para fora, e o seu tamanho segue a espessura da linha: uma linha mais grossa dá arcos maiores.

## Chamadas

Uma chamada é uma caixa de texto com uma linha de chamada a apontar para algo.

1. Escolha {{ui:Chamada}} ({{key:K}}).
2. Prima sobre o ponto que quer chamar e arraste até onde o texto deve ficar. Largue. Se apenas clicar sem arrastar, a caixa fica colocada acima e à direita do ponto.
3. Escreva o texto. A caixa cresce para baixo à medida que as linhas quebram.
4. Clique em qualquer ponto fora da caixa, ou prima {{key:Mod+Enter}}, para terminar. {{key:Esc}} descarta a chamada.

Se terminar sem escrever nada, não é adicionada nenhuma chamada («Nada escrito, por isso não foi adicionada nenhuma chamada.»).

Depois de desenhada, selecione-a para mover a caixa, arrastar a ponta da linha de chamada ou a sua curva (as duas pegas em losango), ou redimensionar a caixa.

## Caixas de texto

1. Escolha {{ui:Texto}} ({{key:T}}).
2. Clique onde o texto começa (obtém uma caixa de largura razoável), ou arraste uma caixa com o tamanho que quiser.
3. Escreva e depois clique fora ou prima {{key:Mod+Enter}}.

O texto não tem contorno por predefinição. Para lhe dar um, aumente {{ui:Espessura da linha}} em {{ui:Propriedades}}. Para lhe dar um fundo, marque {{ui:Preenchimento}}.

Para alterar as palavras mais tarde: com {{ui:Selecionar}} ativo, faça duplo clique no texto, ou selecione-o e prima {{key:Enter}}, ou escolha {{ui:Editar na folha}} em {{ui:Propriedades}}. Pode também editá-lo na caixa {{ui:Texto}} em {{ui:Propriedades}}.

## Setas e linhas

1. Escolha {{ui:Seta}} ({{key:A}}) ou {{ui:Linha}} ({{key:L}}).
2. Arraste do início ao fim. Ou clique no início, largue, e clique no fim.
3. Mantenha {{key:Shift}} premida para a manter num múltiplo de 45°.

A ponta da seta fica na extremidade onde terminou.

## Retângulos, elipses, polilinhas e polígonos

- {{ui:Retângulo}} ({{key:R}}) e {{ui:Elipse}} ({{key:E}}): arraste uma caixa. {{key:Shift}} faz um quadrado ou um círculo. Um clique sem arrastar não desenha nada, e a barra de estado pede para arrastar.
- {{ui:Polilinha}} ({{key:Y}}) e {{ui:Polígono}} ({{key:G}}): clique em pontos; termine com um duplo clique, {{key:Enter}} ou um clique com o botão direito (duplo toque no ecrã tátil). {{key:Backspace}} remove o último ponto. Um polígono fecha-se sozinho e precisa de três pontos; uma polilinha precisa de dois.

## Caneta e realce

- {{ui:Caneta}} ({{key:P}}): arraste para desenhar à mão livre. O traço fica ligeiramente suavizado quando larga.
- {{ui:Realce}} ({{key:I}}): o mesmo, mas com um traço amarelo, largo e transparente que tinge o desenho por baixo em vez de o cobrir.
- Mantenha {{key:Shift}} premida enquanto desenha para obter um único traço reto a partir do ponto inicial.

O realce é um traço à mão livre. Não encaixa no texto do PDF.

## Cor, linha e preenchimento

De duas formas:

- **Antes de desenhar:** escolha a ferramenta. Sem nada selecionado, {{ui:Propriedades}} mostra as definições de «<ferramenta>»: {{ui:Cor}}, {{ui:Espessura da linha}} (em pontos), {{ui:Preenchimento}} e {{ui:Opacidade do preenchimento}} para formas fechadas, {{ui:Opacidade}}, e {{ui:Tamanho do texto}} para texto. Cada nova anotação desse tipo usa-as, e o MarkupCraft lembra-se delas neste navegador.
- **Depois de desenhar:** selecione uma ou mais anotações e altere os mesmos controlos em «Estilo». Com várias selecionadas, a alteração aplica-se a todas num único passo.

As predefinições: anotações a vermelho, um realce amarelo, medições a azul, contagens a laranja, e carimbos com cor conforme o significado.

Os aspetos guardados que reutiliza todos os dias pertencem ao baú de ferramentas: veja [O baú de ferramentas](topic:tool-chest).

## Assunto e comentário

Cada anotação também tem um {{ui:Assunto}} (um rótulo curto, como «Nuvem» ou «RFI», mostrado na lista de anotações e noutros visualizadores de PDF) e um {{ui:Comentário}} (notas mais longas). Preencha-os em {{ui:Propriedades}}. Para uma conversa sobre uma anotação, use respostas: veja [Estados e respostas](topic:statuses-and-replies).

## A seguir

- [Selecionar, mover e alterar anotações](topic:select-and-edit)
- [Carimbos e notas](topic:stamps-and-notes)
- [Todos os tipos de anotação](topic:markup-types)
