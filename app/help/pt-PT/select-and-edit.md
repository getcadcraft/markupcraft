---
title: Selecionar, mover e alterar anotações
summary: Selecione anotações ao clicar ou com uma janela; mova, redimensione, desloque ligeiramente, recorte, copie, cole, cole no mesmo sítio, duplique, elimine e anule.
keywords: selecionar, seleção, selecionar tudo, limpar seleção, janela, cruzamento, mover, redimensionar, alças, pegas, deslocar, cortar, copiar, colar, colar no mesmo sítio, duplicar, área de transferência, outro separador, eliminar, anular, refazer, editar
from: 62c7def3
---

Escolha {{ui:Selecionar}} ({{key:V}}) primeiro. Também se chega lá com {{key:Esc}}: a primeira vez limpa a seleção, a seguinte volta a {{ui:Selecionar}}.

## Escolher anotações

:::mouse
- **Uma anotação:** clique nela. Aparecem uma caixa tracejada e alças, e {{ui:Propriedades}} mostra-a.
- **Adicionar ou remover uma:** mantenha {{key:Shift}} premido e clique.
- **Totalmente dentro de uma janela:** arraste da esquerda para a direita numa parte vazia da folha. Só ficam selecionadas as anotações totalmente dentro da caixa (contorno contínuo).
- **Ao tocar numa janela:** arraste da direita para a esquerda. Fica selecionado tudo o que a caixa tocar (contorno verde tracejado).
- **Tudo nesta folha:** {{key:Mod+A}}, ou {{ui:Mais}} e depois {{ui:Selecionar tudo}} no grupo {{ui:Editar}} da barra de ferramentas.
- **Nada:** clique num ponto vazio, prima {{key:Esc}}, ou {{ui:Mais}} e depois {{ui:Limpar seleção}}.
:::

:::touch
- **Uma anotação:** toque nela.
- **Várias:** arraste um dedo por uma parte vazia da folha para desenhar uma janela. Da esquerda para a direita escolhe o que está totalmente dentro; da direita para a esquerda escolhe o que toca.
- Tocar com {{key:Shift}} premido só funciona com um teclado ligado. Sem teclado, use uma janela.
- Um dedo nunca desloca a vista em {{ui:Selecionar}}; use dois dedos, ou a ferramenta {{ui:Deslocar}}.
:::

Os comentários só de leitura que vieram com o ficheiro mostram uma caixa tracejada cinzenta e não têm alças. Podem ser selecionados e respondidos, mas não alterados.

## Mover e redimensionar

- **Mover:** arraste uma anotação selecionada. Mantenha {{key:Shift}} premido para mover só em múltiplos de 45°. Várias anotações selecionadas movem-se em conjunto.
- **Redimensionar:** com uma anotação selecionada, arraste uma alça. As alças quadradas redimensionam a caixa (mantenha {{key:Shift}} para manter as proporções); as alças redondas movem um ponto de canto de uma linha, polilinha, polígono, nuvem ou medição (mantenha {{key:Shift}} para 45°); as alças em losango movem a ponta e a dobra de uma chamada. Os traços de caneta são escalados a partir da sua caixa.
- **Deslocar ligeiramente:** prima as teclas de seta para mover a seleção um pixel do ecrã; mantenha {{key:Shift}} premido para dez pixels. Cada toque conta como um passo de anulação.

## Alterar o texto ou o aspeto

- **Texto, chamadas e notas:** clique duas vezes na anotação, ou prima {{key:Enter}}, ou escolha {{ui:Editar na folha}} em {{ui:Propriedades}}. Escreva e depois clique fora, ou prima {{key:Mod+Enter}}. {{key:Esc}} cancela a edição.
- **Carimbos:** escolha outro carimbo em {{ui:Propriedades}} (um duplo clique abre {{ui:Propriedades}} automaticamente).
- **Estilo:** {{ui:Cor}}, {{ui:Espessura da linha}}, {{ui:Preenchimento}}, {{ui:Opacidade}} e {{ui:Tamanho do texto}} em "Estilo" em {{ui:Propriedades}}. Com várias anotações selecionadas, {{ui:Propriedades}} mostra os tipos escolhidos e altera-os todos de uma vez.

## Copiar, colar e duplicar

O grupo {{ui:Editar}} da barra de ferramentas tem {{ui:Copiar}} e {{ui:Colar}}; o menu {{ui:Mais}} tem todos estes, cada um com a sua tecla.

