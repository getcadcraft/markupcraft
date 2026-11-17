---
title: Resolución de problemas
summary: Mensaxes que mostra MarkupCraft e o que facer con elas, ademais de solucións para cousas que parecen non funcionar.
keywords: problema, erro, non funciona, axuda, mensaxe, non se abre, non se pode gardar, contrasinal, protexido, medida rexeitada, calibrar, sen conexión, en branco, lento, anotacións perdidas, signos de interrogación
from: bb650b39
---

A maioría dos problemas explícanse na barra de estado, na parte inferior da pantalla. Léaa primeiro.

## Abrir ficheiros

**"MarkupCraft abre ficheiros PDF. "x" non é un PDF."**
Escolleu ou soltou outra cousa. Só se abren PDF. Exporte antes os debuxos desde o seu programa CAD como PDF.

**'"nome" necesita un contrasinal para abrirse. Abra unha copia sen protección.'**
O PDF está protexido con contrasinal. Pida ao remitente unha copia sen protección, ou ábrao nun programa de PDF onde coñeza o contrasinal e garde unha copia sen el.

**'"nome" non se puido ler como PDF (…)'**
O ficheiro está danado ou non é realmente un PDF (unha descarga incompleta, un anexo de correo cortado). Descargue o ficheiro de novo. Se outros programas de PDF poden abrilo, use a súa opción "gardar como" para facer unha copia limpa e ábrea.

**"Algúns ficheiros non se abriron"**
Cando abre varios á vez, esta caixa lista os ficheiros que fallaron e o motivo. Os demais están abertos.

**"O lector de PDF non puido cargar: …"**
Non se puido obter o motor de PDF. En liña: recargue a páxina e probe de novo; comprobe que un bloqueador de contido non bloquea o sitio. Sen conexión: MarkupCraft non se gardou para usar sen conexión neste navegador (a barra superior non di "Listo sen conexión"). Conéctese, escolla {{ui:Gardar para usar sen conexión}} e agarde a "Listo sen conexión". Vexa [Traballar sen conexión](common:offline).

**"Algunhas anotacións poden amosarse dúas veces na pantalla" ou "Non se puideron ler os detalles adicionais das anotacións"**
Os comentarios existentes do ficheiro son pouco habituais. Ábrense igualmente na medida do posible en MarkupCraft; revíseos antes de confiar neles. Gardar segue funcionando.

**A folla ten un nome incorrecto, ou "páxina 3"**
Vexa [Como obteñen as follas o seu nome](topic:open-a-plan-set#how-sheets-get-their-names). As follas escaneadas non teñen texto que ler; use {{ui:Cambiar o nome da folla}}.

**As mesmas follas aparecen dúas veces**
Abriuse dúas veces o mesmo ficheiro. Escolla {{ui:Pechar}} (grave antes se é preciso) e abra o conxunto de novo.

## Debuxar e seleccionar

**Non pasa nada cando fago clic na folla**
Comprobe que ferramenta está premida na barra de ferramentas, e lea a barra de estado. Con {{ui:Rectángulo}}, {{ui:Elipse}} e {{ui:Nube}}, un clic sen arrastrar non debuxa nada: arrastre. Con {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}} e {{ui:Superficie}}, engádense puntos: remate cun dobre clic ou con {{key:Enter}}.

**"Un polígono necesita polo menos 3 puntos." (ou 2 para unha polilínea)**
Faga clic en máis puntos antes de rematar.

**"Non se escribiu nada, así que non se engadiu texto."**
Os recadros de texto e as chamadas só se conservan cando teñen texto. Debuxe de novo e escriba antes de facer clic fóra.

**"Os dous puntos son iguais. Faga clic en dous puntos distintos."**
Nas liñas, frechas, lonxitudes e calibracións, os dous extremos deben estar separados. Arrastre, ou faga clic dúas veces en lugares distintos.

**Non podo mover nin eliminar unha anotación; ten un recadro gris discontinuo**
É un comentario de só lectura que viña co ficheiro (por exemplo, un resalte de texto). MarkupCraft consérvao tal cal: só pode respondelo. A barra de estado di "as anotacións de só lectura consérvanse como no ficheiro".

**As teclas escriben letras nunha caixa en vez de escoller ferramentas**
O cursor está nunha caixa de texto (unha resposta, un campo en {{ui:Propiedades}}, a busca da folla). Faga antes clic nunha parte baleira da área da folla, ou prema {{key:Esc}} se está editando o texto dunha anotación.

