---
title: Imprimir y cambiar las páginas de un PDF
summary: Imprima hojas con sus anotaciones, y gire, mueva, inserte, borre o extraiga páginas de un PDF abierto.
keywords: imprimir, impresora, papel, páginas, página, girar, rotar, reordenar, mover página, insertar, añadir página, página en blanco, borrar página, eliminar página, extraer, dividir, operaciones de página
from: 81832d9b
---

El menú {{ui:Páginas}} del grupo {{ui:Archivo}} trabaja con el PDF al que pertenece la hoja abierta. Su PDF en este ordenador nunca se cambia: los cambios forman parte de la copia que guarde.

## Imprimir

1. Pulse {{key:Mod+P}}, o elija {{ui:Páginas}} y luego {{ui:Imprimir…}}.
2. Cuando hay más de una hoja abierta, elija qué imprimir: {{ui:Esta hoja}}, todas las páginas de este archivo, el conjunto completo, o las páginas que escriba (como `1-3, 5`).
3. Elija {{ui:Imprimir}}. Se abre el cuadro de diálogo de impresión de su navegador: elija allí la impresora, el papel y la escala.

Las anotaciones se imprimen tal como se ven en la hoja: se dibujan en las páginas de la copia que va a la impresora. Los comentarios hechos con otros programas se imprimen según indique su PDF.

:::safari firefox
Si su navegador no puede imprimir desde dentro de la página, las hojas se abren como PDF en una pestaña nueva. Imprima desde allí.
:::

## Girar una página

Elija {{ui:Páginas}}, y luego {{ui:Girar la página en sentido horario}} o {{ui:Girar la página en sentido antihorario}}. La hoja abierta gira un cuarto de vuelta. Sus anotaciones siguen donde estaban en el dibujo, y el texto que escribió gira con la página para que siga leyéndose derecho.

## Mover una página

Elija {{ui:Páginas}}, y luego {{ui:Mover la página antes}} o {{ui:Mover la página después}}. La hoja abierta intercambia su lugar con la vecina dentro de su propio PDF. Sus anotaciones, su escala y su número de hoja van con ella.

## Insertar páginas

- {{ui:Insertar páginas de un PDF…}} pone todas las páginas de otro PDF después de la hoja abierta.
- {{ui:Insertar una página en blanco}} añade una página vacía del mismo tamaño después de la hoja abierta, para bocetos y notas. En un conjunto creado con {{ui:Nuevo}}, tiene también la cuadrícula del conjunto.
- En un conjunto creado con {{ui:Nuevo}}, {{ui:Añadir una página en blanco}} debajo de la lista {{ui:Hojas}} añade una página más, igual que las demás, al final. Vea [Empezar con páginas en blanco](topic:open-a-plan-set#start-with-blank-pages).

Las páginas insertadas reciben su número de página como etiqueta hasta que les cambie el nombre. Vea [Cambiar el nombre de una hoja](topic:open-a-plan-set#rename-a-sheet).

## Borrar páginas

1. Elija {{ui:Páginas}}, y luego {{ui:Borrar páginas…}}.
2. Escriba los números de página de este PDF, como `3` o `2-4`. Se rellena la página de la hoja abierta.
3. Elija {{ui:Borrar páginas}}. Si esas páginas tienen anotaciones, MarkupCraft indica cuántas y vuelve a preguntar.

Un PDF conserva al menos una página. Para quitar un archivo completo, cierre el conjunto y abra los archivos que aún necesite.

## Extraer páginas

Elija {{ui:Páginas}}, y luego {{ui:Extraer páginas…}}, y escriba las páginas. Se descargan como un PDF nuevo llamado "<file> (pages 1-3).pdf", con sus anotaciones como comentarios que puede seguir editando. El archivo abierto no cambia.

## Conviene saber

- **Deshacer se detiene en un cambio de página.** {{key:Mod+Z}} deshace las anotaciones dibujadas después, pero no el cambio de página en sí ni nada anterior. Cierre sin guardar para empezar de nuevo desde su PDF original.
- Los números de página cuentan las páginas de un PDF, no de todo el conjunto. Mover una página la mantiene dentro de su propio archivo.
- Las páginas modificadas son trabajo sin guardar: {{ui:Guardar}} descarga la copia reorganizada, y al salir se le pregunta antes.