| Comando | Tecla | O que faz |
|---|---|---|
| {{ui:Cortar}} | {{key:Mod+X}} | Copia as anotações selecionadas e elimina-as |
| {{ui:Copiar}} | {{key:Mod+C}} | Copia as anotações selecionadas |
| {{ui:Colar}} | {{key:Mod+V}} | Coloca uma cópia na folha em que está (onde, abaixo) |
| {{ui:Colar no mesmo sítio}} | {{key:Mod+Shift+V}} | Coloca a cópia exatamente no sítio de onde foi copiada: na mesma folha, por cima do original; noutra folha, no mesmo lugar do papel |
| {{ui:Duplicar}} | {{key:Mod+D}} | Faz uma cópia da seleção um pouco abaixo e à direita, sem tocar no que copiou antes |

**Onde o Colar põe a cópia:**

- {{key:Mod+V}} com o ponteiro na folha coloca a cópia centrada onde está o ponteiro. Mova o ponteiro, prima {{key:Mod+V}} de novo, e fica colocada outra.
- O botão {{ui:Colar}} (com o ponteiro na barra de ferramentas), ou {{key:Mod+V}} com o ponteiro fora da folha, coloca a cópia um pouco abaixo e à direita do original. Cada colagem da mesma cópia avança um pouco mais, para que as cópias nunca se escondam umas às outras. Noutra folha, a primeira colagem fica onde estava o original na respetiva folha. Se esse ponto estiver fora da vista, a cópia fica no centro da vista.
- Para que {{key:Mod+V}} cole sempre ao lado do original, escolha {{ui:Ao lado da cópia}} em {{ui:Colar}} nas [definições do MarkupCraft](topic:settings).

As anotações coladas ficam selecionadas, por isso pode arrastá-las logo. Cada recorte, colagem ou duplicação é um passo de anulação: {{key:Mod+Z}} desfaz a colagem inteira.

As cópias coladas são anotações novas: recebem o seu nome, a data de hoje, o estado Aberto, nenhum número de lista de anomalias e uma conversa vazia. O tipo, a forma, o estilo, o texto e o comentário seguem com elas. Os comentários só de leitura que vieram com o ficheiro não podem ser copiados nem recortados.

**Entre separadores:** o que copia fica também guardado neste navegador, para que outro separador do MarkupCraft no mesmo navegador o possa colar. Copiar anotações não usa a área de transferência do computador: não é possível colá-las noutro programa, e o texto copiado noutro lado não se cola como anotação.

**Menu do botão direito:** clique com o botão direito numa anotação (ou no papel vazio) para {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar aqui}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Guardar a seleção como carimbo…}}, {{ui:Integrar na página ao guardar}}, {{ui:Inserir aqui uma imagem…}} e {{ui:Selecionar tudo}}. Clicar com o botão direito numa anotação que não esteja selecionada seleciona-a primeiro. Arrastar com o botão direito continua a deslocar a vista. Num ecrã tátil, um toque longo numa anotação abre o mesmo menu (sobre texto, começa a editar o texto). A tecla de menu ou {{key:Shift+F10}} abrem-no na seleção.

O conteúdo da página selecionado com a ferramenta {{ui:Conteúdo}} também se copia e cola: veja [Alterar as linhas, imagens e texto da própria página](topic:page-content).

Para copiar uma parte da própria página como imagem (um retângulo, uma elipse ou uma forma livre), ou como sobreposição transparente para outra folha ou aplicação, veja [Copiar uma área da página, ou uma sobreposição](topic:copy-an-area).

## Eliminar

Prima {{key:Delete}} ou {{key:Backspace}}, escolha {{ui:Mais}} e depois {{ui:Eliminar}} na barra de ferramentas, ou escolha {{ui:Eliminar}} em {{ui:Propriedades}}. A barra de estado indica quantas foram eliminadas. Os comentários só de leitura do ficheiro nunca são eliminados ("mantido como no ficheiro").

## Anular e refazer

- {{key:Mod+Z}} anula, {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} refaz. A barra de ferramentas tem {{ui:Anular}} e {{ui:Refazer}}.
- A barra de estado indica o que foi anulado ("Anulado: mover anotação.").
- A anulação abrange cada alteração a anotações, estados, respostas, itens da lista de anomalias, escalas de folhas e nomes de folhas, até 500 passos.
- O histórico é limpo quando fecha o conjunto.

## Copiar anotações para outras folhas

Para pôr o mesmo carimbo, nota ou nuvem em várias folhas, selecione-o (ou várias anotações) e escolha {{ui:Copiar para outras folhas…}} em {{ui:Propriedades}}. Marque as folhas, ou {{ui:Todas as folhas}}, e escolha {{ui:Copiar}}. Cada folha recebe uma cópia no mesmo sítio da página, assinada com o seu nome. Um {{key:Mod+Z}} remove todas.
