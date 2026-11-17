---
title: Ligazóns entre follas
summary: Facer que unha anotación salte a outra folla, e ligar cada chamada de folla como 3/A-501 á súa folla e vista dunha vez con Ligazóns por lotes.
keywords: hiperligazón, ligazón, ligazóns, saltar, chamada de folla, chamada de detalle, chamada de sección, 3/A-501, ir á folla, atrás, ligazón automática, ligazóns por lotes, bloque de títulos, número de folla, nome da folla, vista, detalle, cambiar o nome, renumerar, adenda, ligazón pdf
from: 86a17c37
---

Unha ligazón de folla leva dunha anotación a outra folla do conxunto: dun globo de detalle ao detalle, dunha nota á folla a que se refire.

## Ligar unha anotación a unha folla

1. Seleccione a anotación.
2. En {{ui:Propiedades}}, escolla a folla en {{ui:Ligazón á folla}}.

Unha pequena frecha aparece na esquina superior dereita da anotación. Para seguila, manteña {{key:Mod}} e faga clic na anotación, ou selecciónea e escolla {{ui:Ir a …}} en {{ui:Propiedades}}. {{key:Alt+Left}} volve á folla de onde veu.

Unha ligazón nomea a folla polo seu número, así que segue funcionando despois de reabrir o conxunto ou de intercalar unha nova edición: abre a folla máis nova con ese número. Se esa folla non está aberta, a barra de estado di iso.

## Ligar todas as chamadas de folla de golpe

Escolla {{ui:Páxinas}} › {{ui:Ligazóns por lotes…}}, ou {{ui:Ligar chamadas de folla…}} baixo {{ui:Buscar texto}} na parte superior do panel {{ui:Follas}}.

1. **Comprobe os números de folla.** MarkupCraft lista cada folla aberta co número e o nome que leu do bloque de títulos da folla (ou da etiqueta de páxina), e de onde os obtivo. Corrixa os que estean mal, e escriba un número onde non atopou ningún (un bloque de títulos cuxo número se imprimiu como liñas non ten texto que ler). Despois escolla {{ui:Buscar chamadas}}. As súas correccións son un paso de desfacer, e convértense nas etiquetas de páxina do PDF gardado.
2. **Revise a lista.** MarkupCraft le o texto de cada folla en busca de chamadas como «3/A-501», «5 / A501», «DETAIL 2 ON A-501», un globo con «3» enriba de «A-501», ou un simple «A-501» nunha nota, e le os títulos de vista de cada folla (un número de detalle co número de folla debaixo, ou un número grande cun título ao lado). A lista ten tres partes:
   - {{ui:Ligará}}: cada chamada, a folla a que vai e a vista desa folla. Desmarque as que non queira. Se non se atopou a vista (unha chamada á vista 7 nunha folla con vistas de 1 a 6), escolla a vista na lista ao lado, ou deixe {{ui:Folla completa}}.
   - {{ui:Sen ligar}}: números de folla que ningunha folla aberta ten, con cantas chamadas nomean cada un. Escolla a folla a que se refire cada un (por exemplo, unha folla renumerada), e todas as chamadas a ese número ligaranse a ela. Ou déixeas sen ligar.
   - Cantas chamadas xa están ligadas e aínda van ao lugar correcto. Quédanse como están.
3. Escolla {{ui:Crear as ligazóns}}.

Cada chamada recibe unha caixa azul fina que é unha ligazón de folla. {{key:Mod}}+clic sobre ela abre a folla ampliada á vista. Un {{key:Mod+Z}} elimínaas todas.

Os códigos que só parecen números de folla, como R-19 ou W12X26, déixanse fóra: unha chamada debe ter a forma dos números de folla do propio conxunto. O número dunha folla, no seu bloque de títulos e nos títulos das súas vistas, nunca é unha chamada. As follas escaneadas non teñen texto que ler: use {{ui:Ler texto (OCR)…}} primeiro, ou lígueas unha a unha.

## Volver executalo cando cambie o conxunto

Ligazóns por lotes pode executarse tantas veces como queira:

- **Engadiuse unha folla**, como unha adenda con A-601: abra o seu ficheiro e volva executar Ligazóns por lotes. As chamadas a A-601 que antes non se ligaron agora si se ligan.
- **Renumerouse unha folla**: corrixa o seu número no paso 1. As ligazóns feitas por Ligazóns por lotes que xa non atopan a súa folla aparecen en {{ui:Sen ligar}}; escolla a folla unha vez e todas a seguen. As ligazóns que pasaron a outra vista actualízanse.
- As ligazóns que fixo á man en {{ui:Propiedades}} nunca se cambian.

## No PDF gardado

Unha ligazón a unha folla do mesmo PDF escríbese tamén como ligazón PDF, así que outros visores tamén saltan alí cun clic. Unha ligazón con vista abre esa vista no outro visor (o salto «fit rectangle» do PDF); unha sen vista abre a folla completa. As ligazóns a unha folla doutro ficheiro do conxunto só funcionan en MarkupCraft.
