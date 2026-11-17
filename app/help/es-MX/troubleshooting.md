---
title: Solución de problemas
summary: Mensajes que muestra MarkupCraft y qué hacer al respecto, además de soluciones para cosas que parecen no funcionar.
keywords: problema, error, no funciona, ayuda, mensaje, no abre, no se puede guardar, contraseña, protegido, medición rechazada, calibrar, sin conexión, en blanco, lento, marcas perdidas, signos de interrogación
from: bb650b39
---

La mayoría de los problemas se explican en la barra de estado de la parte inferior de la pantalla. Léala primero.

## Abrir archivos

**"MarkupCraft abre archivos PDF. "x" no es un PDF."**
Seleccionó o arrastró otra cosa. Solo se abren PDF. Primero exporte los dibujos desde su programa CAD como PDF.

**'"name" necesita una contraseña para abrirse. Abra una copia sin protección.'**
El PDF tiene contraseña. Pida al remitente una copia sin protección, o ábralo en un programa de PDF donde conozca la contraseña y guarde una copia sin contraseña.

**'"name" no se pudo leer como PDF (…)'**
El archivo está dañado o no es realmente un PDF (una descarga incompleta, un adjunto de correo cortado). Descárguelo de nuevo. Si otros programas de PDF pueden abrirlo, use su opción "guardar como" para crear una copia limpia y ábrala.

**"Algunos archivos no se abrieron"**
Cuando abre varios a la vez, este cuadro enumera los archivos que fallaron y el motivo. Los demás están abiertos.

**"El lector de PDF no pudo cargar: …"**
No se pudo obtener el motor de PDF. En línea: recargue la página e intente de nuevo; verifique que un firewall o un bloqueador de contenido no esté bloqueando el sitio. Sin conexión: MarkupCraft no se guardó para uso sin conexión en este navegador (la barra superior no dice "Listo para usar sin conexión"). Conéctese, elija {{ui:Guardar para usar sin conexión}} y espere "Listo para usar sin conexión". Consulte [Trabajar sin conexión](common:offline).

**"Algunas anotaciones pueden aparecer dos veces en pantalla" o "No se pudieron leer detalles adicionales de las anotaciones"**
Los comentarios existentes del archivo son inusuales. Igual se abren lo mejor que MarkupCraft puede; revíselos antes de confiar en ellos. Guardar sigue funcionando.

**La hoja tiene el nombre equivocado, o dice "página 3"**
Consulte [Cómo reciben las hojas sus nombres](topic:open-a-plan-set#how-sheets-get-their-names). Las hojas escaneadas no tienen texto que leer; use {{ui:Cambiar nombre de la hoja}}.

**Las mismas hojas aparecen dos veces**
Se abrió dos veces el mismo archivo. Elija {{ui:Cerrar}} (guarde primero si hace falta) y abra el juego de nuevo.

## Dibujar y seleccionar

**No pasa nada cuando hago clic en la hoja**
Revise qué herramienta está presionada en la barra de herramientas, y lea la barra de estado. Con {{ui:Rectángulo}}, {{ui:Elipse}} y {{ui:Nube}}, un clic sin arrastrar no dibuja nada: arrastre. Con {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}} y {{ui:Área}}, se están agregando puntos: termine con doble clic o con {{key:Enter}}.

**"Un polígono necesita al menos 3 puntos." (o 2 para una polilínea)**
Haga clic en más puntos antes de terminar.

**"No se escribió nada, así que no se agregó texto."**
Los cuadros de texto y las llamadas solo se conservan si tienen texto. Vuelva a dibujarlo y escriba antes de hacer clic en otra parte.

**"Los dos puntos son iguales. Haga clic en dos puntos distintos."**
Para líneas, flechas, longitudes y calibración, los dos extremos deben estar separados. Arrastre, o haga clic dos veces en lugares distintos.

**No puedo mover ni borrar una marca; tiene un cuadro gris punteado**
Es un comentario de solo lectura que venía con el archivo (por ejemplo, un resaltado de texto). MarkupCraft lo conserva tal cual: solo puede responderle. La barra de estado dice "las marcas de solo lectura se conservan como en el archivo".

**Mis teclas escriben letras en un cuadro en lugar de elegir herramientas**
El cursor está en un cuadro de texto (una respuesta, un campo en {{ui:Propiedades}}, la búsqueda de hojas). Haga clic primero en una parte vacía del área de la hoja, o pulse {{key:Esc}} si está editando el texto de una marca.

