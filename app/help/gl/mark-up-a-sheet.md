---
title: Anotar unha folla
summary: Debuxe nubes de revisión, chamadas, caixas de texto, frechas, formas, trazos de pluma e realces, e defina a súa cor e liña antes ou despois.
keywords: anotación, marcado en vermello, nube, nube de revisión, chamada, directriz, caixa de texto, frecha, liña, rectángulo, elipse, círculo, polilínea, polígono, pluma, a man alzada, tinta, realce, cor, largura de liña
from: 9d6de0ac
---

Todas as ferramentas funcionan igual: escóllaa, debuxe na folla, e a nova anotación queda seleccionada para que a vexa en {{ui:Propiedades}}. A ferramenta mantense activa para a seguinte. A barra de estado indica sempre o que espera a ferramenta a continuación.

:::touch
Nunha pantalla táctil, use un dedo para debuxar. Un segundo dedo cancela o que comezou o primeiro e, en vez diso, pinza ou despraza, así que nunca deixa unha marca por accidente ao facer zoom. Máis en [Revisión nun iPad ou pantalla táctil](topic:review-on-a-tablet).
:::

## Nubes de revisión

**Nube de caixa:** escolla {{ui:Nube}} ({{key:C}}) e arrastre unha caixa. Manteña {{key:Shift}} para que sexa cadrada.

**Nube libre** arredor dunha forma irregular:

1. Escolla {{ui:Nube libre}} ({{key:Shift+C}}).
2. Faga clic en cada esquina da área.
3. Remate cun dobre clic, con {{key:Enter}} ou cun clic dereito. En tacto, faga dobre toque.

Mentres fai clic nos puntos, {{key:Backspace}} elimina o último punto e {{key:Esc}} cancela toda a forma. Manteña {{key:Shift}} para que o lado seguinte quede nun múltiplo de 45°. Unha nube libre necesita polo menos tres puntos.

As ondulacións sempre sobresaen cara a fóra e o seu tamaño segue a largura da liña: unha liña máis grosa dá arcos máis grandes.

## Chamadas

Unha chamada é unha caixa de texto cunha directriz que apunta a algo.

1. Escolla {{ui:Chamada}} ({{key:K}}).
2. Prema sobre o punto que quere chamar e arrastre ata onde debe ir o texto. Solte.
   Se só fai clic sen arrastrar, a caixa sitúase enriba e á dereita do punto.
3. Escriba o texto. A caixa crece cara abaixo ao quebrarse as liñas.
4. Faga clic en calquera lugar fóra da caixa, ou prema {{key:Mod+Enter}}, para rematar. {{key:Esc}} descarta a chamada.

Se remata sen escribir nada, non se engade ningunha chamada («Non se escribiu nada, así que non se engadiu ningunha chamada.»).

Despois de debuxala, selecciónea para mover a caixa, arrastrar a punta da directriz ou a súa curva (os dous controladores en forma de rombo), ou cambiar o tamaño da caixa.

## Caixas de texto

1. Escolla {{ui:Texto}} ({{key:T}}).
2. Faga clic onde empeza o texto (obterá unha caixa dun ancho razoable), ou arrastre unha caixa do tamaño que queira.
3. Escriba, e despois faga clic fóra ou prema {{key:Mod+Enter}}.

O texto non ten bordo por defecto. Para darlle un, aumente {{ui:Largura de liña}} en {{ui:Propiedades}}. Para darlle un fondo, marque {{ui:Recheo}}.

Para cambiar as palabras máis tarde: con {{ui:Seleccionar}} activo, faga dobre clic no texto, ou seleccióneo e prema {{key:Enter}}, ou escolla {{ui:Editar na folla}} en {{ui:Propiedades}}. Tamén pode editalo na caixa {{ui:Texto}} en {{ui:Propiedades}}.

## Frechas e liñas

1. Escolla {{ui:Frecha}} ({{key:A}}) ou {{ui:Liña}} ({{key:L}}).
2. Arrastre desde o inicio ata o final. Ou faga clic no inicio, solte, e faga clic no final.
3. Manteña {{key:Shift}} para que quede nun múltiplo de 45°.

A punta da frecha está no extremo onde rematou.

## Rectángulos, elipses, polilíneas e polígonos

- {{ui:Rectángulo}} ({{key:R}}) e {{ui:Elipse}} ({{key:E}}): arrastre unha caixa. {{key:Shift}} fai un cadrado ou un círculo. Un clic sen arrastrar non debuxa nada, e a barra de estado indica que hai que arrastrar.
- {{ui:Polilínea}} ({{key:Y}}) e {{ui:Polígono}} ({{key:G}}): faga clic nos puntos; remate cun dobre clic, con {{key:Enter}} ou cun clic dereito (dobre toque en tacto). {{key:Backspace}} elimina o último punto. Un polígono péchase só e necesita tres puntos; unha polilínea necesita dous.

## Pluma e realce

- {{ui:Pluma}} ({{key:P}}): arrastre para debuxar a man alzada. O trazo suavízase un pouco ao soltar.
- {{ui:Realce}} ({{key:I}}): o mesmo, cun trazo amarelo, ancho e transparente que tinxe o debuxo que hai debaixo en vez de tapalo.
- Manteña {{key:Shift}} mentres debuxa para obter un único trazo recto desde o punto de inicio.

O realce é un trazo a man alzada. Non se axusta ao texto do PDF.

## Cor, liña e recheo

Hai dous xeitos:

- **Antes de debuxar:** escolla a ferramenta. Sen nada seleccionado, {{ui:Propiedades}} mostra os axustes da ferramenta «<ferramenta>»: {{ui:Cor}}, {{ui:Largura de liña}} (en puntos), {{ui:Recheo}} e {{ui:Opacidade do recheo}} para as formas pechadas, {{ui:Opacidade}}, e {{ui:Tamaño do texto}} para o texto. Cada nova anotación dese tipo usa estes axustes, e MarkupCraft lembrábeos neste navegador.
- **Despois de debuxar:** seleccione unha ou varias anotacións e cambie os mesmos controis baixo «Estilo». Con varias seleccionadas, o cambio aplícase a todas nun só paso.

Os valores por defecto: anotacións en vermello, un realce amarelo, medicións en azul, recontos en laranxa e selos coloreados segundo o seu significado.

Os aspectos gardados que reutiliza a diario pertencen ao caixón de ferramentas: vexa [O caixón de ferramentas](topic:tool-chest).

## Asunto e comentario

Cada anotación tamén ten un {{ui:Asunto}} (unha etiqueta curta, como «Nube» ou «RFI», que se mostra na lista de anotacións e noutros visores de PDF) e un {{ui:Comentario}} (notas máis longas). Cubra ambos en {{ui:Propiedades}}. Para unha conversa sobre unha anotación, use respostas: vexa [Estados e respostas](topic:statuses-and-replies).

## Seguinte

- [Seleccionar, mover e cambiar anotacións](topic:select-and-edit)
- [Selos e notas](topic:stamps-and-notes)
- [Cada tipo de anotación](topic:markup-types)