**A tecla Space non despraza a folla, ou as teclas de frecha non fan nada**
Acaba de facer clic nun botón da barra de ferramentas, así que aínda ten o teclado. Arrastre co botón central do rato, ou faga clic unha vez na folla con {{ui:Seleccionar}} activado, e probe de novo. Vexa tamén [Teclado e rato](topic:keyboard#when-a-key-does-nothing).

**Un pinzamento na pantalla táctil deixou unha marca**
Unha ferramenta de arrastre (lapis, nube, rectángulo) comezou antes de que chegase o segundo dedo e rematou antes de cancelarse. Prema {{ui:Desfacer}}. Poña os dous dedos xuntos cando queira facer zoom.

## Medir

**"Calibre primeiro esta folla: escolla dous puntos a unha distancia coñecida, ou escolla a súa escala. Despois mida."**
Cada folla necesita a súa propia escala antes de {{ui:Lonxitude}} ou {{ui:Superficie}}. MarkupCraft pasou a {{ui:Calibrar}}: faga clic nos dous extremos dunha cota coñecida e escriba a súa lonxitude, ou faga clic no botón de escala da barra de estado e escolla unha escala. Vexa [Calibrar unha folla e medir](topic:calibrate-and-measure).

**'Iso non é unha lonxitude que MarkupCraft entenda.'**
Escríbaa como `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`. Vexa [Unidades, lonxitudes e escalas](topic:units-and-scales).

**As medidas están algo mal, ou moi mal**
- Unha escala predefinida nun PDF que non está a tamaño completo mide mal. Calibre a partir dunha cota coñecida e longa.
- Un separador de miles léese como punto decimal: `1,200 mm` significa 1,2 mm. Escriba `1200 mm`.
- Amplíe o zoom ao facer clic nos extremos.
- O debuxo pode non estar á escala ("NTS").

**"Seleccione primeiro un grupo de contadores, e logo Shift+clic nunha marca para eliminala."**
Escolla {{ui:Seleccionar}}, faga clic no grupo de contadores, e logo escolla {{ui:Contar}} de novo e faga {{key:Shift}}+clic no punto.

## Gardar

**"Este PDF está protexido (cifrado), así que non se pode escribir unha copia anotada."**
O ficheiro prohibe os cambios. Pida unha copia sen protección. Mentres tanto, aínda pode exportar a lista de anotacións como CSV ou BCF.

**"O escritor de PDF non puido cargar: …"**
Normalmente está sen conexión e a aplicación non se gardou para usar sen conexión (sen "Listo sen conexión" na barra superior). As súas anotacións seguen no separador: manteña o separador aberto, conéctese e escolla {{ui:Gardar}} de novo. Despois escolla {{ui:Gardar para usar sen conexión}} para que funcione sen conexión a próxima vez; a copia gardada inclúe o escritor de PDF.

**"Non se puido gardar <ficheiro>"**
A caixa indica o motivo. As súas anotacións seguen no separador. Probe de novo; se se repite, exporte o CSV para que os comentarios non se perdan, e informe da mensaxe.

**Escollín Gardar pero só chegou un ficheiro**
O navegador bloqueou as descargas adicionais. Busque un aviso na barra de enderezos, permita que este sitio descargue varios ficheiros, e logo garde de novo.

**Non atopo o ficheiro gardado**
Foi ao cartafol de descargas do navegador. Abra a lista de descargas do navegador (en Chrome e Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; en Firefox e Safari, o botón de descargas da barra de ferramentas) para ver onde está. Vexa [Navegadores e ordenadores](common:browsers).

**Algún texto amosa "?" noutros visores de PDF**
Os caracteres fóra do conxunto da Europa occidental imprímense como "?" na copia. A mensaxe de gardado conta cantos hai. Vexa [Gardar o PDF anotado](topic:save-the-marked-up-pdf).

**O selo amosa a data de mañá (ou de onte)**
As datas dos selos están en UTC. Vexa [Selos e notas adhesivas](topic:stamps-and-notes).

## Traballar sen conexión

**O botón sen conexión di "Non se puido gardar"**
Algúns ficheiros da aplicación non se descargaron. Comprobe a conexión e faga clic de novo no botón; conta "Gardando N de M" ata "Listo sen conexión".

**O botón sen conexión di "Sen conexión non dispoñible"**
Esta xanela do navegador non pode conservar unha copia sen conexión: unha xanela privada, ou un ordenador cuxa política o impide. Abra MarkupCraft nunha xanela normal e probe de novo.

**Sen conexión, a aplicación é unha versión anterior**
A copia sen conexión é a versión que gardou. Cando estea en liña, faga clic en "Listo sen conexión" e escolla "Gardar de novo (obter a versión máis recente)". Para liberar o espazo, escolla "Eliminar a copia sen conexión". Vexa [Traballar sen conexión](common:offline).

**A axuda non se abre**
Prema {{key:F1}} (nun Mac, con **fn**), ou escolla {{ui:Axuda}} na barra superior. Funciona tamén sen conexión.

## Cousas perdidas

**As miñas anotacións desapareceron ao pechar ou recargar o separador**
Abra MarkupCraft de novo no mesmo navegador: ofrece o traballo sen gardar con "¿Recuperar o seu traballo?". Escolla {{ui:Recuperar}} e garde o PDF. As copias consérvanse ata 30 días; unha xanela privada, ou borrar os datos do sitio, non deixa ningunha. Vexa [Recuperar o traballo](common:recover).

**O meu nome, os axustes das ferramentas ou o cofre de ferramentas desapareceron**
Gárdanse só neste navegador e borráronse (datos do sitio borrados, unha xanela privada, outro navegador ou ordenador, ou a limpeza de Safari dos sitios non visitados durante un tempo). Defina o nome de novo e importe o cofre exportado. Vexa [Que se garda neste navegador](topic:browser-storage).

**"O cofre de ferramentas non se puido conservar neste navegador (o almacenamento está desactivado ou cheo). Expórteo para conservalo."**
O navegador non acepta gardar datos deste sitio (modo privado, almacenamento bloqueado por un axuste ou unha política, ou cheo). Exporte o cofre despois de cambialo, e impórteo a próxima vez.

## Pantalla e velocidade

**A folla vese borrosa durante un momento**
MarkupCraft amosa unha representación rápida e aproximada mentres fai zoom ou desprazamento, e redebúxaa nítida un momento despois de parar.

**Todo vai lento cun conxunto grande**
Peche outros separadores pesados, abra menos ficheiros á vez, e evite o zoom máximo en follas enormes. Vexa [Traballar con varios ficheiros ao mesmo tempo](topic:several-files#big-sets).

**A folla está escura con liñas claras**
Está no tema {{ui:Modelo}}. Escolla {{ui:Papel}} na barra superior para liñas escuras sobre fondo branco. As súas anotacións e o PDF gardado non se ven afectados.
