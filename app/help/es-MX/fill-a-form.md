---
title: Llenar un formulario PDF
summary: Escriba en los campos de formulario de un PDF, marque sus casillas y elija de sus listas; los valores se guardan en el propio formulario.
keywords: formulario, formularios, llenable, llenar, completar, acroform, campo, campos, campo de texto, casilla, casilla de verificación, marcar, botón de opción, lista desplegable, desplegable, lista, permiso, solicitud, formulario de inspección, formulario de entrega, aprobación
from: ab366541
---

Muchos PDF incluyen un formulario: solicitudes de permiso, listas de verificación de inspección, portadas de entregas. MarkupCraft muestra los campos del formulario y sus valores, y le permite llenarlos. Los valores van a los propios campos del PDF, así que Acrobat y cualquier otro lector de PDF los muestran y los conservan.

## Llenar el formulario

1. Abra el PDF. Si tiene un formulario, la barra de estado indica cuántos campos tiene.
2. Elija {{ui:Llenar formulario}} en la barra de herramientas (o pulse {{key:F}}). Cada campo de la página recibe un cuadro en el que puede escribir.
3. Haga clic en un campo y escriba. Marque casillas, seleccione botones de opción y elija de listas desplegables y listas. {{key:Tab}} pasa al siguiente campo.
4. Para mover la hoja mientras llena, arrastre en cualquier parte fuera de los campos.
5. Pulse {{key:Esc}} o elija otra herramienta al terminar. Lo que escribió permanece en la hoja.

Con {{ui:Seleccionar}}, un doble clic en un campo activa {{ui:Llenar formulario}} y lo coloca en ese campo.

## Guardar el formulario llenado

Elija {{ui:Guardar}}. La copia que descargue tiene sus valores en los campos, con sus marcas junto a ellos. La barra de estado indica cuántos campos se llenaron.

Para entregar un formulario que nadie pueda cambiar, elija {{ui:Páginas}} y luego {{ui:Guardar una copia acoplada…}}: los valores pasan a formar parte de la página. Imprimir hace lo mismo.

## Para tener en cuenta

- Un campo que el PDF bloquea (solo lectura) no se puede cambiar. Su cuadro aparece gris.
- El texto se conserva hasta el límite de longitud propio del campo; los caracteres de más no se escriben.
- Algunos formularios no traen dibujados sus cuadros y botones, y otros programas los muestran en blanco. MarkupCraft los dibuja, y al guardar agrega la imagen, para que se vean en todas partes.
- Deshacer dentro de un campo es el del propio campo: pulse {{key:Ctrl+Z}} mientras escribe en él. El deshacer de marcas no deshace los valores del formulario.
- Si su navegador se cierra, los valores que escribió vuelven junto con el resto de su trabajo sin guardar.
- Los valores escritos con letras que la fuente PDF estándar no puede representar (por ejemplo, chino) se guardan, y el PDF pide a cada lector que los dibuje por sí mismo.
- Los campos de firma y los botones de pulsación no se llenan aquí. Para firmar, use {{ui:Sello}} y su firma.
- Los valores escritos en un formulario todavía no se comparten en una sesión en vivo.
