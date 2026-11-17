---
title: Preencher um formulário PDF
summary: Escrever nos campos de um formulário PDF, marcar as caixas e escolher nas listas; os valores ficam guardados no próprio formulário.
keywords: formulário, formulários, preenchível, preencher, campo, campos, campo de texto, caixa de verificação, marcar, botão de opção, lista pendente, lista, licença, pedido, formulário de inspeção, formulário de submissão, aprovar
from: ab366541
---

Muitos PDF incluem um formulário: pedidos de licença, listas de verificação de inspeções, folhas de rosto de submissões. O MarkupCraft mostra os campos do formulário e os respetivos valores, e permite preenchê-los. Os valores vão para os campos do próprio PDF, pelo que o Acrobat e qualquer outro leitor de PDF os mostram e mantêm.

## Preencher o formulário

1. Abra o PDF. Quando tiver um formulário, a barra de estado indica quantos campos tem.
2. Escolha {{ui:Preencher formulário}} na barra de ferramentas (ou prima {{key:F}}). Cada campo da página recebe uma caixa onde se pode escrever.
3. Clique num campo e escreva. Marque as caixas, escolha os botões de opção e selecione nas listas pendentes e nas listas. {{key:Tab}} passa para o campo seguinte.
4. Para mover a folha enquanto preenche, arraste em qualquer ponto fora dos campos.
5. Prima {{key:Esc}} ou escolha outra ferramenta quando terminar. O que escreveu fica na folha.

Com {{ui:Selecionar}}, um duplo clique num campo ativa {{ui:Preencher formulário}} e coloca o cursor nesse campo.

## Guardar o formulário preenchido

Escolha {{ui:Guardar}}. A cópia que transfere tem os seus valores nos campos, com as anotações ao lado. A barra de estado indica quantos campos foram preenchidos.

Para entregar um formulário que ninguém possa alterar, escolha {{ui:Páginas}} e depois {{ui:Guardar uma cópia achatada…}}: os valores passam a fazer parte da página. A impressão faz o mesmo.

## Bom saber

- Um campo que o PDF bloqueia (só de leitura) não pode ser alterado. A respetiva caixa fica cinzento.
- O texto até ao limite de comprimento do próprio campo é guardado; os caracteres a mais não são escritos.
- Alguns formulários não trazem o desenho das caixas e botões; outros programas mostram-nos em branco. O MarkupCraft desenha-os e, ao guardar, acrescenta a imagem, para que apareçam em todo o lado.
- Anular num campo é do próprio campo: prima {{key:Ctrl+Z}} enquanto escreve nele. A anulação das anotações não anula os valores do formulário.
- Se o navegador fechar, os valores que escreveu voltam com o resto do trabalho não guardado.
- Os valores escritos em caracteres que o tipo de letra PDF padrão não consegue escrever (por exemplo, chinês) são guardados, e o PDF pede a cada leitor que os desenhe.
- Os campos de assinatura e os botões de pressão não são preenchidos aqui. Para assinar, use {{ui:Carimbo}} e a sua assinatura.
- Os valores escritos num formulário ainda não são partilhados numa sessão Live.
