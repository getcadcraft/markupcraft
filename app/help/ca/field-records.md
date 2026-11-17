---
title: Segueix les RFI, les aprovacions de materials i els registres diaris
summary: Col·loqueu les RFI, les aprovacions de materials i els registres diaris als fulls, amb números, responsables, dates límit i fils; filtreu els que tenen retard; exporteu a CSV o BCF; treballeu fora de línia i combineu còpies.
keywords: rfi, sol·licitud d'informació, aprovació de materials, registre diari, informe d'obra, diari d'obra, construcció, amb retard, data límit, assignats a mi, fil, adjunt, combina, fora de línia, tauleta, bcf, csv, obra
from: 95039c5a
---

La pestanya {{ui:Obra}} guarda tres tipus de registre al costat dels vostres marcatges. Cadascun està lligat a un full; una RFI o una aprovació de materials també té un marcador al lloc del full al qual fa referència.

- **RFI**: una pregunta per a l'equip de disseny. Estats: Obert, Contestada, Tancada.
- **Aprovació de materials**: alguna cosa que cal revisar abans de continuar la feina. Estats: Obert, En revisió, Aprovada, Aprovada amb observacions, Revisa i torna a enviar, Tancada.
- **Registre diari**: el temps atmosfèric del dia, el nombre de persones a l'obra i la feina feta. Estats: Esborrany, Final.

Cada registre té un número propi del seu tipus (RFI-0001, SUB-0001, LOG-0001), un títol, un text, un responsable, una data límit, un fil de respostes i una llista de noms d'adjunts.

## Afegir-ne un

1. Obriu la pestanya {{ui:Obra}} i trieu {{ui:RFI}} o {{ui:Aprovació de materials}}.
2. Toqueu o feu clic al full on pertoca. Apareix un marcador i el registre s'obre a la pestanya.
3. Empleneu el títol, la pregunta o la descripció, a qui s'assigna i quan venç.

Un registre diari s'afegeix al full obert sense marcador. {{ui:Col·loca el marcador}} n'hi posa un més tard; {{ui:Mou el marcador}} mou qualsevol marcador. Tocar un marcador del full obre el seu registre.

## Respondre i fer seguiment

Canvieu el {{ui:Estat}} i el canvi queda registrat al fil. Escriviu una resposta i trieu {{ui:Envia la resposta}} (Ctrl+Enter també l'envia). Els adjunts només són noms: escriviu-ne un o trieu fitxers, i la llista indica a l'equip què va amb el registre. Els fitxers en si es queden on són.

Un registre la data límit del qual ja ha passat i que encara està pendent (una RFI que no és Contestada ni Tancada, una aprovació de materials que no s'ha decidit) es marca **Amb retard**, en vermell, a la llista i al seu marcador.

## Trobar el que importa

Els filtres són sobre la llista: tipus, estat, data límit (amb retard, venç en 7 dies, amb o sense data límit), aquest full o tots els fulls, una cerca de text, i {{ui:Assignats a mi}}, que compara el responsable amb el nom pel qual MarkupCraft us coneix (vegeu [Defineix el teu nom](topic:set-your-name)). La línia sota els filtres compta el que es mostra i el que té retard.

## Exportar

{{ui:CSV}} escriu els registres de la llista com a full de càlcul. {{ui:BCF}} els escriu com a temes BCF, cadascun amb una instantània del seu lloc al full, perquè altres eines BCF els puguin llistar. Tots dos segueixen els filtres.

## Desar, fora de línia i combinar còpies

Els registres es desen dins del PDF quan el deseu, i tornen quan l'obriu. No cal xarxa: afegiu, editeu, respongueu i deseu a una tauleta en un soterrani, i després porteu el PDF de tornada. Els PDF antics, i els PDF d'altres programes, s'obren com sempre.

Per ajuntar dues còpies, obriu-ne una i trieu {{ui:Combina}}, i després escolliu l'altra còpia del mateix PDF. Els registres s'uneixen pels seus identificadors:

- un registre que només té una de les còpies s'afegeix;
- un registre que és a totes dues agafa els seus camps (títol, text, estat, responsable, data límit) de la còpia modificada per última vegada, sencer; així, si dues persones han canviat camps diferents del mateix registre, guanya la versió de la còpia més recent; els fils i els noms d'adjunts de totes dues còpies s'uneixen;
- si totes dues còpies han numerat igual un registre nou, el que arriba rep el número lliure següent;
- un registre eliminat en una còpia es queda eliminat, tret que s'hagi editat després.

Una combinació és un sol pas de desfer.

## Límits

- Live TeamWork encara no comparteix els registres; feu servir {{ui:Combina}}.
- En aquesta versió no hi ha equips, notificacions ni projectes al núvol per als registres.
- Les pàgines suprimides del PDF s'emporten els seus registres (la confirmació de pàgina els compta).
