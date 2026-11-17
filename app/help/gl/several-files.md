---
title: Traballar con varios ficheiros ao mesmo tempo
summary: Abrir moitos PDF como un único conxunto, buscar follas entre ficheiros, copiar anotacións entre eles e gardar a copia de cada ficheiro.
keywords: varios ficheiros, varios pdf, conxunto de planos, conxunto, lote, moitos ficheiros, combinar, disciplinas, arquitectónico, estrutural, mecánico, gardar todo, pechar
from: f59354ae
---

Un conxunto de planos chega a miúdo como un PDF por disciplina, ou un PDF por folla. MarkupCraft trata todo o que abre como **un conxunto**.

## Abrilos xuntos

Seleccione todos os PDF no selector de ficheiros dunha vez, ou solte todos na zona das follas. Para engadir máis despois, ábraos do mesmo xeito; únense ao final da lista {{ui:Follas}} na orde en que os abra.

Resultado: «Abertos 6 ficheiros (84 follas no conxunto).» Cada páxina é unha folla. As follas cun número de folla amosan «Folla A-101» debaixo do seu nome; as demais amosan o ficheiro e a páxina.

Non hai un ficheiro de «conxunto» gardado: a próxima vez, abra os mesmos PDF de novo (as copias «(marked up)», se as gardou).

## En todo o conxunto

- **Buscar unha folla:** {{ui:Buscar follas}} busca nos números de folla, nos nomes das follas e nos nomes de ficheiro de todos os ficheiros. {{key:PageUp}} e {{key:PageDown}} recorren todas as follas de todos os ficheiros por orde.
- **Lista de anotacións:** a lapela {{ui:Anotacións}} lista as anotacións de todos os ficheiros. Filtre por {{ui:Folla}} para reducila. O CSV ten unha columna de ficheiro.
- **Lista de pendentes:** unha única numeración para todo o conxunto.
- **Comparar:** a folla antiga e a nova poden vir de ficheiros diferentes.
- **Copiar e pegar:** {{key:Mod+C}} nunha folla e {{key:Mod+V}} noutra, en calquera ficheiro. A copia cae no mesmo lugar da páxina, lixeiramente desprazada.

## Gardar

Escolla {{ui:Gardar}}. Con máis dun ficheiro aberto, MarkupCraft pregunta:

- {{ui:Este ficheiro}}: unha copia anotada do ficheiro da folla en que está.
- {{ui:Todos os ficheiros modificados}}: unha copia de cada ficheiro con cambios sen gardar. Cada un descárgase por separado, como «<file name> (marked up).pdf».
- {{ui:Cancelar}}

:::chromium
A primeira vez que garde varios ficheiros á vez, Chrome e Edge poden preguntar se este sitio pode descargar varios ficheiros. Escolla {{ui:Permitir}}; se non, só chega a primeira copia.
:::

:::safari
Safari pode preguntar unha vez por cada ficheiro. En iPad, cada copia vai á app Ficheiros.
:::

Un ficheiro cuxas anotacións se gardaron deixa de contar como modificado; os demais seguen contando.

As exportacións do CSV, do BCF e da lista de pendentes levan o nome do **primeiro** ficheiro que abriu.

## Pechar

{{ui:Pechar}} pecha todo o conxunto; aínda non hai forma de pechar só un ficheiro. Se hai algo sen gardar, pregunta:

- {{ui:Cancelar}}: non pasa nada.
- {{ui:Pechar sen gardar}}: as anotacións sen gardar pérdense.
- {{ui:Gardar antes copias}}: garda cada ficheiro modificado e despois pecha.

Pechar tamén borra o historial de desfacer.

## Conxuntos grandes

- O texto de cada páxina lese ao abrir para atopar os números de folla, polo que un conxunto de 100 follas tarda un pouco. A barra de estado conta as follas segundo avanza.
- As imaxes das follas na lista debúxanse ao desprazarse ata elas.
- Cada PDF aberto gárdase na memoria da lapela do navegador. Se a lapela vai lenta, peche outras lapelas pesadas, ou revise unha disciplina de cada vez.
- Abrir o mesmo ficheiro dúas veces dá dúas copias das súas follas. Se pasa, escolla {{ui:Pechar}} e abra o conxunto de novo.
