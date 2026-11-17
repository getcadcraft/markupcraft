---
title: Teclado e mouse
summary: Cada tecla, ação do mouse e gesto de toque que o MarkupCraft entende, agrupados, além dos atalhos que o navegador mantém.
keywords: teclado, atalhos, teclas de atalho, teclas, mouse, roda, clique com o botão direito, botão do meio, trackpad, toque, gestos, pinça, pan com espaço
from: 7bf207ec
---

Atalhos escritos com {{key:Mod}} funcionam com ⌘ ou Control em um Mac, e com Ctrl no Windows e no Linux. As letras das ferramentas funcionam somente quando você não está digitando em uma caixa; enquanto você digita, as letras são apenas letras. Veja também [Teclas, mouses e trackpads](common:keys).

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:V}} | {{ui:Selecionar}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Conteúdo}}: as linhas, imagens e textos próprios da página (veja [Alterar o conteúdo da página](topic:page-content)) |
| {{key:P}} | {{ui:Caneta}} |
| {{key:I}} | {{ui:Destaque}} |
| {{key:L}} | {{ui:Linha}} |
| {{key:A}} | {{ui:Seta}} |
| {{key:R}} | {{ui:Retângulo}} |
| {{key:E}} | {{ui:Elipse}} |
| {{key:Y}} | {{ui:Polilinha}} |
| {{key:G}} | {{ui:Polígono}} |
| {{key:C}} | {{ui:Nuvem}} (arraste uma caixa) |
| {{key:Shift+C}} | {{ui:Nuvem livre}} |
| {{key:K}} | {{ui:Chamada}} |
| {{key:T}} | {{ui:Texto}} |
| {{key:N}} | {{ui:Nota}} |
| {{key:S}} | {{ui:Carimbo}} |
| {{key:M}} | {{ui:Comprimento}} |
| {{key:Q}} | {{ui:Área}} |
| {{key:U}} | {{ui:Contagem}} |
| {{key:O}} | {{ui:Arco}} |
| {{key:X}} | {{ui:Ângulo}} |

{{ui:Calibrar}} não tem tecla: use o botão dele na barra de ferramentas ou o botão de escala na barra de status. As letras das ferramentas são ignoradas quando {{key:Alt}} está pressionada.

## Durante o desenho

| Tecla ou ação | O que faz |
|---|---|
| {{key:Shift}} durante o desenho | Linhas, setas, comprimentos e lados de polilinha em passos de 45°; retângulos, elipses e nuvens de caixa ficam quadrados; caneta e destaque fazem um único traço reto |
| Clique duplo, {{key:Enter}} ou clique com o botão direito | Finaliza uma polilinha, um polígono, uma nuvem livre ou uma área |
| {{key:Backspace}} | Remove o último ponto de uma polilinha, polígono, nuvem livre ou área |
| {{key:Esc}} | Cancela o que você está desenhando; sem nada em andamento, limpa a seleção; sem nada selecionado, volta para {{ui:Selecionar}} |
| {{key:Mod+Enter}} | Termina de digitar em uma caixa de texto, chamada ou nota (ou clique fora dela) |
| {{key:Esc}} ao digitar | Cancela o texto que você estava digitando |
| {{key:Shift}}-clique com {{ui:Contagem}} | Remove o ponto mais próximo do grupo de contagem selecionado |

## Seleção e edição

| Tecla ou ação | O que faz |
|---|---|
| Clique | Seleciona uma marcação |
| {{key:Shift}}-clique | Adiciona ou remove uma marcação da seleção |
| Arrastar da esquerda para a direita em uma folha vazia | Seleciona o que está totalmente dentro da janela |
| Arrastar da direita para a esquerda em uma folha vazia | Seleciona tudo o que a janela toca |
| {{key:Mod+A}} | Seleciona todas as marcações desta folha |
| Arrastar uma marcação selecionada | Move a marcação ({{key:Shift}}: em passos de 45°) |
| Arrastar uma alça | Redimensiona ou remodela ({{key:Shift}}: mantém as proporções, ou 45°) |
| Teclas de seta | Desloca a seleção um pixel da tela ({{key:Shift}}: dez pixels) |
| Clique duplo, ou {{key:Enter}} | Edita o texto de uma caixa de texto, chamada ou nota; para um carimbo, abre {{ui:Propriedades}} |
| {{key:Delete}} ou {{key:Backspace}} | Apaga a seleção |
| {{key:Esc}} | Não seleciona nada |
| {{key:Mod+Z}} | Desfazer |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |

## Recortar, copiar e colar

