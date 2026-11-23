---
title: Tamanhos de página e nomes de papel
summary: Veja o tamanho de cada página do PDF em milímetros e polegadas e o nome do papel (séries A, B e C, ANSI, ARCH), e agrupe um conjunto misto por tamanho para encontrar as páginas fora do padrão.
keywords: tamanho de página, tamanho do papel, nome do papel, a0, a1, a2, a3, a4, série b, série c, ansi, arch, arquitetônico, mm, polegadas, tamanho personalizado, por tamanho, tamanho atípico, conjunto misto, verificar pdf, cliente, problema, mediabox, cropbox, rotação
from: 08e1354f
---

Antes de um conjunto ir para um cliente, confira se cada folha tem o tamanho que deveria ter. {{ui:MarkupCraft}} lê o tamanho de cada página no próprio PDF e nomeia o papel.

## O que você vai fazer

Veja o tamanho de uma folha e depois agrupe o conjunto inteiro por tamanho.

## Passos

1. Abra os PDFs ({{ui:Abrir}}), depois pressione {{key:Esc}} até nada estar selecionado e {{ui:Selecionar}} estar ativo.
2. Veja {{ui:Propriedades}}. {{ui:Papel}} informa o nome e a orientação, por exemplo "A4, retrato". {{ui:Tamanho}} dá milímetros e polegadas.
3. Cada linha da lista {{ui:Folhas}} tem uma linha de tamanho abaixo do nome da folha.
4. Escolha {{ui:Por tamanho}} no cabeçalho de {{ui:Folhas}}. A lista reúne as folhas sob um título por tamanho, começando pelo grupo maior. Um tamanho com apenas algumas folhas é marcado como fora do padrão.
5. Escolha {{ui:Por tamanho}} de novo para voltar à ordem original do conjunto.

Resultado: uma página com tamanho diferente do restante fica fácil de ver antes de você enviar o conjunto.

## Como o nome é escolhido

- O tamanho vem da caixa da página no PDF, com a rotação aplicada, então um A3 na horizontal continua sendo A3.
- Os nomes são as séries A e B (ISO 216), a série C (ISO 269), ANSI de A a E e ARCH de A a E.
- Uma página a até 2 mm de um tamanho nomeado recebe esse nome. Qualquer outra página diz {{ui:personalizado}}, e {{ui:Tamanho nomeado mais próximo}} informa qual tamanho está mais perto e a que distância.
- As polegadas vêm do tamanho real da página, então uma página A4 tem 8.26 por 11.69 in.

## Nos arquivos que você salva

A planilha-resumo ({{ui:Lista de marcações}}, depois a planilha) tem uma coluna {{ui:Tamanho do papel}} na planilha {{ui:Por folha}} e uma planilha {{ui:Tamanhos de página}}. O relatório em PDF tem uma linha "Tamanhos de página" com a contagem de cada tamanho.

:::note
Os valores em polegadas de ANSI e ARCH foram digitados a partir das tabelas publicadas e não foram comparados com as normas impressas. Trate como uma questão para a sua própria conferência uma página "personalizado" que esteja próxima de um deles.
:::
