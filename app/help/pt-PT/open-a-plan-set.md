---
title: Abrir um conjunto de plantas e deslocar-se entre folhas
summary: Abrir um PDF ou vários, ou começar com páginas em branco; encontrar folhas pelo número ou pelo nome; aplicar zoom e deslocar; e mudar o nome de uma folha quando o ficheiro a identifica mal.
keywords: abrir, novo, página em branco, folha em branco, esboço, grelha, sem título, conjunto de plantas, folhas, páginas, miniaturas, rótulos de página, número da folha, legenda, mudar nome, navegar, zoom, deslocar, ajustar, procurar folhas
from: 1e7f4d50
---

## Abrir o conjunto

1. Escolha {{ui:Abrir}} na barra de ferramentas, ou prima {{key:Mod+O}}.
2. No seletor de ficheiros, selecione todos os PDF do conjunto ({{pick:mac=mantenha ⌘ premido e clique em cada ficheiro|windows linux=mantenha Ctrl premido e clique em cada ficheiro}}, ou selecione um intervalo com Shift), depois confirme.
   Ou arraste os ficheiros de {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o gestor de ficheiros}} para a área da folha. "Largue PDF para os abrir" aparece enquanto arrasta.
3. Aguarde enquanto a barra de estado mostra "A abrir <file>…". Em ficheiros grandes, conta: "(10 de 60 folhas)".

Resultado: a lista {{ui:Folhas}} mostra todas as páginas de todos os ficheiros, pela ordem em que os abriu, e a barra de estado diz algo como "3 ficheiros abertos (42 folhas no conjunto)." Se os ficheiros já tinham comentários, acrescenta quantos foram lidos.

Para acrescentar mais ficheiros ao conjunto mais tarde, abra-os da mesma forma. Ficam no fim da lista.

## Começar com páginas em branco

Para fazer esboços ou tomar notas sem um desenho, crie páginas em branco em vez de abrir um PDF:

1. Escolha {{ui:Novo}} na barra de ferramentas, ou {{ui:Começar com uma página em branco}} no ecrã inicial, ou prima {{key:Mod+N}} quando o navegador o permitir (a aplicação de ambiente de trabalho e o Studio fazem-no sempre).
2. Escolha o {{ui:Tamanho do papel}}: Letter, Tabloid ou ANSI B, ARCH D, ARCH E, A4, A3 ou A1, e {{ui:Vertical}} ou {{ui:Horizontal}}.
3. Escolha uma {{ui:Grelha}}: {{ui:Nenhuma}}, {{ui:Pontos}} ou {{ui:Quadrados}}. A grelha tem espaçamento de 1/4 in, com uma linha mais forte a cada in em papel em polegadas, e de 5 mm, com uma linha mais forte a cada 10 mm em papel métrico. Fica impressa na página.
4. Escreva quantas {{ui:Páginas}} quer, de 1 a 20, e depois escolha {{ui:Criar}}.

Resultado: um novo PDF com o nome "Untitled-1.pdf" (depois "Untitled-2.pdf", e assim sucessivamente) abre-se como qualquer outro ficheiro, criado aqui neste computador. Todas as ferramentas funcionam nele, e {{ui:Guardar}} transfere "Untitled-1 (marked up).pdf". O MarkupCraft lembra-se das escolhas feitas para a próxima vez.

As páginas não têm escala: a barra de estado diz "Não calibrada". A grelha não é uma escala. Para medir, calibre a folha ou escolha uma escala primeiro; consulte [Calibrar e medir](topic:calibrate-and-measure).

Para acrescentar uma página a um conjunto em branco, abra uma das folhas e escolha {{ui:Adicionar uma página em branco}} por baixo da lista {{ui:Folhas}}. A nova página tem o mesmo papel e a mesma grelha e fica no fim. Como qualquer alteração de página, não pode ser anulada; consulte [Imprimir e alterar as páginas](topic:pages-and-printing).

## Como as folhas recebem os nomes

O MarkupCraft dá a cada folha o nome "<número da folha> — <título>", por exemplo "A-101 — Planta do piso", a partir do primeiro destes elementos que encontrar:

1. Um nome que escreveu com {{ui:Mudar o nome da folha}} (abaixo).
2. As etiquetas de página do próprio PDF, quando quem o criou as definiu (por exemplo "A-101").
3. A legenda: o MarkupCraft lê o texto da página e procura algo com a forma de um número de folha (A-101, A1.01, M-201A, KA1-1), dando preferência ao canto inferior direito, à faixa da direita e à faixa inferior, e toma o texto maior junto dele como título.
4. Caso contrário, o nome do ficheiro e a página: "Plantas — página 3".

Para ver qual foi usado, prima {{key:Esc}} até nada estar selecionado e {{ui:Selecionar}} estiver ativo, e depois veja {{ui:Propriedades}}: "Lido de" diz "A etiqueta da página", "A legenda", "O nome do ficheiro" ou "Escrito à mão".

:::note
As folhas digitalizadas, e os PDF cujas letras foram exportadas como linhas, não têm texto para ler. São identificadas pelo ficheiro e pela página até lhes mudar o nome. O MarkupCraft ainda não consegue ler texto de imagens.
:::

## Deslocar-se entre folhas

