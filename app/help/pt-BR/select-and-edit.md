---
title: Selecionar, mover e alterar marcações
summary: Escolha marcações clicando ou com uma janela; mova, redimensione, ajuste fino, recorte, copie, cole, cole no mesmo local, duplique, exclua e desfaça.
keywords: selecionar, seleção, selecionar tudo, limpar seleção, janela, cruzamento, mover, redimensionar, grips, alças, ajuste fino, recortar, copiar, colar, colar no mesmo local, duplicar, área de transferência, outra aba, excluir, desfazer, refazer, editar
from: 62c7def3
---

Escolha primeiro {{ui:Selecionar}} ({{key:V}}). Pressionar {{key:Esc}} também leva até lá: a primeira pressão limpa a seleção, e a seguinte volta para {{ui:Selecionar}}.

## Escolher marcações

:::mouse
- **Uma marcação:** clique nela. Uma caixa tracejada e alças aparecem, e {{ui:Propriedades}} a mostra.
- **Adicionar ou remover uma:** segure {{key:Shift}} e clique.
- **Totalmente dentro de uma janela:** arraste da esquerda para a direita em uma parte vazia da folha. Só as marcações totalmente dentro da caixa são escolhidas (contorno sólido).
- **Tocando uma janela:** arraste da direita para a esquerda. Tudo o que a caixa toca é escolhido (contorno verde tracejado).
- **Tudo nesta folha:** {{key:Mod+A}}, ou {{ui:Mais}} e depois {{ui:Selecionar tudo}} no grupo {{ui:Editar}} da barra de ferramentas.
- **Nada:** clique em um ponto vazio, pressione {{key:Esc}}, ou {{ui:Mais}} e depois {{ui:Limpar seleção}}.
:::

:::touch
- **Uma marcação:** toque nela.
- **Várias:** arraste um dedo por uma parte vazia da folha para desenhar uma janela. Da esquerda para a direita escolhe o que está totalmente dentro; da direita para a esquerda escolhe o que ela toca.
- Tocar com {{key:Shift}} pressionado só funciona com um teclado conectado. Sem ele, use uma janela.
- Um dedo nunca move a folha em {{ui:Selecionar}}; use dois dedos, ou a ferramenta {{ui:Pan}}.
:::

Comentários somente leitura que vieram com o arquivo mostram uma caixa tracejada cinza e nenhuma alça. Podem ser escolhidos e respondidos, mas não alterados.

## Mover e redimensionar

- **Mover:** arraste uma marcação selecionada. Segure {{key:Shift}} para mover somente em múltiplos de 45°. Várias marcações selecionadas se movem juntas.
- **Redimensionar:** com uma marcação selecionada, arraste uma alça. Alças quadradas redimensionam a caixa (segure {{key:Shift}} para manter as proporções); alças redondas movem um ponto de canto de uma linha, polilinha, polígono, nuvem ou medição (segure {{key:Shift}} para 45°); alças em losango movem a ponta e a dobra de uma chamada. Traços de caneta são escalados a partir da caixa.
- **Ajuste fino:** pressione as setas para mover a seleção um pixel da tela; segure {{key:Shift}} para dez. Cada pressão é um passo de desfazer.

## Alterar o texto ou a aparência

- **Texto, chamadas e notas:** clique duas vezes na marcação, ou pressione {{key:Enter}}, ou escolha {{ui:Editar na folha}} em {{ui:Propriedades}}. Digite e depois clique fora ou pressione {{key:Mod+Enter}}. {{key:Esc}} cancela a edição.
- **Carimbos:** escolha outro carimbo em {{ui:Propriedades}} (clicar duas vezes abre {{ui:Propriedades}} para você).
- **Estilo:** {{ui:Cor}}, {{ui:Espessura da linha}}, {{ui:Preenchimento}}, {{ui:Opacidade}} e {{ui:Tamanho do texto}} em "Estilo" em {{ui:Propriedades}}. Com várias selecionadas, {{ui:Propriedades}} mostra os tipos que você escolheu e altera todos de uma vez.

## Copiar, colar e duplicar

O grupo {{ui:Editar}} da barra de ferramentas tem {{ui:Copiar}} e {{ui:Colar}}; o menu {{ui:Mais}} tem todos estes, cada um com a sua tecla.

