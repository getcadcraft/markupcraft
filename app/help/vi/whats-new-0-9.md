---
title: Có gì mới trong 0.9 (trước đó)
summary: Ghi chú và bảng ghi tạm không bao giờ được in, ghi chú riêng tư được mã hóa và bản sao sạch cho khách hàng, liên kết hàng loạt cho cả bộ bản vẽ, công cụ Cung tròn với mười phương pháp, theo dõi một người duyệt khác trong Live, và sửa lỗi đánh dấu đã xóa vẫn còn trong PDF đã lưu.
keywords: có gì mới 0.9, phiên bản trước, có gì mới, 0.9, ghi chú phát hành, nhật ký thay đổi, ghi chú, bảng ghi tạm, ghi chú riêng tư, cụm mật khẩu, mã hóa, ẩn ghi chú, hiện ghi chú, bản sao sạch, ảnh chụp, liên kết hàng loạt, chú thích tờ, liên kết tờ, khối tiêu đề, số tờ, phụ lục, đánh số lại, liên kết pdf, cung tròn, phương pháp cung tròn, cung ba điểm, bán kính, theo dõi, theo tôi, live, chế độ lớp, danh sách người, đánh dấu đã xóa, chú giải công cụ, tiêu đề thẻ, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, nhiệm vụ, người được giao, ngày hạn, quá hạn, kiểm tra ngay, bản sửa đổi, so sánh, ghi âm giọng nói, quyết định, redline, tệp trả lời, người vẽ, trợ lý, mcp, vấn đề, ngôn ngữ, thiết bị nhập, bàn di chuột, số hàng thanh công cụ, lưới thuộc tính, cập nhật
from: aa3dfeb8
---

Đây là những gì đã thay đổi trong MarkupCraft 0.9, so với 0.8.1. Ý chính là các ghi chú làm việc của bạn không xuất hiện trên trang mà khách hàng nhận, và cả một bộ bản vẽ có thể được liên kết chỉ trong một lần.

## Mới

### Ghi chú, bảng ghi tạm và ghi chú riêng tư

- **Bảng ghi tạm.** Vùng xung quanh mỗi tờ là một bàn làm việc: bất cứ thứ gì được vẽ, gõ hoặc dán bên cạnh tờ đều là ghi chú và không bao giờ được in. Chọn {{ui:Hiện bảng ghi tạm}} để thu nhỏ lấy chỗ, hoặc {{ui:Chụp ảnh vào bảng ghi tạm}}, kéo một khung, rồi {{ui:Vào bảng ghi tạm}} để đặt ảnh của một phần bản vẽ bên cạnh tờ. Ảnh chụp là một hình và không thay đổi khi tờ thay đổi. Xem [Ghi chú, bảng ghi tạm và ghi chú riêng tư](topic:notes-and-pasteboard).
- **Hiện và ẩn ghi chú.** Mọi đánh dấu đều có thể là ghi chú: đặt {{ui:Đánh dấu mới là}} trong thẻ {{ui:Ghi chú}}, hoặc {{ui:Đánh dấu này là}} trong {{ui:Thuộc tính}}. {{key:Shift+H}} hoặc công tắc {{ui:Ghi chú}} dưới tờ sẽ ẩn và hiện mọi ghi chú cùng lúc. Ghi chú bị loại khỏi việc in, bản sao phẳng, danh sách và xuất; các trình đọc PDF khác không hiển thị chúng. PDF đã lưu của bạn vẫn giữ chúng cho lần mở tiếp theo trong MarkupCraft.
- **Ghi chú riêng tư.** Chọn {{ui:Đặt cụm mật khẩu}}, rồi đặt một đánh dấu thành {{ui:Ghi chú riêng tư}}. Nó được mã hóa trong tệp bằng một cụm mật khẩu ít nhất 10 ký tự, và không có cách khôi phục: không ai, kể cả chúng tôi, có thể mở nó nếu không có cụm mật khẩu. {{ui:Khóa}} cất các ghi chú riêng tư đi; {{ui:Giữ trạng thái đã mở khóa trên thiết bị này}} mặc định là tắt.
- **Lưu bản sao sạch.** {{ui:Lưu bản sao sạch}} xóa mọi ghi chú, ghi chú riêng tư và mọi thứ trên bảng ghi tạm. Hãy dùng nó cho tệp gửi cho khách hàng.

