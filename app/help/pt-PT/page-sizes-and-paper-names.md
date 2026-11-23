---
title: Formatos de página e nomes de papel
summary: Veja o tamanho de cada página PDF em milímetros e polegadas e o seu nome de papel (séries A, B e C, ANSI, ARCH), e agrupe um conjunto misto por tamanho para encontrar as páginas fora do padrão.
keywords: tamanho da página, formato do papel, nome do papel, a0, a1, a2, a3, a4, série b, série c, ansi, arch, arquitetónico, mm, polegadas, tamanho personalizado, por tamanho, tamanho atípico, conjunto misto, verificar pdf, cliente, problema, mediabox, cropbox, rotação
from: 08e1354f
---

Antes de um conjunto ir para um cliente, verifique que cada folha tem o tamanho que deve ter. {{ui:MarkupCraft}} lê o tamanho de cada página a partir do próprio PDF e indica o nome do papel.

## O que vai fazer

Veja o tamanho de uma folha e depois agrupe o conjunto inteiro por tamanho.

## Passos

1. Abra os PDF ({{ui:Abrir}}), depois prima {{key:Esc}} até nada estar selecionado e {{ui:Selecionar}} estar ativo.
2. Veja {{ui:Propriedades}}. {{ui:Papel}} indica o nome e a orientação, por exemplo "A4, retrato". {{ui:Formato}} dá milímetros e polegadas.
3. Cada linha da lista {{ui:Folhas}} tem uma linha de tamanho por baixo do nome da folha.
4. Escolha {{ui:Por tamanho}} no cabeçalho de {{ui:Folhas}}. A lista agrupa as folhas sob um título por tamanho, começando pelo grupo maior. Um tamanho com apenas algumas folhas é assinalado como caso isolado.
5. Escolha {{ui:Por tamanho}} de novo para voltar à ordem do próprio conjunto.

Resultado: uma página com tamanho diferente das restantes fica fácil de ver antes de enviar o conjunto.

## Como o nome é escolhido

- O tamanho vem da caixa da página no PDF, com a rotação aplicada, por isso um A3 em paisagem continua a ser A3.
- Os nomes são as séries A e B (ISO 216), a série C (ISO 269), ANSI A a E e ARCH A a E.
- Uma página a menos de 2 mm de um tamanho nomeado fica com esse nome. Qualquer outra página indica {{ui:personalizado}}, e {{ui:Formato nomeado mais próximo}} diz qual o tamanho mais próximo e a que distância está.
- As polegadas vêm do tamanho real da página, por isso uma página A4 tem 8.26 por 11.69 in.

## Nos ficheiros que guarda

O resumo em folha de cálculo ({{ui:Lista de anotações}}, depois a folha de cálculo) tem uma coluna {{ui:Formato do papel}} na folha {{ui:Por folha}} e uma folha de cálculo {{ui:Formatos das páginas}}. O relatório PDF tem uma linha "Formatos das páginas" com a contagem de cada tamanho.

:::note
Os valores em polegadas ANSI e ARCH foram digitados a partir das tabelas publicadas e não foram comparados com as normas impressas. Trate uma página "personalizada" que esteja perto de um deles como algo a verificar por si.
:::
