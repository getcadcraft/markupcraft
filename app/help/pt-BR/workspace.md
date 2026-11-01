---
title: Um passeio pela tela
summary: A barra de ferramentas, a lista de folhas, a área da folha, os cinco painéis à direita e a barra de status, pelos nomes que aparecem na tela.
keywords: tela, layout, barra de ferramentas, painéis, barra lateral, miniaturas, propriedades, barra de status, interface, tela cheia, tema, modo escuro
from: 18d82de6
---

O MarkupCraft preenche a janela do navegador. De cima para baixo e da esquerda para a direita:

## A barra bem no topo

A barra fina acima de tudo pertence à família CadCraft, não ao MarkupCraft em si. Ela tem:

- o nome do app e qual versão você está usando,
- {{ui:Sobre o MarkupCraft}}, que abre a página do app no site,
- {{ui:Ajuda}}, que abre esta ajuda em um painel lateral (ou pressione {{key:F1}}),
- {{ui:Salvar para uso offline}}, que guarda o MarkupCraft, o leitor e o gravador de PDF e esta ajuda neste navegador para abrir sem conexão; depois ele diz "Pronto para uso offline" (veja [Trabalhar offline](common:offline)),
- o botão de modo de tela ({{ui:Tela cheia}}), e
- {{ui:Configurações}} (ou {{key:Mod+,}}), com uma guia {{ui:MarkupCraft}} para as configurações próprias deste app e {{ui:Geral}} para as que todos os apps CadCraft compartilham (veja [Configurações do MarkupCraft](topic:settings)), e
- {{ui:Papel}} e {{ui:Modelo}}, os temas claro e escuro. Em {{ui:Modelo}} as folhas são desenhadas em claro sobre escuro; suas marcações mantêm as próprias cores.

O botão de modo de tela, ou {{key:Ctrl+Shift+F}}, percorre três modos: normal, tela cheia e tela cheia com as barras ocultas. Com as barras ocultas, mova o ponteiro até a borda superior da tela (ou toque ali) e elas deslizam de volta. Esse atalho usa a tecla Control em todo computador, inclusive no Mac.

:::note
Em tela cheia, {{key:Esc}} também faz o navegador sair da tela cheia. Se você só queria cancelar um desenho, pressione {{key:Ctrl+Shift+F}} de novo para voltar à tela cheia.
:::

## A barra de ferramentas

Sob a barra do topo, as ferramentas ficam agrupadas e rotuladas:

| Grupo | Botões |
|---|---|
| Arquivo | {{ui:Abrir}}, {{ui:Salvar}}, {{ui:Fechar}} |
| Selecionar | {{ui:Selecionar}}, {{ui:Pan}} |
| Desenhar | {{ui:Caneta}}, {{ui:Destaque}}, {{ui:Linha}}, {{ui:Seta}}, {{ui:Retângulo}}, {{ui:Elipse}}, {{ui:Polilinha}}, {{ui:Polígono}} |
| Revisar | {{ui:Nuvem}}, {{ui:Nuvem livre}} |
| Anotar | {{ui:Chamada}}, {{ui:Texto}}, {{ui:Nota}}, {{ui:Carimbo}} |
| Medir | {{ui:Calibrar}}, {{ui:Comprimento}}, {{ui:Área}}, {{ui:Contagem}} |
| Editar | {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}} e {{ui:Mais}}: {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Selecionar tudo}}, {{ui:Limpar seleção}} |

A ferramenta que você está usando aparece pressionada. Segure o ponteiro sobre um botão para ver a tecla dele (por exemplo "Retângulo (R)"); o menu {{ui:Mais}} lista a tecla de cada comando ao lado. Botões que não podem agir agora ficam esmaecidos: {{ui:Copiar}} até você selecionar uma marcação, {{ui:Colar}} até algo ser copiado. Um pontinho depois de {{ui:Salvar}} significa que algumas marcações ainda não foram salvas. A lista completa de teclas está em [Teclado e mouse](topic:keyboard).

