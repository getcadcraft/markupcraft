---
title: Converter unha anotación en tarefa
summary: Asigne a unha anotación unha persoa responsable (unha persoa ou o seu asistente), un día límite e unha ligazón ao debuxo ou elemento do modelo ao que se refire, e vexa como se pecha cando iso cambia de verdade.
keywords: tarefa, tarefas, responsable, asistente, límite, vencido, ligazón, pecha, cambio, elemento, zona do debuxo, anotacións que actúan, MCP
from: 9e970202
---

Unha tarefa é unha anotación que alguén debe realizar. Conserva o seu lugar na folla e a súa conversa, e engade un título, unha persoa responsable, un día límite, un estado e, se o quere, unha ligazón á cousa á que se refire.

## Crear unha tarefa

1. Seleccione unha ou varias anotacións.
2. Abra a lapela {{ui:Tarefas}} e escolla {{ui:Converter en tarefa a selección}}.
3. Cubra o título (parte do texto da anotación), para quen é ({{ui:Persoa}} ou {{ui:Asistente}}, e un nome), un día límite opcional, e o que hai que vixiar.

Unha tarefa de asistente é traballo para o asistente que conectou a MarkupCraft (vexa [Usar MarkupCraft cun asistente de IA](topic:use-with-ai-assistants)). MarkupCraft non inclúe asistente propio: só enumera o traballo e recolle as respostas do asistente. Escoller {{ui:Asignada a}}, e despois {{ui:Asistente}} na lista, mostra o que lle está esperando.

## Vixiar un cambio

- **O debuxo dentro da anotación.** MarkupCraft conserva as liñas dentro da caixa da anotación tal como están agora. Cando abra unha revisión máis nova desa folla (un segundo ficheiro co mesmo número de folla, ou a mesma posición de páxina), escolla {{ui:Comprobar agora}}: se as liñas desa zona difiren por máis dun cabelo, a tarefa pécháse.
- **Un elemento do modelo.** Indique a aplicación e o identificador do elemento. O seu asistente le o elemento coas ferramentas propias da outra aplicación e informa con `tasks_check`. O primeiro informe consérvase como estado inicial; un informe posterior que difira pecha a tarefa. Un elemento que se eliminou tamén a pecha.
- **Nada.** Unha tarefa simple que remata a man.

Unha tarefa pechada márcase como Feita, a súa anotación pasa a Completado, e unha nota na conversa indica o que cambiou. Un só paso de desfacer a reabre.

**Límite:** a comprobación supón que a revisión máis nova usa a mesma orixe e o mesmo tamaño de páxina. Unha folla reimpresa noutro tamaño non coincidirá, así que as súas tarefas non se pechan. As follas emparéllanse polo número de folla e, se non, pola posición da páxina; MarkupCraft non escala unha revisión para que encaixe coa outra.

Reimprimir o mesmo debuxo cunha nova data de selo, ou liñas que se moven menos de 1,5 puntos, non conta como cambio. Se non hai aberta unha revisión máis nova, a tarefa segue aberta e a barra de estado di iso.

## A lista

A lista de {{ui:Tarefas}} pódese filtrar por estado e por para quen é, incluído {{ui:Vencido}}. Unha tarefa que pasou o seu día límite aparece no panel de problemas como aviso. {{ui:CSV}} exporta a lista.

As tarefas gárdanse no PDF coa anotación, e viaxan por Live como as demais propiedades das anotacións.
