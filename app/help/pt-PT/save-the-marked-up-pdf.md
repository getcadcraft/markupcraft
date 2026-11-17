---
title: Guardar o PDF com anotações
summary: Transfira uma cópia com todas as anotações gravadas como comentários PDF padrão, veja o que os outros leitores de PDF mostram e continue a trabalhar nela mais tarde.
keywords: guardar, transferir, exportar pdf, anotado, anotações, comentários, partilhar, enviar, emissão, continuar a trabalhar, reabrir, ida e volta, imprimir
from: 4c198ebe
---

## Guardar

1. Escolha {{ui:Guardar}} na barra de ferramentas, ou prima {{key:Mod+S}}.
2. Se estiverem vários ficheiros abertos, escolha {{ui:Este ficheiro}} (o ficheiro da folha em que está) ou {{ui:Todos os ficheiros alterados}}. Cada cópia é transferida separadamente.
3. Aguarde que "A guardar <file>…" termine. A primeira vez que guarda numa sessão também carrega o gerador de PDF.

Resultado: o navegador transfere "<name> (marked up).pdf", e a barra de estado indica-o: 'Guardado A-Plans (marked up).pdf (24 anotações, 18.2 MB). O ficheiro original não foi alterado.' O ponto junto a {{ui:Guardar}} desaparece.

**O seu PDF original nunca é alterado.** O MarkupCraft cria um ficheiro novo. Onde fica depende das definições de transferência do navegador (ver [Ficheiros que o MarkupCraft abre e guarda](topic:files#where-downloads-go)).

## Continuar a trabalhar mais tarde

Abra a cópia "(marked up)" da próxima vez, e não o original. Tudo volta a ser editável: anotações, estados, respostas, itens da lista de anomalias, a escala de cada folha e os nomes de folhas que tiver escrito.

Guardar de novo transfere um ficheiro com o mesmo nome "(marked up)"; o navegador pode acrescentar um número, como "(1)", se a transferência antiga ainda estiver na pasta. Substitua ou organize as cópias antigas.

O MarkupCraft não guarda o PDF por si. Enquanto trabalha, mantém uma cópia de recuperação neste navegador, para que uma falha ou um separador fechado não percam as anotações: na próxima vez que abrir o MarkupCraft, pergunta "Recuperar o seu trabalho?". Veja [Recuperar o seu trabalho](common:recover). Guarde sempre antes de fechar; se tentar sair com anotações não guardadas, o navegador pergunta primeiro "Sair do site?" (o Safari do iPad não o faz).

## O que outros leitores de PDF veem

Cada anotação é gravada como um comentário PDF padrão (uma anotação), com o seu próprio desenho; por isso, qualquer visualizador de PDF a mostra, a imprime e a lista no painel de comentários:

- **O aspeto é o mesmo** que no MarkupCraft: nuvens com as suas ondulações, setas, carimbos, pontos de contagem, distintivos com o número da lista de anomalias, rótulos de medição.
- **Os detalhes são padrão:** autor, data, assunto, texto do comentário e cores.
- **As nuvens** são comentários de retângulo ou de polígono com contorno em nuvem; **as caixas de texto** e **as chamadas** são comentários de caixa de texto; **as notas** são notas adesivas; **os traços de caneta e de marcador** são tinta; **os carimbos** são comentários de carimbo.
- **Comprimentos e áreas** são comentários de medição, e cada folha calibrada leva a sua escala, para que os visualizadores que entendem medições possam mostrar os valores.
- **As respostas** são respostas ao comentário, e **os estados** são estados de revisão (Aberto aparece como sem estado).
- **Os números de folha** que escreveu passam a ser as etiquetas de página que os outros visualizadores mostram.

Algumas coisas só o MarkupCraft lê de volta: o responsável e a data limite do item da lista de anomalias, o estado do item e alguns detalhes de estilo. Os outros programas mantêm-nos, a não ser que reescrevam o comentário.

Noutro programa, os comentários podem ser movidos ou editados como qualquer outro. Se alguém o fizer e reenviar o ficheiro, o MarkupCraft usa a nova posição do comentário ao abri-lo.

Detalhe completo: [O que é guardado no PDF](topic:what-the-pdf-keeps).

## Caracteres que saem como "?"

O texto das anotações é escrito com o tipo de letra padrão Helvetica, que todos os visualizadores de PDF têm. Cobre o inglês e as letras da Europa Ocidental (é, ñ, ü, ø e semelhantes), mas não outros alfabetos, símbolos fora desse conjunto nem emojis. Esses caracteres aparecem bem no MarkupCraft, mas saem como "?" na cópia guardada, e a mensagem de gravação conta-os: "3 caracteres fora do conjunto da Europa Ocidental saem como "?" na cópia." Escreva essas palavras por extenso, ou use um substituto simples (por exemplo "diâm." para o símbolo de diâmetro).

## Ficheiros que não podem ser guardados

- **PDF protegidos:** "Este PDF está protegido (encriptado), por isso não é possível escrever uma cópia anotada. Peça uma cópia sem proteção." Pode continuar a rever o ficheiro no ecrã e exportar o CSV e o BCF.
- Se a gravação falhar por outro motivo, uma caixa chamada "Não foi possível guardar <file>" mostra o motivo. As anotações continuam no separador; nada se perde até o fechar.

## Integrar e imprimir

Ainda não existe a opção de integrar as anotações na página (gravá-las no próprio desenho) nem um comando de impressão. Para imprimir, abra a cópia guardada em qualquer visualizador de PDF e imprima com os comentários visíveis.
