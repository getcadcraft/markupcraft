---
title: Menus, teclas e mouse
summary: Escolha a barra de ferramentas própria do MarkupCraft, uma barra de menus de revisão de PDF ou uma faixa de opções, dê a qualquer ferramenta a sua própria tecla, mova ferramentas entre menus e defina o que a roda e os botões do mouse fazem.
keywords: estilo de menu, menus, barra de menus, barra de ferramentas, faixa de opções, abas, revisão de pdf, atalhos de teclado, teclas de atalho, teclas, personalizar, remapear, redefinir teclas, mouse, roda, inverter, direção do zoom, botão do meio, botão direito, pan, exportar, importar, alternar, familiar
from: 081438a6
---

As ferramentas do MarkupCraft são as mesmas por qualquer caminho que você use para chegar até elas. Um **estilo de menu** só decide onde elas ficam na tela, como são chamadas ali e quais teclas as acionam. Escolha um em {{ui:Configurações}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, teclas e mouse}}; a mudança é imediata, e este navegador a lembra.

## Os três estilos

| Estilo | O que você recebe |
|---|---|
| {{ui:MarkupCraft}} | A barra de ferramentas própria do MarkupCraft ({{ui:Arquivo}}, {{ui:Selecionar}}, Desenhar, Revisar, Anotar, {{ui:Medir}}, {{ui:Editar}}) e as suas teclas de uma letra: {{key:V}} selecionar, {{key:H}} pan, {{key:P}} caneta, {{key:I}} destaque, {{key:L}} linha, {{key:A}} seta, {{key:R}} retângulo, {{key:E}} elipse, {{key:C}} nuvem, {{key:K}} chamada, {{key:T}} texto, {{key:N}} nota, {{key:S}} carimbo, {{key:M}} comprimento, {{key:Q}} área, {{key:U}} contagem. O ponto de partida. |
| {{ui:Revisão de PDF}} | Uma barra de menus ({{ui:Arquivo}}, {{ui:Editar}}, {{ui:Exibir}}, {{ui:Documento}}, {{ui:Marcação}}, {{ui:Medir}}, {{ui:Revisão}}, {{ui:Janela}}) sobre uma fileira de ferramentas de revisão, com teclas definidas como as dos programas de revisão de PDF: {{key:V}} selecionar, {{key:Shift+V}} pan, {{key:H}} destaque, {{key:Q}} chamada, {{key:N}} polígono, {{key:Shift+N}} polilinha, {{key:Shift+T}} nota, {{key:Shift+A}} arco, e as medições em {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrar, {{key:Alt+Shift+L}} comprimento, {{key:Alt+Shift+G}} ângulo, {{key:Alt+Shift+A}} área, {{key:Alt+Shift+C}} contagem. {{key:Alt+L}} abre a lista de marcações. O botão do meio faz pan; um clique com o botão direito não faz. |
| {{ui:Faixa de opções}} | Abas nomeadas pelo trabalho: {{ui:Marcar}} (selecionar, desenhar, nuvens, chamadas, texto, notas, carimbos), {{ui:Medir}}, {{ui:Editar}}, {{ui:Revisão}} (a lista de marcações e as suas exportações, problemas BCF, a lista de pendências, registros de campo, a caixa de ferramentas, comparar), {{ui:Páginas}} e {{ui:Exibir}}, com {{ui:Arquivo}} e botões rápidos para abrir, salvar, desfazer e refazer. As ferramentas mantêm as teclas de uma letra próprias do MarkupCraft. Um botão para um painel que não está aberto abre esse painel primeiro. |

Todos os estilos mantêm as teclas {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} para ajustar página e {{key:Mod+9}} para ajustar largura; {{key:PageUp}} e {{key:PageDown}} mudam de folha.

:::tip
Uma tecla que pertence ao layout próprio do MarkupCraft, mas não ao estilo escolhido, não faz nada, e a barra de status diz para onde foi a ferramenta dela ("Em revisão de PDF, Chamada é Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas sempre mantêm o seu significado. Enquanto você digita em uma caixa de texto, chamada ou nota, toda tecla é do texto; e números digitados enquanto desenha ainda abrem a caixa de comprimento.
:::

## Faça do seu jeito

1. Escolha o estilo mais próximo do que você quer e depois clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre uma ferramenta (a caixa de busca ajuda). Clique em {{ui:Adicionar uma tecla}} e pressione a tecla, ou duas teclas em sequência para uma tecla de duas letras. Clique em uma tecla para removê-la.
3. Com a barra de menus, {{ui:Onde fica}} move a ferramenta para outro menu, ou para {{ui:Somente teclas}}.
4. Em {{ui:Mouse}}, defina a roda e os botões que fazem pan na folha.
5. Dê um nome e clique em {{ui:Salvar}}.

Salvar um estilo embutido cria a sua cópia ("Minha revisão de PDF"); o embutido nunca muda. Uma tecla atribuída a duas ferramentas aparece em vermelho e precisa ser corrigida antes de salvar.

## Mouse

- **Roda do mouse**: {{ui:Rolar para cima aproxima}} (o início) ou {{ui:Rolar para cima afasta}}, e a velocidade. Uma pinça no trackpad sempre dá zoom no sentido em que os dedos se movem.
- **Faça pan na folha com**: o botão do meio, o botão direito, ou ambos. {{key:Space}} e arrastar, e a ferramenta {{ui:Pan}}, sempre fazem pan; o botão esquerdo desenha e seleciona de qualquer forma, então marcá-lo não muda nada aqui.
- O MarkupCraft não tem visão 3D, então os botões 3D não fazem nada aqui.

## Leve com você

{{ui:Exportar}} salva o estilo em uso como um pequeno arquivo `.ccinput.json`; {{ui:Importar…}} adiciona um, de outro computador ou de um colega. Um arquivo importado só pode apontar para as ferramentas do próprio MarkupCraft: o que houver além disso é deixado de fora e contado na barra de status. {{ui:Excluir este estilo}} remove um dos seus.

:::note
Estas configurações ficam neste navegador. {{ui:Usar este estilo em todos os apps}} sob os cartões de estilo faz com que cada app abra no estilo correspondente: {{ui:Revisão de PDF}} combina com os estilos de barra de menus dos outros apps, {{ui:Faixa de opções}} com as faixas deles, e a barra de ferramentas própria do MarkupCraft com a deles. Um app sem um estilo correspondente mantém o seu.
:::

:::tip
Os layouts de espaço de trabalho em {{ui:Configurações}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Faixa de opções e navegador do projeto}}, {{ui:Caixa de ferramentas e caixa de informações}}) montam a faixa de opções a partir das abas do estilo {{ui:Faixa de opções}}, e a caixa de ferramentas a partir da barra de ferramentas do MarkupCraft, para que cada ferramenta funcione do mesmo jeito neles.
:::

Relacionados: [Teclado e mouse](topic:keyboard) · [Configurações do MarkupCraft](topic:settings) · [Vindo de outros softwares de marcação](topic:coming-from)
