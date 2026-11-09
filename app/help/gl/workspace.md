---
title: Un percorrido pola pantalla
summary: A barra de ferramentas, a lista de follas, a área da folla, os cinco paneis da dereita e a barra de estado, polos seus nomes en pantalla.
keywords: pantalla, disposición, barra de ferramentas, paneis, barra lateral, miniaturas, propiedades, barra de estado, interface, pantalla completa, tema, modo escuro
from: 18d82de6
---

MarkupCraft ocupa toda a xanela do navegador. De arriba abaixo e de esquerda a dereita:

## A barra superior

A fina barra enriba de todo pertence á familia CadCraft, non a MarkupCraft en si. Ten:

- o nome da aplicación e a versión que está a usar,
- {{ui:About MarkupCraft}}, que abre a páxina da aplicación no sitio web,
- {{ui:Help}}, que abre esta axuda nun panel lateral (ou prema {{key:F1}}),
- {{ui:Save for offline}}, que mantén MarkupCraft, o seu lector e escritor de PDF e esta axuda neste navegador para que se abra sen conexión; entón di "Listo sen conexión" (vexa [Traballar sen conexión](common:offline)),
- o botón de modo de pantalla ({{ui:Full screen}}), e
- {{ui:Settings}} (ou {{key:Mod+,}}), con unha lapela {{ui:MarkupCraft}} para as opcións desta aplicación e {{ui:General}} para as que comparten todas as aplicacións CadCraft (vexa [Configuración de MarkupCraft](topic:settings)), e
- {{ui:Paper}} e {{ui:Model}}, os temas claro e escuro. En {{ui:Model}} as follas debúxanse en claro sobre escuro; as súas anotacións conservan as súas propias cores.

O botón de modo de pantalla, ou {{key:Ctrl+Shift+F}}, pasa por tres modos: normal, pantalla completa e pantalla completa coas barras ocultas. Coas barras ocultas, mova o punteiro ata o bordo superior da pantalla (ou toque alí) e volverán aparecer. Este atallo usa a tecla Control en todos os computadores, tamén nos Mac.

:::note
En pantalla completa, {{key:Esc}} tamén fai que o navegador saia da pantalla completa. Se só quería cancelar un debuxo, prema de novo {{key:Ctrl+Shift+F}} para volver á pantalla completa.
:::

## A barra de ferramentas

Debaixo da barra superior, as ferramentas están agrupadas e etiquetadas:

