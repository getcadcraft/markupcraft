---
title: Abrir un conjunto de planos y moverse entre hojas
summary: Abra uno o varios PDF, o empiece con páginas en blanco; busque hojas por número o nombre, amplíe y desplace, y cambie el nombre de una hoja cuando el archivo lo tenga mal.
keywords: abrir, nuevo, página en blanco, hoja en blanco, boceto, cuadrícula, sin título, conjunto de planos, hojas, páginas, miniaturas, etiquetas de página, número de hoja, cajetín, cambiar nombre, navegar, ampliar, desplazar, ajustar, buscar hojas
from: 1e7f4d50
---

## Abrir el conjunto

1. Elija {{ui:Abrir}} en la barra de herramientas, o pulse {{key:Mod+O}}.
2. En el selector de archivos, seleccione todos los PDF del conjunto ({{pick:mac=mantenga pulsado ⌘ y haga clic en cada archivo|windows linux=mantenga pulsada Ctrl y haga clic en cada archivo}}, o seleccione un intervalo con Shift), y confirme.
   O arrastre los archivos desde {{pick:mac=Finder|windows=File Explorer|linux=su gestor de archivos}} al área de la hoja. Mientras arrastra aparece "Suelte los PDF para abrirlos".
3. Espere mientras la barra de estado muestra "Abriendo <archivo>…". En archivos grandes cuenta: "(10 de 60 hojas)".

Resultado: la lista {{ui:Hojas}} muestra cada página de cada archivo, en el orden en que los abrió, y la barra de estado indica algo como "Se han abierto 3 archivos (42 hojas en el conjunto)." Si los archivos ya tenían comentarios, añade cuántos se leyeron.

Para añadir más archivos al conjunto más adelante, ábralos del mismo modo. Se añaden al final de la lista.

## Empezar con páginas en blanco

Para bosquejar o tomar notas sin un plano, cree páginas en blanco en lugar de abrir un PDF:

1. Elija {{ui:Nuevo}} en la barra de herramientas, o {{ui:Empezar con una página en blanco}} en la pantalla de inicio, o pulse {{key:Mod+N}} cuando su navegador lo permita (la aplicación de escritorio y Studio siempre lo permiten).
2. Elija el {{ui:Tamaño del papel}}: Letter, Tabloid o ANSI B, ARCH D, ARCH E, A4, A3 o A1, y {{ui:Vertical}} u {{ui:Horizontal}}.
3. Elija una {{ui:Cuadrícula}}: {{ui:Ninguna}}, {{ui:Puntos}} o {{ui:Cuadros}}. La cuadrícula tiene una división cada 1/4 in, con una línea más marcada cada pulgada en papel en pulgadas, y cada 5 mm, con una línea más marcada cada 10 mm en papel métrico. Se imprime en la página.
4. Escriba cuántas {{ui:Páginas}} quiere, de 1 a 20, y elija {{ui:Crear}}.

Resultado: se abre un PDF nuevo llamado "Untitled-1.pdf" (luego "Untitled-2.pdf", y así sucesivamente), igual que cualquier otro archivo, creado aquí en este ordenador. Todas las herramientas funcionan en él, y {{ui:Guardar}} descarga "Untitled-1 (marked up).pdf". MarkupCraft recuerda sus opciones para la próxima vez.

Las páginas no tienen escala: la barra de estado dice "Sin calibrar". La cuadrícula no es una escala. Para medir, calibre la hoja o elija antes una escala; vea [Calibrar y medir](topic:calibrate-and-measure).

Para añadir una página a un conjunto en blanco, abra una de sus hojas y elija {{ui:Añadir una página en blanco}} debajo de la lista {{ui:Hojas}}. La nueva página tiene el mismo papel y la misma cuadrícula, y va al final. Como todo cambio de página, no se puede deshacer; vea [Imprimir y cambiar las páginas](topic:pages-and-printing).

## Cómo se nombran las hojas

MarkupCraft nombra cada hoja "<número de hoja> — <título>", por ejemplo "A-101 — Planta", a partir del primero de estos que encuentre:

1. Un nombre que escribió con {{ui:Renombrar hoja}} (más abajo).
2. Las etiquetas de página propias del PDF, cuando la persona que lo creó las ajustó (por ejemplo "A-101").
3. El cajetín: MarkupCraft lee el texto de la página y busca algo con forma de número de hoja (A-101, A1.01, M-201A, KA1-1), dando prioridad a la esquina inferior derecha, la franja derecha y la banda inferior, y toma como título el texto más grande cercano.
4. Si no, el nombre del archivo y la página: "Planos — página 3".

Para ver cuál se usó, pulse {{key:Esc}} hasta que no haya nada seleccionado y {{ui:Seleccionar}} esté activo, y mire {{ui:Propiedades}}: "Leído de" dice "La etiqueta de la página", "El cajetín", "El nombre del archivo" o "Escrito a mano".

:::note
Las hojas escaneadas, y los PDF cuyo texto se exportó como líneas, no tienen texto que leer. Se nombran por archivo y página hasta que les cambie el nombre. MarkupCraft todavía no puede leer texto de imágenes.
:::

## Moverse entre hojas

- Pulse una hoja en {{ui:Hojas}}.
- Pulse {{key:PageDown}} para la hoja siguiente y {{key:PageUp}} para la anterior, o use las flechas de la barra bajo la hoja.
- Escriba en {{ui:Buscar hojas}}: parte de un número ("A-2"), una palabra del título ("cubierta") o un nombre de archivo. La lista se reduce al escribir ("4 de 42"). Pulse {{key:Enter}} para abrir la primera coincidencia. Borre el cuadro para ver otra vez todas las hojas.

