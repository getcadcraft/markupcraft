---
title: Novità in 0.8 e 0.8.1
summary: Annotazioni che diventano attività e si chiudono da sole, un elenco semplice delle modifiche tra le revisioni, note vocali e decisioni sulla tavola, file redline per il disegnatore e le modifiche comuni alla 0.8: dispositivi di input, righe della barra degli strumenti, Problemi, altre lingue.
keywords: novità, cosa è nuovo, note di rilascio, changelog, modifiche, 0.8, 0.8.1, versione, nuove funzioni, attività, assegnatario, giorno di scadenza, in ritardo, verifica ora, cosa è cambiato, revisioni, confronta, nota vocale, decisione, redline, file delle risposte, disegnatore, assistente, mcp, problemi, lingue, dispositivi di input, trackpad, righe della barra degli strumenti, griglia delle proprietà, aggiornamento
from: 40368796
---

Ecco cosa è cambiato in MarkupCraft 0.8 e 0.8.1, rispetto alla 0.7. La novità principale è che un'annotazione può essere un'attività che qualcuno, oppure il proprio assistente, svolge, e che si chiude da sola quando il disegno cambia davvero.

## Novità

### Annotazioni che agiscono

- **Trasforma un'annotazione in attività.** Seleziona una o più annotazioni, apri la scheda {{ui:Tasks}} e scegli {{ui:Make selected a task}}. Un'attività ha un titolo, una persona o il proprio assistente collegato che la svolge, un giorno di scadenza facoltativo e uno stato, e mantiene la sua posizione sulla tavola e la sua discussione. Vedi [Crea un'annotazione come attività](topic:markups-that-act).
- **Attività che si chiudono da sole.** Un'attività può controllare il disegno all'interno della sua annotazione. Apri una revisione più recente della tavola e scegli {{ui:Check now}}: se le linee in quell'area sono cambiate in modo più che minimo, l'attività viene contrassegnata come Completata, la sua annotazione diventa Completata e una nota nella discussione descrive la modifica. Una nuova data di timbro, oppure linee spostate di meno di 1.5 punti, non contano. Un'attività può invece controllare un elemento del modello: il tuo assistente segnala l'elemento con `tasks_check`, e una segnalazione successiva diversa, oppure un elemento eliminato, chiude l'attività. Un solo passo di annulla la riapre.
- **Trova il lavoro.** Filtra l'elenco {{ui:Tasks}} per stato e per destinatario, incluso {{ui:Overdue}}; scegli {{ui:Assigned to}}, poi {{ui:Assistant}} per vedere cosa attende il proprio assistente. Un'attività oltre il giorno di scadenza compare come avviso nel pannello Problemi. {{ui:CSV}} esporta l'elenco. Le attività sono salvate nel PDF insieme all'annotazione e passano tramite Live come le altre proprietà delle annotazioni.

### Cosa è cambiato, in un elenco semplice

- **Elenca le modifiche.** Apri la scheda {{ui:Compare}}, poi {{ui:Compare a whole set}}, scegli il file precedente e quello successivo e seleziona {{ui:List the changes}}. L'elenco inizia con un conteggio, poi riporta ogni tavola modificata, a partire dalla modifica più grande: dove si trova sulla tavola, quanto è grande (in unità reali oltre che in pollici su carta su una tavola calibrata), se sono state aggiunte o rimosse linee, quante annotazioni vi si trovano e quali parole sono comparse o scomparse. {{ui:Copy the list}} lo copia negli Appunti, mentre {{ui:CSV}} scrive una riga per ogni modifica. Vedi [Elenca cosa è cambiato tra le revisioni](topic:what-changed-in-words).

### Note vocali e decisioni

- **Note vocali.** Nella scheda {{ui:Notes}} scegli {{ui:Record a voice note}}, poi {{ui:Stop recording}}; le registrazioni si fermano da sole dopo due minuti. La nota viene fissata al centro della tavola, la trascini dove serve e digiti una didascalia in {{ui:Properties}}, mentre {{ui:Play}} nell'elenco la riproduce. La registrazione è salvata all'interno del PDF.
- **Decisioni.** {{ui:Pin a decision}} scrive una o due frasi sulla tavola. Se sostituisce una decisione precedente, selezionala in {{ui:It replaces}}: quella vecchia resta, contrassegnata come Sostituita, e rimanda a quella nuova. Un solo passo di annulla la riporta indietro. Vedi [Fissa note vocali e decisioni su una tavola](topic:voice-notes-and-decisions).

### Redline verso la revisione

- **Invia e rispondi.** Nella scheda {{ui:Tasks}} apri {{ui:Redline to revision}}, digita la revisione a cui si riferiscono le annotazioni e scegli {{ui:Export redline file}}. Viene creato un file `.redline.json` con un elemento per ogni annotazione aperta: tavola, posizione (come frazioni della tavola, così una nuova stampa a un'altra dimensione resta allineata), parole, autore, discussione e relativa attività. Chi disegna le modifiche risponde Accepted, Rejected o Done in un file `.redline-answers.json`; {{ui:Load answers file…}} assegna a ogni annotazione quello stato e la nota del disegnatore, come un unico passo di annulla. Vedi [Invia le annotazioni al disegnatore come redline](topic:redline-to-revision).

### Assistenti IA

- **Altri strumenti.** Un assistente collegato tramite CadCraft Studio può elencare le attività (`tasks_list`), crearne o modificarne una (`task_set`), rimuoverla (`task_clear`), verificarla rispetto a una revisione più recente o a un elemento (`tasks_check`) e leggere l'elenco semplice delle modifiche tra due set di tavole aperti (`revisions_changes`). Riceve solo gli strumenti selezionati sotto l'interruttore Assistenti, e ogni modifica è un unico passo di annulla. Vedi [Usa MarkupCraft con un assistente IA](topic:use-with-ai-assistants).

## In ogni app

- **Lingue.** CadCraft Studio ora ha 54 lingue. Dieci sono nuove: lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeko. Tutte quelle diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge.
- **Dispositivi di input.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} stabilisce cosa fanno un trackpad, i pulsanti laterali del mouse, una penna, i tocchi con le dita, un mouse 3D, un controller di gioco o un controller MIDI, per tutte le app oppure solo per questa. Finché non si modifica nulla, ogni dispositivo funziona come prima. Vedi [Usa un trackpad, un mouse 3D o un controller](common:input-devices).
- **Righe della barra degli strumenti.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} offre {{ui:Wrap}} (il valore predefinito), {{ui:2 rows}} e {{ui:1 row}}, così il disegno ha più spazio. Vedi [Disponi i pannelli](common:arrange-panels).
- **Griglia delle proprietà.** I campi Stile di un'annotazione usano la griglia condivisa, con categorie comprimibili e colonne di etichetta e valore.
- **Pannello Problemi.** Gli avvisi dell'app, come un'attività in ritardo, si raccolgono in un unico pannello Problemi.
- **Live e add-on.** Le sessioni Live sono descritte in [Lavorare insieme in Live](common:work-together-live); l'elenco degli add-on collegato al proprio account è in [Add-on e il proprio elenco account](common:addons-basics).
- **Collega la tua IA.** CadCraft Studio è il punto di collegamento per il proprio assistente: basta collegarlo una volta per tutte e otto le app. Le app non contengono un'IA propria.

