---
title: Sanduka e veglave
summary: Ruaj një shënim me stilin e tij si vegël të ripërdorshme, vizato me të, dhe ndaj sandukën me zyrën si skedar.
keywords: sanduka e veglave, vegla, grup veglash, vegla të personalizuara, shënime të ruajtura, të preferuara, standard zyre, importo, eksporto, ndaj, json
from: 7dfa36e0
---

Skeda {{ui:Veglat}} mban **sandukën e veglave**: shënime të ruajtura me pamjen e tyre, gati për t'u vizatuar sërish. Një vegël ruan llojin, ngjyrën, trashësinë e vijës, mbushjen, opacitetin, madhësinë e tekstit dhe temën e shënimit, plus tekstin e një vule, emrin e grupit të një numërimi, ose tekstin fillestar të një kutie teksti ose thirrjeje.

## Veglat me të cilat fillon

Një sandukë e re ka gjashtë: "Re rishikimi" (e kuqe), "Re pyetjeje" (blu), "Theksues i verdhë", "Thirrje RFI" (blu, fillon me "RFI: "), "Verifiko në terren" (një thirrje portokalli që thotë "Verifiko në terren.") dhe "Miratuar me shënime" (një vulë).

## Vizato me një vegël

1. Hap skedën {{ui:Veglat}}.
2. Kliko një vegël. Duket e shtypur, dhe vegla përkatëse e shiritit të veglave ndizet.
3. Vizato si zakonisht. {{ui:Vetitë}} thotë "Vizatim me "<vegël>" nga sanduka e veglave."

Ndërsa një vegël e sandukës është e ndezur, ndryshimet që bën në {{ui:Vetitë}} përpara vizatimit zbatohen për atë vegël për momentin, pa ndryshuar veglën e ruajtur ose cilësimet e tua normale të veglave. Zgjedhja e një butoni të shiritit të veglave, ose shtypja e tastit të një vegle, kthehet te vegla e thjeshtë.

## Ruaj veglën tënde

1. Vizato një shënim dhe stiloje siç dëshiron: ngjyrën, vijën, mbushjen, temën, tekstin e vulës.
2. Zgjidhe.
3. Zgjidh {{ui:Ruaj të zgjedhurën si vegël}} te skeda {{ui:Veglat}}, ose {{ui:Ruaj si mjet}} në {{ui:Vetitë}}.
4. Shkruaj një {{ui:Emri i veglës}} dhe zgjidh {{ui:Ruaj veglën}}.

Rezultati: vegla shtohet në fund të sandukës, dhe skeda {{ui:Veglat}} hapet për ta shfaqur.

## Vula të bëra nga një zgjedhje

Zgjidh disa shënime (ose përmbajtje faqeje me veglën {{ui:Përmbajtja}}) dhe zgjidh {{ui:Ruaje zgjedhjen si vulë…}} te {{ui:Më shumë}} ose në menunë me klikim të djathtë. Sanduka merr një vulë që i mban të gjitha ("Vulë: 3 shënime bashkë"). Kliko, pastaj kliko mbi çdo fletë: shënimet bien bashkë, të qendërzuara aty ku klikon, si shënime të reja me emrin tënd; përmbajtja e faqes vizatohet në faqe aty. Këto vula ruhen dhe ndahen me sandukën si çdo vegël tjetër.

## Hiq një vegël

Zgjidh × në fund të rreshtit të veglës, pastaj {{ui:Hiq}}. Shënimet e vizatuara tashmë me të mbeten ashtu si janë.

## Ku mbahet sanduka

Sanduka ruhet **në këtë shfletues, në këtë kompjuter**. Një shfletues ose kompjuter tjetër ka sandukën e vet (duke filluar me gjashtë të parazgjedhurat), një dritare private e harron kur mbyllet, dhe pastrimi i të dhënave të kësaj faqeje në cilësimet e shfletuesit e fshin.

Nëse shfletuesi nuk e ruan dot (ruajtja është çaktivizuar, ose është plot), shiriti i gjendjes thotë: "Sanduka e veglave nuk mund të mbahej në këtë shfletues (ruajtja është joaktive ose plot). Eksportoje për ta mbajtur."

:::safari
Safari mund të pastrojë të dhënat e ruajtura të një faqeje kur nuk e ke përdorur faqen për një kohë. Eksporto sandukën herë pas here, që ta importosh përsëri.
:::

**Eksporto sandukën si kopje rezervë**, veçanërisht pasi të ndërtosh vegla të cilave u mbështetesh.

## Ndaj një sandukë me zyrën tënde

1. Përgatit veglat një herë.
2. Zgjidh {{ui:Eksporto}}. Merr "MarkupCraft tool chest.json".
3. Vendose atë skedar aty ku zyra mban standardet e saj, ose dërgoje rreth.
4. Të tjerët zgjedhin {{ui:Importo}} në skedën e tyre {{ui:Veglat}} dhe zgjedhin skedarin.

Rezultati: "U importuan 12 vegla nga "MarkupCraft tool chest.json"." Veglat që vijnë nga e njëjta sandukë zëvendësojnë kopjet e tyre më të vjetra, kështu që importimi i një sandukeje zyre të përditësuar i rifreskon ato vegla në vend që t'i dyfishojë; vegla të reja shtohen. Një sandukë mban deri në 500 vegla.

MarkupCraft kontrollon çdo vlerë në një skedar të importuar dhe kalon atë që nuk mund ta përdorë ("2 të kapërcyera (të papërdorshme)"). Skedarët që nuk janë sandukë refuzohen: "Ky skedar nuk është një sandukë veglash e MarkupCraft." ose "Ky skedar nuk është një sandukë veglash (nuk është JSON)."

Skedarët e sandukës së veglave nga programe të tjera shënimesh nuk mund të importohen.
