---
title: Noções básicas de BCF
summary: O que contém uma exportação BCF do MarkupCraft, como a utilizar com ferramentas de coordenação BIM, e os seus limites.
keywords: bcf, bcfzip, formato de colaboração BIM, questões, coordenação, conflito, tópicos, ponto de vista, instantâneo, openbim, buildingsmart, exportar questões
from: 0de26175
---

BCF (Formato de Colaboração BIM) é um formato de ficheiro aberto para transmitir questões entre ferramentas BIM. Muitos programas de coordenação e de criação de modelos podem importar um ficheiro `.bcfzip` como uma lista de questões. O MarkupCraft escreve **BCF 2.1**.

## Criar um

1. Abra o separador {{ui:Anotações}}.
2. Filtre a lista para o que pretende enviar, por exemplo {{ui:Estado}} "Aberto". Só as anotações listadas são exportadas.
3. Escolha {{ui:BCF}}.
4. Aguarde enquanto cria um instantâneo de cada anotação ("A criar instantâneos para BCF (5 de 20)…").

Resultado: "<name> markups.bcfzip" é transferido, e a barra de estado indica quantos tópicos contém e o tamanho do ficheiro.

## O que contém

Cada anotação torna-se um **tópico**:

| Campo do tópico | Preenchido com |
|---|---|
| Título | Número de pendência, assunto e folha, por exemplo "#4 Nuvem em A-101 — Planta do piso" |
| Tipo | O tipo de anotação (Nuvem, Chamada, Comprimento…) |
| Estado | Aberto, Aceite, Rejeitado ou Concluído |
| Etiquetas | O tipo de anotação e a folha |
| Autor e datas | O autor da anotação, as datas de criação e de modificação |
| Atribuída a, data limite | Do seu item de pendência, quando tem um |
| Descrição | O texto ou a redação do carimbo, o valor medido, o comentário, e a folha e o ficheiro |
| Comentários | Um por resposta, com autor e data |
| Instantâneo | Uma imagem da anotação na sua parte da folha |
| Ponto de vista | Uma vista de cima da posição da anotação na folha |

Exportar a mesma anotação outra vez dá o mesmo ID de tópico, por isso uma ferramenta que importa BCF pode reconhecê-la como a mesma questão.

## O que volta ao importar

{{ui:Importar BCF}} lê ficheiros BCF 2.0, 2.1 e 3.0 (verificado nos 19 ficheiros de teste oficiais buildingSMART 3.0: todos os tópicos foram lidos, e os comentários dos três que têm texto). Para um tópico que é seu (mesmo ID de tópico), acrescenta os comentários novos como respostas e assume o novo estado. Qualquer outro tópico torna-se uma nota na folha que o seu rótulo ou nome de ficheiro indica, senão na folha aberta, com o título, a descrição, o responsável e a data limite como texto da nota, e os comentários como respostas.

| No tópico BCF | No MarkupCraft |
|---|---|
| Título, descrição, responsável, data limite | O texto da nota |
| Comentários com texto | Respostas |
| Estado Open, Accepted, Rejected, Completed (Closed, Resolved, Done contam como Completed) | O estado da anotação |
| Autor e data de criação | O autor e a data da nota |
| Posição da câmara | Um lugar na folha, só para um tópico ligado a uma folha por rótulo ou nome de ficheiro |
| Seleção do modelo, partes ocultas, planos de corte, instantâneos | Não são guardados: uma folha não tem modelo onde os mostrar |

## Limites a conhecer

- **Uma folha não é um modelo.** O ponto de vista aponta para a posição da anotação no papel, medida em metros de papel. Não leva uma ferramenta BIM a um lugar do modelo. Utilize o instantâneo e o nome da folha para encontrar o sítio.
- **Os estados e os tipos são próprios do MarkupCraft** (Aberto, Aceite, Rejeitado, Concluído; Nuvem, Chamada…). O ficheiro os declara, como o BCF permite, mas uma ferramenta com listas fixas próprias pode mapeá-los ou ignorá-los.
- **Importar traz comentários, não vistas do modelo.** {{ui:Importar BCF}} acrescenta respostas e estados às anotações que exportou, e cria notas para as outras questões; não consegue mostrar uma câmara do modelo. Veja [Lista de anotações e exportação](topic:markups-list-and-export#import-bcf).
- Enviar as anotações de volta em PDF costuma ser mais simples para revisões de desenhos. O BCF serve para levar comentários de desenhos para um fluxo de coordenação de modelos.
