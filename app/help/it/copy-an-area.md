---
title: Copiare un'area della pagina, o una sovrapposizione
summary: Copiare una parte di una tavola con un rettangolo, un'ellisse o una forma a mano libera e incollarla in un'altra tavola, CadCraft, BimCraft, DetailCraft o qualsiasi programma, alla sua dimensione; copiarla come sovrapposizione trasparente, e allineare un'immagine con due punti.
keywords: copia area, area, ritaglia, istantanea, appunti, regione, rettangolo, ellisse, cerchio, mano libera, lazo, immagine, png, sovrapposizione, trasparente, tinta, opacità, incolla, grandezza reale, scala, allinea, due punti, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Scegliere {{ui:Altro}} › {{ui:Copia un'area della pagina…}}. Si apre una barra sopra la tavola.

## Scegliere l'area

Scegliere {{ui:Rettangolo}}, {{ui:Ellisse}} o {{ui:A mano libera}} nella barra, poi trascinare sulla tavola:

- **Rettangolo:** trascinare un riquadro intorno alla parte da copiare.
- **Ellisse:** trascinare un riquadro; viene copiata l'ellisse dentro di esso e gli angoli fuori dall'ellisse sono trasparenti.
- **A mano libera:** disegnare intorno alla parte da copiare; la forma si chiude da sola. Fuori da essa è trasparente.

Trascinare di nuovo per ricominciare, oppure premere {{key:Esc}}.

## Copiare

- {{ui:Includi annotazioni}} copia le annotazioni insieme alla pagina; deselezionarla per il disegno pulito.
- {{ui:Risoluzione}}: {{ui:Come sullo schermo}}, 72, 150 o 300 dpi. L'immagine resta sotto 3 MB; quando un'area grande a una risoluzione alta lo supererebbe, la risoluzione viene abbassata e la riga di stato dice a quale valore.
- {{ui:Copia}} (oppure {{key:Mod+C}} o {{key:Enter}}) mette l'area negli appunti come immagine PNG, che si incolla in Word, nelle email, in altri programmi PDF e nei programmi di disegno.
- {{ui:Salva come PNG}} scarica invece l'immagine, per un programma che elimina le parti trasparenti all'incollamento.

## Copiare come sovrapposizione

{{ui:Copia come sovrapposizione}} rende trasparente anche la carta bianca, così restano solo le linee. {{ui:Colore}} dà a ogni linea un colore (rosso, blu, verde, arancione o viola) perché la sovrapposizione risalti sul disegno sottostante; {{ui:Colori originali}} li mantiene. {{ui:Intensità}} è la forza iniziale quando viene incollata nelle nostre app (50% salvo modifica).

## Incollarla

**In MarkupCraft**, {{key:Mod+V}} su qualsiasi tavola incolla l'area come annotazione immagine nel punto del puntatore. Entra alla sua dimensione:

- su carta, la stessa dimensione che aveva sulla tavola di provenienza;
- quando entrambe le tavole hanno una scala, la stessa dimensione nel disegno: un'area da una tavola 1:50 entra a metà della sua dimensione su carta su una tavola 1:100.

Una sovrapposizione parte con la sua intensità; cambiarla con {{ui:Opacità}} in {{ui:Proprietà}}. Spostare, ridimensionare, bloccare ed eliminare come una qualsiasi immagine, e spuntare {{ui:Appiattisci nella pagina al salvataggio}} per disegnarla nella pagina.

**In CadCraft, BimCraft e DetailCraft** la copia conosce anche la propria dimensione, quindi l'incollamento entra alla dimensione reale del disegno quando la tavola aveva una scala, oppure ne chiede una quando non l'aveva. Vedere la guida di ciascuna app sulle immagini.

## Allineare un'immagine con due punti

Selezionare una sola immagine o sovrapposizione, poi scegliere {{ui:Altro}} › {{ui:Allinea un'immagine con due punti}}:

1. Fare clic su un punto dell'immagine.
2. Fare clic dove quel punto deve andare.
3. Fare clic su un secondo punto dell'immagine, lontano dal primo.
4. Fare clic dove quel punto deve andare.

L'immagine viene scalata, spostata e ruotata perché entrambi i punti finiscano dove si è fatto clic. {{key:Esc}} si ferma; {{key:Mod+Z}} lo annulla in un solo passo.

## Da sapere

- La dimensione viaggia con la copia solo tra le nostre app sullo stesso sito, e solo per una copia fatta nelle ultime ore; un altro programma riceve una semplice immagine.
- Se il browser non consente a MarkupCraft di usare gli appunti di sistema, la riga di stato lo dice: incollare nelle nostre app funziona comunque, e {{ui:Salva come PNG}} funziona per gli altri programmi.
- Allineare ruota l'immagine ridisegnandone i pixel, quindi un'immagine ruotata è leggermente più sfocata dell'originale.