| Grupo | Botóns |
|---|---|
| Ficheiro | {{ui:Open}}, {{ui:Save}}, {{ui:Close}} |
| Seleccionar | {{ui:Select}}, {{ui:Pan}} |
| Debuxar | {{ui:Pen}}, {{ui:Highlight}}, {{ui:Line}}, {{ui:Arrow}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Polyline}}, {{ui:Polygon}} |
| Revisar | {{ui:Cloud}}, {{ui:Free cloud}} |
| Anotar | {{ui:Callout}}, {{ui:Text}}, {{ui:Note}}, {{ui:Stamp}} |
| Medir | {{ui:Calibrate}}, {{ui:Length}}, {{ui:Area}}, {{ui:Count}} |
| Editar | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, e {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |

A ferramenta que está usando parece premida. Deixe o punteiro sobre un botón para ver a súa tecla (por exemplo "Rectángulo (R)"); o menú {{ui:More}} lista a tecla de cada comando xunto a el. Os botóns que non poden actuar agora aparecen atenuados: {{ui:Copy}} ata que seleccione unha anotación, e {{ui:Paste}} ata que se copie algo. Un pequeno punto despois de {{ui:Save}} indica que hai anotacións sen gardar. A lista completa de teclas está en [Teclado e rato](topic:keyboard).

Unha ferramenta segue activa despois de debuxar con ela, así que pode debuxar varias nubes seguidas. Prema {{key:Esc}} (dúas veces se a nova anotación aínda está seleccionada) ou {{key:V}} para volver a {{ui:Select}}.

## A lista de follas (á esquerda)

{{ui:Sheets}} lista cada páxina de cada PDF aberto. Cada fila mostra unha pequena imaxe da folla, o seu nome, o seu número de folla ou o ficheiro e a páxina, e cantas anotacións ten. O número despois do título é o número de follas.

- Prema nunha fila para mostrar esa folla.
- Escriba en {{ui:Search sheets}} para filtrar por nome de folla, número de folla ou nome de ficheiro. Prema {{key:Enter}} para abrir a primeira coincidencia.

Os nomes das follas proceden do PDF cando os ten. Vexa [Abrir un conxunto de planos e moverse entre follas](topic:open-a-plan-set).

## A área da folla (no centro)

A folla na que traballa. Antes de abrir nada mostra "Abra un conxunto de planos" cun botón {{ui:Open PDFs}}. Solte PDF en calquera parte desta área para abrilos.

Debaixo da folla, unha barra estreita ten:

- as frechas da folla anterior e seguinte, e "3 de 12: A-101 — Planta baixa" (sitúe o punteiro sobre ela para ver o ficheiro e a páxina),
- diminuír o zoom, a caixa de zoom (escriba unha porcentaxe e prema {{key:Enter}}; o 100 % é o tamaño real nunha pantalla típica), aumentar o zoom,
- {{ui:Fit page}} e {{ui:Fit width}}.

Cada folla lembra o seu propio zoom mentres o conxunto está aberto.

Cando compara dúas follas, aparece aquí unha lenda: "Só na folla antiga", "Só na folla nova" e "En ambas". Vexa [Comparar dúas revisións](topic:compare-revisions).

## Os paneis (á dereita)

Cinco lapelas:

| Lapela | Que mostra |
|---|---|
| {{ui:Properties}} | A anotación seleccionada: autor, datas, valores medidos, estado, asunto, texto, comentario, estilo, as súas respostas e o seu elemento de pendente. Con unha ferramenta de debuxo activa e nada seleccionado, os axustes que usarán as novas anotacións. Con nada seleccionado e {{ui:Select}} activo, a folla: número, título, de onde se leu o nome, tamaño do papel, escala e {{ui:Rename sheet}}. |
| {{ui:Markups}} | Cada anotación do conxunto aberto, con filtros, e as exportacións {{ui:CSV}} e {{ui:BCF}}. Vexa [A lista de anotacións](topic:markups-list-and-export). |
| {{ui:Punch list}} | Elementos de pendente numerados, con responsable, data de vencemento e estado. Vexa [Facer unha lista de pendentes](topic:punch-list). |
| {{ui:Tools}} | A caixa de ferramentas: ferramentas gardadas e con estilo. Vexa [A caixa de ferramentas](topic:tool-chest). |
| {{ui:Compare}} | Superpoñer dúas follas. Vexa [Comparar dúas revisións](topic:compare-revisions). |

## A barra de estado (abaixo)

- A esquerda, onde está o punteiro sobre a folla, en polgadas (ou en milímetros, nos [Axustes](topic:settings)) sobre o papel.
- No centro, mensaxes: o que espera unha ferramenta a continuación, o que se acaba de gardar, por que se rexeitou algo. **Léaa cando algo non ocorra.**
- O botón de escala da folla ("Sen calibrar", ou a escala). Prema nel para fixar a escala. Vexa [Calibrar unha folla e medir](topic:calibrate-and-measure).
- O seu nome ("Definir o seu nome" ata que lle dea un). Prema nel para cambialo.

## Nunha pantalla pequena

Por debaixo de uns 1180 píxeles de ancho, os paneis fanse máis estreitos e as imaxes das follas encóllense. Nunha pantalla do tamaño dun teléfono as partes apílanse: a barra de ferramentas (que se desprace lateralmente), a folla, a barra de estado, os paneis e, ao final, a lista de follas. Unha tableta en horizontal mantén a disposición completa.
