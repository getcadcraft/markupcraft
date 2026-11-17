---
title: Pagsamahin ang edit ng dalawang tao sa iisang PDF
summary: Hayaan ang git, Fossil o Mercurial na pagsamahin ang dalawang na-markup na kopya ng parehong PDF, markup kada markup, kasama ang mga note.
keywords: merge, git, fossil, mercurial, version control, conflict, three-way, cadcraft merge, gitattributes, markups, notes, team, two copies
from: a450a9ef
---

Dalawang tao ang nagma-markup sa parehong PDF sa dalawang kopya. Kung magkaibang markup ang hinawakan nila, maaaring pagsamahin ng isang programa ang mga kopya sa halip na gawin ito nang manu-mano.

## Ano ang nagpapagana nito

Ang bawat markup na sine-save ng MarkupCraft ay may sariling pangalan (ang id nito) sa loob ng PDF, at hindi ito nagbabago. Hinahanap ng merge ang mga markup gamit ang pangalang iyon, hindi ayon sa puwesto nila sa file, dahil nire-renumber ng bawat programa ang mga puwesto kapag nagsa-save. Pareho ang pagtutugma sa mga note at sa sealed private note.

Hindi ginagalaw ang mga sheet: dapat magkapareho ang bilang ng pahina ng dalawang kopya. Kapag nagkaiba, pinananatili ng merge ang kopya mo gaya ng dati at sinasabi ito, dahil ang pagdaragdag o pagtanggal ng pahina ay trabaho ng tao.

## I-set up

Kailangan ng git ng dalawang linya minsan sa bawat repository:

```
# .gitattributes
*.pdf merge=cadcraft

# minsan lang, sa bawat computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Kung walang git, patakbuhin ang `cadcraft merge <base> <ours> <theirs> -o <result>`. Tatlong file ding iyon ang tinatanggap ng Fossil at Mercurial sa sarili nilang merge-tool setting. Ang task file na kasama ng drawing (`<name>.markups.json`, tingnan ang [Markup na gumagana](topic:markups-that-act)) ay pinagsasama nang pareho, bilang plain text.

## Ang mga patakaran

- Ang markup na nagbago sa isang panig lang ay kinukuha. Ang parehong pagbabago sa magkabilang panig ay kinukuha nang isang beses.
- Ang markup na nagbago sa dalawang paraan ay isang **conflict**: nananatili ang panig mo at nakalista sa ulat ang dalawa. Buksan ang resulta at ayusin nang manu-mano ang markup na iyon.
- Ang markup na idinagdag sa alinmang panig ay pinananatili. Ang inalis sa isang panig at hindi ginalaw sa kabila ay tinatanggal. Inalis sa isang panig at binago sa kabila: tinanggal, at iniulat.
- Sumusunod sa parehong patakaran ang mga layer, column, record at note.
- Hindi kailanman binubuksan ang sealed private note: pinananatili ang mga block ng magkabilang panig gaya ng mga ito.

Ang merged na file ay buong muling pagsulat ng iyong kopya, gaya ng sariling Save ng MarkupCraft. Walang ina-upload; tumatakbo ang lahat sa iyong computer.
