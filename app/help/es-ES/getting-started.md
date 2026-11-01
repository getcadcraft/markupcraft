---
title: Primeros pasos con MarkupCraft
summary: Abra un conjunto de planos, ponga su primera nube y su primera llamada en una hoja y guarde una copia con anotaciones.
keywords: inicio, primeros pasos, abrir pdf, revisión, anotación, marcado en rojo, bolígrafo rojo, conjunto de planos, tutorial, inicio rápido
from: 0b1aae4e
---

MarkupCraft sirve para revisar planos: abre juegos de planos en PDF, los anota con nubes, llamadas, texto, sellos y mediciones, sigue el estado de cada comentario y guarda una copia del PDF que cualquier visor de PDF puede mostrar.

Se ejecuta en su navegador web. Sus PDF se abren en su propio ordenador y **nunca se suben**. Guardar descarga una copia nueva; su archivo original no se modifica.

:::note
MarkupCraft está en desarrollo. La ayuda describe la versión que está ejecutando. Lo que todavía no hace se enumera en [Lo que todavía no está implementado](topic:not-built-yet).
:::

## Qué necesita

- Un Chrome, Edge, Firefox o Safari reciente en un ordenador Mac, Windows o Linux, o Safari o Chrome en un iPad. Consulte [Navegadores y ordenadores](common:browsers).
- Uno o más archivos PDF. Un conjunto de planos completo puede ser un solo PDF o muchos.
- Lo más cómodo es un ratón con rueda. Un trackpad funciona, y una pantalla táctil también (consulte [Revisar en un iPad o en una pantalla táctil](topic:review-on-a-tablet)).

## Su primera revisión en diez pasos

1. Abra MarkupCraft en su navegador. El centro de la pantalla dice "Abra un conjunto de planos".
2. Elija {{ui:Abrir PDF}} (o {{ui:Abrir}} en el extremo izquierdo de la barra de herramientas, o pulse {{key:Mod+O}}), elija uno o más PDF y confirme.
   También puede arrastrar PDF desde {{pick:mac=el Finder|windows=el Explorador de archivos|linux=su gestor de archivos}} y soltarlos sobre la zona de hojas.
   La primera vez, la barra de estado de la parte inferior dice "Cargando el lector de PDF…". Después cada página se convierte en una hoja de la lista {{ui:Hojas}} de la izquierda, y la primera hoja llena el centro.
3. Pulse una hoja de la lista para mostrarla. Gire la rueda del ratón sobre la hoja para acercar donde está el puntero.
4. Elija {{ui:Nube}} en el grupo {{ui:Revisar}} de la barra de herramientas (o pulse {{key:C}}).
   La primera vez que elige una herramienta de dibujo, MarkupCraft le pide su nombre. Escríbalo y elija {{ui:Guardar}}. Cada anotación lo registra. (Más en [Indicar el nombre de autor](topic:set-your-name).)
5. Arrastre un recuadro alrededor de la zona que quiere señalar. Aparece una nube de revisión roja y queda seleccionada.
6. Elija {{ui:Llamada}} en el grupo {{ui:Anotar}} (o pulse {{key:K}}). Pulse sobre aquello a lo que apunta, arrastre hasta donde debe ir el texto y suelte.
7. Escriba su comentario en el cuadro que aparece. Pulse en cualquier parte fuera del cuadro (o pulse {{key:Mod+Enter}}) para terminar.
8. Pulse {{key:Esc}} dos veces: una para borrar la selección y otra para volver a la herramienta {{ui:Seleccionar}}. Pulse la nube. La pestaña {{ui:Propiedades}} de la derecha muestra quién la hizo, cuándo y su {{ui:Estado}}.
9. Elija {{ui:Guardar}} en la barra de herramientas (o pulse {{key:Mod+S}}).
   Su navegador descarga una copia con un nombre como "A-Planos (con anotaciones).pdf". La barra de estado indica cuántas anotaciones se escribieron.
10. Abra esa copia en cualquier visor de PDF para comprobarlo: la nube y la llamada están ahí, como comentarios PDF normales con su nombre.

Para seguir trabajando más tarde, abra la copia "(con anotaciones)" en MarkupCraft. Sus anotaciones vuelven editables, con sus estados, respuestas y números de pendiente.

## Con y sin conexión

:::online
Está en línea. MarkupCraft carga su lector de PDF la primera vez que abre un PDF, y su escritor de PDF la primera vez que guarda. Para trabajar sin conexión más adelante (en una visita a obra, en un avión), elija ahora {{ui:Guardar para uso sin conexión}} en la barra de la parte superior y espere a "Listo sin conexión". La copia incluye el lector y el escritor de PDF, de modo que abrir y guardar PDF funciona entonces sin conexión. Consulte [Trabajar sin conexión](common:offline).
:::

:::offline
Está sin conexión. Si la barra de la parte superior dice "Listo sin conexión", MarkupCraft se guardó para usarse sin conexión en este navegador y todo funciona: abrir, anotar, medir, guardar. Si no se guardó, use lo que ya se haya cargado en esta pestaña y no recargue la página hasta que vuelva a estar en línea. Consulte [Trabajar sin conexión](common:offline).
:::

## Qué recuerda la aplicación y qué no

- **Sus anotaciones viven en el PDF que guarda.** No se conserva nada en un servidor. La aplicación no guarda el PDF por sí sola, pero conserva una copia de recuperación en este navegador hasta que lo haga usted. Guarde antes de cerrar la pestaña; el navegador pregunta primero si intenta salir con anotaciones sin guardar (salvo en un iPad, consulte [Revisar en un iPad o en una pantalla táctil](topic:review-on-a-tablet)).
- **Su nombre, los estilos de sus herramientas y su caja de herramientas** permanecen en este navegador de este ordenador. Otro navegador u ordenador empieza de cero, y borrar los datos del sitio del navegador los elimina. Consulte [Qué permanece en este navegador](topic:browser-storage).
- Todavía no se puede guardar en la nube ni compartir sesiones de revisión entre personas.

## Adónde ir a continuación

- [Un recorrido por la pantalla](topic:workspace)
- [Anotar una hoja](topic:mark-up-a-sheet)
- [Calibrar una hoja y medir](topic:calibrate-and-measure)
- [Si viene de otros programas de anotación](topic:coming-from) si ya revisa planos en otro programa.
