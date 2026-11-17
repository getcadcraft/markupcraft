---
title: Resolução de problemas
summary: Mensagens que o MarkupCraft mostra e o que fazer, além de soluções para coisas que parecem não funcionar.
keywords: problema, erro, não funciona, ajuda, mensagem, não abre, não consigo guardar, palavra-passe, protegido, medição recusada, calibrar, offline, em branco, lento, anotações perdidas, pontos de interrogação
from: bb650b39
---

A maioria dos problemas está explicada na barra de estado, na parte inferior do ecrã. Leia-a primeiro.

## Abrir ficheiros

**"O MarkupCraft abre ficheiros PDF. "x" não é um PDF."**
Escolheu ou largou outra coisa. Só se abrem PDF. Exporte primeiro os desenhos do seu programa de CAD como PDF.

**'"nome" precisa de uma palavra-passe para abrir. Abra uma cópia não protegida.'**
O PDF está protegido por palavra-passe. Peça a quem o enviou uma cópia não protegida, ou abra-o num programa de PDF cuja palavra-passe conheça e guarde uma cópia sem palavra-passe.

**'"nome" não pôde ser lido como PDF (…)'**
O ficheiro está danificado ou não é de facto um PDF (uma transferência incompleta, um anexo de correio eletrónico cortado). Transfira-o de novo. Se outros programas de PDF o conseguirem abrir, use a respetiva opção "guardar como" para criar uma cópia limpa e abra essa.

**"Alguns ficheiros não foram abertos"**
Quando abre vários de uma vez, esta caixa lista os ficheiros que falharam e o motivo. Os restantes estão abertos.

**"O leitor de PDF não pôde carregar: …"**
O motor de PDF não pôde ser obtido. Online: recarregue a página e tente de novo; verifique se uma firewall ou um bloqueador de conteúdos não está a bloquear o sítio. Offline: o MarkupCraft não foi guardado para utilização offline neste navegador (a barra no topo não diz "Pronto offline"). Ligue-se à internet, escolha {{ui:Guardar para offline}} e aguarde por "Pronto offline". Ver [Trabalhar offline](common:offline).

**"Algumas anotações podem aparecer duas vezes no ecrã" ou "Não foi possível ler detalhes adicionais das anotações"**
Os comentários existentes do ficheiro são invulgares. Mesmo assim, são abertos da melhor forma possível pelo MarkupCraft; verifique-os antes de confiar neles. Guardar continua a funcionar.

