---
title: Abrir um conjunto de folhas e navegar entre elas
summary: Abra um PDF ou vários, ou comece com páginas em branco, encontre folhas pelo número ou pelo nome, dê zoom e pan, e renomeie uma folha quando o arquivo a nomear errado.
keywords: abrir, novo, página em branco, folha em branco, esboço, grade, sem título, conjunto de folhas, folhas, páginas, miniaturas, rótulos de página, número da folha, legenda, renomear, navegar, zoom, pan, ajustar, buscar folhas
from: 1e7f4d50
---

## Abrir o conjunto

1. Escolha {{ui:Abrir}} na barra de ferramentas, ou pressione {{key:Mod+O}}.
2. No seletor de arquivos, selecione todos os PDFs do conjunto ({{pick:mac=segure ⌘ e clique em cada arquivo|windows linux=segure Ctrl e clique em cada arquivo}}, ou selecione um intervalo com Shift), e confirme.
   Ou arraste os arquivos do {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} para a área da folha. "Solte PDFs para abri-los" aparece enquanto você arrasta.
3. Espere enquanto a barra de status diz "Abrindo <arquivo>…". Para arquivos grandes, ela conta: "(10 de 60 folhas)".

Resultado: a lista {{ui:Folhas}} mostra cada página de cada arquivo, na ordem em que você os abriu, e a barra de status diz algo como "3 arquivos abertos (42 folhas no conjunto)." Se os arquivos já tinham comentários, ela acrescenta quantos foram lidos.

Para adicionar mais arquivos ao conjunto depois, abra-os da mesma forma. Eles entram no fim da lista.

## Começar com páginas em branco

Para esboçar ou fazer anotações sem um desenho, crie páginas em branco em vez de abrir um PDF:

1. Escolha {{ui:Novo}} na barra de ferramentas, ou {{ui:Começar com uma página em branco}} na tela inicial, ou pressione {{key:Mod+N}} onde o seu navegador permitir (o aplicativo de desktop e o Studio sempre permitem).
2. Escolha o {{ui:Tamanho do papel}}: Letter, Tabloid ou ANSI B, ARCH D, ARCH E, A4, A3 ou A1, e {{ui:Retrato}} ou {{ui:Paisagem}}.
3. Escolha uma {{ui:Grade}}: {{ui:Nenhuma}}, {{ui:Pontos}} ou {{ui:Quadrados}}. A grade tem uma linha a cada 1/4 in, com uma linha mais forte a cada polegada em papel em polegadas, e a cada 5 mm, com uma linha mais forte a cada 10 mm, em papel métrico. Ela é impressa na página.
4. Digite quantas {{ui:Páginas}} você quer, de 1 a 20, e depois escolha {{ui:Criar}}.

Resultado: um novo PDF chamado "Untitled-1.pdf" (depois "Untitled-2.pdf", e assim por diante) abre como qualquer outro arquivo, criado aqui neste computador. Todas as ferramentas funcionam nele, e {{ui:Salvar}} baixa "Untitled-1 (marked up).pdf". O MarkupCraft lembra das suas escolhas para a próxima vez.

As páginas não têm escala: a barra de status diz "Não calibrado". A grade não é uma escala. Para medir, calibre a folha ou escolha uma escala antes; veja [Calibrar e medir](topic:calibrate-and-measure).

Para adicionar uma página a um conjunto em branco, abra uma das suas folhas e escolha {{ui:Adicionar uma página em branco}} abaixo da lista {{ui:Folhas}}. A nova página tem o mesmo papel e a mesma grade, e vai para o fim. Como toda alteração de página, ela não pode ser desfeita; veja [Imprimir e alterar as páginas](topic:pages-and-printing).

## Como as folhas recebem seus nomes

MarkupCraft nomeia cada folha "<número da folha> — <título>", por exemplo "A-101 — Planta baixa", a partir do primeiro destes que encontrar:

1. Um nome que você digitou com {{ui:Renomear folha}} (abaixo).
2. Os próprios rótulos de página do PDF, quando quem fez o PDF os definiu (por exemplo "A-101").
3. A legenda: o MarkupCraft lê o texto da página e procura algo com cara de número de folha (A-101, A1.01, M-201A, KA1-1), dando preferência ao canto inferior direito, à faixa da direita e à faixa inferior, e usa o maior texto próximo como título.
4. Caso contrário, o nome do arquivo e a página: "Plantas — página 3".

Para ver qual foi usado, pressione {{key:Esc}} até nada estar selecionado e {{ui:Selecionar}} estar ligado, depois olhe {{ui:Propriedades}}: "Lido de" diz "O rótulo da página", "A legenda", "O nome do arquivo" ou "Digitado à mão".

:::note
Folhas digitalizadas, e PDFs cujas letras foram exportadas como linhas, não têm texto para ler. Elas são nomeadas pelo arquivo e pela página até você renomeá-las. O MarkupCraft ainda não consegue ler texto de imagens.
:::

## Mover entre folhas

- Clique em uma folha em {{ui:Folhas}}.
- Pressione {{key:PageDown}} para a próxima folha e {{key:PageUp}} para a anterior, ou use as setas na barra abaixo da folha.
- Digite em {{ui:Buscar folhas}}: parte de um número ("A-2"), uma palavra do título ("telhado") ou um nome de arquivo. A lista se reduz enquanto você digita ("4 de 42"). Pressione {{key:Enter}} para abrir a primeira correspondência. Limpe a caixa para ver todas as folhas de novo.

