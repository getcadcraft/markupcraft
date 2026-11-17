---
title: Puno me disa skedarë njëherësh
summary: Hap shumë PDF si një grup, gjej fletë nëpër skedarë, kopjo shënime mes tyre, dhe ruaj kopjen e secilit skedar.
keywords: disa skedarë, PDF të shumëfishta, grup planesh, grup, paketë, shumë skedarë, bashko, disiplina, arkitekturore strukturore mekanike, ruaj të gjitha, mbyll
from: f59354ae
---

Një grup planesh shpesh vjen si një PDF për çdo disiplinë, ose një PDF për çdo fletë. MarkupCraft trajton gjithçka që hap si **një grup**.

## Hap bashkë

Zgjidh të gjitha PDF-të në zgjedhësin e skedarëve njëherësh, ose lësho të gjitha në zonën e fletëve. Për të shtuar më vonë, hap ato në të njëjtën mënyrë; ato bashkohen në fund të listës {{ui:Fletët}} sipas radhës që i hap.

Rezultati: "U hapën 6 skedarë (84 fletë në grup)." Çdo faqe është një fletë. Fletët me numër fletë shfaqin "Fleta A-101" nën emrin e tyre; të tjerat shfaqin skedarin dhe faqen.

Nuk ka skedar "grupi" të ruajtur: herën tjetër, hap të njëjtat PDF përsëri (kopjet "(marked up)", nëse i ke ruajtur).

## Në të gjithë grupin

- **Gjej një fletë:** {{ui:Kërko fletët}} kërkon te numrat e fletëve, emrat e fletëve dhe emrat e skedarëve të çdo skedari. {{key:PageUp}} dhe {{key:PageDown}} kalojnë nëpër të gjitha fletët e të gjitha skedarëve, radhazi.
- **Lista e shënimeve:** skeda {{ui:Shënimet}} liston shënime nga çdo skedar. Filtro sipas {{ui:Fletë}} për ta ngushtuar. CSV ka një kolonë Skedar.
- **Lista e mangësive:** një numërim për të gjithë grupin.
- **Krahaso:** fleta e vjetër dhe ajo e re mund të vijnë nga skedarë të ndryshëm.
- **Kopjo dhe ngjit:** {{key:Mod+C}} në një fletë dhe {{key:Mod+V}} në një tjetër, në çdo skedar. Kopja del në të njëjtin vend të faqes, pak e zhvendosur.

## Ruaj

Zgjidh {{ui:Ruaj}}. Me më shumë se një skedar të hapur, MarkupCraft pyet:

- {{ui:Ky skedar}}: një kopje me shënime të skedarit të fletës ku je.
- {{ui:Çdo skedar i ndryshuar}}: një kopje e secilit skedar me ndryshime të pa ruajtura. Secila shkarkohet veçmas, si "<emri i skedarit> (marked up).pdf".
- {{ui:Anulo}}

:::chromium
Herën e parë që ruan disa skedarë njëherësh, Chrome dhe Edge mund të pyesin nëse ky sajt lejohet të shkarkojë disa skedarë. Zgjidh {{ui:Lejo}}; përndryshe vjen vetëm kopja e parë.
:::

:::safari
Safari mund të pyesë një herë për secilin skedar. Në një iPad, çdo kopje shkon në aplikacionin Files.
:::

Një skedar, shënimet e të cilit janë ruajtur, nuk llogaritet më si i ndryshuar; të tjerët akoma llogariten.

Eksportet CSV, BCF dhe të listës së mangësive emërtohen sipas skedarit **të parë** që hape.

## Mbyll

{{ui:Mbyll}} mbyll tërë grupin; nuk ka ende mënyrë për të mbyllur vetëm një skedar. Nëse diçka nuk është ruajtur, pyet:

- {{ui:Anulo}}: nuk ndodh asgjë.
- {{ui:Mbyll pa ruajtur}}: shënimet e pa ruajtura humbasin.
- {{ui:Ruaj fillimisht kopjet}}: ruan çdo skedar të ndryshuar, pastaj mbyll.

Mbyllja pastron edhe historikun e zhbërjes.

## Grupe të mëdha

- Teksti i çdo faqeje lexohet kur hapet për të gjetur numrat e fletëve, kështu që një grup me 100 fleta kërkon kohë. Shiriti i statusit numëron fletët ndërsa përparon.
- Imazhet e fletëve në listë vizatohen ndërsa lëviz tek ato.
- Çdo PDF e hapur mbahet në memorien e skedës së shfletuesit. Nëse skeda ngadalësohet, mbyll skedat e tjera të rënda, ose shqyrto një disiplinë në çdo herë.
- Hapja e të njëjtit skedar dy herë të jep dy kopje të fletëve të tij. Nëse ndodh kjo, zgjidh {{ui:Mbyll}} dhe hap grupin përsëri.
