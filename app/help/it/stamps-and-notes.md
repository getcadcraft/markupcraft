---
title: Timbri e note adesive
summary: Timbra una tavola come Approvato, Rielaborare e ripresentare oppure con un testo personalizzato, e lascia note adesive che si aprono come commenti a comparsa.
keywords: timbro, immagine, incolla immagine, screenshot, appunti, logo, timbro foto, firma, approvato, approvato con osservazioni, rielaborare e ripresentare, respinto, revisionato, annullato, timbro personalizzato, nota adesiva, nota, commento, comparsa
from: 76026792
---

## Timbrare una tavola

1. Scegliere {{ui:Timbro}} ({{key:S}}).
2. In {{ui:Proprietà}}, a destra, scegliere il timbro sotto {{ui:Timbro}}:
   - Approvato
   - Approvato con osservazioni
   - Rielaborare e ripresentare
   - Respinto
   - Revisionato
   - Annullato
   - Testo personalizzato… (digitare fino a 60 caratteri nella casella che compare, poi premere {{key:Enter}} o fare clic altrove)
3. Fare clic sulla tavola dove va il timbro, oppure trascinare un riquadro per scegliere la dimensione.

Risultato: un timbro incorniciato in maiuscole con una seconda riga "Di <nome>, <data>". Un timbro posizionato con un clic è dimensionato per lo schermo allo zoom corrente, e sulla stampa resta tra mezzo pollice e un pollice e un quarto di altezza.

Il timbro scelto resta selezionato per il successivo, anche dopo aver riaperto MarkupCraft in questo browser.

**I colori seguono il significato:** i timbri Approvato sono verdi, Rielaborare e ripresentare arancio, Respinto e Annullato rossi, Revisionato blu, e i timbri personalizzati viola. Se si sceglie un altro colore in {{ui:Proprietà}}, quel colore viene mantenuto.

### Cambiare un timbro in seguito

Selezionarlo e scegliere un altro timbro in {{ui:Proprietà}}. Se aveva ancora il colore automatico, il colore cambia in base al significato.

Nome e data sul timbro sono l'autore del timbro e il giorno in cui è stato creato. Non cambiano quando lo si modifica, e l'autore di un timbro non può essere cambiato. Per timbrare a nome di un'altra persona, questa deve impostare il proprio nome e timbrare da sé.

:::note
La data su un timbro è la data in Tempo Universale Coordinato (UTC). Di sera tardi nelle Americhe, o di mattina presto in Asia e Australia, può mostrare il giorno successivo o precedente rispetto all'orologio locale. L'orario di creazione in {{ui:Proprietà}} è nel proprio fuso orario.
:::

### Timbri usati spesso

La cassetta degli strumenti include uno strumento timbro "Approvato con osservazioni", e qualsiasi timbro (testo e colore) può essere salvato come strumento a sé. Vedi [La cassetta degli strumenti](topic:tool-chest).

I timbri con campi da compilare (data di ricezione, numero di progetto) non sono ancora implementati.

## Timbrare un'immagine o la propria firma

L'elenco dei timbri in {{ui:Proprietà}} termina con altre due scelte:

