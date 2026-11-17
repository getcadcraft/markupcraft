---
title: Layer delle annotazioni
summary: Mettere le annotazioni su layer con nome, poi mostrare, nascondere o bloccare ogni layer; anche altri visualizzatori PDF possono attivarli.
keywords: layer, livello, nascondi, mostra, blocca, raggruppa annotazioni, disciplina, meccanica, elettrica, contenuto opzionale, ocg, visibilità
from: 0fbb4c26
---

I layer raggruppano le annotazioni, per esempio per disciplina o per revisore. Nascondere un layer per vedere il disegno sottostante, oppure bloccarlo perché le sue annotazioni non vengano spostate per sbaglio.

## Creare un layer e disegnare su di esso

1. Aprire {{ui:Layer}}, in cima al pannello {{ui:Tavole}}.
2. Scegliere {{ui:Nuovo layer…}}, digitare un nome come `Mechanical`, e scegliere {{ui:Aggiungi layer}}.
3. Il nuovo layer diventa il layer corrente: ogni annotazione disegnata da quel momento va su di esso. Scegliere il nome di un altro layer, oppure {{ui:Nessun layer}}, per cambiare dove vanno le nuove annotazioni.

Per spostare un'annotazione su un altro layer, selezionarla e scegliere il layer sotto {{ui:Layer}} in {{ui:Proprietà}}. {{ui:Nuovo layer…}} in fondo a quell'elenco ne crea uno al volo. Lo spostamento si annulla con {{key:Mod+Z}}.

## Mostrare, nascondere e bloccare

La riga di ogni layer ha due pulsanti:

- L'**occhio** mostra o nasconde il layer. Le annotazioni nascoste non vengono disegnate e non si possono selezionare; continuano però a contare nell'elenco {{ui:Annotazioni}}.
- Il **lucchetto** mantiene le annotazioni del layer sulla tavola, ma impedisce di selezionarle, spostarle o eliminarle.

Il pulsante a matita rinomina un layer e porta con sé le sue annotazioni. Per vedere le annotazioni di un solo layer, filtrare l'elenco {{ui:Annotazioni}} per {{ui:Layer}}.

## Nel PDF salvato

Ogni layer diventa un layer PDF (contenuto opzionale). Gli altri visualizzatori PDF elencano i layer nel loro pannello dei layer e possono attivarli; un layer nascosto risulta nascosto anche lì. I layer che il disegno aveva già, come i layer CAD, restano come erano. Riaprendo la copia in MarkupCraft, le annotazioni tornano sui loro layer, nascoste e bloccate come erano state lasciate.

## Da sapere

- Nascondere e bloccare non sono modifiche: non si annullano con {{key:Mod+Z}}, ma vengono salvati nel PDF.
- Copiare e incollare mantiene il layer di un'annotazione.
- Una copia appiattita disegna ogni annotazione nella pagina, qualunque sia il suo layer. Consultare [Salvare una copia appiattita](topic:flatten).
