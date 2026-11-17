---
title: Bëj një shënim detyrë
summary: Jep një shënimi një të caktuar (një person ose asistentin tënd), një ditë afati dhe një lidhje me vizatimin ose elementin e modelit që ka të bëjë, dhe shiko si mbyllet kur ndryshon me të vërtetë.
keywords: detyrë, detyra, i caktuar, asistent, afat, vonesë, lidhje, mbyllet, ndryshuar, element, zonë vizatimi, shënime që veprojnë, MCP
from: 9e970202
---

Një detyrë është një shënim që duhet ta bëjë dikush. Mban vendin e vet në fletë dhe bisedën e vet, dhe shton një titull, një të caktuar, një ditë afati, një gjendje dhe, nëse dëshiron, një lidhje me gjënë që ka të bëjë.

## Bëj një detyrë

1. Përzgjidh një ose më shumë shënime.
2. Hap skedën {{ui:Detyrat}} dhe zgjidh {{ui:Bëj detyrë të përzgjedhurat}}.
3. Plotëso titullin (fillon nga teksti i shënimit), për kë është ({{ui:Person}} ose {{ui:Asistent}}, dhe një emër), një ditë afati opsionale, dhe çfarë të shikohet.

Një detyrë për asistentin është punë për asistentin që ke lidhur me MarkupCraft (shih [Përdor MarkupCraft me një asistent AI](topic:use-with-ai-assistants)). MarkupCraft nuk përmban asistent të vet: vetëm lista punën dhe merr përgjigjet e asistentit. Zgjedhja e {{ui:Caktuar te}}, pastaj {{ui:Asistent}} në listë, tregon çfarë pret për të.

## Shiko për një ndryshim

- **Vizatimi brenda shënimit.** MarkupCraft mban vijat brenda kutisë së shënimit siç janë tani. Kur hap një revizion më të ri të asaj fletë (një skedar i dytë me të njëjtin numër fletë, ose të njëjtën pozicion faqeje), zgjidh {{ui:Kontrollo tani}}: nëse vijat në atë zonë ndryshojnë për më shumë se një qime, detyra mbyllet.
- **Një element modeli.** Jep aplikacionin dhe id-në e elementit. Asistenti yt lexon elementin me veglat e vetë aplikacionit tjetër dhe e raporton me `tasks_check`. Raporti i parë mbahet si gjendja fillestare; një raport më i vonshëm që ndryshon mbyll detyrën. Një element i fshirë e mbyll gjithashtu.
- **Asgjë.** Një detyrë e thjeshtë që e mbaron me dorë.

Një detyrë e mbyllur shënohet si E kryer, shënimi i saj bëhet Përfunduar, dhe një shënim në bisedë thotë çfarë ndryshoi. Një hap zhbërjeje e rihap.

**Kufizim:** kontrolli supozon se revizioni më i ri përdor të njëjtin origjinë faqeje dhe të njëjtën madhësi faqeje. Një fletë e ri-printuar në madhësi tjetër nuk përputhet, kështu që detyrat e saj nuk mbyllen. Fletët çiftohen sipas numrit të fletës, përndryshe sipas pozicionit të faqes; MarkupCraft nuk e shkallëzon një revizion për ta përshtatur me tjetrin.

Ri-printimi i të njëjtit vizatim me një vulë të re date, ose vija që kanë lëvizur më pak se 1.5 pikë, nuk llogariten si ndryshim. Nëse nuk është hapur një revizion më i ri, detyra mbetet e hapur dhe shiriti i statusit e thotë këtë.

## Lista

Lista {{ui:Detyrat}} mund të filtrohet sipas gjendjes dhe sipas për kë është, duke përfshirë {{ui:Me vonesë}}. Një detyrë pas ditës së afatit shfaqet në panelin e {{ui:Problemet}} si paralajmërim. {{ui:CSV}} eksporton listën.

Detyrat ruhen në PDF me shënimin, dhe udhëtojnë përmes Live si vetitë e tjera të shënimit.
