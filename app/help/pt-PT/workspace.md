---
title: Uma visita ao ecrã
summary: A barra de ferramentas, a lista de folhas, a área da folha, os cinco painéis à direita e a barra de estado, pelos nomes que têm no ecrã.
keywords: ecrã, esquema, barra de ferramentas, painéis, barra lateral, miniaturas, propriedades, barra de estado, interface, ecrã inteiro, tema, modo escuro
from: 18d82de6
---

O MarkupCraft preenche a janela do navegador. De cima para baixo e da esquerda para a direita:

## A barra no topo

A barra fina por cima de tudo pertence à família CadCraft, não ao MarkupCraft em si. Tem:

- o nome da aplicação e a versão que está a utilizar,
- {{ui:Sobre o MarkupCraft}}, que abre a página da aplicação no site,
- {{ui:Ajuda}}, que abre esta ajuda num painel lateral (ou prima {{key:F1}}),
- {{ui:Guardar para offline}}, que guarda neste navegador o MarkupCraft, o seu leitor e gravador de PDF e esta ajuda, para abrir sem ligação; depois diz «Pronto para offline» (veja [Trabalhar offline](common:offline)),
- o botão do modo de ecrã ({{ui:Ecrã inteiro}}), e
- {{ui:Definições}} (ou {{key:Mod+,}}), com um separador {{ui:MarkupCraft}} para as definições próprias desta aplicação e {{ui:Geral}} para as que todas as aplicações CadCraft partilham (veja [Definições do MarkupCraft](topic:settings)), e
- {{ui:Papel}} e {{ui:Modelo}}, os temas claro e escuro. Em {{ui:Modelo}} as folhas são desenhadas a claro sobre escuro; as suas anotações mantêm as cores que têm.

O botão do modo de ecrã, ou {{key:Ctrl+Shift+F}}, percorre três modos: normal, ecrã inteiro e ecrã inteiro com as barras ocultas. Com as barras ocultas, mova o ponteiro para a margem superior do ecrã (ou toque aí) e elas deslizam de volta. Este atalho usa a tecla Control em todos os computadores, Mac incluído.

:::note
Em ecrã inteiro, {{key:Esc}} também faz o navegador sair do ecrã inteiro. Se só queria cancelar um desenho, prima {{key:Ctrl+Shift+F}} de novo para voltar ao ecrã inteiro.
:::

## A barra de ferramentas

Por baixo da barra do topo, as ferramentas estão agrupadas e rotuladas:

| Grupo | Botões |
|---|---|
| Ficheiro | {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Fechar}} |
| Selecionar | {{ui:Selecionar}}, {{ui:Deslocar}} |
| Desenhar | {{ui:Caneta}}, {{ui:Realce}}, {{ui:Linha}}, {{ui:Seta}}, {{ui:Retângulo}}, {{ui:Elipse}}, {{ui:Polilinha}}, {{ui:Polígono}} |
| Rever | {{ui:Nuvem}}, {{ui:Nuvem livre}} |
| Anotar | {{ui:Chamada}}, {{ui:Texto}}, {{ui:Nota}}, {{ui:Carimbo}} |
| Medir | {{ui:Calibrar}}, {{ui:Comprimento}}, {{ui:Área}}, {{ui:Contagem}} |
| Editar | {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, e {{ui:Mais}}: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}}, {{ui:Limpar seleção}} |

A ferramenta que está a usar aparece premida. Pare o ponteiro sobre um botão para ver a sua tecla (por exemplo «Retângulo (R)»); o menu {{ui:Mais}} lista a tecla de cada comando ao lado dele. Os botões que não podem atuar neste momento aparecem esbatidos: {{ui:Copiar}} até selecionar uma anotação, {{ui:Colar}} até algo ser copiado. Um pequeno ponto depois de {{ui:Guardar}} significa que há anotações por guardar. A lista completa de teclas está em [Teclado e rato](topic:keyboard).

Uma ferramenta continua ativa depois de desenhar com ela, para poder desenhar várias nuvens seguidas. Prima {{key:Esc}} (duas vezes se a anotação nova ainda estiver selecionada) ou {{key:V}} para voltar a {{ui:Selecionar}}.

