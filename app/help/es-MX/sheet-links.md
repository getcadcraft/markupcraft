---
title: Vínculos entre hojas
summary: Haga que una marca lleve a otra hoja del juego, y vincule cada llamada a hoja, como 3/A-501, con su hoja y su vista en una sola pasada con Vínculos por lotes.
keywords: hipervínculo, vínculo, vínculos, saltar, llamada a hoja, llamada de detalle, llamada de sección, 3/A-501, ir a la hoja, atrás, vínculo automático, vínculos por lotes, cajetín, número de hoja, nombre de hoja, vista, detalle, renombrar, renumerar, adenda, vínculo de pdf
from: 86a17c37
---

Un vínculo de hoja lleva de una marca a otra hoja del juego: de una burbuja de detalle al detalle, o de una nota a la hoja a la que se refiere.

## Vincular una marca a una hoja

1. Seleccione la marca.
2. En {{ui:Propiedades}}, elija la hoja en {{ui:Vínculo a hoja}}.

Aparece una pequeña flecha en la esquina superior derecha de la marca. Para seguirla, mantenga pulsado {{key:Mod}} y haga clic en la marca, o selecciónela y elija {{ui:Ir a …}} en {{ui:Propiedades}}. {{key:Alt+Left}} vuelve a la hoja de donde venía.

Un vínculo nombra la hoja por su número, así que sigue funcionando después de reabrir el juego o de sustituir una emisión nueva con hojas de reemplazo: abre la hoja más reciente con ese número. Si esa hoja no está abierta, la barra de estado lo indica.

## Vincular todas las llamadas a hojas de una vez

Elija {{ui:Páginas}} › {{ui:Vínculos por lotes…}}, o {{ui:Vincular referencias a hojas…}} bajo {{ui:Buscar texto}} en la parte superior del panel {{ui:Hojas}}.

1. **Revise los números de hoja.** MarkupCraft enumera cada hoja abierta con el número y el nombre que leyó del cajetín de la hoja (o de su etiqueta de página), y de dónde salió cada dato. Corrija los que estén mal, y escriba un número donde no encontró ninguno (un cajetín cuyo número se imprimió como líneas no tiene texto que leer). Luego elija {{ui:Buscar llamadas}}. Sus correcciones son un solo paso de deshacer, y se convierten en las etiquetas de página del PDF guardado.
2. **Revise la lista.** MarkupCraft lee el texto de cada hoja en busca de llamadas como "3/A-501", "5 / A501", "DETALLE 2 EN A-501", una burbuja con "3" sobre "A-501", o un simple "A-501" en una nota. También lee los títulos de vista de cada hoja (un número de detalle con el número de hoja debajo, o un número grande con un título al lado). La lista tiene tres partes:
   - {{ui:Se vinculará}}: cada llamada, la hoja a la que va y la vista en esa hoja. Desmarque las que no quiera. Si no se encontró la vista (una llamada a la vista 7 en una hoja con las vistas 1 a 6), elija la vista de la lista a su lado, o deje {{ui:Hoja completa}}.
   - {{ui:Sin vincular}}: números de hoja que ninguna hoja abierta tiene, con cuántas llamadas nombra cada uno. Elija la hoja a la que se refiere cada uno (por ejemplo, una hoja que se renumeró), y cada llamada a ese número se vinculará a ella. O déjela sin vincular.
   - Cuántas llamadas ya están vinculadas y siguen llevando al lugar correcto. Se dejan como están.
3. Elija {{ui:Crear los vínculos}}.

Cada llamada recibe un recuadro azul delgado que es un vínculo de hoja. {{key:Mod}}+clic sobre él abre la hoja con zoom en la vista. Un solo {{key:Mod+Z}} los quita todos.

Se omiten los códigos que solo parecen números de hoja, como R-19 o W12X26: una llamada debe tener la forma de los números de hoja propios del juego. El número propio de una hoja, en su cajetín y en sus títulos de vista, nunca es una llamada. Las hojas escaneadas no tienen texto que leer: use primero {{ui:Leer texto (OCR)…}}, o vincule sus llamadas una por una.

## Volver a ejecutarlo cuando cambie el juego

Los vínculos por lotes se pueden ejecutar tantas veces como quiera:

- **Se agregó una hoja**, como una adenda con A-601: abra su archivo y ejecute {{ui:Vínculos por lotes…}} otra vez. Las llamadas a A-601 que no se vincularon antes ahora sí se vinculan.
- **Una hoja fue renumerada**: corrija su número en el paso 1. Los vínculos hechos por Vínculos por lotes que ya no encuentran su hoja aparecen en {{ui:Sin vincular}}; elija la hoja una vez y todos la siguen. Los vínculos que pasaron a otra vista se actualizan.
- Los vínculos que hizo a mano en {{ui:Propiedades}} nunca se cambian.

## En el PDF guardado

Un vínculo a una hoja del mismo PDF también se escribe como vínculo PDF, así que otros visores también saltan allí con un clic. Un vínculo con vista abre esa vista en el otro visor (el salto "fit rectangle" de PDF); uno sin vista abre la hoja completa. Los vínculos a una hoja de otro archivo del juego funcionan solo en MarkupCraft.