**La barra espaciadora no desplaza, o las teclas de flecha no hacen nada**
Acaba de hacer clic en un botón de la barra de herramientas, así que todavía tiene el teclado. Arrastre con el botón central del ratón en su lugar, o haga clic una vez en la hoja con {{ui:Seleccionar}} activado y pruebe de nuevo. Vea también [Teclado y ratón](topic:keyboard#when-a-key-does-nothing).

**Un pellizco en la pantalla táctil dejó una marca**
Una herramienta de arrastre (lápiz, nube, rectángulo) empezó antes de que llegara el segundo dedo y terminó antes de cancelarse. Pulse {{ui:Deshacer}}. Ponga ambos dedos a la vez cuando quiera acercar.

## Medir

**"Primero calibre esta hoja: marque dos puntos a una distancia conocida, o elija su escala. Luego mida."**
Cada hoja necesita su propia escala antes de {{ui:Longitud}} o {{ui:Área}}. MarkupCraft cambió a {{ui:Calibrar}}: haga clic en los dos extremos de una dimensión conocida y escriba su longitud, o haga clic en el botón de escala de la barra de estado y elija una escala. Consulte [Calibrar una hoja y medir](topic:calibrate-and-measure).

**'Esa no es una longitud que MarkupCraft entienda.'**
Escríbala como `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`. Consulte [Unidades, longitudes y escalas](topic:units-and-scales).

**Las mediciones están un poco mal, o muy mal**
- Una escala predefinida en un PDF que no está a tamaño completo mide mal. Calibre con una dimensión conocida y larga.
- Un separador de miles se leyó como punto decimal: `1,200 mm` significa 1.2 mm. Escriba `1200 mm`.
- Acerque el zoom al hacer clic en los extremos.
- Es posible que el dibujo no esté a escala ("S/E").

**"Primero seleccione un grupo de conteo y luego haga Shift+clic en una marca para quitarla."**
Elija {{ui:Seleccionar}}, haga clic en el grupo de conteo, luego elija {{ui:Conteo}} de nuevo y haga clic con {{key:Shift}} en el punto.

## Guardar

**"Este PDF está protegido (cifrado), así que no se puede escribir una copia con marcas."**
El archivo prohíbe cambios. Pida una copia sin protección. Mientras tanto, aún puede exportar la lista de marcas como CSV o BCF.

**"No se pudo cargar el escritor de PDF: …"**
Normalmente usted está sin conexión y la aplicación no se guardó para uso sin conexión (no aparece "Listo para usar sin conexión" en la barra superior). Sus marcas siguen en la pestaña: manténgala abierta, conéctese y elija {{ui:Guardar}} de nuevo. Luego elija {{ui:Guardar para usar sin conexión}} para que funcione sin conexión la próxima vez; la copia guardada incluye el escritor de PDF.

**"No se pudo guardar <file>"**
El cuadro muestra el motivo. Sus marcas siguen en la pestaña. Intente de nuevo; si se repite, exporte el CSV para que los comentarios no se pierdan, y reporte el mensaje.

**Elegí Guardar pero solo llegó un archivo**
Su navegador bloqueó las descargas adicionales. Busque un aviso en la barra de direcciones, permita que este sitio descargue varios archivos y guarde de nuevo.

**No encuentro el archivo guardado**
Se fue a la carpeta de descargas de su navegador. Abra la lista de descargas del navegador (en Chrome y Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; en Firefox y Safari, el botón de descargas de la barra de herramientas) para ver dónde está. Consulte [Navegadores y computadoras](common:browsers).

**Algunos textos muestran "?" en otros visores de PDF**
Los caracteres fuera del conjunto de Europa occidental se imprimen como "?" en la copia. El mensaje de guardado los cuenta. Consulte [Guardar el PDF con marcas](topic:save-the-marked-up-pdf).

**El sello muestra la fecha de mañana (o de ayer)**
Las fechas de los sellos están en UTC. Consulte [Sellos y notas adhesivas](topic:stamps-and-notes).

## Trabajar sin conexión

**El botón sin conexión dice "No se pudo guardar"**
Algunos archivos de la aplicación no se descargaron. Revise la conexión y haga clic en el botón de nuevo; cuenta "Guardando N de M" hasta "Listo para usar sin conexión".

**El botón sin conexión dice "Sin conexión no disponible"**
Esta ventana del navegador no puede guardar una copia sin conexión: una ventana privada, o una computadora cuya política lo bloquea. Abra MarkupCraft en una ventana normal e intente de nuevo.

**Sin conexión, la aplicación es una versión anterior**
La copia sin conexión es la versión que guardó. Cuando esté en línea, haga clic en "Listo para usar sin conexión" y elija "Guardar de nuevo (obtener la versión más reciente)". Para liberar espacio, elija "Quitar la copia sin conexión". Consulte [Trabajar sin conexión](common:offline).

**La ayuda no se abre**
Pulse {{key:F1}} (en Mac, con **fn**), o elija {{ui:Ayuda}} en la barra superior. También funciona sin conexión.

## Cosas perdidas

**Mis marcas desaparecieron después de cerrar o recargar la pestaña**
Abra MarkupCraft de nuevo en el mismo navegador: ofrece el trabajo no guardado con "¿Recuperar su trabajo?". Elija {{ui:Recuperar}} y guarde el PDF. Las copias se conservan hasta 30 días; una ventana privada, o borrar los datos del sitio, no deja ninguna. Consulte [Recuperar su trabajo](common:recover).

**Mi nombre, la configuración de herramientas o el cofre de herramientas desaparecieron**
Se guardan solo en este navegador y se borraron (datos del sitio borrados, una ventana privada, otro navegador o computadora, o la limpieza de Safari de sitios no visitados durante un tiempo). Vuelva a escribir su nombre e importe el cofre que exportó. Consulte [Lo que se guarda en este navegador](topic:browser-storage).

**"El cofre de herramientas no se pudo guardar en este navegador (el almacenamiento está desactivado o lleno). Expórtelo para conservarlo."**
El navegador no permite guardar datos para este sitio (modo privado, almacenamiento bloqueado por una configuración o política, o lleno). Exporte el cofre después de cambiarlo, e impórtelo la próxima vez.

## Pantalla y velocidad

**La hoja se ve borrosa por un momento**
MarkupCraft muestra un dibujo rápido y tosco mientras hace zoom o desplaza, y lo vuelve a dibujar nítido un momento después de detenerse.

**Todo va lento con un juego grande**
Cierre otras pestañas pesadas, abra menos archivos a la vez y evite acercar al máximo en hojas enormes. Consulte [Trabajar con varios archivos a la vez](topic:several-files#big-sets).

**La hoja está oscura con líneas claras**
Está en el tema {{ui:Modelo}}. Elija {{ui:Papel}} en la barra superior para líneas oscuras sobre blanco. Sus marcas y el PDF guardado no se ven afectados.
