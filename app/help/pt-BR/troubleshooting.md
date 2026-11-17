---
title: Solução de problemas
summary: Mensagens que o MarkupCraft mostra e o que fazer a respeito, além de correções para coisas que parecem não funcionar.
keywords: problema, erro, não funciona, ajuda, mensagem, não abre, não consigo salvar, senha, protegido, medição recusada, calibrar, offline, em branco, lento, marcações perdidas, pontos de interrogação
from: bb650b39
---

A maioria dos problemas é explicada na barra de status, na parte de baixo da tela. Leia-a primeiro.

## Abrir arquivos

**"O MarkupCraft abre arquivos PDF. "x" não é um PDF."**
Você escolheu ou soltou outra coisa. Só PDFs são abertos. Exporte primeiro os desenhos do seu programa CAD como PDF.

**'"nome" precisa de uma senha para abrir. Abra uma cópia sem proteção.'**
O PDF está protegido por senha. Peça ao remetente uma cópia sem proteção, ou abra o arquivo em um programa de PDF onde você conheça a senha e salve uma cópia sem senha.

**'"nome" não pôde ser lido como PDF (…)'**
O arquivo está danificado ou não é de fato um PDF (um download incompleto, um anexo de e-mail cortado). Baixe de novo. Se outros programas de PDF conseguem abri-lo, use a opção "salvar como" deles para criar uma cópia limpa e abra essa.

**"Alguns arquivos não foram abertos"**
Quando você abre vários de uma vez, esta caixa lista os arquivos que falharam e o motivo. Os outros estão abertos.

**"O leitor de PDF não pôde carregar: …"**
O mecanismo de PDF não pôde ser obtido. Online: recarregue a página e tente de novo; verifique se um firewall ou bloqueador de conteúdo não está bloqueando o site. Offline: o MarkupCraft não foi salvo para uso offline neste navegador (a barra no topo não diz "Pronto para uso offline"). Conecte-se, escolha {{ui:Salvar para uso offline}} e aguarde "Pronto para uso offline". Veja [Trabalhar offline](common:offline).

**"Algumas anotações podem aparecer duas vezes na tela" ou "Não foi possível ler detalhes extras das anotações"**
Os comentários existentes no arquivo são incomuns. Mesmo assim, eles são abertos da melhor forma que o MarkupCraft consegue; confira-os antes de confiar neles. Salvar continua funcionando.

