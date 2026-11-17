---
title: Novidades da 0.7 (anterior)
summary: RFIs, achegas e diarios de obra nunha nova lapela Campo, con datas de vencemento, atrasos en vermello, CSV e BCF, traballo sen conexión e Combinar; asistentes que fixan estados, responden e exportan a lista; listas de unidades que seguen a Configuración; paneis que se ordenan e diálogos que se moven.
keywords: novidades 0.7, versión anterior, notas de versión, rexistro de cambios, cambios, 0.7, versión, novas funcións, campo, rexistros de campo, rfi, solicitude de información, achega, diario de obra, diario de campo, vencido, data de vencemento, asignado a min, marca, combinar, sen conexión, tableta, bcf, csv, asistente, mcp, estado de anotación, resposta, exportar, unidades, listas de unidades, estrela, calibrar, compacto, paneis, diálogos, portugués
from: f8578677
---

Isto é o que cambiou en MarkupCraft 0.7, comparado coa 0.6. A gran novidade son os rexistros de campo: RFIs, achegas e diarios de obra gardados dentro do PDF, xunto ás súas anotacións.

## Novidades

### RFIs, achegas e diarios de obra

- **A lapela Campo.** Abra a lapela {{ui:Campo}} e escolla {{ui:RFI}}, {{ui:Achega}} ou {{ui:Diario de obra}}. Toque ou faga clic na folla onde corresponda un RFI ou unha achega e unha marca sinala o lugar; un diario de obra vai na folla aberta sen marca ({{ui:Colocar marca}} engade unha máis tarde, {{ui:Mover marca}} move calquera marca). Cada rexistro ten o seu propio número (RFI-0001, SUB-0001, LOG-0001), un título, texto, un estado, unha persoa asignada, unha data de vencemento, un fío de respostas e unha lista de nomes de anexos. Vexa [Seguir RFIs, achegas e diarios de obra](topic:field-records).
- **Vexa o que vai con atraso.** Filtre a lista por tipo, estado, data de vencemento (vencido, vence en 7 días, con ou sen data de vencemento), esta folla ou todas as follas, unha busca de texto ou {{ui:Asignado a min}}. Un rexistro pasada a súa data de vencemento que aínda está en espera márcase **Vencido**, en vermello, na lista e na súa marca. Vexa [Atopar o que importa](topic:field-records#find-what-matters).
- **CSV e BCF.** {{ui:CSV}} escribe os rexistros listados como unha táboa de cálculo; {{ui:BCF}} escríbeos como temas BCF, cada un cunha instantánea do seu lugar na folla. Ambos seguen os filtros. Vexa [Exportar](topic:field-records#export).
- **Sen conexión, e dúas copias feitas unha.** Os rexistros gárdanse dentro do PDF e non precisan rede, así que unha tableta na obra pode engadilos, respondelos e gardalos. De volta na oficina, {{ui:Combinar}} une os rexistros doutra copia do mesmo PDF polos seus identificadores, como un só paso de desfacer. Vexa [Gardar, traballar sen conexión e combinar copias](topic:field-records#save-offline-and-merging-copies).

### Asistentes de IA

- **Máis do que pode facer un asistente.** O seu propio asistente, conectado a través de CadCraft Studio, agora pode fixar o estado dunha anotación (`markup_status`, rexistrado no seu fío), responder nun fío (`markup_reply`) e exportar a lista {{ui:Anotacións}} como CSV ou BCF (`markups_export`, o que mostra a lista cos seus filtros). Cada cambio é un paso de desfacer, asinado co nome do asistente. Vexa [O que pode pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## En todas as aplicacións

- **Unidades.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Unidades}} ten unha lista para lonxitude, superficie, volume, ángulo e pendente, cos tamaños exactos que dan as definicións das unidades (o pé de topografía dos EUA é unidade propia). Desactive as unidades que nunca usa e saen das listas de unidades; marque unha cunha estrela e o traballo novo comeza con ela. Un ficheiro sempre conserva a súa propia unidade. En MarkupCraft, as unidades de medición e posición en {{ui:Configuración}} › {{ui:MarkupCraft}} e a unidade do diálogo de calibración seguen os interruptores, a estrela fixa a unidade de medición ata que garde a configuración propia de MarkupCraft, e a distancia real que escribe ao calibrar pode levar a marca de calquera unidade, como `3 yd` ou `1.5 km`. Vexa [Unidades, valores escritos e as listas de unidades](common:unit-lists).
- **Unha disposición máis densa e paneis que se recollen.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Densidade da disposición}} › {{ui:Compacta}} cabe máis na pantalla (as pantallas táctiles e os teléfonos conservan os seus botóns grandes). Cada panel lateral ten unha barra de título estreita: arrástrea para acoplar ou flotar o panel, solte sobre a barra doutro panel para compartir un marco como lapelas, fíxeo para que se desprace ata o bordo, ou ocúltao e tráeo de volta desde o bordo. Vexa [Organizar os paneis](common:arrange-panels#make-the-layout-denser).
- **Os diálogos móvense.** Arrastre un diálogo pola súa barra de título para sacalo do debuxo; volve ao lugar onde o deixou. Faga dobre clic na barra de título para centralo de novo. Vexa [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para asistentes de IA.** Dez peticións resoltas para o seu propio asistente (ordenar un debuxo, trazar un conxunto, revisar debuxos, facer preguntas sobre un modelo, sumar unha medición, probar unha variante de peza…), cada unha coas ferramentas que chama e os permisos que necesita, e cada unha repetida polas nosas probas. As aplicacións non conteñen IA. Vexa [Receitas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo en {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** teñen agora todas as palabras das aplicacións, como borradores aínda sen revisar por un falante nativo. Os temas de axuda están en inglés.
- **CadCraft Studio** di por que fallou a comprobación de actualizacións (aínda non hai ficheiro para o seu sistema, sen rede, unha sinatura non válida) en vez de só «Feito», e deixa de mostrar de novo unha tarxeta de Novidades que pechou ata que haxa unha versión máis nova.

## Aínda non nesta versión

- **A 0.7 non está asinada dixitalmente.** A sinatura e o paquete da Microsoft Store pasaron á 0.8 porque aínda non chegou a validación do certificado. Comprobe o SHA-256 xunto a cada ficheiro en getcadcraft.com/download. En Windows, se SmartScreen detén o instalador, escolla {{ui:Máis información}} e logo {{ui:Executar igualmente}}. Nun Mac, a primeira vez, prema co botón dereito en CadCraft Studio e escolla {{ui:Abrir}}. CadCraft Studio aínda non está nunha tenda de aplicacións, e aínda non hai versión para iPad nin para iPhone.
- As listas de ángulo e pendente en {{ui:Unidades}} gárdanse, pero aínda non as le ningún cálculo.
- Os rexistros de campo non se comparten nunha sesión en directo de CadCraft Studio (as sesións en directo só levan anotacións); xunte as copias con {{ui:Combinar}}.
- Combinar toma un rexistro enteiro da copia cambiada por último: se dúas persoas cambiaron campos distintos dun mesmo rexistro, prevalecen os campos da copia posterior. Os fíos e os nomes de anexos únense.
- Os anexos son só nomes; os ficheiros quedan onde están. Non hai equipos, notificacións nin proxectos na nube para os rexistros, e os asistentes aínda non teñen ferramentas para rexistros.
- Os rexistros de campo probáronse nun navegador, en tamaños de teléfono e tableta e sen rede, pero aínda non manualmente nunha tableta real.
- Aínda da 0.6: xirar os obxectos da páxina a calquera ángulo, debuxar formas novas directamente na páxina, cambiar a fonte ou o tamaño dunha liña e texto que flúe por varias liñas. Unha copia gardada con edicións de páxina aínda non se abriu en Acrobat.
- Aínda da 0.5: desfacer un cambio de páxina (como engadir unha páxina en branco), ler texto de follas escaneadas e sesións en directo fóra da súa propia rede.

O resto está en [O que aínda non está construído](topic:not-built-yet).
