---
title: Ficheiros que MarkupCraft abre e garda
summary: PDF de entrada, unha copia de PDF anotada de saída, e ficheiros CSV, BCF e da caixa de ferramentas; onde vai cada un, en liña e sen conexión.
keywords: pdf, abrir, gardar, exportar, descargar, csv, bcf, bcfzip, json, caixa de ferramentas, tipos de ficheiro, formatos, subir, contrasinal, cifrado
from: b3045b4c
---

## Que abre MarkupCraft

| Ficheiro | Como | Que pasa |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open}}, {{key:Mod+O}}, ou soltar sobre a área das follas. Pode abrir varios á vez. | Cada páxina convértese nunha folla. As anotacións que xa hai no ficheiro lense de novo (abaixo). |
| Caixa de ferramentas (`.json`) | Lapela {{ui:Tools}} e logo {{ui:Import}} | As ferramentas engádense á súa caixa. Vexa [A caixa de ferramentas](topic:tool-chest). |

Calquera outra cousa recházase con "MarkupCraft abre ficheiros PDF." na barra de estado. Se solta unha mestura, os PDF ábrense e a barra de estado indica cantos ficheiros non eran PDF.

### Anotacións que xa hai nun PDF

- **As anotacións que MarkupCraft gardou** volven exactamente iguais: tipo, estilo, autor, datas, estado, respostas, número de pendente, a escala da folla e os nomes de folla que escribiu.
- **Os comentarios doutros programas de PDF** tamén se lense. Os rectángulos, elipses, liñas e frechas, polilíneas, polígonos, trazos de tinta (pluma), caixas de texto e notas adhesivas convértense en anotacións normais e editables de MarkupCraft. As súas respostas e os estados de revisión veñen xunto con eles.
- **Todo o demais** (realces de texto feitos seleccionando texto, selos doutros programas e outros tipos) móstrase tal como está, marcado como de só lectura. Pode seleccionalo, velo na lista de anotacións e responderlle, pero non movelo, cambialo nin eliminalo.
- As ligazóns e os campos de formulario quedan como están e non se listan.
- Unha escala gardada por outro programa (unha ventá de medición) úsase como escala da folla cando MarkupCraft entende a súa unidade.

### Ficheiros que non se abren

- Un PDF que precisa contrasinal: '"nome" necesita un contrasinal para abrirse. Abra unha copia sen protección.'
- Un ficheiro danado ou que non é realmente un PDF: '"nome" non se puido ler como PDF (…)'.
- Un PDF que se abre pero está protexido contra cambios ábrese sen problema. Gardalo recházase (vexa abaixo).

Cando se abren varios ficheiros á vez, os que funcionan ábrense e unha caixa chamada "Algúns ficheiros non se abriron" lista os demais.

## Que garda MarkupCraft

Gardar é sempre unha **descarga** dun ficheiro novo. Unha páxina web non pode sobrescribir un ficheiro do seu computador, e MarkupCraft nunca cambia o seu orixinal.

| Vostede escolle | Obtén | Notas |
|---|---|---|
| {{ui:Save}} ({{key:Mod+S}}) | "<nome> (marked up).pdf" | Unha copia do PDF orixinal con todas as anotacións escritas como comentarios PDF reais. Se volve gardar un ficheiro "(marked up)", conserva o mesmo nome; nunca se converte en "(marked up) (marked up)". Vexa [Gardar o PDF anotado](topic:save-the-marked-up-pdf). |
| Lapela {{ui:Markups}}, e logo {{ui:CSV}} | "<nome> markups.csv" | As anotacións tal como aparecen na lista (aplícanse os filtros). |
| Lapela {{ui:Markups}}, e logo {{ui:BCF}} | "<nome> markups.bcfzip" | BCF 2.1 para as ferramentas de coordinación BIM, unha instantánea por anotación. Vexa [Conceptos básicos de BCF](topic:bcf-basics). |
| Lapela {{ui:Punch list}}, e logo {{ui:Export CSV}} | "<nome> punch list.csv" | Os elementos de pendente por orde de número. |
| Lapela {{ui:Tools}}, e logo {{ui:Export}} | "MarkupCraft tool chest.json" | A súa caixa de ferramentas, para compartir ou conservar. |

