---
title: Seguir RFI, achegas e diarios de obra
summary: Poña RFI, achegas e diarios de obra nas follas, con números, persoas asignadas, datas límite e fíos; filtre o que está vencido; exporte CSV ou BCF; traballe sen conexión e combine copias.
keywords: rfi, solicitude de información, achega, diario de obra, libro de obra, informe de campo, obra, construción, vencido, data límite, asignado a min, fío, anexo, combinar, sen conexión, tableta, bcf, csv, campo
from: 95039c5a
---

A lapela {{ui:Campo}} garda tres tipos de rexistro xunto ás súas anotacións. Cada un está ligado a unha folla; unha RFI ou unha achega tamén ten unha marca no lugar da folla ao que se refire.

- **RFI**: unha pregunta para o equipo de deseño. Estados: Aberta, Respondida, Pechada.
- **Achega**: algo que hai que revisar antes de seguir co traballo. Estados: Aberta, En revisión, Aprobada, Aprobada con notas, Revisar e volver enviar, Pechada.
- **Diario de obra**: o tempo do día, o número de persoas na obra e o traballo feito. Estados: Borrador, Final.

Cada rexistro ten un número do seu propio tipo (RFI-0001, SUB-0001, LOG-0001), un título, un texto, unha persoa asignada, unha data límite, un fío de respostas e unha lista de nomes de anexos.

## Engadir un

1. Abra a lapela {{ui:Campo}} e escolla {{ui:RFI}} ou {{ui:Achega}}.
2. Toque ou faga clic na folla onde corresponda. Aparece unha marca e o rexistro ábrese na lapela.
3. Encha o título, a pregunta ou a descrición, a persoa asignada e a data límite.

Un diario de obra engádese á folla aberta sen marca. {{ui:Colocar marca}} coloca unha marca despois; {{ui:Mover marca}} move calquera marca. Tocar unha marca na folla abre o seu rexistro.

## Responder e seguir

Cambie o {{ui:Estado}} e o cambio rexístrase no fío. Escriba unha resposta e escolla {{ui:Enviar resposta}} (Ctrl+Enter tamén envía). Os anexos son só nomes: escriba un ou escolla ficheiros, e a lista indica ao equipo que acompaña ao rexistro. Os ficheiros en si quedan onde están.

Un rexistro cuxa data límite pasou e que aínda está pendente (unha RFI que non está Respondida nin Pechada, unha achega que aínda non se decidiu) márcase como **Vencido**, en vermello, na lista e na súa marca.

## Buscar o que importa

Os filtros están enriba da lista: tipo, estado, data límite (vencido, vence en 7 días, con ou sen data límite), {{ui:Esta folla}} ou {{ui:Todas as follas}}, unha busca de texto e {{ui:Asignado a min}}, que compara a persoa asignada co nome polo que MarkupCraft o coñece (vexa [Definir o seu nome](topic:set-your-name)). A liña debaixo dos filtros conta o que se amosa e o que está vencido.

## Exportar

{{ui:CSV}} escribe os rexistros da lista como unha folla de cálculo. {{ui:BCF}} escríbeos como temas BCF, cada un cunha instantánea do seu lugar na folla, para que outras ferramentas BCF os poidan listar. Ambos seguen os filtros.

## Gardar, sen conexión e combinar copias

Os rexistros gárdanse dentro do PDF ao gardalo e volven ao abrilo. Non fai falta rede: engada, edite, responda e garde nunha tableta nun soto, e despois leve de novo o PDF. Os PDF antigos e os de outros programas ábrense como sempre.

Para xuntar dúas copias, abra unha e escolla {{ui:Combinar}}, e despois escolla a outra copia do mesmo PDF. Os rexistros únense polos seus identificadores:

- engádese un rexistro que só ten unha copia;
- un rexistro que está en ambas toma os seus campos (título, texto, estado, persoa asignada, data límite) da copia modificada por última vez, por completo; polo tanto, se dúas persoas cambiaron campos distintos do mesmo rexistro, gaña a versión da copia posterior; os fíos e os nomes de anexos de ambas copias únense;
- se as dúas copias numeraron igual un rexistro novo, o que chega recibe o seguinte número libre;
- un rexistro eliminado nunha copia queda eliminado, salvo que se editase despois.

Unha combinación é un só paso de Desfacer.

## Límites

- Live TeamWork aínda non comparte os rexistros; use Combinar.
- Nesta versión non hai equipos, notificacións nin proxectos na nube para os rexistros.
- As páxinas eliminadas do PDF levan consigo os seus rexistros (a confirmación da páxina os conta).
