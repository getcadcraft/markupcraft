---
title: Gardar o PDF anotado
summary: Descargar unha copia con todas as anotacións escritas como comentarios PDF estándar, comprobar o que ven outros lectores de PDF e seguir traballando nel máis tarde.
keywords: gardar, descargar, exportar pdf, anotado, anotacións, comentarios, compartir, enviar, incidencia, seguir traballando, reabrir, ida e volta, imprimir
from: 4c198ebe
---

## Gardar

1. Escolla {{ui:Gardar}} na barra de ferramentas, ou prema {{key:Mod+S}}.
2. Se hai varios ficheiros abertos, escolla {{ui:Este ficheiro}} (o ficheiro da folla en que está) ou {{ui:Todos os ficheiros modificados}}. Cada copia descárgase por separado.
3. Agarde a que remate «Gardando <file>…». O primeiro gardado nunha sesión tamén carga o escritor de PDF.

Resultado: o navegador descarga «<name> (marked up).pdf», e a barra de estado informa: «Gardado A-Plans (marked up).pdf (24 anotacións, 18.2 MB). O ficheiro orixinal non cambiou.» O punto despois de {{ui:Gardar}} desaparece.

**O seu PDF orixinal nunca se cambia.** MarkupCraft escribe un ficheiro novo. Onde se garda depende da configuración de descargas do navegador (véxase [Ficheiros que MarkupCraft abre e garda](topic:files#where-downloads-go)).

## Seguir traballando máis tarde

Na seguinte ocasión, abra a copia «(marked up)» e non o orixinal. Todo volve estar editable: anotacións, estados, respostas, elementos de lista de pendentes, a escala de cada folla e os nomes de folla que escribiu. Gardalo de novo descarga un ficheiro co mesmo nome «(marked up)»; o navegador pode engadir un número, como «(1)», se a descarga anterior segue na cartafol. Substitúa ou limpe as copias antigas por conta propia.

MarkupCraft non garda o PDF por si mesmo. Mentres traballa, conserva unha copia de recuperación neste navegador, así que unha caída ou unha lapela pechada non perden as anotacións: a próxima vez que abra MarkupCraft pregunta «Recuperar o seu traballo?». Véxase [Recuperar o seu traballo](common:recover). Aínda así, garde antes de pechar; se intenta saír con anotacións sen gardar, o navegador pregunta primeiro «Saír do sitio?» (Safari de iPad non o fai).

## O que ven outros lectores de PDF

Cada anotación escríbese como un comentario PDF estándar (anotación) co seu propio debuxo, así que calquera visor de PDF a mostra, a imprime e a lista no seu panel de comentarios:

- **O aspecto é o mesmo** que en MarkupCraft: nubes con as súas festóns, puntas de frecha, selos, puntos de conta, insignias de número de pendente, etiquetas de medida.
- **Os detalles son estándar:** autor, data, asunto, o texto do comentario e as cores.
- **As nubes** son comentarios de rectángulo ou polígono cun bordo nubrado; **as caixas de texto** e **as chamadas** son comentarios de caixa de texto; **as notas** son notas adhesivas; **os trazos de lapis** e **de marcador** son tinta; **os selos** son comentarios de selo.
- **As lonxitudes e as superficies** son comentarios de medida, e cada folla calibrada leva a súa escala, así que os visores que entenden as medidas poden mostrar os valores.
- **As respostas** son respostas ao comentario, e **os estados** son estados de revisión (Aberto aparece como sen estado).
- **Os números de folla** que escribiu convértense nas etiquetas de páxina que mostran os outros visores.

Algunhas cousas só MarkupCraft as le de volta: o responsable e a data límite do elemento de lista de pendentes, o estado do elemento e algúns detalles de estilo. Outros programas consérvanos a non ser que reescriban o comentario.

Noutro programa, os comentarios pódense mover ou editar como calquera outro. Se alguén o fai e devolve o ficheiro, MarkupCraft usa a nova posición do comentario ao abrilo.

Máis detalle: [Que se garda no PDF](topic:what-the-pdf-keeps).

## Caracteres que se imprimen como «?»

O texto das anotacións escríbese coa fonte estándar Helvetica que teñen todos os visores de PDF. Cobre as letras do inglés e do oeste de Europa (é, ñ, ü, ø e similares), pero non outros alfabetos, símbolos fóra dese conxunto nin emoticonas. Eses caracteres veñen ben en MarkupCraft pero imprímense como «?» na copia gardada, e a mensaxe de gardado os conta: «3 caracteres fóra do conxunto do oeste de Europa imprímense como "?" na copia.» Escriba esas palabras por extenso, ou use un substituto simple (por exemplo, "dia." para o símbolo do diámetro).

## Ficheiros que non se poden gardar

- **PDF protexidos:** «Este PDF está protexido (cifrado), así que non se pode escribir unha copia anotada. Pida unha copia sen protección.» Pode seguir revisándoo na pantalla, e exportar o CSV e o BCF.
- Se o gardado falla por outro motivo, unha caixa chamada «Non se puido gardar <file>» mostra a causa. As anotacións seguen na lapela; non se perde nada ata que a peche.

## Aplanar e imprimir

Aínda non hai aplanado (queimar as anotacións na páxina) nin comando de impresión. Para imprimir, abra a copia gardada en calquera visor de PDF e imprima cos comentarios visibles.
