---
title: Primeros pasos con MarkupCraft
summary: Abrir un conjunto de planos, poner la primera nube y llamada en una hoja, y guardar una copia anotada.
keywords: inicio, primeros pasos, abrir pdf, revisión, anotación, redline, lápiz rojo, conjunto de planos, tutorial, inicio rápido
from: 0b1aae4e
---

MarkupCraft sirve para revisar planos: se abren conjuntos de planos en PDF, se anotan con nubes, llamadas, texto, sellos y mediciones, se sigue el estado de cada comentario y se guarda una copia del PDF que cualquier visor de PDF puede mostrar.

Se ejecuta en el navegador web. Los PDF se abren en la propia computadora y **nunca se suben**. Al guardar se descarga una copia nueva; el archivo original no se modifica.

:::note
MarkupCraft está en desarrollo. La ayuda describe la versión que se está usando. Lo que todavía no hace se enumera en [Lo que aún no está construido](topic:not-built-yet).
:::

## Lo que hace falta

- Chrome, Edge, Firefox o Safari recientes en una computadora Mac, Windows o Linux, o Safari o Chrome en un iPad. Ver [Navegadores y computadoras](common:browsers).
- Uno o más archivos PDF. Un conjunto completo de planos puede ser un PDF o muchos.
- Un mouse con rueda es lo más cómodo. El trackpad también funciona, y una pantalla táctil igual (ver [Revisión en un iPad o pantalla táctil](topic:review-on-a-tablet)).

## La primera revisión en diez pasos

1. Abrir MarkupCraft en el navegador. En el centro de la pantalla dice "Abrir un conjunto de planos".
2. Elegir {{ui:Abrir PDF}} (o {{ui:Abrir}} en el extremo izquierdo de la barra de herramientas, o presionar {{key:Mod+O}}), seleccionar uno o más PDF y confirmar.
   También se pueden arrastrar PDF desde {{pick:mac=Finder|windows=File Explorer|linux=su administrador de archivos}} y soltarlos en la zona de hojas.
   La primera vez, la barra de estado de abajo dice "Cargando el lector de PDF…". Luego cada página se convierte en una hoja en la lista {{ui:Hojas}} de la izquierda, y la primera hoja ocupa el centro.
3. Hacer clic en una hoja de la lista para mostrarla. Girar la rueda del mouse sobre la hoja para acercar donde está el puntero.
4. Elegir {{ui:Nube}} en el grupo {{ui:Revisar}} de la barra de herramientas (o presionar {{key:C}}).
   La primera vez que se elige una herramienta de dibujo, MarkupCraft pide el nombre. Escribirlo y elegir {{ui:Guardar}}. Cada anotación lo registra. (Más en [Configurar el nombre del autor](topic:set-your-name).)
5. Arrastrar un recuadro alrededor del área a marcar. Aparece una nube de revisión roja y queda seleccionada.
6. Elegir {{ui:Llamada}} en el grupo {{ui:Anotar}} (o presionar {{key:K}}). Presionar sobre lo que se señala, arrastrar hasta donde debe ir el texto y soltar.
7. Escribir el comentario en el cuadro que aparece. Hacer clic fuera del cuadro (o presionar {{key:Mod+Enter}}) para terminar.
8. Presionar {{key:Esc}} dos veces: una para quitar la selección, otra para volver a la herramienta {{ui:Seleccionar}}. Hacer clic en la nube. La pestaña {{ui:Propiedades}} de la derecha muestra quién la hizo, cuándo, y su {{ui:Estado}}.
9. Elegir {{ui:Guardar}} en la barra de herramientas (o presionar {{key:Mod+S}}).
   El navegador descarga una copia con un nombre como "A-Plans (marked up).pdf". La barra de estado indica cuántas anotaciones se escribieron.
10. Abrir esa copia en cualquier visor de PDF para verificar: la nube y la llamada están, como comentarios PDF normales con el nombre del autor.

Para seguir trabajando después, abrir la copia "(marked up)" en MarkupCraft. Las anotaciones vuelven editables, con sus estados, respuestas y números de pendiente.

## En línea y sin conexión

:::online
Está en línea. MarkupCraft carga su lector de PDF la primera vez que se abre un PDF, y su escritor de PDF la primera vez que se guarda. Para trabajar sin conexión más tarde (en una visita a obra, en un avión), elegir {{ui:Guardar para usar sin conexión}} en la barra superior ahora y esperar "Listo sin conexión". La copia incluye el lector y el escritor, así que abrir y guardar PDF funciona sin conexión. Ver [Trabajar sin conexión](common:offline).
:::

:::offline
Está sin conexión. Si la barra superior dice "Listo sin conexión", MarkupCraft se guardó para uso sin conexión en este navegador y todo funciona: abrir, anotar, medir, guardar. Si no, usar lo que ya se cargó en esta pestaña y no recargar la página hasta volver a tener conexión. Ver [Trabajar sin conexión](common:offline).
:::

## Lo que la app recuerda, y lo que no

- **Las anotaciones viven en el PDF que se guarda.** No se guarda nada en un servidor. La app no guarda el PDF por su cuenta, pero mantiene una copia de recuperación en este navegador hasta que se guarde. Guardar antes de cerrar la pestaña; el navegador pregunta primero si se intenta salir con anotaciones sin guardar (excepto en un iPad, ver [Revisión en un iPad o pantalla táctil](topic:review-on-a-tablet)).
- **El nombre, los estilos de herramienta y la caja de herramientas** quedan en este navegador, en esta computadora. Otro navegador u otra computadora empieza de cero, y borrar los datos del sitio en el navegador los elimina. Ver [Lo que queda en este navegador](topic:browser-storage).
- El guardado en la nube y las sesiones de revisión compartidas entre personas todavía no están disponibles.

## Adónde ir después

- [Recorrido por la pantalla](topic:workspace)
- [Anotar una hoja](topic:mark-up-a-sheet)
- [Calibrar una hoja y medir](topic:calibrate-and-measure)
- [Pasar desde otro software de anotación](topic:coming-from), si ya se revisan planos en otro programa.