Os mesmos comandos estão no grupo {{ui:Editar}} da barra de ferramentas ({{ui:Copiar}}, {{ui:Colar}}) e no menu {{ui:Mais}}, cada um com a sua tecla. Cada um é uma única etapa de desfazer. Veja [Copiar, colar e duplicar](topic:select-and-edit#copy-paste-and-duplicate).

| Tecla | O que faz |
|---|---|
| {{key:Mod+X}} | Recortar: copia a seleção e a apaga |
| {{key:Mod+C}} | Copia a seleção |
| {{key:Mod+V}} | Colar. Com o ponteiro sobre a folha, a cópia cai centralizada onde ele aponta; caso contrário, ao lado do original. As configurações podem fazer com que ela sempre seja colada ao lado do original. |
| {{key:Mod+Shift+V}} | Colar no mesmo local: o mesmo ponto da folha, nesta folha ou em outra |
| {{key:Mod+D}} | Duplica a seleção ao lado dela (a área de transferência não é alterada) |

## Ajuda

| Tecla | O que faz |
|---|---|
| {{key:F1}} | Abre ou fecha esta ajuda (um painel na lateral; a folha continua utilizável). Também {{ui:Ajuda}} na barra do topo. |
| {{key:Esc}} na ajuda | Fecha a ajuda |

:::mac
Na maioria dos teclados de Mac, pressione {{key:F1}} com **fn** (ou a tecla de globo), ou use {{ui:Ajuda}}. Veja [Teclas, mouses e trackpads](common:keys#function-keys-on-a-mac).
:::

## Arquivos e folhas

| Tecla | O que faz |
|---|---|
| {{key:Mod+N}} | Novas páginas em branco (quando o navegador deixa a página usar a tecla; veja [Começar com páginas em branco](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Abre PDFs |
| {{key:Mod+P}} | Imprime (veja [Imprimir e alterar as páginas](topic:pages-and-printing)) |
| {{key:Mod+F}} | Localiza texto nos desenhos (veja [Localizar texto](topic:find-text)) |
| {{key:Mod}}+clique em uma marcação com link | Segue o link para a folha; {{key:Alt+Left}} volta (veja [Links entre folhas](topic:sheet-links)) |
| {{key:Mod+S}} | Salva uma cópia marcada |
| {{key:PageDown}} / {{key:PageUp}} | Próxima / folha anterior |
| {{key:Enter}} em {{ui:Buscar folhas}} | Abre a primeira folha correspondente |
| {{key:Mod+Enter}} em {{ui:Escreva uma resposta}} | Envia a resposta |

## Zoom e pan

| Tecla ou ação | O que faz |
|---|---|
| Roda do mouse | Aproxima ou afasta em torno do ponteiro (a roda nunca rola a página) |
| {{key:Ctrl}} + roda | Zoom mais rápido |
| {{key:Plus}} ou {{key:Minus}} (também com {{key:Mod}}) | Aproxima ou afasta no centro; {{key:=}} funciona como mais |
| {{key:Mod+0}} | {{ui:Ajustar página}} |
| {{key:Mod+9}} | {{ui:Ajustar largura}} |
| Arrastar com o botão do meio | Pan |
| Arrastar com o botão direito | Pan (quando você não está no meio de uma polilinha) |
| Segurar {{key:Space}} e arrastar | Pan |
| Teclas de seta sem nada selecionado | Pan |
| {{key:Ctrl+Shift+F}} | Modo de tela: normal, tela cheia, tela cheia com barras ocultas (tecla Control em todos os computadores) |

:::mac
**No trackpad:** a rolagem com dois dedos faz zoom. A pinça também faz zoom no Chrome, Edge e Firefox. Faça pan segurando {{key:Space}} enquanto arrasta, ou use a ferramenta {{ui:Pan}}. Um clique com dois dedos é um clique com o botão direito e finaliza uma polilinha. Control-clique pode funcionar aqui como um clique simples, e não como botão direito; por isso use o clique com dois dedos.
:::

:::touch
## Toque

| Gesto | O que faz |
|---|---|
| Um dedo | Desenha com a ferramenta atual, ou seleciona |
| Dois dedos | Pinça para dar zoom em torno do meio deles; mover para fazer pan |
| Segundo dedo durante um traço | Cancela o traço e dá zoom em vez disso |
| Toque duplo | Finaliza uma polilinha, polígono, nuvem livre ou área |

Contagens de pontos, notas, pontos de polilinha e o segundo ponto de uma ferramenta de dois pontos são colocados quando o dedo sai da tela. Veja [Revisar em um iPad ou tela sensível ao toque](topic:review-on-a-tablet).
:::

## Atalhos que o navegador mantém

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} e {{key:Mod+Q}} pertencem ao navegador. Fechar a aba ou a janela com marcações não salvas as perde, depois da pergunta "Sair do site?" do navegador, em computadores.
- A maioria dos navegadores mantém {{key:Mod+N}} para uma nova janela; por isso, em uma aba do navegador, use {{ui:Novo}} na barra de ferramentas. O aplicativo de desktop e o Studio passam a tecla para o MarkupCraft.
- O MarkupCraft tira do navegador {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} e {{key:Mod+Minus}} enquanto o aplicativo tem o teclado, e {{key:Mod+C}} e {{key:Mod+X}} enquanto há marcações selecionadas. {{key:Mod+,}} abre {{ui:Configurações}}. Para dar zoom em toda a página do navegador, use o menu do navegador.
- {{key:Mod+9}} pode levar à última aba do navegador em alguns navegadores antes que o MarkupCraft o receba. Se isso acontecer, use {{ui:Ajustar largura}} abaixo da folha.
- {{key:Esc}} em tela cheia também sai da tela cheia.

## Quando uma tecla não faz nada

- **Você está digitando em uma caixa.** Clique na folha primeiro. (Um clique com uma ferramenta de desenho desenha; pressione {{key:Esc}} depois ou use {{key:Mod+Z}}.)
- **Uma caixa de diálogo está aberta.** As teclas vão para a caixa até ela fechar.
- **Você acabou de clicar em um botão da barra de ferramentas** e as teclas de seta ou {{key:Space}} agem sobre esse botão. Mova o ponteiro sobre a folha e use a roda ou o botão do meio, ou pressione uma letra de ferramenta em vez de clicar em botões.

## Onde fica Mover

Não há comando Mover: selecione uma marcação e arraste-a ({{key:Shift}} mantém passos de 45°). Um marcador é movido com {{ui:Mover marcador}}, e uma página com {{ui:Mover página para antes}} ou {{ui:Mover página para depois}}.
