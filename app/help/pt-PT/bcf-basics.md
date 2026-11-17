---
title: Noções básicas de BCF
summary: O que contém uma exportação BCF do MarkupCraft, como a usar com ferramentas de coordenação BIM, e os seus limites.
keywords: bcf, bcfzip, formato de colaboração BIM, questões, coordenação, conflito, tópicos, ponto de vista, instantâneo, openbim, buildingsmart, exportar questões
from: 446f38c1
---

BCF (BIM Collaboration Format) é um formato de ficheiro aberto para passar questões entre ferramentas BIM. Muitos programas de coordenação e de autoria de modelos conseguem importar um ficheiro `.bcfzip` como lista de questões. O MarkupCraft escreve **BCF 2.1**.

## Criar um ficheiro

1. Abra o separador {{ui:Anotações}}.
2. Filtre a lista para o que pretende enviar, por exemplo {{ui:Estado}} «Aberto». Só as anotações listadas são exportadas.
3. Escolha {{ui:BCF}}.
4. Aguarde enquanto cria um instantâneo de cada anotação («A criar instantâneos para BCF (5 de 20)…»).

Resultado: «<name> markups.bcfzip» é transferido, e a barra de estado indica quantos tópicos contém e o tamanho do ficheiro.

## O que contém

Cada anotação passa a ser um **tópico**:

| Campo do tópico | Preenchido com |
|---|---|
| Título | Número da anomalia, assunto e folha, por exemplo «#4 Nuvem em A-101 — Planta do piso» |
| Tipo | O tipo de anotação (Nuvem, Chamada, Comprimento…) |
| Estado | Aberto, Aceite, Rejeitado ou Concluído |
| Etiquetas | O tipo de anotação e a folha |
| Autor e datas | O autor da anotação, as datas de criação e de alteração |
| Atribuído a, data limite | Da respetiva anomalia, quando tiver uma |
| Descrição | O texto ou a redação do carimbo, o valor medido, o comentário, e a folha e o ficheiro |
| Comentários | Um por resposta, com autor e data |
| Instantâneo | Uma imagem da anotação na sua parte da folha |
| Ponto de vista | Uma vista de cima do lugar da anotação na folha |

Exportar outra vez a mesma anotação gera o mesmo ID de tópico, por isso uma ferramenta que importe BCF pode reconhecê-la como a mesma questão.

## Limites a ter em conta

- **Uma folha não é um modelo.** O ponto de vista aponta para a posição da anotação no papel, medida em metros de papel. Não leva uma ferramenta BIM a um lugar do modelo. Use o instantâneo e o nome da folha para encontrar o local.
- **Os estados e os tipos são próprios do MarkupCraft** (Aberto, Aceite, Rejeitado, Concluído; Nuvem, Chamada…). O ficheiro declara-os, como o BCF permite, mas uma ferramenta com listas fixas próprias pode associá-los ou ignorá-los.
- **Importar traz comentários, não vistas do modelo.** {{ui:Importar BCF}} acrescenta respostas e estados às anotações que exportou, e cria notas para outras questões; não consegue mostrar uma câmara do modelo. Veja [Lista de anotações e exportação](topic:markups-list-and-export#import-bcf).
- Devolver as anotações num PDF costuma ser mais simples nas revisões de desenhos. O BCF serve para levar os comentários dos desenhos para um fluxo de trabalho de coordenação de modelos.
