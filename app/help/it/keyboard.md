---
title: Tastiera e mouse
summary: Ogni tasto, azione del mouse e gesto touch che MarkupCraft riconosce, raggruppati, più le scorciatoie che mantiene il browser.
keywords: tastiera, scorciatoie, tasti di scelta rapida, tasti, mouse, rotella, clic destro, pulsante centrale, trackpad, tocco, gesti, pizzico, spazio pan
from: 7bf207ec
---

Le scorciatoie scritte con {{key:Mod}} funzionano sia con ⌘ sia con Control su Mac, e con Ctrl su Windows e Linux. Le lettere degli strumenti funzionano solo quando non si scrive in una casella; mentre si scrive, le lettere sono semplici lettere. Consultare anche [Tasti, mouse e trackpad](common:keys).

## Strumenti

| Tasto | Strumento |
|---|---|
| {{key:V}} | {{ui:Seleziona}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Contenuto}}: le linee, le immagini e il testo propri della pagina (consultare [Modificare il contenuto della pagina](topic:page-content)) |
| {{key:P}} | {{ui:Penna}} |
| {{key:I}} | {{ui:Evidenzia}} |
| {{key:L}} | {{ui:Linea}} |
| {{key:A}} | {{ui:Freccia}} |
| {{key:R}} | {{ui:Rettangolo}} |
| {{key:E}} | {{ui:Ellisse}} |
| {{key:Y}} | {{ui:Polilinea}} |
| {{key:G}} | {{ui:Poligono}} |
| {{key:C}} | {{ui:Nuvola}} (trascinare un riquadro) |
| {{key:Shift+C}} | {{ui:Nuvola libera}} |
| {{key:K}} | {{ui:Callout}} |
| {{key:T}} | {{ui:Testo}} |
| {{key:N}} | {{ui:Nota}} |
| {{key:S}} | {{ui:Timbro}} |
| {{key:M}} | {{ui:Lunghezza}} |
| {{key:Q}} | {{ui:Area}} |
| {{key:U}} | {{ui:Conteggio}} |
| {{key:O}} | {{ui:Arco}} |
| {{key:X}} | {{ui:Angolo}} |

{{ui:Calibra}} non ha un tasto: usare il suo pulsante nella barra degli strumenti oppure il pulsante di scala nella barra di stato. Le lettere degli strumenti vengono ignorate quando si tiene premuto {{key:Alt}}.

## Durante il disegno

| Tasto o azione | Cosa fa |
|---|---|
| {{key:Shift}} durante il disegno | Linee, frecce, lunghezze e lati di polilinea a passi di 45°; rettangoli, ellissi e nuvole a riquadro diventano quadrati; penna ed evidenziatore tracciano un unico tratto dritto |
| Doppio clic, {{key:Enter}} o clic destro | Termina una polilinea, un poligono, una nuvola libera o un'area |
| {{key:Backspace}} | Rimuove l'ultimo punto di una polilinea, di un poligono, di una nuvola libera o di un'area |
| {{key:Esc}} | Annulla ciò che si sta disegnando; senza nulla in corso, deseleziona; senza nulla selezionato, torna a {{ui:Seleziona}} |
| {{key:Mod+Enter}} | Termina la digitazione in una casella di testo, callout o nota (oppure clic fuori di essa) |
| {{key:Esc}} mentre si digita | Annulla il testo che si stava digitando |
| Clic con {{key:Shift}} su {{ui:Conteggio}} | Rimuove il punto più vicino del gruppo di conteggio selezionato |

## Selezione e modifica

