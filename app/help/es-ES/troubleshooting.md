---
title: Solución de problemas
summary: Mensajes que muestra MarkupCraft y qué hacer al respecto, además de soluciones para cosas que parecen no funcionar.
keywords: problema, error, no funciona, ayuda, mensaje, no abre, no se puede guardar, contraseña, protegido, medida rechazada, calibrar, sin conexión, en blanco, lento, anotaciones perdidas, signos de interrogación
from: bb650b39
---

La mayoría de los problemas se explican en la barra de estado de la parte inferior de la pantalla. Léala primero.

## Abrir archivos

**"MarkupCraft abre archivos PDF. "x" no es un PDF."**
Ha elegido o soltado otro tipo de archivo. Solo se abren PDF. Exporte antes los planos desde su programa CAD como PDF.

**'"nombre" necesita una contraseña para abrirse. Abra una copia sin protección.'**
El PDF tiene contraseña. Pida al remitente una copia sin protección, o ábralo en un programa de PDF cuya contraseña conozca y guarde una copia sin ella.

**'"nombre" no se pudo leer como PDF (…)'**
El archivo está dañado o no es realmente un PDF (una descarga incompleta, un adjunto de correo cortado). Descárguelo de nuevo. Si otros programas de PDF lo pueden abrir, use su opción "guardar como" para hacer una copia limpia y ábrala.

**"Algunos archivos no se abrieron"**
Cuando abre varios a la vez, este cuadro enumera los archivos que fallaron y por qué. Los demás están abiertos.

**"El lector de PDF no pudo cargar: …"**
No se pudo obtener el motor de PDF. En línea: recargue la página e inténtelo de nuevo, y compruebe que un cortafuegos o un bloqueador de contenido no bloquea el sitio. Sin conexión: MarkupCraft no se guardó para uso sin conexión en este navegador (la barra superior no dice "Listo sin conexión"). Conéctese, elija {{ui:Guardar para uso sin conexión}} y espere a "Listo sin conexión". Consulte [Trabajar sin conexión](common:offline).

**"Algunas anotaciones pueden aparecer dos veces en pantalla" o "No se pudieron leer detalles adicionales de las anotaciones"**
Los comentarios existentes del archivo son poco habituales. Aun así se abren lo mejor posible; compruébelos antes de fiarse de ellos. Guardar sigue funcionando.

**La hoja tiene un nombre incorrecto, o "página 3"**
Consulte [Cómo se nombran las hojas](topic:open-a-plan-set#how-sheets-get-their-names). Las hojas escaneadas no tienen texto que leer; use {{ui:Renombrar hoja}}.

**Las mismas hojas aparecen dos veces**
Se abrió dos veces el mismo archivo. Elija {{ui:Cerrar}} (guarde primero si hace falta) y abra el conjunto de nuevo.

## Dibujar y seleccionar

**No pasa nada cuando hago clic en la hoja**
Compruebe qué herramienta está pulsada en la barra y lea la barra de estado. Con {{ui:Rectángulo}}, {{ui:Elipse}} y {{ui:Nube}}, un clic sin arrastrar no dibuja nada: arrastre. Con {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}} y {{ui:Área}}, se están añadiendo puntos: termine con doble clic o con {{key:Enter}}.

**"Un polígono necesita al menos 3 puntos." (o 2 para una polilínea)**
Haga clic en más puntos antes de terminar.

**"Nada escrito, así que no se añadió texto."**
Los cuadros de texto y las llamadas solo se conservan cuando tienen texto. Vuelva a dibujarlo y escriba antes de hacer clic fuera.

**"Los dos puntos son iguales. Haga clic en dos puntos distintos."**
En líneas, flechas, longitudes y calibración, los dos extremos deben estar separados. Arrastre, o haga clic dos veces en lugares diferentes.

**No puedo mover ni borrar una anotación; tiene un recuadro gris discontinuo**
Es un comentario de solo lectura que venía con el archivo (por ejemplo, un resaltado de texto). MarkupCraft lo mantiene tal cual: solo puede responder a él. La barra de estado dice "las anotaciones de solo lectura se conservan como en el archivo".

**Mis teclas escriben letras en un cuadro en vez de elegir herramientas**
El cursor está en un cuadro de texto (una respuesta, un campo de {{ui:Propiedades}}, la búsqueda de hojas). Haga clic primero en una zona vacía del área de la hoja, o pulse {{key:Esc}} si está editando el texto de una anotación.

