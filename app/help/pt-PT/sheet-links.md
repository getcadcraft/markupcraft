---
title: Ligações entre folhas
summary: Faça uma anotação saltar para outra folha, e ligue cada chamada de folha, como 3/A-501, à sua folha e vista de uma só vez com as Ligações em lote.
keywords: hiperligação, ligação, ligações, saltar, chamada de folha, chamada de detalhe, chamada de secção, 3/A-501, ir para a folha, voltar, ligação automática, ligações em lote, legenda, número da folha, nome da folha, vista, detalhe, mudar o nome, renumerar, aditamento, ligação pdf
from: 86a17c37
---

Uma ligação de folha leva-o de uma anotação para outra folha do conjunto: de uma bolha de detalhe até ao detalhe, ou de uma nota até à folha a que se refere.

## Ligar uma anotação a uma folha

1. Selecione a anotação.
2. Em {{ui:Propriedades}}, escolha a folha em {{ui:Ligação a folha}}.

Aparece uma pequena seta no canto superior direito da anotação. Para a seguir, mantenha {{key:Mod}} premido e clique na anotação, ou selecione-a e escolha {{ui:Ir para …}} em {{ui:Propriedades}}. {{key:Alt+Left}} volta à folha de onde veio.

Uma ligação indica a folha pelo seu número, por isso continua a funcionar depois de reabrir o conjunto ou de o substituir por um conjunto revisto: abre a folha mais recente com esse número. Se essa folha não estiver aberta, a barra de estado indica-o.

## Ligar todas as chamadas de folha de uma vez

Escolha {{ui:Páginas}} › {{ui:Ligações em lote…}}, ou {{ui:Ligar chamadas de folha…}} em {{ui:Procurar texto}} no topo do painel {{ui:Folhas}}.

1. **Verifique os números das folhas.** O MarkupCraft lista cada folha aberta com o número e o nome que leu da legenda da folha (ou da etiqueta de página), e de onde veio cada um. Corrija os que estiverem errados, e escreva um número onde não encontrou nenhum (uma legenda cujo número foi impresso como linhas não tem texto para ler). Depois escolha {{ui:Procurar chamadas}}. As correções feitas são um só passo de anulação, e passam a ser as etiquetas de página do PDF guardado.
2. **Reveja a lista.** O MarkupCraft lê o texto de cada folha em busca de chamadas como "3/A-501", "5 / A501", "DETAIL 2 ON A-501", uma bolha com "3" sobre "A-501", ou um simples "A-501" numa nota, e lê os títulos das vistas de cada folha (um número de detalhe com o número da folha por baixo, ou um número grande com um título ao lado). A lista tem três partes:
   - {{ui:Será ligado}}: cada chamada, a folha para onde vai e a vista nessa folha. Desmarque as que não quer. Se a vista não for encontrada (uma chamada para a vista 7 numa folha com as vistas 1 a 6), escolha a vista na lista ao lado, ou deixe {{ui:Folha inteira}}.
   - {{ui:Sem ligação}}: números de folha que nenhuma folha aberta tem, com a contagem de chamadas que citam cada um. Escolha a folha a que cada um se refere (por exemplo, uma folha que foi renumerada), e todas as chamadas para esse número ficam ligadas a ela. Ou deixe-a sem ligação.
   - Quantas chamadas já estão ligadas e continuam a ir para o sítio certo. Ficam como estão.
3. Escolha {{ui:Criar as ligações}}.

Cada chamada recebe uma caixa azul fina que é uma ligação de folha. {{key:Mod}}+clique nela abre a folha com zoom na vista. Um {{key:Mod+Z}} remove todas.

Códigos que só parecem números de folha, como R-19 ou W12X26, ficam de fora: uma chamada tem de ter a forma dos números de folha do próprio conjunto. O número de uma folha, na sua legenda e nos títulos das suas vistas, nunca é uma chamada. As folhas digitalizadas não têm texto para ler: use primeiro {{ui:Ler texto (OCR)…}}, ou ligue as chamadas uma a uma.

## Voltar a executar quando o conjunto muda

As ligações em lote podem ser executadas com a frequência que quiser:

- **Foi acrescentada uma folha**, como um aditamento com A-601: abra o seu ficheiro e volte a executar as Ligações em lote. As chamadas para A-601 que não ligavam antes passam a ligar-se.
- **Uma folha foi renumerada**: corrija o número dela no passo 1. As ligações feitas pelas Ligações em lote que já não encontram a sua folha aparecem em {{ui:Sem ligação}}; escolha a folha uma vez e todas a seguem. As ligações que passaram para outra vista são atualizadas.
- As ligações feitas à mão em {{ui:Propriedades}} nunca são alteradas.

## No PDF guardado

Uma ligação para uma folha do mesmo PDF também é guardada como ligação PDF, para que os outros visualizadores saltem para lá com um clique. Uma ligação com vista abre essa vista noutro visualizador (o salto "fit rectangle" do PDF); uma sem vista abre a folha inteira. As ligações para uma folha de outro ficheiro do conjunto só funcionam no MarkupCraft.
