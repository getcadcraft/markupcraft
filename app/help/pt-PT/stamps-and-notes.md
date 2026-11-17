---
title: Carimbos e notas adesivas
summary: Carimbe uma folha como Aprovado, Rever e reenviar ou com um texto seu, e deixe notas adesivas que se abrem como comentários em janela.
keywords: carimbo, imagem, figura, colar imagem, captura de ecrã, área de transferência, logótipo, carimbo com fotografia, assinatura, assinar, aprovado, aprovado com observações, rever e reenviar, rejeitado, revisto, anulado, carimbo personalizado, nota adesiva, nota, comentário, janela
from: 76026792
---

## Carimbar uma folha

1. Escolha {{ui:Carimbo}} ({{key:S}}).
2. Em {{ui:Propriedades}}, à direita, escolha o carimbo em {{ui:Carimbo}}:
   - Aprovado
   - Aprovado com observações
   - Rever e reenviar
   - Rejeitado
   - Revisto
   - Anulado
   - Texto personalizado… (escreva até 60 caracteres na caixa que aparece e, depois, prima {{key:Enter}} ou clique noutro sítio)
3. Clique na folha onde o carimbo deve ficar. Ou arraste uma caixa para escolher o tamanho.

Resultado: um carimbo com moldura, em maiúsculas, com uma segunda linha "Por <o seu nome>, <data>". Um carimbo com um clique é dimensionado para o ecrã, com o zoom atual, e fica com uma altura entre meia polegada e uma polegada e um quarto na folha impressa.

O carimbo escolhido mantém-se selecionado para o próximo, também depois de voltar a abrir o MarkupCraft neste navegador.

**As cores seguem o significado:** os carimbos Aprovado são verdes, Rever e reenviar laranja, Rejeitado e Anulado vermelhos, Revisto azul e os carimbos personalizados roxos. Se escolher outra cor em {{ui:Propriedades}}, essa cor é mantida.

### Alterar um carimbo mais tarde

Selecione-o e escolha outro carimbo em {{ui:Propriedades}}. Se ainda tiver a cor automática, a cor muda conforme o significado.

O nome e a data no carimbo são o autor do carimbo e o dia em que foi criado. Não mudam quando o edita, e o autor de um carimbo não pode ser alterado. Para carimbar em nome de outra pessoa, essa pessoa define o próprio nome e carimba ela mesma.

:::note
A data de um carimbo é a data no Tempo Universal Coordenado (UTC). Ao fim da tarde nas Américas, ou de manhã cedo na Ásia e na Austrália, pode mostrar o dia seguinte ou o anterior em relação ao relógio. A hora de criação em {{ui:Propriedades}} está no seu fuso horário.
:::

### Carimbos que usa com frequência

A caixa de ferramentas traz uma ferramenta de carimbo "Aprovado com observações", e pode guardar qualquer carimbo (texto e cor) como ferramenta própria. Ver [A caixa de ferramentas](topic:tool-chest).

Os carimbos com campos preenchíveis (data de receção, número do projeto) ainda não estão implementados.

## Carimbar uma imagem ou a sua assinatura

A lista de carimbos em {{ui:Propriedades}} termina com duas opções adicionais:

- {{ui:Imagem…}} pede um ficheiro PNG, JPEG ou SVG deste computador, ou uma página de um PDF, como um selo da empresa ou um logótipo. As imagens grandes são reduzidas para 1600 pixels no lado maior; uma página SVG ou PDF torna-se uma imagem desse tamanho.
- {{ui:A minha assinatura…}} abre uma caixa de assinatura: assine com o rato, uma caneta ou um dedo, e escolha {{ui:Usar esta assinatura}}. {{ui:Limpar}} recomeça. {{ui:Utilizar uma imagem de uma assinatura…}} usa, em vez disso, uma digitalização ou fotografia da sua assinatura: o MarkupCraft torna transparente o fundo branco e recorta a imagem à tinta (para um PNG, pergunta primeiro).

