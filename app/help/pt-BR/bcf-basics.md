---
title: Noções básicas de BCF
summary: O que uma exportação BCF do MarkupCraft contém, como usá-la com ferramentas de coordenação BIM e quais são os seus limites.
keywords: bcf, bcfzip, formato de colaboração BIM, problemas, coordenação, interferência, tópicos, ponto de vista, instantâneo, openbim, buildingsmart, exportar problemas
from: 446f38c1
---

BCF (BIM Collaboration Format) é um formato de arquivo aberto para passar problemas entre ferramentas BIM. Muitos programas de coordenação e modelagem BIM podem importar um arquivo `.bcfzip` como uma lista de problemas. O MarkupCraft grava **BCF 2.1**.

## Gerar um arquivo

1. Abra a guia {{ui:Marcações}}.
2. Filtre a lista para o que deseja enviar, por exemplo {{ui:Status}} "Aberto". Somente as marcações listadas são exportadas.
3. Escolha {{ui:BCF}}.
4. Aguarde enquanto ele faz um instantâneo de cada marcação ("Gerando instantâneos para BCF (5 de 20)…").

Resultado: "<name> markups.bcfzip" é baixado, e a barra de status informa quantos tópicos ele contém e o tamanho do arquivo.

## O que há nele

Cada marcação vira um **tópico**:

| Campo do tópico | Preenchido com |
|---|---|
| Título | Número do item de revisão, assunto e folha, por exemplo "#4 Nuvem em A-101 — Planta baixa" |
| Tipo | O tipo da marcação (Nuvem, Chamada, Comprimento…) |
| Status | Aberto, Aceito, Rejeitado ou Concluído |
| Rótulos | O tipo da marcação e a folha |
| Autor e datas | O autor da marcação e as datas de criação e de modificação |
| Atribuído a, data limite | Do item de revisão, quando ele existe |
| Descrição | O texto da marcação ou o texto do carimbo, o valor medido, o comentário, e a folha e o arquivo |
| Comentários | Um por resposta, com autor e data |
| Instantâneo | Uma imagem da marcação na parte da folha onde ela está |
| Ponto de vista | Uma vista de cima do lugar da marcação na folha |

Exportar a mesma marcação de novo gera o mesmo ID de tópico, então uma ferramenta que importa BCF pode reconhecê-la como o mesmo problema.

## Limites a conhecer

- **Uma folha não é um modelo.** O ponto de vista aponta para a posição da marcação no papel, medida em metros de papel. Ele não leva uma ferramenta BIM a um lugar no modelo. Use o instantâneo e o nome da folha para encontrar o local.
- **Status e tipos são do MarkupCraft** (Aberto, Aceito, Rejeitado, Concluído; Nuvem, Chamada…). O arquivo os declara, como o BCF permite, mas uma ferramenta com listas fixas próprias pode mapeá-los ou ignorá-los.
- **Importar traz comentários, não vistas do modelo.** {{ui:Importar BCF}} adiciona respostas e status às marcações que você exportou, e cria notas dos outros problemas; não consegue mostrar uma câmera do modelo. Veja [Lista de marcações e exportação](topic:markups-list-and-export#import-bcf).
- Enviar as marcações de volta como PDF costuma ser mais simples para revisões de desenho. O BCF serve para levar comentários de desenho para um fluxo de coordenação de modelos.
