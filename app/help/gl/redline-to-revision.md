---
title: Enviar anotacións ao debuxante como redline
summary: Escriba as anotacións abertas como ficheiro redline para quen debuxa os cambios, e despois cargue as súas respostas para que cada anotación mostre Aceptada ou Rexeitada.
keywords: redline, revisión, debuxante, aceptar, rexeitar, respostas, cc-redline, nube de revisión, aplicar anotacións
from: cb099d04
---

Revisar é só a metade do traballo; o debuxo aínda ten que cambiar. O ficheiro redline leva cada anotación aberta ao debuxante, e as respostas do debuxante devolven o resultado.

## Enviar

1. Abra a lapela {{ui:Tarefas}} e abra {{ui:Redline a revisión}}.
2. Escriba a revisión á que se refiren as anotacións (por exemplo B).
3. Escolla {{ui:Exportar ficheiro redline}}.

Obtén un ficheiro `.redline.json` cun elemento por cada anotación aberta: a súa folla, onde está (como fraccións da folla, para que unha nova impresión a outro tamaño siga aliñada, e en puntos), as súas palabras, autor e fío, e a súa tarefa se a ten. Os comentarios de só lectura doutros programas, as imaxes e as lendas quedan fóra.

## Respostas

O lado do debuxo responde a cada elemento como Aceptado, Rexeitado ou Feito, cunha nota, nun ficheiro `.redline-answers.json`. Escolla {{ui:Cargar ficheiro de respostas…}} e seleccióneo: cada anotación recibe ese estado e a nota do debuxante no seu fío, e unha tarefa cuxa anotación foi aceptada ou feita remata. Un só paso de desfacer quita todas as respostas.

O formato do ficheiro está en `docs/REDLINE-FORMAT.md`. A parte de CadCraft (lectura do paquete, aceptación ou rexeitamento de cada elemento, nubes de revisión e o rexistro) desenvólvese por separado.
