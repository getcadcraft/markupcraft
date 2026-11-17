---
title: Capes de marques
summary: Poseu les marques en capes amb nom i després mostreu, amagueu o bloquegeu cada capa; altres visualitzadors de PDF també les poden canviar.
keywords: capes, capa, amagar, mostrar, bloquejar, agrupar marques, disciplina, mecànica, elèctrica, contingut opcional, ocg, visibilitat
from: 0fbb4c26
---

Les capes agrupen marques, per exemple per disciplina o per revisor. Amagueu una capa per veure el dibuix que hi ha sota, o bloquegeu-la perquè les seves marques no es moguin per accident.

## Crear una capa i dibuixar-hi

1. Obriu {{ui:Capes}}, a la part superior del tauler {{ui:Fulls}}.
2. Trieu {{ui:Capa nova}}, escriviu un nom com `Mecànica`, i trieu {{ui:Afegeix la capa}}.
3. La capa nova es converteix en la capa actual: totes les marques que dibuixeu a partir d'ara hi van. Trieu el nom d'una altra capa, o {{ui:Cap capa}}, per canviar on van les marques noves.

Per moure una marca a una altra capa, seleccioneu-la i trieu la capa sota {{ui:Capa}} a {{ui:Propietats}}. {{ui:Capa nova…}} al final d'aquesta llista en crea una a l'instant. El canvi es pot desfer amb {{key:Mod+Z}}.

## Mostrar, amagar i bloquejar

La fila de cada capa té dos botons:

- L'**ull** mostra o amaga la capa. Les marques amagades no es dibuixen ni es poden seleccionar; encara compten a la llista {{ui:Marques}}.
- El **cadenat** manté les marques de la capa al full, però impedeix que se seleccionin, es moguin o se suprimeixin.

El botó del **llapis** canvia el nom d'una capa i porta les seves marques amb ella. Filtreu la llista {{ui:Marques}} per {{ui:Capa}} per veure les marques d'una sola capa.

## Al PDF desat

Cada capa es converteix en una capa del PDF (contingut opcional). Els altres visualitzadors de PDF mostren les capes al seu panell de capes i les poden canviar; una capa que heu amagat també comença amagada allà. Les capes que ja tenia el dibuix, com les capes de CAD, es mantenen tal com eren. Quan torneu a obrir la còpia a MarkupCraft, les marques tornen a les seves capes, amagades i bloquejades tal com les vau deixar.

## Cal saber

- Amagar i bloquejar no són edicions: no es desfan amb {{key:Mod+Z}}, però es desen amb el PDF.
- Copiar i enganxar manté la capa d'una marca.
- Una còpia aplanada dibuixa cada marca dins de la pàgina, sigui quina sigui la seva capa. Vegeu [Desa una còpia aplanada](topic:flatten).
