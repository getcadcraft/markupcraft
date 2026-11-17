---
title: Fusionar las ediciones de dos personas en un PDF
summary: Deje que git, Fossil o Mercurial fusionen dos copias anotadas del mismo PDF, anotación por anotación, con las notas incluidas.
keywords: fusionar, git, fossil, mercurial, control de versiones, conflicto, tres vías, cadcraft merge, gitattributes, anotaciones, notas, equipo, dos copias
from: a450a9ef
---

Dos personas anotan el mismo PDF en dos copias. Si tocaron anotaciones distintas, las copias pueden fusionarse con un programa en lugar de a mano.

## Qué lo hace posible

Cada anotación que guarda MarkupCraft lleva su propio nombre (su id) dentro del PDF, y ese nombre nunca cambia. La fusión busca las anotaciones por ese nombre, no por su lugar en el archivo, porque cada programa renumera los lugares al guardar. Las notas y las notas privadas selladas se emparejan del mismo modo.

Las hojas nunca se tocan: ambas copias deben tener el mismo número de páginas. Si difieren, la fusión conserva su copia tal cual y lo indica, porque añadir o quitar páginas es tarea de una persona.

## Configurarlo

Git necesita dos líneas, una vez por repositorio:

```
# .gitattributes
*.pdf merge=cadcraft

# una vez, en cada equipo
git config merge.cadcraft.driver "node /ruta/a/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecute `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil y Mercurial toman los mismos tres archivos en su propio ajuste de herramienta de fusión. El archivo de tareas que acompaña al dibujo (`<name>.markups.json`, véase [Anotaciones que actúan](topic:markups-that-act)) se fusiona del mismo modo, como texto plano.

## Las reglas

- Una anotación cambiada solo en un lado se toma. El mismo cambio en ambos lados se toma una sola vez.
- La misma anotación cambiada de dos formas es un **conflicto**: se conserva su lado y el informe enumera ambos. Abra el resultado y corrija esa anotación a mano.
- Una anotación añadida en cualquiera de los lados se conserva. Una eliminada en un lado y sin tocar en el otro se elimina. Eliminada en un lado y cambiada en el otro: se elimina, y se informa.
- Las capas, columnas, registros y notas siguen las mismas reglas.
- Las notas privadas selladas nunca se abren: los bloques de ambos lados se conservan tal como están.

El archivo fusionado es una reescritura completa de su copia, igual que el Guardar propio de MarkupCraft. Nada se sube; todo se ejecuta en su equipo.
