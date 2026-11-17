---
title: Revisar en un iPad o pantalla táctil
summary: Pellizque, encuadre y dibuje con los dedos o un lápiz, qué actúa al levantar, qué necesita teclado, y cómo mantener su trabajo a salvo en una tableta.
keywords: ipad, tableta, táctil, pantalla táctil, pellizcar, zoom, dos dedos, apple pencil, lápiz, dedo, campo, obra, superficie, gestos, móvil
from: 91eb6438
---

MarkupCraft funciona con pantalla táctil: en un iPad (Safari o Chrome), en una laptop con pantalla táctil, o en una tableta Windows o Android con un navegador reciente. En horizontal, una tableta muestra la disposición completa.

## Gestos

| Gesto | Qué hace |
|---|---|
| Un dedo | Dibuja con la herramienta actual, o selecciona con {{ui:Seleccionar}} |
| Dos dedos, separándolos o juntándolos | Hace zoom alrededor del punto entre sus dedos |
| Dos dedos, movidos juntos | Encuadra; puede hacer zoom y encuadrar en un solo movimiento |
| Un segundo dedo mientras dibuja | Cancela lo que empezó el primer dedo e inicia el zoom en su lugar |
| Doble toque, o tocar y mantener | Termina una polilínea, un polígono, una nube libre o un área |
| Tocar y mantener un texto, llamada o nota, con {{ui:Seleccionar}} | Abre su texto para editarlo |
| Un dedo con {{ui:Encuadre}} activado | Encuadra |

En una pantalla táctil, los botones de la barra de herramientas, los menús, las pestañas y los botones de diálogo son más grandes, para que sean fáciles de tocar con un dedo.

## Qué pasa al levantar

Para que el primer dedo de un pellizco nunca deje una marca, algunas herramientas actúan cuando **levanta** el dedo, no cuando lo toca:

- {{ui:Conteo}}: el punto se agrega al levantar.
- {{ui:Nota}}: la nota se coloca al levantar.
- {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}} y {{ui:Área}}: cada punto se agrega al levantar.
- {{ui:Línea}}, {{ui:Flecha}}, {{ui:Longitud}} y {{ui:Calibrar}}: cuando toca el inicio y luego toca el final, el final se coloca al levantar.

Si su dedo se desliza más de un poco antes de levantarlo, no cuenta como toque y no se agrega nada. Toque con limpieza; para corregir, use {{ui:Deshacer}}.

Las herramientas que se arrastran ({{ui:Pluma}}, {{ui:Resaltado}}, {{ui:Nube}}, {{ui:Rectángulo}}, {{ui:Elipse}}, {{ui:Llamada}}, {{ui:Texto}}, {{ui:Sello}}) empiezan en cuanto toca; un segundo dedo las cancela.

## Seleccionar con un dedo

- Toque una marca para seleccionarla; arrástrela para moverla; arrastre una manija para cambiar su tamaño. Después de que un dedo toca la hoja, las marcas y las manijas tienen un objetivo más grande, y las manijas se dibujan más grandes.
- Arrastre sobre la hoja vacía para dibujar una ventana de selección (de izquierda a derecha: completamente dentro; de derecha a izquierda: tocando).
- En {{ui:Seleccionar}}, un dedo **no** encuadra. Use dos dedos, o elija {{ui:Encuadre}}.

## Cosas que necesitan teclado

Sin teclado no hay {{key:Shift}}, {{key:Esc}} ni {{key:Enter}}. Esto es lo que debe hacer en su lugar:

| Acción de teclado | Sin teclado |
|---|---|
| {{key:Esc}} para cancelar o volver a Seleccionar | Toque {{ui:Seleccionar}} en la barra de herramientas |
| {{key:Shift}} para líneas a 45°, cuadrados y círculos | Dibuje con cuidado; ajuste con las manijas |
| {{key:Shift}}+clic para agregar a una selección | Use una ventana de selección |
| {{key:Shift}}+clic para quitar un punto de conteo | {{ui:Deshacer}} justo después de un toque equivocado |
| {{key:Mod+Enter}} para terminar de escribir | Toque fuera del cuadro de texto |
| {{key:Enter}} para terminar una polilínea, o para editar el texto de una marca | Toque y mantenga, o use {{ui:Editar en la hoja}} en {{ui:Propiedades}} |
| {{key:Delete}} | {{ui:Eliminar}} en la barra de herramientas o en {{ui:Propiedades}} |
| Empezar un nuevo grupo de conteo con {{key:Esc}} | Toque la hoja vacía con {{ui:Seleccionar}}, y luego toque {{ui:Conteo}} otra vez |

Un teclado con funda o un teclado Bluetooth devuelve todos los atajos; en un iPad, la tecla ⌘ funciona para {{key:Mod+Z}} y el resto.

Los botones no muestran sus descripciones emergentes en pantalla táctil. La tecla de cada herramienta aparece en [Teclado y ratón](topic:keyboard).

## Lápiz y Apple Pencil

Un lápiz (Apple Pencil, Surface Pen y similares) funciona como un mouse: dibuja y selecciona, y actúa de inmediato al tocar. Use los dedos para pellizcar y encuadrar. La presión no cambia el grosor de la línea.

## Abrir y guardar en un iPad

- {{ui:Abrir}} muestra el selector de Files: iCloud Drive, En mi iPad, y cualquier app de almacenamiento que tenga conectada.
- {{ui:Guardar}} pide descargar; la copia llega a Files, en Descargas (o a la carpeta configurada en la configuración de Safari).

## Mantener su trabajo a salvo en una tableta

:::warning
Safari en iPad no le advierte antes de salir de una página con trabajo sin guardar, y iPadOS puede recargar una pestaña en segundo plano para liberar memoria. MarkupCraft guarda una copia de recuperación en el navegador y se la ofrece cuando vuelve a abrirlo (vea [Recuperar su trabajo](common:recover)), pero **guarde después de cada hoja o cada recorrido**: una pestaña privada no guarda ninguna copia.
:::

- Su nombre, la configuración de herramientas y la caja de herramientas se guardan en ese navegador, en ese iPad, igual que en una computadora. Vea [Qué se guarda en este navegador](topic:browser-storage).
- **Antes de una visita a obra sin señal:** mientras todavía tiene conexión, abra MarkupCraft en Safari (o Chrome) en el iPad y elija {{ui:Guardar para usar sin conexión}} en la barra superior. Espere hasta que diga "Listo sin conexión" (cuenta "Guardando N de M"; el lector y el escritor de PDF pesan unos 6 MB). En obra, abra la misma dirección o un marcador de ella: abrir, marcar y guardar PDF funciona sin conexión. Si dice "Sin conexión no disponible", está en una pestaña privada; use una normal. Vea [Trabajar sin conexión](common:offline).
- Safari elimina una copia sin conexión que no haya usado durante algunas semanas. Antes de un viaje, haga clic en "Listo sin conexión" y elija "Guardar de nuevo (obtener la versión más reciente)".
- Los juegos de planos muy grandes usan mucha memoria. En una tableta, abra solo las hojas que necesite para la visita.

## En un teléfono

Funciona, pero la pantalla es pequeña: las partes se apilan (barra de herramientas, hoja, barra de estado, paneles, luego la lista de hojas), y la barra de herramientas se desplaza de lado. Use un teléfono para ver y agregar una nota rápida, y una tableta o computadora para una revisión real.
