---
title: 疑難排解
summary: MarkupCraft 顯示的訊息與處理方式，以及看似無法運作時的修復方法。
keywords: 問題, 錯誤, 無法運作, 說明, 訊息, 無法開啟, 無法儲存, 密碼, 受保護, 拒絕量測, 校正, 離線, 空白, 緩慢, 遺失的標註, 問號
from: bb650b39
---

大多數問題都會在螢幕底部的狀態列中說明，應先閱讀狀態列。

## 開啟檔案

**"MarkupCraft opens PDF files. "x" is not a PDF."**
MarkupCraft 只會開啟 PDF 檔案，"x" 不是 PDF。選取或拖曳的是其他檔案。只能開啟 PDF，請先從 CAD 程式將圖面匯出為 PDF。

**'"name" needs a password to open. Open an unprotected copy.'**
「"name" 需要密碼才能開啟。」改為開啟未受保護的副本。此 PDF 有密碼保護。向寄件者索取未受保護的副本，或在知道密碼的 PDF 程式中開啟，並另存不含密碼的副本。

**'"name" could not be read as a PDF (…)'**
「"name" 無法作為 PDF 讀取（…）」。檔案已損毀，或並非真正的 PDF（下載不完整、電子郵件附件被截斷）。重新下載。若其他 PDF 程式能開啟它，可用其「另存新檔」功能製作乾淨的副本，再開啟該副本。

**"Some files did not open"**
「部分檔案未能開啟」。同時開啟多個檔案時，此對話方塊會列出失敗的檔案及原因。其餘檔案已開啟。

**"The PDF reader could not load: …"**
「PDF 讀取器無法載入：…」。無法取得 PDF 引擎。線上時：重新整理頁面後再試，並確認防火牆或內容封鎖程式未封鎖此網站。離線時：MarkupCraft 未在此瀏覽器中儲存供離線使用（頂端列未顯示「離線就緒」）。連上網路後選擇{{ui:儲存供離線使用}}，並等待顯示「離線就緒」。參見[離線使用](common:offline)。

**"Some annotations may show twice on screen" or "Extra annotation details could not be read"**
「部分註解可能會在螢幕上重複顯示」或「無法讀取額外的註解細節」。檔案中既有的註解較為特殊。MarkupCraft 仍會盡量開啟它們；依賴之前請先檢查。儲存仍可正常運作。

