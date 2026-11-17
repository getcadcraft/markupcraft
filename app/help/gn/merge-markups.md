---
title: Fusionar las ediciones de dos personas en un PDF
summary: Dejar que git, Fossil o Mercurial fusionen dos copias anotadas del mismo PDF anotación por anotación, con las notas incluidas.
keywords: fusionar, merge, git, fossil, mercurial, control de versiones, conflicto, tres vías, cadcraft merge, gitattributes, anotaciones, notas, equipo, dos copias
from: a450a9ef
---

Dos personas anotan el mismo PDF en dos copias. Si tocaron anotaciones distintas, las copias pueden fusionarse con un programa en lugar de a mano.

## Qué lo hace funcionar

Cada anotación que MarkupCraft guarda lleva su propio nombre (su id) dentro del PDF, y ese nombre nunca cambia. La fusión busca las anotaciones por ese nombre, no por su lugar en el archivo, porque cada programa renumera los lugares al guardar. Las notas y las notas privadas selladas se emparejan de la misma manera.

Las hojas nunca se tocan: ambas copias deben tener la misma cantidad de páginas. Si difieren, la fusión conserva tu copia tal como está y lo indica, porque agregar o quitar páginas es tarea de una persona.

## Configurarlo

Git necesita dos líneas una vez por repositorio:

```
# .gitattributes
*.pdf merge=cadcraft

# una vez, en cada computadora
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecutar `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil y Mercurial toman los mismos tres archivos en su propia configuración de herramienta de fusión. El archivo de tareas que acompaña a un plano (`<name>.markups.json`, ver [Anotaciones que actúan](topic:markups-that-act)) se fusiona igual, como texto plano.

## Las reglas

- Una anotación cambiada de un solo lado se toma. El mismo cambio en ambos lados se toma una sola vez.
- La misma anotación cambiada de dos formas es un **conflicto**: tu lado se conserva y el informe lista ambos. Abrir el resultado y corregir esa anotación a mano.
- Una anotación agregada en cualquier lado se conserva. Una eliminada en un lado y sin tocar en el otro se elimina. Eliminada en un lado y cambiada en el otro: se elimina, y se informa.
- Capas, columnas, registros y notas siguen las mismas reglas.
- Las notas privadas selladas nunca se abren: los bloques de ambos lados se conservan tal como están.

El archivo fusionado es una reescritura completa de tu copia, igual que el Guardar propio de MarkupCraft. Nada se sube; todo corre en tu computadora.
