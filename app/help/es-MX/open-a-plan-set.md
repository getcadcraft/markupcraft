---
title: Abrir un juego de planos y moverse entre hojas
summary: Abra un PDF o varios, o empiece con páginas en blanco; busque hojas por número o nombre, haga zoom y encuadre, y cambie el nombre de una hoja cuando el archivo lo tenga mal.
keywords: abrir, nuevo, página en blanco, hoja en blanco, croquis, cuadrícula, sin título, juego de planos, hojas, páginas, miniaturas, etiquetas de página, número de hoja, cajetín, cambiar nombre, navegar, zoom, encuadre, ajustar, buscar hojas
from: 1e7f4d50
---

## Abrir el juego

1. Elija {{ui:Abrir}} en la barra de herramientas, o presione {{key:Mod+O}}.
2. En el selector de archivos, seleccione todos los PDF del juego ({{pick:mac=mantenga ⌘ y haga clic en cada archivo|windows linux=mantenga Ctrl y haga clic en cada archivo}}, o seleccione un rango con Shift), y luego confirme.
   O arrastre los archivos desde {{pick:mac=Finder|windows=File Explorer|linux=su administrador de archivos}} al área de la hoja. "Suelte los PDF para abrirlos" aparece mientras arrastra.
3. Espere mientras la barra de estado dice "Abriendo <archivo>…". En archivos grandes cuenta: "(10 de 60 hojas)".

Resultado: la lista {{ui:Hojas}} muestra cada página de cada archivo, en el orden en que los abrió, y la barra de estado dice algo como "Se abrieron 3 archivos (42 hojas en el juego)." Si los archivos ya tenían comentarios, agrega cuántos se leyeron.

Para agregar más archivos al juego después, ábralos de la misma forma. Se unen al final de la lista.

## Empezar con páginas en blanco

Para hacer croquis o tomar notas sin un dibujo, cree páginas en blanco en lugar de abrir un PDF:

1. Elija {{ui:Nuevo}} en la barra de herramientas, o {{ui:Empezar con una página en blanco}} en la pantalla de inicio, o presione {{key:Mod+N}} donde su navegador lo permita (la app de escritorio y Studio siempre lo permiten).
2. Elija el {{ui:Tamaño del papel}}: Carta, Tabloide o ANSI B, ARCH D, ARCH E, A4, A3 o A1, y {{ui:Vertical}} u {{ui:Horizontal}}.
3. Elija una {{ui:Cuadrícula}}: {{ui:Ninguna}}, {{ui:Puntos}} o {{ui:Cuadros}}. La cuadrícula tiene una línea cada 1/4 in, con una línea más gruesa cada pulgada en papel en pulgadas, y cada 5 mm, con una línea más gruesa cada 10 mm en papel métrico. Se imprime en la página.
4. Escriba cuántas {{ui:Páginas}} quiere, de 1 a 20, y luego elija {{ui:Crear}}.

Resultado: se crea un PDF nuevo llamado "Untitled-1.pdf" (luego "Untitled-2.pdf", y así sucesivamente) que se abre como cualquier otro archivo, creado aquí en esta computadora. Todas las herramientas funcionan en él, y {{ui:Guardar}} descarga "Untitled-1 (marked up).pdf". MarkupCraft recuerda sus opciones para la próxima vez.

Las páginas no tienen escala: la barra de estado dice "Sin calibrar". La cuadrícula no es una escala. Para medir, calibre la hoja o elija una escala antes; vea [Calibrar y medir](topic:calibrate-and-measure).

Para agregar una página a un juego en blanco, abra una de sus hojas y elija {{ui:Agregar una página en blanco}} debajo de la lista {{ui:Hojas}}. La nueva página tiene el mismo papel y la misma cuadrícula, y va al final. Como todo cambio de página, no se puede deshacer; vea [Imprimir y cambiar las páginas](topic:pages-and-printing).

## Cómo se nombran las hojas

MarkupCraft nombra cada hoja "<número de hoja> — <título>", por ejemplo "A-101 — Planta arquitectónica", a partir de la primera de estas opciones que encuentre:

1. Un nombre que escribió con {{ui:Cambiar nombre de la hoja}} (abajo).
2. Las etiquetas de página del PDF, cuando la persona que lo hizo las configuró (por ejemplo "A-101").
3. El cajetín: MarkupCraft lee el texto de la página y busca algo con forma de número de hoja (A-101, A1.01, M-201A, KA1-1), dando preferencia a la esquina inferior derecha, la franja derecha y la banda inferior, y toma el texto más grande cercano como título.
4. Si no, el nombre del archivo y la página: "Planos — página 3".

Para ver cuál se usó, presione {{key:Esc}} hasta que no haya nada seleccionado y {{ui:Seleccionar}} esté activado, y luego mire {{ui:Propiedades}}: "Leer desde" dice "La etiqueta de la página", "El cajetín", "El nombre del archivo" o "Escrito a mano".

:::note
Las hojas escaneadas, y los PDF cuyas letras se exportaron como líneas, no tienen texto que leer. Se nombran por archivo y página hasta que les cambie el nombre. MarkupCraft todavía no puede leer texto de imágenes.
:::

## Moverse entre hojas

- Haga clic en una hoja en {{ui:Hojas}}.
- Presione {{key:PageDown}} para la siguiente hoja y {{key:PageUp}} para la anterior, o use las flechas de la barra debajo de la hoja.
- Escriba en {{ui:Buscar hojas}}: parte de un número ("A-2"), una palabra del título ("techo") o un nombre de archivo. La lista se reduce mientras escribe ("4 de 42"). Presione {{key:Enter}} para abrir la primera coincidencia. Borre el cuadro para ver todas las hojas otra vez.

