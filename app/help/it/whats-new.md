---
title: Novità in 0.9
summary: Note e un'area di appoggio che non vengono mai stampate, note private cifrate e una copia pulita per il cliente, collegamenti in batch per un intero set di disegni, uno strumento Arco con dieci metodi, seguire un altro revisore in Live, e una correzione per le annotazioni eliminate che restano nel PDF salvato.
keywords: novità, 0.9, note di rilascio, registro modifiche, note, area di appoggio, note private, password, cifrate, nascondi note, mostra note, copia pulita, istantanea, collegamenti in batch, richiami delle tavole, collega tavole, collegamento PDF, arco, metodi dell'arco, arco a tre punti, raggio, segui, segui me, live, vista per classe, elenco delle persone, annotazione eliminata, suggerimenti, titoli delle schede, cambiamenti, 0.8, 0.8.1, versione, nuove funzioni, attività, assegnatario, giorno di scadenza, in ritardo, verifica ora, cosa è cambiato, revisioni, confronta, nota vocale, decisione, redline, file delle risposte, disegnatore, assistente, mcp, problemi, lingue, dispositivi di input, trackpad, righe della barra degli strumenti, griglia delle proprietà, aggiornamento
from: dbdd7ed4
---

Questo è ciò che è cambiato in MarkupCraft 0.9, rispetto alla 0.8.1. L'idea principale è che le note di lavoro restano fuori dalla pagina che riceve il cliente, e un intero set di disegni può essere collegato in un solo passaggio.

## Novità

### Note, area di appoggio e note private

