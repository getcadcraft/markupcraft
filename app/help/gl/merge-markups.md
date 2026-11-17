---
title: Combinar as edicións de dúas persoas nun PDF
summary: Deixe que git, Fossil ou Mercurial combinen dúas copias anotadas do mesmo PDF anotación por anotación, incluídas as notas.
keywords: combinar, git, fossil, mercurial, control de versións, conflito, tres vías, cadcraft merge, gitattributes, anotacións, notas, equipo, dúas copias
from: a450a9ef
---

Dúas persoas anotan o mesmo PDF en dúas copias. Se tocaron anotacións distintas, as copias pódense combinar cun programa en vez de facelo a man.

## O que o fai funcionar

Cada anotación que MarkupCraft garda leva dentro do PDF o seu propio nome (o seu identificador), e ese nome nunca cambia. A combinación busca as anotacións por ese nome, non polo seu lugar no ficheiro, porque cada programa renumera os lugares ao gardar. As notas e as notas privadas seladas emparéllanse do mesmo xeito.

As follas nunca se tocan: as dúas copias deben ter o mesmo número de páxinas. Se difiren, a combinación conserva a súa copia tal como está e di iso, porque engadir ou quitar páxinas é tarefa para unha persoa.

## Configuración

Git necesita dúas liñas unha vez por repositorio:

```
# .gitattributes
*.pdf merge=cadcraft

# unha vez, en cada ordenador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sen git, execute `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil e Mercurial reciben os mesmos tres ficheiros na súa propia configuración de ferramenta de combinación. O ficheiro de tarefas que acompaña a un debuxo (`<name>.markups.json`, vexa [Converter unha anotación en tarefa](topic:markups-that-act)) combínase do mesmo xeito, como texto simple.

## As regras

- Unha anotación cambiada só dun lado tómase. O mesmo cambio nos dous lados tómase unha vez.
- A mesma anotación cambiada de dous xeitos é un **conflito**: consérvase o seu lado e o informe enumera ambos. Abra o resultado e corrixa esa anotación a man.
- Unha anotación engadida en calquera dos lados consérvase. Unha eliminada nun lado e sen tocar no outro elimínase. Eliminada nun lado e cambiada no outro: elimínase, e infórmase diso.
- As capas, columnas, rexistros e notas seguen as mesmas regras.
- As notas privadas seladas non se abren nunca: conservanse tal como están os bloques dos dous lados.

O ficheiro combinado é unha reescritura completa da súa copia, igual que o propio {{ui:Gardar}} de MarkupCraft. Non se envía nada: todo se executa no seu ordenador.
