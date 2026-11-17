---
title: A lista de anotacións, filtros e exportacións
summary: Vexa todas as anotacións do conxunto, filtre por folla, autor, estado e tipo, vaia a unha delas e exporte a lista como CSV ou BCF.
keywords: lista de anotacións, lista, resumo, xlsx, libro de cálculo, libro, informe PDF, importar bcf, filtrar, ordenar, informe, exportar, csv, folla de cálculo, bcf, bcfzip, incidencias, lista de comentarios, ir a
from: 6c70261e
---

## Abrir a lista

Escolla a lapela {{ui:Anotacións}} á dereita. Listase cada anotación de cada ficheiro aberto, por orde de folla e despois pola orde en que se fixeron. Cada fila mostra:

- unha icona na cor da anotación, o seu número de pendente se o ten («#4»), e o seu asunto,
- o seu texto, o texto do selo ou o valor medido, e o seu comentario,
- a folla, o autor e a data,
- o seu estado (ou «Só lectura» para os comentarios que chegaron co ficheiro), e un contador de respostas cando as ten.

A liña sobre a lista contaas: «38 anotacións», ou «12 de 38 anotacións» cando hai filtros.

## Ir a unha anotación

Faga clic nunha fila. MarkupCraft mostra esa folla, selecciona a anotación e fai zoom sobre ela cando está fóra da pantalla ou é demasiado pequena para verse. {{ui:Propiedades}} mostra os seus detalles e a conversa cando volve a esa lapela.

## Filtrar

Catro menús enriba da lista. Combínanse entre si.

| Menú | Opcións |
|---|---|
| {{ui:Folla}} | Todas as follas, Esta folla (segue a folla en que está), ou calquera folla que teña anotacións |
| {{ui:Autor}} | Calquera, ou cada autor do conxunto |
| {{ui:Estado}} | Calquera estado, Aberto, Aceptado, Rexeitado, Completado |
| {{ui:Tipo}} | Calquera tipo, ou cada tipo de anotación do conxunto |

Exemplos:

- O que segue aberto nesta folla: {{ui:Folla}} «Esta folla», {{ui:Estado}} «Aberto».
- Os comentarios dunha persoa consultora: {{ui:Autor}} o seu nome.
- Todas as medicións: {{ui:Tipo}} «Lonxitude» ou «Superficie».

A lista mostra ata 2000 filas; nos conxuntos moi grandes, reduza a lista cun filtro.

## Exportar a CSV

Escolla {{ui:CSV}} na parte superior da lapela. Obterá «<name> markups.csv» coas anotacións tal como están filtradas agora, unha por fila, coas seguintes columnas:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- «Text» contén as palabras das caixas de texto e das chamadas, o texto dun selo ou o nome dun grupo de contar.
- «Measurement» contén as lonxitudes, «area, perimeter» para as superficies e «group: n» para os recontos.
- As datas son marcas de tempo completas en UTC.

Para exportar todo, primeiro devolva cada filtro á súa primeira opción.

## Unha lenda na folla

{{ui:Lenda}} na lapela {{ui:Anotacións}} pon unha lenda na parte superior dereita do que vostede ve: unha caixa que enumera cada tipo de anotación da folla (por asunto e cor, como «Nube», «Pregunta» ou «Tomas») con cantas hai. Un grupo de contar conta as súas marcas. A lenda segue contando mentres debuxa, move ou elimina anotacións, e imprímese e gárdase cos recontos dese momento.

Muévaa e cambie o seu tamaño como calquera anotación. En as súas {{ui:Propiedades}}, cambie o seu {{ui:Título}}, ou estableza {{ui:Recontos}} en {{ui:Todo o conxunto}} para contar todas as follas. Os espazos, outras lendas e os comentarios doutros programas non se contan.

## As súas propias columnas e a ordenación

{{ui:Columnas}} na lapela {{ui:Anotacións}} engade columnas propias a cada anotación: un texto, unha opción (como Oficio: Mecánica, Eléctrica, Fontanería), un número (como Custo) ou unha data. Dálle a cada unha un nome, escolla o seu tipo, indique as opcións nunha columna de opción e escolla {{ui:Gardar columnas}}.

- Cubra as columnas en {{ui:Propiedades}}: cada columna ten alí un campo. Unha columna de número admite só números; unha columna de data, só unha data.
- A lista mostra os valores de cada anotación, o filtro {{ui:Columna}} escolle un valor (ou as anotacións onde está baleiro), e {{ui:Ordenar}} ordena a lista por unha columna, por autor, estado, tipo ou data, en vez de por folla.
- As exportacións a CSV e XLSX levan as columnas despois das habituais. As columnas gárdanse co PDF e volven cando o reabre.

## Exportar un resumo: libro ou PDF

- {{ui:XLSX}} descarga «<name> markup summary.xlsx» con tres follas de cálculo: **{{ui:Anotacións}}** (unha fila por anotación listada, coas mesmas columnas que o CSV), **Por folla** (cantas anotacións ten cada folla, abertas e pechadas, e cantas hai de cada tipo, con totais) e **Lista de pendentes** (cando hai elementos pendentes).
- {{ui:PDF}} descarga «<name> markup summary.pdf»: un informe para imprimir ou enviar, co nome do conxunto, a data e unha táboa das anotacións listadas (número, folla, tipo, asunto, texto ou comentario, valor medido, autor, estado e a última resposta). O texto longo ajústase ao ancho; a cabeceira da táboa repítese en cada páxina.

Ambos usan a lista tal como está filtrada, así que filtre primeiro para informar dunha soa folla, dun só autor ou só dos elementos abertos.

## Exportar a BCF

Escolla {{ui:BCF}}. MarkupCraft fai unha imaxe de cada anotación listada na súa folla («Making snapshots for BCF (3 of 12)…»), e despois descarga «<name> markups.bcfzip». Cada anotación convértese nun tema BCF co seu estado, autor, datas, respostas como comentarios, persoa asignada e data límite do seu elemento de pendentes, e a instantánea.

Úseo para levar os comentarios de revisión dos debuxos ás ferramentas de coordinación BIM que len BCF. O que se conserva e o que non se conserva está en [Conceptos básicos de BCF](topic:bcf-basics).

## Importar BCF

{{ui:Importar BCF}} le un ficheiro .bcfzip (ou .bcf) dunha ferramenta BIM:

- As incidencias que proceden da exportación BCF propia de MarkupCraft atopan de novo as súas anotacións: engádense as respostas novas á conversa e defínese un estado novo («Closed» conta como Completado). As respostas que xa están non se engaden dúas veces.
- As demais incidencias convértense en notas, co seu título, descrición, autor e comentarios. Unha nota vai na folla cuxo número ou nome indican as etiquetas da incidencia; se non, na folla aberta. Unha cámara BIM non ten lugar no papel, así que estas notas se apilan na esquina superior esquerda da folla para que as mova.

Toda a importación é un só paso: {{key:Mod+Z}} a desfai. Vexa [Conceptos básicos de BCF](topic:bcf-basics).

## O que a lista aínda non fai

- Agrupar a lista (ordene, e despois filtre, en vez de iso).
- Editar os valores na lista (edite en {{ui:Propiedades}}; os campos de pendentes edítanse na lapela {{ui:Lista de pendentes}}).
