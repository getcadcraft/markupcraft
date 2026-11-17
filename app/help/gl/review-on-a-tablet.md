---
title: Revisar nun iPad ou pantalla táctil
summary: Pellizque, desprace e debuxe cos dedos ou cun lapis, o que actúa ao levantar o dedo, o que precisa teclado, e como manter o seu traballo a salvo nunha tableta.
keywords: ipad, tableta, tacto, pantalla táctil, pellizcar, zoom, dous dedos, Apple Pencil, lapis, dedo, campo, obra, superficie, xestos, móbil
from: 91eb6438
---

MarkupCraft funciona con tacto: nun iPad (Safari ou Chrome), nun portátil con pantalla táctil, ou nunha tableta Windows ou Android cun navegador recente. En horizontal, unha tableta amosa a disposición completa.

## Xestos

| Xesto | Que fai |
|---|---|
| Un dedo | Debuxa coa ferramenta actual, ou selecciona con {{ui:Seleccionar}} |
| Dous dedos, separados ou pellizcados | Fai zoom arredor do punto entre os dedos |
| Dous dedos, movidos xuntos | Despraza; pode facer zoom e desprazar nun só movemento |
| Un segundo dedo mentres debuxa | Cancela o que comezou o primeiro dedo e comeza a facer zoom |
| Dobre toque, ou tocar e manter | Finaliza unha polilínea, un polígono, unha nube libre ou unha superficie |
| Tocar e manter un texto, unha chamada ou unha nota, con {{ui:Seleccionar}} | Abre o seu texto para editalo |
| Un dedo con {{ui:Desprazar}} activo | Despraza |

Nunha pantalla táctil os botóns da barra de ferramentas, os menús, as lapelas e os botóns dos diálogos son máis grandes, así que son fáciles de tocar cun dedo.

## Que pasa ao levantar

Para que o primeiro dedo dun pellizco nunca deixe marca, algunhas ferramentas actúan cando **levanta** o dedo, e non cando toca:

- {{ui:Contar}}: o punto engádese ao levantar.
- {{ui:Nota}}: a nota colócase ao levantar.
- {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}} e {{ui:Superficie}}: cada punto engádese ao levantar.
- {{ui:Liña}}, {{ui:Frecha}}, {{ui:Lonxitude}} e {{ui:Calibrar}}: cando toca o inicio e despois toca o final, o final colócase ao levantar.

Se o dedo esvara máis dun pouco antes de levantalo, non conta como toque e non se engade nada. Toque limpo; para corrixir, use {{ui:Desfacer}}.

As ferramentas que arrastra ({{ui:Pluma}}, {{ui:Realce}}, {{ui:Nube}}, {{ui:Rectángulo}}, {{ui:Elipse}}, {{ui:Chamada}}, {{ui:Texto}}, {{ui:Selo}}) comezan en canto toca; un segundo dedo cancélaas.

## Seleccionar cun dedo

- Toque unha anotación para seleccionala; arrástreaa para movela; arrastre un controlador para cambiarlle o tamaño. Despois de que un dedo toque a folla, as anotacións e os controladores teñen un obxectivo máis grande, e os controladores debúxanse máis grandes.
- Arrastre sobre a folla baleira para debuxar unha xanela de selección (de esquerda a dereita: totalmente dentro; de dereita a esquerda: tocando).
- En {{ui:Seleccionar}}, un dedo **non** despraza. Use dous dedos, ou escolla {{ui:Desprazar}}.

## Cousas que precisan teclado

Sen teclado non hai {{key:Shift}}, {{key:Esc}} nin {{key:Enter}}. Isto é o que hai que facer no seu lugar:

| Acción de teclado | Sen teclado |
|---|---|
| {{key:Esc}} para cancelar ou volver a Seleccionar | Toque {{ui:Seleccionar}} na barra de ferramentas |
| {{key:Shift}} para liñas de 45°, cadrados e círculos | Debuxe con coidado; axuste cos controladores |
| {{key:Shift}}-clic para engadir á selección | Use unha xanela de selección |
| {{key:Shift}}-clic para quitar un punto de contaxe | {{ui:Desfacer}} xusto despois dun toque equivocado |
| {{key:Mod+Enter}} para rematar de escribir | Toque fóra da caixa de texto |
| {{key:Enter}} para rematar unha polilínea, ou para editar o texto dunha anotación | Toque e manteña, ou {{ui:Editar na folla}} en {{ui:Propiedades}} |
| {{key:Delete}} | {{ui:Eliminar}} na barra de ferramentas ou en {{ui:Propiedades}} |
| Comezar un novo grupo de contaxe con {{key:Esc}} | Toque unha folla baleira con {{ui:Seleccionar}}, despois toque de novo {{ui:Contar}} |

Unha funda con teclado ou un teclado Bluetooth recupera todos os atallos; nun iPad, a tecla ⌘ funciona para {{key:Mod+Z}} e o resto.

Os botóns non amosan as súas indicacións ao tocar. A tecla de cada ferramenta aparece en [Teclado e rato](topic:keyboard).

## Lapis e Apple Pencil

Un lapis (Apple Pencil, Surface Pen e similares) funciona como un rato: debuxa e selecciona, e actúa en canto toca. Use os dedos para pellizcar e desprazar. A presión non cambia o grosor da liña.

## Abrir e gardar nun iPad

- {{ui:Abrir}} amosa o selector de Ficheiros: iCloud Drive, No meu iPad e calquera aplicación de almacenamento que teña conectada.
- {{ui:Gardar}} pide descargar; a copia acaba en Ficheiros, en Descargas (ou na cartafol configurado nos axustes de Safari).

## Manter o traballo a salvo nunha tableta

:::warning
iPad Safari non avisa antes de saír dunha páxina con traballo sen gardar, e iPadOS pode recargar unha pestana en segundo plano para liberar memoria. MarkupCraft garda unha copia de recuperación no navegador e ofréceaa de novo cando a abre outra vez (vexa [Recuperar o seu traballo](common:recover)), pero **garde despois de cada folla ou de cada recorrido**: unha pestana privada non conserva ningunha copia.
:::

- O seu nome, a configuración das ferramentas e o arcón de ferramentas gárdanse nese navegador dese iPad, como nun ordenador. Vexa [Que se garda neste navegador](topic:browser-storage).
- **Antes dunha visita a unha obra sen sinal:** mentres aínda estea en liña, abra MarkupCraft en Safari (ou Chrome) no iPad e escolla {{ui:Gardar para usar sen conexión}} na barra da parte superior. Agarde ata que diga "Listo sen conexión" (conta "Gardando N de M"; o lector e o escritor de PDF ocupan uns 6 MB). Na obra, abra a mesma dirección ou un marcador dela: abrir, anotar e gardar PDF funciona sen conexión. Se di "Sen conexión non dispoñible", está nunha pestana privada; use unha normal. Vexa [Traballar sen conexión](common:offline).
- Safari elimina unha copia sen conexión que non usou durante algunhas semanas. Antes dunha viaxe, prema "Listo sen conexión" e escolla "Gardar de novo (obter a versión máis recente)".
- Os conxuntos de planos moi grandes usan moita memoria. Nunha tableta, abra só as follas que precise para a visita.

## Nun teléfono

Funciona, pero a pantalla é pequena: as partes apílanse (barra de ferramentas, folla, barra de estado, paneis e despois a lista de follas), e a barra de ferramentas despraza de lado. Use un teléfono para mirar e engadir unha nota rápida, e unha tableta ou un ordenador para unha revisión de verdade.
