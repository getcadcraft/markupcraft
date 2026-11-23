---
title: Noções básicas de BCF
summary: O que uma exportação BCF do MarkupCraft contém, como usá-la com ferramentas de coordenação BIM, e seus limites.
keywords: bcf, bcfzip, formato de colaboração BIM, problemas, coordenação, interferência, tópicos, ponto de vista, captura, openbim, buildingsmart, exportar problemas
from: 0de26175
---

BCF (formato de colaboração BIM) é um formato de arquivo aberto para transmitir problemas entre ferramentas BIM. Muitos programas de coordenação e de modelagem podem importar um arquivo `.bcfzip` como uma lista de problemas. O MarkupCraft grava **BCF 2.1**.

## Criar um

1. Abra a guia {{ui:Marcações}}.
2. Filtre a lista para o que você quer enviar, por exemplo {{ui:Status}} "Aberto". Somente as marcações listadas são exportadas.
3. Escolha {{ui:BCF}}.
4. Aguarde enquanto ele faz uma captura de cada marcação ("Fazendo capturas para BCF (5 de 20)…").

Resultado: "<name> markups.bcfzip" é baixado, e a barra de status informa quantos tópicos ele contém e o tamanho do arquivo.

## O que contém

Cada marcação se torna um **tópico**:

| Campo do tópico | Preenchido com |
|---|---|
| Título | Número de pendência, assunto e folha, por exemplo "#4 Nuvem em A-101 — Planta baixa" |
| Tipo | O tipo da marcação (Nuvem, Chamada, Comprimento…) |
| Status | Aberto, Aceito, Rejeitado ou Concluído |
| Rótulos | O tipo da marcação e a folha |
| Autor e datas | O autor da marcação, as datas de criação e de modificação |
| Atribuído a, data de vencimento | Do item de pendência dela, quando houver um |
| Descrição | Seu texto ou o texto do carimbo, o valor medido, o comentário, e a folha e o arquivo |
| Comentários | Um por resposta, com autor e data |
| Captura | Uma imagem da marcação na parte correspondente da folha |
| Ponto de vista | Uma vista de cima do lugar da marcação na folha |

Exportar a mesma marcação de novo gera o mesmo ID de tópico, então uma ferramenta que importa BCF pode reconhecê-la como o mesmo problema.

## O que volta na importação

{{ui:Importar BCF}} lê arquivos BCF 2.0, 2.1 e 3.0 (verificado nos 19 arquivos de teste oficiais do buildingSMART 3.0: todos os tópicos foram lidos, e os comentários dos três que têm texto). Para um tópico que é seu (mesmo ID de tópico), ele adiciona os novos comentários como respostas e assume o novo status. Qualquer outro tópico vira uma nota na folha indicada pelo rótulo ou nome de arquivo, ou, na falta disso, na folha aberta, com título, descrição, responsável e data de vencimento como texto da nota, e os comentários como respostas.

| No tópico BCF | No MarkupCraft |
|---|---|
| Título, descrição, responsável, data de vencimento | O texto da nota |
| Comentários com texto | Respostas |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done contam como Completed) | O status da marcação: Aberto, Aceito, Rejeitado, Concluído |
| Autor e data de criação | O autor e a data da nota |
| Posição da câmera | Um lugar na folha, somente para um tópico ligado a uma folha por rótulo ou nome de arquivo |
| Seleção do modelo, partes ocultas, planos de recorte, capturas | Não é mantido: uma folha não tem modelo onde mostrá-los |

## Limites a conhecer

- **Uma folha não é um modelo.** O ponto de vista aponta para a posição da marcação no papel, medida em metros de papel. Ele não leva uma ferramenta BIM a um lugar no modelo. Use a captura e o nome da folha para encontrar o local.
- **Status e tipos são próprios do MarkupCraft** (Aberto, Aceito, Rejeitado, Concluído; Nuvem, Chamada…). O arquivo os declara, como o BCF permite, mas uma ferramenta com listas fixas próprias pode mapeá-los ou ignorá-los.
- **A importação traz comentários, não vistas do modelo.** {{ui:Importar BCF}} adiciona respostas e status às marcações que você exportou, e cria notas dos outros problemas; ela não consegue mostrar uma câmera do modelo. Veja [Lista de marcações e exportação](topic:markups-list-and-export#import-bcf).
- Enviar as marcações de volta como PDF costuma ser mais simples para revisões de desenho. O BCF serve para levar comentários de desenho para um fluxo de coordenação de modelo.
