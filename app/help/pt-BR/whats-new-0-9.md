---
title: Novidades na 0.9 (anteriores)
summary: Notas e uma mesa de apoio que nunca são impressas, notas privadas criptografadas e uma cópia limpa para o cliente, links em lote para um conjunto inteiro de desenhos, uma ferramenta Arco com dez métodos, seguir outro revisor no Live, e uma correção para marcações excluídas que permaneciam no PDF salvo.
keywords: novidades 0.9, versão anterior, novidades, o que há de novo, 0.9, notas de versão, histórico de alterações, notas, mesa de apoio, notas privadas, frase-senha, criptografado, ocultar notas, mostrar notas, cópia limpa, captura, links em lote, chamadas de folha, vincular folhas, legenda, número da folha, adendo, renumerar, link de PDF, arco, métodos de arco, arco de três pontos, raio, seguir, me seguir, live, visão de turma, lista de pessoas, marcação excluída, dicas de ferramenta, títulos das guias, novidades, notas de versão, histórico de alterações, alterações, 0.8, 0.8.1, versão, novos recursos, tarefa, tarefas, responsável, dia de vencimento, atrasados, verificar agora, o que mudou, revisões, comparar, nota de voz, decisão, redline, arquivo de respostas, desenhista, assistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, linhas da barra de ferramentas, grade de propriedades, atualização
from: aa3dfeb8
---

Esta é a lista do que mudou no MarkupCraft 0.9, em comparação com a 0.8.1. A ideia principal é que suas notas de trabalho ficam fora da página que o cliente recebe, e um conjunto inteiro de desenhos pode ser vinculado de uma só vez.

## Novidades

### Notas, a mesa de apoio e notas privadas

- **A mesa de apoio.** A área ao redor de cada folha é uma mesa: tudo o que for desenhado, digitado ou colado ao lado da folha é uma nota e nunca é impresso. Escolha {{ui:Mostrar a mesa de apoio}} para afastar o zoom e ter espaço, ou {{ui:Capturar para a mesa de apoio}}, arraste uma caixa e depois {{ui:Para a mesa de apoio}} para colocar uma imagem de parte do desenho ao lado da folha. Uma captura é uma imagem e não muda quando a folha muda. Veja [Notas, a mesa de apoio e notas privadas](topic:notes-and-pasteboard).
- **Mostrar e ocultar notas.** Qualquer marcação pode ser uma nota: defina {{ui:Novas marcações serão}} na guia {{ui:Notas}}, ou {{ui:Esta marcação é}} em {{ui:Propriedades}}. {{key:Shift+H}} ou a chave {{ui:Notas}} sob a folha oculta e mostra todas as notas de uma vez. As notas ficam de fora da impressão, das cópias achatadas, das listas e das exportações, e outros leitores de PDF não as mostram. O PDF salvo mantém as notas para a próxima vez que você o abrir no MarkupCraft.
- **Notas privadas.** Escolha {{ui:Definir uma frase-senha}}, depois transforme uma marcação em {{ui:Uma nota privada}}. Ela é criptografada no arquivo com uma frase-senha de pelo menos 10 caracteres, e não há recuperação: ninguém, nem nós, consegue abri-la sem a frase-senha. {{ui:Bloquear}} guarda as notas privadas; {{ui:Manter desbloqueado neste dispositivo}} vem desativado por padrão.
- **Salvar uma cópia limpa.** {{ui:Salvar uma cópia limpa}} remove todas as notas, notas privadas e tudo o que estiver na mesa de apoio. Use-a para o arquivo que vai para o cliente.

### Vincular um conjunto inteiro

