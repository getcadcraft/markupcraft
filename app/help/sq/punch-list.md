---
title: Bëj një listë defektesh
summary: Shndërro markimet në elemente defektesh të numëruara, me një caktuar, një afat dhe një gjendje, dhe eksporto listën.
keywords: lista e defekteve, defekt, mangësi, mangësi në terren, probleme në terren, vërejtje, cakto, caktuar, afati, mbyllje, kalim, numër
from: b98b38e6
---

Një element defekti është një markim me një numër, një caktuar, një afat dhe një gjendje elementi. Numri vizatohet në fletë pranë markimit, kështu që fleta e printuar dhe lista përputhen.

## Shto elementë

1. Shëno çdo problem në fletë: një re, një thirrje, një shënim, çdo gjë.
2. Përzgjidh një ose më shumë prej tyre (shih [Përzgjidh, zhvendos dhe ndrysho markimet](topic:select-and-edit)).
3. Hap skedën {{ui:Lista e defekteve}} dhe zgjidh {{ui:Shto të zgjedhurat në listën e defekteve}}, ose zgjidh {{ui:Shto në listën e mangësive}} te {{ui:Vetitë}}.

Rezultati: çdo markim merr numrin e radhës (1, 2, 3…), sipas radhës së fletës dhe pastaj sipas radhës ku u vizatuan. Një medalion me numër shfaqet në fletë, dhe shiriti i gjendjes thotë "U shtuan 3 elementë në listën e defekteve." Markimet që kanë tashmë një numër, dhe komentet vetëm për lexim, kalohen.

## Plotëso detajet

Te skeda {{ui:Lista e defekteve}}, çdo element shfaq numrin, temën, tekstin, fletën dhe gjendjen, me tre fusha nën të. Të njëjtat fusha janë te {{ui:Vetitë}} nën "Lista e defekteve" kur markimi është i përzgjedhur:

- {{ui:Caktuar për}}: një emër ose profesion, si tekst të lirë.
- {{ui:Afati}}: një datë, nga zgjedhësi i datës.
- {{ui:Gjendja e elementit}}: Hapur, Në punë, Gati për shqyrtim ose Mbyllur.

Kliko titullin e një elementi për të shkuar te ai në fletën e vet.

Gjendja e elementit është e ndarë nga gjendja e shqyrtimit të markimit (Hapur, Pranuar, Refuzuar, Përfunduar). Përdor gjendjen e elementit për punën, dhe gjendjen e shqyrtimit për komentin.

## Hiq një element

Përzgjidh markimin dhe zgjidh {{ui:Hiq nga lista e mangësive}} te {{ui:Vetitë}}. Markimi mbetet; largohet vetëm numri. Ndërsa grupi është i hapur, numrat nuk ripërdoren: elementi tjetër merr numrin e ri të radhës, kështu që një boshllëk do të thotë se një element është hequr. Kur një skedar hapet sërish, numërimi vazhdon pas numrit më të lartë që ka.

## Eksporto listën

Zgjidh {{ui:Eksporto CSV}} te skeda {{ui:Lista e defekteve}}. Ti merr "<name> punch list.csv", me kolonat Nr., Fleta, Skedari, Faqja, Elementi, Koment, Caktuar për, Afati, Gjendja, Gjendja e markimit, Autori dhe Krijuar, sipas numrit. Hape në çdo program fletëllogaritës.

Numrat e defekteve, caktuarit, afatet dhe gjendjet e elementeve ruhen gjithashtu brenda PDF-së së markuar, kështu që kthehen kur e rihap. Shikuesit e tjerë PDF e shfaqin medalionin me numër si pjesë të markimit. Eksporti BCF i listës së markimeve mban edhe caktuarin dhe afatin (shih [Bazat e BCF](topic:bcf-basics)).

## Në terren me tablet

Hap grupin në një iPad, ec nëpër punë dhe lësho një {{ui:Shënim}} ose vizato një {{ui:Re}} te çdo problem. Shtoji në listën e defekteve ndërsa ecën, dhe ruaj para se të largohesh. Shih [Shqyrto në iPad ose ekran me prekje](topic:review-on-a-tablet).

Një listë defektesh si raport i formatuar PDF ose fletëllogaritës, dhe fotografitë e bashkangjitura elementeve, nuk janë ndërtuar ende.
