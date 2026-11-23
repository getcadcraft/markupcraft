---
title: Novità in 0.7 (precedente)
summary: RFI, documenti da approvare e giornali di cantiere in una nuova scheda Cantiere, con date di scadenza, ritardi in rosso, CSV e BCF, lavoro offline e Unisci; assistenti che impostano stati, rispondono ed esportano l'elenco; elenchi di unità che seguono le Impostazioni; pannelli che si riordinano e finestre di dialogo che si spostano.
keywords: novità 0.7, versione precedente, note di rilascio, registro modifiche, modifiche, 0.7, versione, nuove funzioni, cantiere, record di cantiere, rfi, richiesta di informazioni, documento da approvare, giornale di cantiere, diario di cantiere, in ritardo, data di scadenza, assegnati a me, puntina, unisci, offline, tablet, bcf, csv, assistente, mcp, stato dell'annotazione, risposta, esporta, unità, elenchi di unità, stellina, calibra, compatta, pannelli, finestre di dialogo, portoghese
from: ca5ba1f0
---

Questo è ciò che è cambiato in MarkupCraft 0.7, rispetto alla 0.6. La novità principale sono i record di cantiere: RFI, documenti da approvare e giornali di cantiere conservati nel PDF accanto alle annotazioni.

## Novità

### RFI, documenti da approvare e giornali di cantiere

- **La scheda Cantiere.** Aprire la scheda {{ui:Cantiere}} e scegliere {{ui:RFI}}, {{ui:Documento da approvare}} o {{ui:Giornale di cantiere}}. Toccare o cliccare sulla tavola dove appartiene un RFI o un documento da approvare e una puntina ne segna il punto; un giornale di cantiere va sulla tavola aperta senza puntina ({{ui:Posiziona puntina}} ne aggiunge una in seguito, {{ui:Sposta puntina}} sposta qualsiasi puntina). Ogni record ha un proprio numero (RFI-0001, SUB-0001, LOG-0001), un titolo, un testo, uno stato, un assegnatario, una data di scadenza, una discussione di risposte e un elenco di nomi di allegati. Vedi [Tenere traccia di RFI, documenti da approvare e giornali di cantiere](topic:field-records).
- **Vedere cosa è in ritardo.** Filtrare l'elenco per tipo, stato, data di scadenza (in ritardo, in scadenza entro 7 giorni, con o senza data di scadenza), questa tavola o tutte le tavole, una ricerca di testo, oppure {{ui:Assegnati a me}}. Un record oltre la sua data di scadenza che è ancora in attesa è contrassegnato **In ritardo**, in rosso, nell'elenco e sulla sua puntina. Vedi [Trovare ciò che conta](topic:field-records#find-what-matters).
- **CSV e BCF.** {{ui:CSV}} scrive i record elencati come foglio di calcolo; {{ui:BCF}} li scrive come argomenti BCF, ciascuno con un'istantanea della sua posizione sulla tavola. Entrambi seguono i filtri. Vedi [Esportare](topic:field-records#export).
- **Offline, e due copie diventano una.** I record sono salvati nel PDF e non richiedono rete, quindi un tablet in cantiere può aggiungerli, rispondere e salvarli. Tornati in ufficio, {{ui:Unisci}} unisce i record di un'altra copia dello stesso PDF tramite i loro id, come un unico passo di annullamento. Vedi [Salvataggio, offline e unione di copie](topic:field-records#save-offline-and-merging-copies).

### Assistenti IA

- **Più cose che un assistente può fare.** L'assistente collegato tramite CadCraft Studio può ora impostare lo stato di un'annotazione (`markup_status`, registrato nella sua discussione), rispondere in una discussione (`markup_reply`) ed esportare l'elenco {{ui:Annotazioni}} come CSV o BCF (`markups_export`, ciò che l'elenco mostra con i suoi filtri). Ogni modifica è un passo di annullamento, firmato con il nome dell'assistente. Vedi [Cosa può chiedere un assistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In ogni app

