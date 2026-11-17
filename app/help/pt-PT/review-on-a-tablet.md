---
title: Rever num iPad ou ecrã tátil
summary: Aplicar zoom, deslocar e desenhar com os dedos ou com uma caneta, o que atua ao levantar, o que precisa de teclado e como manter o trabalho seguro num tablet.
keywords: ipad, tablet, toque, ecrã tátil, pinça, zoom, dois dedos, Apple Pencil, caneta, dedo, campo, obra, superfície, gestos, móvel
from: 91eb6438
---

O MarkupCraft funciona com toque: num iPad (Safari ou Chrome), num portátil com ecrã tátil, ou num tablet Windows ou Android com um navegador recente. Em paisagem, um tablet mostra o layout completo.

## Gestos

| Gesto | O que faz |
|---|---|
| Um dedo | Desenha com a ferramenta atual, ou seleciona com {{ui:Selecionar}} |
| Dois dedos, afastados ou em pinça | Faz zoom em torno do ponto entre os dedos |
| Dois dedos, movidos em conjunto | Desloca; pode fazer zoom e deslocar num só movimento |
| Um segundo dedo enquanto desenha | Cancela o que o primeiro dedo começou e começa o zoom |
| Duplo toque, ou tocar e manter | Termina uma polilinha, um polígono, uma nuvem livre ou uma área |
| Tocar e manter num texto, chamada ou nota, com {{ui:Selecionar}} | Abre o texto para editar |
| Um dedo com {{ui:Deslocar}} ativo | Desloca |

Num ecrã tátil, os botões da barra de ferramentas, os menus, os separadores e os botões das caixas de diálogo são maiores, para serem fáceis de tocar com o dedo.

## O que acontece ao levantar

Para que o primeiro dedo de uma pinça nunca deixe marca, algumas ferramentas atuam quando **levanta** o dedo, e não quando toca:

- {{ui:Contagem}}: o ponto é acrescentado ao levantar.
- {{ui:Nota}}: a nota é colocada ao levantar.
- {{ui:Polilinha}}, {{ui:Polígono}}, {{ui:Nuvem livre}} e {{ui:Área}}: cada ponto é acrescentado ao levantar.
- {{ui:Linha}}, {{ui:Seta}}, {{ui:Comprimento}} e {{ui:Calibrar}}: ao tocar no início e depois no fim, o fim é colocado ao levantar.

Se o dedo deslizar mais do que um pouco antes de levantar, não conta como toque e nada é acrescentado. Toque com clareza; para corrigir, use {{ui:Anular}}.

As ferramentas que se arrastam ({{ui:Caneta}}, {{ui:Realce}}, {{ui:Nuvem}}, {{ui:Retângulo}}, {{ui:Elipse}}, {{ui:Chamada}}, {{ui:Texto}}, {{ui:Carimbo}}) começam logo ao tocar; um segundo dedo cancela-as.

## Selecionar com o dedo

- Toque numa anotação para a selecionar; arraste-a para a mover; arraste uma pega para redimensionar. Depois de um dedo tocar na folha, as anotações e as pegas ficam com um alvo maior, e as pegas são desenhadas maiores.
- Arraste sobre a folha vazia para desenhar uma janela de seleção (da esquerda para a direita: totalmente dentro; da direita para a esquerda: a tocar).
- Em {{ui:Selecionar}}, um dedo **não** desloca. Use dois dedos, ou escolha {{ui:Deslocar}}.

## O que precisa de teclado

Sem teclado não há {{key:Shift}}, {{key:Esc}} nem {{key:Enter}}. Eis o que fazer em vez disso:

| Ação de teclado | Sem teclado |
|---|---|
| {{key:Esc}} para cancelar ou voltar a Selecionar | Toque em {{ui:Selecionar}} na barra de ferramentas |
| {{key:Shift}} para linhas a 45°, quadrados e círculos | Desenhe com cuidado; ajuste com as pegas |
| {{key:Shift}}-clique para acrescentar à seleção | Use uma janela de seleção |
| {{key:Shift}}-clique para remover um ponto de contagem | {{ui:Anular}} logo após um toque errado |
| {{key:Mod+Enter}} para terminar a escrita | Toque fora da caixa de texto |
| {{key:Enter}} para terminar uma polilinha, ou para editar o texto de uma anotação | Tocar e manter, ou {{ui:Editar na folha}} em {{ui:Propriedades}} |
| {{key:Delete}} | {{ui:Eliminar}} na barra de ferramentas ou em {{ui:Propriedades}} |
| Começar um novo grupo de contagem com {{key:Esc}} | Toque em folha vazia com {{ui:Selecionar}}, depois toque em {{ui:Contagem}} outra vez |

Um teclado com capa ou Bluetooth repõe todos os atalhos; num iPad, a tecla ⌘ funciona para {{key:Mod+Z}} e os restantes.

As dicas dos botões não aparecem no toque. A tecla de cada ferramenta está listada em [Teclado e rato](topic:keyboard).

## Caneta stylus e Apple Pencil

Uma caneta stylus (Apple Pencil, Surface Pen e semelhantes) funciona como um rato: desenha e seleciona, e atua logo ao tocar. Use os dedos para pinça e deslocamento. A pressão não altera a espessura da linha.

## Abrir e guardar num iPad

- {{ui:Abrir}} mostra o seletor de Ficheiros: iCloud Drive, No meu iPad, e qualquer aplicação de armazenamento que tenha ligada.
- {{ui:Guardar}} pede para transferir; a cópia vai para Ficheiros, em Transferências (ou para a pasta definida nas definições do Safari).

## Manter o trabalho seguro num tablet

:::warning
O Safari do iPad não avisa antes de sair de uma página com trabalho por guardar, e o iPadOS pode recarregar um separador em segundo plano para libertar memória. O MarkupCraft guarda uma cópia de recuperação no navegador e oferece-a quando volta a abrir (consulte [Recuperar o seu trabalho](common:recover)), mas **guarde após cada folha ou cada volta na obra**: um separador privado não guarda cópia.
:::

- O nome, as definições das ferramentas e o baú de ferramentas ficam guardados nesse navegador, nesse iPad, como num computador. Consulte [O que fica neste navegador](topic:browser-storage).
- **Antes de uma visita à obra sem sinal:** enquanto ainda estiver ligado, abra o MarkupCraft no Safari (ou no Chrome) do iPad e escolha {{ui:Guardar para offline}} na barra no topo. Aguarde até aparecer "Pronto offline" (conta "A guardar N de M"; o leitor e o gerador de PDF têm cerca de 6 MB). No local, abra o mesmo endereço ou um marcador dele: abrir, anotar e guardar PDF funcionam sem ligação. Se aparecer "Offline indisponível", está num separador privado; use um normal. Consulte [Trabalhar offline](common:offline).
- O Safari remove uma cópia offline que não foi usada durante algumas semanas. Antes de uma viagem, clique em "Pronto offline" e escolha "Guardar outra vez (obter a versão mais recente)".
- Conjuntos de plantas muito grandes usam muita memória. Num tablet, abra só as folhas necessárias para a visita.

## Num telemóvel

Funciona, mas o ecrã é pequeno: as partes empilham-se (barra de ferramentas, folha, barra de estado, painéis, depois a lista de folhas), e a barra de ferramentas desloca-se para os lados. Use um telemóvel para ver e para acrescentar uma nota rápida, e um tablet ou computador para uma revisão a sério.
