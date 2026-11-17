---
title: Ogni tipo di annotazione
summary: I diciassette tipi di annotazione, i loro tasti, come si disegna ciascuno, il suo aspetto predefinito e cosa diventa nel PDF salvato.
keywords: tipi di annotazione, elenco degli strumenti, tipi di annotazione, nuvola, callout, testo, nota, timbro, penna, evidenziatore, linea, freccia, rettangolo, ellisse, polilinea, poligono, lunghezza, area, conteggio
from: 29bf32e7
---

## Gli strumenti

| Barra degli strumenti | Tasto | Come disegnare | Aspetto predefinito | Nel PDF salvato |
|---|---|---|---|---|
| {{ui:Penna}} | {{key:P}} | Trascinare | Rosso, 1.5 pt | Inchiostro |
| {{ui:Evidenzia}} | {{key:I}} | Trascinare | Giallo, 14 pt di larghezza, trasparente, colora ciò che sta sotto | Inchiostro (contrassegnato come tratto di evidenziatore) |
| {{ui:Linea}} | {{key:L}} | Trascinare, oppure fare clic su inizio e fine | Rosso, 2 pt | Linea |
| {{ui:Freccia}} | {{key:A}} | Trascinare, oppure fare clic su inizio e fine | Rosso, 2 pt, punta chiusa all'estremità | Linea con punta di freccia |
| {{ui:Arco}} | {{key:O}} | Fare clic sull'inizio, su un punto dell'arco, poi sulla fine | Rosso, 2 pt | Polilinea lungo l'arco |
| {{ui:Rettangolo}} | {{key:R}} | Trascinare un riquadro | Rosso, 2 pt, senza riempimento | Quadrato |
| {{ui:Ellisse}} | {{key:E}} | Trascinare un riquadro | Rosso, 2 pt, senza riempimento | Cerchio |
| {{ui:Polilinea}} | {{key:Y}} | Fare clic sui punti, doppio clic per terminare | Rosso, 2 pt | Polilinea |
| {{ui:Poligono}} | {{key:G}} | Fare clic sui punti, doppio clic per terminare | Rosso, 2 pt, senza riempimento | Poligono |
| {{ui:Nuvola}} | {{key:C}} | Trascinare un riquadro | Rosso, festoni 1.5 pt | Quadrato con bordo a nuvola |
| {{ui:Nuvola libera}} | {{key:Shift+C}} | Fare clic sui punti, doppio clic per terminare | Rosso, festoni 1.5 pt | Poligono con bordo a nuvola |
| {{ui:Callout}} | {{key:K}} | Premere sul punto, trascinare fino al testo, digitare | Testo e linea di richiamo rossi, 1 pt, testo 12 pt | Casella di testo con linea di richiamo del callout |
| {{ui:Testo}} | {{key:T}} | Fare clic o trascinare un riquadro, digitare | Testo rosso 12 pt, senza bordo | Casella di testo |
| {{ui:Nota}} | {{key:N}} | Fare clic, digitare | Icona nota gialla | Nota adesiva |
| {{ui:Timbro}} | {{key:S}} | Scegliere un timbro, fare clic o trascinare | Maiuscole incorniciate più "Da <nome>, <data>"; colorato secondo il significato | Timbro |
| {{ui:Lunghezza}} | {{key:M}} | Fare clic su inizio e fine (richiede una scala) | Linea di quota blu con tacche e la lunghezza | Linea contrassegnata come quota, con una misura |
| {{ui:Angolo}} | {{key:X}} | Fare clic sull'estremità di un braccio, sull'angolo, poi sull'estremità dell'altro braccio | Bracci blu, un piccolo arco nell'angolo e l'angolo in gradi | Polilinea con l'angolo come testo |
| {{ui:Area}} | {{key:Q}} | Fare clic sugli angoli, doppio clic per terminare (richiede una scala) | Contorno blu, riempimento azzurro, area e perimetro | Poligono contrassegnato come area, con una misura |
| {{ui:Conteggio}} | {{key:U}} | Fare clic su ogni elemento | Punti arancioni numerati e un'etichetta "gruppo: n" | Un commento a penna per gruppo, un anello per elemento |

Su touch, "doppio clic per terminare" è un doppio tocco, e "clic" è un tocco che agisce al sollevamento (per punti, note e conteggi).

## Ciò che ogni annotazione contiene

| Campo | Dove si vede |
|---|---|
| Autore | {{ui:Proprietà}}, l'elenco, la seconda riga del timbro, altri visualizzatori PDF |
| Creato e modificato | {{ui:Proprietà}} (fuso orario locale), l'elenco, il CSV |
| Stato | Aperto, Accettato, Rifiutato o Completato |
| Oggetto | Un'etichetta breve; per impostazione predefinita è il tipo ("Nuvola", "Casella di testo", "Misura di lunghezza") |
| Commento | Note più lunghe. Per una nota, il suo testo è il commento. |
| Testo | Solo caselle di testo e callout |
| Risposte | La discussione, con i cambi di stato |
| Voce di punch | Numero, assegnatario, scadenza, stato della voce, quando aggiunta alla punch list |
| Stile | Colore, spessore di linea, riempimento e opacità del riempimento (forme chiuse, testo e callout), opacità, dimensione del testo (testo, callout e misure) |

## Commenti di sola lettura

I commenti che arrivano con il file e che MarkupCraft non può modificare (evidenziazioni di testo, timbri di altri programmi e altri tipi speciali) sono elencati con il tipo "Altro" e con lo stato "Sola lettura". Mantengono esattamente l'aspetto che dà loro il file. Si possono selezionare, vedere autore, oggetto e commento, e rispondere.

## Non ancora implementato

Gli allegati di file non sono ancora implementati. Ogni annotazione può collegarsi a una tavola; consultare [Collegamenti alle tavole](topic:sheet-links). Immagini e firme si inseriscono con lo strumento {{ui:Timbro}}; consultare [Timbri e note](topic:stamps-and-notes). Consultare [Cosa non è ancora implementato](topic:not-built-yet).
