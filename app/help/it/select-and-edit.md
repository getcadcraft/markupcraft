---
title: Seleziona, sposta e modifica le annotazioni
summary: Scegliere le annotazioni con un clic o con una finestra, spostare, ridimensionare, spostare di poco, tagliare, copiare, incollare, incollare nella stessa posizione, duplicare, eliminare e annullare.
keywords: seleziona, selezione, seleziona tutto, deseleziona tutto, finestra, intersezione, sposta, ridimensiona, grip, maniglie, spostamento fine, taglia, copia, incolla, incolla nella stessa posizione, duplica, appunti, altra scheda, elimina, annulla, ripristina, modifica
from: 62c7def3
---

Scegliere {{ui:Seleziona}} ({{key:V}}) per primo. Anche {{key:Esc}} porta lì: la prima pressione cancella la selezione, la successiva torna a {{ui:Seleziona}}.

## Seleziona annotazioni

:::mouse
- **Un'annotazione:** cliccarla. Compaiono un riquadro tratteggiato e le maniglie, e {{ui:Proprietà}} la mostra.
- **Aggiungere o rimuovere una:** tenere premuto {{key:Shift}} e cliccare.
- **Completamente dentro una finestra:** trascinare da sinistra a destra su una parte vuota della tavola. Vengono scelte solo le annotazioni interamente dentro il riquadro (contorno continuo).
- **Che toccano una finestra:** trascinare da destra a sinistra. Viene scelto tutto ciò che il riquadro tocca (contorno verde tratteggiato).
- **Tutto su questa tavola:** {{key:Mod+A}}, oppure {{ui:Altro}} e poi {{ui:Seleziona tutto}} nel gruppo {{ui:Modifica}} della barra degli strumenti.
- **Niente:** cliccare un punto vuoto, premere {{key:Esc}}, oppure {{ui:Altro}} e poi {{ui:Deseleziona tutto}}.
:::

:::touch
- **Un'annotazione:** toccarla.
- **Più di una:** trascinare un dito su una parte vuota della tavola per disegnare una finestra. Da sinistra a destra sceglie ciò che è completamente dentro; da destra a sinistra sceglie ciò che tocca.
- Toccare con {{key:Shift}} tenuto premuto funziona solo con una tastiera collegata. Senza tastiera, usare una finestra.
- Un dito non sposta mai la vista in {{ui:Seleziona}}; usare due dita, oppure lo strumento {{ui:Pan}}.
:::

Le annotazioni in sola lettura arrivate con il file mostrano un riquadro grigio tratteggiato e nessuna maniglia. Si possono selezionare e a cui rispondere, ma non modificare.

## Sposta e ridimensiona

- **Spostare:** trascinare un'annotazione selezionata. Tenere premuto {{key:Shift}} per spostare solo lungo multipli di 45°. Più annotazioni selezionate si spostano insieme.
- **Ridimensionare:** con una annotazione selezionata, trascinare una maniglia. Le maniglie quadrate ridimensionano il riquadro (tenere premuto {{key:Shift}} per mantenerne le proporzioni); le maniglie tonde spostano un punto d'angolo di una linea, polilinea, poligono, nuvola o misura (tenere premuto {{key:Shift}} per 45°); le maniglie a rombo spostano la punta e la piega di un callout. I tratti di penna si scalano dal loro riquadro.
- **Spostamento fine:** premere i tasti freccia per spostare la selezione di un pixel dello schermo; tenere premuto {{key:Shift}} per dieci pixel. Ogni pressione è un solo passo da annullare.

## Cambia testo o aspetto

- **Testo, callout e note:** fare doppio clic sull'annotazione, oppure premere {{key:Enter}}, oppure scegliere {{ui:Modifica sulla tavola}} in {{ui:Proprietà}}. Scrivere, poi cliccare fuori oppure premere {{key:Mod+Enter}}. {{key:Esc}} annulla la modifica.
- **Timbri:** scegliere un altro timbro in {{ui:Proprietà}} (il doppio clic apre {{ui:Proprietà}}).
- **Stile:** {{ui:Colore}}, {{ui:Spessore di linea}}, {{ui:Riempimento}}, {{ui:Opacità}} e {{ui:Dimensione del testo}} sotto "Stile" in {{ui:Proprietà}}. Con più elementi selezionati, {{ui:Proprietà}} mostra i tipi scelti e li cambia tutti insieme.

## Copia, incolla e duplica

Il gruppo {{ui:Modifica}} della barra degli strumenti ha {{ui:Copia}} e {{ui:Incolla}}; il suo menu {{ui:Altro}} ha tutti questi comandi, ciascuno con il proprio tasto.

