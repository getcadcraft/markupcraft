---
title: Alterar as linhas, imagens e texto da própria página
summary: Mover, redimensionar, mudar a cor ou eliminar o que o próprio PDF desenha, mover os pontos de uma linha, substituir uma imagem e alterar as palavras de uma linha de texto.
keywords: conteúdo da página, conteúdo base, editar pdf, editar desenho, vetorial, caminho, forma, linha, imagem, substituir imagem, texto, palavras, tipo de letra, pontos, nós, mover, redimensionar, mudar cor, eliminar, ferramenta de conteúdo
from: 471d457e
---

As anotações ficam por cima de uma folha. A ferramenta {{ui:Conteúdo}} atua sobre a própria folha: as linhas, imagens e linhas de texto que o PDF desenha. O PDF neste computador nunca é alterado: as edições fazem parte da cópia guardada.

## Escolher o que alterar

1. Escolha {{ui:Conteúdo}} no grupo {{ui:Selecionar}}, ou prima {{key:B}}.
2. Em {{ui:Escolher}} em {{ui:Propriedades}}, ative ou desative {{ui:Formas}}, {{ui:Imagens}} e {{ui:Texto}}. Só os tipos ativos podem ser escolhidos, por isso pode escolher o texto de um desenho cheio sem apanhar as linhas.
3. Clique em algo para o selecionar. Shift+clique acrescenta ou remove. Arraste uma caixa sobre papel vazio para selecionar vários: arrastar para a direita apanha o que fica totalmente dentro da caixa, arrastar para a esquerda apanha o que ela toca.

Uma forma dentro de uma área recortada só é escolhida onde aparece.

## Mover, redimensionar, mudar a cor, eliminar

- **Mover:** arraste um objeto selecionado, ou prima as teclas de seta (mantenha Shift premido para passos maiores). Mantenha Shift premido ao arrastar para mover em linha reta na horizontal ou na vertical.
- **Redimensionar:** arraste um dos oito quadrados à volta da seleção. Cresce ou diminui a partir do lado oposto. Mantenha Shift premido para manter as proporções.
- **Mudar a cor:** para linhas e formas, defina {{ui:Cor da linha}}, {{ui:Cor de preenchimento}} e {{ui:Espessura da linha (pt)}} em {{ui:Propriedades}}.
- **Eliminar:** prima {{key:Delete}}, ou escolha {{ui:Eliminar da página}}.
- **Anular:** cada alteração é um passo: {{key:Mod+Z}} anula-a, {{key:Mod+Y}} repõe-na.

{{ui:Repor como estava}} anula de uma vez todas as alterações aos objetos selecionados; {{ui:Repor esta página como estava}} faz isso para a página inteira.

## Copiar, cortar e colar conteúdo da página

Selecione linhas, imagens ou texto com a ferramenta {{ui:Conteúdo}}, depois:

- {{key:Mod+C}} copia, {{key:Mod+X}} corta (copia e retira-os da página), {{key:Mod+D}} põe uma cópia ao lado deles.
- {{key:Mod+V}} cola como conteúdo da página, ao lado do original ou onde estiver o ponteiro (como indicam as [Definições](topic:settings)); {{key:Mod+Shift+V}} cola exatamente no mesmo sítio. Pode colar-se noutra página, noutro PDF aberto ou noutro separador do MarkupCraft deste navegador.
- O menu do grupo {{ui:Editar}} e o menu do botão direito têm os mesmos comandos.

Uma colagem mantém as linhas como linhas, as palavras como palavras no seu próprio tipo de letra, e as imagens como imagens. É uma só peça: mova-a, redimensione-a pelos quadrados, elimine-a, ou anule-a com {{key:Mod+Z}}. Passa a fazer parte da página na cópia que guardar. O que copiou por último, anotações ou conteúdo da página, é o que {{key:Mod+V}} cola.

O que a cópia contém é cortado à caixa em volta da seleção: o que o MarkupCraft não consegue retirar da cópia (ver abaixo) e que esteja dentro dessa caixa vem junto.

## Mover os pontos de uma linha

Faça duplo clique numa linha ou curva (ou selecione-a e escolha {{ui:Editar pontos}}). Os pontos aparecem como quadrados e as alças da curva como círculos. Arraste um ponto ou uma alça; um ponto traz consigo as alças vizinhas, para que a curva mantenha a forma à volta dele. Prima {{key:Esc}}, ou clique fora da linha, quando terminar.

Os retângulos não têm pontos para arrastar: redimensione-os pelos quadrados à volta deles.

## Substituir uma imagem

Selecione uma imagem e escolha {{ui:Substituir imagem…}}, depois escolha um ficheiro PNG, JPEG ou SVG (ou um PDF: a primeira página). A nova imagem ocupa o lugar da antiga, mantendo as proporções próprias.

## Alterar as palavras de uma linha de texto

Faça duplo clique numa linha de texto, escreva as palavras novas em {{ui:Palavras}} e prima {{key:Enter}}. As palavras são escritas no tipo de letra e no tamanho da própria linha, e a linha mantém o comprimento, para que o texto a seguir não se mova.

:::note
A maioria dos PDF tem apenas as letras que usa de cada tipo de letra. Quando escreve uma letra que a cópia do tipo de letra no ficheiro não tem, o MarkupCraft imprime essa letra em Helvetica e diz isso. {{ui:Propriedades}} mostra quais as letras que o tipo de letra no ficheiro tem.
:::

O texto é alterado uma linha de cada vez; não passa para a linha seguinte.

## O que o MarkupCraft deixa como está

- **Páginas digitalizadas** são uma única imagem: pode mover, redimensionar, substituir ou eliminar a imagem, mas o que contém não pode ser editado.
- **PDF cifrados e assinados:** alterar a página quebraria uma assinatura, por isso a ferramenta {{ui:Conteúdo}} avisa e não altera nada. As anotações continuam a funcionar.
- **Áreas de recorte, objetos divididos entre duas partes do conteúdo da página, e misturas de cor que preenchem uma área inteira** mantêm-se como estão; o MarkupCraft diz porquê quando se tenta.
- **Palavras num tipo de letra padrão que o PDF não descreve** (como um Times sem larguras de letra no ficheiro) não podem ser alteradas, porque o MarkupCraft não conseguiria manter o espaçamento da linha. A linha pode ainda ser movida.

## Pôr as anotações na página

Linhas, retângulos, elipses, polilinhas, nuvens e traços de caneta que desenhou como anotações podem passar a fazer parte da própria página: selecione-os e escolha {{ui:Pôr na página}} em {{ui:Propriedades}}. Texto, carimbos, imagens e cores transparentes continuam como anotações.
