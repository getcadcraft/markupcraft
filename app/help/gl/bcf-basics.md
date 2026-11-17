---
title: Básicos de BCF
summary: Que contén unha exportación BCF de MarkupCraft, como usala con ferramentas de coordinación BIM e os seus límites.
keywords: bcf, bcfzip, formato de colaboración BIM, incidencias, coordinación, colisión, temas, punto de vista, instantánea, openbim, buildingsmart, exportar incidencias
from: 446f38c1
---

BCF (BIM Collaboration Format) é un formato de ficheiro aberto para pasar incidencias entre ferramentas BIM. Moitos programas de coordinación e modelado de modelos poden importar un ficheiro `.bcfzip` como lista de incidencias. MarkupCraft escribe **BCF 2.1**.

## Crear un ficheiro

1. Abra a lapela {{ui:Anotacións}}.
2. Filtre a lista co que quere enviar, por exemplo {{ui:Estado}} "Aberta". Só se exportan as anotacións listadas.
3. Escolla {{ui:BCF}}.
4. Agarde mentres fai unha instantánea de cada anotación ("Facendo instantáneas para BCF (5 de 20)…").

Resultado: descárgase "<name> markups.bcfzip" e a barra de estado indica cantos temas contén e o tamaño do ficheiro.

## Que contén

Cada anotación convértese nun **tema**:

| Campo do tema | Cómo se enche |
|---|---|
| Título | Número de pendente, asunto e folla, por exemplo "#4 Nube en A-101 — Planta" |
| Tipo | O tipo de anotación (Nube, Chamada, Lonxitude…) |
| Estado | Aberta, Aceptada, Rexeitada ou Completada |
| Etiquetas | O tipo de anotación e a folla |
| Autor e datas | O autor da anotación, e as datas de creación e de modificación |
| Asignado a, data límite | Do seu elemento de lista de pendentes, cando o ten |
| Descrición | O seu texto ou a redacción do selo, o valor medido, o comentario, e a folla e o ficheiro |
| Comentarios | Un por resposta, con autor e data |
| Instantánea | Unha imaxe da anotación na súa parte da folla |
| Punto de vista | Unha vista desde arriba do lugar da anotación na folla |

Exportar de novo a mesma anotación dá o mesmo identificador de tema, polo que unha ferramenta que importe BCF pode recoñecela como a mesma incidencia.

## Límites a ter en conta

- **Unha folla non é un modelo.** O punto de vista apunta á posición da anotación no papel, medida en metros de papel. Non leva unha ferramenta BIM a un lugar do modelo. Use a instantánea e o nome da folla para atopar o lugar.
- **Os estados e os tipos son propios de MarkupCraft** (Aberta, Aceptada, Rexeitada, Completada; Nube, Chamada…). O ficheiro os declara, como permite BCF, pero unha ferramenta con listas fixas propias pode asignarlles outros valores ou ignorarlos.
- **Importar trae comentarios, non vistas do modelo.** {{ui:Importar BCF}} engade respostas e estados ás anotacións que exportou, e crea notas doutras incidencias; non pode mostrar unha cámara do modelo. Ver [Lista de anotacións e exportación](topic:markups-list-and-export#import-bcf).
- Enviar as anotacións de volta como PDF adoita ser máis sinxelo para revisións de debuxos. BCF serve para levar comentarios de debuxos a un fluxo de coordinación de modelos.
