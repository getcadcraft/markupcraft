---
title: Có gì mới trong 0.8 và 0.8.1
summary: Markup có thể trở thành nhiệm vụ và tự đóng, danh sách đơn giản về những gì đã thay đổi giữa các bản sửa đổi, ghi chú giọng nói và quyết định trên mặt bằng, tệp redline cho người soạn thảo, và các thay đổi chung của 0.8: thiết bị nhập, số hàng thanh công cụ, Vấn đề, thêm ngôn ngữ.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, nhiệm vụ, task, người được giao, ngày hạn, quá hạn, kiểm tra ngay, đã thay đổi gì, bản sửa đổi, so sánh, ghi chú giọng nói, quyết định, redline, tệp trả lời, người soạn thảo, trợ lý, mcp, vấn đề, ngôn ngữ, thiết bị nhập, bàn di chuột, số hàng thanh công cụ, lưới thuộc tính, cập nhật
from: 40368796
---

Đây là những gì đã thay đổi trong MarkupCraft 0.8 và 0.8.1, so với 0.7. Điểm mới lớn nhất là một markup có thể là nhiệm vụ do ai đó, hoặc trợ lý của chính bạn, thực hiện, và nhiệm vụ đó tự đóng khi bản vẽ thực sự thay đổi.

## Mới

### Markup có thể hành động

- **Biến markup thành nhiệm vụ.** Chọn một hoặc nhiều markup, mở thẻ {{ui:Nhiệm vụ}} và chọn {{ui:Biến mục đã chọn thành nhiệm vụ}}. Nhiệm vụ có tiêu đề, người hoặc trợ lý đã kết nối của bạn để thực hiện, ngày hạn tùy chọn và một trạng thái; nhiệm vụ giữ vị trí trên tờ và chuỗi phản hồi của nó. Xem [Biến markup thành nhiệm vụ](topic:markups-that-act).
- **Nhiệm vụ tự đóng.** Nhiệm vụ có thể theo dõi bản vẽ bên trong markup của nó. Mở bản sửa đổi mới hơn của tờ và chọn {{ui:Kiểm tra ngay}}: nếu các đường trong khu vực đó thay đổi nhiều hơn một chút, nhiệm vụ được đánh dấu Done, markup của nó chuyển thành Completed và một ghi chú trong chuỗi phản hồi cho biết những gì đã thay đổi. Dấu ngày mới, hoặc các đường chỉ dịch chuyển ít hơn 1.5 điểm, không được tính. Thay vào đó, nhiệm vụ có thể theo dõi một cấu kiện mô hình: trợ lý của bạn báo cáo cấu kiện bằng `tasks_check`, và một báo cáo sau đó khác đi, hoặc cấu kiện bị xóa, sẽ đóng nhiệm vụ. Một bước hoàn tác sẽ mở lại nhiệm vụ.
- **Tìm công việc.** Lọc danh sách {{ui:Nhiệm vụ}} theo trạng thái và theo người được giao, bao gồm {{ui:Quá hạn}}; chọn {{ui:Giao cho}}, rồi {{ui:Trợ lý}} để xem những việc đang chờ trợ lý của bạn. Nhiệm vụ quá ngày hạn được hiển thị dưới dạng cảnh báo trong bảng Vấn đề. {{ui:CSV}} xuất danh sách. Nhiệm vụ được lưu trong PDF cùng với markup và được truyền qua Live như các thuộc tính markup khác.

### Những thay đổi, dưới dạng danh sách đơn giản

- **Liệt kê các thay đổi.** Mở thẻ {{ui:So sánh}}, rồi {{ui:So sánh cả bộ}}, chọn tệp cũ hơn và tệp mới hơn, và chọn {{ui:Liệt kê các thay đổi}}. Danh sách bắt đầu bằng một số đếm, rồi liệt kê từng tờ đã thay đổi, thay đổi lớn nhất đứng trước: vị trí trên tờ, mức độ lớn (theo đơn vị thực cũng như inch trên giấy đối với tờ đã hiệu chuẩn), các đường đã thêm hoặc xóa hay không, có bao nhiêu markup nằm ở đó, và những từ nào đã xuất hiện hoặc biến mất. {{ui:Sao chép danh sách}} đưa danh sách vào bộ nhớ tạm, còn {{ui:CSV}} ghi một hàng cho mỗi thay đổi. Xem [Liệt kê những gì đã thay đổi giữa các bản sửa đổi](topic:what-changed-in-words).

