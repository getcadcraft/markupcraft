---
title: Comparar duas revisões
summary: Sobreponha uma emissão antiga e uma nova de uma folha em duas cores, alinhe-as por dois pontos e marque com nuvens o que mudou.
keywords: comparar, sobreposição, sobrepor páginas, revisão, diff, diferenças, alterações, antiga, nova, alinhar, verificação, emissão, boletim
from: 62f5d1c5
---

Comparar sobrepõe duas folhas. As linhas só na folha antiga aparecem a vermelho, as linhas só na folha nova a azul, e as linhas em ambas a cinzento esbatido. As cores estão indicadas na legenda por baixo da folha: «Só na folha antiga», «Só na folha nova», «Em ambas».

## Comparar duas folhas

1. Abra as duas emissões. Podem ser páginas do mesmo PDF ou de PDF diferentes; abra-as em conjunto como um só conjunto (veja [Trabalhar com vários ficheiros de uma vez](topic:several-files)).
2. Escolha o separador {{ui:Comparar}} à direita.
3. Escolha a {{ui:Folha antiga}} e a {{ui:Folha nova}}. A folha nova começa por ser a que está a ver. Quando há vários ficheiros abertos, o nome do ficheiro de cada folha aparece depois do seu nome.
4. Escolha {{ui:Comparar}}.

Resultado: o MarkupCraft mostra a folha nova com a antiga misturada, aparece a legenda, e o separador indica «A comparar <old> (antiga) com <new> (nova). As anotações na folha nova continuam editáveis.»

## Esbater entre antiga e nova

Arraste o controlo {{ui:Antiga e nova}}. Todo para a esquerda mostra apenas a folha antiga, todo para a direita apenas a nova, e a meio mostra ambas. Deslizar para trás e para a frente é muitas vezes a forma mais rápida de ver uma pequena alteração.

## Alinhar as folhas

Se as duas emissões foram impressas com margem, tamanho ou rotação diferentes, tudo parece alterado. Corrija:

**Por dois pontos (o melhor):**

1. Escolha {{ui:Alinhar por dois pontos}}. A vista mostra apenas a folha antiga.
2. Clique num pormenor nítido que consiga encontrar nas duas folhas, como a interseção de uma malha de pilares. O separador conta os passos («1 de 4»).
3. Clique num segundo pormenor, longe do primeiro, como o canto oposto da malha.
4. A vista passa para a folha nova. Clique de novo no primeiro pormenor.
5. Clique de novo no segundo pormenor.

Resultado: «Alinhado: folha antiga à escala 100.00%, rodada 0.00°. Desloque ligeiramente para afinar.» A folha antiga é movida, escalada e rodada para encaixar. {{key:Esc}} cancela enquanto escolhe. Faça zoom em cada pormenor antes de clicar para um encaixe preciso.

**Por deslocação:** use os quatro botões de seta sob «Alinhar» para mover a folha antiga. Escolha o passo (0.25, 1, 5 ou 20 pt; 72 pt é uma polegada no papel). O separador indica quanto se deslocou.

{{ui:Repor}} remove o alinhamento e as deslocações.

## Só linhas alteradas

Nos botões de alinhamento, escolha {{ui:Linhas alteradas}} em vez de {{ui:Sobreposição de imagem}}. O MarkupCraft compara então as próprias linhas das duas folhas, não as suas imagens: a folha nova mostra-se como está, com as linhas só na antiga a vermelho e as só na nova a azul. Uma linha que apenas ficou mais curta mostra só a parte que falta. Alinhe primeiro as folhas (ver acima): a comparação usa o alinhamento, por isso uma folha que foi só deslocada não mostra alterações. A linha de estado indica quanto mudou.

Isto funciona para PDF impressos a partir de CAD, em que o desenho é feito de linhas. As folhas digitalizadas não têm linhas para comparar: use a sobreposição de imagem para elas. O texto composto num tipo de letra (não desenhado como traços) não é comparado.

## Marcar as alterações

Ao comparar, está na folha nova e todas as ferramentas funcionam. Desenhe nuvens à volta das alterações à medida que as encontra; pertencem à folha nova e mantêm-se quando parar de comparar.

{{ui:Nuvem nas alterações}} faz isso por si: agrupa as linhas alteradas que ficam próximas umas das outras e desenha uma nuvem de revisão à volta de cada grupo na folha nova, com «Alterado desde <folha antiga>» como comentário. Um {{key:Mod+Z}} remove-as todas; apague as que não precisar.

## Comparar um conjunto inteiro

Quando a nova emissão chega como PDF próprio, abra os dois PDF e abra {{ui:Comparar dois conjuntos}} no separador {{ui:Comparar}}. Escolha o ficheiro antigo e o novo, e depois escolha {{ui:Comparar os conjuntos}}. As folhas são emparelhadas pelo número (como em [substituição de folhas](topic:slip-sheet-a-revised-set)), comparadas pelas suas linhas, e listadas com as mais alteradas primeiro. Escolha uma folha na lista para comparar esse par com {{ui:Linhas alteradas}}.

{{ui:Nuvem em todas as alterações}} desenha uma nuvem em cada grupo de linhas alteradas em cada folha alterada, num só passo que pode anular. A comparação de conjuntos não alinha previamente as folhas, por isso uma folha que foi deslocada na página aparece como alterada: compare esse par sozinho e use {{ui:Alinhar por dois pontos}}.

## Parar de comparar

Escolha {{ui:Parar de comparar}}, ou passe para outra folha. O alinhamento fica memorizado para o mesmo par de folhas até fechar o conjunto.

## Bom saber

- A comparação trabalha sobre o que está desenhado, pixel a pixel. Não sabe que uma linha se moveu; mostra a posição antiga numa cor e a nova na outra.
- Texto reajustado, uma data alterada na legenda ou um estilo de impressão diferente também aparecem como alterações.
- Uma folha digitalizada comparada com uma impressa é ruidosa: a digitalização desfoca e desloca as linhas.
- A comparação de texto escrito num tipo de letra e uma lista do que mudou ainda não estão implementadas.