Cada hoja mantiene su propio zoom y posición hasta que cierre el juego.

## Zoom y encuadre

:::mouse
- **Zoom:** gire la rueda sobre la hoja. Hace zoom alrededor del puntero. O presione {{key:Plus}} y {{key:Minus}} (también con {{key:Mod}}), o use los botones de zoom. Escriba un porcentaje exacto en el cuadro de zoom.
- **Ajustar:** {{ui:Ajustar página}} ({{key:Mod+0}}) muestra la hoja completa; {{ui:Ajustar ancho}} ({{key:Mod+9}}) llena el ancho.
- **Encuadrar:** arrastre con el botón central (la rueda), o con el botón derecho, o mantenga presionado {{key:Space}} y arrastre, o elija {{ui:Encuadre}} ({{key:H}}) y arrastre. Sin nada seleccionado, las teclas de flecha también mueven la hoja.
:::

:::mac mouse
En un trackpad de Mac, el desplazamiento con dos dedos hace zoom (no desplaza la hoja). Para encuadrar, mantenga presionado {{key:Space}} y arrastre con un dedo, o cambie a {{ui:Encuadre}} con {{key:H}}. Pellizcar hace zoom en Chrome, Edge y Firefox.
:::

:::touch
- **Zoom y encuadre:** ponga dos dedos sobre la hoja. Sepárelos o júntelos para hacer zoom alrededor del punto entre ellos, y muévalos juntos para encuadrar. Ambas cosas ocurren a la vez.
- **Encuadrar con un dedo:** elija primero {{ui:Encuadre}}. Con cualquier otra herramienta, un dedo dibuja o selecciona.
- {{ui:Ajustar página}} y {{ui:Ajustar ancho}} están en la barra debajo de la hoja.
:::

Puede alejar el zoom mucho más allá de la hoja completa y acercarlo hasta 6400%. La hoja se vuelve a dibujar nítida un momento después de dejar de moverla.

## Marcadores

{{ui:Marcadores}}, en la parte superior del panel {{ui:Hojas}}, muestra los marcadores (el esquema) del PDF al que pertenece la hoja abierta. Elija uno para ir a su página. El lápiz cambia el nombre de un marcador y la cruz lo quita. {{ui:Crear a partir de las hojas}} crea un marcador por hoja, con el nombre que muestra la lista de hojas (número y título), y {{ui:Agregar para esta hoja}} agrega uno para la hoja en la que está. Los cambios forman parte del trabajo sin guardar del archivo: {{ui:Guardar}} los escribe en la copia, donde todos los visores de PDF los muestran.

## Girar la vista

Los dos botones de giro, a la derecha de la barra debajo de la hoja, giran la vista un cuarto de vuelta en cualquier sentido, para una hoja dibujada de lado. Solo gira la vista: el PDF y sus marcas quedan como están, y la siguiente hoja se abre como esté su PDF (cada hoja recuerda su propio giro mientras el juego está abierto). El texto que agregue en una vista girada se lee derecho tal como lo ve. Para girar la página misma en el PDF guardado, use {{ui:Páginas}} y luego {{ui:Girar la página en sentido horario}}; vea [Imprimir y cambiar las páginas](topic:pages-and-printing).

## Cambiar el nombre de una hoja

Cuando el nombre de una hoja está mal o falta:

1. Muestre la hoja.
2. Presione {{key:Esc}} hasta que no haya nada seleccionado y la herramienta {{ui:Seleccionar}} esté activa. {{ui:Propiedades}} ahora muestra la hoja.
3. Elija {{ui:Cambiar nombre de la hoja}}.
4. Escriba el {{ui:Número de hoja}} y el {{ui:Título}}, y luego elija {{ui:Guardar}}.

Resultado: la lista de hojas, la barra debajo de la hoja y la lista de marcas usan el nuevo nombre, y "Leer desde" dice "Escrito a mano". Cambiar el nombre se puede deshacer con {{key:Mod+Z}}.

Para volver a lo que dice el archivo, abra {{ui:Cambiar nombre de la hoja}} otra vez, borre ambos cuadros y elija {{ui:Guardar}}.

Al guardar, un número de hoja escrito se convierte en la etiqueta de página del PDF, para que otros visores de PDF muestren "A-101" también en su cuadro de página. Si asigna un número a cualquier página de un archivo, cada página de ese archivo recibe una etiqueta en la copia (su número escrito; si no, su etiqueta anterior; si no, su número de página). Un título escrito se conserva para MarkupCraft, pero otros visores no lo muestran.

## Llevar el PDF a TakeoffCraft, o traerlo aquí

Cuando TakeoffCraft está abierto en el mismo lugar (el laboratorio, Try o las apps en línea), la barra debajo de la hoja tiene {{ui:Abrir en TakeoffCraft}}. Abre el PDF de la hoja en TakeoffCraft, en una pestaña nueva, como se abrió aquí, para que pueda medir cantidades en él. Sus marcas se quedan aquí; guárdelas como de costumbre.

El botón {{ui:MarkupCraft}} de TakeoffCraft hace lo mismo en sentido contrario: el PDF se abre aquí como si hubiera elegido {{ui:Abrir}}. Si el navegador bloquea la pestaña nueva, permita las ventanas emergentes para este sitio y vuelva a elegir el botón.
