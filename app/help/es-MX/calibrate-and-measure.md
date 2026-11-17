---
title: Calibrar una hoja y medir
summary: Defina la escala de cada hoja con un preajuste o una cota conocida, y luego mida longitudes, áreas con perímetros y conteos.
keywords: calibrar, escala, establecer escala, medir, longitud, distancia, cota, área, pies cuadrados, perímetro, conteo, cuantificación, cantidad, regla, aritmética, cálculo, suma, fracción
from: 49a25c6d
---

Las longitudes y las áreas necesitan conocer la escala de la hoja. MarkupCraft guarda una escala **por hoja**: calibre cada hoja que mida. Los conteos no necesitan escala.

La barra de estado muestra la escala de la hoja actual, o "Sin calibrar".

## Elija una escala de la lista

Use esto cuando el PDF esté a tamaño completo (una hoja de 24 × 36 que se imprime a 24 × 36) y el dibujo indique su escala.

1. Haga clic en el botón de escala de la barra de estado ("Sin calibrar"). Se abre el cuadro "Escala de la hoja".
2. En {{ui:Escala}}, elija la escala: arquitectónica (1/32" = 1'-0" a 3" = 1'-0"), de ingeniería (1" = 10' a 1" = 100') o métrica (1:1 a 1:1000).
3. Elija {{ui:Establecer escala}}.

Resultado: la barra de estado muestra la escala, por ejemplo `1/4" = 1'-0"`. Las escalas arquitectónicas muestran longitudes en pies y pulgadas, las de ingeniería en pies decimales, y las métricas hasta 1:50 en milímetros y desde 1:100 en metros.

:::warning
Un preajuste solo es correcto si el PDF no se redujo. Un juego a la mitad del tamaño, o una hoja que se ajustó a la página al crearse, se mide mal con un preajuste. Calibre a partir de una cota conocida, y en todo caso verifique una cota.
:::

## Calibre con una cota conocida

Use esto para juegos a media escala, hojas escaneadas, detalles con escalas irregulares, o para verificar un preajuste.

1. Busque una cota larga en la que confíe, o una barra de escala gráfica.
2. Elija {{ui:Calibrar}} en el grupo {{ui:Medir}} (o elija {{ui:Designar dos puntos}} en el cuadro "Escala de la hoja").
3. Haga clic en un extremo de la cota y luego en el otro. (O arrastre de un extremo al otro.) Acérquese antes para mayor precisión; {{key:Shift}} mantiene la línea en pasos de 45°.
4. El cuadro indica a qué distancia están los puntos en el papel y pregunta "¿Qué distancia hay en realidad?". Escriba la {{ui:Distancia real}}, por ejemplo `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`.
5. Elija cómo se muestran las longitudes en {{ui:Mostrar longitudes en}}: {{ui:Pies y pulgadas}}, {{ui:Pies decimales}}, {{ui:Pulgadas}}, {{ui:Metros}} o {{ui:Milímetros}}.
6. Elija {{ui:Establecer escala}}.

Resultado: la barra de estado muestra "Calibrado: 24'-0" sobre 1.00 in" (la longitud real y la longitud en el papel), y la herramienta con la que iba a medir vuelve a activarse. Todas las formas de escribir una longitud están en [Unidades y longitudes](topic:units-and-scales).

La distancia real también puede ser un pequeño cálculo: `12'6"+3/4"`, `(24'-0")/3` o `2*450mm`. Use `+ - * /` y paréntesis; un número sin unidad cuenta en la unidad de {{ui:Mostrar longitudes en}} (pies para {{ui:Pies y pulgadas}}). {{ui:Establecer escala}} usa el resultado.

Si MarkupCraft no puede leer lo que escribió, el cuadro lo indica: 'Eso no es una longitud que MarkupCraft entienda. Pruebe con 24'-0", 12' 6 1/2", 7.2 m o 900 mm.' Un cálculo que no puede resolver indica por qué y dónde, por ejemplo "Un paréntesis no está cerrado (carácter 5)."

## Mida una longitud

1. Elija {{ui:Longitud}} ({{key:M}}).
2. Haga clic en el inicio y luego en el final. O arrastre del inicio al final. {{key:Shift}} la mantiene en pasos de 45°.

Resultado: una línea de cota con marcas y la longitud escrita encima. La barra de estado la repite ("Longitud: 12'-6 1/2" (1/4" = 1'-0")."), y {{ui:Propiedades}} la muestra bajo {{ui:Longitud}}. Los pies y pulgadas se redondean a la 1/16" más cercana.

Si la hoja todavía no tiene escala, elegir {{ui:Longitud}} cambia a {{ui:Calibrar}} y la barra de estado lo explica: "Calibre primero esta hoja: designe dos puntos a una distancia conocida, o elija su escala. Luego mida." Después de establecer la escala, {{ui:Longitud}} vuelve.

## Dibujar a escala

En una hoja calibrada puede escribir longitudes reales mientras dibuja una {{ui:Línea}}, {{ui:Flecha}}, {{ui:Longitud}}, {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}}, {{ui:Área}} o un espacio:

1. Haga clic en el primer punto.
2. Apunte hacia donde va el siguiente segmento y escriba su longitud, como `16` (en la unidad de la hoja), `12'6"` o `3.5 m`. Se abre un cuadro junto al puntero mientras escribe.
3. Presione {{key:Enter}}. El punto se coloca a esa distancia, en la dirección del puntero.

Para fijar la dirección con exactitud, agregue `<` y un ángulo en grados: `8 < 90` va 8 pies en línea recta hacia arriba, `4<0` hacia la derecha, `10 < 225` hacia abajo y a la izquierda, según se ve la hoja (incluidas las páginas giradas). Siga escribiendo longitudes para las siguientes esquinas, y termine la forma como de costumbre. {{key:Esc}} cierra el cuadro sin colocar un punto.

## Mida un ángulo

1. Elija {{ui:Ángulo}} ({{key:X}}).
2. Haga clic en el extremo de un brazo, luego en el vértice, y luego en el extremo del otro brazo.

Resultado: los dos brazos, un pequeño arco en el vértice y el ángulo en grados, con una décima (de 0° a 180°). Un ángulo no necesita escala. {{ui:Propiedades}} lo muestra bajo {{ui:Ángulo}}, y la lista, el CSV y el BCF lo incluyen.

Un {{ui:Arco}} ({{key:O}}) en una hoja calibrada también muestra su longitud a lo largo de la curva en {{ui:Propiedades}}.

## Mida un área y su perímetro

1. Elija {{ui:Área}} ({{key:Q}}).
2. Haga clic en cada esquina del cuarto o de la región.
3. Termine con doble clic, {{key:Enter}} o clic derecho (doble toque en pantallas táctiles). {{key:Backspace}} quita la última esquina.

Resultado: un contorno sombreado con el área y "P" con el perímetro en el centro, por ejemplo "128.00 sq ft" y "P 48'-0"". Las escalas en pies dan pies cuadrados, en pulgadas dan pulgadas cuadradas, en metros dan metros cuadrados y en milímetros dan milímetros cuadrados. Un área necesita al menos tres esquinas.

### Recortes

Para dejar fuera una columna, un ducto o un patio, designe el área y elija {{ui:Agregar un recorte}} en {{ui:Propiedades}}. Haga clic en las esquinas del recorte dentro del área y termine igual que con un área. El recorte queda abierto (sin sombrear), su área se resta y sus bordes se suman al perímetro: un cuarto de 16' × 8' con un recorte de 4' × 4' se lee "112.00 sq ft" y "P 64'-0"". Agregue todos los que necesite; no pueden superponerse entre sí ni cruzar el contorno del área. {{ui:Quitar recortes}} los elimina todos, y {{key:Mod+Z}} deshace uno.

## Cuente elementos

1. Elija {{ui:Conteo}} ({{key:U}}).
2. En {{ui:Propiedades}}, escriba un {{ui:Nombre del grupo}}, por ejemplo "Coladeras de piso". (Se conserva para la próxima vez.)
3. Haga clic en cada elemento de la hoja.

Resultado: cada clic agrega un punto numerado; el primer punto lleva una etiqueta como "Coladeras de piso: 7", y la barra de estado mantiene el total acumulado.

- **Iniciar otro grupo:** presione {{key:Esc}} una vez (borra la selección), cambie el {{ui:Nombre del grupo}} y haga clic de nuevo.
- **Agregar a un grupo existente:** seleccione primero el grupo, luego elija {{ui:Conteo}} y haga clic.
- **Quitar una marca:** con el grupo seleccionado, mantenga presionado {{key:Shift}} y haga clic en el punto. Al quitar el último punto se quita el grupo. En una pantalla táctil sin teclado, use {{key:Mod+Z}} o {{ui:Deshacer}} en su lugar.
- **Cambiar el nombre de un grupo:** selecciónelo y edite el {{ui:Nombre del grupo}} en {{ui:Propiedades}}.

Un grupo de conteo pertenece a una sola hoja. Los conteos en varias hojas aparecen como grupos separados en la lista de marcas.

## Cambie o quite una escala

Haga clic en el botón de escala de la barra de estado. El cuadro muestra la escala actual; elija otra, elija {{ui:Designar dos puntos}} o elija {{ui:Quitar escala}}.

Las longitudes y áreas ya dibujadas se **vuelven a medir** de inmediato con la nueva escala. Deshacer restaura la escala anterior.

## Dónde van los números

- {{ui:Propiedades}} muestra los valores de la medición seleccionada.
- La pestaña {{ui:Marcas}} enumera cada valor, y su CSV tiene una columna "Medición". Vea [La lista de marcas](topic:markups-list-and-export).
- El PDF guardado conserva la escala en la página y escribe longitudes y áreas como comentarios de medición, para que otros programas de PDF que entiendan mediciones puedan mostrarlas. Vea [Lo que se guarda en el PDF](topic:what-the-pdf-keeps).

Para un cómputo completo de cantidades con partidas, conjuntos y precios, use TakeoffCraft: MarkupCraft mide para revisar, no para presupuestar.
