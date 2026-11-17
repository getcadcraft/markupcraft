---
title: Que se garda no PDF
summary: Exactamente o que contén a copia anotada, o que len outros visores de PDF e o que se le de novo ao abrir un ficheiro.
keywords: anotacións pdf, comentarios, datos gardados, ida e volta, etiquetas de páxina, medición, estado de revisión, respostas, interoperabilidade, compatibilidade, reabrir, datos privados
from: 6439ad28
---

A copia anotada é o PDF orixinal con comentarios (anotacións PDF) engadidos. As propias páxinas, os seus debuxos, textos, marcadores e ligazóns cópianse tal como estaban.

## Cada anotación

| MarkupCraft | Gardado como | Outros visores de PDF mostran |
|---|---|---|
| Rectángulo, nube en caixa | Anotación cadrada (nube: borde en forma de nube) | Un comentario de rectángulo ou nube |
| Elipse | Anotación circular | Un comentario de elipse |
| Polígono, nube libre | Anotación de polígono (nube: borde en forma de nube) | Un comentario de polígono ou nube |
| Polilínea | Anotación PolyLine | Un comentario de polilínea |
| Liña, frecha | Anotación de liña (frecha: punta de frecha pechada) | Un comentario de liña ou frecha |
| Lonxitude | Anotación de liña marcada como cota, con medición | Unha medición de lonxitude, onde o visor a admita |
| Superficie | Anotación de polígono marcada como superficie, con medición | Unha medición de superficie, onde se admita; se non, un polígono |
| Grupo de conta | Unha anotación de tinta, un anel por elemento; o seu texto é «grupo: n» | Un comentario de tinta |
| Bolígrafo, marcador | Anotación de tinta (marcador marcado como tal) | Un comentario de tinta |
| Texto | Anotación de texto libre | Un comentario de caixa de texto |
| Chamada | Anotación de texto libre con liña de chamada | Un comentario de chamada |
| Nota | Anotación de texto | Unha nota adhesiva que se abre co seu texto |
| Selo | Anotación de selo | Un comentario de selo |

Cada unha gárdase con:

- **a súa propia aparencia**, debuxada exactamente como a debuxa MarkupCraft na pantalla, para que se vexa igual en calquera visor e imprima igual, incluída a insignia do número de incidencia;
- **o autor**, **as datas de creación e modificación**, **o asunto**, **o texto do comentario** (para as caixas de texto e as chamadas, o texto e o comentario), **a cor** e **a opacidade**;
- **os seus detalles de MarkupCraft** nunha entrada privada que ignoran os demais programas: estado, elemento de incidencia, estilo e tipo, para que se reabra exactamente igual.

## Fíos e estados

- Cada resposta gárdase como un comentario de resposta ligado á súa anotación, co seu autor, data e texto. As respostas non teñen icona propia na folla.
- Cada cambio de estado gárdase como unha resposta que leva un estado de revisión. Outras ferramentas de revisión mostrano como Aceptado, Rexeitado ou Completado; Aberto gárdase sen estado.
- Unha anotación cun estado distinto de Aberto pero sen cambio de estado rexistrado recibe unha resposta de estado de revisión, para que os demais programas tamén vexan o estado.
- As respostas aos comentarios de só lectura do ficheiro orixinal gárdanse do mesmo xeito, ligadas a ese comentario.

## Cada folla

- **Escala:** unha folla calibrada recibe unha vista de medición que cobre a páxina (a forma estándar de gardar a escala dunha páxina) e a copia propia de MarkupCraft da calibración.
- **Número de folla:** un número escrito con {{ui:Cambiar o nome da folla}} convértese na etiqueta da páxina. Cando calquera páxina dun ficheiro a teña, cada páxina dese ficheiro recibe unha etiqueta: o seu número escrito; se non, a súa etiqueta anterior; se non, o seu número de páxina.
- **Título da folla:** un título escrito gárdase só para MarkupCraft; os outros visores non o mostran.

## Texto e caracteres

O texto escríbese en Helvetica, que todos os visores de PDF teñen. As letras fóra do conxunto da Europa occidental (Windows-1252) imprímense como «?» na copia; a mensaxe de gardado conta a cantidade.

## Follas de cálculo e motivos

As follas de cálculo e os motivos gárdanse nunha entrada privada do PDF chamada `/MarkupCraftShell`. Os demais programas de PDF ignórana. Un MarkupCraft máis antigo tamén a ignora e elimínaa a próxima vez que garda ese ficheiro.

## Que pasa cos comentarios que xa había

Cando abre un PDF que xa ten comentarios:

- Os comentarios propios de MarkupCraft léense de novo exactamente. Se outro programa moveu ou redimensionou un, prevalece a súa nova posición.
- Os rectángulos, elipses, liñas, polilíneas, polígonos, tinta, caixas de texto e notas adhesivas doutros programas convértense en anotacións editables. **Ao gardar, MarkupCraft elimina os orixinais e escríbeos de novo á súa maneira**, cos seus emerxentes e respostas. A súa aparencia pode cambiar lixeiramente.
- Os estados de revisión doutros programas fixan o estado; gaña o máis recente.
- Todo o demais (resaltados de texto, selos doutros programas e tipos especiais) **consérvase sen tocar** na copia, en só lectura.
- As ligazóns e os campos de formulario consérvanse sen tocar e non se listan.

Gardar de novo o mesmo ficheiro non duplica nada: as anotacións que MarkupCraft leu substitúense, non se engaden de novo.

## O que non cambia

O ficheiro orixinal no disco nunca cambia. A copia non está optimizada en tamaño, así que pode ser algo máis grande có orixinal. Non se poden gardar os PDF protexidos (cifrados).