### Liên kết cả bộ

- **Liên kết hàng loạt.** Chọn {{ui:Trang}} › {{ui:Liên kết hàng loạt…}}, hoặc {{ui:Liên kết chú thích tờ…}} dưới {{ui:Tìm văn bản}} trong bảng {{ui:Tờ}}. Bước 1 liệt kê số và tên của mỗi tờ như đã đọc từ khối tiêu đề; hãy sửa những tờ sai. Bước 2 liệt kê các chú thích tìm thấy, ví dụ `3/A-501` hoặc `DETAIL 2 ON A-501`. {{ui:Sẽ liên kết}} cho biết tờ và góc nhìn của mỗi chú thích, {{ui:Chưa liên kết}} cho biết các số mà không tờ nào đang mở có, còn {{ui:Tạo liên kết}} tạo tất cả trong một bước hoàn tác. Chạy lại sau một phụ lục hoặc sau khi đánh số lại; các liên kết bạn tạo thủ công không bao giờ bị thay đổi. Liên kết có góc nhìn được lưu thành liên kết PDF, nên các trình đọc khác cũng mở được chi tiết. Xem [Liên kết tờ](topic:sheet-links).

### Bản vẽ

- **Cung tròn, mười phương pháp.** Công cụ {{ui:Cung tròn}} ({{key:O}}) giờ có một hộp {{ui:Phương pháp cung tròn}} trên trang với mười cách vẽ cung, và góc, chiều dài, bán kính cùng hướng có thể bấm hoặc gõ. Xem [Vẽ cung tròn theo mười cách](topic:draw-an-arc).

### Làm việc cùng nhau

- **Theo dõi một người duyệt.** Trong phiên Live, chọn {{ui:Theo dõi}} bên cạnh tên một người và khung nhìn của bạn sẽ di chuyển theo họ; tự di chuyển hoặc thu phóng khung nhìn của bạn sẽ dừng việc theo dõi. Người chủ phiên có thể chọn {{ui:Yêu cầu mọi người theo dõi}}. Danh sách người hiển thị màu, tên, tờ họ đang xem và thời điểm chỉnh sửa gần nhất. Xem [Theo dõi một người duyệt khác trong phiên Live](topic:follow-in-live).

## Trong mọi ứng dụng

- Chú giải công cụ là chú giải Bootstrap, mẹo khởi đầu có thể đóng, dải thẻ cuộn khi tràn, và tiêu đề thẻ trình duyệt hiển thị `<document> — MarkupCraft | CadCraft`.
- Một bảng có nhiều phần sẽ mở một phần và đóng các phần khác (một khóa cạnh dấu mũ giữ một phần luôn mở); một công tắc trong {{ui:Cài đặt}} tắt tính năng này.
- Mỗi ứng dụng bắt đầu với một bộ mặc định các đối tượng Thư viện.
- Các đơn vị trọng lượng và nhiệt độ có sẵn trong phần đơn vị của Cài đặt.

## Đã sửa

- **Đánh dấu đã xóa không còn đọc được bên trong PDF đã lưu.** Trước đây khi lưu, một chú thích đã xóa hoặc đã viết lại được gỡ khỏi trang nhưng đối tượng, cùng với văn bản của nó, vẫn còn trong tệp. Giờ khi lưu sẽ xóa các đối tượng đó. Các tệp được lưu bởi bản dựng cũ vẫn chứa chúng cho đến khi bạn lưu lại.

## Những giới hạn thực tế

