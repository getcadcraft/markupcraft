---
title: Enviar marcações ao desenhista como redline
summary: Grave as marcações abertas como um arquivo de redline para quem desenha as alterações, depois carregue as respostas dele para que cada marcação mostre Aceito ou Rejeitado.
keywords: redline, revisão, desenhista, aceitar, rejeitar, respostas, cc-redline, nuvem de revisão, aplicar marcações
from: cb099d04
---

Revisar é metade do trabalho; o desenho ainda precisa mudar. O arquivo de redline leva cada marcação aberta até o desenhista, e as respostas dele trazem o resultado de volta.

## Enviar

1. Abra a guia {{ui:Tarefas}} e abra {{ui:Redline para revisão}}.
2. Digite a revisão a que as marcações se referem (por exemplo B).
3. Escolha {{ui:Exportar arquivo redline}}.

Você recebe um arquivo `.redline.json` com um item por marcação com status Aberto: sua folha, onde ela está (como frações da folha, para que uma nova plotagem em outro tamanho ainda fique alinhada, e em pontos), seus textos, autor e conversa, e sua tarefa, se houver uma. Comentários somente leitura de outros programas, imagens e legendas ficam de fora.

## Respostas

A parte que desenha responde a cada item como Aceito, Rejeitado ou Concluído, com uma nota, em um arquivo `.redline-answers.json`. Escolha {{ui:Carregar arquivo de respostas…}} e selecione-o: cada marcação recebe esse status e a nota do desenhista em sua conversa, e uma tarefa cuja marcação foi aceita ou concluída fica finalizada. Um passo de desfazer desfaz todas as respostas de uma vez.

O formato do arquivo está em `docs/REDLINE-FORMAT.md`. O lado do CadCraft (ler o pacote, aceitar ou rejeitar cada item, nuvens de revisão e o registro) é desenvolvido à parte.