**A folha tem o nome errado, ou "página 3"**
Veja [Como as folhas recebem seus nomes](topic:open-a-plan-set#how-sheets-get-their-names). Folhas digitalizadas não têm texto para ler; use {{ui:Renomear folha}}.

**As mesmas folhas aparecem duas vezes**
O mesmo arquivo foi aberto duas vezes. Escolha {{ui:Fechar}} (salve antes, se necessário) e abra o conjunto de novo.

## Desenhar e selecionar

**Nada acontece quando clico na folha**
Verifique qual ferramenta está pressionada na barra de ferramentas, e leia a barra de status. Com {{ui:Retângulo}}, {{ui:Elipse}} e {{ui:Nuvem}}, um clique sem arrastar não desenha nada: arraste. Com {{ui:Polilinha}}, {{ui:Polígono}}, {{ui:Nuvem livre}} e {{ui:Área}}, pontos estão sendo adicionados: termine com um clique duplo ou com {{key:Enter}}.

**"Um polígono precisa de pelo menos 3 pontos." (ou 2 para uma polilinha)**
Clique em mais pontos antes de terminar.

**"Nada digitado, então nenhum texto foi adicionado."**
Caixas de texto e chamadas só são mantidas quando têm texto. Desenhe de novo e digite antes de clicar em outro lugar.

**"Os dois pontos são iguais. Clique em dois pontos diferentes."**
Para linhas, setas, comprimentos e calibração, as duas extremidades precisam estar afastadas. Arraste, ou clique duas vezes em lugares diferentes.

**Não consigo mover nem excluir uma marcação; ela tem uma caixa tracejada cinza**
É um comentário somente leitura que veio com o arquivo (por exemplo, um destaque de texto). O MarkupCraft o mantém como está: você só pode respondê-lo. A barra de status diz "marcações somente leitura são mantidas como no arquivo".

**Minhas teclas digitam letras em uma caixa em vez de escolher ferramentas**
O cursor está em uma caixa de texto (uma resposta, um campo em {{ui:Propriedades}}, a busca na folha). Clique primeiro em uma parte vazia da área da folha, ou pressione {{key:Esc}} se estiver editando o texto de uma marcação.

**Espaço não move a folha, ou as teclas de seta não fazem nada**
Você acabou de clicar em um botão da barra de ferramentas, então ele ainda está com o teclado. Arraste com o botão do meio do mouse, ou clique uma vez na folha com {{ui:Selecionar}} ativo, e tente de novo. Veja também [Teclado e mouse](topic:keyboard#when-a-key-does-nothing).

**Um gesto de pinça na tela sensível ao toque deixou uma marca**
Uma ferramenta de arrastar (caneta, nuvem, retângulo) começou antes de o segundo dedo chegar e terminou antes de ser cancelada. Pressione {{ui:Desfazer}}. Coloque os dois dedos juntos quando quiser dar zoom.

## Medição

**"Calibre esta folha primeiro: escolha dois pontos a uma distância conhecida, ou escolha a sua escala. Depois meça."**
Cada folha precisa da sua própria escala antes de {{ui:Comprimento}} ou {{ui:Área}}. O MarkupCraft mudou para {{ui:Calibrar}}: clique nas duas extremidades de uma dimensão conhecida e digite o comprimento, ou clique no botão de escala na barra de status e escolha uma escala. Veja [Calibrar uma folha e medir](topic:calibrate-and-measure).

**'Esse não é um comprimento que o MarkupCraft entende.'**
Digite assim: `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`. Veja [Unidades, comprimentos e escalas](topic:units-and-scales).

**As medidas estão um pouco erradas, ou muito erradas**
- Uma escala predefinida em um PDF que não está em tamanho real mede errado. Calibre usando uma dimensão longa e conhecida.
- Um separador de milhar foi lido como ponto decimal: `1,200 mm` significa 1.2 mm. Digite `1200 mm`.
- Dê zoom ao clicar nas extremidades.
- O desenho pode não estar em escala ("NTS").

**"Selecione primeiro um grupo de contagem, depois Shift+clique em uma marca para removê-la."**
Escolha {{ui:Selecionar}}, clique no grupo de contagem, depois escolha {{ui:Contagem}} de novo e clique com {{key:Shift}} no ponto.

## Salvar

**"Este PDF está protegido (criptografado), então uma cópia com marcações não pode ser salva."**
O arquivo proíbe alterações. Peça uma cópia sem proteção. Enquanto isso, você ainda pode exportar a lista de marcações como CSV ou BCF.

**"O gravador de PDF não pôde carregar: …"**
Geralmente você está offline e o aplicativo não foi salvo para uso offline (sem "Pronto para uso offline" na barra no topo). Suas marcações ainda estão na aba: mantenha-a aberta, conecte-se e escolha {{ui:Salvar}} de novo. Depois escolha {{ui:Salvar para uso offline}} para que funcione offline da próxima vez; a cópia salva inclui o gravador de PDF.

**"Não foi possível salvar <arquivo>"**
A caixa mostra o motivo. Suas marcações ainda estão na aba. Tente de novo; se se repetir, exporte o CSV para que os comentários não se percam, e informe a mensagem.

**Escolhi Salvar, mas só um arquivo chegou**
O navegador bloqueou os downloads extras. Procure um aviso na barra de endereços e permita que este site baixe vários arquivos, depois salve de novo.

**Não encontro o arquivo salvo**
Ele foi para a pasta de downloads do navegador. Abra a lista de downloads do navegador (no Chrome e no Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; no Firefox e no Safari, o botão de downloads na barra de ferramentas) para ver onde ele está. Veja [Navegadores e computadores](common:browsers).

**Alguns textos mostram "?" em outros visualizadores de PDF**
Caracteres fora do conjunto da Europa Ocidental aparecem como "?" na cópia. A mensagem de salvamento conta quantos são. Veja [Salvar o PDF com marcações](topic:save-the-marked-up-pdf).

**A data do carimbo mostra amanhã (ou ontem)**
As datas dos carimbos estão em UTC. Veja [Carimbos e notas adesivas](topic:stamps-and-notes).

## Trabalhar offline

**O botão offline diz "Não foi possível salvar"**
Alguns arquivos do aplicativo não foram baixados. Verifique a conexão e clique no botão de novo; ele mostra "Salvando N de M" até "Pronto para uso offline".

**O botão offline diz "Offline não disponível"**
Esta janela do navegador não pode manter uma cópia offline: uma janela anônima, ou um computador cuja política bloqueia isso. Abra o MarkupCraft em uma janela normal e tente de novo.

**Offline, o aplicativo é uma versão mais antiga**
A cópia offline é a versão que você salvou. Quando estiver online, clique em "Pronto para uso offline" e escolha "Salvar de novo (obter a versão mais recente)". Para liberar espaço, escolha "Remover a cópia offline". Veja [Trabalhar offline](common:offline).

**A ajuda não abre**
Pressione {{key:F1}} (em um Mac, com **fn**), ou escolha {{ui:Ajuda}} na barra no topo. Ela também funciona offline.

## Coisas perdidas

**Minhas marcações sumiram depois de fechar ou recarregar a aba**
Abra o MarkupCraft de novo no mesmo navegador: ele oferece o trabalho não salvo de volta com "Recuperar seu trabalho?". Escolha {{ui:Recuperar}} e salve o PDF. As cópias são mantidas por até 30 dias; uma janela anônima, ou limpar os dados do site, não deixa nenhuma. Veja [Recuperar seu trabalho](common:recover).

**Meu nome, as configurações das ferramentas ou a caixa de ferramentas sumiram**
Eles ficam salvos somente neste navegador e foram apagados (dados do site limpos, janela anônima, outro navegador ou computador, ou a limpeza do Safari de sites não visitados por um tempo). Defina o nome de novo e importe a caixa exportada. Veja [O que fica salvo neste navegador](topic:browser-storage).

**"A caixa de ferramentas não pôde ser mantida neste navegador (o armazenamento está desligado ou cheio). Exporte-a para mantê-la."**
O navegador recusa armazenar dados deste site (modo privativo, armazenamento bloqueado por uma configuração ou política, ou cheio). Exporte a caixa depois de alterá-la, e importe-a na próxima vez.

## Exibição e velocidade

**A folha fica borrada por um momento**
O MarkupCraft mostra uma renderização rápida e aproximada enquanto você dá zoom ou move a folha, e a redesenha nítida um momento depois que você para.

**Tudo está lento com um conjunto grande**
Feche outras abas pesadas, abra menos arquivos de uma vez e evite dar zoom no máximo em folhas enormes. Veja [Trabalhar com vários arquivos ao mesmo tempo](topic:several-files#big-sets).

**A folha está escura com linhas claras**
Você está no tema {{ui:Modelo}}. Escolha {{ui:Papel}} na barra no topo para linhas escuras em fundo branco. Suas marcações e o PDF salvo não são afetados.
