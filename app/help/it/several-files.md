---
title: Lavorare con più file insieme
summary: Aprire molti PDF come un unico set, trovare tavole tra i file, copiare annotazioni tra loro e salvare la copia di ogni file.
keywords: più file, più pdf, set di tavole, set, batch, molti file, combinare, discipline, architettonico, strutturale, meccanico, salva tutto, chiudi
from: f59354ae
---

Un set di tavole arriva spesso come un PDF per disciplina, oppure un PDF per tavola. MarkupCraft tratta tutto ciò che si apre come **un unico set**.

## Aprirli insieme

Selezionare tutti i PDF nel selettore dei file in una volta, oppure trascinarli tutti nell'area delle tavole. Per aggiungerne altri più tardi, aprirli nello stesso modo: si aggiungono in fondo all'elenco {{ui:Tavole}}, nell'ordine in cui vengono aperti.

Risultato: "Aperti 6 file (84 tavole nel set)." Ogni pagina è una tavola. Le tavole con un numero mostrano "Tavola A-101" sotto il nome; le altre mostrano il file e la pagina.

Non esiste un file "set" salvato: la volta successiva, riaprire gli stessi PDF (le copie "(marked up)", se si sono salvate).

## Su tutto il set

- **Trovare una tavola:** {{ui:Cerca tavole}} cerca nei numeri di tavola, nei nomi delle tavole e nei nomi dei file di ogni file. {{key:PageUp}} e {{key:PageDown}} scorrono tutte le tavole di tutti i file, in ordine.
- **Elenco delle annotazioni:** la scheda {{ui:Annotazioni}} elenca le annotazioni di ogni file. Filtrare per {{ui:Tavola}} per restringerlo. Il CSV ha una colonna File.
- **Elenco punti da completare:** una sola numerazione per tutto il set.
- **Confronto:** la vecchia e la nuova tavola possono provenire da file diversi.
- **Copia e incolla:** {{key:Mod+C}} su una tavola e {{key:Mod+V}} su un'altra, in qualsiasi file. La copia finisce nello stesso punto della pagina, leggermente spostata.

## Salva

Scegliere {{ui:Salva}}. Con più di un file aperto, MarkupCraft chiede:

- {{ui:Questo file}}: una copia con annotazioni del file della tavola su cui si è.
- {{ui:Ogni file modificato}}: una copia di ogni file con modifiche non salvate. Ognuna viene scaricata separatamente, come "<nome file> (marked up).pdf".
- {{ui:Annulla}}

:::chromium
La prima volta che si salvano più file insieme, Chrome e Edge possono chiedere se questo sito può scaricare più file. Scegliere {{ui:Consenti}}; altrimenti arriva solo la prima copia.
:::

:::safari
Safari può chiedere una volta per ogni file. Su un iPad ogni copia va nell'app File.
:::

Un file le cui annotazioni sono state salvate smette di risultare modificato; gli altri lo restano.

Le esportazioni CSV, BCF ed elenco punti da completare prendono il nome del **primo** file aperto.

## Chiudi

{{ui:Chiudi}} chiude l'intero set; non esiste ancora un modo per chiudere un solo file. Se c'è qualcosa non salvato, chiede:

- {{ui:Annulla}}: non succede nulla.
- {{ui:Chiudi senza salvare}}: le annotazioni non salvate vanno perse.
- {{ui:Salva prima le copie}}: salva ogni file modificato, poi chiude.

Chiudere cancella anche la cronologia di annullamento.

## Set grandi

- Il testo di ogni pagina viene letto all'apertura per trovare i numeri di tavola, quindi un set di 100 tavole richiede un po' di tempo. La barra di stato conta le tavole man mano.
- Le immagini delle tavole nell'elenco vengono disegnate man mano che si scorre fino a loro.
- Ogni PDF aperto è mantenuto nella memoria della scheda del browser. Se la scheda rallenta, chiudere altre schede pesanti, oppure esaminare una disciplina alla volta.
- Aprire due volte lo stesso file dà due copie delle sue tavole. Se succede, scegliere {{ui:Chiudi}} e riaprire il set.
