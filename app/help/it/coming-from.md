---
title: Passare da altro software di annotazione
summary: Come le abitudini di un programma desktop per l'annotazione di PDF corrispondono a MarkupCraft, e le differenze che colgono di sorpresa.
keywords: passaggio, migrazione, familiare, annotazione PDF desktop, cassetta degli strumenti, elenco delle annotazioni, sovrapposizione, sessioni, profilo, scorciatoie, differenze
from: c8f323e1
---

Se si rivedono disegni in Bluebeam Revu (o si commentano PDF in un altro programma desktop per PDF), gran parte di MarkupCraft sarà familiare: nuvole, callout, una cassetta degli strumenti, un elenco delle annotazioni, stati con risposte, misure calibrate, sovrapposizioni di tavole. La differenza più grande riguarda la gestione dei file, quindi leggere la sezione successiva anche se si saltano le altre.

## Le cinque differenze che contano

1. **Salva crea un nuovo file.** MarkupCraft funziona nel browser e non può sovrascrivere il PDF sul disco. {{ui:Salva}} scarica "<name> (marked up).pdf" e l'originale resta com'era. La volta successiva aprire la copia "(marked up)", e ripulire da sé le vecchie copie.
2. **Il PDF viene salvato quando si salva.** Finché non lo si fa, una copia di ripristino in questo browser conserva le annotazioni in caso di blocco o di scheda chiusa, e MarkupCraft la propone di nuovo alla volta successiva. È una rete di sicurezza: salvare il PDF per conservare la revisione.
3. **Il profilo vive nel browser.** Nome dell'autore, impostazioni degli strumenti e cassetta degli strumenti sono conservati in questo browser su questo computer. Un altro browser o computer riparte da zero, e cancellare i dati del sito li cancella. Esportare la cassetta degli strumenti come backup. Vedi [Cosa resta in questo browser](topic:browser-storage).
4. **Ancora nessuna sessione condivisa.** Non esiste una sessione di revisione live e condivisa né un progetto nel cloud. La revisione viaggia nel PDF: salvare, inviare la copia, la persona successiva risponde e salva.
5. **La scala è per tavola, e solo per tavola.** Non ci sono viewport dentro una tavola né "applica questa scala a tutte le pagine". Calibrare ogni tavola su cui si misura.

## Abitudine per abitudine

| Si è abituati a | In MarkupCraft |
|---|---|
| Pannello delle miniature, etichette di pagina | {{ui:Tavole}} a sinistra. I nomi derivano dalle etichette di pagina o vengono letti dal cartiglio; correggerli con {{ui:Rinomina tavola}}. |
| Apertura di più PDF come set | Aprirli tutti insieme; diventano un unico elenco. Nessun file di set viene salvato: la volta successiva aprire gli stessi PDF. |
| Cassetta degli strumenti con insiemi di strumenti | Scheda {{ui:Strumenti}}: una cassetta per browser, strumenti salvati con stile e oggetto. Condividere con {{ui:Esporta}} e {{ui:Importa}} come file JSON. I file di insiemi di strumenti di altri programmi non possono essere importati. |
| Pannello Proprietà | Scheda {{ui:Proprietà}}: stato, oggetto, commento, stile, risposte ed elemento della punch list in un solo posto. |
| Elenco delle annotazioni con colonne | Scheda {{ui:Annotazioni}} con filtri per tavola, autore, stato e tipo. Esportazione in CSV o BCF. Nessuna colonna personalizzata e nessun riepilogo PDF o foglio di calcolo per ora. |
| Stato e condizione della revisione | {{ui:Stato}}: Aperto, Accettato, Rifiutato, Completato. Nessun insieme di stati personalizzato. Salvati come stati di revisione standard. |
| Risposte a un'annotazione | La discussione "Risposte" in {{ui:Proprietà}}, con i cambi di stato registrati. Una risposta inviata non può essere modificata. |
| Calibrare, poi lunghezza, area, conteggio | {{ui:Calibra}}, {{ui:Lunghezza}} ({{key:M}}), {{ui:Area}} ({{key:Q}}, dà area e perimetro), {{ui:Conteggio}} ({{key:U}}). Nessun angolo, raggio, volume, polilunghezza o vuoti per ora. |
| Sovrapporre pagine | Scheda {{ui:Confronta}}: rosso per la vecchia, blu per la nuova, allineamento con due punti. Nessuna "confronta documenti" automatica con nuvole. |
| Timbri | {{ui:Timbro}} con sei timbri integrati e testo personalizzato, firmati con il proprio nome e la data. Nessun timbro con immagine o firma per ora. |
| Tracciamento di punch o segnalazioni | Scheda {{ui:Punch list}}: voci numerate con assegnatario, scadenza e stato; esportazione CSV. |
| Sessione di collaborazione live | Non ancora disponibile. Far circolare il PDF salvato. |
| Appiattisci | Non ancora implementato. Le annotazioni restano come commenti che altri visualizzatori possono mostrare e stampare. |
| Livelli per le annotazioni | Non ancora implementato. Usare oggetti, autori e filtri dell'elenco per ordinare i commenti. |
| Collegamenti ipertestuali tra tavole | Non ancora implementato. |
| Barra spaziatrice per spostarsi, rotella per lo zoom | Lo stesso: tenere premuto {{key:Space}} e trascinare; la rotella fa lo zoom sul puntatore. La rotella non scorre mai la pagina. |

