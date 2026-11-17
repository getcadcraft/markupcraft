---
title: Fusionar las ediciones de dos personas en un PDF
summary: Deje que git, Fossil o Mercurial fusionen dos copias marcadas del mismo PDF, marca por marca, incluidas las notas.
keywords: fusionar, git, fossil, mercurial, control de versiones, conflicto, tres vías, cadcraft merge, gitattributes, marcas, notas, equipo, dos copias
from: a450a9ef
---

Dos personas marcan el mismo PDF en dos copias. Si tocaron marcas distintas, las copias pueden fusionarse con un programa en lugar de a mano.

## Qué lo hace funcionar

Cada marca que guarda MarkupCraft lleva su propio nombre (su id) dentro del PDF, y el nombre nunca cambia. La fusión busca las marcas por ese nombre, no por su lugar en el archivo, porque cada programa renumera los lugares al guardar. Las notas y las notas privadas selladas se emparejan del mismo modo.

Las hojas nunca se tocan: ambas copias deben tener el mismo número de páginas. Si difieren, la fusión conserva su copia tal como está y lo indica, porque agregar o quitar páginas es tarea de una persona.

## Configúrelo

Git necesita dos líneas una vez por repositorio:

```
# .gitattributes
*.pdf merge=cadcraft

# una sola vez, en cada computadora
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecute `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil y Mercurial usan los mismos tres archivos en su propia configuración de herramienta de fusión. El archivo de tareas que acompaña a un dibujo (`<name>.markups.json`, vea [Marcas que actúan](topic:markups-that-act)) se fusiona igual, como texto plano.

## Las reglas

- Una marca cambiada de un solo lado se toma. El mismo cambio en ambos lados se toma una vez.
- La misma marca cambiada de dos formas es un **conflicto**: se conserva su lado y el informe lista ambos. Abra el resultado y corrija esa marca a mano.
- Una marca agregada de cualquier lado se conserva. Una quitada de un lado y no tocada del otro se quita. Quitada de un lado y cambiada del otro: se quita, y se informa.
- Las capas, columnas, registros y notas siguen las mismas reglas.
- Las notas privadas selladas nunca se abren: los bloques de ambos lados se conservan tal como están.

El archivo fusionado es una reescritura completa de su copia, igual que el guardado propio de MarkupCraft. Nada se sube; todo se ejecuta en su computadora.