Uma ferramenta continua ativa depois de você desenhar com ela, então dá para desenhar várias nuvens seguidas. Pressione {{key:Esc}} (duas vezes se a nova marcação ainda estiver selecionada) ou {{key:V}} para voltar a {{ui:Selecionar}}.

## A lista de folhas (esquerda)

{{ui:Folhas}} lista todas as páginas de todos os PDFs abertos. Cada linha mostra uma imagem pequena da folha, o nome, o número da folha ou o arquivo e a página, e quantas marcações ela tem. O número depois do título é a quantidade de folhas.

- Clique em uma linha para mostrar essa folha.
- Digite em {{ui:Buscar folhas}} para filtrar por nome da folha, número da folha ou nome do arquivo. Pressione {{key:Enter}} para abrir a primeira correspondência.

Os nomes das folhas vêm do PDF quando ele os tem. Veja [Abra um conjunto de plantas e navegue entre as folhas](topic:open-a-plan-set).

## A área da folha (meio)

A folha em que você está trabalhando. Antes de abrir qualquer coisa, ela mostra "Abra um conjunto de plantas" com um botão {{ui:Abrir PDFs}}. Solte PDFs em qualquer lugar aqui para abri-los.

Sob a folha, uma barra estreita tem:

- as setas de folha anterior e próxima, e "3 de 12: A-101 — Planta baixa" (segure o ponteiro sobre ela para ver o arquivo e a página),
- diminuir zoom, a caixa de zoom (digite uma porcentagem e pressione {{key:Enter}}; 100% é o tamanho real em uma tela típica), aumentar zoom,
- {{ui:Ajustar página}} e {{ui:Ajustar largura}}.

Cada folha lembra o próprio zoom enquanto o conjunto estiver aberto.

Quando você compara duas folhas, uma legenda aparece aqui: "Somente na folha antiga", "Somente na folha nova" e "Em ambas". Veja [Compare duas revisões](topic:compare-revisions).

## Os painéis (direita)

Cinco guias:

| Guia | O que mostra |
|---|---|
| {{ui:Propriedades}} | A marcação selecionada: autor, datas, valores medidos, status, assunto, texto, comentário, estilo, respostas e item de pendência. Com uma ferramenta de desenho ativa e nada selecionado, as configurações que as novas marcações vão usar. Com nada selecionado e {{ui:Selecionar}} ativo, a folha: número, título, de onde o nome foi lido, tamanho do papel, escala e {{ui:Renomear folha}}. |
| {{ui:Marcações}} | Todas as marcações do conjunto aberto, com filtros, e as exportações {{ui:CSV}} e {{ui:BCF}}. Veja [A lista de marcações](topic:markups-list-and-export). |
| {{ui:Lista de pendências}} | Itens de pendência numerados com responsável, prazo e status. Veja [Faça uma lista de pendências](topic:punch-list). |
| {{ui:Ferramentas}} | A caixa de ferramentas: ferramentas salvas, com estilo. Veja [A caixa de ferramentas](topic:tool-chest). |
| {{ui:Comparar}} | Sobreponha duas folhas. Veja [Compare duas revisões](topic:compare-revisions). |

## A barra de status (embaixo)

- À esquerda, onde o ponteiro está na folha, em polegadas (ou milímetros, em [Configurações](topic:settings)) no papel.
- No meio, mensagens: o que uma ferramenta espera em seguida, o que acabou de ser salvo, por que algo foi recusado. **Leia-a quando algo não acontecer.**
- O botão de escala da folha ("Não calibrada", ou a escala). Clique nele para definir a escala. Veja [Calibre uma folha e meça](topic:calibrate-and-measure).
- Seu nome ("Defina seu nome" até você informar um). Clique nele para mudar.

## Em uma tela pequena

Abaixo de cerca de 1180 pixels de largura, os painéis ficam mais estreitos e as imagens das folhas encolhem. Em uma tela do tamanho de um celular, as partes se empilham: barra de ferramentas (role para os lados), a folha, a barra de status, os painéis e, por último, a lista de folhas embaixo. Um tablet na horizontal mantém o layout completo.