| Tasto o azione | Cosa fa |
|---|---|
| Clic | Seleziona un'annotazione |
| Clic con {{key:Shift}} | Aggiunge o rimuove un'annotazione dalla selezione |
| Trascinare da sinistra a destra su una tavola vuota | Seleziona ciò che è interamente contenuto nella finestra |
| Trascinare da destra a sinistra su una tavola vuota | Seleziona ciò che la finestra tocca |
| {{key:Mod+A}} | Seleziona ogni annotazione di questa tavola |
| Trascinare un'annotazione selezionata | La sposta ({{key:Shift}}: a passi di 45°) |
| Trascinare una maniglia | Ridimensiona o modella di nuovo ({{key:Shift}}: mantiene le proporzioni, oppure 45°) |
| Tasti freccia | Sposta la selezione di un pixel dello schermo ({{key:Shift}}: di dieci) |
| Doppio clic, oppure {{key:Enter}} | Modifica il testo di una casella di testo, callout o nota; per un timbro, apre {{ui:Proprietà}} |
| {{key:Delete}} o {{key:Backspace}} | Elimina la selezione |
| {{key:Esc}} | Non seleziona nulla |
| {{key:Mod+Z}} | Annulla |
| {{key:Mod+Y}} oppure {{key:Mod+Shift+Z}} | Ripristina |

## Taglia, copia e incolla