Depois, clique na folha para colocar a imagem (uma imagem com 3 polegadas de largura, uma assinatura com 2 polegadas), ou arraste uma caixa para a ajustar dentro dela; as proporções mantêm-se. Redimensione-a com as pegas como qualquer outra anotação ({{key:Shift}} mantém as proporções).

A última imagem fica guardada neste navegador, para estar pronta da próxima vez; {{ui:Escolher outra imagem…}} substitui-a. Cada assinatura que desenhar ou carregar fica guardada em {{ui:As suas assinaturas}} (até oito, da mais recente para a mais antiga): clique numa para a usar, ou em × para a remover. Ver [O que fica guardado neste navegador](topic:browser-storage).

No PDF guardado, uma imagem é um comentário de carimbo que mostra a imagem, por isso qualquer visualizador de PDF a mostra e imprime. Uma assinatura desenhada aqui é uma imagem da sua assinatura, não uma assinatura digital certificada.

## Colar uma imagem da área de transferência

Copie uma imagem noutro programa, ou faça uma captura de ecrã para a área de transferência, e depois prima {{key:Mod+V}} sobre a folha. A imagem fica onde está o ponteiro, com no máximo 3 polegadas de largura ou altura e as proporções mantidas, como uma anotação de imagem que pode mover e redimensionar. No PDF guardado, é um comentário de carimbo que mostra a imagem, como as imagens acima.

{{ui:Mais}} › {{ui:Colar uma imagem}} no grupo {{ui:Editar}} faz o mesmo a partir do menu; o navegador pode pedir confirmação primeiro. Quando a área de transferência não tem uma imagem, {{key:Mod+V}} cola as anotações copiadas como antes.

## Inserir uma imagem a partir de um ficheiro

Escolha {{ui:Mais}} › {{ui:Inserir uma imagem a partir de um ficheiro…}} no grupo {{ui:Editar}} (ou {{ui:Inserir aqui uma imagem…}} no menu de clique com o botão direito) e escolha um ficheiro PNG, JPEG ou SVG, ou um PDF (um PDF com várias páginas pergunta qual). Também pode arrastar um ficheiro PNG, JPEG ou SVG para a folha: a imagem fica onde o largar. A imagem é uma anotação, com no máximo 3 polegadas de largura ou altura: mova-a e redimensione-a como qualquer outra.

Para tornar uma imagem parte da página, marque {{ui:Integrar na página ao guardar}} em {{ui:Propriedades}}. Ver [Guardar uma cópia achatada](topic:flatten).

## Criar um carimbo a partir de uma seleção

Selecione anotações (ou conteúdo da página com a ferramenta {{ui:Conteúdo}}) e escolha {{ui:Guardar a seleção como carimbo…}} em {{ui:Mais}}, no menu de clique com o botão direito, ou {{ui:Guardar como carimbo…}} em {{ui:Propriedades}}. Dê-lhe um nome. Fica na caixa de ferramentas: clique nele aí e, depois, clique em qualquer folha para colocar tudo o que selecionou, em conjunto, centrado onde clicar. Ver [A caixa de ferramentas](topic:tool-chest).

## Notas adesivas

1. Escolha {{ui:Nota}} ({{key:N}}).
2. Clique onde a nota deve ficar. Aparece um pequeno ícone de nota com uma caixa ao lado.
3. Escreva a nota. Clique fora ou prima {{key:Mod+Enter}} para a manter; {{key:Esc}} descarta-a.

Ao contrário do texto e das chamadas, uma nota é mantida mesmo que não escreva nada, para poder colocar o ícone agora e escrever mais tarde.

- As palavras da nota são o campo {{ui:Nota}} em {{ui:Propriedades}}. Faça duplo clique no ícone (ou selecione-o e prima {{key:Enter}}) para as editar na folha.
- Na folha vê apenas o ícone. Outros visualizadores de PDF mostram uma nota adesiva padrão que se abre com o texto ao clicar.
- Altere a cor do ícone com {{ui:Cor}} em {{ui:Propriedades}}.

Para uma discussão de ida e volta, use antes a conversa de respostas de qualquer anotação: ver [Estados e respostas](topic:statuses-and-replies).
