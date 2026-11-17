---
title: 合併兩人對同一PDF的編輯
summary: 讓 git、Fossil 或 Mercurial 逐一標記地合併同一 PDF 的兩份已標記副本，包括便利貼。
keywords: 合併, git, fossil, mercurial, 版本控制, 衝突, 三方, cadcraft merge, gitattributes, 標記, 便利貼, 團隊, 兩份副本
from: a450a9ef
---

兩人在兩份副本中各自標記同一個 PDF。若他們標記的是不同的標記，這兩份副本便可由程式合併，無須人工逐一處理。

## 運作方式

MarkupCraft 儲存的每個標記都會在 PDF 中帶有自己的名稱（其 ID），且此名稱永遠不會改變。合併會依此名稱尋找標記，而不是依其在檔案中的位置，因為每個程式在儲存時都會重新編號位置。便利貼與已密封的私人便利貼也以相同方式比對。

圖紙本身永遠不會被修改：兩份副本的頁數必須相同。若頁數不同，合併會保留本機副本不變並加以說明，因為新增或移除頁面需由人工處理。

## 設定

Git 每個儲存庫需要設定兩行（只需一次）：

```
# .gitattributes
*.pdf merge=cadcraft

# 每台電腦只需設定一次
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

若不使用 git，請執行 `cadcraft merge <base> <ours> <theirs> -o <result>`。Fossil 與 Mercurial 會在各自的合併工具設定中使用同樣的三個檔案。隨圖面一起的工作檔案（`<name>.markups.json`，請參閱[將標記設為工作](topic:markups-that-act)）同樣以純文字方式合併。

## 規則

- 僅在一側變更的標記會被採用。兩側相同的變更只採用一次。
- 同一標記以兩種方式變更時為**衝突**：保留本機一側，且報告會列出兩者。請開啟結果檔案，並手動修正該標記。
- 任一側新增的標記都會保留。一側刪除、另一側未變更的標記會被刪除。一側刪除、另一側有變更：會被刪除，並加以報告。
- 圖層、欄位、紀錄與便利貼遵循相同規則。
- 已密封的私人便利貼永遠不會被開啟：兩側的區塊皆維持原狀保留。

合併後的檔案會完整重寫本機副本，與 MarkupCraft 自身的儲存方式相同。不會上傳任何內容，全部皆在本機電腦上執行。
