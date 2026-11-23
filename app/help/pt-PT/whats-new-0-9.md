---
title: Novidades na 0.9 (anteriores)
summary: Notas e uma área de colagem que nunca se imprimem, notas privadas encriptadas e uma cópia limpa para o cliente, ligações em lote para um conjunto completo de desenhos, uma ferramenta Arco com dez métodos, seguir outro revisor no Live, e uma correção para anotações eliminadas que continuavam no PDF guardado.
keywords: novidades 0.9, versão anterior, novidades, o que há de novo, 0.9, notas de lançamento, registo de alterações, notas, área de colagem, notas privadas, frase-passe, encriptado, ocultar notas, mostrar notas, cópia limpa, instantâneo, ligações em lote, chamadas de folha, ligar folhas, legenda, número da folha, adenda, renumerar, ligação pdf, arco, métodos do arco, arco de três pontos, raio, seguir, seguir-me, live, vista de turma, lista de pessoas, anotação eliminada, dicas, títulos de separadores, novidades, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, tarefa, tarefas, responsável, dia limite, em atraso, verificar agora, o que mudou, revisões, comparar, nota de voz, decisão, marcação, ficheiro de respostas, desenhador, assistente, mcp, problemas, idiomas, dispositivos de entrada, touchpad, linhas da barra de ferramentas, grelha de propriedades, atualização
from: aa3dfeb8
---

Eis o que mudou no MarkupCraft 0.9, em comparação com a 0.8.1. A ideia principal é que as suas notas de trabalho ficam fora da folha que o cliente recebe, e que um conjunto completo de desenhos pode ser ligado de uma só vez.

## Novo

### Notas, área de colagem e notas privadas

- **A área de colagem.** A área em volta de cada folha é uma secretária: tudo o que for desenhado, escrito ou colado ao lado da folha é uma nota e nunca se imprime. Escolha {{ui:Mostrar a área de colagem}} para afastar a vista e ganhar espaço, ou {{ui:Instantâneo para a área de colagem}}, arraste um retângulo e depois {{ui:Para a área de colagem}} para colocar uma imagem de parte do desenho ao lado da folha. Um instantâneo é uma imagem e não muda quando a folha muda. Veja [Notas, área de colagem e notas privadas](topic:notes-and-pasteboard).
- **Mostrar e ocultar notas.** Qualquer anotação pode ser uma nota: defina {{ui:As novas anotações são}} no separador {{ui:Notas}}, ou {{ui:Esta anotação é}} em {{ui:Propriedades}}. {{key:Shift+H}} ou o interruptor {{ui:Notas}} por baixo da folha oculta e mostra todas as notas de uma vez. As notas ficam de fora da impressão, das cópias achatadas, das listas e das exportações, e outros leitores de PDF não as mostram. O PDF guardado mantém-nas para a próxima vez que o abrir no MarkupCraft.
- **Notas privadas.** Escolha {{ui:Definir uma palavra-passe}}, depois faça de uma anotação {{ui:Uma nota privada}}. Fica encriptada no ficheiro com uma palavra-passe de pelo menos 10 caracteres, e não há recuperação: ninguém, incluindo nós, consegue abri-la sem a palavra-passe. {{ui:Bloquear}} guarda as notas privadas; {{ui:Manter desbloqueado neste dispositivo}} está desativado por predefinição.
- **Guardar uma cópia limpa.** {{ui:Guardar uma cópia limpa}} elimina todas as notas, as notas privadas e tudo o que está na área de colagem. Use-a para o ficheiro que vai para o cliente.

### Ligar um conjunto completo

