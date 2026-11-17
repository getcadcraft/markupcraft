---
title: Unidades, lonxitudes e escalas
summary: Todas as formas de escribir unha lonxitude, as unidades en que se amosan lonxitudes e superficies, o redondeo e a lista de escalas predefinidas.
keywords: unidades, pés, polgadas, pés e polgadas, métrico, metros, milímetros, centímetros, escala, predefinida, escala arquitectónica, escala de enxeñaría, relación, pés cadrados, redondeo, fraccións
from: 574b0291
---

## Escribir unha lonxitude

Cando calibra a partir de dous puntos, escribe a distancia real. MarkupCraft le todas estas:

| Vostede escribe | Significa |
|---|---|
| `24'-0"` | 24 pés |
| `12' 6 1/2"` ou `12'-6 1/2"` | 12 pés e 6½ polgadas |
| `12' 6` | 12 pés e 6 polgadas (sen a marca de polgada) |
| `6"` ou `1/2"` | polgadas |
| `12.5'` ou `12.5 ft` | 12½ pés |
| `3 ft 6 in` | 3 pés e 6 polgadas (tamén feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | métrico (tamén meter, metre, millimeter, centimetre…) |
| `24` | un número sen unidade, na unidade escollida en {{ui:Mostrar lonxitudes en}} |

As comiñas curvas (’ ”) e dúas apóstrofes ('') para as polgadas tamén funcionan. Non se aceptan lonxitudes cero nin negativas.

:::warning
Unha coma léese como separador decimal: `1,5 m` son 1,5 metros. Non escriba separadores de miles: `1,200 mm` léese como 1,2 milímetros. Escriba `1200 mm`.
:::

## Como se amosan lonxitudes e superficies

| {{ui:Mostrar lonxitudes en}} | Unha lonxitude amósase como | Unha superficie amósase como |
|---|---|---|
| {{ui:Pés e polgadas}} | `12'-6 1/2"`, redondeado a 1/16" | pés cadrados, dous decimais |
| {{ui:Pés decimais}} | `12.54'`, dous decimais | pés cadrados, dous decimais |
| {{ui:Polgadas}} | `150.5"`, ata dous decimais | polgadas cadradas, un decimal |
| {{ui:Metros}} | `3.820 m`, tres decimais | metros cadrados, tres decimais |
| {{ui:Milímetros}} | `3820 mm`, milímetros enteiros | milímetros cadrados, enteiros |

O perímetro dunha área usa o formato de lonxitude.

## Escalas predefinidas

As escalas predefinidas supoñen que o PDF está no seu tamaño impreso completo: 72 puntos PDF por polgada, como o debuxa un programa CAD.

| Grupo | Escalas | Lonxitudes amosadas en |
|---|---|---|
| Arquitectónica | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pés e polgadas |
| Enxeñaría | 1" = 10', 20', 30', 40', 50', 60', 100' | Pés decimais |
| Métrica | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milímetros |
| Métrica | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metros |

Para usar unha escala predefinida pero ver as lonxitudes noutra unidade, calibre a partir de dous puntos e escolla a unidade alí.

## Escalas gardadas por outros programas

Cando un PDF xa leva unha escala para unha páxina de outro programa (unha escala de medida gardada na páxina), MarkupCraft usaa se está en pés, polgadas, metros, centímetros ou milímetros. A súa etiqueta amósase como a indica o ficheiro.

## Posicións no papel

A barra de estado amosa onde está o punteiro sobre o papel, en polgadas desde a esquina superior esquerda da folla, sexa cal sexa a escala da folla. Os pasos de desprazamento da función Compare están en puntos (72 puntos por polgada).

## Precisión

Unha medida é tan boa como a calibración e os seus clics. Calibre sobre a dimensión coñecida máis longa que atope, amplíe para facer clic nos seus extremos, e logo comprobe outra dimensión. Un PDF que foi escalado ao crearse (un debuxo «axustado á páxina» ou un conxunto á metade do tamaño) segue sendo exacto despois de calibrar a partir dunha dimensión, pero non con unha predefinida.
