---
title: Cosa non è ancora implementato
summary: Ciò che questa versione di MarkupCraft non fa ancora e cosa fare oggi al suo posto.
keywords: mancante, roadmap, pianificato, limitazione, non supportato, in arrivo, richiesta di funzione, sessioni, cloud, firma digitale, link web
from: 0872fede
---

MarkupCraft è in sviluppo. Ecco ciò che la versione attuale **non** fa, così da poterne tenere conto nella pianificazione. Descrive la versione di oggi, non promesse.

## Lavorare con altre persone

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Salvataggio nel cloud e sincronizzazione tra computer | Conservare i PDF insieme ai file di progetto. Il salvataggio nel cloud non è ancora disponibile. |
| Unione delle copie delle annotazioni di due persone | Dividere le tavole tra i revisori, oppure copiare alcune annotazioni con {{key:Mod+C}} e {{key:Mod+V}}. RFI, campionature e giornali di cantiere si uniscono: vedi [Gestire RFI, campionature e giornali di cantiere](topic:field-records). |
| Team, notifiche e progetti cloud per RFI e campionature | Inoltrare il PDF e usare {{ui:Unisci}} per riunire le copie. |
| RFI, campionature e giornali di cantiere in una sessione Live | Ognuno lavora sulla propria copia; riunire le copie con {{ui:Unisci}}. |
| Unione delle modifiche di due persone a campi diversi di uno stesso record | Vince l'ultima copia modificata per l'intero record (discussione e nomi degli allegati vengono uniti). Concordare chi modifica quale record. |
| Strumenti assistente per RFI, campionature e giornali di cantiere | Lavorarci nella scheda {{ui:Cantiere}}. Gli assistenti possono lavorare con le annotazioni: vedi [Usare MarkupCraft con un assistente IA](topic:use-with-ai-assistants). |
| Modifica o eliminazione di una risposta già inviata | Annullare subito, oppure aggiungere una risposta correttiva. |
| Cambiare l'autore di un'annotazione | Impostare il proprio nome prima di iniziare. |

## Annotazioni

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Timbri con campi da compilare, firme digitali certificate | Usare un timbro di testo personalizzato, con il proprio nome e la data, oppure un'immagine della propria firma. |
| Allegati diversi dalle foto (documenti, video) | Conservarli insieme al PDF e farvi riferimento nel commento. |
| Collegamenti a siti web o a file non aperti | Scrivere l'indirizzo o il nome del file nel commento. |
| Set di stati personalizzati | Usare i quattro stati, e l'oggetto per tutto il resto. |
| Modifica dei commenti che erano nel file in sola lettura (evidenziazioni di testo, timbri di altri programmi) | Rispondere a questi commenti, oppure disegnare un'annotazione MarkupCraft accanto a essi. |
| Tratti di penna sensibili alla pressione | Impostare lo spessore della linea. |

## Il contenuto della pagina

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Disegnare nuove forme direttamente nella pagina | Disegnarle come annotazioni, poi {{ui:Inserisci nella pagina}}. Vedi [Modificare il contenuto della pagina](topic:page-content). |
| Ruotare gli oggetti della pagina con un angolo qualsiasi | Spostarli e ridimensionarli; ruotare l'intera pagina con {{ui:Pagine}}. |
| Cambiare carattere o dimensione di una riga di testo, o testo che va su più righe | Cambiare le parole una riga alla volta; per nuovo testo in un altro carattere, aggiungere un'annotazione di testo. |
| Modificare ciò che è dentro un'immagine scansionata | Sostituire l'immagine, oppure annotarla. |
| Modificare PDF cifrati o firmati | Chiedere una copia non firmata; le annotazioni funzionano su qualsiasi PDF. |

## Misura

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Misure di raggio | Disegnare un {{ui:Arco}} lungo il bordo, oppure misurare la {{ui:Lunghezza}} da un capo all'altro e dimezzarla. |
| Modificare gli angoli di un vuoto | Eliminare i vuoti e disegnarli di nuovo. |
| Applicare una scala a più tavole in una volta | Calibrare ogni tavola; scegliere un preset richiede pochi secondi per tavola. |
| Più scale su una tavola (viewport) | Calibrare sul disegno che si misura più spesso. Cambiare la scala di una tavola rimisura tutto ciò che contiene, quindi annotare i valori di dettaglio prima di ricalibrare. |
| Snap alle linee del disegno | Ingrandire prima di fare clic, oppure digitare lunghezze e angoli (vedi [Disegnare in scala](topic:calibrate-and-measure#sketch-to-scale)). |
| Un computo completo con voci, composizioni e prezzi | Usare TakeoffCraft, l'app di computo della famiglia CadCraft. |

## Tavole e file

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Annullare una modifica di pagina (ruota, sposta, inserisci, elimina) | Chiudere senza salvare e riaprire il PDF originale. Vedi [Stampare e modificare le pagine](topic:pages-and-printing). |
| Chiudere un solo file di un set | {{ui:Chiudi}} chiude l'intero set; riaprire i file necessari. |
| Salvare un set come progetto da riaprire in un solo passaggio | Riaprire di nuovo gli stessi PDF. |
| Stampare a una scala scelta, o più tavole per foglio | Usare la finestra di stampa del browser, oppure stampare la copia salvata da un altro visualizzatore PDF. |

## Elenchi ed esportazioni

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Posizionare le segnalazioni BCF importate nella loro posizione del modello | Le segnalazioni importate non legate a nessuna tavola sono ammucchiate in alto a sinistra: spostarle. |
| Importare set di strumenti da altri programmi di annotazione | Ricreare gli strumenti necessari e salvarli nella cassetta; esportarla per l'ufficio. |

## Confronto

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Confrontare testo composto in un carattere, o un elenco delle modifiche | Usare la sovrapposizione e il cursore, oppure {{ui:Linee modificate}} per le linee disegnate. |
| Confrontare tavole scansionate in base alle linee | Usare la sovrapposizione immagine. |
| Allineare automaticamente ogni coppia confrontando un intero set | Confrontare da soli una coppia spostata e usare {{ui:Allinea con due punti}}. |

## Pannelli

| Non ancora implementato | Cosa fare oggi |
|---|---|
| Spostare la barra degli strumenti o la barra di stato | Si spostano solo i due pannelli laterali. |

## Piattaforme

- **Desktop:** MarkupCraft funziona nel browser su Mac, Windows, Linux e iPad, e in CadCraft Studio, l'app desktop con tutte e otto le app in un'unica installazione.
- MarkupCraft è in sviluppo. Etichette e comportamento potrebbero ancora cambiare, e questa guida cambierà di conseguenza.
