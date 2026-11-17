---
title: 菜单、按键和鼠标
summary: 选择 MarkupCraft 自带的工具栏、PDF 审阅菜单栏或功能区，为任一工具设置你自己的快捷键，在菜单之间移动工具，并设置滚轮和鼠标按键的功能。
keywords: 菜单样式, 菜单, 菜单栏, 工具栏, 功能区, 选项卡, pdf 审阅, 键盘快捷键, 热键, 按键, 自定义, 重新映射, 重新绑定, 鼠标, 滚轮, 反转, 缩放方向, 中键, 右键, 平移, 导出, 导入, 切换, 熟悉
from: 081438a6
---

MarkupCraft 的工具无论通过哪种方式访问都相同。**菜单样式**只决定它们在屏幕上的位置、名称以及使用哪些按键来选择它们。在{{ui:Settings}}（{{key:Mod+,}}）› {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}中选择一种样式；更改立即生效，本浏览器会记住该设置。

## 三种样式

| 样式 | 提供的内容 |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraft 自带的工具栏（文件、选择、绘制、修订、注释、测量、编辑）及其单字母快捷键：{{key:V}} 选择，{{key:H}} 平移，{{key:P}} 画笔，{{key:I}} 高亮，{{key:L}} 直线，{{key:A}} 箭头，{{key:R}} 矩形，{{key:E}} 椭圆，{{key:C}} 云线，{{key:K}} 标注框，{{key:T}} 文字，{{key:N}} 便笺，{{key:S}} 图章，{{key:M}} 长度，{{key:Q}} 面积，{{key:U}} 计数。这是起始样式。 |
| {{ui:PDF review}} | 一个菜单栏（{{ui:File}}、{{ui:Edit}}、{{ui:View}}、{{ui:Document}}、{{ui:Markup}}、{{ui:Measure}}、{{ui:Review}}、{{ui:Window}}），其下方是一排审阅工具，其快捷键按 PDF 审阅程序的习惯设置：{{key:V}} 选择，{{key:Shift+V}} 平移，{{key:H}} 高亮，{{key:Q}} 标注框，{{key:N}} 多边形，{{key:Shift+N}} 多段线，{{key:Shift+T}} 便笺，{{key:Shift+A}} 圆弧；测量工具使用{{key:Alt+Shift}}：{{key:Alt+Shift+K}} 校准，{{key:Alt+Shift+L}} 长度，{{key:Alt+Shift+G}} 角度，{{key:Alt+Shift+A}} 面积，{{key:Alt+Shift+C}} 计数。{{key:Alt+L}}打开批注列表。中键平移；右键单击不平移。 |
| {{ui:Ribbon}} | 以工作内容命名的选项卡：{{ui:Mark up}}（选择、绘制、云线、标注框、文字、便笺、图章）、{{ui:Measure}}、{{ui:Edit}}、{{ui:Review}}（批注列表及其导出、BCF 问题、整改清单、现场记录、工具集、比较）、{{ui:Pages}}和{{ui:View}}，另有{{ui:File}}以及用于打开、保存、撤销和重做的快捷按钮。工具保留 MarkupCraft 自己的单字母快捷键。尚未打开的面板，其按钮会先将其打开。 |

每种样式都保留{{key:Mod}}快捷键：{{key:Mod+Z}}、{{key:Mod+Y}}、{{key:Mod+S}}、{{key:Mod+O}}、{{key:Mod+P}}、{{key:Mod+C}}、{{key:Mod+X}}、{{key:Mod+V}}、{{key:Mod+D}}、{{key:Mod+A}}、{{key:Mod+F}}、{{key:Mod+0}}（适合页面）和{{key:Mod+9}}（适合宽度）；{{key:PageUp}}和{{key:PageDown}}用于切换图纸。

:::tip
属于 MarkupCraft 自身布局、但不属于所选样式的按键不会起作用，状态栏会说明其工具的新位置（“在 PDF 审阅中，标注框为 Q”）。{{key:Delete}}、{{key:Esc}}、{{key:Enter}}、{{key:Tab}}、{{key:Space}}和方向键始终保持其原有功能。在文字框、标注框或便笺中输入文字时，所有按键都作为文字输入；绘制时输入的数字仍会打开长度输入框。
:::

## 自定义

1. 选择最接近所需的样式，然后点击{{ui:Customize…}}。
2. 在{{ui:Keys and menus}}中找到工具（可使用搜索框）。点击{{ui:Add a key}}，然后按下按键，或依次按两个键以设置双字母快捷键。点击某个按键即可将其移除。
3. 使用菜单栏时，{{ui:Where it sits}}可将工具移动到另一个菜单，或移至{{ui:Keys only}}。
4. 在{{ui:Mouse}}中设置滚轮以及用于平移图纸的按键。
5. 为其命名，然后点击{{ui:Save}}。

保存内置样式会创建你自己的副本（“My PDF review”）；内置样式永远不会改变。分配给两个工具的按键会以红色显示，必须先修正才能保存。

## 鼠标

- **鼠标滚轮**：{{ui:Scroll up zooms in}}（起始设置）或{{ui:Scroll up zooms out}}，以及缩放速度。触控板捏合始终按手指移动的方向缩放。
- **用于平移图纸的按键**：中键、右键，或两者。按住{{key:Space}}并拖动，以及{{ui:Pan}}工具，始终可以平移；否则左键用于绘制和选择，因此在此处勾选左键没有任何作用。
- MarkupCraft 没有 3D 视图，因此 3D 按钮在此处无效。

## 随身携带

{{ui:Export}}会将当前使用的样式保存为一个小型 `.ccinput.json` 文件；{{ui:Import…}}则可从另一台计算机或同事处添加该文件。导入的文件只能指向 MarkupCraft 自身的工具：其中其他内容会被忽略，并在状态栏中统计。{{ui:Delete this style}}可删除你自己创建的样式。

:::note
这些设置仅保留在本浏览器中。样式卡片下方的{{ui:Use this style in every app}}会使每个应用以对应的样式打开：{{ui:PDF review}}对应其他应用的菜单栏样式，{{ui:Ribbon}}对应其功能区，MarkupCraft 自带的工具栏对应其自身样式。没有对应样式的应用将保留自己的样式。
:::

:::tip
{{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}中的工作区布局（{{ui:Ribbon and project browser}}、{{ui:Toolbox and info box}}）会根据{{ui:Ribbon}}样式的选项卡构建功能区，并根据 MarkupCraft 的工具栏构建工具箱，因此在这些布局中，每个工具的运行方式都一致。
:::

相关内容：[键盘和鼠标](topic:keyboard) · [MarkupCraft 设置](topic:settings) · [从其他批注软件迁移](topic:coming-from)
