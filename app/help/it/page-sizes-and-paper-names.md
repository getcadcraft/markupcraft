---
title: Formati pagina e nomi della carta
summary: Vedere la dimensione di ogni pagina PDF in millimetri e pollici e il suo nome di carta (serie A, B e C, ANSI, ARCH), e raggruppare un set misto per dimensione per trovare le pagine anomale.
keywords: dimensione pagina, formato carta, nome carta, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, architettonico, mm, pollici, dimensione personalizzata, per formato, dimensione anomala, set misto, controllo pdf, cliente, problema, mediabox, cropbox, rotazione
from: 08e1354f
---

Prima di inviare un set al cliente, controllare che ogni tavola abbia la dimensione giusta. {{ui:MarkupCraft}} legge la dimensione di ogni pagina dal PDF stesso e ne attribuisce il nome alla carta.

## Cosa si fa

Controllare la dimensione di una tavola, poi raggruppare l'intero set per dimensione.

## Passi

1. Aprire i PDF ({{ui:Apri}}), poi premere {{key:Esc}} finché non è selezionato nulla e {{ui:Seleziona}} è attivo.
2. Guardare {{ui:Proprietà}}. {{ui:Carta}} indica il nome e il verso, per esempio "A4, verticale". {{ui:Formato}} riporta millimetri e pollici.
3. Ogni riga dell'elenco {{ui:Tavole}} ha una riga con la dimensione sotto il nome della tavola.
4. Scegliere {{ui:Per formato}} nell'intestazione di {{ui:Tavole}}. L'elenco raggruppa le tavole sotto un'intestazione per ogni dimensione, con il gruppo più grande per primo. Una dimensione con solo poche tavole è segnalata come anomala.
5. Scegliere di nuovo {{ui:Per formato}} per tornare all'ordine originale del set.

Risultato: una pagina di dimensione diversa dalle altre si nota subito, prima di inviare il set.

## Come viene scelto il nome

- La dimensione deriva dal riquadro della pagina nel PDF, con la rotazione applicata, quindi un A3 orizzontale resta un A3.
- I nomi sono quelli delle serie A e B (ISO 216), della serie C (ISO 269), ANSI da A a E e ARCH da A a E.
- Una pagina entro 2 mm da un formato standard prende quel nome. Ogni altra pagina riporta {{ui:personalizzato}}, e {{ui:Formato standard più vicino}} indica quale formato è più vicino e di quanto differisce.
- I pollici derivano dalla dimensione reale della pagina, quindi una pagina A4 misura 8.26 x 11.69 in.

## Nei file che si salvano

La cartella di lavoro riassuntiva ({{ui:Elenco delle annotazioni}}, poi il foglio di calcolo) ha una colonna {{ui:Formato carta}} nel foglio {{ui:Per tavola}} e un foglio di lavoro {{ui:Formati pagina}}. Il report PDF ha una riga "Page sizes" con il conteggio di ogni dimensione.

:::note
I valori in pollici ANSI e ARCH sono stati digitati dalle tabelle pubblicate e non sono stati confrontati con gli standard stampati. Una pagina "personalizzata" vicina a uno di questi formati va verificata a mano.
:::
