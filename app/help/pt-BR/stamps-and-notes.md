---
title: Carimbos e notas adesivas
summary: Carimbe uma folha como Aprovado, Revisar e reenviar ou com o seu próprio texto, e deixe notas adesivas que abrem como comentários pop-up.
keywords: carimbo, imagem, figura, colar imagem, captura de tela, área de transferência, logotipo, carimbo com foto, assinatura, assinar, aprovado, aprovado com observações, revisar e reenviar, rejeitado, revisado, anulado, carimbo personalizado, nota adesiva, nota, comentário, pop-up
from: 76026792
---

## Carimbar uma folha

1. Escolha {{ui:Carimbo}} ({{key:S}}).
2. Em {{ui:Propriedades}}, à direita, escolha o carimbo em {{ui:Carimbo}}:
   - Aprovado
   - Aprovado com observações
   - Revisar e reenviar
   - Rejeitado
   - Revisado
   - Anulado
   - Texto personalizado… (digite até 60 caracteres na caixa que aparece e pressione {{key:Enter}} ou clique em outro lugar)
3. Clique na folha onde o carimbo vai. Ou arraste uma caixa para escolher o tamanho.

Resultado: um carimbo emoldurado em maiúsculas, com uma segunda linha "Por <seu nome>, <data>". Um carimbo clicado tem o tamanho da tela no seu zoom, mantido entre 1/2 in e 1 1/4 in de altura na folha impressa.

O carimbo escolhido continua selecionado para o próximo, também depois que você reabrir o MarkupCraft neste navegador.

**As cores seguem o significado:** os carimbos Aprovado são verdes, Revisar e reenviar são laranja, Rejeitado e Anulado são vermelhos, Revisado é azul, e os carimbos personalizados são roxos. Se você escolher outra cor em {{ui:Propriedades}}, essa cor é mantida.

### Alterar um carimbo depois

Selecione-o e escolha outro carimbo em {{ui:Propriedades}}. Se ele ainda tiver a cor automática, a cor muda conforme o significado.

O nome e a data no carimbo são o autor do carimbo e o dia em que ele foi feito. Eles não mudam quando você edita, e o autor de um carimbo não pode ser alterado. Para carimbar em nome de outra pessoa, ela define o próprio nome e carimba ela mesma.

:::note
A data em um carimbo é a data no Tempo Universal Coordenado (UTC). Tarde da noite nas Américas, ou cedo da manhã na Ásia e na Austrália, ela pode mostrar o dia seguinte ou o anterior em relação ao seu relógio. A hora de criação em {{ui:Propriedades}} está no seu fuso horário.
:::

### Carimbos que você usa com frequência

A caixa de ferramentas já traz uma ferramenta de carimbo "Aprovado com observações", e você pode salvar qualquer carimbo (seu texto e sua cor) como uma ferramenta própria. Veja [Caixa de ferramentas](topic:tool-chest).

Carimbos com campos preenchidos (data de recebimento, número do projeto) ainda não estão implementados.

## Carimbar uma imagem ou a sua assinatura

A lista de carimbos em {{ui:Propriedades}} termina com duas opções a mais:

- {{ui:Imagem…}} pede um arquivo PNG, JPEG ou SVG deste computador, ou uma página de um PDF, como um selo da empresa ou um logotipo. Imagens grandes são reduzidas para 1600 pixels no lado maior; um SVG ou uma página de PDF vira uma imagem desse tamanho.
- {{ui:Minha assinatura…}} abre uma caixa de assinatura: assine com o mouse, uma caneta ou o dedo, e escolha {{ui:Usar esta assinatura}}. {{ui:Limpar}} recomeça. {{ui:Usar uma imagem de uma assinatura…}} usa um escaneamento ou uma foto da sua assinatura: o MarkupCraft torna transparente o papel branco e recorta a imagem até a tinta (para um PNG, ele pergunta antes).

