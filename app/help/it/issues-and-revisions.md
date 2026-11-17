---
title: Emissioni, revisioni e registro delle modifiche dei disegni
summary: Mantenere una sola cronologia delle emissioni insieme al modello dell'architetto: leggere le emissioni, registrare istruzioni di cantiere, disegni di officina e modelli collegati rispetto a un'emissione, e leggere il registro delle modifiche dei disegni.
keywords: emissione, revisione, revisioni, registro modifiche, registro modifiche disegni, registro dei disegni, istruzione di cantiere, disegno di officina, modello collegato, gara d'appalto, costruzione, cronologia emissioni, nuvola di revisione, nuvola, set di annotazioni
from: e4688f64
---

## Cosa si fa

Lavorare sulla stessa cronologia delle emissioni del resto del team. Vedere quali tavole sono uscite con quale revisione, e registrare ciò che accade in cantiere rispetto all'emissione a cui appartiene.

## Passaggi

1. Aprire **Emissioni e revisioni**.
2. Scegliere **Leggi una cronologia delle emissioni** e selezionare il file `.issues.json` salvato da BimCraft o da un'altra app. Le sue emissioni e registrazioni vengono aggiunte alle proprie. Nulla viene sostituito.
3. Scegliere **Aggiungi una registrazione** per un'istruzione di cantiere, un disegno di officina, un set di annotazioni, un modello collegato o una nota. Scegliere l'emissione a cui si riferisce e il suo stato. Un file scelto viene registrato con nome, dimensione e SHA-256; il file resta dov'è.
4. **Registro modifiche disegni** mostra una riga per ogni tavola e una colonna per ogni emissione. Una revisione tra parentesi è stata emessa di nuovo senza modifiche.
5. **Scarica il registro modifiche (CSV)** salva le emissioni, la tabella delle tavole e le registrazioni. **Salva la cronologia delle emissioni** scrive un file che le altre app leggono.

## Da sapere

- **Registra le annotazioni selezionate** associa le annotazioni selezionate all'ultima emissione. Una nuvola viene registrata come nuvola di revisione alla revisione di quell'emissione. Scegliere **Mostra** accanto alla registrazione per passare ad essa.
- **Registra un'emissione** emette le tavole annotate. **Modifiche successive** indica poi quali tavole sono state annotate dopo quell'emissione.
- La cronologia viene salvata dentro il PDF annotato. Non fa parte di Annulla.
- Leggere due volte lo stesso file non aggiunge nulla due volte. Quando due copie contengono la stessa registrazione, viene mantenuta la più recente.
