---
title: Crear unha lista de pendentes
summary: Converta anotacións en elementos pendentes numerados cun responsable, unha data límite e un estado, e exporte a lista.
keywords: lista de pendentes, pendente, lista de defectos, deficiencia, incidencias de campo, observación, asignar, responsable, data límite, peche de obra, recorrido, número
from: b98b38e6
---

Un elemento pendente é unha anotación cun número, un responsable, unha data límite e un estado do elemento. O número debúxase na folla xunto á anotación, para que a folla impresa e a lista coincidan.

## Engadir elementos

1. Anote cada incidencia nas follas: unha nube, unha chamada, unha nota, calquera cousa.
2. Seleccione unha ou varias delas (vexa [Seleccionar, mover e cambiar anotacións](topic:select-and-edit)).
3. Abra a lapela {{ui:Lista de pendentes}} e escolla {{ui:Engadir o seleccionado á lista de pendentes}}, ou escolla {{ui:Engadir á lista de remates}} en {{ui:Propiedades}}.

Resultado: cada anotación recibe o seguinte número (1, 2, 3…), por orde de folla e despois pola orde en que se debuxaron. Aparece unha insignia numerada na folla, e a barra de estado di "Engadíronse 3 elementos á lista de pendentes." As anotacións que xa teñen número, e os comentarios de só lectura, sáltanse.

## Completar os detalles

Na lapela {{ui:Lista de pendentes}}, cada elemento mostra o seu número, asunto, texto, folla e estado, con tres campos debaixo. Os mesmos campos están en {{ui:Propiedades}} baixo "Lista de pendentes" cando se selecciona a anotación:

- {{ui:Responsable}}: un nome ou oficio, como texto libre.
- {{ui:Vencemento}}: unha data, do selector de datas.
- {{ui:Estado do elemento}}: Aberto, En curso, Listo para revisión ou Pechado.

Faga clic no título dun elemento para ir ata el na súa folla.

O estado do elemento é distinto do estado de revisión da anotación (Aberta, Aceptada, Rexeitada, Completada). Use o estado do elemento para o traballo, e o estado de revisión para o comentario.

## Quitar un elemento

Seleccione a anotación e escolla {{ui:Quitar da lista de remates}} en {{ui:Propiedades}}. A anotación queda; só se quita o número. Mentres o conxunto está aberto, os números non se reutilizan: o seguinte elemento recibe o seguinte número novo, polo que un oco indica que se quitou un elemento. Cando se abre de novo un ficheiro, a numeración continúa despois do número máis alto que contén.

## Exportar a lista

Escolla {{ui:Exportar CSV}} na lapela {{ui:Lista de pendentes}}. Obtén "<name> punch list.csv" coas columnas No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author e Created, por orde de número. Ábrao con calquera folla de cálculo.

Os números de pendente, os responsables, as datas límite e os estados dos elementos gárdanse tamén dentro do PDF anotado, así que volven aparecer cando o reabre. Outros visores de PDF amosan a insignia do número como parte da anotación. A exportación BCF da lista de anotacións tamén inclúe o responsable e a data límite (vexa [Conceptos básicos de BCF](topic:bcf-basics)).

## No lugar cunha tableta

Abra o conxunto nun iPad, recorra a obra, e deixe unha {{ui:Nota}} ou debuxe unha {{ui:Nube}} en cada incidencia. Engádaas á lista de pendentes segundo avanza, e garde antes de marchar. Vexa [Revisar nun iPad ou pantalla táctil](topic:review-on-a-tablet).

Unha lista de pendentes como informe con formato en PDF ou folla de cálculo, e fotos adxuntas aos elementos, aínda non están dispoñibles.
