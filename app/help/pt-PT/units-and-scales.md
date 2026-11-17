---
title: Unidades, comprimentos e escalas
summary: Todas as formas de escrever um comprimento, as unidades em que comprimentos e áreas são mostrados, o arredondamento e a lista de escalas predefinidas.
keywords: unidades, pés, polegadas, pés e polegadas, métrico, metros, milímetros, centímetros, escala, predefinida, escala arquitetónica, escala de engenharia, rácio, pés quadrados, arredondamento, frações
from: 574b0291
---

## Escrever um comprimento

Ao calibrar a partir de dois pontos, escreve a distância real. O MarkupCraft lê todas estas formas:

| Escreve | Significa |
|---|---|
| `24'-0"` | 24 pés |
| `12' 6 1/2"` ou `12'-6 1/2"` | 12 pés e 6½ polegadas |
| `12' 6` | 12 pés e 6 polegadas (sem a marca de polegada) |
| `6"` ou `1/2"` | polegadas |
| `12.5'` ou `12.5 ft` | 12½ pés |
| `3 ft 6 in` | 3 pés e 6 polegadas (também feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | métrico (também meter, metre, millimeter, centimetre…) |
| `24` | um número sem unidade, na unidade escolhida em {{ui:Mostrar comprimentos em}} |

Aspas curvas (’ ”) e duas plicas ('') para polegadas também funcionam. Comprimentos zero e negativos são recusados.

:::warning
Uma vírgula é lida como separador decimal: `1,5 m` são 1,5 metros. Não escreva separadores de milhares: `1,200 mm` é lido como 1,2 milímetros. Escreva `1200 mm`.
:::

## Como comprimentos e áreas são mostrados

| {{ui:Mostrar comprimentos em}} | Um comprimento mostra-se como | Uma área mostra-se como |
|---|---|---|
| {{ui:Pés e polegadas}} | `12'-6 1/2"`, arredondado a 1/16" | pés quadrados, duas casas decimais |
| {{ui:Pés decimais}} | `12.54'`, duas casas decimais | pés quadrados, duas casas decimais |
| {{ui:Polegadas}} | `150.5"`, até duas casas decimais | polegadas quadradas, uma casa decimal |
| {{ui:Metros}} | `3.820 m`, três casas decimais | metros quadrados, três casas decimais |
| {{ui:Milímetros}} | `3820 mm`, milímetros inteiros | milímetros quadrados, inteiros |

O perímetro de uma área usa o formato de comprimento.

## Escalas predefinidas

As predefinições assumem que o PDF está no seu tamanho impresso real: 72 pontos PDF por polegada, como um programa de CAD o desenha.

| Grupo | Escalas | Comprimentos mostrados em |
|---|---|---|
| Arquitetónica | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pés e polegadas |
| Engenharia | 1" = 10', 20', 30', 40', 50', 60', 100' | Pés decimais |
| Métrica | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milímetros |
| Métrica | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metros |

Para usar uma escala predefinida mas ver os comprimentos noutra unidade, calibre antes a partir de dois pontos e escolha aí a unidade.

## Escalas guardadas por outros programas

Quando um PDF já traz uma escala para uma página, vinda de outro programa (uma escala de medição guardada na página), o MarkupCraft usa-a se estiver em pés, polegadas, metros, centímetros ou milímetros. O rótulo é mostrado tal como o ficheiro o indica.

## Posições no papel

A barra de estado mostra onde está o ponteiro no papel, em polegadas a partir do canto superior esquerdo da folha, independentemente da escala da folha. Os passos de ajuste fino do Compare estão em pontos (72 pontos por polegada).

## Exatidão

Uma medição vale tanto quanto a calibração e os seus cliques. Calibre sobre a maior dimensão conhecida que encontrar, faça zoom para clicar nas extremidades e depois verifique outra dimensão. Um PDF que foi escalado quando foi feito (uma impressão "ajustar à página" ou um conjunto a meia escala) continua exato depois de calibrar a partir de uma dimensão, mas não com uma predefinição.
