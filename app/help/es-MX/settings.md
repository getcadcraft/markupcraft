---
title: Configuración de MarkupCraft
summary: Cambie su nombre, el color y el grosor de las marcas nuevas, dónde pega las copias el comando Pegar, y las unidades de las longitudes y de la posición en la hoja.
keywords: configuración, preferencias, opciones, nombre, autor, color, color predeterminado, grosor de línea, ancho de línea, grueso, delgado, pegar, pegar en el puntero, desfase, unidades, métrico, milímetros, pulgadas, pies, restablecer
from: 63ad97fd
---

Abra {{ui:Configuración}} con el engranaje de la barra superior, o pulse {{key:Mod+,}}. La primera pestaña, {{ui:MarkupCraft}}, contiene la configuración propia de esta app; {{ui:General}} contiene la que comparten todas las apps de CadCraft (tema, barra de herramientas, paneles). La configuración de MarkupCraft existe solo en la app: la cambia aquí, y este navegador la recuerda (vea [Lo que se queda en este navegador](topic:browser-storage)). Un cambio surte efecto de inmediato; no hay nada que guardar.

## Su nombre

{{ui:Nombre en las marcas}} es el nombre que lleva cada marca y respuesta nueva, y que los PDF guardados muestran como autor del comentario. Es el mismo nombre que el botón del extremo derecho de la barra de estado; cámbielo en cualquiera de los dos lugares. Las marcas ya dibujadas conservan el nombre con el que se hicieron. Vea [Defina su nombre de autor](topic:set-your-name).

## Marcas nuevas

- **{{ui:Color de las marcas}}** es el color con el que empiezan las plumas, líneas, flechas, rectángulos, elipses, polilíneas, polígonos, nubes, llamadas y textos nuevos (al inicio, en rojo). Los marcatextos, notas, sellos, longitudes, áreas y conteos conservan sus propios colores, porque sus colores indican qué son.
- **{{ui:Líneas delgadas}}, {{ui:Normal}}, {{ui:Líneas gruesas}}** hacen que las líneas de esas mismas marcas tengan la mitad de ancho, tal como están, o la mitad más de ancho.

Un color o grosor de línea que elija para una herramienta en {{ui:Propiedades}} (con esa herramienta activa y sin nada seleccionado) prevalece sobre estos. Las herramientas de la [caja de herramientas](topic:tool-chest) conservan su propio estilo. Las marcas ya dibujadas no cambian: selecciónelas y cámbielas en {{ui:Propiedades}}.

## Pegar

Dónde pone {{key:Mod+V}} lo que copió:

- **{{ui:En el puntero}}** (el inicio): con el puntero sobre la hoja, la copia queda centrada donde apunta. Con el puntero en otro lugar, queda junto al original.
- **{{ui:Junto a la copia}}**: siempre un poco abajo y a la derecha del original, con un paso más en cada pegado.

El botón {{ui:Pegar}} y {{key:Mod+Shift+V}} ({{ui:Pegar en el mismo lugar}}) funcionan igual con cualquiera de las dos opciones. Vea [Copiar, pegar y duplicar](topic:select-and-edit#copy-paste-and-duplicate).

## Medidas

- **{{ui:Mostrar longitudes en}}** es la unidad que el cuadro de escala de la hoja ofrece primero cuando calibra desde dos puntos: pies y pulgadas, pies decimales, pulgadas, metros o milímetros. Las hojas que ya calibró conservan su unidad. Vea [Calibrar una hoja y medir](topic:calibrate-and-measure).
- **{{ui:Posición en la hoja}}** elige pulgadas o milímetros para la posición del puntero en la esquina inferior izquierda de la pantalla. Es una posición en el papel, no una distancia real.

## Restablecer

{{ui:Restablecer configuración de MarkupCraft}} en la parte inferior del cuadro devuelve estos ajustes, y los de panel y barra de herramientas de {{ui:General}}, a como empiezan. Conserva su nombre, porque indica quién es usted y no cómo le gusta trabajar, y conserva los colores que eligió en el panel de cada herramienta.
