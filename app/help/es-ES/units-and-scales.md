---
title: Unidades, longitudes y escalas
summary: Todas las formas de escribir una longitud, las unidades en que se muestran longitudes y áreas, el redondeo y la lista de escalas predefinidas.
keywords: unidades, pies, pulgadas, pies y pulgadas, métrico, metros, milímetros, centímetros, escala, predefinida, escala arquitectónica, escala de ingeniería, proporción, pies cuadrados, redondeo, fracciones
from: 574b0291
---

## Escribir una longitud

Al calibrar a partir de dos puntos, escriba la distancia real. MarkupCraft lee todas estas formas:

| Usted escribe | Significa |
|---|---|
| `24'-0"` | 24 ft |
| `12' 6 1/2"` o `12'-6 1/2"` | 12 ft 6½ in |
| `12' 6` | 12 ft 6 in (sin la marca de pulgadas) |
| `6"` o `1/2"` | in |
| `12.5'` o `12.5 ft` | 12½ ft |
| `3 ft 6 in` | 3 ft 6 in (también feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | métrico (también meter, metre, millimeter, centimetre…) |
| `24` | un número sin unidad, en la unidad elegida en {{ui:Mostrar las longitudes en}} |

Las comillas tipográficas (’ ”) y dos apóstrofos ('') para pulgadas también funcionan. Las longitudes cero y negativas se rechazan.

:::warning
Una coma se lee como punto decimal: `1,5 m` equivale a 1.5 m. No escriba separadores de miles: `1,200 mm` se lee como 1.2 mm. Escriba `1200 mm`.
:::

## Cómo se muestran las longitudes y las áreas

| {{ui:Mostrar las longitudes en}} | Una longitud se muestra como | Un área se muestra como |
|---|---|---|
| {{ui:Pies y pulgadas}} | `12'-6 1/2"`, redondeada a 1/16" | ft², dos decimales |
| {{ui:Pies decimales}} | `12.54'`, dos decimales | ft², dos decimales |
| {{ui:Pulgadas}} | `150.5"`, hasta dos decimales | in², un decimal |
| {{ui:Metros}} | `3.820 m`, tres decimales | m², tres decimales |
| {{ui:Milímetros}} | `3820 mm`, milímetros enteros | mm², enteros |

El perímetro de un área usa el formato de longitud.

## Escalas predefinidas

Las predefinidas suponen que el PDF está a su tamaño impreso completo: 72 pt por in, como lo traza un programa CAD.

| Grupo | Escalas | Longitudes mostradas en |
|---|---|---|
| Arquitectónica | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pies y pulgadas |
| Ingeniería | 1" = 10', 20', 30', 40', 50', 60', 100' | Pies decimales |
| Métrica | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milímetros |
| Métrica | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metros |

Para usar una escala predefinida pero ver las longitudes en otra unidad, calibre a partir de dos puntos y elija la unidad allí.

## Escalas guardadas por otros programas

Cuando un PDF ya tiene una escala para una página de otro programa (una escala de medida guardada en la página), MarkupCraft la usa si está en pies, pulgadas, metros, centímetros o milímetros. Su etiqueta se muestra tal como la indica el archivo.

## Posiciones en el papel

La barra de estado indica dónde está el puntero sobre el papel, en pulgadas desde la esquina superior izquierda de la hoja, sea cual sea la escala. Los pasos de desplazamiento fino de Compare están en puntos (72 puntos por in).

## Precisión

Una medida es tan buena como la calibración y sus clics. Calibre sobre la dimensión conocida más larga que encuentre, haga zoom para hacer clic en sus extremos y después compruebe otra dimensión. Un PDF que se escaló al crearse (un plano "ajustado a la página" o un conjunto a mitad de tamaño) sigue siendo exacto tras calibrar con una dimensión, pero no con una escala predefinida.