- **Links em lote.** Escolha {{ui:Páginas}} › {{ui:Links em lote…}}, ou {{ui:Vincular chamadas de folha…}} em {{ui:Buscar texto}} no painel {{ui:Folhas}}. O passo 1 lista o número e o nome de cada folha, como lidos da legenda; corrija os que estiverem errados. O passo 2 lista as chamadas encontradas, como `3/A-501` ou `DETAIL 2 ON A-501`. {{ui:Será vinculado}} mostra a folha e a vista de cada uma, {{ui:Não vinculado}} mostra números que nenhuma folha aberta tem, e {{ui:Criar os vínculos}} cria todas de uma vez, em um único passo de desfazer. Execute de novo após um adendo ou uma renumeração; vínculos feitos à mão nunca são alterados. Um vínculo com vista é salvo como link de PDF, então outros leitores também abrem o detalhe. Veja [Vínculos de folhas](topic:sheet-links).

### Desenho

- **Arco, dez métodos.** A ferramenta {{ui:Arco}} ({{key:O}}) agora tem uma caixa {{ui:Método do arco}} sobre a página, com dez maneiras de desenhar um arco, e o ângulo, o comprimento, o raio e a direção podem ser clicados ou digitados. Veja [Desenhar um arco de dez maneiras](topic:draw-an-arc).

### Trabalhar em conjunto

- **Seguir um revisor.** Em uma sessão Live, escolha {{ui:Seguir}} ao lado do nome de uma pessoa e sua vista acompanha a dela; ao mover ou ampliar a vista por conta própria, isso para. O anfitrião pode escolher {{ui:Pedir a todos que me sigam}}. A lista de pessoas mostra a cor, o nome, a folha em que cada pessoa está e quando foi a última edição dela. Veja [Seguir outro revisor em uma sessão Live](topic:follow-in-live).

## Em todos os aplicativos

- As dicas de ferramenta são as do Bootstrap, a dica inicial pode ser fechada, as faixas de guias rolam quando transbordam, e os títulos das guias do navegador trazem `<document> — MarkupCraft | CadCraft`.
- Um painel com várias seções abre uma e fecha as outras (um cadeado ao lado da seta mantém uma aberta); uma chave em Configurações desliga isso.
- Cada aplicativo começa com uma coleção padrão de objetos da Biblioteca.
- Unidades de peso e de temperatura estão disponíveis nas configurações de unidades.

## Corrigido

- **Marcações removidas não ficam mais legíveis dentro do PDF salvo.** Antes, ao salvar, uma anotação excluída ou reescrita saía da página, mas o objeto, com seu texto, permanecia no arquivo. Agora o salvamento apaga esses objetos. Arquivos salvos por versões anteriores ainda os contêm até você salvá-los de novo.

## Limites reais

- Os links em lote foram testados em nossos próprios conjuntos de teste. Conjuntos reais desenham os balões de muitas formas, então em um conjunto de cliente algumas vistas podem ser perdidas. Folhas digitalizadas precisam primeiro de {{ui:Ler texto (OCR)…}}.
- Notas, notas privadas e a mesa de apoio foram testadas em um navegador sem interface gráfica e em nossos próprios arquivos, não com um conjunto vetorial grande e real, nem em uma sessão Live real com duas pessoas. Alterar a frase-senha ainda não está implementado. Versões anteriores à 0.9 não mostram notas.
- A visão de turma é a lista de pessoas; ela não foi testada com um professor e alunos reais.
- Os idiomas além do inglês são rascunhos de máquina até que um falante nativo os leia.
- Os instaladores para Windows não têm assinatura de código (Mais informações, depois Executar mesmo assim); a imagem de disco para macOS não é notarizada (clique com o botão direito, depois Abrir).

## Anteriores: 0.8 e 0.8.1

Esta é a lista do que mudou no MarkupCraft 0.8 e 0.8.1, em comparação com a 0.7. A grande novidade é que uma marcação pode ser uma tarefa que alguém, ou o seu próprio assistente, executa, e que se fecha sozinha quando o desenho realmente muda.

### Novidades

**Marcações que agem**

