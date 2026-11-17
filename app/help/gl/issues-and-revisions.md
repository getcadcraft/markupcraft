---
title: Emisións, revisións e o rexistro de cambios do debuxo
summary: Manteña un só historial de emisións co modelo do arquitecto: lea as emisións, rexistre instrucións de obra, debuxos de taller e modelos vinculados fronte a unha emisión, e lea o rexistro de cambios do debuxo.
keywords: emisión, revisión, revisións, rexistro de cambios, rexistro de cambios do debuxo, rexistro de debuxos, instrución de obra, debuxo de taller, modelo vinculado, concurso, construción, historial de emisións, nube de revisión, nube, conxunto de anotacións
from: e4688f64
---

## Que vai facer

Traballar co mesmo historial de emisións que o resto do equipo. Ver que follas saíron en que revisión, e conservar o que pasa en obra fronte á emisión á que pertence.

## Pasos

1. Abra **Emisións e revisións**.
2. Escolla **Ler un historial de emisións** e escolla o ficheiro `.issues.json` gardado desde BimCraft ou outra aplicación. As súas emisións e rexistros engádense aos seus. Non se substitúe nada.
3. Escolla **Engadir un rexistro** para unha instrución de obra, un debuxo de taller, un conxunto de anotacións, un modelo vinculado ou unha nota. Escolla a emisión á que corresponde e o seu estado. Un ficheiro que escolla rexístrase polo seu nome, tamaño e SHA-256; o ficheiro queda onde está.
4. **Rexistro de cambios do debuxo** amosa unha fila por cada folla e unha columna por cada emisión. Unha revisión entre parénteses foi emitida de novo sen cambios.
5. **Descargar o rexistro de cambios (CSV)** garda as emisións, a táboa de follas e os rexistros. **Gardar o historial de emisións** escribe un ficheiro que as outras aplicacións len.

## Cousas útiles

- **Rexistrar as anotacións seleccionadas** pon as anotacións seleccionadas contra a última emisión. Unha nube rexístrase como nube de revisión coa revisión desa emisión. Escolla **Amosar** xunto ao rexistro para ir a el.
- **Rexistrar unha emisión** emite as súas follas anotadas. **Cambios desde** indica entón que follas se anotaron despois desa emisión.
- O historial gárdase dentro do PDF anotado. Non forma parte de Desfacer.
- Ler dúas veces o mesmo ficheiro non engade nada por duplicado. Cando dúas copias teñen o mesmo rexistro, consérvase o máis novo.
