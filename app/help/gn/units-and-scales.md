---
title: Unidades, longitudes y escalas
summary: Todas las formas de escribir una longitud, las unidades en que se muestran longitudes y áreas, el redondeo y la lista de escalas predeterminadas.
keywords: unidades, pies, pulgadas, pies y pulgadas, métrico, metros, milímetros, centímetros, escala, predeterminada, escala arquitectónica, escala de ingeniería, relación, pies cuadrados, redondeo, fracciones
from: 574b0291
---

## Escribir una longitud

Cuando calibrás a partir de dos puntos, escribís la distancia real. MarkupCraft lee todas estas:

| Escribís | Significa |
|---|---|
| `24'-0"` | 24 pies |
| `12' 6 1/2"` o `12'-6 1/2"` | 12 pies 6½ pulgadas |
| `12' 6` | 12 pies 6 pulgadas (sin la marca de pulgadas) |
| `6"` o `1/2"` | pulgadas |
| `12.5'` o `12.5 ft` | 12½ pies |
| `3 ft 6 in` | 3 pies 6 pulgadas (también feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | métrico (también meter, metre, millimeter, centimetre…) |
| `24` | un número sin unidad, en la unidad elegida en {{ui:Mostrar longitudes en}} |

Las comillas curvas (’ ”) y dos apóstrofes ('') para pulgadas también funcionan. Las longitudes cero y negativas se rechazan.

:::warning
Una coma se lee como punto decimal: `1,5 m` son 1.5 metros. No escribas separadores de miles: `1,200 mm` se lee como 1.2 milímetros. Escribí `1200 mm`.
:::

## Cómo se muestran longitudes y áreas

| {{ui:Mostrar longitudes en}} | Una longitud se muestra como | Un área se muestra como |
|---|---|---|
| {{ui:Pie ha pulgada}} | `12'-6 1/2"`, redondeada a 1/16" | pies cuadrados, dos decimales |
| {{ui:Pies decimales}} | `12.54'`, dos decimales | pies cuadrados, dos decimales |
| {{ui:Pulgadas}} | `150.5"`, hasta dos decimales | pulgadas cuadradas, un decimal |
| {{ui:Metros}} | `3.820 m`, tres decimales | metros cuadrados, tres decimales |
| {{ui:Milímetros}} | `3820 mm`, milímetros enteros | milímetros cuadrados, enteros |

El perímetro de un área usa el formato de longitud.

## Escalas predeterminadas

Las predeterminadas suponen que el PDF está a su tamaño impreso completo: 72 puntos PDF por pulgada, como lo imprime un programa CAD.

| Grupo | Escalas | Longitudes en |
|---|---|---|
| Arquitectónica | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pie ha pulgada |
| Ingeniería | 1" = 10', 20', 30', 40', 50', 60', 100' | Pies decimales |
| Métrica | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milímetros |
| Métrica | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metros |

Para usar una escala predeterminada pero ver las longitudes en otra unidad, calibrá en cambio a partir de dos puntos y elegí la unidad ahí.

## Escalas guardadas por otros programas

Cuando un PDF ya trae una escala para una página de otro programa (una escala de medida guardada en la página), MarkupCraft la usa si está en pies, pulgadas, metros, centímetros o milímetros. Su etiqueta se muestra como la indica el archivo.

## Posiciones en el papel

La barra de estado muestra dónde está el puntero sobre el papel, en pulgadas desde la esquina superior izquierda de la hoja, sea cual sea la escala de la hoja. Los pasos de desplazamiento de Compare se miden en puntos (72 puntos por pulgada).

## Precisión

Una medida es tan buena como la calibración y tus clics. Calibrá sobre la dimensión conocida más larga que encuentres, hacé zoom para hacer clic en sus extremos, y después verificá otra dimensión. Un PDF que se escaló al crearse (una impresión "ajustar a la página" o un conjunto a media escala) sigue siendo exacto después de calibrar con una dimensión, pero no con una escala predeterminada.