- **Transformar uma marcação em tarefa.** Selecione uma ou mais marcações, abra a guia {{ui:Tarefas}} e escolha {{ui:Transformar selecionada em tarefa}}. Uma tarefa tem um título, uma pessoa ou o seu assistente conectado para executá-la, um dia de vencimento opcional e um estado, e mantém seu lugar na folha e sua conversa. Veja [Transformar uma marcação em tarefa](topic:markups-that-act).
- **Tarefas que se fecham sozinhas.** Uma tarefa pode acompanhar o desenho dentro da sua marcação. Abra uma revisão mais recente da folha e escolha {{ui:Verificar agora}}: se as linhas dessa área mudaram mais que um fio de cabelo, a tarefa é marcada como Concluído, sua marcação passa a Concluído e uma nota na conversa diz o que mudou. Um novo carimbo de data, ou linhas que se moveram menos de 1.5 pontos, não contam. Em vez disso, uma tarefa pode acompanhar um elemento do modelo: seu assistente informa o elemento com `tasks_check`, e um relatório posterior que seja diferente, ou um elemento excluído, fecha a tarefa. Um passo de desfazer a reabre.
- **Encontrar o trabalho.** Filtre a lista de {{ui:Tarefas}} por estado e por responsável, incluindo {{ui:Atrasados}}; escolha {{ui:Atribuída a}}, depois {{ui:Assistente}}, para ver o que aguarda o seu assistente. Uma tarefa após o dia de vencimento aparece como aviso no painel de Problemas. {{ui:CSV}} exporta a lista. As tarefas são salvas no PDF junto com a marcação e viajam pelo Live como outras propriedades de marcação.

**O que mudou, como lista simples**

- **Listar as alterações.** Abra a guia {{ui:Comparar}}, depois {{ui:Comparar um conjunto inteiro}}, escolha o arquivo anterior e o posterior e clique em {{ui:Listar as alterações}}. A lista começa com uma contagem e depois cobre cada folha alterada, da maior alteração para a menor: onde está na folha, qual o tamanho (em unidades reais e também em polegadas de papel numa folha calibrada), se linhas foram acrescentadas ou removidas, quantas marcações há ali e quais palavras surgiram ou desapareceram. {{ui:Copiar a lista}} a coloca na área de transferência, e {{ui:CSV}} grava uma linha por alteração. Veja [Listar o que mudou entre revisões](topic:what-changed-in-words).

**Notas de voz e decisões**

- **Notas de voz.** Na guia {{ui:Notas}}, escolha {{ui:Gravar uma nota de voz}}, depois {{ui:Parar gravação}}; as gravações param sozinhas após dois minutos. A nota fica fixada no centro da folha; você a arrasta para onde ela deve ficar e digita um título curto em {{ui:Propriedades}}, e {{ui:Reproduzir}} na lista a toca. A gravação é salva dentro do PDF.
- **Decisões.** {{ui:Fixar uma decisão}} escreve uma ou duas frases na folha. Se ela substitui uma decisão anterior, escolha essa em {{ui:Ela substitui}}: a antiga permanece, marcada como Substituída, e aponta para a nova. Um passo de desfazer a remove. Veja [Fixar notas de voz e decisões em uma folha](topic:voice-notes-and-decisions).

**Redline para revisão**

- **Enviar e responder.** Na guia {{ui:Tarefas}}, abra {{ui:Redline para revisão}}, digite a revisão com a qual as marcações são comparadas e escolha {{ui:Exportar arquivo redline}}. Você obtém um arquivo `.redline.json` com um item por marcação aberta: folha, posição (como frações da folha, para que uma nova plotagem em outro tamanho ainda se alinhe), palavras, autor, conversa e a tarefa. Quem desenha as alterações responde Aceito, Rejeitado ou Concluído em um arquivo `.redline-answers.json`; {{ui:Carregar arquivo de respostas…}} atribui a cada marcação esse status e a nota do desenhista, como um único passo de desfazer. Veja [Enviar marcações ao desenhista como redline](topic:redline-to-revision).

**Assistentes de IA**

