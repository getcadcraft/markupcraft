---
title: Novidades na 0.9
summary: Notas e uma área de colagem que nunca são impressas, notas privadas cifradas e uma cópia limpa para o cliente, ligações em lote para um conjunto completo de desenhos, uma ferramenta Arco com dez métodos, seguir outro revisor numa sessão Live e a correção de anotações eliminadas que continuavam no PDF guardado.
keywords: novidades, 0.9, notas de versão, registo de alterações, notas, área de colagem, notas privadas, palavra-passe, cifrada, ocultar notas, mostrar notas, cópia limpa, instantâneo, ligações em lote, chamadas de folha, ligar folhas, bloco de título, número da folha, aditamento, renumerar, ligação pdf, arco, métodos de arco, arco de três pontos, raio, seguir, seguir-me, live, vista de turma, lista de pessoas, anotação eliminada, dicas de ferramenta, títulos de separadores, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, tarefa, tarefas, responsável, dia limite, em atraso, verificar agora, o que mudou, revisões, comparar, nota de voz, decisão, marcação de revisão, ficheiro de respostas, desenhador, assistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, linhas da barra de ferramentas, grelha de propriedades, atualização
from: dbdd7ed4
---

Eis o que mudou no MarkupCraft 0.9, em comparação com a 0.8.1. A ideia principal é que as suas notas de trabalho ficam fora da página que o cliente recebe, e um conjunto completo de desenhos pode ser ligado de uma só vez.

## Novo

### Notas, a área de colagem e notas privadas

- **A área de colagem.** A área à volta de cada folha é uma secretária: tudo o que for desenhado, escrito ou colado ao lado da folha é uma nota e nunca é impresso. Escolha {{ui:Mostrar a área de colagem}} para reduzir o zoom e ganhar espaço, ou {{ui:Instantâneo para a área de colagem}}, arraste uma caixa e depois {{ui:Para a área de colagem}} para colocar uma imagem de parte do desenho ao lado da folha. Um instantâneo é uma imagem e não muda quando a folha muda. Veja [Notas, a área de colagem e notas privadas](topic:notes-and-pasteboard).
- **Mostrar e ocultar notas.** Qualquer anotação pode ser uma nota: defina {{ui:As novas anotações são}} no separador {{ui:Notas}}, ou {{ui:Esta anotação é}} em {{ui:Propriedades}}. {{key:Shift+H}} ou o interruptor {{ui:Notas}} por baixo da folha oculta e mostra todas as notas de uma vez. As notas ficam de fora da impressão, das cópias achatadas, das listas e das exportações, e os outros leitores de PDF não as mostram. O seu PDF guardado mantém-nas para a próxima vez que o abrir no MarkupCraft.
- **Notas privadas.** Escolha {{ui:Definir uma palavra-passe}} e, depois, torne uma anotação {{ui:Uma nota privada}}. Fica cifrada no ficheiro com uma palavra-passe de pelo menos 10 caracteres, e não há recuperação: ninguém, incluindo nós, a pode abrir sem a palavra-passe. {{ui:Bloquear}} oculta as notas privadas; {{ui:Manter desbloqueado neste dispositivo}} está desativado por predefinição.
- **Guardar uma cópia limpa.** {{ui:Guardar uma cópia limpa}} elimina todas as notas, notas privadas e tudo o que estiver na área de colagem. Use-a para o ficheiro que vai para o cliente.

### Ligar um conjunto completo

- **Ligações em lote.** Escolha {{ui:Páginas}} › {{ui:Ligações em lote…}}, ou {{ui:Ligar chamadas de folha…}} em {{ui:Procurar texto}} no painel {{ui:Folhas}}. O passo 1 lista o número e o nome de cada folha, tal como lidos do seu bloco de título; corrija as que estiverem erradas. O passo 2 lista as chamadas encontradas, como `3/A-501` ou `DETAIL 2 ON A-501`. {{ui:Vai ligar}} mostra a folha e a vista de cada uma, {{ui:Sem ligação}} mostra os números que nenhuma folha aberta tem, e {{ui:Criar as ligações}} cria todas de uma vez, num só passo de anulação. Volte a executá-lo depois de um aditamento ou de uma renumeração; as ligações que fez manualmente nunca são alteradas. Uma ligação com uma vista é guardada como ligação PDF, para que os outros leitores também abram o detalhe. Veja [Ligações de folhas](topic:sheet-links).

