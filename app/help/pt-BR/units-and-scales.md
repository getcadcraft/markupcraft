---
title: Unidades, comprimentos e escalas
summary: Todas as formas de digitar um comprimento, as unidades em que comprimentos e áreas são mostrados, o arredondamento e a lista de escalas predefinidas.
keywords: unidades, pés, polegadas, pés e polegadas, métrico, metros, milímetros, centímetros, escala, predefinida, escala arquitetônica, escala de engenharia, razão, pés quadrados, arredondamento, frações
from: 574b0291
---

## Digitar um comprimento

Ao calibrar a partir de dois pontos, você digita a distância real. O MarkupCraft lê todas estas formas:

| Você digita | Significa |
|---|---|
| `24'-0"` | 24 pés |
| `12' 6 1/2"` ou `12'-6 1/2"` | 12 pés e 6½ polegadas |
| `12' 6` | 12 pés e 6 polegadas (marca de polegada omitida) |
| `6"` ou `1/2"` | polegadas |
| `12.5'` ou `12.5 ft` | 12½ pés |
| `3 ft 6 in` | 3 pés e 6 polegadas (também feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | métrico (também meter, metre, millimeter, centimetre…) |
| `24` | um número puro, na unidade escolhida em {{ui:Mostrar comprimentos em}} |

Aspas tipográficas (’ ”) e duas aspas simples ('') para polegadas também funcionam. Comprimentos zero e negativos são recusados.

:::warning
Uma vírgula é lida como ponto decimal: `1,5 m` é 1.5 metros. Não digite separadores de milhar: `1,200 mm` é lido como 1.2 milímetros. Digite `1200 mm`.
:::

## Como comprimentos e áreas são mostrados

| {{ui:Mostrar comprimentos em}} | Um comprimento aparece como | Uma área aparece como |
|---|---|---|
| {{ui:Pés e polegadas}} | `12'-6 1/2"`, arredondado para 1/16" | pés quadrados, duas casas decimais |
| {{ui:Pés decimais}} | `12.54'`, duas casas decimais | pés quadrados, duas casas decimais |
| {{ui:Polegadas}} | `150.5"`, até duas casas decimais | polegadas quadradas, uma casa decimal |
| {{ui:Metros}} | `3.820 m`, três casas decimais | metros quadrados, três casas decimais |
| {{ui:Milímetros}} | `3820 mm`, milímetros inteiros | milímetros quadrados, inteiros |

O perímetro de uma área usa o formato de comprimento.

## Escalas predefinidas

As predefinições assumem que o PDF está no tamanho real impresso: 72 pontos PDF por polegada, como um programa CAD o plota.

| Grupo | Escalas | Comprimentos mostrados em |
|---|---|---|
| Arquitetônica | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pés e polegadas |
| Engenharia | 1" = 10', 20', 30', 40', 50', 60', 100' | Pés decimais |
| Métrica | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milímetros |
| Métrica | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metros |

Para usar uma escala predefinida mas ver os comprimentos em outra unidade, calibre a partir de dois pontos e escolha a unidade ali.

## Escalas salvas por outros programas

Quando um PDF já traz uma escala para uma página vinda de outro programa (uma escala de medição armazenada na página), o MarkupCraft a usa se ela estiver em pés, polegadas, metros, centímetros ou milímetros. O rótulo dela é mostrado como o arquivo o informa.

## Posições no papel

A barra de status mostra onde está o ponteiro no papel, em polegadas a partir do canto superior esquerdo da folha, qualquer que seja a escala da folha. Os passos de ajuste do Compare são em pontos (72 pontos por polegada).

## Precisão

Uma medição é tão boa quanto a calibração e os seus cliques. Calibre sobre a maior dimensão conhecida que você encontrar, dê zoom para clicar nas extremidades, depois confira outra dimensão. Um PDF que foi escalado ao ser feito (uma impressão "ajustar à página" ou um conjunto em meia escala) continua preciso depois de calibrar a partir de uma dimensão, mas não com uma predefinição.
