---
title: 用十种方法绘制圆弧
summary: 在页面上方的框中选择十种方法之一，用圆弧工具绘制圆弧，并通过点击或输入角度、长度、半径或方向来定义。
keywords: 圆弧, 曲线, 圆弧, 三点圆弧, 起点圆心端点, 圆心起点端点, 角度, 弦长, 半径, 方向, 切线, 输入数字, 圆弧方法, 绘制圆弧
from: 0a5d904f
---

{{ui:Arc}}工具（{{key:O}}）绘制圆弧。除通常的三次点击外，它还提供十种定义圆弧的方法，适用于你已知半径、角度或圆心，而不是曲线上某个点的情况。

## 你将要做什么

选择{{ui:Arc}}工具，选择一种{{ui:Arc method}}，然后通过点击或输入数字绘制圆弧。

## 步骤

1. 在{{ui:Draw}}工具组中选择{{ui:Arc}}，或按{{key:O}}键。
2. 在页面上方的框中，选择{{ui:Arc method}}下的方法：{{ui:3-Point}}、{{ui:Start, Center, End}}、{{ui:Start, Center, Angle}}、{{ui:Start, Center, Length}}、{{ui:Start, End, Angle}}、{{ui:Start, End, Direction}}、{{ui:Start, End, Radius}}、{{ui:Center, Start, End}}、{{ui:Center, Start, Angle}}或{{ui:Center, Start, Length}}。
3. 按状态行中的提示逐步操作。每一步都会要求你点击起点、圆弧经过的一个点、圆心或终点。
4. 当某一步要求角度、弦长、方向或半径时，移动指针并点击，或输入数字后按{{key:Enter}}键。
5. 完成最后一步后，圆弧即绘制完成。选中它，并像其他批注一样在{{ui:Properties}}中调整样式。

## 注意事项

- 按{{key:Esc}}键取消圆弧；按{{key:Backspace}}键撤销上一步。
- 负号表示角度或长度按顺时针方向。对于半径，负号表示取较长的那段弧。方向以度为单位：向右为 0，向上为 90。
- 如果这些点无法构成圆弧（三点共线、两点重合、半径太小无法到达另一端点），状态行会说明；请选择其他点。
- 其他绘图工具参见[批注类型](topic:markup-types)。
