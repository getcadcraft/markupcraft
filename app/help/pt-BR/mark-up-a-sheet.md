---
title: Marcar uma folha
summary: Desenhe nuvens de revisão, chamadas, caixas de texto, setas, formas, traços de caneta e destaques, e defina a cor e a linha antes ou depois.
keywords: marcação, marcar, redline, nuvem, nuvem de revisão, chamada, linha de chamada, caixa de texto, seta, linha, retângulo, elipse, círculo, polilinha, polígono, caneta, à mão livre, tinta, destaque, cor, espessura da linha
from: 9d6de0ac
---

Cada ferramenta funciona do mesmo jeito: escolha-a, desenhe na folha, e a nova marcação fica selecionada para você vê-la em {{ui:Propriedades}}. A ferramenta continua ativa para a próxima. A barra de status sempre diz o que a ferramenta espera em seguida.

:::touch
Em uma tela sensível ao toque, use um dedo para desenhar. Um segundo dedo cancela o que o primeiro começou e faz pinça ou pan, para que você nunca deixe uma marca por acidente ao dar zoom. Mais em [Revisar em um iPad ou tela sensível ao toque](topic:review-on-a-tablet).
:::

## Nuvens de revisão

**Nuvem de caixa:** escolha {{ui:Nuvem}} ({{key:C}}) e arraste uma caixa. Segure {{key:Shift}} para deixá-la quadrada.

**Nuvem livre** em torno de uma forma irregular:

1. Escolha {{ui:Nuvem livre}} ({{key:Shift+C}}).
2. Clique em cada canto da área.
3. Finalize com clique duplo, {{key:Enter}} ou clique com o botão direito. No toque, dê um toque duplo.

Enquanto você clica nos pontos, {{key:Backspace}} remove o último ponto e {{key:Esc}} cancela a forma inteira. Segure {{key:Shift}} para manter o próximo lado em um múltiplo de 45°. Uma nuvem livre precisa de pelo menos três pontos.

As ondas sempre se projetam para fora, e o tamanho delas acompanha a espessura da linha: uma linha mais grossa gera arcos maiores.

## Chamadas

Uma chamada é uma caixa de texto com uma linha de chamada apontando para algo.

1. Escolha {{ui:Chamada}} ({{key:K}}).
2. Pressione sobre o ponto que você quer destacar e arraste até onde o texto deve ficar. Solte.
   Se você só clicar sem arrastar, a caixa é colocada acima e à direita do ponto.
3. Digite o texto. A caixa cresce para baixo conforme as linhas quebram.
4. Clique em qualquer lugar fora da caixa, ou pressione {{key:Mod+Enter}}, para finalizar. {{key:Esc}} descarta a chamada.

Se você finalizar sem digitar nada, nenhuma chamada é adicionada ("Nada digitado, então nenhuma chamada foi adicionada.").

Depois de desenhada, selecione-a para mover a caixa, arrastar a ponta da linha de chamada ou a dobra dela (as duas alças em losango), ou redimensionar a caixa.

## Caixas de texto

1. Escolha {{ui:Texto}} ({{key:T}}).
2. Clique onde o texto começa (você obtém uma caixa de largura razoável), ou arraste uma caixa do tamanho que quiser.
3. Digite e depois clique fora ou pressione {{key:Mod+Enter}}.

O texto não tem borda por padrão. Para dar uma borda, aumente {{ui:Espessura da linha}} em {{ui:Propriedades}}. Para dar um fundo, marque {{ui:Preenchimento}}.

Para mudar as palavras depois: com {{ui:Selecionar}} ativo, dê clique duplo no texto, ou selecione-o e pressione {{key:Enter}}, ou escolha {{ui:Editar na folha}} em {{ui:Propriedades}}. Você também pode editá-lo na caixa {{ui:Texto}} em {{ui:Propriedades}}.

## Setas e linhas

1. Escolha {{ui:Seta}} ({{key:A}}) ou {{ui:Linha}} ({{key:L}}).
2. Arraste do início até o fim. Ou clique no início, solte e clique no fim.
3. Segure {{key:Shift}} para mantê-la em um múltiplo de 45°.

A ponta da seta fica na extremidade onde você terminou.

## Retângulos, elipses, polilinhas e polígonos

- {{ui:Retângulo}} ({{key:R}}) e {{ui:Elipse}} ({{key:E}}): arraste uma caixa. {{key:Shift}} faz um quadrado ou um círculo. Um clique sem arrastar não desenha nada, e a barra de status pede para arrastar.
- {{ui:Polilinha}} ({{key:Y}}) e {{ui:Polígono}} ({{key:G}}): clique nos pontos; finalize com clique duplo, {{key:Enter}} ou clique com o botão direito (toque duplo no toque). {{key:Backspace}} remove o último ponto. Um polígono se fecha sozinho e precisa de três pontos; uma polilinha precisa de dois.

## Caneta e destaque

- {{ui:Caneta}} ({{key:P}}): arraste para desenhar à mão livre. O traço fica um pouco suavizado quando você solta.
- {{ui:Destaque}} ({{key:I}}): o mesmo, com um traço amarelo largo e transparente que tinge o desenho sob ele em vez de cobri-lo.
- Segure {{key:Shift}} enquanto desenha para obter um único traço reto a partir de onde você começou.

O destaque é um traço à mão livre. Ele não se encaixa no texto do PDF.

## Cor, linha e preenchimento

Duas formas:

- **Antes de desenhar:** escolha a ferramenta. Sem nada selecionado, {{ui:Propriedades}} mostra as configurações de "<ferramenta>": {{ui:Cor}}, {{ui:Espessura da linha}} (em pontos), {{ui:Preenchimento}} e {{ui:Opacidade do preenchimento}} para formas fechadas, {{ui:Opacidade}}, e {{ui:Tamanho do texto}} para texto. Toda nova marcação desse tipo usa essas configurações, e o MarkupCraft as lembra neste navegador.
- **Depois de desenhar:** selecione uma ou mais marcações e altere os mesmos controles em "Estilo". Com várias selecionadas, a mudança vale para todas em uma única etapa.

Os padrões: marcações vermelhas, destaque amarelo, medições azuis, contagens laranja e carimbos coloridos conforme o significado.

Estilos salvos que você reutiliza todos os dias pertencem à caixa de ferramentas: veja [A caixa de ferramentas](topic:tool-chest).

## Assunto e comentário

Toda marcação também tem um {{ui:Assunto}} (um rótulo curto, como "Nuvem" ou "RFI", mostrado na lista de marcações e em outros visualizadores de PDF) e um {{ui:Comentário}} (notas mais longas). Preencha-os em {{ui:Propriedades}}. Para uma conversa sobre uma marcação, use respostas: veja [Status e respostas](topic:statuses-and-replies).

## Próximo

- [Selecionar, mover e alterar marcações](topic:select-and-edit)
- [Carimbos e notas](topic:stamps-and-notes)
- [Todos os tipos de marcação](topic:markup-types)
