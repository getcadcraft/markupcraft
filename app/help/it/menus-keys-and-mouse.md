---
title: Menu, tasti e mouse
summary: Scegliere la barra degli strumenti propria di MarkupCraft, una barra dei menu per la revisione PDF o una barra multifunzione, assegnare a ogni strumento un tasto proprio, spostare gli strumenti tra i menu e impostare cosa fanno la rotella e i pulsanti del mouse.
keywords: stile dei menu, menu, barra dei menu, barra degli strumenti, barra multifunzione, schede, revisione pdf, scorciatoie da tastiera, tasti di scelta rapida, tasti, personalizza, riassegna, mouse, rotella, inverti, direzione dello zoom, pulsante centrale, pulsante destro, pan, esporta, importa, passaggio, familiare
from: 081438a6
---

Gli strumenti di MarkupCraft sono gli stessi qualunque sia il modo in cui vi si arriva. Uno **stile di menu** decide solo dove si trovano sullo schermo, come si chiamano e quali tasti li scelgono. Sceglierlo in {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menu, tasti e mouse}}; il cambiamento è immediato, e questo browser lo ricorda.

## I tre stili

| Stile | Cosa si ottiene |
|---|---|
| {{ui:MarkupCraft}} | La barra degli strumenti propria di MarkupCraft (File, Seleziona, Disegna, Revisiona, Annota, Misura, Modifica) e i suoi tasti a una lettera: {{key:V}} seleziona, {{key:H}} pan, {{key:P}} penna, {{key:I}} evidenziatore, {{key:L}} linea, {{key:A}} freccia, {{key:R}} rettangolo, {{key:E}} ellisse, {{key:C}} nuvola, {{key:K}} callout, {{key:T}} testo, {{key:N}} nota, {{key:S}} timbro, {{key:M}} lunghezza, {{key:Q}} area, {{key:U}} conteggio. Lo stile di partenza. |
| {{ui:Revisione PDF}} | Una barra dei menu ({{ui:File}}, {{ui:Modifica}}, {{ui:Vista}}, {{ui:Documento}}, {{ui:Annotazione}}, {{ui:Misura}}, {{ui:Revisione}}, {{ui:Finestra}}) sopra una fila di strumenti di revisione, con tasti impostati come li impostano i programmi di revisione PDF: {{key:V}} seleziona, {{key:Shift+V}} pan, {{key:H}} evidenziatore, {{key:Q}} callout, {{key:N}} poligono, {{key:Shift+N}} polilinea, {{key:Shift+T}} nota, {{key:Shift+A}} arco, e le misure su {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibra, {{key:Alt+Shift+L}} lunghezza, {{key:Alt+Shift+G}} angolo, {{key:Alt+Shift+A}} area, {{key:Alt+Shift+C}} conteggio. {{key:Alt+L}} apre l'elenco delle annotazioni. Il pulsante centrale fa pan; un clic destro no. |
| {{ui:Barra multifunzione}} | Schede che prendono il nome dal lavoro: {{ui:Annota}} (selezione, disegno, nuvole, callout, testo, note, timbri), {{ui:Misura}}, {{ui:Modifica}}, {{ui:Revisione}} (l'elenco delle annotazioni e le sue esportazioni, le segnalazioni BCF, la punch list, i registri di campagna, la cassetta degli strumenti, confronta), {{ui:Pagine}} e {{ui:Vista}}, con {{ui:File}} e pulsanti rapidi per apri, salva, annulla e ripristina. Gli strumenti mantengono i tasti a una lettera propri di MarkupCraft. Un pulsante per un pannello non aperto apre prima quel pannello. |

Ogni stile mantiene i tasti {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} per adattare alla pagina e {{key:Mod+9}} per adattare alla larghezza; {{key:PageUp}} e {{key:PageDown}} cambiano tavola.

:::tip
Un tasto che appartiene al layout proprio di MarkupCraft ma non allo stile scelto non fa nulla, e la barra di stato indica dove è finito il suo strumento ("In Revisione PDF, Callout è Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e le frecce mantengono sempre il loro significato. Mentre si scrive in una casella di testo, callout o nota, ogni tasto appartiene al testo, e i numeri digitati mentre si disegna aprono ancora la casella di lunghezza.
:::

## Personalizzare

1. Scegliere lo stile più vicino a ciò che si desidera, poi fare clic su {{ui:Personalizza…}}.
2. In {{ui:Tasti e menu}}, trovare uno strumento (la casella di ricerca aiuta). Scegliere {{ui:Aggiungi un tasto}} e premere il tasto, oppure due tasti di seguito per un tasto a due lettere. Fare clic su un tasto per rimuoverlo.
3. Con la barra dei menu, {{ui:Dove si trova}} sposta lo strumento in un altro menu, oppure in {{ui:Solo tasti}}.
4. In {{ui:Mouse}}, impostare la rotella e i pulsanti che fanno pan sulla tavola.
5. Dare un nome e fare clic su {{ui:Salva}}.

Salvare uno stile integrato crea una copia propria ("La mia Revisione PDF"); quello integrato non cambia mai. Un tasto assegnato a due strumenti appare in rosso e deve essere corretto prima di poter salvare.

## Mouse

- **Rotella del mouse**: {{ui:Scorrere in avanti ingrandisce}} (l'impostazione iniziale) oppure {{ui:Scorrere in avanti riduce}}, e quanto velocemente. Il pizzico del trackpad fa sempre zoom nel modo in cui si muovono le dita.
- **Pan della tavola con**: il pulsante centrale, il pulsante destro, o entrambi. {{key:Space}} e trascinare, e lo strumento {{ui:Pan}}, fanno sempre pan; il pulsante sinistro altrimenti disegna e seleziona, quindi spuntarlo non cambia nulla qui.
- MarkupCraft non ha una vista 3D, quindi i pulsanti 3D non fanno nulla qui.

## Portarlo con sé

{{ui:Esporta}} salva lo stile in uso come piccolo file `.ccinput.json`; {{ui:Importa…}} ne aggiunge uno, da un altro computer o da un collega. Un file importato può puntare solo agli strumenti propri di MarkupCraft: tutto il resto viene escluso e conteggiato nella barra di stato. {{ui:Elimina questo stile}} rimuove uno dei propri.

:::note
Queste impostazioni restano in questo browser. {{ui:Usa questo stile in ogni app}} sotto i riquadri degli stili fa aprire ogni app nello stile corrispondente: {{ui:Revisione PDF}} va con gli stili a barra dei menu delle altre app, {{ui:Barra multifunzione}} con le loro barre, la barra degli strumenti propria di MarkupCraft con le loro. Un'app senza uno stile corrispondente mantiene il proprio.
:::

:::tip
Le disposizioni dell'area di lavoro in {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Layout}} ({{ui:Barra multifunzione e browser di progetto}}, {{ui:Casella degli strumenti e riquadro informazioni}}) costruiscono la loro barra multifunzione con le schede dello stile {{ui:Barra multifunzione}}, e la loro casella degli strumenti con la barra degli strumenti propria di MarkupCraft, così ogni strumento funziona allo stesso modo in esse.
:::

Argomenti correlati: [Tastiera e mouse](topic:keyboard) · [Impostazioni di MarkupCraft](topic:settings) · [Provenire da altro software di annotazione](topic:coming-from)
