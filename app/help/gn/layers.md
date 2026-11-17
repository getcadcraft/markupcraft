---
title: Capas de anotaciones
summary: Poner anotaciones en capas con nombre, luego mostrar, ocultar o bloquear cada capa; otros visores de PDF también pueden cambiarlas.
keywords: capas, capa, ocultar, mostrar, bloquear, agrupar anotaciones, disciplina, mecánica, eléctrica, contenido opcional, ocg, visibilidad
from: 0fbb4c26
---

Las capas agrupan anotaciones, por ejemplo por disciplina o por revisor. Ocultar una capa para ver el plano que está debajo, o bloquearla para que sus anotaciones no se muevan por accidente.

## Crear una capa y dibujar en ella

1. Abrir {{ui:Capas}}, arriba del panel {{ui:Hojas}}.
2. Elegir {{ui:Nueva capa}}, escribir un nombre como `Mecánica`, y elegir {{ui:Agregar capa}}.
3. La nueva capa pasa a ser la capa actual: toda anotación que se dibuje desde ahora va en ella. Elegir el nombre de otra capa, o {{ui:Sin capa}}, para cambiar dónde van las nuevas anotaciones.

Para mover una anotación a otra capa, seleccionarla y elegir la capa en {{ui:Capa}} dentro de {{ui:Propiedades}}. {{ui:Nueva capa…}} al final de esa lista crea una en el momento. Mover se puede deshacer con {{key:Mod+Z}}.

## Mostrar, ocultar y bloquear

Cada fila de capa tiene dos botones:

- El **ojo** muestra u oculta la capa. Las anotaciones ocultas no se dibujan ni se pueden seleccionar; igual cuentan en la lista de {{ui:Anotaciones}}.
- El **candado** mantiene las anotaciones de la capa en la hoja, pero impide que se seleccionen, muevan o eliminen.

El botón de lápiz renombra una capa y mueve sus anotaciones con ella. Filtrar la lista de {{ui:Anotaciones}} por {{ui:Capa}} para ver las anotaciones de una sola capa.

## En el PDF guardado

Cada capa pasa a ser una capa del PDF (contenido opcional). Otros visores de PDF listan las capas en su panel de capas y pueden cambiarlas; una capa que ocultaste empieza oculta también allí. Las capas que el plano ya tenía, como las capas CAD, quedan como estaban. Al reabrir la copia en MarkupCraft, las anotaciones vuelven en sus capas, ocultas y bloqueadas como las dejaste.

## Bueno saber

- Ocultar y bloquear no son ediciones: no se deshacen con {{key:Mod+Z}}, pero se guardan con el PDF.
- Copiar y pegar mantienen la capa de una anotación.
- Una copia aplanada dibuja cada anotación en la página, sin importar su capa. Ver [Guardar una copia aplanada](topic:flatten).