## Corretto in 0.8.1

- **Studio può cambiare lingua mentre è in esecuzione.** Prima, l'app desktop e le edizioni confezionate restavano in inglese. Questo non è ancora stato provato su tutte le piattaforme: segnalaci se la lingua non cambia.
- Le installazioni di Studio 0.8 ricevono l'offerta di 0.8.1 tramite {{ui:Settings}} › {{ui:Updates}}.

## Non ancora in questa versione

- **Non firmato con codice.** I programmi di installazione per Windows e il file .dmg per macOS non hanno ancora una firma. Su Windows, se SmartScreen blocca il programma di installazione, scegli {{ui:More info}}, poi {{ui:Run anyway}}. Su un Mac, fai clic destro su CadCraft Studio e scegli {{ui:Open}}. Le versioni per gli store sono in sospeso.
- **Il collegamento della IA è in parte incompleto.** Il collegamento con un solo clic dentro Studio, il connettore ospitato per gli assistenti nel browser e la propria chiave API dentro Studio non sono previsti per questa versione. Il ciclo delle attività è stato provato, ma non ancora con un assistente reale.
- **I controlli delle attività richiedono la stessa dimensione della pagina.** Una tavola stampata di nuovo a un'altra dimensione non corrisponde, quindi le sue attività non si chiudono. Le tavole sono abbinate per numero di tavola, altrimenti per posizione nella pagina.
- **Le note vocali sono solo registrazioni.** Non esiste una trascrizione, e un assistente vede la durata, l'autore e la didascalia della nota, non il suono. La registrazione è stata provata con un microfono simulato in un browser senza interfaccia; un microfono reale su telefono, tablet o portatile è ancora da verificare.
- **Le tavole di calcolo e le motivazioni in un PDF** sono conservate in una voce privata del file. Una versione di MarkupCraft più vecchia ignora quella voce e la elimina al successivo salvataggio del file, quindi apri e salva un file del genere con la 0.8 o una versione successiva.
- **Il lato del disegnatore per i redline.** La lettura del file redline da parte di CadCraft e la relativa risposta non sono ancora implementate.
- **Altre lingue.** La barra dell'app in tamil supera di 528 px.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Per la versione precedente, consultare [Novità in 0.7](topic:whats-new-0-7).