### Ghi chú giọng nói và quyết định

- **Ghi chú giọng nói.** Trong thẻ {{ui:Ghi chú}}, chọn {{ui:Ghi âm ghi chú giọng nói}}, rồi {{ui:Dừng ghi âm}}; bản ghi tự dừng sau hai phút. Ghi chú được ghim ở giữa tờ, bạn kéo nó đến đúng vị trí và nhập chú thích trong {{ui:Thuộc tính}}, còn {{ui:Phát}} trong danh sách sẽ phát nó. Bản ghi được lưu trong PDF.
- **Quyết định.** {{ui:Ghim một quyết định}} ghi một hoặc hai câu lên tờ. Nếu quyết định này thay thế một quyết định trước đó, hãy chọn quyết định cũ trong {{ui:Thay thế}}: quyết định cũ vẫn còn, được đánh dấu Replaced, và trỏ đến quyết định mới. Một bước hoàn tác sẽ lấy lại nó. Xem [Ghim ghi chú giọng nói và quyết định lên tờ](topic:voice-notes-and-decisions).

### Redline thành bản sửa đổi

- **Gửi và trả lời.** Trong thẻ {{ui:Nhiệm vụ}}, mở {{ui:Đánh dấu đỏ gửi bản sửa đổi}}, nhập bản sửa đổi mà các markup đang đối chiếu và chọn {{ui:Xuất tệp redline}}. Bạn nhận được tệp `.redline.json` với một mục cho mỗi markup đang mở: tờ, vị trí (dạng phân số của tờ, để bản in lại ở kích thước khác vẫn khớp), từ ngữ, tác giả, chuỗi phản hồi và nhiệm vụ của nó. Người vẽ các thay đổi trả lời Accepted, Rejected hoặc Done trong tệp `.redline-answers.json`; {{ui:Tải tệp trả lời…}} gán trạng thái đó và ghi chú của người soạn thảo cho từng markup, như một bước hoàn tác. Xem [Gửi markup cho người soạn thảo dưới dạng redline](topic:redline-to-revision).

### Trợ lý AI

- **Thêm công cụ.** Trợ lý bạn đã kết nối qua CadCraft Studio có thể liệt kê nhiệm vụ (`tasks_list`), tạo hoặc thay đổi một nhiệm vụ (`task_set`), gỡ nhiệm vụ (`task_clear`), kiểm tra một nhiệm vụ với bản sửa đổi mới hơn hoặc một cấu kiện (`tasks_check`), và đọc danh sách thay đổi dạng đơn giản giữa hai bộ mặt bằng đang mở (`revisions_changes`). Trợ lý chỉ nhận các công cụ bạn đã chọn trong công tắc Assistants, và mỗi thay đổi là một bước hoàn tác. Xem [Dùng MarkupCraft với trợ lý AI](topic:use-with-ai-assistants).

## Trong mọi ứng dụng