- Liên kết hàng loạt được thử trên các bộ thử của chúng tôi. Bộ bản vẽ thực vẽ bong bóng theo nhiều cách, nên trên bộ của khách hàng một số góc nhìn có thể bị bỏ sót. Các tờ quét cần {{ui:Đọc văn bản (OCR)…}} trước.
- Ghi chú, ghi chú riêng tư và bảng ghi tạm được thử trong trình duyệt không giao diện và trên các tệp của chúng tôi, chưa thử trên một bộ vector lớn thực tế và chưa thử trong một phiên Live hai người thật. Đổi cụm mật khẩu chưa được xây dựng. Các bản dựng cũ hơn 0.9 không hiển thị ghi chú.
- Chế độ lớp học chính là danh sách người; nó chưa được thử với giáo viên và học sinh thực.
- Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi một người bản ngữ đọc.
- Trình cài đặt Windows chưa được ký mã (chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}); ảnh đĩa macOS chưa được công chứng (nhấp chuột phải, rồi chọn Mở).

## Trước đó: 0.8 và 0.8.1

Đây là những gì đã thay đổi trong MarkupCraft 0.8 và 0.8.1, so với 0.7. Điều mới lớn nhất là một đánh dấu có thể là một nhiệm vụ do ai đó, hoặc trợ lý của riêng bạn, thực hiện, và nó tự đóng khi bản vẽ thực sự thay đổi.

### Mới

**Đánh dấu có hành động**

- **Biến một đánh dấu thành nhiệm vụ.** Chọn một hoặc nhiều đánh dấu, mở thẻ {{ui:Nhiệm vụ}} và chọn {{ui:Biến mục đã chọn thành nhiệm vụ}}. Một nhiệm vụ có tiêu đề, một người hoặc trợ lý đã kết nối của bạn để thực hiện, một ngày hạn tùy chọn và một trạng thái; nó giữ vị trí trên tờ và chuỗi phản hồi của mình. Xem [Biến một đánh dấu thành nhiệm vụ](topic:markups-that-act).
- **Nhiệm vụ tự đóng.** Một nhiệm vụ có thể theo dõi bản vẽ bên trong đánh dấu của nó. Mở một bản sửa đổi mới hơn của tờ và chọn {{ui:Kiểm tra ngay}}: nếu các nét trong vùng đó thay đổi nhiều hơn một chút, nhiệm vụ được đánh dấu là Xong, đánh dấu của nó thành Đã hoàn thành, và một ghi chú trong chuỗi nói rõ điều gì đã thay đổi. Một dấu ngày mới, hoặc các nét chỉ dịch chuyển dưới 1.5 điểm, không được tính. Thay vào đó, một nhiệm vụ có thể theo dõi một phần tử mô hình: trợ lý của bạn báo cáo phần tử bằng `tasks_check`, và một báo cáo sau đó khác đi, hoặc một phần tử bị xóa, sẽ đóng nhiệm vụ. Một bước hoàn tác sẽ mở lại nó.
- **Tìm công việc.** Lọc danh sách {{ui:Nhiệm vụ}} theo trạng thái và theo người được giao, bao gồm {{ui:Quá hạn}}; chọn {{ui:Giao cho}}, rồi {{ui:Trợ lý}} để xem những gì đang chờ trợ lý của bạn. Một nhiệm vụ quá ngày hạn hiển thị như một cảnh báo trong bảng Vấn đề. {{ui:CSV}} xuất danh sách. Nhiệm vụ được lưu trong PDF cùng với đánh dấu và đi qua Live như các thuộc tính đánh dấu khác.

**Những thay đổi, dạng danh sách**

- **Liệt kê các thay đổi.** Mở thẻ {{ui:So sánh}}, rồi {{ui:So sánh cả bộ}}, chọn tệp cũ hơn và tệp mới hơn, và chọn {{ui:Liệt kê các thay đổi}}. Danh sách bắt đầu bằng một số đếm, rồi bao gồm từng tờ đã thay đổi, thay đổi lớn nhất đứng đầu: ở đâu trên tờ, lớn cỡ nào (theo đơn vị thực cũng như inch giấy trên tờ đã hiệu chuẩn), các nét được thêm hay bị xóa, có bao nhiêu đánh dấu nằm đó, và những từ nào xuất hiện hoặc biến mất. {{ui:Sao chép danh sách}} đưa nó vào bộ nhớ tạm, còn {{ui:CSV}} ghi mỗi thay đổi thành một hàng. Xem [Liệt kê những thay đổi giữa các bản sửa đổi](topic:what-changed-in-words).

