---
title: 合并两人对同一 PDF 的编辑
summary: 让 git、Fossil 或 Mercurial 按批注逐项合并同一 PDF 的两份已批注副本，包括便笺。
keywords: 合并, git, fossil, mercurial, 版本控制, 冲突, 三方, cadcraft merge, gitattributes, 批注, 便笺, 团队, 两份副本
from: a450a9ef
---

两人在两个副本中批注同一个 PDF。如果他们修改的是不同的批注，则可以由程序合并这两个副本，而无需手动操作。

## 工作原理

MarkupCraft 保存的每个批注都会在 PDF 中携带其自己的名称（即其 id），且该名称永不改变。合并时依据此名称查找批注，而不是依据其在文件中的位置，因为每个程序在保存时都会重新编号。便笺和密封的私人便笺同样以此方式匹配。

图纸本身从不被修改：两个副本必须具有相同的页数。如果页数不同，合并将保留你的副本不变并给出提示，因为增加或删除页面需要人工处理。

## 设置

Git 每个代码库需要两行设置，只需设置一次：

```
# .gitattributes
*.pdf merge=cadcraft

# 每台计算机上执行一次
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

不使用 git 时，运行`cadcraft merge <base> <ours> <theirs> -o <result>`。Fossil 和 Mercurial 在各自的合并工具设置中接受相同的三个文件。随图纸一同保存的任务文件（`<name>.markups.json`，参见[将批注设为任务](topic:markups-that-act)）以纯文本形式，以同样的方式合并。

## 规则

- 只在一侧修改的批注会被采用。两侧做出相同修改的批注只采用一次。
- 同一批注在两侧以不同方式修改即为**冲突**：保留你的一侧，报告中列出两侧内容。打开结果并手动修复该批注。
- 任一侧新增的批注都会保留。在一侧删除而另一侧未改动的批注会被删除。在一侧删除而另一侧做了修改的：删除，并给出报告。
- 图层、列、记录和便笺遵循相同规则。
- 密封的私人便笺绝不会被打开：双方的数据块均按原样保留。

合并后的文件是对你副本的完整重写，与 MarkupCraft 自身的保存相同。不会上传任何内容；全部在你的计算机上运行。
