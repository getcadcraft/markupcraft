---
title: Novidades da versão 0.7
summary: RFI, submissões e diários de obra num novo separador Obra, com prazos, atrasados a vermelho, CSV e BCF, trabalho offline e Juntar; assistentes que definem estados, respondem e exportam a lista; listas de unidades que seguem as Definições; painéis que se recolhem e caixas de diálogo que se movem.
keywords: novidades, o que há de novo, notas de versão, registo de alterações, alterações, 0.7, versão, novas funcionalidades, obra, registos de obra, rfi, pedido de informação, submissão, diário de obra, atrasado, prazo, atribuídos a mim, marcador, juntar, offline, tablet, bcf, csv, assistente, mcp, estado da anotação, resposta, exportar, unidades, listas de unidades, estrela, calibrar, compacto, painéis, caixas de diálogo, português
from: 142e1a1e
---

Isto é o que mudou no MarkupCraft 0.7 em comparação com a 0.6. A grande novidade são os registos de obra: RFI, submissões e diários de obra guardados dentro do PDF, junto das suas anotações.

## Novo

### RFI, submissões e diários de obra

- **O separador Obra.** Abra o separador {{ui:Obra}} e escolha {{ui:RFI}}, {{ui:Submissão}} ou {{ui:Diário de obra}}. Toque ou clique na folha a que pertence um RFI ou uma submissão e um marcador assinala o sítio; um diário de obra fica na folha aberta sem marcador ({{ui:Colocar marcador}} acrescenta um mais tarde, {{ui:Mover marcador}} move qualquer marcador). Cada registo tem o seu próprio número (RFI-0001, SUB-0001, LOG-0001), um título, texto, um estado, um responsável, um prazo, uma conversa de respostas e uma lista de nomes de anexos. Veja [Acompanhar RFI, submissões e diários de obra](topic:field-records).
- **Ver o que está atrasado.** Filtre a lista por tipo, estado, prazo (atrasado, a terminar em 7 dias, com ou sem prazo), esta folha ou todas as folhas, uma pesquisa de texto ou {{ui:Atribuídos a mim}}. Um registo que passou o prazo e continua à espera fica marcado como **Atrasado**, a vermelho, na lista e no respetivo marcador. Veja [Encontrar o que importa](topic:field-records#find-what-matters).
- **CSV e BCF.** {{ui:CSV}} escreve os registos listados como folha de cálculo; {{ui:BCF}} escreve-os como tópicos BCF, cada um com uma imagem instantânea do seu local na folha. Ambos seguem os filtros. Veja [Exportar](topic:field-records#export).
- **Offline, e duas cópias transformadas numa.** Os registos são guardados dentro do PDF e não precisam de rede, pelo que um tablet na obra pode acrescentá-los, respondê-los e guardá-los. De volta ao gabinete, {{ui:Juntar}} junta os registos de outra cópia do mesmo PDF através dos respetivos ids, num único passo de anulação. Veja [Guardar, offline e juntar cópias](topic:field-records#save-offline-and-merging-copies).

### Assistentes de IA

- **Mais coisas que um assistente pode fazer.** O seu próprio assistente, ligado através do CadCraft Studio, pode agora definir o estado de uma anotação (`markup_status`, registado na sua conversa), responder numa conversa (`markup_reply`) e exportar a lista {{ui:Anotações}} como CSV ou BCF (`markups_export`, o que a lista mostra com os seus filtros). Cada alteração é um passo de anulação, assinado com o nome do assistente. Veja [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Em todas as aplicações

- **Unidades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para cada um de comprimento, área, volume, ângulo e inclinação, com os tamanhos exatos que as definições das unidades dão (o pé de agrimensura dos EUA é uma unidade própria). Desative as unidades que nunca usa e elas saem das listas de unidades; marque uma com estrela e o trabalho novo começa nela. Um ficheiro conserva sempre a sua própria unidade. No MarkupCraft, as unidades de medição e de posição em {{ui:Definições}} › {{ui:MarkupCraft}} e a unidade da caixa de diálogo de calibração seguem os interruptores, a estrela define a unidade de medição até guardar as definições próprias do MarkupCraft, e a distância real que escreve ao calibrar pode levar a marca de qualquer unidade, como `3 yd` ou `1.5 km`. Veja [Unidades, valores escritos e listas de unidades](common:unit-lists).
- **Um esquema mais denso e painéis que se recolhem.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Densidade do esquema}} › {{ui:Compacta}} faz caber mais coisas no ecrã (os ecrãs táteis e os telemóveis mantêm os botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para ancorar ou fazer flutuar o painel, largue-a na barra de outro painel para partilharem uma moldura como separadores, fixe-a para deslizar para a margem, ou oculte-a e traga-a de volta a partir da margem. Veja [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo movem-se.** Arraste uma caixa de diálogo pela barra de título para a tirar da frente do desenho; ela volta onde a deixou. Faça duplo clique na barra de título para a centrar de novo. Veja [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos completos para o seu próprio assistente (arrumar um desenho, imprimir um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar uma medição, experimentar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reproduzido pelos nossos testes. As aplicações não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Definições}} › {{ui:Geral}} › {{ui:Idioma}}. Este, o **Português (Brasil)**, o **Español (México)** e o **Bahasa Indonesia** têm agora todas as palavras das aplicações, como rascunhos ainda não revistos por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** diz porque falhou uma verificação de atualização (ainda não há ficheiro para o seu sistema, sem rede, uma assinatura inválida) em vez de dizer apenas «Concluído», e deixa de trazer de volta um cartão de Novidades que fechou até haver uma versão mais recente.

## Ainda não nesta versão

- **A 0.7 não está assinada com código.** A assinatura, e o pacote da Microsoft Store, passaram para a 0.8 porque a validação do certificado ainda não chegou. Verifique o SHA-256 junto a cada ficheiro em getcadcraft.com/download. No Windows, se o SmartScreen parar o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, da primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está numa loja de aplicações, e ainda não há versão para iPad ou iPhone.
- As listas de ângulo e inclinação em {{ui:Unidades}} ficam guardadas, mas nenhuma caixa as lê ainda.
- Os registos de obra não são partilhados numa sessão Live do CadCraft Studio (as sessões Live só transportam anotações); junte as cópias com {{ui:Juntar}}.
- Juntar toma um registo por inteiro da cópia alterada em último lugar: se duas pessoas alteraram campos diferentes do mesmo registo, prevalecem os campos da cópia mais recente. As conversas e os nomes dos anexos são juntados.
- Os anexos são só nomes; os ficheiros ficam onde estão. Não há equipas, notificações nem projetos na nuvem para registos, e os assistentes ainda não têm ferramentas para registos.
- Os registos de obra foram testados num navegador com tamanhos de telemóvel e de tablet e com a rede cortada, mas ainda não à mão num tablet verdadeiro.
- Ainda da 0.6: rodar objetos de página para qualquer ângulo, desenhar formas novas diretamente na página, alterar o tipo de letra ou o tamanho de uma linha, e texto que flui por várias linhas. Uma cópia guardada com edições de página ainda não foi aberta no Acrobat.
- Ainda da 0.5: anular uma alteração de página (como acrescentar uma página em branco), ler texto de folhas digitalizadas, e sessões Live para além da sua própria rede.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet).
