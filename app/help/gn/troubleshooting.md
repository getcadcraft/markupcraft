---
title: Solución de problemas
summary: Mensajes que muestra MarkupCraft y qué hacer con ellos, además de soluciones para cosas que parecen no funcionar.
keywords: problema, error, no funciona, ayuda, mensaje, no abre, no se puede guardar, contraseña, protegido, medida rechazada, calibrar, sin conexión, en blanco, lento, anotaciones perdidas, signos de interrogación
from: bb650b39
---

La mayoría de los problemas se explican en la barra de estado de la parte inferior de la pantalla. Leela primero.

## Abrir archivos

**"MarkupCraft abre archivos PDF. "x" no es un PDF."**
Elegiste o soltaste otra cosa. Sólo se abren PDF. Exportá primero los planos desde tu programa CAD como PDF.

'"nombre" necesita una contraseña para abrirse. Abrí una copia sin protección.'
El PDF tiene contraseña. Pedile a quien lo envió una copia sin protección, o ábrilo en un programa de PDF donde conozcas la contraseña y guardá una copia sin contraseña.

'"nombre" no se pudo leer como PDF (…)'
El archivo está dañado o no es realmente un PDF (una descarga incompleta, un adjunto de correo cortado). Descargalo de nuevo. Si otros programas de PDF lo abren, usá su "guardar como" para hacer una copia limpia y abrila.

**"Algunos archivos no se abrieron"**
Cuando abrís varios a la vez, este cuadro lista los archivos que fallaron y por qué. Los demás están abiertos.

**"El lector de PDF no pudo cargar: …"**
No se pudo obtener el motor de PDF. En línea: recargá la página y probá de nuevo; verificá que un firewall o bloqueador de contenido no esté bloqueando el sitio. Sin conexión: MarkupCraft no se guardó para usar sin conexión en este navegador (la barra superior no dice "Listo sin conexión"). Conectate, elegí {{ui:Guardar para usar sin conexión}} y esperá "Listo sin conexión". Ver [Trabajar sin conexión](common:offline).

**"Algunas anotaciones pueden aparecer dos veces en pantalla" o "No se pudieron leer detalles adicionales de anotaciones"**
Los comentarios existentes del archivo son inusuales. Igual se abren lo mejor que puede MarkupCraft; revisalos antes de confiar en ellos. Guardar sigue funcionando.

**La hoja tiene un nombre equivocado, o "página 3"**
Ver [Cómo se nombran las hojas](topic:open-a-plan-set#how-sheets-get-their-names). Las hojas escaneadas no tienen texto para leer; usá {{ui:Renombrar hoja}}.

**Las mismas hojas aparecen dos veces**
Se abrió dos veces el mismo archivo. Elegí {{ui:Cerrar}} (guardá primero si hace falta) y abrí el conjunto de nuevo.

## Dibujar y seleccionar

**No pasa nada cuando hago clic en la hoja**
Revisá qué herramienta está activa en la barra, y leé la barra de estado. Con {{ui:Rectángulo}}, {{ui:Elipse}} y {{ui:Nube}}, un clic sin arrastrar no dibuja nada: arrastrá. Con {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}} y {{ui:Área}}, se están agregando puntos: terminá con un doble clic o {{key:Enter}}.

**"Un polígono necesita al menos 3 puntos." (o 2 para una polilínea)**
Hacé clic en más puntos antes de terminar.

**"Nada escrito, así que no se agregó texto."**
Las cajas de texto y las llamadas se conservan sólo cuando tienen texto. Dibujala de nuevo y escribí antes de hacer clic afuera.

**"Los dos puntos son iguales. Hacé clic en dos puntos distintos."**
Para líneas, flechas, longitudes y calibración, los dos extremos tienen que estar separados. Arrastrá, o hacé clic dos veces en lugares distintos.

**No puedo mover ni borrar una anotación; tiene un recuadro punteado gris**
Es un comentario de solo lectura que vino con el archivo (por ejemplo un resaltado de texto). MarkupCraft lo mantiene como está: sólo podés responderle. La barra de estado dice "las anotaciones de solo lectura se mantienen como en el archivo".

**Mis teclas escriben letras en un cuadro en vez de elegir herramientas**
El cursor está en una caja de texto (una respuesta, un campo de {{ui:Propiedades}}, la búsqueda de hojas). Hacé clic primero en una parte vacía del área de la hoja, o apretá {{key:Esc}} si estás editando el texto de una anotación.

