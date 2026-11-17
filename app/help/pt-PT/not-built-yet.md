---
title: O que ainda não está implementado
summary: O que esta versão do MarkupCraft ainda não faz e o que fazer entretanto.
keywords: em falta, roteiro, planeado, limitação, não suportado, em breve, pedido de funcionalidade, sessões, nuvem, assinatura digital, ligações web
from: 0872fede
---

MarkupCraft está em desenvolvimento. Isto é o que a versão atual **não** faz, para poder planear em conformidade. Descreve a versão de hoje, não promessas.

## Trabalhar com outras pessoas

| Ainda não implementado | Fazer hoje |
|---|---|
| Gravação e sincronização na nuvem entre computadores | Guarde os PDF junto com os ficheiros do projeto. A gravação na nuvem ainda não está disponível. |
| Fusão das cópias de duas pessoas com as anotações | Divida as folhas entre os revisores, ou copie algumas anotações com {{key:Mod+C}} e {{key:Mod+V}}. Os RFI, os documentos para aprovação e os diários de obra fundem-se: consulte [Acompanhar RFIs, documentos para aprovação e diários de obra](topic:field-records). |
| Equipas, notificações e projetos na nuvem para RFI e documentos para aprovação | Envie o PDF e use {{ui:Juntar}} para reunir as cópias. |
| RFI, documentos para aprovação e diários de obra numa sessão ao vivo | Cada pessoa trabalha na própria cópia; reúna as cópias com {{ui:Juntar}}. |
| Fusão das alterações de duas pessoas em campos diferentes de um mesmo registo | A cópia alterada por último prevalece para esse registo no seu todo (as respetivas conversas e nomes de anexos são unidos). Combine quem edita cada registo. |
| Ferramentas de assistente para RFI, documentos para aprovação e diários de obra | Trabalhe com elas no separador {{ui:Obra}}. Os assistentes podem trabalhar com anotações: consulte [Utilizar o MarkupCraft com um assistente de IA](topic:use-with-ai-assistants). |
| Editar ou eliminar uma resposta depois de enviada | Anule logo, ou acrescente uma resposta de correção. |
| Alterar quem é o autor de uma anotação | Defina o nome antes de começar. |

## Anotações

| Ainda não implementado | Fazer hoje |
|---|---|
| Carimbos com campos a preencher, assinaturas digitais certificadas | Use um carimbo de texto personalizado, que contém o nome e a data, ou uma imagem da assinatura. |
| Anexar ficheiros que não sejam fotografias (documentos, vídeos) | Guarde-os junto ao PDF e refira-os no comentário. |
| Ligações a sítios Web ou a ficheiros que não estão abertos | Escreva o endereço ou o nome do ficheiro no comentário. |
| Conjuntos de estados personalizados | Use os quatro estados, e o assunto para qualquer coisa mais. |
| Editar comentários que vieram com o ficheiro como só de leitura (realces de texto, carimbos de outros programas) | Responda-lhes, ou desenhe uma anotação do MarkupCraft junto a eles. |
| Traços de caneta sensíveis à pressão | Defina a espessura da linha. |

## O conteúdo próprio da página

| Ainda não implementado | Fazer hoje |
|---|---|
| Desenhar formas novas diretamente na página | Desenhe-as como anotações e depois escolha {{ui:Pôr na página}}. Consulte [Alterar o conteúdo da própria página](topic:page-content). |
| Rodar objetos da página para qualquer ângulo | Mova-os e redimensione-os; rode a página inteira com {{ui:Páginas}}. |
| Alterar o tipo de letra ou o tamanho de uma linha de texto, ou texto que passa para várias linhas | Altere as palavras uma linha de cada vez; para texto novo noutro tipo de letra, acrescente uma anotação de texto. |
| Editar o conteúdo de uma imagem digitalizada | Substitua a imagem, ou anote-a. |
| Editar PDF cifrados ou assinados | Peça uma cópia sem assinatura; as anotações funcionam em qualquer PDF. |

## Medição

| Ainda não implementado | Fazer hoje |
|---|---|
| Medições de raio | Desenhe um {{ui:Arco}} ao longo dele, ou meça o {{ui:Comprimento}} de um lado ao outro e divida por dois. |
| Editar os cantos de um recorte | Remova os recortes e desenhe-os de novo. |
| Aplicar uma escala a muitas folhas de uma vez | Calibre cada folha; escolher uma predefinição demora alguns segundos por folha. |
| Várias escalas numa folha (viewports) | Calibre para o desenho que mais medir. Alterar a escala de uma folha volta a medir tudo nela, por isso anote os valores de pormenor antes de recalibrar para eles. |
| Snap às linhas do desenho | Aproxime antes de clicar, ou escreva comprimentos e ângulos (consulte [Esboçar à escala](topic:calibrate-and-measure#sketch-to-scale)). |
| Uma medição completa com itens, composições e preços | Use o TakeoffCraft, a aplicação de medição de quantidades da família CadCraft. |

## Folhas e ficheiros

| Ainda não implementado | Fazer hoje |
|---|---|
| Anular uma alteração de página (rodar, mover, inserir, eliminar) | Feche sem guardar e abra novamente o PDF original. Consulte [Imprimir e alterar as páginas](topic:pages-and-printing). |
| Fechar um ficheiro de um conjunto | {{ui:Fechar}} fecha o conjunto inteiro; reabra os ficheiros de que precisa. |
| Guardar um conjunto como projeto para reabrir de uma vez | Abra novamente os mesmos PDF. |
| Imprimir numa escala escolhida, ou várias folhas por papel | Use a caixa de diálogo de impressão do navegador, ou imprima a cópia guardada noutro leitor de PDF. |

## Listas e exportações

| Ainda não implementado | Fazer hoje |
|---|---|
| Colocar os tópicos BCF importados na respetiva posição no modelo | Os tópicos importados que não estão ligados a nenhuma folha ficam empilhados no canto superior esquerdo: mova-os. |
| Importar conjuntos de ferramentas de outros programas de anotação | Recrie as ferramentas de que precisa e guarde-as no baú; exporte o baú para o escritório. |

## Comparar

| Ainda não implementado | Fazer hoje |
|---|---|
| Comparar texto composto num tipo de letra, ou uma lista do que mudou | Use a sobreposição e o cursor, ou {{ui:Linhas alteradas}} para as linhas desenhadas. |
| Comparar folhas digitalizadas pelas suas linhas | Use a sobreposição de imagem. |
| Alinhar automaticamente todos os pares ao comparar um conjunto inteiro | Compare um par deslocado isoladamente e use {{ui:Alinhar por dois pontos}}. |

## Painéis

| Ainda não implementado | Fazer hoje |
|---|---|
| Mover a barra de ferramentas ou a barra de estado | Só os dois painéis laterais se movem. |

## Plataformas

- **Ambiente de trabalho:** o MarkupCraft funciona no navegador em Mac, Windows, Linux e iPad, e no CadCraft Studio, a aplicação de ambiente de trabalho com as oito aplicações numa só instalação.
- O MarkupCraft está em desenvolvimento. Os rótulos e o comportamento podem mudar, e esta ajuda muda com eles.
