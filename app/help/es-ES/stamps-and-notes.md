---
title: Sellos y notas adhesivas
summary: Ponga un sello en una hoja con Aprobado, Revisar y volver a enviar o su propio texto, y deje notas adhesivas que se abren como comentarios emergentes.
keywords: sello, imagen, foto, pegar imagen, captura de pantalla, portapapeles, logotipo, sello con foto, firma, firmar, aprobado, aprobado con observaciones, revisar y volver a enviar, rechazado, revisado, anulado, sello personalizado, nota adhesiva, nota, comentario, emergente
from: 76026792
---

## Poner un sello en una hoja

1. Elija {{ui:Sello}} ({{key:S}}).
2. En {{ui:Propiedades}}, a la derecha, elija el sello en {{ui:Sello}}:
   - Aprobado
   - Aprobado con observaciones
   - Revisar y volver a enviar
   - Rechazado
   - Revisado
   - Anulado
   - Texto personalizado… (escriba hasta 60 caracteres en el cuadro que aparece y pulse {{key:Enter}} o haga clic en otro lugar)
3. Haga clic en la hoja donde va el sello. O arrastre un recuadro para elegir su tamaño.

Resultado: un sello enmarcado en mayúsculas con una segunda línea "Por <su nombre>, <fecha>". Un sello colocado con clic se dimensiona para la pantalla según su zoom, y en la hoja impresa mide entre 0.5 in y 1.25 in de alto.

El sello elegido se mantiene para el siguiente, también después de volver a abrir MarkupCraft en este navegador.

**Los colores siguen el significado:** los sellos Aprobado son verdes, Revisar y volver a enviar naranjas, Rechazado y Anulado rojos, Revisado azul, y los sellos personalizados morados. Si elige otro color en {{ui:Propiedades}}, ese color se conserva.

### Cambiar un sello más tarde

Selecciónelo y elija otro sello en {{ui:Propiedades}}. Si todavía tenía su color automático, el color cambia según el significado.

El nombre y la fecha del sello son el autor del sello y el día en que se creó. No cambian al editarlo, y el autor de un sello no se puede cambiar. Para sellar en nombre de otra persona, esa persona debe configurar su nombre y sellar ella misma.

:::note
La fecha de un sello es la fecha en Tiempo Universal Coordinado (UTC). Por la noche en América, o de madrugada en Asia y Australia, puede mostrar el día siguiente o el anterior respecto a su reloj. La hora de creación en {{ui:Propiedades}} está en su propia zona horaria.
:::

### Sellos que usa a menudo

La caja de herramientas incluye una herramienta de sello "Aprobado con observaciones", y puede guardar cualquier sello (su texto y color) como herramienta propia. Consulte [La caja de herramientas](topic:tool-chest).

Los sellos con campos rellenables (fecha de recepción, número de proyecto) todavía no están disponibles.

## Sellar una imagen o su firma

La lista de sellos en {{ui:Propiedades}} termina con dos opciones más:

- {{ui:Imagen…}} pide un archivo PNG, JPEG o SVG de este equipo, o una página de un PDF, como un sello de empresa o un logotipo. Las imágenes grandes se reducen a 1600 px en su lado más largo; un SVG o una página PDF se convierte en una imagen de ese tamaño.
- {{ui:Mi firma…}} abre un cuadro de firma: firme con el ratón, un lápiz o un dedo, y elija {{ui:Usar esta firma}}. {{ui:Borrar}} empieza de nuevo. {{ui:Usar una imagen de una firma…}} toma una digitalización o foto de su firma: MarkupCraft hace transparente el papel blanco y recorta la imagen a la tinta (para un PNG pregunta antes).

Después, haga clic en la hoja para colocarla (una imagen de 3 in de ancho, una firma de 2 in), o arrastre un recuadro para ajustarla dentro; las proporciones se mantienen. Cambie su tamaño con sus controladores como cualquier anotación ({{key:Shift}} mantiene las proporciones).

La última imagen se guarda en este navegador, así queda lista la próxima vez; {{ui:Elegir otra imagen…}} la reemplaza. Cada firma que dibuje o cargue se guarda en {{ui:Sus firmas}} (hasta ocho, la más reciente primero): haga clic en una para usarla, o en × para quitarla. Consulte [Qué se guarda en este navegador](topic:browser-storage).

En el PDF guardado, una imagen es un comentario de sello que muestra la imagen, así que cualquier visor de PDF la muestra e imprime. Una firma dibujada aquí es una imagen de su firma, no una firma digital certificada.

## Pegar una imagen desde el portapapeles

Copie una imagen en otro programa, o haga una captura de pantalla al portapapeles, y después pulse {{key:Mod+V}} sobre la hoja. Se coloca donde esté el puntero, con un máximo de 3 in de ancho o alto y sus proporciones, como una anotación de imagen que puede mover y cambiar de tamaño. En el PDF guardado es un comentario de sello que muestra la imagen, como las imágenes anteriores.

{{ui:Más}} › {{ui:Pegar una imagen}} en el grupo {{ui:Editar}} hace lo mismo desde el menú; el navegador puede pedir confirmación antes. Cuando el portapapeles no contiene ninguna imagen, {{key:Mod+V}} pega las anotaciones copiadas como antes.

## Insertar una imagen desde un archivo

Elija {{ui:Más}} › {{ui:Insertar una imagen desde un archivo…}} en el grupo {{ui:Editar}} (o {{ui:Insertar una imagen aquí…}} en el menú contextual), y seleccione un archivo PNG, JPEG o SVG, o un PDF (un PDF de varias páginas pregunta cuál). También puede arrastrar un archivo PNG, JPEG o SVG a la hoja: se coloca donde lo suelte. La imagen es una anotación, de como máximo 3 in de ancho o alto: muévala y cambie su tamaño como cualquier otra.

Para que una imagen forme parte de la página, marque {{ui:Acoplar a la página al guardar}} en {{ui:Propiedades}}. Consulte [Guardar una copia aplanada](topic:flatten).

## Crear un sello a partir de una selección

Seleccione anotaciones (o contenido de la página con la herramienta {{ui:Contenido}}) y elija {{ui:Guardar la selección como sello…}} en {{ui:Más}}, en el menú contextual, o {{ui:Guardar como sello…}} en {{ui:Propiedades}}. Dé un nombre. Se añade a la caja de herramientas: haga clic en él allí y, después, haga clic en cualquier hoja para colocar todo lo seleccionado junto, centrado donde hace clic. Consulte [La caja de herramientas](topic:tool-chest).

## Notas adhesivas

1. Elija {{ui:Nota}} ({{key:N}}).
2. Haga clic donde irá la nota. Aparece un pequeño icono de nota con un cuadro al lado.
3. Escriba la nota. Haga clic fuera o pulse {{key:Mod+Enter}} para conservarla; {{key:Esc}} la descarta.

A diferencia de los textos y las llamadas, una nota se conserva aunque no escriba nada, así que puede colocar el icono ahora y escribir después.

- El texto de la nota es su campo {{ui:Nota}} en {{ui:Propiedades}}. Haga doble clic en el icono (o selecciónelo y pulse {{key:Enter}}) para editarlo en la hoja.
- En la hoja solo ve el icono. Otros visores de PDF muestran una nota adhesiva estándar que se abre con el texto al hacer clic.
- Cambie el color del icono con {{ui:Color}} en {{ui:Propiedades}}.

Para un intercambio de ida y vuelta, use mejor el hilo de respuestas de cualquier anotación: consulte [Estados y respuestas](topic:statuses-and-replies).
