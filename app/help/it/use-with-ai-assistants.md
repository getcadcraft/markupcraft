---
title: Usare MarkupCraft con un assistente IA
summary: Consenti al proprio assistente IA o a uno script di elencare le annotazioni di un set, aggiungerne di semplici, impostarne lo stato, rispondere ed esportare l'elenco — permessi, collegamento tramite CadCraft Studio e registro attività.
keywords: ia, assistente, agente, mcp, Model Context Protocol, script, automazione, annotazioni, revisione, permessi, disconnetti, attività
from: 095f2977
---

## Cosa si imparerà

Come consentire a un assistente IA (o a uno script scritto da sé) di lavorare con MarkupCraft, e come decidere a cosa può accedere.

MarkupCraft **non ha una IA propria** e non invia nulla da nessuna parte. Si porta il proprio assistente: qualsiasi programma che parla il Model Context Protocol (MCP). MarkupCraft gli fornisce solo degli strumenti, e si scelgono quali.

## Attivarlo

1. Aprire {{ui:Impostazioni}} (l'ingranaggio nella barra dell'app, oppure {{key:Mod+,}}) e andare alla scheda {{ui:MarkupCraft}}.
2. Sotto {{ui:Assistenti}}, spuntare **Consenti ad assistenti IA e script di usare MarkupCraft**. È disattivato finché non lo si fa.
3. Scegliere cosa può fare: **Lettura** è spuntata all'inizio; spuntare **Modifica**, **Salva** o **Esporta** solo quando servono.

Gli strumenti fuori dai permessi spuntati non vengono offerti all'assistente; se lo chiede comunque, MarkupCraft lo rifiuta e lo annota nel registro attività. Disattivare l'interruttore chiude subito ogni collegamento; {{ui:Reimposta le impostazioni di MarkupCraft}} lo disattiva anche.

## Collegare l'assistente

Gli assistenti si collegano tramite **CadCraft Studio** sul computer: Studio avvia un piccolo server raggiungibile solo da questo computer, protetto da un token che genera ogni volta che si avvia. In Studio, scegliere {{ui:Collega un assistente}} e copiare l'indirizzo e il token nell'assistente (Studio mostra le impostazioni esatte da incollare). Non condividere mai il token.

:::note
Una scheda del browser non può aprire un collegamento per un assistente: nelle app browser l'interruttore non ha effetto finché non si usa CadCraft Studio sul computer.
:::

## Si resta al comando

- **Ogni modifica è un unico passo di annulla**, etichettato con il nome dell'assistente (per esempio "Assistente: add cloudrect"). {{key:Mod+Z}} ritira nel suo insieme l'ultima modifica dell'assistente.
- **Si sa quando ne è collegato uno.** Un pulsante nella barra dell'app indica il nome dell'assistente finché è collegato; fare clic per vedere cosa può fare, oppure per **Disconnetterlo**.
- **Attività.** {{ui:Impostazioni}} › {{ui:MarkupCraft}} › {{ui:Assistenti}} › {{ui:Attività}} elenca ogni chiamata: quando, quale strumento, eseguita o rifiutata. {{ui:Salva il registro}} ne conserva una copia.

## Cosa può chiedere un assistente

| Strumento | Permesso | Cosa fa |
|---|---|---|
| `app_info`, `sheets_list` | Lettura | I set aperti, le loro tavole e quante annotazioni ha ciascuna |
| `markups_list` | Lettura | Le annotazioni con tipo, tavola, testo, commento, misura, stato, autore e risposte, filtrate per tavola, stato, tipo o autore |
| `markup_add` | Modifica | Aggiunge su una tavola un rettangolo, una nuvola, un'ellisse, una casella di testo, una nota, una linea o una freccia |
| `markup_status`, `markup_reply` | Modifica | Imposta lo stato di un'annotazione (registrato nel suo filo, firmato dall'assistente); aggiunge un commento a un filo |
| `markups_export` | Esporta | Il CSV o il BCF dell'elenco {{ui:Annotazioni}}, con ciò che l'elenco mostra (con i filtri impostati); in Studio può scrivere il file in una cartella consentita |
| `tasks_list` | Lettura | Le annotazioni che sono attività: assegnatario (persona o assistente), giorno di scadenza, stato, collegamento, come si sono chiuse. `assignee: "assistant"` elenca il lavoro in attesa di un assistente |
| `task_set`, `task_clear` | Modifica | Rendono un'annotazione un'attività o la modificano (titolo, assegnatario, scadenza, stato, collegamento); tolgono l'attività |
| `tasks_check` | Modifica | Chiudono le attività la cui area di disegno collegata o il cui elemento del modello è davvero cambiato; passano gli stati degli elementi letti dall'altra app |
| `revisions_changes` | Lettura | L'elenco semplice di ciò che è cambiato tra due set di tavole aperti, da riformulare a proprio modo |
| `pins_list`, `decision_add` | Lettura, Modifica | Note vocali (durata, autore, quando, didascalia; mai il suono né una trascrizione) e decisioni; fissare una decisione e sostituirne una precedente |
| `redline_export`, `redline_answer` | Esporta, Modifica | Scrivono il file di redline per il disegnatore; applicano le risposte del disegnatore |

Un'annotazione aggiunta da un assistente indica come autore il nome che il programma dell'assistente si dà, seguito da "(assistente)", oppure da "(assistente per <nome>)" una volta impostato il proprio nome di revisore. Le sue modifiche di stato e le sue risposte sono firmate allo stesso modo. Ciascuna è un unico passo di annulla. Il salvataggio del PDF annotato resta a chi usa l'app: usare {{ui:Salva}} come di consueto.

Senza aprire MarkupCraft, il server MCP di CadCraft elenca le annotazioni di un PDF in una cartella indicata (`markups_list`), e `cadcraft info Set.pdf` le stampa sulla riga di comando.

## Se qualcosa non funziona

- **L'assistente non vede gli strumenti di MarkupCraft:** verificare che l'interruttore sia attivo in questa finestra, e che la finestra sia aperta in Studio.
- **"richiede il permesso di modifica":** spuntare **Modifica** sotto {{ui:Assistenti}}, poi chiedere di nuovo.
- **Errori "401" o "token":** il token è cambiato (Studio è stato riavviato, oppure {{ui:Nuovo token}}). Copiare il nuovo token nelle impostazioni dell'assistente.

## Vedi anche

- [Ricette per assistenti IA](common:assistants-recipes): esempi svolti, ciascuno con gli strumenti che chiama.
