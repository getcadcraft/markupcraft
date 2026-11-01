---
title: Primeros pasos con MarkupCraft
summary: Abra un juego de planos, ponga su primera nube y llamada en una hoja y guarde una copia con marcas.
keywords: inicio, primeros pasos, abrir pdf, revisión, marca, marcas en rojo, pluma roja, juego de planos, tutorial, inicio rápido
from: 0b1aae4e
---

MarkupCraft sirve para revisar dibujos: usted abre juegos de planos en PDF, los marca con nubes, llamadas, texto, sellos y mediciones, da seguimiento al estado de cada comentario y guarda una copia del PDF que cualquier visor de PDF puede mostrar.

Funciona en su navegador. Sus PDF se abren en su propia computadora y **nunca se suben**. Guardar descarga una copia nueva; su archivo original no se modifica.

:::note
MarkupCraft está en desarrollo. La ayuda describe la versión que usted está usando. Lo que aún no hace está en [Lo que aún no está construido](topic:not-built-yet).
:::

## Qué necesita

- Un Chrome, Edge, Firefox o Safari reciente en una computadora Mac, Windows o Linux, o Safari o Chrome en un iPad. Vea [Navegadores y computadoras](common:browsers).
- Uno o más archivos PDF. Un juego de planos completo puede ser un PDF o muchos.
- Lo más cómodo es un mouse con rueda. Un trackpad funciona, y también una pantalla táctil (vea [Revise en un iPad o pantalla táctil](topic:review-on-a-tablet)).

## Su primera revisión en diez pasos

1. Abra MarkupCraft en su navegador. El centro de la pantalla dice "Open a plan set".
2. Elija {{ui:Abrir PDF}} (o {{ui:Abrir}} en el extremo izquierdo de la barra de herramientas, o pulse {{key:Mod+O}}), escoja uno o más PDF y confirme.
   También puede arrastrar PDF desde {{pick:mac=Finder|windows=el Explorador de archivos|linux=su administrador de archivos}} y soltarlos en el área de la hoja.
   La primera vez, la barra de estado de abajo dice "Loading the PDF reader…". Luego cada página se vuelve una hoja en la lista {{ui:Hojas}} de la izquierda, y la primera hoja llena el centro.
3. Haga clic en una hoja de la lista para mostrarla. Gire la rueda del mouse sobre la hoja para acercar donde está el puntero.
4. Elija {{ui:Nube de revisión}} en el grupo {{ui:Revisar}} de la barra de herramientas (o pulse {{key:C}}).
   La primera vez que escoge una herramienta de dibujo, MarkupCraft le pide su nombre. Escríbalo y elija {{ui:Guardar}}. Cada marca lo registra. (Más en [Indique su nombre de autor](topic:set-your-name).)
5. Arrastre un recuadro alrededor del área que quiere señalar. Aparece una nube de revisión roja y queda seleccionada.
6. Elija {{ui:Llamada}} en el grupo {{ui:Anotar}} (o pulse {{key:K}}). Pulse sobre aquello a lo que apunta, arrastre hasta donde debe ir el texto y suelte.
7. Escriba su comentario en el cuadro que aparece. Haga clic fuera del cuadro (o pulse {{key:Mod+Enter}}) para terminar.
8. Pulse {{key:Esc}} dos veces: una para borrar la selección y otra para volver a la herramienta {{ui:Seleccionar}}. Haga clic en la nube. La pestaña {{ui:Propiedades}} de la derecha muestra quién la hizo, cuándo y su {{ui:Estado}}.
9. Elija {{ui:Guardar}} en la barra de herramientas (o pulse {{key:Mod+S}}).
   Su navegador descarga una copia con un nombre como "A-Plans (marked up).pdf". La barra de estado indica cuántas marcas se escribieron.
10. Abra esa copia en cualquier visor de PDF para comprobar: la nube y la llamada están ahí, como comentarios de PDF normales con su nombre.

Para seguir trabajando después, abra la copia "(marked up)" en MarkupCraft. Sus marcas regresan editables, con sus estados, respuestas y números de pendiente.

## Con y sin conexión

:::online
Tiene conexión. MarkupCraft carga su lector de PDF la primera vez que abre un PDF y su escritor de PDF la primera vez que guarda. Para trabajar sin conexión más adelante (en una visita a obra, en un avión), elija ahora {{ui:Guardar para usar sin conexión}} en la barra de arriba y espere a "Offline ready". La copia incluye el lector y el escritor de PDF, así que abrir y guardar PDF funciona entonces sin conexión. Vea [Trabajar sin conexión](common:offline).
:::

:::offline
No tiene conexión. Si la barra de arriba dice "Offline ready", MarkupCraft se guardó para usarse sin conexión en este navegador y todo funciona: abrir, marcar, medir, guardar. Si no, use lo que ya se cargó en esta pestaña y no recargue la página hasta recuperar la conexión. Vea [Trabajar sin conexión](common:offline).
:::

## Lo que la aplicación recuerda y lo que no

- **Sus marcas viven en el PDF que guarda.** No se conserva nada en un servidor. La aplicación no guarda el PDF por su cuenta, pero conserva una copia de recuperación en este navegador hasta que usted lo haga. Guarde antes de cerrar la pestaña; el navegador pregunta primero si intenta salir con marcas sin guardar (salvo en un iPad, vea [Revise en un iPad o pantalla táctil](topic:review-on-a-tablet)).
- **Su nombre, los estilos de sus herramientas y su caja de herramientas** se quedan en este navegador, en esta computadora. Otro navegador u otra computadora empieza de cero, y borrar los datos del sitio en el navegador los elimina. Vea [Qué se queda en este navegador](topic:browser-storage).
- Guardar en la nube y las sesiones de revisión compartidas entre personas aún no están disponibles.

## A dónde ir después

- [Un recorrido por la pantalla](topic:workspace)
- [Marque una hoja](topic:mark-up-a-sheet)
- [Calibre una hoja y mida](topic:calibrate-and-measure)
- [Si viene de otro software de marcas](topic:coming-from) si ya revisa dibujos en otro programa.
