---
title: Preencher um formulário em PDF
summary: Digite nos campos de formulário de um PDF, marque as suas caixas e escolha nas suas listas; os valores são salvos no próprio formulário.
keywords: formulário, formulários, preenchível, preencher, preenchimento, acroform, campo, campos, campo de texto, caixa de seleção, marcar, botão de opção, lista suspensa, lista, licença, requerimento, formulário de inspeção, formulário de submittal, assinar
from: ab366541
---

Muitos PDFs vêm com um formulário: pedidos de licença, listas de verificação de inspeção, folhas de rosto de submittals. O MarkupCraft mostra os campos do formulário e os seus valores, e permite preenchê-los. Os valores vão para os campos do próprio PDF, então o Acrobat e qualquer outro leitor de PDF os mostram e os mantêm.

## Preencher o formulário

1. Abra o PDF. Quando ele tem um formulário, a barra de status informa quantos campos ele tem.
2. Escolha {{ui:Preencher formulário}} na barra de ferramentas (ou pressione {{key:F}}). Cada campo da página ganha uma caixa onde você pode digitar.
3. Clique em um campo e digite. Marque as caixas de seleção, escolha os botões de opção e selecione nas listas suspensas e nas listas. {{key:Tab}} vai para o próximo campo.
4. Para mover a folha enquanto preenche, arraste em qualquer área fora dos campos.
5. Pressione {{key:Esc}} ou escolha outra ferramenta quando terminar. O que você digitou permanece na folha.

Com {{ui:Selecionar}}, um clique duplo em um campo ativa {{ui:Preencher formulário}} e coloca você nesse campo.

## Salvar o formulário preenchido

Escolha {{ui:Salvar}}. A cópia que você baixa tem os seus valores nos campos, com as suas marcações ao lado. A barra de status informa quantos campos foram preenchidos.

Para entregar um formulário que ninguém possa alterar, escolha {{ui:Páginas}}, depois {{ui:Salvar uma cópia achatada…}}: os valores passam a fazer parte da página. Imprimir faz o mesmo.

## Bom saber

- Um campo que o PDF bloqueia (somente leitura) não pode ser alterado. A sua caixa fica cinza.
- O texto até o limite de caracteres do próprio campo é mantido; caracteres extras não são digitados.
- Alguns formulários vêm sem o desenho das caixas e dos botões, e outros programas os mostram em branco. O MarkupCraft os desenha e, ao salvar, adiciona a imagem, para que apareçam em qualquer lugar.
- O desfazer dentro de um campo é o próprio do campo: pressione {{key:Ctrl+Z}} enquanto digita nele. O desfazer das marcações não desfaz os valores do formulário.
- Se o navegador fechar, os valores digitados voltam junto com o restante do seu trabalho não salvo.
- Valores digitados em letras que a fonte padrão do PDF não consegue escrever (por exemplo, chinês) são salvos, e o PDF pede a cada leitor que os desenhe.
- Campos de assinatura e botões de pressão não são preenchidos aqui. Para assinar, use {{ui:Carimbo}} e a sua assinatura.
- Valores digitados em um formulário ainda não são compartilhados em uma sessão Live.
