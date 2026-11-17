---
title: Označba kot naloga
summary: Dajte označbi zadolženo osebo (človeka ali vašega pomočnika), rok in povezavo z risbo ali elementom modela, ki ga zadeva, ter jo vidite, da se zaključi, ko se to res spremeni.
keywords: naloga, naloge, zadolžena oseba, pomočnik, rok, zamujeno, povezava, zaključi, spremenjeno, element, območje risbe, označbe, ki delujejo, MCP
from: 9e970202
---

Naloga je označba, ki jo mora nekdo opraviti. Ohrani svoje mesto na listu in svojo nit, doda pa naslov, zadolženo osebo, rok, stanje in, če želite, povezavo na stvar, ki jo zadeva.

## Ustvarite nalogo

1. Izberite eno ali več označb.
2. Odprite zavihek {{ui:Naloge}} in izberite {{ui:Izbrano spremeni v nalogo}}.
3. Izpolnite naslov (ta se začne z besedilom označbe), za koga je ({{ui:Oseba}} ali {{ui:Pomočnik}}, in ime), neobvezen rok ter na kaj paziti.

Naloga za pomočnika je delo za pomočnika, ki ste ga povezali z MarkupCraftom (glejte [Uporaba MarkupCrafta z AI pomočnikom](topic:use-with-ai-assistants)). MarkupCraft nima lastnega pomočnika: samo navaja delo in sprejme odgovore pomočnika. Če izberete {{ui:Zadolženo}}, nato pa {{ui:Pomočnik}} na seznamu, se pokaže, kaj čaka nanj.

## Spremljajte spremembo

- **Risba znotraj označbe.** MarkupCraft ohrani črte znotraj okvirja označbe, kakršne so zdaj. Ko odprete novejšo revizijo tega lista (drugo datoteko z isto številko lista ali enakim položajem strani), izberite {{ui:Preveri zdaj}}: če se črte na tem območju razlikujejo za več kot las, se naloga zaključi.
- **Element modela.** Navedite aplikacijo in id elementa. Vaš pomočnik prebere element z lastnimi orodji druge aplikacije in ga sporoči z `tasks_check`. Prvo poročilo se ohrani kot začetno stanje; poznejše poročilo, ki se razlikuje, naloge zaključi. Izbrisan element jo prav tako zaključi.
- **Nič.** Navadna naloga, ki jo zaključite ročno.

Zaključena naloga je označena kot Končano, njena označba postane Dokončana, v niti pa opomba pove, kaj se je spremenilo. En korak razveljavitve jo znova odpre.

**Omejitev:** preverjanje predpostavlja, da novejša revizija uporablja isto izhodišče strani in isto velikost strani. List, ponovno izrisan v drugi velikosti, se ne bo ujel, zato se njegove naloge ne zaključijo. Liste povezuje številka lista, sicer položaj strani; MarkupCraft ene revizije ne prilagaja drugi.

Ponovni izris iste risbe z novo datumsko oznako ali črte, ki so se premaknile za manj kot 1.5 točke, ne štejeta kot sprememba. Če ni odprte novejše revizije, naloga ostane odprta, vrstica stanja pa to pove.

## Seznam

Seznam {{ui:Naloge}} je mogoče filtrirati po stanju in po tem, za koga je, vključno z {{ui:Zamujeno}}. Naloga, ki je čez rok, se v podoknu s težavami prikaže kot opozorilo. {{ui:CSV}} izvozi seznam.

Naloge se shranijo v PDF skupaj z označbo in potujejo prek Live kakor druge lastnosti označb.
