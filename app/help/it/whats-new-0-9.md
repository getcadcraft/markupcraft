---
title: Novità della versione 0.9 (precedente)
summary: Note e area di appoggio che non vengono mai stampate, note private cifrate e una copia pulita per il cliente, collegamenti in batch per un intero set di disegni, uno strumento Arco con dieci metodi, seguire un altro revisore in Live e una correzione per le annotazioni eliminate che restavano nel PDF salvato.
keywords: novità 0.9, versione precedente, novità, cosa c'è di nuovo, 0.9, note di rilascio, registro delle modifiche, note, area di appoggio, note private, password, cifrato, nascondi note, mostra note, copia pulita, istantanea, collegamenti in batch, richiami alle tavole, collega tavole, collegamento PDF, arco, metodi arco, arco a tre punti, raggio, segui, segui me, live, vista classe, elenco persone, annotazione eliminata, suggerimenti, titoli delle schede, novità, note di rilascio, registro delle modifiche, modifiche, 0.8, 0.8.1, versione, nuove funzionalità, attività, assegnatario, giorno di scadenza, in ritardo, verifica ora, cosa è cambiato, revisioni, confronta, nota vocale, decisione, redline, file delle risposte, disegnatore, assistente, mcp, problemi, lingue, dispositivi di input, trackpad, righe della barra degli strumenti, griglia delle proprietà, aggiornamento
from: aa3dfeb8
---

Questo è ciò che è cambiato in MarkupCraft 0.9, rispetto alla 0.8.1. L'idea di fondo è che le note di lavoro restano fuori dalla pagina che riceve il cliente, e che un intero set di disegni può essere collegato in un solo passaggio.

## Novità

### Note, area di appoggio e note private