- {{ui:Immagine…}} chiede un file PNG, JPEG o SVG sul computer, oppure una pagina di un PDF, come un sigillo aziendale o un logo. Le immagini grandi vengono ridotte a 1600 pixel sul lato più lungo; un SVG o una pagina PDF diventa un'immagine di quella dimensione.
- {{ui:La mia firma…}} apre un riquadro per la firma: firmare con il mouse, una penna o un dito, e scegliere {{ui:Usa questa firma}}. {{ui:Cancella}} ricomincia da capo. {{ui:Usa l'immagine di una firma…}} usa invece una scansione o una foto della firma: MarkupCraft rende trasparente la carta bianca e ritaglia l'immagine sull'inchiostro (per un PNG chiede prima conferma).

Poi fare clic sulla tavola per posizionarla (un'immagine larga 3 in, una firma larga 2 in), oppure trascinare un riquadro per adattarla dentro; le proporzioni vengono mantenute. Ridimensionarla con le sue maniglie come qualsiasi annotazione ({{key:Shift}} mantiene le proporzioni).

L'ultima immagine resta salvata in questo browser, quindi è pronta la volta successiva; {{ui:Scegli un'altra immagine…}} la sostituisce. Ogni firma disegnata o caricata viene conservata in {{ui:Le tue firme}} (fino a otto, la più recente per prima): fare clic su una per usarla, oppure su × per rimuoverla. Vedi [Cosa resta in questo browser](topic:browser-storage).

Nel PDF salvato un'immagine è un commento timbro che mostra l'immagine, quindi qualsiasi visualizzatore PDF la mostra e la stampa. Una firma disegnata qui è un'immagine della propria firma, non una firma digitale certificata.

## Incollare un'immagine dagli appunti

Copiare un'immagine in un altro programma, oppure fare uno screenshot negli appunti, poi premere {{key:Mod+V}} sulla tavola. L'immagine compare dove si trova il puntatore, al massimo 3 in di larghezza o altezza con le proporzioni mantenute, come annotazione immagine che si può spostare e ridimensionare. Nel PDF salvato è un commento timbro che mostra l'immagine, come le immagini descritte sopra.

{{ui:Altro}} › {{ui:Incolla un'immagine}} nel gruppo {{ui:Modifica}} fa lo stesso dal menu; il browser può chiedere prima conferma. Quando gli appunti non contengono un'immagine, {{key:Mod+V}} incolla le annotazioni copiate come prima.

## Inserire un'immagine da un file

Scegliere {{ui:Altro}} › {{ui:Inserisci un'immagine da file…}} nel gruppo {{ui:Modifica}} (oppure {{ui:Inserisci un'immagine qui…}} nel menu del clic destro), e selezionare un file PNG, JPEG o SVG oppure un PDF (un PDF con più pagine chiede quale usare). È anche possibile trascinare un file PNG, JPEG o SVG sulla tavola: viene inserito dove lo si rilascia. L'immagine è un'annotazione, al massimo 3 in di larghezza o altezza: spostarla e ridimensionarla come ogni altra annotazione.

Per rendere un'immagine parte della pagina, spuntare {{ui:Appiattisci nella pagina al salvataggio}} in {{ui:Proprietà}}. Vedi [Salvare una copia appiattita](topic:flatten).

## Creare un timbro da una selezione

Selezionare annotazioni (oppure contenuto della pagina con lo strumento {{ui:Contenuto}}) e scegliere {{ui:Salva la selezione come timbro…}} in {{ui:Altro}}, nel menu del clic destro, oppure {{ui:Salva come timbro…}} in {{ui:Proprietà}}. Dargli un nome. Il timbro va nella cassetta degli strumenti: fare clic lì, poi fare clic su una tavola qualsiasi per posizionare tutto ciò che è stato selezionato, insieme, centrato dove si fa clic. Vedi [La cassetta degli strumenti](topic:tool-chest).

## Note adesive

1. Scegliere {{ui:Nota}} ({{key:N}}).
2. Fare clic dove va la nota. Compare una piccola icona di nota con una casella accanto.
3. Digitare la nota. Fare clic fuori o premere {{key:Mod+Enter}} per conservarla; {{key:Esc}} la scarta.

A differenza di testo e callout, una nota viene conservata anche se non si digita nulla, così è possibile posizionare l'icona ora e scrivere in seguito.

- Il testo della nota è il suo campo {{ui:Nota}} in {{ui:Proprietà}}. Fare doppio clic sull'icona (oppure selezionarla e premere {{key:Enter}}) per modificarlo sulla tavola.
- Sulla tavola si vede solo l'icona. Gli altri visualizzatori PDF mostrano una nota adesiva standard che si apre con il testo al clic.
- Cambiare il colore dell'icona con {{ui:Colore}} in {{ui:Proprietà}}.

Per una discussione di andata e ritorno, usare invece il filo di risposte di qualsiasi annotazione: vedi [Stati e risposte](topic:statuses-and-replies).