## A lista de folhas (à esquerda)

{{ui:Folhas}} lista todas as páginas de todos os PDF abertos. Cada linha mostra uma pequena imagem da folha, o seu nome, o número da folha ou o ficheiro e a página, e quantas anotações tem. A contagem depois do título é o número de folhas.

- Clique numa linha para mostrar essa folha.
- Escreva em {{ui:Procurar folhas}} para filtrar por nome da folha, número da folha ou nome do ficheiro. Prima {{key:Enter}} para abrir a primeira correspondência.

Os nomes das folhas vêm do PDF quando ele os tem. Veja [Abrir um conjunto de plantas e passar de folha em folha](topic:open-a-plan-set).

## A área da folha (ao meio)

A folha em que está a trabalhar. Antes de abrir seja o que for, mostra «Abra um conjunto de plantas» com um botão {{ui:Abrir PDF}}. Largue aqui PDF em qualquer sítio para os abrir.

Por baixo da folha, uma barra estreita tem:

- as setas de folha anterior e seguinte, e «3 de 12: A-101 — Planta do piso» (pare o ponteiro sobre ela para ver o ficheiro e a página),
- diminuir o zoom, a caixa de zoom (escreva uma percentagem e prima {{key:Enter}}; 100% é o tamanho real num ecrã típico), aumentar o zoom,
- {{ui:Ajustar página}} e {{ui:Ajustar largura}}.

Cada folha recorda o seu próprio zoom enquanto o conjunto estiver aberto.

Quando compara duas folhas, aparece aqui uma legenda: «Só na folha antiga», «Só na folha nova» e «Em ambas». Veja [Comparar duas revisões](topic:compare-revisions).

## Os painéis (à direita)

Cinco separadores:

| Separador | O que mostra |
|---|---|
| {{ui:Propriedades}} | A anotação selecionada: autor, datas, valores medidos, estado, assunto, texto, comentário, estilo, as respetivas respostas e o respetivo item da lista de anomalias. Com uma ferramenta de desenho ativa e nada selecionado, as definições que as anotações novas vão usar. Com nada selecionado e {{ui:Selecionar}} ativo, a folha: número, título, de onde foi lido o nome, formato do papel, escala e {{ui:Mudar o nome da folha}}. |
| {{ui:Anotações}} | Todas as anotações do conjunto aberto, com filtros, e exportações {{ui:CSV}} e {{ui:BCF}}. Veja [A lista de anotações](topic:markups-list-and-export). |
| {{ui:Lista de anomalias}} | Itens da lista de anomalias numerados, com responsável, prazo e estado. Veja [Fazer uma lista de anomalias](topic:punch-list). |
| {{ui:Ferramentas}} | A caixa de ferramentas: ferramentas guardadas, com estilo. Veja [A caixa de ferramentas](topic:tool-chest). |
| {{ui:Comparar}} | Sobrepor duas folhas. Veja [Comparar duas revisões](topic:compare-revisions). |

## A barra de estado (em baixo)

- À esquerda, onde está o ponteiro na folha, em polegadas (ou milímetros, nas [Definições](topic:settings)) sobre o papel.
- Ao meio, mensagens: o que uma ferramenta espera a seguir, o que acabou de ser guardado, porque é que algo foi recusado. **Leia-a quando algo não acontece.**
- O botão da escala da folha («Não calibrada», ou a escala). Clique nele para definir a escala. Veja [Calibrar uma folha e medir](topic:calibrate-and-measure).
- O seu nome («Defina o seu nome» até indicar um). Clique nele para o alterar.

## Num ecrã pequeno

Abaixo de cerca de 1180 píxeis de largura, os painéis ficam mais estreitos e as imagens das folhas encolhem. Num ecrã do tamanho de um telemóvel, as partes empilham-se: barra de ferramentas (desloque-a para o lado), a folha, a barra de estado, os painéis e, por fim, a lista de folhas em baixo. Um tablet na horizontal mantém o esquema completo.