| Comando | Tasto | Cosa fa |
|---|---|---|
| {{ui:Taglia}} | {{key:Mod+X}} | Copia le annotazioni selezionate e le elimina |
| {{ui:Copia}} | {{key:Mod+C}} | Copia le annotazioni selezionate |
| {{ui:Incolla}} | {{key:Mod+V}} | Mette una copia sulla tavola su cui si è (dove, vedi sotto) |
| {{ui:Incolla nella stessa posizione}} | {{key:Mod+Shift+V}} | Mette la copia esattamente dove era stata copiata: sulla stessa tavola, sopra l'originale; su un'altra tavola, nello stesso punto della carta |
| {{ui:Duplica}} | {{key:Mod+D}} | Crea una copia della selezione un po' più in basso e a destra, senza toccare ciò che era stato copiato prima |

**Dove Incolla mette la copia:**

- {{key:Mod+V}} con il puntatore sulla tavola mette la copia centrata dove si trova il puntatore. Spostare il puntatore e premere di nuovo {{key:Mod+V}} per piazzarne un'altra.
- Il pulsante {{ui:Incolla}} (con il puntatore sulla barra degli strumenti), oppure {{key:Mod+V}} con il puntatore fuori dalla tavola, la mette un po' più in basso e a destra dell'originale. Ogni incolla della stessa copia si sposta un po' oltre, così le copie non si nascondono l'una con l'altra. Su un'altra tavola il primo incolla finisce dove si trovava l'originale sulla sua tavola. Se quel punto è fuori vista, la copia finisce al centro della vista.
- Per fare in modo che {{key:Mod+V}} incolli sempre accanto all'originale, scegliere {{ui:Accanto alla copia}} sotto {{ui:Incolla}} nelle [impostazioni di MarkupCraft](topic:settings).

Le annotazioni incollate sono selezionate, quindi si possono trascinare subito. Ogni taglio, incolla o duplicazione è un solo passo di annullamento: {{key:Mod+Z}} rimuove tutto l'incolla.

Le copie incollate sono nuove annotazioni: ricevono il proprio nome, la data di oggi, lo stato Aperto, nessun numero dell'elenco punti e una discussione vuota. Tipo, forma, stile, testo e commento vengono mantenuti. Le annotazioni in sola lettura arrivate con il file non si possono copiare né tagliare.

**Tra schede:** ciò che si copia viene conservato anche in questo browser, così un'altra scheda di MarkupCraft nello stesso browser può incollarlo. Copiare annotazioni non usa gli appunti del computer: non si possono incollare in altri programmi, e il testo copiato altrove non si incolla come annotazione.

**Menu del tasto destro:** fare clic destro su un'annotazione (o sulla carta vuota) per {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla qui}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Salva la selezione come timbro…}}, {{ui:Appiattisci nella pagina al salvataggio}}, {{ui:Inserisci un'immagine qui…}} e {{ui:Seleziona tutto}}. Fare clic destro su un'annotazione non selezionata la seleziona prima. Trascinare con il tasto destro sposta ancora la vista. Su uno schermo touch, una pressione prolungata su un'annotazione apre lo stesso menu (sul testo avvia la modifica del testo). Il tasto menu o {{key:Shift+F10}} lo apre sulla selezione.

Anche il contenuto della pagina selezionato con lo strumento {{ui:Contenuto}} si copia e si incolla: vedi [Modifica linee, immagini e testo della pagina](topic:page-content).

Per copiare una parte della pagina come immagine (un rettangolo, un'ellisse o una forma libera), oppure come sovrapposizione trasparente per un'altra tavola o app, vedi [Copia un'area della pagina, o una sovrapposizione](topic:copy-an-area).

## Elimina

Premere {{key:Delete}} o {{key:Backspace}}, scegliere {{ui:Altro}} e poi {{ui:Elimina}} nella barra degli strumenti, oppure {{ui:Elimina}} in {{ui:Proprietà}}. La barra di stato dice quante ne sono state eliminate. I commenti in sola lettura del file non vengono mai eliminati ("mantenuto come nel file").

## Annulla e ripristina

- {{key:Mod+Z}} annulla, {{key:Mod+Y}} oppure {{key:Mod+Shift+Z}} ripristina. La barra degli strumenti ha {{ui:Annulla}} e {{ui:Ripristina}}.
- La barra di stato dice cosa è stato annullato ("Annullato: sposta annotazione.").
- L'annullamento copre ogni modifica alle annotazioni, agli stati, alle risposte, alle voci dell'elenco punti, alle scale delle tavole e ai nomi delle tavole, fino a 500 passi.
- La cronologia viene cancellata quando si chiude il set.

## Copia le annotazioni su altre tavole

Per mettere lo stesso timbro, la stessa nota o la stessa nuvola su più tavole, selezionarlo (o più annotazioni) e scegliere {{ui:Copia su altre tavole…}} in {{ui:Proprietà}}. Spuntare le tavole, oppure {{ui:Tutte le tavole}}, e scegliere {{ui:Copia}}. Ogni tavola riceve una copia nella stessa posizione sulla pagina, firmata con il proprio nome. Un solo {{key:Mod+Z}} le rimuove tutte.
