---
title: Enlaces de hoja
summary: Haga que una anotación lleve a otra hoja, y enlace cada llamada de hoja como 3/A-501 con su hoja y su vista en una sola pasada con Enlaces por lotes.
keywords: hipervínculo, enlace, enlaces, saltar, llamada de hoja, llamada de detalle, llamada de sección, 3/A-501, ir a la hoja, atrás, enlace automático, enlaces por lotes, cajetín, número de hoja, nombre de hoja, vista, detalle, renombrar, renumerar, adenda, enlace pdf
from: 86a17c37
---

Un enlace de hoja le lleva de una anotación a otra hoja del conjunto: desde un globo de detalle al detalle, o desde una nota a la hoja a la que se refiere.

## Enlazar una anotación con una hoja

1. Seleccione la anotación.
2. En {{ui:Propiedades}}, elija la hoja en {{ui:Enlazar con la hoja}}.

Aparece una pequeña flecha en la esquina superior derecha de la anotación. Para seguirla, mantenga pulsado {{key:Mod}} y haga clic en la anotación, o selecciónela y elija {{ui:Ir a …}} en {{ui:Propiedades}}. {{key:Alt+Left}} vuelve a la hoja de la que venía.

Un enlace nombra la hoja por su número, así que sigue funcionando tras reabrir el conjunto o tras insertar una nueva emisión: abre la hoja más reciente con ese número. Si esa hoja no está abierta, la barra de estado lo indica.

## Enlazar todas las llamadas de hoja a la vez

Elija {{ui:Páginas}} › {{ui:Enlaces por lotes…}}, o {{ui:Enlazar llamadas a hojas…}} bajo {{ui:Buscar texto}} en la parte superior del panel {{ui:Hojas}}.

1. **Compruebe los números de hoja.** MarkupCraft enumera cada hoja abierta con el número y el nombre que leyó del cajetín de la hoja (o de su etiqueta de página), y de dónde procede cada uno. Corrija los que sean incorrectos, y escriba un número donde no encontró ninguno (un cajetín cuyo número se imprimió como líneas no tiene texto que leer). Después elija {{ui:Buscar llamadas}}. Sus correcciones son un solo paso de deshacer, y pasan a ser las etiquetas de página del PDF guardado.
2. **Revise la lista.** MarkupCraft lee el texto de cada hoja en busca de llamadas como «3/A-501», «5 / A501», «DETALLE 2 EN A-501», un globo con «3» encima de «A-501», o un simple «A-501» en una nota, y lee los títulos de vista de cada hoja (un número de detalle con el número de hoja debajo, o un número grande con un título al lado). La lista tiene tres partes:
   - {{ui:Se enlazará}}: cada llamada, la hoja a la que va y la vista de esa hoja. Desmarque las que no quiera. Si no se encontró la vista (una llamada a la vista 7 en una hoja con las vistas 1 a 6), elija la vista en la lista junto a ella, o deje {{ui:Hoja completa}}.
   - {{ui:No enlazado}}: números de hoja que ninguna hoja abierta tiene, con cuántas llamadas nombra cada uno. Elija la hoja a la que se refiere cada uno (por ejemplo, una hoja que se renumeró), y todas las llamadas a ese número se enlazarán con ella. O déjela sin enlazar.
   - Cuántas llamadas ya están enlazadas y siguen yendo al lugar correcto. Se dejan como están.
3. Elija {{ui:Crear los enlaces}}.

Cada llamada recibe un recuadro azul fino que es un enlace de hoja. {{key:Mod}}+clic sobre él abre la hoja ampliada hasta la vista. Un solo {{key:Mod+Z}} los elimina todos.

Los códigos que solo parecen números de hoja, como R-19 o W12X26, se dejan fuera: una llamada debe tener la forma de los números de hoja del propio conjunto. El número propio de una hoja, en su cajetín y en sus títulos de vista, nunca es una llamada. Las hojas escaneadas no tienen texto que leer: use primero {{ui:Leer texto (OCR)…}}, o enlace sus llamadas una a una.

## Vuelva a ejecutarlo cuando cambie el conjunto

Los enlaces por lotes se pueden ejecutar tantas veces como quiera:

- **Se añadió una hoja**, como una adenda con A-601: abra su archivo y ejecute de nuevo Enlaces por lotes. Las llamadas a A-601 que antes no se enlazaron ahora sí lo hacen.
- **Una hoja se renumeró**: corrija su número en el paso 1. Los enlaces hechos por Enlaces por lotes que ya no encuentran su hoja aparecen en {{ui:No enlazado}}; elija la hoja una vez y todos la seguirán. Los enlaces que pasaron a otra vista se actualizan.
- Los enlaces que usted hizo a mano en {{ui:Propiedades}} nunca se modifican.

## En el PDF guardado

Un enlace a una hoja del mismo PDF también se escribe como enlace PDF, de modo que otros visores también saltan allí con un clic. Un enlace con vista abre esa vista en el otro visor (el salto «fit rectangle» de PDF); uno sin vista abre la hoja completa. Los enlaces a una hoja de otro archivo del conjunto solo funcionan en MarkupCraft.
