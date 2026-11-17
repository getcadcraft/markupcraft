---
title: Teclado e rato
summary: Cada tecla, ação do rato e gesto de toque que o MarkupCraft reconhece, agrupados, mais os atalhos que o navegador mantém.
keywords: teclado, atalhos, teclas de atalho, teclas, rato, roda, clique com o botão direito, botão do meio, trackpad, toque, gestos, pinçar, espaço deslocar
from: 7bf207ec
---

Os atalhos escritos com {{key:Mod}} aceitam ⌘ ou Control num Mac, e Ctrl no Windows e no Linux. As letras das ferramentas só funcionam quando não está a escrever numa caixa; enquanto escreve, as letras são apenas letras. Veja também [Teclas, ratos e trackpads](common:keys).

## Ferramentas

| Tecla | Ferramenta |
|---|---|
| {{key:V}} | {{ui:Selecionar}} |
| {{key:H}} | {{ui:Deslocar}} |
| {{key:B}} | {{ui:Conteúdo}}: as linhas, imagens e texto próprios da página (veja [Alterar o conteúdo próprio da página](topic:page-content)) |
| {{key:P}} | {{ui:Caneta}} |
| {{key:I}} | {{ui:Realce}} |
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

{{ui:Calibrar}} não tem tecla: use o respetivo botão na barra de ferramentas ou o botão de escala na barra de estado. As letras das ferramentas são ignoradas enquanto {{key:Alt}} estiver premida.

## Durante o desenho

| Tecla ou ação | O que faz |
|---|---|
| {{key:Shift}} ao desenhar | Linhas, setas, comprimentos e lados de polilinhas em passos de 45°; retângulos, elipses e nuvens de caixa ficam quadrados; caneta e realce fazem um único traço reto |
| Duplo clique, {{key:Enter}} ou clique com o botão direito | Termina uma polilinha, um polígono, uma nuvem livre ou uma área |
| {{key:Backspace}} | Remove o último ponto de uma polilinha, polígono, nuvem livre ou área |
| {{key:Esc}} | Cancela o que está a desenhar; sem nada em curso, limpa a seleção; sem nada selecionado, volta a {{ui:Selecionar}} |
| {{key:Mod+Enter}} | Termina a escrita numa caixa de texto, chamada ou nota (ou clique fora dela) |
| {{key:Esc}} ao escrever | Cancela o texto que estava a escrever |
| {{key:Shift}}-clique com {{ui:Contagem}} | Remove o ponto mais próximo do grupo de contagem selecionado |

## Selecionar e editar

| Tecla ou ação | O que faz |
|---|---|
| Clique | Seleciona uma anotação |
| {{key:Shift}}-clique | Adiciona ou remove uma anotação da seleção |
| Arrastar da esquerda para a direita numa folha vazia | Seleciona o que fica totalmente dentro da janela |
| Arrastar da direita para a esquerda numa folha vazia | Seleciona o que a janela toca |
| {{key:Mod+A}} | Seleciona todas as anotações desta folha |
| Arrastar uma anotação selecionada | Move-a ({{key:Shift}}: em passos de 45°) |
| Arrastar uma pega | Redimensiona ou remodela ({{key:Shift}}: mantém as proporções, ou 45°) |
| Teclas de seta | Desloca a seleção um pixel do ecrã ({{key:Shift}}: dez) |
| Duplo clique, ou {{key:Enter}} | Edita o texto de uma caixa de texto, chamada ou nota; num carimbo, abre {{ui:Propriedades}} |
| {{key:Delete}} ou {{key:Backspace}} | Elimina a seleção |
| {{key:Esc}} | Não seleciona nada |
| {{key:Mod+Z}} | {{ui:Anular}} |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | {{ui:Refazer}} |

## Cortar, copiar e colar