- **Ligações em lote.** Escolha {{ui:Páginas}} › {{ui:Ligações em lote…}}, ou {{ui:Ligar chamadas de folha…}} em {{ui:Procurar texto}} no painel {{ui:Folhas}}. O passo 1 lista o número e o nome de cada folha, tal como lidos no seu bloco do título; corrija os que estiverem errados. O passo 2 lista as chamadas encontradas, como `3/A-501` ou `DETAIL 2 ON A-501`. {{ui:Vai ligar}} mostra a folha e a vista de cada uma, {{ui:Não ligado}} mostra números que nenhuma folha aberta tem, e {{ui:Criar as ligações}} cria todas num único passo de anulação. Execute outra vez depois de uma adenda ou de uma renumeração; as ligações feitas à mão nunca são alteradas. Uma ligação com vista é guardada como ligação PDF, para que outros leitores também abram o pormenor. Veja [Ligações de folhas](topic:sheet-links).

### Desenho

- **Arco, dez métodos.** A ferramenta {{ui:Arco}} ({{key:O}}) tem agora uma caixa {{ui:Método do arco}} sobre a página com dez maneiras de desenhar um arco, e o ângulo, o comprimento, o raio e a direção podem ser indicados com o rato ou escritos. Veja [Desenhar um arco de dez maneiras](topic:draw-an-arc).

### Trabalhar em conjunto

- **Seguir um revisor.** Numa sessão Live escolha {{ui:Seguir}} ao lado do nome de uma pessoa e a sua vista acompanha a dela; se deslocar ou ampliar a vista, deixa de seguir. O anfitrião pode escolher {{ui:Pedir a todos que me sigam}}. A lista de pessoas mostra a cor, o nome, a folha em que cada pessoa está e a data da sua última edição. Veja [Seguir outro revisor numa sessão Live](topic:follow-in-live).

## Em todas as aplicações

- As dicas são dicas Bootstrap, a dica inicial pode ser fechada, as barras de separadores deslocam-se quando excedem o espaço, e os títulos dos separadores do navegador mostram `<documento> — MarkupCraft | CadCraft`.
- Um painel com várias secções abre uma e fecha as outras (um cadeado ao lado do cursor mantém uma aberta); um interruptor em {{ui:Definições}} desliga isto.
- Cada aplicação começa com uma coleção predefinida de objetos da Biblioteca.
- As unidades de peso e de temperatura estão disponíveis nas definições de {{ui:Unidades}}.

## Corrigido

- **As anotações eliminadas deixam de ficar legíveis dentro do PDF guardado.** Antes, ao guardar, uma anotação eliminada ou reescrita saía da sua página mas o objeto, com o texto, continuava no ficheiro. Agora, ao guardar, esses objetos são eliminados. Os ficheiros guardados por versões anteriores ainda os contêm até os guardar outra vez.

## Limites conhecidos

- As ligações em lote foram testadas nos nossos próprios conjuntos de teste. Os conjuntos reais desenham as bolhas de muitas formas, por isso num conjunto de um cliente algumas vistas podem ficar por encontrar. As folhas digitalizadas precisam primeiro de {{ui:Ler texto (OCR)…}}.
- As notas, as notas privadas e a área de colagem foram testadas num navegador sem interface e em ficheiros próprios, não com um conjunto vetorial grande e real, nem numa sessão Live real com duas pessoas. A alteração da palavra-passe ainda não está implementada. As versões anteriores à 0.9 não mostram notas.
- A vista de turma é a lista de pessoas; ainda não foi testada com um professor e alunos reais.
- As outras línguas são rascunhos automáticos até um falante nativo as rever.
- Os instaladores para Windows não têm assinatura de código (Mais informações, depois {{ui:Executar mesmo assim}}); a imagem de disco para macOS não está notarizada (clique com o botão direito, depois {{ui:Abrir}}).

## Anteriores: 0.8 e 0.8.1

Eis o que mudou no MarkupCraft 0.8 e 0.8.1, em comparação com a 0.7. A grande novidade é que uma anotação pode ser uma tarefa que alguém, ou o seu assistente, executa, e que se fecha sozinha quando o desenho realmente muda.

### Novo

**Anotações que agem**

