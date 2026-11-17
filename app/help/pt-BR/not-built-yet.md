---
title: O que ainda não está implementado
summary: O que esta versão do MarkupCraft ainda não faz e o que fazer hoje no lugar.
keywords: não implementado, roteiro, planejado, limitação, sem suporte, em breve, pedido de recurso, sessões, nuvem, assinatura digital, links da web
from: 0872fede
---

MarkupCraft está em desenvolvimento. Esta é a lista do que a versão atual **não** faz, para você se planejar. Ela descreve a versão de hoje, não promessas.

## Trabalhar com outras pessoas

| Ainda não implementado | Faça isto hoje |
|---|---|
| Salvamento em nuvem e sincronização entre computadores | Mantenha os PDFs junto com os arquivos do projeto. O salvamento em nuvem ainda não está disponível. |
| Mesclar as cópias de marcações de duas pessoas | Divida as folhas entre os revisores, ou copie algumas marcações com {{key:Mod+C}} e {{key:Mod+V}}. RFIs, submittals e diários de obra são mesclados: veja [Acompanhe RFIs, submittals e diários de obra](topic:field-records). |
| Equipes, notificações e projetos em nuvem para RFIs e submittals | Envie o PDF adiante e use {{ui:Mesclar}} para reunir as cópias. |
| RFIs, submittals e diários de obra em uma sessão Live | Cada pessoa trabalha na sua própria cópia; reúna as cópias com {{ui:Mesclar}}. |
| Mesclar as alterações de duas pessoas em campos diferentes de um mesmo registro | Prevalece a cópia alterada por último, no registro inteiro (o tópico e os nomes dos anexos são unidos). Combinem quem edita qual registro. |
| Ferramentas de assistente para RFIs, submittals e diários de obra | Trabalhe com eles na guia {{ui:Obra}}. Os assistentes podem trabalhar com marcações: veja [Usar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants). |
| Editar ou excluir uma resposta depois de enviada | Desfaça logo em seguida, ou adicione uma resposta de correção. |
| Alterar o autor de uma marcação | Defina seu nome antes de começar. |

## Marcações

| Ainda não implementado | Faça isto hoje |
|---|---|
| Carimbos com campos para preencher, assinaturas digitais certificadas | Use um carimbo de texto personalizado, que traz seu nome e a data, ou uma imagem da sua assinatura. |
| Anexar arquivos que não sejam fotos (documentos, vídeos) | Mantenha-os junto ao PDF e cite-os no comentário. |
| Links para sites ou para arquivos que não estão abertos | Escreva o endereço ou o nome do arquivo no comentário. |
| Conjuntos de status personalizados | Use os quatro status, e o assunto para qualquer coisa mais. |
| Editar comentários que vieram com o arquivo como somente leitura (destaques de texto, carimbos de outros programas) | Responda a eles, ou desenhe uma marcação do MarkupCraft ao lado deles. |
| Traços de caneta sensíveis à pressão | Defina a espessura da linha. |

## O conteúdo próprio da página

| Ainda não implementado | Faça isto hoje |
|---|---|
| Desenhar novas formas diretamente na página | Desenhe-as como marcações e depois use {{ui:Pôr na página}}. Veja [Alterar o conteúdo próprio da página](topic:page-content). |
| Girar objetos da página em qualquer ângulo | Mova e redimensione-os; gire a página inteira com {{ui:Páginas}}. |
| Alterar a fonte ou o tamanho de uma linha de texto, ou texto que se estende por várias linhas | Altere as palavras uma linha por vez; para um novo texto em outra fonte, adicione uma marcação de texto. |
| Editar o conteúdo de uma imagem digitalizada | Substitua a imagem, ou marque-a. |
| Editar PDFs criptografados ou assinados | Peça uma cópia sem assinatura; as marcações funcionam em qualquer PDF. |

## Medição

| Ainda não implementado | Faça isto hoje |
|---|---|
| Medições de raio | Desenhe um {{ui:Arco}} sobre ele, ou meça o {{ui:Comprimento}} de lado a lado e divida o valor por dois. |
| Editar os cantos de um recorte | Remova os recortes e desenhe-os de novo. |
| Aplicar uma só escala a várias folhas de uma vez | Calibre cada folha; escolher uma predefinição leva alguns segundos por folha. |
| Várias escalas em uma folha (viewports) | Calibre para o desenho que você mais mede. Mudar a escala de uma folha remede tudo nela, então anote os valores de detalhe antes de recalibrar para eles. |
| Snap em linhas do desenho | Dê zoom antes de clicar, ou digite comprimentos e ângulos (veja [Esboçar em escala](topic:calibrate-and-measure#sketch-to-scale)). |
| Um levantamento de quantitativos completo, com itens, composições e preços | Use o TakeoffCraft, o aplicativo de levantamento de quantitativos da família CadCraft. |

## Folhas e arquivos

| Ainda não implementado | Faça isto hoje |
|---|---|
| Desfazer uma alteração de página (girar, mover, inserir, excluir) | Feche sem salvar e abra o PDF original de novo. Veja [Imprimir e alterar as páginas](topic:pages-and-printing). |
| Fechar um dos arquivos de um conjunto | {{ui:Fechar}} fecha o conjunto inteiro; reabra os arquivos de que precisa. |
| Salvar um conjunto como projeto para reabrir em um só passo | Abra os mesmos PDFs de novo. |
| Imprimir em uma escala escolhida, ou várias folhas por página | Use a janela de impressão do seu navegador, ou imprima a cópia salva a partir de outro leitor de PDF. |

## Listas e exportações

| Ainda não implementado | Faça isto hoje |
|---|---|
| Posicionar os problemas BCF importados na posição do modelo | Problemas importados que não estão ligados a nenhuma folha ficam empilhados no canto superior esquerdo: mova-os. |
| Importar conjuntos de ferramentas de outros programas de marcação | Recrie as ferramentas de que precisa e salve-as na caixa de ferramentas; exporte-a para o escritório. |

## Comparar

| Ainda não implementado | Faça isto hoje |
|---|---|
| Comparar texto composto em uma fonte, ou uma lista do que mudou | Use a sobreposição e o controle deslizante, ou {{ui:Linhas alteradas}} para linhas desenhadas. |
| Comparar folhas digitalizadas pelas linhas | Use a sobreposição de imagem. |
| Alinhar automaticamente todos os pares ao comparar um conjunto inteiro | Compare um par deslocado sozinho e use {{ui:Alinhar por dois pontos}}. |

## Painéis

| Ainda não implementado | Faça isto hoje |
|---|---|
| Mover a barra de ferramentas ou a barra de status | Só os dois painéis laterais se movem. |

## Plataformas

- **Desktop:** o MarkupCraft roda no navegador em Mac, Windows, Linux e iPad, e no CadCraft Studio, o aplicativo de desktop com todos os oito aplicativos em uma só instalação.
- O MarkupCraft está em desenvolvimento. Rótulos e comportamentos ainda podem mudar, e esta ajuda muda junto com eles.