Cada folha mantém seu próprio zoom e posição até você fechar o conjunto.

## Zoom e pan

:::mouse
- **Zoom:** gire a roda sobre a folha. Ela dá zoom ao redor do ponteiro. Ou pressione {{key:Plus}} e {{key:Minus}} (também com {{key:Mod}}), ou use os botões de zoom. Digite um percentual exato na caixa de zoom.
- **Ajustar:** {{ui:Ajustar página}} ({{key:Mod+0}}) mostra a folha inteira; {{ui:Ajustar largura}} ({{key:Mod+9}}) preenche a largura.
- **Pan:** arraste com o botão do meio (a roda), ou arraste com o botão direito, ou segure {{key:Space}} e arraste, ou escolha {{ui:Pan}} ({{key:H}}) e arraste. Sem nada selecionado, as teclas de seta também movem a folha.
:::

:::mac mouse
Em um trackpad de Mac, a rolagem com dois dedos dá zoom (não rola a folha). Para fazer pan, segure {{key:Space}} e arraste com um dedo, ou mude para {{ui:Pan}} com {{key:H}}. Um gesto de pinça dá zoom no Chrome, Edge e Firefox.
:::

:::touch
- **Zoom e pan:** coloque dois dedos sobre a folha. Afaste-os ou aproxime-os para dar zoom ao redor do ponto entre eles, e movimente-os juntos para fazer pan. As duas coisas acontecem ao mesmo tempo.
- **Pan com um dedo:** escolha {{ui:Pan}} primeiro. Com qualquer outra ferramenta, um dedo desenha ou seleciona.
- {{ui:Ajustar página}} e {{ui:Ajustar largura}} ficam na barra abaixo da folha.
:::

Você pode dar zoom bem além da folha inteira, até 6400%. A folha é redesenhada nítida um instante depois que você para de mover.

## Indicadores

{{ui:Indicadores}}, no topo do painel {{ui:Folhas}}, mostra os indicadores (a estrutura de tópicos) do PDF ao qual pertence a folha aberta. Escolha um para ir à sua página. O lápis renomeia um indicador, e o X o remove. {{ui:Criar a partir das folhas}} cria um indicador por folha, com o nome que a lista de folhas mostra (número e título), e {{ui:Adicionar para esta folha}} adiciona um para a folha em que você está. As alterações fazem parte do trabalho não salvo do arquivo: {{ui:Salvar}} as grava na cópia, onde todo visualizador de PDF as mostra.

## Girar a visualização

Os dois botões de giro à direita da barra abaixo da folha giram a visualização um quarto de volta para qualquer lado, para uma folha desenhada de lado. Só a visualização gira: o PDF e suas marcações continuam como estão, e a próxima folha abre do jeito que o seu PDF abre (cada folha lembra o próprio giro enquanto o conjunto estiver aberto). Texto que você adiciona em uma visualização girada aparece em pé, como você o vê. Para girar a própria página no PDF salvo, use {{ui:Páginas}}, depois {{ui:Girar página no sentido horário}}; veja [Imprimir e alterar as páginas](topic:pages-and-printing).

## Renomear uma folha

Quando o nome de uma folha está errado ou falta:

1. Mostre a folha.
2. Pressione {{key:Esc}} até nada estar selecionado e a ferramenta {{ui:Selecionar}} estar ativa. {{ui:Propriedades}} agora mostra a folha.
3. Escolha {{ui:Renomear folha}}.
4. Digite o {{ui:Número da folha}} e o {{ui:Título}}, depois escolha {{ui:Salvar}}.

Resultado: a lista de folhas, a barra abaixo da folha e a lista de marcações usam o novo nome, e "Lido de" diz "Digitado à mão". Renomear pode ser desfeito com {{key:Mod+Z}}.

Para voltar ao que o arquivo diz, abra {{ui:Renomear folha}} de novo, limpe as duas caixas e escolha {{ui:Salvar}}.

Ao salvar, um número de folha digitado vira o rótulo da página no PDF, então outros visualizadores de PDF mostram "A-101" na caixa da página também. Se você der um número a qualquer página de um arquivo, cada página desse arquivo recebe um rótulo na cópia (o número digitado, senão o rótulo antigo, senão o número da página). Um título digitado é mantido pelo MarkupCraft, mas outros visualizadores não o mostram.

## Levar o PDF ao TakeoffCraft, ou trazê-lo para cá

Quando o TakeoffCraft estiver aberto no mesmo lugar (o laboratório, Try ou os aplicativos online), a barra abaixo da folha tem {{ui:Abrir no TakeoffCraft}}. Ele abre o PDF da folha no TakeoffCraft, em uma nova aba, como foi aberto aqui, para você medir quantitativos nele. Suas marcações ficam aqui; salve-as normalmente.

O botão {{ui:MarkupCraft}} do TakeoffCraft faz o mesmo no sentido contrário: o PDF abre aqui como se você tivesse escolhido {{ui:Abrir}}. Se o navegador bloquear a nova aba, permita pop-ups para este site e escolha o botão de novo.
