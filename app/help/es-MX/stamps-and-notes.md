---
title: Sellos y notas adhesivas
summary: Selle una hoja como Aprobado, Revisar y volver a enviar o con su propio texto, y deje notas adhesivas que se abren como comentarios emergentes.
keywords: sello, imagen, pegar imagen, captura de pantalla, portapapeles, logotipo, sello con foto, firma, firmar, aprobado, aprobado con observaciones, revisar y volver a enviar, rechazado, revisado, anulado, sello personalizado, nota adhesiva, nota, comentario, emergente
from: 76026792
---

## Sellar una hoja

1. Elija {{ui:Sello}} ({{key:S}}).
2. En {{ui:Propiedades}} a la derecha, elija el sello en {{ui:Sello}}:
   - Aprobado
   - Aprobado con observaciones
   - Revisar y volver a enviar
   - Rechazado
   - Revisado
   - Anulado
   - Texto personalizado… (escriba hasta 60 caracteres en el cuadro que aparece, luego pulse {{key:Enter}} o haga clic en otra parte)
3. Haga clic en la hoja donde va el sello. O arrastre un recuadro para elegir su tamaño.

Resultado: un sello enmarcado en mayúsculas con una segunda línea "Por <su nombre>, <fecha>". Un sello con clic se dimensiona para la pantalla según su zoom, y se mantiene entre media pulgada y una pulgada y cuarto de alto en la hoja impresa.

El sello que eligió se mantiene seleccionado para el siguiente, también después de reabrir MarkupCraft en este navegador.

**Los colores siguen el significado:** los sellos Aprobado son verdes, Revisar y volver a enviar naranja, Rechazado y Anulado rojos, Revisado azul, y los sellos personalizados morados. Si elige otro color en {{ui:Propiedades}}, ese color se conserva.

### Cambiar un sello después

Selecciónelo y elija otro sello en {{ui:Propiedades}}. Si todavía tenía su color automático, el color cambia según el significado.

El nombre y la fecha del sello son el autor del sello y el día en que se hizo. No cambian al editarlo, y el autor de un sello no puede cambiarse. Para sellar con el nombre de otra persona, esa persona configura su nombre y lo sella ella misma.

:::note
La fecha de un sello es la fecha en Tiempo Universal Coordinado (UTC). Tarde en la noche en América, o temprano en la mañana en Asia y Australia, puede mostrar el día siguiente o el anterior comparado con su reloj. La hora de creación en {{ui:Propiedades}} está en su propia zona horaria.
:::

### Sellos que usa con frecuencia

El cofre de herramientas trae una herramienta de sello "Aprobado con observaciones", y puede guardar cualquier sello (su redacción y color) como una herramienta propia. Consulte [El cofre de herramientas](topic:tool-chest).

Los sellos con campos llenos (fecha de recepción, número de proyecto) todavía no están creados.

## Sellar una imagen o su firma

La lista de sellos en {{ui:Propiedades}} termina con dos opciones más:

- {{ui:Imagen…}} pide un archivo PNG, JPEG o SVG en esta computadora, o una página de un PDF, como un sello de empresa o un logotipo. Las imágenes grandes se reducen a 1600 píxeles en su lado más largo; un SVG o una página de PDF se convierte en una imagen de ese tamaño.
- {{ui:Mi firma…}} abre un cuadro de firma: firme con el ratón, un lápiz o un dedo, y elija {{ui:Usar esta firma}}. {{ui:Borrar}} empieza de nuevo. {{ui:Usar una imagen de una firma…}} toma un escaneo o una foto de su firma: MarkupCraft vuelve transparente el papel blanco y recorta la imagen a la tinta (para un PNG, pregunta antes).

Luego haga clic en la hoja para colocarlo (una imagen de 3 pulgadas de ancho, una firma de 2 pulgadas de ancho), o arrastre un recuadro para ajustarlo dentro; se mantienen las proporciones. Cambie su tamaño con sus controles como cualquier marca ({{key:Shift}} mantiene las proporciones).

La última imagen se guarda en este navegador, así queda lista la próxima vez; {{ui:Elegir otra imagen…}} la reemplaza. Cada firma que dibuje o cargue se guarda en {{ui:Sus firmas}} (hasta ocho, la más reciente primero): haga clic en una para usarla, o en × para quitarla. Consulte [Lo que se guarda en este navegador](topic:browser-storage).

En el PDF guardado, una imagen es un comentario de sello que muestra la imagen, así que cualquier visor de PDF la muestra e imprime. Una firma dibujada aquí es una imagen de su firma, no una firma digital certificada.

## Pegar una imagen desde el portapapeles

Copie una imagen en otro programa, o tome una captura de pantalla al portapapeles, y luego pulse {{key:Mod+V}} sobre la hoja. Se coloca donde está el puntero, con un máximo de 3 pulgadas de ancho o alto y sus proporciones, como una marca de imagen que puede mover y cambiar de tamaño. En el PDF guardado es un comentario de sello que muestra la imagen, como las imágenes de arriba.

{{ui:Más}} › {{ui:Pegar una imagen}} en el grupo {{ui:Edición}} hace lo mismo desde el menú; el navegador puede pedir permiso antes. Cuando el portapapeles no tiene una imagen, {{key:Mod+V}} pega las marcas copiadas como antes.

## Insertar una imagen desde un archivo

Elija {{ui:Más}} › {{ui:Insertar una imagen desde un archivo…}} en el grupo {{ui:Edición}} (o {{ui:Insertar una imagen aquí…}} en el menú contextual), y seleccione un archivo PNG, JPEG o SVG, o un PDF (un PDF de varias páginas pregunta cuál). También puede arrastrar un archivo PNG, JPEG o SVG a la hoja: se coloca donde lo suelte. La imagen es una marca, con un máximo de 3 pulgadas de ancho o alto: muévala y cambie su tamaño como cualquier otra.

Para que una imagen forme parte de la página, marque {{ui:Aplanar en la página al guardar}} en {{ui:Propiedades}}. Consulte [Guardar una copia aplanada](topic:flatten).

## Crear un sello a partir de una selección

Seleccione marcas (o contenido de la página con la herramienta {{ui:Contenido}}) y elija {{ui:Guardar la selección como sello…}} en {{ui:Más}}, en el menú contextual, o {{ui:Guardar como sello…}} en {{ui:Propiedades}}. Dele un nombre. Va al cofre de herramientas: haga clic allí y luego en cualquier hoja para colocar todo lo que seleccionó, junto y centrado donde haga clic. Consulte [El cofre de herramientas](topic:tool-chest).

## Notas adhesivas

1. Elija {{ui:Nota}} ({{key:N}}).
2. Haga clic donde va la nota. Aparece un pequeño icono de nota con un cuadro a su lado.
3. Escriba la nota. Haga clic afuera o pulse {{key:Mod+Enter}} para conservarla; {{key:Esc}} la descarta.

A diferencia del texto y las llamadas, una nota se conserva aunque no escriba nada, así que puede colocar el icono ahora y escribir después.

- Las palabras de la nota son su campo {{ui:Nota}} en {{ui:Propiedades}}. Haga doble clic en el icono (o selecciónelo y pulse {{key:Enter}}) para editarlas en la hoja.
- En la hoja solo ve el icono. Otros visores de PDF muestran una nota adhesiva estándar que se abre con el texto al hacer clic.
- Cambie el color del icono con {{ui:Color}} en {{ui:Propiedades}}.

Para una discusión de ida y vuelta, use la conversación de respuestas de cualquier marca: consulte [Estados y respuestas](topic:statuses-and-replies).
