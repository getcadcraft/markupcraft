---
title: 以十種方式繪製圓弧
summary: 使用圓弧工具，在頁面上方的方塊中選取十種方法之一，並以點選或輸入方式設定角度、長度、半徑或方向。
keywords: 圓弧, 曲線, 圓形圓弧, 三點圓弧, 起點圓心終點, 圓心起點終點, 角度, 弦長, 半徑, 方向, 切線, 輸入數字, 圓弧方法, 繪製圓弧
from: 0a5d904f
---

{{ui:Arc}}工具（{{key:O}}）可繪製圓弧。除了一般的三次點選之外，還提供十種定義圓弧的方式，適用於已知半徑、角度或圓心，而非曲線上的一點的情況。

## 操作內容

選取{{ui:Arc}}工具，選擇{{ui:Arc method}}，然後以點選或輸入數字的方式繪製圓弧。

## 步驟

1. 在{{ui:Draw}}工具中選擇{{ui:Arc}}，或按{{key:O}}。
2. 在頁面上方的方塊中，選擇{{ui:Arc method}}下的方法：{{ui:3-Point}}、{{ui:Start, Center, End}}、{{ui:Start, Center, Angle}}、{{ui:Start, Center, Length}}、{{ui:Start, End, Angle}}、{{ui:Start, End, Direction}}、{{ui:Start, End, Radius}}、{{ui:Center, Start, End}}、{{ui:Center, Start, Angle}}或{{ui:Center, Start, Length}}。
3. 依狀態列的提示，一次完成一個步驟。每個步驟都會要求你點選起點、圓弧通過的一點、圓心或終點。
4. 當步驟要求輸入角度、弦長、方向或半徑時，可移動指標後點選，或輸入數字後按{{key:Enter}}。
5. 完成最後一個步驟後，圓弧即會建立。選取它，並可像其他標記一樣在{{ui:Properties}}中重新設定樣式。

## 注意事項

- {{key:Esc}}會取消圓弧；{{key:Backspace}}會復原上一個步驟。
- 負號會使角度或長度以順時針方向計算。對於半徑，負號會改走較長的那一側。方向以度為單位：向右為0，向上為90。
- 若這些點無法形成圓弧（三點共線、兩點位於同一位置，或半徑太小而無法到達另一端），狀態列會說明此情況；請選取其他點。
- 其他繪圖工具請見 [標記類型](topic:markup-types)。
