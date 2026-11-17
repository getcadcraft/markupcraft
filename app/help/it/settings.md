---
title: Impostazioni di MarkupCraft
summary: Cambiare il proprio nome, il colore e lo spessore di linea delle nuove annotazioni, dove incollare le copie e le unità per le lunghezze e per la posizione sulla tavola.
keywords: impostazioni, preferenze, opzioni, nome, autore, colore, colore predefinito, spessore di linea, larghezza linea, spesso, sottile, incolla, incolla al puntatore, offset, unità, metrico, millimetri, pollici, piedi, reimposta
from: 63ad97fd
---

Aprire {{ui:Impostazioni}} con l'ingranaggio nella barra in alto, oppure premere {{key:Mod+,}}. La prima scheda, {{ui:MarkupCraft}}, contiene le impostazioni proprie di questa app; {{ui:Generali}} contiene quelle condivise da tutte le app di CadCraft (tema, barra degli strumenti, pannelli). Le impostazioni di MarkupCraft valgono solo per l'app: si modificano qui, e questo browser le ricorda (vedi [Cosa resta in questo browser](topic:browser-storage)). Una modifica ha effetto subito; non c'è nulla da salvare.

## Nome

{{ui:Nome sulle annotazioni}} è il nome che ogni nuova annotazione e risposta riporta, e che i PDF salvati mostrano come autore del commento. È lo stesso nome del pulsante all'estremità destra della barra di stato; si può cambiare in uno dei due posti. Le annotazioni già disegnate mantengono il nome con cui sono state fatte. Vedi [Imposta il nome dell'autore](topic:set-your-name).

## Nuove annotazioni

- **{{ui:Colore delle annotazioni}}** è il colore con cui iniziano nuove penne, linee, frecce, rettangoli, ellissi, polilinee, poligoni, nuvole, callout e testo (rosso all'inizio). Evidenziatori, note, timbri, lunghezze, aree e conteggi mantengono i propri colori, perché i colori indicano ciò che sono.
- **{{ui:Linee sottili}}, {{ui:Normale}}, {{ui:Linee spesse}}** rendono le linee di quelle stesse annotazioni metà più sottili, invariate, oppure metà più spesse.

Un colore o uno spessore scelto per uno strumento in {{ui:Proprietà}} (con quello strumento attivo e nulla selezionato) prevale su queste impostazioni. Gli strumenti della [cassetta degli strumenti](topic:tool-chest) mantengono il proprio stile. Le annotazioni già disegnate non cambiano: selezionarle e modificarle in {{ui:Proprietà}}.

## Incolla

Dove {{key:Mod+V}} mette ciò che si è copiato:

- **{{ui:Al puntatore}}** (il valore iniziale): con il puntatore sulla tavola, la copia viene centrata dove punta. Con il puntatore altrove, finisce accanto all'originale.
- **{{ui:Accanto alla copia}}**: sempre un po' più in basso e a destra dell'originale, con un passo in più a ogni incolla.

Il pulsante {{ui:Incolla}} e {{key:Mod+Shift+V}} ({{ui:Incolla nella stessa posizione}}) funzionano allo stesso modo con entrambe le scelte. Vedi [Copia, incolla e duplica](topic:select-and-edit#copy-paste-and-duplicate).

## Misure

- **{{ui:Mostra le lunghezze in}}** è l'unità che la finestra di scala della tavola propone per prima quando si calibra da due punti: piedi e pollici, piedi decimali, pollici, metri o millimetri. Le tavole già calibrate mantengono la loro unità. Vedi [Calibra una tavola e misura](topic:calibrate-and-measure).
- **{{ui:Posizione sulla tavola}}** sceglie pollici o millimetri per la posizione del puntatore in basso a sinistra dello schermo. È una posizione sulla carta, non una distanza reale.

## Reimposta

{{ui:Reimposta impostazioni di MarkupCraft}} in fondo alla finestra riporta queste impostazioni, e quelle di pannelli e barra degli strumenti in {{ui:Generali}}, allo stato iniziale. Mantiene il nome, perché indica chi si è e non come si preferisce lavorare, e mantiene i colori scelti nel pannello di ogni strumento.
