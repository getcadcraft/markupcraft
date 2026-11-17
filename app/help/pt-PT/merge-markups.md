---
title: Fundir as edições de duas pessoas num PDF
summary: Deixe o git, o Fossil ou o Mercurial fundir duas cópias anotadas do mesmo PDF, anotação a anotação, incluindo as notas.
keywords: fundir, merge, git, fossil, mercurial, controlo de versões, conflito, três vias, cadcraft merge, gitattributes, anotações, notas, equipa, duas cópias
from: a450a9ef
---

Duas pessoas anotam o mesmo PDF em duas cópias. Se tocaram em anotações diferentes, as cópias podem ser fundidas por um programa, em vez de à mão.

## O que torna isto possível

Cada anotação que o MarkupCraft guarda leva o seu próprio nome (o seu id) dentro do PDF, e esse nome nunca muda. A fusão procura as anotações por esse nome, e não pelo seu lugar no ficheiro, porque cada programa renumera os lugares ao guardar. As notas e as notas privadas seladas são associadas da mesma forma.

As folhas nunca são tocadas: as duas cópias têm de ter o mesmo número de páginas. Se diferirem, a fusão mantém a sua cópia tal como está e di-lo, porque acrescentar ou remover páginas é tarefa para uma pessoa.

## Configurar

O git precisa de duas linhas, uma vez por repositório:

```
# .gitattributes
*.pdf merge=cadcraft

# uma vez, em cada computador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sem git, execute `cadcraft merge <base> <ours> <theirs> -o <result>`. O Fossil e o Mercurial aceitam os mesmos três ficheiros na sua própria definição de ferramenta de fusão. O ficheiro de tarefas que acompanha um desenho (`<name>.markups.json`, veja [Anotações que atuam](topic:markups-that-act)) funde-se da mesma forma, como texto simples.

## As regras

- Uma anotação alterada apenas de um lado é aceite. A mesma alteração dos dois lados é aceite uma só vez.
- A mesma anotação alterada de duas formas é um **conflito**: a sua versão fica e o relatório lista ambas. Abra o resultado e corrija essa anotação à mão.
- Uma anotação acrescentada de qualquer lado é mantida. Uma removida de um lado e intocada do outro é removida. Removida de um lado e alterada do outro: removida, e assinalada no relatório.
- Camadas, colunas, registos e notas seguem as mesmas regras.
- As notas privadas seladas nunca são abertas: os blocos de ambos os lados são mantidos tal como estão.

O ficheiro fundido é uma reescrita completa da sua cópia, como o Guardar do próprio MarkupCraft. Nada é enviado; tudo corre no seu computador.
