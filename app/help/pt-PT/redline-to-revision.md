---
title: Enviar anotações ao desenhador como marcação para revisão
summary: Escrever as anotações abertas como ficheiro de marcação para quem desenha as alterações, e depois carregar as respostas para que cada anotação mostre Aceite ou Recusada.
keywords: marcação, revisão, desenhador, aceitar, recusar, respostas, cc-redline, nuvem de revisão, aplicar anotações
from: cb099d04
---

Rever é metade do trabalho; o desenho ainda tem de mudar. O ficheiro de marcação leva cada anotação aberta até ao desenhador, e as respostas do desenhador trazem o resultado de volta.

## Enviar

1. Abra o separador {{ui:Tarefas}} e abra {{ui:Marcação para revisão}}.
2. Escreva a revisão a que as anotações se referem (por exemplo B).
3. Escolha {{ui:Exportar ficheiro de marcação}}.

Obtém um ficheiro `.redline.json` com um item por cada anotação aberta: a sua folha, onde está (como frações da folha, para que uma nova impressão a outra escala continue alinhada, e em pontos), os seus textos, autor e conversa, e a sua tarefa, se tiver uma. Os comentários só de leitura de outros programas, as imagens e as legendas ficam de fora.

## Respostas

O lado do desenho responde a cada item com Aceite, Recusada ou Concluída, com uma nota, num ficheiro `.redline-answers.json`. Escolha {{ui:Carregar ficheiro de respostas…}} e selecione-o: cada anotação recebe esse estado e a nota do desenhador na sua conversa, e uma tarefa cuja anotação foi aceite ou concluída fica terminada. Um passo de anulação retira todas as respostas de uma vez.

O formato do ficheiro está em `docs/REDLINE-FORMAT.md`. O lado do CadCraft (ler o pacote, aceitar ou recusar cada item, nuvens de revisão e o registo) é desenvolvido à parte.
