---
title: Primeiros passos com o MarkupCraft
summary: Abra um conjunto de plantas, coloque a sua primeira nuvem e chamada numa folha e guarde uma cópia anotada.
keywords: início, primeiros passos, abrir pdf, revisão, anotação, marcação a vermelho, caneta vermelha, conjunto de plantas, tutorial, início rápido
from: 0b1aae4e
---

O MarkupCraft serve para rever desenhos: abre conjuntos de plantas em PDF, anota-os com nuvens, chamadas, texto, carimbos e medições, acompanha o estado de cada comentário e guarda uma cópia do PDF que qualquer visualizador de PDF consegue mostrar.

Funciona no navegador. Os seus PDF são abertos no seu próprio computador e **nunca são carregados** para um servidor. Guardar transfere uma cópia nova; o ficheiro original não é alterado.

:::note
O MarkupCraft está em desenvolvimento. A ajuda descreve a versão que está a utilizar. O que ainda não faz está listado em [O que ainda não está implementado](topic:not-built-yet).
:::

## O que precisa

- Um Chrome, Edge, Firefox ou Safari recente num computador Mac, Windows ou Linux, ou o Safari ou Chrome num iPad. Veja [Navegadores e computadores](common:browsers).
- Um ou mais ficheiros PDF. Um conjunto de plantas inteiro pode ser um só PDF ou vários.
- Um rato com roda é o mais confortável. Um trackpad funciona, e um ecrã tátil também (veja [Rever num iPad ou num ecrã tátil](topic:review-on-a-tablet)).

## A sua primeira revisão em dez passos

1. Abra o MarkupCraft no navegador. O meio do ecrã diz «Abra um conjunto de plantas».
2. Escolha {{ui:Abrir PDF}} (ou {{ui:Abrir}} na extremidade esquerda da barra de ferramentas, ou prima {{key:Mod+O}}), escolha um ou mais PDF e confirme.
   Também pode arrastar PDF de {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o seu gestor de ficheiros}} e largá-los na área da folha.
   Na primeira vez, a barra de estado em baixo diz «A carregar o leitor de PDF…». Depois cada página passa a ser uma folha na lista {{ui:Folhas}} à esquerda, e a primeira folha preenche o meio.
3. Clique numa folha da lista para a mostrar. Rode a roda do rato sobre a folha para aumentar o zoom onde está o ponteiro.
4. Escolha {{ui:Nuvem}} no grupo {{ui:Rever}} da barra de ferramentas (ou prima {{key:C}}).
   Na primeira vez que escolhe uma ferramenta de desenho, o MarkupCraft pede o seu nome. Escreva-o e escolha {{ui:Guardar}}. Cada anotação regista-o. (Mais em [Definir o nome do autor](topic:set-your-name).)
5. Arraste uma caixa à volta da zona que quer assinalar. Aparece uma nuvem de revisão vermelha, já selecionada.
6. Escolha {{ui:Chamada}} no grupo {{ui:Anotar}} (ou prima {{key:K}}). Prima sobre aquilo a que está a apontar, arraste até onde o texto deve ficar e largue.
7. Escreva o seu comentário na caixa que aparece. Clique em qualquer sítio fora da caixa (ou prima {{key:Mod+Enter}}) para terminar.
8. Prima {{key:Esc}} duas vezes: uma para limpar a seleção, outra para voltar à ferramenta {{ui:Selecionar}}. Clique na nuvem. O separador {{ui:Propriedades}} à direita mostra quem a fez, quando, e o seu {{ui:Estado}}.
9. Escolha {{ui:Guardar}} na barra de ferramentas (ou prima {{key:Mod+S}}).
   O navegador transfere uma cópia com um nome como «A-Plans (marked up).pdf». A barra de estado indica quantas anotações foram escritas.
10. Abra essa cópia em qualquer visualizador de PDF para verificar: a nuvem e a chamada lá estão, como comentários de PDF normais com o seu nome.

Para continuar a trabalhar mais tarde, abra no MarkupCraft a cópia «(marked up)». As suas anotações voltam editáveis, com os respetivos estados, respostas e números da lista de anomalias.

## Online e offline

:::online
Está online. O MarkupCraft carrega o leitor de PDF na primeira vez que abre um PDF e o gravador de PDF na primeira vez que guarda. Para trabalhar mais tarde sem ligação (numa visita à obra, num avião), escolha agora {{ui:Guardar para offline}} na barra no topo e aguarde por «Pronto para offline». A cópia inclui o leitor e o gravador de PDF, pelo que abrir e guardar PDF passa a funcionar offline. Veja [Trabalhar offline](common:offline).
:::

:::offline
Está offline. Se a barra no topo disser «Pronto para offline», o MarkupCraft foi guardado para utilização offline neste navegador e tudo funciona: abrir, anotar, medir, guardar. Se não foi, use o que já foi carregado neste separador e não recarregue a página até voltar a estar online. Veja [Trabalhar offline](common:offline).
:::

## O que a aplicação memoriza e o que não memoriza

- **As suas anotações ficam no PDF que guarda.** Nada é mantido num servidor. A aplicação não guarda o PDF por si, mas mantém uma cópia de recuperação neste navegador até o fazer. Guarde antes de fechar o separador; o navegador pergunta primeiro se tentar sair com anotações por guardar (exceto num iPad, veja [Rever num iPad ou num ecrã tátil](topic:review-on-a-tablet)).
- **O seu nome, os estilos das suas ferramentas e a sua caixa de ferramentas** ficam neste navegador, neste computador. Outro navegador ou computador começa do zero, e limpar os dados do site no navegador remove-os. Veja [O que fica neste navegador](topic:browser-storage).
- Guardar na nuvem e sessões de revisão partilhadas entre pessoas ainda não estão disponíveis.

## Para onde ir a seguir

- [Uma visita ao ecrã](topic:workspace)
- [Anotar uma folha](topic:mark-up-a-sheet)
- [Calibrar uma folha e medir](topic:calibrate-and-measure)
- [Se vem de outro software de anotação](topic:coming-from), caso já reveja desenhos noutro programa.
