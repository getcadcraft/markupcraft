---
title: Capas de marcas
summary: Ponga las marcas en capas con nombre, y luego muestre, oculte o bloquee cada capa; otros visores de PDF también pueden cambiarlas.
keywords: capas, capa, ocultar, mostrar, bloquear, agrupar marcas, disciplina, mecánica, eléctrica, contenido opcional, ocg, visibilidad
from: 0fbb4c26
---

Las capas agrupan marcas, por ejemplo por disciplina o por revisor. Oculte una capa para ver el dibujo que está debajo, o bloquéela para que sus marcas no se muevan por accidente.

## Crear una capa y dibujar en ella

1. Abra {{ui:Capas}}, en la parte superior del panel {{ui:Hojas}}.
2. Elija {{ui:Capa nueva}}, escriba un nombre como `Mechanical`, y elija {{ui:Agregar capa}}.
3. La nueva capa se vuelve la capa actual: toda marca que dibuje desde ahora quedará en ella. Elija el nombre de otra capa, o {{ui:Sin capa}}, para cambiar dónde van las marcas nuevas.

Para mover una marca a otra capa, selecciónela y elija la capa en {{ui:Capa}} dentro de {{ui:Propiedades}}. {{ui:Capa nueva…}} al final de esa lista crea una en el momento. Puede deshacer el movimiento con {{key:Mod+Z}}.

## Mostrar, ocultar y bloquear

La fila de cada capa tiene dos botones:

- El **ojo** muestra u oculta la capa. Las marcas ocultas no se dibujan ni se pueden seleccionar; aun así cuentan en la lista de {{ui:Marcas}}.
- El **candado** mantiene las marcas de la capa en la hoja, pero impide seleccionarlas, moverlas o borrarlas.

El botón del lápiz cambia el nombre de una capa y lleva sus marcas con ella. Filtre la lista de {{ui:Marcas}} por {{ui:Capa}} para ver las marcas de una sola capa.

## En el PDF guardado

Cada capa se convierte en una capa del PDF (contenido opcional). Otros visores de PDF muestran las capas en su panel de capas y pueden cambiarlas; una capa que oculte empieza oculta allí también. Las capas que el dibujo ya tenía, como las capas de CAD, se quedan como estaban. Al volver a abrir la copia en MarkupCraft, las marcas regresan a sus capas, ocultas y bloqueadas como las dejó.

## Conviene saber

- Ocultar y bloquear no son ediciones: no se deshacen con {{key:Mod+Z}}, pero se guardan con el PDF.
- Copiar y pegar conserva la capa de una marca.
- Una copia aplanada dibuja cada marca en la página, sin importar su capa. Vea [Guardar una copia aplanada](topic:flatten).
