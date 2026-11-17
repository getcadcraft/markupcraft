---
title: O que é salvo no PDF
summary: Exatamente o que a cópia com marcações contém, o que outros programas de PDF veem e o que é lido de volta quando você abre um arquivo.
keywords: anotações pdf, comentários, dados salvos, ida e volta, rótulos de página, medição, estado de revisão, respostas, interoperabilidade, compatibilidade, reabrir, dados privados
from: 6439ad28
---

A cópia com marcações é o PDF original com comentários (anotações PDF) acrescentados. As próprias páginas, seus desenhos, textos, marcadores e links são copiados como estavam.

## Cada marcação

| MarkupCraft | Salvo como | Outros visualizadores de PDF mostram |
|---|---|---|
| Retângulo, nuvem em caixa | Anotação quadrada (nuvem: borda com nuvem) | Um comentário de retângulo ou nuvem |
| Elipse | Anotação de círculo | Um comentário de elipse |
| Polígono, nuvem livre | Anotação de polígono (nuvem: borda com nuvem) | Um comentário de polígono ou nuvem |
| Polilinha | Anotação PolyLine | Um comentário de polilinha |
| Linha, seta | Anotação de linha (seta: ponta de seta fechada) | Um comentário de linha ou seta |
| Comprimento | Anotação de linha marcada como cota, com uma medição | Uma medição de comprimento, onde o visualizador oferecer suporte |
| Área | Anotação de polígono marcada como área, com uma medição | Uma medição de área, onde houver suporte; caso contrário, um polígono |
| Grupo de contagem | Uma anotação de tinta, um anel por item; seu texto é "grupo: n" | Um comentário de tinta |
| Caneta, destaque | Anotação de tinta (destaque marcado como tal) | Um comentário de tinta |
| Texto | Anotação FreeText | Um comentário de caixa de texto |
| Chamada | Anotação FreeText com linha de chamada | Um comentário de chamada |
| Nota | Anotação de texto | Uma nota adesiva que abre com seu texto |
| Carimbo | Anotação de carimbo | Um comentário de carimbo |

Cada uma é salva com:

- **aparência própria**, desenhada exatamente como o MarkupCraft a desenha na tela, para que pareça igual em qualquer visualizador e imprima igual, incluindo o selo do número de pendência;
- **o autor**, **as datas de criação e modificação**, **o assunto**, **o texto do comentário** (para caixas de texto e chamadas, o texto e o comentário), **a cor** e **a opacidade**;
- **seus detalhes do MarkupCraft** em uma entrada privada que outros programas ignoram: status, item de pendência, estilo e tipo, para que reabra exatamente igual.

## Conversas e status

- Cada resposta é salva como um comentário de resposta vinculado à sua marcação, com seu autor, data e texto. As respostas não têm ícone próprio na folha.
- Cada mudança de status é salva como uma resposta que leva um estado de revisão. Outras ferramentas de revisão a mostram como Aceito, Rejeitado ou Concluído; Aberto é salvo sem estado.
- Uma marcação com status diferente de Aberto, mas sem mudança de status registrada, recebe uma resposta de estado de revisão, para que outros programas também vejam o status.
- Respostas em comentários somente leitura do arquivo original são salvas da mesma forma, vinculadas a esse comentário.

## Cada folha

- **Escala:** uma folha calibrada recebe uma viewport de medição cobrindo a página (a forma padrão de armazenar a escala da página) e a cópia própria da calibração do MarkupCraft.
- **Número da folha:** um número digitado em {{ui:Renomear folha}} vira o rótulo da página. Quando qualquer página de um arquivo tem um, cada página desse arquivo recebe um rótulo: seu número digitado, senão seu rótulo antigo, senão seu número de página.
- **Título da folha:** um título digitado é salvo apenas para o MarkupCraft; outros visualizadores não o mostram.

## Texto e caracteres

O texto é escrito em Helvetica, que todo visualizador de PDF tem. Letras fora do conjunto da Europa Ocidental (Windows-1252) aparecem como "?" na cópia; a mensagem de salvamento as conta.

## Planilhas de cálculo e motivos

As planilhas de cálculo e os motivos são armazenados em uma entrada privada do PDF chamada `/MarkupCraftShell`. Outros programas de PDF a ignoram. Um MarkupCraft mais antigo também a ignora e a descarta na próxima vez que salvar esse arquivo.

## O que acontece com comentários que já existiam

Ao abrir um PDF que já tem comentários:

- Os comentários do próprio MarkupCraft são lidos de volta exatamente. Se outro programa moveu ou redimensionou um, a nova posição prevalece.
- Retângulos, elipses, linhas, polilinhas, polígonos, tinta, caixas de texto e notas adesivas de outros programas se tornam marcações editáveis. **Ao salvar, o MarkupCraft remove os originais e os grava de novo do seu jeito**, com seus pop-ups e respostas. A aparência pode mudar um pouco.
- Estados de revisão de outros programas definem o status; o mais recente prevalece.
- Todo o resto (destaques de texto, carimbos de outros programas e tipos especiais) é **mantido intacto** na cópia, somente leitura.
- Links e campos de formulário são mantidos intactos e não aparecem na lista.

Salvar o mesmo arquivo de novo nunca duplica nada: as marcações que o MarkupCraft leu são substituídas, não adicionadas de novo.

## O que não é alterado

Seu arquivo original no disco nunca é alterado. A cópia não é otimizada para tamanho, então pode ser um pouco maior que o original. PDFs protegidos (criptografados) não podem ser salvos.
