---
title: O que o PDF guarda
summary: O conteúdo exato da cópia anotada, o que veem outros programas de PDF e o que é lido de volta quando abre um ficheiro.
keywords: anotações pdf, comentários, dados guardados, ida e volta, rótulos de página, medição, estado de revisão, respostas, interoperabilidade, compatibilidade, reabrir, dados privados
from: 6439ad28
---

A cópia anotada é o PDF original com comentários (anotações PDF) acrescentados. As próprias páginas, os seus desenhos, texto, marcadores e ligações são copiados tal como estavam.

## Cada anotação

| MarkupCraft | Guardado como | Outros visualizadores de PDF mostram |
|---|---|---|
| Retângulo, nuvem de caixa | Anotação quadrada (nuvem: contorno em nuvem) | Um comentário de retângulo ou de nuvem |
| Elipse | Anotação circular | Um comentário de elipse |
| Polígono, nuvem livre | Anotação de polígono (nuvem: contorno em nuvem) | Um comentário de polígono ou de nuvem |
| Polilinha | Anotação PolyLine | Um comentário de polilinha |
| Linha, seta | Anotação de linha (seta: ponta fechada) | Um comentário de linha ou de seta |
| Comprimento | Anotação de linha marcada como cota, com uma medição | Uma medição de comprimento, quando o visualizador a suporta |
| Área | Anotação de polígono marcada como área, com uma medição | Uma medição de área, quando suportada; caso contrário, um polígono |
| Grupo de contagem | Uma anotação de tinta, com um anel por item; o seu texto é «grupo: n» | Um comentário de tinta |
| Caneta, realce | Anotação de tinta (realce marcado como tal) | Um comentário de tinta |
| Texto | Anotação de texto livre | Um comentário de caixa de texto |
| Chamada | Anotação de texto livre com linha de chamada | Um comentário de chamada |
| Nota | Anotação de texto | Uma nota adesiva que se abre no seu texto |
| Carimbo | Anotação de carimbo | Um comentário de carimbo |

Cada uma é guardada com:

- **aspeto próprio**, desenhado exatamente como o MarkupCraft o desenha no ecrã, para que tenha o mesmo aspeto em qualquer visualizador e imprima da mesma forma, incluindo o distintivo do número de anomalia;
- **o autor**, **as datas de criação e de modificação**, **o assunto**, **o texto do comentário** (para caixas de texto e chamadas, o texto e o comentário), **a cor** e **a opacidade**;
- **os seus detalhes do MarkupCraft** numa entrada privada que os outros programas ignoram: estado, item de anomalia, estilo e tipo, para que reabra exatamente igual.

## Respostas e estados

- Cada resposta é guardada como um comentário de resposta ligado à sua anotação, com o autor, a data e o texto. As respostas não têm ícone próprio na folha.
- Cada alteração de estado é guardada como uma resposta com um estado de revisão. Outras ferramentas de revisão mostram-no como Aceite, Rejeitado ou Concluído; Aberto é guardado sem estado.
- Uma anotação com um estado diferente de Aberto, mas sem alteração de estado registada, recebe uma resposta com estado de revisão, para que os outros programas vejam também o estado.
- As respostas a comentários só de leitura do ficheiro original são guardadas da mesma forma, ligadas a esse comentário.

## Cada folha

- **Escala:** uma folha calibrada recebe um viewport de medição que cobre a página (a forma normal de guardar a escala da página) e uma cópia própria do MarkupCraft da calibração.
- **Número da folha:** um número escrito com {{ui:Mudar o nome da folha}} torna-se o rótulo da página. Quando alguma página de um ficheiro tem um, cada página desse ficheiro recebe um rótulo: o número escrito; se não houver, o rótulo antigo; se também não houver, o número da página.
- **Título da folha:** um título escrito é guardado apenas para o MarkupCraft; os outros visualizadores não o mostram.

## Texto e caracteres

O texto é escrito em Helvetica, que todos os visualizadores de PDF têm. As letras fora do conjunto da Europa Ocidental (Windows-1252) aparecem como "?" na cópia; a mensagem de guardar conta-as.

## Folhas de cálculo e justificações

As folhas de cálculo e as justificações são guardadas numa entrada privada do PDF com o nome `/MarkupCraftShell`. Os outros programas de PDF ignoram-na. Um MarkupCraft mais antigo também a ignora e elimina-a na próxima vez que guardar esse ficheiro.

## O que acontece aos comentários que já existiam

Quando abre um PDF que já tem comentários:

- Os comentários do próprio MarkupCraft são lidos de volta exatamente. Se outro programa tiver movido ou redimensionado um, prevalece a sua nova posição.
- Retângulos, elipses, linhas, polilinhas, polígonos, tinta, caixas de texto e notas adesivas de outros programas tornam-se anotações editáveis. **Ao guardar, o MarkupCraft remove os originais e volta a escrevê-los à sua maneira**, com os seus pop-ups e respostas. O aspeto pode mudar ligeiramente.
- Os estados de revisão de outros programas definem o estado; prevalece o mais recente.
- Tudo o resto (realces de texto, carimbos de outros programas e tipos especiais) é **mantido sem alterações** na cópia, só de leitura.
- As ligações e os campos de formulário são mantidos sem alterações e não são listados.

Guardar o mesmo ficheiro outra vez nunca duplica nada: as anotações que o MarkupCraft leu são substituídas, não acrescentadas de novo.

## O que não muda

O seu ficheiro original no disco nunca é alterado. A cópia não é otimizada para o tamanho, por isso pode ser um pouco maior do que o original. Não é possível guardar PDF protegidos (encriptados).
