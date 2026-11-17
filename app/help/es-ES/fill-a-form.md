---
title: Rellenar un formulario PDF
summary: Escriba en los campos de un formulario PDF, marque sus casillas y elija de sus listas; los valores se guardan en el propio formulario.
keywords: formulario, formularios, rellenable, rellenar, completar, acroform, campo, campos, campo de texto, casilla, marcar, botón de radio, desplegable, lista, permiso, solicitud, formulario de inspección, formulario de documento para aprobación, dar conformidad
from: ab366541
---

Muchos PDF incluyen un formulario: solicitudes de permisos, listas de comprobación de inspección, portadas de documentos para aprobación. MarkupCraft muestra los campos del formulario y sus valores, y le permite rellenarlos. Los valores van a los propios campos del PDF, así que Acrobat y cualquier otro lector de PDF los muestran y los conservan.

## Rellenar el formulario

1. Abra el PDF. Si tiene un formulario, la barra de estado indica cuántos campos tiene.
2. Elija {{ui:Fill form}} en la barra de herramientas (o pulse {{key:F}}). Cada campo de la página recibe un recuadro en el que puede escribir.
3. Haga clic en un campo y escriba. Marque las casillas, elija los botones de radio y seleccione en los desplegables y listas. {{key:Tab}} pasa al siguiente campo.
4. Para mover la hoja mientras rellena, arrastre en cualquier punto fuera de los campos.
5. Pulse {{key:Esc}} o elija otra herramienta cuando termine. Lo que escribió se queda en la hoja.

Con {{ui:Select}}, un doble clic en un campo activa {{ui:Fill form}} y le sitúa en ese campo.

## Guardar el formulario rellenado

Elija {{ui:Save}}. La copia que descarga tiene sus valores en los campos, con sus marcas junto a ellos. La barra de estado indica cuántos campos se rellenaron.

Para entregar un formulario que nadie pueda cambiar, elija {{ui:Pages}} y luego {{ui:Save a flattened copy…}}: los valores pasan a formar parte de la página. Imprimir hace lo mismo.

## Conviene saber

- Un campo bloqueado en el PDF (solo lectura) no se puede cambiar. Su recuadro aparece en gris.
- El texto hasta el límite de longitud propio del campo se conserva; los caracteres extra no se escriben.
- Algunos formularios no traen dibujados sus recuadros y botones, y otros programas los muestran en blanco. MarkupCraft los dibuja y, al guardar, añade la imagen para que se vean en todas partes.
- Deshacer en un campo es el del propio campo: pulse {{key:Ctrl+Z}} mientras escribe en él. El deshacer de las marcas no deshace los valores del formulario.
- Si su navegador se cierra, los valores escritos vuelven junto con el resto de su trabajo sin guardar.
- Los valores escritos con letras que la fuente PDF estándar no puede escribir (por ejemplo, chino) se guardan, y el PDF pide a cada lector que los dibuje por su cuenta.
- Los campos de firma y los botones de pulsación no se rellenan aquí. Para firmar, use {{ui:Stamp}} con su firma.
- Los valores escritos en un formulario todavía no se comparten en una sesión en directo.
