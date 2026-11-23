---
title: Conceptos básicos de BCF
summary: Que contén unha exportación BCF desde MarkupCraft, como usala con ferramentas de coordinación BIM e os seus límites.
keywords: bcf, bcfzip, formato de colaboración BIM, incidencias, coordinación, colisión, temas, punto de vista, instantánea, openbim, buildingsmart, exportar incidencias
from: 0de26175
---

BCF (BIM Collaboration Format) é un formato de ficheiro aberto para pasar incidencias entre ferramentas BIM. Moitos programas de coordinación e de modelado de modelos poden importar un ficheiro `.bcfzip` como lista de incidencias. MarkupCraft escribe **BCF 2.1**.

## Como crear un

1. Abra a lingüeta {{ui:Anotacións}}.
2. Filtre a lista para o que queira enviar, por exemplo {{ui:Estado}} "Aberta". Só se exportan as anotacións listadas.
3. Escolla {{ui:BCF}}.
4. Espere mentres fai unha instantánea de cada anotación ("Facendo instantáneas para BCF (5 de 20)…").

Resultado: descárgase "<name> markups.bcfzip" e a barra de estado indica cantos temas contén e o tamaño do ficheiro.

## Que contén

Cada anotación convértese nun **tema**.

| Campo do tema | Cómo se enche |
|---|---|
| Título | Número de punch, asunto e folla, por exemplo "#4 Nube en A-101 — Planta" |
| Tipo | O tipo de anotación (Nube, Chamada, Lonxitude…) |
| Estado | Aberta, Aceptada, Rexeitada ou Completada |
| Etiquetas | O tipo de anotación e a folla |
| Autor e datas | O autor da anotación e as datas de creación e modificación |
| Asignada a, data límite | Da súa partida de punch, cando a ten |
| Descrición | O seu texto ou o texto do selo, o valor medido, o comentario e a folla e o ficheiro |
| Comentarios | Un por resposta, con autor e data |
| Instantánea | Unha imaxe da anotación na súa parte da folla |
| Punto de vista | Unha vista desde arriba do lugar da anotación na folla |

Volver exportar a mesma anotación dá o mesmo ID de tema, así que unha ferramenta que importe BCF pode recoñecela como a mesma incidencia.

## Que volve ao importar

{{ui:Importar BCF}} lee ficheiros BCF 2.0, 2.1 e 3.0 (comprobado nos 19 ficheiros de proba oficiais de buildingSMART 3.0: leuse cada tema e os comentarios dos tres que teñen texto). Para un tema que é dos seus (mesmo ID de tema), engade os comentarios novos como respostas e toma o estado novo. Calquera outro tema convértese nunha nota na folla que nomea a súa etiqueta ou o nome do ficheiro; se non, na folla aberta, con título, descrición, persoa asignada e data límite como texto da nota, e cos seus comentarios como respostas.

| No tema BCF | En MarkupCraft |
|---|---|
| Título, descrición, persoa asignada, data límite | O texto da nota |
| Comentarios con texto | Respostas |
| Estado Open, Accepted, Rejected, Completed (Closed, Resolved e Done contan como Completed) | O estado da anotación |
| Autor e data de creación | O autor e a data da nota |
| Posición da cámara | Un lugar na folla, só para un tema ligado a unha folla por etiqueta ou nome de ficheiro |
| Selección do modelo, partes ocultas, planos de corte, instantáneas | Non se conserva: unha folla non ten modelo no que mostralos |

## Límites que hai que coñecer

- **Unha folla non é un modelo.** O punto de vista sinala a posición da anotación sobre o papel, medida en metros de papel. Non leva unha ferramenta BIM a un lugar do modelo. Use a instantánea e o nome da folla para atopar o sitio.
- **Os estados e os tipos son propios de MarkupCraft** (Aberta, Aceptada, Rexeitada, Completada; Nube, Chamada…). O ficheiro os declara, como permite BCF, pero unha ferramenta con listas fixas propias pode asignarlles outros valores ou ignoralos.
- **Importar trae comentarios, non vistas do modelo.** {{ui:Importar BCF}} engade respostas e estados ás anotacións que exportou e crea notas doutras incidencias; non pode mostrar unha cámara do modelo. Consulte [Lista de anotacións e exportación](topic:markups-list-and-export#import-bcf).
- Enviar as anotacións de volta en PDF adoita ser máis sinxelo para as revisións de debuxos. BCF serve para levar os comentarios de debuxo a un fluxo de coordinación de modelos.