### Desenho

- **Arco, dez métodos.** A ferramenta {{ui:Arco}} ({{key:O}}) tem agora uma caixa {{ui:Método do arco}} sobre a página, com dez formas de desenhar um arco; o ângulo, o comprimento, o raio e a direção podem ser indicados com um clique ou escritos. Veja [Desenhar um arco de dez formas](topic:draw-an-arc).

### Trabalhar em conjunto

- **Seguir um revisor.** Numa sessão Live escolha {{ui:Seguir}} ao lado do nome de uma pessoa, e a sua vista acompanha a da pessoa; se deslocar a vista (pan) ou usar o zoom, deixa de seguir. O anfitrião pode escolher {{ui:Pedir a todos que me sigam}}. A lista de pessoas mostra a cor, o nome, a folha em que cada uma está e quando foi a última edição. Veja [Seguir outro revisor numa sessão Live](topic:follow-in-live).

## Em todas as aplicações

- As dicas de ferramenta são do Bootstrap, a sugestão inicial pode ser fechada, as barras de separadores deslocam-se quando transbordam, e os títulos dos separadores do navegador leem `<document> — MarkupCraft | CadCraft`.
- Um painel com várias secções abre uma e fecha as outras (um cadeado ao lado da seta mantém uma aberta); um interruptor nas Definições desliga isto.
- Cada aplicação começa com uma coleção predefinida de itens da biblioteca.
- As unidades de massa e de temperatura estão disponíveis nas definições de unidades.

## Corrigido

- **As anotações eliminadas deixaram de ficar legíveis dentro do PDF guardado.** Antes, ao guardar, uma anotação eliminada ou reescrita era retirada da página, mas o objeto, com o seu texto, ficava no ficheiro. Agora, ao guardar, esses objetos são eliminados. Os ficheiros guardados por versões anteriores ainda os contêm até os guardar outra vez.

## Limites reais

- As ligações em lote foram testadas nos nossos próprios conjuntos de teste. Os conjuntos reais desenham os balões de muitas maneiras, por isso, num conjunto de um cliente, algumas vistas podem ficar por encontrar. As folhas digitalizadas precisam primeiro de {{ui:Ler texto (OCR)…}}.
- As notas, as notas privadas e a área de colagem foram testadas num navegador sem interface e nos nossos próprios ficheiros, não com um conjunto vetorial grande e real, nem numa sessão Live real a duas pessoas. Alterar a palavra-passe ainda não está implementado. As versões anteriores à 0.9 não mostram notas.
- A vista de turma é a lista de pessoas; ainda não foi testada com um professor e alunos reais.
- Os idiomas que não são o inglês são rascunhos automáticos até que um falante nativo os reveja.
- Os instaladores do Windows não têm assinatura de código (Mais informações, depois Executar mesmo assim); a imagem de disco do macOS não está notarizada (clique com o botão direito, depois Abrir).

## Anteriores: 0.8 e 0.8.1

Eis o que mudou no MarkupCraft 0.8 e 0.8.1, em comparação com a 0.7. A grande novidade é que uma anotação pode ser uma tarefa que alguém, ou o seu próprio assistente, executa, e que se fecha sozinha quando o desenho muda de facto.

### Novo

**Anotações que atuam**

