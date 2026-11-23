---
title: Izisekelo ze-BCF
summary: Okuqukethwe ukuthunyelwa kwe-BCF okuvela ku-MarkupCraft, indlela yokusisebenzisa namathuluzi okuhlanganisa i-BIM, nemikhawulo yakho.
keywords: bcf, bcfzip, bim collaboration format, izinkinga, ukuhlelwa, ukuphikisana, izihloko, indawo yokubuka, isithombe, openbim, buildingsmart, thumela izinkinga
from: 0de26175
---

I-BCF (BIM Collaboration Format) iyifomethi evulekile yefayela yokudlulisa izinkinga phakathi kwamathuluzi e-BIM. Amaprogramu amaningi okuhlanganisa imodeli nokudala angangenisa ifayela le-`.bcfzip` njengohlu lwezinkinga. I-MarkupCraft ibhala **BCF 2.1**.

## Yenza ifayela le-BCF

1. Vula ithebhu ethi {{ui:Okumakiwe}}.
2. Hlunga uhlu ukuze kube yilokho ofuna ukukuthumela, isibonelo {{ui:Isimo}} "Vula". Kuphela okumakiwe okuluhlu kuzothunyelwa.
3. Khetha {{ui:BCF}}.
4. Linda kuze kwenziwe isithombe sokumaka ngakunye ("Kwenziwa izithombe ze-BCF (5 kwabangu-20)…").

Umphumela: "<name> markups.bcfzip" uyalandwa, futhi ibha yesimo itshela ukuthi iqukethe izihloko ezingaki nosayizi wefayela.

## Okuqukethwe

Ukumaka ngakunye kuba yisihloko esisodwa, **isihloko**.

| Inkambu yesihloko | Igcwaliswa ngo |
|---|---|
| Igama | Inombolo yokuhlola, isihloko nedwala, isibonelo "#4 Ifu ku-A-101 — Ipulani yomgangatho" |
| Uhlobo | Uhlobo lokumaka (Ifu, Isimemezelo, Ubude…) |
| Isimo | Vula, Yamukelwe, Yenqatshiwe noma Iqedile |
| Amalebula | Uhlobo lokumaka nedwala |
| Umbhali nezinsuku | Umbhali wokumaka, nezinsuku zokudalwa nokushintshwa |
| Obekwe kuye, usuku lokufika | Kusuka ku-inkinga yokuhlola, uma inayo |
| Incazelo | Umbhalo wayo noma izwi lesitembu, inani elilinganisiwe, amazwana, nedwala nefayela |
| Amazwana | Eyodwa ngempendulo ngayinye, nombhali nosuku |
| Isithombe | Isithombe sokumaka endaweni yaso kuleli shidi |
| Indawo yokubuka | Ukubuka ngaphezulu kwendawo yokumaka kwishidi |

Ukuthumela okumakiwe okufanayo futhi kunikeza i-ID yesihloko efanayo, ngakho ithuluzi elingenisa i-BCF lingakuqaphela njengenkinga efanayo.

## Okubuyela ngaphakathi uma ungenisa

{{ui:Ngenisa i-BCF}} ifunda amafayela e-BCF 2.0, 2.1 kanye ne-3.0 (ahlolwe kumafayela amathestu asemthethweni ayi-19 e-buildingSMART 3.0: ifunde wonke amasihloko, namazwana ayi-3 anombhalo). Ngesihloko esingesakho (inombolo yesihloko efanayo) yengeza amazwana amasha njengezimpendulo futhi ithatha isimo esisha. Esinye isihloko siba yinothi edwaleni elibizwa ngelebula yaso noma igama lefayela, uma kungenjalo edwaleni elivulekile, ngegama, incazelo, umuntu obekiwe nosuku lokufika njengombhalo wenothi, namazwana njengezimpendulo.

| Esihlokweni se-BCF | Ku-MarkupCraft |
|---|---|
| Igama, incazelo, umuntu obekiwe, usuku lokufika | Umbhalo wenothi |
| Amazwana anombhalo | Izimpendulo |
| Isimo Open, Accepted, Rejected, Completed (Closed, Resolved, Done zibalwa njenge-Completed) | Isimo sokumaka |
| Umbhali nosuku lokudalwa | Umbhali nosuku lwenothi |
| Indawo yekhamera | Indawo ishidini, kuphela kwesihloko esixhunyiwe kwishidi ngelebula noma igama lefayela |
| Ukukhethwa kwemodeli, izingxenye ezifihliwe, izindiza zokusika, izithombe | Akugcinwa: ishidi alinayo imodeli okungabonisa kuyo |

## Imikhawulo okufanele uyazi

- **Ishidi akuyona imodeli.** Indawo yokubuka ikhomba indawo yokumaka ephepheni, ilinganiswa ngamamitha ephepha. Ayidingi ithuluzi le-BIM ukuthi lifike endaweni emodelini. Sebenzisa isithombe negama leshidi ukuze uthole indawo.
- **Izimo nezinhlobo ziyezakhiwo ze-MarkupCraft** (Vula, Yamukelwe, Yenqatshiwe, Iqedile; Ifu, Isimemezelo…). Ifayela liyazichaza, njengoba i-BCF ivumela, kodwa ithuluzi elinohlu lwalo oluqinile lingazihlanganisa noma lizinake.
- **Ukungenisa kuletha amazwana, hhayi ukubuka kwemodeli.** {{ui:Ngenisa i-BCF}} yengeza izimpendulo nezimo kumakhasi owathumele, futhi yenza amanothi kwezinye izinkinga; ayikwazi ukubonisa ikhamera yemodeli. Bona [{{ui:Uhlu lokumaka}} nokuthumela](topic:markups-list-and-export#import-bcf).
- Ukuthumela okumakiwe njenge-PDF kuvame ukulula ekubuyekezweni kwemizobo. I-BCF yokuthola amazwana emizobo ohlelweni lokuhlanganisa imodeli.
