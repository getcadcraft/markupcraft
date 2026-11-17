---
title: Todos os tipos de marcação
summary: Os dezessete tipos de marcação, suas teclas, como cada um é desenhado, sua aparência padrão e o que ele se torna no PDF salvo.
keywords: tipos de marcação, lista de ferramentas, tipos de anotação, nuvem, chamada, texto, nota, carimbo, caneta, destaque, linha, seta, retângulo, elipse, polilinha, polígono, comprimento, área, contagem
from: 29bf32e7
---

## As ferramentas

| Barra de ferramentas | Tecla | Como desenhar | Aparência padrão | No PDF salvo |
|---|---|---|---|---|
| {{ui:Caneta}} | {{key:P}} | Arrastar | Vermelha, 1.5 pt | Tinta |
| {{ui:Destaque}} | {{key:I}} | Arrastar | Amarela, 14 pt de largura, transparente, tinge o que está sob ela | Tinta (marcada como traço de destaque) |
| {{ui:Linha}} | {{key:L}} | Arrastar, ou clicar no início e no fim | Vermelha, 2 pt | Linha |
| {{ui:Seta}} | {{key:A}} | Arrastar, ou clicar no início e no fim | Vermelha, 2 pt, ponta fechada no fim | Linha com ponta de seta |
| {{ui:Arco}} | {{key:O}} | Clicar no início, em um ponto do arco e depois no fim | Vermelho, 2 pt | Polilinha ao longo do arco |
| {{ui:Retângulo}} | {{key:R}} | Arrastar uma caixa | Vermelho, 2 pt, sem preenchimento | Quadrado |
| {{ui:Elipse}} | {{key:E}} | Arrastar uma caixa | Vermelha, 2 pt, sem preenchimento | Círculo |
| {{ui:Polilinha}} | {{key:Y}} | Clicar nos pontos, clique duplo para finalizar | Vermelha, 2 pt | Polilinha |
| {{ui:Polígono}} | {{key:G}} | Clicar nos pontos, clique duplo para finalizar | Vermelho, 2 pt, sem preenchimento | Polígono |
| {{ui:Nuvem}} | {{key:C}} | Arrastar uma caixa | Vermelha, ondas de 1.5 pt | Quadrado com borda de nuvem |
| {{ui:Nuvem livre}} | {{key:Shift+C}} | Clicar nos pontos, clique duplo para finalizar | Vermelha, ondas de 1.5 pt | Polígono com borda de nuvem |
| {{ui:Chamada}} | {{key:K}} | Pressionar no ponto, arrastar até o texto, digitar | Texto e linha de chamada vermelhos, 1 pt, texto de 12 pt | Caixa de texto com linha de chamada |
| {{ui:Texto}} | {{key:T}} | Clicar ou arrastar uma caixa, digitar | Texto vermelho de 12 pt, sem borda | Caixa de texto |
| {{ui:Nota}} | {{key:N}} | Clicar, digitar | Ícone de nota amarelo | Nota adesiva |
| {{ui:Carimbo}} | {{key:S}} | Escolher um carimbo, clicar ou arrastar | Maiúsculas em moldura mais "Por <nome>, <data>"; colorido conforme o significado | Carimbo |
| {{ui:Comprimento}} | {{key:M}} | Clicar no início e no fim (precisa de escala) | Linha de cota azul com marcas e o comprimento | Linha marcada como cota, com uma medição |
| {{ui:Ângulo}} | {{key:X}} | Clicar na ponta de um braço, no vértice e depois na ponta do outro braço | Braços azuis, um pequeno arco no vértice e o ângulo em graus | Polilinha com o ângulo como texto |
| {{ui:Área}} | {{key:Q}} | Clicar nos cantos, clique duplo para finalizar (precisa de escala) | Contorno azul, preenchimento azul claro, área e perímetro | Polígono marcado como área, com uma medição |
| {{ui:Contagem}} | {{key:U}} | Clicar em cada item | Pontos laranja numerados e uma etiqueta "grupo: n" | Um comentário de tinta por grupo, um anel por item |

No toque, "clique duplo para finalizar" é um toque duplo, e "clicar" é um toque que age quando você levanta o dedo (para pontos, notas e contagens).

## O que cada marcação carrega

| Campo | Onde você vê |
|---|---|
| Autor | {{ui:Propriedades}}, a lista, a segunda linha do carimbo, outros visualizadores de PDF |
| Criada e modificada | {{ui:Propriedades}} (no seu fuso horário), a lista, o CSV |
| Status | Aberto, Aceito, Rejeitado ou Concluído |
| Assunto | Um rótulo curto; o padrão é o tipo ("Nuvem", "Caixa de texto", "Medição de comprimento") |
| Comentário | Notas mais longas. Para uma nota, o texto dela é o comentário. |
| Texto | Somente caixas de texto e chamadas |
| Respostas | A conversa, com as mudanças de status |
| Item de pendência | Número, responsável, data de vencimento, status do item, quando adicionado à lista de pendências |
| Estilo | Cor, espessura da linha, preenchimento e opacidade do preenchimento (formas fechadas, texto e chamadas), opacidade, tamanho do texto (texto, chamadas e medições) |

## Comentários somente leitura

Comentários que vieram com o arquivo e que o MarkupCraft não pode editar (destaques de texto, carimbos de outros programas e outros tipos especiais) aparecem na lista com o tipo "Outro" e a etiqueta de status "Somente leitura". Eles mantêm exatamente a aparência que o arquivo lhes dá. Você pode selecioná-los, ver o autor, o assunto e o comentário, e respondê-los.

## Ainda não implementado

Anexos de arquivo ainda não estão implementados. Qualquer marcação pode ter um link para uma folha; veja [Links entre folhas](topic:sheet-links). Imagens e assinaturas são colocadas com a ferramenta {{ui:Carimbo}}; veja [Carimbos e notas](topic:stamps-and-notes). Veja [O que ainda não foi implementado](topic:not-built-yet).