- **Ngôn ngữ.** CadCraft Studio hiện có 54 ngôn ngữ. Mười ngôn ngữ mới là: tiếng Litva, tiếng Latvia, tiếng Bosnia, tiếng Marathi, tiếng Telugu, tiếng Albania, tiếng Afrikaans, tiếng Philippines, tiếng Swahili và tiếng Uzbek. Tất cả các ngôn ngữ không phải tiếng Anh đều là bản nháp máy cho đến khi người bản ngữ đọc lại.
- **Thiết bị nhập.** {{ui:Cài đặt}} › {{ui:Chung toàn cục}} › {{ui:Thiết bị nhập}} quy định bàn di chuột, nút bên của chuột, bút, chạm bằng ngón tay, chuột 3D, tay cầm chơi game hoặc bộ điều khiển MIDI sẽ làm gì, cho mọi ứng dụng hoặc chỉ cho ứng dụng này. Cho đến khi bạn thay đổi gì đó, mọi thiết bị vẫn hoạt động như trước. Xem [Dùng bàn di chuột, chuột 3D hoặc bộ điều khiển](common:input-devices).
- **Số hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} có {{ui:Xuống dòng}} (mặc định), {{ui:2 hàng}} và {{ui:1 hàng}}, để bản vẽ có thêm chỗ. Xem [Sắp xếp các bảng](common:arrange-panels).
- **Lưới thuộc tính.** Các trường Style của markup dùng lưới chung, với các nhóm thu gọn được và cột nhãn và cột giá trị.
- **Bảng Vấn đề.** Cảnh báo từ ứng dụng, chẳng hạn một nhiệm vụ quá hạn, được gom vào một bảng Vấn đề.
- **Live và tiện ích bổ sung.** Phiên Live được mô tả trong [Làm việc cùng nhau trực tuyến](common:work-together-live); danh sách tiện ích bổ sung theo tài khoản của bạn nằm trong [Tiện ích bổ sung và danh sách tài khoản của bạn](common:addons-basics).
- **Kết nối AI của bạn.** CadCraft Studio là trung tâm cho trợ lý riêng của bạn: kết nối một lần cho cả tám ứng dụng. Bản thân các ứng dụng không có AI riêng.

## Đã sửa trong 0.8.1

- **Studio có thể đổi ngôn ngữ khi đang chạy.** Trước đây, ứng dụng máy tính và các bản đóng gói vẫn ở tiếng Anh. Điều này chưa được kiểm tra trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- Các bản cài đặt Studio 0.8 được cung cấp bản 0.8.1 qua {{ui:Cài đặt}} › {{ui:Cập nhật}}.

## Chưa có trong phiên bản này

- **Chưa ký mã.** Trình cài đặt Windows và tệp .dmg macOS chưa có chữ ký. Trên Windows, nếu SmartScreen chặn trình cài đặt, hãy chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}. Trên Mac, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. Các bản phát hành trên cửa hàng đang tạm dừng.
- **Kết nối AI của bạn vẫn chưa hoàn thiện ở một số chỗ.** Kết nối một cú nhấp trong Studio, bộ kết nối lưu trữ cho trợ lý trình duyệt và khóa API riêng trong Studio chưa được hứa cho bản phát hành này. Vòng lặp nhiệm vụ đã được kiểm tra, nhưng chưa kiểm tra với trợ lý thật.
- **Kiểm tra nhiệm vụ cần cùng kích thước trang.** Một tờ được in lại ở kích thước khác sẽ không khớp, nên nhiệm vụ của nó không đóng. Các tờ được ghép theo số tờ, nếu không thì theo vị trí trang.
- **Ghi chú giọng nói chỉ là bản ghi âm.** Không có bản chép lời, và trợ lý chỉ thấy độ dài, tác giả và chú thích của ghi chú, không nghe được âm thanh. Việc ghi âm đã được thử với micro giả trong trình duyệt không giao diện; micro thật trên điện thoại, máy tính bảng hay máy tính xách tay vẫn cần kiểm tra.
- **Bảng tính và lý do trong PDF** được lưu trong một mục riêng của tệp. MarkupCraft cũ hơn bỏ qua mục đó và xóa nó lần lưu tiếp theo, nên hãy mở và lưu tệp như vậy bằng 0.8 trở lên.
- **Phía người soạn thảo của redline.** CadCraft đọc tệp redline và trả lời nó hiện chưa được xây dựng.
- **Các ngôn ngữ khác.** Thanh ứng dụng tiếng Tamil bị tràn 528 px.

Mọi thứ khác có trong [Chưa xây dựng](topic:not-built-yet). Về bản phát hành trước đó, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
