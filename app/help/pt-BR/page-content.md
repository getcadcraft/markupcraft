---
title: Alterar as linhas, imagens e textos da própria página
summary: Mova, redimensione, recolora ou exclua o que o próprio PDF desenha, mova os pontos de uma linha, substitua uma imagem e altere as palavras de uma linha de texto.
keywords: conteúdo da página, conteúdo base, editar pdf, editar desenho, vetor, caminho, forma, linha, imagem, substituir imagem, texto, palavras, fonte, pontos, nós, mover, redimensionar, recolorir, excluir, ferramenta de conteúdo
from: 471d457e
---

Marcações ficam sobre uma folha. A ferramenta {{ui:Conteúdo}} atua na própria folha: as linhas, imagens e linhas de texto que o PDF desenha. Seu PDF neste computador nunca é alterado: as edições fazem parte da cópia que você salvar.

## Escolher o que alterar

1. Escolha {{ui:Conteúdo}} no grupo {{ui:Selecionar}}, ou pressione {{key:B}}.
2. Em {{ui:Escolher}} em {{ui:Propriedades}}, ligue ou desligue {{ui:Formas}}, {{ui:Imagens}} e {{ui:Texto}}. Só os tipos ligados podem ser escolhidos, assim você pode escolher o texto de um desenho carregado sem pegar as suas linhas.
3. Clique em algo para selecioná-lo. Shift+clique adiciona ou remove. Arraste uma caixa sobre o papel vazio para selecionar vários: arrastando para a direita, pega o que está totalmente dentro da caixa; arrastando para a esquerda, pega o que ela toca.

Uma forma dentro de uma área recortada só é escolhida onde aparece.

## Mover, redimensionar, recolorir, excluir

- **Mover:** arraste um objeto selecionado, ou pressione as teclas de seta (segure Shift para passos maiores). Segure Shift ao arrastar para mover em linha reta na horizontal ou na vertical.
- **Redimensionar:** arraste um dos oito quadrados ao redor da seleção. Ela cresce ou diminui a partir do lado oposto. Segure Shift para manter as proporções.
- **Recolorir:** para linhas e formas, defina {{ui:Cor da linha}}, {{ui:Cor de preenchimento}} e {{ui:Espessura da linha (pt)}} em {{ui:Propriedades}}.
- **Excluir:** pressione {{key:Delete}}, ou escolha {{ui:Excluir da página}}.
- **Desfazer:** cada alteração é um passo: {{key:Mod+Z}} a desfaz, {{key:Mod+Y}} a refaz.

{{ui:Devolver como era}} desfaz de uma vez todas as alterações nos objetos selecionados; {{ui:Devolver esta página como era}} faz isso para a página inteira.

## Copiar, recortar e colar conteúdo da página

Selecione linhas, imagens ou textos com a ferramenta {{ui:Conteúdo}}, depois:

- {{key:Mod+C}} copia, {{key:Mod+X}} recorta (copia e tira da página), {{key:Mod+D}} põe uma cópia ao lado deles.
- {{key:Mod+V}} cola como conteúdo da página, ao lado do original ou onde está o ponteiro (como indicam as [Configurações](topic:settings)); {{key:Mod+Shift+V}} cola exatamente no mesmo lugar. Cola em outra página, em outro PDF aberto ou em outra aba do MarkupCraft deste navegador.
- O menu do grupo {{ui:Editar}} e o menu do botão direito têm os mesmos comandos.

Um colar mantém linhas como linhas, palavras como palavras na sua própria fonte, e imagens como imagens. É um só bloco: mova-o, redimensione-o pelos quadrados, exclua-o, ou desfaça-o com {{key:Mod+Z}}. Ele passa a fazer parte da página na cópia que você salvar. O que você copiou por último, marcações ou conteúdo da página, é o que {{key:Mod+V}} cola.

O que a cópia contém é cortado na caixa ao redor da seleção: algo que o MarkupCraft não consegue levar para a cópia (veja abaixo) e que esteja dentro dessa caixa também vem junto.

## Mover os pontos de uma linha

Clique duas vezes em uma linha ou curva (ou selecione-a e escolha {{ui:Editar pontos}}). Seus pontos aparecem como quadrados, e suas alças de curva como círculos. Arraste um ponto ou uma alça; um ponto traz junto as alças vizinhas, assim a curva mantém a forma ao redor dele. Pressione {{key:Esc}}, ou clique fora da linha, quando terminar.

Retângulos não têm pontos para arrastar: redimensione-os pelos quadrados ao redor deles.

## Substituir uma imagem

Selecione uma imagem e escolha {{ui:Substituir imagem…}}, depois escolha um arquivo PNG, JPEG ou SVG (ou um PDF: a primeira página dele). A nova imagem ocupa o lugar da antiga, mantendo as próprias proporções.

## Alterar as palavras de uma linha de texto

Clique duas vezes em uma linha de texto, digite as novas palavras em {{ui:Palavras}} e pressione {{key:Enter}}. As palavras são escritas na fonte e no tamanho da própria linha, e a linha mantém o comprimento, então o texto depois dela não se move.

:::note
A maioria dos PDFs traz apenas as letras que usa de cada fonte. Quando você digita uma letra que a cópia da fonte no arquivo não tem, o MarkupCraft imprime essa letra em Helvetica e informa isso. {{ui:Propriedades}} mostra quais letras a fonte do arquivo tem.
:::

O texto é alterado uma linha por vez; ele não passa para a linha seguinte.

## O que o MarkupCraft deixa como está

- **Páginas digitalizadas** são uma só imagem: você pode mover, redimensionar, substituir ou excluir a imagem, mas o que há nela não pode ser editado.
- **PDFs criptografados e assinados:** alterar a página quebraria uma assinatura, então a ferramenta {{ui:Conteúdo}} avisa e não altera nada. As marcações continuam funcionando.
- **Áreas de recorte, objetos divididos entre duas partes do conteúdo da página e mesclagens de cor que preenchem uma área inteira** continuam como estão; o MarkupCraft diz o motivo quando você tenta.
- **Palavras em uma fonte padrão que o PDF não descreve** (como uma fonte Times sem larguras de letra no arquivo) não podem ser alteradas, porque o MarkupCraft não conseguiria manter o espaçamento da linha. A linha ainda pode ser movida.

## Colocar marcações na página

Linhas, retângulos, elipses, polilinhas, nuvens e traços de caneta que você desenhou como marcações podem passar a fazer parte da própria página: selecione-os e escolha {{ui:Pôr na página}} em {{ui:Propriedades}}. Textos, carimbos, imagens e cores transparentes continuam como marcações.