**The sheet has the wrong name, or "page 3"**
參見[圖紙如何取得名稱](topic:open-a-plan-set#how-sheets-get-their-names)。掃描的圖紙沒有可讀取的文字，應改用{{ui:重新命名圖紙}}。

**The same sheets appear twice**
同一檔案被開啟了兩次。選擇{{ui:關閉}}（必要時先儲存），然後重新開啟圖紙集。

## 繪圖與選取

**Nothing happens when I click on the sheet**
檢查工具列中哪個工具處於按下狀態，並閱讀狀態列。使用{{ui:矩形}}、{{ui:橢圓}}與{{ui:雲形框}}時，只點按而不拖曳不會繪出任何內容，需要拖曳。使用{{ui:折線}}、{{ui:多邊形}}、{{ui:自由雲形線}}與{{ui:面積}}時，正在加入頂點，以按兩下或按{{key:Enter}}鍵結束。

**"A polygon needs at least 3 points." (or 2 for a polyline)**
「多邊形至少需要 3 個點。」（折線則為 2 個點。）結束前再多點按幾個點。

**"Nothing typed, so no text was added."**
「未輸入任何內容，因此未新增文字。」文字方塊與註解框只有在含有文字時才會保留。重新繪製，並在點按其他地方前先輸入。

**"The two points are the same. Click two different points."**
「兩點相同。」點按兩個不同的點。對於直線、箭頭、長度與校正，兩端必須彼此分開。拖曳，或在不同位置點按兩次。

**I cannot move or delete a markup; it has a gray dashed box**
這是隨檔案附帶的唯讀註解（例如文字螢光標示）。MarkupCraft 會保持其原狀，只能回覆。狀態列會顯示「唯讀的標註會依檔案原樣保留」。

**My keys type letters into a box instead of choosing tools**
游標位於文字方塊中（回覆、{{ui:屬性}}中的欄位，或圖紙搜尋）。先在圖紙區域的空白處點按，或若正在編輯標註文字，則按{{key:Esc}}鍵。

**{{key:Space}} does not pan, or arrow keys do nothing**
剛點按了工具列按鈕，因此它仍保有鍵盤焦點。改用滑鼠中鍵拖曳，或在開啟{{ui:選取}}的狀態下於圖紙上點按一次，然後再試一次。另見[鍵盤與滑鼠](topic:keyboard#when-a-key-does-nothing)。

**A pinch on the touch screen left a mark**
拖曳工具（觸控筆、雲形框、矩形）在第二根手指碰觸前已開始，並在取消前完成。按{{ui:復原}}。若要縮放，應讓兩根手指同時放下。

## 量測

**"Calibrate this sheet first: pick two points a known distance apart, or choose its scale. Then measure."**
「請先校正此圖紙：選取兩個距離已知的點，或選擇其比例，然後再量測。」每張圖紙在使用{{ui:長度}}或{{ui:面積}}前都需要各自的比例。MarkupCraft 已切換到{{ui:校正}}：點按已知尺寸的兩端並輸入其長度，或點按狀態列中的比例按鈕並選擇比例。參見[校正圖紙並量測](topic:calibrate-and-measure)。

**'That is not a length MarkupCraft understands.'**
「MarkupCraft 無法理解此長度。」請依以下格式輸入，例如 `24'-0"`、`12' 6 1/2"`、`7.2 m` 或 `900 mm`。參見[單位、長度與比例](topic:units-and-scales)。

**Measurements are a bit off, or wildly off**
- 非全尺寸 PDF 上的預設比例會量測錯誤。改以較長的已知尺寸進行校正。
- 千分位逗號被讀成小數點：`1,200 mm` 代表 1.2 mm。應輸入 `1200 mm`。
- 點按端點時請放大檢視。
- 圖面可能未按比例繪製（"NTS"）。

**"Select a count group first, then Shift+click a mark to remove it."**
「請先選取計數群組，然後以{{key:Shift}}+點按標記來移除。」選擇{{ui:選取}}，點按計數群組，然後再次選擇{{ui:計數}}，並以{{key:Shift}}+點按圓點。

## 儲存

**"This PDF is protected (encrypted), so a marked-up copy cannot be written."**
「此 PDF 受保護（已加密），因此無法寫入附有標記的副本。」檔案禁止變更。向他人索取未受保護的副本。在此期間仍可以 CSV 或 BCF 格式匯出標註清單。

**"The PDF writer could not load: …"**
「PDF 寫入器無法載入：…」。通常是因為離線，且應用程式未儲存供離線使用（頂端列中沒有「離線就緒」）。標註仍保留在索引標籤中：保持開啟，連上網路後再次選擇{{ui:儲存}}。然後選擇{{ui:儲存供離線使用}}，讓下次能離線運作；已儲存的副本會包含 PDF 寫入器。

**"Could not save <file>"**
「無法儲存 <file>」。對話方塊會顯示原因。標註仍保留在索引標籤中。再試一次；若再次發生，匯出 CSV 以免註解遺失，並回報此訊息。

**選擇儲存後只出現一個檔案**
瀏覽器阻擋了額外的下載。查看網址列中的通知，允許此網站下載多個檔案，然後再次儲存。

**找不到已儲存的檔案**
檔案已存到瀏覽器的下載資料夾。開啟瀏覽器的下載清單（在 Chrome 與 Edge 中：{{pick:mac=Option-Command-L|windows linux=Ctrl+J}}；在 Firefox 與 Safari 中：工具列上的下載按鈕）以查看位置。參見[瀏覽器與電腦](common:browsers)。

**部分文字在其他 PDF 檢視器中顯示為「?」**
西歐字元集以外的字元，在副本中會顯示為「?」。儲存訊息會計算這些字元。參見[儲存附有標記的 PDF](topic:save-the-marked-up-pdf)。

**印章顯示的是明天（或昨天）的日期**
印章日期採用 UTC。參見[圖章與便利貼](topic:stamps-and-notes)。

## 離線使用

**離線按鈕顯示「無法儲存」**
部分應用程式檔案未下載。檢查連線並再次點按按鈕；按鈕會顯示「儲存中：N / M」的進度，直到顯示「離線就緒」。

**離線按鈕顯示「無法離線使用」**
此瀏覽器視窗無法保存離線副本：可能是私密視窗，或電腦的原則禁止。以一般視窗開啟 MarkupCraft 後再試一次。

**離線時，應用程式為舊版本**
離線副本為上次儲存的版本。連上網路後，點按「離線就緒」並選擇「再次儲存（取得最新版本）」。若要釋放空間，選擇「移除離線副本」。參見[離線使用](common:offline)。

**說明無法開啟**
按{{key:F1}}鍵（Mac 上需搭配 **fn**），或選擇頂端列中的{{ui:說明}}。離線時也能使用。

## 遺失的內容

**關閉或重新整理索引標籤後，標註不見了**
在同一瀏覽器中再次開啟 MarkupCraft：它會以「要復原尚未儲存的內容嗎？」提供未儲存的工作。選擇{{ui:復原}}並儲存 PDF。副本最多保留 30 天；私密視窗或清除網站資料後則不會保留。參見[復原尚未儲存的內容](common:recover)。

**我的姓名、工具設定或工具箱不見了**
這些內容只保存在此瀏覽器中，且已被清除（網站資料被清除、私密視窗、其他瀏覽器或電腦，或 Safari 清理了一段時間未造訪的網站）。重新設定姓名，並匯入先前匯出的工具箱。參見[瀏覽器中保留的內容](topic:browser-storage)。

**「工具箱無法保存在此瀏覽器中（儲存功能已關閉或已滿）。匯出即可保留。」**
瀏覽器拒絕為此網站保存資料（私密模式、設定或原則封鎖儲存，或已滿）。變更後匯出工具箱，下次再匯入即可。

## 顯示與速度

**圖紙暫時顯得模糊**
縮放或平移時，MarkupCraft 會顯示快速的粗略顯示畫面，停止後稍候會重新繪製為清晰畫面。

**圖紙集很大時一切都很慢**
關閉其他佔用大量資源的索引標籤，減少同時開啟的檔案數，並避免在超大圖紙上放大到最大倍率。參見[同時處理多個檔案](topic:several-files#big-sets)。

**圖紙呈深色底、淺色線條**
目前為{{ui:模型}}主題。在頂端列選擇{{ui:紙張}}，即可讓線條呈白底深色。標註與儲存的 PDF 不受影響。
