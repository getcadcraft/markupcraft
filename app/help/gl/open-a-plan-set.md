---
title: Abrir un conxunto de planos e moverse entre follas
summary: Abra un PDF ou varios, ou comece con páxinas en branco, busque follas por número ou nome, faga zoom e desprace, e cambie o nome dunha folla cando o ficheiro a nomee mal.
keywords: abrir, novo, páxina en branco, folla en branco, esbozo, cuadrícula, sen título, conxunto de planos, follas, páxinas, miniaturas, etiquetas de páxina, número de folla, cadro de título, cambiar o nome, navegar, zoom, desprazar, axustar, buscar follas
from: 1e7f4d50
---

## Abrir o conxunto

1. Escolla {{ui:Abrir}} na barra de ferramentas, ou prema {{key:Mod+O}}.
2. No selector de ficheiros, seleccione todos os PDF do conxunto ({{pick:mac=manteña ⌘ e faga clic en cada ficheiro|windows linux=manteña Ctrl e faga clic en cada ficheiro}}, ou seleccione un intervalo con Shift), e confirme.
   Ou arrastre os ficheiros desde {{pick:mac=Finder|windows=Explorador de ficheiros|linux=o seu xestor de ficheiros}} á zona das follas. Aparece «Solte os PDF para abrilos» mentres arrastra.
3. Agarde mentres a barra de estado di "Abrindo <file>…". Nos ficheiros grandes, conta: "(10 de 60 follas)".

Resultado: a lista {{ui:Follas}} amosa cada páxina de cada ficheiro, na orde en que os abriu, e a barra de estado di algo como "Abríronse 3 ficheiros (42 follas no conxunto)." Se os ficheiros xa tiñan comentarios, engade cantos se leron.

Para engadir máis ficheiros ao conxunto despois, ábraos do mesmo xeito. Engádense ao final da lista.

## Comezar con páxinas en branco

Para bosquexar ou tomar notas sen un debuxo, cree páxinas en branco en lugar de abrir un PDF:

1. Escolla {{ui:Novo}} na barra de ferramentas, ou {{ui:Comezar cunha páxina en branco}} na pantalla de inicio, ou prema {{key:Mod+N}} onde o seu navegador o permita (a aplicación de escritorio e Studio sempre o permiten).
2. Escolla o {{ui:Tamaño do papel}}: Letter, Tabloid ou ANSI B, ARCH D, ARCH E, A4, A3 ou A1, e {{ui:Vertical}} ou {{ui:Horizontal}}.
3. Escolla unha {{ui:Cuadrícula}}: {{ui:Ningunha}}, {{ui:Puntos}} ou {{ui:Cadros}}. A cuadrícula é cada 1/4 in, con liña máis grosa cada 1 in no papel en polgadas, e cada 5 mm, con liña máis grosa cada 10 mm no papel métrico. Imprímese na páxina.
4. Escriba cantas {{ui:Páxinas}} quere, de 1 a 20, e despois escolla {{ui:Crear}}.

Resultado: un PDF novo chamado "Untitled-1.pdf" (despois "Untitled-2.pdf", e así sucesivamente) ábrese como calquera outro ficheiro, creado aquí neste ordenador. Todas as ferramentas funcionan con el, e {{ui:Gardar}} descarga "Untitled-1 (marked up).pdf". MarkupCraft lembra as súas opcións para a próxima vez.

As páxinas non teñen escala: a barra de estado di «Sen calibrar». A cuadrícula non é unha escala. Para medir, calibre a folla ou escolla primeiro unha escala; vexa [Calibrar e medir](topic:calibrate-and-measure).

Para engadir unha páxina a un conxunto en branco, abra unha das súas follas e escolla {{ui:Engadir unha páxina en branco}} debaixo da lista {{ui:Follas}}. A nova páxina ten o mesmo papel e cuadrícula e vai ao final. Como todo cambio de páxina, non se pode desfacer; vexa [Imprimir e cambiar as páxinas](topic:pages-and-printing).

## Como se nomean as follas

MarkupCraft nomea cada folla "<número de folla> — <título>", por exemplo "A-101 — Planta do piso", a partir do primeiro destes que atope:

1. Un nome que escribiu con {{ui:Cambiar o nome da folla}} (máis abaixo).
2. As etiquetas de páxina do PDF, cando a persoa que fixo o PDF as estableceu (por exemplo "A-101").
3. O cadro de título: MarkupCraft lee o texto da páxina e busca algo con forma de número de folla (A-101, A1.01, M-201A, KA1-1), dando prioridade á esquina inferior dereita, á franxa da dereita e á franxa inferior, e toma como título o texto de maior tamaño preto del.
4. Se non, o nome do ficheiro e a páxina: "Plans — páxina 3".

Para ver cal se usou, prema {{key:Esc}} ata que non haxa nada seleccionado e {{ui:Seleccionar}} estea activo, e despois mire {{ui:Propiedades}}: "Lido de" di "A etiqueta da páxina", "O cadro de título", "O nome do ficheiro" ou "Escrito a man".

:::note
As follas escaneadas, e os PDF cuxas letras se exportaron como liñas, non teñen texto que ler. Nomeanse por ficheiro e páxina ata que lles cambie o nome. MarkupCraft aínda non pode ler texto das imaxes.
:::

## Moverse entre follas