**Ghi chú giọng nói và quyết định**

- **Ghi chú giọng nói.** Trong thẻ {{ui:Ghi chú}}, chọn {{ui:Ghi âm ghi chú giọng nói}}, rồi {{ui:Dừng ghi âm}}; bản ghi âm tự dừng sau hai phút. Ghi chú được ghim ở giữa tờ, bạn kéo nó đến đúng chỗ, và gõ một chú thích trong {{ui:Thuộc tính}}; {{ui:Phát}} trong danh sách sẽ phát nó. Bản ghi âm được lưu bên trong PDF.
- **Quyết định.** {{ui:Ghim một quyết định}} ghi một hoặc hai câu lên tờ. Nếu nó thay thế một quyết định trước đó, hãy chọn quyết định đó trong {{ui:Thay thế}}: quyết định cũ vẫn còn, được đánh dấu Đã thay thế, và trỏ đến quyết định mới. Một bước hoàn tác sẽ lấy nó lại. Xem [Ghim ghi chú giọng nói và quyết định lên tờ](topic:voice-notes-and-decisions).

**Đánh dấu đỏ gửi bản sửa đổi**

- **Gửi và trả lời.** Trong thẻ {{ui:Nhiệm vụ}}, mở {{ui:Đánh dấu đỏ gửi bản sửa đổi}}, nhập bản sửa đổi mà các đánh dấu nhắm tới và chọn {{ui:Xuất tệp redline}}. Bạn nhận được một tệp `.redline.json` với một mục cho mỗi đánh dấu đang mở: tờ, vị trí (dưới dạng phân số của tờ, nên một bản in lại ở kích thước khác vẫn khớp), các từ, tác giả, chuỗi phản hồi và nhiệm vụ của nó. Người vẽ các thay đổi trả lời bằng Đã chấp nhận, Đã từ chối hoặc Xong trong một tệp `.redline-answers.json`; {{ui:Tải tệp trả lời…}} gán trạng thái đó cho từng đánh dấu cùng ghi chú của người vẽ, như một bước hoàn tác. Xem [Gửi đánh dấu cho người vẽ dưới dạng redline](topic:redline-to-revision).

**Trợ lý AI**

- **Thêm công cụ.** Một trợ lý bạn đã kết nối qua CadCraft Studio có thể liệt kê nhiệm vụ (`tasks_list`), tạo hoặc thay đổi một nhiệm vụ (`task_set`), gỡ nhiệm vụ (`task_clear`), kiểm tra một nhiệm vụ với bản sửa đổi mới hơn hoặc một phần tử (`tasks_check`), và đọc danh sách thay đổi thuần văn bản giữa hai bộ bản vẽ đang mở (`revisions_changes`). Nó chỉ nhận các công cụ bạn đã chọn trong công tắc Trợ lý, và mỗi thay đổi là một bước hoàn tác. Xem [Dùng MarkupCraft với trợ lý AI](topic:use-with-ai-assistants).

### Trong mọi ứng dụng

