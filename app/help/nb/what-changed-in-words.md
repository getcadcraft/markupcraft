---
title: Lag en liste over hva som er endret mellom revisjoner
summary: Sammenlign to planssett og få en enkel liste, ark for ark, over hvor tegning og ord er endret, klar til å lese, kopiere eller gi til assistenten din.
keywords: hva er endret, endringer, revisjonsliste, sammenligningsliste, enkel liste, fortell, assistent, delta, revisjonsoppsummering
from: bab93d2e
---

Sammenligningsverktøyene viser endringene på arket. Dette verktøyet skriver dem ned.

1. Åpne begge revisjonene (se [Åpne et planssett](topic:open-a-plan-set)).
2. Åpne fanen {{ui:Sammenlign}}, deretter {{ui:Sammenlign et helt sett}}.
3. Velg den tidligere og den senere filen, og velg {{ui:List endringene}}.

Listen starter med en telling («2 av 14 samsvarende ark er endret; 1 nytt; 1 fjernet») og dekker deretter hvert endret ark, største endring først: hvor på arket (øverst til venstre, midten…), hvor stor den er, om linjer ble lagt til, fjernet eller begge deler, hvor mange markeringer som ligger der, og hvilke ord som dukket opp eller forsvant. På et kalibrert ark er størrelsen oppgitt i virkelige enheter i tillegg til tommer på papiret.

Listen sier hva som finnes på siden; den sier ikke hva det betyr. En tegnet linje som flytter seg, kan være en vegg eller en peker. Den tilkoblede assistenten din kan lese listen med verktøyet `revisions_changes` og sette den i ord, og resten kan du se i tegningen selv. {{ui:Kopier listen}} legger den på utklippstavlen, og {{ui:CSV}} skriver én rad per endring.

Ark kobles sammen etter arknummer, som i [Sett inn et erstatningsark for et revidert sett](topic:slip-sheet-a-revised-set). Endringer som er mindre enn noen få punkter, ignoreres, og tekst som er en del av et bilde (en skanning), har ingen ord å sammenligne.