- **Transformar uma anotação numa tarefa.** Selecione uma ou mais anotações, abra o separador {{ui:Tarefas}} e escolha {{ui:Fazer da seleção uma tarefa}}. Uma tarefa tem um título, uma pessoa ou o seu assistente ligado para a executar, um dia limite opcional e um estado, e mantém o seu lugar na folha e a sua conversa. Veja [Transformar uma anotação numa tarefa](topic:markups-that-act).
- **Tarefas que se fecham sozinhas.** Uma tarefa pode vigiar o desenho dentro da sua anotação. Abra uma revisão mais recente da folha e escolha {{ui:Verificar agora}}: se as linhas nessa área tiverem mudado mais do que um fio de cabelo, a tarefa fica marcada como Concluída, a anotação passa a Concluída e uma nota na conversa diz o que mudou. Um novo carimbo de data, ou linhas que se deslocaram menos de 1.5 pontos, não contam. Em vez disso, uma tarefa pode vigiar um elemento do modelo: o seu assistente comunica o elemento com `tasks_check`, e um relatório posterior que seja diferente, ou um elemento eliminado, fecha a tarefa. Um passo de anulação volta a abri-la.
- **Encontrar o trabalho.** Filtre a lista de {{ui:Tarefas}} por estado e por destinatário, incluindo {{ui:Em atraso}}; escolha {{ui:Atribuída a}}, depois {{ui:Assistente}}, para ver o que espera pelo seu assistente. Uma tarefa com o dia limite ultrapassado aparece como aviso no painel Problemas. {{ui:CSV}} exporta a lista. As tarefas são guardadas no PDF com a anotação e circulam na Live como as outras propriedades das anotações.

**O que mudou, numa lista simples**

- **Listar as alterações.** Abra o separador {{ui:Compare}}, depois {{ui:Comparar um conjunto completo}}, escolha o ficheiro mais antigo e o mais recente e escolha {{ui:Listar as alterações}}. A lista começa com uma contagem e depois abrange cada folha alterada, da maior alteração para a menor: onde está na folha, que dimensão tem (em unidades reais e também em polegadas no papel, numa folha calibrada), se foram acrescentadas ou removidas linhas, quantas anotações lá se encontram e que palavras apareceram ou desapareceram. {{ui:Copiar a lista}} coloca a lista na área de transferência e {{ui:CSV}} escreve uma linha por alteração. Veja [Listar o que mudou entre revisões](topic:what-changed-in-words).

**Notas de voz e decisões**

- **Notas de voz.** No separador {{ui:Notas}} escolha {{ui:Gravar uma nota de voz}} e depois {{ui:Parar a gravação}}; as gravações param sozinhas ao fim de dois minutos. A nota fica fixada no centro da folha; arraste-a para onde pertence e escreva uma legenda em {{ui:Propriedades}}, e {{ui:Reproduzir}} na lista reproduz a nota. A gravação é guardada dentro do PDF.
- **Decisões.** {{ui:Afixar uma decisão}} escreve uma ou duas frases na folha. Se substituir uma decisão anterior, escolha essa em {{ui:Substitui}}: a antiga mantém-se, marcada como Substituída, e aponta para a nova. Um passo de anulação desfaz-a. Veja [Afixar notas de voz e decisões numa folha](topic:voice-notes-and-decisions).

**Marcação para revisão**

- **Enviar e responder.** No separador {{ui:Tarefas}}, abra {{ui:Marcação para revisão}}, escreva a revisão a que as anotações se referem e escolha {{ui:Exportar ficheiro de marcação}}. Recebe um ficheiro `.redline.json` com um item por anotação aberta: folha, posição (como frações da folha, para que uma nova impressão noutra escala continue alinhada), palavras, autor, conversa e a sua tarefa. Quem desenha as alterações responde com Aceite, Rejeitado ou Concluído num ficheiro `.redline-answers.json`; {{ui:Carregar ficheiro de respostas…}} dá a cada anotação esse estado e a nota do desenhador, num só passo de anulação. Veja [Enviar anotações ao desenhador como marcação](topic:redline-to-revision).

**Assistentes de IA**

