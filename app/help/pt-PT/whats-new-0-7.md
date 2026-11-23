---
title: Novidades na 0.7 (anterior)
summary: RFI, submissões e diários de obra num novo separador Obra, com datas limite, atrasos a vermelho, CSV e BCF, trabalho offline e Juntar; assistentes que definem estados, respondem e exportam a lista; listas de unidades que seguem as Definições; painéis que se arrumam e caixas de diálogo que se deslocam.
keywords: novidades 0.7, versão anterior, notas de versão, registo de alterações, alterações, 0.7, versão, novas funcionalidades, obra, registos de obra, rfi, pedido de informação, submissão, diário de obra, diário, em atraso, data limite, atribuídos a mim, marcador, juntar, offline, tablet, bcf, csv, assistente, mcp, estado de anotação, resposta, exportar, unidades, listas de unidades, estrela, calibrar, compacto, painéis, caixas de diálogo, português
from: ca5ba1f0
---

Eis o que mudou no MarkupCraft 0.7, em comparação com a 0.6. A grande novidade são os registos de obra: RFI, submissões e diários de obra guardados dentro do PDF, junto às suas anotações.

## Novo

### RFI, submissões e diários de obra

- **O separador Obra.** Abra o separador {{ui:Obra}} e escolha {{ui:RFI}}, {{ui:Submissão}} ou {{ui:Diário de obra}}. Toque ou clique na folha onde pertence um RFI ou uma submissão, e um marcador assinala o local; um diário de obra fica na folha aberta sem marcador ({{ui:Colocar marcador}} acrescenta um mais tarde, {{ui:Mover marcador}} move qualquer marcador). Cada registo tem o seu próprio número (RFI-0001, SUB-0001, LOG-0001), um título, texto, um estado, um responsável, uma data limite, uma conversa de respostas e uma lista de nomes de anexos. Veja [Acompanhar RFI, submissões e diários de obra](topic:field-records).
- **Veja o que está atrasado.** Filtre a lista por tipo, estado, data limite (em atraso, com prazo em 7 dias, com ou sem data limite), esta folha ou todas as folhas, por uma pesquisa de texto, ou por {{ui:Atribuídos a mim}}. Um registo com a data limite ultrapassada que ainda esteja à espera fica marcado como **Em atraso**, a vermelho, na lista e no seu marcador. Veja [Encontrar o que importa](topic:field-records#find-what-matters).
- **CSV e BCF.** {{ui:CSV}} escreve os registos listados como uma folha de cálculo; {{ui:BCF}} escreve-os como tópicos BCF, cada um com um instantâneo da sua posição na folha. Ambos seguem os filtros. Veja [Exportar](topic:field-records#export).
- **Offline, e duas cópias feitas uma só.** Os registos são guardados dentro do PDF e não precisam de rede, por isso um tablet na obra pode acrescentá-los, responder-lhes e guardá-los. De volta ao escritório, {{ui:Juntar}} une os registos de outra cópia do mesmo PDF pelos seus IDs, como um só passo de anulação. Veja [Guardar, offline e juntar cópias](topic:field-records#save-offline-and-merging-copies).

### Assistentes de IA

- **Mais coisas que um assistente pode fazer.** O seu próprio assistente, ligado através do CadCraft Studio, pode agora definir o estado de uma anotação (`markup_status`, registado na sua conversa), responder numa conversa (`markup_reply`) e exportar a lista {{ui:Anotações}} como CSV ou BCF (`markups_export`, o que a lista mostra com os seus filtros). Cada alteração é um passo de anulação, assinado com o nome do assistente. Veja [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Em todas as aplicações

- **Unidades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para cada um de comprimento, área, volume, ângulo e inclinação, com as dimensões exatas que as definições das unidades dão (o pé topográfico dos EUA é uma unidade própria). Desative as unidades que nunca usa e elas saem das listas de unidades; marque uma com uma estrela e o trabalho novo começa nela. Um ficheiro mantém sempre a sua própria unidade. No MarkupCraft, as unidades de medição e de posição em {{ui:Definições}} › {{ui:MarkupCraft}} e a unidade na caixa de calibração seguem os interruptores; a estrela define a unidade de medição até guardar as definições próprias do MarkupCraft; e a distância real que escreve ao calibrar pode levar a marca de qualquer unidade, como `3 yd` ou `1.5 km`. Veja [Unidades, valores escritos e as listas de unidades](common:unit-lists).
- **Um esquema mais denso e painéis que se arrumam.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Densidade do esquema}} › {{ui:Compacta}} cabe mais no ecrã (os ecrãs táteis e os telemóveis mantêm os botões grandes). Cada painel lateral tem uma barra de título estreita: arraste-a para ancorar ou fazer flutuar o painel, largue-a sobre a barra de outro painel para partilhar uma moldura como separadores, fixe-a para que deslize até à margem, ou oculte-o e traga-o de volta a partir da margem. Veja [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo deslocam-se.** Arraste uma caixa de diálogo pela sua barra de título para fora do desenho; volta ao sítio onde a deixou. Faça duplo clique na barra de título para a centrar outra vez. Veja [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos trabalhados para o seu próprio assistente (organizar um desenho, imprimir um conjunto, verificar desenhos, fazer perguntas sobre um modelo, totalizar uma medição de quantidades, experimentar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um repetido pelos nossos testes. As aplicações não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Definições}} › {{ui:Geral}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** têm agora todas as palavras das aplicações, como rascunhos ainda não revistos por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** diz porque falhou a verificação de atualizações (ainda não há ficheiro para o seu sistema, não há rede, assinatura inválida) em vez de apenas «Concluído», e deixa de voltar a mostrar um cartão de Novidades que tenha fechado até haver uma versão mais recente.

## Ainda não nesta versão

- **A 0.7 não tem assinatura de código.** A assinatura de código e o pacote da Microsoft Store passaram para a 0.8, porque a validação do certificado ainda não chegou. Verifique o SHA-256 ao lado de cada ficheiro em getcadcraft.com/download. No Windows, se o SmartScreen impedir o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, da primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está numa loja de aplicações, e ainda não há versão para iPad ou iPhone.
- As listas de ângulo e inclinação em {{ui:Unidades}} são guardadas, mas ainda nenhuma caixa as lê.
- Os registos de obra não são partilhados numa sessão Live do CadCraft Studio (as sessões Live transportam apenas anotações); junte as cópias com {{ui:Juntar}}.
- {{ui:Juntar}} leva um registo inteiro da cópia alterada por último: se duas pessoas alteraram campos diferentes de um registo, prevalecem os campos da cópia mais recente. As conversas e os nomes de anexos são unidos.
- Os anexos são apenas nomes; os ficheiros ficam onde estão. Não há equipas, notificações nem projetos na nuvem para os registos, e os assistentes ainda não têm ferramentas para registos.
- Os registos de obra foram testados num navegador, em tamanhos de telemóvel e de tablet e sem rede, mas ainda não à mão num tablet real.
- Ainda da 0.6: rodar objetos da página para qualquer ângulo, desenhar formas novas diretamente na página, alterar o tipo de letra ou o tamanho de uma linha, e texto que corre por várias linhas. Ainda não foi aberta no Acrobat uma cópia guardada com edições da página.
- Ainda da 0.5: anular uma alteração à página (como acrescentar uma página em branco), ler texto de folhas digitalizadas e sessões Live para lá da sua própria rede.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet).