- **Ngôn ngữ.** CadCraft Studio giờ có 54 ngôn ngữ. Mười ngôn ngữ mới: tiếng Litva, tiếng Latvia, tiếng Bosnia, tiếng Marathi, tiếng Telugu, tiếng Albania, tiếng Afrikaans, tiếng Philippines, tiếng Swahili và tiếng Uzbek. Mọi ngôn ngữ không phải tiếng Anh đều là bản dịch máy cho đến khi một người bản ngữ đọc.
- **Thiết bị nhập.** {{ui:Cài đặt}} › {{ui:Chung toàn cục}} › {{ui:Thiết bị nhập}} quyết định bàn di chuột, nút bên của chuột, bút, thao tác chạm bằng ngón tay, chuột 3D, bộ điều khiển trò chơi hoặc bộ điều khiển MIDI sẽ làm gì, cho mọi ứng dụng hoặc chỉ cho ứng dụng này. Cho đến khi bạn thay đổi gì đó, mọi thiết bị vẫn hoạt động như trước. Xem [Dùng bàn di chuột, chuột 3D hoặc bộ điều khiển](common:input-devices).
- **Số hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} có {{ui:Xuống dòng}} (mặc định), {{ui:2 hàng}} và {{ui:1 hàng}}, để bản vẽ có thêm chỗ. Xem [Sắp xếp các bảng](common:arrange-panels).
- **Lưới thuộc tính.** Các trường Kiểu của một đánh dấu dùng lưới chung, với các nhóm có thể thu gọn và các cột nhãn và giá trị.
- **Bảng Vấn đề.** Các cảnh báo từ ứng dụng, chẳng hạn một nhiệm vụ quá hạn, được gom vào một bảng Vấn đề.
- **Live và tiện ích bổ sung.** Các phiên Live được mô tả trong [Làm việc cùng nhau trực tiếp](common:work-together-live); danh sách tiện ích bổ sung theo tài khoản của bạn nằm trong [Tiện ích bổ sung và danh sách tài khoản của bạn](common:addons-basics).
- **Kết nối AI của bạn.** CadCraft Studio là trung tâm cho trợ lý riêng của bạn: kết nối một lần cho cả tám ứng dụng. Bản thân các ứng dụng không có AI riêng.

### Đã sửa trong 0.8.1

- **Studio có thể đổi ngôn ngữ khi đang chạy.** Trước đây, ứng dụng máy tính và các bản đóng gói vẫn ở tiếng Anh. Điều này chưa được thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- Các bản cài Studio 0.8 được đề nghị nâng lên 0.8.1 qua {{ui:Cài đặt}} › {{ui:Cập nhật}}.

### Chưa có trong phiên bản này

- **Chưa ký mã.** Các trình cài đặt Windows và tệp .dmg của macOS chưa có chữ ký. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}. Trên Mac, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. Các bản phát hành trên cửa hàng đang tạm dừng.
- **Kết nối AI của bạn còn dang dở ở một số chỗ.** Kết nối một chạm bên trong Studio, bộ kết nối được lưu trữ cho trợ lý trên trình duyệt, và khóa API riêng của bạn bên trong Studio chưa được hứa cho bản phát hành này. Vòng lặp nhiệm vụ đã được thử, nhưng chưa thử với một trợ lý thật.
- **Kiểm tra nhiệm vụ cần cùng kích thước trang.** Một tờ được in lại ở kích thước khác sẽ không khớp, nên các nhiệm vụ của nó không đóng. Các tờ được ghép theo số tờ, nếu không thì theo vị trí trang.
- **Ghi chú giọng nói chỉ là bản ghi âm.** Không có bản chép lời, và một trợ lý chỉ thấy độ dài, tác giả và chú thích của ghi chú, không thấy âm thanh. Việc ghi âm được thử với micro giả trong trình duyệt không giao diện; micro thật trên điện thoại, máy tính bảng hay laptop vẫn cần kiểm tra.
- **Bản vẽ tính toán và lý do trong PDF** được giữ trong một mục riêng tư của tệp. Một MarkupCraft cũ hơn bỏ qua mục đó và loại bỏ nó lần lưu tiếp theo, nên hãy mở và lưu các tệp như vậy bằng 0.8 trở lên.
- **Phía người vẽ của redline.** CadCraft đọc tệp redline và trả lời nó chưa được xây dựng.
- **Ngôn ngữ khác.** Thanh ứng dụng tiếng Tamil tràn 528 px.

Mọi thứ còn lại nằm trong [Chưa xây dựng](topic:not-built-yet). Về bản phát hành trước đó, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
