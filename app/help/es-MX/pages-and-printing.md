---
title: Imprimir y cambiar las páginas de un PDF
summary: Imprima hojas con sus marcas, y gire, mueva, inserte, borre o extraiga páginas de un PDF abierto.
keywords: imprimir, impresora, papel, páginas, página, girar, rotar, reordenar, mover página, insertar, agregar página, página en blanco, borrar página, eliminar página, extraer, dividir, operaciones de página
from: 81832d9b
---

El menú {{ui:Páginas}} del grupo {{ui:Archivo}} trabaja sobre el PDF al que pertenece la hoja abierta. Su PDF en esta computadora nunca se cambia: los cambios forman parte de la copia que guarda.

## Imprimir

1. Presione {{key:Mod+P}}, o elija {{ui:Páginas}} y luego {{ui:Imprimir…}}.
2. Cuando hay más de una hoja abierta, elija qué imprimir: {{ui:Esta hoja}}, todas las páginas de este archivo, el juego completo o las páginas que escriba (como `1-3, 5`).
3. Elija {{ui:Imprimir}}. Se abre el diálogo de impresión de su navegador: elija allí la impresora, el papel y la escala.

Las marcas se imprimen como se ven en la hoja: se dibujan en las páginas de la copia que va a la impresora. Los comentarios que hicieron otros programas se imprimen según indique su PDF.

:::safari firefox
Si su navegador no puede imprimir desde dentro de la página, las hojas se abren como PDF en una pestaña nueva. Imprima desde ahí.
:::

## Girar una página

Elija {{ui:Páginas}} y luego {{ui:Girar la página en sentido horario}} o {{ui:Girar la página en sentido antihorario}}. La hoja abierta gira un cuarto de vuelta. Sus marcas quedan donde estaban en el dibujo, y el texto que escribió gira con la página para que se siga leyendo derecho.

## Mover una página

Elija {{ui:Páginas}} y luego {{ui:Mover la página antes}} o {{ui:Mover la página después}}. La hoja abierta intercambia lugar con su vecina dentro de su propio PDF. Sus marcas, su escala y su número de hoja se mueven con ella.

## Insertar páginas

- {{ui:Insertar páginas de un PDF…}} pone cada página de otro PDF después de la hoja abierta.
- {{ui:Insertar una página en blanco}} agrega una página vacía del mismo tamaño después de la hoja abierta, para croquis y notas. En un juego hecho con {{ui:Nuevo}}, tiene también la cuadrícula del juego.
- En un juego hecho con {{ui:Nuevo}}, {{ui:Agregar una página en blanco}} debajo de la lista {{ui:Hojas}} agrega una página más, como las demás, al final. Vea [Empezar con páginas en blanco](topic:open-a-plan-set#start-with-blank-pages).

Las páginas insertadas reciben su número de página como etiqueta hasta que les cambie el nombre. Vea [Cambiar el nombre de una hoja](topic:open-a-plan-set#rename-a-sheet).

## Borrar páginas

1. Elija {{ui:Páginas}} y luego {{ui:Eliminar páginas…}}.
2. Escriba los números de página de este PDF, como `3` o `2-4`. Se llena con la página de la hoja abierta.
3. Elija {{ui:Eliminar páginas}}. Si esas páginas tienen marcas, MarkupCraft dice cuántas y vuelve a preguntar.

Un PDF conserva al menos una página. Para quitar un archivo completo, cierre el juego y abra los archivos que todavía necesita.

## Extraer páginas

Elija {{ui:Páginas}} y luego {{ui:Extraer páginas…}}, y escriba las páginas. Se descargan como un PDF nuevo llamado "<archivo> (pages 1-3).pdf", con sus marcas como comentarios que puede seguir editando. El archivo abierto se queda como está.

## Lo que conviene saber

- **Deshacer se detiene en un cambio de página.** {{key:Mod+Z}} deshace las marcas dibujadas después, pero no el cambio de página en sí ni nada anterior. Cierre sin guardar para empezar de nuevo desde su PDF original.
- Los números de página cuentan las páginas de un PDF, no de todo el juego. Mover una página la mantiene dentro de su propio archivo.
- Las páginas cambiadas son trabajo sin guardar: {{ui:Guardar}} descarga la copia reorganizada, y al salir se pregunta antes.