Depois, clique na folha para posicioná-la (uma imagem com 3 in de largura, uma assinatura com 2 in de largura), ou arraste uma caixa para encaixá-la; as proporções são mantidas. Redimensione com as alças como qualquer marcação ({{key:Shift}} mantém as proporções).

A última imagem fica salva neste navegador, pronta para a próxima vez; {{ui:Escolher outra imagem…}} a substitui. Cada assinatura que você desenhar ou carregar fica em {{ui:Suas assinaturas}} (até oito, da mais recente para a mais antiga): clique em uma para usá-la, ou em × para removê-la. Veja [O que fica salvo neste navegador](topic:browser-storage).

No PDF salvo, uma imagem é um comentário de carimbo que mostra a imagem, para que qualquer visualizador de PDF a exiba e imprima. Uma assinatura desenhada aqui é uma imagem da sua assinatura, não uma assinatura digital certificada.

## Colar uma imagem da área de transferência

Copie uma imagem em outro programa, ou faça uma captura de tela para a área de transferência, depois pressione {{key:Mod+V}} sobre a folha. Ela cai onde está o ponteiro, com no máximo 3 in de largura ou de altura e as proporções mantidas, como uma marcação de imagem que você pode mover e redimensionar. No PDF salvo, é um comentário de carimbo que mostra a imagem, como as imagens acima.

{{ui:Mais}} › {{ui:Colar uma imagem}} no grupo {{ui:Editar}} faz o mesmo pelo menu; o navegador pode perguntar antes. Quando a área de transferência não tem uma imagem, {{key:Mod+V}} cola marcações copiadas como antes.

## Inserir uma imagem de um arquivo

Escolha {{ui:Mais}} › {{ui:Inserir uma imagem de um arquivo…}} no grupo {{ui:Editar}} (ou {{ui:Inserir uma imagem aqui…}} no menu do botão direito), e escolha um arquivo PNG, JPEG ou SVG, ou um PDF (um PDF com várias páginas pergunta qual). Você também pode arrastar um arquivo PNG, JPEG ou SVG para a folha: ele cai onde você soltar. A imagem é uma marcação, com no máximo 3 in de largura ou de altura: mova e redimensione como qualquer outra.

Para tornar uma imagem parte da página, marque {{ui:Achatar na página ao salvar}} em {{ui:Propriedades}}. Veja [Salvar uma cópia achatada](topic:flatten).

## Criar um carimbo a partir de uma seleção

Selecione marcações (ou conteúdo da página com a ferramenta {{ui:Conteúdo}}) e escolha {{ui:Salvar seleção como carimbo…}} em {{ui:Mais}}, no menu do botão direito, ou {{ui:Salvar como carimbo…}} em {{ui:Propriedades}}. Dê um nome. Ele vai para a caixa de ferramentas: clique nele ali, depois clique em qualquer folha para posicionar tudo o que você selecionou, junto, centralizado onde você clicar. Veja [Caixa de ferramentas](topic:tool-chest).

## Notas adesivas

1. Escolha {{ui:Nota}} ({{key:N}}).
2. Clique onde a nota vai. Um pequeno ícone de nota aparece com uma caixa ao lado.
3. Digite a nota. Clique fora ou pressione {{key:Mod+Enter}} para mantê-la; {{key:Esc}} a descarta.

Ao contrário de textos e chamadas, uma nota é mantida mesmo se você não digitar nada, então você pode posicionar o ícone agora e escrever depois.

- As palavras da nota são o campo {{ui:Nota}} em {{ui:Propriedades}}. Clique duas vezes no ícone (ou selecione-o e pressione {{key:Enter}}) para editá-las na folha.
- Na folha você vê apenas o ícone. Outros visualizadores de PDF mostram uma nota adesiva padrão que abre o texto ao clicar.
- Mude a cor do ícone com {{ui:Cor}} em {{ui:Propriedades}}.

Para discussão de ida e volta, use a conversa de respostas em qualquer marcação: veja [Status e respostas](topic:statuses-and-replies).
