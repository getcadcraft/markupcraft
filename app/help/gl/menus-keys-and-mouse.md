---
title: Menús, teclas e rato
summary: Escolla a barra de ferramentas propia de MarkupCraft, unha barra de menús de revisión de PDF ou unha cinta, dea a cada ferramenta a súa propia tecla, mova as ferramentas entre menús e defina o que fan a roda e os botóns do rato.
keywords: estilo de menú, menús, barra de menús, barra de ferramentas, cinta, lapelas, revisión de PDF, atallos de teclado, teclas, atallos, personalizar, reasignar, rato, roda, invertir, dirección do zoom, botón central, botón dereito, desprazar, exportar, importar, cambiar, familiar
from: 081438a6
---

As ferramentas de MarkupCraft son as mesmas por calquera camiño que as alcance. Un **estilo de menú** só decide onde se sitúan na pantalla, como se chaman alí e que teclas as escollen. Escolla un en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menús, teclas e rato}}; o cambio é inmediato, e este navegador lémbrao.

## Os tres estilos

| Estilo | Que obtén |
|---|---|
| {{ui:MarkupCraft}} | A barra de ferramentas propia de MarkupCraft ({{ui:Ficheiro}}, {{ui:Seleccionar}}, Debuxar, Revisar, Anotar, {{ui:Medir}}, {{ui:Editar}}) e as súas teclas dunha letra: {{key:V}} seleccionar, {{key:H}} desprazar, {{key:P}} pluma, {{key:I}} realce, {{key:L}} liña, {{key:A}} frecha, {{key:R}} rectángulo, {{key:E}} elipse, {{key:C}} nube, {{key:K}} chamada, {{key:T}} texto, {{key:N}} nota, {{key:S}} selo, {{key:M}} lonxitude, {{key:Q}} superficie, {{key:U}} contar. O punto de partida. |
| {{ui:Revisión de PDF}} | Unha barra de menús ({{ui:Ficheiro}}, {{ui:Editar}}, {{ui:Vista}}, {{ui:Documento}}, {{ui:Anotación}}, {{ui:Medir}}, {{ui:Revisión}}, {{ui:Xanela}}) sobre unha fila de ferramentas de revisión, coas teclas dispostas como as dispoñen os programas de revisión de PDF: {{key:V}} seleccionar, {{key:Shift+V}} desprazar, {{key:H}} realce, {{key:Q}} chamada, {{key:N}} polígono, {{key:Shift+N}} polilínea, {{key:Shift+T}} nota, {{key:Shift+A}} arco, e as medicións en {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrar, {{key:Alt+Shift+L}} lonxitude, {{key:Alt+Shift+G}} ángulo, {{key:Alt+Shift+A}} superficie, {{key:Alt+Shift+C}} contar. {{key:Alt+L}} abre a lista de anotacións. O botón central despraza; o clic dereito non. |
| {{ui:Cinta}} | Lapelas con nome segundo o traballo: {{ui:Anotar}} (seleccionar, debuxar, nubes, chamadas, texto, notas, selos), {{ui:Medir}}, {{ui:Editar}}, {{ui:Revisión}} (a lista de anotacións e as súas exportacións, incidencias BCF, a lista de pendentes, os rexistros de campo, o caixón de ferramentas, comparar), {{ui:Páxinas}} e {{ui:Vista}}, con {{ui:Ficheiro}} e botóns rápidos para abrir, gardar, desfacer e refacer. As ferramentas conservan as teclas dunha letra propias de MarkupCraft. Un botón dun panel que non está aberto abre primeiro ese panel. |

Todos os estilos conservan as teclas {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} para axustar á páxina e {{key:Mod+9}} para axustar ao ancho; {{key:PageUp}} e {{key:PageDown}} cambian de folla.

:::tip
Unha tecla que pertence á disposición propia de MarkupCraft, pero non ao estilo escollido, non fai nada, e a barra de estado indica onde foi a súa ferramenta («En Revisión de PDF, Chamada é Q»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as frechas conservan sempre o seu significado. Mentres escribe nunha caixa de texto, chamada ou nota, todas as teclas son do texto, e os números escritos ao debuxar aínda abren a caixa de lonxitude.
:::

## Adáptao ao seu gusto

1. Escolla o estilo máis próximo ao que quere e prema {{ui:Personalizar…}}.
2. En {{ui:Teclas e menús}}, atope unha ferramenta (a caixa de busca axuda). Prema {{ui:Engadir unha chave}} e prema a tecla, ou dúas teclas seguidas para unha tecla de dúas letras. Faga clic nunha tecla para a quitar.
3. Coa barra de menús, {{ui:Onde está}} move a ferramenta a outro menú, ou a {{ui:Só teclas}}.
4. En {{ui:Rato}}, estableza a roda e os botóns que desprazan a folla.
5. Dea un nome e prema {{ui:Gardar}}.

Gardar un estilo integrado crea unha copia propia («A miña revisión de PDF»); o integrado nunca cambia. Unha tecla asignada a dúas ferramentas móstrase en vermello e hai que corrixila antes de poder gardar.

## Rato

- **Roda do rato**: {{ui:Desprazar cara arriba aumenta o zoom}} (o punto de partida) ou {{ui:Desprazar cara arriba reduce o zoom}}, e a velocidade. Un pinzamento no trackpad sempre fai zoom no sentido en que se moven os dedos.
- **Desprazar a folla con**: o botón central, o botón dereito, ou ambos. {{key:Space}} e arrastrar, e a ferramenta {{ui:Desprazar}}, despraza sempre; o botón esquerdo, doutro xeito, debuxa e selecciona, así que marcalo non cambia nada aquí.
- MarkupCraft non ten vista 3D, así que os botóns 3D non fan nada aquí.

## Lévao consigo

{{ui:Exportar}} garda o estilo en uso como un pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} engade un, desde outro ordenador ou desde un compañeiro. Un ficheiro importado só pode apuntar ás ferramentas propias de MarkupCraft: o que haxa de máis nel déixase fóra e cóntase na barra de estado. {{ui:Eliminar este estilo}} elimina un dos seus.

:::note
Estes axustes quedan neste navegador. {{ui:Usar este estilo en todas as aplicacións}} baixo as tarxetas de estilo fai que cada aplicación se abra co seu estilo equivalente: {{ui:Revisión de PDF}} vai cos estilos de barra de menús das outras aplicacións, {{ui:Cinta}} coas súas cintas, e a barra de ferramentas propia de MarkupCraft coas súas. Unha aplicación sen estilo equivalente conserva o seu.
:::

:::tip
As disposicións do espazo de traballo en {{ui:Configuración}} › {{ui:Global}} › {{ui:Disposición}} ({{ui:Disposición da cinta e do navegador do proxecto}}, {{ui:Caixa de ferramentas e caixa de información}}) constrúen a súa cinta coas lapelas do estilo {{ui:Cinta}} e a súa caixa de ferramentas coa barra de MarkupCraft, así que cada ferramenta funciona igual neles.
:::

Relacionado: [Teclado e rato](topic:keyboard) · [Configuración de MarkupCraft](topic:settings) · [Vir doutro software de anotación](topic:coming-from)
