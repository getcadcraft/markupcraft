---
title: Capas de anotaciones
summary: Ponga las anotaciones en capas con nombre y, después, muestre, oculte o bloquee cada capa; otros visores de PDF también pueden cambiarlas.
keywords: capas, capa, ocultar, mostrar, bloquear, agrupar anotaciones, disciplina, mecánica, eléctrica, contenido opcional, ocg, visibilidad
from: 0fbb4c26
---

Las capas agrupan anotaciones, por ejemplo por disciplina o por revisor. Oculte una capa para ver el dibujo que hay debajo, o bloquéela para que sus anotaciones no se muevan por accidente.

## Crear una capa y dibujar en ella

1. Abra {{ui:Capas}}, en la parte superior del panel {{ui:Hojas}}.
2. Elija {{ui:Capa nueva}}, escriba un nombre como `Mecánica` y elija {{ui:Añadir capa}}.
3. La capa nueva pasa a ser la capa actual: cada anotación que dibuje a partir de ahora irá en ella. Elija el nombre de otra capa, o {{ui:Sin capa}}, para cambiar dónde van las anotaciones nuevas.

Para mover una anotación a otra capa, selecciónela y elija la capa en {{ui:Capa}} dentro de {{ui:Propiedades}}. {{ui:Capa nueva…}} al final de esa lista crea una en el momento. Se puede deshacer el movimiento con {{key:Mod+Z}}.

## Mostrar, ocultar y bloquear

Cada fila de capa tiene dos botones:

- El **ojo** muestra u oculta la capa. Las anotaciones ocultas no se dibujan ni se pueden seleccionar; sí cuentan en la lista {{ui:Anotaciones}}.
- El **candado** mantiene las anotaciones de la capa en la hoja, pero impide seleccionarlas, moverlas o eliminarlas.

El botón del lápiz renombra una capa y lleva sus anotaciones con ella. Filtre la lista {{ui:Anotaciones}} por {{ui:Capa}} para ver las anotaciones de una sola capa.

## En el PDF guardado

Cada capa se convierte en una capa PDF (contenido opcional). Otros visores de PDF muestran las capas en su panel de capas y pueden cambiarlas; una capa que haya ocultado empieza oculta también allí. Las capas que ya tenía el dibujo, como las capas de CAD, se mantienen como estaban. Al volver a abrir la copia en MarkupCraft, las anotaciones regresan a sus capas, ocultas y bloqueadas tal como las dejó.

## Conviene saber

- Ocultar y bloquear no son ediciones: no se deshacen con {{key:Mod+Z}}, pero se guardan con el PDF.
- Copiar y pegar conserva la capa de una anotación.
- Una copia aplanada dibuja cada anotación en la página, sea cual sea su capa. Véase [Guardar una copia aplanada](topic:flatten).