I stessi comandi si trovano nel gruppo {{ui:Modifica}} della barra degli strumenti ({{ui:Copia}}, {{ui:Incolla}}) e nel suo menu {{ui:Altro}}, ciascuno con il proprio tasto. Ognuno è un solo passo di annullamento. Consultare [Copiare, incollare e duplicare](topic:select-and-edit#copy-paste-and-duplicate).

| Tasto | Cosa fa |
|---|---|
| {{key:Mod+X}} | Taglia: copia la selezione e la elimina |
| {{key:Mod+C}} | Copia la selezione |
| {{key:Mod+V}} | Incolla. Con il puntatore sulla tavola, la copia finisce centrata dove punta; altrimenti accanto all'originale. Le impostazioni possono far sì che incolli sempre accanto all'originale. |
| {{key:Mod+Shift+V}} | Incolla nella stessa posizione: nello stesso punto della tavola, su questa tavola o su un'altra |
| {{key:Mod+D}} | Duplica la selezione accanto a essa (gli Appunti restano invariati) |

## Guida

| Tasto | Cosa fa |
|---|---|
| {{key:F1}} | Apre o chiude questa guida (un pannello a lato; la tavola resta utilizzabile). Anche {{ui:Guida}} nella barra in alto. |
| {{key:Esc}} nella guida | Chiude la guida |

:::mac
Su gran parte delle tastiere Mac, premere {{key:F1}} con **fn** (o il tasto globo), oppure usare {{ui:Guida}}. Consultare [Tasti, mouse e trackpad](common:keys#function-keys-on-a-mac).
:::

## File e tavole

| Tasto | Cosa fa |
|---|---|
| {{key:Mod+N}} | Nuove pagine vuote (quando il browser lascia alla pagina questo tasto; consultare [Iniziare con pagine vuote](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Apre i PDF |
| {{key:Mod+P}} | Stampa (consultare [Stampare e cambiare le pagine](topic:pages-and-printing)) |
| {{key:Mod+F}} | Cerca testo nei disegni (consultare [Cercare testo](topic:find-text)) |
| {{key:Mod}} + clic su un'annotazione collegata | Segue il collegamento alla sua tavola; {{key:Alt+Left}} torna indietro (consultare [Collegamenti alle tavole](topic:sheet-links)) |
| {{key:Mod+S}} | Salva una copia annotata |
| {{key:PageDown}} / {{key:PageUp}} | Tavola successiva / precedente |
| {{key:Enter}} in {{ui:Cerca tavole}} | Apre la prima tavola corrispondente |
| {{key:Mod+Enter}} in {{ui:Scrivere una risposta}} | Invia la risposta |

## Zoom e pan

| Tasto o azione | Cosa fa |
|---|---|
| Rotella del mouse | Zoom avanti o indietro attorno al puntatore (la rotella non scorre mai) |
| {{key:Ctrl}} + rotella | Zoom più veloce |
| {{key:Plus}} o {{key:Minus}} (anche con {{key:Mod}}) | Zoom avanti o indietro attorno al centro; {{key:=}} funziona come più |
| {{key:Mod+0}} | {{ui:Adatta alla pagina}} |
| {{key:Mod+9}} | {{ui:Adatta alla larghezza}} |
| Trascinare con il pulsante centrale | Pan |
| Trascinare con il pulsante destro | Pan (quando non si è nel mezzo di una polilinea) |
| Tenere premuto {{key:Space}} e trascinare | Pan |
| Tasti freccia senza selezione | Pan |
| {{key:Ctrl+Shift+F}} | Modalità schermo: normale, schermo intero, schermo intero con barre nascoste (tasto Control su ogni computer) |

:::mac
**Sul trackpad:** lo scorrimento a due dita fa zoom. Il pizzico fa zoom anche in Chrome, Edge e Firefox. Per fare pan, tenere premuto {{key:Space}} mentre si trascina, oppure usare lo strumento {{ui:Pan}}. Un clic a due dita è un clic destro e termina una polilinea. Il Control-clic qui può agire come clic semplice anziché come clic destro, quindi usare il clic a due dita.
:::

:::touch
## Tocco

| Gesto | Cosa fa |
|---|---|
| Un dito | Disegna con lo strumento corrente, oppure seleziona |
| Due dita | Pizzico per lo zoom attorno al loro punto medio, spostamento per il pan |
| Secondo dito durante un tratto | Annulla il tratto e fa zoom |
| Doppio tocco | Termina una polilinea, un poligono, una nuvola libera o un'area |

I punti di conteggio, le note, i punti di polilinea e il secondo punto degli strumenti a due punti vengono posizionati quando il dito si solleva. Consultare [Revisionare su iPad o schermo touch](topic:review-on-a-tablet).
:::

## Scorciatoie mantenute dal browser

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} e {{key:Mod+Q}} appartengono al browser. Chiudere la scheda o la finestra con annotazioni non salvate le fa perdere, dopo la domanda "Lasciare il sito?" del browser su computer.
- La maggior parte dei browser riserva {{key:Mod+N}} per una nuova finestra, quindi in una scheda del browser usare {{ui:Nuovo}} nella barra degli strumenti; l'app desktop e Studio passano il tasto a MarkupCraft.
- MarkupCraft sottrae al browser {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} e {{key:Mod+Minus}} mentre l'app ha la tastiera, e {{key:Mod+C}} e {{key:Mod+X}} mentre sono selezionate annotazioni. {{key:Mod+,}} apre {{ui:Impostazioni}}. Per ingrandire l'intera pagina del browser, usare il menu del browser.
- In alcuni browser {{key:Mod+9}} porta all'ultima scheda prima che MarkupCraft lo riceva. In tal caso, usare {{ui:Adatta alla larghezza}} sotto la tavola.
- {{key:Esc}} a schermo intero esce anche dallo schermo intero.

## Quando un tasto non fa nulla

- **Si sta scrivendo in una casella.** Fare prima clic sulla tavola. (Un clic con uno strumento di disegno disegna; poi premere {{key:Esc}} oppure usare {{key:Mod+Z}}.)
- **È aperta una finestra di dialogo.** I tasti vanno alla finestra finché non si chiude.
- **Dopo aver cliccato un pulsante della barra**, i tasti freccia o {{key:Space}} agiscono su quel pulsante. Portare il puntatore sulla tavola e usare la rotella o il pulsante centrale, oppure premere la lettera di uno strumento invece di cliccare i pulsanti.

## Dove si trova Sposta

Non esiste un comando Sposta: selezionare un'annotazione e trascinarla ({{key:Shift}} mantiene i passi di 45°). Una puntina si sposta con {{ui:Sposta puntina}}, una pagina con {{ui:Sposta la pagina prima}} o {{ui:Sposta la pagina dopo}}.
