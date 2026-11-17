---
title: Menus, teclas e rato
summary: Escolha a barra de ferramentas do próprio MarkupCraft, uma barra de menus de revisão de PDF ou um friso, atribua a qualquer ferramenta a sua própria tecla, mova ferramentas entre menus e defina o que a roda e os botões do rato fazem.
keywords: estilo de menu, menus, barra de menus, barra de ferramentas, friso, separadores, revisão de PDF, atalhos de teclado, teclas de atalho, teclas, personalizar, redefinir teclas, rato, roda, inverter, sentido do zoom, botão do meio, botão direito, deslocar, exportar, importar, alternar, familiar
from: 081438a6
---

As ferramentas do MarkupCraft são as mesmas, qualquer que seja o caminho para lá chegar. Um **estilo de menu** só decide onde ficam no ecrã, como se chamam ali e com que teclas são escolhidas. Escolha um em {{ui:Definições}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, teclas e rato}}; a alteração é imediata, e este navegador lembra-se dela.

## Os três estilos

| Estilo | O que obtém |
|---|---|
| {{ui:MarkupCraft}} | A barra de ferramentas própria do MarkupCraft (Ficheiro, Selecionar, Desenhar, Rever, Anotar, Medir, Editar) e as suas teclas de uma letra: {{key:V}} selecionar, {{key:H}} deslocar, {{key:P}} caneta, {{key:I}} realce, {{key:L}} linha, {{key:A}} seta, {{key:R}} retângulo, {{key:E}} elipse, {{key:C}} nuvem, {{key:K}} chamada, {{key:T}} texto, {{key:N}} nota, {{key:S}} carimbo, {{key:M}} comprimento, {{key:Q}} área, {{key:U}} contagem. O ponto de partida. |
| {{ui:Revisão de PDF}} | Uma barra de menus ({{ui:Ficheiro}}, {{ui:Editar}}, {{ui:Ver}}, {{ui:Documento}}, {{ui:Anotação}}, {{ui:Medir}}, {{ui:Revisão}}, {{ui:Janela}}) sobre uma linha de ferramentas de revisão, com teclas definidas como os programas de revisão de PDF as definem: {{key:V}} selecionar, {{key:Shift+V}} deslocar, {{key:H}} realce, {{key:Q}} chamada, {{key:N}} polígono, {{key:Shift+N}} polilinha, {{key:Shift+T}} nota, {{key:Shift+A}} arco, e as medições em {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrar, {{key:Alt+Shift+L}} comprimento, {{key:Alt+Shift+G}} ângulo, {{key:Alt+Shift+A}} área, {{key:Alt+Shift+C}} contagem. {{key:Alt+L}} abre a lista de anotações. O botão do meio desloca; um clique com o botão direito não. |
| {{ui:Friso}} | Separadores com nomes do trabalho: {{ui:Anotar}} (selecionar, desenhar, nuvens, chamadas, texto, notas, carimbos), {{ui:Medir}}, {{ui:Editar}}, {{ui:Revisão}} (a lista de anotações e as suas exportações, questões BCF, a lista de anomalias, registos de campo, o baú de ferramentas, comparar), {{ui:Páginas}} e {{ui:Ver}}, com {{ui:Ficheiro}} e botões rápidos para abrir, guardar, anular e refazer. As ferramentas mantêm as teclas de uma letra do MarkupCraft. Um botão de um painel que não está aberto abre primeiro esse painel. |

Todos os estilos mantêm as teclas {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} ajustar página e {{key:Mod+9}} ajustar largura; {{key:PageUp}} e {{key:PageDown}} mudam de folha.

:::tip
Uma tecla que pertence ao layout próprio do MarkupCraft, mas não ao estilo escolhido, não faz nada, e a barra de estado diz para onde foi a sua ferramenta («Em Revisão de PDF, Chamada é Q»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas mantêm sempre o seu sentido. Enquanto escreve numa caixa de texto, chamada ou nota, cada tecla é do texto, e os números escritos ao desenhar continuam a abrir a caixa de comprimento.
:::

## Personalize-o

1. Escolha o estilo mais próximo do que quer e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre uma ferramenta (a caixa de pesquisa ajuda). Escolha {{ui:Adicionar uma tecla}} e prima a tecla, ou duas teclas seguidas para uma tecla de duas letras. Clique numa tecla para a remover.
3. Com a barra de menus, {{ui:Onde fica}} move a ferramenta para outro menu, ou para {{ui:Só teclas}}.
4. Em {{ui:Rato}}, defina a roda e os botões que deslocam a folha.
5. Dê-lhe um nome e clique em {{ui:Guardar}}.

Guardar um estilo incorporado cria uma cópia sua («Minha revisão de PDF»); o estilo incorporado nunca muda. Uma tecla atribuída a duas ferramentas aparece a vermelho e tem de ser corrigida antes de poder guardar.

## Rato

- **Roda do rato**: {{ui:Rodar para cima aproxima}} (a predefinição) ou {{ui:Rodar para cima afasta}}, e a velocidade. Pinçar no trackpad aproxima sempre no sentido em que os dedos se movem.
- **Deslocar a folha com**: o botão do meio, o botão direito, ou ambos. {{key:Space}} e arrastar, e a ferramenta {{ui:Deslocar}}, deslocam sempre; o botão esquerdo desenha e seleciona de resto, por isso marcá-lo não muda nada aqui.
- O MarkupCraft não tem vista 3D, por isso os botões 3D não fazem nada aqui.

## Leve-o consigo

{{ui:Exportar}} guarda o estilo em uso como um pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} acrescenta um, de outro computador ou de um colega. Um ficheiro importado só pode apontar para as ferramentas do próprio MarkupCraft: tudo o resto é deixado de fora e contado na barra de estado. {{ui:Eliminar este estilo}} remove um dos seus.

:::note
Estas definições ficam neste navegador. {{ui:Utilizar este estilo em todas as aplicações}}, sob os cartões de estilo, faz com que cada aplicação abra no estilo correspondente: {{ui:Revisão de PDF}} fica associado aos estilos de barra de menus das outras aplicações, {{ui:Friso}} aos seus frisos, e a barra de ferramentas do MarkupCraft à delas. Uma aplicação sem estilo correspondente mantém o seu.
:::

:::tip
As disposições de espaço de trabalho em {{ui:Definições}} › {{ui:Global}} › {{ui:Esquema}} ({{ui:Friso e navegador de projeto}}, {{ui:Caixa de ferramentas e caixa de informação}}) constroem o friso a partir dos separadores do estilo {{ui:Friso}}, e a caixa de ferramentas a partir da barra de ferramentas do MarkupCraft, para que cada ferramenta funcione da mesma forma nelas.
:::

Relacionados: [Teclado e rato](topic:keyboard) · [Definições do MarkupCraft](topic:settings) · [Vir de outro software de anotação](topic:coming-from)
