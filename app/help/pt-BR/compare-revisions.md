---
title: Comparar duas revisões
summary: Sobreponha uma emissão antiga e uma nova de uma folha em duas cores, alinhe-as por dois pontos e coloque nuvens no que mudou.
keywords: comparar, sobreposição, sobrepor páginas, revisão, diferença, diff, alterações, antiga, nova, alinhar, verificação, emissão, boletim
from: 62f5d1c5
---

Comparar sobrepõe duas folhas. Linhas que existem só na folha antiga aparecem em vermelho, linhas que existem só na folha nova em azul, e linhas nas duas em cinza suave. As cores são nomeadas na legenda sob a folha: "Somente na folha antiga", "Somente na folha nova", "Nas duas".

## Comparar duas folhas

1. Abra as duas emissões. Elas podem ser páginas do mesmo PDF ou de PDFs diferentes; abra-as juntas como um conjunto (veja [Trabalhar com vários arquivos ao mesmo tempo](topic:several-files)).
2. Escolha a guia {{ui:Comparar}} à direita.
3. Escolha a {{ui:Folha antiga}} e a {{ui:Folha nova}}. A folha nova começa sendo a que você está vendo. Quando vários arquivos estão abertos, o nome do arquivo de cada folha aparece depois do nome dela.
4. Escolha {{ui:Comparar}}.

Resultado: o MarkupCraft mostra a folha nova com a antiga misturada, a legenda aparece, e a guia diz "Comparando <antiga> (antiga) com <nova> (nova). As marcações na folha nova continuam editáveis."

## Esmaecer entre antiga e nova

Arraste o controle deslizante {{ui:Antiga e nova}}. Totalmente à esquerda mostra somente a folha antiga, totalmente à direita somente a nova, e no meio mostra as duas. Ir e voltar com o controle costuma ser a forma mais rápida de ver uma pequena mudança.

## Alinhar as folhas

Se as duas emissões foram plotadas com margem, tamanho ou rotação diferentes, tudo parece alterado. Corrija:

**Por dois pontos (melhor):**

1. Escolha {{ui:Alinhar por dois pontos}}. A visão mostra somente a folha antiga.
2. Clique em um detalhe nítido que você encontre nas duas folhas, como a interseção de uma malha de pilares. A guia conta os passos ("1 de 4").
3. Clique em um segundo detalhe, distante do primeiro, como o canto oposto da malha.
4. A visão passa para a folha nova. Clique de novo no primeiro detalhe.
5. Clique de novo no segundo detalhe.

Resultado: "Alinhada: folha antiga em escala 100.00%, girada 0.00°. Ajuste para refinar." A folha antiga é movida, redimensionada e girada para se encaixar. {{key:Esc}} cancela enquanto você escolhe. Aplique zoom em cada detalhe antes de clicar para um encaixe preciso.

**Por deslocamento:** use os quatro botões de seta sob "Alinhar" para mover a folha antiga. Escolha o passo (0.25, 1, 5 ou 20 pt; 72 pt é uma polegada no papel). A guia informa quanto ela se moveu.

{{ui:Redefinir}} remove o alinhamento e os deslocamentos.

## Somente linhas alteradas

Nos botões de alinhamento, escolha {{ui:Linhas alteradas}} em vez de {{ui:Sobreposição de imagem}}. O MarkupCraft então compara as linhas próprias das duas folhas, não as imagens: a folha nova aparece como está, com as linhas que existem só na folha antiga em vermelho e as que existem só na nova em azul. Uma linha que só ficou mais curta mostra apenas a parte que falta. Alinhe as folhas primeiro (veja acima): a comparação usa o alinhamento, então uma folha que só foi deslocada não mostra alterações. A linha de status informa quanto mudou.

Isto funciona para PDFs plotados a partir de CAD, onde o desenho é feito de linhas. Folhas digitalizadas não têm linhas para comparar: use a sobreposição de imagem para elas. Texto em fonte (não desenhado como traços) não é comparado.

## Marcar as alterações

Enquanto compara, você está na folha nova e todas as ferramentas funcionam. Desenhe nuvens ao redor das alterações à medida que as encontra; elas pertencem à folha nova e permanecem quando você para de comparar.

{{ui:Nuvem nas alterações}} faz isso por você: agrupa as linhas alteradas que ficam próximas e desenha uma nuvem de revisão ao redor de cada grupo na folha nova, com "Alterado desde <folha antiga>" como comentário. Um {{key:Mod+Z}} remove todas; apague as que não quiser.

## Comparar um conjunto inteiro

Quando a nova emissão chega como um PDF próprio, abra os dois PDFs e abra {{ui:Comparar dois conjuntos}} na guia {{ui:Comparar}}. Escolha o arquivo antigo e o novo, depois escolha {{ui:Comparar os conjuntos}}. As folhas são pareadas pelo número (como em [substituição de folhas](topic:slip-sheet-a-revised-set)), comparadas pelas linhas e listadas com as mais alteradas primeiro. Escolha uma folha na lista para comparar esse par com {{ui:Linhas alteradas}}.

{{ui:Nuvem em todas as alterações}} desenha nuvens em todos os grupos de linhas alteradas em todas as folhas alteradas, em um único passo que você pode desfazer. A comparação de conjunto não alinha as folhas antes, então uma folha que foi deslocada na página aparece como alterada: compare esse par sozinho e use {{ui:Alinhar por dois pontos}}.

## Parar de comparar

Escolha {{ui:Parar de comparar}}, ou vá para outra folha. O alinhamento fica guardado para o mesmo par de folhas até você fechar o conjunto.

## Bom saber

- Comparar funciona sobre o que está desenhado, pixel por pixel. Não sabe que uma linha foi movida; mostra a posição antiga em uma cor e a nova na outra.
- Texto que mudou de lugar com a quebra de linhas, uma data alterada na legenda ou um estilo de plotagem diferente também aparecem como alterações.
- Uma folha digitalizada comparada com uma plotada fica com ruído: a digitalização borra e desloca as linhas.
- Comparar texto escrito em fonte e uma lista do que mudou ainda não estão implementados.