- Clique numa folha em {{ui:Folhas}}.
- Prima {{key:PageDown}} para a folha seguinte e {{key:PageUp}} para a anterior, ou utilize as setas na barra por baixo da folha.
- Escreva em {{ui:Procurar folhas}}: parte de um número ("A-2"), uma palavra do título ("cobertura"), ou um nome de ficheiro. A lista reduz-se à medida que escreve ("4 de 42"). Prima {{key:Enter}} para abrir a primeira correspondência. Limpe a caixa para ver todas as folhas outra vez.

Cada folha mantém o próprio zoom e a própria posição até fechar o conjunto.

## Zoom e deslocamento

:::mouse
- **Zoom:** rode a roda sobre a folha. O zoom faz-se em torno do ponteiro. Ou prima {{key:Plus}} e {{key:Minus}} (também com {{key:Mod}}), ou use os botões de zoom. Escreva uma percentagem exata na caixa de zoom.
- **Ajustar:** {{ui:Ajustar página}} ({{key:Mod+0}}) mostra a folha inteira; {{ui:Ajustar largura}} ({{key:Mod+9}}) preenche a largura.
- **Deslocar:** arraste com o botão do meio (a roda), ou arraste com o botão direito, ou mantenha {{key:Space}} premido e arraste, ou escolha {{ui:Deslocar}} ({{key:H}}) e arraste. Com nada selecionado, as teclas de seta também movem a folha.
:::

:::mac mouse
Num trackpad de Mac, deslizar com dois dedos faz zoom (não desloca a folha). Para deslocar, mantenha {{key:Space}} premido e arraste com um dedo, ou mude para {{ui:Deslocar}} com {{key:H}}. Um gesto de pinça faz zoom no Chrome, Edge e Firefox.
:::

:::touch
- **Zoom e deslocamento:** coloque dois dedos na folha. Afaste-os ou junte-os para fazer zoom em torno do ponto entre eles, e mova-os juntos para deslocar. Os dois acontecem em simultâneo.
- **Deslocar com um dedo:** escolha primeiro {{ui:Deslocar}}. Com qualquer outra ferramenta, um dedo desenha ou seleciona.
- {{ui:Ajustar página}} e {{ui:Ajustar largura}} estão na barra por baixo da folha.
:::

Pode fazer zoom bem para além da folha inteira e até 6400%. A folha é redesenhada nítida um momento depois de parar de mover.

## Marcadores

{{ui:Marcadores de página}}, no topo do painel {{ui:Folhas}}, mostra os marcadores (contorno) do PDF a que pertence a folha aberta. Escolha um para ir para a respetiva página. O lápis muda o nome de um marcador e a cruz remove-o. {{ui:Criar a partir das folhas}} cria um marcador por folha, com o nome que a lista de folhas mostra (número da folha e título), e {{ui:Adicionar para esta folha}} acrescenta um para a folha em que está. As alterações fazem parte do trabalho por guardar do ficheiro: {{ui:Guardar}} escreve-as na cópia, onde todos os leitores de PDF as mostram.

## Rodar a vista

Os dois botões de rotação à direita da barra por baixo da folha rodam a vista um quarto de volta para qualquer dos lados, para uma folha desenhada de lado. Só a vista roda: o PDF e as anotações mantêm-se como estão, e a folha seguinte abre-se como o respetivo PDF (cada folha lembra a sua própria rotação enquanto o conjunto estiver aberto). O texto que acrescentar numa vista rodada fica direito, como aparece no ecrã. Para rodar a própria página no PDF guardado, use {{ui:Páginas}}, depois {{ui:Rodar página no sentido horário}}; consulte [Imprimir e alterar as páginas](topic:pages-and-printing).

## Mudar o nome de uma folha

Quando o nome de uma folha estiver errado ou em falta:

1. Mostre a folha.
2. Prima {{key:Esc}} até nada estar selecionado e a ferramenta {{ui:Selecionar}} estar ativa. {{ui:Propriedades}} passa a mostrar a folha.
3. Escolha {{ui:Mudar o nome da folha}}.
4. Escreva o {{ui:Número da folha}} e o {{ui:Título}}, depois escolha {{ui:Guardar}}.

Resultado: a lista de folhas, a barra por baixo da folha e a lista de anotações usam todas o novo nome, e "Lido de" diz "Escrito à mão". Pode anular a mudança de nome com {{key:Mod+Z}}.

Para voltar ao que o ficheiro diz, abra {{ui:Mudar o nome da folha}} outra vez, limpe as duas caixas e escolha {{ui:Guardar}}.

Ao guardar, um número de folha escrito passa a ser a etiqueta da página no PDF, para que outros leitores de PDF mostrem "A-101" também na caixa da página. Se atribuir um número a qualquer página de um ficheiro, todas as páginas desse ficheiro recebem uma etiqueta na cópia (o número escrito, senão a etiqueta antiga, senão o número da página). Um título escrito é mantido no MarkupCraft, mas os outros leitores não o mostram.

## Levar o PDF ao TakeoffCraft, ou trazê-lo para aqui

Quando o TakeoffCraft está aberto no mesmo sítio (o laboratório, Try ou as aplicações online), a barra por baixo da folha tem {{ui:Abrir no TakeoffCraft}}. Abre o PDF da folha no TakeoffCraft num novo separador, tal como foi aberto aqui, para poder medir quantidades nele. As anotações ficam aqui; guarde-as como de costume.

O botão {{ui:MarkupCraft}} do TakeoffCraft faz o mesmo no sentido contrário: o PDF abre-se aqui como se tivesse escolhido {{ui:Abrir}}. Se o navegador bloquear o novo separador, autorize janelas pop-up para este site e volte a escolher o botão.