- Faga clic nunha folla en {{ui:Follas}}.
- Prema {{key:PageDown}} para a seguinte folla e {{key:PageUp}} para a anterior, ou use as frechas da barra baixo a folla.
- Escriba en {{ui:Buscar follas}}: parte dun número ("A-2"), unha palabra do título ("cuberta") ou un nome de ficheiro. A lista redúcese ao escribir ("4 de 42"). Prema {{key:Enter}} para abrir a primeira coincidencia. Limpe a caixa para ver de novo todas as follas.

Cada folla conserva o seu zoom e a súa posición ata que peche o conxunto.

## Zoom e desprazamento

:::mouse
- **Zoom:** xire a roda sobre a folla. Faise zoom arredor do punteiro. Ou prema {{key:Plus}} e {{key:Minus}} (tamén con {{key:Mod}}), ou use os botóns de zoom. Escriba unha porcentaxe exacta na caixa de zoom.
- **Axustar:** {{ui:Axustar á páxina}} ({{key:Mod+0}}) amosa a folla completa; {{ui:Axustar ao ancho}} ({{key:Mod+9}}) enche o ancho.
- **Desprazar:** arrastre co botón central (a roda), ou arrastre co botón dereito, ou manteña {{key:Space}} e arrastre, ou escolla {{ui:Desprazar}} ({{key:H}}) e arrastre. Sen nada seleccionado, as teclas de frechas tamén moven a folla.
:::

:::mac mouse
Nun trackpad de Mac, o desprazamento con dous dedos fai zoom (non despraza a folla). Para desprazar, manteña {{key:Space}} e arrastre cun dedo, ou cambie a {{ui:Desprazar}} con {{key:H}}. Un pinzamento fai zoom en Chrome, Edge e Firefox.
:::

:::touch
- **Zoom e desprazamento:** poña dous dedos sobre a folla. Separeos ou xúntelos para facer zoom arredor do punto entre eles, e múvaos xuntos para desprazar. Ambas as dúas cousas pasan á vez.
- **Desprazar cun dedo:** escolla primeiro {{ui:Desprazar}}. Con calquera outra ferramenta, un dedo debuxa ou selecciona.
- {{ui:Axustar á páxina}} e {{ui:Axustar ao ancho}} están na barra baixo a folla.
:::

Pode afastarse moito máis aló da folla completa e achegarse ata o 6400 %. A folla redibúxase nítida un momento despois de deixar de mover.

## Marcadores

{{ui:Marcadores}}, na parte superior do panel {{ui:Follas}}, amosa os marcadores (índice) do PDF ao que pertence a folla aberta. Escolla un para ir á súa páxina. O lapis cambia o nome dun marcador e a cruz elimínao. {{ui:Crear a partir das follas}} crea un marcador por folla, co nome que amosa a lista de follas (número de folla e título), e {{ui:Engadir para esta folla}} engade un para a folla na que está. Os cambios forman parte do traballo sen gardar do ficheiro: {{ui:Gardar}} escríbeos na copia, onde todos os visores de PDF os amosan.

## Xirar a vista

Os dous botóns de xiro á dereita da barra baixo a folla xiran a vista un cuarto de volta en calquera dirección, para unha folla debuxada de lado. Só xira a vista: o PDF e as súas anotacións quedan como están, e a seguinte folla ábrese como está o seu PDF (cada folla lembra o seu xiro mentres o conxunto está aberto). O texto que engada nunha vista xirada léese dereito tal como o ve. Para xirar a propia páxina no PDF gardado, use {{ui:Páxinas}} e despois {{ui:Xirar a páxina en sentido horario}}; vexa [Imprimir e cambiar as páxinas](topic:pages-and-printing).

## Cambiar o nome dunha folla

Cando o nome dunha folla é incorrecto ou falta:

1. Mostre a folla.
2. Prema {{key:Esc}} ata que non haxa nada seleccionado e a ferramenta {{ui:Seleccionar}} estea activa. {{ui:Propiedades}} mostra agora a folla.
3. Escolla {{ui:Cambiar o nome da folla}}.
4. Escriba o {{ui:Número de folla}} e o {{ui:Título}}, e despois escolla {{ui:Gardar}}.

Resultado: a lista de follas, a barra baixo a folla e a lista de anotacións usan todas o novo nome, e "Lido de" di "Escrito a man". Pódese desfacer o cambio de nome con {{key:Mod+Z}}.

Para volver ao que di o ficheiro, abra de novo {{ui:Cambiar o nome da folla}}, limpe as dúas caixas e escolla {{ui:Gardar}}.

Ao gardar, un número de folla escrito convértese na etiqueta da páxina no PDF, para que outros visores de PDF amosen "A-101" na súa caixa de páxina. Se lle dá un número a calquera páxina dun ficheiro, cada páxina dese ficheiro recibe unha etiqueta na copia (o número escrito, senón a súa etiqueta antiga, senón o seu número de páxina). Un título escrito consérvase para MarkupCraft, pero outros visores non o amosan.

## Levar o PDF a TakeoffCraft, ou traelo aquí

Cando TakeoffCraft está aberto no mesmo lugar (o laboratorio, Try ou as aplicacións en liña), a barra baixo a folla ten {{ui:Abrir en TakeoffCraft}}. Abre o PDF da folla en TakeoffCraft nunha pestana nova, tal como se abriu aquí, para que poida medir cantidades nel. As súas anotacións quedan aquí; gárdeas como de costume.

O botón {{ui:MarkupCraft}} de TakeoffCraft fai o mesmo no sentido contrario: o PDF ábrese aquí como se tivese escollido {{ui:Abrir}}. Se o navegador bloquea a pestana nova, permita as ventás emerxentes para este sitio e volva escoller o botón.
