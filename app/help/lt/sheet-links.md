---
title: Lapų nuorodos
summary: Padarykite, kad žymėjimas nušoktų į kitą lapą, ir susiekite kiekvieną lapo iškvietimą, pvz., 3/A-501, su jo lapu ir vaizdu vienu veiksmu naudodami paketines nuorodas.
keywords: hipersaitas, nuoroda, nuorodos, šuolis, lapo iškvietimas, detalės iškvietimas, pjūvio iškvietimas, 3/A-501, eiti į lapą, atgal, automatinė nuoroda, paketinė nuoroda, paketinės nuorodos, antraštės blokas, lapo numeris, lapo pavadinimas, vaizdas, detalė, pervardyti, priedas, PDF nuoroda
from: 86a17c37
---

Lapų nuoroda perveda jus nuo žymėjimo į kitą rinkinio lapą: nuo detalės burbulo į detalę, nuo pastabos į lapą, kurio ji nurodo.

## Susieti žymėjimą su lapu

1. Pasirinkite žymėjimą.
2. {{ui:Ypatybės}} skiltyje pasirinkite lapą po {{ui:Nuoroda į lapą}}.

Žymėjimo viršutiniame dešiniajame kampe pasirodo mažas rodyklė. Norėdami ja sekti, laikykite {{key:Mod}} ir spustelėkite žymėjimą arba pasirinkite jį ir {{ui:Ypatybės}} skiltyje pasirinkite {{ui:Eiti į …}}. {{key:Alt+Left}} grąžina į lapą, iš kurio atėjote.

Nuoroda vardija lapą pagal jo numerį, todėl ji veikia ir po rinkinio atidarymo iš naujo, ar po to, kai įdėtas naujo leidimo tarpinis lapas: ji atidaro naujausią lapą su tuo numeriu. Jei tas lapas neatidarytas, būsenos juostoje tai pasakoma.

## Susieti visus lapo iškvietimus vienu metu

Pasirinkite {{ui:Puslapiai}} › {{ui:Paketinės nuorodos…}} arba {{ui:Susieti lapų nuorodas…}} skiltyje {{ui:Ieškoti teksto}}, esančioje {{ui:Lapai}} skydelio viršuje.

1. **Patikrinkite lapų numerius.** MarkupCraft išvardija kiekvieną atidarytą lapą su numeriu ir pavadinimu, kuriuos perskaitė iš lapo antraštės bloko (ar puslapio etiketės), ir nurodo, iš kur jie paimti. Ištaisykite netinkamus ir įveskite numerį ten, kur jo nerado (antraštės blokas, kurio numeris nubrėžtas linijomis, neturi teksto, kurį būtų galima perskaityti). Tada pasirinkite {{ui:Rasti iškvietimus}}. Jūsų pataisymai yra vienas anuliavimo žingsnis, ir jie tampa puslapių etiketėmis įrašytame PDF.
2. **Peržiūrėkite sąrašą.** MarkupCraft skaito kiekvieno lapo tekstą, ieškodamas iškvietimų, pvz., „3/A-501“, „5 / A501“, „DETAIL 2 ON A-501“, burbulo su „3“ virš „A-501“ ar paprasto „A-501“ pastaboje, ir skaito kiekvieno lapo vaizdų pavadinimus (detalės numeris su lapo numeriu po juo arba didelis numeris su pavadinimu šalia). Sąrašas turi tris dalis:
   - {{ui:Bus susieta}}: kiekvienas iškvietimas, lapas, į kurį jis veda, ir vaizdas tame lape. Atžymėkite tuos, kurių nenorite. Jei vaizdas nerastas (iškvietimas į vaizdą 7 lape, kuriame yra vaizdai nuo 1 iki 6), pasirinkite vaizdą iš sąrašo šalia arba palikite {{ui:Visas lapas}}.
   - {{ui:Nesusieta}}: lapų numeriai, kurių nė vienas atidarytas lapas neturi, ir kiek iškvietimų nurodo kiekvieną. Pasirinkite lapą, kurį kiekvienas reiškia (pvz., lapą, kuris buvo perkeltas kitu numeriu), ir visi iškvietimai į tą numerį susiejami su juo. Arba palikite nesusietą.
   - Kiek iškvietimų jau susieta ir veda į tinkamą vietą. Jie paliekami kaip yra.
3. Pasirinkite {{ui:Sukurti nuorodas}}.

Kiekvienas iškvietimas gauna ploną mėlyną rėmelį, kuris yra lapo nuoroda. {{key:Mod}}+spustelėjimas ant jo atveria lapą, priartintą iki vaizdo. Vienas {{key:Mod+Z}} pašalina visas.

Kodai, panašūs į lapų numerius, bet iškvietimais nesantys, pvz., R-19 ar W12X26, praleidžiami: iškvietimas turi atitikti paties rinkinio lapų numerių formą. Paties lapo numeris, jo antraštės bloke ir vaizdų pavadinimuose, niekada nelaikomas iškvietimu. Skenuotuose lapuose nėra teksto, kurį būtų galima perskaityti: pirmiausia naudokite {{ui:Skaityti tekstą (OCR)…}}, arba susiekite jų iškvietimus po vieną.

## Paleiskite iš naujo, kai rinkinys pasikeičia

Paketines nuorodas galima paleisti kiek norite kartų:

- **Pridėtas lapas**, pvz., priedas su A-601: atidarykite jo failą ir paleiskite paketines nuorodas dar kartą. Iškvietimai į A-601, kurie anksčiau nesusijo, dabar susieja.
- **Lapas perkeltas kitu numeriu**: ištaisykite jo numerį 1 žingsnyje. Paketinių nuorodų sukurtos nuorodos, kurios nebeberanda savo lapo, išvardijamos skiltyje {{ui:Nesusieta}}; pasirinkę lapą kartą, visos jos seka jį. Nuorodos, perkeltos į kitą vaizdą, atnaujinamos.
- Nuorodos, kurias sukūrėte rankiniu būdu {{ui:Ypatybės}} skiltyje, niekada nekeičiamos.

## Įrašytame PDF

Nuoroda į lapą tame pačiame PDF taip pat įrašoma kaip PDF nuoroda, todėl kitos žiūryklės paspaudus irgi nušoka ten. Nuoroda su vaizdu atidaro tą vaizdą kitoje žiūryklėje (PDF „fit rectangle“ šuolis); nuoroda be vaizdo atidaro visą lapą. Nuorodos į lapą kitame rinkinio faile veikia tik MarkupCraft programoje.
