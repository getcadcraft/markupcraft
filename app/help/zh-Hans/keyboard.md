---
title: 键盘和鼠标
summary: MarkupCraft 能识别的每个按键、鼠标操作和触摸手势（分组列出），以及浏览器保留的快捷键。
keywords: 键盘, 快捷键, 热键, 按键, 鼠标, 滚轮, 右键, 中键, 触控板, 触摸, 手势, 捏合, 空格平移
from: 7bf207ec
---

写作{{key:Mod}}的快捷键在 Mac 上可用 ⌘ 或 Control，在 Windows 和 Linux 上可用 Ctrl。工具字母键仅在你没有在输入框中输入时生效；输入文字时，字母只是普通字符。另见[按键、鼠标和触控板](common:keys)。

## 工具

| 按键 | 工具 |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Content}}：页面自身的线条、图片和文字（参见[更改页面自身内容](topic:page-content)） |
| {{key:P}} | {{ui:Pen}} |
| {{key:I}} | {{ui:Highlight}} |
| {{key:L}} | {{ui:Line}} |
| {{key:A}} | {{ui:Arrow}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polyline}} |
| {{key:G}} | {{ui:Polygon}} |
| {{key:C}} | {{ui:Cloud}}（拖出一个框） |
| {{key:Shift+C}} | {{ui:Free cloud}} |
| {{key:K}} | {{ui:Callout}} |
| {{key:T}} | {{ui:Text}} |
| {{key:N}} | {{ui:Note}} |
| {{key:S}} | {{ui:Stamp}} |
| {{key:M}} | {{ui:Length}} |
| {{key:Q}} | {{ui:Area}} |
| {{key:U}} | {{ui:Count}} |
| {{key:O}} | {{ui:Arc}} |
| {{key:X}} | {{ui:Angle}} |

{{ui:Calibrate}}没有快捷键：请使用其工具栏按钮，或状态栏中的比例按钮。按住{{key:Alt}}时，工具字母键会被忽略。

## 绘制时

| 按键或操作 | 作用 |
|---|---|
| 绘制时按住{{key:Shift}} | 直线、箭头、长度和多段线的边以 45° 为步长；矩形、椭圆和框选云线为正方形或正圆；画笔和高亮笔画为一条直线 |
| 双击、{{key:Enter}}或右键单击 | 完成多段线、多边形、自由云线或面积 |
| {{key:Backspace}} | 删除多段线、多边形、自由云线或面积的最后一个点 |
| {{key:Esc}} | 取消正在绘制的内容；没有进行中的操作时，清除选择；没有选中对象时，返回{{ui:Select}}工具 |
| {{key:Mod+Enter}} | 结束在文字框、标注框或便笺中的输入（或在其外单击） |
| 输入时按{{key:Esc}} | 取消正在输入的文字 |
| 使用{{ui:Count}}时按住{{key:Shift}}单击 | 删除所选计数组中最近的一个点 |

## 选择和编辑

| 按键或操作 | 作用 |
|---|---|
| 单击 | 选择一个批注 |
| 按住{{key:Shift}}单击 | 将批注加入选择或从选择中移除 |
| 在空白图纸上从左向右拖动 | 选择完全位于窗口内的对象 |
| 在空白图纸上从右向左拖动 | 选择与窗口相交的对象 |
| {{key:Mod+A}} | 选择此图纸上的所有批注 |
| 拖动已选中的批注 | 移动它（按住{{key:Shift}}：沿 45° 步长） |
| 拖动控制点 | 调整大小或改变形状（按住{{key:Shift}}：保持比例或 45°） |
| 方向键 | 将选择对象微移一个屏幕像素（按住{{key:Shift}}：十个像素） |
| 双击，或{{key:Enter}} | 编辑文字框、标注框或便笺的文字；对于图章，打开{{ui:Properties}} |
| {{key:Delete}}或{{key:Backspace}} | 删除所选内容 |
| {{key:Esc}} | 取消全部选择 |
| {{key:Mod+Z}} | 撤销 |
| {{key:Mod+Y}}或{{key:Mod+Shift+Z}} | 重做 |

## 剪切、复制和粘贴

