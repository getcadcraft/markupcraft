---
title: Estados e respostas
summary: Marque cada comentario como Aberto, Aceptado, Rexeitado ou Completado, comente o nun fío de respostas e pase o fío no PDF.
keywords: estado, estado de revisión, aceptado, rexeitado, completado, aberto, resposta, respostas, fío, comentario, conversa, discusión, responder, comprobación
from: 0f3e8b91
---

Cada anotación ten un **estado** e un **fío de respostas**. Xuntos levan unha rolda de revisión: o revisor anota, o deseñador responde e define os estados, e o revisor comproba de novo.

## Definir un estado

1. Seleccione a anotación (ou varias).
2. En {{ui:Propiedades}}, escolla un {{ui:Estado}}: Aberto, Aceptado, Rexeitado ou Completado.

Resultado: o estado amósase como unha etiqueta na lista de {{ui:Anotacións}}, e engádese unha liña ao fío: "Estado definido como Aceptado por Ana Ruiz." Con varias anotacións seleccionadas, a caixa de estado di "Mixto" ata que escolla un, e entón cambia todas.

As anotacións novas comezan como Aberto. As anotacións pegadas ou duplicadas tamén comezan como Aberto.

## Responder

1. Seleccione a anotación.
2. En {{ui:Propiedades}}, busque "Respostas" debaixo dos axustes de estilo.
3. Escriba en {{ui:Escriba unha resposta}}.
4. Escolla {{ui:Resposta}}, ou prema {{key:Mod+Enter}}.

Resultado: a resposta aparece co seu nome, a data e a hora, e o título conta: "Respostas (3)". A lista de {{ui:Anotacións}} amosa un contador de respostas en cada fila.

- Os cambios de estado aparecen no mesmo fío e márcanse como entradas de estado, así que o historial se le en orde.
- Se comeza a escribir unha resposta e fai clic noutra cousa, o borrador consérvase ata que volva a esa anotación (ata que peche o conxunto).
- Se o seu nome non está definido, MarkupCraft pídeo antes de enviar.
- Tamén pode responder aos comentarios só de lectura que viñeron co ficheiro.

:::note
Unha resposta non se pode editar nin eliminar unha vez enviada. Logo de enviala, {{key:Mod+Z}} a retira; despois diso, engada unha nova resposta que corrixa a anterior.
:::

## Engadir unha foto

Debaixo da caixa de respostas, {{ui:Engadir foto}} engade unha imaxe ao fío: un PNG ou JPEG deste ordenador, ou, nunha tableta ou teléfono, unha foto que tome alí no momento. O que escribiu na caixa de respostas convértese no seu pé de foto. O fío amosa unha miniatura; escóllaa para ver a foto a tamaño completo. As fotos grandes redúcense a 1600 píxeles no seu lado máis longo.

No PDF gardado, cada foto viaxa tamén como ficheiro anexo xunto á anotación (cun clip), para que outros visores de PDF a poidan abrir.

## Pasar a revisión

Aínda non hai unha sesión compartida en liña: a revisión viaxa no PDF.

1. Escolla {{ui:Gardar}}. A copia contén todas as anotacións cos seus estados e respostas.
2. Envíe esa copia do xeito que envía os planos hoxe.
3. A seguinte persoa ábrea en MarkupCraft, responda, defina estados e volva gardar.

Outros programas de PDF ven as respostas como respostas ao comentario, e os estados como estados de revisión (Aceptado, Rexeitado, Completado; Aberto non se amosa como estado). As súas propias respostas e estados de revisión volven a MarkupCraft ao abrir o ficheiro: gaña o estado máis recente.

Se dúas persoas anotan copias distintas ao mesmo tempo, non hai fusión. Pode abrir as dúas copias nun conxunto e copiar algunhas anotacións con {{key:Mod+C}} e {{key:Mod+V}}, pero unha copia pegada é unha anotación nova: leva o seu nome, unha data nova e o estado Aberto, e cae un pouco desprazada. Acorden quen anota que follas para evitalo.

## Atopar o que segue aberto

No separador {{ui:Anotacións}}, defina {{ui:Estado}} como "Aberto" para listar só os elementos abertos, e {{ui:Autor}} para un revisor. Vexa [A lista de anotacións](topic:markups-list-and-export).

O estado (Aberto, Aceptado, Rexeitado, Completado) refírese ao comentario. Un elemento de lista de remate ten o seu propio estado separado para o traballo en obra; vexa [Facer unha lista de remate](topic:punch-list).