## Tasti diversi

Molti tasti a una lettera sono quelli che ci si aspetta, ma controllare questi prima che le dita li premano:

- {{key:K}} è {{ui:Callout}}, e {{key:Q}} è {{ui:Area}}. Se si è abituati a Q per i callout, qui avvierà un'area.
- {{key:C}} è {{ui:Nuvola}} a riquadro; {{key:Shift+C}} è {{ui:Nuvola libera}}.
- {{key:M}} è {{ui:Lunghezza}}, {{key:U}} è {{ui:Conteggio}}, {{key:Y}} è {{ui:Polilinea}}, {{key:G}} è {{ui:Poligono}}, {{key:I}} è {{ui:Evidenzia}}.
- {{key:Mod+D}} duplica la selezione (invece del segnalibro del browser).
- {{key:Mod+Plus}} e {{key:Mod+Minus}} ingrandiscono o riducono la tavola, non la pagina del browser.
- Ogni tasto può essere cambiato: vedi sotto.

:::tip
Se le dita conoscono Bluebeam Revu, scegliere lo stile di menu {{ui:Revisione PDF}} in {{ui:Impostazioni}} › {{ui:MarkupCraft}} › {{ui:Menu, tasti e mouse}}: una barra dei menu (File, Modifica, Visualizza, Documento, Annotazione, Misura, Finestra) sopra una fila di strumenti di revisione, {{key:Q}} per un callout, {{key:H}} per l'evidenziatore, {{key:N}} per un poligono, e le misure su {{key:Alt+Shift}} con una lettera. Anche lì ogni tasto può essere cambiato. Vedi [Menu, tasti e mouse](topic:menus-keys-and-mouse).
:::

L'elenco completo è in [Tastiera e mouse](topic:keyboard).

## Cose che funzionano diversamente da come ci si aspetta

- **Gli strumenti restano attivi.** Dopo una nuvola, si continua a disegnare nuvole. {{key:Esc}} una volta cancella la selezione, due volte torna a {{ui:Seleziona}}.
- **Testo e callout richiedono del testo.** Terminando senza aver digitato nulla, non viene aggiunta alcuna annotazione. Le note restano vuote.
- **Le misure richiedono prima una scala.** {{ui:Lunghezza}} e {{ui:Area}} passano a {{ui:Calibra}} su una tavola non calibrata e tornano dopo.
- **Commenti da altri programmi.** Rettangoli, ellissi, linee, polilinee, poligoni, inchiostro, caselle di testo e note adesive creati altrove diventano annotazioni MarkupCraft modificabili, e vengono riscritti nel modo di MarkupCraft quando si salva (il loro aspetto può cambiare leggermente). Evidenziazioni di testo, timbri di altri programmi e altri tipi speciali restano in sola lettura: si può rispondere, non modificarli.
- **I caratteri fuori dalle lettere dell'Europa occidentale** appaiono come "?" nel PDF salvato. Vedi [Salvare il PDF annotato](topic:save-the-marked-up-pdf).
- **Le date dei timbri** usano UTC, quindi un timbro creato tardi la sera nelle Americhe può mostrare la data del giorno dopo.
- **Le misure si riportano** come commenti di misura standard, e ogni tavola calibrata conserva la sua scala, quindi un programma che legge le misure PDF di solito può mostrarle. Il comportamento preciso dipende da quel programma.

## Usarli entrambi

Si può andare avanti e indietro. I commenti fatti altrove si aprono in MarkupCraft, e il PDF "(marked up)" si apre in altri programmi PDF con ogni annotazione, risposta e stato visibili. Ciò che solo MarkupCraft legge di nuovo (assegnatario e scadenza della voce punch, stato della voce) è conservato nel file per MarkupCraft.