**A folha tem o nome errado, ou "página 3"**
Ver [Como as folhas obtêm os nomes](topic:open-a-plan-set#how-sheets-get-their-names). As folhas digitalizadas não têm texto para ler; use {{ui:Mudar o nome da folha}}.

**As mesmas folhas aparecem duas vezes**
O mesmo ficheiro foi aberto duas vezes. Escolha {{ui:Fechar}} (guarde primeiro, se for preciso) e abra o conjunto de novo.

## Desenhar e selecionar

**Nada acontece quando clico na folha**
Verifique qual ferramenta está premida na barra de ferramentas, e leia a barra de estado. Com {{ui:Retângulo}}, {{ui:Elipse}} e {{ui:Nuvem}}, um clique sem arrastar não desenha nada: arraste. Com {{ui:Polilinha}}, {{ui:Polígono}}, {{ui:Nuvem livre}} e {{ui:Área}}, estão a ser acrescentados pontos: termine com um duplo clique ou com {{key:Enter}}.

**"Um polígono precisa de pelo menos 3 pontos." (ou 2 para uma polilinha)**
Clique em mais pontos antes de terminar.

**"Nada escrito, por isso não foi acrescentado texto."**
As caixas de texto e as chamadas só são mantidas quando têm texto. Desenhe-a de novo e escreva antes de clicar noutro sítio.

**"Os dois pontos são iguais. Clique em dois pontos diferentes."**
Para linhas, setas, comprimentos e calibração, as duas extremidades têm de estar afastadas. Arraste, ou clique duas vezes em sítios diferentes.

**Não consigo mover nem eliminar uma anotação; tem uma caixa cinzenta tracejada**
É um comentário só de leitura que veio com o ficheiro (por exemplo, um realce de texto). O MarkupCraft mantém-no como está: só pode responder-lhe. A barra de estado diz "as anotações só de leitura são mantidas como no ficheiro".

**As minhas teclas escrevem letras numa caixa em vez de escolherem ferramentas**
O cursor está numa caixa de texto (uma resposta, um campo em {{ui:Propriedades}}, a pesquisa na folha). Clique primeiro numa parte vazia da área da folha, ou prima {{key:Esc}} se estiver a editar o texto de uma anotação.

**Space não desloca a vista, ou as teclas de seta não fazem nada**
Acabou de clicar num botão da barra de ferramentas, por isso ele ainda tem o teclado. Arraste com o botão central do rato, ou clique uma vez na folha com {{ui:Selecionar}} ativo, e tente de novo. Ver também [Teclado e rato](topic:keyboard#when-a-key-does-nothing).

**Um gesto de pinça no ecrã tátil deixou uma marca**
Uma ferramenta de arrastar (caneta, nuvem, retângulo) começou antes de chegar o segundo dedo e terminou antes de ser cancelada. Prima {{ui:Anular}}. Ponha os dois dedos ao mesmo tempo quando quiser fazer zoom.

## Medir

**"Calibre primeiro esta folha: escolha dois pontos a uma distância conhecida, ou escolha a sua escala. Depois meça."**
Cada folha precisa da sua própria escala antes de {{ui:Comprimento}} ou {{ui:Área}}. O MarkupCraft mudou para {{ui:Calibrar}}: clique nas duas extremidades de uma cota conhecida e escreva o seu comprimento, ou clique no botão de escala na barra de estado e escolha uma escala. Ver [Calibrar uma folha e medir](topic:calibrate-and-measure).

**'Não é um comprimento que o MarkupCraft perceba.'**
Escreva-o como `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`. Ver [Unidades, comprimentos e escalas](topic:units-and-scales).

**As medições estão um pouco erradas, ou muito erradas**
- Uma escala predefinida num PDF que não está em tamanho real mede mal. Calibre antes a partir de uma cota conhecida e longa.
- Um separador de milhares foi lido como ponto decimal: `1,200 mm` significa 1,2 mm. Escreva `1200 mm`.
- Faça zoom ao clicar nas extremidades.
- O desenho pode não estar à escala ("NTS").

**"Selecione primeiro um grupo de contagem e, depois, Shift+clique numa marca para a remover."**
Escolha {{ui:Selecionar}}, clique no grupo de contagem, escolha {{ui:Contagem}} novamente e faça {{key:Shift}}-clique no ponto.

## Guardar

**"Este PDF está protegido (cifrado), por isso não é possível escrever uma cópia anotada."**
O ficheiro não permite alterações. Peça uma cópia não protegida. Entretanto, pode ainda exportar a lista de anotações como CSV ou BCF.

**"O gravador de PDF não pôde carregar: …"**
Normalmente está offline e a aplicação não foi guardada para utilização offline (sem "Pronto offline" na barra no topo). As suas anotações continuam no separador: mantenha-o aberto, ligue-se à internet e escolha {{ui:Guardar}} de novo. Depois escolha {{ui:Guardar para offline}} para que funcione offline da próxima vez; a cópia guardada inclui o gravador de PDF.

**"Não foi possível guardar <ficheiro>"**
A caixa mostra o motivo. As suas anotações continuam no separador. Tente de novo; se se repetir, exporte o CSV para não perder os comentários e reporte a mensagem.

**Escolhi Guardar mas só chegou um ficheiro**
O navegador bloqueou as transferências extra. Procure um aviso na barra de endereços, permita que este sítio transfira vários ficheiros e guarde de novo.

**Não encontro o ficheiro guardado**
Foi para a pasta de transferências do navegador. Abra a lista de transferências do navegador (no Chrome e no Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; no Firefox e no Safari, o botão de transferências na barra de ferramentas) para ver onde está. Ver [Navegadores e computadores](common:browsers).

**Algum texto aparece com "?" noutros visualizadores de PDF**
Os caracteres fora do conjunto da Europa Ocidental aparecem como "?" na cópia. A mensagem de guardar conta-os. Ver [Guardar o PDF anotado](topic:save-the-marked-up-pdf).

**O carimbo mostra a data de amanhã (ou de ontem)**
As datas dos carimbos estão em UTC. Ver [Carimbos e notas adesivas](topic:stamps-and-notes).

## Trabalhar offline

**O botão offline diz "Não foi possível guardar"**
Alguns ficheiros da aplicação não foram transferidos. Verifique a ligação e clique de novo no botão; ele conta "A guardar N de M" até aparecer "Pronto offline".

**O botão offline diz "Offline não disponível"**
Esta janela do navegador não consegue manter uma cópia offline: é uma janela privada, ou um computador cuja política o impede. Abra o MarkupCraft numa janela normal e tente de novo.

**Offline, a aplicação é uma versão mais antiga**
A cópia offline é a versão que guardou. Quando estiver online, clique em "Pronto offline" e escolha "Guardar de novo (obter a versão mais recente)". Para libertar espaço, escolha "Remover a cópia offline". Ver [Trabalhar offline](common:offline).

**A ajuda não abre**
Prima {{key:F1}} (num Mac, com **fn**), ou escolha {{ui:Ajuda}} na barra no topo. Também funciona offline.

## Coisas perdidas

**As minhas anotações desapareceram depois de fechar ou recarregar o separador**
Volte a abrir o MarkupCraft no mesmo navegador: ele oferece o trabalho não guardado com "Recuperar o seu trabalho?". Escolha {{ui:Recuperar}} e guarde o PDF. As cópias são mantidas até 30 dias; uma janela privada, ou limpar os dados do sítio, não deixa nenhuma. Ver [Recuperar o seu trabalho](common:recover).

**As minhas definições de nome, de ferramentas ou a minha caixa de ferramentas desapareceram**
Ficam guardadas só neste navegador e foram apagadas (dados do sítio limpos, uma janela privada, outro navegador ou computador, ou a limpeza do Safari a sítios não visitados há algum tempo). Defina o nome de novo e importe a caixa exportada. Ver [O que fica guardado neste navegador](topic:browser-storage).

**"A caixa de ferramentas não pôde ser mantida neste navegador (o armazenamento está desligado ou cheio). Exporte-a para a guardar."**
O navegador recusa guardar dados deste sítio (modo privado, armazenamento bloqueado por uma definição ou política, ou cheio). Exporte a caixa depois de a alterar, e importe-a da próxima vez.

## Ecrã e velocidade

**A folha fica desfocada por um momento**
O MarkupCraft mostra uma renderização rápida e grosseira enquanto faz zoom ou desloca a vista, e volta a desenhá-la nítida pouco depois de parar.

**Tudo está lento com um conjunto grande**
Feche outros separadores pesados, abra menos ficheiros de cada vez e evite o zoom máximo em folhas enormes. Ver [Trabalhar com vários ficheiros de cada vez](topic:several-files#big-sets).

**A folha está escura com linhas claras**
Está no tema {{ui:Modelo}}. Escolha {{ui:Papel}} na barra no topo para linhas escuras em fundo branco. As suas anotações e o PDF guardado não são afetados.
