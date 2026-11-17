---
title: Links de folha
summary: Faça uma marcação ir para outra folha e vincule cada chamada de folha, como 3/A-501, à sua folha e vista de uma vez com Links em lote.
keywords: hiperlink, link, links, ir para, chamada de folha, chamada de detalhe, chamada de seção, 3/A-501, ir para a folha, voltar, link automático, links em lote, legenda, número da folha, nome da folha, vista, detalhe, renomear, renumerar, aditivo, link de pdf
from: 86a17c37
---

Um link de folha leva você de uma marcação para outra folha do conjunto: de uma bolha de detalhe para o detalhe, ou de uma nota para a folha a que ela se refere.

## Vincular uma marcação a uma folha

1. Selecione a marcação.
2. Em {{ui:Propriedades}}, escolha a folha em {{ui:Vínculo com folha}}.

Uma pequena seta aparece no canto superior direito da marcação. Para segui-la, segure {{key:Mod}} e clique na marcação, ou selecione-a e escolha {{ui:Ir para …}} em {{ui:Propriedades}}. {{key:Alt+Left}} volta para a folha de onde você veio.

Um link nomeia a folha pelo número, então continua funcionando depois que você reabre o conjunto ou substitui uma folha por uma nova emissão: ele abre a folha mais recente com aquele número. Se essa folha não estiver aberta, a barra de status informa.

## Vincular todas as chamadas de folha de uma vez

Escolha {{ui:Páginas}} › {{ui:Links em lote…}}, ou {{ui:Vincular chamadas de folha…}} em {{ui:Buscar texto}} no topo do painel {{ui:Folhas}}.

1. **Confira os números das folhas.** O MarkupCraft lista cada folha aberta com o número e o nome que leu da legenda da folha (ou do rótulo da página), e de onde veio cada um. Corrija os que estiverem errados, e digite um número onde ele não encontrou nenhum (uma legenda cujo número foi plotado como linhas não tem texto para ler). Depois escolha {{ui:Encontrar chamadas}}. Suas correções são um passo de desfazer, e viram os rótulos de página no PDF salvo.
2. **Revise a lista.** O MarkupCraft lê o texto de cada folha em busca de chamadas como "3/A-501", "5 / A501", "DETALHE 2 EM A-501", uma bolha com "3" sobre "A-501", ou um simples "A-501" em uma nota, e lê os títulos de vista de cada folha (um número de detalhe com o número da folha embaixo, ou um número grande com um título ao lado). A lista tem três partes:
   - {{ui:Será vinculado}}: cada chamada, a folha para onde ela vai e a vista nessa folha. Desmarque as que não quiser. Se a vista não for encontrada (uma chamada para a vista 7 em uma folha com as vistas 1 a 6), escolha a vista na lista ao lado, ou deixe {{ui:Folha inteira}}.
   - {{ui:Não vinculado}}: números de folha que nenhuma folha aberta tem, com quantas chamadas citam cada um. Escolha a folha que cada um significa (por exemplo, uma folha que foi renumerada), e cada chamada para esse número se vincula a ela. Ou deixe sem vínculo.
   - Quantas chamadas já estão vinculadas e ainda vão para o lugar certo. Elas são mantidas como estão.
3. Escolha {{ui:Criar os vínculos}}.

Cada chamada ganha uma caixa azul fina, que é um link de folha. {{key:Mod}}+clique nela abre a folha com zoom na vista. Um {{key:Mod+Z}} remove todos.

Códigos que só parecem números de folha, como R-19 ou W12X26, ficam de fora: uma chamada precisa ter a forma dos números de folha do próprio conjunto. O número da própria folha, na legenda e nos títulos de vista, nunca é uma chamada. Folhas digitalizadas não têm texto para ler: use {{ui:Ler texto (OCR)…}} primeiro, ou vincule as chamadas uma a uma.

## Execute de novo quando o conjunto mudar

Os Links em lote podem ser executados quantas vezes você quiser:

- **Uma folha foi adicionada**, como um aditivo com A-601: abra o arquivo dele e execute Links em lote de novo. As chamadas para A-601 que não vinculavam antes passam a vincular.
- **Uma folha foi renumerada**: corrija o número dela no passo 1. Os links feitos pelos Links em lote que não encontram mais a folha ficam listados em {{ui:Não vinculado}}; escolha a folha uma vez e todos a seguem. Links que passaram para outra vista são atualizados.
- Links que você criou à mão em {{ui:Propriedades}} nunca são alterados.

## No PDF salvo

Um link para uma folha do mesmo PDF também é gravado como link PDF, então outros visualizadores também pulam para lá com um clique. Um link com vista abre essa vista no outro visualizador (o salto "fit rectangle" do PDF); um sem vista abre a folha inteira. Links para uma folha de outro arquivo do conjunto funcionam apenas no MarkupCraft.
