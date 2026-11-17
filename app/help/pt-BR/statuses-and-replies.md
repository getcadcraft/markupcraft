---
title: Status e respostas
summary: Marque cada comentário como Aberto, Aceito, Rejeitado ou Concluído, discuta-o em uma conversa de respostas e passe a conversa adiante no PDF.
keywords: status, status de revisão, aceito, rejeitado, concluído, aberto, resposta, respostas, conversa, comentário, discussão, responder, verificação de retorno
from: 0f3e8b91
---

Cada marcação tem um **status** e uma **conversa de respostas**. Juntos, eles carregam uma rodada de revisão: quem revisa marca, quem projeta responde e define os status, e quem revisa faz a verificação de retorno.

## Definir um status

1. Selecione a marcação (ou várias).
2. Em {{ui:Propriedades}}, escolha um {{ui:Status}}: Aberto, Aceito, Rejeitado ou Concluído.

Resultado: o status aparece como um selo na lista de {{ui:Marcações}}, e uma linha é adicionada à conversa: "Status definido como Aceito por Ana Ruiz." Com várias marcações selecionadas, a caixa de status mostra "Misto" até você escolher um, e então ele muda todas.

Novas marcações começam como Aberto. Marcações coladas ou duplicadas também começam como Aberto.

## Responder

1. Selecione a marcação.
2. Em {{ui:Propriedades}}, encontre "Respostas" abaixo das configurações de estilo.
3. Digite em {{ui:Escreva uma resposta}}.
4. Escolha {{ui:Resposta}}, ou pressione {{key:Mod+Enter}}.

Resultado: a resposta aparece listada com o seu nome, a data e a hora, e o cabeçalho a conta: "Respostas (3)". A lista de {{ui:Marcações}} mostra uma contagem de respostas na linha.

- Mudanças de status aparecem na mesma conversa e são marcadas como entradas de status, para que o histórico seja lido em ordem.
- Se você começar a digitar uma resposta e clicar em outra coisa, seu rascunho é mantido até você voltar a essa marcação (até fechar o conjunto).
- Se o seu nome não estiver definido, o MarkupCraft pede antes de enviar.
- Você também pode responder a comentários somente leitura que vieram com o arquivo.

:::note
Uma resposta não pode ser editada nem excluída depois de enviada. Logo após enviar, {{key:Mod+Z}} a desfaz; depois disso, adicione uma nova resposta que corrija a anterior.
:::

## Adicionar uma foto

Abaixo da caixa de resposta, {{ui:Adicionar foto}} adiciona uma imagem à conversa: um PNG ou JPEG deste computador ou, em um tablet ou celular, uma foto que você tira ali mesmo. O que você digitou na caixa de resposta vira a legenda dela. A conversa mostra uma miniatura; clique nela para ver a foto em tamanho real. Fotos grandes são reduzidas para 1600 pixels no lado maior.

No PDF salvo, cada foto também viaja como arquivo anexado ao lado da marcação (um clipe de papel), para que outros visualizadores de PDF possam abri-la.

## Passar a revisão adiante

Ainda não há uma sessão online compartilhada: a revisão viaja no PDF.

1. Escolha {{ui:Salvar}}. A cópia guarda cada marcação com o seu status e as suas respostas.
2. Envie essa cópia do jeito que você envia desenhos hoje.
3. A próxima pessoa abre no MarkupCraft, responde, define os status e salva de novo.

Outros programas de PDF veem as respostas como respostas ao comentário, e os status como estados de revisão (Aceito, Rejeitado, Concluído; Aberto aparece como nenhum estado). As respostas e os estados de revisão deles voltam para o MarkupCraft quando você abre o arquivo: vale o status mais recente.

Se duas pessoas marcam cópias separadas ao mesmo tempo, não há mesclagem. Você pode abrir as duas cópias em um mesmo conjunto e copiar algumas marcações de uma para a outra com {{key:Mod+C}} e {{key:Mod+V}}, mas uma cópia colada é uma nova marcação: ela leva o seu nome, uma nova data e o status Aberto, e cai um pouco deslocada. Combinem quem marca quais folhas para evitar isso.

## Encontrar o que ainda está aberto

Na aba {{ui:Marcações}}, defina {{ui:Status}} como "Aberto" para listar só os itens abertos, e {{ui:Autor}} para um revisor. Veja [A lista de marcações](topic:markups-list-and-export).

O status (Aberto, Aceito, Rejeitado, Concluído) se refere ao comentário. Um item de pendência tem um status próprio, separado, para o trabalho em campo; veja [Criar uma lista de pendências](topic:punch-list).
