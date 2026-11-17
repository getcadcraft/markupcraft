---
title: Usar MarkupCraft cun asistente de IA
summary: Deixe que o seu propio asistente de IA ou script liste as anotacións dun conxunto, engada as simples, defina o seu estado, responda e exporte a lista: permisos, conexión a través de CadCraft Studio e o rexistro de actividade.
keywords: ia, asistente, axente, mcp, model context protocol, script, automatización, anotacións, revisión, permisos, desconectar, actividade
from: 095f2977
---

## O que aprenderá

Como deixar que un asistente de IA (ou un script que escribiu) traballe con MarkupCraft, e como decidir o que pode tocar.

MarkupCraft **non ten IA propia** e non envía nada a ningures. Vostede achega o asistente: calquera programa que fale o Model Context Protocol (MCP). MarkupCraft só lle dá ferramentas, e vostede escolle cales.

## Activalo

1. Abra {{ui:Configuración}} (a roda dentada na barra da aplicación, ou {{key:Mod+,}}) e vaia ao separador {{ui:MarkupCraft}}.
2. Debaixo de {{ui:Asistentes}}, marque **Permitir que os asistentes de IA e os scripts usen MarkupCraft**. Está desactivado ata que o faga.
3. Escolla o que pode facer: **Ler** está marcado ao principio; marque **Editar**, **Gardar** ou **Exportar** só cando os necesite.

As ferramentas fóra dos permisos que marcou non se ofrecen ao asistente, e se lle pide unha igualmente, MarkupCraft rexéitaa e anótao no rexistro de actividade. Desactivar o interruptor corta todas as conexións de golpe; {{ui:Restablecer os axustes de MarkupCraft}} tamén o desactiva.

## Conectar o seu asistente

Os asistentes conéctanse a través de **CadCraft Studio** no seu ordenador: Studio executa un pequeno servidor ao que só este ordenador pode chegar, protexido por un token que xera cada vez que arranca. En Studio, escolla {{ui:Conectar un asistente}} e copie o enderezo e o token no seu asistente (Studio amosa os axustes exactos para pegar). Non comparta nunca o token.

:::note
Unha pestana do navegador non pode abrir unha conexión para un asistente: nas aplicacións do navegador o interruptor non ten efecto até que use CadCraft Studio no seu ordenador.
:::

## Vostede segue ao mando

- **Cada cambio é un paso de desfacer**, etiquetado co nome que o asistente lle dá (por exemplo "Asistente: add cloudrect"). {{key:Mod+Z}} retira o último cambio do asistente en conxunto.
- **Sabe cando hai un conectado.** Un botón na barra da aplicación di o nome do asistente mentres está conectado; faga clic para ver o que pode facer, ou para **Desconectalo**.
- **Actividade.** {{ui:Configuración}} › {{ui:MarkupCraft}} › {{ui:Asistentes}} › {{ui:Actividade}} lista cada chamada: cando, que ferramenta, e se se fixo ou se rexeitou. {{ui:Gardar o rexistro}} conserva unha copia.

## O que pode pedir un asistente

| Ferramenta | Permiso | Que fai |
|---|---|---|
| `app_info`, `sheets_list` | Ler | Os conxuntos abertos, as súas follas e cantas anotacións ten cada un |
| `markups_list` | Ler | As anotacións con tipo, folla, texto, comentario, medida, estado, autor e respostas, filtradas por folla, estado, tipo ou autor |
| `markup_add` | Editar | Engade un rectángulo, unha nube, unha elipse, un recadro de texto, unha nota, unha liña ou unha frecha a unha folla |
| `markup_status`, `markup_reply` | Editar | Define o estado dunha anotación (rexistrado no seu fío, asinado polo asistente); engade un comentario a un fío |
| `markups_export` | Exportar | O CSV ou BCF propio da lista de {{ui:Anotacións}}, do que amosa a lista (cos filtros tal como os definiu); en Studio pode escribir o ficheiro nunha cartafol que permitiu |
| `tasks_list` | Ler | As anotacións que son tarefas: responsable (persoa ou asistente), día de vencemento, estado, ligazón, e como se pechou. `assignee: "assistant"` lista o traballo que agarda por un asistente |
| `task_set`, `task_clear` | Editar | Fai dunha anotación unha tarefa ou cámbiaa (título, responsable, vencemento, estado, ligazón); quita a tarefa |
| `tasks_check` | Editar | Pecha as tarefas cuxa área ligada do debuxo ou elemento do modelo cambiou de verdade; pase os estados dos elementos que leu da outra aplicación |
| `revisions_changes` | Ler | A lista simple do que cambiou entre dous conxuntos de planos abertos, para expresalo coas súas propias palabras |
| `pins_list`, `decision_add` | Ler, Editar | Notas de voz (duración, quen, cando, pé de foto; nunca o son nin unha transcrición) e decisións; fixar unha decisión e substituír unha anterior |
| `redline_export`, `redline_answer` | Exportar, Editar | Escribe o ficheiro redline para o delineante; aplica as respostas do delineante |

Unha anotación que engade un asistente o nomea como autor: o nome que o programa do asistente se dá a si mesmo, seguido de "(assistant)", ou de "(assistant for <o seu nome>)" cando xa definiu o seu nome de revisor. Os cambios de estado e as respostas asínanse do mesmo xeito. Cada un é un paso de desfacer. Gardar o PDF anotado segue sendo cousa súa: use {{ui:Gardar}} como de costume.

Sen abrir MarkupCraft, o servidor MCP de CadCraft lista as anotacións dun PDF nunha cartafol que indique (`markups_list`), e `cadcraft info Set.pdf` as imprime na liña de comandos.

## Se algo non funciona

- **O asistente non ve ferramentas de MarkupCraft:** comprobe que o interruptor está activado nesta xanela, e que a xanela está aberta en Studio.
- **"needs the edit permission":** marque **Editar** en {{ui:Asistentes}}, e logo pregunte de novo.
- **Erros de "401" ou "token":** o token cambiou (Studio reiniciouse, ou {{ui:Novo token}}). Copie o novo token nos axustes do asistente.

## Véxase tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos prácticos, cada un coas ferramentas que chama.
