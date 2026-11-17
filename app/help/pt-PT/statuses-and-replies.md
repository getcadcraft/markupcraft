---
title: Estados e respostas
summary: Marque cada comentário como Aberto, Aceite, Rejeitado ou Concluído, discuta-o numa conversa de respostas e passe a conversa no PDF.
keywords: estado, estado de revisão, aceite, rejeitado, concluído, aberto, resposta, respostas, conversa, comentário, discussão, responder, verificação posterior
from: 0f3e8b91
---

Cada anotação tem um **estado** e uma **conversa de respostas**. Juntos acompanham uma ronda de revisão: quem revê anota, quem projeta responde e define os estados, e quem reviu faz a verificação posterior.

## Definir um estado

1. Selecione a anotação (ou várias).
2. Em {{ui:Propriedades}}, escolha um {{ui:Estado}}: Aberto, Aceite, Rejeitado ou Concluído.

Resultado: o estado aparece como uma etiqueta na lista de {{ui:Anotações}}, e é acrescentada uma linha à conversa: "Estado definido como Aceite por Ana Ruiz." Com várias anotações selecionadas, a caixa de estado mostra "Misto" até escolher um estado, e então muda todas.

As novas anotações começam como Aberto. As anotações coladas ou duplicadas também começam como Aberto.

## Responder

1. Selecione a anotação.
2. Em {{ui:Propriedades}}, encontre "Respostas" abaixo das definições de estilo.
3. {{ui:Escreva uma resposta}}.
4. Escolha {{ui:Resposta}}, ou prima {{key:Mod+Enter}}.

Resultado: a resposta fica listada com o seu nome, a data e a hora, e o cabeçalho conta-a: "Respostas (3)". A lista de {{ui:Anotações}} mostra o número de respostas na linha.

- As alterações de estado ficam listadas na mesma conversa e marcadas como entradas de estado, para que o histórico se leia por ordem.
- Se começar a escrever uma resposta e clicar noutra coisa, o rascunho fica guardado até voltar a essa anotação (até fechar o conjunto).
- Se o seu nome não estiver definido, o MarkupCraft pede-o antes de enviar.
- Também pode responder a comentários só de leitura que vieram com o ficheiro.

:::note
Uma resposta não pode ser editada nem eliminada depois de enviada. Logo após o envio, {{key:Mod+Z}} anula-a; depois disso, acrescente uma nova resposta que a corrija.
:::

## Adicionar uma fotografia

Por baixo da caixa de resposta, {{ui:Adicionar fotografia}} acrescenta uma imagem à conversa: um PNG ou JPEG deste computador ou, num tablet ou telemóvel, uma fotografia tirada nesse momento. O que escreveu na caixa de resposta torna-se a legenda. A conversa mostra uma miniatura; escolha-a para ver a fotografia em tamanho real. As fotografias grandes são reduzidas para 1600 pixels no lado maior.

No PDF guardado, cada fotografia viaja também como ficheiro anexado ao lado da anotação (um clipe), para que outros visualizadores de PDF a possam abrir.

## Passar a revisão

Ainda não existe uma sessão online partilhada: a revisão viaja no PDF.

1. Escolha {{ui:Guardar}}. A cópia contém todas as anotações com o respetivo estado e respostas.
2. Envie essa cópia da forma como envia os desenhos hoje.
3. A pessoa seguinte abre-a no MarkupCraft, responde, define estados e volta a guardar.

Outros programas de PDF veem as respostas como respostas ao comentário, e os estados como estados de revisão (Aceite, Rejeitado, Concluído; Aberto aparece sem estado). As respostas e os estados de revisão deles regressam ao MarkupCraft quando abre o ficheiro: prevalece o estado mais recente.

Se duas pessoas anotarem cópias separadas ao mesmo tempo, não há fusão. Pode abrir as duas cópias no mesmo conjunto e copiar algumas anotações com {{key:Mod+C}} e {{key:Mod+V}}, mas uma cópia colada é uma nova anotação: fica com o seu nome, uma nova data e o estado Aberto, e fica ligeiramente deslocada. Combinem quem anota que folhas para evitar isto.

## Encontrar o que ainda está aberto

No separador {{ui:Anotações}}, defina {{ui:Estado}} como "Aberto" para listar apenas os itens abertos, e {{ui:Autor}} para um só revisor. Ver [A lista de anotações](topic:markups-list-and-export).

O estado (Aberto, Aceite, Rejeitado, Concluído) diz respeito ao comentário. Um item de lista de anomalias tem um estado próprio, separado, para o trabalho em obra; ver [Criar uma lista de anomalias](topic:punch-list).
