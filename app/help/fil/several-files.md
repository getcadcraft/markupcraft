---
title: Magtrabaho sa maraming file nang sabay
summary: Magbukas ng maraming PDF bilang isang set, maghanap ng sheets sa iba't ibang file, kopyahin ang markups sa pagitan ng mga ito, at i-save ang kopya ng bawat file.
keywords: maraming file, several files, multiple pdfs, plan set, set, batch, many files, pagsamahin, disciplines, architectural structural mechanical, i-save lahat, isara
from: f59354ae
---

Kadalasan, dumarating ang plan set bilang isang PDF bawat discipline, o isang PDF bawat sheet. Itinuturing ng MarkupCraft ang lahat ng binubuksan mo bilang **isang set**.

## Buksan silang sabay

Piliin lahat ng PDF sa file picker nang sabay, o i-drop silang lahat sa sheet area. Para magdagdag pa sa ibang pagkakataon, buksan sila sa parehong paraan; idadagdag sila sa dulo ng listahan ng {{ui:Sheets}} ayon sa pagkakasunod ng pagbukas mo.

Resulta: "Nabuksan ang 6 na file (84 na sheet sa set)." Bawat pahina ay isang sheet. Ang sheet na may sheet number ay nagpapakita ng "Sheet A-101" sa ilalim ng pangalan nito; ang iba ay nagpapakita ng file at pahina.

Walang naka-save na "set" na file: sa susunod, buksan muli ang parehong PDF (ang "(marked up)" na kopya, kung na-save mo).

## Sa buong set

- **Maghanap ng sheet:** ang {{ui:Search sheets}} ay naghahanap sa sheet numbers, sheet names at file names ng bawat file. Ang {{key:PageUp}} at {{key:PageDown}} ay dumadaan sa lahat ng sheet ng lahat ng file ayon sa pagkakasunod.
- **Listahan ng markups:** ang tab na {{ui:Markups}} ay naglilista ng markups mula sa bawat file. I-filter ayon sa {{ui:Sheet}} para paliitin ito. May File column ang CSV.
- **Punch list:** iisang numbering para sa buong set.
- **Compare:** ang luma at bagong sheet ay maaaring galing sa magkaibang file.
- **Kopyahin at i-paste:** {{key:Mod+C}} sa isang sheet at {{key:Mod+V}} sa iba, sa anumang file. Ang kopya ay napupunta sa parehong lugar sa pahina, bahagyang nakaurong.

## I-save

Piliin ang {{ui:Save}}. Kapag may higit sa isang file na bukas, magtatanong ang MarkupCraft:

- {{ui:This file}}: isang naka-markup na kopya ng file ng sheet na kinaroroonan mo.
- {{ui:Every changed file}}: kopya ng bawat file na may hindi naka-save na pagbabago. Bawat isa ay magda-download nang hiwalay, bilang "<file name> (marked up).pdf".
- {{ui:Cancel}}

:::chromium
Sa unang beses mong mag-save ng ilang file nang sabay, maaaring itanong ng Chrome at Edge kung papayagan ng site na ito ang pag-download ng maraming file. Piliin ang {{ui:Allow}}; kung hindi, ang unang kopya lang ang darating.
:::

:::safari
Maaaring magtanong ang Safari nang isang beses sa bawat file. Sa iPad, mapupunta ang bawat kopya sa Files app.
:::

Ang file na na-save na ang markups ay hindi na ituturing na may pagbabago; ang iba ay ganoon pa rin.

Ang mga export ng CSV, BCF at punch list ay ipinangalan sa **unang** file na binuksan mo.

## Isara

Isinasara ng {{ui:Close}} ang buong set; wala pang paraan para isara ang isang file lang. Kung may hindi naka-save, magtatanong ito:

- {{ui:Cancel}}: walang mangyayari.
- {{ui:Close without saving}}: mawawala ang hindi naka-save na markups.
- {{ui:Save copies first}}: sine-save ang bawat file na may pagbabago, saka isasara.

Binubura rin ng pagsasara ang undo history.

## Malalaking set

- Binabasa ang teksto ng bawat pahina kapag binubuksan para hanapin ang sheet numbers, kaya tumatagal ang 100-sheet na set. Binibilang ng status bar ang sheets habang nagpapatuloy ito.
- Iginuguhit ang sheet pictures sa listahan habang nag-i-scroll ka sa mga ito.
- Nasa memory ng browser tab ang bawat bukas na PDF. Kung bumagal ang tab, isara ang ibang mabibigat na tab, o i-review ang isang discipline sa bawat pagkakataon.
- Kapag dalawang beses binuksan ang iisang file, dalawang kopya ng sheets nito ang makukuha mo. Kung mangyari iyon, piliin ang {{ui:Close}} at buksan muli ang set.