- **Unità.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} ha un elenco per lunghezza, area, volume, angolo e pendenza, con le dimensioni esatte date dalle definizioni delle unità (il piede dell'indagine statunitense è un'unità a sé). Disattivando le unità che non si usano mai, escono dagli elenchi; contrassegnandone una con la stellina, il nuovo lavoro parte da quella. Un file mantiene sempre la propria unità. In MarkupCraft, le unità di misura e di posizione in {{ui:Impostazioni}} › {{ui:MarkupCraft}} e l'unità della finestra di calibrazione seguono gli interruttori; la stellina imposta l'unità di misura finché non si salvano le impostazioni proprie di MarkupCraft; e la distanza reale digitata in calibrazione può avere la sigla di qualsiasi unità, come `3 yd` o `1.5 km`. Vedi [Unità, valori digitati ed elenchi di unità](common:unit-lists).
- **Un layout più denso e pannelli che si riordinano.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Densità della disposizione}} › {{ui:Compatta}} fa stare più cose sullo schermo (schermi touch e telefoni mantengono i pulsanti grandi). Ogni pannello laterale ha una sottile barra del titolo: trascinare la barra per ancorare o rendere mobile il pannello, rilasciarla sulla barra di un altro pannello per condividere una cornice come schede, fissarla per farla scorrere verso il bordo, oppure nascondere il pannello e richiamarlo dal bordo. Vedi [Disporre i pannelli](common:arrange-panels#make-the-layout-denser).
- **Le finestre di dialogo si spostano.** Trascinare una finestra di dialogo dalla sua barra del titolo per spostarla fuori dal disegno; tornerà dove era stata lasciata. Fare doppio clic sulla barra del titolo per centrarla di nuovo. Vedi [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).
- **Ricette per assistenti IA.** Dieci richieste svolte per un assistente collegato (riordinare un disegno, stampare un set, verificare i disegni, fare domande su un modello, totalizzare un computo, provare una variante di parte…), ognuna con gli strumenti che chiama e i permessi di cui ha bisogno, e ognuna riprodotta dai nostri test. Le app non contengono alcuna IA. Vedi [Ricette per assistenti IA](common:assistants-recipes).
- **Lingue.** **Português (Portugal)** è nuovo in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Lingua}}. **Italiano**, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** ora hanno tutte le parole delle app, come bozze non ancora riviste da un madrelingua. Gli argomenti della guida sono in inglese.
- **CadCraft Studio** indica perché un controllo di aggiornamento è fallito (nessun file per il sistema in uso, nessuna rete, una firma non valida) invece di limitarsi a "Fine", e smette di riproporre una scheda Novità chiusa finché non esce una versione più recente.

## Non ancora in questa versione

- **0.7 non è firmata digitalmente.** La firma e il pacchetto per Microsoft Store sono stati rinviati alla 0.8, perché la convalida del certificato non è ancora arrivata. Controllare il SHA-256 accanto a ogni file su getcadcraft.com/download. Su Windows, se SmartScreen blocca il programma di installazione, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su un Mac, la prima volta, fare clic destro su CadCraft Studio e scegliere {{ui:Apri}}. CadCraft Studio non è ancora in uno store di app, e non c'è ancora una versione per iPad o iPhone.
- Gli elenchi di angoli e pendenze in {{ui:Unità}} vengono salvati, ma nessun riquadro li legge ancora.
- I record di cantiere non vengono condivisi in una sessione Live di CadCraft Studio (le sessioni Live trasportano solo le annotazioni); portare insieme le copie con {{ui:Unisci}}.
- Unisci prende un record nel suo insieme dalla copia modificata per ultima: se due persone hanno modificato campi diversi dello stesso record, vincono i campi della copia più recente. Discussioni e nomi di allegati vengono uniti.
- Gli allegati sono solo nomi; i file restano dove sono. Non ci sono team, notifiche o progetti cloud per i record, e gli assistenti non hanno ancora strumenti per i record.
- I record di cantiere sono stati provati in un browser, a dimensioni da telefono e tablet, con la rete disconnessa, ma non ancora a mano su un tablet reale.
- Ancora dalla 0.6: far ruotare oggetti della pagina a qualsiasi angolo, disegnare nuove forme direttamente sulla pagina, cambiare il carattere o la dimensione di una linea, e il testo che scorre su più righe. Una copia salvata con modifiche alla pagina non è ancora stata aperta in Acrobat.
- Ancora dalla 0.5: annullare una modifica della pagina (come l'aggiunta di una pagina vuota), leggere il testo dalle tavole scansionate e le sessioni Live oltre la propria rete.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet).
