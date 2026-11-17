---
title: Calibrar una hoja y medir
summary: Defina la escala de cada hoja a partir de un valor predefinido o de una dimensión conocida, y mida longitudes, áreas con perímetros y recuentos.
keywords: calibrar, escala, definir escala, medir, longitud, distancia, cota, área, pies cuadrados, perímetro, contar, cubicación, cantidad, regla, aritmética, cálculo, suma, fracción
from: 49a25c6d
---

Las longitudes y las áreas necesitan conocer la escala de la hoja. MarkupCraft guarda una escala **por hoja**: calibre cada hoja que vaya a medir. Los recuentos no necesitan escala.

La barra de estado muestra la escala de la hoja actual, o "No calibrado".

## Elegir una escala de la lista

Use esto cuando el PDF esté a tamaño real (una hoja de 24 × 36 que se imprime a 24 × 36) y el plano indique su escala.

1. Haga clic en el botón de escala de la barra de estado ("No calibrado"). Se abre el cuadro "Escala de la hoja".
2. En {{ui:Escala}}, elija la escala: arquitectónica (1/32" = 1'-0" a 3" = 1'-0"), de ingeniería (1" = 10' a 1" = 100') o métrica (1:1 a 1:1000).
3. Elija {{ui:Definir escala}}.

Resultado: la barra de estado muestra la escala, por ejemplo `1/4" = 1'-0"`. Las escalas arquitectónicas muestran las longitudes en pies y pulgadas, las de ingeniería en pies decimales, y las métricas hasta 1:50 en milímetros y desde 1:100 en metros.

:::warning
Un valor predefinido solo es correcto si el PDF no se ha reducido. Un juego a media escala, o una hoja que se "ajustó a la página" al crearla, se mide mal con un valor predefinido. Calibre a partir de una dimensión conocida, y compruebe en cualquier caso una dimensión.
:::

## Calibrar a partir de una dimensión conocida

Use esto para juegos a media escala, hojas escaneadas, detalles a escalas raras, o para comprobar un valor predefinido.

1. Busque una cota larga en la que confíe, o una barra gráfica de escala.
2. Elija {{ui:Calibrar}} en el grupo {{ui:Medir}} (o elija {{ui:Marcar dos puntos}} en el cuadro "Escala de la hoja").
3. Haga clic en un extremo de la cota y después en el otro. (O arrastre de un extremo al otro.) Amplíe antes para mayor precisión; {{key:Shift}} mantiene la línea en pasos de 45°.
4. El cuadro indica la separación de los puntos sobre el papel y pregunta "¿Cuál es la distancia real?". Escriba la {{ui:Distancia real}}, por ejemplo `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`.
5. Elija cómo se muestran las longitudes en {{ui:Mostrar las longitudes en}}: {{ui:Pies y pulgadas}}, {{ui:Pies decimales}}, {{ui:Pulgadas}}, {{ui:Metros}} o {{ui:Milímetros}}.
6. Elija {{ui:Definir escala}}.

Resultado: la barra de estado muestra "Calibrado: 24'-0" sobre 1.00 in" (la longitud real y la longitud sobre el papel), y vuelve la herramienta con la que iba a medir. Todas las formas de escribir una longitud están en [Unidades y longitudes](topic:units-and-scales).

La distancia real también puede ser un pequeño cálculo: `12'6"+3/4"`, `(24'-0")/3` o `2*450mm`. Use `+ - * /` y paréntesis; un número sin unidad cuenta en la unidad de {{ui:Mostrar las longitudes en}} (pies para {{ui:Pies y pulgadas}}). {{ui:Definir escala}} usa el resultado.

Si MarkupCraft no puede leer lo que escribió, el cuadro lo indica: "Eso no es una longitud que MarkupCraft entienda. Pruebe con 24'-0", 12' 6 1/2", 7.2 m o 900 mm." Un cálculo que no puede resolver indica el motivo y el lugar, por ejemplo "Un paréntesis no está cerrado (carácter 5)".

## Medir una longitud

1. Elija {{ui:Longitud}} ({{key:M}}).
2. Haga clic en el inicio y después en el final. O arrastre del inicio al final. {{key:Shift}} la mantiene en pasos de 45°.

Resultado: una línea de cota con marcas y la longitud escrita encima. La barra de estado la repite ("Longitud: 12'-6 1/2" (1/4" = 1'-0")."), y {{ui:Propiedades}} la muestra bajo {{ui:Longitud}}. Los pies y pulgadas se redondean a la 1/16" más cercana.

Si la hoja todavía no tiene escala, al elegir {{ui:Longitud}} se cambia a {{ui:Calibrar}} y la barra de estado lo explica: "Calibre primero esta hoja: marque dos puntos a una distancia conocida, o elija su escala. Después mida." Cuando defina la escala, vuelve {{ui:Longitud}}.

## Dibujar a escala

En una hoja calibrada puede escribir longitudes reales mientras dibuja una {{ui:Línea}}, una {{ui:Flecha}}, una {{ui:Longitud}}, una {{ui:Polilínea}}, un {{ui:Polígono}}, una {{ui:Nube libre}}, un {{ui:Área}} o un espacio:

1. Haga clic en el primer punto.
2. Oriente el puntero hacia donde va el siguiente tramo y escriba su longitud, como `16` (en la unidad de la hoja), `12'6"` o `3.5 m`. Un cuadro se abre junto al puntero mientras escribe.
3. Pulse {{key:Enter}}. El punto se coloca a esa distancia, en la dirección del puntero.

Para fijar la dirección exactamente, añada `<` y un ángulo en grados: `8 < 90` avanza 8 pies hacia arriba en vertical, `4<0` hacia la derecha, `10 < 225` hacia abajo y a la izquierda, tal como se ve la hoja (incluidas las páginas giradas). Siga escribiendo longitudes para las esquinas siguientes, y termine la forma como de costumbre. {{key:Esc}} cierra el cuadro sin colocar un punto.

## Medir un ángulo

1. Elija {{ui:Ángulo}} ({{key:X}}).
2. Haga clic en el extremo de un brazo, después en el vértice y después en el extremo del otro brazo.

Resultado: los dos brazos, un pequeño arco en el vértice y el ángulo en grados, con una décima (de 0° a 180°). Un ángulo no necesita escala. {{ui:Propiedades}} lo muestra bajo {{ui:Ángulo}}, y la lista, el CSV y el BCF lo incluyen.

Un {{ui:Arco}} ({{key:O}}) en una hoja calibrada muestra también su longitud a lo largo de la curva en {{ui:Propiedades}}.

## Medir un área y su perímetro

1. Elija {{ui:Área}} ({{key:Q}}).
2. Haga clic en cada esquina de la habitación o de la zona.
3. Termine con doble clic, {{key:Enter}} o clic derecho (doble toque en pantallas táctiles). {{key:Backspace}} elimina la última esquina.

Resultado: un contorno sombreado con el área y "P" con el perímetro en el centro, por ejemplo "128.00 sq ft" y "P 48'-0"". Las escalas en pies dan pies cuadrados, las de pulgadas pulgadas cuadradas, las de metros metros cuadrados y las de milímetros milímetros cuadrados. Un área necesita al menos tres esquinas.

### Recortes

Para dejar fuera un pilar, un hueco o un patio, seleccione el área y elija {{ui:Añadir un recorte}} en {{ui:Propiedades}}. Haga clic en las esquinas del recorte dentro del área y termine como con un área. El recorte queda abierto (sin sombrear), su área se resta, y sus bordes se suman al perímetro: una habitación de 16' × 8' con un recorte de 4' × 4' muestra "112.00 sq ft" y "P 64'-0"". Añada los que necesite; no pueden solaparse entre sí ni cruzar el contorno del área. {{ui:Quitar recortes}} los elimina todos, y {{key:Mod+Z}} deshace uno.

## Contar elementos

1. Elija {{ui:Contar}} ({{key:U}}).
2. En {{ui:Propiedades}}, escriba un {{ui:Nombre del grupo}}, por ejemplo "Sumideros". (Se conserva para la próxima vez.)
3. Haga clic en cada elemento de la hoja.

Resultado: cada clic añade un punto numerado, el primer punto lleva una etiqueta como "Sumideros: 7", y la barra de estado mantiene el total acumulado.

- **Empezar otro grupo:** pulse {{key:Esc}} una vez (quita la selección), cambie el {{ui:Nombre del grupo}} y haga clic de nuevo.
- **Añadir a un grupo existente:** seleccione antes el grupo, después elija {{ui:Contar}} y haga clic.
- **Quitar una marca:** con el grupo seleccionado, mantenga {{key:Shift}} pulsado y haga clic en el punto. Al quitar el último punto se elimina el grupo. En una pantalla táctil sin teclado, use {{key:Mod+Z}} o {{ui:Deshacer}}.
- **Renombrar un grupo:** selecciónelo y edite el {{ui:Nombre del grupo}} en {{ui:Propiedades}}.

Un grupo de recuento pertenece a una sola hoja. Los recuentos de varias hojas aparecen como grupos separados en la lista de anotaciones.

## Cambiar o quitar una escala

Haga clic en el botón de escala de la barra de estado. El cuadro muestra la escala actual; elija otra, elija {{ui:Marcar dos puntos}}, o elija {{ui:Quitar escala}}.

Las longitudes y áreas ya dibujadas se **vuelven a medir** de inmediato con la nueva escala. Deshacer devuelve la escala anterior.

## Dónde van los números

- {{ui:Propiedades}} muestra los valores de la medida seleccionada.
- La pestaña {{ui:Anotaciones}} enumera cada valor, y su CSV tiene una columna "Medida". Véase [La lista de anotaciones](topic:markups-list-and-export).
- El PDF guardado conserva la escala en la página y escribe longitudes y áreas como comentarios de medida, para que otros programas de PDF que entiendan las medidas puedan mostrarlas. Véase [Lo que se guarda en el PDF](topic:what-the-pdf-keeps).

Para un cómputo completo de cantidades con partidas, conjuntos y precios, use TakeoffCraft: MarkupCraft mide para la revisión, no para presupuestar.
