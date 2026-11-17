---
title: Procedente doutro software de anotación
summary: Como os hábitos dun programa de anotación de PDF de escritorio se corresponden con MarkupCraft, e as diferenzas que sorprenden á xente.
keywords: cambiar, cambio, migrar, familiar, pdf de escritorio, caixa de ferramentas, lista de anotacións, superposición, sesións, perfil, atallos, diferenzas
from: c8f323e1
---

Se revisa debuxos en Bluebeam Revu (ou comenta PDF noutro programa de PDF de escritorio), a maior parte de MarkupCraft resultaralle familiar: nubes, chamadas, unha caixa de ferramentas, unha lista de anotacións, estados con respostas, medicións calibradas, superposicións de follas. A forma de xestionar os ficheiros é a gran diferenza, así que lea a seguinte sección aínda que salte o resto.

## As cinco diferenzas importantes

1. **Gardar crea un ficheiro novo.** MarkupCraft funciona no navegador e non pode escribir sobre o PDF do seu disco. {{ui:Gardar}} descarga "<name> (marked up).pdf" e o orixinal queda como estaba. A próxima vez, abra a copia "(marked up)", e limpe vostede as copias antigas.
2. **O PDF gárdase cando garda.** Ata entón, unha copia de recuperación neste navegador conserva as anotacións ante un fallo ou unha pestana pechada, e MarkupCraft ofréceella na próxima vez. É unha rede de seguridade: garde o PDF para conservar a revisión.
3. **O seu perfil vive no navegador.** O seu nome de autor, a configuración das ferramentas e a caixa de ferramentas gárdanse neste navegador neste ordenador. Un navegador ou ordenador diferente comeza de cero, e borrar os datos do sitio os elimina. Exporte a caixa de ferramentas como copia de seguridade. Ver [O que queda neste navegador](topic:browser-storage).
4. **Aínda non hai sesións compartidas.** Non hai unha sesión de revisión en directo e compartida nin un proxecto na nube. A revisión viaxa no PDF: garda, envía a copia, a seguinte persoa responde e garda.
5. **A escala é por folla, e só por folla.** Non hai vistas dentro dunha folla nin "aplicar esta escala a todas as páxinas". Calibre cada folla que medir.

## Hábito por hábito

| Está afeito a | En MarkupCraft |
|---|---|
| Panel de miniaturas, etiquetas de páxina | {{ui:Follas}} á esquerda. Os nomes veñen das etiquetas de páxina ou lense da cartela; corríxaos con {{ui:Cambiar o nome da folla}}. |
| Abrir varios PDF como un conxunto | Ábraos todos á vez; convértense nunha lista. Non se garda ningún ficheiro de conxunto: abra os mesmos PDF a próxima vez. |
| Caixa de ferramentas con conxuntos de ferramentas | Lapela {{ui:Ferramentas}}: unha caixa por navegador, ferramentas gardadas con estilo e asunto. Compártese con {{ui:Exportar}} e {{ui:Importar}} como ficheiro JSON. Os ficheiros de conxuntos de ferramentas doutros programas non se poden importar. |
| Panel de propiedades | Lapela {{ui:Propiedades}}: estado, asunto, comentario, estilo, respostas e elemento de lista de pendentes, todo nun lugar. |
| Lista de anotacións con columnas | Lapela {{ui:Anotacións}} con filtros por folla, autor, estado e tipo. Exporte CSV ou BCF. Aínda non hai columnas personalizadas nin resumo de PDF ou de folla de cálculo. |
| Estado e estado de revisión | {{ui:Estado}}: Aberta, Aceptada, Rexeitada, Completada. Non hai conxuntos de estados personalizados. Gárdanse como estados de revisión estándar. |
| Respostas nunha anotación | O fío de respostas en {{ui:Propiedades}}, con os cambios de estado rexistrados nel. Unha resposta enviada non se pode editar. |
| Calibrar, despois lonxitude, superficie, contaxe | {{ui:Calibrar}}, {{ui:Lonxitude}} ({{key:M}}), {{ui:Superficie}} ({{key:Q}}, dá superficie e perímetro), {{ui:Contar}} ({{key:U}}). Aínda non hai ángulo, radio, volume, lonxitude de polilínea nin recortes. |
| Superposición de páxinas | Lapela {{ui:Comparar}}: vermello para o antigo, azul para o novo, aliñar por dous puntos. Sen nube automática de "comparar documentos". |
| Selos | {{ui:Selo}} con seis selos integrados e texto personalizado, asinado co seu nome e a data. Aínda non hai selos de imaxe nin de sinatura. |
| Control de pendentes ou de incidencias | Lapela {{ui:Lista de pendentes}}: elementos numerados con asignado, data límite e estado; exportación CSV. |
| Sesión de colaboración en directo | Non dispoñible aínda. Pase o PDF gardado. |
| Aplanar | Aínda non está feito. As anotacións seguen como comentarios que outros visores poden mostrar e imprimir. |
| Capas para anotacións | Aínda non está feito. Use os asuntos, os autores e os filtros da lista para ordenar os comentarios. |
| Ligazóns entre follas | Aínda non está feito. |
| Barra espazadora para desprazar, roda para ampliar | Igual: manteña premido {{key:Space}} e arrastre; a roda amplía no punteiro. A roda nunca despraza a páxina. |