- **Tornar uma anotação uma tarefa.** Selecione uma ou mais anotações, abra o separador {{ui:Tarefas}} e escolha {{ui:Fazer da seleção uma tarefa}}. Uma tarefa tem um título, uma pessoa ou o seu assistente ligado para a executar, uma data limite opcional e um estado, e mantém o seu lugar na folha e a sua conversa. Veja [Tornar uma anotação uma tarefa](topic:markups-that-act).
- **Tarefas que se fecham sozinhas.** Uma tarefa pode vigiar o desenho dentro da sua anotação. Abra uma revisão mais recente da folha e escolha {{ui:Verificar agora}}: se as linhas dessa área mudaram mais do que um fio de cabelo, a tarefa fica marcada como Concluída, a sua anotação passa a Concluída e uma nota na conversa diz o que mudou. Um novo carimbo de data, ou linhas que se moveram menos de 1,5 pontos, não contam. Em vez disso, uma tarefa pode vigiar um elemento do modelo: o seu assistente comunica o elemento com `tasks_check`, e um relatório posterior que seja diferente, ou um elemento eliminado, fecha a tarefa. Um passo de anulação reabre-a.
- **Encontrar o trabalho.** Filtre a lista {{ui:Tarefas}} por estado e por destinatário, incluindo {{ui:Em atraso}}; escolha {{ui:Atribuída a}}, depois {{ui:Assistente}} para ver o que espera pelo seu assistente. Uma tarefa passada da data limite aparece como aviso no painel Problemas. {{ui:CSV}} exporta a lista. As tarefas são guardadas no PDF com a anotação e viajam pelo Live como outras propriedades das anotações.

**O que mudou, em forma de lista simples**

- **Listar as alterações.** Abra o separador {{ui:Comparar}}, depois {{ui:Comparar um conjunto completo}}, escolha o ficheiro anterior e o posterior e escolha {{ui:Listar as alterações}}. A lista começa com uma contagem e depois cobre cada folha alterada, a maior alteração primeiro: onde está na folha, qual a sua dimensão (em unidades reais e também em polegadas de papel numa folha calibrada), se linhas foram acrescentadas ou removidas, quantas anotações lá existem, e que palavras apareceram ou desapareceram. {{ui:Copiar a lista}} coloca-a na área de transferência, e {{ui:CSV}} escreve uma linha por alteração. Veja [Listar o que mudou entre revisões](topic:what-changed-in-words).

**Notas de voz e decisões**

- **Notas de voz.** No separador {{ui:Notas}} escolha {{ui:Gravar uma nota de voz}}, depois {{ui:Parar a gravação}}; as gravações param sozinhas ao fim de dois minutos. A nota fica afixada no centro da folha, arrasta-a para onde deve ficar e escreve uma legenda em {{ui:Propriedades}}, e {{ui:Reproduzir}} na lista reproduz a nota. A gravação é guardada dentro do PDF.
- **Decisões.** {{ui:Afixar uma decisão}} escreve uma ou duas frases na folha. Se substitui uma decisão anterior, escolha-a em {{ui:Substitui}}: a antiga mantém-se, marcada como Substituída, e aponta para a nova. Um passo de anulação desfaz tudo. Veja [Afixar notas de voz e decisões numa folha](topic:voice-notes-and-decisions).

**Marcação para revisão**

- **Enviar e responder.** No separador {{ui:Tarefas}} abra {{ui:Marcação para revisão}}, escreva a revisão a que as anotações se referem e escolha {{ui:Exportar ficheiro de marcação}}. Obtém um ficheiro `.redline.json` com um item por anotação aberta: folha, posição (em frações da folha, para que uma nova impressão a outra escala continue alinhada), palavras, autor, conversa e a sua tarefa. Quem desenha as alterações responde Accepted, Rejected ou Done num ficheiro `.redline-answers.json`; {{ui:Carregar ficheiro de respostas…}} dá a cada anotação esse estado e a nota do desenhador, num único passo de anulação. Veja [Enviar anotações ao desenhador como marcação](topic:redline-to-revision).

**Assistentes de IA**

