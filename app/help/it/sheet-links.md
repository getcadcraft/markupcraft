---
title: Collegamenti di tavola
summary: Fare in modo che un'annotazione porti a un'altra tavola, e collegare ogni callout di tavola come 3/A-501 alla sua tavola e vista in un solo passaggio con Collegamenti in batch.
keywords: collegamento ipertestuale, link, collegamenti, salto, callout di tavola, callout di dettaglio, callout di sezione, 3/A-501, vai alla tavola, indietro, collegamento automatico, collegamenti in batch, batch, titolo, numero di tavola, nome tavola, vista, dettaglio, rinomina, rinumera, addendum, collegamento pdf
from: 86a17c37
---

Un collegamento di tavola porta da un'annotazione a un'altra tavola del set: da una bolla di dettaglio al dettaglio, da una nota alla tavola a cui si riferisce.

## Collega un'annotazione a una tavola

1. Selezionare l'annotazione.
2. In {{ui:Proprietà}}, scegliere la tavola sotto {{ui:Collegamento a una tavola}}.

Compare una piccola freccia in alto a destra dell'annotazione. Per seguirla, tenere premuto {{key:Mod}} e cliccare l'annotazione, oppure selezionarla e scegliere {{ui:Vai a …}} in {{ui:Proprietà}}. {{key:Alt+Left}} torna alla tavola da cui si è partiti.

Un collegamento indica la tavola con il suo numero, quindi funziona anche dopo aver riaperto il set o sostituito una tavola con una nuova emissione: apre la tavola più recente con quel numero. Se quella tavola non è aperta, la barra di stato lo segnala.

## Collega tutti i callout di tavola in una volta

Scegliere {{ui:Pagine}} › {{ui:Collegamenti in batch…}}, oppure {{ui:Collega i richiami alle tavole…}} sotto {{ui:Trova testo}} in cima al pannello {{ui:Tavole}}.

1. **Controllare i numeri di tavola.** MarkupCraft elenca ogni tavola aperta con il numero e il nome letti dal cartiglio della tavola (o dall'etichetta di pagina), e indica da dove provengono. Correggere quelli sbagliati, e digitare un numero dove non ne ha trovati (un cartiglio il cui numero è stato stampato come linee non ha testo da leggere). Poi scegliere {{ui:Trova callout}}. Le correzioni sono un solo passo di annullamento e diventano le etichette di pagina nel PDF salvato.
2. **Rivedere l'elenco.** MarkupCraft legge il testo di ogni tavola alla ricerca di callout come "3/A-501", "5 / A501", "DETAIL 2 ON A-501", una bolla con "3" sopra "A-501", oppure un semplice "A-501" in una nota, e legge i titoli delle viste di ogni tavola (un numero di dettaglio con il numero di tavola sotto, oppure un numero grande con un titolo accanto). L'elenco ha tre parti:
   - {{ui:Verrà collegato}}: ogni callout, la tavola a cui va e la vista su quella tavola. Deselezionare quelli non voluti. Se la vista non è stata trovata (un callout alla vista 7 su una tavola con le viste da 1 a 6), scegliere la vista dall'elenco accanto, oppure lasciare {{ui:Intera tavola}}.
   - {{ui:Non collegato}}: numeri di tavola che nessuna tavola aperta ha, con quanti callout li citano. Scegliere la tavola che ciascuno intende (per esempio una tavola rinumerata), e ogni callout verso quel numero vi si collegherà. Oppure lasciarlo non collegato.
   - Quanti callout sono già collegati e puntano ancora al posto giusto. Restano come sono.
3. Scegliere {{ui:Crea i collegamenti}}.

Ogni callout riceve un riquadro blu sottile che è un collegamento di tavola. {{key:Mod}}+clic su di esso apre la tavola ingrandita sulla vista. Un solo {{key:Mod+Z}} li rimuove tutti.

I codici che sembrano solo numeri di tavola, come R-19 o W12X26, vengono esclusi: un callout deve avere la forma dei numeri di tavola del set. Il numero di una tavola, nel suo cartiglio e nei titoli delle sue viste, non è mai un callout. Le tavole scansionate non hanno testo da leggere: usare prima {{ui:Leggi il testo (OCR)…}}, oppure collegare i loro callout uno per uno.

## Eseguire di nuovo quando il set cambia

I Collegamenti in batch si possono eseguire tutte le volte che si vuole:

- **È stata aggiunta una tavola**, per esempio un addendum con A-601: aprire il suo file ed eseguire di nuovo i Collegamenti in batch. I callout verso A-601 che prima non erano collegati ora lo sono.
- **Una tavola è stata rinumerata**: correggerne il numero al passo 1. I collegamenti creati dai Collegamenti in batch che non trovano più la loro tavola compaiono sotto {{ui:Non collegato}}; scegliere la tavola una volta e tutti la seguono. I collegamenti passati a un'altra vista vengono aggiornati.
- I collegamenti creati a mano in {{ui:Proprietà}} non vengono mai modificati.

## Nel PDF salvato

Un collegamento a una tavola dello stesso PDF viene scritto anche come collegamento PDF, così anche gli altri visualizzatori saltano lì con un clic. Un collegamento con una vista apre quella vista nell'altro visualizzatore (il salto "fit rectangle" del PDF); uno senza vista apre l'intera tavola. I collegamenti a una tavola di un altro file del set funzionano solo in MarkupCraft.
