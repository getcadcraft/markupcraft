---
title: Revisar em um iPad ou tela sensível ao toque
summary: Dê pinça, pan e desenhe com os dedos ou com uma caneta stylus, veja o que age ao soltar, o que exige teclado e como manter seu trabalho seguro em um tablet.
keywords: ipad, tablet, toque, tela sensível ao toque, pinça, zoom, dois dedos, apple pencil, caneta stylus, dedo, campo, obra, superfície, gestos, celular
from: 91eb6438
---

O MarkupCraft funciona com toque: em um iPad (Safari ou Chrome), em um notebook com tela sensível ao toque, ou em um tablet Windows ou Android com um navegador recente. Na horizontal, um tablet mostra o layout completo.

## Gestos

| Gesto | O que faz |
|---|---|
| Um dedo | Desenha com a ferramenta atual, ou seleciona com {{ui:Selecionar}} |
| Dois dedos, afastando ou aproximando | Dá zoom ao redor do ponto entre seus dedos |
| Dois dedos, movidos juntos | Faz pan; você pode dar zoom e fazer pan em um só movimento |
| Um segundo dedo enquanto desenha | Cancela o que o primeiro dedo começou e passa a dar zoom |
| Toque duplo, ou toque e segure | Finaliza uma polilinha, um polígono, uma nuvem livre ou uma área |
| Toque e segure um texto, uma chamada ou uma nota, com {{ui:Selecionar}} | Abre o texto para editar |
| Um dedo com {{ui:Pan}} ligado | Faz pan |

Em uma tela sensível ao toque, os botões da barra de ferramentas, os menus, as guias e os botões das caixas de diálogo são maiores, para que sejam fáceis de tocar com o dedo.

## O que acontece ao soltar

Para que o primeiro dedo de uma pinça nunca deixe marca, algumas ferramentas agem quando você **solta** o dedo, não quando toca:

- {{ui:Contagem}}: o ponto é adicionado ao soltar.
- {{ui:Nota}}: a nota é colocada ao soltar.
- {{ui:Polilinha}}, {{ui:Polígono}}, {{ui:Nuvem livre}} e {{ui:Área}}: cada ponto é adicionado ao soltar.
- {{ui:Linha}}, {{ui:Seta}}, {{ui:Comprimento}} e {{ui:Calibrar}}: quando você toca o início e depois toca o fim, o fim é colocado ao soltar.

Se o dedo deslizar mais que um pouco antes de soltar, isso não conta como toque e nada é adicionado. Toque com precisão; para corrigir, use {{ui:Desfazer}}.

Ferramentas que você arrasta ({{ui:Caneta}}, {{ui:Destaque}}, {{ui:Nuvem}}, {{ui:Retângulo}}, {{ui:Elipse}}, {{ui:Chamada}}, {{ui:Texto}}, {{ui:Carimbo}}) começam assim que você toca; um segundo dedo as cancela.

## Selecionar com o dedo

- Toque em uma marcação para selecioná-la; arraste-a para mover; arraste uma alça para redimensionar. Depois que um dedo toca a folha, marcações e alças ficam com uma área de toque maior, e as alças são desenhadas maiores.
- Arraste sobre a folha vazia para desenhar uma janela de seleção (da esquerda para a direita: totalmente dentro; da direita para a esquerda: tocando).
- Em {{ui:Selecionar}}, um dedo **não** faz pan. Use dois dedos, ou escolha {{ui:Pan}}.

## Coisas que precisam de teclado

Sem teclado não há {{key:Shift}}, {{key:Esc}} nem {{key:Enter}}. Veja o que fazer no lugar:

| Ação do teclado | Sem teclado |
|---|---|
| {{key:Esc}} para cancelar ou voltar a Selecionar | Toque em {{ui:Selecionar}} na barra de ferramentas |
| {{key:Shift}} para linhas a 45°, quadrados e círculos | Desenhe com cuidado; ajuste com as alças |
| {{key:Shift}}+clique para adicionar à seleção | Use uma janela de seleção |
| {{key:Shift}}+clique para remover um ponto de contagem | {{ui:Desfazer}} logo após um toque errado |
| {{key:Mod+Enter}} para terminar de digitar | Toque fora da caixa de texto |
| {{key:Enter}} para terminar uma polilinha, ou para editar o texto de uma marcação | Toque e segure, ou {{ui:Editar na folha}} em {{ui:Propriedades}} |
| {{key:Delete}} | {{ui:Excluir}} na barra de ferramentas ou em {{ui:Propriedades}} |
| Começar um novo grupo de contagem com {{key:Esc}} | Toque em folha vazia com {{ui:Selecionar}}, depois toque em {{ui:Contagem}} de novo |

Um teclado de capa ou um teclado Bluetooth traz de volta todos os atalhos; em um iPad, a tecla ⌘ funciona para {{key:Mod+Z}} e os demais.

Botões não mostram suas dicas ao toque. A tecla de cada ferramenta está listada em [Teclado e mouse](topic:keyboard).

## Caneta stylus e Apple Pencil

Uma caneta stylus (Apple Pencil, Surface Pen e similares) funciona como um mouse: desenha e seleciona, e age assim que encosta. Use os dedos para pinça e pan. A pressão não muda a espessura da linha.

## Abrir e salvar em um iPad

- {{ui:Abrir}} mostra o seletor do Arquivos: iCloud Drive, No Meu iPad e qualquer aplicativo de armazenamento que você tenha conectado.
- {{ui:Salvar}} pede para baixar; a cópia vai para Arquivos, em Downloads (ou para a pasta definida nas configurações do Safari).

## Mantenha seu trabalho seguro em um tablet

:::warning
O Safari do iPad não avisa antes de você sair de uma página com trabalho não salvo, e o iPadOS pode recarregar uma aba em segundo plano para liberar memória. O MarkupCraft mantém uma cópia de recuperação no navegador e a oferece de volta quando você a abre de novo (veja [Recuperar seu trabalho](common:recover)), mas **salve depois de cada folha ou de cada volta pela obra**: uma aba privada não mantém cópia alguma.
:::

- Seu nome, as configurações das ferramentas e a caixa de ferramentas ficam guardados nesse navegador, nesse iPad, como em um computador. Veja [O que fica neste navegador](topic:browser-storage).
- **Antes de uma visita à obra sem sinal:** enquanto ainda estiver online, abra o MarkupCraft no Safari (ou Chrome) no iPad e escolha {{ui:Salvar para uso offline}} na barra no topo. Espere até aparecer "Pronto para uso offline" (ele conta "Salvando N de M"; o leitor e o gravador de PDF somam cerca de 6 MB). Na obra, abra o mesmo endereço ou um favorito dele: abrir, marcar e salvar PDFs funciona sem conexão. Se aparecer "Uso offline indisponível", você está em uma aba privada; use uma normal. Veja [Trabalhar offline](common:offline).
- O Safari remove uma cópia offline que você não usou por algumas semanas. Antes de uma viagem, clique em "Pronto para uso offline" e escolha "Salvar de novo (baixar a versão mais recente)".
- Conjuntos de folhas muito grandes usam muita memória. Em um tablet, abra só as folhas de que precisa para a visita.

## Em um celular

Funciona, mas a tela é pequena: as partes ficam empilhadas (barra de ferramentas, folha, barra de status, painéis, depois a lista de folhas), e a barra de ferramentas rola para os lados. Use o celular para consultar e para adicionar uma nota rápida, e um tablet ou computador para uma revisão de verdade.
