---
title: Usar MarkupCraft con un asistente de IA
summary: Permita que su propio asistente de IA o script liste las anotaciones de un conjunto, agregue las simples, fije su estado, responda y exporte la lista: permisos, conexión mediante CadCraft Studio y el registro de actividad.
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, anotaciones, revisión, permisos, desconectar, actividad
from: 095f2977
---

## Qué vas a aprender

Cómo permitir que un asistente de IA (o un script que escribiste) trabaje con MarkupCraft, y cómo decidir qué puede tocar.

MarkupCraft **no tiene IA propia** y no envía nada a ningún lado. Vos traés el asistente: cualquier programa que hable el Model Context Protocol (MCP). MarkupCraft sólo le da herramientas, y vos elegís cuáles.

## Activarlo

1. Abrí {{ui:Configuración}} (el engranaje de la barra de la aplicación, o {{key:Mod+,}}) y andá a la pestaña {{ui:MarkupCraft}}.
2. Bajo {{ui:Asistentes}}, marcá **Permitir que asistentes de IA y scripts usen MarkupCraft**. Está apagado hasta que lo hagas.
3. Elegí qué puede hacer: **Leer** viene marcado al principio; marcá **Editar**, **Guardar** o **Exportar** sólo cuando los necesites.

Las herramientas fuera de los permisos que marcaste no se ofrecen al asistente, y si pide una igual, MarkupCraft la rechaza y lo anota en el registro de actividad. Apagar el interruptor corta todas las conexiones de inmediato; {{ui:Restablecer la configuración de MarkupCraft}} también lo apaga.

## Conectar tu asistente

Los asistentes se conectan mediante **CadCraft Studio** en tu computadora: Studio ejecuta un pequeño servidor que sólo esta computadora puede alcanzar, protegido por un token que genera cada vez que arranca. En Studio, elegí {{ui:Conectar un asistente}} y copiá la dirección y el token en tu asistente (Studio muestra la configuración exacta para pegar). Nunca compartas el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones del navegador el interruptor no tiene efecto hasta que uses CadCraft Studio en tu computadora.
:::

## Vos seguís a cargo

- **Cada cambio es un paso de deshacer**, rotulado con el nombre del asistente (por ejemplo "Asistente: agregar cloudrect"). {{key:Mod+Z}} deshace el último cambio del asistente completo.
- **Sabés cuándo hay uno conectado.** Un botón en la barra de la aplicación muestra el nombre del asistente mientras está conectado; hacé clic para ver qué puede hacer, o para **Desconectarlo**.
- **Actividad.** {{ui:Configuración}} › {{ui:MarkupCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} lista cada llamada: cuándo, qué herramienta, si se completó o se rechazó. {{ui:Guardar el registro}} guarda una copia.

## Qué puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `sheets_list` | Leer | Los conjuntos abiertos, sus hojas y cuántas anotaciones tiene cada una |
| `markups_list` | Leer | Las anotaciones con tipo, hoja, texto, comentario, medida, estado, autor y respuestas, filtradas por hoja, estado, tipo o autor |
| `markup_add` | Editar | Agrega un rectángulo, nube, elipse, caja de texto, nota, línea o flecha a una hoja |
| `markup_status`, `markup_reply` | Editar | Fija el estado de una anotación (registrado en su hilo, firmado por el asistente); agrega un comentario a un hilo |
| `markups_export` | Exportar | El CSV o BCF propio de la lista {{ui:Anotaciones}} con lo que muestra la lista (sus filtros tal como los configuraste); en Studio puede escribir el archivo en una carpeta que hayas permitido |
| `tasks_list` | Leer | Las anotaciones que son tareas: responsable (persona o asistente), día límite, estado, enlace, cómo se cerró. `assignee: "assistant"` lista el trabajo que espera a un asistente |
| `task_set`, `task_clear` | Editar | Convierte una anotación en tarea o la cambia (título, responsable, fecha límite, estado, enlace); quita la tarea |
| `tasks_check` | Editar | Cierra tareas cuya zona de dibujo o elemento de modelo vinculado realmente cambió; pasa los estados de los elementos que leíste de la otra aplicación |
| `revisions_changes` | Leer | La lista simple de lo que cambió entre dos conjuntos de planos abiertos, para expresarlo con tus palabras |
| `pins_list`, `decision_add` | Leer, Editar | Notas de voz (duración, quién, cuándo, leyenda; nunca el sonido ni una transcripción) y decisiones; fijar una decisión y reemplazar una anterior |
| `redline_export`, `redline_answer` | Exportar, Editar | Escribe el archivo de marcas para el dibujante; aplica las respuestas del dibujante |

Una anotación que agrega un asistente lo nombra como autor: el nombre que el programa del asistente se da a sí mismo, seguido de "(asistente)", o de "(asistente para <tu nombre>)" una vez que configuraste tu nombre de revisor. Sus cambios de estado y sus respuestas se firman de la misma manera. Cada uno es un paso de deshacer. Guardar el PDF anotado sigue siendo tarea tuya: usá {{ui:Guardar}} como siempre.

Sin abrir MarkupCraft, el servidor MCP de CadCraft lista las anotaciones de un PDF en una carpeta que indiques (`markups_list`), y `cadcraft info Set.pdf` las imprime en la línea de comandos.

## Si algo no funciona

- **El asistente no ve herramientas de MarkupCraft:** verificá que el interruptor esté encendido en esta ventana, y que la ventana esté abierta en Studio.
- **"necesita el permiso de edición":** marcá **Editar** en {{ui:Asistentes}}, y después volvé a pedirlo.
- **Errores "401" o "token":** el token cambió (Studio se reinició, o {{ui:Nuevo token}}). Copiá el nuevo en la configuración del asistente.

## Ver también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
