---
title: Uzskaitīt izmaiņas starp versijām
summary: Salīdziniet divus plānu komplektus un iegūstiet vienkāršu sarakstu pa lapām ar to, kur mainījās rasējums un teksts. Sarakstu var izlasīt, kopēt vai nodot savam palīgam.
keywords: kas mainījās, izmaiņas, versiju saraksts, salīdzināšanas saraksts, vienkāršs saraksts, izklāstīt, palīgs, delta, versijas kopsavilkums
from: bab93d2e
---

Salīdzināšanas rīki parāda izmaiņas uz lapas. Šis rīks tās uzraksta.

1. Atveriet abas versijas (skat. [Atvērt plānu komplektu](topic:open-a-plan-set)).
2. Atveriet cilni {{ui:Salīdzināt}}, pēc tam {{ui:Salīdzināt visu kopu}}.
3. Izvēlieties agrāko un vēlāko failu un izvēlieties {{ui:Uzskaitīt izmaiņas}}.

Saraksts sākas ar skaitu ("2 no 14 atbilstošām lapām mainījās; 1 jauna; 1 izslēgta") un pēc tam aptver katru mainīto lapu, sākot ar lielāko izmaiņu: kur lapā tā atrodas (augšējā kreisajā stūrī, centrā…), cik liela tā ir, vai līnijas pievienotas, noņemtas vai abas, cik atzīmju atrodas šajā vietā un kādi vārdi parādījās vai pazuda. Kalibrētā lapā izmērs ir norādīts reālās vienībās un arī collās uz papīra.

Saraksts norāda, kas ir lapā; tas nenorāda, ko tas nozīmē. Zīmētas līnijas pārvietošanās var būt siena vai norādes līnija. Jūsu pieslēgtais palīgs var nolasīt sarakstu ar rīku `revisions_changes` un izklāstīt to vārdos, bet pārējo varat pārbaudīt lapā. {{ui:Kopēt sarakstu}} ievieto to starpliktuvē, bet {{ui:CSV}} ieraksta vienu rindu par katru izmaiņu.

Lapas tiek savietotas pēc lapas numura, kā aprakstīts sadaļā [Slip-sheet pārskatītam komplektam](topic:slip-sheet-a-revised-set). Izmaiņas, kas ir mazākas par dažiem punktiem, tiek ignorētas, un teksts, kas ir daļa no attēla (skenējums), nav salīdzināms ar vārdiem.
