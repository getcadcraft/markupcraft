---
title: Copia una àrea de la pàgina, o una superposició
summary: Copieu una part d'un full amb un rectangle, una el·lipse o una forma lliure i enganxeu-la en un altre full, a CadCraft, BimCraft, DetailCraft o qualsevol programa, a la seva mida; copieu-la com a superposició transparent, i alineeu una imatge amb dos punts.
keywords: copia àrea, àrea, talla, recorta, instantània, porta-retalls, regió, rectangle, el·lipse, cercle, forma lliure, lasso, imatge, png, superposició, transparent, opacitat, enganxa, mida real, escala, alinea, dos punts, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Trieu {{ui:Més}} › {{ui:Copia una àrea de la pàgina…}}. S'obre una barra sobre el full.

## Trieu l'àrea

Trieu {{ui:Rectangle}}, {{ui:El·lipse}} o {{ui:Forma lliure}} a la barra, i arrossegueu sobre el full:

- **Rectangle:** arrossegueu un quadre al voltant de la part a copiar.
- **El·lipse:** arrossegueu un quadre; l'el·lipse que hi ha dins es copia, i les cantonades fora d'ella són transparents.
- **Forma lliure:** dibuixeu al voltant de la part a copiar; la forma es tanca sola. Fora d'ella és transparent.

Torneu a arrossegar per començar de nou, o premeu {{key:Esc}}.

## Copia

- {{ui:Inclou les marques}} copia les vostres marques amb la pàgina; desmarqueu-la per al dibuix net.
- {{ui:Resolució}}: {{ui:Tal com es veu a la pantalla}}, 72, 150 o 300 dpi. La imatge es manté per sota de 3 MB; quan una àrea gran a alta resolució superaria aquest límit, la resolució es rebaixa i la línia d'estat indica a quina.
- {{ui:Copia}} (o {{key:Mod+C}} o {{key:Enter}}) posa l'àrea al porta-retalls com a imatge PNG, que s'enganxa a Word, al correu, en altres programes de PDF i en programes de dibuix.
- {{ui:Desa com a PNG}} baixa la imatge, per a un programa que descarta les parts transparents en enganxar.

## Copia com a superposició

{{ui:Copia com a superposició}} també fa transparent el paper blanc, de manera que només queden les línies. {{ui:Color}} dona a cada línia un sol color (vermell, blau, verd, taronja o lila) perquè la superposició destaqui sobre el dibuix de sota; {{ui:Colors propis}} els manté. {{ui:Intensitat}} és la intensitat inicial quan s'enganxa a les nostres aplicacions (50% si no la canvieu).

## Enganxa-la

**A MarkupCraft**, {{key:Mod+V}} en qualsevol full enganxa l'àrea com a marca d'imatge al punter. Entra a la seva mida:

- en paper, la mateixa mida que tenia al full d'on prové;
- quan tots dos fulls tenen escala, la mateixa mida al dibuix: una àrea d'un full 1:50 entra a la meitat de la seva mida en paper en un full 1:100.

Una superposició comença amb la seva intensitat; canvieu-la amb {{ui:Opacitat}} a {{ui:Propietats}}. Mogueu, redimensioneu, bloquegeu i suprimiu-la com qualsevol imatge, i marqueu {{ui:Aplana dins la pàgina en desar}} per dibuixar-la dins la pàgina.

**A CadCraft, BimCraft i DetailCraft** la còpia també coneix la seva mida, de manera que en enganxar entra a la mida real del dibuix quan el full tenia escala, o demana una mida quan no en tenia. Vegeu l'ajuda de cada aplicació sobre imatges.

## Alinea una imatge amb dos punts

Seleccioneu una sola imatge o superposició, i després trieu {{ui:Més}} › {{ui:Alinea una imatge amb dos punts}}:

1. Feu clic en un punt de la imatge.
2. Feu clic on va aquest punt.
3. Feu clic en un segon punt de la imatge, lluny del primer.
4. Feu clic on va aquest punt.

La imatge s'escala, es mou i es gira perquè els dos punts caiguin on heu fet clic. {{key:Esc}} atura; {{key:Mod+Z}} ho desfà en un sol pas.

## Bones de saber

- La mida només viatja amb la còpia entre les nostres aplicacions al mateix lloc, i només per a una còpia feta en les últimes hores; un altre programa rep una imatge simple.
- Si el navegador no deixa a MarkupCraft fer servir el porta-retalls del sistema, la línia d'estat ho diu: enganxar a les nostres aplicacions continua funcionant, i {{ui:Desa com a PNG}} funciona per a altres programes.
- Alinear gira la imatge tornant a dibuixar els seus píxels, de manera que una imatge girada és una mica més suau que l'original.
