---
title: Revisar en un iPad o pantalla táctil
summary: Pellizque, desplace y dibuje con los dedos o con un lápiz óptico, qué actúa al levantar el dedo, qué necesita teclado y cómo proteger su trabajo en una tableta.
keywords: ipad, tableta, táctil, pantalla táctil, pellizcar, zoom, dos dedos, apple pencil, lápiz óptico, dedo, obra, emplazamiento, superficie, gestos, móvil
from: 91eb6438
---

MarkupCraft funciona con pantalla táctil: en un iPad (Safari o Chrome), en un portátil con pantalla táctil, o en una tableta Windows o Android con un navegador reciente. En horizontal, una tableta muestra la disposición completa.

## Gestos

| Gesto | Qué hace |
|---|---|
| Un dedo | Dibuja con la herramienta actual, o selecciona con {{ui:Seleccionar}} |
| Dos dedos, separados o juntados | Hace zoom alrededor del punto entre sus dedos |
| Dos dedos, movidos juntos | Desplaza; puede hacer zoom y desplazar en un solo movimiento |
| Un segundo dedo mientras dibuja | Cancela lo que empezó el primer dedo y empieza a hacer zoom |
| Doble toque, o tocar y mantener | Termina una polilínea, un polígono, una nube libre o un área |
| Tocar y mantener un texto, una llamada o una nota, con {{ui:Seleccionar}} | Abre su texto para editarlo |
| Un dedo con {{ui:Desplazar}} activado | Desplaza |

En una pantalla táctil, los botones, menús, pestañas y botones de diálogo de la barra de herramientas son más grandes, para que sea fácil tocarlos con el dedo.

## Qué ocurre al levantar

Para que el primer dedo de un pellizco nunca deje una marca, algunas herramientas actúan al **levantar** el dedo, no al tocar:

- {{ui:Contar}}: el punto se añade al levantar.
- {{ui:Nota}}: la nota se coloca al levantar.
- {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}} y {{ui:Área}}: cada punto se añade al levantar.
- {{ui:Línea}}, {{ui:Flecha}}, {{ui:Longitud}} y {{ui:Calibrar}}: al tocar el inicio y luego el final, el final se coloca al levantar.

Si su dedo se desliza más de un poco antes de levantarse, no cuenta como toque y no se añade nada. Toque limpiamente; para corregir, use {{ui:Deshacer}}.

Las herramientas que se arrastran ({{ui:Lápiz}}, {{ui:Resaltar}}, {{ui:Nube}}, {{ui:Rectángulo}}, {{ui:Elipse}}, {{ui:Llamada}}, {{ui:Texto}}, {{ui:Sello}}) empiezan en cuanto toca; un segundo dedo las cancela.

## Seleccionar con el dedo

- Toque una anotación para seleccionarla; arrástrela para moverla; arrastre un control para cambiar su tamaño. Después de que un dedo toque la hoja, las anotaciones y los controles tienen un objetivo más grande, y los controles se dibujan más grandes.
- Arrastre sobre la hoja vacía para dibujar una ventana de selección (de izquierda a derecha: completamente dentro; de derecha a izquierda: tocando).
- En {{ui:Seleccionar}}, un dedo **no** desplaza. Use dos dedos, o elija {{ui:Desplazar}}.

## Cosas que necesitan teclado

Sin teclado no hay {{key:Shift}}, {{key:Esc}} ni {{key:Enter}}. Esto es lo que puede hacer en su lugar:

| Acción de teclado | Sin teclado |
|---|---|
| {{key:Esc}} para cancelar o volver a Seleccionar | Toque {{ui:Seleccionar}} en la barra de herramientas |
| {{key:Shift}} para líneas a 45°, cuadrados y círculos | Dibuje con cuidado; ajuste con los controles |
| Clic con {{key:Shift}} para añadir a una selección | Use una ventana de selección |
| Clic con {{key:Shift}} para quitar un punto de conteo | {{ui:Deshacer}} justo después de un toque equivocado |
| {{key:Mod+Enter}} para terminar de escribir | Toque fuera del cuadro de texto |
| {{key:Enter}} para terminar una polilínea, o para editar el texto de una anotación | Tocar y mantener, o {{ui:Editar en la hoja}} en {{ui:Propiedades}} |
| {{key:Delete}} | {{ui:Borrar}} en la barra de herramientas o en {{ui:Propiedades}} |
| Empezar un nuevo grupo de conteo con {{key:Esc}} | Toque la hoja vacía con {{ui:Seleccionar}}, y luego toque {{ui:Contar}} otra vez |

Un estuche con teclado o un teclado Bluetooth devuelve todos los atajos; en un iPad, la tecla ⌘ funciona para {{key:Mod+Z}} y el resto.

Los botones no muestran sus descripciones emergentes en pantalla táctil. La tecla de cada herramienta aparece en [Teclado y ratón](topic:keyboard).

## Lápiz óptico y Apple Pencil

Un lápiz óptico (Apple Pencil, Surface Pen y similares) funciona como un ratón: dibuja y selecciona, y actúa de inmediato al tocar. Use los dedos para pellizcar y desplazar. La presión no cambia el grosor de línea.

## Abrir y guardar en un iPad

- {{ui:Abrir}} muestra el selector de Archivos: iCloud Drive, En mi iPad y cualquier aplicación de almacenamiento que haya conectado.
- {{ui:Guardar}} pide descargar; la copia llega a Archivos, en Descargas (o en la carpeta configurada en los ajustes de Safari).

## Mantenga su trabajo a salvo en una tableta

:::warning
Safari en iPad no avisa antes de salir de una página con trabajo sin guardar, y iPadOS puede recargar una pestaña en segundo plano para liberar memoria. MarkupCraft guarda una copia de recuperación en el navegador y la ofrece cuando vuelve a abrirlo (vea [Recuperar su trabajo](common:recover)), pero **guarde después de cada hoja o cada recorrido**: una pestaña privada no guarda ninguna copia.
:::

- Su nombre, los ajustes de herramientas y el cofre de herramientas se guardan en ese navegador de ese iPad, igual que en un ordenador. Vea [Lo que se guarda en este navegador](topic:browser-storage).
- **Antes de una visita a obra sin señal:** mientras aún tiene conexión, abra MarkupCraft en Safari (o Chrome) en el iPad y elija {{ui:Guardar para uso sin conexión}} en la barra superior. Espere hasta que diga "Listo sin conexión" (cuenta "Guardando N de M"; el lector y escritor de PDF ocupan unos 6 MB). En obra, abra la misma dirección o un marcador de ella: abrir, anotar y guardar PDF funciona sin conexión. Si dice "Uso sin conexión no disponible", está en una pestaña privada; use una normal. Vea [Trabajar sin conexión](common:offline).
- Safari elimina una copia sin conexión que no haya usado durante algunas semanas. Antes de un viaje, pulse "Listo sin conexión" y elija "Guardar de nuevo (obtener la versión más reciente)".
- Los conjuntos de planos muy grandes usan mucha memoria. En una tableta, abra solo las hojas que necesite para la visita.

## En un teléfono

Funciona, pero la pantalla es pequeña: las partes se apilan (barra de herramientas, hoja, barra de estado, paneles y luego la lista de hojas), y la barra de herramientas se desplaza de lado. Use un teléfono para consultar y añadir una nota rápida, y una tableta u ordenador para revisar de verdad.