**La barra espaciadora no desplaza, o las flechas no hacen nada**
Acabás de hacer clic en un botón de la barra, así que todavía tiene el teclado. Arrastrá con el botón central del mouse, o hacé clic una vez en la hoja con {{ui:Seleccionar}} activado, y probá de nuevo. Ver también [Teclado y mouse](topic:keyboard#when-a-key-does-nothing).

**Un pellizco en la pantalla táctil dejó una marca**
Una herramienta de arrastre (lápiz, nube, rectángulo) empezó antes de que llegara el segundo dedo y terminó antes de que se cancelara. Apretá {{ui:Deshacer}}. Poné los dos dedos juntos cuando quieras hacer zoom.

## Medir

**"Calibrá primero esta hoja: marcá dos puntos a una distancia conocida, o elegí su escala. Después medí."**
Cada hoja necesita su propia escala antes de {{ui:Longitud}} o {{ui:Área}}. MarkupCraft cambió a {{ui:Calibrar}}: hacé clic en los dos extremos de una dimensión conocida y escribí su longitud, o hacé clic en el botón de escala de la barra de estado y elegí una escala. Ver [Calibrar una hoja y medir](topic:calibrate-and-measure).

**'Esa no es una longitud que MarkupCraft entienda.'**
Escribila como `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`. Ver [Unidades, longitudes y escalas](topic:units-and-scales).

**Las medidas están un poco mal, o muy mal**
- Una escala predeterminada en un PDF que no está a tamaño completo mide mal. Calibrá en cambio a partir de una dimensión conocida larga.
- Un separador de miles se leyó como punto decimal: `1,200 mm` significa 1.2 mm. Escribí `1200 mm`.
- Hacé zoom al hacer clic en los extremos.
- Es posible que el dibujo no esté a escala ("NTS").

**"Primero elegí un grupo de conteo, después Shift+clic en una marca para quitarla."**
Elegí {{ui:Seleccionar}}, hacé clic en el grupo de conteo, después elegí {{ui:Contar}} de nuevo y hacé clic con {{key:Shift}} en el punto.

## Guardar

**"Este PDF está protegido (cifrado), así que no se puede escribir una copia anotada."**
El archivo prohíbe cambios. Pedí una copia sin protección. Mientras tanto podés exportar la lista de anotaciones como CSV o BCF.

**"El escritor de PDF no pudo cargar: …"**
Por lo general estás sin conexión y la aplicación no se guardó para usar sin conexión (no aparece "Listo sin conexión" en la barra superior). Tus anotaciones siguen en la pestaña: mantenela abierta, conectate y elegí {{ui:Guardar}} de nuevo. Después elegí {{ui:Guardar para usar sin conexión}} para que funcione sin conexión la próxima vez; la copia guardada incluye el escritor de PDF.

**"No se pudo guardar <archivo>"**
El cuadro muestra por qué. Tus anotaciones siguen en la pestaña. Probá de nuevo; si se repite, exportá el CSV para no perder los comentarios, y reportá el mensaje.

**Elegí Guardar pero llegó sólo un archivo**
Tu navegador bloqueó las descargas adicionales. Buscá un aviso en la barra de direcciones y permití que este sitio descargue varios archivos, después guardá de nuevo.

**No encuentro el archivo guardado**
Se fue a la carpeta de descargas de tu navegador. Abrí la lista de descargas del navegador (en Chrome y Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; en Firefox y Safari, el botón de descargas de la barra de herramientas) para ver dónde está. Ver [Navegadores y computadoras](common:browsers).

**Algún texto muestra "?" en otros visores de PDF**
Los caracteres fuera del conjunto de Europa occidental se imprimen como "?" en la copia. El mensaje de guardado los cuenta. Ver [Guardar el PDF anotado](topic:save-the-marked-up-pdf).

**El sello muestra la fecha de mañana (o de ayer)**
Las fechas de los sellos están en UTC. Ver [Sellos y notas adhesivas](topic:stamps-and-notes).

## Trabajar sin conexión

**El botón sin conexión dice "No se pudo guardar"**
Algunos archivos de la aplicación no se descargaron. Revisá la conexión y hacé clic en el botón de nuevo; cuenta "Guardando N de M" hasta "Listo sin conexión".

**El botón sin conexión dice "Sin conexión no disponible"**
Esta ventana del navegador no puede guardar una copia sin conexión: una ventana privada, o una computadora cuya política lo bloquea. Abrí MarkupCraft en una ventana normal y probá de nuevo.

**Sin conexión, la aplicación es una versión anterior**
La copia sin conexión es la versión que guardaste. Cuando estés en línea, hacé clic en "Listo sin conexión" y elegí "Guardar de nuevo (obtener la versión más nueva)". Para liberar el espacio, elegí "Quitar la copia sin conexión". Ver [Trabajar sin conexión](common:offline).

**La ayuda no se abre**
Apretá {{key:F1}} (en una Mac, con **fn**), o elegí {{ui:Ayuda}} en la barra superior. También funciona sin conexión.

## Cosas perdidas

**Mis anotaciones desaparecieron después de cerrar o recargar la pestaña**
Abrí MarkupCraft de nuevo en el mismo navegador: ofrece recuperar el trabajo no guardado con "¿Recuperar tu trabajo?". Elegí {{ui:Recuperar}} y guardá el PDF. Las copias se conservan hasta 30 días; una ventana privada, o borrar los datos del sitio, no deja ninguna. Ver [Recuperar tu trabajo](common:recover).

**Mi nombre, la configuración de herramientas o la caja de herramientas desaparecieron**
Se guardan sólo en este navegador y se borraron (datos del sitio borrados, una ventana privada, otro navegador u otra computadora, o la limpieza de Safari de sitios no visitados durante un tiempo). Configurá el nombre de nuevo e importá tu caja exportada. Ver [Lo que se guarda en este navegador](topic:browser-storage).

**"La caja de herramientas no pudo guardarse en este navegador (el almacenamiento está apagado o lleno). Exportala para conservarla."**
El navegador no permite guardar datos para este sitio (modo privado, almacenamiento bloqueado por una configuración o política, o lleno). Exportá la caja después de cambiarla, e importala la próxima vez.

## Pantalla y velocidad

**La hoja se ve borrosa por un momento**
MarkupCraft muestra una representación rápida y aproximada mientras hacés zoom o te desplazás, y la vuelve a dibujar nítida un momento después de que pares.

**Todo va lento con un conjunto grande**
Cerrá otras pestañas pesadas, abrí menos archivos a la vez, y evitá hacer zoom al máximo en hojas enormes. Ver [Trabajar con varios archivos a la vez](topic:several-files#big-sets).

**La hoja está oscura con líneas claras**
Estás en el tema {{ui:Modelo}}. Elegí {{ui:Papel}} en la barra superior para líneas oscuras sobre blanco. Tus anotaciones y el PDF guardado no se ven afectados.