- **Mais ferramentas.** Um assistente conectado pelo CadCraft Studio pode listar tarefas (`tasks_list`), criar ou alterar uma (`task_set`), remover a tarefa (`task_clear`), verificar uma em relação a uma revisão mais recente ou a um elemento (`tasks_check`) e ler a lista simples de alterações entre dois conjuntos de plantas abertos (`revisions_changes`). Ele só recebe as ferramentas que você marcou na chave Assistentes, e cada alteração é um passo de desfazer. Veja [Usar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants).

### Em todos os aplicativos

- **Idiomas.** O CadCraft Studio agora tem 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e uzbeque. Todos os idiomas além do inglês são rascunhos de máquina até que um falante nativo os leia.
- **Dispositivos de entrada.** {{ui:Configurações}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fazem um trackpad, os botões laterais do mouse, uma caneta, toques com o dedo, um mouse 3D, um controle de jogo ou um controlador MIDI, para todos os aplicativos ou só para este. Até você alterar algo, todo dispositivo funciona como antes. Veja [Usar trackpad, mouse 3D ou controle](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} tem {{ui:Quebrar}} (o padrão), {{ui:2 linhas}} e {{ui:1 linha}}, para que o desenho tenha mais espaço. Veja [Organizar os painéis](common:arrange-panels).
- **Grade de propriedades.** Os campos de Estilo de uma marcação usam a grade compartilhada, com categorias recolhíveis e colunas de rótulo e de valor.
- **Painel de Problemas.** Avisos do aplicativo, como uma tarefa atrasada, se reúnem em um único painel de Problemas.
- **Live e complementos.** As sessões Live são descritas em [Trabalhar em conjunto ao vivo](common:work-together-live); a lista de complementos que acompanha a sua conta está em [Complementos e a lista da sua conta](common:addons-basics).
- **Conecte sua IA.** O CadCraft Studio é o hub do seu próprio assistente: conecte uma vez para todos os oito aplicativos. Os aplicativos não têm IA própria.

### Corrigido na 0.8.1

- **O Studio pode trocar de idioma enquanto roda.** Antes, o aplicativo de desktop e as edições empacotadas permaneciam em inglês. Isso ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.
- As instalações do Studio 0.8 recebem a oferta da 0.8.1 em {{ui:Configurações}} › {{ui:Atualizações}}.

### Ainda não nesta versão

- **Sem assinatura de código.** Os instaladores para Windows e o .dmg para macOS ainda não têm assinatura. No Windows, se o SmartScreen interromper o instalador, escolha {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}. No Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para loja estão em espera.
- **Conectar sua IA ainda está incompleto em alguns pontos.** A conexão com um clique dentro do Studio, o conector hospedado para assistentes de navegador e a sua própria chave de API dentro do Studio não estão prometidos para esta versão. O ciclo de tarefas foi testado, mas ainda não com um assistente real.
- **As verificações de tarefa precisam do mesmo tamanho de página.** Uma folha replotada em outro tamanho não vai coincidir, então suas tarefas não se fecham. As folhas são pareadas pelo número da folha; se ele não existir, pela posição na página.
- **Notas de voz são apenas gravações.** Não há transcrição, e um assistente vê a duração, o autor e o título curto da nota, não o som. A gravação foi testada com um microfone falso em um navegador sem interface gráfica; um microfone real em celular, tablet ou notebook ainda precisa ser verificado.
- **Planilhas de cálculo e motivos em um PDF** são mantidos em uma entrada privada do arquivo. Um MarkupCraft mais antigo ignora essa entrada e a descarta na próxima vez que salvar o arquivo; por isso, abra e salve esse arquivo com a versão 0.8 ou posterior.
- **O lado do desenhista nos redlines.** A leitura do arquivo redline pelo CadCraft e a resposta a ele ainda não estão implementadas.
- **Outros idiomas.** A barra do aplicativo em tâmil transborda em 528 px.

Todo o resto está em [O que ainda não foi implementado](topic:not-built-yet). Para a versão anterior a esta, veja [Novidades na 0.7](topic:whats-new-0-7).