- **Mais ferramentas.** Um assistente que ligou através do CadCraft Studio pode listar tarefas (`tasks_list`), criar ou alterar uma (`task_set`), retirar a tarefa (`task_clear`), verificar uma contra uma revisão mais recente ou um elemento (`tasks_check`) e ler a lista simples de alterações entre dois conjuntos de plantas abertos (`revisions_changes`). Só recebe as ferramentas que marcou no interruptor Assistentes, e cada alteração é um passo de anulação. Veja [Usar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants).

### Em todas as aplicações

- **Línguas.** O CadCraft Studio tem agora 54 línguas. Dez são novas: lituano, letão, bósnio, marata, telugu, albanês, africânder, filipino, suaíli e uzbeque. Todas as que não são inglês são rascunhos automáticos até um falante nativo as rever.
- **Dispositivos de entrada.** {{ui:Definições}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fazem um touchpad, os botões laterais do rato, uma caneta, toques com os dedos, um rato 3D, um comando de jogo ou um controlador MIDI, para todas as aplicações ou só para esta. Até alterar algo, cada dispositivo funciona como antes. Veja [Usar um touchpad, rato 3D ou comando](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} tem {{ui:Quebrar}} (a predefinição), {{ui:2 linhas}} e {{ui:1 linha}}, para que o desenho tenha mais espaço. Veja [Organizar os painéis](common:arrange-panels).
- **Grelha de propriedades.** Os campos de Estilo de uma anotação usam a grelha partilhada, com categorias que se recolhem e colunas de rótulo e de valor.
- **Painel Problemas.** Os avisos da aplicação, como uma tarefa em atraso, reúnem-se num único painel Problemas.
- **Live e complementos.** As sessões Live estão descritas em [Trabalhar em conjunto em Live](common:work-together-live); a lista de complementos que segue a sua conta está em [Complementos e a sua lista de conta](common:addons-basics).
- **Ligue a sua IA.** O CadCraft Studio é o centro para o seu próprio assistente: ligue uma vez para todas as oito aplicações. As aplicações não contêm IA própria.

### Corrigido na 0.8.1

- **O Studio pode mudar de língua enquanto está a correr.** Antes, a aplicação de ambiente de trabalho e as edições empacotadas ficavam em inglês. Isto ainda não foi testado em todas as plataformas: diga-nos se a língua não mudar.
- As instalações do Studio 0.8 recebem a 0.8.1 através de {{ui:Definições}} › {{ui:Atualizações}}.

### Ainda não está nesta versão

- **Sem assinatura de código.** Os instaladores para Windows e a imagem .dmg para macOS ainda não têm assinatura. No Windows, se o SmartScreen parar o instalador, escolha {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}. Num Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para a loja estão em pausa.
- **Ligar a sua IA ainda está incompleto em alguns pontos.** A ligação com um clique dentro do Studio, o conector alojado para assistentes de navegador e a sua própria chave de API dentro do Studio não estão previstos para esta versão. O ciclo de tarefas foi testado, mas ainda não com um assistente real.
- **As verificações de tarefas exigem o mesmo tamanho de página.** Uma folha impressa noutro tamanho não vai coincidir, por isso as suas tarefas não se fecham. As folhas são emparelhadas pelo número da folha, senão pela posição na página.
- **As notas de voz são apenas gravações.** Não há transcrição, e um assistente vê a duração, o autor e a legenda de uma nota, não o som. A gravação foi testada com um microfone falso num navegador sem interface; um microfone real num telemóvel, tablet ou portátil ainda está por verificar.
- **As folhas de cálculo e os motivos num PDF** são guardados numa entrada privada do ficheiro. Um MarkupCraft mais antigo ignora essa entrada e elimina-a na próxima vez que guardar o ficheiro, por isso abra e guarde esse ficheiro com a versão 0.8 ou posterior.
- **O lado do desenhador nas marcações.** A leitura do ficheiro de marcação pelo CadCraft e a resposta a esse ficheiro ainda não estão implementadas.
- **Outras línguas.** A barra da aplicação em tâmil excede em 528 px.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades na 0.7](topic:whats-new-0-7).