## Teclas que cambian

Moitas teclas dunha letra son as que cabería esperar, pero comprobe estas antes de que os dedos as usen por vostede:

- {{key:K}} é {{ui:Chamada}}, e {{key:Q}} é {{ui:Superficie}}. Se está afeito a Q para as chamadas, aquí iniciará unha superficie.
- {{key:C}} é a caixa {{ui:Nube}}; {{key:Shift+C}} é {{ui:Nube libre}}.
- {{key:M}} é {{ui:Lonxitude}}, {{key:U}} é {{ui:Contar}}, {{key:Y}} é {{ui:Polilínea}}, {{key:G}} é {{ui:Polígono}}, {{key:I}} é {{ui:Realce}}.
- {{key:Mod+D}} duplica a selección (en vez do marcador do navegador).
- {{key:Mod+Plus}} e {{key:Mod+Minus}} amplían a folla, non a páxina do navegador.
- Calquera tecla se pode cambiar: ver abaixo.

:::tip
Se os seus dedos coñecen Bluebeam Revu, escolla o estilo de menú {{ui:Revisión de PDF}} en {{ui:Configuración}} › {{ui:MarkupCraft}} › {{ui:Menús, teclas e rato}}: unha barra de menús (Ficheiro, Editar, Vista, Documento, Anotación, Medir, Xanela) sobre unha fila de ferramentas de revisión, {{key:Q}} para unha chamada, {{key:H}} para o realce, {{key:N}} para un polígono, e as medicións en {{key:Alt+Shift}} con unha letra. Calquera tecla tamén se pode cambiar ali. Ver [Menús, teclas e rato](topic:menus-keys-and-mouse).
:::

A lista completa está en [Teclado e rato](topic:keyboard).

## Cousas que funcionan doutro xeito do que cabería esperar

- **As ferramentas quedan activas.** Despois dunha nube, segue debuxando nubes. {{key:Esc}} unha vez borra a selección; dúas veces volve a {{ui:Seleccionar}}.
- **O texto e as chamadas precisan texto.** Se remata sen escribir nada, non se engade ningunha anotación. As notas quedan baleiras.
- **As medicións precisan antes unha escala.** {{ui:Lonxitude}} e {{ui:Superficie}} cambian a {{ui:Calibrar}} nunha folla sen calibrar e volven despois.
- **Comentarios doutros programas.** Os rectángulos, elipses, liñas, polilíneas, polígonos, tinta, caixas de texto e notas adhesivas feitos noutro lugar convértense en anotacións de MarkupCraft editables, e réescribense á maneira de MarkupCraft ao gardar (o aspecto pode cambiar lixeiramente). Os realces de texto, os selos doutros programas e outros tipos especiais quedan de só lectura: pode respondelos, pero non cambialos.
- **Os caracteres que non son do alfabeto de Europa occidental** imprímense como "?" no PDF gardado. Ver [Gardar o PDF anotado](topic:save-the-marked-up-pdf).
- **As datas dos selos** usan UTC, así que un selo feito tarde pola noite en América pode mostrar a data do día seguinte.
- **As medicións pasan** como comentarios de medición estándar, e cada folla calibrada conserva a súa escala, así que un programa que lea medicións de PDF adoita poder mostralas. O comportamento exacto depende dese programa.

## Usar ambos

Pode ir e volver. Os comentarios feitos noutro lugar ábrense en MarkupCraft, e o PDF "(marked up)" ábrese noutros programas de PDF con todas as anotacións, respostas e estados visibles. O que só MarkupCraft lee de volta (asignado e data límite do pendente, estado do elemento) gárdase no ficheiro para MarkupCraft.
