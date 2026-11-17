---
title: Novidades na 0.7 (anterior)
summary: RFIs, submittals e diários de obra em uma nova guia Obra, com datas de vencimento, atrasos em vermelho, CSV e BCF, trabalho offline e Mesclar; assistentes que definem status, respondem e exportam a lista; listas de unidades que seguem Configurações; painéis que se recolhem e caixas de diálogo que se movem.
keywords: novidades 0.7, versão anterior, notas de versão, registro de alterações, alterações, 0.7, versão, novos recursos, obra, registros de obra, rfi, pedido de informação, submittal, diário de obra, diário de campo, atrasado, data de vencimento, atribuídos a mim, marcador, mesclar, offline, tablet, bcf, csv, assistente, mcp, status da marcação, resposta, exportar, unidades, listas de unidades, estrela, calibrar, compacto, painéis, caixas de diálogo, português
from: f8578677
---

Estas são as mudanças do MarkupCraft 0.7, em comparação com a 0.6. A grande novidade são os registros de obra: RFIs, submittals e diários de obra armazenados dentro do PDF, junto às suas marcações.

## Novidades

### RFIs, submittals e diários de obra

- **A guia Obra.** Abra a guia {{ui:Obra}} e escolha {{ui:RFI}}, {{ui:Submittal}} ou {{ui:Diário de obra}}. Toque ou clique na folha onde pertence um RFI ou um submittal, e um marcador indica o lugar; um diário de obra vai para a folha aberta sem marcador ({{ui:Posicionar marcador}} adiciona um depois, {{ui:Mover marcador}} move qualquer marcador). Cada registro tem seu próprio número (RFI-0001, SUB-0001, LOG-0001), um título, texto, um status, um responsável, uma data de vencimento, uma conversa de respostas e uma lista de nomes de anexos. Veja [Acompanhar RFIs, submittals e diários de obra](topic:field-records).
- **Veja o que está atrasado.** Filtre a lista por tipo, status, data de vencimento (atrasados, vence em 7 dias, com ou sem data de vencimento), esta folha ou todas as folhas, uma busca de texto ou {{ui:Atribuídos a mim}}. Um registro além da data de vencimento que ainda está aguardando é marcado como **Atrasados**, em vermelho, na lista e no seu marcador. Veja [Encontrar o que importa](topic:field-records#find-what-matters).
- **CSV e BCF.** {{ui:CSV}} grava os registros listados como uma planilha; {{ui:BCF}} os grava como tópicos BCF, cada um com uma captura do seu lugar na folha. Ambos seguem os filtros. Veja [Exportar](topic:field-records#export).
- **Offline, e duas cópias viram uma.** Os registros são salvos dentro do PDF e não precisam de rede, então um tablet na obra pode adicioná-los, respondê-los e salvá-los. De volta ao escritório, {{ui:Mesclar}} junta os registros de outra cópia do mesmo PDF pelos seus IDs, como uma única etapa de desfazer. Veja [Salvar, offline e mesclar cópias](topic:field-records#save-offline-and-merging-copies).

### Assistentes de IA

- **Mais o que um assistente pode fazer.** Seu próprio assistente, conectado pelo CadCraft Studio, agora pode definir o status de uma marcação (`markup_status`, registrado na conversa), responder em uma conversa (`markup_reply`) e exportar a lista {{ui:Marcações}} como CSV ou BCF (`markups_export`, o que a lista mostra com seus filtros). Cada alteração é uma única etapa de desfazer, assinada com o nome do assistente. Veja [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Em todos os aplicativos

- **Unidades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para comprimento, área, volume, ângulo e inclinação, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desative as unidades que você nunca usa e elas saem das listas; marque uma com estrela e o trabalho novo começa nela. Um arquivo sempre mantém a sua própria unidade. No MarkupCraft, as unidades de medição e de posição em {{ui:Configurações}} › {{ui:MarkupCraft}} e a unidade da caixa de diálogo de calibração seguem os interruptores; a estrela define a unidade de medição até você salvar as configurações próprias do MarkupCraft; e a distância real que você digita ao calibrar pode levar o símbolo de qualquer unidade, como `3 yd` ou `1.5 km`. Veja [Unidades, valores digitados e as listas de unidades](common:unit-lists).
- **Um layout mais denso e painéis que se recolhem.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Densidade do layout}} › {{ui:Compacta}} cabe mais na tela (telas de toque e celulares mantêm seus botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para acoplar ou flutuar o painel, solte-a na barra de outro painel para dividir um mesmo quadro em guias, fixe-a para deslizar até a borda, ou oculte-o e traga-o de volta pela borda. Veja [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **Caixas de diálogo se movem.** Arraste uma caixa de diálogo pela barra de título para fora do desenho; ela volta ao lugar onde você a deixou. Clique duas vezes na barra de título para centralizá-la de novo. Veja [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez exemplos práticos para o seu próprio assistente (organizar um desenho, plotar um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar um levantamento de quantitativos, testar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um repetido pelos nossos testes. Os aplicativos não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Idioma}}. Ele, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** agora têm todas as palavras dos aplicativos, como rascunhos ainda não revisados por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** informa por que uma verificação de atualização falhou (ainda não há arquivo para o seu sistema, sem rede, assinatura inválida) em vez de apenas "Concluído", e deixa de trazer de volta um cartão de Novidades que você fechou até haver uma versão mais nova.

## Ainda não nesta versão

- **A 0.7 não tem assinatura de código.** A assinatura e o pacote da Microsoft Store passaram para a 0.8, porque a validação do certificado ainda não chegou. Confira o SHA-256 ao lado de cada arquivo em getcadcraft.com/download. No Windows, se o SmartScreen impedir o instalador, escolha {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}. No Mac, na primeira vez, clique com o botão direito em CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está em uma loja de aplicativos, e ainda não há versão para iPad ou iPhone.
- As listas de ângulo e inclinação em {{ui:Unidades}} são salvas, mas nenhuma caixa as lê ainda.
- Os registros de obra não são compartilhados em uma sessão Live do CadCraft Studio (sessões Live levam apenas marcações); reúna as cópias com {{ui:Mesclar}}.
- {{ui:Mesclar}} pega um registro inteiro da cópia alterada por último: se duas pessoas alteraram campos diferentes de um registro, prevalecem os campos da cópia mais recente. Conversas e nomes de anexos são unidos.
- Anexos são apenas nomes; os arquivos ficam onde estão. Não há equipes, notificações nem projetos na nuvem para registros, e os assistentes ainda não têm ferramentas para registros.
- Os registros de obra foram testados em um navegador, em tamanhos de celular e tablet, com a rede desligada, mas ainda não manualmente em um tablet real.
- Ainda da 0.6: girar objetos da página para qualquer ângulo, desenhar formas novas diretamente na página, mudar a fonte ou o tamanho de uma linha e texto que se estende por várias linhas. Uma cópia salva com edições de página ainda não foi aberta no Acrobat.
- Ainda da 0.5: desfazer uma alteração de página (como adicionar uma página em branco), ler texto de folhas digitalizadas e sessões Live além da sua própria rede.

Todo o resto está em [O que ainda não foi implementado](topic:not-built-yet).
