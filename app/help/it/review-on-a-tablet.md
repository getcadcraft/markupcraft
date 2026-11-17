---
title: Revisione su iPad o schermo touch
summary: Pizzicare, spostarsi e disegnare con le dita o con uno stilo, cosa agisce al sollevamento, cosa richiede una tastiera e come tenere al sicuro il lavoro su un tablet.
keywords: ipad, tablet, touch, schermo touch, pizzico, zoom, due dita, apple pencil, stilo, dito, cantiere, sito, superficie, gesti, mobile
from: 91eb6438
---

MarkupCraft funziona con il tocco: su iPad (Safari o Chrome), su un portatile con schermo touch, oppure su un tablet Windows o Android con un browser recente. In orizzontale un tablet mostra il layout completo.

## Gesti

| Gesto | Cosa fa |
|---|---|
| Un dito | Disegna con lo strumento corrente, oppure seleziona con {{ui:Seleziona}} |
| Due dita, allargate o pizzicate | Fa zoom attorno al punto tra le dita |
| Due dita, mosse insieme | Fa pan; si possono fare zoom e pan in un unico movimento |
| Un secondo dito mentre si disegna | Annulla ciò che aveva iniziato il primo dito e avvia lo zoom |
| Doppio tocco, oppure tocco prolungato | Completa una polilinea, un poligono, una nuvola libera o un'area |
| Tocco prolungato su un testo, callout o nota, con {{ui:Seleziona}} | Apre il suo testo per modificarlo |
| Un dito con {{ui:Pan}} attivo | Fa pan |

Su uno schermo touch i pulsanti della barra degli strumenti, i menu, le schede e i pulsanti delle finestre di dialogo sono più grandi, quindi si colpiscono facilmente con un dito.

## Cosa succede al sollevamento

Perché il primo dito di un pizzico non lasci mai un segno, alcuni strumenti agiscono quando si **solleva** il dito, non quando lo si appoggia:

- {{ui:Conteggio}}: il punto viene aggiunto al sollevamento.
- {{ui:Nota}}: la nota viene posizionata al sollevamento.
- {{ui:Polilinea}}, {{ui:Poligono}}, {{ui:Nuvola libera}} e {{ui:Area}}: ogni punto viene aggiunto al sollevamento.
- {{ui:Linea}}, {{ui:Freccia}}, {{ui:Lunghezza}} e {{ui:Calibra}}: toccando prima l'inizio e poi la fine, la fine viene posizionata al sollevamento.

Se il dito scivola più di poco prima di sollevarsi, non conta come tocco e non viene aggiunto nulla. Toccare in modo pulito; per correggere, usare {{ui:Annulla}}.

Gli strumenti da trascinare ({{ui:Penna}}, {{ui:Evidenzia}}, {{ui:Nuvola}}, {{ui:Rettangolo}}, {{ui:Ellisse}}, {{ui:Callout}}, {{ui:Testo}}, {{ui:Timbro}}) iniziano appena si tocca; un secondo dito li annulla.

## Selezionare con un dito

- Toccare un'annotazione per selezionarla; trascinarla per spostarla; trascinare una maniglia per ridimensionarla. Dopo che un dito ha toccato la tavola, le annotazioni e le maniglie hanno un bersaglio più grande e le maniglie vengono disegnate più grandi.
- Trascinare su una tavola vuota per disegnare una finestra di selezione (da sinistra a destra: completamente dentro; da destra a sinistra: toccando).
- In {{ui:Seleziona}}, un dito **non** fa pan. Usare due dita, oppure scegliere {{ui:Pan}}.

## Cose che richiedono una tastiera

Senza tastiera non ci sono {{key:Shift}}, {{key:Esc}} o {{key:Enter}}. Ecco cosa fare al loro posto:

| Azione da tastiera | Senza tastiera |
|---|---|
| {{key:Esc}} per annullare o tornare a Seleziona | Toccare {{ui:Seleziona}} nella barra degli strumenti |
| {{key:Shift}} per linee a 45°, quadrati e cerchi | Disegnare con cura; correggere con le maniglie |
| {{key:Shift}}+clic per aggiungere alla selezione | Usare una finestra di selezione |
| {{key:Shift}}+clic per rimuovere un punto di conteggio | {{ui:Annulla}} subito dopo un tocco sbagliato |
| {{key:Mod+Enter}} per terminare la digitazione | Toccare fuori dalla casella di testo |
| {{key:Enter}} per completare una polilinea, o per modificare il testo di un'annotazione | Tocco prolungato, oppure {{ui:Modifica sulla tavola}} in {{ui:Proprietà}} |
| {{key:Delete}} | {{ui:Elimina}} nella barra degli strumenti o in {{ui:Proprietà}} |
| Iniziare un nuovo gruppo di conteggio con {{key:Esc}} | Toccare una tavola vuota con {{ui:Seleziona}}, poi toccare di nuovo {{ui:Conteggio}} |

Una custodia con tastiera o una tastiera Bluetooth ripristina tutte le scorciatoie; su un iPad, il tasto ⌘ funziona per {{key:Mod+Z}} e le altre.

I pulsanti non mostrano i loro suggerimenti al tocco. Il tasto di ogni strumento è elencato in [Tastiera e mouse](topic:keyboard).

## Stilo e Apple Pencil

Uno stilo (Apple Pencil, Surface Pen e simili) funziona come un mouse: disegna e seleziona, e agisce subito all'appoggio. Usare le dita per il pizzico e il pan. La pressione non cambia lo spessore della linea.

## Aprire e salvare su un iPad

- {{ui:Apri}} mostra il selettore File: iCloud Drive, Sul mio iPad e qualsiasi app di archiviazione collegata.
- {{ui:Salva}} chiede di scaricare; la copia finisce in File, nella cartella Download (o nella cartella impostata nelle impostazioni di Safari).

## Tenere al sicuro il lavoro su un tablet

:::warning
Safari su iPad non avvisa prima di lasciare una pagina con lavoro non salvato, e iPadOS può ricaricare una scheda in background per liberare memoria. MarkupCraft conserva una copia di ripristino nel browser e la propone di nuovo quando la si riapre (vedi [Recupera il lavoro](common:recover)), ma **salvare dopo ogni tavola o ogni giro di sopralluogo**: una scheda privata non conserva alcuna copia.
:::

- Il nome, le impostazioni degli strumenti e la cassetta degli strumenti restano in quel browser su quell'iPad, come su un computer. Vedi [Cosa resta in questo browser](topic:browser-storage).
- **Prima di un sopralluogo senza segnale:** mentre si è ancora online, aprire MarkupCraft in Safari (o Chrome) sull'iPad e scegliere {{ui:Salva per l'uso offline}} nella barra in alto. Attendere che compaia "Pronto per l'uso offline" (conta "Salvataggio N di M"; il lettore e lo scrittore PDF pesano circa 6 MB). Sul posto, aprire lo stesso indirizzo o un suo segnalibro: aprire, annotare e salvare PDF funziona senza connessione. Se compare "Offline non disponibile", si è in una scheda privata; usarne una normale. Vedi [Lavorare offline](common:offline).
- Safari rimuove una copia offline non usata per alcune settimane. Prima di una trasferta, premere "Pronto per l'uso offline" e scegliere "Salva di nuovo (scarica la versione più recente)".
- I set di tavole molto grandi usano molta memoria. Su un tablet, aprire solo le tavole necessarie per il sopralluogo.

## Su un telefono

Funziona, ma lo schermo è piccolo: le parti si impilano (barra degli strumenti, tavola, barra di stato, pannelli, poi l'elenco delle tavole), e la barra degli strumenti scorre in orizzontale. Usare il telefono per consultare e per aggiungere una nota rapida, e un tablet o un computer per una revisione vera.