**Space no desplaza, o las teclas de flecha no hacen nada**
Acaba de hacer clic en un botón de la barra, que aún tiene el teclado. Arrastre con el botón central del ratón, o haga clic una vez en la hoja con {{ui:Seleccionar}} activo, y pruebe de nuevo. Consulte también [Teclado y ratón](topic:keyboard#when-a-key-does-nothing).

**Un pellizco en la pantalla táctil dejó una marca**
Una herramienta de arrastre (lápiz, nube, rectángulo) empezó antes de que llegara el segundo dedo y terminó antes de cancelarse. Pulse {{ui:Deshacer}}. Ponga ambos dedos a la vez cuando quiera hacer zoom.

## Medir

**"Calibre primero esta hoja: indique dos puntos a una distancia conocida, o elija su escala. Después mida."**
Cada hoja necesita su propia escala antes de {{ui:Longitud}} o {{ui:Área}}. MarkupCraft ha cambiado a {{ui:Calibrar}}: haga clic en los dos extremos de una cota conocida y escriba su longitud, o haga clic en el botón de escala de la barra de estado y elija una escala. Consulte [Calibrar una hoja y medir](topic:calibrate-and-measure).

**'Esa no es una longitud que MarkupCraft entienda.'**
Escríbala como `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`. Consulte [Unidades, longitudes y escalas](topic:units-and-scales).

**Las medidas están un poco mal, o muy mal**
- Una escala predefinida en un PDF que no está a tamaño real mide mal. Calibre usando una dimensión conocida y larga.
- Un separador de miles se leyó como punto decimal: `1,200 mm` significa 1.2 mm. Escriba `1200 mm`.
- Haga zoom al hacer clic en los extremos.
- Es posible que el dibujo no esté a escala ("NTS").

**"Seleccione primero un grupo de conteo y, después, haga Shift+clic en una marca para quitarla."**
Elija {{ui:Seleccionar}}, haga clic en el grupo de conteo, después elija {{ui:Contar}} de nuevo y haga {{key:Shift}}+clic en el punto.

## Guardar

**"Este PDF está protegido (cifrado), así que no se puede escribir una copia anotada."**
El archivo no permite cambios. Pida una copia sin protección. Mientras tanto puede exportar la lista de anotaciones como CSV o BCF.

**"El escritor de PDF no pudo cargar: …"**
Normalmente está sin conexión y la aplicación no se guardó para uso sin conexión (no aparece "Listo sin conexión" en la barra superior). Sus anotaciones siguen en la pestaña: manténgala abierta, conéctese y elija {{ui:Guardar}} de nuevo. Después elija {{ui:Guardar para uso sin conexión}} para que funcione sin conexión la próxima vez; la copia guardada incluye el escritor de PDF.

**"No se pudo guardar <archivo>"**
El cuadro indica por qué. Sus anotaciones siguen en la pestaña. Inténtelo de nuevo; si se repite, exporte el CSV para no perder los comentarios e informe del mensaje.

**Elegí Guardar, pero solo llegó un archivo**
Su navegador bloqueó las descargas adicionales. Busque un aviso en la barra de direcciones, permita a este sitio descargar varios archivos y guarde de nuevo.

**No encuentro el archivo guardado**
Se fue a la carpeta de descargas de su navegador. Abra la lista de descargas (en Chrome y Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; en Firefox y Safari, el botón de descargas de la barra de herramientas) para ver dónde está. Consulte [Navegadores y equipos](common:browsers).

**Algún texto muestra "?" en otros visores de PDF**
Los caracteres fuera del juego de caracteres de Europa occidental aparecen como "?" en la copia. El mensaje de guardado los cuenta. Consulte [Guardar el PDF anotado](topic:save-the-marked-up-pdf).

**El sello muestra la fecha de mañana (o de ayer)**
Las fechas de los sellos están en UTC. Consulte [Sellos y notas adhesivas](topic:stamps-and-notes).

## Trabajar sin conexión

**El botón sin conexión dice "No se pudo guardar"**
Algunos archivos de la aplicación no se descargaron. Compruebe la conexión y pulse el botón de nuevo; cuenta "Guardando N de M" hasta "Listo sin conexión".

**El botón sin conexión dice "Sin conexión no disponible"**
Esta ventana del navegador no puede guardar una copia sin conexión: es una ventana privada, o un equipo cuya política lo impide. Abra MarkupCraft en una ventana normal e inténtelo de nuevo.

**Sin conexión, la aplicación es una versión anterior**
La copia sin conexión es la versión que guardó. Cuando tenga conexión, haga clic en "Listo sin conexión" y elija "Guardar de nuevo (obtener la versión más reciente)". Para liberar espacio, elija "Quitar la copia sin conexión". Consulte [Trabajar sin conexión](common:offline).

**La ayuda no se abre**
Pulse {{key:F1}} (en un Mac, con **fn**), o elija {{ui:Ayuda}} en la barra superior. También funciona sin conexión.

## Cosas perdidas

**Mis anotaciones desaparecieron al cerrar o recargar la pestaña**
Vuelva a abrir MarkupCraft en el mismo navegador: ofrece el trabajo no guardado con "¿Recuperar su trabajo?". Elija {{ui:Recuperar}} y guarde el PDF. Las copias se conservan hasta 30 días; una ventana privada o borrar los datos del sitio no deja ninguna. Consulte [Recuperar su trabajo](common:recover).

**Mi nombre, los ajustes de herramientas o la caja de herramientas desaparecieron**
Se guardan solo en este navegador y se borraron (datos del sitio borrados, ventana privada, otro navegador o equipo, o la limpieza de Safari de sitios no visitados durante un tiempo). Vuelva a configurar el nombre e importe su caja exportada. Consulte [Qué se guarda en este navegador](topic:browser-storage).

**"La caja de herramientas no se pudo conservar en este navegador (el almacenamiento está desactivado o lleno). Expórtela para conservarla."**
El navegador no permite guardar datos de este sitio (modo privado, almacenamiento bloqueado por un ajuste o una política, o lleno). Exporte la caja después de cambiarla e impórtela la próxima vez.

## Pantalla y velocidad

**La hoja se ve borrosa un momento**
MarkupCraft muestra una representación rápida y tosca mientras hace zoom o desplaza, y la vuelve a dibujar nítida poco después de parar.

**Todo va lento con un conjunto grande**
Cierre otras pestañas pesadas, abra menos archivos a la vez y evite hacer zoom al máximo en hojas enormes. Consulte [Trabajar con varios archivos a la vez](topic:several-files#big-sets).

**La hoja está oscura con líneas claras**
Está en el tema {{ui:Modelo}}. Elija {{ui:Papel}} en la barra superior para líneas oscuras sobre blanco. Sus anotaciones y el PDF guardado no se ven afectados.