相同的命令位于工具栏的{{ui:Edit}}组（{{ui:Copy}}、{{ui:Paste}}）及其{{ui:More}}菜单中，每个命令都附有对应的快捷键。每个命令都是一个撤销步骤。参见[复制、粘贴和创建副本](topic:select-and-edit#copy-paste-and-duplicate)。

| 按键 | 作用 |
|---|---|
| {{key:Mod+X}} | 剪切：复制所选内容并删除 |
| {{key:Mod+C}} | 复制所选内容 |
| {{key:Mod+V}} | 粘贴。指针位于图纸上时，副本居中于指针所指处；否则粘贴在原对象旁边。设置中可以让粘贴始终位于原对象旁边。 |
| {{key:Mod+Shift+V}} | 原位粘贴：粘贴到图纸上的同一位置，可以是本图纸或其他图纸 |
| {{key:Mod+D}} | 在所选内容旁边创建副本（剪贴板内容保持不变） |

## 帮助

| 按键 | 作用 |
|---|---|
| {{key:F1}} | 打开或关闭本帮助（位于侧边的面板；图纸仍可使用）。也可使用顶部栏中的{{ui:Help}}。 |
| 在帮助中按{{key:Esc}} | 关闭帮助 |

:::mac
在大多数 Mac 键盘上，按住**fn**（或地球仪键）再按{{key:F1}}，或使用{{ui:Help}}。参见[按键、鼠标和触控板](common:keys#function-keys-on-a-mac)。
:::

## 文件和图纸

| 按键 | 作用 |
|---|---|
| {{key:Mod+N}} | 新建空白页面（当浏览器允许页面使用该按键时；参见[从空白页面开始](topic:open-a-plan-set#start-with-blank-pages)） |
| {{key:Mod+O}} | 打开 PDF |
| {{key:Mod+P}} | 打印（参见[打印，以及更改页面](topic:pages-and-printing)） |
| {{key:Mod+F}} | 在图纸中查找文字（参见[查找文字](topic:find-text)） |
| 按住{{key:Mod}}单击已链接的批注 | 跳转到其图纸链接；{{key:Alt+Left}}返回（参见[图纸链接](topic:sheet-links)） |
| {{key:Mod+S}} | 保存已批注的副本 |
| {{key:PageDown}} / {{key:PageUp}} | 下一张 / 上一张图纸 |
| 在{{ui:Search sheets}}中按{{key:Enter}} | 打开第一个匹配的图纸 |
| 在{{ui:Write a reply}}中按{{key:Mod+Enter}} | 发送回复 |

## 缩放和平移

| 按键或操作 | 作用 |
|---|---|
| 鼠标滚轮 | 以指针为中心放大或缩小（滚轮从不滚动页面） |
| {{key:Ctrl}} + 滚轮 | 更快速地缩放 |
| {{key:Plus}}或{{key:Minus}}（也可配合{{key:Mod}}） | 以图纸中心为基准放大或缩小；{{key:=}}也可作为加号使用 |
| {{key:Mod+0}} | {{ui:Fit page}} |
| {{key:Mod+9}} | {{ui:Fit width}} |
| 按住鼠标中键拖动 | 平移 |
| 按住鼠标右键拖动 | 平移（多段线绘制过程中除外） |
| 按住{{key:Space}}并拖动 | 平移 |
| 未选中对象时按方向键 | 平移 |
| {{key:Ctrl+Shift+F}} | 屏幕模式：普通、全屏、隐藏栏的全屏（在所有计算机上均使用 Control 键） |

:::mac
**在触控板上：**双指滚动可缩放。在 Chrome、Edge 和 Firefox 中，捏合也可缩放。按住{{key:Space}}拖动，或使用{{ui:Pan}}工具进行平移。双指点按即为右键单击，并会结束多段线。此处按住 Control 单击可能会作为普通单击，而非右键单击，因此请使用双指点按。
:::

:::touch
## 触摸

| 手势 | 作用 |
|---|---|
| 单指 | 使用当前工具绘制，或进行选择 |
| 双指 | 捏合以围绕其中心缩放，移动以平移 |
| 绘制过程中第二根手指 | 取消当前笔画，改为缩放 |
| 双击（轻触两次） | 结束多段线、多边形、自由云线或面积 |

计数点、便笺、多段线顶点以及两点工具的第二个点，都会在手指抬起时放置。参见[在 iPad 或触摸屏上审阅](topic:review-on-a-tablet)。
:::

## 浏览器保留的快捷键

- {{key:Mod+W}}、{{key:Mod+T}}、{{key:Mod+N}}和{{key:Mod+Q}}属于浏览器。在电脑上，若关闭含有未保存批注的标签页或窗口，则会在浏览器弹出“离开网站？”提示之后丢失这些批注。
- 大多数浏览器将{{key:Mod+N}}用于新建窗口，因此在浏览器标签页中请使用工具栏中的{{ui:New}}；桌面应用和 Studio 会将该按键交给 MarkupCraft。
- 应用拥有键盘焦点时，MarkupCraft 会从浏览器手中接管{{key:Mod+O}}、{{key:Mod+S}}、{{key:Mod+D}}、{{key:Mod+A}}、{{key:Mod+V}}、{{key:Mod+Shift+V}}、{{key:Mod+0}}、{{key:Mod+Plus}}和{{key:Mod+Minus}}；选中批注时，还会接管{{key:Mod+C}}和{{key:Mod+X}}。{{key:Mod+,}}会打开{{ui:Settings}}。若要缩放整个浏览器页面，请使用浏览器菜单。
- {{key:Mod+9}}在某些浏览器中会在 MarkupCraft 接收之前跳转到最后一个浏览器标签页。若发生这种情况，请使用图纸下方的{{ui:Fit width}}。
- 全屏时按{{key:Esc}}也会退出全屏。

## 按键无反应时

- **正在输入框中输入。**先在图纸上单击。（使用绘制工具单击会直接绘制；之后请按{{key:Esc}}，或使用{{key:Mod+Z}}。）
- **对话框已打开。**对话框关闭之前，按键由对话框接收。
- **刚单击了工具栏按钮**，此时方向键或{{key:Space}}会作用于该按钮。请将指针移到图纸上后使用滚轮或中键，或直接按工具字母键，而不是单击按钮。

## “移动”的位置

没有“移动”命令：选中批注后拖动即可（按住{{key:Shift}}可保持 45° 步长）。定位点使用{{ui:Move pin}}移动，页面使用{{ui:Move page earlier}}或{{ui:Move page later}}移动。
