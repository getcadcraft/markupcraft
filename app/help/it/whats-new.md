---
title: Novità della 0.7
summary: RFI, documenti da approvare e giornali di cantiere in una nuova scheda Cantiere, con scadenze, ritardi in rosso, CSV e BCF, lavoro offline e Unisci; assistenti che impostano stati, rispondono ed esportano l'elenco; elenchi di unità che seguono le Impostazioni; pannelli che si ripiegano e finestre di dialogo che si spostano.
keywords: novità, release notes, elenco delle modifiche, modifiche, 0.7, versione, nuove funzioni, cantiere, registri di cantiere, rfi, richiesta di informazioni, documento da approvare, giornale di cantiere, diario di cantiere, in ritardo, scadenza, assegnati a me, puntina, unisci, offline, tablet, bcf, csv, assistente, mcp, stato dell'annotazione, risposta, esportare, unità, elenchi di unità, stella, calibrare, compatta, pannelli, finestre di dialogo, portoghese
from: 142e1a1e
---

Ecco cosa è cambiato in MarkupCraft 0.7 rispetto alla 0.6. La grande novità sono i registri di cantiere: RFI, documenti da approvare e giornali di cantiere conservati nel PDF accanto alle annotazioni.

## Novità

### RFI, documenti da approvare e giornali di cantiere

- **La scheda Cantiere.** Aprire la scheda {{ui:Cantiere}} e scegliere {{ui:RFI}}, {{ui:Documento da approvare}} o {{ui:Giornale di cantiere}}. Toccare o fare clic sulla tavola dove va un RFI o un documento da approvare e una puntina segna il punto; un giornale di cantiere va sulla tavola aperta senza puntina ({{ui:Posiziona puntina}} ne aggiunge una in seguito, {{ui:Sposta puntina}} sposta qualsiasi puntina). Ogni registro ha il proprio numero (RFI-0001, SUB-0001, LOG-0001), un titolo, un testo, uno stato, un assegnatario, una scadenza, una discussione di risposte e un elenco di nomi di allegati. Vedere [Tracciare RFI, documenti da approvare e giornali di cantiere](topic:field-records).
- **Vedere cosa è in ritardo.** Filtrare l'elenco per tipo, stato, scadenza (in ritardo, in scadenza entro 7 giorni, con o senza scadenza), questa tavola o tutte le tavole, una ricerca nel testo oppure {{ui:Assegnati a me}}. Un registro oltre la scadenza e ancora in attesa è contrassegnato **In ritardo**, in rosso, nell'elenco e sulla sua puntina. Vedere [Trovare ciò che conta](topic:field-records#find-what-matters).
- **CSV e BCF.** {{ui:CSV}} scrive i registri elencati come foglio di calcolo; {{ui:BCF}} li scrive come argomenti BCF, ciascuno con un'istantanea del suo punto sulla tavola. Entrambi seguono i filtri. Vedere [Esportare](topic:field-records#export).
- **Offline, e due copie rese una.** I registri sono salvati nel PDF e non richiedono rete, quindi un tablet in cantiere può aggiungerli, rispondere e salvarli. Tornati in ufficio, {{ui:Unisci}} unisce i registri di un'altra copia dello stesso PDF in base ai loro id, come un unico passo di annullamento. Vedere [Salvare, lavorare offline e unire copie](topic:field-records#save-offline-and-merging-copies).

### Assistenti AI

- **Più cose che un assistente può fare.** Il proprio assistente, collegato tramite CadCraft Studio, può ora impostare lo stato di un'annotazione (`markup_status`, registrato nella sua discussione), rispondere in una discussione (`markup_reply`) ed esportare l'elenco {{ui:Annotazioni}} come CSV o BCF (`markups_export`, ciò che l'elenco mostra con i suoi filtri). Ogni modifica è un passo di annullamento, firmato con il nome dell'assistente. Vedere [Cosa può chiedere un assistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In ogni app

- **Unità.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} ha un elenco ciascuno per lunghezza, area, volume, angolo e pendenza, con le dimensioni esatte date dalle definizioni delle unità (il piede topografico statunitense è un'unità a sé). Disattivare le unità che non si usano mai ed escono dagli elenchi; contrassegnarne una con la stella e il nuovo lavoro parte con quella. Un file mantiene sempre la propria unità. In MarkupCraft, le unità di misura e di posizione in {{ui:Impostazioni}} › {{ui:MarkupCraft}} e l'unità nella finestra di calibrazione seguono gli interruttori, la stella imposta l'unità di misura finché non si salvano le impostazioni proprie di MarkupCraft, e la distanza reale digitata durante la calibrazione può portare il simbolo di qualsiasi unità, ad esempio `3 yd` o `1.5 km`. Vedere [Unità, valori digitati ed elenchi delle unità](common:unit-lists).
- **Una disposizione più densa e pannelli che si ripiegano.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Densità della disposizione}} › {{ui:Compatta}} fa stare più cose sullo schermo (i touch screen e i telefoni mantengono i pulsanti grandi). Ogni pannello laterale ha una sottile barra del titolo: trascinarla per ancorare o rendere mobile il pannello, rilasciarla sulla barra di un altro pannello per condividere un riquadro come schede, fissarla perché scorra via sul bordo, oppure nasconderla e riportarla dal bordo. Vedere [Disporre i pannelli](common:arrange-panels#make-the-layout-denser).
- **Le finestre di dialogo si spostano.** Trascinare una finestra di dialogo dalla barra del titolo per toglierla di mezzo al disegno; ricompare dove è stata lasciata. Fare doppio clic sulla barra del titolo per centrarla di nuovo. Vedere [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).
- **Ricette per gli assistenti AI.** Dieci richieste svolte per il proprio assistente (riordinare un disegno, stampare un set, verificare i disegni, interrogare un modello, totalizzare un computo, provare una variante di parte…), ciascuna con gli strumenti che chiama e i permessi che richiede, e ciascuna rieseguita dai nostri test. Le app non contengono AI. Vedere [Ricette per gli assistenti AI](common:assistants-recipes).
- **Lingue.** **Português (Portugal)** è nuovo in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Lingua}}. Questa, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** hanno ora ogni parola delle app, come bozze non ancora riviste da un madrelingua. Gli argomenti della guida sono in inglese.
- **CadCraft Studio** dice perché un controllo degli aggiornamenti è fallito (nessun file per il proprio sistema, nessuna rete, firma non valida) invece di un semplice "Fine", e smette di riproporre una scheda Novità chiusa finché non c'è una versione più recente.