- **L'area di appoggio.** L'area intorno a ogni tavola è una scrivania: tutto ciò che viene disegnato, digitato o incollato accanto alla tavola è una nota e non viene mai stampato. Scegliere {{ui:Mostra l'area di appoggio}} per fare zoom indietro e avere spazio, oppure {{ui:Istantanea sull'area di appoggio}}, trascinare un riquadro, poi {{ui:Sull'area di appoggio}} per mettere un'immagine di una parte del disegno accanto alla tavola. Un'istantanea è un'immagine e non cambia quando cambia la tavola. Vedi [Note, area di appoggio e note private](topic:notes-and-pasteboard).
- **Mostrare e nascondere le note.** Qualsiasi annotazione può diventare una nota: impostare {{ui:Le nuove annotazioni sono}} nella scheda {{ui:Note}}, oppure {{ui:Questa annotazione è}} in {{ui:Proprietà}}. {{key:Shift+H}} o l'interruttore {{ui:Note}} sotto la tavola nasconde e mostra tutte le note in una volta. Le note sono escluse da stampa, copie appiattite, elenchi ed esportazioni, e gli altri lettori PDF non le mostrano. Il PDF salvato le conserva per la prossima volta che lo si apre in MarkupCraft.
- **Note private.** Scegliere {{ui:Imposta una password}}, poi rendere un'annotazione {{ui:Una nota privata}}. Viene cifrata nel file con una password di almeno 10 caratteri, e non c'è recupero: nessuno, nemmeno noi, può aprirla senza la password. {{ui:Blocca}} nasconde le note private; {{ui:Resta sbloccato su questo dispositivo}} è disattivato per impostazione predefinita.
- **Salvare una copia pulita.** {{ui:Salva una copia pulita}} elimina ogni nota, nota privata e tutto ciò che si trova sull'area di appoggio. Usarla per il file che va al cliente.

### Collegare un intero set

- **Collegamenti in batch.** Scegliere {{ui:Pagine}} › {{ui:Collegamenti in batch…}}, oppure {{ui:Collega i richiami alle tavole…}} sotto {{ui:Trova testo}} nel pannello {{ui:Tavole}}. Il passo 1 elenca il numero e il nome di ogni tavola, come letti dal suo cartiglio; correggere quelli sbagliati. Il passo 2 elenca i richiami trovati, come `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Verrà collegato}} mostra la tavola e la vista per ciascuno, {{ui:Non collegato}} mostra i numeri che nessuna tavola aperta ha, e {{ui:Crea i collegamenti}} li crea tutti con un solo passo di annullamento. Eseguirlo di nuovo dopo un'aggiunta o una rinumerazione; i collegamenti fatti a mano non vengono mai modificati. Un collegamento con una vista viene salvato come collegamento PDF, così anche gli altri lettori aprono il dettaglio. Vedi [Collegamenti tra tavole](topic:sheet-links).

### Disegno

- **Arco, dieci metodi.** Lo strumento {{ui:Arco}} ({{key:O}}) ora ha una casella {{ui:Metodo arco}} sopra la pagina con dieci modi per disegnare un arco, e angolo, lunghezza, raggio e direzione possono essere cliccati o digitati. Vedi [Disegnare un arco in dieci modi](topic:draw-an-arc).

### Lavorare insieme

- **Seguire un revisore.** In una sessione Live scegliere {{ui:Segui}} accanto al nome di una persona e la propria vista si sposta con la sua; spostarsi o fare zoom da soli la interrompe. L'host può scegliere {{ui:Chiedi a tutti di seguirmi}}. L'elenco delle persone mostra il colore, il nome e la tavola su cui si trova ciascuno, oltre a quando è avvenuta la sua ultima modifica. Vedi [Seguire un altro revisore in una sessione Live](topic:follow-in-live).

## In ogni app

- I suggerimenti sono suggerimenti Bootstrap, il suggerimento di avvio può essere chiuso, le barre delle schede scorrono quando sbordano, e i titoli delle schede del browser riportano `<document> — MarkupCraft | CadCraft`.
- Un pannello con più sezioni ne apre una e chiude le altre (un lucchetto accanto alla freccia di apertura ne tiene una aperta); un interruttore nelle Impostazioni disattiva questo comportamento.
- Ogni app parte da un insieme predefinito di oggetti della Libreria.
- Le unità di peso e temperatura sono disponibili nelle impostazioni Unità.

## Corretto

- **Le annotazioni eliminate non restano più leggibili nel PDF salvato.** Il salvataggio prima rimuoveva un'annotazione eliminata o riscritta dalla sua pagina, ma lasciava l'oggetto, con il suo testo, nel file. Ora il salvataggio elimina quegli oggetti. I file salvati dalle versioni precedenti li contengono ancora finché non vengono salvati di nuovo.

## Limiti dichiarati

- I collegamenti in batch sono stati provati sui nostri set di test. I set reali disegnano i cerchietti in molti modi, quindi su un set di un cliente alcune viste potrebbero sfuggire. Le tavole scansionate richiedono prima {{ui:Leggi il testo (OCR)…}}.
- Note, note private e area di appoggio sono state provate in un browser senza interfaccia e sui nostri file, non con un grande set vettoriale reale e non in una vera sessione Live a due persone. La modifica della password non è ancora implementata. Le versioni precedenti alla 0.9 non mostrano le note.
- La vista per classe è l'elenco delle persone; non è stata provata con un vero insegnante e veri studenti.
- Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le rivede.
- I programmi di installazione per Windows non sono firmati digitalmente (Ulteriori informazioni, poi Esegui comunque); l'immagine disco per macOS non è notarizzata (clic destro, poi Apri).

## Prima: 0.8 e 0.8.1

Questo è ciò che è cambiato in MarkupCraft 0.8 e 0.8.1, rispetto alla 0.7. La novità principale è che un'annotazione può diventare un'attività che qualcuno, o l'assistente collegato, svolge, e che si chiude da sola quando il disegno cambia davvero.

### Novità

**Annotazioni che agiscono**

- **Rendere un'annotazione un'attività.** Selezionare una o più annotazioni, aprire la scheda {{ui:Attività}} e scegliere {{ui:Crea attività dalla selezione}}. Un'attività ha un titolo, una persona o l'assistente collegato che la svolge, un giorno di scadenza facoltativo e uno stato, e mantiene il suo posto sulla tavola e la sua discussione. Vedi [Rendere un'annotazione un'attività](topic:markups-that-act).
- **Attività che si chiudono da sole.** Un'attività può osservare il disegno dentro la sua annotazione. Aprire una revisione più recente della tavola e scegliere {{ui:Verifica ora}}: se le linee in quell'area sono cambiate di più di un nonnulla, l'attività viene segnata come Fatta, la sua annotazione diventa Completata e una nota nella discussione spiega cosa è cambiato. Una nuova data o linee spostate di meno di 1,5 punti non contano. In alternativa un'attività può osservare un elemento del modello: l'assistente segnala l'elemento con `tasks_check`, e una segnalazione successiva diversa, oppure un elemento eliminato, chiude l'attività. Un solo passo di annullamento la riapre.
- **Trovare il lavoro.** Filtrare l'elenco {{ui:Attività}} per stato e per destinatario, incluso {{ui:In ritardo}}; scegliere {{ui:Assegnata a}}, poi {{ui:Assistente}} per vedere cosa attende l'assistente. Un'attività oltre il suo giorno di scadenza appare come avviso nel pannello Problemi. {{ui:CSV}} esporta l'elenco. Le attività sono salvate nel PDF insieme all'annotazione e viaggiano in Live come le altre proprietà delle annotazioni.

**Cosa è cambiato, come elenco semplice**

- **Elencare le modifiche.** Aprire la scheda {{ui:Confronta}}, poi {{ui:Confronta un intero set}}, scegliere il file precedente e quello successivo e scegliere {{ui:Elenca le modifiche}}. L'elenco inizia con un conteggio, poi copre ogni tavola modificata, a partire dalla modifica più grande: dove si trova sulla tavola, quanto è grande (in unità reali oltre che in pollici sulla carta, su una tavola calibrata), se sono state aggiunte o rimosse linee, quante annotazioni vi si trovano e quali parole sono comparse o scomparse. {{ui:Copia l'elenco}} lo mette negli Appunti e {{ui:CSV}} scrive una riga per ogni modifica. Vedi [Elenca le modifiche tra le revisioni](topic:what-changed-in-words).

**Note vocali e decisioni**

- **Note vocali.** Nella scheda {{ui:Note}} scegliere {{ui:Registra una nota vocale}}, poi {{ui:Interrompi la registrazione}}; le registrazioni si fermano da sole dopo due minuti. La nota viene fissata al centro della tavola, si trascina dove deve stare, si digita una didascalia in {{ui:Proprietà}}, e {{ui:Riproduci}} nell'elenco la riproduce. La registrazione è salvata nel PDF.
- **Decisioni.** {{ui:Fissa una decisione}} scrive una o due frasi sulla tavola. Se sostituisce una decisione precedente, sceglierla in {{ui:Sostituisce}}: quella vecchia resta, contrassegnata come Sostituita, e punta a quella nuova. Un solo passo di annullamento la riporta indietro. Vedi [Fissare note vocali e decisioni su una tavola](topic:voice-notes-and-decisions).

**Redline verso la revisione**

- **Inviare e rispondere.** Nella scheda {{ui:Attività}} aprire {{ui:Redline verso la revisione}}, digitare la revisione a cui sono riferite le annotazioni e scegliere {{ui:Esporta file redline}}. Si ottiene un file `.redline.json` con un elemento per ogni annotazione aperta: tavola, posizione (come frazioni della tavola, così una ristampa a un'altra dimensione resta allineata), parole, autore, discussione e la sua attività. Chi disegna le modifiche risponde Accettato, Rifiutato o Fatta in un file `.redline-answers.json`; {{ui:Carica file delle risposte…}} assegna a ogni annotazione quello stato e la nota del disegnatore, come un solo passo di annullamento. Vedi [Inviare le annotazioni al disegnatore come redline](topic:redline-to-revision).

**Assistenti IA**

- **Più strumenti.** Un assistente collegato tramite CadCraft Studio può elencare le attività (`tasks_list`), crearne o modificarne una (`task_set`), toglierne l'attività (`task_clear`), verificarne una rispetto a una revisione più recente o a un elemento (`tasks_check`) e leggere l'elenco semplice delle modifiche tra due set di tavole aperti (`revisions_changes`). Riceve solo gli strumenti spuntati sotto l'interruttore Assistenti, e ogni modifica è un solo passo di annullamento. Vedi [Usare MarkupCraft con un assistente IA](topic:use-with-ai-assistants).

### In ogni app

- **Lingue.** CadCraft Studio ha ora 54 lingue. Dieci sono nuove: lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeco. Tutte le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le rivede.
- **Dispositivi di input.** {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Dispositivi di input}} stabilisce cosa fanno trackpad, tasti laterali del mouse, penna, tocchi con le dita, un mouse 3D, un controller di gioco o un controller MIDI, per tutte le app oppure solo per questa. Finché non si cambia qualcosa, ogni dispositivo funziona come prima. Vedi [Usare un trackpad, un mouse 3D o un controller](common:input-devices).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} ha {{ui:A capo}} (predefinito), {{ui:2 righe}} e {{ui:1 riga}}, così il disegno ha più spazio. Vedi [Disporre i pannelli](common:arrange-panels).
- **Griglia delle proprietà.** I campi Stile di un'annotazione usano la griglia condivisa, con categorie richiudibili e colonne di etichetta e valore.
- **Pannello Problemi.** Gli avvisi dell'app, come un'attività in ritardo, si raccolgono in un unico pannello Problemi.
- **Live e add-on.** Le sessioni Live sono descritte in [Lavorare insieme in Live](common:work-together-live); l'elenco degli add-on che segue l'account è in [Add-on e l'elenco del proprio account](common:addons-basics).
- **Collegare l'IA.** CadCraft Studio è l'hub per l'assistente collegato: si collega una volta sola per tutte e otto le app. Le app non contengono una IA propria.

### Corretto in 0.8.1

- **Studio può cambiare lingua mentre è in esecuzione.** Prima, l'app desktop e le edizioni confezionate restavano in inglese. Non ancora provato su tutte le piattaforme: segnalare se la lingua non cambia.
- Le installazioni di Studio 0.8 ricevono la 0.8.1 tramite {{ui:Impostazioni}} › {{ui:Aggiornamenti}}.

### Non ancora in questa versione

- **Non firmata digitalmente.** I programmi di installazione per Windows e l'immagine .dmg per macOS non hanno ancora una firma. Su Windows, se SmartScreen blocca il programma di installazione, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su un Mac, fare clic destro su CadCraft Studio e scegliere {{ui:Apri}}. Le versioni per store sono in attesa.
- **Collegare l'IA è incompleto in alcuni punti.** Il collegamento con un clic dentro Studio, il connettore ospitato per gli assistenti nel browser e la propria chiave API dentro Studio non sono garantiti per questa versione. Il ciclo delle attività è stato provato, ma non ancora con un vero assistente.
- **Le verifiche delle attività richiedono la stessa dimensione di pagina.** Una tavola ristampata a un'altra dimensione non corrisponde, quindi le sue attività non si chiudono. Le tavole sono abbinate per numero di tavola, altrimenti per posizione nella pagina.
- **Le note vocali sono solo registrazioni.** Non c'è trascrizione, e un assistente vede la durata di una nota, l'autore e la didascalia, non il suono. La registrazione è stata provata con un microfono finto in un browser senza interfaccia; un vero microfono su telefono, tablet o portatile è ancora da verificare.
- **Fogli di calcolo e motivazioni in un PDF** sono conservati in una voce privata del file. Una versione precedente di MarkupCraft ignora quella voce e la elimina la volta successiva che salva il file, quindi aprire e salvare questi file con la 0.8 o successiva.
- **Il lato del disegnatore dei redline.** La lettura del file redline da parte di CadCraft e la risposta non sono ancora implementate.
- **Altre lingue.** La barra dell'app in tamil supera di 528 px.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Per la versione precedente, vedi [Novità in 0.7](topic:whats-new-0-7).
