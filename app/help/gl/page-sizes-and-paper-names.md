---
title: Tamaños de páxina e nomes do papel
summary: Vexa o tamaño de cada páxina PDF en milímetros e polgadas e o seu nome de papel (series A, B e C, ANSI, ARCH), e agrupe un conxunto mixto por tamaño para atopar as páxinas raras.
keywords: tamaño de páxina, tamaño do papel, nome do papel, a0, a1, a2, a3, a4, serie B, serie C, ansi, arch, arquitectónico, mm, polgadas, tamaño personalizado, por tamaño, tamaño raro, conxunto mixto, comprobar pdf, cliente, incidencia, mediabox, cropbox, rotación
from: 08e1354f
---

Antes de enviar un conxunto ao cliente, comprobe que cada folla ten o tamaño que debe ter. {{ui:MarkupCraft}} le o tamaño de cada páxina do propio PDF e dálle nome ao papel.

## Que fará

Vexa o tamaño dunha folla e despois agrupe todo o conxunto por tamaño.

## Pasos

1. Abra os PDF ({{ui:Abrir}}), despois prema {{key:Esc}} ata que non haxa nada seleccionado e {{ui:Seleccionar}} estea activo.
2. Mire {{ui:Propiedades}}. {{ui:Papel}} indica o nome e o sentido, por exemplo "A4, vertical". {{ui:Tamaño}} dá os milímetros e as polgadas.
3. Cada fila da lista {{ui:Follas}} ten unha liña de tamaño debaixo do nome da folla.
4. Escolla {{ui:Por tamaño}} no encabezado de {{ui:Follas}}. A lista agrupa as follas baixo un título por tamaño, comezando polo grupo máis grande. Un tamaño con só algunhas follas márcase como un caso raro.
5. Escolla de novo {{ui:Por tamaño}} para volver á orde propia do conxunto.

Resultado: unha páxina de tamaño distinto ao resto vese facilmente antes de enviar o conxunto.

## Como se escolle o nome

- O tamaño sae da caixa da páxina no PDF, con a rotación aplicada; así, un A3 en horizontal segue sendo A3.
- Os nomes son as series A e B (ISO 216), a serie C (ISO 269), ANSI A a E e ARCH A a E.
- Unha páxina a menos de 2 mm dun tamaño con nome toma ese nome. Calquera outra páxina indica {{ui:personalizado}}, e {{ui:Tamaño con nome máis próximo}} indica cal é o tamaño máis próximo e a diferenza.
- As polgadas saen do tamaño real da páxina, así que unha páxina A4 mide 8,26 por 11,69 in.

## Nos ficheiros que garda

O resumo en folla de cálculo ({{ui:Lista de anotacións}}, despois a folla de cálculo) ten unha columna {{ui:Tamaño do papel}} na folla {{ui:Por folla}} e unha folla de traballo {{ui:Tamaños de páxina}}. O informe PDF ten unha liña «Tamaños de páxina» co número de cada tamaño.

:::note
Os valores en polgadas de ANSI e ARCH se introduciron a partir das táboas publicadas e non se compararon cos estándares impresos. Trate unha páxina «personalizada» que estea preto dun deles como algo que debe comprobar vostede.
:::
