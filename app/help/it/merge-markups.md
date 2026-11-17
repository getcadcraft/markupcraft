---
title: Unire le modifiche di due persone a un PDF
summary: Lasciare che git, Fossil o Mercurial uniscano due copie annotate dello stesso PDF, annotazione per annotazione, note comprese.
keywords: unione, merge, git, fossil, mercurial, controllo di versione, conflitto, tre vie, cadcraft merge, gitattributes, annotazioni, note, team, due copie
from: a450a9ef
---

Due persone annotano lo stesso PDF in due copie. Se hanno toccato annotazioni diverse, le copie possono essere unite da un programma invece che a mano.

## Come funziona

Ogni annotazione salvata da MarkupCraft porta con sé il suo nome (il suo id) dentro il PDF, e quel nome non cambia mai. L'unione cerca le annotazioni tramite quel nome, non tramite la loro posizione nel file, perché ogni programma rinumera le posizioni quando salva. Le note e le note private sigillate vengono abbinate allo stesso modo.

Le tavole non vengono mai toccate: entrambe le copie devono avere lo stesso numero di pagine. Se differiscono, l'unione mantiene la propria copia così com'è e lo segnala, perché aggiungere o rimuovere pagine è compito di una persona.

## Configurazione

Git richiede due righe, una volta per repository:

```
# .gitattributes
*.pdf merge=cadcraft

# una volta, su ogni computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Senza git, eseguire `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil e Mercurial prendono gli stessi tre file nella loro impostazione di strumento di unione. Il file di attività che accompagna un disegno (`<name>.markups.json`, consultare [Trasformare un'annotazione in attività](topic:markups-that-act)) si unisce allo stesso modo, come testo semplice.

## Le regole

- Un'annotazione modificata da un solo lato viene accolta. La stessa modifica su entrambi i lati viene accolta una sola volta.
- La stessa annotazione modificata in due modi è un **conflitto**: resta il proprio lato e il rapporto elenca entrambi. Aprire il risultato e sistemare a mano quell'annotazione.
- Un'annotazione aggiunta da uno dei due lati viene mantenuta. Una rimossa da un lato e non toccata dall'altro viene rimossa. Rimossa da un lato e modificata dall'altro: rimossa, e segnalata.
- I layer, le colonne, i registri e le note seguono le stesse regole.
- Le note private sigillate non vengono mai aperte: i blocchi di entrambi i lati vengono conservati così come sono.

Il file unito è una riscrittura completa della propria copia, come il Salva proprio di MarkupCraft. Non viene caricato nulla; tutto funziona sul proprio computer.
