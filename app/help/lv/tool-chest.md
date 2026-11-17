---
title: Rīku kaste
summary: Saglabājiet stilizētu atzīmi kā atkārtoti izmantojamu rīku, zīmējiet ar to un kopīgojiet savu kasti ar biroju kā failu.
keywords: rīku kaste, rīki, rīku komplekts, pielāgoti rīki, saglabātās atzīmes, izlase, biroja standarts, importēt, eksportēt, kopīgot, json
from: 7dfa36e0
---

Cilnē {{ui:Rīki}} atrodas jūsu **rīku kaste**: atzīmes, kas saglabātas ar savu izskatu un gatavas zīmēšanai atkal. Rīks saglabā atzīmes veidu, krāsu, līnijas platumu, aizpildījumu, caurspīdīgumu, teksta izmēru un tematu, kā arī zīmoga tekstu, skaitīšanas grupas nosaukumu vai teksta lodziņa vai norādes sākuma tekstu.

## Sākotnējie rīki

Jaunā kastē ir seši: „Revīzijas mākonis” (sarkans), „Jautājuma mākonis” (zils), „Dzeltenais marķieris”, „RFI norāde” (zila, sākas ar „RFI: ”), „Lauka pārbaude” (oranža norāde, kurā rakstīts „Lauka pārbaude.”) un „Apstiprināts ar piezīmēm” (zīmogs).

## Zīmēšana ar rīku

1. Atveriet cilni {{ui:Rīki}}.
2. Noklikšķiniet uz rīka. Tas izskatās nospiests, un atbilstošais rīkjoslas rīks ieslēdzas.
3. Zīmējiet kā parasti. {{ui:Rekvizīti}} rāda „Zīmē ar "<rīks>" no rīku kastes.”

Kamēr ieslēgts rīku kastes rīks, izmaiņas, ko veicat sadaļā {{ui:Rekvizīti}} pirms zīmēšanas, pagaidām attiecas tikai uz šo rīku, bez izmaiņām saglabātajā rīkā vai jūsu parastajos rīku iestatījumos. Izvēloties rīkjoslas pogu vai nospiežot rīka taustiņu, atgriežaties pie parastā rīka.

## Saglabāt savu

1. Uzzīmējiet atzīmi un piešķiriet tai vēlamo stilu: krāsa, līnija, aizpildījums, temats, zīmoga teksts.
2. Atlasiet to.
3. Cilnē {{ui:Rīki}} izvēlieties {{ui:Saglabāt atlasīto kā rīku}} vai sadaļā {{ui:Rekvizīti}} {{ui:Saglabāt kā rīku}}.
4. Ierakstiet {{ui:Rīka nosaukums}} un izvēlieties {{ui:Saglabāt rīku}}.

Rezultāts: rīks tiek pievienots kastes beigās, un cilne {{ui:Rīki}} atveras, lai to parādītu.

## Zīmogi no atlases

Atlasiet vairākas atzīmes (vai lapas saturu ar rīku {{ui:Saturs}}) un izvēlieties {{ui:Saglabāt atlasi kā zīmogu…}} sadaļā {{ui:Vēl}} vai konteksta izvēlnē. Kastē tiek pievienots viens zīmogs, kurā tās visas ir apvienotas („Zīmogs: 3 atzīmes kopā”). Noklikšķiniet uz tā un pēc tam jebkurā lapā: atzīmes nonāk kopā, centrētas tur, kur noklikšķinājāt, kā jaunas atzīmes ar jūsu vārdu; lapas saturs tiek uzzīmēts lapā tur. Šādi zīmogi tiek saglabāti un kopīgoti ar kasti kā jebkurš cits rīks.

## Rīka noņemšana

Izvēlieties × rīka rindas beigās, pēc tam {{ui:Noņemt}}. Ar šo rīku jau uzzīmētās atzīmes paliek tādas, kādas ir.

## Kur glabājas kaste

Kaste tiek glabāta **šajā pārlūkprogrammā, šajā datorā**. Citai pārlūkprogrammai vai datoram ir sava kaste (sākot ar sešiem noklusētajiem rīkiem), privātais logs to aizmirst, kad tas aizveras, un, notīrot šīs vietnes datus pārlūkprogrammas iestatījumos, tā tiek izdzēsta.

Ja pārlūkprogramma to nevar saglabāt (krātuve izslēgta vai pilna), statusjoslā rakstīts: „Rīku kasti nevarēja saglabāt šajā pārlūkprogrammā (krātuve ir izslēgta vai pilna). Eksportējiet to, lai to saglabātu.”

:::safari
Safari var notīrīt vietnes saglabātos datus, ja šo vietni kādu laiku neesat izmantojis. Laiku pa laikam eksportējiet savu kasti, lai to varētu atkal importēt.
:::

**Eksportējiet savu kasti kā dublējumu**, it īpaši pēc tam, kad izveidojat rīkus, uz kuriem paļaujaties.

## Kopīgot kasti ar biroju

1. Iestatiet rīkus vienreiz.
2. Izvēlieties {{ui:Eksportēt}}. Iegūsiet failu "MarkupCraft tool chest.json".
3. Novietojiet šo failu, kur birojs glabā standartus, vai nosūtiet to apkārt.
4. Visi pārējie izvēlas {{ui:Importēt}} savā cilnē {{ui:Rīki}} un atlasa failu.

Rezultāts: „Importēti 12 rīki no faila "MarkupCraft tool chest.json".” Rīki, kas nākuši no tās pašas kastes, aizstāj vecākās kopijas, tāpēc atjauninātas biroja kastes importēšana atsvaidzina šos rīkus, nevis dubulto tos; jaunie rīki tiek pievienoti. Kastē var būt līdz 500 rīkiem.

MarkupCraft pārbauda katru vērtību importētajā failā un izlaiž to, ko nevar izmantot („Izlaisti: 2 (nav izmantojami)”). Failus, kas nav rīku kastes, noraida: „Šis fails nav MarkupCraft rīku kaste.” vai „Šis fails nav rīku kaste (tas nav JSON).”

Rīku kastes failus no citām atzīmju programmām nevar importēt.
