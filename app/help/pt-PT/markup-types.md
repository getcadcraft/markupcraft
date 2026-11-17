---
title: Todos os tipos de anotação
summary: Os dezassete tipos de anotação, as suas teclas, a forma como cada um é desenhado, o seu aspeto predefinido e o que se torna no PDF guardado.
keywords: tipos de anotação, lista de ferramentas, tipos de anotação, nuvem, chamada, texto, nota, carimbo, caneta, marcador de realce, linha, seta, retângulo, elipse, polilinha, polígono, comprimento, área, contagem
from: 29bf32e7
---

## As ferramentas

| Barra de ferramentas | Tecla | Como desenhar | Aspeto predefinido | No PDF guardado |
|---|---|---|---|---|
| {{ui:Caneta}} | {{key:P}} | Arrastar | Vermelha, 1.5 pt | Tinta |
| {{ui:Realce}} | {{key:I}} | Arrastar | Amarela, 14 pt de largura, transparente, tinge o que está por baixo | Tinta (marcada como traço de realce) |
| {{ui:Linha}} | {{key:L}} | Arrastar, ou clicar no início e no fim | Vermelha, 2 pt | Linha |
| {{ui:Seta}} | {{key:A}} | Arrastar, ou clicar no início e no fim | Vermelha, 2 pt, ponta de seta fechada no fim | Linha com ponta de seta |
| {{ui:Arco}} | {{key:O}} | Clicar no início, num ponto do arco, e depois no fim | Vermelho, 2 pt | Polilinha ao longo do arco |
| {{ui:Retângulo}} | {{key:R}} | Arrastar uma caixa | Vermelho, 2 pt, sem preenchimento | Quadrado |
| {{ui:Elipse}} | {{key:E}} | Arrastar uma caixa | Vermelha, 2 pt, sem preenchimento | Círculo |
| {{ui:Polilinha}} | {{key:Y}} | Clicar em pontos, duplo clique para terminar | Vermelha, 2 pt | Polilinha |
| {{ui:Polígono}} | {{key:G}} | Clicar em pontos, duplo clique para terminar | Vermelho, 2 pt, sem preenchimento | Polígono |
| {{ui:Nuvem}} | {{key:C}} | Arrastar uma caixa | Vermelha, ondulações de 1.5 pt | Quadrado com contorno de nuvem |
| {{ui:Nuvem livre}} | {{key:Shift+C}} | Clicar em pontos, duplo clique para terminar | Vermelha, ondulações de 1.5 pt | Polígono com contorno de nuvem |
| {{ui:Chamada}} | {{key:K}} | Premir sobre o ponto, arrastar até ao texto, escrever | Texto e linha de chamada vermelhos, 1 pt, texto de 12 pt | Caixa de texto com linha de chamada |
| {{ui:Texto}} | {{key:T}} | Clicar ou arrastar uma caixa, escrever | Texto vermelho de 12 pt, sem contorno | Caixa de texto |
| {{ui:Nota}} | {{key:N}} | Clicar, escrever | Ícone de nota amarelo | Nota adesiva |
| {{ui:Carimbo}} | {{key:S}} | Escolher um carimbo, clicar ou arrastar | Maiúsculas com moldura mais «Por <nome>, <data>»; cor conforme o significado | Carimbo |
| {{ui:Comprimento}} | {{key:M}} | Clicar no início e no fim (é preciso uma escala) | Linha de cota azul com traços e o comprimento | Linha marcada como cota, com uma medição |
| {{ui:Ângulo}} | {{key:X}} | Clicar na extremidade de um braço, no vértice, e depois na extremidade do outro braço | Braços azuis, um pequeno arco no vértice e o ângulo em graus | Polilinha com o ângulo como texto |
| {{ui:Área}} | {{key:Q}} | Clicar nos cantos, duplo clique para terminar (é preciso uma escala) | Contorno azul, preenchimento azul-claro, área e perímetro | Polígono marcado como área, com uma medição |
| {{ui:Contagem}} | {{key:U}} | Clicar em cada item | Pontos laranja numerados e uma etiqueta «grupo: n» | Um comentário de tinta por grupo, um anel por item |

No ecrã tátil, «duplo clique para terminar» é um duplo toque, e «clicar» é um toque que atua ao levantar o dedo (para pontos, notas e contagens).

## O que cada anotação contém

| Campo | Onde o vê |
|---|---|
| Autor | {{ui:Propriedades}}, a lista, a segunda linha do carimbo, outros visualizadores de PDF |
| Criação e alteração | {{ui:Propriedades}} (no seu fuso horário), a lista, o CSV |
| Estado | Aberta, Aceite, Rejeitada ou Concluída |
| Assunto | Um rótulo curto; por predefinição é o tipo («Nuvem», «Caixa de texto», «Medição de comprimento») |
| Comentário | Notas mais longas. Numa nota, o próprio texto é o comentário. |
| Texto | Apenas caixas de texto e chamadas |
| Respostas | A conversa, com as alterações de estado |
| Item da lista de anomalias | Número, responsável, data limite, estado do item, quando adicionado à lista de anomalias |
| Estilo | Cor, espessura da linha, preenchimento e opacidade do preenchimento (formas fechadas, texto e chamadas), opacidade, tamanho do texto (texto, chamadas e medições) |

## Comentários só de visualização

Os comentários que vieram com o ficheiro e que o MarkupCraft não consegue editar (realces de texto, carimbos de outros programas e outros tipos especiais) aparecem na lista com o tipo «Outro» e o indicador de estado «Só de visualização». Mantêm exatamente o aspeto que o ficheiro lhes dá. Pode selecioná-los, ver o autor, o assunto e o comentário, e responder-lhes.

## Ainda não implementado

Os anexos de ficheiros ainda não estão implementados. Qualquer anotação pode ligar-se a uma folha; veja [Ligações de folhas](topic:sheet-links). Imagens e assinaturas colocam-se com a ferramenta {{ui:Carimbo}}; veja [Carimbos e notas](topic:stamps-and-notes). Veja [O que ainda não está implementado](topic:not-built-yet).