| Comando | Tecla | O que faz |
|---|---|---|
| {{ui:Recortar}} | {{key:Mod+X}} | Copia as marcações selecionadas e as exclui |
| {{ui:Copiar}} | {{key:Mod+C}} | Copia as marcações selecionadas |
| {{ui:Colar}} | {{key:Mod+V}} | Coloca uma cópia na folha em que você está (onde, abaixo) |
| {{ui:Colar no mesmo local}} | {{key:Mod+Shift+V}} | Coloca a cópia exatamente no lugar de onde foi copiada: na mesma folha, sobre o original; em outra folha, no mesmo lugar do papel |
| {{ui:Duplicar}} | {{key:Mod+D}} | Faz uma cópia da seleção um pouco abaixo e à direita, sem alterar o que você copiou antes |

**Onde o Colar põe a cópia:**

- {{key:Mod+V}} com o ponteiro na folha coloca a cópia centralizada onde está o ponteiro. Mova o ponteiro, pressione {{key:Mod+V}} de novo, e você coloca outra.
- O botão {{ui:Colar}} (quando o ponteiro está na barra de ferramentas), ou {{key:Mod+V}} com o ponteiro fora da folha, coloca a cópia um pouco abaixo e à direita do original. Cada colagem da mesma cópia avança um pouco mais, então as cópias nunca se escondem umas às outras. Em outra folha, a primeira colagem cai onde estava o original na folha dele. Se esse ponto estiver fora da vista, a cópia cai no meio da vista.
- Para que {{key:Mod+V}} sempre cole ao lado do original, escolha {{ui:Ao lado da cópia}} em {{ui:Colar}} nas [configurações do MarkupCraft](topic:settings).

As marcações coladas ficam selecionadas, então você pode arrastá-las logo em seguida. Cada recorte, colagem ou duplicação é um passo de desfazer: {{key:Mod+Z}} desfaz a colagem inteira.

As cópias coladas são novas marcações: recebem seu nome, a data de hoje, o status Aberto, nenhum número de pendência e uma conversa vazia. Tipo, forma, estilo, texto e comentário são mantidos. Comentários somente leitura que vieram com o arquivo não podem ser copiados nem recortados.

**Entre abas do navegador:** o que você copia também fica guardado neste navegador, então outra aba do MarkupCraft no mesmo navegador pode colá-lo. Copiar marcações não usa a área de transferência do computador: você não consegue colá-las em outro programa, e texto copiado de outro lugar não é colado como marcação.

**Menu do botão direito:** clique com o botão direito em uma marcação (ou no papel vazio) para ver {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar aqui}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Salvar seleção como carimbo…}}, {{ui:Achatar na página ao salvar}}, {{ui:Inserir uma imagem aqui…}} e {{ui:Selecionar tudo}}. Clicar com o botão direito em uma marcação não selecionada a seleciona primeiro. Arrastar com o botão direito ainda faz pan. Em uma tela de toque, um toque longo em uma marcação abre o mesmo menu (sobre um texto, começa a editá-lo). A tecla de menu ou {{key:Shift+F10}} abre o menu na seleção.

Conteúdo da própria página selecionado com a ferramenta {{ui:Conteúdo}} também copia e cola: veja [Alterar as linhas, imagens e textos da própria página](topic:page-content).

Para copiar parte da página como imagem (um retângulo, uma elipse ou uma forma livre), ou como sobreposição transparente para outra folha ou aplicativo, veja [Copiar uma área da página, ou uma sobreposição](topic:copy-an-area).

## Excluir

Pressione {{key:Delete}} ou {{key:Backspace}}, escolha {{ui:Mais}} e depois {{ui:Excluir}} na barra de ferramentas, ou {{ui:Excluir}} em {{ui:Propriedades}}. A barra de status informa quantas foram excluídas. Comentários somente leitura do arquivo nunca são excluídos ("mantido como está no arquivo").

## Desfazer e refazer

- {{key:Mod+Z}} desfaz, e {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} refaz. A barra de ferramentas tem {{ui:Desfazer}} e {{ui:Refazer}}.
- A barra de status informa o que foi desfeito ("Desfeito: mover marcação.").
- Desfazer cobre cada alteração em marcações, status, respostas, itens de pendência, escalas de folhas e nomes de folhas, até 500 passos.
- O histórico é apagado quando você fecha o conjunto.

## Copiar marcações para outras folhas

Para colocar o mesmo carimbo, nota ou nuvem em várias folhas, selecione-o (ou várias marcações) e escolha {{ui:Copiar para outras folhas…}} em {{ui:Propriedades}}. Marque as folhas, ou {{ui:Todas as folhas}}, e escolha {{ui:Copiar}}. Cada folha recebe uma cópia no mesmo lugar da página, assinada com o seu nome. Um {{key:Mod+Z}} remove todas.
