---
title: Cada tipo de anotación
summary: Os dezasete tipos de anotación, as súas teclas, como se debuxa cada un, o seu aspecto por defecto e como queda no PDF gardado.
keywords: tipos de anotación, lista de ferramentas, tipos de anotación, nube, chamada, texto, nota, selo, pluma, realce, liña, frecha, rectángulo, elipse, polilínea, polígono, lonxitude, superficie, contar
from: 29bf32e7
---

## As ferramentas

| Barra de ferramentas | Tecla | Como debuxar | Aspecto por defecto | No PDF gardado |
|---|---|---|---|---|
| {{ui:Pluma}} | {{key:P}} | Arrastrar | Vermello, 1,5 pt | Tinta |
| {{ui:Realce}} | {{key:I}} | Arrastrar | Amarelo, 14 pt de ancho, transparente, tinxe o que hai debaixo | Tinta (marcada como trazo de realce) |
| {{ui:Liña}} | {{key:L}} | Arrastrar, ou faga clic no inicio e no final | Vermello, 2 pt | Liña |
| {{ui:Frecha}} | {{key:A}} | Arrastrar, ou faga clic no inicio e no final | Vermello, 2 pt, punta de frecha pechada no final | Liña cunha punta de frecha |
| {{ui:Arco}} | {{key:O}} | Faga clic no inicio, nun punto do arco e despois no final | Vermello, 2 pt | Polilínea seguindo o arco |
| {{ui:Rectángulo}} | {{key:R}} | Arrastre unha caixa | Vermello, 2 pt, sen recheo | Cadrado |
| {{ui:Elipse}} | {{key:E}} | Arrastre unha caixa | Vermello, 2 pt, sen recheo | Círculo |
| {{ui:Polilínea}} | {{key:Y}} | Faga clic nos puntos, dobre clic para rematar | Vermello, 2 pt | Polilínea |
| {{ui:Polígono}} | {{key:G}} | Faga clic nos puntos, dobre clic para rematar | Vermello, 2 pt, sen recheo | Polígono |
| {{ui:Nube}} | {{key:C}} | Arrastre unha caixa | Vermello, ondulacións de 1,5 pt | Cadrado cun bordo de nube |
| {{ui:Nube libre}} | {{key:Shift+C}} | Faga clic nos puntos, dobre clic para rematar | Vermello, ondulacións de 1,5 pt | Polígono cun bordo de nube |
| {{ui:Chamada}} | {{key:K}} | Prema sobre o punto, arrastre ata o texto, escriba | Texto e directriz en vermello, 1 pt, texto de 12 pt | Caixa de texto cunha directriz de chamada |
| {{ui:Texto}} | {{key:T}} | Faga clic ou arrastre unha caixa, escriba | Texto vermello de 12 pt, sen bordo | Caixa de texto |
| {{ui:Nota}} | {{key:N}} | Faga clic, escriba | Icona de nota amarela | Nota adhesiva |
| {{ui:Selo}} | {{key:S}} | Escolla un selo, faga clic ou arrastre | Maiúsculas enmarcadas e «Por <nome>, <data>»; coloreado segundo o significado | Selo |
| {{ui:Lonxitude}} | {{key:M}} | Faga clic no inicio e no final (necesita unha escala) | Liña de cota azul con marcas e a lonxitude | Liña marcada como cota, con medición |
| {{ui:Ángulo}} | {{key:X}} | Faga clic no extremo dun brazo, na esquina e despois no extremo do outro brazo | Brazos azuis, un pequeno arco na esquina e o ángulo en graos | Polilínea co ángulo como texto |
| {{ui:Superficie}} | {{key:Q}} | Faga clic nas esquinas, dobre clic para rematar (necesita unha escala) | Contorno azul, recheo azul claro, superficie e perímetro | Polígono marcado como superficie, con medición |
| {{ui:Contar}} | {{key:U}} | Faga clic en cada elemento | Puntos laranxa numerados e unha etiqueta «grupo: n» | Un comentario de tinta por grupo, un anel por elemento |

En tacto, «dobre clic para rematar» é un dobre toque, e «clic» é un toque que actúa ao levantar o dedo (para puntos, notas e recontos).

## O que leva cada anotación

| Campo | Onde o ve |
|---|---|
| Autor | {{ui:Propiedades}}, a lista, a segunda liña do selo, outros visores de PDF |
| Creación e modificación | {{ui:Propiedades}} (na súa zona horaria), a lista, o CSV |
| Estado | Aberto, Aceptado, Rexeitado ou Completado |
| Asunto | Unha etiqueta curta; por defecto, o tipo («Nube», «Caixa de texto», «Medición de lonxitude») |
| Comentario | Notas máis longas. Nunha nota, o seu texto é o seu comentario. |
| Texto | Só caixas de texto e chamadas |
| Respostas | A conversa, cos cambios de estado |
| Elemento de pendentes | Número, persoa asignada, data límite, estado do elemento, cando se engade á {{ui:Lista de pendentes}} |
| Estilo | Cor, largura de liña, recheo e opacidade do recheo (formas pechadas, texto e chamadas), opacidade, tamaño do texto (texto, chamadas e medicións) |

## Comentarios de só lectura

Os comentarios que chegaron co ficheiro e que MarkupCraft non pode editar (realces de texto, selos doutros programas e outros tipos especiais) aparecen co tipo «Outro» e a etiqueta de estado «Só lectura». Conservan exactamente o aspecto que lles dá o ficheiro. Pode seleccionalos, ver o seu autor, asunto e comentario, e respondelos.

## Aínda non está feito

Os ficheiros adxuntos aínda non están feitos. Calquera anotación pode ligar a unha folla; vexa [Ligazóns de folla](topic:sheet-links). As imaxes e as sinaturas colócanse coa ferramenta {{ui:Selo}}; vexa [Selos e notas](topic:stamps-and-notes). Vexa [O que aínda non está feito](topic:not-built-yet).
