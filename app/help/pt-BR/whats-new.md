---
title: Novidades da 0.7
summary: RFIs, submittals e diários de obra em uma nova guia Obra, com prazos, atrasados em vermelho, CSV e BCF, trabalho offline e Mesclar; assistentes que definem status, respondem e exportam a lista; listas de unidades que seguem as Configurações; painéis que se recolhem e caixas de diálogo que se movem.
keywords: novidades, notas de versão, histórico de alterações, mudanças, 0.7, versão, novos recursos, obra, registros de obra, rfi, solicitação de informação, submittal, diário de obra, atrasado, prazo, atribuídos a mim, marcador, mesclar, offline, tablet, bcf, csv, assistente, mcp, status da marcação, resposta, exportar, unidades, listas de unidades, estrela, calibrar, compacto, painéis, caixas de diálogo, português
from: 142e1a1e
---

Isto é o que mudou no MarkupCraft 0.7, em comparação com a 0.6. A grande novidade são os registros de obra: RFIs, submittals e diários de obra guardados dentro do PDF, ao lado das suas marcações.

## Novo

### RFIs, submittals e diários de obra

- **A guia Obra.** Abra a guia {{ui:Obra}} e escolha {{ui:RFI}}, {{ui:Submittal}} ou {{ui:Diário de obra}}. Toque ou clique na folha onde um RFI ou um submittal pertence e um marcador indica o lugar; um diário de obra vai na folha aberta sem marcador ({{ui:Posicionar marcador}} adiciona um depois, {{ui:Mover marcador}} move qualquer marcador). Cada registro tem o próprio número (RFI-0001, SUB-0001, LOG-0001), um título, texto, um status, um responsável, um prazo, uma conversa de respostas e uma lista de nomes de anexos. Veja [Acompanhe RFIs, submittals e diários de obra](topic:field-records).
- **Veja o que está atrasado.** Filtre a lista por tipo, status, prazo (atrasado, vence em 7 dias, com ou sem prazo), esta folha ou todas as folhas, uma busca de texto, ou {{ui:Atribuídos a mim}}. Um registro além do prazo que ainda está esperando é marcado como **Atrasado**, em vermelho, na lista e no marcador. Veja [Encontre o que importa](topic:field-records#find-what-matters).
- **CSV e BCF.** {{ui:CSV}} grava os registros listados como planilha; {{ui:BCF}} grava como tópicos BCF, cada um com um instantâneo do seu lugar na folha. Os dois seguem os filtros. Veja [Exportar](topic:field-records#export).
- **Offline, e duas cópias viram uma.** Os registros são salvos dentro do PDF e não precisam de rede, então um tablet na obra pode adicionar, responder e salvar. De volta ao escritório, {{ui:Mesclar}} junta os registros de outra cópia do mesmo PDF pelos seus ids, como um único passo de desfazer. Veja [Salvar, offline e mesclar cópias](topic:field-records#save-offline-and-merging-copies).

### Assistentes de IA

- **Mais coisas que um assistente pode fazer.** Seu próprio assistente, conectado pelo CadCraft Studio, agora pode definir o status de uma marcação (`markup_status`, registrado na conversa dela), responder em uma conversa (`markup_reply`) e exportar a lista {{ui:Marcações}} como CSV ou BCF (`markups_export`, o que a lista mostra, com os filtros). Cada alteração é um passo de desfazer, assinado com o nome do assistente. Veja [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Em todos os apps

- **Unidades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para comprimento, área, volume, ângulo e declividade, com os tamanhos exatos que as definições das unidades dão (o pé de agrimensura dos EUA é uma unidade própria). Desligue as unidades que você nunca usa e elas saem das listas de unidades; marque uma com estrela e o trabalho novo começa nela. Um arquivo sempre mantém a própria unidade. No MarkupCraft, as unidades de medição e de posição em {{ui:Configurações}} › {{ui:MarkupCraft}} e a unidade na caixa de calibração seguem as chaves, a estrela define a unidade de medição até você salvar as configurações próprias do MarkupCraft, e a distância real que você digita ao calibrar pode levar a marca de qualquer unidade, como `3 yd` ou `1.5 km`. Veja [Unidades, valores digitados e as listas de unidades](common:unit-lists).
- **Um layout mais denso e painéis que se recolhem.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Densidade do layout}} › {{ui:Compacta}} coloca mais coisas na tela (telas de toque e celulares mantêm os botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para acoplar ou flutuar o painel, solte-a na barra de outro painel para dividirem um quadro como guias, fixe-a para deslizar para a borda, ou oculte-a e traga-a de volta pela borda. Veja [Organize os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo se movem.** Arraste uma caixa de diálogo pela barra de título para tirá-la da frente do desenho; ela volta onde você a deixou. Clique duas vezes na barra de título para centralizá-la de novo. Veja [Mova uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos completos para o seu próprio assistente (arrumar um desenho, plotar um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar um levantamento de quantitativos, testar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reexecutado pelos nossos testes. Os apps não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Idioma}}. Ele, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** agora têm todas as palavras dos apps, como rascunhos ainda não revisados por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** diz por que uma verificação de atualização falhou (ainda sem arquivo para o seu sistema, sem rede, assinatura inválida) em vez de só "Concluído", e deixa de trazer de volta um cartão de Novidades que você fechou até haver uma versão mais nova.

## Ainda não nesta versão

- **A 0.7 não tem assinatura de código.** A assinatura e o pacote da Microsoft Store passaram para a 0.8 porque a validação do certificado ainda não saiu. Confira o SHA-256 ao lado de cada arquivo em getcadcraft.com/download. No Windows, se o SmartScreen bloquear o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar assim mesmo}}. No Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está em nenhuma loja de apps, e ainda não há versão para iPad ou iPhone.
- As listas de ângulo e declividade em {{ui:Unidades}} são salvas, mas nenhuma caixa as lê ainda.
- Os registros de obra não são compartilhados em uma sessão Live do CadCraft Studio (as sessões Live levam só marcações); junte as cópias com {{ui:Mesclar}}.
- Mesclar leva um registro inteiro da cópia alterada por último: se duas pessoas alteraram campos diferentes de um registro, os campos da cópia mais recente prevalecem. Conversas e nomes de anexos são juntados.
- Os anexos são só nomes; os arquivos ficam onde estão. Não há equipes, notificações nem projetos na nuvem para registros, e os assistentes ainda não têm ferramentas para registros.
- Os registros de obra foram testados em um navegador em tamanhos de celular e tablet com a rede cortada, mas ainda não à mão em um tablet de verdade.
- Ainda da 0.6: girar objetos da página em qualquer ângulo, desenhar formas novas direto na página, mudar a fonte ou o tamanho de uma linha e texto que flui por várias linhas. Uma cópia salva com edições de página ainda não foi aberta no Acrobat.
- Ainda da 0.5: desfazer uma alteração de página (como adicionar uma página em branco), ler texto de folhas digitalizadas e sessões Live além da sua própria rede.

Todo o resto está em [O que ainda não foi implementado](topic:not-built-yet).
