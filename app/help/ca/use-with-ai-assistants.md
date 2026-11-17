---
title: Usa MarkupCraft amb un assistent d'IA
summary: Deixeu que el vostre propi assistent d'IA o script enumeri les marques d'un conjunt, n'afegeixi de senzilles, n'estableixi l'estat, respongui i exporti la llista: permisos, connexió a través de CadCraft Studio i el registre d'activitat.
keywords: ia, assistent, agent, mcp, protocol de context del model, script, automatització, marques, revisió, permisos, desconnectar, activitat
from: 095f2977
---

## Què aprendreu

Com permetre que un assistent d'IA (o un script que hàgiu escrit) treballi amb MarkupCraft, i com decidir què pot tocar.

MarkupCraft **no té IA pròpia** i no envia res a cap lloc. Porteu l'assistent: qualsevol programa que parli el Model Context Protocol (MCP). MarkupCraft només li ofereix eines, i vosaltres en trieu quines.

## Activar-ho

1. Obriu {{ui:Configuració}} (la icona d'engranatge de la barra de l'aplicació, o {{key:Mod+,}}) i aneu a la pestanya {{ui:MarkupCraft}}.
2. Sota {{ui:Assistents}}, marqueu **Permet que els assistents d'IA i els scripts usin MarkupCraft**. Està desactivat fins que ho feu.
3. Trieu què pot fer: **Llegeix** està marcat per començar; marqueu **Edita**, **Desa** o **Exporta** només quan els necessiteu.

Les eines fora dels permisos que heu marcat no s'ofereixen a l'assistent, i si en demana una igualment, MarkupCraft la rebutja i ho escriu al registre d'activitat. En desactivar l'interruptor es tanquen totes les connexions de cop; {{ui:Restableix la configuració de MarkupCraft}} també el desactiva.

## Connectar el vostre assistent

Els assistents es connecten a través de **CadCraft Studio** al vostre ordinador: Studio executa un petit servidor que només aquest ordinador pot assolir, protegit per un testimoni que genera cada vegada que s'inicia. A Studio, trieu {{ui:Connecta un assistent}} i copieu l'adreça i el testimoni a l'assistent (Studio mostra la configuració exacta per enganxar). Mai no compartiu el testimoni.

:::note
Una pestanya del navegador no pot obrir una connexió per a un assistent: a les aplicacions del navegador l'interruptor no té efecte fins que useu CadCraft Studio al vostre ordinador.
:::

## Vosaltres mandeu

- **Cada canvi és un sol pas de desfer**, etiquetat amb el nom de l'assistent (per exemple "Assistent: afegeix cloudrect"). {{key:Mod+Z}} desfà el darrer canvi de l'assistent com a conjunt.
- **Sabeu quan n'hi ha un de connectat.** Un botó de la barra de l'aplicació indica l'assistent mentre està connectat; feu-hi clic per veure què pot fer, o per **Desconnectar-lo**.
- **Activitat.** {{ui:Configuració}} › {{ui:MarkupCraft}} › {{ui:Assistents}} › {{ui:Activitat}} llista cada crida: quan, quina eina, feta o rebutjada. {{ui:Desa el registre}} en guarda una còpia.

## Què pot demanar un assistent

| Eina | Permís | Què fa |
|---|---|---|
| `app_info`, `sheets_list` | Llegeix | Els conjunts oberts, els seus fulls i quantes marques té cadascun |
| `markups_list` | Llegeix | Les marques amb tipus, full, text, comentari, mesura, estat, autor i respostes, filtrades per full, estat, tipus o autor |
| `markup_add` | Edita | Afegeix un rectangle, un núvol, una el·lipse, un quadre de text, una nota, una línia o una fletxa a un full |
| `markup_status`, `markup_reply` | Edita | Defineix l'estat d'una marca (registrat al seu fil, signat per l'assistent); afegeix un comentari a un fil |
| `markups_export` | Exporta | El CSV o BCF propi de la llista {{ui:Marques}} amb el que mostra la llista (els seus filtres tal com els heu definit); a Studio pot escriure el fitxer en una carpeta que hàgiu permès |
| `tasks_list` | Llegeix | Les marques que són tasques: responsable (persona o assistent), dia de venciment, estat, enllaç, com s'ha tancat. `assignee: "assistant"` llista la feina que espera un assistent |
| `task_set`, `task_clear` | Edita | Fa d'una marca una tasca o la canvia (títol, responsable, venciment, estat, enllaç); treu la tasca |
| `tasks_check` | Edita | Tanca les tasques de les quals la zona de plànol enllaçada o l'element de model han canviat de veritat; passa els estats dels elements que heu llegit de l'altra aplicació |
| `revisions_changes` | Llegeix | La llista simple del que ha canviat entre dos conjunts de plànols oberts, per posar-ho amb les vostres paraules |
| `pins_list`, `decision_add` | Llegeix, Edita | Notes de veu (durada, qui, quan, peu de foto; mai el so, sense transcripció) i decisions; fixa una decisió i en substitueix una d'anterior |
| `redline_export`, `redline_answer` | Exporta, Edita | Escriu el fitxer redline per al delineant; aplica les respostes del delineant |

Una marca que afegeix un assistent hi posa com a autor el nom que el programa de l'assistent es dona, seguit de "(assistent)", o de "(assistent per a <el vostre nom>)" quan hàgiu definit el vostre nom de revisor. Els seus canvis d'estat i les seves respostes van signats de la mateixa manera. Cada cosa és un sol pas de desfer. Desar el PDF marcat continua sent cosa vostra: useu {{ui:Desa}} com de costum.

Sense obrir MarkupCraft, el servidor MCP de CadCraft llista les marques d'un PDF en una carpeta que indiqueu (`markups_list`), i `cadcraft info Set.pdf` les imprimeix a la línia d'ordres.

## Si alguna cosa no funciona

- **L'assistent no veu cap eina de MarkupCraft:** comproveu que l'interruptor estigui activat en aquesta finestra, i que la finestra estigui oberta a Studio.
- **"necessita el permís d'edició":** marqueu **Edita** sota {{ui:Assistents}}, i després torneu a demanar-ho.
- **Errors "401" o "token":** el testimoni ha canviat (Studio s'ha reiniciat, o {{ui:Nou testimoni}}). Copieu el nou a la configuració de l'assistent.

## Vegeu també

- [Receptes per a assistents d'IA](common:assistants-recipes): exemples resolts, cadascun amb les eines que crida.