Os mesmos comandos estão no grupo {{ui:Editar}} da barra de ferramentas ({{ui:Copiar}}, {{ui:Colar}}) e no menu {{ui:Mais}}, cada um com a sua tecla. Cada um é um único passo de anulação. Veja [Copiar, colar e duplicar](topic:select-and-edit#copy-paste-and-duplicate).

| Tecla | O que faz |
|---|---|
| {{key:Mod+X}} | Cortar: copia a seleção e elimina-a |
| {{key:Mod+C}} | Copia a seleção |
| {{key:Mod+V}} | Colar. Com o ponteiro sobre a folha, a cópia fica centrada no ponto para onde aponta; caso contrário, ao lado do original. As {{ui:Definições}} podem fazer com que cole sempre ao lado do original. |
| {{key:Mod+Shift+V}} | Colar no mesmo sítio: o mesmo local na folha, nesta folha ou noutra |
| {{key:Mod+D}} | Duplica a seleção ao lado dela (a área de transferência não é alterada) |

## Ajuda

| Tecla | O que faz |
|---|---|
| {{key:F1}} | Abre ou fecha esta ajuda (um painel ao lado; a folha continua utilizável). Também {{ui:Ajuda}} na barra superior. |
| {{key:Esc}} na ajuda | Fecha a ajuda |

:::mac
Na maioria dos teclados Mac, prima {{key:F1}} com **fn** (ou a tecla do globo), ou use {{ui:Ajuda}}. Veja [Teclas, ratos e trackpads](common:keys#function-keys-on-a-mac).
:::

## Ficheiros e folhas

| Tecla | O que faz |
|---|---|
| {{key:Mod+N}} | Novas páginas em branco (quando o navegador deixa a página usar a tecla; veja [Começar com páginas em branco](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Abre PDF |
| {{key:Mod+P}} | Imprimir (veja [Imprimir e alterar as páginas](topic:pages-and-printing)) |
| {{key:Mod+F}} | Procura texto nos desenhos (veja [Procurar texto](topic:find-text)) |
| {{key:Mod}}+clique numa anotação com ligação | Segue a ligação de folha; {{key:Alt+Left}} volta atrás (veja [Ligações de folhas](topic:sheet-links)) |
| {{key:Mod+S}} | Guarda uma cópia anotada |
| {{key:PageDown}} / {{key:PageUp}} | Folha seguinte / anterior |
| {{key:Enter}} em {{ui:Procurar folhas}} | Abre a primeira folha correspondente |
| {{key:Mod+Enter}} em {{ui:Escreva uma resposta}} | Envia a resposta |

## Zoom e deslocamento

| Tecla ou ação | O que faz |
|---|---|
| Roda do rato | Aproxima ou afasta em torno do ponteiro (a roda nunca desloca a vista) |
| {{key:Ctrl}} + roda | Aproxima ou afasta mais depressa |
| {{key:Plus}} ou {{key:Minus}} (também com {{key:Mod}}) | Aproxima ou afasta a partir do centro; {{key:=}} funciona como mais |
| {{key:Mod+0}} | {{ui:Ajustar página}} |
| {{key:Mod+9}} | {{ui:Ajustar largura}} |
| Arrastar com o botão do meio | Deslocar |
| Arrastar com o botão direito | Deslocar (quando não está a meio de uma polilinha) |
| Manter {{key:Space}} premida e arrastar | Deslocar |
| Teclas de seta sem nada selecionado | Deslocar |
| {{key:Ctrl+Shift+F}} | Modo de ecrã: normal, ecrã inteiro, ecrã inteiro com as barras ocultas (tecla Control em todos os computadores) |

:::mac
**Num trackpad:** o deslocamento com dois dedos aproxima. Pinçar também aproxima no Chrome, Edge e Firefox. Desloque com {{key:Space}} premida enquanto arrasta, ou com a ferramenta {{ui:Deslocar}}. Um clique com dois dedos é um clique com o botão direito e termina uma polilinha. Aqui, o Control-clique pode atuar como um clique simples em vez de um clique com o botão direito, por isso use um clique com dois dedos.
:::

:::touch
## Toque

| Gesto | O que faz |
|---|---|
| Um dedo | Desenha com a ferramenta atual, ou seleciona |
| Dois dedos | Pinçar para aproximar em torno do centro; mover para deslocar |
| Segundo dedo durante um traço | Cancela o traço e aproxima em vez disso |
| Duplo toque | Termina uma polilinha, um polígono, uma nuvem livre ou uma área |

Os pontos de contagem, as notas, os pontos de polilinha e o segundo ponto de uma ferramenta de dois pontos são colocados quando o dedo se levanta. Veja [Rever num iPad ou ecrã tátil](topic:review-on-a-tablet).
:::

## Atalhos que o navegador mantém

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} e {{key:Mod+Q}} pertencem ao navegador. Fechar o separador ou a janela com anotações não guardadas faz perdê-las, depois da pergunta «Sair do site?» do navegador, num computador.
- A maioria dos navegadores mantém {{key:Mod+N}} para uma nova janela; por isso, num separador do navegador, use {{ui:Novo}} na barra de ferramentas. A aplicação de ambiente de trabalho e o Studio passam a tecla ao MarkupCraft.
- O MarkupCraft retira ao navegador {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} e {{key:Mod+Minus}} enquanto a aplicação tem o teclado, e {{key:Mod+C}} e {{key:Mod+X}} enquanto houver anotações selecionadas. {{key:Mod+,}} abre {{ui:Definições}}. Para aproximar toda a página do navegador, use o menu do navegador.
- {{key:Mod+9}} salta, em alguns navegadores, para o último separador do navegador antes de o MarkupCraft o ver. Se isso acontecer, use {{ui:Ajustar largura}} por baixo da folha.
- {{key:Esc}} em ecrã inteiro também sai do ecrã inteiro.

## Quando uma tecla não faz nada

- **Está a escrever numa caixa.** Clique primeiro na folha. (Um clique com uma ferramenta de desenho desenha; prima depois {{key:Esc}} ou use {{key:Mod+Z}}.)
- **Há uma caixa de diálogo aberta.** As teclas vão para a caixa de diálogo até ela fechar.
- **Acabou de clicar num botão da barra de ferramentas**, e as teclas de seta ou {{key:Space}} atuam nesse botão. Mova o ponteiro sobre a folha e use a roda ou o botão do meio, ou prima a letra de uma ferramenta em vez de clicar nos botões.

## Onde fica Mover

Não existe um comando Mover: selecione uma anotação e arraste-a ({{key:Shift}} mantém os passos de 45°). Um marcador move-se com {{ui:Mover marcador}}, e uma página com {{ui:Mover página para trás}} ou {{ui:Mover página para a frente}}.