- **Mais ferramentas.** Um assistente que ligou através do CadCraft Studio pode listar tarefas (`tasks_list`), criar ou alterar uma (`task_set`), retirar a tarefa (`task_clear`), verificar uma contra uma revisão mais recente ou um elemento (`tasks_check`) e ler a lista simples das alterações entre dois conjuntos de desenhos abertos (`revisions_changes`). Só recebe as ferramentas que marcou no interruptor Assistentes, e cada alteração é um passo de anulação. Veja [Usar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants).

### Em todas as aplicações

- **Idiomas.** O CadCraft Studio tem agora 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugo, albanês, africâner, filipino, suaíli e uzbeque. Os idiomas que não são o inglês são rascunhos automáticos até que um falante nativo os reveja.
- **Dispositivos de entrada.** {{ui:Definições}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define o que fazem um trackpad, os botões laterais do seu rato, uma caneta, toques com os dedos, um rato 3D, um comando de jogos ou um controlador MIDI, para todas as aplicações ou só para esta. Enquanto não alterar nada, cada dispositivo funciona como antes. Veja [Usar um trackpad, um rato 3D ou um comando](common:input-devices).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} tem {{ui:Quebrar}} (o predefinido), {{ui:2 linhas}} e {{ui:1 linha}}, para que o desenho tenha mais espaço. Veja [Organizar os painéis](common:arrange-panels).
- **Grelha de propriedades.** Os campos de Estilo de uma anotação usam a grelha partilhada, com categorias que se podem recolher e colunas de etiqueta e de valor.
- **Painel Problemas.** Os avisos da aplicação, como uma tarefa em atraso, reúnem-se num só painel Problemas.
- **Live e suplementos.** As sessões Live estão descritas em [Trabalhar em conjunto em Live](common:work-together-live); a lista de suplementos que segue a sua conta está em [Suplementos e a lista da sua conta](common:addons-basics).
- **Ligue a sua IA.** O CadCraft Studio é o hub para o seu próprio assistente: ligue uma vez para todas as oito aplicações. As aplicações não têm IA própria.

### Corrigido na 0.8.1

- **O Studio pode mudar de idioma enquanto está a correr.** Antes, a aplicação de ambiente de trabalho e as edições empacotadas continuavam em inglês. Ainda não foi testado em todas as plataformas: diga-nos se o idioma não mudar.
- As instalações do Studio 0.8 recebem a 0.8.1 através de {{ui:Definições}} › {{ui:Atualizações}}.

### Ainda não nesta versão

- **Sem assinatura de código.** Os instaladores do Windows e a imagem .dmg do macOS ainda não têm assinatura. No Windows, se o SmartScreen impedir o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para as lojas de aplicações estão suspensas.
- **Ligar a sua IA ainda está incompleto em alguns pontos.** A ligação com um clique dentro do Studio, o conector alojado para assistentes de navegador e a sua própria chave de API dentro do Studio não estão prometidos para esta versão. O ciclo de tarefas foi testado, mas ainda não com um assistente real.
- **As verificações de tarefas exigem o mesmo tamanho de página.** Uma folha impressa de novo noutro tamanho não coincidirá, por isso as suas tarefas não se fecham. As folhas são emparelhadas pelo número da folha; se não houver número, pela posição na página.
- **As notas de voz são apenas gravações.** Não há transcrição, e um assistente vê a duração, o autor e a legenda de uma nota, não o som. A gravação foi testada com um microfone falso num navegador sem interface; um microfone real num telemóvel, tablet ou portátil ainda está por verificar.
- **As folhas de cálculo e as justificações num PDF** são guardadas numa entrada privada do ficheiro. Um MarkupCraft mais antigo ignora essa entrada e elimina-a na próxima vez que guardar o ficheiro, por isso abra e guarde esse ficheiro com a 0.8 ou posterior.
- **O lado do desenhador nas marcações de revisão.** O CadCraft a ler o ficheiro de marcação e a responder-lhe ainda não está implementado.
- **Outros idiomas.** A barra da aplicação em tâmil transborda 528 px.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). Para a versão anterior a esta, veja [Novidades na 0.7](topic:whats-new-0-7).
