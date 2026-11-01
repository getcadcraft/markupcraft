---
title: Primeiros passos com o MarkupCraft
summary: Abra um conjunto de plantas, coloque sua primeira nuvem e chamada em uma folha e salve uma cópia com marcações.
keywords: início, primeiros passos, abrir pdf, revisão, marcação, caneta vermelha, conjunto de plantas, tutorial, início rápido
from: 0b1aae4e
---

O MarkupCraft serve para revisar desenhos: você abre conjuntos de plantas em PDF, marca com nuvens, chamadas, texto, carimbos e medições, acompanha o status de cada comentário e salva uma cópia do PDF que qualquer visualizador de PDF consegue mostrar.

Ele roda no navegador. Seus PDFs são abertos no seu próprio computador e **nunca são enviados**. Salvar baixa uma cópia nova; o arquivo original não é alterado.

:::note
O MarkupCraft está em desenvolvimento. A ajuda descreve a versão que você está usando. O que ele ainda não faz está em [O que ainda não foi implementado](topic:not-built-yet).
:::

## O que você precisa

- Um Chrome, Edge, Firefox ou Safari recente em um computador Mac, Windows ou Linux, ou Safari ou Chrome em um iPad. Veja [Navegadores e computadores](common:browsers).
- Um ou mais arquivos PDF. Um conjunto de plantas inteiro pode ser um PDF ou vários.
- Um mouse com roda é o mais confortável. Um trackpad funciona, e uma tela de toque também (veja [Revisar em um iPad ou tela de toque](topic:review-on-a-tablet)).

## Sua primeira revisão em dez passos

1. Abra o MarkupCraft no navegador. O meio da tela diz "Abra um conjunto de plantas".
2. Escolha {{ui:Abrir PDFs}} (ou {{ui:Abrir}} na extremidade esquerda da barra de ferramentas, ou pressione {{key:Mod+O}}), selecione um ou mais PDFs e confirme.
   Você também pode arrastar PDFs do {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} e soltá-los na área da folha.
   Na primeira vez, a barra de status na parte de baixo diz "Carregando o leitor de PDF…". Depois, cada página vira uma folha na lista {{ui:Folhas}} à esquerda, e a primeira folha preenche o meio.
3. Clique em uma folha da lista para mostrá-la. Gire a roda do mouse sobre a folha para aproximar onde o ponteiro está.
4. Escolha {{ui:Nuvem}} no grupo {{ui:Revisar}} da barra de ferramentas (ou pressione {{key:C}}).
   Na primeira vez que você escolhe uma ferramenta de desenho, o MarkupCraft pede o seu nome. Digite e escolha {{ui:Salvar}}. Cada marcação registra esse nome. (Mais em [Defina seu nome de autor](topic:set-your-name).)
5. Arraste uma caixa em volta da área que você quer sinalizar. Uma nuvem de revisão vermelha aparece e fica selecionada.
6. Escolha {{ui:Chamada}} no grupo {{ui:Anotar}} (ou pressione {{key:K}}). Pressione sobre aquilo que você está apontando, arraste até onde o texto deve ficar e solte.
7. Digite o comentário na caixa que aparece. Clique em qualquer lugar fora da caixa (ou pressione {{key:Mod+Enter}}) para terminar.
8. Pressione {{key:Esc}} duas vezes: uma para limpar a seleção, outra para voltar à ferramenta {{ui:Selecionar}}. Clique na nuvem. A guia {{ui:Propriedades}} à direita mostra quem a fez, quando, e o {{ui:Status}} dela.
9. Escolha {{ui:Salvar}} na barra de ferramentas (ou pressione {{key:Mod+S}}).
   O navegador baixa uma cópia com nome como "A-Plans (marked up).pdf". A barra de status informa quantas marcações foram gravadas.
10. Abra essa cópia em qualquer visualizador de PDF para conferir: a nuvem e a chamada estão lá, como comentários PDF normais com o seu nome.

Para continuar depois, abra a cópia "(marked up)" no MarkupCraft. Suas marcações voltam editáveis, com status, respostas e números de pendência.

## Online e offline

:::online
Você está online. O MarkupCraft carrega o leitor de PDF na primeira vez que você abre um PDF, e o gravador de PDF na primeira vez que você salva. Para trabalhar sem conexão mais tarde (em uma visita à obra, em um avião), escolha {{ui:Salvar para uso offline}} na barra do topo agora e espere por "Pronto para uso offline". A cópia inclui o leitor e o gravador de PDF, então abrir e salvar PDFs passam a funcionar offline. Veja [Trabalhar offline](common:offline).
:::

:::offline
Você está offline. Se a barra do topo disser "Pronto para uso offline", o MarkupCraft foi salvo para uso offline neste navegador e tudo funciona: abrir, marcar, medir, salvar. Se não foi, use o que já carregou nesta guia e não recarregue a página até voltar a ficar online. Veja [Trabalhar offline](common:offline).
:::

## O que o app lembra e o que não lembra

- **Suas marcações ficam no PDF que você salva.** Nada é guardado em um servidor. O app não salva o PDF sozinho, mas mantém uma cópia de recuperação neste navegador até você salvar. Salve antes de fechar a guia; o navegador pergunta primeiro se você tentar sair com marcações não salvas (exceto no iPad, veja [Revisar em um iPad ou tela de toque](topic:review-on-a-tablet)).
- **Seu nome, os estilos das suas ferramentas e a sua caixa de ferramentas** ficam neste navegador, neste computador. Outro navegador ou computador começa do zero, e limpar os dados do site no navegador os remove. Veja [O que fica neste navegador](topic:browser-storage).
- Salvamento na nuvem e sessões de revisão compartilhadas entre pessoas ainda não estão disponíveis.

## Para onde ir depois

- [Um passeio pela tela](topic:workspace)
- [Marque uma folha](topic:mark-up-a-sheet)
- [Calibre uma folha e meça](topic:calibrate-and-measure)
- [Vindo de outro software de marcação](topic:coming-from), se você já revisa desenhos em outro programa.
