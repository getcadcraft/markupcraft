---
title: Listar o que cambiou entre revisións
summary: Compare dous conxuntos de planos e obteña unha lista simple, folla por folla, de onde cambiaron o debuxo e as palabras, lista para ler, copiar ou entregar ao seu asistente.
keywords: o que cambiou, cambios, lista de revisión, lista de comparación, lista simple, narrar, asistente, delta, resumo de revisión
from: bab93d2e
---

As ferramentas de comparación mostran os cambios na folla. Esta escríbeos.

1. Abra as dúas revisións (vexa [Abrir un conxunto de planos](topic:open-a-plan-set)).
2. Abra a lapela {{ui:Comparar}} e logo {{ui:Comparar un conxunto completo}}.
3. Escolla o ficheiro anterior e o posterior e escolla {{ui:Listar os cambios}}.

A lista comeza cun reconto («2 de 14 follas coincidentes cambiaron; 1 nova; 1 retirada») e logo recolle cada folla cambiada, co maior cambio primeiro: onde está na folla (arriba á esquerda, centro…), de que tamaño, se se engadiron liñas, se se eliminaron ou ambas as cousas, cantas anotacións hai alí e que palabras apareceron ou desapareceron. Nunha folla calibrada o tamaño exprésase en unidades reais, ademais de en polgadas no papel.

A lista indica o que hai na páxina; non indica o que significa. Unha liña debuxada que se move pode ser un muro ou unha liña de chamada. O seu asistente conectado pode ler a lista coa ferramenta `revisions_changes` e expresala en palabras, e o resto pode velo na folla. {{ui:Copiar a lista}} pon a lista no portapapeis e {{ui:CSV}} escribe unha fila por cambio.

As follas emparéllanse polo número de folla, como en [Inserir unha folla de substitución nun conxunto revisado](topic:slip-sheet-a-revised-set). Ignóranse os cambios menores de uns poucos puntos, e o texto que forma parte dunha imaxe (un escaneado) non ten palabras que comparar.