## Non ancora in questa versione

- **La 0.7 non è firmata digitalmente.** La firma e il pacchetto per il Microsoft Store sono passati alla 0.8 perché la convalida del certificato non è ancora arrivata. Verificare lo SHA-256 accanto a ogni file su getcadcraft.com/download. In Windows, se SmartScreen blocca il programma di installazione, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su Mac, la prima volta, fare clic con il tasto destro su CadCraft Studio e scegliere {{ui:Apri}}. CadCraft Studio non è ancora in uno store di app e non esiste ancora una versione per iPad o iPhone.
- Gli elenchi di angolo e pendenza in {{ui:Unità}} vengono salvati, ma nessun campo li legge ancora.
- I registri di cantiere non sono condivisi in una sessione Live di CadCraft Studio (le sessioni Live trasportano solo le annotazioni); riunire le copie con {{ui:Unisci}}.
- Unisci prende un registro per intero dalla copia modificata per ultima: se due persone hanno cambiato campi diversi dello stesso registro, prevalgono i campi della copia più recente. Le discussioni e i nomi degli allegati vengono uniti.
- Gli allegati sono solo nomi; i file restano dove sono. Non ci sono team, notifiche né progetti nel cloud per i registri, e gli assistenti non hanno ancora strumenti per i registri.
- I registri di cantiere sono stati provati in un browser con dimensioni da telefono e tablet con la rete interrotta, ma non ancora a mano su un vero tablet.
- Ancora dalla 0.6: ruotare gli oggetti della pagina di un angolo qualsiasi, disegnare nuove forme direttamente nella pagina, cambiare il carattere o la dimensione di una riga e il testo che scorre su più righe. Una copia salvata con modifiche alla pagina non è ancora stata aperta in Acrobat.
- Ancora dalla 0.5: annullare una modifica di pagina (come aggiungere una pagina vuota), leggere il testo dalle tavole scansionate e le sessioni Live oltre la propria rete.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet).
