---
title: Limpar trazos da pluma e importar comentarios de revisión e progreso da obra
summary: Converta os trazos libres da pluma en liñas, círculos, arcos e rectángulos; importe os comentarios de revisión dun paquete de licenza e o progreso dunha obra segundo o levantamento como notas.
keywords: pluma, a man alzada, limpar, endereitar, círculo, liña, rectángulo, arco, licenza, comentarios de revisión, progreso, dron, escaneo, levantamento, notas, csv
from: 547d8e42
---

## Limpar os trazos da pluma

Debuxe con {{ui:Pluma}}, abra o menú {{ui:Máis}} no grupo Editar e escolla {{ui:Limpar os trazos da pluma}}. Cada trazo de pluma seleccionado convértese no que se pretendía: un trazo recto pasa a ser unha liña (horizontal ou a plomo cando case o era), un redondo unha elipse, parte dun círculo un arco, un trazo pechado de catro esquinas un rectángulo, e calquera outro unha polilínea ou un polígono. As pontas soltas de trazos debuxados xuntos axústanse entre elas. Sen ningún trazo de pluma seleccionado, limpanse todos os trazos de pluma da folla aberta. É un só paso de desfacer: Ctrl+Z devolve o trazo a man alzada. A forma calcúlase no seu ordenador segundo regras fixas; non se envía nada a ningún lugar.

## Importar comentarios de revisión

O paquete de licenza de BimCraft contén `01-review-comments.csv`: os comentarios que probablemente fará un revisor do plano, cada un coa norma, a cláusula, o que se necesita, o que se atopou e o que hai que facer. Na lapela {{ui:Tarefas}}, abra {{ui:Comentarios de revisión de licenza}} e escolla {{ui:Importar comentarios (CSV)}}. Cada comentario convértese nunha nota aberta nunha columna á esquerda da folla aberta; arrástreo ao lugar ao que se refire. Calcúlanse a partir das comprobacións que existen, non a partir dun examinador de planos.

## Importar caixas de nodos HAZOP

O complemento de P&ID de CadCraft debuxa os nodos dun estudo HAZOP e pode gardalos como {{ui:Caixas de nodos HAZOP}} (un ficheiro JSON). Abra aquí a folla impresa do P&ID, vaia á lapela {{ui:Tarefas}}, abra {{ui:Caixas de nodos HAZOP}} e escolla {{ui:Importar caixas de nodos (JSON)}}. Cada nodo convértese nun rectángulo aberto na folla, co seu número, nome, equipo e liñas no texto, e o grupo escribe as súas conclusións como respostas nel. A folla tómase tal como se imprimiu a tamaño completo desde a esquina inferior esquerda do debuxo; se se imprimiu a outra escala, escriba antes ese número en {{ui:Impreso a}} (0.5 para 1:2). Un nodo que cae fóra da páxina non se debuxa, e o panel indica cantos son. Os marcadores son unha axuda para o estudo: mostran onde están os nodos, pero non valoran o estudo.

## Importar progreso da obra

CivilCraft garda unha fila por cada voo de dron ou escaneo da obra. Na lapela {{ui:Tarefas}}, abra {{ui:Progreso da obra}} e escolla {{ui:Importar progreso (JSON)}}. Cada levantamento convértese nunha nota na folla aberta que indica canto está feito, o que queda por escavar ou encher, o que se escavou ou encheu de máis e o que sobresae do plano. Un levantamento con algo fóra do plano queda Aberto; un limpo queda Aceptado.
