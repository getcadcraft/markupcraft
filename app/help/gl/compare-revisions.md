---
title: Comparar dúas revisións
summary: Superpoña unha emisión antiga e outra nova dunha folla en dúas cores, aliñe por dous puntos e marque o que cambiou con nubes.
keywords: comparar, superposición, superposición de páxinas, revisión, diff, diferenzas, cambios, antigo novo, aliñar, comprobación, emisión, boletín
from: 62f5d1c5
---

Comparar superpón dúas follas. As liñas só na folla antiga móstranse en vermello, as liñas só na folla nova en azul, e as liñas de ambas en gris apagado. As cores aparecen nomeadas na lenda baixo a folla: "Só na folla antiga", "Só na folla nova", "En ambas".

## Comparar dúas follas

1. Abra as dúas emisións. Poden ser páxinas dun mesmo PDF ou de PDF distintos; ábraas xuntas como un conxunto (ver [Traballar con varios ficheiros á vez](topic:several-files)).
2. Escolla a lapela {{ui:Comparar}} á dereita.
3. Escolla a {{ui:Folla antiga}} e a {{ui:Folla nova}}. A folla nova comeza coa que ten aberta. Cando hai varios ficheiros abertos, o nome do ficheiro de cada folla móstrase despois do seu nome.
4. Escolla {{ui:Comparar}}.

Resultado: MarkupCraft mostra a folla nova coa antiga mesturada, aparece a lenda, e a lapela di "Comparando <old> (antiga) con <new> (nova). As anotacións da folla nova seguen editables."

## Esvaecer entre antiga e nova

Arrastre o control {{ui:Antiga e nova}}. Todo á esquerda mostra só a folla antiga, todo á dereita só a nova, e o medio ambas. Ir e vir cun control deslizante adoita ser o xeito máis rápido de ver un cambio pequeno.

## Aliñar as follas

Se as dúas emisións se trazaron cunha marxe, tamaño ou xiro distintos, todo parece cambiado. Para corrixilo:

**Por dous puntos (o mellor):**

1. Escolla {{ui:Aliñar por dous puntos}}. A vista mostra só a folla antiga.
2. Faga clic nunha característica nítida que poida atopar nas dúas follas, como a intersección dunha reixa de piares. A lapela conta os pasos ("1 de 4").
3. Faga clic nunha segunda característica, lonxe da primeira, como a esquina oposta da reixa.
4. A vista pasa á folla nova. Faga clic de novo na primeira característica.
5. Faga clic de novo na segunda característica.

Resultado: "Aliñada: folla antiga escalada ao 100.00%, xirada 0.00°. Mova para afinar." A folla antiga móvese, escálase e xírase para encaixar. {{key:Esc}} cancela mentres escolle. Amplíe cada característica antes de facer clic para un axuste preciso.

**Por desprazamento:** use os catro botóns de frecha baixo "Aliñar" para mover a folla antiga. Escolla o paso (0.25, 1, 5 ou 20 pt; 72 pt é unha polgada no papel). A lapela indica canto se moveu.

{{ui:Restablecer}} elimina o aliñamento e os desprazamentos.

## Só liñas cambiadas

Debaixo dos botóns de aliñamento, escolla {{ui:Liñas cambiadas}} en vez de {{ui:Superposición de imaxe}}. MarkupCraft compara entón as liñas propias das dúas follas, non as súas imaxes: a folla nova móstrase tal cal, coas liñas só na folla antiga en vermello e as só na nova en azul. Unha liña que só se acortou mostra só a parte que falta. Aliñe primeiro as follas (ver enriba): a comparación usa o aliñamento, así que unha folla que só foi desprazada non mostra cambios. A liña de estado indica canto cambiou.

Isto funciona con PDF trazados desde CAD, onde o debuxo está feito de liñas. As follas escaneadas non teñen liñas que comparar: para elas use a superposición de imaxe. O texto escrito cunha tipografía (non debuxado como trazos) non se compara.

## Marcar os cambios

Mentres compara, está na folla nova e todas as ferramentas funcionan. Debuxe nubes ao redor dos cambios conforme os atope; pertencen á folla nova e permanecen cando deixa de comparar.

{{ui:Marcar os cambios con núbe}} faino por vostede: agrupa as liñas cambiadas que están próximas e debuxa unha nube de revisión arredor de cada grupo na folla nova, con "Cambiado desde <old sheet>" como comentario. Un {{key:Mod+Z}} elimínaas todas; borre as que non precise.

## Comparar un conxunto completo

Cando a nova emisión chega como PDF propio, abra os dous PDF e abra {{ui:Comparar dous conxuntos}} na lapela {{ui:Comparar}}. Escolla o ficheiro antigo e o novo, e logo escolla {{ui:Comparar os conxuntos}}. As follas emparéllanse polo seu número (como en [substitución de follas](topic:slip-sheet-a-revised-set)), compáranse polas súas liñas, e listanse coas máis cambiadas primeiro. Escolla unha folla da lista para comparar ese par con {{ui:Liñas cambiadas}}.

{{ui:Marcar cunha nube todos os cambios}} marca cunha nube cada grupo de liñas cambiadas en cada folla cambiada, nun paso que pode desfacer. A comparación do conxunto non aliña antes as follas, así que unha folla desprazada na páxina aparece como cambiada: compare ese par por separado e use {{ui:Aliñar por dous puntos}}.

## Deixar de comparar

Escolla {{ui:Deixar de comparar}}, ou vaia a outra folla. O aliñamento recórdase para o mesmo par de follas ata que pecha o conxunto.

## Cousas a ter en conta

- Comparar traballa co que está debuxado, píxel a píxel. Non sabe que unha liña se moveu; mostra a posición antiga nunha cor e a nova na outra.
- O texto que se reorganizou, unha data cambiada na cartela ou un estilo de trazado distinto tamén aparecen como cambios.
- Unha folla escaneada comparada cunha trazada é ruidosa: o escaneo esvae as liñas e desprázaas.
- A comparación de texto escrito cunha tipografía, e unha lista do que cambiou, aínda non están feitas.
