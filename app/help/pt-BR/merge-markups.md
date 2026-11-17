---
title: Mesclar as edições de duas pessoas em um PDF
summary: Deixe o git, o Fossil ou o Mercurial mesclar duas cópias marcadas do mesmo PDF, marcação por marcação, incluindo as notas.
keywords: mesclar, git, fossil, mercurial, controle de versão, conflito, três vias, cadcraft merge, gitattributes, marcações, notas, equipe, duas cópias
from: a450a9ef
---

Duas pessoas marcam o mesmo PDF em duas cópias. Se elas tocaram marcações diferentes, as cópias podem ser mescladas por um programa, em vez de à mão.

## O que faz isso funcionar

Toda marcação que o MarkupCraft salva carrega o próprio nome (o seu id) dentro do PDF, e esse nome nunca muda. A mesclagem procura as marcações por esse nome, não pela posição no arquivo, porque todo programa renumera as posições ao salvar. Notas e notas privadas lacradas são combinadas do mesmo jeito.

As folhas nunca são alteradas: as duas cópias devem ter o mesmo número de páginas. Se forem diferentes, a mesclagem mantém a sua cópia como está e informa isso, porque adicionar ou remover páginas é tarefa de uma pessoa.

## Configurar

O git precisa de duas linhas, uma vez por repositório:

```
# .gitattributes
*.pdf merge=cadcraft

# uma vez, em cada computador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sem o git, execute `cadcraft merge <base> <ours> <theirs> -o <result>`. O Fossil e o Mercurial usam os mesmos três arquivos na configuração de ferramenta de mesclagem deles. O arquivo de tarefas que acompanha um desenho (`<name>.markups.json`, veja [Marcações que agem](topic:markups-that-act)) é mesclado do mesmo jeito, como texto simples.

## As regras

- Uma marcação alterada de um só lado é aceita. A mesma mudança nos dois lados é aceita uma única vez.
- A mesma marcação alterada de duas formas é um **conflito**: a sua versão permanece e o relatório lista as duas. Abra o resultado e corrija essa marcação à mão.
- Uma marcação adicionada de qualquer lado é mantida. Uma removida de um lado e intocada do outro é removida. Removida de um lado e alterada do outro: removida, e informada.
- Camadas, colunas, registros e notas seguem as mesmas regras.
- Notas privadas lacradas nunca são abertas: os blocos dos dois lados são mantidos como estão.

O arquivo mesclado é uma reescrita completa da sua cópia, como o próprio Salvar do MarkupCraft. Nada é enviado; tudo roda no seu computador.