"<nome>" é o nome do primeiro PDF aberto sen ".pdf".

Os ficheiros CSV ábrense en calquera folla de cálculo. Están en UTF-8 co marcador que as follas de cálculo buscan, así que os nomes con acentos saen ben. Unha celda que empeza por =, +, - ou @ recibe un apóstrofo ao principio para que a folla de cálculo nunca a execute como fórmula.

## Onde van as descargas

O seu navegador decide: normalmente o cartafol Descargas, ou pregunta cada vez se así o configurou. Vexa [Navegadores e computadores](common:browsers#what-differs-between-browsers).

:::chromium
Cando garda de una vez todos os ficheiros cambiados dun conxunto, Chrome e Edge poden preguntar se este sitio pode descargar varios ficheiros. Escolla {{ui:Allow}}, ou só obterá a primeira copia.
:::

:::safari
Nun iPad, Safari pregunta antes de cada descarga e pon o ficheiro na app Ficheiros, en Descargas. Nun Mac vai ao cartafol configurado nos axustes de Safari.
:::

## En liña e sen conexión

- **Os seus PDF nunca saen deste computador**, en liña ou sen conexión. Non hai subida a ningures.
- O lector de PDF cárgase a primeira vez que abre un PDF ("Cargando o lector de PDF…"), e o escritor de PDF a primeira vez que garda ("Cargando o escritor de PDF…") ou abre un ficheiro que xa ten comentarios.
- Con conexión, ambos cárganse desde o sitio web.
- **Para traballar sen conexión,** escolla {{ui:Save for offline}} na barra superior mentres está en liña. O botón conta "Gardando N de M" e logo di "Listo sen conexión". Esa copia inclúe o lector e o escritor de PDF (uns 6 MB en total) e esta axuda, así que despois abrir, anotar e gardar PDF funciona sen conexión neste navegador.
- Se o botón di "Non se puido gardar", algúns ficheiros non se descargaron: comprobe a conexión e prema de novo. Se di "Sen conexión non dispoñible", esta xanela do navegador non pode conservar unha copia sen conexión (xanelas privadas e algúns computadores xestionados); use unha xanela normal.
- Para actualizar ou quitar a copia, prema en "Listo sen conexión" e escolla "Gardar de novo (obter a versión máis recente)" ou "Eliminar a copia sen conexión". Máis en [Traballar sen conexión](common:offline).

:::offline
Está sen conexión. Se a barra superior di "Listo sen conexión", todo funciona, tamén o gardado. Se non o di e aínda non gardou nada nesta lapela, {{ui:Save}} pode fallar con "Non se puido cargar o escritor de PDF". As súas anotacións seguen na lapela: manteña a lapela aberta, volva ter conexión e escolla {{ui:Save}} de novo.
:::

## Cousas que hai que saber

- Os conxuntos grandes de planos tardan en abrirse: MarkupCraft lee o texto de cada páxina para atopar os números de folla. A barra de estado vai contando as follas segundo avanza.
- Abrir o mesmo PDF dúas veces engade as súas follas dúas veces. Se pasa, peche o conxunto e ábrao de novo.
- {{ui:Close}} pecha todos os ficheiros abertos de golpe. Se algún ten anotacións sen gardar, pregunta: {{ui:Cancel}}, {{ui:Close without saving}} ou {{ui:Save copies first}}.
- O gardado na nube aínda non está dispoñible, e aínda non hai versións de escritorio. Conserve os seus PDF xunto aos outros ficheiros do proxecto e fágalles copia de seguridade como de costume. Vexa [Onde van os seus ficheiros](common:your-files).
