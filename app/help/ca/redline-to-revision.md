---
title: Envia les marques al delineant com a fitxer de marcatge
summary: Escriviu les marques obertes com a fitxer de marcatge per a qui dibuixa els canvis, i després carregueu les seves respostes perquè cada marca mostri Acceptat o Rebutjat.
keywords: marcatge, revisió, delineant, accepta, rebutja, respostes, cc-redline, núvol de revisió, aplica marques
from: cb099d04
---

Revisar és la meitat de la feina; el dibuix encara s'ha de canviar. El fitxer de marcatge porta cada marca oberta al delineant, i les respostes del delineant porten el resultat de tornada.

## Enviar

1. Obriu la pestanya {{ui:Tasques}} i obriu {{ui:Marcatge de revisió}}.
2. Escriviu la revisió a què es refereixen les marques (per exemple B).
3. Trieu {{ui:Exporta el fitxer de marcatge}}.

Obteniu un fitxer `.redline.json` amb un element per a cada marca d'estat Obert: el seu full, on és (com a fraccions del full, perquè una nova impressió a una altra mida encara coincideixi, i en punts), les seves paraules, l'autor i el fil, i la seva tasca si en té una. Els comentaris de només lectura d'altres programes, les imatges i les llegendes es deixen fora.

## Respostes

La part del delineant respon a cada element com Acceptat, Rebutjat o Fet, amb una nota, en un fitxer `.redline-answers.json`. Trieu {{ui:Carrega el fitxer de respostes…}} i seleccioneu-lo: cada marca rep aquest estat i la nota del delineant al seu fil, i una tasca amb una marca acceptada o feta es dona per acabada. Un sol pas de desfer torna enrere totes les respostes.

El format del fitxer és a `docs/REDLINE-FORMAT.md`. La part de CadCraft (llegir el paquet, acceptar o rebutjar cada element, els núvols de revisió i el registre) es desenvolupa per separat.