- **L'area di appoggio.** L'area intorno a ogni tavola è una scrivania: tutto ciò che viene disegnato, scritto o incollato accanto alla tavola è una nota e non viene mai stampato. Scegliere {{ui:Mostra l'area di appoggio}} per allontanare la vista e avere spazio, oppure {{ui:Istantanea sull'area di appoggio}}, trascinare un riquadro, poi {{ui:Sull'area di appoggio}} per mettere un'immagine di una parte del disegno accanto alla tavola. Un'istantanea è un'immagine e non cambia quando cambia la tavola. Vedere [Note, area di appoggio e note private](topic:notes-and-pasteboard).
- **Mostrare e nascondere le note.** Qualsiasi annotazione può essere una nota: impostare {{ui:Le nuove annotazioni sono}} nella scheda {{ui:Note}}, oppure {{ui:Questa annotazione è}} in {{ui:Proprietà}}. {{key:Shift+H}} oppure l'interruttore {{ui:Note}} sotto la tavola nasconde e mostra tutte le note in una volta. Le note sono escluse da stampa, copie appiattite, elenchi ed esportazioni, e gli altri lettori PDF non le mostrano. Il PDF salvato le conserva per la prossima volta che viene aperto in MarkupCraft.
- **Note private.** Scegliere {{ui:Imposta una password}}, poi rendere un'annotazione {{ui:Una nota privata}}. Viene cifrata nel file con una password di almeno 10 caratteri, e non esiste recupero: nessuno, nemmeno noi, può aprirla senza la password. {{ui:Blocca}} nasconde le note private; {{ui:Resta sbloccato su questo dispositivo}} è disattivato per impostazione predefinita.
- **Salvare una copia pulita.** {{ui:Salva una copia pulita}} rimuove ogni nota, ogni nota privata e tutto ciò che si trova sull'area di appoggio. Usarla per il file che va al cliente.

### Collegare un intero set

- **Collegamenti in batch.** Scegliere {{ui:Pagine}} › {{ui:Collegamenti in batch…}}, oppure {{ui:Collega i richiami alle tavole…}} sotto {{ui:Trova testo}} nel pannello {{ui:Tavole}}. Il passo 1 elenca il numero e il nome di ogni tavola, letti dal suo cartiglio; correggere quelli sbagliati. Il passo 2 elenca i richiami trovati, per esempio `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Da collegare}} indica la tavola e la vista per ciascuno, {{ui:Non collegato}} indica i numeri che nessuna tavola aperta ha, e {{ui:Crea i collegamenti}} li crea tutti in un unico passo di annullamento. Ripetere l'operazione dopo un'aggiunta o una rinumerazione; i collegamenti fatti a mano non vengono mai modificati. Un collegamento con una vista viene salvato come collegamento PDF, così anche gli altri lettori aprono il dettaglio. Vedere [Collegamenti tra tavole](topic:sheet-links).

### Disegno

- **Arco, dieci metodi.** Lo strumento {{ui:Arco}} ({{key:O}}) ora ha una casella {{ui:Metodo arco}} sopra la pagina, con dieci modi per disegnare un arco; angolo, lunghezza, raggio e direzione possono essere indicati con il mouse o digitati. Vedere [Disegnare un arco in dieci modi](topic:draw-an-arc).

### Lavorare insieme

- **Seguire un revisore.** In una sessione Live scegliere {{ui:Segui}} accanto al nome di una persona: la vista si sposta con la sua. Spostando o ingrandendo la vista da soli, il seguire si interrompe. L'host può scegliere {{ui:Chiedi a tutti di seguirmi}}. L'elenco delle persone mostra il colore, il nome, la tavola su cui si trovano e l'ora della loro ultima modifica. Vedere [Seguire un altro revisore in una sessione Live](topic:follow-in-live).

## In tutte le app

- I suggerimenti sono quelli di Bootstrap, la nota di avvio può essere chiusa, le barre delle schede scorrono quando non ci stanno, e i titoli delle schede del browser riportano `<documento> — MarkupCraft | CadCraft`.
- Un pannello con più sezioni ne apre una e chiude le altre (un lucchetto accanto alla freccia ne mantiene una aperta); un interruttore in {{ui:Impostazioni}} disattiva questa funzione.
- Ogni app parte da una raccolta predefinita di oggetti della libreria.
- Le unità di peso e temperatura sono disponibili nelle impostazioni delle unità.

## Corretto

- **Le annotazioni eliminate non restano più leggibili nel PDF salvato.** Salvando, un'annotazione eliminata o riscritta veniva tolta dalla sua pagina, ma il suo oggetto, con il testo, restava nel file. Ora il salvataggio elimina anche quegli oggetti. I file salvati dalle versioni precedenti li contengono ancora finché non vengono salvati di nuovo.

## Limiti dichiarati

- I collegamenti in batch sono stati provati sui nostri set di prova. I set reali disegnano i cerchietti in molti modi, quindi su un set di un cliente alcune viste potrebbero non essere trovate. Le tavole scansionate richiedono prima {{ui:Leggi il testo (OCR)…}}.
- Note, note private e area di appoggio sono state provate in un browser senza interfaccia e sui nostri file, non con un grande set vettoriale reale e non in una vera sessione Live tra due persone. La modifica di una password non è implementata. Le versioni precedenti alla 0.9 non mostrano le note.
- La vista classe è l'elenco delle persone; non è stata provata con un vero insegnante e con studenti reali.
- Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge.
- Gli installer di Windows non sono firmati digitalmente (scegliere Ulteriori informazioni, poi Esegui comunque); l'immagine disco per macOS non è notarizzata (clic destro, poi Apri).

## Precedenti: 0.8 e 0.8.1

Questo è ciò che è cambiato in MarkupCraft 0.8 e 0.8.1, rispetto alla 0.7. La novità principale è che un'annotazione può essere un'attività che qualcuno, oppure l'assistente AI collegato, svolge, e che si chiude da sola quando il disegno cambia davvero.

### Novità

**Annotazioni che agiscono**

- **Rendere un'annotazione un'attività.** Selezionare una o più annotazioni, aprire la scheda {{ui:Attività}} e scegliere {{ui:Crea attività dalla selezione}}. Un'attività ha un titolo, una persona o l'assistente AI collegato che la svolge, una scadenza facoltativa e uno stato, e mantiene la sua posizione sulla tavola e la sua discussione. Vedere [Rendere un'annotazione un'attività](topic:markups-that-act).
- **Attività che si chiudono da sole.** Un'attività può controllare il disegno dentro la sua annotazione. Aprire una revisione più recente della tavola e scegliere {{ui:Verifica ora}}: se le linee in quell'area sono cambiate per più di una quantità minima, l'attività viene contrassegnata come Fine, la sua annotazione diventa Completato e una nota nella discussione descrive cosa è cambiato. Un nuovo timbro della data, o linee spostate di meno di 1,5 punti, non contano. Un'attività può invece controllare un elemento del modello: l'assistente segnala l'elemento con `tasks_check`, e una segnalazione successiva diversa, oppure un elemento eliminato, chiude l'attività. Un solo passo di annullamento la riapre.
- **Trovare il lavoro.** Filtrare l'elenco {{ui:Attività}} per stato e per destinatario, compreso {{ui:In ritardo}}; scegliere {{ui:Assegnata a}}, poi {{ui:Assistente}} per vedere cosa attende l'assistente. Un'attività oltre la scadenza compare come avviso nel pannello Problemi. {{ui:CSV}} esporta l'elenco. Le attività sono salvate nel PDF insieme all'annotazione e viaggiano in Live come le altre proprietà delle annotazioni.

**Cosa è cambiato, come elenco semplice**

- **Elencare le modifiche.** Aprire la scheda {{ui:Confronta}}, poi {{ui:Confronta un intero set}}, scegliere il file precedente e quello successivo e scegliere {{ui:Elenca le modifiche}}. L'elenco inizia con un conteggio, poi descrive ogni tavola modificata, a partire dalla modifica più grande: dove si trova sulla tavola, quanto è grande (in unità reali oltre che in pollici di carta su una tavola calibrata), se linee sono state aggiunte o rimosse, quante annotazioni si trovano lì e quali parole sono comparse o scomparse. {{ui:Copia l'elenco}} lo mette negli Appunti e {{ui:CSV}} scrive una riga per ogni modifica. Vedere [Elencare cosa è cambiato tra le revisioni](topic:what-changed-in-words).

**Note vocali e decisioni**

- **Note vocali.** Nella scheda {{ui:Note}} scegliere {{ui:Registra una nota vocale}}, poi {{ui:Interrompi la registrazione}}; le registrazioni si fermano da sole dopo due minuti. La nota viene fissata al centro della tavola: trascinarla dove serve e digitare una didascalia in {{ui:Proprietà}}; {{ui:Riproduci}} nell'elenco la fa ascoltare. La registrazione è salvata nel PDF.
- **Decisioni.** {{ui:Fissa una decisione}} scrive una o due frasi sulla tavola. Se sostituisce una decisione precedente, sceglierla in {{ui:Sostituisce}}: quella vecchia resta, contrassegnata come Sostituita, e rimanda alla nuova. Un solo passo di annullamento la riporta indietro. Vedere [Fissare note vocali e decisioni su una tavola](topic:voice-notes-and-decisions).

**Redline verso la revisione**

- **Inviare e rispondere.** Nella scheda {{ui:Attività}} aprire {{ui:Redline verso la revisione}}, digitare la revisione a cui si riferiscono le annotazioni e scegliere {{ui:Esporta file redline}}. Si ottiene un file `.redline.json` con un elemento per ogni annotazione aperta: tavola, posizione (come frazioni della tavola, così una nuova stampa a un'altra dimensione resta allineata), parole, autore, discussione e la sua attività. Chi disegna le modifiche risponde Accettato, Rifiutato o Fine in un file `.redline-answers.json`; {{ui:Carica file delle risposte…}} assegna a ogni annotazione quello stato e la nota del disegnatore, in un solo passo di annullamento. Vedere [Inviare le annotazioni al disegnatore come redline](topic:redline-to-revision).

**Assistenti AI**

- **Altri strumenti.** Un assistente collegato tramite CadCraft Studio può elencare le attività (`tasks_list`), crearne o modificarne una (`task_set`), toglierla (`task_clear`), verificarne una rispetto a una revisione più recente o a un elemento (`tasks_check`) e leggere l'elenco semplice delle modifiche tra due set di tavole aperti (`revisions_changes`). Riceve solo gli strumenti selezionati nell'interruttore Assistenti, e ogni modifica è un solo passo di annullamento. Vedere [Usare MarkupCraft con un assistente AI](topic:use-with-ai-assistants).

### In tutte le app

- **Lingue.** CadCraft Studio ora ha 54 lingue. Dieci sono nuove: lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeko. Tutte le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge.
- **Dispositivi di input.** {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Dispositivi di input}} decide cosa fanno un trackpad, i pulsanti laterali del mouse, una penna, i tocchi con le dita, un mouse 3D, un controller di gioco o un controller MIDI, per tutte le app oppure solo per questa. Finché non si cambia nulla, ogni dispositivo funziona come prima. Vedere [Usare un trackpad, un mouse 3D o un controller](common:input-devices).
- **Barre degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} offre {{ui:A capo}} (predefinita), {{ui:2 righe}} e {{ui:1 riga}}, così il disegno ha più spazio. Vedere [Disporre i pannelli](common:arrange-panels).
- **Griglia delle proprietà.** I campi Stile di un'annotazione usano la griglia condivisa, con categorie che si possono comprimere e colonne per etichetta e valore.
- **Pannello Problemi.** Gli avvisi dell'app, come un'attività in ritardo, si raccolgono in un unico pannello Problemi.
- **Live e add-on.** Le sessioni Live sono descritte in [Lavorare insieme in Live](common:work-together-live); l'elenco degli add-on collegato all'account è in [Add-on e account](common:addons-basics).
- **Collegare la propria AI.** CadCraft Studio è il centro per il proprio assistente: basta collegarlo una volta sola per tutte e otto le app. Le app non contengono alcuna AI propria.

### Corretto in 0.8.1

- **Studio può cambiare lingua mentre è in esecuzione.** Prima l'app desktop e le edizioni confezionate restavano in inglese. Non è ancora stato provato su tutte le piattaforme: segnalare se la lingua non cambia.
- Le installazioni di Studio 0.8 ricevono la 0.8.1 tramite {{ui:Impostazioni}} › {{ui:Aggiornamenti}}.

### Non ancora in questa versione

- **Non firmato digitalmente.** Gli installer di Windows e il .dmg di macOS non hanno ancora una firma. Su Windows, se SmartScreen blocca l'installer, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su Mac, fare clic destro su CadCraft Studio e scegliere {{ui:Apri}}. Le versioni per lo store sono in attesa.
- **Collegare la propria AI è incompleto in alcuni punti.** Il collegamento con un clic in Studio, il connettore ospitato per gli assistenti da browser e la propria chiave API in Studio non sono garantiti in questa versione. Il ciclo delle attività è stato provato, ma non ancora con un vero assistente.
- **Le verifiche delle attività richiedono lo stesso formato di pagina.** Una tavola stampata di nuovo a un'altra dimensione non corrisponde, quindi le sue attività non si chiudono. Le tavole vengono abbinate per numero di tavola, altrimenti per posizione nella pagina.
- **Le note vocali sono solo registrazioni.** Non c'è trascrizione, e un assistente vede la durata, l'autore e la didascalia di una nota, non il suono. La registrazione è stata provata con un microfono finto in un browser senza interfaccia; un vero microfono su telefono, tablet o computer portatile è ancora da verificare.
- **Fogli di calcolo e motivazioni in un PDF** sono conservati in una voce privata del file. Una MarkupCraft più vecchia ignora quella voce e la elimina al salvataggio successivo, quindi aprire e salvare tali file con la 0.8 o successive.
- **Il lato del disegnatore dei redline.** La lettura del file redline da parte di CadCraft e la risposta non sono ancora implementate.
- **Altre lingue.** La barra dell'app in tamil supera di 528 px il limite.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Per la versione precedente, vedere [Novità della 0.7](topic:whats-new-0-7).