Cada hoja conserva su propio zoom y posición hasta que cierre el conjunto.

## Zoom y desplazamiento

:::mouse
- **Zoom:** gire la rueda sobre la hoja. Amplía alrededor del puntero. O pulse {{key:Plus}} y {{key:Minus}} (también con {{key:Mod}}), o use los botones de zoom. Escriba un porcentaje exacto en el cuadro de zoom.
- **Ajustar:** {{ui:Ajustar página}} ({{key:Mod+0}}) muestra la hoja completa; {{ui:Ajustar ancho}} ({{key:Mod+9}}) llena el ancho.
- **Desplazar:** arrastre con el botón central (la rueda), o con el botón derecho, o mantenga pulsado {{key:Space}} y arrastre, o elija {{ui:Desplazar}} ({{key:H}}) y arrastre. Sin nada seleccionado, las teclas de flecha también mueven la hoja.
:::

:::mac mouse
En un trackpad de Mac, el desplazamiento con dos dedos hace zoom (no desplaza la hoja). Para desplazar, mantenga pulsado {{key:Space}} y arrastre con un dedo, o cambie a {{ui:Desplazar}} con {{key:H}}. Un pellizco hace zoom en Chrome, Edge y Firefox.
:::

:::touch
- **Zoom y desplazamiento:** ponga dos dedos sobre la hoja. Sepárelos o júntelos para hacer zoom alrededor del punto entre ellos, y muévalos juntos para desplazar. Ambas cosas ocurren a la vez.
- **Desplazar con un dedo:** elija primero {{ui:Desplazar}}. Con cualquier otra herramienta, un dedo dibuja o selecciona.
- {{ui:Ajustar página}} y {{ui:Ajustar ancho}} están en la barra bajo la hoja.
:::

Puede alejar mucho más allá de la hoja completa y acercar hasta un 6400%. La hoja se vuelve a dibujar nítida un momento después de dejar de moverla.

## Marcadores

{{ui:Marcadores}}, en la parte superior del panel {{ui:Hojas}}, muestra los marcadores (esquema) del PDF al que pertenece la hoja abierta. Elija uno para ir a su página. El lápiz cambia el nombre de un marcador y la cruz lo elimina. {{ui:Crear desde las hojas}} crea un marcador por hoja, con el nombre que muestra la lista de hojas (número de hoja y título), y {{ui:Añadir para esta hoja}} añade uno para la hoja en la que está. Los cambios forman parte del trabajo sin guardar del archivo: {{ui:Guardar}} los escribe en la copia, donde los muestran todos los visores de PDF.

## Girar la vista

Los dos botones de giro a la derecha de la barra bajo la hoja giran la vista un cuarto de vuelta en cualquier sentido, para una hoja dibujada de lado. Solo gira la vista: el PDF y sus anotaciones siguen igual, y la hoja siguiente se abre como esté su PDF (cada hoja recuerda su propio giro mientras el conjunto esté abierto). El texto que añada en una vista girada se lee derecho tal como lo ve. Para girar la página en el PDF guardado, use {{ui:Páginas}} y luego {{ui:Girar la página en sentido horario}}; vea [Imprimir y cambiar las páginas](topic:pages-and-printing).

## Cambiar el nombre de una hoja

Cuando el nombre de una hoja es incorrecto o falta:

1. Muestre la hoja.
2. Pulse {{key:Esc}} hasta que no haya nada seleccionado y la herramienta {{ui:Seleccionar}} esté activa. {{ui:Propiedades}} muestra ahora la hoja.
3. Elija {{ui:Renombrar hoja}}.
4. Escriba el {{ui:Número de hoja}} y el {{ui:Título}}, y elija {{ui:Guardar}}.

Resultado: la lista de hojas, la barra bajo la hoja y la lista de anotaciones usan el nombre nuevo, y "Leído de" dice "Escrito a mano". Puede deshacer el cambio de nombre con {{key:Mod+Z}}.

Para volver a lo que dice el archivo, abra {{ui:Renombrar hoja}} otra vez, borre los dos cuadros y elija {{ui:Guardar}}.

Al guardar, un número de hoja escrito se convierte en la etiqueta de página del PDF, para que otros visores de PDF muestren "A-101" en su cuadro de página. Si da un número a cualquier página de un archivo, cada página de ese archivo recibe una etiqueta en la copia (su número escrito, si no su etiqueta anterior, y si no su número de página). Un título escrito se conserva para MarkupCraft, pero otros visores no lo muestran.

## Llevar el PDF a TakeoffCraft, o traerlo aquí

Cuando TakeoffCraft está abierto en el mismo lugar (el laboratorio, Try o las aplicaciones en línea), la barra bajo la hoja tiene {{ui:Abrir en TakeoffCraft}}. Abre el PDF de la hoja en TakeoffCraft en una pestaña nueva, tal como se abrió aquí, para que pueda medir cantidades. Sus anotaciones se quedan aquí; guárdelas como de costumbre.

El botón {{ui:MarkupCraft}} de TakeoffCraft hace lo mismo en sentido contrario: el PDF se abre aquí como si hubiera elegido {{ui:Abrir}}. Si el navegador bloquea la pestaña nueva, permita las ventanas emergentes para este sitio y vuelva a pulsar el botón.
